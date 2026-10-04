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
FIGREF = re.compile(r'\bFigure\s+F\d\d-\d\d')
# A sentence that hangs off one it does not print cannot open a summary.
DANGLE = re.compile(r'^(these|this|that|those|it|they|them|such|here|both|'
                    r'either|neither|so|then|however|therefore|also|but|and|'
                    r'its|their|finally|lastly|moreover|furthermore|again|'
                    r'in addition|for example|in contrast)\b', re.I)
# A full stop inside one of these does not end a sentence.
ABBREV = re.compile(
    r'(?:\b(?:U\.S|U\.K|E\.U|e\.g|i\.e|etc|vs|No|Nos|Inc|Co|Corp|Ltd|Jr|Sr|'
    r'Mr|Mrs|Ms|Dr|St|approx|cf|al|Fig|Sec|Art|para|pp|ch|Jan|Feb|Mar|Apr|'
    r'Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)\.|\b[A-Z]\.)$')

# One gap for about this many words of summary. Denser than this and the
# sentence stops being readable before it is filled; thinner and the reader
# is proof-reading rather than recalling.
WORDS_PER_GAP = 13
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


def is_prose(line):
    """Is this line of the chapter a sentence, or a cell of a table?

    The chapter's tables arrive flattened to one cell per line, so a line
    that does not read as a sentence is furniture. Requiring a capital and
    a full stop keeps "Buy, hold or sell shares" out of the prose, which is
    where it belongs: it is a cell of the users table and the sheet shows it
    as one.
    """
    x = clean(line)
    if not x or x.isupper() or CAP.match(x) or BOX.match(x):
        return False
    if not x[0].isupper() or not x.endswith('.'):
        return False
    if ITEMID.search(x) or FIGREF.search(x):
        return False
    # "A. Orontes includes the cartons in inventory" is an option of one of
    # the chapter's own questions, not a sentence of its prose.
    if re.match(r'^[A-E][.)]\s', x):
        return False
    return len(x) >= 30


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
    if n < 2 or n > 6 or any(len(r) != n for r in tb):
        return None
    head = [clean(c)[:48] for c in tb[0]]
    if any(not h for h in head) or head[0].lower().startswith('english'):
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
            flush()
            out.append(('head', h))
            continue
        if x in cells:
            continue
        if is_prose(ln):
            run.extend(s for s in split_sentences(x) if is_prose(s))
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


