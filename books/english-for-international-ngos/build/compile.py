#!/usr/bin/env python3
"""
compile.py — turn the line-oriented content files in content/ into the book.

Every content line is one of three things: a `@TAG args | args` directive, a body
line belonging to the directive above it, or a bare `_300` spacer.  Writing the
spacers out rather than inferring them keeps each content file a direct
transliteration of the source's own reading order, which is what the QA ladder
compares it against.
"""
import glob, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from render import Doc

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "dist",
                   "EnglishForNGOsAndInternationalOrganizations_International_StudentBook_A2.docx")
TITLE = "English for NGOs and International Organizations - Student Book (A2)"

# tags whose body is a block of lines rather than a single argument
BLOCK = {"BULLET", "PBULLET", "LINE", "NUM", "QUESTION", "MCQ", "OPT", "CAT", "CATQ",
         "CATITEM", "CLASSIFY", "GAP", "GREYGAP", "SPEECH", "SCRIPT", "ANS",
         "CODE", "CHOICE", "PANEL", "PASSAGE", "MATCHA", "MATCHB", "GRID",
         "STRIP", "TOC", "DLINE", "NARR", "OPTLINE", "P"}

# Blank spacers are written out, not inferred: a bare `_300` line is the source's
# own 300-after blank, `_200d` its dotted separator and `_-p` the one that only
# carries a page break.  The source puts 1,346 of them in nine distinct shapes,
# and spelling them out keeps the content file a direct transliteration of it.
SPACER_RE = re.compile(r"^_(\d+|-)([dp]*)$")

def parse(path):
    """-> [(tag, args, text, body_lines)] in file order."""
    out, cur = [], None
    for raw in open(path, encoding="utf-8").read().split("\n"):
        m = SPACER_RE.match(raw.strip())
        if m:
            if cur:
                out.append(cur)
                cur = None
            out.append(("_", [m.group(1)] + list(m.group(2)), "", []))
            continue
        if raw.startswith("@"):
            if cur:
                out.append(cur)
            head, _, rest = raw[1:].partition(" ")
            args = [a.strip() for a in rest.split(" | ")] if rest else []
            cur = (head, args, rest.strip(), [])
        elif cur is not None and (raw.strip() or cur[0] == "CODE"):
            # the VBA listing has blank lines of its own, set on the same grey
            cur[3].append(raw)
    if cur:
        out.append(cur)
    return out


def voice(line):
    """The source colours a speaker by the gender of the name in front of the colon."""
    who = line.split(":")[0].strip()
    return who in MALE


MALE = set()


def voiced(line):
    """A leading ^ forces the blue (male) voice and ~ the purple (female) one,
    which is how the source colours its generic speakers."""
    if line[:1] in "^~":
        return line[1:], line[0] == "^"
    return line, voice(line)


