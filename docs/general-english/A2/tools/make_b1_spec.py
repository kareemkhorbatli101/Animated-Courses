#!/usr/bin/env python3
"""Generate B1/spec/golden.yaml by MEASURING source/PE_B2_U08_StudentBook.docx.

This replaces the previous generator, which derived B1's spec from A2's by a
list of substitutions. That was Route B in 00-MASTER-PLAN.md section 1: "no B1
coursebook was supplied, so the architecture is A2's held constant." A book has
now been supplied, which is Route A, and the plan always said what to do then --
measure it and let its numbers replace the forecasts.

The measurement changed the course, and the three biggest changes are all the
same mistake in different places: the old spec was tuned to make B1 look harder
than A2, and it made the book harder than a real published unit.

    measured in the source     the old B1 spec said
    mean sentence  9.9         floor of 12.0, ceiling 16
    Flesch-Kincaid 3.25        floor of 5.5, ceiling 7.0
    exercise item  8.6 words   no rule at all
    59 exercises               42 sub-sections
    28 figures                 41 figures
    4 texts over 60 words      25

The floors (E27, E28, E29 and the L01 that calibrated them) are gone. A floor
that forces a writer to lengthen sentences is a floor that makes a coursebook
worse, and the evidence is that a published B2 unit fails all three.
"""
from __future__ import annotations
import hashlib, os, re, statistics, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC = os.path.join(ROOT, 'source', 'PE_B2_U08_StudentBook.docx')

# The eleven parts and their exercise counts, read off the source: W1-W3,
# 1A-1H, 2A-2H, 3A-3E, 4A-4E, 5A-5G, 6A-6D, 7A-7D, 8A-8E, 9A-9D, 10A-10F.
PARTS = [
    ('Warm Up',  'W',  3,  'Warm Up',                        None),
    ('Part 1',   '1',  8,  'Vocabulary & Pronunciation',     'vocabulary'),
    ('Part 2',   '2',  8,  'Grammar',                        'grammar'),
    ('Part 3',   '3',  5,  'Listening',                      'listening'),
    ('Part 4',   '4',  5,  'Speaking',                       'speaking'),
    ('Part 5',   '5',  7,  'Reading',                        'reading'),
    ('Part 6',   '6',  4,  'Writing',                        'writing'),
    ('Part 7',   '7',  4,  'Exam Skills',                    'exam'),
    ('Part 8',   '8',  5,  'At Work',                        'case'),
    ('Part 9',   '9',  4,  'Real-World File',                'transaction'),
    ('Part 10',  '10', 6,  'Review & Can-Do',                'review'),
]


def measure():
    from docx import Document
    d = Document(SRC)
    blocks = [p.text for p in d.paragraphs]
    seen = set()
    for t in d.tables:
        for r in t.rows:
            for c in r.cells:
                x = ' '.join(c.text.split())
                if x and x not in seen:
                    seen.add(x); blocks.append(x)
    prose = [x for x in blocks if len(x.split()) >= 12
             and not x.startswith(('Words:', 'Match', '0.'))]
    sents = [s.strip() for x in prose
             for s in re.split(r'(?<=[.!?])\s+', x) if len(s.split()) > 2]
    L = [len(s.split()) for s in sents]
    words = [w for s in sents for w in re.findall(r"[A-Za-z']+", s)]

    def syl(w):
        w = w.lower(); n = len(re.findall(r'[aeiouy]+', w))
        return max(1, n - (1 if w.endswith('e') and n > 1 else 0))
    spw = sum(syl(w) for w in words) / len(words)
    mean = statistics.mean(L)
    items = [x for x in blocks if re.match(r'^\d+\.\s', x.strip())]
    IL = [len(x.split()) for x in items]
    texts = [x for x in seen if len(x.split()) > 60]
    return {
        'total_words': sum(len(b.split()) for b in blocks),
        'sentences': len(sents),
        'mean_sentence': round(mean, 2),
        'median_sentence': statistics.median(L),
        'max_sentence': max(L),
        'syllables_per_word': round(spw, 3),
        'fk': round(0.39 * mean + 11.8 * spw - 15.59, 2),
        'items': len(IL),
        'item_mean': round(statistics.mean(IL), 2),
        'item_max': max(IL),
        'long_texts': len(texts),
        'longest_text': max(len(x.split()) for x in texts),
    }


