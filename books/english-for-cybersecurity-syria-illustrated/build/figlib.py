#!/usr/bin/env python3
"""Figure archetypes for the illustrated book.

Flat vector line-art on a 1440 x 360-480 canvas, drawn in the source's own
visual language: navy strokes, pale blue fills, bold navy labels with leader
lines, and one caption rendered inside the image.  Every text placement goes
through T(), which records its pixel extent so overflow and collisions can be
checked mechanically instead of by eye.
"""
import math, os
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import (FancyBboxPatch, Rectangle, Circle, Polygon,
                                FancyArrow, Wedge, Arc, Ellipse)

NAVY = "#1F3864"
NAVY2 = "#223A5E"
PALE = "#E8EEF8"
PALE2 = "#F2F6FC"
GREY = "#C8CDD2"
MGREY = "#9AA3AC"
BLUE = "#1565C0"
RED = "#C0392B"
GREEN = "#2E7D5B"
WHITE = "#FFFFFF"

DPI = 100
W = 1440


class Canvas:
    """A fixed-pixel drawing surface with text-extent bookkeeping."""

    CAPBAND = 46

    def __init__(self, h=400, cap=True):
        # Without an in-image caption the caption strip is simply not drawn,
        # so no figure carries a band of empty white at its foot.
        self.h = h if cap else h - self.CAPBAND
        self.y0 = 0 if cap else self.CAPBAND
        self.fig = plt.figure(figsize=(W / DPI, self.h / DPI), dpi=DPI)
        self.ax = self.fig.add_axes([0, 0, 1, 1])
        self.ax.set_xlim(0, W)
        self.ax.set_ylim(self.y0, h)
        self.ax.axis("off")
        self.fig.patch.set_facecolor(WHITE)
        self.texts = []
        self.low = h          # the lowest point any drawn shape reaches

    # ----------------------------------------------------------- primitives
    def T(self, x, y, s, size=21, color=NAVY, weight="normal", ha="center",
          va="center", style="normal", maxw=None):
        """Place text; shrink until it fits maxw pixels.  Records the extent."""
        t = self.ax.text(x, y, s, fontsize=size, color=color, fontweight=weight,
                         ha=ha, va=va, style=style)
        if maxw:
            r = self.fig.canvas.get_renderer()
            for _ in range(28):
                bb = t.get_window_extent(renderer=r)
                if bb.width <= maxw or t.get_fontsize() <= 8:
                    break
                t.set_fontsize(t.get_fontsize() - 0.5)
        self.texts.append(t)
        return t

    def _sink(self, y):
        self.low = min(self.low, y)

    def panel(self, x, y, w, h, fill=PALE, edge=NAVY, lw=2.2, r=18):
        self._sink(y)
        self.ax.add_patch(FancyBboxPatch((x + r, y + r), w - 2 * r, h - 2 * r,
                                         boxstyle=f"round,pad={r}",
                                         facecolor=fill, edgecolor=edge, lw=lw))

    def rect(self, x, y, w, h, fill=WHITE, edge=NAVY, lw=2.0):
        self._sink(y)
        self.ax.add_patch(Rectangle((x, y), w, h, facecolor=fill, edgecolor=edge, lw=lw))

    def circ(self, x, y, r, fill=PALE, edge=NAVY, lw=2.0):
        self._sink(y - r)
        self.ax.add_patch(Circle((x, y), r, facecolor=fill, edgecolor=edge, lw=lw))

    def line(self, x1, y1, x2, y2, color=NAVY, lw=1.8, ls="-"):
        self._sink(min(y1, y2))
        self.ax.plot([x1, x2], [y1, y2], color=color, lw=lw, ls=ls,
                     solid_capstyle="round")

    def arrow(self, x1, y1, x2, y2, color=NAVY, lw=2.0):
        self.ax.annotate("", xy=(x2, y2), xytext=(x1, y1),
                         arrowprops=dict(arrowstyle="-|>", color=color, lw=lw,
                                         shrinkA=0, shrinkB=0,
                                         mutation_scale=18))

    def answer_line(self, x, y, w):
        self.line(x, y, x + w, y, color=NAVY, lw=1.6)

    def caption(self, s):
        """An in-image line.  Used only where it adds an instruction or a
        legend — it never repeats the Figure caption printed beneath."""
        if not s:
            return
        self.T(W / 2, 26, s, size=20, color=NAVY2, maxw=W - 80)

    # --------------------------------------------------------------- icons
    def person(self, x, y, s=1.0, fill=PALE, label=None, label_size=20):
        """Head + shoulders, centred on x, standing on y."""
        hr = 26 * s
        self.circ(x, y + 96 * s, hr, fill=fill)
        body = [(x - 44 * s, y), (x - 34 * s, y + 62 * s), (x - 14 * s, y + 74 * s),
                (x + 14 * s, y + 74 * s), (x + 34 * s, y + 62 * s), (x + 44 * s, y)]
        self.ax.add_patch(Polygon(body, closed=True, facecolor=fill,
                                  edgecolor=NAVY, lw=2.0))
        if label:
            self.T(x, y - 24 * s, label, size=label_size, weight="bold", maxw=190 * s)

    def monitor(self, x, y, w=130, h=92, fill=PALE):
        self.rect(x - w / 2, y, w, h, fill=fill)
        self.rect(x - w / 2 + 10, y + 10, w - 20, h - 20, fill=WHITE, lw=1.2)
        self.rect(x - 12, y - 16, 24, 16, fill=GREY, lw=1.6)
        self.rect(x - 40, y - 24, 80, 10, fill=GREY, lw=1.6)

    def tower(self, x, y, w=62, h=120, fill=PALE):
        self.rect(x - w / 2, y, w, h, fill=fill)
        for i in range(3):
            self.line(x - w / 2 + 12, y + h - 20 - i * 14, x + w / 2 - 12,
                      y + h - 20 - i * 14, color=MGREY, lw=2.0)
        self.circ(x + w / 2 - 16, y + 22, 7, fill=WHITE, lw=1.4)

    def server(self, x, y, w=96, h=130, fill=PALE):
        self.rect(x - w / 2, y, w, h, fill=fill)
        for i in range(4):
            yy = y + h - 24 - i * 26
            self.line(x - w / 2 + 10, yy, x + w / 2 - 28, yy, color=MGREY, lw=2.4)
            self.circ(x + w / 2 - 16, yy, 5, fill=GREEN, edge=NAVY, lw=1.0)

    def laptop(self, x, y, w=140, h=84, fill=PALE):
        self.rect(x - w / 2 + 14, y + 16, w - 28, h - 16, fill=fill)
        self.ax.add_patch(Polygon([(x - w / 2, y), (x + w / 2, y),
                                   (x + w / 2 - 14, y + 16), (x - w / 2 + 14, y + 16)],
                                  closed=True, facecolor=GREY, edgecolor=NAVY, lw=2.0))

    def lock(self, x, y, s=1.0, fill=PALE):
        self.rect(x - 30 * s, y, 60 * s, 46 * s, fill=fill)
        self.ax.add_patch(Arc((x, y + 46 * s), 44 * s, 44 * s, theta1=0,
                              theta2=180, edgecolor=NAVY, lw=3.0))
        self.circ(x, y + 22 * s, 6 * s, fill=NAVY, edge=NAVY)

    def shield(self, x, y, s=1.0, fill=PALE):
        pts = [(x - 34 * s, y + 70 * s), (x, y + 82 * s), (x + 34 * s, y + 70 * s),
               (x + 30 * s, y + 20 * s), (x, y), (x - 30 * s, y + 20 * s)]
        self.ax.add_patch(Polygon(pts, closed=True, facecolor=fill,
                                  edgecolor=NAVY, lw=2.2))

    def envelope(self, x, y, w=84, h=56, fill=PALE):
        self.rect(x - w / 2, y, w, h, fill=fill)
        self.line(x - w / 2, y + h, x, y + h / 2.2)
        self.line(x + w / 2, y + h, x, y + h / 2.2)

    def phone(self, x, y, w=50, h=88, fill=PALE):
        self.ax.add_patch(FancyBboxPatch((x - w / 2 + 8, y + 8), w - 16, h - 16,
                                         boxstyle="round,pad=8", facecolor=fill,
                                         edgecolor=NAVY, lw=2.0))
        self.line(x - w / 2 + 10, y + h - 16, x + w / 2 - 10, y + h - 16,
                  color=MGREY, lw=1.6)

    def usb(self, x, y, w=76, h=34, fill=PALE):
        self.rect(x - w / 2, y, w * 0.68, h, fill=fill)
        self.rect(x - w / 2 + w * 0.68, y + h * 0.22, w * 0.32, h * 0.56,
                  fill=GREY, lw=1.6)

    def disk(self, x, y, r=34, fill=PALE):
        self.ax.add_patch(Ellipse((x, y), r * 2, r * 0.8, facecolor=fill,
                                  edgecolor=NAVY, lw=2.0))
        self.ax.add_patch(Ellipse((x, y), r * 0.5, r * 0.22, facecolor=WHITE,
                                  edgecolor=NAVY, lw=1.4))

    def mouse(self, x, y, w=46, h=34, fill=PALE):
        self.ax.add_patch(Ellipse((x, y + h / 2), w, h, facecolor=fill,
                                  edgecolor=NAVY, lw=2.0))
        self.line(x, y + h * 0.55, x, y + h * 0.95, color=NAVY, lw=1.4)

    def doc(self, x, y, w=86, h=108, fill=WHITE, lines=4):
        self.rect(x - w / 2, y, w, h, fill=fill)
        for i in range(lines):
            self.line(x - w / 2 + 12, y + h - 22 - i * 18, x + w / 2 - 12,
                      y + h - 22 - i * 18, color=MGREY, lw=1.8)

    def ledger(self, x, y, w=86, h=110, fill=WHITE):
        self.rect(x - w / 2, y, w, h, fill=fill)
        self.line(x - w / 2 + 26, y + 8, x - w / 2 + 26, y + h - 8,
                  color=MGREY, lw=1.6)
        for i in range(4):
            self.line(x - w / 2 + 10, y + h - 24 - i * 20, x + w / 2 - 12,
                      y + h - 24 - i * 20, color=MGREY, lw=1.8)

    def icon(self, kind, x, y, s=1.0):
        fns = {"person": lambda: self.person(x, y, s),
               "monitor": lambda: self.monitor(x, y + 24 * s, 130 * s, 92 * s),
               "tower": lambda: self.tower(x, y, 62 * s, 120 * s),
               "server": lambda: self.server(x, y, 96 * s, 130 * s),
               "laptop": lambda: self.laptop(x, y + 20 * s, 150 * s, 90 * s),
               "lock": lambda: self.lock(x, y + 14 * s, s),
               "shield": lambda: self.shield(x, y, s),
               "envelope": lambda: self.envelope(x, y + 24 * s, 92 * s, 60 * s),
               "phone": lambda: self.phone(x, y + 10 * s, 54 * s, 94 * s),
               "usb": lambda: self.usb(x, y + 36 * s, 84 * s, 36 * s),
               "disk": lambda: self.disk(x, y + 44 * s, 36 * s),
               "doc": lambda: self.doc(x, y, 88 * s, 112 * s),
               "ledger": lambda: self.ledger(x, y, 88 * s, 112 * s)}
        fns[kind]()

    # --------------------------------------------------------------- output
    def save(self, path):
        os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
        self.fig.savefig(path, dpi=DPI, facecolor=WHITE)
        plt.close(self.fig)
        return path

    def extents(self):
        r = self.fig.canvas.get_renderer()
        return [(t.get_text(), t.get_window_extent(renderer=r)) for t in self.texts]
