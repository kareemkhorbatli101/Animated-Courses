#!/usr/bin/env python3
"""Writes a chapter file and prints its diagnostics in the same call.

The global number, the id, the element, the level, the difficulty, the stem and
the planned key letter are all filled in from data/spec.yaml rather than typed,
so a part cannot drift from the plan by mistyping. Author order is position
order, and position is what fixes level and difficulty.

Usage from an authoring module:

    import xemit
    xemit.emit(1, ar=dict(qaida='...', kayf='...', fakh='...', sila='...'), parts=[
        dict(domain='HIS', note_ar='...', xs=[
            dict(strand='HIS-S02',
                 carrier='The delegates who signed the petition ___ from nine colonies.',
                 rule='agr_plural', rule_span='came',
                 opts=['comes', 'came', 'has come', 'is coming'], key='B',
                 faults={'A': ('wrong_number', 'comes'),
                         'C': ('wrong_number', 'has come'),
                         'D': ('wrong_aspect', 'is coming')},
                 ctx=dict(number='plur'),
                 why='...', trap='...'),
            ...
        ]),
        ...
    ])
"""
import collections
import os
import re
import sys

import yaml

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import wlex                                                             # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPEC = yaml.safe_load(open(os.path.join(ROOT, 'data', 'spec.yaml')))
CH = SPEC['chapters']
DOM = SPEC['domain_order']
R = SPEC['exercise_rules']
LABELS = R['labels']
BLANK = R['blank']
AR = SPEC['arabic']
KEY_BASE = SPEC['key_base']
CARRIER_CHAPTERS = set(range(1, 14))


def partno(chapter, domain):
    """The part's number in 1..75, straight through the book."""
    return (chapter - 1) * 5 + DOM.index(domain) + 1


def keyplan(i):
    """The planned ten key letters for part i, counting from 1."""
    r = (i - 1) % 4
    return [LABELS[(LABELS.index(L) + r) % 4] for L in KEY_BASE]


def stem_for(chapter, x):
    if chapter <= 12:
        return SPEC['stems']['conventions']
    if chapter == 13:
        return SPEC['stems']['transition']
    if chapter == 14:
        return SPEC['stems']['synthesis'].replace('{goal}', x['goal_text'])
    return SPEC['quant_stems'][x.get('stem_form', 0)]


def _b(s):
    return re.sub(r'\s+', ' ', str(s)).strip()


def tokens(s):
    return _b(s).split(' ')


def token_run_in(span, text):
    """True when span's whitespace-separated tokens appear as a contiguous run.

    Whole-token matching rather than substring matching, because the spans this
    book quotes differ from each other by an apostrophe as often as by a word:
    "authors" is a substring of "authors'" but not a token of it, and a substring
    test would call the plural-for-possessive fault a fault of the key as well.
    """
    a, b = tokens(span), tokens(text)
    if not a:
        return False
    n = len(a)
    for i in range(len(b) - n + 1):
        if b[i:i + n - 1] != a[:n - 1]:
            continue
        last = b[i + n - 1]
        # A quoted span may stop where the option happens to put a comma. The
        # punctuation is not part of what the span claims, so the final token
        # matches with or without it. Only the LAST token is treated this way,
        # which keeps the punctuation spans of the boundaries chapters exact.
        if last == a[-1] or last.rstrip(',;:.') == a[-1]:
            return True
    return False


# Auxiliaries and the infinitive marker. Two options differing only by these are
# two inflections of one verb -- "vested" and "had vested" -- which is what a tense
# item is made of and is not the tell the containment rule exists to catch.
AUX_ONLY = {'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being', 'have', 'has',
            'had', 'do', 'does', 'did', 'will', 'would', 'shall', 'should', 'can',
            'could', 'may', 'might', 'must', 'to'}
# Junction material: the marks and connectives that a boundaries item is made of.
# Its four options differ by exactly this and nothing else -- ", the" against
# "; the" against "because the" against "the" -- so the bare run-on option is
# inside every other one, and the containment rule would reject every item in
# four chapters. A pair differing only by a mark or a connective is a punctuation
# pair, not one option with words added, which is the tell the rule exists for.
JUNCTION = {'and', 'but', 'or', 'nor', 'for', 'so', 'yet', 'although', 'though',
            'because', 'since', 'while', 'whereas', 'if', 'unless', 'after',
            'before', 'when', 'whenever', 'until', 'as', 'once', 'where', 'then',
            'however', 'therefore', 'moreover', 'thus', 'nevertheless',
            'which', 'who', 'whom', 'whose', 'that', 'why', 'how', 'what'}


