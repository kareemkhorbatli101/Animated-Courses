"""F · Topic and content — 19 checks."""
import os, re, yaml
from collections import Counter
from . import check, ok, fail, expect
import model as M

@check('F01', 'golden.source_defects_not_reproduced', 'Zero hits on the occupational blocklist')
def f01(u, ctx):
    BLOCK = ['furniture design', 'the factory', 'the company', 'our client', 'the supplier',
             'the department', 'management', 'the manager said', 'production line',
             'quality control', 'the firm', 'head office', 'the contract', 'the tender']
    hits = [w for w in BLOCK if re.search(re.escape(w), u.text, re.I)]
    return expect(not hits, f'occupational framing: {hits}')

@check('F02', 'ledgers/grammar.spine', "Every section ties to the unit's declared topic", gate=True)
def f02(u, ctx):
    topic = ctx.grammar['spine'].get(u.num, {}).get('topic', '?')
    return ok(f'adjudicate 42 sections against topic "{topic}"')

@check('F03', 'ledgers/cast', 'Cast names, jobs and homes match the ledger')
def f03(u, ctx):
    bad = []
    for key, p in ctx.cast['people'].items():
        first = str(p['full']).split()[-1] if key == 'Okonkwo' else key
        if not re.search(rf'\b{re.escape(first)}\b', u.text):
            continue
        for other, q in ctx.cast['people'].items():
            if other == key:
                continue
            pat = rf'{re.escape(first)}[^.]{{0,40}}\b(is|works as) an? {re.escape(str(q["job"]).split()[0])}\b'
            if re.search(pat, u.text, re.I) and str(q['job']) != str(p['job']):
                bad.append(f'{first} given {other}\'s job')
    return expect(not bad, '; '.join(bad))

# The book writes ages out in words far more often than in digits, and the
# original digit-only pattern let `at seventy-one` past a ledger that said 70
# (Unit 14, found 2026-10-07). Both spellings now count, and both the
# copula and an `at <age>` apposition are read, which is the shape the prose
# actually uses.
WORD_AGE = {}
for _t, _b in (('twenty', 20), ('thirty', 30), ('forty', 40), ('fifty', 50),
               ('sixty', 60), ('seventy', 70), ('eighty', 80), ('ninety', 90)):
    WORD_AGE[_t] = _b
    for _i, _u in enumerate(('one', 'two', 'three', 'four', 'five', 'six',
                             'seven', 'eight', 'nine'), start=1):
        WORD_AGE[f'{_t}-{_u}'] = _b + _i
# Only a PRESENT-tense claim can contradict a recorded age. `at twenty-four`
# in `Tomas started at the hospital at twenty-four` is a past age and is
# history, not a conflict; `at 14` is the street number. Reading `at` as an
# age produced both of those as false positives on 2026-10-07, so the pattern
# keeps the copula and `aged` and nothing else.
AGE_RE = re.compile(r'\b(?:is|was)\s+(?:now\s+)?(\d{1,2}|[a-z]+(?:-[a-z]+)?)'
                    r'(?=\s*(?:,|\.|and\b|now\b|years old\b|$))'
                    r'|\baged\s+(\d{1,2}|[a-z]+(?:-[a-z]+)?)\b', re.I)


@check('F04', 'ledgers/cast.facts', 'No sentence contradicts a fact already in the cast ledger')
def f04(u, ctx):
    bad = []
    ages = {k: v.get('age') for k, v in ctx.cast['people'].items()}
    for k, a in ages.items():
        if a is None:
            continue
        allowed = {int(a)} | {int(x) for x in ctx.cast['people'][k].get('ages_also', [])}
        for m in re.finditer(rf'{re.escape(k)}[^.]{{0,40}}', u.text):
            for am in AGE_RE.finditer(m.group(0)):
                tok = (am.group(1) or am.group(2)).lower()
                n = int(tok) if tok.isdigit() else WORD_AGE.get(tok)
                if n is None or not 10 <= n <= 99:
                    continue
                if n not in allowed:
                    bad.append(f'{k} aged {tok}, ledger says {sorted(allowed)}')
    # Amina's opening day is the fact most likely to drift
    # the ledger fact is about Amina's shop, not about every door in the book
    if re.search(r'\b(Amina|the corner shop|the shop downstairs)\b[^.]{0,60}'
                 r'\bopens?\b(?![^.]{0,20}except)[^.]{0,30}\bon Sunday\b',
                 u.text, re.I):
        bad.append('Amina’s shop opens on Sunday; ledger says every day except Sunday')
    return expect(not bad, '; '.join(bad))

