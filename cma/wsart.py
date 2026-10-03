# -*- coding: utf-8 -*-
"""Diagrams for the Workshop handouts.

Every figure here exists in two forms: complete, as the MODEL that carries the
content of a cycle, and blank, as the twin a student rebuilds from memory at
the end of the handout. The `blank` flag is threaded through each builder
rather than implemented as a second drawing, so the two can never drift apart.

Design rules, enforced by habit rather than by code:
  - labels live inside the figure, never in a legend
  - one idea per figure
  - the regions a question will name are named in the figure
  - readable when photocopied in grey: colour reinforces, never carries
"""
import os
import subprocess
import tempfile
import hashlib
import textwrap

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, 'wsart_cache')
CHROME = '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell'

# ---- palette ----------------------------------------------------------------
# Three hues only, so a photocopy stays legible: ink for structure, indigo for
# the thing being taught, amber for the thing being contrasted with it. Grey is
# for scaffolding the student writes over.
PAPER = '#ffffff'
INK = '#1f2430'
INDIGO = '#2f3673'
INDIGO_L = '#dfe2f4'
INDIGO_M = '#8f97d4'
AMBER = '#9a5b16'
AMBER_L = '#f7e8d2'
TEAL = '#15655a'
TEAL_L = '#d9ece8'
RED = '#9d2f28'
RED_L = '#f6dedb'
GREY = '#6b7280'
GREY_L = '#aab2c0'
RULE = '#d8dce8'
SOFT = '#f4f6fb'
BLANKF = '#fcfcfd'          # fill of a box the student completes
BLANKS = '#b9c0d0'          # stroke of a box the student completes

F = 'DejaVu Sans'
_W_REG, _W_BOLD = 0.555, 0.625


# ---- primitives -------------------------------------------------------------
def tw(text, size, bold=False):
    return len(text) * size * (_W_BOLD if bold else _W_REG)


def wrap(text, width_px, size, bold=False):
    per = max(4, int(width_px / (size * (_W_BOLD if bold else _W_REG))))
    return textwrap.wrap(text, per) or ['']


def esc(s):
    return (s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))


def T(x, y, s, size=19, fill=INK, bold=False, anchor='middle', italic=False,
      mono=False, op=None):
    return ('<text x="%g" y="%g" font-family="%s" font-size="%g" fill="%s"'
            ' text-anchor="%s"%s%s%s>%s</text>'
            % (x, y, 'DejaVu Sans Mono' if mono else F, size, fill, anchor,
               ' font-weight="700"' if bold else '',
               ' font-style="italic"' if italic else '',
               ' opacity="%g"' % op if op is not None else '', esc(s)))


def TW(x, y, s, w, size=18, fill=INK, bold=False, anchor='middle', lead=1.28):
    """Wrapped text, returned as a block of lines centred on y."""
    lines = wrap(s, w, size, bold)
    dy = size * lead
    y0 = y - dy * (len(lines) - 1) / 2.0
    return ''.join(T(x, y0 + i * dy, ln, size, fill, bold, anchor)
                   for i, ln in enumerate(lines))


def R(x, y, w, h, fill='none', stroke=None, sw=2, rx=0, dash=None, op=None):
    return ('<rect x="%g" y="%g" width="%g" height="%g" rx="%g" fill="%s"%s%s%s/>'
            % (x, y, w, h, rx, fill,
               ' stroke="%s" stroke-width="%g"' % (stroke, sw) if stroke else '',
               ' stroke-dasharray="%s"' % dash if dash else '',
               ' opacity="%g"' % op if op is not None else ''))


def C(cx, cy, r, fill, stroke=None, sw=2):
    return ('<circle cx="%g" cy="%g" r="%g" fill="%s"%s/>'
            % (cx, cy, r, fill,
               ' stroke="%s" stroke-width="%g"' % (stroke, sw) if stroke else ''))


def L(x1, y1, x2, y2, stroke=INK, sw=2, dash=None):
    return ('<line x1="%g" y1="%g" x2="%g" y2="%g" stroke="%s" stroke-width="%g"%s/>'
            % (x1, y1, x2, y2, stroke, sw,
               ' stroke-dasharray="%s"' % dash if dash else ''))


