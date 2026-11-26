# -*- coding: utf-8 -*-
"""Illustration engine for the EPS design system: SVG primitives, figures, people."""
import io, os, math
import cairosvg

W      = 3000
BAND   = 212
BORDER = '#5A5A5A'
BG     = '#F7FAFD'
STRIP  = '#E9F0F7'
NAVY   = '#1F3864'
TEAL   = '#009688'
BLUE   = '#1A5FB4'
LEVEL_ACCENT = {'A2': '#0B4F6C', 'B1': '#14532D', 'B2': '#7B2D26', 'C1': '#1C3661'}
ACCENT = '#14532D'


def set_accent(level):
    global ACCENT
    ACCENT = LEVEL_ACCENT.get(level, '#14532D')
ORANGE = '#D98324'
RED    = '#B3261E'
GREEN  = '#2E7D32'
INK    = '#26303B'
MUTE   = '#5A6672'
FONT   = 'DejaVu Sans'

SKINS = {'blue': '#E8C49A', 'teal': '#D9A066', 'purple': '#F2D9C0',
         'green': '#7A4A28', 'orange': '#F2D7BC', 'grey': '#C68A5E'}
HAIRS = {'blue': '#4A3420', 'teal': '#2B2B2B', 'purple': '#171013',
         'green': '#171311', 'orange': '#C9A227', 'grey': '#3A2A1E'}
SHIRTS = {'blue': '#3C6E9F', 'teal': '#4E8D7C', 'purple': '#6C5B8E',
          'green': '#4F7A4A', 'orange': '#C77C3C', 'grey': '#7A8691'}


def esc(s):
    return (str(s).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))


def _shade(hexcol, f=0.80):
    h = hexcol.lstrip('#')
    r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    return '#%02X%02X%02X' % (int(r * f), int(g * f), int(b * f))


# ---------------------------------------------------------------- primitives
def rect(x, y, w, h, fill, stroke=None, sw=3, rx=0):
    s = ' stroke="%s" stroke-width="%d"' % (stroke, sw) if stroke else ''
    r = ' rx="%d"' % rx if rx else ''
    return '<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" fill="%s"%s%s/>' % (x, y, w, h, fill, s, r)


def circ(cx, cy, r, fill, stroke=None, sw=3):
    s = ' stroke="%s" stroke-width="%d"' % (stroke, sw) if stroke else ''
    return '<circle cx="%.1f" cy="%.1f" r="%.1f" fill="%s"%s/>' % (cx, cy, r, fill, s)


def line(x1, y1, x2, y2, col, sw=4, dash=None):
    d = ' stroke-dasharray="%s"' % dash if dash else ''
    return ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="%d" '
            'stroke-linecap="round"%s/>' % (x1, y1, x2, y2, col, sw, d))


def path(d, fill='none', stroke=None, sw=4):
    s = ' stroke="%s" stroke-width="%d" stroke-linejoin="round" stroke-linecap="round"' % (stroke, sw) if stroke else ''
    return '<path d="%s" fill="%s"%s/>' % (d, fill, s)


def t(x, y, s, size=56, fill=INK, bold=False, anchor='middle', italic=False, ls=None):
    a = ''
    if bold:   a += ' font-weight="bold"'
    if italic: a += ' font-style="italic"'
    if ls is not None: a += ' letter-spacing="%s"' % ls
    return ('<text x="%.1f" y="%.1f" text-anchor="%s" font-family="%s" font-size="%d" '
            'fill="%s"%s>%s</text>' % (x, y, anchor, FONT, size, fill, a, esc(s)))


# --- text metrics ---------------------------------------------------------
# DejaVu Sans advance widths, as a fraction of the font size. Measured once
# with PIL against the shipped font and kept here so figure code can size a
# box to its text without loading the font on every call.
_NARROW = set(" .,:;'!|il-\u00b7")
_WIDE = set("MWmw@")


_FCACHE = {}


