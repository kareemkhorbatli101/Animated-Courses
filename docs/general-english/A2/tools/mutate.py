#!/usr/bin/env python3
"""Mutation test: break the book in 217 ways and prove each check catches its own.

A mutation whose artefact does not exist yet (figures, DOCX, covers) is reported
DEFERRED, not caught — K14 counts only the exercisable ones, and the report names
what is still deferred so it cannot be quietly forgotten.
"""
from __future__ import annotations
import copy, json, os, re, shutil, sys, tempfile, traceback

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE, os.path.join(HERE, 'checks')]

import json as _json              # noqa: E402
import model as M                 # noqa: E402
import checks as C                # noqa: E402
import runner as R                # noqa: E402
import mutations as _mut           # noqa: E402
from mutations import MUTATIONS   # noqa: E402

ARTEFACT = {'needs_artefact'}
DOCXKIND = {'docx', 'styles', 'core', 'zip'}
COVERKIND = {'cover', 'covermeta', 'coverpx'}
PDFKIND = {'pdf'}
UNIT2KIND = {'unit2', 'key2'}
KEYALLKIND = {'keyall'}
MULTIUNIT = {'needs_units'}
NOFAIL = {'needs_check'}
STATIC = {'registry', 'rename', 'sha'}

# One copy of tools/ serves both levels, so the fixture set is chosen by the
# level the run is in -- see mutations.for_level and its comment.
import level as _LV                # noqa: E402
_LEVEL = os.path.basename(ROOT)
_SET = _mut.for_level(_LEVEL)


def _apply_png(path, meta):
    """Realise the pixel-level faults a figure mutation can name."""
    from PIL import Image
    im = Image.open(path).convert('RGB')
    changed = False
    w = meta.pop('width', None)
    if w:
        im = im.resize((w, im.height)); changed = True
    h = meta.pop('height', None)
    if h:
        im = im.resize((im.width, h)); changed = True
    if meta.pop('contaminate', None):
        px = im.load()
        for y in range(0, im.height, 3):
            for x in range(0, im.width, 3):
                px[x, y] = (255, 0, 255)
        changed = True
    if meta.pop('mode', None):
        im = im.convert('P'); im.save(path); return
    if meta.pop('bloat', None):
        px = im.load()
        import random
        random.seed(1)
        for y in range(im.height):
            for x in range(im.width):
                px[x, y] = tuple(min(255, c + random.randint(0, 3)) for c in px[x, y])
        changed = True
    if changed:
        im.save(path)


MEMBER = {'docx': 'word/document.xml', 'styles': 'word/styles.xml',
          'core': 'docProps/core.xml'}


def _mutate_zip(path, kind, fn):
    import zipfile
    zin = zipfile.ZipFile(path)
    parts = {n: zin.read(n) for n in zin.namelist()}
    zin.close()
    if kind == 'zip':
        raw = bytearray(open(path, 'rb').read())
        # corrupt a stored member's bytes, leaving the central directory intact,
        # so only a CRC check (which testzip does) can notice
        for i in range(200, min(len(raw), 4000)):
            raw[i] ^= 0xFF
        open(path, 'wb').write(bytes(raw))
        return
    name = MEMBER[kind]
    parts[name] = fn(parts[name].decode('utf8')).encode('utf8')
    with zipfile.ZipFile(path, 'w', zipfile.ZIP_DEFLATED) as z:
        for n, b in parts.items():
            z.writestr(n, b)


