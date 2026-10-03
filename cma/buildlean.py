# -*- coding: utf-8 -*-
"""Build one lean handout: headings, exercises, answer key.

Usage: python3 buildlean.py content.lean_1_1 <out.docx>
"""
import sys, os, importlib

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import docxw as D
from docxw import Doc, para, run, INDIGO, GREY, GREEN, PLUM, TEAL, RED
from blanks import Blanks, answers
import lean as L


def build(mod, out):
    c = importlib.import_module(mod)
    d = Doc(c.TITLE, 'CMA Part 1 · Section A')
    bl = Blanks()
    hdr = d.header(c.TITLE, c.RUNNING)

    d.unit_title(c.TITLE)
    d.cefr(c.LOCATOR)

    # ---- 1. multiple choice ------------------------------------------
    L.exbar(d, 'Exercise 1', 'Multiple choice. Ring one letter for each '
            'question.')
    for i, (stem, opts, _a, _w) in enumerate(c.MCQ, 1):
        L.mcq_compact(d, i, stem, opts)
    d.blank()

    # ---- 2. true or false --------------------------------------------
    L.exbar(d, 'Exercise 2', 'True or false. Ring T or F for each '
            'statement.')
    L.truefalse(d, [s for s, _t, _w in c.TF])

    # ---- 3. fill in the spaces ---------------------------------------
    L.exbar(d, 'Exercise 3', 'Fill in the spaces. Write one word in each '
            'numbered space.')
    got = [a for t in c.FILL for a in answers(t)]
    d.bank(sorted(set(got) | set(c.FILL_EXTRA), key=str.lower),
           'Not every word is used.')
    for t in c.FILL:
        d.fill(bl.parse(t), sz=20, tight=True)
    d.blank()

    # ---- 4. the five verbs -------------------------------------------
    L.exbar(d, 'Exercise 4', 'Matching. Write the letter of the meaning '
            'beside each verb.')
    L.matchbox(d, ('Verb', 'Meaning in financial reporting'),
               c.VERBS_L, c.VERBS_R)

    # ---- 5. the verbs in use -----------------------------------------
    L.exbar(d, 'Exercise 5', 'Fill in the spaces with the right verb, in the '
            'right form.')
    ogot = [a for t in c.ORONTES for a in answers(t)]
    d.bank(sorted(set(ogot) | set(c.ORONTES_EXTRA), key=str.lower),
           'Not every word is used.')
    for t in c.ORONTES:
        d.fill(bl.parse(t), sz=20, tight=True)
    d.blank()

    # ---- 6. users and their questions --------------------------------
    # The page turns here on purpose: Exercise 6 is a nine-row table, and its
    # heading sitting at the foot of the previous page with the table starting
    # on this one is the one layout fault worth a forced break.
    d.body.append(para([run(' ', sz=2)],
                       '<w:spacing w:after="0"/>'
                       '<w:pageBreakBefore w:val="true"/>'))
    L.exbar(d, 'Exercise 6', 'Matching. Write the letter of the key question '
            'beside each user.')
    L.matchbox(d, ('User', 'Key question'), c.USERS_L, c.USERS_R)

    # ---- 7. the three user questions ---------------------------------
    L.exbar(d, 'Exercise 7', 'Matching. Write the letter of the statement '
            'that answers each question.')
    L.matchbox(d, ('Question a user asks', 'Statement that answers it'),
               c.QS_L, c.QS_R)

    # ---- 8. users and their decisions --------------------------------
    L.exbar(d, 'Exercise 8', 'Matching. The seven users are the same seven, '
            'numbered the same way, as in Exercise 6. Write the letter of the '
            'decision each one is trying to make.')
    L.options(d, 'DECISIONS', c.DEC_R)
    L.letterrow(d, len(c.DEC_A))

    # ---- 9. the qualities --------------------------------------------
    L.exbar(d, 'Exercise 9', 'Classification. Write F for a fundamental '
            'quality, E for an enhancing one, C for a constraint.')
    L.labelrow(d, c.QUAL_I)

    d.page_break_section(hdr=hdr, restart=True)

    # ---- the key -----------------------------------------------------
    d.unit_title('Answer Key')
    d.cefr(c.LOCATOR)
    L.keyblock(d, 'Exercise 1 · multiple choice',
               [(str(i), '(%s)   %s' % ('ABCD'[a], w))
                for i, (_s, _o, a, w) in enumerate(c.MCQ, 1)],
               GREEN, (8, 92))
    L.keyblock(d, 'Exercise 2 · true or false',
               [(str(i), ('True' if t else 'False')
                 + (' — ' + w if w else ''))
                for i, (_s, t, w) in enumerate(c.TF, 1)], GREEN, (8, 92))

    nfill = len([a for t in c.FILL for a in answers(t)])
    rows = [(str(n), a) for n, a, _note in bl.key]
    d.h3('Exercises 3 and 5 · the spaces', INDIGO)
    d.body.append(para(
        [run('   ·   '.join('%d  %s' % (n, a) for n, a, _x in bl.key),
             sz=18)],
        '<w:spacing w:after="120" w:line="300" w:lineRule="auto"/>'))
    d.body.append(para(
        [run('1–%d are Exercise 3; %d–%d are Exercise 5.'
             % (nfill, nfill + 1, len(bl.key)), sz=15, color=GREY)],
        '<w:spacing w:after="120"/>'))

    L.keyblock(d, 'Exercises 4, 6, 7 and 8 · the matching',
               [('Ex 4', '   '.join('%s–%s' % (v, a) for v, a
                                    in zip(c.VERBS_L, c.VERBS_A))),
                ('Ex 6', '   '.join('%d–%s' % (i, a) for i, a
                                    in enumerate(c.USERS_A, 1))),
                ('Ex 7', '   '.join('%d–%s' % (i, a) for i, a
                                    in enumerate(c.QS_A, 1))),
                ('Ex 8', '   '.join('%d–%s' % (i, a) for i, a
                                    in enumerate(c.DEC_A, 1))),
                ('Ex 7', 'C and G name the same two statements. The figure '
                         'gives suppliers the balance sheet’s short-term '
                         'items first and gives lenders cash flows first, '
                         'which is what separates them.')],
               PLUM, (10, 90))
    # Grouped by column rather than row by row: seven rows carrying one word
    # each are three times the height of the same answers grouped.
    groups = {}
    for i, (q, a) in enumerate(zip(c.QUAL_I, c.QUAL_A), 1):
        groups.setdefault(a, []).append('%d %s' % (i, q))
    L.keyblock(d, 'Exercise 9 · the qualities',
               [(col, ',   '.join(xs)) for col, xs in sorted(groups.items())],
               TEAL, (12, 88))

    d.save(out)
    return out


if __name__ == '__main__':
    mod = sys.argv[1] if len(sys.argv) > 1 else 'content.lean_1_1'
    out = sys.argv[2] if len(sys.argv) > 2 else \
        os.path.join(os.path.dirname(os.path.dirname(
            os.path.abspath(__file__))), 'CMA_Handout_1_1.docx')
    p = build(mod, out)
    print('wrote', p, os.path.getsize(p), 'bytes')
