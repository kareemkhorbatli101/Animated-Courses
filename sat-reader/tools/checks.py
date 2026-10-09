#!/usr/bin/env python3
"""600 check passes for Reading the Five Fields: three per passage, 200 passages.

A  coverage and progression
B  language grading, including the 98 per cent coverage rule
C  register and integrity
"""
import os, re, sys, glob, yaml, statistics as st
from collections import Counter, defaultdict
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import lex

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPEC = yaml.safe_load(open(os.path.join(ROOT, 'data', 'spec.yaml')))
STRANDS = yaml.safe_load(open(os.path.join(ROOT, 'data', 'strands.yaml')))

BRITISH_FORMS = set("""behaviour behaviours colour colours coloured honour honours honoured
labour labours laboured favour favours favoured neighbour neighbours neighbourhood
neighbourhoods harbour harbours harboured rumour rumours humour odour odours vigour
splendour armour armoured endeavour saviour metre metres kilometre kilometres millimetre
millimetres centimetre centimetres centre centres centred theatre theatres litre litres
fibre fibres sombre calibre lustre sabre organise organised organises organising
recognise recognised recognises realise realised realises apologise apologised
criticise criticised emphasise emphasised summarise summarised specialise specialised
modernise modernised stabilise stabilised satirise satirised memorise memorised
minimise minimised maximise maximised analyse analysed analyses paralyse paralysed
defence defences offence offences pretence practise practised practising programme
programmes whilst amongst learnt burnt spelt lorry lorries petrol kerb kerbs fortnight
fortnights gaol aluminium sulphur sulphuric tyre tyres storey storeys moustache plough
ploughed judgement judgements ageing greyish travelled travelling traveller travellers
labelled labelling modelled modelling cancelled cancelling marvellous woollen enrolment
fulfil fulfilled instalment skilful draught cheque pyjamas aeroplane kilogramme tonne
tonnes jewellery sceptical sceptic manoeuvre cosy mould moulded smoulder axe
towards afterwards upwards backwards onwards""".split())

SECOND_PERSON = re.compile(r"\b(you|your|yours|yourself|yourselves)\b", re.I)
CONTRACTION = re.compile(r"\b\w+(?:'s|n't|'re|'ve|'ll|'d)\b")


GLOSS_MARKERS = [', which', ', meaning', ', that is', ', a ', ', an ', ', the ', ', who',
                 ' - ', ' \u2014 ', 'called', ' or ', ': ', 'known as', 'is when',
                 'are the ', 'is the ', 'means ', 'in other words']


def glossed_in_place(flat, term):
    full = r'\b' + r'\s+'.join(re.escape(t) for t in term.split())
    m = re.search(full, flat, re.I) or re.search(r'\b%s' % re.escape(term.split()[0]), flat, re.I)
    if not m:
        return False
    window = flat[max(0, m.start() - 70):m.start() + 180].lower()
    return any(k.lower() in window for k in GLOSS_MARKERS)


def load():
    out = []
    for p in sorted(glob.glob(os.path.join(ROOT, 'data', 'passages', '*.yaml'))):
        d = yaml.safe_load(open(p))
        for x in d['passages']:
            x['field'], x['level'] = d['field'], d['level']
            x['_file'] = os.path.basename(p)
            x['paras'] = [re.sub(r'\s+', ' ', q).strip()
                          for q in x['passage'].strip().split('\n\n') if q.strip()]
            x['flat'] = ' '.join(x['paras'])
            out.append(x)
    order = {f: i for i, f in enumerate(SPEC['field_order'])}
    out.sort(key=lambda x: (x['level'], order[x['field']], x['strand']))
    for i, x in enumerate(out, 1):
        x['n'] = i
    return out


