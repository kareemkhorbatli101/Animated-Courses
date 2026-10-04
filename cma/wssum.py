# -*- coding: utf-8 -*-
"""Chapter 1 as extensive gapped summaries.

A different shape from the cycle handouts in wsgen. There is one exercise
type on the whole sheet: a summary of a stretch of the chapter with words
taken out. No multiple choice, no matching, no sorting, no rounds.

The summaries are extensive in a definite sense: every sentence of the
section appears in one of them, in the order the section puts it, so the
set of summaries IS the section rather than a selection from it. A reader
who fills in every gap has read the whole of it and written the load-bearing
words themselves. Coverage therefore holds by construction, which is why
this file needs no coverage gate.

The words are the chapter's own. Nothing is paraphrased: a summary made of
the chapter's sentences is a summary by selection and sequencing, and that
is the only kind that cannot introduce accounting the chapter does not say.
"""
from __future__ import print_function

import collections
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import parsebook as PB          # noqa: E402
import wsgen as WG              # noqa: E402
import wsvis as VIS             # noqa: E402

clean = WG.clean
shuffled = WG.shuffled
STOP = WG.STOP

# The chapter marks its boxes with a shouted label on the line.
BOX = re.compile(r'^(EXAM TRAP|LANGUAGE FOCUS|SECTION CHECK|TERM BRIDGE|'
                 r'IFRS CONTRAST|FALSE-FRIEND ALERT|WHAT YOU ALREADY KNOW|'
                 r'WORKED EXAMPLE|YOUR TURN)\s*', re.I)
# A caption line belongs to its figure.
CAP = re.compile(r'^\s*(Figure|Table|Exhibit)\s+[A-Z]?\d[\d.\-]*\.?\s', re.I)
# An item number of the chapter's own banks means nothing on a sheet.
ITEMID = re.compile(r'\b(?:SC\d{1,3}-\d{1,2}|P\d{1,2}-\d{2}|P\d{2}|'
                    r'C\d{1,3}-\d)\b')
# A pointer to something the sheet does not print.
# Book 1 numbers its figures F05-01 and book 2 numbers them F213-01, so
# two digits was book 1's convention rather than the books'. With the
# narrow pattern every figure reference in books 2 and 3 read as prose and
# landed on the sheets, which is the one thing these handouts must not do:
# they replace the book, so they cannot point into it.
FIGREF = re.compile(r'\bFigure\s+F?\d{1,4}[-.–]\d{1,3}\b')
# A sentence that hangs off one it does not print cannot open a summary.
# A demonstrative followed by a concrete noun is not dangling: "This
# example sets out the halva's budget year by year" names its own subject
# and opens a block perfectly well. Books 2 and 3 open their worked
# examples that way, and twenty-eight blocks were reported as hanging.
NOTDANGLE = re.compile(r'^(?:(?:this|that|these|those)\s+'
                       r'(?:example|exercise|section|chapter|case|method|'
                       r'approach|rule|test|table|figure|step|study|'
                       r'report|statement|schedule|worksheet|entry|'
                       r'standard|model|policy|note)\b'
                       # "Both regression and learning curves turn past
                       # data into better estimates" names what it is
                       # about; "both of them" does not.
                       r'|both\s+(?!of\b)[a-z-]+\s+and\b)', re.I)
DANGLE = re.compile(r'^(these|this|that|those|it|they|them|such|here|both|'
                    r'either|neither|so|then|however|therefore|also|but|and|'
                    r'its|their|finally|lastly|moreover|furthermore|again|'
                    r'in addition|for example|in contrast)\b', re.I)


def dangling(text):
    """Does this open on a word with nothing in front of it to refer to?"""
    t = clean(text)
    return bool(DANGLE.match(t)) and not NOTDANGLE.match(t)
# A full stop inside one of these does not end a sentence.
ABBREV = re.compile(
    r'(?:\b(?:U\.S|U\.K|E\.U|e\.g|i\.e|etc|vs|No|Nos|Inc|Co|Corp|Ltd|Jr|Sr|'
    r'Mr|Mrs|Ms|Dr|St|approx|cf|al|Fig|Sec|Art|para|pp|ch|Jan|Feb|Mar|Apr|'
    r'Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)\.|\b[A-Z]\.)$')

# One gap for about this many words of summary. Denser than this and the
# sentence stops being readable before it is filled; thinner and the reader
# is proof-reading rather than recalling.
# One gap every eleven words. Thirteen left the shorter sections with nine
# or ten gaps on a whole sheet, which is not twenty minutes of work.
WORDS_PER_GAP = 11
MIN_GAPS, MAX_GAPS = 2, 12
# Words per summary block, not sentences. The chapter writes short
# sentences, so a block of five of them came out at fifty words and took
# three gaps, which is a paragraph rather than the extensive summary these
# sheets are supposed to be. Blocks are built to a word target instead and
# always break on a sentence end.
BLOCK_WORDS = 135
BLOCK_MIN = 2


# ------------------------------------------------------------------ reading
def split_sentences(text):
    """Sentence ends, but not the full stop of an abbreviation."""
    out, buf = [], ''
    for piece in re.split(r'(?<=[.])\s+', text):
        buf = (buf + ' ' + piece).strip() if buf else piece.strip()
        if ABBREV.search(buf):
            continue
        out.append(buf)
        buf = ''
    if buf:
        out.append(buf)
    return out


def is_proseline(line):
    """Is this line of the chapter a paragraph, or a cell of a table?

    The chapter's tables arrive flattened to one cell per line, so a line
    that does not read as a sentence is furniture. Requiring a capital and
    a full stop keeps "Buy, hold or sell shares" out of the prose, which is
    where it belongs: it is a cell of the users table and the sheet shows it
    as one.

    What this test does NOT do is judge a line by anything one of its
    sentences happens to contain. It used to: a line mentioning a figure
    was dropped whole, and because the chapter ends many a paragraph on
    "Figure F17-04 shows Orontes's olive oil", that silently took the
    three sentences in front of it off the sheet as well. Across the book
    it lost 273 sentences of real prose. A figure reference is a property
    of one sentence, so it is screened one sentence at a time, below.
    """
    x = clean(line)
    # A LINE is rejected only for what it is as a whole: a box label, a
    # row of capitals. Everything else -- the capital it opens on, the
    # full stop it ends with, the figure it names -- is a property of one
    # SENTENCE, and judging the line by it threw the rest of the line
    # away three separate times. "Figure F03-03 puts the same numbers
    # into both layouts. The single-step form is simpler to read, but it
    # hides useful information." is one line; the first sentence is a
    # pointer and the second is the section's point.
    if not x or x.isupper() or BOX.match(x):
        return False
    if re.match(r'^[A-E][.)]\s', x):
        return False
    return len(x) >= 20


def is_prose(line):
    """Is this a sentence of the chapter's own prose?

    The floor is four words rather than thirty characters. Thirty threw
    away "IFRS does not allow LIFO." and "There are also challenges." —
    short sentences that carry the section's whole point, and in the second
    case the pivot that marks where its two halves divide.
    """
    x = clean(line)
    if not is_proseline(x):
        return False
    # And here is where those properties belong.
    if not x.endswith('.') or CAP.match(x):
        return False
    # The capital belongs HERE, on the sentence, not on the line it came
    # from. The chapter's false-friend entries read "income and revenue -
    # Arabic ... Revenue is the gross amount from sales.", so the line
    # opens lowercase and the rule threw away twenty-six sentences of
    # exactly the guidance these readers need.
    if not x[0].isupper():
        return False
    if ITEMID.search(x) or FIGREF.search(x):
        return False
    return len(x.split()) >= 4


BOOKREF = re.compile(
    r'(?:\s*[,;(]\s*)?\b(?:as\s+|which\s+|see\s+)?Chapters?\s+\d+'
    r'(?:\s*(?:to|and|\u2013|-)\s*\d+)?\s*'
    r'(?:shows?|showed|introduced|introduces?|explains?|explained|gives?|'
    r'gave|studies|study|studied|covers?|covered|will cover|has)?'
    r'[^,.;:)]*\)?', re.I)


# A pointer at a figure, but only where the figure is WHERE something is
# and not WHAT the sentence is about. "Every relative share in Figure
# F302-13 equals the unit's share" is a sentence about relative share;
# "Figure F216-04 shows a yearly saving of $100,000" is a sentence about
# a figure, and nothing is left of it once the figure goes, so it is
# dropped whole as before.
FIGNO = r'(?:Figure|Table|Exhibit)\s+F?\d{1,4}[-.\u2013]\d{1,3}\b'
FIGCLAUSE = re.compile(
    r'\s*\(\s*(?:see\s+)?' + FIGNO + r'\s*\)'
    r'|\s*,?\s*(?:as\s+)?(?:listed|shown|set\s+out|given|summar[iy]zed'
    r'|summarised|illustrated|drawn|reported|presented)\s+(?:in|by)\s+'
    + FIGNO + r'\s*,?'
    r'|\s+(?:in|of|at|from|on)\s+' + FIGNO,
    re.I)


SELFCLAUSE = re.compile(
    r'[,;]\s*(?:and\s+|but\s+|which\s+|so\s+)?[^,;]*'
    r'\bthis\s+(?:chapter|book|section|volume|part)\b[^,;.]*', re.I)
TRAIL = re.compile(r'\s*(?:[,;:]\s*)?\b(?:which\s+is\s+what|which|that|'
                   r'when|while|as|and|or|but|than|what|who|whose|where|'
                   r'because|if)\s*\.$', re.I)


def unbooked(text):
    """The sentence without the clause that points into the book.

    "Customer deposits are contract liabilities, as Chapter 11 showed:
    they become revenue when Orontes delivers." Everything in that
    sentence except five words is content these sheets have to carry, so
    the five words go and the sentence stays. Only when the pointer IS
    the sentence does the sentence go with it.
    """
    # The pointer at a figure is a clause too. Dropping the sentence
    # whole took "Benchmarking helps create an advantage in four ways"
    # off the sheet of book 2 section 15.5 and left the sentence after it
    # opening on "It sets targets", with nothing on the page for "It" to
    # mean. A sentence that is ONLY the pointer still goes, because what
    # is left of it is too short to be prose.
    had_stop = clean(text).endswith('.')
    out = FIGCLAUSE.sub(' ', clean(text))
    out = BOOKREF.sub('', out)
    # And an aside that points at the book itself: "Its role rests on a
    # single principle, AND IT IS THE MOST USEFUL SENTENCE IN THIS
    # CHAPTER". Book 4 writes several of these, and dropping the sentence
    # for the sake of the aside took the principle with it.
    out = SELFCLAUSE.sub('', out)
    out = re.sub(r'\s*([,;:])\s*([,;:])', r'\1', out)
    out = re.sub(r'\s*,\s*:', ':', out)
    # The pointer takes the preposition that introduced it with it.
    # Without this, "This is the matching principle from Chapter 11."
    # came out as "This is the matching principle from ." and
    # "like the receivables in Chapter 6: the company" as "in : the".
    out = re.sub(r'(?:,\s*)?\b(?:from|in|of|like|as|see|per|under)\s*'
                 r'(?=[.:;]|$)', '', out)
    # The word that introduced the pointer goes with it. "It stays open
    # until year-end, when Chapter 8 closes it" came out as "...until
    # year-end, when." -- the clause was removed and the subordinator
    # that led into it was left holding the full stop. A preposition is
    # NOT in this list: "an activity customers are willing to pay for" is
    # a sentence, and cutting it back would be the fix doing the damage.
    for _n in range(3):
        cut = TRAIL.sub('', out)
        if cut == out:
            break
        out = cut + '.'
    # And a bracket the pointer was inside: "(Section 7.5, the case set
    # and Chapter 12)" lost its closing bracket with the pointer.
    if out.count('(') > out.count(')'):
        out = out[:out.rindex('(')].rstrip(' ,;:') + '.'
    out = re.sub(r',\s*,', ',', out)
    out = re.sub(r'\s{2,}', ' ', out).strip(' ,;')
    out = re.sub(r'\s+([.,;:])', r'\1', out)
    # The full stop goes back only if there was one. Adding it regardless
    # turned fragments into sentences: "Investors (shareholders) -
    # PRIMARY" is a cell of the users table and has no full stop, and
    # with one appended it read as prose and the coverage check asked for
    # it on a sheet.
    # The cuts above each put the full stop back so the next pattern can
    # anchor on it; here it comes off again if the text never had one.
    if not had_stop:
        out = out.rstrip('. ')
    elif out and not out.endswith('.'):
        out += '.'
    return clean(out)


def raw_cells(d, sec):
    """Every cell of every table the chapter puts in this section.

    tables_in applies quality filters -- it drops the glossaries, the
    front matter, the worksheets with nothing in them -- which is right
    for deciding what to PRINT and wrong for deciding what is already a
    cell. A cell of a table the sheet does not print is still not prose.
    """
    want = clean(sec['no'])
    out = []
    for i, tb in enumerate(d['tables']):
        if clean(d['tsec'].get(str(i), '')) != want:
            continue
        # A box arrives as a table of one column, and its body is prose:
        # the chapter's exam traps and false-friend alerts are written in
        # sentences. Counting them as cells took that prose out of
        # prose_sents, which left the blocks built from it with no
        # position and the sheet reading out of the chapter's order.
        if not tb or len(tb[0]) < 2:
            continue
        out.append((i, list(tb[0]), [list(r) for r in tb[1:]]))
    return out


