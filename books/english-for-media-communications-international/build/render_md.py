#!/usr/bin/env python3
"""render_md.py — the same DSL, rendered as Markdown."""
import os, sys, glob, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from compile import parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "dist", "EMC2_International_StudentBook.md")
LETTERS = "abcdefghij"


def render(blocks, out):
    for tag, a, body in blocks:
        text = " ".join(body) if body else (a[0] if a else "")
        if tag == "UNIT":
            out.append(f"\n\n# Unit {a[0]}: {a[1]}\n")
        elif tag == "SUB":
            out.append(f"*{text}*\n")
        elif tag == "BAR":
            out.append(f"\n## {a[0]}\n")
        elif tag == "TRACK":
            out.append(f"*{text}*\n\n")
        elif tag == "TASK":
            out.append(f"\n### {text}\n")
        elif tag == "RUBRIC":
            out.append(f"**{text}**\n\n")
        elif tag == "TEXT":
            out.append("> " + "  \n> ".join(body) + "\n\n")
        elif tag == "MODEL":
            out.append("**Model — read this first:**\n\n> " + "  \n> ".join(body) + "\n\n")
        elif tag == "MODELDEC":
            out.append("**Model — read this first:**\n\n> Model decision: "
                       + " ".join(body) + "\n\n")
        elif tag == "BANK":
            words = a if a else [l.strip() for l in body]
            out.append("**Word bank:** " + "  |  ".join(words) + "\n\n")
        elif tag == "GLOSS":
            out.append(f"**Gloss:** {text}\n\n")
        elif tag == "WATCH":
            out.append(f"**Watch out!** {text}\n\n")
        elif tag == "REMEMBER":
            out.append(f"**Remember:** {text}\n\n")
        elif tag == "PLAN":
            out.append(f"**Plan (make notes, then write):** {text}\n\n")
        elif tag == "CHECK":
            out.append("**Check before you finish:** "
                       + "  ".join("☐ " + i for i in body) + "\n\n")
        elif tag in ("USE", "PHRASES"):
            lead = "Useful language:" if tag == "USE" else "Useful phrases:"
            out.append(f"**{lead}** " + "  ·  ".join(body) + "\n\n")
        elif tag == "PHRASEBANK":
            out.append("**Phrase bank:** " + "  ·  ".join(body) + "\n\n")
        elif tag == "FRAME":
            out.append(f"**{a[0] if a else 'Frame'}:** " + "  ·  ".join(body) + "\n\n")
        elif tag == "CARD":
            out.append(f"**{a[0] if a else 'Card'}:** {text}\n\n")
        elif tag == "LINE":
            for l in ([a[0]] if a else []) + body:
                out.append(l + "\n\n")
        elif tag == "EX":
            out.append(f"{text}\n\n")
        elif tag == "BULLET":
            for l in body:
                out.append(f"- {l}\n")
            out.append("\n")
        elif tag == "NUM":
            for i, l in enumerate(body, 1):
                out.append(f"{i}. {l}\n")
            out.append("\n")
        elif tag == "GAP":
            for i, l in enumerate(body, 1):
                head, _, tail = l.partition("@@")
                out.append(f"{i}. {head.strip()} ____________________ {tail.strip()}\n")
            out.append("\n")
        elif tag == "MCQ":
            out.append(f"**{a[0]}. {a[1]}**\n")
            for letter, opt in zip("ABCD", a[2:6]):
                out.append(f"- ○ {letter}) {opt}\n")
            out.append("\n")
        elif tag == "AUDIO":
            out.append(f"**🔊 Audio Track {a[0]}**\n\n")
        elif tag == "PRON":
            for l in body:
                w, _, st = l.partition("—")
                out.append(f"- {w.strip()} — **{st.strip()}**\n")
            out.append("\n")
        elif tag == "PRE":
            lead = "Before you listen:" if a and a[0] == "listen" else "Before you read:"
            out.append(f"*{lead} {text}*\n\n")
        elif tag == "WHILE":
            out.append(f"*While you listen: {text}*\n\n")
        elif tag == "CANDO":
            out.append("**Can-Do checklist**\n")
            for l in body:
                out.append(f"- ☐ {l}\n")
            out.append("\n")
        elif tag == "MATCH":
            left = [l.split("::")[0].strip() for l in body]
            right = [l.split("::")[1].strip() for l in body] + \
                    [re.sub(r"^[a-j]\)\s*", "", a[0])]
            out.append("\n**Column A**\n\n")
            for i, t in enumerate(left, 1):
                out.append(f"{i}. **{t}** ____\n")
            out.append("\n**Column B**\n\n")
            for i, r in enumerate(right):
                out.append(f"{LETTERS[i]}) {r}\n")
            out.append("\n")
        elif tag == "GRAMMAR":
            rows = [[c.strip() for c in l.split("|")] for l in body]
            n = len(rows[0])
            out.append("\n| " + " | ".join(rows[0]) + " |\n|" + "---|" * n + "\n")
            for r in rows[1:]:
                r = (r + [""] * n)[:n]
                out.append("| " + " | ".join(r) + " |\n")
            out.append("\n")
        elif tag in ("LABEL", "BOLD"):
            out.append(f"**{a[0] if a else ''}** {text}\n\n")
    return out


def main():
    out = ["# English for Media and Communications 2 — International Edition\n",
           "*Student’s Book · B1.1–B1.2 · Officer & Manager tracks · Meridian Relief*\n"]
    for f in sorted(glob.glob(os.path.join(ROOT, "content", "unit-*.txt")),
                    key=lambda p: int(re.search(r"unit-(\d+)", p).group(1))):
        out = render(parse(f), out)
    text = "".join(out)
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    open(OUT, "w", encoding="utf-8").write(text)
    print(f"wrote {OUT} {len(text.split())} words")


if __name__ == "__main__":
    main()