def pass_a(x, by_id):
    f = []
    m = re.fullmatch(r'(HIS|BIO|PHY|HUM|SOC)-(S\d\d)-L([1-4])', x['id'])
    if not m:
        f.append('A1 malformed id')
    else:
        if m.group(1) != x['field'] or m.group(2) != x['strand'] or int(m.group(3)) != x['level']:
            f.append('A1 id disagrees with field, strand or level')
    if x['strand'] not in STRANDS.get(x['field'], {}):
        f.append('A2 strand not in the strand map')
    if x['move'] != SPEC['moves'][x['level']]:
        f.append('A3 move %r is not the move for level %d' % (x['move'], x['level']))
    want = None if x['level'] == 1 else '%s-%s-L%d' % (x['field'], x['strand'], x['level'] - 1)
    if (x.get('builds_on') or None) != want:
        f.append('A4 builds_on is %r, expected %r' % (x.get('builds_on'), want))
    if want and want not in by_id:
        f.append('A4 builds_on names a passage that does not exist')
    if len((x.get('advances') or '').split()) < 8:
        f.append('A5 advances is missing or shorter than eight words')
    anc = x.get('anchors') or []
    if len(anc) != 3:
        f.append('A6 %d anchors, three required' % len(anc))
    for a in anc:
        if not a.get('take') or len(a['take'].split()) < 6:
            f.append('A6 anchor take too short')
        q = re.sub(r'\s+', ' ', a.get('quote', '')).strip()
        if not q or q not in x['flat']:
            f.append('A7 anchor quote not verbatim in the passage: %r' % q[:40])
    if want and want in by_id:
        prev = {re.sub(r'\s+', ' ', a.get('quote', '')) for a in (by_id[want].get('anchors') or [])}
        if prev & {re.sub(r'\s+', ' ', a.get('quote', '')) for a in anc}:
            f.append('A8 an anchor quote repeats one from the level below')
    if x.get('sat_frame') not in SPEC['sat_frames']:
        f.append('A9 sat_frame not in the closed set')
    facts = x.get('facts') or []
    if len(facts) < 3:
        f.append('A10 fewer than three checkable facts listed')
    return f


def pass_b(x):
    f = []
    L = SPEC['levels'][x['level']]
    ws = lex.words(x['flat'])
    n = len(ws)
    if not (L['words_min'] <= n <= L['words_max']):
        f.append('B1 %d words, band %d-%d' % (n, L['words_min'], L['words_max']))
    if not (L['paras_min'] <= len(x['paras']) <= L['paras_max']):
        f.append('B2 %d paragraphs, band %d-%d' % (len(x['paras']), L['paras_min'], L['paras_max']))
    ss = lex.sentences(x['flat'])
    if len(ss) < L['sents_min']:
        f.append('B2 only %d sentences, %d required' % (len(ss), L['sents_min']))
    mean = n / len(ss) if ss else 0
    if not (L['sent_mean_min'] <= mean <= L['sent_mean_max']):
        f.append('B3 mean sentence %.1f words, band %.1f-%.1f' % (mean, L['sent_mean_min'], L['sent_mean_max']))
    longest = max((len(lex.words(s)) for s in ss), default=0)
    if longest > L['sent_max']:
        f.append('B4 longest sentence %d words, cap %d' % (longest, L['sent_max']))
    fk = lex.flesch_kincaid(x['flat'])
    if not (L['fk_min'] <= fk <= L['fk_max']):
        f.append('B5 Flesch-Kincaid %.1f, band %.1f-%.1f' % (fk, L['fk_min'], L['fk_max']))
    # the 98 per cent rule
    props = lex.proper_nouns(x['flat'])
    termwords = set()
    for t in (x.get('terms') or []):
        termwords |= {w.lower() for w in lex.words(t['term'])}
    above = []
    for w in ws:
        lw = w.lower()
        if lw in props or lw in termwords or w[0].isupper():
            continue
        if lex.rank(lw) > L['known_band']:
            above.append(lw)
    seen, uniq = set(), []
    for w in above:
        k = lex.easiest_form(w)
        if k not in seen:
            seen.add(k)
            uniq.append(w)
    uniq = sorted(uniq)
    if len(uniq) > L['above_band_max']:
        f.append('B6 %d words above the top-%d band (cap %d): %s'
                 % (len(uniq), L['known_band'], L['above_band_max'], ', '.join(uniq[:10])))
    terms = x.get('terms') or []
    if len(terms) > L['terms_max']:
        f.append('B7 %d field terms, cap %d' % (len(terms), L['terms_max']))
    for t in terms:
        if not re.search(re.escape(t['term'].split()[0]), x['flat'], re.I):
            f.append('B8 declared term %r does not appear' % t['term'])
        if t.get('glossed'):
            if not re.sub(r'\s+', ' ', t.get('gloss', '')).strip():
                f.append('B8 term %r marked glossed with no gloss recorded' % t['term'])
            if not glossed_in_place(x['flat'], t['term']):
                f.append('B9 term %r is not glossed where it stands' % t['term'])
        elif L['gloss_all']:
            f.append('B9 level %d requires every term glossed; %r is not' % (x['level'], t['term']))
    for v in (x.get('vocab_link') or []):
        if lex.rank(v) and not re.search(r'\b%s' % re.escape(v[:max(4, len(v) - 3)]), x['flat'], re.I):
            f.append('B10 vocabulary link %r does not appear' % v)
    return f


