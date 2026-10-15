#!/usr/bin/env python3
"""
figures.py — the book's illustrations, in the visual language decoded from the source:

* a white ground, a navy bold title top-left with a gold rule the width of the title,
  and an italic grey "Figure n.m · …" caption at the foot;
* rounded cards with a pale blue fill and a coloured cap bar;
* flat avatars (a navy disc head on a shoulder arc), timelines, flows and layouts;
* the unit banner is the one exception: a navy ground, a blue disc carrying the unit
  number, a white title, a pale subtitle and an italic light-blue grammar line, with a
  gold strip along the foot.

Every illustration is 3200 px wide, like the source's, and 840–1200 px tall.
"""
import os
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import (Rectangle, FancyBboxPatch, Circle, Wedge,
                                Polygon, Arc)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "figures")
os.makedirs(OUT, exist_ok=True)

NAVY  = "#1F3864"      # the banner ground, the dark cards, the avatars
TITLE = "#1F3A77"      # the panel title
BLUE  = "#2E74B5"      # the mid cap bar, the rules, the lines
LBLUE = "#5B9BD5"      # the light cap bar, the secondary fills
GOLD  = "#E0A430"      # the rule under the title, the banner foot, the accents
PALE  = "#EEF3F9"      # the card fill
PALE2 = "#DEE6EF"      # the inner panel fill
GREEN = "#35814E"      # the second half of a contrast, "do this"
RED   = "#C0392B"      # "do not do this"
GREY  = "#595959"      # the caption, the sub-labels
INK   = "#2A3340"
WHITE = "#FFFFFF"

W = 3200
TITLE_H = 272          # the top of the content, measured from the top of the canvas
CAP_H   = 160          # the caption band at the foot
H_MIN, H_MAX = 840, 1200


def _round40(v):
    return int(round(v / 40.0)) * 40


def panel(title, content_h, caption=None):
    """A white panel sized to its content, as the source's are."""
    total = max(H_MIN, min(H_MAX, _round40(TITLE_H + content_h + CAP_H)))
    fig = plt.figure(figsize=(W / 100, total / 100), dpi=100)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, W); ax.set_ylim(0, total); ax.axis("off")
    ax.add_patch(Rectangle((0, 0), W, total, color=WHITE, zorder=0))
    t = ax.text(85, total - 101, title, ha="left", va="center", fontsize=56,
                fontweight="bold", color=TITLE, zorder=5)
    fig.canvas.draw()
    bb = t.get_window_extent(renderer=fig.canvas.get_renderer())
    rule_w = max(360, bb.width)
    ax.plot([85, 85 + rule_w], [total - 170, total - 170], color=GOLD, lw=7,
            solid_capstyle="butt", zorder=4)
    if caption:
        ax.text(85, 67, caption, ha="left", va="center", fontsize=34,
                style="italic", color=GREY, zorder=5)
    ax._top = total - TITLE_H
    ax._bot = CAP_H
    ax._mid = (ax._top + ax._bot) / 2
    ax._total = total
    return fig, ax


def save(fig, name):
    fig.savefig(os.path.join(OUT, name + ".png"), dpi=100, facecolor=WHITE)
    plt.close(fig)


# ---------------------------------------------------------------- the pieces

def card(ax, x, y, w, h, cap=None, cap_colour=NAVY, fill=PALE, rounding=26):
    """A rounded card with an optional coloured cap bar along its top."""
    ax.add_patch(FancyBboxPatch((x, y), w, h,
                                boxstyle=f"round,pad=0,rounding_size={rounding}",
                                facecolor=fill, edgecolor="#D5DEE8", lw=2, zorder=2))
    if cap_colour:
        ax.add_patch(Rectangle((x + 8, y + h - 26), w - 16, 26,
                               facecolor=cap_colour, edgecolor="none", zorder=3))
    if cap:
        ax.add_patch(FancyBboxPatch((x, y + h - 112), w, 112,
                                    boxstyle="round,pad=0,rounding_size=20",
                                    facecolor=cap_colour, edgecolor="none", zorder=3))
        ax.add_patch(Rectangle((x, y + h - 112), w, 40, facecolor=cap_colour,
                               edgecolor="none", zorder=3))
        ax.text(x + w / 2, y + h - 56, cap, ha="center", va="center", fontsize=40,
                fontweight="bold", color=WHITE, zorder=5)


