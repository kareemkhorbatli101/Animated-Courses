# -*- coding: utf-8 -*-
"""Render every figure in teach.py once, with real Volume 3 content, and
measure it against gate 6 (nothing wider than its box, nothing under 7.5px)
and gate 8 (no block of text escaping the rectangle drawn round it).

A new renderer family needs proving before any unit uses it, which is why
this exists before phase 19 rather than after.

Usage:  python3 teachdemo.py [outfile.docx]
"""
import sys

import _base                                     # puts the TOEFL dir on path
import art
import gate8
import teach
from _base import Doc

OUT = ('/tmp/claude-0/-home-user-Animated-Courses/'
       'd2ecb935-98b0-524f-8ee9-37faa42d8a33/scratchpad/teachdemo.docx')

# Real Volume 3 content: unit 21 is Education, Access and Outcomes, and
# cycle 1 is Applying to university. Every specimen below is what that
# cycle would actually carry, so the fitting is tested at real lengths.
SCENE = dict(
    title='Unit 21 · In the admissions office',
    instr='Write the number of each thing beside its word. Two words in the '
          'bank are not in the picture.',
    cells=[('book', 'prospectus'), ('laptop', 'application portal'),
           ('envelope', 'offer letter'), ('clock', 'deadline'),
           ('cap', 'open day'), ('coin', 'tuition fee'),
           ('people', 'admissions tutor'), ('chart', 'entry profile')],
    bank=['prospectus', 'deadline', 'offer letter', 'tuition fee',
          'open day', 'entry profile', 'admissions tutor',
          'application portal', 'bursary', 'transcript'],
    note='Answers: 1 prospectus · 2 application portal · 3 offer letter · '
         '4 deadline · 5 open day · 6 tuition fee · 7 admissions tutor · '
         '8 entry profile. Not in the picture: bursary, transcript.')

PUZZLE = dict(
    title='One of these is not what you would expect',
    question='Which group is most likely to turn down an offer it has '
             'already accepted, and why might that be?',
    bars=[('Medicine', 4), ('Law', 7), ('Engineering', 9),
          ('Humanities', 11), ('Creative arts', 26), ('Education', 8)],
    mark=4, ylab='% of accepted offers later declined',
    note='The passage in cycle 3 answers this. Read it to find out whether '
         'your reason was the right one.')

FIELD = dict(
    centre='admission',
    sub='Unit 21 · cycle 1',
    branches=[('getting in', ['offer', 'place', 'entry requirement',
                              'conditional']),
              ('paying for it', ['tuition fee', 'bursary', 'means-tested',
                                 'waive']),
              ('who decides', ['admissions tutor', 'criteria',
                               'discretion', 'appeal']),
              ('what you send', ['transcript', 'reference',
                                 'personal statement', 'predicted grade'])],
    note='Every one of these sixteen words is in the passage on the next '
         'page. Nine of them come back in unit 23.')

FAMILY = dict(
    sub='Unit 21 · the four words this cycle keeps using',
    rows=[(('ap-ply', 2), ('ap-pli-ca-tion', 2), ('ap-pli-cant', 1),
           '', ''),
          (('ad-mit', 2), ('ad-mis-sion', 2), '', ('ad-mis-si-ble', 2), ''),
          (('qua-li-fy', 1), ('qua-li-fi-ca-tion', 4), '',
           ('qua-li-fied', 1), ''),
          ('', ('e-li-gi-bi-li-ty', 4), '', ('e-li-gi-ble', 1), ''),
          (('as-sess', 2), ('as-sess-ment', 2), ('as-ses-sor', 2), '', '')],
    note='A Reading gap will ask for one of the nouns when the passage used '
         'the verb. That is the whole point of this table.')

CLINE = dict(
    title='How certain is the offer?',
    left='not at all certain', right='settled',
    sub='the language an admissions letter actually uses',
    items=[('we may be able to', 0.04), ('it is possible that', 0.17),
           ('we would normally', 0.36), ('we expect to', 0.54),
           ('we are likely to', 0.68), ('we will', 0.86),
           ('we guarantee', 0.99)],
    note='A conditional offer is written somewhere on this line. Where it '
         'sits is the question.')

