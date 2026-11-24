# -*- coding: utf-8 -*-
import figs

U = dict(
num=2,
title='The Bilateral Meeting',
gram='conditionals in negotiation: unless, provided that, failing that',
ai='preparing the other side’s case against your own',
strap='CEFR B2 · Grammar: conditionals in negotiation: unless, provided that, failing that · '
      'AI: preparing the other side’s case against your own',
cando=['use unless, provided that and failing that precisely in negotiation',
       'structure a bilateral meeting so that it produces something',
       'prepare the strongest version of the other side’s case',
       'say why a generated opposing case is useful and incomplete',
       'write a six-line meeting plan with conditions'],

hero=('THE ARGUMENT THEY ACTUALLY MADE WAS NOT ON ANY OF THE ELEVEN PAGES',
      ['Eleven pages of their case, in four minutes, and most of it was right.',
       'What they opened with was a grievance from 2019 that no document records.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A bilateral room in Rhene, where two delegations of four sit down for ninety minutes.',

warm=['How do you prepare for a meeting with somebody whose position you dislike?',
      'What is the strongest argument against your own case?',
      'Where do the real objections in a negotiation usually come from?'],

read=[
 'A bilateral meeting is ninety minutes long and produces, at best, one agreed sentence; at '
 'worst it produces a cordial exchange of positions that both sides already knew, after '
 'which everybody says that the atmosphere was good, which is what delegations say when '
 'nothing has happened.',
 'The difference between the two outcomes is almost entirely preparation, and preparation '
 'means knowing the other side’s case better than they will trouble to state it, because a '
 'delegation that can articulate the opposing argument more clearly than its opponent can '
 'is a delegation that controls where the conversation goes next.',
 'Hala Darwish therefore asks a system, two days before the meeting, to set out the '
 'strongest possible case against her own position, drawing on everything the other side '
 'has published, and to rank the arguments by how damaging each would be if it were made '
 'well in the room.',
 'Eleven pages come back in four minutes. The arguments are well constructed, properly '
 'ordered and uncomfortably persuasive; three of them she had not considered at all, and '
 'one of them is strong enough that she rewrites her own opening to deal with it before it '
 'is raised.',
 'In the room, the head of the other delegation opens with none of the eleven. He opens '
 'with a grievance about how a meeting was handled in 2019, which appears in no document, '
 'was never published, and is the reason the whole file has moved so slowly since.'],

dp1=('Why the real objection is often unpublished', 'Negotiating practice commonly '
     'distinguishes between stated positions, which are documented and can be anticipated, '
     'and underlying grievances, which are frequently unrecorded and which determine how '
     'readily a counterpart will move.',
     'Source: reported negotiating practice, 2025–2026.'),

c_a=[('How long is a bilateral meeting?', 'about ninety minutes'),
     ('What does a good one produce?', 'one agreed sentence'),
     ('What does a delegation say when nothing has happened?', 'that the atmosphere was good'),
     ('What did Hala ask for?', 'the strongest case against her own position, ranked'),
     ('How many of the arguments were new to her?', 'three'),
     ('What did the other side open with?', 'a grievance about a meeting in 2019')],

c_b=[('A bilateral meeting usually produces a treaty.', 'F'),
     ('Preparation is the main difference between outcomes.', 'T'),
     ('The generated arguments were badly constructed.', 'F'),
     ('Hala rewrote her opening because of one argument.', 'T'),
     ('The opening grievance appeared in the documents.', 'F'),
     ('Unpublished grievances can slow a file for years.', 'T')],

c_c=[('We can accept the reference ____________ that the review clause is dropped.', 'provided'),
     ('____________ they withdraw the amendment, we cannot proceed to article 5.', 'Unless'),
     ('We shall seek a protocol; ____________ that, a declaration.', 'failing'),
     ('____________ the text is agreed today, the ministers will not meet in March.', 'Unless'),
     ('They will move on transit ____________ that we move on timing.', 'provided'),
     ('We propose the joint text; ____________ that, two separate statements.', 'failing')],

c_d=[('Unless means ( except if / because ).', ['except if', 'because'], 0),
     ('Provided that introduces ( a condition of acceptance / a reason ).',
      ['a condition of acceptance', 'a reason'], 0),
     ('Failing that introduces ( the next option / a refusal ).',
      ['the next option', 'a refusal'], 0),
     ('The generated case was ( persuasive and incomplete / weak ).',
      ['persuasive and incomplete', 'weak'], 0),
     ('The real objection was ( unpublished / in the annexes ).',
      ['unpublished', 'in the annexes'], 0)],

c_e=('Which conditional expression? Put each clause in the right column.',
     [('provided that the review clause is dropped', 'condition'),
      ('unless they withdraw the amendment', 'exception'),
      ('failing that, a declaration', 'next option'),
      ('provided that we move on timing', 'condition'),
      ('unless the text is agreed today', 'exception'),
      ('failing that, two separate statements', 'next option')],
     ['condition', 'exception', 'next option']),

v_fig_title='NINETY MINUTES IN ONE ROOM',
v_fig=[('doc', 'an opening statement'), ('people', 'a chair’s summary'), ('key', 'an agreed outcome'),
       ('chart', 'a point of difference'), ('clock', 'a time check'), ('speech', 'a read-out')],
v_fig_cap='Six words for a meeting that is long enough to fail and short enough to waste.',

vocab=[
 ('a bilateral meeting', 'a meeting between two parties only'),
 ('an opening statement', 'the first prepared intervention of a delegation'),
 ('a seating arrangement', 'the agreed placing of delegations around a table'),
 ('a note-taker’s record', 'the written account kept by a delegation’s own recorder'),
 ('a substantive point', 'a point about the matter itself rather than about procedure'),
 ('a procedural point', 'a point about how business is conducted'),
 ('an agreed outcome', 'something both sides accept has been settled'),
 ('a point of difference', 'a matter on which the parties remain apart'),
 ('a follow-up meeting', 'a further meeting arranged to continue the same business'),
 ('an interpreter’s pause', 'the break in speech while interpretation is given'),
 ('a side conversation', 'an exchange between two participants apart from the main discussion'),
 ('a chair’s summary', 'the chair’s own account of what a meeting concluded'),
 ('a working group', 'a smaller body set up to prepare or resolve a question'),
 ('a time check', 'a statement of how much time remains'),
 ('an informal pause', 'a short unscheduled break used to consult'),
 ('a read-out', 'the account of a meeting given afterwards to others'),
 ('a non-paper', 'a text circulated without attribution or formal status'),
 ('an agreed language', 'wording both sides have accepted'),
 ('a point of clarification', 'a question asked to establish what was meant'),
 ('a meeting objective', 'the single thing a delegation intends to obtain')],

v_a=[('The chair’s own account of conclusions is a chair’s ____________.', 'summary'),
     ('A text circulated without formal status is a ____________.', 'non-paper'),
     ('Wording both sides have accepted is an agreed ____________.', 'language'),
     ('The account of a meeting given afterwards is a ____________.', 'read-out'),
     ('A short unscheduled break used to consult is an informal ____________.', 'pause'),
     ('A point about how business is conducted is a ____________ point.', 'procedural'),
     ('The single thing a delegation intends to obtain is a meeting ____________.', 'objective'),
     ('A matter on which the parties remain apart is a point of ____________.', 'difference')],

v_b=[('A note-taker’s record is the written account kept', 'by a delegation’s own recorder.'),
     ('A working group is a smaller body set up', 'to prepare or resolve a question.'),
     ('A side conversation is an exchange between two participants', 'apart from the main discussion.'),
     ('A substantive point is a point about the matter itself', 'rather than about procedure.'),
     ('An interpreter’s pause is the break in speech', 'while interpretation is given.')],

g_title='Grammar: conditionals in negotiation: unless, provided that, failing that',
g_rule=['unless = except if; it states the circumstance in which the offer disappears.',
        'provided that = only if; it attaches a condition to an acceptance.',
        'failing that = if that does not happen; it introduces the next option.',
        'In drafting, prefer provided that to if, because if is read loosely and provided that is not.'],
g_fig=('LOOSE',
       ['We can accept it if the review clause goes.',
        'If they do not withdraw it, we cannot proceed.',
        'We want a protocol, or something else.',
        'They will move if we move.'],
       'PRECISE',
       ['We can accept it provided that the review clause is dropped.',
        'Unless they withdraw the amendment, we cannot proceed.',
        'We shall seek a protocol; failing that, a declaration.',
        'They will move on transit provided that we move on timing.'],
       'four conditions that can be read two ways',
       'the same four, in the forms a drafter uses'),
g_fig_cap='Provided that is a condition. Unless is an exception. Failing that is the next step.',

g_a=[('We can accept the reference ____________ that the review clause is dropped.', 'provided'),
     ('____________ they withdraw the amendment, we cannot proceed to article 5.', 'Unless'),
     ('We shall seek a protocol; ____________ that, a declaration.', 'failing'),
     ('____________ the text is agreed today, the ministers will not meet in March.', 'Unless'),
     ('They will move on transit ____________ that we move on timing.', 'provided'),
     ('We propose a joint text; ____________ that, two statements.', 'failing'),
     ('____________ you can show me the instruction, I cannot accept the change.', 'Unless'),
     ('We agree, ____________ that the annex is reopened.', 'provided'),
     ('A protocol would suit us; ____________ that, an exchange of letters.', 'failing')],

g_b=[('We accept it ( if / provided that ) the clause is dropped — a formal condition.', ['if', 'provided that'], 1),
     ('( Unless / If not ) they withdraw it, we cannot proceed.', ['Unless', 'If not'], 0),
     ('A protocol; ( failing that / failing which ), a declaration.',
      ['failing that', 'failing which'], 0),
     ('( Unless / Provided that ) the text is agreed, the ministers will not meet.',
      ['Unless', 'Provided that'], 0),
     ('They will move ( provided that / unless ) we move.', ['provided that', 'unless'], 0),
     ('We agree ( provided that the annex stays closed / provided the annex stays closed ) — formal drafting.',
      ['provided that the annex stays closed', 'provided the annex stays closed'], 0)],

d1=dict(
 title='Eleven pages against ourselves',
 fig=(['I asked for their case, not ours.', 'And how good was it?'],
      ['Better than I expected.', 'Then it has done its work already.']),
 cap='Hala Darwish and Ambassador Walid Hourani, two days before the meeting.',
 lines=[('Hourani', 'What have you prepared?'),
        ('Hala', 'Eleven pages setting out the strongest case against our own position.'),
        ('Hourani', 'Against your own position. Not your own position.'),
        ('Hala', 'Ours I know. Theirs is where I am likely to be surprised.'),
        ('Hourani', 'And how good is it?'),
        ('Hala', 'Three arguments I had not considered, and one strong enough to change my opening.'),
        ('Hourani', 'That is four minutes well spent. What is it missing?'),
        ('Hala', 'Everything that has never been published.'),
        ('Hourani', 'Which, in my experience, is where the actual difficulty always lives.'),
        ('Hala', 'So I take the eleven pages and ask Rim what is not in them.'),
        ('Hourani', 'Ask her what they are still angry about. That is a different question from what they argue.'),
        ('Hala', 'And it is the question nobody writes down.')],
 a=[('What did Hala prepare?', 'the strongest case against her own position'),
    ('Why that rather than her own?', 'her own she already knows'),
    ('How many arguments were new?', 'three'),
    ('What is the eleven pages missing?', 'everything that has never been published'),
    ('What question does Hourani suggest?', 'what they are still angry about')],
 b=[('Theirs is where I am likely to be ____________.', 'surprised'),
    ('Four minutes well ____________.', 'spent'),
    ('Where the actual ____________ always lives.', 'difficulty'),
    ('A different question from what they ____________.', 'argue')]),

d2=dict(
 title='A grievance from 2019',
 fig=(['He opened with 2019.', 'Which is in nothing you read.'],
      ['Nothing at all.', 'And it is the whole file.']),
 cap='Hala and Rim Haddad, after the bilateral meeting.',
 lines=[('Rim', 'How did it open?'),
        ('Hala', 'With a meeting in 2019 that he says was handled discourteously.'),
        ('Rim', 'By us?'),
        ('Hala', 'By somebody, four postings ago. Nobody in our building has ever heard of it.'),
        ('Rim', 'And none of your eleven pages mentions it.'),
        ('Hala', 'It could not. It was never written down anywhere by anybody.'),
        ('Rim', 'That is why we ask people rather than documents.'),
        ('Hala', 'I can prepare against every published argument in four minutes.'),
        ('Rim', 'And the unpublished one takes a telephone call to somebody who was there.'),
        ('Hala', 'Which I should have made on Friday.'),
        ('Rim', 'Make it before the next round. Ask what they are still angry about, and listen for a date.'),
        ('Hala', 'And if everybody who was there in 2019 has left the service?')],
 unresolved=True,
 a=[('What did the meeting open with?', 'a grievance about a meeting in 2019'),
    ('Who was responsible?', 'somebody four postings ago'),
    ('Why was it not in the eleven pages?', 'it was never written down'),
    ('How is such a thing found?', 'by telephoning somebody who was there'),
    ('What should Hala listen for?', 'a date')],
 b=[('Nobody in our building has ever ____________ of it.', 'heard'),
    ('It was never written ____________ anywhere.', 'down'),
    ('We ask ____________ rather than documents.', 'people'),
    ('Ask what they are still ____________ about.', 'angry')]),

speak=[('Conditions precisely',
        ['Make nine negotiating sentences with unless, provided that and failing that.',
         'Your partner says what each one commits you to and what it does not.',
         'Rewrite any that could be read two ways.']),
       ('Argue the other side',
        ['Take a position you hold and argue the opposite case for two minutes.',
         'Your partner judges whether you made it as strong as it could be.',
         'Then say which of your own arguments it damaged most.']),
       ('What are they angry about?',
        ['Describe a counterpart organisation you deal with.',
         'Say what it argues and what you suspect it resents.',
         'Decide who you would telephone to find out.'])],

ext_title='You can generate every published argument in four minutes, and the real objection is rarely published',
ext_fig=figs.datatable('WHAT WAS PREPARED AND WHAT WAS SAID',
                       ['Argument', 'In the 11 pages?', 'Made in the room?'],
                       [['cost of implementation', 'yes, ranked 1', 'briefly'],
                        ['precedent for other files', 'yes, ranked 2', 'no'],
                        ['legal basis of article 4', 'yes, ranked 3', 'yes'],
                        ['timing before their election', 'yes, ranked 7', 'no'],
                        ['the 2019 meeting', 'no', 'first, and at length'],
                        ['eight further arguments', 'yes', 'no']]),
ext_fig_cap='Eleven anticipated arguments, two of them used, and the one that mattered was not among them.',
ext=[
 'Preparing the other side’s case is the oldest discipline in negotiation and the one most '
 'often skipped, because it is uncomfortable, time-consuming and produces a document that '
 'argues against your own government, which nobody enjoys drafting on a Friday afternoon.',
 'A system removes the discomfort and the time. Given your position and everything the '
 'other party has published, it will produce eleven pages of well-constructed opposing '
 'argument in four minutes, ranked by how damaging each would be, and some of it will be '
 'better than what they will actually say.',
 'That is genuinely valuable, and it changes what a delegate can do: an opening statement '
 'can be written to answer the strongest objection before it is made, which is worth more '
 'in a ninety-minute meeting than any amount of fluency later.',
 'What such a document cannot contain is anything that has not been written down, and the '
 'decisive obstacle in a bilateral relationship is very often exactly that: a meeting '
 'handled badly, a letter unanswered for eleven months, a minister kept waiting in 2019.',
 'So prepare the published case with a system and the unpublished one with a telephone. Ask '
 'a long-serving local colleague, a predecessor, or the interpreter who has sat in every '
 'meeting for a decade, one question: what are they still annoyed about, and when did it '
 'happen?'],

dp2=('The unwritten obstacle', 'Practitioners commonly report that the principal resistance '
     'in a bilateral file is more often a historical grievance about process than a '
     'disagreement of substance, and that such grievances are seldom recorded in either '
     'side’s documents.',
     'Source: reported negotiating practice, 2025–2026.'),

e_a=[('Why is preparing the other side’s case often skipped?', 'it is uncomfortable and time-consuming'),
     ('What does a system produce?', 'ranked opposing arguments in minutes'),
     ('What can an opening statement then do?', 'answer the strongest objection before it is made'),
     ('What can such a document not contain?', 'anything never written down'),
     ('Who should be asked about the unpublished obstacle?',
      'a long-serving colleague, a predecessor or the interpreter')],
e_b=[('Arguing against your own government is enjoyable.', 'F'),
     ('The generated arguments may be better than those actually made.', 'T'),
     ('Answering an objection in advance is valuable.', 'T'),
     ('Historical grievances are usually documented.', 'F'),
     ('An interpreter may know the file better than the delegate.', 'T'),
     ('The published case is the whole case.', 'F')],

w_model='Purpose: so that the delegation obtains one agreed sentence on transit in ninety '
        'minutes. Scope: the bilateral meeting of 4 February; the multilateral round is '
        'prepared separately. Inputs: the ranked opposing case of 2 February and one '
        'conversation with an officer who attended the 2019 round. Criteria: 6 lines giving '
        'the objective, the opening, the strongest objection and our answer to it, the '
        'condition on which we can move, the fallback, and what we will not do. Done: 6 '
        'lines cleared by the head of delegation by 18:00 on 3 February. Fallback: unless '
        'the other side moves on timing, no movement is offered on transit.',
w_fig=figs.spec_card('SIX LINES FOR NINETY MINUTES',
                     [('Purpose', 'one agreed sentence on transit'),
                      ('Scope', 'the bilateral of 4 February'),
                      ('Inputs', 'the ranked opposing case and 1 conversation about 2019'),
                      ('Criteria', 'objective, opening, objection and answer, condition, fallback, limit'),
                      ('Done', 'cleared by 18:00 on 3 February'),
                      ('Fallback', 'no movement on transit unless they move on timing')]),
w_fig_cap='A meeting plan is six lines because a delegate can hold six lines under pressure.',
w_task='Write a six-line plan for a bilateral meeting.',
w_steps=['Line 1: the one thing the meeting must produce.',
         'Line 2: your opening, in the words you will use.',
         'Line 3: their strongest objection, and your answer in one sentence.',
         'Line 4: the condition on which you can move, using provided that.',
         'Line 5: the fallback, using failing that.',
         'Line 6: what you will not do, using unless.'],
w_bank=['Objective: one agreed sentence on … .',
        'Opening: “The delegation welcomes … and proposes … .”',
        'Their strongest point: … . Our answer: … .',
        'We can accept … provided that … .',
        'Failing that, we propose … . Unless … , we offer nothing on … .'],
w_check=['Does line 1 name one outcome, not three?',
         'Is the opening in quotation marks and speakable?',
         'Does line 4 use provided that rather than if?',
         'Does line 6 state a genuine limit?'],

t_title='Preparing the other side’s case against your own',
t_fig=figs.split('BEFORE A BILATERAL',
                 'Ask the system for this',
                 ['the strongest case against us',
                  'ranked by how damaging each is',
                  'every argument they have published',
                  'the weakest point in our own text'],
                 'Ask a person for this',
                 ['what they are still angry about',
                  'who was humiliated, and when',
                  'which of their officials decides',
                  'what they have asked for twice']),
t_fig_cap='Four minutes for the published case; one telephone call for the one that is not.',
t_body=[
 'Ask for the case against yourself, explicitly and without softening the instruction: the '
 'strongest arguments the other party could make, drawn from what they have published, '
 'ranked by the damage each would do if it were made well, with the weakest point of your '
 'own text identified separately.',
 'Use it where it is strongest, which is in your opening. A delegate who answers the best '
 'objection before it is raised changes the shape of the next eighty minutes, because the '
 'other side must either accept the answer or make a weaker argument than the one they had '
 'prepared.',
 'Then telephone somebody who has been in the relationship longer than you have, and ask a '
 'question no document answers: what are they still annoyed about, and when did it happen? '
 'The answer will not be in any corpus, because nobody writes down the meeting at which '
 'their minister was kept waiting.'],
t_say=[('Ask for the attack: ', 'Give me the strongest case against our position, ranked.'),
       ('Ask for our weakness: ', 'Which part of our own text is hardest to defend?'),
       ('Ask a person: ', 'What are they still annoyed about, and when did it happen?')],
t_bound='A generated opposing case contains only arguments somebody has written down. It '
        'cannot know about a meeting handled badly four postings ago, an unanswered letter '
        'or a personal slight, and those are frequently what is actually blocking a file.',
t_a=[('Give me the strongest case against our ____________.', 'position'),
     ('Which part of our own text is hardest to ____________?', 'defend'),
     ('What are they still ____________ about?', 'annoyed'),
     ('It contains only arguments somebody has written ____________.', 'down'),
     ('A meeting handled badly four ____________ ago.', 'postings'),
     ('Frequently what is actually ____________ a file.', 'blocking')],
t_b_rubric='Say whether each would appear in a generated opposing case.',
t_b=[('A published legal objection to article 4.', 'yes: it is documented and will be ranked'),
     ('Resentment about a 2019 meeting.', 'no: nobody writes that down'),
     ('A cost argument from their finance ministry.', 'yes, if it has been published'),
     ('A letter of theirs unanswered for a year.', 'no, unless somebody at your post remembers it')],

case=dict(
 title='The Decision Room · Ninety minutes and a grievance from 2019',
 brief=[
  'A delegation prepares for a bilateral meeting with eleven pages of ranked opposing '
  'argument, produced in four minutes and genuinely good: three of the arguments had not '
  'occurred to anybody on the delegation, and one is strong enough to change the opening '
  'statement.',
  'In the room the other side opens, at length and with evident feeling, on the conduct of '
  'a meeting in 2019, at which their deputy minister was, in their account, kept waiting '
  'for fifty minutes and then received by an official two ranks junior to the one expected.',
  'Forty of the ninety minutes go on this. The delegation, which has prepared for eleven '
  'published arguments and not for a grievance, handles it politely and badly, and the '
  'meeting ends with the atmosphere good and nothing agreed.'],
 exhibit=figs.datatable('NINETY MINUTES, AS SPENT',
                        ['Item', 'Planned', 'Actual'],
                        [['opening statements', '15 min', '15 min'],
                         ['the 2019 grievance', '0 min', '40 min'],
                         ['transit', '40 min', '20 min'],
                         ['timing', '20 min', '8 min'],
                         ['agreed sentence', '1', '0'],
                         ['atmosphere', '—', 'reported as good']]),
 exhibit_cap='Forty minutes on a subject that appeared in no preparation, and the objective lost.',
 exhibit_note='The preparation was excellent for the negotiation that was expected. The '
              'meeting that occurred was about something else, and no published source '
              'could have said so.',
 voices=[('Hala Darwish', 'delegate to the Regional Council',
          'Three arguments I had never considered, and I answered the best of them in my opening.'),
         ('Rim Haddad', 'consular assistant',
          'And lost forty minutes to a date you could have learned in one telephone call.'),
         ('Ambassador Walid Hourani', 'head of mission',
          'Both are true. The lesson is not to stop preparing; it is that two kinds of preparation are needed.')],
 steps=[('Find it', 'What took forty of the ninety minutes?'),
        ('Compare it', 'What was prepared and what was raised?'),
        ('Infer it', 'Why could the preparation not have contained it?'),
        ('Weigh it', 'One telephone call against an objective lost.'),
        ('Decide', 'What does preparation for a bilateral now include?')],
 analysis=[('Find it. What took forty minutes?', 'a grievance about a meeting in 2019'),
           ('Compare it. What had been prepared?', 'eleven published arguments, ranked'),
           ('Infer it. Why was it absent?', 'it had never been written down anywhere'),
           ('Weigh it. What would have found it?', 'one telephone call to somebody who was there'),
           ('Decide. What does preparation include now?', 'the published case and the unpublished grievance')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what is prepared from published sources.',
                 'Say what is prepared by asking people, and whom.',
                 'Say what is done with a grievance when it is raised.',
                 'Say what the delegation records afterwards.'],
 bank=['The published case against us is prepared and ranked before every bilateral.',
       'One officer who has known the file longest is asked what the other side still resents.',
       'A grievance raised in a meeting is acknowledged once, dated, and taken away in writing.',
       'Every grievance heard is recorded in the file, with its date, so that it is never new again.'],
 outcome='At the next round the delegation opens by acknowledging the 2019 meeting in two '
         'sentences, without conceding anything and without arguing about the facts, and the '
         'subject takes four minutes instead of forty. The grievance goes into the file with '
         'its date. The eleven pages are produced again, because they changed the opening '
         'statement and would do so again.',
 outcome_q=[('How long did the grievance take at the next round?', 'about four minutes'),
            ('How was it handled?', 'acknowledged in two sentences, without conceding'),
            ('What went into the file?', 'the grievance, with its date'),
            ('Was the eleven-page preparation repeated?', 'yes'),
            ('Why?', 'it changed the opening statement')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Get me ready for the bilateral',
 task=['A delegate asked for preparation two days before a ninety-minute bilateral meeting.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Get me ready for the bilateral.',
        'Cover their likely arguments.',
        'Give me some strong answers.',
        'Nothing too long.',
        'Make sure I am not surprised.',
        'By tomorrow would be good.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says what the meeting must produce.',
 asked=['Their likely arguments', 'Strong answers', 'No surprises'],
 back=['11 pages, published arguments only', '0 questions asked of any person', '1 surprise, lasting 40 minutes'],
 gap='Nobody said the objective, the sources beyond publications, or how long the material may be.',
 back_cap='Eleven excellent pages about a meeting that turned out to be about something else.',
 back_note='Make sure I am not surprised cannot be satisfied from documents alone, because '
           'the surprises in a bilateral relationship are precisely what nobody has published.',
 diagnosis=[('“their likely arguments”', 'hidden assumption'),
            ('“not surprised”', 'hidden assumption'),
            ('“ready for the bilateral”', 'undefined done'),
            ('“some strong answers”', 'undefined done'),
            ('“nothing too long”', 'unbounded quantity'),
            ('“by tomorrow”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that both kinds of preparation are produced.',
 scaffold=['why the meeting is being held and what it must produce',
           'which meeting, and what is prepared separately',
           'which sources are used, including people',
           'what the material must contain and how it is ranked',
           'how long it is and when it is needed',
           'what is done about anything that cannot be found in documents'],
 bank=['Purpose: so that the delegation obtains … in … minutes',
       'Scope: the bilateral of … ; the multilateral round is prepared separately',
       'Inputs: everything the other party has published, and … conversations with officers who …',
       'Criteria: the strongest case against us, ranked by damage; our weakest point identified',
       'Done: … pages by … , with a … -line meeting plan',
       'Fallback: where a grievance is suspected but undocumented, it is raised with … before the meeting'],
 check=['Is the objective of the meeting stated?',
        'Are people named as a source, not only documents?',
        'Is the ranking criterion given?',
        'Is there a six-line plan as well as the long material?'],
 model=['so that the delegation obtains one agreed sentence on transit in 90 minutes',
        'the bilateral of 4 February; the multilateral round is prepared separately',
        'everything the other party has published, and 2 conversations with officers who have known the file longest',
        'the strongest case against us, ranked by damage, with our own weakest point identified',
        '11 pages by 18:00 on 2 February, with a 6-line meeting plan',
        'where a grievance is suspected but undocumented, it is raised with the head of delegation beforehand'],
 cost='40 of 90 minutes went to a subject no document contained. 1 telephone call of 10 '
      'minutes would have put it in the plan.'),

feet=dict(
 title='On Your Feet · They open with a grievance you have never heard of',
 setting=[
  'Ninety seconds into a bilateral meeting, the head of the other delegation sets aside the '
  'agenda and speaks, with evident feeling, about a meeting in 2019 at which his deputy '
  'minister was kept waiting and then received at a lower level than expected.',
  'You have never heard of this. You do not know whether it is true, whose fault it was, or '
  'whether anybody at your Mission could find out. There are eight people in the room and '
  'both delegations are taking notes.'],
 ladder=[('In 2019 we were treated badly', 'acknowledge without conceding'),
         ('Does your Mission even know?', 'the admission you cannot avoid'),
         ('So nothing has changed', 'the turn that converts history into today')],
 cap='Three turns, and the agenda has not yet been reached.',
 turns=[('Turn 1 · Head of delegation', 'Before we begin: in 2019 my deputy minister was kept waiting for fifty minutes.'),
        ('Turn 2 · Head of delegation', 'Does your Mission even know that this happened?'),
        ('Turn 3 · Head of delegation', 'So nothing has changed, and we are expected to move on transit.')],
 holds=['Thank you for raising it directly rather than letting it sit under the file.',
        'I did not know, and I am not going to pretend that I did.',
        'I will not dispute an account I have not read, and I will find out what our record says.',
        'If it happened as you describe, it should not have, and I will say so when I know.',
        'May I write to you within a week, once I have looked at our own record of that meeting?',
        'And may I suggest that we use the time we have left on transit, where I can be useful today?'],
 redline='You must not dispute the facts of an incident you know nothing about, you must '
         'not apologise on behalf of your government for something you have not '
         'established, and you must not treat the grievance as a tactic, even if it is one. '
         'Do not let the whole meeting go to it.',
 score=['Thanked him for raising it rather than treating it as an obstruction.',
        'Admitted ignorance plainly and immediately.',
        'Neither disputed nor conceded the account.',
        'Committed to checking the record, with a time limit.',
        'Reclaimed the remaining time for the agenda, politely and explicitly.'],
 a=[('What do you do first?', 'thank him for raising it directly'),
    ('What do you admit?', 'that you did not know'),
    ('What do you neither do?', 'dispute the account nor concede it'),
    ('What do you commit to?', 'checking your own record and writing within a week'),
    ('What must you not offer?', 'an apology for something you have not established'),
    ('What do you ask for at the end?', 'that the remaining time be used on transit')]),

rev_fig=figs.split('PREPARING A BILATERAL',
                   'What documents give you',
                   ['every argument they have published',
                    'the ranking by damage',
                    'the weakest point in your own text',
                    'their stated position on each article'],
                   'What only people give you',
                   ['what they still resent, and from when',
                    'who was humiliated, and by whom',
                    'which official actually decides',
                    'what they have asked for twice']),
rev_fig_cap='Four minutes buys the left column. Ten minutes on a telephone buys the right.',
rev=dict(
 read=[('How long is a bilateral meeting?',
        ['about ninety minutes', 'about ten minutes', 'two days', 'four hours'], 0),
       ('How many of the generated arguments were new to Hala?',
        ['three', 'eleven', 'none', 'seven'], 0),
       ('What did the other side open with?',
        ['a grievance from 2019', 'the legal basis', 'the cost', 'the timing'], 0),
       ('Where is an unpublished grievance found?',
        ['by asking a person', 'in the annexes', 'in the press', 'in the draft text'], 0)],
 listen_text='Ask for the strongest case against your own position, ranked by damage, with '
             'your own weakest point identified. Then telephone somebody who has known the '
             'file longest and ask what they are still annoyed about, and when.',
 listen=[('Ask for the strongest case against your own ____________.', 'position'),
         ('Ranked by ____________.', 'damage'),
         ('With your own weakest point ____________.', 'identified'),
         ('Ask what they are still ____________ about.', 'annoyed')],
 speak=['Make nine negotiating conditions with unless, provided that and failing that.',
        'Then argue the case against your own position for two minutes, as strongly as you can.'],
 write='Write a six-line plan for a bilateral meeting.',
 vocab=[('A text circulated without formal status is a ____________.', 'non-paper'),
        ('Wording both sides have accepted is an agreed ____________.', 'language'),
        ('The account given afterwards is a ____________.', 'read-out'),
        ('The single thing a delegation intends to obtain is a meeting ____________.', 'objective')],
 gram=[('We accept it ____________ that the clause is dropped.', 'provided'),
       ('____________ they withdraw it, we cannot proceed.', 'Unless'),
       ('A protocol; ____________ that, a declaration.', 'failing'),
       ('They will move ____________ that we move.', 'provided')]),

found=['Ask for the strongest case against your own position before your next meeting.',
       'Telephone one person who has known a file longer than you have, and ask what rankles.',
       'Record every grievance you hear, with its date, so that it is never new again.',
       'Write your next meeting plan in six lines, using provided that and failing that.'],
end_line='Generate the published case in four minutes. Find the unpublished one on the telephone.',
end_next='Next: The Margins of a Conference')
