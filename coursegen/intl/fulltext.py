# -*- coding: utf-8 -*-
"""Render a book's complete text to Markdown: python3 fulltext.py A21"""
import sys, os, importlib, re
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import series
code = sys.argv[1]
sys.path.insert(0, os.path.join(HERE, 'units', code))
B = series.BOOKS[code]
L = 'ABCDEFGH'
o = []
W = o.append
W('# ' + series.TITLE + ' \u2014 ' + series.EDITION)
W('')
W('## %s · %s · %s' % (B['book'], B['bandge'], B['sub']))
W('')
W('*%s*' % series.SERIES)
W('')
for b in B['blurb']:
    W(b)
W('')
W('---')
W('')


def q(items, kind):
    for i, it in enumerate(items):
        if kind == 'open':
            W('%d. %s' % (i, it[0]) + ('  — *%s*' % it[1] if i == 0 else ''))
        elif kind == 'tf':
            W('%d. %s' % (i, it[0]) + ('  — *%s*' % it[1] if i == 0 else ''))
        elif kind == 'gap':
            W('%d. %s' % (i, it[0].replace('____________', '**%s**' % it[1]) if i == 0 else it[0]))
        elif kind == 'mcq':
            stem, opts, k = it
            line = '   '.join('%s) %s' % (L[j], x) for j, x in enumerate(opts))
            W('%d. %s   %s' % (i, stem, line) + ('  — *%s*' % L[k] if i == 0 else ''))


