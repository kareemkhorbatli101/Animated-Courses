# -*- coding: utf-8 -*-
"""Build an IELTS volume.

    python3 book.py 4 [outfile]

One unit is one general theme; one cycle is one sub-topic through all four
skills, carrying its own grammar, vocabulary, expressions and transitions.
The renderer takes the cycle apart in the order the plan fixes - read,
listen, speak, write - because nobody produces a pattern they have not first
processed.
"""
import importlib
import os
import sys

from _base import Doc, D_INDIGO, D_BLUE, D_AMBER, D_TEAL, D_PLUM, D_GREY, D_PERI
import charts
import diagrams
import frames as F

VOLS = {3: dict(units=range(21, 31), level='B1+', band='6.0',
                cefr='B1+', title='Volume 3'),
        4: dict(units=range(31, 41), level='B2', band='6.5',
                cefr='B2', title='Volume 4'),
        5: dict(units=range(41, 51), level='B2+/C1', band='7.0',
                cefr='B2+', title='Volume 5'),
        6: dict(units=range(51, 61), level='C1', band='7.5',
                cefr='C1', title='Volume 6')}

# what the band on the cover is actually for, per volume
BAND_IS_FOR = {
    '6.0': 'which is the score most undergraduate courses and most skilled '
           'visa routes ask for, and the band at which a candidate stops '
           'guessing and starts choosing',
    '6.5': 'which is the score most postgraduate courses ask for, and the '
           'one most candidates miss by half a band in a single section',
    '7.0': 'which is the threshold for professional registration in '
           'medicine, nursing, law and engineering in most English-speaking '
           'countries, and the band at which a candidate has to be right '
           'about hard questions rather than careful about easy ones',
    '7.5': 'which is asked for by a small number of courses and professional '
           'bodies and reached by a small number of candidates, and which is '
           'the point at which preparation stops being the thing holding a '
           'score down',
}
SKILL_COL = {'reading': D_BLUE, 'listening': D_AMBER,
             'speaking': D_TEAL, 'writing': D_PLUM}
STEP = {1: 'See it', 2: 'See it fail', 3: 'With the frame',
        4: 'With a prompt', 5: 'Cold'}


def _figure(d, spec):
    """Render whatever visual a block asked for, from its data."""
    k = spec['kind']
    if k == 'line':
        return d.figure(*charts.line_graph(spec['title'], spec['x'],
                                           spec['series'], spec.get('ylab', ''),
                                           spec.get('sub', '')))
    if k == 'bar':
        return d.figure(*charts.bar_chart(spec['title'], spec['cats'],
                                          spec['series'], spec.get('ylab', ''),
                                          spec.get('sub', '')))
    if k == 'pie':
        return d.figure(*charts.pie_chart(spec['title'], spec['slices'],
                                          spec.get('sub', '')))
    if k == 'table':
        return d.figure(*charts.data_table(spec['title'], spec['headers'],
                                           spec['rows'], spec.get('sub', ''),
                                           spec.get('widths')))
    if k == 'process':
        return d.figure(*diagrams.process_flow(spec['title'], spec['stages'],
                                               spec.get('phases'),
                                               spec.get('sub', '')))
    if k == 'cycle':
        return d.figure(*diagrams.cycle_flow(spec['title'], spec['stages'],
                                             spec.get('sub', '')))
    if k == 'device':
        return d.figure(*diagrams.device_schematic(spec['title'], spec['parts'],
                                                   spec['flows'],
                                                   spec.get('sub', '')))
    if k == 'map':
        return d.figure(*diagrams.site_map(spec['title'], spec['panels'],
                                           spec.get('sub', ''), spec.get('key')))
    raise ValueError('unknown figure kind %r' % k)


def _items(d, items, start, key, skill):
    n = start
    for it in items:
        stem, opts, ans, why = it
        if opts:
            d.mcq(n, stem, opts)
            key.append((n, chr(65 + ans), why))
        else:
            d.item('%d.  ' % n, stem)
            d.lines(1, 520)
            key.append((n, ans, why))
        n += 1
    return n


