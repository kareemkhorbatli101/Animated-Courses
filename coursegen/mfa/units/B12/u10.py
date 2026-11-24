# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='What a Summary Loses',
gram='summarising structures: in short, in essence, broadly',
ai='what a summary loses, and how to notice',
strap='CEFR B1 · Grammar: summarising structures · AI: what a summary loses',
cando=['open a summary with in short, in essence, broadly or on balance',
       'keep a qualification inside the sentence it qualifies',
       'say which parts of a document a summary loses first',
       'test a summary by reading only it and asking what you would do',
       'require the conditions to survive into the short version'],
hero=('IN SHORT, KAVARA AGREES',
      ['The position was: Kavara agrees, provided the fee is reviewed in 2027.',
       'The summary said: Kavara agrees.'],
      [(730, 'teal', 'long'), (1390, 'purple', 'short'),
       (2050, 'orange', 'long'), (2690, 'blue', 'short')]),
hero_cap='The one-line version that went into the Minister’s folder.',

warm=['When did a short version of something mislead you?',
      'What is the first thing to disappear when a document is shortened?',
      'How would you test whether a summary is safe to act on?'],
read=[
 'By November the Ministry was summarising almost everything: telegrams, press, reports, '
 'records of conversation. The summaries were good, and reading in the Ministry had become '
 'faster than at any time in its history.',
 'In essence, one problem remained, and it was not accuracy. The summaries were accurate. '
 'What they lost, every time and in the same direction, was the condition attached to a '
 'statement.',
 'The Kavaran position on transit fees was that Kavara agreed to the Ministry’s figure, '
 'provided the fee was reviewed in 2027 and provided the review was binding. Those two '
 'provisos were the whole of the negotiation. The summary read: Kavara agrees to the figure.',
 'Dr Hana Mourad had ruled in September that summaries should be written without hedging, '
 'because a page of qualifications is a page nobody reads and a Minister needs to know where '
 'things stand. The ruling was sensible, popular and, in this case, expensive.',
 'Broadly, the Ministry learned three things. A summary loses conditions before it loses '
 'facts. It loses them silently, because what remains is a clean sentence. And the test is '
 'not whether the summary is true but whether a reader who sees only the summary would do the '
 'same thing as a reader who sees the document.'],
c_a=[('What was the Ministry summarising by November?', 'telegrams, press, reports and records of conversation'),
     ('What did the summaries lose?', 'the condition attached to a statement'),
     ('What were the two Kavaran provisos?', 'that the fee be reviewed in 2027 and that the review be binding'),
     ('What did the summary say?', 'that Kavara agrees to the figure'),
     ('What had Hana ruled in September?', 'that summaries should be written without hedging'),
     ('What is the test?', 'whether a reader of only the summary would do the same as a reader of the document')],
c_b=[('The summaries were inaccurate.', 'F'),
     ('Conditions were lost in the same direction every time.', 'T'),
     ('The provisos were a small part of the negotiation.', 'F'),
     ('Hana’s ruling was unpopular.', 'F'),
     ('A summary loses facts before conditions.', 'F'),
     ('What remains after a condition is dropped looks clean.', 'T')],
c_c=[('Reading in the Ministry had become ____________ than at any time in its history.', 'faster'),
     ('What they lost was the ____________ attached to a statement.', 'condition'),
     ('Those two provisos were the whole of the ____________.', 'negotiation'),
     ('A page of qualifications is a page nobody ____________.', 'reads'),
     ('The ruling was sensible, popular and ____________.', 'expensive'),
     ('It loses them ____________, because what remains is a clean sentence.', 'silently')],
c_d=[('Summaries lost conditions ( in the same direction / randomly ).', ['in the same direction', 'randomly'], 0),
     ('When was the no-hedging ruling made?', ['March', 'September', 'November', '2027'], 1),
     ('How many provisos did Kavara attach?', ['one', 'two', 'three', 'none'], 1),
     ('What does a lost condition leave behind?', ['a gap', 'a clean sentence', 'a question', 'a footnote'], 1),
     ('What is the test of a summary?', ['is it true', 'would the reader act the same', 'is it short', 'is it popular'], 1)],
