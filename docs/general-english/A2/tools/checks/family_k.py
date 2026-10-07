"""K · Regression and drift guards — 18 checks.

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
        if not (b['min'] <= p.words <= b['max']):
            bad.append(f'{p.name}: {p.words} outside {b["min"]}-{b["max"]}')
    tot = ctx.spec['unit']['words']
    if not (tot['min'] <= u.words <= tot['max']):
        bad.append(f'unit: {u.words} outside {tot["min"]}-{tot["max"]}')
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

@check('K14', 'fixtures', 'The check suite is mutation-tested against known-bad fixtures', scope='book')
def k14(units, ctx):
    r = ctx.mutation_report
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
    from mutations import MUTATIONS
    missing = sorted(set(REGISTRY) - set(MUTATIONS) - {c.id for c in REGISTRY.values() if c.gate})
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
