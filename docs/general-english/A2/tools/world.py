"""Hill Road: the places, the things, and the speech.

A2's figures were cards with sentences in them. The fix is not a nicer card.
It is that a figure has to show a PLACE or a THING or an ACTION, and the
language has to come out of a person's mouth in a bubble, the way a learner
has seen speech represented since they were four years old.

Everything here is drawn from data and shaded. Nothing is clip art.
"""
from __future__ import annotations

import math

from draw import C, Canvas, arc, deep, rr_path, shade, tw

# --------------------------------------------------------------- speech


def bubble(cv: Canvas, x, y, w, lines, size=26, tail=None, fill=None,
           ink=None, think=False, weight='Medium', pad=18):
    """A speech bubble whose tail points at `tail` = (tx, ty), a mouth.

    Returns (x, y, w, h). Lines may be a string or a list of strings.
    """
    fill = fill or C['paper']
    ink = ink or C['ink']
    if isinstance(lines, str):
        lines = [lines]
    lead = size * 1.30
    h = pad * 2 + lead * len(lines) - (lead - size)
    cv.path(rr_path(x, y, w, h, 16, 16, 16, 16), fill=shade(fill, 0.86), stroke=None)
    cv.path(rr_path(x, y - 3, w, h, 16, 16, 16, 16), fill=fill,
            stroke=shade(fill, 0.78), sw=2.5)
    if tail:
        tx, ty = tail
        # the tail leaves the nearest edge, not always the base, and is
        # clamped so it never turns into a spear across the picture
        cxb, cyb = x + w / 2, y + h / 2
        if think:
            ax = min(max(tx, x + 26), x + w - 26)
            for i, r in enumerate((11, 7.5, 5)):
                f_ = (i + 1) / 3.6
                cv.circle(ax + (tx - ax) * f_, y + h - 3 + (ty - (y + h)) * f_ * 0.9, r,
                          fill, stroke=shade(fill, 0.78), sw=2)
        else:
            if tx < x:                      # speaker is to the left
                ax, ay, nx, ny = x, min(max(ty, y + 24), y + h - 24), -1, 0
            elif tx > x + w:                # to the right
                ax, ay, nx, ny = x + w, min(max(ty, y + 24), y + h - 24), 1, 0
            else:                           # below
                ax, ay, nx, ny = min(max(tx, x + 28), x + w - 28), y + h, 0, 1
            d = ((tx - ax) ** 2 + (ty - ay) ** 2) ** 0.5
            lim = max(h * 1.5, 70)
            if d > lim:
                tx, ty = ax + (tx - ax) * lim / d, ay + (ty - ay) * lim / d
            s_ = 15
            p1 = (ax - ny * s_, ay - nx * s_)
            p2 = (ax + ny * s_, ay + nx * s_)
            cv.path(f'M{p1[0]:.2f},{p1[1]:.2f} L{tx:.2f},{ty:.2f} L{p2[0]:.2f},{p2[1]:.2f} Z',
                    fill=fill, stroke=shade(fill, 0.78), sw=2.5)
            if nx:
                cv.rect(ax - 7, ay - s_ + 2, 14, s_ * 2 - 4, fill)
            else:
                cv.rect(ax - s_ + 2, ay - 8, s_ * 2 - 4, 14, fill)
    for i, ln in enumerate(lines):
        cv.text(ln, x + pad, y + pad + size * 0.80 + i * lead, size, fill=ink,
                weight=weight, bg=fill)
    return (x, y, w, h)


def say(cv: Canvas, anchors: dict, lines, size=26, side='right', gap=16,
        fill=None, think=False, maxw=None, lift=0.0):
    """Put speech beside a person's head, with a tail that stays short.

    `anchors` is what draw_person returned. The bubble sits level with the
    head, on `side`, and the tail reaches the near edge of the face. A tail
    longer than about a head's width stops reading as speech and starts
    reading as a spear, which is why the bubble is placed from the body
    rather than the body pointed at from wherever the bubble landed.
    """
    if isinstance(lines, str):
        lines = [lines]
    w_ = bubble_w(lines, size)
    if maxw and w_ > maxw:
        out = []
        for ln in lines:
            words, cur = ln.split(), ''
            for wd in words:
                t2 = (cur + ' ' + wd).strip()
                if tw(t2, size, 'Medium') <= maxw - 36 or not cur:
                    cur = t2
                else:
                    out.append(cur); cur = wd
            out.append(cur)
        lines = out
        w_ = bubble_w(lines, size)
    cx, cy = anchors['cx'], anchors['cy']
    rx, ry = anchors['rx'], anchors['ry']
    lead = size * 1.30
    h_ = 36 + lead * len(lines) - (lead - size)
    if side == 'right':
        bx = cx + rx * 1.35 + gap
        tail = (cx + rx * 1.05, cy - ry * 0.25)
    else:
        bx = cx - rx * 1.35 - gap - w_
        tail = (cx - rx * 1.05, cy - ry * 0.25)
    by = cy - ry * 1.5 - h_ * 0.52 - anchors['H'] * lift
    bubble(cv, bx, by, w_, lines, size, tail=tail, fill=fill, think=think)
    return (bx, by, w_, h_)


def bubble_w(lines, size=26, pad=18):
    if isinstance(lines, str):
        lines = [lines]
    return max(tw(s, size, 'Medium') for s in lines) + pad * 2


# ---------------------------------------------------------------- props

