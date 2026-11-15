# -*- coding: utf-8 -*-
"""The IELTS figure families: everything that is not a Task 1 visual.

Each one takes the facts it prints as arguments, so no figure in this series
can tell a volume something its own pages contradict - the defect that had
the TOEFL scoring chart claiming band 3.0-4.0 in all eight of its books.
"""
from _base import (render, T, R, C, L, P, TFIT, TBLOCK, fit, tw, W, HW,
                   PAPER, SOFT, CREAM, INDIGO, INDIGO_D, PERI, PERI_L, BLUE,
                   AMBER, TEAL, PLUM, GREEN, RED, INK, GREY, GREY_L, RULE)

SKILL = {'reading': BLUE, 'listening': AMBER, 'speaking': TEAL, 'writing': PLUM}


def cycle_bar(n, sub, step, stepname):
    h = 86
    g = [R(0, 0, W, h, INDIGO, rx=12)]
    g.append(C(56, h / 2, 26, PAPER))
    g.append(T(56, h / 2 + 9, str(n), 26, INDIGO, bold=True))
    g.append(TFIT(96, h / 2 - 4, 'Cycle %d' % n, 17, 200, PERI_L,
                  bold=True, anchor='start'))
    g.append(TFIT(96, h / 2 + 22, sub, 21, W - 320, PAPER, anchor='start'))
    g.append(R(W - 210, h / 2 - 17, 186, 34, INDIGO_D, rx=8))
    g.append(TFIT(W - 117, h / 2 + 6, 'Step %d · %s' % (step, stepname),
                  15, 172, PERI_L, anchor='middle'))
    return render(''.join(g), W, h, PAPER)


def skill_bar(skill, cycle, left, right):
    col = SKILL[skill]
    h = 72
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(0, 0, 8, h, col, rx=4))
    g.append(TFIT(26, 30, skill.upper(), 15, 160, col, bold=True, anchor='start'))
    g.append(TFIT(26, 56, left, 19, 420, INK, anchor='start'))
    g.append(R(W - 376, 18, 360, 36, SOFT, rx=8))
    g.append(TFIT(W - 196, 42, right, 17, 340, GREY, anchor='middle'))
    return render(''.join(g), W, h, PAPER)


def unit_opener(n, theme, subs):
    h = 150 + 42 * len(subs)
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(0, 0, W, 104, INDIGO, rx=12))
    g.append(TFIT(40, 48, 'UNIT %d' % n, 17, 300, PERI_L, bold=True, anchor='start'))
    g.append(TFIT(40, 84, theme, 30, W - 90, PAPER, bold=True, anchor='start'))
    y = 140
    for i, s in enumerate(subs, 1):
        g.append(C(56, y - 6, 15, SOFT, INDIGO, 1.6))
        g.append(T(56, y - 1, str(i), 14, INDIGO, bold=True))
        g.append(TFIT(84, y, s, 19, W - 130, INK, anchor='start'))
        y += 42
    return render(''.join(g), W, h, PAPER)


def cue_card(title, bullets):
    h = 120 + 34 * len(bullets)
    g = [R(0, 0, W, h, CREAM, TEAL, 2.4, 12)]
    g.append(TFIT(40, 48, 'Part 2 · speak for one to two minutes', 16,
                  480, TEAL, bold=True, anchor='start'))
    g.append(TFIT(40, 84, title, 23, W - 90, INK, bold=True, anchor='start'))
    y = 122
    for b in bullets:
        g.append(C(52, y - 6, 4, TEAL))
        g.append(TFIT(72, y, b, 18, W - 120, INK, anchor='start'))
        y += 34
    return render(''.join(g), W, h, PAPER)


