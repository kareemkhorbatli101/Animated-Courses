"""Write a passage block as well-formed YAML from Python objects."""
import os, textwrap


def q(s):
    return '"%s"' % str(s).replace('"', "'").strip()


def emit(path, field, level, passages):
    import re as _re, sys as _sys, os as _os, yaml as _yaml
    _sys.path.insert(0, _os.path.dirname(_os.path.abspath(__file__)))
    import lex as _lex
    _spec = _yaml.safe_load(open(_os.path.join(
        _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))), 'data', 'spec.yaml')))
    _lo = _spec['levels'][level]['words_min']
    _hi = _spec['levels'][level]['words_max']
    for p in passages:
        pad = list(p.get('pad') or [])
        while pad:
            n = len(_lex.words(' '.join(p['text'].split())))
            if n >= _lo:
                break
            paras = p['text'].rstrip().split('\n\n')
            paras[-1] = paras[-1].rstrip() + ' ' + pad.pop(0).strip()
            p['text'] = '\n\n'.join(paras)
        n = len(_lex.words(' '.join(p['text'].split())))
        if n < _lo:
            print('SHORT %s: %d words, need %d (pad exhausted)' % (p['id'], n, _lo))
        elif n > _hi:
            print('LONG  %s: %d words, cap %d' % (p['id'], n, _hi))
    if level <= 2:
        for p in passages:
            keep = []
            for t in p['terms']:
                if t[2]:
                    keep.append(t)
                else:
                    print('dropped ungloss term %r from %s' % (t[0], p['id']))
            p['terms'] = keep
    out = ['field: %s' % field, 'level: %d' % level, 'passages:']
    for p in passages:
        out.append('  - id: %s' % p['id'])
        out.append('    strand: %s' % p['strand'])
        out.append('    title: %s' % q(p['title']))
        out.append('    move: %s' % p['move'])
        out.append('    sat_frame: %s' % q(p['frame']))
        out.append('    builds_on: %s' % (q(p['builds_on']) if p.get('builds_on') else 'null'))
        out.append('    advances: %s' % q(p['advances']))
        out.append('    vocab_link: [%s]' % ', '.join(p['vocab']))
        out.append('    passage: |')
        paras = [x.strip() for x in p['text'].strip().split('\n\n') if x.strip()]
        for i, para in enumerate(paras):
            flat = ' '.join(para.split())
            for line in textwrap.wrap(flat, 74, break_on_hyphens=False):
                out.append('      ' + line)
            if i < len(paras) - 1:
                out.append('')
        out.append('    anchors:')
        for take, quote in p['anchors']:
            out.append('      - take: %s' % q(take))
            out.append('        quote: %s' % q(' '.join(quote.split())))
        out.append('    terms:')
        for term, gloss, glossed in p['terms']:
            out.append('      - {term: %s, gloss: %s, glossed: %s}'
                       % (q(term), q(gloss), 'true' if glossed else 'false'))
        out.append('    facts:')
        for f in p['facts']:
            out.append('      - %s' % q(f))
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, 'w').write('\n'.join(out) + '\n')
    import sys, os as _os
    sys.path.insert(0, _os.path.dirname(_os.path.abspath(__file__)))
    import lex
    print('%-14s %5s %5s %5s %5s %5s' % ('id', 'words', 'sents', 'mean', 'max', 'fk'))
    for p in passages:
        flat = ' '.join(' '.join(x.split()) for x in p['text'].strip().split('\n\n'))
        ws, ss = lex.words(flat), lex.sentences(flat)
        print('%-14s %5d %5d %5.1f %5d %5.1f' % (p['id'], len(ws), len(ss),
              len(ws) / max(1, len(ss)), max((len(lex.words(x)) for x in ss), default=0),
              lex.flesch_kincaid(flat)))
    return path
