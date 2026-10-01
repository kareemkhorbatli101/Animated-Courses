"""The figure frames: every illustration in Book 2 is one of these."""
from art import *

W = 1180


def _title(t, y=40, size=30):
    return T(W / 2, y, t, size, NAVY, bold=True)


def _bubble(x, y, w, lines, tail='left', size=19, fill=WHITE, stroke=BLUE, tail_x=None):
    """Rounded speech bubble; x,y = top-left."""
    h = 22 + len(lines) * 27
    o = [R(x, y, w, h, fill, stroke, 2.5, 10)]
    for k, ln in enumerate(lines):
        o.append(T(x + w / 2, y + 32 + k * 27, ln, size, NAVY))
    if tail_x is not None:
        tx = min(max(tail_x, x + 20), x + w - 46)
        d = 26
    else:
        tx = x + 24 if tail == 'left' else x + w - 24
        d = 26 if tail == 'left' else -26
    o.append('<path d="M%g %g l%g %g l0 %g z" fill="%s" stroke="%s" stroke-width="2"/>'
             % (tx, y + h, d, 26, -26, fill, stroke))
    return ''.join(o), h


# ---------------------------------------------------------------- 1. covers
def cover_front():
    w, h = 1488, 2104
    o = ['<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">'
         '<stop offset="0" stop-color="%s"/><stop offset="1" stop-color="%s"/>'
         '</linearGradient></defs>' % (NAVY_L, NAVY_D),
         R(0, 0, w, h, 'url(#g)'),
         R(68, 64, w - 136, h - 128, 'none', '#4d7f97', 2)]
    o.append(T(w / 2, 180, 'AL-HASAN HOLDING GROUP · CORPORATE ENGLISH PROGRAMME', 26, ORANGE_L, bold=True))
    o.append(T(w / 2, 318, 'BOOK TWO', 34, WHITE, bold=True))
    o.append(L(w / 2 - 140, 218, w / 2 + 140, 218, ORANGE_L, 2))
    o.append(T(w / 2, 450, 'Al-Hasan', 96, WHITE, bold=True))
    o.append(T(w / 2, 560, 'International', 96, WHITE, bold=True))
    o.append(T(w / 2, 660, 'English for Trade, Industry & Global Partnerships', 38, ORANGE_L, bold=True))
    o.append(T(w / 2, 718, 'Import · Distribution · Industry · Logistics · Finance', 28, '#c8d6dd'))
    xs = [440, 672, 880, 1090]
    for nm, x in zip(['container', 'ship', 'shelf', 'shop'], xs):
        o.append(icon(nm, x, 1030, 1.5))
    o.append(icon('globe', w / 2 - 42, 1260, 1.5))
    import math
    for k in range(5):
        scx, scy, rout, rin = w / 2 - 176 + k * 88, 1400, 30, 13
        pts = []
        for j in range(10):
            rr_ = rout if j % 2 == 0 else rin
            a = -math.pi / 2 + j * math.pi / 5
            pts.append('%.1f,%.1f' % (scx + rr_ * math.cos(a), scy + rr_ * math.sin(a)))
        o.append('<polygon points="%s" fill="%s"/>' % (' '.join(pts), ORANGE))
    o.append(R(w / 2 - 320, 1540, 640, 190, '#1d5069', ORANGE_L, 2, 12))
    o.append(T(w / 2, 1610, 'CEFR B1 · Complete Course', 40, WHITE, bold=True))
    o.append(T(w / 2, 1662, 'Units 1–10 · The Full Programme', 32, ORANGE_L, bold=True))
    o.append(T(w / 2, 1706, 'Full Answer Keys · Glossary · 223 illustrations', 26, '#c8d6dd'))
    o.append(T(w / 2, 1900, 'Solid Values… Unlimited Ambitions', 36, ORANGE_L, bold=True))
    o.append(T(w / 2, 1952, 'Damascus · Syria · Student’s Book 2', 26, '#c8d6dd'))
    return render(''.join(o), w, h, NAVY_D)


