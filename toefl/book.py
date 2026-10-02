"""Renders a volume of the TOEFL 2026 B1 course from the unit data files."""
import os, sys, importlib, zlib

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import frames as F
from docxw import Doc, INDIGO, INDIGO_D, BLUE, AMBER, TEAL, PLUM, GREY, GREEN, RED, PERI

VOLS = {1: dict(units=range(1, 11), test=1), 2: dict(units=range(11, 21), test=2)}

SKILL_TASK = {
    'r1': ('reading', 1, 'Complete the Words'),
    'r2': ('reading', 2, 'Read in Daily Life'),
    'r3': ('reading', 3, 'Read an Academic Passage'),
    'l1': ('listening', 1, 'Conversations'),
    'l2': ('listening', 2, 'Announcements'),
    'l3': ('listening', 3, 'Academic Talks'),
}


# --------------------------------------------------------------- helpers ----
class Spread:
    """Places the correct answer so that A, B, C and D come up equally often.

    An author writing items by hand drifts towards one letter without noticing.
    The data says which option is right; this decides where it sits, the same
    way on every run.
    """

    def __init__(self):
        self.used = [0, 0, 0, 0]

    def place(self, stem, opts, ai):
        lo = min(self.used)
        cands = [i for i in range(4) if self.used[i] == lo]
        target = cands[zlib.crc32(stem.encode('utf-8')) % len(cands)]
        self.used[target] += 1
        right = opts[ai]
        rest = iter([o for k, o in enumerate(opts) if k != ai])
        return [right if i == target else next(rest) for i in range(4)], target


def _items(d, block, start, key, skill=None, spread=None):
    """Render a run of 4-option items and collect their answers."""
    n = start
    for stem, opts, ans, why in block:
        if spread is not None:
            opts, ans = spread.place(stem, opts, ans)
        d.mcq(n, stem, opts)
        key.append((n, 'ABCD'[ans], why))
        n += 1
    return n


def _dock(d, spec):
    kind = spec[0]
    if kind == 'email':
        _, to, frm, date, subj, lines = spec
        d.figure(*F.email_card(to, frm, date, subj, lines))
    elif kind == 'social':
        _, name, handle, lines, who = spec
        d.figure(*F.social_card(name, handle, lines, kind=who))
    else:
        _, heading, lines, tag = spec
        d.figure(*F.notice_card(heading, lines, kind=tag))