def _neutral(t):
    return (t in AUX_ONLY or t in JUNCTION
            or not any(c.isalnum() for c in t))


def token_contains(a, b):
    """True when a's tokens are a strict contiguous run of b's tokens.

    Substring containment is the wrong test for this book: "form" is a substring
    of "forms" and of "is forming", and three quarters of the conventions
    chapters offer exactly such sets. Whole-token containment still catches the
    real tell -- one option being another with ordinary words added -- but exempts
    a pair that differs only by auxiliaries, which is an inflection pair.
    """
    ta, tb = tokens(a), tokens(b)
    if not ta or len(ta) >= len(tb):
        return False
    low = [t.lower().strip(',;:.') for t in tb]
    la = [t.lower().strip(',;:.') for t in ta]
    for i in range(len(low) - len(la) + 1):
        if low[i:i + len(la)] == la:
            extra = low[:i] + low[i + len(la):]
            if all(_neutral(t) for t in extra if t):
                continue
            return True
    return False


def option_shape(opts):
    """The length complaint for an option set, or None."""
    lens = [len(o) for o in opts]
    if not lens or not min(lens):
        return 'empty option'
    if min(lens) >= R['option_short_chars']:
        r = max(lens) / min(lens)
        if r > R['option_ratio_max']:
            return 'length ratio %.2f' % r
    elif max(lens) - min(lens) > R['option_spread_max']:
        return 'length spread %d characters' % (max(lens) - min(lens))
    return None


