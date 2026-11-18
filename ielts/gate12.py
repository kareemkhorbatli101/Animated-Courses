# -*- coding: utf-8 -*-
"""GATE 12: no figure without a job.

The series draws 3,639 figures and declares 235 of them in the content.
gate6 proves every one fits its box; gate8 proves every block of text
stays inside the rectangle drawn round it. Nothing asked what any of them
was FOR, and the benchmark found the consequence: 10 of 24 on the visual
system, the whole 10 in data charts for Task 1, and four zeros on the
things a language coursebook lives by - topic activation, vocabulary
visuals, text-structure visuals, and a figure declaring its purpose.

So every figure declares `teaches`, from the closed vocabulary below, and
this gate refuses the build otherwise. A closed vocabulary rather than free
text, because `teaches='looks nice'` would pass a non-empty check and teach
nothing. Decoration becomes impossible to express.

The rules are IELTS_Visual_System.md, Part 4.

Usage:  python3 gate12.py          every book
        python3 gate12.py 3        one book
        python3 gate12.py 3 --detail
"""
import importlib
import sys

import _base                                            # noqa: F401
import pedagogy as PED
import qtypes
import unitmap as UN

# The closed vocabulary. A figure's `teaches` must be one of these.
TEACHES = (
    # activation and interest
    'activate', 'curiosity',
    # vocabulary
    'vocabulary', 'word-formation', 'collocation', 'scale', 'recycling',
    # receptive skill
    'text-structure', 'paraphrase', 'signposting', 'question-anatomy',
    'decision', 'listening-shape',
    # productive skill
    'task-analysis', 'useful-language', 'band-move', 'comparison',
    'answer-shape',
    # metacognition
    'navigation', 'timing', 'self-assessment',
    # content figures: what we already draw well
    'data', 'process', 'plan', 'device', 'timeline',
)
VOCAB_FAMILY = ('vocabulary', 'word-formation', 'collocation', 'scale',
                'recycling')

# What a given renderer is allowed to claim it teaches. A `family` table
# declaring teaches='data' is a lie that a non-empty check would pass, and
# the point of the closed vocabulary is that it cannot be told. The kinds
# that are not listed (the Task 1 charts, the process and map diagrams) may
# claim any content value, because a bar chart genuinely does serve Task 1
# data in one cycle and a Part 3 argument in another.
KIND_TEACHES = {
    'scene': ('activate',),
    'puzzle': ('curiosity', 'activate'),
    'field': ('vocabulary',),
    'family': ('word-formation',),
    'cline': ('scale',),
    'collocation': ('collocation',),
    'skeleton': ('text-structure',),
    'bridge': ('paraphrase',),
    'signpost': ('signposting',),
    'anatomy': ('question-anatomy',),
    'decide': ('decision',),
    'listenmap': ('listening-shape',),
    'taskread': ('task-analysis',),
    'langbank': ('useful-language',),
    'ladder': ('band-move',),
    'matrix': ('comparison',),
    'unitmap': ('navigation',),
    'clock': ('timing',),
    'tracker': ('self-assessment',),
    'timeline': ('timeline',),
    # Two figures written for units 81 and 82. A route is a map, so it
    # declares 'plan'; a stratigraphic section is a timeline standing on
    # its end, which is the whole thing it teaches, so it declares that.
    'route': ('plan',),
    'section': ('timeline',),
}
# Where a figure hangs. `figure`, `figure2` and `figure3` are the three a
# block has always been able to carry; `figures` is the list a rebuilt
# cycle carries; and `scene`, `puzzle` and `unitmap` are the three the
# rebuilt unit opener carries, each named for what it is because a unit
# has exactly one of each.
FIG_KEYS = ('figure', 'figure2', 'figure3', 'figures',
            'scene', 'puzzle', 'unitmap')
LONG_PASSAGE = 600        # words; above this a text-structure figure is due
MIN_FIGS_CYCLE = 4
MIN_PARAPHRASE_UNIT = 2


