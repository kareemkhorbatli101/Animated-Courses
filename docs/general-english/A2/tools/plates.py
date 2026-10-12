"""Plates: the figure types.

Each function returns a finished Canvas. Every plate has a declared JOB --
carry the task data, contrast two forms, supply the lexis, or show a real
document -- and the job is an argument, not a comment, because
check_visual.py reads it.

There is no plate whose job is decoration, and there is no plate that prints
a sentence in a box and calls itself a picture. That was A2.
"""
from __future__ import annotations

import math

from draw import C, Canvas, arc, contrast, deep, rr_path, shade, tw
from people import draw_person
from cast import who
import world as W

W_ = 1280          # every plate is this wide; height varies by plate


def _cv(h, bg=None):
    return Canvas(W_, h, bg or C['paper'])


def _title(cv, s, y=46):
    cv.text(s, W_ / 2, y, 30, weight='Bold', anchor='middle', bg=cv.bg)


# ======================================================== class S: scenes

def street(cast_poses, title=None, h=620):
    """Hill Road. The establishing picture: where the whole course happens."""
    cv = _cv(h, C['sky_bg'])
    W.sky_ground(cv, 0, 0, W_, h, horizon=0.50)
    shop_base = h * 0.66          # where the buildings sit
    pave = h * 0.84               # where people stand
    cv.rect(0, shop_base, W_, pave - shop_base + 8, shade(C['ground'], 1.02))
    cv.rect(0, pave + 6, W_, h - pave, C['road'])
    cv.rect(0, pave, W_, 9, shade(C['ground'], 0.84))
    for i in range(7):
        cv.rect(60 + i * 182, pave + 46, 96, 10, C['line'], r=5)
    W.shopfront(cv, 30, h * 0.14, 288, shop_base - h * 0.14, 'CAFE', C['red'],
                window_items=['cup', 'cup'])
    W.shopfront(cv, 340, h * 0.20, 262, shop_base - h * 0.20, 'SHOP', C['green'],
                window_items=['basket'])
    W.shopfront(cv, 624, h * 0.16, 286, shop_base - h * 0.16, 'SCHOOL', C['blue'],
                window_items=['book'])
    W.shopfront(cv, 932, h * 0.21, 272, shop_base - h * 0.21, 'CLINIC', C['teal'],
                window_items=['plant'])
    W.bus_stop(cv, 612, pave, h * 0.30)
    for pid, x, pose, face in cast_poses:
        draw_person(cv, who(pid), x, pave + 4, h * 0.42, pose=pose, face=face)
    if title:
        cv.rect(0, 0, W_, 66, deep(C['ink']), opacity=0.86)
        cv.text(title, W_ / 2, 45, 34, fill='#FFFFFF', weight='Bold', anchor='middle',
                bg=C['ink'])
    return cv


def two_talk(place, a, b, say_a, say_b=None, h=560, size=30, pose_a='stand',
             pose_b='stand', expr_a='talk', expr_b='smile', third=None):
    """third = a pid drawn beside the speaker, silent. Needed the moment a
    line says 'This is Omar': a picture that does not contain Omar makes the
    sentence unanswerable, and no check in the suite would have caught it."""
    """Two named people, in a place, speaking. The core plate of the course."""
    cv = _cv(h, C['cream'])
    base = h - 36
    if place == 'cafe':
        W.window_wall(cv, 0, 0, W_, h * 0.58)
        cv.rect(0, h * 0.58, W_, h * 0.42, C['tile'])
        cv.rect(0, h * 0.58 - 4, W_, 8, shade(C['tile'], 0.86))
        pb = draw_person(cv, who(b), W_ * 0.74, base, h * 0.56, pose=pose_b, expr=expr_b,
                         face=-0.5)
        W.counter(cv, W_ * 0.56, base - h * 0.30, W_ * 0.42, h * 0.30)
        W.prop(cv, 'cup', W_ * 0.62, base - h * 0.32, s=1.2)
        pa = draw_person(cv, who(a), W_ * 0.27, base, h * 0.60, pose=pose_a, expr=expr_a,
                         face=0.5)
    elif place == 'street':
        W.sky_ground(cv, 0, 0, W_, h, horizon=0.60)
        W.shopfront(cv, 60, h * 0.14, 300, h * 0.46, 'SHOP', C['green'])
        W.shopfront(cv, 880, h * 0.18, 300, h * 0.42, 'CAFE', C['red'])
        cv.rect(0, h * 0.60 + 40, W_, h, C['road'])
        pa = draw_person(cv, who(a), W_ * 0.30, base, h * 0.60, pose=pose_a, expr=expr_a,
                         face=0.5)
        pb = draw_person(cv, who(b), W_ * 0.70, base, h * 0.60, pose=pose_b, expr=expr_b,
                         face=-0.5)
    elif place == 'stop':
        W.sky_ground(cv, 0, 0, W_, h, horizon=0.58)
        cv.rect(0, h * 0.62, W_, h, C['road'])
        cv.rect(0, h * 0.62 - 6, W_, 10, shade(C['ground'], 0.84))
        W.bus(cv, W_ * 0.60, h * 0.22, W_ * 0.38, h * 0.40)
        W.bus_stop(cv, W_ * 0.09, h * 0.66, h * 0.28)
        pa = draw_person(cv, who(a), W_ * 0.24, base, h * 0.54, pose=pose_a, expr=expr_a,
                         face=0.5)
        pb = draw_person(cv, who(b), W_ * 0.44, base, h * 0.54, pose=pose_b, expr=expr_b,
                         face=-0.5)
    elif place == 'door':
        cv.rect(0, 0, W_, h, C['wall'])
        cv.rect(0, h * 0.78, W_, h * 0.22, C['tile'])
        W.doorway(cv, W_ * 0.68, h * 0.80, 180, h * 0.60, C['blue'], number=12)
        W.prop(cv, 'plant', W_ * 0.90, h * 0.72, s=2.0)
        pa = draw_person(cv, who(a), W_ * 0.17, base, h * 0.60, pose=pose_a, expr=expr_a,
                         face=0.5)
        if third:
            draw_person(cv, who(third), W_ * 0.345, base, h * 0.57, pose='stand', face=0.3)
        pb = draw_person(cv, who(b), W_ * 0.53, base, h * 0.60, pose=pose_b, expr=expr_b,
                         face=-0.5)
    elif place == 'clinic':
        W.window_wall(cv, 0, 0, W_, h * 0.56, panes=2)
        cv.rect(0, h * 0.56, W_, h * 0.44, C['tile'])
        pb = draw_person(cv, who(b), W_ * 0.72, base, h * 0.56, pose=pose_b, expr=expr_b,
                         face=-0.5)
        W.counter(cv, W_ * 0.56, base - h * 0.28, W_ * 0.40, h * 0.28, top=C['cloud'])
        W.prop(cv, 'timetable', W_ * 0.62, base - h * 0.30, s=1.1)
        pa = draw_person(cv, who(a), W_ * 0.26, base, h * 0.58, pose=pose_a, expr=expr_a,
                         face=0.5)
    else:
        raise KeyError(place)
    # The two bubbles are staggered on purpose. Speech that sits at one height
    # across a picture collides as soon as a line gets long, and the overlap
    # check then fails a plate that is otherwise right. A conversation reads
    # better staggered anyway: the eye takes the turns in order.
    W.say(cv, pa, say_a, size, side='right' if pa['cx'] < W_ / 2 else 'left',
          maxw=400, lift=0.30)
    if say_b:
        W.say(cv, pb, say_b, size, side='left' if pb['cx'] > W_ / 2 else 'right',
              fill=C['sky_bg'], maxw=400, lift=0.00)
    return cv