def answer_shape(shape):
    """The two-to-five rule drawn: answer, supports, follow-ups."""
    h = 190
    g = [R(0, 0, W, h, PAPER)]
    g.append(TFIT(W / 2, 36, 'The shape of this answer', 21, W - 80,
                  INDIGO, bold=True, anchor='middle'))
    cols = len(shape)
    bw = (W - 80 - (cols - 1) * 16) / float(cols)
    x = 40
    for i, (kind, text) in enumerate(shape):
        col = {'answer': TEAL, 'support': INDIGO, 'follow-up': PERI}.get(kind, GREY)
        g.append(R(x, 64, bw, 96, PAPER, col, 2, 10))
        g.append(R(x, 64, bw, 28, col, rx=10))
        g.append(R(x, 80, bw, 12, col))
        g.append(TFIT(x + bw / 2, 85, kind, 14, bw - 16, PAPER,
                      bold=True, anchor='middle'))
        blk, _, _ = TBLOCK(x + bw / 2, 112, None, 15, bw - 20, 19, INK,
                           anchor='middle', lines=fit(text, bw - 20, 15))
        g.append(blk)
        x += bw + 16
    g.append(TFIT(W / 2, 180, '%d sentences · a model, not a quota'
                  % len(shape), 15, W - 120, GREY, anchor='middle'))
    return render(''.join(g), W, h, PAPER)


def outline_frame(thesis, rows):
    """A skeleton the student fills: main ideas with their supports."""
    h = 120 + sum(34 + 28 * len(s) for _, s in rows)
    g = [R(0, 0, W, h, PAPER)]
    g.append(R(0, 0, W, 64, PLUM, rx=10))
    g.append(TFIT(28, 40, 'Outline · %s' % thesis, 19, W - 56, PAPER,
                  bold=True, anchor='start'))
    y = 100
    for i, (main, sups) in enumerate(rows, 1):
        g.append(R(34, y - 24, W - 68, 32, SOFT, rx=6))
        g.append(TFIT(48, y, 'Main idea %d:  %s' % (i, main), 18, W - 110,
                      INK, bold=True, anchor='start'))
        y += 34
        for s in sups:
            g.append(L(68, y - 6, 80, y - 6, GREY_L, 2))
            g.append(TFIT(92, y, s, 16, W - 150, GREY, anchor='start'))
            y += 28
    return render(''.join(g), W, h, PAPER)


def pattern_box(point, examples):
    h = 92 + 34 * len(examples)
    g = [R(0, 0, W, h, PAPER, PLUM, 2, 12)]
    g.append(R(0, 0, W, 54, PLUM, rx=12))
    g.append(R(0, 40, W, 14, PLUM))
    g.append(TFIT(28, 35, point, 19, W - 56, PAPER, bold=True, anchor='start'))
    y = 86
    for ex in examples:
        g.append(TFIT(36, y, ex, 18, W - 72, INK, anchor='start'))
        y += 34
    return render(''.join(g), W, h, PAPER)


def criterion_tag(pairs):
    """Which published criterion each move on this page is aimed at."""
    h = 72 + 30 * len(pairs)
    g = [R(0, 0, W, h, SOFT, rx=10)]
    g.append(TFIT(28, 38, 'What this moves, in the published criteria', 17,
                  W - 56, INDIGO, bold=True, anchor='start'))
    y = 70
    for move, crit in pairs:
        g.append(TFIT(36, y, move, 16, 470, INK, anchor='start'))
        g.append(TFIT(W - 36, y, crit, 16, 340, PLUM, anchor='end'))
        y += 30
    return render(''.join(g), W, h, PAPER)


def loop_panel(rows):
    """The three moves, with what this unit adds to one of them."""
    h = 120 + 92 * len(rows)
    g = [R(0, 0, W, h, PAPER)]
    g.append(TFIT(W / 2, 40, 'The loop', 24, W - 80, INDIGO, bold=True,
                  anchor='middle'))
    y = 80
    for i, (name, text) in enumerate(rows, 1):
        g.append(R(40, y, W - 80, 76, SOFT, rx=10))
        g.append(C(80, y + 38, 20, INDIGO))
        g.append(T(80, y + 44, str(i), 18, PAPER, bold=True))
        g.append(TFIT(116, y + 30, name, 18, W - 180, INDIGO_D, bold=True,
                      anchor='start'))
        g.append(TFIT(116, y + 58, text, 16, W - 180, INK, anchor='start'))
        y += 92
    return render(''.join(g), W, h, PAPER)


