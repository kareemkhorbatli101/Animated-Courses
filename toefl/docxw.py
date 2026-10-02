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


def tblpr(col, sz=6):
    return '<w:tblPr><w:tblW w:type="pct" w:w="100%"/>' + _borders(col, sz) + '</w:tblPr>'


def tcpr(fill=None, pad=110):
    shd = '<w:shd w:fill="%s" w:val="clear"/>' % fill if fill else ''
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
