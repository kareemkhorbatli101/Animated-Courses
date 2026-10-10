#!/usr/bin/env python3
"""The 6,000 per-exercise check passes and the 120 book-level passes.

Eight passes per exercise (X1 identity .. X8 rationale and mechanics), 750
exercises. One hundred and twenty book-level passes in twelve families, A to L.
See PLAN.md sections 8 and 10.

    python3 tools/xchecks.py              the whole book
    python3 tools/xchecks.py --partial    only the chapters written so far
"""
import collections
import glob
import json
import os
import re
import sys
import unicodedata

import yaml

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import wlex                                                             # noqa: E402
import xemit                                                            # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERIES = os.path.dirname(ROOT)
READER = os.path.join(SERIES, 'sat-reader')
SPEC = yaml.safe_load(open(os.path.join(ROOT, 'data', 'spec.yaml')))
CH = SPEC['chapters']
DOM = SPEC['domain_order']
R = SPEC['exercise_rules']
LABELS = R['labels']
BLANK = R['blank']
AR = SPEC['arabic']
RL = SPEC['rule_labels']
CARRIER_CHAPTERS = set(range(1, 14))

BRITISH = set("""behaviour behaviours colour colours coloured honour honours honoured
labour labours laboured neighbour neighbours favour favours favoured favourite
centre centres centred theatre theatres metre metres litre litres fibre fibres
organise organised organising organisation organisations recognise recognised
recognising emphasise emphasised emphasising analyse analysed analysing
reanalyse reanalysed criticise criticised criticising summarise summarised
realise realised realising specialise specialised standardise standardised
defence offence licence practise practised travelled travelling cancelled
cancelling modelling labelled labelling signalling programme programmes
catalogue catalogues dialogue sceptical sceptic enquire enquiry
aluminium sulphur sulphate sulphuric judgement acknowledgement""".split())
SECOND_PERSON = re.compile(r'\b(you|your|yours|yourself|yourselves)\b', re.I)
CONTRACTION = re.compile(r"\b\w+'(t|re|ve|ll|m)\b|\b(it|that|there|who|what|let|he|she|here)'s\b",
                         re.I)


# ---------------------------------------------------------------------------
# loading
# ---------------------------------------------------------------------------
def load():
    chapters = []
    for p in sorted(glob.glob(os.path.join(ROOT, 'data', 'exercises', 'C*.yaml'))):
        d = yaml.safe_load(open(p))
        d['_file'] = os.path.basename(p)
        chapters.append(d)
    chapters.sort(key=lambda d: d['chapter'])
    xs = []
    for d in chapters:
        for part in d['parts']:
            for x in part['exercises']:
                x['_ch'] = d
                x['_part'] = part
                xs.append(x)
    xs.sort(key=lambda x: x['n'])
    return chapters, xs


def ctx_of(x):
    c = dict(x.get('ctx') or {})
    c['rule'] = x['rule']
    c['key_option'] = x['options'][LABELS.index(x['key'])]
    return c


def stim(x):
    """Everything the student reads before the stem, as one string."""
    if x['chapter'] in CARRIER_CHAPTERS:
        return x['carrier']
    if x['chapter'] == 14:
        return ' '.join(x['notes']) + ' ' + x['goal']
    t = x['table']
    return ' '.join([t['title']] + t['cols'] + [c for r in t['rows'] for c in r] + [x['claim']])


# ---------------------------------------------------------------------------
# the eight per-exercise passes
# ---------------------------------------------------------------------------
def x1_identity(x, seen):
    bad = []
    m = re.fullmatch(r'C(\d\d)-([A-Z]{3})-E(\d\d)', x['id'] or '')
    if not m:
        return False, 'id %r malformed' % x['id']
    c, d, p = int(m.group(1)), m.group(2), int(m.group(3))
    if (c, d, p) != (x['chapter'], x['domain'], x['pos']):
        bad.append('id disagrees with chapter/domain/pos')
    if x['id'] in seen:
        bad.append('id repeated')
    seen.add(x['id'])
    want = (x['chapter'] - 1) * 50 + DOM.index(x['domain']) * 10 + x['pos']
    if x['n'] != want:
        bad.append('n is %d, wants %d' % (x['n'], want))
    return not bad, '; '.join(bad)


def x2_placement(x):
    bad = []
    c = CH[x['chapter']]
    if x['element'] != c['element']:
        bad.append('element %r, chapter wants %r' % (x['element'], c['element']))
    if x['domain'] not in DOM:
        bad.append('domain %r unknown' % x['domain'])
    if not 1 <= x['pos'] <= 10:
        bad.append('pos %r out of range' % x['pos'])
    else:
        if x['level'] != SPEC['level_by_pos'][x['pos']]:
            bad.append('level %r, position %d wants %d'
                       % (x['level'], x['pos'], SPEC['level_by_pos'][x['pos']]))
        if x['difficulty'] != SPEC['diff_by_pos'][x['pos']]:
            bad.append('difficulty %r, position %d wants %r'
                       % (x['difficulty'], x['pos'], SPEC['diff_by_pos'][x['pos']]))
    return not bad, '; '.join(bad)


