# -*- coding: utf-8 -*-
"""Second-edition figure primitives: clinical diagrams and language panels.

Every primitive returns (svg_inner, height, defs) and is rendered by
art2.render2. Nothing here is decorative: each figure is the thing a task
operates on.
"""
from art2 import *
import art2 as A


# ------------------------------------------------------------------ frame
def _head(height, title, defs_idx=None):
    o = [rect(0, 0, W, height, BG, stroke=BORDER, sw=4)]
    if title:
        o.append(rect(0, 0, W, BAND, ACCENT))
        size = 84
        while text_w(title, size, bold=True) > W - 160 and size > 40:
            size -= 2
        o.append(t(W / 2, BAND * 0.68, title, size, '#FFFFFF', bold=True))
    return o


# -------------------------------------------------------- 1 tooth section
def tooth_section(title='A MOLAR IN SECTION', labels=None, show_key=True,
                  caption_terms=None):
    """Cross-section of a lower molar in bone, layers labelled by pin."""
    H = 1760
    o = _head(H, title)
    cx, top = 1080, 400
    # --- supporting bone (left and right of the roots)
    o.append(rect(220, 1000, 1720, 560, BONE, stroke=BORDER, sw=3))
    o.append(hatched(220, 1000, 1720, 560, 1))
    # --- gum
    o.append(path('M 220 1000 Q 520 930 760 1000 L 760 1060 L 220 1060 Z',
                  fill=GUM, stroke=BORDER, sw=3))
    o.append(path('M 1400 1000 Q 1640 930 1940 1000 L 1940 1060 L 1400 1060 Z',
                  fill=GUM, stroke=BORDER, sw=3))
    # --- enamel crown
    crown = ('M 760 1000 L 760 640 Q 760 470 880 430 Q 940 410 1000 470 '
             'Q 1040 510 1080 470 Q 1120 430 1180 420 Q 1300 440 1340 600 '
             'L 1400 1000 Z')
    o.append(path(crown, fill=ENAMEL, stroke=LEAD, sw=5))
    # --- dentine body (crown + roots)
    dent = ('M 820 1000 L 820 660 Q 830 540 900 505 Q 960 490 1010 545 '
            'Q 1050 580 1090 540 Q 1140 495 1190 495 Q 1280 520 1300 640 '
            'L 1340 1000 '
            'L 1310 1240 Q 1290 1430 1215 1480 Q 1165 1500 1150 1430 '
            'L 1120 1120 L 1020 1120 L 985 1430 Q 968 1500 918 1478 '
            'Q 845 1428 828 1238 Z')
    o.append(path(dent, fill=DENTINE, stroke=LEAD, sw=4))
    # --- pulp chamber and canals
    pulp = ('M 905 1000 L 905 700 Q 920 620 975 605 Q 1020 598 1055 640 '
            'Q 1085 672 1115 640 Q 1150 605 1190 610 Q 1235 640 1248 720 '
            'L 1255 1000 L 1238 1230 Q 1225 1370 1185 1400 Q 1162 1412 1155 1360 '
            'L 1128 1060 L 1012 1060 L 988 1360 Q 980 1412 955 1398 '
            'Q 915 1366 902 1226 Z')
    o.append(path(pulp, fill=PULP, stroke=LEAD, sw=4))
    # --- periodontal ligament hint (dashed line along the root)
    o.append(path('M 820 1010 L 828 1238 Q 845 1428 918 1478',
                  stroke='#8A6E4B', sw=6))
    o.append(path('M 1340 1010 L 1310 1240 Q 1290 1430 1215 1480',
                  stroke='#8A6E4B', sw=6))
    labels = labels or ['enamel', 'dentine', 'pulp', 'root canal',
                        'gum (gingiva)', 'bone', 'periodontal ligament']
    pts = [(790, 800), (1296, 880), (1080, 800), (1190, 1330),
           (640, 975), (470, 1250), (1306, 1215)]
    for i, (px, py) in enumerate(pts[:len(labels)], 1):
        o.append(pin(px, py, i))
    if show_key:
        key, _ = label_key(2040, 520, labels, size=48, title='KEY')
        o.append(key)
    if caption_terms:
        o.append(t(140, H - 70, caption_terms, 40, MUTE, anchor='start', italic=True))
    return ''.join(o), H, hatch_def(1)


# ------------------------------------------------------- 2 dentition map
FDI_UPPER_R = ['18', '17', '16', '15', '14', '13', '12', '11']
FDI_UPPER_L = ['21', '22', '23', '24', '25', '26', '27', '28']
FDI_LOWER_R = ['48', '47', '46', '45', '44', '43', '42', '41']
FDI_LOWER_L = ['31', '32', '33', '34', '35', '36', '37', '38']
UNIV_UPPER = ['1', '2', '3', '4', '5', '6', '7', '8',
              '9', '10', '11', '12', '13', '14', '15', '16']
UNIV_LOWER = ['32', '31', '30', '29', '28', '27', '26', '25',
              '24', '23', '22', '21', '20', '19', '18', '17']


