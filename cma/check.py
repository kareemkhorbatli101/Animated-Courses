# -*- coding: utf-8 -*-
"""Structural, language and arithmetic checks for Set D1.

Three families of check:

  structure  every exercise has as many answers as it has items, every
             question has four options and a real explanation.
  language   terms are introduced before they are used, the register
             gradient holds, and a completed page reads as prose.
  arithmetic every journal entry balances and every identity the handouts
             claim is recomputed from data.py and verified.
"""
import sys, os, re, importlib

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from blanks import answers, plain, stripped
from data import S1, S2, S3

HS = [1, 2, 3, 4, 5, 6]
MONEY = re.compile(r'^\(?\$([\d,]+)(?:\.(\d+))?\)?$')


def cash(s):
    """'$2,016,000' or '($96,000)' back to a number."""
    m = MONEY.match(s.strip())
    if not m:
        return None
    v = float(m.group(1).replace(',', '') + ('.' + m.group(2) if m.group(2) else ''))
    return -v if s.strip().startswith('(') else v


def body_text(H):
    """Every word a student will read in this handout."""
    out = []
    for b in H['blocks']:
        for x in b[1:]:
            out += _flatten(x)
    for b in H.get('key_extra', []):
        for x in b[1:]:
            out += _flatten(x)
    return ' '.join(out)


def _flatten(x):
    if isinstance(x, str):
        return [x]
    if isinstance(x, (list, tuple)):
        out = []
        for y in x:
            out += _flatten(y)
        return out
    if isinstance(x, dict):
        out = []
        for k, v in x.items():
            out += _flatten(k) + _flatten(v)
        return out
    return []


def check_handout(H, seen_terms, bad):
    n = H['n']

    def say(m):
        bad.append('H%d: %s' % (n, m))

    for k in ('title', 'subtitle', 'register', 'lang', 'objectives', 'terms', 'blocks'):
        if not H.get(k):
            say('missing %s' % k)
    for k in ('register', 'collocations', 'pairs', 'nots'):
        if not H['lang'].get(k):
            say('language focus has no %s' % k)

    # ---- structure --------------------------------------------------
    nblank = nmcq = 0
    for b in H['blocks']:
        kind = b[0]
        if kind == 'fill':
            reg, text = b[1], b[2]
            whys = b[3] if len(b) > 3 else {}
            a = answers(text)
            nblank += len(a)
            if reg not in ('R1', 'R2', 'R3'):
                say('a fill block has register %r' % reg)
            if reg == 'R3' and n < 5:
                say('exam-register teaching text appears in handout %d, before the '
                    'student has met the idea at R1 and R2' % n)
            extras = b[4] if len(b) > 4 else []
            if len(extras) < 3:
                say('a fill block offers only %d distractors in its word bank; a bank '
                    'with no wrong answers in it is a crutch, not an exercise'
                    % len(extras))
            for e in extras:
                if e in a:
                    say('%r is both an answer and a distractor in the same bank' % e)
            if not a:
                say('a fill block has no blanks at all')
            for ans in a:
                if not ans.strip():
                    say('an empty blank')
                if len(ans) > 34:
                    say('blank answer %r is too long to write on a rule' % ans)
                if ans not in whys:
                    say('blank %r has no explanation in the key' % ans)
            # the completed page must read as prose
            full = plain(text)
            if '  ' in full or ' ,' in full or ' .' in full:
                say('completed text does not read cleanly: %r'
                    % full[max(0, full.find('  ') - 30):][:70])
            if stripped(text).count('{') or stripped(text).count('}'):
                say('unbalanced braces in a fill block')
        elif kind == 'mcq':
            stem, opts, ai, level, why = b[1], b[2], b[3], b[4], b[5]
            nmcq += 1
            if len(opts) != 4:
                say('question %r has %d options' % (stem[:40], len(opts)))
            if not 0 <= ai <= 3:
                say('question %r has answer index %r' % (stem[:40], ai))
            if len(why) < 60:
                say('question %r has no real explanation' % stem[:40])
            if level not in ('Level A', 'Level B', 'Level C'):
                say('question %r has level %r' % (stem[:40], level))
        elif kind == 'match':
            left, right, ans = b[1], b[2], b[3]
            if len(ans) != len(left):
                say('a matching exercise has %d items and %d answers'
                    % (len(left), len(ans)))
            for a in ans:
                if a not in 'ABCDEFGHIJKL'[:len(right)]:
                    say('matching answer %r is outside the options' % a)
        elif kind == 'sortgrid':
            heads, items, ans = b[1], b[2], b[3]
            if len(ans) != len(items):
                say('a classification grid has %d items and %d answers'
                    % (len(items), len(ans)))
            for a in ans:
                if a and a not in heads[1:]:
                    say('classification answer %r is not one of the columns %r'
                        % (a, heads[1:]))
        elif kind == 'table':
            heads, rows = b[1], b[2]
            for r in rows:
                if len(r) != len(heads):
                    say('a table row has %d cells against %d headers'
                        % (len(r), len(heads)))
        elif kind == 'stmt':
            for row in b[2]:
                if len(row) != 4:
                    say('a statement row is not (label, level, value, style)')
        elif kind == 'journal':
            for ref, nar, lines in b[1]:
                dr = sum(cash(d) or 0 for _a, _l, d, _c in lines)
                cr = sum(cash(c) or 0 for _a, _l, _d, c in lines)
                if dr or cr:
                    if abs(dr - cr) > 0.005:
                        say('entry %s does not balance: debits %s, credits %s'
                            % (ref, dr, cr))

    if nmcq < 7:
        say('only %d exam questions' % nmcq)
    if nblank < 8:
        say('only %d blanks' % nblank)

    # ---- terms ------------------------------------------------------
    for t in H['terms']:
        if len(t) != 4:
            say('glossary row %r is not (term, english, arabic, careful)' % (t[0],))
            continue
        term, eng, ar, _w = t
        if term.lower() in seen_terms:
            say('"%s" is already taught in handout %d' % (term, seen_terms[term.lower()]))
        else:
            seen_terms[term.lower()] = n
        if not eng:
            say('"%s" has no definition' % term)
        if not ar:
            say('"%s" has no Arabic equivalent' % term)
        if not any('؀' <= c <= 'ۿ' for c in ar):
            say('the Arabic column for "%s" contains no Arabic' % term)
    return nblank, nmcq


