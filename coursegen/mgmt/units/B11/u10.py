# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='If This, Then That',
gram='the first conditional',
ai='the jobs not to give it yet, and why',
strap='CEFR B1 · Grammar: the first conditional · AI: the jobs not to give it yet, and why',
cando=['write a first conditional to cover a case that will certainly happen',
       'put a fallback into every brief, as a matter of habit',
       'name the three tests that decide whether work can be handed over yet',
       'tell a reversible mistake from one that cannot be taken back',
       'explain to a colleague why a particular job is being kept with a person'],
hero=('THE LINE NOBODY AT ARCLIGHT CROSSES',
      ['Three jobs stay with a person, written on the wall.',
       'Not because they are hard. Because they cannot be undone.'],
      [(860, 'teal', 'long'), (1600, 'grey', 'short'), (2340, 'orange', 'long')]),
hero_cap='The last unit of Book 1, and the first rule of everything after it.',

warm=['Which mistakes at your work can be taken back, and which cannot?',
      'What would you never let a new colleague do unsupervised in their first week?',
      'What does "if the file is missing" tell you that "process the files" does not?'],
read=[
 'There is a list on the wall of Arclight’s office with three jobs written on it, under the '
 'heading Not Yet. A person issues any credit note. A person signs anything a client could '
 'hold us to. A person makes the first call when something has gone wrong. Everything else '
 'is open to argument, and those three are not.',
 'The list was not written after a disaster. It was written after a near miss, which Dalia '
 'says is a much better time to write one. A payment chase had gone out against an account '
 'that had been settled by bank transfer four days earlier, and the only reason it did not '
 'reach the client was that Fatima happened to be looking at the queue.',
 'What makes a job unsuitable for handing over is not difficulty. Several of the hardest '
 'things Arclight does are handed over completely and have been for a year. The test is '
 'different, and it has three parts: can the mistake be taken back, will anybody notice if '
 'it happens, and does somebody outside the company carry the cost?',
 'A reminder letter sent to the wrong client is embarrassing and reversible. A credit note '
 'issued in error has left the building and is on somebody’s books. A first call after a '
 'failure can only happen once, and if it goes badly the relationship absorbs it for a year. '
 'None of these is a judgement about capability.',
 'The other half of the same discipline is the fallback. Every brief at Arclight now ends '
 'with a sentence beginning if, and the sentence names a case that will certainly happen '
 'rather than one that might. If an account has no email address. If two due dates are '
 'recorded. If the total cannot be read. Nobody has ever regretted writing one, and the '
 'cost of leaving it out arrives about every sixth run.'],
c_a=[('How many items are on the Not Yet list?', 'three'),
     ('What event prompted the list?', 'a near miss, when a chase went out against an account already settled'),
     ('Why did the chase not reach the client?', 'Fatima happened to be looking at the queue'),
     ('What are the three parts of the test?', 'can the mistake be taken back, will anybody notice, and does somebody outside carry the cost'),
     ('What must every brief now end with?', 'a sentence beginning if, naming a case that will certainly happen')],
c_b=[('The Not Yet list was written after a disaster.', 'F'),
     ('The test for handing work over is difficulty.', 'F'),
     ('A credit note issued in error can easily be taken back.', 'F'),
     ('Some of the hardest work Arclight does is handed over completely.', 'T'),
     ('A fallback should name a case that will certainly happen.', 'T'),
     ('The cost of leaving out a fallback arrives about every sixth run.', 'T')],
c_c=[('The list is under the heading Not ____________.', 'Yet'),
     ('A near ____________ is a much better time to write one.', 'miss'),
     ('The account had been settled by bank ____________ four days earlier.', 'transfer'),
     ('A credit note issued in error has left the ____________.', 'building'),
     ('A first call after a failure can only happen ____________.', 'once'),
     ('Every brief now ends with a sentence beginning ____________.', 'if'),
     ],
