# -*- coding: utf-8 -*-
"""The record shapes the outline is written in.

Everything in a book module is built from these, so the generator can count
coverage instead of trusting prose: how many readings a cycle carries, which
question types a unit sets, whether both Task 1 forks appear, which
scaffolding step an exercise sits on.
"""


def R(heading, kind, words, qtypes):
    """One reading text: its heading, what kind of text it is, its length
    band and the question types set on it."""
    return dict(heading=heading, kind=kind, words=words, qtypes=qtypes)


def L(heading, part, qtypes, words=None):
    """One recording: heading, which Part of the real paper it models,
    the question types, and the script length where it is fixed."""
    return dict(heading=heading, part=part, qtypes=qtypes, words=words)


def S(part, focus, cue=None):
    """The speaking group: which part, what it is about, and the cue card
    title where the cycle carries a long turn."""
    return dict(part=part, focus=focus, cue=cue)


def W(task, heading, structure=None, fork=None):
    """The writing task. `fork` is 'A' or 'GT' where Task 1 forks, and the
    cycle carries both records side by side."""
    return dict(task=task, heading=heading, structure=structure, fork=fork)


def C(sub, read, listen, speak, write, gram, vocab, expr, trans, step):
    """One cycle: one sub-topic through all four skills, with the grammar,
    vocabulary, expressions and transitions it teaches from its own texts."""
    return dict(sub=sub, read=read, listen=listen, speak=speak, write=write,
                gram=gram, vocab=vocab, expr=expr, trans=trans, step=step)


def U(n, theme, cycles, technique, outlining, review):
    """One unit: a general theme, five cycles, and the three strands."""
    return dict(n=n, theme=theme, cycles=cycles, technique=technique,
                outlining=outlining, review=review)
