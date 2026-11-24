# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='What You Can Hand Over',
gram='causative have and get something done',
ai='a task and a process: what can be repeated',
strap='CEFR B1 · Grammar: causative have and get something done · AI: a task and a process',
cando=['use have something done and get something done to describe delegated work',
       'tell a one-off task from a process that will run again',
       'break a job into steps that could be handed over separately',
       'name the part of a job that has to stay with me, and say why',
       'explain what makes work repeatable rather than merely frequent'],
hero=('ELEVEN PEOPLE, AND ONE OF THEM DOING EVERYTHING',
      ['Arclight has grown from four to eleven.',
       'Dalia is still the only person who knows how most of it works.'],
      [(760, 'teal', 'long'), (1420, 'orange', 'short'),
       (2080, 'grey', 'long'), (2700, 'blue', 'short')]),
hero_cap='The month the founder became the thing that was slowing everybody down.',

warm=['What do you do at work that only you know how to do?',
      'What is the difference between a task you repeat and a process?',
      'Which part of your job would be hardest to explain to somebody taking over?'],
read=[
 'Arclight is eleven people now, and in March Dalia worked out that she was personally '
 'involved in thirty-one separate pieces of work a week. Not managing them. Involved in '
 'them, in the sense that if she were ill on a Tuesday, each of the thirty-one would '
 'either stop or be done badly.',
 'She wrote them all down on a Sunday and the list was not what she expected. She had '
 'assumed the problem was volume. The list showed something different: nine of the thirty-one '
 'were genuinely one-off, and twenty-two were the same four or five jobs happening over and '
 'over with different names on them.',
 'That distinction turned out to be the whole of the next six months. A task is something '
 'you do once and then it is finished. A process is a task you have done more than three '
 'times and will do again, whether or not anybody has ever written it down. Most of what '
 'drowns a small company is processes being treated as tasks.',
 'The test Dalia uses now is blunt. If the same job comes round again, and you find yourself '
 'making the same decisions in the same order, you are running a process. The fact that it '
 'has never been described as one does not change what it is. It only changes whether '
 'anybody else can do it.',
 'She had the four biggest written up properly over a fortnight, which was not a pleasant '
 'fortnight. Writing a process down means discovering how many decisions you make without '
 'noticing. By May she had got three of the four running without her, and the fourth turned '
 'out not to be a process at all. It was a relationship, and it stayed where it was.'],
c_a=[('How many pieces of work was Dalia involved in each week?', 'thirty-one'),
     ('What had she assumed the problem was?', 'volume'),
     ('What did the list actually show?', 'that twenty-two of the thirty-one were the same four or five jobs repeating'),
     ('What is Dalia’s test for a process?', 'the same job comes round again and you make the same decisions in the same order'),
     ('What happened to the fourth job?', 'it turned out to be a relationship, not a process, and stayed with her')],
c_b=[('Arclight had eleven people in March.', 'T'),
     ('Nine of the thirty-one jobs were genuinely one-off.', 'T'),
     ('Dalia found the fortnight of writing enjoyable.', 'F'),
     ('All four of the biggest jobs were handed over.', 'F'),
     ('A process stops being a process if nobody has written it down.', 'F'),
     ('Dalia was managing the thirty-one jobs rather than doing them.', 'F')],
c_c=[('Each of the thirty-one would stop or be done ____________.', 'badly'),
     ('She had assumed the problem was ____________.', 'volume'),
     ('A task is something you do once and then it is ____________.', 'finished'),
     ('Most of what drowns a small company is processes treated as ____________.', 'tasks'),
     ('Writing a process down means discovering how many ____________ you make.', 'decisions'),
     ('The fourth turned out to be a ____________.', 'relationship')],