def cover_back():
    w, h = 1488, 2104
    o = ['<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">'
         '<stop offset="0" stop-color="%s"/><stop offset="1" stop-color="%s"/>'
         '</linearGradient></defs>' % (NAVY_D, NAVY_L),
         R(0, 0, w, h, 'url(#g)'),
         R(68, 64, w - 136, h - 128, 'none', '#4d7f97', 2)]
    o.append(T(w / 2, 220, 'AL-HASAN INTERNATIONAL · BOOK 2', 26, ORANGE_L, bold=True))
    o.append(T(w / 2, 330, 'What this book does', 46, WHITE, bold=True))
    lines = [
        'Book 2 follows the real work of the Group: buying abroad,',
        'bringing goods into Syria, and selling them at home.',
        '',
        'Ten units. Every unit carries two strands — the import side,',
        'facing a supplier abroad, and the market side, facing Syria —',
        'each with its own reading, its own dialogue and its own case.',
    ]
    for k, ln in enumerate(lines):
        o.append(T(w / 2, 420 + k * 48, ln, 28, '#c8d6dd'))
    o.append(R(140, 770, w - 280, 540, '#1d5069', ORANGE_L, 2, 12))
    o.append(T(w / 2, 840, 'In this book', 34, ORANGE_L, bold=True))
    rows = [('Units', '10, each in eleven parts'),
            ('Level', 'CEFR B1 (lower)'),
            ('Grammar', 'present perfect · modals · conditionals · passive'),
            ('', 'relative clauses · reported speech · past continuous'),
            ('Skills', 'reading · listening · speaking · writing'),
            ('Tracks', 'Trade · Finance · Logistics · Admin'),
            ('Extras', 'full answer keys · glossary · irregular verbs')]
    for k, (a, b) in enumerate(rows):
        o.append(T(430, 905 + k * 54, a, 25, ORANGE_L, bold=True, anchor='end'))
        o.append(T(470, 905 + k * 54, b, 25, WHITE, anchor='start'))
    for nm, x in zip(['ship', 'container', 'shelf', 'shop', 'money'],
                     [430, 580, 730, 880, 1030]):
        o.append(icon(nm, x, 1420, 1.2))
    o.append(T(w / 2, 1760, 'Solid Values… Unlimited Ambitions', 36, ORANGE_L, bold=True))
    o.append(T(w / 2, 1830, 'Al-Hasan Holding Group', 30, WHITE, bold=True))
    o.append(T(w / 2, 1878, 'Free Zone, Baramkeh · Damascus · Syria', 24, '#c8d6dd'))
    o.append(T(w / 2, 1950, 'Student’s Book 2 · CEFR B1', 24, ORANGE_L))
    return render(''.join(o), w, h, NAVY_D)


# ------------------------------------------------- 2. scene banner (1180x620)
def scene_banner(title, people, bubble_lines, card_title=None, card_items=None,
                 quote=None, h=620):
    o = ['<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">'
         '<stop offset="0" stop-color="%s"/><stop offset="1" stop-color="%s"/>'
         '</linearGradient></defs>' % (NAVY_L, NAVY_D),
         R(0, 0, W, h, 'url(#g)'),
         R(0, h - 100, W, 100, ORANGE)]
    o.append(T(W / 2, 60, title.upper(), 32, ORANGE_L, bold=True))
    ground = h - 60
    px0 = 215
    for k, (kind, shirt) in enumerate(people):
        o.append(person(px0 + k * 135, ground, shirt, kind, 0.95))
    if bubble_lines:
        bh0 = 22 + len(bubble_lines) * 27
        by = ground - 180 - bh0
        b, bh = _bubble(110, by, 430, bubble_lines, 'left', 20, WHITE, ORANGE_L, tail_x=px0 - 20)
        o.append(b)
    if card_title:
        o.append(R(640, 120, 460, 60 + 34 * len(card_items), WHITE, ORANGE_L, 3, 10))
        o.append(R(640, 120, 460, 46, NAVY, rx=10))
        o.append(T(870, 152, card_title, 20, WHITE, bold=True))
        for k, it in enumerate(card_items):
            o.append(T(666, 198 + k * 34, '·  ' + it, 19, NAVY, anchor='start'))
    if quote:
        o.append(R(640, h - 230, 460, 62, '#1d5069', ORANGE_L, 2, 10))
        o.append(T(870, h - 190, quote, 20, ORANGE_L, bold=True))
    return render(''.join(o), W, h, NAVY_D)