def prop(cv: Canvas, name, x, y, s=1.0, col=None):
    """Draw a held or placed object centred on (x, y). s = scale, 1.0 ~ 60px."""
    u = 60 * s
    k = name

    if k == 'tray':
        cv.ellipse(x, y + u * 0.06, u * 0.52, u * 0.17, shade(C['silver'], 0.78))
        cv.ellipse(x, y, u * 0.52, u * 0.17, C['silver'])
        cv.ellipse(x, y - u * 0.02, u * 0.44, u * 0.13, shade(C['silver'], 1.10))
        cv.rect(x - u * 0.13, y - u * 0.26, u * 0.26, u * 0.24, C['paper'], r=u * 0.03)
        cv.rect(x - u * 0.13, y - u * 0.26, u * 0.26, u * 0.08, C['brown'], r=u * 0.03)
    elif k == 'cup':
        cv.path(f'M{x-u*0.20:.2f},{y-u*0.24:.2f} L{x-u*0.15:.2f},{y+u*0.12:.2f} '
                f'q{u*0.15:.2f},{u*0.08:.2f} {u*0.30:.2f},0 '
                f'L{x+u*0.20:.2f},{y-u*0.24:.2f} Z', fill=col or C['paper'],
                stroke=shade(col or C['paper'], 0.72), sw=u * 0.035)
        cv.ellipse(x, y - u * 0.24, u * 0.20, u * 0.06, shade(col or C['cloud'], 0.95))
        cv.path(arc(x + u * 0.22, y - u * 0.06, u * 0.11, -80, 80),
                stroke=shade(col or C['paper'], 0.72), sw=u * 0.045)
    elif k == 'phone':
        cv.rect(x - u * 0.15, y - u * 0.27, u * 0.30, u * 0.54, C['ink'], r=u * 0.055)
        cv.rect(x - u * 0.125, y - u * 0.235, u * 0.25, u * 0.47, C['sky'], r=u * 0.04)
        cv.rect(x - u * 0.09, y - u * 0.18, u * 0.18, u * 0.05, C['paper'], r=u * 0.015)
        cv.rect(x - u * 0.09, y - u * 0.08, u * 0.18, u * 0.05, C['paper'], r=u * 0.015,
                opacity=0.7)
    elif k == 'backpack':
        cv.path(rr_path(x - u * 0.24, y - u * 0.26, u * 0.48, u * 0.56, 14 * s, 14 * s,
                        9 * s, 9 * s), fill=col or C['blue'])
        cv.path(rr_path(x - u * 0.24, y + u * 0.02, u * 0.48, u * 0.28, 0, 0, 9 * s, 9 * s),
                fill=shade(col or C['blue'], 0.84))
        cv.rect(x - u * 0.13, y - u * 0.10, u * 0.26, u * 0.13, C['sand'], r=u * 0.02)
        cv.path(arc(x, y - u * 0.26, u * 0.17, 200, 340), stroke=shade(col or C['blue'], 0.7),
                sw=u * 0.05)
    elif k == 'toolbox':
        cv.rect(x - u * 0.28, y - u * 0.12, u * 0.56, u * 0.32, C['red'], r=u * 0.035)
        cv.rect(x - u * 0.28, y - u * 0.12, u * 0.56, u * 0.10, shade(C['red'], 1.16),
                r=u * 0.035)
        cv.path(arc(x, y - u * 0.13, u * 0.16, 190, 350), stroke=C['steel'], sw=u * 0.05)
        cv.rect(x - u * 0.28, y + u * 0.13, u * 0.56, u * 0.07, shade(C['red'], 0.76))
    elif k == 'basket':
        cv.path(f'M{x-u*0.27:.2f},{y-u*0.10:.2f} L{x-u*0.21:.2f},{y+u*0.20:.2f} '
                f'L{x+u*0.21:.2f},{y+u*0.20:.2f} L{x+u*0.27:.2f},{y-u*0.10:.2f} Z',
                fill=C['sand'], stroke=shade(C['sand'], 0.74), sw=u * 0.03)
        for i in range(-2, 3):
            cv.line(x + i * u * 0.10, y - u * 0.08, x + i * u * 0.085, y + u * 0.18,
                    shade(C['sand'], 0.80), sw=u * 0.022)
        cv.path(arc(x, y - u * 0.11, u * 0.19, 200, 340), stroke=shade(C['sand'], 0.70),
                sw=u * 0.040)
        cv.circle(x - u * 0.08, y - u * 0.14, u * 0.09, C['green'])
        cv.circle(x + u * 0.07, y - u * 0.15, u * 0.08, C['red'])
    elif k == 'book':
        cv.rect(x - u * 0.24, y - u * 0.18, u * 0.48, u * 0.36, col or C['purple'],
                r=u * 0.025)
        cv.rect(x - u * 0.24, y - u * 0.18, u * 0.07, u * 0.36,
                shade(col or C['purple'], 0.76), r=u * 0.02)
        cv.rect(x - u * 0.11, y - u * 0.08, u * 0.28, u * 0.035, C['paper'], opacity=0.85)
        cv.rect(x - u * 0.11, y, u * 0.21, u * 0.035, C['paper'], opacity=0.85)
    elif k == 'badge' or k == 'namebadge':
        cv.rect(x - u * 0.30, y - u * 0.19, u * 0.60, u * 0.38, C['paper'], r=u * 0.035,
                stroke=C['steel'], sw=u * 0.022)
        cv.rect(x - u * 0.30, y - u * 0.19, u * 0.60, u * 0.12, col or C['teal'],
                r=u * 0.035)
        cv.rect(x - u * 0.30, y - u * 0.10, u * 0.60, u * 0.04, col or C['teal'])
        cv.circle(x, y - u * 0.25, u * 0.045, C['silver'])
    elif k == 'timetable' or k == 'paper':
        cv.rect(x - u * 0.22, y - u * 0.28, u * 0.44, u * 0.56, C['paper'], r=u * 0.02,
                stroke=C['silver'], sw=u * 0.02)
        for i in range(4):
            cv.line(x - u * 0.15, y - u * 0.16 + i * u * 0.12, x + u * 0.15,
                    y - u * 0.16 + i * u * 0.12, C['ink_mute'], sw=u * 0.025)
    elif k == 'ball':
        cv.circle(x, y, u * 0.23, C['paper'], stroke=shade(C['ink'], 1.6), sw=u * 0.020)
        import math as _m
        pts = [(x + u * 0.085 * _m.cos(_m.radians(a - 90)),
                y + u * 0.085 * _m.sin(_m.radians(a - 90))) for a in range(0, 360, 72)]
        cv.poly(pts, C['ink'])
        for a in range(0, 360, 72):
            cv.line(x + u * 0.085 * _m.cos(_m.radians(a - 90)),
                    y + u * 0.085 * _m.sin(_m.radians(a - 90)),
                    x + u * 0.21 * _m.cos(_m.radians(a - 90)),
                    y + u * 0.21 * _m.sin(_m.radians(a - 90)),
                    shade(C['ink'], 1.6), sw=u * 0.020)
    elif k == 'key':
        cv.circle(x - u * 0.14, y, u * 0.10, C['amber'], stroke=shade(C['amber'], 0.7),
                  sw=u * 0.025)
        cv.rect(x - u * 0.06, y - u * 0.035, u * 0.32, u * 0.07, C['amber'])
        cv.rect(x + u * 0.16, y + u * 0.03, u * 0.05, u * 0.09, C['amber'])
    elif k == 'bag':
        cv.rect(x - u * 0.22, y - u * 0.14, u * 0.44, u * 0.34, col or C['brown'],
                r=u * 0.03)
        cv.path(arc(x, y - u * 0.15, u * 0.16, 195, 345), stroke=shade(col or C['brown'], 0.74),
                sw=u * 0.045)
    elif k == 'pen':
        cv.path(f'M{x-u*0.18:.2f},{y+u*0.18:.2f} L{x+u*0.16:.2f},{y-u*0.16:.2f} '
                f'l{u*0.08:.2f},{u*0.08:.2f} L{x-u*0.10:.2f},{y+u*0.24:.2f} Z',
                fill=C['blue'])
        cv.path(f'M{x-u*0.18:.2f},{y+u*0.18:.2f} l{u*0.08:.2f},{u*0.06:.2f} '
                f'l{-u*0.10:.2f},{u*0.02:.2f} Z', fill=C['ink'])
    elif k == 'clock':
        cv.circle(x, y, u * 0.28, C['paper'], stroke=C['slate'], sw=u * 0.045)
        cv.line(x, y, x, y - u * 0.17, C['ink'], sw=u * 0.030)
        cv.line(x, y, x + u * 0.13, y + u * 0.06, C['ink'], sw=u * 0.030)
        cv.circle(x, y, u * 0.025, C['red'])
    elif k == 'plant':
        cv.path(f'M{x-u*0.14:.2f},{y+u*0.10:.2f} L{x-u*0.11:.2f},{y+u*0.28:.2f} '
                f'L{x+u*0.11:.2f},{y+u*0.28:.2f} L{x+u*0.14:.2f},{y+u*0.10:.2f} Z',
                fill=C['coral'])
        for a, r in ((250, 0.26), (290, 0.24), (215, 0.20), (325, 0.19)):
            cv.ellipse(x + u * r * math.cos(math.radians(a)),
                       y + u * 0.08 + u * r * math.sin(math.radians(a)),
                       u * 0.13, u * 0.07, C['leaf'], rot=a - 180)
        cv.ellipse(x, y - u * 0.18, u * 0.08, u * 0.15, C['leaf_dk'])
    elif k == 'flag':
        cv.line(x - u * 0.16, y - u * 0.26, x - u * 0.16, y + u * 0.26, C['slate'],
                sw=u * 0.035)
        cv.rect(x - u * 0.16, y - u * 0.26, u * 0.36, u * 0.24, col or C['red'], r=u * 0.015)
    elif k == 'pencil':
        cv.path(f'M{x-u*0.06:.2f},{y-u*0.28:.2f} h{u*0.12:.2f} v{u*0.40:.2f} '
                f'l{-u*0.06:.2f},{u*0.12:.2f} l{-u*0.06:.2f},{-u*0.12:.2f} Z',
                fill=col or C['amber'])
        cv.rect(x - u * 0.06, y - u * 0.28, u * 0.12, u * 0.09, shade(C['red'], 1.05))
        cv.path(f'M{x-u*0.03:.2f},{y+u*0.18:.2f} l{u*0.03:.2f},{u*0.06:.2f} '
                f'l{u*0.03:.2f},{-u*0.06:.2f} Z', fill=C['ink'])
    elif k == 'notebook':
        cv.rect(x - u * 0.22, y - u * 0.28, u * 0.44, u * 0.56, col or C['green'], r=u * 0.02)
        cv.rect(x - u * 0.16, y - u * 0.28, u * 0.38, u * 0.56, C['paper'], r=u * 0.02)
        for i in range(5):
            cv.line(x - u * 0.10, y - u * 0.18 + i * u * 0.09, x + u * 0.16,
                    y - u * 0.18 + i * u * 0.09, C['silver'], sw=u * 0.018)
        for i in range(4):
            cv.circle(x - u * 0.20, y - u * 0.20 + i * u * 0.13, u * 0.022, C['steel'])
    elif k == 'ruler':
        cv.rect(x - u * 0.30, y - u * 0.07, u * 0.60, u * 0.14, col or C['aqua'], r=u * 0.015)
        for i in range(7):
            cv.line(x - u * 0.26 + i * u * 0.085, y - u * 0.07,
                    x - u * 0.26 + i * u * 0.085, y - u * 0.01, C['ink'], sw=u * 0.014)
    elif k == 'rubber':
        cv.rect(x - u * 0.17, y - u * 0.10, u * 0.34, u * 0.20, C['rose'], r=u * 0.025)
        cv.rect(x - u * 0.17, y - u * 0.10, u * 0.34, u * 0.07, shade(C['rose'], 1.10),
                r=u * 0.025)
        cv.rect(x + u * 0.03, y - u * 0.10, u * 0.14, u * 0.20, C['sky'], r=u * 0.025)
    elif k == 'bottle':
        cv.rect(x - u * 0.09, y - u * 0.30, u * 0.18, u * 0.10, shade(C['sky'], 0.86),
                r=u * 0.02)
        cv.path(rr_path(x - u * 0.13, y - u * 0.22, u * 0.26, u * 0.50, 6 * s, 6 * s,
                        14 * s, 14 * s), fill=C['glass'], stroke=C['steel'], sw=u * 0.022)
        cv.path(rr_path(x - u * 0.13, y - u * 0.02, u * 0.26, u * 0.30, 0, 0,
                        14 * s, 14 * s), fill=shade(C['sky'], 1.30))
    elif k == 'chair':
        cv.rect(x - u * 0.20, y - u * 0.30, u * 0.40, u * 0.26, col or C['blue'], r=u * 0.04)
        cv.rect(x - u * 0.24, y - u * 0.04, u * 0.48, u * 0.09, shade(col or C['blue'], 0.88),
                r=u * 0.03)
        for sx in (-1, 1):
            cv.line(x + sx * u * 0.18, y + u * 0.05, x + sx * u * 0.21, y + u * 0.30,
                    C['steel'], sw=u * 0.045)
    elif k == 'desk':
        cv.rect(x - u * 0.34, y - u * 0.12, u * 0.68, u * 0.10, C['wood'], r=u * 0.02)
        cv.rect(x - u * 0.34, y - u * 0.12, u * 0.68, u * 0.04, shade(C['wood'], 1.14),
                r=u * 0.02)
        for sx in (-1, 1):
            cv.line(x + sx * u * 0.27, y - u * 0.02, x + sx * u * 0.27, y + u * 0.30,
                    C['steel'], sw=u * 0.045)
    elif k == 'board':
        cv.rect(x - u * 0.38, y - u * 0.26, u * 0.76, u * 0.52, shade(C['forest'], 0.80),
                r=u * 0.02, stroke=C['wood'], sw=u * 0.035)
        cv.line(x - u * 0.26, y - u * 0.10, x + u * 0.16, y - u * 0.10, C['paper'],
                sw=u * 0.025, opacity=0.9)
        cv.line(x - u * 0.26, y + u * 0.02, x - u * 0.02, y + u * 0.02, C['paper'],
                sw=u * 0.025, opacity=0.9)
    elif k == 'window':
        cv.rect(x - u * 0.28, y - u * 0.26, u * 0.56, u * 0.52, C['glass'],
                stroke=C['steel'], sw=u * 0.04)
        cv.line(x, y - u * 0.26, x, y + u * 0.26, C['steel'], sw=u * 0.04)
        cv.line(x - u * 0.28, y, x + u * 0.28, y, C['steel'], sw=u * 0.04)
    elif k == 'door':
        cv.rect(x - u * 0.20, y - u * 0.32, u * 0.40, u * 0.64, col or C['wood'], r=u * 0.02)
        cv.rect(x - u * 0.13, y - u * 0.26, u * 0.26, u * 0.20, C['glass'], r=u * 0.015)
        cv.circle(x + u * 0.12, y + u * 0.04, u * 0.035, C['amber'])
    elif k == 'apple':
        cv.path(f'M{x:.2f},{y-u*0.16:.2f} C{x-u*0.30:.2f},{y-u*0.34:.2f} '
                f'{x-u*0.30:.2f},{y+u*0.26:.2f} {x:.2f},{y+u*0.24:.2f} '
                f'C{x+u*0.30:.2f},{y+u*0.26:.2f} {x+u*0.30:.2f},{y-u*0.34:.2f} '
                f'{x:.2f},{y-u*0.16:.2f} Z', fill=col or C['red'])
        cv.ellipse(x - u * 0.11, y - u * 0.06, u * 0.08, u * 0.11,
                   shade(col or C['red'], 1.28), opacity=0.55, rot=-20)
        cv.line(x, y - u * 0.17, x + u * 0.03, y - u * 0.31, C['brown'], sw=u * 0.035)
        cv.ellipse(x + u * 0.11, y - u * 0.28, u * 0.10, u * 0.05, C['leaf'], rot=-22)
    elif k == 'orange':
        cv.circle(x, y, u * 0.25, col or C['orange'])
        cv.ellipse(x - u * 0.09, y - u * 0.09, u * 0.09, u * 0.06,
                   shade(col or C['orange'], 1.26), opacity=0.6, rot=-30)
        cv.line(x, y - u * 0.25, x, y - u * 0.33, C['brown'], sw=u * 0.035)
        cv.ellipse(x + u * 0.09, y - u * 0.30, u * 0.09, u * 0.045, C['leaf'], rot=-20)
    elif k == 'umbrella':
        cv.path(f'M{x-u*0.32:.2f},{y-u*0.02:.2f} '
                f'A{u*0.32:.2f},{u*0.30:.2f} 0 0 1 {x+u*0.32:.2f},{y-u*0.02:.2f} Z',
                fill=col or C['indigo'])
        for i, sx in enumerate((-0.32, -0.107, 0.107, 0.32)):
            if i % 2 == 0:
                continue
            cv.path(f'M{x+u*sx:.2f},{y-u*0.02:.2f} '
                    f'A{u*0.107:.2f},{u*0.09:.2f} 0 0 0 {x+u*(sx-0.214):.2f},{y-u*0.02:.2f} Z',
                    fill=shade(col or C['indigo'], 1.24))
        cv.line(x, y - u * 0.30, x, y + u * 0.24, C['brown'], sw=u * 0.040)
        cv.path(f'M{x:.2f},{y+u*0.24:.2f} a{u*0.09:.2f},{u*0.09:.2f} 0 0 1 '
                f'{-u*0.18:.2f},0', stroke=C['brown'], sw=u * 0.040)
    elif k == 'bed':
        cv.rect(x - u * 0.34, y - u * 0.02, u * 0.68, u * 0.20, col or C['wood'], r=u * 0.02)
        cv.rect(x - u * 0.34, y - u * 0.26, u * 0.14, u * 0.26, shade(col or C['wood'], 0.86),
                r=u * 0.02)
        cv.rect(x - u * 0.22, y - u * 0.10, u * 0.54, u * 0.09, C['paper'], r=u * 0.02)
        cv.rect(x - u * 0.20, y - u * 0.16, u * 0.18, u * 0.09, C['cloud'], r=u * 0.02)
        cv.rect(x - u * 0.02, y - u * 0.10, u * 0.34, u * 0.09, C['sky'], r=u * 0.02)
    elif k == 'sofa':
        cv.rect(x - u * 0.34, y - u * 0.18, u * 0.68, u * 0.26, col or C['teal'], r=u * 0.05)
        cv.rect(x - u * 0.34, y - u * 0.30, u * 0.68, u * 0.16, shade(col or C['teal'], 1.12),
                r=u * 0.05)
        for sx in (-1, 1):
            cv.rect(x + sx * u * 0.30 - u * 0.06, y - u * 0.26, u * 0.12, u * 0.30,
                    shade(col or C['teal'], 0.88), r=u * 0.04)
        cv.rect(x - u * 0.30, y + u * 0.08, u * 0.60, u * 0.06, shade(col or C['teal'], 0.76))
    elif k == 'fridge':
        cv.rect(x - u * 0.20, y - u * 0.34, u * 0.40, u * 0.66, C['cloud'], r=u * 0.04,
                stroke=C['silver'], sw=u * 0.02)
        cv.line(x - u * 0.20, y - u * 0.06, x + u * 0.20, y - u * 0.06, C['silver'],
                sw=u * 0.025)
        cv.rect(x + u * 0.10, y - u * 0.26, u * 0.035, u * 0.14, C['steel'], r=u * 0.015)
        cv.rect(x + u * 0.10, y + u * 0.02, u * 0.035, u * 0.14, C['steel'], r=u * 0.015)
    elif k == 'cooker':
        cv.rect(x - u * 0.24, y - u * 0.22, u * 0.48, u * 0.54, C['silver'], r=u * 0.03)
        cv.rect(x - u * 0.24, y - u * 0.26, u * 0.48, u * 0.08, C['steel'], r=u * 0.03)
        for sx in (-1, 1):
            cv.circle(x + sx * u * 0.11, y - u * 0.23, u * 0.055, shade(C['ink'], 1.5))
        cv.rect(x - u * 0.17, y - u * 0.08, u * 0.34, u * 0.26, shade(C['ink'], 1.35),
                r=u * 0.02)
    elif k == 'lamp':
        cv.path(f'M{x-u*0.18:.2f},{y-u*0.06:.2f} L{x-u*0.10:.2f},{y-u*0.28:.2f} '
                f'L{x+u*0.10:.2f},{y-u*0.28:.2f} L{x+u*0.18:.2f},{y-u*0.06:.2f} Z',
                fill=col or C['amber'])
        cv.line(x, y - u * 0.06, x, y + u * 0.24, C['steel'], sw=u * 0.035)
        cv.ellipse(x, y + u * 0.26, u * 0.16, u * 0.05, C['slate'])
    elif k == 'tv':
        cv.rect(x - u * 0.30, y - u * 0.22, u * 0.60, u * 0.38, C['ink'], r=u * 0.025)
        cv.rect(x - u * 0.26, y - u * 0.18, u * 0.52, u * 0.30, C['sky_bg'], r=u * 0.015)
        cv.rect(x - u * 0.05, y + u * 0.16, u * 0.10, u * 0.08, C['slate'])
        cv.rect(x - u * 0.16, y + u * 0.24, u * 0.32, u * 0.04, C['slate'], r=u * 0.015)
    elif k == 'bread':
        cv.path(f'M{x-u*0.26:.2f},{y+u*0.14:.2f} '
                f'C{x-u*0.30:.2f},{y-u*0.16:.2f} {x+u*0.30:.2f},{y-u*0.16:.2f} '
                f'{x+u*0.26:.2f},{y+u*0.14:.2f} Z', fill=C['sand'])
        cv.path(f'M{x-u*0.22:.2f},{y-u*0.02:.2f} '
                f'C{x-u*0.24:.2f},{y-u*0.14:.2f} {x+u*0.24:.2f},{y-u*0.14:.2f} '
                f'{x+u*0.22:.2f},{y-u*0.02:.2f} Z', fill=shade(C['sand'], 1.12))
        cv.rect(x - u * 0.26, y + u * 0.10, u * 0.52, u * 0.05, shade(C['sand'], 0.82))
    elif k == 'milk':
        cv.path(f'M{x-u*0.15:.2f},{y+u*0.26:.2f} L{x-u*0.15:.2f},{y-u*0.12:.2f} '
                f'L{x:.2f},{y-u*0.30:.2f} L{x+u*0.15:.2f},{y-u*0.12:.2f} '
                f'L{x+u*0.15:.2f},{y+u*0.26:.2f} Z', fill=C['paper'],
                stroke=C['silver'], sw=u * 0.022)
        cv.rect(x - u * 0.15, y + u * 0.02, u * 0.30, u * 0.12, C['sky'])
    elif k == 'egg':
        cv.path(f'M{x:.2f},{y-u*0.26:.2f} C{x-u*0.20:.2f},{y-u*0.10:.2f} '
                f'{x-u*0.18:.2f},{y+u*0.24:.2f} {x:.2f},{y+u*0.24:.2f} '
                f'C{x+u*0.18:.2f},{y+u*0.24:.2f} {x+u*0.20:.2f},{y-u*0.10:.2f} '
                f'{x:.2f},{y-u*0.26:.2f} Z', fill=C['cream'], stroke=C['sand'], sw=u * 0.02)
    elif k == 'fish':
        cv.ellipse(x - u * 0.04, y, u * 0.24, u * 0.14, col or C['sky'])
        cv.poly([(x + u * 0.18, y), (x + u * 0.30, y - u * 0.13),
                 (x + u * 0.30, y + u * 0.13)], col or C['sky'])
        cv.circle(x - u * 0.14, y - u * 0.03, u * 0.030, C['ink'])
    elif k == 'cake':
        cv.rect(x - u * 0.24, y - u * 0.06, u * 0.48, u * 0.24, C['sand'], r=u * 0.02)
        cv.path(f'M{x-u*0.24:.2f},{y-u*0.06:.2f} q{u*0.12:.2f},{u*0.10:.2f} '
                f'{u*0.24:.2f},0 q{u*0.12:.2f},{-u*0.10:.2f} {u*0.24:.2f},0 '
                f'l0,{-u*0.08:.2f} l{-u*0.48:.2f},0 Z', fill=C['rose'])
        cv.circle(x, y - u * 0.16, u * 0.05, C['red'])
    elif k == 'coin':
        cv.circle(x, y, u * 0.22, C['amber'], stroke=shade(C['amber'], 0.72), sw=u * 0.03)
        cv.circle(x, y, u * 0.13, shade(C['amber'], 1.14))
    elif k == 'bike':
        for sx in (-1, 1):
            cv.circle(x + sx * u * 0.22, y + u * 0.10, u * 0.15, 'none',
                      stroke=C['ink'], sw=u * 0.035)
        cv.path(f'M{x-u*0.22:.2f},{y+u*0.10:.2f} L{x-u*0.04:.2f},{y-u*0.10:.2f} '
                f'L{x+u*0.14:.2f},{y-u*0.10:.2f} L{x+u*0.22:.2f},{y+u*0.10:.2f} '
                f'M{x-u*0.04:.2f},{y-u*0.10:.2f} L{x+u*0.05:.2f},{y+u*0.10:.2f}',
                stroke=col or C['red'], sw=u * 0.035)
        cv.line(x + u * 0.14, y - u * 0.10, x + u * 0.20, y - u * 0.18, C['ink'], sw=u * 0.03)
        cv.rect(x - u * 0.10, y - u * 0.15, u * 0.14, u * 0.05, C['ink'], r=u * 0.02)
    elif k == 'guitar':
        cv.ellipse(x - u * 0.04, y + u * 0.10, u * 0.20, u * 0.17, col or C['wood'])
        cv.ellipse(x + u * 0.04, y - u * 0.08, u * 0.14, u * 0.12, col or C['wood'])
        cv.circle(x - u * 0.02, y + u * 0.07, u * 0.055, shade(C['ink'], 1.3))
        cv.rect(x + u * 0.08, y - u * 0.32, u * 0.07, u * 0.24, shade(C['wood'], 0.74))
        cv.rect(x + u * 0.06, y - u * 0.36, u * 0.11, u * 0.06, C['ink'], r=u * 0.015)
    elif k == 'car':
        cv.path(rr_path(x - u * 0.34, y - u * 0.06, u * 0.68, u * 0.22, 8 * s, 8 * s,
                        6 * s, 6 * s), fill=col or C['blue'])
        cv.path(f'M{x-u*0.20:.2f},{y-u*0.06:.2f} L{x-u*0.12:.2f},{y-u*0.24:.2f} '
                f'L{x+u*0.14:.2f},{y-u*0.24:.2f} L{x+u*0.22:.2f},{y-u*0.06:.2f} Z',
                fill=shade(col or C['blue'], 1.10))
        cv.rect(x - u * 0.11, y - u * 0.21, u * 0.11, u * 0.14, C['glass'], r=u * 0.02)
        cv.rect(x + u * 0.03, y - u * 0.21, u * 0.11, u * 0.14, C['glass'], r=u * 0.02)
        for sx in (-1, 1):
            cv.circle(x + sx * u * 0.20, y + u * 0.16, u * 0.09, C['ink'])
            cv.circle(x + sx * u * 0.20, y + u * 0.16, u * 0.04, C['silver'])
    elif k == 'suitcase':
        cv.rect(x - u * 0.24, y - u * 0.14, u * 0.48, u * 0.36, col or C['brown'], r=u * 0.03)
        cv.rect(x - u * 0.24, y - u * 0.02, u * 0.48, u * 0.05, shade(col or C['brown'], 0.76))
        cv.path(arc(x, y - u * 0.15, u * 0.11, 195, 345), stroke=shade(col or C['brown'], 0.72),
                sw=u * 0.04)
    elif k == 'sun':
        cv.circle(x, y, u * 0.17, C['amber'])
        for a in range(0, 360, 45):
            import math as _m
            cv.line(x + u * 0.23 * _m.cos(_m.radians(a)), y + u * 0.23 * _m.sin(_m.radians(a)),
                    x + u * 0.31 * _m.cos(_m.radians(a)), y + u * 0.31 * _m.sin(_m.radians(a)),
                    C['amber'], sw=u * 0.035)
    elif k == 'tree':
        cv.rect(x - u * 0.05, y, u * 0.10, u * 0.28, C['brown'])
        cv.circle(x, y - u * 0.10, u * 0.20, C['leaf'])
        cv.circle(x - u * 0.15, y + u * 0.01, u * 0.14, C['leaf_dk'])
        cv.circle(x + u * 0.15, y + u * 0.01, u * 0.14, C['leaf'])
    elif k == 'shirt':
        cv.path(f'M{x-u*0.26:.2f},{y-u*0.18:.2f} L{x-u*0.10:.2f},{y-u*0.24:.2f} '
                f'L{x:.2f},{y-u*0.14:.2f} L{x+u*0.10:.2f},{y-u*0.24:.2f} '
                f'L{x+u*0.26:.2f},{y-u*0.18:.2f} L{x+u*0.20:.2f},{y+u*0.24:.2f} '
                f'L{x-u*0.20:.2f},{y+u*0.24:.2f} Z', fill=col or C['sky'])
        cv.line(x, y - u * 0.12, x, y + u * 0.22, shade(col or C['sky'], 0.80),
                sw=u * 0.022)
    elif k == 'coat':
        cv.path(f'M{x-u*0.28:.2f},{y-u*0.20:.2f} L{x-u*0.08:.2f},{y-u*0.26:.2f} '
                f'L{x+u*0.08:.2f},{y-u*0.26:.2f} L{x+u*0.28:.2f},{y-u*0.20:.2f} '
                f'L{x+u*0.24:.2f},{y+u*0.28:.2f} L{x-u*0.24:.2f},{y+u*0.28:.2f} Z',
                fill=col or C['brown'])
        cv.line(x, y - u * 0.24, x, y + u * 0.28, shade(col or C['brown'], 0.76),
                sw=u * 0.026)
        for i in range(3):
            cv.circle(x - u * 0.05, y - u * 0.10 + i * u * 0.13, u * 0.025,
                      C['amber'])
    elif k == 'shoes':
        for sx in (-1, 1):
            cv.path(f'M{x+sx*u*0.14-u*0.11:.2f},{y+u*0.10:.2f} '
                    f'q0,{-u*0.16:.2f} {u*0.09:.2f},{-u*0.16:.2f} '
                    f'l{u*0.04:.2f},{u*0.10:.2f} l{u*0.09:.2f},{u*0.04:.2f} '
                    f'q{u*0.04:.2f},{u*0.03:.2f} 0,{u*0.02:.2f} Z',
                    fill=col or C['ink'])
    elif k == 'hat':
        cv.ellipse(x, y + u * 0.10, u * 0.30, u * 0.08, col or C['red'])
        cv.path(f'M{x-u*0.17:.2f},{y+u*0.10:.2f} q0,{-u*0.28:.2f} '
                f'{u*0.17:.2f},{-u*0.28:.2f} q{u*0.17:.2f},0 {u*0.17:.2f},{u*0.28:.2f} Z',
                fill=col or C['red'])
        cv.rect(x - u * 0.17, y + u * 0.02, u * 0.34, u * 0.06,
                shade(col or C['red'], 0.74))
    elif k == 'dress':
        cv.path(f'M{x-u*0.12:.2f},{y-u*0.22:.2f} L{x+u*0.12:.2f},{y-u*0.22:.2f} '
                f'L{x+u*0.10:.2f},{y-u*0.04:.2f} L{x+u*0.26:.2f},{y+u*0.26:.2f} '
                f'L{x-u*0.26:.2f},{y+u*0.26:.2f} L{x-u*0.10:.2f},{y-u*0.04:.2f} Z',
                fill=col or C['pink'])
    elif k == 'trousers':
        cv.path(f'M{x-u*0.18:.2f},{y-u*0.22:.2f} L{x+u*0.18:.2f},{y-u*0.22:.2f} '
                f'L{x+u*0.16:.2f},{y+u*0.26:.2f} L{x+u*0.03:.2f},{y+u*0.26:.2f} '
                f'L{x:.2f},{y-u*0.02:.2f} L{x-u*0.03:.2f},{y+u*0.26:.2f} '
                f'L{x-u*0.16:.2f},{y+u*0.26:.2f} Z', fill=col or C['blue'])
    elif k == 'plane':
        cv.path(f'M{x-u*0.30:.2f},{y:.2f} L{x+u*0.14:.2f},{y-u*0.07:.2f} '
                f'L{x+u*0.30:.2f},{y:.2f} L{x+u*0.14:.2f},{y+u*0.07:.2f} Z',
                fill=col or C['silver'])
        cv.poly([(x - u * 0.04, y - u * 0.04), (x - u * 0.16, y - u * 0.24),
                 (x - u * 0.24, y - u * 0.22), (x - u * 0.16, y - u * 0.02)],
                shade(col or C['silver'], 0.84))
        cv.poly([(x - u * 0.04, y + u * 0.04), (x - u * 0.16, y + u * 0.24),
                 (x - u * 0.24, y + u * 0.22), (x - u * 0.16, y + u * 0.02)],
                shade(col or C['silver'], 0.84))
    elif k == 'train':
        cv.path(rr_path(x - u * 0.30, y - u * 0.18, u * 0.60, u * 0.34, 14 * s,
                        14 * s, 4 * s, 4 * s), fill=col or C['green'])
        cv.rect(x - u * 0.24, y - u * 0.12, u * 0.18, u * 0.14, C['glass'], r=u * 0.02)
        cv.rect(x + u * 0.02, y - u * 0.12, u * 0.18, u * 0.14, C['glass'], r=u * 0.02)
        cv.rect(x - u * 0.30, y + u * 0.14, u * 0.60, u * 0.06, C['ink'])
        for sx in (-0.18, 0.18):
            cv.circle(x + u * sx, y + u * 0.22, u * 0.06, C['ink'])
    elif k == 'boat':
        cv.path(f'M{x-u*0.30:.2f},{y+u*0.10:.2f} L{x+u*0.30:.2f},{y+u*0.10:.2f} '
                f'L{x+u*0.20:.2f},{y+u*0.24:.2f} L{x-u*0.20:.2f},{y+u*0.24:.2f} Z',
                fill=col or C['red'])
        cv.line(x, y + u * 0.08, x, y - u * 0.28, C['brown'], sw=u * 0.030)
        cv.poly([(x + u * 0.02, y - u * 0.26), (x + u * 0.24, y + u * 0.04),
                 (x + u * 0.02, y + u * 0.04)], C['paper'])
    elif k == 'passport':
        cv.rect(x - u * 0.17, y - u * 0.24, u * 0.34, u * 0.48, deep(C['navy']),
                r=u * 0.025)
        cv.circle(x, y - u * 0.04, u * 0.09, 'none', stroke=C['amber'], sw=u * 0.022)
        cv.rect(x - u * 0.09, y + u * 0.10, u * 0.18, u * 0.030, C['amber'])
    elif k == 'camera':
        cv.rect(x - u * 0.26, y - u * 0.16, u * 0.52, u * 0.34, shade(C['ink'], 1.5),
                r=u * 0.04)
        cv.rect(x - u * 0.10, y - u * 0.24, u * 0.20, u * 0.09, shade(C['ink'], 1.3),
                r=u * 0.02)
        cv.circle(x, y + u * 0.01, u * 0.13, C['glass'], stroke=C['ink'], sw=u * 0.025)
        cv.circle(x + u * 0.18, y - u * 0.10, u * 0.03, C['amber'])
    elif k == 'pill':
        cv.rect(x - u * 0.24, y - u * 0.10, u * 0.48, u * 0.20, C['paper'], r=u * 0.10,
                stroke=C['silver'], sw=u * 0.022)
        cv.path(f'M{x:.2f},{y-u*0.10:.2f} v{u*0.20:.2f}', stroke=C['silver'],
                sw=u * 0.022)
        cv.rect(x - u * 0.24, y - u * 0.10, u * 0.24, u * 0.20, shade(C['red'], 1.30),
                r=u * 0.10)
    elif k == 'mountain':
        cv.poly([(x - u * 0.32, y + u * 0.22), (x - u * 0.06, y - u * 0.26),
                 (x + u * 0.14, y + u * 0.22)], C['slate'])
        cv.poly([(x - u * 0.12, y + u * 0.22), (x + u * 0.12, y - u * 0.16),
                 (x + u * 0.32, y + u * 0.22)], shade(C['slate'], 1.18))
        cv.poly([(x - u * 0.06, y - u * 0.26), (x - u * 0.15, y - u * 0.10),
                 (x + u * 0.03, y - u * 0.10)], C['paper'])
    elif k == 'envelope':
        cv.rect(x - u * 0.28, y - u * 0.18, u * 0.56, u * 0.36, C['paper'], r=u * 0.02,
                stroke=C['silver'], sw=u * 0.022)
        cv.path(f'M{x-u*0.28:.2f},{y-u*0.18:.2f} L{x:.2f},{y+u*0.04:.2f} '
                f'L{x+u*0.28:.2f},{y-u*0.18:.2f}', stroke=C['steel'], sw=u * 0.025)
        cv.rect(x + u * 0.12, y - u * 0.15, u * 0.12, u * 0.09, shade(C['red'], 1.25))
    elif k == 'card':
        cv.rect(x - u * 0.30, y - u * 0.19, u * 0.60, u * 0.38, deep(C['navy']),
                r=u * 0.04)
        cv.rect(x - u * 0.30, y - u * 0.09, u * 0.60, u * 0.07, deep(C['ink']))
        cv.rect(x - u * 0.22, y + u * 0.04, u * 0.17, u * 0.11,
                shade(C['amber'], 1.10), r=u * 0.015)
        cv.rect(x + u * 0.02, y + u * 0.09, u * 0.24, u * 0.035, C['cloud'])
    elif k == 'note':
        cv.rect(x - u * 0.31, y - u * 0.16, u * 0.62, u * 0.32,
                shade(C['green'], 1.42), r=u * 0.02, stroke=deep(C['green']),
                sw=u * 0.020)
        cv.circle(x, y, u * 0.09, 'none', stroke=deep(C['green']), sw=u * 0.022)
        cv.rect(x - u * 0.26, y - u * 0.11, u * 0.07, u * 0.07, deep(C['green']))
        cv.rect(x + u * 0.19, y + u * 0.04, u * 0.07, u * 0.07, deep(C['green']))
    elif k == 'ticket':
        cv.rect(x - u * 0.30, y - u * 0.15, u * 0.60, u * 0.30,
                shade(C['amber'], 1.30), r=u * 0.03, stroke=deep(C['amber']),
                sw=u * 0.020)
        cv.circle(x + u * 0.06, y - u * 0.15, u * 0.05, C['paper'])
        cv.circle(x + u * 0.06, y + u * 0.15, u * 0.05, C['paper'])
        for i in range(3):
            cv.rect(x - u * 0.24, y - u * 0.07 + i * u * 0.07, u * 0.22,
                    u * 0.030, deep(C['amber']))
    elif k == 'wallet':
        cv.rect(x - u * 0.28, y - u * 0.19, u * 0.56, u * 0.38, C['brown'],
                r=u * 0.05)
        cv.rect(x - u * 0.28, y - u * 0.02, u * 0.56, u * 0.08,
                shade(C['brown'], 0.86))
        cv.rect(x - u * 0.10, y - u * 0.25, u * 0.26, u * 0.09,
                shade(C['green'], 1.42), r=u * 0.015,
                stroke=deep(C['green']), sw=u * 0.016)
    elif k == 'box':
        cv.rect(x - u * 0.28, y - u * 0.18, u * 0.56, u * 0.36,
                shade(C['sand'], 0.96), r=u * 0.02, stroke=C['wood_dk'],
                sw=u * 0.020)
        cv.rect(x - u * 0.28, y - u * 0.18, u * 0.56, u * 0.09,
                shade(C['sand'], 0.88))
        cv.rect(x - u * 0.05, y - u * 0.18, u * 0.10, u * 0.36,
                shade(C['wood'], 1.18))
    else:
        raise KeyError(f'no prop {name!r}')