# ------------------------------------------------------------- the unit -----
def render_unit(d, U):
    n, title = U['n'], U['title']
    sp = Spread()
    key = {}            # section -> list of (number, answer, why)

    # ---- page 1: opener -----------------------------------------------------
    d.unit_title('Unit %d · %s' % (n, title))
    d.strapline('TOEFL iBT® Preparation Course 2026 · Volume %d' % U['vol'])
    d.cefr('CEFR B1  ·  Grammar: %s  ·  Word field: %s' % (U['grammar'], U['field']))
    d.figure(*F.unit_opener(n, title, U['subs'], U['icons']))
    d.cando_box(U['candos'])
    d.body_p(U['opener_line'])
    d.page_break_section()

    # ---- page 2: vocabulary -------------------------------------------------
    d.partbar('Vocabulary 1 · Academic', '24 words from the Academic Word List')
    d.body_p('These twenty-four words come back through the whole unit, and again in the '
             'review. Cover the right-hand column and test yourself.')
    d.wordlist(U['acad'], 2, INDIGO)
    d.ex('Exercise A   Work in pairs. Ask and answer.')
    d.items(U['vocab_talk'])
    d.partbar('Vocabulary 2 · Campus and everyday', '12 words for the daily-life tasks')
    d.body_p('The exam does not only test academic English. Notices, emails, conversations '
             'and announcements use the everyday words below.')
    d.wordlist(U['campus'], 2, AMBER)
    d.wordbank('Words you will meet again:', U['again'], PERI)
    d.page_break_section()

    # ---- pages 3-5: reading -------------------------------------------------
    for tag in ('r1', 'r2', 'r3'):
        blk = U[tag]
        skill, cyc, task = SKILL_TASK[tag]
        d.figure(*F.skill_bar(skill, cyc, blk['sub'], task))
        d.skillbox(blk['skill'][0], blk['skill'][1], skill)
        rows = []
        if tag == 'r1':
            d.ex('Exercise A   Guided practice. Five words are not complete. Write the missing letters.', skill)
            d.gapped(blk['guided_text'])
            d.body_p('The first one is done for you: %s' % blk['guided_hint'], i=True)
            d.ex('Exercise B   Exam practice. One paragraph, ten gaps — the real task.', skill)
            d.gapped(blk['exam_text'])
            rows = [('Guided 1–5', ', '.join(blk['guided'])),
                    ('Exam 1–10', ', '.join(blk['exam']))]
            key[tag] = [(i + 1, a, '') for i, a in enumerate(blk['exam'])]
        elif tag == 'r2':
            for spec in blk['docs']:
                _dock(d, spec)
            d.ex('Exercise A   Guided practice. The answer is on the page — find it.', skill)
            k = []
            nn = _items(d, blk['guided'], 1, k, skill, sp)
            d.ex('Exercise B   Exam practice.', skill)
            _items(d, blk['exam'], nn, k, skill, sp)
            key[tag] = k
        else:
            d.passage(blk['title'], blk['paras'], blk['words'])
            d.ex('Exercise A   Guided practice.', skill)
            k = []
            nn = _items(d, blk['guided'], 1, k, skill, sp)
            d.ex('Exercise B   Exam practice.', skill)
            _items(d, blk['exam'], nn, k, skill, sp)
            key[tag] = k
        if rows:
            d.body_p('Check your answers in the key at the back of the book.', i=True)
        d.page_break_section()

    # ---- pages 6-8: listening ----------------------------------------------
    for tag in ('l1', 'l2', 'l3'):
        blk = U[tag]
        skill, cyc, task = SKILL_TASK[tag]
        d.figure(*F.skill_bar(skill, cyc, blk['sub'], task))
        d.ex('Exercise A   Listen and choose a response. You hear one line. Choose the best reply.', skill)
        k = []
        nn = _items(d, blk['warm'], 1, k, skill, sp)
        if tag == 'l1':
            d.figure(*F.convo_scene(blk['caption']))
        elif tag == 'l2':
            d.figure(*F.announce_scene(blk['caption'], blk['poster']))
        else:
            d.figure(*F.talk_scene(blk['caption'], blk['board']))
        d.skillbox(blk['skill'][0], blk['skill'][1], skill)
        d.ex('Exercise B   Listen and answer. The audio plays once.', skill)
        _items(d, blk['items'], nn, k, skill, sp)
        key[tag] = k
        d.body_p('Audio script: see the back of the book. Do not read it before you listen.', i=True)
        d.page_break_section()

    # ---- pages 9-11: speaking ----------------------------------------------
    for cyc, blk in enumerate(U['sp'], 1):
        d.figure(*F.skill_bar('speaking', cyc, blk['sub'], 'Repeat + Interview'))
        d.h3('Part 1 · Listen and Repeat', TEAL)
        d.body_p('You hear a sentence and repeat it once. There is no preparation time, '
                 'and the sentences get longer. Focus: %s' % blk['focus'])
        d.figure(*F.repeat_strip(blk['repeat']))
        d.skillbox(blk['skill'][0], blk['skill'][1], 'speaking')
        d.h3('Part 2 · Take an Interview', TEAL)
        d.body_p('An interviewer asks you four questions on one theme: %s. '
                 'Answer each one fully. There is no preparation time.' % blk['theme'])
        d.figure(*F.interview_panel(blk['theme'], blk['qs']))
        d.h3('A good answer sounds like this', TEAL)
        for q_no, model in blk['model']:
            d.body_p('Question %d  —  %s' % (q_no, model))
        if blk.get('selfcheck'):
            d.checkrow(blk['selfcheck'])
        d.page_break_section()

    # ---- pages 12-14: writing ----------------------------------------------
    w1 = U['w1']
    d.figure(*F.skill_bar('writing', 1, w1['sub'], 'Build a Sentence'))
    d.body_p('You see a sentence, then a set of words in boxes. Put the words in order to '
             'make one grammatical sentence. Almost every item in the real test makes a '
             'question or a question inside another sentence.')
    d.skillbox(w1['skill'][0], w1['skill'][1], 'writing')
    d.ex('Exercise A   Guided practice. The first three are worked through.', 'writing')
    kw = []
    for i, (prompt, tiles, ans) in enumerate(w1['guided'], 1):
        d.figure(*F.build_demo(prompt, len(ans.replace('?', '').replace('.', '').split()) - 0, tiles))
        d.body_p('%d.  %s' % (i, ans), i=True)
        kw.append((i, ans, ''))
    d.ex('Exercise B   Exam practice. Write the sentence.', 'writing')
    for i, (prompt, tiles, ans) in enumerate(w1['exam'], len(w1['guided']) + 1):
        d.item('%d.  ' % i, prompt)
        d.body_p('      ' + '  /  '.join(tiles), sz=20, i=True)
        d.lines(1, 560)
        kw.append((i, ans, ''))
    key['w1'] = kw
    d.page_break_section()

    w2 = U['w2']
    d.figure(*F.skill_bar('writing', 2, w2['sub'], 'Write an Email'))
    d.body_p('You read a short situation and write an email. You have 7 minutes. '
             'The three bullet points are the mark scheme: answer all three.')
    for ln in w2['scenario']:
        d.body_p(ln)
    d.bullets(w2['bullets'])
    d.figure(*F.email_card(w2['to'], 'you@student.edu', w2['date'], w2['subject'], ['', '', '', '', '']))
    d.skillbox(w2['skill'][0], w2['skill'][1], 'writing')
    d.h3('Model email', PLUM)
    for ln in w2['model']:
        d.body_p(ln)
    d.h3('Why it works', PLUM)
    d.bullets(w2['notes'])
    d.ex('Now write your own. 7 minutes.', 'writing')
    d.lines(8)
    d.page_break_section()

    w3 = U['w3']
    d.figure(*F.skill_bar('writing', 3, w3['sub'], 'Write for an Academic Discussion'))
    d.body_p('A professor asks a question and two students answer. You add your own post. '
             'You have 10 minutes and an effective answer is at least 100 words.')
    d.figure(*F.discussion_panel(w3['prof'], w3['question'], w3['posts']))
    d.skillbox(w3['skill'][0], w3['skill'][1], 'writing')
    d.h3('Sentence starters', PLUM)
    d.bullets(w3['starters'])
    d.h3('Model post', PLUM)
    for ln in w3['model']:
        d.body_p(ln)
    d.body_p('[%d words]' % w3['model_words'], i=True)
    d.ex('Now write your own. 10 minutes, at least 100 words.', 'writing')
    d.lines(10)
    d.page_break_section()

    # ---- page 15: grammar ---------------------------------------------------
    gr = U['gram']
    d.partbar('Grammar focus', gr['title'])
    d.table(gr['headers'], gr['rows'], INDIGO)
    for ln in gr['notes']:
        d.body_p(ln)
    d.watchout(gr['watch'])
    kg = []
    for gi, (instr, its, ans) in enumerate(gr['ex'], 1):
        d.ex('Exercise %d   %s' % (gi, instr))
        d.items(its)
        kg.append((gi, ' · '.join(ans), ''))
    key['gram'] = kg
    d.h3('How this is tested in Build a Sentence', PLUM)
    d.body_p(gr['bas'])
    d.page_break_section()

    # ---- page 16: review ----------------------------------------------------
    rv = U['rev']
    d.partbar('Unit review and progress check', 'Unit %d' % n)
    d.ex('Exercise A   Vocabulary. Write the word.')
    d.items([c for c, a in rv['vocab']])
    d.ex('Exercise B   Grammar. Complete the sentence.')
    d.items([c for c, a in rv['gram']])
    d.ex('Exercise C   One timed mini-section. 6 minutes.')
    kr = []
    _items(d, rv['mini'], 1, kr, None, sp)
    key['rev'] = ([(i + 1, a, '') for i, (c, a) in enumerate(rv['vocab'])],
                  [(i + 1, a, '') for i, (c, a) in enumerate(rv['gram'])], kr)
    d.h3('Can you do these now?')
    d.checkrow(U['candos'])
    d.tip(U['tip'])
    d.page_break_section()
    return key


