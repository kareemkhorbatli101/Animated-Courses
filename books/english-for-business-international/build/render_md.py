#!/usr/bin/env python3
"""render_md.py — the same DSL, rendered as Markdown."""
import os, sys, glob, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from compile import parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "dist", "EnglishForBusiness_International_StudentBook.md")


def render(blocks, out):
    for tag, a, body in blocks:
        if tag == "UNIT":
            out += [f"\n\n# Unit {a[0]}: {a[1]}", f"\n*{a[2]}*\n"]
        elif tag == "BANNER":
            out.append(f"\n## {a[0]}\n")
        elif tag == "TRACK":
            out.append(f"*{a[0]}*\n")
        elif tag == "FIG":
            out.append(f"![{a[1] if len(a)>1 else ''}](../build/figures/{a[0]}.png)\n")
            if len(a) > 1:
                out.append(f"*{a[1]}*\n")
        elif tag == "TASK":
            out.append(f"\n### {a[0]}\n")
        elif tag == "RUBRIC":
            out.append(f"**{a[0]}**\n")
        elif tag in ("LINE", "ITEM", "FRAME"):
            for l in ([a[0]] if a else []) + body:
                out.append(l + "\n")
        elif tag == "BOLD":
            out.append(f"**{a[0]}**\n")
        elif tag in ("BODY", "MODEL", "GLOSSARY"):
            if tag == "MODEL":
                out.append("**Model — read this first:**\n")
            out.append("> " + (" ".join(body) if body else a[0]) + "\n")
        elif tag == "MATCH":
            left, right, side = [], [], None
            side = left
            for l in body:
                if l.strip() == "@@":
                    side = right
                else:
                    side.append(l.strip())
            out.append("\n**Column A**\n")
            for i, t in enumerate(left, 1):
                out.append(f"{i}. **{t}** ____\n")
            out.append("\n**Column B**\n")
            for i, m in enumerate(right):
                out.append(f"{chr(97+i)}) {m}\n")
        elif tag == "BANK":
            out.append("**Word bank:** " + " | ".join(a) + "\n")
        elif tag == "MCQ":
            out.append(f"**{a[0]}**\n")
            for letter, opt in zip("ABCD", a[1:5]):
                out.append(f"- ○ {letter}) {opt}\n")
        elif tag == "GLOSS":
            out.append(f"**Gloss:** {a[0]}\n")
        elif tag == "AUDIO":
            out.append(f"**🔊 Audio Track {a[0]}**\n")
        elif tag == "PRON":
            for l in body:
                w, _, st = l.partition("|")
                out.append(f"- {w.strip()} — **{st.strip()}**\n")
        elif tag == "GRAMMAR":
            out.append("\n| | Form | Use |\n|---|---|---|\n")
            for l in body:
                p = [q.strip() for q in l.split("|")]
                out.append("| " + " | ".join((p + ["", "", ""])[:3]) + " |\n")
        elif tag == "REMEMBER":
            out.append(f"**Remember:** {a[0]}\n")
        elif tag == "WATCH":
            out.append(f"**Watch out!** {a[0]}\n")
        elif tag == "PLAN":
            out.append(f"**Plan (make notes, then write):** {a[0]}\n")
        elif tag == "CHECK":
            out.append("**Check before you finish:** " + "  ".join("☐ " + i for i in a) + "\n")
        elif tag == "CANDO":
            out.append("\n**Can-Do checklist**\n")
            for i in body:
                out.append(f"- ☐ {i}\n")
        elif tag == "GLOSSHEAD":
            out.append(f"\n**{a[0]}**\n")
        elif tag == "PB":
            pass
    return out


def main():
    out = ["# English for Business — International Edition\n",
           "*Blue Door Group · five countries, one ledger · B1.1–B1.2*\n"]
    for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt"))):
        out = render(parse(f), out)
    text = "".join(out)
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    open(OUT, "w", encoding="utf-8").write(text)
    print(f"wrote {OUT} {len(text.split())} words")


if __name__ == "__main__":
    main()
