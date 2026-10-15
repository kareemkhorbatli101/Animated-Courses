#!/usr/bin/env python3
"""
compile.py — turn the line-oriented DSL in ../content into the Student's Book (.docx).

Every tag maps onto one element of the design system decoded in render.py.
"""
import os, sys, glob, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from render import Doc

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "dist",
                   "EnglishForForeignMinistryStaff_International_StudentBook.docx")

TITLE = "English for Foreign Ministry Staff Members - Student Book (B1)"


# the speakers the source sets in the blue, male voice
MALE = set()


def voice(line):
    who = line.split(":", 1)[0].strip()
    return who in MALE


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
        elif cur is not None and cur[0] == "CODE":
            # a VBA listing keeps its blank lines and leading indentation
            cur[2].append(raw.rstrip("\r\n"))
        elif cur is not None and raw.strip():
            cur[2].append(raw.rstrip())
    if cur:
        blocks.append(cur)
    return blocks


# tags that continue whatever list is open; anything else starts a fresh one
IN_LIST = {"NUM", "BULLET", "CARDBULLET", "PBULLET", "LINE", "PLAIN", "NOTE", "SPEECH", "SCRIPT", "ANS", "SEP", "CODE"}

# The source closes each block with a spacer paragraph whose height depends on the
# block it follows. (after, dotted)
SPACER = {"INSTR": (80, False), "BULLET": (300, False),
          "CARDBULLET": (300, False), "PBULLET": (300, False),
          "LINE": (300, False), "PLAIN": (300, False), "GAP": (200, False),
          "MATCH": (300, False), "BANK": (300, False), "STRIP": (150, False),
          "LINES": (300, False), "SPEECH": (160, False), "PANEL": (300, False),
          "ANS": (100, False), "CODE": (400, False), "TRACK": (200, True),
          "SCRIPT": (200, True), "NOTE": (100, False)}

# a block runs on into these without a spacer between them
RUNS_ON = {"SPEECH": {"DBAR", "SPEECH"}, "DBAR": {"SPEECH"}, "BANK": {"BANK"},
           "CODE": {"CODE"}, "ANS": {"SEP", "ANS"}, "SEP": {"ANS"}, "PANEL": {"LINE"},
           "LINE": {"CARDBULLET"},
           "CARDBULLET": {"CARDBULLET", "LINE", "NOTE"},
           "NOTE": {"CARDBULLET", "CODE"},
           "BULLET": {"PBULLET"}, "PBULLET": {"PBULLET", "BULLET"},
           "SCRIPT": {"SCRIPT"}, "TRACK": {"SCRIPT"}}

# a new exercise or part always opens on a full spacer
CLOSERS = {"EX", "PART", "UNITHEAD", "APPHEAD", "TOCHEAD", "CENTRE"}


