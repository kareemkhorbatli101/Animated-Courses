# -*- coding: utf-8 -*-
"""Second-edition figure primitives: clinical diagrams and language panels.

Every primitive returns (svg_inner, height, defs) and is rendered by
art2.render2. Nothing here is decorative: each figure is the thing a task
operates on.
"""
import math
from art2 import *
import art2 as A


# ------------------------------------------------------------------ frame

def _notefit(x, y, s, size):
    """Italic figure note that shrinks to fit the canvas, never clips."""
    return t(x, y, s, fit(s, size, W - x - 100), MUTE, anchor='start', italic=True)

def _head(height, title, defs_idx=None):
    o = [rect(0, 0, W, height, BG, stroke=BORDER, sw=4)]
    if title:
        o.append(rect(0, 0, W, BAND, ACCENT))
        o.append(t(W / 2, BAND * 0.68, title,
                   fit(title, FS_TITLE, W - 160, True), '#FFFFFF', bold=True))
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
        o.append(t(140, H - 70, caption_terms, FS_SMALL, MUTE, anchor='start', italic=True))
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
        o.append(t(140, y - 70, caption, FS_BODY, MUTE, anchor='start'))
        for i, code in enumerate(codes):
            x = x0 + i * (tw + gap)
            fill = HILITE if code in highlight else ENAMEL
            o.append(_tooth_glyph(x, y, tw, th, kinds[i], fill))
            o.append(t(x + tw / 2, y + th + 56, code, FS_BODY, LEAD, bold=code in highlight))
            if show_universal:
                u = (UNIV_UPPER if y < 900 else UNIV_LOWER)[i]
                o.append(t(x + tw / 2, y + th + 112, u, FS_SMALL, '#8A3B2E'))
    o.append(line(W / 2, 330, W / 2, 1270, MUTE, 4, dash='18,14'))
    o.append(t(W / 2, 300, 'midline', FS_SMALL, MUTE))
    if show_universal:
        o.append(t(140, H - 150, 'black = FDI (ISO 3950)', 42, LEAD, anchor='start'))
        o.append(t(140, H - 96, 'red = Universal (US)', 42, '#8A3B2E', anchor='start'))
    if note:
        o.append(_notefit(140, H - 48, note, FS_SMALL))
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
        o.append(t(1180, y + 78, name, FS_HEAD, INK, bold=True, anchor='start'))
        o.append(t(1180, y + 148, use, FS_BODY, MUTE, anchor='start'))
        y += 230
    if note:
        o.append(_notefit(140, H - 50, note, FS_SMALL))
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
    cols = 2
    gap = 30
    cw = (W - 280 - gap) / cols
    tw = cw - 160
    rows_data = []
    for term, gloss in items:
        tl = wrap_w(term, FS_HEAD, tw, True)
        gl = wrap_w(gloss, FS_BODY, tw)
        rows_data.append((tl, gl))
    rh = max(len(a) * int(FS_HEAD * 1.30) + len(b) * int(FS_BODY * 1.30)
             for a, b in rows_data) + 56
    nrow = (len(items) + 1) // 2
    H = int(BAND + 80 + nrow * (rh + 24) + 90)
    o = _head(H, title)
    for i, (tl, gl) in enumerate(rows_data):
        r, c = divmod(i, cols)
        x = 140 + c * (cw + gap)
        y = BAND + 80 + r * (rh + 24)
        o.append(rect(x, y, cw, rh, '#FFFFFF', stroke=BORDER, sw=3, rx=16))
        o.append(pin(x + 66, y + rh / 2, i + 1, r=42))
        ty = y + 28 + FS_HEAD * 0.80
        for ln in tl:
            o.append(t(x + 136, ty, ln, FS_HEAD, INK, bold=True, anchor='start'))
            ty += int(FS_HEAD * 1.30)
        for ln in gl:
            o.append(t(x + 136, ty, ln, FS_BODY, MUTE, anchor='start'))
            ty += int(FS_BODY * 1.30)
    o.append(_notefit(140, H - 36, note, FS_NOTE))
    return ''.join(o), H, ''


# -------------------------------------------------------- 5 phrase box

def phrase_box(title, groups, note=None):
    """groups = [(function, [chunk, chunk, ...]), ...]"""
    tw = W - 340
    lh = int(FS_BODY * 1.32)
    head_h = int(FS_HEAD * 1.32) + 26
    plan, H = [], BAND + 80
    for func, chunks in groups:
        rows = [wrap_w('\u2022  ' + c, FS_BODY, tw - 80) for c in chunks]
        plan.append((func, rows))
        H += head_h + 18 + sum(len(r) * lh + 18 for r in rows) + 24
    H = int(H + (90 if note else 40))
    o = _head(H, title)
    y = BAND + 80
    for func, rows in plan:
        o.append(rect(140, y, W - 280, head_h, STRIP, stroke=BORDER, sw=3, rx=12))
        o.append(t(170, y + head_h / 2 + FS_HEAD * 0.36, func.upper(),
                   fit(func.upper(), FS_HEAD, W - 360, True), ACCENT,
                   bold=True, anchor='start'))
        y += head_h + 18
        for r in rows:
            for ln in r:
                o.append(t(220, y + FS_BODY * 0.80, ln, FS_BODY, INK, anchor='start'))
                y += lh
            y += 18
        y += 24
    if note:
        o.append(_notefit(140, H - 36, note, FS_NOTE))
    return ''.join(o), H, ''


# -------------------------------------------------------- 6 step sequence

def step_sequence(title, steps, stop_points=None, note=None):
    """steps = [text], stop_points = set of 1-based indices where work stops"""
    stop_points = set(stop_points or [])
    tw = W - 280 - 320
    lh = int(FS_BODY * 1.32)
    wrapped = [wrap_w(s, FS_BODY, tw) for s in steps]
    rh = max(max(len(x) for x in wrapped) * lh + 56, 150)
    gap = 36
    H = int(BAND + 80 + len(steps) * (rh + gap) + (90 if note else 40))
    o = _head(H, title)
    y = BAND + 80
    for i, lines in enumerate(wrapped, 1):
        isstop = i in stop_points
        o.append(rect(140, y, W - 280, rh, HILITE if isstop else '#FFFFFF',
                      stroke=LEAD if isstop else BORDER, sw=5 if isstop else 3, rx=18))
        o.append(circ(232, y + rh / 2, 54, ACCENT))
        o.append(t(232, y + rh / 2 + FS_HEAD * 0.36, str(i), FS_HEAD, '#FFFFFF', bold=True))
        ty = y + (rh - len(lines) * lh) / 2 + FS_BODY * 0.80
        for ln in lines:
            o.append(t(330, ty, ln, FS_BODY, INK, anchor='start'))
            ty += lh
        if isstop:
            o.append(t(W - 190, y + rh / 2 + FS_BODY * 0.36, 'STOP', FS_BODY,
                       '#8A3B2E', bold=True, anchor='end'))
        if i < len(steps):
            o.append(arrow(232, y + rh, 232, y + rh + gap - 4, MUTE, 5, 22))
        y += rh + gap
    if note:
        o.append(_notefit(140, H - 36, note, FS_NOTE))
    return ''.join(o), H, ''


# -------------------------------------------------------- 7 annotated form

