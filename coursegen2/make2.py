# -*- coding: utf-8 -*-
"""Build one second-edition book.  Usage:  make2.py <series_dir> <CODE> [--units 1,2]"""
import json, os, sys, importlib
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
PKG, CODE = sys.argv[1], sys.argv[2]
ONLY = None
if '--units' in sys.argv:
    ONLY = [int(x) for x in sys.argv[sys.argv.index('--units') + 1].split(',')]

sys.path.insert(0, os.path.join(HERE, PKG))
import series
import render as R, art, art2, figs, figs2 as F2, build2, gates2

B = series.BOOKS[CODE]
R.set_accent(B['level'])
art.set_accent(B['level'])
art2.ACCENT = art.ACCENT
F2.ACCENT = art.ACCENT
MEDIA = os.path.join(HERE, PKG, 'media', CODE)
UNITDIR = os.path.join(HERE, PKG, 'units', CODE)
os.makedirs(MEDIA, exist_ok=True)
sys.path.insert(0, UNITDIR)

FITJSON = os.path.join(HERE, PKG, 'out', 'fit_%s.json' % CODE)
os.makedirs(os.path.dirname(FITJSON), exist_ok=True)
FIT = json.load(open(FITJSON)) if os.path.exists(FITJSON) else {}
LEFT = {}
_lf = FITJSON.replace('.json', '_left.json')
if os.path.exists(_lf):
    LEFT = json.load(open(_lf))
build2.NORECAP = '--norecap' in sys.argv
ctx = build2.Ctx(MEDIA, fit=FIT)
out, key = [], []
LVL = {'A2': 'CEFR A2', 'B1': 'CEFR B1', 'B2': 'CEFR B2', 'C1': 'CEFR C1'}[B['level']]
FULL = '%s — %s (%s)' % (series.TITLE, B['sub'], B['bandge'])

# ---------------------------------------------------------------- cover
def coverfig(tag, built):
    o, h = built
    p = os.path.join(MEDIA, tag + '.png')
    art.render(''.join(o), h, p)
    out.append(R.picture(ctx.add(p), art.W, h, tag))

_cv, _cvh, _cvd = F2.cover2(
    B['cover_lines'], B['sub'], 'CEFR ' + B['bandge'], B['book'],
    series.SERIES, series.EDITION,
    ['Ten units of the language this profession actually uses',
     'Three listenings, three readings, three writing tasks and three role-plays in every unit',
     'Three cases to argue about in every unit  \u00b7  a teacher\u2019s book for every unit'],
    people=[dict(series.CAST_LOOK[n], name=n) for n in series.COVER_PEOPLE],
    emblem=B.get('emblem', 'tooth'))
_cvp = os.path.join(MEDIA, 'cover.png')
art2.render2(_cv, _cvh, _cvp, _cvd)
out.append(R.picture(ctx.add(_cvp), art2.W, _cvh, 'cover'))

# ---------------------------------------------------------------- title + disclaimer
out.append(R.pagebreak())
out.append(R.title_band(series.TITLE, series.SERIES))
out.append(R.body('%s  ·  %s  ·  %s  ·  %s'
                  % (B['sub'], B['bandge'], LVL, series.EDITION), after=200))
out.append(R.rubric('About this book'))
out.append(R.readbox(' '.join(B['blurb'])))

out.append(R.rubric('Please read this first'))
out.append(R.readbox(
    ('This is a language course. It teaches the English used in %s; it is not a '
     'clinical reference and must not be used as one. Clinical decisions '
     'are governed by local law, by local protocol and by the professional judgement of a '
     'qualified clinician.')
    % getattr(series, 'FIELD_PHRASE', 'dental practice and dental education')))
out.append(R.readbox(
    'Every patient, practice, company and case in this book is invented. All figures, counts '
    'and sums are illustrative. Where a professional requirement is described, what applies in '
    'any particular country or practice is set by that country’s law and that practice’s '
    'own written procedures.'))

# ---------------------------------------------------------------- how to use
out.append(R.pagebreak())
out.append(R.title_band('How to use this book'))
for t, d in [
  ('1  Before you start',
   'Three questions about your own work. They are not a test. They tell you what you already know.'),
  ('2  The words and the sentences of this unit',
   'This is the page everything else rests on. Eight words you will learn to say, and the '
   'sentences they live in. Read it before you read or listen to anything else in the unit. '
   'Come back to it whenever a task stops making sense.'),
  ('3  Vocabulary', 'Four tasks, from recognising a word to using it yourself.'),
  ('4  Grammar', 'One point, taken out of the sentences on the preview page. Not a new subject.'),
  ('5  Listening', 'Three recordings. For each one: a task before you listen, a task while you '
   'listen, and a task after. Every transcript is at the back of this book.'),
  ('6  Speaking', 'Three role-plays, each with a model you can copy before you change '
   'it, and then one fluency task: the same thing said three times, to three partners, '
   'in four minutes, then three, then two. Nothing new goes into it. The only thing that '
   'changes is how fast it comes out.'),
  ('7  Reading', 'Three texts: what you would actually read in a practice or a school.'),
  ('8  Writing', 'Three tasks. Each has a model, a frame to fill, and a checklist you mark '
   'your own work against.'),
  ('9  Cases to talk about', 'Three short cases from the working day. Each one has more '
   'than one defensible answer. You are given the words and the sentence frames you need to '
   'argue for yours, and a reason is required every time.'),
  ('10  Review', 'The words of this unit, and words from earlier units coming back. They come '
   'back because that is how they stay.')]:
    out.append(R.rubric(t))
    out.append(R.body(d, after=110))

# ---------------------------------------------------------------- contents
out.append(R.pagebreak())
out.append(R.title_band('Contents'))
rows = [['Unit', 'Title']]
for i, t in enumerate(B['units'], 1):
    rows.append([str(i), t])