def x3_stimulus(x):
    bad = []
    ch = x['chapter']
    if not (x.get('strand') or '').startswith(x['domain'] + '-'):
        bad.append('strand %r is not of domain %s' % (x.get('strand'), x['domain']))
    if ch in CARRIER_CHAPTERS:
        cr = x.get('carrier') or ''
        n = cr.count(BLANK)
        if n != 1:
            bad.append('%d blanks, wants one' % n)
        w = len(wlex.words(cr))
        lo, hi = SPEC['carrier_words'][x['level']]
        if not lo <= w <= hi:
            bad.append('carrier %d words, level %d band %d-%d' % (w, x['level'], lo, hi))
    elif ch == 14:
        k = len(x.get('notes') or [])
        if not R['notes_min'] <= k <= R['notes_max']:
            bad.append('%d notes' % k)
        if not (x.get('goal') or '').strip():
            bad.append('no goal')
        if BLANK in ' '.join(x.get('notes') or []):
            bad.append('a blank in the notes')
    else:
        t = x.get('table') or {}
        rr = t.get('rows') or []
        if not R['table_rows_min'] <= len(rr) <= R['table_rows_max']:
            bad.append('%d table rows' % len(rr))
        if not t.get('cols'):
            bad.append('no columns')
        elif any(len(r) != len(t['cols']) for r in rr):
            bad.append('ragged table')
        if not (x.get('claim') or '').strip():
            bad.append('no claim')
    return not bad, '; '.join(bad)


def x4_rule(x):
    bad = []
    c = CH[x['chapter']]
    if x['rule'] not in c['rules']:
        bad.append('rule %r outside chapter %d closed set' % (x['rule'], x['chapter']))
    if x['rule'] not in RL:
        bad.append('rule %r has no entry in the rule index' % x['rule'])
    sp = (x.get('rule_span') or '').strip()
    if not sp:
        bad.append('no rule_span')
    else:
        keyopt = x['options'][LABELS.index(x['key'])] if x['key'] in LABELS else ''
        if not xemit.token_run_in(sp, keyopt):
            bad.append('rule_span %r is not a token run of the key %r' % (sp, keyopt))
    return not bad, '; '.join(bad)


def x5_key(x):
    bad = []
    if x['key'] not in LABELS:
        return False, 'key %r is not a label' % x['key']
    pn = xemit.partno(x['chapter'], x['domain'])
    want = xemit.keyplan(pn)[x['pos'] - 1]
    if x['key'] != want:
        bad.append('key %s, part %d position %d plans %s' % (x['key'], pn, x['pos'], want))
    keyopt = x['options'][LABELS.index(x['key'])]
    if not (keyopt or '').strip():
        bad.append('key option is empty')
    others = [o for i, o in enumerate(x['options']) if i != LABELS.index(x['key'])]
    if keyopt in others:
        bad.append('key option is repeated among the distractors')
    return not bad, '; '.join(bad)


def x6_distractors(x):
    bad = []
    c = CH[x['chapter']]
    f = x.get('faults') or {}
    want = [L for L in LABELS if L != x['key']]
    if sorted(f) != want:
        bad.append('faults on %s, wants %s' % (''.join(sorted(f)), ''.join(want)))
    movs = [v['move'] for v in f.values()]
    for mv in movs:
        if mv not in c['moves']:
            bad.append('move %r outside chapter %d closed set' % (mv, x['chapter']))
        if mv not in wlex.PREDICATES and mv not in wlex.NO_PREDICATE:
            bad.append('move %r is neither detected nor declared undetectable' % mv)
    if len(movs) == 3 and len(set(movs)) < 2:
        bad.append('all three distractors use one move')
    return not bad, '; '.join(bad)


def x7_uniqueness(x):
    bad = []
    if x['key'] not in LABELS:
        return False, 'no key'
    ctx = ctx_of(x)
    keyopt = ctx['key_option']
    spans = []
    for L, v in sorted((x.get('faults') or {}).items()):
        if L not in LABELS:
            bad.append('fault on %r' % L)
            continue
        o = x['options'][LABELS.index(L)]
        sp = v['span']
        spans.append(sp)
        if not xemit.token_run_in(sp, o):
            bad.append('%s span %r not in its own option' % (L, sp))
        if xemit.token_run_in(sp, keyopt):
            bad.append('%s span %r also in the key' % (L, sp))
        got = wlex.predict(v['move'], sp, ctx)
        if got is False:
            bad.append('%s predicate %s silent on %r' % (L, v['move'], sp))
        if v['move'] in wlex.PREDICATES:
            if wlex.predict(v['move'], x['rule_span'], ctx) is True:
                bad.append('%s predicate %s also fires on the key' % (L, v['move']))
            need = wlex.PREDICATES[v['move']][0]
            if need == 'number' and ctx.get('number') not in ('sing', 'plur'):
                bad.append('%s move %s needs ctx number' % (L, v['move']))
    if len(set(spans)) != len(spans):
        bad.append('two distractors quote the same span')
    if x['rule_span'] in spans:
        bad.append('the key span is also quoted as a fault')
    return not bad, '; '.join(bad)


def x8_mechanics(x):
    bad = []
    opts = x['options']
    if len(opts) != 4:
        return False, '%d options' % len(opts)
    if len(set(opts)) != 4:
        bad.append('options not distinct')
    for a in range(4):
        for b in range(4):
            if a != b and xemit.token_contains(opts[a], opts[b]):
                bad.append('%s inside %s' % (LABELS[a], LABELS[b]))
    sh = xemit.option_shape(opts)
    if sh:
        bad.append(sh)
    ends = {o.rstrip()[-1] == '.' for o in opts if o.rstrip()}
    if len(ends) != 1:
        bad.append('mixed end punctuation')
    for o in opts:
        if o.strip().lower().rstrip('.') in R['banned_option_forms']:
            bad.append('banned form %r' % o)
    want = xemit.stem_for(x['chapter'],
                          dict(goal_text=x.get('goal', ''),
                               stem_form=SPEC['quant_stems'].index(x['stem'])
                               if x['chapter'] == 15 and x['stem'] in SPEC['quant_stems'] else 0))
    if x['chapter'] == 15:
        if x['stem'] not in SPEC['quant_stems']:
            bad.append('stem is not one of the three quantitative forms')
    elif x['stem'] != re.sub(r'\s+', ' ', want).strip():
        bad.append('stem does not conform')
    w = len(x['why'].split())
    if not R['why_words'][0] <= w <= R['why_words'][1]:
        bad.append('why %dw' % w)
    t = len(x['trap'].split())
    if not R['trap_words'][0] <= t <= R['trap_words'][1]:
        bad.append('trap %dw' % t)
    if not re.search(r'\b[A-D]\b', x['trap']):
        bad.append('trap names no letter')
    say = RL.get(x['rule'], ['', ''])[1]
    if say and say.lower() not in x['why'].lower():
        bad.append('why does not say %r' % say)
    return not bad, '; '.join(bad)


