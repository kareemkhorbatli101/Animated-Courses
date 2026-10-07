#!/usr/bin/env python3
"""Deterministically shuffle answer-bearing option orders in a chapter.

Four block types carry an answer whose position a learner can guess:

  mcq     a numbered line whose options are a bold slash list
  abcd    a legend of > **A.** … · **B.** … lettered options under numbered items
  clinic  a Contrast Clinic's numbered items, where right and wrong alternate
  sort    a block-quote list of items to be sorted into columns

Shuffling is answer-agnostic: it reorders the *presentation* only, so the
answer key is authored afterwards against the shuffled text.  The permutation
is drawn from a hash of the chapter name plus the block's own text, so a run
is reproducible and a second run over an already-shuffled chapter is a no-op
(the block text that feeds the hash is the canonical, sorted form).
"""
import hashlib
import re
import sys
from pathlib import Path


def perm(key, n):
    """A deterministic permutation of range(n), seeded by `key`."""
    h = hashlib.sha256(key.encode()).digest()
    order = list(range(n))
    # Fisher-Yates, drawing from the digest and extending it as needed.
    stream, i = list(h), 0
    for a in range(n - 1, 0, -1):
        if i >= len(stream):
            h = hashlib.sha256(h).digest()
            stream += list(h)
        b = stream[i] % (a + 1)
        i += 1
        order[a], order[b] = order[b], order[a]
    return order


def canon_key(chapter, tag, parts):
    """Seed from the chapter, the block tag and the block's sorted content, so
    the same block always draws the same permutation however it is currently
    ordered."""
    return chapter + '|' + tag + '|' + '|'.join(sorted(p.strip() for p in parts))


def shuffled(chapter, tag, parts):
    """Permute `parts` as a pure function of their content.

    The permutation is applied to the *sorted* list rather than to the list as
    it arrives, so the result depends only on the set of items.  Running the
    shuffler twice over the same chapter is therefore a no-op, which is what
    makes it safe to re-run after an edit."""
    base = sorted(parts, key=lambda p: p.strip())
    order = perm(canon_key(chapter, tag, parts), len(base))
    return [base[i] for i in order]


def shuffle_mcq(text, chapter, report):
    """`1. Building A has **a ramp / a lift / neither**.`"""
    pat = re.compile(r'(?m)^(\d+\.\s+.*?)\*\*([^*\n]+?)\*\*(\.?\s*)$')

    def go(m):
        head, body, tail = m.group(1), m.group(2), m.group(3)
        opts = [o.strip() for o in body.split(' / ')]
        if len(opts) < 3:
            return m.group(0)
        new = ' / '.join(shuffled(chapter, 'mcq:' + head.strip(), opts))
        if new != body:
            report.append(('mcq', head.strip()[:46], body, new))
        return f'{head}**{new}**{tail}'

    return pat.sub(go, text)


def _legend_parts(block):
    """(entries, trailing lines) for a lettered legend blockquote.

    Read line by line rather than by flattening, because a legend may both wrap
    across lines and carry an instruction line of its own.  A line with no
    `**X.**` marker continues the previous gloss when it begins in lower case;
    otherwise it is prose that happens to sit inside the same blockquote, and is
    handed back untouched.
    """
    got, trailing = [], []
    for raw in block.split(chr(10)):
        line = raw[2:] if raw.startswith('> ') else raw
        marks = list(re.finditer(r'\*\*([A-Z])\.\*\*', line))
        if not marks:
            if got and not trailing and line[:1].islower():
                got[-1] = (got[-1][0], (got[-1][1] + ' ' + line.strip()).strip())
            elif line.strip():
                trailing.append(line.strip())
            continue
        for i, mk in enumerate(marks):
            a = mk.end()
            z = marks[i + 1].start() if i + 1 < len(marks) else len(line)
            got.append((mk.group(1), line[a:z].strip().rstrip('·').strip()))
    return got, trailing


def shuffle_abcd(text, chapter, report):
    """`> **A.** arranged … · **B.** my intention …` — the labels stay in
    place and the glosses move, so item n no longer maps to option n."""
    pat = re.compile(r'(?ms)^> \*\*A\.\*\* .*?(?=\n\n|\n---|\Z)')

    def go(m):
        block = m.group(0)
        got, trailing = _legend_parts(block)
        if not got:
            return block
        if len(got) < 3:
            return block
        glosses = [g for _, g in got]
        new = shuffled(chapter, 'abcd', glosses)
        if new == glosses:
            return block
        report.append(('abcd', got[0][0] + '-' + got[-1][0], ' | '.join(glosses),
                       ' | '.join(new)))
        items = [f'**{lab}.** {g}' for (lab, _), g in zip(got, new)]
        # two per line, as the originals are set
        lines, cur = [], []
        for it in items:
            cur.append(it)
            if len(cur) == 2:
                lines.append(' · '.join(cur))
                cur = []
        if cur:
            lines.append(' · '.join(cur))
        out = '\n'.join('> ' + l + (' ·' if i < len(lines) - 1 else '')
                        for i, l in enumerate(lines))
        return out + ''.join('\n> ' + t for t in trailing)

    return pat.sub(go, text)


