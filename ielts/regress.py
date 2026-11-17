# -*- coding: utf-8 -*-
"""The invariance gate: nothing changes that a phase did not declare.

freeze.py records what the series is. This re-derives it and diffs. Every
difference must be named in intent/<phase>.json, which is the permission
slip for that phase and is committed with the content change it allows.

    python3 regress.py 2         # diff against the baseline, phase 2's intent
    python3 regress.py 2 --show  # list every difference, declared or not

An intent file:

    {"note": "A2: 120 answers shortened; A3: 28 explanations rewritten",
     "items": ["u61 c1 R0 i4", "..."],          exact item keys that may change
     "item_fields": ["ans", "why", "wrongs"],   which fields of them may change
     "texts": ["u61 c1 R0"],                    texts whose words may change
     "new_items": true,                         items may be added
     "new_texts": ["paper1a"],                  prefixes that may appear
     "heads": false,                            the head-word set may move
     "measure": {"7": {"sent": [16.0, 19.0]}},  numbers with a new range
     "figures": {"7": 1}}                       figures that may be added
"""
import io
import json
import os
import sys

import freeze

HERE = os.path.dirname(os.path.abspath(__file__))
TOL = dict(k1=0.3, beyond=0.3, sent=0.3, nominal=0.3, longest=0)


def load_json(p):
    return json.loads(io.open(p, encoding='utf-8').read())


def main(argv):
    phase = argv[1] if len(argv) > 1 else '0'
    show = '--show' in argv
    base = load_json(os.path.join(HERE, 'baseline', 'latest.json'))
    ip = os.path.join(HERE, 'intent', '%s.json' % phase)
    intent = load_json(ip) if os.path.exists(ip) else {}
    ok_items = set(intent.get('items', []))
    ok_fields = set(intent.get('item_fields', ['ans', 'why', 'wrongs']))
    ok_texts = set(intent.get('texts', []))
    new_items = bool(intent.get('new_items'))
    new_texts = tuple(intent.get('new_texts', []))
    ok_heads = bool(intent.get('heads'))
    ok_meas = intent.get('measure', {})
    ok_figs = intent.get('figures', {})

    now = freeze.snapshot()
    bad, declared = [], 0
    for vol, b0 in sorted(base['books'].items()):
        b1 = now['books'].get(vol)
        if b1 is None:
            bad.append('book %s has vanished' % vol)
            continue
        for k, v0 in b0['items'].items():
            v1 = b1['items'].get(k)
            if v1 is None:
                bad.append('%s: item %s removed' % (vol, k))
                continue
            for f in ('stem', 'ans', 'opts', 'why', 'wrongs'):
                if v0[f] != v1[f]:
                    if (k in ok_items or '*' in ok_items) and f in ok_fields:
                        declared += 1
                    else:
                        bad.append('%s: %s.%s %r -> %r (undeclared)'
                                   % (vol, k, f, v0[f], v1[f]))
        for k in b1['items']:
            if k not in b0['items'] and not new_items:
                bad.append('%s: item %s added (undeclared)' % (vol, k))
        for k, t0 in b0['texts'].items():
            t1 = b1['texts'].get(k)
            if t1 is None:
                bad.append('%s: text %s removed' % (vol, k))
            elif t0['sha'] != t1['sha']:
                if k in ok_texts:
                    declared += 1
                else:
                    bad.append('%s: text %s changed, %d -> %d words '
                               '(undeclared)' % (vol, k, t0['w'], t1['w']))
        for k in b1['texts']:
            if k not in b0['texts'] and not k.startswith(new_texts or ('\0',)):
                bad.append('%s: text %s added (undeclared)' % (vol, k))
        if b0['heads'] != b1['heads'] and not ok_heads:
            lost = set(b0['heads']) - set(b1['heads'])
            got = set(b1['heads']) - set(b0['heads'])
            bad.append('%s: head words moved (-%d +%d, undeclared)'
                       % (vol, len(lost), len(got)))
        for f, v0 in b0['measure'].items():
            v1 = b1['measure'][f]
            rng = ok_meas.get(vol, {}).get(f)
            if rng:
                if not (rng[0] <= v1 <= rng[1]):
                    bad.append('%s: %s %.2f outside the declared %s'
                               % (vol, f, v1, rng))
                else:
                    declared += 1
            elif abs(v1 - v0) > TOL.get(f, 0):
                bad.append('%s: %s drifted %.2f -> %.2f (undeclared)'
                           % (vol, f, v0, v1))
        df = b1['figures'] - b0['figures']
        if df and df != ok_figs.get(vol):
            bad.append('%s: figures %d -> %d (undeclared)'
                       % (vol, b0['figures'], b1['figures']))
        elif df:
            declared += 1
    print('REGRESSION GATE - phase %s%s' % (phase, '' if os.path.exists(ip)
                                            else ' (no intent file)'))
    print('  %d declared change(s) accepted' % declared)
    if bad:
        print('  %d UNDECLARED difference(s):' % len(bad))
        for b in bad[:40]:
            print('    ' + b)
        if len(bad) > 40:
            print('    ... and %d more' % (len(bad) - 40))
        return 1
    print('  no undeclared difference: PASS')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