c_d=[('The real problem was ( volume / repetition ).', ['volume', 'repetition'], 1),
     ('A process is defined here as a job that', ['is difficult', 'repeats with the same decisions', 'takes a long time', 'involves clients'], 1),
     ('Writing a process down is hard because', ['it is long', 'you discover unnoticed decisions', 'nobody reads it', 'it is boring'], 1),
     ('The fourth job stayed with Dalia because', ['it was too hard', 'it was a relationship', 'nobody else wanted it', 'it was urgent'], 1),
     ('The number of genuinely one-off jobs was', ['thirty-one', 'twenty-two', 'nine', 'four'], 2)],
c_e=('Task or process? Put each one in the right column.',
     [('Writing this month’s reconciliation', 'Process'),
      ('Negotiating a new contract with Nora', 'Task'),
      ('Sorting the overnight inbox', 'Process'),
      ('Deciding whether to take on a new client', 'Task'),
      ('Chasing overdue invoices', 'Process'),
      ('Apologising after a failure', 'Task')],
     ['Task', 'Process']),

v_fig_title='WHAT HAPPENS WHEN YOU HAND IT OVER',
v_fig=[('people', 'delegate'), ('doc', 'a handover'), ('scale', 'oversight'),
       ('chart', 'a procedure'), ('note', 'a checklist'), ('bulb', 'autonomy')],
v_fig_cap='Six words for the gap between doing it and having it done.',
vocab=[
 ('delegate', 'to give a piece of your own work to somebody else to do'),
 ('handover', 'the act of passing work to another person, with what they need'),
 ('autonomy', 'the freedom to decide how to do the work'),
 ('oversight', 'watching over work closely enough to catch a problem'),
 ('bandwidth', 'the time and attention a person actually has available'),
 ('offload', 'to move work off yourself and onto something else'),
 ('decompose', 'to break a job into its separate parts'),
 ('granular', 'described in small, separate pieces rather than as a whole'),
 ('one-off', 'happening once only, not repeating'),
 ('recurring', 'happening again and again at intervals'),
 ('procedure', 'the agreed way a particular job is done each time'),
 ('runbook', 'a written set of steps for running a process'),
 ('checklist', 'a list of items to be ticked off as each is done'),
 ('ownership', 'being the person answerable for how something turns out'),
 ('accountable', 'required to answer for a result, whoever did the work'),
 ('responsible', 'having the duty to do the work itself'),
 ('workaround', 'a way of getting past a problem without fixing it'),
 ('headroom', 'the spare capacity available before something is full'),
 ('scalable', 'able to handle much more work without being rebuilt'),
 ('repetition', 'the fact of something happening again in the same form')],
v_a=[('A written set of steps for running a process is a ____________.', 'runbook'),
     ('The time and attention a person actually has is their ____________.', 'bandwidth'),
     ('A job happening again and again is ____________.', 'recurring'),
     ('To break a job into its separate parts is to ____________ it.', 'decompose'),
     ('The person answerable for the result has ____________.', 'ownership'),
     ('A way past a problem that does not fix it is a ____________.', 'workaround'),
     ('Spare capacity before something is full is ____________.', 'headroom'),
     ('Work that can take much more volume without rebuilding is ____________.', 'scalable')],
v_b=[('To delegate is to give your own work', 'to somebody else to do.'),
     ('Autonomy is the freedom to decide', 'how to do the work.'),
     ('Oversight is watching work closely enough', 'to catch a problem.'),
     ('Granular means described in small pieces', 'rather than as a whole.'),
     ('To be accountable is to answer for a result', 'whoever did the work.')],

g_title='Grammar: causative have and get something done',
g_rule=['Have something done: we have the invoices extracted every Friday.',
        'Get something done is less formal and often suggests effort or arranging.',
        'The pattern is have/get + object + past participle. The doer is often left out.',
        'Use it when who did the work matters less than the fact that it was done.'],
g_fig=('LOOSE',
       ['I do the reconciliation.',
        'Somebody sorts the inbox.',
        'We check the letters.',
        'I write the client summary.'],
       'PRECISE',
       ['We have the reconciliation produced by the 5th.',
        'We get the inbox sorted before 08:30.',
        'We have 14 letters read against the notes.',
        'We get the summary drafted and I sign it.'],
       'who does it, and nothing about when',
       'what gets done, by when, and who signs'),
