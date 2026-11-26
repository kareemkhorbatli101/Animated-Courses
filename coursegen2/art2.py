# -*- coding: utf-8 -*-
"""Second-edition illustration engine.

Adds to art.py the things a clinical textbook figure needs and a language
coursebook figure did not: leader lines and callouts, label pins, embedded
third-party base art, brackets, arrows, and a greyscale-safe palette.
"""
import base64, math, os
from art import (W, BAND, BORDER, BG, STRIP, INK, MUTE, FONT, ACCENT,
                 rect, circ, line, path, t, text_w, wrap, frame, svg, render,
                 esc, _shade, set_accent)
import art

# --- palette -------------------------------------------------------------
# Every colour pairs with a hatch or a shape so nothing depends on hue alone.
ENAMEL   = '#F2EFE6'
DENTINE  = '#E8D6B8'
PULP     = '#C4546A'
BONE     = '#E4DCC4'
GUM      = '#D98BA0'
METAL    = '#B9C3CC'
PLASTIC  = '#CFE3EF'
PAPER    = '#FFFFFF'
HILITE   = '#FFF3C4'
LEAD     = '#2B3440'

GREYSAFE = {ENAMEL: 0.94, DENTINE: 0.80, PULP: 0.52, BONE: 0.86,
            GUM: 0.66, METAL: 0.74, PLASTIC: 0.88}


def hatch_def(idx, angle=45, col=LEAD, gap=22, sw=3):
    """A hatch pattern so a fill still reads in monochrome."""
    return ('<defs><pattern id="h%d" width="%d" height="%d" '
            'patternTransform="rotate(%d)" patternUnits="userSpaceOnUse">'
            '<line x1="0" y1="0" x2="0" y2="%d" stroke="%s" stroke-width="%d"/>'
            '</pattern></defs>' % (idx, gap, gap, angle, gap, col, sw))


def hatched(x, y, w, h, idx, rx=0):
    return ('<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="%d" '
            'fill="url(#h%d)" opacity="0.5"/>' % (x, y, w, h, rx, idx))


# --- labelling -----------------------------------------------------------
def pin(cx, cy, n, r=34, fill='#FFFFFF'):
    """A numbered pin that anchors a label to a point on the art."""
    return (circ(cx, cy, r, fill, stroke=LEAD, sw=4)
            + t(cx, cy + r * 0.34, str(n), int(r * 1.15), LEAD, bold=True))


def leader(x1, y1, x2, y2, col=LEAD, sw=3, dot=True):
    o = [line(x1, y1, x2, y2, col, sw)]
    if dot:
        o.append(circ(x1, y1, 9, col))
    return ''.join(o)


def callout(px, py, lx, ly, label, size=46, side='right', col=LEAD):
    """A dot on the thing, a line out to a label set clear of the art."""
    anchor = 'start' if side == 'right' else 'end'
    pad = 18 if side == 'right' else -18
    return (leader(px, py, lx, ly, col)
            + t(lx + pad, ly + size * 0.35, label, size, col, anchor=anchor))


def label_key(x, y, rows, size=44, w=None, title=None):
    """A numbered key beside a figure: 1 enamel, 2 dentine, ..."""
    o = []
    yy = y
    if title:
        o.append(t(x, yy, title, int(size * 1.05), LEAD, bold=True, anchor='start'))
        yy += size + 26
    for i, lab in enumerate(rows, 1):
        o.append(pin(x + 30, yy - size * 0.30, i, r=28))
        o.append(t(x + 86, yy, lab, size, INK, anchor='start'))
        yy += size + 30
    return ''.join(o), yy


def bracket(x, y1, y2, label='', size=42, side='right'):
    d = 26 if side == 'right' else -26
    o = [path('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f'
              % (x, y1, x + d, y1, x + d, y2, x, y2), stroke=LEAD, sw=4)]
    if label:
        o.append(t(x + d + (18 if side == 'right' else -18), (y1 + y2) / 2 + size * 0.34,
                   label, size, INK, anchor='start' if side == 'right' else 'end'))
    return ''.join(o)


def arrow(x1, y1, x2, y2, col=LEAD, sw=5, head=26):
    ang = math.atan2(y2 - y1, x2 - x1)
    hx, hy = x2 - head * math.cos(ang), y2 - head * math.sin(ang)
    p1 = (hx - head * 0.55 * math.sin(ang), hy + head * 0.55 * math.cos(ang))
    p2 = (hx + head * 0.55 * math.sin(ang), hy - head * 0.55 * math.cos(ang))
    return (line(x1, y1, hx, hy, col, sw)
            + path('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                   % (x2, y2, p1[0], p1[1], p2[0], p2[1]), fill=col))


# --- embedded base art ---------------------------------------------------
def embed(png_path, x, y, w, h, opacity=1.0):
    """Place a licensed raster (Tier 2/3) as a base layer to label over."""
    with open(png_path, 'rb') as fh:
        b64 = base64.b64encode(fh.read()).decode('ascii')
    return ('<image x="%.1f" y="%.1f" width="%.1f" height="%.1f" opacity="%.2f" '
            'preserveAspectRatio="xMidYMid meet" '
            'xlink:href="data:image/png;base64,%s" '
            'xmlns:xlink="http://www.w3.org/1999/xlink"/>' % (x, y, w, h, opacity, b64))


def credit(x, y, text, size=34):
    return t(x, y, text, size, MUTE, anchor='start', italic=True)


def svg2(height, inner, defs=''):
    return ('<svg xmlns="http://www.w3.org/2000/svg" '
            'xmlns:xlink="http://www.w3.org/1999/xlink" '
            'width="%d" height="%d" viewBox="0 0 %d %d">'
            % (W, height, W, height)) + defs + inner + '</svg>'


def render2(inner, height, out_png, defs=''):
    import cairosvg
    cairosvg.svg2png(bytestring=svg2(height, inner, defs).encode('utf-8'),
                     write_to=out_png, output_width=W, output_height=height)
    return out_png
