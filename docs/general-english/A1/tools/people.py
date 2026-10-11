"""People.

A2 drew every character as the same grey pill with a circle on top. Amina,
Maya, Tomas and Dani were visually identical, so the cast did no work at all:
a learner could not tell who was who, and a recurring character you cannot
recognise is not a recurring character.

The evidence says a face on the page is worth very little on its own --
Mayer's image principle is a median d of about 0.2 -- while the personalization
principle, a named person addressing you, is one of the strongest effects in
the whole multimedia literature at about d = 0.79. The conclusion for a
coursebook is not "draw more faces". It is: draw named people DOING the thing
the sentence describes, and make them recognisable at one inch tall.

Recognisable at one inch is a hard constraint, and it is met by three things,
in this order of strength:

    1. silhouette   -- hair shape and garment shape, readable in black
    2. colour       -- one signature garment colour per character
    3. prop         -- the thing this person always has

The face is fourth. It carries expression, not identity.

A person is assembled from parts, every one of which is shaded: a lighter
face and a darker edge, because a flat drawing throws away the luminance and
texture cues that make photographs easier to recognise than line art.
"""
from __future__ import annotations

import math
from dataclasses import dataclass, field

from draw import C, Canvas, arc, rr_path, shade

# ----------------------------------------------------------------- the cast


@dataclass
class Person:
    id: str
    name: str
    skin: str = 'skin3'
    hair: str = 'short'            # style
    hair_col: str = 'hair_dark'
    top: str = 'blue'              # signature garment colour
    bottom: str = 'slate'
    garment: str = 'tee'           # tee | shirt | apron | jacket | tunic | overall | cardigan | uniform
    accessory: str = ''            # glasses | lanyard | earrings | beard | cap | scarf
    build: float = 1.0             # 0.9 slight .. 1.15 broad
    height: float = 1.0            # relative height multiplier
    prop: str = ''                 # the thing this person always carries


# ------------------------------------------------------------------ drawing

def _limb(cv, pts, col, w, cap='round'):
    d = 'M' + ' L'.join(f'{x:.2f},{y:.2f}' for x, y in pts)
    cv.path(d, stroke=shade(col, 0.78), sw=w * 1.22, cap=cap)
    cv.path(d, stroke=col, sw=w, cap=cap)


