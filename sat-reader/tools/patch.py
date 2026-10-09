"""Round-trip edits to a passage block: append sentences, replace text, fix anchors."""
import os, re, sys, yaml, textwrap
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))


def q(s):
    return '"%s"' % str(s).replace('"', "'").strip()


def dump(path, d):
    out = ['field: %s' % d['field'], 'level: %d' % d['level'], 'passages:']
    for p in d['passages']:
        out.append('  - id: %s' % p['id'])
        out.append('    strand: %s' % p['strand'])
        out.append('    title: %s' % q(p['title']))
        out.append('    move: %s' % p['move'])
        out.append('    sat_frame: %s' % q(p['sat_frame']))
        out.append('    builds_on: %s' % (q(p['builds_on']) if p.get('builds_on') else 'null'))
        out.append('    advances: %s' % q(p['advances']))
        out.append('    vocab_link: [%s]' % ', '.join(p['vocab_link']))
        out.append('    passage: |')
        paras = [x.strip() for x in p['passage'].strip().split('\n\n') if x.strip()]
        for i, para in enumerate(paras):
            for line in textwrap.wrap(' '.join(para.split()), 74, break_on_hyphens=False):
                out.append('      ' + line)
            if i < len(paras) - 1:
                out.append('')
        out.append('    anchors:')
        for a in p['anchors']:
            out.append('      - take: %s' % q(a['take']))
            out.append('        quote: %s' % q(' '.join(a['quote'].split())))
        out.append('    terms:')
        for t in (p['terms'] or []):
            out.append('      - {term: %s, gloss: %s, glossed: %s}'
                       % (q(t['term']), q(t['gloss']), 'true' if t['glossed'] else 'false'))
        if not (p['terms'] or []):
            out[-1] = '    terms: []'
        out.append('    facts:')
        for f in p['facts']:
            out.append('      - %s' % q(f))
    open(path, 'w').write('\n'.join(out) + '\n')


class Block:
    def __init__(self, path):
        self.path = path
        self.d = yaml.safe_load(open(path))
        self.by = {p['id']: p for p in self.d['passages']}

    def para(self, pid, i, text):
        """Append a sentence or two to paragraph i (1-based) of pid."""
        p = self.by[pid]
        paras = [x.strip() for x in p['passage'].strip().split('\n\n')]
        paras[i - 1] = ' '.join(paras[i - 1].split()) + ' ' + text.strip()
        p['passage'] = '\n\n'.join(paras) + '\n'

    def sub(self, pid, old, new):
        p = self.by[pid]
        pat = re.compile(r'\s+'.join(re.escape(t) for t in old.split()))
        flat_paras = [' '.join(x.split()) for x in p['passage'].strip().split('\n\n')]
        hit = False
        for k, para in enumerate(flat_paras):
            m = pat.search(para)
            if m:
                flat_paras[k] = para[:m.start()] + new + para[m.end():]
                hit = True
                break
        if not hit:
            print('MISS in %s: %s' % (pid, old[:50]))
        p['passage'] = '\n\n'.join(flat_paras) + '\n'

    def anchor(self, pid, i, quote=None, take=None):
        a = self.by[pid]['anchors'][i - 1]
        if quote is not None:
            a['quote'] = quote
        if take is not None:
            a['take'] = take

    def save(self):
        dump(self.path, self.d)
