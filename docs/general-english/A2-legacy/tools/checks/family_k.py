"""K · Regression and drift guards — 21 checks.

These are the checks that watch the other 212 and the spec they come from.
"""
import os, re, json, hashlib, yaml
from . import check, ok, fail, expect, REGISTRY


@check('K01', 'spec/golden.sha256', 'golden.yaml hash matches the frozen value', scope='book')
def k01(units, ctx):
    p = os.path.join(ctx.root, 'spec', 'golden.yaml')
    want = open(os.path.join(ctx.root, 'spec', 'golden.sha256')).read().strip()
    got = hashlib.sha256(open(p, 'rb').read()).hexdigest()
    return expect(got == want, f'golden.yaml changed: {got[:16]} != {want[:16]}')

@check('K02', 'runner', 'Every unit validated against the golden spec, never against a sibling', scope='book')
def k02(units, ctx):
    return expect(ctx.spec_source == 'spec/golden.yaml',
                  f'spec came from {ctx.spec_source}')

@check('K03', 'runner', 'Editing any unit re-runs all checks on all units', scope='book')
def k03(units, ctx):
    n_unit = sum(1 for c in REGISTRY.values() if c.scope == 'unit')
    want = n_unit * len(units)
    return expect(ctx.unit_executions == want,
                  f'{ctx.unit_executions} unit-scope executions, want {n_unit} x {len(units)} = {want}')

@check('K04', 'runner', 'Full-book revalidation before every release', scope='book')
def k04(units, ctx):
    expected = ctx.expected_units
    return expect(len(units) == expected or ctx.partial,
                  f'{len(units)} units validated, book expects {expected}')

@check('K05', 'golden.devices', 'Per-unit device counts diffed against the source, printed', scope='book')
def k05(units, ctx):
    rows = []
    for u in units:
        for name, d in ctx.spec['devices'].items():
            n = len(re.findall(d['pattern'], u.text, re.M))
            want = d.get('exact', f"{d.get('min')}-{d.get('max')}")
            rows.append((u.num, name, n, want))
    ctx.reports['K05'] = rows
    bad = [r for r in rows if isinstance(r[3], int) and r[2] != r[3]]
    return expect(not bad, f'{len(bad)} device-count diffs, e.g. {bad[:3]}')

@check('K06', 'golden.sections', 'Heading sequence diffed against the golden order', scope='book')
def k06(units, ctx):
    want = [s['part'] for s in ctx.spec['sections']]
    bad = [u.num for u in units if [p.name for p in u.parts] != want]
    return expect(not bad, f'units with a different part order: {bad}')

@check('K07', 'ledgers/lexis', 'Cumulative vocabulary ledger never loses an entry', scope='book')
def k07(units, ctx):
    led = ctx.lexis['units']
    missing = []
    # An unquoted glossary word that YAML reads as a boolean is lost silently:
    # `false` in Unit 20's list parsed as the boolean False, and every consumer
    # then matched the string "false" instead of the word (found 2026-10-07,
    # before Unit 20 was written). YAML coerces y/n/yes/no/on/off/true/false in
    # any case, so the ledger is type-checked here rather than trusted. Entries
    # for units not yet written are checked too, which is the point -- the
    # whole list is fixed up front.
    for un, rec in sorted(led.items()):
        for w in rec.get('words', []):
            if not isinstance(w, str):
                missing.append(f'U{un}: {w!r} is {type(w).__name__}, '
                               f'not a string -- quote it in ledgers/lexis.yaml')
    for u in units:
        g = next((s for s in u.subs if s.heading.endswith('Glossary')), None)
        words = []
        for l in (g.lines if g else []):
            if l.startswith('>') and '·' in l:
                words = [w.strip() for w in l.lstrip('> ').split('·')]
        recorded = [str(w) for w in led.get(u.num, {}).get('words', [])]
        if sorted(w.lower() for w in words) != sorted(w.lower() for w in recorded):
            missing.append(f'U{u.num}: book {words} vs ledger {recorded}')
    return expect(not missing, '; '.join(missing))

