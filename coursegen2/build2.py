# -*- coding: utf-8 -*-
"""Second edition: a unit becomes document XML, its figures and its key.

Two rules this file exists to enforce:
  * every exercise carries two visuals - one that organises information
    (a bank, a table, a grid) and one that pictures it (icons, people, a
    labelled thing);
  * every part ends on a page boundary, with a closing visual where the part
    would otherwise leave a page half empty.
"""
import os, random
import render as R
import art2 as A
import figs2 as F2

LETTERS = 'ABCDEFGH'


class Ctx:
    def __init__(self, media_dir):
        self.media = media_dir
        self.images = []
        self.n = 0
        self.figno = 0
        self.unit = 0
        self.figures = []          # (id, caption, alt, xref)
        self.exercise_figs = {}    # label -> count

    def add(self, p):
        self.n += 1
        rid, arc = 'rIdImg%d' % self.n, 'img%03d.png' % self.n
        self.images.append((rid, p, arc))
        return rid


def fig(ctx, out, tag, built, cap, alt=None, xref=None):
    inner, h, defs = built
    ctx.figno += 1
    fid = 'FIG %d.%d' % (ctx.unit, ctx.figno)
    p = os.path.join(ctx.media, '%s_%02d.png' % (tag, ctx.figno))
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


def endpart(ctx, out, closer=None, cap=None, xref=None):
    """Close a part: an optional filling visual, then a page boundary."""
    if closer is not None:
        fig(ctx, out, 'close', closer, cap or 'A last look before you turn the page.',
            xref=xref)
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
def _terms_of(task):
    """The words an exercise is really about, for the picture visual."""
    got = []
    for a, b in task.get('pairs', []):
        got.append(b if task.get('kind') == 'match' else b)
    out, seen = [], set()
    for g in got:
        g = str(g).strip()
        if 2 < len(g) < 34 and g.lower() not in seen:
            seen.add(g.lower())
            out.append(g)
    return out[:8]


def task_visuals(ctx, out, task, label, title_bank, title_pics, note=None):
    """The bank (organises) and the cards (picture). Both pedagogical."""
    answers = [str(b) for _, b in task.get('pairs', [])]
    if answers:
        bank = shuffled(answers, label)
        rows = [[str(i + 1), v] for i, v in enumerate(bank)]
        fig(ctx, out, 'bank', F2.mini_table(title_bank, ['', 'Use each one once'], rows,
                                            note=note),
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
    else:
        short_items(out, t['pairs'], key, label)


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
    endpart(ctx, out)

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
    endpart(ctx, out)

    # ---- 3 vocabulary
    out.append(R.band_part('3  ·  VOCABULARY'))
    for i, v in enumerate(U['vocab_tasks'], 1):
        run_task(ctx, out, key, v, '3.%d' % i, 'THE WORD BANK', 'THE SAME WORDS, AS PICTURES')
        if v.get('fig'):
            fig(ctx, out, 'v%d' % i, v['fig'], v['fig_cap'], xref='3.%d' % i)
    endpart(ctx, out)

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
    endpart(ctx, out)

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
        endpart(ctx, out)

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
        endpart(ctx, out)

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
        endpart(ctx, out)

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
        endpart(ctx, out)

    # ---- 9 one thing worth knowing
    out.append(R.band_part('9  ·  ONE THING WORTH KNOWING'))
    d = U['data_box']
    out.append(R.readbox(d['text']))
    out.append(R.datapoint(d['label'], d['value'], d['source']))
    fig(ctx, out, 'data', U.get('data_fig') or F2.mini_table(
        'THE FACT, IN ONE LINE', ['', ''], [[d['label'], d['value']]]),
        U.get('data_fig_cap', 'The fact this page turns on.'), xref='9.1')
    fig(ctx, out, 'datapics', F2.icon_cards('WHAT IT COMES DOWN TO',
        [(w, None) for w in U.get('data_icons', ['the record', 'the patient', 'the check'])],
        cols=3, note='Three pictures for one fact.'),
        'The fact, as three pictures.', xref='9.1')
    if U.get('ai_page'):
        a = U['ai_page']
        out.append(R.band_part('9.2  ·  ' + a['title']))
        for line in a['body']:
            out.append(R.readbox(line))
        out.append(R.boundary(a['boundary']))
    endpart(ctx, out)

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
    endpart(ctx, out, F2.step_sequence(U['end_fig_title'], U['end_fig_steps'],
            note=U.get('end_fig_note')), U['end_fig_cap'], xref='10')
