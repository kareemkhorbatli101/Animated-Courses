"""The 20,000 per-question check passes and the 100 book-level passes.

Ten passes per question (Q1 identity .. Q10 difficulty), 2,000 questions.
One hundred book-level passes in ten families, A through J.
See QUESTIONS-PLAN.md sections 7 and 8.
"""
import collections
import glob
import json
import os
import re
import subprocess
import sys
import unicodedata

import yaml

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import checks as pcheck                                                 # noqa: E402
import lex                                                              # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPEC = yaml.safe_load(open(os.path.join(ROOT, 'data', 'spec.yaml')))
R = SPEC['question_rules']
AR = SPEC['arabic']
SLOTS = SPEC['slots']
LABELS = R['labels']

CARRIER_TYPES = {'inference', 'transitions', 'boundaries'}
FIXED_STEMS = SPEC['fixed_stems']
VARIABLE_SLOTS = set(SPEC['variable_stem_slots'])
REQUIRED = {
    'central_idea': [],
    'detail': [],
    'evidence': ['claim'],
    'inference': ['carrier'],
    'words_in_context': ['target'],
    'structure': [],
    'cross_text': ['sibling', 'sibling_gloss'],
    'transitions': ['carrier'],
    'boundaries': ['carrier'],
    'synthesis': ['notes', 'goal'],
}
# Possessive 's is not a contraction, so it is not matched here; only the clipped
# forms are, plus the handful of 's contractions that are genuinely verbal.
CONTRACTIONS = re.compile(
    r"\b\w+'(t|re|ve|ll|m)\b|\b(it|that|there|who|what|let|he|she|here)'s\b|\bn't\b", re.I)
SECOND_PERSON = re.compile(r'\b(you|your|yours|yourself|yourselves)\b', re.I)
# A negative stem is one whose TASK is negated -- "which is NOT true", "all of the
# following EXCEPT", "which is least like". A "not" inside a clause describing what
# the text says is ordinary English and is not a negative stem, so the negation has
# to govern the interrogative to count.
NEGATIVE_STEM = re.compile(
    r'\bNOT\b|\bEXCEPT\b|\bexcept\b|\bleast\b|\bneither\b'
    r'|[Ww]hich choice.{0,40}?\b(is|are|was|were|does|do|did|would|could|can|will|may)\s+not\b')
STOP = set("""a an the and or but of to in on at by for with from as is are was were be been being
that this these those it its which who whom whose what when where why how than then so if not no
than more most less least very much many such each any all both one two three into over under
about after before during between among through while because since although though however
text passage author choice following best most does do did has have had can could would should
may might will shall must there their them they he she his her him we us our you your i me my""".split())


# ---------------------------------------------------------------------------
# loading
# ---------------------------------------------------------------------------
def load():
    passages = {x['id']: x for x in pcheck.load()}
    sets = []
    for p in sorted(glob.glob(os.path.join(ROOT, 'data', 'questions', '*.yaml'))):
        d = yaml.safe_load(open(p))
        for s in d['sets']:
            s['field'], s['level'] = d['field'], d['level']
            s['_file'] = os.path.basename(p)
            sets.append(s)
    order = {f: i for i, f in enumerate(SPEC['field_order'])}
    sets.sort(key=lambda s: (s['level'], order[s['field']], s['id']))
    n = 0
    for s in sets:
        s['passage'] = passages.get(s['id'])
        s['n'] = passages[s['id']]['n'] if s['id'] in passages else 0
        for q in s['questions']:
            n += 1
            q['gn'] = n
            q['qid'] = '%s-Q%02d' % (s['id'], q['slot'])
            q['set'] = s
    return passages, sets


def quoted(text):
    return re.findall(r'«(.+?)»', str(text))


def flat_of(s):
    return re.sub(r'\s+', ' ', s['passage']['flat']) if s.get('passage') else ''


def content(text):
    return [w for w in re.findall(r"[a-z][a-z'-]+", str(text).lower())
            if w not in STOP and len(w) > 2]


def run_in(carrier, flat, n=6):
    """Does the carrier share a run of n words with the passage? Compared on words
    alone: a carrier that ends a borrowed clause with a period where the passage had
    a comma is still built from the passage."""
    def norm(t):
        return re.findall(r"[a-z0-9']+", str(t).lower())
    ws = norm(re.sub(r'_+', ' ', str(carrier)))
    hay = ' '.join(norm(flat))
    for i in range(len(ws) - n + 1):
        if ' '.join(ws[i:i + n]) in hay:
            return True
    return False


def wordlist(text):
    return re.findall(r"[A-Za-z][A-Za-z'-]*", str(text))


def british(text):
    return sorted({w for w in wordlist(text) if w.lower() in pcheck.BRITISH_FORMS})


# ---------------------------------------------------------------------------
# the ten per-question passes
# ---------------------------------------------------------------------------
def q1_identity(q, s, seen):
    f = []
    if not re.fullmatch(r'(HIS|BIO|PHY|HUM|SOC)-S\d\d-L[1-4]-Q(0[1-9]|10)', q['qid']):
        f.append('Q1 malformed id %r' % q['qid'])
    if q['qid'] in seen:
        f.append('Q1 duplicate id')
    seen.add(q['qid'])
    if not q['qid'].startswith(s['id'] + '-Q'):
        f.append('Q1 id does not agree with its passage')
    if s.get('passage') is None:
        f.append('Q1 no such passage %s' % s['id'])
    return f