@check('K08', 'ledgers/cast', 'Cast fact ledger never contradicted across both volumes', scope='book')
def k08(units, ctx):
    jobs = {k: str(v['job']) for k, v in ctx.cast['people'].items()}
    bad = []
    for u in units:
        for name, job in jobs.items():
            for other, ojob in jobs.items():
                if other == name or ojob == job:
                    continue
                head = str(ojob).split()[0]
                if re.search(rf'\b{name}\b[^.]{{0,25}}\bis an? {head}\b', u.text, re.I):
                    bad.append(f'U{u.num}: {name} given {other}\'s job')
    return expect(not bad, '; '.join(bad))

@check('K09', 'ledgers/grammar', 'Each grammar point is introduced exactly once', scope='book')
def k09(units, ctx):
    pts = [str(r['point']) for r in ctx.grammar['spine'].values()]
    dupes = [p for p in set(pts) if pts.count(p) > 1]
    return expect(not dupes, f'duplicated spine points: {dupes}')

@check('K10', 'reports', 'No check that passed in the last build fails in this one', scope='book')
def k10(units, ctx):
    prev = ctx.previous_results
    if not prev:
        return ok('no previous run to compare')
    regressed = [k for k, v in prev.items()
                 if v == 'PASS' and ctx.results.get(k, 'PASS') == 'FAIL']
    return expect(not regressed, f'REGRESSIONS: {regressed}')

@check('K11', 'golden.word_budget', "Per-part word counts inside the source's measured envelope")
def k11(u, ctx):
    bad = []
    for p in u.parts:
        b = ctx.spec['word_budget'].get(p.name)
        if not b:
            continue
        if not (b['min'] <= p.prose_words <= b['max']):
            bad.append(f'{p.name}: {p.prose_words} outside {b["min"]}-{b["max"]}')
    tot = ctx.spec['unit']['words']
    # PROSE, not total: figure captions are apparatus and are bounded by G27.
    # The min/max here are the source-derived values and have not moved.
    if not (tot['min'] <= u.prose_words <= tot['max']):
        bad.append(f'unit: {u.prose_words} prose outside {tot["min"]}-{tot["max"]}')
    return expect(not bad, '; '.join(bad))

@check('K12', 'runner', 'A unit cannot be marked done with any check red', scope='book')
def k12(units, ctx):
    bad = [uid for uid, st in ctx.unit_status.items() if st == 'done'
           and any(v == 'FAIL' for k, v in ctx.results.items() if k.endswith(f'@{uid}'))]
    return expect(not bad, f'units marked done while red: {bad}')

@check('K13', 'runner', 'Release is blocked while any check is red', scope='book')
def k13(units, ctx):
    red = [k for k, v in ctx.results.items() if v == 'FAIL']
    return expect(not red or not ctx.releasing, f'release attempted with {len(red)} red checks')

def _fixture_report(ctx, fixture_book):
    import json as _j
    p = os.path.join(ctx.root, 'reports', f'{fixture_book}-mutations.json')
    return _j.load(open(p)) if os.path.exists(p) else None


