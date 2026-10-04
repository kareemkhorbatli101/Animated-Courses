# -*- coding: utf-8 -*-
"""The table layer for the Workshop handouts.

The first version of these blocks built a data panel as a one-column table
whose body rows happened to hold four cells, and left Word to reconcile the
difference. Word reconciles it by giving the first column the width of the
banner row and squeezing everything else, which is exactly what it looked
like on the page.

So the rules here are structural, and `wslint` enforces them against the
built document rather than against this source:

  - a table declares one gridCol per column, and every row has that many
    cells, counting a span as the cells it covers;
  - a banner that runs the full width is one cell with w:gridSpan, never a
    short row;
  - widths come from the content, not from dividing 100 by the number of
    columns, and no column may be squeezed below a floor;
  - the layout is fixed, so Word uses the widths it is given.
"""
from docxw import tcpr, para, run

# Percentage floor and ceiling for any one column.
MIN_PCT = 9.0
MAX_PCT = 52.0


def _borders(col, sz):
    if sz <= 0:
        return ''
    return ('<w:tblBorders>' + ''.join(
        '<w:%s w:val="single" w:color="%s" w:sz="%d"/>' % (s, col, sz)
        for s in ('top', 'left', 'bottom', 'right', 'insideH', 'insideV'))
        + '</w:tblBorders>')


def tblpr(col, sz=6, fixed=True):
    return ('<w:tblPr><w:tblW w:type="pct" w:w="100%"/>'
            + ('<w:tblLayout w:type="fixed"/>' if fixed else '')
            + _borders(col, sz) + '</w:tblPr>')


def cell(xml, width, fill=None, pad=80, span=1, valign='top'):
    """One table cell. `width` is a percentage of the text column."""
    shd = '<w:shd w:fill="%s" w:val="clear"/>' % fill if fill else ''
    gs = '<w:gridSpan w:val="%d"/>' % span if span > 1 else ''
    va = '<w:vAlign w:val="%s"/>' % valign if valign != 'top' else ''
    pr = ('<w:tcPr><w:tcW w:type="pct" w:w="%d"/>%s%s%s'
          '<w:tcMar><w:top w:type="dxa" w:w="%d"/>'
          '<w:left w:type="dxa" w:w="%d"/>'
          '<w:bottom w:type="dxa" w:w="%d"/>'
          '<w:right w:type="dxa" w:w="%d"/></w:tcMar></w:tcPr>'
          % (int(round(width * 50)), gs, shd, va,
             pad - 30, pad + 30, pad - 30, pad + 30))
    return '<w:tc>%s%s</w:tc>' % (pr, xml)


def row(cells):
    return '<w:tr>%s</w:tr>' % ''.join(cells)


def table(rows, widths, col, sz=6, fixed=True):
    """`rows` are already-built <w:tr>; `widths` are percentages."""
    total = sum(widths)
    grid = ''.join('<w:gridCol w:w="%d"/>' % int(round(w / total * 9600))
                   for w in widths)
    return ('<w:tbl>%s<w:tblGrid>%s</w:tblGrid>%s</w:tbl>'
            % (tblpr(col, sz, fixed), grid, ''.join(rows)))


def widths_for(rows, floor=MIN_PCT, ceiling=None, weight_header=0.5):
    """Column widths in percentages, from how much text each column holds.

    A column is sized by a blend of its longest cell and its average cell, so
    that one unusually long entry widens the column a little without taking
    the whole table. The header is discounted, because a short header over
    long values should not make the column narrow.

    The ceiling depends on how many columns there are. A flat 52% was right
    for a two-column table, where the left column holds the label and the
    right the explanation, and wrong for a three- or four-column one, where
    it left the first column with more than half the measure and squeezed
    the rest into a ribbon. Past two columns the ceiling is 44%, so the
    widest column can still be twice the narrowest and no more.
    """
    if not rows:
        return [100.0]
    n = max(len(r) for r in rows)
    if ceiling is None:
        ceiling = MAX_PCT if n <= 2 else 44.0
    # And so does the floor. A flat 9% left the Classification column of a
    # three-column table at 13%, which is two characters and a hyphen: the
    # values in it are "Current asset" and "Noncurrent liability".
    floor = max(floor, 100.0 / n / 2.2) if n > 2 else floor
    score = []
    for j in range(n):
        lens = []
        for i, r in enumerate(rows):
            if j >= len(r):
                continue
            L = len(str(r[j]))
            lens.append(L * weight_header if i == 0 else L)
        if not lens:
            lens = [1]
        longest = max(lens)
        mean = sum(lens) / float(len(lens))
        score.append(max(1.0, 0.55 * longest + 0.45 * mean))
    total = sum(score)
    w = [s / total * 100.0 for s in score]
    # clamp, then give back or take away what the clamping moved, from the
    # columns that are still free to move
    for _ in range(6):
        over = [i for i, x in enumerate(w) if x > ceiling]
        under = [i for i, x in enumerate(w) if x < floor]
        if not over and not under:
            break
        spare = 0.0
        for i in over:
            spare += w[i] - ceiling
            w[i] = ceiling
        for i in under:
            spare -= floor - w[i]
            w[i] = floor
        free = [i for i in range(n) if floor < w[i] < ceiling]
        if not free or abs(spare) < 1e-9:
            break
        # The spare goes back in proportion to how much text each free
        # column holds, not in equal shares. Equal shares handed a
        # three-column journal's "Debit" column the whole 8% the first
        # column had given up, so a column of five-digit figures came out
        # as wide as a column of account names.
        base = sum(score[i] for i in free) or 1.0
        for i in free:
            # And no free column doubles. A "#" column of single digits
            # came out as wide as the Date beside it, because it was the
            # only column with room left when the account column gave up
            # its excess. Width the content does not need is width the
            # account column could have used.
            room = max(0.0, 2.0 * score[i] / sum(score) * 100.0 - w[i])
            w[i] += min(room, spare * score[i] / base)
    # Normalise to exactly 100 so the fixed layout fills the measure —
    # and then clamp again, because scaling up to reach 100 can push a
    # column back over the ceiling it was just held under.
    for _ in range(4):
        t = sum(w)
        w = [x / t * 100.0 for x in w]
        if max(w) <= ceiling + 0.01 and min(w) >= floor - 0.01:
            break
        w = [min(ceiling, max(floor, x)) for x in w]
    t = sum(w)
    return [x / t * 100.0 for x in w]


def banner(text, widths, fill, sz=17, color='FFFFFF', pad=90):
    """A full-width heading row inside a table, spanning every column."""
    return row([cell(para([run(text, b=True, color=color, sz=sz)],
                          '<w:spacing w:before="40" w:after="40"/>'),
                     sum(widths), fill, pad, span=len(widths))])
