# -*- coding: utf-8 -*-
"""A second set of passes over handouts that already build and already pass.

wssum.check guards what construction cannot guarantee while a sheet is
being made. This is the other half: it reads the finished sheet the way a
student will, and asks eighteen separate questions about it. The two sets
overlap deliberately in one place only -- coverage -- because coverage is
the claim everything else rests on, and a claim that important is worth
proving twice from different directions.

Every pass here can fail, and several of them did the first time they ran.
A pass that cannot fail is documentation, not a check.

    python3 wssumaudit.py 1          # one chapter
    python3 wssumaudit.py           # the whole book
"""
from __future__ import print_function

import collections
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import wsart as A                  # noqa: E402
import wssum as S                  # noqa: E402
import wsvis as V                  # noqa: E402
from wssum import clean            # noqa: E402

# "réserves", "dépréciation", "report à nouveau": the chapter teaches the
# French false friends, and the handouts are for students who do not read
# French. A standing instruction, so a pass of its own.
FRENCH = re.compile(u'[àâçèéêîô'
                    u'ùûœ]')
ARAB = re.compile(u'[؀-ۿ]')
SELFREF = re.compile(r'\b(Figure|Table|Exhibit)\s+[A-Z]?\d|'
                     r'\b(?:see|shown)\s+(?:above|below|earlier)\b|'
                     r'\bChapter\s+\d+\s+(?:shows|showed|introduced|gives|'
                     r'explains|explained)\b|\bthis (?:book|chapter'
                     r'|textbook)\b', re.I)
JUNK = re.compile(r'^(Answers and explanations|SC\d|Figure F\d|'
                  r'English \(exam term\)|TERM BRIDGE|EXAM TRAP|'
                  r'WORKED EXAMPLE|FALSE-FRIEND|SECTION CHECK)', re.I)
STEMS = ('s', 'es', 'ed', 'ing', 'ly', 'ies', "'s", 'd')


def _stem(w):
    w = w.lower().strip(' .,;:')
    for suf in sorted(STEMS, key=len, reverse=True):
        if len(w) > len(suf) + 3 and w.endswith(suf):
            return w[:-len(suf)]
    return w


def _confusable(a, b, grid=False):
    a, b = clean(a).lower(), clean(b).lower()
    if a == b:
        return True
    if grid:
        # In a grid the row names its own item, so "Asset" against
        # "Contra-asset" is the classification the sheet teaches. Only a
        # genuine sub-phrase is ambiguous.
        return (S.inside(a, b) or S.inside(b, a)
                or S.prefixed(a, b) or S.prefixed(b, a))
    if len(a) > 4 and len(b) > 4 and (a in b or b in a):
        return True
    return _stem(a) == _stem(b) and len(a) > 4


def _text_of(b):
    """Everything a reader reads in this block, as one string."""
    if b['kind'] == 'prose':
        return ' '.join([x for x in b.get('parts', []) if not
                         isinstance(x, int)]) + ' ' + ' '.join(b.get('carry', []))
    if b['kind'] == 'plain':
        return b.get('text', '')
    if b['kind'] in ('table', 'ref'):
        rows = [b.get('head', [])] + list(b.get('rows', []))
        return ' '.join(clean(c) for r in rows for c in r
                        if not isinstance(c, int))
    if b['kind'] == 'divider':
        return b.get('title', '')
    return ' '.join([b.get('title', ''), b.get('note', '')]
                    + list(b.get('_cells', []) or []))


def _answers(b):
    return list(b.get('answers', []) or [])


def _bank(b):
    return list(b.get('bank', []) or [])


