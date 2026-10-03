# -*- coding: utf-8 -*-
"""Generate Workshop handouts for a chapter.

Hand-authoring two chapters proved the format. Seven chapters at the same
quality is not a writing job, it is a conversion job, and the book turns out
to carry everything a conversion needs:

  - every section check and practice item is ALREADY multiple choice, with the
    correct letter, a reason for it, and a separate reason for each wrong
    option. That is a complete, self-checking, unambiguous item bank;
  - every real table is a relation, so each row yields a multiple-choice item
    whose distractors are the table's own sibling rows. Nothing is invented
    and nothing is vague, because the alternatives come from the same table;
  - the glossary gives matching, and a column with few repeated values gives
    classification.

So every item this file emits is multiple choice, true/false, matching,
sorting or a table to complete. There are no open questions anywhere, and no
stem refers to anything that is not printed beside it.
"""
import collections
import os
import random
import re
import unicodedata

import parsebook as PB

HERE = os.path.dirname(os.path.abspath(__file__))

ARABIC = re.compile(r'[؀-ۿ]')
NUM = re.compile(r'\d')
BIGNUM = re.compile(r'\b\d[\d,]{2,}\b')
# Words that make a stem point outside itself.
DEICTIC = re.compile(r'\b(above|below|the panel|the figure|the table|'
                     r'the five|the four|the three|earlier|previous)\b', re.I)
FIGREF = re.compile(r'\bFigure\s+(F\d\d-\d\d)')
# An item that says "use the facts in P2-11" cannot stand on its own page.
ITEMREF = re.compile(r'\b(?:P\d{1,2}-\d{2}|P\d{2}|SC\d{1,3}-\d{1,2}|'
                     r'C\d{1,3}-\d)\b')
# The book marks its boxes with a shouted label on the same line as the text.
BOXLABEL = re.compile(
    r'^(EXAM TRAP|LANGUAGE FOCUS|SECTION CHECK|TERM BRIDGE|IFRS CONTRAST|'
    r'FALSE-FRIEND ALERT|WHAT YOU ALREADY KNOW|WORKED EXAMPLE|YOUR TURN|'
    r'\u25cf|\u25a0)\s*', re.I)
# A caption line belongs to the figure, not to the prose. Left in, its words
# become a "summary" that describes a picture the summary does not print.
CAPTION = re.compile(r'^\s*(Figure|Table|Exhibit)\s+[A-Z]?\d[\d.\-]*\.?\s',
                     re.I)
# A full stop inside one of these does not end a sentence. Splitting on it
# gives "...income taxes, and U.S." followed by a fragment, and both halves
# then read as nonsense on a handout.
ABBREV = re.compile(
    r'(?:\b(?:U\.S|U\.K|E\.U|e\.g|i\.e|etc|vs|v|No|Nos|Inc|Co|Corp|Ltd|'
    r'LLC|plc|Jr|Sr|Mr|Mrs|Ms|Dr|Prof|St|approx|est|cf|al|Fig|Figs|Sec|'
    r'Secs|Art|para|paras|pp|ch|Ch|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sept|Sep|'
    r'Oct|Nov|Dec)\.|\b[A-Z]\.)$')
# A sentence that opens on one of these hangs off a sentence it does not
# print, so it cannot be the first sentence of a passage shown on its own.
DANGLING = re.compile(r'^(these|this|that|those|it|they|them|such|here|'
                      r'the same|both|either|neither|so|then|however|'
                      r'therefore|also|but|and|its|their|his|her)\b', re.I)


def _split_sentences(text):
    """Split on sentence ends, but not on the full stop of an abbreviation."""
    parts, buf = [], ''
    for piece in re.split(r'(?<=[.])\s+|\n', text):
        buf = (buf + ' ' + piece).strip() if buf else piece.strip()
        if ABBREV.search(buf):
            continue                      # "...under U.S." wants its "GAAP"
        parts.append(buf)
        buf = ''
    if buf:
        parts.append(buf)
    return parts


def sentences(text):
    """The book's sentences, with its box labels and headings taken off.

    A passage that begins "EXAM TRAP Who is a primary user?" reads as a
    mistake on a handout, because the label belongs to the book's furniture
    rather than to the sentence.
    """
    out = []
    # A caption line goes before any splitting. "Figure F10-02. Depreciation
    # expense each year for the bottling line under four methods." otherwise
    # loses its "Figure F10-02." half to FIGREF and leaves the rest looking
    # like prose about a picture nobody can see.
    lines = [ln for ln in text.split('\n') if not CAPTION.match(clean(ln))]
    for raw in _split_sentences('\n'.join(lines)):
        x = clean(raw)
        while BOXLABEL.match(x):
            x = BOXLABEL.sub('', x, count=1).strip()
        if not x or x.isupper():
            continue
        # The book's own item numbering means nothing on a handout, and a
        # "summary" that opens "SC10-4 After two years..." is not a summary
        # but a question stem lifted out of its exercise.
        if ITEMREF.search(x):
            continue
        # A cell of a table is not a sentence. Requiring a capital at the
        # start and a full stop at the end keeps fragments such as "explain
        # the item in the notes to the statements" out of a summary.
        if not x[0].isupper() or not x.endswith('.'):
            continue
        # "Look at the lower part of Figure F01-03" is navigation, and a
        # summary that contains it points off its own page.
        if FIGREF.search(x):
            continue
        out.append(x)
    return out


def near_in_length(right, pool, k=3, factor=1.85):
    """k distractors close enough in length to the right answer.

    An option much longer than the others gives itself away, so a question is
    better not asked than asked with a tell in it.
    """
    pool = [x for x in dict.fromkeys(pool) if x and x != right]
    pool.sort(key=lambda x: abs(len(x) - len(right)))
    got = pool[:k]
    if len(got) < 2:
        return None
    longest = max(len(x) for x in got)
    if len(right) > 44 and len(right) > factor * longest:
        return None
    return got


def shuffled(seq, seed):
    s = list(seq)
    random.Random(seed).shuffle(s)
    return s


def clean(s):
    s = unicodedata.normalize('NFKC', str(s or ''))
    return ' '.join(s.replace('\n', ' ').split())


# ---------------------------------------------------------------- tables
def shaped(tb):
    """A real grid: rectangular, a short header row, at least two body rows.

    Looser than the first-generation rule, because here a table is mostly used
    as a model to read rather than as a grid to complete, and a model may hold
    a long sentence in a cell.
    """
    if not tb or len(tb) < 3:
        return None
    n = len(tb[0])
    if n < 2 or n > 6:
        return None
    if any(len(r) != n for r in tb):
        return None
    head = [clean(c)[:48] for c in tb[0]]
    if any(not h for h in head):
        return None
    if head[0].lower().startswith('english'):
        return None
    body = [[clean(c)[:140] for c in r] for r in tb[1:]]
    cells = ' '.join(c for r in body for c in r)
    if ARABIC.search(' '.join(head) + cells):
        return None
    if not all(r[0] for r in body):
        return None
    # a worksheet the book has already left blank is not a model
    if sum(1 for r in body for c in r if not c) > len(body):
        return None
    # drop a duplicated header repeated inside the body, and any row that is
    # an instruction to look somewhere else rather than a row of data
    body = [r for r in body if r != head]
    body = [r for r in body
            if not any(re.search(r'\bFigure\s+F\d\d-\d\d', c)
                       for c in r)]
    if len(body) < 2:
        return None
    # the chapter's front matter looks like a grid and teaches nothing: the
    # learning objectives, the depth table and the key-terms list
    low = ' '.join(h.lower() for h in head)
    if re.search(r'\b(los|level|depth here|key terms?|after this chapter)\b',
                 low):
        return None
    if head[0].lower() in ('los', 'level', 'depth', 'date / item'):
        return None
    return head, body


def tables_for(d, sec):
    """Every shaped table the book places in this section, best first."""
    out = []
    for i, tb in enumerate(d['tables']):
        if d['tsec'].get(str(i)) != sec:
            continue
        s = shaped(tb)
        if s:
            out.append((i, s[0], s[1]))
    out.sort(key=lambda t: (-len(t[2]), -len(t[1])))
    return out


def allocate_tables(d):
    """Give every section a table to model, pooling the chapter's spares.

    The book places most of a chapter's grids in one or two sections, so
    asking only for a section's own tables leaves half the handouts with
    nothing to read. Each section keeps what the book gave it, and the
    sections the book left empty draw from what is over.
    """
    own, used = {}, set()
    for s in d['sections']:
        own[s['no']] = tables_for(d, s['no'])
        used.update(t[0] for t in own[s['no']])
    spare = []
    for i, tb in enumerate(d['tables']):
        if i in used:
            continue
        sh = shaped(tb)
        if sh:
            spare.append((i, sh[0], sh[1]))
    # The book puts most of a chapter's grids in its last section, so a
    # section is allowed to keep two and the rest go back into the pool.
    KEEP = 2
    for s in d['sections']:
        extra = own[s['no']][KEEP:]
        del own[s['no']][KEEP:]
        spare.extend(extra)
    spare.sort(key=lambda t: (-len(t[2]), -len(t[1])))
    for want in (0, 1):
        for s in d['sections']:
            if not spare:
                break
            if len(own[s['no']]) == want:
                own[s['no']].append(spare.pop(0))
    return own


# ---------------------------------------------------------------- items


def figtables(bk, n):
    """The chapter's figure numbers mapped to the table each one holds."""
    import json
    path = os.path.join(HERE, 'src', 'b%d_ch%02d.json' % (bk, n))
    try:
        j = json.load(open(path, encoding='utf-8'))
    except Exception:
        return {}
    out = {}
    for fid, ti in (j.get('figures') or {}).items():
        try:
            sh = shaped(j['tables'][ti])
        except Exception:
            sh = None
        if sh:
            out[fid] = sh
    return out


def detach_figure(m, figs):
    """A book item that says "Use Figure F02-02" needs that figure beside it.

    The item is perfectly good; what is missing is the data. So the table the
    figure holds is printed immediately before the item, and the stem stops
    naming a figure the handout does not otherwise reprint.
    """
    ref = FIGREF.search(m['q'])
    if not ref:
        return m, None
    sh = figs.get(ref.group(1))
    if not sh:
        return None, None
    q = FIGREF.sub('the extract', m['q'])
    q = q.replace('Use the extract.', 'The extract for this question is '
                  'printed with it.')
    m = dict(m, q=clean(q))
    head, body = sh
    return m, ('panel', clean(head[0]) + ' \u2014 the extract for the '
               'question that follows', [head] + body, '')


