# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='What Has Been Happening',
gram='present perfect continuous',
ai='what happens when it fails halfway through',
strap='CEFR B1 · Grammar: present perfect continuous · AI: what happens when it fails halfway through',
cando=['use the present perfect continuous to describe something still going on',
       'say how long something has been happening, with for or since',
       'describe what a half-finished run leaves behind',
       'write an instruction for a process that stops in the middle',
       'explain why a failure that says nothing is worse than one that stops loudly'],
hero=('A RUN THAT STOPPED AT ITEM TWO HUNDRED AND ELEVEN',
      ['Two hundred and ten letters had already gone.',
       'Nothing anywhere said that the other hundred had not.'],
      [(860, 'grey', 'short'), (1600, 'purple', 'long'), (2340, 'teal', 'short')]),
hero_cap='The half-finished state: the thing nobody designs for and everybody meets.',

warm=['What happens at your work when a job stops halfway through?',
      'How long have you been waiting for something that should already have arrived?',
      'Would you rather a failure stopped everything loudly, or carried on quietly?'],
read=[
 'In September a reminder run stopped at item two hundred and eleven of three hundred and '
 'forty-one. A supplier file had changed shape and a step could not read it. Two hundred '
 'and ten letters had been sent. One hundred and thirty-one had not. Nothing recorded which '
 'was which.',
 'Fatima has been checking the sent log every morning since, which takes about four minutes '
 'and which she says she will go on doing until she trusts the arrangement again. The thing '
 'that unsettled her was not that the run failed. Runs fail. It was that the failure was '
 'silent, and that for two days everybody believed the job had finished.',
 'Nobody discovered it until a client rang about a letter they had expected and not '
 'received, at which point the question was not what went wrong but what state everything '
 'had been left in. That question took most of a day. It should have taken ten seconds, '
 'because the run should have said so.',
 'A half-finished run leaves three kinds of thing behind. Work that is done, work that is '
 'not done, and work nobody can classify, which is usually the item it stopped on. Item two '
 'hundred and eleven was in the third category for most of a day, and when it was finally '
 'resolved it turned out that the letter had been sent twice.',
 'The rule now is that every run writes what it has been doing as it goes, and that any run '
 'which stops before the end says so loudly and names the last item it completed. The log '
 'costs almost nothing. The thing it buys is that the question "where did it get to" has an '
 'answer, which is the difference between ten seconds and a day.'],
c_a=[('Where did the run stop?', 'at item two hundred and eleven of three hundred and forty-one'),
     ('Why did it stop?', 'a supplier file had changed shape and a step could not read it'),
     ('How was the failure discovered?', 'a client rang about a letter they had expected and not received'),
     ('What three kinds of thing does a half-finished run leave?', 'work done, work not done, and work nobody can classify'),
     ('What is the rule now?', 'every run logs what it has been doing and any run that stops says so and names the last completed item')],
c_b=[('The run completed all three hundred and forty-one items.', 'F'),
     ('Fatima checks the sent log every morning.', 'T'),
     ('The failure announced itself immediately.', 'F'),
     ('Item two hundred and eleven had been sent twice.', 'T'),
     ('Working out the state took about ten seconds.', 'F'),
     ('The log is described as expensive.', 'F')],
c_c=[('Two hundred and ten letters had been ____________.', 'sent'),
     ('The failure was ____________.', 'silent'),
     ('For two days everybody believed the job had ____________.', 'finished'),
     ('Work nobody can ____________ is usually the item it stopped on.', 'classify'),
     ('Any run that stops before the end says so ____________.', 'loudly'),
     ('The question "where did it get to" has an ____________.', 'answer')],
c_d=[('The real problem was that the failure was ( silent / frequent ).', ['silent', 'frequent'], 0),
     ('The item it stopped on turned out to have been', ['missed', 'sent twice', 'cancelled', 'deleted'], 1),
     ('Establishing the state took', ['ten seconds', 'two hours', 'most of a day', 'a week'], 2),
     ('The log is valuable because it answers', ['why it failed', 'where it got to', 'who ran it', 'what it cost'], 1),
     ('Fatima says she will check the log until she', ['is told to stop', 'trusts the arrangement again', 'leaves', 'retires'], 1)],