SPEED = {3: (125, 140), 4: (150, 165), 5: (170, 185), 6: (190, 210)}
_NUM = {3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven'}


def speed_page(d, vol, cfg, units):
    """The reading-speed tracker: a page the student fills in, not reads."""
    lo, hi = SPEED.get(vol, (150, 165))
    ns = [u['n'] for u in units]
    d.unit_title('Your reading speed')
    d.strapline('Volume %s \u00b7 target %d\u2013%d words a minute' % (vol, lo, hi))
    d.cefr('The loop works at a hundred words a minute, which is why this '
           'course never asks you to read faster than you can understand. '
           'What it does ask is that you know your own number, because the '
           'arithmetic of the paper depends on it and almost no candidate '
           'can state it.')
    d.page_break_section()
    d.partbar('How to measure it', 'Once a unit, on the cycle 4 passage',
              'reading')
    # the worked example is set at this volume's own target speed, so the
    # number a student anchors on is the one they are aiming at
    _mid = int(round((lo + hi) / 2.0))
    d.items([
        'Time yourself reading the cycle 4 academic passage once, for '
        'meaning, without answering anything. Stop the clock at the last '
        'word.',
        'The word count is printed in the margin at the end of every '
        'passage in this book.',
        'Words a minute is the word count divided by the minutes taken. '
        '%d words in five minutes is %d \u00f7 5 = %d wpm.'
        % (_mid * 5, _mid * 5, _mid),
        'Write the number in the table below and plot it on the chart. One '
        'point a unit, ten points by the end of the volume.'])
    d.table(['Unit', 'Words', 'Minutes', 'Words a minute'],
            [[str(n), '', '', ''] for n in ns], D_BLUE, [14, 26, 26, 34])
    d.page_break_section()
    d.figure(*F.speed_grid(
        'Your reading speed through this volume',
        'one point per unit, measured on that unit\u2019s own academic passage',
        lo, hi, [str(n) for n in ns], 80, 200,
        'Plot words a minute, not minutes. A flat line across this volume '
        'is a gain, not a plateau: every unit is written denser than the '
        'one before it, so holding your speed steady means you are reading '
        'harder prose at the same rate.'))
    d.body_p('If your line sits below the band, do not try to read faster. '
             'Read the same passage twice on two different days and watch '
             'the second reading: speed at this level comes from '
             'recognising more words without stopping, and that is a '
             'vocabulary gain arriving late, not an effort you can make on '
             'the day.')
    d.body_p('If your line sits above the band and your accuracy is below '
             'seventy per cent, you are skimming and calling it reading. '
             'Slow down to the band and the accuracy will come up; the '
             'arithmetic in unit 40 shows why the extra minutes are '
             'affordable.', i=True)
    d.page_break_section()


def render_cycle(d, U, c, ci, key, nq=1):
    """Render one cycle. `nq` is the unit's running question number, so the
    printed numbers match the Questions 30-35 headings the data carries."""
    d.figure(*F.cycle_bar(ci, c['sub'], c['step'], STEP[c['step']]))

    # ---- reading ----------------------------------------------------------
    for r in c['read']:
        d.figure(*F.skill_bar('reading', ci, r['kind'], r['task']))
        if r.get('skill'):
            d.skillbox(r['skill'][0], r['skill'][1], 'reading')
        if r.get('figure'):
            _figure(d, r['figure'])
        if r.get('figure2'):
            _figure(d, r['figure2'])
        if r.get('figure3'):
            _figure(d, r['figure3'])
        d.passage(r['heading'], r['paras'],
                  sum(len(p.split()) for p in r['paras']))
        d.ex('Exercise  %s' % r['qtype'], 'reading')
        nq = _items(d, r['items'], nq, key.setdefault('reading', []), 'reading')
        d.page_break_section()

    # ---- listening --------------------------------------------------------
    for l in c['listen']:
        d.figure(*F.skill_bar('listening', ci, l['part'], l['task']))
        if l.get('figure'):
            _figure(d, l['figure'])
        if l.get('figure2'):
            _figure(d, l['figure2'])
        if l.get('figure3'):
            _figure(d, l['figure3'])
        if l.get('skill'):
            d.skillbox(l['skill'][0], l['skill'][1], 'listening')
        d.ex('Exercise  %s   The recording is played once.' % l['qtype'],
             'listening')
        nq = _items(d, l['items'], nq, key.setdefault('listening', []),
                    'listening')
        d.body_p('Audio script: at the back of the book. Do not read it '
                 'before you listen.', i=True)
        d.page_break_section()

    # ---- speaking ---------------------------------------------------------
    sp = c['speak']
    d.figure(*F.skill_bar('speaking', ci, sp['part'], sp['focus']))
    d.body_p(sp['intro'])
    if sp.get('cue'):
        d.figure(*F.cue_card(sp['cue'][0], sp['cue'][1]))
    d.ex('Exercise  Answer each question in the shape you have been taught.',
         'speaking')
    d.items(sp['qs'])
    d.figure(*F.answer_shape(sp['shape']))
    d.page_break_section()

    # ---- writing ----------------------------------------------------------
    for w in c['write']:
        lab = {'A': 'Academic', 'GT': 'General Training'}.get(w.get('fork'), '')
        d.figure(*F.skill_bar('writing', ci, w['task'] + (
            '  ·  ' + lab if lab else ''), w['heading']))
        if w.get('figure'):
            _figure(d, w['figure'])
        if w.get('figure2'):
            _figure(d, w['figure2'])
        if w.get('figure3'):
            _figure(d, w['figure3'])
        d.body_p(w['prompt'])
        if w.get('plan'):
            d.figure(*F.outline_frame(w['plan'][0], w['plan'][1]))
        if w.get('model'):
            d.h3('Model answer' if not w.get('plan') else 'How to do it',
                 D_PLUM)
            for p in w['model']:
                d.body_p(p)
        if w.get('notes'):
            d.h3('Why it works', D_PLUM)
            d.bullets(w['notes'])
        if w.get('criterion'):
            d.figure(*F.criterion_tag(w['criterion']))
        d.ex('Now write your own.%s' % w.get('instruct', ''), 'writing')
        d.lines(w.get('lines', 10))
        d.page_break_section()

    # ---- the language this cycle teaches ----------------------------------
    g = c['gram']
    d.partbar('Grammar · cycle %d' % ci, g['point'], 'writing')
    d.body_p(g['explain'])
    d.figure(*F.pattern_box(g['point'], g['examples']))
    d.ex('Exercise  %s' % g['task'], 'writing')
    d.items([q for q, _ in g['items']])
    key.setdefault('grammar', []).extend(
        [('%d.%d' % (ci, i), a, '') for i, (_, a) in enumerate(g['items'], 1)])
    d.h3('Vocabulary from this cycle', D_INDIGO)
    d.wordlist(c['vocab'], 2, D_INDIGO)
    d.h3('Expressions', D_TEAL)
    d.wordlist(c['expr'], 1, D_TEAL)
    d.wordbank('Transitions used in this cycle:', c['trans'], D_PERI)
    d.page_break_section()
    return nq


def render_unit(d, U):
    key = {}
    d.unit_title('Unit %d · %s' % (U['n'], U['theme']))
    d.strapline('IELTS Preparation Course · Volume %s · band %s'
                % (U['vol'], U['band']))
    d.cefr('CEFR %s  ·  Academic and General Training  ·  five cycles'
           % U['level'])
    d.figure(*F.unit_opener(U['n'], U['theme'], [c['sub'] for c in U['cycles']]))
    d.body_p(U['opener'])
    d.page_break_section()
    nq = 1
    for ci, c in enumerate(U['cycles'], 1):
        nq = render_cycle(d, U, c, ci, key, nq)
    t = U['technique']
    d.partbar('Active Reading and Listening', t['title'], 'reading')
    d.body_p(t['body'])
    d.figure(*F.loop_panel(t['panel']))
    d.ex('Exercise  %s' % t['task'], 'reading')
    d.items(t['qs'])
    d.page_break_section()
    o = U['outlining']
    d.partbar('Outlining', o['title'], 'writing')
    d.body_p(o['body'])
    d.figure(*F.outline_frame(o['frame'][0], o['frame'][1]))
    d.ex('Exercise  %s' % o['task'], 'writing')
    d.items(o['qs'])
    key.setdefault('outlining', []).extend(
        [(i, a, '') for i, a in enumerate(o['answers'], 1)])
    d.page_break_section()
    d.partbar('Unit review', 'What this unit taught', 'reading')
    d.h3('Can you do these now?', D_INDIGO)
    d.checkrow(U['candos'])
    d.tip(U['tip'])
    d.page_break_section()
    return key


# ------------------------------------------------------------ front matter --
def front_matter(d, vol, cfg, units):
    band, lvl = cfg['band'], cfg['level']
    strap = ['Reading · Listening · Speaking · Writing',
             'Every task type in the test, five times a unit']
    d.figure(*F.cover_front(vol, 'Units %d–%d' % (units[0]['n'], units[-1]['n']),
                            lvl, band, strap), cover=True)
    d.page_break_section(zero=True)
    d.unit_title('IELTS Preparation Course')
    d.strapline('Volume %s · Units %d–%d · CEFR %s · target band %s'
                % (vol, units[0]['n'], units[-1]['n'], lvl, band))
    d.cefr("Student's Book with Practice Test %s · Academic and General "
           'Training in one book' % vol)
    d.blank()
    d.body_p('This volume prepares candidates for band %s, %s. It carries '
             'both modules, '
             'because Academic and General Training are one test with two '
             'substitutions: Listening and Speaking are identical, the eleven '
             'reading question types are identical, and only Writing Task 1 '
             'genuinely forks.' % (band, BAND_IS_FOR.get(band, 'the band '
                                   'this volume targets')))
    d.body_p('Every unit is one general theme and every cycle is one sub-topic '
             'inside it, taken through all four skills in the order read, '
             'listen, speak, write. Nobody produces a pattern they have not '
             'first processed, which is why cycles 4 and 5 are a writing '
             'lesson wearing a reading lesson’s clothes: you read a claim, '
             'then the objection to it, and are then asked to make the same '
             'move yourself.')
    d.body_p('Grammar, vocabulary, expressions and transitions are taught '
             'inside the cycle that uses them, from that cycle’s own texts. '
             'The lists at the back are revision of what you have met, not a '
             'syllabus to swallow first.')
    d.blank()
    d.keyline('Series', 'IELTS Preparation Course · eight volumes')
    d.keyline('Level', 'CEFR %s · targeting a steady band %s' % (lvl, band))
    d.keyline('Modules', 'Academic and General Training, in one book')
    d.keyline('This volume', 'Units %d–%d, answer key, audio scripts, band '
              'descriptors, glossary' % (units[0]['n'], units[-1]['n']))
    d.page_break_section()

    d.partbar('How to use this book', 'Five cycles, four skills')
    d.body_p('Every unit is built the same way, and every skill runs to five '
             'cycles. Work through a unit in order: the cycles are not '
             'interchangeable, and cycle 5 answers cycle 4.')
    d.figure(*F.loop_panel([
        ('Orient', 'Title, any headings, the first paragraph. Thirty seconds. '
         'You are buying a map, not meaning.'),
        ('Load the questions', 'Read every question for that passage first, '
         'and predict the form of each answer, not its content.'),
        ('The paragraph loop', 'Read one paragraph properly, then close the '
         'questions it answered. Then the next paragraph.')]))
    d.body_p('That method is taught in Listening first, because there you have '
             'no choice: the recording plays once and you cannot scan audio. '
             'Reading is the same problem with the text standing still.')
    d.h3('What the method costs, in minutes', D_INDIGO)
    d.body_p('Academic Reading is three passages, about 2,150 to 2,750 words, '
             '40 questions, 60 minutes, with no transfer time. Orienting three '
             'passages costs 90 seconds and reading their questions costs six '
             'minutes, so the fixed cost of the method is 7.5 minutes.')
    d.table(['Your reading speed', 'Reading the texts', 'Left for 40 questions',
             'Net per question'],
            [['80 words a minute', '27–34 min', '18–26 min', '27–38 s'],
             ['100 words a minute', '21–28 min', '25–31 min', '38–46 s'],
             ['140 words a minute', '15–20 min', '32–38 min', '48–57 s'],
             ['180 words a minute', '12–15 min', '37–41 min', '56–61 s']],
            D_INDIGO, [26, 24, 26, 24])
    d.body_p('Read the last column again: 40 to 60 seconds a question, and that '
             'is net — the reading has already been done. The familiar figure '
             'of ninety seconds a question is gross, and a candidate pacing '
             'against it spends it on question 1.', i=True)
    d.page_break_section()

    d.partbar('The test at a glance', 'What you are preparing for')
    d.table(['Section', 'Shape', 'Timing'],
            [['Listening', '4 parts, 40 questions, both modules identical',
              'about 30 minutes'],
             ['Reading', '40 questions. Academic: 3 long passages. '
              'General Training: 3 sections, the last one long', '60 minutes'],
             ['Writing', 'Task 1 (150 words) and Task 2 (250 words). Task 1 '
              'forks: data for Academic, a letter for General Training',
              '60 minutes'],
             ['Speaking', '3 parts: interview, long turn, discussion',
              '11–14 minutes']], D_INDIGO, [16, 60, 24])
    d.figure(*F.band_scale('band %s' % band,
                           'That is the band most postgraduate entry asks for.'))
    d.h3('The arithmetic that decides your score', D_INDIGO)
    d.body_p('Your overall band is the mean of the four section bands, rounded '
             'to the nearest half. A .25 rounds up to the next half band and a '
             '.75 rounds up to the next whole band. So the section you are '
             'worst at is the one deciding your result, and it is the one '
             'worth your next month.')
    d.table(['Listening', 'Reading', 'Writing', 'Speaking', 'Mean', 'Overall'],
            [['7.5', '7.5', '6.0', '6.5', '6.875', '7.0'],
             ['7.0', '7.0', '6.0', '6.0', '6.5', '6.5'],
             ['8.0', '8.0', '5.5', '6.0', '6.875', '7.0'],
             ['6.5', '6.5', '6.5', '6.5', '6.5', '6.5']],
            D_INDIGO, [16, 16, 16, 16, 18, 18])
    d.body_p('Rows one and three are the same candidate twice: raising reading '
             'from 7.5 to 8.0 bought nothing at all, because writing was the '
             'section holding the average down.', i=True)
    d.page_break_section()

    d.partbar('Study planner', '%d weeks, one unit a week' % (len(units) + 2))
    weeks = [('Week %d' % i, 'Unit %d · %s' % (u['n'], u['theme']),
              'All five cycles, then the unit review')
             for i, u in enumerate(units, 1)]
    weeks.append(('Week %d' % (len(units) + 1),
                  'Review units %d–%d' % (units[0]['n'], units[-1]['n']),
                  'Glossary, grammar reference, expression bank'))
    weeks.append(('Week %d' % (len(units) + 2), 'Practice Test %s' % vol,
                  'Sit it in one sitting, then use the band tables'))
    d.table(['When', 'What', 'Focus'], weeks, D_INDIGO, [16, 44, 40])
    d.page_break_section()
    speed_page(d, vol, cfg, units)


# ------------------------------------------------------------- back matter --
_SPEAK = [
    ('9', 'Answers the question asked, develops it without being asked twice, '
     'and self-corrects without losing the thread.'),
    ('7', 'Answers and supports at length. Hesitates to plan what to say, not '
     'to find the words for it.'),
    ('6', 'Answers and gives a reason. Development is uneven and some answers '
     'stop at one clause.'),
    ('5', 'Answers a near neighbour of the question. Reasons are asserted '
     'rather than given.'),
    ('4', 'Produces words on the topic rather than an answer to the question.'),
]
_WRITE = [
    ('9', 'Every part of the task covered and developed, in the register the '
     'situation asks for, with nothing a reader has to work out.'),
    ('7', 'All parts covered and supported. A clear position held throughout; '
     'occasional slips that do not slow a reader.'),
    ('6', 'All parts covered but one is thin. The position is clear and the '
     'support is general rather than specific.'),
    ('5', 'Parts of the task are missing or the response is partly off the '
     'question asked.'),
    ('4', 'Too little that answers the question to judge the rest.'),
]
_CONV = {'Reading (Academic)': (40, [('9', '39-40'), ('8.5', '37-38'),
         ('8', '35-36'), ('7.5', '33-34'), ('7', '30-32'), ('6.5', '27-29'),
         ('6', '23-26'), ('5.5', '19-22'), ('5', '15-18'), ('4', '10-14')]),
         'Listening': (40, [('9', '39-40'), ('8.5', '37-38'), ('8', '35-36'),
         ('7.5', '32-34'), ('7', '30-31'), ('6.5', '26-29'), ('6', '23-25'),
         ('5.5', '18-22'), ('5', '16-17'), ('4', '10-15')])}


def render_paper(d, P):
    """The volume's timed Reading paper: three passages, forty questions."""
    key = []
    d.unit_title(P['title'])
    d.strapline('Volume %s \u00b7 60 minutes \u00b7 40 questions \u00b7 no extra '
                'transfer time' % P['vol'])
    d.cefr(P['intro'])
    d.page_break_section()
    d.partbar('Before you start',
              '%s rules, and the clock' % _NUM.get(len(P['instruct']), 'The'),
              'reading')
    d.items(P['instruct'])
    d.page_break_section()
    for ps in P['passages']:
        d.figure(*F.skill_bar('reading', ps['no'], ps['kind'],
                              'Timed paper \u00b7 about 20 minutes'))
        d.body_p(ps['blurb'], i=True)
        d.passage(ps['heading'], ps['paras'],
                  sum(len(x.split()) for x in ps['paras']))
        d.ex('Exercise  %s' % ps['qtype'], 'reading')
        _items(d, ps['items'], ps['first'], key, 'reading')
        d.page_break_section()
    return key


def render_lpaper(d, L):
    """The volume's timed Listening paper: four parts, forty questions."""
    key = []
    d.unit_title(L['title'])
    d.strapline('Volume %s \u00b7 four parts \u00b7 40 questions \u00b7 each recording '
                'played once' % L['vol'])
    d.cefr(L['intro'])
    d.page_break_section()
    d.partbar('Before you start',
              '%s rules, and the clock' % _NUM.get(len(L['instruct']), 'The'),
              'listening')
    d.items(L['instruct'])
    d.page_break_section()
    for pt in L['parts']:
        d.figure(*F.skill_bar('listening', pt['no'], pt['part'], pt['task']))
        d.body_p(pt['blurb'], i=True)
        d.ex('Exercise  %s   The recording is played once.' % pt['qtype'],
             'listening')
        _items(d, pt['items'], pt['first'], key, 'listening')
        d.body_p('Audio script: at the back of the book. Do not read it '
                 'before you listen.', i=True)
        d.page_break_section()
    return key


def lpaper_key(d, L, key):
    d.unit_title('Listening Paper \u00b7 answer key')
    d.strapline('Volume %s \u00b7 40 questions' % L['vol'])
    d.cefr('Mark the paper, then read every explanation. On Listening the '
           'explanation matters more than on Reading, because you cannot go '
           'back and look: the only way to learn what you missed is to be '
           'told where it was.')
    d.page_break_section()
    d.keybar('Listening Paper')
    d.keygrid([a for _, a, _ in key], 5)
    for num, ans, why in key:
        if why:
            d.why(num, ans, why)
    d.page_break_section()


def paper_key(d, P, key):
    d.unit_title('Reading Paper \u00b7 answer key')
    d.strapline('Volume %s \u00b7 40 questions \u00b7 mark it before you read the '
                'explanations' % P['vol'])
    d.cefr('Mark the whole paper first and write your raw score out of forty. '
           'Then read every explanation, including those for the questions '
           'you answered correctly, because a right answer reached the wrong '
           'way will not survive the next paper.')
    d.page_break_section()
    d.keybar('Reading Paper \u00b7 Academic')
    d.keygrid([a for _, a, _ in key], 5)
    for num, ans, why in key:
        if why:
            d.why(num, ans, why)
    d.body_p('Use the Reading conversion table earlier in this section to '
             'turn your raw score into an approximate band, and note the '
             'number rather than the band: the number moves sooner.')
    d.page_break_section()


def render_wpaper(d, Wp):
    """The volume's timed Writing paper.

    Both Task 1 forks are printed, because this book carries Academic and
    General Training together; a candidate sits one of them and is told
    which. Nothing is marked for them, so what stands in for an answer key
    is a band descriptor read against a model.
    """
    d.unit_title(Wp['title'])
    d.strapline('Volume %s \u00b7 60 minutes \u00b7 two tasks \u00b7 Task 2 carries '
                'twice the marks' % Wp['vol'])
    d.cefr(Wp['intro'])
    d.page_break_section()
    d.partbar('Before you start',
              '%s rules, and the clock' % _NUM.get(len(Wp['instruct']), 'The'),
              'writing')
    d.items(Wp['instruct'])
    d.page_break_section()
    for t in Wp['tasks']:
        lab = {'A': 'Academic', 'GT': 'General Training'}.get(t.get('fork'),
                                                             '')
        d.figure(*F.skill_bar('writing', t['no'],
                              t['task'] + ('  \u00b7  ' + lab if lab else ''),
                              'Timed paper \u00b7 %s' % t['clock']))
        for f in ('figure', 'figure2', 'figure3'):
            if t.get(f):
                _figure(d, t[f])
        d.body_p(t['prompt'])
        d.ex('Write your answer.%s' % t.get('instruct', ''), 'writing')
        d.lines(t.get('lines', 18))
        d.page_break_section()


def wpaper_key(d, Wp):
    """Not a key: a model at the target band, and how to mark your own."""
    d.unit_title('Writing Paper \u00b7 marking your own')
    d.strapline('Volume %s \u00b7 a model at band %s, and what to compare'
                % (Wp['vol'], Wp['band']))
    d.cefr(Wp['keyintro'])
    d.page_break_section()
    for t in Wp['tasks']:
        lab = {'A': 'Academic', 'GT': 'General Training'}.get(t.get('fork'),
                                                             '')
        d.partbar(t['task'] + ('  \u00b7  ' + lab if lab else ''),
                  t['heading'], 'writing')
        d.h3('A model at band %s' % Wp['band'], D_PLUM)
        for para in t['model']:
            d.body_p(para)
        d.h3('Why it works', D_PLUM)
        d.bullets(t['notes'])
        if t.get('criterion'):
            d.figure(*F.criterion_tag(t['criterion']))
        d.h3('Mark your own against these', D_PLUM)
        d.items(t['checks'])
        d.page_break_section()


def render_spaper(d, Sp):
    """The volume's timed Speaking paper: three parts, 11 to 14 minutes."""
    d.unit_title(Sp['title'])
    d.strapline('Volume %s \u00b7 11 to 14 minutes \u00b7 three parts \u00b7 recorded'
                % Sp['vol'])
    d.cefr(Sp['intro'])
    d.page_break_section()
    d.partbar('Before you start',
              '%s rules, and the clock' % _NUM.get(len(Sp['instruct']), 'The'),
              'speaking')
    d.items(Sp['instruct'])
    d.page_break_section()
    for pt in Sp['parts']:
        d.figure(*F.skill_bar('speaking', pt['no'], pt['part'],
                              'Timed paper \u00b7 %s' % pt['clock']))
        d.body_p(pt['blurb'], i=True)
        if pt.get('cue'):
            d.figure(*F.cue_card(pt['cue'][0], pt['cue'][1]))
        d.ex('Exercise  %s' % pt['task'], 'speaking')
        d.items(pt['qs'])
        d.page_break_section()


def spaper_key(d, Sp):
    """What an examiner is listening for, with an answer at the band."""
    d.unit_title('Speaking Paper \u00b7 marking your own')
    d.strapline('Volume %s \u00b7 what an examiner is listening for' % Sp['vol'])
    d.cefr(Sp['keyintro'])
    d.page_break_section()
    for pt in Sp['parts']:
        d.partbar(pt['part'], pt['focus'], 'speaking')
        d.h3('An answer at band %s' % Sp['band'], D_TEAL)
        d.figure(*F.answer_shape(pt['shape']))
        d.h3('What that answer is doing', D_TEAL)
        d.bullets(pt['notes'])
        d.h3('Listen back to your recording and check', D_TEAL)
        d.items(pt['checks'])
        d.page_break_section()


def back_matter(d, vol, units, ukeys):
    d.unit_title('Answer key')
    d.strapline('Volume %s · Units %d–%d'
                % (vol, units[0]['n'], units[-1]['n']))
    d.cefr('Every wrong option is explained, because a letter on its own '
           'teaches nothing.')
    d.page_break_section()
    for u in units:
        k = ukeys[u['n']]
        d.keybar('Unit %d · %s' % (u['n'], u['theme']))
        for sec, col in (('reading', D_BLUE), ('listening', D_AMBER)):
            if not k.get(sec):
                continue
            d.h3(sec.title(), col)
            d.keygrid([a for _, a, _ in k[sec]], 5)
            for num, ans, why in k[sec]:
                if why:
                    d.why(num, ans, why)
        if k.get('grammar'):
            d.h3('Grammar', D_PLUM)
            for num, ans, _ in k['grammar']:
                d.keyline(str(num), ans)
        if k.get('outlining'):
            d.h3('Outlining', D_PLUM)
            for num, ans, _ in k['outlining']:
                d.keyline(str(num), ans)
        d.body_p('Speaking, the letter and the essay are rated, not marked. '
                 'Use the band descriptors on the next page, and the tables '
                 'after them for Reading and Listening.')
        d.page_break_section()

    d.unit_title('Band descriptors')
    d.strapline('Speaking and Writing · what each band looks like')
    d.cefr('These are written to follow the published assessment criteria — '
           'Task Response, Coherence and Cohesion, Lexical Resource and '
           'Grammatical Range for Writing; Fluency and Coherence, Lexical '
           'Resource, Grammatical Range and Pronunciation for Speaking. They '
           'are a guide to what to fix next, not an official score.')
    d.page_break_section()
    d.partbar('Speaking', 'Fluency and Coherence · Task Response', 'speaking')
    d.body_p('Record yourself. Nobody can rate their own speaking from memory, '
             'and the gap between what you meant to say and what you said is '
             'exactly what the examiner hears.')
    d.table(['Band', 'What it sounds like'], _SPEAK, D_TEAL, [12, 88])
    d.partbar('Writing', 'Task Response · Coherence and Cohesion', 'writing')
    d.table(['Band', 'What it reads like'], _WRITE, D_PLUM, [12, 88])
    d.body_p('Half bands sit between the rows: a 6.5 is a 6 that does the 7 '
             'thing some of the time.', i=True)
    d.page_break_section()

    d.unit_title('Turning a marked section into a band')
    d.strapline('Reading and Listening · approximate conversions')
    d.cefr('Raw-score boundaries move a little from paper to paper, so these '
           'are approximate and are this course’s own. Use them to find your '
           'weakest section and to watch it move, not to predict a result.')
    d.page_break_section()
    for name, (tot, rows) in _CONV.items():
        d.partbar(name, '%d marked questions' % tot,
                  'reading' if 'Reading' in name else 'listening')
        d.table(['Band', 'Marks out of %d' % tot], rows,
                D_BLUE if 'Reading' in name else D_AMBER, [24, 76])
    d.body_p('General Training Reading needs more marks for the same band than '
             'Academic Reading does; the table above is the Academic one.',
             i=True)
    d.h3('Writing and Speaking', D_PLUM)
    d.body_p('These are rated, not marked, so there is no table. Take the band '
             'from the descriptors on the page before this one.')
    d.h3('The overall band', D_INDIGO)
    d.body_p('Add your four section bands, divide by four, and round to the '
             'nearest half. A half band is inside the measurement error of any '
             'test this length, so treat 6.5 and 7.0 on one sitting as the '
             'same result and a whole band across two sittings as real.')
    d.page_break_section()


def audio_scripts(d, vol, units):
    d.unit_title('Audio scripts')
    d.strapline('Volume %s' % vol)
    d.cefr('Read these only after you have listened. A script is a reading '
           'text as well as a record of the audio, and a script you have '
           'already read tests nothing.')
    d.page_break_section()
    for u in units:
        d.keybar('Unit %d · %s' % (u['n'], u['theme']))
        for ci, c in enumerate(u['cycles'], 1):
            for l in c['listen']:
                d.h3('Cycle %d · %s · %s' % (ci, l['part'], l['heading']),
                     D_AMBER)
                d.script(l['script'])
        d.page_break_section()
    try:
        L = importlib.import_module('content.lpaper%s' % vol).LPAPER
    except ModuleNotFoundError:
        return
    d.keybar('Listening Paper')
    for pt in L['parts']:
        d.h3('%s · %s' % (pt['part'], pt['heading']), D_AMBER)
        d.script(pt['script'])
    d.page_break_section()


def glossary(d, vol, units):
    allw = []
    for u in units:
        for c in u['cycles']:
            for w, g in c['vocab']:
                allw.append((w, g, u['n']))
    d.unit_title('Glossary')
    d.strapline('Volume %s · %d entries, defined at CEFR B2'
                % (vol, len(allw)))
    d.cefr('The number after each entry is the unit that taught it. Every one '
           'was taught inside the cycle whose texts use it.')
    d.page_break_section()
    allw.sort(key=lambda r: r[0].lower())
    letter, buf = '', []
    for w, g, n in allw:
        ini = w[0].upper()
        if ini != letter:
            if buf:
                d.wordlist(buf, 1, D_INDIGO)
                buf = []
            d.h3(ini, D_INDIGO)
            letter = ini
        buf.append((w, '%s  (unit %d)' % (g, n)))
    if buf:
        d.wordlist(buf, 1, D_INDIGO)
    d.page_break_section()


def expression_bank(d, vol, units):
    d.unit_title('Expression bank')
    d.strapline('Volume %s · the functional language of these ten units' % vol)
    d.cefr('These are expressions, not templates. If a sentence would fit a '
           'different question unchanged, it is a template and it is costing '
           'you marks on Task Response before the language is even read.')
    d.page_break_section()
    for u in units:
        d.keybar('Unit %d · %s' % (u['n'], u['theme']))
        rows = []
        for c in u['cycles']:
            rows.extend(c['expr'])
        d.wordlist(rows, 1, D_TEAL)
        d.page_break_section()


BLURB_BY_VOL = {
    3: ['The volume for band 6.0 — the score most undergraduate courses and',
        'most skilled visa routes ask for, and the band at which a candidate',
        'stops guessing and starts choosing. Academic and General Training in',
        'one book, because they are one test with two substitutions.'],
    4: ['The volume for band 6.5 — the score most postgraduate courses ask '
        'for,',
        'and the one most candidates miss by half a band in a single section.',
        'Academic and General Training in one book, because they are one test',
        'with two substitutions.'],
    5: ['The volume for band 7.0 — the threshold for professional',
        'registration and for immigration points, and the band at which',
        'being careful stops being enough. Academic and General Training in',
        'one book, because they are one test with two substitutions.'],
    6: ['The last volume, for band 7.5 and above — the top of what',
        'preparation can move. Above this the limit is your English rather',
        'than your technique, and this book says so. Academic and General',
        'Training in one book, because they are one test with two',
        'substitutions.'],
}
BULLETS_BY_VOL = {
    3: ['Every task type, five times in every unit, both modules throughout',
        'Academic passages of 600 to 760 words, at the length of the real '
        'paper',
        'The reading method taught at 125 to 140 words a minute, and measured',
        'Grammar and vocabulary taught inside the cycle whose texts use them',
        'A full timed Reading paper and a full timed Listening paper'],
    4: ['Every task type, five times in every unit, both modules throughout',
        'Academic passages of 620 to 780 words, longer than the real paper',
        'A reading method that states its own cost in minutes, and proves it',
        'Grammar and vocabulary taught inside the cycle whose texts use them',
        'Band descriptors and score tables, with what they can and cannot '
        'tell you'],
    5: ['Every task type, five times in every unit, both modules throughout',
        'Academic passages of 780 to 960 words in eight paragraphs, above '
        'the real paper',
        'The reading method at 170 to 185 words a minute, measured and '
        'plotted',
        'Objections that attack a premise rather than a conclusion, in every '
        'unit',
        'A full timed Reading paper and a full timed Listening paper at '
        'band 7.0'],
    6: ['Every task type, five times in every unit, both modules throughout',
        'Academic passages of 860 to 1,000 words in nine paragraphs, above '
        'the real paper',
        'The reading method at 190 to 210 words a minute, measured and '
        'plotted',
        'Judgement under load: almost every exercise at the last '
        'scaffolding step',
        'All four papers, timed: Reading, Listening, Writing and Speaking'],
}


def build(vol, out=None):
    cfg = VOLS[vol]
    units = []
    for n in cfg['units']:
        try:
            m = importlib.import_module('content.u%02d' % n)
        except ModuleNotFoundError:
            continue          # a volume under construction still builds
        importlib.reload(m)
        units.append(m.UNIT)
    d = Doc('IELTS Preparation Course · Volume %s' % vol,
            'CEFR %s · band %s' % (cfg['level'], cfg['band']))
    front_matter(d, vol, cfg, units)
    ukeys = {}
    for u in units:
        ukeys[u['n']] = render_unit(d, u)
    try:
        pm = importlib.import_module('content.paper%d' % vol)
        importlib.reload(pm)
    except ModuleNotFoundError:
        pm = None
    try:
        lm = importlib.import_module('content.lpaper%d' % vol)
        importlib.reload(lm)
    except ModuleNotFoundError:
        lm = None
    try:
        wm = importlib.import_module('content.wpaper%d' % vol)
        importlib.reload(wm)
    except ModuleNotFoundError:
        wm = None
    try:
        sm = importlib.import_module('content.spaper%d' % vol)
        importlib.reload(sm)
    except ModuleNotFoundError:
        sm = None
    pkey = render_paper(d, pm.PAPER) if pm else None
    lkey = render_lpaper(d, lm.LPAPER) if lm else None
    if wm:
        render_wpaper(d, wm.WPAPER)
    if sm:
        render_spaper(d, sm.SPAPER)
    back_matter(d, vol, units, ukeys)
    if pm:
        paper_key(d, pm.PAPER, pkey)
    if lm:
        lpaper_key(d, lm.LPAPER, lkey)
    if wm:
        wpaper_key(d, wm.WPAPER)
    if sm:
        spaper_key(d, sm.SPAPER)
    audio_scripts(d, vol, units)
    glossary(d, vol, units)
    expression_bank(d, vol, units)
    d.figure(*F.cover_back(vol, BLURB_BY_VOL[vol], BULLETS_BY_VOL[vol],
                           ['%d  %s' % (u['n'], u['theme']) for u in units]),
             cover=True)
    lvl = VOLS[vol]['cefr'].replace('+', 'plus')
    out = out or ('/home/user/Animated-Courses/IELTS_2026_%s_Volume_%d.docx'
                  % (lvl, vol))
    d.save(out)
    return out, len(d.images)


if __name__ == '__main__':
    v = int(sys.argv[1]) if len(sys.argv) > 1 else 4
    p, n = build(v, sys.argv[2] if len(sys.argv) > 2 else None)
    print('wrote', p, os.path.getsize(p), 'bytes,', n, 'images')
