# -*- coding: utf-8 -*-
"""Generative blanks.

A handout paragraph is written out in full, with the words the student must
supply wrapped in braces:

    'Costs that attach to the product are called {product} costs.'

The renderer turns each brace into a numbered rule of the right width and
records the answer. The answer key is therefore produced from the same string
as the exercise and cannot drift away from it. It also means the page can be
read back with every brace removed, which is how the "completed handout is the
summary" rule gets checked mechanically.
"""
import re

BRACE = re.compile(r'\{([^{}]*)\}')


class Blanks:
    """Numbers blanks across a whole handout and collects the key."""

    def __init__(self, tag=''):
        self.tag = tag
        self.n = 0
        self.key = []          # (number, answer, note)

    def parse(self, src, note=''):
        """Split a source string into ('t', text) and ('b', number, answer) parts."""
        parts, last = [], 0
        for m in BRACE.finditer(src):
            if m.start() > last:
                parts.append(('t', src[last:m.start()]))
            self.n += 1
            ans = m.group(1)
            parts.append(('b', self.n, ans))
            self.key.append((self.n, ans, note))
            last = m.end()
        if last < len(src):
            parts.append(('t', src[last:]))
        return parts

    def add(self, answer, note=''):
        """Reserve a number for a blank that lives in a table or a diagram."""
        self.n += 1
        self.key.append((self.n, answer, note))
        return self.n


def plain(src):
    """The paragraph as the student will have it once every blank is filled."""
    return BRACE.sub(lambda m: m.group(1), src)


def stripped(src):
    """The paragraph with the blanks removed, for the readability check."""
    return BRACE.sub('', src)


def answers(src):
    return BRACE.findall(src)
