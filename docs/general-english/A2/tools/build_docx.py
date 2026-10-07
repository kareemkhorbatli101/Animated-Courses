#!/usr/bin/env python3
"""Markdown -> DOCX -> PDF, to the measured source typography.

The reference.docx is built FROM the source book, so styles, fonts, page size
and section properties are its own. This script inserts the figures at the size
the fit-box law gives, then post-processes document.xml for the things pandoc
does not do: table borders on all six edges, centred figure paragraphs, keepNext
on headings, docProps, and the approved page-number footer.
"""
from __future__ import annotations
import json, math, os, re, shutil, subprocess, sys, zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE]
import model as M        # noqa: E402
import docx_style as DS  # noqa: E402
import yaml              # noqa: E402

BW, BH, DPI = 5.625, 1.9791666666666667, 96
FOOTER_ID = 'rIdFooterA2'


def _spec():
    return yaml.safe_load(open(os.path.join(ROOT, 'spec', 'golden.yaml'), encoding='utf-8'))


def box_for(slot):
    fg = _spec()['figures']
    b = fg.get('box_by_slot', {}).get(slot) or fg.get('box_default', {'w': BW, 'h': BH})
    return b['w'], b['h']


def _png_size(p):
    import struct
    with open(p, 'rb') as f:
        return struct.unpack('>II', f.read(24)[16:24])


def placed(png, slot=None):
    w, h = _png_size(png)
    bw, bh = box_for(slot)
    sc = min(bw / w, bh / h)
    return (math.floor(w * sc * DPI + 0.5) / DPI, math.floor(h * sc * DPI + 0.5) / DPI)


def preprocess(md_path, book, unit_num):
    """Insert each figure immediately before its caption, at the computed size."""
    out = []
    for line in open(md_path, encoding='utf-8').read().split('\n'):
        m = M.FIGCAP.match(line.strip())
        if m:
            slot = int(m.group(2))
            png = os.path.join(ROOT, 'figures', book, f'u{unit_num:02d}-{slot}.png')
            if os.path.exists(png):
                # No {width=...} attribute: the gfm reader does not take one and
                # prints it as literal text. The extent is set from the fit-box
                # law in postprocess() instead, which is where it belongs.
                meta_p = png[:-4] + '.json'
                alt = json.load(open(meta_p))['alt'] if os.path.exists(meta_p) else ''
                out.append(f'![{alt}]({png})')
                out.append('')
        out.append(line)
    return '\n'.join(out)


BORDERS = ('<w:tblBorders>'
           '<w:top w:val="single" w:color="auto" w:sz="4"/>'
           '<w:left w:val="single" w:color="auto" w:sz="4"/>'
           '<w:bottom w:val="single" w:color="auto" w:sz="4"/>'
           '<w:right w:val="single" w:color="auto" w:sz="4"/>'
           '<w:insideH w:val="single" w:color="auto" w:sz="4"/>'
           '<w:insideV w:val="single" w:color="auto" w:sz="4"/>'
           '</w:tblBorders>')

FOOTER_XML = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
    '<w:p><w:pPr><w:jc w:val="center"/></w:pPr>'
    '<w:r><w:rPr><w:sz w:val="18"/></w:rPr><w:t xml:space="preserve">{label} · </w:t></w:r>'
    '<w:r><w:fldChar w:fldCharType="begin"/></w:r>'
    '<w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r>'
    '<w:r><w:fldChar w:fldCharType="separate"/></w:r>'
    '<w:r><w:t>1</w:t></w:r>'
    '<w:r><w:fldChar w:fldCharType="end"/></w:r>'
    '</w:p></w:ftr>')


def _add_ppr(p: str, xml: str) -> str:
    """Insert into <w:pPr>, after <w:pStyle> if there is one. The schema fixes
    the order of pPr children, and Word refuses a file that gets it wrong."""
    if '<w:pPr>' not in p:
        return re.sub(r'(<w:p\b[^>]*>)', r'\1<w:pPr>' + xml + '</w:pPr>', p, count=1)
    m = re.search(r'<w:pPr>\s*(<w:pStyle[^>]*/>)?', p)
    return p[:m.end()] + xml + p[m.end():]


