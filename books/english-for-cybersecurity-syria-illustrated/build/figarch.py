#!/usr/bin/env python3
"""The twelve figure archetypes used by the illustrated book."""
from figlib import (Canvas, NAVY, NAVY2, PALE, PALE2, GREY, MGREY, BLUE, RED,
                    GREEN, WHITE, W)


def two_panel(left, right, caption, h=480):
    """left/right = (title, [(icon, label), ...]).  Two scenes side by side."""
    c = Canvas(h, cap=bool(caption))
    pw = 660
    for px, (title, items) in ((40, left), (W - 40 - pw, right)):
        c.panel(px, 70, pw, h - 140)
        c.T(px + pw / 2, h - 108, title, size=24, weight="bold", maxw=pw - 60)
        n = len(items)
        step = (pw - 120) / max(n, 1)
        labels = []
        for i, (icon, label) in enumerate(items):
            x = px + 60 + step * (i + 0.5)
            c.icon(icon, x, 180, 0.95)
            labels.append(c.T(x, 138, label, size=19, weight="bold",
                              maxw=step - 14))
        c.equalise(labels)
    c.caption(caption)
    return c


def role_row(roles, caption, h=400):
    """roles = [(name, role, prop)].  People with names, roles and a prop icon."""
    c = Canvas(h, cap=bool(caption))
    n = len(roles)
    step = W / n
    names, roledefs = [], []
    for i, r in enumerate(roles):
        name, role = r[0], r[1]
        prop = r[2] if len(r) > 2 else None
        x = step * (i + 0.5)
        c.person(x - 34, 150, 1.0, label=None)
        if prop:
            c.icon(prop, x + 86, 166, 0.62)
        names.append(c.T(x, 120, name, size=22, weight="bold", maxw=step - 30))
        roledefs.append(c.T(x, 88, role, size=19, color=NAVY2, maxw=step - 24))
    c.equalise(names)
    c.equalise(roledefs)
    c.caption(caption)
    return c


def labelled_object(parts, caption, h=460, core="desk"):
    """parts = [(label, (ax, ay), (tx, ty))] — anchor on the object, label point.

    Every label is written out in full, so the task can be checked, and the
    leader lines are routed clear of the drawing.
    """
    c = Canvas(h, cap=bool(caption))
    if core == "desk":
        c.monitor(560, 190, 230, 160)
        c.tower(980, 150, 100, 200)
        c.rect(445, 120, 200, 22, fill=GREY, lw=1.8)
        c.mouse(700, 120)
        c.line(675, 240, 930, 240, color=MGREY, lw=3.2)
    elif core == "laptop":
        c.laptop(720, 180, 440, 240)
    elif core == "server":
        c.server(720, 150, 190, 230)
    for label, (ax, ay), (tx, ty) in parts:
        if abs(tx - ax) < 40:          # vertical leader: stop clear of the text
            end = ty + 22 if ty < ay else ty - 22
            c.line(ax, ay, tx, end, color=NAVY, lw=1.6)
            c.T(tx, ty, label, size=20, weight="bold", ha="center", maxw=300)
        else:
            c.line(ax, ay, tx, ty, color=NAVY, lw=1.6)
            ha = "left" if tx > ax else "right"
            off = 12 if tx > ax else -12
            c.T(tx + off, ty, label, size=20, weight="bold", ha=ha, maxw=300)
        c.circ(ax, ay, 6, fill=NAVY, edge=NAVY, lw=1.0)
    c.caption(caption)
    return c


def grammar_contrast(left, right, caption, h=360):
    """left/right = (heading, [line, ...])."""
    c = Canvas(h, cap=bool(caption))
    pw = 650
    for px, (head, lines), tint in ((40, left, PALE), (W - 40 - pw, right, PALE2)):
        c.panel(px, 66, pw, h - 130, fill=tint)
        c.T(px + pw / 2, h - 104, head, size=25, weight="bold", maxw=pw - 50)
        for i, ln in enumerate(lines):
            c.T(px + pw / 2, h - 158 - i * 44, ln, size=21, color=NAVY2, maxw=pw - 60)
    c.caption(caption)
    return c


