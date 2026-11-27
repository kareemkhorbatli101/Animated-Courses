# -*- coding: utf-8 -*-
"""Second edition: a unit becomes document XML, its figures and its key.

Three rules this file exists to enforce:

  * every exercise carries two visuals - one that organises information
    (a bank, a table, a grid) and one that pictures it (icons, people, a
    labelled thing);
  * no page break is written without a teaching figure in front of it, and
    that figure is grown to the measured height of the space the page has
    left (see fitpass.py), so a part never ends on half a white page;
  * part 9 is three cases for discussion, not a fact to admire.
"""
import json, os, random
import render as R
import art2 as A
import figs2 as F2

LETTERS = 'ABCDEFGH'

# Pass 0 of the page fit: the closing figures are left out so that the fitting
# pass can measure how much room each part actually leaves at the foot of its
# last page. The captions stay, because they are what locates the page.
NORECAP = False

# The teacher's book needs the answer key and nothing else from a unit, so it
# runs the same builder with the drawing switched off. One source of answers,
# which is why the key in the teacher's book cannot drift from the learner's.
DRY = False


class Ctx:
    def __init__(self, media_dir, fit=None):
        self.media = media_dir
        self.images = []
        self.n = 0
        self.figno = 0
        self.unit = 0
        self.figures = []          # (id, caption, alt, xref)
        self.exercise_figs = {}    # label -> count
        self.fit = fit or {}       # recap key -> extra height in SVG units
        self.recaps = {}           # FIG id -> recap key
        self.breaks = 0

    def add(self, p):
        self.n += 1
        rid, arc = 'rIdImg%d' % self.n, 'img%03d.png' % self.n
        self.images.append((rid, p, arc))
        return rid


def fig(ctx, out, tag, built, cap, alt=None, xref=None):
    ctx.figno += 1
    fid = 'FIG %d.%d' % (ctx.unit, ctx.figno)
    if DRY:
        ctx.figures.append((fid, cap, alt or cap, xref or ''))
        if xref:
            ctx.exercise_figs[xref] = ctx.exercise_figs.get(xref, 0) + 1
        return fid
    inner, h, defs = built
    # The unit number is part of the name: tags repeat and ctx.figno restarts
    # at every unit, so without it unit 3's case figure silently overwrote
    # unit 1's and both references resolved to whichever was written last.
    p = os.path.join(ctx.media, 'u%02d_%s_%03d.png' % (ctx.unit, tag, ctx.figno))
    A.render2(inner, h, p, defs)
    out.append(R.picture(ctx.add(p), A.W, h, tag))
    out.append(R.caption('%s  %s' % (fid, cap)))
    ctx.figures.append((fid, cap, alt or cap, xref or ''))
    if xref:
        ctx.exercise_figs[xref] = ctx.exercise_figs.get(xref, 0) + 1
    return fid


def _who(cast, name, role=''):
    """A speaker's drawn appearance, with their name and role attached."""
    look = dict(cast.get(name, {}))
    look['name'] = name
    look.setdefault('role', role)
    return look


# --------------------------------------------------------------- page ends
DEFAULT_ASK = 'Close the book. Say one sentence from this page.'


def endpart(ctx, out, key, title, lines, icons=None, question=None, xref=None,
            cap=None, cards=None):
    """Close a part: a recap figure fitted to the page, then the break.

    `key` identifies this recap to the fitting pass, which measures how much
    room the page actually had left and comes back with a target height.
    This is the only function in the file that writes a page break.
    """
    rkey = 'u%d.%s' % (ctx.unit, key)
    target = ctx.fit.get(rkey, 0)
    if NORECAP:
        ctx.figno += 1
        fid = 'FIG %d.%d' % (ctx.unit, ctx.figno)
        out.append(R.caption('%s  %s' % (fid, cap or 'What this part gave you, '
                                              'in one picture.')))
        ctx.figures.append((fid, cap or 'recap', 'recap', xref or ''))
        if xref:
            ctx.exercise_figs[xref] = ctx.exercise_figs.get(xref, 0) + 1
    else:
        fid = fig(ctx, out, 'recap',
                  F2.part_recap(title, [l for l in lines if l], icons, question,
                                target_h=target, cards=cards),
                  cap or 'What this part gave you, in one picture.', xref=xref)
    ctx.recaps[fid] = rkey
    ctx.breaks += 1
    out.append(R.pagebreak())


