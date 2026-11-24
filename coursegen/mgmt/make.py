# -*- coding: utf-8 -*-
"""Build one book of English for Management with AI. Usage: python3 make.py B11"""
import os, sys, re, importlib
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import render as R, art, figs, build
import series
from series import BOOKS, ORDER, SERIES, INSIDE, CAST

CODE = sys.argv[1]
B = BOOKS[CODE]
R.set_accent(B['level'])
art.set_accent(B['level'])
MEDIA = os.path.join(HERE, 'media', CODE)
UNITDIR = os.path.join(HERE, 'units', CODE)
os.makedirs(MEDIA, exist_ok=True)
sys.path.insert(0, UNITDIR)

ctx = build.Ctx(MEDIA)
out = []
F = lambda tag, built, cap=None: build.fig(ctx, out, tag, built, cap)

TITLE = 'English for Management'
FULL = '%s with AI — %s (%s)' % (TITLE, B['sub'], B['bandge'])
LVL = {'B1': 'CEFR B1', 'B2': 'CEFR B2', 'C1': 'CEFR C1'}[B['level']]

# ---------------------------------------------------------------- covers
F('cover', figs.biz_cover(B['title'], series.STRAP, B['bandge'], B['book'], SERIES,
                          'International Edition',
                          ['10 Illustrated Units',
                           '10 Decision Clinics · 10 Brief Labs · 140 Figures'],
                          emblem=B['emblem']))

# ---------------------------------------------------------------- title page
out.append(R.pagebreak())
out.append(R.title_band(TITLE + ' with AI', SERIES))
out.append(R.body('%s  ·  %s  ·  %s  ·  International Edition'
                  % (B['sub'], B['bandge'], LVL), after=200))
out.append(R.rubric('About this book'))
out.append(R.readbox(' '.join(B['blurb'])))
out.append(R.readbox(
    'This book carries two things at once, and you need both. The first is English: a full '
    'graded course with grammar, vocabulary, four skills and a complete answer key. The second '
    'is what these systems can actually do for a business, taught properly, one capability per '
    'unit, each with an honest statement of where it fails. The two belong together. The '
    'leverage runs through precise instruction, and precise instruction is grammar.'))
out.append(R.readbox(
    'All six books share one world. Arclight does back-office and customer-support work for '
    'small businesses. It starts as three people in Book 1 and ends as about ninety in Book 6, '
    'and its clients are themselves founders of small companies. Every person, company, '
    'document, figure and client in this book is fictional. Any resemblance to a real company '
    'or a real person is accidental. Where a real-world fact is used, it is dated and sourced '
    'in a Data Point box.'))
out.append(R.rubric('What is inside every unit'))
for L in INSIDE:
    out.append(R.bullet(L))

# ---------------------------------------------------------------- contents
out.append(R.pagebreak())
out.append(R.band_part('Contents'))
mods = [importlib.import_module('u%02d' % i) for i in range(1, 11)]
out.append(R.table([['Unit', 'Title', 'Grammar', 'What the system does here']] +
                   [[str(i + 1), B['units'][i], mods[i].U['gram'], mods[i].U['ai']]
                    for i in range(10)],
                   [700, 2300, 2900, 3100]))
out.append(R.rubric('And at the end'))
out.append(R.bullet('A complete answer key for every graded exercise, including all ten '
                    'Decision Clinics and all ten Brief Labs'))
out.append(R.bullet('A note on the numbers, the names and the deliberate absence of product names'))

# ---------------------------------------------------------------- the rules
out.append(R.pagebreak())
out.append(R.band_part('A note on the numbers, the names and the missing brand names'))
out.append(R.readbox(
    'You will not find a single product, model or platform named anywhere in these six books. '
    'This is deliberate, and it is the most important editorial decision in the series. Systems '
    'appear by what they do: the assistant, the agent, the extraction step, the routing rule. '
    'Tools are replaced faster than books are reprinted, and a course that names them is out of '
    'date before it reaches a classroom. What the skill is made of does not move nearly so fast.'))
out.append(R.readbox(
    'For the same reason you will not find a prediction. Nothing here says what these systems '
    'will be able to do in five years, because nobody knows and the guess would date the book '
    'as surely as a brand name would. What this course teaches is what a manager does when a '
    'system is fast, cheap and confidently wrong — which has been true throughout, and will '
    'keep being useful whatever the systems turn into.'))
