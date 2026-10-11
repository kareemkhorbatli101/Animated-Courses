"""The A1 gate. Ceilings only.

Run: python3 tools/gate.py units/a11-u01.md

Every number comes from spec/golden.yaml. The gate refuses to invent one, and
it refuses to check a minimum, because the single most expensive mistake in
this repository was a suite that enforced floors and reported a bad unit green.

Sentences are measured LINE BY LINE, never on the file joined. Measuring a
whole markdown file as one string produced nine false positives in B1, and in
the SAT books joining option sets put a word next to itself and invented a
typo that was not there.
"""
import re
import statistics
import sys

import yaml

OK, BAD = [], []


def check(name, cond, detail=''):
    (OK if cond else BAD).append((name, detail))


VOWELS = 'aeiouy'


def syllables(w):
    w = re.sub(r'[^a-z]', '', w.lower())
    if not w:
        return 0
    n, prev = 0, False
    for ch in w:
        v = ch in VOWELS
        if v and not prev:
            n += 1
        prev = v
    if w.endswith('e') and n > 1:
        n -= 1
    return max(1, n)


def main(path):
    spec = yaml.safe_load(open('spec/golden.yaml'))
    raw = open(path).read()
    lines = raw.split('\n')
    ex, fig, lang, S = spec['exercise'], spec['figures'], spec['language'], spec['sections']

    # ---- structure ------------------------------------------------------
    want = [l for s in S for l in s['labels']]
    got = re.findall(r'^\*\*(W\d|\d[A-H])\*\*\s', raw, re.M)
    check('G1 exercise labels', got == want,
          f'{len(got)} found, {len(want)} wanted; first difference '
          f'{next((a for a, b in zip(got + [None] * 9, want) if a != b), None)}')
    check('G2 every part header present',
          all(s['header'] in raw for s in S),
          str([s['part'] for s in S if s['header'] not in raw]))
    check('G3 title', bool(re.search(spec['unit']['title_pattern'], raw, re.M)))
    check('G4 strap', bool(re.search(spec['unit']['strap_pattern'], raw, re.M)))

    words = len(re.findall(r"[A-Za-z'’]+", raw))
    check('G5 unit length ceiling', words <= spec['unit']['words_max'],
          f'{words} words, ceiling {spec["unit"]["words_max"]} (no floor exists)')

    # ---- language, measured line by line --------------------------------
    prose, items = [], []
    for ln in lines:
        s = ln.strip()
        if not s or s.startswith('|') or s.startswith('*Figure') or s.startswith('>'):
            continue
        s = re.sub(r'\*\(example\)\*', '', s)
        s = re.sub(r'\*\*|\*|_{3,}|✓', '', s).strip()
        if not s:
            continue
        if re.match(r'^\d+\.\s', s) or re.match(r'^0\.\s', s):
            items.append(re.sub(r'^\d+\.\s*', '', s))
        else:
            prose.append(s)

    sent = []
    for s in prose + items:
        for piece in re.split(r'(?<=[.!?])\s+', s):
            w = re.findall(r"[A-Za-z'’]+", piece)
            if w:
                sent.append(w)
    means = [len(w) for w in sent]
    check('G6 mean sentence', statistics.mean(means) <= lang['mean_sentence_words_max'],
          f'{statistics.mean(means):.1f} words, ceiling {lang["mean_sentence_words_max"]}')
    over = [' '.join(w) for w in sent if len(w) > lang['max_sentence_words']]
    check('G7 longest sentence', not over, f'{len(over)} over: {over[:3]}')
    allw = [w for s in sent for w in s]
    fk = (0.39 * statistics.mean(means)
          + 11.8 * (sum(syllables(w) for w in allw) / max(1, len(allw))) - 15.59)
    check('G8 reading grade', fk <= lang['fk_grade_max'],
          f'FK {fk:.2f}, ceiling {lang["fk_grade_max"]}')

    il = [len(re.findall(r"[A-Za-z'’]+", i)) for i in items]
    check('G9 item mean', statistics.mean(il) <= ex['item_mean_words_max'],
          f'{statistics.mean(il):.1f}, ceiling {ex["item_mean_words_max"]}')
    long_items = [i for i in items
                  if len(re.findall(r"[A-Za-z'’]+", i)) > ex['item_max_words']]
    check('G10 no long item', not long_items, f'{len(long_items)}: {long_items[:3]}')

    # ---- every exercise -------------------------------------------------
    blocks = re.split(r'^\*\*(W\d|\d[A-H])\*\*\s', raw, flags=re.M)[1:]
    pairs = list(zip(blocks[::2], blocks[1::2]))
    noex, longr, fewitems, manyitems = [], [], [], []
    for lab, body in pairs:
        if not re.search(ex['example_pattern'], body, re.M):
            noex.append(lab)
        rub = body.split('\n')[0]
        if len(rub.split()) > ex['rubric_max_words']:
            longr.append((lab, len(rub.split())))
        n = len(re.findall(r'^\d+\.\s', body, re.M))
        if n < ex['items_min']:
            fewitems.append((lab, n))
        if n > ex['items_max']:
            manyitems.append((lab, n))
    check('G11 seeded example in every exercise', not noex, str(noex))
    check('G12 rubric ceiling', not longr, str(longr))
    check('G13 at least three items', not fewitems, str(fewitems))
    check('G14 at most eight items', not manyitems, str(manyitems))

    # ---- matching, mcq ---------------------------------------------------
    nospare = []
    for lab, body in pairs:
        if '|---|' in body and ex['not_needed_line'] not in body:
            nospare.append(lab)
    check('G15 matching prints a spare', not nospare, str(nospare))
    check('G16 three-option mcq', not re.search(r'\(d\)\s', raw), '')

    # ---- figures ---------------------------------------------------------
    caps = re.findall(fig['caption_pattern'], raw, re.M)
    check('G17 figure count', len(caps) == fig['per_unit'],
          f'{len(caps)} captions, want {fig["per_unit"]}')
    nums = [int(b) for a, b, c in caps]
    check('G18 figures numbered 1..n', nums == list(range(1, len(caps) + 1)), str(nums))
    longc = [c for a, b, c in caps if len(c.split()) > fig['caption_max_words']]
    check('G19 caption ceiling', not longc, str(longc))
    refs = set(int(m) for m in re.findall(r'Figure \d+\.(\d+)', raw))
    check('G20 every figure referenced by an exercise',
          set(nums) <= refs, str(sorted(set(nums) - refs)))

    # ---- figures per part -------------------------------------------------
    thin = []
    for s in S:
        seg = raw.split(s['header'])
        if len(seg) < 2:
            continue
        nxt = len(seg[1])
        for s2 in S:
            if s2['header'] in seg[1]:
                nxt = min(nxt, seg[1].index(s2['header']))
        body = seg[1][:nxt]
        n = len(re.findall(fig['caption_pattern'], body, re.M))
        if not (fig['min_per_part'] <= n <= fig['max_per_part']):
            thin.append((s['part'], n))
    check('G21 two to four figures per part', not thin, str(thin))

    # ---- report ----------------------------------------------------------
    for n, d in OK:
        print(f'  ok   {n}' + (f'  — {d}' if d else ''))
    for n, d in BAD:
        print(f'  FAIL {n}  — {d}')
    print(f'\n{len(OK)} passed, {len(BAD)} failed   [{path}]')
    return 1 if BAD else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1]))
