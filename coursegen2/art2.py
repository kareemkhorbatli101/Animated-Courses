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


# ---------------------------------------------------------- print metrics
# One SVG unit at the printed width of a figure. A figure is placed at the
# full text measure (CONTENT_IN inches) and authored at W units wide, so a
# label of N units prints at N * PT_PER_U points. Figure type is sized in
# points from here and never in bare units, which is what made the first
# round's tables print at six point against eleven-point body text.
CONTENT_IN = 6.270833333333333
PT_PER_U = (CONTENT_IN * 72.0) / W          # 0.1505
U_PER_PT = 1.0 / PT_PER_U                   # 6.645


def pt(points):
    """Font size in SVG units that prints at `points` on the page."""
    return int(round(points * U_PER_PT))


# Named sizes, so a figure never invents its own.
FS_TITLE = pt(13)      # the blue band
FS_HEAD  = pt(10.5)    # column heads, card heads
FS_BODY  = pt(10)      # ordinary figure text, matched to the 11pt page
FS_SMALL = pt(9)       # second-rank text
FS_NOTE  = pt(8.5)     # the italic note under a figure
LH_BODY  = int(FS_BODY * 1.34)
LH_SMALL = int(FS_SMALL * 1.34)


def fit(s, size, maxw, bold=False, floor=None):
    """Largest size <= `size` at which s fits maxw. Never returns an overflow."""
    floor = floor or max(pt(6.5), int(size * 0.5))
    while size > floor and text_w(s, size, bold) > maxw:
        size -= 1
    return size


def wrap_w(s, size, maxw, bold=False):
    """Wrap by measured width, not by character count.

    wrap() counted characters, so a line of wide letters ran past its box.
    This measures every candidate line and breaks an over-long single word.
    """
    out, cur = [], ''
    for word in str(s).split():
        trial = (cur + ' ' + word).strip()
        if not cur or text_w(trial, size, bold) <= maxw:
            cur = trial
            continue
        out.append(cur)
        cur = word
        while text_w(cur, size, bold) > maxw and len(cur) > 1:
            n = len(cur)
            while n > 1 and text_w(cur[:n] + '-', size, bold) > maxw:
                n -= 1
            out.append(cur[:n] + '-')
            cur = cur[n:]
    if cur:
        out.append(cur)
    return out or ['']


def block(x, y, s, size, maxw, fill=INK, bold=False, anchor='start',
          italic=False, lh=None, maxlines=None):
    """Wrapped text that is guaranteed to stay inside maxw.

    Returns (svg, height). If maxlines is given the size is reduced until the
    text fits in that many lines, so nothing is ever silently cut off.
    """
    lh = lh or int(size * 1.34)
    lines = wrap_w(s, size, maxw, bold)
    if maxlines:
        while len(lines) > maxlines and size > pt(6.5):
            size -= 1
            lh = int(size * 1.34)
            lines = wrap_w(s, size, maxw, bold)
    o = []
    for i, ln in enumerate(lines):
        o.append(t(x, y + i * lh + size * 0.78, ln, size, fill, bold=bold,
                   anchor=anchor, italic=italic))
    return ''.join(o), len(lines) * lh


# ---------------------------------------------------------------- people
SKIN = {'1': '#F3D2B3', '2': '#E8BC94', '3': '#D59C6E', '4': '#B07A4E',
        '5': '#8D5A34', '6': '#5E3A20'}
HAIRC = {'black': '#2A2320', 'dark': '#3E2C1E', 'brown': '#6B4A2B',
         'auburn': '#8A4A2B', 'grey': '#9AA0A6', 'fair': '#C8A464'}
TUNIC = {'teal': '#3F8E84', 'blue': '#3C6E9F', 'green': '#4F7A4A',
         'plum': '#6C5B8E', 'sand': '#B98A5A', 'grey': '#8A939B'}
SCARF = {'teal': '#2F6E66', 'blue': '#2C5278', 'green': '#3C5C38',
         'plum': '#51446B', 'sand': '#8C6842', 'grey': '#68707A'}

# A head is 2*HW_U wide and 2*HH_U tall at s=1.0.
HW_U, HH_U = 150.0, 185.0
SHOULDER_U = 470.0      # how far the tunic reaches below the head centre
HALFW_U = 334.0         # how far the shoulders reach either side


