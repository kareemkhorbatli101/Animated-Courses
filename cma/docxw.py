"""OOXML writer for the TOEFL 2026 B1 course."""
import os, zipfile, hashlib

SKEL = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'skel')

NS = ('xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" '
      'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" '
      'xmlns:o="urn:schemas-microsoft-com:office:office" '
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
      'xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" '
      'xmlns:v="urn:schemas-microsoft-com:vml" '
      'xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" '
      'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" '
      'xmlns:w10="urn:schemas-microsoft-com:office:word" '
      'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
      'xmlns:w14="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
      'xmlns:w15="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
      'xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" '
      'xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" '
      'xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" '
      'xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"')

SECT_N = ('<w:sectPr><w:pgSz w:w="11906" w:h="16838" w:orient="portrait"/>'
          '<w:pgMar w:top="900" w:right="1000" w:bottom="900" w:left="1000" '
          'w:header="708" w:footer="708" w:gutter="0"/><w:pgNumType/>'
          '<w:docGrid w:linePitch="360"/></w:sectPr>')
SECT_0 = ('<w:sectPr><w:pgSz w:w="11906" w:h="16838" w:orient="portrait"/>'
          '<w:pgMar w:top="0" w:right="0" w:bottom="0" w:left="0" '
          'w:header="708" w:footer="708" w:gutter="0"/><w:pgNumType/>'
          '<w:docGrid w:linePitch="360"/></w:sectPr>')

# ---- colours (hex, no #) ----
INDIGO, INDIGO_D, PERI = '353A7C', '23265A', '8186EF'
BLUE, AMBER, TEAL, PLUM = '2B6CB0', 'C9762E', '1F7A6A', '6D3F7E'
INK, GREY, RULE, SOFT = '232733', '6B7280', 'DFE3EE', 'F5F7FC'
GREEN, RED, CREAM = '2E8B62', 'C0483F', 'FBFAF6'
SKILLC = {'reading': BLUE, 'listening': AMBER, 'speaking': TEAL, 'writing': PLUM}


def _borders(col, sz=6):
    return ('<w:tblBorders>' + ''.join(
        '<w:%s w:val="single" w:color="%s" w:sz="%d"/>' % (s, col, sz)
        for s in ('top', 'left', 'bottom', 'right', 'insideH', 'insideV')) + '</w:tblBorders>')


def tblpr(col, sz=6, fixed=False):
    lay = '<w:tblLayout w:type="fixed"/>' if fixed else ''
    return ('<w:tblPr><w:tblW w:type="pct" w:w="100%"/>' + lay
            + _borders(col, sz) + '</w:tblPr>')


def tcpr(fill=None, pad=110, w=None):
    shd = '<w:shd w:fill="%s" w:val="clear"/>' % fill if fill else ''
    # w:type="pct" is measured in fiftieths of a percent
    if w:
        shd = '<w:tcW w:type="pct" w:w="%d"/>' % (w * 50) + shd
    return ('<w:tcPr>%s<w:tcMar><w:top w:type="dxa" w:w="%d"/><w:left w:type="dxa" w:w="%d"/>'
            '<w:bottom w:type="dxa" w:w="%d"/><w:right w:type="dxa" w:w="%d"/></w:tcMar></w:tcPr>'
            % (shd, pad - 30, pad + 30, pad - 30, pad + 30))


def esc(t):
    return t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def run(text, b=False, i=False, color=None, sz=21, mono=False, u=False):
    rpr = ''
    if mono:
        rpr += '<w:rFonts w:ascii="DejaVu Sans Mono" w:hAnsi="DejaVu Sans Mono"/>'
    if b:
        rpr += '<w:b/><w:bCs/>'
    if i:
        rpr += '<w:i/><w:iCs/>'
    if u:
        rpr += '<w:u w:val="single"/>'
    if color:
        rpr += '<w:color w:val="%s"/>' % color
    rpr += '<w:sz w:val="%d"/><w:szCs w:val="%d"/>' % (sz, sz)
    return ('<w:r><w:rPr>%s</w:rPr><w:t xml:space="preserve">%s</w:t></w:r>'
            % (rpr, esc(text)))


def para(runs, ppr=''):
    return '<w:p>%s%s</w:p>' % ('<w:pPr>%s</w:pPr>' % ppr if ppr else '', ''.join(runs))