def _tooth_glyph(x, y, w, h, kind, fill=ENAMEL):
    if kind == 'molar':
        return path('M %.1f %.1f Q %.1f %.1f %.1f %.1f L %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                    % (x, y + h, x, y + h * 0.18, x + w * 0.5, y,
                       x + w, y + h * 0.18, x + w, y + h, x + w, y + h),
                    fill=fill, stroke=LEAD, sw=3)
    if kind == 'premolar':
        return path('M %.1f %.1f L %.1f %.1f Q %.1f %.1f %.1f %.1f '
                    'Q %.1f %.1f %.1f %.1f L %.1f %.1f Z'
                    % (x + w * 0.12, y + h, x + w * 0.12, y + h * 0.30,
                       x + w * 0.30, y, x + w * 0.50, y + h * 0.16,
                       x + w * 0.70, y, x + w * 0.88, y + h * 0.30,
                       x + w * 0.88, y + h),
                    fill=fill, stroke=LEAD, sw=3)
    if kind == 'canine':
        return path('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                    % (x + w * 0.5, y, x + w * 0.88, y + h, x + w * 0.12, y + h),
                    fill=fill, stroke=LEAD, sw=3)
    return path('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                % (x + w * 0.26, y + h, x + w * 0.22, y + h * 0.22,
                   x + w * 0.78, y + h * 0.22, x + w * 0.74, y + h),
                fill=fill, stroke=LEAD, sw=3)


KINDS = ['molar', 'molar', 'molar', 'premolar', 'premolar',
         'canine', 'incisor', 'incisor']