def form_annotated(title, heading, fields, callouts=None, note=None):
    """fields = [(label, value)] ; callouts = [(field_index, text)]

    The form is measured: the label column is as wide as its widest label,
    a long value wraps inside the paper instead of running out of it, and
    the callouts sit in their own column clear of the sheet.
    """
    lh = int(FS_BODY * 1.32)
    cw = 980 if callouts else 0
    fx = 150
    fw = W - fx * 2 - (cw + 60 if callouts else 0)
    labw = min(max([text_w(l, FS_SMALL) for l, _ in fields] + [100]) + 70, fw * 0.42)
    valw = fw - labw - 90
    rows = [(l, wrap_w(str(v), FS_BODY, valw)) for l, v in fields]
    rh = [max(1, len(w)) * lh + 36 for _, w in rows]
    head_h = int(FS_HEAD * 1.4) + 30
    paper_h = head_h + sum(rh) + 50
    H = int(BAND + 80 + paper_h + (90 if note else 44))
    o = _head(H, title)
    y0 = BAND + 80
    o.append(rect(fx, y0, fw, paper_h, PAPER, stroke=LEAD, sw=4, rx=10))
    o.append(t(fx + 40, y0 + 30 + FS_HEAD * 0.80, heading,
               fit(heading, FS_HEAD, fw - 80, True), INK, bold=True, anchor='start'))
    o.append(line(fx + 40, y0 + head_h, fx + fw - 40, y0 + head_h, BORDER, 3))
    y = y0 + head_h + 24
    ypos = []
    for (lab, wlines), h in zip(rows, rh):
        o.append(t(fx + 40, y + 18 + FS_SMALL * 0.80, lab,
                   fit(lab, FS_SMALL, labw - 20), MUTE, anchor='start'))
        ty = y + 18 + FS_BODY * 0.80
        for ln in wlines:
            o.append(t(fx + 40 + labw, ty, ln, FS_BODY, INK, anchor='start'))
            ty += lh
        o.append(line(fx + 30 + labw, y + h - 10, fx + fw - 40, y + h - 10, '#C9D3DC', 2))
        ypos.append(y + h / 2)
        y += h
    for idx, txt in (callouts or []):
        yy = ypos[idx]
        cx = fx + fw + 60
        o.append(leader(fx + fw, yy, cx, yy, MUTE, 3, dot=True))
        o.append(pin(cx + 46, yy, idx + 1, r=36))
        tx = cx + 104
        ty = yy - (len(wrap_w(txt, FS_SMALL, cw - 120)) - 1) * lh / 2 + FS_SMALL * 0.30
        for ln in wrap_w(txt, FS_SMALL, cw - 120):
            o.append(t(tx, ty, ln, FS_SMALL, INK, anchor='start'))
            ty += lh
    if note:
        o.append(_notefit(fx, H - 36, note, FS_NOTE))
    return ''.join(o), H, ''


# -------------------------------------------------------- 8 contrast

def contrast(title, loose_t, loose, precise_t, precise, foot_l='', foot_r=''):
    """Two columns set against each other: the vague one and the exact one."""
    gap = 24
    cw = (W - 300 - gap) / 2
    lh = int(FS_BODY * 1.32)
    head_h = int(FS_HEAD * 1.32) + 32
    cols = []
    for items in (loose, precise):
        cols.append([wrap_w(s, FS_BODY, cw - 80) for s in items])
    body_h = max(sum(len(w) * lh + 30 for w in c) for c in cols)
    foot_h = int(FS_SMALL * 1.4) + 30
    box_h = head_h + 36 + body_h + foot_h
    H = int(BAND + 80 + box_h + 50)
    o = _head(H, title)
    y0 = BAND + 80
    for k, (ht, wrapped, foot, col) in enumerate(
            [(loose_t, cols[0], foot_l, '#8A3B2E'), (precise_t, cols[1], foot_r, ACCENT)]):
        x = 150 + k * (cw + gap)
        o.append(rect(x, y0, cw, box_h, '#FFFFFF', stroke=col, sw=5, rx=18))
        o.append(rect(x, y0, cw, head_h, col))
        o.append(t(x + cw / 2, y0 + head_h / 2 + FS_HEAD * 0.36, ht,
                   fit(ht, FS_HEAD, cw - 40, True), '#FFFFFF', bold=True))
        yy = y0 + head_h + 36 + FS_BODY * 0.80
        for wlines in wrapped:
            for ln in wlines:
                o.append(t(x + 40, yy, ln, FS_BODY, INK, anchor='start'))
                yy += lh
            yy += 30
        o.append(t(x + cw / 2, y0 + box_h - 26, foot,
                   fit(foot, FS_SMALL, cw - 40), col, italic=True))
    return ''.join(o), H, ''


# -------------------------------------------------------- 9 morph builder

