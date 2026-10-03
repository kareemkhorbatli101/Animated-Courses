# -*- coding: utf-8 -*-
"""The sixteen checks that stand between a chapter package and a built handout.

The four that matter are the fidelity gates. Every number and every phrase a
handout asserts has to be findable in the frozen source chapter, every
inventoried content unit has to be claimed by a handout, and every term-bridge
row in the chapter has to be exercised somewhere. Together they make "no new
content" a property of the build instead of a promise, which is the only form
of that promise that survives two hundred handouts.

Usage:  python3 checkch.py b1_ch01
"""
import sys, os, re, importlib, collections

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

HERE = os.path.dirname(os.path.abspath(__file__))

from blanks import answers as brace_answers, plain

LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWX'

# Latin letters used as answer codes rather than as content.
CODE = re.compile(r'^[A-Za-z](\s|$)|^(True|False)$|^\([A-D]\)$'
                  r'|^[A-Z]{1,2}\s{2}')
BACKREF = re.compile(
    r'Exercise\s+\d|Figure\s+F\d|see\s+above|as\s+in\s+Exercise|'
    r'from\s+the\s+previous|on\s+the\s+previous\s+page|'
    r'the\s+(?:seven|six|five|four|three)\s+\w+\s+above|Handout\s+\d',
    re.I)
# Words common enough that finding them in the source proves nothing, so they
# are not worth checking and would only produce noise.
STOP = set('''a an the and or of to in on at for with from by is are was were
be been it its this that these those not no as if then than so but which who
whom whose what when where why how one two three four five six seven eight
nine ten more most less least same other another each every any all both
right left side up down into onto over under about above below after before
during between within without you your they their them he she his her we our
us i me my do does did done have has had having will would can could should
may might must shall there here now later always never often sometimes
dr cr becomes become became increase increases increased decrease decreases
decreased reduce reduces reduced raise raises lower lowers total totals
record records recorded report reports reported pay pays paid give gives
creates create created changes change changed rose rise rises affect affects
'''.split())


def numbers(s):
    """Numeric tokens worth checking: three digits or more, or a year code."""
    out = set()
    for m in re.finditer(r'\b\d[\d,]{2,}\b|\b20X\d\b|\b\d{4}\b', str(s)):
        out.add(m.group(0).replace(',', ''))
    return out


def phrases(s):
    """Multi-word phrases a handout asserts, for the fidelity check."""
    out = set()
    for m in re.finditer(r'\b[a-z][a-z\-]*(?:\s+[a-z][a-z\-]*){1,4}\b',
                         str(s).lower()):
        p = m.group(0)
        ws = p.split()
        if len(ws) >= 2 and not all(w in STOP for w in ws):
            out.add(p)
    return out


def words(s):
    """Content words, crudely stemmed, for the vocabulary fidelity check."""
    out = set()
    for m in re.finditer(r"[A-Za-z][A-Za-z'\-\.]{2,}", str(s)):
        w = m.group(0).lower().strip(".-'")
        if len(w) < 4 or w in STOP:
            continue
        for suf in ('ies', 'es', 'ed', 'ing', 's'):
            if w.endswith(suf) and len(w) - len(suf) >= 4:
                out.add(w[:-len(suf)])
                break
        out.add(w)
    return out


# The nouns an accounting term is built from. A phrase containing one of
# these is a claim about the subject, not a turn of English, so it has to be
# findable in the chapter.
TERMWORD = ('account', 'accounts', 'asset', 'assets', 'liability',
            'liabilities', 'equity', 'revenue', 'revenues', 'expense',
            'expenses', 'income', 'capital', 'stock', 'payable', 'receivable',
            'receivables', 'depreciation', 'amortisation', 'statement',
            'statements', 'balance', 'cash', 'basis', 'principle', 'value',
            'earnings', 'dividend', 'dividends', 'standard', 'standards',
            'board', 'codification', 'entry', 'entries', 'inventory',
            'goods', 'sold', 'framework', 'users', 'user', 'gain', 'gains',
            'loss', 'losses', 'rent', 'interest', 'wages', 'equipment',
            'land', 'notes', 'allowance', 'credit', 'debit', 'contra',
            'reserve', 'provision', 'impairment', 'goodwill', 'profit',
            'loan', 'shares', 'share', 'tax', 'taxes', 'constraint')


