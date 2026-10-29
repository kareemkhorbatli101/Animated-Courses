# -*- coding: utf-8 -*-
"""Item and front-matter renderers."""
from docx.enum.text import WD_ALIGN_PARAGRAPH as AL
from engine import (Doc, SERIF, SANS, MONO, BODY, NAVY, TEAL, AMBER, GREEN,
                    RED, VIOLET, GREY, INK, F_TASK, F_PREV, F_MODEL, F_FOLLOW,
                    F_DEGR, F_KEY, F_PAY, BORDER)
import curriculum as CUR


# ------------------------------------------------------------------ parts
def item_head(D, it, newpage=True):
    if newpage:
        D.drop_trailing_spacers()
    par = D.p(after=1, newpage=newpage, keep=True)
    D.run(par, it['task'], size=9, font=SANS, bold=True, colour=TEAL)
    par2 = D.p(after=1, keep=True)
    D.run(par2, it['id'], size=20, font=SANS, bold=True, colour=NAVY)
    D.run(par2, '   ' + it['function'], size=11.5, font=SANS, colour=GREY)
    sub = D.p(after=7, keep=True)
    D.run(sub, it['time'], size=9, font=SANS, italic=True, colour=GREY)
    D.rule(NAVY, after=9)


def questions(D, blocks, colour):
    for tag, title, body in blocks:
        D.qblock(tag, title, colour, body)


def payload_strip(D, it):
    D.eyebrow('What this item taught you', VIOLET)
    c = D.box(F_PAY, accent=VIOLET)
    first = True
    for k in ('Strategy', 'Grammar', 'Vocabulary', 'Convention'):
        par = D.cp(c, after=2, first=first)
        first = False
        D.run(par, '%-11s' % k, size=9, font=SANS, bold=True, colour=VIOLET)
        D.run(par, '   ' + it['payload'][k], size=9.5)


def answer_key(D, it):
    D.eyebrow('Answer key', GREY)
    c = D.box(F_KEY, accent=GREY, nosplit=False)
    first = True
    last = len(it['keys']) - 1
    for i, (tag, body) in enumerate(it['keys']):
        par = D.cp(c, after=2, first=first)
        first = False
        D.run(par, tag, size=9.5, font=SANS, bold=True, colour=NAVY)
        D._emit(c, body)
        if i != last:          # a spacer after the last key spills alone
            D.cp(c, after=4)   # onto a page of its own


def model_box(D, paras, band, label='Model response'):
    D.eyebrow('%s — band %d' % (label, band), GREEN)
    c = D.box(F_MODEL, accent=GREEN)
    for i, t in enumerate(paras):
        D.cp(c, t, after=5, first=(i == 0))


def degraded_box(D, it):
    D.eyebrow('The same task at band %d' % it['degraded_band'], RED)
    c = D.box(F_DEGR, accent=RED)
    for i, t in enumerate(it['degraded']):
        D.cp(c, t, after=5, first=(i == 0))


# ------------------------------------------------------------------ email
def render_email(D, it):
    item_head(D, it)

    D.eyebrow('The task', NAVY)
    c = D.box(F_TASK, accent=NAVY)
    for i, t in enumerate(it['scenario']):
        D.cp(c, t, after=5, first=(i == 0))
    D.cp(c, 'In your email, do the following:', after=3, bold=True, size=10)
    D.bullets(c, it['bullets'], size=10)
    D.cp(c, 'Write as much as you can and in complete sentences.',
         after=5, italic=True, size=9.5, colour=GREY)
    for lab, val in it['header']:
        par = D.cp(c, after=1)
        D.run(par, lab + ' ', size=9.5, font=SANS, bold=True, colour=GREY)
        D.run(par, val, size=9.5, font=MONO, colour=NAVY)

    D.eyebrow('Before you write', TEAL)
    questions(D, it['preview'], TEAL)

    model_box(D, it['model'], it['model_band'])

    D.eyebrow('After you read', AMBER)
    for tag, title, body in it['followup']:
        D.qblock(tag, title, AMBER, body)
        if tag == it.get('degraded_after', 'F4') and 'degraded' in it:
            degraded_box(D, it)

    payload_strip(D, it)
    answer_key(D, it)