# --------------------------------------------------------------- the passes
def p01_coverage(ch, say):
    """1. Every sentence of every section is on its sheet exactly once."""
    for H in ch:
        sec = H['_sec']
        want = S.prose_sents(sec['text'],
                              S.cell_sents(S.raw_cells(H['_doc'], sec)))
        # What the sheet is allowed to leave out is what wssum itself
        # drops, so the generator's own rule is the one applied here:
        # a stricter pattern of its own reported three sentences missing
        # that wssum had correctly thrown away as references to the book.
        want = [x for x in want if not S.SELFREF.search(x)
                and not JUNK.match(x) and not S.FURNITURE.match(x)]
        pool = []
        for b in H['blocks']:
            pool.append(_text_of(b))
            pool.extend(b.get('_sents', []) or [])
            pool.append(' '.join(_answers(b)))
        blob = clean(' '.join(pool))
        for sent in want:
            core = clean(sent).rstrip('.')
            # A gapped sentence is on the sheet with holes in it, so the
            # test is whether its longest words are, in order.
            words = [w for w in re.findall(r"[A-Za-z][A-Za-z\-']{4,}", core)
                     if w.lower() not in V.WG.STOP]
            key = sorted(set(words), key=lambda x: (-len(x), x))[:4]
            miss = [w for w in key if not re.search(
                r'\b%s' % re.escape(w[:max(5, len(w) - 2)]), blob, re.I)]
            if len(key) >= 2 and len(miss) >= 2:
                say('%s sentence not on the sheet: %s' % (H['id'], core[:72]))


def p02_bank(ch, say):
    """2. Every answer is in its own word list, exactly once and alone."""
    for H in ch:
        for b in H['blocks']:
            ans, bank = _answers(b), _bank(b)
            if not ans:
                continue
            low = [x.lower() for x in bank]
            for a in ans:
                if a.lower() not in low:
                    say('%s %s: answer not in its word list: %r'
                        % (H['id'], b['kind'], a[:40]))
                elif low.count(a.lower()) > 1:
                    say('%s %s: answer twice in its word list: %r'
                        % (H['id'], b['kind'], a[:40]))
            grid = b['kind'] in ('table', 'ref')
            for i, a in enumerate(ans):
                for c in ans[i + 1:]:
                    if _confusable(a, c, grid):
                        say('%s %s: two answers a reader cannot tell apart: '
                            '%r / %r' % (H['id'], b['kind'], a[:30], c[:30]))


def p03_numbering(ch, say):
    """3. The gaps run 1..N down the sheet, each number used once."""
    for H in ch:
        k = 1
        for b in H['blocks']:
            ans = _answers(b)
            if not ans:
                continue
            if b.get('_first') != k:
                say('%s %s: numbered from %r, should be %d'
                    % (H['id'], b['kind'], b.get('_first'), k))
            k += len(ans)
        if k - 1 != int(H['gaps']):
            say('%s: %d gaps counted, header says %s'
                % (H['id'], k - 1, H['gaps']))


def p04_key(ch, say):
    """4. The answer key has one line per gap and nothing else."""
    for H in ch:
        keyed = []
        for b in H['blocks']:
            keyed.extend(_answers(b))
        if len(keyed) != int(H['gaps']):
            say('%s: key has %d answers for %s gaps'
                % (H['id'], len(keyed), H['gaps']))
        for i, a in enumerate(keyed):
            if not clean(a):
                say('%s: gap %d has no answer' % (H['id'], i + 1))


def p05_distractor(ch, say):
    """5. Every word list offers at least one word that is not an answer."""
    for H in ch:
        for b in H['blocks']:
            ans, bank = _answers(b), _bank(b)
            if not ans:
                continue
            low = set(x.lower() for x in ans)
            extra = [x for x in bank if x.lower() not in low]
            if not extra:
                say('%s %s: word list is exactly the answers, so the last '
                    'gap is free' % (H['id'], b['kind']))
            if len(extra) > max(3, len(ans)):
                say('%s %s: %d spare words against %d answers'
                    % (H['id'], b['kind'], len(extra), len(ans)))


def p06_density(ch, say):
    """6. No block so dense, so long or so empty that it stops working."""
    for H in ch:
        for b in H['blocks']:
            if b['kind'] != 'prose':
                continue
            txt = _text_of(b)
            n = len(txt.split())
            g = len(_answers(b))
            if g and n / float(g) < 6:
                say('%s prose: %d gaps in %d words (one every %.1f)'
                    % (H['id'], g, n, n / float(g)))
            if n > 230:
                say('%s prose: %d words in one block' % (H['id'], n))
            if g < 2:
                say('%s prose: only %d gap(s)' % (H['id'], g))