def band_scale(target, note):
    h = 300
    g = [R(0, 0, W, h, PAPER)]
    g.append(TFIT(W / 2, 46, 'How IELTS is scored', 28, W - 80, INDIGO,
                  bold=True, anchor='middle'))
    g.append(TFIT(W / 2, 80, 'Each section 0-9, reported in half bands', 19,
                  W - 120, GREY, anchor='middle'))
    bands = [('4', RED), ('5', '#d7793f'), ('6', AMBER), ('6.5', '#8aa33f'),
             ('7', GREEN), ('8', TEAL)]
    bw = (W - 140) / 6.0
    for i, (lab, col) in enumerate(bands):
        x = 70 + i * bw
        g.append(R(x, 120, bw - 8, 64, col, rx=8))
        g.append(T(x + (bw - 8) / 2, 162, lab, 24, PAPER, bold=True))
    g.append(R(70, 200, W - 140, 2, RULE))
    g.append(TFIT(70, 238, 'This volume targets %s.' % target, 20, W - 140,
                  INK, anchor='start'))
    g.append(TFIT(70, 268, note, 20, W - 140, INK, anchor='start'))
    return render(''.join(g), W, h, PAPER)


def cover_front(vol, units, level, band, strap):
    h = 1270
    g = [R(0, 0, W, h, INDIGO)]
    g.append(R(0, 0, W, 300, INDIGO_D))
    for i, col in enumerate((BLUE, AMBER, TEAL, PLUM)):
        g.append(R(W / 2 - 134 + i * 70, 76, 54, 10, col, rx=5))
    g.append(T(W / 2, 200, 'IELTS', 58, PAPER, bold=True))
    g.append(T(W / 2, 252, 'PREPARATION COURSE', 28, PERI_L, bold=True))
    g.append(T(W / 2, 384, 'Academic and General Training', 30, PAPER))
    g.append(R(W / 2 - 170, 418, 340, 4, PERI))
    g.append(T(W / 2, 496, 'VOLUME %s' % vol, 44, PAPER, bold=True))
    g.append(T(W / 2, 542, units, 26, PERI_L))
    bx, bw, gap = 70, 180, 16
    for i, name in enumerate(('READING', 'LISTENING', 'SPEAKING', 'WRITING')):
        col = (BLUE, AMBER, TEAL, PLUM)[i]
        x = bx + i * (bw + gap)
        g.append(R(x, 620, bw, 150, col, rx=14))
        g.append(T(x + bw / 2, 706, name, 20, PAPER, bold=True))
    g.append(R(70, 826, W - 140, 2, '#4a4f90'))
    for k, line in enumerate(strap):
        g.append(T(W / 2, 876 + k * 36, line, 23, PERI_L))
    g.append(T(W / 2, 1066, 'Target band %s' % band, 32, PAPER, bold=True))
    g.append(T(W / 2, 1110, 'CEFR %s' % level, 24, PERI_L))
    g.append(T(W / 2, 1150, "Student's Book", 24, PERI_L))
    g.append(T(W / 2, 1222,
               'Five cycles a skill · both modules in one book', 18, '#9a9edd'))
    return render(''.join(g), W, h, INDIGO)


def cover_back(vol, blurb, bullets, contents):
    h = 1270
    g = [R(0, 0, W, h, SOFT)]
    g.append(R(0, 0, W, 140, INDIGO))
    g.append(T(W / 2, 72, 'IELTS Preparation Course', 28, PAPER, bold=True))
    g.append(T(W / 2, 110, 'Volume %s' % vol, 22, PERI_L))
    y = 200
    for line in blurb:
        g.append(T(60, y, line, 21, INK, anchor='start'))
        y += 32
    y += 20
    for b in bullets:
        g.append(C(72, y - 6, 5, PERI))
        g.append(TFIT(92, y, b, 20, W - 150, INK, anchor='start'))
        y += 32
    y += 18
    g.append(R(56, y, W - 112, 2, RULE))
    y += 40
    g.append(T(60, y, 'In this volume', 24, INDIGO, bold=True, anchor='start'))
    y += 34
    for i, c in enumerate(contents):
        col, row = i % 2, i // 2
        g.append(TFIT(70 + col * 410, y + row * 30, c, 17, 400, INK,
                      anchor='start'))
    y += ((len(contents) + 1) // 2) * 30 + 30
    g.append(R(0, h - 120, W, 120, INDIGO))
    g.append(T(W / 2, h - 68, 'Written for the test as it is sat in 2026',
               20, PAPER))
    return render(''.join(g), W, h, SOFT)
