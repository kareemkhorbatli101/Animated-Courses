"""E · Language and level — 26 checks."""
import re
from collections import Counter
from . import check, ok, fail, expect
import model as M
import lexis as L

CONTR = re.compile(r"^(i|you|he|she|it|we|they|that|there|who|what|let|don|doesn|didn|isn|aren|wasn|weren|can|couldn|won|wouldn|shouldn|haven|hasn|hadn|mustn)'")

def _exempt(u, ctx):
    names = set()
    for p in ctx.cast['people'].values():
        names |= {w.lower() for w in str(p['full']).split()}
    names |= {str(w['name']).lower() for w in ctx.cast.get('walk_ons', [])
              if w.get('name')}
    for pl in ctx.cast.get('places', []):
        names |= {w.lower() for w in pl.split()}
    for w in ctx.cast.get('street', '').split():
        names.add(w.lower())
    glossed = set()
    for l in u.lines:
        if '**Gloss:**' in l or 'glossary' in l.lower():
            glossed |= {t.lower() for t in L.tokens(l)}
    # every glossary word up to and including this unit has been taught
    for un, rec in ctx.lexis['units'].items():
        if int(un) <= u.num:
            for w in rec.get('words', []):
                glossed |= {t.lower() for t in L.tokens(str(w))}
    # a glossed headword covers its regular inflections
    infl = set()
    for w in glossed:
        infl |= {w + x for x in ('s', 'es', 'ed', 'ing', 'd')}
        if w.endswith('e'):
            infl |= {w[:-1] + x for x in ('ed', 'ing')}
        if w.endswith('y'):
            infl |= {w[:-1] + 'ies', w[:-1] + 'ied'}
    return names | glossed | infl

def _running(u):
    return L.tokens(' '.join(u.sentences))

@check('E01', 'golden.language.min_a2_coverage', '>= 90% of running words inside the A2 band')
def e01(u, ctx):
    ex = _exempt(u, ctx)
    toks = _running(u)
    off = [t for t in toks
           if t.lower() not in ex and not L.in_a2(t)
           and not CONTR.match(t.lower()) and '-' not in t]
    cov = 1 - len(off) / max(1, len(toks))
    lim = ctx.spec['language']['min_a2_coverage']
    worst = [w for w, _ in Counter(t.lower() for t in off).most_common(8)]
    return expect(cov >= lim, f'A2 coverage {cov:.1%} < {lim:.0%}; off-band e.g. {worst}')

@check('E02', 'golden.language', 'Every off-band word is glossed or in the unit glossary')
def e02(u, ctx):
    ex = _exempt(u, ctx)
    off = {t.lower() for t in _running(u)
           if t.lower() not in ex and L.is_b1plus(t) and not CONTR.match(t.lower())}
    return expect(not off, f'ungloss ed B1+ words: {sorted(off)[:10]}')

@check('E03', 'golden.language.mean_sentence_words_max', 'Mean sentence length <= 14 words')
def e03(u, ctx):
    ss = u.sentences
    if not ss:
        return fail('no prose found')
    mean = sum(len(s.split()) for s in ss) / len(ss)
    lim = ctx.spec['language']['mean_sentence_words_max']
    return expect(mean <= lim, f'mean {mean:.1f} > {lim}')

@check('E04', 'golden.language.max_sentence_words', 'No sentence over 25 words')
def e04(u, ctx):
    lim = ctx.spec['language']['max_sentence_words']
    bad = [s for s in u.sentences if len(s.split()) > lim]
    return expect(not bad, f'{len(bad)} long sentences, worst {max((len(s.split()) for s in bad), default=0)}w: {bad[0][:70] if bad else ""}')

@check('E05', 'golden.language.max_clause_depth', 'No subordinate-clause nesting deeper than 2')
def e05(u, ctx):
    SUB = r'\b(because|although|though|while|when|if|that|which|who|since|before|after|so that|unless)\b'
    bad = [s for s in u.sentences if len(re.findall(SUB, s, re.I)) > ctx.spec['language']['max_clause_depth']]
    return expect(not bad, f'{len(bad)} over-nested: {bad[0][:70] if bad else ""}')