def panels(items, h=430, size=27):
    """Three or four moments side by side: a strip the learner reads left to right.

    items = [(caption, place, pid, pose, say), ...]
    """
    n = len(items)
    cv = _cv(h, C['cream'])
    pw = (W_ - 24 * (n + 1)) / n
    for i, (cap, tint, pid, pose, line) in enumerate(items):
        x = 24 + i * (pw + 24)
        cv.rect(x, 20, pw, h - 84, C[tint], r=16)
        cv.rect(x, 20, pw, (h - 84) * 0.56, shade(C[tint], 1.10), r=16)
        cv.rect(x, 20 + (h - 84) * 0.40, pw, (h - 84) * 0.60, C[tint])
        cv.rect(x, 20 + (h - 84) - 16, pw, 16, shade(C[tint], 0.88))
        a = draw_person(cv, who(pid), x + pw * 0.30, 20 + (h - 84) - 16, (h - 84) * 0.72,
                        pose=pose, expr='talk', face=0.4, shadow=False)
        sz = size
        while sz > 17 and tw(line, sz, 'Medium') + 36 > pw * 0.56:
            sz -= 1
        bw = tw(line, sz, 'Medium') + 36
        W.bubble(cv, min(x + pw * 0.44, x + pw - 14 - bw), 42, bw, line, sz,
                 tail=a['hand_near'] if False else (x + pw * 0.40, 112), pad=16)
        # The caption had no width guard. The bubble above it has had one
        # since the plate was written, and the caption -- drawn centred, at a
        # fixed 28 -- simply ran off both ends of the strip the moment a
        # caption went past about twenty characters. Nothing failed: the
        # overlap check compares boxes against each other, not against the
        # canvas. Shrink it the way the bubble is shrunk.
        cs = 28
        while cs > 18 and tw(cap, cs, 'SemiBold') > pw - 16:
            cs -= 1
        cv.text(cap, x + pw / 2, h - 30, cs, weight='SemiBold', anchor='middle',
                bg=cv.bg)
    return cv


# ================================================= class D: real documents

def badge(name, role, place, col='teal', h=330):
    cv = _cv(h, C['cloud'])
    bw, bh = 520, 250
    x, y = (W_ - bw) / 2, (h - bh) / 2
    cv.rect(x + 6, y + 8, bw, bh, C['ink'], r=18, opacity=0.14)
    cv.rect(x, y, bw, bh, C['paper'], r=18, stroke=C['silver'], sw=3)
    hd = deep(C[col])
    cv.rect(x, y, bw, 64, hd, r=18)
    cv.rect(x, y + 40, bw, 24, hd)
    cv.text(place, x + 26, y + 42, 26, fill='#FFFFFF', weight='Bold', bg=hd)
    cv.circle(x + bw / 2, y - 6, 15, C['silver'], stroke=C['steel'], sw=3)
    cv.text('My name is', x + 26, y + 112, 22, fill=C['ink_soft'], bg=C['paper'])
    cv.text(name, x + 26, y + 164, 46, weight='Bold', bg=C['paper'])
    cv.line(x + 26, y + 182, x + bw - 26, y + 182, C['rule'], sw=2)
    cv.text(role, x + 26, y + 216, 26, fill=C['ink_soft'], bg=C['paper'])
    return cv


def form(title, rows, h=None, filled=None):
    """A real form with real boxes. rows = [(label, value_or_None), ...]"""
    filled = filled or {}
    h = h or (150 + 86 * len(rows))
    cv = _cv(h, C['cloud'])
    fw = 760
    x, y = (W_ - fw) / 2, 40
    fh = h - 80
    cv.rect(x + 6, y + 8, fw, fh, C['ink'], r=14, opacity=0.12)
    cv.rect(x, y, fw, fh, C['paper'], r=14, stroke=C['silver'], sw=3)
    cv.rect(x, y, fw, 62, C['blue'], r=14)
    cv.rect(x, y + 40, fw, 22, C['blue'])
    cv.text(title, x + 28, y + 42, 28, fill='#FFFFFF', weight='Bold', bg=C['blue'])
    for i, (lab, val) in enumerate(rows):
        ry = y + 102 + i * 86
        cv.text(lab, x + 28, ry, 25, fill=C['ink_soft'], bg=C['paper'])
        bx, bw = x + 250, fw - 290
        cv.rect(bx, ry - 32, bw, 50, C['cream'], r=8, stroke=C['silver'], sw=2)
        if val:
            cv.text(val, bx + 16, ry + 2, 28, weight='Medium', bg=C['cream'])
    return cv


def phone(contact, lines, h=560):
    cv = _cv(h, C['cloud'])
    pw, ph = 330, 480
    x, y = (W_ - pw) / 2, (h - ph) / 2
    cv.rect(x, y, pw, ph, C['ink'], r=36)
    cv.rect(x + 12, y + 14, pw - 24, ph - 28, C['paper'], r=26)
    hc = deep(C['sky'])
    cv.rect(x + 12, y + 14, pw - 24, 54, hc, r=26)
    cv.rect(x + 12, y + 50, pw - 24, 18, hc)
    cv.text(contact, x + pw / 2, y + 50, 25, fill='#FFFFFF', weight='Bold',
            anchor='middle', bg=hc)
    cv.rect(x + pw / 2 - 40, y + 8, 80, 14, C['ink'], r=7)
    for i, (who_, txt) in enumerate(lines):
        bw = min(pw - 90, tw(txt, 22, 'Medium') + 34)
        bx = x + 26 if who_ == 'them' else x + pw - 26 - bw
        by = y + 92 + i * 74
        cv.rect(bx, by, bw, 56, C['cloud'] if who_ == 'them' else C['aqua'], r=16)
        cv.text(txt, bx + 17, by + 36, 22, weight='Medium',
                bg=C['cloud'] if who_ == 'them' else C['aqua'])
    cv.rect(x + pw / 2 - 48, y + ph - 22, 96, 7, C['silver'], r=4)
    return cv


def register(title, cols, rows, h=None, highlight=None):
    """A real table carrying real data -- a class list, a timetable."""
    h = h or (150 + 62 * (len(rows) + 1))
    cv = _cv(h, C['paper'])
    tw_ = W_ - 160
    x, y = 80, 48
    cv.text(title, x, y + 8, 30, weight='Bold', bg=cv.bg)
    y += 46
    cw = [tw_ * c for c in cols[1]]
    cv.rect(x, y, tw_, 56, C['navy'], r=10)
    cx = x
    # Header and cell are drawn with fit, not text: a column is a box with a
    # width, and this plate used to let a cell run straight through its own
    # right-hand border and out of the table -- "stay with one friend" in a
    # 0.24 column. Nothing failed, because the overlap check compares drawn
    # boxes with each other and a run of text is not a box. fit shrinks to
    # the column and, when even that is not enough, records the warning the
    # figure runner already reads.
    for i, hd in enumerate(cols[0]):
        cv.fit(hd, cx + 20, y + 37, cw[i] - 36, 25, fill='#FFFFFF', weight='Bold',
               bg=C['navy'])
        cx += cw[i]
    for r, row in enumerate(rows):
        ry = y + 56 + r * 58
        bgc = C['cream'] if r % 2 == 0 else C['paper']
        if highlight is not None and r == highlight:
            bgc = shade(C['amber'], 1.55)
        cv.rect(x, ry, tw_, 58, bgc)
        cv.line(x, ry + 58, x + tw_, ry + 58, C['rule'], sw=1.5)
        cx = x
        for i, cell in enumerate(row):
            cv.fit(str(cell), cx + 20, ry + 38, cw[i] - 36, 26,
                   weight='SemiBold' if i == 0 else 'Regular', bg=bgc)
            cx += cw[i]
    cv.rect(x, y, tw_, 56 + 58 * len(rows), 'none', r=10, stroke=C['steel'], sw=2.5)
    return cv


