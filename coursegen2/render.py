# -*- coding: utf-8 -*-
"""Exact-clone OOXML renderer for the EPS illustrated-coursebook design system.

Direct formatting only, no Word styles: every paragraph carries its own shading,
spacing and indents, exactly as the source series does.
"""
import os, re, zipfile, html

# ---------------------------------------------------------------- palette
BLUE   = '0066CC'   # part bands (set per level by set_accent)
PALE   = 'E6F3FF'   # rubric strips
GREY   = 'F8F8F8'   # reading boxes
NAVY   = '1F3864'   # stressed words
INK    = '26303B'   # table cell text
WHITE  = 'FFFFFF'
GOLD   = 'B8860B'

ACCENTS = {'A2': '0B4F6C', 'B1': '14532D', 'B2': '7B2D26', 'C1': '1C3661'}
PALES   = {'A2': 'E3EEF3', 'B1': 'E7F0EA', 'B2': 'F6EAE8', 'C1': 'E8EDF6'}


def set_accent(level):
    global BLUE, PALE
    BLUE = ACCENTS.get(level, '14532D')
    PALE = PALES.get(level, 'E7F0EA')


FONT = '<w:rFonts w:ascii="Calibri" w:cs="Calibri" w:eastAsia="Calibri" w:hAnsi="Calibri"/>'
B    = '<w:b/><w:bCs/>'
NB   = '<w:b w:val="false"/><w:bCs w:val="false"/>'
I    = '<w:i/><w:iCs/>'

EMU_PER_IN = 914400
CONTENT_IN = 6.270833333333333


def esc(t):
    return html.escape(str(t), quote=False).replace('"', '&quot;')


def C(hexcol):
    return '<w:color w:val="%s"/>' % hexcol


def sz(n):
    return '<w:sz w:val="%d"/><w:szCs w:val="%d"/>' % (n, n)


def shd(fill):
    return '<w:shd w:fill="%s" w:val="clear"/>' % fill


def sp(after=0, before=0, line=None):
    l = ' w:line="%d" w:lineRule="auto"' % line if line else ''
    return '<w:spacing w:after="%d" w:before="%d"%s/>' % (after, before, l)


def ind(left=0, right=0, hanging=None, first=None):
    a = ''
    if hanging: a += ' w:hanging="%d"' % hanging
    if first:   a += ' w:firstLine="%d"' % first
    return '<w:ind w:left="%d" w:right="%d"%s/>' % (left, right, a)


def jc(v):
    return '<w:jc w:val="%s"/>' % v


def run(text, props='', size=22):
    # A run is text. Anything else reaching here is a data-shape error that
    # str() would hide: a tuple of (heading, lines) printed as a Python repr
    # survived sixty cases across two books because esc() stringified it
    # instead of complaining. Numbers are allowed; containers are not.
    if isinstance(text, (list, tuple, dict, set)):
        raise TypeError('render.run() was given a %s, not text: %r'
                        % (type(text).__name__, text))
    rpr = '<w:rPr>' + FONT + (props if props else NB) + sz(size) + '</w:rPr>'
    return '<w:r>%s<w:t xml:space="preserve">%s</w:t></w:r>' % (rpr, esc(text))


def para(ppr_inner, runs):
    return '<w:p><w:pPr>' + FONT.join(['', '']).join([]) + ppr_inner + \
           '<w:rPr>' + FONT + '</w:rPr></w:pPr>' + ''.join(runs) + '</w:p>'


# ---------------------------------------------------------------- blocks
def blank(after=120):
    return para(sp(after=after), [])


def pagebreak():
    # A page break used to be a paragraph carrying a break RUN. When the
    # content before it ended flush with the page foot - which the measured
    # fit arranges on purpose, and which a table can do by accident - that
    # paragraph spilled onto the next page as an invisible line, and its
    # break character then started a further page: a blank page between the
    # two sections. pageBreakBefore has no second half to spill: this empty
    # one-point paragraph simply begins the next page, wherever the previous
    # content ended, and what follows flows on directly beneath it.
    tiny = '<w:rPr>' + FONT + sz(2) + '</w:rPr>'
    return ('<w:p><w:pPr><w:pageBreakBefore/>' + sp(after=0, before=0) + tiny
            + '</w:pPr></w:p>')


