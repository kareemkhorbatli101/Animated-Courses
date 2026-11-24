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
                          series.EDITION,
                          ['10 Illustrated Units',
                           '10 Decision Rooms · 10 Brief Labs · 140 Figures'],
                          emblem=B['emblem']))

# ---------------------------------------------------------------- title page
out.append(R.pagebreak())
out.append(R.title_band(TITLE + ' with AI', SERIES))
out.append(R.body(('%s  ·  %s  ·  %s  ·  ' + series.EDITION)
                  % (B['sub'], B['bandge'], LVL), after=200))
out.append(R.rubric('About this book'))
out.append(R.readbox(' '.join(B['blurb'])))
out.append(R.readbox(
    'This book carries two things at once, and you need both. The first is English: a full '
    'graded course with grammar, vocabulary, four skills and a complete answer key. The second '
    'is what these systems can actually do inside a foreign ministry, taught properly, one '
    'capability per unit, each with an honest statement of where it fails. The two belong '
    'together. A diplomatic text is an instrument that turns on its exact words, and so is an '
    'instruction to a system.'))
out.append(R.readbox(
    'All six books share one world: a foreign ministry, called here simply the Ministry, and '
    'the people who work in it. The state it serves is not named. Its posts, its counterparts '
    'and the states it deals with — Verenia, Oristan, Kavara, Lysmark, Tarnia, Halmar — are '
    'invented, and so is every person, document, figure and case in these pages. Any '
    'resemblance to a serving official or to a real negotiation is accidental. The '
    'international system itself is real, because a diplomat works inside it: the United '
    'Nations, the Vienna Convention on Diplomatic Relations, Geneva and New York appear under '
    'their own names. Where a real-world practice is used, it is sourced in a Data Point box.'))
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
                    'Decision Rooms and all ten Brief Labs'))
out.append(R.bullet('A note on the numbers, the names and the deliberate absence of product names'))

# ---------------------------------------------------------------- the rules
out.append(R.pagebreak())
out.append(R.band_part('A note on the numbers, the names and the missing brand names'))
out.append(R.readbox(
    'You will not find a single product, model or platform named anywhere in these six books. '
    'This is deliberate, and it is the most important editorial decision in the series. Systems '
    'appear by what they do: the translation step, the triage service, the extraction tool, the '
    'drafting assistant. Tools are replaced faster than books are reprinted, and a course that '
    'names them is out of date before it reaches a classroom. What the skill is made of does '
    'not move nearly so fast. Nor does the series name a serving official, a current dispute '
    'or a position held by any real state.'))
out.append(R.readbox(
    'For the same reason you will not find a prediction. Nothing here says what these systems '
    'will be able to do in five years, because nobody knows and the guess would date the book '
    'as surely as a brand name would. What this course teaches is what a diplomat does when a '
    'system is fast, cheap and confidently wrong — which has been true throughout, and will '
    'keep being useful whatever the systems turn into.'))
out.append(R.readbox(
    'Every capability in this book is taught with its boundary. Part 7 of each unit ends with a '
    'box headed WHAT THIS DOES NOT DO. A book that teaches only what works is a sales brochure, '
    'and an official who has read only the brochure signs things they should not sign.'))
out.append(R.rubric('No exercise depends on a figure being current'))
out.append(R.body(
    'Tasks ask you to read, compare, question or act on a number, never to memorise it. If a '
    'figure changes, every exercise in this book still works. Where competent people genuinely '
    'disagree — and on this subject they do — the book shows the disagreement and makes it '
    'the lesson, rather than settling it for you.'))

# ---------------------------------------------------------------- cast
out.append(R.pagebreak())
out.append(R.band_part('The people in this book'))
F('team', figs.cards('THE PEOPLE OF THE MINISTRY',
                     [('people', B['protagonist'] + '\nour guide'),
                      ('scale', 'Samir Haddad\nLegal and Treaties'),
                      ('chart', 'Dr Hana Mourad\nPolicy Planning'),
                      ('envelope', 'Rana Deeb\nConsular Affairs'),
                      ('shield', 'Karim Dalati\nInformation Security'),
                      ('flag', 'Amb. Faris Said\nHead of Mission')],
                     cols=3), 'The people you will meet again and again.')
CASTLINES = [
    ('Lina Khalil', 'desk officer, Bilateral Affairs. Joins in Book 1 and learns that most of '
                    'diplomacy is a document somebody will read in four years.'),
    ('Samir Haddad', 'Legal and Treaties. Reads every word twice and has twice been right about '
                     'a word nobody else had read once.'),
    ('Dr Hana Mourad', 'Policy Planning. Wants the brief shorter, the sourcing harder and the '
                       'judgement visible.'),
    ('Rana Deeb', 'Consular Affairs. Answers citizens in trouble, at a volume nobody outside '
                  'the department believes.'),
    ('Omar Nasri', 'Translation and Documentation. Twenty-two years of knowing what a first '
                   'draft is worth, which is not nothing and is not a translation.'),
    ('Yara Ibrahim', 'Press and Public Diplomacy. Writes for people who have never read a note '
                     'verbale and never will.'),
    ('Tarek Zayed', 'Protocol. Holds the view that precision in small things is how a service '
                    'signals that it is precise in large ones.'),
    ('Nadia Barakat', 'Multilateral Affairs, in Geneva. Lives inside bracketed text and has '
                      'opinions about commas that have cost her sleep.'),
    ('Karim Dalati', 'Information Security and Records. The sceptic of this series, and right '
                     'often enough that the others have learned to wait for him.'),
    ('Maya Sarkis', 'the Diplomatic Institute. Trains the intake, and asks each year what the '
                    'service can no longer do by hand.'),
    ('Ambassador Faris Said', 'Head of Mission in Astrene. Signs what the Ministry sends, and '
                              'answers for it in a room the Ministry is not in.'),
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
out.append(R.body('Every graded exercise in the book, including all ten Decision Rooms and '
                  'all ten Brief Labs. Item 0 is worked in the unit itself.', after=160))
for n, title, key in ALLKEY:
    out.append(R.rubric('Unit %d  ·  %s' % (n, title)))
    for line in key:
        out.append(R.body(line, after=40))

# ---------------------------------------------------------------- back cover
out.append(R.pagebreak())
F('back', figs.biz_back(B['bandge'], B['book'], SERIES, B['blurb'], B['units'],
                        INSIDE, CAST, '%s  ·  %s  ·  %s'
                        % (LVL, B['sub'], series.EDITION)))

body_xml = ''.join(out)
dest = os.path.join(HERE, 'out', 'English_for_the_Foreign_Ministry_%s_%s.docx'
                    % (B['bandge'].replace('.', '-'), B['sub'].replace(' ', '_')))
R.build_docx(body_xml, ctx.images, dest, FULL)
txt = re.sub(r'<[^>]+>', '', body_xml)
print('%-5s %-32s words %6d  figures %3d  keylines %3d  %s'
      % (CODE, B['sub'], len(txt.split()), len(ctx.images),
         sum(len(k) for _, _, k in ALLKEY), os.path.basename(dest)))
