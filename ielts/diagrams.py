# -*- coding: utf-8 -*-
"""Process diagrams and maps: the spatial Task 1 visuals.

These are the hard ones, because they are laid out rather than tabulated.
Both take a small specification - stages, or placed objects on a normalised
grid - so that a figure can be re-levelled or corrected without being
redrawn, and so that every label goes through the fitting layer.

`process_flow` handles the sequence shape; `device_schematic` the
apparatus-then-operation shape that a device takes; `cycle_flow` a process
with no natural beginning; `site_map` the before-and-after pair.
"""
from _base import (render, T, R, C, L, P, TFIT, TBLOCK, fit, fit_block, tw, W,
                   PAPER, SOFT, CREAM, INDIGO, INDIGO_D, PERI, BLUE, AMBER,
                   TEAL, PLUM, GREEN, INK, GREY, GREY_L, RULE)

PHASE_TINT = ['#eef2fb', '#fdf4e8', '#eaf5f1', '#f6eef6']


def _arrow(x0, y0, x1, y1, col=INDIGO_D, sw=2.6):
    import math
    g = [L(x0, y0, x1, y1, col, sw)]
    a = math.atan2(y1 - y0, x1 - x0)
    for s in (2.6, -2.6):
        g.append(L(x1, y1, x1 - 13 * math.cos(a - 0.4 * s),
                   y1 - 13 * math.sin(a - 0.4 * s), col, sw))
    return ''.join(g)


def process_flow(title, stages, phases=None, sub='', alts=()):
    """stages = [(short label, one-line caption), ...] laid out in rows.

    phases = [(name, first index, last index), ...] draws a tinted band
    behind each group, which is how a long process is grouped into the
    three or four phases an answer should use as paragraphs.

    alts = indices of stages that are ALTERNATIVES to the stage before
    them rather than steps after it. A chain of arrows through two
    outcomes says that one follows the other, which is the opposite of
    what a branching process means, so an alternative gets no incoming
    arrow from its sibling: it is forked from the stage they share,
    around and below the sibling.
    """
    alts = set(alts)
    per = 4
    rows = [stages[i:i + per] for i in range(0, len(stages), per)]
    bw, gap, vgap = 176, 34, 72
    # The caption block starts 52px down and sets on a 19px line, so a box
    # of the old fixed 104px held two and a half lines and dropped the
    # third below its own border. Volume 6 unit 59 showed six boxes doing
    # it at once. Size every box to the longest caption in the figure.
    _lines = max(len(fit_block(c, bw - 22, 15)[0]) for _, c in stages)
    bh = max(104, 56 + 19 * _lines)
    top = 92 + (16 if sub else 0)
    h = int(top + len(rows) * (bh + vgap) + 24)
    g = [R(0, 0, W, h, PAPER)]
    g.append(TFIT(W / 2, 36, title, 23, W - 80, INDIGO, bold=True, anchor='middle'))
    if sub:
        g.append(TFIT(W / 2, 60, sub, 16, W - 120, GREY, anchor='middle'))
    pos = {}
    for ri, row in enumerate(rows):
        total = len(row) * bw + (len(row) - 1) * gap
        x = (W - total) / 2.0
        y = top + ri * (bh + vgap)
        for ci, (lab, cap) in enumerate(row):
            pos[ri * per + ci] = (x, y)
            x += bw + gap
    if phases:
        # A phase whose stages wrap onto a second row used to be drawn as
        # one rectangle round the whole bounding box. That box reaches
        # back under the row above, so it covered the previous phase's
        # band and painted over its label: Volume 1 unit 8 printed
        # "On the far". Draw one band per row instead, and draw every
        # band before any label so no band can cover a label at all.
        bands = []
        for pi, (nm, a, b) in enumerate(phases):
            byrow = {}
            for i in range(a, b + 1):
                if i in pos:
                    byrow.setdefault(pos[i][1], []).append(pos[i][0])
            first = True
            for y in sorted(byrow):
                xs = byrow[y]
                x0, x1 = min(xs) - 14, max(xs) + bw + 14
                y0, y1 = y - 30, y + bh + 14
                g.append(R(x0, y0, x1 - x0, y1 - y0,
                           PHASE_TINT[pi % 4], rx=12))
                if first:
                    bands.append((x0, y0, x1 - x0, nm))
                    first = False
        for x0, y0, wd, nm in bands:
            g.append(TFIT(x0 + 12, y0 + 20, nm, 16, wd - 24, GREY,
                          bold=True, anchor='start'))
    for i, (lab, cap) in enumerate(stages):
        x, y = pos[i]
        g.append(R(x, y, bw, bh, PAPER, INDIGO, 2, 10))
        g.append(R(x, y, bw, 30, INDIGO, rx=10))
        g.append(R(x, y + 20, bw, 10, INDIGO))
        g.append(TFIT(x + bw / 2, y + 21, '%d. %s' % (i + 1, lab), 15,
                      bw - 18, PAPER, bold=True, anchor='middle'))
        lns, sz = fit_block(cap, bw - 22, 15)
        blk, _, _ = TBLOCK(x + bw / 2, y + 52, None, sz, bw - 22, 19, INK,
                           anchor='middle', lines=lns)
        g.append(blk)
        if i + 1 < len(stages):
            nx, ny = pos[i + 1]
            if i + 1 in alts:
                # Fork: find the stage this alternative and its sibling
                # both follow, and route under the sibling into the
                # bottom edge of the alternative.
                p = i + 1
                while p in alts:
                    p -= 1
                p -= 1
                if p in pos and pos[p][1] == ny:
                    px, py = pos[p]
                    line = ny + bh + 28
                    g.append(L(px + bw / 2, py + bh + 4, px + bw / 2,
                               line, INDIGO_D, 2.6))
                    g.append(L(px + bw / 2, line, nx + bw / 2, line,
                               INDIGO_D, 2.6))
                    g.append(_arrow(nx + bw / 2, line, nx + bw / 2,
                                    ny + bh + 6))
            elif ny == y:
                g.append(_arrow(x + bw + 5, y + bh / 2, nx - 7, y + bh / 2))
            else:
                # Row wrap. A straight line from the end of one row to the
                # start of the next cuts diagonally across both phase bands
                # and the label sitting on the second one. Route it down the
                # gutter instead: the bands stop 14px below a row and start
                # 30px above the next, so the middle of the vertical gap is
                # clear of both.
                midy = y + bh + (vgap / 2.0)
                g.append(L(x + bw / 2, y + bh + 6, x + bw / 2, midy,
                           INDIGO_D, 2.6))
                g.append(L(x + bw / 2, midy, nx + bw / 2, midy,
                           INDIGO_D, 2.6))
                g.append(_arrow(nx + bw / 2, midy, nx + bw / 2, ny - 8))
    return render(''.join(g), W, h, PAPER)


