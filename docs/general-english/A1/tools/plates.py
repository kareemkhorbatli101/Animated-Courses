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

from draw import C, Canvas, arc, deep, rr_path, shade, tw
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
        cv.text(cap, x + pw / 2, h - 30, 28, weight='SemiBold', anchor='middle', bg=cv.bg)
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
    for i, hd in enumerate(cols[0]):
        cv.text(hd, cx + 20, y + 37, 25, fill='#FFFFFF', weight='Bold', bg=C['navy'])
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
            cv.text(str(cell), cx + 20, ry + 38, 26,
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
        cv.text(word, x, h - 44, 26, weight='SemiBold', anchor='middle', bg=C['paper'])
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
        # draw_person treats ybase as the GROUND, and a seated figure never
        # reaches the ground -- its legs stop at the hip plus a lap. So the
        # ybase for a seated person is solved backwards from where the hip has
        # to be: hip = ybase - 0.48H, and the hip has to sit just below the
        # desk top or the figure floats above the furniture, which is what the
        # first two versions of this plate did.
        Hs = h * 0.42
        desk_top = base - h * 0.150
        hip_target = desk_top + h * 0.030
        yb = hip_target + 0.48 * Hs
        for i, pid in enumerate(seated):
            x = W_ * (0.58 + i * 0.17)
            W.prop(cv, 'chair', x + W_ * 0.045, hip_target + h * 0.010, s=h / 300)
            draw_person(cv, who(pid), x, yb, Hs, pose='sit', face=-0.3, shadow=False)
        dx = W_ * 0.58 - W_ * 0.090
        dw = W_ * (0.17 * (len(seated) - 1)) + W_ * 0.21
        W.table_scene(cv, dx, desk_top, dw, h * 0.17)
        for i in range(len(seated)):
            W.prop(cv, 'notebook', W_ * (0.58 + i * 0.17) + W_ * 0.012,
                   desk_top + h * 0.004, s=h / 820)
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