def shuffle_numbered(text, chapter, report, heading_re, tag):
    """Reorder a run of `1. … 2. …` items under a matching heading, keeping
    the numbering in place.  Used for Contrast Clinics, whose right and wrong
    items were written strictly alternating."""
    out, i = [], 0
    lines = text.split('\n')
    hp = re.compile(heading_re)
    while i < len(lines):
        out.append(lines[i])
        if hp.match(lines[i]):
            j = i + 1
            # find the numbered run
            while j < len(lines) and not re.match(r'^(> )?1\.\s', lines[j]):
                if re.match(r'^##', lines[j]):
                    break
                j += 1
            if j < len(lines) and re.match(r'^(> )?1\.\s', lines[j]):
                k, items, pre = j, [], []
                while k < len(lines):
                    mm = re.match(r'^(> )?(\d+)\.\s+(.*)$', lines[k])
                    if not mm:
                        break
                    pre.append(mm.group(1) or '')
                    items.append(mm.group(3))
                    k += 1
                # never reorder a list whose items refer to each other
                xref = re.compile(r'\b(?:item|sentence|number)\s+\d|'
                                  r'\b(?:the one above|the previous one|as in \d)')
                if len(items) >= 4 and not any(xref.search(i) for i in items):
                    new = shuffled(chapter, tag, items)
                    if new != items:
                        report.append((tag, lines[i].strip()[:46],
                                       f'{len(items)} items', 'reordered'))
                    out += lines[i + 1:j]
                    for n, (p, it) in enumerate(zip(pre, new), 1):
                        out.append(f'{p}{n}. {it}')
                    i = k
                    continue
        i += 1
    return '\n'.join(out)


def shuffle_sort(text, chapter, report):
    """A `### 6A · Sort …` heading followed by a block-quote list of items
    separated by ` · `, which were often written grouped by target column."""
    pat = re.compile(r'(?ms)^(### \d\w · Sort[^\n]*\n(?:(?!^###|^## ).)*?)'
                     r'^((?:> [^\n]*\n)+)', re.M)

    def go(m):
        head, quote = m.group(1), m.group(2)
        flat = ' '.join(l[2:].strip() for l in quote.rstrip('\n').split('\n'))
        parts = [p.strip() for p in flat.split('·') if p.strip()]
        if len(parts) < 5 or any(len(p) > 60 for p in parts):
            return m.group(0)
        if any(re.search(r'\b(?:item|number)\s+\d', p) for p in parts):
            return m.group(0)
        new = shuffled(chapter, 'sort:' + head.split('\n')[0], parts)
        if new == parts:
            return m.group(0)
        report.append(('sort', head.split('\n')[0].strip()[:46],
                       f'{len(parts)} items', 'reordered'))
        lines, cur = [], ''
        for p in new:
            if cur and len(cur) + len(p) + 3 > 86:
                lines.append(cur)
                cur = p
            else:
                cur = (cur + ' · ' + p) if cur else p
        if cur:
            lines.append(cur)
        body = '\n'.join('> ' + l + (' ·' if i < len(lines) - 1 else '')
                         for i, l in enumerate(lines)) + '\n'
        return head + body

    return pat.sub(go, text)


def run(path, write=True):
    p = Path(path)
    text = p.read_text(encoding='utf-8')
    chapter, report = p.stem, []
    text = shuffle_mcq(text, chapter, report)
    text = shuffle_abcd(text, chapter, report)
    text = shuffle_numbered(text, chapter, report,
                            r'^### \d\w · Contrast Clinic', 'clinic')
    text = shuffle_sort(text, chapter, report)
    if write and report:
        p.write_text(text, encoding='utf-8')
    return report


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('-')]
    dry = '--dry-run' in sys.argv
    total = 0
    for a in args:
        rep = run(a, write=not dry)
        total += len(rep)
        if rep:
            print(f'{Path(a).name}  —  {len(rep)} blocks')
            for kind, where, before, after in rep:
                print(f'   {kind:7} {where}')
    print(f'{total} blocks shuffled' + (' (dry run)' if dry else ''))
