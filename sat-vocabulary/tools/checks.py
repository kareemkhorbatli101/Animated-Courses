#!/usr/bin/env python3
"""600 targeted check passes: three per item, evenly across all 200 items.

Pass A  Inference pathway   - the passage alone licenses the answer (6 assertions)
Pass B  Distractor integrity - every wrong option is wrong for a named reason (7 assertions)
Pass C  Mechanical conformance - blank, length, band, noise, option form (5 assertions)

Plus book-level checks, reported separately: they are not per-item and so are not
counted in the 600.
"""
import os, re, sys, glob, yaml
from collections import Counter, defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPEC = yaml.safe_load(open(os.path.join(ROOT, 'data', 'spec.yaml')))
BLANK = SPEC['blank_token']
LETTERS = 'abcd'

# Everyday words that Level 4 tests in a rare sense. They are high-frequency by
# definition, so their appearance in an easier passage is not a band violation.
RARE_SENSE_EXEMPT = set()


def norm_ws(s):
    return re.sub(r'\s+', ' ', (s or '').strip())


def stem(w):
    w = w.lower().strip(".,;:!?'\"()")
    for suf in ('ingly', 'ing', 'edly', 'ied', 'ies', 'ed', 'es', 'ly', 's'):
        if len(w) > len(suf) + 3 and w.endswith(suf):
            return w[:-len(suf)]
    return w


def load_items():
    items = []
    for p in sorted(glob.glob(os.path.join(ROOT, 'data', 'items', '*.yaml'))):
        d = yaml.safe_load(open(p))
        for it in d['items']:
            it['level'] = d['level']
            it['domain'] = d['domain']
            it['passage'] = norm_ws(it['passage'])
            it['pathway'] = norm_ws(it['pathway'])
            it['clues'] = [it['clue']] if isinstance(it['clue'], str) else list(it['clue'])
            it['_file'] = os.path.basename(p)
            items.append(it)
    return items


def build_bands(items):
    bands = defaultdict(set)
    for it in items:
        if it.get('rare_sense'):
            RARE_SENSE_EXEMPT.add(stem(it['word']))
        bands[it['level']].add(stem(it['word']))
    return bands


def words_of(passage):
    return [w for w in re.findall(r"[A-Za-z][A-Za-z'-]*", passage.replace(BLANK, ' '))]


def pass_a(it):
    """Inference pathway: the passage alone licenses the answer."""
    f = []
    low = it['passage'].lower()
    for c in it['clues']:
        if norm_ws(c).lower() not in low:
            f.append('A1 clue not found verbatim in passage: %r' % c[:40])
        if BLANK in c:
            f.append('A6 clue contains the blank itself')
    need = 2 if it['level'] == 4 else 1
    if len(it['clues']) < need:
        f.append('A2 level %d needs %d clue(s), has %d' % (it['level'], need, len(it['clues'])))
    if it['relation'] not in SPEC['relations']:
        f.append('A3 relation %r not in closed set' % it['relation'])
    pw = it['pathway']
    if len(pw.split()) < 10:
        f.append('A4 pathway too short')
    if not re.search(r'blank must (mean|name)', pw):
        f.append('A4 pathway does not state what the blank must mean')
    st = stem(it['word'])
    if st in [stem(w) for w in words_of(it['passage'])]:
        f.append('A5 answer word appears in the passage')
    return f


def pass_b(it):
    """Distractor integrity: every wrong option is wrong for a named, tagged reason."""
    f = []
    opts = it['options']
    if len(opts) != 4:
        f.append('B1 %d options' % len(opts))
    if len({o.lower() for o in opts}) != len(opts):
        f.append('B1 duplicate options')
    if opts[LETTERS.index(it['answer'])] != it['word']:
        f.append('B2 answer letter does not carry the target word')
    wrong = [L for L in LETTERS[:len(opts)] if L != it['answer']]
    tags = []
    for L in wrong:
        t = it['traps'].get(L)
        if t not in SPEC['traps']:
            f.append('B3 option %s has no valid trap tag' % L)
        else:
            tags.append(t)
        k = norm_ws(it['key'].get(L, ''))
        if len(k.split()) < 6:
            f.append('B4 option %s explanation too short' % L)
    if len(set(tags)) < 2:
        f.append('B5 fewer than two distinct trap types')
    has_t3 = 'T3' in tags
    if it.get('rare_sense') and tags.count('T3') != 1:
        f.append('B6 rare-sense item needs exactly one T3 trap, has %d' % tags.count('T3'))
    if not it.get('rare_sense') and has_t3:
        f.append('B6 T3 trap used on an item that is not testing a rare sense')
    pstems = {stem(w) for w in words_of(it['passage'])}
    for L in wrong:
        if stem(opts[LETTERS.index(L)]) in pstems:
            f.append('B7 distractor %s appears in the passage' % L)
    return f