def postprocess(docx, title, label):
    """Everything pandoc does not do, driven by spec/typography.yaml."""
    zin = zipfile.ZipFile(docx)
    parts = {n: zin.read(n) for n in zin.namelist()}
    zin.close()

    d = parts['word/document.xml'].decode('utf8')

    # 0a. every image is sized by the law, not by pandoc: fit the PNG into
    #     5.625 x 1.979 in and round each side to a whole 96-DPI pixel.
    rels = parts['word/_rels/document.xml.rels'].decode('utf8')
    target = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="([^"]+)"', rels))
    EMU = 914400

    def fix_extent(m):
        blk = m.group(0)
        rid = re.search(r'r:embed="(rId\d+)"', blk)
        if not rid:
            return blk
        tgt = target.get(rid.group(1), '')
        name = 'word/' + tgt
        if name not in parts:
            return blk
        import struct
        px = struct.unpack('>II', parts[name][16:24])
        mslot = re.search(r'u\d\d-(\d+)\.png$', tgt)
        bw, bh = box_for(int(mslot.group(1)) if mslot else None)
        sc = min(bw / px[0], bh / px[1])
        w = math.floor(px[0] * sc * DPI + 0.5) / DPI
        h = math.floor(px[1] * sc * DPI + 0.5) / DPI
        cx, cy = int(round(w * EMU)), int(round(h * EMU))
        blk = re.sub(r'<wp:extent[^>]*/>', f'<wp:extent cx="{cx}" cy="{cy}"/>', blk)
        blk = re.sub(r'<a:ext[^>]*/>', f'<a:ext cx="{cx}" cy="{cy}"/>', blk)
        return blk
    d = re.sub(r'<w:drawing>.*?</w:drawing>', fix_extent, d, flags=re.S)

    # 0. pandoc adds BodyText/BlockText/Compact/FirstParagraph; the source book
    #    uses ListParagraph and nothing else, and the spec is the source.
    d = re.sub(r'<w:pStyle w:val="(?!ListParagraph")[^"]+"\s*/>', '', d)
    d = re.sub(r'<w:pPr>\s*</w:pPr>', '', d)

    # 0b. a markdown table needs a header row; the source's tables have none, so
    #     an all-empty leading row is dropped rather than shipped blank.
    def drop_empty_header(m):
        tbl = m.group(0)
        rows = re.findall(r'<w:tr\b.*?</w:tr>', tbl, re.S)
        if not rows:
            return tbl
        first = rows[0]
        texts = ''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', first)).strip()
        return tbl.replace(first, '', 1) if not texts else tbl
    d = re.sub(r'<w:tbl>.*?</w:tbl>', drop_empty_header, d, flags=re.S)

    # 1-3. the refined layout: every paragraph classified and dressed, tables
    #      padded and ruled. spec/typography.yaml is the single source for it.
    typo = yaml.safe_load(open(os.path.join(ROOT, 'spec', 'typography.yaml'),
                               encoding='utf-8'))
    d = DS.apply(d, typo)

    # 4. the approved departure: a centred footer carrying the page number
    if '<w:footerReference' not in d:
        d = d.replace('<w:sectPr>',
                      f'<w:sectPr><w:footerReference w:type="default" r:id="{FOOTER_ID}"/>', 1)
    parts['word/footer9.xml'] = FOOTER_XML.format(label=label).encode('utf8')
    rels = parts['word/_rels/document.xml.rels'].decode('utf8')
    if FOOTER_ID not in rels:
        rels = rels.replace('</Relationships>',
                            f'<Relationship Id="{FOOTER_ID}" '
                            'Type="http://schemas.openxmlformats.org/officeDocument/2006/'
                            'relationships/footer" Target="footer9.xml"/></Relationships>')
    parts['word/_rels/document.xml.rels'] = rels.encode('utf8')
    ct = parts['[Content_Types].xml'].decode('utf8')
    if 'footer9.xml' not in ct:
        ct = ct.replace('</Types>',
                        '<Override PartName="/word/footer9.xml" ContentType="application/'
                        'vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/></Types>')
    parts['[Content_Types].xml'] = ct.encode('utf8')

    parts['word/document.xml'] = d.encode('utf8')

    # 5. docProps
    core = parts['docProps/core.xml'].decode('utf8')
    for tag in ('dc:title', 'dc:creator', 'dc:language'):
        core = re.sub(rf'<{tag}\s*/>|<{tag}>.*?</{tag}>', '', core, flags=re.S)
    core = re.sub(r'(<cp:coreProperties[^>]*>)',
                  r'\1' + f'<dc:title>{title}</dc:title>'
                  '<dc:creator>English for Daily Life</dc:creator>'
                  '<dc:language>en-GB</dc:language>', core, count=1)
    parts['docProps/core.xml'] = core.encode('utf8')

    with zipfile.ZipFile(docx, 'w', zipfile.ZIP_DEFLATED) as z:
        for n, b in parts.items():
            z.writestr(n, b)


