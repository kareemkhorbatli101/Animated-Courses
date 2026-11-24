# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='Step by Step',
gram='reported questions and requests',
ai='steps, inputs and outputs: describing a process so it can run',
strap='CEFR B1 · Grammar: reported questions and requests · AI: steps, inputs and outputs',
cando=['report a question or a request accurately, without changing what was asked',
       'describe a process as steps, each with an input and an output',
       'say what must exist before a step can start',
       'identify the step where a process actually fails',
       'explain why a described process is easier to repair than a remembered one'],
hero=('NINE STEPS, SEVEN OF WHICH NOBODY HAD EVER MENTIONED',
      ['The reconciliation had always taken an afternoon.',
       'Nobody had ever asked what happened during it.'],
      [(880, 'orange', 'long'), (1620, 'teal', 'short'), (2360, 'grey', 'long')]),
hero_cap='A process written down for the first time, two years after it started running.',

warm=['Could you describe one job you do as a numbered list of steps?',
      'If somebody asks you "what did she ask for?", how do you report it?',
      'When a job goes wrong, how do you find out which part went wrong?'],
read=[
 'Fatima spent a Tuesday writing down the weekly reconciliation, and the first thing she '
 'discovered was that it had nine steps rather than the three she would have named if '
 'somebody had asked. Two of the nine were things she did while waiting for something else, '
 'and she had never counted them as part of the job at all.',
 'The second discovery was more useful. Each step turned out to need something that came '
 'from somewhere, and to produce something that went somewhere else. Step four needed the '
 'bank file, which arrives on Monday. Step five needed the output of step four and nothing '
 'else. Step six needed the output of step five and the supplier index, which is updated '
 'whenever somebody remembers.',
 'That last phrase is the whole reason the reconciliation sometimes took an afternoon and '
 'sometimes took two days. Nobody had ever noticed that one of the nine steps depended on a '
 'file with no schedule, because the dependency lived in Fatima’s head as a vague sense '
 'that this bit was sometimes annoying.',
 'When Thomas asked her how long step six took, she said it varied. When he asked what it '
 'varied with, she said she did not know, and then said the supplier index about four '
 'seconds later. The question had not occurred to her in two years, because she had never '
 'been asked it in a form that required an answer.',
 'The process is now nine numbered steps with an input and an output written against each '
 'one, and the supplier index has a Monday deadline. The reconciliation takes an afternoon '
 'every week. Fatima says the writing down was worth it for step six alone, and that she '
 'would not have found step six by thinking harder about it.'],
c_a=[('How many steps did the reconciliation turn out to have?', 'nine'),
     ('How many would Fatima have named?', 'three'),
     ('What did step six depend on?', 'the output of step five and the supplier index'),
     ('Why did the job sometimes take two days?', 'because the supplier index had no schedule and was updated whenever somebody remembered'),
     ('What does Fatima say about finding step six?', 'that she would not have found it by thinking harder')],
c_b=[('Fatima had always known there were nine steps.', 'F'),
     ('Two of the steps happened while she waited for something else.', 'T'),
     ('Step five needed the bank file.', 'F'),
     ('The supplier index now has a Monday deadline.', 'T'),
     ('The reconciliation now takes a variable amount of time.', 'F'),
     ('Thomas asked what step six varied with.', 'T')],
c_c=[('Two of the nine were things she did while ____________ for something else.', 'waiting'),
     ('Step four needed the ____________ file.', 'bank'),
     ('The supplier index is updated whenever somebody ____________.', 'remembers'),
     ('The dependency lived in Fatima’s ____________.', 'head'),
     ('She had never been asked it in a form that required an ____________.', 'answer'),
     ('The reconciliation takes an ____________ every week.', 'afternoon')],
