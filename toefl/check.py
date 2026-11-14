# -*- coding: utf-8 -*-
"""Structural checks every unit must pass before it goes in a volume."""
import sys, os, re, importlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

SHAPE_B1 = [('acad', 24), ('campus', 12), ('candos', 6), ('vocab_talk', 4)]
# The Foundation volume keeps the same two-strand shape. What changes is where
# the words come from: the general-service band, not the Academic Word List.
SHAPE_A2 = [('core', 24), ('campus', 12), ('candos', 6), ('vocab_talk', 4)]
SHAPE_B2 = [('acad', 18), ('collocs', 10), ('stance', 5), ('nuance', 3),
            ('candos', 6), ('vocab_talk', 4)]

ITEMS_B1 = [('r2', 'guided', 4), ('r2', 'exam', 6), ('r3', 'guided', 4), ('r3', 'exam', 7),
            ('l1', 'warm', 3), ('l1', 'items', 6), ('l2', 'warm', 3), ('l2', 'items', 5),
            ('l3', 'warm', 3), ('l3', 'items', 6), ('w1', 'guided', 3), ('w1', 'exam', 7)]
# B2 carries ~13% more items, all of it in the exam phase. Build a Sentence stays
# at ten, because the real task is ten.
ITEMS_B2 = [('r2', 'guided', 4), ('r2', 'exam', 7), ('r3', 'guided', 4), ('r3', 'exam', 9),
            ('l1', 'warm', 3), ('l1', 'items', 7), ('l2', 'warm', 3), ('l2', 'items', 6),
            ('l3', 'warm', 3), ('l3', 'items', 7), ('w1', 'guided', 3), ('w1', 'exam', 7)]


# Foundation reuses the B1 item counts without changing a single number. A low
# level needs more practice, not less; what is scaled is the load of each item,
# not how many there are. Every number in the table below is a gate.
ITEMS_A2 = ITEMS_B1

#        passage       mean max   talk        announce   turns  repeat tiles  q/10  w3 model    w2 model
A2 = {
 1: dict(r3=(104,122), ms=11, xs=18, l3=(78, 96), l2=(46,64), turns=(7,10),  rep=9,  tiles=(4,5), qf=5, w3=(40,56), w2=(28,46)),
 2: dict(r3=(112,130), ms=11, xs=18, l3=(84,102), l2=(50,68), turns=(8,11),  rep=10, tiles=(4,5), qf=5, w3=(45,61), w2=(32,50)),
 3: dict(r3=(120,138), ms=11, xs=18, l3=(90,108), l2=(54,72), turns=(8,11),  rep=10, tiles=(4,5), qf=6, w3=(50,66), w2=(36,54)),
 4: dict(r3=(128,146), ms=11, xs=18, l3=(96,114), l2=(58,76), turns=(9,12),  rep=11, tiles=(5,6), qf=6, w3=(55,71), w2=(40,58)),
 5: dict(r3=(136,154), ms=11, xs=18, l3=(104,122),l2=(62,80), turns=(9,12),  rep=12, tiles=(5,6), qf=6, w3=(60,76), w2=(44,62)),
 6: dict(r3=(144,162), ms=13, xs=22, l3=(110,128),l2=(66,84), turns=(9,13),  rep=12, tiles=(5,6), qf=7, w3=(65,81), w2=(48,66)),
 7: dict(r3=(152,170), ms=13, xs=22, l3=(118,138),l2=(70,88), turns=(10,13), rep=13, tiles=(5,6), qf=7, w3=(70,86), w2=(52,70)),
 8: dict(r3=(158,178), ms=13, xs=22, l3=(124,144),l2=(74,92), turns=(10,14), rep=14, tiles=(6,7), qf=7, w3=(75,91), w2=(56,74)),
 9: dict(r3=(164,186), ms=13, xs=22, l3=(132,152),l2=(78,96), turns=(11,14), rep=15, tiles=(6,7), qf=8, w3=(80,96), w2=(58,78)),
10: dict(r3=(170,192), ms=13, xs=22, l3=(142,164),l2=(82,100),turns=(11,15), rep=16, tiles=(6,7), qf=8, w3=(85,101),w2=(62,82)),
}


def heads(U):
    """The head words a unit teaches, whichever strand name it uses."""
    return list(U.get('acad', U.get('core', []))) + list(U.get('campus', []))