class Doc:
    def __init__(self, title='TOEFL iBT Preparation Course', subject=''):
        self.body = []
        self.images = []
        self._seen = {}
        self._rid = 0
        self.title = title
        self.subject = subject

    # ---------- images ----------
    def add_image(self, png_bytes, px_w, px_h, half=False, cover=False):
        key = hashlib.sha1(png_bytes).hexdigest()
        if key in self._seen:
            rid = self._seen[key]
        else:
            self._rid += 1
            rid = 'rId%d' % (100 + self._rid)
            self.images.append((rid, key + '.png', png_bytes))
            self._seen[key] = rid
        if cover:
            cx, cy = 7562850, 10687050
        else:
            cx = 2857500 if half else 5734050
            cy = int(round(cx * px_h / px_w / 25) * 25)
        return rid, cx, cy

    def figure(self, png_bytes, px_w, px_h, caption=None, half=False, cover=False):
        rid, cx, cy = self.add_image(png_bytes, px_w, px_h, half, cover)
        drawing = (
            '<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0">'
            '<wp:extent cx="%d" cy="%d"/><wp:effectExtent t="0" r="0" b="0" l="0"/>'
            '<wp:docPr id="1" name="" descr="" title=""/><wp:cNvGraphicFramePr>'
            '<a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/>'
            '</wp:cNvGraphicFramePr>'
            '<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">'
            '<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">'
            '<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">'
            '<pic:nvPicPr><pic:cNvPr id="0" name="" descr=""/><pic:cNvPicPr>'
            '<a:picLocks noChangeAspect="1" noChangeArrowheads="1"/></pic:cNvPicPr></pic:nvPicPr>'
            '<pic:blipFill><a:blip r:embed="%s" cstate="none"/><a:srcRect/>'
            '<a:stretch><a:fillRect/></a:stretch></pic:blipFill>'
            '<pic:spPr bwMode="auto"><a:xfrm><a:off x="0" y="0"/><a:ext cx="%d" cy="%d"/></a:xfrm>'
            '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic>'
            '</a:graphicData></a:graphic></wp:inline></w:drawing></w:r>'
            % (cx, cy, rid, cx, cy))
        if cover:
            self.body.append(para([drawing], '<w:spacing w:after="0" w:before="0"/>'))
        else:
            self.body.append(para([drawing], '<w:spacing w:after="40" w:before="90"/><w:jc w:val="center"/>'))
        if caption:
            self.body.append(para([run(caption, i=True, color=GREY, sz=17)],
                                  '<w:spacing w:after="130"/><w:jc w:val="center"/>'))

    # ---------- headings and text ----------
    def unit_title(self, t):
        self.body.append(para([run(t, b=True, color=INDIGO, sz=40)],
                              '<w:spacing w:after="20" w:before="60"/>'))

    def strapline(self, t):
        self.body.append(para([run(t, i=True, color=INDIGO_D, sz=22)],
                              '<w:spacing w:after="8"/>'))

    def cefr(self, t):
        self.body.append(para([run(t, color=GREY, sz=20)], '<w:spacing w:after="130"/>'))

    def partbar(self, title, tag, skill=None):
        col = SKILLC.get(skill, INDIGO)
        self.body.append(para(
            [run('  ' + title, b=True, color='FFFFFF', sz=26),
             run('    ' + tag, b=True, color='FFFFFF', sz=16)],
            '<w:shd w:fill="%s" w:val="clear"/><w:spacing w:after="80" w:before="230"/>' % col))

    def h3(self, t, color=None):
        self.body.append(para([run(t, b=True, color=color or INDIGO_D, sz=24)],
                              '<w:spacing w:after="40" w:before="130"/>'))

    def body_p(self, t, sz=21, i=False):
        self.body.append(para([run(t, sz=sz, i=i)], '<w:spacing w:after="60"/>'))

    def ex(self, t, skill=None):
        self.body.append(para([run(t, b=True, i=True, color=SKILLC.get(skill, INDIGO), sz=21)],
                              '<w:spacing w:after="40" w:before="100"/>'))

    def item(self, label, text, ind=200):
        self.body.append(para([run(label, b=True, sz=21), run(text, sz=21)],
                              '<w:spacing w:after="66"/><w:ind w:left="%d"/>' % ind))

    def items(self, seq, start=1):
        for k, t in enumerate(seq):
            self.item('%d.  ' % (start + k), t)

    def bullets(self, seq, sz=20):
        for t in seq:
            self.body.append(para([run(t, sz=sz)],
                                  '<w:pStyle w:val="ListParagraph"/><w:numPr><w:ilvl w:val="0"/>'
                                  '<w:numId w:val="1"/></w:numPr><w:spacing w:after="24"/>'))

    def lines(self, n=4, ind=360):
        for _ in range(n):
            self.body.append(para([run('_' * 58, sz=21)],
                                  '<w:spacing w:after="66"/><w:ind w:left="%d"/>' % ind))

    def blank(self):
        self.body.append('<w:p/>')

    def page_break_section(self, zero=False):
        self.body.append('<w:p><w:pPr>%s</w:pPr></w:p>' % (SECT_0 if zero else SECT_N))

    # ---------- exam furniture ----------
    def mcq(self, n, stem, options):
        """A four-option item exactly as the 2026 paper lays it out."""
        self.body.append(para([run('%d.  ' % n, b=True, sz=21), run(stem, b=True, sz=21)],
                              '<w:spacing w:after="30" w:before="70"/><w:ind w:left="200"/>'))
        for k, opt in enumerate(options):
            self.body.append(para(
                [run('(%s)  ' % 'ABCD'[k], sz=21), run(opt, sz=21)],
                '<w:spacing w:after="18"/><w:ind w:left="560"/>'))

    def gapped(self, text, sz=21):
        """The Complete the Words paragraph: dashes stand for missing letters."""
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                         '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                         % (tblpr(BLUE), tcpr(SOFT, 140),
                            para([run(text, sz=sz)], '<w:spacing w:after="0" w:line="320" w:lineRule="auto"/>')))
        self.blank()

    def passage(self, title, paragraphs, words=None):
        cells = [para([run(title, b=True, color=BLUE, sz=24)],
                      '<w:spacing w:after="70"/><w:jc w:val="center"/>')]
        for p in paragraphs:
            cells.append(para([run(p, sz=21)],
                              '<w:spacing w:after="110" w:line="300" w:lineRule="auto"/>'))
        if words:
            cells.append(para([run('[%d words]' % words, i=True, color=GREY, sz=17)],
                              '<w:jc w:val="right"/>'))
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                         '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                         % (tblpr(RULE), tcpr(None, 150), ''.join(cells)))
        self.blank()

    def script(self, turns, label=None):
        if label:
            self.body.append(para([run(label, b=True, i=True, color=AMBER, sz=20)],
                                  '<w:spacing w:after="40" w:before="80"/>'))
        for sp, t in turns:
            self.body.append(para([run(sp + ': ', b=True, color=AMBER, sz=20), run(t, sz=20)],
                                  '<w:spacing w:after="50"/><w:ind w:left="200"/>'))

    def skillbox(self, title, lines, skill='reading'):
        col = SKILLC.get(skill, INDIGO)
        cells = [para([run('SKILL  ·  ' + title, b=True, color=col, sz=21)],
                      '<w:spacing w:after="50"/>')]
        for ln in lines:
            cells.append(para([run(ln, sz=20)],
                              '<w:pStyle w:val="ListParagraph"/><w:numPr><w:ilvl w:val="0"/>'
                              '<w:numId w:val="1"/></w:numPr><w:spacing w:after="24"/>'))
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                         '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                         % (tblpr(col), tcpr(SOFT, 140), ''.join(cells)))
        self.blank()

    def tip(self, t):
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                         '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                         % (tblpr(PERI), tcpr('EEEFFC', 140),
                            para([run('ADAPTIVE TIP   ', b=True, color=INDIGO, sz=19),
                                  run(t, sz=20)])))
        self.blank()

    def watchout(self, t):
        self.body.append(para([run('  Watch out!  ', b=True, color=RED, sz=20), run(t + '  ', sz=20)],
                              '<w:shd w:fill="FDEEEC" w:val="clear"/><w:spacing w:after="100" w:before="60"/>'))

    def wordlist(self, pairs, ncol=2, accent=INDIGO):
        """Vocabulary: word | B1 gloss, laid out in columns."""
        rows = []
        per = (len(pairs) + ncol - 1) // ncol
        for r in range(per):
            cells = []
            for c in range(ncol):
                k = c * per + r
                if k < len(pairs):
                    w, gloss = pairs[k]
                    cells.append('<w:tc>%s%s</w:tc>' % (
                        tcpr(None, 90),
                        para([run(w + '  ', b=True, color=accent, sz=19), run(gloss, sz=19)])))
                else:
                    cells.append('<w:tc>%s%s</w:tc>' % (tcpr(None, 90), para([run('', sz=19)])))
            rows.append('<w:tr>' + ''.join(cells) + '</w:tr>')
        gcol = ''.join('<w:gridCol w:w="%d"/>' % (100 // ncol) for _ in range(ncol))
        self.body.append('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
                         % (tblpr(RULE), gcol, ''.join(rows)))
        self.blank()

    def wordbank(self, label, words, accent=INDIGO):
        txt = '    |    '.join(words)
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                         '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                         % (tblpr(accent), tcpr(SOFT, 120),
                            para([run(label + '  ', b=True, color=accent, sz=19),
                                  run(txt, b=True, color=INK, sz=19)])))
        self.blank()

    def table(self, headers, rows, accent=INDIGO, widths=None):
        n = len(headers)
        widths = widths or [100 // n] * n
        gcol = ''.join('<w:gridCol w:w="%d"/>' % w for w in widths)
        out = ['<w:tr>' + ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(accent, 90), para([run(h, b=True, color='FFFFFF', sz=19)]))
            for h in headers) + '</w:tr>']
        for r in rows:
            out.append('<w:tr>' + ''.join(
                '<w:tc>%s%s</w:tc>' % (tcpr(None, 90), para([run(str(c), sz=19)])) for c in r) + '</w:tr>')
        self.body.append('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
                         % (tblpr(RULE), gcol, ''.join(out)))
        self.blank()

    def cando_box(self, statements):
        cells = [para([run('By the end of this unit I can…', b=True, color=INDIGO, sz=22)],
                      '<w:spacing w:after="40"/>')]
        for s in statements:
            cells.append(para([run(s, sz=20)],
                              '<w:pStyle w:val="ListParagraph"/><w:numPr><w:ilvl w:val="0"/>'
                              '<w:numId w:val="1"/></w:numPr><w:spacing w:after="24"/>'))
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                         '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                         % (tblpr(PERI), tcpr('EEEFFC', 150), ''.join(cells)))
        self.blank()

    def checkrow(self, statements):
        rows = []
        for s in statements:
            rows.append('<w:tr><w:tc>%s%s</w:tc><w:tc>%s%s</w:tc><w:tc>%s%s</w:tc></w:tr>' % (
                tcpr(None, 90), para([run(s, sz=19)]),
                tcpr(None, 90), para([run('□', sz=22)], '<w:jc w:val="center"/>'),
                tcpr(None, 90), para([run('□', sz=22)], '<w:jc w:val="center"/>')))
        head = ('<w:tr>' + ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(INDIGO, 90), para([run(h, b=True, color='FFFFFF', sz=18)]))
            for h in ('I can…', 'Not yet', 'Yes')) + '</w:tr>')
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="70"/><w:gridCol w:w="15"/>'
                         '<w:gridCol w:w="15"/></w:tblGrid>%s%s</w:tbl>'
                         % (tblpr(RULE), head, ''.join(rows)))
        self.blank()

    # ---------- answer key ----------
    def faultline(self, text, faults):
        """Find the Fault: the text with numbered markers, then the corrections."""
        self.body.append(para([run(text, sz=21)],
                              '<w:spacing w:before="40" w:after="120"/>'
                              '<w:ind w:left="200" w:right="200"/>'
                              '<w:pBdr><w:left w:val="single" w:sz="18" w:space="8" w:color="%s"/></w:pBdr>'
                              % PLUM))
        rows = [[str(i), w, r, why] for i, (w, r, why) in enumerate(faults, 1)]
        self.table(['#', 'As written', 'As it should be', 'Why'], rows, PLUM, [6, 24, 24, 46])

    def bandpair(self, mid, top, diffs):
        """Two answers one band apart, side by side, with the difference named."""
        head = '<w:tr>' + ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(c, 90), para([run(h, b=True, color='FFFFFF', sz=19)]))
            for h, c in (('A middle-band answer', GREY), ('A top-band answer', PLUM))) + '</w:tr>'
        cells = []
        for lines, col in ((mid, None), (top, SOFT)):
            ps = ''.join(para([run(l, sz=19)], '<w:spacing w:after="60"/>') for l in lines)
            cells.append('<w:tc>%s%s</w:tc>' % (tcpr(col, 90), ps))
        body = '<w:tr>' + ''.join(cells) + '</w:tr>'
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="50"/><w:gridCol w:w="50"/>'
                         '</w:tblGrid>%s%s</w:tbl>' % (tblpr(RULE), head, body))
        self.blank()
        self.h3('What the top answer does that the other does not', PLUM)
        self.bullets(diffs)

    def keybar(self, t):
        self.body.append(para([run('  ' + t, b=True, color='FFFFFF', sz=28)],
                              '<w:shd w:fill="%s" w:val="clear"/><w:spacing w:after="80" w:before="200"/>' % INDIGO))

    def keyline(self, label, text):
        self.body.append(para([run(label + '  ', b=True, color=INDIGO_D, sz=20), run(text, sz=20)],
                              '<w:spacing w:after="44"/>'))

    def keygrid(self, answers, cols=5, start=1):
        """Answer key laid out as the ETS paper does: number | answer."""
        rows = []
        per = (len(answers) + cols - 1) // cols
        for r in range(per):
            cells = []
            for c in range(cols):
                k = c * per + r
                if k < len(answers):
                    cells.append('<w:tc>%s%s</w:tc>' % (
                        tcpr(None, 80),
                        para([run('%d  ' % (start + k), b=True, color=GREY, sz=19),
                              run(str(answers[k]), b=True, color=INK, sz=19)])))
                else:
                    cells.append('<w:tc>%s%s</w:tc>' % (tcpr(None, 80), para([run('', sz=19)])))
            rows.append('<w:tr>' + ''.join(cells) + '</w:tr>')
        gcol = ''.join('<w:gridCol w:w="%d"/>' % (100 // cols) for _ in range(cols))
        self.body.append('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
                         % (tblpr(RULE), gcol, ''.join(rows)))
        self.blank()

    def why(self, n, right, because):
        """The explained key: not just the letter."""
        self.body.append(para([run('%d  ' % n, b=True, color=INDIGO, sz=20),
                               run('(%s)  ' % right, b=True, color=GREEN, sz=20),
                               run(because, sz=20)],
                              '<w:spacing w:after="46"/><w:ind w:left="200"/>'))

    # ---------- output ----------
    def save(self, path):
        doc = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
               '<w:document %s><w:body>%s%s</w:body></w:document>'
               % (NS, ''.join(self.body), SECT_N))
        rels = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">']
        for name, target in (('styles', 'styles.xml'), ('numbering', 'numbering.xml'),
                             ('fontTable', 'fontTable.xml'), ('settings', 'settings.xml')):
            rels.append('<Relationship Id="rId%s" Target="%s" Type="http://schemas.openxmlformats.org/'
                        'officeDocument/2006/relationships/%s"/>' % (name, target, name))
        for rid, fn, _ in self.images:
            rels.append('<Relationship Id="%s" Target="media/%s" Type="http://schemas.openxmlformats.org/'
                        'officeDocument/2006/relationships/image"/>' % (rid, fn))
        rels.append('</Relationships>')

        ct = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
              '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
              '<Default ContentType="image/png" Extension="png"/>'
              '<Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>'
              '<Default ContentType="application/xml" Extension="xml"/>'
              '<Override ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml" PartName="/word/document.xml"/>'
              '<Override ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml" PartName="/word/styles.xml"/>'
              '<Override ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml" PartName="/word/numbering.xml"/>'
              '<Override ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml" PartName="/word/fontTable.xml"/>'
              '<Override ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml" PartName="/word/settings.xml"/>'
              '<Override ContentType="application/vnd.openxmlformats-package.core-properties+xml" PartName="/docProps/core.xml"/>'
              '</Types>')

        root_rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                     '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
                     '<Relationship Id="rId1" Target="word/document.xml" Type="http://schemas.openxmlformats.org/'
                     'officeDocument/2006/relationships/officeDocument"/>'
                     '<Relationship Id="rId2" Target="docProps/core.xml" Type="http://schemas.openxmlformats.org/'
                     'package/2006/relationships/metadata/core-properties"/>'
                     '</Relationships>')

        core = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" '
                'xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" '
                'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'
                '<dc:title>%s</dc:title><dc:subject>%s</dc:subject>'
                '<cp:category>Student Book</cp:category></cp:coreProperties>'
                % (esc(self.title), esc(self.subject)))

        settings = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                    '<w:settings %s><w:defaultTabStop w:val="720"/>'
                    '<w:compat><w:compatSetting w:name="compatibilityMode" '
                    'w:uri="http://schemas.microsoft.com/office/word" '
                    'w:val="15"/></w:compat></w:settings>' % NS)

        with zipfile.ZipFile(path, 'w', zipfile.ZIP_DEFLATED) as z:
            z.writestr('[Content_Types].xml', ct)
            z.writestr('_rels/.rels', root_rels)
            z.writestr('docProps/core.xml', core)
            z.writestr('word/document.xml', doc)
            z.writestr('word/_rels/document.xml.rels', ''.join(rels))
            z.writestr('word/settings.xml', settings)
            for part in ('styles.xml', 'numbering.xml', 'fontTable.xml'):
                z.writestr('word/' + part, open(os.path.join(SKEL, part), 'rb').read())
            for _, fn, data in self.images:
                z.writestr('word/media/' + fn, data)
        return path