def person_box(s=1.0, style='short'):
    """(half_width, top, bottom) of a drawn person, relative to (cx, cy).

    Every caller places a name, a label or a neighbouring card from this, so
    nothing can be printed over a body again. The box is deliberately
    generous: it already includes hair volume and the headscarf drape.
    """
    half = HALFW_U * s
    top = -HH_U * 1.34 * s
    bot = SHOULDER_U * s
    if style == 'long':
        half = max(half, HW_U * 1.42 * s)
    if style == 'headscarf':
        half = max(half, HW_U * 1.46 * s)
        top = -HH_U * 1.40 * s
    if style == 'tied':
        half = max(half, HW_U * 1.30 * s)
    return half, top, bot


def _arc_cap(cx, cy, hw, hh, col, a_left=168.0, a_right=12.0,
             grow=1.07, dip=0.74, stroke=None, sw=0):
    """Hair (or a cap) that sits exactly on the head.

    The upper edge is an arc of an ellipse concentric with the head, so the
    two outlines never part company - the gap between hair and skull was the
    misalignment in the pilot. The lower edge is the hairline: a curve that
    dips to `dip` of the head height in the middle and meets the skull at the
    temples.
    """
    rx, ry = hw * grow, hh * grow
    lx = cx + rx * math.cos(math.radians(a_left))
    ly = cy - ry * math.sin(math.radians(a_left))
    rx2 = cx + rx * math.cos(math.radians(a_right))
    ry2 = cy - ry * math.sin(math.radians(a_right))
    d = ('M %.1f %.1f A %.1f %.1f 0 0 1 %.1f %.1f '
         'C %.1f %.1f %.1f %.1f %.1f %.1f Z'
         % (lx, ly, rx, ry, rx2, ry2,
            cx + hw * 0.58, cy - hh * dip,
            cx - hw * 0.58, cy - hh * dip,
            lx, ly))
    return path(d, fill=col, stroke=stroke, sw=sw)