def avatar(ax, x, y, s=1.0, colour=NAVY):
    """The source's flat avatar: a disc head above a shoulder arc."""
    ax.add_patch(Circle((x, y + 92 * s), 56 * s, facecolor=colour,
                        edgecolor="none", zorder=4))
    ax.add_patch(Wedge((x, y - 4 * s), 86 * s, 0, 180, facecolor=colour,
                       edgecolor="none", zorder=4))


def label(ax, x, y, text, fs=38, colour=INK, bold=False, ha="center",
          italic=False):
    ax.text(x, y, text, ha=ha, va="center", fontsize=fs, color=colour,
            fontweight="bold" if bold else "normal",
            style="italic" if italic else "normal", zorder=5)


def chip(ax, x, y, w, h, text, fill=PALE, colour=TITLE, fs=34, bold=True):
    ax.add_patch(FancyBboxPatch((x, y), w, h,
                                boxstyle="round,pad=0,rounding_size=18",
                                facecolor=fill, edgecolor="none", zorder=3))
    ax.text(x + w / 2, y + h / 2, text, ha="center", va="center", fontsize=fs,
            fontweight="bold" if bold else "normal", color=colour, zorder=5)


def arrow(ax, x1, y1, x2, y2, colour=BLUE, lw=6):
    ax.annotate("", xy=(x2, y2), xytext=(x1, y1),
                arrowprops=dict(arrowstyle="-|>,head_width=0.38,head_length=0.7",
                                color=colour, lw=lw, shrinkA=0, shrinkB=0), zorder=5)


# ---------------------------------------------------------------- templates

def people(name, title, cards, caption):
    """Role cards with avatars — the source's 'Who's who at the branch'."""
    fig, ax = panel(title, 690, caption)
    n = len(cards)
    gap, m = 38, 85
    w = (W - 2 * m - gap * (n - 1)) / n
    h = 660
    y = ax._top - h
    caps = [NAVY, BLUE, LBLUE, NAVY, BLUE, LBLUE]
    for i, (role, person) in enumerate(cards):
        x = m + i * (w + gap)
        card(ax, x, y, w, h, cap_colour=caps[i % len(caps)])
        avatar(ax, x + w / 2, y + 300, s=1.0, colour=caps[i % len(caps)])
        label(ax, x + w / 2, y + 180, role, fs=38, colour=TITLE, bold=True)
        label(ax, x + w / 2, y + 108, person, fs=34, colour=GREY)
    save(fig, name)


def contrast(name, title, left, right, caption):
    """Two headed cards side by side — the source's grammar contrast."""
    fig, ax = panel(title, 700, caption)
    m, gap = 85, 70
    w = (W - 2 * m - gap) / 2
    h = 700
    y = ax._top - h
    for i, (head, colour, fill, quote, note, kind) in enumerate([left, right]):
        x = m + i * (w + gap)
        card(ax, x, y, w, h, cap=head, cap_colour=colour,
             fill=PALE if i == 0 else "#E8F2EA")
        cy = y + 330
        if kind == "clock":
            ax.add_patch(Circle((x + w * 0.27, cy), 108, facecolor=WHITE,
                                edgecolor=NAVY, lw=9, zorder=4))
            ax.plot([x + w * 0.27, x + w * 0.27], [cy, cy + 76], color=NAVY, lw=8, zorder=5)
            ax.plot([x + w * 0.27, x + w * 0.27 + 66], [cy, cy], color=BLUE, lw=8, zorder=5)
            avatar(ax, x + w * 0.66, cy - 60, colour=colour)
        elif kind == "pair":
            avatar(ax, x + w * 0.38, cy - 60, colour=colour)
            avatar(ax, x + w * 0.62, cy - 86, s=0.78, colour="#6B7480")
            ax.add_patch(Arc((x + w * 0.50, cy + 36), 180, 120, theta1=16, theta2=164,
                             edgecolor=colour, lw=6, zorder=5))
        else:
            avatar(ax, x + w / 2, cy - 60, colour=colour)
        label(ax, x + w / 2, y + 150, quote, fs=40, colour=INK)
        label(ax, x + w / 2, y + 84, note, fs=34, colour=GREY, italic=True)
    save(fig, name)


