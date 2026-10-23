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


# ------------------------------------------------------------------ Unit 4
@unit(4)
def u4():
    return [
        ("fig-04-1", A.icon_row(
            [("ledger", "the log"), ("doc", "the report"),
             ("monitor", "the dashboard"), ("envelope", "the alert")],
            None)),
        ("fig-04-2", A.comparison_bars(
            [("help desk", 0.60, "60%"), ("reception", 0.30, "30%"),
             ("accounts", 0.11, "11%"), ("rear office", 0.04, "4%")],
            "Free space on four machines.")),
        ("fig-04-3", A.gauges(
            [("free space", 0.22, "per cent"), ("backup age", 0.70, "hours"),
             ("failed sign-ins", 0.90, "last night")],
            "Read each gauge and write the value.")),
        ("fig-04-4", A.three_groups(
            [("In range", ["free space 55%", "backup 6 hours", "3 failed sign-ins"]),
             ("Too low", ["free space 4%", "no backup today", "no alerts at all"]),
             ("Too high", ["41 failed sign-ins", "7 missing updates",
                           "backup 9 days old"])],
            "A reading means little until you know its range.")),
    ]


# ------------------------------------------------------------------ Unit 5
@unit(5)
def u5():
    return [
        ("fig-05-1", A.icon_row(
            [("phone", "the help desk"), ("tower", "the bench"),
             ("disk", "the store"), ("doc", "the manager’s desk")],
            None)),
        ("fig-05-2", A.doc_mockup(
            "TICKET 214", [("Reported by", "Mr Aboud, accounts"),
                           ("Logged", "14 March, 16:05"),
                           ("Priority", "urgent"),
                           ("Investigated by", "Nabil"),
                           ("Fix tested", ""),
                           ("Closed", "")],
            "Every step is written on the ticket as it happens.")),
        ("fig-05-3", A.ordering(
            ["The fix is tested.", "The problem is investigated at the bench.",
             "The ticket is closed.", "The problem is logged and given a priority."],
            "Number the steps in the correct order.")),
        ("fig-05-4", A.process_chain(
            ["reported", "logged", "investigated", "fixed", "tested", "closed"],
            None)),
    ]


# ------------------------------------------------------------------ Unit 6
@unit(6)
def u6():
    return [
        ("fig-06-1", A.icon_row(
            [("shield", "install updates"), ("disk", "test the backup"),
             ("ledger", "review accounts"), ("monitor", "check free space")],
            None)),
        ("fig-06-2", A.grammar_contrast(
            ("Requests and offers",
             ["Could you sign out, please?", "Would you bring the laptop?",
              "Shall I run the update now?"]),
            ("Advice",
             ["You should change that password.", "You shouldn’t keep one copy.",
              "That one can wait a month."]),
            "Asking, offering and advising.")),
        ("fig-06-3", A.two_person_scene(
            ("Nabil, officer", ["The backup has not", "finished for three weeks."]),
            ("Mr Aboud, head", ["Is that urgent?", "And what can wait?"]),
            None)),
        ("fig-06-4", A.three_groups(
            [("Every week", ["free space", "backup age", "alerts"]),
             ("Every month", ["install updates", "review accounts",
                              "restore one file"]),
             ("Every year", ["full restore test", "check every licence",
                             "who can open what"])],
            None)),
    ]


# ------------------------------------------------------------------ Unit 7
@unit(7)
def u7():
    return [
        ("fig-07-1", A.process_chain(
            ["booking", "estimate", "approval", "work", "test", "handover"],
            None)),
        ("fig-07-2", A.week_planner(
            [("Mon", ["accounts", "machines"]), ("Tue", ["disks", "arrive"]),
             ("Wed", ["branch", "job"]), ("Thu", ["server"]),
             ("Fri", ["kept", "empty"])],
            "A week with no empty day is a week that breaks.")),
        ("fig-07-3", A.doc_mockup(
            "ESTIMATE", [("Machine", "accounts 3"),
                         ("Work", "replace failing disk"),
                         ("Time", "about 3 hours"),
                         ("Parts", "1 disk, in the store"),
                         ("Cost", ""),
                         ("Approved by", "")],
            "Nothing starts until the user approves it.")),
        ("fig-07-4", A.two_person_scene(
            ("Rana, help desk", ["I’ll book you in", "for Wednesday at nine."]),
            ("Mr Aboud, user", ["How long is it", "going to take?"]),
            None)),
    ]


# ------------------------------------------------------------------ Unit 8
@unit(8)
def u8():
    return [
        ("fig-08-1", A.icon_row(
            [("shield", "updates on"), ("lock", "antivirus running"),
             ("monitor", "screen lock set"), ("disk", "backup working")],
            None)),
        ("fig-08-2", A.grammar_contrast(
            ("must / have to — necessary",
             ["Every machine must pass.", "We have to write it down.",
              "The sheet must be signed."]),
            ("mustn’t — forbidden",
             ["You mustn’t tick a line", "you have not checked.",
              "(don’t have to = not necessary)"]),
            "Necessary, forbidden, and not necessary.")),
        ("fig-08-3", A.process_chain(
            ["work done", "four checks", "sign-off", "handover"],
            "No machine passes the gate on three checks out of four.")),
        ("fig-08-4", A.checklist(
            [("Updates are on", True), ("Antivirus is running", True),
             ("Screen lock is set", True), ("Backup has run", False),
             ("Sheet signed by name", False)],
            "Tick only what you have checked.")),
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
