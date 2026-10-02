# -*- coding: utf-8 -*-
"""Structural checks every unit must pass before it goes in a volume."""
import sys, os, re, importlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

SHAPE = [
    ('acad', 24), ('campus', 12), ('candos', 6), ('vocab_talk', 4),
]
ITEMS = [('r2', 'guided', 4), ('r2', 'exam', 6), ('r3', 'guided', 4), ('r3', 'exam', 7),
         ('l1', 'warm', 3), ('l1', 'items', 6), ('l2', 'warm', 3), ('l2', 'items', 5),
         ('l3', 'warm', 3), ('l3', 'items', 6), ('w1', 'guided', 3), ('w1', 'exam', 7)]


def check(U):
    n = U['n']
    out = []

    def bad(msg):
        out.append('u%02d: %s' % (n, msg))

    for k, want in SHAPE:
        if len(U[k]) != want:
            bad('%s has %d, want %d' % (k, len(U[k]), want))
    # no repeated head words inside the unit
    words = [w for w, _ in U['acad']] + [w for w, _ in U['campus']]
    if len(set(words)) != len(words):
        bad('a word is listed twice in this unit')
    # Complete the Words: dashes must match the answer length
    r1 = U['r1']
    for tag, text, ans in (('guided', r1['guided_text'], r1['guided']),
                           ('exam', r1['exam_text'], r1['exam'])):
        runs = []
        cur = 0
        for ch in text:
            if ch == '-':
                cur += 1
            elif cur:
                runs.append(cur); cur = 0
        if cur:
            runs.append(cur)
        if len(runs) != len(ans):
            bad('r1 %s has %d gaps but %d answers' % (tag, len(runs), len(ans)))
        want = 10 if tag == 'exam' else 5
        if len(ans) != want:
            bad('r1 %s has %d answers, want %d' % (tag, len(ans), want))
        else:
            for i, (d_, a) in enumerate(zip(runs, ans), 1):
                if d_ != len(a):
                    bad('r1 %s gap %d: %d dashes but answer %r is %d letters'
                        % (tag, i, d_, a, len(a)))
    for blk, field, want in ITEMS:
        got = len(U[blk][field])
        if got != want:
            bad('%s.%s has %d, want %d' % (blk, field, got, want))
    # every multiple-choice item: four options, a valid index, a reason
    for blk in ('r2', 'r3', 'l1', 'l2', 'l3'):
        for field in ('guided', 'exam', 'warm', 'items'):
            for it in U[blk].get(field, []):
                stem, opts, ai, why = it
                if len(opts) != 4:
                    bad('%s.%s "%s" has %d options' % (blk, field, stem[:30], len(opts)))
                if not 0 <= ai <= 3:
                    bad('%s.%s "%s" answer index %r' % (blk, field, stem[:30], ai))
                if not why or len(why) < 20:
                    bad('%s.%s "%s" has no real explanation' % (blk, field, stem[:30]))
    # answers must not all sit on one letter
    letters = []
    for blk in ('r2', 'r3', 'l1', 'l2', 'l3'):
        for field in ('guided', 'exam', 'warm', 'items'):
            letters += ['ABCD'[it[2]] for it in U[blk].get(field, [])]
    # option order is spread evenly at render time (book.Spread), so the raw
    # data only has to avoid being degenerate
    if len(set(letters)) < 3:
        bad('items use only %d distinct answer positions' % len(set(letters)))
    # speaking
    if len(U['sp']) != 3:
        bad('needs 3 speaking cycles')
    for i, s in enumerate(U['sp'], 1):
        if len(s['repeat']) != 7:
            bad('speaking %d has %d repeat sentences, want 7' % (i, len(s['repeat'])))
        if len(s['qs']) != 4:
            bad('speaking %d has %d interview questions, want 4' % (i, len(s['qs'])))
        lens = [len(x.split()) for x in s['repeat']]
        if lens[-1] != max(lens) or sum(lens[4:]) <= sum(lens[:3]) + 6:
            bad('speaking %d: repeat sentences must build to the longest last, got %r'
                % (i, lens))
    # writing
    if len(U['w1']['guided']) + len(U['w1']['exam']) != 10:
        bad('Build a Sentence must total 10 items')
    # the real task builds a direct question, an embedded question (which ends
    # in a full stop) or a relative clause, in roughly 8:2
    EMBED = re.compile(
        r'\b(asked|asks|know|knew|wonder\w*|wanted to know|tell me|told \w+)\b'
        r'[^.?]*\b(whether|if|where|when|why|how|what|which|who)\b', re.I)
    qs = 0
    for _, _, a in U['w1']['guided'] + U['w1']['exam']:
        if a.rstrip().endswith('?') or EMBED.search(a):
            qs += 1
    if qs < 8:
        bad('only %d of 10 Build a Sentence items use a question frame (want at least 8)' % qs)
    if U['w3']['model_words'] < 100:
        bad('discussion model is under 100 words')
    # review
    for k, want in (('vocab', 12), ('gram', 8), ('mini', 6)):
        if len(U['rev'][k]) != want:
            bad('rev.%s has %d, want %d' % (k, len(U['rev'][k]), want))
    return out


def main(nums):
    problems, seen = [], {}
    for n in nums:
        U = importlib.import_module('content.u%02d' % n).UNIT
        problems += check(U)
        for w, _ in U['acad'] + U['campus']:
            seen.setdefault(w, []).append(n)
    for w, us in sorted(seen.items()):
        if len(us) > 1:
            problems.append('"%s" is taught in units %s' % (w, us))
    if problems:
        print('\n'.join(problems))
        print('\n%d problem(s)' % len(problems))
        return 1
    print('%d units: all checks pass (%d head words, no repeats)' % (len(nums), len(seen)))
    return 0


if __name__ == '__main__':
    arg = sys.argv[1:] or ['1-20']
    nums = []
    for a in arg:
        if '-' in a:
            lo, hi = a.split('-'); nums += list(range(int(lo), int(hi) + 1))
        else:
            nums.append(int(a))
    sys.exit(main(nums))
