"""Figure families for the TOEFL 2026 B1 course. Each returns (png_bytes, w, h)."""
from art import (render, T, R, C, L, P, person, head, icon, wrap, tw,
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
    g.append(T(W / 2, 500, 'VOLUME %d' % volume, 44, PAPER, bold=True))
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
    g.append(T(W / 2, 110, 'Volume %d' % volume, 22, PERI_L))
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
    h = 330
    g = [R(0, 0, W, h, SOFT)]
    g.append(R(0, 0, W, 150, accent))
    g.append(T(40, 72, 'UNIT %d' % n, 26, PERI_L, bold=True, anchor='start'))
    g.append(T(40, 118, title, 40, PAPER, bold=True, anchor='start'))
    for i, ic in enumerate(icons[:3]):
        g.append(icon(ic, W - 70 - (2 - i) * 86, 44, 1.1))
    bw = (W - 100) / 3.0
    for i, (sub, lab) in enumerate(zip(subtopics, ('A', 'B', 'C'))):
        x = 40 + i * (bw + 10)
        g.append(R(x, 180, bw, 112, PAPER, rx=12))
        g.append(C(x + 28, 210, 15, accent))
        g.append(T(x + 28, 217, lab, 17, PAPER, bold=True))
        for k, ln_ in enumerate(wrap(sub, bw - 70, 18)[:3]):
            g.append(T(x + 54, 216 + k * 24, ln_, 18, INK, anchor='start'))
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
    g.append(T(110, 44, '%s · CYCLE %d' % (skill.upper(), cycle), 19, col, bold=True, anchor='start'))
    g.append(T(110, 76, label, 25, INK, bold=True, anchor='start'))
    g.append(R(W - 36 - tw(task, 18, True) - 40, 34, tw(task, 18, True) + 40, 40, col, rx=20))
    g.append(T(W - 36 - (tw(task, 18, True) + 40) / 2, 60, task, 18, PAPER, bold=True))
    return render(''.join(g), W, h, PAPER)


# ------------------------------------------------- daily-life document cards --
def email_card(to, frm, date, subject, lines, accent=AMBER):
    rows = 4
    bh = 34 + len(lines) * 28 + 28
    h = 32 + rows * 40 + bh + 24
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, accent, rx=6))
    g.append(R(26, 26, W - 52, h - 52, PAPER, rx=4))
    y = 40
    for lab, val in (('To:', to), ('From:', frm), ('Date:', date), ('Subject:', subject)):
        g.append(R(40, y, 130, 32, PAPER, RULE, 2, 3))
        g.append(T(50, y + 22, lab, 19, INK, anchor='start'))
        g.append(R(180, y, W - 230, 32, PAPER, RULE, 2, 3))
        g.append(T(192, y + 22, val, 19, INK, anchor='start'))
        y += 40
    y += 6
    g.append(R(40, y, W - 90, bh - 10, PAPER, RULE, 2, 3))
    g.append(R(W - 68, y, 18, bh - 10, SOFT, RULE, 1))
    g.append(P('M%g %g l%g %g l%g 0 z' % (W - 59, y + 8, -6, 8, 12), GREY))
    g.append(P('M%g %g l%g %g l%g 0 z' % (W - 59, y + bh - 18, -6, -8, 12), GREY))
    ty = y + 32
    for ln_ in lines:
        g.append(T(58, ty, ln_, 19, INK, anchor='start'))
        ty += 28
    return render(''.join(g), W, h, PAPER)