# Joint offsets from the shoulder, in units of H, already signed:
# la = the arm on our left (negative x), ra = the arm on our right (positive x).
# Legs are offsets from the hip, same convention. No sign arithmetic anywhere.
POSES = {
    'stand':   dict(la=[(-0.020, 0.112), (-0.034, 0.228)], ra=[(0.020, 0.112), (0.034, 0.228)],
                    ll=[(-0.008, 0.225), (-0.014, 0.452)], rl=[(0.008, 0.225), (0.014, 0.452)]),
    'wave':    dict(la=[(-0.020, 0.112), (-0.034, 0.228)], ra=[(0.050, 0.050), (0.092, -0.080)],
                    ll=[(-0.008, 0.225), (-0.014, 0.452)], rl=[(0.008, 0.225), (0.014, 0.452)]),
    'point':   dict(la=[(-0.020, 0.112), (-0.034, 0.228)], ra=[(0.068, 0.078), (0.162, 0.040)],
                    ll=[(-0.008, 0.225), (-0.014, 0.452)], rl=[(0.008, 0.225), (0.014, 0.452)]),
    'hold':    dict(la=[(-0.034, 0.100), (0.026, 0.182)], ra=[(0.034, 0.100), (-0.026, 0.182)],
                    ll=[(-0.008, 0.225), (-0.014, 0.452)], rl=[(0.008, 0.225), (0.014, 0.452)]),
    'offer':   dict(la=[(-0.020, 0.112), (-0.034, 0.228)], ra=[(0.058, 0.090), (0.132, 0.126)],
                    ll=[(-0.008, 0.225), (-0.014, 0.452)], rl=[(0.008, 0.225), (0.014, 0.452)]),
    'walk':    dict(la=[(-0.036, 0.100), (-0.014, 0.208)], ra=[(0.038, 0.100), (0.064, 0.204)],
                    ll=[(-0.042, 0.210), (-0.072, 0.430)], rl=[(0.040, 0.212), (0.064, 0.436)]),
    # Seated. The first attempt shortened the leg and left it vertical,
    # which does not read as sitting at all -- it reads as a short person
    # standing behind the furniture, which is exactly what a reader said.
    # What signals sitting is the BEND: a thigh going forward to the knee
    # and a shin dropping from it. An L, not a line.
    'sit':     dict(la=[(-0.030, 0.100), (-0.014, 0.196)], ra=[(0.030, 0.100), (0.014, 0.196)],
                    ll=[(0.088, 0.050), (0.112, 0.268)], rl=[(0.126, 0.044), (0.152, 0.262)]),
    # Seated at a desk: the bent leg of 'sit', plus forearms resting on the
    # surface. Hands on the desk are the third sitting cue after the bend and
    # the chair, and the cheapest one -- without it the arms hang into a lap
    # the reader cannot see.
    'at_desk': dict(la=[(-0.052, 0.058), (-0.082, 0.086)], ra=[(0.052, 0.058), (0.082, 0.086)],
                    ll=[(0.088, 0.050), (0.112, 0.268)], rl=[(0.126, 0.044), (0.152, 0.262)]),
    'sit_l':   dict(la=[(-0.030, 0.100), (-0.014, 0.196)], ra=[(0.030, 0.100), (0.014, 0.196)],
                    ll=[(-0.126, 0.044), (-0.152, 0.262)], rl=[(-0.088, 0.050), (-0.112, 0.268)]),
    'carry':   dict(la=[(-0.028, 0.118), (-0.044, 0.244)], ra=[(0.022, 0.112), (0.036, 0.228)],
                    ll=[(-0.008, 0.225), (-0.014, 0.452)], rl=[(0.008, 0.225), (0.014, 0.452)]),
    'think':   dict(la=[(-0.020, 0.112), (-0.034, 0.228)], ra=[(0.078, 0.068), (0.026, -0.038)],
                    ll=[(-0.008, 0.225), (-0.014, 0.452)], rl=[(0.008, 0.225), (0.014, 0.452)]),
    'reach':   dict(la=[(-0.020, 0.112), (-0.034, 0.228)], ra=[(0.072, 0.038), (0.146, -0.048)],
                    ll=[(-0.008, 0.225), (-0.014, 0.452)], rl=[(0.008, 0.225), (0.014, 0.452)]),
    'both_up': dict(la=[(-0.058, 0.040), (-0.096, -0.086)], ra=[(0.058, 0.040), (0.096, -0.086)],
                    ll=[(-0.008, 0.225), (-0.014, 0.452)], rl=[(0.008, 0.225), (0.014, 0.452)]),
    'write':   dict(la=[(-0.034, 0.100), (0.014, 0.176)], ra=[(0.046, 0.094), (0.072, 0.168)],
                    ll=[(0.088, 0.050), (0.112, 0.268)], rl=[(0.126, 0.044), (0.152, 0.262)]),
}


