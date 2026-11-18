# -*- coding: utf-8 -*-
"""GATE 11: every cycle teaches before it tests, and says why it exists.

Written before the content it checks, which is the only order that works.
Phase 17 writes this gate FAILING on all eight books; phases 19-26 make it
pass on Volume 3; phases 28-55 make it pass on the rest.

The audit that produced it (IELTS_Volume_3_Pedagogy_Audit.md) measured a
volume that was 15.1% teaching prose and 84.9% test material, with 113 of
its 124 inputs set cold and two cross-references in 569 pages. The eight
rules below are that audit turned into a build dependency.

Rule 2 is the one that matters most. A cycle must declare what test task it
serves, and the name it declares is cross-checked against what qtypes.py
actually finds in that cycle's blocks - so a justification cannot be wrong
for long, which is the whole reason the notes are a required field in the
content rather than prose in a teacher's margin.

Usage:  python3 gate11.py          every book
        python3 gate11.py 3        one book
        python3 gate11.py 3 --detail
"""
import importlib
import re
import sys

import _base                                            # noqa: F401
import pedagogy as PED
import qtypes
import unitmap as UN

NOTE_FIELDS = ('serves', 'because', 'skill', 'evidence', 'watch', 'time')
MIN_BECAUSE = 40           # characters; a one-word justification is not one
PROSE_FLOOR = 35.0         # per cent of a cycle's words that must teach
XREF_FLOOR = 6             # cross-references per unit
SKILL_QKIND = 'skill'      # what marks a Skills builder item as not-exam
# The `teaches` values that name a figure carrying subject matter rather
# than instruction. Everything else in gate12's vocabulary names a figure
# that is itself the lesson.
CONTENT_FIGS = ('data', 'process', 'plan', 'device', 'timeline')


def _figs(c):
    """Every declared figure in a cycle, wherever it hangs."""
    out = []
    def walk(o):
        if isinstance(o, dict):
            for k in ('figure', 'figure2', 'figure3'):
                if isinstance(o.get(k), dict):
                    out.append(o[k])
            for k in ('figures',):
                for f in (o.get(k) or ()):
                    if isinstance(f, dict):
                        out.append(f)
            for k, v in o.items():
                if k not in ('figure', 'figure2', 'figure3', 'figures'):
                    walk(v)
        elif isinstance(o, (list, tuple)):
            for v in o:
                walk(v)
    walk(c)
    return out

# A preview input is a short text or recording that warms the topic before
# the exam-length one. It is declared, not guessed: `preview=True` on the
# block. Every unit needs at least one of each kind across its five cycles.
PREVIEW = 'preview'


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
BINDING_UNITS = {21, 22, 23, 24, 25}


def load(n):
    """Tolerant, because a declared unit need not be written yet."""
    try:
        m = importlib.import_module('content.u%02d' % n)
    except ModuleNotFoundError:
        return None
    importlib.reload(m)
    return m


def cycle_words(c):
    """Every word printed in a cycle, so a share can be a share of it."""
    return PED.wc([c.get(k) for k in
                   ('sub', 'read', 'listen', 'speak', 'write', 'gram',
                    'vocab', 'expr', 'trans', 'lead', 'advice', 'outside',
                    'builder', 'notes', 'debrief', 'vocabwork',
                    'figures')])


def teach_words(c):
    """The words that teach rather than test."""
    out = 0
    for k in ('lead', 'advice', 'outside'):
        out += PED.wc(c.get(k))
    # the Skills builder and the vocabulary work minus their figures,
    # which _figs picks up below and would otherwise count twice
    for k in ('builder', 'vocabwork'):
        d = c.get(k) or {}
        out += sum(PED.wc(v) for kk, v in d.items()
                   if kk not in ('figure', 'figure2', 'figure3',
                                 'figures'))
    g = c.get('gram') or {}
    out += PED.wc([g.get('explain'), g.get('context'), g.get('notice'),
                   g.get('examples')])
    out += PED.wc(c.get('debrief'))
    # A figure counts as teaching exactly when it says it teaches. The
    # `teaches` field gate12 requires is a closed vocabulary, and the
    # content values in it - data, process, plan, device, timeline - name
    # the figures that carry subject matter; everything else names a
    # figure whose whole content is instruction. A paraphrase bridge IS
    # the lesson, labels and all; a bar chart for Task 1 is the thing the
    # lesson is about. For a content figure only the note teaches.
    for f in _figs(c):
        if f.get('teaches') in CONTENT_FIGS:
            out += PED.wc(f.get('note'))
        else:
            out += PED.wc(f)
    for b in (c.get('read') or []) + (c.get('listen') or []):
        out += PED.wc([b.get('skill'), b.get('why')])
    for w in (c.get('write') or []):
        out += PED.wc([w.get('notes'), w.get('plan'), w.get('instruct')])
    return out


