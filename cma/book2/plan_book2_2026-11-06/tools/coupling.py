"""How much of the CMA toolchain is addressed to BOOK 1 ONLY?

Book 2's chapter 5 is not Book 1's chapter 5, so every table keyed by the bare chapter
number is an address that has quietly gained a dimension - the same fault the chapters 3-5
work hit when 42 lines had the chapter number written in. This counts them rather than
estimating, and separates the kinds of coupling because they cost very different amounts:

  PATH   a literal book1 / a BOOK constant / an output name  -> parameterise, mechanical
  KEYED  a dict keyed by the bare chapter number             -> re-key by (book, chapter)
  SHARED a renderer in book1/assets that Book 2 also needs   -> decide: move, or copy+gate

    python tools/coupling.py       ->  evidence/coupling.txt
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _tee import Tee, pipeline_root

ROOT = pipeline_root()
PUB = r"D:\MyWork\AnimatedMatrix\Apps\_publish_Animated-Courses\cma\book1"

FILES = ["tools/cma_book.py", "tools/cma_terms.py", "tools/cma_scenes.py",
         "tools/cma_index.py", "gates/cma_provenance.py", "gates/cma_render.py",
         "gates/cma_interactive.py", "gates/cma_crosstie.py", "gates/cma_depth.py"]

PATH_PAT = re.compile(r"book1|Book1|book_1|_publish_Animated-Courses|BOOK\s*=")
KEYED_PAT = re.compile(r"^\s{0,12}(\d{1,2})\s*:\s*[\(\{\[\"']")
TOPTABLE = re.compile(r"^([A-Z_][A-Z0-9_]*)\s*=\s*[\{\[]")
# an id regex with the chapter number interpolated - these are what the `2` prefix breaks
IDPAT = re.compile(r"""%0?2?d[-\\]|["'](?:F|SC|P|C)%0?2?d""")


def main():
    with Tee("coupling.txt") as t:
        t.w("BOOK-1 COUPLING IN THE CMA TOOLCHAIN")
        t.w("=" * 86)
        t.w("%-26s %-7s %-6s %-7s %s"
            % ("file", "lines", "PATH", "KEYED", "id regexes with the chapter interpolated"))
        t.w("-" * 86)
        tables, tot = {}, dict(lines=0, path=0, keyed=0, idp=0)
        idlines = []
        for rel in FILES:
            p = os.path.join(ROOT, rel.replace("/", os.sep))
            if not os.path.exists(p):
                t.w("%-26s MISSING" % rel)
                continue
            lines = open(p, encoding="utf-8").read().split("\n")
            cur, npath, nkey, nid = None, 0, 0, 0
            for i, ln in enumerate(lines, 1):
                m = TOPTABLE.match(ln)
                if m:
                    cur = m.group(1)
                bare = ln.strip()
                if PATH_PAT.search(ln) and not bare.startswith("#"):
                    npath += 1
                if KEYED_PAT.match(ln):
                    nkey += 1
                    if cur:
                        tables[cur] = tables.get(cur, 0) + 1
                if IDPAT.search(ln) and not bare.startswith("#"):
                    nid += 1
                    idlines.append("%s:%d  %s" % (os.path.basename(rel), i, bare[:88]))
            tot["lines"] += len(lines)
            tot["path"] += npath
            tot["keyed"] += nkey
            tot["idp"] += nid
            t.w("%-26s %-7d %-6d %-7d %d"
                % (os.path.basename(rel), len(lines), npath, nkey, nid))
        t.w("-" * 86)
        t.w("%-26s %-7d %-6d %-7d %d"
            % ("TOTAL", tot["lines"], tot["path"], tot["keyed"], tot["idp"]))
        t.w("")
        t.w("THE TABLES KEYED BY A BARE CHAPTER NUMBER - each must gain the book")
        t.w("=" * 86)
        for k in sorted(tables, key=lambda x: -tables[x]):
            t.w("   %-26s %d rows" % (k, tables[k]))
        t.w("   %-26s %d rows TOTAL" % ("", sum(tables.values())))
        t.w("")
        t.w("Left alone, Book 1 chapter 5's row answers for Book 2 chapter 5 - silently, and")
        t.w("with the author's own sentences, so a provenance check would pass it. `.get(n)`")
        t.w("returning an empty dict is the mechanism: a missing row reads as 'nothing to")
        t.w("add', never as 'wrong book'.")
        t.w("")
        t.w("THE ID REGEXES WITH THE CHAPTER NUMBER INTERPOLATED (%d lines)" % tot["idp"])
        t.w("=" * 86)
        t.w("These are the lines the author's leading `2` breaks. Each finds ZERO on Book 2")
        t.w("and zero is indistinguishable from clean.")
        for x in idlines:
            t.w("   %s" % x)
        t.w("")
        t.w("THE PUBLISHED SITE")
        t.w("=" * 86)
        nf = 0
        for dp, dn, fn in os.walk(PUB):
            dn[:] = [x for x in dn if not x.startswith("plan_")]
            nf += len(fn)
        t.w("book1/ holds %d files (plan_* excluded)" % nf)
        assets = os.path.join(PUB, "assets")
        ents = sorted(os.listdir(assets))
        per_ch = [x for x in ents if re.search(r"-ch\d\d\.js$", x)]
        shared = [x for x in ents if x not in per_ch]
        t.w("assets/ has %d entries: %d are per-chapter data, %d are shared renderers/chrome"
            % (len(ents), len(per_ch), len(shared)))
        t.w("")
        t.w("the shared ones - what Book 2 needs a copy of, or a shared home for:")
        for x in shared:
            t.w("   %s" % x)


if __name__ == "__main__":
    main()