def _hair_back(cv, p, cx, cy, rx, ry):
    """Everything that sits BEHIND the head: puffs, long locks, a headscarf."""
    s, col = p.hair, C[p.hair_col]
    dk, lt = shade(col, 0.80), shade(col, 1.16)

    if s == 'hijab':
        hc = C[p.scarf] if getattr(p, 'scarf', None) else C['teal']
        cv.path(f'M{cx-rx*1.34:.2f},{cy+ry*0.30:.2f} '
                f'C{cx-rx*1.42:.2f},{cy-ry*1.42:.2f} {cx+rx*1.42:.2f},{cy-ry*1.42:.2f} '
                f'{cx+rx*1.34:.2f},{cy+ry*0.30:.2f} '
                f'C{cx+rx*1.40:.2f},{cy+ry*1.70:.2f} {cx+rx*0.55:.2f},{cy+ry*2.05:.2f} '
                f'{cx:.2f},{cy+ry*2.05:.2f} '
                f'C{cx-rx*0.55:.2f},{cy+ry*2.05:.2f} {cx-rx*1.40:.2f},{cy+ry*1.70:.2f} '
                f'{cx-rx*1.34:.2f},{cy+ry*0.30:.2f} Z', fill=hc)
        cv.path(f'M{cx-rx*1.28:.2f},{cy-ry*0.30:.2f} '
                f'C{cx-rx*1.12:.2f},{cy-ry*1.22:.2f} {cx+rx*0.25:.2f},{cy-ry*1.36:.2f} '
                f'{cx+rx*0.80:.2f},{cy-ry*1.02:.2f}', stroke=shade(hc, 1.18), sw=rx * 0.20)
        return
    if s == 'turban':
        return
    if s == 'cap':
        return
    if s == 'afro':
        # Nothing below the jaw. The first version ran the puff all the way
        # round, so the bottom circles sat under the chin and Omar appeared
        # to have a beard in every figure he was in.
        for a in range(0, 360, 22):
            if 48 < (a % 360) < 132:
                continue
            cv.circle(cx + rx * 1.28 * math.cos(math.radians(a)),
                      cy - ry * 0.34 + ry * 1.10 * math.sin(math.radians(a)),
                      rx * 0.38, col)
        cv.ellipse(cx, cy - ry * 0.34, rx * 1.26, ry * 1.10, col)
        cv.ellipse(cx - rx * 0.70, cy - ry * 1.00, rx * 0.42, ry * 0.26, lt,
                   opacity=0.40, rot=-24)
        return
    if s == 'curly':
        for ax, ay, rr in [(-1.16, -0.20, .44), (-0.92, -0.92, .46), (-0.20, -1.22, .48),
                           (0.52, -1.08, .46), (1.06, -0.50, .44), (1.20, 0.18, .40),
                           (-1.24, 0.34, .38)]:
            cv.circle(cx + rx * ax, cy + ry * ay, rx * rr, col)
        cv.ellipse(cx, cy - ry * 0.24, rx * 1.16, ry * 1.04, col)
        cv.circle(cx - rx * 0.74, cy - ry * 0.86, rx * 0.20, lt, opacity=0.45)
        return
    if s in ('long', 'ponytail', 'bob'):
        drop = {'long': 2.05, 'ponytail': 1.10, 'bob': 1.30}[s]
        for sgn in (-1, 1):
            cv.path(f'M{cx+sgn*rx*1.16:.2f},{cy-ry*0.25:.2f} '
                    f'C{cx+sgn*rx*1.30:.2f},{cy+ry*drop:.2f} '
                    f'{cx+sgn*rx*0.92:.2f},{cy+ry*(drop+0.26):.2f} '
                    f'{cx+sgn*rx*0.60:.2f},{cy+ry*(drop+0.20):.2f} '
                    f'L{cx+sgn*rx*0.64:.2f},{cy:.2f} Z', fill=dk)
        if s == 'ponytail':
            cv.ellipse(cx + rx * 1.34, cy + ry * 1.00, rx * 0.36, ry * 0.76, col, rot=14)
    if s == 'bun':
        cv.circle(cx, cy - ry * 1.34, rx * 0.48, col)
        cv.circle(cx - rx * 0.15, cy - ry * 1.48, rx * 0.19, lt, opacity=0.5)


