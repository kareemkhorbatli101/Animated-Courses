# -*- coding: utf-8 -*-
"""Second edition: turn a unit spec into document XML, its figures and its key.

Stage order is fixed by DESIGN.md: warm-up, preview, vocabulary, grammar,
listening x3, speaking x3, reading x3, writing x3, extras, review.
"""
import os
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
        self.figures = []      # (id, caption, alt, xref)

    def add(self, p):
        self.n += 1
        rid, arc = 'rIdImg%d' % self.n, 'img%03d.png' % self.n
        self.images.append((rid, p, arc))
        return rid


def fig(ctx, out, tag, built, cap, alt=None, xref=None):
    """built = (svg_inner, height, defs). Numbered FIG unit.sequence."""
    inner, h, defs = built
    ctx.figno += 1
    fid = 'FIG %d.%d' % (ctx.unit, ctx.figno)
    p = os.path.join(ctx.media, '%s_%02d.png' % (tag, ctx.figno))
    A.render2(inner, h, p, defs)
    out.append(R.picture(ctx.add(p), A.W, h, tag))
    out.append(R.caption('%s  %s' % (fid, cap)))
    ctx.figures.append((fid, cap, alt or cap, xref or ''))
    return fid


# ---------------------------------------------------------------- helpers
def task(out, n, rubric, example=None, how=None):
    """Every task: a number, a plain imperative rubric, a worked example."""
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
    """First item worked, the rest open. Answers go to the key."""
    for i, (stem, ans) in enumerate(pairs):
        if i == 0:
            out.append(R.item('0.', stem.replace('____________', ans)))
        else:
            out.append(R.item('%d.' % i, stem))
            key.append(('%s %d' % (label, i), ans))


def match_items(out, pairs, key, label):
    left = [a for a, _ in pairs]
    right = sorted([b for _, b in pairs])
    out.append(R.body('Match 1-%d with a-%s.' % (len(pairs), LETTERS[len(pairs) - 1].lower()),
                      after=60))
    for i, a in enumerate(left, 1):
        out.append(R.item('%d.' % i, a))
    for i, b in enumerate(right):
        out.append(R.item('%s.' % LETTERS[i].lower(), b))
    for i, (a, b) in enumerate(pairs, 1):
        key.append(('%s %d' % (label, i), LETTERS[right.index(b)].lower()))