def signs(items, h=420):
    """Street signs and shop signs: print the learner meets outside the book."""
    cv = _cv(h, C['sky_bg'])
    W.sky_ground(cv, 0, 0, W_, h, horizon=0.78)
    n = len(items)
    sw_ = (W_ - 80) / n
    for i, (txt, kind, col) in enumerate(items):
        cx = 40 + sw_ * (i + 0.5)
        if kind == 'post':
            cv.line(cx, h * 0.78, cx, h * 0.30, C['steel'], sw=11)
            bw = min(sw_ - 34, tw(txt, 30, 'Bold') + 54)
            sc = deep(C[col])
            cv.rect(cx - bw / 2, h * 0.20, bw, 76, sc, r=8)
            cv.text(txt, cx, h * 0.20 + 50, 30, fill='#FFFFFF', weight='Bold',
                    anchor='middle', bg=sc)
        elif kind == 'board':
            bw = min(sw_ - 34, tw(txt, 32, 'Bold') + 60)
            sc = deep(C[col], 4.5)
            cv.rect(cx - bw / 2, h * 0.26, bw, 96, C['paper'], r=10, stroke=sc, sw=6)
            cv.text(txt, cx, h * 0.26 + 62, 32, fill=sc, weight='Bold',
                    anchor='middle', bg=C['paper'])
            cv.line(cx, h * 0.26 + 96, cx, h * 0.78, C['wood'], sw=9)
        else:  # door plate
            bw = min(sw_ - 34, tw(txt, 28, 'Bold') + 50)
            sc = deep(C[col])
            cv.rect(cx - bw / 2, h * 0.30, bw, 150, sc, r=6)
            cv.text(txt, cx, h * 0.30 + 50, 28, fill='#FFFFFF', weight='Bold',
                    anchor='middle', bg=sc)
            cv.circle(cx + bw / 2 - 22, h * 0.30 + 100, 9, C['amber'])
    return cv


# ============================================ class G: grammar made visible

def blocks(rows, legend=None, h=None, size=34):
    """A sentence built from coloured blocks. Form, seen rather than stated."""
    h = h or (120 + 96 * len(rows) + (60 if legend else 0))
    cv = _cv(h, C['paper'])
    y = 56
    if legend:
        lx = 80
        for lab, col in legend:
            cv.rect(lx, y - 20, 26, 26, C[col], r=6)
            w = cv.text(lab, lx + 36, y, 23, fill=C['ink_soft'], bg=cv.bg)
            lx += 36 + w + 42
        y += 56
    for row in rows:
        x = 80
        for cell, col in row:
            bw = tw(cell, size, 'SemiBold') + 44
            if col is None:
                cv.rect(x, y, bw, 66, C['cream'], r=10, stroke=C['silver'], sw=2.5)
                cv.text(cell, x + bw / 2, y + 45, size, anchor='middle', bg=C['cream'])
            else:
                bc = deep(C[col])
                cv.rect(x + 3, y + 5, bw, 66, C['ink'], r=10, opacity=0.13)
                cv.rect(x, y, bw, 66, bc, r=10)
                cv.rect(x, y, bw, 22, shade(bc, 1.14), r=10)
                cv.rect(x, y + 50, bw, 16, shade(bc, 0.84))
                cv.text(cell, x + bw / 2, y + 45, size, fill='#FFFFFF', weight='SemiBold',
                        anchor='middle', bg=bc)
            x += bw + 14
        y += 96
    return cv


def contraction(pairs, h=None, size=40):
    """full form  ->  short form, with the dropped letter shown going."""
    h = h or (90 + 104 * len(pairs))
    cv = _cv(h, C['cream'])
    for i, (full, short, drop) in enumerate(pairs):
        y = 60 + i * 104
        fw = tw(full, size, 'SemiBold') + 52
        cv.rect(170, y, fw, 72, C['paper'], r=12, stroke=C['silver'], sw=2.5)
        cx = 170 + 26
        for ch in full:
            w = tw(ch, size, 'SemiBold')
            red = ch == drop
            rc = deep(C['red'])
            cv.text(ch, cx, y + 50, size, weight='SemiBold',
                    fill=rc if red else C['ink'], bg=C['paper'])
            if red:
                cv.line(cx - 2, y + 22, cx + w + 2, y + 56, rc, sw=4)
            cx += w
        ax = 170 + fw + 30
        cv.path(f'M{ax:.2f},{y+36:.2f} h74', stroke=C['teal'], sw=7)
        cv.path(f'M{ax+62:.2f},{y+22:.2f} l18,14 l-18,14', stroke=C['teal'], sw=7, fill='none')
        sx = ax + 118
        sw_ = tw(short, size, 'Bold') + 52
        tc = deep(C['teal'])
        cv.rect(sx, y, sw_, 72, tc, r=12)
        cv.rect(sx, y, sw_, 24, shade(tc, 1.14), r=12)
        cv.text(short, sx + sw_ / 2, y + 50, size, fill='#FFFFFF', weight='Bold',
                anchor='middle', bg=tc)
        cv.text('one word', sx + sw_ + 24, y + 48, 23, fill=C['ink_soft'], bg=cv.bg)
    return cv


def alphabet(groups, h=560):
    """The alphabet sorted by the vowel sound in the letter's name."""
    cv = _cv(h, C['paper'])
    cols = len(groups)
    gw = (W_ - 80 - 20 * (cols - 1)) / cols
    for i, (sound, letters, col) in enumerate(groups):
        x = 40 + i * (gw + 20)
        hc = deep(C[col])
        cv.rect(x, 40, gw, h - 80, shade(C[col], 1.72), r=14)
        cv.rect(x, 40, gw, 62, hc, r=14)
        cv.rect(x, 78, gw, 24, hc)
        cv.text(sound, x + gw / 2, 82, 30, fill='#FFFFFF', weight='Bold', anchor='middle',
                bg=hc)
        per = 2 if len(letters) > 4 else 1
        for j, L in enumerate(letters):
            r, c = j // per, j % per
            tx = x + gw * (c + 0.5) / per
            ty = 160 + r * 76
            cv.rect(tx - 30, ty - 44, 60, 60, C['paper'], r=10, stroke=hc, sw=3)
            cv.text(L, tx, ty, 36, weight='Bold', anchor='middle', bg=C['paper'])
    return cv


