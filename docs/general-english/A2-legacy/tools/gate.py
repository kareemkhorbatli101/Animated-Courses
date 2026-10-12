#!/usr/bin/env python3
"""The B1 gate: HOUSE-STYLE.md, checked.

This replaces the 269-check suite for B1, and the reason is worth writing down.
That suite was built around A2's architecture and then tuned to make B1 look
harder than A2. It enforced a 42-section shell, 41 figures, a mean sentence of
at least 12 words and a reading grade of at least 5.5 -- and it reported a unit
as green that three readers in a row rejected. Its floors were not a safety
net; they were the fault.

So the gate is now small, and every number in it came off the supplied
coursebook rather than off A2. A2 keeps its own suite, untouched and still
green; nothing here runs against A2.

    python3 tools/gate.py            # check units/b11-u01.md
    python3 tools/gate.py --unit 2
"""
from __future__ import annotations
import argparse, os, re, sys, statistics
import yaml

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
OK, BAD = [], []


def check(name, cond, detail=''):
    (OK if cond else BAD).append((name, detail))


def syl(w):
    w = w.lower(); n = len(re.findall(r'[aeiouy]+', w))
    return max(1, n - (1 if w.endswith('e') and n > 1 else 0))


def run(unit=1):
    spec = yaml.safe_load(open(os.path.join(ROOT, 'spec', 'golden.yaml'), encoding='utf-8'))
    clarity = yaml.safe_load(open(os.path.join(ROOT, 'ledgers', 'clarity.yaml'), encoding='utf-8'))
    p = os.path.join(ROOT, 'units', f'b11-u{unit:02d}.md')
    t = open(p, encoding='utf-8').read()
    lines = t.split('\n')
    lang, ex, fig = spec['language'], spec['exercise'], spec['figures']

    # ---- 1 the shape ------------------------------------------------------
    labels = re.findall(r'^\*\*(W\d|\d{1,2}[A-H])\*\*\s+(\S.*)$', t, re.M)
    want = [l for s in spec['sections'] for l in s['labels']]
    got = [l for l, _ in labels]
    check('G1 exercise labels', got == want,
          f'{len(got)} labels; first difference at '
          f'{next((i for i, (a, b) in enumerate(zip(got, want)) if a != b), len(got))}')
    check('G2 every part present',
          all(any(l.startswith(f'**{s["part"]}') for l in lines) for s in spec['sections']),
          'a part header is missing')

    words = len(t.split())
    lo, hi = spec['unit']['words']['min'], spec['unit']['words']['max']
    check('G3 unit length', lo <= words <= hi, f'{words} words, want {lo}-{hi}')

    # ---- 2 the texts ------------------------------------------------------
    quoted = [re.sub(r'^>\s?', '', l).strip() for l in lines if l.strip().startswith('>')]
    texts = [q for q in quoted if len(q.split()) > 60]
    check('G4 few long texts', len(texts) <= lang['long_texts_max'],
          f'{len(texts)} texts over 60 words, limit {lang["long_texts_max"]}')
    longest = max((len(q.split()) for q in texts), default=0)
    check('G5 no long text is long', longest <= lang['long_text_words_max'],
          f'longest text {longest} words, limit {lang["long_text_words_max"]}')

    # ---- 3 the language ---------------------------------------------------
    # Sentences are measured LINE BY LINE. Measuring the whole file as one
    # string makes the title, the four unit bullets and a run of table rows
    # into a single 40-word "sentence", because none of them ends in a stop --
    # which is how the first run of this gate reported nine sentences over the
    # limit in a unit whose longest real sentence is 19 words.
    sents = []
    for raw in lines:
        l = raw.strip()
        # the texts, the dialogues and the models all live inside blockquotes,
        # so the quote marker comes off and the line is measured. Only the
        # apparatus inside a quote is skipped.
        if l.startswith('>'):
            l = re.sub(r'^>\s?', '', l).strip()
            if l.startswith('**') or not l:
                continue
            l = re.sub(r'^\*\*[A-Z][A-Za-z ]+:\*\*\s*', '', l)
        if (not l or l.startswith(('|', '*Figure', '**', '-', '☐', '____'))
                or re.match(r'^\(?[a-d0-9]+[.)]', l)):
            continue
        l = re.sub(r'[|*>#☐]', ' ', l)
        l = re.sub(r'_{3,}', ' something ', l)
        for x in re.split(r'(?<=[.!?])\s+', l):
            if len(x.split()) > 2:
                sents.append(x.strip())
    L = [len(s.split()) for s in sents]
    ws = [w for s in sents for w in re.findall(r"[A-Za-z']+", s)]
    mean = statistics.mean(L)
    fk = 0.39 * mean + 11.8 * sum(syl(w) for w in ws) / len(ws) - 15.59
    check('G6 mean sentence', mean <= lang['mean_sentence_words_max'],
          f'{mean:.1f}, limit {lang["mean_sentence_words_max"]}')
    over = [s for s in sents if len(s.split()) > lang['max_sentence_words']]
    check('G7 longest sentence', not over,
          f'{len(over)} over {lang["max_sentence_words"]}w: "{over[0][:60]}..."' if over else '')
    check('G8 reading grade', fk <= lang['fk_grade_max'],
          f'FK {fk:.2f}, limit {lang["fk_grade_max"]}')

    # ---- 4 the items ------------------------------------------------------
    items = [l.strip() for l in lines if re.match(r'^\d+\.\s+\S', l.strip())]
    IL = [len(i.split()) for i in items]
    check('G9 item length mean', statistics.mean(IL) <= ex['item_mean_words_max'],
          f'{statistics.mean(IL):.1f}, limit {ex["item_mean_words_max"]}')
    long_items = [i for i in items if len(i.split()) > ex['item_max_words']]
    check('G10 no long item', not long_items,
          f'{len(long_items)} over {ex["item_max_words"]}w: "{long_items[0][:60]}..."'
          if long_items else '')

    # ---- 5 every exercise ------------------------------------------------
    blocks = re.split(r'^\*\*(?:W\d|\d{1,2}[A-H])\*\*\s', t, flags=re.M)[1:]
    noex = [got[i] for i, b in enumerate(blocks)
            if '*(example)*' not in b and not re.search(r'^\*\*(4[A-E]|\dG|\dD|7D|8E|10F)', '')]
    # speaking and free-writing tasks carry no example in the source either
    FREE = {'1H', '2F', '4A', '4B', '4C', '4D', '4E', '5G', '6B', '6D', '7A',
            '7D', '8E', '9B', '9C', '10F', '6A'}
    noex = [got[i] for i, b in enumerate(blocks)
            if '*(example)*' not in b and got[i] not in FREE]
    check('G11 seeded example', not noex, f'{len(noex)} exercises with no example: {noex[:6]}')

    rubrics = [r for _, r in labels]
    longr = [r for r in rubrics if len(r.split()) > ex['rubric_max_words']]
    check('G12 short rubrics', not longr,
          f'{len(longr)} over {ex["rubric_max_words"]}w: "{longr[0][:60]}..."' if longr else '')

    matches = [b for b in blocks if '| **Match** | **to** |' in b]
    nospare = [i for i, b in enumerate(matches) if ex['not_needed_line'] not in b]
    check('G13 matching has a spare', not nospare,
          f'{len(nospare)} of {len(matches)} matching tasks have no spare option')

    opts = re.findall(r'^\((a|b|c)\)\s', t, re.M)
    check('G14 three-option mcq', not re.search(r'^\(d\)\s', t, re.M),
          'a four-option question is present')

    # ---- 6 the figures ----------------------------------------------------
    caps = re.findall(r'^\*Figure (\d+)\.(\d+) · (.+?)\.\*$', t, re.M)
    check('G15 figure count', len(caps) == fig['per_unit'],
          f'{len(caps)}, want {fig["per_unit"]}')
    nums = [int(b) for _, b, _ in caps]
    check('G16 figures numbered 1..n', nums == list(range(1, len(caps) + 1)),
          f'out of order at {next((i for i, n in enumerate(nums, 1) if n != i), None)}')
    longc = [c for _, _, c in caps if len(c.split()) > fig['caption_max_words']]
    check('G17 short captions', not longc,
          f'{len(longc)} over {fig["caption_max_words"]}w: "{longc[0]}"' if longc else '')
    part, perpart = 'front', {}
    for l in lines:
        m = re.match(r'^\*\*(Warm Up|Part \d+)', l)
        if m:
            part = m.group(1)
        if l.startswith('*Figure'):
            perpart[part] = perpart.get(part, 0) + 1
    thin = {k: v for k, v in perpart.items()
            if k != 'front' and not (fig['min_per_part'] <= v <= fig['max_per_part'])}
    check('G18 figures per part', not thin, f'{thin}')

    # ---- 7 the devices ----------------------------------------------------
    dev = spec['devices']
    counts = {
        'word_meaning_table': t.count('| **Word** | **Meaning** |'),
        'words_box': len(re.findall(r'\*\*Words:\*\*', t)),
        'glossary_box': len(re.findall(r'\*\*Glossary:\*\*', t)),
        'model_box': len(re.findall(r'\*\*Model:?\*\*', t)),
        'sentence_starters': len(re.findall(r'\*\*Sentence starters:\*\*', t)),
        'check_before_you_finish': len(re.findall(r'\*\*Check before you finish\*\*', t)),
        'can_do': len(re.findall(r'\*\*Can-Do', t)),
        'exam_skill': len(re.findall(r'\*\*Exam skill', t)),
        'before_you_read': len(re.findall(r'\*\*Before you (read|listen):\*\*', t)),
    }
    for k, rule in dev.items():
        check(f'G19 device {k}', counts.get(k, 0) >= rule['min'],
              f'{counts.get(k,0)}, want at least {rule["min"]}')

    # ---- 8 the banned constructions ---------------------------------------
    hits = [b['id'] for b in clarity['banned_phrasing'] if re.search(b['pattern'], t)]
    check('G20 no banned phrasing', not hits, f'{hits}')

    # ---- 9 a pre-task question must be answerable from the page -----------
    pres = re.findall(r'\*\*Before you (?:read|listen):\*\*\s*(.+?)(?:\n|$)', t)
    vague = [q for q in pres if not re.search(
        r'(look at the picture|look at the table|read the|listen)', q, re.I)]
    check('G21 pre-task points at the page', not vague,
          f'{len(vague)} that cannot be answered from the page: {vague[:2]}')

    print(f'\nB1 Unit {unit} — gate against HOUSE-STYLE.md\n')
    for n, d in OK:
        print(f'  ok    {n}' + (f'  ({d})' if d else ''))
    for n, d in BAD:
        print(f'  FAIL  {n}  {d}')
    print(f'\n{len(OK)} pass · {len(BAD)} FAIL   '
          f'[{len(got)} exercises · {words} words · mean {mean:.1f} · FK {fk:.2f} '
          f'· {len(caps)} figures · {len(texts)} long texts]\n')
    return 1 if BAD else 0


if __name__ == '__main__':
    a = argparse.ArgumentParser()
    a.add_argument('--unit', type=int, default=1)
    sys.exit(run(a.parse_args().unit))