def q2_slot(q, s):
    f = []
    if q['slot'] not in SLOTS:
        return ['Q2 slot %r out of range' % q['slot']]
    want = SLOTS[q['slot']]['type']
    if q.get('type') != want:
        f.append('Q2 slot %d should be %s, is %r' % (q['slot'], want, q.get('type')))
    for k in REQUIRED.get(q.get('type'), []):
        if not q.get(k):
            f.append('Q2 %s needs field %r' % (q['type'], k))
    if q.get('type') in CARRIER_TYPES and '___' not in str(q.get('carrier', '')):
        f.append('Q2 %s carrier has no ___ blank' % q['type'])
    if q.get('type') == 'synthesis':
        n = len(q.get('notes') or [])
        if not R['notes_min'] <= n <= R['notes_max']:
            f.append('Q2 synthesis has %d notes, want %d to %d'
                     % (n, R['notes_min'], R['notes_max']))
    return f


def q3_options(q):
    f = []
    o = q.get('options') or []
    if len(o) != R['options']:
        f.append('Q3 %d options, want %d' % (len(o), R['options']))
    for i, t in enumerate(o):
        if not str(t).strip():
            f.append('Q3 option %s empty' % LABELS[i] if i < 4 else 'Q3 empty option')
    return f


def q4_key(q):
    f = []
    k = q.get('key')
    if k not in LABELS:
        f.append('Q4 key %r not one of A to D' % k)
    elif len(q.get('options') or []) == 4 and not str(q['options'][LABELS.index(k)]).strip():
        f.append('Q4 key resolves to an empty option')
    return f


def q5_distinctness(q):
    f = []
    o = [re.sub(r'\s+', ' ', str(t)).strip().lower().rstrip('.') for t in (q.get('options') or [])]
    if len(set(o)) != len(o):
        f.append('Q5 duplicate option')
    # A Standard English Conventions item is built so that its four options differ
    # only in punctuation, so one is bound to sit inside another. That is the form
    # the real test uses, not a defect, and the type is held to its own rule below.
    if q.get('type') != 'boundaries':
        for i in range(len(o)):
            for j in range(len(o)):
                if i != j and o[i] and o[i] in o[j]:
                    f.append('Q5 option %s is contained in option %s' % (LABELS[i], LABELS[j]))
    else:
        bare = [re.sub(r'[^a-z ]', '', t).split() for t in o]
        if len(set(map(tuple, bare))) > 2:
            f.append('Q5 boundaries options must differ only in punctuation')
    for t in o:
        for bad in R['banned_option_forms']:
            if bad in t:
                f.append('Q5 banned option form %r' % bad)
    mv = q.get('moves') or {}
    if q.get('key') in LABELS and len(o) == 4:
        want = sorted(L for L in LABELS if L != q['key'])
        if sorted(mv) != want:
            f.append('Q5 moves must name the three distractors %s, names %s'
                     % (','.join(want), ','.join(sorted(mv)) or 'none'))
        vals = list(mv.values())
        if len(vals) == 3 and len(set(vals)) < 2:
            f.append('Q5 all three distractors use the same move')
        for v in vals:
            if v not in R['distractor_moves']:
                f.append('Q5 unknown distractor move %r' % v)
    return f


def q6_shape(q):
    f = []
    o = [re.sub(r'\s+', ' ', str(t)).strip() for t in (q.get('options') or [])]
    if len(o) == 4 and all(o):
        n = [len(x) for x in o]
        if min(n) and max(n) / min(n) > R['option_ratio_max']:
            f.append('Q6 option length ratio %.2f over cap %.2f'
                     % (max(n) / min(n), R['option_ratio_max']))
        ends = {x[-1] == '.' for x in o}
        if len(ends) != 1:
            f.append('Q6 option end punctuation is not uniform')
        caps = {x[0].isupper() for x in o if x[0].isalpha()}
        if len(caps) > 1:
            f.append('Q6 option capitalization is not uniform')
    return f


def q7_stem(q):
    f = []
    st = re.sub(r'\s+', ' ', str(q.get('stem') or '')).strip()
    if not st:
        return ['Q7 no stem']
    if not st.endswith('?'):
        f.append('Q7 stem does not end with a question mark')
    n = len(st.split())
    if not R['stem_words_min'] <= n <= R['stem_words_max']:
        f.append('Q7 stem is %d words, want %d to %d'
                 % (n, R['stem_words_min'], R['stem_words_max']))
    if SECOND_PERSON.search(st):
        f.append('Q7 stem uses the second person')
    if CONTRACTIONS.search(st):
        f.append('Q7 stem uses a contraction')
    if NEGATIVE_STEM.search(st):
        f.append('Q7 negative stem')
    b = british(st)
    if b:
        f.append('Q7 British forms in stem: %s' % ', '.join(b))
    want = FIXED_STEMS.get(q.get('type'))
    if want and st != want:
        f.append('Q7 %s must use the canonical stem %r' % (q['type'], want))
    return f