def timeline(name, title, points, caption):
    """Dots on a rule, the time above and what happens below."""
    fig, ax = panel(title, 420, caption)
    n = len(points)
    m = 180
    xs = [m + i * (W - 2 * m) / (n - 1) for i in range(n)]
    y = ax._mid - 20
    ax.plot([xs[0], xs[-1]], [y, y], color=BLUE, lw=11, zorder=3,
            solid_capstyle="round")
    for x, (when, what) in zip(xs, points):
        ax.add_patch(Circle((x, y), 38, facecolor=NAVY, edgecolor="none", zorder=4))
        ax.add_patch(Circle((x, y), 19, facecolor=WHITE, edgecolor="none", zorder=5))
        label(ax, x, y + 125, when, fs=42, colour=TITLE, bold=True)
        label(ax, x, y - 112, what, fs=34, colour=GREY)
    save(fig, name)


def layout(name, title, blocks, caption, note=None):
    """A bordered area with labelled boxes inside — a plan view."""
    fig, ax = panel(title, 640, caption)
    h = 620
    y = ax._top - h
    ax.add_patch(FancyBboxPatch((85, y), W - 170, h,
                                boxstyle="round,pad=0,rounding_size=26",
                                facecolor=PALE, edgecolor=NAVY, lw=4, zorder=2))
    for (bx, by, bw, bh, text, sub, fill) in blocks:
        X = 85 + bx * (W - 170); Y = y + by * h
        BW = bw * (W - 170); BH = bh * h
        fg = WHITE if fill in (NAVY, BLUE, GREEN) else TITLE
        ax.add_patch(FancyBboxPatch((X, Y), BW, BH,
                                    boxstyle="round,pad=0,rounding_size=16",
                                    facecolor=fill, edgecolor="none", zorder=3))
        label(ax, X + BW / 2, Y + BH / 2 + (26 if sub else 0), text, fs=38,
              colour=fg, bold=True)
        if sub:
            label(ax, X + BW / 2, Y + BH / 2 - 34, sub, fs=32, colour=fg)
    if note:
        ax.add_patch(Rectangle((140, y + 6), 300, 20, facecolor=GOLD,
                               edgecolor="none", zorder=4))
        label(ax, 290, y + 68, note, fs=36, colour=TITLE, bold=True)
    save(fig, name)


def flow(name, title, steps, caption, colours=None):
    """A chain of boxes joined by arrows — a process."""
    fig, ax = panel(title, 520, caption)
    n = len(steps)
    m, gap = 85, 76
    w = (W - 2 * m - gap * (n - 1)) / n
    h = 420
    y = ax._mid - h / 2
    cols = colours or [NAVY, BLUE, LBLUE, BLUE, NAVY][:n]
    for i, (head, body) in enumerate(steps):
        x = m + i * (w + gap)
        card(ax, x, y, w, h, cap=head, cap_colour=cols[i % len(cols)])
        label(ax, x + w / 2, y + 140, body, fs=34, colour=INK)
        if i < n - 1:
            arrow(ax, x + w + 14, y + h / 2, x + w + gap - 14, y + h / 2)
    save(fig, name)


def columns(name, title, left, right, caption):
    """Two lists side by side — safe/risky, do/don't, must/mustn't."""
    fig, ax = panel(title, 620, caption)
    m, gap = 85, 70
    w = (W - 2 * m - gap) / 2
    rows = max(len(left[1]), len(right[1]))
    h = 150 + rows * 92
    y = ax._top - h
    for i, ((head, items, colour), fill) in enumerate(
            [(left, PALE), (right, "#FBECEA" if right[2] == RED else "#E8F2EA")]):
        x = m + i * (w + gap)
        card(ax, x, y, w, h, cap=head, cap_colour=colour, fill=fill)
        yy = y + h - 180
        for it in items:
            ax.add_patch(Circle((x + 64, yy), 15, facecolor=colour,
                                edgecolor="none", zorder=4))
            label(ax, x + 110, yy, it, fs=35, colour=INK, ha="left")
            yy -= 92
    save(fig, name)