c_e=('Match each opener to what follows it.',
     [('In short,', 'the shortest possible statement'),
      ('In essence,', 'the heart of the matter'),
      ('Broadly,', 'a general picture with exceptions'),
      ('On balance,', 'a judgement after weighing both sides'),
      ('In practice,', 'what actually happens'),
      ('Subject to that,', 'agreement with a condition carried')],
     ['the shortest possible statement', 'the heart of the matter', 'a general picture with exceptions',
      'a judgement after weighing both sides', 'what actually happens', 'agreement with a condition carried']),

v_fig_title='WHAT HOLDS A STATEMENT BACK',
v_fig=[('key', 'a limiting clause'), ('shield', 'a proviso'), ('clock', 'a degree of confidence'),
       ('pin', 'a margin'), ('bulb', 'a hedge'), ('doc', 'a qualifier')],
v_fig_cap='Six words for the parts of a sentence a summary drops first.',
vocab=[
 ('a limiting clause', 'a clause placed on a statement so that it is not read too widely'),
 ('a hedge', 'a word or phrase that reduces the strength of a claim'),
 ('a qualifier', 'the word or clause that carries a limit'),
 ('a shade of meaning', 'a small difference that changes how a sentence is read'),
 ('a proviso', 'a condition on which agreement depends'),
 ('an understatement', 'a statement weaker than the facts allow'),
 ('an overstatement', 'a statement stronger than the facts allow'),
 ('a generalisation', 'a statement about many cases, true of most'),
 ('to flatten', 'to remove the differences within something'),
 ('to overstate', 'to put something more strongly than the facts allow'),
 ('to understate', 'to put something less strongly than the facts allow'),
 ('a loss of detail', 'what disappears when something is made shorter'),
 ('a rounding', 'the replacing of an exact figure by a near one'),
 ('a simplification', 'a shorter account that leaves something out'),
 ('an approximation', 'a figure close enough for the purpose'),
 ('a blunt statement', 'a statement made without softening'),
 ('a firm statement', 'a statement made without doubt'),
 ('a tentative statement', 'a statement offered without certainty'),
 ('a degree of confidence', 'how sure the writer is of what is written'),
 ('a margin', 'the room allowed around a figure or a claim')],
v_a=[('A condition on which agreement depends is a ____________.', 'proviso'),
     ('A word or phrase that reduces the strength of a claim is a ____________.', 'hedge'),
     ('How sure the writer is of what is written is a ____________.', 'degree of confidence'),
     ('A statement offered without certainty is a ____________.', 'tentative statement'),
     ('The replacing of an exact figure by a near one is a ____________.', 'rounding'),
     ('To remove the differences within something is to ____________.', 'flatten'),
     ('A statement stronger than the facts allow is an ____________.', 'overstatement'),
     ('The room allowed around a figure or a claim is a ____________.', 'margin')],
v_b=[('A limiting clause is placed on a statement', 'so that it is not read too widely.'),
     ('A generalisation is a statement about many cases,', 'true of most.'),
     ('A simplification is a shorter account', 'that leaves something out.'),
     ('An approximation is a figure close enough', 'for the purpose.'),
     ('A shade of meaning is a small difference', 'that changes how a sentence is read.')],

g_title='Grammar: summarising structures',
g_rule=['In short introduces the shortest statement of the whole.',
        'In essence introduces the heart of the matter, leaving detail aside.',
        'Broadly introduces a general picture that has exceptions.',
        'On balance introduces a judgement reached after weighing both sides.'],
g_fig=('LOOSE',
       ['To summarise all of it, Kavara agrees.',
        'Basically it is fine.',
        'Generally speaking there may be problems.',
        'At the end of the day we should wait.'],
       'PRECISE',
       ['In short, Kavara agrees, subject to a binding review in 2027.',
        'In essence, the figure is settled and the review is not.',
        'Broadly, the position holds, with 2 exceptions on transit.',
        'On balance, the Ministry should wait until the review is agreed.'],
       'four vague openers with nothing after them',
       'four openers, each followed by what it promises'),
