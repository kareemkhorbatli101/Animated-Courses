"""What would the EXISTING toolchain build from Book 2, if the id prefix were a parameter?

This is the number the whole plan rests on, so it is measured by running `auto_section`
itself - the same classifier Book 1 shipped with - and not by reasoning about it.

The ONLY thing monkeypatched is `figure_tables`'s one regex, from `F%02d-\\d\\d` to
`F2%02d-\\d\\d`. Every classification rule, every builder and every skip is the shipped one,
so a figure counted as graded here is a figure that would really be graded.

A figure that comes out `figure`/`lines`/`grid` is ONLY SHOWN - a picture, not an exercise.
That is the number the depth pass exists to push down, and it is reported separately so the
plan cannot quietly count a picture as work.

    python tools/dispatch_dryrun.py    ->  evidence/dispatch.txt
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _tee import Tee, book_paths, pipeline_root

sys.path.insert(0, pipeline_root())
from tools import cma_book
from tools import cma_scenes as S

BOOKS = book_paths()
ICONS = (r"D:\MyWork\AnimatedMatrix\Apps\_publish_Animated-Courses\cma\book1"
         r"\assets\icons.js")
SHOWN_ONLY = ("figure", "lines", "grid")


def figure_tables_b2(d, n, _cache={}):
    """`figure_tables`, with the author's Book 2 prefix. One character of difference."""
    k = ("b2", n)
    if k in _cache:
        return _cache[k]
    out, sec = {}, None
    seq = d["seq"]
    for i, b in enumerate(seq):
        t = str(b.get("t", "")).strip()
        if str(b.get("k", "")).startswith("Heading") and re.match(r"^%d\.\d" % n, t):
            sec = t.split()[0]
        if b.get("k") != "Caption":
            continue
        m = re.search(r"F2%02d-\d\d" % n, t)
        if not m:
            continue
        nxt = seq[i + 1] if i + 1 < len(seq) else {}
        if nxt.get("k") != "table" or not nxt.get("rows"):
            continue
        rows = S._cells(nxt["rows"])
        out[m.group(0)] = (sec, re.sub(r"^Figure F\d+-\d\d\.\s*", "", t), rows[0], rows[1:])
    _cache[k] = out
    return out


def icon_registry():
    """The terms icons.js actually registers, from its own `reg(tier, family, part, [...])`.

    A LOOSE REGEX LIED HERE FIRST. Matching quoted keys followed by a colon found 5 names in
    a file that registers 333, and would have reported every one of Book 2's terms as new.
    """
    src = open(ICONS, encoding="utf-8").read()
    terms, fams = set(), {}
    for m in re.finditer(r"reg\(\s*(\d)\s*,\s*\"([^\"]+)\"\s*,\s*([^,]+),\s*\[(.*?)\]\s*\)",
                         src, re.S):
        _tier, fam, _part, body = m.groups()
        got = re.findall(r"\"([^\"]+)\"", body)
        for x in got:
            terms.add(x.strip().lower())
        fams[fam] = fams.get(fam, 0) + len(got)
    return terms, fams


