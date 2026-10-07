#!/usr/bin/env python3
"""Build and check the answer key for a unit.

Keys are authored in `content/<book>/u<nn>_answers.py` as a list of
`(section, payload)` pairs.  A payload is either a Markdown string, or a dict
whose recognised fields are checked against the chapter itself:

    mcq     list of the CORRECT OPTION TEXTS, in item order
    abcd    list of the CORRECT GLOSS TEXTS, in item order
    tf      list of True/False, in item order
    clinic  {item prefix: answer}
    sort    {item: column}
    text    free Markdown, rendered after the structured parts

Nothing in a key records a *position*.  The renderer looks up where each
correct option currently sits in the chapter and prints the letter, so a
reshuffle can never leave the key pointing at the wrong line — and the
checker fails loudly if a stored answer no longer matches any option.
"""
import importlib.util
import re
import sys
from pathlib import Path

LET = 'abcdefgh'


# ── reading the chapter ────────────────────────────────────────────────────
def sections(text):
    """Split a chapter into {section id: body}, e.g. '2A' -> '…'."""
    out, cur, buf = {}, None, []
    for line in text.split('\n'):
        m = re.match(r'^### (\d+[A-Z])\b', line)
        if m:
            if cur:
                out[cur] = '\n'.join(buf)
            cur, buf = m.group(1), []
        else:
            buf.append(line)
    if cur:
        out[cur] = '\n'.join(buf)
    return out


def read_mcq(body):
    """[(stem, [options])] for every bold slash list in a numbered line."""
    out = []
    for m in re.finditer(r'(?m)^(\d+)\.\s+(.*?)\*\*([^*\n]+?)\*\*(.*)$', body):
        opts = [o.strip() for o in m.group(3).split(' / ')]
        if len(opts) >= 3:
            out.append(((m.group(2) + '…' + m.group(4)).strip(), opts))
    return out


def read_abcd(body):
    m = re.search(r'(?ms)^> \*\*A\.\*\* .*?(?=\n\n|\n---|\Z)', body)
    if not m:
        return []
    flat = re.sub(r'\n> ', ' ', m.group(0))[2:]
    out = []
    for p in re.split(r'\s*·\s*', flat):
        mm = re.match(r'\*\*([A-Z])\.\*\*\s*(.*)', p.strip())
        if mm:
            out.append((mm.group(1), mm.group(2).strip().rstrip('·').strip()))
    return out


def read_tf(body):
    return [m.group(1).strip() for m in
            re.finditer(r'(?m)^\d+\.\s+(.*?)\s*☐ T ☐ F\s*$', body)]


def read_numbered(body):
    return [m.group(2).strip() for m in
            re.finditer(r'(?m)^(> )?\d+\.\s+(.*)$', body)]


def read_sort(body):
    m = re.search(r'(?m)^((?:> [^\n]*\n?)+)', body)
    if not m:
        return []
    flat = ' '.join(l[2:].strip() for l in m.group(1).rstrip('\n').split('\n'))
    return [p.strip() for p in flat.split('·') if p.strip()]


