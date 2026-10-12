"""A · Structure — 30 checks."""
import re
from . import check, ok, fail, expect
import model as M

PARTS = ['Warm Up'] + [f'Part {i}' for i in range(1, 11)]
SUBCOUNT = {'Warm Up': 3, 'Part 1': 7, 'Part 2': 7, 'Part 3': 3, 'Part 4': 4,
            'Part 5': 3, 'Part 6': 4, 'Part 7': 5, 'Part 8': 2, 'Part 9': 1, 'Part 10': 3}


@check('A01', 'golden.title_pattern', 'Unit title line present and correctly formed')
def a01(u, ctx):
    return expect(re.match(r'^\*\*Unit \d+: .+\*\*$', u.lines[0]), f'first line: {u.lines[0][:60]!r}')

@check('A02', 'golden.strap_pattern', 'Strap line present: course, level, tracks')
def a02(u, ctx):
    s = u.strap
    need = ['English for Daily Life', 'Level:', '[CORE]', '[PLUS]', 'Parts 7–10']
    missing = [n for n in need if n not in s]
    return expect(not missing, f'strap missing {missing}')

@check('A03', 'golden.sections[0]', 'Warm Up section present')
def a03(u, ctx):
    return expect(u.part('Warm Up'), 'no Warm Up part header')

@check('A04', 'golden.sections[0].subs', 'Warm Up has exactly 3 sub-sections')
def a04(u, ctx):
    p = u.part('Warm Up')
    return expect(p and len(p.subs) == 3, f'Warm Up subs = {len(p.subs) if p else 0}')

@check('A05', 'golden.sections', 'Parts 1-10 all present, in order, none repeated')
def a05(u, ctx):
    got = [p.name for p in u.parts]
    return expect(got == PARTS, f'got {got}')

@check('A06', 'golden.sections[].header', 'Every part header matches **Part N · Name**')
def a06(u, ctx):
    # scan the raw lines, not the parsed parts: a malformed header would simply
    # fail to parse, and the check must see it rather than miss it.
    raw = [l for l in u.lines if re.match(r'^\*\*Part \d+(?![:.\d])', l)]
    bad = [l for l in raw if not re.match(r'^\*\*Part \d+ · .+\*\*$', l)]
    return expect(len(raw) == 10 and not bad, f'{len(raw)} part lines, malformed: {bad}')

@check('A07', 'golden.track_labels', 'Every part header is followed by a track label')
def a07(u, ctx):
    bad = [p.name for p in u.parts if not p.track]
    return expect(not bad, f'no track label on {bad}')

@check('A08', 'golden.track_labels.permitted', 'Track labels drawn from the closed set')
def a08(u, ctx):
    allowed = set(ctx.spec['track_labels']['permitted'])
    bad = [(p.name, p.track) for p in u.parts if p.track not in allowed]
    return expect(not bad, f'unknown label: {bad}')

def _subcount(part):
    def fn(u, ctx):
        p = u.part(part)
        n = len(p.subs) if p else 0
        return expect(n == SUBCOUNT[part], f'{part} subs = {n}, want {SUBCOUNT[part]}')
    return fn

for _i, _p in enumerate(['Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5', 'Part 6'], start=9):
    check(f'A{_i:02d}', 'golden.sections[].subs', f'{_p} sub-section count == {SUBCOUNT[_p]}')(_subcount(_p))

@check('A15', 'golden.sections[Part 7]', 'Part 7 sub-sections are exactly 7A-7E in order')
def a15(u, ctx):
    p = u.part('Part 7')
    got = [s.heading.split(':')[0] for s in p.subs] if p else []
    return expect(got == ['7A', '7B', '7C', '7D', '7E'], f'got {got}')

@check('A16', 'golden.sections[Part 8]', 'Part 8 == leading text + Vocabulary in Context + Discussion')
def a16(u, ctx):
    p = u.part('Part 8')
    got = [s.heading for s in p.subs] if p else []
    want = ['Part 8: Vocabulary in Context', 'Part 8: Discussion']
    return expect(got == want and p.leading, f'got {got}, leading={bool(p and p.leading)}')

@check('A17', 'golden.sections[Part 9]', 'Part 9 == leading text + Decision Task')
def a17(u, ctx):
    p = u.part('Part 9')
    got = [s.heading for s in p.subs] if p else []
    return expect(got == ['Part 9: Decision Task'] and p.leading, f'got {got}')

@check('A18', 'golden.sections[Part 10]', 'Part 10 == Spiral Review + Can-Do + Glossary')
def a18(u, ctx):
    p = u.part('Part 10')
    got = [s.heading for s in p.subs] if p else []
    return expect(got == ['Part 10: Spiral Review', 'Part 10: Can-Do', 'Part 10: Glossary'], f'got {got}')

@check('A19', 'golden.unit.bold_headings', 'Bold-heading count == 110')
def a19(u, ctx):
    n = len(u.bold_headings)
    return expect(n == ctx.spec['unit']['bold_headings'], f'{n} bold headings, want 110')

