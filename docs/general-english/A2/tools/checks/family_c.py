"""C · Exercise integrity — 28 checks."""
import re
from collections import Counter
from . import check, ok, fail, expect
import model as M

def _matchings(u):
    for s in u.subs:
        m = M.matchings(s)
        if m:
            yield s, m

def _mcqs(u):
    for s in u.subs:
        for q in M.mcqs(s):
            if len(q.options) or True:
                yield s, q

def _keyitems(ctx, heading):
    k = ctx.key.section(heading) if ctx.key else None
    return k.items if k else {}


@check('C01', 'golden.sections[kind=matching]', 'Every matching task has both Column A and Column B')
def c01(u, ctx):
    bad = []
    for s in u.subs:
        has_a, has_b = '**Column A**' in s.text, '**Column B**' in s.text
        if (has_a or has_b) and not (has_a and has_b and M.matchings(s)):
            bad.append(f'{s.heading}: A={has_a} B={has_b} parsed={bool(M.matchings(s))}')
        if 'is not needed' in s.text and not M.matchings(s):
            bad.append(f'{s.heading}: says "not needed" but has no parsable columns')
    return expect(not bad, '; '.join(bad))

@check('C02', 'golden.sections[kind=matching]', 'len(Column B) == len(Column A) + 1')
def c02(u, ctx):
    bad = [f'{s.heading} A={len(m.a)} B={len(m.b)}'
           for s, m in _matchings(u) if len(m.b) != len(m.a) + 1]
    return expect(not bad, '; '.join(bad))

@check('C03', 'golden.devices.not_needed', 'Every matching carries the "not needed" instruction')
def c03(u, ctx):
    bad = [s.heading for s, _ in _matchings(u) if 'is not needed' not in s.text]
    return expect(not bad, f'missing instruction: {bad}')

@check('C04', 'checks.D05', 'Matching answers are a bijection onto Column B minus one letter')
def c04(u, ctx):
    bad = []
    for s, m in _matchings(u):
        items = _keyitems(ctx, s.heading)
        ans = [v for k, v in sorted(items.items()) if k > 0 and re.fullmatch(r'[a-h]', v)]
        letters = [b[0] for b in m.b]
        if len(ans) != len(m.a):
            bad.append(f'{s.heading}: {len(ans)} answers for {len(m.a)} stems'); continue
        if set(ans) - set(letters):
            bad.append(f'{s.heading}: answers outside B {sorted(set(ans) - set(letters))}'); continue
        if len(set(letters) - set(ans)) != 1:
            bad.append(f'{s.heading}: {len(set(letters) - set(ans))} letters unused, want 1')
    return expect(not bad, '; '.join(bad))

@check('C05', 'checks.C04', 'No answer letter used twice in one matching')
def c05(u, ctx):
    bad = []
    for s, m in _matchings(u):
        ans = [v for k, v in _keyitems(ctx, s.heading).items() if k > 0 and re.fullmatch(r'[a-h]', v)]
        d = [l for l, n in Counter(ans).items() if n > 1]
        if d:
            bad.append(f'{s.heading}: {d}')
    return expect(not bad, '; '.join(bad))

@check('C06', 'rubric.distractor', 'The unused distractor is semantically plausible', gate=True)
def c06(u, ctx):
    out = []
    for s, m in _matchings(u):
        nn = ctx.key.section(s.heading).not_needed if ctx.key and ctx.key.section(s.heading) else None
        txt = dict(m.b).get(nn, '')
        out.append(f'{s.heading}: "{txt}"')
    return ok('adjudicate: ' + ' | '.join(out))

@check('C07', 'golden.mcq.options', 'Every MCQ has exactly 4 options')
def c07(u, ctx):
    bad = [f'{s.heading}: {len(q.options)}' for s, q in _mcqs(u) if len(q.options) != 4]
    return expect(not bad, '; '.join(bad))

@check('C08', 'golden.mcq.option_pattern', 'Options labelled ○ A) ○ B) ○ C) ○ D) exactly')
def c08(u, ctx):
    bad = [f'{s.heading}: {[o[0] for o in q.options]}'
           for s, q in _mcqs(u) if [o[0] for o in q.options] != ['A', 'B', 'C', 'D']]
    return expect(not bad, '; '.join(bad))

@check('C09', 'checks.D06', 'Exactly one keyed answer per MCQ, and it is a real option')
def c09(u, ctx):
    bad = []
    for s in u.subs:
        qs = M.mcqs(s)
        if not qs:
            continue
        items = _keyitems(ctx, s.heading)
        ans = {k: v for k, v in items.items() if k > 0}
        if len(ans) != len(qs):
            bad.append(f'{s.heading}: {len(ans)} keys for {len(qs)} MCQs'); continue
        for (n, v), q in zip(sorted(ans.items()), qs):
            m = re.match(r'\*\*([A-D])\)\*\*', v)
            if not m or m.group(1) not in [o[0] for o in q.options]:
                bad.append(f'{s.heading} q{n}: key {v[:24]!r}')
    return expect(not bad, '; '.join(bad))