def numbers(items, h=300):
    """Numbers shown as quantities, not as digits beside a word."""
    cv = _cv(h, C['cream'])
    n = len(items)
    cw = (W_ - 60) / n
    for i, (dig, word, cnt, col) in enumerate(items):
        x = 30 + cw * (i + 0.5)
        cv.rect(x - cw / 2 + 8, 34, cw - 16, h - 68, C['paper'], r=12, stroke=C['silver'],
                sw=2)
        cv.text(dig, x, 92, 44, weight='Bold', anchor='middle', fill=deep(C[col]), bg=C['paper'])
        per = 5
        for k in range(cnt):
            r, c = k // per, k % per
            dotw = min((cw - 40) / per, 17)
            cv.circle(x - (min(cnt, per) - 1) * dotw / 2 + c * dotw, 128 + r * dotw,
                      dotw * 0.34, C[col])
        # fit, not text: 'seventeen' at 26px is as wide as its cell, and ten
        # of them printed as one run -- 'sixteenseventeeneighteen' -- on the
        # first build of Unit 2's teens.
        cv.fit(word, x, h - 44, cw - 22, 26, weight='SemiBold', anchor='middle',
               bg=C['paper'])
    return cv


def flags(items, h=400):
    """Flags: a country is a shape and a colour before it is a word."""
    cv = _cv(h, C['paper'])
    n = len(items)
    per = 4 if n > 4 else n
    rows = (n + per - 1) // per
    cw = (W_ - 60) / per
    ch = (h - 40) / rows
    for i, (country, kind) in enumerate(items):
        r, c = i // per, i % per
        cx = 30 + cw * (c + 0.5)
        cy = 20 + ch * r + 34
        fw, fh = min(cw - 56, 196), min(ch - 96, 128)
        x, y = cx - fw / 2, cy
        cv.rect(x + 4, y + 5, fw, fh, C['ink'], opacity=0.14, r=4)
        _flag(cv, kind, x, y, fw, fh)
        cv.rect(x, y, fw, fh, 'none', stroke=C['steel'], sw=2.5, r=4)
        cv.text(country, cx, y + fh + 42, 29, weight='SemiBold', anchor='middle', bg=cv.bg)
    return cv


def _flag(cv, kind, x, y, w, h):
    if kind == 'england':
        cv.rect(x, y, w, h, '#FFFFFF')
        cv.rect(x + w * 0.40, y, w * 0.20, h, '#D4232E')
        cv.rect(x, y + h * 0.38, w, h * 0.24, '#D4232E')
    elif kind == 'spain':
        cv.rect(x, y, w, h, '#C8102E')
        cv.rect(x, y + h * 0.25, w, h * 0.50, '#F1BF00')
    elif kind == 'brazil':
        cv.rect(x, y, w, h, '#1E8A43')
        cv.poly([(x + w / 2, y + h * 0.10), (x + w * 0.90, y + h / 2),
                 (x + w / 2, y + h * 0.90), (x + w * 0.10, y + h / 2)], '#F2CE1B')
        cv.circle(x + w / 2, y + h / 2, h * 0.21, '#17407C')
    elif kind == 'japan':
        cv.rect(x, y, w, h, '#FFFFFF')
        cv.circle(x + w / 2, y + h / 2, h * 0.30, '#BC002D')
    elif kind == 'poland':
        cv.rect(x, y, w, h, '#FFFFFF')
        cv.rect(x, y + h / 2, w, h / 2, '#D4213D')
    elif kind == 'nigeria':
        cv.rect(x, y, w, h, '#FFFFFF')
        cv.rect(x, y, w / 3, h, '#008753')
        cv.rect(x + w * 2 / 3, y, w / 3, h, '#008753')
    elif kind == 'egypt':
        cv.rect(x, y, w, h, '#CE1126')
        cv.rect(x, y + h / 3, w, h / 3, '#FFFFFF')
        cv.rect(x, y + h * 2 / 3, w, h / 3, '#1A1A1A')
        cv.circle(x + w / 2, y + h / 2, h * 0.13, '#C09300')
    elif kind == 'turkey':
        cv.rect(x, y, w, h, '#E30A17')
        cv.circle(x + w * 0.38, y + h / 2, h * 0.21, '#FFFFFF')
        cv.circle(x + w * 0.44, y + h / 2, h * 0.17, '#E30A17')
        cv.poly([(x + w * 0.58 + h * 0.10 * math.cos(math.radians(a - 90)),
                  y + h / 2 + h * 0.10 * math.sin(math.radians(a - 90)))
                 for a in range(0, 360, 72)], '#FFFFFF')
    else:
        cv.rect(x, y, w, h, C['cloud'])


# =================================================== class P: people plates

def people_row(items, h=400, label_size=28, pose='stand'):
    """Named people in a row, each doing something. For matching and naming.

    items = [(pid, label, pose, prop_or_None), ...]
    """
    cv = _cv(h, C['cream'])
    n = len(items)
    cw = (W_ - 40) / n
    base = h - 72
    for i, it in enumerate(items):
        pid, label = it[0], it[1]
        ps = it[2] if len(it) > 2 else pose
        pr = it[3] if len(it) > 3 else None
        x = 20 + cw * (i + 0.5)
        cv.rect(x - cw / 2 + 10, 24, cw - 20, h - 108, C['paper'], r=14,
                stroke=C['silver'], sw=2)
        a = draw_person(cv, who(pid), x, base - 48, (h - 160), pose=ps)
        if pr:
            W.prop(cv, pr, a['hand_near'][0] + 18, a['hand_near'][1] + 6, s=0.8)
        cv.text(label, x, h - 28, label_size, weight='SemiBold', anchor='middle', bg=cv.bg)
    return cv


def picture_cards(items, h=440, cols=4, numbered=True):
    """A numbered grid of drawn things, for picture-matching only.

    items = [(number_or_letter, prop_name, colour_or_None), ...]
    """
    rows = (len(items) + cols - 1) // cols
    cv = _cv(h, C['paper'])
    cw = (W_ - 60) / cols
    ch = (h - 40) / rows
    for i, (tag, pname, col) in enumerate(items):
        r, c = i // cols, i % cols
        x = 30 + cw * c
        y = 20 + ch * r
        cv.rect(x + 10, y + 8, cw - 20, ch - 24, C['cream'], r=14, stroke=C['silver'], sw=2)
        W.prop(cv, pname, x + cw / 2, y + ch * 0.48, s=min(cw, ch) / 95,
               col=C[col] if col else None)
        if numbered:
            cv.circle(x + 36, y + 34, 21, C['navy'])
            cv.text(str(tag), x + 36, y + 42, 23, fill='#FFFFFF', weight='Bold',
                    anchor='middle', bg=C['navy'])
    return cv


def can_do(items, h=None):
    """The Can-Do list, drawn as a checklist the learner ticks."""
    h = h or (90 + 76 * len(items))
    cv = _cv(h, C['cream'])
    for i, s in enumerate(items):
        y = 46 + i * 76
        cv.rect(70, y, W_ - 140, 62, C['paper'], r=12, stroke=C['silver'], sw=2)
        cv.rect(92, y + 14, 34, 34, C['paper'], r=7, stroke=C['teal'], sw=3.5)
        cv.text(s, 148, y + 42, 27, bg=C['paper'])
    return cv