g_fig_cap='The right-hand column describes a process. The left describes a person.',
g_a=[('We ____________ the invoices extracted every Friday. (have)', 'have'),
     ('I must ____________ this letter checked before it goes. (get)', 'get'),
     ('She had the reconciliation ____________ by the fifth. (produce)', 'produced'),
     ('We get the inbox ____________ before half past eight. (sort)', 'sorted'),
     ('He had his contract ____________ by a lawyer. (read)', 'read'),
     ('We ____________ the queue held for two hours. (have)', 'have'),
     ('I will get the figures ____________ this afternoon. (check)', 'checked'),
     ('They had the whole process ____________ down in a fortnight. (write)', 'written'),
     ('We have 14 letters ____________ against the notes. (read)', 'read')],
g_b=[('We ( have / do ) the invoices extracted every Friday.', ['have', 'do'], 0),
     ('She had the reconciliation ____ by the fifth.', ['produce', 'producing', 'produced', 'to produce'], 2),
     ('I must ____ this letter checked before it goes.', ['get', 'make', 'let', 'do'], 0),
     ('He had his contract ____ by a lawyer.', ['read', 'reading', 'to read', 'reads'], 0),
     ('We get the inbox ____ before half past eight.', ['sort', 'sorting', 'sorted', 'to sort'], 2),
     ('They had the process ____ down in a fortnight.', ['write', 'wrote', 'writing', 'written'], 3)],

d1=dict(title='Thirty-one things',
        fig=(['Thirty-one, every week.', 'How many are the same job?']),
        cap='Dalia and Ines Carvalho, over the Sunday list.',
        lines=[('Dalia', 'Thirty-one pieces of work a week that stop if I am not there.'),
               ('Ines', 'How many of the thirty-one are actually the same job?'),
               ('Dalia', 'What do you mean, the same job? They are all different clients.'),
               ('Ines', 'Different clients. Same decisions, in the same order?'),
               ('Dalia', 'Twenty-two of them. I have just counted while you were talking.'),
               ('Ines', 'Then you do not have thirty-one problems. You have nine, plus four processes.'),
               ('Dalia', 'That is a much better number and I do not feel any better.'),
               ('Ines', 'You will not, until one of the four runs for a week without you.'),
               ('Dalia', 'Writing them down is going to take a fortnight.'),
               ('Ines', 'It will take a fortnight and it will be unpleasant.'),
               ('Dalia', 'Why unpleasant? It is just writing.'),
               ('Ines', 'Because you will find out how much of it you have never decided properly.')],
        a=[('How many pieces of work stop without Dalia?', 'thirty-one'),
           ('What question does Ines ask?', 'how many of them are the same job'),
           ('How many turn out to be the same four processes?', 'twenty-two'),
           ('What does Ines say Dalia actually has?', 'nine problems plus four processes'),
           ('Why does Ines say the fortnight will be unpleasant?', 'because Dalia will find out how much she has never decided properly')],
        b=[('Same decisions, in the same ____________?', 'order'),
           ('You have nine, plus four ____________.', 'processes'),
           ('Until one of the four runs for a ____________ without you.', 'week'),
           ('How much of it you have never ____________ properly.', 'decided')]),
