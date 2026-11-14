"""Figure families for the TOEFL 2026 B1 course. Each returns (png_bytes, w, h)."""
from art import (render, T, R, C, L, P, person, head, icon, wrap, tw,
                 fit, fit_block, TFIT, TBLOCK, shrink_to,
                 PAPER, SOFT, CREAM, INDIGO, INDIGO_D, PERI, PERI_L, BLUE, AMBER,
                 TEAL, PLUM, GREEN, RED, INK, GREY, GREY_L, RULE, SKIN, SKIN_D, SKILL)

W = 900              # full-width figure
HW = 440             # half-width figure


def _rule(y, x0=0, x1=W, col=RULE, sw=2):
    return L(x0, y, x1, y, col, sw)


# ---------------------------------------------------------------- covers ----
def cover_front(volume, units, strap, level='B1'):
    h = 1270
    g = [R(0, 0, W, h, INDIGO)]
    g.append(R(0, 0, W, 300, INDIGO_D))
    # four bars in the skill hues, clear of the title
    for i, col in enumerate((BLUE, AMBER, TEAL, PLUM)):
        g.append(R(W / 2 - 134 + i * 70, 76, 54, 10, col, rx=5))
    g.append(T(W / 2, 200, 'TOEFL iBT®', 52, PAPER, bold=True))
    g.append(T(W / 2, 252, 'PREPARATION COURSE', 30, PERI_L, bold=True))
    g.append(T(W / 2, 390, 'for the 2026 test', 36, PAPER))
    g.append(R(W / 2 - 150, 424, 300, 4, PERI))
    g.append(T(W / 2, 500, 'VOLUME %s' % volume, 44, PAPER, bold=True))
    g.append(T(W / 2, 546, units, 26, PERI_L))
    # the four skills as a row of plates
    bx, bw, gap = 70, 180, 16
    for i, (name, col, ic) in enumerate([('READING', BLUE, 'book'), ('LISTENING', AMBER, 'headphones'),
                                         ('SPEAKING', TEAL, 'mic'), ('WRITING', PLUM, 'pen')]):
        x = bx + i * (bw + gap)
        g.append(R(x, 620, bw, 190, col, rx=14))
        g.append(C(x + bw / 2, 706, 56, PAPER))
        g.append(icon(ic, x + bw / 2 - 34, 672, 1.2))
        g.append(T(x + bw / 2, 790, name, 20, PAPER, bold=True))
    g.append(R(70, 860, W - 140, 2, '#4a4f90'))
    for k, line in enumerate(strap):
        g.append(T(W / 2, 910 + k * 36, line, 23, PERI_L))
    g.append(T(W / 2, 1110, 'CEFR %s' % level, 30, PAPER, bold=True))
    g.append(T(W / 2, 1150, 'Student’s Book', 24, PERI_L))
    g.append(T(W / 2, 1222, 'Three cycles a skill · every 2026 task type, three times a unit', 18, '#9a9edd'))
    return render(''.join(g), W, h, INDIGO)


