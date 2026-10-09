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

W = 1440                 # the in-flow canvas: 1440 px printed 6.26 in wide
WFULL, HFULL = 2480, 3508   # A4 at 300 DPI, for a full-page image
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


def _wrap(words, size, maxw):
    lines, cur = [], ''
    for w in words:
        t = (cur + ' ' + w).strip()
        if not cur or tw(t, size) <= maxw:
            cur = t
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


class Fitted(list):
    """The lines `fit_lines` produced, remembering which the caller read.

    A figure job that calls `fit_lines` and then draws only `ll[0]` prints half
    a label and nothing can see it: G13 and G14 measure the glyphs that ARE
    drawn, and a line never drawn has no glyphs. That defect shipped in A2 in
    two jobs at once -- `grammar_contrast` cut four unit titles in half and
    `decision_fork` cut its question in every unit of both volumes -- and a
    grep found eight more call sites with the same shape.

    So the lines remember. `G33` builds every figure and fails on any job that
    produced a line and did not draw it, which is the whole class rather than
    the two instances that happened to be noticed.
    """

    def __init__(self, items):
        super().__init__(items)
        self.read: set[int] = set()

    def __getitem__(self, i):
        if isinstance(i, slice):
            self.read.update(range(*i.indices(len(self))))
            return list.__getitem__(self, i)
        self.read.add(i if i >= 0 else len(self) + i)
        return list.__getitem__(self, i)

    def __iter__(self):
        for k in range(len(self)):
            self.read.add(k)
            yield list.__getitem__(self, k)

    @property
    def dropped(self) -> list[str]:
        return [list.__getitem__(self, k) for k in range(len(self))
                if k not in self.read]


FITTED: list[Fitted] = []
COLLECT = False


def fit_reset():
    """Start recording. Collection is OFF by default and switched on only
    around a build that `G33` is about to inspect: a figure is drawn thousands
    of times in a mutation run, and keeping a `Fitted` object for every label
    of every one of them is an unbounded list that made the suite three times
    slower before anything read it."""
    global COLLECT
    COLLECT = True
    FITTED.clear()


def fit_dropped() -> list[str]:
    global COLLECT
    out = [ln for f in FITTED for ln in f.dropped]
    COLLECT = False
    FITTED.clear()
    return out


def fit_lines(label: str, maxw: float, size_hi: int = 34, size_lo: int = 22,
              max_lines: int = 2):
    """Largest size at or above the 22 px floor (check G13) that fits the label
    in at most `max_lines` lines. Shrinking below the floor is not an option,
    so a long label wraps instead.

    The old version gave up after two lines and returned the label as ONE
    over-wide line, which ran a discussion question clean off the canvas and
    across its neighbour's label. Giving up now means wrapping at the floor
    size into however many lines it takes: too tall is a layout problem a
    caller can see, too wide is a silent collision.
    """
    def out(lines, size):
        if not COLLECT:
            return lines, size
        f = Fitted(lines)
        FITTED.append(f)
        return f, size

    words = label.split()
    for size in range(size_hi, size_lo - 1, -2):
        if tw(label, size) <= maxw:
            return out([label], size)
        lines = _wrap(words, size, maxw)
        if len(lines) <= max_lines and all(tw(l, size) <= maxw for l in lines):
            return out(lines, size)
    return out(_wrap(words, size_lo, maxw), size_lo)