# ------------------------------------------------------------ front matter --
def front_matter(d, vol, units):
    strap = ['Reading · Listening · Speaking · Writing',
             'Every task type in the 2026 test, three times a unit']
    d.figure(*F.cover_front(vol, 'Units %d–%d' % (units[0]['n'], units[-1]['n']), strap), cover=True)
    d.page_break_section(zero=True)

    d.unit_title('TOEFL iBT® Preparation Course 2026')
    d.strapline('Volume %d · Units %d–%d · CEFR B1'
                % (vol, units[0]['n'], units[-1]['n']))
    d.cefr('Student’s Book with Practice Test %d' % vol)
    d.blank()
    d.body_p('This course prepares B1 learners for the TOEFL iBT® test as it has been '
             'since 21 January 2026. Every task name, item count and timing in this book '
             'follows the official ETS practice test for that form.')
    d.body_p('Twenty units, ten in each volume. Each unit takes one topic from the test — '
             'American History, Astronomy, Public Health — and runs it through all four '
             'skills, three times, on three different sub-topics.')
    d.blank()
    d.keyline('Series', 'TOEFL iBT® Preparation Course 2026')
    d.keyline('Level', 'CEFR B1 (targeting a steady 3.0–4.0 band)')
    d.keyline('Components', 'Student’s Book · Audio · Interview video')
    d.keyline('This volume', 'Units %d–%d, Practice Test %d, answer key, audio scripts, glossary'
              % (units[0]['n'], units[-1]['n'], vol))
    d.blank()
    d.body_p('TOEFL and TOEFL iBT are registered trademarks of ETS. This publication is not '
             'endorsed by or affiliated with ETS. Format details are taken from ETS’s own '
             'published practice material for the January 2026 form.', sz=18)
    d.page_break_section()

    d.partbar('Map of the book', 'Volume %d' % vol)
    rows = [(u['n'], u['title'], ' · '.join(s.lower() for s in u['subs']),
             u['grammar'].split(' · ')[0], u['field']) for u in units]
    d.figure(*F.map_strip(vol, rows))
    d.page_break_section()

    d.partbar('How to use this book', 'Three cycles, four skills')
    d.body_p('Every unit is sixteen pages and every unit is built the same way, so once you '
             'have worked through Unit %d you know where everything is.' % units[0]['n'])
    d.figure(*F.unit_tour())
    d.h3('What a cycle is')
    d.body_p('A cycle is one sub-topic taken through one skill. Cycle 1 of Reading, Listening, '
             'Speaking and Writing all deal with sub-topic A; cycle 2 with sub-topic B; cycle 3 '
             'with sub-topic C. That is why the email you write in Writing cycle 2 answers the '
             'announcement you heard in Listening cycle 2.')
    d.h3('Teach, guide, test')
    d.body_p('Inside every cycle the order is the same. A skill box tells you what to do. A '
             'guided exercise does it with help. An exam exercise does it the way the test will.')
    d.page_break_section()

    d.partbar('The 2026 test at a glance', 'What you are preparing for')
    d.figure(*F.format_map())
    d.figure(*F.band_scale())
    d.page_break_section()

    d.partbar('What an adaptive test does to you', 'Modules, and why you cannot go back')
    d.figure(*F.adaptive_map())
    d.body_p('Reading and Listening are adaptive. Each is split into two modules, and how you '
             'do in Module 1 decides how hard Module 2 is. Two rules follow, and they are not '
             'the same rule.')
    d.bullets([
        'In Reading you can move Next and Back freely inside a module. Only the jump to '
        'Module 2 is one-way.',
        'In Listening you cannot go back to a previous question at all. The audio plays once.',
        'The early questions in a module carry the most weight, because they place you. '
        'Never rush them to buy time later.'])
    d.figure(*F.gap_demo())
    d.page_break_section()

    d.partbar('Study planner', 'Twelve weeks, two units a week')
    weeks = []
    us = list(units)
    for w in range(5):
        a, b = us[w * 2], us[w * 2 + 1]
        weeks.append(('Week %d' % (w * 2 + 1), 'Unit %d · %s' % (a['n'], a['title']),
                      'Vocabulary, Reading, Listening'))
        weeks.append(('Week %d' % (w * 2 + 2), 'Unit %d · %s' % (b['n'], b['title']),
                      'Speaking, Writing, grammar, review'))
    weeks.append(('Week 11', 'Review units %d–%d' % (us[0]['n'], us[-1]['n']), 'Glossary and grammar reference'))
    weeks.append(('Week 12', 'Practice Test %d' % vol, 'Sit it in one sitting, then mark it'))
    d.table(['When', 'What', 'Focus'], weeks, INDIGO, [16, 44, 40])
    d.page_break_section()


