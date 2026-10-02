"""Render a generated .docx to a PNG page-flow preview (A4 width, real styles)."""
import sys, zipfile, re, os, base64, subprocess, tempfile
import xml.etree.ElementTree as ET

W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
A = 'http://schemas.openxmlformats.org/drawingml/2006/main'
CHROME = '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell'


def q(t):
    return (t or '').replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def runs_html(el, rels, z):
    out = []
    for r in el.findall('{%s}r' % W):
        rpr = r.find('{%s}rPr' % W)
        st = []
        if rpr is not None:
            if rpr.find('{%s}b' % W) is not None: st.append('font-weight:700')
            if rpr.find('{%s}i' % W) is not None: st.append('font-style:italic')
            c = rpr.find('{%s}color' % W)
            if c is not None: st.append('color:#' + c.get('{%s}val' % W))
            s = rpr.find('{%s}sz' % W)
            if s is not None: st.append('font-size:%gpt' % (int(s.get('{%s}val' % W)) / 2))
        txt = ''.join(t.text or '' for t in r.findall('{%s}t' % W))
        if txt:
            out.append('<span style="%s">%s</span>' % (';'.join(st), q(txt)))
        for bl in r.iter('{%s}blip' % A):
            rid = bl.get('{%s}embed' % R)
            tgt = rels[rid]
            data = base64.b64encode(z.read('word/' + tgt)).decode()
            ext = r.find('.//{http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing}extent')
            wpx = int(ext.get('cx')) / 914400 * 96 if ext is not None else 600
            out.append('<img src="data:image/png;base64,%s" style="width:%gpx;display:block;'
                       'margin:0 auto">' % (data, wpx))
    return ''.join(out)


def para_html(p, rels, z):
    ppr = p.find('{%s}pPr' % W)
    st = ['margin:0']
    if ppr is not None:
        sp = ppr.find('{%s}spacing' % W)
        if sp is not None:
            st.append('margin-top:%gpx' % (int(sp.get('{%s}before' % W, 0)) / 20 * 96 / 72))
            st.append('margin-bottom:%gpx' % (int(sp.get('{%s}after' % W, 0)) / 20 * 96 / 72))
        ind = ppr.find('{%s}ind' % W)
        if ind is not None:
            st.append('margin-left:%gpx' % (int(ind.get('{%s}left' % W, 0)) / 20 * 96 / 72))
        shd = ppr.find('{%s}shd' % W)
        if shd is not None:
            st.append('background:#%s;padding:5px 4px' % shd.get('{%s}fill' % W))
        jc = ppr.find('{%s}jc' % W)
        if jc is not None:
            st.append('text-align:' + jc.get('{%s}val' % W))
        if ppr.find('{%s}numPr' % W) is not None:
            st.append('margin-left:34px;list-style:none')
    inner = runs_html(p, rels, z)
    bullet = '<span style="color:#c67b3a">▪ </span>' if (
        ppr is not None and ppr.find('{%s}numPr' % W) is not None) else ''
    return '<p style="%s">%s%s</p>' % (';'.join(st), bullet, inner or '&nbsp;')


def tbl_html(t, rels, z):
    fill = None
    shd = t.find('.//{%s}tcPr/{%s}shd' % (W, W))
    if shd is not None: fill = shd.get('{%s}fill' % W)
    rows = []
    for tr in t.findall('{%s}tr' % W):
        cells = []
        for tc in tr.findall('{%s}tc' % W):
            f = tc.find('{%s}tcPr/{%s}shd' % (W, W))
            bg = '#' + f.get('{%s}fill' % W) if f is not None else 'transparent'
            body = ''.join(para_html(p, rels, z) for p in tc.findall('{%s}p' % W))
            cells.append('<td style="background:%s;border:1px solid #bbcbd2;padding:6px 9px;'
                         'vertical-align:top">%s</td>' % (bg, body))
        rows.append('<tr>%s</tr>' % ''.join(cells))
    return ('<table style="width:100%%;border-collapse:collapse;margin:8px 0">%s</table>'
            % ''.join(rows))


def main(path, out, limit=None, skip=0):
    z = zipfile.ZipFile(path)
    rels = {}
    for c in ET.fromstring(z.read('word/_rels/document.xml.rels')):
        rels[c.get('Id')] = c.get('Target')
    body = ET.fromstring(z.read('word/document.xml')).find('{%s}body' % W)
    parts = []
    n = 0
    for el in body:
        tag = el.tag.split('}')[1]
        if tag == 'p':
            n += 1
            if n <= skip: continue
            parts.append(para_html(el, rels, z))
        elif tag == 'tbl':
            n += 1
            if n <= skip: continue
            parts.append(tbl_html(el, rels, z))
        if limit and n >= skip + limit: break
    html = ('<!doctype html><meta charset="utf-8">'
            '<style>body{margin:0;background:#8d949b;font-family:"DejaVu Sans",sans-serif}'
            '.pg{width:794px;background:#fff;margin:0 auto;padding:36px 48px;'
            'box-sizing:border-box}</style>'
            '<div class="pg">%s</div>' % ''.join(parts))
    with tempfile.NamedTemporaryFile('w', suffix='.html', delete=False) as f:
        f.write(html); src = f.name
    subprocess.run([CHROME, '--headless', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
                    '--force-device-scale-factor=1', '--window-size=794,1400',
                    '--screenshot=' + out, '--virtual-time-budget=4000', 'file://' + src],
                   capture_output=True, timeout=180)
    os.unlink(src)
    print('wrote', out)


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2],
         int(sys.argv[3]) if len(sys.argv) > 3 else None,
         int(sys.argv[4]) if len(sys.argv) > 4 else 0)