def pass_c(x):
    f = []
    flat = x['flat']
    for w in lex.words(flat):
        if w.lower() in BRITISH_FORMS:
            f.append('C1 British form %r' % w)
    if SECOND_PERSON.search(flat):
        f.append('C2 second person used')
    for m in CONTRACTION.finditer(flat):
        if not m.group(0).endswith("'s"):
            f.append('C3 contraction %r' % m.group(0))
    t = x.get('title', '')
    if not (3 <= len(t.split()) <= 8):
        f.append('C4 title is %d words, band 3-8' % len(t.split()))
    if t and flat.lower().startswith(t.lower()):
        f.append('C4 the passage opens by restating its title')
    for i, p in enumerate(x['paras'], 1):
        if len(lex.words(p)) < 55:
            f.append('C5 paragraph %d has only %d words' % (i, len(lex.words(p))))
    has_num = bool(re.search(r'\d', flat)) or any(
        w.lower() in lex.NUMBER_WORDS for w in lex.words(flat))
    if not has_num:
        f.append('C6 no date or quantity anywhere in the passage')
    if not lex.proper_nouns(flat):
        f.append('C6 no proper noun anywhere in the passage')
    if re.search(r'^\s*[-*•]', x['passage'], re.M):
        f.append('C7 bullet list in the passage')
    if '?' in flat:
        f.append('C7 question mark in the passage')
    if '________' in flat:
        f.append('C7 blank token in the passage')
    return f


def main():
    xs = load()
    by_id = {x['id']: x for x in xs}
    results = []
    for x in xs:
        results.append((x['id'], 'A', pass_a(x, by_id)))
        results.append((x['id'], 'B', pass_b(x)))
        results.append((x['id'], 'C', pass_c(x)))
    failed = [r for r in results if r[2]]
    print('=' * 74)
    print('PASSAGE-LEVEL CHECK PASSES: %d (%d passages x 3)' % (len(results), len(xs)))
    print('  passed: %d   failed: %d' % (len(results) - len(failed), len(failed)))
    print('=' * 74)
    for iid, name, fails in failed:
        for msg in fails:
            print('FAIL %s pass %s: %s' % (iid, name, msg))

    print()
    print('BOOK-LEVEL CHECKS')
    book = []
    chk = lambda label, ok, detail='': book.append((label, ok, detail))
    chk('200 passages present', len(xs) == 200, '%d' % len(xs))
    grid = Counter((x['field'], x['level']) for x in xs)
    chk('5 fields x 4 levels x 10 passages', len(grid) == 20 and all(v == 10 for v in grid.values()),
        '%d cells' % len(grid))
    per_strand = Counter((x['field'], x['strand']) for x in xs)
    chk('50 strands, each with four levels', len(per_strand) == 50 and all(v == 4 for v in per_strand.values()),
        '%d strands' % len(per_strand))
    titles = [x['title'] for x in xs]
    chk('every title distinct', len(set(titles)) == len(titles), '%d distinct' % len(set(titles)))
    for metric, fn in (('Flesch-Kincaid', lambda x: lex.flesch_kincaid(x['flat'])),
                       ('mean sentence length', lambda x: len(lex.words(x['flat'])) / max(1, len(lex.sentences(x['flat'])))),
                       ('median word rank', lambda x: st.median([lex.rank(w) for w in lex.words(x['flat'])]))):
        vals = []
        for lv in (1, 2, 3, 4):
            sub = [x for x in xs if x['level'] == lv]
            vals.append(st.mean([fn(x) for x in sub]) if sub else 0)
        chk('%s rises with every level' % metric, all(vals[i] < vals[i + 1] for i in range(3)),
            ' < '.join('%.1f' % v for v in vals))
    try:
        vocab = set()
        for p in glob.glob(os.path.join(ROOT, '..', 'sat-vocabulary', 'data', 'items', '*.yaml')):
            d = yaml.safe_load(open(p))
            for it in d['items']:
                vocab.add((d['domain'], d['level'], it['word']))
        linked = set()
        for x in xs:
            for v in (x.get('vocab_link') or []):
                linked.add((x['field'], x['level'], v))
        missing = vocab - linked
        chk('all 200 Words in Context words linked at the matching field and level',
            not missing, '%d unlinked' % len(missing))
        if missing and len(missing) <= 40:
            for d, l, w in sorted(missing):
                print('     unlinked: %s L%d %s' % (d, l, w))
    except Exception as e:
        chk('Words in Context cross-link', False, str(e))
    for label, ok, detail in book:
        print('%-4s %-60s %s' % ('ok' if ok else 'FAIL', label, detail))
    bad = [b for b in book if not b[1]]
    print()
    print('SUMMARY: %d/%d passage-level passes, %d/%d book-level checks'
          % (len(results) - len(failed), len(results), len(book) - len(bad), len(book)))
    return 1 if (failed or bad) else 0


if __name__ == '__main__':
    sys.exit(main())