PASSES = ['identity', 'placement', 'stimulus', 'rule', 'key', 'distractors',
          'uniqueness', 'mechanics']


def per_exercise(xs):
    seen = set()
    res = []
    for x in xs:
        r = [x1_identity(x, seen), x2_placement(x), x3_stimulus(x), x4_rule(x),
             x5_key(x), x6_distractors(x), x7_uniqueness(x), x8_mechanics(x)]
        res.append((x, r))
    return res


# ---------------------------------------------------------------------------
# the hundred and twenty book-level passes
# ---------------------------------------------------------------------------
def arnorm(t):
    return unicodedata.normalize('NFKC', t or '')


def script_share(t):
    letters = [c for c in arnorm(t) if c.isalpha()]
    if not letters:
        return 0.0
    ar = sum(1 for c in letters if '؀' <= c <= 'ۿ')
    return ar / len(letters)


def reader_sentences():
    out = set()
    for p in sorted(glob.glob(os.path.join(READER, 'data', 'passages', '*.yaml'))):
        try:
            d = yaml.safe_load(open(p))
        except Exception:
            continue
        for q in d.get('passages', []):
            for s in re.split(r'(?<=[.!?])\s+', re.sub(r'\s+', ' ', q.get('passage', ''))):
                s = s.strip().lower()
                if len(s.split()) >= 6:
                    out.add(s)
    return out