def unit_band(num, title):
    """The big unit opener."""
    out = [para(shd(BLUE) + sp(after=0, before=0) + ind(120, 120),
                [run('UNIT %d' % num, B + C(WHITE), 24)]),
           para(shd(BLUE) + sp(after=160, before=0) + ind(120, 120),
                [run(title, B + C(WHITE), 40)])]
    return ''.join(out)


def title_band(title, kicker=None):
    out = []
    if kicker:
        out.append(para(shd(BLUE) + sp(after=0, before=0) + ind(120, 120),
                        [run(kicker, B + C(WHITE), 24)]))
    out.append(para(shd(BLUE) + sp(after=160, before=0) + ind(120, 120),
                    [run(title, B + C(WHITE), 40)]))
    return ''.join(out)


def band_part(t):
    return para(shd(BLUE) + sp(after=120, before=240) + ind(120, 120),
                [run(t, B + C(WHITE), 28)])


def rubric(t):
    return para(shd(PALE) + sp(after=140, before=60) + ind(120, 120),
                [run(t, B + C(BLUE))])


def readbox(t):
    return para(shd(GREY) + sp(after=160, before=60) + ind(140, 140),
                [run(t)])


def datapoint(label, value, source):
    """Boxed volatile figure: value, date and source, updatable in place."""
    out = [para(shd('FFF6E0') + sp(after=0, before=120) + ind(140, 140),
                [run('DATA POINT · ' + label, B + C(GOLD), 20)]),
           para(shd('FFF6E0') + sp(after=0, before=0) + ind(140, 140),
                [run(value, B + C(INK), 24)]),
           para(shd('FFF6E0') + sp(after=160, before=0) + ind(140, 140),
                [run(source, I + C('5A5A5A'), 18)])]
    return ''.join(out)


def strap(t, after=140):
    """The level/grammar line under a unit band - indented to match the band."""
    return para(sp(after=after) + ind(120, 120), [run(t, C(NAVY), 19)])


def termline(term, example, coll=None):
    """A taught word: the term in bold, then the sentence it lives in."""
    out = [para(sp(after=10) + ind(200, 200),
                [run(term, B + C(NAVY)), run('   \u2014   '), run(example)])]
    if coll:
        out.append(para(sp(after=60) + ind(420, 200),
                        [run('goes with:  ', C('5A5A5A'), 18), run(coll, C('5A5A5A'), 18)]))
    return ''.join(out)


def body(t, tail=None, after=120):
    rs = [run(t)]
    if tail:
        rs.append(run(tail))
    return para(sp(after=after), rs)


def item(n, t, tail=None):
    rs = [run('%s  ' % n, B), run(t)]
    if tail:
        rs.append(run(tail))
    return para(sp(after=60) + ind(400, 0, hanging=240), rs)


def bullet(t):
    return para(sp(after=60) + ind(400, 0, hanging=240), [run('·  ' + t)])


def caption(t):
    return para(sp(after=180, before=40) + jc('center'), [run(t, I + C('5A5A5A'), 19)])


def speak(who, line):
    if not who:
        return para(sp(after=60) + ind(400, 0), [run(line)])
    return para(sp(after=60) + ind(400, 0, hanging=400),
                [run(who + ': ', B + C(NAVY)), run(line)])


def speak_block(lines, after=60):
    '''Print a speaker's name only when the speaker changes.'''
    out, last = [], None
    for who, line in lines:
        out.append(speak('' if who == last else who, line))
        last = who
    return ''.join(out)


def pron(a, b):
    """A label and its note, on one line, with the two kept visibly apart."""
    return para(sp(after=40) + ind(260, 120, hanging=0),
                [run(a, B + C(INK)), run('  \u2014  ', C('8A939B')), run(b, C(NAVY))])