def person(cx, cy, s=1.0, skin='3', hair='black', style='short', tunic='teal',
           mask=False, glasses=False, look='straight', smile=True):
    """Head, face and shoulders, with every feature present.

    Drawn back to front: hair behind the head, then body, then skull, then
    the hair that falls in front of it, then the face. Drawing in that order
    is what keeps a bun, a plait or a headscarf from landing on a cheek.
    """
    o = []
    sk, hc, tc = SKIN[skin], HAIRC[hair], TUNIC[tunic]
    hw, hh = HW_U * s, HH_U * s

    # --- 1 everything that belongs behind the head -----------------------
    if style == 'long':
        o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f '
                      'L %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f Z'
                      % (cx - hw * 1.30, cy + 250 * s,
                         cx - hw * 1.34, cy - hh * 1.30,
                         cx + hw * 1.34, cy - hh * 1.30,
                         cx + hw * 1.30, cy + 250 * s,
                         cx + hw * 0.92, cy + 250 * s,
                         cx + hw * 1.00, cy - hh * 0.40,
                         cx - hw * 1.00, cy - hh * 0.40,
                         cx - hw * 0.92, cy + 250 * s),
                      fill=hc, stroke=_shade(hc, 0.72), sw=3 * s))
    elif style == 'tied':
        o.append(circ(cx + hw * 0.80, cy - hh * 0.74, 66 * s, hc,
                      stroke=_shade(hc, 0.70), sw=3 * s))
    elif style == 'headscarf':
        o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f '
                      'L %.1f %.1f L %.1f %.1f Z'
                      % (cx - hw * 1.42, cy + 240 * s,
                         cx - hw * 1.46, cy - hh * 1.38,
                         cx + hw * 1.46, cy - hh * 1.38,
                         cx + hw * 1.42, cy + 240 * s,
                         cx + hw * 0.62, cy + 320 * s,
                         cx - hw * 0.62, cy + 320 * s),
                      fill=SCARF.get(tunic, '#4A5A6A'), stroke=LEAD, sw=4 * s))

    # --- 2 neck, then the tunic over it ----------------------------------
    o.append(rect(cx - 54 * s, cy + 100 * s, 108 * s, 250 * s,
                  _shade(sk, 0.90), stroke=_shade(sk, 0.70), sw=3 * s))
    o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f L %.1f %.1f Z'
                  % (cx - HALFW_U * s, cy + SHOULDER_U * s,
                     cx - 300 * s, cy + 150 * s, cx + 300 * s, cy + 150 * s,
                     cx + HALFW_U * s, cy + SHOULDER_U * s,
                     cx - HALFW_U * s, cy + SHOULDER_U * s),
                  fill=tc, stroke=LEAD, sw=4 * s))
    o.append(path('M %.1f %.1f L %.1f %.1f L %.1f %.1f'
                  % (cx - 80 * s, cy + 252 * s, cx, cy + 352 * s,
                     cx + 80 * s, cy + 252 * s), stroke=_shade(tc, 0.70), sw=5 * s))

    # --- 3 ears, then the skull ------------------------------------------
    if style != 'headscarf':
        for d in (-1, 1):
            o.append('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="%s" '
                     'stroke="%s" stroke-width="%.1f"/>'
                     % (cx + d * (hw - 6 * s), cy + 14 * s, 27 * s, 39 * s,
                        sk, LEAD, 4 * s))
    o.append('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="%s" '
             'stroke="%s" stroke-width="%.1f"/>' % (cx, cy, hw, hh, sk, LEAD, 5 * s))

    # --- 4 the hair that falls in front of the skull ---------------------
    if style == 'short':
        o.append(_arc_cap(cx, cy, hw, hh, hc, 170, 10, 1.06, 0.72,
                          stroke=_shade(hc, 0.72), sw=3 * s))
    elif style in ('long', 'tied'):
        o.append(_arc_cap(cx, cy, hw, hh, hc, 172, 8, 1.05, 0.70,
                          stroke=_shade(hc, 0.72), sw=3 * s))
    elif style == 'headscarf':
        o.append(_arc_cap(cx, cy, hw, hh, SCARF.get(tunic, '#4A5A6A'),
                          186, -6, 1.08, 0.62, stroke=LEAD, sw=4 * s))
    elif style == 'cap':
        o.append(_arc_cap(cx, cy, hw, hh, '#E8EEF3', 176, 4, 1.07, 0.66,
                          stroke=LEAD, sw=4 * s))
        o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f'
                      % (cx - hw * 1.04, cy - hh * 0.26,
                         cx - hw * 0.58, cy - hh * 0.70,
                         cx + hw * 0.58, cy - hh * 0.70,
                         cx + hw * 1.04, cy - hh * 0.26),
                      stroke='#9AA8B4', sw=4 * s))
    elif style == 'bald':
        for d in (-1, 1):
            o.append(path('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f'
                          % (cx + d * hw * 0.98, cy - hh * 0.10,
                             cx + d * hw * 0.98, cy - hh * 0.34,
                             cx + d * hw * 0.74, cy - hh * 0.44,
                             cx + d * hw * 0.58, cy - hh * 0.44),
                          stroke=hc, sw=12 * s))

    # --- 5 the face -------------------------------------------------------
    dx = {'straight': 0, 'left': -10 * s, 'right': 10 * s}[look]
    brow = '#8A8F94' if hair == 'grey' else _shade(hc, 0.92)
    for d in (-1, 1):
        ex = cx + d * 62 * s
        o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (ex - 32 * s, cy - 56 * s, ex, cy - 76 * s,
                         ex + 32 * s, cy - 56 * s), stroke=brow, sw=9 * s))
    for d in (-1, 1):
        ex = cx + d * 62 * s
        o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                      % (ex - 38 * s, cy - 14 * s, ex, cy - 42 * s, ex + 38 * s, cy - 14 * s,
                         ex, cy + 12 * s, ex - 38 * s, cy - 14 * s),
                      fill='#FFFFFF', stroke=LEAD, sw=3.5 * s))
        o.append(circ(ex + dx, cy - 14 * s, 15 * s, '#4A3A2A'))
        o.append(circ(ex + dx, cy - 14 * s, 6 * s, LEAD))
        o.append(circ(ex + dx - 5 * s, cy - 20 * s, 4 * s, '#FFFFFF'))
        o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (ex - 38 * s, cy - 14 * s, ex, cy - 44 * s, ex + 38 * s, cy - 14 * s),
                      stroke=LEAD, sw=4 * s))
    o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                  % (cx - 4 * s, cy + 8 * s, cx - 22 * s, cy + 50 * s,
                     cx + 14 * s, cy + 52 * s), stroke=_shade(sk, 0.70), sw=5 * s))
    if smile:
        o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (cx - 48 * s, cy + 92 * s, cx, cy + 128 * s, cx + 48 * s, cy + 92 * s),
                      stroke='#9C5B55', sw=7 * s))
    else:
        o.append(line(cx - 44 * s, cy + 100 * s, cx + 44 * s, cy + 100 * s, '#9C5B55', 7 * s))

    # --- 6 mask and glasses ----------------------------------------------
    if mask:
        o.append(path('M %.1f %.1f L %.1f %.1f Q %.1f %.1f %.1f %.1f '
                      'Q %.1f %.1f %.1f %.1f Z'
                      % (cx - hw * 0.94, cy + 2 * s, cx + hw * 0.94, cy + 2 * s,
                         cx + hw * 0.56, cy + 172 * s, cx, cy + 174 * s,
                         cx - hw * 0.56, cy + 172 * s, cx - hw * 0.94, cy + 2 * s),
                      fill='#CFE3EF', stroke=LEAD, sw=4 * s))
        o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (cx - hw * 0.80, cy + 86 * s, cx, cy + 104 * s,
                         cx + hw * 0.80, cy + 86 * s), stroke='#9DBACB', sw=4 * s))
        for d in (-1, 1):
            o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                          % (cx + d * hw * 0.92, cy + 10 * s,
                             cx + d * hw * 1.22, cy - 30 * s,
                             cx + d * (hw + 10 * s), cy - 6 * s), stroke=LEAD, sw=4 * s))
    if glasses:
        for d in (-1, 1):
            o.append(circ(cx + d * 62 * s, cy - 14 * s, 52 * s, 'none', stroke=LEAD, sw=5 * s))
        o.append(line(cx - 10 * s, cy - 14 * s, cx + 10 * s, cy - 14 * s, LEAD, 5 * s))
        for d in (-1, 1):
            o.append(line(cx + d * 114 * s, cy - 20 * s, cx + d * (hw + 4 * s), cy - 8 * s,
                          LEAD, 4 * s))
    return ''.join(o)