def _hair_front(cv, p, cx, cy, rx, ry):
    """The fringe and anything that overlaps the forehead. Never the face."""
    s, col = p.hair, C[p.hair_col]
    dk, lt = shade(col, 0.80), shade(col, 1.16)

    if s == 'hijab':
        hc = C[p.scarf] if getattr(p, 'scarf', None) else C['teal']
        # the front edge: a band across the top of the forehead and down past
        # the cheeks, leaving the face clear
        cv.path(f'M{cx-rx*1.30:.2f},{cy+ry*0.34:.2f} '
                f'C{cx-rx*1.32:.2f},{cy-ry*1.18:.2f} {cx+rx*1.32:.2f},{cy-ry*1.18:.2f} '
                f'{cx+rx*1.30:.2f},{cy+ry*0.34:.2f} '
                f'C{cx+rx*1.12:.2f},{cy+ry*0.06:.2f} {cx+rx*0.98:.2f},{cy-ry*0.52:.2f} '
                f'{cx:.2f},{cy-ry*0.56:.2f} '
                f'C{cx-rx*0.98:.2f},{cy-ry*0.52:.2f} {cx-rx*1.12:.2f},{cy+ry*0.06:.2f} '
                f'{cx-rx*1.30:.2f},{cy+ry*0.34:.2f} Z', fill=hc)
        for sgn in (-1, 1):
            cv.path(f'M{cx+sgn*rx*1.30:.2f},{cy+ry*0.30:.2f} '
                    f'C{cx+sgn*rx*1.26:.2f},{cy+ry*1.10:.2f} '
                    f'{cx+sgn*rx*0.96:.2f},{cy+ry*1.30:.2f} '
                    f'{cx+sgn*rx*0.86:.2f},{cy+ry*1.34:.2f} '
                    f'L{cx+sgn*rx*1.34:.2f},{cy+ry*1.20:.2f} Z', fill=hc)
        return
    if s == 'turban':
        hc = C['indigo']
        cv.path(f'M{cx-rx*1.24:.2f},{cy+ry*0.02:.2f} '
                f'C{cx-rx*1.32:.2f},{cy-ry*1.50:.2f} {cx+rx*1.32:.2f},{cy-ry*1.50:.2f} '
                f'{cx+rx*1.24:.2f},{cy+ry*0.02:.2f} Z', fill=hc)
        cv.path(f'M{cx-rx*1.12:.2f},{cy-ry*0.42:.2f} C{cx-rx*0.4:.2f},{cy-ry*1.16:.2f} '
                f'{cx+rx*0.6:.2f},{cy-ry*1.10:.2f} {cx+rx*1.10:.2f},{cy-ry*0.26:.2f}',
                stroke=shade(hc, 1.22), sw=rx * 0.18)
        return
    if s == 'cap':
        hc = C['red']
        cv.path(f'M{cx-rx*1.14:.2f},{cy-ry*0.22:.2f} '
                f'C{cx-rx*1.20:.2f},{cy-ry*1.40:.2f} {cx+rx*1.20:.2f},{cy-ry*1.40:.2f} '
                f'{cx+rx*1.14:.2f},{cy-ry*0.22:.2f} Z', fill=hc)
        cv.path(f'M{cx-rx*1.14:.2f},{cy-ry*0.22:.2f} h{-rx*0.98:.2f} '
                f'a{rx*0.52:.2f},{ry*0.30:.2f} 0 0 0 {rx*0.98:.2f},{ry*0.36:.2f} Z',
                fill=shade(hc, 0.82))
        return
    if s in ('afro', 'curly'):
        # a low fringe only: the hairline, not the forehead
        cv.path(f'M{cx-rx*1.02:.2f},{cy-ry*0.30:.2f} '
                f'C{cx-rx*0.86:.2f},{cy-ry*0.86:.2f} {cx+rx*0.40:.2f},{cy-ry*0.96:.2f} '
                f'{cx+rx*1.00:.2f},{cy-ry*0.44:.2f} '
                f'C{cx+rx*0.72:.2f},{cy-ry*0.70:.2f} {cx-rx*0.46:.2f},{cy-ry*0.72:.2f} '
                f'{cx-rx*1.02:.2f},{cy-ry*0.30:.2f} Z', fill=col)
        return
    if s == 'buzz':
        cv.path(f'M{cx-rx*1.04:.2f},{cy+ry*0.06:.2f} '
                f'C{cx-rx*1.08:.2f},{cy-ry*1.12:.2f} {cx+rx*1.08:.2f},{cy-ry*1.12:.2f} '
                f'{cx+rx*1.04:.2f},{cy+ry*0.06:.2f} '
                f'C{cx+rx*0.92:.2f},{cy-ry*0.34:.2f} {cx-rx*0.92:.2f},{cy-ry*0.34:.2f} '
                f'{cx-rx*1.04:.2f},{cy+ry*0.06:.2f} Z', fill=col)
        return
    top = {'short': 1.06, 'wavy': 1.14, 'bob': 1.10, 'long': 1.10,
           'ponytail': 1.08, 'bun': 1.02}.get(s, 1.06)
    cv.path(f'M{cx-rx*1.12:.2f},{cy+ry*0.16:.2f} '
            f'C{cx-rx*1.18:.2f},{cy-ry*top*1.34:.2f} {cx+rx*1.18:.2f},{cy-ry*top*1.34:.2f} '
            f'{cx+rx*1.12:.2f},{cy+ry*0.16:.2f} '
            f'C{cx+rx*0.98:.2f},{cy-ry*0.40:.2f} {cx+rx*0.52:.2f},{cy-ry*0.58:.2f} '
            f'{cx-rx*0.20:.2f},{cy-ry*0.46:.2f} '
            f'C{cx-rx*0.64:.2f},{cy-ry*0.36:.2f} {cx-rx*0.96:.2f},{cy-ry*0.18:.2f} '
            f'{cx-rx*1.12:.2f},{cy+ry*0.16:.2f} Z', fill=col)
    if s == 'wavy':
        cv.path(arc(cx - rx * 0.3, cy - ry * 0.58, rx * 0.82, 200, 330),
                stroke=lt, sw=rx * 0.14, opacity=0.5)
    else:
        cv.ellipse(cx - rx * 0.44, cy - ry * 0.88, rx * 0.38, ry * 0.22, lt,
                   opacity=0.42, rot=-18)