def p07_opening(ch, say):
    """7. No block opens on a word with nothing in front of it to refer to."""
    for H in ch:
        prev = None
        for b in H['blocks']:
            if b['kind'] == 'prose':
                txt = clean(_text_of(b))
                if S.dangling(txt) and prev not in (
                        'divider', 'table', 'ref', 'fig', 'plain'):
                    say('%s prose opens mid-thought: %s'
                        % (H['id'], txt[:64]))
            prev = b['kind']


def p08_selfref(ch, say):
    """8. Nothing on the sheet sends the reader to a book he has not got."""
    for H in ch:
        for b in H['blocks']:
            for where, txt in (('text', _text_of(b)),
                               ('answer', ' '.join(_answers(b))),
                               ('word list', ' '.join(_bank(b)))):
                m = SELFREF.search(txt or '')
                if m:
                    say('%s %s %s refers to the book: %r'
                        % (H['id'], b['kind'], where, m.group(0)))


def p09_furniture(ch, say):
    """9. No caption, question number or box label leaked onto the sheet."""
    for H in ch:
        for b in H['blocks']:
            if b['kind'] in ('prose', 'plain'):
                for sent in S.split_sentences(clean(_text_of(b))):
                    if JUNK.match(sent):
                        say('%s %s: furniture on the sheet: %s'
                            % (H['id'], b['kind'], sent[:60]))
            for a in _answers(b) + _bank(b):
                if JUNK.match(clean(a)) or re.match(r'^[A-E][.)]$', clean(a)):
                    say('%s %s: furniture as a word: %r'
                        % (H['id'], b['kind'], a[:40]))


def p10_language(ch, say):
    """10. No French anywhere, and Arabic only in the term web."""
    for H in ch:
        for b in H['blocks']:
            blob = ' '.join([_text_of(b)] + _answers(b) + _bank(b))
            m = FRENCH.search(blob)
            if m:
                i = max(0, m.start() - 24)
                say('%s %s: French on the sheet: %r'
                    % (H['id'], b['kind'], blob[i:m.end() + 24]))
            if b['kind'] == 'fig' and b.get('form') == 'web':
                continue
            if ARAB.search(blob):
                say('%s %s: Arabic outside the term web' % (H['id'],
                                                            b['kind']))


def p11_figure(ch, say):
    """11. Every figure is a real image with real, distinct answers."""
    for H in ch:
        for b in H['blocks']:
            if b['kind'] != 'fig':
                continue
            if not b.get('png') or len(b['png']) < 900:
                say('%s %s: figure did not render' % (H['id'], b['form']))
            # The canvas renders at twice its logical width so the figure
            # is sharp in print, so 1520 is the normal number here.
            if not 400 <= b.get('w', 0) <= 1700:
                say('%s %s: figure %dpx wide' % (H['id'], b['form'],
                                                 b.get('w', 0)))
            ans = _answers(b)
            if not ans:
                say('%s %s: figure with nothing to fill in'
                    % (H['id'], b['form']))
            for a in ans:
                if not clean(a):
                    say('%s %s: figure gap with no answer'
                        % (H['id'], b['form']))
                elif len(clean(a)) > 70:
                    say('%s %s: figure answer %d characters long: %s'
                        % (H['id'], b['form'], len(clean(a)), a[:50]))


def p12_honesty(ch, say):
    """12. No figure drawn in a form its own content does not have.

    A flow with two stages is not a sequence; a tree whose every group
    holds one member says nothing about grouping; a bridge whose parts do
    not add to its total was misread. Each form carries a floor, and this
    is where the floors are enforced on the finished figure rather than on
    the data that went in.
    """
    floors = {'flow': 3, 'tree': 2, 'chart': 3, 'graph': 3, 'web': 3,
              'contrast': 2, 'sides': 2, 'panel': 2, 'branch': 1,
              'bridge': 3}

    for H in ch:
        for b in H['blocks']:
            if b['kind'] != 'fig':
                continue
            form = b.get('form')
            got = b.get('_items', 0)
            if form in floors and got < floors[form]:
                say('%s %s: too little content for the form (%d)'
                    % (H['id'], form, got))
            if form not in floors:
                say('%s: unknown form %r' % (H['id'], form))