def q8_grounding(q, s, passages):
    f = []
    flat = flat_of(s)
    if not flat:
        return ['Q8 no passage to ground against']
    for span in quoted(q.get('stem')) + [x for t in (q.get('options') or []) for x in quoted(t)]:
        if re.sub(r'\s+', ' ', span).strip() not in flat:
            f.append('Q8 quoted span not verbatim in the passage: %r' % span[:45])
    t = q.get('type')
    if t == 'evidence':
        for i, o in enumerate(q.get('options') or []):
            if not quoted(o):
                f.append('Q8 evidence option %s is not a quotation' % LABELS[i])
    elif t == 'words_in_context':
        # The target must be the form the passage actually uses, and must belong to
        # the same word family as one of the passage's Book 1 link words. Some
        # passages were written with a cognate -- "opposite" for the target word
        # "opposed" -- so demanding the exact Book 1 form would make the question
        # unanswerable from the text. The family tie is what carries the cross-link.
        tgt = str(q.get('target') or '')
        vl = [w.lower() for w in (s['passage'].get('vocab_link') or [])]
        if not re.search(r'\b%s\b' % re.escape(tgt), flat, re.I):
            f.append('Q8 target %r does not appear in the passage' % tgt)
        stem_ok = any(v[:max(4, len(v) - 3)] == tgt.lower()[:max(4, len(v) - 3)] for v in vl)
        if not stem_ok:
            f.append('Q8 target %r shares no word family with the vocab_link %s' % (tgt, vl))
    elif t == 'cross_text':
        sib = passages.get(q.get('sibling'))
        if sib is None:
            f.append('Q8 sibling %r does not exist' % q.get('sibling'))
        else:
            if (sib['field'], sib['strand']) != (s['passage']['field'], s['passage']['strand']):
                f.append('Q8 sibling is not in the same strand')
            if abs(sib['level'] - s['passage']['level']) != 1:
                f.append('Q8 sibling is not one level away')
        st = str(q.get('stem') or '') + ' ' + str(q.get('sibling_gloss') or '')
        if 'Text 1' not in st or 'Text 2' not in st:
            f.append('Q8 cross-text question does not name Text 1 and Text 2')
    elif t in CARRIER_TYPES:
        car = str(q.get('carrier') or '')
        if t == 'boundaries':
            cw = content(car)
            hit = sum(1 for w in cw if re.search(r'\b%s' % re.escape(w[:6]), flat, re.I))
            if cw and hit / len(cw) < 0.70:
                f.append('Q8 boundaries carrier is only %d%% grounded in the passage'
                         % round(100 * hit / len(cw)))
        elif not run_in(car, flat):
            f.append('Q8 %s carrier shares no six-word run with the passage' % t)
    elif t == 'synthesis':
        for i, note in enumerate(q.get('notes') or [], 1):
            cw = content(note)
            hit = sum(1 for w in cw if re.search(r'\b%s' % re.escape(w[:6]), flat, re.I))
            if cw and hit / len(cw) < 0.60:
                f.append('Q8 synthesis note %d is not traceable to the passage' % i)
    # Self-containment. A key must paraphrase freely -- that is what a central-idea
    # or inference key IS -- so comparing every content word against the passage
    # would fail every well-written key. What may not be imported is a particular:
    # a name, a number or a date the passage never supplies. Those are what an
    # outside-knowledge question smuggles in, and those are what is checked.
    if q.get('key') in LABELS and len(q.get('options') or []) == 4:
        keytext = str(q['options'][LABELS.index(q['key'])])
        pool = ' '.join([flat, str(q.get('stem') or ''), str(q.get('carrier') or ''),
                         ' '.join(str(x) for x in (q.get('notes') or [])),
                         str(q.get('sibling_gloss') or ''), str(q.get('claim') or '')])
        poolw = set(w.lower() for w in wordlist(pool)) | set(re.findall(r'\d+', pool))
        parts = [w for w in re.findall(r"\b[A-Z][a-z]{2,}\b", keytext[1:])
                 if w.lower() not in STOP]
        parts += re.findall(r'\d+', keytext)
        miss = [w for w in parts if w.lower() not in poolw and w not in poolw]
        if miss:
            f.append('Q8 key imports particulars absent from the text: %s'
                     % ', '.join(sorted(set(miss))[:5]))
    return f


def q9_rationale(q):
    f = []
    for fld, band in (('why', R['why_words']), ('trap', R['trap_words'])):
        t = re.sub(r'\s+', ' ', str(q.get(fld) or '')).strip()
        if not t:
            f.append('Q9 no %s' % fld)
            continue
        n = len(t.split())
        if not band[0] <= n <= band[1]:
            f.append('Q9 %s is %d words, want %d to %d' % (fld, n, band[0], band[1]))
        if SECOND_PERSON.search(t):
            f.append('Q9 %s uses the second person' % fld)
        b = british(t)
        if b:
            f.append('Q9 British forms in %s: %s' % (fld, ', '.join(b)))
    tr = str(q.get('trap') or '')
    if not re.search(r'\b[A-D]\b', tr):
        f.append('Q9 trap does not name a distractor letter')
    return f


def q10_difficulty(q, s):
    f = []
    d = q.get('difficulty')
    if d not in ('easy', 'medium', 'hard'):
        return ['Q10 difficulty %r not valid' % d]
    m = SPEC['difficulty_map'][s['level']]
    want = next((k for k in ('easy', 'medium', 'hard') if q['slot'] in m[k]), None)
    if d != want:
        f.append('Q10 level %d slot %d should be %s, is %s' % (s['level'], q['slot'], want, d))
    return f