def cover_back(volume, blurb, bullets, contents):
    h = 1270
    g = [R(0, 0, W, h, SOFT)]
    g.append(R(0, 0, W, 140, INDIGO))
    g.append(T(W / 2, 72, 'TOEFL iBT® Preparation Course · 2026', 28, PAPER, bold=True))
    g.append(T(W / 2, 110, 'Volume %s' % volume, 22, PERI_L))
    y = 200
    for line in blurb:
        g.append(T(60, y, line, 21, INK, anchor='start'))
        y += 32
    y += 20
    for b in bullets:
        g.append(C(72, y - 6, 5, PERI))
        g.append(T(92, y, b, 20, INK, anchor='start'))
        y += 32
    y += 18
    g.append(R(56, y, W - 112, 2, RULE)); y += 40
    g.append(T(60, y, 'In this volume', 24, INDIGO, bold=True, anchor='start')); y += 34
    for i, c in enumerate(contents):
        col = i % 2
        row = i // 2
        g.append(T(70 + col * 410, y + row * 30, c, 18, INK, anchor='start'))
    y += ((len(contents) + 1) // 2) * 30 + 30
    g.append(R(56, y, W - 112, 2, RULE)); y += 44
    for i, (name, col, ic) in enumerate([('Reading', BLUE, 'book'), ('Listening', AMBER, 'headphones'),
                                         ('Speaking', TEAL, 'mic'), ('Writing', PLUM, 'pen')]):
        x = 70 + i * 196
        g.append(R(x, y, 176, 96, PAPER, rx=12))
        g.append(R(x, y, 176, 6, col, rx=3))
        g.append(icon(ic, x + 18, y + 26, 0.8))
        g.append(T(x + 110, y + 60, name, 19, INK, bold=True))
    g.append(R(0, h - 120, W, 120, INDIGO))
    g.append(T(W / 2, h - 68, 'Aligned to TOEFL iBT tests from 21 January 2026', 20, PAPER))
    g.append(T(W / 2, h - 34, 'Audio and video available separately', 17, '#9a9edd'))
    return render(''.join(g), W, h, SOFT)


# ------------------------------------------------------------ unit opener ----
def unit_opener(n, title, subtopics, icons, accent=INDIGO):
    bw_ = (W - 100) / 3.0
    nmax = max(len(fit(sub, bw_ - 70, 18)) for sub in subtopics)
    card_h = max(112, 56 + nmax * 24)
    h = int(max(330, 180 + card_h + 38))
    card_bottom = [0]
    g = [R(0, 0, W, h, SOFT)]
    g.append(R(0, 0, W, 150, accent))
    g.append(T(40, 72, 'UNIT %d' % n, 26, PERI_L, bold=True, anchor='start'))
    g.append(TFIT(40, 118, title, 40, (W - 70 - 2 * 86 - 20) - 40, PAPER, bold=True, floor=0.6))
    for i, ic in enumerate(icons[:3]):
        g.append(icon(ic, W - 70 - (2 - i) * 86, 44, 1.1))
    bw = (W - 100) / 3.0
    for i, (sub, lab) in enumerate(zip(subtopics, ('A', 'B', 'C'))):
        x = 40 + i * (bw + 10)
        g.append(R(x, 180, bw, card_h, PAPER, rx=12))
        g.append(C(x + 28, 210, 15, accent))
        g.append(T(x + 28, 217, lab, 17, PAPER, bold=True))
        lns = fit(sub, bw - 70, 18)
        blk, _, _ = TBLOCK(x + 54, 216, None, 18, bw - 70, 24, INK, lines=lns)
        g.append(blk)
        need = 216 + len(lns) * 24 + 10
        if need > card_bottom[0]:
            card_bottom[0] = need
    return render(''.join(g), W, h, SOFT)


def skill_bar(skill, cycle, label, task):
    """A narrow coloured strip that opens each skill cycle."""
    col = SKILL[skill]
    h = 108
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(0, 0, 10, h, col))
    g.append(R(10, 0, W - 10, h, SOFT))
    ic = {'reading': 'book', 'listening': 'headphones', 'speaking': 'mic', 'writing': 'pen'}[skill]
    g.append(icon(ic, 32, 26, 0.95))
    chip_w = tw(task, 18, True) + 40
    chip_x = W - 36 - chip_w
    g.append(T(110, 44, '%s · CYCLE %d' % (skill.upper(), cycle), 19, col, bold=True, anchor='start'))
    g.append(TFIT(110, 76, label, 25, chip_x - 110 - 24, INK, bold=True))
    g.append(R(chip_x, 34, chip_w, 40, col, rx=20))
    g.append(T(chip_x + chip_w / 2, 60, task, 18, PAPER, bold=True))
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------- daily-life document cards --
def email_card(to, frm, date, subject, lines, accent=AMBER):
    """Header values shrink to their field; the body wraps and the card grows."""
    HVX, HVW = 180, W - 230        # header value field
    BX, BW = 40, W - 90            # body panel
    TXW = BW - 36                  # body text column, clear of the scroll rail
    SZ, LEAD = 19, 27
    wrapped = [fit(ln_, TXW, SZ) for ln_ in lines]
    nlines = sum(len(l) for l in wrapped)
    bh = 34 + nlines * LEAD + 28
    h = 32 + 4 * 40 + bh + 24
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, accent, rx=6))
    g.append(R(26, 26, W - 52, h - 52, PAPER, rx=4))
    y = 40
    for lab, val in (('To:', to), ('From:', frm), ('Date:', date), ('Subject:', subject)):
        g.append(R(40, y, 130, 32, PAPER, RULE, 2, 3))
        g.append(T(50, y + 22, lab, 19, INK, anchor='start'))
        g.append(R(HVX, y, HVW, 32, PAPER, RULE, 2, 3))
        g.append(TFIT(HVX + 12, y + 22, val, 19, HVW - 24, INK, floor=0.72))
        y += 40
    y += 6
    g.append(R(BX, y, BW, bh - 10, PAPER, RULE, 2, 3))
    g.append(R(W - 68, y, 18, bh - 10, SOFT, RULE, 1))
    g.append(P('M%g %g l%g %g l%g 0 z' % (W - 59, y + 8, -6, 8, 12), GREY))
    g.append(P('M%g %g l%g %g l%g 0 z' % (W - 59, y + bh - 18, -6, -8, 12), GREY))
    ty = y + 32
    for lns in wrapped:
        blk, _, _ = TBLOCK(58, ty, None, SZ, TXW, LEAD, INK, lines=lns)
        g.append(blk)
        ty += len(lns) * LEAD
    return render(''.join(g), W, int(h), PAPER)


def notice_card(heading, lines, accent=TEAL, kind='notice'):
    """A notice whose body wraps and whose card grows to hold it."""
    tag = {'notice': 'NOTICE', 'web': 'WEB PAGE', 'ad': 'ADVERTISEMENT',
           'listing': 'LISTING', 'page': 'PAGE'}.get(kind, 'NOTICE')
    RIGHT = W - 44
    # heading shares the bar with the tag, so it gets what is left of it
    head_w = RIGHT - 40 - (tw(tag, 16, True) + 28)
    LEAD = 27
    laid = []
    for ln_ in lines:
        if ln_.startswith('* '):
            laid.append(('b', fit(ln_[2:], RIGHT - 70, 19), 19, 70))
        elif ln_.startswith('# '):
            laid.append(('h', fit(ln_[2:], RIGHT - 40, 21, True), 21, 40))
        else:
            laid.append(('p', fit(ln_, RIGHT - 40, 19), 19, 40))
    body = sum(len(l[1]) * LEAD + (6 if l[0] == 'h' else 0) for l in laid)
    h = 118 + body + 34
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, PAPER, RULE, 2, 8))
    g.append(R(16, 16, W - 32, 62, accent, rx=8))
    g.append(R(16, 60, W - 32, 18, accent))
    g.append(TFIT(40, 56, heading, 24, head_w, PAPER, bold=True))
    g.append(T(RIGHT, 54, tag, 16, PAPER, bold=True, anchor='end'))
    y = 112
    for kind_, lns, sz, x in laid:
        if kind_ == 'h':
            y += 6
        if kind_ == 'b':
            g.append(C(52, y - 6, 4, accent))
        blk, _, _ = TBLOCK(x, y, None, sz, RIGHT - x, LEAD, INK,
                           bold=(kind_ == 'h'), lines=lns)
        g.append(blk)
        y += len(lns) * LEAD
    return render(''.join(g), W, int(h), PAPER)