def check(U, taught=()):
    n = U['n']
    b2 = U.get('level') == 'B2'
    a2 = U.get('level') == 'A2' 
    out = []

    _lvltag = "f" if a2 else "u"

    def bad(msg):
        out.append("%s%02d: %s" % (_lvltag, n, msg))

    for k, want in (SHAPE_B2 if b2 else SHAPE_A2 if a2 else SHAPE_B1):
        if len(U[k]) != want:
            bad('%s has %d, want %d' % (k, len(U[k]), want))
    # no repeated head words inside the unit
    words = [w for w, _ in heads(U)]
    if len(set(words)) != len(words):
        bad('a word is listed twice in this unit')
    # Complete the Words: dashes must match the answer length
    r1 = U['r1']
    for tag, text, ans in (('guided', r1['guided_text'], r1['guided']),
                           ('exam', r1['exam_text'], r1['exam'])):
        runs = []
        cur = 0
        for ch in text:
            if ch == '-':
                cur += 1
            elif cur:
                runs.append(cur); cur = 0
        if cur:
            runs.append(cur)
        if len(runs) != len(ans):
            bad('r1 %s has %d gaps but %d answers' % (tag, len(runs), len(ans)))
        want = 10 if tag == 'exam' else 5
        if len(ans) != want:
            bad('r1 %s has %d answers, want %d' % (tag, len(ans), want))
        else:
            for i, (d_, a) in enumerate(zip(runs, ans), 1):
                if d_ != len(a):
                    bad('r1 %s gap %d: %d dashes but answer %r is %d letters'
                        % (tag, i, d_, a, len(a)))
    for blk, field, want in (ITEMS_B2 if b2 else ITEMS_A2 if a2 else ITEMS_B1):
        got = len(U[blk][field])
        if got != want:
            bad('%s.%s has %d, want %d' % (blk, field, got, want))
    # every multiple-choice item: four options, a valid index, a reason
    for blk in ('r2', 'r3', 'l1', 'l2', 'l3'):
        for field in ('guided', 'exam', 'warm', 'items'):
            for it in U[blk].get(field, []):
                stem, opts, ai, why = it
                if len(opts) != 4:
                    bad('%s.%s "%s" has %d options' % (blk, field, stem[:30], len(opts)))
                if not 0 <= ai <= 3:
                    bad('%s.%s "%s" answer index %r' % (blk, field, stem[:30], ai))
                if not why or len(why) < (30 if b2 else 16 if a2 else 20):
                    bad('%s.%s "%s" has no real explanation' % (blk, field, stem[:30]))
    # answers must not all sit on one letter
    letters = []
    for blk in ('r2', 'r3', 'l1', 'l2', 'l3'):
        for field in ('guided', 'exam', 'warm', 'items'):
            letters += ['ABCD'[it[2]] for it in U[blk].get(field, [])]
    # option order is spread evenly at render time (book.Spread), so the raw
    # data only has to avoid being degenerate
    if len(set(letters)) < 3:
        bad('items use only %d distinct answer positions' % len(set(letters)))
    # speaking
    if len(U['sp']) != 3:
        bad('needs 3 speaking cycles')
    for i, s in enumerate(U['sp'], 1):
        if len(s['repeat']) != 7:
            bad('speaking %d has %d repeat sentences, want 7' % (i, len(s['repeat'])))
        if len(s['qs']) != 4:
            bad('speaking %d has %d interview questions, want 4' % (i, len(s['qs'])))
        lens = [len(x.split()) for x in s['repeat']]
        if lens[-1] != max(lens) or sum(lens[4:]) <= sum(lens[:3]) + 6:
            bad('speaking %d: repeat sentences must build to the longest last, got %r'
                % (i, lens))
    # writing
    if len(U['w1']['guided']) + len(U['w1']['exam']) != 10:
        bad('Build a Sentence must total 10 items')
    # the real task builds a direct question, an embedded question (which ends
    # in a full stop) or a relative clause, in roughly 8:2
    EMBED = re.compile(
        r'\b(asked|asks|know|knew|wonder\w*|wanted to know|tell me|told \w+)\b'
        r'[^.?]*\b(whether|if|where|when|why|how|what|which|who)\b', re.I)
    qs = 0
    for _, _, a in U['w1']['guided'] + U['w1']['exam']:
        if a.rstrip().endswith('?') or EMBED.search(a):
            qs += 1
    want_qs = A2[n]['qf'] if a2 else 8
    if qs < want_qs:
        bad('only %d of 10 Build a Sentence items use a question frame (want at least %d)'
            % (qs, want_qs))
    if not a2 and U['w3']['model_words'] < (130 if b2 else 100):
        bad('discussion model is under %d words' % (130 if b2 else 100))
    if b2:
        _check_b2(U, bad)
    if a2:
        _check_a2(U, bad, taught)
    # review
    for k, want in (('vocab', 12), ('gram', 8), ('mini', 6)):
        if len(U['rev'][k]) != want:
            bad('rev.%s has %d, want %d' % (k, len(U['rev'][k]), want))
    return out