def notice_card(heading, lines, accent=TEAL, kind='notice'):
    h = 110 + len(lines) * 30 + 40
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, PAPER, RULE, 2, 8))
    g.append(R(16, 16, W - 32, 62, accent, rx=8))
    g.append(R(16, 60, W - 32, 18, accent))
    g.append(T(40, 56, heading, 24, PAPER, bold=True, anchor='start'))
    tag = {'notice': 'NOTICE', 'web': 'WEB PAGE', 'ad': 'ADVERTISEMENT',
           'listing': 'LISTING', 'page': 'PAGE'}.get(kind, 'NOTICE')
    g.append(T(W - 44, 54, tag, 16, PAPER, bold=True, anchor='end'))
    y = 118
    for ln_ in lines:
        if ln_.startswith('* '):
            g.append(C(52, y - 6, 4, accent))
            g.append(T(70, y, ln_[2:], 19, INK, anchor='start'))
        elif ln_.startswith('# '):
            g.append(T(40, y, ln_[2:], 21, INK, bold=True, anchor='start'))
        else:
            g.append(T(40, y, ln_, 19, INK, anchor='start'))
        y += 30
    return render(''.join(g), W, h, PAPER)


def social_card(name, handle, lines, likes='128', kind='w'):
    h = 120 + len(lines) * 30 + 56
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, SOFT, RULE, 2, 10))
    g.append(head(70, 76, 30, PERI, kind))
    g.append(T(118, 68, name, 22, INK, bold=True, anchor='start'))
    g.append(T(118, 96, handle, 18, GREY, anchor='start'))
    y = 148
    for ln_ in lines:
        g.append(T(48, y, ln_, 19, INK, anchor='start'))
        y += 30
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
    g.append(T(W / 2, h - 14, caption, 20, PAPER, bold=True))
    return render(''.join(g), W, h, SOFT)


def talk_scene(caption, board_lines, kind='w', shirt=TEAL):
    h = 340
    g = [R(0, 0, W, h, SOFT)]
    g.append(R(0, 250, W, 90, '#e7ebf6'))
    g.append(R(220, 40, 520, 200, '#2c3a33', rx=6))
    g.append(R(232, 52, 496, 176, '#33443b', rx=4))
    for k, ln_ in enumerate(board_lines[:4]):
        g.append(T(258, 92 + k * 38, ln_, 22, '#d8e6dd', anchor='start'))
    g.append(person(130, 300, shirt, kind, 0.95, arm='up'))
    g.append(R(0, h - 44, W, 44, AMBER))
    g.append(T(W / 2, h - 14, caption, 20, PAPER, bold=True))
    return render(''.join(g), W, h, SOFT)


def announce_scene(caption, lines):
    h = 300
    g = [R(0, 0, W, h, SOFT)]
    g.append(R(40, 40, 150, 190, PAPER, RULE, 2, 10))
    g.append(icon('headphones', 72, 86, 1.6))
    g.append(T(115, 206, 'AUDIO', 18, AMBER, bold=True))
    g.append(R(215, 40, W - 255, 190, PAPER, RULE, 2, 10))
    g.append(R(215, 40, W - 255, 48, AMBER, rx=10))
    g.append(R(215, 72, W - 255, 16, AMBER))
    g.append(T(240, 72, 'ANNOUNCEMENT', 21, PAPER, bold=True, anchor='start'))
    y = 128
    for ln_ in lines[:3]:
        g.append(T(240, y, ln_, 19, INK, anchor='start'))
        y += 30
    g.append(R(0, h - 44, W, 44, AMBER))
    g.append(T(W / 2, h - 14, caption, 20, PAPER, bold=True))
    return render(''.join(g), W, h, SOFT)


# ----------------------------------------------------------- speaking panel --
def interview_panel(theme, questions):
    h = 150 + len(questions) * 54 + 40
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, SOFT, RULE, 2, 10))
    g.append(R(16, 16, W - 32, 58, TEAL, rx=10))
    g.append(R(16, 52, W - 32, 22, TEAL))
    g.append(T(44, 56, 'TAKE AN INTERVIEW', 22, PAPER, bold=True, anchor='start'))
    g.append(T(W - 44, 54, 'no preparation time', 17, '#bfe0d6', anchor='end'))
    g.append(head(84, 150, 42, TEAL, 'm'))
    g.append(T(84, 216, 'Interviewer', 16, GREY))
    for k, q in enumerate(questions):
        y = 116 + k * 54
        g.append(C(170, y + 10, 14, TEAL))
        g.append(T(170, y + 16, str(k + 1), 16, PAPER, bold=True))
        g.append(R(196, y - 12, W - 240, 44, PAPER, RULE, 2, 8))
        g.append(T(212, y + 16, q, 19, INK, anchor='start'))
    return render(''.join(g), W, h, PAPER)