def social_card(name, handle, lines, likes='128', kind='w'):
    TXW, LEAD = W - 96, 29
    wrapped = [fit(ln_, TXW, 19) for ln_ in lines]
    nl = sum(len(l) for l in wrapped)
    h = 120 + nl * LEAD + 56
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, SOFT, RULE, 2, 10))
    g.append(head(70, 76, 30, PERI, kind))
    g.append(TFIT(118, 68, name, 22, W - 160 - 118, INK, bold=True))
    g.append(TFIT(118, 96, handle, 18, W - 160 - 118, GREY))
    y = 148
    for lns in wrapped:
        blk, _, _ = TBLOCK(48, y, None, 19, TXW, LEAD, INK, lines=lns)
        g.append(blk)
        y += len(lns) * LEAD
    y += 12
    g.append(L(48, y, W - 48, y, RULE, 2))
    g.append(T(56, y + 32, '♡  ' + likes + '      ↻  34      ✉  12', 18, GREY, anchor='start'))
    return render(''.join(g), W, h, PAPER)


# --------------------------------------------------------- listening scenes --
def convo_scene(caption, a=('m', BLUE), b=('w', AMBER), place='campus'):
    h = 340
    g = [R(0, 0, W, h, SOFT)]
    g.append(R(0, 250, W, 90, '#e7ebf6'))
    # a suggestion of a building behind
    g.append(R(60, 70, 180, 180, '#dde3f2', rx=6))
    for r_ in range(3):
        for c_ in range(3):
            g.append(R(82 + c_ * 52, 96 + r_ * 56, 34, 34, SOFT, rx=3))
    g.append(R(W - 250, 110, 190, 140, '#dde3f2', rx=6))
    g.append(R(W - 230, 140, 150, 90, SOFT, rx=4))
    g.append(person(360, 300, a[1], a[0], 0.95, arm='right'))
    g.append(person(560, 300, b[1], b[0], 0.95))
    # speech bubbles
    g.append(R(210, 44, 250, 64, PAPER, RULE, 2, 16))
    g.append(P('M%g %g l%g %g l%g 0 z' % (300, 108, 10, 20, 24), PAPER))
    g.append(T(335, 84, '…?', 30, GREY))
    g.append(R(500, 60, 250, 60, PAPER, RULE, 2, 16))
    g.append(P('M%g %g l%g %g l%g 0 z' % (590, 120, -8, 18, 22), PAPER))
    g.append(T(625, 98, '…', 30, GREY))
    g.append(R(0, h - 44, W, 44, AMBER))
    g.append(TFIT(W / 2, h - 14, caption, 20, W - 80, PAPER, bold=True, anchor='middle'))
    return render(''.join(g), W, h, SOFT)


def talk_scene(caption, board_lines, kind='w', shirt=TEAL):
    """The board wraps its lines and grows; nothing is dropped (it used to
    keep only the first four lines, and overrun the board with those)."""
    BX, BY, BW = 220, 40, 520
    PAD, SZ, LEAD = 26, 22, 34
    TXW = BW - 2 * PAD - 24
    lns = []
    for ln_ in board_lines:
        lns.extend(fit(ln_, TXW, SZ))
    board_h = max(200, 52 + len(lns) * LEAD)
    h = max(340, BY + board_h + 110)
    g = [R(0, 0, W, h, SOFT)]
    g.append(R(0, h - 90, W, 90, '#e7ebf6'))
    g.append(R(BX, BY, BW, board_h, '#2c3a33', rx=6))
    g.append(R(BX + 12, BY + 12, BW - 24, board_h - 24, '#33443b', rx=4))
    ty = BY + 44
    blk, _, _ = TBLOCK(BX + PAD + 12, ty, None, SZ, TXW, LEAD, '#d8e6dd', lines=lns)
    g.append(blk)
    g.append(person(130, h - 40, shirt, kind, 0.95, arm='up'))
    g.append(R(0, h - 44, W, 44, AMBER))
    g.append(TFIT(W / 2, h - 14, caption, 20, W - 80, PAPER, bold=True, anchor='middle'))
    return render(''.join(g), W, int(h), SOFT)


def announce_scene(caption, lines):
    """Wraps the announcement and grows the card; the old version kept only
    the first three lines and let those run past the card edge."""
    CX, CW = 215, W - 255
    PAD, SZ, LEAD = 25, 19, 27
    lns = []
    for ln_ in lines:
        lns.extend(fit(ln_, CW - 2 * PAD, SZ))
    card_h = max(190, 100 + len(lns) * LEAD)
    h = max(300, 40 + card_h + 70)
    g = [R(0, 0, W, h, SOFT)]
    g.append(R(40, 40, 150, min(190, card_h), PAPER, RULE, 2, 10))
    g.append(icon('headphones', 72, 86, 1.6))
    g.append(T(115, 206, 'AUDIO', 18, AMBER, bold=True))
    g.append(R(CX, 40, CW, card_h, PAPER, RULE, 2, 10))
    g.append(R(CX, 40, CW, 48, AMBER, rx=10))
    g.append(R(CX, 72, CW, 16, AMBER))
    g.append(T(CX + 25, 72, 'ANNOUNCEMENT', 21, PAPER, bold=True, anchor='start'))
    blk, _, _ = TBLOCK(CX + PAD, 128, None, SZ, CW - 2 * PAD, LEAD, INK, lines=lns)
    g.append(blk)
    g.append(R(0, h - 44, W, 44, AMBER))
    g.append(TFIT(W / 2, h - 14, caption, 20, W - 80, PAPER, bold=True, anchor='middle'))
    return render(''.join(g), W, int(h), SOFT)