# --------------------------------------------------------------- places

def sky_ground(cv: Canvas, x, y, w, h, sky=None, ground=None, horizon=0.62):
    cv.rect(x, y, w, h * horizon, sky or C['sky_bg'])
    cv.rect(x, y + h * horizon, w, h * (1 - horizon), ground or C['ground'])
    cv.rect(x, y + h * horizon - 3, w, 6, shade(ground or C['ground'], 0.90))
    for cx, cy, s in ((x + w * 0.16, y + h * 0.14, 1.0), (x + w * 0.62, y + h * 0.09, 0.72),
                      (x + w * 0.86, y + h * 0.19, 0.55)):
        for dx, dy, r in ((0, 0, 30), (26, 6, 22), (-25, 7, 19), (10, -12, 20)):
            cv.ellipse(cx + dx * s, cy + dy * s, r * s * 1.25, r * s * 0.82, '#FFFFFF',
                       opacity=0.88)


def shopfront(cv: Canvas, x, y, w, h, name, col, awning=True, sign_size=30,
              door=True, window_items=None):
    """A shop: wall, window, door, awning, a sign the learner can read."""
    cv.rect(x, y, w, h, C['wall'])
    bar = deep(col)
    cv.rect(x, y, w, h * 0.17, bar)
    cv.rect(x, y + h * 0.17, w, 5, shade(bar, 0.72))
    cv.text(name, x + w / 2, y + h * 0.115, sign_size, fill='#FFFFFF',
            weight='Bold', anchor='middle', bg=bar)
    wx, wy, ww, wh = x + w * 0.06, y + h * 0.28, w * (0.56 if door else 0.88), h * 0.52
    cv.rect(wx, wy, ww, wh, C['glass'], stroke=C['steel'], sw=4)
    cv.path(f'M{wx+ww*0.08:.2f},{wy+wh:.2f} L{wx+ww*0.46:.2f},{wy:.2f} '
            f'L{wx+ww*0.62:.2f},{wy:.2f} L{wx+ww*0.24:.2f},{wy+wh:.2f} Z',
            fill='#FFFFFF', opacity=0.33)
    if window_items:
        n = len(window_items)
        for i, it in enumerate(window_items):
            prop(cv, it, wx + ww * (i + 0.5) / n, wy + wh * 0.62, s=w / 420)
    if door:
        dx, dw = x + w * 0.68, w * 0.26
        cv.rect(dx, y + h * 0.28, dw, h * 0.72, shade(col, 0.80), r=6)
        cv.rect(dx + dw * 0.12, y + h * 0.33, dw * 0.76, h * 0.30, C['glass'])
        cv.circle(dx + dw * 0.84, y + h * 0.66, 6, C['amber'])
    if awning:
        ax, aw = x + w * 0.04, w * (0.60 if door else 0.92)
        for i in range(6):
            sx = ax + aw * i / 6
            cv.path(f'M{sx:.2f},{y+h*0.21:.2f} L{sx-6:.2f},{y+h*0.33:.2f} '
                    f'q{aw/12:.2f},10 {aw/6+12:.2f},0 L{sx+aw/6:.2f},{y+h*0.21:.2f} Z',
                    fill=col if i % 2 == 0 else '#FFFFFF')
        cv.rect(ax - 6, y + h * 0.195, aw + 12, 7, shade(col, 0.70), r=3)