# =====================================================================
# CMA handout blocks
# =====================================================================
# Semantic colours. The three costing methods keep the same hue everywhere
# in the set, so a student can find the absorption column by colour alone.
ABS, VAR, THR = PLUM, TEAL, AMBER
TRAP, GOOD = RED, GREEN
REGC = {'R1': GREEN, 'R2': BLUE, 'R3': PLUM}


def arun(text, sz=21, b=False, color=None):
    """A right-to-left run, for the Arabic column of the glossary."""
    rpr = '<w:rFonts w:cs="Arial" w:ascii="Arial" w:hAnsi="Arial"/><w:rtl/><w:bidi/>'
    if b:
        rpr += '<w:b/><w:bCs/>'
    if color:
        rpr += '<w:color w:val="%s"/>' % color
    rpr += '<w:sz w:val="%d"/><w:szCs w:val="%d"/>' % (sz, sz)
    return ('<w:r><w:rPr>%s</w:rPr><w:t xml:space="preserve">%s</w:t></w:r>'
            % (rpr, esc(text)))


def _blankrun(n, answer, sz=21, minw=9):
    """A numbered rule wide enough for the answer the student has to write."""
    width = max(minw, int(len(answer) * 1.5) + 3)
    sup = ('<w:r><w:rPr><w:vertAlign w:val="superscript"/><w:color w:val="%s"/>'
           '<w:b/><w:sz w:val="%d"/></w:rPr><w:t>%d</w:t></w:r>' % (INDIGO, sz - 5, n))
    rule = run(' ' * width, u=True, sz=sz)
    return sup + rule