# ---------------------------------------------------------------- the unit
def unit(ctx, out, key, U, B):
    ctx.unit = U['num']
    ctx.figno = 0
    n = U['num']
    key.append(('UNIT %d' % n, U['title']))

    out.append(R.unit_band(n, U['title']))
    out.append(R.body(U['strap'], after=140))

    out.append(R.band_part('WHAT YOU WILL BE ABLE TO DO'))
    for c in U['can_do']:
        out.append(R.bullet(c))

    # ---- 1 warm-up
    out.append(R.band_part('1  ·  BEFORE YOU START'))
    task(out, '1.1', 'Answer these three questions about your own work.',
         how='Work with a partner. Two minutes each.')
    numbered(out, U['warm'])
    fig(ctx, out, 'warm', U['warm_fig'], U['warm_fig_cap'],
        alt=U.get('warm_fig_alt'), xref='1.1')

    # ---- 2 preview
    out.append(R.pagebreak())
    out.append(R.band_part('2  ·  THE WORDS AND THE SENTENCES OF THIS UNIT'))
    out.append(R.readbox(U['preview_intro']))
    fid_set = fig(ctx, out, 'set', F2.set_plate(U['set_fig_title'],
                  [(it['term'], it['definition']) for it in U['set']],
                  note=U.get('set_note', 'Learn these. The rest of the unit uses them.')),
                  U['set_fig_cap'], xref='2.1')
    out.append(R.band_part('THE EIGHT WORDS, IN USE'))
    for it in U['set']:
        out.append(R.pron(it['term'], it['example']))
        if it.get('collocation'):
            out.append(R.body('   goes with:  ' + it['collocation'], after=60))
    fid_ph = fig(ctx, out, 'phr', F2.phrase_box(U['phrase_fig_title'], U['phrases'],
                 note=U.get('phrase_note')), U['phrase_fig_cap'], xref='2.2')
    if U.get('receptive'):
        out.append(R.band_part('YOU WILL ALSO MEET  (understand these; you do not have to say them)'))
        fig(ctx, out, 'recep', F2.set_plate(U.get('receptive_fig_title', 'WORDS TO RECOGNISE'),
            [(r['term'], r['definition']) for r in U['receptive']],
            note='You will meet these in this unit. You are not tested on saying them.'),
            U.get('receptive_fig_cap', 'The words you need to understand, not produce.'),
            xref='2.2')
    if U.get('morph'):
        fig(ctx, out, 'morph', F2.morph_builder(U['morph_fig_title'], U['morph'],
            note=U.get('morph_note')), U['morph_fig_cap'], xref='2.3')
    t = U['preview_task']
    task(out, '2.1', t['rubric'], example=t.get('example'), how=t.get('how'))
    if t['kind'] == 'match':
        match_items(out, t['pairs'], key, 'U%d 2.1' % n)
    else:
        gap_items(out, t['pairs'], key, 'U%d 2.1' % n)
    out.append(R.body('Check your answers against %s before you go on.' % fid_set, after=140))

    # ---- 3 vocabulary
    out.append(R.band_part('3  ·  VOCABULARY'))
    for i, v in enumerate(U['vocab_tasks'], 1):
        task(out, '3.%d' % i, v['rubric'], example=v.get('example'), how=v.get('how'))
        if v['kind'] == 'match':
            match_items(out, v['pairs'], key, 'U%d 3.%d' % (n, i))
        elif v['kind'] == 'gap':
            gap_items(out, v['pairs'], key, 'U%d 3.%d' % (n, i))
        else:
            for j, (q, a) in enumerate(v['pairs']):
                if j == 0:
                    out.append(R.item('0.', q + '   (' + a + ')'))
                else:
                    out.append(R.item('%d.' % j, q + '   ____________'))
                    key.append(('U%d 3.%d %d' % (n, i, j), a))
        if v.get('fig'):
            fig(ctx, out, 'v%d' % i, v['fig'], v['fig_cap'], xref='3.%d' % i)

    # ---- 4 grammar
    out.append(R.pagebreak())
    out.append(R.band_part('4  ·  GRAMMAR  ·  ' + U['g_point']))
    out.append(R.body('Taken from: ' + U['g_source'], after=100))
    for r in U['g_rule']:
        out.append(R.gram_rule(r))
    fig(ctx, out, 'gram', F2.contrast(*U['g_fig']), U['g_fig_cap'], xref='4.1')
    for i, g in enumerate(U['g_tasks'], 1):
        task(out, '4.%d' % i, g['rubric'], example=g.get('example'), how=g.get('how'))
        if g['kind'] == 'gap':
            gap_items(out, g['pairs'], key, 'U%d 4.%d' % (n, i))
        else:
            for j, (q, a) in enumerate(g['pairs']):
                if j == 0:
                    out.append(R.item('0.', q + '   →  ' + a))
                else:
                    out.append(R.item('%d.' % j, q))
                    key.append(('U%d 4.%d %d' % (n, i, j), a))

    # ---- 5 listening x3
    out.append(R.pagebreak())
    out.append(R.band_part('5  ·  LISTENING'))
    out.append(R.readbox(U['listen_intro']))
    for i, L in enumerate(U['listening'], 1):
        out.append(R.band_part('5.%d  ·  %s' % (i, L['title'])))
        out.append(R.body('You will hear: %s' % L['what'], after=80))
        if L.get('fig'):
            fig(ctx, out, 'l%d' % i, L['fig'], L['fig_cap'], xref='5.%d' % i)
        for part, letter in [('pre', 'a'), ('while', 'b'), ('post', 'c')]:
            p = L[part]
            task(out, '5.%d%s' % (i, letter), p['rubric'],
                 example=p.get('example'), how=p.get('how'))
            if p['kind'] == 'gap':
                gap_items(out, p['pairs'], key, 'U%d 5.%d%s' % (n, i, letter))
            elif p['kind'] == 'match':
                match_items(out, p['pairs'], key, 'U%d 5.%d%s' % (n, i, letter))
            else:
                for j, (q, a) in enumerate(p['pairs']):
                    if j == 0:
                        out.append(R.item('0.', q + '   (' + a + ')'))
                    else:
                        out.append(R.item('%d.' % j, q))
                        key.append(('U%d 5.%d%s %d' % (n, i, letter, j), a))

    # ---- 6 speaking x3
    out.append(R.pagebreak())
    out.append(R.band_part('6  ·  SPEAKING'))
    for i, S in enumerate(U['speaking'], 1):
        out.append(R.band_part('6.%d  ·  %s' % (i, S['title'])))
        out.append(R.rubric(S['rubric']))
        out.append(R.body(S['how'], after=100))
        out.append(R.band_part('THE MODEL'))
        for who, line in S['model']:
            out.append(R.speak(who, line))
        if S.get('frame'):
            out.append(R.band_part('NOW CHANGE THE WORDS IN BOLD'))
            out.append(R.table_grammar(S['frame']))
        if S.get('cards'):
            for c in S['cards']:
                out.append(R.who_is(c['who'], c['brief']))
        if S.get('fig'):
            fig(ctx, out, 's%d' % i, S['fig'], S['fig_cap'], xref='6.%d' % i)
        checklist(out, 'A GOOD ANSWER HAS', S['checklist'])

    # ---- 7 reading x3
    out.append(R.pagebreak())
    out.append(R.band_part('7  ·  READING'))
    for i, Rd in enumerate(U['reading'], 1):
        out.append(R.band_part('7.%d  ·  %s' % (i, Rd['title'])))
        p = Rd['pre']
        task(out, '7.%da' % i, p['rubric'], example=p.get('example'), how=p.get('how'))
        numbered(out, p['items'])
        if Rd.get('fig'):
            fig(ctx, out, 'r%d' % i, Rd['fig'], Rd['fig_cap'], xref='7.%d' % i)
        for para in Rd['text']:
            out.append(R.readbox(para))
        if Rd.get('source'):
            out.append(R.datapoint('Source', Rd['source'][0], Rd['source'][1]))
        for part, letter in [('while', 'b'), ('post', 'c')]:
            q = Rd[part]
            task(out, '7.%d%s' % (i, letter), q['rubric'],
                 example=q.get('example'), how=q.get('how'))
            if q['kind'] == 'gap':
                gap_items(out, q['pairs'], key, 'U%d 7.%d%s' % (n, i, letter))
            elif q['kind'] == 'match':
                match_items(out, q['pairs'], key, 'U%d 7.%d%s' % (n, i, letter))
            else:
                for j, (a, b) in enumerate(q['pairs']):
                    if j == 0:
                        out.append(R.item('0.', a + '   (' + b + ')'))
                    else:
                        out.append(R.item('%d.' % j, a))
                        key.append(('U%d 7.%d%s %d' % (n, i, letter, j), b))

    # ---- 8 writing x3
    out.append(R.pagebreak())
    out.append(R.band_part('8  ·  WRITING'))
    for i, Wr in enumerate(U['writing'], 1):
        out.append(R.band_part('8.%d  ·  %s' % (i, Wr['title'])))
        out.append(R.rubric(Wr['rubric']))
        out.append(R.body(Wr['how'], after=80))
        if Wr.get('fig'):
            fig(ctx, out, 'w%d' % i, Wr['fig'], Wr['fig_cap'], xref='8.%d' % i)
        out.append(R.band_part('MODEL'))
        for line in Wr['model']:
            out.append(R.readbox(line))
        out.append(R.band_part('YOUR TURN  ·  FILL THE FRAME'))
        for line in Wr['scaffold']:
            out.append(R.item('', line + '  ' + '_' * 46))
        checklist(out, 'CHECK YOUR OWN WORK', Wr['checklist'])

    # ---- 9 extras
    out.append(R.pagebreak())
    out.append(R.band_part('9  ·  ONE THING WORTH KNOWING'))
    d = U['data_box']
    out.append(R.readbox(d['text']))
    out.append(R.datapoint(d['label'], d['value'], d['source']))
    if U.get('ai_page'):
        a = U['ai_page']
        out.append(R.band_part('9.2  ·  ' + a['title']))
        for line in a['body']:
            out.append(R.readbox(line))
        out.append(R.boundary(a['boundary']))

    # ---- 10 review
    out.append(R.band_part('10  ·  REVIEW'))
    for i, rv in enumerate(U['review'], 1):
        task(out, '10.%d' % i, rv['rubric'], example=rv.get('example'), how=rv.get('how'))
        if rv['kind'] == 'gap':
            gap_items(out, rv['pairs'], key, 'U%d 10.%d' % (n, i))
        else:
            for j, (q, a) in enumerate(rv['pairs']):
                if j == 0:
                    out.append(R.item('0.', q + '   (' + a + ')'))
                else:
                    out.append(R.item('%d.' % j, q))
                    key.append(('U%d 10.%d %d' % (n, i, j), a))
    out.append(R.band_part('CAN YOU DO THESE NOW?'))
    for c in U['can_do']:
        out.append(R.bullet('□   ' + c))
    fig(ctx, out, 'end', F2.step_sequence(U['end_fig_title'], U['end_fig_steps'],
        note=U.get('end_fig_note')), U['end_fig_cap'], xref='10')
    out.append(R.pagebreak())