# ------------------------------------------------------------- shuffling
def shuffled(items, seed):
    r = random.Random(seed)
    out = list(items)
    for _ in range(6):
        r.shuffle(out)
        if out != list(items):
            break
    return out


# ------------------------------------------------------- the two visuals
# For these types the second half of a pair IS the key - a letter, a column
# name, a position, the word "true". Printing it in the answer bank would give
# the exercise away, so these carry their own bank and their own picture list.
HIDDEN_KEY = ('order', 'sort', 'tf', 'choice')


def _terms_of(task):
    """The words an exercise is really about, for the picture visual."""
    if task.get('pics'):
        return list(task['pics'])[:8]
    if task.get('kind') in HIDDEN_KEY:
        got = [a for a, _ in task.get('pairs', [])]
    else:
        got = [b for _, b in task.get('pairs', [])]
    out, seen = [], set()
    for g in got:
        g = str(g).strip()
        if 2 < len(g) < 34 and g.lower() not in seen:
            seen.add(g.lower())
            out.append(g)
    return out[:8]


def task_visuals(ctx, out, task, label, title_bank, title_pics, note=None):
    """The bank (organises) and the cards (picture). Both pedagogical."""
    kind = task.get('kind', 'short')
    if task.get('bank'):
        rows = [[str(i + 1), v] for i, v in enumerate(task['bank'])]
        fig(ctx, out, 'bank', F2.mini_table(task.get('bank_title', title_bank),
                                            ['', task.get('bank_head', 'What to look at')],
                                            rows, note=note),
            'What %s turns on.' % label, xref=label)
    elif kind in HIDDEN_KEY:
        rows = [[str(i + 1), str(a)[:70]] for i, (a, _b) in
                enumerate(task.get('pairs', []))]
        if rows:
            fig(ctx, out, 'bank', F2.mini_table(title_bank, ['', 'Work through these'],
                                                rows, note=note),
                'The items of %s, set out.' % label, xref=label)
    else:
        answers = [str(b) for _, b in task.get('pairs', [])]
        if answers:
            bank = shuffled(answers, label)
            rows = [[str(i + 1), v] for i, v in enumerate(bank)]
            fig(ctx, out, 'bank', F2.mini_table(title_bank, ['', 'Use each one once'],
                                                rows, note=note),
                'The answers for %s, in no particular order.' % label, xref=label)
    terms = _terms_of(task)
    if terms:
        fig(ctx, out, 'pics', F2.icon_cards(title_pics, [(t,) for t in terms], cols=4,
                                            note='Point at the picture. Say the word.'),
            'The same answers as pictures.', xref=label)


def task(out, n, rubric, example=None, how=None):
    out.append(R.rubric('%s  %s' % (n, rubric)))
    if how:
        out.append(R.body(how, after=60))
    if example:
        out.append(R.body('Example:  ' + example, after=100))


def checklist(out, title, lines):
    out.append(R.band_part(title))
    for s in lines:
        out.append(R.bullet(s))


def numbered(out, items, start=1):
    for i, s in enumerate(items):
        out.append(R.item('%d.' % (i + start), s))


def gap_items(out, pairs, key, label):
    for i, (stem, ans) in enumerate(pairs):
        if i == 0:
            out.append(R.item('0.', stem.replace('____________', ans)))
        else:
            out.append(R.item('%d.' % i, stem))
            key.append(('%s %d' % (label, i), ans))


def match_items(out, pairs, key, label):
    left = [a for a, _ in pairs]
    right = shuffled([b for _, b in pairs], label + 'm')
    out.append(R.body('Match 1-%d with a-%s. The answers are not in order.'
                      % (len(pairs), LETTERS[len(pairs) - 1].lower()), after=60))
    for i, a in enumerate(left, 1):
        out.append(R.item('%d.' % i, a))
    for i, b in enumerate(right):
        out.append(R.item('%s.' % LETTERS[i].lower(), b))
    for i, (a, b) in enumerate(pairs, 1):
        key.append(('%s %d' % (label, i), LETTERS[right.index(b)].lower()))