c_d=[('The job varied because of ( the volume / one dependency ).', ['the volume', 'one dependency'], 1),
     ('Writing the process down revealed', ['that it was too long', 'six steps nobody had named', 'that it was unnecessary', 'a staffing problem'], 1),
     ('The supplier index was a problem because it', ['was wrong', 'had no schedule', 'was too large', 'was secret'], 1),
     ('Fatima answered "I do not know" and then', ['stopped', 'gave the answer four seconds later', 'asked Thomas', 'checked a file'], 1),
     ('The fix for step six was', ['a new file', 'a Monday deadline', 'more staff', 'a different order'], 1)],
c_e=('Reporting a question or a request? Put each one in the right column.',
     [('He asked how long it took.', 'Reported question'),
      ('She asked me to send the file.', 'Reported request'),
      ('He wanted to know what it varied with.', 'Reported question'),
      ('They asked us not to chase them.', 'Reported request'),
      ('She asked whether the index was current.', 'Reported question'),
      ('He asked her to flag anything unusual.', 'Reported request')],
     ['Reported question', 'Reported request']),

v_fig_title='A PROCESS, DESCRIBED',
v_fig=[('chart', 'a step'), ('truck', 'an input'), ('doc', 'a work product'),
       ('scale', 'a dependency'), ('bulb', 'a hand-off'), ('basket', 'a pile-up')],
v_fig_cap='Six words that turn an afternoon of work into something anybody can read.',
vocab=[
 ('step', 'one action in a process, with a beginning and an end'),
 ('input', 'what a step needs before it can start'),
 ('work product', 'what a step produces when it finishes'),
 ('dependency', 'something a step cannot proceed without'),
 ('precondition', 'a state that must be true before a step may begin'),
 ('intermediate', 'produced along the way, not the final result'),
 ('parallel', 'running at the same time as something else'),
 ('loop', 'a part of a process that repeats until a condition is met'),
 ('branch', 'a point where a process goes one way or another'),
 ('halt', 'a deliberate stop before the end'),
 ('stage', 'a named group of steps within a larger process'),
 ('hand-off', 'the point where work passes from one party to another'),
 ('sequence', 'the order in which things follow one another'),
 ('upstream', 'earlier in the process, where this step’s inputs come from'),
 ('downstream', 'later in the process, where this step’s output goes'),
 ('feed', 'a regular supply of data arriving from somewhere'),
 ('chain', 'a series of steps where each uses the one before'),
 ('mapping', 'a written description of how a process actually runs'),
 ('pile-up', 'work accumulating because a later step is not keeping up'),
 ('idle', 'not working, because there is nothing to work on yet')],
v_a=[('What a step needs before it can start is its ____________.', 'input'),
     ('Something a step cannot proceed without is a ____________.', 'dependency'),
     ('A state that must be true before a step begins is a ____________.', 'precondition'),
     ('The point where work passes from one party to another is the ____________.', 'hand-off'),
     ('Earlier in the process is ____________.', 'upstream'),
     ('A written description of how a process runs is a ____________.', 'mapping'),
     ('Work accumulating because a later step is slow is a ____________.', 'pile-up'),
     ('A part of a process that repeats until a condition is met is a ____________.', 'loop')],
v_b=[('A work product is what a step produces', 'when it finishes.'),
     ('A branch is a point where a process', 'goes one way or another.'),
     ('To be idle is to have nothing', 'to work on yet.'),
     ('A stage is a named group of steps', 'within a larger process.'),
     ('A feed is a regular supply of data', 'arriving from somewhere.')],

g_title='Grammar: reported questions and requests',
g_rule=['Reported questions use statement word order: he asked how long it took.',
        'Use if or whether for yes/no questions: she asked whether the index was current.',
        'Reported requests use ask somebody to do: she asked me to send the file.',
        'Report what was asked, not what you think was meant. The two are different.'],
g_fig=('LOOSE',
       ['He wanted the usual thing.',
        'She said something about the index.',
        'They were not happy about Friday.',
        'He asked about the delay.'],
       'PRECISE',
       ['He asked how long step 6 took.',
        'She asked whether the index was current.',
        'They asked us to move the deadline to Monday.',
        'He asked what the delay varied with.'],
       'a summary of a feeling',
       'the question, as it was asked'),