out.append(R.table(rows, [900, 6400]))

out.append(R.pagebreak())
out.append(R.title_band('The people in this book'))
_i, _h, _d = F2.cast_cards('THE PEOPLE IN THIS BOOK',
    [dict(series.CAST_LOOK[n], name=n, role=r) for n, r in series.CAST])
_p2 = os.path.join(MEDIA, 'cast.png')
art2.render2(_i, _h, _p2, _d)
out.append(R.picture(ctx.add(_p2), art2.W, _h, 'cast'))
out.append(R.caption('The same people appear in every unit of this book.'))

# ---------------------------------------------------------------- units
UNITS = []
nums = ONLY or range(1, 11)
for i in nums:
    name = 'u%02d' % i
    if not os.path.exists(os.path.join(UNITDIR, name + '.py')):
        continue
    U = importlib.import_module(name).U
    UNITS.append(U)

# syllabus map
out.append(R.pagebreak())
out.append(R.title_band('Syllabus map'))
smrows = [['U', 'Title', 'Grammar', 'Words you will learn to say']]
for U in UNITS:
    smrows.append([str(U['num']), U['title'], U['g_point'],
                   ', '.join(it['term'] for it in U['set'][:4]) + ' …'])
out.append(R.table(smrows, [450, 2100, 2200, 2550]))
out.append(R.pagebreak())

for U in UNITS:
    build2.unit(ctx, out, key, U, B, cast=series.CAST_LOOK)

# ---------------------------------------------------------------- back matter
out.append(R.title_band('Wordlist'))
out.append(R.body('Every word this book teaches you to say, with what it means and the unit '
                  'where it is taught.', after=140))
wl = []
for U in UNITS:
    for it in U['set']:
        wl.append([it['term'], it['definition'], str(U['num'])])
    for it in U.get('receptive', []):
        wl.append([it['term'], it['definition'] + '  (understand only)', str(U['num'])])
wl.sort(key=lambda r: r[0].lower())
out.append(R.table([['Word', 'What it means', 'Unit']] + wl, [1700, 4600, 700]))

out.append(R.pagebreak())
out.append(R.title_band('Transcripts'))
for U in UNITS:
    for i, L in enumerate(U['listening'], 1):
        out.append(R.rubric('Unit %d  ·  5.%d  %s' % (U['num'], i, L['title'])))
        out.append(R.speak_block(L['script']))

out.append(R.pagebreak())
out.append(R.title_band('Answer key'))
krows = [['Task', 'Answer']]
for a, b in key:
    krows.append([a, b])
out.append(R.table(krows, [1900, 5400]))

out.append(R.pagebreak())
out.append(R.title_band('Sources'))
out.append(R.body('Where the facts in this book come from. Case material is invented; these '
                  'are the sources for what is not.', after=140))
srows = [['Unit', 'Claim', 'Source']]
for U in UNITS:
    for C in U['cases']:
        if C.get('guidance'):
            srows.append([str(U['num']), C['guidance'][1], C['guidance'][2]])
    for r in U['reading']:
        if r.get('source'):
            srows.append([str(U['num']), r['source'][0], r['source'][1]])
out.append(R.table(srows, [500, 3300, 3400]))

out.append(R.title_band('Figures'))
frows = [['Figure', 'Caption']]
for fid, cap, alt, xref in ctx.figures:
    frows.append([fid, cap])
out.append(R.table(frows, [1100, 6200]))
out.append(R.body('All figures in this book were drawn for it.', after=120))

# ---------------------------------------------------------------- gates
fails, warns = [], []
for U in UNITS:
    gates2.check_unit(U, B['bandge'], series.KIND, fails, warns)
    gates2.check_review(U, fails, warns)
    gates2.check_level(U, B['level'], series.KIND, series.DOMAIN, fails, warns)
    gates2.check_cases(U, B['bandge'], series.KIND, fails, warns)
    gates2.check_recaps(U, ctx, fails, warns)
    gates2.check_recycle(U, fails, warns)
    gates2.check_variety(U, fails, warns)
    gates2.check_demand(U, fails, warns)
    gates2.check_fluency(U, fails, warns)
    gates2.check_own(U, fails, warns)
    gates2.check_answerable(U, fails, warns)
    gates2.check_gap_chunks(U, fails, warns)
gates2.check_figures(ctx.figures, fails, warns, floor=18 * len(UNITS))
gates2.check_exercise_figs(ctx, fails, warns)
gates2.check_breaks(ctx, fails, warns)
if LEFT:
    gates2.check_fit(LEFT, fails, warns)
if build2.NORECAP:
    fails, warns = [], ['pass 0 of the page fit: closing figures omitted on purpose']
ok = gates2.report('%s  %s  (%s)' % (series.TITLE, B['sub'], B['bandge']), fails, warns)

# ---------------------------------------------------------------- write
OUTDIR = os.path.join(HERE, PKG, 'out')
os.makedirs(OUTDIR, exist_ok=True)
fn = '%s%s_%s_%s.docx' % ('fit0_' if build2.NORECAP else '', series.FILESTEM,
                          B['bandge'].replace('.', '-'), B['sub'].replace(' ', '_'))
path = os.path.join(OUTDIR, fn)
R.build_docx(''.join(out), ctx.images, path, FULL)
json.dump(ctx.recaps, open(os.path.join(OUTDIR, 'recaps_%s.json' % CODE), 'w'), indent=0)
nwords = sum(len(str(x).split()) for x in out)
print('\n%s  %s  figures %d  key lines %d  -> %s'
      % (CODE, B['sub'], len(ctx.figures), len(key), fn))
sys.exit(0 if ok else 1)
