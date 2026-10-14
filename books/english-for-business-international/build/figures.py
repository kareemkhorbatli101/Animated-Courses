#!/usr/bin/env python3
"""
figures.py — the book's illustrations, in the visual language of the source:
a pale blue ground, a thin border, dashed rule ticks under the title, a centred
navy title, rounded cards with coloured borders and gradient fills, flat figures
with round heads and coloured torsos, and a floor line near the foot.

Every illustration is 3000 px wide, like the source's.
"""
import os, math
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import (Rectangle, FancyBboxPatch, Circle, Ellipse,
                                Polygon, FancyArrow, Wedge)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "figures")
os.makedirs(OUT, exist_ok=True)

NAVY   = "#1F3864"
INK    = "#26303B"
GREY   = "#5A6472"
BLUE   = "#1F4E9C"
TEAL   = "#0E8074"
ORANGE = "#CC7A00"
GREEN  = "#0E7A52"
PURPLE = "#7B2D8E"
RED    = "#C0392B"
GROUND = "#F5F8FB"
FLOOR  = "#E8EEF5"
CARD   = "#FFFFFF"
CARD_B = "#F6F8FA"
LINE   = "#AFBAC6"

SKIN = ("#E8BE96", "#D9A273", "#C78B5E", "#F0CBA8", "#B57347")
HAIR = ("#2B2118", "#4A3A52", "#1F2A33", "#5C4033", "#111111")
SHIRT = (TEAL, BLUE, PURPLE, GREEN, ORANGE, "#1F6F8B")

W = 3000


FURNITURE = 340      # title + rule ticks, measured from the top of the canvas
SUBLINE = 85         # each of subtitle / subnote
FOOT = 210           # the floor band and the margin above it
H_MIN, H_MAX = 1560, 1870   # the source measures 1440-1870 at 3000 px wide


def panel(content_h, title, subtitle=None, subnote=None):
    """Canvas sized to its content, as the source's are: the drawing needs
    content_h px below the title furniture, and the panel is centred on it."""
    furniture = FURNITURE + (SUBLINE if subtitle else 0) + (SUBLINE if subnote else 0)
    total = max(H_MIN, min(H_MAX, furniture + content_h + FOOT))
    slack = max(0, total - (furniture + content_h + FOOT))
    fig = plt.figure(figsize=(W / 100, total / 100), dpi=100)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, W)
    ax.set_ylim(0, total)
    ax.axis("off")
    ax.add_patch(Rectangle((0, 0), W, total, color=GROUND, zorder=0))
    # the floor band and its rule
    ax.add_patch(Rectangle((0, 0), W, 150, color=FLOOR, zorder=0))
    ax.plot([0, W], [150, 150], color="#5A6472", lw=2, zorder=1)
    # border
    ax.add_patch(Rectangle((2, 2), W - 4, total - 4, fill=False,
                           edgecolor="#333B45", lw=3, zorder=6))
    ax.text(W / 2, total - 118, title, ha="center", va="center", fontsize=44,
            fontweight="bold", color=NAVY, zorder=5)
    # the dashed rule ticks the source puts under the title
    for i in range(6):
        x = 235 + i * 450
        ax.plot([x, x], [total - 162, total - 258], color=LINE, lw=2,
                ls=(0, (6, 8)), zorder=2)
    y = total - 300
    if subtitle:
        ax.text(W / 2, y, subtitle, ha="center", va="center", fontsize=32,
                fontweight="bold", color=NAVY, zorder=5)
        y -= 85
    if subnote:
        ax.text(W / 2, y, subnote, ha="center", va="center", fontsize=28,
                color=GREY, zorder=5)
        y -= 85
    ax._top = y - 40 - slack / 2
    return fig, ax


def save(fig, name):
    fig.savefig(os.path.join(OUT, name + ".png"), dpi=100)
    plt.close(fig)