g_fig_cap='The left-hand column is what gets passed on. The right-hand column is what was said.',
g_a=[('He asked how long step six ____________. (take)', 'took'),
     ('She asked ____________ the index was current. (whether)', 'whether'),
     ('They asked us ____________ move the deadline. (to)', 'to'),
     ('He wanted to know what it ____________ with. (vary)', 'varied'),
     ('She asked me ____________ to chase them before April. (not)', 'not'),
     ('He asked where the bank file ____________ from. (come)', 'came'),
     ('They asked ____________ we could deliver by the fifth. (if)', 'if'),
     ('She asked him ____________ flag anything unusual. (to)', 'to'),
     ('He asked who ____________ the supplier index. (update)', 'updated')],
g_b=[('He asked how long step six ( took / takes ).', ['took', 'takes'], 0),
     ('She asked ____ the index was current.', ['that', 'whether', 'what', 'which'], 1),
     ('They asked us ____ the deadline.', ['moving', 'move', 'to move', 'moved'], 2),
     ('He asked where the bank file ____ from.', ['comes', 'came', 'is coming', 'does come'], 1),
     ('She asked me ____ to chase them.', ['not', 'no', 'do not', 'not to'], 3),
     ('He asked who ____ the supplier index.', ['update', 'updates', 'updated', 'did update'], 2)],

d1=dict(title='What does it vary with?',
        fig=(['It varies.', 'What does it vary with?'],
             ['I do not know.', 'The supplier index.']),
        cap='Thomas and Fatima, mapping the reconciliation.',
        lines=[('Thomas', 'How long does step six take?'),
               ('Fatima', 'It varies.'),
               ('Thomas', 'What does it vary with?'),
               ('Fatima', 'I do not know. It just does.'),
               ('Thomas', 'Think about the last four times it was slow.'),
               ('Fatima', 'The supplier index. It is the supplier index, every time.'),
               ('Thomas', 'You answered that in about four seconds.'),
               ('Fatima', 'I have never been asked. I have been doing this for two years.'),
               ('Thomas', 'Who updates the index?'),
               ('Fatima', 'Whoever notices it is out of date. Usually me, on a Thursday.'),
               ('Thomas', 'So step six depends on somebody noticing something.'),
               ('Fatima', 'When you say it like that it sounds much worse than it has ever felt.')],
        a=[('What does Thomas ask first?', 'how long step six takes'),
           ('What is Fatima’s first answer?', 'that it varies'),
           ('What does step six actually depend on?', 'the supplier index'),
           ('Who updates the index?', 'whoever notices it is out of date, usually Fatima on a Thursday'),
           ('What does Thomas conclude?', 'that step six depends on somebody noticing something')],
        b=[('What does it ____________ with?', 'vary'),
           ('It is the supplier ____________, every time.', 'index'),
           ('I have never been ____________.', 'asked'),
           ('It depends on somebody ____________ something.', 'noticing')]),