def emit(doc, items, where):
    part = "Warm Up"
    for tag, a, text, body in items:
        if tag == "_":
            doc.spacer(None if a[0] == "-" else int(a[0]),
                       "d" in a[1:], "p" in a[1:])
            continue
        if tag == "VOICES":
            MALE.update(x.strip() for x in a)
            continue
        if tag == "PARTKEY":
            part = a[0]
            continue

        # -- the element itself -------------------------------------------
        if tag == "TITLE":
            doc.title_page(a[0], a[1], a[2], a[3])
        elif tag == "BREAK":
            doc.spacer(None, pbb=True)
        elif tag == "TOCHEAD":
            doc.toc_head(text)
        elif tag == "TOC":
            for l in body:
                doc.toc_line(l)
        elif tag == "UNITHEAD":
            doc.unit_head(text)
        elif tag == "PART":
            part = a[0]
            doc.part_bar(a[0], a[1])
        elif tag == "EX":
            doc.exercise(a[0], *([int(a[1])] if len(a) > 1 else []))
        elif tag == "P":
            left = int(a[0]) if a[0] != "-" else None
            before = int(a[1]) if a[1] != "-" else None
            after = int(a[2]) if a[2] != "-" else None
            for l in body:
                doc.plain(l, left=left, before=before, after=after)
        elif tag == "INSTR":
            doc.instruction(text, part)
        elif tag == "AUDIO":
            doc.audio(text)
        elif tag == "PLAYNOTE":
            doc.play_note(text) if text else doc.play_note()
        elif tag == "TRACK":
            doc.track_head(text)
        elif tag == "H2":
            doc.h2(a[0], *([a[1]] if len(a) > 1 else []))
        elif tag == "APPHEAD":
            doc.appendix_head(a[0], a[1], *([a[2]] if len(a) > 2 else []))
        elif tag == "CENTRE":
            doc.centred_note(a[0], *([int(a[1])] if len(a) > 1 else []))
        elif tag == "PANEL":
            for l in body:
                doc.panel(l)
        elif tag == "PASSAGE":
            for l in body:
                doc.passage(l)
        elif tag == "BULLET":
            for l in body:
                doc.bullet(l)
        elif tag == "PBULLET":
            for l in body:
                doc.plainbullet(l)
        elif tag == "LINE":
            n = int(a[0]) if a and a[0].isdigit() else None
            for l in body:
                doc.line(l, left=360, after=n if n else 150)
        elif tag == "NUM":
            n = int(a[0]) if a and a[0].isdigit() else 120
            for l in body:
                doc.numbered_line(l, after=n)
        elif tag == "QUESTION":
            for l in body:
                doc.question(l)
        elif tag == "MCQ":
            for l in body:
                doc.mcq_stem(l)
        elif tag == "OPT":
            for l in body:
                doc.mcq_option(l)
        elif tag == "CAT":
            for l in body:
                doc.cat_head(l)
        elif tag == "CATQ":
            for l in body:
                doc.cat_head(l, after=150)
        elif tag == "CATITEM":
            for l in body:
                doc.category(l)
        elif tag == "CLASSIFY":
            for l in body:
                doc.classify(l)
        elif tag == "GAP":
            for l in body:
                doc.gap_line(l)
        elif tag == "OPTLINE":
            for l in body:
                doc.inline_options(l)
        elif tag == "GREYGAP":
            for l in body:
                doc.grey_gap(l)
        elif tag == "COLHEAD":
            doc.column_head(text)
        elif tag == "MATCHA":
            doc.match_a([tuple(x.strip() for x in l.split("|", 1)) for l in body])
        elif tag == "MATCHB":
            doc.match_b([tuple(x.strip() for x in l.split("|", 1)) for l in body])
        elif tag == "GRID":
            doc.grid([[c.strip() for c in l.split("|")] for l in body])
        elif tag == "CHOICEHEAD":
            doc.choices_head(text if text else "Choices:")
        elif tag == "CHOICE":
            for l in body:
                doc.choice(l)
        elif tag == "SPEECH":
            for l in body:
                t, m = voiced(l)
                doc.speech(t, male=m)
        elif tag == "DBAR":
            doc.dialogue_bar(text if text else "Dialogue")
        elif tag == "DLINE":
            for l in body:
                doc.dialogue_line(l)
        elif tag == "DHEAD":
            doc.dialogue_head(text if text else "Dialogue")
        elif tag == "NARR":
            for l in body:
                doc.narrator(l)
        elif tag == "SCRIPT":
            for l in body:
                t, m = voiced(l)
                doc.script(t, male=m)
        elif tag == "WRITE":
            doc.write_prompt(text if text else "📝 Write your response below:")
        elif tag == "LINES":
            doc.write_lines(int(a[0]) if a else 10)
        elif tag == "RULE":
            doc.rule()
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
        elif tag == "STRIP":
            for l in body:
                doc.strip([c.strip() for c in l.split("|")])
        else:
            raise SystemExit(f"unknown tag @{tag} in {where}")


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
