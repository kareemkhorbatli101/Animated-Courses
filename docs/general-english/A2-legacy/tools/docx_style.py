"""Apply the refined layout from spec/typography.yaml to a pandoc-made DOCX.

Pandoc gives correct content and flat formatting. This classifies every
paragraph by what it IS in the course — part header, track label, sub-header,
instruction, callout, MCQ option, caption, figure, body — and dresses each one.
"""
from __future__ import annotations
import re

NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"'

CALLOUTS = ('Gloss:', 'Word bank:', 'Model — read this first:', 'Model exchange:',
            'Check before you finish:', 'Remember:', 'Watch out!', 'Plan (fill in',
            'Useful language:', 'Useful phrases:', 'Useful questions:', 'Answer frame:',
            'Phrase bank', 'Discussion frames:', 'Before you read:', 'Before you listen:',
            'Card A', 'Card B', 'Student A', 'Student B', 'Stretch', '→ Harvest:')


def ptext(p: str) -> str:
    return ''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', p)).strip()


def _ppr(p: str, xml: str) -> str:
    """Insert into w:pPr after w:pStyle. Schema order is fixed; Word enforces it."""
    if '<w:pPr>' not in p:
        return re.sub(r'(<w:p\b[^>]*>)', r'\1<w:pPr>' + xml + '</w:pPr>', p, count=1)
    m = re.search(r'<w:pPr>\s*(<w:pStyle[^>]*/>)?', p)
    return p[:m.end()] + xml + p[m.end():]


def _rpr(p: str, xml: str, only_first=False) -> str:
    """Add run properties to every run in the paragraph."""
    def one(m):
        r = m.group(0)
        if '<w:rPr>' in r:
            return r.replace('<w:rPr>', '<w:rPr>' + xml, 1)
        return re.sub(r'(<w:r\b[^>]*>)', r'\1<w:rPr>' + xml + '</w:rPr>', r, count=1)
    return re.sub(r'<w:r\b.*?</w:r>', one, p, count=1 if only_first else 0, flags=re.S)


def spacing(before=0, after=120, line=276):
    return (f'<w:spacing w:before="{before}" w:after="{after}" '
            f'w:line="{line}" w:lineRule="auto"/>')


def shade(fill):
    return f'<w:shd w:val="clear" w:color="auto" w:fill="{fill}"/>'


def left_bar(colour, sz=18):
    return (f'<w:pBdr><w:left w:val="single" w:sz="{sz}" w:space="6" '
            f'w:color="{colour}"/></w:pBdr>')


def rule_below(colour='AEB6C2', sz=6):
    return (f'<w:pBdr><w:bottom w:val="single" w:sz="{sz}" w:space="4" '
            f'w:color="{colour}"/></w:pBdr>')


def ind(left=0, right=0):
    return f'<w:ind w:left="{left}" w:right="{right}"/>'


def colour(hex6):
    return f'<w:color w:val="{hex6}"/>'


def size(half):
    return f'<w:sz w:val="{half}"/><w:szCs w:val="{half}"/>'


def classify(txt: str, p: str) -> str:
    if '<w:drawing>' in p:
        return 'figure'
    if not txt:
        return 'blank'
    if re.match(r'^Figure \d+\.\d+ · ', txt):
        return 'caption'
    if re.match(r'^Unit \d+: ', txt):
        return 'unit_title'
    if txt.startswith('English for Daily Life · Level:'):
        return 'strap'
    if re.match(r'^(Warm Up$|Part \d+ · )', txt):
        return 'part_header'
    if txt.startswith('[CORE') or txt.startswith('[PLUS'):
        return 'track_label'
    if re.match(r'^(Warm-up: |Part \d+: |7[A-E]: |Can-Do checklist$|Unit \d+ glossary)', txt):
        return 'sub_header'
    if re.match(r'^○ [A-D]\) ', txt):
        return 'mcq'
    if any(txt.startswith(c) for c in CALLOUTS):
        return 'callout'
    if re.match(r'^(Column A|Column B)$', txt):
        return 'col_label'
    if txt.startswith('☐'):
        return 'checkline'
    return 'body'


