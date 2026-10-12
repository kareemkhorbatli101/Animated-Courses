"""The A2 plates. Eight additions; the other thirty-nine come from `plates`.

A2's grammar is about time and relation, and the A1 library has nothing that
draws either: no timeline, no interrupted action, no process. These eight are
what the twenty units need and nothing beyond them.

Importing this module gives you the whole library: `from plates2 import *`
re-exports every A1 plate as well, so a unit module has one import.
"""
from __future__ import annotations

from plates import *                                            # noqa: F401,F403
from plates import _cv, _title, W_                              # noqa: F401
from draw import C, Canvas, deep, shade, tw                     # noqa: F401
from people import draw_person                                  # noqa: F401
from cast import who                                            # noqa: F401
import world as W                                               # noqa: F401


def timeline(events, h=None, now='NOW', past='THE PAST'):
    """A line of time with events on it. The plate present perfect needs.

    events = [(label, frac, kind)] where frac is 0 (left, long ago) to 1
    (right, now) and kind is 'point' (a finished moment: past simple) or
    'span' (a stretch reaching now: present perfect with for/since).
    A span is drawn as a bar to the NOW line; a point as a dot that stops.
    """
    h = h or (190 + 74 * len(events))
    cv = _cv(h, C['paper'])
    x0, x1 = 150, W_ - 150
    ay = h - 86
    cv.line(x0, ay, x1, ay, deep(C['ink']), sw=6)
    cv.path(f'M{x1-20:.1f},{ay-13:.1f} l20,13 l-20,13', stroke=deep(C['ink']),
            sw=6, fill='none')
    cv.line(x1, ay - 62, x1, ay + 26, deep(C['red']), sw=5, dash='9 8')
    cv.text(now, x1, ay + 56, 26, fill=deep(C['red']), weight='Bold',
            anchor='middle', bg=cv.bg)
    cv.text(past, x0, ay + 56, 26, fill=C['ink_soft'], weight='SemiBold',
            bg=cv.bg)
    for i, (label, frac, kind) in enumerate(events):
        ex = x0 + (x1 - x0) * max(0.0, min(1.0, frac))
        ty = 70 + i * 74
        col = deep(C['teal'] if kind == 'span' else C['amber'])
        # The marker goes ON the line, not in the row. The first version put
        # the dot at the row's own height and the label box then covered it:
        # a timeline whose events are not on the timeline.
        if kind == 'span':
            cv.rect(ex, ty - 20, x1 - ex, 40, shade(col, 1.55), r=12)
            cv.rect(ex, ty - 20, 7, 40, col, r=3)
            cv.line(ex, ty + 20, ex, ay - 6, col, sw=3, dash='7 7')
            cv.line(x1, ty + 20, x1, ay - 6, col, sw=3, dash='7 7')
            cv.rect(ex, ay - 9, x1 - ex, 18, col, r=9)
        else:
            cv.line(ex, ty + 24, ex, ay - 12, col, sw=3, dash='7 7')
            cv.circle(ex, ay, 14, col)
            cv.circle(ex, ay, 6, C['paper'])
        bw = tw(label, 27, 'SemiBold') + 34
        bx = min(max(ex - bw / 2, 20), W_ - bw - 20)
        if kind == 'span':
            bx = min(ex + 22, W_ - bw - 20)
        cv.rect(bx, ty - 24, bw, 48, C['cream'], r=10, stroke=col, sw=3)
        cv.text(label, bx + bw / 2, ty + 9, 27, weight='SemiBold',
                anchor='middle', bg=C['cream'])
    return cv


def split_screen(before, during, after, h=460):
    """One long action cut across by a short one. Past continuous and when.

    before/during/after = (caption, prop_or_pid, colour). The middle panel is
    the interruption and is drawn taller and in the warning colour, because
    the grammar is entirely about which of the two the sentence interrupts.
    """
    cv = _cv(h, C['cream'])
    pw = (W_ - 80) / 3
    for i, (cap, thing, col) in enumerate((before, during, after)):
        x = 20 + i * (pw + 20)
        mid = i == 1
        base = deep(C[col]) if mid else C['silver']
        cv.rect(x, 30 if mid else 50, pw, h - (110 if mid else 150),
                shade(C[col], 1.62), r=18, stroke=base, sw=4 if mid else 2.5)
        W.prop(cv, thing, x + pw / 2, (mid and 180) or 190, s=2.0,
               col=C[col] if col else None)
        cv.fit(cap, x + 24, h - 92, pw - 48, 27, weight='SemiBold',
               anchor='start', bg=shade(C[col], 1.62))
        if i < 2:
            ax = x + pw + 10
            cv.path(f'M{ax-9:.1f},{h/2-14:.1f} l12,12 l-12,12',
                    stroke=C['ink_mute'], sw=6, fill='none')
    cv.text('the long action', 20 + pw / 2, h - 36, 24, fill=C['ink_soft'],
            anchor='middle', bg=cv.bg)
    cv.text('what cut across it', 20 + pw + 20 + pw / 2, h - 36, 24,
            fill=deep(C['red']), weight='SemiBold', anchor='middle', bg=cv.bg)
    cv.text('and then', 20 + 2 * (pw + 20) + pw / 2, h - 36, 24,
            fill=C['ink_soft'], anchor='middle', bg=cv.bg)
    return cv