g_fig_cap='An opener is a promise about what follows; keep it.',
g_a=[('____________ short, Kavara agrees, subject to a review.', 'In'),
     ('In ____________, the figure is settled and the review is not.', 'essence'),
     ('____________, the position holds, with two exceptions.', 'Broadly'),
     ('On ____________, the Ministry should wait.', 'balance'),
     ('____________ practice, the review has never been binding.', 'In'),
     ('____________ to that, we agree.', 'Subject'),
     ('In ____________, the two provisos are the negotiation.', 'short'),
     ('____________ speaking, summaries lose conditions first.', 'Broadly'),
     ('On ____________, the gain is worth the risk, with the rule in place.', 'balance')],
g_b=[('In short introduces the ( general picture / shortest statement ).', ['general picture', 'shortest statement'], 1),
     ('____ essence, the figure is settled.', ['On', 'In', 'At', 'By'], 1),
     ('____ balance, the Ministry should wait.', ['In', 'On', 'At', 'For'], 1),
     ('Which admits exceptions?', ['in short', 'broadly', 'in essence', 'on balance'], 1),
     ('Which carries a condition forward?', ['in short', 'subject to that', 'broadly', 'in practice'], 1),
     ('Which follows a weighing of both sides?', ['in essence', 'on balance', 'broadly', 'in practice'], 1)],

d1=dict(title='Kavara agrees',
        fig=(['The folder says Kavara agrees.', 'Kavara agrees if the review is binding.'],
             ['That is not in the folder.', 'That is the negotiation.']),
        cap='Samir Haddad and Dr Hana Mourad, before the Minister’s meeting.',
        lines=[('Samir', 'The folder says Kavara agrees to the figure. Where are the provisos?'),
               ('Hana', 'Which provisos?'),
               ('Samir', 'Kavara agrees provided the fee is reviewed in 2027 and provided the '
                         'review is binding. Those are the two things we have been arguing about '
                         'since March.'),
               ('Hana', 'The summary says the figure is agreed. That is true.'),
               ('Samir', 'It is true and it is not the position. If the Minister says in the '
                         'meeting that the figure is agreed, Kavara will say that it is agreed '
                         'subject to a binding review, and we will have conceded the review by '
                         'not mentioning it.'),
               ('Hana', 'I ruled in September that summaries are written without hedging. A '
                        'page of qualifications is a page nobody reads.'),
               ('Samir', 'A proviso is not a hedge. A hedge softens a claim. A proviso is the '
                         'other side’s condition, and it is a fact about the world.'),
               ('Hana', 'That distinction is finer than it will survive in practice.'),
               ('Samir', 'Then it needs to be in the instruction rather than in people’s '
                         'judgement. Conditions are reproduced; confidence words may be cut.'),
               ('Hana', 'I will think about it. The meeting is in forty minutes and the folder '
                        'is wrong.'),
               ('Samir', 'The folder is accurate and misleading, which is a harder thing to '
                         'notice and a worse thing to carry into a meeting.'),
               ('Hana', 'Write me one line for the top of it and I will take it in by hand.')],
        a=[('What does the folder say?', 'that Kavara agrees to the figure'),
           ('What are the two provisos?', 'that the fee be reviewed in 2027 and that the review be binding'),
           ('What would happen if the Minister said the figure was agreed?', 'the review would be conceded by not being mentioned'),
           ('What distinction does Samir draw?', 'a hedge softens a claim; a proviso is the other side’s condition'),
           ('What does Hana ask for?', 'one line for the top of the folder')],
        b=[('A page of qualifications is a page nobody ____________.', 'reads'),
           ('A proviso is the other side’s ____________.', 'condition'),
           ('Conditions are reproduced; ____________ words may be cut.', 'confidence'),
           ('Accurate and ____________.', 'misleading')]),
