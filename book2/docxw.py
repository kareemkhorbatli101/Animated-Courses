"""Writer that reproduces Al-Hasan Student Book 1's exact OOXML formatting."""
import os, re, zipfile, shutil, hashlib

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

# table property blocks, copied verbatim from Book 1
TBL_BOX = ('<w:tblPr><w:tblW w:type="pct" w:w="100%"/><w:tblBorders>'
           + ''.join('<w:%s w:val="single" w:color="BBCBD2" w:sz="6"/>' % s
                     for s in ('top', 'left', 'bottom', 'right', 'insideH', 'insideV'))
           + '</w:tblBorders></w:tblPr>')
TC_BOX = ('<w:tcPr><w:shd w:fill="EDF1F4" w:val="clear"/><w:tcMar>'
          '<w:top w:type="dxa" w:w="80"/><w:left w:type="dxa" w:w="140"/>'
          '<w:bottom w:type="dxa" w:w="80"/><w:right w:type="dxa" w:w="140"/></w:tcMar></w:tcPr>')
TBL_CANDO = ('<w:tblPr><w:tblW w:type="pct" w:w="100%"/><w:tblBorders>'
             + ''.join('<w:%s w:val="single" w:color="E0A263" w:sz="6"/>' % s
                       for s in ('top', 'left', 'bottom', 'right', 'insideH', 'insideV'))
             + '</w:tblBorders></w:tblPr>')
TC_CANDO = ('<w:tcPr><w:shd w:fill="EEF2F4" w:val="clear"/><w:tcMar>'
            '<w:top w:type="dxa" w:w="120"/><w:left w:type="dxa" w:w="160"/>'
            '<w:bottom w:type="dxa" w:w="120"/><w:right w:type="dxa" w:w="160"/></w:tcMar></w:tcPr>')
TC_HEAD = ('<w:tcPr><w:shd w:fill="1A4A63" w:val="clear"/><w:tcMar>'
           '<w:top w:type="dxa" w:w="60"/><w:left w:type="dxa" w:w="100"/>'
           '<w:bottom w:type="dxa" w:w="60"/><w:right w:type="dxa" w:w="100"/></w:tcMar></w:tcPr>')
TC_PLAIN = ('<w:tcPr><w:tcMar>'
            '<w:top w:type="dxa" w:w="60"/><w:left w:type="dxa" w:w="100"/>'
            '<w:bottom w:type="dxa" w:w="60"/><w:right w:type="dxa" w:w="100"/></w:tcMar></w:tcPr>')


def esc(t):
    return (t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))


def run(text, b=False, i=False, color=None, sz=21):
    rpr = ''
    if b:
        rpr += '<w:b/><w:bCs/>'
    if i:
        rpr += '<w:i/><w:iCs/>'
    if color:
        rpr += '<w:color w:val="%s"/>' % color
    rpr += '<w:sz w:val="%d"/><w:szCs w:val="%d"/>' % (sz, sz)
    return ('<w:r><w:rPr>%s</w:rPr><w:t xml:space="preserve">%s</w:t></w:r>'
            % (rpr, esc(text)))


def para(runs, ppr=''):
    return '<w:p>%s%s</w:p>' % ('<w:pPr>%s</w:pPr>' % ppr if ppr else '', ''.join(runs))


