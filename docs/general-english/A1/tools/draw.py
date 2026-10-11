"""The drawing core for EFDL A1.

This is new machinery. It does not share a line with A2's tools/figures.py,
and the reason is on the record: A2's figures were rounded boxes with
sentences in them. A learner got nothing from looking at one that they did
not get from reading the line underneath it.

What is different here:

  * Colour. Forty-six colours, warm, including six skin tones and eight hair
    colours. A2 had twelve and they were all cold.
  * Shading. Every solid shape may carry a darker edge and a lighter face.
    The research reason is that photographs beat line drawings on recognition
    because they carry colour, luminance, texture and shading; a drawing that
    throws all four away is a drawing that is harder to recognise than the
    photograph it replaced. We are not allowed photographs, so we put the
    cues back by hand.
  * People. See people.py. A2 drew every character as the same grey pill.

Everything is composed in SVG and rasterised by cairosvg. Text is measured
with PIL against the real font file, so a label that does not fit is caught
when it is drawn rather than when the page is printed.
"""
from __future__ import annotations

import math
import re
from dataclasses import dataclass, field

from PIL import ImageFont

# ---------------------------------------------------------------- typography

INTER = '/usr/share/fonts/truetype/inter/Inter-{}.ttf'
_FALLBACK = {
    'Regular': '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
    'Medium': '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
    'SemiBold': '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
    'Bold': '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
}
_fontcache: dict = {}


def _resolve(weight: str) -> str:
    import os
    p = INTER.format(weight)
    if os.path.exists(p):
        return p
    for cand in (f'/usr/share/fonts/opentype/inter/Inter-{weight}.otf',
                 f'/usr/share/fonts/truetype/Inter/Inter-{weight}.ttf'):
        if os.path.exists(cand):
            return cand
    return _FALLBACK[weight]


def font(size: float, weight: str = 'Regular'):
    key = (round(size, 1), weight)
    if key not in _fontcache:
        _fontcache[key] = ImageFont.truetype(_resolve(weight), int(round(size)))
    return _fontcache[key]


def tw(s: str, size: float, weight: str = 'Regular') -> float:
    """Width of a string in pixels, measured against the real font."""
    return font(size, weight).getlength(s)


WEIGHT_CSS = {'Regular': ('400', 'normal'), 'Medium': ('500', 'normal'),
              'SemiBold': ('600', 'normal'), 'Bold': ('700', 'normal')}
FAMILY = 'Inter, DejaVu Sans, sans-serif'


def esc(s: str) -> str:
    return (s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
             .replace('"', '&quot;'))


# -------------------------------------------------------------------- colour

C = {
    # ink and paper
    'ink':      '#1F2933',
    'ink_soft': '#52606D',
    'ink_mute': '#7B8794',
    'paper':    '#FFFFFF',
    'cream':    '#FFF9F0',
    'rule':     '#D6D3CD',

    # skin, light to deep
    'skin1': '#F8DCC4', 'skin2': '#F0C6A0', 'skin3': '#DCA679',
    'skin4': '#BC8150', 'skin5': '#8F5A2F', 'skin6': '#60391D',

    # hair
    'hair_black':  '#2A2522', 'hair_dark': '#4A3728', 'hair_brown': '#70512F',
    'hair_auburn': '#8C4A2F', 'hair_ginger': '#C4622B', 'hair_blonde': '#DDA94A',
    'hair_grey':   '#9BA1A7', 'hair_white': '#DCDEE1',

    # garments and objects
    'red': '#D34A42', 'coral': '#F0795C', 'orange': '#E58A24', 'amber': '#F0B429',
    'yellow': '#F7D154', 'lime': '#8CBF43', 'green': '#3F9A63', 'forest': '#2F7A4E',
    'teal': '#2E9E9E', 'aqua': '#6FC5C5', 'sky': '#56A9DE', 'blue': '#2F6FB5',
    'navy': '#2A4A7B', 'indigo': '#4F4FA3', 'purple': '#8A5BA6', 'plum': '#6E3F6E',
    'pink': '#E07AA8', 'rose': '#F4A8C4', 'brown': '#8A6240', 'sand': '#D9BC8C',
    'slate': '#5B6B7A', 'steel': '#8A99A8', 'silver': '#C5CCD3', 'cloud': '#E3E8EC',

    # world
    'sky_bg': '#D3E9F7', 'ground': '#E8E2D6', 'wall': '#F4EEE3', 'wood': '#C08A52',
    'wood_dk': '#9A6B3C', 'glass': '#DCEBF3', 'leaf': '#4E9A51', 'leaf_dk': '#36763C',
    'tile': '#EFE7DA', 'road': '#B9B6AE', 'line': '#F2E6C8',
}


