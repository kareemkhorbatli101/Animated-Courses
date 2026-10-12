"""D · Answer key — 14 checks."""
import re
from . import check, ok, fail, expect
import model as M


@check('D01', 'golden.source_defects_not_reproduced.D1', 'A key section exists for every unit')
def d01(u, ctx):
    return expect(ctx.key is not None and ctx.key.num == u.num,
                  f'no key for unit {u.num}' if not ctx.key else f'key is for unit {ctx.key.num}')

@check('D02', 'checks.A25', 'Key section order == student-book section order')
def d02(u, ctx):
    if not ctx.key:
        return fail('no key')
    order = {s.heading: i for i, s in enumerate(u.subs)}
    seq = [order[k.heading] for k in ctx.key.sections if k.heading in order]
    bad = [(a, b) for a, b in zip(seq, seq[1:]) if a >= b]
    return expect(not bad, f'out-of-order key sections at indices {bad[:4]}')

def _closed(u):
    for s in u.subs:
        if M.mcqs(s) or M.matchings(s) or (M.word_bank(s) and M.gaps(s)) \
           or re.search(r'^\d+\. .+\?$', s.text, re.M):
            yield s

@check('D03', 'golden.source_defects_not_reproduced.D1', 'Every closed item has a key entry')
def d03(u, ctx):
    if not ctx.key:
        return fail('no key')
    bad = []
    for s in _closed(u):
        k = ctx.key.section(s.heading)
        if not k or not k.items:
            bad.append(s.heading)
    return expect(not bad, f'unkeyed: {bad}')

@check('D04', 'golden.source_defects_not_reproduced.D1', 'Key entry count == closed item count')
def d04(u, ctx):
    if not ctx.key:
        return fail('no key')
    bad = []
    for s in _closed(u):
        k = ctx.key.section(s.heading)
        if not k:
            continue
        want = len(M.mcqs(s)) or (len(M.matchings(s).a) if M.matchings(s) else 0) or M.gaps(s)
        got = len([n for n in k.items if n > 0])
        if want and got != want:
            bad.append(f'{s.heading}: {got} keys for {want} items')
    return expect(not bad, '; '.join(bad))

@check('D05', 'golden.sections[kind=matching]', 'Matching keys are valid Column B letters')
def d05(u, ctx):
    bad = []
    for s in u.subs:
        m = M.matchings(s)
        k = ctx.key.section(s.heading) if ctx.key else None
        if not m or not k:
            continue
        letters = {b[0] for b in m.b}
        for n, v in k.items.items():
            if n and re.fullmatch(r'[a-z]', v) and v not in letters:
                bad.append(f'{s.heading} #{n}={v}')
    return expect(not bad, '; '.join(bad))

@check('D06', 'golden.mcq', 'MCQ keys are in {A,B,C,D}')
def d06(u, ctx):
    bad = []
    for s in u.subs:
        if not M.mcqs(s):
            continue
        k = ctx.key.section(s.heading) if ctx.key else None
        if not k:
            continue
        for n, v in k.items.items():
            if n and not re.match(r'\*\*[A-D]\)\*\*', v):
                bad.append(f'{s.heading} #{n}={v[:20]!r}')
    return expect(not bad, '; '.join(bad))

@check('D07', 'golden.sections[kind=gapfill]', 'Gap-fill keys are members of their own word bank')
def d07(u, ctx):
    bad = []
    for s in u.subs:
        wb = M.word_bank(s)
        k = ctx.key.section(s.heading) if ctx.key else None
        if not wb or not M.gaps(s) or not k:
            continue
        bank = {w.lower() for w in wb}
        for n, v in k.items.items():
            a = re.sub(r'[*·].*$', '', v).strip().lower()
            if n and a and a not in bank:
                bad.append(f'{s.heading} #{n}={a!r} not in bank')
    return expect(not bad, '; '.join(bad))

