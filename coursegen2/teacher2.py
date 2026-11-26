# -*- coding: utf-8 -*-
"""Build the teacher's book for one second-edition title.

Usage:  teacher2.py <series_dir> <CODE> [--units 1,2]
Reads units/<CODE>/uNN.py (the student unit) and tNN.py (the teacher notes).
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
import render as R, art, figs

B = series.BOOKS[CODE]
R.set_accent(B['level'])
art.set_accent(B['level'])
MEDIA = os.path.join(HERE, PKG, 'media', CODE + '_T')
UNITDIR = os.path.join(HERE, PKG, 'units', CODE)
os.makedirs(MEDIA, exist_ok=True)
sys.path.insert(0, UNITDIR)

images, out = [], []
n_img = [0]


def add(p):
    n_img[0] += 1
    rid = 'rIdImg%d' % n_img[0]
    images.append((rid, p, 'img%03d.png' % n_img[0]))
    return rid


o, h = figs.biz_cover(B['title'], series.STRAP, B['bandge'], B['book'],
                      series.SERIES, series.EDITION,
                      ['TEACHER’S BOOK', 'Procedure · Answers · Transcripts '
                       '· Timing · Photocopiables'], emblem=B['emblem'])
p = os.path.join(MEDIA, 'cover.png')
art.render(''.join(o), h, p)
out.append(R.picture(add(p), art.W, h, 'cover'))

out.append(R.pagebreak())
out.append(R.title_band('Teacher’s Book', series.SERIES))
out.append(R.body('%s  ·  %s  ·  %s' % (series.TITLE, B['sub'], B['bandge']), after=180))

out.append(R.rubric('What this course is doing, and why'))
for t in [
 'Every unit begins with a preview: eight words the learner will be able to say by the end, '
 'each with a definition and a sentence it lives in, and the phrases those words belong to. '
 'Nothing is read or heard in the unit before that page has been done. This is the single '
 'most important procedural rule in the book: if you skip the preview to save ten minutes, '
 'the forty minutes that follow will not work.',
 'Eight words, not twenty. The research on vocabulary load is consistent that eight to twelve '
 'new items in an hour is the realistic ceiling for words a learner will be able to produce. '
 'The unit also contains a receptive set, printed separately: those are for recognition only, '
 'and you should not test them productively.',
 'Words come back on a schedule. Each unit’s review recycles items from three units back '
 'and seven units back. That spacing is deliberate and the gaps are meant to feel long. Do '
 'not move the recycling forward to make a lesson feel tidier.',
 'Every task has a rubric, a worked example, a model and a checklist. The worked example is '
 'item zero and it is already done in the book. Point at it rather than explaining the task.']:
    out.append(R.readbox(t))

out.append(R.rubric('Two routes through a unit'))
out.append(R.table([['Stage', 'Core route (90 min)', 'Full route (180 min)'],
                    ['1 Before you start', '5', '10'],
                    ['2 Preview', '20', '25'],
                    ['3 Vocabulary', '10', '20'],
                    ['4 Grammar', '10', '20'],
                    ['5 Listening', 'one of the three: 15', 'all three: 35'],
                    ['6 Speaking', 'one of the three: 15', 'all three: 30'],
                    ['7 Reading', 'one of the three: 10', 'all three: 25'],
                    ['8 Writing', 'set one for homework', 'one in class, two for homework: 20'],
                    ['9 One thing worth knowing', '2', '5'],
                    ['10 Review', '3', '10']], [2400, 2450, 2450]))
out.append(R.body('On the core route, choose the listening, speaking and reading that match '
                  'your group. The teacher’s notes for each unit say which to choose and '
                  'why.', after=140))

out.append(R.rubric('Mixed groups'))
out.append(R.readbox(
    'Practitioners and students in one room is the normal case, not the exception. The '
    'practitioner books are sequenced by the patient visit and the student books by the '
    'curriculum, but they share one inventory of words. Where a unit has a student twin, the '
    'notes say so, and the role-plays can be run across the pair: the student explains, the '
    'practitioner corrects.'))

for i in (ONLY or range(1, 11)):
    tn = 't%02d' % i
    if not os.path.exists(os.path.join(UNITDIR, tn + '.py')):
        continue
    T = importlib.import_module(tn).T
    U = importlib.import_module('u%02d' % i).U
    out.append(R.pagebreak())
    out.append(R.unit_band(U['num'], U['title']))
    out.append(R.body(U['strap'], after=120))

    out.append(R.band_part('AIMS'))
    for a in T['aims']:
        out.append(R.bullet(a))
    out.append(R.band_part('WHERE THIS UNIT SITS'))
    out.append(R.body('Recycles: ' + T['recycles'], after=60))
    out.append(R.body('Prepares: ' + T['prepares'], after=120))

    out.append(R.band_part('THE CORE ROUTE, IF YOU HAVE NINETY MINUTES'))
    out.append(R.readbox(T['core_route']))

    out.append(R.band_part('PROCEDURE, STAGE BY STAGE'))
    for stage, steps in T['procedure']:
        out.append(R.rubric(stage))
        for s in steps:
            out.append(R.bullet(s))

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

    out.append(R.band_part('IF THEY FINISH EARLY  /  IF THEY STRUGGLE'))
    for s in T['extension']:
        out.append(R.bullet(s))

    out.append(R.band_part('HOMEWORK, AND WHERE IT COMES BACK'))
    out.append(R.body(T['homework'], after=140))

    if T.get('photocopiable'):
        out.append(R.band_part('PHOTOCOPIABLE  ·  ' + T['photocopiable']['title']))
        for line in T['photocopiable']['lines']:
            out.append(R.item('', line))

    out.append(R.band_part('WHAT WRITING THESE NOTES CHANGED IN THE UNIT'))
    for line in T['defects']:
        out.append(R.bullet(line))

OUT = os.path.join(HERE, PKG, 'out')
os.makedirs(OUT, exist_ok=True)
fn = '%s_%s_%s_TEACHER.docx' % (series.FILESTEM, B['bandge'].replace('.', '-'),
                                B['sub'].replace(' ', '_'))
R.build_docx(''.join(out), images, os.path.join(OUT, fn),
             '%s Teacher’s Book — %s' % (series.TITLE, B['sub']))
print('teacher book ->', fn)