def counter(cv: Canvas, x, y, w, h, top=C['wood'], front=None):
    front = front or shade(top, 0.82)
    cv.rect(x, y + h * 0.13, w, h * 0.87, front)
    cv.rect(x, y, w, h * 0.16, top, r=4)
    cv.rect(x, y, w, h * 0.06, shade(top, 1.14), r=4)
    cv.rect(x, y + h * 0.13, w, 5, shade(top, 0.66))
    for i in range(1, 4):
        cv.line(x + w * i / 4, y + h * 0.20, x + w * i / 4, y + h, shade(front, 0.90), sw=3)


def bus(cv: Canvas, x, y, w, h, col=None, route='12'):
    col = col or C['red']
    cv.path(rr_path(x, y, w, h * 0.80, 26, 26, 10, 10), fill=col)
    cv.path(rr_path(x, y, w, h * 0.30, 26, 26, 0, 0), fill=shade(col, 1.12))
    cv.rect(x + w * 0.04, y + h * 0.10, w * 0.30, h * 0.012, shade(col, 0.70))
    for i in range(4):
        cv.rect(x + w * (0.07 + i * 0.21), y + h * 0.22, w * 0.15, h * 0.28, C['glass'],
                r=5, stroke=shade(col, 0.76), sw=3)
    cv.rect(x + w * 0.06, y + h * 0.05, w * 0.34, h * 0.13, C['ink'], r=5)
    cv.text(route, x + w * 0.23, y + h * 0.155, h * 0.12, fill=C['amber'], weight='Bold',
            anchor='middle', bg=C['ink'])
    cv.rect(x, y + h * 0.70, w, h * 0.10, shade(col, 0.74))
    for cx in (x + w * 0.20, x + w * 0.80):
        cv.circle(cx, y + h * 0.84, h * 0.15, C['ink'])
        cv.circle(cx, y + h * 0.84, h * 0.075, C['silver'])