def mcq_from_bank(item, ans, covers):
    """The book's own multiple-choice item, with all four of its reasons."""
    key = ans.get(item['id'])
    if not key or len(item['options']) < 3:
        return None
    letters = 'ABCDEF'[:len(item['options'])]
    if key['letter'] not in letters:
        return None
    why = key['why']
    for lt, w in key.get('wrong', [])[:2]:
        why += '  %s is wrong: %s' % (lt, w)
    return dict(t='MCQ', q=clean(item['stem']),
                o=[clean(o) for o in item['options']],
                a=key['letter'], why=clean(why), src=item['id'])


# A column heading can be used as the noun in a question only if it reads as
# a category. "Account" does; "Orontes Foods Inc. (whole USD)" is the title of
# a statement, and a question built on it comes out as nonsense.
# A column header that is a method name or a value, not a category. Such a
# table is transposed relative to the question shape: its headers are the
# things being compared, and the first column holds the property. Asking
# "which straight-line does the book give for Expense?" is then not a
# sentence; the question has to run the other way.
VALUEISH = re.compile(r'^(highest|lowest|same|no effect|yes|no|none|all|'
                      r'increase|decrease|straight.line|double.declining|'
                      r'units.of.production|sum.of|fifo|lifo|weighted '
                      r'average|specific identification|cost|fair value|'
                      r'true|false|current|noncurrent)\b', re.I)


# A heading that opens on one of these is a question or a clause, not a
# noun. "Which what happens does the book give for Prepaid expense?" is
# what comes of quoting one into a stem.
ASKWORD = ('what', 'which', 'who', 'whom', 'whose', 'when', 'where', 'why',
           'how', 'does', 'do', 'is', 'are', 'can', 'if', 'whether')
# A heading that IS one of these is a verb, so "the creates of Contract
# liability" and "write each one under its creates" are not English.
VERBISH = ('creates', 'means', 'gives', 'shows', 'applies', 'requires',
           'allows', 'includes', 'affects', 'happens', 'does', 'goes',
           'belongs', 'counts', 'changes', 'needs', 'uses', 'holds',
           'reports', 'records', 'recognizes', 'recognises', 'measures',
           'presents', 'discloses', 'treats', 'settles', 'qualifies',
           'eliminate', 'eliminates', 'adjust', 'adjusts', 'add', 'adds',
           'deduct', 'deducts', 'debit', 'credit', 'trading', 'compute',
           'calculate', 'classify', 'determine', 'select', 'enter')
# A totals line is an arithmetic consequence of the rows above it, not one
# of the things the table classifies, so it is not a subject for a stem.
TOTALISH = ('total', 'totals', 'sum', 'subtotal', 'net', 'balance', 'all',
            'grand total')


def noun_ok(h):
    # The book marks some headings with a bullet, and "Which ● IFRS does
    # the book give for common stock?" is what comes of quoting one.
    h = h.strip().strip('●■•▪-– ').rstrip(':')
    if not 3 <= len(h) <= 24:
        return False
    if NUM.search(h) or '(' in h or '/' in h:
        return False
    caps = sum(1 for w in h.split() if w[:1].isupper())
    if caps > 1:
        return False
    words = h.lower().split()
    if not words:
        return False
    # "What happens" is a question, and "Creates" is a verb. Neither can be
    # quoted into "the <heading> of X" or "which <heading> does the book
    # give for X" and come out a sentence.
    if words[0] in ASKWORD:
        return False
    if len(words) == 1 and words[0] in VERBISH:
        return False
    # "Measured at" is a column heading, not a noun: "which measured at does
    # the book give for ...?" is not a sentence.
    return words[-1] not in ('at', 'by', 'for', 'to', 'in', 'of', 'on',
                             'from', 'with', 'as', 'is', 'are', 'does',
                             'and', 'or')


def as_noun(h):
    """The heading as it should read inside a sentence."""
    h = h.strip().strip('●■•▪-– ').rstrip(':')
    return h[0].lower() + h[1:] if h[1:].islower() else h


# A first-column heading that names no category. "Which row does the book
# pair with ...?" is not a question a student can answer with understanding.
GENERIC = {'row', 'rows', 'item', 'items', 'no', 'number', 'line', 'lines',
           'entry', 'entries', 'example', 'examples', 'case', 'cases',
           'step', 'steps', 'n', 'id', 'name', 'names', 'thing', 'things',
           'answer', 'answers', 'value', 'values', 'result', 'results',
           'detail', 'details', 'description', 'note', 'notes', 'comment',
           'comments', 'point', 'points', 'fact', 'facts'}


def mcq_from_row(head, body, ri, ci, seed, maxopt=4):
    """One row of a real table, as a question whose distractors are its
    sibling rows. The alternatives come from the book, so none of them is a
    straw man and none of them is accidentally also correct."""
    if not noun_ok(head[0]) or as_noun(head[0]).lower() in GENERIC:
        return None
    value = body[ri][ci]
    label = body[ri][0]
    if not value or not label or len(value) > 110 or len(label) > 60:
        return None
    if len(value) < 3:
        return None
    others = [r[0] for k, r in enumerate(body)
              if k != ri and r[0] and r[0] != label and len(r[0]) <= 60]
    others = list(dict.fromkeys(others))
    if len(others) < 2:
        return None
    # a distractor whose own cell says the same thing is not wrong
    others = [o for o in others
              if not any(r[0] == o and r[ci] == value for r in body)]
    if len(others) < 2:
        return None
    opts = shuffled([label] + shuffled(others, seed)[:maxopt - 1], seed + 1)
    stem = ('Which %s does the book pair with “%s”?'
            % (as_noun(head[0]), value))
    return dict(t='MCQ', q=stem, o=opts, a='ABCD'[opts.index(label)],
                why='The book’s own table pairs %s with “%s”.'
                    % (label, value))


def mcq_from_col(head, body, ri, ci, seed, maxopt=4):
    """Ask for a row's value, with the column's other values as the options.

    This direction is always a function: one row has exactly one value in one
    column, so exactly one option can be right. Asking the other way round
    — here is a value, which row is it? — has several defensible
    answers whenever two rows share a value, which is most of the time.
    """
    if not noun_ok(head[ci]) or VALUEISH.match(clean(head[ci])) \
            or as_noun(head[ci]).lower() in GENERIC:
        return None
    label = clean(body[ri][0])
    value = clean(body[ri][ci])
    if not label or not value or len(label) > 70 or len(value) > 86:
        return None
    if label.lower().strip(' :.') in TOTALISH:
        return None
    # "Tax depreciation above the line" makes a stem that points off its own
    # page as soon as it is quoted into a question.
    if DEICTIC.search(label) or DEICTIC.search(value):
        return None
    if len(value) < 3:
        return None
    others = near_in_length(
        value, [clean(r[ci]) for r in body if len(clean(r[ci])) <= 86],
        maxopt - 1)
    if not others:
        return None
    opts = shuffled([value] + others, seed + 1)
    return dict(t='MCQ',
                q='Which %s does the book give for %s?'
                  % (as_noun(head[ci]), label),
                o=opts, a='ABCD'[opts.index(value)],
                why='The book\u2019s own table gives %s as the %s of %s.'
                    % (value, as_noun(head[ci]), label))


def tf_from_row(head, body, ri, ci, seed, truth):
    # The stem quotes head[ci] as a noun ("the category of X is ..."), so
    # that is the heading that has to read as one. Testing head[0] instead
    # let "the what happens of Accrued revenue" onto the page.
    if not noun_ok(head[0]) or not noun_ok(head[ci]) \
            or VALUEISH.match(clean(head[ci])) \
            or as_noun(head[ci]).lower() in GENERIC:
        return None
    """A true/false claim built by pairing a row with its own value, or with
    another row's. Both halves come out of the same table."""
    label = body[ri][0]
    value = body[ri][ci]
    if not label or not value or len(value) > 90 or len(label) > 60:
        return None
    if len(value) < 3:
        return None
    if truth:
        claim, ans = value, 'T'
        why = 'The book pairs %s with “%s”.' % (label, value)
    else:
        alts = [r[ci] for k, r in enumerate(body)
                if k != ri and r[ci] and r[ci] != value and len(r[ci]) <= 90]
        if not alts:
            return None
        claim = shuffled(alts, seed)[0]
        ans = 'F'
        why = ('The book pairs %s with “%s”, not with “%s”.'
               % (label, value, claim))
    return dict(t='TF',
                q='The book gives the %s of %s as “%s”.'
                  % (as_noun(head[ci]), label, claim),
                a=ans, why=why)


def match_terms(pairs, seed, k=6):
    """English to Arabic, both printed on the same page."""
    use = shuffled(pairs, seed)[:k]
    if len(use) < 4:
        return None
    left = [clean(e) for e, _a in use]
    right_true = [clean(a) for _e, a in use]
    order = shuffled(range(len(use)), seed + 3)
    right = [right_true[i] for i in order]
    ans = ['ABCDEFGH'[right.index(right_true[i])] for i in range(len(use))]
    return dict(t='MATCH',
                q='Write the letter of the Arabic term beside each English '
                  'term. Every term is used once.',
                left=left, right=right, a=ans,
                whys=['' for _ in ans])


def sort_from(head, body, seed):
    """A column with a few repeated values becomes a classification."""
    for ci in range(1, len(head)):
        vals = [r[ci] for r in body]
        if not all(vals):
            continue
        uniq = sorted(set(vals))
        if not 2 <= len(uniq) <= 4:
            continue
        if any(len(v) > 28 or not v for v in uniq):
            continue
        items = [r[0] for r in body]
        if any(len(i) > 56 or not i for i in items):
            continue
        if len(items) < 4 or len(items) > 12:
            continue
        q = ('Write each one under its %s. Every item belongs to exactly '
             'one group.' % as_noun(head[ci])) if noun_ok(head[ci]) else \
            ('Write each one under the heading it belongs to. Every item '
             'belongs to exactly one group.')
        return dict(t='SORT', q=q,
                    regions=uniq, items=items,
                    a=['%s: %s' % (v, ', '.join(
                        r[0] for r in body if r[ci] == v)) for v in uniq],
                    whys=['' for _ in uniq])
    return None


def grid_from(head, body, seed):
    """A table to complete, with one row left worked as the pattern."""
    if len(head) < 3 or not 3 <= len(body) <= 8:
        return None
    if any(len(c) > 46 for r in body for c in r):
        return None
    worked = 0
    for i, r in enumerate(body):
        if all(r):
            worked = i
            break
    rows, ans, whys = [], [], []
    for i, r in enumerate(body):
        if i == worked:
            rows.append(list(r))
            continue
        rows.append([r[0]] + [''] * (len(head) - 1))
        ans.append('%s: %s' % (r[0], ' · '.join(r[1:])))
        whys.append('')
    if not ans:
        return None
    return dict(t='GRID',
                q='Complete every empty cell. The first full row shows the '
                  'pattern.',
                h=head, rows=rows, a=ans, whys=whys)