def _stray_script(U, bad):
    """No CJK, Arabic or Cyrillic anywhere: this book is English only."""
    def walk(v):
        if isinstance(v, str):
            for ch in v:
                o = ord(ch)
                if 0x0400 <= o <= 0x04FF or 0x0600 <= o <= 0x06FF or 0x3000 <= o <= 0x9FFF:
                    bad('stray non-Latin character %r in %r' % (ch, v[:48]))
                    return
        elif isinstance(v, dict):
            for x in v.values(): walk(x)
        elif isinstance(v, (list, tuple)):
            for x in v: walk(x)
    walk(U)


def _check_b2(U, bad):
    """The checks that only apply to the B2 volumes."""
    _stray_script(U, bad)
    # Build a Sentence tiles get longer
    for prompt, tiles, ans in U['w1']['guided'] + U['w1']['exam']:
        if not 9 <= len(tiles) <= 11:
            bad('Build a Sentence "%s" has %d tiles, want 9-11' % (prompt[:34], len(tiles)))
    # word family: a head word and three forms
    fam = U.get('family')
    if not fam or len(fam) != 2 or len(fam[1]) != 3:
        bad('family must be (head word, three forms)')
    else:
        for f in fam[1]:
            if len(f) != 3:
                bad('family form %r must be (form, part of speech, use)' % (f,))
    # the reading passage has to sit in the band the real test uses
    pw = sum(len(x.split()) for x in U['r3']['paras'])
    if not 255 <= pw <= 300:
        bad('reading 3 passage is %d words, want 255-300' % pw)
    if U['r3']['words'] != pw:
        bad('reading 3 declares %d words but the passage has %d'
            % (U['r3']['words'], pw))
    mw = sum(len(x.split()) for x in U['w3']['model'])
    if U['w3']['model_words'] != mw:
        bad('the discussion model declares %d words but has %d'
            % (U['w3']['model_words'], mw))
    # the hedging figure clips past about 40 characters
    for expr, gloss in U['stance']:
        if len(gloss) > 40:
            bad('stance gloss %r is %d chars, the figure clips past 40' % (gloss, len(gloss)))
    # every stance expression must actually be used somewhere in the unit
    hay = ' '.join([U['r3']['title']] + list(U['r3']['paras'])
                   + [t for _, t in U['l3']['script']]
                   + list(U['w2']['model']) + list(U['w3']['model'])).lower()
    for expr, _ in U['stance']:
        if expr.lower() not in hay:
            bad('stance expression %r is taught but never used in the unit' % expr)
    # Find the Fault
    ft = U.get('fault')
    if not ft or not 4 <= len(ft.get('faults', [])) <= 6:
        bad('Find the Fault needs 4-6 faults')
    else:
        for w_, r_, why in ft['faults']:
            if w_ not in ft['text']:
                bad('Find the Fault: %r is not in the text' % w_)
            if w_ == r_:
                bad('Find the Fault: %r is not an error' % w_)
            if len(why) < 25:
                bad('Find the Fault: %r has no real explanation' % w_)
    # the band pair
    bp = U['w2'].get('bandpair')
    if not bp:
        bad('the email task needs a band pair')
    else:
        for tag in ('mid', 'top'):
            wds = sum(len(l.split()) for l in bp[tag])
            if wds < 90:
                bad('band pair %s answer is %d words, want at least 90' % (tag, wds))
        if not 4 <= len(bp['diffs']) <= 5:
            bad('band pair needs 4-5 named differences, got %d' % len(bp['diffs']))