c_e=('Present perfect or present perfect continuous? Put each one in the right column.',
     [('I have been checking the log every morning.', 'Continuous — still going on'),
      ('I have checked the log.', 'Simple — the result'),
      ('She has been waiting since Tuesday.', 'Continuous — still going on'),
      ('She has sent 210 letters.', 'Simple — the result'),
      ('They have been running it all week.', 'Continuous — still going on'),
      ('They have finished the run.', 'Simple — the result')],
     ['Continuous — still going on', 'Simple — the result']),

v_fig_title='WHAT A FAILURE LEAVES BEHIND',
v_fig=[('doc', 'a log'), ('scale', 'recovery'), ('basket', 'an orphan'),
       ('note', 'an alert'), ('chart', 'a save point'), ('bulb', 'resilient')],
v_fig_cap='Six words for the state a process is in when it stops in the middle.',
vocab=[
 ('failure', 'an occasion when something stops working as it should'),
 ('breakdown', 'a complete stop caused by something going wrong'),
 ('interruption', 'a break in something that was continuing'),
 ('resume', 'to start again from where something stopped'),
 ('restart', 'to begin again from the beginning'),
 ('retry', 'to attempt the same thing again after a failure'),
 ('recovery', 'the work of getting back to a known good state'),
 ('incomplete', 'started but not finished'),
 ('duplicate', 'a second copy of something that should exist once'),
 ('orphan', 'an item left behind with nothing to attach it to'),
 ('stranded', 'left part-way through, unable to go forward or back'),
 ('log', 'a running written record of what has happened'),
 ('crash', 'a sudden and complete stop'),
 ('resilient', 'able to keep working, or recover quickly, when something fails'),
 ('degrade', 'to keep working but at a reduced level'),
 ('notify', 'to tell somebody formally that something has happened'),
 ('alert', 'a message raised to get somebody’s attention at once'),
 ('fault', 'the specific thing that has gone wrong'),
 ('save point', 'a recorded position that work can be resumed from'),
 ('stall', 'to stop moving without stopping altogether')],
v_a=[('A running written record of what has happened is a ____________.', 'log'),
     ('An item left behind with nothing to attach it to is an ____________.', 'orphan'),
     ('To start again from where something stopped is to ____________.', 'resume'),
     ('A recorded position that work can be resumed from is a ____________.', 'save point'),
     ('Able to keep working when something fails is ____________.', 'resilient'),
     ('A second copy of something that should exist once is a ____________.', 'duplicate'),
     ('A message raised to get attention at once is an ____________.', 'alert'),
     ('To keep working but at a reduced level is to ____________.', 'degrade')],
v_b=[('To resume is to start again from', 'where something stopped.'),
     ('Recovery is the work of getting back', 'to a known good state.'),
     ('Stranded means left part-way through,', 'unable to go forward or back.'),
     ('A fault is the specific thing', 'that has gone wrong.'),
     ('To notify somebody is to tell them formally', 'that something has happened.')],

g_title='Grammar: present perfect continuous',
g_rule=['Form: have or has been + -ing. I have been checking the log every morning.',
        'It describes something that started in the past and is still going on.',
        'Use for with a length of time and since with a starting point.',
        'The simple form reports a result; the continuous reports the activity.'],
g_fig=('LOOSE',
       ['It has been running a while.',
        'We have had problems.',
        'She has been on it for ages.',
        'It stopped at some point.'],
       'PRECISE',
       ['It has been running since 06:14.',
        'It has failed 3 times this month.',
        'She has been checking it for 11 days.',
        'It stopped at item 211 of 341.'],
       'a duration with no number in it',
       'a number, a time and a position'),