def _font(size, bold):
    key = (int(size), bool(bold))
    if key not in _FCACHE:
        try:
            from PIL import ImageFont
            path = ('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf' if bold
                    else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf')
            _FCACHE[key] = ImageFont.truetype(path, int(size))
        except Exception:
            _FCACHE[key] = None
    return _FCACHE[key]


def text_w(s, size, bold=False):
    """Rendered width of s at this font size, in SVG units.

    Uses the real DejaVu metrics when PIL can load the font, so a box sized
    from this value cannot be narrower than the text it must hold; falls back
    to a deliberately generous estimate if the font is unavailable.
    """
    f = _font(size, bold)
    if f is not None:
        return f.getlength(s)
    u = 0.0
    for ch in s:
        if ch in _NARROW:
            u += 0.30
        elif ch in _WIDE:
            u += 0.88
        elif ch.isupper() or ch.isdigit():
            u += 0.67
        else:
            u += 0.58
    if bold:
        u *= 1.045
    return u * size


def wrap(s, n):
    words, out, cur = s.split(), [], ''
    for w in words:
        if len(cur) + len(w) + 1 <= n:
            cur = (cur + ' ' + w).strip()
        else:
            out.append(cur); cur = w
    if cur: out.append(cur)
    return out


# ---------------------------------------------------------------- people
def avatar(cx, cy, scale=1.0, shirt='blue', hair='short', prop=None):
    """A seated/standing figure, head to waist. cy is the chin line."""
    S = scale
    skin = SKINS.get(shirt, '#E8C49A'); skin_d = _shade(skin)
    hr = HAIRS.get(shirt, '#2B2B2B'); sh = SHIRTS.get(shirt, '#3C6E9F')
    o = []
    # body
    o.append(path('M %.1f %.1f a %.1f %.1f 0 0 1 %.1f 0 L %.1f %.1f L %.1f %.1f Z'
                  % (cx - 130 * S, cy + 250 * S, 130 * S, 150 * S, 260 * S,
                     cx + 130 * S, cy + 400 * S, cx - 130 * S, cy + 400 * S), fill=sh))
    o.append(path('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                  % (cx - 22 * S, cy + 245 * S, cx + 22 * S, cy + 245 * S,
                     cx + 34 * S, cy + 340 * S, cx - 34 * S, cy + 340 * S), fill='#EEF2F5'))
    # head
    o.append(circ(cx, cy + 95 * S, 115 * S, skin))
    o.append(path('M %.1f %.1f a %.1f %.1f 0 0 1 %.1f 0 Z'
                  % (cx - 118 * S, cy + 80 * S, 118 * S, 110 * S, 236 * S), fill=hr))
    if hair == 'long':
        o.append(path('M %.1f %.1f q %.1f %.1f %.1f %.1f L %.1f %.1f q %.1f %.1f %.1f %.1f Z'
                      % (cx - 118 * S, cy + 70 * S, 0, 150 * S, -14 * S, 185 * S,
                         cx - 70 * S, cy + 215 * S, 20 * S, -70 * S, 12 * S, -150 * S), fill=hr))
        o.append(path('M %.1f %.1f q %.1f %.1f %.1f %.1f L %.1f %.1f q %.1f %.1f %.1f %.1f Z'
                      % (cx + 118 * S, cy + 70 * S, 0, 150 * S, 14 * S, 185 * S,
                         cx + 70 * S, cy + 215 * S, -20 * S, -70 * S, -12 * S, -150 * S), fill=hr))
    # face
    for dx in (-42, 42):
        o.append(circ(cx + dx * S, cy + 82 * S, 11 * S, '#1A1A1A'))
        o.append(path('M %.1f %.1f q %.1f %.1f %.1f %.1f' % (cx + (dx - 26) * S, cy + 46 * S,
                      26 * S, -18 * S, 52 * S, 0), stroke='#3A2A1E', sw=int(7 * S) or 1))
    o.append(path('M %.1f %.1f q %.1f %.1f %.1f %.1f' % (cx - 34 * S, cy + 140 * S,
                  34 * S, 30 * S, 68 * S, 0), stroke=skin_d, sw=int(8 * S) or 1))
    return ''.join(o)


def desk(x, y, w, h, top='#C9A227', body='#B8860B'):
    return rect(x, y, w, 26, top) + rect(x, y + 26, w, h - 26, body)


# ---------------------------------------------------------------- frame
def frame(height, title=None, bandcol=None, bg=BG):
    bandcol = bandcol or ACCENT
    o = [rect(0, 0, W, height, bg, stroke=BORDER, sw=4)]
    if title:
        o.append(rect(0, 0, W, BAND, bandcol))
        size = 84
        while text_w(title, size, bold=True) > W - 160 and size > 40:
            size -= 2
        o.append(t(W / 2, BAND * 0.68, title, size, '#FFFFFF', bold=True))
    return ''.join(o)


def svg(height, inner):
    return ('<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d">'
            % (W, height, W, height)) + inner + '</svg>'


def render(inner, height, out_png):
    cairosvg.svg2png(bytestring=svg(height, inner).encode('utf-8'),
                     write_to=out_png, output_width=W, output_height=height)
    return out_png