def cell_sents(tbls):
    """Every sentence that is already a cell of one of these tables.

    A cell can read exactly like a sentence -- "Investors (shareholders)
    - PRIMARY.", "What does the company have and owe?" -- and the sheet
    shows it as a cell, where it belongs. Without this it is read as
    prose as well, and the coverage check then asks for it twice.
    """
    out = set()
    for t in (tbls or []):
        for r in [t[1]] + list(t[2]):
            for c in r:
                v = clean(c)
                if not v:
                    continue
                out.add(v.lower())
                for x in split_sentences(v):
                    out.add(clean(x).lower())
    return out


def prose_sents(text, cells=()):
    """Every sentence of the chapter's own prose in this text, cleaned.

    One place, so the cleaning is the same everywhere. It used to be an
    inline comprehension repeated at five call sites, and a sentence's
    identity is the key those sites match on, so the moment one of them
    cleaned differently from another the sets stopped lining up.
    """
    out = []
    for ln in text.split('\n'):
        if not is_proseline(ln):
            continue
        # A caption line IS the whole line -- "Figure F01-01. Users of
        # financial statements and what they need." -- and it describes a
        # drawing the handout does not reproduce, so all of it goes. That
        # is different from a sentence that merely names a figure in
        # passing, which keeps the paragraph it sits in.
        if CAPLINE.match(clean(ln)):
            continue
        # And a question of the chapter's own bank. The item number sits
        # on the first sentence of the line -- "SC2-6 At December 31 a
        # company breaks a covenant..." -- so testing sentence by
        # sentence let the rest of the question through as prose, and the
        # sheet, which stops at the bank, could never carry it.
        if ITEMID.search(clean(ln)):
            continue
        for x in split_sentences(clean(ln)):
            # Shape first, then the clauses come out, and only then the
            # tests that a figure reference would fail. The other order
            # threw the sentence away before its pointer could be cut.
            if not is_proseline(x) or not english_only(x):
                continue
            x = unbooked(x)
            if not is_prose(x):
                continue
            # "Chapter 12 explains deferred taxes in detail" is a pointer
            # into a book the reader has not got. These sheets replace the
            # book, so a pointer is the one kind of sentence they drop.
            if SELFREF.search(x):
                continue
            if cells and (x.lower() in cells
                          or deglossed(x).lower() in cells):
                continue
            out.append(deglossed(x))
    return out


def subhead(line):
    """A line of the section that is its own heading, not a sentence."""
    x = clean(line)
    if not x or len(x) > 72:
        return None
    if BOX.match(x):
        return clean(BOX.sub('', x, count=1))
    if x.endswith('?') and len(x.split()) >= 3:
        return x
    return None


FRONT = re.compile(r'\b(los|level|depth here|key terms?|'
                   r'after this chapter)\b', re.I)


XREFCOL = re.compile(r'^(?:in|where|see|from)\b.{0,24}\b'
                     r'(?:this\s+)?(?:book|chapter|volume|part)\b'
                     r'|^(?:this\s+)?(?:book|chapter|volume)\b', re.I)


def shaped_any(tb):
    """A table of the chapter, shaped for a summary sheet.

    More permissive than wsgen's version in one way that matters. A journal
    carries its row number and date only on the first line of each entry,
    so its later rows open with empty cells — and wsgen rejects any table
    whose first column has a hole, which threw away the only real table in
    section 1.3, the worked January journal. Here an empty cell is part of
    the shape rather than a defect.

    Everything the chapter uses a table for that is NOT data is still
    rejected: its boxes (one cell), its glossaries (Arabic, handled
    separately) and its front matter.
    """
    if not tb or len(tb) < 3:
        return None
    n = len(tb[0])
    # Nine, not six. Six threw away six tables, and one of them was the
    # statement of changes in equity itself: seven columns, because equity
    # has six components and a total. A chapter on equity whose handout
    # does not carry that statement is missing the thing it is about.
    if n < 2 or n > 9 or any(len(r) != n for r in tb):
        return None
    # Book 4 gives several of its tables a column that points back into
    # the book -- "Where this book met it", "In this book" -- holding
    # entries like "Chapter 16's warning". On a handout that is a pointer
    # at something the reader has not got, which is the one thing these
    # sheets may not carry, and it is not content either way. The column
    # goes; the rest of the table stays.
    drop = [j for j in range(len(tb[0]))
            if XREFCOL.match(clean(tb[0][j]))]
    if drop and len(tb[0]) - len(drop) >= 2:
        tb = [[c for j, c in enumerate(r) if j not in drop] for r in tb]
        n = len(tb[0])
    head = [clean(c)[:48] for c in tb[0]]
    # A statement's top-left cell is often blank, because the column
    # holds the line items and needs no name. Any OTHER blank header means
    # the rows and the header are out of step, which is a broken table.
    if any(not h for h in head[1:]) \
            or head[0].lower().startswith('english'):
        return None
    body = [[clean(c)[:140] for c in r] for r in tb[1:]]
    if WG.ARABIC.search(' '.join(head) + ' '.join(c for r in body
                                                  for c in r)):
        return None
    body = [r for r in body if r != head and any(r)]
    body = [r for r in body
            if not any(FIGREF.search(c) for c in r)]
    if len(body) < 2:
        return None
    if FRONT.search(' '.join(head).lower()):
        return None
    return head, body


def chapter_tables(d):
    """Every table of the chapter, section by section, in order.

    Cached on the parsed chapter: the worksheet merge needs the whole
    chapter to pair a worksheet with its key, and building the list once
    per section made the chapter quadratic in its own tables.
    """
    got = d.get('_alltbls')
    if got is None:
        got = [t for sec in d['sections'] for t in tables_in(d, sec)]
        d['_alltbls'] = got
    return got


def tables_in(d, sec):
    """Every data table the chapter places in this section, in order.

    The chapter's own index says which section each table belongs to, so
    there is no need to guess from position or from matching header lines.
    wsgen reads the same index but then pools the spare tables between
    sections, which is right when each sheet wants one table to model and
    wrong here: it gave section 1.6 five tables, three of them the same
    one, while 1.2 and 1.3 got none. A summary sheet wants the tables the
    section itself contains and no others. The chapter repeats some tables
    verbatim, so they are deduped by content.
    """
    want = clean(sec['no'])
    out, seen = [], set()
    for i, tb in enumerate(d['tables']):
        if clean(d['tsec'].get(str(i), '')) != want:
            continue
        sh = shaped_any(tb)
        if not sh:
            continue
        head, body = sh
        # A table whose other columns are all empty is a worksheet the
        # chapter left blank for the reader. It has no content to gap and
        # no answers, so printing it teaches nothing.
        if len(head) > 1 and not any(clean(c) for r in body
                                     for c in r[1:]):
            continue
        key = '|'.join(head) + '#' + '|'.join(r[0] for r in body)
        if key in seen:
            continue
        seen.add(key)
        out.append((i, head, body))
    return out


CAPLINE = re.compile(r'^(?:Figure|Table|Exhibit)\s+(F?[\d.\-]+[A-Za-z]?)\.'
                     r'\s+(.+)$')


def caption_for(d, sec):
    """Each table index in this section mapped to its caption.

    Attaching a caption to whichever table came next in the text got it
    wrong: the caption of figure F01-04 landed on the worked journal, which
    is a different table that merely follows it. The chapter already records
    which table each figure is, so that index is used instead. A figure
    sometimes points at the box that holds the grid rather than the grid, so
    if the recorded index is not a table the next index that is one takes
    the caption.
    """
    text = {}
    for ln in sec['text'].split('\n'):
        m = CAPLINE.match(clean(ln))
        if m:
            text[m.group(1)] = m.group(2).rstrip('.')
    out = {}
    for fid, ti in (d.get('figures') or {}).items():
        cap = text.get(fid) or text.get(fid.lstrip('F'))
        if not cap or not 0 <= ti < len(d['tables']):
            continue
        # Only when the recorded index IS a table. Walking forward to the
        # next one gave the caption of a diagram to whatever grid happened
        # to follow it: F01-04 is a drawing of the debit and credit rules,
        # and its caption ended up on the worked January journal.
        if shaped_any(d['tables'][ti]):
            out.setdefault(ti, cap)
    return out


def segments(sec, tbls):
    """The section in order, as prose runs, headings and tables.

    Nothing is skipped by length. An earlier version placed a table and
    then skipped a guessed number of lines for it, which ate fifteen real
    sentences of section 1.3. Instead every line is judged on its own: a
    sentence joins the prose, a heading breaks it, a line that is the first
    header cell of a table not yet placed puts the table there, and
    anything else — the rest of the table's cells, the captions, the
    chapter's furniture — is simply not prose and is passed over.
    """
    lines = sec['text'].split('\n')
    pending = list(tbls)
    # Every cell of every table in this section, so that a cell is never
    # mistaken for a sub-heading. "Will the company pay its bills when due?"
    # is a cell of the users table, and reading it as a heading broke
    # section 1.1 into nine dividers.
    cells = set()
    for t in tbls:
        for r in [t[1]] + list(t[2]):
            for c in r:
                if clean(c):
                    cells.add(clean(c))
    out, run = [], []

    def flush():
        if run:
            out.append(('prose', list(run)))
            del run[:]

    for ln in lines:
        x = clean(ln)
        if CAPLINE.match(x):
            continue              # a caption belongs to its figure, not here
        hit = next((t for t in pending if clean(t[1][0]) == x), None)
        if hit is not None:
            flush()
            pending.remove(hit)
            out.append(('table', hit))
            continue
        h = None if x in cells else subhead(ln)
        if h:
            h = deglossed(h).rstrip(' ,;')
        if h and english_only(h):
            flush()
            out.append(('head', h))
            continue
        if x in cells:
            continue
        if is_proseline(ln):
            for sent in split_sentences(x):
                if not is_proseline(sent) or not english_only(sent):
                    continue
                sent = unbooked(sent)
                if not is_prose(sent) or SELFREF.search(sent):
                    continue
                run.append(deglossed(sent))
    flush()
    # A table whose header cell never appeared on a line of its own still
    # belongs to the section, so it goes at the end rather than nowhere.
    for t in pending:
        out.append(('table', t))
    return out


# ------------------------------------------------------------------ gapping
def _stem(w):
    """Enough of a word to tell "expense" from "expenses" and no more."""
    w = w.lower().strip('.,;:()\u201c\u201d')
    for suf in ("'s", 'ies', 'edly', 'ing', 'ies', 'ed', 'ly', 'es', 's'):
        if len(w) > 5 and w.endswith(suf):
            return w[:-len(suf)]
    return w


def _same(a, b):
    """Would these two read as the same answer in a word list?

    Not only a singular against its plural. A list holding "current" and
    "noncurrent", or "realized" and "unrealized", or "Orontes" and
    "Orontes's", gives at least one gap two defensible answers — a reader
    who writes the shorter one into the longer one's slot has written
    something the list offers. Containment in either direction counts, and
    so does the stem once the ordinary endings are off.
    """
    x, y = a.lower().strip(), b.lower().strip()
    if _stem(x) == _stem(y):
        return True
    if len(min(x, y, key=len)) > 4 and (x in y or y in x):
        return True
    return False


def candidates(sent, terms):
    """What could be taken out of this sentence, best first.

    A glossary term is the best gap: it is what the chapter is teaching and
    what an exam question turns on. After that, the longest words that are
    not ordinary English. Numbers are never gapped — recalling a figure
    from a word list is a memory trick, not understanding.
    """
    out, seen = [], set()
    for t in sorted(terms, key=len, reverse=True):
        if len(t) < 4 or re.search(r'\d', t):
            continue
        for m in re.finditer(r'\b%s\b' % re.escape(t), sent, re.I):
            w = sent[m.start():m.end()]
            if w.lower() in seen:
                continue
            seen.add(w.lower())
            out.append((m.start(), m.end(), w, 2))
            break
    for m in re.finditer(r"\b[A-Za-z][A-Za-z\-']{5,}\b", sent):
        w = m.group(0)
        if w.lower() in STOP or w.lower() in seen:
            continue
        seen.add(w.lower())
        out.append((m.start(), m.end(), w, 1))
    out.sort(key=lambda x: (-x[3], -len(x[2])))
    return out


def _spread(sents, terms, picks, want, per, freq, avoid=''):
    """Take up to `per` gaps from each sentence, adding to what is there.

    Every rule the block has lives here: a word the block prints twice is
    never taken, a block never opens on a gap, two gaps are never twelve
    characters apart, and no two answers read alike.
    """
    picks = list(picks)
    for si, sent in enumerate(sents):
        got = sum(1 for p in picks if p[3] == si)
        for a, b, w, _rank in candidates(sent, terms):
            if got >= per or len(picks) >= want:
                break
            if freq[w.lower()] != 1 or len(
                    re.findall(r'(?<![\w-])%s(?![\w-])' % re.escape(w),
                               ' '.join(sents), re.I)) != 1:
                continue
            if si == 0 and a == 0:
                continue            # a block may not open on a gap
            # Once on the SHEET, not once in the block. The rule was
            # always that a word the reader can see is not a question;
            # applied to the block alone it left a word gapped in a
            # paragraph and printed in the grid under it, which is most
            # of a thousand gaps a reader could fill by looking down the
            # page instead of thinking.
            if avoid and re.search(
                    r'(?<![\w-])%s(?![\w-])' % re.escape(w), avoid, re.I):
                continue
            if any(_same(w, x[2]) for x in picks):
                continue            # "current" and "noncurrent" in one list
            if any(abs(a - x[1]) < 12 or abs(b - x[0]) < 12
                   for x in picks if x[3] == si):
                continue            # never two gaps side by side
            picks.append((a, b, w, si))
            got += 1
    return picks