COLLOC = dict(
    node='offer',
    sub='Unit 21 · cycle 1',
    groups=[('verb + offer', ['make an offer', 'accept an offer',
                              'decline an offer', 'withdraw an offer',
                              'hold an offer']),
            ('adjective + offer', ['conditional offer', 'unconditional offer',
                                   'contextual offer', 'firm offer',
                                   'insurance offer']),
            ('offer + noun', ['offer letter', 'offer rate',
                              'offer holder', 'offer deadline'])],
    note='Not one of these is "do an offer". That is the kind of mistake a '
         'wordlist cannot stop and a collocation panel can.')


# ----------------------------------------------------------- phase 18 set
SKELETON = dict(
    title='Unit 21 cycle 3 · what each paragraph does',
    sub='the passage on page 14',
    paras=[('A', 'context', 'Who applies, and how the numbers have moved'),
           ('B', 'claim', 'Contextual offers widen access without lowering it'),
           ('C', 'evidence', 'Three universities, five years, the outcome data'),
           ('D', 'concession', 'The gap in the first year is real and costly'),
           ('E', 'counter-claim', 'Critics say the measure flatters the school'),
           ('F', 'consequence', 'What the regulator now requires of everybody')],
    note='Paragraph D mentions money four times and is not about money. '
         'That is the whole lesson, and it is why heading 3 is wrong.')

BRIDGE = dict(
    sub='Unit 21 · the six moves this unit tests',
    pairs=[('turned down a place', 'declined an offer', 'synonym'),
           ('decide who gets in', 'the admissions decision', 'nominalisation'),
           ('the university lowered it', 'the requirement was lowered',
            'voice'),
           ('few students withdraw', 'withdrawal is rare', 'nominalisation'),
           ('is not unusual', 'is common', 'negation'),
           ('bursaries and fee waivers', 'financial support', 'hypernym')],
    note='Every pair comes from questions 14 to 19 on page 16. Cover the '
         'right column and say what the text will have used instead.')

SIGNPOST = dict(
    title='Where the passage turns',
    sub='the same passage, with everything but the markers removed',
    markers=[('At first sight', 'the view about to be dismantled'),
             ('In practice', 'what actually happens'),
             ('Admittedly', 'a concession, and a trap'),
             ('Even so', 'the concession is overruled'),
             ('It follows that', 'the claim, at last'),
             ('Yet', 'one more turn before the end')],
    note='Four of the eight answers sit in the sentence immediately after '
         'one of these six words.')

ANATOMY = dict(
    qtype='Matching headings',
    sub='Unit 21 cycle 1, question 3',
    stem='Paragraph D: which heading says what this paragraph does?',
    options=['A  The cost of the first year',
             'B  Why some students arrive less prepared',
             'C  Support that works, and support that does not',
             'D  How three universities changed their offers'],
    answer=2,
    why='The paragraph names two kinds of support and judges each. That is '
        'what it does; the money is the evidence, not the point.',
    trap=(0, 'The paragraph says "cost" four times. A learner matching on '
             'repeated words picks A and never reads the verbs.'),
    note='Three of the four headings name something the paragraph mentions. '
         'Only one names what it does.')

DECIDE = dict(
    title='True, False or Not Given — in this order, every time',
    sub='Unit 21 · the procedure, not the feeling',
    nodes=[('Does the passage say anything at all about this exact thing?',
            'go to test 2', 'NOT GIVEN. Stop.'),
           ('Does what it says agree with the statement, all of it?',
            'TRUE. Stop.', 'go to test 3'),
           ('Does the passage state the opposite, or rule the statement out?',
            'FALSE. Stop.', 'NOT GIVEN — you are guessing from outside')],
    note='Most lost marks here are TRUE given to a statement the passage '
         'merely does not contradict. Test 1 is the one people skip.')

LISTENMAP = dict(
    title='Part 3 · the shape of the discussion',
    sub='Unit 21 cycle 4, questions 25 to 30',
    speakers=['Tutor', 'Marta', 'Josef'],
    turns=[(0, 'sets it up', False), (1, 'first view', False),
           (2, 'half-agrees', False), (1, 'concedes', False),
           (2, 'states it', True), (0, 'checks', False),
           (1, 'changes mind', True), (0, 'closes', False)],
    note='Marta speaks first and is wrong first. The answer to 27 is in '
         'Josef\'s fifth turn and the answer to 29 is Marta changing her mind.')