def p13_legible(ch, say):
    """13. No figure taller than a page, and none of zero height."""
    for H in ch:
        for b in H['blocks']:
            if b['kind'] != 'fig':
                continue
            h, w = b.get('h', 0), b.get('w', 0)
            if h <= 0 or w <= 0:
                say('%s %s: figure has no size' % (H['id'], b['form']))
                continue
            if h > 1180:
                say('%s %s: figure %dpx tall, taller than a page'
                    % (H['id'], b['form'], h))


def p14_table(ch, say):
    """14. Every gapped grid is laid out so a reader can read it.

    The first column used to take the width and leave the rest in a
    ribbon. The floor and the ceiling are both checked, and so is the
    emptiness that made a column pointless.
    """
    for H in ch:
        for b in H['blocks']:
            if b['kind'] not in ('table', 'ref'):
                continue
            head = b.get('head', [])
            rows = [r for r in b.get('rows', [])]
            n = len(head)
            if n < 2:
                say('%s table: %d column(s)' % (H['id'], n))
                continue
            from wsdoc import widths_for
            cells = [[x if not isinstance(x, int) else '' for x in r]
                     for r in rows]
            wd = widths_for([head] + cells)
            if wd[0] > (58 if n <= 2 else 47):
                say('%s table: first column %.0f%% of the width across %d'
                    % (H['id'], wd[0], n))
            if min(wd) < 100.0 / n / 2.6:
                say('%s table: a column is only %.0f%% wide'
                    % (H['id'], min(wd)))
            for j in range(n):
                col = [clean(str(r[j])) for r in cells if j < len(r)]
                if col and not any(col):
                    say('%s table: column %d is empty' % (H['id'], j + 1))
            seen = set()
            for r in cells:
                k = tuple(clean(str(x)) for x in r)
                # Rows of a worksheet the chapter left blank are all the
                # same row, and that is the chapter's layout, not a
                # repetition on the sheet.
                if all(not x or S.BLANKCELL.match(x) for x in k):
                    continue
                if k in seen and any(k):
                    say('%s table: a row appears twice: %s'
                        % (H['id'], ' | '.join(k)[:60]))
                seen.add(k)


def p15_sequence(ch, say):
    """15. The sheet reads in the order the chapter wrote it."""
    for H in ch:
        last = -1
        for b in H['blocks']:
            pos = b.get('_pos')
            if pos is None:
                continue
            if pos < last:
                say('%s: a block is out of the chapter\'s order (%d after '
                    '%d)' % (H['id'], pos, last))
            last = pos


def p16_distinct(ch, say):
    """16. No figure and no gapped sentence repeated across the chapter."""
    figs, sents = {}, {}
    for H in ch:
        for b in H['blocks']:
            if b['kind'] == 'fig':
                k = (b['form'], tuple(sorted(_answers(b))))
                if k in figs and figs[k] != H['id']:
                    say('%s %s: the same figure as %s'
                        % (H['id'], b['form'], figs[k]))
                figs[k] = H['id']
            for s in (b.get('_sents', []) or []):
                k = clean(s)[:70]
                if k in sents and sents[k] != H['id']:
                    say('%s: a sentence also drawn on %s: %s'
                        % (H['id'], sents[k], k[:56]))
                sents[k] = H['id']


def p17_grounded(ch, say):
    """17. Every answer is a word the section itself uses.

    Nothing on these sheets may be invented: a reader who fills a gap with
    something the section never says has been taught something the book
    does not contain.
    """
    for H in ch:
        # Against the CHAPTER, not the section: the first sheet of every
        # chapter draws the chapter's own sections as a sequence, and a
        # word list offers the chapter's vocabulary as wrong answers on
        # purpose. Both are grounded in the book; neither is in the one
        # section. What this pass is for is invention, and invention would
        # not be in the chapter either.
        blob = clean(H['_chap']).lower()
        for b in H['blocks']:
            for a in _answers(b) + _bank(b):
                a = clean(a)
                if not a or ARAB.search(a):
                    continue
                head = a.lower()[:max(6, len(a) - 3)]
                if head and head not in blob:
                    say('%s %s: %r is not in the section'
                        % (H['id'], b['kind'], a[:44]))


