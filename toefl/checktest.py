# -*- coding: utf-8 -*-
"""Structural checks a practice test must pass. The tests have their own shape,
so they get their own checker rather than being forced through check.py."""
import sys, os, re, importlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

WANT = dict(reading_modules=2, listening_modules=2, build=10, repeat=7, interview_qs=4)


def check(T, b2=False):
    out = []
    n = T['n']
    bad = lambda m: out.append('test%d: %s' % (n, m))

    tot = 0
    for mi, M in enumerate(T['reading'], 1):
        runs = [len(x) for x in re.findall(r'-+', M['gap_text'])]
        if len(runs) != 10:
            bad('reading %d has %d gaps, want 10' % (mi, len(runs)))
        if len(M['gap_ans']) != 10:
            bad('reading %d has %d gap answers, want 10' % (mi, len(M['gap_ans'])))
        for i, (d, a) in enumerate(zip(runs, M['gap_ans']), 1):
            if d != len(a):
                bad('reading %d gap %d: %d dashes but %r is %d letters'
                    % (mi, i, d, a, len(a)))
        if len(M['docs']) != 2:
            bad('reading %d has %d documents, want 2' % (mi, len(M['docs'])))
        for f, want in (('daily', 5), ('academic', 5)):
            if len(M[f]) != want:
                bad('reading %d %s has %d, want %d' % (mi, f, len(M[f]), want))
        w = M['passage'][2]
        if not 255 <= w <= 300:
            bad('reading %d passage is %d words, want 255-300' % (mi, w))
        tot += 10 + len(M['daily']) + len(M['academic'])

    ltot = 0
    for mi, M in enumerate(T['listening'], 1):
        want_convos = 2 if mi == 1 else 1
        if len(M['convos']) != want_convos:
            bad('listening %d has %d conversations, want %d'
                % (mi, len(M['convos']), want_convos))
        if len(M['warm']) != 8:
            bad('listening %d has %d responses, want 8' % (mi, len(M['warm'])))
        c = len(M['warm']) + sum(len(i) for _, i in M['convos']) \
            + len(M['announce'][1]) + len(M['talk'][1])
        want = 18 if mi == 1 else 16
        if c != want:
            bad('listening %d has %d items, want %d' % (mi, c, want))
        ltot += c

    W = T['writing']
    if len(W['build']) != 10:
        bad('Build a Sentence has %d items, want 10' % len(W['build']))
    qs = sum(1 for _, _, a in W['build'] if a.rstrip().endswith('?'))
    if qs < 6:
        bad('only %d of 10 Build a Sentence items are direct questions' % qs)
    if b2:
        for p, tiles, a in W['build']:
            if not 9 <= len(tiles) <= 11:
                bad('Build a Sentence %r has %d tiles, want 9-11' % (p[:30], len(tiles)))
    for k in ('to', 'date', 'subject', 'scenario', 'bullets'):
        if k not in W['email']:
            bad('email is missing %r' % k)
    if len(W['email']['bullets']) != 3:
        bad('email has %d bullets, want 3' % len(W['email']['bullets']))
    if len(W['disc']['posts']) != 2:
        bad('discussion has %d posts, want 2' % len(W['disc']['posts']))

    S = T['speaking']
    if len(S['repeat']) != 7:
        bad('Listen and Repeat has %d sentences, want 7' % len(S['repeat']))
    lens = [len(x.split()) for x in S['repeat']]
    if lens[-1] != max(lens):
        bad('Listen and Repeat must build to the longest last, got %r' % lens)
    if len(S['interview'][1]) != 4:
        bad('interview has %d questions, want 4' % len(S['interview'][1]))

    # every multiple-choice item everywhere
    items = []
    for M in T['reading']:
        items += list(M['daily']) + list(M['academic'])
    for M in T['listening']:
        items += list(M['warm']) + [x for _, i in M['convos'] for x in i] \
                 + list(M['announce'][1]) + list(M['talk'][1])
    letters = []
    for stem, opts, ai, why in items:
        if len(opts) != 4:
            bad('%r has %d options' % (stem[:34], len(opts)))
        if not 0 <= ai <= 3:
            bad('%r has answer index %r' % (stem[:34], ai))
        if len(why) < (30 if b2 else 20):
            bad('%r has no real explanation' % stem[:34])
        letters.append('ABCD'[ai])
    if len(set(letters)) < 3:
        bad('items use only %d distinct answer positions' % len(set(letters)))

    grand = tot + ltot + 12 + 11
    if grand != 97:
        bad('total is %d items, want 97 (reading %d, listening %d)' % (grand, tot, ltot))
    return out, grand


# The two Foundation tests have the same task names and the same order as the
# four practice tests and a smaller item count, so they get their own numbers
# rather than being forced through the 97-item table above.
#     modules a section, reading items a module, listening items a module,
#     passage word band, Build a Sentence tiles, total
FOUND = {'f':  dict(mods=1, read=20, listen=16, passage=(100, 185),
                    tiles=(4, 8), total=59),
         'f2': dict(mods=2, read=15, listen=12, passage=(140, 215),
                    tiles=(7, 8), total=77)}