TASKREAD = dict(
    sub='Unit 21 cycle 5 · Task 2',
    prompt='Some people think universities should admit students only on '
           'examination results. Others believe background should also be '
           'considered. Discuss both views and give your own opinion.',
    parts=[('THE TOPIC', 'university admissions',
            'what you write about — not what you argue'),
           ('VIEW ONE', 'results only', 'must be given fairly, with a reason'),
           ('VIEW TWO', 'background too', 'must be given fairly, with a reason'),
           ('YOUR TASK', 'discuss both and give your own opinion',
            'all three, or Task Response caps at 5')],
    misreadings=['An essay on whether university is worth the money.',
                 'An essay arguing one side and never naming the other.'],
    note='The word that costs most marks here is "both". Two paragraphs of '
         'your own opinion and none of view one is a band 5 for Task '
         'Response however well it is written.')

LANGBANK = dict(
    title='Useful language · discussing two views',
    sub='Unit 21 cycle 5',
    groups=[('giving a view fairly',
             ['The case for X is that', 'Those who argue X point to',
              'X is defended on the ground that', 'Supporters of X note'],
             'The case for results-only admission is that it is the one '
             'measure every candidate meets on the same day.'),
            ('conceding, then moving',
             ['There is something in this', 'This is true as far as it goes',
              'Granted, X', 'While X is right about Y'],
             'This is true as far as it goes, but it treats an identical '
             'score as evidence of identical effort.'),
            ('quantifying carefully',
             ['a substantial minority', 'in a small number of cases',
              'rather more than', 'nowhere near'],
             'A substantial minority of entrants arrive from schools that '
             'send nobody else.')])

LADDER = dict(
    criterion='Grammatical Range and Accuracy',
    sub='Unit 21 · the same idea, three bands',
    rungs=[('5.5', 'Many students are poor. They can not pay the fee. So '
                   'the university helps them.',
            ''),
           ('6.5', 'Many students cannot afford the fee, so the university '
                   'offers them support.',
            'two sentences joined, and the register lifted'),
           ('7.5', 'Where students cannot meet the fee, support is offered '
                   'on the strength of household income rather than need '
                   'as the student reports it.',
            'a subordinate clause, the passive used on purpose, and a '
            'contrast carried inside one sentence')],
    note='Nothing here is longer for the sake of it. Each rung does one '
         'thing the rung below could not.')

MATRIX = dict(
    title='Two views, four questions — fill the blanks before you write',
    sub='Unit 21 cycle 5 · Task 2 planning frame',
    cols=['Results only', 'Background too'],
    rows=['What it claims is fair',
          'Who it helps most',
          'What it cannot see',
          'The strongest objection'],
    cells=[['The same test on the same day', 'The same chance from an '
            'unequal start'],
           ['Candidates from schools that teach to the test', ''],
           ['', 'How hard the result itself was to reach'],
           ['', '']],
    note='The four blank cells are yours. An essay written from a full grid '
         'cannot be one view repeated louder, which is the commonest band-5 '
         'essay there is.')

UNITMAP = dict(
    n=21, theme='Education: Access and Outcomes',
    rows=[('Applying to university',
           'Matching headings: what a paragraph does',
           'Matching headings · note completion · Part 1'),
          ('Paying for it',
           'Listening for a correction and a confirmed number',
           'Form completion · multiple choice · Part 2'),
          ('Who gets in, and how it is decided',
           'Paraphrase: nominalisation and the passive',
           'True/False/Not Given · matching features'),
          ('What a degree is worth',
           'Part 3: following a speaker who changes position',
           'Part 3 multiple choice · Task 1 bar chart'),
          ('Spending on schools',
           'Reading a Task 2 question before answering it',
           'Task 2 discuss-both-views · Part 3')],
    note='Cycles 1, 3 and 5 build reading; 2 and 4 build listening. The '
         'writing load sits in 4 and 5, where the language to do it has '
         'already been met twice.')