def bus_stop(cv: Canvas, x, y, h, label='Hill Road'):
    cv.line(x, y, x, y - h, C['steel'], sw=10)
    cv.rect(x - 52, y - h - 46, 104, 50, deep(C['blue']), r=8)
    cv.text(label, x, y - h - 16, 20, fill='#FFFFFF', weight='Bold', anchor='middle',
            bg=deep(C['blue']))
    cv.circle(x, y - h - 62, 15, C['amber'], stroke=C['blue'], sw=5)


def doorway(cv: Canvas, x, y, w, h, col=None, number=None):
    col = col or C['green']
    cv.rect(x - 10, y - h - 12, w + 20, h + 12, shade(C['wall'], 0.94), r=4)
    cv.rect(x, y - h, w, h, col, r=5)
    cv.rect(x + w * 0.10, y - h * 0.92, w * 0.80, h * 0.34, C['glass'], r=4)
    cv.circle(x + w * 0.84, y - h * 0.46, 7, C['amber'])
    if number:
        cv.text(str(number), x + w * 0.50, y - h * 0.62, 26, fill='#FFFFFF',
                weight='Bold', anchor='middle', bg=col)


def table_scene(cv: Canvas, x, y, w, h, col=None):
    col = col or C['wood']
    cv.rect(x, y, w, h * 0.17, col, r=6)
    cv.rect(x, y, w, h * 0.07, shade(col, 1.14), r=6)
    for lx in (x + w * 0.08, x + w * 0.88):
        cv.rect(lx, y + h * 0.17, w * 0.045, h * 0.83, shade(col, 0.82))