def check_found(T, tag):
    """The Foundation tests, by the same method: every number is a gate."""
    P = FOUND[tag]
    out = []
    bad = lambda m: out.append('test%s: %s' % (tag, m))

    for sect in ('reading', 'listening'):
        if len(T[sect]) != P['mods']:
            bad('%s has %d module(s), want %d'
                % (sect, len(T[sect]), P['mods']))

    tot = 0
    for mi, M in enumerate(T['reading'], 1):
        runs = [len(x) for x in re.findall(r'-+', M['gap_text'])]
        if len(runs) != len(M['gap_ans']):
            bad('reading %d has %d gaps but %d answers'
                % (mi, len(runs), len(M['gap_ans'])))
        for i, (d, ans) in enumerate(zip(runs, M['gap_ans']), 1):
            if d != len(ans):
                bad('reading %d gap %d: %d dashes but %r is %d letters'
                    % (mi, i, d, ans, len(ans)))
        if len(M['docs']) != 2:
            bad('reading %d has %d documents, want 2' % (mi, len(M['docs'])))
        for f, want in (('daily', 5), ('academic', 5)):
            if len(M[f]) != want:
                bad('reading %d %s has %d, want %d' % (mi, f, len(M[f]), want))
        w = M['passage'][2]
        real = sum(len(x.split()) for x in M['passage'][1])
        if w != real:
            bad('reading %d passage declares %d words and has %d' % (mi, w, real))
        lo, hi = P['passage']
        if not lo <= w <= hi:
            bad('reading %d passage is %d words, want %d-%d' % (mi, w, lo, hi))
        c = len(M['gap_ans']) + len(M['daily']) + len(M['academic'])
        if c != P['read']:
            bad('reading %d has %d items, want %d' % (mi, c, P['read']))
        tot += c

    ltot = 0
    for mi, M in enumerate(T['listening'], 1):
        if len(M['warm']) != 3:
            bad('listening %d has %d responses, want 3' % (mi, len(M['warm'])))
        if len(M['poster']) != 3:
            bad('listening %d poster has %d lines, want 3' % (mi, len(M['poster'])))
        if len(M['board']) != 4:
            bad('listening %d board has %d lines, want 4' % (mi, len(M['board'])))
        c = len(M['warm']) + sum(len(i) for _, i in M['convos']) \
            + len(M['announce'][1]) + len(M['talk'][1])
        if c != P['listen']:
            bad('listening %d has %d items, want %d' % (mi, c, P['listen']))
        ltot += c

    W = T['writing']
    if len(W['build']) != 10:
        bad('Build a Sentence has %d items, want 10' % len(W['build']))
    qs = sum(1 for _, _, a in W['build'] if a.rstrip().endswith('?'))
    if qs < 6:
        bad('only %d of 10 Build a Sentence items are direct questions' % qs)
    lo, hi = P['tiles']
    for prompt, tiles, _ in W['build']:
        if not lo <= len(tiles) <= hi:
            bad('Build a Sentence %r has %d tiles, want %d-%d'
                % (prompt[:30], len(tiles), lo, hi))
    for k in ('to', 'date', 'subject', 'scenario', 'bullets'):
        if k not in W['email']:
            bad('email is missing %r' % k)
    if len(W['email']['bullets']) != 3:
        bad('email has %d bullets, want 3' % len(W['email']['bullets']))
    if len(W['disc']['posts']) != 2:
        bad('discussion has %d posts, want 2' % len(W['disc']['posts']))

    S = T['speaking']
    if len(S['repeat']) != 7:
        bad('Listen and Repeat has %d sentences, want 7' % len(S['repeat']))
    lens = [len(x.split()) for x in S['repeat']]
    if lens and lens[-1] != max(lens):
        bad('Listen and Repeat must build to the longest last, got %r' % lens)
    if len(S['interview'][1]) != 4:
        bad('interview has %d questions, want 4' % len(S['interview'][1]))

    items = []
    for M in T['reading']:
        items += list(M['daily']) + list(M['academic'])
    for M in T['listening']:
        items += list(M['warm']) + [x for _, i in M['convos'] for x in i] \
                 + list(M['announce'][1]) + list(M['talk'][1])
    letters = []
    for stem, opts, ai, why in items:
        if len(opts) != 4:
            bad('%r has %d options' % (stem[:34], len(opts)))
        if not 0 <= ai <= 3:
            bad('%r has answer index %r' % (stem[:34], ai))
        if len(why) < 20:
            bad('%r has no real explanation' % stem[:34])
        letters.append('ABCD'[ai])
    if len(set(letters)) < 3:
        bad('items use only %d distinct answer positions' % len(set(letters)))

    grand = tot + ltot + 12 + 11
    if grand != P['total']:
        bad('total is %d items, want %d (reading %d, listening %d)'
            % (grand, P['total'], tot, ltot))
    return out, grand


def main(nums):
    problems = []
    for n in nums:
        if isinstance(n, str):
            T = importlib.import_module('content.test%s' % n).TEST
            p, grand = check_found(T, n)
            problems += p
            if not p:
                print('test%s: %d items, all checks pass' % (n, grand))
            continue
        T = importlib.import_module('content.test%d' % n).TEST
        p, grand = check(T, b2=(n >= 3))
        problems += p
        if not p:
            print('test%d: %d items, all checks pass' % (n, grand))
    if problems:
        print('\n'.join(problems))
        print('\n%d problem(s)' % len(problems))
        return 1
    return 0


if __name__ == '__main__':
    _a = sys.argv[1:] or ['1', '2']
    sys.exit(main([x if x.lower().startswith('f') else int(x) for x in _a]))
