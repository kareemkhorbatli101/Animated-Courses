#!/usr/bin/env python3
"""
compile.py — parse the book DSL in ../content and emit the Student's Book.

DSL: every block starts with a line beginning '@TAG'; arguments follow on the same line,
separated by '|'. Lines after it, until the next '@' line, are the block's body.
Within a body, '@@' separates the two halves of a two-column block.
"""
import os, sys, glob, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from render import (Doc, para, run, inline, cell, table, onecell_box, esc,
                    INK, NAVY, RED, GOLD, BLUE, TEAL, GREY, RULE, RULE_BLUE,
                    CREAM, CREAM_WARM, CREAM_ALT, BLUE_PALE, RED_PALE,
                    BANNER_SUB, BANNER_ACC, WARM_RULE, WHITE, TBL_W, GEORGIA)

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)


def parse(path):
    blocks = []
    cur = None
    for raw in open(path, encoding="utf-8").read().split("\n"):
        if raw.strip() == "@@":
            if cur is not None:
                cur[2].append("@@")
            continue
        if raw.startswith("@"):
            if cur:
                blocks.append(cur)
            head = raw[1:]
            tag, _, rest = head.partition(" ")
            args = [a.strip() for a in rest.split("|")] if rest.strip() else []
            cur = (tag.strip(), args, [])
        elif cur is not None:
            if raw.strip() != "" or (cur[2] and cur[2][-1] != ""):
                cur[2].append(raw.rstrip())
    if cur:
        blocks.append(cur)
    # trim trailing blank body lines
    return [(t, a, [l for l in b if l.strip() != ""]) for t, a, b in blocks]


def split2(body):
    if "@@" in body:
        i = body.index("@@")
        return body[:i], body[i + 1:]
    return body, []


# ------------------------------------------------------------------ box builders

def box_paras(lines, sz=None, after=100, first_bold_label=None):
    out = []
    for i, ln in enumerate(lines):
        if i == 0 and first_bold_label:
            out.append(para(run(first_bold_label, bold=True, colour=NAVY)
                            + inline(ln[len(first_bold_label):] if ln.startswith(first_bold_label) else ln),
                            after=60))
        else:
            out.append(para(inline(ln, base_sz=sz), after=after))
    return "".join(out)


def warm_box(lines):
    return onecell_box(box_paras(lines), CREAM_WARM, (WARM_RULE, 6), inside=("auto", 4))


def white_box(lines):
    return onecell_box(box_paras(lines, after=60), WHITE, (RULE, 6), inside=("auto", 4))


def cream_box(lines):
    return onecell_box(box_paras(lines, after=60), CREAM, ("auto", 4), inside=("auto", 4))


def case_box(text):
    inner = para(run("A case. ", bold=True, colour=NAVY) + inline(text), after=100)
    return onecell_box(inner, CREAM, ("auto", 4), inside=("auto", 4))


def cando_box(lines):
    ps = "".join(para(run("☐   ", bold=True, colour=TEAL) + inline(l), after=60) for l in lines)
    return onecell_box(ps, CREAM, ("auto", 4), inside=("auto", 4))


def dialogue_box(lines):
    ps = []
    for l in lines:
        name, _, txt = l.partition("|")
        ps.append(para(run(name.strip() + ":  ", bold=True, colour=BLUE) + inline(txt.strip()),
                       after=50))
    return onecell_box("".join(ps), BLUE_PALE, ("auto", 4), inside=("auto", 4))


def reading_box(title, lines):
    ps = [para(run(title, bold=True, colour=NAVY, sz=24, georgia=True), after=80)]
    for l in lines:
        ps.append(para(inline(l), after=100))
    return onecell_box("".join(ps), WHITE, (RULE, 6), inside=("auto", 4))


def wordbox(label, items):
    ps = [para(run(label + "  ", bold=True, colour=RED, sz=18), after=60)]
    runs = []
    for i, it in enumerate(items):
        if i:
            runs.append(run("   ·   ", colour=GOLD))
        runs.append(run(it, bold=True, colour=INK))
    ps.append(para("".join(runs), after=100))
    return onecell_box("".join(ps), CREAM_WARM, (GOLD, 6), inside=("auto", 4))