def P(d, fill='none', stroke=None, sw=2, dash=None):
    return ('<path d="%s" fill="%s"%s%s stroke-linecap="round"'
            ' stroke-linejoin="round"/>'
            % (d, fill, ' stroke="%s" stroke-width="%g"' % (stroke, sw) if stroke else '',
               ' stroke-dasharray="%s"' % dash if dash else ''))


def arrow(x1, y1, x2, y2, stroke=INK, sw=2.2, head=9, dash=None):
    """A straight arrow with a solid head, drawn without needing defs."""
    import math
    a = math.atan2(y2 - y1, x2 - x1)
    bx, by = x2 - head * math.cos(a), y2 - head * math.sin(a)
    p1 = (x2, y2)
    p2 = (bx - head * 0.52 * math.sin(a), by + head * 0.52 * math.cos(a))
    p3 = (bx + head * 0.52 * math.sin(a), by - head * 0.52 * math.cos(a))
    return (L(x1, y1, bx, by, stroke, sw, dash)
            + P('M%g %g L%g %g L%g %g Z' % (p1 + p2 + p3), fill=stroke))


def curve(x1, y1, x2, y2, bow=40, stroke=INK, sw=2.2, head=9, dash=None):
    """An arrow bowed sideways, for a link that must avoid the middle."""
    import math
    mx, my = (x1 + x2) / 2.0, (y1 + y2) / 2.0
    a = math.atan2(y2 - y1, x2 - x1)
    cx, cy = mx - bow * math.sin(a), my + bow * math.cos(a)
    # tangent at the end of a quadratic Bezier points from the control point
    a2 = math.atan2(y2 - cy, x2 - cx)
    bx, by = x2 - head * math.cos(a2), y2 - head * math.sin(a2)
    p2 = (bx - head * 0.52 * math.sin(a2), by + head * 0.52 * math.cos(a2))
    p3 = (bx + head * 0.52 * math.sin(a2), by - head * 0.52 * math.cos(a2))
    return (P('M%g %g Q%g %g %g %g' % (x1, y1, cx, cy, bx, by), 'none', stroke, sw, dash)
            + P('M%g %g L%g %g L%g %g Z' % ((x2, y2) + p2 + p3), fill=stroke))


def box(x, y, w, h, title, body=None, fill=SOFT, stroke=INDIGO, sw=2.2,
        tsz=19, bsz=17, rx=7, tcol=None):
    """A labelled box: title in bold, optional wrapped body under it."""
    g = [R(x, y, w, h, fill, stroke, sw, rx)]
    if body:
        g.append(T(x + w / 2.0, y + h / 2.0 - 4, title, tsz,
                   tcol or stroke, True))
        g.append(TW(x + w / 2.0, y + h / 2.0 + bsz * 0.95, body, w - 16,
                    bsz, GREY))
    else:
        g.append(TW(x + w / 2.0, y + h / 2.0 + tsz * 0.33, title, w - 16,
                    tsz, tcol or stroke, True))
    return ''.join(g)


def slot(x, y, w, h, hint=None, rx=6):
    """An empty box for the student to fill, with an optional faint hint."""
    g = [R(x, y, w, h, BLANKF, BLANKS, 2, rx, dash='5 4')]
    if hint:
        g.append(TW(x + w / 2.0, y + h / 2.0 + 5, hint, w - 14, 15, GREY_L))
    return ''.join(g)


def ruleline(x, y, w, sw=1.6):
    return L(x, y, x + w, y, BLANKS, sw, dash='4 4')


def caplabel(x, y, s, size=16, fill=GREY, anchor='middle'):
    return T(x, y, s, size, fill, False, anchor, italic=True)