c_d=[('The Not Yet list is based on ( reversibility / capability ).', ['reversibility', 'capability'], 0),
     ('The three tests concern', ['difficulty, cost and time', 'reversibility, visibility and who bears the cost', 'speed, accuracy and volume', 'training, tools and rules'], 1),
     ('A fallback should name a case that', ['might happen', 'will certainly happen', 'has never happened', 'is unlikely'], 1),
     ('The near miss was caught because', ['a rule worked', 'Fatima happened to be looking', 'the client called', 'the system flagged it'], 1),
     ('Several of the hardest jobs at Arclight are', ['kept with a person', 'handed over completely', 'done twice', 'not done'], 1)],
c_e=('Reversible or not? Put each outcome in the right column.',
     [('A reminder sent to the wrong client', 'Reversible'),
      ('A credit note issued in error', 'Not reversible'),
      ('A badly worded internal note', 'Reversible'),
      ('The first call after a failure', 'Not reversible'),
      ('A draft letter with a wrong figure', 'Reversible'),
      ('A payment released to the wrong account', 'Not reversible')],
     ['Reversible', 'Not reversible']),

v_fig_title='BEFORE YOU HAND IT OVER',
v_fig=[('scale', 'reversible'), ('bank', 'exposure'), ('doc', 'a safeguard'),
       ('bulb', 'a pilot'), ('chart', 'a trigger'), ('note', 'sign-off')],
v_fig_cap='Six words for the conversation that happens before anything is handed over.',
vocab=[
 ('irreversible', 'impossible to undo once it has happened'),
 ('reversible', 'able to be undone without lasting harm'),
 ('consequential', 'having effects that matter beyond the thing itself'),
 ('stakes', 'what stands to be won or lost in a decision'),
 ('exposure', 'the amount a company could lose if something goes wrong'),
 ('safeguard', 'a measure put in place to prevent a particular harm'),
 ('contingency', 'a plan held ready in case something goes wrong'),
 ('fail-safe', 'designed so that a failure leads to a harmless result'),
 ('pilot', 'a small first run used to find out what happens'),
 ('trial', 'a limited test before a full commitment is made'),
 ('rollback', 'returning a system to the state it was in before a change'),
 ('scope creep', 'the gradual growth of a job beyond what was agreed'),
 ('readiness', 'the state of being prepared enough to begin'),
 ('prerequisite', 'something that must exist before something else can start'),
 ('abort', 'to stop a process deliberately before it finishes'),
 ('go-live', 'the moment something starts being used for real work'),
 ('trigger', 'the event that causes a rule or an action to apply'),
 ('precaution', 'something done in advance to avoid a possible harm'),
 ('sign-off', 'formal approval by a named person before something proceeds'),
 ('prudent', 'sensibly careful about risk')],
v_a=[('A mistake impossible to undo is ____________.', 'irreversible'),
     ('The amount a company could lose is its ____________.', 'exposure'),
     ('A small first run used to find out what happens is a ____________.', 'pilot'),
     ('Something that must exist first is a ____________.', 'prerequisite'),
     ('Formal approval by a named person is ____________.', 'sign-off'),
     ('The event that causes a rule to apply is the ____________.', 'trigger'),
     ('The gradual growth of a job beyond what was agreed is ____________.', 'scope creep'),
     ('A plan held ready in case something goes wrong is a ____________.', 'contingency')],
v_b=[('A fail-safe is designed so that a failure', 'leads to a harmless result.'),
     ('Rollback means returning a system', 'to the state it was in before.'),
     ('To abort a process is to stop it', 'deliberately before it finishes.'),
     ('Go-live is the moment something starts', 'being used for real work.'),
     ('Stakes are what stands to be', 'won or lost in a decision.')],

g_title='Grammar: the first conditional',
g_rule=['If + present simple, then will or an imperative: If the file is missing, stop.',
        'Use the first conditional for things that really do happen, not imagined ones.',
        'Unless means if not: Unless the total is readable, flag the row.',
        'A brief without an if-sentence has no instruction for the case that always arrives.'],
g_fig=('LOOSE',
       ['Process the invoices.',
        'Send the reminders out.',
        'Pull the six fields.',
        'Reply to the client.'],
       'PRECISE',
       ['If an invoice shows 2 dates, use the later.',
        'If an account is in dispute, send nothing.',
        'If a total cannot be read, flag the row.',
        'If the question is not covered, say so.'],
       'covers the case you imagined',
       'covers the case that actually arrives'),
