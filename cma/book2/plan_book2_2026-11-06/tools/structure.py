"""Is CMA Book 2 the same book as Book 1, and what does it contain?

Every number here comes from `tools.cma_book` and `tools.cma_scenes` - the readers the Book 1
site is actually built with. That is deliberate: if Book 2 does NOT have Book 1's shape, the
number comes out wrong rather than coming out flattering, and the plan built on it fails
early instead of late.

    python tools/structure.py      ->  evidence/structure.txt
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


def boxes(d, start):
    n = 0
    for b in d["seq"]:
        if b["k"] == "table" and len(b["rows"]) == 1 and len(b["rows"][0]) == 1:
            if b["rows"][0][0].strip().upper().startswith(start):
                n += 1
    return n


def main():
    from docx import Document
    with Tee("structure.txt") as t:
        t.w("CMA BOOK 2 - STRUCTURE, measured with the Book 1 readers")
        t.w("=" * 86)
        p2 = BOOKS[2]
        t.w("file   %s" % p2)
        t.w("bytes  %d" % os.path.getsize(p2))
        t.w("sha256 %s" % cma_book.sha256(p2))
        t.w("")

        doc = Document(p2)
        h1 = [x for _i, x in cma_book.chapters(doc)]
        titles = cma_book.chapter_titles(doc)
        t.w("Heading 1 blocks: %d; chapters after dropping front matter/appendices: %d"
            % (len(h1), len(titles)))
        t.w("dropped: %s" % [x for x in h1 if x not in titles])
        t.w("")
        t.w("THE EIGHTEEN CHAPTERS")
        for i, x in enumerate(titles, 1):
            t.w("  %2d. %s" % (i, x))
        t.w("")

        t.w("PER CHAPTER")
        t.w("-" * 86)
        t.w("%-5s %-5s %-5s %-5s %-5s %-5s %-5s %-4s %-4s %-4s %-4s %-4s"
            % ("ch", "secs", "SC", "P", "expl", "figs", "img", "trm", "TB", "ET", "WE", "YT"))
        rows = []
        for n in range(1, len(titles) + 1):
            d = cma_book.extract(p2, n)
            qs = S.questions(d)
            ex = S.explanations(d)
            sc = [q for q in qs if q["id"].startswith("SC")]
            pr = [q for q in qs if q["id"].startswith("P")]
            numbered = [s["title"] for s in d["sections"] if re.match(r"^\d+\.\d+", s["title"])]
            cids = sorted({m.group(0) for b in d["seq"]
                           for m in [re.match(r"^C\d+-\d+", str(b.get("t", "")).strip())] if m})
            yt = S._your_turn_key(d)
            r = dict(n=n, secs=len(numbered), sc=len(sc), p=len(pr),
                     expl=sum(1 for q in qs if q["id"] in ex),
                     figs=len(d["figures"]),
                     img=sum(1 for b in d["seq"] if b["k"] == "image"),
                     terms=len(d["terms"]),
                     ar=sum(1 for x in d["terms"] if x["ar"]),
                     tb=boxes(d, "TERM BRIDGE"), et=boxes(d, "EXAM TRAP"),
                     we=boxes(d, "WORKED EXAMPLE"), ytb=boxes(d, "YOUR TURN"),
                     cases=len(cids), ytpairs=len(yt), blocks=len(d["seq"]),
                     chars=len(d["text"]), tables=sum(1 for b in d["seq"] if b["k"] == "table"))
            rows.append(r)
            t.w("%-5d %-5d %-5d %-5d %-5d %-5d %-5d %-4d %-4d %-4d %-4d %-4d"
                % (n, r["secs"], r["sc"], r["p"], r["expl"], r["figs"], r["img"],
                   r["terms"], r["tb"], r["et"], r["we"], r["ytb"]))
        t.w("-" * 86)

        def tot(k):
            return sum(r[k] for r in rows)

        t.w("TOTALS")
        t.w("  numbered sections        %d" % tot("secs"))
        t.w("  Section Check questions  %d" % tot("sc"))
        t.w("  Practice questions       %d" % tot("p"))
        t.w("  questions TOTAL          %d" % (tot("sc") + tot("p")))
        t.w("  of those, EXPLAINED      %d   <-- must equal the total" % tot("expl"))
        t.w("  captioned figures        %d" % tot("figs"))
        t.w("  embedded drawings        %d" % tot("img"))
        t.w("  term rows                %d  (with Arabic: %d)" % (tot("terms"), tot("ar")))
        t.w("  TERM BRIDGE boxes        %d" % tot("tb"))
        t.w("  EXAM TRAP boxes          %d" % tot("et"))
        t.w("  WORKED EXAMPLE boxes     %d" % tot("we"))
        t.w("  YOUR TURN boxes          %d" % tot("ytb"))
        t.w("  case items (C-ids)       %d" % tot("cases"))
        t.w("  Your-turn answer pairs   %d" % tot("ytpairs"))
        t.w("  blocks / chars           %d / %d" % (tot("blocks"), tot("chars")))
        t.w("  tables                   %d" % tot("tables"))
        t.w("")

        t.w("THE ONE DIFFERENCE FROM BOOK 1: THE AUTHOR'S ID PREFIX")
        t.w("=" * 86)
        t.w("Book 2 namespaces every id with a leading 2, inserted before the two-digit")
        t.w("chapter number. Nothing else about the scheme changes.")
        t.w("")
        for bk, n in ((1, 7), (2, 7)):
            d = cma_book.extract(BOOKS[bk], n)
            caps = [b["t"] for b in d["seq"] if b.get("k") == "Caption"][:2]
            qs = S.questions(d)
            cids = sorted({m.group(0) for b in d["seq"]
                           for m in [re.match(r"^C\d+-\d+", str(b.get("t", "")).strip())] if m})
            t.w("BOOK %d chapter 7" % bk)
            t.w("   figure   %s" % re.search(r"F\d+-\d\d", caps[0]).group(0))
            t.w("   question %s / %s" % (qs[0]["id"], [q["id"] for q in qs if
                                                       q["id"].startswith("P")][0]))
            t.w("   case     %s" % (cids[0] if cids else "none"))
            t.w("   caption  %s" % caps[0][:96])
        t.w("")
        t.w("CONSEQUENCE. `figure_tables` searches for `F%02d-\\d\\d` % n, so on Book 2 it")
        t.w("matches NOTHING and returns an empty dict - which a count reads as a clean zero,")
        t.w("not as a failure. Any Book 2 census must assert a POSITIVE count per chapter.")
        t.w("")

        t.w("THE EXTENDED EXAMPLE: the step list VARIES, unlike Book 1's")
        t.w("=" * 86)
        for n in range(1, len(titles) + 1):
            d = cma_book.extract(p2, n)
            ee = [s for s in d["sections"] if "extended example" in s["title"].lower()]
            if not ee:
                t.w("ch%02d  (none)" % n)
                continue
            steps = [b["t"] for b in ee[-1]["blocks"] if b["k"] == "Heading 3"]
            t.w("ch%02d  %d steps: %s" % (n, len(steps), " | ".join(steps)))


if __name__ == "__main__":
    main()