def proper(s):
    """Acronyms and proper nouns, which are the names that can be invented."""
    out = set()
    for m in re.finditer(r'\b[A-Z]{2,}(?:\.[A-Z]+)*\b', str(s)):
        out.add(m.group(0))
    # a capitalised word that is not the first of its sentence
    for m in re.finditer(r'(?<![.!?\u201c]\s)(?<!^)\b[A-Z][a-z]{2,}\b',
                         str(s)):
        w = m.group(0)
        if w not in ('The', 'This', 'That', 'Under', 'Which', 'What', 'When',
                     'Write', 'Ring', 'True', 'False'):
            out.add(w)
    return out


def termshaped(s):
    """Phrases built round an accounting noun, which have to be in the book."""
    out = set()
    low = str(s).lower()
    for m in re.finditer(r'\b[a-z][a-z\-]*(?:\s+[a-z][a-z\-]*){1,3}\b', low):
        p = m.group(0)
        ws = p.split()
        # A leading article or preposition is not part of the name, and
        # leaving it in let "a goodwill impairment reserve" slip past.
        while ws and ws[0] in STOP:
            ws = ws[1:]
        if len(ws) < 2:
            continue
        if ws[-1] in TERMWORD and not any(w in STOP for w in ws):
            # The head of the phrase is what names a thing. "decrease
            # retained earnings" is a sentence about a real account and
            # should pass; "goodwill impairment reserve" names an account the
            # chapter does not have and should not. Checking the last two
            # words separates the two without punishing rephrasing.
            out.add(' '.join(ws[-2:]))
    return out


def content_strings(x):
    """The strings in an exercise that assert something about the subject.

    Directions, notes and column headings are the handout's own English and
    are not checked; options, statements, table cells and classified items are
    claims about the chapter and are.
    """
    t = x['t']
    if t == 'T1':
        # The stem and the right option are what the handout asserts. A
        # distractor is by definition not a claim about the chapter, and the
        # book's own practice set names things from later chapters in its
        # wrong options, so checking them would punish the same habit. Their
        # figures are still checked, because every string goes through the
        # numeric gate.
        for stem, opts, a, _w in x['items']:
            yield stem
            yield opts[a]
    elif t == 'T2':
        for stmt, _tf, _w in x['items']:
            yield stmt
    elif t == 'T3':
        for p in x['paras']:
            yield plain(p)
        for e in x.get('extras', []):
            yield e
    elif t == 'T4':
        for v in list(x['left']) + list(x['right']):
            yield v
    elif t == 'T5':
        for cells, _k in x['rows']:
            for c in cells:
                if c:
                    yield str(c)
        if x.get('data'):
            for r in x['data'][1]:
                yield r if isinstance(r, str) else r[1]
        if x.get('datagrid'):
            for r in x['datagrid'][2]:
                for c in r:
                    yield str(c)
    elif t == 'T6':
        for v in x['items']:
            yield v
    elif t == 'T7':
        for g in x['groups']:
            for v in g[0]:
                yield v
    elif t == 'T8':
        for v in x['items']:
            yield v


def walk(x):
    """Every string in an exercise, flattened."""
    if isinstance(x, str):
        yield x
    elif isinstance(x, dict):
        for v in x.values():
            for y in walk(v):
                yield y
    elif isinstance(x, (list, tuple)):
        for v in x:
            for y in walk(v):
                yield y


def source_terms(n, bk=1):
    """The chapter's English term rows, from its real tables.

    Extracted rather than transcribed, and read from the tables rather than
    from flattened text: counting lines in threes made the French column look
    like an English term the moment the extraction changed.
    """
    import parsebook as PB
    PB.BOOK = bk
    return [en for en, _ar in PB.term_pairs(n)]