g_fig_cap='The right-hand column is four sentences long and prevents four separate disasters.',
g_a=[('If an invoice ____________ two dates, use the later one. (show)', 'shows'),
     ('If the total cannot be read, ____________ the row. (flag)', 'flag'),
     ('If an account is in dispute, we ____________ send anything. (not)', 'will not'),
     ('____________ the email address is missing, list it. (if)', 'If'),
     ('If a client ____________ , Fatima will call them. (complain)', 'complains'),
     ('____________ the figure is readable, flag it. (unless)', 'Unless'),
     ('If it ____________ by ten, we send it marked. (not arrive)', 'does not arrive'),
     ('If two rules match, the higher one ____________ . (win)', 'wins'),
     ('If Marta ____________ it, nothing goes out. (not sign)', 'does not sign')],
g_b=[('If an invoice ( will show / shows ) two dates, use the later one.', ['will show', 'shows'], 1),
     ('If the total cannot be read, ____ the row.', ['flagging', 'flag', 'to flag', 'flagged'], 1),
     ('____ the figure is readable, flag it.', ['If', 'Unless', 'Whether', 'Although'], 1),
     ('If it does not arrive by ten, we ____ it marked.', ['sent', 'sending', 'will send', 'had sent'], 2),
     ('If two rules match, the higher one ____.', ['win', 'wins', 'winning', 'won'], 1),
     ('If Marta ____ it, nothing goes out.', ['not sign', 'does not sign', 'will not sign', 'not signs'], 1)],

d1=dict(title='The near miss',
        fig=(['It was already paid. Four days ago.', 'Why did it not know that?'],
             ['Nothing told it.', 'Then nothing is the problem.']),
        cap='Fatima and Dalia, at the queue, on a Thursday.',
        lines=[('Fatima', 'This one is about to go out. Boateng paid it on Monday, by transfer.'),
               ('Dalia', 'Then why is it in the queue?'),
               ('Fatima', 'Because the ledger export was taken on Friday and the payment came Monday.'),
               ('Dalia', 'So the data was four days old and nothing said what to do about that.'),
               ('Fatima', 'Nothing said anything about it. It is not in the brief.'),
               ('Dalia', 'Would you have caught it if you had not been standing here?'),
               ('Fatima', 'No. I was looking at something else entirely.'),
               ('Dalia', 'That is what I find frightening. Not the error. The way we caught it.'),
               ('Fatima', 'A rule, then. If the export is more than two days old, stop.'),
               ('Dalia', 'If the export is more than two days old, stop and tell somebody.'),
               ('Fatima', 'Stop and tell somebody. Yes. Stopping quietly is not much better.'),
               ('Dalia', 'Write it into the brief before you go home. Not Monday. Today.')],
        a=[('Why was the paid invoice still in the queue?', 'the ledger export was four days old and the payment came afterwards'),
           ('How was it caught?', 'Fatima happened to be standing at the queue looking at something else'),
           ('What does Dalia find frightening?', 'the way it was caught, rather than the error itself'),
           ('What rule do they agree?', 'if the export is more than two days old, stop and tell somebody'),
           ('Why does Fatima add "and tell somebody"?', 'because stopping quietly is not much better than not stopping')],
        b=[('The ledger export was taken on ____________.', 'Friday'),
           ('The data was four days ____________.', 'old'),
           ('Stop and tell ____________.', 'somebody'),
           ('Not Monday. ____________.', 'Today')]),