def _face(cv, p, cx, cy, rx, ry, expr, face):
    """face: -1 looking to our left .. 0 front .. +1 to our right"""
    ink = C['ink']
    ex = rx * 0.40
    ox = face * rx * 0.26
    ey = cy + ry * 0.08
    for sx in (-1, 1):
        x = cx + sx * ex + ox
        if face and sx == -face and abs(face) > 0.6:
            continue
        cv.ellipse(x, ey, rx * 0.105, rx * 0.135, ink)
        cv.circle(x - rx * 0.03, ey - rx * 0.045, rx * 0.038, '#FFFFFF', opacity=0.9)
        # brow
        lift = {'surprise': 0.30, 'think': 0.18}.get(expr, 0.0)
        cv.path(arc(x, ey - rx * (0.34 + lift), rx * 0.19, 200, 340),
                stroke=shade(C[p.hair_col] if not p.hair_col.startswith('#') else '#4A3728', 0.9),
                sw=rx * 0.075)
    # nose
    cv.path(f'M{cx+ox*1.2:.2f},{cy+ry*0.26:.2f} q{rx*0.10:.2f},{rx*0.10:.2f} '
            f'{-rx*0.04:.2f},{rx*0.13:.2f}', stroke=shade(C[p.skin], 0.74), sw=rx * 0.065)
    # mouth
    my = cy + ry * 0.56
    if expr == 'talk':
        cv.ellipse(cx + ox, my, rx * 0.22, rx * 0.20, shade(C['red'], 0.62))
        cv.ellipse(cx + ox, my + rx * 0.06, rx * 0.15, rx * 0.09, C['rose'], opacity=0.8)
    elif expr == 'surprise':
        cv.ellipse(cx + ox, my, rx * 0.16, rx * 0.21, shade(C['red'], 0.6))
    elif expr == 'neutral':
        cv.line(cx + ox - rx * 0.22, my, cx + ox + rx * 0.22, my, shade(C['skin6'], 0.9),
                sw=rx * 0.075)
    else:  # smile
        cv.path(arc(cx + ox, my - rx * 0.16, rx * 0.34, 25, 155),
                stroke=shade(C['skin6'], 0.85), sw=rx * 0.085)
    # cheeks
    for sx in (-1, 1):
        cv.ellipse(cx + sx * rx * 0.74 + ox * 0.5, cy + ry * 0.42, rx * 0.20, rx * 0.13,
                   C['rose'], opacity=0.33)