@check('K14', 'fixtures', 'The check suite is mutation-tested against known-bad fixtures', scope='book')
def k14(units, ctx):
    # The fixtures are literal strings from one book, so the suite runs there and
    # the report is read from there whichever volume is being validated. The
    # mutations test the shared check code, not a volume's prose.
    import level as LV, mutations as MU
    FIXTURE_BOOK = MU.FIXTURE_BOOK_FOR.get(LV.level(ctx.book), MU.FIXTURE_BOOK)
    r = ctx.mutation_report
    if r is None and ctx.book != FIXTURE_BOOK:
        r = _fixture_report(ctx, FIXTURE_BOOK)
    if r is None:
        return fail('mutation test has not been run')
    if r['caught'] != r['total']:
        return fail(f'{r["total"] - r["caught"]} mutations escaped: {r.get("escaped", [])[:8]}')
    if r.get('broken'):
        return fail(f'{len(r["broken"])} mutations could not be applied: '
                    f'{[b["id"] for b in r["broken"]][:8]}')
    d = r.get('deferred', [])
    detail = f'{r["caught"]}/{r["total"]} caught'
    if d:
        # deferred mutations are named, never silently dropped: they come back
        # into play the moment their artefact exists.
        detail += f'; {len(d)} deferred until figures/DOCX/covers or a second unit exist'
    return ok(detail)

@check('K15', 'fixtures', 'Every check has a negative test that it catches', scope='book')
def k15(units, ctx):
    # Four checks cannot be mutation-tested at the lowest level, because at the
    # lowest level they are vacuous by design: F19, K19, K20 and K21 all read
    # the level BELOW this one, and A2 has none. Their fixtures live in the
    # level above's set, and mutations.CROSS_LEVEL names them with that reason
    # rather than letting them sit silently uncovered -- which is exactly the
    # hole K15 exists to close.
    from mutations import MUTATIONS, MUTATIONS_B1, CROSS_LEVEL
    import level as LV
    gates = {c.id for c in REGISTRY.values() if c.gate}
    # The suite is ONE copy of the code, so a fixture that proves a check at any
    # level proves it at every level: MUTATIONS is anchored to A2.1's text and
    # MUTATIONS_B1 carries only the four that A2 structurally cannot test.
    covered = set(MUTATIONS) | set(MUTATIONS_B1) | gates
    if LV.level(ctx.book) == 'A2':
        covered |= set(CROSS_LEVEL)
    missing = sorted(set(REGISTRY) - covered)
    return expect(not missing, f'{len(missing)} checks with no negative test: {missing[:10]}')

@check('K16', 'plan', 'Check count >= 200 is itself asserted', scope='book')
def k16(units, ctx):
    n = len(REGISTRY)
    return expect(n >= 200, f'only {n} checks registered')

@check('K17', 'spec', 'Every spec clause maps to at least one check', scope='book')
def k17(units, ctx):
    claimed = {c.clause.split('.')[0] for c in REGISTRY.values()}
    needed = {'golden', 'typography', 'palette', 'ledgers/cast', 'ledgers/grammar',
              'ledgers/lexis', 'covers', 'build', 'runner', 'fixtures'}
    missing = sorted(n for n in needed if not any(cl.startswith(n.split('/')[0]) or cl == n for cl in claimed))
    return expect(not missing, f'spec areas with no check: {missing}')

@check('K18', 'spec', 'Every check maps to at least one spec clause - no orphans', scope='book')
def k18(units, ctx):
    orphan = [c.id for c in REGISTRY.values() if not c.clause or c.clause == '?']
    return expect(not orphan, f'orphan checks: {orphan}')


# --- K19, K20, K21: the cross-level regression guards ------------------------

_K20_EXPECT: dict = {}

@check('K19', 'ledgers/grammar.spine',
       'Every point of the level below is recycled in >= 3 Spiral Reviews and '
       'none is presented as new', scope='book')
