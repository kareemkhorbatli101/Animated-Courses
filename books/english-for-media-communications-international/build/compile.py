#!/usr/bin/env python3
"""
compile.py — turn the line-oriented DSL in ../content into the Student's Book (.docx).

Every tag maps onto one element of the design system decoded in render.py.
"""
import os, sys, glob, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from render import Doc, BAR_BLUE, BAR_ORANGE, BAR_TEAL

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "dist", "EMC2_International_StudentBook.docx")

BAR_COLOUR = {"orange": BAR_ORANGE, "blue": BAR_BLUE, "teal": BAR_TEAL}


def parse(path):
    """-> [(tag, args, body_lines)]"""
    blocks, cur = [], None
    for raw in open(path, encoding="utf-8").read().split("\n"):
        if re.match(r"@[A-Z]", raw):
            if cur:
                blocks.append(cur)
            tag, _, rest = raw[1:].partition(" ")
            args = [a.strip() for a in rest.split("|")] if rest.strip() else []
            cur = (tag, args, [])
        elif cur is not None and raw.strip():
            cur[2].append(raw.rstrip())
    if cur:
        blocks.append(cur)
    return blocks


def emit(doc, blocks, unit):
    for tag, a, body in blocks:
        text = " ".join(body) if body else (a[0] if a else "")

        if tag == "UNIT":
            doc.unit_head(f"Unit {a[0]}: {a[1]}")
        elif tag == "SUB":
            doc.unit_sub(text)
        elif tag == "BAR":
            doc.bar(a[0], BAR_COLOUR[a[1]])
        elif tag == "TRACK":
            doc.track(text)
        elif tag == "TASK":
            doc.task(text)
        elif tag == "RUBRIC":
            doc.rubric(text)
        elif tag == "TEXT":
            doc.text_block(body)
        elif tag == "BANK":
            doc.wordbank(a if a else [l.strip() for l in body])
        elif tag == "GLOSS":
            doc.gloss(text)
        elif tag == "WATCH":
            doc.watch(text)
        elif tag == "REMEMBER":
            doc.bold_label("Remember:", text)
        elif tag == "PLAN":
            doc.bold_label("Plan (make notes, then write):", text)
        elif tag == "CHECK":
            doc.bold_label("Check before you finish:",
                           "  ".join("☐ " + i for i in body), after=120)
        elif tag == "MODEL":
            doc.heading_label("Model — read this first:")
            doc.text_block(body)
        elif tag == "MODELDEC":
            doc.heading_label("Model — read this first:")
            doc.text_block(["Model decision: " + " ".join(body)])
        elif tag == "USE":
            doc.bold_label("Useful language:", "  ·  ".join(body))
        elif tag == "PHRASES":
            doc.bold_label("Useful phrases:", "  ·  ".join(body))
        elif tag == "PHRASEBANK":
            doc.frame("Phrase bank:", "  ·  ".join(body))
        elif tag == "FRAME":
            doc.frame((a[0] if a else "Frame") + ":",
                      "  ·  ".join(body) if len(body) > 1 else " ".join(body))
        elif tag == "LINE":
            for l in ([a[0]] if a else []) + body:
                doc.line(l)
        elif tag == "EX":
            doc.line(text, after=40)
        elif tag == "BULLET":
            for l in body:
                doc.bullet(l)
        elif tag == "NUM":
            for i, l in enumerate(body, 1):
                doc.line(f"{i}. {l}", after=40)
        elif tag == "GAP":
            for i, l in enumerate(body, 1):
                head, _, tail = l.partition("@@")
                doc.gap(i, head.strip(), tail.strip())
        elif tag == "MCQ":
            n = int(a[0])
            doc.mcq(n, a[1], a[2:6])
        elif tag == "PRON":
            for l in body:
                w, _, st = l.partition("—")
                doc.pron(w.strip(), st.strip())
        elif tag == "AUDIO":
            doc.audio(a[0])
        elif tag == "PRE":
            doc.line("Before you listen: " + text if a and a[0] == "listen"
                     else "Before you read: " + text, after=40)
        elif tag == "WHILE":
            doc.line("While you listen: " + text, after=40)
        elif tag == "CARD":
            doc.bold_label(a[0] + ":", text, after=20)
        elif tag == "CANDO":
            doc.heading_label("Can-Do checklist")
            for l in body:
                doc.checkbox(l)
        elif tag == "MATCH":
            pairs = []
            for l in body:
                left, _, right = l.partition("::")
                pairs.append((left.strip(), right.strip()))
            doc.matching(pairs, re.sub(r"^[a-j]\)\s*", "", a[0]))
        elif tag == "GRAMMAR":
            doc.grammar([[c.strip() for c in l.split("|")] for l in body])
        elif tag == "LABEL":
            doc.heading_label(text)
        elif tag == "BOLD":
            doc.bold_label(a[0] + ":", " ".join(body) if body else "")
        else:
            raise SystemExit(f"unknown tag @{tag} in unit {unit}")


def main():
    doc = Doc()
    files = sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt")),
                   key=lambda p: int(re.search(r"unit-(\d+)", p).group(1)))
    if not files:
        raise SystemExit("no content files")
    for f in files:
        n = int(re.search(r"unit-(\d+)", f).group(1))
        emit(doc, parse(f), n)
    size = doc.build(OUT, "English for Media and Communications 2 — International Edition")
    print(f"wrote {OUT} {size} bytes")


if __name__ == "__main__":
    main()