def bars(name, title, series, caption, unit=""):
    """A simple bar comparison, labelled above each bar."""
    fig, ax = panel(title, 560, caption)
    n = len(series)
    m = 180
    slot = (W - 2 * m) / n
    base = ax._bot + 60
    top = ax._top - 110
    mx = max(v for _, v, _ in series) or 1
    cols = [NAVY, BLUE, LBLUE, GREEN, GOLD]
    for i, (lab, val, sub) in enumerate(series):
        x = m + i * slot + slot * 0.22
        bw = slot * 0.56
        bh = (top - base) * val / mx
        ax.add_patch(FancyBboxPatch((x, base), bw, bh,
                                    boxstyle="round,pad=0,rounding_size=14",
                                    facecolor=cols[i % len(cols)], edgecolor="none",
                                    zorder=3))
        label(ax, x + bw / 2, base + bh + 52, f"{val}{unit}", fs=40, colour=TITLE, bold=True)
        label(ax, x + bw / 2, base - 48, lab, fs=36, colour=INK, bold=True)
        if sub:
            label(ax, x + bw / 2, base - 108, sub, fs=30, colour=GREY)
    ax.plot([m - 40, W - m + 40], [base, base], color="#AFBAC6", lw=5, zorder=2)
    save(fig, name)


def grid(name, title, cells, caption, cols=4):
    """A grid of labelled chips."""
    rows = (len(cells) + cols - 1) // cols
    fig, ax = panel(title, 60 + rows * 190, caption)
    m, gap = 85, 40
    w = (W - 2 * m - gap * (cols - 1)) / cols
    h = 160
    y0 = ax._top - 20
    accents = [NAVY, BLUE, LBLUE, GREEN, GOLD, BLUE]
    for i, (head, sub) in enumerate(cells):
        r, c = divmod(i, cols)
        x = m + c * (w + gap); y = y0 - (r + 1) * (h + 30)
        card(ax, x, y, w, h, cap_colour=accents[i % len(accents)])
        label(ax, x + w / 2, y + h / 2 + (24 if sub else 0), head, fs=36,
              colour=TITLE, bold=True)
        if sub:
            label(ax, x + w / 2, y + h / 2 - 34, sub, fs=30, colour=GREY)
    save(fig, name)


def scale(name, title, left_text, right_text, marks, caption):
    """A left-to-right scale with named markers — more/less, low/high."""
    fig, ax = panel(title, 460, caption)
    m = 200
    y = ax._mid
    ax.add_patch(FancyBboxPatch((m, y - 26), W - 2 * m, 52,
                                boxstyle="round,pad=0,rounding_size=26",
                                facecolor=PALE2, edgecolor="none", zorder=2))
    for i, (frac, text, sub) in enumerate(marks):
        x = m + frac * (W - 2 * m)
        ax.add_patch(Circle((x, y), 34, facecolor=[NAVY, BLUE, LBLUE, GREEN][i % 4],
                            edgecolor=WHITE, lw=6, zorder=4))
        label(ax, x, y + 120, text, fs=38, colour=TITLE, bold=True)
        if sub:
            label(ax, x, y - 108, sub, fs=32, colour=GREY)
    label(ax, m - 30, y, left_text, fs=34, colour=GREY, ha="right")
    label(ax, W - m + 30, y, right_text, fs=34, colour=GREY, ha="left")
    save(fig, name)


# ---------------------------------------------------------------- the banner

def banner(name, number, title, subtitle, grammar):
    """The unit banner: navy ground, numbered disc, gold foot strip."""
    total = 880
    fig = plt.figure(figsize=(W / 100, total / 100), dpi=100)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, W); ax.set_ylim(0, total); ax.axis("off")
    ax.add_patch(Rectangle((0, 0), W, total, color=NAVY, zorder=0))
    ax.add_patch(Rectangle((0, 0), W, 26, color=GOLD, zorder=3))

    ax.add_patch(Circle((300, 450), 195, facecolor=BLUE, edgecolor="none", zorder=2))
    ax.text(300, 540, "U N I T", ha="center", va="center", fontsize=40,
            fontweight="bold", color=WHITE, zorder=4)
    ax.text(300, 405, str(number), ha="center", va="center", fontsize=96,
            fontweight="bold", color=WHITE, zorder=4)

    ax.text(600, 540, title, ha="left", va="center", fontsize=74,
            fontweight="bold", color=WHITE, zorder=4)
    ax.text(600, 420, subtitle, ha="left", va="center", fontsize=46,
            color="#D9E2F3", zorder=4)
    ax.text(600, 330, f"Grammar focus: {grammar}", ha="left", va="center",
            fontsize=40, style="italic", color="#8FB4DD", zorder=4)

    # the colonnade motif on the right, with two coins above it
    ax.add_patch(Rectangle((2270, 290), 820, 26, facecolor="#3A5A8C",
                           edgecolor="none", zorder=2))
    for i in range(4):
        x = 2300 + i * 200
        ax.add_patch(FancyBboxPatch((x, 316), 150, 290,
                                    boxstyle="round,pad=0,rounding_size=74",
                                    facecolor="#36568A", edgecolor="none", zorder=2))
        ax.add_patch(Rectangle((x, 316), 150, 180, facecolor="#36568A",
                               edgecolor="none", zorder=2))
    for cx, cy, r in ((2960, 760, 46), (3040, 700, 56)):
        ax.add_patch(Circle((cx, cy), r, facecolor=GOLD, edgecolor="#C98F22",
                            lw=5, zorder=3))
        ax.text(cx, cy, "$", ha="center", va="center", fontsize=r * 0.68,
                fontweight="bold", color=NAVY, zorder=4)
    save(fig, name)