def declared_types(c):
    """What qtypes.py actually finds in this cycle's exam blocks."""
    got = set()
    for skill in ('read', 'listen'):
        for b in (c.get(skill) or []):
            if b.get(PREVIEW) or b.get('builder'):
                continue
            for t in qtypes.types_of(b, skill):
                got.add(qtypes._lower(t) if hasattr(qtypes, '_lower') else t)
    return got


def builder_ok(c):
    """A Skills builder exists and its practice is not in exam format."""
    b = c.get('builder')
    if not isinstance(b, dict):
        return 'no Skills builder'
    if PED.wc(b.get('explain')) < 80:
        return 'Skills builder explanation under 80 words'
    if not b.get('worked'):
        return 'Skills builder has no worked example'
    items = b.get('items') or []
    if len(items) < 4:
        return 'Skills builder has %d practice items, want 4' % len(items)
    if b.get('qkind') != SKILL_QKIND:
        return "Skills builder must carry qkind='skill' so the item "\
               'census excludes it'
    return None


def audit_unit(U):
    """Every rule, for one unit. Returns a list of failure strings."""
    bad = []
    tag = 'u%d' % U['n']
    previews = set()
    for i, c in enumerate(U['cycles'], 1):
        at = '%s c%d' % (tag, i)

        # 1. the notes exist and are complete
        notes = c.get('notes')
        if not isinstance(notes, dict):
            bad.append('%s: no notes' % at)
        else:
            missing = [f for f in NOTE_FIELDS if not notes.get(f)]
            if missing:
                bad.append('%s notes: missing %s' % (at, ', '.join(missing)))
            # 3. the justification is a justification
            if len(notes.get('because') or '') < MIN_BECAUSE:
                bad.append('%s notes: because is %d chars, want %d'
                           % (at, len(notes.get('because') or ''),
                              MIN_BECAUSE))
            # 2. what it claims to serve is what is actually there
            serves = notes.get('serves') or ''
            got = declared_types(c)
            if got:
                claim = re.split(r'[;,]', serves)[0].strip().lower()
                if claim and not any(claim in t.lower() or t.lower() in claim
                                     for t in got):
                    bad.append("%s notes: serves %r, but qtypes finds %s"
                               % (at, claim, sorted(got) or 'nothing'))

        # 4. the three short teaching beats
        for k, what in (('lead', 'lead-in'),
                        ('advice', 'exam-advice box'),
                        ('outside', 'outside-the-exam line')):
            if not c.get(k):
                bad.append('%s: no %s' % (at, what))

        # 5. the Skills builder
        why = builder_ok(c)
        if why:
            bad.append('%s: %s' % (at, why))

        # 6. collect this cycle's preview kinds for the unit-level rule
        for skill in ('read', 'listen'):
            for b in (c.get(skill) or []):
                if b.get(PREVIEW):
                    previews.add(skill)

        # 7. the teaching share
        tot = cycle_words(c)
        share = 100.0 * teach_words(c) / (tot or 1)
        if share < PROSE_FLOOR:
            bad.append('%s: %.1f%% teaching prose, want %.0f%%'
                       % (at, share, PROSE_FLOOR))

    # 6. one preview reading and one preview listening per unit
    for skill, what in (('read', 'preview reading'),
                        ('listen', 'preview listening')):
        if skill not in previews:
            bad.append('%s: no %s in any of its cycles' % (tag, what))

    # 8. the unit hangs together
    n = len(PED.XREF.findall(' '.join(
        str(x) for x in (U.get('opener'), U.get('technique'),
                         U.get('outlining'), U.get('tip')))
        + ' ' + ' '.join(
        str(c.get(k)) for c in U['cycles']
        for k in ('lead', 'advice', 'outside', 'builder', 'gram'))))
    if n < XREF_FLOOR:
        bad.append('%s: %d cross-references, want %d' % (tag, n, XREF_FLOOR))
    return bad


def report(only=None, detail=False):
    bad, binding = [], []
    for vol, rng in UN.books():
        if only and vol != only:
            continue
        name = ('Foundation %d' % (vol - 6)) if vol > 6 else 'Volume %d' % vol
        fails, cycles = [], 0
        for n in rng:
            m = load(n)
            if m is None:
                continue
            cycles += len(m.UNIT['cycles'])
            mine = audit_unit(m.UNIT)
            fails += mine
            if n in BINDING_UNITS:
                binding += mine
        print('%-14s %2d cycles  %4d failure(s)' % (name, cycles, len(fails)))
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
        bound = (['book %d' % v for v in sorted(BINDING)]
                 + ['unit %d' % n for n in sorted(BINDING_UNITS)])
        state = ('OPEN - %d item(s); green and binding for %s'
                 % (len(bad), ', '.join(bound) or 'nothing yet'))
    else:
        state = 'PASS'
    print('\nGATE 11 (teach before you test, and say why): %s' % state)
    return 1 if binding else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