# ------------------------------------------------------------ practice test --
def render_test(d, T):
    vol = T['n']
    sp = Spread()
    d.unit_title('Practice Test %d' % vol)
    d.strapline('The full 2026 shape: 97 items, in the order the real test asks them')
    d.cefr('Reading 40  ·  Listening 34  ·  Writing 12  ·  Speaking 11')
    d.body_p('Sit this in one sitting. Do not look anything up. Mark it with the key at the '
             'back, then read the explanations — they matter more than the score.')
    d.figure(*F.format_map())
    d.page_break_section()

    key = {}
    # ---- reading ----
    for mi, M in enumerate(T['reading'], 1):
        d.partbar('Reading Section, Module %d' % mi,
                  'In an actual test the clock shows you how long you have', 'reading')
        if mi == 2:
            d.body_p('You cannot return to Module 1 once Module 2 has begun.', i=True)
        d.body_p('You can use Next and Back to move between questions inside this module.', i=True)
        d.ex('Fill in the missing letters in the paragraph.  (Questions 1–10)', 'reading')
        d.gapped(M['gap_text'])
        k = list(enumerate(M['gap_ans'], 1))
        k = [(i, a, '') for i, a in k]
        for spec in M['docs']:
            _dock(d, spec)
        nn = _items(d, M['daily'], 11, k, 'reading', sp)
        d.passage(M['passage'][0], M['passage'][1], M['passage'][2])
        _items(d, M['academic'], nn, k, 'reading', sp)
        key['reading %d' % mi] = k
        d.page_break_section()

    # ---- listening ----
    for mi, M in enumerate(T['listening'], 1):
        d.partbar('Listening Section, Module %d' % mi,
                  'You will not be able to return to previous questions', 'listening')
        d.ex('Choose the best response.', 'listening')
        k = []
        nn = _items(d, M['warm'], 1, k, 'listening', sp)
        for sc, its in M['convos']:
            d.body_p('Listen to a conversation.', i=True)
            d.figure(*F.convo_scene('Conversation'))
            nn = _items(d, its, nn, k, 'listening', sp)
        sc, its = M['announce']
        d.body_p('Listen to an announcement.', i=True)
        d.figure(*F.announce_scene('Announcement', M['poster']))
        nn = _items(d, its, nn, k, 'listening', sp)
        sc, its = M['talk']
        d.body_p('Listen to a talk.', i=True)
        d.figure(*F.talk_scene('Academic talk', M['board']))
        nn = _items(d, its, nn, k, 'listening', sp)
        key['listening %d' % mi] = k
        d.page_break_section()

    # ---- writing ----
    W = T['writing']
    d.partbar('Writing Section', '12 questions, three types of task', 'writing')
    d.ex('Build a Sentence. Move the words to make grammatical sentences.', 'writing')
    kw = []
    for i, (prompt, tiles, ans) in enumerate(W['build'], 1):
        d.item('%d.  ' % i, prompt)
        d.body_p('      ' + '  /  '.join(tiles), sz=20, i=True)
        d.lines(1, 560)
        kw.append((i, ans, ''))
    key['writing build'] = kw
    d.ex('Write an Email.  You have 7 minutes.', 'writing')
    for ln in W['email']['scenario']:
        d.body_p(ln)
    d.bullets(W['email']['bullets'])
    d.figure(*F.email_card(W['email']['to'], 'you@student.edu', W['email']['date'],
                           W['email']['subject'], ['', '', '', '', '']))
    d.lines(8)
    d.ex('Write for an Academic Discussion.  You have 10 minutes.', 'writing')
    d.figure(*F.discussion_panel(W['disc']['prof'], W['disc']['question'], W['disc']['posts']))
    d.body_p('An effective response will contain at least 100 words.', i=True)
    d.lines(10)
    d.page_break_section()

    # ---- speaking ----
    S = T['speaking']
    d.partbar('Speaking Section', '11 questions, two types of task · no preparation time', 'speaking')
    d.ex('Listen and Repeat. Repeat only once.', 'speaking')
    d.figure(*F.repeat_strip(S['repeat']))
    d.ex('Take an Interview. Answer the questions and say as much as you can.', 'speaking')
    d.body_p(S['interview'][0])
    d.figure(*F.interview_panel(S['interview'][0], S['interview'][1]))
    d.page_break_section()
    return key


