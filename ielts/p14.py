# -*- coding: utf-8 -*-
"""Phase 14: give the speaking strand its Part 2.

Every book in the series ran sixty per cent of its speaking slots as Part
3 and ten per cent as Part 2, and the two Foundation books printed a Part
2 long turn with no cue card at all, which is not a long turn: the card
is the task. Gate 10 asks each part for between a quarter and two fifths
of a book's slots.

The fix is not to relabel a discussion as a long turn. It is to put a
real card in front of the discussion the slot already holds, which is the
order the real test uses - card, one minute of notes, up to two minutes
of talk, one or two rounding-off questions, then the discussion those
questions open. A slot that does both is labelled as doing both, and the
gate counts it half to each part.

Nothing is deleted and nothing moves between slots: every question the
series already taught is still asked, in the same slot, under the same
focus, after the new ones. That is what `keep` means below.

    from p14 import convert
    convert('u01', 3, part='Part 2 into Part 3', pre=0,
            card=('Describe something you have learned since leaving '
                  'school.',
                  ['what it was', 'how you learned it',
                   'how long it took', 'and explain why you wanted to']),
            rounds=['Would you learn something else the same way?',
                    'Do many people around you learn things like this?'])
"""
import importlib.util
import os

import _base                                            # noqa: F401
import speakedit

HERE = os.path.dirname(os.path.abspath(__file__))

# The examiner's own words, which do not vary in the real test, so they do
# not vary here either.
INSTR = 'Now look at the card. You have one minute to make notes.'

# Six ways of saying card-first, because the same sentence a hundred and
# seventy-nine times is its own kind of drift. Each keeps the teaching
# that was already in the slot's lead-in, which follows it.
PREFIX = [
    'Take the card first. One minute to make notes, then one to two '
    'minutes of talk, and the bullets are the order to take them in. '
    'Then the discussion: ',
    'The card comes first. Make your notes inside the minute you are '
    'given, speak until you are stopped, and let the last bullet carry '
    'the weight. Then the discussion: ',
    'Card first, and the last bullet is the one that earns the band: it '
    'asks you to explain rather than to list. After the long turn the '
    'discussion opens: ',
    'Start with the card. Notes for a minute, then talk, developing each '
    'bullet instead of adding bullets of your own. The discussion '
    'follows: ',
    'The long turn first. A minute of notes, then one to two minutes, '
    'and the examiner closes it with a short question or two. Then the '
    'discussion: ',
    'Work the card first: a minute of notes, the long turn, then the one '
    'or two questions that round it off. The discussion after that: ',
]


def _load(name):
    p = os.path.join(HERE, 'content', name + '.py')
    spec = importlib.util.spec_from_file_location('p14_' + name, p)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def _lower1(s):
    """The old lead-in, joined onto the new one. 'Three or four' lower-cases
    cleanly; a 'Part 1' or an 'I' at the front does not, so it is left."""
    if len(s) > 1 and s[1].islower():
        return s[0].lower() + s[1:]
    return s


def convert(name, cycle, part=None, card=None, rounds=(), pre=0, focus=None,
            instr=INSTR, keep=True):
    """Put a card in front of the questions a speaking slot already asks."""
    m = _load(name)
    sp = m.UNIT['cycles'][cycle - 1]['speak']
    old = list(sp['qs'])
    new = ([instr] if instr else []) + list(rounds) + (old if keep else [])
    intro = sp['intro']
    if card is not None:
        intro = PREFIX[pre % len(PREFIX)] + _lower1(intro)
    n = speakedit.edit(name, cycle, part=part, cue=card, intro=intro,
                       qs=new, focus=focus)
    return n


def check(name):
    """The slot labels of one unit and what each part is worth."""
    m = _load(name)
    tot = {'Part 1': 0.0, 'Part 2': 0.0, 'Part 3': 0.0}
    for ci, c in enumerate(m.UNIT['cycles'], 1):
        p = str(c['speak'].get('part'))
        got = [x for x in tot if x in p]
        for g in got:
            tot[g] += 1.0 / len(got)
        print('  c%d %-22s %s' % (ci, p, 'card' if c['speak'].get('cue')
                                  else ''))
    print('  %s' % '  '.join('%s %.1f' % (k, v) for k, v in sorted(tot.items())))