def _edge(cx, cy, w, h, dx, dy, pad=6):
    """Where the ray from a box centre in direction (dx, dy) leaves the box."""
    if dx == 0 and dy == 0:
        return cx, cy
    hw, hh = w / 2.0 + pad, h / 2.0 + pad
    tx = hw / abs(dx) if dx else float('inf')
    ty = hh / abs(dy) if dy else float('inf')
    t = min(tx, ty)
    return cx + dx * t, cy + dy * t


def device_schematic(title, parts, flows, sub=''):
    """A device: labelled components, then the movement between them.

    parts = [(key, x, y, w, h, label)] on a 0-1 grid; flows = [(from, to,
    caption)]. The answer describes the parts first and the movement second,
    which is the structure the diagram should make obvious.
    """
    h = 460
    top = 92 + (16 if sub else 0)
    g = [R(0, 0, W, h, PAPER)]
    g.append(TFIT(W / 2, 36, title, 23, W - 80, INDIGO, bold=True, anchor='middle'))
    if sub:
        g.append(TFIT(W / 2, 60, sub, 16, W - 120, GREY, anchor='middle'))
    PX, PY, PW, PH = 60, top, W - 120, h - top - 40
    box = {}
    for key, x, y, w, ht, lab in parts:
        bx, by = PX + x * PW, PY + y * PH
        bw, bh = w * PW, ht * PH
        box[key] = (bx, by, bw, bh)
        g.append(R(bx, by, bw, bh, CREAM, INDIGO, 2, 10))
        lns, sz = fit_block(lab, bw - 20, 16)
        blk, _, _ = TBLOCK(bx + bw / 2, by + bh / 2 - 2, None, sz, bw - 20, 20,
                           INK, anchor='middle', lines=lns)
        g.append(blk)
    placed = []
    for a, b, cap in flows:
        ax, ay, aw, ah = box[a]
        bx, by, bw, bh = box[b]
        cx0, cy0 = ax + aw / 2, ay + ah / 2
        cx1, cy1 = bx + bw / 2, by + bh / 2
        x0, y0 = _edge(cx0, cy0, aw, ah, cx1 - cx0, cy1 - cy0, 6)
        x1, y1 = _edge(cx1, cy1, bw, bh, cx0 - cx1, cy0 - cy1, 9)
        g.append(_arrow(x0, y0, x1, y1, TEAL, 3))
        if cap:
            mx, my = (x0 + x1) / 2, (y0 + y1) / 2
            ddx, ddy = x1 - x0, y1 - y0
            ln = (ddx * ddx + ddy * ddy) ** 0.5 or 1.0
            nx, ny = -ddy / ln, ddx / ln
            if ny > 0:
                nx, ny = -nx, -ny
            cw = tw(cap, 14) + 14
            # A mostly vertical arrow has a horizontal normal, so an
            # offset of 15 left the patch sitting on the arrow and hid
            # it: clear the patch's own width there. Then take whichever
            # side is actually free, because off the plate on one side
            # and on top of a part on the other are both wrong. Score
            # both and keep the lesser.
            if True:
                # Push the patch clear along the normal by its own
                # extent in that direction, so a diagonal arrow is not
                # covered by the very label that names it.
                off = (cw / 2.0) * abs(nx) + 11.0 * abs(ny) + 8.0
                best, bx_, by_ = None, mx, my
                for sign in (1, -1):
                    cx_ = mx + nx * sign * off
                    cy_ = my + ny * sign * off
                    l, r = cx_ - cw / 2, cx_ + cw / 2
                    t_, b_ = cy_ - 11, cy_ + 11
                    pen = max(0.0, 12 - l) + max(0.0, r - (W - 12))
                    pen *= 22
                    rects = [(bxx, byy, bww, bhh)
                             for bxx, byy, bww, bhh in box.values()]
                    # Labels already placed count too: two captions in a
                    # crowded corner used to land on each other.
                    rects += placed
                    for bxx, byy, bww, bhh in rects:
                        ox = min(r, bxx + bww) - max(l, bxx)
                        oy = min(b_, byy + bhh) - max(t_, byy)
                        if ox > 0 and oy > 0:
                            pen += ox * oy
                    if best is None or pen < best:
                        best, bx_, by_ = pen, cx_, cy_
                mx, my = bx_, by_
            # The patch used to hang above its anchor point, so a label
            # on a short vertical arrow rode up into the box it came
            # from. Centre it on the midpoint instead.
            g.append(R(mx - cw / 2, my - 11, cw, 22, PAPER, None, 0, 5))
            g.append(TFIT(mx, my + 4, cap, 14, cw, TEAL, anchor='middle'))
            placed.append((mx - cw / 2, my - 11, cw, 22))
    return render(''.join(g), W, h, PAPER)