def cover(name):
    """The A4 cover, in the source's two-band composition."""
    w, h = 2480, 3508
    fig = plt.figure(figsize=(w / 100, h / 100), dpi=100)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, w); ax.set_ylim(0, h); ax.axis("off")
    ax.add_patch(Rectangle((0, 0), w, h, color=WHITE, zorder=0))
    band = 1300
    ax.add_patch(Rectangle((0, band), w, h - band, color=NAVY, zorder=1))
    ax.add_patch(Rectangle((0, band - 16), w, 16, color=GOLD, zorder=2))

    ax.add_patch(Circle((300, h - 345), 145, facecolor=GOLD, edgecolor="none", zorder=3))
    ax.text(300, h - 300, "CEFR", ha="center", va="center", fontsize=36,
            fontweight="bold", color=NAVY, zorder=4)
    ax.text(300, h - 375, "B1", ha="center", va="center", fontsize=66,
            fontweight="bold", color=NAVY, zorder=4)

    ax.text(w / 2, h - 560, "ENGLISH FOR", ha="center", va="center", fontsize=86,
            fontweight="bold", color=WHITE, zorder=4)
    ax.text(w / 2, h - 710, "BANKING & FINANCE", ha="center", va="center",
            fontsize=86, fontweight="bold", color=WHITE, zorder=4)
    ax.plot([760, 1720], [h - 820, h - 820], color=GOLD, lw=6, zorder=4)
    ax.text(w / 2, h - 905, "A Practical Course for Banking Professionals",
            ha="center", va="center", fontsize=50, color="#D9E2F3", zorder=4)

    # the colonnade and the rising line
    ax.add_patch(Rectangle((240, 1480), 2000, 24, facecolor="#4D74AD",
                           edgecolor="none", zorder=2))
    for i in range(5):
        x = 260 + i * 390
        ax.add_patch(FancyBboxPatch((x, 1504), 330, 560,
                                    boxstyle="round,pad=0,rounding_size=162",
                                    facecolor="#36568A", edgecolor="none", zorder=2))
        ax.add_patch(Rectangle((x, 1504), 330, 380, facecolor="#36568A",
                               edgecolor="none", zorder=2))
    pts = [(240, 2000), (640, 2110), (1040, 2030), (1440, 2320),
           (1840, 2400), (2240, 2640)]
    ax.plot([p[0] for p in pts], [p[1] for p in pts], color=GOLD, lw=12, zorder=4)
    for px, py in pts[1::2]:
        ax.add_patch(Circle((px, py), 26, facecolor=GOLD, edgecolor="none", zorder=5))
    for cx, cy, r in ((2070, 2240, 42), (2180, 2310, 62), (2290, 2240, 42)):
        ax.add_patch(Circle((cx, cy), r, facecolor=GOLD, edgecolor="#C98F22",
                            lw=5, zorder=5))
        ax.text(cx, cy, "$", ha="center", va="center", fontsize=r * 0.66,
                fontweight="bold", color=NAVY, zorder=6)

    ax.text(w / 2, 1060, "Student’s Book", ha="center", va="center", fontsize=76,
            fontweight="bold", color=TITLE, zorder=4)
    ax.text(w / 2, 950, "Ten workplace units · Operator & Practitioner tracks",
            ha="center", va="center", fontsize=46, color=GREY, zorder=4)
    chips = ["Real banking scenarios", "Can-do checklists", "Branch cases worldwide"]
    cw = [560, 480, 620]
    x = (w - sum(cw) - 60) / 2
    for t, ww in zip(chips, cw):
        chip(ax, x, 760, ww, 110, t, fill="#DEE9F6", colour=TITLE, fs=36)
        x += ww + 30
    ax.plot([320, 2160], [540, 540], color="#C9D2DC", lw=4, zorder=3)
    ax.text(w / 2, 430, "Harbour Bank Learning Series", ha="center", va="center",
            fontsize=62, fontweight="bold", color=TITLE, zorder=4)
    ax.text(w / 2, 330, "English for Specific Purposes · Banking Series",
            ha="center", va="center", fontsize=44, color=GREY, zorder=4)
    save(fig, name)