d2=dict(title='Not yet, or not ever?',
        fig=(['It says Not Yet, not Never.', 'Then when?']),
        cap='Thomas and Marta, about the list on the wall.',
        lines=[('Thomas', 'The list says Not Yet. When does yet arrive?'),
               ('Marta', 'When the mistake becomes reversible, or when somebody will see it in time.'),
               ('Thomas', 'Those are both things we could build. Neither of them is about capability.'),
               ('Marta', 'Correct. That is why it says Not Yet.'),
               ('Thomas', 'So credit notes come off the list the day there is a two-hour hold on them.'),
               ('Marta', 'The day there is a two-hour hold that somebody actually watches.'),
               ('Thomas', 'That is a different sentence and a much more expensive one.'),
               ('Marta', 'Yes. Most safeguards are a rule plus a person, and people cost money.'),
               ('Thomas', 'Then half of this list is really about what we can afford.'),
               ('Marta', 'Half of it is. I would rather say that out loud than dress it up as principle.'),
               ('Thomas', 'And the first call after a failure? That is not affordability.'),
               ('Marta', 'No. That one I would keep with a person at any price, and I cannot prove it.')],
        unresolved=True,
        a=[('What does Marta say makes "yet" arrive?', 'when the mistake becomes reversible, or when somebody will see it in time'),
           ('What would take credit notes off the list?', 'a two-hour hold that somebody actually watches'),
           ('Why is the second version more expensive?', 'because a safeguard is usually a rule plus a person, and people cost money'),
           ('What does Marta prefer to say out loud?', 'that half the list is really about affordability'),
           ('What does she admit about the first call?', 'that she would keep it with a person at any price and cannot prove she is right')],
        b=[('When does ____________ arrive?', 'yet'),
           ('A two-hour hold that somebody actually ____________.', 'watches'),
           ('Most safeguards are a rule plus a ____________.', 'person'),
           ('I cannot ____________ it.', 'prove')]),

speak=[('Reversible or not?',
        ['Student A: name six things that happen in your work when somebody makes a mistake.',
         'Student B: sort them into reversible and not reversible.',
         'Agree which one you would never hand over, and say why in one sentence.']),
       ('Spoken specification: brief with a fallback',
        ['Choose a task that goes wrong in one predictable way about once a month.',
         'Brief it aloud, ending with an if-sentence covering that exact case.',
         'Your partner invents a second case. Add a second if-sentence on the spot.']),
       ('Write the Not Yet list',
        ['In pairs, write three jobs in your own workplace that should stay with a person.',
         'For each, say which of the three tests it fails.',
         'Then say what would have to change for it to come off the list.'])],

ext_title='Three tests, and none of them is about how clever it is',
ext_fig=figs.datatable('WHY A JOB STAYS WITH A PERSON',
                       ['The job', 'Reversible?', 'Noticed in time?', 'Who bears it?'],
                       [['reminder letter', 'yes', 'usually', 'us'],
                        ['data extraction', 'yes', 'yes, flags', 'us'],
                        ['credit note', 'no', 'no', 'the client'],
                        ['contract answer', 'no, once sent', 'no', 'the client'],
                        ['first call after a failure', 'no', 'immediately', 'the relationship']]),
ext_fig_cap='The last three rows fail at least two tests each. That is the whole criterion.',
ext=[
 'The question of which jobs to hand over is usually discussed as though it were a question about '
 'capability, and framed that way it has no stable answer, because capability moves and '
 'nobody can see how far. A more useful frame asks about consequences instead, and '
 'consequences do not move. A mistake that cannot be taken back could not be taken back ten '
 'years ago either, and will not be taken back in five.',
 'The first test is reversibility. If the worst case is a draft somebody deletes, the stakes '
 'are low whatever the error rate. If the worst case is a document on another company’s '
 'books, an email in a client’s inbox or money in somebody else’s account, the error rate '
 'has to be judged against a cost you cannot refund.',
 'The second is whether a mistake will be noticed in time, and by whom. This is the test '
 'people forget, and it is the one that caught Arclight in the near miss. An error that '
 'surfaces inside an hour is a different thing from an identical error that surfaces when a '
 'client finds it in June. The question is not whether somebody could notice but whether '
 'anybody is actually looking, which is a question about staffing rather than about systems.',
 'The third is who carries the cost. A company is entitled to take risks with its own time '
 'and money, and it is in a different position when the cost of being wrong lands on a '
 'customer who did not choose it. This is not a legal point, although it sometimes becomes '
 'one. It is the difference between a decision you can make alone and one you ought to '
 'discuss with the person who will pay for it.',
 'Taken together, the three tests have a quietly useful property: they tell you what to '
 'build rather than only what to avoid. A job that fails the second test can often be '
 'rescued by a hold and a reviewer. A job that fails the first usually cannot be rescued at '
 'all, and belongs on the list until something about the work itself changes.'],