# ----------------------------------------------------------- speaking panel --
def interview_panel(theme, questions):
    """Each question sits in its own card. The card grows to the question, and
    the panel grows to the cards, so no question is ever cut off."""
    BX, BW = 196, W - 240          # question card
    PADX, SZ, LEAD = 16, 19, 26
    wrapped = [fit(q, BW - 2 * PADX, SZ) for q in questions]
    rows = [max(44, 22 + len(ln) * LEAD) for ln in wrapped]
    top = 104
    h = top + sum(r + 12 for r in rows) + 46
    h = max(h, 266)                # keep room for the interviewer roundel
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, SOFT, RULE, 2, 10))
    g.append(R(16, 16, W - 32, 58, TEAL, rx=10))
    g.append(R(16, 52, W - 32, 22, TEAL))
    g.append(T(44, 56, 'TAKE AN INTERVIEW', 22, PAPER, bold=True, anchor='start'))
    g.append(T(W - 44, 54, 'no preparation time', 17, '#bfe0d6', anchor='end'))
    g.append(head(84, 150, 42, TEAL, 'm'))
    g.append(T(84, 216, 'Interviewer', 16, GREY))
    y = top
    for k, lns in enumerate(wrapped):
        rh = rows[k]
        g.append(R(BX, y, BW, rh, PAPER, RULE, 2, 8))
        g.append(C(170, y + rh / 2.0, 14, TEAL))
        g.append(T(170, y + rh / 2.0 + 6, str(k + 1), 16, PAPER, bold=True))
        ty = y + (rh - (len(lns) - 1) * LEAD) / 2.0 + 6
        blk, _, _ = TBLOCK(BX + PADX, ty, None, SZ, BW - 2 * PADX, LEAD, INK, lines=lns)
        g.append(blk)
        y += rh + 12
    return render(''.join(g), W, int(h), PAPER)


def repeat_strip(sentences):
    """Numbered sentences, each wrapped to the space before the mic icon."""
    TX, SZ, LEAD = 82, 19, 26
    AVAIL = (W - 118) - TX        # stop clear of the mic
    wrapped = [fit(s, AVAIL, SZ) for s in sentences]
    rows = [max(42, len(ln) * LEAD + 16) for ln in wrapped]
    top = 96
    h = top + sum(rows) + 30
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, PAPER, RULE, 2, 10))
    g.append(R(16, 16, W - 32, 54, TEAL, rx=10))
    g.append(R(16, 50, W - 32, 20, TEAL))
    g.append(T(44, 52, 'LISTEN AND REPEAT', 22, PAPER, bold=True, anchor='start'))
    g.append(T(W - 44, 50, 'repeat once, no preparation', 17, '#bfe0d6', anchor='end'))
    y = top
    for k, lns in enumerate(wrapped):
        rh = rows[k]
        ty = y + (rh - (len(lns) - 1) * LEAD) / 2.0 + 6
        g.append(T(48, ty, '%d' % (k + 1), 18, TEAL, bold=True, anchor='start'))
        blk, _, _ = TBLOCK(TX, ty, None, SZ, AVAIL, LEAD, INK, lines=lns)
        g.append(blk)
        g.append(icon('mic', W - 110, ty - 26, 0.6))
        if k < len(wrapped) - 1:
            g.append(L(48, y + rh - 4, W - 48, y + rh - 4, RULE, 1))
        y += rh
    return render(''.join(g), W, int(h), PAPER)


# ------------------------------------------------------------ writing panel --
def discussion_panel(prof, question, posts):
    qlines = wrap(question, W - 210, 19)
    wrapped = [(n, k, wrap(t, W - 230, 18)) for n, k, t in posts]
    # lay the panel out first, then make it exactly as tall as the content needs
    y0 = 140 + len(qlines) * 26 + 18
    y = y0
    for _, _, lns in wrapped:
        y += 28 + len(lns) * 26 + 22
    h = int(y + 28)
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, SOFT, RULE, 2, 10))
    g.append(R(16, 16, W - 32, 54, PLUM, rx=10))
    g.append(R(16, 50, W - 32, 20, PLUM))
    g.append(T(44, 52, 'WRITE FOR AN ACADEMIC DISCUSSION', 22, PAPER, bold=True, anchor='start'))
    g.append(T(W - 44, 50, '10 minutes · 100 words minimum', 17, '#dcc7e5', anchor='end'))
    g.append(head(76, 134, 34, PLUM, 'm'))
    g.append(T(126, 112, prof, 19, INK, bold=True, anchor='start'))
    y = 140
    for ln_ in qlines:
        g.append(T(126, y, ln_, 19, INK, anchor='start'))
        y += 26
    y = y0
    for name, kind, lns in wrapped:
        g.append(R(48, y - 24, W - 96, 28 + len(lns) * 26, PAPER, RULE, 2, 8))
        g.append(head(84, y + len(lns) * 13 - 10, 26, PERI, kind))
        g.append(T(126, y, name, 18, PLUM, bold=True, anchor='start'))
        for i, ln_ in enumerate(lns):
            g.append(T(126, y + 26 + i * 26, ln_, 18, INK, anchor='start'))
        y += 28 + len(lns) * 26 + 22
    return render(''.join(g), W, h, PAPER)