def pass_c(it, bands):
    """Mechanical conformance: blank, length, band, noise share, option form."""
    f = []
    lv = SPEC['levels'][it['level']]
    if it['passage'].count(BLANK) != 1:
        f.append('C1 blank token appears %d times' % it['passage'].count(BLANK))
    if re.search(r'_{1,7}(?!_)', it['passage'].replace(BLANK, '')):
        f.append('C1 a blank of non-standard width is present')
    n = len(words_of(it['passage']))
    if not (lv['words_min'] <= n <= lv['words_max']):
        f.append('C2 passage is %d words, band is %d-%d' % (n, lv['words_min'], lv['words_max']))
    low = it['passage'].lower()
    clues_low = [norm_ws(c).lower() for c in it['clues']]
    if len(it['noise']) < lv['noise_examples_min']:
        f.append('C3 only %d noise details declared, %d required' % (len(it['noise']), lv['noise_examples_min']))
    for s in it['noise']:
        sl = norm_ws(s).lower()
        if sl not in low:
            f.append('C3 noise string not found in passage: %r' % s[:30])
        if BLANK in s:
            f.append('C3 noise string contains the blank')
        for cl in clues_low:
            if sl and (sl in cl or cl in sl):
                f.append('C3 noise %r overlaps the clue' % s[:30])
    higher = set()
    for L in range(it['level'], 5):
        higher |= bands[L]
    higher -= RARE_SENSE_EXEMPT
    higher.discard(stem(it['word']))
    for w in words_of(it['passage']):
        if stem(w) in higher:
            f.append('C4 passage uses %r, a target word at this level or above' % w)
    for o in it['options']:
        if not re.fullmatch(r"[a-z][a-z'-]*", o):
            f.append('C5 option %r is not a single lower-case word' % o)
    return f