def main(nums, pre='u'):
    problems, seen, taught = [], {}, []
    for n in nums:
        U = importlib.import_module('content.%s%02d' % (pre, n)).UNIT
        problems += check(U, taught)
        for w, _ in heads(U):
            seen.setdefault(w, []).append(n)
            taught.append(w)
    for w, us in sorted(seen.items()):
        if len(us) > 1:
            problems.append('"%s" is taught in units %s' % (w, us))
    if problems:
        print('\n'.join(problems))
        print('\n%d problem(s)' % len(problems))
        return 1
    print('%d units: all checks pass (%d head words, no repeats)' % (len(nums), len(seen)))
    return 0


# ---------------------------------------------------------------- A2 gates --
# A containment gate is only worth having if it is accurate. A blanket r"\w+ed"
# calls bed, red, need, speed and hundred past tenses, and r"is \w+ing" calls
# "is interesting" a present continuous. So the test below asks whether the
# stem is a real word instead of whether the string ends in the right letters.
# put, read, cost, cut, set, let and hit are the same word in the present, so a
# gate cannot tell them apart and must not try. left, lost and lay are out for
# the same reason: on your left, I am lost, and lay are not past tenses.
IRREG_PAST = set("""
was were had did went saw made got took came said told gave found felt knew
thought bought brought wrote ate drank ran sat stood began became broke built
caught chose drove fell flew forgot grew heard held kept met paid
sold sent slept spoke spent taught understood wore won sang swam
""".split())
IRREG_PP = set("""
been become begun broken brought built bought caught chosen come cost cut done drunk
driven eaten fallen felt flown forgotten given gone grown had heard held kept known
left lost made met paid put read run said seen sold sent sat slept spoken spent stood
taken taught told thought understood worn won written
""".split())
# -ed words that behave as adjectives at this level, and -ing words that are
# nouns or adjectives. Neither signals the structure the gate is looking for.
ED_OK = set("""tired interested married closed crowded excited bored worried pleased
surprised finished united advanced limited shared included allowed needed
used fixed mixed printed written spoken known""".split())
ING_OK = set("""interesting boring exciting amazing surprising confusing relaxing
tiring willing missing building meeting morning evening spring shopping parking
swimming cooking sitting ceiling something nothing everything anything king ring
drinking washing shopping living dining sleeping working starting ending
thing during string wedding feeling painting beginning warning""".split())
BE = set("am is are be been being 'm 're 's".split())
# 'going to the library' is a journey, not the future tense.
_PLACE = set("""the a an my your his her their our this that these those
room bed work school college class town hospital university library canteen
office laboratory it him me us them you sleep""".split())
HAVE = set("have has 've".split())


def _tok(blob):
    """Words, with sentence boundaries kept so that 'Who ...?' at the start of
    a sentence is not read as a relative clause."""
    return re.findall(r"[a-z']+|[.?!;:]", blob.lower())


def _is_ved(w):
    """work+ed, not b+ed. True only when the stem is itself a word."""
    from content._band import BAND
    if not w.endswith('ed') or len(w) < 4 or w in ED_OK:
        return False
    for stem in (w[:-2], w[:-1], w[:-3] + 'y' if len(w) > 4 else '',
                 w[:-3] if len(w) > 4 and w[-3] == w[-4] else ''):
        if stem and (stem in BAND or stem + 'e' in BAND):
            return True
    return False


def _past(w):
    return w in IRREG_PAST or _is_ved(w)


def _pp(w):
    return w in IRREG_PP or _is_ved(w)


def _in_question(toks, i):
    """who/which inside a sentence that ends in ? is a question word, not a
    relative pronoun. Relative clauses inside questions are vanishingly rare at
    this level, and a gate that cries wolf gets switched off."""
    for j in range(i + 1, min(len(toks), i + 40)):
        if toks[j] in ('.', '?', '!', ';', ':'):
            return toks[j] == '?'
    return False


def _after_have(toks, i):
    """'got' belongs to 'have got' even with a subject in between:
    have you got, has your brother got."""
    for j in range(i - 1, max(-1, i - 5), -1):
        if toks[j] in ('.', '?', '!', ';', ':'):
            return False
        if toks[j] in HAVE:
            return True
    return False