def build_demo(prompt, gaps, tiles):
    """Word tiles flow onto as many rows as they need. They used to be laid
    out in one row from the left, so a long set ran off the right edge."""
    PAD, SZ, LEAD = 44, 20, 27
    AVAIL = W - 32 - 2 * (PAD - 16)
    plines = fit(prompt, AVAIL, SZ, True)
    # gap boxes, wrapped
    grows, cur = [], 0
    for _ in range(gaps):
        if cur and 48 + (cur + 1) * 82 > W - 48:
            grows.append(cur); cur = 0
        cur += 1
    if cur:
        grows.append(cur)
    # tiles, wrapped
    trows, row, rw = [], [], 0.0
    for t in tiles:
        w_ = tw(t, 18) + 28
        if row and 48 + rw + w_ > W - 48:
            trows.append(row); row, rw = [], 0.0
        row.append((t, w_)); rw += w_ + 12
    if row:
        trows.append(row)
    y_prompt = 100
    y_gaps = y_prompt + (len(plines) - 1) * LEAD + 28
    y_tiles = y_gaps + len(grows) * 42 + 26
    h = int(y_tiles + len(trows) * 46 + 24)
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, SOFT, RULE, 2, 10))
    g.append(R(16, 16, W - 32, 54, PLUM, rx=10))
    g.append(R(16, 50, W - 32, 20, PLUM))
    g.append(T(44, 52, 'BUILD A SENTENCE', 22, PAPER, bold=True, anchor='start'))
    blk, _, _ = TBLOCK(PAD, y_prompt, None, SZ, AVAIL, LEAD, INK, bold=True, lines=plines)
    g.append(blk)
    y = y_gaps
    for n in grows:
        x = 48
        for _ in range(n):
            g.append(R(x, y, 74, 32, PAPER, RULE, 2, 4))
            x += 82
        y += 42
    y = y_tiles
    for row in trows:
        x = 48
        for t, w_ in row:
            g.append(R(x, y, w_, 34, PAPER, PLUM, 2, 8))
            g.append(T(x + w_ / 2, y + 23, t, 18, INK))
            x += w_ + 12
        y += 46
    return render(''.join(g), W, h, PAPER)


# -------------------------------------------------------------- front matter --
def format_map():
    h = 560
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 48, 'The 2026 TOEFL iBT at a glance', 30, INDIGO, bold=True))
    g.append(T(W / 2, 84, 'Four sections, about 1 hour 50 minutes, scored 1.0–6.0', 20, GREY))
    rows = [('READING', BLUE, 'book', '35–48 items · 2 adaptive modules',
             ['Complete the Words', 'Read in Daily Life', 'Read an Academic Passage']),
            ('LISTENING', AMBER, 'headphones', '30–40 items · 2 adaptive modules',
             ['Listen and Choose a Response', 'Conversations', 'Announcements and Academic Talks']),
            ('SPEAKING', TEAL, 'mic', '11 items · no preparation time',
             ['Listen and Repeat (7)', 'Take an Interview (4)']),
            ('WRITING', PLUM, 'pen', '12 items',
             ['Build a Sentence (10)', 'Write an Email (7 min)', 'Write for an Academic Discussion (10 min)'])]
    y = 120
    for name, col, ic, meta, tasks in rows:
        # lay the task chips out on as many lines as they need
        lines_, cur, curw = [], [], 0.0
        for t in tasks:
            w_ = tw(t, 16) + 24
            if cur and curw + w_ + 10 > W - 500:
                lines_.append(cur); cur, curw = [], 0.0
            cur.append((t, w_)); curw += w_ + 10
        if cur:
            lines_.append(cur)
        rh = max(96, 34 + len(lines_) * 38)
        g.append(R(40, y, W - 80, rh, SOFT, rx=10))
        g.append(R(40, y, 8, rh, col, rx=4))
        g.append(icon(ic, 66, y + rh / 2 - 28, 0.9))
        g.append(T(150, y + rh / 2 - 6, name, 22, col, bold=True, anchor='start'))
        g.append(T(150, y + rh / 2 + 22, meta, 17, GREY, anchor='start'))
        cy = y + (rh - len(lines_) * 38) / 2 + 8
        for row in lines_:
            x = 470
            for t, w_ in row:
                g.append(R(x, cy, w_, 30, PAPER, col, 1.5, 15))
                g.append(T(x + w_ / 2, cy + 21, t, 16, INK))
                x += w_ + 10
            cy += 38
        y += rh + 12
    return render(''.join(g), W, int(y + 16), PAPER)