@check('E06', 'ledgers/grammar.markers', 'No grammar point appears before the unit that teaches it')
def e06(u, ctx):
    # The source narrates its Part 8 and Part 9 texts in the past simple even in
    # Unit 1, because those parts are the PLUS track for stronger learners.
    # `narrative_exempt` in ledgers/grammar.yaml records which points that covers.
    narrative = set(ctx.grammar.get('narrative_exempt_parts', []))
    nx = {int(x) for x in ctx.grammar.get('narrative_exempt_points', [])}
    exempt = [e.lower() for e in ctx.grammar.get('exempt_phrases', [])]

    def body_of(parts):
        out = []
        for p in u.parts:
            if p.name not in parts:
                continue
            for src in [p.leading] + [s.lines for s in p.subs]:
                RUBRIC = ('Card ', 'Student ', 'Useful ', 'Model exchange',
                          'Answer frame', 'Phrase bank', 'Discussion frames',
                          'Gloss:', 'Word bank', 'Plan (', 'Check ', 'Before you')
                for l in src:
                    if not l.startswith('> ') or l[2:].lstrip().startswith(('**', '○')):
                        continue
                    body = l[2:].lstrip()
                    if body.startswith(RUBRIC):
                        continue          # rubric the book supplies, not prose
                    out.append(body)
        t = ' '.join(out)
        for pat in ctx.grammar.get('exempt_patterns', []):
            t = re.sub(pat, ' ', t, flags=re.I)
        for ph in exempt:
            t = re.sub(re.escape(ph), ' ', t, flags=re.I)
        return t

    core = body_of({p.name for p in u.parts} - narrative)
    allp = body_of({p.name for p in u.parts})
    hits = []
    for unum, pats in (ctx.grammar.get('markers') or {}).items():
        unum = int(unum)
        if unum <= u.num:
            continue
        scope = core if unum in nx else allp
        for p in pats:
            m = re.findall(p, scope, re.I)
            if m:
                hits.append(f'U{unum} marker {p} x{len(m)}')
    return expect(not hits, '; '.join(hits[:6]))

@check('E07', 'golden.language.target_grammar_min_occurrences', "The unit's target grammar occurs >= 8 times")
def e07(u, ctx):
    pats = (ctx.grammar.get('markers') or {}).get(u.num)
    if not pats:
        p2 = u.part('Part 2')
        n = len(re.findall(r'\b\w+(s|ing|ed)\b', p2.header + ' ' + ' '.join(s.text for s in p2.subs))) if p2 else 0
        return expect(n >= 8, f'no marker list for U{u.num}; heuristic count {n}')
    body = ' '.join(u.sentences)
    n = sum(len(re.findall(p, body, re.I)) for p in pats)
    lim = ctx.spec['language']['target_grammar_min_occurrences']
    return expect(n >= lim, f'target grammar occurs {n} times, want >= {lim}')

def _glossary(u):
    s = next((s for s in u.subs if s.heading.endswith('Glossary')), None)
    if not s:
        return []
    for l in s.lines:
        if l.startswith('>') and '·' in l:
            return [w.strip() for w in l.lstrip('> ').split('·')]
    return []

@check('E08', 'golden.unit.glossary_words', 'Glossary length == 10')
def e08(u, ctx):
    g = _glossary(u)
    return expect(len(g) == ctx.spec['unit']['glossary_words'], f'{len(g)} glossary words: {g}')

@check('E09', 'golden.language.glossary_plantings_before_part10', 'Every glossary word occurs >= 3 times before Part 10')
def e09(u, ctx):
    pre = ' '.join(p.header + ' ' + ' '.join(p.leading) + ' ' + ' '.join(s.text for s in p.subs)
                   for p in u.parts if p.name != 'Part 10').lower()
    need = ctx.spec['language']['glossary_plantings_before_part10']
    bad = []
    for w in _glossary(u):
        stem = w.lower().split()[0][:6]
        n = len(re.findall(re.escape(stem), pre))
        if n < need:
            bad.append(f'{w}({n})')
    return expect(not bad, f'under-planted: {bad}')

@check('E10', 'ledgers/lexis', 'No glossary word repeats within a book', scope='book')
def e10(units, ctx):
    seen, d = {}, []
    for u in units:
        for w in _glossary(u):
            k = w.lower()
            if k in seen:
                d.append(f'{w}: U{seen[k]} and U{u.num}')
            seen[k] = u.num
    return expect(not d, '; '.join(d))

@check('E11', 'ledgers/lexis', 'No glossary word repeats across the two books', scope='book')
def e11(units, ctx):
    led = ctx.lexis['units']
    seen, d = {}, []
    for un, rec in sorted(led.items()):
        for w in rec.get('words', []):
            k = str(w).lower()
            if k in seen:
                d.append(f'{w}: U{seen[k]} and U{un}')
            seen[k] = un
    return expect(not d, '; '.join(d))