def build_unit(book, unit_num, with_key=False):
    md = os.path.join(ROOT, 'units', f'{book}-u{unit_num:02d}.md')
    if not os.path.exists(md):
        return None
    tmp = os.path.join(ROOT, 'build', f'.{book}-u{unit_num:02d}.md')
    open(tmp, 'w', encoding='utf-8').write(preprocess(md, book, unit_num))
    out = os.path.join(ROOT, 'build', f'{book}-u{unit_num:02d}.docx')
    subprocess.run(['pandoc', tmp, '-f', 'gfm', '-t', 'docx',
                    '--reference-doc', os.path.join(ROOT, 'build', 'reference.docx'),
                    '-o', out], check=True)
    os.remove(tmp)
    u = M.parse(md)
    postprocess(out, f'Unit {unit_num}: {u.title}', f'Unit {unit_num}')
    subprocess.run(['libreoffice', '--headless', '--convert-to', 'pdf',
                    '--outdir', os.path.join(ROOT, 'build'), out],
                   capture_output=True, timeout=300)
    return out


def write_manifest():
    """SHA-256 of every shipped artefact (check J12)."""
    import hashlib
    man, bd = {}, os.path.join(ROOT, 'build')
    for d, _, fs in os.walk(ROOT):
        if os.path.basename(d) in ('__pycache__', '.git'):
            continue
        for f in fs:
            if not f.endswith(('.docx', '.pdf', '.png')):
                continue
            p = os.path.join(d, f)
            if f.endswith('.docx') and d == bd:
                import zipfile
                with zipfile.ZipFile(p) as z:
                    man[f] = hashlib.sha256(z.read('word/document.xml')).hexdigest()
            else:
                man[os.path.relpath(p, ROOT)] = hashlib.sha256(open(p, 'rb').read()).hexdigest()
    os.makedirs(os.path.join(ROOT, 'reports'), exist_ok=True)
    json.dump(man, open(os.path.join(ROOT, 'reports', 'manifest.json'), 'w'), indent=1)
    return len(man)


if __name__ == '__main__':
    book = sys.argv[1] if len(sys.argv) > 1 else 'a21'
    units = [int(a) for a in sys.argv[2:]] or sorted(
        int(re.search(rf'{book}-u(\d\d)\.md', f).group(1))
        for f in os.listdir(os.path.join(ROOT, 'units'))
        if re.fullmatch(rf'{book}-u\d\d\.md', f))
    for n in units:
        o = build_unit(book, n)
        if o:
            print(f'built {os.path.basename(o)}  {os.path.getsize(o)//1024} KB')
    print(f'manifest: {write_manifest()} artefacts hashed')