def _garment(cv, p, x, ytop, H, sw, hw, hip):
    """The torso. Garment shape is half of the character's silhouette."""
    col = C[p.top] if p.top in C else p.top
    dk, lt = shade(col, 0.82), shade(col, 1.12)
    g = p.garment
    neck = H * 0.025

    body = (f'M{x-sw:.2f},{ytop:.2f} '
            f'C{x-sw*1.06:.2f},{ytop+H*0.06:.2f} {x-hw*1.04:.2f},{hip-H*0.06:.2f} '
            f'{x-hw:.2f},{hip:.2f} '
            f'L{x+hw:.2f},{hip:.2f} '
            f'C{x+hw*1.04:.2f},{hip-H*0.06:.2f} {x+sw*1.06:.2f},{ytop+H*0.06:.2f} '
            f'{x+sw:.2f},{ytop:.2f} '
            f'C{x+sw*0.45:.2f},{ytop-H*0.012:.2f} {x-sw*0.45:.2f},{ytop-H*0.012:.2f} '
            f'{x-sw:.2f},{ytop:.2f} Z')
    cv.path(body, fill=col)
    # light on the figure's right shoulder, shadow down the other side
    cv.path(f'M{x-sw:.2f},{ytop:.2f} C{x-sw*1.06:.2f},{ytop+H*0.06:.2f} '
            f'{x-hw*1.04:.2f},{hip-H*0.06:.2f} {x-hw:.2f},{hip:.2f} '
            f'L{x-hw*0.42:.2f},{hip:.2f} L{x-sw*0.40:.2f},{ytop:.2f} Z',
            fill=lt, opacity=0.55)
    cv.path(f'M{x+sw:.2f},{ytop:.2f} C{x+sw*1.06:.2f},{ytop+H*0.06:.2f} '
            f'{x+hw*1.04:.2f},{hip-H*0.06:.2f} {x+hw:.2f},{hip:.2f} '
            f'L{x+hw*0.52:.2f},{hip:.2f} L{x+sw*0.52:.2f},{ytop:.2f} Z',
            fill=dk, opacity=0.40)

    if g == 'apron':
        a = C['cream'] if p.top != 'cream' else C['sand']
        cv.path(f'M{x-sw*0.62:.2f},{ytop+H*0.035:.2f} L{x+sw*0.62:.2f},{ytop+H*0.035:.2f} '
                f'L{x+hw*0.95:.2f},{hip+H*0.055:.2f} L{x-hw*0.95:.2f},{hip+H*0.055:.2f} Z',
                fill=a)
        cv.path(f'M{x-hw*0.95:.2f},{hip+H*0.055:.2f} L{x+hw*0.95:.2f},{hip+H*0.055:.2f}',
                stroke=shade(a, 0.86), sw=H * 0.008)
        cv.line(x - sw * 0.62, ytop + H * 0.035, x - sw * 0.30, ytop - H * 0.004,
                shade(a, 0.9), sw=H * 0.011)
        cv.line(x + sw * 0.62, ytop + H * 0.035, x + sw * 0.30, ytop - H * 0.004,
                shade(a, 0.9), sw=H * 0.011)
        cv.rect(x - hw * 0.40, hip - H * 0.035, hw * 0.80, H * 0.055, shade(a, 0.93), r=H * 0.006)
    elif g in ('shirt', 'jacket', 'cardigan', 'uniform'):
        front = dk if g == 'jacket' else shade(col, 0.92)
        cv.path(f'M{x-sw*0.30:.2f},{ytop-H*0.004:.2f} L{x:.2f},{ytop+H*0.055:.2f} '
                f'L{x+sw*0.30:.2f},{ytop-H*0.004:.2f} Z', fill=C['cream'])
        cv.line(x, ytop + H * 0.055, x, hip, front, sw=H * 0.009)
        if g in ('jacket', 'cardigan'):
            cv.path(f'M{x-sw*0.34:.2f},{ytop:.2f} L{x-sw*0.06:.2f},{ytop+H*0.075:.2f} '
                    f'L{x-sw*0.22:.2f},{hip:.2f} L{x-sw*0.50:.2f},{hip:.2f} Z', fill=dk)
            cv.path(f'M{x+sw*0.34:.2f},{ytop:.2f} L{x+sw*0.06:.2f},{ytop+H*0.075:.2f} '
                    f'L{x+sw*0.22:.2f},{hip:.2f} L{x+sw*0.50:.2f},{hip:.2f} Z', fill=dk)
        else:
            for i in range(3):
                cv.circle(x, ytop + H * 0.095 + i * H * 0.065, H * 0.009, shade(col, 0.70))
        if g == 'uniform':
            cv.rect(x + sw * 0.30, ytop + H * 0.075, sw * 0.34, H * 0.030,
                    C['amber'], r=H * 0.004)
    elif g == 'overall':
        d = shade(col, 0.88)
        cv.path(f'M{x-hw*1.0:.2f},{hip:.2f} L{x-hw*0.98:.2f},{ytop+H*0.085:.2f} '
                f'L{x+hw*0.98:.2f},{ytop+H*0.085:.2f} L{x+hw*1.0:.2f},{hip:.2f} Z', fill=d)
        for sx in (-1, 1):
            cv.line(x + sx * hw * 0.62, ytop + H * 0.085, x + sx * sw * 0.52, ytop - H * 0.004,
                    d, sw=H * 0.016)
        cv.rect(x - hw * 0.34, ytop + H * 0.105, hw * 0.68, H * 0.050, shade(d, 0.92),
                r=H * 0.005)
    elif g == 'tunic':
        cv.path(f'M{x-sw*0.26:.2f},{ytop-H*0.004:.2f} C{x:.2f},{ytop+H*0.075:.2f} '
                f'{x:.2f},{ytop+H*0.075:.2f} {x+sw*0.26:.2f},{ytop-H*0.004:.2f}',
                stroke=shade(col, 0.80), sw=H * 0.010)
        cv.rect(x + sw * 0.24, ytop + H * 0.105, sw * 0.40, H * 0.050, C['paper'], r=H * 0.005,
                stroke=shade(col, 0.8), sw=H * 0.004)
    else:  # tee
        cv.path(f'M{x-sw*0.28:.2f},{ytop-H*0.004:.2f} C{x:.2f},{ytop+H*0.055:.2f} '
                f'{x:.2f},{ytop+H*0.055:.2f} {x+sw*0.28:.2f},{ytop-H*0.004:.2f}',
                stroke=shade(col, 0.78), sw=H * 0.009)