dp1=('Where review effort goes',
     'Operational risk practice generally recommends concentrating review on actions that '
     'cannot be reversed and whose consequences fall outside the organisation.',
     'Source: general operational-risk practice, 2026. Applied differently across sectors.'),
e_a=[('Why is capability a poor frame for this question?', 'because capability moves and nobody can see how far, while consequences do not move'),
     ('What is the first test?', 'whether the mistake can be taken back'),
     ('Which test do people usually forget?', 'whether anybody is actually looking in time'),
     ('Why does the third test matter?', 'because the cost falls on somebody who did not choose the risk'),
     ('What useful property do the three tests have together?', 'they tell you what to build, not only what to avoid')],
e_b=[('The writer recommends judging by capability.', 'F'),
     ('A deleted draft is described as low stakes.', 'T'),
     ('The second test is about whether anybody is actually looking.', 'T'),
     ('The third test is primarily a legal point.', 'F'),
     ('A job failing the second test can often be rescued by a hold and a reviewer.', 'T'),
     ('A job failing the first test is easy to rescue.', 'F')],

w_model=(
 'Purpose: run the April reminder cycle without anything irreversible happening unwatched. '
 'Scope: the 338 ordinary overdue accounts on the 14 March ledger; credit notes and refunds '
 'are excluded entirely and stay with a person. Inputs: the ledger export and house style '
 'version 2. Criteria: 1 letter per account; nothing sent against an account settled since '
 'the export. Done: a queue of 338 letters held for 2 hours, released by a named person. '
 'Fallback: if the export is more than 2 days old, stop the run and tell Dalia; if an '
 'account shows a payment after the export date, remove it and list it.'),
w_fig=figs.handover('THE HOLD, AND WHO WATCHES IT',
                    ['Build the queue', 'Hold it for 2 hours', 'Re-check against today’s payments'],
                    'Fatima releases the queue, or does not',
                    'A hold nobody watches is a delay, not a safeguard.'),
w_fig_cap='The safeguard is the fourth box. The first three only make the fourth possible.',
w_task='Write a brief with a hold, a named releaser and two fallbacks.',
w_steps=['Choose a task where something leaves the building.',
         'Decide what the hold is, and how long it lasts.',
         'Name the person who releases it. A role is not a person.',
         'Write one fallback for the case that happens monthly.',
         'Write a second fallback for the case that would be worst.'],
w_bank=['Hold the … for … before …', '… releases the queue, or does not.',
        'If … , stop and tell …', 'If … , remove it and list it.',
        'Nothing in this run may … without …'],
w_check=['Is there a hold, and does somebody named watch it?',
         'Do your fallbacks name cases that really happen?',
         'Does each fallback say stop, flag or remove, rather than "use judgement"?',
         'Is anything irreversible happening without a signature?'],

t_title='The jobs not to give it yet, and why',
t_fig=figs.split('THE THREE TESTS',
                 'Hand it over',
                 ['the mistake is reversible',
                  'somebody sees it within the hour',
                  'we carry the cost ourselves',
                  'the worst case is a deleted draft'],
                 'Keep it with a person',
                 ['the mistake cannot be undone',
                  'nobody would notice until June',
                  'the client carries the cost',
                  'the worst case is on their books']),
t_fig_cap='Three tests, applied honestly, decide most of these arguments in about four minutes.',
t_body=[
 'Run the three tests before anything else, and run them out loud with somebody else in the '
 'room. Can this be taken back? Will anybody see it in time? Who pays if it is wrong? These '
 'take four minutes and settle most arguments, because they move the conversation off '
 'capability, where nobody can be proved right, and onto consequences, where everybody is '
 'looking at the same facts.',
 'Then write the fallback, and write it about something that actually happens. The useful '
 'if-sentence is not the dramatic one. It is the dull one you can predict: if the export is '
 'more than two days old, if an account has no email address, if two due dates are recorded, '
 'if the total cannot be read. Each of these arrives about once a month, and each of them '
 'has already cost somebody something.',
 'Finally, put the word Yet in the heading and mean it. A list of jobs kept with a person '
 'should name what would have to change for each one to come off, because otherwise it '
 'becomes a monument rather than a decision. In most cases what would have to change is a '
 'hold and a reviewer, which is a cost rather than a mystery, and a cost can be discussed.'],
