#!/usr/bin/env python3
"""
compile.py — turn the line-oriented DSL in ../content into the Student's Book (.docx).

Every tag maps onto one element of the design system decoded in render.py.
The source puts a hard page break before each unit heading; nothing else breaks.
"""
import os, sys, glob, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from render import Doc

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FIGDIR = os.path.join(ROOT, "build", "figures")
OUT = os.path.join(ROOT, "dist", "EnglishForBanking_International_StudentBook.docx")


def parse(path):
    """-> [(tag, args, body_lines)].  '@@' inside a block is kept as a separator."""
    blocks, cur = [], None
    for raw in open(path, encoding="utf-8").read().split("\n"):
        if raw.strip() == "@@":
            if cur:
                cur[2].append("@@")
            continue
        if raw.startswith("@"):
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


def split_at(body, sep="@@"):
    """Split a body on the '@@' separator -> [[lines], [lines], …]"""
    groups, cur = [], []
    for l in body:
        if l.strip() == sep:
            groups.append(cur); cur = []
        else:
            cur.append(l.strip())
    groups.append(cur)
    return groups


def emit(doc, blocks, unit):
    for tag, a, body in blocks:
        text = " ".join(body) if body else (a[0] if a else "")

        if tag == "BIG":
            doc.big(text)
        elif tag == "SUB":
            doc.sub(text, sz=int(a[1]) if len(a) > 1 else 24,
                    italic=(len(a) > 2 and a[2] == "i"))
        elif tag == "H2":
            doc.h2(text)
        elif tag == "PARA":
            doc.para_text(text)
        elif tag == "UNIT":
            if unit > 1:
                doc.pagebreak()
            doc.unit_head(f"Unit {a[0]} · {a[1]}")
        elif tag == "INTRO":
            doc.intro(text)
        elif tag == "PART":
            doc.part_bar(a[0], a[1] if len(a) > 1 else "")
        elif tag == "TASK":
            doc.task(a[0], a[1])
        elif tag == "GF":
            doc.task("Grammar Focus", "")
        elif tag == "INSTR":
            doc.instr(text)
        elif tag == "EX":
            doc.example(text)
        elif tag == "LINE":
            for l in ([a[0]] if a else []) + body:
                doc.line(l)
        elif tag == "BULLET":
            for l in ([a[0]] if a else []) + body:
                doc.bullet(l)
        elif tag == "NUM":
            for i, l in enumerate(body, 1):
                doc.num(i, l)
        elif tag == "FRAME":
            for l in body:
                doc.small(l)
        elif tag == "USEFUL":
            doc.small(" · ".join(body) if body else text,
                      bold_prefix="Useful language: ")
        elif tag == "PHRASES":
            doc.small(" · ".join(body) if body else text,
                      bold_prefix="Phrase bank: ")
        elif tag == "GREEN":
            doc.small(" ".join(body) if body else (a[1] if len(a) > 1 else ""),
                      bold_prefix=a[0] + " ")
        elif tag == "STRETCH":
            doc.small(text, bold_prefix="Stretch: ")
        elif tag == "CARD":
            doc.small(" ".join(body) if body else text,
                      colour="404040", italic=False, bold_prefix=a[0] + "  " if a else None)
        elif tag == "PRON":
            doc.pron(text)
        elif tag == "REMEMBER":
            doc.remember(text)
        elif tag == "TIP":
            doc.tip(text)
        elif tag == "AUDIO":
            doc.audio(a[0])
        elif tag == "CHECK":
            doc.label_block("Check before you finish", body)
        elif tag == "CANDO":
            doc.label_block("Can-Do checklist — tick what you can do now", body)
        elif tag == "PLAN":
            doc.label_block("Plan — make notes first", body)
        elif tag == "BANK":
            doc.wordbank(a if a else [l.strip() for l in body])
        elif tag == "MODEL":
            doc.model(body)
        elif tag == "SCRIPT":
            doc.script(body)
        elif tag == "READ":
            doc.reading(a[0], a[1] if len(a) > 1 else "", body)
        elif tag == "WATCH":
            doc.watch(body)
        elif tag == "WRITE":
            doc.write_box()
        elif tag == "GLOSS":
            doc.glossary(body)
        elif tag == "MATCH":
            pairs = []
            for l in body:
                left, _, right = l.partition("::")
                pairs.append((left.strip(), right.strip()))
            doc.matching(pairs, re.sub(r"^[a-j]\)\s*", "", a[0]))
        elif tag == "GRAMMAR":
            doc.grammar([[c.strip() for c in l.split("|")] for l in body])
        elif tag == "FIG":
            doc.fig(a[0])
        elif tag == "PB":
            doc.pagebreak()
        else:
            raise SystemExit(f"unknown tag @{tag} in unit {unit}")


def main():
    doc = Doc(FIGDIR)
    def order(p):
        b = os.path.basename(p)
        if b == "front.txt":
            return 0
        if b == "back.txt":
            return 99
        return int(re.search(r"unit-(\d+)", b).group(1))

    files = sorted(glob.glob(os.path.join(ROOT, "content", "*.txt")), key=order)
    if not files:
        raise SystemExit("no content files")
    for f in files:
        m = re.search(r"unit-(\d+)", os.path.basename(f))
        emit(doc, parse(f), int(m.group(1)) if m else 0)
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    size = doc.build(OUT, "English for Banking & Finance — International Edition")
    print(f"wrote {OUT} {size} bytes")


if __name__ == "__main__":
    main()