# ---------------------------------------------------- 3. end card (1180x600)
def end_card(n, title, cando, nxt):
    h = 600
    o = ['<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">'
         '<stop offset="0" stop-color="%s"/><stop offset="1" stop-color="%s"/>'
         '</linearGradient></defs>' % (NAVY_L, NAVY_D),
         R(0, 0, W, h, 'url(#g)'),
         R(0, 362, W, 12, '#8a6a46')]
    o.append(person(W / 2, 372, BLUE, 'm', 1.0, arm='up'))
    o.append(T(W / 2, 436, 'END OF UNIT %d' % n, 30, ORANGE_L, bold=True))
    o.append(T(W / 2, 486, title, 36, WHITE, bold=True))
    o.append(T(W / 2, 528, cando, 24, '#c8d6dd'))
    o.append(T(W / 2, 572, nxt, 26, ORANGE_L, bold=True))
    return render(''.join(o), W, h, NAVY_D)


# --------------------------------------------------- 4. team strip (1180x430)
def team_strip(title, people):
    """people: list of (name, role, kind, shirt)"""
    h = 430
    o = [_title(title, 40, 30)]
    n = len(people)
    gap = 10
    cw = (W - 24 - gap * (n - 1)) / n
    for k, (name, role, kind, shirt) in enumerate(people):
        x = 12 + k * (cw + gap)
        o.append(R(x, 58, cw, 320, WHITE, BORDER, 2, 10))
        o.append(person(x + cw / 2, 310, shirt, kind, 0.80))
        o.append(T(x + cw / 2, 340, name, 19, NAVY, bold=True))
        o.append(T(x + cw / 2, 364, role, 15, BLUE))
    return render(''.join(o), W, h)


# ----------------------------------------------- 5. dialogue scene (1180x460)
def dialogue_scene(left, left_lines, right, right_lines, h=460):
    o = [R(0, h - 110, W, 110, ORANGE)]
    b1, _ = _bubble(260, 40, 440, left_lines, 'left', 19)
    b2, _ = _bubble(620, 160, 470, right_lines, 'right', 19)
    o += [b1, b2]
    o.append(person(250, h - 18, left[1], left[0], 1.0))
    o.append(person(930, h - 18, right[1], right[0], 1.0))
    return render(''.join(o), W, h)


# -------------------------------------------------- 6. half scene (560x460)
def half_scene(kind, shirt, lines):
    w, h = 560, 460
    o = [R(0, h - 110, w, 110, ORANGE)]
    bh = 22 + len(lines) * 27
    o.append(R(40, 40, 480, bh, WHITE, BLUE, 2.5, 10))
    for k, ln in enumerate(lines):
        o.append(T(280, 72 + k * 27, ln, 19, NAVY))
    o.append('<path d="M%g %g l%g %g l0 %g z" fill="%s" stroke="%s" stroke-width="2"/>'
             % (120, 40 + bh, 26, 26, -26, WHITE, BLUE))
    o.append(person(165, h - 18, shirt, kind, 0.95))
    return render(''.join(o), w, h)


# -------------------------------------------------- 7. grammar card (1180x320)
def grammar_card(title, boxes, footnote=None, h=320):
    """boxes: list of (header, form, example); up to 3-4."""
    o = [_title(title, 42, 30)]
    n = len(boxes)
    gap = 22
    bw = (W - 48 - gap * (n - 1)) / n
    colors = [NAVY, ORANGE, BLUE, GREEN_D]
    for k, (hd, form, ex) in enumerate(boxes):
        x = 24 + k * (bw + gap)
        col = colors[k % 4]
        o.append(R(x, 72, bw, 170, WHITE, col, 3, 10))
        o.append(R(x, 72, bw, 46, col, rx=10))
        o.append(R(x, 104, bw, 14, col))
        o.append(T(x + bw / 2, 103, hd, 19, WHITE, bold=True))
        o.append(T(x + bw / 2, 165, form, 32, col, bold=True))
        for j, ln in enumerate(wrap(ex, bw - 24, 17)[:2]):
            o.append(T(x + bw / 2, 200 + j * 24, ln, 17, NAVY))
    if footnote:
        o.append(T(W / 2, 280, footnote, 18, BLUE, bold=True))
    return render(''.join(o), W, h)