g_fig_cap='The continuous is only useful when it carries a for or a since.',
g_a=[('I ____________ been checking the log every morning. (have)', 'have'),
     ('It has been ____________ since quarter past six. (run)', 'running'),
     ('She has been checking it ____________ eleven days. (for)', 'for'),
     ('They have been waiting ____________ Tuesday. (since)', 'since'),
     ('We ____________ been having trouble with that file. (have)', 'have'),
     ('He has been ____________ on it all week. (work)', 'working'),
     ('It has ____________ failing about once a month. (be)', 'been'),
     ('How long ____________ you been running it? (have)', 'have'),
     ('Nothing has been ____________ us when it stops. (tell)', 'telling')],
g_b=[('I ( have checked / have been checking ) the log every morning since September.', ['have checked', 'have been checking'], 1),
     ('It has been ____ since quarter past six.', ['run', 'ran', 'running', 'runs'], 2),
     ('She has been checking it ____ eleven days.', ['since', 'for', 'during', 'from'], 1),
     ('They have been waiting ____ Tuesday.', ['for', 'since', 'during', 'by'], 1),
     ('It has ____ failing about once a month.', ['be', 'being', 'been', 'was'], 2),
     ('How long ____ you been running it?', ['has', 'have', 'did', 'are'], 1)],

d1=dict(title='Where did it get to?',
        fig=(['It stopped. We know that much.', 'Where did it get to?'],
             ['Nobody can tell.', 'Then that is the problem, not the stop.']),
        cap='Dalia and Jonas, on the morning the client rang.',
        lines=[('Dalia', 'The run stopped. How many letters went out?'),
               ('Jonas', 'I do not know yet.'),
               ('Dalia', 'How long will it take you to find out?'),
               ('Jonas', 'Most of the day. I have to compare the queue against the sent box.'),
               ('Dalia', 'Most of a day to answer where did it get to.'),
               ('Jonas', 'There is nothing that recorded it as it went.'),
               ('Dalia', 'So the failure is not the problem. Runs fail.'),
               ('Jonas', 'The failure is not the problem. The silence afterwards is.'),
               ('Dalia', 'And it has been silent for two days.'),
               ('Jonas', 'Two days, during which three of us have been saying it went fine.'),
               ('Dalia', 'What would have made this ten seconds instead of a day?'),
               ('Jonas', 'A line written after every item. That is all. I did not think to.')],
        a=[('What question cannot be answered quickly?', 'how many letters went out'),
           ('How long will it take Jonas to find out?', 'most of the day'),
           ('What does Jonas say the real problem is?', 'the silence after the failure, not the failure itself'),
           ('How long had it been silent?', 'two days'),
           ('What would have made it ten seconds?', 'a line written after every item')],
        b=[('I have to compare the queue against the ____________ box.', 'sent'),
           ('The ____________ afterwards is the problem.', 'silence'),
           ('Three of us have been saying it went ____________.', 'fine'),
           ('A line written after every ____________.', 'item')]),
d2=dict(title='Stop loudly',
        fig=(['Should it carry on past a bad item?', 'Never, or sometimes?'],
             ['Sometimes is the honest answer.', 'Then say which times.']),
        cap='Marta and Thomas, writing the rule.',
        lines=[('Marta', 'A run that hits something it cannot read should stop. Everything stops.'),
               ('Thomas', 'Three hundred and forty letters held up by one odd supplier file?'),
               ('Marta', 'Yes. I would rather hold three hundred than guess about one.'),
               ('Thomas', 'That is one client waiting a day because another client has a strange file.'),
               ('Marta', 'It is. I am not pretending that is free.'),
               ('Thomas', 'What about skip the item, log it, carry on, and raise it at the end?'),
               ('Marta', 'Then you have to be certain the skipped item is really skipped.'),
               ('Thomas', 'Which is exactly what we could not establish last week.'),
               ('Marta', 'So until we can, stop everything. When we can, we revisit it.'),
               ('Thomas', 'Agreed for now. I think stopping everything will cost more than it saves.'),
               ('Marta', 'Possibly. It will cost it visibly, which is the part I want.'),
               ('Thomas', 'That is a real argument and I still do not fully accept it.')],
        unresolved=True,
        a=[('What does Marta want a run to do when it hits a bad item?', 'stop everything'),
           ('What is Thomas’s objection?', 'that one odd file holds up three hundred and forty letters for other clients'),
           ('What alternative does Thomas propose?', 'skip the item, log it, carry on and raise it at the end'),
           ('Why does Marta resist that for now?', 'because you must be certain the skipped item really was skipped'),
           ('What does Marta want about the cost?', 'that it is paid visibly rather than invisibly')],
        b=[('I would rather hold three hundred than ____________ about one.', 'guess'),
           ('I am not pretending that is ____________.', 'free'),
           ('Skip the item, ____________ it, carry on.', 'log'),
           ('It will cost it ____________.', 'visibly')]),