d2=dict(title='Nine, not three',
        fig=(['I would have said three steps.', 'You wrote down nine.'],
             ['Two of them are waiting.', 'Waiting is still a step.']),
        cap='Fatima and Dalia, with the map on the table.',
        lines=[('Dalia', 'If I had asked you yesterday, how many steps would you have said?'),
               ('Fatima', 'Three. Pull the data, match it, write it up.'),
               ('Dalia', 'And it is nine.'),
               ('Fatima', 'Two of the nine are waiting for things. I never counted waiting.'),
               ('Dalia', 'Waiting is where half our week goes.'),
               ('Fatima', 'It did not feel like part of the job. It felt like the gap between parts.'),
               ('Dalia', 'If nobody counts it, nobody fixes it.'),
               ('Fatima', 'And the other four?'),
               ('Dalia', 'Small corrections you make without thinking. Those are the dangerous ones.'),
               ('Fatima', 'Dangerous how? They take forty seconds each.'),
               ('Dalia', 'They take forty seconds from you. From somebody who does not know, they take an hour or they do not happen.'),
               ('Fatima', 'That I will accept. I did not enjoy finding it out.')],
        a=[('How many steps would Fatima have named?', 'three'),
           ('Why had she not counted two of them?', 'because they were waiting, which felt like the gap between parts rather than parts'),
           ('What does Dalia say about waiting?', 'that half the week goes there, and if nobody counts it nobody fixes it'),
           ('What are the other four steps?', 'small corrections Fatima makes without thinking'),
           ('Why are they dangerous?', 'because they take forty seconds from her and an hour from somebody who does not know')],
        b=[('Pull the data, match it, write it ____________.', 'up'),
           ('I never counted ____________.', 'waiting'),
           ('If nobody counts it, nobody ____________ it.', 'fixes'),
           ('Small ____________ you make without thinking.', 'corrections')]),

speak=[('Report it exactly',
        ['Student A: ask your partner three questions about their work.',
         'Student B: report each one back, starting "You asked...".',
         'Check against what was actually asked. Note any that changed in the reporting.']),
       ('Spoken specification: map it aloud',
        ['Choose a process you run and describe it in steps, with inputs and outputs.',
         'Your partner stops you whenever an input has no named source.',
         'Count the stops. Those are your undocumented dependencies.']),
       ('Where does it wait?',
        ['In pairs, pick a job that sometimes takes much longer than usual.',
         'List every point where the job waits for something.',
         'For each, say who or what the waiting depends on, and whether it has a schedule.'])],

ext_title='A step has an input, an output and somewhere to fail',
ext_fig=figs.datatable('NINE STEPS, WITH THEIR INPUTS',
                       ['Step', 'Input', 'From where', 'Scheduled?'],
                       [['4 match payments', 'the bank file', 'the bank', 'Monday, yes'],
                        ['5 flag gaps', 'output of step 4', 'step 4', 'yes'],
                        ['6 name suppliers', 'the supplier index', 'whoever notices', 'no'],
                        ['7 total', 'output of step 6', 'step 6', 'yes'],
                        ['8 write up', 'output of step 7', 'step 7', 'yes']]),
ext_fig_cap='One row in the last column reads differently from the others. That row was the problem.',
ext=[
 'Describing a process properly means three things and only three: the steps in order, what '
 'each step needs before it can start, and what it produces when it finishes. This sounds '
 'thin, and it is in fact the whole of it. A description with those three elements can be '
 'handed to somebody else, and a description missing any of them cannot.',
 'The steps are the easy part and they are nearly always undercounted. People name the '
 'three or four steps that involve doing something visible and leave out the waiting, the '
 'checking and the small corrections, because those do not feel like work. They are '
 'frequently most of the elapsed time and almost all of the variation.',
 'The inputs are where the real information is. For each step, ask what has to exist before '
 'this can begin, and then ask where that thing comes from and when it arrives. This second '
 'question is the one that finds the problems. A step that depends on a file with a '
 'schedule is predictable. A step that depends on somebody noticing something is not a step, '
 'it is a hope.',
 'Outputs matter for a different reason: they are where you can put a check. If step five '
 'produces a list of gaps, you can count the gaps, and an unusual count tells you something '
 'is wrong at step five or earlier. Without named outputs, a process has exactly one place '
 'to detect failure, which is the end, by which time you cannot tell which part failed.',
 'There is a quieter benefit that people notice only afterwards. A process described this '
 'way can be improved in pieces. You can change step six without touching anything else, '
 'because you know what it needs and what it owes. An undescribed process can only be '
 'improved by the person who holds it in their head, and only all at once.'],