# --------------------------------------------------- 8. icon row (1180x300)
def icon_row(title, panel_title, items, h=300):
    """items: list of (icon_name, label)"""
    o = [_title(title, 44, 30)]
    n = len(items)
    pw = min(W - 120, 150 * n + 60)
    px = (W - pw) / 2
    o.append(R(px, 86, pw, 160, WHITE, ORANGE_L, 3, 10))
    if panel_title:
        o.append(R(px, 86, pw, 42, NAVY, rx=10))
        o.append(R(px, 112, pw, 16, NAVY))
        o.append(T(W / 2, 115, panel_title, 19, WHITE, bold=True))
    top = 142 if panel_title else 112
    cw = pw / n
    for k, (nm, lab) in enumerate(items):
        cx = px + cw * (k + .5)
        o.append(icon(nm, cx - 28, top, 1.0))
        o.append(T(cx, top + 78, lab, 17, NAVY, bold=True))
    return render(''.join(o), W, h)


# ------------------------------------------------- 9. do's and don'ts (1180x300)
def dos_donts(title, dos, donts, h=300):
    o = [_title(title, 40, 30)]
    bh = 48 + max(len(dos), len(donts)) * 30
    for x, col, head, items in ((78, GREEN_D, 'DO', dos), (618, RED, "DON'T", donts)):
        o.append(R(x, 66, 484, bh, WHITE, col, 2.5, 10))
        o.append(T(x + 242, 104, head, 22, col, bold=True))
        for k, it in enumerate(items):
            o.append(T(x + 242, 140 + k * 30, it, 18, NAVY))
    return render(''.join(o), W, h)


# ------------------------------------------------ 10. process strip (1180x300)
def process_strip(title, steps, h=300):
    o = [_title(title, 46, 30)]
    n = len(steps)
    span = W - 240
    for k in range(n - 1):
        x1 = 120 + span * k / (n - 1)
        x2 = 120 + span * (k + 1) / (n - 1)
        o.append(L(x1 + 40, 160, x2 - 40, 160, ORANGE, 4))
    for k, s in enumerate(steps):
        cx = 120 + span * k / (n - 1)
        o.append(C(cx, 160, 38, NAVY))
        o.append(T(cx, 172, str(k + 1), 30, WHITE, bold=True))
        for j, ln in enumerate(wrap(s, 180, 17, True)[:2]):
            o.append(T(cx, 218 + j * 24, ln, 17, NAVY, bold=True))
    return render(''.join(o), W, h)


# -------------------------------------------------- 11. document card (1180x..)
def doc_card(title, card_title, rows, h=None, accent=ORANGE):
    h = h or (150 + 34 * len(rows))
    o = [_title(title, 42, 30)]
    cw, cx = 620, (W - 620) / 2
    ch = 60 + 34 * len(rows) + 24
    o.append(R(cx, 74, cw, ch, WHITE, accent, 3, 10))
    o.append(R(cx, 74, cw, 48, accent, rx=10))
    o.append(R(cx, 104, cw, 18, accent))
    o.append(T(W / 2, 106, card_title.upper(), 21, WHITE, bold=True))
    for k, (a, b) in enumerate(rows):
        y = 152 + k * 34
        o.append(T(cx + 40, y, a, 18, NAVY, bold=True, anchor='start'))
        o.append(T(cx + cw - 40, y, b, 18, BLUE, anchor='end'))
        o.append(L(cx + 40, y + 10, cx + cw - 40, y + 10, '#dde6ea', 1.5))
    return render(''.join(o), W, h)


