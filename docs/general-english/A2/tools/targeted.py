#!/usr/bin/env python3
"""Targeted pass: after chapter N, run N x 10 carefully selected check executions.

Selection is not random and not "the first N x 10 alphabetically". The order is:

  1. every check that has ever failed in this book (reports/*-history.json)
  2. the checks that police what is NEW in this unit - its grammar point, its
     glossary, its figures, its key
  3. the cross-unit checks, which only have teeth once there is more than one unit
  4. the structural and build checks, which must hold for every unit every time
  5. everything else, by family, in defect-density order

Executions are spread across every unit built so far, newest first, so a later
unit never gets a shallower look than an early one.
"""
from __future__ import annotations
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE, os.path.join(HERE, 'checks')]
import checks as C   # noqa: E402
import runner as R   # noqa: E402

# what each unit newly risks
NEW_IN_UNIT = ['E06', 'E07', 'E08', 'E09', 'E25', 'E26',     # its grammar and lexis
               'C04', 'C09', 'C14', 'C15', 'C17', 'C18',     # its exercises
               'D03', 'D04', 'D07', 'D12',                   # its key
               'G01', 'G02', 'G03', 'G14', 'G15', 'G18',     # its figures
               'F03', 'F04', 'F13', 'K11']                   # its cast and length
CROSS_UNIT = ['C11', 'C27', 'E10', 'E11', 'E12', 'F05', 'F06', 'F12',
              'K05', 'K06', 'K07', 'K08', 'K09', 'K10']
STRUCTURAL = ['A05', 'A19', 'A20', 'A25', 'B01', 'B02', 'B03', 'B04',
              'H01', 'H05', 'H06', 'H07', 'J01', 'J02', 'J04', 'J09']
DENSITY = 'EGCDFHBAJKI'      # families that have produced the most defects first


def history_path(book):
    return os.path.join(ROOT, 'reports', f'{book}-history.json')


def load_history(book):
    p = history_path(book)
    return json.load(open(p)) if os.path.exists(p) else {'ever_failed': []}


def record_history(book, results):
    h = load_history(book)
    ever = set(h.get('ever_failed', []))
    ever |= {k.split('@')[0] for k, v in results.items() if v == 'FAIL'}
    h['ever_failed'] = sorted(ever)
    json.dump(h, open(history_path(book), 'w'), indent=1)


def order(book, reg):
    h = load_history(book)
    seen, out = set(), []
    for group in (h.get('ever_failed', []), NEW_IN_UNIT, CROSS_UNIT, STRUCTURAL):
        for cid in group:
            if cid in reg and cid not in seen:
                out.append(cid); seen.add(cid)
    rest = sorted(set(reg) - seen,
                  key=lambda c: (DENSITY.index(c[0]) if c[0] in DENSITY else 99, c))
    return out + rest


def run(book='a21', unit=None, budget=None):
    reg = C.load_all()
    units, keys = R.discover(book)
    if not units:
        print('no units'); return 1
    n = unit or max(u.num for u in units)
    budget = budget or n * 10

    ctx = R.load_ctx(book)
    ctx._keys = keys
    ctx.partial = len(units) < ctx.expected_units
    ctx.unit_executions = sum(1 for c in reg.values() if c.scope == 'unit') * len(units)

    # Half the budget buys BREADTH - one execution each, on the newest unit, of as
    # many distinct checks as it covers. The other half buys DEPTH - the same
    # checks re-run on the earlier units, highest priority first. A targeted pass
    # that only ever ran ten checks deeper would never look anywhere new.
    by_unit = sorted(units, key=lambda x: -x.num)
    ordered = order(book, reg)
    newest = by_unit[0]
    breadth, depth = [], []
    for cid in ordered:
        chk = reg[cid]
        breadth.append((cid, None if chk.scope == 'book' else newest.num))
        if chk.scope != 'book':
            depth += [(cid, u.num) for u in by_unit[1:]]
    half = (budget + 1) // 2
    plan_k, seen = breadth[:half], set(breadth[:half])
    for item in depth + breadth[half:]:
        if len(plan_k) >= budget:
            break
        if item not in seen:
            plan_k.append(item); seen.add(item)
    bynum = {u.num: u for u in units}
    plan = [(cid, bynum.get(n)) for cid, n in plan_k[:budget]]

    rows, fails = [], []
    for cid, u in plan:
        chk = reg[cid]
        subject = u if u is not None else units
        if u is not None:
            ctx.for_unit(u)
        try:
            r = chk.fn(subject, ctx)
        except Exception as e:
            r = C.Result(False, f'{type(e).__name__}: {e}')
        key = f'{cid}@u{u.num:02d}' if u is not None else cid
        verdict = ('SKIP' if r.ok and r.detail.startswith('SKIP')
                   else 'GATE' if (chk.gate and r.ok)
                   else 'PASS' if r.ok else 'FAIL')
        rows.append((key, verdict, chk.desc, r.detail))
        if verdict == 'FAIL':
            fails.append((key, chk.desc, r.detail))

    for k, d, det in fails:
        print(f'FAIL {k:14s} {d}\n       {det[:220]}')
    record_history(book, {k: v for k, v, _, _ in rows})
    rep = {'book': book, 'after_unit': n, 'budget': budget,
           'executions': len(rows),
           'pass': sum(1 for r in rows if r[1] == 'PASS'),
           'fail': len(fails), 'gate': sum(1 for r in rows if r[1] == 'GATE'),
           'skip': sum(1 for r in rows if r[1] == 'SKIP'),
           'checks_used': sorted({k.split('@')[0] for k, *_ in rows}),
           'failures': [{'id': k, 'why': d} for k, _, d in fails]}
    json.dump(rep, open(os.path.join(ROOT, 'reports',
                                     f'{book}-targeted-u{n:02d}.json'), 'w'), indent=1)
    print(f'\ntargeted pass after unit {n}: {len(rows)} executions '
          f'({len(rep["checks_used"])} distinct checks) · {rep["pass"]} pass · '
          f'{rep["fail"]} FAIL · {rep["gate"]} gate · {rep["skip"]} skip')
    return 1 if fails else 0


if __name__ == '__main__':
    a = sys.argv[1:]
    sys.exit(run(a[0] if a else 'a21', int(a[1]) if len(a) > 1 else None))
