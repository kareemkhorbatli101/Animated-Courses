# -*- coding: utf-8 -*-
"""Figure builders driven by a chapter's own data.

Chapters 1 and 7 have figures drawn by hand, one idea at a time. The other
chapters get these: five shapes that take the book's own tables and section
headings and draw the relation in them. They are not decoration — each one is
the model a cycle reads, and each one comes with the blank twin a student
rebuilds from memory, out of the same function.
"""
from wsart import (Canvas, wrapped_h, tw,
                   INK, INDIGO, INDIGO_L, INDIGO_M, AMBER, AMBER_L, TEAL,
                   TEAL_L, RED, RED_L, GREY, GREY_L, SOFT, PAPER)

W = 760
PAL = [(INDIGO, INDIGO_L), (TEAL, TEAL_L), (AMBER, AMBER_L), (RED, RED_L)]


def _head(c, title, sub=None):
    y = c.text(W / 2, 30, title, 21, INDIGO, True)
    if sub:
        y = c.wrapped(W / 2, 54, sub, W - 70, 15, GREY)
    return y + 16


def flowchain(title, steps, note='', blank=False, sub=None):
    """A sequence: each step leads to the next."""
    c = Canvas(W, blank=blank)
    y = _head(c, title, sub)
    n = max(1, len(steps))
    gap = 14
    bw = (W - 56 - gap * (n - 1)) / float(n)
    h = 0
    for i, (nm, s) in enumerate(steps):
        x = 28 + i * (bw + gap)
        last = i == n - 1
        h = max(h, c.card(x, y, bw, nm, s, INDIGO_L if last else SOFT, INDIGO,
                          2.4 if last else 2, tsz=15, bsz=12, minh=84, pad=9))
    for i in range(n - 1):
        x = 28 + i * (bw + gap)
        c.arrow(x + bw + 1, y + h / 2, x + bw + gap - 1, y + h / 2, INDIGO,
                2.2, 7)
    if note:
        c.note(28, y + h + 20, W - 56, note, SOFT, GREY_L, INK, 16)
    return c.render()


def cardset(title, cards, note='', blank=False, sub=None, cols=2):
    """Several named cases, each with its own facts under it."""
    c = Canvas(W, blank=blank)
    y = _head(c, title, sub)
    n = max(1, min(cols, len(cards)))
    gap = 14
    bw = (W - 48 - gap * (n - 1)) / float(n)
    rowtop = y
    col = 0
    rowh = 0
    for i, (nm, lines) in enumerate(cards):
        x = 24 + col * (bw + gap)
        h = c.card(x, rowtop, bw, nm, None, PAL[i % 4][1], PAL[i % 4][0], 2.2,
                   tsz=16, minh=38, pad=8)
        yy = rowtop + h + 6
        for ln in lines:
            yy += c.card(x, yy, bw, ln, None, PAPER, GREY_L, 1.5, tsz=13,
                         tcol=INK, minh=26, pad=5) + 5
        rowh = max(rowh, yy - rowtop)
        col += 1
        if col == n:
            col = 0
            rowtop += rowh + 16
            rowh = 0
    bot = rowtop + rowh + (0 if col == 0 else 16)
    if note:
        c.note(24, bot + 8, W - 48, note, SOFT, GREY_L, INK, 16)
    return c.render()


def lanes(title, groups, note='', blank=False, sub=None):
    """A classification: each lane is a category, holding its members."""
    c = Canvas(W, blank=blank)
    y = _head(c, title, sub)
    n = max(1, len(groups))
    gap = 12
    bw = (W - 48 - gap * (n - 1)) / float(n)
    bot = y
    for i, (nm, items) in enumerate(groups):
        x = 24 + i * (bw + gap)
        col, fill = PAL[i % 4]
        h = c.card(x, y, bw, nm, None, fill, col, 2.2, tsz=15, minh=40, pad=8)
        yy = y + h + 8
        for it in items:
            yy += c.card(x, yy, bw, it, None, PAPER, GREY_L, 1.5, tsz=13,
                         tcol=INK, minh=26, pad=5) + 5
        bot = max(bot, yy)
    if note:
        c.note(24, bot + 10, W - 48, note, SOFT, GREY_L, INK, 16)
    return c.render()


def splitbar(title, left, right, note='', blank=False, sub=None):
    """One total divided in two, with what each half is."""
    c = Canvas(W, blank=blank)
    y = _head(c, title, sub)
    c.rect(70, y, W - 140, 50, INDIGO_L, INDIGO, 2.4, 7)
    c.lab(W / 2, y + 31, left[0] if False else title.split('—')[0].strip(),
          18, INDIGO, True)
    y += 50
    c.line(W / 2, y, W / 2, y + 20, INDIGO, 2)
    c.line(220, y + 20, W - 220, y + 20, INDIGO, 2)
    c.arrow(220, y + 20, 220, y + 38, INDIGO, 2)
    c.arrow(W - 220, y + 20, W - 220, y + 38, INDIGO, 2)
    y += 40
    h = c.card(60, y, 300, left[0], left[1], AMBER_L, AMBER, 2.4, tsz=16,
               bsz=13, minh=80)
    c.card(W - 60 - 300, y, 300, right[0], right[1], TEAL_L, TEAL, 2.4,
           tsz=16, bsz=13, minh=h)
    if note:
        c.note(60, y + h + 20, W - 120, note, SOFT, GREY_L, INK, 16)
    return c.render()


def chaptermap(title, nodes, note='', blank=False, sub=None):
    """The chapter's sections, in the order they have to be taken."""
    c = Canvas(W, blank=blank)
    y = _head(c, title, sub)
    for i, (nm, s) in enumerate(nodes):
        h = c.card(70, y, W - 140, nm, s, SOFT, INDIGO, 2, tsz=16, bsz=13,
                   minh=56)
        if i < len(nodes) - 1:
            c.arrow(W / 2, y + h + 1, W / 2, y + h + 16, INDIGO_M, 2, 8)
        y += h + 18
    if note:
        c.note(70, y + 2, W - 140, note, INDIGO_L, INDIGO, INDIGO, 16)
    return c.render()


BUILDERS = {'flowchain': flowchain, 'cardset': cardset, 'lanes': lanes,
            'splitbar': splitbar, 'chaptermap': chaptermap}