speak=[('How long has it been happening?',
        ['Student A: name three things at work that are still going on.',
         'Student B: ask how long, and insist on for or since with a real figure.',
         'Find the one neither of you can date. That is the interesting one.']),
       ('Spoken specification: brief the failure',
        ['Choose a repeating job. Brief it aloud, including what it does when it cannot continue.',
         'Your partner asks what state the work is left in.',
         'If you cannot answer in one sentence, your brief has a hole in it.']),
       ('Loud or quiet?',
        ['In pairs, name four failures that could happen in your work.',
         'For each, decide whether it would announce itself or go unnoticed.',
         'Pick the quietest one and say what would make it noisy.'])],

ext_title='The silence is worse than the failure',
ext_fig=figs.datatable('WHAT THE RUN LEFT BEHIND',
                       ['Category', 'Items', 'Known at the time?', 'Time to establish'],
                       [['sent', '210', 'no', '4 hours'],
                        ['not sent', '130', 'no', '4 hours'],
                        ['item 211', '1', 'no', '6 hours'],
                        ['sent twice', '1', 'no', 'found at the end'],
                        ['total', '341', '—', 'most of a day']]),
ext_fig_cap='Every row in the third column reads the same. That is the whole failure.',
ext=[
 'Processes fail, and a company that designs on the assumption that they will not is '
 'designing for a world it does not live in. The useful question is not how to prevent '
 'failure but what state a failure leaves things in, and whether anybody can find that out '
 'quickly. Those two questions are answerable in advance and almost nobody answers them.',
 'A run that stops part way leaves three categories behind: the work it finished, the work '
 'it never started, and one item in the middle whose state is genuinely unknown. The third '
 'category is small and it is where almost all of the recovery time goes, because '
 'establishing whether one letter was sent can take longer than establishing what happened '
 'to the other three hundred and forty.',
 'What makes this expensive is silence. A failure that announces itself costs you the '
 'failure. A failure that says nothing costs you the failure plus however long it takes '
 'somebody to notice, plus the work done in the meantime on the belief that everything was '
 'fine. At Arclight that was two days, three people repeating that the run had gone well, '
 'and a client finding out before the company did.',
 'The cure is cheap and dull. Write a line as each item completes, so that where did it get '
 'to has an answer. Make a run that stops raise an alert rather than simply ending. Name the '
 'last completed item in the alert, so that the recovery starts from a position rather than '
 'from an investigation.',
 'There is a harder question underneath, which is what a run should do when it meets '
 'something it cannot handle: stop everything, or skip and carry on. Stopping is safe and '
 'expensive, and it makes one client’s odd file into every client’s delay. Skipping is '
 'cheaper and requires you to be genuinely certain that the skipped item is recorded as '
 'skipped, which is exactly the certainty a company that has just had a silent failure does '
 'not yet have.'],
dp1=('Detection delay',
     'Incident analyses across industries commonly report that the time to detect a failure '
     'exceeds the time to repair it, particularly where failures are not accompanied by an '
     'explicit alert.',
     'Source: general operations and reliability literature, 2026. Ratios vary widely.'),
