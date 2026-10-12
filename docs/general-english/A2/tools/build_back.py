"""Generate the back matter that can be derived, so it cannot drift.

Three of the eight back-matter files are restatements of things the course
already holds: the Word File is the wordlists, the Can-Do record is every
unit's 8E, the Picture File is every figure module's own manifest. Writing
those by hand would create a second copy of the truth, and a second copy is
a thing that goes stale. They are generated here and regenerated on every
build; `check_back.py` fails if a generated file on disk is not what the
source now produces.

The other five -- Grammar File, Phrase File, Audio File, irregular verbs,
the sound-symbol table -- are written, because nothing in the repository
contains them.
"""
import json
import os
import re

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GLOSS = json.load(open(os.path.join(HERE, 'spec', 'gloss-ar.json'),
                       encoding='utf-8'))


def word_file():
    """Every word, the unit that teaches it, and an Arabic gloss."""
    rows = []
    for u in range(1, 21):
        p = os.path.join(HERE, 'spec', 'wordlists', f'u{u:02d}.txt')
        for w in open(p).read().split():
            rows.append((w, u))
    rows.sort(key=lambda r: (r[0], r[1]))
    out = ['# Word File',
           '',
           'Every word the course teaches, the unit that teaches it, and an '
           'Arabic gloss.',
           'A word appears once: no word is taught as new twice, and check '
           'X1a holds that',
           'across all 190 unit pairs.',
           '',
           f'**{len(rows)} words · 20 units**',
           '',
           '| Word | Unit | Arabic |',
           '|---|---|---|']
    missing = []
    for w, u in rows:
        g = GLOSS.get(w)
        if g is None:
            missing.append(w)
            g = '—'
        out.append(f'| {w} | {u} | {g} |')
    return '\n'.join(out) + '\n', missing


def can_do():
    """The Can-Do record: every unit's 8E, in order."""
    out = ['# Can-Do Record',
           '',
           'Tick a line when you can do it without help. Every line is the '
           '8E of its unit,',
           'so the record and the book say the same thing by construction.',
           '',
           '| Unit | I can … | ✓ |',
           '|---|---|---|']
    for u in range(1, 21):
        raw = open(os.path.join(HERE, 'units', f'a21-u{u:02d}.md')).read()
        block = re.split(r'^\*\*8E\*\*\s', raw, flags=re.M)[1]
        for line in block.split('\n'):
            m = re.match(r'^\d+\.\s+(I can .+?)\s+—', line.strip())
            if m:
                out.append(f'| {u} | {m.group(1)} |  |')
    return '\n'.join(out) + '\n'


def picture_file():
    """Every figure, its caption, its declared job, and its alt text.

    The alt text is built from the strings the figure itself draws. That is
    not a shortcut: a Canvas records every label it paints, so this is what
    is actually on the page, and it cannot describe a figure that changed
    underneath it.
    """
    import importlib.util
    import sys
    sys.path.insert(0, os.path.join(HERE, 'tools'))
    out = ['# Picture File',
           '',
           'Every figure in the course: its number, the part it belongs to, '
           'the job it does,',
           'its caption, and alt text for a reader who cannot see it.',
           '',
           'The four jobs are **data** (the figure carries the information '
           'the task needs),',
           '**contrast** (it shows one form against another), **lexis** (it '
           'shows what a word',
           'means) and **document** (it reproduces a thing from the world: a '
           'form, a receipt,',
           'a notice). There is no fifth job, and no figure is decoration.',
           '',
           '**440 figures · 20 units**',
           '']
    for u in range(1, 21):
        path = os.path.join(HERE, 'content', 'a21', f'u{u:02d}_figures.py')
        sys.path.insert(0, os.path.dirname(path))
        spec = importlib.util.spec_from_file_location(f'pf_u{u}', path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)
        out += [f'## Unit {u}', '', '| Figure | Part | Job | Caption | Alt text |',
                '|---|---|---|---|---|']
        for f in mod.FIGURES:
            cv = f['build']()
            seen, words = set(), []
            for s, *_ in cv.labels:
                s = ' '.join(s.split())
                if s and s.lower() not in seen:
                    seen.add(s.lower())
                    words.append(s)
            alt = '; '.join(words[:14]) or 'a drawn scene with no printed words'
            alt = alt.replace('|', '/')
            part = 'Warm Up' if f['part'] == 'W' else f"Part {f['part']}"
            out.append(f"| {u}.{f['n']} | {part} | {f['job']} | "
                       f"{f['caption']} | {alt} |")
        out.append('')
    return '\n'.join(out)


def main():
    os.makedirs(os.path.join(HERE, 'back'), exist_ok=True)
    wf, missing = word_file()
    writes = {'word-file.md': wf, 'can-do-record.md': can_do(),
              'picture-file.md': picture_file()}
    for name, text in writes.items():
        open(os.path.join(HERE, 'back', name), 'w', encoding='utf-8').write(text)
        print(f'  wrote back/{name}  ({len(text.splitlines())} lines)')
    if missing:
        print(f'  {len(missing)} words have no Arabic gloss: {missing[:12]}')
    return 1 if missing else 0


if __name__ == '__main__':
    raise SystemExit(main())
