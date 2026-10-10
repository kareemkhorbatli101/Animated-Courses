"""Writes a question file and prints its diagnostics in the same call.

The slot number, the question type and the difficulty are all filled in from
data/spec.yaml rather than typed, so a set cannot drift from the plan by
mistyping. Author order is slot order.

Usage from a build script:

    import qemit
    qemit.emit('HIS', 1, [
        dict(id='HIS-S01-L1',
             ar=dict(khulasa='...', maana='...', ahammiyya='...', sila='...'),
             qs=[dict(stem='...', opts=['..', '..', '..', '..'], key='B',
                      moves={'A': 'overreach', 'C': 'imported', 'D': 'underreach'},
                      why='...', trap='...'), ...]),
    ])
"""
import collections
import os
import re
import sys

import yaml

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPEC = yaml.safe_load(open(os.path.join(ROOT, 'data', 'spec.yaml')))
SLOTS = SPEC['slots']
R = SPEC['question_rules']
AR = SPEC['arabic']
LABELS = R['labels']
EXTRA = ['claim', 'carrier', 'target', 'sibling', 'sibling_gloss', 'goal', 'notes']


def _block(s):
    return re.sub(r'\s+', ' ', str(s)).strip()


def emit(field, level, sets, path=None):
    dmap = SPEC['difficulty_map'][level]
    out = {'field': field, 'level': level, 'sets': []}
    for st in sets:
        qlist = []
        for i, q in enumerate(st['qs'], 1):
            typ = SLOTS[i]['type']
            if q.get('t') and q['t'] != typ:
                print('TYPE  %s slot %d: author said %r, plan says %r'
                      % (st['id'], i, q['t'], typ))
            diff = next(k for k in ('easy', 'medium', 'hard') if i in dmap[k])
            row = collections.OrderedDict()
            row['slot'] = i
            row['type'] = typ
            row['difficulty'] = diff
            row['stem'] = _block(q['stem'])
            for k in EXTRA:
                if q.get(k) is not None:
                    row[k] = [_block(x) for x in q[k]] if isinstance(q[k], list) else _block(q[k])
            row['options'] = [_block(x) for x in q['opts']]
            row['key'] = q['key']
            row['moves'] = {k: q['moves'][k] for k in sorted(q['moves'])}
            row['why'] = _block(q['why'])
            row['trap'] = _block(q['trap'])
            qlist.append(row)
        s = collections.OrderedDict()
        s['id'] = st['id']
        s['summary_ar'] = collections.OrderedDict(
            (p, _block(st['ar'][p])) for p in AR['parts'])
        s['questions'] = qlist
        out['sets'].append(s)

    path = path or os.path.join(ROOT, 'data', 'questions', '%s-L%d.yaml' % (field, level))
    os.makedirs(os.path.dirname(path), exist_ok=True)
    yaml.add_representer(
        collections.OrderedDict,
        lambda d, x: d.represent_mapping('tag:yaml.org,2002:map', x.items()))
    with open(path, 'w') as fh:
        fh.write('# %s level %d - ten SAT-style questions and an Arabic summary per passage.\n'
                 '# Written by tools/qemit.py; checked by tools/qchecks.py.\n'
                 % (SPEC['fields'][field], level))
        yaml.dump(out, fh, allow_unicode=True, width=96, sort_keys=False,
                  default_flow_style=False)
    diagnose(out, path)
    return path


def diagnose(out, path):
    rows, keys = [], []
    for s in out['sets']:
        for q in s['questions']:
            o = [len(x) for x in q['options']]
            ratio = max(o) / min(o) if min(o) else 99
            stem = len(q['stem'].split())
            rows.append((q['slot'], s['id'], stem, ratio, q['key']))
            keys.append(q['key'])
            bad = []
            if ratio > R['option_ratio_max']:
                bad.append('ratio %.2f' % ratio)
            if not R['stem_words_min'] <= stem <= R['stem_words_max']:
                bad.append('stem %dw' % stem)
            if not q['stem'].rstrip().endswith('?'):
                bad.append('no ?')
            w = len(q['why'].split())
            if not R['why_words'][0] <= w <= R['why_words'][1]:
                bad.append('why %dw' % w)
            t = len(q['trap'].split())
            if not R['trap_words'][0] <= t <= R['trap_words'][1]:
                bad.append('trap %dw' % t)
            if not re.search(r'\b[A-D]\b', q['trap']):
                bad.append('trap names no letter')
            if sorted(q['moves']) != sorted(L for L in LABELS if L != q['key']):
                bad.append('moves/key mismatch')
            if len(set(q['moves'].values())) != len(q['moves']):
                bad.append('repeated move')
            ends = {x.rstrip()[-1] == '.' for x in q['options']}
            if len(ends) != 1:
                bad.append('mixed end punctuation')
            if bad:
                print('FIX   %s Q%02d: %s' % (s['id'], q['slot'], '; '.join(bad)))
        a = s.get('summary_ar') or {}
        n = sum(len(str(a.get(p, '')).split()) for p in AR['parts'])
        if not AR['words_min'] <= n <= AR['words_max']:
            print('FIX   %s arabic %d words, want %d to %d'
                  % (s['id'], n, AR['words_min'], AR['words_max']))
        if len(str(a.get('sila', '')).split()) < AR['sila_words_min']:
            print('FIX   %s arabic sila too short' % s['id'])
        for need, what in ((AR['field_names'][out['field']], 'field'),
                           (AR['move_names'][SPEC['moves'][out['level']]], 'move'),
                           (AR['test_name'], 'test')):
            if need not in ' '.join(str(a.get(p, '')) for p in AR['parts']):
                print('FIX   %s arabic does not name the %s (%s)' % (s['id'], what, need))
    c = collections.Counter(keys)
    print('wrote %s  %d sets, %d questions' % (path, len(out['sets']), len(rows)))
    print('  keys %s  stems %d-%dw  worst ratio %.2f'
          % (' '.join('%s:%d' % (L, c[L]) for L in LABELS),
             min(r[2] for r in rows), max(r[2] for r in rows),
             max(r[3] for r in rows)))
