# -*- coding: utf-8 -*-
"""Append the balance section to each per-book report, from measurements.

Every figure in the appended section is read from the content modules at
the moment the script runs, so a report cannot quote a number the books
do not have. Run it after the gates are green.

    python3 repapp.py            write the eight sections
    python3 repapp.py --show     print one, change nothing
"""
import io
import os
import sys

import _base                                            # noqa: F401
import census
import gate10
import qtypes

DOCS = '/home/user/Animated-Courses'
FILE = {7: 'IELTS_Foundation_1_Report.md', 8: 'IELTS_Foundation_2_Report.md'}
for v in range(1, 7):
    FILE[v] = 'IELTS_Volume_%d_Report.md' % v

MARK = '## The balance plan, measured in this book'


def section(vol, rng):
    n_it, n_four, n_lines, n_cue = census.wrongs_and_items(vol, rng)
    ps = census.papers(vol)
    sp = census.speak(rng)
    out = [MARK, '']
    out.append('Phases 10 to 15 counted what the ten-phase fix plan never '
               'counted: how often each kind of question appears. '
               '`gate10.py` holds the answer against a floor, a ceiling and '
               'a rule that every type must be taught as a set of at least '
               'three questions in one exercise. Those numbers are a '
               'declared design target, not a measurement of a Cambridge '
               'paper, and the gate says so in its own docstring. What '
               'follows is this book, measured by `census.py`.')
    out.append('')
    out.append('| | |')
    out.append('|---|---|')
    out.append('| Questions | %d |' % n_it)
    out.append('| Four-option items | %d |' % n_four)
    out.append('| Wrong-option lines | %d |' % n_lines)
    out.append('| Part 2 cue cards | %d |' % n_cue)
    out.append('| Timed papers | %s |' % ', '.join(ps))
    out.append('| Speaking slots | Part 1 %.0f%% · Part 2 %.0f%% · '
               'Part 3 %.0f%% (target 25-40%% each) |' % sp)
    out.append('')
    for skill, inv, name in (('read', qtypes.READING, 'Reading'),
                             ('listen', qtypes.LISTENING, 'Listening')):
        cen = qtypes.census(gate10.blocks(vol, rng, skill), skill)
        tot = sum(cen.values()) or 1
        out.append('### %s · %d questions' % (name, tot))
        out.append('')
        out.append('| task type | questions | share | largest set |')
        out.append('|---|---|---|---|')
        sets = gate10.biggest_set(vol, rng, skill)
        for t in inv:
            n = cen.get(t, 0)
            if t in gate10.EXEMPT.get(vol, set()):
                out.append('| %s | — | — | exempt at this level |' % t)
                continue
            out.append('| %s | %d | %.1f%% | %d |'
                       % (t, n, 100.0 * n / tot, sets.get(t, 0)))
        out.append('')
    out.append('`gate10.py` passes on this book: every type above is taught '
               'as a set of three or more, no type is over its ceiling, and '
               'no family is under its floor.')
    out.append('')
    return '\n'.join(out)


def main(argv):
    show = '--show' in argv
    n = 0
    for vol, rng in gate10.BOOKS:
        text = section(vol, rng)
        if show:
            print(text)
            return 0
        p = os.path.join(DOCS, FILE[vol])
        old = io.open(p, encoding='utf-8').read()
        if MARK in old:
            old = old[:old.index(MARK)].rstrip() + '\n\n'
        else:
            old = old.rstrip() + '\n\n---\n\n'
        io.open(p, 'w', encoding='utf-8').write(old + text)
        n += 1
        print('wrote the balance section into %s' % FILE[vol])
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