class Fig:
    def __init__(self, height: int, alt: str, width: int = W):
        self.h = height
        self.w = width
        self.alt = alt
        self.parts: list[str] = []
        self.texts: list[dict] = []
        self.leaders: list[list[float]] = []
        self.bounds = [width, height, 0, 0]
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
        return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{self.w}" height="{self.h}" '
                f'viewBox="0 0 {self.w} {self.h}">'
                f'<rect width="{self.w}" height="{self.h}" fill="{P["bg"]}"/>'
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
    # `stroke` was missing from both for the first sixty icons, so an icon that
    # wanted an outline in a colour other than ink raised a TypeError and the
    # renderer drew nothing. Five of the new glyphs hit it at once.
    def R(x, y, w, h, fill=P['blue'], r=8, sw=3, stroke=P['ink']):
        f.rect(cx + x * s, cy + y * s, w * s, h * s, fill=fill, r=r * s,
               sw=sw, stroke=stroke)
    def C(x, y, r, fill=P['blue'], sw=3, stroke=P['ink']):
        f.circle(cx + x * s, cy + y * s, r * s, fill=fill, sw=sw, stroke=stroke)
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
    elif name == 'bottle':
        R(-13, -16, 26, 50, fill=P['blue'], r=5)           # the body
        R(-6, -40, 12, 24, fill=P['blue'], r=3)            # the neck
        R(-9, -46, 18, 8, fill=P['tand'], r=3)             # the cap
        L(-7, 0, 7, 0, stroke=P['bg'], sw=3)               # the label
    elif name == 'bowl':
        f.path(f'M {cx-40*s:.1f} {cy-8*s:.1f} Q {cx:.1f} {cy+42*s:.1f} '
               f'{cx+40*s:.1f} {cy-8*s:.1f} Z', fill=P['tanl'])
        L(-44, -8, 44, -8, sw=4)                           # the rim
        L(-16, 30, 16, 30, stroke=P['tand'], sw=4)         # the foot
    elif name == 'coat':
        f.path(f'M {cx-30*s:.1f} {cy-28*s:.1f} L {cx:.1f} {cy-36*s:.1f} '
               f'L {cx+30*s:.1f} {cy-28*s:.1f} L {cx+34*s:.1f} {cy+34*s:.1f} '
               f'L {cx-34*s:.1f} {cy+34*s:.1f} Z', fill=P['deep'])
        L(0, -34, 0, 34, stroke=P['bg'], sw=4)             # the front edge
        C(8, -8, 5, fill=P['tand'], sw=0)                  # the buttons
        C(8, 10, 5, fill=P['tanl'], sw=0)
    elif name == 'needle':
        L(-30, 26, 26, -26, stroke=P['grey'], sw=5)
        C(28, -30, 7, fill=P['bg'], sw=4)                  # the eye
        f.path(f'M {cx-34*s:.1f} {cy+30*s:.1f} Q {cx-6*s:.1f} {cy+10*s:.1f} '
               f'{cx+2*s:.1f} {cy+34*s:.1f}', fill='none', stroke=P['tand'], sw=4)
    elif name == 'bin':
        R(-28, -24, 56, 58, fill=P['card'], r=5)
        R(-34, -34, 68, 12, fill=P['deep'], r=4)           # the lid
        L(-10, -40, 10, -40, sw=5)                         # the handle
        for k in (-12, 0, 12):
            L(k, -14, k, 26, stroke=P['rule'], sw=3)
    elif name == 'water':
        # every Q carries its full four coordinates and the path closes on the
        # start point: `Q x y Z` leaves the parser two arguments short.
        f.path(f'M {cx:.1f} {cy-38*s:.1f} '
               f'Q {cx+30*s:.1f} {cy+2*s:.1f} {cx+16*s:.1f} {cy+26*s:.1f} '
               f'Q {cx:.1f} {cy+42*s:.1f} {cx-16*s:.1f} {cy+26*s:.1f} '
               f'Q {cx-30*s:.1f} {cy+2*s:.1f} {cx:.1f} {cy-38*s:.1f} Z',
               fill=P['blue'])
        C(-6, 14, 7, fill=P['bg'], sw=0)                   # the highlight
    elif name == 'factory':
        R(-44, -10, 88, 44, fill=P['card'], r=4)
        R(-30, -40, 16, 30, fill=P['deep'], r=3)           # the chimney
        for k in (-8, 10, 28):
            f.path(f'M {cx+(k-14)*s:.1f} {cy-10*s:.1f} L {cx+(k-4)*s:.1f} '
                   f'{cy-26*s:.1f} L {cx+(k+6)*s:.1f} {cy-10*s:.1f} Z',
                   fill=P['blue'])
        L(-50, 34, 50, 34, sw=4)
    elif name == 'siren':
        R(-26, -10, 52, 30, fill=P['card'], r=6)           # the box
        f.path(f'M {cx-20*s:.1f} {cy-10*s:.1f} L {cx:.1f} {cy-40*s:.1f} '
               f'L {cx+20*s:.1f} {cy-10*s:.1f} Z', fill=P['tand'])
        for k, r in ((1, 30), (2, 42)):                    # the sound going out
            f.path(f'M {cx+r*s:.1f} {cy-26*s:.1f} Q {cx+(r+10)*s:.1f} {cy-6*s:.1f} '
                   f'{cx+r*s:.1f} {cy+14*s:.1f}', fill='none', stroke=P['ink'], sw=3)
        L(-30, 20, 30, 20, sw=4)
    elif name == 'lamp':
        f.path(f'M {cx-24*s:.1f} {cy-6*s:.1f} L {cx-12*s:.1f} {cy-34*s:.1f} '
               f'L {cx+12*s:.1f} {cy-34*s:.1f} L {cx+24*s:.1f} {cy-6*s:.1f} Z',
               fill=P['tan'])
        C(0, 4, 11, fill=P['tanl'], sw=3)
        L(0, 14, 0, 36, stroke=P['ink'], sw=5)
        L(-14, 36, 14, 36, sw=5)
    elif name == 'bag':
        R(-30, -12, 60, 46, fill=P['tan'], r=6)
        f.path(f'M {cx-16*s:.1f} {cy-12*s:.1f} Q {cx:.1f} {cy-44*s:.1f} '
               f'{cx+16*s:.1f} {cy-12*s:.1f}', fill='none', stroke=P['ink'], sw=5)
        L(-30, 6, 30, 6, stroke=P['tand'], sw=4)
    elif name == 'key':
        C(-20, 0, 13, fill=P['bg'], sw=4)
        L(-7, 0, 28, 0, sw=5)
        L(18, 0, 18, 14, sw=5)
        L(28, 0, 28, 12, sw=5)
    elif name == 'crack':
        R(-40, 10, 80, 24, fill=P['tanl'], r=3)            # the ground
        f.path(f'M {cx-20*s:.1f} {cy+10*s:.1f} L {cx-6*s:.1f} {cy+22*s:.1f} '
               f'L {cx+8*s:.1f} {cy+12*s:.1f} L {cx+20*s:.1f} {cy+26*s:.1f}',
               fill='none', stroke=P['ink'], sw=4)
        for k, dy in ((0, -22), (-18, -12), (18, -12)):    # the shake above it
            L(k, dy, k, dy - 14, stroke=P['tand'], sw=4)
    elif name == 'loom':
        R(-42, -34, 10, 68, fill=P['tand'], r=3)           # the uprights
        R(32, -34, 10, 68, fill=P['tand'], r=3)
        for k in range(-3, 4):                             # the warp threads
            L(k * 10, -28, k * 10, 28, stroke=P['blue'], sw=3)
        L(-42, -6, 42, -6, stroke=P['ink'], sw=5)          # the beater
        L(-42, 14, 42, 14, stroke=P['deep'], sw=5)
    elif name == 'cloth':
        R(-38, -30, 76, 60, fill=P['bg'], r=3)
        for k in range(3):
            R(-38, -30 + k * 20, 76, 10, fill=P['blue'], r=0, sw=0)
        for k in range(-3, 4):
            L(k * 11, -30, k * 11, 30, stroke=P['tand'], sw=3)
    elif name == 'plaque':
        R(-40, -26, 80, 52, fill=P['tand'], r=4)
        R(-32, -18, 64, 36, fill=P['tanl'], r=2)
        L(-22, -6, 22, -6, stroke=P['ink'], sw=4)
        L(-22, 6, 10, 6, stroke=P['ink'], sw=4)
    elif name == 'shoe':
        f.path(f'M {cx-40*s:.1f} {cy+20*s:.1f} L {cx-36*s:.1f} {cy-6*s:.1f} '
               f'Q {cx-10*s:.1f} {cy-14*s:.1f} {cx+6*s:.1f} {cy-2*s:.1f} '
               f'L {cx+36*s:.1f} {cy+8*s:.1f} L {cx+38*s:.1f} {cy+20*s:.1f} Z',
               fill=P['deep'])
        R(-40, 20, 24, 12, fill=P['ink'], r=2)             # the heel
        L(-30, 18, 30, 18, stroke=P['bg'], sw=3)
    elif name == 'envelope':
        R(-42, -26, 84, 52, fill=P['bg'], r=3)
        f.path(f'M {cx-42*s:.1f} {cy-26*s:.1f} L {cx:.1f} {cy+4*s:.1f} '
               f'L {cx+42*s:.1f} {cy-26*s:.1f}', fill='none', stroke=P['ink'], sw=4)
        R(20, -22, 18, 14, fill=P['tand'], r=2)            # the stamp corner
    elif name == 'stamp':
        R(-30, -34, 60, 68, fill=P['tanl'], r=3)
        R(-21, -25, 42, 50, fill=P['bg'], r=2)
        C(0, -4, 11, fill=P['blue'], sw=0)
        L(-13, 16, 13, 16, stroke=P['ink'], sw=4)
    elif name == 'newspaper':
        R(-42, -30, 84, 60, fill=P['bg'], r=3)
        R(-34, -22, 68, 10, fill=P['ink'], r=2)            # the masthead
        for k in range(4):
            L(-34, -4 + k * 9, 2, -4 + k * 9, stroke=P['rule'], sw=3)
            L(10, -4 + k * 9, 34, -4 + k * 9, stroke=P['rule'], sw=3)
    elif name == 'notebook':
        R(-32, -38, 64, 76, fill=P['card'], r=4)
        R(-32, -38, 12, 76, fill=P['deep'], r=4)           # the spine
        for k in range(5):
            L(-12, -24 + k * 13, 22, -24 + k * 13, stroke=P['rule'], sw=3)
    elif name == 'loudspeaker':
        f.path(f'M {cx-6*s:.1f} {cy-14*s:.1f} L {cx+26*s:.1f} {cy-34*s:.1f} '
               f'L {cx+26*s:.1f} {cy+14*s:.1f} L {cx-6*s:.1f} {cy-2*s:.1f} Z',
               fill=P['deep'])
        R(-22, -14, 16, 26, fill=P['blue'], r=3)
        L(6, 14, 6, 40, stroke=P['tand'], sw=5)            # the pole
        for r in (34, 46):
            f.path(f'M {cx+r*s:.1f} {cy-26*s:.1f} Q {cx+(r+10)*s:.1f} {cy-10*s:.1f} '
                   f'{cx+r*s:.1f} {cy+6*s:.1f}', fill='none', stroke=P['ink'], sw=3)
    elif name == 'horse':
        f.path(f'M {cx-34*s:.1f} {cy+4*s:.1f} L {cx+14*s:.1f} {cy+4*s:.1f} '
               f'L {cx+26*s:.1f} {cy-16*s:.1f} L {cx+38*s:.1f} {cy-14*s:.1f} '
               f'L {cx+30*s:.1f} {cy+2*s:.1f} L {cx+20*s:.1f} {cy+10*s:.1f} '
               f'L {cx-34*s:.1f} {cy+12*s:.1f} Z', fill=P['tand'])
        L(-24, 12, -28, 34, stroke=P['ink'], sw=5)
        L(-8, 12, -4, 34, stroke=P['ink'], sw=5)
        L(8, 12, 12, 34, stroke=P['ink'], sw=5)
        L(-34, 4, -40, -8, stroke=P['tand'], sw=5)         # the tail
    elif name == 'alarm':
        C(0, 2, 32, fill=P['card'])
        L(-24, -24, -34, -36, sw=5); L(24, -24, 34, -36, sw=5)
        L(0, 2, 0, -18, sw=5); L(0, 2, 14, 10, sw=5)
        L(-22, 32, -34, 46, sw=5); L(22, 32, 34, 46, sw=5)
    elif name == 'window':
        R(-34, -36, 68, 68, fill=P['blue'], r=4)
        L(0, -36, 0, 32); L(-34, -2, 34, -2)
        R(-42, 32, 84, 10, fill=P['tan'], r=3)
    elif name == 'radio':
        R(-40, -14, 80, 44, fill=P['card'], r=6)
        C(-18, 8, 13, fill=P['grey']); R(2, -4, 30, 10, fill=P['deep'], r=3)
        R(2, 12, 30, 8, fill=P['blue'], r=3)
        L(26, -14, 40, -42, sw=4); C(40, -44, 6, fill=P['ink'], sw=0)
    elif name == 'bread':
        f.path(f'M {cx-44*s:.1f} {cy+22*s:.1f} L {cx-44*s:.1f} {cy-4*s:.1f} '
               f'Q {cx-44*s:.1f} {cy-30*s:.1f} {cx-12*s:.1f} {cy-30*s:.1f} '
               f'L {cx+16*s:.1f} {cy-30*s:.1f} Q {cx+46*s:.1f} {cy-30*s:.1f} '
               f'{cx+46*s:.1f} {cy-2*s:.1f} L {cx+46*s:.1f} {cy+22*s:.1f} Z',
               fill=P['tanl'])
        L(-30, -8, -12, -8, stroke=P['tand']); L(-2, -8, 16, -8, stroke=P['tand'])
    elif name == 'question':
        C(0, 0, 34, fill=P['card'])
        f.path(f'M {cx-13*s:.1f} {cy-10*s:.1f} Q {cx-13*s:.1f} {cy-26*s:.1f} '
               f'{cx:.1f} {cy-26*s:.1f} Q {cx+14*s:.1f} {cy-26*s:.1f} '
               f'{cx+14*s:.1f} {cy-11*s:.1f} Q {cx+14*s:.1f} {cy-1*s:.1f} '
               f'{cx:.1f} {cy+5*s:.1f} L {cx:.1f} {cy+13*s:.1f}', sw=5)
        C(0, 24, 5, fill=P['ink'], sw=0)
    elif name == 'speech':
        R(-40, -34, 80, 50, fill=P['card'], r=12)
        f.path(f'M {cx-16*s:.1f} {cy+16*s:.1f} L {cx-6*s:.1f} {cy+38*s:.1f} '
               f'L {cx+8*s:.1f} {cy+16*s:.1f} Z', fill=P['card'], stroke=P['card'])
        L(-26, -18, 26, -18, stroke=P['deep']); L(-26, -4, 12, -4, stroke=P['deep'])
    elif name == 'pencil':
        f.path(f'M {cx-36*s:.1f} {cy+34*s:.1f} L {cx-28*s:.1f} {cy+8*s:.1f} '
               f'L {cx+24*s:.1f} {cy-44*s:.1f} L {cx+40*s:.1f} {cy-28*s:.1f} '
               f'L {cx-12*s:.1f} {cy+24*s:.1f} Z', fill=P['tanl'])
        L(-28, 8, -12, 24, sw=3)
    elif name == 'street':
        R(-50, 6, 100, 30, fill=P['grey'], r=3)
        for k in (-34, -6, 22):
            L(k, 21, k + 16, 21, stroke=P['bg'], sw=4)
        R(-46, -34, 26, 40, fill=P['card'], r=3)
        R(-12, -22, 24, 28, fill=P['blue'], r=3)
        R(20, -40, 28, 46, fill=P['deep'], r=3)
    # ---- home and building (Unit 2)
    elif name == 'balcony':
        R(-44, -40, 88, 30, fill=P['card'], r=3)          # the wall behind
        R(-30, -34, 24, 18, fill=P['blue'], r=2)          # the window
        R(-46, -10, 92, 8, fill=P['tan'], r=3)            # the floor
        for k in range(-5, 6):
            L(k * 8, -2, k * 8, 26, stroke=P['grey'], sw=3)
        L(-46, 26, 46, 26, sw=5)
    elif name == 'cupboard':
        R(-34, -44, 68, 88, fill=P['tanl'], r=4)
        L(0, -44, 0, 44, sw=4)
        C(-7, 0, 5, fill=P['ink'], sw=0); C(7, 0, 5, fill=P['ink'], sw=0)
        L(-34, -8, 34, -8, stroke=P['tand'], sw=3)
    elif name == 'shelf':
        for dy in (-28, 4, 36):
            R(-46, dy, 92, 8, fill=P['tan'], r=3)
        R(-38, -48, 12, 20, fill=P['blue'], r=2)
        R(-22, -44, 10, 16, fill=P['deep'], r=2)
        R(-40, -14, 14, 18, fill=P['tanl'], r=2)
        R(10, -12, 16, 16, fill=P['card'], r=2)
    elif name == 'stairs':
        for k in range(4):
            R(-46 + k * 24, 26 - k * 18, 24, 18, fill=P['card'], r=2)
        L(-46, 44, 46, 44, sw=4)
    elif name == 'lift':
        R(-32, -44, 64, 88, fill=P['card'], r=4)
        L(0, -44, 0, 36, sw=3)
        f.path(f'M {cx-18*s:.1f} {cy-26*s:.1f} L {cx-11*s:.1f} {cy-36*s:.1f} '
               f'L {cx-4*s:.1f} {cy-26*s:.1f} Z', fill=P['accent'], stroke=P['accent'])
        f.path(f'M {cx+4*s:.1f} {cy+26*s:.1f} L {cx+11*s:.1f} {cy+36*s:.1f} '
               f'L {cx+18*s:.1f} {cy+26*s:.1f} Z', fill=P['deep'], stroke=P['deep'])
    elif name == 'roof':
        f.path(f'M {cx-50*s:.1f} {cy+6*s:.1f} L {cx:.1f} {cy-36*s:.1f} '
               f'L {cx+50*s:.1f} {cy+6*s:.1f} Z', fill=P['tand'])
        R(-40, 6, 80, 30, fill=P['card'], r=3)
        R(14, -26, 12, 22, fill=P['grey'], r=2)
    elif name == 'garden':
        R(-50, 20, 100, 18, fill=P['accent'], r=4)
        f.path(f'M {cx-22*s:.1f} {cy+20*s:.1f} L {cx-22*s:.1f} {cy-6*s:.1f}')
        C(-22, -20, 17, fill=P['accent'])
        f.path(f'M {cx+20*s:.1f} {cy+20*s:.1f} L {cx+20*s:.1f} {cy+2*s:.1f}')
        C(20, -8, 12, fill=P['tanl'])
    elif name == 'chair':
        R(-26, -44, 52, 48, fill=P['tanl'], r=5)
        R(-30, 2, 60, 12, fill=P['tan'], r=4)
        L(-24, 14, -24, 42, sw=5); L(24, 14, 24, 42, sw=5)
    elif name == 'table':
        R(-48, -12, 96, 14, fill=P['tan'], r=4)
        L(-36, 2, -36, 40, sw=5); L(36, 2, 36, 40, sw=5)
        R(-14, -26, 28, 14, fill=P['card'], r=3)
    elif name == 'door':
        R(-30, -46, 60, 92, fill=P['deep'], r=4)
        R(-24, -40, 48, 30, fill=P['card'], r=2)
        C(18, 4, 5, fill=P['tanl'], sw=2)
    elif name == 'coins':
        C(-16, 10, 20, fill=P['tanl']); C(14, 2, 20, fill=P['tan'])
        C(-2, -22, 20, fill=P['tanl'])
        L(-8, -22, 4, -22, stroke=P['tand'], sw=4)
    elif name == 'recycling':
        for k in range(3):
            a0 = math.radians(-90 + k * 120)
            a1 = math.radians(-90 + k * 120 + 86)
            x0, y0 = math.cos(a0) * 30, math.sin(a0) * 30
            x1, y1 = math.cos(a1) * 30, math.sin(a1) * 30
            f.path(f'M {cx+x0*s:.1f} {cy+y0*s:.1f} L {cx+x1*s:.1f} {cy+y1*s:.1f}',
                   stroke=P['accent'], sw=8)
            a2 = math.radians(-90 + k * 120 + 86)
            tx, ty = math.cos(a2) * 30, math.sin(a2) * 30
            px, py = -math.sin(a2), math.cos(a2)
            f.path(f'M {cx+(tx+px*14)*s:.1f} {cy+(ty+py*14)*s:.1f} '
                   f'L {cx+(tx+px*-14)*s:.1f} {cy+(ty+py*-14)*s:.1f} '
                   f'L {cx+(tx+px*0+math.cos(a2)*20)*s:.1f} '
                   f'{cy+(ty+py*0+math.sin(a2)*20)*s:.1f} Z',
                   fill=P['accent'], stroke=P['accent'], sw=2)
    elif name == 'box':
        R(-38, -16, 76, 52, fill=P['tanl'], r=4)
        R(-42, -30, 84, 16, fill=P['tan'], r=3)
        L(0, -30, 0, 36, stroke=P['tand'], sw=4)

    # ---- town and journey (Units 3, 9)
    elif name == 'market':
        for k, col in ((-30, P['tan']), (0, P['card']), (30, P['tanl'])):
            f.path(f'M {cx+(k-18)*s:.1f} {cy-14*s:.1f} L {cx+k*s:.1f} {cy-32*s:.1f} '
                   f'L {cx+(k+18)*s:.1f} {cy-14*s:.1f} Z', fill=col)
            R(k - 16, -14, 32, 10, fill=P['grey'], r=2)
            L(k - 12, -4, k - 12, 24, sw=3); L(k + 12, -4, k + 12, 24, sw=3)
        L(-50, 24, 50, 24, sw=5)
    elif name == 'crossing':
        R(-50, -26, 100, 52, fill=P['grey'], r=3)
        for k in range(-2, 3):
            R(k * 20 - 7, -26, 14, 52, fill=P['bg'], r=1, sw=0)
        L(-50, -34, 50, -34, stroke=P['ink'], sw=4)
        L(-50, 34, 50, 34, stroke=P['ink'], sw=4)
    elif name == 'bench':
        R(-46, -10, 92, 12, fill=P['tan'], r=4)
        R(-46, -30, 92, 10, fill=P['tanl'], r=4)
        L(-34, 2, -34, 32, sw=5); L(34, 2, 34, 32, sw=5)
        L(-46, 32, -22, 32, sw=4); L(22, 32, 46, 32, sw=4)
    elif name == 'library':
        R(-46, -16, 92, 52, fill=P['card'], r=4)
        f.path(f'M {cx-50*s:.1f} {cy-16*s:.1f} L {cx:.1f} {cy-40*s:.1f} '
               f'L {cx+50*s:.1f} {cy-16*s:.1f} Z', fill=P['deep'])
        for k in (-26, -8, 10):
            R(k, -4, 14, 30, fill=P['tanl'], r=2)
        R(28, -4, 12, 30, fill=P['blue'], r=2)
    elif name == 'traffic':
        R(-16, -46, 32, 84, fill=P['card'], r=8)
        C(0, -28, 9, fill=P['tand'], sw=2)
        C(0, -4, 9, fill=P['tanl'], sw=2)
        C(0, 20, 9, fill=P['accent'], sw=2)
        L(0, 38, 0, 50, sw=5)
    elif name == 'crowd':
        for dx, dy, r in ((-30, -8, 13), (0, -16, 15), (30, -8, 13)):
            C(dx, dy - 18, r * 0.7, fill=P['blue']); R(dx - r, dy, 2 * r, 34, r=8)
    elif name == 'ticket':
        R(-46, -22, 92, 44, fill=P['tanl'], r=6)
        C(-46, 0, 8, fill=P['bg'], sw=2); C(46, 0, 8, fill=P['bg'], sw=2)
        L(-20, -14, -20, 14, stroke=P['tand'], sw=3)
        L(-8, -6, 30, -6, stroke=P['tand'], sw=3)
        L(-8, 8, 20, 8, stroke=P['tand'], sw=3)
    elif name == 'timetable':
        R(-40, -44, 80, 88, fill=P['card'], r=5)
        L(-40, -26, 40, -26, sw=3)
        for k in range(3):
            L(-30, -10 + k * 18, -8, -10 + k * 18, stroke=P['deep'], sw=4)
            L(4, -10 + k * 18, 30, -10 + k * 18, stroke=P['grey'], sw=4)
    elif name == 'junction':
        R(-50, -11, 100, 22, fill=P['grey'], r=2)
        R(-11, -50, 22, 100, fill=P['grey'], r=2)
        for k in (-36, 30):
            L(k, 0, k + 12, 0, stroke=P['bg'], sw=4)
            L(0, k, 0, k + 12, stroke=P['bg'], sw=4)
    elif name == 'roundabout':
        C(0, 0, 40, fill='none', sw=16)
        C(0, 0, 40, fill='none', stroke=P['grey'], sw=12)
        C(0, 0, 13, fill=P['accent'], sw=3)
        L(0, -40, 0, -52, stroke=P['grey'], sw=12)
        L(0, 40, 0, 52, stroke=P['grey'], sw=12)
        L(-52, 0, -40, 0, stroke=P['grey'], sw=12)
    elif name == 'lane':
        R(-50, -36, 100, 72, fill=P['grey'], r=3)
        L(0, -36, 0, 36, stroke=P['bg'], sw=4)
        for k in (-26, 26):
            L(k, -30, k, -14, stroke=P['bg'], sw=3)
    elif name == 'square':
        R(-46, -34, 92, 68, fill=P['card'], r=4)
        R(-40, -28, 24, 24, fill=P['blue'], r=2)
        R(16, -28, 24, 24, fill=P['deep'], r=2)
        C(0, 14, 12, fill=P['accent'])
        L(-30, 30, 30, 30, stroke=P['rule'], sw=4)
    elif name == 'arrow_right':
        L(-40, 0, 22, 0, sw=8)
        f.path(f'M {cx+16*s:.1f} {cy-18*s:.1f} L {cx+42*s:.1f} {cy:.1f} '
               f'L {cx+16*s:.1f} {cy+18*s:.1f} Z', fill=P['accent'], stroke=P['accent'])
    elif name == 'arrow_up':
        L(0, 40, 0, -22, sw=8)
        f.path(f'M {cx-18*s:.1f} {cy-16*s:.1f} L {cx:.1f} {cy-42*s:.1f} '
               f'L {cx+18*s:.1f} {cy-16*s:.1f} Z', fill=P['accent'], stroke=P['accent'])
    elif name == 'arrow_down':
        L(0, -40, 0, 22, sw=8)
        f.path(f'M {cx-18*s:.1f} {cy+16*s:.1f} L {cx:.1f} {cy+42*s:.1f} '
               f'L {cx+18*s:.1f} {cy+16*s:.1f} Z', fill=P['deep'], stroke=P['deep'])

    # ---- food and shopping (Unit 4)
    elif name == 'basket':
        f.path(f'M {cx-40*s:.1f} {cy-10*s:.1f} L {cx+40*s:.1f} {cy-10*s:.1f} '
               f'L {cx+28*s:.1f} {cy+34*s:.1f} L {cx-28*s:.1f} {cy+34*s:.1f} Z',
               fill=P['tanl'])
        for k in (-16, 0, 16):
            L(k, -10, k * 0.7, 34, stroke=P['tand'], sw=3)
        f.path(f'M {cx-20*s:.1f} {cy-10*s:.1f} Q {cx:.1f} {cy-46*s:.1f} '
               f'{cx+20*s:.1f} {cy-10*s:.1f}', sw=5)
    elif name == 'aisle':
        R(-48, -40, 36, 80, fill=P['card'], r=3)
        R(12, -40, 36, 80, fill=P['card'], r=3)
        for dy in (-26, -4, 18):
            L(-48, dy, -12, dy, stroke=P['rule'], sw=3)
            L(12, dy, 48, dy, stroke=P['rule'], sw=3)
        R(-8, -40, 16, 80, fill=P['grey'], r=2)
    elif name == 'receipt':
        f.path(f'M {cx-30*s:.1f} {cy-46*s:.1f} L {cx+30*s:.1f} {cy-46*s:.1f} '
               f'L {cx+30*s:.1f} {cy+40*s:.1f} L {cx+18*s:.1f} {cy+30*s:.1f} '
               f'L {cx+6*s:.1f} {cy+40*s:.1f} L {cx-6*s:.1f} {cy+30*s:.1f} '
               f'L {cx-18*s:.1f} {cy+40*s:.1f} L {cx-30*s:.1f} {cy+30*s:.1f} Z',
               fill=P['card'])
        for k in range(3):
            L(-20, -30 + k * 16, 20, -30 + k * 16, stroke=P['deep'], sw=3)
        L(-20, 14, 4, 14, stroke=P['tand'], sw=4)
    elif name == 'fridge':
        R(-30, -46, 60, 92, fill=P['card'], r=6)
        L(-30, -10, 30, -10, sw=4)
        L(18, -28, 18, -18, sw=5); L(18, 2, 18, 14, sw=5)
    elif name == 'scales':
        L(0, -24, 0, 22, sw=5); L(-34, 22, 34, 22, sw=5)
        R(-40, -34, 80, 12, fill=P['grey'], r=5)
        R(-20, -50, 40, 16, fill=P['tanl'], r=4)
        C(0, -4, 10, fill=P['accent'], sw=3)
    elif name == 'slice':
        f.path(f'M {cx-44*s:.1f} {cy+26*s:.1f} L {cx+6*s:.1f} {cy-30*s:.1f} '
               f'L {cx+44*s:.1f} {cy+26*s:.1f} Z', fill=P['tanl'])
        L(-18, 12, 18, 12, stroke=P['tand'], sw=3)
        C(10, 0, 5, fill=P['tand'], sw=0)
    elif name == 'sugar':
        R(-34, -12, 68, 44, fill=P['card'], r=4)
        R(-22, -32, 16, 20, fill=P['bg'], r=2)
        R(2, -32, 16, 20, fill=P['bg'], r=2)
        L(-34, 6, 34, 6, stroke=P['rule'], sw=3)
    elif name == 'apple':
        C(-11, 6, 25, fill=P['tand']); C(11, 6, 25, fill=P['tand'])
        L(0, -16, 2, -38, sw=5)
        f.path(f'M {cx+2*s:.1f} {cy-34*s:.1f} Q {cx+24*s:.1f} {cy-44*s:.1f} '
               f'{cx+20*s:.1f} {cy-24*s:.1f} Z', fill=P['accent'])

    # ---- weekend and places (Unit 5)
    elif name == 'museum':
        f.path(f'M {cx-50*s:.1f} {cy-14*s:.1f} L {cx:.1f} {cy-40*s:.1f} '
               f'L {cx+50*s:.1f} {cy-14*s:.1f} Z', fill=P['deep'])
        for k in (-34, -12, 10, 32):
            R(k, -8, 12, 38, fill=P['card'], r=1)
        R(-50, 30, 100, 10, fill=P['grey'], r=3)
    elif name == 'picnic':
        R(-46, -6, 92, 40, fill=P['tanl'], r=4)
        for k in range(-2, 3):
            L(k * 20, -6, k * 20, 34, stroke=P['tand'], sw=3)
        C(-20, -18, 11, fill=P['card']); R(4, -26, 26, 18, fill=P['tan'], r=3)
    elif name == 'concert':
        C(-16, 24, 13, fill=P['ink']); C(22, 16, 13, fill=P['ink'])
        L(-4, 24, -4, -34, sw=5); L(34, 16, 34, -42, sw=5)
        f.path(f'M {cx-4*s:.1f} {cy-34*s:.1f} L {cx+34*s:.1f} {cy-42*s:.1f} '
               f'L {cx+34*s:.1f} {cy-28*s:.1f} L {cx-4*s:.1f} {cy-20*s:.1f} Z',
               fill=P['accent'])
    elif name == 'guest':
        C(-16, -30, 15); R(-34, -12, 36, 42, r=12)
        R(8, 2, 32, 28, fill=P['tanl'], r=4)
        L(24, 2, 24, -8, sw=4)
    elif name == 'beach':
        C(26, -26, 18, fill=P['tanl'])
        R(-50, 6, 100, 12, fill=P['tanl'], r=4)
        f.path(f'M {cx-50*s:.1f} {cy+22*s:.1f} Q {cx-25*s:.1f} {cy+12*s:.1f} '
               f'{cx:.1f} {cy+22*s:.1f} Q {cx+25*s:.1f} {cy+32*s:.1f} '
               f'{cx+50*s:.1f} {cy+22*s:.1f}', stroke=P['blue'], sw=5)
        f.path(f'M {cx-50*s:.1f} {cy+36*s:.1f} Q {cx-25*s:.1f} {cy+26*s:.1f} '
               f'{cx:.1f} {cy+36*s:.1f} Q {cx+25*s:.1f} {cy+46*s:.1f} '
               f'{cx+50*s:.1f} {cy+36*s:.1f}', stroke=P['blue'], sw=5)
    elif name == 'forest':
        for dx, sc in ((-30, 1.0), (4, 1.3), (34, 0.9)):
            f.path(f'M {cx+(dx-20*sc)*s:.1f} {cy+16*s:.1f} '
                   f'L {cx+dx*s:.1f} {cy-(34*sc)*s:.1f} '
                   f'L {cx+(dx+20*sc)*s:.1f} {cy+16*s:.1f} Z', fill=P['accent'])
            L(dx, 16, dx, 34, stroke=P['tand'], sw=5)
        L(-50, 34, 50, 34, sw=4)
    elif name == 'village':
        f.path(f'M {cx-44*s:.1f} {cy+4*s:.1f} L {cx-26*s:.1f} {cy-18*s:.1f} '
               f'L {cx-8*s:.1f} {cy+4*s:.1f} Z', fill=P['tand'])
        R(-40, 4, 32, 26, fill=P['card'], r=2)
        f.path(f'M {cx+2*s:.1f} {cy-6*s:.1f} L {cx+24*s:.1f} {cy-34*s:.1f} '
               f'L {cx+46*s:.1f} {cy-6*s:.1f} Z', fill=P['tand'])
        R(6, -6, 36, 36, fill=P['card'], r=2)
        L(-50, 30, 50, 30, sw=4)
    elif name == 'path':
        f.path(f'M {cx-18*s:.1f} {cy+38*s:.1f} Q {cx+10*s:.1f} {cy+6*s:.1f} '
               f'{cx-6*s:.1f} {cy-14*s:.1f} Q {cx-20*s:.1f} {cy-32*s:.1f} '
               f'{cx+8*s:.1f} {cy-40*s:.1f}', stroke=P['tanl'], sw=16)
        f.path(f'M {cx-18*s:.1f} {cy+38*s:.1f} Q {cx+10*s:.1f} {cy+6*s:.1f} '
               f'{cx-6*s:.1f} {cy-14*s:.1f} Q {cx-20*s:.1f} {cy-32*s:.1f} '
               f'{cx+8*s:.1f} {cy-40*s:.1f}', stroke=P['tand'], sw=3)

    # ---- travel (Unit 6)
    elif name == 'suitcase':
        R(-40, -22, 80, 60, fill=P['tan'], r=6)
        f.path(f'M {cx-14*s:.1f} {cy-22*s:.1f} L {cx-14*s:.1f} {cy-36*s:.1f} '
               f'L {cx+14*s:.1f} {cy-36*s:.1f} L {cx+14*s:.1f} {cy-22*s:.1f}', sw=5)
        L(-40, 0, 40, 0, stroke=P['tand'], sw=4)
        R(-6, -8, 12, 16, fill=P['card'], r=2)
    elif name == 'coach':
        R(-48, -24, 96, 46, fill=P['deep'], r=8)
        for k in (-36, -14, 8):
            R(k, -16, 18, 16, fill=P['card'], r=2)
        R(30, -16, 14, 16, fill=P['card'], r=2)
        C(-28, 24, 10, fill=P['ink']); C(28, 24, 10, fill=P['ink'])
    elif name == 'gate':
        R(-46, -40, 92, 16, fill=P['ink'], r=3)
        R(-40, -18, 30, 56, fill=P['card'], r=3)
        R(10, -18, 30, 56, fill=P['card'], r=3)
        f.path(f'M {cx-4*s:.1f} {cy+2*s:.1f} L {cx+6*s:.1f} {cy+12*s:.1f} '
               f'L {cx-4*s:.1f} {cy+22*s:.1f}', stroke=P['accent'], sw=5)
    elif name == 'wallet':
        R(-40, -26, 80, 52, fill=P['tand'], r=6)
        R(-40, -26, 80, 14, fill=P['tan'], r=6)
        R(6, -6, 30, 18, fill=P['card'], r=3)
        C(20, 3, 5, fill=P['ink'], sw=0)
    elif name == 'airport':
        R(-50, 16, 100, 12, fill=P['grey'], r=3)
        f.path(f'M {cx-40*s:.1f} {cy+4*s:.1f} L {cx+28*s:.1f} {cy-10*s:.1f} '
               f'L {cx+40*s:.1f} {cy-2*s:.1f} L {cx-30*s:.1f} {cy+14*s:.1f} Z',
               fill=P['blue'])
        R(-26, -34, 34, 22, fill=P['card'], r=3)
        L(-20, -34, -20, -46, sw=4)
    elif name == 'luggage':
        R(-44, -10, 42, 44, fill=P['tan'], r=5)
        R(2, 4, 40, 30, fill=P['tanl'], r=5)
        f.path(f'M {cx-34*s:.1f} {cy-10*s:.1f} L {cx-34*s:.1f} {cy-26*s:.1f} '
               f'L {cx-12*s:.1f} {cy-26*s:.1f} L {cx-12*s:.1f} {cy-10*s:.1f}', sw=4)
        L(-44, 10, -2, 10, stroke=P['tand'], sw=3)
    elif name == 'delay':
        C(0, 0, 36, fill=P['card'])
        L(0, 0, 0, -22, sw=5); L(0, 0, 18, 6, sw=5)
        f.path(f'M {cx+22*s:.1f} {cy+22*s:.1f} L {cx+44*s:.1f} {cy+22*s:.1f}',
               stroke=P['tand'], sw=6)
        f.path(f'M {cx+36*s:.1f} {cy+14*s:.1f} L {cx+46*s:.1f} {cy+22*s:.1f} '
               f'L {cx+36*s:.1f} {cy+30*s:.1f} Z', fill=P['tand'], stroke=P['tand'])
    elif name == 'charger':
        R(-16, -40, 32, 34, fill=P['card'], r=5)
        L(-8, -40, -8, -50, sw=5); L(8, -40, 8, -50, sw=5)
        f.path(f'M {cx:.1f} {cy-6*s:.1f} L {cx:.1f} {cy+16*s:.1f}', sw=5)
        R(-20, 16, 40, 24, fill=P['deep'], r=5)
    elif name == 'taxi':
        R(-46, -14, 92, 36, fill=P['tanl'], r=8)
        R(-30, -32, 56, 20, fill=P['tan'], r=5)
        R(-10, -46, 20, 12, fill=P['ink'], r=3)
        C(-28, 24, 10, fill=P['ink']); C(28, 24, 10, fill=P['ink'])

    # ---- choosing and repairing (Units 7, 10)
    elif name == 'battery':
        R(-40, -20, 72, 40, fill=P['card'], r=5)
        R(32, -8, 10, 16, fill=P['ink'], r=3)
        R(-34, -13, 18, 26, fill=P['accent'], r=2, sw=0)
        R(-14, -13, 18, 26, fill=P['accent'], r=2, sw=0)
    elif name == 'screen':
        R(-44, -34, 88, 56, fill=P['card'], r=5)
        R(-36, -27, 72, 42, fill=P['blue'], r=2, sw=0)
        L(0, 22, 0, 34, sw=5); L(-22, 38, 22, 38, sw=5)
    elif name == 'pricetag':
        f.path(f'M {cx-40*s:.1f} {cy-6*s:.1f} L {cx+4*s:.1f} {cy-40*s:.1f} '
               f'L {cx+40*s:.1f} {cy+6*s:.1f} L {cx-4*s:.1f} {cy+40*s:.1f} Z',
               fill=P['tanl'])
        C(2, -20, 7, fill=P['bg'], sw=3)
    elif name == 'star':
        pts = []
        for k in range(10):
            a = math.radians(-90 + k * 36)
            r = 40 if k % 2 == 0 else 17
            pts.append(f'{cx+math.cos(a)*r*s:.1f} {cy+math.sin(a)*r*s:.1f}')
        f.path('M ' + ' L '.join(pts) + ' Z', fill=P['tanl'])
    elif name == 'spanner':
        f.path(f'M {cx-34*s:.1f} {cy+34*s:.1f} L {cx+16*s:.1f} {cy-16*s:.1f}',
               stroke=P['grey'], sw=14)
        C(22, -22, 18, fill=P['bg'], sw=12)
        C(22, -22, 18, fill='none', stroke=P['grey'], sw=10)
        R(28, -44, 18, 16, fill=P['bg'], r=2, sw=0)
    elif name == 'glue':
        R(-16, -14, 32, 48, fill=P['tanl'], r=5)
        R(-9, -38, 18, 24, fill=P['card'], r=4)
        f.path(f'M {cx:.1f} {cy-38*s:.1f} L {cx:.1f} {cy-50*s:.1f}', sw=5)
        L(-10, 4, 10, 4, stroke=P['tand'], sw=4)
    elif name == 'layer':
        R(-40, 14, 80, 16, fill=P['tand'], r=3)
        R(-34, -4, 68, 16, fill=P['tan'], r=3)
        R(-28, -22, 56, 16, fill=P['tanl'], r=3)
        R(-22, -40, 44, 16, fill=P['card'], r=3)
    elif name == 'brush':
        R(-8, -46, 16, 44, fill=P['tand'], r=4)
        R(-14, -2, 28, 12, fill=P['grey'], r=3)
        f.path(f'M {cx-14*s:.1f} {cy+10*s:.1f} L {cx-10*s:.1f} {cy+40*s:.1f} '
               f'L {cx+10*s:.1f} {cy+40*s:.1f} L {cx+14*s:.1f} {cy+10*s:.1f} Z',
               fill=P['blue'])
    elif name == 'pour':
        f.path(f'M {cx-40*s:.1f} {cy-34*s:.1f} L {cx-6*s:.1f} {cy-34*s:.1f} '
               f'L {cx-14*s:.1f} {cy-4*s:.1f} L {cx-32*s:.1f} {cy-4*s:.1f} Z',
               fill=P['card'])
        f.path(f'M {cx-10*s:.1f} {cy-30*s:.1f} Q {cx+16*s:.1f} {cy-10*s:.1f} '
               f'{cx+16*s:.1f} {cy+16*s:.1f}', stroke=P['blue'], sw=7)
        f.path(f'M {cx-6*s:.1f} {cy+16*s:.1f} L {cx+40*s:.1f} {cy+16*s:.1f} '
               f'L {cx+32*s:.1f} {cy+40*s:.1f} L {cx+2*s:.1f} {cy+40*s:.1f} Z',
               fill=P['card'])
    elif name == 'mix':
        f.path(f'M {cx-38*s:.1f} {cy-6*s:.1f} L {cx+38*s:.1f} {cy-6*s:.1f} '
               f'L {cx+26*s:.1f} {cy+32*s:.1f} L {cx-26*s:.1f} {cy+32*s:.1f} Z',
               fill=P['card'])
        L(14, -10, 34, -46, sw=6)
        f.path(f'M {cx-20*s:.1f} {cy+6*s:.1f} Q {cx:.1f} {cy+20*s:.1f} '
               f'{cx+20*s:.1f} {cy+6*s:.1f}', stroke=P['tanl'], sw=6)
    elif name == 'press':
        R(-34, 8, 68, 20, fill=P['tanl'], r=4)
        f.path(f'M {cx-24*s:.1f} {cy-6*s:.1f} L {cx+24*s:.1f} {cy-6*s:.1f}',
               stroke=P['grey'], sw=12)
        L(-14, -14, -14, -40, stroke=P['accent'], sw=6)
        L(14, -14, 14, -40, stroke=P['accent'], sw=6)
        f.path(f'M {cx-22*s:.1f} {cy-32*s:.1f} L {cx-14*s:.1f} {cy-44*s:.1f} '
               f'L {cx-6*s:.1f} {cy-32*s:.1f} Z', fill=P['accent'], stroke=P['accent'])

    # ---- helping and learning (Unit 8)
    elif name == 'hands':
        f.path(f'M {cx-44*s:.1f} {cy+2*s:.1f} L {cx-10*s:.1f} {cy-14*s:.1f} '
               f'L {cx-4*s:.1f} {cy:.1f} L {cx-38*s:.1f} {cy+16*s:.1f} Z',
               fill=P['tanl'])
        f.path(f'M {cx+44*s:.1f} {cy+2*s:.1f} L {cx+10*s:.1f} {cy-14*s:.1f} '
               f'L {cx+4*s:.1f} {cy:.1f} L {cx+38*s:.1f} {cy+16*s:.1f} Z',
               fill=P['tan'])
        C(0, 0, 11, fill=P['accent'], sw=3)
    elif name == 'guitar':
        C(6, 18, 24, fill=P['tand']); C(-6, -6, 18, fill=P['tand'])
        C(2, 10, 8, fill=P['bg'], sw=3)
        f.path(f'M {cx-16*s:.1f} {cy-18*s:.1f} L {cx-36*s:.1f} {cy-44*s:.1f}', sw=7)
        R(-46, -50, 16, 12, fill=P['card'], r=2)
    elif name == 'teacher':
        C(-20, -32, 15); R(-38, -14, 36, 42, r=12)
        R(4, -34, 44, 36, fill=P['deep'], r=3)
        L(12, -24, 40, -24, stroke=P['bg'], sw=3)
        L(12, -14, 32, -14, stroke=P['bg'], sw=3)
    elif name == 'certificate':
        R(-42, -36, 84, 58, fill=P['card'], r=4)
        L(-30, -20, 30, -20, stroke=P['deep'], sw=3)
        L(-30, -8, 12, -8, stroke=P['deep'], sw=3)
        C(22, 10, 12, fill=P['tanl'], sw=3)
        f.path(f'M {cx+16*s:.1f} {cy+20*s:.1f} L {cx+14*s:.1f} {cy+42*s:.1f} '
               f'L {cx+22*s:.1f} {cy+34*s:.1f} L {cx+30*s:.1f} {cy+42*s:.1f} '
               f'L {cx+28*s:.1f} {cy+20*s:.1f} Z', fill=P['tand'])
    elif name == 'tick':
        C(0, 0, 36, fill=P['bg'], stroke=P['accent'], sw=6)
        f.path(f'M {cx-16*s:.1f} {cy+2*s:.1f} L {cx-4*s:.1f} {cy+16*s:.1f} '
               f'L {cx+18*s:.1f} {cy-16*s:.1f}', stroke=P['accent'], sw=8)
    elif name == 'cross':
        C(0, 0, 36, fill=P['bg'], stroke=P['tand'], sw=6)
        L(-14, -14, 14, 14, stroke=P['tand'], sw=8)
        L(14, -14, -14, 14, stroke=P['tand'], sw=8)
    elif name == 'magnifier':
        C(-6, -6, 26, fill=P['bg'], sw=7)
        f.path(f'M {cx+12*s:.1f} {cy+12*s:.1f} L {cx+36*s:.1f} {cy+36*s:.1f}', sw=11)
    elif name == 'calendar':
        R(-40, -32, 80, 72, fill=P['card'], r=5)
        R(-40, -32, 80, 18, fill=P['ink'], r=5, sw=0)
        L(-22, -40, -22, -26, sw=5); L(22, -40, 22, -26, sw=5)
        for r0 in range(2):
            for c0 in range(4):
                R(-30 + c0 * 18, -6 + r0 * 18, 12, 12, fill=P['blue'], r=2, sw=2)
    elif name == 'list':
        R(-38, -42, 76, 84, fill=P['card'], r=5)
        for k in range(3):
            R(-28, -30 + k * 22, 12, 12, fill=P['bg'], stroke=P['accent'], r=2, sw=3)
            L(-10, -24 + k * 22, 28, -24 + k * 22, stroke=P['deep'], sw=4)
    elif name == 'one_thing':
        R(-22, -22, 44, 44, fill=P['blue'], r=6)
    elif name == 'many_things':
        R(-46, -10, 30, 30, fill=P['blue'], r=5)
        R(-13, -10, 30, 30, fill=P['deep'], r=5)
        R(20, -10, 30, 30, fill=P['blue'], r=5)
        R(-30, -30, 30, 30, fill=P['card'], r=5)
        R(4, -30, 30, 30, fill=P['card'], r=5)
    elif name == 'escalator':
        f.path(f'M {cx-44*s:.1f} {cy+34*s:.1f} L {cx+10*s:.1f} {cy-26*s:.1f} '
               f'L {cx+44*s:.1f} {cy-26*s:.1f}', stroke=P['grey'], sw=12)
        for k in range(4):
            R(-36 + k * 16, 20 - k * 16, 14, 8, fill=P['card'], r=2, sw=2)
        f.path(f'M {cx-6*s:.1f} {cy-34*s:.1f} L {cx+6*s:.1f} {cy-48*s:.1f} '
               f'L {cx+18*s:.1f} {cy-34*s:.1f} Z',
               fill=P['accent'], stroke=P['accent'])
    elif name == 'ruler':
        R(-48, -14, 96, 28, fill=P['tanl'], r=3)
        for k in range(-3, 4):
            L(k * 14, -14, k * 14, -14 + (14 if k % 2 == 0 else 8),
              stroke=P['tand'], sw=3)
    elif name == 'pin':
        f.path(f'M {cx:.1f} {cy+44*s:.1f} Q {cx-28*s:.1f} {cy+2*s:.1f} '
               f'{cx-28*s:.1f} {cy-12*s:.1f} Q {cx-28*s:.1f} {cy-44*s:.1f} '
               f'{cx:.1f} {cy-44*s:.1f} Q {cx+28*s:.1f} {cy-44*s:.1f} '
               f'{cx+28*s:.1f} {cy-12*s:.1f} Q {cx+28*s:.1f} {cy+2*s:.1f} '
               f'{cx:.1f} {cy+44*s:.1f} Z', fill=P['tand'])
        C(0, -14, 11, fill=P['bg'], sw=3)
    elif name == 'chain':
        R(-42, -14, 44, 28, fill=P['bg'], r=14, sw=7, stroke=P['grey'])
        R(-2, -14, 44, 28, fill=P['bg'], r=14, sw=7, stroke=P['ink'])
    elif name == 'palette':
        f.path(f'M {cx-40*s:.1f} {cy+6*s:.1f} Q {cx-40*s:.1f} {cy-36*s:.1f} '
               f'{cx:.1f} {cy-36*s:.1f} Q {cx+42*s:.1f} {cy-36*s:.1f} '
               f'{cx+42*s:.1f} {cy-2*s:.1f} Q {cx+42*s:.1f} {cy+16*s:.1f} '
               f'{cx+18*s:.1f} {cy+12*s:.1f} Q {cx+2*s:.1f} {cy+10*s:.1f} '
               f'{cx+6*s:.1f} {cy+26*s:.1f} Q {cx+8*s:.1f} {cy+38*s:.1f} '
               f'{cx-14*s:.1f} {cy+34*s:.1f} Q {cx-40*s:.1f} {cy+28*s:.1f} '
               f'{cx-40*s:.1f} {cy+6*s:.1f} Z', fill=P['card'])
        C(-22, -12, 7, fill=P['tand'], sw=0); C(-2, -20, 7, fill=P['accent'], sw=0)
        C(18, -12, 7, fill=P['blue'], sw=0); C(26, 4, 7, fill=P['tanl'], sw=0)
    elif name == 'network':
        for a0 in (0, 72, 144, 216, 288):
            r0 = math.radians(a0 - 90)
            L(0, 0, math.cos(r0) * 36, math.sin(r0) * 36, stroke=P['blue'], sw=5)
            C(math.cos(r0) * 36, math.sin(r0) * 36, 11, fill=P['card'])
        C(0, 0, 13, fill=P['accent'])
    elif name == 'ladder':
        L(-22, -46, -22, 46, sw=7); L(22, -46, 22, 46, sw=7)
        for k in range(-2, 3):
            L(-22, k * 22, 22, k * 22, stroke=P['tand'], sw=5)
    elif name == 'mountain':
        f.path(f'M {cx-50*s:.1f} {cy+30*s:.1f} L {cx-12*s:.1f} {cy-34*s:.1f} '
               f'L {cx+14*s:.1f} {cy+6*s:.1f} L {cx+26*s:.1f} {cy-10*s:.1f} '
               f'L {cx+50*s:.1f} {cy+30*s:.1f} Z', fill=P['deep'])
        f.path(f'M {cx-22*s:.1f} {cy-18*s:.1f} L {cx-12*s:.1f} {cy-34*s:.1f} '
               f'L {cx-2*s:.1f} {cy-18*s:.1f} Z', fill=P['bg'], stroke=P['bg'])
    elif name == 'zigzag':
        f.path(f'M {cx-44*s:.1f} {cy+34*s:.1f} L {cx+34*s:.1f} {cy+14*s:.1f} '
               f'L {cx-34*s:.1f} {cy-10*s:.1f} L {cx+40*s:.1f} {cy-34*s:.1f}',
               stroke=P['tand'], sw=8)
    elif name == 'tyre':
        C(0, 0, 40, fill=P['ink'])
        C(0, 0, 20, fill=P['card'], sw=4)
        for a0 in range(0, 360, 45):
            r0 = math.radians(a0)
            L(math.cos(r0) * 24, math.sin(r0) * 24,
              math.cos(r0) * 36, math.sin(r0) * 36, stroke=P['card'], sw=4)
    elif name == 'umbrella':
        f.path(f'M {cx-46*s:.1f} {cy-4*s:.1f} Q {cx-46*s:.1f} {cy-44*s:.1f} '
               f'{cx:.1f} {cy-44*s:.1f} Q {cx+46*s:.1f} {cy-44*s:.1f} '
               f'{cx+46*s:.1f} {cy-4*s:.1f} Z', fill=P['tand'])
        L(0, -4, 0, 32, sw=5)
        f.path(f'M {cx:.1f} {cy+32*s:.1f} Q {cx+16*s:.1f} {cy+44*s:.1f} '
               f'{cx+18*s:.1f} {cy+26*s:.1f}', sw=5)
    elif name == 'vegetable':
        f.path(f'M {cx-6*s:.1f} {cy+40*s:.1f} L {cx-22*s:.1f} {cy-14*s:.1f} '
               f'L {cx+10*s:.1f} {cy-14*s:.1f} Z', fill=P['tand'])
        f.path(f'M {cx-18*s:.1f} {cy-14*s:.1f} L {cx-34*s:.1f} {cy-40*s:.1f}',
               stroke=P['accent'], sw=6)
        f.path(f'M {cx-6*s:.1f} {cy-14*s:.1f} L {cx-2*s:.1f} {cy-44*s:.1f}',
               stroke=P['accent'], sw=6)
        f.path(f'M {cx+4*s:.1f} {cy-14*s:.1f} L {cx+24*s:.1f} {cy-36*s:.1f}',
               stroke=P['accent'], sw=6)
    elif name == 'before_now':
        L(-44, 0, 44, 0, sw=5)
        C(26, 0, 12, fill=P['card'])
        f.path(f'M {cx-20*s:.1f} {cy-16*s:.1f} L {cx-44*s:.1f} {cy:.1f} '
               f'L {cx-20*s:.1f} {cy+16*s:.1f} Z',
               fill=P['deep'], stroke=P['deep'])
        C(-6, 0, 9, fill=P['tan'])
    elif name == 'warning':
        f.path(f'M {cx:.1f} {cy-42*s:.1f} L {cx+46*s:.1f} {cy+34*s:.1f} '
               f'L {cx-46*s:.1f} {cy+34*s:.1f} Z', fill=P['tanl'])
        R(-5, -20, 10, 32, fill=P['ink'], r=4, sw=0)
        C(0, 22, 6, fill=P['ink'], sw=0)
    elif name == 'mask':
        f.path(f'M {cx-36*s:.1f} {cy-30*s:.1f} L {cx+36*s:.1f} {cy-30*s:.1f} '
               f'L {cx+30*s:.1f} {cy+10*s:.1f} Q {cx:.1f} {cy+42*s:.1f} '
               f'{cx-30*s:.1f} {cy+10*s:.1f} Z', fill=P['card'])
        C(-14, -10, 6, fill=P['ink'], sw=0); C(14, -10, 6, fill=P['ink'], sw=0)
        f.path(f'M {cx-14*s:.1f} {cy+14*s:.1f} Q {cx:.1f} {cy+24*s:.1f} '
               f'{cx+14*s:.1f} {cy+14*s:.1f}', sw=4)
    elif name == 'runner':
        C(14, -34, 13)
        f.path(f'M {cx+12*s:.1f} {cy-20*s:.1f} L {cx-6*s:.1f} {cy+2*s:.1f} '
               f'L {cx+8*s:.1f} {cy+18*s:.1f} L {cx+4*s:.1f} {cy+42*s:.1f}', sw=8)
        f.path(f'M {cx-6*s:.1f} {cy+2*s:.1f} L {cx-30*s:.1f} {cy+16*s:.1f}', sw=7)
        f.path(f'M {cx+6*s:.1f} {cy-14*s:.1f} L {cx+34*s:.1f} {cy-4*s:.1f}', sw=7)
    elif name == 'hammer':
        R(-10, -12, 20, 54, fill=P['tand'], r=4)
        f.path(f'M {cx-40*s:.1f} {cy-38*s:.1f} L {cx+34*s:.1f} {cy-38*s:.1f} '
               f'L {cx+34*s:.1f} {cy-16*s:.1f} L {cx-26*s:.1f} {cy-16*s:.1f} '
               f'L {cx-40*s:.1f} {cy-26*s:.1f} Z', fill=P['grey'])
    elif name == 'microphone':
        R(-14, -44, 28, 48, fill=P['grey'], r=14)
        for k in range(3):
            L(-10, -36 + k * 12, 10, -36 + k * 12, stroke=P['card'], sw=3)
        f.path(f'M {cx-26*s:.1f} {cy-4*s:.1f} Q {cx:.1f} {cy+26*s:.1f} '
               f'{cx+26*s:.1f} {cy-4*s:.1f}', sw=5)
        L(0, 18, 0, 40, sw=5); L(-16, 42, 16, 42, sw=5)
    elif name == 'tray':
        f.path(f'M {cx-48*s:.1f} {cy+10*s:.1f} L {cx+48*s:.1f} {cy+10*s:.1f} '
               f'L {cx+38*s:.1f} {cy+24*s:.1f} L {cx-38*s:.1f} {cy+24*s:.1f} Z',
               fill=P['grey'])
        C(-18, -4, 13, fill=P['card']); R(2, -18, 28, 14, fill=P['tanl'], r=3)
        f.path(f'M {cx:.1f} {cy+24*s:.1f} L {cx:.1f} {cy+40*s:.1f}', sw=6)
    elif name == 'temple':
        for k in (-34, -12, 10, 32):
            R(k, -6, 12, 34, fill=P['card'], r=1)
        f.path(f'M {cx-48*s:.1f} {cy-6*s:.1f} L {cx:.1f} {cy-38*s:.1f} '
               f'L {cx+48*s:.1f} {cy-6*s:.1f} Z', fill=P['tand'])
        R(-48, 28, 96, 12, fill=P['grey'], r=3)
    elif name == 'tooth':
        f.path(f'M {cx-30*s:.1f} {cy-26*s:.1f} Q {cx:.1f} {cy-42*s:.1f} '
               f'{cx+30*s:.1f} {cy-26*s:.1f} Q {cx+36*s:.1f} {cy+6*s:.1f} '
               f'{cx+16*s:.1f} {cy+40*s:.1f} Q {cx+6*s:.1f} {cy+10*s:.1f} '
               f'{cx-6*s:.1f} {cy+10*s:.1f} Q {cx-16*s:.1f} {cy+40*s:.1f} '
               f'{cx-36*s:.1f} {cy+6*s:.1f} Z', fill=P['card'])
    elif name == 'painting':
        R(-44, -34, 88, 68, fill=P['tand'], r=3)           # the frame
        R(-35, -26, 70, 52, fill=P['bg'], r=1)
        f.path(f'M {cx-35*s:.1f} {cy+26*s:.1f} L {cx-10*s:.1f} {cy-8*s:.1f} '
               f'L {cx+12*s:.1f} {cy+26*s:.1f} Z', fill=P['tanl'])
        C(18, -12, 8, fill=P['blue'], sw=0)
    # ---------------------------------------------------- B1 Unit 1: electricity
    elif name == 'bulb':
        C(0, -14, 24, fill=P['tanl'])
        R(-10, 10, 20, 16, fill=P['grey'], r=3)
        L(-8, 30, 8, 30, sw=4)
        for a, b in ((-30, -34), (0, -44), (30, -34)):
            L(a * 0.7, b * 0.7, a, b, stroke=P['tand'], sw=3)
    elif name == 'switch':
        R(-22, -30, 44, 60, fill=P['card'], r=6)
        R(-11, -18, 22, 22, fill=P['bg'], r=3)
        L(-11, 4, 11, 4, sw=3)
    elif name == 'meter':
        R(-34, -30, 68, 60, fill=P['grey'], r=5)
        R(-26, -22, 52, 24, fill=P['bg'], r=3)
        for k in range(4):
            L(-20 + k * 13, -20, -20 + k * 13, 0, stroke=P['rule'], sw=2)
        C(-16, 16, 6, fill=P['accent'], sw=2)
        C(2, 16, 6, fill=P['bg'], sw=2)
    elif name == 'cable':
        f.path(f'M {cx-44*s:.1f} {cy+18*s:.1f} C {cx-16*s:.1f} {cy-26*s:.1f} '
               f'{cx+16*s:.1f} {cy+26*s:.1f} {cx+44*s:.1f} {cy-18*s:.1f}',
               stroke=P['ink'], sw=9 * s, fill='none')
        C(-44, 18, 8, fill=P['tand'])
        C(44, -18, 8, fill=P['tand'])
    elif name == 'spark':
        f.path(f'M {cx-6*s:.1f} {cy-40*s:.1f} L {cx+16*s:.1f} {cy-40*s:.1f} '
               f'L {cx+2*s:.1f} {cy-6*s:.1f} L {cx+22*s:.1f} {cy-6*s:.1f} '
               f'L {cx-10*s:.1f} {cy+40*s:.1f} L {cx-2*s:.1f} {cy+6*s:.1f} '
               f'L {cx-22*s:.1f} {cy+6*s:.1f} Z',
               fill=P['accent'], stroke=P['ink'], sw=3)
    elif name == 'road':
        R(-46, -16, 92, 32, fill=P['grey'], r=3)
        for k in range(-2, 3):
            R(k * 20 - 7, -3, 14, 6, fill=P['bg'], r=1, sw=0)
    elif name == 'laptop':
        R(-34, -30, 68, 44, fill=P['card'], r=4)
        R(-27, -24, 54, 32, fill=P['blue'], r=2, sw=0)
        f.path(f'M {cx-44*s:.1f} {cy+14*s:.1f} L {cx+44*s:.1f} {cy+14*s:.1f} '
               f'L {cx+36*s:.1f} {cy+26*s:.1f} L {cx-36*s:.1f} {cy+26*s:.1f} Z',
               fill=P['grey'], stroke=P['ink'], sw=3)
    elif name == 'ear':
        f.path(f'M {cx+14*s:.1f} {cy-34*s:.1f} C {cx-30*s:.1f} {cy-40*s:.1f} '
               f'{cx-34*s:.1f} {cy+18*s:.1f} {cx-6*s:.1f} {cy+36*s:.1f} '
               f'C {cx+6*s:.1f} {cy+42*s:.1f} {cx+10*s:.1f} {cy+26*s:.1f} '
               f'{cx+2*s:.1f} {cy+14*s:.1f} C {cx-8*s:.1f} {cy:.1f} '
               f'{cx+22*s:.1f} {cy-6*s:.1f} {cx+14*s:.1f} {cy-34*s:.1f} Z',
               fill=P['tanl'], stroke=P['ink'], sw=3)
    else:
        # This used to draw a plain grey disc, which is the worst possible
        # answer: a misspelled icon name produced a card with a featureless
        # blob on it and NOTHING could see the mistake -- G13, G14 and G16 all
        # read the text and the bounds, and a grey circle has the right bounds
        # and no text. Refuse instead. Every call site names a real glyph.
        raise KeyError(f'no icon named {name!r}')


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


