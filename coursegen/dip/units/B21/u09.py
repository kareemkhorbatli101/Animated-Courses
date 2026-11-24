# -*- coding: utf-8 -*-
import figs

U = dict(
num=9,
title='Reporting a Negotiation Honestly',
gram='reported speech in a record of a negotiation',
ai='the negotiation report that does not flatter you',
strap='CEFR B2 · Grammar: reported speech in a record of a negotiation · '
      'AI: the negotiation report that does not flatter you',
cando=['report what was said using said, stated, undertook and indicated accurately',
       'write a negotiation report that records what you did not obtain',
       'separate a factual account from a personal assessment',
       'say how a fluent draft can flatter the person who dictated it',
       'write a six-line tasking for a negotiation report'],

hero=('EVERY SENTENCE WAS TRUE AND THE REPORT WAS NOT',
      ['He pressed firmly. It was accepted that. Agreement was reached.',
       'One side moved twice, and the report called the outcome mutual.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A reporting telegram drafted at nine in the evening, after eleven hours of negotiation.',

warm=['What is a negotiation report for?',
      'Why is it tempting to write that an outcome was mutual?',
      'What does a capital most need to know after a difficult round?'],

read=[
 'A negotiation report has one purpose, which is to let somebody who was not in the room '
 'decide what to do next, and it serves that purpose only if it records what the delegation '
 'failed to obtain as plainly as what it obtained.',
 'Ziad Mikhail has eleven hours of notes and forty minutes before the telegram must go. He '
 'dictates the sequence of the day into a system and asks for a draft report, and what comes '
 'back is better written than anything he could produce at nine in the evening.',
 'It is also, in four places, a more flattering account of his own performance than the day '
 'deserves. His interventions are described as pressing firmly; the concession he made in the '
 'afternoon appears as it was accepted that the period would be four months.',
 'The point he forgot to raise at all is simply absent, because it is not in his notes, and a '
 'draft built from his notes cannot contain what he failed to say.',
 'Asked for a balanced account, it produces symmetry: the outcome is described as a mutual '
 'accommodation, although the record of the day shows his delegation moving twice and the other '
 'side not at all.'],

dp1=('What a report is for', 'Reporting practice commonly holds that the value of a '
     'negotiation report lies in its usefulness to those who must decide next steps, which '
     'requires an explicit account of positions not achieved and of commitments given, '
     'separated from the officer’s own assessment.',
     'Source: general diplomatic reporting practice, 2025–2026.'),

c_a=[('What is a report’s purpose?', 'to let somebody absent decide what to do next'),
     ('How long were the notes and how long did he have?', 'eleven hours of notes, forty minutes'),
     ('What was the draft like?', 'better written than he could manage'),
     ('How were his interventions described?', 'as pressing firmly'),
     ('How did his concession appear?', 'as it was accepted that'),
     ('What was absent?', 'the point he forgot to raise')],

c_b=[('A report should record failures as plainly as successes.', 'T'),
     ('The draft was poorly written.', 'F'),
     ('It flattered his performance in four places.', 'T'),
     ('A draft from his notes could include what he forgot.', 'F'),
     ('The outcome was genuinely mutual.', 'F'),
     ('Balance was produced by inventing symmetry.', 'T')],

c_c=[('He said that he ____________ no instruction on the period.', 'had'),
     ('She stated that her delegation ____________ revert on Friday.', 'would'),
     ('They undertook ____________ circulate a revised text.', 'to'),
     ('He indicated that the matter ____________ under consideration.', 'was'),
     ('They claimed that the phrase ____________ been agreed on Tuesday.', 'had'),
     ('She asked whether we ____________ accept a shorter period.', 'would')],

c_d=[('Undertook to records ( an opinion / a commitment ).', ['an opinion', 'a commitment'], 1),
     ('Indicated that records ( something short of a commitment / a promise ).',
      ['something short of a commitment', 'a promise'], 0),
     ('Claimed that signals ( that the speaker asserted it / that it is true ).',
      ['that the speaker asserted it', 'that it is true'], 0),
     ('It was accepted that hides ( who accepted / what was accepted ).',
      ['who accepted', 'what was accepted'], 0),
     ('A report must record ( what was not obtained / only the outcome ).',
      ['what was not obtained', 'only the outcome'], 0)],

c_e=('Commitment, statement or assertion? Put each in the right column.',
     [('undertook to circulate a text', 'commitment'),
      ('stated that the delegation would revert', 'statement'),
      ('claimed that it had been agreed', 'assertion'),
      ('undertook to reply by Friday', 'commitment'),
      ('indicated that it was under consideration', 'statement'),
      ('claimed that no objection had been made', 'assertion')],
     ['commitment', 'statement', 'assertion']),

v_fig_title='WHAT GOES IN A REPORT',
v_fig=[('doc', 'a factual account'), ('chart', 'a residual difference'), ('key', 'a concession obtained'),
       ('clock', 'a next step agreed'), ('people', 'a personal assessment'), ('speech', 'a verbatim quotation')],
v_fig_cap='Six words for the parts of a telegram a capital will act on tomorrow.',

vocab=[
 ('a negotiation report', 'the account of a round sent to a capital'),
 ('a record of discussion', 'the sequential account of what was said'),
 ('a summary of outcome', 'the short statement of what the round produced'),
 ('an assessment of position', 'the officer’s judgement of where matters stand'),
 ('a residual difference', 'a disagreement remaining at the end of a round'),
 ('an unresolved point', 'a question left open'),
 ('a concession made', 'something given by one’s own side'),
 ('a concession obtained', 'something given by the other side'),
 ('a next step agreed', 'the action both sides accepted would follow'),
 ('a reporting telegram', 'the formal message carrying a report'),
 ('an annex of texts', 'the wording attached to a report'),
 ('a paragraph of comment', 'the part of a report giving the officer’s view'),
 ('a factual account', 'a narrative without assessment'),
 ('a personal assessment', 'the officer’s own judgement, so identified'),
 ('a lesson recorded', 'a point noted for the conduct of future rounds'),
 ('a recommendation to the capital', 'a proposed course of action'),
 ('an addressee of the report', 'a person or office to whom a report is sent'),
 ('a date of despatch', 'the day and time a message left the Mission'),
 ('a drafting attribution', 'the note of who proposed given wording'),
 ('a verbatim quotation', 'words reproduced exactly as spoken')],

v_a=[('Something given by the other side is a concession ____________.', 'obtained'),
     ('A disagreement remaining at the end of a round is a ____________ difference.', 'residual'),
     ('A narrative without assessment is a ____________ account.', 'factual'),
     ('The officer’s own judgement, so identified, is a ____________ assessment.', 'personal'),
     ('Words reproduced exactly as spoken are a ____________ quotation.', 'verbatim'),
     ('A point noted for future rounds is a lesson ____________.', 'recorded'),
     ('The day and time a message left is the date of ____________.', 'despatch'),
     ('The action both sides accepted would follow is a next step ____________.', 'agreed')],

v_b=[('A negotiation report is the account of a round', 'sent to a capital.'),
     ('An assessment of position is the officer’s judgement', 'of where matters stand.'),
     ('A paragraph of comment is the part of a report', 'giving the officer’s view.'),
     ('An annex of texts is the wording', 'attached to a report.'),
     ('A record of discussion is the sequential account', 'of what was said.')],

g_title='Grammar: reported speech in a record of a negotiation',
g_rule=['Backshift one step: he says he has no instruction becomes he said that he had no '
        'instruction.',
        'Choose the reporting verb precisely: undertook to is a commitment, stated that is a '
        'statement, indicated that is less than a commitment, claimed that marks an assertion '
        'you do not adopt.',
        'Do not characterise: he was positive is your opinion; he said the matter was under '
        'consideration is the record.',
        'Keep the agent: avoid it was accepted that, which conceals who accepted what.'],
g_fig=('FLATTERING',
       ['We pressed firmly on the period.',
        'It was accepted that the period would be four months.',
        'He was positive about the annex.',
        'Agreement was reached on a mutual basis.'],
       'HONEST',
       ['The delegation stated twice that twelve months was required.',
        'The delegation accepted a period of four months.',
        'He said that the annex was under consideration.',
        'The delegation moved from twelve months to four; the other side did not move.'],
       'four sentences in which nobody did anything',
       'the same four, each naming who did what'),
g_fig_cap='The passive voice is where a delegation hides its own concessions from its own capital.',

g_a=[('He said that he ____________ no instruction on the period.', 'had'),
     ('She stated that her delegation ____________ revert on Friday.', 'would'),
     ('They undertook ____________ circulate a revised text.', 'to'),
     ('He indicated that the matter ____________ under consideration.', 'was'),
     ('They claimed that the phrase ____________ been agreed on Tuesday.', 'had'),
     ('She asked whether we ____________ accept a shorter period.', 'would'),
     ('He said that his minister ____________ seen the decree.', 'had'),
     ('They stated that they ____________ not prepared to move on timing.', 'were'),
     ('She undertook ____________ reply before the tabling deadline.', 'to')],

g_b=[('( The delegation accepted four months / It was accepted that the period would be four months ) — name the agent.', ['The delegation accepted four months', 'It was accepted that the period would be four months'], 0),
     ('( He said the matter was under consideration / He was positive ) — record, not opinion.',
      ['He said the matter was under consideration', 'He was positive'], 0),
     ('They ( undertook to circulate a text / said they might circulate a text ) — a commitment was given.',
      ['undertook to circulate a text', 'said they might circulate a text'], 0),
     ('They ( claimed that it had been agreed / confirmed that it had been agreed ) — we do not adopt it.',
      ['claimed that it had been agreed', 'confirmed that it had been agreed'], 0),
     ('( The delegation stated twice that twelve months was required / We pressed firmly ) — what was said.',
      ['The delegation stated twice that twelve months was required', 'We pressed firmly'], 0),
     ('( We moved twice; they did not move / Agreement was reached on a mutual basis ) — the arithmetic.',
      ['We moved twice; they did not move', 'Agreement was reached on a mutual basis'], 0)],

d1=dict(
 title='Pressed firmly',
 fig=(['It says we pressed firmly.', 'And what did we actually say?'],
      ['We said twelve months. Twice.', 'Then write that.']),
 cap='Ziad Mikhail and Dr Suhair Kanaan, at twenty past nine in the evening.',
 lines=[('Suhair', 'Read me paragraph 3.'),
        ('Ziad', 'The delegation pressed firmly for a twelve-month transitional period.'),
        ('Suhair', 'Pressed firmly. What did you do, exactly?'),
        ('Ziad', 'I said twelve months was required. Twice, about an hour apart.'),
        ('Suhair', 'Then that is the sentence. Pressed firmly is how you felt, not what happened.'),
        ('Ziad', 'It is also how it will read in the capital at eight tomorrow.'),
        ('Suhair', 'Which is the problem, not the argument for it. Read me paragraph 5.'),
        ('Ziad', 'It was accepted that the period would be four months.'),
        ('Suhair', 'By whom?'),
        ('Ziad', 'By us. We accepted four months at about four o’clock.'),
        ('Suhair', 'So write: the delegation accepted a period of four months at 16:00. Nine words, and true.'),
        ('Ziad', 'And considerably less comfortable to send.')],
 a=[('What did paragraph 3 say?', 'that the delegation pressed firmly'),
    ('What had actually happened?', 'he said twelve months was required, twice'),
    ('What is wrong with pressed firmly?', 'it reports a feeling, not an act'),
    ('Who accepted four months?', 'his own delegation'),
    ('What should paragraph 5 say?', 'the delegation accepted four months at 16:00')],
 b=[('Pressed firmly is how you ____________.', 'felt'),
    ('Which is the ____________, not the argument for it.', 'problem'),
    ('Nine words, and ____________.', 'true'),
    ('Less comfortable to ____________.', 'send')]),

d2=dict(
 title='The point I never raised',
 fig=(['There is nothing about the annex.', 'Because I never raised it.'],
      ['Then the report must say so.', 'Must it?']),
 cap='Ziad and Dalia Khoury, on the telephone at a quarter to ten.',
 lines=[('Dalia', 'Your report does not mention the annex at all.'),
        ('Ziad', 'Because I did not raise it. It was on my list and we ran out of time at six.'),
        ('Dalia', 'Then the report has to say that it was not raised.'),
        ('Ziad', 'The draft could not know that. It was written from my notes, and my notes are what I said.'),
        ('Dalia', 'Of course. The absence of a thing is never in the notes.'),
        ('Ziad', 'So I add a line: the annex was not raised for want of time.'),
        ('Dalia', 'Add the consequence too: it is not raised, so it is not reserved either.'),
        ('Ziad', 'Which means they may treat our silence as acceptance of their text.'),
        ('Dalia', 'They may, and some delegations will. Put it in the first paragraph, not the last.'),
        ('Ziad', 'It will be the least flattering sentence in the telegram.'),
        ('Dalia', 'It will be the most useful one. I have to brief the director at eight.'),
        ('Ziad', 'And if the director asks why I ran out of time?')],
 unresolved=True,
 a=[('Why was the annex not in the report?', 'he never raised it'),
    ('Why could the draft not know?', 'it was written from his notes'),
    ('What line does he add?', 'that the annex was not raised for want of time'),
    ('What consequence must be added?', 'that it is not reserved either'),
    ('Where should it go?', 'in the first paragraph')],
 b=[('We ran out of ____________ at six.', 'time'),
    ('The absence of a thing is never in the ____________.', 'notes'),
    ('They may treat our silence as ____________.', 'acceptance'),
    ('It will be the most ____________ one.', 'useful')]),

speak=[('Report it exactly',
        ['Report nine things somebody said, using said, stated, undertook, indicated and claimed.',
         'Your partner says whether each was a commitment, a statement or an assertion.',
         'Remove any characterisation your partner finds.']),
       ('Name the agent',
        ['Take five passive sentences about a negotiation and rewrite them with the agent named.',
         'Say in each case who gave something up.',
         'Your partner checks that nothing has been softened.']),
       ('What did you not get?',
        ['Describe a discussion you had this month.',
         'Say what you wanted, what you obtained and what you did not raise.',
         'Your partner asks one question about the thing you left out.'])],

ext_title='A draft written from your notes can only flatter you, because your notes are what you did',
ext_fig=figs.datatable('FOUR SENTENCES, AS DRAFTED AND AS SENT',
                       ['Element', 'Draft', 'Sent'],
                       [['our interventions', 'pressed firmly', 'stated twice that 12 months was required'],
                        ['our concession', 'it was accepted that', 'the delegation accepted 4 months at 16:00'],
                        ['their response', 'he was positive', 'he said it was under consideration'],
                        ['the outcome', 'a mutual accommodation', 'we moved twice; they did not move'],
                        ['the annex', 'not mentioned', 'not raised for want of time; not reserved'],
                        ['the next step', 'further contact', 'they undertook to circulate a text by 24 May']]),
ext_fig_cap='Six elements, all of them true in both columns, and only one column is of any use.',
ext=[
 'Drafting a reporting telegram at nine in the evening after eleven hours in a room is work '
 'that a system genuinely improves. The sequence comes out clean, the chronology is right, '
 'the English is better than tired English, and forty minutes is enough.',
 'The flattery is not deliberate and it is not a fault of the system. It follows from the '
 'inputs: a draft produced from your dictated notes describes a day as you experienced it, '
 'and you experienced yourself pressing firmly, because you felt firm at the time.',
 'The same mechanism produces the passive. It was accepted that the period would be four '
 'months is a natural way to narrate your own concession, and it is the single most common way '
 'a report conceals a concession from the capital that will have to live with it.',
 'The structural gap is larger. A draft from your notes cannot contain what you did not say. '
 'The point you forgot, the question you did not ask, the reservation you meant to enter at '
 'six o’clock: none of it exists in any input, and all of it is what your capital needs.',
 'So draft with a system and then edit against three questions: who is the agent of every '
 'sentence, which words describe my feelings rather than my acts, and what is missing because '
 'I failed to do it. The third question is the one that makes a report worth sending.'],

dp2=('Omission and acquiescence', 'Negotiating practice commonly treats a position not '
     'stated and not reserved as liable to be read by the other party as acquiescence, which '
     'is why reports are expected to record points that were not raised as well as those that '
     'were.',
     'Source: reported negotiating practice, 2025–2026.'),

e_a=[('What does a system improve about the telegram?', 'the sequence, chronology and English'),
     ('Why is the flattery not deliberate?', 'it follows from the dictated notes'),
     ('What does the passive conceal?', 'who made the concession'),
     ('What can a draft from notes never contain?', 'what you did not say'),
     ('What are the three editing questions?',
      'who is the agent, which words are feelings, what is missing')],
e_b=[('A draft from notes is a neutral account.', 'F'),
     ('Pressed firmly describes an act.', 'F'),
     ('The passive is the commonest way to hide a concession.', 'T'),
     ('A point not raised may be read as acquiescence.', 'T'),
     ('The missing element is usually the most useful.', 'T'),
     ('Fluent English makes self-flattery easier to see.', 'F')],

w_model='Purpose: so that the director can decide before 09:00 whether to seek a revised '
        'mandate. Scope: the round of 22 May; the drafting group is reported separately. '
        'Inputs: my session notes, the four texts exchanged, and the delegation’s list of '
        'points to raise. Criteria: a factual account with the agent named in every sentence; '
        'concessions made and obtained listed separately with times; points on the list not '
        'raised stated explicitly; assessment confined to a final paragraph marked comment. '
        'Done: the telegram despatched by 22:00 on 22 May. Fallback: where my note is '
        'incomplete, the paragraph says so rather than reconstructing what was probably said.',
w_fig=figs.spec_card('SIX LINES FOR A REPORT',
                     [('Purpose', 'the director decides on a mandate before 09:00'),
                      ('Scope', 'the round of 22 May; drafting group separately'),
                      ('Inputs', 'session notes, 4 texts, the list of points to raise'),
                      ('Criteria', 'agent named; concessions listed; points not raised stated'),
                      ('Done', 'despatched by 22:00 on 22 May'),
                      ('Fallback', 'incomplete note: say so, do not reconstruct')]),
w_fig_cap='Line 4’s third clause is the one that makes a report honest: the points not raised.',
w_task='Write a six-line tasking for a negotiation report.',
w_steps=['Line 1: what decision the report must enable, and by when.',
         'Line 2: which round, and what is reported separately.',
         'Line 3: your notes, the texts and your list of points to raise.',
         'Line 4: the agent, the two concession lists, the points not raised, the comment.',
         'Line 5: when the telegram goes.',
         'Line 6: what is done where your note is incomplete.'],
w_bank=['Purpose: so that … can decide before … whether to … ',
        'Scope: the round of … ; … is reported separately',
        'Inputs: my session notes, … texts, and the list of points to raise',
        'Criteria: agent named in every sentence; concessions made and obtained listed with times; points not raised stated',
        'Done: the telegram despatched by … ',
        'Fallback: where my note is incomplete, … '],
w_check=['Does line 4 require the agent in every sentence?',
         'Are concessions made and obtained listed separately?',
         'Must points not raised be stated?',
         'Does line 6 forbid reconstruction?'],

t_title='The negotiation report that does not flatter you',
t_fig=figs.split('AFTER A ROUND',
                 'A system can give you',
                 ['a clean chronology from your notes',
                  'the texts as exchanged, in order',
                  'a draft in better English than you have left',
                  'a check that every sentence names an agent'],
                 'Only you can supply',
                 ['what you did not raise',
                  'which words flatter you',
                  'what your silence may be taken to concede',
                  'the assessment, marked as yours']),
t_fig_cap='The left column is forty minutes of help. The right column is the report.',
t_body=[
 'Dictate the day in sequence with times, hand over the texts as exchanged, and ask for a '
 'factual draft with the agent named in every sentence and no adverbs of manner, which removes '
 'firmly, constructively and warmly before they reach the page.',
 'Then ask it, separately, to list every concession made by your own delegation with its time '
 'and every concession obtained with its time, in two columns, because two columns of unequal '
 'length is the single most useful thing a capital can be shown.',
 'Then do the part that is only yours. Take your list of points to raise, mark the ones you did '
 'not reach, and put them in the first paragraph with the consequence stated: not raised, '
 'therefore not reserved. Keep your assessment in a final paragraph and label it comment. A '
 'negotiation report earns its place by what it declines to flatter.'],
t_say=[('Ask for the facts: ', 'A factual draft, agent named in every sentence, no adverbs of manner.'),
       ('Ask for two columns: ', 'List concessions made and concessions obtained, with times.'),
       ('Ask yourself: ', 'What was on my list that I never raised?')],
t_bound='A draft built from your notes contains only what you said and did. It cannot know '
        'what you forgot, what you decided not to risk, or what you meant to reserve at six '
        'o’clock, and those omissions are frequently the most important thing in the telegram.',
t_a=[('A factual draft, ____________ named in every sentence.', 'agent'),
     ('No adverbs of ____________.', 'manner'),
     ('List concessions made and concessions ____________.', 'obtained'),
     ('What was on my list that I never ____________?', 'raised'),
     ('Not raised, therefore not ____________.', 'reserved'),
     ('Label it ____________.', 'comment')],
t_b_rubric='Say whether each belongs in the factual account or in the comment paragraph.',
t_b=[('The delegation accepted four months at 16:00.', 'the factual account: it is an act with a time'),
     ('They are unlikely to move before the ministerial.', 'the comment: it is a judgement'),
     ('He said the matter was under consideration.', 'the factual account: it is what he said'),
     ('Their delegation is internally divided.', 'the comment, and only if you say why you think so')],

case=dict(
 title='The Decision Room · The telegram that read better than the day',
 brief=[
  'After eleven hours of negotiation an officer has forty minutes to send a reporting '
  'telegram. He dictates the day and asks for a draft, and receives a clean, well-ordered '
  'account in better English than he could write at that hour.',
  'Four things in it are gentler than the day was. His two interventions are described as '
  'pressing firmly; his own concession on the transitional period appears as it was accepted '
  'that; the counterpart’s non-answer appears as he was positive; and the outcome is called a '
  'mutual accommodation.',
  'A fifth thing is absent. The annex, which was on his list of points to raise, was never '
  'reached, and nothing in his notes records a thing he did not do. The capital must decide '
  'before nine the next morning whether to seek a revised mandate.'],
 exhibit=figs.datatable('MOVEMENT DURING THE DAY',
                        ['Time', 'Our position', 'Their position'],
                        [['09:30', '12 months', '4 months'],
                         ['11:40', '12 months, stated again', '4 months'],
                         ['14:15', '8 months', '4 months'],
                         ['16:00', '4 months', '4 months'],
                         ['18:00', 'annex not reached', 'annex text unchallenged'],
                         ['outcome', 'moved twice', 'did not move']]),
 exhibit_cap='Two movements on one side and none on the other, reported as a mutual accommodation.',
 exhibit_note='Every sentence in the draft is defensible in isolation. The report as a whole '
              'misdescribes a day in which one delegation conceded and the other did not.',
 voices=[('Ziad Mikhail', 'commercial attaché',
          'At nine in the evening it gave me a clean chronology in forty minutes. I could not have.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'And four sentences in which nobody conceded anything, in a day where we conceded twice.'),
         ('Dalia Khoury', 'desk officer, the capital',
          'And no mention of the annex, which is the paragraph I most needed at eight this morning.')],
 steps=[('Find it', 'What did the draft get right?'),
        ('Compare it', 'The draft’s four sentences against the table of movement.'),
        ('Infer it', 'Why does a draft from notes flatter?'),
        ('Weigh it', 'Forty minutes saved against a misdescribed day.'),
        ('Decide', 'What must a report always contain?')],
 analysis=[('Find it. What was right?', 'the chronology, the sequence and the English'),
           ('Compare it. Draft against movement?', 'we moved twice; the draft said mutual'),
           ('Infer it. Why the flattery?', 'the notes record how he experienced the day'),
           ('Weigh it. What was the cost?', 'the capital nearly decided on a false picture'),
           ('Decide. What must be there?', 'named agents, two concession columns, points not raised')],
 decision='Decide the standing form, in four lines.',
 decision_steps=['Say what the factual account must do in every sentence.',
                 'Say how concessions are presented.',
                 'Say what is done about points not raised.',
                 'Say where assessment goes.'],
 bank=['Every sentence of the factual account names who did or said the thing.',
       'Concessions made and concessions obtained are listed in two columns, each with its time.',
       'Points that were on the list and not raised are stated in the first paragraph, with the consequence.',
       'Assessment appears only in a final paragraph marked comment.'],
 outcome='The telegram goes at 21:55 with the two columns, one of them empty, and with the '
         'annex in the first paragraph. The director reads the empty column at eight and seeks a '
         'revised mandate the same morning, which arrives before the next round. Ziad adds one '
         'line to his own file under lessons recorded: raise the annex first next time, because '
         'the end of the day is never reached.',
 outcome_q=[('When was the telegram sent?', 'at 21:55'),
            ('What did the two columns show?', 'that one was empty'),
            ('What did the director do at eight?', 'sought a revised mandate'),
            ('When did it arrive?', 'before the next round'),
            ('What lesson did Ziad record?', 'raise the annex first')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Write up today for the capital',
 task=['An officer asked for a reporting telegram forty minutes before despatch.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Write up today for the capital.',
        'Here are my notes.',
        'Make it read well.',
        'Keep it balanced.',
        'Do not make us look bad.',
        'It has to go tonight.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and two of them make an honest report impossible.',
 asked=['Write up today', 'Balanced', 'Not looking bad'],
 back=['1 clean chronology', '4 flattering formulations', '1 missing paragraph nobody asked for'],
 gap='Nobody said that concessions must be named, that balance is not symmetry, or that points not raised must appear.',
 back_cap='A well-written account of a better day than the one that happened.',
 back_note='Keep it balanced is read as make the two sides look equal, and do not make us '
           'look bad instructs the very concealment a report exists to prevent; both are '
           'satisfied most easily by the passive voice.',
 diagnosis=[('“write up today”', 'undefined done'),
            ('“make it read well”', 'undefined done'),
            ('“keep it balanced”', 'hidden assumption'),
            ('“do not make us look bad”', 'hidden assumption'),
            ('“here are my notes”', 'missing condition'),
            ('“it has to go tonight”', 'missing condition')],
 rewrite='Rewrite it on the six lines so that the report is usable at eight in the morning.',
 scaffold=['what decision the report must enable, and by when',
           'which round, and what is reported separately',
           'the notes, the texts and the list of points to raise',
           'agents, the two concession columns, points not raised, and where comment goes',
           'when the telegram is despatched',
           'what is done where the note is incomplete'],
 bank=['Purpose: so that the director can decide before … whether to seek a revised mandate',
       'Scope: the round of … ; the drafting group is reported separately',
       'Inputs: my session notes, the … texts exchanged, and the list of points to raise',
       'Criteria: agent named in every sentence; concessions made and obtained in two columns with times; points not raised stated',
       'Done: despatched by … ',
       'Fallback: where my note is incomplete, the paragraph says so rather than reconstructing'],
 check=['Does it require the agent in every sentence?',
        'Are concessions in two separate columns?',
        'Must points not raised be stated with their consequence?',
        'Is comment confined to one labelled paragraph?'],
 model=['so that the director can decide before 09:00 whether to seek a revised mandate',
        'the round of 22 May; the drafting group is reported separately',
        'my session notes, the 4 texts exchanged, and the delegation’s list of points to raise',
        'agent named in every sentence; concessions made and obtained in 2 columns with times; points not raised stated with consequence',
        'the telegram despatched by 22:00 on 22 May',
        'where my note is incomplete, the paragraph says so rather than reconstructing what was probably said'],
 cost='4 flattering formulations and 1 missing paragraph. The decision due at 09:00 would '
      'have been taken on a day that did not happen.'),

feet=dict(
 title='On Your Feet · The director telephones about your own report',
 setting=[
  'It is twenty past eight the following morning. The director has read your telegram, has '
  'seen that one concession column is empty and the other has two entries, and has reached the '
  'paragraph saying the annex was not raised.',
  'He is not angry. He is in a hurry, he has a meeting at nine, and he wants to know three '
  'things: what you gave away, what you failed to do, and what he should do about it today.'],
 ladder=[('You moved twice and they did not', 'the arithmetic you must not soften'),
         ('Why was the annex not raised?', 'the failure you must own without excusing'),
         ('Should I seek a new mandate?', 'the recommendation that is yours to give')],
 cap='Three turns on the telephone, forty minutes before the director’s meeting.',
 turns=[('Turn 1 · The director', 'You moved from twelve to four and they did not move at all.'),
        ('Turn 2 · The director', 'And the annex was never raised. Why not?'),
        ('Turn 3 · The director', 'So do I seek a revised mandate this morning or not?')],
 holds=['That is correct, and it is why the column is empty: we moved twice and they did not.',
        'I accepted four months at sixteen hundred, on my own judgement, and I have reported it as mine.',
        'The annex was eleventh on my list and we reached item nine. That is a failure of sequencing, not of time.',
        'I should have raised it first, and I have recorded that so that the next round does not repeat it.',
        'My recommendation is that you seek the mandate this morning, and I can give you the reason in one sentence.',
        'If you would rather decide after the texts arrive on the twenty-fourth, nothing we agreed prevents that.'],
 redline='You must not soften the arithmetic, you must not blame the clock for a sequencing '
         'decision that was yours, and you must not decline to recommend when a recommendation '
         'is what is wanted. Do not pad: he has forty minutes.',
 score=['Confirmed the arithmetic without qualifying it.',
        'Owned the concession as a personal judgement.',
        'Named the real cause of the omission.',
        'Said what has been recorded so it does not recur.',
        'Gave a clear recommendation with one reason.'],
 a=[('What do you confirm first?', 'the arithmetic: you moved twice, they did not'),
    ('How do you describe the concession?', 'as your own judgement, at 16:00'),
    ('What was the real cause of the omission?', 'sequencing, not time'),
    ('What have you recorded?', 'to raise the annex first next round'),
    ('What does the director want at the end?', 'a recommendation'),
    ('How long should your answers be?', 'short: he has forty minutes')]),

rev_fig=figs.split('A REPORTING TELEGRAM',
                   'Factual account',
                   ['every sentence names an agent',
                    'concessions made, with times',
                    'concessions obtained, with times',
                    'points not raised, and why'],
                   'Comment paragraph',
                   ['your assessment, labelled',
                    'your recommendation',
                    'your reason, in one sentence',
                    'the lesson recorded']),
rev_fig_cap='Everything on the left is checkable. Everything on the right is yours, and labelled as yours.',
rev=dict(
 read=[('How long did the officer have?',
        ['forty minutes', 'eleven hours', 'two days', 'four hours'], 0),
       ('How was his concession described in the draft?',
        ['it was accepted that', 'the delegation accepted',
         'we conceded', 'the period was fixed'], 0),
       ('What was absent from the draft?',
        ['the annex he never raised', 'the chronology',
         'the texts exchanged', 'the next step'], 0),
       ('How many times did his side move?',
        ['twice', 'once', 'not at all', 'four times'], 0)],
 listen_text='Ask for a factual draft with the agent named in every sentence and no adverbs of '
             'manner. Ask separately for two columns, concessions made and concessions '
             'obtained, each with its time. Then add the points you never raised.',
 listen=[('Ask for a factual draft with the ____________ named.', 'agent'),
         ('And no adverbs of ____________.', 'manner'),
         ('Two columns: concessions made and concessions ____________.', 'obtained'),
         ('Then add the points you never ____________.', 'raised')],
 speak=['Report nine statements using said, stated, undertook, indicated and claimed.',
        'Then describe a discussion and say what you wanted, got and never raised.'],
 write='Write a six-line tasking for a negotiation report.',
 vocab=[('Something given by the other side is a concession ____________.', 'obtained'),
        ('A narrative without assessment is a ____________ account.', 'factual'),
        ('Words reproduced exactly as spoken are a ____________ quotation.', 'verbatim'),
        ('A disagreement remaining at the end is a ____________ difference.', 'residual')],
 gram=[('He said that he ____________ no instruction.', 'had'),
       ('They undertook ____________ circulate a text.', 'to'),
       ('He indicated that his minister ____________ not yet decided.', 'had'),
       ('They claimed that it ____________ been agreed.', 'had')]),

found=['Name the agent in every sentence of a factual account.',
       'Put concessions made and concessions obtained in two columns, with times.',
       'State in the first paragraph what you did not raise, and what that may concede.',
       'Keep your assessment in one paragraph and label it comment.'],
end_line='Your notes cannot record what you failed to do. Only you can.',
end_next='Next: What You Agreed, and What You Did Not')