d2=dict(title='The two-reader test',
        fig=(['How do we test a summary?', 'Two readers. One page, one document.'],
             ['And if they act differently?', 'Then the summary has lost something.']),
        cap='Samir and Lina Khalil, drafting the test.',
        lines=[('Lina', 'We cannot check every summary against its document. There are three '
                        'hundred a week.'),
               ('Samir', 'We check a sample, and we check it with a question rather than with a '
                         'comparison.'),
               ('Lina', 'What question?'),
               ('Samir', 'Give the summary to one officer and the document to another, and ask '
                         'each what the Ministry should do next. If the two answers differ, the '
                         'summary has lost something that matters.'),
               ('Lina', 'And if they agree?'),
               ('Samir', 'Then the summary is safe for that purpose. Not accurate, safe. The '
                         'two are different and only one of them is the point.'),
               ('Lina', 'That is a test anybody can run in ten minutes.'),
               ('Samir', 'It is also a test that finds the Kavara case immediately. A reader of '
                         'the summary says we should confirm the figure. A reader of the '
                         'document says we should settle the review first.'),
               ('Lina', 'Two different instructions from one position.'),
               ('Samir', 'Which is what a lost condition looks like from the outside. You never '
                         'see the condition. You see two officers disagreeing about what to do '
                         'and nobody able to say why.'),
               ('Lina', 'I will put it in as a weekly sample of ten.'),
               ('Samir', 'Ten a week out of three hundred will not catch them all. It will '
                         'catch the pattern, which is what we need, because the pattern is '
                         'always the same direction.')],
        a=[('How many summaries are made a week?', 'about three hundred'),
           ('What is the test?', 'one officer reads the summary, another the document, and each says what to do'),
           ('What does a difference in the answers show?', 'that the summary has lost something that matters'),
           ('What do the two readers say in the Kavara case?', 'one says confirm the figure, the other says settle the review first'),
           ('How large is the weekly sample?', 'ten')],
        b=[('Not accurate, ____________.', 'safe'),
           ('Two different ____________ from one position.', 'instructions'),
           ('You see two officers disagreeing about what to ____________.', 'do'),
           ('The pattern is always the same ____________.', 'direction')]),

speak=[('Summarise it',
        ['Student A: describe a situation at work in six sentences.',
         'Student B: summarise it four times, opening with in short, in essence, broadly and on balance.',
         'Say which opener fits the situation best and why.']),
       ('Keep the condition',
        ['Describe an agreement that depends on a condition.',
         'Summarise it in one sentence with the condition inside the sentence.',
         'Your partner removes the condition and says what changes.']),
       ('The two-reader test',
        ['In pairs, one reads a short version and one a long version of the same thing.',
         'Each says what should be done next.',
         'Compare the two answers and say what the short version lost.'])],

ext_title='Summaries lose conditions before they lose facts, and the test is not truth but whether the reader would act the same',
ext_fig=figs.datatable('ONE POSITION, THREE VERSIONS',
                       ['Version', 'What it says', 'What a reader does'],
                       [['the document', 'agrees, provided a binding 2027 review', 'settle the review first'],
                        ['a careful summary', 'agrees, subject to a binding review', 'settle the review first'],
                        ['the folder line', 'agrees to the figure', 'confirm the figure'],
                        ['with hedges cut', 'agrees to the figure', 'confirm the figure'],
                        ['with the proviso kept', 'agrees if the review binds', 'settle the review first'],
                        ['the two-reader test', 'answers differ', 'the summary has lost something']]),
ext_fig_cap='Three of six versions send the reader the wrong way, and all six are accurate.',
ext=[
 'Once a ministry summarises everything, it has a new class of error, and it is not '
 'inaccuracy. Summaries are generally accurate. What they lose, reliably and in one '
 'direction, is the condition attached to a statement: the proviso, the margin, the degree of '
 'confidence, the two exceptions at the end of the paragraph.',
 'The reason is structural. A condition is a qualification of something else, so it is '
 'grammatically subordinate, usually short, and never the main clause. Every method of '
 'shortening a sentence keeps the main clause. The result is a clean, true sentence from '
 'which the negotiation has vanished: Kavara agrees to the figure, where the position was '
 'that Kavara agrees provided the review in 2027 is binding.',
 'This is worse than an obvious error, because nothing looks wrong. An officer reading the '
 'folder has no way to know that a clause has gone. There is no gap, no ellipsis, no note. '
 'The sentence reads as a finished statement of a position, and the only sign of trouble '
 'appears later, when two officers who have read different versions give the Minister '
 'different advice and neither can explain the other.',
 'The practical test used in several services is a two-reader test on a sample. One officer '
 'reads only the summary; another reads the document; each is asked what the Ministry should '
 'do next. Where the answers differ, the summary has lost something that matters, whatever '
 'its accuracy. Where they agree, the summary is safe for that purpose, which is a smaller '
 'and more useful claim than true.',
 'And one instruction is worth writing down, because it settles an argument that otherwise '
 'recurs. A hedge and a proviso are not the same thing. A hedge softens a claim and may be '
 'cut: it is the writer’s own uncertainty. A proviso is the other side’s condition. It is a '
 'fact about the world, it is reproduced, and it is reproduced inside the sentence it '
 'qualifies rather than in a note underneath.'],
