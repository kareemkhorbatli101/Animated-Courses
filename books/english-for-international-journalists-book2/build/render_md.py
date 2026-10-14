#!/usr/bin/env python3
"""render_md.py — the same book as plain Markdown, for reading and review."""
import os, sys, glob, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from compile import parse, split2

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out = []


def table(rows, head=None):
    w = max(len(r) for r in rows) if rows else 0
    if head:
        out.append("| " + " | ".join(head) + " |")
        out.append("|" + "---|" * len(head))
    else:
        out.append("| " + " | ".join([" "] * w) + " |")
        out.append("|" + "---|" * w)
    for r in rows:
        out.append("| " + " | ".join(list(r) + [""] * (w - len(r))) + " |")
    out.append("")


for f in [os.path.join(ROOT, "content", "00-front-matter.txt")] + \
         sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt"))):
    for tag, a, body in parse(f):
        if tag == "BANNER":
            out += ["", "---", "", f"## {a[1]} · {a[2]}", "", f"*{a[0]}*", "",
                    f"**{a[3]}**", "", f"**{a[4]}**", ""]
            out += [f"- {l.lstrip('• ').strip()}" for l in body] + [""]
        elif tag == "UNITHEAD":
            out += ["", "---", "", f"## {a[0]} · {a[1]}", "",
                    f"**{a[2]}**  ·  {a[3]}", ""]
        elif tag == "AIMSHEAD":
            out += [f"**{a[0] if a else 'In this unit you learn to…'}**", ""]
        elif tag == "AIMS":
            out += [f"{i}. {l}" for i, l in enumerate(body, 1)] + [""]
        elif tag == "FIG":
            out += [f"> **[FIGURE: `{a[0]}`]** — *{a[1] if len(a) > 1 else ''}*", ""]
        elif tag == "STORY":
            out += [f"**{a[0]}** {a[1]}", ""]
        elif tag in ("PART",):
            out += ["", "---", "", f"### PART {a[0]} · {a[1]}", ""]
            if len(a) > 2 and a[2]: out += [f"*{a[2]}*", ""]
        elif tag == "WARMUP":
            out += ["", "---", "", f"### WARM-UP · {a[0]}", ""]
            if len(a) > 1 and a[1]: out += [f"*{a[1]}*", ""]
        elif tag == "KEY":
            out += ["", "---", "", f"### ANSWER KEY · {a[0]}", ""]
            if len(a) > 1: out += [f"*{a[1]}*", ""]
        elif tag == "BIGLABEL":
            out += ["", f"### {a[0]} · {a[1]}", ""]
        elif tag == "LABEL":
            out += [f"**{a[0]}** — {a[1] if len(a) > 1 else ''}", ""]
        elif tag == "SUBHEAD":
            out += [f"**{a[0]}** {a[1] if len(a) > 1 else ''}", ""]
        elif tag == "H":
            out += [f"**{a[0]}**", ""]
        elif tag == "EX":
            out += [f"**{a[0]}**  {a[1]}", ""]
        elif tag in ("NUM",):
            out += [f"{i}. {l}" for i, l in enumerate(body, 1)] + [""]
        elif tag == "P":
            out += body + [""]
        elif tag == "LEAD":
            out += [f"*{a[0]}*", ""]
        elif tag == "HALF":
            out += [f"**{a[0]}** — {a[1]}", ""]
        elif tag == "NOTEP":
            out += [a[0], ""]
        elif tag == "VOCAB":
            table([[c.strip() for c in l.split("|")] for l in body], ["Word", "Meaning"])
        elif tag == "WORDBOX":
            out += [f"> **{a[0]}**  {a[1]}", ""]
        elif tag == "GRAMMAR":
            out += [f"> **{a[0]}**", ">"] + [f"> {l}" for l in body] + [""]
        elif tag == "WATCHOUT":
            out += [f"> **Watch out!**  {a[0]}", ""]
        elif tag == "CASE":
            out += [f"> **A case.** {a[0]}", ""]
        elif tag == "DIALOGUE":
            for l in body:
                n, _, t = l.partition("|")
                out.append(f"> **{n.strip()}:**  {t.strip()}")
            out.append("")
        elif tag == "READING":
            out += [f"> **{a[0]}**", ">"] + [f"> {l}" for l in body] + [""]
        elif tag in ("WARMBOX", "WHITE", "CREAM"):
            out += [f"> {l}" for l in body] + [""]
        elif tag == "CANDO":
            out += [f"- ☐  {l}" for l in body] + [""]
        elif tag in ("MATCH", "COLS"):
            l, r = split2(body)
            table(list(zip(l + [""] * (len(r) - len(l)), r + [""] * (len(l) - len(r)))))
        elif tag == "ROLES":
            table([[c.strip() for c in x.split("|")] for x in body], ["Role", "What you do"])
        elif tag == "CRITERIA":
            table([[x, "☐", "☐", "☐"] for x in body], [a[0], "Yes", "Almost", "Not yet"])
        elif tag == "ASSIGNTITLE":
            out += [f"#### {a[0]}", ""]
        elif tag == "ANS":
            for l in body:
                c, _, t = l.partition("|")
                out.append(f"**{c.strip()}**  {t.strip()}  ")
            out.append("")
        elif tag == "NOTE":
            out += [f"> **{a[0]}** {a[1]}", ""]
        elif tag == "COLOPHON":
            out += [f"**{a[0]}**  *{a[1]}*", ""]
        elif tag == "DIVIDER":
            out += ["", "---", ""]
        elif tag == "TITLE":
            out += [f"# {a[0]}", ""]
        elif tag == "SUBTITLE":
            out += [f"### *{a[0]}*", ""]
        elif tag == "CENTER":
            out += body + [""]
        elif tag == "BLANK":
            out.append("")

p = os.path.join(ROOT, "dist", "EnglishForJournalists_International_Book2_FULL_StudentBook.md")
open(p, "w", encoding="utf-8").write("\n".join(out))
print("wrote", p, len("\n".join(out).split()), "words")
