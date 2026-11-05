"""Every figure caption in chapters 6-18, with what follows it.

The instrument a section gets is decided by what the author DRAWS there, so the plan's
instrument table is written from this file and not from a guess about what a chapter on
leases probably needs. For each figure: its caption, whether it is a picture or a table,
and for a table its shape and the distinct values in its answer columns - because a
column whose cells are a small repeated set is a decision grid, and a column of amounts
is a statement to enter.

Run from anywhere; it inserts the pipeline on sys.path itself.
"""
import re
import sys

sys.path.insert(0, r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from tools import cma_book  # noqa: E402

MONEY = re.compile(r"^\(?[\d,]+(\.\d+)?\)?$|^[\u2014\u2013-]$|^$")

for n in range(6, 19):
    d = cma_book.load(n)
    seq = d["seq"]
    c = d.get("chapter")
    title = c.get("title", "") if isinstance(c, dict) else str(c)
    print("=" * 100)
    print("CHAPTER %d  %s" % (n, title))
    print("=" * 100)
    sec = None
    for i, b in enumerate(seq):
        t = str(b.get("t", "")).strip()
        if str(b.get("k", "")).startswith("Heading") and re.match(r"^%d\.\d" % n, t):
            sec = t.split()[0]
        if b.get("k") != "Caption":
            continue
        m = re.search(r"F%02d-\d\d" % n, t)
        if not m:
            continue
        nxt = seq[i + 1] if i + 1 < len(seq) else {}
        prev = seq[i - 1] if i else {}
        kind = "image" if prev.get("k") == "image" else (
            "table" if nxt.get("k") == "table" else "?")
        print("  %-4s %-9s %-6s %s" % (sec or "-", m.group(0), kind,
                                       re.sub(r"^Figure F\d\d-\d\d\.\s*", "", t)[:78]))
        if kind == "table" and nxt.get("rows"):
            rows = nxt["rows"]
            head = [str(x).strip() for x in rows[0]]
            print("            %d x %d   %s" % (len(rows), len(head),
                                                " | ".join(h[:22] for h in head)))
            # a column whose cells repeat a small set is a DECISION column
            for ci in range(1, len(head)):
                vals = [str(r[ci]).strip() for r in rows[1:]
                        if ci < len(r) and str(r[ci]).strip()]
                if not vals:
                    continue
                uniq = sorted(set(vals))
                if len(uniq) <= 4 and not all(MONEY.match(v) for v in uniq) \
                   and max(len(v) for v in uniq) <= 42:
                    print("              col %-22s decides between: %s"
                          % (head[ci][:22], " / ".join(uniq)[:70]))
    print()