# Which books this gate is BINDING for. A gate written before its content
# must not turn the whole suite red for eight books at once: that would hide
# every real regression for the length of the rebuild. So the gate reports
# its count for every book and fails the build only for the books that have
# opted in. Volume 3 joins at phase 26, Volume 4 at 31, and so on, each one
# as its rebuild lands.
BINDING = set()
# Phase 19 builds ONE unit completely before the other ninety-five
# copy it, so the gate has to be bindable at unit granularity too.
# A unit in BINDING_UNITS fails the build on its own account even
# while its book is still open.
BINDING_UNITS = {21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 81, 82}


def load(n):
    try:
        m = importlib.import_module('content.u%02d' % n)
    except ModuleNotFoundError:
        return None
    importlib.reload(m)
    return m


def figures(o, at='', out=None):
    """(address, figure) for every declared figure under o.

    A figure is a dict carrying `kind`; `kind` is overloaded in this content
    - a reading block uses it for the text's genre ('Academic passage') -
    so a figure is only what hangs off a `figure`, `figure2`, `figure3` or
    `figures` key. The numbered variants are not decoration: book.py has
    rendered up to three figures per block since the series began, and a
    gate that looked only at `figure` would have let two of every three
    pass undeclared.
    """
    out = [] if out is None else out
    if isinstance(o, dict):
        for k in FIG_KEYS:
            v = o.get(k)
            if isinstance(v, dict):
                out.append((at, v))
            elif isinstance(v, (list, tuple)):
                for i, f in enumerate(v):
                    if isinstance(f, dict):
                        out.append(('%s[%d]' % (at, i), f))
        for k, v in o.items():
            if k not in FIG_KEYS:
                figures(v, '%s.%s' % (at, k) if at else str(k), out)
    elif isinstance(o, (list, tuple)):
        for i, v in enumerate(o):
            figures(v, '%s[%d]' % (at, i), out)
    return out


def passage_words(b):
    return PED.wc(b.get('paras'))



class _Sink(object):
    """A Doc that draws nothing, so a figure can be rendered for the sake
    of finding out whether it can be."""

    def figure(self, *a, **k):
        return None


def draws(spec):
    """'' if book.py can draw this figure, else why not.

    Rule 7, and it was added after units 81 and 82 were written. Every
    other rule in this gate asks whether a figure declares a job; none
    asked whether the figure can be drawn at all. Six specs in those two
    units named the right kind and the wrong keys - a listenmap with
    stages instead of speakers and turns, a collocation with title
    instead of node - and each one passed every gate and then crashed
    the build on the key it was missing, one per run. The renderers'
    signatures are the contract and this is the only place that checks
    it.
    """
    try:
        import book
    except Exception as e:                                # pragma: no cover
        return 'book.py will not import: %s' % e
    try:
        book._figure(_Sink(), spec)
    except Exception as e:
        return '%s: %s' % (type(e).__name__, e)
    return ''

