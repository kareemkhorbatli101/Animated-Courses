# -*- coding: utf-8 -*-
"""Turn a unit spec into document XML, its twelve figures, and its answer-key entries."""
import os, render as R

LETTERS = 'ABCDEFGH'


class Ctx:
    def __init__(self, media_dir):
        self.media = media_dir
        self.images = []
        self.n = 0

    def add(self, p):
        self.n += 1
        rid, arc = 'rIdImg%d' % self.n, 'img%03d.png' % self.n
        self.images.append((rid, p, arc))
        return rid


def fig(ctx, out, tag, built, cap):
    import art
    o, h = built
    p = os.path.join(ctx.media, tag + '.png')
    art.render(''.join(o), h, p)
    out.append(R.picture(ctx.add(p), art.W, h, tag))
    if cap:
        out.append(R.caption(cap))


def numbered(out, items, start=1):
    for i, s in enumerate(items):
        out.append(R.item('%d.' % (i + start), s))


def q_open(out, pairs):
    for i, (q, a) in enumerate(pairs):
        if i == 0:
            out.append(R.item('0.', q + '   ', '(%s)' % a))
        else:
            out.append(R.item('%d.' % i, q, '   ____________'))


def q_tf(out, pairs):
    for i, (s, v) in enumerate(pairs):
        out.append(R.item('%d.' % i, s + ('   (%s)' % v if i == 0 else ''),
                          None if i == 0 else '   ____'))


def q_gap(out, pairs):
    for i, (s, a) in enumerate(pairs):
        out.append(R.item('%d.' % i, s.replace('____________', a) if i == 0 else s))