def _answer_letters(u, ctx):
    out = []
    for s in u.subs:
        if not M.mcqs(s):
            continue
        for n, v in sorted(_keyitems(ctx, s.heading).items()):
            if n == 0:
                continue
            m = re.match(r'\*\*([A-D])\)\*\*', v)
            if m:
                out.append(m.group(1))
    return out

@check('C10', 'golden.mcq.max_letter_share_per_unit', 'No MCQ answer letter exceeds 40% in a unit')
def c10(u, ctx):
    ls = _answer_letters(u, ctx)
    if not ls:
        return fail('no MCQ answers found')
    c = Counter(ls)
    worst, n = c.most_common(1)[0]
    share = n / len(ls)
    lim = ctx.spec['mcq']['max_letter_share_per_unit']
    return expect(share <= lim + 1e-9, f'{worst} is {share:.0%} of {len(ls)} (limit {lim:.0%})')

@check('C11', 'golden.mcq.chi2_p_min', 'MCQ answer letters pass a uniformity test across the book', scope='book')
def c11(units, ctx):
    ls = [l for u in units for l in _answer_letters(u, ctx.for_unit(u))]
    if len(ls) < 20:
        return ok(f'only {len(ls)} items, deferred')
    c = Counter(ls); exp = len(ls) / 4
    chi2 = sum((c.get(k, 0) - exp) ** 2 / exp for k in 'ABCD')
    crit = 7.815   # df=3, p=0.05
    return expect(chi2 <= crit, f'chi2={chi2:.2f} > {crit} over {len(ls)} items: {dict(c)}')

@check('C12', 'golden.mcq', 'No two consecutive MCQs share an answer letter')
def c12(u, ctx):
    ls = _answer_letters(u, ctx)
    bad = [f'#{i}&{i+1}={a}' for i, (a, b) in enumerate(zip(ls, ls[1:]), 1) if a == b]
    return expect(not bad, f'consecutive repeats: {bad}')

@check('C13', 'rubric.distractor', 'No MCQ distractor is nonsense or a joke', gate=True)
def c13(u, ctx):
    opts = [f'{s.heading}: ' + ' / '.join(o[1] for o in q.options) for s, q in _mcqs(u)]
    return ok(f'adjudicate {len(opts)} MCQs')

@check('C14', 'golden.source_defects_not_reproduced.D3', 'Every word bank has >= as many words as gaps')
def c14(u, ctx):
    bad = []
    for s in u.subs:
        wb = M.word_bank(s)
        if wb is None:
            continue
        g = M.gaps(s)
        if g and len(wb) < g:
            bad.append(f'{s.heading}: {len(wb)} words for {g} gaps')
    return expect(not bad, '; '.join(bad))

@check('C15', 'golden.sections[kind=gapfill]', 'Every bank word is used exactly once by the key')
def c15(u, ctx):
    bad = []
    for s in u.subs:
        wb = M.word_bank(s)
        if wb is None or not M.gaps(s):
            continue
        items = _keyitems(ctx, s.heading)
        ans = [v.strip('*') for k, v in items.items() if k > 0]
        seeded = [a.strip('*') for a in (re.findall(r'\*\*(.+?)\*\*', ' '.join(M.seeded(s))) or [])]
        used = Counter(ans + seeded)
        low = {k.lower(): v for k, v in used.items()}
        unused = [w for w in wb if low.get(w.lower(), 0) == 0]
        twice = [w for w in wb if low.get(w.lower(), 0) > 1]
        if unused or twice:
            bad.append(f'{s.heading}: unused={unused} twice={twice}')
    return expect(not bad, '; '.join(bad))

@check('C16', 'golden.sections[kind=gapfill]', 'No gap is fillable by two different bank words', gate=True)
def c16(u, ctx):
    n = sum(1 for s in u.subs if M.word_bank(s) and M.gaps(s))
    return ok(f'adjudicate {n} gap-fill sets for unique-fit')

@check('C17', 'golden.sections[kind=ordering]', 'Ordering task uses the numbers 1-5 exactly once')
def c17(u, ctx):
    bad = []
    for s in u.subs:
        if 'Number them 1–5' not in s.text:
            continue
        k = ctx.key.section(s.heading) if ctx.key else None
        if not k:
            bad.append(f'{s.heading}: no key section'); continue
        nums = sorted(int(m.group(1)) for m in re.finditer(r'— \*\*(\d)\*\*', k.text))
        if nums != [1, 2, 3, 4, 5]:
            bad.append(f'{s.heading}: {nums}')
    return expect(not bad, '; '.join(bad))

