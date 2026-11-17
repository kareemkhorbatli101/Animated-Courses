# -*- coding: utf-8 -*-
"""Edit a sentence inside a paragraph that is stored as wrapped literals.

A paragraph in these modules is a run of adjacent Python string literals,
one a line, which the interpreter concatenates. A sentence therefore does
not exist as text anywhere in the file, and `sed` cannot see it. This
module finds the run whose joined value is the paragraph, replaces the
sentence inside it, and writes the run back re-wrapped at the same
indentation.

    from rewrap import edit
    edit(7, 'The early gains, which ... carefully.',
            'The early gains are the largest ... . More fibres ... .')

`edit` returns the file it changed, or raises if the sentence is not
found exactly once in that book.
"""
import ast
import io
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
WIDTH = 72             # the right margin the content files are wrapped to


def _files(vol):
    lo = 21 + (vol - 3) * 10
    names = ['u%02d' % n for n in range(lo, lo + 10)]
    names += ['paper%d' % vol, 'lpaper%d' % vol,
              'paper%da' % vol, 'paper%db' % vol]
    out = []
    for n in names:
        p = os.path.join(HERE, 'content', n + '.py')
        if os.path.exists(p):
            out.append(p)
    return out


def _runs(lines):
    """Every maximal run of adjacent string literals, with its tail.

    A paragraph's last line can close the list as well as the string, so
    the run has to accept `'...'],` and `'...'),` and remember which, to
    put it back when the run is written out again.
    """
    pat = re.compile(r"^'(?:[^'\\]|\\.)*'([,)\]]*)$")
    out = []
    i = 0
    while i < len(lines):
        j, vals, tail = i, [], ''
        while j < len(lines):
            t = lines[j].strip()
            m = pat.match(t)
            if not m:
                break
            suf = m.group(1)
            try:
                v = ast.literal_eval(t[:len(t) - len(suf)])
            except Exception:
                break
            if not isinstance(v, str):
                break
            vals.append(v)
            j += 1
            if suf:
                tail = suf
                break
        if vals:
            out.append((i, j, ''.join(vals), tail))
            i = j
        else:
            i += 1
    return out


def _lit(text, indent):
    """Re-wrap text as adjacent single-quoted literals at this indent."""
    room = WIDTH - indent - 2
    words, lines, cur = text.split(' '), [], ''
    for w in words:
        trial = (cur + ' ' + w) if cur else w
        if len(trial) + 1 > room and cur:
            lines.append(cur + ' ')
            cur = w
        else:
            cur = trial
    lines.append(cur)
    out = []
    for s in lines:
        body = s.replace('\\', '\\\\').replace("'", "\\'")
        body = ''.join(c if ord(c) < 128 else '\\u%04x' % ord(c)
                       for c in body)
        out.append(' ' * indent + "'" + body + "'")
    return out


def edit(vol, old, new, path=None):
    """Replace one sentence (or whole paragraph) wherever it lives."""
    hits = []
    for p in ([path] if path else _files(vol)):
        lines = io.open(p, encoding='utf-8').read().split('\n')
        for a, b, text, tail in _runs(lines):
            if old in text:
                hits.append((p, a, b, text, tail, lines))
    if len(hits) != 1:
        raise KeyError('%d matches for %r' % (len(hits), old[:60]))
    p, a, b, text, tail, lines = hits[0]
    if text.count(old) != 1:
        raise KeyError('%d matches inside the paragraph' % text.count(old))
    indent = len(lines[a]) - len(lines[a].lstrip())
    block = _lit(text.replace(old, new), indent)
    block[-1] = block[-1] + tail
    lines[a:b] = block
    io.open(p, 'w', encoding='utf-8').write('\n'.join(lines))
    return os.path.basename(p)


def apply(vol, pairs, quiet=False):
    """Apply many edits, reporting the ones that miss instead of aborting."""
    done = miss = 0
    for old, new in pairs:
        try:
            f = edit(vol, old, new)
            done += 1
            if not quiet:
                print('  ok   %s  %s' % (f, old[:52]))
        except KeyError as e:
            miss += 1
            print('  MISS %s' % e)
    print('%d applied, %d missed' % (done, miss))
    return miss
