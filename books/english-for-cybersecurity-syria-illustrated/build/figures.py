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


# ------------------------------------------------------------------ Unit 2
@unit(2)
def u2():
    return [
        ("fig-02-1", A.three_groups(
            [("Machines", ["computers", "the server", "printers"]),
             ("Accounts", ["one name", "one password", "per person"]),
             ("Data", ["files", "messages", "records"])],
            "The IT department looks after all three.")),
        ("fig-02-2", A.icon_row(
            [("doc", "files"), ("envelope", "messages"),
             ("ledger", "records"), ("disk", "backups")],
            None)),
        ("fig-02-3", A.two_panel(
            ("Office A", [("monitor", "2 printers"), ("server", "1 server"),
                          ("disk", "space free")]),
            ("Office B", [("monitor", "1 printer"), ("server", "2 servers"),
                          ("disk", "disk full")]),
            "Do not show your card to your partner.")),
        ("fig-02-4", A.comparison_bars(
            [("spare keyboards", 0.30, "3"), ("new disks", 0.02, "0"),
             ("licences left", 0.40, "4"), ("free disk space", 0.18, "low")],
            "How much, and how many: the store this month.")),
    ]


# ------------------------------------------------------------------ Unit 3
@unit(3)
def u3():
    return [
        ("fig-03-1", A.icon_row(
            [("lock", "strong password"), ("monitor", "screen lock"),
             ("shield", "antivirus"), ("disk", "backup")],
            None)),
        ("fig-03-2", A.process_chain(
            ["save your work", "lock the screen", "papers in the drawer",
             "check behind you"],
            "First, Then, Next, Finally.")),
        ("fig-03-3", A.ordering(
            ["Give the account only the folders this job needs.",
             "Set a first password and ask the worker to change it.",
             "Write the new account on the account list.",
             "Ask the manager to confirm the name and the job."],
            "Number the steps in the correct order.")),
        ("fig-03-4", A.two_panel(
            ("A careless desk", [("monitor", "screen open"), ("doc", "papers out"),
                                 ("ledger", "password on a note")]),
            ("A safe desk", [("lock", "screen locked"), ("doc", "drawer closed"),
                             ("shield", "nothing to read")]),
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