def unit_opener_page(number, title, grammar, can_do, icons, alt=''):
    """N.1 as a full A4 page, portrait, 2480 x 3508 at 300 DPI.

    Not a rescale of unit_opener: a landscape canvas cannot fill a portrait
    page without distortion. The elements are the same -- number, title, the
    one grammar point, the five topic icons, the can-do promises -- laid out
    for a page a learner meets before any text, at a size that reads at arm's
    length rather than five small glyphs in a row.
    """
    WP, HP = WFULL, HFULL
    f = Fig(HP, alt, width=WP)

    # masthead
    f.rect(0, 0, WP, 760, fill=P['ink'], stroke=P['ink'], r=0, sw=0)
    f.text('ENGLISH FOR DAILY LIFE', 190, 230, size=52, fill=P['blue'],
           anchor='start', on=P['ink'])
    f.text(f'UNIT {number}', 190, 370, size=96, fill=P['tanl'],
           anchor='start', on=P['ink'])
    tl, tsz = fit_lines(title, WP - 380, size_hi=140, size_lo=74)
    ty = 540
    for ln in tl[:2]:
        f.text(ln, 190, ty, size=tsz, fill=P['bg'], anchor='start', on=P['ink'])
        ty += tsz + 18

    # the one grammar point
    f.rect(190, 940, WP - 380, 420, fill=P['card'], stroke='#CED4DD', r=28, sw=4)
    f.text('THE GRAMMAR', 250, 1050, size=46, fill=P['ink'], anchor='start', on=P['card'])
    gl, gsz = fit_lines(grammar, WP - 560, size_hi=86, size_lo=54)
    gy = 1180
    for ln in gl[:2]:
        f.text(ln, 250, gy, size=gsz, anchor='start', on=P['card'])
        gy += gsz + 16

    # the topic, as icons large enough to read across a room
    f.text('IN THIS UNIT', 190, 1570, size=46, fill=P['ink'], anchor='start')
    n = max(1, len(icons))
    span = WP - 460
    for i, ic in enumerate(icons):
        icon(f, ic, 230 + span * ((i + 0.5) / n), 1790, s=1.55)

    # what the learner will be able to do
    f.line(190, 2080, WP - 190, 2080, stroke=P['rule'], sw=5)
    f.text('By the end of this unit you can', 190, 2210, size=58,
           fill=P['ink'], anchor='start')
    y = 2380
    for line in can_do[:3]:
        ln, sz2 = fit_lines(line, WP - 560, size_hi=56, size_lo=40)
        f.rect(196, y - 48, 56, 56, fill=P['bg'], stroke=P['accent'], r=10, sw=7)
        for j, piece in enumerate(ln[:2]):
            f.text(piece, 310, y + j * (sz2 + 10), size=sz2, anchor='start')
        y += 130 + (len(ln[:2]) - 1) * (sz2 + 10)

    # foot rule and the track note, mirroring the cover
    f.line(190, HP - 430, WP - 190, HP - 430, stroke=P['rule'], sw=5)
    f.text('Core track: Warm Up and Parts 1 to 6', 190, HP - 330, size=44,
           fill=P['ink'], anchor='start')
    f.text('Plus track: Parts 7 to 10, optional', 190, HP - 250, size=44,
           fill=P['ink'], anchor='start')
    f.rect(0, HP - 90, WP, 90, fill=P['ink'], stroke=P['ink'], r=0, sw=0)
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
        # fit_lines may return two lines and only ll[0] used to be drawn, so a
        # label one word too long was SILENTLY cut in half -- 'Amina was closing
        # the shop' printed as 'Amina was closing the'. Nothing could see it:
        # G13 and G14 measure the glyphs that ARE drawn. Draw every line and
        # grow the header band to hold them. A one-line label is untouched, so
        # every A2 figure stays byte-identical.
        ll, lsz = fit_lines(label, w - 40, size_hi=38, size_lo=28)
        hdr = 76 if len(ll) == 1 else 76 + (lsz + 6) * (len(ll) - 1)
        f.rect(x, 50, w, hdr, fill=P['ink'], stroke='none', r=18, sw=0)
        for i, ln in enumerate(ll):
            f.text(ln, x + w / 2, 102 + i * (lsz + 6), size=lsz,
                   fill=P['bg'], on=P['ink'])
        # The body starts below whatever the header turned out to be. It used
        # to start at a fixed 180, so a two-line title printed its second line
        # straight through the form text -- dark ink on the dark header band,
        # with `on=P['card']` in the metadata, so G22 read a contrast that was
        # not there. 50 + 76 + 54 is 180, so a one-line header is unchanged.
        fy = 50 + hdr + 54
        fl, fsz = fit_lines(form, w - 50, size_hi=32, size_lo=24)
        for i, ln in enumerate(fl[:2]):
            f.text(ln, x + w / 2, fy + i * (fsz + 8), size=fsz, fill=P['ink'], on=P['card'])
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
        # Every line, stacked UPWARD from the marker, so a two-line `when`
        # like 'morning, afternoon, night' keeps its second half instead of
        # losing it silently. One line is unchanged, at y - 58.
        wl, wsz = fit_lines(when, slot - 16, size_hi=34, size_lo=24)
        for j, ln in enumerate(wl):
            f.text(ln, x, y - 58 - (len(wl) - 1 - j) * (wsz + 6),
                   size=wsz, on=P['card'])
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
        tl, tsz = fit_lines(title, w - 40, size_hi=34, size_lo=22, max_lines=2)
        for j, ln in enumerate(tl):
            f.text(ln, x + w / 2, 94 + j * (tsz + 4) - (len(tl) - 1) * 6,
                   size=tsz, fill=P['bg'], on=P['ink'])
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
        # the label was set at a fixed 30 px and ran into the example column
        # as soon as a step was called something longer than "Offer help"
        ll, lsz = fit_lines(label, 450, size_hi=30, size_lo=22, max_lines=2)
        for j, ln in enumerate(ll):
            f.text(ln, pad + 120, y + bh / 2 + 11 - (len(ll) - 1) * 16
                   + j * 32, size=lsz, anchor='start', on=P['card'])
        el, esz = fit_lines(example, W - 2 * pad - 640, size_hi=26, size_lo=22,
                            max_lines=2)
        for j, ln in enumerate(el):
            f.text(ln, pad + 600, y + bh / 2 + 9 - (len(el) - 1) * 15
                   + j * 30, size=esz, fill=P['ink'],
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


# ------------------------------------------- figure jobs added for the 41 slots
# Fifteen new jobs. The pedagogical job of each slot is set out in
# 00-VISUAL-PLAN.md section 4; these draw them. Two standing constraints shaped
# every one of them:
#   * every word drawn has to appear in the unit's own text (check G18), which
#     is why nothing here renders a syllable, a part-of-speech name or a word
#     like "seconds" that the unit does not use. Shape and position carry that
#     meaning instead.
#   * no glyph under 22 px and no label box touching another (G13, G14), so
#     each job computes its own cell size and calls fit_lines rather than
#     taking a size on trust.

def _numchip(f: Fig, cx, cy, n, r=26):
    """The numbered disc that ties a card to a numbered item in the task."""
    f.circle(cx, cy, r, fill=P['ink'], stroke=P['ink'], sw=0)
    f.text(str(n), cx, cy + r * 0.40, size=max(22, int(r * 1.25)),
           fill=P['bg'], on=P['ink'])


def _blank_line(f: Fig, x0, y, x1):
    """A rule the learner writes on. Not decoration: where there is no line,
    learners write in the margin and the page stops being usable."""
    f.line(x0, y, x1, y, stroke=P['rule'], sw=3)


def word_grid(cells, height=520, cols=5, alt=''):
    """Picture cards for a matching task: the task's own item number, the word,
    and the thing the word means drawn beneath it, so the meaning can be met
    before the English is secure. It differs from category_set in carrying the
    item numbers, which is what makes it usable while answering rather than
    after."""
    f = Fig(height, alt)
    rows = math.ceil(len(cells) / cols)
    pad, gap = 54, 26
    cw = (W - 2 * pad - gap * (cols - 1)) / cols
    ch = (height - 2 * 44 - gap * (rows - 1)) / rows
    for i, (word, ic) in enumerate(cells):
        r, c = divmod(i, cols)
        x = pad + c * (cw + gap)
        y = 44 + r * (ch + gap)
        f.rect(x, y, cw, ch, fill=P['card'], stroke='#CED4DD', r=16, sw=3)
        _numchip(f, x + 34, y + 34, i + 1, r=22)
        icon(f, ic, x + cw / 2, y + ch * 0.56,
             s=min(1.2, ch * 0.30 / 56, cw * 0.40 / 56))
        lines, size = fit_lines(word, cw - 24, size_hi=30)
        base = y + ch - 22 - (len(lines) - 1) * (size + 5)
        for j, ln in enumerate(lines):
            f.text(ln, x + cw / 2, base + j * (size + 5), size=size, on=P['card'])
        f.cards += 1
    return f


def bank_strip(items, height=400, cols=None, alt=''):
    """The word-bank items as icons, in bank order, so a gap-fill has something
    to point at. The order is the bank's own: the task prints the bank in that
    order and a reordered figure would be a second puzzle on top of the first.

    `cols` wraps a long bank onto two rows. The spiral review's bank is eight
    words, two of which are "present continuous"; across one row each cell gets
    145 px and the label cannot be set above the 22 px floor, so a single strip
    is not an option there."""
    f = Fig(height, alt)
    n = len(items)
    cols = cols or n
    rows = math.ceil(n / cols)
    pad, gap = 54, 24
    cw = (W - 2 * pad - gap * (cols - 1)) / cols
    f.rect(pad - 16, 40, W - 2 * pad + 32, height - 90, fill=P['card'],
           stroke='#CED4DD', r=18, sw=3)
    ch = (height - 148 - gap * (rows - 1)) / rows
    for i, (word, ic) in enumerate(items):
        r, c = divmod(i, cols)
        x = pad + c * (cw + gap)
        y = 70 + r * (ch + gap)
        f.rect(x, y, cw, ch, fill=P['bg'], stroke=P['rule'], r=12, sw=3)
        icon(f, ic, x + cw / 2, y + ch * 0.44,
             s=min(1.15, cw * 0.36 / 56, ch * 0.32 / 56))
        lines, size = fit_lines(word, cw - 20, size_hi=30)
        base = y + ch - 22 - (len(lines) - 1) * (size + 5)
        for j, ln in enumerate(lines):
            f.text(ln, x + cw / 2, base + j * (size + 5), size=size, on=P['bg'])
        f.cards += 1
    return f


def sound_shape(rows, height=520, alt=''):
    """Stress drawn as shape. `rows` = (word, [syllable, ...], stressed_index).

    The syllables are measured and never written: a syllable is not a word, so
    rendering one would fail G18 in every unit in the book. Each syllable gets a
    bar above its own span of the printed word -- tall and accented where the
    stress falls, short and pale elsewhere -- and the pattern repeats at the
    right in the big-dot / small-dot notation a teacher can read aloud at a
    glance. Pronunciation is the one thing prose genuinely cannot show, and
    every unit has a pronunciation sub-section that had no figure at all."""
    f = Fig(height, alt)
    n = len(rows)
    pad = 56
    rh = (height - 2 * 44 - (n - 1) * 16) / n
    for i, (word, syls, st) in enumerate(rows):
        y = 44 + i * (rh + 16)
        f.rect(pad, y, W - 2 * pad, rh, fill=P['card'], stroke='#CED4DD', r=14, sw=3)
        size = 40
        while tw(word, size) > 460 and size > 26:
            size -= 2
        x0 = pad + 56
        bar_base = y + rh * 0.46
        for k, syl in enumerate(syls):
            w0 = tw(''.join(syls[:k]), size)
            w1 = tw(''.join(syls[:k + 1]), size)
            tall = (k == st)
            bh2 = 26 if tall else 11
            f.rect(x0 + w0 + 2, bar_base - bh2, max(10.0, w1 - w0 - 4), bh2,
                   fill=P['accent'] if tall else P['blue'],
                   stroke=P['ink'], r=4, sw=2)
        f.text(word, x0, y + rh * 0.84, size=size, anchor='start', on=P['card'])
        dx = W - pad - 70 - (len(syls) - 1) * 54
        for k in range(len(syls)):
            f.circle(dx + k * 54, y + rh * 0.52, 17 if k == st else 9,
                     fill=P['accent'] if k == st else P['blue'], sw=3)
        f.cards += 1
    return f


def sound_groups(groups, height=460, alt=''):
    """Words sorted by the sound they end in, or by how strong a form is.

    Four of the ten units teach syllable stress and get `sound_shape`; this is
    for the ones that teach a sound -- the three ways to say an `-ed` ending,
    the weak and strong forms of one word. The sound is the column head and
    the words sit under it, which is the shape the learner has to hold in
    their head anyway.
    """
    f = Fig(height, alt)
    n = len(groups)
    pad, gap = 56, 28
    cw = (W - 2 * pad - gap * (n - 1)) / n
    ch = height - 2 * 44
    for i, (sound, words) in enumerate(groups):
        x = pad + i * (cw + gap)
        f.rect(x, 44, cw, ch, fill=P['card'], stroke='#CED4DD', r=16, sw=3)
        f.rect(x, 44, cw, 76, fill=P['ink'], stroke=P['ink'], r=16, sw=0)
        sl, ssz = fit_lines(sound, cw - 36, size_hi=36, size_lo=24)
        f.text(sl[0], x + cw / 2, 96, size=ssz, fill=P['bg'], on=P['ink'])
        y = 168
        for w in words[:4]:
            wl, wsz = fit_lines(w, cw - 36, size_hi=30, size_lo=22, max_lines=2)
            for j, ln in enumerate(wl):
                f.text(ln, x + cw / 2, y + j * (wsz + 6), size=wsz, on=P['card'])
            y += 30 + len(wl) * (wsz + 6)
        f.cards += 1
    return f


def annotated_lines(lines, height=460, alt=''):
    """Sentences with the target form ringed. `lines` = (sentence, phrase).

    The Notice task says "underline the verbs"; this is what a correct
    underlining looks like, which the prose version left the learner to guess.
    The ring is positioned by measuring the sentence prefix, so it lands on the
    phrase however the text is set."""
    f = Fig(height, alt)
    n = len(lines)
    pad = 56
    rh = (height - 2 * 44 - (n - 1) * 14) / n
    for i, (sent, phrase) in enumerate(lines):
        y = 44 + i * (rh + 14)
        f.rect(pad, y, W - 2 * pad, rh, fill=P['bg'], stroke=P['rule'], r=12, sw=3)
        size = 32
        while tw(sent, size) > W - 2 * pad - 170 and size > 22:
            size -= 2
        x0 = pad + 86
        base = y + rh / 2 + size * 0.36
        at = sent.find(phrase)
        if at >= 0:
            px = x0 + tw(sent[:at], size)
            pw = tw(phrase, size)
            f.rect(px - 10, base - size * 1.02, pw + 20, size * 1.46,
                   fill=P['card'], stroke=P['accent'], r=size * 0.7, sw=4)
        f.text(sent, x0, base, size=size, anchor='start',
               on=P['card'] if at >= 0 else P['bg'])
        _numchip(f, pad + 40, y + rh / 2, i + 1, r=22)
    return f


def sort_bins(bins, items, height=560, alt=''):
    """A two-bin sort with the bins left empty. The chips are the task's items
    and the bins are its two columns; which chip goes where IS the exercise, so
    the figure deliberately does not place them. Prose turned a sorting task
    into a list, which is the one shape a sort cannot be done in."""
    pad = 56
    cn = len(items)
    cw = (W - 2 * pad - 18 * (cn - 1)) / cn
    # Measure the chips first: a chip that needs two lines used to print one
    # and drop the other, which is eleven of A2's twenty sort tasks. The whole
    # figure then grows by what the chips grew, so the bins keep their height
    # and their fourth writing line instead of being pushed off the canvas.
    fit = [fit_lines(it, cw - 28, size_hi=28) for it in items]
    nl = max((len(l) for l, _ in fit), default=1)
    chip_h = 86 + (nl - 1) * 34
    drop = chip_h - 86
    bw = (W - 2 * pad - 40 * (len(bins) - 1)) / len(bins)
    hdrs = [fit_lines(b, bw - 44, size_hi=34, size_lo=24) for b in bins]
    hh = 72 + (max((len(l) for l, _ in hdrs), default=1) - 1) * 40
    # The bin has to reach past its fourth writing line. It did not before,
    # by eight pixels, which is why the last line sat on the border.
    height = max(height + drop, 496 + drop + hh)

    f = Fig(height, alt)
    for i, (it, (ll, sz)) in enumerate(zip(items, fit)):
        x = pad + i * (cw + 18)
        f.rect(x, 40, cw, chip_h, fill=P['bg'], stroke=P['ink'],
               r=min(43, chip_h / 2), sw=3)
        base = 40 + chip_h / 2 + sz * 0.36 - (len(ll) - 1) * (sz + 6) / 2
        for j, ln in enumerate(ll):
            f.text(ln, x + cw / 2, base + j * (sz + 6), size=sz, on=P['bg'])
        f.cards += 1
    # sized from how many bins there are: a hard-coded 2 ran a third bin
    # clean off the canvas with nothing to catch it but G16.
    for k, (b, (bl, bsz)) in enumerate(zip(bins, hdrs)):
        x = pad + k * (bw + 40)
        f.rect(x, 190 + drop, bw, height - 240 - drop, fill=P['card'],
               stroke='#CED4DD', r=18, sw=3)
        f.rect(x, 190 + drop, bw, hh, fill=P['ink'], stroke=P['ink'], r=18, sw=0)
        for j, ln in enumerate(bl):
            f.text(ln, x + bw / 2, 238 + drop + j * (bsz + 6), size=bsz,
                   fill=P['bg'], on=P['ink'])
        for j in range(4):
            _blank_line(f, x + 40, 326 + drop + (hh - 72) + j * 54, x + bw - 40)
    return f


def rx0(pad, half):
    """Where the right-hand column starts, needed before the row loop so
    `error_pairs` can measure both halves before it sizes a row."""
    return pad + half + 94


def error_pairs(rows, height=520, alt=''):
    """The shape of a correction: the wrong form struck through on the left, the
    right one on the right. `rows` = (wrong, right_or_None); a row whose right
    side is None draws a writing line instead. That is the point -- the figure
    models the first correction and leaves the rest to the learner, rather than
    printing the answers to the task it sits above."""
    n = len(rows)
    pad = 54
    half = (W - 2 * pad) / 2 - 30
    # Measure first. The rows used to be a fixed share of a fixed height and
    # both halves drew only their first two lines, so a long wrong-form -- 'the
    # lights was going out.' -- printed without its end. Size the row from the
    # tallest thing in it instead.
    fits = [(fit_lines(w, half - 100, size_hi=28),
             fit_lines(r, W - pad - rx0(pad, half) - 90, size_hi=28) if r else None)
            for w, r in rows]
    nl = max(max(len(a[0]), len(b[0]) if b else 1) for a, b in fits)
    rh = max((height - 2 * 42 - (n - 1) * 14) / n, 34 * nl + 44)
    height = max(height, int(2 * 42 + (n - 1) * 14 + rh * n))
    f = Fig(height, alt)
    for i, ((wrong, right), ((wl, wsz), rfit)) in enumerate(zip(rows, fits)):
        y = 42 + i * (rh + 14)
        cy = y + rh / 2
        f.rect(pad, y, W - 2 * pad, rh, fill=P['bg'], stroke=P['rule'], r=12, sw=3)
        f.circle(pad + 44, cy, 20, fill=P['bg'], stroke=P['tand'], sw=4)
        f.line(pad + 34, cy - 10, pad + 54, cy + 10, stroke=P['tand'], sw=4)
        f.line(pad + 54, cy - 10, pad + 34, cy + 10, stroke=P['tand'], sw=4)
        yb = cy + 9 - (len(wl) - 1) * 17
        for j, ln in enumerate(wl):
            bb = f.text(ln, pad + 80, yb + j * 34, size=wsz, anchor='start', on=P['bg'])
            f.line(bb[0], (bb[1] + bb[3]) / 2, bb[2], (bb[1] + bb[3]) / 2,
                   stroke=P['tand'], sw=3)
        f.arrow(pad + half - 4, cy - 8, pad + half + 70)
        rx = pad + half + 94
        f.circle(rx + 22, cy, 20, fill=P['bg'], stroke=P['accent'], sw=4)
        f.path(f'M {rx+12:.1f} {cy:.1f} L {rx+20:.1f} {cy+10:.1f} '
               f'L {rx+34:.1f} {cy-12:.1f}', stroke=P['accent'], sw=5)
        if right:
            rl, rsz = rfit
            for j, ln in enumerate(rl):
                f.text(ln, rx + 58, yb + j * 34, size=rsz, anchor='start', on=P['bg'])
        else:
            _blank_line(f, rx + 58, cy + 14, W - pad - 30)
    return f


def dialogue_strip(turns, height=560, alt=''):
    """Who says what to whom, as alternating bubbles. In a dialogue task the
    shape on the page IS the content: which speaker holds which turn is exactly
    what the questions ask about, and a prose script hides it."""
    f = Fig(height, alt)
    n = len(turns)
    pad = 50
    rh = (height - 2 * 36 - (n - 1) * 14) / n
    bw = W - 2 * pad - 230
    # The side belongs to the SPEAKER, not to the turn. Alternating by turn
    # index puts the same person on the left in turn 1 and the right in turn 4,
    # which is the one thing a dialogue figure must not do: the whole reason to
    # draw it is that the shape tells you who is holding the floor.
    order = []
    for who, _, _ in turns:
        if who not in order:
            order.append(who)
    side = {w: (k % 2 == 0) for k, w in enumerate(order)}
    for i, (who, ic, line) in enumerate(turns):
        y = 36 + i * (rh + 14)
        leftside = side[who]
        bx = pad + 200 if leftside else pad + 30
        icx = pad + 90 if leftside else W - pad - 90
        icon(f, ic, icx, y + rh / 2, s=min(0.92, rh * 0.40 / 56))
        f.rect(bx, y, bw, rh, fill=P['card'], stroke='#CED4DD', r=22, sw=3)
        tail = bx if leftside else bx + bw
        f.path(f'M {tail:.1f} {y + rh*0.34:.1f} '
               f'L {tail + (-26 if leftside else 26):.1f} {y + rh*0.50:.1f} '
               f'L {tail:.1f} {y + rh*0.66:.1f} Z',
               fill=P['card'], stroke=P['card'], sw=2)
        nl, nsz = fit_lines(who, bw - 60, size_hi=26, size_lo=22)
        f.text(nl[0], bx + 32, y + rh * 0.34, size=nsz, anchor='start', on=P['card'])
        ll, lsz = fit_lines(line, bw - 64, size_hi=30, size_lo=22)
        for j, ln in enumerate(ll[:2]):
            f.text(ln, bx + 32, y + rh * 0.34 + 44 + j * (lsz + 6), size=lsz,
                   anchor='start', on=P['card'])
    return f


def match_columns(left, right, height=620, alt=''):
    """Two columns for the learner to join: numbered cards on the left, lettered
    cards on the right, and one more on the right than on the left so the spare
    option is visible rather than implied. The dots on the facing edges are
    where the lines are meant to start and end."""
    f = Fig(height, alt)
    LW, RW = 540, 650
    lh = (height - 2 * 40 - (len(left) - 1) * 16) / len(left)
    for i, (name, ic) in enumerate(left):
        y = 40 + i * (lh + 16)
        f.rect(60, y, LW, lh, fill=P['bg'], stroke=P['ink'], r=14, sw=3)
        _numchip(f, 102, y + lh / 2, i + 1, r=22)
        icon(f, ic, 182, y + lh / 2, s=min(0.8, lh * 0.38 / 56))
        nl, nsz = fit_lines(name, LW - 230, size_hi=30)
        for j, ln in enumerate(nl[:2]):
            f.text(ln, 240, y + lh / 2 + 10 - (len(nl[:2]) - 1) * 17 + j * 34,
                   size=nsz, anchor='start', on=P['bg'])
        f.circle(60 + LW - 24, y + lh / 2, 8, fill=P['ink'], stroke=P['ink'], sw=0)
    rh = (height - 2 * 40 - (len(right) - 1) * 14) / len(right)
    rx = W - 60 - RW
    for i, said in enumerate(right):
        y = 40 + i * (rh + 14)
        f.rect(rx, y, RW, rh, fill=P['card'], stroke='#CED4DD', r=14, sw=3)
        f.text(chr(97 + i), rx + 44, y + rh / 2 + 10, size=28, fill=P['ink'],
               on=P['card'])
        sl, ssz = fit_lines(said, RW - 130, size_hi=28)
        for j, ln in enumerate(sl[:2]):
            f.text(ln, rx + 84, y + rh / 2 + 10 - (len(sl[:2]) - 1) * 16 + j * 32,
                   size=ssz, anchor='start', on=P['card'])
        f.circle(rx + 14, y + rh / 2, 8, fill=P['ink'], stroke=P['ink'], sw=0)
    return f


def question_cards(questions, height=520, alt=''):
    """The discussion questions as cards a pair can put on the table and take
    one at a time, which is how the task is meant to be run and not how a
    numbered prose list gets used."""
    f = Fig(height, alt)
    n = len(questions)
    pad, gap = 56, 28
    cw = (W - 2 * pad - gap * (n - 1)) / n
    ch = height - 2 * 44
    for i, (q, ic) in enumerate(questions):
        x = pad + i * (cw + gap)
        f.rect(x, 44, cw, ch, fill=P['bg'], stroke=P['ink'], r=22, sw=4)
        f.rect(x, 44, cw, 72, fill=P['ink'], stroke=P['ink'], r=22, sw=0)
        f.text(str(i + 1), x + cw / 2, 94, size=34, fill=P['bg'], on=P['ink'])
        icon(f, ic, x + cw / 2, 44 + ch * 0.44, s=min(1.1, cw * 0.28 / 56))
        ql, qsz = fit_lines(q, cw - 44, size_hi=28, max_lines=4)
        base = 44 + ch - 40 - (len(ql) - 1) * (qsz + 6)
        for j, ln in enumerate(ql):
            f.text(ln, x + cw / 2, base + j * (qsz + 6), size=qsz, on=P['bg'])
        f.cards += 1
    return f


def info_gap_pair(a, b, height=600, alt=''):
    """Student A's picture and Student B's picture, with a fold line between.

    The task has always said each student sees only their own; printing both as
    prose lists on one page made that impossible to run, and either student
    could read the other's list and skip the speaking. A pair of pictures
    either side of a fold is what the task has needed since it was written."""
    f = Fig(height, alt)
    half = W / 2
    for k, (title, items) in enumerate((a, b)):
        x = 50 + k * half
        w = half - 100
        on = P['card'] if k else P['bg']
        f.rect(x, 44, w, height - 96, fill=on,
               stroke='#CED4DD' if k else P['rule'], r=18, sw=3)
        tl, tsz = fit_lines(title, w - 44, size_hi=32, size_lo=24)
        f.text(tl[0], x + w / 2, 98, size=tsz, on=on)
        f.line(x + 30, 122, x + w - 30, 122, stroke=P['rule'], sw=3)
        n = len(items)
        cw = (w - 40) / n
        for i, (label, ic) in enumerate(items):
            cx = x + 20 + cw * (i + 0.5)
            icon(f, ic, cx, 222, s=min(0.95, cw * 0.34 / 56))
            ll, lsz = fit_lines(label, cw - 16, size_hi=26, size_lo=22,
                                max_lines=3)
            for j, ln in enumerate(ll):
                f.text(ln, cx, 312 + j * (lsz + 6), size=lsz, on=on)
        for j in range(3):
            _blank_line(f, x + 40, height - 164 + j * 42, x + w - 40)
    for yy in range(40, height - 50, 28):
        f.line(half, yy, half, yy + 14, stroke=P['ink'], sw=3)
    return f


def talk_shape(beats, height=440, alt=''):
    """A short talk as four beats, each one as wide as the share of the time it
    should take. `beats` = (label, share, icon). The task says "about a minute"
    and learners spend all of it on the first idea; the widths are the
    correction, and they say it without a word the unit does not have."""
    f = Fig(height, alt)
    pad = 56
    tot = sum(s for _, s, _ in beats) or 1
    inner = W - 2 * pad
    icon(f, 'clock', pad + 48, 94, s=0.74)
    f.line(pad + 104, 94, W - pad, 94, stroke=P['ink'], sw=5)
    x = pad
    bh = height - 212
    for i, (label, share, ic) in enumerate(beats):
        bw = inner * share / tot
        f.rect(x, 156, bw - 12, bh, fill=P['card'], stroke='#CED4DD', r=14, sw=3)
        f.rect(x, 156, bw - 12, 60, fill=P['ink'], stroke=P['ink'], r=14, sw=0)
        f.text(str(i + 1), x + (bw - 12) / 2, 198, size=30, fill=P['bg'], on=P['ink'])
        icon(f, ic, x + (bw - 12) / 2, 156 + bh * 0.52,
             s=min(0.9, (bw - 12) * 0.24 / 56))
        ll, lsz = fit_lines(label, bw - 44, size_hi=28, size_lo=22)
        base = 156 + bh - 24 - (len(ll) - 1) * (lsz + 6)
        for j, ln in enumerate(ll):
            f.text(ln, x + (bw - 12) / 2, base + j * (lsz + 6), size=lsz, on=P['card'])
        f.stages += 1
        x += bw
    return f


def sequence_steps(steps, height=560, alt=''):
    """The steps in the order the task prints them -- which is not the right
    order -- each with an empty box for its number. Ordering is a spatial task
    and was prose; the boxes are where the answer goes."""
    f = Fig(height, alt)
    n = len(steps)
    pad = 56
    rh = (height - 2 * 40 - (n - 1) * 14) / n
    for i, (text, ic) in enumerate(steps):
        y = 40 + i * (rh + 14)
        f.rect(pad, y, W - 2 * pad, rh, fill=P['bg'], stroke=P['rule'], r=12, sw=3)
        f.rect(pad + 28, y + rh / 2 - 24, 48, 48, fill=P['bg'],
               stroke=P['accent'], r=8, sw=4)
        icon(f, ic, pad + 158, y + rh / 2, s=min(0.78, rh * 0.38 / 56))
        tl, tsz = fit_lines(text, W - 2 * pad - 300, size_hi=30)
        for j, ln in enumerate(tl[:2]):
            f.text(ln, pad + 224, y + rh / 2 + 10 - (len(tl[:2]) - 1) * 17 + j * 34,
                   size=tsz, anchor='start', on=P['bg'])
        f.cards += 1
    return f


def decision_fork(question, options, height=640, alt=''):
    """One trunk, three branches, and what each branch costs. A decision task is
    a choice with consequences, and the consequences were buried in the prose of
    the paragraph above it."""
    pad = 50
    n = len(options)
    cw = (W - 2 * pad - 36 * (n - 1)) / n

    # Measure before drawing. The card used to be a fixed `height - 300` tall
    # while the consequence lines flowed on from wherever the label ended, so
    # a branch whose label or consequences wrapped printed its last line
    # BELOW the card -- visible in every render and invisible to every check,
    # because the glyphs are inside the canvas and the preflight measures the
    # canvas. Same defect as grammar_contrast's truncated title: the figure
    # was laid out for the shortest plausible text. Growing the figure is
    # safe, because `tighten` crops to the drawing.
    need = 0
    for label, costs, _ in options:
        ll, lsz = fit_lines(label, cw - 44, size_hi=30, size_lo=24)
        yy = 400 + len(ll[:2]) * (lsz + 6) + 28
        for c in costs[:2]:
            cl, csz = fit_lines(c, cw - 48, size_hi=26, size_lo=22)
            yy += 44 + (len(cl[:2]) - 1) * 30
        need = max(need, yy + 78)
    height = max(height, int(need))

    # The question had the same one-line-only bug as grammar_contrast's title:
    # `fit_lines` was called and only `ql[0]` drawn, so 'You want to ask six
    # neighbours and two have never spoken to you?' printed without its last
    # word. Draw every line, grow the band, and push the trunk and the cards
    # down by exactly what the band grew.
    ql, qsz = fit_lines(question, W - 2 * pad - 64, size_hi=34, size_lo=24)
    qh = 96 + (qsz + 6) * (len(ql) - 1)
    d = qh - 96
    height += d

    f = Fig(height, alt)
    f.rect(pad, 40, W - 2 * pad, qh, fill=P['ink'], stroke=P['ink'], r=18, sw=0)
    for j, ln in enumerate(ql):
        f.text(ln, W / 2, 102 + j * (qsz + 6), size=qsz, fill=P['bg'], on=P['ink'])
    for i, (label, costs, ic) in enumerate(options):
        x = pad + i * (cw + 36)
        cx = x + cw / 2
        f.path(f'M {W/2:.1f} {136+d:.1f} L {W/2:.1f} {188+d:.1f} '
               f'L {cx:.1f} {188+d:.1f} L {cx:.1f} {238+d:.1f}',
               stroke=P['accent'], sw=5)
        f.rect(x, 238 + d, cw, height - 300 - d,
               fill=P['card'], stroke='#CED4DD', r=16, sw=3)
        icon(f, ic, cx, 318 + d, s=min(1.0, cw * 0.24 / 56))
        ll, lsz = fit_lines(label, cw - 44, size_hi=30, size_lo=24)
        for j, ln in enumerate(ll[:2]):
            f.text(ln, cx, 400 + d + j * (lsz + 6), size=lsz, on=P['card'])
        yy = 400 + d + len(ll[:2]) * (lsz + 6) + 28
        for c in costs[:2]:
            cl, csz = fit_lines(c, cw - 48, size_hi=26, size_lo=22)
            for j, ln in enumerate(cl[:2]):
                f.text(ln, cx, yy + j * (csz + 5), size=csz, fill=P['ink'],
                       on=P['card'], bold=False)
            yy += 44 + (len(cl[:2]) - 1) * 30
        f.stages += 1
    return f


def glossary_grid(words, height=760, cols=5, alt=''):
    """Every glossary word on one page as a picture card. The glossary is the
    last thing in the unit and a bare list is the easiest thing in the book to
    skip; one card each is the cheapest retention aid the unit has."""
    f = Fig(height, alt)
    rows = math.ceil(len(words) / cols)
    pad, gap = 50, 22
    cw = (W - 2 * pad - gap * (cols - 1)) / cols
    ch = (height - 2 * 40 - gap * (rows - 1)) / rows
    for i, (word, ic) in enumerate(words):
        r, c = divmod(i, cols)
        x = pad + c * (cw + gap)
        y = 40 + r * (ch + gap)
        f.rect(x, y, cw, ch, fill=P['card'], stroke='#CED4DD', r=16, sw=3)
        icon(f, ic, x + cw / 2, y + ch * 0.44,
             s=min(1.1, ch * 0.30 / 56, cw * 0.38 / 56))
        ll, lsz = fit_lines(word, cw - 20, size_hi=28)
        base = y + ch - 24 - (len(ll[:2]) - 1) * (lsz + 5)
        for j, ln in enumerate(ll[:2]):
            f.text(ln, x + cw / 2, base + j * (lsz + 5), size=lsz, on=P['card'])
        f.cards += 1
    return f


def close_scene(items, height=520, alt=''):
    """The close-to-home reading drawn as the street it describes: one ground
    line, the places along it in the order the text walks them, each labelled.
    Part 9 had no figure at all."""
    f = Fig(height, alt)
    pad = 46
    gy = height - 150
    f.rect(pad, 40, W - 2 * pad, gy - 40, fill=P['card'], stroke='#CED4DD', r=18, sw=3)
    f.line(pad + 12, gy, W - pad - 12, gy, stroke=P['ink'], sw=6)
    n = len(items)
    cw = (W - 2 * pad - 24) / n
    for i, (label, ic) in enumerate(items):
        cx = pad + 12 + cw * (i + 0.5)
        # centred in the band and scaled to fill it. Hanging the icon a fixed
        # 74 px above the ground line left the top third of every close_scene
        # empty, which G17 cannot see because the band is drawn, not blank.
        icon(f, ic, cx, (44 + gy) / 2,
             s=min(1.9, cw * 0.34 / 56, (gy - 100) * 0.46 / 56))
        f.line(cx, gy, cx, gy + 22, stroke=P['rule'], sw=3)
        ll, lsz = fit_lines(label, cw - 18, size_hi=28, size_lo=22)
        for j, ln in enumerate(ll[:2]):
            f.text(ln, cx, gy + 60 + j * (lsz + 6), size=lsz, on=P['bg'])
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


def building_section(f: Fig, x, y, w, h):
    """Number 14 Alder Street cut through, basement to top flat.

    `label_me` wants hit points that run down as they run right, so its leaders
    fan out instead of crossing. The five things the task asks about therefore
    sit in that order on purpose -- meter low and left in the ground-floor hall,
    freezer in the shop beside it, switch on a second-floor wall, candle drawer
    on the third, spare bulbs on the shelf above -- which is also the order a
    person climbing the stairs would meet them.
    """
    left, right = x + 60, x + w - 60
    top, bot = y + 40, y + h - 40
    floors = 5                                   # basement + 4
    fh = (bot - top) / floors
    f.rect(left, top, right - left, bot - top, fill=P['bg'], stroke=P['ink'], r=6)
    for i in range(1, floors):
        f.line(left, top + i * fh, right, top + i * fh, stroke=P['ink'], sw=3)
    # the stairwell, one flight a floor, running up the middle
    mid = left + (right - left) * 0.46
    for i in range(floors):
        fy = top + i * fh
        for k in range(4):
            f.line(mid + k * 14, fy + fh - k * (fh / 5),
                   mid + (k + 1) * 14, fy + fh - k * (fh / 5), stroke=P['rule'], sw=2)
    # the basement, hatched, with the locked cupboard nobody has a key for
    by = top + (floors - 1) * fh
    for k in range(9):
        f.line(left + 10 + k * 22, bot - 4, left + 24 + k * 22, by + 6,
               stroke=P['rule'], sw=2)
    f.rect(left + 18, by + fh * 0.34, (right - left) * 0.13, fh * 0.44,
           fill=P['grey'], stroke=P['ink'], r=3)
    # ground floor: the hall with the meter box, and the shop beside it
    gy = top + (floors - 2) * fh
    # The meter sits a little lower in the row than the freezer, and that is
    # not decoration: label_me sorts its hit points by y, so two things on the
    # same floor need distinct heights or the numbering is a coin toss.
    f.rect(left + 12, gy + fh * 0.46, (right - left) * 0.10, fh * 0.40,
           fill=P['grey'], stroke=P['ink'], r=3)                 # the meter
    f.rect(left + (right - left) * 0.24, gy + fh * 0.08,
           (right - left) * 0.14, fh * 0.56,
           fill=P['card'], stroke=P['ink'], r=4)                 # the freezer
    f.line(left + (right - left) * 0.24, gy + fh * 0.30,
           left + (right - left) * 0.38, gy + fh * 0.30, stroke=P['ink'], sw=2)
    # second floor: a door with the switch beside it
    sy = top + (floors - 3) * fh
    f.rect(left + (right - left) * 0.60, sy + fh * 0.22,
           (right - left) * 0.11, fh * 0.70,
           fill=P['deep'], stroke=P['ink'], r=3)                 # the door
    f.rect(left + (right - left) * 0.74, sy + fh * 0.36,
           (right - left) * 0.045, fh * 0.20,
           fill=P['card'], stroke=P['ink'], r=2)                 # the switch
    # third floor: an open kitchen drawer with candles in it
    ty = top + (floors - 4) * fh
    f.rect(left + (right - left) * 0.62, ty + fh * 0.44,
           (right - left) * 0.20, fh * 0.26,
           fill=P['tanl'], stroke=P['ink'], r=3)
    for k in range(3):
        f.rect(left + (right - left) * (0.655 + k * 0.045), ty + fh * 0.50,
               (right - left) * 0.016, fh * 0.14,
               fill=P['bg'], stroke=P['ink'], r=1, sw=2)
    # top floor: a cupboard with a box on its top shelf
    uy = top
    f.rect(left + (right - left) * 0.64, uy + fh * 0.16,
           (right - left) * 0.22, fh * 0.66,
           fill=P['bg'], stroke=P['ink'], r=3)
    f.line(left + (right - left) * 0.64, uy + fh * 0.40,
           left + (right - left) * 0.86, uy + fh * 0.40, stroke=P['ink'], sw=2)
    f.rect(left + (right - left) * 0.68, uy + fh * 0.22,
           (right - left) * 0.10, fh * 0.16,
           fill=P['tan'], stroke=P['ink'], r=2)


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


def voice_steps(f: Fig, x, y, w, h):
    """Five sentences about one window, drawn as five boxes that drift from a
    named maker to no maker at all. The maker's box empties out as the steps
    descend: filled, half, outline, dashed, gone. A learner can see that the
    passive is a scale and not a switch. Hit points step down as they step
    right, so no two leaders cross (G15)."""
    def ly_at(fx):
        return y + h * (0.22 + 0.56 * fx)
    xs = [0.13, 0.30, 0.47, 0.64, 0.80]
    f.line(x + 50, ly_at(0.05), x + w * 0.92, ly_at(0.92), stroke=P['rule'], sw=4)
    for i, fx in enumerate(xs):
        cx2, cy2 = x + w * fx, ly_at(fx)
        # the thing: always there, always the same
        f.rect(cx2 - 4, cy2 - 17, 34, 34, fill=P['blue'], stroke=P['ink'], r=5)
        # the maker: fades out step by step
        mx, my = cx2 - 54, cy2 - 15
        if i == 0:
            f.rect(mx, my, 30, 30, fill=P['deep'], stroke=P['ink'], r=5)
        elif i == 1:
            f.rect(mx, my, 30, 30, fill=P['bg'], stroke=P['ink'], r=5)
            f.rect(mx, my + 15, 30, 15, fill=P['deep'], r=0, sw=0)
        elif i == 2:
            f.rect(mx, my, 30, 30, fill=P['bg'], stroke=P['ink'], r=5)
        elif i == 3:
            for k in range(3):
                f.line(mx, my + 2 + k * 13, mx + 30, my + 2 + k * 13,
                       stroke=P['rule'], sw=3)
        # i == 4: the maker's box is simply not drawn


def branch_line(f: Fig, x, y, w, h):
    """One evening as a line that forks. Each fork is drawn with the certain
    branch solid and the uncertain one dashed, so `if` and `when` are told
    apart by the drawing and not only by the word: a solid fork is something
    that will happen, a dashed fork is something that may. Hit points step
    down as they step right, so no two leaders cross (G15)."""
    def ly_at(fx):
        return y + h * (0.22 + 0.56 * fx)
    xs = [0.13, 0.30, 0.47, 0.64, 0.80]
    f.line(x + 50, ly_at(0.05), x + w * 0.92, ly_at(0.92), stroke=P['ink'], sw=6)
    for i, fx in enumerate(xs):
        cx2, cy2 = x + w * fx, ly_at(fx)
        up = cy2 - h * 0.17
        if i in (1, 4):                       # certain: a solid branch
            f.line(cx2, cy2, cx2 + w * 0.07, up, stroke=P['deep'], sw=5)
            f.circle(cx2 + w * 0.07, up, 13, fill=P['deep'], sw=4)
        else:                                 # uncertain: a dashed branch
            for k in range(4):
                t0, t1 = k / 4 + 0.04, (k + 1) / 4 - 0.04
                f.line(cx2 + w * 0.07 * t0, cy2 + (up - cy2) * t0,
                       cx2 + w * 0.07 * t1, cy2 + (up - cy2) * t1,
                       stroke=P['tand'], sw=5)
            f.circle(cx2 + w * 0.07, up, 13, fill=P['bg'], sw=4)
        f.circle(cx2, cy2, 9, fill=P['ink'], sw=0)


def join_line(f: Fig, x, y, w, h):
    """Five pairs of boxes, each pair joined by a short link whose shape says
    what kind of thing the joining word takes: a filled circle for a person, a
    square for a thing, both for the word that takes either, a flat bar for a
    place, and a hooked link for the one that marks belonging. The link is what
    the learner is labelling, so it is drawn larger than the boxes. Hit points
    step down as they step right, so no two leaders cross (G15)."""
    def ly_at(fx):
        return y + h * (0.22 + 0.56 * fx)
    xs = [0.13, 0.30, 0.47, 0.64, 0.80]
    for i, fx in enumerate(xs):
        cx2, cy2 = x + w * fx, ly_at(fx)
        f.rect(cx2 - 64, cy2 - 15, 30, 30, fill=P['card'], stroke=P['ink'], r=5)
        f.rect(cx2 + 34, cy2 - 15, 30, 30, fill=P['card'], stroke=P['ink'], r=5)
        f.line(cx2 - 34, cy2, cx2 + 34, cy2, stroke=P['rule'], sw=4)
        if i == 0:                                   # who: a person
            f.circle(cx2, cy2, 17, fill=P['deep'], sw=4)
        elif i == 1:                                 # which: a thing
            f.rect(cx2 - 15, cy2 - 15, 30, 30, fill=P['blue'], stroke=P['ink'], r=4)
        elif i == 2:                                 # that: either
            f.circle(cx2 - 9, cy2, 13, fill=P['deep'], sw=4)
            f.rect(cx2 - 2, cy2 - 11, 22, 22, fill=P['blue'], stroke=P['ink'], r=4)
        elif i == 3:                                 # where: a place
            f.rect(cx2 - 20, cy2 + 2, 40, 13, fill=P['tanl'], stroke=P['ink'], r=3)
            f.line(cx2 - 20, cy2 + 2, cx2 + 20, cy2 + 2, stroke=P['tand'], sw=4)
        else:                                        # whose: belonging
            f.circle(cx2 - 12, cy2, 13, fill=P['deep'], sw=4)
            f.path(f'M {cx2 - 2:.1f} {cy2 - 8:.1f} Q {cx2 + 16:.1f} {cy2:.1f} '
                   f'{cx2 - 2:.1f} {cy2 + 8:.1f}', fill='none',
                   stroke=P['ink'], sw=4)


def report_steps(f: Fig, x, y, w, h):
    """Five pairs: what was said, and the same thing reported. The spoken box
    keeps its quotation marks and the reported box does not, and the arrow
    between them carries one tick for each step the tense moves back -- none
    for a word that does not change, one for a tense that goes back one step.
    The question pair loses a mark as well as a tense, drawn as a struck-out
    question mark. Hit points step down as they step right (G15)."""
    def ly_at(fx):
        return y + h * (0.22 + 0.56 * fx)
    xs = [0.13, 0.30, 0.47, 0.64, 0.80]
    steps = [1, 1, 1, 0, 1]
    for i, fx in enumerate(xs):
        cx2, cy2 = x + w * fx, ly_at(fx)
        # the spoken half, with its quotation marks
        f.rect(cx2 - 66, cy2 - 16, 34, 32, fill=P['bg'], stroke=P['ink'], r=5)
        f.line(cx2 - 60, cy2 - 10, cx2 - 57, cy2 - 3, stroke=P['ink'], sw=3)
        f.line(cx2 - 52, cy2 - 10, cx2 - 49, cy2 - 3, stroke=P['ink'], sw=3)
        # the reported half, plain
        f.rect(cx2 + 32, cy2 - 16, 34, 32, fill=P['card'], stroke=P['ink'], r=5)
        f.line(cx2 - 30, cy2, cx2 + 28, cy2, stroke=P['rule'], sw=4)
        for k in range(steps[i]):                  # one tick per step back
            f.line(cx2 - 4 + k * 10, cy2 - 9, cx2 - 4 + k * 10, cy2 + 9,
                   stroke=P['deep'], sw=5)
        if i == 2:                                 # the reported question
            f.circle(cx2 + 49, cy2 - 26, 12, fill=P['bg'], sw=3)
            f.line(cx2 + 40, cy2 - 35, cx2 + 58, cy2 - 17, stroke=P['ink'], sw=4)


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
    _g0 = yaml.safe_load(open(os.path.join(ROOT, 'spec', 'golden.yaml'), encoding='utf-8'))
    full = slot in set(_g0['figures'].get('full_page_slots') or [])
    # a full-page image must keep its whole canvas: tighten() crops to the
    # drawing, which is right for an in-flow figure and would shrink a page
    if not full:
        f = tighten(f)
    out = os.path.join(ROOT, 'figures', book)
    os.makedirs(out, exist_ok=True)
    base = os.path.join(out, f'u{unit:02d}-{slot}')
    svg = f.svg()
    open(base + '.svg', 'w', encoding='utf-8').write(svg)
    cairosvg.svg2png(bytestring=svg.encode(), write_to=base + '.png',
                     output_width=f.w, output_height=f.h, background_color='#FFFFFF')
    png = open(base + '.png', 'rb').read()
    _g = yaml.safe_load(open(os.path.join(ROOT, 'spec', 'golden.yaml'), encoding='utf-8'))
    _fg = _g['figures']
    DPI = 96
    if full:
        _b = _fg['box_full_page']
        placed = [_b['w'], _b['h']]          # fill_trim: the extent IS the box
    else:
        _b = _fg.get('box_by_slot', {}).get(slot) or _fg.get(
            'box_default', {'w': 5.625, 'h': 1.9791666666666667})
        BW, BH = _b['w'], _b['h']
        sc = min(BW / f.w, BH / f.h)
        placed = [math.floor(f.w * sc * DPI + 0.5) / DPI,
                  math.floor(f.h * sc * DPI + 0.5) / DPI]
    meta = {'canvas': [f.w, f.h], 'bounds': [round(v, 1) for v in f.bounds],
            'texts': f.texts, 'leaders': f.leaders, 'cards': f.cards,
            'stages': f.stages, 'arrows': f.arrows, 'alt': f.alt,
            'placed_in': placed, 'sha256': hashlib.sha256(png).hexdigest()}
    json.dump(meta, open(base + '.json', 'w'), indent=1)
    return base, len(png), f.h
