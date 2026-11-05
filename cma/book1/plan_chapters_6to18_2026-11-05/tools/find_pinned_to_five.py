"""Where the toolchain is still pinned to the five chapters that are built.

The generator took `--chapter N` and still died on chapter 3, because the chapter was a
parameter in thirty-two functions and a literal in forty-two lines. The same question has
to be asked again for chapters 6 to 18, and asked of the GATES as well this time.

Two kinds of finding, and they fail differently:

  DEFAULT  a function whose signature carries the shape of chapter 2 as a default value.
           A chapter that differs is built wrong, or not at all, and nothing says so.
  REGISTRY a dict keyed by chapter, where a missing key means the chapter silently gets
           nothing - or, where the code raises, loudly gets nothing.

A registry is not a defect: a chapter's traps, its summary blanks and its Extended
Example cannot be generated, and keying them by chapter is what makes a missing one
visible. They are listed so the plan can count the authoring, not to be removed.

Run from anywhere; it reads the pipeline's source.
"""
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

PIPE = r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python"
GEN = os.path.join(PIPE, "tools", "cma_scenes.py")
GATES = [os.path.join(PIPE, "gates", g) for g in
         ("cma_provenance.py", "cma_render.py", "cma_interactive.py", "cma_crosstie.py")]

gen = io.open(GEN, encoding="utf-8").read()
lines = gen.splitlines()

print("=" * 96)
print("DEFAULTS THAT CARRY A CHAPTER'S SHAPE")
print("=" * 96)
DEFAULTS = [
    (r"def order_of\(n, sections=(\d+)\)",
     "the page list: s{n}-1 .. s{n}-{sections}, then the back matter"),
    (r"def terms_scenes\(n, sections=(\d+)\)",
     "the term bank: how many Term Bridge boxes it shows"),
    (r"def statement_scene\(d, n=(\d+)\)",
     "which chapter's statement to read when the caller does not say"),
]
for pat, what in DEFAULTS:
    for i, line in enumerate(lines, 1):
        m = re.search(pat, line)
        if m:
            print("  line %-5d default=%-3s  %s" % (i, m.group(1), what))
            print("            %s" % line.strip()[:84])

print()
print("=" * 96)
print("REGISTRIES KEYED BY CHAPTER: which chapters each one covers today")
print("=" * 96)
REGISTRIES = [
    ("TRAPS", "the named traps a chapter's scenes record, with the author's sentence"),
    ("CASE_RULES", "the rule each case item turns on, quoted from the section"),
    ("SUMMARY_CLOZE", "the phrases blanked in the chapter summary paragraph"),
    ("EXTRA_BY_CHAPTER", "the scenes a section adds beyond its figures and its checks"),
    ("EXTENDED_EXAMPLE", "section x.N's builder, which differs in kind per chapter"),
    ("BRIEF_ANIM_BY_CHAPTER", "the drawing each page's Brief shows"),
]
for name, what in REGISTRIES:
    # EXTRA_BY_CHAPTER is defined INSIDE build(), so it is indented, and SUMMARY_CLOZE's
    # values are TUPLES rather than dicts. A pattern written for the first registry seen
    # reported one of these as "NOT FOUND" and the other as having no per-chapter keys,
    # which is the population mistake this file exists to find in other people's code.
    m = re.search(r"^\s*%s = \{" % re.escape(name), gen, re.M)
    if not m:
        print("  %-24s NOT FOUND" % name)
        continue
    indent = len(re.match(r"\s*", lines[gen[:m.start()].count("\n")]).group(0))
    body = gen[m.end():]
    end = re.search(r"^\s{%d}\}" % indent, body, re.M)
    body = body[:end.start()] if end else body[:8000]
    keys = sorted({int(k) for k in re.findall(r"^\s{1,8}(\d+): [\{\(\[]", body, re.M)})
    print("  %-24s %-28s covers %s" % (name, what[:28], keys or "no per-chapter keys"))
    missing = [n for n in range(6, 19) if n not in keys]
    print("  %-24s %s" % ("", "chapters 6-18 missing: %s" % (missing or "none")))

print()
print("=" * 96)
print("THE GATES: which chapters each one walks")
print("=" * 96)
for p in GATES:
    src = io.open(p, encoding="utf-8").read()
    m = re.search(r"^(CHAPTERS|LEDGERS) = (.+)$", src, re.M)
    print("  %-22s %s" % (os.path.basename(p), m.group(0) if m else "no chapter list"))

print()
print("=" * 96)
print("WHAT THAT ADDS UP TO FOR THIRTEEN CHAPTERS")
print("=" * 96)
print("  2 defaults to replace with a count read from the chapter.")
print("  6 registries x 13 chapters = 78 entries to author, every one of them the")
print("    author's own words or his own figure - none of it generable.")
print("  4 gates to extend, and one of them (cma_crosstie) needs a ledger per chapter")
print("    before it can say anything.")
