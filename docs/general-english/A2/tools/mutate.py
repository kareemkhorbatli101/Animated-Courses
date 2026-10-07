#!/usr/bin/env python3
"""Mutation test: break the book in 217 ways and prove each check catches its own.

A mutation whose artefact does not exist yet (figures, DOCX, covers) is reported
DEFERRED, not caught — K14 counts only the exercisable ones, and the report names
what is still deferred so it cannot be quietly forgotten.
"""
from __future__ import annotations
import copy, json, os, shutil, sys, tempfile, traceback

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE, os.path.join(HERE, 'checks')]

import model as M                 # noqa: E402
import checks as C                # noqa: E402
import runner as R                # noqa: E402
from mutations import MUTATIONS   # noqa: E402

ARTEFACT = {'fig', 'docx', 'styles', 'core', 'zip', 'cover', 'covermeta', 'coverpx',
            'needs_artefact'}
MULTIUNIT = {'needs_units'}
NOFAIL = {'needs_check'}
STATIC = {'registry', 'rename', 'sha'}


def _verdict(chk, subject, ctx):
    try:
        r = chk.fn(subject, ctx)
    except Exception as e:
        return False, f'{type(e).__name__}: {e}'
    return r.ok, r.detail


def run(book='a21', verbose=False):
    reg = C.load_all()
    base_units, base_keys = R.discover(book)
    if not base_units:
        print('no units to mutate'); return 1
    upath = base_units[0].path
    kpath = base_keys[base_units[0].num].path
    good_unit = open(upath, encoding='utf-8').read()
    good_key = open(kpath, encoding='utf-8').read()

    caught, escaped, deferred, broken = [], [], [], []
    tmp = tempfile.mkdtemp(prefix='mutate-')
    try:
        for cid, (kind, fn) in sorted(MUTATIONS.items()):
            chk = reg[cid]
            # --- artefact-dependent mutations: only meaningful once built
            if kind in ARTEFACT:
                deferred.append((cid, f'{kind}: artefact not built')); continue
            if kind in MULTIUNIT:
                deferred.append((cid, f'needs {fn} units; only {len(base_units)} exist')); continue
            if kind in NOFAIL:
                deferred.append((cid, str(fn))); continue

            ctx = R.load_ctx(book)
            ctx.mutation_report = {'total': 1, 'caught': 1, 'escaped': []}
            units, ctx._keys = R.discover(book)
            ctx.partial = True
            ctx.unit_executions = sum(1 for c in reg.values() if c.scope == 'unit') * len(units)
            u = units[0]
            ctx.for_unit(u)

            # --- confirm the check is green before the mutation
            pre_ok, _ = _verdict(chk, u if chk.scope == 'unit' else units, ctx)

            try:
                if kind == 'unit':
                    mp = os.path.join(tmp, os.path.basename(upath))
                    open(mp, 'w', encoding='utf-8').write(fn(good_unit))
                    try:
                        u = M.parse(mp)
                    except Exception as e:
                        # the mutation made the file unparseable - that IS detection
                        caught.append((cid, f'unparseable: {e}')); continue
                    units = [u]; ctx.for_unit(u)
                elif kind == 'key':
                    mp = os.path.join(tmp, os.path.basename(kpath))
                    open(mp, 'w', encoding='utf-8').write(fn(good_key))
                    ctx._keys[u.num] = M.parse_key(mp); ctx.for_unit(u)
                elif kind == 'ctx':
                    fn(ctx)
                elif kind in STATIC:
                    if kind == 'sha':
                        ctx.root = tmp
                        os.makedirs(os.path.join(tmp, 'spec'), exist_ok=True)
                        shutil.copy(os.path.join(ROOT, 'spec', 'golden.yaml'),
                                    os.path.join(tmp, 'spec', 'golden.yaml'))
                        open(os.path.join(tmp, 'spec', 'golden.sha256'), 'w').write(fn(''))
                    elif kind == 'rename':
                        ctx.root = tmp
                        os.makedirs(os.path.join(tmp, 'units'), exist_ok=True)
                        open(os.path.join(tmp, 'units', fn('')), 'w').write('x')
                    elif kind == 'registry':
                        pass
            except AssertionError as e:
                broken.append((cid, str(e))); continue
            except Exception:
                broken.append((cid, traceback.format_exc(limit=1).strip())); continue

            if kind == 'registry':
                # K15-K18 police the suite itself; exercise them by emptying the registry
                saved = dict(C.REGISTRY)
                try:
                    if cid == 'K16':
                        for k in list(C.REGISTRY)[10:]:
                            del C.REGISTRY[k]
                    elif cid == 'K15':
                        import mutations as mut
                        savedm = dict(mut.MUTATIONS); mut.MUTATIONS.clear()
                        ok_after, detail = _verdict(chk, units, ctx)
                        mut.MUTATIONS.update(savedm)
                        (caught if not ok_after else escaped).append((cid, detail))
                        continue
                    elif cid in ('K17', 'K18'):
                        for k in list(C.REGISTRY):
                            del C.REGISTRY[k]
                        if cid == 'K18':
                            C.REGISTRY['Z99'] = C.Check('Z99', '', 'orphan', lambda *a: C.ok())
                    ok_after, detail = _verdict(chk, units, ctx)
                finally:
                    C.REGISTRY.clear(); C.REGISTRY.update(saved)
                (caught if not ok_after else escaped).append((cid, detail))
                continue

            ok_after, detail = _verdict(chk, u if chk.scope == 'unit' else units, ctx)
            if not pre_ok:
                broken.append((cid, 'check was already red before mutation')); continue
            (caught if not ok_after else escaped).append((cid, detail))
            if verbose:
                print(f'{"CAUGHT" if not ok_after else "ESCAPED":7s} {cid}  {detail[:90]}')
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

    total = len(caught) + len(escaped)
    rep = {'total': total, 'caught': len(caught),
           'escaped': [c for c, _ in escaped],
           'deferred': [c for c, _ in deferred],
           'broken': [{'id': c, 'why': w} for c, w in broken]}
    os.makedirs(os.path.join(ROOT, 'reports'), exist_ok=True)
    json.dump(rep, open(os.path.join(ROOT, 'reports', f'{book}-mutations.json'), 'w'), indent=1)

    print(f'mutations: {len(caught)}/{total} caught · {len(escaped)} ESCAPED · '
          f'{len(deferred)} deferred (artefact not built) · {len(broken)} broken')
    if escaped:
        print('  ESCAPED:', ', '.join(c for c, _ in escaped))
    if broken:
        for c, w in broken[:12]:
            print(f'  BROKEN {c}: {w[:110]}')
    return 1 if (escaped or broken) else 0


if __name__ == '__main__':
    sys.exit(run(sys.argv[1] if len(sys.argv) > 1 else 'a21', '-v' in sys.argv))