def morph_builder(title, rows, note=None):
    """rows = [(prefix, root, suffix, word, meaning)] - student series"""
    bw, gap = 400, 34
    lh = int(FS_BODY * 1.30)
    rh = 220
    H = int(BAND + 80 + len(rows) * rh + (90 if note else 40))
    o = _head(H, title)
    y = BAND + 80
    for pre, root, suf, word, meaning in rows:
        x = 150
        parts = [(pre, PLASTIC, 'prefix'), (root, HILITE, 'root'), (suf, '#D9EAD3', 'suffix')]
        for k, (part, col, lab) in enumerate(parts):
            o.append(rect(x, y, bw, 116, col if part else '#EFEFEF',
                          stroke=LEAD, sw=4, rx=14))
            o.append(t(x + bw / 2, y + 58 + FS_HEAD * 0.36, part or '\u2014',
                       fit(part or '\u2014', FS_HEAD, bw - 36, True), INK, bold=True))
            o.append(t(x + bw / 2, y + 116 + FS_SMALL * 1.1, lab, FS_SMALL, MUTE))
            x += bw + gap
            if k < 2:
                o.append(t(x - gap / 2, y + 58 + FS_HEAD * 0.36, '+', FS_HEAD, MUTE))
        o.append(arrow(x + 10, y + 58, x + 120, y + 58, LEAD, 6))
        o.append(t(x + 150, y + 42 + FS_HEAD * 0.36, word,
                   fit(word, FS_HEAD, W - x - 190, True), ACCENT, bold=True, anchor='start'))
        ty = y + 58 + lh
        for ln in wrap_w(meaning, FS_BODY, W - x - 190):
            ty += lh
            o.append(t(x + 150, ty, ln, FS_BODY, MUTE, anchor='start'))
        y += rh
    if note:
        o.append(_notefit(150, H - 36, note, FS_NOTE))
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
        o.append(_notefit(140, H - 60, note, FS_SMALL))
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
        o.append(t(x + cw / 2, 356, name, FS_HEAD, '#FFFFFF', bold=True))
        yy = 440
        for s in lines:
            o.append(rect(x, yy - 54, cw, 112, '#FFFFFF', stroke=BORDER, sw=3, rx=18))
            for j, ln in enumerate(wrap(s, 30)[:2]):
                o.append(t(x + 30, yy - 10 + j * 50, ln, FS_SMALL, INK, anchor='start'))
            yy += 150
    if note:
        o.append(_notefit(150, H - 60, note, FS_SMALL))
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
    if name in ('tooth', 'lesion', 'cavity', 'restoration'):
        o.append(P('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f '
                   'C %.1f %.1f %.1f %.1f %.1f %.1f L %.1f %.1f Z'
                   % (cx-56*s, cy-10*s, cx-62*s, cy-78*s, cx+62*s, cy-78*s, cx+56*s, cy-10*s,
                      cx+44*s, cy+60*s, cx+22*s, cy+76*s, cx+14*s, cy+10*s,
                      cx-14*s, cy+10*s), f=ENAMEL))
        o.append(P('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f'
                   % (cx-14*s, cy+10*s, cx-20*s, cy+60*s, cx-40*s, cy+78*s, cx-48*s, cy+30*s)))
        if name == 'lesion':
            # The same tooth with a dark spot: a lesion is a place, not a hole.
            o.append(C_(24, -46, 13, '#6B4A2B', st='#4A3014'))
        elif name == 'cavity':
            # A wedge lost from inside the crown: cavitated, not just affected.
            o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                       % (cx+2*s, cy-62*s, cx+38*s, cy-54*s, cx+14*s, cy-22*s),
                       f='#3E3A36', st='#2A2724'))
        elif name == 'restoration':
            # The same wedge, filled: what a restoration is.
            o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                       % (cx+2*s, cy-62*s, cx+38*s, cy-54*s, cx+14*s, cy-22*s),
                       f=METAL, st=LEAD))
    elif name in ('periodontium', 'ligament', 'pocket', 'attachment',
                  'periodontitis'):
        # One root in its socket, drawn five ways: the whole apparatus, the
        # ligament, the pocket, the attachment, and the bone loss that is
        # periodontitis. The difference between the five IS the lesson.
        ring = '#B3261E'
        bone_top = 16 if name == 'periodontitis' else -10
        # bone, flanking the root
        for sgn in (-1, 1):
            o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                       % (cx+sgn*64*s, cy+bone_top*s, cx+sgn*30*s, cy+bone_top*s,
                          cx+sgn*26*s, cy+52*s, cx+sgn*64*s, cy+52*s),
                       f=BONE, st=LEAD))
        # the root, tapering to its apex
        o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                   % (cx-20*s, cy-56*s, cx+20*s, cy-56*s, cx+13*s, cy+22*s,
                      cx, cy+58*s, cx-13*s, cy+22*s), f=DENTINE, st=LEAD))
        # the crown stub above the gum
        o.append(R(-25, -76, 50, 20, ENAMEL, r=8))
        # the gum collar
        gum_y = -40
        for sgn in (-1, 1):
            if name == 'pocket' and sgn == -1:
                continue
            o.append(R(sgn*28 if sgn > 0 else -62, gum_y, 34, 30, GUM, r=8))
        if name == 'pocket':
            # the left gum has come away: a dark space runs down the root
            o.append(R(-62, -18, 34, 18 + bone_top, GUM, r=8))
            o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                       % (cx-28*s, cy-40*s, cx-17*s, cy-40*s, cx-15*s, cy+6*s,
                          cx-26*s, cy+4*s), f='#3E3A36', st='#2A2724'))
        elif name in ('periodontium', 'ligament'):
            lig = ring if name == 'ligament' else LEAD
            for yy in (0, 16, 32):
                o.append(L(-24, yy, -15, yy + 8, lig, 5))
                o.append(L(24, yy, 15, yy + 8, lig, 5))
        elif name == 'attachment':
            o.append(C_(-24, -38, 14, 'none', st=ring))
        elif name == 'periodontitis':
            # the bone has gone from where it was: its old level, dashed
            for sgn in (-1, 1):
                for xx in range(0, 3):
                    o.append(L(sgn*(30 + xx*12), -10, sgn*(30 + xx*12 + 6), -10,
                               '#9AA7B2', 4))
    elif name in ('bitewing', 'periapical', 'radiolucency', 'radiopaque',
                  'superimposed', 'artefact', 'apex'):
        # A radiograph records what the beam did: the film is dark, and
        # everything the beam could not pass through is light. Seven film
        # glyphs, and the difference between them is the lesson.
        film = '#2E3A45'
        ring = '#B3261E'
        if name == 'bitewing':
            o.append(R(-64, -44, 128, 88, film, r=10))
            for gx in (-36, 2):
                o.append(R(gx, -32, 32, 28, ENAMEL, r=7))
                o.append(R(gx + 4, 10, 26, 24, ENAMEL, r=7))
        else:
            o.append(R(-44, -64, 88, 128, film, r=10))
            o.append(R(-17, -52, 34, 28, ENAMEL, r=7))
            o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                       % (cx-13*s, cy-24*s, cx+13*s, cy-24*s, cx+6*s, cy+38*s,
                          cx-6*s, cy+38*s), f=DENTINE, st='none'))
            if name == 'radiolucency':
                o.append(C_(16, -18, 12, '#141B21', st='none'))
            elif name == 'radiopaque':
                o.append(C_(0, -42, 11, '#FFFFFF', st='none'))
            elif name == 'superimposed':
                o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f Z'
                           % (cx+6*s, cy-24*s, cx+30*s, cy-24*s, cx+26*s, cy+30*s,
                              cx+12*s, cy+30*s), f='#B9C6CF', st='none'))
            elif name == 'artefact':
                o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f'
                           % (cx-38*s, cy+50*s, cx-10*s, cy+22*s, cx+6*s, cy+44*s,
                              cx+36*s, cy+8*s), st='#FFFFFF', w=5))
            elif name == 'apex':
                o.append(C_(0, 36, 15, 'none', st=ring))
    elif name == 'child':
        o.append(C_(0, -26, 34, SKIN['2']))
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                   % (cx-40*s, cy+66*s, cx, cy+4*s, cx+40*s, cy+66*s), f=c))
    elif name == 'parent':
        o.append(C_(-22, -44, 26, SKIN['3']))
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                   % (cx-60*s, cy+66*s, cx-22*s, cy-14*s, cx+16*s, cy+66*s), f=c))
        o.append(C_(34, -2, 20, SKIN['2']))
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                   % (cx+10*s, cy+66*s, cx+34*s, cy+22*s, cx+58*s, cy+66*s),
                   f='#7A8CA0'))
    elif name == 'star':
        pts = [(0, -58), (17, -18), (58, -18), (25, 8), (36, 50),
               (0, 24), (-36, 50), (-25, 8), (-58, -18), (-17, -18)]
        d = 'M ' + ' L '.join('%.1f %.1f' % (cx + x*s, cy + y*s)
                              for x, y in pts) + ' Z'
        o.append(P(d, f='#E9B949', st='#A07B16'))
    elif name == 'ball':
        o.append(C_(0, 0, 52, PLASTIC))
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                   % (cx-50*s, cy-14*s, cx, cy+16*s, cx+50*s, cy-14*s), w=5))
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                   % (cx-50*s, cy+14*s, cx, cy+44*s, cx+50*s, cy+14*s), w=5))
    elif name in ('demin', 'remin', 'arrested'):
        # The caries balance, drawn: a chalky patch losing mineral, the same
        # patch getting it back, and the dark hard spot that stopped moving.
        o.append(P('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f '
                   'C %.1f %.1f %.1f %.1f %.1f %.1f L %.1f %.1f Z'
                   % (cx-56*s, cy-10*s, cx-62*s, cy-78*s, cx+62*s, cy-78*s, cx+56*s, cy-10*s,
                      cx+44*s, cy+60*s, cx+22*s, cy+76*s, cx+14*s, cy+10*s,
                      cx-14*s, cy+10*s), f=ENAMEL))
        o.append(P('M %.1f %.1f C %.1f %.1f %.1f %.1f %.1f %.1f'
                   % (cx-14*s, cy+10*s, cx-20*s, cy+60*s, cx-40*s, cy+78*s, cx-48*s, cy+30*s)))
        if name == 'arrested':
            o.append(C_(24, -46, 13, '#4A3328', st=LEAD))
            o.append(C_(24, -46, 22, 'none', st='#2E7D32'))
        else:
            o.append(C_(24, -46, 14, '#FFFFFF', st='#9AA7B2'))
            for ang in ((1, -1), (1.4, 0), (1, 1)):
                dx, dy = ang
                a, b = (14, 30) if name == 'demin' else (30, 14)
                o.append(L(24 + dx*a, -46 + dy*a, 24 + dx*b, -46 + dy*b,
                           '#B3261E' if name == 'demin' else '#2E7D32', 5))
    elif name == 'drop':
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                   % (cx, cy-52*s, cx+32*s, cy+8*s, cx, cy+38*s,
                      cx-32*s, cy+8*s, cx, cy-52*s), f='#C0392B', st='#7C241A'))
    elif name == 'numb':
        # Lips with the tingle dots beside them: where numbness is felt.
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                   % (cx-52*s, cy, cx, cy-44*s, cx+52*s, cy,
                      cx, cy+44*s, cx-52*s, cy), f='#E8A1A1', st=LEAD))
        o.append(L(-52, 0, 52, 0, LEAD, 4))
        for dx, dy in ((66, -26), (76, 0), (66, 26)):
            o.append(C_(dx, dy, 6, MUTE, st=None))
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
    elif name == 'perioprobe':
        # Blunt, marked in millimetres: the pair of the sharp probe above,
        # and the difference IS the picture.
        o.append(L(-62, 44, 2, -6, METAL, 12))
        o.append(L(2, -6, 44, -62, LEAD, 9))
        for g in range(4):
            gx, gy = 8 + g * 10, -14 - g * 13.3
            o.append(L(gx - 7, gy - 5, gx + 7, gy + 5, '#FFFFFF', 4))
        o.append(C_(46, -64, 7, LEAD, st=None))
    elif name == 'excavator':
        o.append(L(-62, 44, 6, -10, METAL, 12))
        o.append(C_(38, -42, 26, '#FFFFFF'))
    elif name == 'tweezers':
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                   % (cx-26*s, cy+64*s, cx-34*s, cy-20*s, cx-5*s, cy-66*s), w=8))
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                   % (cx+26*s, cy+64*s, cx+34*s, cy-20*s, cx+5*s, cy-66*s), w=8))
        o.append(C_(0, 60, 9, METAL))
    elif name == 'scaler':
        o.append(L(-62, 44, 0, -6, METAL, 12))
        o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f'
                   % (cx, cy-6*s, cx+40*s, cy-52*s, cx+56*s, cy-14*s), w=8))
    elif name == 'handpiece':
        o.append(L(-62, 52, -18, 14, METAL, 14))
        o.append(R(-26, -34, 76, 50, '#FFFFFF', r=22))
        o.append(C_(58, -8, 20, METAL))
        o.append(L(58, 12, 58, 44, LEAD, 7))
    elif name == 'syringe':
        o.append(R(-44, -16, 76, 32, PLASTIC, r=8))
        o.append(L(-44, 0, -70, 0, LEAD, 6))
        o.append(R(-78, -13, 10, 26, METAL, r=4))
        o.append(L(32, 0, 74, 0, LEAD, 5))
    elif name == 'bur':
        o.append(L(0, 52, 0, -4, METAL, 10))
        o.append(C_(0, -30, 24, METAL))
        for g in (-16, 0, 16):
            o.append(L(g, -50, g, -10, LEAD, 4))
    elif name == 'hand':
        # A lifted hand: the signal this book's unit 5 turns on.
        o.append(R(-30, -14, 60, 66, SKIN['3'], r=20))
        for i, fx in enumerate((-24, -9, 6, 21)):
            fh = (44, 56, 52, 40)[i]
            o.append(R(fx, -14 - fh, 13, fh + 10, SKIN['3'], r=7))
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f L %.1f %.1f Z'
                   % (cx-30*s, cy+6*s, cx-56*s, cy+2*s, cx-52*s, cy+34*s,
                      cx-30*s, cy+38*s), f=SKIN['3']))
        o.append(L(-52, -58, -40, -44, c, 6))
        o.append(L(52, -58, 40, -44, c, 6))
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
    elif name in ('mesial', 'distal', 'buccal', 'lingual', 'palatal',
                  'occlusal', 'incisal', 'interproximal'):
        # The surfaces, drawn from the unit's own principle: every surface is
        # named by what it faces. A crown seen from above, the named face in
        # red, and the thing it faces beside it - a cheek, a tongue, the
        # palate, the midline.
        RING = '#B3261E'
        if name == 'interproximal':
            o.append(R(-56, -42, 46, 84, ENAMEL, r=14))
            o.append(R(10, -42, 46, 84, ENAMEL, r=14))
            o.append(C_(0, 0, 17, 'none', RING))
        elif name == 'incisal':
            o.append(_tooth_glyph(cx - 34*s, cy - 42*s, 68*s, 96*s, 'incisor'))
            o.append(L(-22, -42, 22, -42, RING, 9))
        else:
            o.append(R(-40, -44, 88, 88, ENAMEL, r=16))
            o.append(L(-18, 0, 26, 0, LEAD, 4))
            o.append(L(4, -18, 4, 18, LEAD, 4))
            if name == 'occlusal':
                o.append(R(-40, -44, 88, 88, 'none', RING, r=16))
            elif name == 'buccal':
                o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                           % (cx-74*s, cy-46*s, cx-56*s, cy, cx-74*s, cy+46*s),
                           w=6))
                o.append(L(-40, -40, -40, 40, RING, 9))
            elif name == 'lingual':
                o.append(C_(70, 0, 20, GUM))
                o.append(L(48, -40, 48, 40, RING, 9))
            elif name == 'palatal':
                o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f'
                           % (cx-48*s, cy-66*s, cx+4*s, cy-96*s, cx+56*s, cy-66*s),
                           w=6))
                o.append(L(-36, -44, 44, -44, RING, 9))
            elif name == 'mesial':
                for yy in (-40, -8, 24):
                    o.append(L(74, yy, 74, yy + 18, LEAD, 5))
                o.append(L(48, -40, 48, 40, RING, 9))
                o.append(L(8, 32, 40, 32, RING, 5))
            else:  # distal
                for yy in (-40, -8, 24):
                    o.append(L(74, yy, 74, yy + 18, LEAD, 5))
                o.append(L(-40, -40, -40, 40, RING, 9))
                o.append(L(24, 32, -8, 32, RING, 5))
    elif name in ('enamel', 'dentine', 'pulp', 'cementum', 'crown', 'root'):
        # A tooth in section, every layer in its true colour, with a red ring
        # round the layer the word names. Until this existed, the eight words
        # of the tooth-section unit all wore a speech bubble.
        RING = '#B3261E'
        crown_d = ('M %.1f %.1f Q %.1f %.1f %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                   % (cx-52*s, cy-2*s, cx-52*s, cy-62*s, cx, cy-64*s,
                      cx+52*s, cy-62*s, cx+52*s, cy-2*s))
        root_d = ('M %.1f %.1f L %.1f %.1f Q %.1f %.1f %.1f %.1f L %.1f %.1f Z'
                  % (cx-36*s, cy-2*s, cx-12*s, cy+58*s, cx, cy+68*s,
                     cx+12*s, cy+58*s, cx+36*s, cy-2*s))
        dent_d = ('M %.1f %.1f Q %.1f %.1f %.1f %.1f Q %.1f %.1f %.1f %.1f '
                  'Q %.1f %.1f %.1f %.1f Z'
                  % (cx-38*s, cy-2*s, cx-38*s, cy-48*s, cx, cy-50*s,
                     cx+38*s, cy-48*s, cx+38*s, cy-2*s,
                     cx, cy+52*s, cx-38*s, cy-2*s))
        pulp_d = ('M %.1f %.1f Q %.1f %.1f %.1f %.1f Q %.1f %.1f %.1f %.1f '
                  'Q %.1f %.1f %.1f %.1f Z'
                  % (cx-18*s, cy-6*s, cx-18*s, cy-34*s, cx, cy-36*s,
                     cx+18*s, cy-34*s, cx+18*s, cy-6*s,
                     cx, cy+40*s, cx-18*s, cy-6*s))
        o.append(P(root_d, f=DENTINE, w=3))
        o.append(P(crown_d, f=ENAMEL, w=3))
        o.append(P(dent_d, f=DENTINE, w=3))
        o.append(P(pulp_d, f='#C96F7B', w=3))
        if name == 'enamel':
            o.append(P(crown_d, st=RING, w=7))
        elif name == 'dentine':
            o.append(P(dent_d, st=RING, w=7))
        elif name == 'pulp':
            o.append(P(pulp_d, st=RING, w=7))
        elif name == 'cementum':
            o.append(P(root_d, st=RING, w=7))
        elif name == 'crown':
            o.append(P('M %.1f %.1f L %.1f %.1f'
                       % (cx-62*s, cy-2*s, cx+62*s, cy-2*s), st=RING, w=5))
            o.append(P(crown_d, st=RING, w=7))
        else:  # root
            o.append(P('M %.1f %.1f L %.1f %.1f'
                       % (cx-62*s, cy-2*s, cx+62*s, cy-2*s), st=RING, w=5))
            o.append(P(root_d, st=RING, w=7))
    elif name == 'pill':
        # A capsule and a scored tablet: medicine, a painkiller.
        o.append(R(-58, -36, 72, 34, '#FFFFFF', r=17))
        o.append(P('M %.1f %.1f L %.1f %.1f A %.1f %.1f 0 0 1 %.1f %.1f Z'
                   % (cx-22*s, cy-36*s, cx-22*s, cy-2*s, 17*s, 17*s,
                      cx-22*s, cy-36*s), f=GUM, w=0))
        o.append(R(-58, -36, 72, 34, 'none', r=17))
        o.append(C_(26, 24, 30, '#FFFFFF'))
        o.append(L(6, 24, 46, 24))
    elif name == 'flash':
        # Pain, as a bolt: it hurts, sharp, an ache.
        o.append(P('M %.1f %.1f L %.1f %.1f L %.1f %.1f L %.1f %.1f '
                   'L %.1f %.1f L %.1f %.1f Z'
                   % (cx+10*s, cy-62*s, cx-34*s, cy+6*s, cx-4*s, cy+6*s,
                      cx-18*s, cy+62*s, cx+34*s, cy-14*s, cx+2*s, cy-14*s),
                   f='#E8B931', w=4))
    elif name in ('incisor', 'canine', 'premolar', 'molar'):
        # The four tooth types, drawn with the same crown profiles the
        # dentition map uses. Until these existed, an incisor, a canine, a
        # premolar and a molar all wore the same generic tooth, and a card row
        # for the dentition unit said nothing the words did not.
        o.append(_tooth_glyph(cx - 48*s, cy - 58*s, 96*s, 112*s, name))
        o.append(rect(cx - 58*s, cy + 50*s, 116*s, 14*s, GUM, stroke=LEAD, sw=3, rx=7))
    elif name == 'mouth':
        # An open mouth: lip ring, dark cavity, a band of upper teeth. The ear
        # stood in for this for eleven units because no mouth glyph existed.
        o.append(P('M %.1f %.1f a %.1f %.1f 0 1 0 %.1f 0 a %.1f %.1f 0 1 0 %.1f 0 Z'
                   % (cx-62*s, cy, 62*s, 46*s, 124*s, 62*s, 46*s, -124*s), f=GUM, w=5))
        o.append(P('M %.1f %.1f a %.1f %.1f 0 1 0 %.1f 0 a %.1f %.1f 0 1 0 %.1f 0 Z'
                   % (cx-40*s, cy+4*s, 40*s, 28*s, 80*s, 40*s, 28*s, -80*s),
                   f='#5A2A33', w=4))
        o.append(R(-32, -20, 64, 18, ENAMEL, r=8))
    elif name == 'lips':
        # Closed lips: the vestibule and the frenum both live just behind them.
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f Q %.1f %.1f %.1f %.1f '
                   'Q %.1f %.1f %.1f %.1f Q %.1f %.1f %.1f %.1f Z'
                   % (cx-58*s, cy, cx-26*s, cy-30*s, cx, cy-14*s,
                      cx+26*s, cy-30*s, cx+58*s, cy,
                      cx+26*s, cy+30*s, cx, cy+22*s,
                      cx-26*s, cy+30*s, cx-58*s, cy), f=GUM, w=5))
        o.append(L(-58, 0, 58, 0))
    elif name == 'gum':
        o.append(P('M %.1f %.1f Q %.1f %.1f %.1f %.1f L %.1f %.1f Z'
                   % (cx-66*s, cy+30*s, cx, cy-44*s, cx+66*s, cy+30*s, cx-66*s, cy+30*s),
                   f=GUM))
    else:
        o.append(C_(0, 0, 58, '#FFFFFF'))
        o.append(t(cx, cy + 18 * s, (name[:1] or '?').upper(), int(56 * s), c, bold=True))
    return ''.join(o)


