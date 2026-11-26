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


# ---------------------------------------------------------------- people
SKIN = {'1': '#F3D2B3', '2': '#E8BC94', '3': '#D59C6E', '4': '#B07A4E',
        '5': '#8D5A34', '6': '#5E3A20'}
HAIRC = {'black': '#2A2320', 'dark': '#3E2C1E', 'brown': '#6B4A2B',
         'auburn': '#8A4A2B', 'grey': '#9AA0A6', 'fair': '#C8A464'}
TUNIC = {'teal': '#3F8E84', 'blue': '#3C6E9F', 'green': '#4F7A4A',
         'plum': '#6C5B8E', 'sand': '#B98A5A', 'grey': '#8A939B'}


def person(cx, cy, s=1.0, skin='3', hair='black', style='short', tunic='teal',
           mask=False, glasses=False, look='straight', smile=True):
    """Head, face and shoulders, with every feature present.

    s=1.0 gives a head about 300 units wide. Draw at (cx, cy) = centre of head.
    """
    o = []
    sk, hc, tc = SKIN[skin], HAIRC[hair], TUNIC[tunic]
    hw, hh = 150 * s, 185 * s            # head half-width, half-height
    # --- neck
    o.append(rect(cx - 52 * s, cy + 110 * s, 104 * s, 235 * s, _shade(sk, 0.92),
                  stroke=LEAD, sw=4 * s))
    # --- shoulders and tunic
    o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f L %.1f %.1f Z'
                  % (cx - 330 * s, cy + 470 * s,
                     cx - 300 * s, cy + 150 * s, cx + 300 * s, cy + 150 * s,
                     cx + 330 * s, cy + 470 * s,
                     cx - 330 * s, cy + 470 * s), fill=tc, stroke=LEAD, sw=4 * s))
    # collar V
    o.append(path('M %.1f %.1f L %.1f %.1f L %.1f %.1f'
                  % (cx - 78 * s, cy + 258 * s, cx, cy + 358 * s, cx + 78 * s, cy + 258 * s),
                  stroke=LEAD, sw=4 * s))
    # --- ears
    for d in (-1, 1):
        o.append('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="%s" '
                 'stroke="%s" stroke-width="%.1f"/>'
                 % (cx + d * (hw - 4 * s), cy + 14 * s, 26 * s, 38 * s, sk, LEAD, 4 * s))
    # --- head
    o.append('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="%s" '
             'stroke="%s" stroke-width="%.1f"/>' % (cx, cy, hw, hh, sk, LEAD, 5 * s))
    # --- hair
    if style == 'short':
        o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f '
                      'C %.1f %.1f %.1f %.1f %.1f %.1f Z'
                      % (cx - hw, cy - 20 * s,
                         cx - hw * 1.02, cy - hh * 1.15, cx + hw * 1.02, cy - hh * 1.15,
                         cx + hw, cy - 20 * s,
                         cx + hw * 0.6, cy - hh * 0.72, cx - hw * 0.6, cy - hh * 0.72,
                         cx - hw, cy - 20 * s), fill=hc))
    elif style == 'long':
        o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f '
                      'L %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f Z'
                      % (cx - hw * 1.18, cy + 210 * s,
                         cx - hw * 1.3, cy - hh * 1.2, cx + hw * 1.3, cy - hh * 1.2,
                         cx + hw * 1.18, cy + 210 * s,
                         cx + hw * 0.86, cy + 190 * s,
                         cx + hw * 1.0, cy - hh * 0.3, cx - hw * 1.0, cy - hh * 0.3,
                         cx - hw * 0.86, cy + 190 * s), fill=hc))
        o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f Z'
                      % (cx - hw, cy - 30 * s,
                         cx - hw, cy - hh * 1.1, cx + hw, cy - hh * 1.1,
                         cx + hw, cy - 30 * s), fill=hc))
    elif style == 'tied':
        o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f Z'
                      % (cx - hw, cy - 25 * s,
                         cx - hw * 1.05, cy - hh * 1.18, cx + hw * 1.05, cy - hh * 1.18,
                         cx + hw, cy - 25 * s), fill=hc))
        o.append(circ(cx + hw * 1.02, cy - hh * 0.42, 54 * s, hc, stroke=LEAD, sw=3 * s))
    elif style == 'headscarf':
        o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f '
                      'L %.1f %.1f L %.1f %.1f Z'
                      % (cx - hw * 1.12, cy + 150 * s,
                         cx - hw * 1.25, cy - hh * 1.25, cx + hw * 1.25, cy - hh * 1.25,
                         cx + hw * 1.12, cy + 150 * s,
                         cx + hw * 0.5, cy + 250 * s, cx - hw * 0.5, cy + 250 * s),
                      fill=_shade(tc, 1.0), stroke=LEAD, sw=4 * s))
        o.append('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="%s"/>'
                 % (cx, cy + 10 * s, hw * 0.82, hh * 0.80, sk))
    elif style == 'cap':
        o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f Z'
                      % (cx - hw, cy - 40 * s,
                         cx - hw, cy - hh * 1.25, cx + hw, cy - hh * 1.25,
                         cx + hw, cy - 40 * s), fill='#E8EEF3', stroke=LEAD, sw=4 * s))
    elif style == 'bald':
        pass
    # --- eyebrows
    dx = {'straight': 0, 'left': -10 * s, 'right': 10 * s}[look]
    for d in (-1, 1):
        ex = cx + d * 60 * s
        o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (ex - 36 * s, cy - 62 * s, ex, cy - 82 * s, ex + 36 * s, cy - 62 * s),
                      stroke=hc if hair != 'grey' else '#8A8F94', sw=9 * s))
    # --- eyes
    for d in (-1, 1):
        ex = cx + d * 60 * s
        o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                      % (ex - 38 * s, cy - 16 * s, ex, cy - 44 * s, ex + 38 * s, cy - 16 * s,
                         ex, cy + 10 * s, ex - 38 * s, cy - 16 * s),
                      fill='#FFFFFF', stroke=LEAD, sw=3.5 * s))
        o.append(circ(ex + dx, cy - 16 * s, 15 * s, '#4A3A2A'))
        o.append(circ(ex + dx, cy - 16 * s, 6 * s, LEAD))
        o.append(circ(ex + dx - 5 * s, cy - 22 * s, 4 * s, '#FFFFFF'))
        o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (ex - 38 * s, cy - 16 * s, ex, cy - 46 * s, ex + 38 * s, cy - 16 * s),
                      stroke=LEAD, sw=4 * s))
    # --- nose
    o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                  % (cx - 4 * s, cy + 6 * s, cx - 20 * s, cy + 48 * s, cx + 14 * s, cy + 50 * s),
                  stroke=_shade(sk, 0.72), sw=5 * s))
    # --- mouth
    if smile:
        o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (cx - 48 * s, cy + 92 * s, cx, cy + 128 * s, cx + 48 * s, cy + 92 * s),
                      stroke='#9C5B55', sw=7 * s))
    else:
        o.append(line(cx - 44 * s, cy + 100 * s, cx + 44 * s, cy + 100 * s, '#9C5B55', 7 * s))
    # --- mask over nose and mouth
    if mask:
        o.append(path('M %.1f %.1f L %.1f %.1f Q %.1f %.1f %.1f %.1f '
                      'Q %.1f %.1f %.1f %.1f Z'
                      % (cx - hw * 0.92, cy + 2 * s, cx + hw * 0.92, cy + 2 * s,
                         cx + hw * 0.55, cy + 170 * s, cx, cy + 172 * s,
                         cx - hw * 0.55, cy + 170 * s, cx - hw * 0.92, cy + 2 * s),
                      fill='#CFE3EF', stroke=LEAD, sw=4 * s))
        for d in (-1, 1):
            o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                          % (cx + d * hw * 0.90, cy + 10 * s,
                             cx + d * hw * 1.26, cy - 34 * s,
                             cx + d * (hw + 16 * s), cy - 20 * s), stroke=LEAD, sw=4 * s))
    # --- glasses or loupes
    if glasses:
        for d in (-1, 1):
            o.append(circ(cx + d * 60 * s, cy - 16 * s, 52 * s, 'none', stroke=LEAD, sw=5 * s))
        o.append(line(cx - 8 * s, cy - 16 * s, cx + 8 * s, cy - 16 * s, LEAD, 5 * s))
        for d in (-1, 1):
            o.append(line(cx + d * 112 * s, cy - 22 * s, cx + d * (hw + 4 * s), cy - 10 * s,
                          LEAD, 4 * s))
    return ''.join(o)


def bubble2(x, y, w, h, lines, point='down', fill='#FFFFFF', size=40):
    """A speech bubble whose tail points at a speaker."""
    o = [rect(x, y, w, h, fill, stroke=LEAD, sw=4, rx=26)]
    if point == 'down':
        o.append(path('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                      % (x + w * 0.3, y + h, x + w * 0.38, y + h + 58, x + w * 0.52, y + h),
                      fill=fill, stroke=LEAD, sw=4))
        o.append(line(x + w * 0.3 + 4, y + h, x + w * 0.52 - 4, y + h, fill, 7))
    ly = y + (h - (len(lines) - 1) * (size + 14)) / 2 + size * 0.34
    for i, L in enumerate(lines):
        o.append(t(x + w / 2, ly + i * (size + 14), L, size, INK))
    return ''.join(o)