def cycle_flow(title, stages, sub=''):
    """A process with no natural start: stages placed round a circle."""
    import math
    h = 520
    g = [R(0, 0, W, h, PAPER)]
    g.append(TFIT(W / 2, 36, title, 23, W - 80, INDIGO, bold=True, anchor='middle'))
    if sub:
        g.append(TFIT(W / 2, 60, sub, 16, W - 120, GREY, anchor='middle'))
    cx, cy, r = W / 2.0, 300, 150
    n = len(stages)
    bw, bh = 196, 74
    pts = []
    for i in range(n):
        a = math.radians(-90 + 360.0 * i / n)
        pts.append((cx + r * 1.42 * math.cos(a), cy + r * 0.92 * math.sin(a)))
    for i in range(n):
        x0, y0 = pts[i]
        x1, y1 = pts[(i + 1) % n]
        dx, dy = x1 - x0, y1 - y0
        d = (dx * dx + dy * dy) ** 0.5 or 1
        g.append(_arrow(x0 + dx * 0.26, y0 + dy * 0.26,
                        x1 - dx * 0.26, y1 - dy * 0.26, PERI, 2.4))
    for i, lab in enumerate(stages):
        x, y = pts[i]
        g.append(R(x - bw / 2, y - bh / 2, bw, bh, PAPER, INDIGO, 2, 10))
        lns, sz = fit_block('%d. %s' % (i + 1, lab), bw - 20, 15)
        blk, _, _ = TBLOCK(x, y - 2, None, sz, bw - 20, 19, INK,
                           anchor='middle', lines=lns)
        g.append(blk)
    return render(''.join(g), W, h, PAPER)