def who_is(name, what):
    return para(sp(after=50) + ind(300, 0, hanging=300),
                [run(name + ' \u2014 ', B + C(NAVY)), run(what)])


def gram_rule(t):
    return para(shd('EEF5FF') + sp(after=80, before=80) + ind(140, 140), [run(t, B)])


def stage(n, title):
    return para(shd('EAF2FB') + sp(after=100, before=180) + ind(120, 120),
                [run('STAGE %d  \u00B7  ' % n, B + C(NAVY), 20), run(title, B + C(BLUE), 24)])


def langbank(title, lines):
    """A language bank, flat or in named groups.

    The first edition passes a flat list of strings. A second-edition case
    passes [(heading, [line, ...]), ...], because the language a case needs
    falls into two or three jobs and a learner has to see which line does
    which. Until this was noticed on a printed page, a group arrived here as
    a tuple and was stringified: every SAY IT LIKE THIS box in both pilot
    books printed a Python repr, brackets and all.
    """
    out = [para(shd('F2F7F2') + sp(after=0, before=140) + ind(140, 140),
                [run(title, B + C('2E7D32'), 22)])]
    rows = []
    for L in lines:
        if (isinstance(L, (tuple, list)) and len(L) == 2
                and isinstance(L[1], (tuple, list))):
            rows.append(('head', str(L[0])))
            rows += [('line', str(x)) for x in L[1]]
        else:
            rows.append(('line', str(L)))
    for i, (kind, text) in enumerate(rows):
        last = (i == len(rows) - 1)
        if kind == 'head':
            out.append(para(shd('F2F7F2')
                            + sp(after=20, before=(0 if i == 0 else 90))
                            + ind(200, 140),
                            [run(text, B + C('2E7D32'), 20)]))
        else:
            out.append(para(shd('F2F7F2')
                            + sp(after=(140 if last else 20), before=0)
                            + ind(260, 140),
                            [run('\u2022  ', C('2E7D32')), run(text, I)]))
    return ''.join(out)


def voice(name, role, line):
    out = [para(sp(after=0, before=100) + ind(200),
                [run(name, B + C(NAVY)), run('  \u00B7  ' + role, C('5A5A5A'), 19)]),
           para(sp(after=100, before=0) + ind(200), [run('\u201C' + line + '\u201D', I)])]
    return ''.join(out)


def outcome(t):
    return para(shd('FFF6E0') + sp(after=160, before=120) + ind(140, 140),
                [run('WHAT HAPPENED  \u00B7  ', B + C(GOLD), 20), run(t)])


def picture(rid, w_px, h_px, name, keep=True):
    cx = int(CONTENT_IN * EMU_PER_IN)
    cy = int(cx * h_px / float(w_px))
    return ('<w:p><w:pPr>' + ('<w:keepNext/>' if keep else '') +
            sp(after=80, before=160) + jc('center') +
            '</w:pPr><w:r><w:rPr>' + FONT + '</w:rPr><w:drawing><wp:inline distB="0" distT="0" distL="0" distR="0">'
            '<wp:extent cx="%d" cy="%d"/><wp:effectExtent b="0" l="0" r="0" t="0"/>'
            '<wp:docPr id="1" name="Picture"/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">'
            '<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">'
            '<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">'
            '<pic:nvPicPr><pic:cNvPr id="0" name="%s"/><pic:cNvPicPr/></pic:nvPicPr>'
            '<pic:blipFill><a:blip r:embed="%s"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill>'
            '<pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="%d" cy="%d"/></a:xfrm>'
            '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic>'
            '</a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>'
            % (cx, cy, esc(name), rid, cx, cy))


# ---------------------------------------------------------------- tables
BORDERS = ('<w:tblBorders>' + ''.join(
    '<w:%s w:color="auto" w:space="0" w:sz="4" w:val="single"/>' % s
    for s in ('top', 'left', 'bottom', 'right', 'insideH', 'insideV')) + '</w:tblBorders>')
