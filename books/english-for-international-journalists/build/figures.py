#!/usr/bin/env python3
"""
figures.py — the book's illustrations, in the visual language of the source:
a navy title bar, a pale ground, flat vector shapes, one idea per picture.

Every figure is 1500 px wide, like the source's.
"""
import os, math
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import (Rectangle, FancyBboxPatch, Circle, Wedge,
                                Polygon, FancyArrow, Ellipse)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "figures")
os.makedirs(OUT, exist_ok=True)

NAVY = "#1A2733"
INK = "#20303B"
RED = "#C0392B"
GOLD = "#B8862F"
GOLD_L = "#D2A94E"
BLUE = "#2E6E8E"
TEAL = "#1F7A6D"
GREEN = "#3B7D6F"
PURPLE = "#7C5BBF"
BROWN = "#A8451E"
GROUND = "#F1F4F5"
PANEL = "#FFFFFF"
LINE = "#D9D2C2"
GREY = "#5C6873"
SKIN = ("#E8BE96", "#D9A273", "#C78B5E", "#F0CBA8")
HAIR = ("#2B2118", "#4A3A52", "#1F2A33", "#5C4033")

W = 1500
TITLE_H = 62


def panel(h, title, footer=None):
    """Create a figure canvas h px tall (plus title bar) and return (fig, ax)."""
    total = TITLE_H + h + (54 if footer else 0)
    fig = plt.figure(figsize=(W / 100, total / 100), dpi=100)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, W)
    ax.set_ylim(0, total)
    ax.axis("off")
    ax.add_patch(Rectangle((0, 0), W, total, color=GROUND, zorder=0))
    ax.add_patch(Rectangle((0, total - TITLE_H), W, TITLE_H, color=NAVY, zorder=1))
    ax.text(30, total - TITLE_H / 2, title, color="white", fontsize=21,
            fontweight="bold", family="serif", va="center", zorder=2)
    if footer:
        ax.text(W / 2, 27, footer, color=INK, fontsize=15, ha="center",
                va="center", zorder=2)
    ax._top = total - TITLE_H
    return fig, ax


def save(fig, name):
    fig.savefig(os.path.join(OUT, name + ".png"), dpi=100)
    plt.close(fig)


# ------------------------------------------------------------------ primitives

def avatar(ax, x, y, s=1.0, skin=0, hair=0, shirt=BLUE, scarf=False,
           name=None, role=None):
    """A flat head-and-shoulders glyph, as in the source's cast boards."""
    hw, hh = 46 * s, 56 * s
    if scarf:
        ax.add_patch(FancyBboxPatch((x - hw, y - hh * .75), 2 * hw, hh * 1.65,
                                    boxstyle="round,pad=0,rounding_size=%.1f" % (22 * s),
                                    color=HAIR[hair % len(HAIR)], zorder=3))
        ax.add_patch(Ellipse((x, y + 4 * s), 1.42 * hw, 1.62 * hh,
                             color=SKIN[skin % len(SKIN)], zorder=4))
    else:
        ax.add_patch(Wedge((x, y + 16 * s), 44 * s, 0, 180,
                           color=HAIR[hair % len(HAIR)], zorder=3))
        ax.add_patch(Ellipse((x, y), 1.55 * hw, 1.62 * hh,
                             color=SKIN[skin % len(SKIN)], zorder=4))
        ax.add_patch(Wedge((x, y + 18 * s), 42 * s, 10, 170,
                           color=HAIR[hair % len(HAIR)], zorder=5))
    ax.add_patch(Circle((x - 15 * s, y + 6 * s), 5 * s, color=NAVY, zorder=6))
    ax.add_patch(Circle((x + 15 * s, y + 6 * s), 5 * s, color=NAVY, zorder=6))
    th = [(x + 13 * s * math.cos(a), y - 16 * s + 7 * s * math.sin(a))
          for a in [math.pi * 1.08, math.pi * 1.25, math.pi * 1.5,
                    math.pi * 1.75, math.pi * 1.92]]
    ax.plot([p[0] for p in th], [p[1] for p in th], color=RED, lw=3 * s, zorder=6)
    ax.add_patch(Wedge((x, y - 84 * s), 54 * s, 0, 180, color=shirt, zorder=2))
    if name:
        ax.text(x, y - 108 * s, name, ha="center", va="top", fontsize=17 * s,
                fontweight="bold", color=NAVY, zorder=7)
    if role:
        ax.text(x, y - 134 * s, role, ha="center", va="top", fontsize=14 * s,
                color=GREY, zorder=7)