_KIND = {'building': ('#cfd6ee', INDIGO_D), 'green': ('#d8ecd8', '#3f7a44'),
         'water': ('#cfe3f2', '#2f6b96'), 'road': ('#e8e8e8', '#9a9a9a'),
         'new': ('#f6ddc6', '#b06a28'), 'gone': ('#f0f0f0', '#b9b9b9')}


def site_map(title, panels, sub='', key=None):
    """Before-and-after maps. Each panel is (caption, objects, roads).

    objects = [(x, y, w, h, label, kind)] on a 0-1 grid inside the panel;
    roads = [(x0, y0, x1, y1, label)]. Two or three panels sit side by side,
    which is the shape the real paper uses.
    """
    n = len(panels)
    h = 500 if not key else 540
    top = 96 + (16 if sub else 0)
    g = [R(0, 0, W, h, PAPER)]
    g.append(TFIT(W / 2, 36, title, 23, W - 80, INDIGO, bold=True, anchor='middle'))
    if sub:
        g.append(TFIT(W / 2, 60, sub, 16, W - 120, GREY, anchor='middle'))
    gap = 26
    pw = (W - 80 - gap * (n - 1)) / float(n)
    ph = h - top - (96 if key else 56)
    for pi, (cap, objs, roads) in enumerate(panels):
        px = 40 + pi * (pw + gap)
        g.append(R(px, top, pw, ph, '#fbfbfd', GREY_L, 1.5, 8))
        g.append(TFIT(px + pw / 2, top - 12, cap, 17, pw - 12, INDIGO_D,
                      bold=True, anchor='middle'))
        rlabs = []
        for x0, y0, x1, y1, lab in roads:
            g.append(L(px + x0 * pw, top + y0 * ph, px + x1 * pw,
                       top + y1 * ph, '#d9d9d9', 11))
            if lab:
                rlabs.append((px + (x0 + x1) / 2 * pw,
                              top + (y0 + y1) / 2 * ph, lab))
        for x, y, w_, h_, lab, kind in objs:
            fill, edge = _KIND.get(kind, _KIND['building'])
            bx, by = px + x * pw, top + y * ph
            bw_, bh_ = w_ * pw, h_ * ph
            g.append(R(bx, by, bw_, bh_, fill, edge, 1.5, 5))
            lns, sz = fit_block(lab, bw_ - 8, 13.5, floor=0.66)
            blk, _, _ = TBLOCK(bx + bw_ / 2, by + bh_ / 2 - 1, None, sz,
                               bw_ - 8, 16, INK, anchor='middle', lines=lns)
            g.append(blk)
        # Road labels go on last, on the road itself, each on a small
        # paper patch. Setting them 11px clear of the band put them
        # under the row of buildings above whenever a road ran close to
        # one: Volume 1 unit 7 lost "New footpath" completely and clipped
        # "Brackwell Road" in both panels.
        for lx, ly, lab in rlabs:
            wd = tw(lab, 13) + 12
            g.append(R(lx - wd / 2, ly - 10, wd, 19, PAPER, rx=4))
            g.append(TFIT(lx, ly + 4, lab, 13, pw * 0.6, INK,
                          anchor='middle'))
        g.append(C(px + pw - 26, top + 26, 13, PAPER, GREY, 1.2))
        g.append(T(px + pw - 26, top + 31, 'N', 13, GREY, bold=True))
    if key:
        ky = h - 34
        x = 40
        for lab, kind in key:
            fill, edge = _KIND.get(kind, _KIND['building'])
            g.append(R(x, ky - 14, 18, 15, fill, edge, 1.2, 3))
            g.append(T(x + 26, ky - 1, lab, 15, INK, anchor='start'))
            x += 26 + tw(lab, 15) + 30
    return render(''.join(g), W, h, PAPER)