e_a=[('What is the useful question about failure?', 'what state a failure leaves things in, and whether anybody can find out quickly'),
     ('Which of the three categories costs the most time?', 'the single item in the middle whose state is unknown'),
     ('What does silence add to the cost of a failure?', 'the time until somebody notices, plus the work done believing everything was fine'),
     ('What is the cheap cure?', 'a line written as each item completes, and an alert naming the last completed item'),
     ('What is the harder question?', 'whether a run should stop everything or skip and carry on')],
e_b=[('Designing on the assumption that nothing fails is realistic.', 'F'),
     ('The unknown middle item is a small category.', 'T'),
     ('A silent failure costs only the failure itself.', 'F'),
     ('Writing a line per item is described as expensive.', 'F'),
     ('Stopping everything makes one client’s problem into everybody’s delay.', 'T'),
     ('Skipping requires certainty that the skip was recorded.', 'T')],

w_model=(
 'Purpose: make sure that a run which stops can be picked up without a day of investigation. '
 'Scope: all outbound runs of more than 20 items. Inputs: the queue and the run log. '
 'Criteria: 1 log line per item, written as the item completes, naming the item and the '
 'time; a run that stops raises an alert within 2 minutes naming the last completed item; '
 'the run does not continue past an item it cannot read. Done: 1 completed run or 1 alert, '
 'and a log covering every item attempted. Fallback: if the run cannot write its log, it '
 'stops before the first item rather than running without a record.'),
w_fig=figs.chain('WHAT A RUN OWES YOU WHEN IT STOPS',
                 ['The last item it finished', 'The time it stopped',
                  'What it was doing', 'What it has not touched',
                  'An alert, within two minutes']),
w_fig_cap='Five things. All of them are cheap to produce and impossible to reconstruct.',
w_task='Write the failure behaviour for a process you run.',
w_steps=['Name the process and say how many items a typical run has.',
         'Say what gets written as each item completes.',
         'Say what happens when the process meets something it cannot handle.',
         'Say who is told, how quickly, and what the message must name.',
         'Say what happens if the process cannot write its own record.'],
w_bank=['Write … as each item …', 'If the run cannot … , it …',
        'An alert is raised within … naming …', '… is told within …',
        'If the log cannot be written, …'],
w_check=['Does your process write something as it goes, not only at the end?',
         'Does a stop produce an alert rather than silence?',
         'Does the alert name the last completed item?',
         'Have you decided between stopping and skipping, and written the reason?'],

t_title='What happens when it fails halfway through',
t_fig=figs.split('SILENT AND LOUD',
                 'Silent failure',
                 ['The run ends early.',
                  'Nothing is written.',
                  'Everybody assumes it finished.',
                  'A client finds out first.'],
                 'Loud failure',
                 ['The run stops at item 211.',
                  'The log names 210 completed.',
                  'An alert reaches Dalia in 2 minutes.',
                  'Recovery starts from a position.']),
t_fig_cap='Both columns describe the same failure. Only one of them costs a day.',
t_body=[
 'Decide in advance what a run does when it cannot continue, because it will meet something '
 'it cannot handle and the decision will otherwise be made by whatever happens to occur. '
 'There are only two reasonable answers, stop everything or skip and record, and the choice '
 'depends on whether you can be certain the skip was recorded.',
 'Then insist on a running record rather than a final one. A line per item, written as the '
 'item completes, is the entire difference between a ten-second answer and a day of '
 'comparing lists. This is the cheapest thing in this book and it is skipped more often than '
 'anything else, because nothing demands it until the first time something stops.',
 'And make the stop loud. A process that ends early and says nothing produces a company '
 'that believes the work was done, which is strictly worse than a company that knows the '
 'work failed. The alert should name the last completed item, because recovery that starts '
 'from a position is a task and recovery that starts from nothing is an investigation.'],
