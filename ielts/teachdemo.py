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