def backcover(name):
    """The A4 back cover: the blurb, what's inside, and the CEFR disc."""
    w, h = 2480, 3508
    fig = plt.figure(figsize=(w / 100, h / 100), dpi=100)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, w); ax.set_ylim(0, h); ax.axis("off")
    ax.add_patch(Rectangle((0, 0), w, h, color=NAVY, zorder=0))
    ax.add_patch(FancyBboxPatch((170, 150), w - 340, h - 320,
                                boxstyle="round,pad=0,rounding_size=60",
                                facecolor="#27477A", edgecolor="none", zorder=1))
    ax.text(w / 2, h - 410, "English for Banking & Finance", ha="center",
            va="center", fontsize=72, fontweight="bold", color=WHITE, zorder=4)
    ax.text(w / 2, h - 530, "Level B1 · International Edition", ha="center",
            va="center", fontsize=50, fontweight="bold", color=GOLD, zorder=4)
    ax.plot([320, 2160], [h - 630, h - 630], color="#6E89B5", lw=4, zorder=3)

    blurb = ["A practical, workplace-focused English course for people who",
             "work in banks and financial services anywhere in the world.",
             "Every unit builds the language of a real banking job — from",
             "serving customers and handling transactions to security,",
             "compliance, saving and corporate banking — all at a clear,",
             "achievable B1 level."]
    y = h - 760
    for l in blurb:
        ax.text(300, y, l, ha="left", va="center", fontsize=48, color="#E3EAF5", zorder=4)
        y -= 96
    y -= 60
    ax.text(300, y, "What’s inside", ha="left", va="center", fontsize=60,
            fontweight="bold", color=WHITE, zorder=4)
    y -= 110
    for l in ["10 units, each a complete workplace topic",
              "Two tracks: Operator (new staff) & Practitioner (experienced)",
              "40 readings and 40 listenings with inline scripts",
              "20 case studies, global and branch-by-branch",
              "Grammar, speaking, writing and can-do checklists in every unit"]:
        ax.add_patch(Circle((330, y), 16, facecolor=GOLD, edgecolor="none", zorder=4))
        ax.text(390, y, l, ha="left", va="center", fontsize=46, color="#E3EAF5", zorder=4)
        y -= 100
    y -= 60
    ax.add_patch(FancyBboxPatch((300, y - 230), 1420, 290,
                                boxstyle="round,pad=0,rounding_size=28",
                                facecolor="none", edgecolor="#6E89B5", lw=4, zorder=3))
    ax.text(360, y - 10, "About this edition", ha="left", va="center", fontsize=46,
            fontweight="bold", color=GOLD, zorder=4)
    ax.text(360, y - 95, "Harbour Bank, its branches and its staff are invented for",
            ha="left", va="center", fontsize=40, color="#E3EAF5", zorder=4)
    ax.text(360, y - 170, "practice. The banking is true and general.", ha="left",
            va="center", fontsize=40, color="#E3EAF5", zorder=4)
    ax.add_patch(Circle((2010, y - 85), 155, facecolor=GOLD, edgecolor="none", zorder=4))
    ax.text(2010, y - 40, "CEFR", ha="center", va="center", fontsize=40,
            fontweight="bold", color=NAVY, zorder=5)
    ax.text(2010, y - 125, "B1", ha="center", va="center", fontsize=72,
            fontweight="bold", color=NAVY, zorder=5)
    ax.text(2160, 330, "Banking Series", ha="right", va="center", fontsize=48,
            fontweight="bold", color="#4C6C9E", zorder=4)
    save(fig, name)
