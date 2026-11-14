# -*- coding: utf-8 -*-
"""Vocabulary control for the Foundation volume.

Volumes 1-4 declare a level. This one proves it. Every content word that
appears in a Foundation text must be one of:

  * in the general-service band (content/_band.py), or
  * taught by name in this unit or an earlier one, or
  * a proper noun the unit declares, or
  * a closed-class item English cannot do without.

Anything else fails the build. That is the difference between a book labelled
A2 and a book that is A2.
"""
import re
from ._band import BAND

# Function words, numerals and the handful of items a beginner text needs that
# a subtitle corpus ranks oddly. Nothing here carries topic meaning.
CLOSED = set("""
a an the this that these those i you he she it we they me him her us them
my your his its our their mine yours hers ours theirs myself yourself himself
herself itself ourselves yourselves themselves
am is are was were be been being do does did done doing have has had having
will would shall should can could may might must ought need dare used
and or but so because if when while until after before since as than that
although though unless whether either neither both
in on at to from of for with without about above below under over between
among through across along around behind beside beyond into onto upon
by near next during against within toward towards per via off out up down
not no nor never nothing nobody none neither nowhere
all any some each every few many much more most less least several other
another same such only just even still yet also too very quite rather
who whom whose which what where when why how
one two three four five six seven eight nine ten eleven twelve thirteen
fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty
fifty sixty seventy eighty ninety hundred thousand million
first second third fourth fifth sixth seventh eighth ninth tenth
eleventh twelfth thirteenth fourteenth fifteenth sixteenth seventeenth
eighteenth nineteenth twentieth thirtieth fortieth fiftieth hundredth
don't doesn't isn't aren't wasn't weren't can't won't didn't haven't
hasn't couldn't shouldn't wouldn't it's i'm you're we're they're he's she's
monday tuesday wednesday thursday friday saturday sunday
january february march april may june july august september october
november december
mr mrs ms dr st ok okay yes
o'clock edu com org ltd am pm cent per
""".split())

# The furniture of the book itself: the task names, the parts of a page and the
# words the instructions are written in. They are glossed in the front matter
# and they are not what the vocabulary gate is for.
COURSE = set("""
announcement conversation tutorial lecture campus college student students
teacher classroom exercise exercises vocabulary grammar sentence sentences
paragraph question questions answer answers option options test unit units
module section reading listening speaking writing email notice poster board
script interview repeat discussion post professor model review glossary
practice guided exam audio partner pairs tick underline complete choose
passage passages
correct incorrect example examples topic skill skills level cefr toefl
internet wifi online ly ing ed es ies ally
score scores band bands academic
""".split())

_WORD = re.compile(r"[A-Za-z][A-Za-z'’-]*")
_SUFFIX = (('ies', 'y'), ('ied', 'y'), ('ier', 'y'), ('iest', 'y'),
           ('es', ''), ('s', ''), ('ed', ''), ('ing', ''), ('er', ''),
           ('est', ''), ('ly', ''), ('d', ''), ('n', ''))


def _forms(w):
    """Every spelling of w a text might reasonably use."""
    out = {w}
    if w.endswith('y') and len(w) > 2 and w[-2] not in 'aeiou':
        out |= {w[:-1] + s for s in ('ies', 'ied', 'ier', 'iest')}
    if w.endswith('e'):
        out |= {w + 'd', w + 's', w[:-1] + 'ing', w + 'r', w + 'st'}
    else:
        out |= {w + 's', w + 'es', w + 'ed', w + 'ing', w + 'er', w + 'est', w + 'ly'}
        if len(w) > 2 and w[-1] not in 'aeiouwxy' and w[-2] in 'aeiou' and w[-3] not in 'aeiou':
            d = w + w[-1]
            out |= {d + 'ed', d + 'ing', d + 'er', d + 'est'}
    return out


def expand(words):
    """A taught word licenses its inflections."""
    out = set()
    for w in words:
        for part in re.split(r"[ –-]", w.lower()):
            part = part.strip("'’")
            if part:
                out |= _forms(part)
    return out


def _known(tok, allowed):
    if tok in allowed:
        return True
    for suf, repl in _SUFFIX:
        if tok.endswith(suf) and len(tok) - len(suf) >= 2:
            stem = tok[:-len(suf)] + repl
            if stem in allowed or stem + 'e' in allowed:
                return True
    return False


def unknown(text, taught, names=()):
    """The words in text that this book has not earned the right to use."""
    allowed = (BAND | CLOSED | COURSE | expand(taught)
               | {n.lower() for n in names} | expand(list(names)))
    bad = []
    for m in _WORD.finditer(text):
        whole = m.group(0).lower().replace('\u2019', "'")
        for tok in whole.split('-'):
            tok = tok.strip("'")
            if tok.endswith("'s"):
                tok = tok[:-2]
            # single letters are letters: this book spells names out loud
            if len(tok) < 2 or tok in ("'", 's', 't', 'll', 're', 've', 'm', 'd'):
                continue
            if not _known(tok, allowed):
                bad.append(m.group(0))
                break
    return bad