def draw_person(cv: Canvas, p: Person, x: float, ybase: float, H: float,
                pose: str = 'stand', expr: str = 'smile', face: float = 0.0,
                shadow: bool = True, cut: float | None = None,
                cut_fill: str | None = None) -> dict:
    """Draw `p` standing on (x, ybase) at total height H.

    Returns anchor points -- hands, head top, mouth, chest -- so props and
    speech bubbles attach to the body instead of floating near it.
    `cut` clips the figure at this fraction of H (0.62 = waist up).
    """
    H = H * p.height
    y = ybase - H
    b = p.build
    rx, ry = H * 0.083 * (0.97 + 0.03 * b), H * 0.095
    cx, cy = x, y + ry * 1.04
    sh = y + H * 0.248
    hip = y + H * 0.520
    sw, hw = H * 0.112 * b, H * 0.088 * b
    skin, skin_dk = C[p.skin], shade(C[p.skin], 0.86)
    arm_w, leg_w = H * 0.050 * b, H * 0.058 * b
    P = POSES.get(pose, POSES['stand'])
    trouser = C[p.bottom] if p.bottom in C else p.bottom

    if shadow:
        cv.ellipse(x, ybase + H * 0.012, H * 0.150, H * 0.026, C['ink'], opacity=0.13)

    # ---- legs, behind the torso -----------------------------------------
    for key, sgn in (('ll', -1), ('rl', 1)):
        o = (x + sgn * hw * 0.46, hip - H * 0.010)
        pts = [o] + [(o[0] + dx * H, o[1] + dy * H) for dx, dy in P[key]]
        _limb(cv, pts, trouser, leg_w)
        fx, fy = pts[-1]
        toe = 1 if P[key][-1][0] > P[key][0][0] else (-1 if P[key][-1][0] < P[key][0][0]
                                                      else sgn)
        cv.ellipse(fx + toe * H * 0.016, fy + H * 0.014, H * 0.040, H * 0.019,
                   shade(C['ink'], 1.30))

    # ---- arms ------------------------------------------------------------
    def arm(key, sgn):
        o = (x + sgn * sw * 0.99, sh + H * 0.015)
        pts = [o] + [(o[0] + dx * H, o[1] + dy * H) for dx, dy in P[key]]
        sleeve = C[p.top] if p.top in C else p.top
        _limb(cv, pts[:2], sleeve, arm_w * 1.10)
        _limb(cv, pts[1:], skin, arm_w * 0.84)
        hx, hy = pts[-1]
        cv.circle(hx, hy, H * 0.028 * b, skin)
        cv.circle(hx - H * 0.008, hy - H * 0.008, H * 0.013, shade(skin, 1.12), opacity=0.7)
        return (hx, hy)

    hand_far = arm('la', -1)

    # ---- neck, torso -----------------------------------------------------
    cv.rect(x - H * 0.030, cy + ry * 0.74, H * 0.060, H * 0.058, skin_dk)
    _garment(cv, p, x, sh, H, sw, hw, hip)

    hand_near = arm('ra', 1)

    # ---- head ------------------------------------------------------------
    _hair_back(cv, p, cx, cy, rx, ry)
    if p.hair not in ('hijab', 'turban'):
        for sgn in (-1, 1):
            cv.ellipse(cx + sgn * rx * 1.00, cy + ry * 0.12, rx * 0.17, ry * 0.19, skin_dk)
    cv.ellipse(cx, cy, rx, ry, skin)
    cv.ellipse(cx - rx * 0.30, cy - ry * 0.18, rx * 0.56, ry * 0.52,
               shade(skin, 1.08), opacity=0.55)
    cv.path(f'M{cx+rx*0.62:.2f},{cy-ry*0.55:.2f} '
            f'A{rx:.2f},{ry:.2f} 0 0 1 {cx+rx*0.30:.2f},{cy+ry*0.94:.2f}',
            stroke=skin_dk, sw=rx * 0.16, opacity=0.42)
    _face(cv, p, cx, cy, rx, ry, expr, face)
    if 'beard' in p.accessory:
        cv.path(f'M{cx-rx*0.94:.2f},{cy+ry*0.18:.2f} '
                f'C{cx-rx*0.94:.2f},{cy+ry*1.30:.2f} {cx+rx*0.94:.2f},{cy+ry*1.30:.2f} '
                f'{cx+rx*0.94:.2f},{cy+ry*0.18:.2f} '
                f'C{cx+rx*0.58:.2f},{cy+ry*0.62:.2f} {cx-rx*0.58:.2f},{cy+ry*0.62:.2f} '
                f'{cx-rx*0.94:.2f},{cy+ry*0.18:.2f} Z',
                fill=shade(C[p.hair_col], 0.94))
    _hair_front(cv, p, cx, cy, rx, ry)
    if 'glasses' in p.accessory:
        g = shade(C['ink'], 1.5)
        ey = cy + ry * 0.08
        for sgn in (-1, 1):
            cv.rect(cx + sgn * rx * 0.42 - rx * 0.28, ey - rx * 0.25, rx * 0.56, rx * 0.50,
                    C['glass'], r=rx * 0.15, stroke=g, sw=rx * 0.065, opacity=0.92)
        cv.line(cx - rx * 0.14, ey - rx * 0.02, cx + rx * 0.14, ey - rx * 0.02, g, sw=rx * 0.06)
    if 'lanyard' in p.accessory:
        cv.path(f'M{x-sw*0.32:.2f},{sh:.2f} L{x-H*0.012:.2f},{sh+H*0.090:.2f} '
                f'L{x+H*0.012:.2f},{sh+H*0.090:.2f} L{x+sw*0.32:.2f},{sh:.2f}',
                stroke=C['teal'], sw=H * 0.010)
        cv.rect(x - H * 0.028, sh + H * 0.090, H * 0.056, H * 0.042, C['paper'],
                r=H * 0.005, stroke=C['steel'], sw=H * 0.004)
    if 'earrings' in p.accessory:
        for sgn in (-1, 1):
            cv.circle(cx + sgn * rx * 1.04, cy + ry * 0.40, rx * 0.10, C['amber'])

    if cut:
        # erase with whatever is actually behind the figure. Using the
        # canvas background paints cream over a white card.
        cv.rect(x - H * 0.46, y + H * cut, H * 0.92, H * (1 - cut) + 6,
                cut_fill or cv.bg)

    foot_y = hip - H * 0.010 + P['rl'][-1][1] * H
    return dict(hand_near=hand_near, hand_far=hand_far, foot_y=foot_y,
                head=(cx, cy - ry * 1.35), mouth=(cx, cy + ry * 0.6),
                chest=(x, sh + H * 0.09), foot=(x, ybase),
                top=y, cx=cx, cy=cy, rx=rx, ry=ry, H=H, sh=sh, hip=hip)