TCMAR = ('<w:tblCellMar><w:top w:type="dxa" w:w="40"/><w:left w:type="dxa" w:w="120"/>'
         '<w:bottom w:type="dxa" w:w="40"/><w:right w:type="dxa" w:w="120"/></w:tblCellMar>')


def _cell(text, w, bold=False, fill=None, size=22):
    tcpr = '<w:tcPr><w:tcW w:type="dxa" w:w="%d"/>' % w
    if fill:
        tcpr += shd(fill)
    tcpr += '<w:vAlign w:val="center"/></w:tcPr>'
    props = (B + C(WHITE)) if fill == BLUE else ((B + C(INK)) if bold else (NB + C(INK)))
    return ('<w:tc>' + tcpr +
            para(sp(after=40, before=40), [run(text, props, size)]) + '</w:tc>')


def table(rows, widths, header=True):
    total = sum(widths)
    grid = '<w:tblGrid>' + ''.join('<w:gridCol w:w="%d"/>' % w for w in widths) + '</w:tblGrid>'
    out = ['<w:tbl><w:tblPr><w:tblW w:type="dxa" w:w="%d"/>' % total + BORDERS + TCMAR +
           '<w:tblLayout w:type="fixed"/></w:tblPr>' + grid]
    for i, r in enumerate(rows):
        fill = BLUE if (header and i == 0) else ('F4F8FC' if i % 2 == 0 else None)
        out.append('<w:tr>' + ''.join(
            _cell(c, widths[j], bold=(header and i == 0), fill=fill)
            for j, c in enumerate(r)) + '</w:tr>')
    out.append('</w:tbl>')
    return ''.join(out) + blank(60)


def table_vocab(pairs):
    return table([['Term', 'Meaning']] + [list(p) for p in pairs], [2900, 6100])


def table_grammar(rows):
    return table(rows, [3000, 3000, 3000])


# ---------------------------------------------------------------- package
SECTPR = ('<w:sectPr><w:pgSz w:h="16838" w:w="11906"/>'
          '<w:pgMar w:bottom="1134" w:footer="709" w:gutter="0" w:header="709" '
          'w:left="1134" w:right="1134" w:top="1134"/>'
          '<w:cols w:space="708"/><w:docGrid w:linePitch="360"/></w:sectPr>')

DOC_OPEN = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<w:document xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" '
            'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
            'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
            'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing">'
            '<w:body>')

STYLES = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
          '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
          '<w:docDefaults><w:rPrDefault><w:rPr>' + FONT + sz(22) +
          '</w:rPr></w:rPrDefault><w:pPrDefault><w:pPr>'
          '<w:spacing w:after="0" w:line="259" w:lineRule="auto"/></w:pPr></w:pPrDefault>'
          '</w:docDefaults>'
          '<w:style w:styleId="Normal" w:type="paragraph" w:default="1">'
          '<w:name w:val="Normal"/></w:style></w:styles>')