def adaptive_map():
    h = 430
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 46, 'What an adaptive test does to you', 28, INDIGO, bold=True))
    g.append(T(W / 2, 80, 'Your work in Module 1 decides how hard Module 2 is', 19, GREY))
    for i, (lab, x) in enumerate((('MODULE 1', 90), ('MODULE 2', 500))):
        g.append(R(x, 120, 310, 150, SOFT, rx=12))
        g.append(R(x, 120, 310, 44, INDIGO, rx=12))
        g.append(R(x, 150, 310, 14, INDIGO))
        g.append(T(x + 155, 150, lab, 21, PAPER, bold=True))
        g.append(T(x + 155, 198, 'Next  ←→  Back', 22, INK, bold=True))
        g.append(T(x + 155, 234, 'work freely inside the module', 17, GREY))
    g.append(P('M%g %g l%g 0' % (410, 195, 76), 'none', INDIGO, 3))
    g.append(P('M%g %g l%g %g l%g %g' % (486, 195, -14, -8, 0, 16), INDIGO))
    g.append(T(448, 168, 'one way', 16, RED, bold=True))
    g.append(R(90, 300, 720, 50, '#fdeeec', rx=10))
    g.append(icon('cross', 104, 298, 0.62))
    g.append(T(170, 332, 'Once Module 2 starts you cannot go back to Module 1.', 20, INK, anchor='start'))
    g.append(R(90, 362, 720, 50, '#fdeeec', rx=10))
    g.append(icon('cross', 104, 360, 0.62))
    g.append(T(170, 394, 'In Listening you cannot go back to any question at all.', 20, INK, anchor='start'))
    return render(''.join(g), W, h, PAPER)


def gap_demo():
    h = 330
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 46, 'How Complete the Words works', 28, INDIGO, bold=True))
    g.append(T(W / 2, 80, 'The dashes count the missing letters. You write the ending, not the word.', 19, GREY))
    g.append(R(60, 110, W - 120, 86, SOFT, rx=10))
    g.append(T(84, 152, 'The railway was built in the nin------- century and it', 22, INK, anchor='start'))
    g.append(T(84, 182, 'chan--- the way people trav----.', 22, INK, anchor='start'))
    y = 240
    for i, (gap, ans) in enumerate((('nin-------', 'eteenth'), ('chan---', 'ged'), ('trav----', 'elled'))):
        x = 90 + i * 260
        g.append(R(x, y, 230, 58, PAPER, BLUE, 2, 8))
        g.append(T(x + 16, y + 36, gap, 20, GREY, anchor='start', mono=True))
        g.append(T(x + 150, y + 36, '→  ' + ans, 20, BLUE, bold=True, anchor='start'))
    g.append(T(W / 2, h - 18, 'Ten gaps, one paragraph. Answers are letter strings, never whole words.', 18, GREY))
    return render(''.join(g), W, h, PAPER)


def band_scale():
    h = 300
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 46, 'How the 2026 test is scored', 28, INDIGO, bold=True))
    g.append(T(W / 2, 80, 'Each section 1.0–6.0, reported in half bands', 19, GREY))
    bands = [('1.0', RED), ('2.0', '#d7793f'), ('3.0', AMBER), ('4.0', '#8aa33f'), ('5.0', GREEN), ('6.0', TEAL)]
    bw = (W - 140) / 6.0
    for i, (lab, col) in enumerate(bands):
        x = 70 + i * bw
        g.append(R(x, 120, bw - 8, 64, col, rx=8))
        g.append(T(x + (bw - 8) / 2, 162, lab, 26, PAPER, bold=True))
    g.append(R(70, 200, W - 140, 2, RULE))
    g.append(T(70, 238, 'This course targets a steady 3.0–4.0 — the band a confident B1', 20, INK, anchor='start'))
    g.append(T(70, 268, 'learner can reach, and the one most undergraduate entry asks for.', 20, INK, anchor='start'))
    return render(''.join(g), W, h, PAPER)


def unit_tour():
    h = 500
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 46, 'Every unit runs the same sixteen pages', 28, INDIGO, bold=True))
    g.append(R(40, 86, W - 80, 54, SOFT, rx=10))
    g.append(T(W / 2, 120, 'Unit opener  ·  24 academic words  ·  12 campus words', 21, INK))
    cols = [('READING', BLUE, ['Complete the Words', 'Read in Daily Life', 'Read an Academic\nPassage']),
            ('LISTENING', AMBER, ['Conversation', 'Announcement', 'Academic Talk']),
            ('SPEAKING', TEAL, ['Repeat + Interview', 'Repeat + Interview', 'Repeat + Interview']),
            ('WRITING', PLUM, ['Build a Sentence', 'Write an Email', 'Academic Discussion'])]
    cw = (W - 100) / 4.0
    for i, (name, col, cells) in enumerate(cols):
        x = 40 + i * (cw + 6)
        g.append(R(x, 160, cw - 6, 40, col, rx=8))
        g.append(T(x + (cw - 6) / 2, 187, name, 18, PAPER, bold=True))
        for k, cell in enumerate(cells):
            y = 212 + k * 74
            g.append(R(x, y, cw - 6, 66, PAPER, col, 1.5, 8))
            parts = cell.split('\n')
            for j, pt in enumerate(parts):
                g.append(T(x + (cw - 6) / 2, y + (34 if len(parts) == 1 else 28 + j * 22), pt, 16, INK))
        g.append(T(x + (cw - 6) / 2, 456, 'cycles 1 · 2 · 3', 15, GREY))
    g.append(R(40, h - 54, W - 80, 44, SOFT, rx=10))
    g.append(T(W / 2, h - 24, 'Grammar focus  ·  Unit review and progress check  ·  Adaptive tip', 20, INK))
    return render(''.join(g), W, h, PAPER)


def icon_row(pairs, accent=INDIGO):
    n = len(pairs)
    _cw = W / float(n)
    h = int(max(160, 122 + max(len(fit(l, _cw - 40, 16)) for _, l in pairs) * 20 + 22))
    g = [R(0, 0, W, h, PAPER)]
    cw = W / float(n)
    for i, (ic, lab) in enumerate(pairs):
        x = i * cw
        g.append(R(x + 10, 16, cw - 20, h - 32, SOFT, rx=10))
        g.append(icon(ic, x + cw / 2 - 34, 36, 1.2))
        blk, _, _ = TBLOCK(x + cw / 2, 122, None, 16, cw - 40, 20, INK,
                           anchor='middle', lines=fit(lab, cw - 40, 16))
        g.append(blk)
    return render(''.join(g), W, h, PAPER)


