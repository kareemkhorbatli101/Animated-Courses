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
import teach
import qtypes as QT
import unitmap as UN

VOLS = {1: dict(units=UN.units(1), level='B1', band='5.0',
                cefr='B1', title='Volume 1'),
        2: dict(units=UN.units(2), level='B1+', band='5.5',
                cefr='B1+', title='Volume 2'),
        3: dict(units=UN.units(3), level='B2', band='6.0',
                cefr='B2', title='Volume 3'),
        4: dict(units=UN.units(4), level='B2', band='6.5',
                cefr='B2', title='Volume 4'),
        5: dict(units=UN.units(5), level='B2+/C1', band='7.0',
                cefr='B2+', title='Volume 5'),
        6: dict(units=UN.units(6), level='C1', band='7.5',
                cefr='C1', title='Volume 6'),
        # The two Foundation books. Their key continues upwards because the
        # key is also the arithmetic that maps a unit module to a book, but
        # they sit BELOW Volume 1 on the ladder, their units print 1-10,
        # and their covers say Foundation rather than Volume.
        7: dict(units=UN.units(7), level='A1-A2', band='below 4.0',
                cefr='A1-A2', title='Foundation 1', label='FOUNDATION 1',
                short='Foundation 1', foundation=True),
        8: dict(units=UN.units(8), level='A2-B1', band='4.0-4.5',
                cefr='A2-B1', title='Foundation 2', label='FOUNDATION 2',
                short='Foundation 2', foundation=True)}


# ---------------------------------------------------------------------------
# The split edition.
#
# Volume 3 measures about 650 pages as one book, which is a book nobody
# carries. Cambridge ships a 250-page Student's Book and puts the rest in a
# workbook; we ship the same content as two half-volumes of about 330 pages
# each, 3A and 3B, and each half carries a complete practice test rather
# than half of one. A practice test with no Writing paper in it is not a
# practice test, which is why 3B has its own Writing and Speaking forms
# instead of inheriting the first book's.
#
# Nothing about the units changes. The split is a packaging decision taken
# in this table and nowhere else, so a teacher who wants the single volume
# still gets it from `book.py 3`.
SPLIT = {
 3: [dict(part='A', units=[21, 22, 23, 24, 25],
          paper=[''], lpaper=[''], wpaper='', spaper='',
          blurb=['The first half of the band-6.0 volume: units 21 to 25,',
                 'education, work, health, climate and data, with a',
                 'complete practice test at the back. Each unit is five',
                 'cycles, each cycle teaches one sub-skill nothing else in',
                 'the series teaches, and every figure on every page has a',
                 'job that is written down.']),
     dict(part='B', units=[26, 27, 28, 29, 30],
          paper=['a'], lpaper=['a'], wpaper='b', spaper='b',
          blurb=['The second half of the band-6.0 volume: units 26 to 30,',
                 'tourism, the built environment, food, information and',
                 'sport, with its own complete practice test - a second',
                 'form of every paper, not the same one again. Finish 3A',
                 'first: the sub-skill syllabus runs across both halves and',
                 'unit 30 answers unit 26.'])],
}

PART_LABEL = None       # set by build() for a half-volume, else None
PART_SPEC = None        # the SPLIT entry in force, for the audio scripts


def vlabel(vol):
    """What this book calls itself: 'Volume 3', 'Volume 3A', 'Foundation 1'."""
    if PART_LABEL:
        return PART_LABEL
    return VOLS[vol].get('short', 'Volume %s' % vol)

# what the band on the cover is actually for, per volume
BAND_IS_FOR = {
    '5.0': 'which is the first score that counts for anything — the entry '
           'requirement for a foundation year, many vocational courses and '
           'several visa routes, and the band at which a candidate stops '
           'being defeated by the paper and starts being beaten by it',
    '5.5': 'which is the commonest band awarded anywhere in the world and '
           'the commonest place to stop, usually because one section is '
           'half a band behind the other three and nobody has said which',
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
    'below 4.0': 'which is not a band anybody asks for, and that is the '
                 'point of this book: it is the one that gets a student to '
                 'the foot of the ladder, where preparation can start to '
                 'mean something',
    '4.0-4.5': 'which is the bridge into the graded course - not yet a '
               'score that opens a door, but the level at which the paper '
               'stops being noise and starts being a test a candidate can '
               'be taught to beat',
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
                                               spec.get('sub', ''),
                                               spec.get('alts', ())))
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
    # The pedagogic family (teach.py). These differ from everything above
    # in one way that matters: their subject is not the data they carry but
    # the thing the learner is meant to be able to do afterwards. gate12
    # checks that each one's `teaches` matches the kind.
    if k == 'scene':
        return d.figure(*teach.scene(spec['title'], spec['cells'],
                                     spec['bank'], spec.get('instr', ''),
                                     spec.get('note', '')))
    if k == 'puzzle':
        return d.figure(*teach.puzzle(spec['title'], spec['question'],
                                      spec['bars'], spec['mark'],
                                      spec.get('ylab', ''),
                                      spec.get('note', '')))
    if k == 'field':
        return d.figure(*teach.field(spec['centre'], spec['branches'],
                                     spec.get('sub', ''),
                                     spec.get('note', '')))
    if k == 'family':
        return d.figure(*teach.family(spec['rows'], spec.get('sub', ''),
                                      spec.get('note', ''),
                                      spec.get('cols', teach.FAMILY_COLS)))
    if k == 'cline':
        return d.figure(*teach.cline(spec['title'], spec['left'],
                                     spec['right'], spec['items'],
                                     spec.get('sub', ''),
                                     spec.get('note', '')))
    if k == 'collocation':
        return d.figure(*teach.collocation(spec['node'], spec['groups'],
                                           spec.get('sub', ''),
                                           spec.get('note', '')))
    if k == 'skeleton':
        return d.figure(*teach.skeleton(spec.get('title', ''),
                                        spec['paras'], spec.get('sub', ''),
                                        spec.get('note', '')))
    if k == 'bridge':
        return d.figure(*teach.bridge(spec['pairs'], spec.get('sub', ''),
                                      spec.get('note', ''),
                                      spec.get('left', 'THE QUESTION SAYS'),
                                      spec.get('right', 'THE TEXT SAYS')))
    if k == 'signpost':
        return d.figure(*teach.signpost(spec['markers'],
                                        spec.get('sub', ''),
                                        spec.get('note', ''),
                                        spec.get('title',
                                                 'Where the text turns')))
    if k == 'anatomy':
        return d.figure(*teach.anatomy(spec['qtype'], spec['stem'],
                                       spec['options'], spec['answer'],
                                       spec['why'], spec.get('trap'),
                                       spec.get('sub', ''),
                                       spec.get('note', '')))
    if k == 'decide':
        return d.figure(*teach.decide(spec['title'], spec['nodes'],
                                      spec.get('sub', ''),
                                      spec.get('note', '')))
    if k == 'listenmap':
        return d.figure(*teach.listenmap(spec['title'], spec['speakers'],
                                         spec['turns'], spec.get('sub', ''),
                                         spec.get('note', '')))
    if k == 'taskread':
        return d.figure(*teach.taskread(spec['prompt'], spec['parts'],
                                        spec.get('misreadings', ()),
                                        spec.get('sub', ''),
                                        spec.get('note', '')))
    if k == 'langbank':
        return d.figure(*teach.langbank(spec['title'], spec['groups'],
                                        spec.get('sub', ''),
                                        spec.get('note', '')))
    if k == 'ladder':
        return d.figure(*teach.ladder(spec['criterion'], spec['rungs'],
                                      spec.get('sub', ''),
                                      spec.get('note', '')))
    if k == 'matrix':
        return d.figure(*teach.matrix(spec['title'], spec['cols'],
                                      spec['rows'], spec['cells'],
                                      spec.get('sub', ''),
                                      spec.get('note', '')))
    if k == 'unitmap':
        return d.figure(*teach.unitmap(spec['n'], spec['theme'],
                                       spec['rows'], spec.get('note', '')))
    if k == 'clock':
        return d.figure(*teach.clock(spec['title'], spec['segments'],
                                     spec.get('speed', ''),
                                     spec.get('note', '')))
    if k == 'tracker':
        return d.figure(*teach.tracker(spec['title'], spec['rows'],
                                       spec['cols'], spec.get('sub', ''),
                                       spec.get('note', '')))
    if k == 'timeline':
        return d.figure(*teach.timeline(spec['title'], spec['events'],
                                        spec.get('sub', ''),
                                        spec.get('note', '')))
    if k == 'route':
        return d.figure(*teach.route(spec['title'], spec['waypoints'],
                                     spec['legs'], spec.get('sub', ''),
                                     spec.get('note', ''),
                                     spec.get('key', ())))
    if k == 'section':
        return d.figure(*teach.section(spec['title'], spec['layers'],
                                       spec.get('sub', ''),
                                       spec.get('note', ''),
                                       spec.get('finds_head',
                                                'What was in it')))
    raise ValueError('unknown figure kind %r' % k)