def p18_size(ch, say):
    """18. Every sheet works its section as hard as the section allows.

    The floor is relative to the section, not fixed. A fixed floor of
    eighteen failed forty-seven sheets, and most of them were sections of
    four hundred words: a short section cannot carry a long sheet, and
    reporting that it does not is reporting the book rather than the
    handout. What a sheet CAN be held to is using what it has, so the
    floor is one gap per fourteen words of the section, capped at
    twenty-two.
    """
    for H in ch:
        g = int(H['gaps'])
        # Against the PROSE the section offers, not its raw length. The
        # raw length counts the question bank, the captions and the
        # glossary, none of which a summary sheet carries, so measuring
        # against it failed forty-seven sheets for the book's shape
        # rather than the handout's.
        nwords = sum(len(x.split()) for x in S.prose_sents(
            H['_sec']['text'],
            S.cell_sents(S.raw_cells(H['_doc'], H['_sec']))))
        nt = sum(1 for b in H['blocks'] if b['kind'] in ('table', 'ref'))
        floor = max(4, nwords // 14 + nt)
        if g < floor:
            say('%s: %d gaps from %d words of prose and %d grid(s) '
                '(wanted %d)' % (H['id'], g, nwords, nt, floor))
        if g > 110:
            say('%s: %d gaps on one sheet' % (H['id'], g))
        nfig = sum(1 for b in H['blocks'] if b['kind'] == 'fig')
        if nfig == 0:
            say('%s: no figure on the sheet' % H['id'], soft=True)


def p19_tables(ch, say):
    """19. Every data table of the section is on its sheet.

    This is the half of coverage the sentence pass cannot see. A table is
    not prose, so no sentence of it goes missing when the whole table
    does: the statement of changes in equity -- seven columns, because
    equity has six components and a total -- was dropped from the equity
    chapter's own sheet by a six-column limit, and every prose pass still
    read clean.
    """
    for H in ch:
        d = H['_doc']
        want = S.tables_in(d, H['_sec'])
        have = []
        for b in H['blocks']:
            if b['kind'] in ('table', 'ref'):
                have.append([clean(x) for x in b.get('head', [])])
            elif b['kind'] == 'fig' and b.get('_cells'):
                have.append([clean(x) for x in b['_cells']])
        for _i, head, body in want:
            key = [clean(x) for x in head]
            if not any(all(any(k[:20] in c for c in h) for k in key[:3])
                       for h in have):
                say('%s: a table of the section is not on the sheet: %s'
                    % (H['id'], ' | '.join(key)[:66]))


def p20_untouched(ch, say):
    """20. Nothing is printed whole that the reader could have worked on.

    This was a soft note saying some grids were unavoidable, and the note
    was wrong: of the 32 grids printed whole across the book, not one was
    unavoidable and not one was a blank worksheet. Among them were the
    chapter's own answer tables -- "Municipal bond interest | Permanent
    difference" -- so the sheet asked the question and printed the answer
    beside it. A grid the chapter itself left blank for the reader is the
    one honest case, and that is what this now allows.
    """
    for H in ch:
        for b in H['blocks']:
            if b['kind'] != 'ref':
                continue
            content = [clean(str(c)) for r in b.get('rows', [])
                       for c in list(r)[1:]]
            content = [c for c in content
                       if c and not S.BLANKCELL.match(c)]
            blank = [c for r in b.get('rows', []) for c in list(r)[1:]
                     if S.BLANKCELL.match(clean(str(c)))]
            if len(blank) >= len(content):
                continue        # the chapter's own worksheet, left blank
            # Or a grid that is arithmetic all the way down: "1,422,000 +
            # 133,800 = 1,555,800; - 142,200 = 1,413,600 liters". A number
            # is never gapped -- recalling one off a word list is a memory
            # trick -- so there is nothing here the rules allow to be
            # taken out, and demanding it is demanding the forbidden.
            words = [w for c in content
                     for w in re.findall(r"[A-Za-z][A-Za-z\-']{4,}", c)
                     if w.lower() not in V.WG.STOP]
            # Distinct words: both cells of the budget grid end on
            # "liters", and one word repeated is one candidate, which is
            # not enough to gap a grid with.
            if len(set(w.lower() for w in words)) < 2:
                continue
            say('%s: a grid printed whole, with %d cells of content: %s'
                % (H['id'], len(content), b.get('title', '')[:46]))


def p21_guessable(ch, say):
    """21. No gap a reader can fill without knowing the answer.

    Two ways that happens, and both are visible from the sheet alone.

    The answer is printed somewhere else in the same block, ungapped, so
    the reader copies it across instead of recalling it. Prose is already
    safe -- a word that appears twice in a block is never gapped -- but a
    grid and a figure were not, and a grid is exactly where it happens: a
    classification that appears in one row's slot and in another row's
    text.

    Or the word list gives itself away by shape. A list of four phrases of
    three or four words each, with one single word among them, is a list
    whose wrong answer can be struck out without reading anything.
    """
    def visible(txt, a):
        return txt and re.search(r'(?<![\w-])%s(?![\w-])' % re.escape(a),
                                 txt, re.I)

    for H in ch:
        for b in H['blocks']:
            ans = _answers(b)
            if not ans:
                continue
            # Where the reader can see the answer WITHOUT having worked it
            # out. In a grid that is this row and the headings, not the
            # whole table: a classification table prints "Asset" against
            # four different items, and seeing it on another row says
            # nothing about whether THIS row is one. In the same row, or
            # in the column heading, it says everything.
            k = 0
            if b['kind'] == 'table':
                head = ' '.join(clean(x) for x in b.get('head', []))
                title = clean(b.get('title', ''))
                for r in b.get('rows', []):
                    rest = ' '.join(clean(str(c)).replace(S.MARK, ' ')
                                    for c in r)
                    holes = sum(1 for c in r
                                if str(c) == '' or S.MARK in str(c))
                    for a in ans[k:k + holes]:
                        a = clean(a)
                        if len(a) < 5:
                            continue
                        for where, txt in (('row', rest),
                                           ('heading', head + ' ' + title)):
                            if visible(txt, a):
                                say('%s table: the answer %r is printed in '
                                    'its own %s' % (H['id'], a[:40], where))
                    k += holes
            elif b['kind'] == 'prose':
                shown = ' '.join(x for x in b.get('parts', [])
                                 if not isinstance(x, int))
                for a in ans:
                    if len(clean(a)) >= 5 and visible(shown, clean(a)):
                        say('%s prose: the answer %r is printed in the same '
                            'block' % (H['id'], clean(a)[:40]))
            low = [x.lower() for x in ans]
            spare = [x for x in _bank(b) if x.lower() not in low]
            if not spare or len(ans) < 2:
                continue
            sizes = [len(x.split()) for x in ans]
            lo, hi = min(sizes), max(sizes)
            # The tolerance is proportional. A word either side is right
            # for answers of two or three words, where a fourth is
            # conspicuous; against answers of nine, a spare of seven is
            # not something a reader strikes out at a glance, and holding
            # it to eight was holding the sheet to a difference nobody
            # can see.
            slack = max(1, int(round(0.25 * hi)))
            for x in spare:
                if not lo - slack <= len(x.split()) <= hi + slack:
                    say('%s %s: the spare word %r is %d words against '
                        'answers of %d to %d, so it strikes out without '
                        'reading' % (H['id'], b['kind'], x[:34],
                                     len(x.split()), lo, hi))


def p22_roundtrip(ch, say):
    """22. Every gapped block, refilled from its own key, is what the book says.

    The sheet is the book with holes in it. That claim is only true if
    putting the answers back gives the book's own words, and between the
    source and the sheet the text passes through sentence splitting, gloss
    cutting, cross-reference cutting, gap insertion and -- for a grid --
    a marker substituted into a cell and taken out again. Any one of those
    can drop a word without any other pass noticing, because every other
    pass reads the sheet rather than comparing it to the source.
    """
    def norm(x):
        return re.sub(r'\s+', ' ', clean(str(x))).strip(' .').lower()

    for H in ch:
        for b in H['blocks']:
            ans = _answers(b)
            if not ans:
                continue
            if b['kind'] == 'prose':
                out, k = [], 0
                for part in b['parts']:
                    if isinstance(part, int):
                        if k >= len(ans):
                            say('%s prose: more gaps than answers' % H['id'])
                            break
                        out.append(ans[k])
                        k += 1
                    else:
                        out.append(part)
                else:
                    if k != len(ans):
                        say('%s prose: %d answers for %d gaps'
                            % (H['id'], len(ans), k))
                    if norm(''.join(out)) != norm(b.get('book', '')):
                        say('%s prose: refilled text is not the book\'s: %s'
                            % (H['id'], norm(''.join(out))[:64]))
                continue
            if b['kind'] != 'table':
                continue
            full = b.get('full') or []
            k, bad = 0, False
            for i, r in enumerate(b.get('rows', [])):
                for j, c in enumerate(list(r)):
                    c = str(c)
                    if c == '':
                        got, k = (ans[k] if k < len(ans) else ''), k + 1
                    elif S.MARK in c:
                        got = c.replace(S.MARK,
                                        ans[k] if k < len(ans) else '')
                        k += 1
                    else:
                        got = c
                    if i < len(full) and j < len(full[i]) \
                            and norm(got) != norm(full[i][j]):
                        bad = True
                        say('%s table: refilled cell is not the book\'s: '
                            '%r against %r'
                            % (H['id'], norm(got)[:40], norm(full[i][j])[:40]))
                if bad:
                    break
            if not bad and k != len(ans):
                say('%s table: %d answers used of %d' % (H['id'], k, len(ans)))


def p23_figurekey(ch, say):
    """23. Every numbered gap a figure draws is in the answer key.

    The one claim nothing else could check. A figure's gap numbers are
    drawn inside its image, so the key and the picture can disagree
    without any pass noticing: an answer recorded for a slot that was
    never drawn leaves a number in the key that is nowhere on the sheet,
    and a slot drawn without an answer leaves a reader filling in a blank
    the key cannot mark.
    """
    for H in ch:
        for b in H['blocks']:
            if b['kind'] != 'fig':
                continue
            want = list(range(b['_first'],
                              b['_first'] + len(_answers(b))))
            drawn = set(b.get('_nums') or [])
            missing = [k for k in want if k not in drawn]
            if missing:
                say('%s %s: the key numbers %s but the figure draws no '
                    'such slot' % (H['id'], b['form'], missing[:6]))


def p24_dropped(ch, say):
    """24. Every sentence the generator leaves out, it leaves out for a reason.

    Pass 1 proves that what the generator KEEPS reaches the sheet. This is
    the other half, and the half that can hide an omission: a sentence the
    generator quietly declines is gone from the handout and from every
    other pass, because every other pass reads the sheet. So each sentence
    of the source that does not reach prose_sents has to answer to one of
    the reasons the standard allows -- it is the chapter's furniture, its
    question bank, a caption, a pointer into the book, French, a glossary
    row, a cell of a table, or not a sentence at all. Anything else is
    content that fell out, and it is named here.
    """
    for H in ch:
        sec, d = H['_sec'], H['_doc']
        kept = set(S.prose_sents(sec['text'],
                                 S.cell_sents(S.raw_cells(d, sec))))
        # Every cell of every table the chapter puts here, not only the
        # ones the sheet prints: a sentence that is a cell is on the
        # sheet as a cell, which is where it belongs.
        cells = S.cell_sents(S.raw_cells(d, sec))
        stop = False
        for ln in sec['text'].split('\n'):
            line = clean(ln)
            if not line:
                continue
            if re.match(r'^(SECTION CHECK|Test yourself)', line, re.I):
                stop = True
            if stop or S.title_of(line, sec['no'], sec['title']):
                continue
            if re.match(r'^(%s)\b' % '|'.join(S.PB.BOXES), line):
                continue
            # A caption line is skipped WHOLE, as the generator skips it:
            # splitting it gives "Figure F03-03." and then the caption
            # itself, which no longer looks like a caption.
            if S.CAPLINE.match(line) or S.ITEMID.search(line):
                continue
            for x in S.split_sentences(line):
                x = clean(x)
                if not x or x in kept or S.unbooked(x) in kept:
                    continue
                if x.lower() in cells or line.lower() in cells:
                    continue
                if not x.endswith('.') or not x[0].isupper() or x.isupper():
                    continue                     # a label or a list item
                if len(x.split()) < 4:
                    continue                     # too short to be prose
                if S.CAPLINE.match(x) or S.FIGREF.search(x):
                    continue                     # a caption or a pointer
                if S.FURNITURE.match(x) or re.match(r'^[A-E][.)]\s', x):
                    continue
                if not S.english_only(x) or S.ARABIC.search(x):
                    continue
                if S.SELFREF.search(x) or not S.is_prose(S.unbooked(x)):
                    continue                     # a pointer into the book
                say('%s: a sentence of the section is on no sheet and has '
                    'no reason to be left out: %s' % (H['id'], x[:72]))


PASSES = [p01_coverage, p02_bank, p03_numbering, p04_key, p05_distractor,
          p06_density, p07_opening, p08_selfref, p09_furniture,
          p10_language, p11_figure, p12_honesty, p13_legible, p14_table,
          p15_sequence, p16_distinct, p17_grounded, p18_size,
          p19_tables, p20_untouched, p21_guessable,
          p22_roundtrip, p23_figurekey, p24_dropped]


def audit(bk=1, n=1, verbose=True):
    d = S.PB.parse(n, bk)
    ch = S.build_chapter(bk, n)
    # Every word of the chapter: its prose, its headings AND its tables.
    # The tables matter because a figure drawn from one answers in its
    # cells -- "Prepaid rent", "40,000 x 25% = 10,000" -- and a grounding
    # pass that reads only the prose calls every one of them invented.
    chap = ' '.join([x['title'] + ' ' + x['no'] + ' ' + x['text']
                     for x in d['sections']]
                    + [clean(c) for t in d['tables'] for r in t for c in r])
    for si, H in enumerate(ch):
        H['_sec'] = d['sections'][si]
        H['_chap'] = chap
        H['_doc'] = d
    hard, soft = [], []

    def run_pass(fn):
        found = []

        def say(msg, soft=False):
            found.append((soft, msg))
        fn(ch, say)
        return found

    for fn in PASSES:
        got = run_pass(fn)
        name = fn.__doc__.strip().split('\n')[0]
        h = [m for s, m in got if not s]
        sf = [m for s, m in got if s]
        hard.extend((name, m) for m in h)
        soft.extend((name, m) for m in sf)
        if verbose:
            mark = 'pass' if not h else 'FAIL %d' % len(h)
            print('  %-8s %s' % (mark, name))
            for m in h[:6]:
                print('           - %s' % m)
            if len(h) > 6:
                print('           - ... %d more' % (len(h) - 6))
            for m in sf[:4]:
                print('           ~ %s' % m)
    return hard, soft


def main(argv):
    # wsrun.py is the front door; this stays runnable on its own for one
    # book, and takes the book as the second argument rather than
    # assuming the one it was written against.
    import wsrun
    bk = int(argv[2]) if len(argv) > 2 else 1
    chs = [int(argv[1])] if len(argv) > 1 else wsrun.chapters(bk)
    allhard = []
    for n in chs:
        print('\nChapter %d' % n)
        # A chapter that cannot be built is the worst finding there is, so
        # it is reported as one rather than ending the run. A crash in
        # chapter 15 once left chapters 16 to 18 unaudited and the summary
        # line still said how many findings there were.
        try:
            hard, soft = audit(bk, n)
        except Exception as exc:
            print('  FAIL 1   0. The chapter builds at all.')
            print('           - %s: %s' % (type(exc).__name__, exc))
            allhard.append((n, 'builds', str(exc)))
            continue
        allhard.extend((n, a, b) for a, b in hard)
    print('\n%d finding(s) across %d chapter(s)' % (len(allhard), len(chs)))
    return 1 if allhard else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