# ------------------------------------------------------- academic discussion
def render_ad(D, it):
    item_head(D, it)

    D.eyebrow('The discussion', NAVY)
    c = D.box(F_TASK, accent=NAVY)
    par = D.cp(c, after=3, first=True)
    D.run(par, it['prof_name'], size=10, font=SANS, bold=True, colour=NAVY)
    D.run(par, '   Professor', size=8.5, font=SANS, colour=GREY)
    for t in it['professor']:
        D.cp(c, t, after=5)
    for name, text in it['students']:
        par = D.cp(c, after=2, indent=5)
        D.run(par, name, size=10, font=SANS, bold=True, colour=TEAL)
        D.cp(c, text, after=5, indent=5, size=10)
    D.cp(c, 'Your response:', after=2, bold=True, size=10)
    D.bullets(c, it['instructions'], size=9.5, colour=GREY)

    D.eyebrow('Before you write', TEAL)
    questions(D, it['preview'], TEAL)

    model_box(D, it['model'], it['model_band'])

    D.eyebrow('After you read', AMBER)
    for tag, title, body in it['followup']:
        D.qblock(tag, title, AMBER, body)
        if tag == it.get('degraded_after', 'F4') and 'degraded' in it:
            degraded_box(D, it)

    payload_strip(D, it)
    answer_key(D, it)


# --------------------------------------------------------- build a sentence
def render_bas(D, it):
    item_head(D, it)

    D.eyebrow('How this task works', NAVY)
    c = D.box(F_TASK, accent=NAVY)
    for i, t in enumerate(it['intro']):
        D.cp(c, t, after=5, first=(i == 0))

    D.eyebrow('Before you start', TEAL)
    questions(D, it['preview'], TEAL)

    D.eyebrow('The ten items', NAVY)
    for n, label, cue, chips, answer, tail, note in it['items']:
        par = D.p(after=3, before=6, keep=True)
        D.run(par, '%d' % n, size=12, font=SANS, bold=True, colour=NAVY)
        D.run(par, '   ' + label, size=9, font=SANS, colour=TEAL)

        cbox = D.box('FFFFFF', accent=BORDER, after=3)
        pc = D.cp(cbox, after=4, first=True)
        D.run(pc, 'Make an appropriate sentence.', size=8.5, font=SANS,
              italic=True, colour=GREY)
        q = D.cp(cbox, after=4)
        D.run(q, cue, size=10.5, italic=True)
        r = D.cp(cbox, after=4)
        D.run(r, '______  ' * len(chips), size=10.5, colour=GREY)
        D.run(r, tail, size=10.5)
        D.chips_in(cbox, chips)
        a = D.cp(cbox, after=2)
        D.run(a, '✓  ', size=10.5, font=SANS, bold=True, colour=GREEN)
        D.run(a, answer, size=10.5, bold=True, colour=GREEN)
        nn = D.cp(cbox, after=0)
        D.run(nn, note, size=9, italic=True, colour=GREY)

    D.eyebrow('After the ten', AMBER)
    questions(D, it['followup'], AMBER)

    payload_strip(D, it)
    answer_key(D, it)


# ------------------------------------------------------------- front matter
def title_page(D):
    D.p(after=0, before=58)
    par = D.p(after=4, align=AL.CENTER)
    D.run(par, 'THE TOEFL iBT WRITING GUIDE', size=26, font=SANS, bold=True,
          colour=NAVY)
    par = D.p(after=22, align=AL.CENTER)
    D.run(par, 'Three hundred worked examples for the updated test',
          size=13, font=SANS, colour=GREY)
    D.rule(NAVY, after=14)
    for line in ['Build a Sentence · Write an Email · Write for an Academic Discussion',
                 'Every example surrounded by questions that make it teach']:
        par = D.p(after=5, align=AL.CENTER)
        D.run(par, line, size=11, font=SANS, colour=INK)
    D.p(after=0, before=26)
    par = D.p(after=4, align=AL.CENTER)
    D.run(par, 'VOLUME ONE', size=11, font=SANS, bold=True, colour=AMBER)
    for line in ['Task 1 complete — all 100 sentence items, twelve grammar families',
                 'Task 2 — every communicative function, worked',
                 'Task 3 — every discipline, worked',
                 'with the full 300-item curriculum map']:
        par = D.p(after=3, align=AL.CENTER)
        D.run(par, line, size=10, font=SANS, colour=GREY)