# -------------------------------------------------------------- back matter --
def answer_key(d, vol, units, tkey, ukeys):
    d.unit_title('Answer key')
    d.strapline('Volume %d · Units %d–%d and Practice Test %d'
                % (vol, units[0]['n'], units[-1]['n'], vol))
    d.cefr('Every wrong option is explained, because a letter on its own teaches nothing.')
    d.page_break_section()
    for u in units:
        k = ukeys[u['n']]
        d.keybar('Unit %d · %s' % (u['n'], u['title']))
        d.h3('Reading 1 · Complete the Words', BLUE)
        d.keygrid([a for _, a, _ in k['r1']], 5)
        for tag, lab, col in (('r2', 'Reading 2 · Read in Daily Life', BLUE),
                              ('r3', 'Reading 3 · Academic Passage', BLUE),
                              ('l1', 'Listening 1 · Conversation', AMBER),
                              ('l2', 'Listening 2 · Announcement', AMBER),
                              ('l3', 'Listening 3 · Academic Talk', AMBER)):
            d.h3(lab, col)
            for num, ans, why in k[tag]:
                d.why(num, ans, why)
        d.h3('Writing 1 · Build a Sentence', PLUM)
        for num, ans, _ in k['w1']:
            d.keyline('%d' % num, ans)
        d.h3('Grammar focus', INDIGO)
        for num, ans, _ in k['gram']:
            d.keyline('Exercise %d' % num, ans)
        d.h3('Unit review', INDIGO)
        voc, gram, mini = k['rev']
        d.keyline('A  Vocabulary', ' · '.join('%d %s' % (i, a) for i, a, _ in voc))
        d.keyline('B  Grammar', ' · '.join('%d %s' % (i, a) for i, a, _ in gram))
        d.keyline('C  Mini-section', ' · '.join('%d %s' % (i, a) for i, a, _ in mini))
        d.page_break_section()
    d.keybar('Practice Test %d' % vol)
    for sec in ('reading 1', 'reading 2', 'listening 1', 'listening 2'):
        d.h3(sec.title().replace(' ', ', Module '), BLUE if 'read' in sec else AMBER)
        d.keygrid([a for _, a, _ in tkey[sec]], 5)
        for num, ans, why in tkey[sec]:
            if why:
                d.why(num, ans, why)
    d.h3('Writing · Build a Sentence', PLUM)
    for num, ans, _ in tkey['writing build']:
        d.keyline('%d' % num, ans)
    d.body_p('The email, the discussion post and the whole Speaking section are rated, not '
             'marked. Use the band descriptors on the next page.')
    d.page_break_section()