def window_wall(cv: Canvas, x, y, w, h, panes=3):
    cv.rect(x, y, w, h, C['wall'])
    pw = w / panes
    for i in range(panes):
        cv.rect(x + i * pw + pw * 0.12, y + h * 0.16, pw * 0.76, h * 0.52, C['glass'],
                stroke=C['steel'], sw=4)
        cv.line(x + i * pw + pw * 0.50, y + h * 0.16, x + i * pw + pw * 0.50, y + h * 0.68,
                C['steel'], sw=4)


def classroom(cv: Canvas, x, y, w, h):
    """A room with a board, a window and a clock. Where Unit 2 happens."""
    cv.rect(x, y, w, h * 0.74, C['wall'])
    cv.rect(x, y + h * 0.74, w, h * 0.26, C['tile'])
    cv.rect(x, y + h * 0.74 - 5, w, 10, shade(C['tile'], 0.84))
    # board
    bw, bh = w * 0.34, h * 0.36
    bx, by = x + w * 0.08, y + h * 0.16
    cv.rect(bx - 8, by - 8, bw + 16, bh + 16, C['wood'], r=6)
    cv.rect(bx, by, bw, bh, shade(C['forest'], 0.78), r=3)
    cv.line(bx + bw * 0.10, by + bh * 0.30, bx + bw * 0.74, by + bh * 0.30,
            C['paper'], sw=5, opacity=0.85)
    cv.line(bx + bw * 0.10, by + bh * 0.52, bx + bw * 0.52, by + bh * 0.52,
            C['paper'], sw=5, opacity=0.85)
    cv.rect(bx - 8, by + bh + 8, bw + 16, 12, shade(C['wood'], 0.86), r=4)
    # window
    wx, wy, ww, wh = x + w * 0.62, y + h * 0.14, w * 0.26, h * 0.32
    cv.rect(wx, wy, ww, wh, C['sky_bg'], stroke=C['steel'], sw=6)
    cv.line(wx + ww / 2, wy, wx + ww / 2, wy + wh, C['steel'], sw=6)
    cv.line(wx, wy + wh / 2, wx + ww, wy + wh / 2, C['steel'], sw=6)
    cv.ellipse(wx + ww * 0.28, wy + wh * 0.26, ww * 0.16, wh * 0.10, '#FFFFFF', opacity=0.9)
    # clock
    prop(cv, 'clock', x + w * 0.52, y + h * 0.17, s=w / 540)