def apply(d: str, typo: dict) -> str:
    L = typo['layout']

    def dress(m):
        p = m.group(0)
        txt = ptext(p)
        kind = classify(txt, p)
        body_sp = spacing(L['body']['space_before_twips'],
                          L['body']['space_after_twips'], L['body']['line'])

        if kind == 'unit_title':
            c = L['unit_title']
            p = _ppr(p, spacing(0, c['space_after_twips']) + rule_below('1F3864', 12)
                     + '<w:keepNext/>')
            return _rpr(p, size(c['half_points']) + colour(c['colour']) + '<w:b/>')

        if kind == 'strap':
            c = L['strap']
            p = _ppr(p, spacing(0, c['space_after_twips']))
            return _rpr(p, size(c['half_points']) + colour(c['colour']) + '<w:i/>')

        if kind == 'part_header':
            c = L['part_header']
            x = (spacing(c['space_before_twips'], c['space_after_twips'], 240)
                 + shade(c['shading']) + ind(c['indent_twips'], c['indent_twips'])
                 + '<w:keepNext/>')
            if c.get('page_break_before'):
                x = '<w:pageBreakBefore/>' + x
            p = _ppr(p, x)
            return _rpr(p, size(c['half_points']) + colour(c['colour']) + '<w:b/>')

        if kind == 'track_label':
            c = L['track_label']
            p = _ppr(p, spacing(0, c['space_after_twips']) + '<w:keepNext/>')
            return _rpr(p, size(c['half_points']) + colour(c['colour']) + '<w:i/>')

        if kind == 'sub_header':
            c = L['sub_header']
            p = _ppr(p, spacing(c['space_before_twips'], c['space_after_twips'], 240)
                     + rule_below('CED4DD', 4) + '<w:keepNext/>')
            return _rpr(p, size(c['half_points']) + colour(c['colour']) + '<w:b/>')

        if kind == 'caption':
            c = L['caption']
            p = _ppr(p, spacing(0, c['space_after_twips'], 240)
                     + '<w:jc w:val="center"/>')
            return _rpr(p, size(c['half_points']) + colour(c['colour']) + '<w:i/>')

        if kind == 'figure':
            c = L['figure']
            return _ppr(p, spacing(c['space_before_twips'], c['space_after_twips'], 240)
                        + '<w:jc w:val="center"/><w:keepNext/>')

        if kind == 'callout':
            c = L['callout']
            return _ppr(p, spacing(c['space_before_twips'], c['space_after_twips'])
                        + shade(c['shading'])
                        + left_bar(c['left_border']['colour'], c['left_border']['sz'])
                        + ind(c['indent_twips']) + '<w:keepNext/>')

        if kind == 'mcq':
            c = L['mcq_option']
            return _ppr(p, spacing(0, c['space_after_twips']) + ind(c['indent_twips']))

        if kind == 'col_label':
            return _rpr(_ppr(p, spacing(140, 60, 240) + '<w:keepNext/>'),
                        size(20) + colour('6E88AC') + '<w:b/>')

        if kind == 'checkline':
            return _ppr(p, spacing(0, 60) + ind(170))

        if kind == 'blank':
            return _ppr(p, spacing(0, 0, 240))

        # an instruction is a bold-led blockquote line; pandoc leaves no marker,
        # so it is recognised by shape: whole paragraph bold, ends in . ? or :
        runs = re.findall(r'<w:r\b.*?</w:r>', p, re.S)
        allbold = runs and all(re.search(r'<w:b\s*/>', r) or
                               not re.search(r'<w:t[^>]*>[^<]', r) for r in runs)
        if allbold and len(txt) > 12:
            c = L['instruction']
            return _ppr(p, spacing(c['space_before_twips'], c['space_after_twips'])
                        + shade(c['shading'])
                        + left_bar(c['left_border']['colour'], c['left_border']['sz'])
                        + ind(c['indent_twips']) + '<w:keepNext/>')

        return _ppr(p, body_sp)

    d = re.sub(r'<w:p\b.*?</w:p>', dress, d, flags=re.S)

    # tables: padded cells, grey rules, a tinted stem column
    t = typo['layout']['tables']
    cm = t['cell_margin_twips']
    tblmar = ('<w:tblCellMar>'
              + ''.join(f'<w:{k} w:w="{cm[k]}" w:type="dxa"/>'
                        for k in ('top', 'left', 'bottom', 'right'))
              + '</w:tblCellMar>')
    borders = ('<w:tblBorders>'
               + ''.join(f'<w:{e} w:val="single" w:color="{t["border_colour"]}" w:sz="4"/>'
                         for e in ('top', 'left', 'bottom', 'right', 'insideH', 'insideV'))
               + '</w:tblBorders>')

    def fix_tbl(m):
        tp = m.group(0)
        tp = re.sub(r'<w:tblBorders>.*?</w:tblBorders>', '', tp, flags=re.S)
        tp = re.sub(r'<w:tblCellMar>.*?</w:tblCellMar>', '', tp, flags=re.S)
        return tp.replace('</w:tblPr>', borders + tblmar + '</w:tblPr>')
    d = re.sub(r'<w:tblPr>.*?</w:tblPr>', fix_tbl, d, flags=re.S)

    # Column widths. Pandoc splits a markdown table into equal columns, which
    # gives a matching stem 1/3 of the line and its answer rule another third.
    # The shape of the first column says what kind of table it is.
    TEXT_W = 9026        # A4 less 1in margins, in twips

    def widths(m):
        tbl = m.group(0)
        rows = re.findall(r'<w:tr\b.*?</w:tr>', tbl, re.S)
        if not rows:
            return tbl
        cells = re.findall(r'<w:tc\b.*?</w:tc>', rows[0], re.S)
        n = len(cells)
        first = [ptext(c) for c in cells][0] if cells else ''
        col0 = [ptext(re.findall(r'<w:tc\b.*?</w:tc>', r, re.S)[0])
                for r in rows if re.findall(r'<w:tc\b.*?</w:tc>', r, re.S)]
        numbered = sum(bool(re.fullmatch(r'\d+\.', c)) for c in col0) >= max(1, len(col0) - 1)
        lettered = sum(bool(re.fullmatch(r'[a-h]\)', c)) for c in col0) >= max(1, len(col0) - 1)
        if n == 3 and numbered:
            w = [620, 5500, 2906]          # number · stem · answer rule
        elif n == 2 and lettered:
            w = [620, 8406]                # letter · meaning
        elif n == 4:
            w = [1500, 2100, 2100, 3326]   # the Grammar Focus Box
        else:
            w = [TEXT_W // n] * n
            w[-1] += TEXT_W - sum(w)
        grid = '<w:tblGrid>' + ''.join(f'<w:gridCol w:w="{x}"/>' for x in w) + '</w:tblGrid>'
        tbl = re.sub(r'<w:tblGrid>.*?</w:tblGrid>', grid, tbl, flags=re.S)

        def set_cells(r):
            out, i = r, 0
            def one(mc):
                nonlocal i
                c = mc.group(0)
                ww = w[i] if i < len(w) else w[-1]
                i += 1
                c = re.sub(r'<w:tcW[^>]*/>', '', c)
                if '<w:tcPr>' in c:
                    return c.replace('<w:tcPr>',
                                     f'<w:tcPr><w:tcW w:w="{ww}" w:type="dxa"/>', 1)
                return re.sub(r'(<w:tc\b[^>]*>)',
                              r'\1' + f'<w:tcPr><w:tcW w:w="{ww}" w:type="dxa"/></w:tcPr>',
                              c, count=1)
            return re.sub(r'<w:tc\b.*?</w:tc>', one, out, flags=re.S)
        for r in rows:
            tbl = tbl.replace(r, set_cells(r), 1)
        return tbl
    d = re.sub(r'<w:tbl>.*?</w:tbl>', widths, d, flags=re.S)

    # a table whose first row is a real header repeats it after a page break
    def repeat_header(m):
        tbl = m.group(0)
        rows = re.findall(r'<w:tr\b.*?</w:tr>', tbl, re.S)
        if len(rows) < 3:
            return tbl
        first = rows[0]
        cells = re.findall(r'<w:tc\b.*?</w:tc>', first, re.S)
        texts = [ptext(c) for c in cells]
        if not all(texts) or any(re.fullmatch(r'\d+\.|[a-h]\)', t) for t in texts):
            return tbl
        if '<w:tblHeader/>' in first:
            return tbl
        if '<w:trPr>' in first:
            nf = first.replace('<w:trPr>', '<w:trPr><w:tblHeader/>', 1)
        else:
            nf = re.sub(r'(<w:tr\b[^>]*>)', r'\1<w:trPr><w:tblHeader/></w:trPr>',
                        first, count=1)
        nf = re.sub(r'(<w:tc\b[^>]*><w:tcPr>)', r'\1' + shade('EEF3F9'), nf)
        return tbl.replace(first, nf, 1)
    d = re.sub(r'<w:tbl>.*?</w:tbl>', repeat_header, d, flags=re.S)

    # a table row never splits across a page, so a stem cannot land on one page
    # with its answer rule on the next (check H10)
    def no_split(m):
        tr = m.group(0)
        if '<w:cantSplit/>' in tr:
            return tr
        if '<w:trPr>' in tr:
            return tr.replace('<w:trPr>', '<w:trPr><w:cantSplit/>', 1)
        return re.sub(r'(<w:tr\b[^>]*>)', r'\1<w:trPr><w:cantSplit/></w:trPr>', tr, count=1)
    d = re.sub(r'<w:tr\b.*?</w:tr>', no_split, d, flags=re.S)

    if t.get('column_a_shading'):
        def tint_first_cell(m):
            tr = m.group(0)
            cell = re.search(r'<w:tc\b.*?</w:tc>', tr, re.S)
            if not cell:
                return tr
            c = cell.group(0)
            if '<w:shd' in c:
                return tr
            c2 = re.sub(r'(<w:tcPr>)', r'\1' + shade(t['column_a_shading']), c, count=1)
            if c2 == c:
                c2 = re.sub(r'(<w:tc\b[^>]*>)', r'\1<w:tcPr>'
                            + shade(t['column_a_shading']) + '</w:tcPr>', c, count=1)
            return tr.replace(c, c2, 1)
        d = re.sub(r'<w:tr\b.*?</w:tr>', tint_first_cell, d, flags=re.S)

    return d