def gap_block(sents, terms, seed, spare_pool=()):
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
    picks, per = [], max(1, (want + len(sents) - 1) // len(sents))
    for si, sent in enumerate(sents):
        got = 0
        for a, b, w, _rank in candidates(sent, terms):
            if got >= per or len(picks) >= want:
                break
            if freq[w.lower()] != 1:
                continue
            if si == 0 and a == 0:
                continue            # a block may not open on a gap
            if any(_same(w, x[2]) for x in picks):
                continue            # "current" and "noncurrent" in one list
            if any(abs(a - x[1]) < 12 or abs(b - x[0]) < 12
                   for x in picks if x[3] == si):
                continue            # never two gaps side by side
            picks.append((a, b, w, si))
            got += 1
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
    spare = next((x for x in spare_pool
                  if not any(_same(x, w) for w in answers)), None)
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
def gap_table(t, seed, share=0.42):
    """A table of the chapter with some cells taken out.

    A table is a summary in tabular form, so it is gapped the same way the
    prose is. The first column always stays: it is what names the row, and a
    row with no name cannot be reasoned about. A cell that another row also
    holds is never gapped, for the same reason a repeated word is not.
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
    numeric = [j for j in range(1, len(head))
               if all(not clean(r[j]) or NUMONLY.match(clean(r[j]))
                      for r in body)]
    first = len(numeric) == len(head) - 1
    cols = [0] if first else range(1, len(head))
    cells = [(i, j) for i in range(len(body)) for j in cols
             if clean(body[i][j]) and len(clean(body[i][j])) <= 56
             and not NUMONLY.match(clean(body[i][j]))]
    seen = collections.Counter(clean(body[i][j]) for i, j in cells)
    cells = [(i, j) for i, j in cells if seen[clean(body[i][j])] == 1]
    # "Cash flows, balance sheet" sits inside "Income statement, cash flows,
    # balance sheet", so a list holding both gives one slot two defensible
    # entries. Neither is gapped.
    #
    # The comparison is by index. An earlier version wrote `v is not
    # clean(body[i][j])` to skip the cell itself, but clean() returns a new
    # string every call, so the test was always true, every cell matched
    # itself, and every table on every sheet lost all its gaps.
    vals = [clean(body[i][j]).lower() for i, j in cells]
    keep = []
    for a, (i, j) in enumerate(cells):
        me = vals[a]
        if len(me) > 5 and any(b != a and me in vals[b]
                               for b in range(len(vals))):
            continue
        keep.append((i, j))
    cells = keep
    if len(cells) < 3:
        return None
    # Rounded up, not to nearest: a five-cell table at 42 per cent rounds
    # to two, which leaves a reader almost nothing to do.
    want = max(2, min(10, -(-len(cells) * 45 // 100)))
    pick, byrow = [], collections.Counter()
    for i, j in shuffled(cells, seed):
        if len(pick) >= want:
            break
        if byrow[i] >= max(1, (len(head) - 1) // 2):
            continue
        pick.append((i, j))
        byrow[i] += 1
    if len(pick) < 2:
        return None
    # The renderer treats an empty cell as a writing slot, so a cell the
    # chapter itself leaves empty — a journal's row number on the second
    # line of an entry — has to be handed over as a space. Otherwise the
    # sheet asks a reader to fill in blanks that have no answer.
    rows = []
    for i, r in enumerate(body):
        out = [clean(c) or ' ' for c in r]
        for j in range(len(head)):
            if (i, j) in pick:
                out[j] = ''
        rows.append(out)
    answers = [clean(body[i][j]) for i, j in sorted(pick)]
    spares = [clean(body[i][j]) for i, j in cells if (i, j) not in pick]
    extra = next((x for x in shuffled(spares, seed + 3)
                  if x not in answers), None)
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
    r'you already know|you have studied|at the end of the chapter)\b',
    re.I)


ARABIC = re.compile(u'[\u0600-\u06ff]')
NUMONLY = re.compile(u'^[\\d,.()\u2014\u2013 \u2212-]+$')


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


def blocks_for(sec, tbls, terms, seed, caps=(), local_terms=()):
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
    out, k, lasthead = [], 0, ''
    for seg in prepare(sec, tbls):
        kind, v = seg[0], seg[1]
        if kind == 'head':
            out.append(dict(kind='divider', title=v))
            lasthead = v
            continue

        if kind == 'table':
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
                out.append(dict(kind='form', form=name, title=title,
                                data=data, seed=seed + 100 + k))
                continue
            g = gap_table(v, seed + 100 + k)
            if g:
                out.append(dict(kind='table', title=title, **g))
            else:
                out.append(dict(kind='ref', title=title,
                                head=[clean(x) for x in v[1]],
                                rows=[[clean(c) for c in r] for r in v[2]]))
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
            while run and DANGLE.match(run[0]) and out \
                    and out[-1].get('kind') == 'prose':
                out[-1]['carry'].append(run.pop(0))
            if not run:
                continue
            # Shuffled within the section's own words and within the
            # chapter's, then joined — shuffling the whole pool threw away
            # the preference and offered "cost of goods sold" as a wrong
            # answer on the sheet about who reads the statements.
            pool = (shuffled(spare[:nlocal], seed + k)
                    + shuffled(spare[nlocal:], seed + k))
            g = gap_block(run, terms, seed + 7 * k, pool)
            k += 1
            if g:
                # "Finally, the notes begin with a summary" opens on a
                # dangling word, but what it is final TO is the table
                # directly above it. A heading, a table and a figure all
                # put the antecedent on the page; only a block with
                # nothing before it is really hanging.
                ctx = bool(out) and out[-1]['kind'] in (
                    'divider', 'table', 'ref', 'form')
                out.append(dict(kind='prose', carry=[],
                                _underhead=ctx, **g))
            else:
                # Too short to gap three words out of without wrecking it.
                # It still belongs on the sheet, so it goes on unchanged
                # and the block before it absorbs it where it can.
                if out and out[-1].get('kind') == 'prose':
                    out[-1]['carry'].extend(run)
                else:
                    out.append(dict(kind='plain', text=' '.join(run)))
    for b in out:
        if b.get('kind') == 'prose' and b.get('carry'):
            sents = split_sentences(b['book']) + b['carry']
            g = gap_block(sents, terms, seed + 999, [])
            if g:
                b.update(g)
            b['carry'] = []
    return [b for b in out if not (b['kind'] == 'divider'
                                   and b is out[-1])]


def meanings(sec, terms, tbls=()):
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
        if len(head) != 2:
            continue
        h1 = clean(head[1]).lower()
        if not any(w in h1 for w in ('mean', 'what it', 'definition',
                                     'explanation', 'in financial')):
            continue
        for r in body:
            if len(r) > 1 and clean(r[0]) and clean(r[1]):
                if clean(r[0]).lower() not in seen:
                    seen.add(clean(r[0]).lower())
                    out.append((clean(r[0]), clean(r[1])))
    sents = [x for ln in sec['text'].split('\n') if is_prose(ln)
             for x in split_sentences(clean(ln))]
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
            out.append((term, dfn))
            break
    return out


def number_and_draw(blocks, terms, seed):
    """Give every gap its number, and draw the figures with theirs in them.

    A paragraph's gaps can be numbered when the sheet is laid out, because
    the number is a run of text beside the slot. A figure's cannot: it is
    an image, and its numbers have to be drawn inside it. So the numbering
    happens here, in reading order, before anything is rendered — and the
    renderer uses the numbers it is given rather than counting again.
    """
    spares = [t for t in terms if 4 < len(t) < 34]
    n = 1
    out = []
    for b in blocks:
        if b['kind'] == 'form':
            fn = VIS.BUILD[b['form']]
            fig = fn(title=b['title'], seed=b['seed'], first=n,
                     spares=shuffled(spares, b['seed']), **b['data'])
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


def build_section(d, si, bk=1, seed=None):
    """One handout: a section of the chapter, as gapped summaries."""
    sec = d['sections'][si]
    no = clean(sec['no'])
    n = d['n']
    seed = seed if seed is not None else n * 977 + si * 31
    tbls = tables_in(d, sec)
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
    blocks = blocks_for(sec, tbls, uniq, seed, caption_for(d, sec),
                        [clean(e) for e, _a in local])
    # The section's own glossary, as a web around its subject. This is the
    # one diagram that does not depend on a table having the right shape,
    # and it covers 45 of the book's 94 sections; the rest share a
    # chapter-level glossary and get none.
    defs = meanings(sec, [clean(e) for e, _a in local], tbls)
    bydef = dict((t.lower(), dd) for t, dd in defs)
    pairs = [(e, bydef.get(clean(e).lower(), ''))
             for e, _a in local if bydef.get(clean(e).lower())]
    # Where the section states what its words mean, the web pairs each term
    # with its meaning. Where it does not — and half the sections of the
    # book do not — it pairs each term with its Arabic, which is the
    # section's own glossary and is the thing these readers most need: the
    # idea they have in Arabic against the English the exam will use.
    kind = 'meaning'
    if len(pairs) < 4 and len(local) >= 4:
        pairs = [(clean(e), clean(a)) for e, a in local]
        kind = 'arabic'
    if len(pairs) < 4:
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
                used.append((e, bydef.get(e.lower()) or a))
        if len(used) >= 4:
            pairs, kind = used, 'arabic'
    if len(pairs) >= 4:
        blocks.append(dict(
            kind='form', form='web',
            title=('The words this section uses' if kind == 'meaning'
                   else 'The English this section uses, and its Arabic'),
            data=dict(subject=clean(sec['title']), pairs=pairs[:6]),
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
    blocks = number_and_draw(blocks, uniq, seed)
    nsent = sum(len(split_sentences(b.get('book') or b.get('text') or ''))
                for b in blocks if b['kind'] in ('prose', 'plain'))
    ngaps = sum(len(b.get('answers') or []) for b in blocks)
    return dict(id='%d.%d' % (n, si + 1), n=si + 1, pages=0,
                sec=no, title=clean(sec['title']),
                sub='Chapter %d \u00b7 section %s' % (n, no),
                terms=local, blocks=blocks,
                sentences=nsent, gaps=ngaps)


def build_chapter(bk=1, n=1):
    """Every section of the chapter, as one handout each."""
    d = PB.parse(n, bk)
    return [build_section(d, si, bk) for si in range(len(d['sections']))]


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
        avail = [x for ln in sec['text'].split('\n') if is_prose(ln)
                 for x in split_sentences(clean(ln)) if is_prose(x)]
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
        on = ' \n '.join(b.get('book') or b.get('text') or ''
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
            # a word list that holds one answer inside another gives a gap
            # two defensible answers
            for x in bank:
                for y in bank:
                    if x is not y and len(x) > 5 and x.lower() in y.lower():
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
                if DANGLE.match(b['book']) and not b.get('_underhead'):
                    bad.append('%s: a block opens mid-thought: %.40r'
                               % (hid, b['book']))
            else:
                blanks = sum(1 for r in b['rows'] for c in r if c == '')
                if blanks != len(ans):
                    bad.append('%s: table has %d slots against %d answers'
                               % (hid, blanks, len(ans)))
    return bad