def _items(d, items, start, key, skill, prefix=''):
    """`prefix` is 'P' for a preview, whose questions are numbered P1, P2,
    P3 and take none of the unit's exam numbers: a preview is a warm-up,
    and numbering it with the exam set would renumber every heading in the
    unit for the sake of three gaps."""
    n = start
    for it in items:
        stem, opts, ans, why = it[0], it[1], it[2], it[3]
        wrongs = it[4] if len(it) > 4 else None
        lab = '%s%d' % (prefix, n)
        if opts:
            d.mcq(lab, stem, opts)
            key.append((lab, chr(65 + ans), why, wrongs, opts))
            if TEACHER:
                _tanswer(d, chr(65 + ans) + '   ' + str(opts[ans]), why,
                         wrongs, opts)
        else:
            d.item('%s.  ' % lab, stem)
            if not TEACHER:
                d.lines(1, 520)
            key.append((lab, ans, why, None, None))
            if TEACHER:
                _tanswer(d, ans, why, None, None)
        n += 1
    return n


def rubric(blk):
    """The exercise line: the task, and the word limit its answers imply.

    Both existed only as pixels before - the task type inside a figure, the
    limit nowhere at all. 918 unit exercises carried no rubric, and the real
    paper never asks a question without one.
    """
    items = blk['items']
    # A block with a lettered bank answers with a letter and shows no
    # options on the item, so those answers are not gaps and the word
    # limit must not be derived from them.
    bank = blk.get('bank')
    gaps = [str(it[2]) for it in items if not it[1]
            and not (bank and len(str(it[2]).strip()) == 1)]
    mc = [it for it in items if it[1]]
    bits = []
    if bank:
        n = len(bank)
        bits.append('Choose the correct letter, A-%s, for each question. '
                    'You may use each letter once only.'
                    % 'ABCDEFGHIJ'[n - 1])
    if mc:
        sizes = {len(it[1]) for it in mc}
        if len(sizes) == 1:
            n = sizes.pop()
            letters = ', '.join('ABCDEFGH'[:n - 1]) + ' or ' + 'ABCDEFGH'[n - 1]
            bits.append('Choose the correct letter, %s.' % letters)
        else:
            bits.append('Choose the correct letter for each question.')
    if gaps:
        words = max(len(a.split()) for a in gaps)
        anynum = any(any(ch.isdigit() for ch in a) for a in gaps)
        allnum = all(any(ch.isdigit() for ch in a) for a in gaps)
        if allnum:
            bits.append('Write A NUMBER for each answer.')
        elif words <= 1:
            bits.append('Write ONE WORD AND/OR A NUMBER for each answer.'
                        if anynum else 'Write ONE WORD ONLY for each answer.')
        else:
            cap = 'TWO' if words <= 2 else 'THREE'
            bits.append('Write NO MORE THAN %s WORDS AND/OR A NUMBER for '
                        'each answer.' % cap if anynum else
                        'Write NO MORE THAN %s WORDS for each answer.' % cap)
    return '  '.join(bits)


SPEED = {1: (100, 120), 2: (110, 130), 3: (125, 140), 4: (150, 165),
         5: (170, 185), 6: (190, 210), 7: (60, 80), 8: (80, 100)}