class Doc:
    def __init__(self):
        self.body = []
        self.images = []          # (relid, filename, bytes)
        self._seen = {}
        self._rid = 0

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
            self.body.append(para([drawing], '<w:spacing w:after="30" w:before="80"/><w:jc w:val="center"/>'))
        if caption:
            self.body.append(para(
                [run('Figure · ' + caption, i=True, color='666666', sz=17)],
                '<w:spacing w:after="120"/><w:jc w:val="center"/>'))

    # ---------- paragraph kinds ----------
    def unit_title(self, t):
        self.body.append(para([run(t, b=True, color='1A4A63', sz=40)],
                              '<w:spacing w:after="20" w:before="60"/>'))

    def strapline(self, t='Al-Hasan International — English for Trade, Industry & Global Partnerships'):
        self.body.append(para([run(t, i=True, color='0F3145', sz=22)],
                              '<w:spacing w:after="8"/>'))

    def cefr(self, t):
        self.body.append(para([run(t, color='555555', sz=20)],
                              '<w:spacing w:after="120"/>'))

    def partbar(self, title, tag):
        self.body.append(para(
            [run('  ' + title, b=True, color='FFFFFF', sz=26),
             run('    ' + tag, b=True, color='FFFFFF', sz=16)],
            '<w:shd w:fill="1A4A63" w:val="clear"/><w:spacing w:after="80" w:before="220"/>'))

    def h3(self, t):
        self.body.append(para([run(t, b=True, color='0F3145', sz=24)],
                              '<w:spacing w:after="40" w:before="120"/>'))

    def body_p(self, t):
        self.body.append(para([run(t, sz=21)], '<w:spacing w:after="60"/>'))

    def ex(self, t):
        self.body.append(para([run(t, b=True, i=True, color='1A4A63', sz=21)],
                              '<w:spacing w:after="40" w:before="90"/>'))

    def item(self, label, text):
        self.body.append(para([run(label, b=True, sz=21), run(text, sz=21)],
                              '<w:spacing w:after="66"/><w:ind w:left="200"/>'))

    def items(self, seq, start=1):
        """seq of strings -> numbered items '1.  text'"""
        for k, t in enumerate(seq):
            self.item('%d.  ' % (start + k), t)

    def lines(self, n=4):
        for _ in range(n):
            self.body.append(para([run('______________________________________________', sz=21)],
                                  '<w:spacing w:after="66"/><w:ind w:left="360"/>'))

    def numbered_lines(self, n=2):
        for k in range(n):
            self.body.append(para(
                [run('%d.  ' % (k + 1), b=True, sz=21),
                 run('______________________________________________', sz=21)],
                '<w:spacing w:after="66"/><w:ind w:left="200"/>'))

    def dialogue(self, turns):
        for sp, t in turns:
            self.body.append(para([run(sp + ': ', b=True, color='1A4A63', sz=21),
                                   run(t, sz=21)], '<w:spacing w:after="50"/>'))

    def watchout(self, t):
        self.body.append(para([run('  Watch out!  ', b=True, color='1A4A63', sz=20),
                               run(t + '  ', sz=20)],
                              '<w:shd w:fill="F3E7C9" w:val="clear"/><w:spacing w:after="90" w:before="50"/>'))

    def checklist(self, items):
        for t in items:
            self.body.append(para([run(t, sz=20)],
                                  '<w:pStyle w:val="ListParagraph"/><w:numPr><w:ilvl w:val="0"/>'
                                  '<w:numId w:val="1"/></w:numPr><w:spacing w:after="20"/>'))

    def keyline(self, label, text):
        self.body.append(para([run(label + '  ', b=True, color='0F3145', sz=20),
                               run(text, sz=20)], '<w:spacing w:after="44"/>'))

    def keybar(self, t):
        self.body.append(para([run('  ' + t, b=True, color='FFFFFF', sz=28)],
                              '<w:shd w:fill="1A4A63" w:val="clear"/><w:spacing w:after="80"/>'))

    def blank(self):
        self.body.append('<w:p/>')

    def page_break_section(self, zero=False):
        self.body.append('<w:p><w:pPr>%s</w:pPr></w:p>' % (SECT_0 if zero else SECT_N))

    # ---------- tables ----------
    def cando_box(self, statements):
        cells = [para([run('Can-Do (by the end of this unit)', b=True, color='0F3145', sz=22)],
                      '<w:spacing w:after="30"/>')]
        for s in statements:
            cells.append(para([run(s, sz=21)],
                              '<w:pStyle w:val="ListParagraph"/><w:numPr><w:ilvl w:val="0"/>'
                              '<w:numId w:val="1"/></w:numPr><w:spacing w:after="20"/>'))
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                         '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                         % (TBL_CANDO, TC_CANDO, ''.join(cells)))

    def wordbank(self, label, words):
        txt = label + '  ' + '    |    '.join(words)
        self.body.append('<w:tbl>%s<w:tblGrid><w:gridCol w:w="100"/></w:tblGrid>'
                         '<w:tr><w:tc>%s%s</w:tc></w:tr></w:tbl>'
                         % (TBL_BOX, TC_BOX,
                            para([run(txt, b=True, color='0F3145', sz=20)])))

    def grid(self, headers, nrows=4):
        """Classify grid: header row navy, then blank ruled cells."""
        n = len(headers)
        gcol = ''.join('<w:gridCol w:w="%d"/>' % (100 // n) for _ in range(n))
        rows = ['<w:tr>' + ''.join(
            '<w:tc>%s%s</w:tc>' % (TC_HEAD, para([run(h, b=True, color='FFFFFF', sz=19)]))
            for h in headers) + '</w:tr>']
        for _ in range(nrows):
            rows.append('<w:tr>' + ''.join(
                '<w:tc>%s%s</w:tc>' % (TC_PLAIN, para([run('__________', color='AAAAAA', sz=19)]))
                for _ in headers) + '</w:tr>')
        self.body.append('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
                         % (TBL_BOX, gcol, ''.join(rows)))

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
                '<dc:title>Al-Hasan International — Student Book 2</dc:title>'
                '<dc:subject>English for Trade, Industry &amp; Global Partnerships · CEFR B1</dc:subject>'
                '<cp:category>Student Book</cp:category></cp:coreProperties>')

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