def main():
    items = load_items()
    bands = build_bands(items)
    results = []
    for it in items:
        for name, fails in (('A', pass_a(it)), ('B', pass_b(it)), ('C', pass_c(it, bands))):
            results.append((it['id'], name, fails))

    total = len(results)
    failed = [r for r in results if r[2]]
    print('=' * 72)
    print('ITEM-LEVEL CHECK PASSES: %d (%d items x %d passes)' % (total, len(items), SPEC['checks']['per_item']))
    print('  passed: %d   failed: %d' % (total - len(failed), len(failed)))
    print('=' * 72)
    for iid, name, fails in failed:
        for msg in fails:
            print('FAIL %s pass %s: %s' % (iid, name, msg))

    # ---- book-level checks (reported separately, not part of the 600) ----
    print()
    print('BOOK-LEVEL CHECKS')
    book = []

    def chk(label, ok, detail=''):
        book.append((label, ok, detail))

    chk('200 items present', len(items) == 200, '%d items' % len(items))
    chk('200 distinct target words', len({i['word'] for i in items}) == 200,
        '%d distinct' % len({i['word'] for i in items}))
    grid = Counter((i['level'], i['domain']) for i in items)
    chk('grid is 4 levels x 5 domains x 10', all(v == 10 for v in grid.values()) and len(grid) == 20,
        '%d cells' % len(grid))
    letters = Counter(i['answer'] for i in items)
    chk('answer letters balanced (each 20-30%%)',
        all(0.20 <= letters[L] / len(items) <= 0.30 for L in LETTERS),
        ' '.join('%s=%d' % (L, letters[L]) for L in LETTERS))
    seq = [i['answer'] for i in items]
    runs = max(len(list(g)) for g in re.findall(r'((.)\2*)', ''.join(seq)) and
               [m[0] for m in re.findall(r'((.)\2*)', ''.join(seq))]) if seq else 0
    chk('no three identical answer letters in a row', runs <= 2, 'longest run %d' % runs)
    for lv in (1, 2, 3, 4):
        sub = [i for i in items if i['level'] == lv]
        tags = Counter(t for i in sub for t in i['traps'].values())
        chk('level %d uses T1, T2 and T4 at least 10 times each' % lv,
            all(tags[t] >= 10 for t in ('T1', 'T2', 'T4')),
            ' '.join('%s=%d' % (t, tags[t]) for t in ('T1', 'T2', 'T3', 'T4')))
    l4 = [i for i in items if i['level'] == 4]
    chk('32 of the 50 level-4 words test a rare sense',
        sum(1 for i in l4 if i.get('rare_sense')) == 32,
        '%d rare-sense items' % sum(1 for i in l4 if i.get('rare_sense')))
    for lv in (1, 2, 3, 4):
        rels = {i['relation'] for i in items if i['level'] == lv}
        chk('level %d uses at least three clue relations' % lv, len(rels) >= 3, ','.join(sorted(rels)))
    for lv in (1, 2, 3, 4):
        sub = [i for i in items if i['level'] == lv]
        mean = sum(len(words_of(i['passage'])) for i in sub) / len(sub)
        lo, hi = SPEC['levels'][lv]['words_min'], SPEC['levels'][lv]['words_max']
        chk('level %d mean passage length inside its band' % lv, lo <= mean <= hi, '%.1f words' % mean)
    means = [sum(len(words_of(i['passage'])) for i in items if i['level'] == lv) /
             50 for lv in (1, 2, 3, 4)]
    chk('passage length rises with every level', all(means[i] < means[i+1] for i in range(3)),
        ' < '.join('%.1f' % m for m in means))
    def off_path(it):
        tot = len(words_of(it['passage']))
        on = sum(len(words_of(c)) for c in it['clues'])
        return max(0.0, 1 - on / tot) if tot else 0.0
    shares = []
    for lv in (1, 2, 3, 4):
        sub = [i for i in items if i['level'] == lv]
        shares.append(sum(off_path(i) for i in sub) / len(sub))
    chk('at least 60%% of every level sits off the clue path', all(s >= 0.60 for s in shares),
        ' / '.join('%.0f%%' % (s * 100) for s in shares))
    chk('every level-4 item combines two or more clues',
        all(len(i['clues']) >= 2 for i in items if i['level'] == 4),
        'fewest %d' % min(len(i['clues']) for i in items if i['level'] == 4))
    per = [sum(len(i['clues']) for i in items if i['level'] == lv) / 50 for lv in (1, 2, 3, 4)]
    chk('clues per item at levels 1-3 are fewer than at level 4',
        all(per[i] < per[3] for i in range(3)),
        ' / '.join('%.2f' % x for x in per))
    chk('every item keeps at least a third of its passage off the clue path',
        all(off_path(i) >= 0.33 for i in items),
        'lowest %.0f%% (%s)' % (min(off_path(i) for i in items) * 100,
                                min(items, key=off_path)['id']))
    chk('every item declares at least three inert details',
        all(len(i['noise']) >= 3 for i in items),
        'fewest %d' % min(len(i['noise']) for i in items))
    chk('blank token identical in all 200 passages',
        all(i['passage'].count(BLANK) == 1 for i in items), repr(BLANK))

    for label, ok, detail in book:
        print('%-4s %-58s %s' % ('ok' if ok else 'FAIL', label, detail))
    bad_book = [b for b in book if not b[1]]
    print()
    print('SUMMARY: %d/%d item-level passes, %d/%d book-level checks' %
          (total - len(failed), total, len(book) - len(bad_book), len(book)))
    return 1 if (failed or bad_book) else 0


if __name__ == '__main__':
    sys.exit(main())