def audit_unit(U):
    bad = []
    tag = 'u%d' % U['n']
    unit_teaches = []

    for at, f in figures(U, tag):
        t = f.get('teaches')
        if not t:
            bad.append('%s: figure %r declares no teaches'
                       % (tag, (f.get('title') or f.get('kind') or '?')))
            continue
        if t not in TEACHES:
            bad.append('%s: figure teaches=%r is not in the vocabulary'
                       % (tag, t))
            continue
        want = KIND_TEACHES.get(f.get('kind'))
        if want and t not in want:
            bad.append('%s: a %r figure cannot teach %r; it teaches %s'
                       % (tag, f.get('kind'), t, ' or '.join(map(repr, want))))
            continue
        unit_teaches.append(t)

    # 2. a unit opens by activating its topic
    if 'activate' not in unit_teaches:
        bad.append('%s: no activation figure' % tag)
    # 5. paraphrase, twice
    n_par = unit_teaches.count('paraphrase')
    if n_par < MIN_PARAPHRASE_UNIT:
        bad.append('%s: %d paraphrase figures, want %d'
                   % (tag, n_par, MIN_PARAPHRASE_UNIT))

    for i, c in enumerate(U['cycles'], 1):
        at = '%s c%d' % (tag, i)
        cyc = [f.get('teaches') for _, f in figures(c, at)]
        # 7. a cycle is not a wall of prose
        if len(cyc) < MIN_FIGS_CYCLE:
            bad.append('%s: %d figures, want %d'
                       % (at, len(cyc), MIN_FIGS_CYCLE))
        # 4. a cycle grows the learner's words
        if not any(t in VOCAB_FAMILY for t in cyc):
            bad.append('%s: no vocabulary figure' % at)
        # 3. a long passage gets its skeleton. Asked of the CYCLE, not of
        # the block: the figure is drawn before the passage, where it is
        # any use, rather than after it where it would be a summary.
        longest = max([passage_words(b) for b in (c.get('read') or [])
                       if not b.get('preview')] or [0])
        if longest >= LONG_PASSAGE and 'text-structure' not in cyc:
            bad.append('%s: %d-word passage, no text-structure figure'
                       % (at, longest))
    # ---- 7. every declared figure can actually be drawn
    for where, f in figures(U, 'u%d' % U['n']):
        why = draws(f)
        if why:
            bad.append('u%d: figure %r at %s will not draw - %s'
                       % (U['n'], f.get('kind'), where, why))
    return bad


def audit_vol(vol, rng, detail=False):
    bad, bound, nfig, taught, anatomy = [], [], 0, set(), set()
    for n in rng:
        m = load(n)
        if m is None:
            continue
        U = m.UNIT
        nfig += len(figures(U, 'u%d' % n))
        mine = audit_unit(U)
        bad += mine
        if n in BINDING_UNITS:
            bound += mine
        for i, c in enumerate(U['cycles'], 1):
            for skill in ('read', 'listen'):
                for b in (c.get(skill) or []):
                    for t in qtypes.types_of(b, skill):
                        taught.add(t)
            for _, f in figures(c, ''):
                if f.get('teaches') == 'question-anatomy':
                    anatomy.add(f.get('about') or '?')
    # 6. a type the book teaches has been taken apart somewhere in the book
    for t in sorted(taught):
        if not any(t.lower() in (a or '').lower() for a in anatomy):
            bad.append('vol %d: %s is tested but never anatomised' % (vol, t))
    return bad, bound, nfig


def report(only=None, detail=False):
    bad, binding = [], []
    for vol, rng in UN.books():
        if only and vol != only:
            continue
        name = ('Foundation %d' % (vol - 6)) if vol > 6 else 'Volume %d' % vol
        fails, bound, nfig = audit_vol(vol, rng, detail)
        print('%-14s %4d declared figures  %4d failure(s)'
              % (name, nfig, len(fails)))
        for f in (fails if detail else fails[:4]):
            print('     ' + f)
        if not detail and len(fails) > 4:
            print('     ... and %d more' % (len(fails) - 4))
        bad += fails
        binding += bound
        if vol in BINDING:
            binding += [f for f in fails if f not in bound]
    return bad, binding


def main(argv):
    only = int(argv[1]) if len(argv) > 1 and argv[1].isdigit() else None
    bad, binding = report(only, '--detail' in argv)
    if binding:
        state = 'FAIL - %d in %s' % (len(binding), sorted(BINDING))
    elif bad:
        bound = (['book %d' % v for v in sorted(BINDING)]
                 + ['unit %d' % n for n in sorted(BINDING_UNITS)])
        state = ('OPEN - %d item(s); green and binding for %s'
                 % (len(bad), ', '.join(bound) or 'nothing yet'))
    else:
        state = 'PASS'
    print('\nGATE 12 (no figure without a job): %s' % state)
    return 1 if binding else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