@check('F05', 'rubric.story_shape', "No unit repeats another unit's story shape", scope='book', gate=True)
def f05(units, ctx):
    return ok(f'adjudicate story shapes across {len(units)} units')

@check('F06', 'rubric.story_shape', 'Story-shape diversity index above threshold', scope='book')
def f06(units, ctx):
    opens = []
    for u in units:
        p8 = u.part('Part 8')
        first = next((l for l in (p8.leading if p8 else []) if l.startswith('> ') and len(l) > 60), '')
        opens.append(' '.join(first.split()[:6]).lower())
    if len(opens) < 2:
        return ok('too few units to score')
    dup = [k for k, v in Counter(opens).items() if v > 1]
    return expect(not dup, f'identical story openings: {dup}')

@check('F07', 'golden', 'No real brand or company names')
def f07(u, ctx):
    BRANDS = ['Google', 'Amazon', 'Facebook', 'Apple Inc', 'iPhone', 'Nike', 'Tesco',
              'Sainsbury', 'McDonald', 'Starbucks', 'IKEA', 'Microsoft', 'Netflix',
              'Samsung', 'Toyota', 'Coca-Cola', 'WhatsApp', 'Instagram', 'TikTok']
    hits = [b for b in BRANDS if re.search(rf'\b{re.escape(b)}', u.text)]
    return expect(not hits, f'brands: {hits}')

@check('F08', 'golden', 'No real living people')
def f08(u, ctx):
    allowed = {k.lower() for k in ctx.cast['people']}
    allowed |= {w.lower() for p in ctx.cast['people'].values() for w in str(p['full']).split()}
    allowed |= {str(w['name']).lower() for w in ctx.cast.get('walk_ons', [])}
    allowed |= {'alder', 'mr', 'ms', 'mrs'}
    caps = re.findall(r'(?<![.!?]\s)(?<!^)\b([A-Z][a-z]{3,})\b', u.text, re.M)
    unknown = {c for c in caps if c.lower() not in allowed}
    # place names and sentence-initial words are filtered by the gate, not here
    return ok(f'proper nouns to adjudicate: {sorted(unknown)[:12]}')

@check('F09', 'rubric.representation', 'Cultural representation reviewed', gate=True)
def f09(u, ctx):
    return ok('adjudicate representation across cast, scripts and figures')

@check('F10', 'rubric.representation', 'Gender balance within 40-60%')
def f10(u, ctx):
    she = len(re.findall(r'\b(she|her|hers)\b', u.text, re.I))
    he = len(re.findall(r'\b(he|him|his)\b', u.text, re.I))
    tot = she + he
    if tot < 10:
        return ok(f'only {tot} gendered pronouns')
    share = she / tot
    return expect(0.40 <= share <= 0.60, f'she/her is {share:.0%} of {tot} gendered pronouns')

@check('F11', 'rubric.representation', 'No stereotyping by nationality, gender, age or job', gate=True)
def f11(u, ctx):
    return ok('adjudicate for stereotyping')

@check('F12', 'ledgers/grammar.countries', 'Part 8 set outside the UK; no country twice',
       scope='book')
def f12(units, ctx):
    # The twenty countries are a per-level decision -- B1's twenty must not
    # repeat A2's -- so they live in the level's own grammar ledger. A2's list
    # was hardcoded here while only one level existed; it is the fallback, so
    # A2's result is unchanged byte for byte.
    seen, bad = {}, []
    led = ctx.grammar.get('countries')
    COUNTRIES = list(led) if led else A2_COUNTRIES
    for u in units:
        p8 = u.part('Part 8')
        t = ' '.join(p8.leading) if p8 else ''
        cities = ctx.grammar.get('country_cities') or {}
        hit = [c for c in COUNTRIES
               if c in t or any(ci in t for ci in cities.get(c, _cities(c)))]
        if not hit:
            bad.append(f'U{u.num}: no country identified in Part 8'); continue
        for c in hit:
            if c in seen:
                bad.append(f'{c} in U{seen[c]} and U{u.num}')
            seen[c] = u.num
    return expect(not bad, '; '.join(bad))

A2_COUNTRIES = ['South Korea', 'Brazil', 'Japan', 'Morocco', 'Iceland', 'Peru', 'Kenya',
                'Canada', 'Netherlands', 'Vietnam', 'Portugal', 'Norway', 'Singapore',
                'India', 'New Zealand', 'Poland', 'Ghana', 'Mexico', 'Ireland', 'Egypt']