t_say=[('Decide in advance: ', 'If an item cannot be read, the run stops and nothing further is sent.'),
       ('Record as you go: ', 'Write one line per item as it completes, with the time.'),
       ('Make it loud: ', 'A run that stops raises an alert within two minutes, naming the last item.')],
t_bound=('A log tells you where a run got to. It does not tell you whether what it did was '
         'right. Two hundred and ten letters can be logged perfectly, in order, with '
         'timestamps, and every one of them can have gone to the wrong client; the log will '
         'record that cleanly and reassuringly.'),
t_a=[('If an item cannot be read, the run ____________.', 'stops'),
     ('Write one line per item as it ____________.', 'completes'),
     ('A run that stops raises an ____________ within two minutes.', 'alert'),
     ('There are only two reasonable answers: stop everything or ____________ and record.', 'skip'),
     ('This is the ____________ thing in this book.', 'cheapest'),
     ('Recovery that starts from nothing is an ____________.', 'investigation')],
t_b_rubric='Write the failure instruction each brief is missing.',
t_b=[('Send the April reminders.', 'if an item cannot be read, stop, log the last item sent and alert Dalia within two minutes'),
     ('Extract the supplier invoices.', 'if a file cannot be opened, skip it, record it as skipped and continue'),
     ('Sort the overnight inbox.', 'if the rule set cannot be loaded, stop before the first message and raise an alert'),
     ('Produce the client pages.', 'if a ledger is missing, produce the other pages and name the missing client in the alert')],