def dentition_map(title='THE PERMANENT DENTITION  ·  FDI NOTATION',
                  highlight=None, show_universal=False, note=None):
    """Full mouth, FDI by default. highlight = list of FDI codes to shade."""
    H = 1560 if not show_universal else 1700
    o = _head(H, title)
    highlight = set(highlight or [])
    tw, th, gap = 150, 190, 14
    total = 16 * tw + 15 * gap
    x0 = (W - total) / 2
    rows = [(FDI_UPPER_R[::-1] + FDI_UPPER_L, 400, 'UPPER  (quadrants 1 and 2)'),
            (FDI_LOWER_R[::-1] + FDI_LOWER_L, 980, 'LOWER  (quadrants 4 and 3)')]
    for codes, y, caption in rows:
        kinds = KINDS[::-1] * 2
        o.append(t(140, y - 70, caption, 46, MUTE, anchor='start'))
        for i, code in enumerate(codes):
            x = x0 + i * (tw + gap)
            fill = HILITE if code in highlight else ENAMEL
            o.append(_tooth_glyph(x, y, tw, th, kinds[i], fill))
            o.append(t(x + tw / 2, y + th + 56, code, 44, LEAD, bold=code in highlight))
            if show_universal:
                u = (UNIV_UPPER if y < 900 else UNIV_LOWER)[i]
                o.append(t(x + tw / 2, y + th + 112, u, 40, '#8A3B2E'))
    o.append(line(W / 2, 330, W / 2, 1270, MUTE, 4, dash='18,14'))
    o.append(t(W / 2, 300, 'midline', 40, MUTE))
    if show_universal:
        o.append(t(140, H - 150, 'black = FDI (ISO 3950)', 42, LEAD, anchor='start'))
        o.append(t(140, H - 96, 'red = Universal (US)', 42, '#8A3B2E', anchor='start'))
    if note:
        o.append(t(140, H - 48, note, 40, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# ----------------------------------------------------- 3 instrument plate
def instrument_plate(title, items, note=None):
    """items = [(name, kind, what_it_is_for), ...] kind in mirror|probe|
    excavator|forceps|elevator|scaler|syringe|handpiece"""
    rows = len(items)
    H = 330 + rows * 230 + 120
    o = _head(H, title)
    y = 330
    for i, (name, kind, use) in enumerate(items, 1):
        o.append(rect(140, y, W - 280, 200, '#FFFFFF', stroke=BORDER, sw=3, rx=18))
        o.append(pin(210, y + 100, i, r=36))
        o.append(_instrument_glyph(300, y + 100, kind))
        o.append(t(1180, y + 78, name, 54, INK, bold=True, anchor='start'))
        o.append(t(1180, y + 148, use, 44, MUTE, anchor='start'))
        y += 230
    if note:
        o.append(t(140, H - 50, note, 40, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


def _instrument_glyph(x, cy, kind):
    """A side-on instrument, 820 wide, drawn around (x, cy)."""
    o = []
    L = 820
    # handle, common to all
    o.append(rect(x, cy - 16, L * 0.56, 32, METAL, stroke=LEAD, sw=3, rx=14))
    for g in range(6):
        o.append(line(x + 60 + g * 26, cy - 16, x + 60 + g * 26, cy + 16, LEAD, 3))
    hx = x + L * 0.56
    if kind == 'mirror':
        o.append(line(hx, cy, hx + 120, cy - 30, METAL, 10))
        o.append(circ(hx + 190, cy - 48, 66, '#DCE9F2', stroke=LEAD, sw=4))
    elif kind == 'probe':
        o.append(path('M %.1f %.1f L %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (hx, cy, hx + 150, cy - 26, hx + 230, cy - 40, hx + 240, cy + 30),
                      stroke=LEAD, sw=8))
    elif kind == 'excavator':
        o.append(line(hx, cy, hx + 140, cy - 24, METAL, 10))
        o.append(path('M %.1f %.1f a 44 44 0 1 0 1 0' % (hx + 190, cy - 34),
                      fill='#FFFFFF', stroke=LEAD, sw=5))
    elif kind == 'tweezers':
        o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (hx, cy - 10, hx + 130, cy - 70, hx + 250, cy - 20),
                      stroke=LEAD, sw=8))
        o.append(path('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (hx, cy + 10, hx + 130, cy + 20, hx + 250, cy - 10),
                      stroke=LEAD, sw=8))
    elif kind == 'perioprobe':
        o.append(line(hx, cy, hx + 120, cy - 26, METAL, 10))
        o.append(line(hx + 120, cy - 26, hx + 250, cy - 54, LEAD, 9))
        for g in range(5):
            gx = hx + 136 + g * 24
            gy = cy - 29 - g * 5.4
            o.append(line(gx, gy - 14, gx, gy + 14, '#FFFFFF', 4))
    elif kind == 'scaler':
        o.append(path('M %.1f %.1f L %.1f %.1f L %.1f %.1f'
                      % (hx, cy, hx + 150, cy - 50, hx + 250, cy + 10),
                      stroke=LEAD, sw=8))
    elif kind == 'forceps':
        o.append(path('M %.1f %.1f L %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (x, cy - 40, hx + 60, cy - 70, hx + 190, cy - 40, hx + 230, cy - 6),
                      stroke=LEAD, sw=10))
        o.append(path('M %.1f %.1f L %.1f %.1f Q %.1f %.1f %.1f %.1f'
                      % (x, cy + 40, hx + 60, cy + 70, hx + 190, cy + 40, hx + 230, cy + 6),
                      stroke=LEAD, sw=10))
    elif kind == 'elevator':
        o.append(line(hx, cy, hx + 160, cy, METAL, 12))
        o.append(path('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                      % (hx + 160, cy - 34, hx + 260, cy, hx + 160, cy + 34),
                      fill='#FFFFFF', stroke=LEAD, sw=4))
    elif kind == 'syringe':
        o.append(rect(hx, cy - 34, 190, 68, PLASTIC, stroke=LEAD, sw=4, rx=10))
        o.append(line(hx + 190, cy, hx + 300, cy, LEAD, 6))
    elif kind == 'handpiece':
        o.append(rect(hx, cy - 40, 170, 80, '#FFFFFF', stroke=LEAD, sw=4, rx=24))
        o.append(circ(hx + 200, cy - 10, 36, METAL, stroke=LEAD, sw=4))
    else:
        o.append(line(hx, cy, hx + 230, cy, LEAD, 8))
    return ''.join(o)


# -------------------------------------------------------- 4 set plate
def set_plate(title, items, note='Learn these eight. The rest are for recognition only.'):
    """The productive core as a labelled picture: items=[(term, gloss)]"""
    H = 330 + ((len(items) + 1) // 2) * 190 + 90
    o = _head(H, title)
    y = 320
    for i, (term, gloss) in enumerate(items):
        col = i % 2
        x = 140 + col * ((W - 280) / 2 + 20)
        wbox = (W - 300) / 2
        if col == 0 and i:
            y += 190
        o.append(rect(x, y, wbox, 168, '#FFFFFF', stroke=BORDER, sw=3, rx=16))
        o.append(pin(x + 62, y + 84, i + 1, r=34))
        o.append(t(x + 124, y + 70, term, 50, INK, bold=True, anchor='start'))
        o.append(t(x + 124, y + 130, gloss, 40, MUTE, anchor='start'))
    o.append(t(140, H - 50, note, 40, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# -------------------------------------------------------- 5 phrase box
def phrase_box(title, groups, note=None):
    """groups = [(function, [chunk, chunk, ...]), ...]"""
    rows = sum(1 + len(c) for _, c in groups)
    H = 320 + rows * 76 + 110
    o = _head(H, title)
    y = 320
    for func, chunks in groups:
        o.append(rect(140, y, W - 280, 64, STRIP, stroke=BORDER, sw=3, rx=12))
        o.append(t(170, y + 46, func.upper(), 44, ACCENT, bold=True, anchor='start'))
        y += 76
        for ch in chunks:
            o.append(t(220, y + 48, '•  ' + ch, 48, INK, anchor='start'))
            y += 76
        y += 10
    if note:
        o.append(t(140, H - 50, note, 40, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# -------------------------------------------------------- 6 step sequence
def step_sequence(title, steps, stop_points=None, note=None):
    """steps = [(n, text)], stop_points = set of indices where work stops"""
    H = 330 + len(steps) * 196 + 100
    o = _head(H, title)
    stop_points = set(stop_points or [])
    y = 320
    for i, s in enumerate(steps, 1):
        isstop = i in stop_points
        o.append(rect(140, y, W - 280, 168, HILITE if isstop else '#FFFFFF',
                      stroke=LEAD if isstop else BORDER, sw=5 if isstop else 3, rx=18))
        o.append(circ(230, y + 84, 48, ACCENT))
        o.append(t(230, y + 100, str(i), 56, '#FFFFFF', bold=True))
        o.append(t(330, y + 100, s, 50, INK, anchor='start'))
        if isstop:
            o.append(t(W - 190, y + 100, 'STOP', 46, '#8A3B2E', bold=True, anchor='end'))
        if i < len(steps):
            o.append(arrow(230, y + 168, 230, y + 196, MUTE, 5, 20))
        y += 196
    if note:
        o.append(t(140, H - 50, note, 40, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# -------------------------------------------------------- 7 annotated form
def form_annotated(title, heading, fields, callouts=None, note=None):
    """fields = [(label, value)] ; callouts = [(field_index, text)]"""
    H = 340 + len(fields) * 104 + 220
    o = _head(H, title)
    fx, fw = 160, 1560
    o.append(rect(fx, 300, fw, len(fields) * 104 + 120, PAPER, stroke=LEAD, sw=4, rx=10))
    o.append(t(fx + 40, 376, heading, 54, INK, bold=True, anchor='start'))
    o.append(line(fx + 40, 400, fx + fw - 40, 400, BORDER, 3))
    y = 470
    ypos = []
    for lab, val in fields:
        o.append(t(fx + 40, y, lab, 42, MUTE, anchor='start'))
        o.append(t(fx + 620, y, val, 46, INK, anchor='start'))
        o.append(line(fx + 600, y + 16, fx + fw - 40, y + 16, '#C9D3DC', 2))
        ypos.append(y)
        y += 104
    for idx, text in (callouts or []):
        yy = ypos[idx]
        o.append(pin(fx + fw + 40, yy - 14, idx + 1, r=32))
        o.append(t(fx + fw + 96, yy, text, 42, INK, anchor='start'))
    if note:
        o.append(t(160, H - 50, note, 40, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# -------------------------------------------------------- 8 contrast
def contrast(title, loose_t, loose, precise_t, precise, foot_l='', foot_r=''):
    rows = max(len(loose), len(precise))
    H = 340 + rows * 128 + 190
    o = _head(H, title)
    cw = (W - 320) / 2
    for k, (ht, items, foot, col) in enumerate(
            [(loose_t, loose, foot_l, '#8A3B2E'), (precise_t, precise, foot_r, ACCENT)]):
        x = 150 + k * (cw + 20)
        o.append(rect(x, 300, cw, rows * 128 + 150, '#FFFFFF', stroke=col, sw=5, rx=18))
        o.append(rect(x, 300, cw, 84, col))
        o.append(t(x + cw / 2, 360, ht, 52, '#FFFFFF', bold=True))
        yy = 460
        for s in items:
            for ln in wrap(s, 34):
                o.append(t(x + 40, yy, ln, 42, INK, anchor='start'))
                yy += 52
            yy += 28
        o.append(t(x + cw / 2, 300 + rows * 128 + 118, foot, 40, col, italic=True))
    return ''.join(o), H, ''


# -------------------------------------------------------- 9 morph builder
def morph_builder(title, rows, note=None):
    """rows = [(prefix, root, suffix, word, meaning)] - student series"""
    H = 340 + len(rows) * 210 + 110
    o = _head(H, title)
    y = 320
    bw = 420
    for pre, root, suf, word, meaning in rows:
        x = 160
        for part, col, lab in [(pre, PLASTIC, 'prefix'), (root, HILITE, 'root'),
                               (suf, '#D9EAD3', 'suffix')]:
            o.append(rect(x, y, bw, 110, col if part else '#EFEFEF',
                          stroke=LEAD, sw=4, rx=14))
            o.append(t(x + bw / 2, y + 70, part or '—', 54, INK, bold=True))
            o.append(t(x + bw / 2, y + 150, lab, 36, MUTE))
            x += bw + 30
            if part is not rows[0][2]:
                o.append(t(x - 18, y + 72, '+', 48, MUTE))
        o.append(arrow(x + 20, y + 55, x + 130, y + 55, LEAD, 6))
        o.append(t(x + 160, y + 52, word, 56, ACCENT, bold=True, anchor='start'))
        o.append(t(x + 160, y + 118, meaning, 40, MUTE, anchor='start'))
        y += 210
    if note:
        o.append(t(160, H - 50, note, 40, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# ------------------------------------------------------- 10 chair scene
def chair_scene(title='THE SURGERY', labels=None, note=None):
    """The dental chair and the things round it, called out by pin."""
    H = 1500
    o = _head(H, title)
    # floor
    o.append(line(140, 1230, W - 140, 1230, MUTE, 4))
    # chair: base, column, seat, back, headrest
    o.append(rect(880, 1130, 420, 60, METAL, stroke=LEAD, sw=4, rx=16))
    o.append(rect(1040, 900, 100, 240, METAL, stroke=LEAD, sw=4, rx=10))
    o.append(path('M 700 900 L 1500 900 Q 1560 900 1560 850 L 1560 800 '
                  'Q 1560 760 1500 760 L 760 760 Q 700 760 700 820 Z',
                  fill=PLASTIC, stroke=LEAD, sw=4))
    o.append(path('M 700 820 L 700 900 L 480 900 Q 420 900 420 840 '
                  'L 420 560 Q 420 500 480 500 L 560 500 Q 620 500 620 560 '
                  'L 640 800 Q 648 820 700 820 Z',
                  fill=PLASTIC, stroke=LEAD, sw=4))
    o.append(rect(380, 400, 220, 130, PLASTIC, stroke=LEAD, sw=4, rx=28))
    # operating light on an arm
    o.append(line(1560, 800, 1700, 560, METAL, 12))
    o.append(line(1700, 560, 1180, 420, METAL, 12))
    o.append(path('M 1060 380 L 1300 380 L 1250 470 L 1110 470 Z',
                  fill='#FFF6D6', stroke=LEAD, sw=4))
    # bracket table
    o.append(rect(1620, 820, 420, 40, METAL, stroke=LEAD, sw=4, rx=10))
    o.append(rect(1700, 860, 60, 280, METAL, stroke=LEAD, sw=3))
    for i in range(4):
        o.append(rect(1660 + i * 90, 788, 60, 24, '#FFFFFF', stroke=LEAD, sw=3, rx=8))
    # spittoon / bowl
    o.append(circ(2180, 840, 92, '#FFFFFF', stroke=LEAD, sw=4))
    o.append(rect(2140, 930, 80, 210, METAL, stroke=LEAD, sw=3))
    labels = labels or ['the chair', 'the headrest', 'the operating light',
                        'the bracket table', 'the bowl']
    pts = [(1100, 830), (490, 465), (1180, 425), (1830, 805), (2180, 840)]
    for i, (px, py) in enumerate(pts[:len(labels)], 1):
        o.append(pin(px, py, i))
    key, _ = label_key(2380, 420, labels, size=46, title='KEY')
    o.append(key)
    if note:
        o.append(t(140, H - 60, note, 40, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# ------------------------------------------------------- 11 two-person scene
def exchange(title, left_name, left_lines, right_name, right_lines, note=None):
    """Two speakers and what each says - the shape of an exchange."""
    rows = max(len(left_lines), len(right_lines))
    H = 330 + rows * 150 + 150
    o = _head(H, title)
    cw = (W - 340) / 2
    for k, (name, lines, col) in enumerate(
            [(left_name, left_lines, ACCENT), (right_name, right_lines, '#8A3B2E')]):
        x = 150 + k * (cw + 40)
        o.append(rect(x, 300, cw, 80, col))
        o.append(t(x + cw / 2, 356, name, 50, '#FFFFFF', bold=True))
        yy = 440
        for s in lines:
            o.append(rect(x, yy - 54, cw, 112, '#FFFFFF', stroke=BORDER, sw=3, rx=18))
            for j, ln in enumerate(wrap(s, 30)[:2]):
                o.append(t(x + 30, yy - 10 + j * 50, ln, 40, INK, anchor='start'))
            yy += 150
    if note:
        o.append(t(150, H - 60, note, 40, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# ------------------------------------------------------- 12 icon library
def icon(name, cx, cy, s=1.0, col=None):
    """A small pictogram, about 160*s across, drawn at (cx, cy)."""
    c = col or ACCENT
    o = []
    def R(x, y, w, h, f=c, st=LEAD, r=10): return rect(cx+x*s, cy+y*s, w*s, h*s, f, stroke=st, sw=4, rx=r)
    def C_(x, y, r, f=c, st=LEAD): return circ(cx+x*s, cy+y*s, r*s, f, stroke=st, sw=4)
    def L(x1, y1, x2, y2, cc=LEAD, w=5): return line(cx+x1*s, cy+y1*s, cx+x2*s, cy+y2*s, cc, w)
    def P(d, f='none', st=LEAD, w=5): return path(d, fill=f, stroke=st, sw=w)
    name = name or 'speech'
    if name == 'tooth':
        o.append(P('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f '
                   'C %.1f %.1f %.1f %.1f %.1f %.1f L %.1f %.1f Z'
                   % (cx-56*s, cy-10*s, cx-62*s, cy-78*s, cx+62*s, cy-78*s, cx+56*s, cy-10*s,
                      cx+44*s, cy+60*s, cx+22*s, cy+76*s, cx+14*s, cy+10*s,
                      cx-14*s, cy+10*s), f=ENAMEL))
        o.append(P('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f'
                   % (cx-14*s, cy+10*s, cx-20*s, cy+60*s, cx-40*s, cy+78*s, cx-48*s, cy+30*s)))
    elif name == 'chair':
        o.append(R(-70, -10, 140, 34, PLASTIC))
        o.append(R(-74, -62, 40, 58, PLASTIC))
        o.append(R(-14, 24, 28, 44, METAL))
        o.append(R(-50, 66, 100, 18, METAL))
    elif name == 'mirror':
        o.append(L(-64, 40, 10, -16, METAL, 12))
        o.append(C_(34, -40, 34, '#DCE9F2'))
    elif name == 'probe':
        o.append(L(-62, 44, 14, -14, METAL, 12))
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                   % (cx+14*s, cy-14*s, cx+52*s, cy-46*s, cx+34*s, cy-72*s), w=7))
    elif name == 'light':
        o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                   % (cx-54*s, cy-40*s, cx+54*s, cy-40*s, cx+34*s, cy+10*s, cx-34*s, cy+10*s),
                   f='#FFF3C4'))
        for d in (-1, 0, 1):
            o.append(L(d*28, 18, d*40, 64, '#D9A900', 6))
    elif name == 'clock':
        o.append(C_(0, 0, 60, '#FFFFFF'))
        o.append(L(0, 0, 0, -34)); o.append(L(0, 0, 26, 10))
    elif name == 'calendar':
        o.append(R(-62, -50, 124, 108, '#FFFFFF'))
        o.append(R(-62, -50, 124, 28, c, r=8))
        for gx in (-30, 0, 30):
            for gy in (0, 28):
                o.append(C_(gx, gy, 7, LEAD, st=None))
    elif name == 'gloves':
        o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                   % (cx-40*s, cy+64*s, cx-40*s, cy-30*s, cx-6*s, cy-70*s,
                      cx+40*s, cy-30*s, cx+40*s, cy+64*s), f=PLASTIC))
        for gx in (-22, -2, 18):
            o.append(L(gx, -30, gx, -58, LEAD, 4))
    elif name == 'mask':
        o.append(P('M %.1f %.1f L %.1f %.1f Q %.1f %.1f %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                   % (cx-62*s, cy-36*s, cx+62*s, cy-36*s, cx+36*s, cy+52*s,
                      cx, cy+56*s, cx-36*s, cy+52*s, cx-62*s, cy-36*s), f='#CFE3EF'))
        o.append(L(-62, -32, -92, -52)); o.append(L(62, -32, 92, -52))
    elif name == 'person':
        o.append(C_(0, -34, 36, SKIN['3']))
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                   % (cx-54*s, cy+66*s, cx, cy-16*s, cx+54*s, cy+66*s), f=c))
    elif name == 'door':
        o.append(R(-50, -70, 100, 140, '#FFFFFF'))
        o.append(C_(28, 4, 8, LEAD, st=None))
    elif name == 'book':
        o.append(R(-58, -46, 116, 92, '#FFFFFF'))
        o.append(L(0, -46, 0, 46)); o.append(R(-58, -46, 116, 18, c, r=4))
    elif name == 'card':
        o.append(R(-62, -40, 124, 80, '#FFFFFF'))
        for gy in (-14, 4, 22):
            o.append(L(-44, gy, 44, gy, '#9AA7B2', 5))
    elif name == 'phone':
        o.append(R(-34, -58, 68, 116, '#FFFFFF', r=14))
        o.append(L(-14, 44, 14, 44, '#9AA7B2', 6))
    elif name == 'water':
        o.append(P('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f Z'
                   % (cx, cy-62*s, cx+56*s, cy+10*s, cx-56*s, cy+10*s, cx, cy-62*s),
                   f='#BFE3F2'))
        o.append(P('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f'
                   % (cx-56*s, cy+10*s, cx-40*s, cy+66*s, cx+40*s, cy+66*s, cx+56*s, cy+10*s),
                   f='#BFE3F2'))
    elif name == 'bowl':
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                   % (cx-62*s, cy-10*s, cx, cy+74*s, cx+62*s, cy-10*s), f='#FFFFFF'))
        o.append(L(-70, -10, 70, -10))
    elif name == 'brush':
        o.append(R(-70, -10, 110, 22, PLASTIC))
        o.append(R(40, -22, 34, 46, '#FFFFFF'))
        for gx in range(4):
            o.append(L(44+gx*8, -22, 44+gx*8, -44, '#9AA7B2', 5))
    elif name == 'tray':
        o.append(R(-74, -20, 148, 48, METAL))
        for gx in (-44, -8, 28):
            o.append(C_(gx, 4, 10, '#FFFFFF'))
    elif name == 'xray':
        o.append(R(-58, -50, 116, 100, '#2B3440'))
        o.append(P('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f Z'
                   % (cx-24*s, cy+18*s, cx-30*s, cy-30*s, cx+30*s, cy-30*s, cx+24*s, cy+18*s),
                   f='#E6EDF2', st=None))
    elif name == 'form':
        o.append(R(-54, -62, 108, 124, '#FFFFFF'))
        for gy in (-36, -12, 12, 36):
            o.append(L(-36, gy, 36, gy, '#9AA7B2', 5))
    elif name == 'tick':
        o.append(C_(0, 0, 58, '#E4F1E4'))
        o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f'
                   % (cx-26*s, cy+2*s, cx-6*s, cy+26*s, cx+30*s, cy-24*s), st='#2E7D32', w=11))
    elif name == 'cross':
        o.append(C_(0, 0, 58, '#F6E2E0'))
        o.append(L(-24, -24, 24, 24, '#B3261E', 11))
        o.append(L(24, -24, -24, 24, '#B3261E', 11))
    elif name == 'speech':
        o.append(R(-66, -54, 132, 86, '#FFFFFF', r=20))
        o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                   % (cx-24*s, cy+32*s, cx-16*s, cy+66*s, cx+8*s, cy+32*s), f='#FFFFFF'))
    elif name == 'ear':
        o.append(P('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f'
                   % (cx+20*s, cy-46*s, cx-40*s, cy-56*s, cx-40*s, cy+36*s, cx+6*s, cy+52*s),
                   f=SKIN['2'], w=5))
        o.append(C_(-6, -6, 14, 'none'))
    elif name == 'pen':
        o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                   % (cx-54*s, cy+54*s, cx-40*s, cy+16*s, cx+46*s, cy-58*s, cx+58*s, cy-40*s),
                   f=c))
        o.append(L(-40, 16, -24, 36))
    elif name == 'bone':
        o.append(R(-60, -14, 120, 28, BONE))
        for gx, gy in ((-60, -14), (-60, 14), (60, -14), (60, 14)):
            o.append(C_(gx, gy, 18, BONE))
    elif name == 'gum':
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f L %.1f %.1f Z'
                   % (cx-66*s, cy+30*s, cx, cy-44*s, cx+66*s, cy+30*s, cx-66*s, cy+30*s),
                   f=GUM))
    else:
        o.append(C_(0, 0, 58, '#FFFFFF'))
        o.append(t(cx, cy + 18 * s, (name[:1] or '?').upper(), int(56 * s), c, bold=True))
    return ''.join(o)


