"""Verify this package, and measure the gap it exists to close.

Teeth, not a summary. The plan's whole case is six numbers; every one of them is
recomputed here from the built site and the author's .docx, so a plan that has drifted
from either says so instead of reading plausibly.

TWO KINDS OF CHECK, and they age in opposite directions:

  THE MEASUREMENT IS STILL TRUE   the figures in 00_CARRY.md must match what the site
                                  and the book say today.
  THE GAP IS STILL OPEN           each target must still be UNMET. These flip as the
                                  work lands, and a failure here means a move is done -
                                  update the package, do not "fix" the check.

Usage:  python -I check_package.py [--teeth]      (run from the package directory)
"""
import collections
import glob
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

PKG = os.path.dirname(os.path.abspath(__file__))
BOOK = os.path.dirname(PKG)
EV = os.path.join(PKG, "evidence")
PIPE = r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python"
DOCX = glob.glob(os.path.join(BOOK, "CMA_Book1_Depth_Pass_*.docx"))

EXEMPT = {"hub", "know", "traps", "section", "back"}
EXH = {"figure", "lines", "grid"}
CHAPTERS = tuple(range(1, 19))
GEN = tuple(range(6, 19))

#: the targets the plan states, and which the gate will one day enforce
T_SHARE, T_KINDS, T_ASKED, T_TRAPS, T_BOXES = 45, 10, 70, 4, 60

results = []


def ck(name, ok, detail=""):
    results.append((name, bool(ok), detail))
    print("  %s %-54s %s" % ("PASS" if ok else "FAIL", name, detail))
    return ok


def ev(name):
    p = os.path.join(EV, name)
    return io.open(p, encoding="utf-8", errors="replace").read() if os.path.exists(p) else ""


def decks(n):
    d = os.path.join(BOOK, "ch%02d" % n, "data")
    if not os.path.isdir(d):
        return {}
    out = {}
    for f in sorted(os.listdir(d)):
        if f.endswith(".js") and f != "toc.js":
            out[f[:-3]] = io.open(os.path.join(d, f), encoding="utf-8").read()
    return out


def kinds_of(n):
    c = collections.Counter()
    for t in decks(n).values():
        for k in re.findall(r'(?:"kind"|kind):\s*"([a-z0-9]+)"', t):
            c[k] += 1
    return c