# ---- renderer ---------------------------------------------------------------
def render(svg_body, w, h, bg=PAPER):
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" '
           'viewBox="0 0 %d %d"><rect width="%d" height="%d" fill="%s"/>%s</svg>'
           % (w, h, w, h, w, h, bg, svg_body))
    key = hashlib.sha1(svg.encode()).hexdigest()
    os.makedirs(CACHE, exist_ok=True)
    out = os.path.join(CACHE, key + '.png')
    if not os.path.exists(out):
        html = ('<!doctype html><meta charset="utf-8"><style>html,body'
                '{margin:0;padding:0;background:%s}svg{display:block}</style>%s'
                % (bg, svg))
        with tempfile.NamedTemporaryFile('w', suffix='.html', delete=False) as f:
            f.write(html)
            src = f.name
        # 2x device scale, then the PNG is placed at half size in the document,
        # so a photocopied sheet still has clean type.
        subprocess.run([CHROME, '--headless', '--no-sandbox', '--disable-gpu',
                        '--hide-scrollbars', '--force-device-scale-factor=2',
                        '--window-size=%d,%d' % (w, h),
                        '--screenshot=' + out, 'file://' + src],
                       capture_output=True, timeout=180)
        os.unlink(src)
        try:
            from PIL import Image
            im = Image.open(out).convert('RGB')
            im.quantize(colors=256, method=Image.MEDIANCUT,
                        dither=Image.NONE).save(out, 'PNG', optimize=True)
        except Exception:
            pass
    data = open(out, 'rb').read()
    try:
        from PIL import Image
        px = Image.open(out).size
    except Exception:
        px = (w * 2, h * 2)
    return data, px[0], px[1]


# ---- measured canvas --------------------------------------------------------
def wrapped_h(s, w, size=18, lead=1.28, bold=False):
    """Height a wrapped block will occupy. Used to size a box before drawing."""
    return len(wrap(s, w, size, bold)) * size * lead


