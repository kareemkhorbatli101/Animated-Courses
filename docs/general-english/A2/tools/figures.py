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
    import cairosvg
    f = tighten(f)
    out = os.path.join(ROOT, 'figures', book)
    os.makedirs(out, exist_ok=True)
    base = os.path.join(out, f'u{unit:02d}-{slot}')
    svg = f.svg()
    open(base + '.svg', 'w', encoding='utf-8').write(svg)
    cairosvg.svg2png(bytestring=svg.encode(), write_to=base + '.png',
                     output_width=W, output_height=f.h, background_color='#FFFFFF')
    png = open(base + '.png', 'rb').read()
    BW, BH, DPI = 5.625, 1.9791666666666667, 96
    sc = min(BW / W, BH / f.h)
    placed = [math.floor(W * sc * DPI + 0.5) / DPI, math.floor(f.h * sc * DPI + 0.5) / DPI]
    meta = {'canvas': [W, f.h], 'bounds': [round(v, 1) for v in f.bounds],
            'texts': f.texts, 'leaders': f.leaders, 'cards': f.cards,
            'stages': f.stages, 'arrows': f.arrows, 'alt': f.alt,
            'placed_in': placed, 'sha256': hashlib.sha256(png).hexdigest()}
    json.dump(meta, open(base + '.json', 'w'), indent=1)
    return base, len(png), f.h