t_say=[('Run the three tests: ', 'Can it be undone, will anybody see it, and who pays?'),
       ('Name the dull case: ', 'If the export is more than two days old, stop and tell Dalia.'),
       ('Say what would change it: ', 'This comes off the list when there is a two-hour hold somebody watches.')],
t_bound=('None of this makes the handed-over work correct. The three tests tell you what a '
         'mistake would cost, not how likely it is, and a fallback only covers the case you '
         'thought of. A job that passes all three tests can still fail every week, and '
         'nothing here will tell you that it is failing.'),
t_a=[('Can it be undone, will anybody see it, and who ____________?', 'pays'),
     ('If the export is more than two days old, stop and tell ____________.', 'Dalia'),
     ('This comes off the list when there is a two-hour ____________ somebody watches.', 'hold'),
     ('The useful if-sentence is not the dramatic one; it is the ____________ one.', 'dull'),
     ('Put the word ____________ in the heading and mean it.', 'Yet'),
     ('A hold and a reviewer is a ____________ rather than a mystery.', 'cost')],
t_b_rubric='Write the fallback sentence each brief is missing.',
t_b=[('Send the April reminders.', 'if an account has been settled since the export date, remove it and list it'),
     ('Extract the six fields.', 'if a total cannot be read with certainty, leave it blank and flag the row'),
     ('Sort the overnight inbox.', 'if a message matches two rules, place it in the higher category and flag it'),
     ('Answer the contract questions.', 'if no clause covers the question, answer "not addressed" and name the nearest clause')],

