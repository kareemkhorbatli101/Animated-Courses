"""Census chapters 3-5 the way the generator will have to read them.

Everything the plan claims about these chapters comes from here, not from the shape of
Chapter 2. Run from the pipeline repo.
"""
import re
import sys

sys.path.insert(0, r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from tools import cma_book  # noqa: E402
from tools import cma_scenes as CS  # noqa: E402

for n in (2, 3, 4, 5):
    d = cma_book.load(n)
    blob = re.sub(r"\s+", " ", CS._blob(d))
    print("=" * 78)
    print("CHAPTER %d  %s" % (n, d.get("chapter", "")))
    print("=" * 78)

    secs = [s["title"].strip() for s in d["sections"]]
    numbered = [s for s in secs if re.match(r"^\d+\.\d", s)]
    print("  sections (%d numbered of %d):" % (len(numbered), len(secs)))
    for s in secs:
        print("     ", s[:72])

    qs = CS.questions(d)
    byk = {}
    for q in qs:
        byk.setdefault(q["id"][:1], []).append(q)
    print("  questions: %d total  %s"
          % (len(qs), {k: len(v) for k, v in sorted(byk.items())}))
    bysec = {}
    for q in qs:
        bysec.setdefault(q.get("sec"), 0)
        bysec[q["sec"]] += 1
    print("     per section:", dict(sorted(bysec.items(), key=lambda x: str(x[0]))))

    ex = CS.explanations(d)
    print("  explanations keyed: %d" % len(ex))

    figs = CS.figures_of(d, n)
    allf = CS.all_figures(d, n)
    print("  figures: %d drawn (png) of %d named in the chapter" % (len(figs), len(allf)))
    print("     drawn:", sorted(figs)[:14])

    # term bridges + key terms
    terms = d.get("terms") or []
    ar = [t for t in terms if isinstance(t, (list, tuple)) and len(t) > 1
          and re.search(r"[\u0600-\u06FF]", str(t[1]))]
    print("  terms in the extraction: %d (%d carry Arabic)" % (len(terms), len(ar)))

    # the things the generator keys on
    for marker in ("WORKED EXAMPLE", "Extended Example", "EXAM TRAP", "FALSE-FRIEND",
                   "LANGUAGE FOCUS", "TERM BRIDGE", "SECTION CHECK"):
        print("  %-18s %d" % (marker, len(re.findall(re.escape(marker), blob))))

    # numbers: how big is the arithmetic surface?
    amounts = set(re.findall(r"\b\d{1,3}(?:,\d{3})+\b", blob))
    print("  distinct comma-formatted amounts: %d" % len(amounts))
    print()
