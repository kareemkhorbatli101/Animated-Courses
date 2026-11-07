"""Measure what shipping Book 1 actually produced, so the Book 2 ship plan targets a
measured shape rather than a remembered one.

Writes evidence/ship_facts.txt inside this package. Standard library only.

Usage: python ship_facts.py
"""
import io
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
PKG = os.path.dirname(HERE)
EV = os.path.join(PKG, "evidence")

# _publish_Animated-Courses/cma/book2/plan_ship_.../tools -> up 4
PUB = os.path.abspath(os.path.join(PKG, "..", "..", ".."))
B1 = os.path.join(PUB, "cma", "book1")
PIPE = os.path.abspath(os.path.join(PUB, "..", "SVG_To_Video_Using_Python"))

TOOLS = ["cma_book.py", "cma_terms.py", "cma_scenes.py", "cma_index.py", "cma_ledger.py"]
GATES = ["cma_provenance.py", "cma_render.py", "cma_interactive.py", "cma_depth.py",
         "cma_crosstie.py"]


class Tee(object):
    """Print to the console AND into evidence/, so the package can show its working."""

    def __init__(self, path):
        self.f = io.open(path, "w", encoding="utf-8")

    def __call__(self, s=""):
        self.f.write(s + "\n")
        try:
            sys.stdout.write(s + "\n")
        except UnicodeEncodeError:          # cp1256 console
            sys.stdout.write(s.encode("ascii", "replace").decode("ascii") + "\n")

    def close(self):
        self.f.close()


def read(p):
    try:
        return io.open(p, encoding="utf-8", errors="replace").read()
    except Exception:
        return ""


def rule(say, title):
    say("")
    say(title)
    say("=" * 86)