for n in range(1, 11):
    U = importlib.import_module('u%02d' % n).U
    W('## Unit %d · %s' % (U['num'], U['title']))
    W('')
    W('*%s*' % U['strap'])
    W('')
    W('**Figure %d.0** — %s: %s' % (n, U['hero'][0], U['hero_cap']))
    W('')
    W('### Part 1 · Warm Up and Read')
    W('')
    for x in U['warm']:
        W('- %s' % x)
    W('')
    for p in U['read']:
        W(p); W('')
    W('**A. Comprehension.**'); q(U['c_a'], 'open'); W('')
    W('**B. True or false.**'); q(U['c_b'], 'tf'); W('')
    W('**C. Complete the sentence.**'); q(U['c_c'], 'gap'); W('')
    W('**D. Choose the best answer.**'); q(U['c_d'], 'mcq'); W('')
    W('**E. %s**' % U['c_e'][0])
    for i, (item, col) in enumerate(U['c_e'][1]):
        W('%d. %s%s' % (i, item, '  — *%s*' % col if i == 0 else ''))
    W('')
    W('### Part 2 · Vocabulary')
    W('')
    W('**Figure %d.1** — %s: %s' % (n, U['v_fig_title'], U['v_fig_cap']))
    W('')
    W('| Term | Meaning |'); W('|---|---|')
    for t, m in U['vocab']:
        W('| %s | %s |' % (t, m))
    W('')
    W('**A. Complete with a term from the table.**'); q(U['v_a'], 'gap'); W('')
    W('**B. Match the two halves.**')
    for i, (a, b) in enumerate(U['v_b']):
        W('%d. %s … %s' % (i + 1, a, '**%s**' % b if i == 0 else '____'))
    W('')
    W('### Part 3 · Grammar and Dialogues')
    W('')
    W('**%s**' % U['g_title']); W('')
    for r in U['g_rule']:
        W('- %s' % r)
    W('')
    W('**Figure %d.2** — %s' % (n, U['g_fig_cap'])); W('')
    W('**A. Complete.**'); q(U['g_a'], 'gap'); W('')
    W('**B. Choose the correct form.**'); q(U['g_b'], 'mcq'); W('')
    for idx, d in ((3, U['d1']), (4, U['d2'])):
        W('**Dialogue %d · %s**' % (idx - 2, d['title'])); W('')
        W('**Figure %d.%d** — %s' % (n, idx, d['cap'])); W('')
        for who, line in d['lines']:
            W('**%s:** %s' % (who, line))
        W('')
        W('*A. Comprehension.*'); q(d['a'], 'open'); W('')
        W('*B. Complete with ONE word.*'); q(d['b'], 'gap'); W('')
    W('### Part 4 · Speaking')
    W('')
    for i, (t, steps) in enumerate(U['speak']):
        W('**%s. %s**' % (L[i], t))
        for st in steps:
            W('- %s' % st)
        W('')
    W('### Part 5 · Extended Reading')
    W('')
    W('**%s**' % U['ext_title']); W('')
    W('**Figure %d.5** — %s' % (n, U['ext_fig_cap'])); W('')
    for p in U['ext']:
        W(p); W('')
    for key in ('dp1', 'dp2'):
        dp = U.get(key)
        if dp:
            W('> **DATA POINT · %s** — %s  ' % (dp[0], dp[1]))
            W('> %s' % dp[2]); W('')
    W('**A. Comprehension.**'); q(U['e_a'], 'open'); W('')
    W('**B. True or false.**'); q(U['e_b'], 'tf'); W('')
    W('### Part 6 · Guided Writing')
    W('')
    W('**Model**'); W(''); W(U['w_model']); W('')
    W('**Figure %d.6** — %s' % (n, U['w_fig_cap'])); W('')
    W('**Task.** %s' % U['w_task']); W('')
    for st in U['w_steps']:
        W('- %s' % st)
    W('')
    W('*Language bank*')
    for x in U['w_bank']:
        W('- %s' % x)
    W('')
    W('*Check your writing*')
    for x in U['w_check']:
        W('- %s' % x)
    W('')
    W('### Part 7 · Real-World Skills — %s' % U['t_title'])
    W('')
    W('**Figure %d.7** — %s' % (n, U['t_fig_cap'])); W('')
    for p in U['t_body']:
        W(p); W('')
    W('*Say it like this*')
    for a, b in U['t_say']:
        W('- %s**%s**' % (a, b))
    W('')
    W('> **WHAT THIS DOES NOT DO** \u2014 %s' % U['t_bound']); W('')
    W('**A. Complete.**'); q(U['t_a'], 'gap'); W('')
    W('**B. %s**' % U['t_b_rubric']); q(U['t_b'], 'open'); W('')
    C = U['case']
    W('### Part 8 · %s' % C['title'])
    W('')
    W('**STAGE 1 · The Brief**'); W('')
    for p in C['brief']:
        W(p); W('')
    W('**STAGE 2 · The Evidence**'); W('')
    W('**Figure %d.8** — %s' % (n, C['exhibit_cap'])); W('')
    W('%s' % C['exhibit_note']); W('')
    W('**STAGE 3 · The Voices**'); W('')
    for who, role, line in C['voices']:
        W('**%s** · *%s*  ' % (who, role))
        W('“%s”' % line); W('')
    W('**STAGE 4 · Your Analysis**'); W('')
    W('**Figure %d.9** — Your analysis, step by step.' % n); W('')
    for h, s2 in C['steps']:
        W('- **%s** — %s' % (h, s2))
    W('')
    q(C['analysis'], 'open'); W('')
    W('**STAGE 5 · The Decision**'); W('')
    W('**%s**' % C['decision']); W('')
    for st in C['decision_steps']:
        W('- %s' % st)
    W('')
    W('*Language bank for the decision*')
    for x in C['bank']:
        W('- %s' % x)
    W('')
    W('> **WHAT HAPPENED** — %s' % C['outcome']); W('')
    q(C['outcome_q'], 'open'); W('')
    LB = U['lab']
    W('### Part 9 \u00B7 The Brief Lab \u2014 %s' % LB['title'])
    W('')
    W('**STAGE 1 \u00B7 The Task**'); W('')
    for p in LB['task']:
        W(p); W('')
    W('**STAGE 2 \u00B7 Draft One, As It Was Sent**'); W('')
    W('**Figure %d.10** \u2014 %s' % (n, LB['draft_cap'])); W('')
    for i, ln in enumerate(LB['draft']):
        mk = LB['marks'].get(i)
        W('%s %s' % (('**[%d]**' % mk) if mk else '    ', ln))
    W('')
    W('**STAGE 3 \u00B7 What Came Back**'); W('')
    W('**Figure %d.11** \u2014 %s' % (n, LB['back_cap'])); W('')
    W('| We asked for | What came back |'); W('|---|---|')
    for i in range(max(len(LB['asked']), len(LB['back']))):
        W('| %s | %s |' % (LB['asked'][i] if i < len(LB['asked']) else '',
                           LB['back'][i] if i < len(LB['back']) else ''))
    W('')
    W('*The gap.* %s' % LB['gap']); W('')
    W(LB['back_note']); W('')
    W('**STAGE 4 \u00B7 The Diagnosis**'); W('')
    for ft in sorted(series.FAULT_OK[code]):
        W('- **%s** \u2014 %s' % (ft, series.FAULT_GRAMMAR[ft]))
    W('')
    q(LB['diagnosis'], 'open'); W('')
    W('**STAGE 5 \u00B7 Draft Two**'); W('')
    W('%s' % LB['rewrite']); W('')
    W('| Line | What goes on it |'); W('|---|---|')
    for a, b in zip(series.SCAFFOLD, LB['scaffold']):
        W('| %s | %s |' % (a, b))
    W('')
    W('*Language bank for draft two*')
    for x in LB['bank']:
        W('- %s' % x)
    W('')
    W('*Check your rewrite*')
    for x in LB['check']:
        W('- %s' % x)
    W('')
    W('> **WHAT DRAFT ONE COST** \u2014 %s' % LB['cost']); W('')
    FE = U['lang']
    W('### Part 10 \u00B7 Across the Language Line \u2014 %s' % FE['title'])
    W('')
    for p2 in FE['setting']:
        W(p2); W('')
    W('**Figure %d.12** \u2014 %s' % (n, FE['cap'])); W('')
    W('*Work in pairs. Student B reads each line as it was said; Student A repairs it out loud.*')
    W('')
    for who, line in FE['turns']:
        W('**%s:** %s' % (who, line)); W('')
    W('*Repair moves you can use without correcting anybody*')
    for x in FE['holds']:
        W('- %s' % x)
    W('')
    W('> **WHAT DOES NOT SURVIVE TRANSLATION** \u2014 %s' % FE['redline']); W('')
    W('**A. After the repair.**'); q(FE['a'], 'open'); W('')
    W('**B. Score the repair.**')
    for x in FE['score']:
        W('- %s' % x)
    W('')
    W('### Part 11 \u00B7 Six-Skill Review')
    W('')
    W('**Figure %d.13** \u2014 %s' % (n, U['rev_fig_cap'])); W('')
    rv = U['rev']
    W('**A. Reading.**'); q(rv['read'], 'mcq'); W('')
    W('**B. Listening.** *(Teacher reads aloud twice.)*'); W('')
    W('> %s' % rv['listen_text']); W('')
    q(rv['listen'], 'gap'); W('')
    W('**C. Speaking.**')
    for x in rv['speak']:
        W('- %s' % x)
    W('')
    W('**D. Writing.** %s' % rv['write']); W('')
    W('**E. Vocabulary.**'); q(rv['vocab'], 'gap'); W('')
    W('**F. Grammar.**'); q(rv['gram'], 'gap'); W('')
    W('### Part 12 \u00B7 Can-Do and Foundations')
    W('')
    W('*I can…*')
    for x in U['cando']:
        W('- %s' % x)
    W('')
    W('*Foundations to build on*')
    for x in U['found']:
        W('- %s' % x)
    W('')
    W('**Figure %d.13** \u2014 %s' % (n, U['end_line'])); W('')
    W('**%s**' % U['end_next']); W('')
    W('---'); W('')

W('## Answer Key')
W('')
W('Every graded exercise in the book, including all ten Life Clinics. Item 0 is worked in the unit itself.')
W('')
import build, render as R, art
R.set_accent(B['level']); art.set_accent(B['level'])
for n in range(1, 11):
    U = importlib.import_module('u%02d' % n).U
    ctx = build.Ctx(os.path.join(HERE, 'media', code))
    xml, key = build.build_unit(U, ctx, B['level'], code)
    W('**Unit %d · %s**' % (n, U['title']))
    W('')
    for line in key:
        W('- %s' % line)
    W('')

dest = os.path.join(HERE, 'out', series.FILESTEM + '_%s_%s_FULL_TEXT.md'
                    % (B['bandge'].replace('.', '-'), B['sub'].replace(' ', '_')))
open(dest, 'w', encoding='utf-8').write('\n'.join(o))
print('%s  %d lines  %s' % (code, len(o), os.path.basename(dest)))