CLOCK = dict(
    title='Where the Reading hour goes',
    speed='your measured speed: 190 words a minute, page 9',
    segments=[('Passage 1 and its questions', 17,
               'the easiest text. Finish early and bank the time.'),
              ('Passage 2 and its questions', 20,
               'the longest. This is where the hour is won or lost.'),
              ('Passage 3 and its questions', 20,
               'the hardest. Answer what you can, guess the rest.'),
              ('Transfer and check', 3,
               'there is no extra transfer time in Reading.')],
    note='Nobody is given a warning at minute 37. Practise the first '
         'passage against a clock until seventeen minutes feels like '
         'something rather than a number.')

TRACKER = dict(
    title='Unit 21 · what I can do now',
    sub='tick, half-tick or cross — and come back in a fortnight',
    rows=[('Read a condition on an offer as a question', ['✓', '', '']),
          ('Match a heading to what a paragraph does', ['', '', '']),
          ('Hear a correction and write the corrected number', ['', '', '']),
          ('Name the paraphrase move between question and text', ['', '', '']),
          ('Give both views fairly before giving my own', ['', '', ''])],
    cols=['first try', 'after review', 'two weeks on'],
    note='The first row is filled in as an example. The point of the third '
         'column is that the second column lies.')

TIMELINE = dict(
    title='How the offer system got here',
    sub='Unit 21 cycle 3 · the passage covers 1963 to now',
    events=[('1963', 'Robbins: places for all who qualify', 0.02),
            ('1992', 'Polytechnics become universities', 0.3),
            ('1998', 'Tuition fees introduced', 0.45),
            ('2012', 'The fee trebles; applications dip, then recover', 0.66),
            ('2019', 'Contextual offers become general', 0.86),
            ('Now', 'The regulator requires outcome data', 0.99)],
    note='Questions 7 to 11 are a matching-dates task. Draw this before you '
         'answer them, not after.')

