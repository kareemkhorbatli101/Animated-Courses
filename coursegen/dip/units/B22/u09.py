# -*- coding: utf-8 -*-
import figs

U = dict(
num=9,
title='The File You Leave Behind',
gram='cohesion across a long spoken answer',
ai='a handover note a successor can actually use',
strap='CEFR B2 · Grammar: cohesion across a long spoken answer · '
      'AI: a handover note a successor can actually use',
cando=['hold a long spoken answer together with signposting and reference',
       'write a handover note around your successor’s first fortnight',
       'record the unwritten practice that no file contains',
       'say why a complete note can answer none of the real questions',
       'write a six-line tasking for a handover note'],

hero=('FOURTEEN PAGES, FAULTLESSLY ORGANISED, AND NOT ONE OF HER SIX QUESTIONS ANSWERED',
      ['Every file, every contact, every deadline, in the right order.',
       'Who answers his own telephone, and who holds the only key.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='Three weeks before a transfer, with an overlap of four working days.',

warm=['What did you most need to know in your first fortnight in a job?',
      'What does your organisation know that is written nowhere?',
      'How do you keep a ten-minute spoken briefing in order?'],

read=[
 'Ziad Mikhail leaves post in three weeks, with an overlap of four working days, and a '
 'successor who has never served in this country and has read everything that exists about it, '
 'which is not very much.',
 'He asks a system to draft a handover note from his files, his calendar and his contact list, '
 'and receives fourteen pages that are faultlessly organised: every live file with its state, '
 'every deadline in the next six months, every contact with a title.',
 'It is better than the note he was given four years ago, which ran to one page and said good '
 'luck at the bottom, and it would take him two days to produce by hand.',
 'His successor arrives and, in her first week, asks six questions. Which of these contacts '
 'answers his own telephone? Who must be telephoned before a letter is sent? Who holds the key '
 'to the store? What did you promise anybody verbally?',
 'And the last two, which are the ones that matter most: what does Hala in the front office do '
 'that is not in her job description, and what in this note is out of date because you wrote it '
 'three weeks ago?'],

dp1=('Unwritten practice', 'Studies of organisational handover commonly find that a large '
     'part of what makes a post workable is practice transmitted informally — who to approach, '
     'in what order, and by what means — and that such practice is rarely recorded in files or '
     'formal notes.',
     'Source: general organisational practice literature, 2025–2026.'),

c_a=[('How long is the overlap?', 'four working days'),
     ('What has the successor read?', 'everything that exists, which is not much'),
     ('What did the system draft from?', 'files, calendar and contact list'),
     ('How long was the note?', 'fourteen pages'),
     ('What was the old note like?', 'one page, ending in good luck'),
     ('How many questions did she ask in week one?', 'six')],

c_b=[('The successor has served in the country before.', 'F'),
     ('The fourteen pages were badly organised.', 'F'),
     ('The note would take two days to produce by hand.', 'T'),
     ('The six questions were answered in the note.', 'F'),
     ('One member of staff does work outside her job description.', 'T'),
     ('A note can go out of date in three weeks.', 'T')],

c_c=[('There are three things you need in week one. The ____________ is the key to the store.', 'first'),
     ('To come ____________ to your earlier question about the contacts: four of them answer directly.', 'back'),
     ('That brings me ____________ the question of the landlord.', 'to'),
     ('I said there were three. ____________ is Hala in the front office.', 'The third'),
     ('____________ from that, the files are as the note describes them.', 'Apart'),
     ('Let me take ____________ in order, because the second depends on the first.', 'them')],

c_d=[('Signposting in a long answer tells the listener ( your opinion / how many parts there are ).', ['your opinion', 'how many parts there are'], 1),
     ('To come back to your earlier point signals ( a return / a new subject ).',
      ['a return', 'a new subject'], 0),
     ('The first of those refers back to ( a list you announced / anything ).',
      ['a list you announced', 'anything'], 0),
     ('The fourteen pages contained ( everything documented / the unwritten practice ).',
      ['everything documented', 'the unwritten practice'], 0),
     ('A handover note should be built around ( the first fortnight / the filing system ).',
      ['the first fortnight', 'the filing system'], 0)],

c_e=('Announcing, returning or closing? Put each phrase in the right column.',
     [('There are three things you need in week one', 'announcing'),
      ('To come back to your earlier question', 'returning'),
      ('So those are the three', 'closing'),
      ('Let me take them in order', 'announcing'),
      ('As I said a moment ago', 'returning'),
      ('That answers the second of your questions', 'closing')],
     ['announcing', 'returning', 'closing']),

v_fig_title='WHAT YOU LEAVE BEHIND',
v_fig=[('doc', 'a handover note'), ('people', 'an incoming officer'), ('clock', 'an overlap period'),
       ('key', 'a key held'), ('chart', 'a live file'), ('speech', 'a verbal handover')],
v_fig_cap='Six words for the four days on which a successor’s first year largely depends.',

vocab=[
 ('a handover note', 'the written account an officer leaves for a successor'),
 ('an incoming officer', 'the officer taking up a post'),
 ('an outgoing officer', 'the officer leaving a post'),
 ('an overlap period', 'the days on which both officers are present'),
 ('a contact list annotated', 'a list of contacts with notes on each'),
 ('a live file', 'a matter still requiring action'),
 ('a dormant file', 'a matter requiring no action at present'),
 ('an unwritten practice', 'a way of doing things recorded nowhere'),
 ('a local staff briefing', 'a briefing given by locally engaged colleagues'),
 ('a key held', 'a key in the possession of a named person'),
 ('a password changed', 'an access credential altered on departure'),
 ('a standing arrangement', 'an understanding that continues without renewal'),
 ('a debt of courtesy', 'an obligation to respond to past kindness'),
 ('a promise outstanding', 'an undertaking given and not yet fulfilled'),
 ('a successor’s first week', 'the earliest period of a new officer’s service'),
 ('a filing convention', 'the agreed way of naming and storing documents'),
 ('a memory of the post', 'what is known at a post without being written down'),
 ('a verbal handover', 'the spoken part of a handover'),
 ('a handover checklist', 'the list of items to be transferred'),
 ('a first fortnight priority', 'something that must be done in the first two weeks')],

v_a=[('A way of doing things recorded nowhere is an ____________ practice.', 'unwritten'),
     ('The days on which both officers are present are an ____________ period.', 'overlap'),
     ('An undertaking given and not yet fulfilled is a promise ____________.', 'outstanding'),
     ('A matter still requiring action is a ____________ file.', 'live'),
     ('An understanding that continues without renewal is a ____________ arrangement.', 'standing'),
     ('The agreed way of naming and storing documents is a ____________ convention.', 'filing'),
     ('An obligation to respond to past kindness is a debt of ____________.', 'courtesy'),
     ('Something that must be done in the first two weeks is a first ____________ priority.', 'fortnight')],

v_b=[('A handover note is the written account', 'an officer leaves for a successor.'),
     ('A contact list annotated is a list of contacts', 'with notes on each.'),
     ('A local staff briefing is a briefing given', 'by locally engaged colleagues.'),
     ('A memory of the post is what is known at a post', 'without being written down.'),
     ('A handover checklist is the list of items', 'to be transferred.')],

g_title='Grammar: cohesion across a long spoken answer',
g_rule=['Announce the shape before you start: there are three things you need in week one.',
        'Number as you go, and refer back by number: the first of those is the key to the store.',
        'Return explicitly when you come back to something: to come back to your earlier '
        'question about the contacts.',
        'Close the loop so the listener knows you have finished: so those are the three, and the '
        'second is the urgent one.'],
g_fig=('SHAPELESS',
       ['There is the key, and also the landlord, and Hala does a lot, and the files are fine.',
        'Anyway, about the contacts.',
        'I mentioned the store earlier.',
        'That is about it, I think.'],
       'HELD TOGETHER',
       ['There are three things you need in week one. Let me take them in order.',
        'To come back to your earlier question about the contacts: four of them answer directly.',
        'The first of those, the key to the store, is held by the landlord and nobody else.',
        'So those are the three, and the second is the one that cannot wait.'],
       'four turns a listener cannot follow or remember',
       'the same four, announced, numbered, returned to and closed'),
g_fig_cap='A long spoken answer is remembered only if its shape was announced before its content.',

g_a=[('There are three things you need in week one. The ____________ is the key to the store.', 'first'),
     ('To come ____________ to your earlier question about the contacts: four answer directly.', 'back'),
     ('That brings me ____________ the question of the landlord.', 'to'),
     ('I said there were three. ____________ is Hala in the front office.', 'The third'),
     ('____________ from that, the files are as the note describes them.', 'Apart'),
     ('Let me take ____________ in order, because the second depends on the first.', 'them'),
     ('So ____________ are the three things, and the second cannot wait.', 'those'),
     ('As I said a ____________ ago, the landlord holds the only key.', 'moment'),
     ('That answers the ____________ of your six questions.', 'second')],

g_b=[('( There are three things you need in week one / There are some things you need ) — announce the shape.', ['There are three things you need in week one', 'There are some things you need'], 0),
     ('( To come back to your earlier question / Anyway ) — return explicitly.',
      ['To come back to your earlier question', 'Anyway'], 0),
     ('( The first of those is the key to the store / There is the key thing ) — refer by number.',
      ['The first of those is the key to the store', 'There is the key thing'], 0),
     ('( So those are the three, and the second cannot wait / That is about it ) — close the loop.',
      ['So those are the three, and the second cannot wait', 'That is about it'], 0),
     ('( That answers the second of your six questions / Does that help ) — mark the answer.',
      ['That answers the second of your six questions', 'Does that help'], 0),
     ('( Let me take them in order, because the second depends on the first / Let me think ) — give the reason for the order.',
      ['Let me take them in order, because the second depends on the first', 'Let me think'], 0)],

d1=dict(
 title='Fourteen pages and six questions',
 fig=(['Fourteen pages, all of it accurate.', 'And her first six questions?'],
      ['None of them are in it.', 'Then write the six pages.']),
 cap='Ziad Mikhail and Dr Suhair Kanaan, in the second week of the overlap.',
 lines=[('Suhair', 'How is the handover going?'),
        ('Ziad', 'I gave her fourteen pages. Every file, every deadline, every contact with a title.'),
        ('Suhair', 'And what has she asked you?'),
        ('Ziad', 'Six questions, and none of the six are answered anywhere in the note.'),
        ('Suhair', 'Give me two of them.'),
        ('Ziad', 'Which of these contacts answers his own telephone. And who must be rung before a letter goes.'),
        ('Suhair', 'Both of which you know and neither of which is in any file.'),
        ('Ziad', 'Both of which I learned in my first eighteen months, slowly and by getting it wrong.'),
        ('Suhair', 'What were the other four?'),
        ('Ziad', 'The key to the store, a promise I made verbally in March, what Hala actually does, and what in the note is already out of date.'),
        ('Suhair', 'Then the fourteen pages are the appendix and her six questions are the note.'),
        ('Ziad', 'Six questions, six short answers, and the fourteen pages behind them.')],
 a=[('How long was the note?', 'fourteen pages'),
    ('How many of her questions did it answer?', 'none of the six'),
    ('What were the first two questions?', 'who answers his telephone, and who must be rung first'),
    ('How did Ziad learn them?', 'in his first eighteen months, by getting it wrong'),
    ('What does Suhair conclude?', 'the six questions are the note and the pages are the appendix')],
 b=[('Every contact with a ____________.', 'title'),
    ('Slowly and by getting it ____________.', 'wrong'),
    ('A promise I made ____________ in March.', 'verbally'),
    ('The fourteen pages are the ____________.', 'appendix')]),

d2=dict(
 title='What Hala actually does',
 fig=(['Hala does the appointments.', 'And what else does Hala do?'],
      ['Everything, in practice.', 'Then write that down by name.']),
 cap='Ziad and Rim Haddad, on the last Thursday.',
 lines=[('Rim', 'Does the note say what Hala does?'),
        ('Ziad', 'It says front office and appointments, which is her job description.'),
        ('Rim', 'And what does she actually do?'),
        ('Ziad', 'She keeps the only working list of who is who in the municipality, in her own notebook.'),
        ('Rim', 'Which nobody has ever asked her to do.'),
        ('Ziad', 'And which three officers have relied on for six years without writing it down.'),
        ('Rim', 'If your successor does not know that, she will rebuild it from nothing in a year.'),
        ('Ziad', 'Then it goes in the note, by name, as the first thing under local staff.'),
        ('Rim', 'And ask Hala whether she minds it being written down.'),
        ('Ziad', 'Why would she mind?'),
        ('Rim', 'Because it is her standing in this building, and she should be asked rather than described.'),
        ('Ziad', 'That had not occurred to me. And if she would rather brief your successor herself?')],
 unresolved=True,
 a=[('What does the note say about Hala?', 'front office and appointments'),
    ('What does she actually keep?', 'the only working list of the municipality, in her notebook'),
    ('How long has it been relied on?', 'six years, by three officers'),
    ('What will happen if the successor does not know?', 'she will rebuild it from nothing'),
    ('What does Rim suggest asking?', 'whether Hala minds it being written down')],
 b=[('In her own ____________.', 'notebook'),
    ('Without writing it ____________.', 'down'),
    ('As the first thing under local ____________.', 'staff'),
    ('It is her ____________ in this building.', 'standing')]),

speak=[('Hold it together',
        ['Give a two-minute spoken answer with three announced parts.',
         'Your partner says whether you numbered, returned and closed.',
         'Repeat it, returning explicitly to your first point at the end.']),
       ('Six questions',
        ['Write the six questions a successor in your job would ask in week one.',
         'Answer each in two sentences, aloud.',
         'Your partner says which answers were in no document.']),
       ('The unwritten part',
        ['Name three practices in your work that are written nowhere.',
         'Say who taught you each, and how long it took.',
         'Decide which you would record by name.'])],

ext_title='A generated handover note is complete on everything documented, which is not what a successor asks',
ext_fig=figs.datatable('SIX QUESTIONS IN WEEK ONE',
                       ['Question', 'In the 14 pages?', 'Where it lives'],
                       [['which contacts answer directly', 'no', 'the outgoing officer’s head'],
                        ['who must be telephoned before a letter', 'no', 'the same place'],
                        ['who holds the key to the store', 'no', 'the landlord'],
                        ['what was promised verbally', 'no', 'one conversation in March'],
                        ['what Hala actually does', 'no', 'Hala’s own notebook'],
                        ['what is already out of date', 'no', 'nowhere at all']]),
ext_fig_cap='Six questions, no answers in fourteen accurate pages, and five of the answers inside one person.',
ext=[
 'Drafting a handover note from files, a calendar and a contact list is a task a system does '
 'quickly and thoroughly, and the result is genuinely better than most handover notes, which '
 'are written in the last two days of a posting by somebody who has already mentally left.',
 'It will miss nothing that is documented. Every live file, every deadline in the next six '
 'months, every contact with a name and a title, in a consistent order, with the dormant files '
 'separated from the live ones.',
 'What it cannot contain is the thing a successor actually needs, which is practice: which of '
 'those correctly named contacts answers his own telephone, which requires a call before a '
 'letter, which never replies to anybody below ambassadorial rank.',
 'Nor can it contain the obligations you have incurred in conversation — a promise to look at '
 'something, a debt of courtesy to somebody who was helpful in March — or the fact that the '
 'only working list of a municipality is in a local colleague’s notebook.',
 'So build the note backwards, from your successor’s first fortnight. Write the six questions '
 'she will ask in week one, answer them in two sentences each, put the fourteen generated pages '
 'behind that as an appendix, and ask any colleague you are about to describe whether they are '
 'content to be described.'],

dp2=('Handover and local staff', 'Practice guidance commonly notes that locally engaged staff '
     'hold much of a post’s working knowledge, and recommends that their role be recorded '
     'accurately and with their knowledge rather than described in their absence.',
     'Source: general organisational practice literature, 2025–2026.'),

e_a=[('Why are most handover notes poor?', 'they are written in the last two days'),
     ('What will a generated note never miss?', 'anything documented'),
     ('What can it not contain?', 'practice'),
     ('What obligations are invisible to it?', 'promises and debts of courtesy from conversation'),
     ('How should a note be built?', 'backwards from the successor’s first fortnight')],
e_b=[('A generated note is worse than most handover notes.', 'F'),
     ('Dormant and live files should be separated.', 'T'),
     ('A correctly named contact may never answer.', 'T'),
     ('Verbal promises appear in the calendar.', 'F'),
     ('Local colleagues hold working knowledge.', 'T'),
     ('A colleague should be asked before being described.', 'T')],

w_model='Purpose: so that the incoming officer can work alone from her first Monday. Scope: the '
        'commercial section; the consular files are handed over separately by the consul. Inputs: '
        'the live and dormant files, the calendar for six months, the contact list, and my own '
        'answers to the six questions she asked in week one. Criteria: the six questions answered '
        'first, in two sentences each; every contact marked for whether he answers directly and '
        'whether a call must precede a letter; every verbal promise listed with its date; local '
        'staff roles described as they are, with their agreement. Done: the note with the '
        'incoming officer and the deputy head of mission two days before departure. Fallback: '
        'anything I know and cannot write down is given in the verbal handover and listed by '
        'subject so that she knows it exists.',
w_fig=figs.spec_card('SIX LINES FOR A HANDOVER NOTE',
                     [('Purpose', 'she can work alone from her first Monday'),
                      ('Scope', 'the commercial section; consular handed over separately'),
                      ('Inputs', 'files, calendar, contacts, and my answers to her six questions'),
                      ('Criteria', 'six answers first; contacts marked; promises dated; staff agreed'),
                      ('Done', 'two days before departure'),
                      ('Fallback', 'what cannot be written is listed by subject')]),
w_fig_cap='Line 4 inverts the usual note: the questions come first and the files behind them.',
w_task='Write a six-line tasking for a handover note.',
w_steps=['Line 1: what the incoming officer must be able to do, and when.',
         'Line 2: which section, and what is handed over separately.',
         'Line 3: the documents, and your own answers to her questions.',
         'Line 4: the order, the contact markings, the promises and the staff roles.',
         'Line 5: who receives it and when.',
         'Line 6: what is done with what cannot be written down.'],
w_bank=['Purpose: so that the incoming officer can work alone from … ',
        'Scope: the … section; … handed over separately',
        'Inputs: the live and dormant files, the calendar for … , the contact list, and my answers to … ',
        'Criteria: the … questions answered first, in two sentences each; contacts marked for … ; verbal promises listed with dates; local staff roles agreed with them',
        'Done: the note with … … days before departure',
        'Fallback: anything that cannot be written down is given verbally and listed by subject'],
w_check=['Do the successor’s questions come first?',
         'Are contacts marked for how they must be approached?',
         'Are verbal promises listed with dates?',
         'Were local colleagues asked before being described?'],

t_title='A handover note a successor can actually use',
t_fig=figs.split('BEFORE YOU LEAVE',
                 'Let it draft',
                 ['every live file and its state',
                  'every deadline for six months',
                  'every contact with a title',
                  'the dormant files, separately'],
                 'Write these yourself',
                 ['who answers his own telephone',
                  'who must be rung before a letter',
                  'what you promised, and when',
                  'what a colleague really does']),
t_fig_cap='The left column is two days of work in four minutes. The right column is why she will telephone you in June.',
t_body=[
 'Let it draft the documented part from your files, your calendar and your contact list, and '
 'let it be thorough: live files with their state, deadlines for six months, dormant files '
 'separated, contacts with names and titles in a consistent order.',
 'Then ask your successor, on her first day, to write down the six questions she most wants '
 'answered, and answer those six at the front of the note in two sentences each. Her questions '
 'will not be about files; they will be about people, keys, order and obligation.',
 'Add the two things only you hold: the promises you made in conversation, each with its date '
 'and the person, and what your local colleagues actually do, described accurately and with '
 'their agreement rather than behind their backs. Then date the note, because in three weeks '
 'part of it will already be wrong.'],
t_say=[('Ask it to draft: ', 'A handover note from these files, the calendar and the contact list.'),
       ('Ask her first: ', 'Write down the six questions you most want answered.'),
       ('Ask your colleague: ', 'This is how I would describe what you do. Are you content with it?')],
t_bound='A generated note contains what is written down. It cannot know which contact answers '
        'his own telephone, what you promised in a corridor in March, or that the only working '
        'list of a municipality is in a colleague’s notebook.',
t_a=[('A handover note from these files, the calendar and the contact ____________.', 'list'),
     ('Write down the six ____________ you most want answered.', 'questions'),
     ('Are you ____________ with it?', 'content'),
     ('It contains what is written ____________.', 'down'),
     ('What you promised in a corridor in ____________.', 'March'),
     ('In a colleague’s ____________.', 'notebook')],
t_b_rubric='Say whether each belongs in the generated part or in the part you write yourself.',
t_b=[('The state of every live file.', 'generated: it is documented'),
     ('Which contacts answer their own telephones.', 'yours: it is practice'),
     ('Deadlines for the next six months.', 'generated: the calendar holds them'),
     ('A promise made verbally in March.', 'yours, with its date and the person')],

case=dict(
 title='The Decision Room · The appendix and the note',
 brief=[
  'An officer leaves post in three weeks with a four-day overlap. A handover note drafted from '
  'his files, calendar and contact list runs to fourteen faultlessly organised pages and would '
  'have taken him two days to write.',
  'In her first week his successor asks six questions: which contacts answer their own '
  'telephones, who must be telephoned before a letter is sent, who holds the key to the store, '
  'what was promised verbally, what a named local colleague actually does, and what in the note '
  'is already out of date.',
  'None of the six is answered anywhere in the fourteen pages. Five of the six answers exist '
  'only in the outgoing officer’s memory or in a local colleague’s private notebook, and the '
  'sixth exists nowhere at all.'],
 exhibit=figs.datatable('WHERE THE KNOWLEDGE ACTUALLY SITS',
                        ['Kind of knowledge', 'Documented?', 'Transmitted how'],
                        [['file states and deadlines', 'yes', 'the note'],
                         ['contact names and titles', 'yes', 'the note'],
                         ['who answers directly', 'no', 'eighteen months of trying'],
                         ['order of approach', 'no', 'one mistake, remembered'],
                         ['verbal promises', 'no', 'memory alone'],
                         ['what the front office really does', 'no', 'a private notebook']]),
 exhibit_cap='Two kinds of knowledge in the note and four kinds in two people’s heads.',
 exhibit_note='The note is not wrong about anything. It is complete about the half of the job '
              'that is written down, and silent about the half that makes the written half '
              'work.',
 voices=[('Ziad Mikhail', 'commercial attaché',
          'Fourteen pages in four minutes, and better ordered than anything I would have left behind.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'And not one of her six questions in it, because none of the six is in a file.'),
         ('Rim Haddad', 'consular assistant',
          'And one of the six is about a colleague, which means asking her before you write it.')],
 steps=[('Find it', 'What did the note contain?'),
        ('Compare it', 'The fourteen pages against the six questions.'),
        ('Infer it', 'Why is the practice absent?'),
        ('Weigh it', 'Two days of drafting saved against six unanswered questions.'),
        ('Decide', 'How is a handover note built?')],
 analysis=[('Find it. What was in it?', 'every file, deadline and contact, faultlessly ordered'),
           ('Compare it. Against her questions?', 'none of the six was answered'),
           ('Infer it. Why absent?', 'practice is not written down anywhere'),
           ('Weigh it. What is each part worth?', 'the pages are the appendix; the six answers are the note'),
           ('Decide. How is it built?', 'backwards, from the successor’s first fortnight')],
 decision='Decide the method, in four lines.',
 decision_steps=['Say what the generated part covers.',
                 'Say what goes at the front of the note.',
                 'Say what must be added that no file holds.',
                 'Say what is done before describing a colleague.'],
 bank=['The documented part is drafted from the files, the calendar and the contact list.',
       'The successor’s own six questions are answered at the front, in two sentences each.',
       'Verbal promises are listed with their dates, and each contact is marked for how he must be approached.',
       'No colleague’s role is described without first asking them whether they are content with the description.'],
 outcome='The note is rebuilt in two parts: six answers on one page, and the fourteen pages '
         'behind as an appendix, dated. Hala is asked, and would rather brief the incoming '
         'officer herself, which she does for forty minutes on the Tuesday; her notebook is '
         'copied with her agreement. In June the successor telephones once, about a contact who '
         'had changed post, and not about anything else.',
 outcome_q=[('How was the note rebuilt?', 'six answers and the pages as a dated appendix'),
            ('What did Hala prefer?', 'to brief the incoming officer herself'),
            ('How long did she brief her?', 'forty minutes on the Tuesday'),
            ('What happened to her notebook?', 'it was copied with her agreement'),
            ('What did the successor telephone about in June?', 'a contact who had changed post')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Write my handover note',
 task=['An officer asked for a handover note three weeks before leaving post.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Write my handover note.',
        'Here are my files and my calendar.',
        'Cover everything important.',
        'The usual sections.',
        'She has never served here.',
        'As full as possible.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the third and sixth together produce fourteen pages of the wrong half.',
 asked=['Everything important', 'The usual sections', 'As full as possible'],
 back=['14 pages, faultless', '0 of 6 week-one questions answered', '0 verbal promises listed'],
 gap='Nobody said that the note is for her first fortnight, or that practice and promises must be in it.',
 back_cap='A complete account of the documented half of a job, and silence on the half that works it.',
 back_note='Cover everything important and as full as possible both point at the files, '
           'because the files are what the drafter can see, and importance in a handover is '
           'measured by a successor’s first fortnight rather than by volume.',
 diagnosis=[('“everything important”', 'unscoped set'),
            ('“the usual sections”', 'unscoped set'),
            ('“as full as possible”', 'undefined done'),
            ('“my handover note”', 'undefined done'),
            ('“she has never served here”', 'hidden assumption'),
            ('“here are my files”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that the note answers her first fortnight.',
 scaffold=['what the incoming officer must be able to do, and when',
           'which section, and what is handed over separately',
           'the documents and your own answers to her questions',
           'the order, the contact markings, the promises and the staff roles',
           'who receives it and when',
           'what is done with what cannot be written down'],
 bank=['Purpose: so that the incoming officer can work alone from her first Monday',
       'Scope: the … section; the … files are handed over separately',
       'Inputs: the live and dormant files, the calendar for … months, the contact list, and my answers to her six questions',
       'Criteria: the six questions answered first in two sentences each; contacts marked for whether they answer directly and whether a call must precede a letter; verbal promises listed with dates; local staff roles agreed with them',
       'Done: the note with the incoming officer and … two days before departure',
       'Fallback: anything that cannot be written down is given in the verbal handover and listed by subject'],
 check=['Do her six questions come first?',
        'Are contacts marked for how to approach them?',
        'Are verbal promises dated?',
        'Is the note itself dated?'],
 model=['so that the incoming officer can work alone from her first Monday',
        'the commercial section; the consular files are handed over separately by the consul',
        'the live and dormant files, the calendar for 6 months, the contact list, and my answers to the 6 questions she asked in week one',
        'the 6 questions answered first in 2 sentences each; every contact marked for whether he answers directly and whether a call must precede a letter; every verbal promise listed with its date; local staff roles described as they are, with their agreement',
        'the note with the incoming officer and the deputy head of mission 2 days before departure',
        'anything I know and cannot write down is given in the verbal handover and listed by subject so that she knows it exists'],
 cost='14 pages answered 0 of 6 questions. 1 page written backwards from her first fortnight '
      'answered all six.'),

feet=dict(
 title='On Your Feet · Your successor asks you to summarise four years in ten minutes',
 setting=[
  'It is the last Thursday of the overlap. Your successor has read the note, has asked her six '
  'questions, and now asks the only question that cannot be prepared: what she needs to know '
  'that is not written anywhere, in ten minutes, starting now.',
  'You have four years of it. She will remember perhaps three things, and which three depends '
  'entirely on how you organise the next ten minutes.'],
 ladder=[('Tell me what is not written down', 'four years, and ten minutes to give it'),
         ('Which of those matters most?', 'the ranking you must do out loud'),
         ('And what will go wrong first?', 'the prediction you must make honestly')],
 cap='Three questions on a last Thursday, and ten minutes to answer all of them.',
 turns=[('Turn 1 · Your successor', 'Tell me what is not written down anywhere.'),
        ('Turn 2 · Your successor', 'Of those, which matters most in my first month?'),
        ('Turn 3 · Your successor', 'And what is going to go wrong first?')],
 holds=['There are three things, and I am going to take them in order, because the second depends on the first.',
        'The first is who must be telephoned before a letter is sent, and there are two such people.',
        'To come back to your question about the first month: it is the second of the three, the store key.',
        'The third is Hala, and I would rather she told you herself, which she has agreed to do on Tuesday.',
        'What will go wrong first is the municipality list, because mine is three weeks old.',
        'So those are the three, and if you remember only one, remember the two telephone calls.'],
 redline='You must not try to tell her everything, you must not describe a colleague’s role '
         'without saying she has agreed to it, and you must not pretend nothing will go wrong. '
         'Do not end without saying which one thing to remember.',
 score=['Announced the number of items before starting.',
        'Took them in a stated order, with a reason for the order.',
        'Returned explicitly to her second question.',
        'Named the colleague’s own briefing rather than speaking for her.',
        'Closed by naming the one thing to remember.'],
 a=[('What do you do first?', 'announce that there are three things and the order'),
    ('Why that order?', 'the second depends on the first'),
    ('How do you handle her second question?', 'return to it explicitly and name the item'),
    ('What do you say about Hala?', 'that she will brief her herself on Tuesday'),
    ('What will go wrong first?', 'the municipality list, which is three weeks old'),
    ('How do you close?', 'by naming the one thing to remember')]),

rev_fig=figs.split('A HANDOVER NOTE',
                   'Front page',
                   ['her six questions, answered',
                    'two sentences each',
                    'the date you wrote it',
                    'what is already uncertain'],
                   'Appendix',
                   ['live files and their states',
                    'six months of deadlines',
                    'contacts, names and titles',
                    'dormant files, separately']),
rev_fig_cap='Most handover notes are an appendix with no note. Write the page she will read twice.',
rev=dict(
 read=[('How long was the overlap?',
        ['four working days', 'three weeks', 'one day', 'two months'], 0),
       ('How long was the drafted note?',
        ['fourteen pages', 'one page', 'six pages', 'forty pages'], 0),
       ('How many of her questions did it answer?',
        ['none', 'all six', 'two', 'four'], 0),
       ('Where was the municipality list kept?',
        ['in a colleague’s notebook', 'in the files',
         'in the calendar', 'in the contact list'], 0)],
 listen_text='Let it draft the documented part from your files, your calendar and your contact '
             'list. Then ask your successor for the six questions she most wants answered, '
             'answer those at the front in two sentences each, and add the promises you made in '
             'conversation, with their dates.',
 listen=[('Let it draft the ____________ part.', 'documented'),
         ('Ask your successor for the six ____________.', 'questions'),
         ('Answer those at the ____________.', 'front'),
         ('Add the promises you made in conversation, with their ____________.', 'dates')],
 speak=['Give a two-minute answer in three announced parts, numbered and closed.',
        'Then answer a successor’s six week-one questions in two sentences each.'],
 write='Write a six-line tasking for a handover note.',
 vocab=[('A way of doing things recorded nowhere is an ____________ practice.', 'unwritten'),
        ('The days on which both officers are present are an ____________ period.', 'overlap'),
        ('An undertaking given and not yet fulfilled is a promise ____________.', 'outstanding'),
        ('Something for the first two weeks is a first ____________ priority.', 'fortnight')],
 gram=[('There are three things you need. The ____________ is the key to the store.', 'first'),
       ('To come ____________ to your earlier question about the contacts.', 'back'),
       ('So ____________ are the three things.', 'those'),
       ('That answers the ____________ of your six questions.', 'second')]),

found=['Ask your successor for her six questions, and answer those first.',
       'Mark every contact for whether he answers directly and what must precede a letter.',
       'List every promise you made in conversation, with its date.',
       'Ask a colleague before you describe what they do.'],
end_line='It can write everything that is written down. The rest leaves with you.',
end_next='Next: The End of a Tour')
