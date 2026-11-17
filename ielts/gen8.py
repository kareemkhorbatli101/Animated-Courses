# -*- coding: utf-8 -*-
"""Derive the obvious wrong-option lines from the block's own items.

Three task families carry most of the four-option items in the series, and
in all three the book already contains the fact a distractor line needs:

  "Which paragraph explains X?"      - another item in the same block has
                                       the same option as its answer, and
                                       its stem says what that paragraph
                                       does instead.
  "Choose the best heading for N."   - the option is the right heading for
                                       some other paragraph, and another
                                       item in the block says which.
  "Which person said X?"             - the option names a person, and
                                       another item's stem says what that
                                       person said instead.

Nothing is invented: every line is built from a stem the author wrote. An
option the block cannot account for is left alone for a human to write.

    python3 gen8.py u31        # report
    python3 gen8.py u31 write  # write them
"""
import importlib
import re
import sys

import _base                                            # noqa: F401
from itemedit import Items

MIN_WRONG = 25
WHICH = re.compile(r'^(?:Which|In which)\s+\w+\s+(.+?)\??$', re.S)
HEAD = re.compile(r'best heading for (paragraph \d+)', re.I)


def _tail(stem):
    """'Which paragraph explains X?' -> 'explains X'."""
    m = WHICH.match(stem.strip())
    if not m:
        return None
    t = m.group(1).strip().rstrip('?').strip()
    return t or None


def _blocks(name):
    m = importlib.import_module('content.%s' % name)
    out = []
    U = getattr(m, 'UNIT', None)
    if U:
        for c in U['cycles']:
            out += list(c['read']) + list(c['listen'])
        return out
    P = getattr(m, 'PAPER', None)
    if P:
        return list(P['passages'])
    L = getattr(m, 'LPAPER', None)
    if L:
        return list(L['parts'])
    return out


def suggestions(name):
    """{(stem, why): {k: line}} for the options the block can account for."""
    out = {}
    for blk in _blocks(name):
        items = blk['items']
        # what each option string is the right answer to, in this block
        ans_of = {}
        for it in items:
            if not it[1]:
                continue
            key = str(it[1][it[2]]).strip()
            ans_of.setdefault(key, []).append(it)
        for it in items:
            o = it[1]
            if not o or len(o) < 4:
                continue
            w = it[4] if len(it) > 4 else {}
            need = [k for k in range(len(o))
                    if k != it[2] and len((w or {}).get(k, '')) < MIN_WRONG]
            if not need:
                continue
            mine = HEAD.search(it[0] or '')
            lines = {}
            for k in need:
                opt = str(o[k]).strip()
                owners = [x for x in ans_of.get(opt, []) if x is not it]
                if len(owners) != 1:
                    continue
                other = owners[0]
                if mine:
                    # a heading item: the option is another paragraph's
                    # heading, and the other item's stem says which
                    m2 = HEAD.search(other[0] or '')
                    if not m2:
                        continue
                    lines[k] = ('%s is the heading for %s.'
                                % (opt, m2.group(1).lower()))
                    continue
                tail = _tail(other[0] or '')
                if not tail:
                    continue
                lines[k] = '%s %s.' % (opt[0].upper() + opt[1:], tail)
            lines = {k: v for k, v in lines.items() if len(v) >= MIN_WRONG}
            if lines:
                out[(it[0], it[3])] = lines
    return out


def main(name, write=False):
    sug = suggestions(name)
    n = sum(len(v) for v in sug.values())
    if not write:
        for (stem, _), v in list(sug.items())[:6]:
            print('  %s' % stem[:70])
            for k, line in sorted(v.items()):
                print('     %s) %s' % ('ABCDEFGH'[k], line))
        print('%s: %d lines derivable from the block itself' % (name, n))
        return 0
    f = Items('content/%s.py' % name)
    done = 0
    for it in f.all():
        v = sug.get((it.stem, it.why))
        if not v:
            continue
        cur = dict(it.wrongs or {})
        for k, line in v.items():
            if k != it.ans and len(cur.get(k, '')) < MIN_WRONG:
                cur[k] = line
                done += 1
        it.set(wrongs=cur)
    f.save()
    print('%s: %d lines written' % (name, done))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1], len(sys.argv) > 2))