def check_arithmetic(bad):
    """Recompute everything the handouts assert."""
    def eq(label, a, b_):
        if abs(a - b_) > 0.005:
            bad.append('arithmetic: %s — %s against %s' % (label, a, b_))

    # Scenario 1: the two statements foot, and the bridge closes
    eq('S1 absorption statement foots',
       S1.sales - S1.abs_cogs - S1.sa_total, S1.abs_oi)
    eq('S1 variable statement foots',
       S1.contribution - S1.fixed_total, S1.var_oi)
    eq('S1 bridge closes', S1.abs_oi - S1.var_oi, S1.fmoh_rate * S1.end_inv)
    eq('S1 inventory values differ by the fixed overhead in them',
       S1.end_inv_value_abs - S1.end_inv_value_var, S1.fmoh_rate * S1.end_inv)
    eq('S1 throughput statement foots',
       S1.throughput_margin - S1.thr_period_costs, S1.thr_oi)

    # Scenario 2: two independent routes to absorption income must agree
    for i, (a, b_) in enumerate(zip(S2.absorption_oi(), S2.absorption_oi_long()), 1):
        eq('S2 year %d: reconciliation route against variance route' % i, a, b_)
    eq('S2 cumulative difference is nil', sum(S2.difference()), 0)
    eq('S2 cumulative income is equal under both methods',
       sum(S2.absorption_oi()), sum(S2.variable_oi()))
    for i, (d, v) in enumerate(zip(S2.difference(), S2.volume_variance()), 1):
        # here, and only here, the two coincide because sales equal the denominator
        if S2.sold[i - 1] == S2.denominator:
            eq('S2 year %d: deferral equals the volume variance' % i, d, v)

    # Scenario 3: the swing is the overhead on the unsold units
    eq('S3 swing is the deferred overhead',
       S3.swing, S3.excess_units * S3.rate)
    eq('S3 production to demand gives equal incomes',
       S3.absorption_oi(S3.plan_produce), S3.variable_oi())
    eq('S3 the bonus production level reaches the threshold exactly',
       S3.absorption_oi(S3.min_production_for_bonus), S3.bonus_threshold)

    # Handout 5: the ledger must prove the same difference as the formula
    h5 = importlib.import_module('content.h5')
    abs_charged = h5.COGS_ABS - h5.VOLVAR
    var_charged = h5.COGS_VAR + h5.FIX_ACT
    eq('H5 ledger proves the reconciliation',
       var_charged - abs_charged, abs(S2.difference()[0]))
    eq('H5 applied overhead', h5.FIX_APP, S2.rate * h5.P)
    eq('H5 volume variance', h5.VOLVAR, (h5.P - S2.denominator) * S2.rate)


def main():
    bad, seen = [], {}
    mods = [importlib.import_module('content.h%d' % n) for n in HS]
    totals = [0, 0]
    bodies = {}
    for m in mods:
        H = m.HANDOUT
        nb, nq = check_handout(H, seen, bad)
        totals[0] += nb
        totals[1] += nq
        bodies[H['n']] = body_text(H).lower()

    # a term must not be used in an earlier handout than the one that teaches it,
    # and must be met again after it is taught
    for term, first in seen.items():
        for n in HS:
            if n < first and re.search(r'\b%s\b' % re.escape(term), bodies[n]):
                bad.append('"%s" is used in handout %d but not taught until handout %d'
                           % (term, n, first))
                break
        # the rule that matters: do not gloss a word the handout never uses.
        # body_text does not include the glossary, so one occurrence is a real use.
        if bodies[first].count(term) < 1:
            bad.append('"%s" is glossed in handout %d but never used there'
                       % (term, first))

    check_arithmetic(bad)

    if bad:
        print('\n'.join(bad))
        print('\n%d problem(s)' % len(bad))
        return 1
    print('Set D1: all checks pass')
    print('  %d handouts, %d glossary terms, %d blanks, %d exam questions'
          % (len(HS), len(seen), totals[0], totals[1]))
    return 0


if __name__ == '__main__':
    sys.exit(main())