def badges(items, h=360):
    """Several name badges side by side: reading real print, not a word list."""
    cv = _cv(h, C['cloud'])
    n = len(items)
    bw = min((W_ - 60) / n - 24, 380)
    for i, (name, role, place, col) in enumerate(items):
        x = 30 + ((W_ - 60) / n) * i + (((W_ - 60) / n) - bw) / 2
        y = (h - 230) / 2
        hd = deep(C[col])
        cv.rect(x + 5, y + 7, bw, 230, C['ink'], r=16, opacity=0.13)
        cv.rect(x, y, bw, 230, C['paper'], r=16, stroke=C['silver'], sw=3)
        cv.rect(x, y, bw, 54, hd, r=16)
        cv.rect(x, y + 34, bw, 20, hd)
        cv.fit(place, x + 20, y + 36, bw - 40, 22, fill='#FFFFFF', weight='Bold', bg=hd)
        cv.circle(x + bw / 2, y - 5, 13, C['silver'], stroke=C['steel'], sw=3)
        cv.text('My name is', x + 20, y + 96, 20, fill=C['ink_soft'], bg=C['paper'])
        cv.fit(name, x + 20, y + 146, bw - 40, 38, weight='Bold', bg=C['paper'])
        cv.line(x + 20, y + 162, x + bw - 20, y + 162, C['rule'], sw=2)
        cv.text(role, x + 20, y + 196, 24, fill=C['ink_soft'], bg=C['paper'])
    return cv


def writing_frame(title, lines, h=None):
    """Lined paper with a start already written. The learner finishes it."""
    h = h or (130 + 72 * len(lines))
    cv = _cv(h, C['cloud'])
    pw = W_ - 300
    x, y = 150, 40
    ph = h - 80
    cv.rect(x + 5, y + 7, pw, ph, C['ink'], r=10, opacity=0.12)
    cv.rect(x, y, pw, ph, C['paper'], r=10, stroke=C['silver'], sw=2.5)
    cv.line(x + 70, y, x + 70, y + ph, shade(C['rose'], 1.08), sw=2)
    cv.text(title, x + 96, y + 48, 26, weight='Bold', bg=C['paper'])
    for i, ln in enumerate(lines):
        ly = y + 102 + i * 72
        cv.line(x + 96, ly + 10, x + pw - 40, ly + 10, C['rule'], sw=2)
        if ln:
            cv.text(ln, x + 96, ly, 28, weight='Medium', bg=C['paper'])
    return cv


def qa_pairs(pairs, h=None, size=30):
    """A question card and its answer card, joined. Form seen as a pair."""
    h = h or (70 + 104 * len(pairs))
    cv = _cv(h, C['paper'])
    for i, (q, a) in enumerate(pairs):
        y = 44 + i * 104
        qw = tw(q, size, 'Medium') + 44
        cv.rect(70, y, qw, 70, shade(C['sky'], 1.60), r=14, stroke=deep(C['sky']), sw=2.5)
        cv.text(q, 70 + 22, y + 46, size, weight='Medium', bg=shade(C['sky'], 1.60))
        ax = 70 + qw + 26
        cv.path(f'M{ax:.2f},{y+35:.2f} h46', stroke=C['ink_mute'], sw=5)
        cv.path(f'M{ax+34:.2f},{y+23:.2f} l14,12 l-14,12', stroke=C['ink_mute'], sw=5)
        ax += 70
        aw = tw(a, size, 'Medium') + 44
        cv.rect(ax, y, aw, 70, shade(C['lime'], 1.58), r=14, stroke=deep(C['lime']), sw=2.5)
        cv.text(a, ax + 22, y + 46, size, weight='Medium', bg=shade(C['lime'], 1.58))
    return cv


def sort_two(left, right, items, h=560):
    """The things to sort, drawn, above two labelled bins.

    items = [(prop, colour_or_None, word)]. The pictures are the data: an
    empty pair of bins is a worksheet box, not a figure, and this plate was
    one until the pictures went in.
    """
    cv = _cv(h, C['paper'])
    n = len(items)
    cw = (W_ - 60) / n
    for i, (pname, col, word) in enumerate(items):
        x = 30 + cw * (i + 0.5)
        cv.rect(x - cw / 2 + 8, 24, cw - 16, 150, C['cream'], r=14, stroke=C['silver'],
                sw=2)
        W.prop(cv, pname, x, 84, s=min(cw, 150) / 112, col=C[col] if col else None)
        cv.fit(word, x - cw / 2 + 16, 158, cw - 32, 25, weight='SemiBold', anchor='start',
               bg=C['cream'])
    bw = (W_ - 100) / 2
    for i, (head, col) in enumerate((left, right)):
        x = 40 + i * (bw + 20)
        hc = deep(C[col])
        cv.rect(x, 206, bw, h - 236, shade(C[col], 1.70), r=16)
        cv.rect(x, 206, bw, 62, hc, r=16)
        cv.rect(x, 244, bw, 24, hc)
        cv.text(head, x + bw / 2, 248, 32, fill='#FFFFFF', weight='Bold', anchor='middle',
                bg=hc)
        for j in range(3):
            cv.line(x + 30, 324 + j * 66, x + bw - 30, 324 + j * 66,
                    shade(C[col], 1.22), sw=3, dash='10 9')
    return cv


def doors(items, h=520):
    """Numbered doors along a corridor. Room signs where room signs live."""
    cv = _cv(h, C['wall'])
    cv.rect(0, h * 0.80, W_, h * 0.20, C['tile'])
    cv.rect(0, h * 0.80 - 5, W_, 10, shade(C['tile'], 0.84))
    n = len(items)
    cw = W_ / n
    for i, (label, col) in enumerate(items):
        x = cw * (i + 0.5) - cw * 0.17
        W.doorway(cv, x, h * 0.82, cw * 0.34, h * 0.60, C[col])
        pc = deep(C[col])
        bw = min(cw * 0.46, tw(label, 27, 'Bold') + 44)
        cv.rect(x + cw * 0.17 - bw / 2, h * 0.14, bw, 58, C['paper'], r=8,
                stroke=pc, sw=4)
        cv.text(label, x + cw * 0.17, h * 0.14 + 39, 27, fill=pc, weight='Bold',
                anchor='middle', bg=C['paper'])
    return cv


def object_cards(items, h=400, cols=5):
    """Numbered pictures of things, with no word under them.

    The word is what the learner supplies. A picture card with its own answer
    printed under it is not a task, it is a poster.
    """
    rows = (len(items) + cols - 1) // cols
    cv = _cv(h, C['cream'])
    cw = (W_ - 50) / cols
    ch = (h - 40) / rows
    for i, (tag, pname, col) in enumerate(items):
        r, c = i // cols, i % cols
        x, y = 25 + cw * c, 20 + ch * r
        cv.rect(x + 8, y + 6, cw - 16, ch - 20, C['paper'], r=14, stroke=C['silver'], sw=2)
        W.prop(cv, pname, x + cw / 2, y + ch * 0.52, s=min(cw, ch) / 105,
               col=C[col] if col else None)
        cv.circle(x + 34, y + 32, 20, deep(C['navy']))
        cv.text(str(tag), x + 34, y + 40, 22, fill='#FFFFFF', weight='Bold',
                anchor='middle', bg=deep(C['navy']))
    return cv