def _mutate_cover(cdir, book, kind, fn):
    from PIL import Image
    for side in ('front', 'back'):
        png = os.path.join(cdir, f'{book}-{side}.png')
        jsn = os.path.join(cdir, f'{book}-{side}.json')
        if kind == 'cover':
            r = fn(side)
            if r is None:
                os.remove(png)
            elif r != 'keep':
                Image.open(png).resize(r).save(png)
            continue
        if not os.path.exists(jsn):
            continue
        meta = _json.load(open(jsn))
        meta = fn(meta) or meta
        if kind == 'coverpx':
            im = Image.open(png).convert('RGB')
            if meta.pop('contaminate', None):
                px = im.load()
                for y in range(0, im.height, 2):
                    for x in range(0, im.width, 2):
                        px[x, y] = (255, 0, 255)
            if meta.pop('clone', None):
                other = os.path.join(cdir, f'{book}-{side}.png')
                im = Image.open(other).convert('RGB')
            r = meta.pop('resize', None)
            if r:
                im = im.resize(r)
            im.save(png)
        _json.dump(meta, open(jsn, 'w'))


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
        import figures as _FIGMOD
        _FIG_CLEAN = dict(_FIGMOD.__dict__)
        for cid, (kind, fn) in sorted(_SET.items()):
            # One mutation kind replaces a function in `figures` rather than a
            # file (G33's, which puts a truncating figure job back). Restore the
            # module every time round, so nothing leaks into the next fixture.
            _FIGMOD.__dict__.clear(); _FIGMOD.__dict__.update(_FIG_CLEAN)
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
                elif kind in DOCXKIND:
                    src = os.path.join(ROOT, 'build', f'{book}-u{u.num:02d}.docx')
                    if not os.path.exists(src):
                        deferred.append((cid, 'docx not built')); continue
                    dst = os.path.join(tmp, 'build')
                    shutil.rmtree(dst, ignore_errors=True); os.makedirs(dst)
                    shutil.copy(src, os.path.join(dst, os.path.basename(src)))
                    _mutate_zip(os.path.join(dst, os.path.basename(src)), kind, fn)
                    ctx.root = tmp
                elif kind in KEYALLKIND:
                    # a book-wide check needs the fault in EVERY unit's key
                    for n2, k2 in list(ctx._keys.items()):
                        t = open(k2.path, encoding='utf-8').read()
                        t = re.sub(r'\*\*[A-D]\)\*\*', '**A)**', t)
                        mp = os.path.join(tmp, os.path.basename(k2.path))
                        open(mp, 'w', encoding='utf-8').write(t)
                        ctx._keys[n2] = M.parse_key(mp)
                    ctx.for_unit(u)
                elif kind in UNIT2KIND:
                    # break the SECOND unit, so a cross-unit check has something to find
                    if len(base_units) < 2:
                        deferred.append((cid, 'needs a second unit')); continue
                    u2 = sorted(base_units, key=lambda x: -x.num)[0]
                    u1 = sorted(base_units, key=lambda x: x.num)[0]
                    t2 = open(u2.path, encoding='utf-8').read()
                    if fn == 'same_glossary':
                        g1 = [l for l in open(u1.path, encoding='utf-8').read().split('\n')
                              if l.startswith('> ') and ' · ' in l and len(l.split('·')) == 10]
                        t2 = re.sub(r'(?m)^> [a-z].*·.*·.*$', g1[-1], t2, count=1)
                    elif fn == 'same_story_opening':
                        t1 = open(u1.path, encoding='utf-8').read()
                        h1 = t1.split('**Part 8 ·')[1]
                        l1 = next(l for l in h1.split('\n')
                                  if l.startswith('> ') and len(l) > 60)
                        h2, sep2, tail2 = t2.partition('**Part 8 ·')
                        tail2 = re.sub(r'(?m)^> .{60,}$', l1.replace('\\', ''),
                                       tail2, count=1)
                        t2 = h2 + sep2 + tail2
                    elif fn == 'no_recycling':
                        # strip every earlier-unit glossary word from the Spiral Review
                        import yaml as _y
                        led = _y.safe_load(open(os.path.join(ROOT, 'ledgers',
                                                             'lexis.yaml')))['units']
                        earlier = [str(w) for n2, r2 in led.items() if n2 < u2.num
                                   for w in r2.get('words', [])]
                        head, sep, tail = t2.partition('**Part 10: Spiral Review**')
                        for w in earlier:
                            tail = re.sub(rf'\b{re.escape(w)}\b', 'thing', tail, flags=re.I)
                        t2 = head + sep + tail
                    elif fn == 'repeat_country':
                        # give the newest unit a country an earlier unit already used
                        import yaml as _y
                        used = None
                        for x in sorted(base_units, key=lambda z: z.num):
                            if x.num >= u2.num:
                                break
                            p8 = x.part('Part 8')
                            for c in ('South Korea', 'Seoul', 'Brazil', 'Japan', 'Tokyo'):
                                if any(c in l for l in (p8.leading if p8 else [])):
                                    used = c
                        if used:
                            h2, sep2, tail2 = t2.partition('**Part 8 ·')
                            tail2 = re.sub(r'(?m)^(> .{60,})$',
                                           lambda mm: mm.group(1) + f' This happened in {used}.',
                                           tail2, count=1)
                            t2 = h2 + sep2 + tail2
                    mp = os.path.join(tmp, os.path.basename(u2.path))
                    open(mp, 'w', encoding='utf-8').write(t2)
                    try:
                        mu = M.parse(mp)
                    except Exception as e:
                        caught.append((cid, f'unparseable: {e}')); continue
                    units = [x if x.num != mu.num else mu for x in base_units]
                    if kind == 'key2':
                        k2 = ctx._keys.get(u2.num)
                        stems = [l for l in open(u1.path, encoding='utf-8').read().split('\n')
                                 if re.match(r'^\*\*\d+\. .+\*\*$', l.strip())]
                        if stems:
                            t2b = re.sub(r'(?m)^\*\*\d+\. .+\*\*$', stems[0], t2, count=1)
                            open(mp, 'w', encoding='utf-8').write(t2b)
                            mu = M.parse(mp)
                            units = [x if x.num != mu.num else mu for x in base_units]
                    # a unit-scope check must be handed the MUTATED unit
                    u = mu
                    ctx.for_unit(u)
                elif kind in PDFKIND:
                    srcp = os.path.join(ROOT, 'build', f'{book}-u{u.num:02d}.pdf')
                    srcd = os.path.join(ROOT, 'build', f'{book}-u{u.num:02d}.docx')
                    if not os.path.exists(srcp):
                        deferred.append((cid, 'pdf not built')); continue
                    dst = os.path.join(tmp, 'build')
                    shutil.rmtree(dst, ignore_errors=True); os.makedirs(dst)
                    shutil.copy(srcd, os.path.join(dst, os.path.basename(srcd)))
                    raw = open(srcp, 'rb').read()
                    if fn == 'one_page':
                        raw = re.sub(rb'/Type\s*/Page([^s])', rb'/Typ3 /Page\1', raw, count=90)
                    elif fn == 'no_pages':
                        raw = re.sub(rb'/Type\s*/Page([^s])', rb'/Typ3 /Page\1', raw)
                    open(os.path.join(dst, os.path.basename(srcp)), 'wb').write(raw)
                    ctx.root = tmp
                    if fn == 'tofu':
                        ctx.pdf_text = lambda p: 'a page with \ufffd in it'
                elif kind in COVERKIND:
                    src = os.path.join(ROOT, 'covers')
                    if not os.path.isdir(src) or not os.listdir(src):
                        deferred.append((cid, 'covers not built')); continue
                    dst = os.path.join(tmp, 'covers')
                    shutil.rmtree(dst, ignore_errors=True)
                    shutil.copytree(src, dst)
                    _mutate_cover(dst, book, kind, fn)
                    ctx.root = tmp
                elif kind == 'fig':
                    # mutate the figure sidecars (and, where the mutation names a
                    # pixel-level fault, the PNG) in a scratch copy of figures/
                    src = os.path.join(ROOT, 'figures', book)
                    if not os.path.isdir(src) or not os.listdir(src):
                        deferred.append((cid, 'fig: no figures rendered')); continue
                    dst = os.path.join(tmp, 'figures', book)
                    shutil.rmtree(os.path.join(tmp, 'figures'), ignore_errors=True)
                    os.makedirs(os.path.dirname(dst), exist_ok=True)
                    shutil.copytree(src, dst)
                    ctx.root = tmp
                    for jf in sorted(os.listdir(dst)):
                        if not jf.endswith('.json'):
                            continue
                        meta = _json.load(open(os.path.join(dst, jf)))
                        try:
                            meta = fn(meta) or meta
                        except Exception:
                            continue
                        _apply_png(os.path.join(dst, jf[:-5] + '.png'), meta)
                        _json.dump(meta, open(os.path.join(dst, jf), 'w'))
                    # the spec and ledgers still live in the real root
                    ctx.spec_root = ROOT
                elif kind == 'figcode':
                    # The only mutation that changes CODE rather than a file.
                    # G33 reads what a figure job did with the lines it was
                    # given, so its negative test has to be a job that drops
                    # one. The loop head restores `figures` every iteration.
                    fn(_FIGMOD)
                elif kind == 'content':
                    # G34 and G35 read the CONTENT MODULE -- the figure
                    # definitions, not the rendered files -- because what they
                    # check is the choice of glyph for a label, which exists
                    # only in that source. So their negative tests rewrite it in
                    # a scratch copy of content/ and point the root at that.
                    src = os.path.join(ROOT, 'content', book)
                    if not os.path.isdir(src):
                        deferred.append((cid, 'content: no content module')); continue
                    dst = os.path.join(tmp, 'content', book)
                    shutil.rmtree(os.path.join(tmp, 'content'), ignore_errors=True)
                    os.makedirs(os.path.dirname(dst), exist_ok=True)
                    shutil.copytree(src, dst)
                    q = os.path.join(dst, f'u{u.num:02d}_figures.py')
                    open(q, 'w', encoding='utf-8').write(
                        fn(open(q, encoding='utf-8').read()))
                    ctx.root = tmp
                    ctx.spec_root = ROOT
                elif kind == 'svg_below':
                    # K20's negative test. K20 reads the level BELOW this one,
                    # so neither a unit nor a figure mutation of THIS level can
                    # reach it. Copy that level's SVGs and content modules into
                    # the scratch tree, corrupt them, and point this level's
                    # root at a sibling inside it -- which is the only way to
                    # make a cross-level check fail without touching the real
                    # files of a level that is already shipped.
                    import level as LVX
                    below = {'B1': 'A2'}.get(_LEVEL)
                    src = LVX.level_root(ROOT, below) if below else None
                    if not src or not os.path.isdir(os.path.join(src, 'figures')):
                        deferred.append((cid, 'svg_below: no level below')); continue
                    dsub = os.path.join(tmp, 'tree')
                    shutil.rmtree(dsub, ignore_errors=True)
                    for sub in ('figures', 'content'):
                        for dirpath, _, files in os.walk(os.path.join(src, sub)):
                            rel = os.path.relpath(dirpath, src)
                            out = os.path.join(dsub, below, rel)
                            os.makedirs(out, exist_ok=True)
                            for fn2 in files:
                                if fn2.endswith(('.svg', '.py')):
                                    shutil.copy(os.path.join(dirpath, fn2),
                                                os.path.join(out, fn2))
                    for dirpath, _, files in os.walk(os.path.join(dsub, below, 'figures')):
                        for fn2 in files:
                            if fn2.endswith('.svg'):
                                q = os.path.join(dirpath, fn2)
                                open(q, 'w', encoding='utf-8').write(
                                    fn(open(q, encoding='utf-8').read()))
                    os.makedirs(os.path.join(dsub, _LEVEL), exist_ok=True)
                    ctx.root = os.path.join(dsub, _LEVEL)
                    ctx.spec_root = ROOT
                elif kind == 'svg':
                    # G32 compares the SVG beside each PNG against the SVG the
                    # current code draws, so its negative test has to corrupt
                    # the SVG rather than the sidecar JSON that FIG touches.
                    src = os.path.join(ROOT, 'figures', book)
                    if not os.path.isdir(src) or not os.listdir(src):
                        deferred.append((cid, 'svg: no figures rendered')); continue
                    dst = os.path.join(tmp, 'figures', book)
                    shutil.rmtree(os.path.join(tmp, 'figures'), ignore_errors=True)
                    os.makedirs(os.path.dirname(dst), exist_ok=True)
                    shutil.copytree(src, dst)
                    ctx.root = tmp
                    for sf in sorted(os.listdir(dst)):
                        if sf.endswith('.svg'):
                            q = os.path.join(dst, sf)
                            open(q, 'w', encoding='utf-8').write(
                                fn(open(q, encoding='utf-8').read()))
                    ctx.spec_root = ROOT
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