@check('A20', 'golden.unit.subsections', 'Sub-section total == 42')
def a20(u, ctx):
    n = len(u.subs)
    return expect(n == ctx.spec['unit']['subsections'], f'{n} sub-sections, want 42')

@check('A21', 'golden.sections[Part 10]', 'Glossary is the final sub-section of the unit')
def a21(u, ctx):
    return expect(u.subs and u.subs[-1].heading.endswith('Glossary'), f'last sub: {u.subs[-1].heading if u.subs else None}')

@check('A22', 'golden.sections[Part 10]', 'Can-Do immediately precedes Glossary')
def a22(u, ctx):
    return expect(len(u.subs) >= 2 and u.subs[-2].heading.endswith('Can-Do'),
                  f'penultimate: {u.subs[-2].heading if len(u.subs) > 1 else None}')

@check('A23', 'golden.sections', 'No sub-section heading appears twice')
def a23(u, ctx):
    hs = [s.heading for s in u.subs]
    dupes = {h for h in hs if hs.count(h) > 1}
    return expect(not dupes, f'duplicate headings: {sorted(dupes)}')

@check('A24', 'golden.sections', 'No heading outside the golden schema')
def a24(u, ctx):
    pat = re.compile(r'^(Warm-up: |Part (10|[1-9]): |7[A-E]: )')
    bad = [s.heading for s in u.subs if not pat.match(s.heading)]
    # a bold line that looks like a heading but parses as neither part nor sub
    KNOWN = re.compile(r'^\*\*\*?(\[CORE|\[PLUS|Unit \d+:|Warm Up\*\*|Warm-up: |Part \d|7[A-E]: |'
                       r'Column [AB]\*\*|Model — read this first:|Check before you finish:|'
                       r'Plan \(fill in|Remember:|Watch out!|Word bank:|Gloss:|Model exchange:|'
                       r'Can-Do checklist\*\*|Unit \d+ glossary|🔊|\d+\.|Form\*\*|Job\*\*|Stretch )')
    stray = [l for l in u.lines if l.startswith('**') and not KNOWN.match(l)]
    return expect(not bad and not stray, f'off-schema subs {bad}; stray bold lines {stray[:4]}')

@check('A25', 'golden.sections', 'Full heading sequence diffs clean against the golden order')
def a25(u, ctx):
    got = [(p.name, len(p.subs)) for p in u.parts]
    want = [(p, SUBCOUNT[p]) for p in PARTS]
    # every sub-heading must also carry its own part's number
    misfiled = []
    for p in u.parts:
        if p.name == 'Warm Up':
            continue
        n = p.name.split()[1]
        for sub in p.subs:
            m = re.match(r'^Part (\d+):', sub.heading)
            if m and m.group(1) != n:
                misfiled.append(f'{sub.heading} under {p.name}')
    diff = [(g, w) for g, w in zip(got, want) if g != w]
    return expect(got == want and not misfiled, f'sequence diff: {diff}; misfiled: {misfiled}')

@check('A26', 'golden.sections[Part 2].p2b', 'Part 2 Focus Box carries Form / Use / Example')
def a26(u, ctx):
    s = next((s for s in u.subs if s.heading.endswith('Grammar Focus Box')), None)
    if not s:
        return fail('no Grammar Focus Box')
    t = s.text
    missing = [w for w in ('**Form**', '**Use**', '**Example**') if w not in t]
    return expect(not missing, f'focus box missing {missing}')

@check('A27', 'golden.sections[Part 7].p7a', "Part 7's 7A is a Phrase Bank")
def a27(u, ctx):
    p = u.part('Part 7')
    return expect(p and p.subs and p.subs[0].heading == '7A: Phrase Bank',
                  f'7A is {p.subs[0].heading if p and p.subs else None}')

@check('A28', 'golden.sections[Part 9].p9b', 'Part 9 Decision Task offers three options')
def a28(u, ctx):
    s = next((s for s in u.subs if s.heading.endswith('Decision Task')), None)
    if not s:
        return fail('no Decision Task')
    n = len(re.findall(r'\(([abc])\)', s.text))
    return expect(n >= 3, f'found {n} lettered options, want 3')

@check('A29', 'golden.sections[Part 5]', 'Part 5 has two texts and a Vocabulary in Context')
def a29(u, ctx):
    p = u.part('Part 5')
    hs = [s.heading for s in p.subs] if p else []
    return expect(len(hs) == 3 and hs[1] == 'Part 5: Vocabulary in Context', f'got {hs}')

@check('A30', 'golden.devices.pronunciation', 'Part 1 has exactly one Pronunciation sub-section')
def a30(u, ctx):
    n = sum(1 for s in u.subs if s.heading == 'Part 1: Pronunciation')
    return expect(n == 1, f'{n} Pronunciation sections')