def k19(units, ctx):
    """The lower level's spine is recycled, not re-taught.

    Two clauses, because the first alone is satisfiable by a book that also
    re-teaches. The second reads the Grammar Focus Box specifically: that is
    the one sub-section whose job is to introduce, so a lower-level point
    appearing there is the definition of re-teaching, whatever the unit's
    stated point is.
    """
    import level as LV
    lv = LV.level(ctx.book)
    below = {'B1': 'A2'}.get(lv)
    if below is None:
        return ok(f'{lv} has no level below it')
    p = os.path.join(LV.level_root(ctx.root, below), 'ledgers', 'grammar.yaml')
    if not os.path.exists(p):
        return fail(f'no {below} grammar ledger at {p}')
    low = yaml.safe_load(open(p, encoding='utf-8'))
    if not units:
        return ok(f'no {lv} units yet')
    # A point is "named" when a recognisable piece of its own wording appears.
    # The first version stripped the punctuation BEFORE splitting on it, so
    # every point collapsed to one long key that no text could ever contain --
    # 'present perfect - experience, ever/never' became the single string
    # 'present perfect   experience  ever never'. The check could not fail, and
    # its own mutation fixture escaped, which is what found it. Split first.
    def keys(point):
        parts = re.split(r'\s*/\s*|\s*,\s*|\s+[-\u2014]\s+', str(point).lower())
        out = []
        for i, k in enumerate(parts):
            k = re.sub(r'\s+', ' ', re.sub(r'[^a-z ]', ' ', k)).strip()
            if len(k) > 4 and (i == 0 or ' ' in k):
                out.append(k)
        return out
    counts, retaught = {}, []
    for un, rec in sorted(low['spine'].items()):
        counts[int(un)] = 0
    for u in units:
        spiral = next((s for s in u.subs
                       if s.heading == 'Part 10: Spiral Review'), None)
        box = next((s for s in u.subs
                    if s.heading == 'Part 2: Grammar Focus Box'), None)
        for un, rec in low['spine'].items():
            ks = keys(rec['point'])
            if spiral and any(k in spiral.text.lower() for k in ks):
                counts[int(un)] += 1
            if box and any(k in box.text.lower() for k in ks):
                # Only flag a Focus Box that does not also teach its OWN point:
                # 'present perfect continuous' legitimately names 'present
                # perfect' while introducing the continuous.
                own = ' '.join(keys(ctx.grammar['spine'][u.num]['point']))
                hit = next(k for k in ks if k in box.text.lower())
                if hit not in own:
                    retaught.append(f'U{u.num} Focus Box names {below} U{un} '
                                    f'({hit!r})')
    need = 3
    thin = [f'{below} U{un} in {n} Spiral Reviews' for un, n in sorted(counts.items())
            if n < need]
    if len(units) < 10:
        # Partial volume: the three-review requirement is a whole-volume claim.
        return ok(f'{len(units)} of 10 units; {len(retaught)} re-teaching(s)'
                  if not retaught else f're-teaching: {retaught[:4]}') \
            if not retaught else fail(f're-teaching: {retaught[:4]}')
    bad = retaught + thin
    return expect(not bad, '; '.join(bad[:6]))


@check('K20', 'runner', 'The shared toolchain produces byte-identical output '
                        'for the level below', scope='book')