def grammar_box(header, lines):
    head = cell(para(run(header, bold=True, colour=WHITE, sz=22, georgia=True), after=100),
                TBL_W, shd=BLUE)
    body = cell("".join(para(inline(l), after=50) for l in lines), TBL_W, shd=BLUE_PALE)
    return table([[head], [body]], [TBL_W], border=(RULE_BLUE, 4), inside=(RULE_BLUE, 4))


def watchout_box(text):
    inner = para(run("Watch out!  ", bold=True, colour=RED) + inline(text), after=100)
    x = (f'<w:tbl><w:tblPr><w:tblW w:type="dxa" w:w="{TBL_W}"/><w:tblBorders>'
         f'<w:top w:val="none" w:color="FFFFFF" w:sz="0"/>'
         f'<w:left w:val="single" w:color="{RED}" w:sz="28"/>'
         f'<w:bottom w:val="none" w:color="FFFFFF" w:sz="0"/>'
         f'<w:right w:val="none" w:color="FFFFFF" w:sz="0"/>'
         f'<w:insideH w:val="single" w:color="auto" w:sz="4"/>'
         f'<w:insideV w:val="single" w:color="auto" w:sz="4"/></w:tblBorders>'
         f'<w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid>'
         f'<w:gridCol w:w="{TBL_W}"/></w:tblGrid><w:tr>')
    x += cell(inner, TBL_W, shd=RED_PALE, mar=(120, 180, 120, 180))
    return x + "</w:tr></w:tbl>"


def vocab_table(pairs):
    g = [3200, 5820]
    rows = [[cell(para(run("Word", bold=True, colour=WHITE, sz=20), after=100), g[0], shd=NAVY),
             cell(para(run("Meaning", bold=True, colour=WHITE, sz=20), after=100), g[1], shd=NAVY)]]
    for i, (w, m) in enumerate(pairs):
        shd = CREAM_ALT if i % 2 else None
        rows.append([
            cell(para(run(w, bold=True, colour=INK, sz=20), after=100), g[0], shd=shd),
            cell(para(run(m, sz=20), after=100), g[1], shd=shd)])
    return table(rows, g, border=(RULE, 4), inside=(RULE, 4), first_header=True)


def two_col(left, right, g=(4300, 4720), shd=None):
    lc = cell("".join(para(inline(l), after=50) for l in left), g[0], shd=shd)
    rc = cell("".join(para(inline(l), after=50) for l in right), g[1], shd=shd)
    return table([[lc, rc]], list(g), border=(RULE, 4), inside=(RULE, 4))


def roles_table(rows):
    g = (2600, 6420)
    trs = []
    for r in rows:
        a, _, b = r.partition("|")
        trs.append([cell(para(run(a.strip(), bold=True, colour=NAVY, sz=20), after=100), g[0]),
                    cell(para(inline(b.strip(), base_sz=20), after=100), g[1])])
    return table(trs, list(g), border=(RULE, 4), inside=(RULE, 4))


def criteria_table(title, rows):
    g = (5990, 1010, 1010, 1010)
    head = [cell(para(run(title, bold=True, colour=WHITE, sz=18), after=100), g[0], shd=TEAL)]
    for lab in ("Yes", "Almost", "Not yet"):
        head.append(cell(para(run(lab, bold=True, colour=WHITE, sz=18), after=100, jc="center"),
                         g[1], shd=TEAL))
    trs = [head]
    for r in rows:
        tr = [cell(para(inline(r, base_sz=20), after=100), g[0])]
        for _ in range(3):
            tr.append(cell(para(run("☐", colour=TEAL), after=100, jc="center"), g[1]))
        trs.append(tr)
    return table(trs, list(g), border=(RULE, 4), inside=(RULE, 4), first_header=True)