def classroom_scene(a, b, say_a, say_b=None, sitting=None, h=580, size=30,
                    pose_a='point', pose_b='stand'):
    """A lesson in progress: a teacher, a student, and people at desks."""
    cv = _cv(h, C['cream'])
    W.classroom(cv, 0, 0, W_, h)
    base = h * 0.90
    seated = sitting or []
    if seated:
        # Solved from the floor up. draw_person puts the hip at ybase - 0.48H
        # and the seated foot at hip + 0.268H, so feet on the floor means
        # ybase = floor + 0.19H and the hip falls at floor - 0.29H -- the
        # seat. The desk top is 0.177H above that, the scale equivalent of a
        # 73cm desk over a 45cm seat.
        Hs = h * 0.47
        yb = base + 0.190 * Hs
        hip_y = base - 0.290 * Hs
        desk_top = hip_y - 0.140 * Hs
        for i, pid in enumerate(seated):
            x = W_ * (0.58 + i * 0.17)
            W.chair_back(cv, x, hip_y, Hs * 0.32, Hs * 0.42,
                         C['steel'] if i % 2 else C['slate'])
            draw_person(cv, who(pid), x, yb, Hs, pose='at_desk', face=-0.3,
                        shadow=False)
        dx = W_ * 0.58 - W_ * 0.090
        dw = W_ * (0.17 * (len(seated) - 1)) + W_ * 0.21
        W.desk_run(cv, dx, desk_top, dw, base)
    pa = draw_person(cv, who(a), W_ * 0.16, base, h * 0.56, pose=pose_a, expr='talk',
                     face=0.5)
    pb = draw_person(cv, who(b), W_ * 0.40, base, h * 0.54, pose=pose_b, expr='smile',
                     face=-0.4)
    W.say(cv, pa, say_a, size, side='right', maxw=380, lift=0.26)
    if say_b:
        W.say(cv, pb, say_b, size, side='right', fill=C['sky_bg'], maxw=360, lift=-0.04)
    return cv


def notice(heading, lines, h=520, col='amber'):
    """A notice pinned to a board: the print a learner meets on a real wall."""
    cv = _cv(h, shade(C['wood'], 1.36))
    nw = W_ - 420
    x, y = (W_ - nw) / 2, 48
    nh = h - 96
    cv.rect(x + 7, y + 10, nw, nh, C['ink'], r=4, opacity=0.16)
    cv.rect(x, y, nw, nh, C['paper'], r=4, stroke=C['silver'], sw=2)
    hc = deep(C[col])
    cv.rect(x, y, nw, 70, hc)
    cv.fit(heading, x + 28, y + 46, nw - 56, 32, fill='#FFFFFF', weight='Bold', bg=hc)
    for i, ln in enumerate(lines):
        ly = y + 128 + i * 56
        if isinstance(ln, tuple):
            cv.text(ln[0], x + 30, ly, 27, weight='SemiBold', bg=C['paper'])
            cv.text(ln[1], x + nw - 30, ly, 27, anchor='end', bg=C['paper'])
            cv.line(x + 30, ly + 16, x + nw - 30, ly + 16, C['rule'], sw=1.5)
        else:
            cv.text(ln, x + 30, ly, 27, bg=C['paper'])
    for cx in (x + 26, x + nw - 26):
        cv.circle(cx, y + 14, 11, C['red'])
        cv.circle(cx - 3, y + 11, 4, shade(C['red'], 1.45))
    return cv


def family_tree(rows, h=620, link=True):
    """A family tree drawn as people, not as boxes with words in them.

    rows = [[(pid, label), ...], ...] -- one list per generation. The card
    size drives the figure size, not the other way round: the first version
    sized the figure from the row height and the heads came out above the
    cards and off the top of the canvas.
    """
    cv = _cv(h, C['cream'])
    n = len(rows)
    rh = (h - 40) / n
    ch = rh - 54                      # card height
    centres = []
    for r, row in enumerate(rows):
        y = 24 + rh * r
        cw = W_ / (len(row) + 1)
        line = []
        for i, (pid, label) in enumerate(row):
            x = cw * (i + 1)
            bw = cw * 0.76
            cv.rect(x - bw / 2, y, bw, ch, C['paper'], r=14, stroke=C['silver'], sw=2)
            # solve the figure from the card: the visible part must fill it
            vis = ch - 54
            H = vis / 0.46
            cv.clip(x - bw / 2, y, bw, vis, r=14)
            draw_person(cv, who(pid), x, y + 10 + H, H, pose='stand', shadow=False)
            cv.endgroup()
            cv.fit(label, x, y + ch - 16, bw - 24, 26, weight='SemiBold',
                   anchor='middle', bg=C['paper'])
            line.append(x)
        centres.append((y, line))
    if link and n > 1:
        for r in range(n - 1):
            y0 = centres[r][0] + ch
            y1 = centres[r + 1][0]
            top = sum(centres[r][1]) / len(centres[r][1])
            mid = (y0 + y1) / 2
            cv.line(top, y0, top, mid, C['steel'], sw=4)
            lo = centres[r + 1][1]
            cv.line(min(lo), mid, max(lo), mid, C['steel'], sw=4)
            for x in lo:
                cv.line(x, mid, x, y1, C['steel'], sw=4)
    return cv


def room_plan(rooms, things=None, h=580):
    """A flat seen from above, with the rooms named and things in them.

    rooms = [(name, x, y, w, h, colour)] in fractions of the plan box.
    things = [(prop, x, y, colour)] in the same fractions.
    """
    cv = _cv(h, shade(C['wood'], 1.42))
    px, py = 110, 36
    pw, ph = W_ - 220, h - 72
    cv.rect(px - 8, py - 8, pw + 16, ph + 16, C['wall'], r=6)
    cv.rect(px, py, pw, ph, C['tile'])
    for name, x, y, w, hh, col in rooms:
        rx, ry, rw, rh = px + pw * x, py + ph * y, pw * w, ph * hh
        cv.rect(rx, ry, rw, rh, shade(C[col], 1.62))
        cv.rect(rx, ry, rw, rh, 'none', stroke=C['slate'], sw=5)
        cv.fit(name, rx + 14, ry + 36, rw - 28, 27, weight='Bold', bg=shade(C[col], 1.62))
    for pname, x, y, col in (things or []):
        W.prop(cv, pname, px + pw * x, py + ph * y, s=1.55,
               col=C[col] if col else None)
    return cv


def clocks(times, h=330):
    """Clock faces. The time is read off the hands, not printed under them."""
    cv = _cv(h, C['paper'])
    n = len(times)
    cw = (W_ - 60) / n
    for i, (hh, mm, tag) in enumerate(times):
        cx = 30 + cw * (i + 0.5)
        cy = h * 0.44
        r = min(cw * 0.36, h * 0.30)
        cv.circle(cx, cy + 4, r, C['ink'], opacity=0.12)
        cv.circle(cx, cy, r, C['paper'], stroke=C['slate'], sw=r * 0.10)
        for k in range(12):
            a = math.radians(k * 30 - 90)
            cv.line(cx + r * 0.82 * math.cos(a), cy + r * 0.82 * math.sin(a),
                    cx + r * 0.93 * math.cos(a), cy + r * 0.93 * math.sin(a),
                    C['ink_mute'], sw=r * (0.07 if k % 3 == 0 else 0.04))
        ah = math.radians((hh % 12) * 30 + mm * 0.5 - 90)
        am = math.radians(mm * 6 - 90)
        cv.line(cx, cy, cx + r * 0.50 * math.cos(ah), cy + r * 0.50 * math.sin(ah),
                C['ink'], sw=r * 0.11)
        cv.line(cx, cy, cx + r * 0.76 * math.cos(am), cy + r * 0.76 * math.sin(am),
                C['ink'], sw=r * 0.075)
        cv.circle(cx, cy, r * 0.08, deep(C['red']))
        if tag:
            cv.circle(cx - r * 0.82, cy - r * 0.82, 20, deep(C['navy']))
            cv.text(str(tag), cx - r * 0.82, cy - r * 0.74, 22, fill='#FFFFFF',
                    weight='Bold', anchor='middle', bg=deep(C['navy']))
    return cv