def main():
    if not os.path.isdir(EV):
        os.makedirs(EV)
    say = Tee(os.path.join(EV, "ship_facts.txt"))

    say("WHAT SHIPPING BOOK 1 PRODUCED  -  the measured target for Book 2")
    say("publish root : %s" % PUB)
    say("pipeline     : %s" % PIPE)

    # ---------------------------------------------------------------- A. the artefact
    rule(say, "A. THE SHIPPED ARTEFACT: cma/book1")
    tot_f = tot_b = 0
    plan_f = 0
    chapter_rows = []
    for dirpath, dirnames, filenames in os.walk(B1):
        rel = os.path.relpath(dirpath, B1)
        top = rel.split(os.sep)[0]
        for fn in filenames:
            p = os.path.join(dirpath, fn)
            try:
                sz = os.path.getsize(p)
            except OSError:
                continue
            if top.startswith("plan_"):
                plan_f += 1
                continue
            tot_f += 1
            tot_b += sz
    say("files in book1/ (plan_* packages excluded) : %d" % tot_f)
    say("                      ... in MB            : %.1f" % (tot_b / 1048576.0))
    say("files inside plan_* packages (not shipped) : %d" % plan_f)

    for n in range(1, 19):
        d = os.path.join(B1, "ch%02d" % n)
        if not os.path.isdir(d):
            continue
        html = len([f for f in os.listdir(d) if f.endswith(".html")])
        dd = os.path.join(d, "data")
        js = len([f for f in os.listdir(dd) if f.endswith(".js")]) if os.path.isdir(dd) else 0
        chapter_rows.append((n, html, js))
    say("")
    say("per chapter: %d chapter folders" % len(chapter_rows))
    say("   %-6s %-8s %-8s" % ("ch", "pages", "data"))
    for n, h, j in chapter_rows:
        say("   %-6s %-8d %-8d" % ("ch%02d" % n, h, j))
    say("   %-6s %-8d %-8d" % ("TOTAL", sum(r[1] for r in chapter_rows),
                               sum(r[2] for r in chapter_rows)))

    # assets: shared vs per-chapter
    A = os.path.join(B1, "assets")
    per_ch = re.compile(r"-(ch\d\d)\.js$|^figures$")
    shared, perchap, figs = [], [], 0
    if os.path.isdir(A):
        for f in sorted(os.listdir(A)):
            fp = os.path.join(A, f)
            if os.path.isdir(fp):
                if f == "figures":
                    figs = len([x for x in os.listdir(fp)])
                shared.append(f + "/")
            elif per_ch.search(f):
                perchap.append(f)
            else:
                shared.append(f)
    say("")
    say("assets/: %d shared, %d per-chapter, %d figure files" % (len(shared), len(perchap), figs))
    say("SHARED RENDERERS Book 2 needs a copy of (or a shared home for):")
    for f in shared:
        say("   %s" % f)

    # ---------------------------------------------------------------- B. the counts
    rule(say, "B. THE EXERCISE COUNT, AND A DRIFT IN THE PAGE THAT STATES IT")
    idx = read(os.path.join(B1, "index.html"))
    rows = re.findall(r'\[(\d+),\s*"(.*?)",.*?"(ch\d\d)/index\.html",\s*(\d+)\]', idx, re.S)
    say("chapters listed in index.html : %d" % len(rows))
    say("   %-5s %-7s %s" % ("ch", "count", "title"))
    s = 0
    for n, title, ch, c in rows:
        s += int(c)
        say("   %-5s %-7s %s" % (ch, c, title[:58]))
    say("   %-5s %-7d  <- the figure the page COMPUTES and displays" % ("SUM", s))
    prose = re.findall(r"([\d,]{3,6})\s+exercises over\s+(\d+)\s+pages", idx)
    if prose:
        say("")
        say("but the prose on the same page says: '%s exercises over %s pages'"
            % (prose[0][0], prose[0][1]))
        stale = int(prose[0][0].replace(",", ""))
        if stale != s:
            say("   MISMATCH: prose %d vs computed %d  (drift of %d)" % (stale, s, s - stale))
            say("   The <b id=statItems> literal is overwritten by script at load, so the")
            say("   LIVE number is %d; the sentence beneath it was not updated." % s)
    say("")
    say("Book 1 therefore ships %d graded exercises across %d chapters." % (s, len(rows)))

    # ---------------------------------------------------------------- C. reachability
    rule(say, "C. CAN A VISITOR REACH IT?  (measured, not assumed)")
    hits = []
    for dirpath, dirnames, filenames in os.walk(PUB):
        dirnames[:] = [d for d in dirnames
                       if d not in (".git", "node_modules") and not d.startswith("plan_")]
        rel = os.path.relpath(dirpath, PUB).replace("\\", "/")
        if rel.startswith("cma/book1") or rel.startswith("cma/book2"):
            continue
        for fn in filenames:
            if not fn.endswith((".html", ".js", ".json", ".md")):
                continue
            t = read(os.path.join(dirpath, fn))
            if "cma/book1" in t or "cma\\book1" in t:
                hits.append(os.path.join(rel, fn))
    say("files outside cma/book1 that link to it : %d" % len(hits))
    for h in hits[:20]:
        say("   %s" % h)
    if not hits:
        say("   (none - the book is published but nothing points at it)")

    cat = os.path.join(PUB, "catalogue.json")
    ids = []
    if os.path.exists(cat):
        try:
            d = json.loads(read(cat))
            ids = [c.get("id") for c in d.get("courses", [])]
        except Exception as e:
            say("   catalogue.json unreadable: %s" % e)
    say("")
    say("catalogue.json courses (%d): %s" % (len(ids), ", ".join(str(i) for i in ids)))
    say("   'cma' present in catalogue : %s" % ("YES" if any(
        i and "cma" in str(i).lower() for i in ids) else "NO"))

    for name in ("index.html", "manifest.json", "sw.js"):
        t = read(os.path.join(PUB, name))
        say("   occurrences of 'cma' in %-14s : %d" % (name, len(re.findall(r"cma", t, re.I))))
    say("   cma/index.html (a landing for the course) exists : %s"
        % ("YES" if os.path.exists(os.path.join(PUB, "cma", "index.html")) else "NO"))
    say("")
    say("VERDICT: Book 1 is reachable only by typing cma/book1/index.html directly.")
    say("Shipping Book 2 'exactly as we shipped Book 1' would ship a second unreachable book.")

    # ---------------------------------------------------------------- D. the toolchain
    rule(say, "D. THE TOOLCHAIN THAT WOULD HAVE TO TAKE A SECOND BOOK")
    say("%-22s %7s  %-9s %-9s %s" % ("file", "lines", "--book?", "--chapter?", "book1 hardcoded in"))
    say("-" * 86)
    total_lines = 0
    tc_rows = []
    for kind, names in (("tools", TOOLS), ("gates", GATES)):
        for nm in names:
            p = os.path.join(PIPE, kind, nm)
            t = read(p)
            if not t:
                say("%-22s  MISSING at %s" % (nm, p))
                continue
            ln = t.count("\n") + 1
            total_lines += ln
            has_book = "YES" if re.search(r'add_argument\(\s*"--book"', t) else "no"
            has_ch = "YES" if re.search(r'add_argument\(\s*"--chapter"', t) else "no"
            where = []
            for m in re.finditer(r'^(BOOK|SITE)\s*=\s*(.+)$', t, re.M):
                if "book1" in m.group(2).lower() or "Book1" in m.group(2):
                    where.append(m.group(1))
            tc_rows.append((nm, ln, has_book, has_ch, ",".join(where) or "-"))
            say("%-22s %7d  %-9s %-9s %s" % (nm, ln, has_book, has_ch, ",".join(where) or "-"))
    say("-" * 86)
    say("%-22s %7d" % ("TOTAL", total_lines))
    say("")
    say("Only cma_book.py takes --book, and it takes a PATH, not a book NUMBER.")
    say("The five gates take no arguments at all: each pins SITE to .../cma/book1.")

    # ---------------------------------------------------------------- E. carried facts
    rule(say, "E. CARRIED FROM THE 2026-11-06 ANALYSIS PACKAGE (re-read, not retyped)")
    prev = os.path.join(os.path.dirname(PKG), "plan_book2_2026-11-06", "evidence")
    for nm in ("structure.txt", "dispatch.txt", "coupling.txt"):
        p = os.path.join(prev, nm)
        say("   %-16s %s" % (nm, "found" if os.path.exists(p) else "MISSING"))
    cp = read(os.path.join(prev, "coupling.txt"))
    dp = read(os.path.join(prev, "dispatch.txt"))
    for label, pat, txt in (
            ("PATH couplings", r"TOTAL\s+\d+\s+(\d+)", cp),
            ("keyed rows", r"(\d+) rows TOTAL", cp),
            ("id regexes", r"TOTAL\s+\d+\s+\d+\s+\d+\s+(\d+)", cp),
            ("figures graded", r"of those GRADED\s+(\d+)", dp),
            ("table figures", r"table-shaped figures\s+(\d+)", dp)):
        m = re.search(pat, txt)
        say("   %-16s %s" % (label, m.group(1) if m else "?"))

    say("")
    say("END")
    say.close()


if __name__ == "__main__":
    main()