def assign_title(text):
    inner = para(run(text, bold=True, colour=WHITE, sz=26, georgia=True), after=100)
    return onecell_box(inner, NAVY, ("auto", 4), inside=("auto", 4))


def banner(kicker, unit, title, meta, aimshead, aims):
    ps = [para(run(kicker, bold=True, colour=BANNER_SUB, sz=16), after=60),
          para(run(unit, bold=True, colour=BANNER_ACC, sz=22), after=40),
          para(run(title, bold=True, colour=WHITE, sz=40, georgia=True), after=120),
          para(run("  " + meta + "  ", bold=True, colour=WHITE, sz=17), after=120),
          para(run(aimshead, bold=True, colour=BANNER_ACC, sz=20), after=50)]
    for a in aims:
        ps.append(para(run("•  ", bold=True, colour=BANNER_ACC)
                       + run(a, colour="E8EDF0"), after=50))
    return onecell_box("".join(ps), NAVY, None, inside="none", mar=(220, 260, 220, 260))


# ------------------------------------------------------------------ main compile

def compile_blocks(doc, blocks):
    for tag, args, body in blocks:
        if tag == "BANNER":
            kicker, unit, title, meta, aimshead = (args + [""] * 5)[:5]
            doc.add(banner(kicker, unit, title, meta, aimshead,
                           [l.lstrip("• ").strip() for l in body]))
        elif tag == "UNITHEAD":
            unit, title, beat, cefr = (args + [""] * 4)[:4]
            doc.pagebreak()
            doc.heading(unit, title, kick_sz=24, title_sz=30, after=40)
            doc.add(para(run(beat + "   ", bold=True, colour=NAVY, sz=20)
                         + run(cefr, colour=GREY, sz=20), after=120))
        elif tag == "AIMSHEAD":
            doc.add(para(run(args[0] if args else "In this unit you learn to…",
                             bold=True, colour=NAVY, sz=22), after=60))
        elif tag == "AIMS":
            for i, l in enumerate(body, 1):
                doc.num(i, l)
        elif tag == "FIG":
            doc.fig(args[0], args[1] if len(args) > 1 else "")
        elif tag == "STORY":
            doc.add(para(run(args[0] + " ", bold=True, colour=NAVY) + inline(args[1]),
                         after=140, before=60))
        elif tag == "PART":
            # the source starts Parts 4-11 on a fresh page
            if args[0].strip().isdigit() and int(args[0]) >= 4:
                doc.pagebreak()
            doc.divider()
            doc.heading("PART " + args[0], args[1])
            if len(args) > 2 and args[2]:
                doc.lead(args[2])
        elif tag == "WARMUP":
            doc.divider()
            doc.heading("WARM-UP", args[0])
            if len(args) > 1 and args[1]:
                doc.lead(args[1])
        elif tag == "KEY":
            doc.pagebreak()
            doc.divider()
            doc.add(para(run("ANSWER KEY   ", bold=True, colour=RED, sz=28, georgia=True)
                         + run(args[0], bold=True, colour=NAVY, sz=28, georgia=True), after=60))
            if len(args) > 1 and args[1]:
                doc.add(para(run(args[1].split("|")[0], bold=True, colour=NAVY)
                             if False else inline(args[1], base_sz=20, base_colour=GREY),
                             after=120))
        elif tag == "LABEL":
            doc.label(args[0], args[1] if len(args) > 1 else "")
        elif tag == "SUBHEAD":
            doc.subhead(args[0], args[1] if len(args) > 1 else "")
        elif tag == "EX":
            doc.ex_plain(args[0], args[1])
        elif tag == "NUM":
            for i, l in enumerate(body, 1):
                doc.num(i, l)
        elif tag == "P":
            for l in body:
                doc.p(l, after=100)
        elif tag == "BIGLABEL":
            doc.heading(args[0], args[1], kick_sz=24, title_sz=24, after=80)
        elif tag == "H":
            doc.add(para(run(args[0], bold=True, colour=NAVY, sz=22, georgia=True),
                         after=80, before=160))
        elif tag == "LEAD":
            doc.lead(args[0])
        elif tag == "HALF":
            doc.add(para(run(args[0], bold=True, colour=NAVY)
                         + run("  —  " + args[1], colour=GREY), after=100, before=140))
        elif tag == "NOTEP":
            doc.add(para(inline(args[0], base_sz=18, base_colour=GREY), after=100, jc="center"))
        elif tag == "VOCAB":
            pairs = [tuple(x.strip() for x in l.split("|", 1)) for l in body]
            doc.add(vocab_table(pairs))
        elif tag == "WORDBOX":
            doc.add(wordbox(args[0], [x.strip() for x in args[1].split("·")]))
        elif tag == "GRAMMAR":
            doc.add(grammar_box(args[0], body))
        elif tag == "WATCHOUT":
            doc.add(watchout_box(args[0]))
        elif tag == "CASE":
            doc.add(case_box(args[0]))
        elif tag == "DIALOGUE":
            doc.add(dialogue_box(body))
        elif tag == "READING":
            doc.add(reading_box(args[0], body))
        elif tag == "WARMBOX":
            doc.add(warm_box(body))
        elif tag == "WHITE":
            doc.add(white_box(body))
        elif tag == "CREAM":
            doc.add(cream_box(body))
        elif tag == "CANDO":
            doc.add(cando_box(body))
        elif tag == "MATCH":
            l, r = split2(body)
            doc.add(two_col(l, r))
        elif tag == "COLS":
            l, r = split2(body)
            doc.add(two_col(l, r, g=(4510, 4510)))
        elif tag == "ROLES":
            doc.add(roles_table(body))
        elif tag == "CRITERIA":
            doc.add(criteria_table(args[0], body))
        elif tag == "ASSIGNTITLE":
            doc.add(assign_title(args[0]))
        elif tag == "ANS":
            for l in body:
                code, _, txt = l.partition("|")
                doc.add(para(run(code.strip() + "  ", bold=True, colour=RED)
                             + inline(txt.strip()), after=50))
        elif tag == "NOTE":
            inner = para(run(args[0] + "  ", bold=True, colour=NAVY) + inline(args[1]), after=100)
            doc.add(onecell_box(inner, CREAM_WARM, (WARM_RULE, 6), inside=("auto", 4)))
        elif tag == "COLOPHON":
            doc.add(para(run(args[0] + "  ", bold=True, colour=NAVY, sz=18)
                         + run(args[1], italic=True, colour=GREY, sz=18),
                         after=200, before=120))
        elif tag == "DIVIDER":
            doc.pagebreak()
            doc.divider()
        elif tag == "TITLE":
            doc.add(para(run(args[0], bold=True, colour=NAVY, sz=56, georgia=True),
                         after=60, jc="center"))
        elif tag == "SUBTITLE":
            doc.add(para(run(args[0], italic=True, colour=RED, sz=32, georgia=True),
                         after=40, jc="center"))
        elif tag == "CENTER":
            for l in body:
                doc.add(para(inline(l), after=60, jc="center"))
        elif tag == "BLANK":
            doc.add(para("", after=200))
        elif tag == "SKIP":
            pass
        else:
            raise SystemExit(f"unknown tag @{tag} with args {args}")


def main():
    figdir = os.path.join(HERE, "figures")
    doc = Doc(figdir)
    files = ([os.path.join(ROOT, "content", "00-front-matter.txt")]
             + sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt"))))
    for f in files:
        if not os.path.exists(f):
            print("missing", f, file=sys.stderr)
            continue
        compile_blocks(doc, parse(f))
    out = os.path.join(ROOT, "dist",
                       "EnglishForJournalists_International_Book2_FULL_StudentBook.docx")
    doc.build(out, "English for Journalists — International Edition · Book 2: Across Borders")
    print("wrote", out, os.path.getsize(out), "bytes")


if __name__ == "__main__":
    main()