def audio_scripts(d, vol, units, T):
    d.unit_title('Audio scripts')
    d.strapline('Volume %d' % vol)
    d.cefr('Read these only after you have listened. At B1 a script is a reading text too, '
           'and teachers may use it as one.')
    d.page_break_section()
    for u in units:
        d.keybar('Unit %d · %s' % (u['n'], u['title']))
        for tag, lab in (('l1', 'Listening 1 · Conversation'),
                         ('l2', 'Listening 2 · Announcement'),
                         ('l3', 'Listening 3 · Academic Talk')):
            d.h3(lab, AMBER)
            d.script(u[tag]['script'])
            d.body_p('Listen and choose a response, items 1–3:', i=True)
            for i, (stem, _, _, _) in enumerate(u[tag]['warm'], 1):
                d.body_p('%d.  %s' % (i, stem), sz=20)
        d.h3('Speaking · Listen and Repeat', TEAL)
        for cyc, blk in enumerate(u['sp'], 1):
            d.body_p('Cycle %d:  %s' % (cyc, '  |  '.join(blk['repeat'])), sz=19)
        d.h3('Speaking · Take an Interview', TEAL)
        for cyc, blk in enumerate(u['sp'], 1):
            d.body_p('Cycle %d · %s' % (cyc, blk['theme']), sz=19)
            for i, q in enumerate(blk['qs'], 1):
                d.body_p('   Interviewer %d:  %s' % (i, q), sz=19)
        d.page_break_section()
    d.keybar('Practice Test %d' % vol)
    for mi, M in enumerate(T['listening'], 1):
        d.h3('Listening, Module %d' % mi, AMBER)
        for i, (stem, _, _, _) in enumerate(M['warm'], 1):
            d.body_p('%d.  %s' % (i, stem), sz=20)
        for sc, _ in M['convos']:
            d.script(sc, 'Conversation')
        d.script(M['announce'][0], 'Announcement')
        d.script(M['talk'][0], 'Academic talk')
    d.h3('Speaking', TEAL)
    d.body_p('Listen and Repeat:  ' + '  |  '.join(T['speaking']['repeat']), sz=19)
    for i, q in enumerate(T['speaking']['interview'][1], 1):
        d.body_p('Interviewer %d:  %s' % (i, q), sz=19)
    d.page_break_section()