def card(ax, x, y, w, h, title=None, lines=(), fill=PANEL, edge=LINE,
         accent=None, title_colour=NAVY, fs=17, align="left"):
    ax.add_patch(FancyBboxPatch((x, y), w, h,
                                boxstyle="round,pad=0,rounding_size=10",
                                facecolor=fill, edgecolor=edge, lw=2, zorder=2))
    if accent:
        ax.add_patch(Rectangle((x, y), 9, h, color=accent, zorder=3))
    cx = x + 22 if align == "left" else x + w / 2
    ha = "left" if align == "left" else "center"
    ty = y + h - 26
    if title:
        ax.text(cx, ty, title, ha=ha, va="top", fontsize=fs + 2,
                fontweight="bold", color=title_colour, zorder=4)
        ty -= 34
    for ln in lines:
        ax.text(cx, ty, ln, ha=ha, va="top", fontsize=fs, color=INK, zorder=4)
        ty -= 27


def pill(ax, x, y, w, h, text, fill=RED, fg="white", fs=19):
    ax.add_patch(FancyBboxPatch((x, y), w, h,
                                boxstyle="round,pad=0,rounding_size=8",
                                facecolor=fill, edgecolor="none", zorder=3))
    ax.text(x + w / 2, y + h / 2, text, ha="center", va="center",
            fontsize=fs, fontweight="bold", color=fg, zorder=4)


def arrow(ax, x1, y1, x2, y2, colour=GOLD, lw=4):
    ax.annotate("", xy=(x2, y2), xytext=(x1, y1), zorder=3,
                arrowprops=dict(arrowstyle="-|>", color=colour, lw=lw,
                                shrinkA=0, shrinkB=0, mutation_scale=22))


def phone(ax, x, y, w, h, lines, header="LIVE", header_fill=RED):
    ax.add_patch(FancyBboxPatch((x, y), w, h,
                                boxstyle="round,pad=0,rounding_size=22",
                                facecolor=PANEL, edgecolor=NAVY, lw=3, zorder=2))
    ax.add_patch(FancyBboxPatch((x + 14, y + h - 72), w - 28, 54,
                                boxstyle="round,pad=0,rounding_size=8",
                                facecolor=header_fill, edgecolor="none", zorder=3))
    ax.text(x + w / 2, y + h - 45, header, ha="center", va="center",
            fontsize=18, fontweight="bold", color="white", zorder=4)
    ty = y + h - 100
    for ln, bold in lines:
        ax.text(x + 28, ty, ln, ha="left", va="top", fontsize=16,
                fontweight="bold" if bold else "normal", color=INK, zorder=4)
        ty -= 30


def frontpage(ax, x, y, w, h, masthead="ATLAS WIRE", headline="A crossing comes home",
              labels=True):
    ax.add_patch(Rectangle((x, y), w, h, facecolor=PANEL, edgecolor=NAVY,
                           lw=3, zorder=2))
    ax.text(x + w / 2, y + h - 36, masthead, ha="center", va="center",
            fontsize=25, fontweight="bold", family="serif", color=NAVY, zorder=3)
    ax.plot([x + 18, x + w - 18], [y + h - 62, y + h - 62], color=NAVY, lw=2, zorder=3)
    ax.text(x + 24, y + h - 96, headline, ha="left", va="center", fontsize=23,
            fontweight="bold", family="serif", color=NAVY, zorder=3)
    ax.text(x + 24, y + h - 126, "By Mira Sandoval, Atlas Wire", ha="left",
            va="center", fontsize=14, color=RED, zorder=3, style="italic")
    ax.add_patch(Rectangle((x + 24, y + 86), w * .44, h * .40,
                           facecolor="#CBD8DD", edgecolor=LINE, zorder=3))
    ax.text(x + 24 + w * .22, y + 72, "caption under the photo", ha="center",
            va="center", fontsize=13, color=GREY, style="italic", zorder=3)
    cx = x + 36 + w * .46
    for i in range(14):
        ax.plot([cx, cx + w * .44], [y + h - 160 - i * 16] * 2,
                color="#C9D2D6", lw=4, zorder=3)
    if labels:
        for ty, lab in ((h - 36, "masthead"), (h - 96, "headline"),
                        (h - 126, "byline"), (72, "caption")):
            ax.text(x + w + 16, y + ty, "← " + lab, ha="left", va="center",
                    fontsize=15, color=RED, fontweight="bold", zorder=4)