ICON_NAMES = set('''apex arrested artefact attachment ball bitewing bone book bowl brush buccal bur calendar canine
card cavity cementum chair child clock crown cross demin dentine distal door drop ear
enamel excavator flash form gloves gum hand handpiece incisal incisor
interproximal lesion ligament light lingual lips mask mesial mirror molar
mouth numb occlusal palatal parent pen periapical periodontitis periodontium perioprobe person
phone pill pocket premolar probe pulp radiolucency radiopaque remin restoration root scaler speech star superimposed syringe
tick tooth tray tweezers water xray'''.split())


def as_icon(name):
    """Resolve anything a unit passes - an icon name or a taught term.

    part_recap is given the unit's own words as often as it is given icon
    names, and an unknown name used to fall through to a lettered circle.
    """
    n = (name or 'speech').strip().lower()
    return n if n in ICON_NAMES else pick_icon(n)


ICON_FOR = {
 'surgery': 'door', 'waiting': 'clock', 'waiting room': 'clock', 'chair': 'chair',
 'headrest': 'chair', 'nurse': 'person', 'dental nurse': 'person',
 'appointment': 'calendar', 'sit back': 'chair', 'comfortable': 'tick',
 'open wide': 'mouth',
 'enamel': 'enamel', 'dentine': 'dentine', 'pulp': 'pulp',
 'cementum': 'cementum', 'crown': 'crown', 'root': 'root',
 'cusp': 'premolar', 'surface': 'tooth',
 'medicine': 'pill', 'painkiller': 'pill', 'tablet': 'pill',
 'allergy': 'cross', 'allergic': 'cross',
 'pain': 'flash', 'hurt': 'flash', 'hurts': 'flash', 'ache': 'flash',
 'toothache': 'flash', 'sore': 'gum', 'swollen': 'gum', 'rinse': 'water', 'spit': 'bowl', 'upper teeth': 'tooth',
 'lower teeth': 'tooth', 'gum': 'gum', 'filling': 'restoration', 'mirror': 'mirror',
 'probe': 'probe', 'record': 'card', 'record card': 'card', 'date of birth': 'calendar',
 'reception': 'door', 'bib': 'mask', 'bowl': 'bowl', 'bracket table': 'tray',
 'operating light': 'light', 'colleague': 'person', 'coat hook': 'door',
 'oral cavity': 'mouth', 'vestibule': 'lips', 'hard palate': 'bone',
 'soft palate': 'gum', 'mucosa': 'water', 'alveolar ridge': 'bone',
 'gingiva': 'gum', 'frenum': 'lips', 'floor of the mouth': 'mouth',
 'dentition': 'tooth', 'quadrant': 'mouth', 'midline': 'incisor',
 'incisor': 'incisor', 'canine': 'canine', 'premolar': 'premolar',
 'molar': 'molar', 'notation': 'form',
 'telephone': 'phone', 'message': 'speech', 'letter': 'form', 'brush': 'brush',
 'radiograph': 'xray', 'tray': 'tray', 'gloves': 'gloves', 'mask': 'mask',
 'pen': 'pen', 'book': 'book',
 # Units 4 and 5 of both pilot books. Without these the fallback gives one
 # speech bubble to every abstract word, and a row of five identical pictures
 # says less than no picture at all.
 'plan': 'form', 'treatment': 'tooth', 'step': 'tick', 'explain': 'speech',
 'agree': 'tick', 'cost': 'card', 'take': 'clock', 'ready': 'tick',
 'signal': 'hand', 'stop': 'cross', 'lift': 'hand', 'feel': 'ear',
 'break': 'clock', 'uncomfortable': 'chair', 'carry on': 'tick',
 'moment': 'clock',
 'mesial': 'mesial', 'distal': 'distal', 'buccal': 'buccal',
 'lingual': 'lingual', 'palatal': 'palatal', 'occlusal': 'occlusal',
 'incisal': 'incisal', 'interproximal': 'interproximal', 'labial': 'lips',
 'mouth mirror': 'mirror', 'periodontal probe': 'perioprobe',
 'excavator': 'excavator', 'tweezers': 'tweezers', 'scaler': 'scaler',
 'handpiece': 'handpiece', 'syringe': 'syringe', 'bur': 'bur',
 'cotton roll': 'tray', 'tip': 'probe', 'blunt': 'perioprobe',
 # Units 6 to 10 of both books. Same reason as above: every word that reaches
 # a card needs a picture it has earned, and the fallback cannot earn one.
 'pressure': 'gloves', 'sharp': 'probe', 'numb': 'numb', 'still': 'tick',
 'nod': 'person', 'check': 'mirror', 'feeling': 'ear', 'count': 'clock',
 'normal': 'tick', 'bleed': 'drop', 'swelling': 'gum', 'wait': 'clock',
 'soft': 'gum', 'worry': 'speech', 'later': 'calendar',
 'afraid': 'person', 'relax': 'chair', 'slowly': 'clock', 'quiet': 'ear',
 'reason': 'book', 'promise': 'tick', 'hold': 'gloves', 'breathe': 'mask',
 'breath': 'mask',
 'child': 'child', 'parent': 'parent', 'show': 'mirror', 'touch': 'gloves',
 'game': 'ball', 'choose': 'form', 'brave': 'star', 'help': 'person',
 'send': 'form', 'hospital': 'door', 'busy': 'clock', 'another': 'tick',
 'sorry': 'speech', 'change': 'calendar',
 'finding': 'form', 'lesion': 'lesion', 'cavity': 'cavity',
 'restoration': 'restoration', 'sound': 'tick', 'extend': 'probe',
 'detect': 'mirror',
 'periodontium': 'periodontium', 'periodontal ligament': 'ligament',
 'alveolar bone': 'bone', 'pocket': 'pocket', 'calculus': 'brush',
 'gingivitis': 'gum', 'periodontitis': 'periodontitis',
 'attachment': 'attachment',
 'caries': 'lesion', 'acid': 'water', 'demineralisation': 'demin',
 'remineralisation': 'remin', 'fissure': 'occlusal', 'cavitated': 'cavity',
 'progress': 'clock', 'arrested': 'arrested', 'plaque': 'brush',
 'white spot': 'demin', 'fluoride': 'water', 'pit': 'probe',
 'restore': 'tooth',
 'bitewing': 'bitewing', 'periapical': 'periapical',
 'radiolucency': 'radiolucency', 'radiopaque': 'radiopaque',
 'apex': 'apex', 'artefact': 'artefact',
 'superimposed': 'superimposed', 'underestimate': 'probe',
 'complaint': 'speech', 'history': 'book', 'extraoral': 'person',
 'intraoral': 'mirror', 'provisional diagnosis': 'form',
 'treatment plan': 'card', 'prioritise': 'tick', 'recall': 'calendar',
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
    cols = max(1, min(cols, 5))
    size = FS_BODY
    rows = (len(items) + cols - 1) // cols
    gap = 26
    cw = (W - 200 - (cols - 1) * gap) / cols
    wrapped = []
    for it in items:
        term = it[0] if isinstance(it, (tuple, list)) else it
        ic = (it[1] if isinstance(it, (tuple, list)) and len(it) > 1 and it[1]
              else pick_icon(term))
        # A vocabulary card must never hyphenate its word: a learner is
        # meeting it for the first time. When the longest word is wider than
        # the card, the card's label shrinks until the word fits whole.
        sz_i = size
        words = str(term).split() or ['']
        longest = max(words, key=lambda w: text_w(w, size, True))
        while sz_i > 24 and text_w(longest, sz_i, True) > cw - 44:
            sz_i -= 2
        wrapped.append((wrap_w(term, sz_i, cw - 44, True), ic, sz_i))
    lh = int(size * 1.30)
    nmax = max(len(w) for w, _ic, _s in wrapped)
    icon_h = 230
    ch = icon_h + 40 + nmax * lh + 34
    H = int(BAND + 80 + rows * (ch + gap) + (90 if note else 40))
    o = _head(H, title)
    for i, (lines, ic, sz_i) in enumerate(wrapped):
        r, c = divmod(i, cols)
        x = 100 + c * (cw + gap)
        y = BAND + 80 + r * (ch + gap)
        o.append(rect(x, y, cw, ch, '#FFFFFF', stroke=BORDER, sw=3, rx=20))
        o.append(icon(ic, x + cw / 2, y + icon_h * 0.52, min(1.35, cw / 460.0)))
        ty = y + icon_h + 40
        for ln in lines:
            o.append(t(x + cw / 2, ty, ln, sz_i, INK, bold=True))
            ty += int(sz_i * 1.30)
    if note:
        o.append(_notefit(100, H - 36, note, FS_NOTE))
    return ''.join(o), H, ''


# ------------------------------------------------------- 14 conversation

def conversation(title, left, right, exchange_lines, note=None):
    """Two people, drawn, with what each one says beside them.

    left/right = dict(name, role, skin, hair, style, tunic, mask, glasses)
    exchange_lines = [(who, line), ...] where who is 'L' or 'R'.
    Every bubble is measured from its own text, so no line can print outside
    its border, and the names sit under the figures, never across them.
    """
    size = FS_BODY
    cardw = 860
    lx, rx = 140, W - 140 - cardw
    lcard, lh_ = person_card(lx, BAND + 70, cardw, left)
    rcard, rh_ = person_card(rx, BAND + 70, cardw, right)
    y0 = BAND + 70 + max(lh_, rh_) + 50
    bw = W / 2 - 220
    bubbles, y = [], y0
    for whoside, line in exchange_lines:
        isleft = whoside == 'L'
        bx = 140 if isleft else W / 2 + 80
        svg, bh = bubble2(bx, y, bw, line, point='down',
                          fill='#FFFFFF' if isleft else '#FDF6F4',
                          stroke=ACCENT if isleft else '#8A3B2E',
                          size=size, tail_at=0.12 if isleft else 0.08)
        bubbles.append(svg)
        y += bh + 34
    H = int(y + (70 if note else 24))
    o = _head(H, title)
    o.append(lcard)
    o.append(rcard)
    o.extend(bubbles)
    if note:
        o.append(_notefit(140, H - 30, note, FS_NOTE))
    return ''.join(o), H, ''


# ------------------------------------------------------- 15 cast cards

def cast_cards(title, people, note=None):
    """The cast of the book. Names and roles sit clear of every body."""
    cols = 4 if len(people) > 3 else max(1, len(people))
    gap = 26
    cw = (W - 200 - (cols - 1) * gap) / cols
    hmax = max(person_card(0, 0, cw, p)[1] for p in people)
    rows = (len(people) + cols - 1) // cols
    H = int(BAND + 80 + rows * (hmax + gap) + (90 if note else 40))
    o = _head(H, title)
    for i, p in enumerate(people):
        r, c = divmod(i, cols)
        o.append(person_card(100 + c * (cw + gap), BAND + 80 + r * (hmax + gap),
                             cw, p, height=hmax)[0])
    if note:
        o.append(_notefit(100, H - 36, note, FS_NOTE))
    return ''.join(o), H, ''


# ------------------------------------------------------- 16 mini table

def mini_table(title, header, rows, note=None, highlight=None, col_bold=(0,)):
    """A compact table for an exercise: the data visual beside the icon visual.

    Columns are measured from their own contents and cells wrap, so a long
    gloss no longer has to be cut at 46 characters. Type is set in points,
    not in raw units, so it prints at the size of the page it sits on.
    """
    size, head_sz = FS_BODY, FS_HEAD
    pad, left = 26, 80
    tw = W - 2 * left
    cols = len(header)
    need = []
    for j in range(cols):
        m = text_w(str(header[j]), head_sz, True)
        for r in rows:
            m = max(m, min(text_w(str(r[j]), size), tw * 0.62))
        need.append(max(m + 2 * pad, 170))
    tot = sum(need) or 1
    widths = [tw * n / tot for n in need]
    xs, x = [], left
    for w in widths:
        xs.append(x)
        x += w
    lh = int(size * 1.32)
    hrow = int(head_sz * 1.32) + 2 * 18
    body = []
    for r in rows:
        cells = [wrap_w(str(c), size, widths[j] - 2 * pad) for j, c in enumerate(r)]
        body.append((cells, max(len(c) for c in cells) * lh + 2 * 18))
    H = int(BAND + 70 + hrow + sum(h for _, h in body) + (90 if note else 40))
    o = [rect(0, 0, W, H, '#FFFFFF', stroke=BORDER, sw=4)]
    o.append(rect(0, 0, W, BAND, ACCENT))
    o.append(t(W / 2, BAND * 0.68, title, fit(title, FS_TITLE, W - 160, True),
               '#FFFFFF', bold=True))
    y = BAND + 70
    for j, h in enumerate(header):
        o.append(rect(xs[j], y, widths[j], hrow, STRIP, stroke=BORDER, sw=3))
        o.append(t(xs[j] + pad, y + hrow / 2 + head_sz * 0.36, str(h),
                   fit(str(h), head_sz, widths[j] - 2 * pad, True), ACCENT,
                   bold=True, anchor='start'))
    y += hrow
    for i, (cells, h) in enumerate(body):
        fill = HILITE if highlight and i in highlight else ('#FFFFFF' if i % 2 else '#F7FAFD')
        for j in range(cols):
            o.append(rect(xs[j], y, widths[j], h, fill, stroke=BORDER, sw=3))
            ty = y + 18 + size * 0.80
            for ln in cells[j]:
                o.append(t(xs[j] + pad, ty, ln, size, INK,
                           bold=(j in col_bold), anchor='start'))
                ty += lh
        y += h
    if note:
        o.append(_notefit(left, H - 36, note, FS_NOTE))
    return ''.join(o), H, ''


# ------------------------------------------------------- 17 grammar mnemonic

def grammar_mnemonic(title, cells, note=None):
    """An expressive, memorable picture of one grammar point.

    cells = [(form, when_you_use_it, example, icon_name), ...]
    """
    n = len(cells)
    gap = 26
    cw = (W - 160 - (n - 1) * gap) / n
    head_h = int(FS_HEAD * 1.32) + 40
    whens = [wrap_w(c[1], FS_BODY, cw - 44) for c in cells]
    exs = [wrap_w(c[2], FS_SMALL, cw - 76) for c in cells]
    nw, ne = max(len(x) for x in whens), max(len(x) for x in exs)
    icon_h = 300
    ex_h = ne * int(FS_SMALL * 1.30) + 44
    ch = int(head_h + icon_h + nw * int(FS_BODY * 1.30) + 36 + ex_h + 40)
    H = int(BAND + 80 + ch + (90 if note else 40))
    o = _head(H, title)
    y0 = BAND + 80
    for i, (form, when, example, ic) in enumerate(cells):
        x = 80 + i * (cw + gap)
        o.append(rect(x, y0, cw, ch, '#FFFFFF', stroke=ACCENT, sw=6, rx=24))
        o.append(rect(x, y0, cw, head_h, ACCENT))
        o.append(t(x + cw / 2, y0 + head_h / 2 + FS_HEAD * 0.36, form,
                   fit(form, FS_HEAD, cw - 40, True), '#FFFFFF', bold=True))
        o.append(icon(ic, x + cw / 2, y0 + head_h + icon_h * 0.46,
                      min(1.55, cw / 420.0)))
        ty = y0 + head_h + icon_h
        for ln in whens[i]:
            o.append(t(x + cw / 2, ty, ln, FS_BODY, MUTE))
            ty += int(FS_BODY * 1.30)
        by = y0 + ch - ex_h - 24
        o.append(rect(x + 20, by, cw - 40, ex_h, HILITE, stroke=BORDER, sw=3, rx=14))
        ey = by + 22 + FS_SMALL * 0.80
        for ln in exs[i]:
            o.append(t(x + cw / 2, ey, ln, FS_SMALL, INK, italic=True))
            ey += int(FS_SMALL * 1.30)
    if note:
        o.append(_notefit(80, H - 36, note, FS_NOTE))
    return ''.join(o), H, ''


# ------------------------------------------------------- 18 cover

def cover2(title_lines, sub, level_badge, book_badge, series, edition, bullets,
           people=None, emblem='tooth'):
    """A fitted cover with a scene on it. Nothing may run off the page.

    Every string is measured before it is drawn, and the scene panel is
    sized from the cast it has to hold, so the cover cannot overflow
    whatever the title or the number of people turns out to be.
    """
    H = 4300
    GOLD2, PALEG, DEEP, MID = '#F2C879', '#CFEAE4', '#0A2E2A', '#124A44'
    o = [rect(0, 0, W, H, '#0E3B36')]
    head_band = []
    o.append(rect(90, 90, W - 180, H - 180, 'none', stroke='#3E8E84', sw=7))
    o.append(rect(118, 118, W - 236, H - 236, 'none', stroke='#1C5F57', sw=3))

    sz = fit(series, pt(11), W - 520, True)
    o.append(t(W / 2, 300, series, sz, '#8FD3C7', bold=True, ls=7))
    o.append(line(W / 2 - 420, 356, W / 2 + 420, 356, GOLD2, 5))

    y = 480
    for ln in title_lines:
        s2 = fit(ln, 205, W - 420, True, floor=72)
        o.append(t(W / 2, y + s2 * 0.80, ln, s2, '#FFFFFF', bold=True))
        y += s2 * 1.12
    y += 40
    s2 = fit(sub, pt(21), W - 460, True)
    o.append(t(W / 2, y + s2 * 0.80, sub, s2, GOLD2, bold=True))
    y += s2 * 1.5 + 70
    o.insert(1, rect(0, 0, W, y - 40, DEEP))

    # --- the scene: a surgery, with the book's own cast standing in it
    people = list(people or [])[:4]
    pad = 70
    px, pw = 200, W - 400
    s_fig = min(1.05, (pw - 2 * pad) / (len(people) * 2 * HALFW_U * 0.80)) if people else 1.0
    half, ptop, pbot = person_box(s_fig, 'headscarf')
    bsz0 = pt(11.5)
    for b in bullets:
        bsz0 = min(bsz0, fit(b, pt(11.5), W - 520))
    below = int(80 + 190 + 80 + len(bullets) * bsz0 * 1.58 + 120 + 300 + 130 + 150)
    scene_h = int(max(1180, (pbot - ptop) + 420, H - 150 - y - below))
    o.append(rect(px, y, pw, scene_h, MID, stroke='#3E8E84', sw=5, rx=40))
    base = int(y + (scene_h + (pbot - ptop)) / 2 + 30)
    o.append(rect(px + 30, base, pw - 60, 9, '#2E7A71'))
    # an operating light, behind the people
    lcx, lcy = px + 250, int(base - (pbot - ptop) - 120)
    o.append(circ(lcx, lcy, 96, '#E8EEF3', stroke='#8FD3C7', sw=6))
    for k in range(8):
        a = math.radians(k * 45)
        o.append(line(lcx + 112 * math.cos(a), lcy + 112 * math.sin(a),
                      lcx + 158 * math.cos(a), lcy + 158 * math.sin(a), '#8FD3C7', 5))
    o.append(line(lcx, lcy - 96, lcx, y + 40, '#8FD3C7', 8))
    if people:
        left = px + pad + half
        right = px + pw - pad - half
        step = (right - left) / max(1, len(people) - 1) if len(people) > 1 else 0
        pcy = base - pbot
        for i, p in enumerate(people):
            cx = left + i * step if len(people) > 1 else (px + pw / 2)
            o.append(person(cx, pcy, s_fig, p.get('skin', '3'), p.get('hair', 'black'),
                            p.get('style', 'short'), p.get('tunic', 'teal'),
                            p.get('mask', False), p.get('glasses', False)))
    o.append(circ(px + pw - 150, y + 150, 104, DEEP, stroke=GOLD2, sw=6))
    o.append(icon(emblem, px + pw - 150, y + 150, 1.05, GOLD2))
    y += scene_h + 80

    # --- badges
    bw, bh = 660, 190
    for i, val in enumerate([level_badge, book_badge]):
        bx = W / 2 - bw - 30 + i * (bw + 60)
        o.append(rect(bx, y, bw, bh, GOLD2, rx=28))
        o.append(t(bx + bw / 2, y + bh / 2 + pt(16) * 0.36, val,
                   fit(val, pt(16), bw - 60, True), DEEP, bold=True))
    y += bh + 80

    # --- what the book does, fitted line by line
    bsz = pt(11.5)
    for b in bullets:
        bsz = min(bsz, fit(b, pt(11.5), W - 520))
    for b in bullets:
        o.append(t(W / 2, y + bsz * 0.80, b, bsz, PALEG))
        y += bsz * 1.58

    # --- icon strip across the foot
    strip = [emblem, 'chair', 'mirror', 'calendar', 'card', 'speech']
    sh = 300
    sy = max(y + 60, H - 150 - sh - 130)
    o.append(rect(200, sy, W - 400, sh, MID, stroke='#3E8E84', sw=5, rx=36))
    step = (W - 700) / (len(strip) - 1)
    for i, ic in enumerate(strip):
        o.append(icon(ic, 350 + i * step, sy + sh / 2, 1.35, GOLD2))
    o.append(t(W / 2, H - 170, edition, fit(edition, pt(12), W - 500, True),
               '#8FD3C7', bold=True))
    return ''.join(o), H, ''


# ------------------------------------------------------- 19 part recap

def part_recap(title, lines, icons=None, question=None, target_h=None,
               foot='Close the book. Say the four words you have just used.',
               cards=None):
    """The figure that closes a part and fills the foot of its page.

    `lines` are what the part actually taught, in the part's own words;
    `question` is one retrieval prompt. `target_h` is not a hint: the build
    measures the exact room the page has left and passes it in, and this
    figure grows or compresses to that height - icons first, then the
    question strip - so that a part never ends on a half-empty page and
    never spills onto the next one.
    """
    # A figure can never be taller than the page it has to sit on, whatever the
    # fitting pass asks for: A4 less its margins, less the caption's own line.
    MAX_H = 4600
    target_h = min(target_h or 0, MAX_H)
    icons = list(icons or [])
    while len(icons) < min(4, max(2, len(lines))):
        icons.append(pick_icon(lines[len(icons) % len(lines)]))
    icons = icons[:5]
    tw = W - 300
    size, lh = FS_BODY, int(FS_BODY * 1.32)
    wrapped = [wrap_w(s, size, tw - 120) for s in lines]
    body_h = sum(len(w) * lh + 26 for w in wrapped)
    icon_h, show_icons, show_q = 300, True, bool(question)
    q_h = (int(FS_HEAD * 1.32) + 56) if show_q else 0
    foot_h = 90

    def natural():
        return int(BAND + 70 + (icon_h + 34 if show_icons else 10)
                   + body_h + 30 + q_h + foot_h)

    if target_h and target_h < natural():
        # compress: the small type stays, the ornament goes
        icon_h = 210
        if target_h < natural():
            show_icons = False
        if target_h < natural() and show_q:
            show_q, q_h = False, 0
        if target_h < natural():
            size = max(pt(8), int(size * 0.88))
            lh = int(size * 1.30)
            wrapped = [wrap_w(s, size, tw - 120) for s in lines]
            body_h = sum(len(w) * lh + 18 for w in wrapped)
    H = int(max(natural(), target_h or 0))
    # A lot of room left means a full-page summary, not a line of text with
    # air round it: grow the type first, then the pictures, then the gaps.
    while H - natural() > 420 and size < FS_TITLE:
        size += 2
        lh = int(size * 1.32)
        wrapped = [wrap_w(s_, size, tw - 120) for s_ in lines]
        body_h = sum(len(w) * lh + 30 for w in wrapped)
    slack = H - natural()
    # The pictures take the slack first, up to the width they have to share,
    # and the rest goes into spacing. A recap with a whole page to fill then
    # reads as a plate rather than as air, and the circles never collide.
    if show_icons and slack > 0:
        step_w = (W - 600) / max(1, len(icons) - 1) if len(icons) > 1 else (W - 600)
        room = max(0, min(int(step_w * 0.92), 1050) - icon_h)
        grow = min(slack, room)
        icon_h += grow
        slack -= grow
    # Room still left after the pictures and a line of spacing is given to the
    # part's own words as cards, so a full page is filled with something to
    # retrieve rather than with air.
    card_rows, card_h, card_cols = [], 0, 4
    cards = [c for c in (cards or []) if c][:8]
    if cards:
        cw_ = (W - 300 - (card_cols - 1) * 26) / card_cols
        wrapped_c = [wrap_w(c, FS_SMALL, cw_ - 40, True) for c in cards]
        nmax = max(len(x) for x in wrapped_c)
        nrows = (len(wrapped_c) + card_cols - 1) // card_cols
        want = nrows * (int(FS_SMALL * 1.3) * nmax + 170) + 80
        if slack >= want + 80:
            card_rows = wrapped_c
            card_h = min(slack - 60, want + int((slack - want) * 0.45))
            slack -= card_h
    pad_extra = int(slack / max(1, len(lines) + 1))
    o = _head(H, title)
    y = BAND + 70
    if show_icons:
        step = (W - 600) / max(1, len(icons) - 1) if len(icons) > 1 else 0
        for i, ic in enumerate(icons):
            cx = 300 + i * step if len(icons) > 1 else W / 2
            o.append(circ(cx, y + icon_h * 0.46, icon_h * 0.40, '#FFFFFF',
                          stroke=ACCENT, sw=5))
            o.append(icon(as_icon(ic), cx, y + icon_h * 0.46, icon_h / 300.0 * 1.15))
        y += icon_h + 34
    else:
        y += 10
    for i, wlines in enumerate(wrapped):
        o.append(circ(196, y + lh * 0.46, 30, ACCENT))
        o.append(t(196, y + lh * 0.46 + FS_SMALL * 0.36, str(i + 1), FS_SMALL,
                   '#FFFFFF', bold=True))
        ty = y + size * 0.80
        for ln in wlines:
            o.append(t(260, ty, ln, size, INK, anchor='start'))
            ty += lh
        y += len(wlines) * lh + 26 + pad_extra
    if card_rows:
        cw_ = (W - 300 - (card_cols - 1) * 26) / card_cols
        nrows = (len(card_rows) + card_cols - 1) // card_cols
        rh_ = (card_h - 50) / max(1, nrows)
        for k, wl in enumerate(card_rows):
            r_, c_ = divmod(k, card_cols)
            x_ = 150 + c_ * (cw_ + 26)
            y_ = y + 20 + r_ * rh_
            o.append(rect(x_, y_, cw_, rh_ - 20, '#FFFFFF', stroke=BORDER, sw=3, rx=18))
            inner = rh_ - 20
            lab_h = len(wl) * int(FS_SMALL * 1.3) + 26
            o.append(icon(as_icon(cards[k]), x_ + cw_ / 2, y_ + (inner - lab_h) * 0.50,
                          min(1.2, (inner - lab_h) * 0.80 / 190.0)))
            ty_ = y_ + inner - lab_h + FS_SMALL
            for ln in wl:
                o.append(t(x_ + cw_ / 2, ty_, ln, FS_SMALL, INK, bold=True))
                ty_ += int(FS_SMALL * 1.3)
        y += card_h
    if show_q:
        qh = int(FS_HEAD * 1.32) + 56
        o.append(rect(150, H - 90 - qh, W - 300, qh, HILITE, stroke=LEAD, sw=4, rx=18))
        o.append(t(W / 2, H - 90 - qh / 2 + FS_HEAD * 0.36, question,
                   fit(question, FS_HEAD, W - 360, True), INK, bold=True))
    elif question:
        foot = question + '   ' + foot
    o.append(t(150, H - 34, fit(foot, FS_NOTE, W - 300) and foot, FS_NOTE, MUTE,
               anchor='start', italic=True))
    return ''.join(o), H, ''


# ------------------------------------------------------- 20 case panel
def case_panel(title, who, facts, question, note=None):
    """A case for discussion: who is in it, what is known, what is at issue.

    `who` = [person dict, ...] (one or two), `facts` = short lines of what
    is on the record, `question` = the thing the class has to decide.
    """
    cardw = 760
    lh = int(FS_BODY * 1.32)
    who = list(who)[:2]
    chmax = max(person_card(0, 0, cardw, p)[1] for p in who)
    fx = 150 + len(who) * (cardw + 30) + 20
    fw = W - fx - 150
    wrapped = [wrap_w('•  ' + f, FS_BODY, fw - 90) for f in facts]
    facts_h = int(FS_HEAD * 1.32) + 40 + sum(len(w) * lh + 20 for w in wrapped) + 40
    top_h = max(chmax, facts_h)
    cards = [person_card(150 + i * (cardw + 30), BAND + 80, cardw, p, height=top_h)[0]
             for i, p in enumerate(who)]
    qh = int(FS_HEAD * 1.32) * 2 + 70
    H = int(BAND + 80 + top_h + 40 + qh + (90 if note else 44))
    o = _head(H, title)
    o.extend(cards)
    o.append(rect(fx, BAND + 80, fw, top_h, '#FFFFFF', stroke=BORDER, sw=3, rx=20))
    o.append(rect(fx, BAND + 80, fw, int(FS_HEAD * 1.32) + 32, STRIP))
    o.append(t(fx + 34, BAND + 80 + (FS_HEAD * 1.32 + 32) / 2 + FS_HEAD * 0.36,
               'WHAT IS ON THE RECORD', fit('WHAT IS ON THE RECORD', FS_HEAD, fw - 68, True),
               ACCENT, bold=True, anchor='start'))
    y = BAND + 80 + int(FS_HEAD * 1.32) + 32 + 30
    for wlines in wrapped:
        for ln in wlines:
            o.append(t(fx + 40, y + FS_BODY * 0.80, ln, FS_BODY, INK, anchor='start'))
            y += lh
        y += 20
    qy = BAND + 80 + top_h + 40
    o.append(rect(150, qy, W - 300, qh, HILITE, stroke=LEAD, sw=5, rx=20))
    qlines = wrap_w(question, FS_HEAD, W - 400, True)
    ty = qy + (qh - len(qlines) * int(FS_HEAD * 1.32)) / 2 + FS_HEAD * 0.80
    for ln in qlines:
        o.append(t(W / 2, ty, ln, FS_HEAD, INK, bold=True))
        ty += int(FS_HEAD * 1.32)
    if note:
        o.append(_notefit(150, H - 34, note, FS_NOTE))
    return ''.join(o), H, ''


# ------------------------------------------------------- 21 opinion line
def opinion_line(title, poles, marks, note=None):
    """A line with two poles and the positions a class can take on it.

    The visual half of a discussion task: learners put a mark on the line
    and then have to say, in English, why it is there and not next to it.
    """
    lh = int(FS_BODY * 1.32)
    wrapped = [wrap_w(m, FS_BODY, 520) for m in marks]
    H = int(BAND + 90 + 260 + max(len(w) for w in wrapped) * lh + 80
            + (80 if note else 30))
    o = _head(H, title)
    y = BAND + 200
    o.append(line(260, y, W - 260, y, LEAD, 7))
    for d, lab in ((0, poles[0]), (1, poles[1])):
        x = 260 if d == 0 else W - 260
        o.append(line(x, y - 44, x, y + 44, LEAD, 7))
        o.append(t(x, y - 72, lab, fit(lab, FS_HEAD, 700, True), ACCENT, bold=True))
    n = len(marks)
    for i, wlines in enumerate(wrapped):
        x = 260 + (W - 520) * (i / float(max(1, n - 1)))
        o.append(circ(x, y, 26, '#FFFFFF', stroke=ACCENT, sw=5))
        ty = y + 86 + FS_BODY * 0.80
        for ln in wlines:
            o.append(t(x, ty, ln, FS_BODY, INK))
            ty += lh
    if note:
        o.append(_notefit(260, H - 32, note, FS_NOTE))
    return ''.join(o), H, ''