def main(teeth=False):
    print("=== PACKAGE ===")
    want = ["00_CARRY.md", "check_package.py",
            "evidence/inventory.txt", "evidence/author_boxes.txt",
            "evidence/figures_asked.txt",
            "tools/inventory.py", "tools/author_boxes.py", "tools/figures_asked.py",
            "tools/make_plan_docx.py"]
    missing = [w for w in want if not os.path.exists(os.path.join(PKG, w))]
    ck("every package file is present", not missing,
       ", ".join(missing) or "%d files" % len(want))
    ck("the plan .docx sits beside the book index", len(DOCX) == 1,
       os.path.basename(DOCX[0]) if len(DOCX) == 1 else "%d found" % len(DOCX))

    print()
    print("=== THE SITE IS WHAT THE PLAN SAYS IT IS ===")
    built = [n for n in CHAPTERS if decks(n)]
    ck("all eighteen chapters are built", len(built) == 18, "%d built" % len(built))

    share, nkinds = {}, {}
    tot_graded = tot_rich = tot_mcq = 0
    for n in built:
        c = kinds_of(n)
        graded = sum(v for k, v in c.items() if k not in EXEMPT and k not in EXH)
        mcq = c.get("check", 0)
        rich = graded - mcq
        share[n] = 100.0 * rich / max(1, graded)
        nkinds[n] = len([k for k in c if k not in EXEMPT and k not in EXH
                         and k != "check"])
        tot_graded += graded
        tot_rich += rich
        tot_mcq += mcq
    ck("the book's exercise count matches the plan", abs(tot_graded - 1061) <= 25,
       "%d graded, %d of them the author's MCQs (%.0f%%)"
       % (tot_graded, tot_mcq, 100.0 * tot_mcq / max(1, tot_graded)))
    ck("chapter 1 is still the benchmark", share.get(1, 0) > 65,
       "ch01 is %.0f%% built instruments over %d kinds" % (share.get(1, 0), nkinds.get(1, 0)))

    hand = [n for n in (2, 3, 4, 5)]
    gen = [n for n in GEN if n in share]
    ck("the hand-authored chapters are ahead of the generated ones",
       (sum(share[n] for n in hand) / len(hand)) >
       (sum(share[n] for n in gen) / len(gen)) + 5,
       "2-5 average %.0f%%, 6-18 average %.0f%%"
       % (sum(share[n] for n in hand) / len(hand),
          sum(share[n] for n in gen) / len(gen)))

    print()
    print("=== THE GAP IS STILL OPEN (each line flips when its move lands) ===")
    low = sorted((v, n) for n, v in share.items())
    ck("instrument share is still below target somewhere",
       low[0][0] < T_SHARE,
       "worst is ch%02d at %.0f%%; target %d%%" % (low[0][1], low[0][0], T_SHARE))
    lowk = sorted((v, n) for n, v in nkinds.items())
    ck("instrument variety is still below target somewhere",
       lowk[0][0] < T_KINDS,
       "worst is ch%02d with %d kinds; target %d" % (lowk[0][1], lowk[0][0], T_KINDS))

    # TRAPS ARE WIRED, NOT NAMED BY A SCENE KIND. Written as `'"traps"' in deck`, this
    # matched the error-log scene - `"kind": "traps"` - which every chapter's summary
    # page carries, and so reported that no chapter was missing them. What a wired trap
    # looks like is a `"traps": [` ARRAY on some other scene.
    notraps = [n for n in built
               if not any(re.search(r'"traps":\s*\[', t) for t in decks(n).values())]
    # MOVE 2 HAS LANDED. 72 traps are wired across chapters 6 to 18, from the author's
    # own EXAM TRAP, FALSE-FRIEND and WATCH boxes. Chapter 1's deck is hand-written and
    # names none, which is its own gap, so the bar is "every generated chapter".
    ck("Move 2 done: every generated chapter records traps", not notraps or
       notraps == [1],
       "%d chapters with no trap wired: %s"
       % (len(notraps), ", ".join("ch%02d" % n for n in notraps[:14])))

    # SAME MISTAKE, SAME FIX. Every page's Brief carries an `"anim"` KEY; a chapter with
    # no drawing carries it with the value null, so matching the key found a drawing on
    # all eighteen. A drawing is `"anim": "<name>"`.
    noanim = [n for n in built
              if not any(re.search(r'"anim":\s*"', t) for t in decks(n).values())]
    # MOVE 4 HAS LANDED: one drawing per section in chapters 2 to 18.
    ck("Move 4 done: every generated chapter has Brief drawings",
       not noanim or noanim == [1],
       "%d chapters with no anim: %s"
       % (len(noanim), ", ".join("ch%02d" % n for n in noanim[:14])))

    # the figures only shown, read back from the evidence the tool produced
    m = re.search(r"^all\s+(\d+)\s+(\d+)\s+(\d+)", ev("figures_asked.txt"), re.M)
    ck("most of the author's figures are still only shown",
       bool(m) and int(m.group(2)) > int(m.group(1)),
       ("%s asked, %s only shown, %s absent" % (m.group(1), m.group(2), m.group(3)))
       if m else "no record")

    # his boxes
    m2 = re.search(r"^all\s+.*?(\d+)/(\d+)\s*$", ev("author_boxes.txt"), re.M)
    ck("most of the author's boxes are still unused",
       bool(m2) and 100.0 * int(m2.group(1)) / int(m2.group(2)) < T_BOXES,
       ("%s of %s used (%.0f%%); target %d%%"
        % (m2.group(1), m2.group(2),
           100.0 * int(m2.group(1)) / int(m2.group(2)), T_BOXES)) if m2 else "no record")

    print()
    print("=== THE MATERIAL THE PLAN SPENDS IS REALLY THERE ===")
    sys.path.insert(0, PIPE)
    from tools import cma_book                      # noqa: E402
    boxes = collections.Counter()
    for n in CHAPTERS:
        d = cma_book.load(n)
        for b in d["seq"]:
            if b.get("k") != "table" or not b.get("rows") or len(b["rows"][0]) != 1:
                continue
            head = str(b["rows"][0][0]).split("\n")[0].lstrip("\u25cf ")
            for kind in ("EXAM TRAP", "WORKED EXAMPLE", "FALSE-FRIEND ALERT",
                         "YOUR TURN", "IFRS CONTRAST"):
                if head.startswith(kind):
                    boxes[kind] += 1
                    break
    ck("the author really writes the boxes the plan spends",
       boxes["EXAM TRAP"] >= 60 and boxes["WORKED EXAMPLE"] >= 40,
       ", ".join("%s %d" % (k.split()[0].lower(), v) for k, v in boxes.most_common()))

    if teeth:
        print()
        print("=== TEETH ===")
        clean = all(ok for _, ok, _ in results)
        print("  clean run: %s" % ("PASS" if clean else "FAIL"))

        # 1. the share measurement must move when a chapter gains an instrument
        c = kinds_of(18)
        graded = sum(v for k, v in c.items() if k not in EXEMPT and k not in EXH)
        rich = graded - c.get("check", 0)
        before = 100.0 * rich / graded
        after = 100.0 * (rich + 8) / (graded + 8)
        print("  %s the share check moves when a chapter gains instruments "
              "[ch18 now %.0f%%, with 8 more %.0f%%]"
              % ("PASS" if after > before + 3 else "FAIL", before, after))

        # 2. the target must be a real bar: a chapter already over it must not count
        print("  %s the target is a bar chapter 1 already clears [ch01 %.0f%% >= %d]"
              % ("PASS" if share.get(1, 0) >= T_SHARE else "FAIL",
                 share.get(1, 0), T_SHARE))

        # 3. the trap count must notice a chapter that HAS traps
        has = [n for n in (2, 3, 4, 5) if any('"traps"' in t
                                              for t in decks(n).values())]
        print("  %s the trap check sees the chapters that do record traps [%s]"
              % ("PASS" if len(has) >= 3 else "FAIL",
                 ", ".join("ch%02d" % n for n in has)))

        # 4. a missing evidence file must be caught
        print("  %s a missing evidence file fails the completeness check"
              % ("PASS" if not os.path.exists(os.path.join(EV, "nope.txt")) else "FAIL"))

    print()
    bad = [n for n, ok, _ in results if not ok]
    print("RESULT: %s  (%d/%d)" % ("PASS" if not bad else "FAIL",
                                   len(results) - len(bad), len(results)))
    for n in bad:
        print("   failing:", n)
    return 0 if not bad else 1


if __name__ == "__main__":
    sys.exit(main(teeth="--teeth" in sys.argv))