def build(path):
    d = Doc('IELTS · the pedagogic figure family',
            'teach.py, proved before any unit uses it')
    d.unit_title('Six figures, each closing a measured zero')
    d.body_p('Every specimen below carries real Volume 3 content at real lengths, '
        'because a renderer proved on short placeholder strings is not '
        'proved. Gate 6 and gate 8 run against this file.')

    d.h3('1 · scene — activation, and the photograph we cannot license')
    d.figure(*teach.scene(SCENE['title'], SCENE['cells'], SCENE['bank'],
                          SCENE['instr'], SCENE['note']))
    d.h3('2 · puzzle — curiosity, in one circled number')
    d.figure(*teach.puzzle(PUZZLE['title'], PUZZLE['question'],
                           PUZZLE['bars'], PUZZLE['mark'],
                           PUZZLE['ylab'], PUZZLE['note']))
    d.h3('3 · field — a word arrives with its neighbours')
    d.figure(*teach.field(FIELD['centre'], FIELD['branches'],
                          FIELD['sub'], FIELD['note']))
    d.h3('4 · family — word formation, with the stress marked')
    d.figure(*teach.family(FAMILY['rows'], FAMILY['sub'], FAMILY['note']))
    d.h3('5 · cline — may, might, will are not synonyms')
    d.figure(*teach.cline(CLINE['title'], CLINE['left'], CLINE['right'],
                          CLINE['items'], CLINE['sub'], CLINE['note']))
    d.h3('6 · collocation — what actually goes with the word')
    d.figure(*teach.collocation(COLLOC['node'], COLLOC['groups'],
                                COLLOC['sub'], COLLOC['note']))

    d.h3('7 · skeleton — what a paragraph does, not what it mentions')
    d.figure(*teach.skeleton(SKELETON['title'], SKELETON['paras'],
                             SKELETON['sub'], SKELETON['note']))
    d.h3('8 · bridge — paraphrase, with the move named')
    d.figure(*teach.bridge(BRIDGE['pairs'], BRIDGE['sub'], BRIDGE['note']))
    d.h3('9 · signpost — the passage reduced to its turns')
    d.figure(*teach.signpost(SIGNPOST['markers'], SIGNPOST['sub'],
                             SIGNPOST['note'], SIGNPOST['title']))
    d.h3('10 · anatomy — one question taken apart, trap named')
    d.figure(*teach.anatomy(ANATOMY['qtype'], ANATOMY['stem'],
                            ANATOMY['options'], ANATOMY['answer'],
                            ANATOMY['why'], ANATOMY['trap'],
                            ANATOMY['sub'], ANATOMY['note']))
    d.h3('11 · decide — the procedure, in a fixed order')
    d.figure(*teach.decide(DECIDE['title'], DECIDE['nodes'],
                           DECIDE['sub'], DECIDE['note']))
    d.h3('12 · listenmap — the shape of a Part 3 before you hear it')
    d.figure(*teach.listenmap(LISTENMAP['title'], LISTENMAP['speakers'],
                              LISTENMAP['turns'], LISTENMAP['sub'],
                              LISTENMAP['note']))
    d.h3('13 · taskread — the Task 2 question, dissected')
    d.figure(*teach.taskread(TASKREAD['prompt'], TASKREAD['parts'],
                             TASKREAD['misreadings'], TASKREAD['sub'],
                             TASKREAD['note']))
    d.h3('14 · langbank — useful language, one phrase already at work')
    d.figure(*teach.langbank(LANGBANK['title'], LANGBANK['groups'],
                             LANGBANK['sub']))
    d.h3('15 · ladder — the same sentence at three bands')
    d.figure(*teach.ladder(LADDER['criterion'], LADDER['rungs'],
                           LADDER['sub'], LADDER['note']))
    d.h3('16 · matrix — two views, four questions, four blanks')
    d.figure(*teach.matrix(MATRIX['title'], MATRIX['cols'], MATRIX['rows'],
                           MATRIX['cells'], MATRIX['sub'], MATRIX['note']))
    d.h3('17 · unitmap — the unit before you enter it')
    d.figure(*teach.unitmap(UNITMAP['n'], UNITMAP['theme'],
                            UNITMAP['rows'], UNITMAP['note']))
    d.h3('18 · clock — where the hour goes')
    d.figure(*teach.clock(CLOCK['title'], CLOCK['segments'],
                          CLOCK['speed'], CLOCK['note']))
    d.h3('19 · tracker — what I can do now, and in a fortnight')
    d.figure(*teach.tracker(TRACKER['title'], TRACKER['rows'],
                            TRACKER['cols'], TRACKER['sub'],
                            TRACKER['note']))
    d.h3('20 · timeline — events on a scale')
    d.figure(*teach.timeline(TIMELINE['title'], TIMELINE['events'],
                             TIMELINE['sub'], TIMELINE['note']))
    d.save(path)
    return path


def main(argv):
    path = argv[1] if len(argv) > 1 else OUT
    art.FITLOG = []
    art.RECTLOG = []
    build(path)
    log = art.FITLOG or []
    over = [(r, art.tw(r['s'], r['size'], r['bold'], r['mono'])) for r in log
            if r['max_w'] is not None
            and art.tw(r['s'], r['size'], r['bold'], r['mono'])
            > r['max_w'] + 0.5]
    small = [r for r in log if r['size'] < 7.5 and r['s'].strip()]
    print('wrote %s' % path)
    print('%d fitted runs of text' % len(log))
    print('  OVERRUN: %d' % len(over))
    for r, w in over[:10]:
        print('    %6.2f > %6.2f  %.1fpx  %r' % (w, r['max_w'], r['size'],
                                                 r['s'][:56]))
    print('  TOO SMALL: %d' % len(small))
    for r in small[:10]:
        print('    %.1fpx  %r' % (r['size'], r['s'][:56]))
    blocks, rects, esc = gate8.audit_log()
    print('  ESCAPING ITS BOX: %d of %d blocks (%d boxes)'
          % (len(esc), blocks, rects))
    for fig, lines, out, s in esc[:8]:
        print('    fig %-4d %d lines %.1fpx out  %r' % (fig, lines, out, s))
    bad = len(over) + len(small) + len(esc)
    print('\nTEACH DEMO: %s' % ('PASS' if not bad else 'FAIL - %d' % bad))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