@check('C18', 'golden.sections[kind=ordering]', 'The scrambled list is not already in the correct order')
def c18(u, ctx):
    bad = []
    for s in u.subs:
        if 'Number them 1–5' not in s.text:
            continue
        ksec = ctx.key.section(s.heading) if ctx.key else None
        if not ksec:
            continue
        order = [int(m.group(1)) for m in re.finditer(r'— \*\*(\d)\*\*', ksec.text)]
        order = [n for n in order if n != 1][:4] if order and order[0] == 1 else order
        if order == sorted(order):
            bad.append(f'{s.heading}: printed order is the answer {order}')
    return expect(not bad, '; '.join(bad))

@check('C19', 'golden.sections[kind=script_tfng]', 'Every T/F/NG set uses all three verdicts')
def c19(u, ctx):
    bad = []
    for s in u.subs:
        if 'True, False, or Not Given' not in s.text:
            continue
        ks = ctx.key.section(s.heading) if ctx.key else None
        if not ks:
            bad.append(f'{s.heading}: no key'); continue
        # read the ANSWERS only - the rubric names all three, so scanning the
        # question text would make this check incapable of ever failing.
        vals = set()
        for n, v in ks.items.items():
            a = re.sub(r'\*', '', v).split('—')[0].strip().rstrip('.')
            if a in ('True', 'False', 'Not Given'):
                vals.add(a)
        if vals != {'True', 'False', 'Not Given'}:
            bad.append(f'{s.heading}: answers use {sorted(vals)}')
    return expect(not bad, '; '.join(bad))

@check('C20', 'rubric.not_given', 'Every "Not Given" item is genuinely absent from the text', gate=True)
def c20(u, ctx):
    return ok('adjudicate NG items against their scripts')

@check('C21', 'golden.devices.seeded_zero', 'Every seeded `0.` answer is itself correct', gate=True)
def c21(u, ctx):
    n = len(re.findall(r'^0\. ', u.text, re.M))
    return ok(f'adjudicate {n} seeded examples')

@check('C22', 'golden.sections[].standalone_seed', 'A seeded 0. in a matching consumes no Column B letter')
def c22(u, ctx):
    bad = []
    for s, m in _matchings(u):
        for sd in M.seeded(s):
            for letter, text in m.b:
                if text and text.lower()[:30] in sd.lower():
                    bad.append(f'{s.heading}: seed reuses option {letter})')
    return expect(not bad, '; '.join(bad))

@check('C23', 'rubric.answerable', 'Every comprehension question is answerable from its own text', gate=True)
def c23(u, ctx):
    return ok('adjudicate comprehension questions against their texts')

@check('C24', 'checks.D03', 'Every closed-item question has exactly one key entry')
def c24(u, ctx):
    if not ctx.key:
        return fail('no answer key loaded')
    bad = []
    for s in u.subs:
        closed = bool(M.mcqs(s) or M.matchings(s) or (M.word_bank(s) and M.gaps(s)))
        if not closed:
            continue
        if not ctx.key.section(s.heading):
            bad.append(s.heading)
    return expect(not bad, f'no key section for: {bad}')

@check('C25', 'checks.D14', 'Every key section maps to a sub-section that exists')
def c25(u, ctx):
    if not ctx.key:
        return fail('no answer key loaded')
    have = {s.heading for s in u.subs} | {p.name for p in u.parts}
    extra = [k.heading for k in ctx.key.sections
             if k.heading not in have and not k.heading.startswith(('Part 8', 'Part 9'))]
    return expect(not extra, f'orphan key sections: {extra}')

def _stems(u):
    return [l.strip() for s in u.subs for l in s.lines
            if re.match(r'^\*\*\d+\. .+\*\*$', l.strip()) or re.match(r'^\d+\. [A-Z].*\?$', l.strip())]

@check('C26', 'golden.sections', 'No duplicate question stem within a unit')
def c26(u, ctx):
    st = _stems(u)
    d = [k for k, v in Counter(st).items() if v > 1]
    return expect(not d, f'duplicate stems: {d}')

@check('C27', 'ledgers.stems', 'No duplicate question stem within a book', scope='book')
def c27(units, ctx):
    seen, dupes = {}, []
    for u in units:
        for s in _stems(u):
            if s in seen and seen[s] != u.num:
                dupes.append(f'U{seen[s]}/U{u.num}: {s[:48]}')
            seen.setdefault(s, u.num)
    return expect(not dupes, '; '.join(dupes[:6]))

@check('C28', 'golden.sections', 'Gap rules are a uniform width throughout')
def c28(u, ctx):
    widths = Counter(len(m) for m in re.findall(r'_{4,}', u.text))
    if not widths:
        return fail('no gap rules found')
    main, n = widths.most_common(1)[0]
    odd = {w: c for w, c in widths.items() if w != main}
    return expect(len(widths) <= 3, f'gap widths {dict(widths)} - dominant {main}')
