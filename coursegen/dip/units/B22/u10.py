# -*- coding: utf-8 -*-
import figs

U = dict(
num=10,
title='The End of a Tour',
gram='restraint: parallelism, understatement and the short sentence',
ai='what a machine cannot do for a representative',
strap='CEFR B2 · Grammar: restraint: parallelism, understatement and the short sentence · '
      'AI: what a machine cannot do for a representative',
cando=['write with restraint: parallel structure, understatement and short sentences',
       'write an end of tour report that claims only what is yours',
       'name the four things a system cannot do for a representative',
       'say where your own judgement is the whole of the work',
       'write a six-line tasking for an end of tour report'],

hero=('IT CAN DRAFT, COMPARE, PREDICT AND SUMMARISE. IT CANNOT BE SENT',
      ['Four years of a tour, and four things nobody could do for him.',
       'Be present, be trusted, be answerable, and decide.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A last Friday in Calmar: a valedictory despatch of nine hundred words, and three farewell calls.',

warm=['What can only a person do in your work?',
      'Why is an understatement sometimes stronger than a claim?',
      'What would you want said about your work, in one sentence?'],

read=[
 'At the end of a tour an officer writes a valedictory despatch, which is the one document in a '
 'career in which he is invited to say what he thinks about a country, a relationship and his '
 'own four years.',
 'Ambassador Walid Hourani writes nine hundred words. A system would write them better in the '
 'sense of smoother, and he does not ask it to, because the one thing the despatch must contain '
 'is a judgement that is his.',
 'He has used systems throughout his tour and used them well: thirty predicted interview '
 'questions, a comparison of two texts in forty seconds, a ranked shortlist from a delegation '
 'list, a first hour in a crisis, twelve ways of saying that he did not know.',
 'In every one of those cases the gain was real and the limit was the same. The system could '
 'handle what had been written down, and the part that decided the outcome was always something '
 'nobody had written down and somebody had to be present to know.',
 'So the despatch sets out four things no system can do for a representative: it cannot be '
 'present in a room, it cannot be trusted by a person, it cannot be answerable for a decision, '
 'and it cannot decide what a government is prepared to lose.'],

dp1=('Representative function', 'Diplomatic practice commonly describes representation as a '
     'function exercised by a person who is accredited, present and accountable, and treats '
     'the capacity to bind, to be trusted and to answer for a decision as attaching to the '
     'officer rather than to any instrument used.',
     'Source: general diplomatic practice literature, 2025–2026.'),

c_a=[('What is a valedictory despatch?', 'the account an officer writes at the end of a tour'),
     ('How long was Hourani’s?', 'nine hundred words'),
     ('Why did he write it himself?', 'the judgement in it must be his'),
     ('What had he used systems for?', 'questions, comparisons, shortlists, crises and formulations'),
     ('What was the limit in every case?', 'what had not been written down'),
     ('What four things can no system do?',
      'be present, be trusted, be answerable, decide what to lose')],

c_b=[('A valedictory despatch is a routine report.', 'F'),
     ('He asked a system to write the despatch.', 'F'),
     ('The gains from systems were real.', 'T'),
     ('The limit differed in each case.', 'F'),
     ('A system can be accountable for a decision.', 'F'),
     ('Presence in a room matters.', 'T')],

c_c=[('The work was ____________. The results were modest. The relationship holds.', 'slow'),
     ('He was not unhelpful. He was simply not ____________.', 'persuaded'),
     ('We asked, we waited, and we ____________ again.', 'asked'),
     ('It was not a success. It was not a ____________ either.', 'failure'),
     ('Four files moved. Two did not. One ____________.', 'closed'),
     ('I would not call it easy. I would call it ____________.', 'done')],

c_d=[('Parallelism means ( matching grammatical shapes / repeating words ).', ['matching grammatical shapes', 'repeating words'], 0),
     ('Not unhelpful is ( an understatement / an exaggeration ).',
      ['an understatement', 'an exaggeration'], 0),
     ('A short sentence after long ones ( carries weight / sounds abrupt ).',
      ['carries weight', 'sounds abrupt'], 0),
     ('A representative can be ( answerable / replaced by a draft ).',
      ['answerable', 'replaced by a draft'], 0),
     ('The limit in every chapter of this book was ( the unwritten / the arithmetic ).',
      ['the unwritten', 'the arithmetic'], 0)],

c_e=('Parallelism, understatement or short sentence? Put each in the right column.',
     [('We asked, we waited, and we asked again', 'parallelism'),
      ('He was not unhelpful', 'understatement'),
      ('The relationship holds', 'short sentence'),
      ('Four files moved. Two did not', 'parallelism'),
      ('It was not a failure either', 'understatement'),
      ('One closed', 'short sentence')],
     ['parallelism', 'understatement', 'short sentence']),

v_fig_title='THE LAST FRIDAY',
v_fig=[('doc', 'a valedictory despatch'), ('people', 'a farewell call'), ('key', 'a trust earned'),
       ('speech', 'a word given'), ('chart', 'an end of tour report'), ('clock', 'a last entry in a log')],
v_fig_cap='Six words for the end of four years, and for the only part of it nobody else could have done.',

vocab=[
 ('an end of tour report', 'the account an officer writes on leaving a post'),
 ('a farewell call', 'a visit paid to a counterpart before departure'),
 ('a valedictory despatch', 'an officer’s final reflective report from a post'),
 ('a letter of thanks', 'a letter acknowledging help received'),
 ('a final courtesy', 'a last observance paid before leaving'),
 ('a representative capacity', 'the standing in which an officer acts for a state'),
 ('a personal credit', 'recognition claimed for oneself'),
 ('a shared achievement', 'something accomplished by more than one person'),
 ('a judgement of one’s own', 'an assessment an officer takes responsibility for'),
 ('a presence in a room', 'the fact of being physically there'),
 ('a trust earned', 'confidence given on the strength of past conduct'),
 ('a word given', 'an undertaking made personally'),
 ('a reputation of a post', 'the standing a Mission holds locally'),
 ('a successor’s inheritance', 'what an officer leaves to the next holder of the post'),
 ('a last entry in a log', 'the final record made before departure'),
 ('an accountability for a decision', 'the obligation to answer for a choice made'),
 ('a restraint in writing', 'the deliberate avoidance of overstatement'),
 ('an understatement', 'a statement deliberately weaker than the facts allow'),
 ('a short sentence', 'a sentence of few words, used for emphasis'),
 ('a thing only a person can do', 'an act requiring a human being')],

v_a=[('An officer’s final reflective report is a ____________ despatch.', 'valedictory'),
     ('The standing in which an officer acts for a state is a ____________ capacity.', 'representative'),
     ('Confidence given on the strength of past conduct is a trust ____________.', 'earned'),
     ('The obligation to answer for a choice is an ____________ for a decision.', 'accountability'),
     ('A statement deliberately weaker than the facts is an ____________.', 'understatement'),
     ('What an officer leaves to the next holder is a successor’s ____________.', 'inheritance'),
     ('A visit paid to a counterpart before departure is a ____________ call.', 'farewell'),
     ('The deliberate avoidance of overstatement is a ____________ in writing.', 'restraint')],

v_b=[('An end of tour report is the account', 'an officer writes on leaving a post.'),
     ('A judgement of one’s own is an assessment', 'an officer takes responsibility for.'),
     ('A reputation of a post is the standing', 'a Mission holds locally.'),
     ('A word given is an undertaking', 'made personally.'),
     ('A thing only a person can do is an act', 'requiring a human being.')],

g_title='Grammar: restraint: parallelism, understatement and the short sentence',
g_rule=['Parallelism matches grammatical shapes: we asked, we waited, and we asked again.',
        'Understatement says less than the facts allow and is heard as more: he was not '
        'unhelpful; the results were modest.',
        'A short sentence after two long ones carries the weight of both: the relationship holds.',
        'Restraint is not modesty. It is the register in which a reader believes you, and it is '
        'the hardest register to generate, because it depends on leaving things out.'],
g_fig=('OVERSTATED',
       ['We worked tirelessly and achieved a great deal against enormous odds.',
        'He was extremely obstructive throughout and never helped us at all.',
        'This has been a transformative and historic four years for the relationship.',
        'I am immensely proud of everything my outstanding team has accomplished.'],
       'RESTRAINED',
       ['We asked, we waited, and we asked again. Four files moved. Two did not.',
        'He was not unhelpful. He was simply not persuaded.',
        'The relationship is in better order than I found it. It is not yet settled.',
        'The work was done by eleven people. Three of them should be promoted.'],
       'four sentences a reader discounts on sight',
       'the same four, each of which a reader will believe'),
g_fig_cap='Understatement is a claim the reader makes on your behalf, and he will make it larger than you would.',

g_a=[('The work was ____________. The results were modest. The relationship holds.', 'slow'),
     ('He was not unhelpful. He was simply not ____________.', 'persuaded'),
     ('We asked, we waited, and we ____________ again.', 'asked'),
     ('It was not a success. It was not a ____________ either.', 'failure'),
     ('Four files moved. Two did not. One ____________.', 'closed'),
     ('I would not call it easy. I would call it ____________.', 'done'),
     ('The relationship is in better ____________ than I found it.', 'order'),
     ('The work was done by eleven people. Three should be ____________.', 'promoted'),
     ('He never said yes. He never quite said ____________ either.', 'no')],

g_b=[('( He was extremely obstructive / He was not unhelpful ) — restraint.', ['He was extremely obstructive', 'He was not unhelpful'], 1),
     ('( Four files moved. Two did not / We achieved a great deal ) — parallel and countable.',
      ['Four files moved. Two did not', 'We achieved a great deal'], 0),
     ('( The relationship holds / This has been a transformative four years ) — the short sentence.',
      ['The relationship holds', 'This has been a transformative four years'], 0),
     ('( The work was done by eleven people / I am immensely proud of my outstanding team ) — credit where it sits.',
      ['The work was done by eleven people', 'I am immensely proud of my outstanding team'], 0),
     ('( We asked, we waited, and we asked again / We made repeated and persistent efforts ) — parallelism.',
      ['We asked, we waited, and we asked again', 'We made repeated and persistent efforts'], 0),
     ('( It is not yet settled / Everything is now resolved ) — what you can defend.',
      ['It is not yet settled', 'Everything is now resolved'], 0)],

d1=dict(
 title='Nine hundred words of his own',
 fig=(['You are not going to have it drafted?', 'Not this one.'],
      ['It would be smoother.', 'It would not be mine.']),
 cap='Ambassador Walid Hourani and Dr Suhair Kanaan, on the last Friday.',
 lines=[('Suhair', 'Is the despatch finished?'),
        ('Hourani', 'Nine hundred words, written badly, four times, by me.'),
        ('Suhair', 'It would be smoother if you had it drafted.'),
        ('Hourani', 'It would be smoother and it would not be mine, and the only thing in it that matters is whose it is.'),
        ('Suhair', 'You have used systems all tour. You taught half this Mission to use them.'),
        ('Hourani', 'And I would do all of it again. Thirty questions before an interview. Twenty-three differences in a text in forty seconds.'),
        ('Suhair', 'And the limit was the same every time.'),
        ('Hourani', 'Every single time. Whatever had been written down, it handled. Whatever had not, it invented or ignored.'),
        ('Suhair', 'And the despatch?'),
        ('Hourani', 'The despatch is a judgement about a country, and a judgement has to belong to somebody who can be wrong.'),
        ('Suhair', 'That is the sentence you should put in it.'),
        ('Hourani', 'It is in it. It is the only sentence I have not rewritten.')],
 a=[('How long is the despatch?', 'nine hundred words'),
    ('Why not have it drafted?', 'it would not be his'),
    ('What does he say about using systems?', 'he would do all of it again'),
    ('What was the limit every time?', 'whatever had not been written down'),
    ('Why must a judgement belong to somebody?', 'because it has to be able to be wrong')],
 b=[('Written badly, four ____________, by me.', 'times'),
    ('The only thing in it that matters is whose it ____________.', 'is'),
    ('It invented or ____________.', 'ignored'),
    ('The only sentence I have not ____________.', 'rewritten')]),

d2=dict(
 title='The four things',
 fig=(['Four things it cannot do.', 'Say them in order.'],
      ['Be there. Be trusted.', 'Answer for it. And choose.']),
 cap='Hourani and Hala Darwish, after the last farewell call.',
 lines=[('Hala', 'You have four things in the despatch. Tell me them without reading.'),
        ('Hourani', 'It cannot be present in a room. That is the first and it is not a small one.'),
        ('Hala', 'Because a counterpart tells you things because you are sitting there.'),
        ('Hourani', 'Because he tells you things he would not write, and because you can see his face when he says them.'),
        ('Hala', 'The second?'),
        ('Hourani', 'It cannot be trusted. A person trusts a person over years, and the trust is not transferable.'),
        ('Hala', 'And the third is accountability.'),
        ('Hourani', 'It cannot be answerable. If a position is wrong, somebody is answerable for it, and it will never be the instrument.'),
        ('Hala', 'And the fourth?'),
        ('Hourani', 'It cannot decide what a government is prepared to lose. That is not analysis. That is authority.'),
        ('Hala', 'My predecessor would have added a fifth: it cannot keep a confidence.'),
        ('Hourani', 'Add it in your own despatch, in four years, and see whether you still believe it.')],
 unresolved=True,
 a=[('What is the first thing?', 'it cannot be present in a room'),
    ('Why does presence matter?', 'people say things they would not write'),
    ('What is not transferable?', 'trust'),
    ('Who is answerable for a wrong position?', 'a person, never the instrument'),
    ('What is the fourth?', 'deciding what a government is prepared to lose')],
 b=[('He tells you things he would not ____________.', 'write'),
    ('The trust is not ____________.', 'transferable'),
    ('It will never be the ____________.', 'instrument'),
    ('That is not analysis. That is ____________.', 'authority')]),

speak=[('Say less',
        ['Take nine overstated sentences about your own work and restrain each one.',
         'Your partner says which version he believes.',
         'Use one understatement and one short sentence in each pair.']),
       ('Four things',
        ['Name the four things in your own work that only a person can do.',
         'Give one example of each from the last month.',
         'Your partner challenges one and you defend it.']),
       ('Your own despatch',
        ['Say in two minutes what you would write at the end of your own tour.',
         'Claim nothing you cannot defend and name three people.',
         'End on a short sentence.'])],

ext_title='Six books of gains, and one limit that did not move',
ext_fig=figs.datatable('WHAT WAS GAINED, AND WHERE IT STOPPED',
                       ['The task', 'The gain', 'The limit'],
                       [['30 interview questions', '22 of them asked', 'a remark at a reception'],
                        ['23 differences in a text', 'found in 40 seconds', 'which three mattered'],
                        ['5 names from 211', 'six minutes', 'who answers his own post'],
                        ['22 actions in a crisis', 'forty seconds', 'where the only door is'],
                        ['12 ways to say I do not know', 'nine usable', 'three quiet assertions'],
                        ['14 pages of handover', 'two days saved', 'six questions unanswered']]),
ext_fig_cap='Six real gains, and six limits that are all the same limit wearing different clothes.',
ext=[
 'This course has made one argument, in sixty units, and it is worth stating plainly at the '
 'end. A system is very good at everything that has been written down, and the part of '
 'diplomatic work that decides outcomes is almost never written down.',
 'That is not a complaint about the technology and it is not a reason to avoid it. The gains '
 'recorded in these books are real: forty seconds for a comparison that took an evening, thirty '
 'predicted questions, a first hour you cannot forget, a list of differences nobody could '
 'produce by hand.',
 'Every one of those saves hours, and the hours matter, because they are the hours in which an '
 'officer does the part nobody can do for him: sitting in a room, telephoning somebody who was '
 'there in 2019, asking a local colleague what the other side still resents.',
 'And there are four things that will not be delegated, however good the instruments become. A '
 'representative is present, which is why he is told things. He is trusted, which takes years '
 'and cannot be transferred. He is answerable, which is why his judgement is worth having. And '
 'he decides what his government is prepared to lose, which is authority and not analysis.',
 'Use everything. Check every name, every figure and every claim about what once happened. '
 'Write your own judgement in your own words, with restraint, and sign it. That is the whole of '
 'it, and it has not changed.'],

dp2=('Accountability', 'Public-service practice commonly provides that responsibility for a '
     'decision rests with the official who takes it, and that the use of any analytical aid '
     'neither transfers nor diminishes that responsibility.',
     'Source: general public administration guidance, 2025–2026.'),

e_a=[('What is the course’s single argument?', 'systems handle the written; outcomes turn on the unwritten'),
     ('Are the gains real?', 'yes, and they save hours'),
     ('What are the hours for?', 'the part nobody can do for you'),
     ('What are the four things that cannot be delegated?',
      'presence, trust, accountability and deciding what to lose'),
     ('What must be verified?', 'anything touching a person, a number or a past')],
e_b=[('The course argues against using systems.', 'F'),
     ('Forty seconds for a comparison is a real gain.', 'T'),
     ('Trust can be transferred to an instrument.', 'F'),
     ('Responsibility stays with the official who decides.', 'T'),
     ('Deciding what to lose is analysis.', 'F'),
     ('Restraint makes a judgement more credible.', 'T')],

w_model='Purpose: so that my successor and the capital know what I judge about this '
        'relationship and on what evidence. Scope: the four years from June to June; the '
        'commercial section’s own report is submitted separately. Inputs: the Mission’s files, '
        'the record of the twelve principal files, and my own judgement, which is not drawn from '
        'any other source. Criteria: 900 words; every claim of achievement attributed to the '
        'people who did the work and named; no adjective that the files do not support; at least '
        'one judgement that may turn out to be wrong, stated as mine. Done: the despatch cleared '
        'by nobody and signed by me, on the last Friday. Fallback: where I am uncertain, the '
        'despatch says that I am uncertain, and says what would settle it.',
w_fig=figs.spec_card('SIX LINES FOR AN END OF TOUR',
                     [('Purpose', 'what I judge, and on what evidence'),
                      ('Scope', 'the four years; commercial reports separately'),
                      ('Inputs', 'the files, the twelve principal files, my own judgement'),
                      ('Criteria', '900 words; credit named; no unsupported adjective'),
                      ('Done', 'signed by me on the last Friday'),
                      ('Fallback', 'uncertainty stated, with what would settle it')]),
w_fig_cap='The only tasking in this course whose fourth line requires a judgement that might be wrong.',
w_task='Write a six-line tasking for an end of tour report.',
w_steps=['Line 1: what the report must make known, and to whom.',
         'Line 2: which period, and what is reported separately.',
         'Line 3: the files, and your own judgement as a named input.',
         'Line 4: the length, the attribution of credit, the adjective rule and the judgement.',
         'Line 5: who clears it and who signs it.',
         'Line 6: what is done where you are uncertain.'],
w_bank=['Purpose: so that … know what I judge about … and on what evidence',
        'Scope: the … years from … ; … is submitted separately',
        'Inputs: the Mission’s files, the record of the … principal files, and my own judgement',
        'Criteria: … words; credit attributed to the people who did the work and named; no adjective the files do not support; at least one judgement that may be wrong',
        'Done: signed by me on … ',
        'Fallback: where I am uncertain, the despatch says so, and says what would settle it'],
w_check=['Is your own judgement named as an input?',
         'Is credit attributed to named people?',
         'Is every adjective supported by the files?',
         'Is there a judgement that may be wrong?'],

t_title='What a machine cannot do for a representative',
t_fig=figs.split('AFTER SIXTY UNITS',
                 'Delegate freely',
                 ['comparing two texts word by word',
                  'predicting the questions you will face',
                  'ranking a published list',
                  'the order of a first hour'],
                 'Never delegate',
                 ['being in the room',
                  'being trusted by a person',
                  'answering for a decision',
                  'choosing what to lose']),
t_fig_cap='The left column is work. The right column is why there is a person at a post at all.',
t_body=[
 'Delegate the documented without hesitation, and ask for more of it than you think you need: '
 'the comparison, the shortlist, the predicted questions, the ordered first hour, the ten '
 'formulations, the draft of the record from your own notes.',
 'Verify everything that touches a person, a number or a past. A name, a figure, a date, a '
 'claim about what an institution once did: each of those is where a fluent draft will quietly '
 'supply what is usual in place of what is true, and each of them is checkable in minutes.',
 'Then do the four things no machine can do for a representative. Be in the room, because '
 'people say things they will not write. Be trusted, which takes years. Be answerable, because a '
 'judgement nobody owns is worth nothing. And decide what your government is prepared to lose, '
 'which is the only part of this work that was ever yours alone.'],
t_say=[('Delegate it: ', 'Compare these, rank those, predict that, order this hour.'),
       ('Verify it: ', 'Which file, which register entry, which source, which date?'),
       ('Keep it: ', 'This is my judgement, and I am the one who may be wrong.')],
t_bound='A system is not present, not trusted, not answerable and not authorised. It cannot '
        'sit in a room and be told something, it cannot be believed on the strength of four '
        'years, it cannot answer for a position, and it cannot decide what a state will give up.',
t_a=[('Compare these, rank those, ____________ that.', 'predict'),
     ('Which file, which register ____________?', 'entry'),
     ('This is my judgement, and I am the one who may be ____________.', 'wrong'),
     ('It cannot sit in a room and be ____________ something.', 'told'),
     ('It cannot be believed on the strength of four ____________.', 'years'),
     ('It cannot decide what a state will give ____________.', 'up')],
t_b_rubric='Say whether each may be delegated or never.',
t_b=[('Finding every difference between two drafts.', 'delegate: it is textual'),
     ('Deciding which difference to fight.', 'never: it needs authority'),
     ('Predicting the questions an interviewer will ask.', 'delegate: the record is published'),
     ('Being the person a counterpart confides in.', 'never: that is presence and trust')],

case=dict(
 title='The Decision Room · The one document he would not have drafted',
 brief=[
  'An Ambassador at the end of a four-year tour writes a valedictory despatch of nine hundred '
  'words. He has used systems throughout his posting, taught his Mission to use them, and '
  'recorded the gains honestly: predicted questions, text comparisons, ranked shortlists, '
  'ordered first hours.',
  'He writes the despatch himself, badly, four times. A drafted version would be smoother and '
  'better organised, and he does not ask for one, on the ground that the only thing of value in '
  'the document is whose judgement it is.',
  'The despatch names four things no system can do for a representative: be present in a room, '
  'be trusted by a person, be answerable for a decision, and decide what a government is '
  'prepared to lose. His deputy wants to add a fifth, and he tells her to decide that herself in '
  'four years.'],
 exhibit=figs.datatable('THE DESPATCH, PARAGRAPH BY PARAGRAPH',
                        ['Paragraph', 'Content', 'Whose?'],
                        [['1–2', 'the state of the relationship', 'his judgement'],
                         ['3', 'four files that moved, two that did not', 'the files'],
                         ['4', 'credit to eleven people, by name', 'the record'],
                         ['5', 'what he got wrong in year two', 'his judgement'],
                         ['6–7', 'the four things only a person does', 'his judgement'],
                         ['8', 'what he is uncertain about, and why', 'his judgement']]),
 exhibit_cap='Five paragraphs of judgement, two of record, and one paragraph admitting a mistake.',
 exhibit_note='Paragraph five is the one his successor will read twice, and the one no draft '
              'would have contained, because nothing in the files says that a judgement made in '
              'year two was wrong.',
 voices=[('Ambassador Walid Hourani', 'head of mission',
          'I used every instrument I was given, and I would use them again. This paragraph is mine.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'And the limit was identical every time: whatever nobody had written down.'),
         ('Hala Darwish', 'delegate to the Regional Council',
          'There may be a fifth thing. I have four years to find out whether I believe it.')],
 steps=[('Find it', 'What did he write, and how?'),
        ('Compare it', 'A smoother draft against a judgement that is his.'),
        ('Infer it', 'Why must a judgement belong to somebody?'),
        ('Weigh it', 'Every gain of this course against the four things that remain.'),
        ('Decide', 'What is delegated and what is never delegated?')],
 analysis=[('Find it. What did he write?', 'nine hundred words, himself, four times'),
           ('Compare it. Smoother against his?', 'the value of the document is whose it is'),
           ('Infer it. Why ownership?', 'a judgement must be able to be wrong'),
           ('Weigh it. What does the course record?', 'real gains, and one limit in every case'),
           ('Decide. What stays?', 'presence, trust, accountability and the choice of what to lose')],
 decision='Decide your own rule, in four lines.',
 decision_steps=['Say what you will delegate without hesitation.',
                 'Say what you will always verify.',
                 'Say what you will never delegate.',
                 'Say what you will sign.'],
 bank=['Comparisons, predictions, rankings, orderings and first drafts of a record are delegated without hesitation.',
       'Every name, number, date and claim about the past is verified against a file before it is used.',
       'Presence, trust, accountability and the choice of what to concede are never delegated.',
       'What I sign is my own judgement, in my own words, including what I may have got wrong.'],
 outcome='The despatch goes on the last Friday, nine hundred words, signed and cleared by '
         'nobody. The capital circulates paragraph five to three other posts. Four years later '
         'his deputy writes her own valedictory despatch and adds a fifth thing: a system cannot '
         'be asked to keep a confidence, because it was never in a position to be given one. She '
         'writes it herself, badly, three times.',
 outcome_q=[('When did the despatch go?', 'on the last Friday'),
            ('Who cleared it?', 'nobody; he signed it'),
            ('Which paragraph was circulated?', 'paragraph five'),
            ('What fifth thing did his deputy add?', 'that a system cannot be asked to keep a confidence'),
            ('How did she write it?', 'herself, badly, three times')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Draft my valedictory despatch',
 task=['An Ambassador asked for a draft of his final despatch after four years at post.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Draft my valedictory despatch.',
        'Four years, you have all the files.',
        'Reflective in tone.',
        'Say what we achieved.',
        'A thousand words or so.',
        'Make it memorable.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fourth and sixth together produce a document with no author.',
 asked=['Reflective', 'What we achieved', 'Memorable'],
 back=['1,040 fluent words', '0 judgements anybody owns', '9 adjectives the files do not support'],
 gap='Nobody said that the despatch is a judgement, that credit must be named, or that a mistake must be in it.',
 back_cap='A thousand well-made words about four years, belonging to nobody at all.',
 back_note='Make it memorable produces adjectives, and a valedictory despatch is remembered '
           'for exactly one thing: a judgement that somebody was willing to sign and to be '
           'wrong about.',
 diagnosis=[('“reflective in tone”', 'unstated criterion'),
            ('“make it memorable”', 'unstated criterion'),
            ('“what we achieved”', 'hidden assumption'),
            ('“you have all the files”', 'hidden assumption'),
            ('“a thousand words or so”', 'unbounded quantity'),
            ('“four years”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that the despatch belongs to its author.',
 scaffold=['what the despatch must make known, and to whom',
           'which period, and what is reported separately',
           'the files, and your own judgement as an input',
           'the length, the credit, the adjective rule and the judgement that may be wrong',
           'who clears it and who signs it',
           'what is done where you are uncertain'],
 bank=['Purpose: so that my successor and the capital know what I judge about … and on what evidence',
       'Scope: the … years from … ; the … report is submitted separately',
       'Inputs: the Mission’s files, the record of the principal files, and my own judgement',
       'Criteria: … words; credit attributed to named people; no adjective the files do not support; at least one judgement that may turn out to be wrong',
       'Done: cleared by nobody and signed by me, on … ',
       'Fallback: where I am uncertain, the despatch says so and says what would settle it'],
 check=['Is your own judgement an input?',
        'Is credit attributed by name?',
        'Is every adjective supported?',
        'Is a possible mistake included?'],
 model=['so that my successor and the capital know what I judge about this relationship and on what evidence',
        'the four years from June to June; the commercial section’s own report is submitted separately',
        'the Mission’s files, the record of the 12 principal files, and my own judgement, drawn from no other source',
        '900 words; every claim of achievement attributed to the people who did the work and named; no adjective the files do not support; at least 1 judgement that may turn out to be wrong, stated as mine',
        'cleared by nobody and signed by me, on the last Friday',
        'where I am uncertain, the despatch says that I am uncertain and says what would settle it'],
 cost='1,040 words with 0 owners. 900 words with 1 signature are the only version worth '
      'circulating.'),

feet=dict(
 title='On Your Feet · A farewell call, and one last question you were not expecting',
 setting=[
  'Your last farewell call. A senior official you have dealt with for four years, who has been '
  'courteous, unhelpful and occasionally indispensable, sees you out himself and then asks, at '
  'the door, what you really think.',
  'There is no note-taker, no record will be made, and you are leaving the country on Sunday. '
  'He has asked you a sincere question and he will remember the answer longer than you will.'],
 ladder=[('What do you really think?', 'the question with no instruction behind it'),
         ('You can be frank; I am not recording this', 'the invitation that is still a record'),
         ('And what should I tell my minister?', 'the advice that is not yours to give')],
 cap='Three questions at a door, on a last farewell call, with nobody taking a note.',
 turns=[('Turn 1 · The senior official', 'What do you really think, after four years?'),
        ('Turn 2 · The senior official', 'You can be frank. Nobody is recording this.'),
        ('Turn 3 · The senior official', 'And what should I tell my minister?')],
 holds=['What I think is in my despatch, and I would say the same to you as I have written there.',
        'I think the relationship is in better order than I found it, and that it is not yet settled.',
        'I am as frank at a door as I am on paper, which I know is a disappointing answer.',
        'There is one thing I will say that is not in the despatch: your deputy answers letters, and that matters more than either of us admits.',
        'What you tell your minister is not mine to advise, and I would not thank you for advising mine.',
        'I am grateful for four years of being received. I have not always been persuaded, and I have always been heard.'],
 redline='You must not say anything you would be unwilling to see in a record, you must not '
         'advise another government, and you must not use a last conversation to say what you '
         'avoided saying for four years. Do not be flattered into frankness.',
 score=['Referred to the written judgement rather than inventing a new one.',
        'Gave a real answer, restrained and defensible.',
        'Declined the invitation to be off the record, and said so plainly.',
        'Refused to advise his minister.',
        'Closed with thanks and an understatement rather than a claim.'],
 a=[('Where is your real answer?', 'in your despatch'),
    ('What do you say about the relationship?', 'better order than you found it, not yet settled'),
    ('Why decline the off-the-record invitation?', 'you are as frank at a door as on paper'),
    ('What do you refuse?', 'to advise his minister'),
    ('What one thing do you add?', 'that his deputy answers letters'),
    ('How do you close?', 'with thanks and an understatement')]),

rev_fig=figs.split('AT THE END OF A TOUR',
                   'Delegated, four years long',
                   ['comparisons and change logs',
                    'predicted questions and shortlists',
                    'first hours and formulations',
                    'first drafts of your own records'],
                   'Yours, and only yours',
                   ['the room you sat in',
                    'the trust you were given',
                    'the decisions you answer for',
                    'the despatch you signed']),
rev_fig_cap='Sixty units, one argument: delegate the written, verify the checkable, and sign the judgement.',
rev=dict(
 read=[('How long was the despatch?',
        ['nine hundred words', 'fourteen pages', 'four lines', 'three thousand words'], 0),
       ('Why did he write it himself?',
        ['the judgement had to be his', 'it was shorter',
         'he had no instrument', 'it was required'], 0),
       ('What was the limit in every case?',
        ['what had not been written down', 'the length of the text',
         'the time available', 'the cost'], 0),
       ('How many things can no system do for a representative?',
        ['four', 'one', 'ten', 'none'], 0)],
 listen_text='Delegate the documented without hesitation. Verify everything that touches a '
             'person, a number or a past. Then be present, be trusted, be answerable, and decide '
             'what your government is prepared to lose.',
 listen=[('Delegate the ____________ without hesitation.', 'documented'),
         ('Verify everything that touches a person, a number or a ____________.', 'past'),
         ('Then be present, be trusted, be ____________.', 'answerable'),
         ('And decide what your government is prepared to ____________.', 'lose')],
 speak=['Restrain nine overstated sentences about your own work, using understatement and short sentences.',
        'Then say in two minutes what you would write at the end of your own tour.'],
 write='Write a six-line tasking for an end of tour report.',
 vocab=[('An officer’s final reflective report is a ____________ despatch.', 'valedictory'),
        ('Confidence given on the strength of past conduct is a trust ____________.', 'earned'),
        ('A statement deliberately weaker than the facts is an ____________.', 'understatement'),
        ('The obligation to answer for a choice is an ____________ for a decision.', 'accountability')],
 gram=[('I will not say it was easy. I will say it is ____________.', 'finished'),
       ('The relationship is in better ____________ than I found it.', 'order'),
       ('The work was done by eleven people. Three should be ____________.', 'promoted'),
       ('He never said yes. He never quite said ____________ either.', 'no')]),

found=['Delegate every comparison, prediction, ranking and ordering you can.',
       'Verify every name, number, date and claim about the past against a file.',
       'Write your own judgement in your own words, with restraint, and sign it.',
       'Be in the room. That is still the job.'],
end_line='It can draft, compare, predict and summarise. It cannot be sent, and it cannot be wrong.',
end_next='The end of the series. Go and be in the room.')