dp1=('Where elapsed time goes',
     'Process studies across service industries commonly find that waiting and handover time '
     'exceeds active working time in end-to-end measurements.',
     'Source: general process-improvement literature, 2026. Ratios differ by industry and measurement method.'),
e_a=[('What are the three elements of a proper description?', 'the steps in order, each step’s input, and each step’s output'),
     ('Why are steps usually undercounted?', 'because waiting, checking and small corrections do not feel like work'),
     ('Which question finds the problems?', 'where an input comes from and when it arrives'),
     ('Why do outputs matter?', 'because they are where a check can be placed, so failure can be located'),
     ('What is the quieter benefit?', 'the process can be improved in pieces rather than all at once')],
e_b=[('A description needs steps, inputs and outputs.', 'T'),
     ('Waiting time is usually a small part of elapsed time.', 'F'),
     ('A step that depends on somebody noticing is predictable.', 'F'),
     ('Named outputs let you locate a failure.', 'T'),
     ('An undescribed process can be improved in pieces.', 'F'),
     ('People usually overcount the steps in their own work.', 'F')],

w_model=(
 'Purpose: make the weekly reconciliation take the same time every week. Scope: the 9 steps '
 'in the mapping dated 12 May; step 6 is included and its input rule is changed. Inputs: '
 'the bank file, which arrives on Monday, and the supplier index, which must be updated by '
 '17:00 on Monday by Thomas. Criteria: each step records its input, its output and its '
 'elapsed minutes; no step may start before its named input exists. Done: 7 reconciliations '
 'and a timing line for each step, by 16:00 Thursday. Fallback: if a named input has not '
 'arrived, halt at that step, record the wait and move to the next client.'),
w_fig=figs.chain('DESCRIBING A STEP',
                 ['What has to exist first', 'Where it comes from',
                  'When it arrives', 'What this step does',
                  'What it produces, and who gets it']),
w_fig_cap='Five questions per step. The second and third are the ones that find the trouble.',
w_task='Map one process you run, step by step, with inputs and outputs.',
w_steps=['Write every step, including waiting and small corrections.',
         'For each step, write what must exist before it can start.',
         'For each input, write where it comes from and when it arrives.',
         'For each step, write what it produces and who receives it.',
         'Mark any input whose arrival has no schedule.'],
w_bank=['Step … needs … , which comes from … , by …',
        'Step … produces … , which goes to …',
        'No step may start before …', 'If … has not arrived, …',
        'The following inputs have no schedule: …'],
w_check=['Have you counted the steps where you are waiting?',
         'Does every input name a source and a time?',
         'Does every step name what it produces?',
         'Have you marked the inputs that depend on somebody remembering?'],

t_title='Steps, inputs and outputs: describing a process so it can run',
t_fig=figs.split('TWO DESCRIPTIONS OF THE SAME JOB',
                 'Remembered',
                 ['Pull the data.', 'Match it up.',
                  'Write it up.', 'It varies a bit.'],
                 'Described',
                 ['Step 4: input bank file, Monday.',
                  'Step 5: input output of step 4.',
                  'Step 6: input supplier index, no schedule.',
                  'Step 7: input output of step 6.']),
t_fig_cap='The right-hand column is longer, duller and can be given to somebody else.',
t_body=[
 'Write the steps first, and write more of them than you think there are. If you produce '
 'fewer than six for a job that takes an afternoon, you have left something out, and what '
 'you have left out is almost certainly waiting or correcting. Both of those are steps. '
 'Both of them take time. Only one of them is usually fixable, and you cannot tell which '
 'until they are on the page.',
 'Then do the inputs, which is where the useful discoveries are. For every step, ask what '
 'must exist before this can start, where that comes from, and when it arrives. Any input '
 'whose answer to the third question is "whenever somebody gets round to it" is the reason '
 'your process has a variable duration, and you will usually find exactly one of them.',
 'Finally write the outputs, because an output is a place to put a check. A step that '
 'produces a named thing can be tested; a step that merely contributes to a general sense '
 'of progress cannot. Once outputs are named, you can count them, and counting is the '
 'cheapest form of quality control anybody has invented.'],