def contrast_from(head, body, seed):
    """Two rows that differ in their last column, posed as one question."""
    if len(head) < 3 or len(body) < 2:
        return None
    ci = len(head) - 1
    vals = [r[ci] for r in body]
    uniq = [v for v in dict.fromkeys(vals) if v and len(v) <= 40]
    if len(uniq) < 2:
        return None
    pick = []
    for v in uniq[:2]:
        for r in body:
            if r[ci] == v and all(r[:ci]):
                pick.append(r)
                break
    if len(pick) < 2:
        return None
    cases = []
    for r in pick:
        lines = ['%s: %s' % (head[j], r[j]) for j in range(1, ci)]
        cases.append((r[0], lines or ['—']))
    opts = shuffled(uniq[:4], seed) if len(uniq) >= 3 else uniq[:2] + [
        'both of them', 'neither of them']
    right = pick[0][ci]
    return dict(title='Two of the book’s own cases, side by side',
                cases=cases,
                q='Only the facts above differ. What is the %s of %s?'
                  % (head[ci].lower().rstrip(':'), pick[0][0]),
                o=opts, a='ABCD'[opts.index(right)],
                why='The book gives %s as the %s of %s.'
                    % (right, head[ci].lower().rstrip(':'), pick[0][0]))


# ---------------------------------------------------------------- rule frames
STOP = set('''a an the of to in for on at by and or is are was were be been
being that this these those it its as with from into than then so such not
no any each every one two three four five its his her their our your my
company companies book chapter section figure example'''.split())


def _cloze(sent, hits, seed, bank_extra):
    """Turn one of the book's sentences into a gapped sentence."""
    parts, words, pos = [], [], 0
    for t in sorted(hits, key=lambda t: sent.lower().find(t.lower())):
        i = sent.lower().find(t.lower())
        if i < pos:
            continue
        parts.append(sent[pos:i])
        parts.append(max(11, len(t) + 2))
        words.append(sent[i:i + len(t)])
        pos = i + len(t)
    parts.append(sent[pos:])
    if len(words) < 2:
        return None
    # A passage whose first visible word is a gap reads as "____ and research
    # and are expensed when incurred", which is not a sentence a student can
    # make sense of before filling it.
    if not (parts and isinstance(parts[0], str) and parts[0].strip()):
        return None
    # The bank holds more words than there are gaps, so a student cannot
    # fill it by counting. The spare words are the chapter's own terms.
    taken = {x.lower() for x in words}
    spare = []
    for w in bank_extra:
        if w.lower() in taken:
            continue
        taken.add(w.lower())
        spare.append(w)
        if len(spare) == 2:
            break
    # A gapped word that appears twice in the sentence would be listed twice,
    # and then one gap has two defensible answers.
    seen, uniq = set(), []
    for w in words + spare:
        if w.lower() in seen:
            continue
        seen.add(w.lower())
        uniq.append(w)
    if len([w for w in uniq if w.lower() in {x.lower() for x in words}]) \
            < len(words):
        return None
    bank = shuffled(uniq, seed)
    return dict(parts=parts, words=words, bank=bank, book=sent,
                a=' \u00b7 '.join(words))


def cloze_candidates(text, terms, seed):
    """Every sentence in a section that can carry a gapped question.

    The book's own sentences are the only ones used, so a completed gap is
    the book's wording rather than a paraphrase of it, and the key can print
    the sentence in full for the student to check against.
    """
    out = []
    for s in sentences(text):
        if not 60 <= len(s) <= 190 or BIGNUM.search(s):
            continue
        if s.endswith(('?', ':')) or s.startswith(('Figure', 'See', 'Use')):
            continue
        hits = [t for t in terms
                if len(t) > 3 and re.search(r'\b%s\b' % re.escape(t), s,
                                            re.I)]
        hits = sorted(set(hits), key=len, reverse=True)[:3]
        if len(hits) < 2:
            continue
        out.append((len(hits) * 100 - abs(len(s) - 125), s, hits))
    out.sort(key=lambda t: -t[0])
    return out


def cloze_items(text, terms, seed, k=3, skip=()):
    """k gapped questions, from k different sentences."""
    spare = shuffled([t for t in terms if 3 < len(t) < 26], seed + 5)
    out, used = [], set(skip)
    for _sc, sent, hits in cloze_candidates(text, terms, seed):
        if sent in used:
            continue
        c = _cloze(sent, hits, seed + len(out), spare)
        if not c:
            continue
        used.add(sent)
        out.append(dict(
            t='FILL',
            q='Fill every gap. The list holds more words than there are '
              'gaps, so one or two of them are not used.',
            parts=c['parts'], bank=c['bank'], a=c['a'], one=True,
            why='The book writes: \u201c%s\u201d' % c['book']))
        if len(out) >= k:
            break
    return out


def _longwords(window, used, n=3):
    """A passage gapped on its own longest distinctive words.

    The last resort, for a chapter whose glossary is too thin to supply
    three gaps. The words are still the book's; they are chosen by length
    and by not being ordinary English rather than by being in a term list.
    """
    for span in (3, 2, 4, 1):
        for i in range(len(window)):
            if i + span > len(window):
                continue
            passage = ' '.join(window[i:i + span])
            if passage in used or not 80 <= len(passage) <= 440:
                continue
            cand = []
            for w in re.findall(r"[A-Za-z][A-Za-z\-']{5,}", passage):
                if w.lower() in STOP or w in cand:
                    continue
                cand.append(w)
            if len(cand) < 2:
                continue
            hits = sorted(cand, key=len, reverse=True)[:n]
            return (0, passage, hits)
    return None


