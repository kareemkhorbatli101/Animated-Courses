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
}
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
    so a figure is only what hangs off a `figure` or `figures` key.
    """
    out = [] if out is None else out
    if isinstance(o, dict):
        for k in ('figure', 'figures'):
            v = o.get(k)
            if isinstance(v, dict):
                out.append((at, v))
            elif isinstance(v, (list, tuple)):
                for i, f in enumerate(v):
                    if isinstance(f, dict):
                        out.append(('%s[%d]' % (at, i), f))
        for k, v in o.items():
            if k not in ('figure', 'figures'):
                figures(v, '%s.%s' % (at, k) if at else str(k), out)
    elif isinstance(o, (list, tuple)):
        for i, v in enumerate(o):
            figures(v, '%s[%d]' % (at, i), out)
    return out


def passage_words(b):
    return PED.wc(b.get('paras'))


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
        # 3. a long passage gets its skeleton
        for j, b in enumerate(c.get('read') or []):
            w = passage_words(b)
            if w >= LONG_PASSAGE:
                here = [f.get('teaches') for _, f in figures(b, at)]
                if 'text-structure' not in here:
                    bad.append('%s R%d: %d-word passage, no text-structure '
                               'figure' % (at, j, w))
    return bad


def audit_vol(vol, rng, detail=False):
    bad, nfig, taught, anatomy = [], 0, set(), set()
    for n in rng:
        m = load(n)
        if m is None:
            continue
        U = m.UNIT
        nfig += len(figures(U, 'u%d' % n))
        bad += audit_unit(U)
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
    return bad, nfig


def report(only=None, detail=False):
    bad, binding = [], []
    for vol, rng in UN.books():
        if only and vol != only:
            continue
        name = ('Foundation %d' % (vol - 6)) if vol > 6 else 'Volume %d' % vol
        fails, nfig = audit_vol(vol, rng, detail)
        print('%-14s %4d declared figures  %4d failure(s)'
              % (name, nfig, len(fails)))
        for f in (fails if detail else fails[:4]):
            print('     ' + f)
        if not detail and len(fails) > 4:
            print('     ... and %d more' % (len(fails) - 4))
        bad += fails
        if vol in BINDING:
            binding += fails
    return bad, binding


def main(argv):
    only = int(argv[1]) if len(argv) > 1 and argv[1].isdigit() else None
    bad, binding = report(only, '--detail' in argv)
    if binding:
        state = 'FAIL - %d in %s' % (len(binding), sorted(BINDING))
    elif bad:
        state = ('OPEN - %d item(s); binding for %s'
                 % (len(bad), sorted(BINDING) or 'no book yet'))
    else:
        state = 'PASS'
    print('\nGATE 12 (no figure without a job): %s' % state)
    return 1 if binding else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
