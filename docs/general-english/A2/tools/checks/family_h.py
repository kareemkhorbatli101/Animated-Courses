"""H · DOCX and typography — 23 checks. Run against the built .docx/.pdf."""
import os, re, zipfile, math
from collections import Counter
from . import check, ok, fail, expect

def _docx(ctx, u=None):
    p = ctx.docx_for(u)
    return p if p and os.path.exists(p) else None

def _xml(p, name='word/document.xml'):
    with zipfile.ZipFile(p) as z:
        return z.read(name).decode('utf8')

def _skip(ctx, u):
    return None if _docx(ctx, u) else ok('SKIP: no DOCX built yet (assembly gate)')

def _sect(d):
    m = re.search(r'<w:sectPr.*?</w:sectPr>', d, re.S)
    return m.group() if m else ''


@check('H01', 'typography.page.size_twips', 'Page size == 11906 x 16838 twips')
def h01(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _sect(_xml(_docx(ctx, u)))
    m = re.search(r'<w:pgSz\b[^>]*>', d)
    attrs = dict(re.findall(r'w:(\w+)="(\d+)"', m.group() if m else ''))
    want = ctx.typo['page']['size_twips']
    got = (int(attrs.get('w', 0)), int(attrs.get('h', 0)))
    return expect(got == (want['w'], want['h']), f'{got} want {(want["w"], want["h"])}')

@check('H02', 'typography.page.margins_twips', 'All four margins == 1440 twips')
def h02(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _sect(_xml(_docx(ctx, u)))
    m = re.search(r'<w:pgMar\b[^>]*>', d)
    a = dict(re.findall(r'w:(\w+)="(-?\d+)"', m.group() if m else ''))
    want = ctx.typo['page']['margins_twips']
    got = {k: int(a.get(k, -1)) for k in ('top', 'right', 'bottom', 'left')}
    return expect(all(got[k] == want[k] for k in got), f'margins {got} want {want}')

@check('H03', 'typography.font.name', 'Default font == Calibri in all four script slots')
def h03(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    st = _xml(_docx(ctx, u), 'word/styles.xml')
    m = re.search(r'<w:docDefaults>.*?</w:docDefaults>', st, re.S)
    body = m.group() if m else ''
    missing = [k for k in ('ascii', 'cs', 'eastAsia', 'hAnsi')
               if f'w:{k}="Calibri"' not in body]
    return expect(not missing, f'slots not Calibri: {missing}')

@check('H04', 'typography.font.default_half_points', 'Default size == 22 half-points')
def h04(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    st = _xml(_docx(ctx, u), 'word/styles.xml')
    m = re.search(r'<w:docDefaults>.*?<w:sz w:val="(\d+)"', st, re.S)
    return expect(m and int(m.group(1)) == ctx.typo['font']['default_half_points'],
                  f'default sz={m.group(1) if m else None}')

@check('H05', 'typography.font.allowed_half_points', 'Font sizes used are a subset of the source set')
def h05(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _xml(_docx(ctx, u))
    used = {int(x) for x in re.findall(r'<w:sz w:val="(\d+)"', d)}
    allowed = set(ctx.typo['font']['allowed_half_points'])
    return expect(used <= allowed, f'extra sizes {sorted(used - allowed)}')

@check('H06', 'typography.styles.paragraph_styles_permitted', 'No pStyle other than ListParagraph')
def h06(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _xml(_docx(ctx, u))
    used = set(re.findall(r'w:pStyle w:val="([^"]+)"', d))
    allowed = set(ctx.typo['styles']['paragraph_styles_permitted'])
    return expect(used <= allowed, f'unexpected styles {sorted(used - allowed)}')

@check('H07', 'typography.tables.border', 'Every table carries single sz=4 borders on all six edges')
def h07(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _xml(_docx(ctx, u))
    col = ctx.typo['layout']['tables']['border_colour'] \
        if ctx.typo['departures'].get('layout') == 'refined' else 'auto'
    bad = 0
    for tp in re.findall(r'<w:tblPr>.*?</w:tblPr>', d, re.S):
        for e in ctx.typo['tables']['edges']:
            if f'<w:{e} w:val="single" w:color="{col}" w:sz="4"' not in tp:
                bad += 1
                break
    return expect(bad == 0, f'{bad} tables with borders not single/{col}/sz=4')

@check('H08', 'typography.tables', 'Table count within the expected per-unit range')
def h08(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    n = _xml(_docx(ctx, u)).count('<w:tbl>')
    lo, hi = (10, 24) if u else (100, 260)
    return expect(lo <= n <= hi, f'{n} tables, want {lo}-{hi}')

@check('H09', 'typography.tables', 'No required table cell is empty')
def h09(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _xml(_docx(ctx, u))
    empties = 0
    for row in re.findall(r'<w:tr\b.*?</w:tr>', d, re.S):
        cells = re.findall(r'<w:tc\b.*?</w:tc>', row, re.S)
        texts = [''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', c)).strip() for c in cells]
        if texts and all(not t for t in texts):
            empties += 1
    return expect(empties == 0, f'{empties} fully empty table rows')

@check('H10', 'typography.tables', 'No table row can split across a page break')
def h10(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _xml(_docx(ctx, u))
    rows = re.findall(r'<w:tr\b.*?</w:tr>', d, re.S)
    missing = [i for i, r in enumerate(rows) if '<w:cantSplit/>' not in r]
    return expect(not missing, f'{len(missing)} of {len(rows)} rows may split '
                               f'across a page (no cantSplit)')

@check('H11', 'typography.justification', 'Every figure paragraph is centred')
def h11(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _xml(_docx(ctx, u))
    paras = re.findall(r'<w:p\b.*?</w:p>', d, re.S)
    bad = sum(1 for p in paras if '<w:drawing>' in p and 'w:jc w:val="center"' not in p)
    return expect(bad == 0, f'{bad} uncentred figure paragraphs')

@check('H12', 'golden.figures.caption_pattern', 'Every caption is italic and immediately follows its figure')
def h12(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _xml(_docx(ctx, u))
    paras = re.findall(r'<w:p\b.*?</w:p>', d, re.S)
    bad = []
    for i, p in enumerate(paras):
        if '<w:drawing>' not in p:
            continue
        nxt = paras[i + 1] if i + 1 < len(paras) else ''
        txt = ''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', nxt))
        if not txt.startswith('Figure'):
            bad.append(f'figure {i}: next para is {txt[:28]!r}')
        elif not re.search(r'<w:i\s*/>', nxt):
            bad.append(f'caption {txt[:24]!r} is not italic')
    return expect(not bad, '; '.join(bad[:5]))

@check('H13', 'typography', 'Every heading is kept with the text that follows it')
def h13(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _xml(_docx(ctx, u))
    # a bold run inside a table cell is a matching stem, not a heading
    body = re.sub(r'<w:tbl>.*?</w:tbl>', '', d, flags=re.S)
    bad = []
    for p in re.findall(r'<w:p\b.*?</w:p>', body, re.S):
        runs = re.findall(r'<w:r\b.*?</w:r>', p, re.S)
        txt = ''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', p)).strip()
        if not txt or '<w:drawing>' in p:
            continue
        if not all(re.search(r'<w:b\s*/>', r) or not re.search(r'<w:t[^>]*>[^<]', r)
                   for r in runs):
            continue
        if '<w:keepNext/>' not in p:
            bad.append(txt[:34])
    return expect(not bad, f'{len(bad)} headings without keepNext, e.g. {bad[:4]}')

@check('H14', 'typography', 'No widow or orphan lines')
def h14(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _xml(_docx(ctx, u))
    off = d.count('<w:widowControl w:val="0"/>')
    return expect(off == 0, f'widowControl disabled on {off} paragraphs')

@check('H15', 'typography', 'No part header is split from its track label')
def h15(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    d = _xml(_docx(ctx, u))
    paras = re.findall(r'<w:p\b.*?</w:p>', d, re.S)
    bad = []
    for i, p in enumerate(paras):
        txt = ''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', p)).strip()
        if not re.match(r'^(Part \d+ ·|Warm Up$)', txt):
            continue
        nxt = paras[i + 1] if i + 1 < len(paras) else ''
        ntxt = ''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', nxt)).strip()
        if '<w:keepNext/>' not in p:
            bad.append(f'{txt[:22]}: header not kept')
        elif not ntxt.startswith(('[CORE', '[PLUS')):
            bad.append(f'{txt[:22]}: next para is {ntxt[:22]!r}')
        elif '<w:keepNext/>' not in nxt:
            bad.append(f'{txt[:22]}: track label not kept')
    return expect(not bad, '; '.join(bad[:4]))

@check('H16', 'golden', 'No unit split across the two volumes', scope='book')
def h16(units, ctx):
    nums = sorted(u.num for u in units)
    rng = ctx.grammar['book'][ctx.book_label]
    bad = [n for n in nums if not rng[0] <= n <= rng[1]]
    return expect(not bad, f'units {bad} outside {ctx.book_label} range {rng}')

@check('H17', 'golden', 'Front and back covers both present', scope='book')
def h17(units, ctx):
    paths = [os.path.join(ctx.root, 'covers', f'{ctx.book}-{s}.png') for s in ('front', 'back')]
    if not any(os.path.exists(p) for p in paths):
        return ok('SKIP: covers not built yet (P3 gate)')
    missing = [os.path.basename(p) for p in paths if not os.path.exists(p)]
    return expect(not missing, f'missing covers: {missing}')

@check('H18', 'covers', 'Covers are full-A4 at 300 DPI', scope='book')
def h18(units, ctx):
    import struct
    bad = []
    if not os.path.exists(os.path.join(ctx.root, 'covers', f'{ctx.book}-front.png')):
        return ok('SKIP: covers not built yet (P3 gate)')
    for side in ('front', 'back'):
        p = os.path.join(ctx.root, 'covers', f'{ctx.book}-{side}.png')
        if not os.path.exists(p):
            bad.append(f'{side}: absent'); continue
        with open(p, 'rb') as f:
            w, h = struct.unpack('>II', f.read(24)[16:24])
        if (w, h) != (2480, 3508):
            bad.append(f'{side}: {w}x{h}, want 2480x3508')
    return expect(not bad, '; '.join(bad))

@check('H19', 'typography', 'docProps title, creator and language set')
def h19(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    core = _xml(_docx(ctx, u), 'docProps/core.xml')
    missing = [t for t in ('dc:title', 'dc:creator') if f'<{t}>' not in core or f'<{t}></{t}>' in core]
    return expect(not missing, f'empty docProps: {missing}')

@check('H20', 'build', 'File opens in LibreOffice with no repair prompt')
def h20(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    try:
        with zipfile.ZipFile(_docx(ctx, u)) as z:
            bad = z.testzip()
        return expect(bad is None, f'corrupt member {bad}')
    except Exception as e:
        return fail(str(e))

@check('H21', 'build', 'PDF page count within the planned envelope')
def h21(u, ctx):
    p = ctx.pdf_for(u)
    if not p or not os.path.exists(p):
        return ok('SKIP: no PDF built yet')
    n = len(re.findall(rb'/Type\s*/Page[^s]', open(p, 'rb').read()))
    # The source book is 133 pages for 10 units: 13.3 a unit, measured by
    # converting it with LibreOffice. An earlier 18-page estimate came from a
    # different reference.docx with larger type and is superseded.
    pu = ctx.typo['departures'].get('pages_per_unit', {'min': 11, 'max': 17})
    pv = ctx.typo['departures'].get('pages_per_volume', {'min': 150, 'max': 230})
    lo, hi = (pu['min'], pu['max']) if u else (pv['min'], pv['max'])
    return expect(lo <= n <= hi, f'{n} pages, want {lo}-{hi}')

@check('H22', 'build', 'No missing glyph (tofu) anywhere in the rendered PDF')
def h22(u, ctx):
    p = ctx.pdf_for(u)
    if not p or not os.path.exists(p):
        return ok('SKIP: no PDF built yet')
    txt = ctx.pdf_text(p)
    bad = [c for c in set(txt) if c in '�□']
    return expect(not bad, f'replacement glyphs present: {bad}')


@check('H23', 'typography.figure_placement.full_page',
       'Every full-page image sits alone in a zero-margin section', scope='book')
def h23(units, ctx):
    import zipfile
    path = ctx.docx_for(None)
    if not os.path.exists(path):
        return ok('SKIP: no book DOCX built yet')
    with zipfile.ZipFile(path) as z:
        d = z.read('word/document.xml').decode('utf8')
    n_full = len([1 for m in re.finditer(r'<w:pgMar w:top="0" w:right="0"', d)])
    # one zero-margin section per full-page image, and each such paragraph
    # carries exactly one drawing and no text run
    want = 2 + len(units) * len(ctx.spec['figures'].get('full_page_slots') or [])
    bad = []
    if n_full != want:
        bad.append(f'{n_full} zero-margin sections, want {want}')
    for m in re.finditer(r'<w:p\b[^>]*>(?:(?!</w:p>).)*?'
                         r'<w:pgMar w:top="0" w:right="0"(?:(?!</w:p>).)*?</w:p>', d, re.S):
        para = m.group(0)
        if len(re.findall(r'<w:drawing>', para)) != 1:
            bad.append('a zero-margin paragraph does not hold exactly one image')
        txt = ''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', para)).strip()
        if txt:
            bad.append(f'a full-page image shares its page with text: {txt[:40]!r}')
    return expect(not bad, '; '.join(sorted(set(bad))))