def build_docx(body_xml, images, out_path, title):
    """images: list of (rid, abs_path, arcname)"""
    # An empty spacer paragraph directly before a page break serves no eye:
    # the break starts a fresh page either way. It can, however, blank a
    # page: when the content before it ends flush with the page foot - a
    # wordlist table did - the spacer spills over and sits alone on the next
    # page, invisible, and pageBreakBefore pushes the real content past it.
    # So every run of empty paragraphs just before a pageBreakBefore
    # paragraph is dropped at assembly, whatever module emitted it.
    _empty_p = r'<w:p><w:pPr>(?:(?!</w:p>|<w:r>|pageBreakBefore).)*</w:pPr></w:p>'
    _break_p = r'<w:p><w:pPr><w:pageBreakBefore/>'
    body_xml = re.sub('(?:%s)+(?=%s)' % (_empty_p, _break_p), '', body_xml)
    rels = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            '<Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/'
            '2006/relationships/styles" Target="styles.xml"/>']
    for rid, _p, arc in images:
        rels.append('<Relationship Id="%s" Type="http://schemas.openxmlformats.org/officeDocument/'
                    '2006/relationships/image" Target="media/%s"/>' % (rid, arc))
    rels.append('</Relationships>')

    ct = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
          '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
          '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.'
          'relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>'
          '<Default Extension="png" ContentType="image/png"/>'
          '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-'
          'officedocument.wordprocessingml.document.main+xml"/>'
          '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-'
          'officedocument.wordprocessingml.styles+xml"/>'
          '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-'
          'package.core-properties+xml"/></Types>']

    core = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/'
            'metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/">'
            '<dc:title>%s</dc:title></cp:coreProperties>' % esc(title))

    root_rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
                 '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
                 '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/'
                 '2006/relationships/officeDocument" Target="word/document.xml"/>'
                 '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/'
                 'relationships/metadata/core-properties" Target="docProps/core.xml"/>'
                 '</Relationships>')

    if os.path.exists(out_path):
        os.remove(out_path)
    with zipfile.ZipFile(out_path, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('[Content_Types].xml', ''.join(ct))
        z.writestr('_rels/.rels', root_rels)
        z.writestr('docProps/core.xml', core)
        z.writestr('word/document.xml', DOC_OPEN + body_xml + SECTPR + '</w:body></w:document>')
        z.writestr('word/styles.xml', STYLES)
        z.writestr('word/_rels/document.xml.rels', ''.join(rels))
        for _rid, p, arc in images:
            z.write(p, 'word/media/' + arc)
    return out_path


# ---------------------------------------------------------------- Brief Lab blocks
def boundary(text, title='WHAT THIS DOES NOT DO'):
    """Gate 21. Every AI capability is taught with what it does NOT do."""
    out = [para(shd('FBEAE8') + sp(after=0, before=140) + ind(140, 140),
                [run(title, B + C('B3261E'), 20)]),
           para(shd('FBEAE8') + sp(after=160, before=0) + ind(140, 140),
                [run(text, C(INK))])]
    return ''.join(out)


def draftbox(lines, marks):
    """Draft one, printed line by line, with the failing spans flagged in the margin."""
    out = []
    for i, L in enumerate(lines):
        m = marks.get(i)
        out.append(para(shd('F4F4F4') + sp(after=20, before=(80 if i == 0 else 0)) +
                        ind(420, 140, hanging=200),
                        [run(('[%d]  ' % m) if m else '       ', B + C('B3261E')),
                         run(L, B if m else NB)]))
    return ''.join(out) + blank(140)


def faultlist(faults, gram):
    """The closed set the diagnosis chooses from, with the grammar that repairs each."""
    out = [para(shd('EEF5FF') + sp(after=0, before=140) + ind(140, 140),
                [run('THE FAULTS, AND THE GRAMMAR THAT FIXES EACH ONE', B + C(NAVY), 20)])]
    for i, f in enumerate(faults):
        last = (i == len(faults) - 1)
        out.append(para(shd('EEF5FF') + sp(after=(140 if last else 20), before=0) + ind(300, 140),
                        [run(f + '  —  ', B + C(NAVY)), run(gram[f], I)]))
    return ''.join(out)


def costline(text):
    return para(shd('FFF6E0') + sp(after=160, before=140) + ind(140, 140),
                [run('WHAT DRAFT ONE COST  ·  ', B + C(GOLD), 20), run(text)])


# ---------------------------------------------------------------- Arabic
# The teacher's book is written for a Syrian teacher who may be teaching this
# specialised course for the first time. Arabic is set as complex script, so
# Word shapes and orders it correctly whatever the Latin font round it.
AR_FONT = '<w:rFonts w:ascii="Arial" w:cs="Arial" w:eastAsia="Arial" w:hAnsi="Arial"/>'


def arun(text, props='', size=24):
    rpr = ('<w:rPr>' + AR_FONT + '<w:rtl/><w:cs/>' + props +
           '<w:sz w:val="%d"/><w:szCs w:val="%d"/></w:rPr>' % (size, size))
    return '<w:r>%s<w:t xml:space="preserve">%s</w:t></w:r>' % (rpr, esc(text))


def ar_para(text, after=80, left=200):
    """A whole paragraph of Arabic, right to left."""
    return ('<w:p><w:pPr><w:bidi/>' + sp(after=after) + ind(left, left) +
            '<w:rPr>' + AR_FONT + '</w:rPr></w:pPr>' + arun(text) + '</w:p>')


def bilingual(en, ar, note=None):
    """An English term, its Arabic, and an optional note on usage."""
    runs = [run(en, B + C(NAVY)), run('   —   '), arun(ar, B)]
    if note:
        runs.append(run('   ' + note, I + C('5A5A5A'), 19))
    return para(sp(after=50) + ind(300, 120, hanging=0), runs)


def gloss_table(rows, header=('English', 'العربية', 'Note for the teacher'),
                widths=(2200, 2200, 4200)):
    """English | Arabic | note. The Arabic column is set right to left."""
    total = sum(widths)
    grid = '<w:tblGrid>' + ''.join('<w:gridCol w:w="%d"/>' % w for w in widths) + '</w:tblGrid>'
    out = ['<w:tbl><w:tblPr><w:tblW w:type="dxa" w:w="%d"/>' % total + BORDERS + TCMAR +
           '<w:tblLayout w:type="fixed"/></w:tblPr>' + grid]

    def cell(txt, w, arabic=False, head=False):
        tcpr = ('<w:tcPr><w:tcW w:type="dxa" w:w="%d"/>' % w +
                (shd(BLUE) if head else '') + '<w:vAlign w:val="center"/></w:tcPr>')
        if arabic:
            body = ('<w:p><w:pPr><w:bidi/>' + sp(after=40, before=40) +
                    '<w:rPr>' + AR_FONT + '</w:rPr></w:pPr>' +
                    arun(txt, (B + C(WHITE)) if head else B) + '</w:p>')
        else:
            props = (B + C(WHITE)) if head else (NB + C(INK))
            body = para(sp(after=40, before=40), [run(txt, props)])
        return '<w:tc>' + tcpr + body + '</w:tc>'

    out.append('<w:tr>' + ''.join(
        cell(h, widths[j], arabic=(j == 1), head=True) for j, h in enumerate(header)) + '</w:tr>')
    for r in rows:
        out.append('<w:tr>' + ''.join(
            cell(str(c), widths[j], arabic=(j == 1)) for j, c in enumerate(r)) + '</w:tr>')
    out.append('</w:tbl>')
    return ''.join(out) + blank(100)


def sample_answer(ref, text, ar=None):
    """A model answer the teacher can read out or put on the board."""
    o = [para(shd('F2F7F2') + sp(after=0, before=120) + ind(140, 140),
              [run(ref, B + C('2E7D32'), 20)]),
         para(shd('F2F7F2') + sp(after=(40 if ar else 140), before=0) + ind(260, 140),
              [run(text)])]
    if ar:
        o.append('<w:p><w:pPr><w:bidi/>' + shd('F2F7F2') + sp(after=140, before=0) +
                 ind(260, 140) + '<w:rPr>' + AR_FONT + '</w:rPr></w:pPr>' +
                 arun(ar) + '</w:p>')
    return ''.join(o)


def trap(en_wrong, en_right, why, ar=None):
    """A first-language interference point, with the repair."""
    o = [para(shd('FBEAE8') + sp(after=0, before=120) + ind(140, 140),
              [run('✗  ' + en_wrong, B + C('B3261E'))]),
         para(shd('FBEAE8') + sp(after=0, before=0) + ind(140, 140),
              [run('✓  ' + en_right, B + C('2E7D32'))]),
         para(shd('FBEAE8') + sp(after=(40 if ar else 140), before=0) + ind(260, 140),
              [run(why, I)])]
    if ar:
        o.append('<w:p><w:pPr><w:bidi/>' + shd('FBEAE8') + sp(after=140, before=0) +
                 ind(260, 140) + '<w:rPr>' + AR_FONT + '</w:rPr></w:pPr>' +
                 arun(ar) + '</w:p>')
    return ''.join(o)