def chair_back(cv: Canvas, x, seat_y, w, h, col=None):
    """The back of a chair, drawn BEHIND a seated person.

    A seated figure needs something to be sitting on that the reader can
    see. Thin chair legs peeping out beside the body do not do it.
    """
    col = col or C['blue']
    cv.rect(x - w * 0.50, seat_y - h, w, h * 0.78, shade(col, 0.92), r=w * 0.10)
    cv.rect(x - w * 0.50, seat_y - h, w, h * 0.26, shade(col, 1.10), r=w * 0.10)
    for sx in (-1, 1):
        cv.line(x + sx * w * 0.40, seat_y - h * 0.26, x + sx * w * 0.40, seat_y,
                shade(col, 0.80), sw=w * 0.085)
    cv.rect(x - w * 0.56, seat_y, w * 1.12, h * 0.10, shade(col, 0.84), r=w * 0.05)


def desk_run(cv: Canvas, x, y, w, floor_y, top=None):
    """A classroom desk with a SOLID front, like a real one.

    An open table shows the legs of whoever is behind it, and a straight
    vertical leg under a see-through table reads as standing. The modesty
    panel is not decoration: it is what makes the figure read as seated.
    """
    top = top or C['wood']
    front = shade(top, 0.86)
    d = floor_y - y
    # A shallow modesty panel, not a wall to the floor. The first version
    # boxed the desk in completely and left nothing of the students showing
    # but their heads. The bent legs read as seated on their own, so the
    # desk's job is to be a desk, not to hide the problem.
    cv.rect(x + w * 0.02, y + d * 0.16, w * 0.96, d * 0.20, front)
    cv.rect(x + w * 0.02, y + d * 0.34, w * 0.96, 5, shade(top, 0.70))
    for lx in (x + w * 0.03, x + w * 0.93):
        cv.rect(lx, y + d * 0.16, w * 0.04, d * 0.84, shade(top, 0.78))
        cv.rect(lx, floor_y - 7, w * 0.04, 7, shade(top, 0.62))
    cv.rect(x, y, w, (floor_y - y) * 0.17, top, r=5)
    cv.rect(x, y, w, (floor_y - y) * 0.07, shade(top, 1.14), r=5)
    cv.rect(x, y + (floor_y - y) * 0.15, w, 4, shade(top, 0.70))