def rebalance(tr, seed):
    """Rotate MCQ options so the correct answer is not always in one position.

    Deterministic: the same spec always yields the same book, so the printed
    exercise and the generated answer key can never drift apart. Two-option
    items that echo their choices inside the stem, e.g. "It ( was / were )",
    have the stem rewritten in the same move, so stem and options stay in
    the same order.
    """
    import random, re
    rnd = random.Random(seed)
    out = []
    for i, (stem, opts, k) in enumerate(tr):
        if i == 0 and len(opts) == 2:   # worked two-option example: leave it alone
            out.append((stem, list(opts), k)); continue
        # Two-option items alternate deterministically: with only two slots a
        # random draw drifts badly over a book, and a learner who always picks
        # the same letter should not score above chance.
        if len(opts) == 2:
            # Place the correct answer in an alternating slot, so that a learner
            # who always picks the same letter scores at chance over a book.
            r = (k - (i + seed // 1000) % 2) % 2
        else:
            # Four-option items cycle the correct slot deterministically, so
            # that A, B, C and D each carry about a quarter of the keys.
            want = (i + seed // 1000 + seed % 1000) % len(opts)
            r = (k - want) % len(opts)
        new = opts[r:] + opts[:r]
        nk = (k - r) % len(opts)
        m = re.search(r'\(\s*([^()/]+?)\s*/\s*([^()/]+?)\s*\)', stem)
        if m and len(opts) == 2:
            a, b = m.group(1), m.group(2)
            if {a, b} == set(opts):
                stem = stem[:m.start()] + '( %s / %s )' % (new[0], new[1]) + stem[m.end():]
            else:
                new, nk = list(opts), k      # stem does not echo the options
        out.append((stem, new, nk))
    return out


def q_mcq(out, tr):
    for i, (stem, opts, k) in enumerate(tr):
        line = '   '.join('%s) %s' % (LETTERS[j], o) for j, o in enumerate(opts))
        out.append(R.item('%d.' % i, stem + '   ' + line + ('   (%s)' % LETTERS[k] if i == 0 else '')))


k_open = lambda p: ' · '.join('%d %s' % (i, a) for i, (q, a) in enumerate(p) if i)
k_tf = lambda p: ' · '.join('%d %s' % (i, v) for i, (s, v) in enumerate(p) if i)
k_gap = lambda p: ' · '.join('%d %s' % (i, a) for i, (s, a) in enumerate(p) if i)
k_mcq = lambda t: ' · '.join('%d %s' % (i, LETTERS[k]) for i, (s, o, k) in enumerate(t) if i)


def build_unit(U, ctx, level, code=None):
    import figs, series
    out, key = [], []
    n = U['num']
    T = lambda tag: 'u%02d_%s' % (n, tag)
    K = lambda part, letter, text: key.append('P%s %s  %s' % (part, letter, text))
    F = lambda i: 'Figure %d.%d · ' % (n, i)

    out.append(R.pagebreak())
    out.append(R.unit_band(n, U['title']))
    out.append(R.body(U['strap'], after=140))
    out.append(R.rubric('Can-Do (by the end of this unit)'))
    for c in U['cando']:
        out.append(R.bullet('I can ' + c))
    out.append(R.blank(100))
    fig(ctx, out, T('f00'), figs.hero(*U['hero']), F(0) + U['hero_cap'])

    # ---------------------------------------------------- 1 warm up and read
    out.append(R.band_part('Part 1  ·  Warm Up and Read'))
    out.append(R.rubric('Warm Up. Think about these questions before you read.'))
    numbered(out, U['warm'])
    out.append(R.rubric('Read.'))
    for p in U['read']:
        out.append(R.readbox(p))
    if U.get('dp1'):
        out.append(R.datapoint(*U['dp1']))
    out.append(R.rubric('A. Comprehension. Answer in your own words. (0 is done.)'))
    q_open(out, U['c_a']); K(1, 'A', k_open(U['c_a']))
    out.append(R.rubric('B. True or false? Write T or F. (0 is done.)'))
    q_tf(out, U['c_b']); K(1, 'B', k_tf(U['c_b']))
    out.append(R.rubric('C. Complete with ONE word from the text. (0 is done for you.)'))
    q_gap(out, U['c_c']); K(1, 'C', k_gap(U['c_c']))
    out.append(R.rubric('D. Choose the best answer.'))
    cd = rebalance(U['c_d'], 1000 * n + 14)
    q_mcq(out, cd); K(1, 'D', k_mcq(cd))
    inst, pairs, cols = U['c_e']
    out.append(R.rubric('E. Classify. ' + inst))
    out.append(R.body('Items:   ' + '    |    '.join(p[0] for p in pairs)))
    _w = [max(6, max(len(w) for w in c.split())) for c in cols]
    _cw = [9000 * x // sum(_w) for x in _w]
    out.append(R.table([cols] + [[''] * len(cols) for _ in range(4)], _cw))
    K(1, 'E', ' · '.join('%s: %s' % (c, ', '.join(p[0] for p in pairs if p[1] == c)) for c in cols))

    # ---------------------------------------------------- 2 vocabulary
    out.append(R.band_part('Part 2  ·  Vocabulary'))
    fig(ctx, out, T('f01'), figs.cards(U['v_fig_title'], U['v_fig']), F(1) + U['v_fig_cap'])
    out.append(R.rubric('Key terms for this unit.'))
    out.append(R.table_vocab(U['vocab']))
    out.append(R.rubric('A. Complete each sentence with a term from the table.'))
    q_gap(out, U['v_a']); K(2, 'A', k_gap(U['v_a']))
    out.append(R.rubric('B. Match the two halves. Write a letter in each gap.'))
    srt = sorted((b for a, b in U['v_b']), key=lambda s: s.lower())
    for i, (a, b) in enumerate(U['v_b']):
        out.append(R.item('%d.' % (i + 1), a + '  ____'))
    out.append(R.body('Endings:   ' + '      '.join('%s) %s' % (LETTERS[j].lower(), e)
                                                    for j, e in enumerate(srt))))
    K(2, 'B', ' · '.join('%d %s' % (i + 1, LETTERS[srt.index(b)].lower())
                              for i, (a, b) in enumerate(U['v_b'])))

    # ---------------------------------------------------- 3 grammar + dialogues
    out.append(R.band_part('Part 3  ·  Grammar and Dialogues'))
    out.append(R.rubric(U['g_title']))
    for L in U['g_rule']:
        out.append(R.gram_rule(L))
    fig(ctx, out, T('f02'), figs.grammar(*U['g_fig']), F(2) + U['g_fig_cap'])
    out.append(R.rubric('A. Complete the sentences. (0 is done for you.)'))
    q_gap(out, U['g_a']); K(3, 'A', k_gap(U['g_a']))
    out.append(R.rubric('B. Choose the correct form.'))
    gb = rebalance(U['g_b'], 1000 * n + 32)
    q_mcq(out, gb); K(3, 'B', k_mcq(gb))
    for d, letter, idx in ((U['d1'], '1', 3), (U['d2'], '2', 4)):
        out.append(R.rubric('Dialogue %s · %s' % (letter, d['title'])))
        fig(ctx, out, T('f0%d' % idx), figs.dialogue(*d['fig']), F(idx) + d['cap'])
        for who, lineB in d['lines']:
            out.append(R.speak(who, lineB))
        out.append(R.rubric('A. Comprehension. Answer in your own words. (0 is done.)'))
        q_open(out, d['a']); K(3, 'D%s A' % letter, k_open(d['a']))
        out.append(R.rubric('B. Complete with ONE word from the dialogue.'))
        q_gap(out, d['b']); K(3, 'D%s B' % letter, k_gap(d['b']))

    # ---------------------------------------------------- 4 speaking
    out.append(R.band_part('Part 4  ·  Speaking'))
    for i, (ttl, lines) in enumerate(U['speak']):
        out.append(R.rubric('%s. %s' % (LETTERS[i], ttl)))
        for L in lines:
            out.append(R.bullet(L))

    # ---------------------------------------------------- 5 extended reading
    out.append(R.band_part('Part 5  ·  Extended Reading'))
    out.append(R.rubric(U['ext_title']))
    fig(ctx, out, T('f05'), U['ext_fig'], F(5) + U['ext_fig_cap'])
    for p in U['ext']:
        out.append(R.readbox(p))
    if U.get('dp2'):
        out.append(R.datapoint(*U['dp2']))
    out.append(R.rubric('A. Answer in your own words. (0 is done.)'))
    q_open(out, U['e_a']); K(5, 'A', k_open(U['e_a']))
    out.append(R.rubric('B. True or false? Write T or F.'))
    q_tf(out, U['e_b']); K(5, 'B', k_tf(U['e_b']))

    # ---------------------------------------------------- 6 guided writing
    out.append(R.band_part('Part 6  ·  Guided Writing'))
    out.append(R.rubric('Model.'))
    out.append(R.readbox(U['w_model']))
    fig(ctx, out, T('f06'), U['w_fig'], F(6) + U['w_fig_cap'])
    out.append(R.rubric('A. Your turn. ' + U['w_task']))
    for L in U['w_steps']:
        out.append(R.bullet(L))
    out.append(R.langbank('Useful language for this task', U['w_bank']))
    out.append(R.rubric('B. Check your writing.'))
    for L in U['w_check']:
        out.append(R.bullet(L))

    # ---------------------------------------------------- 7 working with ai
    out.append(R.band_part('Part 7  ·  Working with AI'))
    out.append(R.rubric(U['t_title']))
    fig(ctx, out, T('f07'), U['t_fig'], F(7) + U['t_fig_cap'])
    for p in U['t_body']:
        out.append(R.body(p))
    out.append(R.langbank('Say it like this', [a + b for a, b in U['t_say']]))
    out.append(R.boundary(U['t_bound']))
    out.append(R.rubric('A. Complete the phrases.'))
    q_gap(out, U['t_a']); K(7, 'A', k_gap(U['t_a']))
    out.append(R.rubric('B. ' + U['t_b_rubric']))
    q_open(out, U['t_b']); K(7, 'B', k_open(U['t_b']))

    # ---------------------------------------------------- 8 case clinic
    C = U['case']
    out.append(R.band_part('Part 8  ·  The Decision Room'))
    out.append(R.rubric(C['title']))
    out.append(R.stage(1, 'The Brief'))
    for p in C['brief']:
        out.append(R.readbox(p))
    out.append(R.stage(2, 'The Evidence'))
    fig(ctx, out, T('f08'), C['exhibit'], F(8) + C['exhibit_cap'])
    out.append(R.body(C['exhibit_note']))
    out.append(R.stage(3, 'The Voices'))
    for name, role, line in C['voices']:
        out.append(R.voice(name, role, line))
    out.append(R.stage(4, 'Your Analysis'))
    fig(ctx, out, T('f09'), figs.ladder('YOUR THINKING, STEP BY STEP', C['steps']),
        F(9) + 'Five steps from the evidence to the decision.')
    out.append(R.rubric('Work through the five steps. (0 is done for you.)'))
    q_open(out, C['analysis']); K(8, 'A', k_open(C['analysis']))
    out.append(R.stage(5, 'The Decision'))
    out.append(R.rubric(C['decision']))
    for L in C['decision_steps']:
        out.append(R.bullet(L))
    out.append(R.langbank('Language bank for the decision', C['bank']))
    out.append(R.outcome(C['outcome']))
    out.append(R.rubric('Now answer.'))
    q_open(out, C['outcome_q']); K(8, 'B', k_open(C['outcome_q']))

    # ---------------------------------------------------- 9 brief lab
    L = U['lab']
    faults = sorted(series.FAULT_OK[code]) if code else list(series.FAULTS)
    out.append(R.band_part('Part 9  \u00B7  The Brief Lab'))
    out.append(R.rubric(L['title']))
    out.append(R.stage(1, 'The Task'))
    for p in L['task']:
        out.append(R.readbox(p))
    out.append(R.stage(2, 'Draft One, As It Was Sent'))
    fig(ctx, out, T('f10'), figs.marked_brief('DRAFT ONE  \u00B7  AS IT WAS SENT',
        L['draft'], L['marks']), F(10) + L['draft_cap'])
    out.append(R.draftbox(L['draft'], L['marks']))
    out.append(R.stage(3, 'What Came Back'))
    fig(ctx, out, T('f11'), figs.brief_vs_output(
        'WHAT WE ASKED FOR, AND WHAT CAME BACK', L['asked'], L['back'], L['gap']),
        F(11) + L['back_cap'])
    out.append(R.body(L['back_note']))
    out.append(R.stage(4, 'The Diagnosis'))
    out.append(R.faultlist(faults, series.FAULT_GRAMMAR))
    out.append(R.rubric('A. Name the fault in each marked span. (0 is done for you.)'))
    q_open(out, L['diagnosis']); K(9, 'A', k_open(L['diagnosis']))
    out.append(R.stage(5, 'Draft Two'))
    out.append(R.rubric('B. Rewrite it. ' + L['rewrite']))
    out.append(R.table([['Line', 'What goes on it']] +
                       [[a, b] for a, b in zip(series.SCAFFOLD, L['scaffold'])],
                       [1700, 7300]))
    out.append(R.langbank('Language bank for draft two', L['bank']))
    out.append(R.rubric('Check your rewrite.'))
    for x in L['check']:
        out.append(R.bullet(x))
    K(9, 'B', 'Model rewrite.  ' + '  |  '.join(
        '%s: %s' % (a, b) for a, b in zip(series.SCAFFOLD, L['model'])))
    out.append(R.costline(L['cost']))

    # ---------------------------------------------------- 10 review
    out.append(R.band_part('Part 10  \u00B7  Six-Skill Review'))
    fig(ctx, out, T('f12'), U['rev_fig'], F(12) + U['rev_fig_cap'])
    rv = U['rev']
    out.append(R.rubric('A. Reading. Choose the best answer.'))
    rr = rebalance(rv['read'], 1000 * n + 91)
    q_mcq(out, rr); K(10, 'A', k_mcq(rr))
    out.append(R.rubric('B. Listening. (Your teacher reads.)'))
    out.append(R.body('[Teacher reads] ' + rv['listen_text']))
    q_gap(out, rv['listen']); K(10, 'B', k_gap(rv['listen']))
    out.append(R.rubric('C. Speaking. Work in pairs.'))
    for L in rv['speak']:
        out.append(R.bullet(L))
    out.append(R.rubric('D. Writing. ' + rv['write']))
    out.append(R.rubric('E. Vocabulary. Complete the sentences.'))
    q_gap(out, rv['vocab']); K(10, 'E', k_gap(rv['vocab']))
    out.append(R.rubric('F. Grammar. Complete the sentences.'))
    q_gap(out, rv['gram']); K(10, 'F', k_gap(rv['gram']))

    # ---------------------------------------------------- 11 can-do
    out.append(R.band_part('Part 11  \u00B7  Can-Do and Foundations')) 
    out.append(R.rubric('A. Can-Do check. Tick what you can do.'))
    for c in U['cando']:
        out.append(R.bullet('I can ' + c + '   □'))
    out.append(R.rubric('B. Foundations for further study.'))
    for L in U['found']:
        out.append(R.bullet(L))
    fig(ctx, out, T('f13'), figs.cando(n, U['title'], U['end_line'], U['end_next']),
        F(13) + 'End of Unit %d.' % n)
    return ''.join(out), key
