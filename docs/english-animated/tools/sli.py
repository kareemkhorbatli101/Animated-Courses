#!/usr/bin/env python3
"""Scaffolding Load Index for a written unit (13-scaffolding-spine.md §5).

    SLI = supports present / tasks in the unit

The denominator is the **lettered activity** (### 3D ·, ### 11B ·, …) — the thing a learner
actually does — not the task type, of which a unit carries about 26. A six-stage writing process is
six activities and one task.
Supports are counted from explicit textual markers, one per instance:

  S1 word bank        a blockquoted list of items offered for a task
  S3 sentence stem    a line containing ______ used as a frame
  S4 answer frame     a frame spanning a whole response
  S5 phrase bank      Language Bank / Phrase bank / Words you can use
  S6 model            Read the model / Model decision / anti-model
  S7 worked example   an example item solved for the learner
  S8 planning frame   Plan / Plan before you speak
  S9 checklist        a ☐ line inside a check or review activity
  S10 gloss           a Gloss / Corpus Note box
  S11 visual          every figure
  S12 role card       Card A / Card B / a named role brief
  S13 observer        an Observer section
  S15 peer criteria   a two-criteria review box
  S16 routing         a score-to-page routing line
  S18 transcript      a delayed-transcript pointer

    python3 -I tools/sli.py chapters/b11-unit01.md
"""
import re, sys, pathlib

# Re-anchored on measurement in calibration pass 3 (13-scaffolding-spine.md §5).
TARGET = {'A1': (2.5, .35), 'A2': (2.1, .35), 'B1': (1.45, .35),
          'B2': (1.2, .35), 'C1': (0.95, .25), 'C2': (0.8, .25)}


def count(doc):
    s = {}
    s['S11 visual'] = len(set(re.findall(r'fig_[a-z0-9]+_u\d+_p\d+_v\d+[a-z]?', doc)))
    s['S1 word bank'] = len(re.findall(r'^> [^*\n].*·.*·.*·', doc, re.M))
    s['S3 stem'] = len(re.findall(r'_{4,}', doc))
    s['S4 frame'] = len(re.findall(r'(?i)frame[:\s]|> \*I think .*because', doc))
    s['S5 phrase bank'] = len(re.findall(r'(?i)\*\*(language bank|phrase bank)\*\*|words you can use', doc))
    s['S6 model'] = len(re.findall(r'(?i)### \d+[A-Z] · (read the model|the anti-model|model decision)|^### \d+[A-Z] · Model', doc, re.M))
    s['S7 worked example'] = len(re.findall(r'(?i)\(0\. is done|is done for you|\(example\)', doc))
    s['S8 plan'] = len(re.findall(r'(?i)### \d+[A-Z] · Plan|\*\*plan before you speak', doc))
    s['S9 checklist'] = len(re.findall(r'☐', doc))
    s['S10 gloss'] = len(re.findall(r'(?i)> \*\*corpus note|\*\*gloss', doc))
    s['S12 role card'] = len(re.findall(r'(?i)\*\*card [AB] —|\*\*[A-F] · \w+\*\* ', doc))
    s['S13 observer'] = len(re.findall(r'(?i)### \d+[A-Z] · Observer', doc))
    s['S15 peer criteria'] = len(re.findall(r'(?i)### \d+[A-Z] · (two criteria|peer review)', doc))
    s['S16 routing'] = len(re.findall(r'→\*\* Workbook|\*\*0–3 →', doc))
    s['S18 transcript'] = len(re.findall(r'(?i)transcripts? (for both tracks )?(are|is) on page', doc))
    return s


def main():
    path = pathlib.Path(sys.argv[1])
    doc = path.read_text(encoding='utf-8')
    level = re.search(r'^# ((?:A|B|C)\d)\.\d · Unit', doc, re.M).group(1)
    tasks = re.findall(r'^### \d+[A-Z] ·', doc, re.M)
    s = count(doc)
    total = sum(s.values())
    sli = total / len(tasks)
    tgt, tol = TARGET[level]
    ok = abs(sli - tgt) <= tol
    print(f"{path.name}  ({level})")
    for k in sorted(s):
        if s[k]:
            print(f"   {k:20} {s[k]:3}")
    print(f"   {'TOTAL supports':20} {total:3}")
    print(f"   {'tasks':20} {len(tasks):3}")
    print(f"\n   SLI {sli:.2f}   target {tgt} ±{tol}   {'OK' if ok else 'OUT'}")
    return 0 if ok else 1


if __name__ == '__main__':
    sys.exit(main())
