# -*- coding: utf-8 -*-
"""Turn a multiple-choice item into a completion or short-answer item.

Phase 13. Volumes 3 to 6 put two thirds of their listening questions into
one task type, and the Foundation books and Volumes 1 and 2 put four
fifths of theirs into another. The fix is not to write new questions
about new recordings - the recordings are fine - but to ask the existing
question in the form the real paper would use.

A conversion keeps the fact being tested and changes only how the
candidate answers it. The keyed option already is the answer, so

    "What do they agree should be funded?  A) ... B) outreach C) ... D) ..."

becomes, with no new claim about the recording,

    "They agree that ____________ should be funded."     -> 'outreach'

The option list and its wrong-option lines go, because a gap has no wrong
options to explain; the explanation stays, because the evidence is the
same sentence of the script either way.

    from convert import to_gap, to_q
    to_gap('u51', {12: 'They agree that ____________ should be funded.'})
    to_q('u51', {14: ('Who signs the final report?', 'the chair')})

The answer defaults to the text of the option that was keyed, which is
the whole point; give it explicitly as a 2-tuple where that text is
longer than the three words the rubric allows, and then the stem has to
carry the rest of the sense. Every conversion is checked: a gap item must
have a gap, a short-answer item must ask a question, the answer must be
inside the rubric, and the item must stop being multiple choice.
"""
import re
import sys

import _base                                            # noqa: F401
from itemedit import Items

GAP = re.compile(r'_{3,}')
MAX_WORDS = 3


def _items(name):
    f = Items('content/%s.py' % name)
    return f, sorted(f.all(), key=lambda i: (i.node.lineno, i.node.col_offset))


def _apply(name, spec, kind):
    f, items = _items(name)
    bad = []
    done = 0
    for n, v in sorted(spec.items()):
        if not (1 <= n <= len(items)):
            bad.append('%s: no item %d' % (name, n))
            continue
        it = items[n - 1]
        stem, ans = (v if isinstance(v, (tuple, list)) else (v, None))
        if not it.opts:
            bad.append('%s i%d: already has no options' % (name, n))
            continue
        if ans is None:
            if not isinstance(it.ans, int):
                bad.append('%s i%d: answer is %r, not an option index'
                           % (name, n, it.ans))
                continue
            ans = str(it.opts[it.ans]).strip()
        if len(ans.split()) > MAX_WORDS:
            bad.append('%s i%d: answer %r is %d words, the rubric allows %d'
                       % (name, n, ans, len(ans.split()), MAX_WORDS))
            continue
        if kind == 'gap' and not GAP.search(stem):
            bad.append('%s i%d: a completion stem needs a gap' % (name, n))
            continue
        if kind == 'q' and not stem.rstrip().endswith('?'):
            bad.append('%s i%d: a short-answer stem has to ask something'
                       % (name, n))
            continue
        if kind == 'q' and GAP.search(stem):
            bad.append('%s i%d: a short-answer stem has a gap in it'
                       % (name, n))
            continue
        it.wrongs = None
        it.set(stem=stem, ans=ans, opts=None)
        done += 1
    n = f.save()
    for b in bad:
        print('  !! ' + b)
    return done, len(bad)


def to_gap(name, spec):
    """{ordinal: stem} or {ordinal: (stem, answer)} -> completion items."""
    return _apply(name, spec, 'gap')


def to_q(name, spec):
    """{ordinal: stem} or {ordinal: (stem, answer)} -> short-answer items."""
    return _apply(name, spec, 'q')


def to_match(name, spec):
    """{ordinal: letter} -> matching items answered from a lettered bank.

    The block must already carry the bank; blockedit.setkw puts it there.
    A matching item keeps its stem and loses its option list, because the
    options have become the bank and are now shared across the set, which
    is what makes it matching rather than four separate questions."""
    f, items = _items(name)
    bad = []
    done = 0
    for n, letter in sorted(spec.items()):
        if not (1 <= n <= len(items)):
            bad.append('%s: no item %d' % (name, n))
            continue
        it = items[n - 1]
        if not isinstance(letter, str) or len(letter.strip()) != 1:
            bad.append('%s i%d: %r is not a bank letter' % (name, n, letter))
            continue
        it.wrongs = None
        it.set(stem=it.stem, ans=letter.strip(), opts=None)
        done += 1
    f.save()
    for b in bad:
        print('  !! ' + b)
    return done, len(bad)


def show(name, want=None, skill='listen'):
    """Print the multiple-choice items of one module, for the author."""
    import importlib
    import qtypes
    m = importlib.import_module('content.%s' % name)
    f, items = _items(name)
    pos = {}
    for i, it in enumerate(items, 1):
        pos[(it.stem, it.why)] = i
    U = getattr(m, 'UNIT', None)
    blocks = []
    if U:
        for ci, c in enumerate(U['cycles'], 1):
            for bi, b in enumerate(c[skill]):
                blocks.append(('c%d %s%d' % (ci, skill[0].upper(), bi), b))
    for addr, b in blocks:
        hot = [it for it in b['items']
               if qtypes.classify(it, b, skill) == (want or 'multiple choice')]
        if not hot:
            continue
        print('\n### %s  %s' % (addr, b.get('task', '')[:70]))
        for i, (who, t) in enumerate(b.get('script') or [], 1):
            print('  t%d %s' % (i, t))
        for p in b.get('paras') or []:
            print('  %s' % p)
        for it in b['items']:
            if it not in hot:
                continue
            n = pos.get((it[0], it[3]))
            print('  i%s ANS=%s %r' % (n, 'ABCDEFGH'[it[2]], it[0]))
            for k, o in enumerate(it[1]):
                print('     %s) %s' % ('ABCDEFGH'[k], o))
            print('     WHY: %s' % it[3])


if __name__ == '__main__':
    show(sys.argv[1], None, sys.argv[2] if len(sys.argv) > 2 else 'listen')