def summary_fills(text, terms, seed, k=3, labels=None, maxgaps=5):
    """Three gapped SUMMARIES of what the handout will settle.

    Not three stray sentences, and not three overlapping ones. Each is a
    short passage — two to four of the book's own consecutive sentences
    — and the three are disjoint at the sentence, so reading all three in
    order previews the whole section instead of saying one thing three times.

    Three things disqualify a passage outright. It may not open on a word
    that hangs off a sentence it does not print ("This reclassification
    adjustment..." means nothing as an opening line). It may not reuse a
    sentence another summary already used. And it may not be a question stem
    or a caption, both of which `sentences` has already taken out.

    The wording stays the book's. Nothing is paraphrased, because a student
    filling a gap should be writing the word the book uses, and the key can
    then print the passage in full for them to check against.
    """
    # A sentence carrying a worked figure may sit inside a summary — the
    # book's own prose does that constantly — but it may not open one and
    # may not be most of one, or the "summary" becomes a calculation.
    sents = [x for x in sentences(text)
             if 30 <= len(x) <= 230
             and not x.endswith(('?', ':'))
             and not x.startswith(('Figure', 'See', 'Use', 'Answers'))]
    if len(sents) < k:
        return []
    numeric = [bool(BIGNUM.search(x)) for x in sents]
    spare = shuffled([t for t in terms if 3 < len(t) < 26], seed + 5)
    taken = set()                 # sentence indices already in a summary

    def spans(lo, hi, slack=0):
        """Candidate passages inside sents[lo:hi], best first.

        Scored on how many of the section's own terms it can gap, then on
        how close it is to a readable length, and bonused for opening on a
        sentence that can stand on its own.
        """
        out = []
        for i in range(lo, hi):
            if DANGLING.match(sents[i]) or numeric[i]:
                continue          # never start a summary mid-thought
            for span in (3, 4, 2, 5):
                j = i + span
                if j > hi:
                    continue
                reused = sum(1 for x in range(i, j) if x in taken)
                if reused > slack or (i in taken):
                    continue
                if sum(numeric[i:j]) * 2 > span:
                    continue      # mostly arithmetic is not a summary
                passage = ' '.join(sents[i:j])
                if not 100 <= len(passage) <= 450:
                    continue
                hits = [t for t in terms
                        if len(t) > 3 and not NUM.search(t) and re.search(
                            r'\b%s\b' % re.escape(t), passage, re.I)]
                hits = sorted(set(hits), key=len, reverse=True)[:maxgaps]
                # A section whose glossary is thin still gets a summary: the
                # gaps then fall on the passage's own longest distinctive
                # words, which are the book's words either way. What never
                # happens is falling back to a single sentence.
                if len(hits) < 2:
                    own = []
                    for w in re.findall(r"[A-Za-z][A-Za-z\-']{5,}", passage):
                        if w.lower() in STOP or w in own:
                            continue
                        own.append(w)
                    hits = (hits + sorted(own, key=len, reverse=True))[:3]
                    hits = list(dict.fromkeys(hits))
                    penalty = 60
                else:
                    penalty = 0
                if len(hits) < 2:
                    continue
                out.append((len(hits) * 100 - abs(len(passage) - 250)
                            - penalty - 150 * reused,
                            i, j, passage, hits))
        out.sort(key=lambda x: -x[0])
        return out

    out = []
    size = max(1, len(sents) // k)
    for b in range(k):
        lo = b * size
        hi = len(sents) if b == k - 1 else min(len(sents), (b + 1) * size)
        # Its own third of the section first, then anything still unused, so
        # that a thin third yields a summary of its own rather than a second
        # copy of a neighbour's.
        #
        # The three are disjoint wherever the section has the prose for it.
        # A short section — "What is a lease?" runs to a dozen sentences
        # — cannot give three disjoint passages, and the alternative there
        # is a single gapped sentence, which is not a summary at all. So the
        # last resort lets a later passage carry over one sentence from an
        # earlier one. It never carries over its opening sentence, so the
        # three still read as three summaries rather than one slid along.
        c = None
        for slack in (0, 1, 2):
            for cand in (list(spans(lo, hi, slack))
                         + list(spans(0, len(sents), slack))):
                _sc, i, j, passage, hits = cand
                got = _cloze(passage, hits, seed + b, spare)
                if got and len(got['words']) >= 2:
                    c, used_range = got, range(i, j)
                    break
            if c:
                break
        if not c:
            continue
        taken.update(used_range)
        out.append((used_range[0], c))
    # The labels say "where the section starts", "in the middle", "where it
    # ends", so they have to be handed out by where each passage sits in the
    # section. The search does not run in that order — a thin third sends
    # it looking through the whole section — so the three are sorted by
    # position before they are labelled, or a reader meets the end of the
    # section under "where the section starts".
    out.sort(key=lambda x: x[0])
    return [dict(
        t='FILL',
        q=(((labels or [])[j] + ' ') if labels and j < len(labels) else '')
          + 'Fill every gap. The list holds more words than there are '
            'gaps, so one or two of them are not used.',
        parts=c['parts'], bank=c['bank'], a=c['a'], one=True,
        why='The book writes: \u201c%s\u201d' % c['book'])
        for j, (_i, c) in enumerate(out)]


def table_summary(tbl, seed, label='', maxrows=4):
    """A gapped summary of the table the handout is about to show.

    A handful of sections — "What is a lease?", "IFRS and covenants" —
    run to barely a dozen sentences of prose, and three disjoint passages
    cannot be cut from them. What those sections do have is a table, and
    the table is what the handout teaches. So this summary states what the
    table settles, using the table's own cells for the sentence and for the
    gaps, and the key names the table it came from.

    The rows left over supply the spare words, so the bank is always longer
    than the gaps and a student cannot fill it by counting. That needs one
    row more than it gaps, so a table of two rows gives nothing.
    """
    if not tbl:
        return None
    _i, head, body = tbl
    if len(head) < 2:
        return None
    # The key of a row is only read, so it may run long; the value goes
    # into a gap the student writes in, so that one stays short.
    rows = [(clean(r[0]), clean(r[1])) for r in body
            if r and len(r) > 1 and clean(r[0]) and clean(r[1])
            and len(clean(r[0])) <= 64 and len(clean(r[1])) <= 54]
    # A value that two rows share cannot be gapped: both rows would answer.
    seen = collections.Counter(v for _k, v in rows)
    rows = [(k, v) for k, v in rows if seen[v] == 1]
    if len(rows) < 3:
        return None
    use, sparerows = rows[:min(maxrows, len(rows) - 1)], rows[maxrows:]
    # "the what it means of each one" is not English. A heading that does not
    # read as a noun inside a sentence gets the neutral lead instead.
    if noun_ok(head[0]) and noun_ok(head[1]) \
            and as_noun(head[0]).lower() not in GENERIC \
            and as_noun(head[1]).lower() not in GENERIC:
        lead = ('The book’s own table of %s gives the %s of each one: '
                % (as_noun(head[0]), as_noun(head[1])))
    else:
        lead = ('The book’s own table “%s” settles these: '
                % clean(head[0]))
    parts, words = [lead], []
    for j, (k, v) in enumerate(use):
        sep = '' if not j else (' and ' if j == len(use) - 1 else ', ')
        parts[-1] += sep + 'for ' + k + ' it is '
        parts.append(max(11, len(v) + 2))
        words.append(v)
        parts.append('')
    parts[-1] += '.'
    spare = [v for _k, v in sparerows or rows[len(use):]]
    bank, got = list(words), set(w.lower() for w in words)
    for v in spare:
        if v.lower() in got:
            continue
        got.add(v.lower())
        bank.append(v)
        if len(bank) >= len(words) + 2:
            break
    if len(bank) <= len(words):
        return None
    book = lead + ' and '.join('for %s it is %s' % (k, v)
                               for k, v in use) + '.'
    return dict(t='FILL',
                q=(label + ' ' if label else '')
                  + 'Fill every gap from the list. The list holds more '
                    'words than there are gaps.',
                parts=parts, bank=shuffled(bank, seed), one=True,
                a=' · '.join(words),
                why='From the book’s own table “%s”: %s'
                    % (clean(head[0]), book))


def punctuated(q):
    """A stem ends as a question or as a statement.

    The book's own item bank often gives a stem with no final mark, because
    the book prints the options under it. On a handout the stem is read on
    its own, and an unpunctuated one reads as a sentence that was cut off.
    """
    q = (q or '').strip()
    if not q or q.endswith(('?', '.', ':', '\u201d')):
        return q
    first = q.split()[0].lower().rstrip(',')
    ask = first in ('which', 'what', 'who', 'when', 'where', 'why', 'how',
                    'is', 'are', 'was', 'were', 'does', 'do', 'did', 'can',
                    'could', 'should', 'would', 'will', 'has', 'have', 'had')
    return q + ('?' if ask else '.')


def exclusive(opts, floor=6):
    """Are the options mutually exclusive as written?

    An option that contains another ("a change in estimate" inside "a change
    in estimate applied prospectively") lets a student defend both, so the
    item has two answers whatever the key says.
    """
    low = [x.strip().lower() for x in opts]
    if len(set(low)) != len(low):
        return False
    for i, a in enumerate(low):
        for b in low[i + 1:]:
            if (a in b or b in a) and min(len(a), len(b)) > floor:
                return False
    return True


QUOTED = re.compile(r'\u201c[^\u201d]*\u201d|\"[^\"]*\"')


def _shingle(q):
    """The words of a stem, with any quoted value taken out.

    "Which row does the book pair with <a long sentence>?" asked three times
    over differs enormously in the quoted part and not at all in the part a
    student reads as the question. Comparing the template is what catches
    the run.
    """
    q = QUOTED.sub(' ', q or '')
    return set(re.sub(r'\W+', ' ', q.lower()).split())


def near_copy(a, b, thresh=0.72):
    """Do two stems say the same thing in the same words?

    The same measure the audit uses, so the generator cannot emit what the
    audit will flag. Jaccard over word sets, which catches the stem that
    differs only in the row it names.
    """
    x, y = _shingle(a), _shingle(b)
    if not x or not y:
        return False
    return len(x & y) / float(len(x | y)) >= thresh


# The book's running companies. An item that names one has a situation in
# it; an item that names none is a definition with a question mark on it.
CASES = ('Orontes', 'Barada', 'Cedar', 'GreenBasket', 'Levant')


# An item that names no running company may still set a situation: "At
# December 31 a company breaks a loan covenant" is a decision in front of
# somebody. The audit counts these, so the generator has to count them too,
# or it reserves the wrong items.
SITUATED = re.compile(
    r'\b(a|the|its|their)\s+(company|companies|firm|client|board|bank|'
    r'lender|customer|supplier|lessee|lessor|analyst|investor|shareholder|'
    r'subsidiary|parent|entity|manufacturer|retailer|contractor)\b'
    r'|\ban?\s+(analyst|investor|entity|auditor)\b'
    r'|\b(on|at|during|by)\s+(january|february|march|april|may|june|july|'
    r'august|september|october|november|december|year.end|'
    r'the reporting date|december 31)\b', re.I)


def caseful(m):
    """Does this item put the student in front of a company and a decision?"""
    t = ' '.join([m.get('q') or ''] + [str(x) for x in (m.get('o') or [])])
    return any(c.lower() in t.lower() for c in CASES) or bool(SITUATED.search(t))


def by_interest(items):
    """The same items, with the ones that carry a situation first.

    The applying move is where a student should be deciding something for
    somebody, so where the book's own bank offers both an abstract item and
    one set at Orontes, the Orontes one goes on the page. Nothing is
    invented and nothing is dropped: only the order changes.
    """
    return ([m for m in items if caseful(m)]
            + [m for m in items if not caseful(m)])


def match_from_table(head, body, seed, k=6):
    """A table of unique pairs read as a matching exercise.

    A table whose headings are too generic to quote into a stem — "Item"
    against "Answer" — still states a one-to-one relation, and that is
    exactly what a matching item asks for.
    """
    if len(head) < 2:
        return None
    pairs = [(clean(r[0]), clean(r[1])) for r in body
             if r and len(r) > 1 and clean(r[0]) and clean(r[1])
             and len(clean(r[0])) <= 72 and len(clean(r[1])) <= 72]
    if len({a for a, _b in pairs}) != len(pairs) \
            or len({b for _a, b in pairs}) != len(pairs):
        return None            # a value used twice gives one row two answers
    if not 4 <= len(pairs) <= k:
        return None
    left = [a for a, _b in pairs]
    right = shuffled([b for _a, b in pairs], seed)
    return dict(t='MATCH',
                q='Write the letter of the matching %s beside each %s. '
                  'Every one is used once.'
                  % (as_noun(head[1]) if noun_ok(head[1]) else 'entry',
                     as_noun(head[0]) if noun_ok(head[0]) else 'one'),
                left=left, right=right,
                a=['ABCDEFGH'[right.index(b)] for _a, b in pairs],
                whys=['' for _ in pairs])


def topup(tbls, pairs, seed, k=6):
    """More items for a section whose share of the book's bank ran out.

    The banks are divided between the sections of a chapter, so the last
    section of a chapter with a thin bank can be left with nothing for its
    applying move, and the sheet then comes out at three pages. What every
    section does still have is its own tables and its own glossary, so the
    top-up is built from those: rows the reading move did not put on the
    page, and the table read as a whole.
    """
    out, cells = [], 0
    for t in (tbls or []):
        if len(out) >= k:
            break
        _i, head, body = t
        # At most one more cell-reading question. The reading move already
        # has its two, and a top-up of six more turns the sheet into a cell
        # hunt — which is the thing the reading move was cut down to avoid.
        for ri in range(len(body) - 1, -1, -1):
            if len(out) >= k or cells >= 1:
                break
            for ci in range(1, len(head)):
                m = mcq_from_col(head, body, ri, ci, seed + 7 * ri + ci) \
                    or mcq_from_row(head, body, ri, ci, seed + ri)
                if m:
                    out.append(m)
                    cells += 1
                    break
        g = grid_from(head, body, seed + 3)
        if g:
            out.append(g)
        so = sort_from(head, body, seed + 4)
        if so:
            out.append(so)
        mt = match_from_table(head, body, seed + 6)
        if mt:
            out.append(mt)
    # No gap-fill here. The preview page and the body use different FILL
    # shapes — the preview's answer is one string, the body's is a list —
    # and a preview-shaped item in the body fails the key gate and carries
    # the preview's "the list holds more words" wording, which points off
    # its own page. The whole-table shapes above cover the same ground.
    if pairs and len(pairs) >= 4:
        mt = match_terms(pairs, seed + 5, k=min(6, len(pairs)))
        if mt:
            out.append(mt)
    return out[:k]


def normalised(m):
    """One item, with the invariants every item has to meet.

    Applied as items leave the generator rather than at each of the dozen
    places that build one, so a new source of items cannot forget it.
    Returns None for an item that cannot be repaired, and the caller drops
    it — better a shorter move than an item with two answers.
    """
    m = dict(m)
    m['q'] = punctuated(m.get('q'))
    if m['t'] == 'MCQ':
        o = [x for x in (m.get('o') or []) if x]
        if len(o) < 3:
            return None
        right = o[('ABCD'.index(m['a']) if isinstance(m.get('a'), str)
                   and m.get('a') in 'ABCD' else 0)]
        if not exclusive(o):
            # Drop the distractors that overlap the key rather than the key.
            keep = [right]
            for x in o:
                if x is right:
                    continue
                if exclusive(keep + [x]):
                    keep.append(x)
            if len(keep) < 3:
                return None
            o = shuffled(keep, len(right))
            m['o'], m['a'] = o, 'ABCD'[o.index(right)]
    if m['t'] == 'FILL':
        bank, seen = [], set()
        for w in (m.get('bank') or []):
            if w.lower() in seen:
                continue
            seen.add(w.lower())
            bank.append(w)
        gaps = sum(1 for x in (m.get('parts') or []) if not isinstance(x, str))
        if len(bank) <= gaps:
            return None
        m['bank'] = bank
    if m['t'] == 'MATCH' and 'letter' not in (m['q'] or '').lower():
        m['q'] = ('Write the letter of the matching item beside each one. '
                  + m['q'])
    return m


def deduped(flow, window=3, thresh=0.72):
    """Drop an item whose stem is a near-copy of one of the last few.

    A table of eight rows will happily yield eight questions of one shape,
    and the generator used to emit them all. Here the run is cut at the
    first repeat, so what survives is the shape asked once.
    """
    recent, out = [], []
    for blk in flow:
        if blk[0] == 'check':
            # A checkpoint is an item too: it needs the same punctuation and
            # the same mutually exclusive options, and it must not re-ask
            # what the cycle just asked. It can never be dropped — a cycle
            # without a checkpoint is not a cycle — so a repeat is
            # replaced by the generic close instead.
            m = normalised(dict(t='MCQ', q=blk[1], o=list(blk[2]),
                                a=blk[3], why=blk[5] if len(blk) > 5 else ''))
            if m is None or any(near_copy(m['q'], r, thresh)
                                for r in recent[-window:]):
                out.append(('check',
                            'Which of these did this cycle settle?',
                            ['the rule and where it comes from',
                             'nothing in particular', 'only the vocabulary',
                             'only the arithmetic'], 'A', blk[4],
                            'Every cycle settles one rule and shows where '
                            'it comes from.'))
            else:
                out.append(('check', m['q'], m['o'], m['a'], blk[4],
                            m.get('why') or ''))
                recent.append(m['q'])
            continue
        if blk[0] != 'items':
            # A true/false that restates the question just above it is the
            # same item twice, so the comparison runs across blocks.
            out.append(blk)
            continue
        keep = []
        for m in blk[1]:
            m = normalised(m)
            if m is None:
                continue
            q = m.get('q') or ''
            if m['t'] in ('MCQ', 'TF') and any(
                    near_copy(q, r, thresh) for r in recent[-window:]):
                continue
            keep.append(m)
            recent.append(q)
        if keep:
            out.append(('items', keep))
    return out


def rule_from(text, terms, seed, skip=()):
    """A sentence the book itself writes, with its key words taken out."""
    spare = shuffled([t for t in terms if 3 < len(t) < 26], seed + 5)
    for _sc, sent, hits in cloze_candidates(text, terms, seed):
        if sent in skip:
            continue
        c = _cloze(sent, hits, seed, spare)
        if not c:
            continue
        return dict(lead='Complete the book\u2019s own sentence. The list '
                         'holds more words than there are gaps.',
                    skeleton=[c['parts']], words=c['bank'],
                    book=c['book'], a=c['a'])
    return None


# ---------------------------------------------------------------- figures
def pick_fig(head, body, fid):
    """Choose the shape that fits this table, and return a call to build it."""
    rows = body[:6]
    short = all(len(c) <= 64 for r in rows for c in r)
    # a column of few repeated values is a classification
    for ci in range(1, len(head)):
        vals = [r[ci] for r in rows]
        uniq = [v for v in dict.fromkeys(vals) if v]
        if 2 <= len(uniq) <= 4 and all(len(v) <= 26 for v in uniq) \
                and all(len(r[0]) <= 46 for r in rows) and len(rows) >= 4:
            groups = [(v, [r[0] for r in rows if r[ci] == v]) for v in uniq]
            return ('lanes', dict(title=head[0] + ' by ' + head[ci].lower(),
                                  groups=groups,
                                  sub='every one of these is in the '
                                      'book’s own table'))
    if len(head) >= 3 and short and 2 <= len(rows) <= 6:
        cards = [(r[0], ['%s: %s' % (head[j], r[j]) for j in range(1, len(head))
                         if r[j]]) for r in rows]
        return ('cardset', dict(title=head[0], cards=cards,
                                sub=' · '.join(head[1:])[:110]))
    if len(head) == 2 and 3 <= len(rows) <= 6 and short:
        steps = [(r[0], r[1]) for r in rows]
        return ('flowchain', dict(title=head[0] + ' — ' + head[1],
                                  steps=steps))
    if len(head) == 2 and short:
        cards = [(r[0], [r[1]]) for r in rows[:6]]
        return ('cardset', dict(title=head[0] + ' — ' + head[1],
                                cards=cards))
    return None


def write_figs(pkg, n, specs, chapmap, hand=None):
    """Write the chapter's generated figure module."""
    lines = ['# -*- coding: utf-8 -*-',
             '"""Figures for chapter %d, drawn from the chapter\'s own tables.'
             % n, '',
             'Generated by wsgen. Each builder renders the model and, with',
             'blank=True, the twin the student rebuilds from memory.',
             '"""',
             'from wsfiggen import (flowchain, cardset, lanes, splitbar,',
             '                      chaptermap)', '', '']
    names = []
    for name, (kind, kw) in specs:
        lines.append('def %s(blank=False):' % name)
        lines.append('    return %s(blank=blank, **%r)' % (kind, kw))
        lines.append('')
        lines.append('')
        names.append(name)
    lines.append('def chmap(blank=False):')
    lines.append('    return chaptermap(blank=blank, **%r)' % chapmap)
    lines.append('')
    lines.append('')
    names.append('chmap')
    lines.append('FIGS = {%s}' % ', '.join("'%s': %s" % (x, x) for x in names))
    if hand:
        lines.append('')
        lines.append('# the figures drawn by hand for this chapter')
        lines.append('from %s import FIGS as _HAND  # noqa: E402' % hand)
        lines.append('FIGS.update(_HAND)')
    lines.append('')
    open(os.path.join(pkg, 'figs.py'), 'w', encoding='utf-8').write(
        '\n'.join(lines))


# ---------------------------------------------------------------- assembly
def _preview(title, note, rows, items):
    return ('preview', title, note, rows, items)


HOWITWORKS = [
    ['How a cycle works', 'what you do'],
    ['MODEL', 'read the figure or the table before you answer anything'],
    ['READ THE MODEL', 'every answer is printed on the same page'],
    ['INVENT THE RULE', 'write the rule yourself, then compare with the book'],
    ['APPLY', 'no help on this move'],
    ['CHECKPOINT', 'mark it yourself; if you miss it, the sheet says what to '
                   'redo'],
]


def watchwords(terms):
    """The handout's vocabulary, as a self-check rather than a question.

    Nothing here is marked. A student ticks what they can already use, which
    tells them where their own gaps are before the session starts, and tells
    the person circulating where the room's gaps are.
    """
    rows = [['Words this handout uses precisely',
             'tick it if you could already use it in a sentence']]
    for e, _a in terms[:7]:
        rows.append([e, ''])
    return rows


def routemap(blocks, terms):
    """A table that describes the handout it opens, cycle by cycle.

    The preview page has to be a real preview, not a warm-up: a student
    should be able to read this one table and know what the session will
    settle, what they will be given to read, and how they will know whether
    they have got it. So it is built from the handout’s own blocks after
    they exist, rather than written in advance and left to drift.
    """
    rows = [['In this handout', 'What you will read', 'How you check it']]
    cur = None
    for blk in blocks:
        if blk[0] == 'cycle':
            cur = {'t': blk[2], 'model': [], 'check': ''}
            rows.append(cur)
        elif cur is None:
            continue
        elif blk[0] == 'fig':
            cur['model'].append('a figure to read')
        elif blk[0] == 'panel':
            cur['model'].append(clean(blk[1]).split(' \u2014 ')[0])
        elif blk[0] == 'trace':
            cur['model'].append('a worked trace')
        elif blk[0] == 'rule':
            cur['model'].append('the book\u2019s own rule, gapped')
        elif blk[0] == 'check' and not cur['check']:
            cur['check'] = clean(blk[1])
    out = [rows[0]]
    for r in rows[1:]:
        if not isinstance(r, dict):
            continue
        seen, mod = set(), []
        for m in r['model']:
            if m.lower() not in seen:
                seen.add(m.lower())
                mod.append(m)
        out.append([r['t'], ' \u00b7 '.join(mod[:3]) or 'the section itself',
                    r['check'] or 'a checkpoint you mark yourself'])
    if terms and not any('word' in str(r[0]).lower() for r in out[1:]):
        out.append(['The words it uses precisely',
                    ' \u00b7 '.join(e for e, _a in terms[:6]),
                    'matching, at the end of cycle B'])
    return out


def assemble(n, idx, sec, tbls, figname, scm, pm, terms, seed, extra_mcq,
             secnav=None, figs=None, allt=None, allterms=None,
             extrafill=None, figname2=None):
    """One handout: a preview page, one or two cycles, and a close."""
    no, stitle = sec['no'], clean(sec['title'])
    flow = []
    covers = ['sec:%s' % no]
    derived = {}

    figs = figs or {}
    # A handout prints each extract once. Two practice items that work from
    # the same balance sheet get the balance sheet once, with both of them
    # under it; the first draft printed a thirty-nine row statement three
    # times in one handout, which cost four pages and taught nothing extra.
    printed = set()

    def key_of(rows):
        return (len(rows), ' | '.join(rows[0]))

    def emit_with_extract(items):
        """Group items by the extract they need, printing each extract once."""
        plain, byfig = [], {}
        for m in items:
            m2, pan = detach_figure(m, figs)
            if pan:
                byfig.setdefault(key_of(pan[2]), (pan, []))[1].append(m2 or m)
            else:
                plain.append(m2 or m)
        out = []
        if plain:
            out.append(('items', plain))
        for k, (pan, group) in byfig.items():
            if k not in printed:
                printed.add(k)
                out.append(pan)
            out.append(('items', group))
        return out
    # an item that needs a figure it cannot have is not asked at all
    def ok(m):
        if ITEMREF.search(m['q']):
            return False
        m2, _p = detach_figure(m, figs)
        return m2 is not None
    scm = [m for m in scm if ok(m)]
    pm = [m for m in pm if ok(m)]
    extra_mcq = [m for m in extra_mcq if not FIGREF.search(m['q'])]

    main = tbls[0] if tbls else None
    second = tbls[1] if len(tbls) > 1 else None

    # ---- page one is composed last, once the cycles are known
    blocks = []

    # ---- cycle A
    flow = blocks
    flow.append(('cycle', 'A', stitle))
    flow.append(('move', 'ORIENT',
                 'One claim. Decide now; you will check it in a moment.'))
    # The orienting claim and the first reading question used to be built
    # from the same cell, so the sheet asserted "Prepaid rent is an Asset"
    # and then asked "which category is Prepaid rent?" three lines later.
    # The orienting claim takes the last row; the reading move is told to
    # leave that row alone.
    orient, orientrow = None, None
    if main:
        _i, head, body = main
        for k in range(len(body) - 1, -1, -1):
            orient = tf_from_row(head, body, k, 1, seed + 5, truth=True)
            if orient:
                orientrow = k
                break
    flow.append(('items', [orient or dict(
        t='TF', q='Every number in a financial statement belongs to an '
                  'element the framework defines.', a='T',
        why='The framework defines the elements, and every amount belongs to '
            'one of them.')]))

    flow.append(('move', 'MODEL',
                 'Read it before you answer anything below it.'))
    if figname:
        flow.append(('fig', figname))
    if main:
        _i, head, body = main
        flow.append(('panel', clean(head[0]) + ' — the book’s own '
                     'table', [head] + body, ''))

    flow.append(('move', 'READ THE MODEL',
                 'Every answer is printed above. Find it, do not recall it.'))
    read = []
    if main:
        _i, head, body = main
        # Two cell-reading questions, not four. Four of them off one table
        # read as one question asked four times — "Which decision does the
        # book give for Investors?", then for Lenders, then for Suppliers —
        # and the student stops reading the stem by the third. So the two are
        # taken from different rows AND different columns, and the rest of
        # the move asks about the table as a whole instead.
        usedcol, usedrow = set(), set()
        if orientrow is not None:
            usedrow.add(orientrow)
        for k in range(len(body)):
            if len(usedrow) >= 2:
                break
            if k in usedrow:
                continue
            for ci in range(1, len(head)):
                if ci in usedcol:
                    continue
                m = mcq_from_col(head, body, k, ci, seed + 100 + 9 * k + ci) \
                    or mcq_from_row(head, body, k, ci, seed + 100 + k)
                if m:
                    read.append(m)
                    usedcol.add(ci)
                    usedrow.add(k)
                    break
        # One true/false at most, and only about a column neither question
        # above has already quoted.
        for ci in range(len(head) - 1, 0, -1):
            if ci in usedcol:
                continue
            k = next((x for x in range(len(body)) if x not in usedrow), 0)
            t = tf_from_row(head, body, k, ci, seed + 200 + k, truth=True)
            if t:
                read.append(t)
                break
        # These two read the table as a relation rather than as a grid of
        # cells, which is the reasoning the move is for.
        s = sort_from(head, body, seed + 11)
        if s:
            read.append(s)
        g = grid_from(head, body, seed + 12)
        if g:
            read.append(g)
    # Chapter numbering is the book's furniture, not its accounting. One
    # item locating the section is orientation; four of them is a quiz on
    # the table of contents. Only a section the book gave no table of its
    # own falls back this far.
    if not read and secnav:
        read = list(secnav[:1])
    if read:
        flow.append(('items', read))
    else:
        flow.append(('items', [dict(
            t='TF', q='A model on this sheet is there to be interrogated, '
                      'not memorised.', a='T',
            why='Every cycle asks you to read the model before it asks you '
                'to apply it.')]))

    # ---- invent the rule, which must be followed by contrasting cases
    termbank = [e for e, _a in (allterms or [])]
    ruleskip = set()
    rule = rule_from(sec['text'], [e for e, _a in terms] + termbank, seed + 13)
    if rule:
        ruleskip.add(rule['book'])
    con = contrast_from(*main[1:], seed=seed + 14) if main else None
    if rule and con:
        flow.append(('move', 'INVENT THE RULE', ''))
        flow.append(('rule', rule['lead'], rule['skeleton'], rule['words'],
                     rule['book'], rule['a']))
        flow.append(('contrast', con['title'], con['cases'], con['q'],
                     con['o'], con['a'], con['why']))

    flow.append(('move', 'APPLY', 'No help on this move.'))
    ap = by_interest(scm[2:4] + pm[:4])
    for m in ap:
        if m.get('src'):
            covers.append(('sc:' if m['src'].startswith('SC') else 'p:')
                          + m['src'])
    if not ap:
        # A true/false here is a coin flip, and the applying move is where
        # the student should be made to use the rule. So the fallback asks
        # about a row of the table the reading move did not put on the page.
        ap = list(scm[:1])
        if not ap and main:
            _i, head, body = main
            for k in range(len(body) - 1, -1, -1):
                if k in usedrow:
                    continue
                m = next((x for x in (
                    mcq_from_col(head, body, k, ci, seed + 300 + k + ci)
                    for ci in range(1, len(head))) if x), None)
                if m:
                    ap = [m]
                    break
        if not ap:
            ap = [dict(
                t='MCQ',
                q='You have just written the rule this cycle settles. What '
                  'decides whether your wording is right?',
                o=['the model printed earlier in this cycle',
                   'how confident you felt writing it',
                   'the length of the sentence you wrote',
                   'whichever wording your partner used'],
                a='A',
                why='Every rule on a Workshop sheet is settled by the model '
                    'printed on the same sheet.')]
    flow.extend(emit_with_extract(ap))
    flow.append(('pair', 'Compare every answer on this page with your '
                         'partner before you read any key.',
                 'go back to the model and find the row that settles it. The '
                 'row decides, not the louder voice.'))

    # The checkpoint is the last thing a student does in the cycle, so it
    # gets the item with a company in it if the chapter has one. It must be
    # an item the applying move did not already ask: scm[:2] and pm[:2]
    # overlap the applying pool, and the sheet was closing a cycle by
    # repeating the question it had just set.
    shownq = [m.get('q') or '' for b in flow if b[0] == 'items'
              for m in b[1]]
    chkpool = [m for m in by_interest(list(scm[:4]) + list(pm[:4]))
               if not any(near_copy(m.get('q') or '', q) for q in shownq)]
    chk = chkpool[0] if chkpool else None
    if chk:
        chk2, pan = detach_figure(chk, figs)
        if pan and key_of(pan[2]) not in printed:
            printed.add(key_of(pan[2]))
            flow.append(pan)
        chk = chk2 or chk
        flow.append(('check', chk['q'], chk['o'], chk['a'],
                     'redo the READ THE MODEL questions of cycle A with the '
                     'model in front of you.', chk['why']))
        covers.append('sc:' + chk.get('src', ''))
    else:
        flow.append(('check',
                     'Which of these did this cycle settle?',
                     ['the rule and where it comes from',
                      'nothing in particular', 'only the vocabulary',
                      'only the arithmetic'], 'A',
                     'redo the READ THE MODEL questions of cycle A.',
                     'Every cycle settles one rule and shows where it comes '
                     'from.'))

    # ---- cycle B: the glossary, or a second table
    flow.append(('cycle', 'B', 'The words this section uses precisely'))
    flow.append(('move', 'ORIENT', ''))
    flow.append(('items', [dict(
        t='TF', q='A term in the exam means exactly what the book defines it '
                  'to mean, whatever it means in ordinary English.', a='T',
        why='CMA questions use exact terms, and one word can change the '
            'answer.')]))
    flow.append(('move', 'MODEL', ''))
    if second:
        _i, h2, b2 = second
        # A table the student is asked four questions about deserves to be
        # drawn, not only tabulated. The figure comes before the table so
        # the shape is read first and the cells confirm it.
        if figname2:
            flow.append(('fig', figname2))
        flow.append(('panel', clean(h2[0]) + ' — the book’s own '
                     'table', [h2] + b2, ''))
    gloss = match_terms(terms, seed + 15, k=min(6, len(terms)))
    if terms:
        flow.append(('panel', 'The English the exam uses, and what it '
                     'translates',
                     [['English (exam term)', 'the Arabic it translates']]
                     + [[e, a] for e, a in terms], ''))
    flow.append(('move', 'READ THE MODEL', ''))
    bi = []
    if gloss:
        bi.append(gloss)
    if second:
        _i, h2, b2 = second
        for k in range(min(3, len(b2))):
            m = mcq_from_col(h2, b2, k, 1, seed + 300 + k) \
                or mcq_from_row(h2, b2, k, 1, seed + 300 + k)
            if m:
                bi.append(m)
    if not bi:
        bi = [dict(t='TF', q='A glossary term and its translation are a pair '
                             'the book itself gives.', a='T',
                   why='The term tables in each section are the '
                       'book’s own.')]
    flow.append(('items', bi))
    flow.append(('move', 'APPLY', ''))
    rest = scm[1:2] + pm[4:]
    for m in rest + scm[:2]:
        if m.get('src'):
            covers.append(('sc:' if m['src'].startswith('SC') else 'p:')
                          + m['src'])
    covers.extend('term:' + e.lower() for e, _a in terms)
    # A thin section — "Benefits and challenges" runs to a page of prose
    # — came out as a three-page sheet, which is half a session. What it
    # still has is the chapter's own item bank, so the applying move of the
    # closing cycle is topped up from there rather than the sheet ending
    # early. It goes into the existing move, not into a cycle of its own:
    # a cycle without a model is not a cycle.
    scored = sum(len(b[1]) for b in flow if b[0] == 'items')
    if scored < 11:
        shown = {id(m) for b in flow if b[0] == 'items' for m in b[1]}
        shown |= {id(m) for m in rest}
        more = by_interest(
            [m for m in (list(extra_mcq or []) + list(scm) + list(pm))
             if id(m) not in shown and m.get('t') == 'MCQ' and ok(m)])[:5]
        # The bank is divided between a chapter's sections, so the last one
        # of a thin chapter gets nothing from it. Its own table and glossary
        # are always there.
        if len(more) + scored < 11:
            seen = [m.get('q') or '' for b in flow if b[0] == 'items'
                    for m in b[1]] + [m.get('q') or '' for m in more]
            for m in topup(tbls, terms, seed + 77,
                           k=11 - scored - len(more)):
                if not any(near_copy(m.get('q') or '', q) for q in seen):
                    more.append(m)
                    seen.append(m.get('q') or '')
        rest = list(rest) + more
    if rest:
        flow.extend(emit_with_extract(rest))
    else:
        # The glossary itself supplies the applying item: given the Arabic,
        # produce the English the exam will mark. A true/false claim about
        # exam technique applies nothing.
        apb = None
        pool = [(clean(e), clean(a)) for e, a in terms if clean(e)
                and clean(a)]
        if len(pool) >= 4:
            e0, a0 = pool[0]
            others = near_in_length(e0, [x for x, _y in pool], 3)
            if others:
                o = shuffled([e0] + others, seed + 61)
                if exclusive(o):
                    apb = dict(
                        t='MCQ',
                        q='Which English term does the exam use for '
                          '“%s”?' % a0,
                        o=o, a='ABCD'[o.index(e0)],
                        why='The glossary on this page pairs “%s” '
                            'with %s.' % (a0, e0))
        flow.append(('items', [apb or dict(
            t='MCQ',
            q='A term on this page means what the book defines it to mean. '
              'What settles a disagreement about one?',
            o=['the glossary printed on this page',
               'what the word means in ordinary English',
               'the translation that sounds closest',
               'whichever reading makes the item easier'],
            a='A',
            why='CMA questions use exact terms, and the glossary on the '
                'page is what defines them here.')]))
    flow.append(('check',
                 'What is the safest way to settle a disagreement about an '
                 'answer on this sheet?',
                 ['find the row of the model that decides it',
                  'take the answer of whoever is more confident',
                  'leave it until the lecturer says',
                  'choose the longer option'], 'A',
                 'redo the READ THE MODEL questions of cycle B.',
                 'Every item on a Workshop sheet is settled by something '
                 'printed on the same sheet.'))

    # ---- close
    if figname:
        flow.append(('build', figname,
                     'Rebuild the figure from this handout. Label every part '
                     'and fill in every box.',
                     'Compare with the model earlier in this handout.'))
    flow.append(('teach', 'a classmate who missed this session',
                 'In three or four sentences, write what this section '
                 'settles and the one rule a reader has to take away.',
                 [clean(e) for e, _a in terms[:4]] or ['element', 'rule'],
                 clean(sec['text'].split('\n')[1] if '\n' in sec['text']
                       else sec['text'])[:360]))

    # No item repeats one of its neighbours; the run is cut before page one
    # is composed, so the route map describes what actually survived.
    blocks[:] = deduped(blocks)

    # ---- page one, composed from the handout it introduces
    labels = ['Where the section starts \u2014',
              'What it settles in the middle \u2014',
              'Where it ends \u2014']
    fills = summary_fills(sec['text'], [e for e, _a in terms] + termbank,
                          seed + 21, k=3, labels=labels)
    # A section too thin for three passages of prose still has the table
    # the handout is built on, and a summary of that table previews the
    # session better than a stray sentence does.
    for t in (main, second):
        if len(fills) >= 3:
            break
        ts = table_summary(t, seed + 31 + len(fills),
                           label=labels[len(fills)])
        if ts:
            fills.append(ts)
    if len(fills) < 3:
        # The fallback owes the same rule the summaries do: a passage that
        # opens on "They are financial capital, ..." hangs off a sentence
        # the page never prints.
        fills += [f for f in cloze_items(
            sec['text'], [e for e, _a in terms] + termbank, seed + 21,
            k=6, skip=ruleskip)
            if not DANGLING.match(''.join(
                x for x in f.get('parts', []) if isinstance(x, str)).strip())
        ][:3 - len(fills)]
    # The spare pool is the last resort of all, and it owes the dangler
    # rule like every other source of a preview passage.
    while len(fills) < 3 and extrafill:
        f = extrafill.pop(0)
        if not DANGLING.match(''.join(
                x for x in f.get('parts', []) if isinstance(x, str)).strip()):
            fills.append(f)
    # Whichever source filled a slot — a summary, the table, the spare pool
    # — the three carry the labels that say where in the section they come
    # from. A slot filled from a fallback used to arrive bare, so the sheet
    # showed two labelled summaries and one unlabelled gap-fill.
    for j, f in enumerate(fills[:3]):
        if not f['q'].startswith(tuple(labels)):
            f['q'] = labels[j] + ' ' + f['q'].split('\u2014 ', 1)[-1]
    page1 = [('preview', 'Before you start',
              'Three summaries of this handout, in the book\u2019s own '
              'words. Read all three first: together they are the whole '
              'session. Then fill the gaps, guessing where you have to.',
              routemap(blocks, terms), fills[:3],
              [('Words this handout uses precisely', watchwords(terms)),
               ('How every cycle on this sheet works', HOWITWORKS)]),
             ('page',)]
    return dict(id='%d.%d' % (n, idx), n=idx, pages=0,
                title=stitle, sub='section %s of the book' % no,
                covers=covers, skills=[('read%d' % idx, 3)],
                derived=derived, flow=page1 + blocks)


def caseask(x):
    """What a case item asks for, without the pointer to its exhibit.

    The book opens some case items with "Use Figure F12-05." That is where to
    look, not what is being asked, and quoting it into an option puts a
    pointer to something the handout does not reprint.
    """
    t = clean(x)
    t = re.sub(r'^Use\s+Figure\s+F\d\d-\d\d[^.]*\.\s*', '', t)
    return FIGREF.sub('the chapter\u2019s exhibit', t)


def review_handout(n, idx, d, ans, pm, case, terms, seed, figs=None,
                   revfig=None,
                   navitems=None):
    """The last handout: the case set, and the rest of the practice bank."""
    flow = []
    covers = ['sec:summary']
    for m in pm:
        if m.get('src'):
            covers.append(('sc:' if m['src'].startswith('SC') else 'p:')
                          + m['src'])
    covers.extend('term:' + e.lower() for e, _a in terms)
    pv = summary_fills(
        ' '.join(x['text'] for x in d['sections']),
        [e for e, _a in terms], seed + 44, k=3,
        labels=['Where the chapter starts \u2014',
                'What it settles in the middle \u2014',
                'Where it ends \u2014'])
    if len(pv) < 3:
        pv += cloze_items(' '.join(x['text'] for x in d['sections']),
                          [e for e, _a in terms], seed + 44, k=3 - len(pv))
    blocks = []
    flow = blocks
    flow.append(('cycle', 'A', 'The whole chapter, in order'))
    flow.append(('move', 'ORIENT', ''))
    flow.append(('items', [dict(
        t='TF', q='The sections of a chapter have to be taken in order, '
                  'because each one uses what the one before it settled.',
        a='T',
        why='The map shows the order the decisions have to be taken in.')]))
    flow.append(('move', 'MODEL', ''))
    flow.append(('fig', 'chmap'))
    # A seven-page review sheet owes a model every three pages, and the
    # chapter map plus the case panel are only two. The chapter's own first
    # table is the third, drawn rather than tabulated.
    if revfig:
        flow.append(('fig', revfig))
    flow.append(('move', 'READ THE MODEL', ''))
    secs = [(clean(s['no']), clean(s['title'])) for s in d['sections']]
    opts = [t for _no, t in secs][:4]
    ritems = []
    for k, (no, t) in enumerate(secs[:1]):
        others = near_in_length(t, [y for _n, y in secs], 3)
        if not others:
            continue
        o = shuffled([t] + others, seed + k)
        ritems.append(dict(t='MCQ',
                           q='Which part of this chapter is section %s?' % no,
                           o=o, a='ABCD'[o.index(t)],
                           why='The book numbers “%s” as section %s.'
                               % (t, no)))
    ritems.append(dict(
        t='MATCH',
        q='Write the letter of the section number beside each section title. '
          'Every number is used once.',
        left=[t for _n, t in secs], right=[no for no, _t in secs],
        a=['ABCDEF'[i] for i in range(len(secs))],
        whys=['' for _ in secs]))
    flow.append(('items', ritems))
    flow.append(('move', 'APPLY', ''))
    for m in (pm[4:10] or pm[:4]):
        m2, pan = detach_figure(m, figs or {})
        if pan:
            flow.append(pan)
        flow.append(('items', [m2 or m]))
    flow.append(('pair', 'Compare every answer with your partner first.',
                 'name the section each question belongs to. Most '
                 'disagreements turn out to be about the section, not the '
                 'answer.'))
    chk = pm[0] if pm else None
    if chk:
        # The checkpoint is page text, so it needs its extract beside it just
        # as the APPLY items do; without this it quoted a figure number the
        # sheet never prints, and the route map on page one copied it.
        chk2, pan = detach_figure(chk, figs or {})
        if pan:
            flow.append(pan)
        chk = chk2 or chk
        flow.append(('check', chk['q'], chk['o'], chk['a'],
                     'go back to the MODEL move of cycle A and find the '
                     'section this question belongs to.', chk['why']))
    else:
        flow.append(('check', 'Which part of the chapter does a question '
                              'about definitions belong to?',
                     [secs[0][1], secs[-1][1], 'none of them', 'all of them'],
                     'A', 'go back to the MODEL move of cycle A.',
                     'The first section settles the vocabulary.'))

    # ---- cycle B: the book's own case set
    flow.append(('cycle', 'B', 'The chapter’s case set'))
    flow.append(('move', 'ORIENT', ''))
    flow.append(('items', [dict(
        t='TF', q='In a case question, the exhibit has to be read and '
                  'adjusted before any figure is worked out.', a='T',
        why='Every later answer depends on the adjusted exhibit.')]))
    flow.append(('move', 'MODEL', ''))
    crows = [['Item', 'What it asks']] + [[clean(c[0]), caseask(c[1])[:120]]
                                          for c in case[:6]]
    flow.append(('panel', 'The chapter’s case set, item by item', crows,
                 ''))
    flow.append(('move', 'READ THE MODEL', ''))
    # This used to be one MCQ per case task — "Which of these does item
    # C1-1 ask for?", then C1-2, then C1-3 — six near-identical questions
    # about the wording of a question, naming an item number that means
    # nothing on a handout. The book gives no answers for its case tasks,
    # so the one thing that can be asked in closed form is the thing a case
    # set actually teaches: the tasks have an order, because each uses the
    # result of the one before it, and the book's own numbering is that
    # order.
    citems = []
    tasks = [(clean(c[0]), caseask(c[1])) for c in case[:6]]
    tasks = [(cid, t) for cid, t in tasks if t and len(t) <= 120]
    if len(tasks) >= 3:
        order = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth']
        pos = order[:len(tasks)]
        left = shuffled([t for _c, t in tasks], seed + 500)
        citems.append(dict(
            t='MATCH',
            q='The tasks of a case set have to be worked in one order, '
              'because each one uses the result of the one before it. Write '
              'the letter of its place beside each task.',
            left=left, right=pos,
            a=['ABCDEF'[[t for _c, t in tasks].index(x)] for x in left],
            whys=['' for _ in left]))
    # Every task of the case is printed in the panel above, so the chapter's
    # coverage closes on all of them, not only on the ones short enough to
    # fit the matching item.
    for c in case:
        covers.append('case:%s' % clean(c[0]))
    flow.append(('items', citems or [dict(
        t='TF', q='Every item of a case set is answered from the same '
                  'exhibit.', a='T',
        why='A case gives one exhibit and then several items of different '
            'types.')]))
    flow.append(('move', 'APPLY', ''))
    for m in (pm[10:14] or pm[:2]):
        m2, pan = detach_figure(m, figs or {})
        if pan:
            flow.append(pan)
        flow.append(('items', [m2 or m]))
    flow.append(('check',
                 'What has to be settled before any figure in a case set is '
                 'worked out?',
                 ['the exhibit, adjusted for every note that goes with it',
                  'the method the company uses',
                  'the tax rate', 'the order of the items'], 'A',
                 'reread the case panel in the MODEL move of cycle B.',
                 'Every later answer depends on the adjusted exhibit.'))
    flow.append(('build', 'chmap',
                 'Rebuild the chapter map. Write every section in order and '
                 'what each one settles.',
                 'Compare with the model earlier in this handout.'))
    flow.append(('teach', 'a student starting this chapter tomorrow',
                 'In four or five sentences, write what the whole chapter '
                 'settles, section by section.',
                 [clean(e) for e, _a in terms[:4]] or ['element', 'rule'],
                 ' '.join('%s: %s.' % (no, t) for no, t in secs)))
    # The review sheet builds its own flow, and it was the one sheet that
    # never went through the dedupe and the per-item normaliser — so every
    # near-copy and unpunctuated stem left in Book 1 was on a review sheet.
    blocks[:] = deduped(blocks)
    return dict(id='%d.%d' % (n, idx), n=idx, pages=0,
                title='The whole chapter', sub='every section, shuffled, and '
                'the chapter’s own case set',
                covers=covers, skills=[('review', 0)], derived={},
                flow=[('preview', 'Before you start',
                       'Three summaries of this chapter, in the book’s '
                       'own words, with words taken out. Read all three '
                       'first: together they are the whole chapter. Then '
                       'fill the gaps.',
                       routemap(blocks, terms), pv[:3]),
                      ('page',)] + blocks)


def secnav(d, seed):
    """Items about which section settles what, for a section the book gave
    no table of its own. Every option is another section of this chapter."""
    secs = [(clean(x['no']), clean(x['title'])) for x in d['sections']]
    out = []
    for k, (no, t) in enumerate(secs):
        # Pick the titles closest in length, so the longest option is not
        # automatically the right one.
        others = near_in_length(t, [y for _n, y in secs], 3)
        if not others:
            continue
        o = shuffled([t] + others, seed + k)
        out.append(dict(t='MCQ',
                        q='Which part of this chapter is section %s?' % no,
                        o=o, a='ABCD'[o.index(t)],
                        why='The book numbers \u201c%s\u201d as section %s.'
                            % (t, no)))
    return out


def build_chapter(bk, n, hand_figs=None, seed=None):
    """Generate a chapter's handouts and its figure module."""
    seed = seed if seed is not None else n * 977
    d = PB.parse(n, bk)
    ans = d['answers']
    terms = [(clean(e), clean(a)) for e, a in PB.term_pairs(n)]

    sc_by = {}
    for it in d['sc']:
        m = re.match(r'SC(\d+)-(\d+)', it['id'])
        if not m:
            continue
        g = m.group(1)
        k = int(g[-1]) if len(g) > 1 and n >= 10 else int(g) % 10
        sc_by.setdefault(k if k else 1, []).append(it)

    alloc = allocate_tables(d)
    ftabs = figtables(bk, n)
    omit = {}

    def usable_item(m, kind):
        """An item the book wrote that a Workshop page can still carry."""
        if ITEMREF.search(m['q']):
            omit['%s:%s' % (kind, m['src'])] = (
                'the stem works from the facts of another numbered item, so '
                'it cannot be answered from its own page')
            return False
        ref = FIGREF.search(m['q'])
        if ref and not ftabs.get(ref.group(1)):
            omit['%s:%s' % (kind, m['src'])] = (
                'the stem is answered from a figure whose data the book '
                'prints as a picture rather than as a table')
            return False
        return True
    allcat = [t for s in d['sections'] for t in alloc[s['no']]]
    # A section that cannot give three sentences of its own borrows from the
    # chapter's opening, which is where the book states its headline rules.
    spare_fill = cloze_items(
        ' '.join(x['text'] for x in d['sections']),
        [e for e, _a in terms], seed + 99, k=8)
    pbank = [m for m in (mcq_from_bank(it, ans, None)
                         for it in d['p']) if m]
    pbank = [m for m in pbank if usable_item(m, 'p')]
    # The chapter's problem bank is dealt out to its sections in order, and
    # the items that name a running company are not spread evenly through
    # it, so some handouts used to get none and the student went through a
    # whole session without once facing a company deciding something. The
    # situated items are therefore set aside first and dealt one per
    # handout; the rest of each handout's share comes from the bank in
    # order as before.
    situated = [m for m in pbank if caseful(m)]
    pbank = [m for m in pbank if not caseful(m)]
    specs = []
    handouts = []
    used_sc = set()
    for si, sec in enumerate(d['sections']):
        idx = si + 1
        tbls = alloc[sec['no']]
        figname = None
        if hand_figs and si < len(hand_figs):
            figname = hand_figs[si]
        else:
            got = pick_fig(tbls[0][1], tbls[0][2], idx) if tbls else None
            if not got:
                got = ('chaptermap', dict(
                    title='Where this section sits',
                    nodes=[(clean(x['title']),
                            ('you are here \u00b7 section %s' % clean(x['no']))
                            if x['no'] == sec['no']
                            else 'section %s' % clean(x['no']))
                           for x in d['sections']],
                    sub='each section uses what the one before it settled'))
            figname = 'f%d' % idx
            specs.append((figname, got))
        # The second table of a section carries its own cycle, so it gets
        # its own figure wherever its shape allows one.
        figname2 = None
        if len(tbls) > 1:
            got2 = pick_fig(tbls[1][1], tbls[1][2], idx)
            if got2:
                figname2 = 'f%db' % idx
                specs.append((figname2, got2))
        scm = [m for m in (mcq_from_bank(it, ans, None)
                           for it in sc_by.get(idx, [])) if m]
        take = pbank[:6]
        del pbank[:6]
        # One per handout, at the front of the applying move. This used to
        # be skipped when the section's own check items already held a
        # situated one, but assemble drops any item that needs a figure it
        # cannot print, so the situated item counted here was sometimes not
        # the one that reached the page. The pool has the stock for one
        # each, so the reservation is unconditional.
        if situated:
            # The item the situated one displaces goes back on the bank
            # rather than out of the chapter: every bank item has to be
            # claimed by some handout.
            take, spill = [situated.pop(0)] + take[:5], take[5:]
            pbank[0:0] = spill
        extra = pbank[:2]
        tslice = terms[si::len(d['sections'])]
        used_sc.update(m['src'] for m in scm[:4] if m.get('src'))
        handouts.append(assemble(n, idx, sec, tbls, figname, scm, take,
                                 tslice, seed + si * 31, extra,
                                 secnav(d, seed), ftabs, allcat, terms,
                                 list(spare_fill), figname2))
    allsc = [m for m in (mcq_from_bank(it, ans, None) for it in d['sc']) if m]
    allsc = [m for m in allsc if usable_item(m, 'sc')]
    leftover = [m for m in allsc if m.get('src') not in used_sc]
    # Any situated item no handout needed is still part of the chapter, so
    # it closes in the review sheet with everything else left over.
    pbank += situated
    # Anything in the book's own banks that no section handout used lands
    # here, so the chapter's coverage closes.
    # The review sheet is the longest in a chapter, so it owes a third
    # model. The chapter's own first table, drawn, is it.
    revfig = None
    revgot = pick_fig(allcat[0][1], allcat[0][2], 0) if allcat else None
    if revgot:
        revfig = 'frev'
        specs.append((revfig, revgot))
    handouts.append(review_handout(n, len(handouts) + 1, d, ans,
                                   pbank + leftover, d['case'], terms,
                                   seed + 7, ftabs, revfig,
                                   secnav(d, seed)))
    chapmap = dict(title='Chapter %d at a glance' % n,
                   nodes=[(clean(s['title']), 'section %s' % clean(s['no']))
                          for s in d['sections']],
                   note='Every section uses what the one before it settled.')
    return handouts, specs, chapmap, omit


def write_package(bk, n, handouts, specs, chapmap, omit=None, figmod=None,
                  hand=None):
    pkg = os.path.join(HERE, 'w%d_ch%02d' % (bk, n))
    # Refuse to write over a package that was not written by this generator.
    # An earlier run of the first-generation converter overwrote twelve
    # hand-written handouts and deleted five files outright; only git had
    # them. A generated package says so in its __init__.
    init = os.path.join(pkg, '__init__.py')
    if os.path.exists(init):
        if 'GENERATED = True' not in open(init, encoding='utf-8').read():
            raise SystemExit('refusing to overwrite %s: it is hand-written, '
                             'not generated' % os.path.relpath(pkg, HERE))
    if not os.path.isdir(pkg):
        os.makedirs(pkg)
    d = PB.parse(n, bk)
    title = clean(d['title'])
    if not figmod:
        write_figs(pkg, n, specs, chapmap, hand)
        figmod = 'w%d_ch%02d.figs' % (bk, n)
    init = ['# -*- coding: utf-8 -*-',
            '"""Book %d chapter %d as Workshop handouts, generated by wsgen.'
            % (bk, n), '',
            'Every item here is multiple choice, true/false, matching,',
            'sorting or a table to complete. The chapter\'s own section',
            'checks and practice items supply the stems, the options and a',
            'reason for every wrong answer; the chapter\'s own tables supply',
            'the rest, so no distractor is invented and no stem points at',
            'anything that is not printed beside it.',
            '"""',
            'WORKSHOP = True', 'GENERATED = True',
            'BK = %d' % bk, "CH = '%d'" % n,
            "BOOK = 'CMA Part 1 \\u00b7 Book %d \\u00b7 Financial Reporting'"
            % bk,
            "TITLE = 'CMA Part 1 \\u00b7 Book %d \\u00b7 Chapter %d'" % (bk, n),
            'SUB = %r' % title,
            'FIGS = %r' % figmod,
            'HANDOUTS = %r' % [h['n'] for h in handouts],
            "OUT_H = 'CMA_W_B%d_Ch%02d_Handouts.docx'" % (bk, n),
            "OUT_K = 'CMA_W_B%d_Ch%02d_AnswerKeys.docx'" % (bk, n),
            "SOURCE = 'src/b%d_ch%02d.txt'" % (bk, n),
            'OMIT = %r' % (omit or {}), '']
    open(os.path.join(pkg, '__init__.py'), 'w', encoding='utf-8').write(
        '\n'.join(init))
    import pprint
    for h in handouts:
        body = ['# -*- coding: utf-8 -*-',
                '"""Handout %s, generated by wsgen. Do not edit by hand."""'
                % h['id'], '',
                'HANDOUT = ' + pprint.pformat(h, width=78, sort_dicts=False),
                '']
        open(os.path.join(pkg, 'h%02d.py' % h['n']), 'w',
             encoding='utf-8').write('\n'.join(body))
    return pkg