def icon_row(items, caption, h=400):
    """items = [(icon, label)]."""
    c = Canvas(h, cap=bool(caption))
    n = len(items)
    step = W / n
    labels = []
    for i, (icon, label) in enumerate(items):
        x = step * (i + 0.5)
        c.icon(icon, x, 160, 1.0)
        labels.append(c.T(x, 108, label, size=21, weight="bold", maxw=step - 26))
    c.equalise(labels)
    c.caption(caption)
    return c


def ordering(items, caption, h=440):
    """items = [label].  A numbered-circle list with a blank line to write in."""
    c = Canvas(h, cap=bool(caption))
    n = len(items)
    step = 72
    floor = c.y0 + 40
    block = step * (n - 1)
    top = (h + floor + block) / 2        # the list sits centred in the canvas
    for i, label in enumerate(items):
        y = top - i * step
        c.circ(96, y, 20, fill=PALE)
        c.answer_line(132, y - 20, 72)
        c.T(224, y, label, size=21, weight="bold", ha="left", maxw=W - 300)
    c.caption(caption)
    return c


def checklist(items, caption, h=440):
    """items = [(label, ticked)].  A sheet of boxes to tick."""
    c = Canvas(h, cap=bool(caption))
    n = len(items)
    step = 64
    block = step * (n - 1)
    top = (h + c.y0 + 40 + block) / 2
    for i, it in enumerate(items):
        label, ticked = (it if isinstance(it, tuple) else (it, False))
        y = top - i * step
        c.rect(120, y - 17, 34, 34, fill=WHITE, lw=2.0)
        if ticked:
            c.line(127, y, 136, y - 9, color=NAVY, lw=3.0)
            c.line(136, y - 9, 148, y + 11, color=NAVY, lw=3.0)
        c.T(182, y, label, size=21, weight="bold", ha="left", maxw=W - 260)
    c.caption(caption)
    return c


def process_chain(steps, caption, h=400):
    """steps = [label].  Numbered circles joined by arrows."""
    c = Canvas(h, cap=bool(caption))
    n = len(steps)
    step = (W - 120) / n
    y = 215
    for i, label in enumerate(steps):
        x = 60 + step * (i + 0.5)
        c.circ(x, y, 42, fill=PALE)
        c.T(x, y, str(i + 1), size=27, weight="bold")
        c.T(x, y - 76, label, size=20, weight="bold", maxw=step - 16)
        if i < n - 1:
            c.arrow(x + 52, y, x + step - 52, y)
    c.caption(caption)
    return c


def gauges(items, caption, h=440):
    """items = [(label, fraction, reading)].  Dials with a line to write on."""
    c = Canvas(h, cap=bool(caption))
    n = len(items)
    step = W / n
    cy = 252
    for i, (label, frac, reading) in enumerate(items):
        x = step * (i + 0.5)
        c.circ(x, cy, 86, fill=PALE)
        c.circ(x, cy, 72, fill=WHITE, lw=1.4)
        import math
        for k in range(11):
            a = math.radians(210 - k * 24)
            c.line(x + 58 * math.cos(a), cy + 58 * math.sin(a),
                   x + 70 * math.cos(a), cy + 70 * math.sin(a),
                   color=MGREY, lw=2.0)
        a = math.radians(210 - frac * 240)
        c.line(x, cy, x + 58 * math.cos(a), cy + 58 * math.sin(a), color=RED, lw=3.0)
        c.circ(x, cy, 7, fill=NAVY, edge=NAVY, lw=1.0)
        # the unit sits clear below the dial, never across its rim
        c.T(x, cy - 118, reading, size=19, color=NAVY2, maxw=step - 40)
        c.T(x, cy + 112, label, size=21, weight="bold", maxw=step - 30)
        c.answer_line(x - 70, c.y0 + 74, 140)
    c.caption(caption)
    return c


def comparison_bars(items, caption, h=440):
    """items = [(label, value 0-1, note)]."""
    c = Canvas(h, cap=bool(caption))
    n = len(items)
    x0, bw = 330, W - 430
    step = min(72, (h - 150) / max(n, 1))
    top = h - 100
    for i, (label, val, note) in enumerate(items):
        y = top - i * step
        c.T(300, y, label, size=21, weight="bold", ha="right", maxw=250)
        c.rect(x0, y - 18, bw, 36, fill=PALE2, lw=1.4)
        c.rect(x0, y - 18, max(bw * val, 4), 36, fill=PALE, lw=1.8)
        c.T(x0 + bw + 14, y, note, size=19, color=NAVY2, ha="left", maxw=90)
    c.caption(caption)
    return c