def glossary(d, vol, units):
    d.unit_title('Glossary')
    d.strapline('Volume %d · 360 words with B1 definitions' % vol)
    d.cefr('The number after each word is the unit where it is first taught.')
    d.page_break_section()
    allw = []
    for u in units:
        for w, g in u['acad']:
            allw.append((w, g, u['n'], 'A'))
        for w, g in u['campus']:
            allw.append((w, g, u['n'], 'C'))
    allw.sort(key=lambda r: r[0].lower())
    letter = ''
    buf = []
    for w, g, n, kind in allw:
        if w[0].upper() != letter:
            if buf:
                d.wordlist(buf, 2, INDIGO)
                buf = []
            letter = w[0].upper()
            d.h3(letter)
        buf.append((w, '%s  (%d)' % (g, n)))
    if buf:
        d.wordlist(buf, 2, INDIGO)
    d.page_break_section()


def grammar_reference(d, vol, units):
    d.unit_title('Grammar reference')
    d.strapline('Volume %d · the ten points of this volume, on two pages' % vol)
    for u in units:
        d.h3('Unit %d · %s' % (u['n'], u['gram']['title']), INDIGO)
        d.table(u['gram']['headers'], u['gram']['rows'], INDIGO)
        d.body_p(u['gram']['bas'], sz=19, i=True)
    d.page_break_section()
    d.unit_title('Can-do record')
    d.strapline('Tick a statement when you can do it without help')
    for u in units:
        d.h3('Unit %d · %s' % (u['n'], u['title']))
        d.checkrow(u['candos'])
    d.page_break_section()


# ------------------------------------------------------------------ build ----
def build(vol, out):
    cfg = VOLS[vol]
    units = []
    for n in cfg['units']:
        mod = importlib.import_module('content.u%02d' % n)
        importlib.reload(mod)
        units.append(mod.UNIT)
    T = importlib.import_module('content.test%d' % cfg['test']).TEST

    d = Doc('TOEFL iBT Preparation Course 2026 · Volume %d' % vol,
            'CEFR B1 · Units %d–%d · Practice Test %d'
            % (units[0]['n'], units[-1]['n'], vol))
    front_matter(d, vol, units)
    ukeys = {}
    for u in units:
        ukeys[u['n']] = render_unit(d, u)
    tkey = render_test(d, T)
    answer_key(d, vol, units, tkey, ukeys)
    audio_scripts(d, vol, units, T)
    glossary(d, vol, units)
    grammar_reference(d, vol, units)
    d.figure(*F.cover_back(vol, CFG_BLURB, CFG_BULLETS,
                           ['%d  %s' % (u['n'], u['title']) for u in units]), cover=True)
    d.save(out)
    return out, len(d.images)


CFG_BLURB = [
    'A complete preparation course for the TOEFL iBT® test as it has been since',
    '21 January 2026, written for learners at CEFR B1 — the level most students',
    'actually sit it at, and the level no other course is written for.',
]
CFG_BULLETS = [
    'Every 2026 task type, three times in every unit',
    'Three cycles a skill, on three different sub-topics',
    '480 Academic Word List items and 240 campus words, glossed at B1',
    'A grammar syllabus built around what Build a Sentence really tests',
    'A full practice test in each volume, with an answer key that explains',
]

if __name__ == '__main__':
    v = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    o = sys.argv[2] if len(sys.argv) > 2 else '/home/user/Animated-Courses/TOEFL_2026_B1_Volume_%d.docx' % v
    path, nimg = build(v, o)
    print('wrote', path, os.path.getsize(path), 'bytes,', nimg, 'images')