@check('E12', 'golden.sections[Part 10].p10a', 'Spiral Review recycles >= 2 words from earlier units')
def e12(u, ctx):
    if u.num == 1:
        return ok('unit 1 has nothing to recycle')
    s = next((s for s in u.subs if s.heading.endswith('Spiral Review')), None)
    if not s:
        return fail('no Spiral Review')
    earlier = {str(w).lower() for un, rec in ctx.lexis['units'].items()
               if int(un) < u.num for w in rec.get('words', [])}
    hits = {w for w in earlier if re.search(re.escape(w), s.text, re.I)}
    return expect(len(hits) >= 2, f'recycles {len(hits)}: {sorted(hits)}')

@check('E13', 'golden.language.spelling', 'British spelling throughout')
def e13(u, ctx):
    US = {r'\bcolor\b': 'colour', r'\bcenter\b': 'centre', r'\bneighbor': 'neighbour',
          r'\bfavorite\b': 'favourite', r'\btraveled\b': 'travelled', r'\bpractice\b(?= \w+ing)': 'practise',
          r'\b(?!size|prize|seize)\w{4,}ize\b': '-ise', r'\w+ization\b': '-isation', r'\bgray\b': 'grey',
          r'\btheater\b': 'theatre', r'\bapartment\b': 'flat', r'\bsidewalk\b': 'pavement',
          r'\bvacation\b': 'holiday', r'\bfall\b(?= \d{4})': 'autumn', r'\bmom\b': 'mum'}
    bad = [f'{m}->{v}' for m, v in US.items() if re.search(m, u.text, re.I)]
    return expect(not bad, f'US forms: {bad}')

@check('E14', 'golden.language', 'Contractions in dialogue, sparing in expository text')
def e14(u, ctx):
    scripts = ' '.join(s.text for s in u.subs if 'Audio Track' in s.text)
    reading = ' '.join(s.text for s in u.subs if s.part in ('Part 5', 'Part 8', 'Part 9'))
    APOS = r"\w[’'](s|t|re|ve|ll|m|d)\b"
    dc = len(re.findall(APOS, scripts))
    rw = max(1, len(reading.split()))
    rc = len(re.findall(APOS, reading)) / rw
    return expect(dc >= 3 and rc < 0.03, f'dialogue contractions={dc} (want>=3), reading rate={rc:.1%} (want<3%)')

@check('E15', 'golden.language', 'Typographic apostrophes and quotes only')
def e15(u, ctx):
    bad = [l[:50] for l in u.lines if "'" in l and not re.match(r'^\s*\|', l)]
    return expect(not bad, f'{len(bad)} lines with straight apostrophes, e.g. {bad[:2]}')

@check('E16', 'golden.language', 'No double spaces, no trailing whitespace')
def e16(u, ctx):
    raw = open(u.path, encoding='utf-8').read().split('\n')
    bad = [i + 1 for i, l in enumerate(raw) if '  ' in l.strip() or l != l.rstrip()]
    return expect(not bad, f'lines {bad[:8]}')

@check('E17', 'golden.language', 'No straight quote characters')
def e17(u, ctx):
    bad = [i + 1 for i, l in enumerate(u.lines) if '"' in l]
    return expect(not bad, f'straight quotes on lines {bad[:8]}')

@check('E18', 'golden.language', 'Dash usage follows the source pattern')
def e18(u, ctx):
    bad = []
    if re.search(r'\w--\w', u.text):
        bad.append('double hyphen')
    # a markdown bullet is "- item" at line start, not a spaced hyphen
    body = '\n'.join(l for l in u.lines if not l.lstrip().startswith('- '))
    if re.search(r'\S +- +\S', body):
        bad.append('spaced hyphen where an en/em dash belongs')
    return expect(not bad, f'{bad}')

@check('E19', 'golden.language.time_format', 'Times written 7.00, not 7:00')
def e19(u, ctx):
    bad = re.findall(r'\b\d{1,2}:\d{2}\b', u.text)
    return expect(not bad, f'colon times: {bad[:6]}')