def book_checks(chapters, xs, xres):
    out = []

    def ck(label, ok, detail=''):
        out.append((label, bool(ok), detail))

    nx = len(xs)
    byc = collections.defaultdict(list)
    for x in xs:
        byc[x['chapter']].append(x)
    parts = [(d['chapter'], p) for d in chapters for p in d['parts']]
    keys = [x['key'] for x in xs]
    kc = collections.Counter(keys)

    # --- A. completeness --------------------------------------------------
    ck('A1 fifteen chapters present', len(chapters) == 15, '%d chapters' % len(chapters))
    ck('A2 seventy-five parts', len(parts) == 75, '%d parts' % len(parts))
    ck('A3 seven hundred and fifty exercises', nx == 750, '%d exercises' % nx)
    shortp = [(c, p['domain']) for c, p in parts if len(p['exercises']) != 10]
    ck('A4 ten exercises in every part', not shortp, '%d wrong-sized' % len(shortp))
    nf = len(glob.glob(os.path.join(ROOT, 'data', 'exercises', 'C*.yaml')))
    ck('A5 fifteen chapter files', nf == 15, '%d files' % nf)
    percf = collections.Counter(x['_ch']['_file'] for x in xs)
    ck('A6 fifty exercises in every file', percf and all(v == 50 for v in percf.values()),
       '%d files' % len(percf))
    ids = [x['id'] for x in xs]
    ck('A7 all exercise ids unique', len(set(ids)) == len(ids), '%d ids' % len(ids))
    ck('A8 numbering one to seven hundred and fifty contiguous',
       [x['n'] for x in xs] == list(range(1, nx + 1)))
    wrongd = [d['chapter'] for d in chapters if [p['domain'] for p in d['parts']] != DOM]
    ck('A9 every chapter holds all five domains in order', not wrongd,
       'chapters out of order: %s' % wrongd)
    els = [d['element'] for d in chapters]
    ck('A10 all fifteen elements present once',
       sorted(els) == sorted(CH[i]['element'] for i in CH), '%d elements' % len(set(els)))

    # --- B. the grid ------------------------------------------------------
    cell = collections.Counter((x['element'], x['domain']) for x in xs)
    ck('B1 every element and domain cell holds exactly ten',
       len(cell) == 75 and all(v == 10 for v in cell.values()), '%d cells' % len(cell))
    pd = collections.Counter(x['domain'] for x in xs)
    ck('B2 one hundred and fifty exercises per domain',
       all(pd[d] == 150 for d in DOM), dict(pd))
    pc = collections.Counter(x['chapter'] for x in xs)
    ck('B3 fifty exercises per chapter', all(v == 50 for v in pc.values()),
       '%d chapters' % len(pc))
    pp = collections.Counter(x['pos'] for x in xs)
    ck('B4 every position appears seventy-five times',
       all(pp[i] == 75 for i in range(1, 11)), dict(pp))
    pl = collections.Counter(x['level'] for x in xs)
    ck('B5 level totals one fifty, two twenty-five, two twenty-five, one fifty',
       [pl[i] for i in (1, 2, 3, 4)] == [150, 225, 225, 150], dict(pl))
    pdf = collections.Counter(x['difficulty'] for x in xs)
    ck('B6 difficulty totals two twenty-five, three hundred, two twenty-five',
       [pdf[k] for k in ('easy', 'medium', 'hard')] == [225, 300, 225], dict(pdf))
    ordr = {'easy': 0, 'medium': 1, 'hard': 2}
    nonmono = [(c, p['domain']) for c, p in parts
               if any(ordr[a['difficulty']] > ordr[b['difficulty']]
                      for a, b in zip(p['exercises'], p['exercises'][1:]))]
    ck('B7 difficulty never falls as position rises, in all seventy-five parts',
       not nonmono, '%d parts fall' % len(nonmono))
    nonmonl = [(c, p['domain']) for c, p in parts
               if any(a['level'] > b['level'] for a, b in zip(p['exercises'], p['exercises'][1:]))]
    ck('B8 level never falls as position rises', not nonmonl, '%d parts fall' % len(nonmonl))
    homes = collections.Counter(CH[i]['home'] for i in CH)
    ck('B9 three chapters make their home in each domain',
       all(homes[d] == 3 for d in DOM), dict(homes))
    ck('B10 every chapter declares one home domain from the five',
       all(d.get('home') in DOM for d in chapters))

    # --- C. keys ----------------------------------------------------------
    ck('C1 key totals one eighty-eight, one eighty-seven, one eighty-eight, one eighty-seven',
       [kc[L] for L in LABELS] == [188, 187, 188, 187], dict(kc))
    badc = []
    for c, g in byc.items():
        cc = collections.Counter(x['key'] for x in g)
        for L in LABELS:
            if g and not 0.22 <= cc[L] / len(g) <= 0.28:
                badc.append('C%02d:%s' % (c, L))
    ck('C2 every letter between twenty-two and twenty-eight per cent of each chapter',
       not badc, ' '.join(badc[:8]))
    badd = []
    for d in DOM:
        g = [x for x in xs if x['domain'] == d]
        cc = collections.Counter(x['key'] for x in g)
        for L in LABELS:
            if g and not 0.22 <= cc[L] / len(g) <= 0.28:
                badd.append('%s:%s' % (d, L))
    ck('C3 every letter between twenty-two and twenty-eight per cent of each domain',
       not badd, ' '.join(badd))
    offplan = []
    for c, p in parts:
        plan = xemit.keyplan(xemit.partno(c, p['domain']))
        got = [x['key'] for x in p['exercises']]
        if got != plan[:len(got)]:
            offplan.append('C%02d-%s' % (c, p['domain']))
    ck('C4 the planned key pattern holds in all seventy-five parts', not offplan,
       ' '.join(offplan[:8]))
    runs = [(c, p['domain']) for c, p in parts
            for i in range(len(p['exercises']) - 2)
            if p['exercises'][i]['key'] == p['exercises'][i + 1]['key'] == p['exercises'][i + 2]['key']]
    ck('C5 no run of three identical keys inside a part', not runs, '%d runs' % len(runs))
    posk = collections.defaultdict(collections.Counter)
    for x in xs:
        posk[x['pos']][x['key']] += 1
    worst = max((max(v.values()) / sum(v.values()), i) for i, v in posk.items()) if posk else (0, 0)
    ck('C6 no position holds one letter in more than forty per cent of its exercises',
       worst[0] <= 0.40, 'worst %.0f%% at position %d' % (100 * worst[0], worst[1]))
    ck('C7 every letter used in every chapter',
       all(set(x['key'] for x in g) == set(LABELS) for g in byc.values()))
    ck('C8 every key letter inside A to D', all(x['key'] in LABELS for x in xs))
    thin = [(c, p['domain']) for c, p in parts
            if len(set(x['key'] for x in p['exercises'])) < 3]
    ck('C9 at least three distinct key letters in every part', not thin, '%d thin' % len(thin))
    ck('C10 no letter outside twenty-four to twenty-six per cent of the book',
       all(0.24 <= kc[L] / nx <= 0.26 for L in LABELS) if nx else False,
       {L: round(100 * kc[L] / nx, 2) for L in LABELS} if nx else '')

    # --- D. rules ---------------------------------------------------------
    outside = [x['id'] for x in xs if x['rule'] not in CH[x['chapter']]['rules']]
    ck('D1 every rule inside its chapter closed set', not outside, '%d outside' % len(outside))
    unused = []
    for c, g in byc.items():
        used = set(x['rule'] for x in g)
        unused += ['C%02d:%s' % (c, r) for r in CH[c]['rules'] if r not in used]
    ck('D2 every declared rule used at least once in its chapter', not unused,
       ' '.join(unused[:10]))
    ck('D3 at least four distinct rules in every chapter',
       all(len(set(x['rule'] for x in g)) >= 4 for g in byc.values()),
       min((len(set(x['rule'] for x in g)) for g in byc.values()), default=0))
    missh = []
    for c, g in byc.items():
        home = CH[c]['home']
        used = set(x['rule'] for x in g if x['domain'] == home)
        missh += ['C%02d:%s' % (c, r) for r in CH[c]['hardest'] if r not in used]
    ck('D4 the home-domain part carries every one of its chapter hardest rules',
       not missh, ' '.join(missh[:10]))
    over = []
    for c, g in byc.items():
        rc = collections.Counter(x['rule'] for x in g)
        over += ['C%02d:%s' % (c, r) for r, v in rc.items() if g and v / len(g) > 0.40]
    ck('D5 no rule fills more than forty per cent of a chapter', not over, ' '.join(over[:8]))
    ck('D6 every rule has an entry in the rule index',
       all(x['rule'] in RL for x in xs))
    ck('D7 every exercise declares a rule span',
       all((x.get('rule_span') or '').strip() for x in xs))
    nosp = [x['id'] for x in xs
            if not xemit.token_run_in(x.get('rule_span') or '',
                                      x['options'][LABELS.index(x['key'])]
                                      if x['key'] in LABELS else '')]
    ck('D8 every rule span is a token run of its key', not nosp, '%d bad' % len(nosp))
    thinr = [(c, p['domain']) for c, p in parts
             if len(set(x['rule'] for x in p['exercises'])) < 2]
    ck('D9 at least two distinct rules in every part', not thinr, '%d thin' % len(thinr))
    allr = set(x['rule'] for x in xs)
    declared = set(r for i in CH for r in CH[i]['rules'])
    ck('D10 all eighty-one rules used somewhere in the book',
       allr == declared if len(chapters) == 15 else allr <= declared,
       '%d of %d used' % (len(allr), len(declared)))

    # --- E. moves ---------------------------------------------------------
    allf = [(x, L, v) for x in xs for L, v in (x.get('faults') or {}).items()]
    mo = [v['move'] for _, _, v in allf]
    bados = [x['id'] for x, _, v in allf if v['move'] not in CH[x['chapter']]['moves']]
    ck('E1 every move inside its chapter closed set', not bados, '%d outside' % len(bados))
    unusedm = []
    for c, g in byc.items():
        used = set(v['move'] for x in g for v in (x.get('faults') or {}).values())
        unusedm += ['C%02d:%s' % (c, m) for m in CH[c]['moves'] if m not in used]
    ck('E2 every declared move used at least once in its chapter', not unusedm,
       ' '.join(unusedm[:10]))
    thinm = [(c, p['domain']) for c, p in parts
             if len(set(v['move'] for x in p['exercises']
                        for v in (x.get('faults') or {}).values())) < 3]
    ck('E3 at least three distinct moves in every part', not thinm, '%d thin' % len(thinm))
    overm = []
    for c, g in byc.items():
        f = [v['move'] for x in g for v in (x.get('faults') or {}).values()]
        mc = collections.Counter(f)
        overm += ['C%02d:%s' % (c, m) for m, v in mc.items() if f and v / len(f) > 0.60]
    ck('E4 no move fills more than sixty per cent of a chapter', not overm, ' '.join(overm[:8]))
    onemove = [x['id'] for x in xs
               if len(set(v['move'] for v in (x.get('faults') or {}).values())) < 2]
    ck('E5 two distinct moves in every exercise', not onemove, '%d single-move' % len(onemove))
    declm = set(m for i in CH for m in CH[i]['moves'])
    usedm = set(mo)
    ck('E6 all forty-nine distinct moves used somewhere',
       usedm == declm if len(chapters) == 15 else usedm <= declm,
       '%d of %d used' % (len(usedm), len(declm)))
    wrongn = [x['id'] for x in xs if len(x.get('faults') or {}) != 3]
    ck('E7 exactly three faults in every exercise', not wrongn, '%d wrong' % len(wrongn))
    wrongl = [x['id'] for x in xs
              if sorted(x.get('faults') or {}) != [L for L in LABELS if L != x['key']]]
    ck('E8 the three faults sit on the three letters that are not the key',
       not wrongl, '%d wrong' % len(wrongl))
    unk = sorted(m for m in usedm if m not in wlex.PREDICATES and m not in wlex.NO_PREDICATE)
    ck('E9 every move is either detected or declared undetectable', not unk, ' '.join(unk))
    withp = sum(1 for m in mo if m in wlex.PREDICATES)
    ck('E10 at least half of all faults carry a machine predicate',
       mo and withp / len(mo) >= 0.50,
       '%d of %d, %.0f%%' % (withp, len(mo), 100 * withp / len(mo)) if mo else '')

    # --- F. uniqueness of correctness -------------------------------------
    inkey = [x['id'] for x, _, v in allf
             if xemit.token_run_in(v['span'], x['options'][LABELS.index(x['key'])])]
    ck('F1 no fault span appears anywhere inside its exercise key', not inkey,
       '%d spans in a key' % len(inkey))
    notown = [x['id'] for x, L, v in allf
              if not xemit.token_run_in(v['span'], x['options'][LABELS.index(L)])]
    ck('F2 every fault span is a token run of the option it faults', not notown,
       '%d bad' % len(notown))
    dupsp = [x['id'] for x in xs
             if len(set(v['span'] for v in (x.get('faults') or {}).values()))
             != len(x.get('faults') or {})]
    ck('F3 the three fault spans of an exercise are distinct', not dupsp,
       '%d repeat' % len(dupsp))
    silent = [(x['id'], v['move']) for x, _, v in allf
              if wlex.predict(v['move'], v['span'], ctx_of(x)) is False]
    ck('F4 every predicate that exists fires on the distractor it is given',
       not silent, '%d silent: %s' % (len(silent), silent[:4]))
    onkey = [(x['id'], v['move']) for x, _, v in allf
             if v['move'] in wlex.PREDICATES
             and wlex.predict(v['move'], x['rule_span'], ctx_of(x)) is True]
    ck('F5 no predicate fires on any of the seven hundred and fifty keys',
       not onkey, '%d fire on a key: %s' % (len(onkey), onkey[:4]))
    ck('F6 four distinct options in every exercise',
       all(len(set(x['options'])) == 4 for x in xs))
    contained = [x['id'] for x in xs
                 if any(a != b and xemit.token_contains(x['options'][a], x['options'][b])
                        for a in range(4) for b in range(4))]
    ck('F7 no option contained inside another', not contained, '%d contained' % len(contained))
    # Not "no option set twice in the book": the conventions chapters draw their
    # options from a small closed family of auxiliaries -- is/are/has been/was
    # being and its neighbours -- and the real test reuses them constantly. What
    # matters is that no part repeats itself and that no one set becomes the
    # book's habit. The carriers are what must all differ, and G1 proves that.
    inpart = [(c, p['domain']) for c, p in parts
              if len({tuple(sorted(x['options'])) for x in p['exercises']})
              != len(p['exercises'])]
    sig = collections.Counter(tuple(sorted(x['options'])) for x in xs)
    worstset = max(sig.values()) if sig else 0
    ck('F8 no part repeats an option set, and none is the habit of the book',
       not inpart and worstset <= 30,
       '%d parts repeat; commonest set used %d times' % (len(inpart), worstset))
    noctx = [(x['id'], v['move']) for x, _, v in allf
             if v['move'] in wlex.PREDICATES
             and wlex.PREDICATES[v['move']][0] == 'number'
             and (x.get('ctx') or {}).get('number') not in ('sing', 'plur')]
    ck('F9 every exercise supplies the context its predicates need', not noctx,
       '%d missing: %s' % (len(noctx), noctx[:4]))
    keyeq = [x['id'] for x in xs
             if x['rule_span'] in set(v['span'] for v in (x.get('faults') or {}).values())]
    ck('F10 the key span is never also quoted as a fault', not keyeq, '%d bad' % len(keyeq))

    # --- G. stimulus ------------------------------------------------------
    st = [re.sub(r'\s+', ' ', stim(x)).strip().lower() for x in xs]
    ck('G1 seven hundred and fifty distinct stimuli', len(set(st)) == len(st),
       '%d distinct of %d' % (len(set(st)), len(st)))
    rs = reader_sentences()
    lifted = []
    for x in xs:
        if x['chapter'] not in CARRIER_CHAPTERS:
            continue
        s = re.sub(r'\s+', ' ', x['carrier'].replace(BLANK, '')).strip().lower()
        s = re.sub(r'\s+', ' ', s)
        if s in rs:
            lifted.append(x['id'])
    ck('G2 no carrier reproduces a sentence of Book 2', not lifted, '%d lifted' % len(lifted))
    means = {}
    for lv in (1, 2, 3, 4):
        g = [len(wlex.words(x['carrier'])) for x in xs
             if x['level'] == lv and x['chapter'] in CARRIER_CHAPTERS]
        means[lv] = sum(g) / len(g) if g else 0
    ck('G3 mean carrier length rises strictly with level',
       all(means[i] < means[i + 1] for i in (1, 2, 3)),
       ' '.join('L%d:%.1f' % (k, v) for k, v in means.items()))
    strands = set(x['strand'] for x in xs)
    ck('G4 all fifty strands of Book 2 used',
       len(strands) == 50 if len(chapters) == 15 else len(strands) <= 50,
       '%d strands' % len(strands))
    ck('G5 at least eight distinct strands in every chapter',
       all(len(set(x['strand'] for x in g)) >= 8 for g in byc.values()),
       min((len(set(x['strand'] for x in g)) for g in byc.values()), default=0))
    wrongs = [x['id'] for x in xs if not x['strand'].startswith(x['domain'] + '-')]
    ck('G6 every strand belongs to its exercise own domain', not wrongs,
       '%d wrong' % len(wrongs))
    nb = [x['id'] for x in xs if x['chapter'] in CARRIER_CHAPTERS
          and x['carrier'].count(BLANK) != 1]
    ck('G7 exactly one blank in every carrier', not nb, '%d bad' % len(nb))
    stray = [x['id'] for x in xs if x['chapter'] not in CARRIER_CHAPTERS
             and BLANK in stim(x)]
    ck('G8 no blank in the notes or table chapters', not stray, '%d stray' % len(stray))
    shape = []
    for x in xs:
        if x['chapter'] == 14 and not R['notes_min'] <= len(x['notes']) <= R['notes_max']:
            shape.append(x['id'])
        if x['chapter'] == 15:
            t = x['table']
            if not R['table_rows_min'] <= len(t['rows']) <= R['table_rows_max'] \
                    or any(len(r) != len(t['cols']) for r in t['rows']):
                shape.append(x['id'])
    ck('G9 notes and tables inside their declared shapes', not shape, '%d bad' % len(shape))
    oob = [x['id'] for x in xs if x['chapter'] in CARRIER_CHAPTERS
           and not SPEC['carrier_words'][x['level']][0]
           <= len(wlex.words(x['carrier']))
           <= SPEC['carrier_words'][x['level']][1]]
    ck('G10 every carrier inside its level word band', not oob, '%d out of band' % len(oob))

    # --- H. language ------------------------------------------------------
    def alltext(x):
        return ' '.join([stim(x), x['stem'], x['why'], x['trap']] + x['options'])
    brit = sorted({w.lower() for x in xs for w in wlex.words(alltext(x))
                   if w.lower() in BRITISH})
    ck('H1 no British spellings anywhere', not brit, ' '.join(brit[:10]))
    sp = [x['id'] for x in xs if SECOND_PERSON.search(alltext(x))]
    ck('H2 no second person anywhere', not sp, '%d exercises' % len(sp))
    con = [x['id'] for x in xs
           if CONTRACTION.search(' '.join([x['stem'], x['why'], x['trap']]))]
    ck('H3 no contractions in stem, explanation or trap', not con, '%d exercises' % len(con))
    badstem = []
    for x in xs:
        if x['chapter'] <= 12 and x['stem'] != SPEC['stems']['conventions']:
            badstem.append(x['id'])
        if x['chapter'] == 13 and x['stem'] != SPEC['stems']['transition']:
            badstem.append(x['id'])
        if x['chapter'] == 14 and not x['stem'].startswith(
                'Which choice most effectively uses relevant information'):
            badstem.append(x['id'])
        if x['chapter'] == 15 and x['stem'] not in SPEC['quant_stems']:
            badstem.append(x['id'])
    ck('H4 every stem is the form its element prescribes', not badstem,
       '%d bad' % len(badstem))
    ban = [x['id'] for x in xs for o in x['options']
           if o.strip().lower().rstrip('.') in R['banned_option_forms']]
    ck('H5 no banned option forms', not ban, '%d bad' % len(ban))
    longest = sum(1 for x in xs
                  if len(x['options'][LABELS.index(x['key'])])
                  == max(len(o) for o in x['options']))
    shortest = sum(1 for x in xs
                   if len(x['options'][LABELS.index(x['key'])])
                   == min(len(o) for o in x['options']))
    # Two-sided on purpose. A one-sided cap would be satisfied by a book in which
    # the key is NEVER the longest option, and that is a tell of its own: a student
    # who notices it gets to strike one option free on every question. The key has
    # to land at both extremes often enough that length carries no information.
    lo2, hi2 = R['key_extreme_min'], R['key_extreme_max']
    ck('H6 option length carries no information about where the key is',
       nx and lo2 <= longest / nx <= hi2 and lo2 <= shortest / nx <= hi2,
       'key longest %.1f%%, shortest %.1f%%, band %.0f-%.0f%%'
       % (100 * longest / nx, 100 * shortest / nx, 100 * lo2, 100 * hi2) if nx else '')
    mixed = [x['id'] for x in xs
             if len({o.rstrip()[-1] == '.' for o in x['options'] if o.rstrip()}) != 1]
    ck('H7 uniform end punctuation inside every option set', not mixed, '%d mixed' % len(mixed))
    wy = [x['id'] for x in xs
          if not R['why_words'][0] <= len(x['why'].split()) <= R['why_words'][1]]
    ck('H8 every explanation between eight and forty words', not wy, '%d out' % len(wy))
    tp = [x['id'] for x in xs
          if not R['trap_words'][0] <= len(x['trap'].split()) <= R['trap_words'][1]
          or not re.search(r'\b[A-D]\b', x['trap'])]
    ck('H9 every trap between six and thirty words and naming a letter', not tp,
       '%d out' % len(tp))
    nosay = [x['id'] for x in xs
             if RL.get(x['rule'], ['', ''])[1]
             and RL[x['rule']][1].lower() not in x['why'].lower()]
    ck('H10 every explanation names the rule it rests on', not nosay, '%d silent' % len(nosay))

    # --- I. Arabic --------------------------------------------------------
    cp = [d for d in chapters if d.get('summary_ar')]
    ck('I1 a chapter page for every chapter', len(cp) == len(chapters),
       '%d of %d' % (len(cp), len(chapters)))
    four = [d['chapter'] for d in chapters
            if sorted((d.get('summary_ar') or {})) != sorted(AR['chapter_parts'])]
    ck('I2 four parts in every chapter page', not four, 'chapters %s' % four[:6])
    lo, hi = AR['chapter_words']
    oobw = [d['chapter'] for d in chapters
            if not lo <= sum(len(str(v).split())
                             for v in (d.get('summary_ar') or {}).values()) <= hi]
    ck('I3 every chapter page inside its word band', not oobw, 'chapters %s' % oobw[:6])
    shortsila = [d['chapter'] for d in chapters
                 if len(str((d.get('summary_ar') or {}).get('sila', '')).split())
                 < AR['chapter_sila_min']]
    ck('I4 every chapter page relates the element to the test at length',
       not shortsila, 'chapters %s' % shortsila[:6])
    notes = [p for _, p in parts if (p.get('note_ar') or '').strip()]
    ck('I5 a note for every one of the seventy-five parts', len(notes) == len(parts),
       '%d of %d' % (len(notes), len(parts)))
    nlo, nhi = AR['note_words']
    oobn = ['C%02d-%s' % (c, p['domain']) for c, p in parts
            if not nlo <= len(str(p.get('note_ar', '')).split()) <= nhi]
    ck('I6 every part note inside its word band', not oobn, ' '.join(oobn[:6]))
    blocks = [str(v) for d in chapters for v in (d.get('summary_ar') or {}).values()]
    blocks += [str(p.get('note_ar', '')) for _, p in parts]
    thinar = [b[:28] for b in blocks if script_share(b) < AR['script_share_min']]
    ck('I7 every Arabic block at least ninety-two per cent Arabic script',
       not thinar, '%d thin' % len(thinar))
    lat = set()
    for b in blocks:
        for w in re.findall(r'[A-Za-z]+', b):
            if w not in AR['latin_allowlist']:
                lat.add(w)
    ck('I8 no Latin in the Arabic outside the allowlist', not lat,
       ' '.join(sorted(lat)[:10]))
    miss = []
    for d in chapters:
        j = ' '.join(str(v) for v in (d.get('summary_ar') or {}).values())
        if AR['element_names'][d['element']] not in j or AR['test_name'] not in j:
            miss.append(d['chapter'])
    ck('I9 every chapter page names its element and the test', not miss,
       'chapters %s' % miss[:6])
    missd = ['C%02d-%s' % (c, p['domain']) for c, p in parts
             if AR['domain_names'][p['domain']] not in str(p.get('note_ar', ''))]
    ck('I10 every part note names its domain', not missd, ' '.join(missd[:6]))

    # --- J. the answer key ------------------------------------------------
    ck('J1 a key row available for every exercise', nx == len(xs))
    nofield = [x['id'] for x in xs
               if not all((x.get(k) or '') for k in ('key', 'rule', 'why', 'trap'))]
    ck('J2 every key row carries key, rule, explanation and trap', not nofield,
       '%d short' % len(nofield))
    ck('J3 key rows in exercise order', [x['n'] for x in xs] == sorted(x['n'] for x in xs))
    ck('J4 every key letter agrees with its exercise file',
       all(x['key'] in LABELS for x in xs))
    ck('J5 every rule named in the key appears in the rule index',
       all(x['rule'] in RL for x in xs))
    wrongtrap = []
    for x in xs:
        ls = re.findall(r'\b([A-D])\b', x['trap'])
        if any(L == x['key'] for L in ls) or not ls:
            wrongtrap.append(x['id'])
    ck('J6 every trap names a distractor and never the key', not wrongtrap,
       '%d bad' % len(wrongtrap))
    whyletter = [x['id'] for x in xs if re.search(r'\boption [A-D]\b', x['why'], re.I)]
    ck('J7 no explanation gives away a letter', not whyletter, '%d bad' % len(whyletter))
    nofault = [x['id'] for x in xs
               if not set(re.findall(r'\b([A-D])\b', x['trap'])) <= set(x.get('faults') or {})]
    ck('J8 every letter a trap names has a fault of its own', not nofault,
       '%d bad' % len(nofault))
    dw = collections.Counter(x['why'].lower() for x in xs)
    ck('J9 no explanation repeated anywhere in the book',
       all(v == 1 for v in dw.values()),
       '%d repeated' % sum(v - 1 for v in dw.values() if v > 1))
    dt = collections.Counter(x['trap'].lower() for x in xs)
    ck('J10 no trap repeated anywhere in the book',
       all(v == 1 for v in dt.values()),
       '%d repeated' % sum(v - 1 for v in dt.values() if v > 1))

    # --- K. the document --------------------------------------------------
    sp_path = os.path.join(ROOT, 'build', 'doc-stats.json')
    S = {}
    if os.path.exists(sp_path):
        S = json.load(open(sp_path))
    ck('K1 the document has been built', bool(S), 'build/doc-stats.json' if S else 'not built')
    lo, hi = SPEC['checks']['page_band']
    ck('K2 page count inside the declared band', lo <= S.get('pages', 0) <= hi,
       '%s pages, band %d-%d' % (S.get('pages'), lo, hi))
    ck('K3 fifteen chapter openers', S.get('openers') == 15, S.get('openers'))
    ck('K4 seventy-five part heads', S.get('part_heads') == 75, S.get('part_heads'))
    ck('K5 seven hundred and fifty exercises rendered', S.get('exercises') == 750,
       S.get('exercises'))
    ck('K6 no exercise split across a page', S.get('split') == 0, S.get('split'))
    ck('K7 seven hundred and fifty answer key rows', S.get('key_rows') == 750,
       S.get('key_rows'))
    ck('K8 four appendices', S.get('appendices') == 4, S.get('appendices'))
    ck('K9 contents rows match the fifteen chapters', S.get('contents') == 15, S.get('contents'))
    ck('K10 ninety Arabic blocks rendered', S.get('arabic_blocks') == 90,
       S.get('arabic_blocks'))

    # --- L. the series ----------------------------------------------------
    bp = collections.Counter(CH[d['chapter']]['part'] for d in chapters)
    ck('L1 both Standard English Conventions skills covered',
       bp.get(1, 0) >= 1 and bp.get(2, 0) >= 1, dict(bp))
    ck('L2 Expression of Ideas covered', bp.get(3, 0) >= 1)
    ck('L3 quantitative evidence covered', bp.get(4, 0) >= 1)
    punct = [x for x in xs if CH[x['chapter']]['part'] == 2]
    ck('L4 punctuation now present at hard difficulty, which Book 2 left easy only',
       any(x['difficulty'] == 'hard' for x in punct),
       '%d hard of %d punctuation exercises'
       % (sum(1 for x in punct if x['difficulty'] == 'hard'), len(punct)))
    man = os.path.join(READER, 'data', 'manifest.json')
    ok2 = False
    if os.path.exists(man):
        try:
            import subprocess
            r = subprocess.run([sys.executable, 'tools/manifest.py'], cwd=READER,
                               capture_output=True, text=True, timeout=180)
            ok2 = '0 differences' in r.stdout
        except Exception:
            ok2 = False
    ck('L5 Book 2 passages unchanged since its manifest was baselined', ok2)
    rstr = set()
    if os.path.exists(os.path.join(READER, 'data', 'strands.yaml')):
        sd = yaml.safe_load(open(os.path.join(READER, 'data', 'strands.yaml')))
        rstr = {'%s-%s' % (f, s) for f in sd for s in sd[f]}
    ck('L6 every strand this book names exists in Book 2',
       bool(rstr) and strands <= rstr, '%d unknown' % len(strands - rstr))
    r2 = {}
    if os.path.exists(os.path.join(READER, 'data', 'spec.yaml')):
        r2 = yaml.safe_load(open(os.path.join(READER, 'data', 'spec.yaml'))).get('fields', {})
    ck('L7 the five domain codes and titles are Book 2 five, unchanged',
       bool(r2) and r2 == SPEC['domains'],
       'differs: %s' % sorted(set(r2.items()) ^ set(SPEC['domains'].items()))[:4])
    rspec = os.path.join(READER, 'data', 'spec.yaml')
    same = False
    if os.path.exists(rspec):
        rd = yaml.safe_load(open(rspec))
        same = rd.get('field_order') == DOM and set(rd.get('fields', {})) == set(SPEC['domains'])
    ck('L8 the domain names and order match Book 2 exactly', same)
    overlap = {'transition', 'synthesis'}
    els2 = set(d['element'] for d in chapters)
    ck('L9 this book overlaps Book 2 only where the test demands depth',
       els2 & {'transition', 'synthesis'} == (els2 & overlap),
       'shared: %s' % sorted(els2 & overlap))
    ck('L10 the three difficulty names match Book 2',
       set(SPEC['diff_by_pos'].values()) == {'easy', 'medium', 'hard'})

    return out


