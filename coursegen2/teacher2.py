# -*- coding: utf-8 -*-
"""Build the teacher's book for one second-edition title.

Usage:  teacher2.py <series_dir> <CODE> [--units 1,2,3]
Reads units/<CODE>/uNN.py (the student unit) and tNN.py (the teacher notes).

This book is written for a teacher who may be teaching English for dentistry
for the first time, in Syria, to a class whose first language is Arabic. So it
carries four things an ordinary teacher's book does not: a bilingual glossary
with Syrian dental usage noted where it differs, the interference points an
Arabic-speaking learner actually hits, a sample answer for every open task,
and notes for all three discussion cases including what a class will say and
where to push back.
"""
import os, sys, importlib
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
PKG, CODE = sys.argv[1], sys.argv[2]
ONLY = None
if '--units' in sys.argv:
    ONLY = [int(x) for x in sys.argv[sys.argv.index('--units') + 1].split(',')]
sys.path.insert(0, os.path.join(HERE, PKG))
import series
import render as R, art, art2, figs2 as F2

B = series.BOOKS[CODE]
R.set_accent(B['level'])
art.set_accent(B['level'])
art2.ACCENT = art.ACCENT
F2.ACCENT = art.ACCENT
MEDIA = os.path.join(HERE, PKG, 'media', CODE + '_T')
UNITDIR = os.path.join(HERE, PKG, 'units', CODE)
os.makedirs(MEDIA, exist_ok=True)
sys.path.insert(0, UNITDIR)

images, out = [], []
n_img = [0]
figno = [0, 0]      # unit, running number


def add(p):
    n_img[0] += 1
    rid = 'rIdImg%d' % n_img[0]
    images.append((rid, p, 'img%03d.png' % n_img[0]))
    return rid


def fig(tag, built, cap):
    inner, h, defs = built
    figno[1] += 1
    p = os.path.join(MEDIA, 'u%02d_%s_%03d.png' % (figno[0], tag, figno[1]))
    art2.render2(inner, h, p, defs)
    out.append(R.picture(add(p), art2.W, h, tag))
    out.append(R.caption('TEACHER FIG %d.%d  %s' % (figno[0], figno[1], cap)))


# ---------------------------------------------------------------- cover
_cv, _cvh, _cvd = F2.cover2(
    B['cover_lines'], B['sub'] + '  ·  Teacher’s Book', 'CEFR ' + B['bandge'],
    B['book'], series.SERIES, series.EDITION,
    ['Stage-by-stage procedure, with two timing routes',
     'A sample answer for every open task, and notes on all three cases',
     'Bilingual glossary, Syrian usage noted, and the Arabic interference points'],
    people=[dict(series.CAST_LOOK[n], name=n) for n in series.COVER_PEOPLE],
    emblem=B.get('emblem', 'tooth'))
_p = os.path.join(MEDIA, 'cover.png')
art2.render2(_cv, _cvh, _p, _cvd)
out.append(R.picture(add(_p), art2.W, _cvh, 'cover'))

out.append(R.pagebreak())
out.append(R.title_band('Teacher’s Book', series.SERIES))
out.append(R.body('%s  ·  %s  ·  %s' % (series.TITLE, B['sub'], B['bandge']), after=180))

out.append(R.rubric('If you have never taught this course before, read this page'))
for t in [
 'You do not need to be a dentist to teach this book, and you should not try to be one. '
 'Everything clinical that a task depends on is printed in the unit, and every unit of this '
 'teacher’s book has a page headed FOR THE TEACHER WHO IS NOT A CLINICIAN which answers, in '
 'plain language, the questions a class will actually ask. If a question goes past that '
 'page, the honest answer is “that is a clinical question, not a language one — ask your '
 'supervisor, and tell us next week what they said”. Said once, that answer costs you '
 'nothing. Guessing costs you the room.',
 'Every unit begins with a preview: eight words the learner will be able to say by the end, '
 'each with a definition and a sentence it lives in, and the phrases those words belong to. '
 'Nothing is read or heard in the unit before that page has been done. This is the single '
 'most important procedural rule in the book: if you skip the preview to save ten minutes, '
 'the forty minutes that follow will not work.',
 'Eight words, not twenty. The research on vocabulary load is consistent that eight to twelve '
 'new items in an hour is the realistic ceiling for words a learner will be able to produce. '
 'The unit also contains a receptive set, printed separately: those are for recognition only, '
 'and you should not test them productively. The expansion lists in these notes are for the '
 'class that is ahead, and they are never tested.',
 'Words come back on a schedule. Each unit’s review recycles items from three units back '
 'and seven units back. That spacing is deliberate and the gaps are meant to feel long. Do '
 'not move the recycling forward to make a lesson feel tidier.',
 'Every task has a rubric, a worked example, a model and a checklist. The worked example is '
 'item zero and it is already done in the book. Point at it rather than explaining the task.',
 'Part 9 is three cases, and it is not a filler. A case has more than one defensible answer, '
 'and the English a learner needs to hold a position is harder than the English needed to '
 'report a fact. Give the cases the time the timing table says, and resist answering them '
 'yourself. The notes for each case tell you what a class usually says first, and where to '
 'push.']:
    out.append(R.readbox(t))