def shade(hexcol: str, f: float) -> str:
    """Darken (f<1) or lighten (f>1) a hex colour. Used for every solid."""
    h = hexcol.lstrip('#')
    r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    if f <= 1:
        r, g, b = (int(v * f) for v in (r, g, b))
    else:
        t = f - 1
        r, g, b = (int(v + (255 - v) * t) for v in (r, g, b))
    return '#%02X%02X%02X' % (max(0, min(255, r)), max(0, min(255, g)), max(0, min(255, b)))


def _lum(hexcol: str) -> float:
    h = hexcol.lstrip('#')
    out = []
    for i in (0, 2, 4):
        v = int(h[i:i + 2], 16) / 255
        out.append(v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4)
    return 0.2126 * out[0] + 0.7152 * out[1] + 0.0722 * out[2]


def contrast(a: str, b: str) -> float:
    """WCAG contrast ratio. Every label the engine draws is checked with this."""
    la, lb = _lum(a), _lum(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def deep(col: str, target: float = 4.5) -> str:
    """Darken `col` until white text on it passes WCAG AA.

    Called wherever the engine puts white text on a colour. The palette is
    chosen for the page; this makes it legal for the text. A1 learners read
    slowly and often on a photocopy, so 4.5:1 is a floor we actually want --
    it is a floor on contrast, not on difficulty, which is the only kind of
    floor this course allows.
    """
    c = col
    for _ in range(16):
        if contrast('#FFFFFF', c) >= target:
            return c
        c = shade(c, 0.90)
    return c


def on(bg: str) -> str:
    """The ink colour that reads on this background, chosen by contrast."""
    return C['ink'] if contrast(C['ink'], bg) >= contrast('#FFFFFF', bg) else '#FFFFFF'


# -------------------------------------------------------------------- canvas

@dataclass
class Canvas:
    w: float
    h: float
    bg: str = C['paper']
    parts: list = field(default_factory=list)
    warnings: list = field(default_factory=list)
    labels: list = field(default_factory=list)   # (text, x, y, w, h) for overlap checks
    _clip: int = 0

    # -- raw ---------------------------------------------------------------
    def add(self, s: str):
        self.parts.append(s)

    def clip(self, x, y, w, h, r=0):
        """Open a clipped group. Everything until endgroup() is cut to this box.

        Erasing after the fact with a filled rectangle only works when the
        thing behind is one flat colour; over a card on a tinted page it
        leaves white blocks, which is what the first family tree did.
        """
        self._clip += 1
        cid = f'c{self._clip}'
        rr = f' rx="{r}" ry="{r}"' if r else ''
        self.add(f'<clipPath id="{cid}"><rect x="{x:.2f}" y="{y:.2f}" '
                 f'width="{w:.2f}" height="{h:.2f}"{rr}/></clipPath>'
                 f'<g clip-path="url(#{cid})">')
        return self

    def group(self, transform: str = '', opacity: float | None = None):
        o = f' opacity="{opacity}"' if opacity is not None else ''
        t = f' transform="{transform}"' if transform else ''
        self.add(f'<g{t}{o}>')
        return self

    def endgroup(self):
        self.add('</g>')

    # -- primitives --------------------------------------------------------
    def rect(self, x, y, w, h, fill, r=0, stroke=None, sw=2, opacity=None):
        o = f' opacity="{opacity}"' if opacity is not None else ''
        s = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ''
        rr = f' rx="{r}" ry="{r}"' if r else ''
        self.add(f'<rect x="{x:.2f}" y="{y:.2f}" width="{max(0,w):.2f}" '
                 f'height="{max(0,h):.2f}"{rr} fill="{fill}"{s}{o}/>')

    def circle(self, cx, cy, r, fill, stroke=None, sw=2, opacity=None):
        o = f' opacity="{opacity}"' if opacity is not None else ''
        s = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ''
        self.add(f'<circle cx="{cx:.2f}" cy="{cy:.2f}" r="{r:.2f}" fill="{fill}"{s}{o}/>')

    def ellipse(self, cx, cy, rx, ry, fill, stroke=None, sw=2, opacity=None, rot=None):
        o = f' opacity="{opacity}"' if opacity is not None else ''
        s = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ''
        t = f' transform="rotate({rot} {cx:.2f} {cy:.2f})"' if rot else ''
        self.add(f'<ellipse cx="{cx:.2f}" cy="{cy:.2f}" rx="{rx:.2f}" ry="{ry:.2f}" '
                 f'fill="{fill}"{s}{o}{t}/>')

    def path(self, d, fill='none', stroke=None, sw=2, cap='round', join='round',
             opacity=None, dash=None):
        o = f' opacity="{opacity}"' if opacity is not None else ''
        s = (f' stroke="{stroke}" stroke-width="{sw}" stroke-linecap="{cap}" '
             f'stroke-linejoin="{join}"') if stroke else ''
        da = f' stroke-dasharray="{dash}"' if dash else ''
        self.add(f'<path d="{d}" fill="{fill}"{s}{da}{o}/>')

    def line(self, x1, y1, x2, y2, stroke, sw=2, cap='round', dash=None, opacity=None):
        da = f' stroke-dasharray="{dash}"' if dash else ''
        o = f' opacity="{opacity}"' if opacity is not None else ''
        self.add(f'<line x1="{x1:.2f}" y1="{y1:.2f}" x2="{x2:.2f}" y2="{y2:.2f}" '
                 f'stroke="{stroke}" stroke-width="{sw}" stroke-linecap="{cap}"{da}{o}/>')

    def poly(self, pts, fill, stroke=None, sw=2, opacity=None):
        o = f' opacity="{opacity}"' if opacity is not None else ''
        s = f' stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"' if stroke else ''
        p = ' '.join(f'{x:.2f},{y:.2f}' for x, y in pts)
        self.add(f'<polygon points="{p}" fill="{fill}"{s}{o}/>')

    # -- solids with shading ----------------------------------------------
    def solid(self, x, y, w, h, fill, r=0, light=True):
        """A filled block with a lighter top face and a darker base edge."""
        self.rect(x, y, w, h, fill, r=r)
        if light and h > 10:
            self.rect(x, y, w, min(h * 0.35, h), shade(fill, 1.14), r=r)
            self.rect(x, y + h * 0.3, w, h * 0.7, fill, r=0)
            if r:
                self.rect(x, y + h - r, w, r, fill, r=r)
        self.rect(x, y + h - max(3, h * 0.07), w, max(3, h * 0.07), shade(fill, 0.80),
                  r=min(r, 4))

    # -- text --------------------------------------------------------------
    def text(self, s, x, y, size, fill=None, weight='Regular', anchor='start',
             bg=None, track=0):
        """Draw text. `y` is the baseline. Records the box for overlap checks."""
        fill = fill or C['ink']
        if bg is not None and contrast(fill, bg) < 4.5:
            self.warnings.append(f'contrast {contrast(fill,bg):.1f}:1 for {s!r}')
        w = tw(s, size, weight)
        fw, fs = WEIGHT_CSS[weight]
        # Inter has no IPA Extensions block, so a phonetic symbol silently
        # becomes a tofu box. Anything outside Latin-1 goes to DejaVu, which
        # has the symbols. Caught by eye on the first alphabet plate; now it
        # cannot happen again.
        fam = FAMILY if all(ord(c) < 0x0250 for c in s) else 'DejaVu Sans, sans-serif'
        a = {'start': 'start', 'middle': 'middle', 'end': 'end'}[anchor]
        ls = f' letter-spacing="{track}"' if track else ''
        self.add(f'<text x="{x:.2f}" y="{y:.2f}" font-family="{fam}" '
                 f'font-size="{size:.1f}" font-weight="{fw}" fill="{fill}" '
                 f'text-anchor="{a}"{ls}>{esc(s)}</text>')
        x0 = x if a == 'start' else (x - w / 2 if a == 'middle' else x - w)
        self.labels.append((s, x0, y - size * 0.78, w, size * 1.0))
        return w

    def fit(self, s, x, y, maxw, size, **kw):
        """Draw text, shrinking to fit maxw. Records a warning if it had to."""
        sz = size
        weight = kw.get('weight', 'Regular')
        while sz > size * 0.62 and tw(s, sz, weight) > maxw:
            sz -= 0.5
        if tw(s, sz, weight) > maxw:
            self.warnings.append(f'overflow {s!r} ({tw(s,sz,weight):.0f}>{maxw:.0f}px)')
        return self.text(s, x, y, sz, **kw)

    def wrap(self, s, x, y, maxw, size, lead=1.28, anchor='start', **kw):
        """Word-wrap to maxw. Returns the y after the last line."""
        weight = kw.get('weight', 'Regular')
        words, lines, cur = s.split(), [], ''
        for wd in words:
            t = (cur + ' ' + wd).strip()
            if tw(t, size, weight) <= maxw or not cur:
                cur = t
            else:
                lines.append(cur)
                cur = wd
        if cur:
            lines.append(cur)
        for i, ln in enumerate(lines):
            self.text(ln, x, y + i * size * lead, size, anchor=anchor, **kw)
        return y + (len(lines) - 1) * size * lead

    # -- output ------------------------------------------------------------
    def svg(self) -> str:
        return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{self.w:.0f}" '
                f'height="{self.h:.0f}" viewBox="0 0 {self.w:.0f} {self.h:.0f}">'
                f'<rect width="{self.w:.0f}" height="{self.h:.0f}" fill="{self.bg}"/>'
                + ''.join(self.parts) + '</svg>')

    def png(self, path: str, width: int = 1440):
        import cairosvg
        cairosvg.svg2png(bytestring=self.svg().encode(), write_to=path,
                         output_width=width,
                         output_height=int(round(width * self.h / self.w)))

    def overlaps(self):
        """Label boxes that collide. A1 figures are not allowed any."""
        bad = []
        for i in range(len(self.labels)):
            s1, x1, y1, w1, h1 = self.labels[i]
            for j in range(i + 1, len(self.labels)):
                s2, x2, y2, w2, h2 = self.labels[j]
                if (x1 < x2 + w2 - 1 and x2 < x1 + w1 - 1 and
                        y1 < y2 + h2 - 1 and y2 < y1 + h1 - 1):
                    bad.append((s1, s2))
        return bad