d2=dict(title='The fourth one',
        fig=(['Three are running without me.', 'And the fourth?'],
             ['The fourth is not a process.', 'What is it, then?']),
        cap='Dalia and Thomas, in May.',
        lines=[('Thomas', 'Three of the four are running without you. What happened to the fourth?'),
               ('Dalia', 'I wrote it down and it stopped making sense on the page.'),
               ('Thomas', 'Which one?'),
               ('Dalia', 'The monthly call with Priya. I had it down as a reporting process.'),
               ('Thomas', 'And it is not.'),
               ('Dalia', 'It is twenty minutes of her telling me what she is worried about.'),
               ('Thomas', 'That has a shape. You could write the shape down.'),
               ('Dalia', 'I could write the shape down and the shape is not the thing.'),
               ('Thomas', 'So what is the thing?'),
               ('Dalia', 'That she says things to me she would not say to a stranger.'),
               ('Thomas', 'Then it stays with you, and we should say that out loud in the list.'),
               ('Dalia', 'Agreed. Not yet is the wrong heading for that one. It is just no.')],
        a=[('What happened when Dalia wrote the fourth one down?', 'it stopped making sense on the page'),
           ('What had she classified it as?', 'a reporting process'),
           ('What does the monthly call actually consist of?', 'twenty minutes of Priya saying what she is worried about'),
           ('Why can the shape not be handed over?', 'because Priya says things to Dalia she would not say to a stranger'),
           ('What heading does Dalia reject for this one?', 'Not Yet; she says it is simply no')],
        b=[('It stopped making sense on the ____________.', 'page'),
           ('I had it down as a reporting ____________.', 'process'),
           ('The shape is not the ____________.', 'thing'),
           ('It is just ____________.', 'no')]),

speak=[('Task or process?',
        ['Student A: list six things you did at work last week.',
         'Student B: for each, ask whether the same decisions came up in the same order.',
         'Sort them into tasks and processes. Argue about the two hardest.']),
       ('Spoken specification: hand one over',
        ['Choose a process you run. Brief your partner aloud so they could run it next week.',
         'They may ask three questions only. Count what they had to ask.',
         'Every question they asked is a step you did not describe.']),
       ('Have it done',
        ['In pairs, describe four jobs using have or get something done.',
         'Say by when each one must be done, and who signs it off.',
         'Decide which of the four you would hand over first, and why that one.'])],

ext_title='A task you have done four times is a process pretending to be a task',
ext_fig=figs.datatable('THIRTY-ONE PIECES OF WORK, SORTED',
                       ['', 'Count', 'Same decisions?', 'Handed over by May'],
                       [['genuinely one-off', '9', 'no', 'n/a'],
                        ['reconciliations', '7', 'yes', 'yes'],
                        ['reminder runs', '6', 'yes', 'yes'],
                        ['inbox mornings', '5', 'yes', 'yes'],
                        ['client calls', '4', 'no, never', 'no']]),
ext_fig_cap='Four rows look identical in a diary and are not the same kind of thing at all.',
ext=[
 'There is a distinction that decides most of what a small company can and cannot hand '
 'over, and it is not the one people expect. It is not hard against easy, and it is not '
 'important against unimportant. It is whether the job is a task or a process, and the test '
 'is almost embarrassingly simple: when it comes round again, do you make the same decisions '
 'in the same order?',
 'A task is a thing you do and finish. Negotiating a new contract is a task. Apologising '
 'properly after a failure is a task. They may happen often, but each one is shaped by '
 'circumstances that have not occurred before, and the thinking you do is new thinking.',
 'A process is a job where the thinking happened once, some time ago, and has been quietly '
 'repeated ever since. The reconciliation is a process. Chasing overdue invoices is a '
 'process. They feel like work because they take time, but the decisions inside them were '
 'settled long ago by somebody who has stopped noticing that they settled anything.',
 'What makes this worth caring about is that processes can be handed over and tasks mostly '
 'cannot. Not because of difficulty, but because handing something over means describing it, '
 'and you can only describe a job whose decisions are stable. A task reshapes itself each '
 'time, so any description of it is a description of last time.',
 'The uncomfortable part, which Dalia found and most people find, is that writing a process '
 'down is harder than running it. Running it uses judgement you no longer notice having. '
 'Writing it down requires you to find that judgement, name it, and discover that about a '
 'fifth of it is not a rule at all but a habit you have never tested.'],
dp1=('Repetition in small firms',
     'Surveys of small-business owners frequently report that a majority of weekly work is '
     'repeated activity, although respondents often estimate the share lower than time-use '
     'records show.',
     'Source: general small-business time-use research, 2026. Self-report and observation diverge.'),