def bridge(ax, cx, cy, w=760, span_colour=NAVY, closed=False, people=0):
    """The Kalina crossing: two banks, the river Vara, and the bridge over it."""
    gw = 1500
    ax.add_patch(Rectangle((0, cy - 150), gw, 120, color="#A9C6D4", zorder=1))
    for i in range(4):
        ax.plot([120 + i * 340, 300 + i * 340], [cy - 110 + (i % 2) * 34] * 2,
                color="#BFD6E0", lw=5, zorder=2)
    ax.add_patch(Rectangle((0, cy - 160), cx - w / 2 + 30, 150, color="#C3CFAF", zorder=3))
    ax.add_patch(Rectangle((cx + w / 2 - 30, cy - 160), gw, 150, color="#C3CFAF", zorder=3))
    for px in (cx - w / 4, cx + w / 4):
        ax.add_patch(Rectangle((px - 18, cy - 150), 36, 150, color="#8FA3AE", zorder=4))
    ax.add_patch(Rectangle((cx - w / 2 - 40, cy - 14), w + 80, 22,
                           color=span_colour, zorder=5))
    rail_y = cy + 62
    ax.plot([cx - w / 2 - 40, cx + w / 2 + 40], [rail_y] * 2,
            color=span_colour, lw=6, zorder=5)
    for i in range(13):
        px = cx - w / 2 - 30 + i * (w + 60) / 12
        ax.plot([px, px], [cy + 8, rail_y], color=span_colour, lw=3, zorder=5)
    if closed:
        ax.add_patch(Rectangle((cx - 110, cy + 8), 220, 58, color=RED, zorder=7))
        ax.text(cx, cy + 37, "CLOSED", ha="center", va="center", fontsize=20,
                fontweight="bold", color="white", zorder=8)
    for i in range(people):
        px = cx - w / 2 + 70 + i * (w - 140) / max(people - 1, 1)
        col = [BLUE, RED, GREEN, GOLD, PURPLE, TEAL][i % 6]
        ax.add_patch(Wedge((px, cy + 8), 24, 0, 180, color=col, zorder=6))
        ax.add_patch(Circle((px, cy + 42), 13, color=SKIN[i % 4], zorder=7))
        ax.add_patch(Wedge((px, cy + 46), 14, 0, 180,
                           color=HAIR[i % 4], zorder=8))


def timeline(ax_name, title, points, footer):
    """A dated timeline — the honest shape for 'what has changed'."""
    import matplotlib.pyplot as plt
    fig, ax = panel(380, title, footer)
    top = ax._top
    y = top - 190
    ax.plot([90, 1410], [y, y], color=NAVY, lw=5, zorder=3)
    n = len(points)
    for i, (date, label) in enumerate(points):
        x = 150 + i * (1200 / (n - 1))
        col = [RED, BLUE, GOLD, GREEN, PURPLE][i % 5]
        ax.add_patch(Circle((x, y), 17, facecolor=col, edgecolor=GROUND, lw=4, zorder=4))
        ax.text(x, y + 40, date, ha="center", va="bottom", fontsize=20,
                fontweight="bold", color=col, zorder=5)
        words, line, lines = label.split(), "", []
        for w in words:
            if len(line + " " + w) > 18:
                lines.append(line); line = w
            else:
                line = (line + " " + w).strip()
        lines.append(line)
        for j, ln in enumerate(lines):
            ax.text(x, y - 34 - j * 24, ln, ha="center", va="top", fontsize=14,
                    color=INK, zorder=5)
    save(fig, ax_name)