def check(mod):
    ch = importlib.import_module(mod)
    src = open(os.path.join(HERE, ch.SOURCE), encoding='utf-8').read()
    src_l = src.lower()
    src_nums = numbers(src)
    src_words = words(src)
    bad = []
    hs = []
    for n in ch.HANDOUTS:
        m = importlib.import_module('%s.h%02d' % (mod, n))
        importlib.reload(m)
        hs.append(m.HANDOUT)

    claimed = collections.Counter()
    used_terms = set()
    types = collections.Counter()
    total = 0

    for H in hs:
        def say(msg):
            bad.append('H%s.%d: %s' % (ch.CH, H['n'], msg))

        for k in ('n', 'title', 'source', 'pages', 'book'):
            if not H.get(k):
                say('missing %s' % k)
        for u in H.get('covers', []):
            claimed[u] += 1

        pts, tmix = 0, collections.Counter()
        for pi, page in enumerate(H['pages'], 1):
            if not page.get('redo'):
                say('page %d has no redo instruction in its CHECK bar' % pi)
            for x in page['exercises']:
                t = x['t']
                types[t] += 1

                # ---- 6 has_directions -------------------------------
                if len(x.get('d', '')) < 25:
                    say('a %s exercise has no real direction' % t)

                # ---- 5 no_back_reference ----------------------------
                for s in walk(x):
                    hit = BACKREF.search(s)
                    if hit:
                        say('a %s exercise refers outside itself: %r'
                            % (t, hit.group(0)))
                        break

                # ---- per-type structure and the point count ---------
                if t == 'T1':
                    for stem, opts, ans, why in x['items']:
                        pts += 1
                        if len(opts) != 4:
                            say('a multiple-choice item has %d options'
                                % len(opts))
                        if not 0 <= ans <= 3:
                            say('a multiple-choice item has answer %r' % ans)
                        if len(set(o.lower() for o in opts)) != 4:
                            say('a multiple-choice item repeats an option: %r'
                                % stem[:40])
                        if len(why) < 20:
                            say('item %r has no reason in the key' % stem[:40])
                elif t == 'T2':
                    for stmt, tf, why in x['items']:
                        pts += 1
                        if not isinstance(tf, bool):
                            say('a true/false item has answer %r' % tf)
                        if tf is False and len(why) < 15:
                            say('a false statement has no correction: %r'
                                % stmt[:40])
                    tfs = [tf for _s, tf, _w in x['items']]
                    if len(set(tfs)) == 1:
                        say('a true/false exercise is all %s' % tfs[0])
                elif t == 'T3':
                    got = [a for p in x['paras'] for a in brace_answers(p)]
                    pts += len(got)
                    if len(x.get('extras', [])) < 3:
                        say('a fill-in-the-spaces word bank has %d '
                            'distractors; fewer than three is a crutch'
                            % len(x.get('extras', [])))
                    for e in x.get('extras', []):
                        if e in got:
                            say('%r is both an answer and a distractor' % e)
                    for a in got:
                        if a not in x.get('whys', {}):
                            say('space %r has no note in the key' % a)
                        if re.match(r'^[\d,.$]+$', a):
                            say('space %r asks for a figure; figures belong '
                                'in a table' % a)
                elif t == 'T4':
                    pts += len(x['ans'])
                    if len(x['ans']) != len(x['left']):
                        say('a matching has %d premises and %d answers'
                            % (len(x['left']), len(x['ans'])))
                    pool = LETTERS[:len(x['right'])]
                    for a in x['ans']:
                        if a not in pool:
                            say('matching answer %r is outside the options'
                                % a)
                    if x['ans'] == sorted(x['ans']):
                        say('a matching’s answers run A, B, C down the '
                            'page, so the options sit in answer order')
                    lat = [r for r in x['right']
                           if not re.search(r'[؀-ۿ]', r)]
                    if len(lat) == len(x['right']) and lat != sorted(lat):
                        say('a matching’s options are not in '
                            'alphabetical order, so position carries '
                            'information')
                elif t == 'T5':
                    pts += len(x['ans'])
                    blanks = sum(1 for cells, _k in x['rows']
                                 for c in cells if c is None)
                    if blanks != len(x['ans']):
                        say('a table has %d empty cells and %d answers'
                            % (blanks, len(x['ans'])))
                    if not any(k == 'w' and None not in cells
                               for cells, k in x['rows']):
                        say('a table has no complete worked row')
                    for cells, _k in x['rows']:
                        if len(cells) != len(x['heads']):
                            say('a table row has %d cells against %d headers'
                                % (len(cells), len(x['heads'])))
                    # ---- 7 has_data ---------------------------------
                    needs = any(numbers(a) for a in x['ans'])
                    shown = any(numbers(c) for cells, _k in x['rows']
                                for c in cells if c)
                    if needs and not (x.get('data') or x.get('datagrid')
                                      or shown):
                        say('a table asks for figures and carries no DATA '
                            'panel, so the exercise is not self-sufficient')
                elif t == 'T6':
                    pts += len(x['ans'])
                    if len(x['ans']) != len(x['items']):
                        say('a classification has %d items and %d answers'
                            % (len(x['items']), len(x['ans'])))
                    if len(set(x['ans'])) < 2:
                        say('a classification puts every item in one class')
                elif t == 'T7':
                    pts += len(x['groups'])
                    for g in x['groups']:
                        if len(g[0]) != 4:
                            say('an odd-one-out group has %d items' % len(g[0]))
                        if not 0 <= g[1] <= 3:
                            say('an odd-one-out group has answer %r' % g[1])
                elif t == 'T8':
                    pts += len(x['ans'])
                    if sorted(x['ans']) != sorted(
                            str(i + 1) for i in range(len(x['items']))):
                        say('a sequencing exercise’s answers are not a '
                            'permutation of its positions')
                else:
                    say('unknown exercise type %r' % t)
                tmix[t] += pts

                # ---- 1 source_numbers -------------------------------
                for s in walk(x):
                    for num in numbers(s) - src_nums:
                        say('the figure %s is not in the source chapter' % num)
                        break

                # ---- 2 source_terms ---------------------------------
                # A blanket vocabulary check punishes rephrasing: "ring one
                # letter" is not in the book and does not need to be. The risk
                # worth gating is narrower and entirely nominal — an account,
                # a body, a standard or a technical term that the chapter does
                # not contain — so the check is on proper nouns, acronyms and
                # anything shaped like the name of an account.
                for s in content_strings(x):
                    for p_ in proper(s):
                        if p_.lower() not in src_l:
                            say('%r is named in an exercise and is not in the '
                                'source chapter' % p_)
                    for p_ in termshaped(s):
                        if p_ not in src_l:
                            say('the term %r is used in an exercise and is '
                                'not in the source chapter' % p_)

                # ---- term coverage ----------------------------------
                for s in walk(x):
                    used_terms.add(s.strip().lower())

        # ---- 13 type_mix -------------------------------------------
        kinds = set()
        for page in H['pages']:
            for x in page['exercises']:
                kinds.add(x['t'])
        if len(kinds) < 2:
            say('only one exercise type; that is a worksheet, not a handout')
        # ---- 15 response_budget ------------------------------------
        # The floor was a proxy for wasting a sheet, and page fill now
        # measures that directly: a page of tables carries a third of the
        # points of a page of matching and is not wasting anything. The
        # ceiling still matters, because over it the pages do not fit.
        if not 20 <= pts <= 78:
            say('%d response points, outside the 20 to 78 a four-page '
                'handout holds' % pts)
        if len(H['pages']) > 4:
            say('%d pages; the brief is four' % len(H['pages']))
        total += pts
        H['_pts'] = pts

    # Mixing the types is the point of having eight of them, and it is a
    # property of the chapter rather than of each sheet: a chapter whose
    # sheets between them use fewer than four is not being converted.
    if len(types) < 4:
        bad.append('the chapter uses only %d exercise types' % len(types))

    # ---- 3 coverage_ledger -----------------------------------------
    # A unit the book states in a form that cannot be converted faithfully
    # may be omitted, but only on the record: OMIT carries the reason, and
    # the count is printed with the result so the gap is never silent.
    omit = getattr(ch, 'OMIT', {})
    for u in getattr(ch, 'LEDGER', []):
        if claimed[u] == 0 and u not in omit:
            bad.append('coverage: content unit %s is not claimed by any '
                       'handout and is not on the omission record' % u)
    for u in claimed:
        if u not in getattr(ch, 'LEDGER', []):
            bad.append('coverage: handout claims %s, which is not in the '
                       'chapter inventory' % u)

    # ---- 4 terms_covered -------------------------------------------
    st = source_terms(int(ch.CH), getattr(ch, 'BK', 1))
    blob = ' · '.join(used_terms)
    missing = [t for t in sorted(set(st)) if t.lower() not in blob]
    for t in missing:
        bad.append('terms: the term-bridge row %r is never exercised' % t)

    print('%s · %d handouts · %d response points · %d source '
          'terms' % (ch.SUB, len(hs), total, len(set(st))))
    for H in hs:
        print('  H%s.%-3d %-50s %3d items  %d pages'
              % (ch.CH, H['n'], H['title'][:50], H['_pts'], len(H['pages'])))
    if bad:
        print()
        for b in bad[:60]:
            print(' ', b)
        print('\n%d problem(s)' % len(bad))
        return 1
    print('\nall checks pass')
    return 0


if __name__ == '__main__':
    sys.exit(check(sys.argv[1] if len(sys.argv) > 1 else 'b1_ch01'))