def _containment(toks, n, bad):
    """No structure may appear in a text before the unit that teaches it."""
    def show(i):
        return ' '.join(toks[max(0, i - 4):i + 3])

    for i, w in enumerate(toks):
        nxt = toks[i + 1] if i + 1 < len(toks) else ''
        prv = toks[i - 1] if i else ''
        # 'have got' is the possessive this book teaches in unit 4, not a
        # present perfect and not a past tense.
        if n >= 4 and (w in HAVE and nxt == 'got' or w == 'got' and _after_have(toks, i)):
            continue
        if w in HAVE and _pp(nxt):
            bad('present perfect before it is taught: ...%s...' % show(i))
            return
        if w in BE and _pp(nxt) and nxt not in ED_OK:
            after = toks[i + 2] if i + 2 < len(toks) else ''
            if after in ('by', 'in', 'at', 'on', 'from', 'to', 'with', 'and') or not after:
                bad('passive before it is taught: ...%s...' % show(i))
                return
        if w in ('who', 'which') and i and i + 1 < len(toks) \
                and toks[i - 1] not in ('.', '?', '!', ';', ':', 'and', 'but',
                                        'know', 'ask', 'asks', 'tell', 'say',
                                        'says', 'me', 'us', 'of') \
                and not _in_question(toks, i):
            bad('relative clause before it is taught: ...%s...' % show(i))
            return
        if n < 5 and w in BE and nxt.endswith('ing') and nxt not in ING_OK:
            bad('present continuous appears before unit 5 teaches it: ...%s...' % show(i))
            return
        if n < 7 and _past(w):
            bad('past tense appears before unit 7 teaches it: ...%s...' % show(i))
            return
        # unit 7 teaches was and were; the other irregular pasts wait for unit 8
        if n < 8 and w in IRREG_PAST and w not in ('was', 'were'):
            bad('an irregular past appears before unit 8 teaches it: ...%s...' % show(i))
            return
        # 'than' is the real signal; 'most lessons' is a quantifier, not a
        # superlative, so only 'the most ...' counts.
        if n < 10 and (w == 'than'
                       or (w == 'most' and i and toks[i - 1] == 'the')
                       or (w == 'more' and toks[i + 2:i + 3] == ['than'])):
            bad('comparison appears before unit 10 teaches it: ...%s...' % show(i))
            return
        if n < 10 and (w in ("will", "'ll", 'wont')
                       or (w == 'going' and nxt == 'to'
                           and toks[i + 2:i + 3] and toks[i + 2] not in _PLACE)):
            bad('the future appears before unit 10 teaches it: ...%s...' % show(i))
            return


def _texts(U):
    """Every string the learner actually reads or hears, with r1 made whole."""
    out = []
    r1 = U['r1']
    for text, ans in ((r1['guided_text'], r1['guided']), (r1['exam_text'], r1['exam'])):
        it = iter(ans)
        out.append(re.sub(r'-+', lambda m: next(it, ''), text))
    for spec in U['r2']['docs']:
        # spec[0] and the last element are kind tags, not prose
        body = spec[1:-1] if isinstance(spec[-1], str) else spec[1:]
        for x in body:
            if isinstance(x, str):
                out.append(x)
            elif isinstance(x, (list, tuple)):
                out += [l.lstrip('#* ') for l in x]
        for x in spec[1:]:
            if isinstance(x, (list, tuple)):
                out += [l.lstrip('#* ') for l in x]
    out.append(U['r3']['title']); out += list(U['r3']['paras'])
    for tag in ('l1', 'l2', 'l3'):
        b = U[tag]
        out.append(b['caption'])
        out += [t for _, t in b['script']]
        out += list(b.get('poster', ())) + list(b.get('board', ()))
    for blk in ('r2', 'r3', 'l1', 'l2', 'l3'):
        for field in ('guided', 'exam', 'warm', 'items'):
            for stem, opts, _, _ in U[blk].get(field, []):
                out.append(stem); out += list(opts)
    for s in U['sp']:
        out += list(s['repeat']) + list(s['qs']) + [m for _, m in s['model']]
    out += [a for _, _, a in U['w1']['guided'] + U['w1']['exam']]
    out += list(U['w2']['scenario']) + list(U['w2']['bullets']) + list(U['w2']['model'])
    out += [U['w3']['question']] + [p[-1] for p in U['w3']['posts']] + list(U['w3']['model'])
    # fill the blank with its answer: a gapped sentence is not a sentence, and
    # the gate must read what the student will have written.
    out += [c for c, _ in U['rev']['vocab']]
    out += [re.sub(r'_{2,}', a, c, count=1) for c, a in U['rev']['gram']]
    for stem, opts, _, _ in U['rev']['mini']:
        out.append(stem); out += list(opts)
    return [t for t in out if isinstance(t, str) and t.strip()]