def card(ax, x, y, w, h, title=None, lines=(), accent=BLUE, fs=30, lfs=24,
         title_colour=None, align="center"):
    """A rounded card with a coloured border and a pale gradient fill."""
    ax.add_patch(FancyBboxPatch((x + 7, y - 7), w, h,
                                boxstyle="round,pad=0,rounding_size=22",
                                facecolor="#DCE3EA", edgecolor="none", zorder=2))
    ax.add_patch(FancyBboxPatch((x, y), w, h,
                                boxstyle="round,pad=0,rounding_size=22",
                                facecolor=CARD, edgecolor=accent, lw=3.5, zorder=3))
    ax.add_patch(FancyBboxPatch((x + 6, y + 6), w - 12, h * 0.46,
                                boxstyle="round,pad=0,rounding_size=16",
                                facecolor=CARD_B, edgecolor="none", zorder=3.5))
    cx = x + w / 2 if align == "center" else x + 34
    ha = "center" if align == "center" else "left"
    block = (78 if title else 0) + 56 * len(lines)
    yy = y + h / 2 + block / 2 - (39 if title else 28)
    if title:
        ax.text(cx, yy, title, ha=ha, va="center", fontsize=fs, fontweight="bold",
                color=title_colour or accent, zorder=5)
        yy -= 78
    for l in lines:
        ax.text(cx, yy, l, ha=ha, va="center", fontsize=lfs, color=INK, zorder=5)
        yy -= 56


def person(ax, x, y, name, role, shirt=0, skin=0, hair=0, prop=None, scale=1.0):
    """A flat figure: round head, coloured torso, a prop on the chest, a shadow."""
    s = scale
    ax.add_patch(Ellipse((x, y - 10 * s), 230 * s, 40 * s, color="#D7DEE6", zorder=2))
    tor = [(x - 125 * s, y), (x - 105 * s, y + 175 * s), (x, y + 215 * s),
           (x + 105 * s, y + 175 * s), (x + 125 * s, y)]
    ax.add_patch(Polygon(tor, closed=True, facecolor=SHIRT[shirt % len(SHIRT)],
                         edgecolor="none", zorder=3))
    ax.plot([x, x], [y + 215 * s, y + 160 * s], color="#FFFFFF", lw=3 * s, zorder=4)
    ax.add_patch(Circle((x, y + 285 * s), 72 * s, facecolor=SKIN[skin % len(SKIN)],
                        edgecolor="none", zorder=3))
    ax.add_patch(Wedge((x, y + 290 * s), 74 * s, 10, 170,
                       facecolor=HAIR[hair % len(HAIR)], edgecolor="none", zorder=4))
    for dx in (-26, 26):
        ax.add_patch(Circle((x + dx * s, y + 292 * s), 8 * s, color="#2B2118", zorder=5))
    ax.add_patch(Wedge((x, y + 268 * s), 30 * s, 200, 340, width=5 * s,
                       facecolor="#8A5B3A", edgecolor="none", zorder=5))
    if prop:
        ax.add_patch(FancyBboxPatch((x - 42 * s, y + 70 * s), 84 * s, 66 * s,
                                    boxstyle="round,pad=0,rounding_size=8",
                                    facecolor="#FFFFFF", edgecolor="#C3CBD4",
                                    lw=2, zorder=5))
        for i in range(3):
            ax.plot([x - 28 * s, x + 28 * s], [y + 118 * s - i * 18 * s] * 2,
                    color="#AFBAC6", lw=2, zorder=6)
    ax.text(x, y - 70 * s, name, ha="center", va="center", fontsize=27 * s,
            fontweight="bold", color=NAVY, zorder=5)
    ax.text(x, y - 125 * s, role, ha="center", va="center", fontsize=23 * s,
            color=GREY, zorder=5)


def arrow(ax, x1, y1, x2, y2, colour=BLUE, lw=4):
    ax.annotate("", xy=(x2, y2), xytext=(x1, y1),
                arrowprops=dict(arrowstyle="-|>", color=colour, lw=lw,
                                shrinkA=0, shrinkB=0), zorder=5)


def pill(ax, x, y, w, h, text, colour=BLUE, fs=24, fill=None):
    ax.add_patch(FancyBboxPatch((x, y), w, h,
                                boxstyle="round,pad=0,rounding_size=%d" % (h / 2),
                                facecolor=fill or "#FFFFFF", edgecolor=colour,
                                lw=3, zorder=4))
    ax.text(x + w / 2, y + h / 2, text, ha="center", va="center", fontsize=fs,
            color=colour, fontweight="bold", zorder=5)


def flag_chip(ax, x, y, city, cur, colour=BLUE, w=430, h=150):
    """A branch chip: city above, currency below, in the branch's colour."""
    card(ax, x, y, w, h, title=city, lines=[cur], accent=colour, fs=27, lfs=23)