t_say=[('Name the input: ', 'Step 6 needs the supplier index, updated by 17:00 on Monday.'),
       ('Name the output: ', 'Step 5 produces a list of gaps, which goes to step 6.'),
       ('Name the wait: ', 'If the bank file has not arrived, halt at step 4 and record the wait.')],
t_bound=('A mapping does not tell you whether the process is worth running. It describes '
         'faithfully whatever it is given, including nine steps that could have been four, '
         'and it will make a badly designed process easier to repeat without making it any '
         'better. Describing is not designing.'),
t_a=[('Step 6 needs the supplier index, updated by 17:00 on ____________.', 'Monday'),
     ('Step 5 produces a list of ____________.', 'gaps'),
     ('If the bank file has not arrived, ____________ at step 4.', 'halt'),
     ('Write more steps than you think there ____________.', 'are'),
     ('An input that arrives whenever somebody gets round to it causes a variable ____________.', 'duration'),
     ('An output is a place to put a ____________.', 'check')],
t_b_rubric='For each step, name the input a brief would have to specify.',
t_b=[('Match the payments.', 'the bank file, from the bank, arriving Monday morning'),
     ('Name the suppliers.', 'the supplier index, with a named owner and a Monday deadline'),
     ('Write the summary.', 'the output of the totalling step, plus the layout version'),
     ('Send the reminders.', 'the ledger export with its date, and the house style version')],