_NUM = {3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven'}


def speed_page(d, vol, cfg, units):
    """The reading-speed tracker: a page the student fills in, not reads."""
    lo, hi = SPEED.get(vol, (150, 165))
    ns = [u['n'] for u in units]
    d.unit_title('Your reading speed')
    d.strapline('%s \u00b7 target %d\u2013%d words a minute'
                % (vlabel(vol), lo, hi))
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


# ----------------------------------------------- the rebuilt cycle's beats
# Every one of these is optional. A unit written before phase 19 carries
# none of them and renders exactly as it did, which is what lets gate 11
# bind one unit at a time while the other ninety-five wait their turn.

def _figures(d, spec):
    """A block may carry one figure, or a list of them."""
    if isinstance(spec, dict):
        _figure(d, spec)
    elif isinstance(spec, (list, tuple)):
        for f in spec:
            if isinstance(f, dict):
                _figure(d, f)




# ---------------------------------------------------------------------------
# The Teacher's Edition.
#
# Benchmark factor 31 scored 0 against Cambridge's 3. A Teacher's Edition is
# not a second book: it is the same book with three things made visible on
# the page where they are needed - why this cycle exists, what the answers
# are, and what the recording says. A teacher who has to hold three
# documents open has in practice one.
#
# TEACHER is a module flag rather than a parameter threaded through fifteen
# render functions. The alternative was an argument on every one of them,
# and an argument that is False in every call but one is a parameter nobody
# reads. Set it in build() and nowhere else.
TEACHER = False


def _tnotes(d, c, ci):
    """Teacher's Edition only. Why this cycle exists, at the head of it.

    The six fields were written for gate 11, which requires every cycle to
    declare what exam task it serves and why that task needs this
    sub-skill. They were written as an audit trail and they turn out to be
    exactly what a teacher wants at the top of a lesson, which is a happier
    accident than it sounds: a note that had to pass a gate cannot be
    vague.
    """
    n = c.get('notes')
    if not n:
        return
    d.partbar('Teacher\u2019s notes \u00b7 cycle %d' % ci,
              n.get('time', ''), 'writing')
    rows = [['Serves', n.get('serves', '')],
            ['Because', n.get('because', '')],
            ['Sub-skill', n.get('skill', '')],
            ['Evidence', n.get('evidence', '')],
            ['Watch for', n.get('watch', '')]]
    d.table(['', ''], rows, D_PLUM, [14, 86])
    d.body_p('Answers are printed under each question on these pages, and '
             'the audio script follows each listening task. The '
             'Student\u2019s Book has neither.', sz=19, i=True)


def _qa(seq):
    """(stem, answer) from a practice item written either way.

    The exam items in this content are (stem, options, answer, why) and
    the new teaching exercises - the vocabulary work, the Skills builder,
    the extra grammar practice - are mostly (stem, None, answer), because
    writing them in the exam shape keeps one convention in the file. Both
    end with the answer, so take the first and the last and stop caring.
    """
    out = []
    for it in seq or ():
        if isinstance(it, (list, tuple)) and len(it) >= 2:
            out.append((it[0], it[-1]))
        else:
            out.append((it, ''))
    return out


def _tanswer(d, ans, why, wrongs, opts):
    """Teacher's Edition only. The answer, the reason, and the distractors.

    The wrong-option lines were written in phase 8 for the answer key, and
    the key is at the back where nobody reads it until the mark is lost.
    On a teacher's page they belong under the question, because the thing a
    teacher needs at the moment a student says "but B is also true" is the
    sentence that says why B is not.
    """
    d.body_p('   Answer:  %s' % ans, sz=20)
    if why:
        d.body_p('   Why:  %s' % why, sz=19, i=True)
    if wrongs:
        for k in sorted(wrongs):
            d.body_p('   %s:  %s' % ('ABCDEFGH'[k], wrongs[k]), sz=18,
                     i=True)


def _tqa(d, qa):
    """A teaching exercise, with its answers where the edition wants them.

    The vocabulary work, the Skills builder practice and the two grammar
    exercises are all (stem, answer) once _qa has normalised them. The
    Student's Book prints the stems and keys the answers at the back; the
    Teacher's Edition prints the answer in bold after the stem, because a
    teacher checking eight gaps with a class cannot be turning to page 480
    between each one.
    """
    if not TEACHER:
        d.items([q for q, _ in qa])
        return
    for i, (q, a) in enumerate(qa, 1):
        d.item('%d.  ' % i, q)
        if a:
            d.body_p('        %s' % a, sz=20)


def _leadin(d, c, ci):
    """Beat 1. Three or four questions from the learner's own life.

    The audit found 113 of 124 inputs set cold. This is the cheapest half
    of the fix: nobody reads well about something they have not yet
    thought about once.
    """
    lead = c.get('lead')
    if not lead:
        return
    d.partbar('Before you start \u00b7 cycle %d' % ci,
              lead.get('title', 'Think first'), 'reading')
    d.body_p(lead['body'])
    d.ex('Exercise  %s' % lead.get('task', 'Answer these with a partner, '
                                   'or in writing if you are working '
                                   'alone.'), 'reading')
    d.items(lead['qs'])


def _vocabwork(d, c, ci, key):
    """Beat 3. The words the main input needs, before it needs them."""
    vw = c.get('vocabwork')
    if not vw:
        return
    d.partbar('The words first \u00b7 cycle %d' % ci,
              vw.get('title', 'Vocabulary'), 'reading')
    if vw.get('body'):
        d.body_p(vw['body'])
    _figures(d, vw.get('figure'))
    _figures(d, vw.get('figure2'))
    qa = _qa(vw['items'])
    d.ex('Exercise  %s' % vw['task'], 'reading')
    _tqa(d, qa)
    key.setdefault('vocabulary', []).extend(
        [('%d.%d' % (ci, i), a, '') for i, (_, a) in enumerate(qa, 1)])


def _builder(d, c, ci, key):
    """Beat 4, and the reason this whole rebuild exists.

    Benchmark factor 15: Complete IELTS teaches a sub-skill, practises it
    on a short text, and only then sets the exam task. Our cycles went
    straight to the exam task, so a learner answered eight
    matching-headings questions having never been taught to match a
    heading. The practice items here are deliberately NOT in exam format -
    they carry qkind='skill' and the item census excludes them - because
    an exam-format exercise is another test, not a lesson.
    """
    b = c.get('builder')
    if not b:
        return
    d.partbar('Skills builder \u00b7 cycle %d' % ci, b['skill'], 'reading')
    d.body_p(b['explain'])
    _figures(d, b.get('figure'))
    if b.get('worked'):
        d.h3('Worked example', D_BLUE)
        if isinstance(b['worked'], dict):
            _figure(d, b['worked'])
        else:
            for ln in b['worked']:
                d.body_p(ln)
    d.ex('Exercise  %s' % b['task'], 'reading')
    d.cefr('This is not an exam task and it is not marked like one. Do it '
           'to build the habit; the exam task is on the next page.')
    if b.get('bank'):
        d.letterbank(b.get('banklabel', 'Choose from'), b['bank'], D_BLUE)
    qa = _qa(b['items'])
    _tqa(d, qa)
    key.setdefault('skills', []).extend(
        [('%d.%d' % (ci, i), a, '') for i, (_, a) in enumerate(qa, 1)])


def _advice(d, c):
    """Beat 6. Forty words on what the examiner rewards here."""
    if c.get('advice'):
        d.watchout(c['advice'])


def _debrief(d, c, skill):
    """Beat 7. Why the wrong answers were tempting.

    The wrong-option lines were written in phase 8 and have been sitting in
    the answer key, where nobody reads them until after they have lost the
    mark. This brings the reasoning forward onto the page, while the
    learner still remembers which one tempted them.

    Keyed by skill at cycle level rather than hung on each block: a cycle
    has one exam reading and one or two exam listenings, and a debrief per
    block would be four of them a cycle and twenty a unit.
    """
    db = (c.get('debrief') or {}).get(skill)
    if db:
        d.h3('Why the other answers looked right', D_BLUE)
        d.bullets(db)


def _outside(d, c):
    """Beat 8. One line on a life that is not an exam.

    Benchmark factor 51. The test is a proxy for something, and a learner
    who is told what the proxy is for works differently from one who is
    being drilled.
    """
    if c.get('outside'):
        d.tip('Outside the exam \u00b7 ' + c['outside'])

def render_cycle(d, U, c, ci, key, nq=1):
    """Render one cycle. `nq` is the unit's running question number, so the
    printed numbers match the Questions 30-35 headings the data carries."""
    d.figure(*F.cycle_bar(ci, c['sub'], c['step'], STEP[c['step']]))

    # The rebuilt cycle runs lead-in, preview input, vocabulary, Skills
    # builder, and only then the exam task. A cycle written before phase 19
    # has none of the first four and starts where it always did.
    if TEACHER:
        _tnotes(d, c, ci)
    _leadin(d, c, ci)
    previews = [b for b in c['read'] if b.get('preview')]
    previews += [b for b in c['listen'] if b.get('preview')]
    for b in previews:
        skill = 'reading' if b in c['read'] else 'listening'
        d.figure(*F.skill_bar(skill, ci,
                              b.get('kind') or b.get('part', ''),
                              'Preview \u00b7 ' + QT.bar_label(
                                  b, 'read' if skill == 'reading'
                                  else 'listen')))
        d.cefr(b.get('why', 'A short text on the same subject as the long '
                      'one, to meet the idea and some of the words before '
                      'the exam task asks you to use them.'))
        _figures(d, b.get('figure'))
        if skill == 'reading':
            d.passage(b['heading'], b['paras'],
                      sum(len(p.split()) for p in b['paras']))
        else:
            d.body_p('Listen once. You will hear it again after the exam '
                     'task if you want it.', i=True)
        d.ex('Exercise  %s' % b['task'], skill)
        if b.get('bank'):
            d.letterbank(b.get('banklabel', 'Choose from'), b['bank'],
                         D_BLUE if skill == 'reading' else D_AMBER)
        _items(d, b['items'], 1, key.setdefault('preview', []), skill,
               prefix='P')
        d.page_break_section()
    _vocabwork(d, c, ci, key)
    _builder(d, c, ci, key)
    if c.get('figures'):
        _figures(d, c['figures'])

    # ---- reading ----------------------------------------------------------
    for r in [b for b in c['read'] if not b.get('preview')]:
        d.figure(*F.skill_bar('reading', ci, r['kind'],
                               QT.bar_label(r, 'read')))
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
        d.ex('Exercise  %s \u00b7 %s' % (r['qtype'], r['task']), 'reading')
        d.cefr(rubric(r))
        if r.get('bank'):
            d.letterbank(r.get('banklabel', 'Choose from'), r['bank'],
                         D_BLUE)
        _advice(d, c)
        nq = _items(d, r['items'], nq, key.setdefault('reading', []), 'reading')
        _debrief(d, c, 'read')
        d.page_break_section()

    # ---- listening --------------------------------------------------------
    for l in [b for b in c['listen'] if not b.get('preview')]:
        d.figure(*F.skill_bar('listening', ci, l['part'],
                               QT.bar_label(l, 'listen')))
        if l.get('figure'):
            _figure(d, l['figure'])
        if l.get('figure2'):
            _figure(d, l['figure2'])
        if l.get('figure3'):
            _figure(d, l['figure3'])
        if l.get('skill'):
            d.skillbox(l['skill'][0], l['skill'][1], 'listening')
        d.ex('Exercise  %s \u00b7 %s   The recording is played once.'
             % (l['qtype'], l['task']),
             'listening')
        d.cefr(rubric(l))
        if l.get('bank'):
            d.letterbank(l.get('banklabel', 'Choose from'), l['bank'],
                         D_AMBER)
        nq = _items(d, l['items'], nq, key.setdefault('listening', []),
                    'listening')
        _debrief(d, c, 'listen')
        if TEACHER:
            d.h3('Audio script', D_AMBER)
            d.script(l['script'])
        else:
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
    # The three parts of the speaking strand. One unit carries one long-turn
    # model, one Part 3 exchange and one sounds page, so these fire on the
    # cycle that holds them and are silent on the other four.
    if sp.get('longturn'):
        d.h3('The long turn, modelled  \u00b7  %d words, about two minutes'
             % sum(len(x.split()) for x in sp['longturn']), D_TEAL)
        d.body_p('Read it aloud once against the clock. Then cover it, '
                 'start again from the cue card, and keep going until the '
                 'two minutes are up. The point is not to memorise this '
                 'answer; it is to hear how long two minutes actually is.',
                 i=True)
        for ln in sp['longturn']:
            d.body_p(ln)
    if sp.get('followup'):
        d.h3('Part 3  \u00b7  the follow-up, and an answer that earns the '
             'next one', D_TEAL)
        d.script([t for q, a in sp['followup']
                  for t in (('Examiner', q), ('Candidate', a))])
    if sp.get('sounds'):
        d.skillbox('Pronunciation and fluency', sp['sounds'], 'speaking')
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
        # The second model: the same question answered at a band a B2
        # student can reach this month. The models in this series are
        # measurably PLAINER than the passages around them, so what is out
        # of reach is not the vocabulary but the control, and naming the
        # moves the lower answer does not make is the only way to show it.
        if w.get('model65'):
            d.h3('The same question at band 6.5', D_PLUM)
            d.cefr('This answer would be marked around 6.5. It is not a bad '
                   'answer. Read it before the one above, and then read the '
                   'list underneath.')
            for p in w['model65']:
                d.body_p(p)
        if w.get('gap65'):
            d.h3('What the band 9 answer does that this one does not',
                 D_PLUM)
            d.bullets(w['gap65'])
        if w.get('criterion'):
            d.figure(*F.criterion_tag(w['criterion']))
        d.ex('Now write your own.%s' % w.get('instruct', ''), 'writing')
        d.lines(w.get('lines', 10))
        d.page_break_section()

    # ---- the language this cycle teaches ----------------------------------
    g = c['gram']
    d.partbar('Grammar · cycle %d' % ci, g['point'], 'writing')
    # In context, then noticed, then explained, then practised three times.
    # The old slot was explanation (61 words on average) straight to six
    # test items, with no text the structure had come out of and nothing
    # between the pattern and the test.
    if g.get('context'):
        d.h3('In context', D_PLUM)
        d.cefr('This is from the passage or the recording you have just '
               'met. Read it before you read anything about it.')
        for para in g['context']:
            d.body_p(para)
    if g.get('notice'):
        d.ex('Exercise  %s' % g.get('noticetask',
                                    'Answer these from the text above. '
                                    'Neither can be answered without '
                                    'seeing the structure.'), 'writing')
        nqa = _qa(g['notice'])
        _tqa(d, nqa)
        key.setdefault('grammar', []).extend(
            [('%d.n%d' % (ci, i), a, '') for i, (_, a) in
             enumerate(nqa, 1)])
    d.body_p(g['explain'])
    d.figure(*F.pattern_box(g['point'], g['examples']))
    if g.get('contrast'):
        d.watchout(g['contrast'])
    d.ex('Exercise  %s' % g['task'], 'writing')
    _tqa(d, _qa(g['items']))
    # Two more exercises: controlled production, then a short free
    # production tied to this unit's own topic. Recognition alone does not
    # become use.
    for extra, head in ((g.get('items2'), g.get('task2')),
                        (g.get('items3'), g.get('task3'))):
        if not extra:
            continue
        d.ex('Exercise  %s' % head, 'writing')
        if isinstance(extra, int):
            d.lines(extra)
        else:
            xqa = _qa(extra)
            _tqa(d, xqa)
            key.setdefault('grammar', []).extend(
                [('%d.x%d' % (ci, i), a, '') for i, (_, a) in
                 enumerate(xqa, 1)])
    if g.get('ref'):
        d.body_p('\u2192 Language reference, entry %s, at the back of this '
                 'book: the full pattern, the three mistakes people make '
                 'with it at this band, and eight more questions with '
                 'answers.' % g['ref'], i=True)
    # Error correction. The paragraph is written at about band 6 and has
    # three faults in it. Finding somebody else's error is the step between
    # knowing the rule and using it, and it is the exercise this series had
    # no form of at all.
    if g.get('fix'):
        d.h3('Find the fault', D_PLUM)
        d.cefr('Three things in this paragraph would cost a mark. Find them '
               'before you read the table.')
        d.faultline(g['fix']['text'], g['fix']['faults'])
    key.setdefault('grammar', []).extend(
        [('%d.%d' % (ci, i), a, '') for i, (_, a) in enumerate(g['items'], 1)])
    _outside(d, c)
    d.h3('Vocabulary from this cycle', D_INDIGO)
    d.wordlist(c['vocab'], 2, D_INDIGO)
    if c.get('recycled'):
        d.wordbank('Met again from earlier in this book:', c['recycled'],
                   D_TEAL)
    d.h3('Expressions', D_TEAL)
    d.wordlist(c['expr'], 1, D_TEAL)
    d.wordbank('Transitions used in this cycle:', c['trans'], D_PERI)
    d.page_break_section()
    return nq


def render_unit(d, U):
    key = {}
    d.unit_title('Unit %d · %s' % (U['n'], U['theme']))
    d.strapline('IELTS Preparation Course · %s · band %s'
                % (U['vol'], U['band']))
    d.cefr('CEFR %s  ·  Academic and General Training  ·  five cycles'
           % U['level'])
    d.figure(*F.unit_opener(U['n'], U['theme'], [c['sub'] for c in U['cycles']]))
    d.body_p(U['opener'])
    # The unit opener, rebuilt: what is in the unit, something to name
    # before anything is read, and one number worth being curious about.
    # A reader could previously not see what was in front of them at all -
    # there is no contents page in any of the eight books, and no unit in
    # the series says what it contains.
    if U.get('unitmap'):
        _figure(d, U['unitmap'])
    if U.get('scene'):
        d.partbar('Before the unit', 'What is in this picture', 'reading')
        d.body_p(U.get('sceneintro',
                       'Eight things, and the words for them. You will '
                       'meet every one of these words in the next five '
                       'cycles, so two minutes here saves ten later.'))
        _figure(d, U['scene'])
        if U['scene'].get('answers'):
            key.setdefault('opener', []).extend(
                [(i, a, '') for i, a in
                 enumerate(U['scene']['answers'], 1)])
    if U.get('puzzle'):
        _figure(d, U['puzzle'])
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
def _cycle_types(c, skill):
    """The official task types a cycle's exam blocks hold, previews aside.

    A preview is ninety seconds of orientation addressed P1-P3 and is not a
    task type the contents should promise: a learner who looks up matching
    headings and is sent to a three-question warm-up has been misled by
    their own book.
    """
    out = []
    for b in c.get('read' if skill == 'read' else 'listen') or []:
        if not isinstance(b, dict) or b.get('preview'):
            continue
        for t in QT.types_of(b, skill):
            if t not in out:
                out.append(t)
    return out


DIAG_VOLS = {3}          # volumes whose diagnostic has been written


def contents(d, vol, units):
    """Three ways into the same ten units.

    Benchmark factor 11. Cambridge gives one contents table and we gave
    none; one is not enough for a book a teacher plans from. A teacher
    looking for Thursday's lesson wants the unit list. A teacher whose
    class cannot do matching headings wants the task list. A teacher whose
    class cannot do the passive wants the language list. The same fifty
    cycles, indexed three ways, and all three generated from the content so
    none of them can drift from it.
    """
    gram = {}
    for u in units:
        for ci, c in enumerate(u['cycles'], 1):
            ref = (c.get('gram') or {}).get('ref')
            if ref:
                gram.setdefault(ref, []).append((u['n'], ci))

    # A volume whose units have not been rebuilt has no Skills builder and
    # no reference pointer, so the table drops those two columns rather
    # than printing ten pages of em dashes.
    rebuilt = any(c.get('builder') for u in units for c in u['cycles'])
    d.unit_title('Contents')
    d.strapline('%s · by unit' % vlabel(vol))
    if rebuilt:
        d.cefr('Ten units, five cycles each. The sub-skill column is what '
               'the Skills builder teaches in that cycle: no sub-skill is '
               'taught twice in this volume, which is the difference '
               'between a syllabus and a sequence.')
    else:
        d.cefr('Ten units, five cycles each, taken through all four skills '
               'in the order read, listen, speak, write.')
    d.page_break_section()
    for u in units:
        d.keybar('Unit %d · %s' % (u['n'], u['theme']))
        rows = []
        for ci, c in enumerate(u['cycles'], 1):
            rt = ', '.join(_cycle_types(c, 'read')) or '—'
            lt = ', '.join(_cycle_types(c, 'listen')) or '—'
            if rebuilt:
                sk = (c.get('builder') or {}).get('skill', '')
                rows.append([str(ci),
                             (c.get('notes') or {}).get('skill', sk) or sk,
                             rt, lt,
                             (c.get('gram') or {}).get('ref', '—')])
            else:
                rows.append([str(ci), rt, lt])
        if rebuilt:
            d.table(['Cycle', 'Sub-skill taught', 'Reading tasks',
                     'Listening tasks', 'Lang'], rows, D_INDIGO,
                    [7, 31, 27, 27, 8])
        else:
            d.table(['Cycle', 'Reading tasks', 'Listening tasks'],
                    rows, D_INDIGO, [9, 45, 46])
    d.page_break_section()

    # ----------------------------------------------------------- by task
    d.unit_title('Contents by exam task')
    d.strapline('%s · every question type, and where it is taught' % vlabel(vol))
    d.cefr('Find the task your class cannot do, and this table says which '
           'cycles teach it. Read 23.4 as unit 23, cycle 4. A type with one '
           'entry is a type this volume meets once; the distribution gate '
           'keeps every type above its floor and below its ceiling, so a '
           'short row here is a deliberate decision rather than an '
           'oversight.')
    d.page_break_section()
    for label, skill, names, col in (
            ('Reading', 'read', QT.READING, D_BLUE),
            ('Listening', 'listen', QT.LISTENING, D_AMBER)):
        d.partbar(label, '%d official task types' % len(names),
                  'reading' if skill == 'read' else 'listening')
        rows = []
        for t in names:
            where = []
            for u in units:
                for ci, c in enumerate(u['cycles'], 1):
                    if t in _cycle_types(c, skill):
                        where.append('%d.%d' % (u['n'], ci))
            rows.append([t, '%d' % len(where), ', '.join(where) or '—'])
        d.table(['Task type', 'Cycles', 'Where'], rows, col, [30, 9, 61])
    d.page_break_section()

    # ------------------------------------------------------- by language
    if not gram:
        return
    d.unit_title('Contents by language')
    d.strapline('%s · the grammar syllabus, and the reference it points at'
                % vlabel(vol))
    d.cefr('Every cycle teaches one grammar point from its own texts and '
           'ends with a pointer to the Language reference at the back. This '
           'table reads the pointers the other way round: find the '
           'structure, and it tells you which cycle teaches it and which '
           'entry carries the full pattern.')
    d.page_break_section()
    try:
        R = importlib.import_module('content.refs')
        importlib.reload(R)
        LANG = R.LANG
    except ModuleNotFoundError:
        LANG = {}
    rows = []
    for key in sorted(gram, key=_refkey):
        e = LANG.get(key) or {}
        rows.append([key, e.get('title', '—'),
                     ', '.join('%d.%d' % w for w in gram[key])])
    d.table(['Entry', 'Structure', 'Taught in'], rows, D_PLUM, [9, 46, 45])
    d.body_p('The Writing and Speaking references at the back are not keyed '
             'to single cycles, because they describe the tasks rather than '
             'points of grammar: every writing cycle in the book uses all '
             'six writing entries.', i=True)
    d.page_break_section()


# The diagnostic. Benchmark factor 9 scored 0: Complete IELTS opens with an
# entry test that sends a learner to the units they need. Ours asks twenty
# questions, one per pair of cycles, and every question names the cycle
# that teaches what it tests - so a wrong answer is a reading instruction
# rather than a score.
#
# The questions are written against this volume's own content, which is why
# they live here and not in a content module: they are a map of the book,
# and a map that can fall out of step with the territory is worse than no
# map. Each entry is (question, options, answer index, the cycle it sends
# you to, what that cycle teaches).
_DIAG_R = [
 ('A passage says: “The scheme was adopted in 1994, though the evidence '
  'for it was not published until 1996.” The statement to judge is: The '
  'evidence was published before the scheme was adopted. The answer is:',
  ['True', 'False', 'Not Given'], 1, '21.1',
  'True/False/Not Given, and why False is not Not Given'),
 ('Four paragraphs mention cost. The question asks which paragraph '
  'contains “a comparison of two costs”. Your first move is to:',
  ['read all four paragraphs properly',
   'find the paragraph with two figures in one sentence',
   'choose the paragraph where cost appears most often'], 1, '22.3',
  'matching information: the question wording is the search key'),
 ('A heading reads “The consequences of the change”. The paragraph you '
  'should give it:',
  ['describes how the change was arranged',
   'has people doing things in the past tense',
   'is the longest paragraph about the change'], 1, '30.4',
  'matching headings: telling an incentive from its consequence'),
 ('Two options are both true according to the passage. The correct one is:',
  ['the one that appears first',
   'the one that answers the question actually asked',
   'the longer of the two'], 1, '30.1',
  'multiple choice when two options are both true'),
 ('The statement to judge contains the word “all”. In the passage the '
  'writer says “most”. The answer is:',
  ['Yes', 'No', 'Not Given'], 1, '25.5',
  'scope words, and the band they cost'),
 ('A sentence-completion gap reads “The committee asked for a '
  '____________ before approving the plan.” Before looking, you should '
  'decide:',
  ['what the answer means', 'what part of speech the answer must be',
   'how many words are allowed only'], 1, '21.3',
  'sentence completion by word class'),
 ('A matching-features question gives five researchers and eight '
  'statements. The fastest route is to:',
  ['read the statements, then scan for the names',
   'read the passage and remember who said what',
   'read the names, then scan for each in turn'], 0, '23.2',
  'matching features: who said it, and the reported voice'),
 ('The passage says a finding “has not replicated”. A statement says the '
  'finding is false. The answer is:',
  ['Yes', 'No', 'Not Given'], 1, '29.4',
  'the difference between unsupported and disproved'),
 ('You have twenty minutes left and eighteen questions. You should:',
  ['read the remaining passage properly, then answer',
   'load the questions, then read one paragraph at a time',
   'guess the remaining answers and check the earlier ones'], 1, '24.1',
  'reading one detail against the clock'),
 ('A short-answer question says NO MORE THAN THREE WORDS. Your answer is '
  '“in the second half of the century”. You should:',
  ['write it as it is', 'cut it to three words from the passage',
   'write a paraphrase of three words'], 1, '27.3',
  'short answer, and why a paraphrase is marked wrong'),
]

_DIAG_L = [
 ('A speaker says “I was going to say eighty, but it is nearer ninety.” '
  'The answer is:', ['eighty', 'ninety', 'both'], 1, '22.2',
  'self-correction in Part 1 and Part 2'),
 ('Two speakers disagree. The question asks what the man thinks. You '
  'should listen for:', ['the first opinion given',
   'the opinion after “actually” or “well”, which is usually his',
   'the louder speaker'], 1, '26.2',
  'who said it, when two voices overlap'),
 ('A note-completion gap follows the heading “Cost per person”. You '
  'should expect:', ['a number with a currency', 'a name', 'a date'], 0,
  '24.2', 'predicting the form of an answer, not its content'),
 ('In Part 4 the lecturer says “three factors, and the third is the one '
  'people forget”. You should:',
  ['write all three', 'wait for the third and note it',
   'note the first, which is usually tested'], 0, '28.4',
  'listening shape: a signposted list'),
 ('A map-labelling task gives eight letters and five gaps. Before the '
  'recording you should:', ['read the gaps',
   'orient the map: what is north, where the entrance is',
   'memorise the eight letters'], 1, '27.2',
  'plan and map labelling, and the orientation that makes it possible'),
 ('The speaker says a figure, then “sorry, that is the annual one”. The '
  'answer is:', ['the first figure', 'the second figure',
   'the annual figure, whichever that is'], 2, '25.2',
  'repair, and listening for which figure the question wants'),
 ('A multiple-choice option is true but is not the reason the speaker '
  'gives. It is:', ['correct', 'a distractor',
   'correct if no better option exists'], 1, '30.2',
  'the option that is true and not the reason'),
 ('Part 3 is a tutorial. Two of the four options are mentioned. The '
  'answer is usually:', ['the first mentioned',
   'the one the speakers agree on', 'the last mentioned'], 1, '23.4',
  'agreement and half-agreement in a tutorial'),
 ('You miss an answer. You should:', ['stop and think about it',
   'move to the next question at once and come back at the end',
   'guess immediately'], 1, '21.2',
  'the recording plays once, and what that costs'),
 ('Sentence completion in Part 2 gives the gap at the end of the '
  'sentence. The words before it are:',
  ['filler', 'the signal that the answer is coming',
   'usually paraphrased, so unreliable'], 1, '29.2',
  'the lag between the signal and the answer'),
]


def diagnostic(d, vol, units):
    """Twenty questions that send a learner to a cycle, not to a score."""
    d.unit_title('Where to start')
    d.strapline('%s · a twenty-question diagnostic' % vlabel(vol))
    d.cefr('This is not a test and it has no band. Twenty questions, ten '
           'about Reading and ten about Listening, each one taken from a '
           'skill this volume teaches. Answer them, check them against the '
           'table at the end, and read the cycle named beside every one you '
           'got wrong before you start unit %d. Forty minutes, and it will '
           'save you more than that.' % units[0]['n'])
    d.page_break_section()
    for label, skill, bank, col in (
            ('Reading', 'reading', _DIAG_R, D_BLUE),
            ('Listening', 'listening', _DIAG_L, D_AMBER)):
        d.partbar(label, 'ten questions', skill)
        start = 1 if bank is _DIAG_R else 11
        for i, (stem, opts, _a, _c, _t) in enumerate(bank):
            d.mcq(str(start + i), stem, opts)
        d.page_break_section()

    d.unit_title('What your answers mean')
    d.strapline('%s · the diagnostic, keyed to cycles' % vlabel(vol))
    d.cefr('Read the cycle named beside each question you got wrong. If you '
           'got more than six wrong in one skill, work the volume in order '
           'rather than selectively: a pattern that wide is not a gap in '
           'one sub-skill.')
    d.page_break_section()
    for label, bank, col in (('Reading', _DIAG_R, D_BLUE),
                             ('Listening', _DIAG_L, D_AMBER)):
        d.h3(label, col)
        rows = []
        start = 1 if bank is _DIAG_R else 11
        for i, (_s, opts, a, cyc, teach) in enumerate(bank):
            rows.append(['%d' % (start + i), 'ABC'[a], opts[a], cyc, teach])
        d.table(['Q', '', 'The answer', 'Go to', 'What it teaches'],
                rows, col, [5, 5, 30, 8, 52])
    d.body_p('A diagnostic that gives a band tells you what you already '
             'know. One that gives you five cycle numbers tells you what to '
             'do on Monday.', i=True)
    d.page_break_section()


def progress_record(d, vol, units):
    """One page the learner fills in, and the only page they write on.

    Benchmark factor 68. Self-assessment that lives on paper, with a date
    beside it, is the only kind anybody goes back to - and the only honest
    way to see a half band move, which takes about six weeks and is
    invisible day to day.
    """
    d.unit_title('Your progress record')
    d.strapline('%s · ten units, one row each' % vlabel(vol))
    d.cefr('Fill this in as you finish each unit, and put the date in the '
           'last column. Tick means you could do it unprompted; half means '
           'you could do it with the book open; cross means not yet. Three '
           'crosses in one column is a reading instruction: go back to the '
           'Skills builders in that column’s cycles.')
    d.page_break_section()
    d.figure(*teach.tracker(
        'What you can do, unit by unit',
        [('Unit %d · %s' % (u['n'], u['theme']), ['', '', '', '', ''])
         for u in units],
        ['c1', 'c2', 'c3', 'c4', 'c5'],
        sub='one row a unit · tick, half-tick or cross, and the date',
        note='The five columns are the five cycles, so a column is a kind '
             'of lesson rather than a kind of question: c1 is reading '
             'detail and the letter, c2 is opinion and Task 2, c3 is data '
             'and Task 1, c4 is structure and planning, c5 is the long '
             'passage and the full essay. A pattern down one column is the '
             'useful thing this page can show you.'))
    d.h3('The four section bands', D_INDIGO)
    d.body_p('Take these from the practice papers at the back of this '
             'volume, not from the units: a band from an untimed exercise '
             'is not a band. Record them twice, six weeks apart, and '
             'compare. A half band inside six weeks is inside the '
             'measurement error; a whole band is real.')
    d.table(['Section', 'First sitting', 'Date', 'Second sitting', 'Date'],
            [['Listening', '', '', '', ''], ['Reading', '', '', '', ''],
             ['Writing', '', '', '', ''], ['Speaking', '', '', '', ''],
             ['Overall', '', '', '', '']],
            D_INDIGO, [24, 19, 19, 19, 19])
    d.page_break_section()


def _teacher_page(d, vol, units):
    """What this edition adds, and the one thing it does not."""
    d.partbar('About this edition', 'What is on the page that is not in the '
              'Student’s Book', 'writing')
    d.body_p('This is the Student’s Book, page for page, with three '
             'things printed where they are needed rather than at the back.')
    d.bullets([
        'Teacher’s notes at the head of every cycle: what exam task the '
        'cycle serves, why that task needs this sub-skill, what the '
        'sub-skill is, what earlier cycle it builds on, the error to expect, '
        'and how long the cycle takes with and without the free writing.',
        'Answers under every question, with the reason, and - for multiple '
        'choice - a line on each wrong option saying why a learner was '
        'tempted by it. Those lines exist because the commonest question in '
        'a feedback session is not what the answer is but why B is wrong.',
        'The audio script after each listening task, instead of a pointer to '
        'the back of the book.'])
    d.h3('What this edition does not do', D_PLUM)
    d.body_p('It does not tell you how to teach the cycle. The notes say '
             'what the cycle is for and what to watch for, and the rest is '
             'yours: a book that scripts a lesson is a book that assumes the '
             'class in front of you is the one it imagined.')
    d.h3('Timings', D_PLUM)
    d.body_p('Each cycle’s notes carry two figures - the full cycle, '
             'and the cycle without the free productive task. The second '
             'figure is the one to use when the writing will be set as '
             'homework, which in a ninety-minute class it usually is. Five '
             'cycles a unit, so a unit is a week at three sessions or a '
             'fortnight at two.')
    d.h3('The diagnostic', D_PLUM)
    d.body_p('The twenty-question diagnostic a few pages on is keyed to '
             'cycles rather than to a band. Set it in the first session, '
             'mark it together, and let the class see which cycles they have '
             'been sent to. A diagnostic whose result is a number tells a '
             'class what they already suspected; one whose result is five '
             'cycle numbers gives them a reason to open the book.')
    d.page_break_section()


def front_matter(d, vol, cfg, units):
    band, lvl = cfg['band'], cfg['level']
    strap = ['Reading · Listening · Speaking · Writing',
             'Every task type in the test, five times a unit']
    d.figure(*F.cover_front(cfg.get('label',
                                    'VOLUME %s' % (PART_LABEL.split()[-1]
                                                   if PART_LABEL else vol)),
                            'Units %d–%d' % (units[0]['n'], units[-1]['n']),
                            lvl, band, strap), cover=True)
    d.page_break_section(zero=True)
    d.unit_title('IELTS Preparation Course')
    d.strapline('%s · Units %d–%d · CEFR %s · target band %s'
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

    if TEACHER:
        _teacher_page(d, vol, units)
    contents(d, vol, units)

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
    # The diagnostic is written against this volume's own cycles and names
    # them, so it exists only where those cycles exist. A diagnostic that
    # sent a learner to a cycle that teaches something else would be worse
    # than no diagnostic.
    if vol in DIAG_VOLS:
        diagnostic(d, vol, units)
    progress_record(d, vol, units)


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
    nq = sum(len(x['items']) for x in P['passages'])
    d.strapline('%s \u00b7 %d minutes \u00b7 %d questions \u00b7 no extra '
                'transfer time'
                % (vlabel(P['vol']), P.get('minutes', 60), nq))
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
        d.ex('Exercise  %s \u00b7 %s' % (ps['qtype'], ps.get('task') or ps.get('kind', '')), 'reading')
        d.cefr(rubric(ps))
        _items(d, ps['items'], ps['first'], key, 'reading')
        d.page_break_section()
    return key


def render_lpaper(d, L):
    """The volume's timed Listening paper: four parts, forty questions."""
    key = []
    d.unit_title(L['title'])
    nq = sum(len(p['items']) for p in L['parts'])
    d.strapline('%s \u00b7 four parts \u00b7 %d questions \u00b7 each recording '
                'played once' % (vlabel(L['vol']), nq))
    d.cefr(L['intro'])
    d.page_break_section()
    d.partbar('Before you start',
              '%s rules, and the clock' % _NUM.get(len(L['instruct']), 'The'),
              'listening')
    d.items(L['instruct'])
    d.page_break_section()
    for pt in L['parts']:
        d.figure(*F.skill_bar('listening', pt['no'], pt['part'],
                               QT.bar_label(pt, 'listen')))
        d.body_p(pt['blurb'], i=True)
        d.ex('Exercise  %s \u00b7 %s   The recording is played once.'
             % (pt['qtype'], pt.get('task', pt.get('part', ''))),
             'listening')
        d.cefr(rubric(pt))
        _items(d, pt['items'], pt['first'], key, 'listening')
        d.body_p('Audio script: at the back of the book. Do not read it '
                 'before you listen.', i=True)
        d.page_break_section()
    return key


def lpaper_key(d, L, key):
    d.unit_title('Listening Paper \u00b7 answer key')
    d.strapline('%s \u00b7 %d questions'
                % (vlabel(L['vol']),
                   sum(len(p['items']) for p in L['parts'])))
    d.cefr('Mark the paper, then read every explanation. On Listening the '
           'explanation matters more than on Reading, because you cannot go '
           'back and look: the only way to learn what you missed is to be '
           'told where it was.')
    d.page_break_section()
    d.keybar('Listening Paper')
    d.keygrid([e[1] for e in key], 5)
    for ent in key:
        num, ans, why = ent[0], ent[1], ent[2]
        if why:
            d.why(num, ans, why)
        wrongs, opts = (ent[3], ent[4]) if len(ent) > 4 else (None, None)
        if wrongs:
            for k in sorted(wrongs):
                d.wrongline('ABCDEFGH'[k], wrongs[k])
    d.page_break_section()


def paper_key(d, P, key):
    d.unit_title('Reading Paper \u00b7 answer key')
    d.strapline('%s \u00b7 %d questions \u00b7 mark it before you read the '
                'explanations'
                % (vlabel(P['vol']),
                   sum(len(x['items']) for x in P['passages'])))
    d.cefr('Mark the whole paper first and write your raw score down. '
           'Then read every explanation, including those for the questions '
           'you answered correctly, because a right answer reached the wrong '
           'way will not survive the next paper.')
    d.page_break_section()
    d.keybar('Reading Paper \u00b7 Academic')
    d.keygrid([e[1] for e in key], 5)
    for ent in key:
        num, ans, why = ent[0], ent[1], ent[2]
        if why:
            d.why(num, ans, why)
        wrongs, opts = (ent[3], ent[4]) if len(ent) > 4 else (None, None)
        if wrongs:
            for k in sorted(wrongs):
                d.wrongline('ABCDEFGH'[k], wrongs[k])
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
    d.strapline('%s \u00b7 60 minutes \u00b7 two tasks \u00b7 Task 2 carries '
                'twice the marks' % vlabel(Wp['vol']))
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
    d.strapline('%s \u00b7 a model at band %s, and what to compare'
                % (vlabel(Wp['vol']), Wp['band']))
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
    d.strapline('%s \u00b7 11 to 14 minutes \u00b7 three parts \u00b7 recorded'
                % vlabel(Sp['vol']))
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
    d.strapline('%s \u00b7 what an examiner is listening for'
                % vlabel(Sp['vol']))
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
    d.strapline('%s · Units %d–%d'
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
            d.keygrid([e[1] for e in k[sec]], 5)
            for ent in k[sec]:
                num, ans, why = ent[0], ent[1], ent[2]
                if why:
                    d.why(num, ans, why)
                wrongs = ent[3] if len(ent) > 3 else None
                if wrongs:
                    for kk in sorted(wrongs):
                        d.wrongline('ABCDEFGH'[kk], wrongs[kk])
        # The rebuilt cycle's own exercises. Their answers belong in the
        # same key as everything else: an exercise whose answers are
        # nowhere is an exercise a learner working alone cannot do, and
        # most learners using this book are working alone.
        if k.get('preview'):
            d.h3('Preview input', D_TEAL)
            for ent in k['preview']:
                num, ans, why = ent[0], ent[1], ent[2]
                if why:
                    d.why(num, ans, why)
                else:
                    d.keyline(str(num), ans)
        if k.get('opener'):
            d.h3('Unit opener · the picture', D_INDIGO)
            for num, ans, _ in k['opener']:
                d.keyline(str(num), ans)
        if k.get('vocabulary'):
            d.h3('Vocabulary work', D_INDIGO)
            for num, ans, _ in k['vocabulary']:
                d.keyline(str(num), ans)
        if k.get('skills'):
            d.h3('Skills builder', D_BLUE)
            for num, ans, _ in k['skills']:
                d.keyline(str(num), ans)
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
    d.strapline(vlabel(vol))
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
    # A half-volume carries one listening form, so its scripts section
    # must carry that one and not the other half's.
    for suf in (PART_SPEC['lpaper'] if PART_SPEC else ('', 'a', 'b')):
        try:
            L = importlib.import_module('content.lpaper%s%s'
                                        % (vol, suf)).LPAPER
        except ModuleNotFoundError:
            continue
        d.keybar(L.get('title', 'Listening Paper'))
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
    d.strapline('%s · %d entries, defined at CEFR %s'
                % (vlabel(vol), len(allw),
                   'A2' if VOLS[vol].get('foundation') else 'B2'))
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


def references(d, vol, units):
    """The three back-matter references: language, writing, speaking.

    Benchmark factor 23 scored this 0 against Cambridge's 3. Every grammar
    box in the rebuilt units ends with a pointer - see Language reference
    L17 - and until this function existed the pointer pointed at nothing,
    which is worse than having no pointer at all.

    Three decisions worth stating:

    Only the entries this volume's cycles point at are printed. A reference
    that carries the whole series is a reference a learner cannot navigate,
    and content/refs.py is shared by eight books.

    The practice is printed with its answers, not keyed to the answer key
    at the front of the back matter, because a reference is consulted after
    the lesson by somebody working alone and a second lookup is a reason
    not to do the exercise.

    The errors come before the practice. The three mistakes named in each
    entry are the ones learners at THIS band make, so the entry corrects
    rather than merely informs, and a learner who reads only the errors has
    still had the most useful part of the page.
    """
    try:
        R = importlib.import_module('content.refs')
        importlib.reload(R)
    except ModuleNotFoundError:
        return

    # Which Language entries does this volume actually point at, and from
    # where. Built from the units rather than from refs.py's own 'seen'
    # field, so an entry cannot claim a cycle that dropped its pointer.
    pointed = {}
    for u in units:
        for ci, c in enumerate(u['cycles'], 1):
            ref = (c.get('gram') or {}).get('ref')
            if ref:
                pointed.setdefault(ref, []).append('%d.%d' % (u['n'], ci))

    def entry(key, e, col, back):
        d.h3('%s  ·  %s' % (key, e['title']), col)
        if e.get('also'):
            d.body_p('Also called: %s' % e['also'], sz=19, i=True)
        if back.get(key):
            d.body_p('Taught in %s' % ', '.join(back[key]), sz=19, i=True)
        d.bullets(e['pattern'])
        d.ex('The three mistakes learners make here')
        d.bullets(e['errors'], sz=19)
        d.ex('More practice, with answers')
        d.wordlist([(q, '   ' + a) for q, a in e['items']], 1, col)

    lang = [(k, R.LANG[k]) for k in sorted(pointed, key=_refkey)
            if k in R.LANG]
    if lang:
        d.unit_title('Language reference')
        d.strapline('%s · %d entries, each with the full pattern'
                    % (vlabel(vol), len(lang)))
        d.cefr('Every grammar box in these units ends with a pointer to one '
               'of these entries. The cycle gives you the slice of the '
               'pattern its texts needed; this gives you the pattern. Eight '
               'further questions with answers follow each one, for the '
               'learner who got the cycle’s six wrong.')
        d.page_break_section()
        for key, e in lang:
            entry(key, e, D_PLUM, pointed)
        d.page_break_section()

    if getattr(R, 'WRITING', None):
        d.unit_title('Writing reference')
        d.strapline('%s · the two tasks, and five minutes of planning'
                    % vlabel(vol))
        d.cefr('These are not model answers. A model answer teaches a '
               'learner one essay; the shape of the task, the three errors '
               'that cost the band and the decisions a plan is made of '
               'teach them the next forty.')
        d.page_break_section()
        for key in sorted(R.WRITING):
            entry(key, R.WRITING[key], D_PLUM, {})
        d.page_break_section()

    if getattr(R, 'SPEAKING', None):
        d.unit_title('Speaking reference')
        d.strapline('%s · the three parts, and what each one tests'
                    % vlabel(vol))
        d.cefr('The three parts ask for three different lengths of answer, '
               'and most of the marks lost in Speaking are lost by giving '
               'one part the length that belongs to another. The last entry '
               'is about repair, which is the skill nobody practises and '
               'everybody needs.')
        d.page_break_section()
        for key in sorted(R.SPEAKING):
            entry(key, R.SPEAKING[key], D_TEAL, {})
        d.page_break_section()


def _refkey(k):
    """L17 sorts after L9, not before it."""
    head = k.rstrip('0123456789')
    tail = k[len(head):]
    return (head, int(tail) if tail else 0)


def expression_bank(d, vol, units):
    d.unit_title('Expression bank')
    d.strapline('%s · the functional language of these ten units'
                % vlabel(vol))
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
    7: ['The book for a student who is not ready for the test and should',
        'not be sitting it yet. It says so on this cover, because the',
        'kindest thing a foundation book can do is refuse to pretend.',
        'Ten everyday themes, the gentle question types only, and the',
        'reading method taught from its first paragraph.'],
    8: ['The bridge into the graded course - the book for band 4.0 to 4.5,',
        'where the paper stops being noise and starts being a test that',
        'can be beaten. Listening Parts 3 and 4 arrive properly, Task 2',
        'is written at full shape for the first time, and every word',
        'taught here was measured against what Volume 1 assumes.'],

    1: ['The volume for band 5.0 and a first sitting — the book for a',
        'candidate who can read English but has never met this paper, and',
        'who loses marks to the clock and the question wording rather than',
        'to the language. Academic and General Training in one book.'],
    2: ['The volume for band 5.5 — the commonest score in the world and',
        'the commonest ceiling, which is a different problem from not',
        'knowing enough English. Academic and General Training in one',
        'book, because they are one test with two substitutions.'],
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
    7: ['Ten everyday themes, five cycles each, all four skills every '
        'cycle',
        'Passages of 170 to 250 words in three short paragraphs',
        'The reading method taught at 60 to 80 words a minute, and '
        'measured',
        'Completion, matching, labelling and short answer - the gentle '
        'types only',
        'A progress test in both papers, at this book\'s own length'],
    8: ['Ten themes, five cycles each, all four skills every cycle',
        'Passages of 250 to 355 words in four paragraphs, and the loop',
        'The reading method taught at 80 to 100 words a minute, and '
        'measured',
        'Listening Parts 3 and 4 at full shape, Task 2 written whole',
        'A progress test in both papers, and the handoff into Volume 1'],

    1: ['Every task type, five times in every unit, both modules '
        'throughout',
        'Academic passages of 400 to 510 words, five paragraphs and the '
        'loop',
        'The reading method taught at 100 to 120 words a minute, and '
        'measured',
        'Grammar and vocabulary taught inside the cycle whose texts use '
        'them',
        'A full timed Reading paper and a full timed Listening paper'],
    2: ['Every task type, five times in every unit, both modules '
        'throughout',
        'Academic passages of 450 to 580 words, five paragraphs and the '
        'loop',
        'The reading method taught at 110 to 130 words a minute, and '
        'measured',
        'Grammar and vocabulary taught inside the cycle whose texts use '
        'them',
        'A full timed Reading paper and a full timed Listening paper'],
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


def build(vol, out=None, teacher=False, part=None):
    global TEACHER, PART_LABEL
    TEACHER = bool(teacher)
    cfg = VOLS[vol]
    # A half-volume is the same volume with a shorter unit list and one
    # form of each paper. Everything downstream reads `units`, `vlabel`
    # and the `forms` closure, so this is the only place that knows.
    spec = None
    if part:
        for cand in SPLIT.get(vol, ()):
            if cand['part'].upper() == str(part).upper():
                spec = cand
        if spec is None:
            raise SystemExit('no part %r of volume %d' % (part, vol))
    PART_LABEL = ('Volume %d%s' % (vol, spec['part'])) if spec else None
    global PART_SPEC
    PART_SPEC = spec
    want = set(spec['units']) if spec else None
    units = []
    for n in cfg['units']:
        if want is not None and n not in want:
            continue
        try:
            m = importlib.import_module('content.u%02d' % n)
        except ModuleNotFoundError:
            continue          # a volume under construction still builds
        importlib.reload(m)
        units.append(m.UNIT)
    d = Doc('IELTS Preparation Course · %s%s'
            % (vlabel(vol), ' · Teacher’s Edition'
               if TEACHER else ''),
            'CEFR %s · band %s' % (cfg['level'], cfg['band']))
    front_matter(d, vol, cfg, units)
    ukeys = {}
    for u in units:
        ukeys[u['n']] = render_unit(d, u)
    # A volume can carry more than one form of each timed paper. The second
    # form exists so that the first can be marked, read and understood
    # before the student sits another one; a single paper measures nothing
    # that practice can then improve.
    def forms(prefix):
        out = []
        sufs = spec[prefix] if spec else ('', 'a', 'b')
        for suf in sufs:
            try:
                m = importlib.import_module('content.%s%d%s'
                                            % (prefix, vol, suf))
            except ModuleNotFoundError:
                continue
            importlib.reload(m)
            out.append(m)
        return out

    pms = forms('paper')
    lms = forms('lpaper')
    pm = pms[0] if pms else None
    lm = lms[0] if lms else None
    # The single volume carries every form it has; a half-volume carries
    # the one its own practice test is built from.
    def one_form(prefix, attr):
        out = []
        sufs = ((spec[prefix],) if spec else ('', 'b'))
        for suf in sufs:
            try:
                m = importlib.import_module('content.%s%d%s'
                                            % (prefix, vol, suf))
            except ModuleNotFoundError:
                continue
            importlib.reload(m)
            out.append(m)
        return out

    wms = one_form('wpaper', 'WPAPER')
    sms = one_form('spaper', 'SPAPER')
    pkeys = [render_paper(d, m.PAPER) for m in pms]
    lkeys = [render_lpaper(d, m.LPAPER) for m in lms]
    for m in wms:
        render_wpaper(d, m.WPAPER)
    for m in sms:
        render_spaper(d, m.SPAPER)
    back_matter(d, vol, units, ukeys)
    for m, k in zip(pms, pkeys):
        paper_key(d, m.PAPER, k)
    for m, k in zip(lms, lkeys):
        lpaper_key(d, m.LPAPER, k)
    for m in wms:
        wpaper_key(d, m.WPAPER)
    for m in sms:
        spaper_key(d, m.SPAPER)
    references(d, vol, units)
    audio_scripts(d, vol, units)
    glossary(d, vol, units)
    expression_bank(d, vol, units)
    d.figure(*F.cover_back(vlabel(vol),
                           spec['blurb'] if spec else BLURB_BY_VOL[vol],
                           BULLETS_BY_VOL[vol],
                           ['%d  %s' % (u['n'], u['theme']) for u in units]),
             cover=True)
    lvl = VOLS[vol]['cefr'].replace('+', 'plus')
    if cfg.get('foundation'):
        stem = 'IELTS_2026_%s_%s' % (lvl, cfg['short'].replace(' ', '_'))
    else:
        stem = 'IELTS_2026_%s_Volume_%d%s' % (lvl, vol,
                                              spec['part'] if spec else '')
    if TEACHER:
        stem += '_Teachers_Edition'
    out = out or '/home/user/Animated-Courses/%s.docx' % stem
    d.save(out)
    return out, len(d.images)


if __name__ == '__main__':
    # book.py 3            the single volume
    # book.py 3A           the first half of the split edition
    # book.py 3B --teacher the second half, Teacher's Edition
    args = sys.argv[1:]
    teach_mode = '--teacher' in args
    argv = [a for a in args if a != '--teacher']
    spec = argv[0] if argv else '4'
    part = spec[-1].upper() if spec[-1:].isalpha() else None
    v = int(spec[:-1] if part else spec)
    p, n = build(v, argv[1] if len(argv) > 1 else None,
                 teacher=teach_mode, part=part)
    print('wrote', p, os.path.getsize(p), 'bytes,', n, 'images')