out.append(R.readbox(
    'Every capability in this book is taught with its boundary. Part 7 of each unit ends with a '
    'box headed WHAT THIS DOES NOT DO. A book that teaches only what works is a sales brochure, '
    'and a manager who has read only the brochure makes expensive decisions.'))
out.append(R.rubric('No exercise depends on a figure being current'))
out.append(R.body(
    'Tasks ask you to read, compare, question or act on a number, never to memorise it. If a '
    'figure changes, every exercise in this book still works. Where competent people genuinely '
    'disagree — and on this subject they do — the book shows the disagreement and makes it '
    'the lesson, rather than settling it for you.'))

# ---------------------------------------------------------------- cast
out.append(R.pagebreak())
out.append(R.band_part('The people in this book'))
F('team', figs.cards('THE PEOPLE OF ARCLIGHT',
                     [('people', B['protagonist'] + '\nour guide'),
                      ('bulb', 'Jonas Riedel\nco-founder, systems'),
                      ('scale', 'Marta Olsen\nrisk and liability'),
                      ('coin', 'Kenji Watanabe\nfinance'),
                      ('globe', 'Fatima Zahra\nclient manager'),
                      ('factory', 'Nora Lindqvist\na client of ours')],
                     cols=3), 'The people you will meet again and again.')
CASTLINES = [
    ('Dalia Rahman', 'co-founder. Started by doing everything herself, and spends six books '
                     'learning to stop.'),
    ('Jonas Riedel', 'the second founder. Built the first agent workflows, and trusts them '
                     'about ten per cent more than the evidence supports.'),
    ('Victor Sandoval', 'operations and quality. Joined at eleven people and asked, on day two, '
                        'how anybody knew the work was right.'),
    ('Ines Carvalho', 'managing director from about sixty people. Decides what Arclight will '
                      'not do.'),
    ('Fatima Zahra', 'client manager. Knows the difference between what a client says and what '
                     'a client means.'),
    ('Kenji Watanabe', 'finance. Will not accept a saving he cannot find in the accounts.'),
    ('Marta Olsen', 'risk and liability. The sceptic of this series, and right often enough '
                    'that the others have learned to wait for her.'),
    ('Thomas Reed', 'joined to do the work the agents now do. Stayed, and does something '
                    'harder.'),
    ('Nora Lindqvist', 'runs a six-person furniture business. Growing faster than she can '
                       'control, and knows it.'),
    ('Samuel Boateng', 'two-person logistics brokerage. No slack anywhere, in anything.'),
    ('Priya Menon', 'a consultant, working alone. The smallest account Arclight has and the '
                    'most exacting.'),
]
for who, what in CASTLINES:
    if who == B['protagonist']:
        what = 'the person this book follows, from the first page to the last. ' + what
    out.append(R.who_is(who, what))

# ---------------------------------------------------------------- units
ALLKEY = []
for i, m in enumerate(mods, 1):
    xml, key = build.build_unit(m.U, ctx, B['level'], CODE)
    out.append(xml)
    ALLKEY.append((i, m.U['title'], key))

# ---------------------------------------------------------------- answer key
out.append(R.pagebreak())
out.append(R.title_band('Answer Key'))
out.append(R.body('Every graded exercise in the book, including all ten Decision Clinics and '
                  'all ten Brief Labs. Item 0 is worked in the unit itself.', after=160))
for n, title, key in ALLKEY:
    out.append(R.rubric('Unit %d  ·  %s' % (n, title)))
    for line in key:
        out.append(R.body(line, after=40))

# ---------------------------------------------------------------- back cover
out.append(R.pagebreak())
F('back', figs.biz_back(B['bandge'], B['book'], SERIES, B['blurb'], B['units'],
                        INSIDE, CAST, '%s  ·  %s  ·  International Edition'
                        % (LVL, B['sub'])))

body_xml = ''.join(out)
dest = os.path.join(HERE, 'out', 'English_for_Management_%s_%s.docx'
                    % (B['bandge'].replace('.', '-'), B['sub'].replace(' ', '_')))
R.build_docx(body_xml, ctx.images, dest, FULL)
txt = re.sub(r'<[^>]+>', '', body_xml)
print('%-5s %-32s words %6d  figures %3d  keylines %3d  %s'
      % (CODE, B['sub'], len(txt.split()), len(ctx.images),
         sum(len(k) for _, _, k in ALLKEY), os.path.basename(dest)))