def bar_compare(title, rows, h=None, unit=''):
    """Quantity, drawn to scale. For much/many/a few, and for as ... as.

    rows = [(label, value, colour)]. The bars are proportional, because a bar
    chart whose bars are not is a picture of a lie.
    """
    h = h or (150 + 72 * len(rows))
    cv = _cv(h, C['paper'])
    cv.text(title, 80, 56, 30, weight='Bold', bg=cv.bg)
    lw, x0 = 300, 380
    top = max((r[1] for r in rows), default=1) or 1
    for i, (label, value, col) in enumerate(rows):
        y = 92 + i * 72
        cv.fit(label, 80, y + 34, lw - 20, 27, weight='SemiBold', bg=cv.bg)
        full = W_ - x0 - 150
        bw = max(8, full * value / top)
        cv.rect(x0, y + 8, full, 42, C['cream'], r=8)
        cv.rect(x0, y + 8, bw, 42, deep(C[col]), r=8)
        cv.text(f'{value}{unit}', x0 + bw + 16, y + 38, 26, weight='Bold',
                bg=cv.bg)
    return cv


def process_strip(steps, h=430):
    """How a thing is made, left to right. The simple present passive.

    steps = [(caption, prop, colour)]. Numbered, because the passive at A2 is
    almost always a sequence and the number is the half of it a picture can
    carry that a sentence cannot.
    """
    n = len(steps)
    cv = _cv(h, C['cream'])
    pw = (W_ - 30 * (n + 1)) / n
    for i, (cap, thing, col) in enumerate(steps):
        x = 30 + i * (pw + 30)
        cv.rect(x, 40, pw, h - 130, C['paper'], r=16, stroke=C['silver'], sw=2.5)
        W.prop(cv, thing, x + pw / 2, 190, s=min(2.2, (pw - 60) / 55),
               col=C[col] if col else None)
        cv.circle(x + 42, 86, 25, deep(C['navy']))
        cv.text(str(i + 1), x + 42, 95, 26, fill='#FFFFFF', weight='Bold',
                anchor='middle', bg=deep(C['navy']))
        cv.fit(cap, x + 20, h - 62, pw - 40, 26, weight='SemiBold',
               anchor='start', bg=cv.bg)
        if i < n - 1:
            ax = x + pw + 15
            cv.path(f'M{ax-9:.1f},{(h-90)/2-14:.1f} l12,12 l-12,12',
                    stroke=C['ink_mute'], sw=6, fill='none')
    return cv


def itinerary(title, days, h=None):
    """A trip, day by day. days = [(day, place, what)]."""
    h = h or (140 + 78 * len(days))
    cv = _cv(h, C['paper'])
    cv.text(title, 80, 56, 30, weight='Bold', bg=cv.bg)
    x = 150
    cv.line(x, 86, x, h - 50, C['steel'], sw=5)
    for i, (day, place, what) in enumerate(days):
        y = 112 + i * 78
        cv.circle(x, y, 17, deep(C['teal']))
        cv.text(str(i + 1), x, y + 9, 24, fill='#FFFFFF', weight='Bold',
                anchor='middle', bg=deep(C['teal']))
        cv.text(day, x + 42, y - 4, 27, weight='Bold', bg=cv.bg)
        cv.text(place, x + 42, y + 30, 25, fill=C['ink_soft'], bg=cv.bg)
        cv.fit(what, x + 430, y - 4, W_ - x - 480, 26, bg=cv.bg)
    return cv