def sections_yaml():
    out = ['sections:']
    for name, pre, n, title, kind in PARTS:
        hdr = '**Warm Up**' if name == 'Warm Up' else f'**{name} · {title}**'
        out.append(f'  - part: {name}')
        out.append(f'    header: "{hdr}"')
        out.append(f'    title: "{title}"')
        out.append(f'    exercises: {n}')
        labs = [f'{pre}{i}' for i in range(1, n + 1)] if pre == 'W' else \
               [f'{pre}{chr(64 + i)}' for i in range(1, n + 1)]
        out.append(f'    labels: [{", ".join(labs)}]')
        # every exercise is one bold line: **W1** rubric
        out.append(r"    heading: '^\*\*(" + '|'.join(labs) + r")\*\*\s+\S'")
    return '\n'.join(out)


def main():
    if not os.path.isfile(SRC):
        print(f'no source book at {SRC}'); return 1
    m = measure()
    total_ex = sum(p[2] for p in PARTS)
    y = f"""# The frozen architecture for B1. MEASURED from the supplied coursebook,
# source/PE_B2_U08_StudentBook.docx, by tools/make_b1_spec.py. Do not hand-edit:
# change the measurement or the PARTS table in the generator and re-run.
#
# Everything below that is a number came off that book. The previous spec was
# derived from A2 and tuned to make B1 look harder; it made the course harder
# than a real published unit in every dimension that matters.
schema_version: 4
source:
  file: PE_B2_U08_StudentBook.docx
  level_of_source: B2
  measured_on: 2026-10-09
  # what the measurement found
  total_words: {m['total_words']}
  exercises: {total_ex}
  figures: 28
  sentences: {m['sentences']}
  mean_sentence: {m['mean_sentence']}
  median_sentence: {m['median_sentence']}
  max_sentence: {m['max_sentence']}
  syllables_per_word: {m['syllables_per_word']}
  flesch_kincaid: {m['fk']}
  exercise_items: {m['items']}
  item_mean_words: {m['item_mean']}
  item_max_words: {m['item_max']}
  texts_over_60_words: {m['long_texts']}
  longest_text_words: {m['longest_text']}

unit:
  title_pattern: '^\\*\\*Unit (\\d+): (.+)\\*\\*$'
  strap_pattern: '^\\*In this unit you.+\\*$'
  # a unit is a list of short numbered exercises, not a sequence of essays
  exercises: {total_ex}
  words: {{target: {m['total_words']}, min: {int(m['total_words']*0.85)}, max: {int(m['total_words']*1.15)}}}

{sections_yaml()}

exercise:
  # Every exercise is one bold label, one short rubric, then its items.
  label_pattern: '^\\*\\*(W\\d|\\d{{1,2}}[A-H])\\*\\*\\s+(.+)$'
  rubric_max_words: 20
  # the seeded example, which every exercise in the source carries
  example_pattern: '^0\\.\\s+.+\\*\\(example\\)\\*$'
  example_required: true
  items_min: 3
  items_max: 8
  item_max_words: {m['item_max']}
  item_mean_words_max: 11
  not_needed_line: 'One option is not needed.'

figures:
  per_unit: 28
  min_per_part: 2
  max_per_part: 4
  caption_pattern: '^\\*Figure (\\d+)\\.(\\d+) · (.+)\\.\\*$'
  caption_max_words: 8
  depictive_icons: true
  icon_allow: []

language:
  # CEILINGS ONLY. The floors are gone -- see the module docstring.
  mean_sentence_words_max: 12       # source 9.9
  max_sentence_words: 26            # source max 26
  fk_grade_max: 4.5                 # source 3.25
  max_clause_depth: 2
  min_band_coverage: 0.90
  # texts: a unit has FOUR of them and none is long
  long_texts_max: 5
  long_text_words_max: 190
  clarity_law: true
  clarity_answer_share: 0.5
  clarity_turn_words_max: 55

mcq:
  options: 3                        # source uses (a)(b)(c), not four
  option_pattern: '^\\((a|b|c)\\)\\s'
  max_letter_share_per_unit: 0.45

devices:
  word_meaning_table: {{min: 2}}      # one opening Part 1, one closing Part 10
  words_box: {{min: 3}}               # `Words: a · b · c`
  glossary_box: {{min: 2}}
  model_box: {{min: 4}}
  sentence_starters: {{min: 1}}
  check_before_you_finish: {{min: 1}}
  can_do: {{min: 1}}
  exam_skill: {{min: 1}}
  before_you_read: {{min: 1}}
"""
    p = os.path.join(ROOT, 'spec', 'golden.yaml')
    open(p, 'w', encoding='utf-8').write(y)
    open(os.path.join(ROOT, 'spec', 'golden.sha256'), 'w').write(
        hashlib.sha256(y.encode()).hexdigest() + '\n')
    print(f'wrote spec/golden.yaml from the source measurement '
          f'({len(y.splitlines())} lines, {total_ex} exercises)')
    for k, v in m.items():
        print(f'   {k}: {v}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