# ---------------------------------------------------------------------------
def main():
    partial = '--partial' in sys.argv
    verbose = '-v' in sys.argv
    chapters, xs = load()
    xres = per_exercise(xs)
    nfail = 0
    for x, rs in xres:
        for name, (ok, detail) in zip(PASSES, rs):
            if not ok:
                nfail += 1
                print('FAIL %-16s %s  %s' % (name, x['id'], detail))
    npass = len(xres) * 8 - nfail

    book = book_checks(chapters, xs, xres)
    for label, ok, detail in book:
        if not ok:
            print('FAIL %s  %s' % (label, detail))
        elif verbose:
            print('ok   %s  %s' % (label, detail))
    bpass = sum(1 for _, ok, _ in book if ok)

    want = SPEC['checks']['total']
    print()
    print('SUMMARY: %d/%d per-exercise passes, %d/%d book-level checks'
          % (npass, len(xres) * 8, bpass, len(book)))
    if not partial:
        if len(xres) * 8 != want:
            print('NOTE: %d exercises written, the book wants %d'
                  % (len(xres), SPEC['checks']['exercises']))
        return 0 if nfail == 0 and bpass == len(book) and len(xres) * 8 == want else 1
    return 0 if nfail == 0 else 1


if __name__ == '__main__':
    sys.exit(main())