# -------------------------------------------------- 12. split panel (1180x..)
def split_panel(title, left_head, left_items, right_head, right_items, h=None):
    rows = max(len(left_items), len(right_items))
    h = h or (120 + 30 * rows + 40)
    bh = 50 + rows * 30
    o = [_title(title, 40, 30)]
    for x, col, head, items in ((60, BLUE, left_head, left_items),
                                (620, ORANGE, right_head, right_items)):
        o.append(R(x, 64, 500, bh, WHITE, col, 2.5, 10))
        o.append(R(x, 64, 500, 40, col, rx=10))
        o.append(R(x, 90, 500, 14, col))
        o.append(T(x + 250, 92, head, 18, WHITE, bold=True))
        for k, it in enumerate(items):
            o.append(T(x + 250, 134 + k * 30, it, 18, NAVY))
    o.append(L(W / 2, 60, W / 2, 64 + bh, '#d8d2c4', 2))
    return render(''.join(o), W, h)


# ------------------------------------------- 13. label panel: words/terms grid
def label_panel(title, items, cols=4, h=None):
    """items: list of (term, gloss)"""
    rows = (len(items) + cols - 1) // cols
    h = h or (90 + rows * 86 + 20)
    o = [_title(title, 42, 30)]
    cw = (W - 80) / cols
    for k, (term, gloss) in enumerate(items):
        r, c = divmod(k, cols)
        x = 40 + c * cw
        y = 70 + r * 86
        o.append(R(x + 6, y, cw - 12, 72, WHITE, BORDER, 2, 8))
        o.append(T(x + cw / 2, y + 30, term, 19, NAVY, bold=True))
        for j, ln in enumerate(wrap(gloss, cw - 30, 15)[:1]):
            o.append(T(x + cw / 2, y + 54, ln, 15, BLUE))
    return render(''.join(o), W, h)


# ------------------------------------- 14. companies strip (grouped subsidiaries)
def companies_strip(title, groups, h=None):
    """groups: list of (group_label, color, [company names])"""
    h = h or 300
    o = [_title(title, 40, 30)]
    n = len(groups)
    gap = 16
    gw = (W - 48 - gap * (n - 1)) / n
    maxc = max(len(g[2]) for g in groups)
    bh = 56 + maxc * 32
    for k, (lab, col, names) in enumerate(groups):
        x = 24 + k * (gw + gap)
        o.append(R(x, 66, gw, bh, WHITE, col, 2.5, 10))
        o.append(R(x, 66, gw, 40, col, rx=10))
        o.append(R(x, 92, gw, 14, col))
        o.append(T(x + gw / 2, 94, lab, 18, WHITE, bold=True))
        for j, nm in enumerate(names):
            o.append(T(x + gw / 2, 134 + j * 32, nm, 17, NAVY, bold=True))
    return render(''.join(o), W, h)


# --------------------------------------------- 15. map / route strip
def route_strip(title, stops, h=300):
    """stops: list of (icon_name, label)"""
    o = [_title(title, 44, 30)]
    n = len(stops)
    span = W - 220
    for k in range(n - 1):
        x1 = 110 + span * k / (n - 1)
        x2 = 110 + span * (k + 1) / (n - 1)
        o.append('<path d="M%g %g L%g %g" stroke="%s" stroke-width="4" stroke-dasharray="10 8"/>'
                 % (x1 + 46, 160, x2 - 46, 160, ORANGE))
        o.append('<path d="M%g %g l%g %g l0 %g z" fill="%s"/>' % (x2 - 40, 160, -14, -8, 16, ORANGE))
    for k, (nm, lab) in enumerate(stops):
        cx = 110 + span * k / (n - 1)
        o.append(C(cx, 160, 42, WHITE))
        o.append(C(cx, 160, 42, 'none', NAVY, 2.5))
        o.append(icon(nm, cx - 28, 132, 1.0))
        for j, ln in enumerate(wrap(lab, 190, 17, True)[:2]):
            o.append(T(cx, 228 + j * 24, ln, 17, NAVY, bold=True))
    return render(''.join(o), W, h)