def k20(units, ctx):
    """The one-symlink toolchain, verified rather than reasoned about.

    `B1/tools` is a symlink to `A2/tools`, so a change made for B1 is a change
    made to A2's toolchain. Nothing moved, so A2's output cannot move -- that
    is the argument, and this is the measurement. It re-draws every one of the
    lower level's figures from that level's own content modules and compares
    the SVG, which is G32 pointed at the other level.
    """
    import importlib.util, level as LV
    lv = LV.level(ctx.book)
    below = {'B1': 'A2'}.get(lv)
    if below is None:
        return ok(f'{lv} has no level below it')
    root = LV.level_root(ctx.root, below)
    if not os.path.isdir(os.path.join(root, 'figures')):
        return ok(f'{below} has no rendered figures')
    import sys
    saved = sys.path[:]
    try:
        import figures as F
        # The expected SVG for the level below depends only on the content
        # modules and the figure code, neither of which a mutation touches --
        # only files on disk do. Caching it is the difference between the
        # mutation suite taking eight minutes and taking over twenty: without
        # it, 820 figures are re-drawn for each of 223 fixtures.
        if not _K20_EXPECT:
            for book in sorted(os.listdir(os.path.join(root, 'figures'))):
                d = os.path.join(root, 'content', book)
                if not os.path.isdir(d):
                    continue
                for fn in sorted(os.listdir(d)):
                    m = re.fullmatch(r'u(\d\d)_figures\.py', fn)
                    if not m:
                        continue
                    spec = importlib.util.spec_from_file_location(
                        f'_k20e_{book}_{m.group(1)}', os.path.join(d, fn))
                    mod = importlib.util.module_from_spec(spec)
                    spec.loader.exec_module(mod)
                    fp = set(ctx.spec['figures'].get('full_page_slots') or [])
                    for slot, make in mod.FIGURES.items():
                        f = make()
                        if slot not in fp:
                            f = F.tighten(f)
                        _K20_EXPECT[(book, int(m.group(1)), slot)] = f.svg()
        # figures.ROOT is resolved from __file__ and is the CURRENT level, so
        # the drawing code is shared but the paths are not. Only `emit` writes;
        # svg() does not touch the filesystem, so nothing of A2's is rewritten.
        bad, n = [], 0
        for (book, unit, slot), want in sorted(_K20_EXPECT.items()):
            p = os.path.join(root, 'figures', book, f'u{unit:02d}-{slot}.svg')
            if not os.path.exists(p):
                continue
            n += 1
            if open(p, encoding='utf-8').read() != want:
                bad.append(f'{book} u{unit:02d}.{slot}')
    finally:
        sys.path[:] = saved
    if not n:
        return ok(f'{below} has no figures to compare')
    return expect(not bad, f'{len(bad)} of {n} {below} figures drift under the '
                           f'shared toolchain: {bad[:6]}')


@check('K21', 'ledgers/grammar.cefrj_disposition',
       'Every CEFR-J grammar family at this level has a declared disposition',
       scope='book')
def k21(units, ctx):
    """The coverage audit, made permanent.

    The B1 plan's first version named 23 of the profile's 29 B1 families and
    nobody could have told without doing this by hand. It reads the profile CSV
    rather than a hand-written list, so it measures the source and not a copy
    of it.
    """
    import csv, level as LV
    lv = LV.level(ctx.book)
    p = os.path.join(ctx.root, 'spec', 'wordlists', 'source', 'grammar.csv')
    if not os.path.exists(p):
        return ok(f'no grammar profile at this level ({p} absent)')
    disp = ctx.grammar.get('cefrj_disposition') or {}
    if not disp:
        return fail('spec/wordlists/source/grammar.csv exists but '
                    'ledgers/grammar.yaml declares no cefrj_disposition')
    rows = list(csv.DictReader(open(p, encoding='utf-8')))
    def lvl(r):
        for c in ('CEFR-J Level', 'Core Inventory', 'EGP', 'GSELO'):
            v = (r.get(c) or '').strip()
            if v:
                return v
        return ''
    fams, nrows = {}, 0
    for r in rows:
        if not lvl(r).upper().startswith(lv):
            continue
        nrows += 1
        fams.setdefault(r['Shorthand Code'].split('.')[0], 0)
        fams[r['Shorthand Code'].split('.')[0]] += 1
    if not fams:
        return fail(f'no {lv} rows found in the grammar profile')
    missing = sorted(set(fams) - set(disp))
    orphan = sorted(set(disp) - set(fams))
    howbad = sorted(f for f, d in disp.items()
                    if d.get('how') not in ('taught', 'recycled'))
    bad = []
    if missing:
        bad.append(f'{len(missing)} families with no disposition: {missing}')
    if orphan:
        bad.append(f'{len(orphan)} dispositions for families not at {lv}: {orphan}')
    if howbad:
        bad.append(f'`how` must be taught or recycled: {howbad}')
    return expect(not bad, '; '.join(bad)) if bad else \
        ok(f'all {len(fams)} {lv} families ({nrows} rows) have a disposition')
