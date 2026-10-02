# -*- coding: utf-8 -*-
"""Helper for Complete the Words.

Write the paragraph with the missing letters in braces:

    gaps('arrive at the same sol{ution}. The eye evolved independ{ently}...')

and get back the text with the right number of dashes and the answer list, so
the two can never disagree. The checker verifies the pair; this stops the
mismatch arising in the first place.
"""
import re

_G = re.compile(r'\{([A-Za-z]+)\}')


def gaps(src):
    answers = _G.findall(src)
    text = _G.sub(lambda m: '-' * len(m.group(1)), src)
    if '-' in _G.sub('', src):
        raise ValueError('a hyphen outside a gap would be counted as one: %r'
                         % _G.sub('', src))
    return text, answers