def how_it_works(D):
    D.h1('How this book works',
         'Why a model answer on its own teaches almost nothing')
    D.p('Most books of sample answers fail in the same way. The student reads a '
        'good answer, thinks “yes, that is good”, and learns nothing, '
        'because nothing obliged them to notice what makes it good. Reading a '
        'model is not a learning event. Being made to need it is.', after=7)
    D.p('So every example in this book is surrounded by questions, and the '
        'questions are the teaching. They follow four principles.', after=7)

    for n, t, b in [
      ('1', 'You attempt before you read.',
       'Each item asks you to produce the hard sentence yourself before you are '
       'shown how it was done. A model read cold is forgettable; a model read '
       'straight after your own failed attempt is not.'),
      ('2', 'You are pointed at one thing at a time.',
       'Nobody learns from “study this answer”. Each item has a target '
       'structure and a target set of words, chosen in advance, and the '
       'questions aim your attention at exactly those.'),
      ('3', 'You finish by producing, not recognising.',
       'Every item ends with a short new prompt using the same move. '
       'Understanding why a sentence works is not the same skill as writing one, '
       'and only the second is scored.'),
      ('4', 'You are shown the same task done worse.',
       'Quality is invisible without a comparison. Each writing item carries a '
       'band-3 version of the same answer, and you are asked to find what the '
       'difference costs, using the official descriptors.'),
    ]:
        par = D.p(after=2, before=6, keep=True)
        D.run(par, n + '.  ', size=11, font=SANS, bold=True, colour=TEAL)
        D.run(par, t, size=11, font=SANS, bold=True, colour=NAVY)
        D.p(b, indent=6, after=4)

    D.h2('The shape of every item')
    D.table(
      ['', 'What it is', 'What it is for'],
      [['P1–P5', 'three to five questions before the model',
        'decode the task, prime the vocabulary, attempt the structure, commit '
        'to a plan, and predict where marks are lost'],
       ['Model', 'a band-5 answer', 'the thing you were just made to need'],
       ['F1–F5', 'three to five questions after the model',
        'take it apart, harvest the grammar, harvest the vocabulary, compare it '
        'with a band-3 version, then write one yourself'],
       ['Payload', 'what the item taught',
        'named explicitly at the end, so nothing stays implicit'],
       ['Key', 'worked answers to all of them',
        'a question without an answer is a workbook, not a guide']],
      widths=[9, 26, 65])

    D.h2('A word on the hidden syllabus')
    D.p('The three hundred items are not a pile of practice. Each one carries a '
        'teaching payload fixed in advance, and the payloads are sequenced so '
        'that the book walks through a complete course in sentence grammar and '
        'academic vocabulary without ever stopping to lecture. The Build a '
        'Sentence items carry the syntax spine — twelve families, a hundred '
        'structures — and the email and discussion items then put those same '
        'structures to work under time pressure. The full map is printed at the '
        'back.', after=6)


def the_test(D):
    D.h1('The Writing section', 'As set out in the official ETS test overview')
    D.table(
      ['Task', 'Items', 'Time', 'Length', 'Scored'],
      [['Build a Sentence', '10', '~6½ min', 'fixed words to reorder',
        'right or wrong, no partial credit'],
       ['Write an Email', '1', '7 min', 'no stated word count', '0–5'],
       ['Write for an Academic Discussion', '1', '10 min',
        'at least 100 words', '0–5']],
      widths=[32, 9, 12, 24, 23])
    D.p('The Writing section is 12 items in about 23 minutes, and it comes third, '
        'after Reading and Listening. Each task is separately timed and you '
        'cannot go back.', after=6)
    D.p('Two things on that table are worth dwelling on. There is no integrated '
        'reading-and-listening essay any more, and there is no 300-word '
        'independent essay: if you are working from older material, both of '
        'those are gone. And the email task has no official word count at all '
        '— ETS asks only that you “write as much as you can and in '
        'complete sentences”, which in seven minutes means roughly 110 to '
        '180 words done well.', after=6)

    D.h2('The band descriptors, condensed')
    D.p('Both written tasks are scored 0–5. What follows is condensed from '
        'the official ETS scoring guides; the wording in italics is theirs.',
        after=5, size=9.5, colour=GREY)
    D.h3('Write an Email', TEAL)
    D.table(
      ['Band', 'What separates it from the band below'],
      [['5', 'Fully successful. Elaboration that effectively supports the '
            'purpose; effective syntactic variety and precise, idiomatic word '
            'choice; consistent use of appropriate social conventions; almost '
            'no errors beyond those expected under timed conditions.'],
       ['4', 'Generally successful. Adequate elaboration; syntactic variety and '
            'appropriate word choice; mostly appropriate conventions; few errors.'],
       ['3', 'Partially successful. Elaboration that partially supports the '
            'purpose; a moderate range of syntax and vocabulary; some noticeable '
            'errors in structure, word form, idiom or social conventions.'],
       ['2', 'Mostly unsuccessful. Limited or irrelevant elaboration; a limited '
            'range of syntax; an accumulation of errors.'],
       ['1', 'Unsuccessful. Very little elaboration; telegraphic language; '
            'serious and frequent errors; language mostly borrowed from the prompt.'],
       ['0', 'Blank, off-topic, not in English, or copied from the prompt.']],
      widths=[8, 92], head_fill=TEAL)
    D.h3('Write for an Academic Discussion', TEAL)
    D.table(
      ['Band', 'What separates it from the band below'],
      [['5', 'A relevant and very clearly expressed contribution. Relevant and '
            'well-elaborated explanations, examples or details; effective use of '
            'a variety of syntactic structures and precise, idiomatic word '
            'choice; almost no errors beyond those expected under timed conditions.'],
       ['4', 'A relevant contribution, easily understood. Adequately elaborated; '
            'a variety of structures and appropriate word choice; few errors.'],
       ['3', 'Mostly relevant and mostly understandable. Part of an explanation, '
            'example or detail may be missing, unclear or irrelevant; some '
            'noticeable errors.'],
       ['2', 'An attempt to contribute, but limitations make ideas hard to '
            'follow; poorly elaborated or only partly relevant.'],
       ['1', 'Few or no coherent ideas; severely limited range; language mostly '
            'borrowed from the prompt.'],
       ['0', 'Blank, off-topic, not in English, or copied from the prompt.']],
      widths=[8, 92], head_fill=TEAL)


