"""Census chapters 6-18 the way the generator will have to read them.

Everything the plan claims about these thirteen chapters comes from here, not from the
shape of the five that are built. The point of running it is to find where they DIFFER:
chapters 2 to 5 all have six numbered sections and seven case items, and the generator
has that shape written into two defaults.

Run from anywhere; it inserts the pipeline on sys.path itself.
"""
import re
import sys

sys.path.insert(0, r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from tools import cma_book          # noqa: E402
from tools import cma_scenes as CS  # noqa: E402

BUILT = (2, 3, 4, 5)
TODO = tuple(range(6, 19))

rows = []
print("=" * 100)
print("THE SHAPE OF EVERY CHAPTER, BUILT AND UNBUILT")
print("=" * 100)
print("%-4s %-52s %4s %6s %6s %5s %5s %5s %5s %5s"
      % ("ch", "title", "sec", "blocks", "words", "SC", "P", "case", "figs", "drawn"))

def title_of(d):
    c = d.get("chapter")
    return (c.get("title", "") if isinstance(c, dict) else str(c or "")).strip()


for n in BUILT + TODO:
    d = cma_book.load(n)
    blob = re.sub(r"\s+", " ", CS._blob(d))
    secs = [s["title"].strip() for s in d["sections"]]
    numbered = [s for s in secs if re.match(r"^%d\.\d" % n, s)]
    qs = CS.questions(d)
    sc = [q for q in qs if q["id"].startswith("SC")]
    pr = [q for q in qs if q["id"].startswith("P")]
    cases = sorted(set(re.findall(r"\bC%d-\d+" % n, blob)))
    allfigs = sorted(CS.all_figures(d, n))
    drawn = sorted(CS.figures_of(d, n))
    rows.append({
        "n": n, "title": title_of(d), "sec": len(numbered),
        "blocks": len(d["seq"]), "words": len(blob.split()),
        "sc": len(sc), "p": len(pr), "case": len(cases),
        "figs": len(allfigs), "drawn": len(drawn),
        "secs": numbered, "cases": cases, "allfigs": allfigs, "drawnfigs": drawn,
        "built": n in BUILT,
    })
    print("%-4d %-52s %4d %6d %6d %5d %5d %5d %5d %5d"
          % (n, title_of(d)[:52], len(numbered), len(d["seq"]),
             len(blob.split()), len(sc), len(pr), len(cases), len(allfigs),
             len(drawn)))

print()
print("TOTALS for the thirteen unbuilt chapters:")
un = [r for r in rows if not r["built"]]
for k, label in (("sec", "numbered sections"), ("blocks", "blocks"),
                 ("words", "words"), ("sc", "section checks"),
                 ("p", "practice questions"), ("case", "case items"),
                 ("figs", "numbered figures"), ("drawn", "drawn figures")):
    print("   %-20s %6d   (built chapters 2-5: %d)"
          % (label, sum(r[k] for r in un),
             sum(r[k] for r in rows if r["built"])))

print()
print("=" * 100)
print("WHERE THESE CHAPTERS BREAK THE GENERATOR'S TWO DEFAULTS")
print("=" * 100)
print("  order_of(n, sections=6)  lists s{n}-1 .. s{n}-6 and then the back matter.")
print("  terms_scenes(n, sections=4) draws four Term Bridge boxes on the term bank.")
print()
lost = crash = fits = 0
for r in un:
    extra = r["sec"] - 6
    if extra > 0:
        lost += extra
        what = ("s%d-7..s%d-%d WOULD NOT BE WRITTEN: the page is built and then left off "
                "the list" % (r["n"], r["n"], r["sec"]))
    elif extra < 0:
        crash += 1
        what = ("order_of NAMES s%d-%d..s%d-6, WHICH DO NOT EXIST: write() does "
                "pages[pid] and raises KeyError" % (r["n"], r["sec"] + 1, r["n"]))
    else:
        fits += 1
        what = "fits the default"
    print("   ch%-3d %d numbered sections -> %s" % (r["n"], r["sec"], what))
print()
print("   %d of the thirteen fit the default." % fits)
print("   %d chapters have MORE than six: %d section pages would be built and silently "
      "dropped." % (len([r for r in un if r["sec"] > 6]), lost))
print("   %d chapters have FEWER than six: the generator raises KeyError on a page id "
      "it invented." % crash)
print()
print("   Both directions matter and they fail differently. Too few is LOUD - the build")
print("   stops. Too many is SILENT - the chapter ships missing a section, and no gate")
print("   counts section pages against the book.")

print()
print("=" * 100)
print("THE CASE QUESTION: does every chapter have seven items, and an exhibit?")
print("=" * 100)
for r in un:
    d = cma_book.load(r["n"])
    cap = None
    for i, b in enumerate(d["seq"]):
        if b.get("k") != "Caption":
            continue
        m = re.match(r"^Figure (F\d\d-\d\d)\.\s*Case exhibit\b", str(b.get("t", "")).strip())
        if m:
            nxt = d["seq"][i + 1] if i + 1 < len(d["seq"]) else {}
            cap = (m.group(1), nxt.get("k"),
                   len(nxt.get("rows", [])) if nxt.get("k") == "table" else 0,
                   len(nxt["rows"][0]) if nxt.get("k") == "table" and nxt.get("rows") else 0)
            break
    key = None
    for s in d["sections"]:
        if not s["title"].lower().startswith("answers"):
            continue
        for b in s["blocks"]:
            if b["k"] == "table" and b.get("rows") and len(b["rows"][0]) == 2 \
               and str(b["rows"][0][1]).strip().lower() == "category":
                key = (str(b["rows"][0][0]).strip(), len(b["rows"]) - 1)
                break
        if key:
            break
    print("   ch%-3d %-14s exhibit %-34s category key %s"
          % (r["n"], "%s..%s" % (r["cases"][0], r["cases"][-1]) if r["cases"] else "NONE",
             ("%s, %s %dx%d" % cap) if cap else "NOT FOUND",
             ("%r, %d rows" % key) if key else "NOT FOUND"))

print()
print("=" * 100)
print("THE EXTENDED EXAMPLE: which section is it, and is it still x.6?")
print("=" * 100)
for r in un:
    hit = [s for s in r["secs"] if "extended example" in s.lower()]
    print("   ch%-3d %s" % (r["n"], hit[0][:88] if hit else "NO SECTION NAMED 'Extended Example'"))

print()
print("=" * 100)
print("THE CHAPTER SUMMARY PARAGRAPH: is there one, and how long?")
print("=" * 100)
for r in un:
    d = cma_book.load(r["n"])
    para = None
    for i, b in enumerate(d["seq"]):
        if not str(b.get("k", "")).startswith("Heading") \
           or str(b.get("t", "")).strip().lower() != "chapter summary":
            continue
        for j in range(i + 1, min(i + 8, len(d["seq"]))):
            c = d["seq"][j]
            if str(c.get("k", "")).startswith("Heading"):
                break
            t = str(c.get("t", "")).strip()
            if c.get("k") == "p" and not t.startswith("Figure F") and len(t) > 200:
                para = t
                break
        break
    print("   ch%-3d %s" % (r["n"], ("%d words: %s..." % (len(para.split()), para[:66]))
                            if para else "NO SUMMARY PARAGRAPH"))