def order_items(out, pairs, key, label):
    """Sequencing: the steps are printed shuffled and numbered by the learner."""
    out.append(R.body('Write 1, 2, 3 \u2026 beside each line, in the order it happens.',
                      after=60))
    shuf = shuffled([a for a, _ in pairs], label + 'o')
    for a in shuf:
        out.append(R.item('____', a))
    for a, b in pairs:
        key.append(('%s %s' % (label, b), a))


def odd_items(out, pairs, key, label):
    """Odd one out: each row is (four words as one string, the odd one)."""
    out.append(R.body('Three of the four belong together. Circle the one that does not, '
                      'and say why.', after=60))
    for i, (row, _odd) in enumerate(pairs, 1):
        out.append(R.item('%d.' % i, row))
    for i, (row, odd) in enumerate(pairs, 1):
        key.append(('%s %d' % (label, i), odd))


def sort_items(out, pairs, key, label, heads=('A', 'B')):
    """Two or more columns: each item is (thing, which column it belongs in)."""
    heads = tuple(heads)
    if len(heads) < 2:
        raise ValueError('a sort needs at least two columns')
    named = '%s or %s' % (', '.join(heads[:-1]), heads[-1])
    out.append(R.body('Write %s beside each one.' % named, after=60))
    for i, (a, _b) in enumerate(shuffled(pairs, label + 's'), 1):
        out.append(R.item('%d.' % i, a))
    order = shuffled(pairs, label + 's')
    for i, (a, b) in enumerate(order, 1):
        key.append(('%s %d' % (label, i), b))


def tf_items(out, pairs, key, label):
    """True or false, and the correction when it is false."""
    out.append(R.body('Write true or false. If it is false, write the correction in six '
                      'words or fewer.', after=60))
    for i, (a, _b) in enumerate(pairs, 1):
        out.append(R.item('%d.' % i, a + '   ____________'))
    for i, (a, b) in enumerate(pairs, 1):
        key.append(('%s %d' % (label, i), b))


def choice_items(out, pairs, key, label):
    """Multiple choice: each item is (stem with a / b / c, the right letter)."""
    out.append(R.body('Circle a, b or c.', after=60))
    for i, (a, _b) in enumerate(pairs, 1):
        out.append(R.item('%d.' % i, a))
    for i, (a, b) in enumerate(pairs, 1):
        key.append(('%s %d' % (label, i), b))


def short_items(out, pairs, key, label):
    for j, (q, a) in enumerate(pairs):
        if j == 0:
            out.append(R.item('0.', q + '   (' + a + ')'))
        else:
            out.append(R.item('%d.' % j, q + '   ____________'))
            key.append(('%s %d' % (label, j), a))


def run_task(ctx, out, key, t, label, bank_title, pic_title):
    """A complete exercise: rubric, example, two visuals, the items."""
    task(out, label, t['rubric'], example=t.get('example'), how=t.get('how'))
    task_visuals(ctx, out, t, label, bank_title, pic_title)
    kind = t.get('kind', 'short')
    if kind == 'match':
        match_items(out, t['pairs'], key, label)
    elif kind == 'gap':
        gap_items(out, t['pairs'], key, label)
    elif kind == 'order':
        order_items(out, t['pairs'], key, label)
    elif kind == 'odd':
        odd_items(out, t['pairs'], key, label)
    elif kind == 'sort':
        sort_items(out, t['pairs'], key, label, t.get('columns', ('A', 'B')))
    elif kind == 'tf':
        tf_items(out, t['pairs'], key, label)
    elif kind == 'choice':
        choice_items(out, t['pairs'], key, label)
    else:
        short_items(out, t['pairs'], key, label)


def _answer_words(*tasks):
    """The words a set of tasks turned on, as a list for the recap cards."""
    got, seen = [], set()
    for t in tasks:
        for term in _terms_of(t or {}):
            k = term.lower()
            if k not in seen and len(term) < 30:
                seen.add(k)
                got.append(term)
    return got[:8]


def _answers_line(*tasks):
    """The words a set of tasks turned on, for a recap line."""
    got, seen = [], set()
    for t in tasks:
        for term in _terms_of(t or {}):
            k = term.lower()
            if k not in seen:
                seen.add(k)
                got.append(term)
    return ', '.join(got[:6])