def gap_block(sents, terms, seed, spare_pool=(), avoid=''):
    """One summary block: the sentences, gapped, with a word list.

    Gaps are spread across the block rather than bunched in one sentence,
    and two gaps are never adjacent, so there is always readable text
    between them to work from. A word that appears twice in the block is
    never gapped: the list would hold it once and two slots would claim it.
    """
    text = ' '.join(sents)
    nwords = len(text.split())
    # A short block takes fewer gaps rather than the minimum regardless: a
    # twenty-word block forced to three gaps was one gap every 6.7 words,
    # which leaves nothing to reason from.
    want = min(MAX_GAPS, max(2, nwords // WORDS_PER_GAP))
    if nwords < 3 * 8:
        want = min(want, max(0, nwords // 8))
    if want < 2:
        return None
    # count across the whole block, so a word repeated in two sentences is
    # out of the running for both
    freq = collections.Counter(
        w.lower() for w in re.findall(r"\b[A-Za-z][A-Za-z\-']+\b", text))
    # Spread first, then fill. The even share across sentences is what
    # keeps the gaps off one line, but it is a share of what the block
    # CAN give: "Multiplying the old volume by the new margin ignores the
    # cases lost" offers five words and the sentence after it offers none
    # of its own, because both of its candidates appear twice. Capped at
    # one each, the block found a single gap, fell below the floor of two
    # and printed with nothing to do on it. So the cap is lifted on a
    # second pass over whatever is left.
    picks = []
    for per in (max(1, (want + len(sents) - 1) // len(sents)), want):
        picks = _spread(sents, terms, picks, want, per, freq, avoid)
        if len(picks) >= want:
            break
    # And a last pass with the sheet-wide avoid lifted, but only for a
    # block the rule has taken HALF its gaps from. A word the paragraph
    # above also prints is a weaker gap, and a block short of one or two
    # of them is still a good block; a block down to one gap out of six
    # is not, and below two it is dropped from the sheet altogether.
    # Lifting the rule on every shortfall put three hundred copyable
    # gaps back; lifting it on the halved blocks alone costs a handful.
    if avoid and len(picks) < 2:
        picks = _spread(sents, terms, picks, want, want, freq, '')
    if len(picks) < 2:
        return None
    # rebuild the block with the gaps in reading order
    parts, answers = [], []
    for si, sent in enumerate(sents):
        mine = sorted((p for p in picks if p[3] == si), key=lambda x: x[0])
        pos = 0
        for a, b, w, _s in mine:
            parts.append(sent[pos:a])
            parts.append(max(11, len(w) + 2))
            answers.append(w)
            pos = b
        tail = sent[pos:] + ' '
        parts.append(tail)
    # One spare in the list, so it cannot be finished by counting. It may
    # not contain an answer or sit inside one: a list holding both
    # "conceptual" and "conceptual framework" gives one gap two defensible
    # answers, which is worse than no spare at all.
    spare = VIS.pick_spare(
        answers, [x for x in spare_pool
                  if not any(_same(x, w) for w in answers)], seed + 17)
    if spare is None:
        # Nothing in the pool clears the clash test. Rather than hand over
        # a list with exactly as many words as gaps — which a reader
        # finishes by counting — the last gap is given back to the text,
        # and the word that was going to be its answer becomes the spare.
        while len(answers) > 2 and spare is None:
            cand = answers[-1]
            if not any(_same(cand, w) for w in answers[:-1]):
                spare = cand
            answers = answers[:-1]
        if spare is None:
            return None
        parts, kept = [], list(answers)
        pos = 0
        for si, sent in enumerate(sents):
            mine = sorted((pp for pp in picks if pp[3] == si),
                          key=lambda x: x[0])
            pos = 0
            for a, b, w, _s in mine:
                if w not in kept:
                    continue
                kept.remove(w)
                parts.append(sent[pos:a])
                parts.append(max(11, len(w) + 2))
                pos = b
            parts.append(sent[pos:] + ' ')
    bank = list(answers) + [spare]
    return dict(parts=parts, answers=answers,
                bank=shuffled(bank, seed), book=text)


# ------------------------------------------------------------------ tables
# A cell short enough to copy off a word list is blanked whole. Past this
# it keeps its text and gives up one phrase inside it — the same rule the
# figures use, and for the same reason: filling a slot with seventy
# characters of someone else's sentence is transcription, not recall.
WHOLE_CELL = 56
MARK = '\x00'


def inside(a, b):
    """Is `a` a separate phrase within `b`?

    Not a run of letters, and not a part of a hyphenated word. "Asset"
    inside "contra-asset" and "current liability" inside "noncurrent
    liability" are the classifications a grid exists to teach, and a row
    names its own item, so a reader has to choose between them rather
    than guess. What is genuinely ambiguous is a list inside a longer
    list: "cash flows, balance sheet" inside "income statement, cash
    flows, balance sheet".
    """
    a, b = clean(a).lower(), clean(b).lower()
    if not a or a == b:
        return False
    return bool(re.search(r'(?<![\w-])%s(?![\w-])' % re.escape(a), b))


def visible_in(a, text):
    """Is this answer already printed in that text?

    The boundary ignores an apostrophe and a hyphen, so "parent" counts as
    printed by "parent's". A frequency count over word tokens does not:
    it reads "parent" and "parent's" as two different words, and gapped
    the one the other spells out two lines above.
    """
    a, text = clean(a), clean(text or '')
    if not a or not text:
        return False
    return bool(re.search(r'(?<![\w-])%s(?![\w-])' % re.escape(a),
                          text, re.I))


def prefixed(a, b):
    """Does `b` begin with `a`, and then go on?

    "No" and "No: 5 of 30 years (17%)" are two answers for one slot
    however short the first is, so this one carries no length floor: a
    reader who writes "No" in the slot that wanted the second has not
    been caught out by anything the sheet taught.
    """
    a, b = clean(a).lower(), clean(b).lower()
    if not a or a == b or not b.startswith(a):
        return False
    return bool(re.match(r'^[\s:,;(\u2014\u2013-]', b[len(a):]))


def cell_phrase(v, terms=(), label=True):
    """The one phrase inside a long cell that is worth taking out.

    The chapter writes its answer cells as "Noncurrent asset: it is not
    expected to be turned into cash within a year" — a classification, a
    colon, and why. The classification is the whole of what the row
    teaches, so that is the gap, and the reason that follows is what a
    reader works from. Where there is no colon, the section's own
    vocabulary comes next, and the cell's longest distinctive word last.
    """
    m = re.match(r'^([^:]{4,44}):\s', v) if label else None
    if m:
        return clean(m.group(1))
    for t in sorted(terms, key=len, reverse=True):
        if not 4 < len(t) <= 44:
            continue
        mm = re.search(r'\b%s\b' % re.escape(t), v, re.I)
        if mm:
            return v[mm.start():mm.end()]
    words = sorted((w for w in re.findall(r"[A-Za-z][A-Za-z\-']{6,}", v)
                    if w.lower() not in STOP), key=len, reverse=True)
    return words[0] if words else None


def gap_table(t, seed, share=0.5, terms=(), title='', pool=(), avoid=''):
    """A table of the chapter with some of it taken out.

    A table is a summary in tabular form, so it is gapped the same way the
    prose is. The first column always stays: it is what names the row, and a
    row with no name cannot be reasoned about. A cell that another row also
    holds is never gapped, for the same reason a repeated word is not.

    A cell too long to blank whole is not skipped. Skipping it printed
    thirty-two grids across the book with nothing to do on them, and among
    them were the chapter's own answer tables — "Municipal bond interest |
    Permanent difference" — so the sheet asked the question and printed
    the answer beside it.
    """
    _i, head, body = t
    # An amount is never gapped. A trial balance gapped on its figures asks
    # a reader to recall 300 from a list of numbers, which is a memory
    # trick with nothing behind it — and it left rows with every cell
    # blank, which cannot be reasoned about at all.
    #
    # The first column is normally left alone, because it names the row.
    # A table of names against amounts is the exception: there the amounts
    # are the clue and the name is the thing worth recalling, so that is
    # the column the gaps go in. Otherwise a trial balance yields nothing.
    # A column of amounts, judged by weight of evidence rather than by
    # every cell. One cell reading "none" in a thirty-six-row statement of
    # cash flows made the whole column look like text, so the gaps went to
    # the amounts, every amount was refused, and the statement printed
    # whole.
    numeric = []
    for j in range(1, len(head)):
        # A cell the chapter left for the reader to fill in is evidence of
        # nothing, so it votes neither way. Counting it as an amount made
        # the Classification column of a blank worksheet look numeric, and
        # the gaps would have gone to the questions.
        vals = [clean(r[j]) for r in body
                if clean(r[j]) and not BLANKCELL.match(clean(r[j]))]
        nums = [v for v in vals if NUMONLY.match(v)]
        # A handful of exceptions does not make a column of amounts into a
        # column of text: one cell reading "none" in a statement of cash
        # flows, two explanatory notes among six figures.
        # Three numbers is evidence; so is unanimity. A two-row
        # allocation grid has every cell of every column a number and
        # only two of each, so the three-value bar never cleared and the
        # gaps went to the amounts, where every one was refused -- and
        # the grid printed whole with its percentages in it.
        if not vals:
            continue
        if len(nums) == len(vals) or (
                len(nums) >= 3
                and len(vals) - len(nums) <= max(2, len(vals) // 7)):
            numeric.append(j)
    first = len(numeric) == len(head) - 1
    cols = [0] if first else range(1, len(head))
    # Whether the label before a colon is worth taking is a property of
    # the COLUMN, not of one cell. In chapter 5 the labels are Operating,
    # Investing, Financing -- the whole of what the row teaches. In
    # chapter 4 every one of them is "Retained earnings", so a sheet built
    # on them would ask the same question four times and answer it in the
    # heading. The label is used only where it tells the rows apart.
    uselabel = {}
    for j in cols:
        labs = set()
        for r in body:
            v = clean(r[j])
            m = re.match(r'^([^:]{4,44}):\s', v)
            if m and len(v) > len(clean(m.group(1))) + 8:
                labs.add(clean(m.group(1)).lower())
        uselabel[j] = len(labs) >= 2
    # (row, column, the answer, the cell as it is printed or None for whole)
    cells = []
    for i in range(len(body)):
        for j in cols:
            v = clean(body[i][j])
            if not v or NUMONLY.match(v) or BLANKCELL.match(v):
                continue
            # The label before a colon is the answer whatever the cell's
            # length. Taking it only from the long cells made one row
            # offer "Noncurrent asset" and the next the whole of
            # "Noncurrent asset: all deferred taxes are noncurrent", and
            # the first then read as contained in the second, so both
            # went and the table had too little left to gap.
            # A value the rest of its own row prints, or the column
            # heading, is copied across rather than recalled: a row
            # reading "Sales revenue | ____" with "Revenue" as the
            # answer asks nothing.
            # The heading of the table counts as printed too: a grid
            # headed "Common temporary and permanent differences" answers
            # every gap in its own Type column.
            # And the rest of the sheet: the paragraphs above the grid
            # and the other grids on it. "Equipment" was the answer to a
            # cell of the trial balance while the paragraph beside it
            # read "depreciation reduces equipment".
            # A column heading that ASKS is not a heading that answers.
            # "Controllable by the plant manager?" names the axis, and
            # "Controllable" and "Not controllable" are two different
            # answers on it, so a reader still has to decide -- but the
            # word is there in the question, and the rule refused every
            # cell of the column and printed the chapter's own worksheet
            # whole, with its answers in it.
            around = ' '.join(clean(c) for c2, c in enumerate(body[i])
                              if c2 != j) + ' ' + ' '.join(
                                  clean(h) for h in head
                                  if not clean(h).endswith('?')) + ' ' \
                + clean(title) + ' ' + (avoid or '')
            lab = re.match(r'^([^:]{4,44}):\s', v) if uselabel[j] else None
            if lab and len(v) > len(clean(lab.group(1))) + 8:
                ph = clean(lab.group(1))
                mk = re.sub(r'\b%s\b' % re.escape(ph), MARK, v, count=1)
                if MARK in mk and not visible_in(ph, around) \
                        and not visible_in(ph, mk):
                    cells.append((i, j, ph, mk))
                    continue
            if len(v) <= WHOLE_CELL:
                if not visible_in(v, around):
                    cells.append((i, j, v, None))
                continue
            ph = cell_phrase(v, terms, label=uselabel[j])
            if not ph or NUMONLY.match(ph):
                continue
            mk = re.sub(r'\b%s\b' % re.escape(ph), MARK, v, count=1)
            # And the rest of the cell the phrase was taken from: only
            # the first occurrence becomes the slot, so a second one two
            # words later prints the answer beside its own gap.
            if MARK not in mk or visible_in(ph, around) \
                    or visible_in(ph, mk):
                continue
            cells.append((i, j, ph, mk))
    # A value several rows share is NOT dropped. Dropping it emptied the
    # chapter's classification tables, where sharing a value is the whole
    # point: three items are permanent differences, and that is what the
    # row teaches. What the word list cannot take is two slots claiming
    # one entry, so the value stays a candidate and at most one of its
    # occurrences is ever gapped.
    # "Cash flows, balance sheet" sits inside "Income statement, cash flows,
    # balance sheet", so a list holding both gives one slot two defensible
    # entries. Neither is gapped.
    #
    # The comparison is by index. An earlier version wrote `v is not
    # clean(body[i][j])` to skip the cell itself, but clean() returns a new
    # string every call, so the test was always true, every cell matched
    # itself, and every table on every sheet lost all its gaps.
    vals = [c[2].lower() for c in cells]
    keep = []
    for a, c in enumerate(cells):
        me = vals[a]
        # Equal is not contained. Allowing a shared value as a candidate
        # and then asking whether it sits inside another made every one of
        # its own copies answer yes, so the classification tables emptied
        # again by the next rule down.
        # Contained AS A PHRASE, not as a run of letters. "Current asset"
        # sits inside "noncurrent asset" the way "ear" sits inside
        # "year", and dropping both left the classification tables with
        # too few cells to gap -- while the case the rule is for,
        # "cash flows, balance sheet" inside "income statement, cash
        # flows, balance sheet", still matches on word boundaries.
        if any(b != a and ((len(me) > 5 and inside(me, vals[b]))
                           or prefixed(me, vals[b]) or prefixed(vals[b], me))
               for b in range(len(vals))):
            continue
        keep.append(c)
    # A cell the clash filter removed can still give up a word INSIDE it.
    # The debt-classification grid answers "Noncurrent", "All noncurrent"
    # and "Noncurrent; disclose", each of which contains another, so every
    # one of them went and the grid printed whole with its answers in it.
    # One word out of such a cell clashes with nothing and is the same
    # reading.
    kept = [c[2].lower() for c in keep]
    for c in cells:
        if c in keep or len(keep) >= max(3, len(cells) // 2):
            continue
        v = clean(body[c[0]][c[1]])
        ph = cell_phrase(v, terms, label=False)
        if not ph or len(ph) < 5 or NUMONLY.match(ph):
            continue
        if any(inside(ph.lower(), x) or inside(x, ph.lower())
               or prefixed(ph.lower(), x) or prefixed(x, ph.lower())
               for x in kept):
            continue
        mk = re.sub(r'\b%s\b' % re.escape(ph), MARK, v, count=1)
        # And not a word the rest of the sheet prints, like every other
        # candidate: this is the path that recovers a cell the clash
        # filter dropped, and it was the one path that did not look.
        if MARK not in mk or visible_in(ph, mk) \
                or (avoid and visible_in(ph, avoid)):
            continue
        keep.append((c[0], c[1], ph, mk))
        kept.append(ph.lower())
    cells = keep
    # Two is the floor, the same as a paragraph's -- except on a grid so
    # small that one gap is all it has. Three refused a four-row answer
    # table whose two usable cells were a better exercise than printing
    # the table whole, and two refused a two-row one whose other cell
    # says "unfavorable" twice and so cannot be gapped at all. Refusing
    # it means printing the answers, which is the worse of the two.
    content = sum(1 for i in range(len(body)) for j in cols
                  if clean(body[i][j]) and not NUMONLY.match(clean(body[i][j]))
                  and not BLANKCELL.match(clean(body[i][j])))
    if len(cells) < (1 if content <= 4 else 2):
        return None
    # Rounded up, not to nearest: a five-cell table at 42 per cent rounds
    # to two, which leaves a reader almost nothing to do.
    want = max(2, min(10, -(-len(cells) * 45 // 100)))
    def _rendered(chosen):
        """The grid as the reader meets it, for telling rows apart."""
        where = dict(((c[0], c[1]), c) for c in chosen)
        out = []
        for i2, r in enumerate(body):
            o = [clean(x) or ' ' for x in r]
            for j2 in range(len(head)):
                c = where.get((i2, j2))
                if c is not None:
                    o[j2] = c[3] if c[3] is not None else ''
            out.append(tuple(o))
        return out

    percol = collections.Counter(c[1] for c in cells)
    pick, byrow, bycol, taken = [], collections.Counter(), \
        collections.Counter(), set()
    for c in shuffled(cells, seed):
        if len(pick) >= want:
            break
        if byrow[c[0]] >= max(1, (len(head) - 1) // 2):
            continue
        # And never a whole column. A column with every cell blank is a
        # column with nothing to reason from: the row names the item, and
        # the other columns are what say what kind of thing the answer is.
        if percol[c[1]] > 1 and bycol[c[1]] >= percol[c[1]] - 1:
            continue
        # One slot per entry in the word list. Two slots sharing a word
        # is what the exam's own drag-and-drop does, and the treasury-
        # stock journal needs it -- it names "Cash" on three of its nine
        # lines and finds one gap without it -- but the word list is a
        # list, the key is a list, and a reader who meets "Cash" once
        # against two slots cannot tell which it answers. That is a
        # change to the bank and the key, not to the gapping.
        if c[2].lower() in taken:
            continue
        # A gap must not make its row the twin of another. The
        # cost-of-quality report gaps the item names, and two of its
        # items cost 150,000 each, so both rows came out as
        # "____ | 150,000", with two different names in the word list
        # and nothing on the sheet to tell them apart. The candidate is
        # passed over and the next one tried, rather than the gap being
        # given back: dropping it shrank two of book 1's grids below
        # what they need to be worth printing.
        trial = _rendered(pick + [c])
        if len(set(trial)) != len(trial):
            continue
        pick.append(c)
        taken.add(c[2].lower())
        byrow[c[0]] += 1
        bycol[c[1]] += 1
    # Two gaps normally, but one on a grid that only has two cells worth
    # taking: one gap and one worked row is a small exercise, and printing
    # the whole thing is no exercise at all.
    if len(pick) < (1 if len(cells) <= 3 else 2):
        return None
    pick.sort(key=lambda c: (c[0], c[1]))

    def _rendered(chosen):
        """The grid as the reader meets it, for telling rows apart."""
        where = dict(((c[0], c[1]), c) for c in chosen)
        out = []
        for i2, r in enumerate(body):
            o = [clean(x) or ' ' for x in r]
            for j2 in range(len(head)):
                c = where.get((i2, j2))
                if c is not None:
                    o[j2] = c[3] if c[3] is not None else ''
            out.append(tuple(o))
        return out

    if len(pick) < (1 if content <= 4 else 2):
        return None
    at = dict(((c[0], c[1]), c) for c in pick)
    # The renderer treats an empty cell as a writing slot, so a cell the
    # chapter itself leaves empty — a journal's row number on the second
    # line of an entry — has to be handed over as a space. Otherwise the
    # sheet asks a reader to fill in blanks that have no answer.
    rows = []
    for i, r in enumerate(body):
        out = [clean(c) or ' ' for c in r]
        for j in range(len(head)):
            c = at.get((i, j))
            if c is not None:
                out[j] = c[3] if c[3] is not None else ''
        rows.append(out)
    answers = [c[2] for c in pick]
    # A spare has to come from somewhere. On a four-row table every
    # candidate is used, so there was none, and a reader could finish the
    # last gap by elimination. The column's other values come first,
    # because they are the same kind of thing; the section's vocabulary
    # after that.
    spares = [c[2] for c in cells if (c[0], c[1]) not in at]
    cols_used = sorted(set(c[1] for c in pick))
    for j in cols_used:
        for r in body:
            v = clean(r[j])
            if v and not NUMONLY.match(v) and not BLANKCELL.match(v):
                # Both shapes: the phrase inside the cell, for short
                # answers, and the whole cell, for the long ones. A grid
                # whose answers run to nine words had nothing of its own
                # length to offer as a wrong one.
                spares.append(cell_phrase(v, terms) or v)
                spares.append(v)
    # And the section's other grids. A two-row answer table of
    # computations has no sibling of its own shape, but the worksheet it
    # answers does: "50% x 90,000 = 45,000" is the ideal wrong answer for
    # a slot wanting "50% x 45,000 = 22,500".
    spares += [x for x in pool if x]
    spares += [t for t in terms if 4 < len(t) < 40]
    low = [a.lower() for a in answers]

    def usable(x):
        if not x or x.lower() in low:
            return False
        return not any(inside(x, a) or inside(a, x)
                       or prefixed(x, a) or prefixed(a, x) for a in low)
    # Shape first among the spares a grid can offer, as elsewhere: a
    # seven-word sentence among five-word answers strikes out without
    # being read.
    sizes = [len(a.split()) for a in answers] or [1]
    slack = max(1, int(round(0.25 * max(sizes))))
    fit = [x for x in spares if usable(x)
           and min(sizes) - slack <= len(x.split()) <= max(sizes) + slack]
    extra = VIS.pick_spare(answers, fit or [x for x in spares if usable(x)],
                           seed + 3)
    bank = answers + ([extra] if extra else [])
    return dict(head=[clean(h) for h in head], rows=rows,
                answers=answers, bank=shuffled(bank, seed + 1),
                full=[[clean(c) for c in r] for r in body])


# ------------------------------------------------------------------ assembly
# Lines that are the chapter talking about itself rather than about
# accounting. None of them belongs on a sheet that stands in for it.
FURNITURE = re.compile(
    r'^(Answers and explanations|Test yourself|Key words in this section|'
    r'Key terms|Learning objectives|LOS codes|Section check)', re.I)
SELFREF = re.compile(
    r'\b(this book|this chapter|this section|Figure F\d|'
    r'Chapters?\s+\d|the CMA exam uses|our \w+ company|'
    r'you already know|you have studied|at the end of the chapter|'
    r'shown (?:below|above|earlier)|(?:see|as) (?:below|above)|'
    r'the (?:table|figure|example) (?:below|above))\b',
    re.I)


# The chapter teaches the French false friends, because its author's
# students meet French financial statements. These handouts are for
# students who do not read French, and the standing instruction for them
# is that no French appears. So a French gloss in brackets is cut out of a
# sentence, and a sentence whose subject IS the French word is dropped.
# Both cases. The lowercase set alone let "Étalonnage" stand as a heading
# on a sheet of book 2, because a French word at the start of a line is
# capitalised and its accent with it.
FRACC = re.compile(u'[\u00e0\u00e2\u00e4\u00e7\u00e8\u00e9\u00ea\u00eb'
                   u'\u00ee\u00ef\u00f4\u00f6\u00f9\u00fb\u0153'
                   u'\u00c0\u00c2\u00c4\u00c7\u00c8\u00c9\u00ca\u00cb'
                   u'\u00ce\u00cf\u00d4\u00d6\u00d9\u00db\u0152]')
FRWORD = re.compile(r'\b(?:French|en fran\w+|le|la|les|des|du|aux?)\s+'
                    r'[a-z\u00e0-\u00ff]', re.I)
GLOSS = re.compile(u'\\s*[\\(\uff08][^()\uff08\uff09]{0,80}[\\)\uff09]')
PARENS = re.compile(r'\s*\(([^()]{0,90})\)')


def deglossed(text):
    """The sentence without its foreign-language glosses.

    "In IFRS and in MENA company law, reserves (\u0627\u062d\u062a\u064a\u0627\u0637\u064a\u0627\u062a, r\u00e9serves) can mean a
    legal reserve" is a sentence these readers need, carrying a bracket
    they do not. The bracket goes and the sentence stays. Arabic is not
    cut for its own sake \u2014 it is these readers' first language and the term
    web is built on it \u2014 but inside a running English sentence it is a
    gloss, and a gloss in the middle of a line of English prose reverses
    the text direction and breaks the line.
    """
    def drop(m):
        return '' if (FRACC.search(m.group(1))
                      or ARABIC.search(m.group(1))) else m.group(0)
    out = PARENS.sub(drop, text)
    # A trailing ", r\u00e9serves" or ", \u0627\u062d\u062a\u064a\u0627\u0637\u064a\u0627\u062a" in a list goes the same way.
    out = re.sub(u'\\s*,\\s*[^,.;]*[\u0600-\u06ff][^,.;]*', '', out)
    out = re.sub(u'\\s*,\\s*[^,.;]*' + FRACC.pattern + u'[^,.;]*', '', out)
    # A gloss can also open the sentence: "Arabic \u0645\u062e\u0635\u0635 \u0627\u0644\u062a\u0642\u064a\u064a\u0645, the
    # valuation allowance, is a contra-asset." Dropping the opening leaves
    # "the valuation allowance, is", so the comma the gloss needed goes
    # with it and the sentence starts on a capital again.
    m = re.match(u'^(?:In\\s+)?(?:Arabic|French)\\s+[^,]{1,46},\\s*(.+)$',
                 out)
    if m and (FRACC.search(out[:m.start(1)])
              or ARABIC.search(out[:m.start(1)])):
        out = m.group(1)
        out = re.sub(r'^(.{3,44}?),\s+(is|are|was|were|means|refers)\b',
                     r'\1 \2', out)
        out = out[:1].upper() + out[1:]
    return clean(out)


def english_only(text):
    """Is there anything left of this sentence that is not French?

    An accent is not the only mark of it. "The balance sheet is le bilan"
    carries none, and a French article in front of a French noun is as
    plain a signal as an accent -- plainer, in a book that teaches the
    false friends between the two languages.
    """
    # On the ORIGINAL, before any gloss is cut. "French resultat means
    # profit, not result in general" is a sentence about a French word,
    # and cutting its accented clauses first left "Not result in
    # general." -- which carries no accent, reads as English and is
    # nonsense.
    raw = clean(text)
    if re.match(r'^(?:In\s+|The\s+)?(?:French|Arabic)\b', raw, re.I):
        return False
    t = deglossed(text)
    if not t or FRACC.search(t) or FRWORD.search(t):
        return False
    if ARABIC.search(t):
        return False
    return True


ARABIC = re.compile(u'[\u0600-\u06ff]')
# The chapter leaves some of its own tables for the reader to fill in, and
# writes the blank as a run of underscores. That is a writing slot, not a
# value: gapping it offers "________" as an answer on a word list.
BLANKCELL = re.compile(u'^[_\u2014\u2013. \u00b7]{2,}$')
# An amount keeps its currency sign and its percent sign. Without them
# "$0.37" read as text, so the earnings-per-share row made the whole
# column of a statement look non-numeric, and the gaps went to the one
# cell in twenty-six that was not a figure.
NUMONLY = re.compile(u'^[$\u00a3\u20ac\u00a5]?[\\d,.()%\u2014\u2013 \u2212-]+'
                     u'(?:\\s*(?:USD|EUR|SYP|AED|JOD|%))?$')


def _nobullet(x):
    """A heading without the chapter's own bullet markers."""
    return clean(x).strip(u'\u25cf\u25a0\u2022\u25aa- ').rstrip(':')


def section_terms(sec):
    """The section's own glossary, as (English, Arabic) pairs.

    The chapter's TERM BRIDGE box is the list of words that section is
    teaching, which makes it the best thing to take out of a summary. It is
    not among the parsed tables — it arrives flattened into the text as
    English, Arabic, French, repeating — so it is read off the lines here.
    The French column is dropped: these sheets are English and Arabic.
    """
    lines = [clean(x) for x in sec['text'].split('\n')]
    out, seen = [], set()
    i = 0
    while i < len(lines):
        if not re.match(r'^English\s*\(exam term\)$', lines[i], re.I):
            i += 1
            continue
        i += 3                      # skip the three column headings
        while i + 1 < len(lines):
            en, ar = lines[i], lines[i + 1]
            if not en or not ar or ARABIC.search(en) or \
                    not ARABIC.search(ar) or len(en) > 64:
                break
            # The chapter repeats the glossary verbatim, so the loop walks
            # into its header row again: "English (exam term)" against
            # "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" passes every test above and became a term,
            # which then turned up as a spare word in a word list.
            if re.match(r'^English\s*\(exam term\)$', en, re.I):
                i += 3
                continue
            if en.lower() not in seen:
                seen.add(en.lower())
                out.append((en, ar))
            i += 3                  # English, Arabic, French
    return out


def title_of(seg_head, no, title):
    """Is this heading the section's own title line?"""
    return clean(seg_head).startswith(clean(no)) or \
        clean(seg_head).lower() == clean(title).lower()


def prepare(sec, tbls):
    """The section's segments with its furniture taken out."""
    out, stop = [], False
    for seg in segments(sec, tbls):
        kind, v = seg[0], seg[1]
        # The question bank ends the section's prose, but a table whose
        # header never appeared on a line of its own is placed after
        # everything else, so it lands beyond that marker. Breaking there
        # threw away the tables of fourteen sections, which is why those
        # sheets had no picture of any kind on them.
        if stop and kind != 'table':
            continue
        if kind == 'head':
            if title_of(v, sec['no'], sec['title']):
                continue
            if FURNITURE.match(clean(v)):
                if re.match(r'^(Test yourself|Section check)', clean(v),
                            re.I):
                    stop = True        # the question bank ends the section
                continue
            out.append(('head', clean(v)))
        elif kind == 'prose':
            keep = [s for s in v
                    if not FURNITURE.match(s) and not SELFREF.search(s)]
            if keep:
                out.append(('prose', keep))
        else:
            out.append(seg)
    return out


def prose_figures(sec, tbls, terms, seed, cells=()):
    """Figures the section's PROSE supports, and the sentences they use.

    A figure drawn from prose has to take those sentences with it.
    Otherwise the sheet gaps the same sentence twice — once in a paragraph
    and once in a picture — and the rule that every sentence appears
    exactly once quietly stops holding.

    What a figure takes is a SPAN, not a selection: the unbroken run from
    its first sentence to its last, including the ones in between that it
    does not itself draw. A selection left holes, and the paragraphs built
    from what was left opened mid-thought, so the strict reading was to
    refuse any figure whose sentences were interleaved — which refused the
    GAAP-against-IFRS contrast in seven sections that state it plainly in
    prose. The sentences inside the span that the figure does not draw are
    exactly its lead-in (“Both frameworks write inventory down when its
    value falls below cost. The key difference comes when value
    recovers.”), so they go on the sheet as a gapped paragraph directly
    above it, and nothing is lost or repeated.

    Returns a list of (position, [blocks], consumed).
    """
    sents = [x for x in prose_sents(sec['text'], cells)
             if not SELFREF.search(x) and not FURNITURE.match(x)]
    out, taken = [], set()

    def place(sent):
        return sents.index(sent) if sent in sents else len(sents)

    def span(used, slack=3):
        """The run from the first of these sentences to the last.

        None where the run reaches past what the figure is about: a span
        that is three sentences wider than the figure draws is no longer a
        lead-in, it is the rest of the section.
        """
        ix = sorted(place(x) for x in used if x in sents)
        if len(ix) != len(set(used)) or not ix:
            return None
        run = sents[ix[0]:ix[-1] + 1]
        if len(run) > len(ix) + slack:
            return None
        if any(x in taken for x in run):
            return None
        return run

    def add(form, title, got, used, sk, slack=3, data_terms=False):
        run = span(used, slack)
        if run is None:
            return False
        got.pop('_used', None)
        got.pop('_form', None)
        if data_terms:
            got['terms'] = terms
        blocks, lead = [], [x for x in run if x not in used]
        if lead:
            # With the section's words to draw a wrong answer from. An
            # empty pool left gap_block with no spare, and a block of
            # exactly two gaps cannot give one of them back to find one,
            # so it returned nothing and the lead-in printed as plain
            # text with nothing to do on it.
            pool = [t for t in terms if 4 < len(t) < 28] + [
                w for w in re.findall(r"[A-Za-z][A-Za-z\-']{6,}",
                                      ' '.join(sents))
                if w.lower() not in STOP]
            g = gap_block(lead, terms, sk + 3, shuffled(pool, sk))
            blocks.append(dict(kind='prose', carry=[], _underhead=True,
                               _pos=place(lead[0]), **g) if g
                          else dict(kind='plain', text=' '.join(lead)))
        blocks.append(dict(kind='form', form=form, title=title, data=got,
                           seed=sk, sents=[x for x in run if x in used]))
        out.append((place(run[0]), blocks, set(run)))
        taken.update(run)
        return True

    # a stated computation
    for sent in sents:
        got = VIS.as_bridge(sent)
        if not got or sent in taken:
            continue
        if add('bridge', clean(got['total']) + ', and how it is reached',
               got, [sent], seed + 201):
            break

    def free():
        return [x for x in sents if x not in taken]

    # a procedure the prose numbers itself
    got = VIS.as_steps(free())
    if got:
        add('flow', 'The steps, in order', got, got['_used'], seed + 231,
            slack=0)

    # a two-way test the prose states both sides of
    got = VIS.as_branch(free())
    if got:
        add('branch', 'The test, and what follows either way', got,
            got['_used'], seed + 241, slack=0, data_terms=True)

    # a set the prose counts, and the members it then lists
    got = VIS.as_options(free())
    if got:
        add('panel', 'The set, member by member', got, got['_used'],
            seed + 261, slack=0)

    # conditions, each with what it settles
    got = VIS.as_rules(free())
    if got:
        add('panel', 'Each fact, and what it settles', got, got['_used'],
            seed + 271, slack=0)

    # a two-way test written as one sentence
    got = VIS.as_either(free())
    if got:
        add('panel', 'Which way it goes', got, got['_used'], seed + 281,
            slack=0)

    # cases mapped to what each one calls for
    got = VIS.as_prose_tree(free())
    if got:
        add(got.get('_form', 'tree'), 'What fits each one', got,
            got['_used'], seed + 211)

    # what each framework says, where the section says it in prose
    fr = free()
    got = VIS.as_sides(fr)
    if got:
        used = [x for x in fr if clean(x) in
                set(got['lrows']) | set(got['rrows'])]
        add('sides', 'What each framework says', got, used, seed + 221,
            slack=4, data_terms=True)

    # two named sets the section's title and a pivot sentence mark
    fr = free()
    got = VIS.as_halves(fr, sec.get('title', ''))
    if got:
        used = list(got['_used'])
        drawn = set(got['lrows']) | set(got['rrows'])
        add('sides', '%s against %s' % (got['left'], got['right']), got,
            used, seed + 251, slack=len(used) - len(drawn), data_terms=True)
    return out


def blocks_for(sec, tbls, terms, seed, caps=(), local_terms=(),
               cells=(), skip=(), drop=()):
    """The section as gapped summary blocks, in the order it is written.

    The chapter's own sub-headings become dividers between the summaries,
    never titles on them: a heading like "What makes information useful?"
    is a signpost, but a derived title would have to name the block's
    content, and the block's content is what the gaps hide.

    A prose run longer than BLOCK sentences becomes several blocks, so no
    one block carries so many gaps that a reader loses the thread; a tail of
    one or two sentences joins the run before it. Every sentence of the
    section lands in some block.
    """
    # A spare word has to be a plausible wrong answer. Drawn from the whole
    # chapter it was not: a list for the section on users offered "cost of
    # goods sold", which a reader eliminates without reading the sentence.
    # So the section's own vocabulary comes first.
    spare = [t for t in terms if 4 < len(t) < 28]
    nlocal = len([t for t in local_terms if 4 < len(t) < 28])
    # Figures drawn from the prose take their sentences out of it, so no
    # sentence is gapped twice — once in a paragraph and once in a picture
    # — and the rule that every sentence appears exactly once keeps
    # holding.
    pfigs = prose_figures(sec, tbls, terms, seed, cells)
    # And the sentences the vocabulary web restates, which it draws as
    # its spokes and so takes with it, exactly as a prose figure does.
    eaten = set(drop or ())
    for _pos, _blks, used in pfigs:
        eaten |= used
    allsents = prose_sents(sec['text'], cells)
    order = dict((x, i) for i, x in enumerate(allsents))
    wordpool = []
    seenw = set()
    for w in re.findall(r"[A-Za-z][A-Za-z\-']{6,}", ' '.join(allsents)):
        if w.lower() in STOP or w.lower() in seenw:
            continue
        seenw.add(w.lower())
        wordpool.append(w)
    segs = prepare(sec, tbls)
    allruns = [x for kind, v in [(g[0], g[1]) for g in segs]
               if kind == 'prose' for x in v]
    # Which tables the sheet PRINTS, and which it draws. A table drawn
    # as a figure is inside an image the reader is filling in, so its
    # cells are not on the page in words and nothing need avoid them.
    # Counting them as printed cost the paragraphs around every figure
    # their best gaps.
    drawn = set(skip)
    for _ti, _h, _b in tbls:
        if _ti not in skip and VIS.shapes(_h, _b):
            drawn.add(_ti)
    percell = dict(
        (ti, ' '.join(clean(c) for r in [head] + list(body) for c in r))
        for ti, head, body in tbls)
    gridtext = ' '.join(v for ti, v in sorted(percell.items())
                        if ti not in drawn)
    allprose = ' '.join(allruns)

    def elsewhere(run):
        """Everything on this sheet that is not this block."""
        mine = set(run)
        return ' '.join([x for x in allruns if x not in mine]) \
            + ' ' + gridtext

    def notthisgrid(ti):
        """The sheet as the reader meets it, apart from this grid.

        A grid's answers were judged against its own row, its heading and
        its caption, which is the sheet it used to be on. On the sheet it
        is really on, a hundred and forty-six of its answers were printed
        in a paragraph above it and thirty-five in another grid. The
        paragraph is the section's own summary and has to be printed
        whole, so it is the grid that gives way -- which it can afford
        to, having twenty cells to choose between.
        """
        return allprose + ' ' + ' '.join(
            v for ti2, v in sorted(percell.items())
            if ti2 not in drawn and ti2 != ti)

    out, k, lasthead = [], 0, ''
    for seg in segs:
        kind, v = seg[0], seg[1]
        if kind == 'head':
            out.append(dict(kind='divider', title=v))
            lasthead = v
            continue

        if kind == 'table':
            # A table the web is drawing is not printed again as a grid.
            # Printed both ways the terms were on the page twice, so
            # every gap in the web could be filled by reading the grid
            # under it, and the grid's third column -- the chapter's own
            # instance of each term -- had nowhere else to go.
            if v[0] in skip:
                continue
            # The caption says what the table is for; the first column name
            # often does not. Without it the worked journal was headed "#".
            title = (caps.get(v[0]) or lasthead
                     or ' \u2014 '.join(_nobullet(x) for x in v[1][:2]))
            lasthead = ''        # a heading titles one thing, not two
            k += 1
            # A table is drawn in the richest form its own shape allows.
            # Nothing is drawn on a guess: where no form fits, it stays a
            # grid, which is what every table was before.
            forms = VIS.shapes(v[1], v[2])
            if forms:
                name, data = forms[0]
                # The cells the figure was drawn from travel with it. A
                # table that becomes a diagram is still the place those
                # cells appear on the sheet, and without the record a
                # coverage pass reads the diagram as an empty title and
                # reports the cells as missing.
                out.append(dict(kind='form', form=name, title=title,
                                cells=[clean(c) for r in [v[1]] + list(v[2])
                                       for c in r if clean(c)],
                                # The table itself travels with the
                                # figure, so that a figure which turns
                                # out to have nothing to fill in can fall
                                # back to the grid instead of taking the
                                # table off the sheet with it.
                                raw=v, data=data, seed=seed + 100 + k))
                continue
            others = [clean(c) for ot in tbls if ot[0] != v[0]
                      for r in [ot[1]] + list(ot[2]) for c in r
                      if clean(c) and not NUMONLY.match(clean(c))
                      and not BLANKCELL.match(clean(c))]
            # The sheet-wide avoid first, and the grid's own row second.
            # Held to the sheet, fifteen small grids -- an exam-view box
            # of four cells, a four-row worksheet -- found nothing they
            # could take and printed whole, which is the worse of the
            # two failures: a gap a sharp reader could fill by reading
            # the paragraph above it is still a gap, and a grid with the
            # answers in it is not an exercise at all.
            g = gap_table(v, seed + 100 + k, terms=terms,
                          title=title, pool=others,
                          avoid=notthisgrid(v[0])) \
                or gap_table(v, seed + 100 + k, terms=terms,
                             title=title, pool=others)
            if g:
                out.append(dict(kind='table', title=title, **g))
            else:
                out.append(dict(kind='ref', title=title,
                                head=[clean(x) for x in v[1]],
                                rows=[[clean(c) for c in r] for r in v[2]]))
            continue
        v = [x for x in v if x not in eaten]
        if not v:
            continue
        runs, cur, n = [], [], 0
        for sent in v:
            cur.append(sent)
            n += len(sent.split())
            if n >= BLOCK_WORDS:
                runs.append(cur)
                cur, n = [], 0
        if cur:
            runs.append(cur)
        # a tail too short to stand alone joins the run before it
        if len(runs) > 1 and len(runs[-1]) <= BLOCK_MIN:
            runs[-2].extend(runs.pop())
        for ri, run in enumerate(runs):
            # A block that opens mid-thought joins the one before it — but
            # never across a heading. Carrying across one moved a sentence
            # about the five verbs into the block about primary users and
            # lost the heading it belonged under. Inside a run, and from
            # one prose segment straight into another with no heading
            # between them, carrying back is right: "Finally, the notes
            # begin with a summary" has to follow what it is final to.
            while run and dangling(run[0]) and out \
                    and out[-1].get('kind') == 'prose':
                out[-1]['carry'].append(run.pop(0))
            if not run:
                continue
            # Shuffled within the section's own words and within the
            # chapter's, then joined — shuffling the whole pool threw away
            # the preference and offered "cost of goods sold" as a wrong
            # answer on the sheet about who reads the statements.
            # The glossary is phrases and a prose answer is usually one
            # word, so a list of single words offered "right of setoff"
            # as its only wrong answer. The section's own distinctive
            # words join the pool, so a spare of the right shape exists
            # to be found.
            pool = (shuffled(spare[:nlocal], seed + k)
                    + shuffled(spare[nlocal:], seed + k)
                    + shuffled(wordpool, seed + k))
            g = gap_block(run, terms, seed + 7 * k, pool,
                          elsewhere(run))
            k += 1
            if g:
                # "Finally, the notes begin with a summary" opens on a
                # dangling word, but what it is final TO is the table
                # directly above it. A heading, a table and a figure all
                # put the antecedent on the page; only a block with
                # nothing before it is really hanging.
                # The sheet's own title bar is a heading too, so the
                # block that opens a sheet is never hanging: "It is drawn
                # with return arrows" sits under "14.3 Why mining is
                # iterative", which is what "It" means.
                ctx = (not out) or out[-1]['kind'] in (
                    'divider', 'table', 'ref', 'form')
                out.append(dict(kind='prose', carry=[],
                                _underhead=ctx,
                                _pos=order.get(run[0], 0), **g))
            else:
                # Too short to gap three words out of without wrecking it.
                # It still belongs on the sheet, so it goes on unchanged
                # and the block before it absorbs it where it can.
                if out and out[-1].get('kind') == 'prose':
                    out[-1]['carry'].extend(run)
                else:
                    # It keeps its own context: when it is later merged
                    # into the block after it, the merged block opens on
                    # THIS text, so it is this text's antecedent that
                    # decides whether the block hangs.
                    out.append(dict(
                        kind='plain', text=' '.join(run),
                        _underhead=(not out) or out[-1]['kind'] in (
                            'divider', 'table', 'ref', 'form')))
    # The prose figures go back in where their first sentence was, so the
    # section still reads in the order the chapter wrote it.
    for pos, blks, _used in sorted(pfigs, key=lambda x: -x[0]):
        at = len(out)
        for i, b in enumerate(out):
            if b.get('_pos') is not None and b['_pos'] > pos:
                at = i
                break
        out[at:at] = blks

    # A sentence carried into a block has to be re-gapped with it. Where
    # that fails — the longer passage may have no two words it can take
    # out — the carried text still belongs on the sheet, so it follows as
    # plain text rather than being dropped.
    final = []
    for b in out:
        final.append(b)
        if b.get('kind') != 'prose' or not b.get('carry'):
            continue
        sents = split_sentences(b['book']) + b['carry']
        # With a pool, like every other block. Without one a re-gapped
        # block of exactly two gaps could not find a wrong answer, so it
        # failed and its carried sentences printed as plain text.
        g = gap_block(sents, terms, seed + 999,
                      shuffled([t for t in terms if 4 < len(t) < 28]
                               + wordpool, seed + 999),
                      elsewhere(sents))
        if g:
            b.update(g)
        else:
            final.append(dict(kind='plain', text=' '.join(b['carry'])))
        b['carry'] = []
    # A sentence too short to stand as its own block joins the block
    # AFTER it where there is none before it. "Everything turns on the
    # opportunity cost, and that depends on capacity" opened a sheet as
    # eleven words with nothing to do on them, because the carry rule
    # only ever looked backwards.
    merged, i = [], 0
    while i < len(final):
        b = final[i]
        nxt = final[i + 1] if i + 1 < len(final) else None
        if b['kind'] == 'plain' and nxt is not None \
                and nxt['kind'] == 'prose':
            sents = split_sentences(b['text']) \
                + split_sentences(nxt['book'])
            # With the sheet's own avoid, like every other block. Both
            # re-gapping paths -- the carried sentence and the short
            # block merged into the one after it -- were gapping without
            # one, which is where twenty-two of the words a reader could
            # copy off another paragraph came from.
            g = gap_block(sents, terms, seed + 555,
                          shuffled([t for t in terms if 4 < len(t) < 28]
                                   + wordpool, seed + 555),
                          elsewhere(sents))
            if g:
                nxt.update(g)
                nxt['_pos'] = b.get('_pos', nxt.get('_pos', 0))
                nxt['_underhead'] = b.get('_underhead', False)
                i += 1
                continue
        merged.append(b)
        i += 1
    final = merged
    return [b for b in final if not (b['kind'] == 'divider'
                                     and b is final[-1])]


# A column heading that says the column holds what the first one means.
MEANHEAD = re.compile(r'mean|what it|definition|explanation|in financial'
                      r'|what this|covers|decides|does|is for|purpose'
                      r'|stands for|requires|involves', re.I)


KEYHEAD = re.compile(r'^(item|question)$', re.I)
WHYANS = re.compile(r'^Why\s*:\s*(.+)$', re.I | re.S)
ANSSPLIT = re.compile(u'\\s+[\u2014\u2013]\\s+')


def _fill(ws, key):
    """The worksheet with its blanks filled from the key, or None.

    The two are paired only where the key answers EVERY blank row of the
    worksheet, matching on the row's own first cell. A key that answers
    two blanks out of four is the key to something else.
    """
    i, head, body = ws
    blanks = {}
    for ri, r in enumerate(body):
        at = [j for j in range(1, len(r)) if BLANKCELL.match(clean(r[j]))]
        if len(at) == 1:
            blanks[ri] = at[0]
    if not blanks:
        return None
    ans = dict((clean(r[0]).lower(), clean(r[1]))
               for r in key[2] if len(r) > 1 and clean(r[0]))
    if any(clean(body[ri][0]).lower() not in ans for ri in blanks):
        return None
    rows = [list(r) for r in body]
    for ri, j in blanks.items():
        a = ans[clean(body[ri][0]).lower()]
        why = WHYANS.match(a)
        if why:
            x = clean(why.group(1))
            rows[ri][j] = x[:1].upper() + x[1:]
            continue
        parts = ANSSPLIT.split(a, 1)
        rows[ri][j] = clean(parts[0])
        # And the reason beside it, in the column the chapter keeps for
        # reasons. The worksheet's own wording there is the hint for a
        # blank this sheet no longer leaves blank, and the key's is the
        # same author's fuller version of the same statement, so nothing
        # of either table is lost.
        last = len(rows[ri]) - 1
        if len(parts) > 1 and last != j and last > 0 and clean(rows[ri][last]):
            r2 = clean(parts[1])
            rows[ri][last] = r2[:1].upper() + r2[1:]
    return (i, head, [tuple(r) for r in rows])


def filled_worksheet(tbls, pool=None):
    """The chapter's blank worksheets, filled in from its own answer keys.

    Every chapter of these books ends on a worksheet -- "What happened |
    Which input control? | Why", or "Tahini & Spreads cost | Behavior",
    with cells left as underscores -- and, in its answer pages, the key
    to it: "Item | Answer", where the answer is "Mixed", or "Validity
    check -- the code is tested against the master file and is not
    found", or "Why: the record count taken before entry no longer
    agrees".

    Printed as they stand, the two did the handout real damage. Where the
    chapter's index puts both on one section -- which is every chapter of
    book 4 -- the sheet asked the question and printed the answer under
    it, and fifteen classification trees drew a root reading "________"
    and asked the reader to recall which case belonged under it. Where it
    puts them on different sections -- which is books 1 to 3 -- the key
    landed on a sheet with no question on it at all, a grid of bare
    answers, and the vocabulary web of that section could gap nothing,
    because the key printed the words.

    So the two are merged, across the chapter rather than within a
    section. The blank takes the part of the answer that belongs to the
    column the chapter left blank -- the label before the dash, or, where
    the key says "Why:", the clause after it -- and the Why column takes
    the key's own fuller wording. The key then comes off the sheet,
    because the handout carries a key of its own, on the back.

    Nothing is guessed: see _fill for what has to line up.

    `pool` is every table of the chapter, so a worksheet in section 2.5
    can be filled from a key the index files under 2.6. Returns (tables,
    dropped).
    """
    tbls = list(tbls or [])
    pool = list(pool if pool is not None else tbls)
    keys = [t for t in pool
            if len(t[1]) == 2 and KEYHEAD.match(clean(t[1][0]))
            and clean(t[1][1]).lower() == 'answer']
    if not keys:
        return tbls, []
    iskey = set(t[0] for t in keys)
    # Which worksheet each key answers, decided over the whole chapter so
    # that both sections agree about it.
    fills, spent = {}, set()
    for ws in pool:
        if ws[0] in iskey:
            continue
        for key in keys:
            if key[0] in spent:
                continue
            got = _fill(ws, key)
            if got is not None:
                fills[ws[0]] = got
                spent.add(key[0])
                break
    out, dropped = [], []
    for t in tbls:
        if t[0] in spent:
            dropped.append(t[0])
        elif t[0] in fills:
            out.append(fills[t[0]])
        else:
            out.append(t)
    return out, dropped


def term_table(tbls):
    """The section's own table of terms, if it has one.

    "Risk | What it means | At Orontes" is the chapter teaching its
    vocabulary, and a word web is a better exercise for it than a grid.
    Returns (index, rows) where each row is (term, meaning, instance) and
    the instance may be empty, so the web can draw two parts or three.
    """
    for i, head, body in (tbls or []):
        # Two columns or three, never more: the web carries a term, what
        # it means and one instance of it, so a table with a fourth
        # column would lose it. Those stay grids.
        if not 2 <= len(head) <= 3:
            continue
        if not MEANHEAD.search(clean(head[1]).lower()):
            continue
        rows = []
        for r in body:
            a, b = clean(r[0]), clean(r[1]) if len(r) > 1 else ''
            e = clean(r[2]) if len(r) > 2 else ''
            if not a or not b or len(a) > 46:
                continue
            rows.append((a, b[:150], e[:120]))
        if len(rows) >= 3:
            return i, rows[:6], [clean(x) for x in head]
    return None, [], []


def meanings(sec, terms, tbls=(), cells=()):
    """(term, what it means) pairs the section states, for the web.

    wsgen has an extractor of its own, but it only matches a sentence that
    opens on the bare term, so "A debit is an entry on the left side" is
    missed because the sentence opens on "A debit". Across chapter 1 that
    found meanings for section 1.1 and almost nothing else. This one looks
    for each term of the section's own glossary in turn, allows the article
    in front of it, and takes three shapes of definition:

        A debit is an entry on the left side of an account.
        Relevance means the information can make a difference.
        Normal balance: the side on which an account increases.
    """
    out, seen = [], set()
    for t in (tbls or []):
        _i, head, body = t
        # The first TWO columns, however many the table has. Book 4
        # writes its vocabulary as "Risk | What it means | At Orontes" and
        # "Board responsibility | What it means | At Orontes" -- forty
        # tables of term against meaning with an example beside them --
        # and a rule that read only two-column tables saw none of it, so
        # thirty-nine per cent of the book's sheets carried no figure.
        if len(head) < 2:
            continue
        h1 = clean(head[1]).lower()
        if not MEANHEAD.search(h1):
            continue
        for r in body:
            if len(r) > 1 and clean(r[0]) and clean(r[1]):
                if clean(r[0]).lower() not in seen:
                    seen.add(clean(r[0]).lower())
                    out.append((clean(r[0]), clean(r[1]), ''))
    # The section's prose exactly as the sheet reads it, so the sentence
    # a meaning came from can be matched against the blocks and taken out
    # of them: the web restates it, and printed both ways the paragraph
    # answered the web.
    sents = prose_sents(sec['text'], cells)
    for term in terms:
        if term.lower() in seen or not 3 < len(term) < 40:
            continue
        pat = re.compile(
            r'^(?:An?|The)?\s*%s\s*(?:\(.*?\))?\s*(?:is|means|are)\s+'
            r'(?!also\b|not\b|the (?:two|three|four)\b)(.{12,110}?)[.;]'
            % re.escape(term), re.I)
        colon = re.compile(r'^%s\s*:\s+(.{12,110}?)[.;]'
                           % re.escape(term), re.I)
        for sent in sents:
            m = pat.match(sent) or colon.match(sent)
            if not m:
                continue
            dfn = clean(m.group(1))
            if DANGLE.match(dfn) or len(dfn) < 12:
                continue
            seen.add(term.lower())
            # The sentence is handed back only where the spoke carries
            # the WHOLE of it. The pattern stops at the first full stop
            # or semicolon, so "A debit is an entry on the left side; it
            # increases assets" would have had its second clause taken
            # off the sheet with the first.
            whole = sent if m.end() >= len(sent) - 1 else ''
            out.append((term, dfn, whole))
            break
    return out


def shown_words(blocks, me, grids_only=False):
    """Everything the sheet prints in plain text, apart from this block.

    A gap is only a question while its answer is not already on the page.
    The visible half of a gapped paragraph counts, and so does every cell
    of a grid that was not itself taken out; a figure's own labels do not,
    because they are inside an image the reader is filling in.
    """
    out = []
    for b in blocks:
        if b is me:
            continue
        if b['kind'] in ('prose', 'plain') and grids_only:
            continue
        if b['kind'] == 'prose':
            txt = ' '.join(x for x in b.get('parts', [])
                           if not isinstance(x, int))
        elif b['kind'] == 'plain':
            txt = b.get('text', '')
        elif b['kind'] in ('table', 'ref'):
            txt = ' '.join(
                clean(str(c)).replace(MARK, ' ')
                for r in [b.get('head', [])] + list(b.get('rows', []))
                for c in r)
        else:
            continue
        out.append(clean(txt))
    return ' '.join(out).lower()


def number_and_draw(blocks, terms, seed, asked=None, order=None):
    """Give every gap its number, and draw the figures with theirs in them.

    A paragraph's gaps can be numbered when the sheet is laid out, because
    the number is a run of text beside the slot. A figure's cannot: it is
    an image, and its numbers have to be drawn inside it. So the numbering
    happens here, in reading order, before anything is rendered — and the
    renderer uses the numbers it is given rather than counting again.
    """
    spares = [t for t in terms if 4 < len(t) < 34]
    asked = asked or {}
    order = order or {}
    n = 1
    out = []
    for b in blocks:
        if b['kind'] == 'form':
            fn = VIS.BUILD[b['form']]
            # What the sheet already prints in plain text, so no figure
            # gaps a word the reader can copy off the page. A word web
            # sits above the section's own grid and names the same terms,
            # and a third of every figure's answers could be had that
            # way rather than recalled.
            # What this sheet already prints, and what earlier sheets of
            # the chapter have already asked: the same word web drawn
            # twice in one chapter asks the reader to write "Beverages"
            # on the second sheet having just written it on the first.
            # Only what the GRIDS print, and what earlier sheets of the
            # chapter have asked. Not the prose: a figure has four or
            # five labels to choose between and a paragraph has a
            # hundred words, so the paragraph is the one that should
            # give way -- and it now does, by the same rule, inside
            # gap_block. Making the figure give way instead cost book 1
            # a quarter of its diagrams and book 4 a third.
            # What earlier sheets of the chapter have already asked IN
            # THIS FORM. Across forms it was far too blunt: the chapter
            # map on the first sheet gaps the section titles, so a
            # chapter whose sections are called "Presentation" and
            # "Operating lease" could never web its own vocabulary
            # again, though a map asking which section is called
            # "Operating lease" and a web asking which term the Arabic
            # names are not the same question at all.
            # Two kinds of avoidance, and they are not equally strong.
            # A label the sheet PRINTS is a free answer, so that one is
            # absolute. A label an earlier sheet of the chapter asked in
            # the same form is merely stale, so that one gives way: the
            # last section of a chapter is usually a worked example that
            # revisits the chapter's own vocabulary, and held to the
            # strict rule seven sheets of book 4 lost their figure
            # because every word on them had been asked once already --
            # which is worse than asking a reader to write
            # "authorization" a second time.
            hard = '' if b.get('translation') else \
                shown_words(blocks, b, grids_only=True)
            stale = asked.get(b['form'], '')
            # The figure's own labels come first in the spare pool. They
            # are the same kind of thing as its answers and the same
            # length, where the chapter's glossary is phrases of two or
            # three words against figure answers of six or seven.
            # Flattened all the way down. A tree's data is a list of
            # (group, [members]) pairs, so stopping one level in reached
            # the group names and never the members -- and the members
            # are the answers' own siblings, the best-shaped wrong
            # answers the figure has.
            own = []

            def harvest(v, depth=0):
                if depth > 4:
                    return
                if isinstance(v, str):
                    x = clean(v)
                    # A writing slot the chapter drew with underscores is
                    # not a word, and offering "________" as the wrong
                    # answer is worse than offering none.
                    if 4 < len(x) < 80 and not BLANKCELL.match(x) \
                            and MARK not in x:
                        own.append(x)
                elif isinstance(v, (list, tuple)):
                    for x in v:
                        harvest(x, depth + 1)
            for v in b['data'].values():
                if isinstance(v, (list, tuple)):
                    harvest(v)
            fig = None
            for avoid in ([(hard + ' ' + stale).strip(), hard]
                          if stale else [hard]):
                fig = fn(title=b['title'], seed=b['seed'], first=n,
                         spares=own + shuffled(spares, b['seed']),
                         avoid=avoid, **b['data'])
                if fig and fig['answers']:
                    break
            if fig is None or not fig['answers']:
                # A form that turns out to have nothing to fill in gives
                # its sentences BACK. Dropping the block was dropping
                # them: they had already been taken out of the prose, and
                # three sentences of section 1.3 of book 2 left the sheet
                # that way without any pass noticing, because every pass
                # read what was on the sheet.
                raw = b.get('raw')
                if raw is not None:
                    # A table that cannot be drawn is still a table.
                    g = gap_table(raw, b['seed'] + 9, terms=terms,
                                  title=b['title'],
                                  avoid=shown_words(blocks, b)) \
                        or gap_table(raw, b['seed'] + 9, terms=terms,
                                     title=b['title'])
                    if g:
                        g['_first'] = n
                        n += len(g['answers'])
                        out.append(dict(kind='table', title=b['title'],
                                        **g))
                    else:
                        out.append(dict(
                            kind='ref', title=b['title'],
                            head=[clean(x) for x in raw[1]],
                            rows=[[clean(c) for c in r] for r in raw[2]]))
                    continue
                said = b.get('sents') or []
                if said:
                    g = gap_block(said, terms, b['seed'] + 5, spares)
                    if g:
                        # And it is numbered where it stands, like any
                        # other block. Appending it unnumbered left the
                        # sheet claiming a gap that the key could not
                        # find.
                        # Where its own first sentence stands, not nought:
                        # a position of nought reads as the top of the
                        # section and puts the block out of the chapter's
                        # order.
                        out.append(dict(kind='prose', carry=[], _first=n,
                                        _underhead=True,
                                        _pos=order.get(said[0], 0), **g))
                        n += len(g['answers'])
                    else:
                        out.append(dict(kind='plain',
                                        text=' '.join(said)))
                continue
            # So a later pass knows the clue was the Arabic, and that a
            # label this figure asks for may be printed elsewhere on the
            # sheet without the answer being there.
            if b.get('translation'):
                fig['_translation'] = True
            fig['_sents'] = b.get('sents') or []
            fig['_cells'] = b.get('cells') or []
            # How many members the form was drawn from, so a later pass can
            # ask whether the content really had the shape: a flow of two
            # stages is not a sequence, and the drawn figure no longer
            # remembers how many it had.
            d = b['data']
            fig['_items'] = max(
                [len(d[k]) for k in ('steps', 'groups', 'pairs', 'rows',
                                     'items', 'parts', 'lrows', 'periods')
                 if isinstance(d.get(k), (list, tuple))]
                or [len(fig['answers'])])
            if not fig['answers']:
                continue           # nothing to fill in is not an exercise
            fig['_first'] = n
            n += len(fig['answers'])
            out.append(fig)
            continue
        if b['kind'] in ('prose', 'table'):
            b['_first'] = n
            n += len(b['answers'])
        out.append(b)
    return out


def build_section(d, si, bk=1, seed=None, asked=None):
    """One handout: a section of the chapter, as gapped summaries."""
    sec = d['sections'][si]
    no = clean(sec['no'])
    n = d['n']
    seed = seed if seed is not None else n * 977 + si * 31
    # The chapter's blank worksheet and the key to it, merged into one
    # filled grid, so no sheet prints the answer to another sheet's
    # question. Over the whole chapter, because the index files the two
    # under different sections in books 1 to 3.
    tbls, _keyed = filled_worksheet(tables_in(d, sec), chapter_tables(d))
    local = section_terms(sec)
    # The section's own glossary first — those are the words it is teaching
    # — then the chapter's, so a term introduced earlier can still be gapped.
    terms = [clean(e) for e, _a in local] \
        + [clean(e) for e, _a in PB.term_pairs(n)]
    seen, uniq = set(), []
    for t in terms:
        if t.lower() in seen:
            continue
        seen.add(t.lower())
        uniq.append(t)
    cells = cell_sents(raw_cells(d, sec))
    # A table of term against meaning is drawn as the web and not printed
    # again as a grid under it.
    tt_i, tt_rows, tt_head = term_table(tbls)
    # The section's own glossary, as a web around its subject. This is the
    # one diagram that does not depend on a table having the right shape,
    # and it covers 45 of the book's 94 sections; the rest share a
    # chapter-level glossary and get none.
    # From the prose always, and from a table only where the web is
    # drawing that table instead of printing it. A vocabulary table of
    # four columns -- "Threat | What it is | Why it matters | Example" --
    # stays a grid, because a spoke carries three parts and a fourth box
    # would be fifteen characters wide; and a web built from the first
    # two columns of a grid the sheet still prints asks nothing, because
    # the grid holds the answers. Six sheets of book 4 lost their figure
    # that way. Left to the Arabic instead, the section webs its own
    # vocabulary against the language the reader thinks in, and the grid
    # keeps all four of its columns.
    defs = meanings(sec, [clean(e) for e, _a in local],
                    [t for t in tbls if t[0] == tt_i], cells)
    # And the same again counting the tables the sheet still prints. A
    # vocabulary table of four columns -- "Threat | What it is | Why it
    # matters | Example" -- stays a grid, because a spoke carries three
    # parts and a fourth box would be fifteen characters wide. A web
    # built from the first two columns of a grid printed under it asks
    # nothing, so those meanings come last, after the Arabic: last is
    # still better than no figure at all, and it is what the sheets of
    # the worked examples have.
    griddefs = meanings(sec, [clean(e) for e, _a in local],
                        tbls, cells)
    bydef = dict((t.lower(), (dd, sn)) for t, dd, sn in defs)
    # (term, what it means, the chapter's instance of it, the sentence
    # the meaning was taken from). The instance comes only from a table
    # the web is drawing; the sentence only from the prose, and it is
    # what the web then takes OUT of the prose.
    pairs = []
    # Where the section states what its words mean, the web pairs each term
    # with its meaning. Where it does not — and half the sections of the
    # book do not — it pairs each term with its Arabic, which is the
    # section's own glossary and is the thing these readers most need: the
    # idea they have in Arabic against the English the exam will use.
    # Three spokes, not four. Four was right for book 1, whose chapters
    # name three and a half terms a section; books 2 and 3 name two, and
    # book 3 has thirty-six sections with exactly three. A web of three
    # is still the section's own vocabulary against the English the exam
    # will use, which is the thing these readers most need, and it is
    # what makes a sheet of book 3 read like a sheet of book 1.
    WEB = 3
    kind = 'meaning'
    # The section's own table of terms comes first, with its third column
    # -- the chapter's instance of each term -- carried into the web,
    # because the grid that used to hold it is no longer printed.
    if tt_rows:
        # A table's rows carry the chapter's own instance of each term in
        # place of a sentence to take out: the grid they came from is not
        # printed, so there is nothing to take.
        pairs, kind = [(a, b, e, '') for a, b, e in tt_rows], 'meaning'
    # A meaning the chapter states in a table is the section's
    # vocabulary whether or not the section also lists the word in a
    # glossary. Looking the table's rows up in the glossary first meant
    # book 4 -- which names its terms in tables and keeps almost no
    # glossaries -- threw away forty tables of exactly this.
    # The section's own glossary, as English against Arabic, BEFORE a
    # meaning the section states in its prose. Both are the section's
    # vocabulary, but the prose keeps the definition it states -- it is
    # the section's summary and has to -- so a web clued by that same
    # definition asks the reader to copy the word out of the paragraph
    # above. Clued by the Arabic it asks for the one thing no paragraph
    # and no grid on the sheet carries, and it is the thing these
    # readers most need.
    if len(pairs) < WEB and len(local) >= WEB:
        pairs = [(clean(e), clean(a), '', '') for e, a in local]
        kind = 'arabic'
    if len(pairs) < WEB and len(defs) >= WEB:
        seenp = set(clean(p[0]).lower() for p in pairs)
        pairs = pairs + [(t, dd, '', sn) for t, dd, sn in defs
                         if clean(t).lower() not in seenp]
        kind = 'meaning'
    if len(pairs) < WEB and len(griddefs) >= WEB:
        seenp = set(clean(p[0]).lower() for p in pairs)
        pairs = pairs + [(t, dd, '', sn) for t, dd, sn in griddefs
                         if clean(t).lower() not in seenp]
        kind = 'meaning'
    if len(pairs) < WEB:
        # Half the sections carry no glossary of their own: the chapter
        # puts one at the front and the sections draw on it. So the web is
        # built from the chapter's terms that THIS section actually uses,
        # which are its vocabulary whether or not it repeats the list.
        # Without this a third of the book's sheets had no figure at all.
        used = []
        for e, a in PB.term_pairs(n):
            e, a = clean(e), clean(a)
            if not e or not a or len(e) > 44:
                continue
            if re.search(r'\b%s\b' % re.escape(e), sec['text'], re.I):
                # The Arabic, not a meaning the section states. A web
                # whose clue is an English meaning is answerable from the
                # grid that prints it, and the exemption below -- which
                # is what lets a translation ask for a word the sheet
                # also prints -- holds only while the clue really is the
                # Arabic.
                used.append((e, a, '', ''))
        if len(used) >= WEB:
            pairs, kind = used, 'arabic'
    web = pairs[:6] if len(pairs) >= WEB else []
    # The sentences the web restates are NOT taken out of the prose,
    # though a prose figure's are. The definitions of a section are
    # scattered down its paragraphs with their examples between them --
    # "An asset is a present right... Examples: cash, accounts
    # receivable... A liability is a present obligation... Examples:
    # accounts payable..." -- so taking the definitions left the
    # paragraph reading "Three of them describe the balance sheet at one
    # date. Examples: cash, accounts receivable. Examples: accounts
    # payable. It is the owners' claim." A prose figure takes an unbroken
    # SPAN for exactly this reason, and a glossary is not a span. The
    # duplication is answered instead by what the web uses as its clue:
    # see the Arabic branch below.
    blocks = blocks_for(sec, tbls, uniq, seed, caption_for(d, sec),
                        [clean(e) for e, _a in local], cells,
                        {tt_i} if tt_i is not None else set())
    if web:
        blocks.append(dict(
            kind='form', form='web',
            title=('The words this section uses' if kind == 'meaning'
                   else 'The English this section uses, and its Arabic'),
            data=dict(subject=clean(sec['title']),
                      pairs=[p[:3] for p in web]),
            # A web of English against Arabic asks for the mapping, and
            # the mapping is the one thing no grid on the sheet carries.
            # Judged like any other figure it lost twenty-two webs across
            # the four books, because the chapter's journals and cost
            # tables print "actual costing" as a column heading -- which
            # narrows the choice and does not supply the answer. The
            # glossary grid that WOULD supply it is never printed on a
            # sheet.
            translation=(kind == 'arabic'
                         and all(ARABIC.search(p[1]) for p in web)),
            # The cells travel with it, so the coverage passes still see
            # the table on the sheet now that the grid is gone.
            cells=(tt_head + [c for r in tt_rows for c in r if c])
            if tt_rows else [],
            # And the table itself, so that a web whose every term is
            # already printed in the section's prose -- and so has
            # nothing it may gap -- falls back to the grid rather than
            # taking the chapter's vocabulary off the sheet.
            raw=((tt_i, tt_head, [list(r) for r in tt_rows])
                 if tt_rows else None),
            seed=seed + 55))
    # The chapter's own section order is a sequence, so the first sheet of
    # every chapter opens on a flow of the chapter itself. It is the one
    # diagram guaranteed everywhere.
    if si == 0:
        # The title is what is gapped and the number is what anchors it.
        # The other way round a reader fills the gaps by counting, which
        # tests nothing about the chapter.
        steps = [(clean(x['title'])[:46], 'section %s' % clean(x['no']))
                 for x in d['sections']]
        blocks.insert(0, dict(kind='form', form='flow',
                              title='Chapter %d, section by section' % n,
                              data=dict(steps=steps), seed=seed + 66))
    blocks = number_and_draw(
        blocks, uniq, seed, asked,
        dict((x, i) for i, x in enumerate(prose_sents(sec['text'], cells))))
    nsent = sum(len(split_sentences(b.get('book') or b.get('text') or ''))
                for b in blocks if b['kind'] in ('prose', 'plain'))
    ngaps = sum(len(b.get('answers') or []) for b in blocks)
    return dict(id='%d.%d' % (n, si + 1), n=si + 1, pages=0,
                sec=no, title=clean(sec['title']),
                sub='Chapter %d \u00b7 section %s' % (n, no),
                terms=local, blocks=blocks,
                sentences=nsent, gaps=ngaps)


def build_chapter(bk=1, n=1):
    """Every section of the chapter, as one handout each.

    A chapter is built section by section, and a section knows nothing
    about its neighbours -- which is right for everything except what it
    asks. Three charts in chapter 10 of book 2 drew different data and
    asked for the same word, because the same departments recur and each
    chart gaps one of them; two sheets of chapter 16 webbed the same four
    chapter terms. The reader meets both, and writing "Beverages" on the
    third sheet teaches nothing.

    So the chapter watches what has been asked, and a section whose
    figure repeats an earlier one is rebuilt on another seed. The data is
    untouched; only which labels it gives up changes. Where no seed
    separates them -- a figure with two labels, one of which must go --
    the last build stands, because an exact repeat is still better than
    no figure.
    """
    d = PB.parse(n, bk)
    out, asked, said = [], set(), collections.defaultdict(list)

    def sig(H):
        return set((b['form'], tuple(sorted(b['answers'])))
                   for b in H['blocks'] if b['kind'] == 'fig')

    def text():
        return dict((f, ' '.join(v).lower()) for f, v in said.items())

    for si in range(len(d['sections'])):
        # Everything the chapter has asked so far, handed to the next
        # sheet so its figures do not ask it again. Rebuilding on another
        # seed was the first attempt and it only works while the figure
        # has spare labels to choose between; a web of three terms has
        # three combinations and runs out.
        H = build_section(d, si, bk, asked=text())
        for bump in range(1, 7):
            if not (sig(H) & asked):
                break
            H = build_section(d, si, bk,
                              seed=(n * 977 + si * 31) + bump * 613,
                              asked=text())
        asked |= sig(H)
        for b in H['blocks']:
            if b['kind'] == 'fig':
                said[b['form']] += [clean(a) for a in b['answers']]
        out.append(H)
    return out


# ------------------------------------------------------------------- checks
def check(hs, bk=1, n=1):
    """The invariants a summary sheet has to meet.

    Coverage is not among them: every sentence of the section lands in some
    block by construction, so there is nothing to verify. What can go wrong
    is the gapping — a list that gives a gap two answers, a gap with no
    answer, a block nobody can read.
    """
    d = PB.parse(n, bk)
    bad = []
    for si, H in enumerate(hs):
        sec = d['sections'][si]
        hid = H['id']
        avail = prose_sents(sec['text'], cell_sents(raw_cells(d, sec)))
        # A journal's explanation cell holds a whole sentence, sometimes
        # two, so the comparison has to be sentence by sentence. Comparing
        # whole cell values reported four sentences as missing that a
        # reader meets inside the January journal.
        tcells = set()
        for t in tables_in(d, sec):
            for r in [t[1]] + list(t[2]):
                for c in r:
                    if clean(c):
                        tcells.add(clean(c))
                        tcells |= set(split_sentences(clean(c)))
        # Compared as text, not as a list of sentences. The splitter holds
        # a fragment open after a capital and a full stop — which is what
        # keeps "U.S. GAAP" together — and that also glues "outside PP&E."
        # to the sentence after it. Splitting a whole block and splitting
        # it line by line then disagree, and two sentences of section 2.2
        # were reported missing from a block that held them.
        # A figure drawn from prose holds those sentences, so the check
        # has to look inside it too, or it reports as missing the very
        # sentences the figure was built from.
        def figtext(b):
            d2 = b.get('data') or {}
            bits = [str(b.get('title') or '')]
            for key in ('lrows', 'rrows'):
                bits += [str(x) for x in (b.get(key) or d2.get(key) or [])]
            bits += [str(x) for x in (b.get('_sents') or [])]
            return ' \n '.join(bits)

        on = ' \n '.join((b.get('book') or b.get('text') or '')
                         + (figtext(b) if b['kind'] == 'fig' else '')
                         for b in H['blocks'])
        # Every sentence of the section is on the sheet, unless it is a cell
        # of one of its tables (the sheet shows it there) or the chapter
        # talking about itself.
        miss = [x for x in avail if x not in on and x not in tcells
                and not SELFREF.search(x) and not FURNITURE.match(x)
                and x not in ' \n '.join(tcells)]
        if miss:
            bad.append('%s: %d sentences of section %s are on no block: %.60r'
                       % (hid, len(miss), H['sec'], miss[0]))
        forms = collections.Counter(b.get('form') or b['kind']
                                    for b in H['blocks'])
        # A sheet of four or more exercises that uses only one form is
        # reported: the whole point of the forms is that a reader meets
        # more than one way of being asked.
        exer = sum(v for k, v in forms.items()
                   if k not in ('divider', 'plain', 'ref'))
        if exer >= 4 and len([k for k, v in forms.items()
                              if k not in ('divider', 'plain', 'ref')]) < 2:
            bad.append('%s: %d exercises, all of one form' % (hid, exer))
        for b in H['blocks']:
            if b['kind'] == 'fig':
                ans, bank = b['answers'], b['bank']
                if not ans:
                    bad.append('%s: a figure with nothing to fill in' % hid)
                if len(bank) <= len(ans):
                    bad.append('%s: a figure list has %d for %d gaps'
                               % (hid, len(bank), len(ans)))
                if len({x.lower() for x in bank}) != len(bank):
                    bad.append('%s: a figure list repeats an entry' % hid)
                for a in ans:
                    if a not in bank:
                        bad.append('%s: figure answer %r not in its list'
                                   % (hid, a))
                if not b.get('png') or not b.get('h'):
                    bad.append('%s: a figure did not render' % hid)
                continue
            if b['kind'] not in ('prose', 'table'):
                continue
            ans, bank = b['answers'], b['bank']
            if len(bank) <= len(ans):
                bad.append('%s: a word list has %d words for %d gaps'
                           % (hid, len(bank), len(ans)))
            if len({x.lower() for x in bank}) != len(bank):
                bad.append('%s: a word list repeats a word' % hid)
            for a in ans:
                if a not in bank:
                    bad.append('%s: the answer %r is not in its list'
                               % (hid, a))
            # A word list that holds one answer inside another gives a gap
            # two defensible answers. In a grid the test is word
            # boundaries, not letters: a row names its own item, so
            # "Current asset" against "Noncurrent asset" is the
            # classification the sheet is teaching, and only a genuine
            # sub-phrase -- "cash flows, balance sheet" inside "income
            # statement, cash flows, balance sheet" -- is ambiguous.
            for x in bank:
                for y in bank:
                    if x is y or len(x) <= 5:
                        continue
                    hit = (inside(x, y) or prefixed(x, y)
                           if b['kind'] == 'table'
                           else x.lower() in y.lower())
                    if hit:
                        bad.append('%s: the list holds both %r and %r'
                                   % (hid, x, y))
            if b['kind'] == 'prose':
                gaps = sum(1 for p in b['parts'] if not isinstance(p, str))
                if gaps != len(ans):
                    bad.append('%s: %d gaps against %d answers'
                               % (hid, gaps, len(ans)))
                if not MIN_GAPS <= gaps <= MAX_GAPS:
                    bad.append('%s: a block has %d gaps' % (hid, gaps))
                words = len(b['book'].split())
                if words and words / float(max(1, gaps)) < 7:
                    bad.append('%s: a block gaps one word in %.1f'
                               % (hid, words / float(gaps)))
                first = b['parts'][0]
                if not (isinstance(first, str) and first.strip()):
                    bad.append('%s: a block opens on a gap' % hid)
                if dangling(b['book']) and not b.get('_underhead'):
                    bad.append('%s: a block opens mid-thought: %.40r'
                               % (hid, b['book']))
            else:
                # A slot is a whole empty cell OR one marked inside a
                # cell the chapter wrote too long to blank entirely.
                blanks = sum(1 for r in b['rows'] for c in r
                             if c == '' or MARK in str(c))
                if blanks != len(ans):
                    bad.append('%s: table has %d slots against %d answers'
                               % (hid, blanks, len(ans)))
    return bad