def menu(title, sections, h=None):
    """A real menu with real prices. sections = [(head, [(item, price)])]"""
    rows = sum(len(s[1]) + 1 for s in sections)
    h = h or (150 + 46 * rows)
    cv = _cv(h, shade(C['wood'], 1.30))
    mw = W_ - 480
    x, y = (W_ - mw) / 2, 40
    mh = h - 80
    cv.rect(x + 6, y + 9, mw, mh, C['ink'], r=8, opacity=0.15)
    cv.rect(x, y, mw, mh, C['cream'], r=8, stroke=shade(C['wood'], 0.80), sw=4)
    cv.text(title, x + mw / 2, y + 52, 34, weight='Bold', anchor='middle', bg=C['cream'])
    cv.line(x + 36, y + 70, x + mw - 36, y + 70, shade(C['wood'], 0.86), sw=3)
    ly = y + 112
    for head, items in sections:
        cv.text(head, x + 36, ly, 26, weight='Bold', fill=deep(C['red']), bg=C['cream'])
        ly += 40
        for item, price in items:
            cv.text(item, x + 52, ly, 26, bg=C['cream'])
            cv.text(price, x + mw - 36, ly, 26, weight='SemiBold', anchor='end',
                    bg=C['cream'])
            ly += 44
        ly += 8
    return cv


def town_map(places, h=620):
    """A town seen from above: roads, named buildings, a compass.

    places = [(name, x, y, w, hh, colour)] in fractions.
    """
    cv = _cv(h, shade(C['leaf'], 1.70))
    cv.rect(0, h * 0.44, W_, h * 0.14, C['road'])
    cv.rect(W_ * 0.44, 0, W_ * 0.11, h, C['road'])
    for i in range(9):
        cv.rect(40 + i * 140, h * 0.505, 70, 8, C['line'], r=4)
    for i in range(6):
        if h * 0.07 + i * h * 0.17 > h * 0.42 and h * 0.07 + i * h * 0.17 < h * 0.60:
            continue
        cv.rect(W_ * 0.492, h * 0.04 + i * h * 0.17, 8, 56, C['line'], r=4)
    for name, x, y, w, hh, col in places:
        bx, by, bw, bh = W_ * x, h * y, W_ * w, h * hh
        cv.rect(bx + 5, by + 7, bw, bh, C['ink'], r=6, opacity=0.14)
        cv.rect(bx, by, bw, bh, shade(C[col], 1.30), r=6)
        cv.rect(bx, by, bw, bh * 0.30, deep(C[col]), r=6)
        cv.fit(name, bx + 10, by + bh * 0.22, bw - 20, 23, fill='#FFFFFF',
               weight='Bold', bg=deep(C[col]))
    return cv


def tick_grid(cols, rows, h=None, label_w=0.30):
    """A tick-and-cross table. rows = [(label, [True/False, ...])]"""
    h = h or (130 + 62 * (len(rows) + 1))
    cv = _cv(h, C['paper'])
    tw_ = W_ - 160
    x, y = 80, 48
    lw = tw_ * label_w
    cw = (tw_ - lw) / len(cols)
    cv.rect(x, y, tw_, 62, deep(C['navy']), r=10)
    for i, c in enumerate(cols):
        cv.fit(c, x + lw + cw * i + 10, y + 40, cw - 20, 24, fill='#FFFFFF',
               weight='Bold', anchor='start', bg=deep(C['navy']))
    for r, (lab, marks) in enumerate(rows):
        ry = y + 62 + r * 62
        bgc = C['cream'] if r % 2 == 0 else C['paper']
        cv.rect(x, ry, tw_, 62, bgc)
        cv.line(x, ry + 62, x + tw_, ry + 62, C['rule'], sw=1.5)
        cv.text(lab, x + 18, ry + 40, 26, weight='SemiBold', bg=bgc)
        for i, m in enumerate(marks):
            mx = x + lw + cw * i + cw / 2
            if m:
                cv.path(f'M{mx-13:.2f},{ry+31:.2f} l9,10 l17,-19', stroke=deep(C['green']),
                        sw=6, fill='none')
            else:
                cv.path(f'M{mx-11:.2f},{ry+21:.2f} l22,22 M{mx+11:.2f},{ry+21:.2f} '
                        f'l-22,22', stroke=deep(C['red']), sw=6)
    cv.rect(x, y, tw_, 62 + 62 * len(rows), 'none', r=10, stroke=C['steel'], sw=2.5)
    return cv


def then_now(items, h=None, left='LAST WEEKEND', right='NOW'):
    """Two columns, then and now. The contrast a past tense needs."""
    h = h or (140 + 92 * len(items))
    cv = _cv(h, C['paper'])
    bw = (W_ - 120) / 2
    for i, (head, col) in enumerate(((left, 'purple'), (right, 'teal'))):
        x = 50 + i * (bw + 20)
        hc = deep(C[col])
        cv.rect(x, 34, bw, h - 68, shade(C[col], 1.70), r=16)
        cv.rect(x, 34, bw, 60, hc, r=16)
        cv.rect(x, 70, bw, 24, hc)
        cv.text(head, x + bw / 2, 74, 28, fill='#FFFFFF', weight='Bold', anchor='middle',
                bg=hc)
    for j, (a, b) in enumerate(items):
        ly = 150 + j * 92
        for i, s in enumerate((a, b)):
            x = 50 + i * (bw + 20)
            cv.rect(x + 22, ly, bw - 44, 62, C['paper'], r=10, stroke=C['silver'], sw=2)
            cv.fit(s, x + 40, ly + 40, bw - 80, 27, bg=C['paper'])
        cv.path(f'M{50+bw-6:.2f},{ly+31:.2f} h26', stroke=C['ink_mute'], sw=5)
        cv.path(f'M{50+bw+10:.2f},{ly+21:.2f} l12,10 l-12,10', stroke=C['ink_mute'], sw=5,
                fill='none')
    return cv


