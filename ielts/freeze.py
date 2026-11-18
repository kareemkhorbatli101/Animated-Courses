# -*- coding: utf-8 -*-
"""The baseline the invariance contract is measured against.

Writes one JSON file recording what the series IS right now: every item,
every text, every head word, every measured number, every figure. regress.py
re-derives all of it and fails the build on any difference a phase did not
declare. Between them they are what "no regression, no omission, no drift"
means in this project - not care, but a gate.

    python3 freeze.py            # write baseline/latest.json
    python3 freeze.py 2          # write baseline/002.json as well
"""
import hashlib
import importlib.util
import io
import json
import os
import sys
import zipfile

import _base                                            # noqa: F401
import unitmap as UN
import density as D

HERE = os.path.dirname(os.path.abspath(__file__))
BASE = os.path.join(HERE, 'baseline')
BOOKS = UN.books()
DOCX = {1: 'IELTS_2026_B1_Volume_1.docx', 2: 'IELTS_2026_B1plus_Volume_2.docx',
        3: 'IELTS_2026_B2_Volume_3.docx', 4: 'IELTS_2026_B2_Volume_4.docx',
        5: 'IELTS_2026_B2plus_Volume_5.docx', 6: 'IELTS_2026_C1_Volume_6.docx',
        7: 'IELTS_2026_A1-A2_Foundation_1.docx',
        8: 'IELTS_2026_A2-B1_Foundation_2.docx'}
OUTDIR = os.path.dirname(HERE)


def sha(s):
    return hashlib.sha1(s.encode('utf-8')).hexdigest()[:12]


def load(name):
    p = os.path.join(HERE, 'content', name + '.py')
    if not os.path.exists(p):
        return None
    spec = importlib.util.spec_from_file_location('fz_' + name, p)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def blocks(vol, rng):
    """(address, kind, block) for every exercise in a book, in print order."""
    for n in rng:
        m = load('u%02d' % n)
        if m is None:
            continue
        U = m.UNIT
        for ci, c in enumerate(U['cycles'], 1):
            for bi, r in enumerate(c['read']):
                yield ('u%d c%d R%d' % (U['n'], ci, bi), 'read', r)
            for bi, l in enumerate(c['listen']):
                yield ('u%d c%d L%d' % (U['n'], ci, bi), 'listen', l)
    for nm in ('paper%d' % vol, 'paper%da' % vol, 'paper%db' % vol):
        pm = load(nm)
        if pm:
            for x in pm.PAPER['passages']:
                yield ('%s p%d' % (nm, x['no']), 'paper', x)
    for nm in ('lpaper%d' % vol, 'lpaper%da' % vol, 'lpaper%db' % vol):
        lm = load(nm)
        if lm:
            for p in lm.LPAPER['parts']:
                yield ('%s %s' % (nm, p['part']), 'lpaper', p)


def _j(x):
    """One string for a slot, whatever shape it is stored in."""
    if x is None:
        return None
    if isinstance(x, str):
        return x
    out = []
    for e in x:
        if isinstance(e, str):
            out.append(e)
        elif isinstance(e, (list, tuple)):
            out += [str(y) for y in e]
        else:
            out.append(str(e))
    return '\n'.join(out)


