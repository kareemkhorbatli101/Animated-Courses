#!/usr/bin/env python3
"""qa/figures.py — fidelity criterion 14, checked per figure.

Re-draws every figure and checks it mechanically rather than by eye:
  * the canvas is 1440 px wide and within the source's height band;
  * no text runs outside the canvas;
  * no two pieces of text overlap;
  * the saved PNG exists, is the drawn size, and uses only house colours.

    python3 qa/figures.py [unit ...]
"""
import os, struct, sys
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "build"))
import figures as F                                           # noqa: E402
from figlib import NAVY, NAVY2, PALE, PALE2, GREY, MGREY, BLUE, RED, GREEN, WHITE

HOUSE = {c.lstrip("#").upper() for c in (NAVY, NAVY2, PALE, PALE2, GREY,
                                         MGREY, BLUE, RED, GREEN, WHITE)}
MARGIN = 2          # px of slack at the canvas edge
OVERLAP = 3.0       # px two text boxes may share before it counts as a clash


def png_size(p):
    with open(p, "rb") as f:
        return struct.unpack(">II", f.read(26)[16:24])


def hexc(rgb):
    return "%02X%02X%02X" % rgb


def palette(p, limit=24):
    """The figure's most common colours, so a stray hue shows up."""
    try:
        from PIL import Image
    except ImportError:
        return []
    im = Image.open(p).convert("RGB")
    return [hexc(c) for _, c in sorted(im.getcolors(1 << 22) or [],
                                       reverse=True)[:limit]]


def near_house(h):
    """True if a colour is a house colour or an antialiased blend of them."""
    r, g, b = int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)
    for c in HOUSE:
        cr, cg, cb = int(c[0:2], 16), int(c[2:4], 16), int(c[4:6], 16)
        if abs(r - cr) + abs(g - cg) + abs(b - cb) < 60:
            return True
    # a blend of any two house colours
    for c1 in HOUSE:
        for c2 in HOUSE:
            for t in (0.25, 0.5, 0.75):
                m = [int(c1[i:i+2], 16) * (1 - t) + int(c2[i:i+2], 16) * t
                     for i in (0, 2, 4)]
                if abs(r - m[0]) + abs(g - m[1]) + abs(b - m[2]) < 48:
                    return True
    return False


def main():
    want = [int(a) for a in sys.argv[1:]] or sorted(F.UNITS)
    faults = 0
    checked = 0
    for n in want:
        if n not in F.UNITS:
            continue
        for name, c in F.UNITS[n]():
            checked += 1
            h = c.h
            if h < 240 or h > 480:
                print(f"  {name}: canvas height {h} outside 240-480"); faults += 1
            boxes = []
            for s, bb in c.extents():
                if bb.x0 < -MARGIN or bb.x1 > 1440 + MARGIN \
                        or bb.y0 < -MARGIN or bb.y1 > h + MARGIN:
                    print(f"  {name}: text runs off the canvas: {s[:42]!r}")
                    faults += 1
                boxes.append((s, bb))
            for i in range(len(boxes)):
                for j in range(i + 1, len(boxes)):
                    a, b = boxes[i][1], boxes[j][1]
                    ox = min(a.x1, b.x1) - max(a.x0, b.x0)
                    oy = min(a.y1, b.y1) - max(a.y0, b.y0)
                    if ox > OVERLAP and oy > OVERLAP:
                        print(f"  {name}: text overlaps: "
                              f"{boxes[i][0][:26]!r} / {boxes[j][0][:26]!r}")
                        faults += 1
            import matplotlib.pyplot as plt
            plt.close(c.fig)
            p = os.path.join(ROOT, "figures", name + ".png")
            if not os.path.exists(p):
                print(f"  {name}: png not written"); faults += 1
                continue
            w, ph = png_size(p)
            if (w, ph) != (1440, h):
                print(f"  {name}: png is {w}x{ph}, drawn {1440}x{h}"); faults += 1
            for col in palette(p):
                if not near_house(col):
                    print(f"  {name}: colour {col} is not a house colour")
                    faults += 1
                    break
    print(f"-- {checked} figure(s) checked; {faults} fault(s)")
    sys.exit(1 if faults else 0)


main()