ICON_FOR = {
 'surgery': 'door', 'waiting': 'clock', 'waiting room': 'clock', 'chair': 'chair',
 'headrest': 'chair', 'nurse': 'person', 'dental nurse': 'person',
 'appointment': 'calendar', 'sit back': 'chair', 'comfortable': 'tick',
 'open wide': 'ear', 'rinse': 'water', 'spit': 'bowl', 'upper teeth': 'tooth',
 'lower teeth': 'tooth', 'gum': 'gum', 'filling': 'tooth', 'mirror': 'mirror',
 'probe': 'probe', 'record': 'card', 'record card': 'card', 'date of birth': 'calendar',
 'reception': 'door', 'bib': 'mask', 'bowl': 'bowl', 'bracket table': 'tray',
 'operating light': 'light', 'colleague': 'person', 'coat hook': 'door',
 'oral cavity': 'ear', 'vestibule': 'ear', 'hard palate': 'bone', 'soft palate': 'gum',
 'gingiva': 'gum', 'mucosa': 'gum', 'frenum': 'gum', 'floor of the mouth': 'ear',
 'dentition': 'tooth', 'quadrant': 'tooth', 'midline': 'tooth', 'incisor': 'tooth',
 'canine': 'tooth', 'premolar': 'tooth', 'molar': 'tooth', 'notation': 'form',
 'telephone': 'phone', 'message': 'speech', 'letter': 'form', 'brush': 'brush',
 'radiograph': 'xray', 'tray': 'tray', 'gloves': 'gloves', 'mask': 'mask',
 'pen': 'pen', 'book': 'book',
}