def main():
    S.figure_tables = figure_tables_b2
    with Tee("dispatch.txt") as t:
        t.w("WHAT THE SHIPPED DISPATCHER BUILDS FROM BOOK 2")
        t.w("=" * 86)
        t.w("Only `figure_tables`'s prefix regex is changed (F%02d -> F2%02d). Every")
        t.w("classification rule and builder is the one Book 1 ships.")
        t.w("")
        t.w("%-5s %-7s %-7s %-7s %-4s  %s"
            % ("ch", "tables", "graded", "shown", "YT", "the kinds the shapes asked for"))
        t.w("-" * 86)
        rows, errs, allk = [], [], {}
        for n in range(1, 19):
            d = cma_book.extract(BOOKS[2], n)
            ft = figure_tables_b2(d, n)
            key = S._your_turn_key(d)
            secs = sorted({f for f, _c, _h, _r in ft.values() if f})
            kinds = {}
            for sec in secs:
                try:
                    for sp in S.auto_section(d, n, sec, key):
                        k = sp.get("kind", "?")
                        kinds[k] = kinds.get(k, 0) + 1
                        allk[k] = allk.get(k, 0) + 1
                except Exception as e:
                    errs.append("ch%02d %s  %s: %s" % (n, sec, type(e).__name__, e))
            shown = sum(v for k, v in kinds.items() if k in SHOWN_ONLY)
            graded = sum(v for k, v in kinds.items() if k not in SHOWN_ONLY)
            rows.append(dict(n=n, tables=len(ft), graded=graded, shown=shown,
                             yt=len(key), kinds=kinds, dispatched=graded + shown))
            t.w("%-5d %-7d %-7d %-7d %-4d  %s"
                % (n, len(ft), graded, shown, len(key),
                   ", ".join("%s=%d" % (k, v) for k, v in sorted(kinds.items()))))
        t.w("-" * 86)
        tt = sum(r["tables"] for r in rows)
        tg = sum(r["graded"] for r in rows)
        ts = sum(r["shown"] for r in rows)
        td = sum(r["dispatched"] for r in rows)
        ty = sum(r["yt"] for r in rows)
        t.w("table-shaped figures      %d" % tt)
        t.w("dispatched into a scene   %d" % td)
        t.w("  of those GRADED         %d" % tg)
        t.w("  of those ONLY SHOWN     %d" % ts)
        t.w("not dispatched at all     %d   <-- skipped, or the Your-turn figure itself"
            % (tt - td))
        t.w("Your-turn answer pairs    %d" % ty)
        t.w("")
        t.w("kinds over the whole book:")
        for k in sorted(allk, key=lambda x: -allk[x]):
            t.w("   %-12s %d" % (k, allk[k]))
        t.w("")
        if errs:
            t.w("DISPATCHER ERRORS (%d):" % len(errs))
            for e in errs:
                t.w("   %s" % e)
        else:
            t.w("no dispatcher errors on any of the eighteen chapters")
        t.w("")
        t.w("NOTE, and it is a question rather than a result: `auto_fill` - the general case,")
        t.w("which took 13 of Book 1's figures - is chosen %d times here. Either the rules"
            % allk.get("fill", 0))
        t.w("above it claim everything, or its one guarantee (the answer must not already")
        t.w("appear in its own row) cannot be met by this book's tables. Worth one")
        t.w("measurement before the build, not an assumption either way.")
        t.w("")

        t.w("TERM ICONS")
        t.w("=" * 86)
        reg, fams = icon_registry()
        b1 = set()
        b2 = set()
        for n in range(1, 19):
            for x in cma_book.extract(BOOKS[1], n)["terms"]:
                if x["en"].strip():
                    b1.add(x["en"].strip().lower())
            for x in cma_book.extract(BOOKS[2], n)["terms"]:
                if x["en"].strip():
                    b2.add(x["en"].strip().lower())
        t.w("icons.js registers %d terms across %d families (%.1f terms per family)"
            % (len(reg), len(fams), len(reg) / float(len(fams))))
        t.w("Book 1 distinct terms   %d  -> registered %d, tier-3 fallback %d"
            % (len(b1), len(b1 & reg), len(b1 - reg)))
        t.w("Book 2 distinct terms   %d" % len(b2))
        t.w("   already registered   %d" % len(b2 & reg))
        t.w("   shared with Book 1   %d" % len(b2 & b1))
        t.w("   NEW, need a family   %d   <-- the largest hand item in the plan"
            % len(b2 - reg))
        t.w("")
        t.w("At Book 1's measured density of %.1f terms per family, %d new terms is roughly"
            % (len(reg) / float(len(fams)), len(b2 - reg)))
        t.w("%d new families. Book 1 ships ZERO tier-3 typographic fallbacks, so shipping"
            % round(len(b2 - reg) / (len(reg) / float(len(fams)))))
        t.w("Book 2 without them would be a visible regression of a standard, not a gap.")
        t.w("")
        t.w("the new terms, in full:")
        for x in sorted(b2 - reg):
            t.w("   %s" % x)


if __name__ == "__main__":
    main()
