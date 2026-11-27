# -*- coding: utf-8 -*-
"""Print a unit the way a learner meets it, with the key withheld.

Used to work the book rather than inspect it: the tasks come out in order,
the answers are held back to the end, and nothing that a learner would not
have in front of them is printed.

    python3 study.py <pkg> <CODE> <n> [--key]
"""
import importlib, os, sys, textwrap
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
PKG, CODE, N = sys.argv[1], sys.argv[2], int(sys.argv[3])
SHOW_KEY = '--key' in sys.argv
sys.path.insert(0, os.path.join(HERE, PKG))
sys.path.insert(0, os.path.join(HERE, PKG, 'units', CODE))
U = importlib.import_module('u%02d' % N).U
W = 92
KEY = []


def p(s='', ind=0):
    if not s:
        print()
        return
    for line in textwrap.wrap(str(s), W - ind) or ['']:
        print(' ' * ind + line)


def head(s):
    print()
    print('=' * W)
    print(s)
    print('=' * W)


def task(label, t):
    p()
    p('%s  %s' % (label, t.get('rubric', '')))
    if t.get('how'):
        p(t['how'], 3)
    if t.get('example'):
        p('Example:  ' + t['example'], 3)
    kind = t.get('kind', 'short')
    pairs = t.get('pairs', [])
    if kind == 'match':
        for i, (a, _b) in enumerate(pairs, 1):
            p('%d. %s' % (i, a), 3)
        import build2
        right = build2.shuffled([b for _, b in pairs], label + 'm')
        for i, b in enumerate(right):
            p('%s. %s' % ('abcdefgh'[i], b), 3)
        for i, (a, b) in enumerate(pairs, 1):
            KEY.append(('%s %d' % (label, i), 'abcdefgh'[right.index(b)]))
    elif kind == 'gap':
        for i, (stem, ans) in enumerate(pairs):
            if i == 0:
                p('0. ' + stem.replace('____________', ans), 3)
            else:
                p('%d. %s' % (i, stem), 3)
                KEY.append(('%s %d' % (label, i), ans))
    else:
        for j, (q, a) in enumerate(pairs):
            if j == 0:
                p('0. %s   (%s)' % (q, a), 3)
            else:
                p('%d. %s   ____________' % (j, q), 3)
                KEY.append(('%s %d' % (label, j), a))


head('UNIT %d  %s' % (U['num'], U['title']))
p(U['strap'])
p()
p('WHAT YOU WILL BE ABLE TO DO')
for c in U['can_do']:
    p('- ' + c, 3)

head('1  BEFORE YOU START')
for i, q in enumerate(U['warm'], 1):
    p('%d. %s' % (i, q), 3)

head('2  THE WORDS AND THE SENTENCES OF THIS UNIT')
p(U['preview_intro'])
p()
for i, it in enumerate(U['set'], 1):
    p('%d. %s  -  %s' % (i, it['term'], it['definition']), 3)
    p('"%s"' % it['example'], 8)
p()
p('PHRASES')
for func, chunks in U['phrases']:
    p(func.upper(), 3)
    for c in chunks:
        p('- ' + c, 6)
if U.get('receptive'):
    p()
    p('YOU WILL ALSO MEET (understand only)')
    for r in U['receptive']:
        p('- %s: %s' % (r['term'], r['definition']), 3)
task('2.1', U['preview_task'])

head('3  VOCABULARY')
for i, v in enumerate(U['vocab_tasks'], 1):
    task('3.%d' % i, v)

head('4  GRAMMAR  ' + U['g_point'])
for r in U['g_rule']:
    p('* ' + r, 3)
p()
p('THE THREE CARDS')
for form, when, ex, _ic in U['g_mnemonic']:
    p('%s  -  %s  -  "%s"' % (form, when, ex), 3)
p()
p('CONTRAST: %s' % U['g_fig'][0])
p(U['g_fig'][1], 3)
for s in U['g_fig'][2]:
    p('- ' + s, 6)
p(U['g_fig'][3], 3)
for s in U['g_fig'][4]:
    p('- ' + s, 6)
for i, g in enumerate(U['g_tasks'], 1):
    task('4.%d' % i, g)