def emit(chapter, ar, parts, path=None):
    c = CH[chapter]
    out = collections.OrderedDict()
    out['chapter'] = chapter
    out['element'] = c['element']
    out['title'] = c['title']
    out['home'] = c['home']
    out['summary_ar'] = collections.OrderedDict((p, _b(ar[p])) for p in AR['chapter_parts'])
    out['parts'] = []
    msgs = []

    for part in parts:
        d = part['domain']
        pn = partno(chapter, d)
        plan = keyplan(pn)
        rows = []
        for pos, x in enumerate(part['xs'], 1):
            lvl = SPEC['level_by_pos'][pos]
            row = collections.OrderedDict()
            row['n'] = (chapter - 1) * 50 + DOM.index(d) * 10 + pos
            row['id'] = 'C%02d-%s-E%02d' % (chapter, d, pos)
            row['chapter'] = chapter
            row['element'] = c['element']
            row['domain'] = d
            row['pos'] = pos
            row['level'] = lvl
            row['difficulty'] = SPEC['diff_by_pos'][pos]
            row['strand'] = x['strand']
            if chapter in CARRIER_CHAPTERS:
                row['carrier'] = _b(x['carrier'])
            elif chapter == 14:
                row['notes'] = [_b(t) for t in x['notes']]
                row['goal'] = x['goal_text']
            else:
                row['table'] = collections.OrderedDict(
                    title=_b(x['table']['title']),
                    cols=[_b(t) for t in x['table']['cols']],
                    rows=[[_b(t) for t in r] for r in x['table']['rows']])
                row['claim'] = _b(x['claim'])
            row['rule'] = x['rule']
            row['rule_span'] = _b(x['rule_span'])
            row['stem'] = _b(stem_for(chapter, x))
            row['options'] = [_b(o) for o in x['opts']]
            row['key'] = x['key']
            fl = collections.OrderedDict()
            for L in sorted(x['faults']):
                v = x['faults'][L]
                mv, sp = (v['move'], v['span']) if isinstance(v, dict) else (v[0], v[1])
                fl[L] = collections.OrderedDict(move=mv, span=_b(sp))
            row['faults'] = fl
            row['ctx'] = collections.OrderedDict(sorted((x.get('ctx') or {}).items()))
            row['why'] = _b(x['why'])
            row['trap'] = _b(x['trap'])
            rows.append(row)
            msgs += _diagnose(row, c, chapter)

        got = [r['key'] for r in rows]
        if got != plan:
            msgs.append('KEYS  part %d (C%02d %s): planned %s, got %s'
                        % (pn, chapter, d, ''.join(plan), ''.join(got)))
        if len(rows) != 10:
            msgs.append('FIX   C%02d %s holds %d exercises, wants 10' % (chapter, d, len(rows)))

        p = collections.OrderedDict()
        p['domain'] = d
        p['partno'] = pn
        p['note_ar'] = _b(part['note_ar'])
        p['exercises'] = rows
        out['parts'].append(p)

    doms = [p['domain'] for p in out['parts']]
    if doms != DOM:
        msgs.append('FIX   C%02d parts are %s, want %s' % (chapter, doms, DOM))

    nar = sum(len(str(out['summary_ar'][k]).split()) for k in AR['chapter_parts'])
    lo, hi = AR['chapter_words']
    if not lo <= nar <= hi:
        msgs.append('FIX   C%02d arabic chapter page %d words, want %d to %d'
                    % (chapter, nar, lo, hi))
    if len(str(out['summary_ar'].get('sila', '')).split()) < AR['chapter_sila_min']:
        msgs.append('FIX   C%02d arabic sila too short' % chapter)
    joined = ' '.join(str(v) for v in out['summary_ar'].values())
    for need, what in ((AR['element_names'][c['element']], 'element'),
                       (AR['test_name'], 'test')):
        if need not in joined:
            msgs.append('FIX   C%02d arabic chapter page does not name the %s (%s)'
                        % (chapter, what, need))
    for p in out['parts']:
        n = len(p['note_ar'].split())
        lo, hi = AR['note_words']
        if not lo <= n <= hi:
            msgs.append('FIX   C%02d %s arabic note %d words, want %d to %d'
                        % (chapter, p['domain'], n, lo, hi))
        if AR['domain_names'][p['domain']] not in p['note_ar']:
            msgs.append('FIX   C%02d %s arabic note does not name its domain'
                        % (chapter, p['domain']))

    path = path or os.path.join(ROOT, 'data', 'exercises', 'C%02d.yaml' % chapter)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    yaml.add_representer(
        collections.OrderedDict,
        lambda dd, xx: dd.represent_mapping('tag:yaml.org,2002:map', xx.items()))
    with open(path, 'w') as fh:
        fh.write('# Chapter %d - %s. Fifty exercises, five domains, ten each.\n'
                 '# Written by tools/xemit.py; checked by tools/xchecks.py.\n'
                 % (chapter, c['title']))
        yaml.dump(out, fh, allow_unicode=True, width=96, sort_keys=False,
                  default_flow_style=False)

    for m in msgs:
        print(m)
    nx = sum(len(p['exercises']) for p in out['parts'])
    keys = collections.Counter(r['key'] for p in out['parts'] for r in p['exercises'])
    rules = collections.Counter(r['rule'] for p in out['parts'] for r in p['exercises'])
    moves = collections.Counter(f['move'] for p in out['parts'] for r in p['exercises']
                                for f in r['faults'].values())
    print('wrote %s  %d parts, %d exercises, %d problems'
          % (path, len(out['parts']), nx, len(msgs)))
    print('  keys %s' % ' '.join('%s:%d' % (L, keys[L]) for L in LABELS))
    print('  rules used %d/%d  moves used %d/%d'
          % (len(rules), len(c['rules']), len(moves), len(c['moves'])))
    unused_r = [r for r in c['rules'] if r not in rules]
    unused_m = [m for m in c['moves'] if m not in moves]
    if unused_r:
        print('  RULES NEVER USED: %s' % ' '.join(unused_r))
    if unused_m:
        print('  MOVES NEVER USED: %s' % ' '.join(unused_m))
    return path