class Canvas(object):
    """An SVG canvas that remembers how far down it has been drawn.

    Every figure in the first draft had its height guessed by hand, and three
    of the twelve silently cut off their last line. Here each helper reports
    the bottom of what it drew, the canvas keeps the maximum, and the height
    is computed at render time. A figure can no longer be too short.
    """

    def __init__(self, w, pad=20, blank=False):
        self.w = w
        self.pad = pad
        self.blank = blank
        self.g = []
        self.bot = 0.0

    # -- bookkeeping
    def _b(self, y):
        if y > self.bot:
            self.bot = y
        return y

    def raw(self, svg, bottom=0):
        self.g.append(svg)
        return self._b(bottom)

    # -- primitives that measure themselves
    def text(self, x, y, s, size=19, fill=INK, bold=False, anchor='middle',
             italic=False, mono=False):
        self.g.append(T(x, y, s, size, fill, bold, anchor, italic, mono))
        return self._b(y + size * 0.30)

    def wrapped(self, x, y, s, w, size=18, fill=INK, bold=False,
                anchor='middle', lead=1.28):
        """Wrapped text whose FIRST baseline is y. Returns the bottom."""
        lines = wrap(s, w, size, bold)
        dy = size * lead
        for i, ln in enumerate(lines):
            self.g.append(T(x, y + i * dy, ln, size, fill, bold, anchor))
        return self._b(y + (len(lines) - 1) * dy + size * 0.30)

    def centred(self, x, ymid, s, w, size=18, fill=INK, bold=False, lead=1.28):
        """Wrapped text centred vertically on ymid."""
        h = wrapped_h(s, w, size, lead, bold)
        return self.wrapped(x, ymid - h / 2.0 + size * 0.78, s, w, size, fill,
                            bold, 'middle', lead)

    def rect(self, x, y, w, h, fill='none', stroke=None, sw=2, rx=0, dash=None,
             op=None):
        self.g.append(R(x, y, w, h, fill, stroke, sw, rx, dash, op))
        return self._b(y + h)

    def line(self, x1, y1, x2, y2, stroke=INK, sw=2, dash=None):
        self.g.append(L(x1, y1, x2, y2, stroke, sw, dash))
        return self._b(max(y1, y2))

    def circle(self, cx, cy, r, fill, stroke=None, sw=2):
        self.g.append(C(cx, cy, r, fill, stroke, sw))
        return self._b(cy + r)

    def path(self, d, fill='none', stroke=None, sw=2, dash=None, bottom=0):
        self.g.append(P(d, fill, stroke, sw, dash))
        return self._b(bottom)

    def arrow(self, x1, y1, x2, y2, stroke=INK, sw=2.2, head=9, dash=None):
        self.g.append(arrow(x1, y1, x2, y2, stroke, sw, head, dash))
        return self._b(max(y1, y2))

    def curve(self, x1, y1, x2, y2, bow=40, stroke=INK, sw=2.2, head=9,
              dash=None):
        self.g.append(curve(x1, y1, x2, y2, bow, stroke, sw, head, dash))
        return self._b(max(y1, y2) + abs(bow) * 0.5)

    # -- composite blocks
    def card(self, x, y, w, title, body=None, fill=SOFT, stroke=INDIGO, sw=2.2,
             tsz=18, bsz=14, rx=7, minh=36, tcol=None, pad=11):
        """A labelled box that sizes itself to its text. Returns (height)."""
        th = wrapped_h(title, w - 2 * pad, tsz, 1.2, True)
        bh = wrapped_h(body, w - 2 * pad, bsz, 1.22) + 4 if body else 0
        h = max(minh, th + bh + 2 * pad)
        if self.blank:
            self.g.append(R(x, y, w, h, BLANKF, BLANKS, 2, rx, dash='5 4'))
            self._b(y + h)
            return h
        self.g.append(R(x, y, w, h, fill, stroke, sw, rx))
        cy = y + pad + tsz * 0.80
        for i, ln in enumerate(wrap(title, w - 2 * pad, tsz, True)):
            self.g.append(T(x + w / 2.0, cy + i * tsz * 1.2, ln, tsz,
                            tcol or stroke, True))
        if body:
            by = y + pad + th + 4 + bsz * 0.80
            for i, ln in enumerate(wrap(body, w - 2 * pad, bsz)):
                self.g.append(T(x + w / 2.0, by + i * bsz * 1.22, ln, bsz,
                                GREY))
        self._b(y + h)
        return h

    def note(self, x, y, w, s, fill=SOFT, stroke=GREY_L, tcol=INK, size=16,
             pad=10, rx=6, bold=False):
        """A full-width note band that sizes itself. Returns the height."""
        h = wrapped_h(s, w - 2 * pad - 14, size, 1.26, bold) + 2 * pad
        self.g.append(R(x, y, w, h, fill, stroke, 1.9, rx))
        if not self.blank:
            self.wrapped(x + w / 2.0, y + pad + size * 0.80, s,
                         w - 2 * pad - 14, size, tcol, bold)
        else:
            n = len(wrap(s, w - 2 * pad - 14, size, bold))
            for i in range(n):
                yy = y + pad + size * (0.80 + i * 1.26)
                self.g.append(L(x + pad + 7, yy + 3, x + w - pad - 7, yy + 3,
                                BLANKS, 1.6, '4 4'))
        self._b(y + h)
        return h

    def lab(self, x, y, s, size=16, fill=INK, bold=False, anchor='middle'):
        """A single label that becomes a writing rule in the blank twin."""
        if not self.blank:
            return self.text(x, y, s, size, fill, bold, anchor)
        wd = max(80, tw(s, size, bold))
        x0 = {'middle': x - wd / 2.0, 'start': x, 'end': x - wd}[anchor]
        self.g.append(L(x0, y + 4, x0 + wd, y + 4, BLANKS, 1.6, '4 4'))
        return self._b(y + 6)

    def labwrap(self, x, y, s, w, size=16, fill=INK, bold=False,
                anchor='middle'):
        if not self.blank:
            return self.wrapped(x, y, s, w, size, fill, bold, anchor)
        n = len(wrap(s, w, size, bold))
        for i in range(n):
            yy = y + i * size * 1.28
            self.g.append(L(x - w / 2.0, yy + 3, x + w / 2.0, yy + 3, BLANKS,
                            1.6, '4 4'))
        return self._b(y + (n - 1) * size * 1.28 + 6)

    def slot(self, x, y, w, h, hint=None, rx=6):
        self.g.append(slot(x, y, w, h, hint, rx))
        return self._b(y + h)

    # -- output
    def svg(self):
        return ''.join(self.g)

    def render(self):
        return render(self.svg(), self.w, int(round(self.bot + self.pad)))
