#!/usr/bin/env python3
"""Write real page numbers into each book's Contents.

The contents tables shipped either with no page column at all (Books 4-6) or
with numbers from a 14-page-unit estimate that the finished books do not match
(Books 1-3, where Unit 2 was printed as page 22 and actually falls on 27). A
wrong page number is worse than none, so this measures the built PDF and writes
what it finds.

Run after building: it needs <book>.pdf text, and it rewrites front.md in place.
Because adding or widening the column can reflow the contents page itself, the
caller should build, paginate, rebuild and paginate again until nothing moves.
"""
import os, re, sys, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
WF   = os.path.dirname(os.path.dirname(HERE))

BOOKS = [("wayfinder/starter", "Wayfinder-Starter-Book1"),
         ("wayfinder/level1",  "Wayfinder-1-Book2"),
         ("wayfinder/level2",  "Wayfinder-2-Book3"),
         ("wayfinder/level3",  "Wayfinder-3-Book4"),
         ("wayfinder/level4",  "Wayfinder-4-Book5"),
         ("wayfinder/level5",  "Wayfinder-5-Book6"),
         ("business/level1",   "Clearline-Foundation-Book1"),
         ("business/level2",   "Clearline-1-Book2"),
         ("business/level3",   "Clearline-2-Book3"),
         ("business/level4",   "Clearline-3-Book4"),
         ("business/level5",   "Clearline-4-Book5"),
         ("business/level6",   "Clearline-5-Book6"),
         ("diplomacy/level1",  "FMS-Foundation-Book1"),
         ("diplomacy/level2",  "FMS-1-Book2"),
         ("diplomacy/level3",  "FMS-2-Book3"),
         ("diplomacy/level4",  "FMS-3-Book4"),
         ("diplomacy/level5",  "FMS-4-Book5"),
         ("diplomacy/level6",  "FMS-5-Book6")]

HEAD = re.compile(r'^(UNIT \d+|Starting Point|STARTING POINT|Grammar reference|Audio index.*|'
                  r'Word list|Academic word list|Sources|Closing)$')

def openers(txt):
    """page number -> the heading that opens it, for every opener page."""
    out = {}
    for i, pg in enumerate(txt.split("\f"), 1):
        ls = [l.strip() for l in pg.split("\n") if l.strip()]
        if len(ls) >= 2 and HEAD.match(ls[1]):
            out.setdefault(ls[1], i)
    return out

def first_page_containing(txt, needle):
    for i, pg in enumerate(txt.split("\f"), 1):
        if needle.lower() in pg.lower(): return i
    return None

def norm(cell):
    return re.sub(r'[*_`]', '', cell).strip()

def page_for(label, op, txt):
    """Map a contents row label to a printed page."""
    l = norm(label)
    if not l: return None
    m = re.match(r'(?:Unit\s*)?(\d+)$', l, re.I) or re.match(r'Unit\s*(\d+)\b', l, re.I)
    if m: return op.get("UNIT %s" % int(m.group(1)))
    if l.lower().startswith("starting point"):
        # The opener may print the bare words or the full title, e.g.
        # "Starting Point · Four Tenses and a Habit".
        for k in op:
            if k.lower().startswith("starting point"): return op[k]
        return None
    if l.lower().startswith("back matter"):     return op.get("Grammar reference")
    for k in op:
        if k.lower() == l.lower() or k.lower().startswith(l.lower()[:14]): return op[k]
    return first_page_containing(txt, l)

def rewrite(front, txt):
    op   = openers(txt)
    src  = open(front, encoding="utf-8").read()
    lines = src.split("\n")
    i = next(k for k, l in enumerate(lines) if l.strip() == "## Contents")
    j = i
    while j < len(lines) and not lines[j].lstrip().startswith("|"): j += 1
    start = j
    while j < len(lines) and lines[j].lstrip().startswith("|"): j += 1
    end = j
    rows = [l for l in lines[start:end]]
    header, sep, body = rows[0], rows[1], rows[2:]
    has_page = norm(header.strip("|").split("|")[-1]).lower() == "page"
    out, changed = [], 0
    for r in body:
        cells = r.strip().strip("|").split("|")
        # Books 1-3 label the row in cell 0; Books 4-6 in cell 1.
        label = norm(cells[0]) or norm(cells[1] if len(cells) > 1 else "")
        p = page_for(label, op, txt)
        if has_page:
            old = norm(cells[-1])
            new = str(p) if p else old
            if old != new: changed += 1
            cells[-1] = " %s " % new
            out.append("|" + "|".join(cells) + "|")
        else:
            cells.append(" %s " % (p if p else ""))
            changed += 1
            out.append("|" + "|".join(cells) + "|")
    if not has_page:
        header = "|" + "|".join(header.strip().strip("|").split("|") + [" Page "]) + "|"
        sep    = "|" + "|".join(sep.strip().strip("|").split("|") + ["---"]) + "|"
    lines[start:end] = [header, sep] + out
    open(front, "w", encoding="utf-8").write("\n".join(lines))
    return changed

if __name__ == "__main__":
    pdfdir = sys.argv[1]
    total = 0
    for d, stem in BOOKS:
        pdf = os.path.join(pdfdir, stem + ".pdf")
        # A pdf dir holding only some of the books is normal: a single book can be
        # converged on its own without reconverting the whole shelf.
        if not os.path.exists(pdf):
            print("%-8s %-24s no pdf in %s, skipped" % (d, stem, pdfdir))
            continue
        txt = subprocess.run(["pdftotext", pdf, "-"], capture_output=True,
                             text=True, check=True).stdout
        n = rewrite(os.path.join(WF, d, "text", "front.md"), txt)
        print("%-8s %-24s %d contents rows updated" % (d, stem, n))
        total += n
    print("total", total)
    sys.exit(0 if total == 0 else 2)