def doc_mockup(title, fields, caption, h=480, note=None):
    """fields = [(label, value)].  A document with ruled fields, centred."""
    c = Canvas(h, cap=bool(caption))
    dw, dx = 980, (W - 980) / 2
    c.panel(dx, 70, dw, h - 140, fill=WHITE)
    c.rect(dx, h - 134, dw, 52, fill=PALE, lw=2.2)
    c.T(dx + dw / 2, h - 108, title, size=24, weight="bold", maxw=dw - 60)
    n = len(fields)
    top = h - 176
    step = min(58, (top - 110) / max(n, 1))
    for i, (label, value) in enumerate(fields):
        y = top - i * step
        c.T(dx + 34, y, label, size=20, weight="bold", ha="left", maxw=330)
        c.line(dx + 380, y - 16, dx + dw - 34, y - 16, color=MGREY, lw=1.6)
        if value:
            c.T(dx + 396, y, value, size=20, color=NAVY2, ha="left", maxw=dw - 450)
    if note:
        c.T(dx + dw / 2, 92, note, size=19, color=NAVY2, style="italic", maxw=dw - 60)
    c.caption(caption)
    return c


def week_planner(days, caption, h=None):
    """days = [(day, [entry, ...])].  A week grid, one column per day."""
    rows = max(len(e) for _, e in days)
    boxh = 46 + 30 + 46 * rows
    h = h or int(60 + boxh + (70 if caption else 24))
    c = Canvas(h, cap=bool(caption))
    n = len(days)
    pad, gap = 40, 12
    cw = (W - 2 * pad - gap * (n - 1)) / n
    top = h - 60
    bot = top - boxh          # the grid never reaches into the caption band
    for i, (day, entries) in enumerate(days):
        x = pad + i * (cw + gap)
        c.rect(x, bot, cw, top - bot, fill=WHITE, lw=1.8)
        c.rect(x, top - 46, cw, 46, fill=PALE, lw=1.8)
        c.T(x + cw / 2, top - 23, day, size=21, weight="bold", maxw=cw - 16)
        for k, e in enumerate(entries):
            y = top - 86 - k * 46
            c.line(x + 12, y - 16, x + cw - 12, y - 16, color=MGREY, lw=1.4)
            c.T(x + cw / 2, y, e, size=18, color=NAVY2, maxw=cw - 24)
    c.caption(caption)
    return c


def two_person_scene(a, b, caption, h=460):
    """a/b = (name, [line, ...]).  Two people with speech panels."""
    c = Canvas(h, cap=bool(caption))
    c.person(150, 130, 1.1, label=None)
    c.T(150, 96, a[0], size=22, weight="bold", maxw=230)
    c.person(W - 150, 130, 1.1, label=None)
    c.T(W - 150, 96, b[0], size=22, weight="bold", maxw=230)
    bw = 470
    for bx, lines, tint in ((270, a[1], PALE), (W - 270 - bw, b[1], PALE2)):
        c.panel(bx, h - 230, bw, 170, fill=tint)
        for i, ln in enumerate(lines):
            c.T(bx + bw / 2, h - 96 - i * 42, ln, size=20, color=NAVY2, maxw=bw - 44)
    c.caption(caption)
    return c


def three_groups(groups, caption, h=460):
    """groups = [(title, [item, ...])].  Three labelled columns, linked."""
    c = Canvas(h, cap=bool(caption))
    pw = 420
    xs = [40, (W - pw) / 2, W - 40 - pw]
    for px, (title, items) in zip(xs, groups):
        c.panel(px, 80, pw, h - 150)
        c.T(px + pw / 2, h - 110, title, size=24, weight="bold", maxw=pw - 44)
        for i, it in enumerate(items):
            c.T(px + pw / 2, h - 168 - i * 42, it, size=20, color=NAVY2, maxw=pw - 50)
    mid = (h - 150) / 2 + 80
    c.arrow(xs[0] + pw + 6, mid, xs[1] - 6, mid)
    c.arrow(xs[1] + pw + 6, mid, xs[2] - 6, mid)
    c.caption(caption)
    return c
