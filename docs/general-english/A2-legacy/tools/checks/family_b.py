"""B · Scaffolding quota — 22 checks. Counts are the source's own, per unit."""
import re
from . import check, ok, fail, expect
import model as M

def _count(u, pat):
    return len(re.findall(pat, u.text, re.M))

def _quota(dev_key, cid, desc):
    def fn(u, ctx):
        d = ctx.spec['devices'][dev_key]
        n = _count(u, d['pattern'])
        if 'exact' in d:
            return expect(n == d['exact'], f'{dev_key} = {n}, want {d["exact"]}')
        return expect(d['min'] <= n <= d['max'],
                      f'{dev_key} = {n}, want {d["min"]}-{d["max"]}')
    check(cid, f'golden.devices.{dev_key}', desc)(fn)

_quota('seeded_zero',       'B01', 'Seeded `0.` worked examples == 14')
_quota('not_needed',        'B02', '"one ... is not needed" == 7')
_quota('model_read_first',  'B03', '`Model — read this first:` == 7')

@check('B04', 'golden.source_defects_not_reproduced.D2', 'Every Model is non-empty (source defect D2)')
def b04(u, ctx):
    empty = []
    for p in u.parts:
        for src, where in [(p.leading, p.name)] + [(s.lines, s.heading) for s in p.subs]:
            for i, l in enumerate(src):
                if l.strip() != '**Model — read this first:**':
                    continue
                nxt = [x for x in src[i + 1:i + 4] if x.strip()]
                body = nxt[0] if nxt else ''
                words = len(re.sub(r'[>*]', ' ', body).split())
                if not body.startswith('>') or words < 25:
                    empty.append(f'{where} ({words}w)')
    return expect(not empty, f'empty or stub models: {empty}')

_quota('before_you_read',   'B05', '`Before you read:` == 5')
_quota('before_you_listen', 'B06', '`Before you listen:` == 3')
_quota('check_before',      'B07', '`Check before you finish:` == 5')

@check('B08', 'golden.devices.check_before', 'Every Check-before-you-finish carries >= 3 boxes')
def b08(u, ctx):
    bad = []
    for l in u.lines:
        if '**Check before you finish:**' in l:
            n = l.count('☐')
            if n < 3:
                bad.append(f'{n} boxes: {l[:60]}')
    return expect(not bad, '; '.join(bad))

_quota('word_bank',         'B09', '`Word bank:` in 4-5')
@check('B10', 'golden.devices.gloss', '`Gloss:` == 4, each carrying 2-5 items')
def b10(u, ctx):
    d = ctx.spec['devices']['gloss']
    n = _count(u, d['pattern'])
    if n != d['exact']:
        return fail(f'gloss = {n}, want {d["exact"]}')
    lo, hi = d['items_min'], d['items_max']
    bad = []
    for l in u.lines:
        if '**Gloss:**' not in l:
            continue
        k = len([x for x in l.split('\u00b7') if x.strip()])
        if not lo <= k <= hi:
            bad.append(f'{k} items: {l[:60]}')
    return expect(not bad, f'gloss blocks outside {lo}-{hi}: {bad}')

_quota('useful_language',   'B11', 'Useful language/phrases/questions == 5')
_quota('model_exchange',    'B12', '`Model exchange:` == 2')

@check('B13', 'golden.devices.stretch', 'Stretch == 2, both tagged [PLUS]')
def b13(u, ctx):
    n = len(re.findall(r'\*Stretch \[PLUS\]:', u.text))
    loose = len(re.findall(r'\*Stretch(?! \[PLUS\]:)', u.text))
    return expect(n == 2 and loose == 0, f'{n} tagged, {loose} untagged')

_quota('remember',          'B14', '`Remember:` == 1')

@check('B15', 'golden.devices.watch_out', 'Watch out! == 1 and contains both ✗ and ✓')
def b15(u, ctx):
    hits = [l for l in u.lines if '**Watch out!**' in l]
    if len(hits) != 1:
        return fail(f'{len(hits)} Watch out! blocks')
    l = hits[0]
    return expect('✗' in l and '✓' in l, 'Watch out! has no ✗ → ✓ pair')

@check('B16', 'golden.devices.harvest', 'Harvest == 1 and sits at the end of Part 2')
def b16(u, ctx):
    n = _count(u, '→ Harvest:')
    p = u.part('Part 2')
    tail = p.subs[-1].text if p and p.subs else ''
    return expect(n == 1 and '→ Harvest:' in tail, f'count={n}, in Part 2 tail={"→ Harvest:" in tail}')

@check('B17', 'golden.devices.answer_frame', 'Answer frame == 1 and sits in Part 9')
def b17(u, ctx):
    n = _count(u, 'Answer frame:')
    p = u.part('Part 9')
    inp9 = any('Answer frame:' in s.text for s in (p.subs if p else []))
    return expect(n == 1 and inp9, f'count={n}, in Part 9={inp9}')

_quota('phrase_bank',       'B18', 'Phrase bank == 1, at 7A')
_quota('discussion_frames', 'B19', 'Discussion frames == 1')
_quota('plan_frame',        'B20', '`Plan (fill in, then write):` in 1-2')

@check('B21', 'golden.sections[Part 1].p1b', 'Pronunciation block present with Audio Track N.1')
def b21(u, ctx):
    s = next((s for s in u.subs if s.heading == 'Part 1: Pronunciation'), None)
    if not s:
        return fail('no Pronunciation section')
    return expect(f'Audio Track {u.num}.1' in s.text, 'Pronunciation has no Track N.1')

@check('B22', 'golden.devices', 'Device labels spelled exactly - no near-variants')
def b22(u, ctx):
    variants = [
        (r'Model - read this first', 'hyphen instead of em dash'),
        (r'Model--read this first', 'double hyphen'),
        (r'Check before you finish(?!:)', 'missing colon'),
        (r'Word Bank', 'wrong case'),
        (r'Watch Out', 'wrong case'),
        (r'Useful Language', 'wrong case'),
        (r'Before You (Read|Listen)', 'wrong case'),
        (r'Gloss(?!:)\s*\*\*', 'Gloss without colon'),
    ]
    bad = [why for pat, why in variants if re.search(pat, u.text)]
    return expect(not bad, f'label variants: {bad}')