def consequentiality(D):
    D.h1('The most useful thing in the official guide',
         'Why a 5 is not an answer without mistakes')
    D.p('ETS publishes a sample response for each written task, with its own '
        'scoring comment. Put the two side by side and they teach something no '
        'preparation book says out loud.', after=7)

    D.h3('The official email sample — band 4', AMBER)
    c = D.box(F_FOLLOW, accent=AMBER)
    D.cp(c, 'It contains three clear misspellings: engageing, sucessfully, '
            'recieved. It also drops an article: trouble with online submission '
            'form. None of that stopped it reaching band 4.', after=4, first=True)
    D.cp(c, 'What capped it was one thing, and ETS names it: “Verb tense '
            'issues (…if my poems can successfully sent) are consequential '
            'enough to prevent this response from earning a score of 5.”',
         after=0, italic=True)

    D.h3('The official discussion sample — band 5', GREEN)
    c = D.box(F_MODEL, accent=GREEN)
    D.cp(c, 'It contains a subject-verb agreement error — flexible options '
            '“that fits student’s schedules” — and a '
            'misplaced apostrophe. It still earned a 5.', after=0, first=True)

    D.p('So the line between bands is not how many mistakes you made. The band-5 '
        'descriptor says so explicitly: it allows “almost no lexical or '
        'grammatical errors other than those expected from a competent writer '
        'writing under timed conditions”, and it gives typos and there/their '
        'as examples.', before=8, after=6)
    D.p('What moves you down a band is an error that damages the message. A '
        'misspelling the reader repairs without noticing costs you nothing. A '
        'broken verb phrase that makes the reader stop and work out what you '
        'meant costs you a band.', after=6)
    par = D.p(after=6)
    D.run(par, 'The practical consequence: ', bold=True)
    D.run(par, 'do not spend your last minute hunting for spelling slips. Spend '
               'it checking that every verb has a subject it agrees with, and a '
               'tense that makes sense. That is where the bands are actually won '
               'and lost.')


def appendix_map(D):
    D.h1('Appendix: the curriculum map',
         'What each of the three hundred items is for')
    D.p('Nothing in this book is a random exercise. Every item has a teaching '
        'payload assigned before it was written, and the payloads are sequenced '
        'into a course. This is that course.', after=8)

    D.h2('Task 1 · Build a Sentence — the syntax spine')
    D.p('Twelve families, one hundred structures. These are the sentence patterns '
        'that the email and discussion tasks then draw on.', after=5,
        size=9.5, colour=GREY)
    rows = []
    n = 0
    for fam, structures in CUR.BAS_FAMILIES:
        lo = n + 1
        n += len(structures)
        rows.append(['%d–%d' % (lo, n), fam,
                     '; '.join(structures[:4]) + ('; …' if len(structures) > 4 else '')])
    D.table(['Items', 'Family', 'Structures include'], rows, widths=[10, 30, 60])

    D.h2('Task 2 · Write an Email — ten functions, ten items each')
    rows = [[fn, conv, '%d' % 10] for fn, conv, _ in CUR.EMAIL_FUNCTIONS]
    D.table(['Communicative function', 'The convention it teaches', 'Items'],
            rows, widths=[32, 58, 10])

    D.h2('Task 3 · Academic Discussion — ten disciplines × five question shapes')
    D.table(['Question shape', 'The rhetorical move it teaches'],
            [[s, m] for s, m in CUR.AD_SHAPES], widths=[42, 58])
    par = D.p(after=6)
    D.run(par, 'Disciplines: ', bold=True, size=9.5)
    D.run(par, ', '.join(CUR.AD_DISCIPLINES) + '.', size=9.5)
    D.p('Two items per discipline per shape gives one hundred discussions, with '
        'no topic repeated and every shape practised ten times.', after=6,
        size=9.5, colour=GREY)
