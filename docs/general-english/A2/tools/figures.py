#!/usr/bin/env python3
"""Figure renderer. Four jobs, the locked palette, 1440 px wide.

Every figure emits a PNG and a sidecar .json carrying the geometry the G-family
checks interrogate: label boxes, leader segments, drawn bounds, glyph sizes,
card/stage/arrow counts, the content hash and alt text.
"""
from __future__ import annotations
import hashlib, json, math, os, re, sys
from PIL import ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

W = 1440
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
FONT_R = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'

P = dict(bg='#FFFFFF', card='#EEF3F9', ink='#1F3864', blue='#8FA8C8', deep='#6E88AC',
         tan='#C79A5C', tand='#A97C43', tanl='#E6C78F', rule='#AEB6C2',
         grey='#9AA6B2', accent='#009688', brown='#8A5A3B')

_fc: dict = {}
def _font(size, bold=True):
    k = (size, bold)
    if k not in _fc:
        _fc[k] = ImageFont.truetype(FONT if bold else FONT_R, size)
    return _fc[k]

def tw(s, size, bold=True):
    return _font(size, bold).getlength(s)


def fit_lines(label: str, maxw: float, size_hi: int = 34, size_lo: int = 22):
    """Largest size at or above the 22 px floor (check G13) that fits the label
    in one or two lines. Shrinking below the floor is not an option, so a long
    label wraps instead."""
    for size in range(size_hi, size_lo - 1, -2):
        if tw(label, size) <= maxw:
            return [label], size
    words = label.split()
    for size in range(size_hi, size_lo - 1, -2):
        for cut in range(len(words) - 1, 0, -1):
            a, b = ' '.join(words[:cut]), ' '.join(words[cut:])
            if tw(a, size) <= maxw and tw(b, size) <= maxw:
                return [a, b], size
    return [label], size_lo


class Fig:
    def __init__(self, height: int, alt: str):
        self.h = height
        self.alt = alt
        self.parts: list[str] = []
        self.texts: list[dict] = []
        self.leaders: list[list[float]] = []
        self.bounds = [W, height, 0, 0]
        self.cards = 0
        self.stages = 0
        self.arrows = 0

    # ---- geometry bookkeeping
    def _grow(self, x0, y0, x1, y1):
        b = self.bounds
        self.bounds = [min(b[0], x0), min(b[1], y0), max(b[2], x1), max(b[3], y1)]

    # ---- primitives
    def rect(self, x, y, w, h, fill=P['card'], stroke=P['ink'], r=14, sw=3):
        self.parts.append(
            f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" rx="{r}" '
            f'fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>')
        self._grow(x - sw, y - sw, x + w + sw, y + h + sw)

    def circle(self, cx, cy, r, fill=P['blue'], stroke=P['ink'], sw=3):
        self.parts.append(f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r:.1f}" '
                          f'fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>')
        self._grow(cx - r - sw, cy - r - sw, cx + r + sw, cy + r + sw)

    def line(self, x0, y0, x1, y1, stroke=P['ink'], sw=3, cap='round'):
        self.parts.append(f'<line x1="{x0:.1f}" y1="{y0:.1f}" x2="{x1:.1f}" y2="{y1:.1f}" '
                          f'stroke="{stroke}" stroke-width="{sw}" stroke-linecap="{cap}"/>')
        self._grow(min(x0, x1) - sw, min(y0, y1) - sw, max(x0, x1) + sw, max(y0, y1) + sw)

    def path(self, d, fill='none', stroke=P['ink'], sw=3):
        self.parts.append(f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" '
                          f'stroke-linecap="round" stroke-linejoin="round"/>')
        for x, y in _path_points(d):
            self._grow(x - sw, y - sw, x + sw, y + sw)

    def text(self, s, cx, baseline, size=34, fill=P['ink'], anchor='middle',
             on=P['card'], bold=True):
        f = _font(size, bold)
        wdt = f.getlength(s)
        x0 = cx - wdt / 2 if anchor == 'middle' else (cx if anchor == 'start' else cx - wdt)
        asc, desc = f.getmetrics()
        bbox = [x0, baseline - asc * 0.78, x0 + wdt, baseline + desc * 0.6]
        self.texts.append({'text': s, 'size': size, 'bbox': [round(v, 1) for v in bbox],
                           'fill': fill, 'on': on})
        self.parts.append(
            f'<text x="{cx:.1f}" y="{baseline:.1f}" font-family="DejaVu Sans" '
            f'font-size="{size}" font-weight="{"bold" if bold else "normal"}" '
            f'fill="{fill}" text-anchor="{anchor}">{_esc(s)}</text>')
        self._grow(*bbox)
        return bbox

    def arrow(self, x0, y, x1, stroke=P['accent'], sw=5):
        self.line(x0, y, x1 - 14, y, stroke=stroke, sw=sw)
        self.path(f'M {x1-20:.1f} {y-11:.1f} L {x1:.1f} {y:.1f} L {x1-20:.1f} {y+11:.1f}',
                  fill=stroke, stroke=stroke, sw=2)
        self.arrows += 1

    def leader(self, x0, y0, x1, y1):
        self.line(x0, y0, x1, y1, stroke=P['ink'], sw=3)
        self.circle(x0, y0, 7, fill=P['ink'], stroke=P['ink'], sw=0)
        self.leaders.append([round(x0, 1), round(y0, 1), round(x1, 1), round(y1, 1)])

    def svg(self) -> str:
        return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{self.h}" '
                f'viewBox="0 0 {W} {self.h}">'
                f'<rect width="{W}" height="{self.h}" fill="{P["bg"]}"/>'
                + ''.join(self.parts) + '</svg>')


# An arc's `rx ry rot large sweep x y` must not be read as coordinate pairs:
# `... 0 0 1 1286.2 309.6` once put a point at y=1286 and blew the canvas out.
_ARGC = {'M': 2, 'L': 2, 'T': 2, 'S': 4, 'Q': 4, 'C': 6, 'A': 7, 'H': 1, 'V': 1, 'Z': 0}

def _path_points(d: str):
    toks = re.findall(r'[MLTSQCAHVZmltsqcahvz]|-?\d+\.?\d*', d)
    i, cmd, pts = 0, None, []
    while i < len(toks):
        t = toks[i]
        if t.upper() in _ARGC:
            cmd = t.upper(); i += 1
            if cmd == 'Z':
                continue
        n = _ARGC.get(cmd, 2)
        args = [float(x) for x in toks[i:i + n]]
        i += n
        if len(args) < n:
            break
        if cmd in ('M', 'L', 'T'):
            pts.append((args[0], args[1]))
        elif cmd in ('S', 'Q'):
            pts += [(args[0], args[1]), (args[2], args[3])]
        elif cmd == 'C':
            pts += [(args[0], args[1]), (args[2], args[3]), (args[4], args[5])]
        elif cmd == 'A':
            pts.append((args[5], args[6]))      # endpoint only
    return pts


def _shift_path(d: str, dy: float) -> str:
    """Move every y coordinate of a path. Only M/L/T/S/Q/C are emitted, so each
    numeric pair is a real point; there are no arc flags to misread."""
    toks = re.findall(r'[MLTSQCZmltsqcz]|-?\d+\.?\d*', d)
    out, cmd, k = [], None, 0
    for t in toks:
        if t.upper() in _ARGC:
            cmd, k = t.upper(), 0
            out.append(t); continue
        k += 1
        out.append(f'{float(t) - dy:.1f}' if k % 2 == 0 else t)
    return ' '.join(out)


def _esc(s):
    return (s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
             .replace('’', '&#8217;').replace('—', '&#8212;'))