out.append(R.rubric('Using the Arabic in this book'))
out.append(R.readbox(
    'The Arabic here is for you, not for the learners’ books. Use it to check that a '
    'definition has landed, to unstick a learner who has stopped, and to settle a term '
    'quickly when two learners are using different Arabic words for the same thing. Where '
    'Syrian clinical usage differs from the Modern Standard Arabic term that a dictionary '
    'gives, the Syrian usage is listed first, because that is what a Syrian colleague will '
    'say at a chairside. Do not conduct the lesson in Arabic. Translate the word, then go '
    'back to English and make the learner say the English sentence.'))

out.append(R.rubric('Two routes through a unit'))
out.append(R.table([['Stage', 'Core route (90 min)', 'Full route (180 min)'],
                    ['1 Before you start', '5', '10'],
                    ['2 Preview', '20', '25'],
                    ['3 Vocabulary', '10', '20'],
                    ['4 Grammar', '10', '20'],
                    ['5 Listening', 'one of the three: 15', 'all three: 30'],
                    ['6 Speaking', 'one of the three: 12', 'all three: 28'],
                    ['7 Reading', 'one of the three: 8', 'all three: 22'],
                    ['8 Writing', 'set one for homework', 'one in class, two set: 15'],
                    ['9 Cases', 'one case: 8', 'all three: 22'],
                    ['10 Review', '2', '8']], [2400, 2450, 2450]))
out.append(R.body('On the core route, choose the listening, speaking, reading and case that '
                  'match your group. The notes for each unit say which to choose and why.',
                  after=140))

out.append(R.rubric('Mixed groups'))
out.append(R.readbox(
    'Practitioners and students in one room is the normal case, not the exception. The '
    'practitioner books are sequenced by the patient visit and the student books by the '
    'curriculum, but they share one inventory of words. Where a unit has a student twin, the '
    'notes say so, and the role-plays can be run across the pair: the student explains, the '
    'practitioner corrects.'))

out.append(R.pagebreak())
out.append(R.title_band('The people in this book'))
_i, _h, _d = F2.cast_cards('THE PEOPLE IN THIS BOOK',
    [dict(series.CAST_LOOK[n], name=n, role=r) for n, r in series.CAST],
    note='The same people appear in every unit. Learners name them aloud in Unit 1.')
_p2 = os.path.join(MEDIA, 'cast.png')
art2.render2(_i, _h, _p2, _d)
out.append(R.picture(add(_p2), art2.W, _h, 'cast'))
out.append(R.caption('Use this page on day one. A class that knows the cast reads the '
                     'conversations faster.'))