def rota(title, cols, rows, h=None):
    """A grid of who does what when. A work rota, a weather week.

    rows = [(label, [cell, ...])]. Empty cells are drawn as a dash rather
    than left blank, because a blank cell in a printed table reads as a
    printing fault and a learner will ask about it.
    """
    h = h or (140 + 62 * (len(rows) + 1))
    cv = _cv(h, C['paper'])
    cv.text(title, 80, 56, 30, weight='Bold', bg=cv.bg)
    x, y = 80, 86
    tw_ = W_ - 160
    lw = tw_ * 0.26
    cwid = (tw_ - lw) / len(cols)
    hc = deep(C['navy'])
    cv.rect(x, y, tw_, 58, hc, r=10)
    for i, c in enumerate(cols):
        cv.fit(c, x + lw + cwid * i + 10, y + 38, cwid - 20, 24, fill='#FFFFFF',
               weight='Bold', anchor='start', bg=hc)
    for r, (lab, cells) in enumerate(rows):
        ry = y + 58 + r * 62
        bg = C['cream'] if r % 2 == 0 else C['paper']
        cv.rect(x, ry, tw_, 62, bg)
        cv.line(x, ry + 62, x + tw_, ry + 62, C['rule'], sw=1.5)
        cv.text(lab, x + 18, ry + 40, 26, weight='SemiBold', bg=bg)
        for i, v in enumerate(cells):
            cv.fit(str(v) if str(v).strip() else '—',
                   x + lw + cwid * i + 10, ry + 40, cwid - 20, 25,
                   anchor='start', bg=bg)
    cv.rect(x, y, tw_, 58 + 62 * len(rows), 'none', r=10, stroke=C['steel'],
            sw=2.5)
    return cv


def two_text(a, b, h=None):
    """Two short texts side by side, for the A2 reading task.

    a, b = (heading, [line, ...], colour). The learner compares; the plate
    exists so the comparison is on one page instead of over a fold.
    """
    # The height is computed from the longest of the two texts. A fixed 560
    # left half a page of cream under a two-line note, which reads as a
    # printing fault rather than as a design.
    if h is None:
        per = max(sum(1 + len(ln) // 42 for ln in side[1]) for side in (a, b))
        h = 190 + 68 * per
    cv = _cv(h, C['paper'])
    cwid = (W_ - 150) / 2
    for i, (head, lines, col) in enumerate((a, b)):
        x = 50 + i * (cwid + 50)
        hc = deep(C[col])
        cv.rect(x, 30, cwid, h - 60, C['cream'], r=16, stroke=C['silver'], sw=2)
        cv.rect(x, 30, cwid, 62, hc, r=16)
        cv.rect(x, 62, cwid, 30, hc)
        cv.fit(head, x + 20, 72, cwid - 40, 28, fill='#FFFFFF', weight='Bold',
               anchor='start', bg=hc)
        yy = 136
        for ln in lines:
            yy = cv.wrap(ln, x + 22, yy, cwid - 44, 25, lead=1.38,
                         fill=C['ink'], bg=C['cream']) + 34
    return cv


def office(a, b, say_a, say_b=None, h=580, size=29, pose_a='stand',
           pose_b='at_desk'):
    """A workplace: desks, a screen, two people talking across one.

    Part 7 at A2 is work, and the street plates have nowhere to put it.
    """
    cv = _cv(h, C['cream'])
    base = h - 36
    cv.rect(0, 0, W_, h * 0.62, C['wall'])
    W.window_wall(cv, W_ * 0.56, h * 0.06, W_ * 0.40, h * 0.40, panes=2)
    cv.rect(0, h * 0.62, W_, h * 0.38, C['tile'])
    cv.rect(0, h * 0.62 - 4, W_, 8, shade(C['tile'], 0.86))
    # Seated, solved from the floor up, with A1's arithmetic: draw_person
    # puts the hip at ybase - 0.48H and the seated foot at hip + 0.268H, so
    # feet on the floor means ybase = floor + 0.190H and the hip lands at
    # floor - 0.290H. The desk top goes 0.140H above the hip -- a 73cm desk
    # over a 45cm seat. Guessing instead of solving put him on the desk.
    Hs = h * 0.47
    yb = base + 0.190 * Hs
    hip_y = base - 0.290 * Hs
    desk_top = hip_y - 0.140 * Hs
    bx = W_ * 0.72
    W.chair_back(cv, bx, hip_y, Hs * 0.32, Hs * 0.42, C['slate'])
    pb = draw_person(cv, who(b), bx, yb, Hs, pose=pose_b, expr='smile',
                     face=-0.4, shadow=False)
    W.desk_run(cv, W_ * 0.50, desk_top, W_ * 0.46, base)
    W.prop(cv, 'notebook', W_ * 0.58, desk_top - 4, s=1.3)
    W.prop(cv, 'plant', W_ * 0.14, base - h * 0.02, s=2.1)
    pa = draw_person(cv, who(a), W_ * 0.30, base, h * 0.56, pose=pose_a,
                     expr='talk', face=0.5)
    W.say(cv, pa, say_a, size, side='right', maxw=400, lift=0.30)
    if say_b:
        W.say(cv, pb, say_b, size, side='left', fill=C['sky_bg'], maxw=360,
              lift=-0.02)
    return cv