def pick_icon(term):
    k = re.sub(r'^(a|an|the|to)\s+', '', str(term).lower()).strip()
    if k in ICON_FOR:
        return ICON_FOR[k]
    for key, val in ICON_FOR.items():
        if key in k:
            return val
    return 'speech'


import re  # noqa: E402  (used by pick_icon)


# ------------------------------------------------------- 13 icon cards
def icon_cards(title, items, cols=4, note=None):
    """Vocabulary as picture cards: an icon, the word, nothing else."""
    rows = (len(items) + cols - 1) // cols
    cw = (W - 200 - (cols - 1) * 24) / cols
    ch = 330
    H = 300 + rows * (ch + 26) + (90 if note else 40)
    o = _head(H, title)
    for i, it in enumerate(items):
        term = it[0] if isinstance(it, (tuple, list)) else it
        ic = (it[1] if isinstance(it, (tuple, list)) and len(it) > 1 and it[1]
              else pick_icon(term))
        r, c = divmod(i, cols)
        x = 100 + c * (cw + 24)
        y = 290 + r * (ch + 26)
        o.append(rect(x, y, cw, ch, '#FFFFFF', stroke=BORDER, sw=3, rx=20))
        o.append(icon(ic, x + cw / 2, y + 128, 1.05))
        for j, ln in enumerate(wrap(term, 16)[:2]):
            o.append(t(x + cw / 2, y + 250 + j * 46, ln, 42, INK, bold=True))
    if note:
        o.append(t(100, H - 50, note, 38, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# ------------------------------------------------------- 14 conversation
def conversation(title, left, right, exchange_lines, note=None):
    """Two people, drawn, with what each one says beside them.

    left/right = dict(name, role, skin, hair, style, tunic, mask, glasses)
    exchange_lines = [(who, line), ...] where who is 'L' or 'R'
    """
    rows = len(exchange_lines)
    H = 300 + 560 + rows * 124 + (90 if note else 50)
    o = _head(H, title)
    for side, who, cx in ((left, 'L', 560), (right, 'R', W - 560)):
        o.append(person(cx, 560, 1.05, side.get('skin', '3'), side.get('hair', 'black'),
                        side.get('style', 'short'), side.get('tunic', 'teal'),
                        side.get('mask', False), side.get('glasses', False)))
        o.append(t(cx, 1090, side['name'], 50, INK, bold=True))
        o.append(t(cx, 1146, side.get('role', ''), 38, MUTE))
    y = 1210
    for whoside, line in exchange_lines:
        isleft = whoside == 'L'
        bx = 160 if isleft else W / 2 + 40
        bw = W / 2 - 200
        o.append(rect(bx, y, bw, 100, '#FFFFFF', stroke=ACCENT if isleft else '#8A3B2E',
                      sw=4, rx=22))
        o.append(path('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                      % (bx + (bw - 60 if isleft else 20), y + 100,
                         bx + (bw - 20 if isleft else 20), y + 148,
                         bx + (bw - 20 if isleft else 60), y + 100), fill='#FFFFFF',
                      stroke=ACCENT if isleft else '#8A3B2E', sw=4))
        for j, ln in enumerate(wrap(line, 40)[:2]):
            o.append(t(bx + 30, y + 44 + j * 44, ln, 40, INK, anchor='start'))
        y += 124
    if note:
        o.append(t(160, H - 50, note, 38, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# ------------------------------------------------------- 15 cast cards
def cast_cards(title, people, note=None):
    cols = 4
    rows = (len(people) + cols - 1) // cols
    cw = (W - 200 - (cols - 1) * 26) / cols
    ch = 700
    H = 300 + rows * (ch + 30) + (90 if note else 40)
    o = _head(H, title)
    for i, p in enumerate(people):
        r, c = divmod(i, cols)
        x = 100 + c * (cw + 26)
        y = 290 + r * (ch + 30)
        o.append(rect(x, y, cw, ch, '#FFFFFF', stroke=BORDER, sw=3, rx=22))
        o.append(person(x + cw / 2, y + 250, 0.78, p.get('skin', '3'), p.get('hair', 'black'),
                        p.get('style', 'short'), p.get('tunic', 'teal'),
                        p.get('mask', False), p.get('glasses', False)))
        o.append(t(x + cw / 2, y + 578, p['name'], 44, INK, bold=True))
        for j, ln in enumerate(wrap(p.get('role', ''), 22)[:2]):
            o.append(t(x + cw / 2, y + 632 + j * 42, ln, 36, MUTE))
    if note:
        o.append(t(100, H - 50, note, 38, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# ------------------------------------------------------- 16 mini table
def mini_table(title, header, rows, note=None, highlight=None):
    """A compact table for an exercise: the data visual beside the icon visual."""
    H = 250 + (len(rows) + 1) * 78 + (80 if note else 30)
    o = [rect(0, 0, W, H, '#FFFFFF', stroke=BORDER, sw=4)]
    o.append(rect(0, 0, W, 130, ACCENT))
    size = 60
    while text_w(title, size, bold=True) > W - 140 and size > 32:
        size -= 2
    o.append(t(W / 2, 86, title, size, '#FFFFFF', bold=True))
    cols = len(header)
    cw = (W - 160) / cols
    y = 180
    for j, h in enumerate(header):
        o.append(rect(80 + j * cw, y, cw, 72, STRIP, stroke=BORDER, sw=3))
        o.append(t(80 + j * cw + 26, y + 50, h, 40, ACCENT, bold=True, anchor='start'))
    y += 72
    for i, row in enumerate(rows):
        fill = HILITE if highlight and i in highlight else '#FFFFFF'
        for j, cell in enumerate(row):
            o.append(rect(80 + j * cw, y, cw, 78, fill, stroke=BORDER, sw=3))
            o.append(t(80 + j * cw + 26, y + 54, str(cell)[:46], 40, INK, anchor='start'))
        y += 78
    if note:
        o.append(t(80, H - 40, note, 36, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# ------------------------------------------------------- 17 grammar mnemonic
def grammar_mnemonic(title, cells, note=None):
    """An expressive, memorable picture of one grammar point.

    cells = [(form, when_you_use_it, example, icon_name), ...]
    """
    n = len(cells)
    H = 300 + 560 + (90 if note else 40)
    o = _head(H, title)
    cw = (W - 160 - (n - 1) * 26) / n
    for i, (form, when, example, ic) in enumerate(cells):
        x = 80 + i * (cw + 26)
        o.append(rect(x, 280, cw, 520, '#FFFFFF', stroke=ACCENT, sw=6, rx=24))
        o.append(rect(x, 280, cw, 96, ACCENT))
        sz = 54
        while text_w(form, sz, bold=True) > cw - 40 and sz > 30:
            sz -= 2
        o.append(t(x + cw / 2, 344, form, sz, '#FFFFFF', bold=True))
        o.append(icon(ic, x + cw / 2, 470, 1.15))
        for j, ln in enumerate(wrap(when, 24)[:2]):
            o.append(t(x + cw / 2, 600 + j * 44, ln, 40, MUTE))
        o.append(rect(x + 20, 690, cw - 40, 88, HILITE, stroke=BORDER, sw=3, rx=14))
        for j, ln in enumerate(wrap(example, 28)[:2]):
            o.append(t(x + cw / 2, 726 + j * 40, ln, 36, INK))
    if note:
        o.append(t(80, H - 50, note, 38, MUTE, anchor='start', italic=True))
    return ''.join(o), H, ''


# ------------------------------------------------------- 18 cover
def cover2(title_lines, sub, level_badge, book_badge, series, edition, bullets,
           people=None, emblem='tooth'):
    """A fitted cover: nothing is allowed to run off the page."""
    H = 4000
    o = [rect(0, 0, W, H, '#0E3B36')]
    o.append(rect(0, 0, W, 1180, '#0A2E2A'))
    o.append(rect(120, 120, W - 240, H - 240, 'none', stroke='#3E8E84', sw=6))
    # series strip
    sz = 52
    while text_w(series, sz, bold=True) > W - 460 and sz > 28:
        sz -= 2
    o.append(t(W / 2, 330, series, sz, '#8FD3C7', bold=True, ls=6))
    # title, fitted line by line
    y = 560
    for ln in title_lines:
        sz = 190
        while text_w(ln, sz, bold=True) > W - 420 and sz > 60:
            sz -= 4
        o.append(t(W / 2, y + sz * 0.34, ln, sz, '#FFFFFF', bold=True))
        y += sz + 40
    sz = 92
    while text_w(sub, sz, bold=True) > W - 420 and sz > 40:
        sz -= 2
    o.append(t(W / 2, y + 70, sub, sz, '#F2C879', bold=True))
    y += 190
    # emblem band: a tooth, a chair and the people
    o.append(rect(240, y, W - 480, 1180, '#124A44', stroke='#3E8E84', sw=5, rx=40))
    if people:
        step = (W - 760) / max(1, len(people) - 1) if len(people) > 1 else 0
        for i, p in enumerate(people):
            cx = 380 + i * step if len(people) > 1 else W / 2
            o.append(person(cx, y + 470, 0.92, p.get('skin', '3'), p.get('hair', 'black'),
                            p.get('style', 'short'), p.get('tunic', 'teal'),
                            p.get('mask', False), p.get('glasses', False)))
    y += 1300
    # badges
    bw = 620
    for i, (lab, val) in enumerate([('LEVEL', level_badge), ('', book_badge)]):
        bx = W / 2 - bw - 40 + i * (bw + 80)
        o.append(rect(bx, y, bw, 190, '#F2C879', rx=26))
        sz = 86
        while text_w(val, sz, bold=True) > bw - 60 and sz > 36:
            sz -= 2
        o.append(t(bx + bw / 2, y + 122, val, sz, '#0A2E2A', bold=True))
    y += 300
    # bullets, fitted
    for b in bullets:
        sz = 50
        while text_w(b, sz) > W - 460 and sz > 26:
            sz -= 2
        o.append(t(W / 2, y, b, sz, '#CFEAE4'))
        y += sz + 36
    # a strip of what the book is about, filling the lower third
    strip = [emblem, 'chair', 'mirror', 'calendar', 'card']
    o.append(rect(240, H - 1020, W - 480, 420, '#124A44', stroke='#3E8E84', sw=5, rx=40))
    step = (W - 760) / (len(strip) - 1)
    for i, ic in enumerate(strip):
        o.append(icon(ic, 380 + i * step, H - 810, 1.45, '#F2C879'))
    o.append(t(W / 2, H - 250, edition, 62, '#8FD3C7', bold=True))
    return ''.join(o), H, ''