e_a=[('What is the test that distinguishes a task from a process?', 'whether the same decisions come up in the same order each time'),
     ('Give an example of a task from the text.', 'negotiating a new contract, or apologising after a failure'),
     ('Why can processes be handed over and tasks mostly not?', 'because handing over means describing, and only a process has stable decisions to describe'),
     ('What does the writer say about the thinking inside a process?', 'that it happened once long ago and has been repeated quietly ever since'),
     ('What is the uncomfortable part of writing a process down?', 'finding the judgement you no longer notice using, and finding that some of it is untested habit')],
e_b=[('The task/process distinction is about difficulty.', 'F'),
     ('A task may happen often and still be a task.', 'T'),
     ('Writing a process down is easier than running it.', 'F'),
     ('Any description of a task describes last time.', 'T'),
     ('About a fifth of the judgement turns out to be untested habit.', 'T'),
     ('Chasing overdue invoices is described as a task.', 'F')],

w_model=(
 'Purpose: get the weekly reconciliation running without Dalia, so that it survives a week '
 'when she is away. Scope: the 7 client reconciliations run each week; the Priya call is '
 'excluded and stays with Dalia. Inputs: the runbook dated 4 May and the ledger exports. '
 'Criteria: all 9 steps in the runbook, in order; the 3 judgement points flagged rather '
 'than decided. Done: 7 reconciliations and a list of every flagged judgement, by 16:00 '
 'Thursday. Fallback: if a step in the runbook does not fit what is in front of you, stop '
 'at that step and flag it; do not improvise a step that is not written down.'),
w_fig=figs.chain('TURNING A TASK INTO A PROCESS',
                 ['Do it and watch yourself', 'Write every step, including the obvious ones',
                  'Mark the points where you decide something',
                  'Decide those once, in advance', 'Hand over the steps, keep the exceptions']),
w_fig_cap='Five moves. The third is where the fortnight goes.',
w_task='Write a brief handing over one process you currently run yourself.',
w_steps=['Choose something you have done at least four times.',
         'Write the steps in order, including the ones that feel too obvious to write.',
         'Mark every point where you make a decision rather than follow a rule.',
         'Decide each of those in advance, in writing, or mark it to be flagged.',
         'Say what should happen when a step does not fit the case in front of them.'],
w_bank=['Have the … produced by …', 'Follow all … steps in the runbook, in order.',
        'Where the runbook says flag, flag rather than decide.',
        'Return … and a list of …', 'If a step does not fit, …'],
w_check=['Have you written the steps that feel too obvious to write?',
         'Is every decision point either pre-decided or marked to be flagged?',
         'Does the brief forbid improvising a step?',
         'Could somebody run this next Thursday without asking you anything?'],

t_title='A task and a process: what can be repeated',
t_fig=figs.split('WHICH IS IT?',
                 'Task — keep it',
                 ['negotiating a new contract',
                  'the first call after a failure',
                  'deciding to take a client on',
                  'the monthly call with Priya'],
                 'Process — hand it over',
                 ['the monthly reconciliation',
                  'the overdue reminder run',
                  'sorting the overnight inbox',
                  'extracting supplier invoices']),
t_fig_cap='The left column is not harder. It is less stable, which is a different thing.',
t_body=[
 'Begin by sorting your own week, because almost nobody has done this and almost everybody '
 'is surprised by the result. Write down everything that would stop if you were away, and '
 'then ask of each one whether the same decisions arise in the same order. The things that '
 'repeat are processes, however different the client names look, and the things that do not '
 'are tasks.',
 'Then write one process down properly, and expect it to be unpleasant. The steps are easy. '
 'The difficulty is the three or four moments where you do not follow a rule, you decide '
 'something, and you have been deciding it the same way for two years without ever saying '
 'why. Those are the points where handing over actually succeeds or fails.',
 'For each of those moments you have two honest options and one dishonest one. You can '
 'decide it in advance and write the decision down. You can mark it to be flagged, so that '
 'the process stops and asks. The dishonest option is to leave it unmentioned and hope, '
 'which produces a process that works for five weeks and then produces something indefensible '
 'in week six.'],
