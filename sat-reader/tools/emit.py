"""Write a passage block as well-formed YAML from Python objects."""
import os, textwrap


def q(s):
    return '"%s"' % str(s).replace('"', "'").strip()


def emit(path, field, level, passages):
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
            for line in textwrap.wrap(flat, 74):
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
    return path