PASSES = ['identity', 'slot', 'options', 'key', 'distinctness',
          'shape', 'stem', 'grounding', 'rationale', 'difficulty']


def per_question(passages, sets):
    seen = set()
    results = []
    for s in sets:
        for q in s['questions']:
            fs = [q1_identity(q, s, seen), q2_slot(q, s), q3_options(q), q4_key(q),
                  q5_distinctness(q), q6_shape(q), q7_stem(q),
                  q8_grounding(q, s, passages), q9_rationale(q), q10_difficulty(q, s)]
            results.append((q, fs))
    return results


# ---------------------------------------------------------------------------
# the hundred book-level passes
# ---------------------------------------------------------------------------
def pdfnorm(t):
    """The rendered page and the source string must be compared on equal terms:
    the build turns guillemets into typographic quotes, and a PDF text layer
    carries bidi controls and its own quote glyphs."""
    t = str(t)
    for a, b in (('\u00ab', '"'), ('\u00bb', '"'), ('\u201c', '"'), ('\u201d', '"'),
                 ('\u2018', "'"), ('\u2019', "'"), ('\u2014', '-'), ('\u2013', '-'),
                 ('\u00b7', '.')):
        t = t.replace(a, b)
    return re.sub(r'\s+', ' ', t)


def arnorm(t):
    """Arabic comparison ignores shaping, diacritics and word spacing, because a
    PDF text layer splits and respaces Arabic words unpredictably."""
    t = ''.join(c for c in unicodedata.normalize('NFKD', str(t))
                if not unicodedata.category(c).startswith('M'))
    t = t.replace('\u0640', '')
    for a in '\u0623\u0625\u0622\u0671':
        t = t.replace(a, '\u0627')
    t = t.replace('\u0649', '\u064a').replace('\u0629', '\u0647')
    return re.sub(r'\s+', '', t)


def arabic_words(t):
    return [w for w in re.split(r'\s+', str(t)) if w]


def script_share(t):
    letters = [c for c in str(t) if unicodedata.category(c).startswith('L')]
    if not letters:
        return 0.0
    ar = [c for c in letters if '؀' <= c <= 'ۿ' or 'ݐ' <= c <= 'ݿ'
          or 'ﭐ' <= c <= '﷿' or 'ﹰ' <= c <= '﻿']
    return len(ar) / len(letters)


