#!/usr/bin/env python3
"""render_md.py — the same DSL, rendered as Markdown."""
import os, sys, glob, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from compile import parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "dist", "EnglishForBanking_International_StudentBook.md")
LETTERS = "abcdefghij"


def render(blocks, out):
    for tag, a, body in blocks:
        text = " ".join(body) if body else (a[0] if a else "")
        if tag == "UNIT":
            out.append(f"\n\n# Unit {a[0]} · {a[1]}\n")
        elif tag == "BIG":
            out.append(f"\n# {text}\n")
        elif tag == "SUB":
            out.append(f"*{text}*\n")
        elif tag == "H2":
            out.append(f"\n## {text}\n")
        elif tag == "PARA":
            out.append(text + "\n\n")
        elif tag == "INTRO":
            out.append(f"*{text}*\n")
        elif tag == "PART":
            out.append(f"\n## {a[0]}\n")
            if len(a) > 1 and a[1]:
                out.append(f"*{a[1]}*\n\n")
        elif tag == "TASK":
            out.append(f"\n### {a[0]}  {a[1]}\n")
        elif tag == "GF":
            out.append("\n### Grammar Focus\n")
        elif tag == "INSTR":
            out.append(f"*{text}*\n\n")
        elif tag == "EX":
            out.append(f"**{text}**\n\n")
        elif tag == "LINE":
            for l in ([a[0]] if a else []) + body:
                out.append(l + "\n\n")
        elif tag == "BULLET":
            for l in ([a[0]] if a else []) + body:
                out.append(f"- {l}\n")
            out.append("\n")
        elif tag == "NUM":
            for i, l in enumerate(body, 1):
                out.append(f"{i}. {l}\n")
            out.append("\n")
        elif tag in ("FRAME", "USEFUL", "PHRASES", "STRETCH", "GREEN"):
            lead = {"USEFUL": "Useful language: ", "PHRASES": "Phrase bank: ",
                    "STRETCH": "Stretch: ", "GREEN": (a[0] + " ") if a else "",
                    "FRAME": ""}[tag]
            joined = " · ".join(body) if body else (a[1] if len(a) > 1 else text)
            out.append(f"*{lead}{joined}*\n\n")
        elif tag == "CARD":
            out.append(f"**{a[0] if a else ''}** {text}\n\n")
        elif tag == "PRON":
            out.append(f"*{text}*\n\n")
        elif tag == "REMEMBER":
            out.append(f"> **Remember:** {text}\n\n")
        elif tag == "TIP":
            out.append(f"*Tip: {text}*\n\n")
        elif tag == "AUDIO":
            out.append(f"**🔊 Audio {a[0]}** (optional) — or read the script below.\n\n")
        elif tag in ("CHECK", "CANDO", "PLAN"):
            head = {"CHECK": "Check before you finish", "PLAN": "Plan — make notes first",
                    "CANDO": "Can-Do checklist — tick what you can do now"}[tag]
            out.append(f"**{head}**\n")
            for l in body:
                out.append(f"- ☐ {l}\n")
            out.append("\n")
        elif tag == "BANK":
            words = a if a else [l.strip() for l in body]
            out.append("**Word bank:** " + " | ".join(words) + "\n\n")
        elif tag == "MODEL":
            out.append("> **Model — read this first**\n")
            for l in body:
                out.append(f"> {l}\n")
            out.append("\n")
        elif tag == "SCRIPT":
            out.append("```\n" + "\n".join(body) + "\n```\n\n")
        elif tag == "READ":
            out.append(f"> **{a[0]}** — *{a[1] if len(a) > 1 else ''}*\n>\n")
            for l in body:
                out.append(f"> {l}\n")
            out.append("\n")
        elif tag == "WATCH":
            out.append("> **⚠ Watch out!**\n")
            for l in body:
                out.append(f"> {l}\n")
            out.append("\n")
        elif tag == "WRITE":
            out.append("> ✎ *Write your response here.*\n\n")
        elif tag == "GLOSS":
            out.append("**Glossary help**\n")
            for l in body:
                term, _, rest = l.partition("—")
                out.append(f"- **{term.strip()}** — {rest.strip()}\n")
            out.append("\n")
        elif tag == "MATCH":
            left = [l.split("::")[0].strip() for l in body]
            right = [l.split("::")[1].strip() for l in body] + \
                    [re.sub(r"^[a-j]\)\s*", "", a[0])]
            out.append("\n| Column A | Column B |\n|---|---|\n")
            for i in range(len(right)):
                A = f"{i+1}. {left[i]} ____" if i < len(left) else ""
                out.append(f"| {A} | **{LETTERS[i]})** {right[i]} |\n")
            out.append("\n")
        elif tag == "GRAMMAR":
            rows = [[c.strip() for c in l.split("|")] for l in body]
            out.append("\n| " + " | ".join(rows[0]) + " |\n|"
                       + "---|" * len(rows[0]) + "\n")
            for r in rows[1:]:
                out.append("| " + " | ".join(r) + " |\n")
            out.append("\n")
        elif tag == "FIG":
            out.append(f"![{a[0]}](../build/figures/{a[0]}.png)\n\n")
        elif tag == "PB":
            pass
    return out


def main():
    out = ["# English for Banking & Finance — International Edition\n",
           "*Professional Student’s Book · Level B1 · Operator & Practitioner tracks*\n"]

    def order(p):
        b = os.path.basename(p)
        return 0 if b == "front.txt" else 99 if b == "back.txt" else \
            int(re.search(r"unit-(\d+)", b).group(1))

    for f in sorted(glob.glob(os.path.join(ROOT, "content", "*.txt")), key=order):
        out = render(parse(f), out)
    text = "".join(out)
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    open(OUT, "w", encoding="utf-8").write(text)
    print(f"wrote {OUT} {len(text.split())} words")


if __name__ == "__main__":
    main()