# ---------------------------------------------------------------- the unit
def unit(ctx, out, key, U, B, cast=None):
    ctx.unit = U['num']
    ctx.figno = 0
    n = U['num']
    cast = cast or {}
    key.append(('UNIT %d' % n, U['title']))

    out.append(R.unit_band(n, U['title']))
    out.append(R.strap(U['strap']))

    out.append(R.band_part('WHAT YOU WILL BE ABLE TO DO'))
    for c in U['can_do']:
        out.append(R.bullet(c))

    # ---- 1 before you start
    out.append(R.band_part('1  ·  BEFORE YOU START'))
    task(out, '1.1', 'Answer these three questions about your own work.',
         how='Work with a partner. Two minutes each.')
    numbered(out, U['warm'])
    fig(ctx, out, 'warm', U['warm_fig'], U['warm_fig_cap'],
        alt=U.get('warm_fig_alt'), xref='1.1')
    if U.get('warm_fig2'):
        fig(ctx, out, 'warm2', U['warm_fig2'], U['warm_fig2_cap'], xref='1.1')
    endpart(ctx, out, 'p1', 'PART 1  ·  WHAT YOU BROUGHT WITH YOU',
            U['p1_recap'], icons=U.get('p1_icons'),
            question=U.get('p1_ask', 'Which of the three questions was hardest '
                           'to answer in English?'),
            xref='1.1', cards=U.get('p1_cards'))

    # ---- 2 preview
    out.append(R.band_part('2  ·  THE WORDS AND THE SENTENCES OF THIS UNIT'))
    out.append(R.readbox(U['preview_intro']))
    fid_set = fig(ctx, out, 'set', F2.set_plate(U['set_fig_title'],
                  [(it['term'], it['definition']) for it in U['set']],
                  note=U.get('set_note', 'Learn these. The rest of the unit uses them.')),
                  U['set_fig_cap'], xref='2.1')
    fig(ctx, out, 'seticons', F2.icon_cards('THE SAME EIGHT, AS PICTURES',
        [(it['term'],) for it in U['set']], cols=4,
        note='Cover the words. Say each one from the picture alone.'),
        'The eight words as pictures, for recall without English on the page.', xref='2.1')
    out.append(R.band_part('THE EIGHT WORDS, IN USE'))
    for it in U['set']:
        out.append(R.termline(it['term'], it['example'], it.get('collocation')))
    fig(ctx, out, 'phr', F2.phrase_box(U['phrase_fig_title'], U['phrases'],
        note=U.get('phrase_note')), U['phrase_fig_cap'], xref='2.2')
    if U.get('receptive'):
        out.append(R.band_part('YOU WILL ALSO MEET  (understand these; you do not have to say them)'))
        fig(ctx, out, 'recep', F2.set_plate(U.get('receptive_fig_title', 'WORDS TO RECOGNISE'),
            [(r['term'], r['definition']) for r in U['receptive']],
            note='You are not tested on saying these.'),
            U.get('receptive_fig_cap', 'The words you need to understand, not produce.'),
            xref='2.2')
    if U.get('morph'):
        fig(ctx, out, 'morph', F2.morph_builder(U['morph_fig_title'], U['morph'],
            note=U.get('morph_note')), U['morph_fig_cap'], xref='2.3')
    run_task(ctx, out, key, U['preview_task'], '2.1',
             'THE ANSWERS, IN NO ORDER', 'THE ANSWERS, AS PICTURES')
    out.append(R.body('Check your answers against %s before you go on.' % fid_set, after=140))
    endpart(ctx, out, 'p2', 'PART 2  ·  THE EIGHT WORDS, AND WHAT THEY SIT IN',
            U['p2_recap'], icons=[it['term'] for it in U['set'][:4]],
            question=U.get('p2_ask'), xref='2.1',
            cards=[it['term'] for it in U['set']])

    # ---- 3 vocabulary
    out.append(R.band_part('3  ·  VOCABULARY'))
    for i, v in enumerate(U['vocab_tasks'], 1):
        run_task(ctx, out, key, v, '3.%d' % i, 'THE WORD BANK', 'THE SAME WORDS, AS PICTURES')
        if v.get('fig'):
            fig(ctx, out, 'v%d' % i, v['fig'], v['fig_cap'], xref='3.%d' % i)
    endpart(ctx, out, 'p3', 'PART 3  ·  THE WORDS, NOW IN YOUR HANDS',
            U['p3_recap'] + ['The words these four tasks turned on: '
                             + _answers_line(*U['vocab_tasks']) + '.'],
            icons=U.get('p3_icons'), question=U.get('p3_ask'), xref='3.1',
            cards=_answer_words(*U['vocab_tasks']))

    # ---- 4 grammar
    out.append(R.band_part('4  ·  GRAMMAR  ·  ' + U['g_point']))
    out.append(R.body('Taken from: ' + U['g_source'], after=100))
    for r in U['g_rule']:
        out.append(R.gram_rule(r))
    fig(ctx, out, 'gmnem', F2.grammar_mnemonic(U['g_mnemonic_title'], U['g_mnemonic'],
        note=U.get('g_mnemonic_note')), U['g_mnemonic_cap'], xref='4.1')
    fig(ctx, out, 'gram', F2.contrast(*U['g_fig']), U['g_fig_cap'], xref='4.1')
    for i, g in enumerate(U['g_tasks'], 1):
        run_task(ctx, out, key, g, '4.%d' % i, 'THE FORMS YOU NEED', 'WHEN YOU USE EACH ONE')
    endpart(ctx, out, 'p4', 'PART 4  ·  THE GRAMMAR, IN ONE PICTURE',
            U['p4_recap'], icons=[c[3] for c in U['g_mnemonic']],
            question=U.get('p4_ask'), xref='4.1',
            cards=[c[0] for c in U['g_mnemonic']])

    # ---- 5 listening
    out.append(R.band_part('5  ·  LISTENING'))
    out.append(R.readbox(U['listen_intro']))
    for i, L in enumerate(U['listening'], 1):
        out.append(R.band_part('5.%d  ·  %s' % (i, L['title'])))
        out.append(R.body('You will hear: %s' % L['what'], after=80))
        spk = L.get('speakers')
        if spk:
            fig(ctx, out, 'lconv%d' % i, F2.conversation(
                L.get('conv_title', 'WHO IS SPEAKING, AND WHAT THEY SAY'),
                _who(cast, spk[0]), _who(cast, spk[1]),
                L['conv_lines'], note=L.get('conv_note')),
                L.get('conv_cap', 'The two speakers, and the shape of what they say.'),
                xref='5.%d' % i)
        if L.get('fig'):
            fig(ctx, out, 'l%d' % i, L['fig'], L['fig_cap'], xref='5.%d' % i)
        for part, letter in [('pre', 'a'), ('while', 'b'), ('post', 'c')]:
            run_task(ctx, out, key, L[part], '5.%d%s' % (i, letter),
                     'THE ANSWERS, IN NO ORDER', 'THE ANSWERS, AS PICTURES')
        endpart(ctx, out, 'p5.%d' % i, 'LISTENING %d  ·  WHAT YOU NOW HAVE' % i,
                [L['point'],
                 'The words this recording turned on: '
                 + _answers_line(L['pre'], L['while'], L['post']) + '.'],
                icons=L.get('icons'),
                question=L.get('ask', DEFAULT_ASK), xref='5.%d' % i,
                cards=_answer_words(L['pre'], L['while'], L['post']))

    # ---- 6 speaking
    out.append(R.band_part('6  ·  SPEAKING'))
    for i, S in enumerate(U['speaking'], 1):
        out.append(R.band_part('6.%d  ·  %s' % (i, S['title'])))
        out.append(R.rubric(S['rubric']))
        out.append(R.body(S['how'], after=100))
        if S.get('conv'):
            fig(ctx, out, 'sconv%d' % i, F2.conversation(
                'THE MODEL, AS IT SOUNDS',
                _who(cast, S['conv'][0]), _who(cast, S['conv'][1]),
                S['conv_lines'], note=S.get('conv_note')),
                'The two speakers and the model exchange.', xref='6.%d' % i)
        out.append(R.band_part('THE MODEL'))
        out.append(R.speak_block(S['model']))
        if S.get('frame'):
            out.append(R.band_part('NOW CHANGE THE WORDS IN BOLD'))
            out.append(R.table_grammar(S['frame']))
            fig(ctx, out, 'sframe%d' % i, F2.mini_table(
                'WHAT TO CHANGE, AND WHAT TO KEEP',
                S['frame'][0], S['frame'][1:]),
                'The substitutions, set out.', xref='6.%d' % i)
        if S.get('cards'):
            for c in S['cards']:
                out.append(R.who_is(c['who'], c['brief']))
        if S.get('fig'):
            fig(ctx, out, 's%d' % i, S['fig'], S['fig_cap'], xref='6.%d' % i)
        checklist(out, 'A GOOD ANSWER HAS', S['checklist'])
        fig(ctx, out, 'scheck%d' % i, F2.icon_cards('CHECK YOURSELF',
            [(c[:30], 'tick') for c in S['checklist']], cols=len(S['checklist']),
            note='Tick each one after you speak.'),
            'The checklist as cards.', xref='6.%d' % i)
        endpart(ctx, out, 'p6.%d' % i, 'ROLE-PLAY %d  ·  WHAT YOU CAN NOW SAY' % i,
                [S['point'], 'A good turn had: ' + '; '.join(S['checklist'][:3]) + '.'],
                icons=S.get('icons'), question=S.get('ask', DEFAULT_ASK),
                xref='6.%d' % i, cards=[c[:28] for c in S['checklist']])

    # ---- 6.4 fluency: the same thing, three times, under a falling clock
    F = U['fluency']
    out.append(R.band_part('6.%d  \u00b7  FLUENCY  \u00b7  %s'
                           % (len(U['speaking']) + 1, F['title'])))
    out.append(R.rubric(F['rubric']))
    out.append(R.body(F['how'], after=80))
    out.append(R.readbox('Four minutes, then three, then two. Say the same thing each '
                         'time, to a different partner. Nothing new goes in. The only '
                         'thing that changes is how fast it comes out.'))
    out.append(R.band_part('WHAT YOU HAVE TO GET THROUGH'))
    for line in F['content']:
        out.append(R.bullet(line))
    fig(ctx, out, 'flu', F2.step_sequence(F['fig_title'],
        ['Four minutes. Say all of it to your first partner.',
         'Three minutes. The same thing, to a second partner.',
         'Two minutes. The same thing again, to a third.',
         'Did you get to the end the third time?'], stop_points=[4],
        note='Nothing may be added between turns. Faster, not longer.'),
        'The falling clock. The content does not change; the time does.',
        xref='6.%d' % (len(U['speaking']) + 1))
    fig(ctx, out, 'flucards', F2.icon_cards('THE WORDS YOU WILL NEED IN ALL THREE TURNS',
        [(w,) for w in F['words']], cols=4,
        note='All of these are from this unit or an earlier one. Nothing here is new.'),
        'The words the three turns run on.', xref='6.%d' % (len(U['speaking']) + 1))
    endpart(ctx, out, 'p6f', 'FLUENCY  \u00b7  WHAT GOT FASTER',
            [F['point'],
             'You said the same thing three times and the third was the shortest. '
             'That is what fluency is: the same language, less time.'],
            icons=F.get('icons'), question=F.get('ask', 'Which part came out fastest '
                                                        'the third time?'),
            xref='6.%d' % (len(U['speaking']) + 1), cards=list(F['words'])[:8])

    # ---- 7 reading
    out.append(R.band_part('7  ·  READING'))
    for i, Rd in enumerate(U['reading'], 1):
        out.append(R.band_part('7.%d  ·  %s' % (i, Rd['title'])))
        p = Rd['pre']
        task(out, '7.%da' % i, p['rubric'], example=p.get('example'), how=p.get('how'))
        numbered(out, p['items'])
        if Rd.get('fig'):
            fig(ctx, out, 'r%d' % i, Rd['fig'], Rd['fig_cap'], xref='7.%d' % i)
        if Rd.get('fig2'):
            fig(ctx, out, 'r%db' % i, Rd['fig2'], Rd['fig2_cap'], xref='7.%d' % i)
        else:
            fig(ctx, out, 'rpre%d' % i, F2.mini_table('BEFORE YOU READ, FIND THESE',
                ['', 'Look for this'],
                [[str(j + 1), q] for j, q in enumerate(p['items'])]),
                'What to look for before you read a word of it.', xref='7.%d' % i)
        for para in Rd['text']:
            out.append(R.readbox(para))
        if Rd.get('source'):
            out.append(R.datapoint('Source', Rd['source'][0], Rd['source'][1]))
        for part, letter in [('while', 'b'), ('post', 'c')]:
            run_task(ctx, out, key, Rd[part], '7.%d%s' % (i, letter),
                     'THE ANSWERS, IN NO ORDER', 'THE ANSWERS, AS PICTURES')
        endpart(ctx, out, 'p7.%d' % i, 'READING %d  ·  WHAT THE TEXT LEFT YOU' % i,
                [Rd['point'],
                 'The words this text turned on: '
                 + _answers_line(Rd['while'], Rd['post']) + '.'],
                icons=Rd.get('icons'), question=Rd.get('ask', DEFAULT_ASK),
                xref='7.%d' % i, cards=_answer_words(Rd['while'], Rd['post']))

    # ---- 8 writing
    out.append(R.band_part('8  ·  WRITING'))
    for i, Wr in enumerate(U['writing'], 1):
        out.append(R.band_part('8.%d  ·  %s' % (i, Wr['title'])))
        out.append(R.rubric(Wr['rubric']))
        out.append(R.body(Wr['how'], after=80))
        if Wr.get('fig'):
            fig(ctx, out, 'w%d' % i, Wr['fig'], Wr['fig_cap'], xref='8.%d' % i)
        fig(ctx, out, 'wsteps%d' % i, F2.mini_table('THE LINES, AND WHAT EACH ONE CARRIES',
            ['Line', 'What goes in it'],
            [[str(j + 1), sc] for j, sc in enumerate(Wr['scaffold'])]),
            'The frame you are going to fill.', xref='8.%d' % i)
        out.append(R.band_part('MODEL'))
        if all(isinstance(x, (tuple, list)) and len(x) == 2 for x in Wr['model']):
            out.append(R.speak_block(Wr['model']))
        else:
            for line in Wr['model']:
                out.append(R.readbox(line))
        out.append(R.band_part('YOUR TURN  ·  FILL THE FRAME'))
        for line in Wr['scaffold']:
            out.append(R.item('', line + '  ' + '_' * 46))
        checklist(out, 'CHECK YOUR OWN WORK', Wr['checklist'])
        fig(ctx, out, 'wcheck%d' % i, F2.icon_cards('CHECK YOUR OWN WORK',
            [(c[:30], 'tick') for c in Wr['checklist']], cols=len(Wr['checklist']),
            note='Tick each one before you hand it in.'),
            'The writing checklist as cards.', xref='8.%d' % i)
        endpart(ctx, out, 'p8.%d' % i, 'WRITING %d  ·  THE SHAPE YOU NOW HAVE' % i,
                [Wr['point'], 'The frame, in order: ' + ' → '.join(Wr['scaffold']) + '.'],
                icons=Wr.get('icons'), question=Wr.get('ask', DEFAULT_ASK),
                xref='8.%d' % i, cards=[c[:28] for c in Wr['checklist']])

    # ---- 9 three cases for discussion
    out.append(R.band_part('9  ·  CASES TO TALK ABOUT'))
    out.append(R.readbox(U['cases_intro']))
    for i, C in enumerate(U['cases'], 1):
        out.append(R.band_part('9.%d  ·  CASE %d  ·  %s' % (i, i, C['title'])))
        for para in C['situation']:
            out.append(R.readbox(para))
        fig(ctx, out, 'case%d' % i, F2.case_panel(
            'CASE %d  ·  %s' % (i, C['title'].upper()),
            [_who(cast, w) for w in C['who']], C['facts'], C['question'],
            note=C.get('note')), C.get('fig_cap', 'Who is in the case, and what is on the record.'),
            xref='9.%d' % i)
        if C.get('fig'):
            fig(ctx, out, 'case%db' % i, C['fig'], C['fig_cap2'], xref='9.%d' % i)
        else:
            # The case's own icons, which the author chose for this case, beat
            # the generic fallback: without them a row of abstract words gets
            # the same speech bubble five times over.
            # Prefer the icon the word itself earns. Fall back to the case's
            # own icons only for a word that would otherwise take the generic
            # speech bubble: an arbitrary picture beside a word claims a
            # relation that is not there, which is worse than a plain one.
            ic = [x for x in C.get('icons', []) if x in F2.ICON_NAMES]
            cards, k = [], 0
            for w in C['words']:
                got = F2.pick_icon(w)
                if got == 'speech' and ic:
                    got = ic[k % len(ic)]
                    k += 1
                cards.append((w, got))
            fig(ctx, out, 'case%db' % i, F2.icon_cards(
                'THE WORDS THIS CASE TURNS ON', cards,
                cols=min(5, len(cards)),
                note='You will need these to say what you think.'),
                'The words the discussion needs.', xref='9.%d' % i)
        out.append(R.rubric('9.%d  Talk about these three questions. Give a reason every time.' % i))
        out.append(R.body(C.get('how', 'In threes. Five minutes. One person writes down what '
                                'the group decides, in one sentence.'), after=80))
        numbered(out, C['questions'])
        out.append(R.langbank('SAY IT LIKE THIS', C['language']))
        if C.get('guidance'):
            g = C['guidance']
            out.append(R.datapoint(g[0], g[1], g[2]))
        endpart(ctx, out, 'p9.%d' % i, 'CASE %d  ·  WHAT THE GROUP DECIDED' % i,
                [C['point'],
                 'The words you needed: ' + ', '.join(C['words'][:6]) + '.'],
                icons=C.get('icons'),
                question=C.get('ask', 'Say your group’s decision in one sentence, '
                                      'and the one fact it rests on.'),
                xref='9.%d' % i, cards=list(C['words'])[:8])

    # ---- 10 review, balanced across the four skills
    out.append(R.band_part('10  ·  REVIEW'))
    out.append(R.readbox(U['review_intro']))
    for i, rv in enumerate(U['review'], 1):
        out.append(R.band_part('10.%d  ·  %s  ·  %s'
                               % (i, rv['skill'].upper(), rv['title'])))
        if rv['skill'] in ('speaking', 'writing'):
            task(out, '10.%d' % i, rv['rubric'], example=rv.get('example'),
                 how=rv.get('how'))
            if rv.get('model'):
                out.append(R.band_part('MODEL'))
                if all(isinstance(x, (tuple, list)) and len(x) == 2
                       for x in rv['model']):
                    # A spoken model: (who, line) pairs, set as a dialogue.
                    out.append(R.speak_block(rv['model']))
                else:
                    for line in rv['model']:
                        out.append(R.readbox(line))
            for line in rv.get('scaffold', []):
                out.append(R.item('', line + '  ' + '_' * 46))
            fig(ctx, out, 'rev%d' % i, rv['fig'], rv['fig_cap'], xref='10.%d' % i)
            fig(ctx, out, 'revp%d' % i, F2.icon_cards('WHAT A GOOD ANSWER HAS',
                [(c[:30], 'tick') for c in rv['checklist']], cols=len(rv['checklist'])),
                'The checklist as cards.', xref='10.%d' % i)
        else:
            run_task(ctx, out, key, rv, '10.%d' % i,
                     'THE ANSWERS, IN NO ORDER', 'THE ANSWERS, AS PICTURES')
            if rv.get('fig'):
                fig(ctx, out, 'rev%d' % i, rv['fig'], rv['fig_cap'], xref='10.%d' % i)
    out.append(R.band_part('CAN YOU DO THESE NOW?'))
    for c in U['can_do']:
        out.append(R.bullet('□   ' + c))
    fig(ctx, out, 'endicons', F2.icon_cards('THE UNIT, AS PICTURES',
        [(it['term'],) for it in U['set']], cols=4,
        note='Cover the words. Say all eight from the pictures.'),
        'The eight words of this unit, one last time.', xref='10')
    fig(ctx, out, 'endsteps', F2.step_sequence(U['end_fig_title'], U['end_fig_steps'],
        note=U.get('end_fig_note')), U['end_fig_cap'], xref='10')
    endpart(ctx, out, 'p10', 'UNIT %d  ·  WHAT YOU TAKE OUT OF IT' % n,
            U['p10_recap'], icons=[it['term'] for it in U['set'][4:8]],
            question=U.get('p10_ask'), xref='10',
            cards=[it['term'] for it in U['set']])