def emit(doc, blocks, where):
    pending = None
    last = None
    for i, (tag, a, body) in enumerate(blocks):
        text = " ".join(body) if body else (a[0] if a else "")
        # @VOICES only configures the speaker map; it emits nothing and is
        # invisible to the spacer inference below
        if tag == "VOICES":
            MALE.clear()
            MALE.update(n.strip() for n in a)
            continue
        if tag not in IN_LIST:
            doc.new_list()
        # an explicit @SP replaces the spacer the previous block would have added
        if tag == "SP":
            pending = None
        # close the previous block unless this one runs on from it
        flushed = None
        if pending and tag not in RUNS_ON.get(last, set()):
            # a @GAP block takes the full closing spacer when an exercise follows
            if tag in CLOSERS and last == "GAP":
                pending = (300, pending[1])
            flushed = pending[0]
            doc.spacer(*pending)
            pending = None
        if (tag in CLOSERS and last is not None and last not in CLOSERS | {"BREAK"}
                and flushed != 300 and SPACER.get(last, (0,))[0] != 300):
            doc.spacer(300)
        prev, last = last, tag

        if tag == "TITLEPAGE":
            doc.title_page(a[0], a[1], a[2], a[3])
        elif tag == "BREAK":
            doc.spacer_break()
        elif tag == "TOCHEAD":
            doc.toc_head(text)
        elif tag == "TOC":
            for l in body:
                doc.line(l, left=300)
        elif tag == "UNITHEAD":
            doc.unit_head(text)
        elif tag == "APPHEAD":
            doc.appendix_head(a[0], a[1])
        elif tag == "H2":
            doc.h2(text)
        elif tag == "PART":
            doc.part_bar(a[0], a[1])
        elif tag == "EX":
            doc.exercise(a[0], *( [int(a[1])] if len(a) > 1 else [] ))
        elif tag == "TRACK":
            doc.track_head(text)
        elif tag == "INSTR":
            doc.instruction(text)
        elif tag == "BULLET":
            for l in body:
                doc.bullet(l)
        elif tag == "CARDBULLET":
            left = int(a[0]) if a else 300
            after = int(a[1]) if len(a) > 1 else 100
            for l in body:
                doc.card_bullet(l, left=left, after=after)
        elif tag == "PBULLET":
            for l in body:
                doc.plain_bullet(l)
        elif tag == "NUM":
            for l in body:
                doc.number(l)
        elif tag == "LINE":
            for l in ([a[0]] if a else []) + body:
                doc.line(l)
        elif tag == "PLAIN":
            for l in ([a[0]] if a else []) + body:
                doc.plain(l)
        elif tag == "NOTE":
            before = int(a[0]) if a else None
            for l in body:
                doc.plain(l, after=100, before=before)
        elif tag == "BOLD":
            doc.bold_line(text)
        elif tag == "GAP":
            for l in body:
                doc.gap_sentence(l)
        elif tag == "COLHEAD":
            doc.column_head(text)
        elif tag == "DBAR":
            doc.dialogue_bar(text, first=(prev == "PLAYNOTE"))
        elif tag == "SUBBAR":
            doc.sub_bar(a[0], *( [int(a[1])] if len(a) > 1 else [] ))
        elif tag == "SPEECH":
            for l in body:
                doc.speech(l, male=voice(l))
        elif tag == "SCRIPT":
            for l in body:
                doc.script_speech(l, male=voice(l))
        elif tag == "SP":
            pass
        elif tag == "PANEL":
            for l in body:
                doc.panel(l)
        elif tag == "DOCHEAD":
            doc.doc_head(text)
        elif tag == "AUDIO":
            doc.audio_chip(text)
        elif tag == "PLAYNOTE":
            doc.play_note(text)
        elif tag == "WORDBANK":
            doc.word_bank(text if text else "Word Bank: ")
        elif tag == "BANK":
            for l in body:
                doc.bank_table([c.strip() for c in l.split("|")])
        elif tag == "MATCH":
            doc.match_table([[c.strip() for c in l.split("|")] for l in body])
        elif tag == "STRIP":
            for l in body:
                doc.strip_table([c.strip() for c in l.split("|")])
        elif tag == "LINES":
            doc.write_lines(int(a[0]) if a else 10)
        elif tag == "WRITE":
            doc.write_prompt(text if text else "📝 Write your response below:")
        elif tag == "CENTRE":
            doc.centred_note(a[0], *( [int(a[1])] if len(a) > 1 else [] ))
        elif tag == "CODE":
            for l in body:
                doc.code(l)
        elif tag == "ANSHEAD":
            doc.answer_head(text)
        elif tag == "QHEAD":
            doc.question_head(text)
        elif tag == "ANS":
            for l in body:
                doc.answer(l)
        elif tag == "SEP":
            doc.answer_sep()
        else:
            raise SystemExit(f"unknown tag @{tag} in {where}")

        if tag == "SP":
            doc.spacer(None if a[0] == "-" else int(a[0]),
                       "d" in a[1:], "p" in a[1:])
            pending = None
        elif tag in SPACER:
            pending = SPACER[tag]
    if pending:
        doc.spacer(*pending)


def order(p):
    b = os.path.basename(p)
    if b == "front.txt":
        return (0, 0)
    m = re.match(r"unit-(\d+)\.txt", b)
    if m:
        return (1, int(m.group(1)))
    m = re.match(r"appendix-([ab])\.txt", b)
    # Appendix B comes first in the source, then Appendix A
    return (2, {"b": 0, "a": 1}[m.group(1)])


def main():
    doc = Doc()
    files = sorted(glob.glob(os.path.join(ROOT, "content", "*.txt")), key=order)
    if not files:
        raise SystemExit("no content files")
    for f in files:
        emit(doc, parse(f), os.path.basename(f))
    size = doc.build(OUT, TITLE, TITLE)
    print(f"wrote {OUT} {size} bytes")


if __name__ == "__main__":
    main()