dp1=('Testing summaries',
     'Services summarising reporting at scale in 2025 introduced sampled checks comparing the '
     'action a reader would take from the summary with the action a reader would take from the '
     'source, after finding that conditional statements were systematically flattened.',
     'Source: reported practice in diplomatic reporting, 2025–2026.'),
e_a=[('What is the new class of error?', 'the loss of conditions, not inaccuracy'),
     ('Why are conditions lost?', 'because they are grammatically subordinate and shortening keeps the main clause'),
     ('Why is it worse than an obvious error?', 'because nothing looks wrong and there is no gap'),
     ('What is the two-reader test?', 'one reads the summary, one the document, and each says what to do next'),
     ('What is the difference between a hedge and a proviso?', 'a hedge is the writer’s uncertainty and may be cut; a proviso is the other side’s condition')],
e_b=[('Summaries are generally inaccurate.', 'F'),
     ('Conditions are lost in one direction.', 'T'),
     ('A lost condition leaves a visible gap.', 'F'),
     ('Safe and true mean the same thing here.', 'F'),
     ('A proviso may be cut as a hedge.', 'F'),
     ('The test uses a sample rather than every summary.', 'T')],

w_model=(
 'Purpose: summarise the Kavaran position so that an officer reading only the summary takes '
 'the same next step as an officer reading the file. Scope: the position as stated in the 2 '
 'notes of 9 and 23 October; earlier positions are out of scope. Inputs: the 2 notes and the '
 'record of the 23 October meeting. Criteria: reproduce every condition on which the other '
 'side’s agreement depends, inside the sentence it qualifies and not in a footnote; the '
 'writer’s own hedges may be cut; carry each figure exactly; state the Ministry’s next step '
 'in 1 sentence. Done: 1 summary of no more than 120 words, with every condition present, by '
 '09:00 tomorrow. Fallback: where it is unclear whether a clause is a condition or a hedge, '
 'keep it and mark it for the drafter.'),
w_fig=figs.spec_card('THE TASKING FOR A SUMMARY',
                     [('Purpose', 'the same next step from the summary as from the file'),
                      ('Scope', 'the position in the 2 October notes; earlier ones excluded'),
                      ('Inputs', 'the 2 notes and the record of 23 October'),
                      ('Criteria', 'every condition inside its sentence; hedges may go; figures exact'),
                      ('Done', '1 summary of 120 words or fewer, by 09:00 tomorrow'),
                      ('Fallback', 'unclear clause: keep it and mark it')]),
w_fig_cap='The purpose line is the test: the same next step, not the same words.',
w_task='Write a tasking for a summary of something conditional in your own work.',
w_steps=['Say what the reader of the summary must be able to do.',
         'Name the documents and exclude the rest.',
         'Require conditions inside the sentences they qualify.',
         'Say which words may be cut.',
         'Say what to do with a clause you cannot classify.'],
w_bank=['Summarise … so that an officer reading only … takes the same …',
        'Cover … ; … are out of scope.',
        'Work from … and …',
        'Reproduce every condition … , inside … and not in … ; … may be cut; carry … exactly',
        'Where it is unclear whether … , keep it and …'],
w_check=['Does the purpose state a test rather than a quality?',
         'Are conditions required inside their sentences?',
         'Is the difference between hedge and condition stated?',
         'Is an unclassifiable clause kept?'],

t_title='What a summary loses',
t_fig=figs.split('A SUMMARY LOSES',
                 'First',
                 ['the proviso',
                  'the margin on a figure',
                  'the degree of confidence',
                  'the two exceptions at the end'],
                 'Last',
                 ['names and titles',
                  'exact figures',
                  'quoted sentences',
                  'the main clause']),