def verb_change(pairs, h=None, size=38):
    """base form -> past form, with the part that changes picked out.

    pairs = [(base, past, 'add' | 'new')]. `add` means the ending is glued on
    and the stem survives, which is the whole point of the regular past;
    `new` means the word changes and there is nothing to add.
    """
    h = h or (84 + 98 * len(pairs))
    cv = _cv(h, C['cream'])
    for i, (base, past, kind) in enumerate(pairs):
        y = 50 + i * 98
        bw = tw(base, size, 'SemiBold') + 48
        cv.rect(150, y, bw, 68, C['paper'], r=12, stroke=C['silver'], sw=2.5)
        cv.text(base, 150 + bw / 2, y + 47, size, anchor='middle', bg=C['paper'])
        ax = 150 + bw + 28
        cv.path(f'M{ax:.2f},{y+34:.2f} h70', stroke=C['ink_mute'], sw=6)
        cv.path(f'M{ax+56:.2f},{y+22:.2f} l14,12 l-14,12', stroke=C['ink_mute'],
                sw=6, fill='none')
        sx = ax + 110
        pw = tw(past, size, 'Bold') + 48
        col = deep(C['teal'] if kind == 'add' else C['purple'])
        cv.rect(sx, y, pw, 68, col, r=12)
        cv.rect(sx, y, pw, 22, shade(col, 1.16), r=12)
        if kind == 'add' and past.startswith(base):
            stem, end = base, past[len(base):]
            wstem = tw(stem, size, 'Bold')
            x0 = sx + (pw - tw(past, size, 'Bold')) / 2
            cv.text(stem, x0, y + 47, size, fill='#FFFFFF', weight='Bold', bg=col)
            # the ending has to stand out AND be legal: plain amber on deep
            # teal is 2.6:1, which the engine's own contrast check refused.
            # Lighten it until it passes, then use that.
            # Bounded, because shade() converges on white asymptotically and
            # integer truncation stalls it a few points short: an unbounded
            # `while contrast < 4.5` loop here never returned.
            hi = C['amber']
            for _ in range(14):
                if contrast(hi, col) >= 4.5:
                    break
                hi = shade(hi, 1.10)
            else:
                hi = '#FFFFFF'
            cv.text(end, x0 + wstem, y + 47, size, fill=hi, weight='Bold', bg=col)
        else:
            cv.text(past, sx + pw / 2, y + 47, size, fill='#FFFFFF', weight='Bold',
                    anchor='middle', bg=col)
        cv.text('a new word' if kind == 'new' else 'add the ending',
                sx + pw + 26, y + 45, 22, fill=C['ink_soft'], bg=cv.bg)
    return cv


def calendar(title, days, marks, h=520):
    """A week or a month with things written on the days."""
    cv = _cv(h, C['paper'])
    gw = W_ - 160
    x, y = 80, 44
    cv.text(title, x, y + 8, 30, weight='Bold', bg=cv.bg)
    y += 40
    cols = len(days)
    cw = gw / cols
    hc = deep(C['navy'])
    cv.rect(x, y, gw, 54, hc, r=8)
    for i, d in enumerate(days):
        cv.fit(d, x + cw * i + 12, y + 36, cw - 24, 24, fill='#FFFFFF',
               weight='Bold', bg=hc)
    bh = h - y - 54 - 40
    for i in range(cols):
        bg = C['cream'] if i % 2 == 0 else C['paper']
        cv.rect(x + cw * i, y + 54, cw, bh, bg)
        cv.rect(x + cw * i, y + 54, cw, bh, 'none', stroke=C['rule'], sw=1.5)
        for j, m in enumerate(marks.get(i, [])):
            cv.rect(x + cw * i + 10, y + 70 + j * 54, cw - 20, 42,
                    shade(C['teal'], 1.55), r=8)
            cv.fit(m, x + cw * i + 20, y + 98 + j * 54, cw - 40, 23,
                   bg=shade(C['teal'], 1.55))
    cv.rect(x, y, gw, 54 + bh, 'none', r=8, stroke=C['steel'], sw=2.5)
    return cv


def compare_two(a, b, rows, h=None):
    """Two things side by side on the same measures. For comparatives.

    a, b = (name, prop, colour); rows = [(label, a_value, b_value)]
    """
    h = h or (260 + 58 * len(rows))
    cv = _cv(h, C['paper'])
    cw = (W_ - 150) / 2
    for i, (name, pname, col) in enumerate((a, b)):
        x = 50 + i * (cw + 50)
        cv.rect(x, 30, cw, 180, C['cream'], r=16, stroke=C['silver'], sw=2)
        W.prop(cv, pname, x + cw / 2, 108, s=1.7, col=C[col] if col else None)
        cv.fit(name, x + 20, 190, cw - 40, 28, weight='Bold', anchor='start',
               bg=C['cream'])
    for j, (lab, va, vb) in enumerate(rows):
        ly = 250 + j * 58
        cv.text(lab, 50, ly, 25, fill=C['ink_soft'], bg=cv.bg)
        for i, v in enumerate((va, vb)):
            x = 50 + i * (cw + 50)
            cv.text(str(v), x + cw - 20, ly, 27, weight='SemiBold', anchor='end',
                    bg=cv.bg)
        cv.line(50, ly + 14, W_ - 50, ly + 14, C['rule'], sw=1.5)
    return cv


def body_map(pid, parts, h=640, pose='stand'):
    """A person with parts of the body labelled, joined by leader lines.

    parts = [(label, side, frac, xoff)] where side is 'l' or 'r', frac is the
    height down the figure (0 at the crown, 1 at the feet) and xoff is how far
    out from the centre line the dot sits, as a fraction of the figure height.
    A single rule for the dot's x -- narrow above the shoulder, wide below --
    put the hand marker on the shoulder, so the caller places it now.

    Arms down the sides leave no clear line to the middle of the body: every
    leader to the stomach crosses an arm. `pose` is here so the caller can
    lift the arms out of the way and label the trunk properly.
    """
    cv = _cv(h, C['cream'])
    base = h - 50
    H = h - 110
    a = draw_person(cv, who(pid), W_ / 2, base, H, pose=pose, expr='neutral')
    top = base - H
    for label, side, frac, xoff in parts:
        py = top + H * frac
        sgn = -1 if side == 'l' else 1
        px = W_ / 2 + sgn * H * xoff
        lx = W_ / 2 + sgn * W_ * 0.27
        cv.line(px, py, lx - sgn * 14, py, C['steel'], sw=3)
        cv.circle(px, py, 7, deep(C['red']))
        bw = tw(label, 28, 'SemiBold') + 40
        bx = lx - (bw if sgn < 0 else 0)
        cv.rect(bx, py - 25, bw, 50, C['paper'], r=10, stroke=C['silver'], sw=2.5)
        cv.text(label, bx + bw / 2, py + 9, 28, weight='SemiBold', anchor='middle',
                bg=C['paper'])
    return cv


def rank_three(title, items, h=None):
    """Three things ranked, for superlatives. items = [(name, prop, col, value)]"""
    h = h or 440
    cv = _cv(h, C['paper'])
    cv.text(title, 80, 52, 30, weight='Bold', bg=cv.bg)
    n = len(items)
    cw = (W_ - 160) / n
    for i, (name, pname, col, value) in enumerate(items):
        x = 80 + cw * i
        rank = ['1', '2', '3'][i] if i < 3 else str(i + 1)
        ch = h - 140
        cv.rect(x + 12, 80, cw - 24, ch, C['cream'], r=16, stroke=C['silver'],
                sw=2)
        # The picture is the card. An earlier version drew it at s=1.6 high up
        # and dropped the value below the card's own bottom edge: a thumbnail
        # floating over a hole, with the number half off the card.
        W.prop(cv, pname, x + cw / 2, 80 + ch * 0.40, s=min(2.6, (cw - 70) / 60),
               col=C[col] if col else None)
        cv.circle(x + 46, 114, 24, deep(C['navy']))
        cv.text(rank, x + 46, 123, 26, fill='#FFFFFF', weight='Bold', anchor='middle',
                bg=deep(C['navy']))
        cv.fit(name, x + 30, 80 + ch - 74, cw - 60, 27, weight='SemiBold', anchor='start',
               bg=C['cream'])
        cv.fit(str(value), x + 30, 80 + ch - 30, cw - 60, 32, weight='Bold', anchor='start',
               bg=C['cream'])
    return cv
