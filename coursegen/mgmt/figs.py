# -*- coding: utf-8 -*-
"""The figure archetypes of the series, plus the economics-specific ones."""
from art import *
import art


def bubble(x, y, w, h, lines, tail='left', fill='#FFFFFF', stroke=BORDER, size=52):
    o = [rect(x, y, w, h, fill, stroke=stroke, sw=4, rx=22)]
    if tail == 'left':
        o.append(path('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                      % (x + 70, y + h, x + 70, y + h + 90, x + 190, y + h), fill=fill))
        o.append(line(x + 70, y + h, x + 70, y + h + 90, stroke, 4))
        o.append(line(x + 70, y + h + 90, x + 190, y + h, stroke, 4))
    else:
        o.append(path('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                      % (x + w - 70, y + h, x + w - 70, y + h + 90, x + w - 190, y + h), fill=fill))
        o.append(line(x + w - 70, y + h, x + w - 70, y + h + 90, stroke, 4))
        o.append(line(x + w - 70, y + h + 90, x + w - 190, y + h, stroke, 4))
    ly = y + (h - (len(lines) - 1) * (size + 18)) / 2 + size * 0.36
    for i, L in enumerate(lines):
        o.append(t(x + w / 2, ly + i * (size + 18), L, size, INK))
    return ''.join(o)


# ---------------------------------------------------------------- 1 hero
def hero(title, caption_lines, people, props=None):
    H = 1180
    o = [frame(H, title)]
    o.append(desk(140, H - 300, W - 280, 260))
    for i, (px, shirt, hair) in enumerate(people):
        o.append(avatar(px, H - 300 - 420, 1.0, shirt, hair))
    for i, L in enumerate(caption_lines):
        o.append(t(W / 2, BAND + 130 + i * 78, L, 60, MUTE))
    if props:
        o.append(props)
    return o, H


# ---------------------------------------------------------------- 2 cards
ICONS = {
    'coin':   lambda x, y, c: circ(x, y, 62, c) + t(x, y + 24, '£', 70, '#FFFFFF', bold=True),
    'note':   lambda x, y, c: rect(x - 78, y - 46, 156, 92, c, rx=10) + circ(x, y, 26, '#FFFFFF'),
    'bank':   lambda x, y, c: path('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z' % (x - 90, y - 20, x, y - 80, x + 90, y - 20), fill=c)
                              + rect(x - 76, y - 16, 152, 76, c) + rect(x - 90, y + 58, 180, 18, c),
    'chart':  lambda x, y, c: rect(x - 70, y - 10, 36, 70, c) + rect(x - 18, y - 50, 36, 110, c) + rect(x + 34, y - 80, 36, 140, c),
    'basket': lambda x, y, c: path('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f Z' % (x - 88, y - 20, x + 88, y - 20, x + 62, y + 66, x - 62, y + 66), fill=c)
                              + path('M %.1f %.1f a 54 54 0 0 1 108 0' % (x - 54, y - 20), stroke=c, sw=12),
    'wheat':  lambda x, y, c: line(x, y + 70, x, y - 70, c, 12) + ''.join(
                              path('M %.1f %.1f q 34 -20 48 -46' % (x + s * 4, y - 40 + k * 34), stroke=c, sw=11)
                              if s > 0 else path('M %.1f %.1f q -34 -20 -48 -46' % (x + s * 4, y - 40 + k * 34), stroke=c, sw=11)
                              for k in range(3) for s in (-1, 1)),
    'bulb':   lambda x, y, c: circ(x, y - 18, 54, c) + rect(x - 22, y + 34, 44, 40, c),
    'truck':  lambda x, y, c: rect(x - 92, y - 40, 112, 80, c, rx=8) + path('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f Z' % (x + 26, y - 10, x + 72, y - 10, x + 96, y + 20, x + 26, y + 20), fill=c)
                              + circ(x - 50, y + 54, 24, c) + circ(x + 62, y + 54, 24, c),
    'people': lambda x, y, c: circ(x - 44, y - 30, 34, c) + path('M %.1f %.1f a 50 50 0 0 1 100 0 Z' % (x - 94, y + 48), fill=c)
                              + circ(x + 50, y - 30, 34, c) + path('M %.1f %.1f a 50 50 0 0 1 100 0 Z' % (x, y + 48), fill=c),
    'doc':    lambda x, y, c: rect(x - 62, y - 80, 124, 160, c, rx=8) + ''.join(
                              rect(x - 40, y - 48 + k * 34, 80, 12, '#FFFFFF') for k in range(3)),
    'factory':lambda x, y, c: rect(x - 90, y - 10, 70, 80, c) + rect(x - 10, y - 50, 100, 120, c)
                              + rect(x - 76, y - 70, 20, 62, c),
    'globe':  lambda x, y, c: circ(x, y, 66, 'none', stroke=c, sw=12) + line(x - 66, y, x + 66, y, c, 10)
                              + path('M %.1f %.1f a 34 66 0 0 1 0 132' % (x, y - 66), stroke=c, sw=10)
                              + path('M %.1f %.1f a 34 66 0 0 0 0 132' % (x, y - 66), stroke=c, sw=10),
    'scale':  lambda x, y, c: line(x, y - 70, x, y + 60, c, 12) + line(x - 86, y - 50, x + 86, y - 50, c, 12)
                              + path('M %.1f %.1f a 34 34 0 0 0 68 0 Z' % (x - 120, y - 50), fill=c)
                              + path('M %.1f %.1f a 34 34 0 0 0 68 0 Z' % (x + 52, y - 50), fill=c),
}
PALETTE = [BLUE, TEAL, ORANGE, NAVY, GREEN, '#7B5EA7']


def cards(title, items, cols=None):
    n = len(items)
    cols = cols or (3 if n <= 6 else 4)
    rows = (n + cols - 1) // cols
    # 360, not 330: the tallest icon (doc) reaches 80 units below its centre,
    # so the first label baseline has to clear y + 200 or the name prints
    # across the picture.
    cw, ch, gap = (W - 160 - (cols - 1) * 40) / cols, 360, 40
    H = BAND + 70 + rows * (ch + gap) + 40
    o = [frame(H, title)]
    for i, (icon, label) in enumerate(items):
        r, c = divmod(i, cols)
        x = 80 + c * (cw + gap); y = BAND + 60 + r * (ch + gap)
        col = PALETTE[i % len(PALETTE)]
        o.append(rect(x, y, cw, ch, '#FFFFFF', stroke='#C9D6E2', sw=3, rx=22))
        o.append(ICONS.get(icon, ICONS['doc'])(x + cw / 2, y + 120, col))
        parts = label.split('\n') if '\n' in label else wrap(label, 18)
        for k, L in enumerate(parts[:2]):
            size = 48 if k == 0 else 40
            while art.text_w(L, size, bold=(k == 0)) > cw - 40 and size > 28:
                size -= 2
            o.append(t(x + cw / 2, y + 262 + k * 54, L, size,
                       INK if k == 0 else MUTE, bold=(k == 0)))
    return o, int(H)


# ---------------------------------------------------------------- 3 grammar
def grammar(left_title, left_lines, right_title, right_lines, note_l='', note_r=''):
    H = 1000
    o = [frame(H)]
    bw = (W - 240) / 2
    for k, (ttl, lines, note, col) in enumerate(
            [(left_title, left_lines, note_l, TEAL), (right_title, right_lines, note_r, ORANGE)]):
        x = 80 + k * (bw + 80)
        o.append(rect(x, 70, bw, H - 150, '#FFFFFF', stroke=col, sw=5, rx=24))
        o.append(t(x + bw / 2, 190, ttl, 70, col, bold=True))
        for i, L in enumerate(lines):
            o.append(t(x + bw / 2, 310 + i * 74, L, 54, INK))
        if note:
            o.append(t(x + bw / 2, H - 125, note, 46, col, bold=True))
    return o, H


# ---------------------------------------------------------------- 4 dialogue
def dialogue(line_a, line_b, shirt_a='teal', hair_a='long', shirt_b='blue', hair_b='short'):
    ha = 150 + 70 * len(line_a)
    hb = 150 + 70 * len(line_b)
    H = 60 + ha + 110 + hb + 110 + 560
    o = [frame(H, None)]
    o.append(bubble(230, 60, 1180, ha, line_a, 'left'))
    o.append(bubble(W - 230 - 1180, 60 + ha + 110, 1180, hb, line_b, 'right'))
    o.append(desk(120, H - 210, W - 240, 190))
    o.append(avatar(520, H - 210 - 420, 1.0, shirt_a, hair_a))
    o.append(avatar(W - 620, H - 210 - 420, 1.0, shirt_b, hair_b))
    return o, int(H)


# ---------------------------------------------------------------- 5 chain
def chain(title, steps):
    H = BAND + 520
    o = [frame(H, title)]
    n = len(steps)
    span = W - 640
    for i, s in enumerate(steps):
        cx = 320 + span * i / max(1, n - 1)
        if i < n - 1:
            o.append(line(cx, BAND + 230, 320 + span * (i + 1) / (n - 1), BAND + 230, '#C9A227', 10))
    for i, s in enumerate(steps):
        cx = 320 + span * i / max(1, n - 1)
        o.append(circ(cx, BAND + 230, 78, NAVY))
        o.append(t(cx, BAND + 254, str(i + 1), 72, '#FFFFFF', bold=True))
        for k, L in enumerate(wrap(s, 16)[:2]):
            o.append(t(cx, BAND + 390 + k * 56, L, 50, INK, bold=True))
    return o, H


# ---------------------------------------------------------------- 6 split
def split(title, lt, litems, rt, ritems):
    rows = max(len(litems), len(ritems))
    H = BAND + 220 + rows * 76 + 80
    o = [frame(H, title)]
    bw = (W - 240) / 2
    for k, (ttl, items, col) in enumerate([(lt, litems, TEAL), (rt, ritems, ORANGE)]):
        x = 80 + k * (bw + 80)
        o.append(rect(x, BAND + 50, bw, H - BAND - 110, '#FFFFFF', stroke=col, sw=5, rx=24))
        o.append(rect(x, BAND + 50, bw, 96, col, rx=24))
        o.append(rect(x, BAND + 110, bw, 36, col))
        o.append(t(x + bw / 2, BAND + 118, ttl, 58, '#FFFFFF', bold=True))
        for i, it in enumerate(items):
            o.append(t(x + bw / 2, BAND + 215 + i * 76, it, 50, INK))
    return o, int(H)


# ---------------------------------------------------------------- 7 bar chart
def nice_top(v, divs=4):
    """Round an axis maximum up to a readable step."""
    import math
    raw = v * 1.15 / divs
    mag = 10 ** math.floor(math.log10(raw)) if raw > 0 else 1
    for m in (1, 2, 2.5, 5, 10):
        if raw <= m * mag:
            return m * mag * divs
    return 10 * mag * divs


def bars(title, data, ylabel='', note=''):
    H = BAND + 900
    o = [frame(H, title)]
    x0, y0, pw, ph = 300, BAND + 660, W - 520, 520
    mx = nice_top(max(v for _, v in data))
    o.append(line(x0, y0, x0 + pw, y0, MUTE, 5))
    o.append(line(x0, y0, x0, y0 - ph, MUTE, 5))
    for g in range(1, 5):
        gy = y0 - ph * g / 4.0
        o.append(line(x0, gy, x0 + pw, gy, '#D9E2EC', 3))
        o.append(t(x0 - 30, gy + 16, '%g' % round(mx * g / 4.0, 2), 42, MUTE, anchor='end'))
    n = len(data)
    bw = pw / (n * 1.8)
    for i, (lab, v) in enumerate(data):
        bx = x0 + pw * (i + 0.5) / n - bw / 2
        bh = ph * v / mx
        o.append(rect(bx, y0 - bh, bw, bh, PALETTE[i % len(PALETTE)], rx=8))
        o.append(t(bx + bw / 2, y0 - bh - 26, '%g' % v, 46, INK, bold=True))
        for k, L in enumerate(wrap(lab, 14)[:2]):
            o.append(t(bx + bw / 2, y0 + 62 + k * 50, L, 44, INK))
    if ylabel:
        o.append(t(120, BAND + 76, ylabel, 44, MUTE, anchor='start'))
    if note:
        o.append(t(W / 2, H - 40, note, 40, MUTE, italic=True))
    return o, H


# ---------------------------------------------------------------- 8 line chart
def lines_chart(title, xlabels, series, note=''):
    H = BAND + 900
    o = [frame(H, title)]
    x0, y0, pw, ph = 300, BAND + 660, W - 520, 520
    allv = [v for _, vs in series for v in vs]
    mx, mn = nice_top(max(allv)), 0
    rng = (mx - mn) or 1
    o.append(line(x0, y0, x0 + pw, y0, MUTE, 5))
    o.append(line(x0, y0, x0, y0 - ph, MUTE, 5))
    for g in range(1, 5):
        gy = y0 - ph * g / 4.0
        o.append(line(x0, gy, x0 + pw, gy, '#D9E2EC', 3))
        o.append(t(x0 - 30, gy + 16, '%g' % round(mn + rng * g / 4.0, 1), 42, MUTE, anchor='end'))
    n = len(xlabels)
    for i, L in enumerate(xlabels):
        o.append(t(x0 + pw * i / max(1, n - 1), y0 + 62, L, 44, INK))
    for si, (name, vs) in enumerate(series):
        col = PALETTE[si % len(PALETTE)]
        pts = [(x0 + pw * i / max(1, n - 1), y0 - ph * (v - mn) / rng) for i, v in enumerate(vs)]
        o.append(path('M ' + ' L '.join('%.1f %.1f' % p for p in pts), stroke=col, sw=9))
        for p in pts:
            o.append(circ(p[0], p[1], 14, col))
        o.append(rect(x0 + 40 + si * 520, BAND + 60, 40, 18, col, rx=6))
        o.append(t(x0 + 96 + si * 520, BAND + 82, name, 46, INK, anchor='start'))
    if note:
        o.append(t(W / 2, H - 40, note, 40, MUTE, italic=True))
    return o, H


# ---------------------------------------------------------------- 9 data table
def datatable(title, header, rows, widths=None):
    n = len(header)
    widths = widths or [1.0 / n] * n
    H = BAND + 120 + (len(rows) + 1) * 96 + 60
    o = [frame(H, title)]
    x0, tw = 120, W - 240
    y = BAND + 80
    o.append(rect(x0, y, tw, 96, NAVY, rx=14))
    cx = x0
    for j, h in enumerate(header):
        o.append(t(cx + tw * widths[j] / 2, y + 62, h, 50, '#FFFFFF', bold=True))
        cx += tw * widths[j]
    y += 96
    for i, r in enumerate(rows):
        o.append(rect(x0, y, tw, 96, '#FFFFFF' if i % 2 else '#F1F6FB'))
        o.append(line(x0, y + 96, x0 + tw, y + 96, '#D9E2EC', 2))
        cx = x0
        for j, c in enumerate(r):
            bold = (j == 0)
            o.append(t(cx + tw * widths[j] / 2, y + 62, c, 48, INK, bold=bold))
            cx += tw * widths[j]
        y += 96
    o.append(rect(x0, BAND + 80, tw, y - BAND - 80, 'none', stroke='#C9D6E2', sw=3, rx=14))
    return o, int(H)


# ---------------------------------------------------------------- 10 can-do
PANEL = {'#00695C': ('#00352E', '#5FC9B5', '#D7F0EC'),
         '#1A3E72': ('#102546', '#C9A227', '#DCE6F5'),
         '#37474F': ('#1F2A30', '#B87333', '#E8E2DC')}


def cando(unit, title, line, nxt):
    H = 900
    base, acc, sec = PANEL.get(art.ACCENT, ('#1F3864', '#C9A227', '#D7E2F0'))
    o = [rect(0, 0, W, H, base)]
    o.append(circ(W / 2, 250, 110, 'none', stroke=acc, sw=8))
    o.append(t(W / 2, 282, '✓', 112, acc, bold=True))
    o.append(t(W / 2, 470, 'END OF UNIT %d' % unit, 56, acc, bold=True, ls='6'))
    size = 92
    while art.text_w(title, size, bold=True) > W - 300 and size > 48:
        size -= 2
    o.append(t(W / 2, 582, title, size, '#FFFFFF', bold=True))
    o.append(t(W / 2, 672, line, 52, sec))
    o.append(t(W / 2, 772, nxt, 54, acc, bold=True))
    return o, H


# ---------------------------------------------------------------- 11 quotes
def quote_row(title, quotes):
    H = BAND + 480
    o = [frame(H, title)]
    bw = (W - 200 - (len(quotes) - 1) * 50) / len(quotes)
    for i, (who, q) in enumerate(quotes):
        x = 100 + i * (bw + 50)
        col = PALETTE[i % len(PALETTE)]
        o.append(rect(x, BAND + 60, bw, 340, '#FFFFFF', stroke=col, sw=4, rx=20))
        o.append(t(x + 44, BAND + 150, '“', 120, col, bold=True, anchor='start'))
        for k, L in enumerate(wrap(q, 26)[:3]):
            o.append(t(x + bw / 2, BAND + 170 + k * 58, L, 46, INK))
        o.append(t(x + bw / 2, BAND + 360, '— ' + who, 44, col, bold=True))
    return o, H


# ---------------------------------------------------------------- 12 money
def moneypanel(title, old_label, new_label, note):
    H = BAND + 620
    o = [frame(H, title)]
    for k, (lab, col, x) in enumerate([(old_label, '#9AA7B4', 300), (new_label, GREEN, W - 1180)]):
        o.append(rect(x, BAND + 110, 880, 360, '#FFFFFF', stroke=col, sw=6, rx=26))
        o.append(rect(x + 50, BAND + 170, 780, 180, col, rx=14))
        o.append(circ(x + 440, BAND + 260, 64, '#FFFFFF'))
        o.append(t(x + 440, BAND + 282, '£', 72, col, bold=True))
        o.append(t(x + 440, BAND + 420, lab, 54, INK, bold=True))
    o.append(t(W / 2, BAND + 300, '→', 110, NAVY, bold=True))
    o.append(t(W / 2, H - 50, note, 46, MUTE, italic=True))
    return o, H


# ---------------------------------------------------------------- 13 map
def mappanel(title, pins, note=''):
    H = BAND + 820
    o = [frame(H, title)]
    o.append(rect(0, BAND, 420, H - BAND, '#AED6EC'))
    for k in range(9):
        o.append(path('M 60 %d q 90 -34 180 0 q 90 34 180 0' % (BAND + 90 + k * 78), stroke='#7FB8D4', sw=6))
    o.append(path('M 420 %d L 900 %d L 1700 %d L 2620 %d L 2880 %d L 2700 %d L 1900 %d L 1150 %d L 560 %d Z'
                  % (BAND + 140, BAND + 70, BAND + 100, BAND + 180, BAND + 430,
                     BAND + 700, BAND + 760, BAND + 690, BAND + 520),
                  fill='#E7D3A6', stroke='#B5643C', sw=7))
    for (px, py, label) in pins:
        o.append(circ(px, py - 56, 20, '#B8860B'))
        wlab = max(240, 40 + len(label) * 27)
        o.append(rect(px - wlab / 2, py, wlab, 86, '#FFFFFF', stroke='#D0A957', sw=4, rx=14))
        o.append(t(px, py + 60, label, 48, '#7A2634', bold=True))
    if note:
        o.append(t(W / 2, H - 36, note, 40, MUTE, italic=True))
    return o, H


# ---------------------------------------------------------------- 14 cover
def cover(title_lines, strap, level, series, footer, sub):
    H = 4240
    o = [rect(0, 0, W, H, NAVY)]
    o.append(rect(90, 90, W - 180, H - 180, 'none', stroke='#C9A227', sw=5))
    o.append(rect(150, 150, W - 300, H - 300, 'none', stroke='#C9A227', sw=3))
    o.append(t(W / 2, 470, series, 64, '#C9A227', bold=True, ls='12'))
    o.append(circ(W / 2, 700, 92, 'none', stroke='#C9A227', sw=9))
    o.append(rect(W / 2 - 46, 672, 26, 76, '#C9A227'))
    o.append(rect(W / 2 - 6, 636, 26, 112, '#C9A227'))
    o.append(rect(W / 2 + 34, 656, 26, 92, '#C9A227'))
    o.append(line(W / 2 - 460, 860, W / 2 + 460, 860, '#C9A227', 4))
    for i, L in enumerate(title_lines):
        o.append(t(W / 2, 1270 + i * 210, L, 178, '#FFFFFF', bold=True))
    o.append(t(W / 2, 1270 + len(title_lines) * 210 + 110, level, 96, '#C9A227', bold=True, ls='26'))
    o.append(t(W / 2, 1270 + len(title_lines) * 210 + 250, strap, 72, '#D7E2F0'))
    # emblem: a rising bar chart
    bx, by = W / 2 - 430, 2980
    for i, h in enumerate([160, 250, 340, 470, 600]):
        o.append(rect(bx + i * 180, by - h, 118, h, '#C9A227', rx=10))
    o.append(path('M %d %d L %d %d' % (bx + 20, by - 240, bx + 4 * 180 + 98, by - 660),
                  stroke='#FFFFFF', sw=10))
    o.append(circ(bx + 4 * 180 + 98, by - 660, 26, '#FFFFFF'))
    o.append(rect(W / 2 - 560, 3300, 1120, 240, 'none', stroke='#C9A227', sw=4, rx=18))
    o.append(t(W / 2, 3400, sub[0], 86, '#FFFFFF', bold=True))
    o.append(t(W / 2, 3490, sub[1], 58, '#D7E2F0'))
    o.append(t(W / 2, 3900, footer, 66, '#C9A227', bold=True))
    o.append(line(W / 2 - 300, 3960, W / 2 + 300, 3960, '#C9A227', 3))
    o.append(t(W / 2, 4060, "Student's Book", 60, '#FFFFFF'))
    return o, H


# ---------------------------------------------------------------- 15 email thread
def emailthread(title, msgs):
    """msgs: list of (who, when, [lines], side) where side is 'l' or 'r'."""
    hs = [110 + 58 * len(m[2]) for m in msgs]
    H = BAND + 60 + sum(hs) + 30 * len(msgs) + 40
    o = [frame(H, title)]
    y = BAND + 60
    for (who, when, lines, side), hh in zip(msgs, hs):
        bw = W - 560
        x = 120 if side == 'l' else W - 120 - bw
        col = art.ACCENT if side == 'l' else '#6B6F76'
        o.append(rect(x, y, bw, hh, '#FFFFFF', stroke=col, sw=4, rx=20))
        o.append(rect(x, y, bw, 56, col, rx=20))
        o.append(rect(x, y + 28, bw, 28, col))
        o.append(t(x + 26, y + 40, who, 40, '#FFFFFF', bold=True, anchor='start'))
        o.append(t(x + bw - 26, y + 40, when, 36, '#E8EEF4', anchor='end'))
        for k, L in enumerate(lines):
            o.append(t(x + 30, y + 112 + k * 58, L, 44, INK, anchor='start'))
        y += hh + 30
    return o, int(H)


# ---------------------------------------------------------------- 16 schedule
def schedule(title, rows, weeks=8):
    """rows: list of (label, start_week, length, status) status in ok/late/risk."""
    H = BAND + 140 + len(rows) * 92 + 60
    o = [frame(H, title)]
    x0, lw = 160, 760
    pw = W - x0 - lw - 160
    COL = {'ok': '#2E7D32', 'risk': '#D98324', 'late': '#B3261E'}
    ACC = art.ACCENT
    for w in range(weeks + 1):
        gx = x0 + lw + pw * w / weeks
        o.append(line(gx, BAND + 110, gx, H - 60, '#D9E2EC', 3))
        if w < weeks:
            o.append(t(gx + pw / (2.0 * weeks), BAND + 86, 'W%d' % (w + 1), 38, MUTE))
    for i, (lab, st, ln, status) in enumerate(rows):
        y = BAND + 130 + i * 92
        o.append(t(x0, y + 40, lab, 44, INK, anchor='start', bold=True))
        bx = x0 + lw + pw * st / weeks
        o.append(rect(bx + 6, y + 10, pw * ln / weeks - 12, COL.get(status, ACC) and 54, COL.get(status, ACC), rx=14))
    for k, (lab, c) in enumerate([('on track', '#2E7D32'), ('at risk', '#D98324'), ('late', '#B3261E')]):
        o.append(rect(x0 + k * 420, H - 52, 40, 24, c, rx=6))
        o.append(t(x0 + 56 + k * 420, H - 30, lab, 38, MUTE, anchor='start'))
    return o, int(H)


# ---------------------------------------------------------------- 17 options grid
def options_grid(title, criteria, options):
    """options: list of (name, [marks]) where a mark is '++','+','0','-','--'."""
    cols = len(options)
    H = BAND + 120 + (len(criteria) + 1) * 100 + 60
    o = [frame(H, title)]
    x0 = 120
    # every option heading has to fit its own column, and the criterion
    # column has to fit its longest label, or the header is printed over
    # the table edge.
    need = max(art.text_w(n, 46, bold=True) for n, _m in options) + 44
    lw = max(art.text_w(c, 44) for c in criteria) + 70
    lw = max(560.0, min(lw, W - x0 * 2 - need * cols))
    cw = (W - x0 * 2 - lw) / cols
    if cw < need:                      # still tight: shrink the headings
        pass
    y = BAND + 70
    o.append(rect(x0, y, lw + cw * cols, 100, NAVY, rx=14))
    o.append(t(x0 + 30, y + 64, 'Criterion', 46, '#FFFFFF', bold=True, anchor='start'))
    for j, (name, _m) in enumerate(options):
        hs = 46
        while art.text_w(name, hs, bold=True) > cw - 24 and hs > 28:
            hs -= 2
        o.append(t(x0 + lw + cw * (j + 0.5), y + 64, name, hs, '#FFFFFF', bold=True))
    MARK = {'++': ('#2E7D32', '✓✓'), '+': ('#2E7D32', '✓'),
            '0': ('#9AA7B4', '–'), '-': ('#D98324', '✗'), '--': ('#B3261E', '✗✗')}
    for i, c in enumerate(criteria):
        y2 = y + 100 + i * 100
        o.append(rect(x0, y2, lw + cw * cols, 100, '#FFFFFF' if i % 2 else '#F1F6FB'))
        o.append(line(x0, y2 + 100, x0 + lw + cw * cols, y2 + 100, '#D9E2EC', 2))
        cs = 44
        while art.text_w(c, cs) > lw - 56 and cs > 28:
            cs -= 2
        o.append(t(x0 + 30, y2 + 64, c, cs, INK, anchor='start'))
        for j, (_n, marks) in enumerate(options):
            col, sym = MARK.get(marks[i], ('#9AA7B4', '–'))
            o.append(t(x0 + lw + cw * (j + 0.5), y2 + 68, sym, 52, col, bold=True))
    o.append(rect(x0, y, lw + cw * cols, 100 + len(criteria) * 100, 'none',
                  stroke='#C9D6E2', sw=3, rx=14))
    return o, int(H)


# ---------------------------------------------------------------- 18 steps ladder
def ladder(title, steps):
    """A scaffold ladder: numbered rungs rising left to right."""
    ACC = art.ACCENT
    n = len(steps)
    bw = (W - 200 - (n - 1) * 30) / n
    hs = [330 + i * 56 for i in range(n)]
    H = BAND + 70 + max(hs) + 70
    o = [frame(H, title)]
    for i, (head, sub) in enumerate(steps):
        x = 100 + i * (bw + 30)
        h = hs[i]
        y = H - 70 - h
        o.append(rect(x, y, bw, h, '#FFFFFF', stroke=ACC, sw=4, rx=18))
        o.append(rect(x, y, bw, 76, ACC, rx=18))
        o.append(rect(x, y + 40, bw, 36, ACC))
        o.append(t(x + bw / 2, y + 56, '%d' % (i + 1), 46, '#FFFFFF', bold=True))
        for k, L in enumerate(wrap(head, 13)[:2]):
            o.append(t(x + bw / 2, y + 142 + k * 50, L, 44, INK, bold=True))
        for k, L in enumerate(wrap(sub, 16)[:4]):
            o.append(t(x + bw / 2, y + 236 + k * 50, L, 38, MUTE))
    return o, int(H)


# ---------------------------------------------------------------- 19 series cover
def biz_cover(title_lines, strap, level_badge, book_badge, series, footer, sub, emblem='chart'):
    H = 4240
    base = {'B1': '#0B3B36', 'B2': '#102546', 'C1': '#1F2A30'}.get(level_badge[:2], '#0B3B36')
    acc = {'B1': '#5FC9B5', 'B2': '#C9A227', 'C1': '#B87333'}.get(level_badge[:2], '#5FC9B5')
    sec = {'B1': '#D7F0EC', 'B2': '#DCE6F5', 'C1': '#E8E2DC'}.get(level_badge[:2], '#D7F0EC')
    o = [rect(0, 0, W, H, base)]
    o.append(rect(0, 0, W, 26, acc))
    o.append(rect(90, 110, W - 180, H - 200, 'none', stroke=acc, sw=5))
    o.append(rect(150, 170, W - 300, H - 320, 'none', stroke=acc, sw=3))
    o.append(t(W / 2, 470, series, 60, acc, bold=True, ls='11'))
    # emblem
    cx, cy = W / 2, 760
    o.append(circ(cx, cy, 104, 'none', stroke=acc, sw=9))
    if emblem == 'chart':
        for i, h in enumerate([42, 68, 96]):
            o.append(rect(cx - 56 + i * 44, cy + 44 - h, 30, h, acc, rx=6))
    elif emblem == 'speech':
        o.append(rect(cx - 66, cy - 48, 132, 84, acc, rx=18))
        o.append(path('M %f %f L %f %f L %f %f Z' % (cx - 30, cy + 36, cx - 30, cy + 78, cx + 18, cy + 36), fill=acc))
    elif emblem == 'handshake':
        # two forearms meeting, with the clasp as a rounded block between them
        o.append(path('M %f %f L %f %f L %f %f L %f %f Z'
                      % (cx - 86, cy - 30, cx - 20, cy - 10,
                         cx - 20, cy + 22, cx - 86, cy + 2), fill=acc))
        o.append(path('M %f %f L %f %f L %f %f L %f %f Z'
                      % (cx + 86, cy - 30, cx + 20, cy - 10,
                         cx + 20, cy + 22, cx + 86, cy + 2), fill=acc))
        o.append(rect(cx - 30, cy - 18, 60, 42, acc, rx=14))
        o.append(line(cx, cy - 18, cx, cy + 24, base, 5))
    elif emblem == 'compass':
        o.append(path('M %f %f L %f %f L %f %f L %f %f Z' % (cx, cy - 62, cx + 30, cy, cx, cy + 62, cx - 30, cy), fill=acc))
    elif emblem == 'box':
        o.append(path('M %f %f L %f %f L %f %f L %f %f Z'
                      % (cx - 74, cy - 18, cx, cy - 58, cx + 74, cy - 18, cx, cy + 22), fill=acc))
        o.append(path('M %f %f L %f %f L %f %f L %f %f Z'
                      % (cx - 74, cy - 18, cx, cy + 22, cx, cy + 66, cx - 74, cy + 26), fill=acc))
        o.append(path('M %f %f L %f %f L %f %f L %f %f Z'
                      % (cx + 74, cy - 18, cx, cy + 22, cx, cy + 66, cx + 74, cy + 26),
                      fill=acc, stroke=base, sw=4))
    elif emblem == 'door':
        o.append(rect(cx - 52, cy - 66, 104, 132, 'none', stroke=acc, sw=10, rx=8))
        o.append(circ(cx + 26, cy + 4, 11, acc))
        o.append(line(cx - 52, cy + 66, cx + 52, cy + 66, acc, 10))
    elif emblem == 'clock':
        o.append(circ(cx, cy, 68, 'none', stroke=acc, sw=10))
        o.append(line(cx, cy, cx, cy - 42, acc, 10))
        o.append(line(cx, cy, cx + 34, cy + 14, acc, 10))
    elif emblem == 'key':
        o.append(circ(cx - 34, cy, 36, 'none', stroke=acc, sw=12))
        o.append(line(cx, cy, cx + 76, cy, acc, 12))
        o.append(line(cx + 46, cy, cx + 46, cy + 32, acc, 10))
        o.append(line(cx + 72, cy, cx + 72, cy + 32, acc, 10))
    elif emblem == 'scale':
        o.append(line(cx, cy - 64, cx, cy + 56, acc, 11))
        o.append(line(cx - 44, cy + 56, cx + 44, cy + 56, acc, 11))
        o.append(line(cx - 78, cy - 44, cx + 78, cy - 44, acc, 9))
        for sx in (-78, 78):
            o.append(path('M %f %f L %f %f L %f %f Z'
                          % (cx + sx - 38, cy - 24, cx + sx + 38, cy - 24,
                             cx + sx, cy + 22), fill='none', stroke=acc, sw=8))
    elif emblem == 'people':
        o.append(circ(cx - 38, cy - 24, 28, acc)); o.append(circ(cx + 38, cy - 24, 28, acc))
        o.append(path('M %f %f a 44 44 0 0 1 88 0 Z' % (cx - 82, cy + 46), fill=acc))
        o.append(path('M %f %f a 44 44 0 0 1 88 0 Z' % (cx - 6, cy + 46), fill=acc))
    else:
        o.append(rect(cx - 56, cy - 56, 112, 112, acc, rx=16))
    o.append(line(W / 2 - 460, 940, W / 2 + 460, 940, acc, 4))
    for i, L in enumerate(title_lines):
        o.append(t(W / 2, 1300 + i * 200, L, 168, '#FFFFFF', bold=True))
    yb = 1300 + len(title_lines) * 200
    o.append(rect(W / 2 - 430, yb + 20, 860, 150, 'none', stroke=acc, sw=5, rx=18))
    o.append(t(W / 2 - 215, yb + 122, level_badge, 92, acc, bold=True))
    o.append(line(W / 2, yb + 42, W / 2, yb + 148, acc, 3))
    o.append(t(W / 2 + 215, yb + 122, book_badge, 72, '#FFFFFF', bold=True))
    o.append(t(W / 2, yb + 290, strap, 68, sec))
    bw = max(1200.0,
             art.text_w(sub[0], 82, bold=True) + 150,
             art.text_w(sub[1], 56) + 150)
    bw = min(bw, W - 360)
    o.append(rect(W / 2 - bw / 2, 3290, bw, 250, 'none', stroke=acc, sw=4, rx=18))
    o.append(t(W / 2, 3396, sub[0], 82, '#FFFFFF', bold=True))
    o.append(t(W / 2, 3488, sub[1], 56, sec))
    o.append(t(W / 2, 3880, footer, 62, acc, bold=True))
    o.append(line(W / 2 - 300, 3938, W / 2 + 300, 3938, acc, 3))
    o.append(t(W / 2, 4042, "Student's Book", 58, '#FFFFFF'))
    o.append(rect(0, H - 26, W, 26, acc))
    return o, H


def biz_back(level_badge, book_badge, series, blurb, units, inside, cast, footer):
    H = 4240
    base = {'B1': '#0B3B36', 'B2': '#102546', 'C1': '#1F2A30'}.get(level_badge[:2], '#0B3B36')
    acc = {'B1': '#5FC9B5', 'B2': '#C9A227', 'C1': '#B87333'}.get(level_badge[:2], '#5FC9B5')
    sec = {'B1': '#D7F0EC', 'B2': '#DCE6F5', 'C1': '#E8E2DC'}.get(level_badge[:2], '#D7F0EC')
    o = [rect(0, 0, W, H, base), rect(0, 0, W, 26, acc)]
    o.append(rect(90, 110, W - 180, H - 200, 'none', stroke=acc, sw=5))
    o.append(t(W / 2, 330, 'ABOUT THIS BOOK', 64, acc, bold=True, ls='10'))
    o.append(line(W / 2 - 300, 390, W / 2 + 300, 390, acc, 3))
    y = 500
    for L in blurb:
        o.append(t(W / 2, y, L, 54, sec)); y += 76
    y += 50
    o.append(t(240, y, 'The ten units', 62, acc, bold=True, anchor='start')); y += 90
    half = (len(units) + 1) // 2
    for i, u in enumerate(units):
        col = i // half
        row = i % half
        o.append(circ(260 + col * 1340, y + row * 76 - 14, 9, acc))
        o.append(t(300 + col * 1340, y + row * 76, '%d · %s' % (i + 1, u), 46, sec, anchor='start'))
    y += half * 76 + 70
    o.append(rect(200, y, W - 400, 60 + len(inside) * 68, 'none', stroke=acc, sw=4, rx=18))
    y += 70
    for L in inside:
        o.append(t(W / 2, y, L, 44, sec)); y += 68
    y += 90
    o.append(t(W / 2, y, 'Meet the people', 62, acc, bold=True)); y += 80
    avail = W - 420
    for L in cast.split('\n'):
        size = 50
        while art.text_w(L, size) > avail and size > 30:
            size -= 2
        o.append(t(W / 2, y, L, size, sec)); y += 66
    y += 54
    o.append(line(W / 2 - 320, H - 420, W / 2 + 320, H - 420, acc, 3))
    o.append(t(W / 2, H - 330, series, 60, acc, bold=True, ls='9'))
    o.append(t(W / 2, H - 250, footer, 50, sec))
    o.append(rect(0, H - 26, W, 26, acc))
    return o, H


# ================================================================ Brief Lab and AI archetypes
def marked_brief(title, lines, marks):
    """Draft one as a sheet, with numbered flags against the spans that fail.

    lines: the brief, one string per printed line.
    marks: {line index: flag number}, drawn in the left margin in red.
    """
    pad, lh = 100, 86
    H = BAND + 110 + len(lines) * lh + 150
    o = [frame(H, title)]
    o.append(rect(pad, BAND + 70, W - 2 * pad, len(lines) * lh + 60, '#FFFFFF',
                  stroke=BORDER, sw=4, rx=16))
    o.append(rect(pad, BAND + 70, 118, len(lines) * lh + 60, '#FBEAE8', rx=16))
    o.append(rect(pad + 100, BAND + 70, 18, len(lines) * lh + 60, '#FBEAE8'))
    for i, L in enumerate(lines):
        y = BAND + 70 + 60 + i * lh
        if i in marks:
            o.append(circ(pad + 59, y - 14, 36, RED))
            o.append(t(pad + 59, y + 2, str(marks[i]), 42, '#FFFFFF', bold=True))
            o.append(t(pad + 150, y, L, 46, INK, anchor='start', bold=True))
        else:
            o.append(t(pad + 150, y, L, 46, MUTE, anchor='start'))
    o.append(t(W / 2, H - 60, '%d spans are marked. The diagnosis names which fault each one is.'
               % len(marks), 42, MUTE, italic=True))
    return o, int(H)


def brief_vs_output(title, asked, came_back, gap):
    """What was asked for, beside what came back, with the gap named underneath."""
    gl = wrap(gap, 74)[:3]
    gh = 108 + len(gl) * 56
    H = BAND + 70 + 600 + gh + 70
    o = [frame(H, title)]
    bw = (W - 240) / 2
    for k, (ttl, lines, col) in enumerate(
            [('WE ASKED FOR', asked, TEAL), ('WHAT CAME BACK', came_back, RED)]):
        x = 80 + k * (bw + 80)
        o.append(rect(x, BAND + 70, bw, 560, '#FFFFFF', stroke=col, sw=5, rx=20))
        o.append(rect(x, BAND + 70, bw, 92, col, rx=20))
        o.append(rect(x, BAND + 130, bw, 32, col))
        o.append(t(x + bw / 2, BAND + 132, ttl, 54, '#FFFFFF', bold=True))
        for i, L in enumerate(lines[:5]):
            o.append(t(x + 44, BAND + 240 + i * 74, '·  ' + L, 46, INK, anchor='start'))
    gy = BAND + 70 + 600
    o.append(rect(80, gy, W - 160, gh, '#FFF4E0', stroke=ORANGE, sw=4, rx=18))
    o.append(t(W / 2, gy + 62, 'THE GAP', 48, ORANGE, bold=True, ls='8'))
    for i, L in enumerate(gl):
        o.append(t(W / 2, gy + 124 + i * 56, L, 44, INK))
    return o, int(H)


def spec_card(title, rows):
    """Purpose / Scope / Inputs / Criteria / Done / Fallback, one line each."""
    lh = 140
    H = BAND + 80 + len(rows) * lh + 80
    o = [frame(H, title)]
    for i, (label, text) in enumerate(rows):
        y = BAND + 80 + i * lh
        o.append(rect(80, y, W - 160, lh - 18, '#FFFFFF', stroke=BORDER, sw=3, rx=14))
        o.append(rect(80, y, 420, lh - 18, art.ACCENT, rx=14))
        o.append(rect(380, y, 120, lh - 18, art.ACCENT))
        o.append(t(230, y + 68, label.upper(), 46, '#FFFFFF', bold=True))
        wl = wrap(text, 56)[:2]
        for k, L in enumerate(wl):
            o.append(t(540, y + (52 if len(wl) > 1 else 76) + k * 56,
                       L, 44, INK, anchor='start'))
    return o, int(H)


def handover(title, agent_steps, human_step, note=''):
    """Where the agent stops and a named person signs."""
    n = len(agent_steps)
    bw = (W - 260 - (n - 1) * 36) / (n + 1)
    H = BAND + 70 + 480 + (110 if note else 40)
    o = [frame(H, title)]
    y = BAND + 110
    for i, s in enumerate(agent_steps):
        x = 100 + i * (bw + 36)
        o.append(rect(x, y, bw, 300, '#FFFFFF', stroke=TEAL, sw=4, rx=18))
        o.append(rect(x, y, bw, 70, TEAL, rx=18))
        o.append(rect(x, y + 38, bw, 32, TEAL))
        o.append(t(x + bw / 2, y + 52, 'THE AGENT', 36, '#FFFFFF', bold=True))
        for k, L in enumerate(wrap(s, 16)[:4]):
            o.append(t(x + bw / 2, y + 140 + k * 48, L, 40, INK))
        if i < n - 1:
            o.append(line(x + bw + 6, y + 150, x + bw + 30, y + 150, MUTE, 6))
    xh = 100 + n * (bw + 36)
    o.append(line(xh - 20, y - 20, xh - 20, y + 330, RED, 6, dash='18,14'))
    o.append(rect(xh, y, bw, 300, '#FBEAE8', stroke=RED, sw=5, rx=18))
    o.append(rect(xh, y, bw, 70, RED, rx=18))
    o.append(rect(xh, y + 38, bw, 32, RED))
    o.append(t(xh + bw / 2, y + 52, 'A PERSON SIGNS', 36, '#FFFFFF', bold=True))
    for k, L in enumerate(wrap(human_step, 16)[:4]):
        o.append(t(xh + bw / 2, y + 140 + k * 48, L, 40, INK, bold=True))
    o.append(t(W / 2, y + 400, 'The line is the handover. Nothing crosses it unsigned.',
               42, MUTE, italic=True))
    if note:
        o.append(t(W / 2, y + 462, note, 42, art.ACCENT, bold=True))
    return o, int(H)


def unitcost(title, rows, note=''):
    """Cost per item against error rate: people in one column, agents in the other."""
    H = BAND + 80 + 150 + len(rows) * 108 + (120 if note else 60)
    o = [frame(H, title)]
    cols = ['', 'COST PER ITEM', 'ERROR RATE', 'ITEMS PER DAY']
    xs = [120, 1180, 1800, 2400]
    y = BAND + 90
    o.append(rect(100, y, W - 200, 96, art.ACCENT, rx=14))
    for j, c in enumerate(cols):
        o.append(t(xs[j] + (0 if j == 0 else 240), y + 62, c, 42, '#FFFFFF', bold=True,
                   anchor='start' if j == 0 else 'middle'))
    y += 110
    for i, (label, cost, err, vol) in enumerate(rows):
        col = TEAL if i == 0 else ORANGE
        o.append(rect(100, y, W - 200, 96, '#FFFFFF' if i % 2 else '#F2F6FA',
                      stroke=BORDER, sw=2))
        o.append(t(xs[0] + 40, y + 62, label, 46, col, bold=True, anchor='start'))
        for j, v in enumerate((cost, err, vol), start=1):
            o.append(t(xs[j] + 240, y + 62, v, 46, INK))
        y += 108
    if note:
        o.append(rect(100, y + 20, W - 200, 96, '#FFF4E0', stroke=ORANGE, sw=3, rx=14))
        o.append(t(W / 2, y + 82, note, 44, INK))
    return o, int(H)


def capacity(title, produce, review, note=''):
    """Production capacity against review capacity, with the gap shaded.

    produce, review: (label, value) pairs on the same scale.
    """
    H = BAND + 90 + 700
    o = [frame(H, title)]
    top = max(produce[1], review[1]) * 1.18
    x0, y0, bh = 320, BAND + 560, 420
    o.append(line(x0 - 40, y0, W - 200, y0, BORDER, 5))
    bw = 520
    for i, (lab, v, col) in enumerate([(produce[0], produce[1], TEAL),
                                       (review[0], review[1], ORANGE)]):
        x = x0 + 180 + i * (bw + 300)
        h = bh * v / float(top)
        o.append(rect(x, y0 - h, bw, h, col, rx=10))
        o.append(t(x + bw / 2, y0 - h - 34, '{:,}'.format(v), 58, col, bold=True))
        for k, L in enumerate(wrap(lab, 20)[:2]):
            o.append(t(x + bw / 2, y0 + 70 + k * 54, L, 44, INK))
    hp = bh * produce[1] / float(top)
    hr = bh * review[1] / float(top)
    gx = x0 + 180 + bw + 20
    o.append(rect(gx, y0 - hp, 240, hp - hr, '#FBEAE8', stroke=RED, sw=3))
    o.append(t(gx + 120, y0 - hp + (hp - hr) / 2 + 14, 'THE GAP', 38, RED, bold=True))
    o.append(t(W / 2, BAND + 60, note or 'What you can make, against what you can check.',
               46, MUTE, italic=True))
    return o, int(H)