t_say=[('Name the shape: ', 'We have the reconciliation produced by the fifth, every month.'),
       ('Pre-decide it: ', 'Where two due dates appear, use the later one. Decided, not judged.'),
       ('Or flag it: ', 'Where the amount is in another currency, stop and flag it.')],
t_bound=('Writing a process down does not make it a good process. A badly designed job, '
         'carefully documented, becomes a badly designed job that now runs four hundred '
         'times a week without anybody present to notice. Documentation preserves whatever '
         'it finds, including the parts that were never right.'),
t_a=[('We have the reconciliation ____________ by the fifth.', 'produced'),
     ('Where two due dates appear, use the ____________ one.', 'later'),
     ('Where the amount is in another currency, stop and ____________ it.', 'flag'),
     ('The things that ____________ are processes.', 'repeat'),
     ('The difficulty is the three or four moments where you ____________ something.', 'decide'),
     ('The dishonest option is to leave it unmentioned and ____________.', 'hope')],
t_b_rubric='Say whether each is a task or a process, and give the reason.',
t_b=[('Writing the March reconciliation.', 'process: the same decisions in the same order every month'),
     ('Deciding whether to take on a twelfth client.', 'task: the circumstances are new each time'),
     ('Answering the fourth query about a delivery note.', 'process: it has happened before and will again'),
     ('Telling a client that Arclight made a mistake.', 'task: the thinking is new and the relationship is at stake')],