# ---------------------------------------------------------------- units
for i in (ONLY or range(1, 11)):
    tn = 't%02d' % i
    if not os.path.exists(os.path.join(UNITDIR, tn + '.py')):
        continue
    T = importlib.import_module(tn).T
    U = importlib.import_module('u%02d' % i).U
    figno[0], figno[1] = U['num'], 0

    out.append(R.pagebreak())
    out.append(R.unit_band(U['num'], U['title']))
    out.append(R.strap(U['strap']))

    out.append(R.band_part('AIMS'))
    for a in T['aims']:
        out.append(R.bullet(a))
    out.append(R.band_part('WHERE THIS UNIT SITS'))
    out.append(R.body('Recycles: ' + T['recycles'], after=60))
    out.append(R.body('Prepares: ' + T['prepares'], after=120))

    out.append(R.band_part('THE CORE ROUTE, IF YOU HAVE NINETY MINUTES'))
    out.append(R.readbox(T['core_route']))
    fig('route%d' % i, F2.step_sequence('THE NINETY-MINUTE ROUTE', T['route_steps'],
        stop_points=T.get('route_stops'),
        note='The marked step is the one you may not cut.'),
        'The lesson, as a sequence you can hold in your head.')

    out.append(R.band_part('ON THE BOARD BEFORE THEY COME IN'))
    for line in T['board']:
        out.append(R.item('', line))

    out.append(R.band_part('PROCEDURE, STAGE BY STAGE'))
    for stage, steps in T['procedure']:
        out.append(R.rubric(stage))
        for s in steps:
            out.append(R.bullet(s))

    out.append(R.band_part('THE WORDS OF THIS UNIT, IN ARABIC'))
    out.append(R.body('Syrian clinical usage first, where it differs from the standard term. '
                      'Use this to check, not to teach.', after=100))
    out.append(R.gloss_table(T['glossary']))
    fig('gloss%d' % i, F2.icon_cards('THE EIGHT, AS PICTURES, FOR THE BOARD',
        [(it['term'],) for it in U['set']], cols=4,
        note='Photocopy, cut up, and use as a silent elicitation set.'),
        'The unit’s eight words as cards you can hold up.')

    out.append(R.band_part('WHERE ARABIC PULLS THE ENGLISH OUT OF SHAPE'))
    out.append(R.body('These are the errors you will hear in this unit, not errors in '
                      'general. Correct the pattern, not the word.', after=100))
    for tr in T['l1_traps']:
        out.append(R.trap(*tr))

    out.append(R.band_part('EXPANSION  ·  FOR A CLASS THAT IS AHEAD'))
    out.append(R.body('Never tested. Offer these only when the eight are secure.', after=100))
    out.append(R.table([['Core word', 'What you can add', 'When it is worth it']]
                       + [list(r) for r in T['expansion']], [1900, 3300, 4100]))

    out.append(R.band_part('ENGAGEMENT  ·  FIVE WAYS TO RUN THIS MATERIAL'))
    for name, how in T['engagement']:
        out.append(R.pron(name, how))

    out.append(R.band_part('SAMPLE ANSWERS FOR EVERY OPEN TASK'))
    out.append(R.body('The closed tasks are in the answer key at the back of the learner’s '
                      'book. These are the ones that have no single answer: what a good one '
                      'sounds like, and the Arabic you can fall back on.', after=100))
    for sa in T['sample_answers']:
        out.append(R.sample_answer(*sa))

    out.append(R.band_part('WHAT THEY GET WRONG HERE'))
    for d, fix in T['difficulties']:
        out.append(R.pron(d, fix))

    out.append(R.band_part('PRONUNCIATION'))
    for w, note in T['pronunciation']:
        out.append(R.pron(w, note))

    out.append(R.band_part('THE FIGURES, AND WHAT ELSE TO DO WITH THEM'))
    for f, use in T['figures']:
        out.append(R.pron(f, use))

    out.append(R.band_part('FOR THE TEACHER WHO IS NOT A CLINICIAN'))
    for q, a in T['domain_notes']:
        out.append(R.pron(q, a))

    out.append(R.band_part('PART 9  ·  THE THREE CASES'))
    out.append(R.readbox(T['cases_intro']))
    for j, C in enumerate(U['cases'], 1):
        N = T['case_notes'][j - 1]
        out.append(R.rubric('CASE %d  ·  %s' % (j, C['title'])))
        out.append(R.body('The question on the page: ' + C['question'], after=80))
        out.append(R.band_part('WHAT A CLASS SAYS FIRST'))
        out.append(R.body(N['first'], after=80))
        out.append(R.band_part('THE POSITIONS THAT CAN BE DEFENDED'))
        for pos, why in N['positions']:
            out.append(R.pron(pos, why))
        out.append(R.band_part('WHERE TO PUSH'))
        for p in N['push']:
            out.append(R.bullet(p))
        out.append(R.band_part('LANGUAGE TO FEED IN WHEN THEY RUN OUT'))
        out.append(R.langbank('SAY IT LIKE THIS', C['language']))
        out.append(R.band_part('IN ARABIC, IF THE DISCUSSION STOPS'))
        out.append(R.ar_para(N['arabic']))
        if N.get('wrap'):
            out.append(R.band_part('HOW TO CLOSE IT'))
            out.append(R.body(N['wrap'], after=140))
        fig('case%d_%d' % (i, j), F2.opinion_line(
            'WHERE DO YOU STAND?  ·  CASE %d' % j, N['poles'], N['marks'],
            note='Learners put a mark on the line, then have to say why it is not next to it.'),
            'The case as a line to stand on, for a class that will not start talking.')

    out.append(R.band_part('IF THEY FINISH EARLY  /  IF THEY STRUGGLE'))
    for s in T['extension']:
        out.append(R.bullet(s))

    out.append(R.band_part('MARKING THE WRITING'))
    out.append(R.table([['What you are looking for', 'Give the mark when']]
                       + [list(r) for r in T['marking']], [3600, 5700]))

    out.append(R.band_part('HOMEWORK, AND WHERE IT COMES BACK'))
    out.append(R.body(T['homework'], after=140))

    if T.get('photocopiable'):
        out.append(R.band_part('PHOTOCOPIABLE  ·  ' + T['photocopiable']['title']))
        for line in T['photocopiable']['lines']:
            out.append(R.item('', line))
        if T['photocopiable'].get('fig'):
            fig('photo%d' % i, T['photocopiable']['fig'], T['photocopiable']['fig_cap'])

    out.append(R.band_part('WHAT WRITING THESE NOTES CHANGED IN THE UNIT'))
    out.append(R.body('The teacher’s book is written against the unit, not after it. Each '
                      'line below is a defect these notes found, and the change it caused '
                      'in the learner’s book.', after=100))
    for line in T['defects']:
        out.append(R.bullet(line))

OUT = os.path.join(HERE, PKG, 'out')
os.makedirs(OUT, exist_ok=True)
fn = '%s_%s_%s_TEACHER.docx' % (series.FILESTEM, B['bandge'].replace('.', '-'),
                                B['sub'].replace(' ', '_'))
R.build_docx(''.join(out), images, os.path.join(OUT, fn),
             '%s Teacher’s Book — %s' % (series.TITLE, B['sub']))
print('teacher book ->', fn, '  figures', n_img[0])