@check('D08', 'golden.sections[kind=ordering]', 'Ordering keys are a permutation of 1-5')
def d08(u, ctx):
    bad = []
    for s in u.subs:
        if 'Number them 1–5' not in s.text:
            continue
        k = ctx.key.section(s.heading) if ctx.key else None
        if not k:
            bad.append(f'{s.heading}: no key'); continue
        nums = sorted(int(m.group(1)) for m in re.finditer(r'— \*\*(\d)\*\*', k.text))
        if nums != [1, 2, 3, 4, 5]:
            bad.append(f'{s.heading}: {nums}')
    return expect(not bad, '; '.join(bad))

@check('D09', 'golden.sections[kind=script_tfng]', 'T/F/NG keys are in {True, False, Not Given}')
def d09(u, ctx):
    bad = []
    for s in u.subs:
        if 'True, False, or Not Given' not in s.text:
            continue
        k = ctx.key.section(s.heading) if ctx.key else None
        if not k:
            bad.append(f'{s.heading}: no key'); continue
        for n, v in k.items.items():
            if n == 0:
                continue
            a = re.sub(r'\*', '', v).split('—')[0].strip().rstrip('.')
            if a not in ('True', 'False', 'Not Given'):
                bad.append(f'{s.heading} #{n}={a!r}')
    return expect(not bad, '; '.join(bad))

def _open_sections(u):
    want = ('Freer Practice', 'Write About', 'Discussing', 'Find the Difference',
            'Role Play', 'Role-Play', 'Mini-Presentation', 'Discussion', 'Decision Task')
    return [s for s in u.subs if any(w in s.heading for w in want)
            or re.search(r'\(\d\d–\d\d words\)', s.heading)]

@check('D10', 'golden.sections[kind=writing]', 'Every open task carries explicit marking points')
def d10(u, ctx):
    bad = []
    for s in _open_sections(u):
        k = ctx.key.section(s.heading) if ctx.key else None
        t = k.text if k else ''
        if not re.search(r'(Marking points|Accept|Must produce|Listen for|No option is wrong|open)', t, re.I):
            bad.append(s.heading)
    return expect(not bad, f'no marking guidance: {bad}')

@check('D11', 'golden.sections[kind=writing]', 'Every open task carries a sample answer')
def d11(u, ctx):
    bad = []
    for s in _open_sections(u):
        k = ctx.key.section(s.heading) if ctx.key else None
        t = k.text if k else ''
        if 'Sample' not in t and 'sample' not in t:
            bad.append(s.heading)
    return expect(not bad, f'no sample answer: {bad}')

@check('D12', 'golden.model_allowance_words', 'Every sample answer meets its own stated word count')
def d12(u, ctx):
    if not ctx.key:
        return fail('no key')
    bad = []
    for k in ctx.key.sections:
        for m in re.finditer(r'>\s*Sample\s*\((\d+) words\):\s*\*(.+?)\*\s*$', k.text, re.M | re.S):
            claimed, body = int(m.group(1)), m.group(2)
            actual = len(re.sub(r'[*_]', '', body).split())
            if abs(actual - claimed) > 2:
                bad.append(f'{k.heading}: claims {claimed}, counts {actual}')
        rng = re.search(r'\((\d\d)–(\d\d) words\)', k.heading)
        if rng:
            for m in re.finditer(r'\((\d+) words\)', k.text):
                n = int(m.group(1))
                if not (int(rng.group(1)) <= n <= int(rng.group(2))):
                    bad.append(f'{k.heading}: sample {n}w outside {rng.group(1)}-{rng.group(2)}')
    return expect(not bad, '; '.join(bad))

@check('D13', 'rubric.key_consistency', 'No key answer contradicts the text it is drawn from', gate=True)
def d13(u, ctx):
    n = len(ctx.key.sections) if ctx.key else 0
    return ok(f'adjudicate {n} key sections against their texts')

@check('D14', 'golden.sections', 'No key content leaks into the student book')
def d14(u, ctx):
    leaks = []
    for s in u.subs:
        for l in s.lines:
            if re.search(r'^(Answer|Answers|Key):', l.strip()):
                leaks.append(f'{s.heading}: {l[:40]}')
            if re.search(r'\*\(given\)\*|Marking points', l):
                leaks.append(f'{s.heading}: key marker in student book')
    return expect(not leaks, '; '.join(leaks))