t_fig_cap='The left column is what the negotiation consists of. It goes first, every time.',
t_body=[
 'In essence, the error that arrives with summarising at scale is not inaccuracy. Summaries '
 'are accurate. What they lose is the condition on a statement, and they lose it because a '
 'condition is subordinate: short, attached, never the main clause. Shortening keeps main '
 'clauses, so Kavara agrees provided the 2027 review is binding becomes Kavara agrees, which '
 'is true and is not the position.',
 'Broadly, that makes it a worse failure than a plain mistake, because the result looks '
 'finished. No gap appears, nothing is marked, and the first visible symptom is two officers '
 'advising the Minister differently without being able to say why. So do not test a summary '
 'by asking whether it is true. Give the summary to one reader and the document to another, '
 'ask each what the Ministry should do next, and compare the answers.',
 'On balance, one instruction does most of the work. A hedge is the writer’s own uncertainty '
 'and may be cut. A proviso is the other side’s condition, it is a fact about the world, and '
 'it is reproduced inside the sentence it qualifies. Where a clause cannot be classified, '
 'keep it and mark it, because a kept hedge costs four words and a dropped proviso costs a '
 'negotiating position.'],
t_say=[('State the test: ', 'The same next step from the summary as from the file.'),
       ('Keep the condition: ', 'Inside the sentence it qualifies, not in a footnote.'),
       ('Draw the line: ', 'Hedges may be cut; the other side’s conditions may not.')],
t_bound=('A summary cannot keep a condition it was not told to keep, and nothing in a clean '
         'sentence shows that one has gone. Accuracy is not the test and does not detect this '
         'failure. Only a reader asked what to do next will find it, and only a sample of '
         'them, regularly.'),
t_a=[('The same next ____________ from the summary as from the file.', 'step'),
     ('Inside the sentence it ____________, not in a footnote.', 'qualifies'),
     ('Hedges may be cut; the other side’s ____________ may not.', 'conditions'),
     ('A condition is ____________: short, attached, never the main clause.', 'subordinate'),
     ('A kept hedge costs four ____________.', 'words'),
     ('A dropped proviso costs a negotiating ____________.', 'position')],
t_b_rubric='Rewrite each summary so that the condition survives inside the sentence.',
t_b=[('Kavara agrees to the figure.', 'Kavara agrees to the figure provided the 2027 review is binding'),
     ('Oristan will circulate a draft.', 'Oristan will circulate a draft if its capital clears the wording'),
     ('The committee accepted paragraph 7.', 'the committee accepted paragraph 7 subject to the bracketed phrase being removed'),
     ('Halmar is content with the schedule.', 'Halmar is content with the schedule except for the March dates')],

