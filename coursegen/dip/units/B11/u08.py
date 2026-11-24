# -*- coding: utf-8 -*-
import figs

U = dict(
num=8,
title='A Cable of One Page',
gram='cause and result: because, so, as a result',
ai='one page from four pages of notes',
strap='CEFR B1 · Grammar: cause and result: because, so, as a result · '
      'AI: one page from four pages of notes',
cando=['link cause and result accurately in writing',
       'cut four pages of notes to one page without losing the decision',
       'write a subject heading that says what is needed',
       'say what a summary loses and what it must never lose',
       'write a six-line cable'],

hero=('FOUR PAGES IN, ONE PAGE OUT, AND THE DISSENT GONE',
      ['The summary kept every fact and lost one sentence.',
       'The sentence said that two of the five did not agree.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A desk at twenty past six, with four pages of notes and a one-page form.',

warm=['What gets lost when a long document is made short?',
      'Who decides what the main point of a meeting was?',
      'Have you ever been summarised in a way you did not recognise?'],

read=[
 'A cable is one page. Not because a page is a natural unit, but because the person reading '
 'it has forty others and eleven minutes. A two-page cable is read as far as the bottom of '
 'the first page, which means the second page was written for nobody.',
 'The shape is fixed. A subject heading that says what action is needed. One paragraph of '
 'what happened. One of what it means. One of what the Mission proposes. Everything else '
 'belongs in an annex or in nobody’s inbox.',
 'Cutting is the hard part. Four pages of notes contain perhaps six facts that change a '
 'decision, and a great many that are interesting. Because the interesting ones are usually '
 'better written, they survive, and the decision-changing ones do not.',
 'Bassel now drafts the first cut with a system. He gives it the notes and the standard '
 'shape, and a page comes back in ninety seconds. It keeps the facts, the figures and the '
 'order, and it is better organised than his own first attempt.',
 'In April it dropped one sentence. Two of the five officials present had disagreed with '
 'the proposal. The sentence was short, it appeared once, and nothing else in four pages '
 'referred to it again, so a summary trained on what is central removed it.'],

dp1=('What a summary loses first', 'Analytical guidance commonly warns that automatic '
     'summarisation preserves what is repeated and central, and that minority views, '
     'caveats and single-mention facts are therefore the first material to be lost.',
     'Source: reported analytical practice, 2025–2026.'),

c_a=[('How long is a cable?', 'one page'),
     ('Why?', 'the reader has forty others and eleven minutes'),
     ('What are the four parts?', 'a subject heading, what happened, what it means, what is proposed'),
     ('How many facts in four pages change a decision?', 'about six'),
     ('Why do the interesting facts survive?', 'they are usually better written'),
     ('What sentence did the summary drop?', 'that two of the five disagreed')],

c_b=[('A two-page cable is read to the end.', 'F'),
     ('The shape of a cable is fixed.', 'T'),
     ('Most facts in four pages change the decision.', 'F'),
     ('The system kept the facts and figures.', 'T'),
     ('The dropped sentence appeared many times.', 'F'),
     ('A summary keeps what is repeated.', 'T')],

c_c=[('The second page was unread, ____________ nobody wrote for it.', 'so'),
     ('____________ the reader has eleven minutes, the cable is one page.', 'Because'),
     ('The sentence appeared once. As a ____________, it was dropped.', 'result'),
     ('He gave it the notes, ____________ a page came back in ninety seconds.', 'so'),
     ('____________ of the cut, the dissent disappeared.', 'Because'),
     ('The facts were kept; the minority view was not, ____________ it was short.', 'because')],

c_d=[('Because introduces ( a cause / a result ).', ['a cause', 'a result'], 0),
     ('So introduces ( a result / a cause ).', ['a result', 'a cause'], 0),
     ('A cable is one page because of ( the reader / the writer ).',
      ['the reader', 'the writer'], 0),
     ('Interesting facts survive a cut because ( they are better written / they matter more ).',
      ['they are better written', 'they matter more'], 0),
     ('A summary drops ( single-mention facts / repeated facts ).',
      ['single-mention facts', 'repeated facts'], 0)],

c_e=('Cause or result? Put each clause in the right column.',
     [('because the reader has eleven minutes', 'cause'),
      ('so the cable is one page', 'result'),
      ('as a result, the sentence was dropped', 'result'),
      ('because it appeared only once', 'cause'),
      ('so nobody read page two', 'result'),
      ('because the notes were four pages', 'cause')],
     ['cause', 'result']),

v_fig_title='THE SHAPE OF A CABLE',
v_fig=[('doc', 'a subject heading'), ('chart', 'a key judgement'), ('people', 'an addressee'),
       ('clock', 'a deadline for comment'), ('key', 'a word limit'), ('door', 'a proposed action')],
v_fig_cap='Six words for a page that must be read in under two minutes.',

vocab=[
 ('a cable', 'a short formal report sent by a mission to its capital'),
 ('a precis', 'a short account keeping the substance and the order of a longer text'),
 ('a lead paragraph', 'the first paragraph, carrying the most important point'),
 ('a key judgement', 'the central assessment a report asks the reader to accept'),
 ('a proposed action', 'the step the writer recommends be taken'),
 ('a word limit', 'the maximum number of words permitted'),
 ('a subject heading', 'the line at the top saying what the message is about'),
 ('a serial number', 'the number identifying one message in a sequence'),
 ('an originator', 'the post or officer from which a message comes'),
 ('an addressee', 'the office to which a message is formally directed'),
 ('an information copy', 'a copy sent to a reader who is not asked to act'),
 ('a deadline for comment', 'the time by which readers must reply if they wish to'),
 ('a redraft', 'a new version written after comments'),
 ('a cut', 'material removed to bring a text within its limit'),
 ('a filler phrase', 'a phrase that occupies space without adding meaning'),
 ('a nominalisation', 'a noun made from a verb, often lengthening a sentence'),
 ('a signposting word', 'a word showing the reader where the argument is going'),
 ('a topic sentence', 'the sentence that states what a paragraph is about'),
 ('an editing pass', 'one complete reading of a text for one purpose'),
 ('a running order of points', 'the sequence in which matters are set out')],

v_a=[('The first paragraph carrying the main point is the ____________ paragraph.', 'lead'),
     ('The central assessment a report asks you to accept is a key ____________.', 'judgement'),
     ('A phrase that occupies space without meaning is a ____________ phrase.', 'filler'),
     ('A noun made from a verb is a ____________.', 'nominalisation'),
     ('One complete reading for one purpose is an editing ____________.', 'pass'),
     ('The sentence stating what a paragraph is about is a ____________ sentence.', 'topic'),
     ('A copy sent to a reader not asked to act is an ____________ copy.', 'information'),
     ('The post from which a message comes is the ____________.', 'originator')],

v_b=[('A precis is a short account keeping the substance', 'and the order of a longer text.'),
     ('A deadline for comment is the time by which', 'readers must reply if they wish to.'),
     ('A signposting word is a word showing the reader', 'where the argument is going.'),
     ('A cut is material removed', 'to bring a text within its limit.'),
     ('An addressee is the office to which', 'a message is formally directed.')],

g_title='Grammar: cause and result: because, so, as a result',
g_rule=['because + clause gives the cause: It is one page because the reader has no time.',
        'so + clause gives the result: The reader has no time, so it is one page.',
        'as a result and therefore begin a new sentence of result.',
        'because of + noun phrase: because of the cut, the dissent disappeared.'],
g_fig=('WRONG',
       ['Because the reader has no time, so it is one page.',
        'The sentence appeared once, because it was dropped.',
        'As a result of it appeared once, it went.',
        'Due to the cut, so the dissent disappeared.'],
       'RIGHT',
       ['Because the reader has no time, it is one page.',
        'The sentence appeared once, so it was dropped.',
        'It appeared once. As a result, it went.',
        'Because of the cut, the dissent disappeared.'],
       'four links that double the connector',
       'the same four, with one connector each'),
g_fig_cap='One connector per link. Because and so never share a sentence.',

g_a=[('____________ the reader has eleven minutes, the cable is one page.', 'Because'),
     ('The sentence appeared once, ____________ it was dropped.', 'so'),
     ('It appeared once. As a ____________, it was lost.', 'result'),
     ('____________ of the cut, the dissent disappeared.', 'Because'),
     ('Two officials disagreed, ____________ the proposal is not yet agreed.', 'so'),
     ('The notes were four pages long, ____________ they had to be cut.', 'so'),
     ('____________ nobody read page two, we now write one page.', 'Because'),
     ('The figure was wrong. ____________, the paragraph was rewritten.', 'Therefore'),
     ('We wrote one page ____________ that is what gets read.', 'because')],

g_b=[('( Because of / Because ) the reader has no time, it is one page.', ['Because of', 'Because'], 1),
     ('It appeared once, ( so / because ) it was dropped.', ['so', 'because'], 0),
     ('( As a result / Because of ), it was lost.', ['As a result', 'Because of'], 0),
     ('( Because of / Because ) the cut, the dissent disappeared.',
      ['Because of', 'Because'], 0),
     ('Two disagreed, ( so / because ) nothing is agreed.', ['so', 'because'], 0),
     ('( Therefore / Because ), the paragraph was rewritten.', ['Therefore', 'Because'], 0)],

d1=dict(
 title='What did it drop?',
 fig=(['Four pages, one page, ninety seconds.', 'And what did it drop?'],
      ['Nothing important.', 'Ask it what it dropped.']),
 cap='Bassel Tannous and Rim Haddad, over a drafted cable.',
 lines=[('Bassel', 'Four pages of notes, one page back, in ninety seconds.'),
        ('Rim', 'What did it drop?'),
        ('Bassel', 'Nothing important. The facts are all there.'),
        ('Rim', 'Ask it what it dropped. It will tell you.'),
        ('Bassel', 'It says it removed eleven sentences as non-central.'),
        ('Rim', 'Read me the eleven.'),
        ('Bassel', 'Nine are repetition. One is a joke. One says two of the five disagreed.'),
        ('Rim', 'That is the cable.'),
        ('Bassel', 'It appeared once, in four pages, in eleven words.'),
        ('Rim', 'A thing that is said once is not a thing that matters less.'),
        ('Bassel', 'So I ask for the dropped list every time.'),
        ('Rim', 'And you read it before you read the summary, not after.')],
 a=[('How long did the summary take?', 'ninety seconds'),
    ('How many sentences were removed?', 'eleven'),
    ('What were nine of them?', 'repetition'),
    ('What was the important one?', 'that two of the five disagreed'),
    ('When should the dropped list be read?', 'before the summary')],
 b=[('Ask it what it ____________.', 'dropped'),
    ('It removed eleven sentences as ____________.', 'non-central'),
    ('A thing said once is not a thing that ____________ less.', 'matters'),
    ('Read it ____________ you read the summary.', 'before')]),

d2=dict(
 title='One page, because of the reader',
 fig=(['Why one page?', 'Because of the reader.'],
      ['Not because of the subject?', 'The subject would like ten.']),
 cap='Nour and Bassel, on why cables are short.',
 lines=[('Nour', 'Why is a cable one page? Some subjects need more.'),
        ('Bassel', 'Every subject needs more. The reader has eleven minutes.'),
        ('Nour', 'So the limit is about the reader, not the subject.'),
        ('Bassel', 'Always. A two-page cable is a one-page cable with an unread half.'),
        ('Nour', 'What if the Minister needs the detail?'),
        ('Bassel', 'Then the detail goes in an annex and the page says it exists.'),
        ('Nour', 'And the page itself?'),
        ('Bassel', 'A heading that says what to do. What happened. What it means. What we propose.'),
        ('Nour', 'In that order?'),
        ('Bassel', 'In that order, because the reader may stop at any point and still have the decision.'),
        ('Nour', 'So the most important thing is first.'),
        ('Bassel', 'Yes. And what happens when the most important thing is the thing we are least sure of?')],
 unresolved=True,
 a=[('Why is a cable one page?', 'because the reader has eleven minutes'),
    ('What is a two-page cable?', 'a one-page cable with an unread half'),
    ('Where does detail go?', 'in an annex, named on the page'),
    ('What are the four parts, in order?', 'heading, what happened, what it means, what we propose'),
    ('Why that order?', 'the reader may stop at any point and still have the decision')],
 b=[('The reader has eleven ____________.', 'minutes'),
    ('The detail goes in an ____________.', 'annex'),
    ('A heading that says what to ____________.', 'do'),
    ('The most important thing is ____________.', 'first')]),

speak=[('Cause and result',
        ['Explain six decisions at your work using because, so and as a result.',
         'Your partner rejects any sentence with two connectors.',
         'Then say each one again the other way round.']),
       ('Four pages to one',
        ['Describe a long document you have read, in four sentences.',
         'Then say the one sentence that would change a decision.',
         'Your partner asks what you left out and whether it mattered.']),
       ('The dropped list',
        ['Summarise your partner’s last week in three sentences.',
         'Then list three things you left out.',
         'Your partner says which of the three should have stayed.'])],

ext_title='A summary keeps what is repeated, so the thing said once is the thing at risk',
ext_fig=figs.datatable('FOUR PAGES, ELEVEN CUTS',
                       ['What was cut', 'How many sentences', 'Right to cut?'],
                       [['repetition of agreed points', '6', 'yes'],
                        ['background already known', '3', 'yes'],
                        ['an aside about the building', '1', 'yes'],
                        ['two of five disagreed', '1', 'no'],
                        ['total cut', '11', '—'],
                        ['total kept', '34', '—']]),
ext_fig_cap='Ten correct cuts and one that removed the only disagreement in the room.',
ext=[
 'The one-page limit is not a stylistic preference. A desk officer receives forty cables and '
 'has a morning. A page is what gets read; a second page is written for a reader who does '
 'not exist. Everything beyond the page belongs in an annex that will be opened only if the '
 'page says it should be.',
 'Cutting four pages to one is therefore the central skill, and it is harder than writing '
 'the four pages. Most of what is in notes is true, interesting and irrelevant to the '
 'decision. The test is not importance in general; it is whether a reader would act '
 'differently if the sentence were absent.',
 'Summarising systems are good at this and getting better. Given notes and a fixed shape, a '
 'competent one-page draft comes back in under two minutes, with the figures right and the '
 'order sensible. For a tired officer at six in the evening this is a real gain.',
 'The weakness is structural rather than accidental. Summarisation keeps what is central, '
 'and centrality is measured by repetition and by connection to the rest of the text. A '
 'fact stated once, in eleven words, connected to nothing else, scores low.',
 'Unfortunately that is exactly the shape of a dissent, a caveat, a single contradicting '
 'figure or an unexpected remark at the end of a meeting. So ask for the list of what was '
 'cut, read that list first, and put back by hand whatever changes a decision.'],

dp2=('Read the cut list first', 'Editorial practice for automated summarisation commonly '
     'recommends reviewing the material removed before the summary itself, because a reader '
     'who has already absorbed a coherent summary is less likely to notice what is missing.',
     'Source: reported editorial practice, 2025–2026.'),

e_a=[('Why is a cable one page?', 'because that is what gets read'),
     ('What is the test for keeping a sentence?', 'whether a reader would act differently without it'),
     ('What are summarising systems good at?', 'producing a competent one-page draft quickly'),
     ('How is centrality measured?', 'by repetition and connection to the rest of the text'),
     ('What shape does a dissent have?', 'short, stated once, connected to nothing')],
e_b=[('The page limit is a matter of style.', 'F'),
     ('Cutting is easier than writing.', 'F'),
     ('Most of what is in notes changes the decision.', 'F'),
     ('Summarisation favours repeated material.', 'T'),
     ('A caveat usually appears many times.', 'F'),
     ('The cut list should be read after the summary.', 'F')],

w_model='Purpose: so that the desk can decide whether to seek a meeting at ministerial '
        'level. Scope: the meeting of 16 April; the earlier correspondence is not '
        'summarised. Inputs: my 4 pages of notes and the list of sentences cut. Criteria: 6 '
        'lines: a heading naming the decision and the date, what happened, what it means, '
        'what the Mission proposes, any dissent recorded, and what is in the annex. Done: 6 '
        'lines sent by 18:00 on 16 April. Fallback: where a cut sentence changes a decision, '
        'it is restored by hand and the cut list is kept on the file.',
w_fig=figs.spec_card('SIX LINES AND A CUT LIST',
                     [('Purpose', 'the desk can decide about a ministerial meeting'),
                      ('Scope', 'the meeting of 16 April'),
                      ('Inputs', '4 pages of notes and the list of cuts'),
                      ('Criteria', 'heading, happened, means, proposes, dissent, annex'),
                      ('Done', 'sent by 18:00 on 16 April'),
                      ('Fallback', 'a decision-changing cut is restored by hand')]),
w_fig_cap='The fifth line exists because it is the line a summary removes.',
w_task='Write a six-line cable about a meeting or an event.',
w_steps=['Line 1: the subject heading, naming the action needed and the date.',
         'Line 2: what happened, in one sentence.',
         'Line 3: what it means, marked as your assessment.',
         'Line 4: what the Mission proposes, with a date.',
         'Line 5: any disagreement or caveat, however short.',
         'Line 6: what is in the annex, if anything.'],
w_bank=['Decision needed by …: … .',
        'On … the Mission met … and … .',
        'In my assessment, which … did not confirm, … .',
        'The Mission proposes that … by … .',
        'Two of the five present did not agree; their objection was that … .'],
w_check=['Does line 1 name the action and the date?',
         'Is your assessment marked as yours?',
         'Is any dissent recorded, even in one clause?',
         'Does line 6 exist only if there is an annex?'],

t_title='One page from four pages of notes',
t_fig=figs.split('FOUR PAGES OF NOTES',
                 'Ask the system for this',
                 ['a one-page draft in the standard shape',
                  'the figures checked against the notes',
                  'the points in the order they arose',
                  'the list of every sentence it removed'],
                 'Do this yourself',
                 ['read the cut list before the summary',
                  'restore any dissent or caveat',
                  'decide what the decision actually is',
                  'write the subject heading']),
t_fig_cap='The fourth item on the left is the one that makes the rest safe.',
t_body=[
 'Ask for two things, not one. The one-page draft, and the list of every sentence that was '
 'removed. The second is produced as easily as the first and is almost never requested, '
 'which is why the risk of summarisation is so widely underestimated.',
 'Read the cut list first. Once you have read a coherent one-page summary, your mind has a '
 'shape for the meeting, and a missing sentence does not announce itself. Read the cuts '
 'cold, and the one that matters stands out in a second.',
 'Then restore by hand. A dissent, a caveat, a single contradictory figure, a remark made '
 'at the door on the way out: these are short, unrepeated and decision-changing, which is '
 'the exact combination a summary is built to remove.'],
t_say=[('Ask for both: ', 'Give me the one-page draft and the list of everything you cut.'),
       ('Read the cuts first: ', 'I will read the cut list before I read the summary.'),
       ('Restore by hand: ', 'Put back the sentence about the two who disagreed.')],
t_bound='A summarising system keeps what is central, and it measures centrality by '
        'repetition and connection. A fact stated once, in a few words, connected to nothing '
        'else, is the kind of fact it removes, and a dissent almost always has that shape.',
t_a=[('Give me the draft and the list of everything you ____________.', 'cut'),
     ('I will read the cut list ____________ the summary.', 'before'),
     ('Put back the sentence about the two who ____________.', 'disagreed'),
     ('It measures centrality by ____________.', 'repetition'),
     ('A fact stated ____________ scores low.', 'once'),
     ('A dissent almost always has that ____________.', 'shape')],
t_b_rubric='Say whether each sentence is safe to cut, and why.',
t_b=[('The third repetition of an agreed point.', 'safe: it adds nothing to the decision'),
     ('Two of the five present did not agree.', 'never cut: it changes the decision'),
     ('A remark about the building works.', 'safe: it affects nothing'),
     ('One figure that contradicts the others.', 'never cut: a contradiction is information')],

case=dict(
 title='The Decision Room · The eleven words that were cut',
 brief=[
  'After a meeting with five officials the Mission drafts a one-page cable from four pages '
  'of notes. The draft is produced in ninety seconds, keeps every figure correctly and is '
  'better organised than the officer’s own version.',
  'Eleven sentences are removed as non-central. Nine are repetition, one is an aside about '
  'the building, and one is eleven words long: two of the five present did not agree with '
  'the proposal.',
  'The capital reads the cable as describing a department that is ready to proceed, and '
  'instructs the Mission to seek a ministerial meeting. The meeting is sought and the '
  'department declines, which surprises the capital and nobody who was in the room.'],
 exhibit=figs.datatable('WHAT THE CABLE SAID AND WHAT THE ROOM SAID',
                        ['Item', 'In the notes', 'In the cable'],
                        [['the proposal explained', 'yes', 'yes'],
                         ['three officials supportive', 'yes', 'yes'],
                         ['two officials disagreed', 'yes, once', 'no'],
                         ['timing discussed', 'yes', 'yes'],
                         ['figures', 'yes', 'yes, correct'],
                         ['the capital’s reading', '—', 'ready to proceed']]),
 exhibit_cap='Every figure in the cable was right. The only thing missing was the disagreement.',
 exhibit_note='The cut was defensible by the rule the summary applies: the sentence '
              'appeared once, was short, and was not referred to again anywhere.',
 voices=[('Bassel Tannous', 'consul',
          'Ninety seconds for a draft I would have taken fifty minutes to write worse.'),
         ('Rim Haddad', 'consular assistant',
          'And eleven words gone, which were the only words that told the capital to go slowly.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'It cut what a summary cuts. We are the ones who sent it without reading the cut list.')],
 steps=[('Find it', 'Which sentence was removed?'),
        ('Compare it', 'What did the capital conclude and what was true?'),
        ('Infer it', 'Why did the summary remove it?'),
        ('Weigh it', 'Reading a cut list against a ministerial meeting that was declined.'),
        ('Decide', 'What is read, and in what order, before a cable is sent?')],
 analysis=[('Find it. Which sentence was removed?', 'that two of the five did not agree'),
           ('Compare it. What did the capital conclude?', 'that the department was ready to proceed'),
           ('Infer it. Why was it cut?', 'it appeared once, was short and was never referred to again'),
           ('Weigh it. What did it cost?', 'a ministerial meeting was sought and declined'),
           ('Decide. What must be read first?', 'the list of what was cut')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what is asked for alongside every summary.',
                 'Say in what order the two are read.',
                 'Say what must never be cut.',
                 'Say what is kept on the file.'],
 bank=['Every summary is produced together with a list of the sentences removed.',
       'The cut list is read before the summary, not after it.',
       'A dissent, a caveat or a contradictory figure is never cut, however short.',
       'The cut list is kept on the file with the cable.'],
 outcome='The Mission sends a short correcting cable the same week, which is read and '
         'welcomed. From May every summary is produced with its cut list, the cut list is '
         'read first, and dissent is restored by hand. The drafting still takes ninety '
         'seconds and the reading of the cut list takes two minutes, which the consul '
         'describes as the best-value two minutes in the section.',
 outcome_q=[('What did the Mission send?', 'a short correcting cable'),
            ('What accompanies every summary now?', 'a list of the sentences cut'),
            ('Which is read first?', 'the cut list'),
            ('What is never cut?', 'a dissent, a caveat or a contradictory figure'),
            ('How long does reading the cut list take?', 'about two minutes')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Cut it down to a page',
 task=['An officer was asked to turn four pages of notes into a cable before the evening.',
       'This is the instruction as it was given, and what was sent.'],
 draft=['Cut it down to a page.',
        'Keep the important bits.',
        'Lose the repetition.',
        'Tighten the language.',
        'Make sure the capital gets the point.',
        'Send it this evening.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says what important means or what must never go.',
 asked=['One page', 'The important bits', 'The capital gets the point'],
 back=['1 page', '11 sentences cut, 1 of them decisive', 'No cut list kept'],
 gap='Nobody said what may never be cut, or that the cuts must be listed and read.',
 back_cap='One page, eleven cuts, and the only disagreement in the room among them.',
 back_note='Keep the important bits is a judgement, and under time pressure importance is '
           'read as prominence, which is exactly what a summary already optimises for.',
 diagnosis=[('“the important bits”', 'unstated criterion'),
            ('“make sure the capital gets the point”', 'unstated criterion'),
            ('“cut it down”', 'undefined done'),
            ('“tighten the language”', 'undefined done'),
            ('“the repetition”', 'unscoped set'),
            ('“this evening”', 'unscoped set')],
 rewrite='Rewrite it on the six lines so that nothing decision-changing can be cut.',
 scaffold=['why the cable is being sent and what decision it serves',
           'which notes are summarised and which are not',
           'what must be produced alongside the summary',
           'what may never be cut, listed by kind',
           'how long it is and when it is sent',
           'what happens when a cut sentence changes a decision'],
 bank=['Purpose: so that the desk can decide whether to …',
       'Scope: the notes of … only; earlier correspondence is not summarised',
       'Inputs: the notes, and a list of every sentence removed',
       'Criteria: … lines in the standard shape; no dissent, caveat or contradictory figure cut',
       'Done: … lines sent by … on … , with the cut list on the file',
       'Fallback: a decision-changing cut is restored by hand before sending'],
 check=['Does it require a cut list?',
        'Does it name what may never be cut?',
        'Is the standard shape specified?',
        'Is there a time for sending?'],
 model=['so that the desk can decide whether to seek a ministerial meeting',
        'the notes of the meeting of 16 April only; earlier correspondence is excluded',
        'the 4 pages of notes, and a list of every sentence removed',
        '6 lines in the standard shape; no dissent, caveat or contradictory figure may be cut',
        '6 lines sent by 18:00 on 16 April, with the cut list kept on the file',
        'a cut sentence that would change a decision is restored by hand before sending'],
 cost='11 cuts included 1 of 11 words that would have changed an instruction. Reading the '
      'cut list would have cost 2 minutes against 1 declined ministerial request.'),

feet=dict(
 title='On Your Feet · The desk officer asks what you left out',
 setting=[
  'The desk officer telephones at 09:20, the morning after your cable. She is not '
  'complaining. She says the cable reads as though the department is ready to proceed, and '
  'she wants to know whether that is really the position before she puts it upward.',
  'You know that two of the five present disagreed, and you know it is not in the cable. '
  'You have about ninety seconds to give her an accurate picture without either defending '
  'the cable or undermining your own Mission.'],
 ladder=[('Is that the position?', 'answer the real question first'),
         ('It is not in the cable', 'own the omission plainly'),
         ('Can I still use it?', 'the turn that asks you to let it stand')],
 cap='Three turns, before a submission goes upward on your sentence.',
 turns=[('Turn 1 · Desk officer', 'Your cable reads as if they are ready to proceed. Are they?'),
        ('Turn 2 · Desk officer', 'There is nothing in it about anybody disagreeing.'),
        ('Turn 3 · Desk officer', 'So can I use the cable as it stands, or not?')],
 holds=['Three of the five were supportive. Two were not, and that is not in the cable.',
        'The omission is ours and I am telling you before you use it.',
        'I would not put it up as it stands; the department is divided.',
        'I will send a short correcting cable within the hour.',
        'The disagreement was recorded in the notes and was cut in the summary.',
        'If you need it today, treat my telephone account as the position until the cable arrives.'],
 redline='You must not say that the omission does not matter, you must not blame the '
         'drafting process to the capital, and you must not let her use the cable unchanged '
         'once you know it is misleading. Do not promise a correction without a time.',
 score=['Answered the substantive question in the first sentence.',
        'Stated the omission plainly as the Mission’s own.',
        'Advised against using the cable as it stood.',
        'Offered a correction with a stated time.',
        'Gave her something usable in the meantime.'],
 a=[('What do you answer first?', 'whether the department is ready to proceed'),
    ('How do you describe the omission?', 'plainly, as the Mission’s own'),
    ('What do you advise?', 'that she does not put it up as it stands'),
    ('What do you offer?', 'a correcting cable within the hour'),
    ('What may she use meanwhile?', 'your telephone account as the position'),
    ('What must you not blame?', 'the drafting process')]),

rev_fig=figs.split('A ONE-PAGE CABLE',
                   'A cut that is safe',
                   ['the third repetition of a point',
                    'background the desk already has',
                    'an aside about the building',
                    'a long quotation of an agreed text'],
                   'A cut that is never safe',
                   ['two of the five did not agree',
                    'one figure contradicts the others',
                    'a caveat about the source',
                    'a remark made at the door']),
rev_fig_cap='Everything on the right is short, said once, and changes what a reader should do.',
rev=dict(
 read=[('How long is a cable?', ['one page', 'four pages', 'ten lines', 'two pages'], 0),
       ('How many sentences were cut?', ['eleven', 'one', 'thirty-four', 'none'], 0),
       ('What shape does a dissent usually have?',
        ['short and said once', 'long and repeated', 'in the heading', 'in an annex'], 0),
       ('Which is read first?',
        ['the cut list', 'the summary', 'the annex', 'the notes'], 0)],
 listen_text='Ask for two things: the one-page draft and the list of every sentence removed. '
             'Read the cut list first, because once you have read a coherent summary a '
             'missing sentence does not announce itself.',
 listen=[('Ask for the draft and the list of every sentence ____________.', 'removed'),
         ('Read the ____________ list first.', 'cut'),
         ('A missing sentence does not ____________ itself.', 'announce'),
         ('Once you have read a ____________ summary.', 'coherent')],
 speak=['Explain six decisions using because, so and as a result.',
        'Then summarise a long account in three sentences and list what you dropped.'],
 write='Write a six-line cable about a meeting or an event.',
 vocab=[('The first paragraph carrying the main point is the ____________ paragraph.', 'lead'),
        ('A noun made from a verb is a ____________.', 'nominalisation'),
        ('One complete reading for one purpose is an editing ____________.', 'pass'),
        ('A copy sent to a reader not asked to act is an ____________ copy.', 'information')],
 gram=[('____________ the reader has no time, the cable is one page.', 'Because'),
       ('It appeared once, ____________ it was dropped.', 'so'),
       ('It appeared once. As a ____________, it was lost.', 'result'),
       ('____________ of the word limit, the annex was created.', 'Because')]),

found=['Ask for the cut list every time you summarise anything, for one month.',
       'Read one of your own cables and mark which sentences would change a decision.',
       'Write a subject heading for your last three reports, naming the action and the date.',
       'Find one dissent in your own notes that never reached a cable.'],
end_line='Ask for the summary and the cuts. Read the cuts first, and restore the dissent by hand.',
end_next='Next: The Month in Numbers')