# ── rendering ──────────────────────────────────────────────────────────────
def render(sec, payload, body, problems):
    if isinstance(payload, str):
        return [re.sub(r'(?<!\n)\n(?!\n)', '  \n', payload)]
    out = []

    if 'mcq' in payload:
        items = read_mcq(body)
        if len(items) != len(payload['mcq']):
            problems.append(f'{sec}: key has {len(payload["mcq"])} mcq answers, '
                            f'chapter has {len(items)} items')
        bits = []
        for n, (want, (_, opts)) in enumerate(zip(payload['mcq'], items), 1):
            norm = [o.lower().strip(' .*') for o in opts]
            if want.lower().strip(' .*') not in norm:
                problems.append(f'{sec} item {n}: answer {want!r} is not among '
                                f'{opts}')
                bits.append(f'**{n}** ?')
            else:
                i = norm.index(want.lower().strip(' .*'))
                bits.append(f'**{n}** {LET[i]}) {opts[i]}')
        out.append(' · '.join(bits))

    if 'abcd' in payload:
        pairs = read_abcd(body)
        glosses = [g.lower() for _, g in pairs]
        bits = []
        for n, want in enumerate(payload['abcd'], 1):
            if want.lower() not in glosses:
                problems.append(f'{sec} item {n}: gloss {want!r} not in legend')
                bits.append(f'**{n}** ?')
            else:
                bits.append(f'**{n}** {pairs[glosses.index(want.lower())][0]}')
        out.append(' · '.join(bits))

    if 'tf' in payload:
        stmts = read_tf(body)
        if len(stmts) != len(payload['tf']):
            problems.append(f'{sec}: key has {len(payload["tf"])} T/F answers, '
                            f'chapter has {len(stmts)}')
        out.append(' · '.join(f'**{n}** {"T" if v else "F"}'
                              for n, v in enumerate(payload['tf'], 1)))

    if 'clinic' in payload:
        items = read_numbered(body)
        bits = []
        for n, it in enumerate(items, 1):
            hit = [v for k, v in payload['clinic'].items()
                   if it.lower().startswith(k.lower())]
            if len(hit) != 1:
                problems.append(f'{sec} item {n}: {len(hit)} key entries match '
                                f'{it[:44]!r}')
                bits.append(f'**{n}** ?')
            else:
                bits.append(f'**{n}** {hit[0]}')
        out.append('\n'.join('> ' + b for b in bits))

    if 'sort' in payload:
        items = read_sort(body)
        missing = [i for i in items if i not in payload['sort']]
        extra = [k for k in payload['sort'] if k not in items]
        for i in missing:
            problems.append(f'{sec}: no key entry for sort item {i!r}')
        for k in extra:
            problems.append(f'{sec}: key entry {k!r} is not in the chapter list')
        cols = {}
        for i in items:
            cols.setdefault(payload['sort'].get(i, '?'), []).append(i)
        out.append('\n'.join(f'> **{c}** — ' + ' · '.join(v)
                             for c, v in cols.items()))

    if 'text' in payload:
        # single newlines inside an answer are hard breaks, so a numbered list
        # of answers does not collapse into one paragraph in the DOCX
        out.append(re.sub(r'(?<!\n)\n(?!\n)', '  \n', payload['text']))
    return out


def load(book, nn):
    p = Path(f'content/{book}/u{nn}_answers.py')
    if not p.exists():
        return None
    spec = importlib.util.spec_from_file_location(f'ans_{book}_{nn}', p)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.ANSWERS


def unit_key(book, nn, problems):
    ch = Path(f'chapters/{book}-unit{nn}.md')
    text = ch.read_text(encoding='utf-8')
    title = text.split('\n')[0].lstrip('# ').strip()
    data = load(book, nn)
    if data is None:
        problems.append(f'{book} u{nn}: no answers file')
        return f'## {title}\n\n*(key not written)*\n'
    secs = sections(text)
    out = [f'## {title}', '']
    for sec, payload in data:
        body = secs.get(sec, '')
        if sec not in secs:
            problems.append(f'{book} u{nn}: section {sec} is not in the chapter')
        heading = re.search(rf'(?m)^### {sec} · (.*)$', text)
        out.append(f'**{sec}**' + (f' · {heading.group(1)}' if heading else ''))
        out += render(sec, payload, body, problems)
        out.append('')
    return '\n'.join(out) + '\n'


if __name__ == '__main__':
    book = sys.argv[1]
    units = sys.argv[2:] or [f'{i:02d}' for i in range(1, 11)]
    problems = []
    parts = [unit_key(book, nn, problems) for nn in units
             if Path(f'chapters/{book}-unit{nn}.md').exists()]
    Path('keys').mkdir(exist_ok=True)
    Path(f'keys/{book}-answers.md').write_text(
        f'# Answer Key · {book.upper()}\n\n'
        '> Open tasks — speaking, writing, discussion — are not keyed. Their\n'
        '> success criteria are in the unit, at 4E and 8E.\n\n' + '\n---\n\n'.join(parts),
        encoding='utf-8')
    for p in problems:
        print('  !', p)
    print(f'keys/{book}-answers.md — {len(parts)} units, {len(problems)} problems')