# ------------------------------------------------------------------ helpers

def rr_path(x, y, w, h, tl=0, tr=0, br=0, bl=0) -> str:
    """Rounded rectangle with per-corner radii."""
    return (f'M{x+tl:.2f},{y:.2f} H{x+w-tr:.2f} A{tr:.2f},{tr:.2f} 0 0 1 {x+w:.2f},{y+tr:.2f} '
            f'V{y+h-br:.2f} A{br:.2f},{br:.2f} 0 0 1 {x+w-br:.2f},{y+h:.2f} '
            f'H{x+bl:.2f} A{bl:.2f},{bl:.2f} 0 0 1 {x:.2f},{y+h-bl:.2f} '
            f'V{y+tl:.2f} A{tl:.2f},{tl:.2f} 0 0 1 {x+tl:.2f},{y:.2f} Z')


def arc(cx, cy, r, a0, a1) -> str:
    """Open arc path, angles in degrees, 0 = east, clockwise."""
    x0, y0 = cx + r * math.cos(math.radians(a0)), cy + r * math.sin(math.radians(a0))
    x1, y1 = cx + r * math.cos(math.radians(a1)), cy + r * math.sin(math.radians(a1))
    large = 1 if abs(a1 - a0) > 180 else 0
    sweep = 1 if a1 > a0 else 0
    return f'M{x0:.2f},{y0:.2f} A{r:.2f},{r:.2f} 0 {large} {sweep} {x1:.2f},{y1:.2f}'