head('5  LISTENING')
p(U['listen_intro'])
for i, L in enumerate(U['listening'], 1):
    p()
    p('5.%d  %s   [%s]' % (i, L['title'], L.get('genre', '')))
    p('You will hear: ' + L['what'], 3)
    task('5.%da' % i, L['pre'])
    p()
    p('--- TRANSCRIPT (a learner hears this; it is printed at the back) ---', 3)
    for who, line in L['script']:
        p('%s: %s' % (who, line), 6)
    task('5.%db' % i, L['while'])
    task('5.%dc' % i, L['post'])
    p('CLOSING POINT: ' + L['point'], 3)

head('6  SPEAKING')
for i, S in enumerate(U['speaking'], 1):
    p()
    p('6.%d  %s' % (i, S['title']))
    p(S['rubric'], 3)
    p(S['how'], 3)
    p('MODEL:', 3)
    for who, line in S['model']:
        p('%s: %s' % (who, line), 6)
    if S.get('frame'):
        p('FRAME:', 3)
        for row in S['frame']:
            p(' | '.join(row), 6)
    if S.get('cards'):
        for c in S['cards']:
            p('%s: %s' % (c['who'], c['brief']), 6)
    p('A GOOD ANSWER HAS: ' + '; '.join(S['checklist']), 3)
    p('CLOSING POINT: ' + S['point'], 3)

head('7  READING')
for i, R in enumerate(U['reading'], 1):
    p()
    p('7.%d  %s   [%s]' % (i, R['title'], R.get('genre', '')))
    p('BEFORE YOU READ: ' + R['pre']['rubric'], 3)
    for j, q in enumerate(R['pre']['items'], 1):
        p('%d. %s' % (j, q), 6)
    p()
    for para in R['text']:
        p(para, 3)
        p()
    if R.get('source'):
        p('SOURCE: %s  (%s)' % R['source'], 3)
    task('7.%db' % i, R['while'])
    task('7.%dc' % i, R['post'])
    p('CLOSING POINT: ' + R['point'], 3)

head('8  WRITING')
for i, Wr in enumerate(U['writing'], 1):
    p()
    p('8.%d  %s' % (i, Wr['title']))
    p(Wr['rubric'], 3)
    p(Wr['how'], 3)
    p('FRAME:', 3)
    for line in Wr['scaffold']:
        p('- ' + line, 6)
    p('MODEL:', 3)
    for line in Wr['model']:
        p(line, 6)
    p('CHECK: ' + '; '.join(Wr['checklist']), 3)
    p('CLOSING POINT: ' + Wr['point'], 3)

head('9  CASES TO TALK ABOUT')
p(U['cases_intro'])
for i, C in enumerate(U['cases'], 1):
    p()
    p('9.%d  CASE %d  %s' % (i, i, C['title']))
    for para in C['situation']:
        p(para, 3)
    p('ON THE RECORD:', 3)
    for f in C['facts']:
        p('- ' + f, 6)
    p('THE QUESTION ON THE FIGURE: ' + C['question'], 3)
    p('TALK ABOUT:', 3)
    for j, q in enumerate(C['questions'], 1):
        p('%d. %s' % (j, q), 6)
    p('SAY IT LIKE THIS:', 3)
    for func, chunks in C['language']:
        p(func + ': ' + ' / '.join(chunks), 6)
    p('WORDS: ' + ', '.join(C['words']), 3)
    if C.get('guidance'):
        p('GUIDANCE: %s - %s (%s)' % C['guidance'], 3)
    p('CLOSING POINT: ' + C['point'], 3)

head('10  REVIEW')
p(U['review_intro'])
for i, rv in enumerate(U['review'], 1):
    p()
    p('10.%d  [%s]  %s' % (i, rv['skill'], rv['title']))
    if rv['skill'] in ('speaking', 'writing'):
        p(rv['rubric'], 3)
        p(rv.get('how', ''), 3)
        if rv.get('model'):
            p('MODEL:', 3)
            for line in rv['model']:
                p(line if isinstance(line, str) else '%s: %s' % line, 6)
        for line in rv.get('scaffold', []):
            p('- ' + line, 6)
        p('CHECK: ' + '; '.join(rv['checklist']), 3)
    else:
        task('10.%d' % i, rv)

head('END OF UNIT')
for s in U['end_fig_steps']:
    p('- ' + s, 3)

if SHOW_KEY:
    head('ANSWER KEY')
    for a, b in KEY:
        p('%-10s %s' % (a, b), 3)