def person_card(x, y, w, p, s=None, pad=46, fill='#FFFFFF', stroke=BORDER,
                name_size=None, role_size=None, height=None):
    """A person in a bordered card, with the name and role clear of the body.

    The one function every cast strip, conversation, case and cover goes
    through, so a label can never be printed across a tunic. Pass `height`
    to force a uniform card across a row; the drawing is then centred in it.
    """
    name_size = name_size or FS_HEAD
    role_size = role_size or FS_SMALL
    style = p.get('style', 'short')
    if s is None:
        s = (w / 2.0 - pad) / person_box(1.0, style)[0]
    half, top, bot = person_box(s, style)
    name = p.get('name', '')
    role = p.get('role', '')
    nsz = fit(name, name_size, w - 2 * pad, bold=True)
    role_lines = wrap_w(role, role_size, w - 2 * pad) if role else []
    nat = (pad + (bot - top) + 64 + nsz * 1.3
           + len(role_lines) * role_size * 1.3 + role_size * 0.3 + pad)
    h = max(nat, height or 0)
    off = (h - nat) / 2.0
    cy = y + off + pad - top
    o = []
    if fill or stroke:
        o.append(rect(x, y, w, h, fill or 'none', stroke=stroke, sw=3, rx=20))
    o.append(person(x + w / 2, cy, s, p.get('skin', '3'), p.get('hair', 'black'),
                    style, p.get('tunic', 'teal'), p.get('mask', False),
                    p.get('glasses', False), p.get('look', 'straight'),
                    p.get('smile', True)))
    ty = cy + bot + 64 + nsz * 0.8
    o.append(t(x + w / 2, ty, name, nsz, INK, bold=True))
    ty += nsz * 0.5
    for ln in role_lines:
        ty += role_size * 1.3
        o.append(t(x + w / 2, ty, ln, role_size, MUTE))
    return ''.join(o), h


def bubble2(x, y, w, lines, point='down', fill='#FFFFFF', size=None,
            stroke=None, pad=26, tail_at=0.3):
    """A speech bubble sized to its own text. Nothing can fall outside it.

    The pilot drew a fixed 100-unit box and truncated to two lines, which is
    how a third line ended up printed outside the border. The box is now
    measured from the wrapped text and returns its own height.
    """
    size = size or FS_BODY
    stroke = stroke or LEAD
    if isinstance(lines, str):
        lines = [lines]
    flat = []
    for L in lines:
        flat.extend(wrap_w(L, size, w - 2 * pad))
    lh = int(size * 1.34)
    h = pad * 2 + len(flat) * lh
    o = [rect(x, y, w, h, fill, stroke=stroke, sw=4, rx=24)]
    if point in ('down', 'down-left', 'down-right'):
        bx = x + (w * tail_at if point != 'down-right' else w * (1 - tail_at) - 70)
        o.append(path('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                      % (bx, y + h, bx + 26, y + h + 54, bx + 86, y + h),
                      fill=fill, stroke=stroke, sw=4))
        o.append(line(bx + 5, y + h, bx + 81, y + h, fill, 8))
    for i, L in enumerate(flat):
        o.append(t(x + pad, y + pad + i * lh + size * 0.80, L, size, INK, anchor='start'))
    return ''.join(o), h