def _reg_tag(r):
    """The teacher's margin marker: which register this paragraph is pitched at."""
    if not r:
        return ''
    return ('<w:r><w:rPr><w:b/><w:color w:val="%s"/><w:sz w:val="13"/>'
            '</w:rPr><w:t xml:space="preserve">%s  </w:t></w:r>' % (REGC.get(r, GREY), r))


class _CMA:
    """Mixed into Doc below."""

    # ---- prose ------------------------------------------------------
    def fill(self, parts, sz=21, reg=None, ind=0):
        """A paragraph carrying numbered write-in blanks."""
        rs = [_reg_tag(reg)]
        for p in parts:
            if p[0] == 't':
                rs.append(run(p[1], sz=sz))
            else:
                rs.append(_blankrun(p[1], p[2], sz=sz))
        ppr = '<w:spacing w:before="40" w:after="110" w:line="300" w:lineRule="auto"/>'
        if ind:
            ppr += '<w:ind w:left="%d"/>' % ind
        self.body.append(para(rs, ppr))

    def prose(self, t, reg=None, i=False, sz=21):
        self.body.append(para(
            [_reg_tag(reg), run(t, sz=sz, i=i)],
            '<w:spacing w:before="40" w:after="110" w:line="300" w:lineRule="auto"/>'))

    def scene(self, lines, title=None):
        """The ORIENT block: the situation, in a tinted panel, with no blanks."""
        ps = []
        if title:
            ps.append(para([run(title, b=True, color=INDIGO, sz=21)],
                           '<w:spacing w:after="60"/>'))
        for l in lines:
            ps.append(para([run(l, sz=21)],
                           '<w:spacing w:after="80" w:line="290" w:lineRule="auto"/>'))
        cell = '<w:tc>%s%s</w:tc>' % (tcpr(SOFT, 170), ''.join(ps))
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                         '<w:tr>%s</w:tr></w:tbl>' % (tblpr(PERI, 4), cell))
        self.blank()

    def task(self, label, instruction):
        """The instruction line that opens an exercise."""
        self.body.append(para(
            [run(label + '   ', b=True, color=PAPERLESS_ACCENT, sz=21),
             run(instruction, sz=21)],
            '<w:spacing w:before="200" w:after="90"/>'
            '<w:pBdr><w:top w:val="single" w:sz="10" w:space="6" w:color="%s"/></w:pBdr>' % RULE))

    # ---- write-in furniture ----------------------------------------
    def rule_lines(self, n=3, ind=200, width=8600):
        for _ in range(n):
            self.body.append(para(
                [run(' ', sz=21)],
                '<w:spacing w:before="150" w:after="150"/><w:ind w:left="%d"/>'
                '<w:pBdr><w:bottom w:val="single" w:sz="6" w:space="2" w:color="%s"/>'
                '</w:pBdr>' % (ind, RULE)))

    def answer_grid(self, nums, cols=6):
        """Boxes for the student to write short answers into."""
        rows = []
        for i in range(0, len(nums), cols):
            chunk = nums[i:i + cols]
            cells = ''
            for n in chunk:
                inner = para([run(str(n), b=True, color=INDIGO, sz=15)]) + \
                        para([run(' ', sz=24)])
                cells += '<w:tc>%s%s</w:tc>' % (tcpr(None, 90), inner)
            rows.append('<w:tr>%s</w:tr>' % cells)
        grid = ''.join('<w:gridCol w:w="%d"/>' % (100 // cols) for _ in range(cols))
        self.body.append('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
                         % (tblpr(RULE, 4), grid, ''.join(rows)))
        self.blank()

    # ---- accounting furniture ---------------------------------------
    def stmt(self, title, rows, accent=INDIGO, width=(66, 17, 17)):
        """A ruled income-statement frame.

        rows: (label, indent_level, value_or_None, style)
        style: '' plain, 'b' bold, 'r' with a rule above, 't' total (bold + rule)
        A value of None leaves the money column blank for the student.
        """
        head = '<w:tr>%s</w:tr>' % ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(accent, 90, width[i]),
                                   para([run(h, b=True, color='FFFFFF', sz=19)],
                                        '' if i == 0 else '<w:jc w:val="right"/>'))
            for i, h in enumerate([title, '', '']))
        trs = [head]
        for label, lvl, val, st in rows:
            pb = ('<w:pBdr><w:top w:val="single" w:sz="6" w:space="3" w:color="%s"/></w:pBdr>'
                  % GREY) if st in ('r', 't') else ''
            lp = '<w:ind w:left="%d"/>' % (lvl * 220) + pb
            cells = '<w:tc>%s%s</w:tc>' % (
                tcpr(SOFT if st == 't' else None, 80, width[0]),
                para([run(label, b=(st in ('b', 't')), sz=19)], lp))
            # accounting convention: indented detail in the inner column,
            # anything at the left margin in the outer total column
            money_col = 2 if lvl == 0 else 1
            for col in (1, 2):
                txt = val if (col == money_col and isinstance(val, str)) else ''
                cells += '<w:tc>%s%s</w:tc>' % (
                    tcpr(SOFT if st == 't' else None, 80, width[col]),
                    para([run(txt, b=(st in ('b', 't')), sz=19)],
                         '<w:jc w:val="right"/>' + pb))
            trs.append('<w:tr>%s</w:tr>' % cells)
        grid = ''.join('<w:gridCol w:w="%d"/>' % (w * 94) for w in width)
        self.body.append('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
                         % (tblpr(RULE, 4, fixed=True), grid, ''.join(trs)))
        self.blank()

    def journal(self, entries, accent=INDIGO):
        """Journal entry frames. entries: (ref, narrative, [(account, indent, dr, cr)])"""
        for ref, narrative, lines in entries:
            self.body.append(para(
                [run(ref + '  ', b=True, color=accent, sz=19), run(narrative, i=True, sz=19)],
                '<w:spacing w:before="140" w:after="60"/>'))
            jw = (56, 22, 22)
            head = '<w:tr>%s</w:tr>' % ''.join(
                '<w:tc>%s%s</w:tc>' % (tcpr(SOFT, 80, jw[i]),
                                       para([run(h, b=True, color=GREY, sz=17)],
                                            '' if i == 0 else '<w:jc w:val="right"/>'))
                for i, h in enumerate(['Account', 'Debit', 'Credit']))
            trs = [head]
            for acct, lvl, dr, cr in lines:
                cells = '<w:tc>%s%s</w:tc>' % (
                    tcpr(None, 80, jw[0]),
                    para([run(acct, sz=19)], '<w:ind w:left="%d"/>' % (lvl * 260)))
                for k, v in enumerate((dr, cr)):
                    cells += '<w:tc>%s%s</w:tc>' % (
                        tcpr(None, 80, jw[k + 1]),
                        para([run(v or '', sz=19, mono=bool(v))], '<w:jc w:val="right"/>'))
                trs.append('<w:tr>%s</w:tr>' % cells)
            self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="5264"/>'
                             '<w:gridCol w:w="2068"/><w:gridCol w:w="2068"/></w:tblGrid>'
                             '%s</w:tbl>' % (tblpr(RULE, 4, fixed=True), ''.join(trs)))
        self.blank()

    # ---- language furniture -----------------------------------------
    def langbox(self, register, collocations, pairs, nots):
        """The Language Focus panel that opens every handout."""
        rows = [('Register you are working in', register),
                ('Say it exactly like this', ' · '.join(collocations)),
                ('Words that are not the same', ' · '.join(pairs)),
                ('Remember', '  '.join(nots))]
        ps = [para([run('LANGUAGE FOCUS', b=True, color='FFFFFF', sz=17)])]
        head = '<w:tr><w:tc>%s%s</w:tc></w:tr>' % (tcpr(INDIGO_D, 110), ''.join(ps))
        body = ''
        for k, v in rows:
            body += ('<w:tr><w:tc>%s%s</w:tc><w:tc>%s%s</w:tc></w:tr>'
                     % (tcpr(SOFT, 100), para([run(k, b=True, sz=18)]),
                        tcpr(None, 100), para([run(v, sz=18)])))
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="34"/><w:gridCol w:w="66"/>'
                         '</w:tblGrid>%s%s</w:tbl>'
                         % (tblpr(INDIGO_D, 4),
                            '<w:tr><w:tc><w:tcPr><w:gridSpan w:val="2"/>'
                            '<w:shd w:fill="%s" w:val="clear"/></w:tcPr>%s</w:tc></w:tr>'
                            % (INDIGO_D, ''.join(ps)), body))
        self.blank()

    def bank(self, words, note):
        """The word bank above a fill exercise.

        Built from the exercise's own answers plus the author's distractors, so
        it can never omit a word the student needs, and the distractors are the
        wrong choices the exam would actually offer.
        """
        line = '     '.join(words)
        ps = [para([run('WORD BANK', b=True, color=INDIGO_D, sz=15)],
                   '<w:spacing w:after="40"/>'),
              para([run(line, b=True, sz=20)],
                   '<w:spacing w:after="50" w:line="280" w:lineRule="auto"/>'),
              para([run(note, i=True, sz=17, color=GREY)])]
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                         '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                         % (tblpr(PERI, 4), tcpr(CREAM, 150), ''.join(ps)))
        self.blank()

    def three_ways(self, rows):
        """Same idea at R1, R2 and R3, for the register bridge exercise."""
        head = '<w:tr>%s</w:tr>' % ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(REGC[h.split()[0]] if h.split()[0] in REGC else INDIGO, 90),
                                   para([run(h, b=True, color='FFFFFF', sz=18)]))
            for h in ('R1 Teaching', 'R2 Textbook', 'R3 Exam'))
        trs = [head]
        for a, b_, c in rows:
            trs.append('<w:tr>%s</w:tr>' % ''.join(
                '<w:tc>%s%s</w:tc>' % (tcpr(None, 95), para([run(t, sz=18)]))
                for t in (a, b_, c)))
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="30"/><w:gridCol w:w="34"/>'
                         '<w:gridCol w:w="36"/></w:tblGrid>%s</w:tbl>'
                         % (tblpr(RULE, 4), ''.join(trs)))
        self.blank()

    def decoder(self, stem):
        """Stem Decoder: pull a question apart before answering it."""
        self.body.append(para([run(stem, i=True, sz=20)],
                              '<w:spacing w:before="60" w:after="120"/>'
                              '<w:ind w:left="200" w:right="200"/>'
                              '<w:pBdr><w:left w:val="single" w:sz="18" w:space="8" '
                              'w:color="%s"/></w:pBdr>' % PLUM))
        heads = ['What am I given?', 'What is asked?', 'Which word is the trap?']
        head = '<w:tr>%s</w:tr>' % ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(SOFT, 90), para([run(h, b=True, color=INDIGO, sz=18)]))
            for h in heads)
        blankrow = '<w:tr>%s</w:tr>' % ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(None, 120), para([run(' ', sz=21)]) * 3)
            for _ in heads)
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="33"/><w:gridCol w:w="33"/>'
                         '<w:gridCol w:w="34"/></w:tblGrid>%s%s</w:tbl>'
                         % (tblpr(RULE, 4), head, blankrow))
        self.blank()

    def glossary_rows(self, rows, accent=INDIGO):
        """term · English definition · Arabic · false-friend warning."""
        heads = ['Term', 'What it means in CMA English', 'بالعربية', 'Careful']
        head = '<w:tr>%s</w:tr>' % ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(accent, 90),
                                   para([run(h, b=True, color='FFFFFF', sz=18)]))
            for h in heads)
        trs = [head]
        for term, eng, ar, warn in rows:
            cells = '<w:tc>%s%s</w:tc>' % (tcpr(None, 85), para([run(term, b=True, sz=18)]))
            cells += '<w:tc>%s%s</w:tc>' % (tcpr(None, 85), para([run(eng, sz=18)]))
            cells += '<w:tc>%s%s</w:tc>' % (
                tcpr(None, 85), para([arun(ar, sz=18)], '<w:bidi/><w:jc w:val="right"/>'))
            cells += '<w:tc>%s%s</w:tc>' % (
                tcpr(None, 85), para([run(warn, sz=17, color=TRAP if warn else GREY)]))
            trs.append('<w:tr>%s</w:tr>' % cells)
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="20"/><w:gridCol w:w="38"/>'
                         '<w:gridCol w:w="16"/><w:gridCol w:w="26"/></w:tblGrid>%s</w:tbl>'
                         % (tblpr(RULE, 4), ''.join(trs)))
        self.blank()

    def traps(self, rows):
        """The Trap Table: what the exam does to you on this page."""
        head = '<w:tr>%s</w:tr>' % ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(TRAP, 90),
                                   para([run(h, b=True, color='FFFFFF', sz=18)]))
            for h in ('The exam says', 'Candidates assume', 'What is actually true'))
        trs = [head]
        for a, b_, c in rows:
            trs.append('<w:tr>%s</w:tr>' % ''.join(
                '<w:tc>%s%s</w:tc>' % (tcpr(f, 85), para([run(t, sz=18, i=(f is not None))]))
                for t, f in ((a, None), (b_, CREAM), (c, None))))
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="30"/><w:gridCol w:w="33"/>'
                         '<w:gridCol w:w="37"/></w:tblGrid>%s</w:tbl>'
                         % (tblpr(RULE, 4), ''.join(trs)))
        self.blank()

    def match(self, left, right, accent=INDIGO):
        """Matching: numbered items on the left, lettered options on the right."""
        rows = max(len(left), len(right))
        head = '<w:tr>%s</w:tr>' % ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(accent, 90),
                                   para([run(h, b=True, color='FFFFFF', sz=18)]))
            for h in ('', 'Item', 'Answer', '', 'Option'))
        trs = [head]
        for i in range(rows):
            l = left[i] if i < len(left) else ''
            r = right[i] if i < len(right) else ''
            cells = '<w:tc>%s%s</w:tc>' % (tcpr(SOFT, 70),
                                           para([run(str(i + 1) if l else '', b=True, sz=18)]))
            cells += '<w:tc>%s%s</w:tc>' % (tcpr(None, 80), para([run(l, sz=18)]))
            cells += '<w:tc>%s%s</w:tc>' % (tcpr(None, 80),
                                            para([run('   ', u=True, sz=20)],
                                                 '<w:jc w:val="center"/>'))
            cells += '<w:tc>%s%s</w:tc>' % (
                tcpr(SOFT, 70), para([run('ABCDEFGHIJKL'[i] if r else '', b=True, sz=18)]))
            cells += '<w:tc>%s%s</w:tc>' % (tcpr(None, 80), para([run(r, sz=18)]))
            trs.append('<w:tr>%s</w:tr>' % cells)
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="5"/><w:gridCol w:w="37"/>'
                         '<w:gridCol w:w="10"/><w:gridCol w:w="5"/><w:gridCol w:w="43"/>'
                         '</w:tblGrid>%s</w:tbl>' % (tblpr(RULE, 4), ''.join(trs)))
        self.blank()

    def sortgrid(self, headers, items, accent=INDIGO):
        """Classification: tick the right column for each item."""
        head = '<w:tr>%s</w:tr>' % ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(accent, 85),
                                   para([run(h, b=True, color='FFFFFF', sz=17)],
                                        '' if i == 0 else '<w:jc w:val="center"/>'))
            for i, h in enumerate(headers))
        trs = [head]
        for i, it in enumerate(items, 1):
            cells = '<w:tc>%s%s</w:tc>' % (
                tcpr(None, 75), para([run('%d.  %s' % (i, it), sz=18)]))
            for _ in headers[1:]:
                cells += '<w:tc>%s%s</w:tc>' % (
                    tcpr(None, 75), para([run(' ', sz=20)], '<w:jc w:val="center"/>'))
            trs.append('<w:tr>%s</w:tr>' % cells)
        w = [100 - 14 * (len(headers) - 1)] + [14] * (len(headers) - 1)
        self.body.append('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
                         % (tblpr(RULE, 4),
                            ''.join('<w:gridCol w:w="%d"/>' % x for x in w), ''.join(trs)))
        self.blank()

    def cmaq(self, n, stem, options, level=''):
        """An exam-pitch item. Options are not reordered; the key records the letter."""
        lab = '%d.' % n + ('  [%s]' % level if level else '')
        self.body.append(para(
            [run(lab + '  ', b=True, color=INDIGO, sz=19), run(stem, b=True, sz=19)],
            '<w:spacing w:before="150" w:after="60"/>'))
        for i, o in enumerate(options):
            self.body.append(para([run('(%s)  ' % 'ABCD'[i], color=GREY, sz=19), run(o, sz=19)],
                                  '<w:ind w:left="340"/><w:spacing w:after="30"/>'))

    # ---- key furniture ----------------------------------------------
    def keytable(self, rows, accent=GREEN):
        heads = ['#', 'Answer', 'Why', 'The trap it defeats']
        head = '<w:tr>%s</w:tr>' % ''.join(
            '<w:tc>%s%s</w:tc>' % (tcpr(accent, 85),
                                   para([run(h, b=True, color='FFFFFF', sz=17)]))
            for h in heads)
        trs = [head]
        for n, ans, why, trap in rows:
            cells = '<w:tc>%s%s</w:tc>' % (tcpr(SOFT, 70), para([run(str(n), b=True, sz=17)]))
            cells += '<w:tc>%s%s</w:tc>' % (tcpr(None, 70), para([run(ans, b=True, sz=17)]))
            cells += '<w:tc>%s%s</w:tc>' % (tcpr(None, 70), para([run(why, sz=17)]))
            cells += '<w:tc>%s%s</w:tc>' % (tcpr(None, 70),
                                            para([run(trap, sz=17, color=TRAP if trap else GREY)]))
            trs.append('<w:tr>%s</w:tr>' % cells)
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="5"/><w:gridCol w:w="22"/>'
                         '<w:gridCol w:w="40"/><w:gridCol w:w="33"/></w:tblGrid>%s</w:tbl>'
                         % (tblpr(RULE, 4), ''.join(trs)))
        self.blank()


PAPERLESS_ACCENT = INDIGO

# graft the handout blocks onto the writer
for _name in dir(_CMA):
    if not _name.startswith('__'):
        setattr(Doc, _name, getattr(_CMA, _name))