def _cities(c):
    return {'South Korea': ['Seoul', 'Busan'], 'Brazil': ['São Paulo', 'Rio'], 'Japan': ['Tokyo', 'Osaka'],
            'Morocco': ['Fez', 'Rabat'], 'Iceland': ['Reykjavik'], 'Peru': ['Lima', 'Cusco'],
            'Kenya': ['Nairobi'], 'Canada': ['Toronto', 'Montreal'], 'Netherlands': ['Utrecht', 'Amsterdam'],
            'Vietnam': ['Hanoi'], 'Portugal': ['Lisbon', 'Porto'], 'Norway': ['Bergen', 'Oslo'],
            'Singapore': ['Singapore'], 'India': ['Kochi', 'Pune'], 'New Zealand': ['Wellington'],
            'Poland': ['Krakow', 'Gdansk'], 'Ghana': ['Accra'], 'Mexico': ['Oaxaca'],
            'Ireland': ['Galway', 'Cork'], 'Egypt': ['Alexandria', 'Cairo']}.get(c, [])

@check('F13', 'ledgers/cast.street', 'Part 9 is set on or near Alder Street')
def f13(u, ctx):
    p9 = u.part('Part 9')
    t = ' '.join(p9.leading) + ' '.join(s.text for s in p9.subs) if p9 else ''
    names = [k for k in ctx.cast['people']]
    hit = ctx.cast['street'] in t or any(re.search(rf'\b{n}\b', t) for n in names)
    return expect(hit, 'Part 9 names neither the street nor any resident')

@check('F14', 'ledgers/cast', 'Names varied in origin; no name reused for a second character')
def f14(u, ctx):
    firsts = [str(p['full']).split()[0] for p in ctx.cast['people'].values()]
    d = [k for k, v in Counter(firsts).items() if v > 1]
    return expect(not d, f'reused first names: {d}')

@check('F15', 'golden', 'No years, no current events, nothing that dates the book')
def f15(u, ctx):
    years = re.findall(r'\b(19|20)\d{2}\b', u.text)
    return expect(not years, f'years present: {sorted(set(years))}')

@check('F16', 'golden', 'No actionable medical, legal or financial advice')
def f16(u, ctx):
    PAT = [r'\byou should take \w+ (mg|tablets|pills)', r'\bdiagnos', r'\bprescrib',
           r'\binvest in\b', r'\bsue\b', r'\blegal advice\b', r'\bdosage\b']
    hits = [p for p in PAT if re.search(p, u.text, re.I)]
    return expect(not hits, f'advice patterns: {hits}')

@check('F17', 'golden.figures.slots', 'Every figure matches the text it illustrates', gate=True)
def f17(u, ctx):
    return ok(f'adjudicate {len(u.figures)} figures against their sections')

@check('F18', 'golden.figures.caption_pattern', 'Every caption matches what the figure shows', gate=True)
def f18(u, ctx):
    return ok('adjudicate captions: ' + ' | '.join(c for _, _, c in u.figures))


@check('F19', 'ledgers/lexis', 'No glossary word repeats one from another level',
       scope='book')
def f19(u_or_units, ctx):
    """400 glossary words across two levels, none repeated.

    E10 and E11 already stop a repeat inside a level. Nothing could see across
    one, because until B1 there was only one. A B1 unit that glosses `receipt`
    is re-teaching A2 Unit 4, and the learner who worked through A2 is being
    charged a tenth of a unit's glossary for a word they already have.
    """
    import level as LV
    lv = LV.level(ctx.book)
    mine = {}
    for un, rec in (ctx.lexis.get('units') or {}).items():
        for w in rec.get('words', []):
            mine.setdefault(str(w).lower(), []).append(int(un))
    if not mine:
        return ok('no glossary words yet')
    clashes = []
    for other in ('A2', 'B1'):
        if other == lv:
            continue
        p = os.path.join(LV.level_root(ctx.root, other), 'ledgers', 'lexis.yaml')
        if not os.path.exists(p):
            continue
        d = yaml.safe_load(open(p, encoding='utf-8')) or {}
        theirs = {}
        for un, rec in (d.get('units') or {}).items():
            for w in rec.get('words', []):
                theirs.setdefault(str(w).lower(), []).append(int(un))
        for w, units in sorted(theirs.items()):
            if w in mine:
                clashes.append(f'{w!r}: {lv} U{mine[w][0]} and {other} U{units[0]}')
    return expect(not clashes,
                  f'{len(clashes)} glossary words repeat another level: '
                  f'{clashes[:6]}')