def _check_a2(U, bad, taught):
    from content._wordbank import unknown
    n = U['n']
    P = A2[n]
    texts = _texts(U)
    blob = ' . '.join(texts)

    # --- the level, in numbers ------------------------------------------
    def band(label, got, lo_hi):
        lo, hi = lo_hi
        if not lo <= got <= hi:
            bad('%s is %d, want %d-%d' % (label, got, lo, hi))

    pw = sum(len(x.split()) for x in U['r3']['paras'])
    band('reading 3 passage', pw, P['r3'])
    if U['r3']['words'] != pw:
        bad('reading 3 declares %d words but the passage has %d' % (U['r3']['words'], pw))
    sents = [s for s in re.split(r'(?<=[.!?])\s+', ' '.join(U['r3']['paras'])) if s.strip()]
    lens = [len(s.split()) for s in sents]
    if lens and sum(lens) / float(len(lens)) > P['ms']:
        bad('reading 3 averages %.1f words a sentence, want at most %d'
            % (sum(lens) / float(len(lens)), P['ms']))
    if lens and max(lens) > P['xs']:
        bad('reading 3 has a %d-word sentence, the cap is %d' % (max(lens), P['xs']))
    band('listening 3 script', sum(len(t.split()) for _, t in U['l3']['script']), P['l3'])
    band('listening 2 script', sum(len(t.split()) for _, t in U['l2']['script']), P['l2'])
    band('listening 1 turns', len(U['l1']['script']), P['turns'])
    mw = sum(len(l.split()) for l in U['w3']['model'])
    band('discussion model', mw, P['w3'])
    if U['w3']['model_words'] != mw:
        bad('discussion model declares %d words but has %d' % (U['w3']['model_words'], mw))
    band('email model', sum(len(l.split()) for l in U['w2']['model']), P['w2'])
    for i, s in enumerate(U['sp'], 1):
        longest = max(len(x.split()) for x in s['repeat'])
        if longest > P['rep']:
            bad('speaking %d longest repeat is %d words, the cap is %d'
                % (i, longest, P['rep']))
        if len(s['model']) != 4:
            bad('speaking %d models %d of the 4 questions; Foundation models all four'
                % (i, len(s['model'])))
    lo, hi = P['tiles']
    for prompt, tiles, _ in U['w1']['guided'] + U['w1']['exam']:
        if not lo <= len(tiles) <= hi:
            bad('Build a Sentence "%s" has %d tiles, want %d-%d'
                % (prompt[:30], len(tiles), lo, hi))

    # --- vocabulary control ---------------------------------------------
    mine = [w for w, _ in heads(U)]
    out = unknown(blob, list(taught) + mine, U.get('names', ()))
    if out:
        seen, uniq = set(), []
        for w in out:
            if w.lower() not in seen:
                seen.add(w.lower()); uniq.append(w)
        bad('%d word(s) outside the band and never taught: %s'
            % (len(uniq), ', '.join(uniq[:12])))

    # --- grammar containment ---------------------------------------------
    low = blob.lower()
    for phrase in ('used to', 'how are you', 'nice to meet you', 'excuse me',
                   'would like', 'thank you', 'see you', 'good morning',
                   'where are you from', 'i am from'):
        low = low.replace(phrase, ' ')
    _containment(_tok(low), n, bad)


if __name__ == '__main__':
    arg = sys.argv[1:] or ['1-20']
    pre = 'u'
    if arg[0].lower().startswith('f'):
        pre = 'f'
        arg = [a.lower().replace('f', '') for a in arg]
    nums = []
    for a in arg:
        if '-' in a:
            lo, hi = a.split('-'); nums += list(range(int(lo), int(hi) + 1))
        else:
            nums.append(int(a))
    sys.exit(main(nums, pre))