def map_strip(volume, rows):
    """Map of the book: one row per unit, each column wrapped inside itself.

    Every column used to be drawn at a fixed x with no width, so a long
    sub-topic list ran straight through the next column and off the page.
    """
    COLS = ((38, 68 - 38 - 2), (68, 190 - 68 - 10), (190, 560 - 190 - 14),
            (560, 760 - 560 - 14), (760, W - 20 - 760))
    SZ = (18, 17, 15, 15, 15)
    LEAD = 21
    laid = []
    for num, title, subs, gram, words in rows:
        cells, sizes = [[str(num)]], [SZ[0]]
        for ci, txt in ((1, title), (2, subs), (3, gram), (4, words)):
            lns, sz = fit_block(txt, COLS[ci][1], SZ[ci])
            cells.append(lns); sizes.append(sz)
        laid.append((cells, sizes, max(len(c) for c in cells)))
    h = 110 + sum(max(44, n * LEAD + 16) for _, _, n in laid) + 20
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(0, 0, W, 76, INDIGO))
    g.append(T(30, 48, 'MAP OF THE BOOK · VOLUME %s' % volume, 24, PAPER, bold=True, anchor='start'))
    for lab, (x, _w) in zip(('Unit', 'Sub-topics', 'Grammar', 'Words'),
                            (COLS[0], COLS[2], COLS[3], COLS[4])):
        g.append(T(x, 100, lab, 17, PERI, bold=True, anchor='start'))
    y = 112
    for i, (cells, sizes, nmax) in enumerate(laid):
        rh = max(44, nmax * LEAD + 16)
        if i % 2 == 0:
            g.append(R(20, y, W - 40, rh, SOFT, rx=4))
        ty = y + 24
        for ci, cell in enumerate(cells):
            x, cw = COLS[ci]
            col = INDIGO if ci == 0 else (GREY if ci in (2, 4) else INK)
            blk, _, _ = TBLOCK(x, ty, None, sizes[ci], cw, LEAD, col,
                               bold=(ci == 0), lines=cell)
            g.append(blk)
        y += rh
    return render(''.join(g), W, int(h), PAPER)


# ------------------------------------------------------------ B2 figures ----
def family_tree(head_word, forms):
    """Word family: the head word, its forms, and what each one is.

    forms is a list of (form, part of speech, a short use).
    """
    h = 150 + len(forms) * 72
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(44, 52, 'Word family', 22, GREY, anchor='start'))
    g.append(T(44, 94, head_word, 38, INDIGO, bold=True, anchor='start'))
    g.append(L(44, 112, 44 + tw(head_word, 38, True), 112, PERI, 4))
    x0 = 70
    for i, (form, pos, use) in enumerate(forms):
        y = 150 + i * 72
        g.append(L(x0, y - 36, x0, y + 18, RULE, 2))
        g.append(L(x0, y + 18, x0 + 26, y + 18, RULE, 2))
        g.append(C(x0 + 26, y + 18, 5, PERI))
        g.append(T(x0 + 44, y + 25, form, 24, INDIGO_D, bold=True, anchor='start'))
        g.append(TFIT(x0 + 44 + tw(form, 24, True) + 16, y + 25, pos, 18,
                      (W - 44) - (x0 + 44 + tw(form, 24, True) + 16), GREY))
        g.append(TFIT(x0 + 44, y + 52, use, 19, (W - 44) - (x0 + 44), INK, floor=0.76))
    return render(''.join(g), W, h, PAPER)


def hedge_scale(rows):
    """How far a writer commits: expressions laid out from certain to doubtful.

    rows is a list of (expression, gloss), strongest claim first.
    """
    h = 196 + len(rows) * 58
    g = [R(0, 0, W, h, PAPER)]
    g.append(T(W / 2, 48, 'How far does the writer commit?', 26, INDIGO, bold=True))
    g.append(T(W / 2, 80, 'The same claim, held at five different strengths', 19, GREY))
    steps = [('certain', GREEN), ('likely', TEAL), ('possible', AMBER), ('doubtful', '#d7793f'), ('denied', RED)]
    bw = (W - 140) / float(len(steps))
    for i, (lab, col) in enumerate(steps):
        x = 70 + i * bw
        g.append(R(x, 110, bw - 8, 40, col, rx=6))
        g.append(T(x + (bw - 8) / 2, 137, lab, 18, PAPER, bold=True))
    g.append(L(70, 170, W - 70, 170, RULE, 2))
    gx = 88 + max(tw(e, 22, True) for e, _ in rows) + 28
    for i, (expr, gloss) in enumerate(rows):
        y = 200 + i * 58
        g.append(R(70, y, W - 140, 46, SOFT, rx=8))
        g.append(T(88, y + 30, expr, 22, INDIGO_D, bold=True, anchor='start'))
        g.append(TFIT(gx, y + 30, gloss, 19, (W - 70 - 18) - gx, INK, floor=0.78))
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------ Foundation-only families --
# These three carry the strands that Volumes 1-4 do not have. Like every family
# above they measure with tw(), wrap with fit()/fit_block() and draw with
# TFIT()/TBLOCK(), so no text in them can ever reach the edge of the image.