case=dict(
 title='Decision Clinic · Stop everything, or skip and carry on?',
 brief=[
  'Since September every run stops completely when it meets something it cannot read. In '
  'four months this has happened nine times.',
  'Seven of the nine were one supplier file in an unusual format, affecting one client. On '
  'each occasion the other ten clients’ letters were held for between four and twenty-six '
  'hours while somebody fixed the file.',
  'Thomas has proposed the skip-and-record alternative three times and been refused three '
  'times. Marta’s position has not changed: she will accept skipping when somebody can show '
  'her that a skipped item is reliably recorded as skipped.'],
 exhibit=figs.datatable('NINE STOPS IN FOUR MONTHS',
                        ['', 'Stops', 'Caused by', 'Letters held', 'Hours held'],
                        [['client 7 file', '7', '1 supplier format', '2,310', '94'],
                         ['ledger missing', '1', 'a late export', '338', '6'],
                         ['queue corrupt', '1', 'genuine fault', '341', '3'],
                         ['total', '9', '—', '2,989', '103'],
                         ['items actually unsafe', '—', '—', '9', '—']]),
 exhibit_cap='Nine unsafe items. Two thousand nine hundred and eighty-nine letters held because of them.',
 exhibit_note='The skip-and-record alternative has never been tested, so the reliability '
              'Marta wants demonstrated has no evidence either way.',
 voices=[('Thomas Reed', 'service delivery',
          'A hundred and three hours of held letters to protect nine items. Ten clients pay '
          'for one client’s supplier format, nine times in four months.'),
         ('Marta Olsen', 'risk and liability',
          'The nine items are the ones we cannot account for. In September we could not '
          'account for one item and it cost a day. I want to see a skip recorded reliably '
          'before I agree that skipping is safe.'),
         ('Jonas Riedel', 'systems and workflows',
          'I can make a skip write two records in two different places and reconcile them at '
          'the end of the run. If they disagree, the run stops. That is testable in a week.')]
 ,
 steps=[('Find it', 'How many items were unsafe, and how many letters were held?'),
        ('Compare it', 'What does stopping everything buy, and who pays for it?'),
        ('Infer it', 'Why has nobody been able to settle this argument in four months?'),
        ('Weigh it', '103 hours of delay against one unaccounted item.'),
        ('Decide', 'What happens next, and what would settle it?')],
 analysis=[('Find it. How many letters were held, and for how many unsafe items?', 'two thousand nine hundred and eighty-nine letters, for nine items'),
           ('Compare it. Who pays for the stop-everything rule?', 'the ten clients whose letters are held because of another client’s file'),
           ('Infer it. Why is the argument stuck?', 'because the alternative has never been tested, so neither side has evidence'),
           ('Weigh it. What is the real content of Marta’s objection?', 'not that skipping is wrong, but that nobody has shown a skip is reliably recorded'),
           ('Decide. What is the cheapest way to settle it?', 'build Jonas’s double-record skip and test it, since it answers Marta’s actual condition')],
 decision='Write what Arclight does for the next month.',
 decision_steps=['Say what happens to the stop-everything rule in the meantime.',
                 'Say exactly what will be built and tested, and by when.',
                 'Say what result would change the rule, with a number.',
                 'Say what happens if the test does not produce that result.'],
 bank=['Until … , runs continue to …', 'We will build … and test it on …',
       'The rule changes if … in … runs.', 'If the test shows … , then …',
       'This is reviewed on …'],
 outcome='Jonas built the double-record skip in six days and it ran on client 7 for a month: '
         '31 runs, 14 skips, no disagreement between the two records. Marta agreed to '
         'skip-and-record for format faults only, keeping stop-everything for anything '
         'affecting a ledger or a payment. Held hours fell from about twenty-six a month to '
         'under two. Thomas had been right for four months and had no way to prove it, which '
         'he says is the part worth remembering.',
 outcome_q=[('Why had the argument not moved for four months?', 'because Marta’s condition was evidential and nobody had produced any evidence'),
            ('What distinction did the final rule make?', 'between format faults, which may be skipped, and anything touching a ledger or a payment, which still stops everything')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · The September reminder run',
 task=['This is the brief for the run that stopped at item two hundred and eleven. It is a '
       'good brief by Book 1 standards: it has scope, criteria, a hold and a fallback.',
       'The fallback covers an account with no email address. It says nothing about the run '
       'itself stopping, because the possibility had not occurred to anybody.'],
 draft=['Run the September reminders across the overdue accounts.',
        'Work through the queue and send each one.',
        'Keep going until you have done them all.',
        'If an account has no email address, skip it and list it.',
        'Tell me when it has finished.',
        'If anything odd comes up, deal with it sensibly.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief with a fallback for one case and nothing for the process stopping.',
 asked=['A log line per item as it goes',
        'A loud stop naming the last item',
        'A decision between stopping and skipping'],
 back=['No record until the end',
       'A silent stop at item 211',
       'The run neither stopped nor skipped cleanly'],
 gap='Keep going until you have done them all has no instruction for not being able to, tell '
     'me when it has finished never fires if it does not finish, and deal with it sensibly '
     'covers the one case nobody had imagined.',
 back_cap='Two hundred and ten sent, one hundred and thirty not, and nothing saying which.',
 back_note='The brief’s only report fires on completion. A run that does not complete '
           'produces no report at all, which is why the silence lasted two days.',
 diagnosis=[('[1] "the overdue accounts" — and if the ledger is unreadable?', 'missing condition'),
            ('[2] "work through the queue" — recording what, as it goes?', 'undefined done'),
            ('[3] "until you have done them all" — and if one cannot be done?', 'missing condition'),
            ('[4] "tell me when it has finished" — and if it does not finish?', 'undefined done'),
            ('[5] "if anything odd comes up" — how odd is odd?', 'unbounded quantity'),
            ('[6] "deal with it sensibly" — how many such cases may it handle alone?', 'unbounded quantity')],
 rewrite='Rewrite the brief so that the run records its position as it goes and cannot stop '
         'without saying so.',
 scaffold=['Why a run that stops quietly is worse than one that stops loudly',
           'Which runs this covers, and what size of run it applies to',
           'The queue and the run log, and where the log is written',
           'What is written per item, and what the run does when it cannot continue',
           'What the completed run or the alert contains, and how fast the alert arrives',
           'What the run does if it cannot write its own log'],
 bank=['Run … so that … can be answered in seconds.',
       'This applies to any run of more than … items.',
       'Write … to … as each item …', 'If an item cannot be … , the run …',
       'Raise an alert within … naming …', 'If the log cannot be written, …'],
 check=['Does something get written before the run finishes?',
        'Does a failure produce a message, rather than an absence of one?',
        'Does the alert name a position, not just a fault?',
        'Have you chosen between stopping and skipping, and said why?'],
 model=['Make sure a run that stops can be picked up in seconds rather than investigated for a day',
        'All outbound runs of more than 20 items; this run covers the 341 overdue accounts on the 2 September ledger',
        'The held queue, the 2 September ledger export, and the run log written to the shared log folder',
        'Write 1 log line as each item completes, naming the item and the time; if an item cannot be read, the run stops and sends nothing further',
        '1 completed run or 1 alert within 2 minutes naming the last completed item, plus a log covering every item attempted',
        'If the run cannot write to the log folder, it stops before the first item rather than running without a record'],
 cost='2 days in which 3 people reported a completed run that had stopped at item 211, most '
      'of a working day establishing what had been sent, 1 letter sent twice, and 1 client '
      'who discovered the failure before Arclight did.'),

rev_fig=figs.split('PERFECT AND PERFECT CONTINUOUS',
                   'Simple — the result',
                   ['She has sent 210 letters.',
                    'They have finished the run.',
                    'I have checked the log.',
                    'It has failed three times.'],
                   'Continuous — the activity',
                   ['She has been sending since 06:14.',
                    'They have been running it all week.',
                    'I have been checking it for 11 days.',
                    'It has been failing about monthly.']),
rev_fig_cap='The left column says what is now true. The right column says what is still going on.',
rev=dict(
 read=[('The main cost of the September failure was', ['the failure itself', 'the silence afterwards', 'the supplier', 'the client'], 1),
       ('The present perfect continuous uses', ['have + past participle', 'have been + -ing', 'was + -ing', 'had + past participle'], 1),
       ('An alert after a stop should name', ['the cause only', 'the last completed item', 'the client', 'the cost'], 1),
       ('In the Clinic, what unblocked a four-month argument?', ['a vote', 'a tested double record', 'a new rule', 'more staff'], 1)],
 listen_text='Three things. Decide in advance what a run does when it cannot continue, '
             'because it will meet something it cannot handle. Write a line as each item '
             'completes, because that is the difference between ten seconds and a day. And '
             'make the stop loud, naming the last completed item, because recovery from a '
             'position is a task and recovery from nothing is an investigation.',
 listen=[('Decide in advance what a run does when it cannot ____________.', 'continue'),
         ('Write a line as each item ____________.', 'completes'),
         ('Make the stop ____________.', 'loud'),
         ('Recovery from nothing is an ____________.', 'investigation')],
 speak=['Describe a job that could stop halfway. Your partner asks what state it would leave.',
        'If you cannot answer, write the sentence that would let you.'],
 write='Write the failure behaviour for a run: what it logs, what it does, who it tells.',
 vocab=[('A running written record of what has happened is a ____________.', 'log'),
        ('An item left behind with nothing to attach it to is an ____________.', 'orphan'),
        ('A recorded position that work can be resumed from is a ____________.', 'save point'),
        ('Able to keep working when something fails is ____________.', 'resilient'),
        ('To start again from where something stopped is to ____________.', 'resume')],
 gram=[('I ____________ been checking the log every morning.', 'have'),
       ('It has been ____________ since quarter past six.', 'running'),
       ('She has been checking it ____________ eleven days.', 'for'),
       ('They have been waiting ____________ Tuesday.', 'since'),
       ('It has ____________ failing about once a month.', 'been')]),

found=['Ask what one process at your work writes down while it is running.',
       'Find out what would happen if it stopped at the halfway point.',
       'Decide, for one job, whether it should stop everything or skip and record.',
       'Name one failure at your work that would currently be silent.'],
end_line='Two days, three people saying it went fine, and a client who knew before we did.',
end_next='Next: What Happens Next',
)