def _diagnose(row, c, chapter):
    """Everything X1 to X8 can see from one exercise, reported at author time."""
    m = []
    i = row['id']
    opts = row['options']
    key = row['key']
    keyopt = opts[LABELS.index(key)] if key in LABELS else ''

    if key not in LABELS:
        m.append('FIX   %s key %r is not a label' % (i, key))
        return m
    if row['rule'] not in c['rules']:
        m.append('FIX   %s rule %r not in chapter %d closed set' % (i, row['rule'], chapter))
    if not token_run_in(row['rule_span'], keyopt):
        m.append('FIX   %s rule_span %r is not a token run of the key %r'
                 % (i, row['rule_span'], keyopt))

    want = [L for L in LABELS if L != key]
    if sorted(row['faults']) != want:
        m.append('FIX   %s faults are %s, want %s'
                 % (i, ''.join(sorted(row['faults'])), ''.join(want)))
    movs = [f['move'] for f in row['faults'].values()]
    for mv in movs:
        if mv not in c['moves']:
            m.append('FIX   %s move %r not in chapter %d closed set' % (i, mv, chapter))
    if len(movs) == 3 and len(set(movs)) < 2:
        m.append('FIX   %s all three distractors use the same move' % i)

    ctx = dict(row['ctx'] or {})
    ctx['rule'] = row['rule']
    ctx['key_option'] = keyopt
    for L, f in row['faults'].items():
        o = opts[LABELS.index(L)]
        if not token_run_in(f['span'], o):
            m.append('FIX   %s %s span %r is not a token run of %r' % (i, L, f['span'], o))
        # The span must be absent from the key only where the span is the ONLY
        # evidence. Where the move carries a machine predicate, that predicate is
        # the stronger test and runs below: an "abolished" faulted as the wrong
        # tense is a token of the key "had abolished" and yet the key is in the
        # right tense, so a token test would reject a sound item. See PLAN.md
        # section 7 and section 14 entry 6.
        if f['move'] not in wlex.PREDICATES and token_run_in(f['span'], keyopt):
            m.append('FIX   %s %s span %r also appears in the key %r, and the move '
                     'carries no predicate to tell them apart'
                     % (i, L, f['span'], keyopt))
        v = wlex.predict(f['move'], f['span'], ctx)
        if v is False:
            m.append('FIX   %s %s predicate for %s does not fire on %r'
                     % (i, L, f['move'], f['span']))
        if f['move'] in wlex.PREDICATES:
            kv = wlex.predict(f['move'], row['rule_span'], ctx)
            if kv is True:
                m.append('FIX   %s %s predicate for %s also fires on the key span %r'
                         % (i, L, f['move'], row['rule_span']))

    if len(set(opts)) != 4:
        m.append('FIX   %s options are not four distinct strings' % i)
    for a in range(4):
        for b in range(4):
            if a != b and token_contains(opts[a], opts[b]):
                m.append('FIX   %s option %s is contained in option %s'
                         % (i, LABELS[a], LABELS[b]))
    sh = option_shape(opts)
    if sh:
        m.append('FIX   %s %s' % (i, sh))
    ends = {o.rstrip()[-1] == '.' for o in opts if o.rstrip()}
    if len(ends) != 1:
        m.append('FIX   %s mixed end punctuation across the options' % i)
    for o in opts:
        if o.strip().lower().rstrip('.') in R['banned_option_forms']:
            m.append('FIX   %s banned option form %r' % (i, o))

    if chapter in CARRIER_CHAPTERS:
        cr = row['carrier']
        if cr.count(BLANK) != 1:
            m.append('FIX   %s carrier holds %d blanks, wants exactly one'
                     % (i, cr.count(BLANK)))
        n = len(wlex.words(cr))
        lo, hi = SPEC['carrier_words'][row['level']]
        if not lo <= n <= hi:
            m.append('FIX   %s carrier %d words, level %d band is %d to %d'
                     % (i, n, row['level'], lo, hi))
    elif chapter == 14:
        k = len(row['notes'])
        if not R['notes_min'] <= k <= R['notes_max']:
            m.append('FIX   %s %d notes, want %d to %d'
                     % (i, k, R['notes_min'], R['notes_max']))
    else:
        rr = len(row['table']['rows'])
        if not R['table_rows_min'] <= rr <= R['table_rows_max']:
            m.append('FIX   %s table has %d rows, want %d to %d'
                     % (i, rr, R['table_rows_min'], R['table_rows_max']))
        w = len(row['table']['cols'])
        if any(len(r) != w for r in row['table']['rows']):
            m.append('FIX   %s table rows do not all match the %d columns' % (i, w))

    w = len(row['why'].split())
    if not R['why_words'][0] <= w <= R['why_words'][1]:
        m.append('FIX   %s why %d words, want %d to %d'
                 % (i, w, R['why_words'][0], R['why_words'][1]))
    t = len(row['trap'].split())
    if not R['trap_words'][0] <= t <= R['trap_words'][1]:
        m.append('FIX   %s trap %d words, want %d to %d'
                 % (i, t, R['trap_words'][0], R['trap_words'][1]))
    if not re.search(r'\b[A-D]\b', row['trap']):
        m.append('FIX   %s trap names no option letter' % i)
    return m