def prose(vol, rng):
    """(address, string) for every authored string that is not an item and
    not a reading or listening text - the writing models, the speaking
    prompts, the grammar slot, the vocabulary glosses, the unit front and
    back matter, and the three single-skill papers. The item fields and the
    passages have their own sections; everything else lives here, so that a
    phase cannot quietly rewrite a model answer or a grammar explanation."""
    out = []
    for n in rng:
        m = load('u%02d' % n)
        if m is None:
            continue
        U = m.UNIT
        u = 'u%d' % U['n']
        out.append((u + ' opener', U['opener']))
        for key in ('technique', 'outlining'):
            d = U[key]
            out.append(('%s %s body' % (u, key), d['body']))
            out.append(('%s %s qs' % (u, key), _j(d['qs'])))
            if d.get('answers'):
                out.append(('%s %s answers' % (u, key), _j(d['answers'])))
        out.append((u + ' tip', U['tip']))
        for ci, c in enumerate(U['cycles'], 1):
            a = '%s c%d' % (u, ci)
            for bi, w in enumerate(c['write']):
                for f in ('prompt', 'heading'):
                    if w.get(f):
                        out.append(('%s W%d %s' % (a, bi, f), w[f]))
                for f in ('model', 'notes', 'model65', 'gap65', 'checks'):
                    if w.get(f):
                        out.append(('%s W%d %s' % (a, bi, f), _j(w[f])))
            sp = c['speak']
            for f in ('intro', 'qs', 'longturn', 'sounds', 'followup',
                      'notes', 'checks'):
                if sp.get(f):
                    out.append(('%s S %s' % (a, f), _j(sp[f])))
            g = c['gram']
            for f in ('heading', 'explain', 'examples', 'items'):
                if g.get(f):
                    out.append(('%s G %s' % (a, f), _j(g[f])))
            if g.get('fix'):
                out.append(('%s G fix text' % a, g['fix']['text']))
                out.append(('%s G fix faults' % a, _j(g['fix']['faults'])))
            out.append((a + ' vocab', _j(c['vocab'])))
            out.append((a + ' expr', _j(c['expr'])))
            for bi, r in enumerate(c['read']):
                out.append(('%s R%d heading' % (a, bi), r['heading']))
                out.append(('%s R%d task' % (a, bi), r['task']))
                if r.get('bank'):
                    out.append(('%s R%d bank' % (a, bi), _j(r['bank'])))
            for bi, l in enumerate(c['listen']):
                if l.get('heading'):
                    out.append(('%s L%d heading' % (a, bi), l['heading']))
                out.append(('%s L%d task' % (a, bi), l['task']))
                if l.get('bank'):
                    out.append(('%s L%d bank' % (a, bi), _j(l['bank'])))
    for nm in ('wpaper%d' % vol, 'spaper%d' % vol):
        pm = load(nm)
        if pm is None:
            continue
        P = getattr(pm, 'WPAPER', None) or getattr(pm, 'SPAPER')
        out.append((nm + ' intro', P['intro']))
        out.append((nm + ' instruct', _j(P['instruct'])))
        out.append((nm + ' keyintro', P['keyintro']))
        for t in P.get('tasks', []):
            k = '%s t%s' % (nm, t['no'])
            out.append((k + ' heading', t['heading']))
            out.append((k + ' prompt', t['prompt']))
            for f in ('model', 'notes', 'checks'):
                out.append(('%s %s' % (k, f), _j(t[f])))
        for pt in P.get('parts', []):
            k = '%s %s' % (nm, pt['part'])
            out.append((k + ' blurb', pt['blurb']))
            for f in ('qs', 'notes', 'checks'):
                out.append(('%s %s' % (k, f), _j(pt[f])))
    for nm in ('paper%d' % vol, 'paper%da' % vol, 'paper%db' % vol,
               'lpaper%d' % vol, 'lpaper%da' % vol, 'lpaper%db' % vol):
        pm = load(nm)
        if pm is None:
            continue
        P = getattr(pm, 'PAPER', None) or getattr(pm, 'LPAPER')
        out.append((nm + ' intro', P['intro']))
        out.append((nm + ' instruct', _j(P['instruct'])))
        for x in P.get('passages', []):
            out.append(('%s p%d heading' % (nm, x['no']), x['heading']))
            out.append(('%s p%d blurb' % (nm, x['no']), x['blurb']))
        for pt in P.get('parts', []):
            out.append(('%s %s blurb' % (nm, pt['part']), pt['blurb']))
    return [(k, v) for k, v in out if isinstance(v, str) and v.strip()]


def text_of(blk, kind):
    if kind in ('read', 'paper'):
        return ' '.join(blk['paras'])
    return ' '.join(t for _, t in blk['script'])


def snapshot():
    R = D.P.ranks()
    out = {'books': {}}
    for vol, rng in BOOKS:
        items, texts, figs = {}, {}, 0
        for addr, kind, blk in blocks(vol, rng):
            t = text_of(blk, kind)
            texts[addr] = {'w': len(t.split()), 'sha': sha(t)}
            for i, it in enumerate(blk['items'], 1):
                items['%s i%d' % (addr, i)] = {
                    'stem': sha(it[0]), 'ans': str(it[2]),
                    'opts': len(it[1]) if it[1] else 0,
                    'why': sha(it[3]),
                    'wrongs': len(it[4]) if len(it) > 4 and it[4] else 0}
        heads = []
        for n in rng:
            m = load('u%02d' % n)
            if m is None:
                continue
            for c in m.UNIT['cycles']:
                heads += [w.lower() for w, _ in c['vocab']]
                for blkset in ('read', 'listen'):
                    for b in c[blkset]:
                        figs += sum(1 for k in ('figure', 'figure2', 'figure3')
                                    if b.get(k))
                for w in c['write']:
                    figs += 1 if w.get('figure') else 0
        pz = {}
        for k, v in prose(vol, rng):
            pz[k] = {'w': len(v.split()), 'sha': sha(v)}
        units, paper = D.texts(vol)
        pr = D.P.profile('x', units + paper, R)
        rec = {'items': items, 'texts': texts, 'prose': pz,
               'heads': sorted(heads),
               'figures': figs,
               'measure': {'k1': round(pr['bands']['1k'], 2),
                           'beyond': round(pr['over4k'], 2),
                           'sent': round(pr['mean_sent'], 2),
                           'longest': pr['max_sent'],
                           'nominal': round(pr['nominal'], 2)}}
        p = os.path.join(OUTDIR, DOCX[vol])
        if os.path.exists(p):
            z = zipfile.ZipFile(p)
            rec['images'] = len([n for n in z.namelist()
                                 if n.startswith('word/media/')])
        out['books'][str(vol)] = rec
    return out


def main(argv):
    snap = snapshot()
    os.makedirs(BASE, exist_ok=True)
    paths = [os.path.join(BASE, 'latest.json')]
    if len(argv) > 1:
        paths.append(os.path.join(BASE, '%03d.json' % int(argv[1])))
    for p in paths:
        io.open(p, 'w', encoding='utf-8').write(
            json.dumps(snap, indent=1, sort_keys=True))
    n_items = sum(len(b['items']) for b in snap['books'].values())
    n_texts = sum(len(b['texts']) for b in snap['books'].values())
    n_heads = sum(len(b['heads']) for b in snap['books'].values())
    n_prose = sum(len(b['prose']) for b in snap['books'].values())
    print('frozen: %d items, %d texts, %d prose slots, %d head words, '
          '%d books -> %s'
          % (n_items, n_texts, n_prose, n_heads, len(snap['books']),
             ', '.join(os.path.basename(p) for p in paths)))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
