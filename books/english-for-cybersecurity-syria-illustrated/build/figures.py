#!/usr/bin/env python3
"""The book's 40 figures: four per unit, drawn from the twelve archetypes.

Usage:  python3 build/figures.py [unit ...]      (no args = all units)
Output: figures/fig-UU-N.png at 1440 x 360-480.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import figarch as A
from figlib import NAVY, MGREY

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "figures")

UNITS = {}


def unit(n):
    def deco(fn):
        UNITS[n] = fn
        return fn
    return deco


# ------------------------------------------------------------------ Unit 1
@unit(1)
def u1():
    return [
        ("fig-01-1", A.two_panel(
            ("The help desk", [("person", "Rana"), ("phone", "calls"),
                               ("doc", "tickets")]),
            ("The workshop bench", [("person", "Nabil"), ("tower", "machines"),
                                    ("usb", "media")]),
            None)),
        ("fig-01-2", A.role_row(
            [("Maher", "IT and security manager", "doc"),
             ("Nabil", "security officer", "shield"),
             ("Rana", "help-desk officer", "phone"),
             ("Tarek", "trainee", "laptop")],
            None)),
        ("fig-01-3", A.labelled_object(
            [("screen", (560, 300), (300, 320)),
             ("keyboard", (545, 131), (300, 150)),
             ("mouse", (700, 137), (1240, 120)),
             ("tower", (980, 320), (1240, 340)),
             ("cable", (800, 240), (800, 92))],
            None)),
        ("fig-01-4", A.grammar_contrast(
            ("Present simple — every day",
             ["The help desk opens at eight.", "Nabil checks the backup.",
              "Rana answers calls."]),
            ("Present continuous — now",
             ["Right now, he is resetting a password.", "She is writing a ticket.",
              "They are updating the server."]),
            None)),
    ]


def main():
    want = [int(a) for a in sys.argv[1:]] or sorted(UNITS)
    for n in want:
        if n not in UNITS:
            print(f"  (unit {n} has no figures defined yet)")
            continue
        for name, c in UNITS[n]():
            path = os.path.join(OUT, name + ".png")
            c.save(path)
            print(f"  {name}.png  {c.fig.get_size_inches()[0]*100:.0f}x{c.h}")


if __name__ == "__main__":
    main()