case=dict(
 title='Decision Clinic · Take credit notes off the list?',
 brief=[
  'Credit notes have been on the Not Yet list since it was written. Arclight issues about '
  'forty a month across eleven clients, each one takes Thomas about six minutes, and he has '
  'made two errors in fourteen months, both caught before they left.',
  'Jonas has built a version that would prepare all forty, hold them for two hours and '
  'present them as a single queue for release. He estimates Thomas’s time would fall from '
  'four hours a month to about twenty-five minutes.',
  'Marta will not agree. Her objection is not about the preparation. It is that releasing '
  'forty at once is a single click with forty consequences, and that nobody reviews forty '
  'things as carefully as they review one.'],
 exhibit=figs.datatable('FORTY CREDIT NOTES: TWO WAYS',
                        ['', 'Today', 'Proposed', 'Difference'],
                        [['Thomas’s time', '4 h', '25 min', '-3 h 35'],
                         ['decisions made', '40', '1', '-39'],
                         ['errors in 14 months', '2', 'unknown', '—'],
                         ['value per note', '~340 EUR', '~340 EUR', 'same'],
                         ['worst single release', '1 note', '40 notes', '+39']]),
 exhibit_cap='The row Marta keeps pointing at is the last one.',
 exhibit_note='The error figure of two is over fourteen months of one-at-a-time work. There '
              'is no figure for the proposed method because it has not been run.',
 voices=[('Jonas Riedel', 'co-founder, systems',
          'Three and a half hours a month, and Thomas still signs. The hold is real, the '
          'queue is visible, and nothing goes without a human release.'),
         ('Marta Olsen', 'risk and liability',
          'One click, forty consequences. Nobody checks the thirty-eighth item on a list the '
          'way they check a single document in front of them. You are not keeping the '
          'review, you are keeping the appearance of it.'),
         ('Thomas Reed', 'service delivery',
          'She is right about the thirty-eighth. I would also like my four hours back, and '
          'I am aware that those two statements are in tension.')],
 steps=[('Find it', 'How many decisions does the release become, and how many are there now?'),
        ('Compare it', 'What does the hold preserve, and what does the batch remove?'),
        ('Infer it', 'Why does Marta say the review becomes an appearance?'),
        ('Weigh it', 'Three and a half hours a month against attention spread over forty items.'),
        ('Decide', 'Should credit notes come off the list, and under what conditions?')],
 analysis=[('Find it. How many decisions does the proposal replace forty with?', 'one'),
           ('Compare it. What does the two-hour hold actually preserve?', 'the opportunity to stop, but not necessarily the attention to each item'),
           ('Infer it. What is Marta’s argument about attention?', 'that nobody reviews the thirty-eighth item on a list as carefully as a single document'),
           ('Weigh it. What does Thomas concede?', 'that Marta is right and that he still wants the four hours back'),
           ('Decide. What condition would answer Marta’s objection?', 'releasing in small batches, or requiring a separate confirmation for any note above a value')],
 decision='Write the conditions under which credit notes come off the Not Yet list.',
 decision_steps=['Say whether they come off, in the first sentence.',
                 'Name the condition that answers the attention problem, not only the hold.',
                 'Put a number on the batch size or the value threshold.',
                 'Say what measurement would put them back on the list.'],
 bank=['Credit notes come off the list provided that…', 'No release may contain more than…',
       'Any note over … requires…', 'They return to the list if…',
       'This will be reviewed after … , using…'],
 outcome='They came off the list with two conditions: no release larger than eight notes, '
         'and any note over 500 euros confirmed separately. Thomas’s time fell to about '
         'fifty minutes a month rather than twenty-five, which Jonas had not budgeted for '
         'and accepted. In eleven months there were three errors, all caught at release, all '
         'in batches of eight. Marta pointed out that three in eleven months is worse than '
         'two in fourteen, and that nobody had agreed in advance what number would count as '
         'too many.',
 outcome_q=[('What did the batch limit cost, and what did it buy?', 'it doubled the time saved to fifty minutes, and kept each release small enough to review'),
            ('What did Marta identify afterwards that nobody had done?', 'agreeing in advance what error rate would count as unacceptable')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · The April reminder run',
 task=['This is the brief for the April run, written after everything Book 1 has covered. '
       'It is Dalia’s best attempt, and it is much better than the brief in Unit 1.',
       'It still has no if-sentence in it. The export will be four days old on the morning '
       'the run goes out, because it always is, and nothing in the brief has anything to '
       'say about that.'],
 draft=['Run the April reminders across the ordinary overdue accounts.',
        'Use house style version 2 and the usual ledger export.',
        'One letter per account, with the amount and due date in the first two lines.',
        'Hold the queue for a bit before anything goes out.',
        'Somebody should check it over before release.',
        'Come back to me with the numbers afterwards.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A good brief with no fallback, which is to say a good brief with a hole in it.',
 asked=['Nothing sent against a settled account',
        'A hold with a named releaser',
        'A stop rule for a stale export'],
 back=['9 letters to accounts paid since the export',
       'A 20-minute hold nobody watched',
       'The run completed on stale data'],
 gap='The usual ledger export named no date and no age limit, hold it for a bit named no '
     'duration, and somebody should check it named nobody at all.',
 back_cap='Nine clients chased for money they had already paid, four days earlier.',
 back_note='Every one of the nine had paid by transfer after the export was taken. The run '
           'was correct against its data and wrong against the world.',
 diagnosis=[('[1] "the ordinary overdue accounts" — which accounts, by what test?', 'unscoped set'),
            ('[2] "the usual ledger export" — taken when, and how old may it be?', 'unscoped set'),
            ('[3] "hold the queue for a bit" — for how long?', 'unstated criterion'),
            ('[4] "somebody should check it" — who, by name?', 'unstated criterion'),
            ('[5] "before release" — released by whom, and on what signal?', 'undefined done'),
            ('[6] "come back with the numbers" — which numbers, by when?', 'undefined done')],
 rewrite='Rewrite the brief so that it carries two if-sentences and a named releaser, and so '
         'that a four-day-old export stops the run instead of feeding it.',
 scaffold=['Why April’s run matters more than usual, in one clause',
           'Which accounts are in, and what is excluded entirely from this run',
           'The export with its date and its maximum age, and the house style version',
           'What each letter contains, and the length of the hold',
           'The queue, the named releaser, and the figures that come back',
           'Two if-sentences: the stale export, and the account paid since the export'],
 bank=['Run the … reminders so that …', 'Include every account that … ; exclude … entirely.',
       'Use the export dated … ; it must be no more than … old.',
       'Hold the queue for … ; … releases it.',
       'Return … and … by … .', 'If … , stop the run and tell … . If … , remove it and list it.'],
 check=['Does the brief contain at least two if-sentences?',
        'Does each if-sentence name a case that really happens?',
        'Is the releaser a person with a name, not a role?',
        'Is there a maximum age on the data the run uses?'],
 model=['Run the April reminders without chasing anybody who has already paid',
        'The 338 ordinary overdue accounts on the 14 March ledger; credit notes and refunds are excluded entirely and remain with a person',
        'The ledger export dated 14 March, which must be no more than 2 days old on the morning of the run, and house style version 2',
        '1 letter per account with the amount and due date in the first 2 lines; the queue is held for 2 hours before any letter leaves',
        'A queue of letters released by Fatima, plus a sent count, an exclusions list and the age of the export in days, returned by 16:00 on the day of the run',
        'If the export is more than 2 days old, stop the run and tell Dalia; if an account shows a payment dated after the export, remove it from the queue and list it'],
 cost='9 clients chased for money paid 4 days earlier, 2 of whom replied within the hour, 1 '
      'written complaint, and about 3 hours of apologies for a 2-day data age that nobody '
      'had ever put a limit on.'),

rev_fig=figs.split('NO FALLBACK AND A FALLBACK',
                   'No if-sentence',
                   ['Process the invoices.',
                    'Send the reminders.',
                    'Sort the inbox.',
                    'Answer the questions.'],
                   'With an if-sentence',
                   ['If 2 dates appear, use the later.',
                    'If paid since the export, remove it.',
                    'If 2 rules match, take the higher.',
                    'If no clause covers it, say so.']),
rev_fig_cap='Book 1 in one picture. Everything on the right costs eight words.',
rev=dict(
 read=[('The test for keeping a job with a person is', ['how hard it is', 'what a mistake would cost', 'how long it takes', 'who asked'], 1),
       ('The first conditional is used for', ['imagined situations', 'situations that really happen', 'past regrets', 'polite requests'], 1),
       ('The test people most often forget is', ['reversibility', 'whether anybody is looking in time', 'cost', 'difficulty'], 1),
       ('In the Clinic, what answered Marta’s objection?', ['a longer hold', 'a batch limit', 'more staff', 'nothing'], 1)],
 listen_text='Two habits close Book One. Run the three tests before you hand anything over: '
             'can it be undone, will anybody see it in time, and who pays if it is wrong. '
             'Then end every brief with an if-sentence about something that really happens. '
             'Not the dramatic case. The dull one that arrives about once a month and has '
             'already cost somebody something.',
 listen=[('Can it be ____________, will anybody see it, and who pays?', 'undone'),
         ('End every brief with an ____________.', 'if-sentence'),
         ('Not the dramatic case. The ____________ one.', 'dull'),
         ('It arrives about once a ____________.', 'month')],
 speak=['Name a task you would hand over tomorrow. Your partner runs the three tests on it aloud.',
        'Then write the if-sentence it would need, together, in under a minute.'],
 write='Write a brief with a hold, a named releaser and two if-sentences.',
 vocab=[('A mistake impossible to undo is ____________.', 'irreversible'),
        ('A small first run used to find out what happens is a ____________.', 'pilot'),
        ('Formal approval by a named person is ____________.', 'sign-off'),
        ('The event that causes a rule to apply is the ____________.', 'trigger'),
        ('The amount a company could lose is its ____________.', 'exposure')],
 gram=[('If an invoice ____________ two dates, use the later one.', 'shows'),
       ('If the total cannot be read, ____________ the row.', 'flag'),
       ('____________ the figure is readable, flag it.', 'Unless'),
       ('If it does not arrive by ten, we ____________ it marked.', 'will send'),
       ('If two rules match, the higher one ____________ .', 'wins')]),

found=['Write the Not Yet list for your own work, with three items and a reason each.',
       'Add an if-sentence to the next brief you write, about something that really happens.',
       'Find one safeguard in your workplace that is a rule with no person attached.',
       'Ask what would have to change for one item on your list to come off it.'],
end_line='The error was not the frightening part. The way it was caught was the frightening part.',
end_next='Next: Book 2, Delegating to People and Systems',
)