def repeat_strip(sentences):
    h = 90 + len(sentences) * 42 + 24
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, PAPER, RULE, 2, 10))
    g.append(R(16, 16, W - 32, 54, TEAL, rx=10))
    g.append(R(16, 50, W - 32, 20, TEAL))
    g.append(T(44, 52, 'LISTEN AND REPEAT', 22, PAPER, bold=True, anchor='start'))
    g.append(T(W - 44, 50, 'repeat once, no preparation', 17, '#bfe0d6', anchor='end'))
    for k, s in enumerate(sentences):
        y = 110 + k * 42
        g.append(T(48, y, '%d' % (k + 1), 18, TEAL, bold=True, anchor='start'))
        g.append(T(82, y, s, 19, INK, anchor='start'))
        g.append(icon('mic', W - 110, y - 26, 0.6))
    return render(''.join(g), W, h, PAPER)


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
    h = 230
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(16, 16, W - 32, h - 32, SOFT, RULE, 2, 10))
    g.append(R(16, 16, W - 32, 54, PLUM, rx=10))
    g.append(R(16, 50, W - 32, 20, PLUM))
    g.append(T(44, 52, 'BUILD A SENTENCE', 22, PAPER, bold=True, anchor='start'))
    g.append(T(44, 110, prompt, 20, INK, bold=True, anchor='start'))
    x = 48
    for _ in range(gaps):
        g.append(R(x, 128, 74, 32, PAPER, RULE, 2, 4))
        x += 82
    y = 186
    x = 48
    for t in tiles:
        w_ = tw(t, 18) + 28
        g.append(R(x, y - 22, w_, 34, PAPER, PLUM, 2, 8))
        g.append(T(x + w_ / 2, y, t, 18, INK))
        x += w_ + 12
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
    h = 160
    g = [R(0, 0, W, h, PAPER)]
    cw = W / float(n)
    for i, (ic, lab) in enumerate(pairs):
        x = i * cw
        g.append(R(x + 10, 16, cw - 20, h - 32, SOFT, rx=10))
        g.append(icon(ic, x + cw / 2 - 34, 36, 1.2))
        for k, ln_ in enumerate(wrap(lab, cw - 40, 16)[:2]):
            g.append(T(x + cw / 2, 122 + k * 20, ln_, 16, INK))
    return render(''.join(g), W, h, PAPER)


def map_strip(volume, rows):
    """Map of the book: one line per unit."""
    h = 110 + len(rows) * 46 + 20
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(0, 0, W, 76, INDIGO))
    g.append(T(30, 48, 'MAP OF THE BOOK · VOLUME %d' % volume, 24, PAPER, bold=True, anchor='start'))
    heads = (('Unit', 40), ('Sub-topics', 190), ('Grammar', 560), ('Words', 760))
    for lab, x in heads:
        g.append(T(x, 100, lab, 17, PERI, bold=True, anchor='start'))
    y = 130
    for i, (num, title, subs, gram, words) in enumerate(rows):
        if i % 2 == 0:
            g.append(R(20, y - 22, W - 40, 44, SOFT, rx=4))
        g.append(T(40, y, '%d' % num, 18, INDIGO, bold=True, anchor='start'))
        g.append(T(68, y, title, 17, INK, anchor='start'))
        g.append(T(190, y, subs, 15, GREY, anchor='start'))
        g.append(T(560, y, gram, 15, INK, anchor='start'))
        g.append(T(760, y, words, 15, GREY, anchor='start'))
        y += 46
    return render(''.join(g), W, h, PAPER)


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
        g.append(T(x0 + 44 + tw(form, 24, True) + 16, y + 25, pos, 18, GREY, anchor='start'))
        g.append(T(x0 + 44, y + 52, use, 19, INK, anchor='start'))
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
        g.append(T(gx, y + 30, gloss, 19, INK, anchor='start'))
    return render(''.join(g), W, h, PAPER)