def book_checks(passages, sets, qres):
    out = []

    def ck(label, ok, detail=''):
        out.append((label, bool(ok), detail))

    qs = [q for s in sets for q in s['questions']]
    keys = [q.get('key') for q in qs]
    nq = len(qs)

    # --- A. completeness ---------------------------------------------------
    ck('A1 two hundred question sets present', len(sets) == 200, '%d sets' % len(sets))
    bad = [s['id'] for s in sets if len(s['questions']) != 10]
    ck('A2 every set holds exactly ten questions', not bad, '%d short or long' % len(bad))
    ids = [q['qid'] for q in qs]
    ck('A3 all question ids unique', len(set(ids)) == len(ids), '%d ids' % len(ids))
    ck('A4 every id agrees with its passage',
       all(q['qid'].startswith(q['set']['id']) for q in qs))
    ck('A5 slot order canonical in every set',
       all([q['slot'] for q in s['questions']] == list(range(1, 11)) for s in sets))
    ck('A6 all ten types present once per set',
       all(sorted(q.get('type') for q in s['questions'])
           == sorted(SLOTS[i]['type'] for i in SLOTS) for s in sets))
    ck('A7 two hundred Arabic summaries', sum(1 for s in sets if s.get('summary_ar')) == 200,
       '%d present' % sum(1 for s in sets if s.get('summary_ar')))
    nfiles = len(glob.glob(os.path.join(ROOT, 'data', 'questions', '*.yaml')))
    ck('A8 twenty question files', nfiles == 20, '%d files' % nfiles)
    per = collections.Counter(s['_file'] for s in sets)
    ck('A9 ten sets in every file', per and all(v == 10 for v in per.values()))
    ck('A10 question numbering one to two thousand contiguous',
       [q['gn'] for q in qs] == list(range(1, nq + 1)), '%d questions' % nq)

    # --- B. option integrity ----------------------------------------------
    ck('B1 four options everywhere', all(len(q.get('options') or []) == 4 for q in qs))
    ck('B2 labels A to D everywhere', LABELS == ['A', 'B', 'C', 'D'])
    ck('B3 one key everywhere', all(q.get('key') in LABELS for q in qs))
    ck('B4 key letters valid', set(keys) <= set(LABELS), ''.join(sorted(set(keys))))
    ck('B5 no duplicate option inside a question',
       not any('Q5 duplicate' in m for _, fs in qres for g in fs for m in g))
    ck('B6 no option contained in another',
       not any('is contained in' in m for _, fs in qres for g in fs for m in g))
    ck('B7 no banned option form', not any('banned option form' in m
                                           for _, fs in qres for g in fs for m in g))
    ratios = []
    for q in qs:
        o = [len(re.sub(r'\s+', ' ', str(t)).strip()) for t in (q.get('options') or [])]
        if len(o) == 4 and min(o):
            ratios.append(max(o) / min(o))
    ck('B8 option length ratio within cap book-wide',
       ratios and max(ratios) <= R['option_ratio_max'],
       'worst %.2f' % (max(ratios) if ratios else 0))
    ck('B9 option end punctuation uniform',
       not any('end punctuation' in m for _, fs in qres for g in fs for m in g))
    ck('B10 option capitalization uniform',
       not any('capitalization' in m for _, fs in qres for g in fs for m in g))

    # --- C. key balance ----------------------------------------------------
    cnt = collections.Counter(keys)
    lo, hi = R['key_letter_share_book']
    for L in LABELS:
        share = cnt[L] / nq if nq else 0
        ck('C%d key letter %s between %d and %d per cent book-wide'
           % (LABELS.index(L) + 1, L, lo * 100, hi * 100),
           lo <= share <= hi, '%.1f%%' % (100 * share))
    llo, lhi = R['key_letter_share_level']
    worst = []
    for lv in (1, 2, 3, 4):
        k = [q['key'] for q in qs if q['set']['level'] == lv]
        for L in LABELS:
            worst.append((k.count(L) / len(k) if k else 0, 'L%d %s' % (lv, L)))
    ck('C5 every letter at least %d per cent within every level' % (llo * 100),
       worst and min(worst)[0] >= llo, 'lowest %s %.1f%%' % (min(worst)[1], 100 * min(worst)[0]))
    ck('C6 every letter at most %d per cent within every level' % (lhi * 100),
       worst and max(worst)[0] <= lhi, 'highest %s %.1f%%' % (max(worst)[1], 100 * max(worst)[0]))
    flo, fhi = R['key_letter_share_field']
    fw = []
    for fl in SPEC['field_order']:
        k = [q['key'] for q in qs if q['set']['field'] == fl]
        for L in LABELS:
            fw.append((k.count(L) / len(k) if k else 0, '%s %s' % (fl, L)))
    ck('C7 every letter at least %d per cent within every field' % (flo * 100),
       fw and min(fw)[0] >= flo, 'lowest %s %.1f%%' % (min(fw)[1], 100 * min(fw)[0]))
    ck('C8 every letter at most %d per cent within every field' % (fhi * 100),
       fw and max(fw)[0] <= fhi, 'highest %s %.1f%%' % (max(fw)[1], 100 * max(fw)[0]))
    runs = []
    for s in sets:
        run = 1
        ks = [q.get('key') for q in s['questions']]
        for i in range(1, len(ks)):
            run = run + 1 if ks[i] == ks[i - 1] else 1
            runs.append(run)
    ck('C9 no more than %d identical keys in a row' % R['key_run_max'],
       not runs or max(runs) <= R['key_run_max'], 'longest run %d' % (max(runs) if runs else 0))
    slotworst = []
    for i in SLOTS:
        k = [q['key'] for q in qs if q['slot'] == i]
        if k:
            slotworst.append((max(k.count(L) for L in LABELS) / len(k), 'slot %d' % i))
    ck('C10 no slot above %d per cent on one letter' % (R['slot_letter_share_max'] * 100),
       slotworst and max(slotworst)[0] <= R['slot_letter_share_max'],
       'worst %s %.1f%%' % (max(slotworst)[1], 100 * max(slotworst)[0]) if slotworst else '')

    # --- D. difficulty -----------------------------------------------------
    for lv in (1, 2, 3, 4):
        m = SPEC['difficulty_map'][lv]
        got = collections.Counter(q['difficulty'] for q in qs if q['set']['level'] == lv)
        nset = sum(1 for s in sets if s['level'] == lv)
        want = {k: len(m[k]) * nset for k in ('easy', 'medium', 'hard')}
        ck('D%d level %d difficulty totals exact' % (lv, lv), dict(got) == want,
           'easy %d medium %d hard %d' % (got['easy'], got['medium'], got['hard']))
    ck('D5 difficulty labels all valid',
       all(q.get('difficulty') in ('easy', 'medium', 'hard') for q in qs))
    tot = collections.Counter(q['difficulty'] for q in qs)
    ck('D6 book difficulty totals as declared',
       tot['easy'] + tot['medium'] + tot['hard'] == nq,
       'easy %d medium %d hard %d' % (tot['easy'], tot['medium'], tot['hard']))
    hard = [sum(1 for q in qs if q['set']['level'] == lv and q['difficulty'] == 'hard')
            for lv in (1, 2, 3, 4)]
    ck('D7 hard questions rise with every level', hard == sorted(hard) and len(set(hard)) == 4,
       ' < '.join(map(str, hard)))
    easy = [sum(1 for q in qs if q['set']['level'] == lv and q['difficulty'] == 'easy')
            for lv in (1, 2, 3, 4)]
    ck('D8 easy questions fall with every level',
       easy == sorted(easy, reverse=True) and len(set(easy)) == 4, ' > '.join(map(str, easy)))
    # Three slots are anchors and hold one difficulty at every level by design: the
    # cross-text pair is the hardest thing in the book, the Standard English carrier
    # the easiest, and the inference slot sits in the middle throughout. The other
    # seven move with the level. See QUESTIONS-PLAN.md section 3.
    ANCHOR = {4: 'medium', 7: 'hard', 9: 'easy'}
    diffs = {i: {q['difficulty'] for q in qs if q['slot'] == i} for i in SLOTS}
    ck('D9 the three anchor slots hold one difficulty and the other seven move',
       bool(qs) and all(diffs[i] == {ANCHOR[i]} for i in ANCHOR)
       and all(len(diffs[i]) > 1 for i in SLOTS if i not in ANCHOR),
       ' '.join('%d:%s' % (i, '/'.join(sorted(diffs[i]))) for i in SLOTS) if qs else '')
    ck('D10 no set of one difficulty only',
       all(len({q['difficulty'] for q in s['questions']}) > 1 for s in sets))

    # --- E. stem quality ---------------------------------------------------
    stems = [re.sub(r'\s+', ' ', str(q.get('stem') or '')).strip() for q in qs]
    ck('E1 fixed-stem types use the canonical SAT wording and every stem ends in a question mark',
       all(t.endswith('?') for t in stems)
       and not any('canonical stem' in m for _, fs in qres for g in fs for m in g))
    ck('E2 stem length inside band',
       all(R['stem_words_min'] <= len(t.split()) <= R['stem_words_max'] for t in stems))
    ck('E3 no negative stems', not any('negative stem' in m
                                       for _, fs in qres for g in fs for m in g))
    vstems = [re.sub(r'\s+', ' ', str(q.get('stem') or '')).strip()
              for q in qs if q['slot'] in VARIABLE_SLOTS]
    ck('E4 no two passage-specific stems identical book-wide',
       len(set(vstems)) == len(vstems),
       '%d distinct of %d' % (len(set(vstems)), len(vstems)))
    bad = []
    for st in {(q['set']['field'], q['set']['passage']['strand'])
               for q in qs if q['set'].get('passage')}:
        t = [re.sub(r'\s+', ' ', q['stem']).strip() for q in qs
             if q['slot'] in VARIABLE_SLOTS and q['set'].get('passage')
             and (q['set']['field'], q['set']['passage']['strand']) == st]
        if len(set(t)) != len(t):
            bad.append(st)
    ck('E5 no passage-specific stem repeated inside a strand', not bad,
       '%d strands with a repeat' % len(bad))
    ck('E6 no second person in a stem', not any('second person' in m and 'stem' in m
                                                for _, fs in qres for g in fs for m in g))
    ck('E7 no contractions in a stem', not any('contraction' in m
                                               for _, fs in qres for g in fs for m in g))
    ck('E8 no British forms in a stem', not any('British forms in stem' in m
                                                for _, fs in qres for g in fs for m in g))
    ck('E9 transitions stems carry a blank',
       all('___' in str(q.get('carrier') or '') for q in qs if q['type'] == 'transitions'))
    ck('E10 synthesis stems carry three or four notes',
       all(R['notes_min'] <= len(q.get('notes') or []) <= R['notes_max']
           for q in qs if q['type'] == 'synthesis'))

    # --- F. grounding ------------------------------------------------------
    gm = [m for _, fs in qres for m in fs[7]]
    badstem = [q['qid'] for q in qs for sp in quoted(q.get('stem'))
               if re.sub(r'\s+', ' ', sp).strip() not in flat_of(q['set'])]
    ck('F1 every quoted span in a stem verbatim', not badstem, '%d bad' % len(badstem))
    badopt = [q['qid'] for q in qs for o in (q.get('options') or []) for sp in quoted(o)
              if re.sub(r'\s+', ' ', sp).strip() not in flat_of(q['set'])]
    ck('F2 every quoted span in an option verbatim', not badopt, '%d bad' % len(badopt))
    ck('F3 evidence options all quotations', not any('is not a quotation' in m for m in gm))
    ck('F4 words-in-context target shares the Book 1 word family',
       not any('shares no word family' in m for m in gm))
    ck('F5 that target appears verbatim in the passage',
       not any('does not appear in the passage' in m for m in gm))
    ck('F6 transitions carrier built from the passage',
       not any('transitions carrier shares no' in m for m in gm))
    ck('F7 synthesis notes traceable', not any('not traceable' in m for m in gm))
    ck('F8 cross-text sibling exists and shares the strand',
       not any('sibling' in m and ('does not exist' in m or 'same strand' in m) for m in gm))
    ck('F9 sibling exactly one level away', not any('one level away' in m for m in gm))
    ck('F10 no key imports a particular absent from the text',
       not any('imports particulars' in m for m in gm))

    # --- G. answer key -----------------------------------------------------
    whys = [re.sub(r'\s+', ' ', str(q.get('why') or '')).strip() for q in qs]
    traps = [re.sub(r'\s+', ' ', str(q.get('trap') or '')).strip() for q in qs]
    ck('G1 every question has a why', all(whys))
    ck('G2 why inside its word band',
       all(R['why_words'][0] <= len(t.split()) <= R['why_words'][1] for t in whys if t))
    ck('G3 every question has a trap', all(traps))
    ck('G4 trap inside its word band',
       all(R['trap_words'][0] <= len(t.split()) <= R['trap_words'][1] for t in traps if t))
    ck('G5 every trap names a letter', all(re.search(r'\b[A-D]\b', t) for t in traps if t))
    ck('G6 no why duplicated', len(set(whys)) == len(whys),
       '%d distinct of %d' % (len(set(whys)), len(whys)))
    ck('G7 no trap duplicated', len(set(traps)) == len(traps),
       '%d distinct of %d' % (len(set(traps)), len(traps)))
    ck('G8 no British forms in why or trap',
       not any(british(t) for t in whys + traps))
    ck('G9 no second person in why or trap',
       not any(SECOND_PERSON.search(t) for t in whys + traps))
    ck('G10 answer key covers every question exactly once',
       len({q['qid'] for q in qs}) == nq and nq > 0, '%d rows' % nq)

    # --- H. Arabic ---------------------------------------------------------
    sums = [s.get('summary_ar') or {} for s in sets]
    ck('H1 two hundred summaries', len(sums) == 200 and all(sums))
    ck('H2 four parts in every summary',
       all(all(a.get(p) for p in AR['parts']) for a in sums))
    counts = [sum(len(arabic_words(a.get(p, ''))) for p in AR['parts']) for a in sums]
    ck('H3 summary length inside band',
       all(AR['words_min'] <= c <= AR['words_max'] for c in counts),
       'shortest %d longest %d' % (min(counts) if counts else 0, max(counts) if counts else 0))
    shares = [script_share(' '.join(a.get(p, '') for p in AR['parts'])) for a in sums]
    ck('H4 at least %d per cent Arabic script' % (AR['script_share_min'] * 100),
       all(x >= AR['script_share_min'] for x in shares),
       'lowest %.3f' % (min(shares) if shares else 0))
    allow = {w.lower() for w in AR['latin_allowlist']}
    leak = []
    for a in sums:
        for w in wordlist(' '.join(a.get(p, '') for p in AR['parts'])):
            if w.lower() not in allow:
                leak.append(w)
    ck('H5 no Latin outside the allowlist', not leak, ', '.join(sorted(set(leak))[:6]))
    ck('H6 field named in Arabic in every summary',
       all(AR['field_names'][s['field']] in ' '.join(
           (s.get('summary_ar') or {}).get(p, '') for p in AR['parts']) for s in sets))
    ck('H7 the level move named in Arabic in every summary',
       all(AR['move_names'][SPEC['moves'][s['level']]] in ' '.join(
           (s.get('summary_ar') or {}).get(p, '') for p in AR['parts']) for s in sets))
    ck('H8 the test named in Arabic in every summary',
       all(AR['test_name'] in ' '.join(
           (s.get('summary_ar') or {}).get(p, '') for p in AR['parts']) for s in sets))
    joined = [' '.join(a.get(p, '') for p in AR['parts']) for a in sums]
    ck('H9 no two summaries identical', len(set(joined)) == len(joined),
       '%d distinct of %d' % (len(set(joined)), len(joined)))
    ck('H10 the test-relation part at least %d words' % AR['sila_words_min'],
       all(len(arabic_words(a.get('sila', ''))) >= AR['sila_words_min'] for a in sums))

    # --- I. document -------------------------------------------------------
    docx = os.path.join(ROOT, 'build', 'Reading-the-Five-Fields.docx')
    dxml = ''
    if os.path.exists(docx):
        import zipfile
        with zipfile.ZipFile(docx) as z:
            dxml = ''.join(z.read(n).decode('utf8', 'replace') for n in z.namelist()
                           if n.startswith('word/') and n.endswith('.xml'))
        dxml = re.sub(r'<[^>]+>', '', dxml)
    pdf = os.path.join(ROOT, 'build', 'Reading-the-Five-Fields.pdf')
    txt = ''
    if os.path.exists(pdf):
        try:
            txt = subprocess.run(['pdftotext', '-layout', pdf, '-'],
                                 capture_output=True, text=True, timeout=300).stdout
        except Exception:
            txt = ''
    BIDI = {ord(c): None for c in
            '\u200e\u200f\u202a\u202b\u202c\u202d\u202e\u2066\u2067\u2068\u2069'}
    txt = txt.translate(BIDI)
    flatpdf = pdfnorm(txt)
    arpdf = arnorm(txt)
    pages = txt.split('\f')
    have = bool(flatpdf)
    ck('I1 the document has been built', have, '%d pages' % (len(pages) - 1 if have else 0))
    ck('I2 every passage title in the document',
       have and all(re.sub(r'\s+', ' ', p['title']) in flatpdf for p in passages.values()))
    miss = [q['qid'] for q in qs if have and pdfnorm(q['stem'])[:48] not in flatpdf]
    ck('I3 every question stem in the document', have and not miss, '%d missing' % len(miss))
    optmiss = [q['qid'] for q in qs if have and any(
        pdfnorm(o).strip()[:40] not in flatpdf for o in q['options'])]
    ck('I4 every option in the document', have and not optmiss, '%d missing' % len(optmiss))
    # The Arabic is verified against the .docx, which is what was written, rather
    # than against a PDF text layer: pdftotext reorders the lam-alef ligature, so
    # an exact match there fails on correctly rendered Arabic. The render is held
    # to a weaker but still meaningful claim -- that one page per set carries
    # Arabic script at all.
    dxn = arnorm(dxml)
    armiss = [s['id'] for s in sets
              for part in AR['parts']
              if dxml and arnorm((s.get('summary_ar') or {}).get(part, ''))[:60] not in dxn]
    arpages = sum(1 for pg in pages if any('\u0600' <= c <= '\u06ff' for c in pg))
    ck('I5 every Arabic summary in the document and rendered',
       bool(dxml) and not armiss and have and arpages >= len(sets),
       '%d parts missing, %d rendered pages carry Arabic' % (len(armiss), arpages))
    ck('I6 Appendix E present', have and 'Appendix E' in flatpdf)
    keymiss = [q['qid'] for q in qs if have and pdfnorm(q['why'])[:40] not in flatpdf]
    ck('I7 every answer-key explanation in the document', have and not keymiss,
       '%d missing' % len(keymiss))
    code = re.compile(r'(HIS|BIO|PHY|HUM|SOC)\s*·?\s*S\d\d')
    # The rule is about the body: one passage to a page. Appendix E lists every
    # passage's code beside its answer rows, so it is not in scope.
    end = next((j for j, pg in enumerate(pages) if 'Appendix A' in pg), len(pages))
    multi = [j for j, pg in enumerate(pages[:end], 1) if len(code.findall(pg)) > 1]
    ck('I8 no body page carries two passage codes', have and not multi,
       '%d of %d body pages' % (len(multi), end))
    ck('I9 the Arabic part headings present', bool(dxml) and all(
        arnorm(AR['part_headings'][p]) in dxn for p in AR['parts']))
    ck('I10 page count inside the declared band',
       have and 880 <= len(pages) - 1 <= 1040, '%d pages' % (len(pages) - 1 if have else 0))

    # --- J. no regression --------------------------------------------------
    pr = subprocess.run([sys.executable, os.path.join(ROOT, 'tools', 'checks.py')],
                        capture_output=True, text=True).stdout
    m = re.search(r'SUMMARY: (\d+)/(\d+) passage-level passes, (\d+)/(\d+) book-level', pr)
    ck('J1 the six hundred passage passes still green', bool(m) and m.group(1) == m.group(2),
       m.group(1) + '/' + m.group(2) if m else 'no summary')
    ck('J2 the eight original book checks still green', bool(m) and m.group(3) == m.group(4),
       m.group(3) + '/' + m.group(4) if m else 'no summary')
    man = subprocess.run([sys.executable, os.path.join(ROOT, 'tools', 'manifest.py')],
                         capture_output=True, text=True).stdout
    ck('J3 no passage text changed', '0 differences' in man, man.strip().splitlines()[0] if man else '')
    mf = json.load(open(os.path.join(ROOT, 'data', 'manifest.json')))
    ck('J4 no passage title changed',
       all(mf[i]['title'] == p['title'] for i, p in passages.items() if i in mf))
    ck('J5 no vocab_link changed',
       all(mf[i]['vocab_link'] == sorted(p.get('vocab_link') or [])
           for i, p in passages.items() if i in mf))
    ck('J6 all two hundred Book 1 words still linked',
       'all 200 Words in Context words linked' in pr and 'ok   all 200' in pr)
    ck('J7 the measured ladders unchanged', 'Flesch-Kincaid rises with every level' in pr
       and 'median word rank rises with every level' in pr)
    nfail = sum(1 for _, fs in qres for g in fs for _ in g)
    npass = sum(1 for _, fs in qres for g in fs if not g)
    ck('J8 the per-question passes green', npass == len(qres) * 10 and nfail == 0,
       '%d of %d' % (npass, len(qres) * 10))
    v1 = subprocess.run([sys.executable, os.path.join(
        os.path.dirname(ROOT), 'sat-vocabulary', 'tools', 'checks.py')],
        capture_output=True, text=True).stdout
    ck('J9 Book 1 still at 600 of 600 and 25 of 25',
       '600/600 item-level passes, 25/25 book-level checks' in v1)
    rt = True
    for p in sorted(glob.glob(os.path.join(ROOT, 'data', 'questions', '*.yaml'))):
        try:
            yaml.safe_load(yaml.safe_dump(yaml.safe_load(open(p)), allow_unicode=True))
        except Exception:
            rt = False
    ck('J10 the question data round-trips through YAML', rt and nfiles > 0)

    # No check in families A to I may pass vacuously. Until the book is whole --
    # 200 sets, 2,000 questions -- an "all of nothing is true" result is a
    # failure, not a pass.
    if (len(sets) != 200 or nq != 2000) and '--partial' not in sys.argv:
        out = [(lab, (good if lab[0] == 'J' else False), det) for lab, good, det in out]
    return out


def main():
    passages, sets = load()
    qres = per_question(passages, sets)
    nfail = sum(1 for _, fs in qres for g in fs if g)
    total = len(qres) * 10
    ok = total - nfail
    shown = 0
    for q, fs in qres:
        for g in fs:
            for m in g:
                if shown < 60:
                    print('FAIL %-22s %s' % (q['qid'], m))
                    shown += 1
    if nfail > 60:
        print('... %d more failing passes' % (nfail - 60))
    print('=' * 74)
    print('PER-QUESTION CHECK PASSES: %d (%d questions x 10)' % (total, len(qres)))
    print('  passed: %d   failed: %d' % (ok, nfail))
    print('=' * 74)
    bc = book_checks(passages, sets, qres)
    print()
    print('BOOK-LEVEL CHECKS')
    for label, good, detail in bc:
        print('%-4s %-62s %s' % ('ok' if good else 'FAIL', label, detail))
    bok = sum(1 for _, g, _ in bc if g)
    print()
    print('SUMMARY: %d/%d per-question passes, %d/%d book-level checks'
          % (ok, total, bok, len(bc)))
    sys.exit(0 if nfail == 0 and bok == len(bc) else 1)


if __name__ == '__main__':
    main()