case=dict(
 title='The Decision Room · Hedges and provisos',
 brief=[
  'Dr Hana Mourad’s September ruling was that summaries are written without hedging. It made '
  'the folders readable and was welcomed throughout the Ministry.',
  'It also removed the Kavaran provisos, which came within forty minutes of being conceded in '
  'a meeting with the Minister.',
  'Samir Haddad proposes the distinction be written into the instruction: a hedge is the '
  'writer’s uncertainty and may go; a condition belonging to the other side is reproduced. '
  'Hana holds that the distinction is too fine for four hundred drafters and will produce the '
  'page of qualifications she abolished.'],
 exhibit=figs.datatable('SUMMARIES SAMPLED, SEPTEMBER TO DECEMBER',
                        ['', 'Figure', 'Note'],
                        [['summaries produced weekly', '~300', '—'],
                         ['sampled under the two-reader test', '10 a week', 'from November'],
                         ['sampled summaries where answers differed', '14 of 130', '—'],
                         ['of those, a condition was missing', '13 of 14', '—'],
                         ['of those, a fact was wrong', '1 of 14', '—'],
                         ['folder lines rewritten before a Minister’s meeting', '6', '—']]),
 exhibit_cap='Thirteen of fourteen failures were a missing condition. One was a wrong fact.',
 exhibit_note='The ruling of September reduced average folder length from 410 words to 240 and '
              'was the most popular instruction issued that year.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'Write the distinction down. A hedge is ours and may go. A condition is theirs and '
          'is a fact. Thirteen of fourteen failures are one kind of thing, which means one '
          'sentence of instruction fixes them.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Four hundred drafters will not hold that line. They will keep everything that '
          'might be a condition, the folders will go back to four hundred words, and nobody '
          'will read them, which is where we started.'),
         ('Lina Khalil', 'Bilateral Affairs',
          'Then measure it. Keep the two-reader sample and publish folder length. If length '
          'goes back above 300 words we revisit it, and if it does not, the argument is '
          'over.')],
 steps=[('Find it', 'What kind of failure were thirteen of fourteen?'),
        ('Compare it', 'What are the two positions?'),
        ('Infer it', 'Why does Hana expect drafters to over-keep?'),
        ('Weigh it', 'Readable folders against conditions that survive.'),
        ('Decide', 'Write the distinction in, or hold the line on brevity?')],
 analysis=[('Find it. How many sampled failures were a missing condition?', 'thirteen of fourteen'),
           ('Compare it. What does Samir want written down?', 'that a hedge may go and the other side’s condition is reproduced'),
           ('Infer it. What is Hana’s prediction?', 'that drafters will keep everything and folders will return to 400 words'),
           ('Weigh it. What did the September ruling achieve?', 'folder length from 410 words to 240, and great popularity'),
           ('Decide. What would you do?', 'answers vary; Lina’s measurement settles the prediction either way')],
 decision='Write the instruction on hedges and conditions.',
 decision_steps=['State what may be cut and what may not.',
                 'Say where a condition goes in the sentence.',
                 'Say what to do with a clause that cannot be classified.',
                 'Say what is measured and when it is revisited.'],
 bank=['The writer’s own … may be cut.',
       'A condition on which … depends is reproduced …',
       'Where a clause cannot be classified, …',
       'Folder length and the two-reader sample are published …',
       'This is revisited if …'],
 outcome='The distinction went into the instruction in January, with the two-reader sample and '
         'published folder lengths. By April average folder length was 268 words, not the four '
         'hundred Hana had predicted, and sampled failures from a missing condition had fallen '
         'from thirteen in a hundred and thirty to two. Hana, who had opposed writing the '
         'distinction in, says she had assumed drafters could not hold a fine line and that '
         'the figures say otherwise; what held it, she thinks, was that the rule told them '
         'what to cut as well as what to keep, and her September ruling had only told them to '
         'cut.',
 outcome_q=[('What happened to folder length?', 'it settled at 268 words, not the 400 predicted'),
            ('What does Hana say held the line?', 'that the rule said what to cut as well as what to keep')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Summarise the Kavaran position',
 task=['This is the tasking behind the folder line that nearly conceded the review.',
       'It produced a summary that was accurate, readable and sent the reader the wrong way.'],
 draft=['Summarise the Kavaran position.',
        'Keep it to a line or two.',
        'No hedging.',
        'Use the material on the file.',
        'Make the state of play clear.',
        'For the meeting.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the third one deleted the negotiation.',
 asked=['Every condition reproduced in its sentence',
        'A stated word limit',
        'The next step in one sentence'],
 back=['Kavara agrees to the figure',
       'No mention of the 2027 review',
       'A folder line 40 minutes from being used'],
 gap='"The Kavaran position" does not say as at which date, "a line or two" sets no number, '
     '"no hedging" does not distinguish a hedge from a condition, and nothing says what the '
     'reader is to do next.',
 back_cap='Eleven words, every one of them true, and the review conceded by silence.',
 back_note='Line three is the failure. No hedging read as no conditions, and the drafter had '
           'no instruction to tell them apart.',
 diagnosis=[('[1] "the Kavaran position" — as at which date, in which notes?', 'ambiguous referent'),
            ('[2] "a line or two" — how many words?', 'unbounded quantity'),
            ('[3] "no hedging" — does that include the other side’s conditions?', 'ambiguous referent'),
            ('[4] "the material on the file" — how far back?', 'unbounded quantity'),
            ('[5] "make the state of play clear" — and if it is conditional?', 'missing condition'),
            ('[6] "for the meeting" — and if it is not ready in time?', 'missing condition')],
 rewrite='Rewrite the tasking so that conditions survive and hedges may be cut.',
 scaffold=['What the reader of the summary must be able to do',
           'Which statements of the position are covered',
           'The notes and the record to work from',
           'Conditions inside their sentences, hedges cuttable, figures exact, next step stated',
           'The word limit and the deadline',
           'What to do with a clause that cannot be classified'],
 bank=['Summarise … so that an officer reading only … takes the same …',
       'Cover … ; … are out of scope.',
       'Work from … and …',
       'Reproduce every condition … , inside … and not in … ; the writer’s own hedges … ; carry … ; state …',
       'Return 1 summary of no more than … , by …',
       'Where it is unclear whether … , keep it and …'],
 check=['Is the test stated as an action, not a quality?',
        'Are the other side’s conditions protected by name?',
        'Is the word limit a number?',
        'Is an unclassifiable clause kept rather than cut?'],
 model=['Summarise the Kavaran position so that an officer reading only the summary takes the same next step as an officer reading the file',
        'The position as stated in the 2 notes of 9 and 23 October; earlier positions are out of scope',
        'The 2 notes and the record of the 23 October meeting',
        'Reproduce every condition on which the other side’s agreement depends, inside the sentence it qualifies and not in a footnote; the writer’s own hedges may be cut; carry each figure exactly; state the Ministry’s next step in 1 sentence',
        '1 summary of no more than 120 words, with every condition present, by 09:00 tomorrow',
        'Where it is unclear whether a clause is a condition or a hedge, keep it and mark it for the drafter'],
 cost='1 folder line that came within 40 minutes of conceding a binding review the Ministry '
      'had argued for since March.'),

rev_fig=figs.split('OPENERS',
                   'Vague',
                   ['To summarise all of it, Kavara agrees.',
                    'Basically it is fine.',
                    'Generally speaking there may be problems.',
                    'At the end of the day we should wait.'],
                   'Exact',
                   ['In short, Kavara agrees, subject to a binding review.',
                    'In essence, the figure is settled, the review is not.',
                    'Broadly, the position holds, with 2 exceptions.',
                    'On balance, the Ministry should wait.']),
rev_fig_cap='In short, in essence, broadly, on balance, in practice, subject to that.',
rev=dict(
 read=[('Summaries lose', ['facts first', 'conditions first', 'names first', 'figures first'], 1),
       ('A lost condition leaves', ['a visible gap', 'a clean true sentence', 'a footnote', 'a question mark'], 1),
       ('The two-reader test compares', ['two summaries', 'what each reader would do next', 'word counts', 'two documents'], 1),
       ('In the Decision Room, what happened to folder length?', ['it returned to 400 words', 'it settled at 268 words', 'it fell to 120', 'it was not measured'], 1)],
 listen_text='A hedge is the writer’s own uncertainty and may be cut. A proviso is the other '
             'side’s condition, it is a fact about the world, and it is reproduced inside the '
             'sentence it qualifies. A kept hedge costs four words; a dropped proviso costs a '
             'negotiating position.',
 listen=[('A hedge is the writer’s own ____________.', 'uncertainty'),
         ('A proviso is the other side’s ____________.', 'condition'),
         ('Reproduced inside the sentence it ____________.', 'qualifies'),
         ('A dropped proviso costs a negotiating ____________.', 'position')],
 speak=['Summarise a conditional agreement in one sentence, keeping the condition.',
        'Say how you would test a summary in your own office.'],
 write='Write one summary sentence that carries a condition inside it.',
 vocab=[('A condition on which agreement depends is a ____________.', 'proviso'),
        ('A word or phrase that reduces the strength of a claim is a ____________.', 'hedge'),
        ('How sure the writer is of what is written is a ____________.', 'degree of confidence'),
        ('A statement offered without certainty is a ____________.', 'tentative statement'),
        ('To remove the differences within something is to ____________.', 'flatten')],
 gram=[('____________ short, Kavara agrees, subject to a review.', 'In'),
       ('In ____________, the figure is settled and the review is not.', 'essence'),
       ('____________, the position holds, with two exceptions.', 'Broadly'),
       ('On ____________, the Ministry should wait.', 'balance'),
       ('____________ to that, we agree.', 'Subject')]),

found=['Take a summary you received this week and find the condition it dropped.',
       'Run the two-reader test once in your office.',
       'Rewrite one folder line so the condition sits inside the sentence.',
       'Write your own one-sentence rule on hedges and conditions.'],
end_line='Accurate is not the test. The test is what the reader does next.',
end_next='Book 3: Research and the Brief',
)