case=dict(
 title='Decision Clinic · Hand over the client calls?',
 brief=[
  'Dalia has four weekly client calls left on her list. Three of them follow a shape: what '
  'happened, what is coming, what is worrying you. The fourth, with Priya Menon, has no '
  'shape at all and is the one Dalia most wants to keep.',
  'Fatima can take the three. She has run one of them twice while Dalia was away and both '
  'clients said afterwards that it was fine. Neither of them mentioned it unprompted.',
  'Kenji has pointed out that the three calls take ninety minutes a week of the most '
  'expensive time in the company, and that Dalia has said twice this month that she has no '
  'time to think about anything beyond next Friday.'],
 exhibit=figs.datatable('THE FOUR WEEKLY CALLS',
                        ['Client', 'Minutes', 'Follows a shape?', 'Run by Fatima?'],
                        [['Boateng', '25', 'yes', 'twice, fine'],
                         ['Lindqvist', '30', 'yes', 'once, fine'],
                         ['client 3', '35', 'yes', 'never'],
                         ['Menon', '20', 'no', 'never'],
                         ['total', '110', '—', '—']]),
 exhibit_cap='Three of the four have a shape. The fourth has twenty minutes and no agenda.',
 exhibit_note='"Fine" in the last column is the clients’ own word, offered when asked. '
              'Neither client raised the change without being asked about it.',
 voices=[('Kenji Watanabe', 'finance',
          'Ninety minutes a week of the founder, on three calls that follow a written shape '
          'and that somebody else has already run twice without complaint. This is not a '
          'close question.'),
         ('Dalia Rahman', 'co-founder',
          'They tell me things on those calls that they would not put in an email, and I do '
          'not know which twenty seconds of the thirty minutes that happens in.'),
         ('Marta Olsen', 'risk and liability',
          'Both clients said it was fine when asked. Nobody said it was fine without being '
          'asked. Those are not the same answer and we are about to treat them as one.')],
 steps=[('Find it', 'How many minutes a week, and how many of the calls have a shape?'),
        ('Compare it', 'What does Dalia get on these calls that a shape does not capture?'),
        ('Infer it', 'Why does Marta distinguish prompted from unprompted approval?'),
        ('Weigh it', 'Ninety minutes of founder time against something nobody can name.'),
        ('Decide', 'Which calls move, and what would tell you it was a mistake?')],
 analysis=[('Find it. How many minutes a week do the three shaped calls take?', 'ninety of the hundred and ten'),
           ('Compare it. What does Dalia say she gets that the shape misses?', 'things clients would not put in an email, at a moment she cannot predict'),
           ('Infer it. Why does prompted approval count for less?', 'because people say "fine" when asked and raise real objections unprompted'),
           ('Weigh it. What is Kenji’s strongest point?', 'that the founder has said twice this month she has no time to think'),
           ('Decide. What would tell you afterwards that you were wrong?', 'a client raising something late that would once have come up on a call')],
 decision='Write what Dalia says to the three clients.',
 decision_steps=['Say what is changing, without apologising for it.',
                 'Say what is not changing, and be specific about how to reach her.',
                 'Give them a way to object that does not require them to make a fuss.',
                 'Say when you will ask them whether it is working.'],
 bank=['From … , your weekly call will be with …', 'What does not change is…',
       'If at any point you would rather…', 'I will ask you in … whether…',
       'You can reach me directly on…'],
 outcome='Dalia moved all three and kept Priya. Two months later Samuel Boateng mentioned, '
         'at the end of an unrelated email, that he had been thinking about ending a '
         'supplier contract and had not known who to say it to. It had been sitting with '
         'him for five weeks. Dalia now joins one call in four, chosen at random, which '
         'Kenji costed at twenty-five minutes a week and did not argue about.',
 outcome_q=[('What did the handover cost that nobody had priced?', 'the unprompted disclosure that used to arrive in the middle of a routine call'),
            ('Why was joining one call in four a reasonable answer?', 'it restores the chance of an unplanned conversation at a quarter of the cost')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Hand over the weekly reconciliations',
 task=['Dalia is handing the seven weekly client reconciliations to Fatima, who has never '
       'run one. She writes the brief on the Friday before she goes away for a week, which '
       'is the worst possible moment and the most common one.',
       'There are nine steps and three points where Dalia decides something rather than '
       'following a rule. She has never counted them, and she does not mention any of them.'],
 draft=['Fatima — can you pick up the weekly reconciliations while I am away.',
        'Just do them the way I do them.',
        'Most of it is fairly obvious once you start.',
        'If anything looks unusual, handle it as you think best.',
        'Get them all finished by the end of the week.',
        'Let me know how you got on when I am back.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A handover containing no steps, written by somebody who has stopped seeing them.',
 asked=['9 written steps, run in order',
        '3 judgement points flagged, not decided',
        'All 7 done by Thursday 16:00'],
 back=['Steps invented as she went',
       '3 judgements made and not recorded',
       '5 of 7 done, 2 abandoned'],
 gap='Do them the way I do them describes nothing, and handle it as you think best hands '
     'over three decisions Dalia had already made but had never written down.',
 back_cap='Five reconciliations, three silent judgements and two jobs nobody could finish.',
 back_note='Fatima made all three judgements the same way Dalia would have. Nobody found '
           'that out until June, and nobody could have known it at the time.',
 diagnosis=[('[1] "the weekly reconciliations" — which clients, how many?', 'unscoped set'),
            ('[2] "the way I do them" — written down where?', 'undefined done'),
            ('[3] "most of it is fairly obvious" — and the part that is not?', 'unstated criterion'),
            ('[4] "anything unusual" — unusual by what test?', 'unstated criterion'),
            ('[5] "all finished by the end of the week" — finished means what?', 'undefined done'),
            ('[6] "let me know how you got on" — which seven, and in what form?', 'unscoped set')],
 rewrite='Rewrite the brief so that Fatima could run all seven without guessing, and so that '
         'the three judgement points come back to Dalia rather than being made for her.',
 scaffold=['Why the reconciliations must still happen while Dalia is away',
           'Which clients are in, and what is excluded and stays with Dalia',
           'The runbook with its date, and the exports it uses',
           'How many steps, in what order, and what happens at a judgement point',
           'What comes back, and by what hour on what day',
           'What to do when a step does not fit the case in front of her'],
 bank=['Have the … reconciliations produced while …', 'Include the … clients listed in … ; exclude …',
       'Follow the runbook dated … , all … steps, in order.',
       'Where the runbook says flag, flag rather than …', 'Return … and … by … on …',
       'If a step does not fit, …'],
 check=['Does the brief name a written runbook, or only a person’s habits?',
        'Are the judgement points identified and told to flag rather than decide?',
        'Does Done carry a number, a form and an hour?',
        'Does the brief forbid improvising a step that is not written down?'],
 model=['Keep the 7 weekly reconciliations running during the week Dalia is away',
        'The 7 client reconciliations listed in the runbook; the Priya Menon call is excluded and stays with Dalia',
        'The runbook dated 4 May and the ledger exports for each client, taken on the Monday',
        'All 9 steps in the runbook, in order; at each of the 3 points marked JUDGEMENT, record the case and flag it rather than deciding it',
        '7 reconciliations and 1 list of every flagged judgement, by 16:00 on Thursday',
        'If a step does not fit the case in front of you, stop at that step, flag it and move to the next client; do not improvise a step that is not in the runbook'],
 cost='2 reconciliations never finished, 3 judgements made silently that nobody reviewed for '
      '6 weeks, and 1 client who received a figure 40 euros out because an exchange rate was '
      'taken on a different day.'),

rev_fig=figs.split('TASK AND PROCESS',
                   'Task — new thinking each time',
                   ['negotiating a contract',
                    'the call after a failure',
                    'taking on a new client',
                    'the monthly call with Priya'],
                   'Process — the thinking is done',
                   ['the monthly reconciliation',
                    'the reminder run',
                    'the overnight inbox',
                    'supplier invoice extraction']),
rev_fig_cap='Unit 1 of Book 2 in one picture: only the right-hand column can be described.',
rev=dict(
 read=[('A process is defined here as work where', ['the same decisions recur in order', 'the volume is high', 'the client is large', 'it is difficult'], 0),
       ('"We have the letters checked" means', ['we check them', 'we arrange for them to be checked', 'we own them', 'we must check them'], 1),
       ('Tasks are hard to hand over because', ['they are difficult', 'they reshape themselves each time', 'they are long', 'they are secret'], 1),
       ('In the Clinic, what was lost by moving the calls?', ['accuracy', 'unprompted disclosure', 'time', 'money'], 1)],
 listen_text='Sort your week first. Write down everything that stops if you are away, then '
             'ask of each one whether the same decisions come up in the same order. The ones '
             'that repeat are processes and can be handed over. Then write one down, and '
             'expect the unpleasant part: three or four moments where you decide rather than '
             'follow a rule, and have never said why.',
 listen=[('Write down everything that stops if you are ____________.', 'away'),
         ('Ask whether the same ____________ come up in the same order.', 'decisions'),
         ('The ones that ____________ are processes.', 'repeat'),
         ('Three or four moments where you ____________ rather than follow a rule.', 'decide')],
 speak=['Name a process you run. Your partner asks for the steps until they could run it.',
        'Count the steps you had forgotten you take.'],
 write='Write the steps of one process you run, including the ones that feel too obvious.',
 vocab=[('A written set of steps for running a process is a ____________.', 'runbook'),
        ('The time and attention a person actually has is their ____________.', 'bandwidth'),
        ('To break a job into its separate parts is to ____________ it.', 'decompose'),
        ('A way past a problem that does not fix it is a ____________.', 'workaround'),
        ('The freedom to decide how to do the work is ____________.', 'autonomy')],
 gram=[('We ____________ the invoices extracted every Friday.', 'have'),
       ('She had the reconciliation ____________ by the fifth.', 'produced'),
       ('I must ____________ this letter checked before it goes.', 'get'),
       ('He had his contract ____________ by a lawyer.', 'read'),
       ('They had the whole process ____________ down in a fortnight.', 'written')]),

found=['List everything that would stop if you were away for a week.',
       'Pick one and ask whether the same decisions come up in the same order.',
       'Write the steps of the one you repeat most, including the obvious ones.',
       'Mark the points where you decide rather than follow a rule. Count them.'],
end_line='Twenty-two of the thirty-one were the same four jobs wearing different client names.',
end_next='Next: Boundaries and Permissions',
)