def sound_strip(title, rows, accent=AMBER):
    """Sound and spelling: a symbol, the words that carry it, and a note.

    rows: [(symbol, [example words], note)]
    """
    SX, CX = 92, 150                      # symbol centre, content left edge
    CW = W - CX - 40                      # content width
    LEAD, NLEAD = 34, 24
    laid = []
    for sym, ex, note in rows:
        chips, cur, curw = [], [], 0.0
        for e in ex:
            w_ = tw(e, 19) + 26
            if cur and curw + w_ + 10 > CW:
                chips.append(cur); cur, curw = [], 0.0
            cur.append((e, w_)); curw += w_ + 10
        if cur:
            chips.append(cur)
        nl = fit(note, CW, 17) if note else []
        h_ = max(76, 14 + len(chips) * LEAD + (len(nl) * NLEAD if nl else 0) + 14)
        laid.append((sym, chips, nl, h_))
    head = 64
    h = head + sum(r[3] for r in laid) + 20
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 10, W - 32, h - 20, PAPER, RULE, 2, 10))
    g.append(R(16, 10, W - 32, head - 8, accent, rx=10))
    g.append(R(16, head - 24, W - 32, 18, accent))
    g.append(TFIT(40, head - 18, title, 23, W - 96, PAPER, bold=True))
    y = head + 6
    for sym, chips, nl, h_ in laid:
        g.append(C(SX, y + h_ / 2 - 6, 30, SOFT))
        g.append(C(SX, y + h_ / 2 - 6, 30, 'none', accent, 2))
        g.append(TFIT(SX, y + h_ / 2 + 2, sym, 21, 52, INK, bold=True, anchor='middle'))
        cy = y + 14
        for row in chips:
            x = CX
            for e, w_ in row:
                g.append(R(x, cy, w_, 28, SOFT, RULE, 1.5, 14))
                g.append(T(x + w_ / 2, cy + 20, e, 19, INK))
                x += w_ + 10
            cy += LEAD
        if nl:
            blk, _, _ = TBLOCK(CX, cy + 16, None, 17, CW, NLEAD, GREY, lines=nl)
            g.append(blk)
        y += h_
        if (sym, chips, nl, h_) is not laid[-1]:
            g.append(_rule(y - 4, 40, W - 40))
    return render(''.join(g), W, int(h), PAPER)


_KB = ('qwertyuiop', 'asdfghjkl', 'zxcvbnm')


def keyboard_map(highlight='', caption='', accent=INDIGO):
    """The keyboard, with some keys lit. The test is typed; this is not decoration."""
    K, GAP = 66, 8
    hi = set(highlight.lower())
    top = 54
    rows_w = [len(r) * (K + GAP) - GAP for r in _KB]
    kb_h = 3 * (K + GAP) + K + 10
    cap = fit(caption, W - 120, 18) if caption else []
    h = top + kb_h + (len(cap) * 25 + 18 if cap else 10) + 16
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 10, W - 32, h - 20, SOFT, RULE, 2, 10))
    y = top
    for ri, row in enumerate(_KB):
        x = (W - rows_w[ri]) / 2.0
        for ch in row:
            on = ch in hi
            g.append(R(x, y, K, K, accent if on else PAPER, RULE if not on else accent, 2, 8))
            g.append(T(x + K / 2, y + K / 2 + 9, ch.upper(), 24,
                       PAPER if on else INK, bold=on))
            x += K + GAP
        y += K + GAP
    sw = rows_w[0] * 0.62
    on = ' ' in hi
    g.append(R((W - sw) / 2.0, y, sw, K * 0.62, accent if on else PAPER,
               accent if on else RULE, 2, 8))
    g.append(T(W / 2, y + K * 0.42, 'space', 18, PAPER if on else GREY, bold=on))
    if cap:
        blk, _, _ = TBLOCK(60, y + K * 0.62 + 34, None, 18, W - 120, 25, INK,
                           lines=cap, anchor='start')
        g.append(blk)
    return render(''.join(g), W, int(h), PAPER)


def frame_card(title, lines, accent=PLUM, tag='WRITING FRAME'):
    """A writing frame the student fills in. Blanks are runs of underscores."""
    RIGHT = W - 44
    head_w = RIGHT - 40 - (tw(tag, 16, True) + 28)
    LEAD = 32
    laid = []
    for ln_ in lines:
        if ln_.startswith('# '):
            laid.append(('h', fit(ln_[2:], RIGHT - 40, 20, True), 20, 40, True))
        elif not ln_.strip():
            laid.append(('g', [''], 19, 40, False))
        else:
            laid.append(('p', fit(ln_, RIGHT - 56, 20), 20, 56, False))
    body = sum(len(l[1]) * LEAD + (8 if l[0] == 'h' else 0) for l in laid)
    h = 118 + body + 30
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, PAPER, RULE, 2, 8))
    g.append(R(16, 16, W - 32, 62, accent, rx=8))
    g.append(R(16, 60, W - 32, 18, accent))
    g.append(TFIT(40, 56, title, 24, head_w, PAPER, bold=True))
    g.append(T(RIGHT, 54, tag, 16, PAPER, bold=True, anchor='end'))
    y = 110
    for kind_, lns, sz, x, bold in laid:
        if kind_ == 'h':
            y += 8
        if kind_ == 'p':
            g.append(R(40, y - 20, 5, len(lns) * LEAD - 6, accent, rx=2))
        blk, _, _ = TBLOCK(x, y, None, sz, RIGHT - x, LEAD, INK, bold=bold, lines=lns)
        g.append(blk)
        y += len(lns) * LEAD
    return render(''.join(g), W, int(h), PAPER)