# ----------------------------------------------------------------- icon set
def icon(f: Fig, name: str, cx: float, cy: float, s: float = 1.0):
    """Flat vector glyphs in the locked palette. Nothing here is decorative."""
    def R(x, y, w, h, fill=P['blue'], r=8, sw=3):
        f.rect(cx + x * s, cy + y * s, w * s, h * s, fill=fill, r=r * s, sw=sw)
    def C(x, y, r, fill=P['blue'], sw=3):
        f.circle(cx + x * s, cy + y * s, r * s, fill=fill, sw=sw)
    def L(x0, y0, x1, y1, stroke=P['ink'], sw=3):
        f.line(cx + x0 * s, cy + y0 * s, cx + x1 * s, cy + y1 * s, stroke=stroke, sw=sw)

    if name == 'person':
        C(0, -34, 17); R(-20, -14, 40, 46, r=14)
    elif name == 'nurse':
        C(0, -34, 17, fill=P['blue']); R(-20, -14, 40, 46, fill=P['bg'], r=14)
        L(-9, 6, 9, 6, stroke=P['accent'], sw=6); L(0, -3, 0, 15, stroke=P['accent'], sw=6)
    elif name == 'hospital':
        R(-34, -30, 68, 62, fill=P['card'], r=6)
        L(-14, 0, 14, 0, stroke=P['accent'], sw=8); L(0, -14, 0, 14, stroke=P['accent'], sw=8)
    elif name == 'shop':
        R(-40, -16, 80, 48, fill=P['card'], r=4)
        R(-46, -32, 92, 18, fill=P['tan'], r=4)            # awning
        for k in range(-3, 4):
            L(k * 13, -32, k * 13, -14, stroke=P['tand'], sw=2)
        R(-30, -4, 26, 20, fill=P['blue'], r=2)            # window
        R(6, -4, 24, 36, fill=P['deep'], r=2)              # door
    elif name == 'school':
        R(-44, -14, 88, 46, fill=P['bg'], r=4)
        f.path(f'M {cx-48*s:.1f} {cy-14*s:.1f} L {cx:.1f} {cy-38*s:.1f} '
               f'L {cx+48*s:.1f} {cy-14*s:.1f} Z', fill=P['deep'])
        L(0, -38, 0, -50); R(1, -50, 18, 12, fill=P['accent'], r=2)
        R(-34, -4, 20, 16, fill=P['blue'], r=2); R(14, -4, 20, 16, fill=P['blue'], r=2)
        R(-11, 2, 22, 30, fill=P['tan'], r=2)
    elif name == 'bus':
        R(-44, -22, 88, 44, fill=P['blue'], r=10)
        R(-36, -14, 30, 18, fill=P['card'], r=4); R(4, -14, 30, 18, fill=P['card'], r=4)
        C(-26, 24, 10, fill=P['ink']); C(26, 24, 10, fill=P['ink'])
    elif name == 'book':
        R(-32, -26, 64, 52, fill=P['tanl'], r=4); L(0, -26, 0, 26)
        L(-22, -12, -8, -12, stroke=P['tand']); L(8, -12, 22, -12, stroke=P['tand'])
    elif name == 'kitchen':
        R(-36, -6, 72, 38, fill=P['bg'], r=4)
        C(-18, -16, 10, fill=P['grey']); C(18, -16, 10, fill=P['grey'])
        f.path(f'M {cx-26*s:.1f} {cy-26*s:.1f} L {cx-26*s:.1f} {cy-40*s:.1f}')
        R(-30, -34, 42, 10, fill=P['blue'], r=4)
        L(12, -29, 34, -29, sw=4)
    elif name == 'clock':
        C(0, 0, 36, fill=P['card']); L(0, 0, 0, -22, sw=5); L(0, 0, 16, 8, sw=5)
    elif name == 'home':
        f.path(f'M {cx-44*s:.1f} {cy-2*s:.1f} L {cx:.1f} {cy-40*s:.1f} '
               f'L {cx+44*s:.1f} {cy-2*s:.1f} Z', fill=P['tan'])
        R(-32, -2, 64, 36, fill=P['card'], r=4); R(-10, 10, 20, 24, fill=P['deep'], r=2)
    elif name == 'sun':
        C(0, 0, 22, fill=P['tanl'])
        for a in range(0, 360, 45):
            r = math.radians(a)
            L(math.cos(r) * 30, math.sin(r) * 30, math.cos(r) * 42, math.sin(r) * 42, sw=5)
    elif name == 'moon':
        C(0, 0, 32, fill=P['deep']); C(16, -12, 26, fill=P['bg'], sw=0)
    elif name == 'cup':
        R(-26, -20, 44, 40, fill=P['bg'], r=6)
        R(20, -10, 16, 20, fill=P['bg'], r=8)        # handle
        R(-20, -14, 32, 8, fill=P['tand'], r=3)      # the drink
        L(-30, 26, 30, 26, sw=5)
    elif name == 'sign':
        L(0, 44, 0, -20, sw=6)                             # the pole
        R(-6, -46, 52, 20, fill=P['card'], r=3)            # the upper board
        L(-2, -36, 36, -36, stroke=P['deep'], sw=3)
        R(-46, -20, 52, 20, fill=P['card'], r=3)           # the lower board
        L(-40, -10, -4, -10, stroke=P['deep'], sw=3)
    elif name == 'bridge':
        L(-52, 42, 52, 42, stroke=P['blue'], sw=5)         # the water
        L(-46, 24, -46, 42, stroke=P['tand'], sw=4)        # the piers
        L(-16, 24, -16, 42, stroke=P['tand'], sw=4)
        L(16, 24, 16, 42, stroke=P['tand'], sw=4)
        L(46, 24, 46, 42, stroke=P['tand'], sw=4)
        R(-50, 6, 100, 18, fill=P['tan'], r=3)             # the deck
        R(-36, -20, 13, 26, fill=P['blue'], r=3)           # the towers
        R(23, -20, 13, 26, fill=P['blue'], r=3)
    elif name == 'sign_number':
        L(0, 44, 0, -18, sw=6)                             # the pole
        R(-30, -50, 60, 44, fill=P['card'], r=4)           # one square board
        R(-19, -42, 16, 18, fill=P['deep'], r=2)           # the two figures
        R(1, -42, 16, 18, fill=P['deep'], r=2)
        L(-22, -16, 22, -16, stroke=P['tand'], sw=4)       # the next numbers
        L(-22, -16, -14, -22, stroke=P['tand'], sw=4)
        L(22, -16, 14, -10, stroke=P['tand'], sw=4)
    elif name == 'slab':
        R(-46, -24, 92, 48, fill=P['grey'], r=4)           # one poured surface
        L(-46, 0, 46, 0, stroke=P['rule'], sw=3)
    elif name == 'stones':
        for row in range(3):                               # small cubes, laid
            for col in range(4):
                dark = (row + col) % 2 == 0
                R(-46 + col * 24, -26 + row * 18, 20, 14,
                  fill=P['ink'] if dark else P['card'], r=2, sw=2)
    elif name == 'cloud':
        C(-20, 4, 22, fill=P['card']); C(12, 2, 26, fill=P['card'])
        R(-34, 4, 70, 24, fill=P['card'], r=12)
    elif name == 'rain':
        C(-18, -14, 20, fill=P['card']); C(12, -16, 24, fill=P['card'])
        R(-32, -14, 64, 22, fill=P['card'], r=11)
        for k in (-20, 0, 20):
            L(k, 14, k - 8, 42, stroke=P['blue'], sw=5)
    elif name == 'snow':
        C(-18, -14, 20, fill=P['card']); C(12, -16, 24, fill=P['card'])
        R(-32, -14, 64, 22, fill=P['card'], r=11)
        for k in (-20, 0, 20):
            L(k - 9, 20, k + 9, 38, stroke=P['deep'], sw=4)
            L(k + 9, 20, k - 9, 38, stroke=P['deep'], sw=4)
    elif name == 'wind':
        for dy, w2 in ((-16, 44), (2, 58), (20, 36)):
            R(-w2 // 2, dy, w2, 8, fill=P['grey'], r=4, sw=2)
        C(26, 2, 12, fill=P['bg'])
    elif name == 'notice':
        R(-34, -40, 68, 68, fill=P['card'], r=5)           # the board
        L(-22, -24, 22, -24, stroke=P['ink'], sw=5)
        L(-22, -8, 14, -8, stroke=P['deep'], sw=3)
        L(-22, 6, 22, 6, stroke=P['deep'], sw=3)
        L(0, 28, 0, 46, sw=6)                              # the post
    elif name == 'guard':
        C(0, -34, 17)
        R(-10, -44, 20, 8, fill=P['ink'], r=2)             # the cap
        R(-22, -14, 44, 48, fill=P['deep'], r=14)          # the uniform
        R(-4, -10, 8, 14, fill=P['tanl'], r=2)             # the badge
    elif name == 'locker':
        R(-30, -38, 60, 76, fill=P['card'], r=5)
        L(-30, 0, 30, 0, stroke=P['ink'], sw=4)
        C(16, -20, 5, fill=P['ink'], sw=2)
        C(16, 20, 5, fill=P['ink'], sw=2)
    elif name == 'pill':
        R(-34, -14, 68, 28, fill=P['card'], r=14)
        L(0, -14, 0, 14, sw=4)
        C(-17, 0, 5, fill=P['tand'], sw=0)
    elif name == 'bed':
        R(-46, -2, 92, 26, fill=P['card'], r=4)           # the mattress
        R(-46, -26, 20, 24, fill=P['blue'], r=4)          # the headboard
        R(-30, -12, 26, 12, fill=P['bg'], r=4)            # the pillow
        L(-46, 24, -46, 38, sw=4); L(46, 24, 46, 38, sw=4)
    elif name == 'thermometer':
        R(-7, -44, 14, 62, fill=P['card'], r=7)
        C(0, 26, 15, fill=P['tand'])
        R(-4, -10, 8, 36, fill=P['tand'], r=4)
        for k in range(4):
            L(7, -34 + k * 12, 14, -34 + k * 12, stroke=P['deep'], sw=3)
    elif name == 'plane':
        f.path(f'M {cx-48*s:.1f} {cy+6*s:.1f} L {cx+40*s:.1f} {cy-6*s:.1f} '
               f'L {cx+48*s:.1f} {cy+2*s:.1f} L {cx-40*s:.1f} {cy+18*s:.1f} Z',
               fill=P['blue'])
        f.path(f'M {cx-6*s:.1f} {cy+2*s:.1f} L {cx+6*s:.1f} {cy-30*s:.1f} '
               f'L {cx+18*s:.1f} {cy-26*s:.1f} L {cx+8*s:.1f} {cy+6*s:.1f} Z',
               fill=P['deep'])
    elif name == 'tent':
        f.path(f'M {cx-44*s:.1f} {cy+28*s:.1f} L {cx:.1f} {cy-34*s:.1f} '
               f'L {cx+44*s:.1f} {cy+28*s:.1f} Z', fill=P['tan'])
        f.path(f'M {cx-12*s:.1f} {cy+28*s:.1f} L {cx:.1f} {cy-6*s:.1f} '
               f'L {cx+12*s:.1f} {cy+28*s:.1f} Z', fill=P['ink'])
        L(-52, 28, 52, 28, sw=5)
    elif name == 'island':
        L(-50, 24, 50, 24, stroke=P['blue'], sw=6)
        f.path(f'M {cx-34*s:.1f} {cy+24*s:.1f} Q {cx:.1f} {cy-6*s:.1f} '
               f'{cx+34*s:.1f} {cy+24*s:.1f} Z', fill=P['tanl'])
        L(6, 6, 6, -24, stroke=P['tand'], sw=5)
        C(6, -30, 14, fill=P['tanl'])
    elif name == 'tree':
        L(0, 8, 0, 40, stroke=P['tand'], sw=7)             # the trunk
        C(0, -6, 26, fill=P['tanl'])
        C(-16, 10, 17, fill=P['tanl'])
        C(16, 10, 17, fill=P['tanl'])
    elif name == 'camera':
        R(-42, -22, 84, 50, fill=P['card'], r=6)           # the body
        R(-18, -34, 30, 12, fill=P['ink'], r=3)            # the viewfinder hump
        C(-4, 3, 19, fill=P['bg'])                         # the lens
        C(-4, 3, 10, fill=P['blue'], sw=0)
        C(26, -12, 5, fill=P['tand'], sw=0)                # the shutter
    elif name == 'record':
        C(0, 0, 40, fill=P['ink'])
        C(0, 0, 24, fill=P['ink'], sw=2)
        C(0, 0, 13, fill=P['tand'], sw=0)
        C(0, 0, 3, fill=P['bg'], sw=0)                     # the spindle hole
    elif name == 'mobile':
        R(-24, -42, 48, 84, fill=P['card'], r=8)
        R(-17, -34, 34, 58, fill=P['blue'], r=3)           # the screen
        L(-7, 32, 7, 32, sw=4)                             # the button
    elif name == 'computer':
        R(-44, -34, 88, 54, fill=P['card'], r=5)
        R(-36, -27, 72, 40, fill=P['blue'], r=2)           # the screen
        L(-4, 20, 4, 20, sw=5)                             # the stem
        L(-28, 32, 28, 32, sw=6)                           # the stand
    elif name == 'tram':
        R(-44, -30, 88, 50, fill=P['card'], r=6)
        R(-34, -22, 26, 20, fill=P['blue'], r=2)
        R(8, -22, 26, 20, fill=P['blue'], r=2)
        L(0, -30, 0, -44, sw=4)                            # the pole
        L(-22, -44, 22, -44, stroke=P['tand'], sw=4)       # the wire
        C(-24, 24, 7, fill=P['ink'], sw=0)
        C(24, 24, 7, fill=P['ink'], sw=0)
        L(-50, 34, 50, 34, sw=4)                           # the rail
    elif name == 'bicycle':
        C(-26, 14, 18, fill=P['bg'], sw=4)
        C(26, 14, 18, fill=P['bg'], sw=4)
        L(-26, 14, 0, -14, sw=4); L(0, -14, 26, 14, sw=4)
        L(-26, 14, 26, 14, sw=4); L(0, -14, -8, -26, sw=4)
        L(-18, -30, 2, -30, stroke=P['blue'], sw=5)        # the handlebars
    elif name == 'painting':
        R(-44, -34, 88, 68, fill=P['tand'], r=3)           # the frame
        R(-35, -26, 70, 52, fill=P['bg'], r=1)
        f.path(f'M {cx-35*s:.1f} {cy+26*s:.1f} L {cx-10*s:.1f} {cy-8*s:.1f} '
               f'L {cx+12*s:.1f} {cy+26*s:.1f} Z', fill=P['tanl'])
        C(18, -12, 8, fill=P['blue'], sw=0)
    else:
        C(0, 0, 30, fill=P['grey'])


# ------------------------------------------------------------- figure jobs
def category_set(cells, height=600, cols=3, alt=''):
    """N.1 - a labelled card grid feeding a table-completion task."""
    f = Fig(height, alt)
    rows = math.ceil(len(cells) / cols)
    pad, gap = 70, 34
    cw = (W - 2 * pad - gap * (cols - 1)) / cols
    ch = (height - 2 * 46 - gap * (rows - 1)) / rows
    for i, (label, ic) in enumerate(cells):
        r, c = divmod(i, cols)
        x = pad + c * (cw + gap)
        y = 46 + r * (ch + gap)
        f.rect(x, y, cw, ch, fill=P['card'], stroke='#CED4DD', r=18, sw=3)
        icon(f, ic, x + cw / 2, y + ch * 0.40, s=min(1.45, ch * 0.40 / 56, cw * 0.40 / 56))
        lines, size = fit_lines(label, cw - 36)
        base = y + ch - 26 - (len(lines) - 1) * (size + 6)
        for j, ln in enumerate(lines):
            f.text(ln, x + cw / 2, base + j * (size + 6), size=size, on=P['card'])
        f.cards += 1
    return f


def label_me(parts_, height=620, alt='', draw=None):
    """N.2 - a diagram the learner labels. Leaders never cross: the hit points
    are sorted by y and mapped in order to the rules, which is a monotone map."""
    f = Fig(height, alt)
    LX, RX = 120, 880           # drawing band / rule band
    f.rect(LX, 70, 640, height - 150, fill=P['card'], stroke='#CED4DD', r=22, sw=3)
    if draw:
        draw(f, LX, 70, 640, height - 150)
    n = len(parts_)
    top, step = 86, (height - 180) / max(1, n - 1)
    pts = sorted(parts_, key=lambda p: p[1])     # (name, y_fraction, x_fraction)
    for i, (name, fy, fx) in enumerate(pts):
        hx = LX + 640 * fx
        hy = 70 + (height - 150) * fy
        ry = top + i * step
        f.leader(hx, hy, RX - 34, ry)
        f.text(f'{i+1}.', RX - 24, ry + 12, size=32, anchor='start', on=P['bg'])
        f.line(RX + 36, ry + 16, W - 90, ry + 16, stroke=P['rule'], sw=3)
    return f


def process_strip(stages, height=360, alt=''):
    """N.3 - stages with an arrow between every adjacent pair."""
    f = Fig(height, alt)
    n = len(stages)
    pad, gap = 60, 56
    bw = (W - 2 * pad - gap * (n - 1)) / n
    y, bh = 74, height - 170
    for i, (label, ic) in enumerate(stages):
        x = pad + i * (bw + gap)
        f.rect(x, y, bw, bh, fill=P['card'], stroke='#CED4DD', r=18, sw=3)
        icon(f, ic, x + bw / 2, y + bh * 0.40, s=min(1.3, bh * 0.38 / 56, bw * 0.38 / 56))
        lines, size = fit_lines(label, bw - 24, size_hi=30)
        base = y + bh - 18 - (len(lines) - 1) * (size + 5)
        for j, ln in enumerate(lines):
            f.text(ln, x + bw / 2, base + j * (size + 5), size=size, on=P['card'])
        f.stages += 1
        if i:
            f.arrow(x - gap + 10, y + bh / 2, x - 10)
    return f


def scene(items, height=560, alt='', cols=3):
    """N.4 - a scene: people or places on a baseline, with a caption under each.

    Laid out as a grid rather than one long row: six people across 1440 px gives
    each only 220 px, which forces the icons small and leaves a dead band above
    them (check G17). Two rows of three doubles the width each one gets.
    """
    f = Fig(height, alt)
    n = len(items)
    rows = math.ceil(n / cols)
    pad = 60
    cw = (W - 2 * pad) / cols
    rh = height / rows
    for i, (label, ic, sub) in enumerate(items):
        r, c = divmod(i, cols)
        cx = pad + cw * (c + 0.5)
        top = r * rh
        base = top + rh - 26
        s_ic = min(cw * 0.30 / 56, (rh - 112) * 0.46 / 56)
        icon(f, ic, cx, top + (rh - 104) * 0.52, s=s_ic)
        f.line(pad + cw * c + 18, top + rh - 104, pad + cw * (c + 1) - 18,
               top + rh - 104, stroke=P['rule'], sw=4)
        lines, size = fit_lines(label, cw - 24, size_hi=34)
        for j, ln in enumerate(lines):
            f.text(ln, cx, top + rh - 62 + j * (size + 4), size=size, on=P['bg'])
        if sub:
            sl, s2 = fit_lines(sub, cw - 18, size_hi=28)
            for j, ln in enumerate(sl):
                # P['deep'] on white is 3.6:1 - below the 4.5:1 floor (check G22)
                f.text(ln, cx, base + (len(lines) - 1) * 36 + j * (s2 + 4),
                       size=s2, fill=P['ink'], on=P['bg'], bold=False)
    return f


def unit_opener(number, title, grammar, can_do, icons, height=760, alt=''):
    """N.1 - the page the unit opens on: what it is about, the one grammar point,
    and what the learner will be able to do. Orientation, not decoration."""
    f = Fig(height, alt)
    f.rect(0, 0, W, 250, fill=P['ink'], stroke=P['ink'], r=0, sw=0)
    f.text(f'UNIT {number}', 90, 104, size=40, fill=P['tanl'], anchor='start', on=P['ink'])
    lines, sz = fit_lines(title, W - 180, size_hi=72, size_lo=44)
    f.text(lines[0], 90, 186, size=sz, fill=P['bg'], anchor='start', on=P['ink'])

    f.rect(70, 300, 620, 190, fill=P['card'], stroke='#CED4DD', r=16, sw=3)
    f.text('GRAMMAR', 106, 356, size=26, fill=P['ink'], anchor='start', on=P['card'])
    gl, gsz = fit_lines(grammar, 560, size_hi=36, size_lo=26)
    for i, ln in enumerate(gl[:2]):
        f.text(ln, 106, 410 + i * (gsz + 8), size=gsz, anchor='start', on=P['card'])

    f.rect(750, 300, 620, 190, fill=P['card'], stroke='#CED4DD', r=16, sw=3)
    f.text('IN THIS UNIT', 786, 356, size=26, fill=P['ink'], anchor='start', on=P['card'])
    n = len(icons)
    for i, ic in enumerate(icons):
        icon(f, ic, 820 + i * min(140, 540 / max(1, n - 0.2)), 432, s=0.84)

    f.text('By the end you can', 70, 580, size=30, fill=P['ink'], anchor='start')
    y = 632
    for line in can_do[:3]:
        ln, sz2 = fit_lines(line, W - 230, size_hi=30, size_lo=24)
        f.rect(74, y - 22, 26, 26, fill=P['bg'], stroke=P['accent'], r=5, sw=4)
        f.text(ln[0], 128, y, size=sz2, anchor='start')
        y += 56
    return f


def grammar_contrast(left, right, height=640, alt=''):
    """N.5 - the unit's one grammar point as a two-column contrast, each side
    with its own timeline. `left`/`right` = (label, form, example, marks)."""
    f = Fig(height, alt)
    for k, (label, form, example, marks) in enumerate((left, right)):
        x = 60 + k * (W / 2 - 20)
        w = W / 2 - 100
        f.rect(x, 50, w, height - 110, fill=P['card'], stroke='#CED4DD', r=18, sw=3)
        # both headers are ink: white on P['deep'] is 3.6:1, under the 4.5 floor.
        # the two sides are told apart by the timeline marks, not by the band.
        f.rect(x, 50, w, 76, fill=P['ink'], stroke='none', r=18, sw=0)
        ll, lsz = fit_lines(label, w - 40, size_hi=38, size_lo=28)
        f.text(ll[0], x + w / 2, 102, size=lsz, fill=P['bg'], on=P['ink'])
        fl, fsz = fit_lines(form, w - 50, size_hi=32, size_lo=24)
        for i, ln in enumerate(fl[:2]):
            f.text(ln, x + w / 2, 180 + i * (fsz + 8), size=fsz, fill=P['ink'], on=P['card'])
        # the timeline
        ty = 310
        f.line(x + 44, ty, x + w - 44, ty, stroke=P['ink'], sw=5)
        for frac in marks:
            f.circle(x + 44 + (w - 88) * frac, ty, 13,
                     fill=P['accent'] if k else P['tan'], sw=3)
        f.text('now', x + 44 + (w - 88) * 0.5, ty + 52, size=24,
               fill=P['ink'], on=P['card'])
        el, esz = fit_lines(example, w - 50, size_hi=30, size_lo=24)
        for i, ln in enumerate(el[:3]):
            f.text(ln, x + w / 2, 430 + i * (esz + 10), size=esz, on=P['card'])
    return f


def timeline(points, height=460, alt=''):
    """N.6 - one day on a line, with the markers the practice task asks about."""
    f = Fig(height, alt)
    f.rect(50, 40, W - 100, height - 80, fill=P['card'], stroke='#CED4DD', r=20, sw=3)
    y = height / 2
    INSET = 190                   # wide enough that an end label stays on the canvas
    f.line(INSET, y, W - INSET, y, stroke=P['ink'], sw=6)
    n = len(points)
    for i, (when, what) in enumerate(points):
        x = INSET + (W - 2 * INSET) * (i / max(1, n - 1))
        f.circle(x, y, 16, fill=P['tan'], sw=4)
        slot = (W - 2 * INSET) / max(1, n - 1)
        wl, wsz = fit_lines(when, slot - 16, size_hi=34, size_lo=24)
        f.text(wl[0], x, y - 58, size=wsz, on=P['card'])
        tl, tsz = fit_lines(what, slot - 14, size_hi=28, size_lo=22)
        for j, ln in enumerate(tl[:2]):
            f.text(ln, x, y + 74 + j * (tsz + 8), size=tsz, fill=P['ink'], on=P['card'])
    return f


def speakers(cards, height=560, alt=''):
    """N.7 - who is speaking in each listening, and what the track is about."""
    f = Fig(height, alt)
    n = len(cards)
    pad, gap = 60, 40
    cw = (W - 2 * pad - gap * (n - 1)) / n
    for i, (track, who, ic, topic) in enumerate(cards):
        x = pad + i * (cw + gap)
        f.rect(x, 60, cw, height - 140, fill=P['card'], stroke='#CED4DD', r=18, sw=3)
        f.rect(x, 60, cw, 62, fill=P['ink'], stroke='none', r=18, sw=0)
        f.text(track, x + cw / 2, 104, size=28, fill=P['bg'], on=P['ink'])
        icon(f, ic, x + cw / 2, 230, s=1.25)
        wl, wsz = fit_lines(who, cw - 36, size_hi=32, size_lo=24)
        for j, ln in enumerate(wl[:2]):
            f.text(ln, x + cw / 2, 344 + j * (wsz + 6), size=wsz, on=P['card'])
        tl, tsz = fit_lines(topic, cw - 30, size_hi=26, size_lo=22)
        for j, ln in enumerate(tl[:2]):
            f.text(ln, x + cw / 2, 410 + j * (tsz + 6), size=tsz,
                   fill=P['ink'], on=P['card'], bold=False)
    return f


def cue_cards(a, b, height=560, alt=''):
    """N.8 - the two role-play cards, as cards, so the pair can see their own."""
    f = Fig(height, alt)
    for k, (title, items, ic) in enumerate((a, b)):
        x = 60 + k * (W / 2 - 20)
        w = W / 2 - 100
        f.rect(x, 50, w, height - 110, fill=P['bg'], stroke=P['ink'], r=20, sw=4)
        f.rect(x, 50, w, 80, fill=P['ink'], stroke='none', r=20, sw=0)
        f.text(title, x + w / 2, 104, size=34, fill=P['bg'], on=P['ink'])
        icon(f, ic, x + w - 92, 198, s=0.78)
        y = 190
        for it in items[:4]:
            il, isz = fit_lines(it, w - 230, size_hi=28, size_lo=22)
            f.circle(x + 44, y - 8, 9, fill=P['accent'], sw=0)
            for j, ln in enumerate(il[:2]):
                f.text(ln, x + 78, y + j * (isz + 6), size=isz, anchor='start')
            y += 56 + (len(il[:2]) - 1) * 30
    return f


def world_strip(places, height=460, alt=''):
    """N.10 - the same hour of the day in different places, for the second read."""
    f = Fig(height, alt)
    n = len(places)
    pad = 60
    cw = (W - 2 * pad) / n
    for i, (place, ic, fact) in enumerate(places):
        cx = pad + cw * (i + 0.5)
        f.rect(pad + cw * i + 14, 50, cw - 28, height - 110,
               fill=P['card'], stroke='#CED4DD', r=16, sw=3)
        icon(f, ic, cx, 162, s=min(1.15, cw * 0.30 / 56))
        pl, psz = fit_lines(place, cw - 44, size_hi=32, size_lo=24)
        f.text(pl[0], cx, 268, size=psz, on=P['card'])
        fl, fsz = fit_lines(fact, cw - 40, size_hi=26, size_lo=22)
        for j, ln in enumerate(fl[:3]):
            f.text(ln, cx, 316 + j * (fsz + 6), size=fsz, fill=P['ink'],
                   on=P['card'], bold=False)
    return f


def writing_frame(steps, height=520, alt=''):
    """N.11 - the shape of the paragraph the learner is about to write."""
    f = Fig(height, alt)
    n = len(steps)
    pad = 70
    bh = (height - 2 * 50 - (n - 1) * 18) / n
    for i, (label, example) in enumerate(steps):
        y = 50 + i * (bh + 18)
        f.rect(pad, y, W - 2 * pad, bh, fill=P['card'], stroke='#CED4DD', r=14, sw=3)
        f.rect(pad, y, 14, bh, fill=P['accent'], stroke='none', r=0, sw=0)
        f.text(f'{i+1}', pad + 62, y + bh / 2 + 11, size=32, fill=P['ink'], on=P['card'])
        f.text(label, pad + 120, y + bh / 2 + 11, size=30, anchor='start', on=P['card'])
        el, esz = fit_lines(example, W - 2 * pad - 640, size_hi=26, size_lo=22)
        f.text(el[0], pad + 600, y + bh / 2 + 9, size=esz, fill=P['ink'],
               anchor='start', on=P['card'], bold=False)
    return f


def function_map(pairs, height=580, alt=''):
    """N.12 - what you say on the left, what it does on the right, arrows between.
    Rows are parallel, so no arrow can cross another."""
    f = Fig(height, alt)
    n = len(pairs)
    top, rh = 60, (height - 120) / n
    for i, (phrase, purpose) in enumerate(pairs):
        y = top + i * rh
        f.rect(60, y, 600, rh - 20, fill=P['bg'], stroke=P['ink'], r=12, sw=3)
        pl, psz = fit_lines(phrase, 548, size_hi=28, size_lo=22)
        for j, ln in enumerate(pl[:2]):
            f.text(ln, 360, y + rh / 2 - 4 + (j - (len(pl[:2]) - 1) / 2) * (psz + 6),
                   size=psz)
        f.arrow(700, y + rh / 2 - 10, 790)
        f.rect(830, y, 550, rh - 20, fill=P['card'], stroke='#CED4DD', r=12, sw=3)
        ql, qsz = fit_lines(purpose, 500, size_hi=28, size_lo=22)
        for j, ln in enumerate(ql[:2]):
            f.text(ln, 1105, y + rh / 2 - 4 + (j - (len(ql[:2]) - 1) / 2) * (qsz + 6),
                   size=qsz, fill=P['ink'], on=P['card'])
    return f


def before_after(before, after, height=520, alt=''):
    """N.13 - the Global Story as one change: what it was, what it became."""
    f = Fig(height, alt)
    for k, (title, items, ic) in enumerate((before, after)):
        x = 60 + k * (W / 2 + 20)
        w = W / 2 - 110
        f.rect(x, 60, w, height - 130, fill=P['card'] if k else P['bg'],
               stroke='#CED4DD' if k else P['rule'], r=18, sw=3)
        f.text(title, x + w / 2, 128, size=34, fill=P['ink'],
               on=P['card'] if k else P['bg'])
        icon(f, ic, x + w / 2, 236, s=1.1)
        y = 338
        for it in items[:3]:
            il, isz = fit_lines(it, w - 70, size_hi=27, size_lo=22)
            for j, ln in enumerate(il[:2]):
                f.text(ln, x + w / 2, y + j * (isz + 6), size=isz, fill=P['ink'],
                       on=P['card'] if k else P['bg'], bold=False)
            y += 46 + (len(il[:2]) - 1) * 28
    f.arrow(W / 2 - 46, height / 2 - 30, W / 2 + 46)
    return f


def progress_strip(lines, height=520, alt=''):
    """N.14 - the Can-Do list as a strip the learner ticks, with the Plus one marked."""
    f = Fig(height, alt)
    n = len(lines)
    top = 60
    rh = (height - 120) / n
    for i, (text, plus) in enumerate(lines):
        y = top + i * rh
        f.rect(60, y, W - 120, rh - 16, fill=P['card'] if plus else P['bg'],
               stroke='#CED4DD', r=12, sw=3)
        f.rect(84, y + rh / 2 - 24, 36, 36, fill=P['bg'], stroke=P['accent'], r=6, sw=4)
        tl, tsz = fit_lines(text, W - 320, size_hi=28, size_lo=22)
        f.text(tl[0], 156, y + rh / 2 + 2, size=tsz, anchor='start',
               on=P['card'] if plus else P['bg'])
        if plus:
            f.text('PLUS', W - 110, y + rh / 2 + 2, size=22, fill=P['ink'],
                   anchor='end', on=P['card'])
    return f


def politeness_ladder(f: Fig, x, y, w, h):
    """A ladder: the plainest ask at the bottom, the politest at the top. The
    rungs are what the learner labels."""
    cx = x + w * 0.46
    lw = w * 0.52
    top, bot = y + 60, y + h - 70
    f.rect(cx - lw / 2, top, 22, bot - top, fill=P['tan'], stroke=P['ink'], r=6)
    f.rect(cx + lw / 2 - 22, top, 22, bot - top, fill=P['tan'], stroke=P['ink'], r=6)
    n = 5
    step = (bot - top - 60) / (n - 1)
    for i in range(n):
        ry = top + 30 + i * step
        f.rect(cx - lw / 2 + 18, ry, lw - 36, 16, fill=P['card'],
               stroke=P['ink'], r=4)
    icon(f, 'person', x + w * 0.10, bot - 40, s=0.46)
    icon(f, 'cup', x + w * 0.10, top + 40, s=0.40)


def street_plan(f: Fig, x, y, w, h):
    """A plan of one street from above, with one building cut open. Opposite,
    between, behind and next to are readable from a plan; below is not, so the
    building on the right is drawn in section, shop under flat. Hit points run
    left to right as they run down the drawing, so no two leaders cross."""
    rt, rb = y + h * 0.40, y + h * 0.50
    f.rect(x + 30, rt, w - 60, rb - rt, fill=P['grey'], stroke=P['ink'], r=4)
    for k in range(7):                                     # the centre line
        f.rect(x + 56 + k * (w - 140) / 7, (rt + rb) / 2 - 4, 40, 8,
               fill=P['bg'], stroke='none', r=2, sw=0)
    # the terrace above the road: three in a row, so the middle one is between
    for i, fill in enumerate((P['card'], P['blue'], P['card'])):
        f.rect(x + w * (0.12 + i * 0.14), y + h * 0.14, w * 0.12, h * 0.26,
               fill=fill, stroke=P['ink'], r=6)
    # two below the road: the first is opposite the middle one, the second next to it
    f.rect(x + w * 0.26, rb, w * 0.12, h * 0.20, fill=P['tan'], stroke=P['ink'], r=6)
    f.rect(x + w * 0.42, rb, w * 0.12, h * 0.20, fill=P['card'], stroke=P['ink'], r=6)
    # the square, open, with its bench
    f.rect(x + w * 0.58, rb, w * 0.18, h * 0.22, fill=P['tanl'], stroke=P['ink'], r=8)
    f.rect(x + w * 0.63, rb + h * 0.09, w * 0.08, 12, fill=P['tand'],
           stroke=P['ink'], r=4)
    # the low building behind the square
    f.rect(x + w * 0.59, rb + h * 0.25, w * 0.16, h * 0.12,
           fill=P['card'], stroke=P['ink'], r=6)
    # the building on the right, cut open: a flat over a shop
    f.rect(x + w * 0.84, rb, w * 0.12, h * 0.19, fill=P['card'], stroke=P['ink'], r=6)
    f.rect(x + w * 0.84, rb + h * 0.19, w * 0.12, h * 0.19, fill=P['deep'],
           stroke=P['ink'], r=6)


def work_surface(f: Fig, x, y, w, h):
    """A bench from above, the things laid out in the order they are used. Each
    one sits a little lower than the one to its left, so the hit points run down
    as they run right and label_me's leaders fan out instead of crossing."""
    f.line(x + 40, y + h * 0.16, x + w - 40, y + h * 0.20, stroke=P['rule'], sw=4)
    # the bowl, first and highest
    f.circle(x + w * 0.11, y + h * 0.38, h * 0.13, fill=P['card'], sw=4)
    f.circle(x + w * 0.11, y + h * 0.38, h * 0.08, fill=P['tand'], sw=3)
    # the spoon: a round head over a handle
    f.rect(x + w * 0.29, y + h * 0.46, 15, h * 0.28, fill=P['grey'],
           stroke=P['ink'], r=7)
    f.circle(x + w * 0.29 + 7, y + h * 0.42, h * 0.08, fill=P['grey'], sw=3)
    # the work: one layer laid over another
    f.rect(x + w * 0.44, y + h * 0.42, w * 0.17, h * 0.30, fill=P['card'],
           stroke=P['ink'], r=4)
    f.rect(x + w * 0.47, y + h * 0.47, w * 0.17, h * 0.30, fill=P['tanl'],
           stroke=P['ink'], r=4)
    # the glue: a tube with a pointed top
    f.rect(x + w * 0.755, y + h * 0.50, w * 0.06, h * 0.28, fill=P['blue'],
           stroke=P['ink'], r=6)
    f.rect(x + w * 0.77, y + h * 0.42, w * 0.03, h * 0.09, fill=P['deep'],
           stroke=P['ink'], r=3)
    # the brush, last and lowest: a handle with a dark head
    f.rect(x + w * 0.90, y + h * 0.46, 14, h * 0.24, fill=P['tand'],
           stroke=P['ink'], r=5)
    f.rect(x + w * 0.893, y + h * 0.68, 26, h * 0.12, fill=P['ink'],
           stroke=P['ink'], r=4)


def week_page(f: Fig, x, y, w, h):
    """One week in a diary, seen as a page. The rows carry different weights so
    that an arrangement with a time, a decision with none, a hope and an open
    day are all readable from the drawing. Hit points run down as they run
    right, so label_me's leaders fan out instead of crossing."""
    f.rect(x + 50, y + 40, w - 100, h - 80, fill=P['bg'], stroke=P['ink'], r=10)
    f.line(x + 50, y + 92, x + w - 50, y + 92, stroke=P['ink'], sw=4)   # the header
    rows, top = 5, y + 92
    rh = (h - 80 - 52) / rows
    for i in range(rows):
        ry = top + i * rh
        if i:
            f.line(x + 50, ry, x + w - 50, ry, stroke=P['rule'], sw=2)
        f.rect(x + 66, ry + rh * 0.28, w * 0.09, rh * 0.42,
               fill=P['card'], stroke=P['ink'], r=4)                     # the day
    # row 1: an arrangement, with a clock block and a second person
    f.rect(x + w * 0.26, top + rh * 0.26, w * 0.34, rh * 0.46,
           fill=P['blue'], stroke=P['ink'], r=5)
    f.circle(x + w * 0.66, top + rh * 0.49, rh * 0.20, fill=P['deep'], sw=3)
    # row 2: a decision, written but not booked - an outline only
    f.rect(x + w * 0.26, top + rh * 1.26, w * 0.30, rh * 0.46,
           fill=P['bg'], stroke=P['ink'], r=5)
    # row 3: a hope - a short dashed-looking mark
    for k in range(3):
        f.rect(x + w * (0.27 + k * 0.07), top + rh * 2.40, w * 0.045, rh * 0.18,
               fill=P['tanl'], stroke='none', r=2, sw=0)
    # row 4: a thing that repeats, shown as three blocks across the row
    for k in range(3):
        f.rect(x + w * (0.30 + k * 0.14), top + rh * 3.26, w * 0.11, rh * 0.46,
               fill=P['tan'], stroke=P['ink'], r=4)
    # row 5: an open day - nothing at all but the rule


def sky_strip(f: Fig, x, y, w, h):
    """Five skies in a row, each told apart by shape rather than by colour: a
    clear sun, a cloud, a cloud with rain falling, a cloud with crossed flakes,
    and a band of fog across the whole panel. The hit points step down as they
    step right so label_me's leaders fan out."""
    ground = y + h * 0.84
    f.line(x + 40, ground, x + w - 40, ground, stroke=P['ink'], sw=5)
    cx = [0.10, 0.29, 0.49, 0.69, 0.89]
    icon(f, 'sun', x + w * cx[0], y + h * 0.30, s=1.15)
    icon(f, 'cloud', x + w * cx[1], y + h * 0.36, s=1.20)
    icon(f, 'rain', x + w * cx[2], y + h * 0.42, s=1.20)
    icon(f, 'snow', x + w * cx[3], y + h * 0.50, s=1.20)
    # the fog: three flat bands low down, with nothing visible behind them
    for k in range(3):
        f.rect(x + w * 0.76, y + h * (0.62 + k * 0.08), w * 0.22, h * 0.05,
               fill=P['grey'], stroke='none', r=6, sw=0)


def rule_wall(f: Fig, x, y, w, h):
    """A wall with four notices on it and one empty hook. The learner labels the
    kind of rule each notice carries, so the four have to look different: a
    crossed circle for forbidden, a tick for necessary, an open square for free,
    and a key for members. The hooks step down to the right so the leaders fan
    out instead of crossing."""
    f.line(x + 40, y + h * 0.90, x + w - 40, y + h * 0.90, stroke=P['rule'], sw=5)
    spots = [(0.12, 0.24), (0.33, 0.34), (0.54, 0.46), (0.74, 0.58), (0.90, 0.72)]
    bw, bh = w * 0.14, h * 0.26
    for i, (fx, fy) in enumerate(spots):
        bx, by = x + w * fx - bw / 2, y + h * fy - bh / 2
        f.rect(bx, by, bw, bh, fill=P['card'], stroke=P['ink'], r=5)
        cx2, cy2 = bx + bw / 2, by + bh * 0.46
        r = min(bw, bh) * 0.24
        if i == 0:                                   # forbidden: a crossed circle
            f.circle(cx2, cy2, r, fill=P['bg'], sw=4)
            f.line(cx2 - r * 0.7, cy2 + r * 0.7, cx2 + r * 0.7, cy2 - r * 0.7,
                   stroke=P['ink'], sw=5)
        elif i == 1:                                 # necessary: a tick
            f.line(cx2 - r, cy2, cx2 - r * 0.2, cy2 + r * 0.7, stroke=P['ink'], sw=6)
            f.line(cx2 - r * 0.2, cy2 + r * 0.7, cx2 + r, cy2 - r * 0.8,
                   stroke=P['ink'], sw=6)
        elif i == 2:                                 # free: an open square
            f.rect(cx2 - r, cy2 - r, r * 2, r * 2, fill=P['bg'], stroke=P['ink'], r=3)
        elif i == 3:                                 # members: a key
            f.circle(cx2 - r * 0.5, cy2, r * 0.55, fill=P['bg'], sw=4)
            f.line(cx2 - r * 0.1, cy2, cx2 + r, cy2, stroke=P['ink'], sw=5)
            f.line(cx2 + r * 0.6, cy2, cx2 + r * 0.6, cy2 + r * 0.5,
                   stroke=P['ink'], sw=5)
        else:                                        # a fee: two coins
            f.circle(cx2 - r * 0.45, cy2 + r * 0.2, r * 0.7, fill=P['tanl'], sw=4)
            f.circle(cx2 + r * 0.45, cy2 - r * 0.2, r * 0.7, fill=P['tan'], sw=4)


def advice_ladder(f: Fig, x, y, w, h):
    """Five rungs from no pressure to no choice. The rungs widen and darken as
    they climb, so how strong each piece of advice is readable from the shape,
    and the hit points step down left to right so no two leaders cross."""
    base, top = y + h * 0.84, y + h * 0.16
    n = 5
    step = (base - top) / (n - 1)
    fills = [P['bg'], P['card'], P['blue'], P['deep'], P['ink']]
    for i in range(n):
        ry = base - i * step
        bw = w * (0.26 + i * 0.11)
        f.rect(x + w * 0.10, ry - h * 0.07, bw, h * 0.11,
               fill=fills[i], stroke=P['ink'], r=6)
    # an arrow up the side, so the direction is not left to the reader
    ax = x + w * 0.90
    f.line(ax, base, ax, top + h * 0.05, stroke=P['accent'], sw=6)
    f.path(f'M {ax:.1f} {top - h * 0.02:.1f} L {ax - 14:.1f} {top + h * 0.06:.1f} '
           f'L {ax + 14:.1f} {top + h * 0.06:.1f} Z', fill=P['accent'])


def life_line(f: Fig, x, y, w, h):
    """A life as one line, with four things on it and a gap at the end. The
    marks differ in shape so experience, a repeat, a never and a not-yet are
    told apart by the drawing: a filled circle for done, two circles for twice,
    an empty circle with a line through for never, and an open bracket for the
    part not reached. Hit points step down to the right."""
    def ly_at(fx):
        return y + h * (0.24 + 0.52 * fx)
    f.line(x + 60, ly_at(0.09), x + w * 0.845, ly_at(0.845), stroke=P['ink'], sw=6)
    xs = [0.14, 0.33, 0.52, 0.71]
    # done once: a filled circle
    f.circle(x + w * xs[0], ly_at(xs[0]), 20, fill=P['deep'], sw=4)
    # done twice: two filled circles together
    f.circle(x + w * xs[1] - 15, ly_at(xs[1]) - 4, 17, fill=P['deep'], sw=4)
    f.circle(x + w * xs[1] + 17, ly_at(xs[1]) + 4, 17, fill=P['deep'], sw=4)
    # never: an empty circle with a line through it
    cy3 = ly_at(xs[2])
    f.circle(x + w * xs[2], cy3, 20, fill=P['bg'], sw=4)
    f.line(x + w * xs[2] - 16, cy3 + 16, x + w * xs[2] + 16, cy3 - 16,
           stroke=P['ink'], sw=5)
    # already: a filled circle with a mark of distance above it
    cy4 = ly_at(xs[3])
    f.circle(x + w * xs[3], cy4, 20, fill=P['tan'], sw=4)
    f.line(x + w * xs[3], cy4 - 36, x + w * xs[3], cy4 - 24, stroke=P['tand'], sw=4)
    # not yet: the line stops and an open bracket waits
    bx, by = x + w * 0.855, ly_at(0.875)
    f.line(bx, by - 34, bx, by + 34, stroke=P['rule'], sw=5)
    f.line(bx, by - 34, bx + 26, by - 34, stroke=P['rule'], sw=5)
    f.line(bx, by + 34, bx + 26, by + 34, stroke=P['rule'], sw=5)


def change_line(f: Fig, x, y, w, h):
    """One street's time as a line, with the five kinds of time phrase drawn as
    five different marks, so a learner can tell a point from a length and a
    finished stretch from an unfinished one without reading the words: a closed
    box for a finished month, a circle with the line running on for a starting
    point, a capped bar for a measured length, a circle with a stem for a point
    counted back from now, and an open bracket for a period still running.
    Hit points step down as they step right, so no two leaders cross (G15)."""
    def ly_at(fx):
        return y + h * (0.22 + 0.56 * fx)
    f.line(x + 50, ly_at(0.07), x + w * 0.90, ly_at(0.90), stroke=P['ink'], sw=6)
    xs = [0.13, 0.30, 0.47, 0.64, 0.80]
    # in March: a finished month, closed on both sides
    bx, by = x + w * xs[0], ly_at(xs[0])
    f.rect(bx - 22, by - 19, 44, 38, fill=P['deep'], stroke=P['ink'], r=4)
    # since March: a starting point, with the line carrying on past it
    cx2, cy2 = x + w * xs[1], ly_at(xs[1])
    f.circle(cx2, cy2, 19, fill=P['tan'], sw=4)
    f.line(cx2 + 26, cy2 + 10, cx2 + 74, cy2 + 34, stroke=P['tand'], sw=5)
    # for four years: a measured length, capped at both ends
    ax, ay = x + w * xs[2], ly_at(xs[2])
    f.line(ax - 48, ay - 20, ax + 48, ay + 24, stroke=P['blue'], sw=7)
    f.line(ax - 48, ay - 38, ax - 48, ay - 2, stroke=P['ink'], sw=5)
    f.line(ax + 48, ay + 6, ax + 48, ay + 42, stroke=P['ink'], sw=5)
    # four years ago: one point, counted back from now
    dx, dy = x + w * xs[3], ly_at(xs[3])
    f.circle(dx, dy, 19, fill=P['deep'], sw=4)
    f.line(dx, dy - 56, dx, dy - 26, stroke=P['tand'], sw=4)
    # this year: a period that has not finished
    ex, ey = x + w * xs[4], ly_at(xs[4])
    f.line(ex - 10, ey - 36, ex - 10, ey + 36, stroke=P['rule'], sw=5)
    f.line(ex - 10, ey - 36, ex + 20, ey - 36, stroke=P['rule'], sw=5)
    f.line(ex - 10, ey + 36, ex + 20, ey + 36, stroke=P['rule'], sw=5)


def compare_pair(f: Fig, x, y, w, h):
    """Two objects side by side, so wider, deeper, thicker, lighter and stronger
    are visible rather than asserted."""
    base = y + h * 0.70
    # the small one
    f.rect(x + 60, base - 108, 150, 108, fill=P['card'], stroke=P['ink'], r=10)
    f.rect(x + 60, base - 108, 150, 22, fill=P['blue'], stroke=P['ink'], r=8)
    f.line(x + 60, base + 26, x + 210, base + 26, stroke=P['rule'], sw=5)
    # the big one
    f.rect(x + 300, base - 150, 250, 150, fill=P['card'], stroke=P['ink'], r=12)
    f.rect(x + 300, base - 150, 250, 34, fill=P['deep'], stroke=P['ink'], r=10)
    f.line(x + 300, base + 26, x + 550, base + 26, stroke=P['rule'], sw=5)
    # the depth of each, shown as a side panel
    f.rect(x + 212, base - 96, 26, 96, fill=P['grey'], stroke=P['ink'], r=4)
    f.rect(x + 552, base - 132, 54, 132, fill=P['grey'], stroke=P['ink'], r=4)
    # a weight under each, to make lighter and heavier visible
    f.circle(x + 135, base + 76, 20, fill=P['tanl'], sw=3)
    f.circle(x + 400, base + 76, 20, fill=P['tan'], sw=3)
    f.circle(x + 450, base + 76, 20, fill=P['tan'], sw=3)


def station(f: Fig, x, y, w, h):
    """A station from the side: gate, seat, luggage, coach, a board with a delay."""
    ground = y + h * 0.74
    f.line(x + 30, ground, x + w - 30, ground, stroke=P['ink'], sw=5)
    # the board
    f.rect(x + w * 0.60, y + 50, w * 0.34, 92, fill=P['ink'], stroke=P['ink'], r=8)
    for k in range(3):
        f.rect(x + w * 0.62, y + 64 + k * 26, w * 0.18, 14, fill=P['tanl'],
               stroke='none', r=3, sw=0)
        f.rect(x + w * 0.83, y + 64 + k * 26, w * 0.08, 14, fill=P['accent'],
               stroke='none', r=3, sw=0)
    # the gate
    f.rect(x + 54, ground - 150, 20, 150, fill=P['grey'], stroke=P['ink'], r=3)
    f.rect(x + 160, ground - 150, 20, 150, fill=P['grey'], stroke=P['ink'], r=3)
    f.rect(x + 74, ground - 118, 86, 16, fill=P['accent'], stroke=P['ink'], r=4)
    # the seat
    f.rect(x + w * 0.24, ground - 52, 128, 16, fill=P['tan'], stroke=P['ink'], r=4)
    f.rect(x + w * 0.24 + 8, ground - 36, 14, 36, fill=P['ink'], stroke='none', r=0, sw=0)
    f.rect(x + w * 0.24 + 106, ground - 36, 14, 36, fill=P['ink'], stroke='none',
           r=0, sw=0)
    # the luggage
    f.rect(x + w * 0.42, ground - 74, 62, 74, fill=P['deep'], stroke=P['ink'], r=6)
    f.rect(x + w * 0.42 + 22, ground - 96, 18, 24, fill=P['bg'], stroke=P['ink'], r=4)
    # the coach
    icon(f, 'bus', x + w * 0.52, ground - 54, s=0.72)


def landscape(f: Fig, x, y, w, h):
    """The countryside from the side: hill, forest, lake, path, village."""
    ground = y + h * 0.66
    f.path(f'M {x + 30:.1f} {ground:.1f} L {x + w * 0.22:.1f} {y + h * 0.22:.1f} '
           f'L {x + w * 0.44:.1f} {ground:.1f} Z', fill=P['blue'])          # hill
    for k in range(5):                                                      # forest
        cx = x + w * 0.46 + k * 34
        f.path(f'M {cx - 22:.1f} {ground:.1f} L {cx:.1f} {ground - 76:.1f} '
               f'L {cx + 22:.1f} {ground:.1f} Z', fill=P['deep'])
        f.rect(cx - 7, ground, 14, 22, fill=P['tand'], stroke=P['ink'], r=2)
    f.rect(x + 30, ground + 34, w - 60, h * 0.24, fill=P['card'],
           stroke=P['rule'], r=0, sw=3)                                     # ground
    f.rect(x + w * 0.10, ground + 58, w * 0.26, 54, fill=P['blue'],
           stroke=P['ink'], r=24)                                           # lake
    f.path(f'M {x + w * 0.42:.1f} {ground + h * 0.24 + 30:.1f} '
           f'L {x + w * 0.56:.1f} {ground + 60:.1f} '
           f'L {x + w * 0.52:.1f} {ground + 40:.1f}', stroke=P['tan'], sw=9)  # path
    for k in range(3):                                                      # village
        bx = x + w * 0.70 + k * 56
        f.rect(bx, ground + 44, 44, 48, fill=P['bg'], stroke=P['ink'], r=3)
        f.path(f'M {bx - 8:.1f} {ground + 44:.1f} L {bx + 22:.1f} {ground + 16:.1f} '
               f'L {bx + 52:.1f} {ground + 44:.1f} Z', fill=P['tan'])


def counter(f: Fig, x, y, w, h):
    """A shop counter from the front: basket, till, receipt, change, bag."""
    top = y + h * 0.46
    f.rect(x + 40, top, w - 80, h * 0.40, fill=P['tan'], stroke=P['ink'], r=8)
    f.rect(x + 40, top, w - 80, 18, fill=P['tand'], stroke=P['ink'], r=4)
    # basket
    f.rect(x + w * 0.08, top - 74, 118, 70, fill=P['blue'], stroke=P['ink'], r=10)
    for k in range(4):
        f.line(x + w * 0.08 + 22 + k * 24, top - 70, x + w * 0.08 + 22 + k * 24,
               top - 8, stroke=P['ink'], sw=3)
    # till
    f.rect(x + w * 0.30, top - 96, 134, 92, fill=P['card'], stroke=P['ink'], r=8)
    f.rect(x + w * 0.30 + 18, top - 82, 98, 32, fill=P['deep'], stroke=P['ink'], r=4)
    for r_ in range(2):
        for c_ in range(4):
            f.rect(x + w * 0.30 + 20 + c_ * 24, top - 42 + r_ * 18, 16, 12,
                   fill=P['grey'], stroke=P['ink'], r=2, sw=2)
    # receipt
    f.rect(x + w * 0.54, top - 104, 74, 108, fill=P['bg'], stroke=P['ink'], r=4)
    for k in range(5):
        f.line(x + w * 0.54 + 12, top - 88 + k * 18, x + w * 0.54 + 62,
               top - 88 + k * 18, stroke=P['rule'], sw=3)
    # change
    for k in range(3):
        f.circle(x + w * 0.72 + k * 34, top - 26, 20, fill=P['tanl'], sw=3)
    # bag
    f.rect(x + w * 0.86, top - 92, 104, 92, fill=P['card'], stroke=P['ink'], r=6)
    f.path(f'M {x + w * 0.86 + 26:.1f} {top - 92:.1f} L {x + w * 0.86 + 34:.1f} '
           f'{top - 120:.1f} L {x + w * 0.86 + 70:.1f} {top - 120:.1f} '
           f'L {x + w * 0.86 + 78:.1f} {top - 92:.1f}')


def streetscape(f: Fig, x, y, w, h):
    """A street from the side: a bridge over it, traffic, a crossing, a bench,
    a market. The object Unit 3's label-me figure asks the learner to name."""
    road_y = y + h * 0.62
    f.rect(x + 30, road_y, w - 60, 72, fill=P['grey'], stroke=P['ink'], r=0, sw=3)
    for k in range(6):                      # the crossing
        f.rect(x + w * 0.44 + k * 26, road_y + 6, 16, 60, fill=P['bg'],
               stroke='none', r=0, sw=0)
    f.rect(x + 40, y + 60, w - 80, 22, fill=P['tan'], stroke=P['ink'], r=4)   # bridge
    f.rect(x + 56, y + 82, 24, road_y - y - 82, fill=P['tand'], stroke=P['ink'], r=2)
    f.rect(x + w - 104, y + 82, 24, road_y - y - 82, fill=P['tand'],
           stroke=P['ink'], r=2)
    icon(f, 'bus', x + w * 0.24, road_y + 4, s=0.52)                          # traffic
    icon(f, 'bus', x + w * 0.34, road_y + 4, s=0.42)
    f.rect(x + w * 0.66, road_y + 92, 150, 16, fill=P['deep'], stroke=P['ink'], r=6)
    f.rect(x + w * 0.69, road_y + 108, 14, 42, fill=P['ink'], stroke='none', r=0, sw=0)
    f.rect(x + w * 0.83, road_y + 108, 14, 42, fill=P['ink'], stroke='none', r=0, sw=0)
    icon(f, 'shop', x + w * 0.20, road_y + 128, s=0.62)                       # market


def building(f: Fig, x, y, w, h):
    """A block from the side: roof, balcony, stairs, entrance, garden."""
    bx, bw = x + w * 0.26, w * 0.44
    top, bot = y + 60, y + h - 86
    f.rect(bx, top, bw, bot - top, fill=P['bg'], stroke=P['ink'], r=0, sw=4)
    f.path(f'M {bx - 34:.1f} {top:.1f} L {bx + bw / 2:.1f} {top - 54:.1f} '
           f'L {bx + bw + 34:.1f} {top:.1f} Z', fill=P['tan'])
    floors = 4
    fh = (bot - top) / floors
    for i in range(1, floors):
        f.line(bx, top + i * fh, bx + bw, top + i * fh, stroke=P['rule'], sw=3)
    for i in range(floors):
        f.rect(bx + 26, top + i * fh + 20, bw * 0.30, fh - 48, fill=P['blue'], r=4)
    f.rect(bx + bw - 54, top + fh * 0.6, 54, 44, fill=P['card'], stroke=P['ink'], r=4)
    f.rect(bx + bw * 0.52, bot - 70, 54, 70, fill=P['deep'], stroke=P['ink'], r=4)
    f.line(x + 30, bot, x + w - 30, bot, stroke=P['ink'], sw=5)
    for k in range(3):
        icon(f, 'sun', x + w * 0.12 + k * 26, bot + 42, s=0.22)


def day_column(f: Fig, x, y, w, h):
    """A day from dawn at the top to midnight at the bottom: the object the
    learner labels in Unit 1's Figure N.2."""
    bx, bw = x + w * 0.30, w * 0.26
    bands = [P['tanl'], P['tan'], P['blue'], P['deep'], P['ink']]
    bh = (h - 56) / len(bands)
    for i, col in enumerate(bands):
        f.rect(bx, y + 28 + i * bh, bw, bh, fill=col, stroke=P['ink'],
               r=18 if i in (0, len(bands) - 1) else 0, sw=3)
    icon(f, 'sun', x + w * 0.17, y + 28 + bh * 0.5, s=0.72)
    icon(f, 'clock', x + w * 0.17, y + 28 + bh * 2.5, s=0.72)
    icon(f, 'moon', x + w * 0.17, y + 28 + bh * 4.5, s=0.72)


# ------------------------------------------------------------------ output
def tighten(f: Fig, margin: int | None = None) -> Fig:
    """Crop the canvas to the drawing plus a small margin, so no figure ships
    with the empty bands the source's Figure 1.2 has (check G17)."""
    # the margin is a share of the drawing, so a short figure does not end up
    # with a proportionally fat empty band (check G17 caps it at 8%)
    if margin is None:
        margin = max(14, min(30, (f.bounds[3] - f.bounds[1]) * 0.055))
    y0, y1 = f.bounds[1], f.bounds[3]
    dy = y0 - margin
    if abs(dy) < 1 and abs(f.h - (y1 + margin)) < 1:
        return f
    shifted = []
    for p in f.parts:
        p = re.sub(r'(\sy|\scy|\sy1|\sy2)="(-?\d+\.?\d*)"',
                   lambda m: f'{m.group(1)}="{float(m.group(2)) - dy:.1f}"', p)
        p = re.sub(r'(d=")([^"]+)(")',
                   lambda m: m.group(1) + _shift_path(m.group(2), dy) + m.group(3), p)
        shifted.append(p)
    f.parts = shifted
    for t in f.texts:
        t['bbox'] = [t['bbox'][0], round(t['bbox'][1] - dy, 1),
                     t['bbox'][2], round(t['bbox'][3] - dy, 1)]
    f.leaders = [[a, round(b - dy, 1), c, round(d - dy, 1)] for a, b, c, d in f.leaders]
    f.bounds = [f.bounds[0], round(y0 - dy, 1), f.bounds[2], round(y1 - dy, 1)]
    f.h = int(round(y1 - dy + margin))
    # the background rect is regenerated by svg(), so only content moved
    return f


def emit(f: Fig, book: str, unit: int, slot: int):
    import cairosvg, yaml
    f = tighten(f)
    out = os.path.join(ROOT, 'figures', book)
    os.makedirs(out, exist_ok=True)
    base = os.path.join(out, f'u{unit:02d}-{slot}')
    svg = f.svg()
    open(base + '.svg', 'w', encoding='utf-8').write(svg)
    cairosvg.svg2png(bytestring=svg.encode(), write_to=base + '.png',
                     output_width=W, output_height=f.h, background_color='#FFFFFF')
    png = open(base + '.png', 'rb').read()
    _g = yaml.safe_load(open(os.path.join(ROOT, 'spec', 'golden.yaml'), encoding='utf-8'))
    _fg = _g['figures']
    _b = _fg.get('box_by_slot', {}).get(slot) or _fg.get(
        'box_default', {'w': 5.625, 'h': 1.9791666666666667})
    BW, BH, DPI = _b['w'], _b['h'], 96
    sc = min(BW / W, BH / f.h)
    placed = [math.floor(W * sc * DPI + 0.5) / DPI, math.floor(f.h * sc * DPI + 0.5) / DPI]
    meta = {'canvas': [W, f.h], 'bounds': [round(v, 1) for v in f.bounds],
            'texts': f.texts, 'leaders': f.leaders, 'cards': f.cards,
            'stages': f.stages, 'arrows': f.arrows, 'alt': f.alt,
            'placed_in': placed, 'sha256': hashlib.sha256(png).hexdigest()}
    json.dump(meta, open(base + '.json', 'w'), indent=1)
    return base, len(png), f.h