case=dict(
 title='Decision Clinic · Fix step six, or remove it?',
 brief=[
  'The mapping has found that step six of the reconciliation depends on the supplier index, '
  'which has no owner and no schedule. Step six takes between four minutes and two hours '
  'depending on how out of date the index is.',
  'Thomas proposes giving the index an owner and a Monday deadline. That costs about twenty '
  'minutes of somebody’s Monday, every Monday, for ever.',
  'Jonas proposes removing step six entirely. The supplier names it adds are useful but not '
  'required; the reconciliation is correct without them and simply harder to read. He points '
  'out that nobody has ever asked for a supplier name.'],
 exhibit=figs.datatable('STEP SIX, MEASURED OVER TWELVE WEEKS',
                        ['', 'Minutes', 'Index current?', 'Names added'],
                        [['best week', '4', 'yes', '31'],
                         ['typical week', '22', 'partly', '28'],
                         ['worst week', '118', 'no', '31'],
                         ['total over 12 weeks', '402', '—', '358'],
                         ['times a name was used', '—', '—', '9']]),
 exhibit_cap='Three hundred and fifty-eight names added. Nine of them were ever used.',
 exhibit_note='"Used" means a name was quoted in a client message or a query. The figure '
              'comes from a search of sent mail, and may undercount verbal use.',
 voices=[('Thomas Reed', 'service delivery',
          'Give the index an owner and a deadline. Twenty minutes a Monday and the whole '
          'thing becomes predictable. That is the cheapest fix we have ever found.'),
         ('Jonas Riedel', 'systems and workflows',
          'Three hundred and fifty-eight names, nine of them used. We are about to spend '
          'seventeen hours a year maintaining a file so that a step can add something '
          'nobody reads.'),
         ('Fatima Zahra', 'client manager',
          'The nine times it was used were all difficult conversations. I would not want to '
          'have had any of them without the name in front of me.')],
 steps=[('Find it', 'How many names were added, and how many were used?'),
        ('Compare it', 'What does keeping step six cost, and what does removing it cost?'),
        ('Infer it', 'Why might the "nine times used" figure be wrong?'),
        ('Weigh it', 'Seventeen hours a year against nine difficult conversations.'),
        ('Decide', 'Does step six stay, and in what form?')],
 analysis=[('Find it. How many names were added and used?', 'three hundred and fifty-eight added, nine used'),
           ('Compare it. What does Thomas’s fix cost each year?', 'about seventeen hours of somebody’s Monday'),
           ('Infer it. Why might nine be an undercount?', 'because the figure comes from sent mail and does not capture names used in conversation'),
           ('Weigh it. What is Fatima’s argument?', 'that the value is concentrated in a few difficult cases rather than spread over all uses'),
           ('Decide. Is there a version that keeps the value and drops the cost?', 'adding supplier names only when a gap is flagged, rather than to every row')],
 decision='Write the change to the mapping.',
 decision_steps=['Say what happens to step six, in the first sentence.',
                 'If it stays, say exactly when it runs and when it does not.',
                 'Name the owner of any input it still needs, and the deadline.',
                 'Say what measurement would make you change this again.'],
 bank=['Step 6 will…', 'It runs only when…', '… owns the … and updates it by …',
       'We will review this if…', 'The expected cost is now about … a week.'],
 outcome='Step six now runs only on rows that step five has flagged as a gap, which is '
         'about four rows a week instead of thirty-one. The index still needs updating but '
         'only for those suppliers, which Thomas does in about three minutes. Over the next '
         'six months the names were used eleven times, all of them on flagged rows. Jonas '
         'had the arithmetic right and the conclusion wrong, which he says is the most '
         'annoying way to be wrong.',
 outcome_q=[('Why did restricting step six keep the value?', 'because every use of a supplier name had been on a row that was already flagged'),
            ('What was right and wrong in Jonas’s argument?', 'the cost arithmetic was correct; the conclusion that the step was worthless was not')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Write up the reconciliation process',
 task=['Dalia asks Fatima to write down the reconciliation so that somebody else can run it. '
       'This is the brief for writing the description, not for running the job.',
       'Fatima has run this process about a hundred times. She can do it without thinking, '
       'which is precisely the problem, and nothing in the brief makes her look at the parts '
       'she does without thinking.'],
 draft=['Can you write up how the reconciliation works.',
        'Put down the main steps so somebody else could follow it.',
        'Do not worry about the small stuff.',
        'Mention anything that tends to hold things up.',
        'Keep going until you have covered it.',
        'Send it over when you have a moment.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief for writing a process down, which instructs her to leave out the useful part.',
 asked=['Every step, including waiting',
        'An input and an output for each one',
        'Every input with a source and a time'],
 back=['3 steps, the visible ones',
       'No inputs or outputs recorded',
       'The supplier index not mentioned'],
 gap='The main steps invited exactly the three she would have named, do not worry about the '
     'small stuff excluded the six that mattered, and tends to hold things up asked for a '
     'feeling instead of a dependency.',
 back_cap='A three-step description of a nine-step process, written by an expert.',
 back_note='Everything in Fatima’s description was true. None of it would let anybody else '
           'run the job, and the step that caused all the variation was not in it.',
 diagnosis=[('[1] "the main steps" — main by what measure?', 'unbounded quantity'),
            ('[2] "do not worry about the small stuff" — small how?', 'unbounded quantity'),
            ('[3] "so somebody else could follow it" — tested how?', 'undefined done'),
            ('[4] "anything that tends to hold things up" — and if nothing seems to?', 'missing condition'),
            ('[5] "keep going until you have covered it" — covered means what?', 'undefined done'),
            ('[6] "when you have a moment" — and if no moment comes this week?', 'missing condition')],
 rewrite='Rewrite the brief so that Fatima has to record every step, every input and every '
         'output, including the ones she does not think of as work.',
 scaffold=['Why the process is being written down, and who will run it',
           'Which process, and which parts of it are in scope',
           'The last four weeks of her own work as the source material',
           'What must be recorded for every step, including waiting',
           'What the finished mapping contains, and by when',
           'What to record when an input has no schedule or no owner'],
 bank=['Write up … so that … can run it on …',
       'Include every step, including …', 'For each step, record … , … and …',
       'Mark any input that …', 'Return … by … on …',
       'If an input has no owner, …'],
 check=['Does the brief require waiting and correcting to be counted as steps?',
        'Must every input name a source and an arrival time?',
        'Is there an instruction for an input with no schedule?',
        'Does Done describe a document somebody could follow, not a feeling of completeness?'],
 model=['Write the reconciliation down so that Fatima could be away for a week without it stopping',
        'The weekly client reconciliation only; the monthly supplier reconciliation is out of scope',
        'The last 4 weeks of Fatima’s own runs, and the existing layout version 2',
        'Record every step in order, including waiting and small corrections; for each step record its input, where that input comes from and when it arrives, and what the step produces',
        '1 numbered mapping of every step with its input and output, plus a list of every input that has no schedule, by 17:00 on Friday',
        'If an input has no owner or no schedule, record it as unscheduled and name who currently supplies it, rather than leaving the row blank'],
 cost='A 3-step description that nobody could follow, 1 handover abandoned after 2 days, and '
      '12 more weeks of a job that took between 4 minutes and 2 hours for a reason nobody '
      'had written down.'),

rev_fig=figs.split('REPORTED QUESTIONS AND REQUESTS',
                   'He asked — a question',
                   ['He asked how long it took.',
                    'She asked whether it was current.',
                    'He asked what it varied with.',
                    'She asked who updated it.'],
                   'He asked — a request',
                   ['He asked me to send the file.',
                    'She asked us to move the deadline.',
                    'They asked him not to chase.',
                    'She asked them to flag it.']),
rev_fig_cap='Same verb, two patterns. The first takes statement order; the second takes to.',
rev=dict(
 read=[('A proper process description contains', ['steps only', 'steps, inputs and outputs', 'timings only', 'a flowchart'], 1),
       ('Reported questions use', ['question word order', 'statement word order', 'no word order', 'the imperative'], 1),
       ('An input with no schedule produces', ['better quality', 'a variable duration', 'fewer steps', 'more output'], 1),
       ('In the Clinic, step six was', ['removed', 'restricted to flagged rows', 'kept unchanged', 'given to a client'], 1)],
 listen_text='Write more steps than you think there are, because waiting and correcting are '
             'steps and they are where the time goes. Then for every step ask what has to '
             'exist first, where it comes from and when it arrives. The input that arrives '
             'whenever somebody gets round to it is the reason your process takes a different '
             'length of time every week.',
 listen=[('Write more ____________ than you think there are.', 'steps'),
         ('Ask what has to ____________ first.', 'exist'),
         ('Ask where it comes from and when it ____________.', 'arrives'),
         ('That is why your process takes a different ____________ every week.', 'length')],
 speak=['Describe a process in steps. Your partner asks "and what does that step need?" each time.',
        'Stop when you reach an input with no schedule. That is the one to fix.'],
 write='Map four steps of a process you run, with an input and an output for each.',
 vocab=[('What a step needs before it can start is its ____________.', 'input'),
        ('A state that must be true before a step begins is a ____________.', 'precondition'),
        ('The point where work passes from one party to another is the ____________.', 'hand-off'),
        ('Work accumulating because a later step is slow is a ____________.', 'pile-up'),
        ('A written description of how a process runs is a ____________.', 'mapping')],
 gram=[('He asked how long step six ____________.', 'took'),
       ('She asked ____________ the index was current.', 'whether'),
       ('They asked us ____________ move the deadline.', 'to'),
       ('He asked where the bank file ____________ from.', 'came'),
       ('He asked who ____________ the supplier index.', 'updated')]),

found=['Write down a process you run, and count the steps before you look at the clock.',
       'Find the one input in it that has no schedule and no owner.',
       'Ask somebody what their job varies with. Wait four seconds after they say they do not know.',
       'Name the output of each step in one process, and decide where you would put a check.'],
end_line='She answered in four seconds a question she had never been asked in two years.',
end_next='Next: Show, Don’t Describe',
)