@check('E20', 'golden.source_defects_not_reproduced', 'No occupational jargon from the blocklist')
def e20(u, ctx):
    BLOCK = ['upholstery', 'veneer', 'prototype', 'showroom', 'cutting list', 'quotation',
             'invoice', 'consignment', 'stakeholder', 'KPI', 'logistics', 'procurement',
             'warehouse', 'tariff', 'freight', 'compliance', 'workshop floor', 'apprentice',
             'foreman', 'hardwood', 'softwood', 'MDF', 'varnish', 'swatch']
    hits = [w for w in BLOCK if re.search(rf'\b{re.escape(w)}\b', u.text, re.I)]
    return expect(not hits, f'occupational jargon: {hits}')

@check('E21', 'golden.language', 'Dialogue register differs measurably from expository register')
def e21(u, ctx):
    scripts = [s for s in u.subs if 'Audio Track' in s.text]
    reading = [s for s in u.subs if s.part in ('Part 5', 'Part 8')]
    if not scripts or not reading:
        return fail('missing scripts or reading')
    def rate(subs, pat):
        t = ' '.join(s.text for s in subs)
        return len(re.findall(pat, t)) / max(1, len(t.split()))
    d = rate(scripts, r'\b(I|you|we)\b') - rate(reading, r'\b(I|you|we)\b')
    return expect(d > 0.01, f'1st/2nd person rate difference {d:.3f} - registers too alike')

@check('E22', 'golden.language.fk_grade_max', 'Flesch-Kincaid grade <= 5.0 on continuous text')
def e22(u, ctx):
    def syl(w):
        w = w.lower(); n = len(re.findall(r'[aeiouy]+', w))
        return max(1, n - (1 if w.endswith('e') and n > 1 else 0))
    ss = u.sentences
    words = [w for s in ss for w in L.tokens(s)]
    if not ss or not words:
        return fail('no prose')
    g = 0.39 * len(words) / len(ss) + 11.8 * sum(syl(w) for w in words) / len(words) - 15.59
    lim = ctx.spec['language']['fk_grade_max']
    return expect(g <= lim, f'FK grade {g:.2f} > {lim}')

@check('E23', 'golden.language', 'No more than 2 sentences per text open with a conjunction')
def e23(u, ctx):
    bad = []
    for p in u.parts:
        for s in p.subs:
            n = sum(1 for x in re.split(r'(?<=[.!?])\s+', s.text)
                    if re.match(r'^(And|But|So|Or)\b', x.strip()))
            if n > 2:
                bad.append(f'{s.heading}({n})')
    return expect(not bad, '; '.join(bad))

@check('E24', 'golden.language', 'British date and time formats')
def e24(u, ctx):
    bad = re.findall(r'\b\d{1,2}/\d{1,2}/\d{2,4}\b', u.text)
    bad += re.findall(r'\b\d{1,2}\s*(?:AM|PM)\b', u.text)
    bad += re.findall(r'\b(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2},', u.text)
    return expect(not bad, f'non-British date/time: {bad[:5]}')

@check('E25', 'ledgers/grammar', 'No passive voice before its unit, outside the exempt list')
def e25(u, ctx):
    pas = next((un for un, r in ctx.grammar['spine'].items() if 'passive' in str(r['point'])), 99)
    if u.num >= int(pas):
        return ok(f'passive is taught at U{pas}')
    # `the shop is closed`, `the door is open`, `she is tired` are adjectival at
    # A2, not the passive. Only a true agentless passive counts.
    ADJ = {'closed', 'open', 'tired', 'interested', 'worried', 'married', 'pleased',
           'bored', 'excited', 'finished', 'used', 'broken', 'gone', 'done',
           'wooden', 'golden', 'open', 'often', 'given', 'closed',
           'seven', 'eleven', 'children', 'women', 'kitchen', 'written'}
    hits = [m.group(0) for m in re.finditer(r'\b(?:is|are|was|were)\s+(\w+(?:ed|en))\b',
                                           ' '.join(u.sentences), re.I)
            if m.group(1).lower() not in ADJ]
    return expect(not hits, f'{len(hits)} passive forms before U{pas}: {hits[:4]}')

@check('E26', 'ledgers/lexis', "No later unit's glossary word used earlier without a gloss")
def e26(u, ctx):
    later = {str(w).lower() for un, rec in ctx.lexis['units'].items()
             if int(un) > u.num for w in rec.get('words', [])}
    body = ' '.join(u.sentences).lower()
    glossed = ' '.join(l for l in u.lines if '**Gloss:**' in l).lower()
    hits = [w for w in later if re.search(rf'\b{re.escape(w)}\b', body) and w not in glossed]
    return expect(not hits, f'future glossary words used unglossed: {sorted(hits)[:8]}')
