# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='What Happens Next',
gram='future forms: will, going to, present continuous',
ai="chaining: one step's output as the next step's input",
strap='CEFR B1 · Grammar: future forms: will, going to, present continuous · AI: chaining',
cando=['choose between will, going to and the present continuous for future events',
       'describe what will happen next in a process, and what is arranged',
       'explain how one step’s output becomes the next step’s input',
       'say where a small error early in a chain ends up',
       'decide where to put a check in a chain of steps'],
hero=('FOUR STEPS, AND A COMMA IN THE FIRST ONE',
      ['The first step mis-split one name in eleven hundred.',
       'By step four it had become a letter to nobody.'],
      [(900, 'orange', 'short'), (1660, 'grey', 'long'), (2400, 'blue', 'short')]),
hero_cap='Chaining: where a very small thing becomes a very visible one.',

warm=['What at your work depends on something else being right first?',
      'What is the difference between "it will arrive" and "it is arriving"?',
      'Where would you put one check in a four-step process?'],
read=[
 'Arclight’s client onboarding now runs as four steps. The first reads the client’s own '
 'customer list and splits it into names and addresses. The second classifies each customer '
 'by country. The third selects a letter template. The fourth produces the letter.',
 'Nothing in that arrangement is clever. What makes it worth describing is that each step '
 'takes the previous step’s output as its input, which means that the quality of step four '
 'is entirely determined by things that happened before anybody looked at anything.',
 'In October, step one met a customer called "Oduya, Blessing Chinyere" and split it at the '
 'first comma, which is correct for about eleven hundred of the eleven hundred and four '
 'names in the file. For this one it produced a surname of Oduya and a first name of '
 'Blessing Chinyere, which was right, and then met four more where it was wrong.',
 'Step two classified those four by country using the address, which was unaffected, so '
 'nothing looked wrong. Step three selected a template. Step four produced four letters '
 'addressed to people whose names were in the wrong order, one of which went to a client '
 'whose own customer then rang them about it.',
 'Thomas describes a chain as a thing that converts small errors into confident ones. The '
 'mistake in step one was a comma. By step four it had been through three operations that '
 'did exactly what they were asked, each of which treated the previous output as fact, and '
 'had become a printed letter with a company name at the bottom of it.'],
c_a=[('How many steps does onboarding run as?', 'four'),
     ('What does each step take as its input?', 'the previous step’s output'),
     ('What went wrong in step one?', 'it split some names at the first comma, putting them in the wrong order'),
     ('Why did step two not notice?', 'it classified by address, which was unaffected'),
     ('How does Thomas describe a chain?', 'a thing that converts small errors into confident ones')],
c_b=[('The onboarding process has four steps.', 'T'),
     ('Step two uses the name to classify by country.', 'F'),
     ('The comma rule was wrong for every name in the file.', 'F'),
     ('Four letters went out with names in the wrong order.', 'T'),
     ('Each step questioned the output of the one before.', 'F'),
     ('A client’s own customer rang about one of the letters.', 'T')],
c_c=[('The first step splits it into names and ____________.', 'addresses'),
     ('The quality of step four is determined by things that happened ____________.', 'before'),
     ('It split it at the first ____________.', 'comma'),
     ('The address was ____________.', 'unaffected'),
     ('Each step treated the previous output as ____________.', 'fact'),
     ('It had become a printed ____________.', 'letter')],
c_d=[('A chain turns small errors into ( frequent / confident ) ones.', ['frequent', 'confident'], 1),
     ('The error survived three steps because', ['nobody was watching', 'each step treated its input as fact', 'the steps were slow', 'the file was large'], 1),
     ('Step two was unaffected because it used', ['the name', 'the address', 'the template', 'the country'], 1),
     ('The original mistake was', ['a wrong address', 'a comma', 'a missing file', 'a bad template'], 1),
     ('The number of names mis-split was', ['1,104', '1,100', 'about 5', '4'], 2)],
c_e=('Which future form? Put each sentence in the right column.',
     [('It will take about four minutes.', 'will — a prediction'),
      ('We are running it on Thursday.', 'present continuous — arranged'),
      ('It is going to fail if we do not fix step one.', 'going to — evidence now'),
      ('I will check it when it finishes.', 'will — a prediction'),
      ('They are starting the onboarding on Monday.', 'present continuous — arranged'),
      ('That file is going to break step two.', 'going to — evidence now')],
     ['will — a prediction', 'present continuous — arranged', 'going to — evidence now']),

v_fig_title='ONE THING FEEDING ANOTHER',
v_fig=[('truck', 'a pipeline'), ('chart', 'a cascade'), ('scale', 'a junction'),
       ('doc', 'lineage'), ('bulb', 'a knock-on'), ('bank', 'latency')],
v_fig_cap='Six words for what happens between the first step and the last.',
vocab=[
 ('pipeline', 'a series of steps that work passes along in order'),
 ('cascade', 'a sequence in which each thing causes the next'),
 ('propagate', 'to pass onward through a system from one part to another'),
 ('knock-on', 'an effect caused indirectly by something earlier'),
 ('compound', 'to make something greater by adding to it repeatedly'),
 ('amplify', 'to make larger or more noticeable'),
 ('ripple', 'a small effect spreading outward from one point'),
 ('trace', 'to follow something back to where it came from'),
 ('lineage', 'the record of where a piece of data came from and what was done to it'),
 ('end-to-end', 'covering the whole process from start to finish'),
 ('latency', 'the delay between asking for something and getting it'),
 ('succession', 'a number of things following one after another'),
 ('inherit', 'to receive something from an earlier stage without changing it'),
 ('contaminate', 'to spoil something by letting something unwanted into it'),
 ('forward', 'to pass something on to the next recipient'),
 ('accumulate', 'to build up gradually over time'),
 ('drift', 'a slow movement away from where something should be'),
 ('junction', 'a point where two or more things meet or join'),
 ('terminal', 'at the end of a sequence, with nothing after it'),
 ('serial', 'arranged one after another rather than side by side')],
v_a=[('A series of steps that work passes along is a ____________.', 'pipeline'),
     ('The record of where data came from and what was done to it is its ____________.', 'lineage'),
     ('An effect caused indirectly by something earlier is a ____________ effect.', 'knock-on'),
     ('To follow something back to where it came from is to ____________ it.', 'trace'),
     ('Covering the whole process from start to finish is ____________.', 'end-to-end'),
     ('The delay between asking and getting is ____________.', 'latency'),
     ('To receive something from an earlier stage unchanged is to ____________ it.', 'inherit'),
     ('A slow movement away from where something should be is ____________.', 'drift')],
v_b=[('To propagate is to pass onward through a system', 'from one part to another.'),
     ('A cascade is a sequence in which', 'each thing causes the next.'),
     ('To contaminate something is to spoil it', 'by letting something unwanted in.'),
     ('A junction is a point where two or more things', 'meet or join.'),
     ('Serial means arranged one after another', 'rather than side by side.')],

g_title='Grammar: future forms — will, going to, present continuous',
g_rule=['Will states a prediction or a decision made now: I will check it when it finishes.',
        'Going to states an intention, or a prediction based on evidence you can see now.',
        'The present continuous states an arrangement already made: we are running it on Thursday.',
        'In a process, most future statements are arrangements, so the continuous is commonest.'],
g_fig=('LOOSE',
       ['It will probably run Thursday.',
        'We will sort out step one.',
        'The file might break it.',
        'It will be finished soon.'],
       'PRECISE',
       ['We are running it at 09:00 on Thursday.',
        'Jonas is rewriting step 1 on Tuesday.',
        'That file is going to break step 2.',
        'It will finish by 16:00, or it alerts.'],
       'a prediction nobody has arranged',
       'an arrangement with a time and a name'),
g_fig_cap='Most of what people call a plan is the left-hand column.',
g_a=[('We ____________ running it at nine on Thursday. (be)', 'are'),
     ('I ____________ check it when it finishes. (will)', 'will'),
     ('That file is ____________ to break step two. (go)', 'going'),
     ('Jonas ____________ rewriting step one on Tuesday. (be)', 'is'),
     ('It ____________ finish by four, or it alerts. (will)', 'will'),
     ('They ____________ going to need a second check. (be)', 'are'),
     ('We ____________ starting the onboarding on Monday. (be)', 'are'),
     ('If step one fails, step two ____________ inherit it. (will)', 'will'),
     ('She ____________ going to look at it this afternoon. (be)', 'is')],
g_b=[('We ( are running / will run ) it at nine on Thursday — it is in the diary.', ['are running', 'will run'], 0),
     ('That file is ____ to break step two.', ['go', 'going', 'gone', 'goes'], 1),
     ('I ____ check it when it finishes.', ['am checking', 'will', 'will check', 'check'], 2),
     ('They ____ going to need a second check.', ['is', 'are', 'be', 'will'], 1),
     ('Jonas ____ rewriting step one on Tuesday.', ['will', 'is', 'has', 'does'], 1),
     ('If step one fails, step two ____ inherit it.', ['is', 'will', 'will be', 'going to'], 1)],

d1=dict(title='Where did the name come from?',
        fig=(['The name is the wrong way round.', 'In the letter, or in the file?'],
             ['In the letter.', 'Then we have to go backwards.']),
        cap='Fatima and Jonas, tracing one letter.',
        lines=[('Fatima', 'This letter has the name the wrong way round. Her surname is Oduya.'),
               ('Jonas', 'Is it wrong in the client’s original file?'),
               ('Fatima', 'No. The file is correct. I have just checked.'),
               ('Jonas', 'Then it went wrong somewhere in the four steps.'),
               ('Fatima', 'Can you tell me which one?'),
               ('Jonas', 'Not immediately. Step four produced it from what step three gave it.'),
               ('Fatima', 'And step three from step two.'),
               ('Jonas', 'And step two from step one. I have to work backwards through all four.'),
               ('Fatima', 'How long?'),
               ('Jonas', 'An hour, maybe. It will be step one. It is always the splitting.'),
               ('Fatima', 'If you know that, why does it take an hour?'),
               ('Jonas', 'Because knowing and being able to show it are different, and I will be asked.')],
        a=[('What is wrong with the letter?', 'the name is the wrong way round'),
           ('Is the client’s original file correct?', 'yes'),
           ('Why can Jonas not say immediately which step failed?', 'because each step produced its output from the one before, so he must work backwards'),
           ('Where does he expect the fault to be?', 'step one, the splitting'),
           ('Why does it still take an hour?', 'because knowing and being able to show it are different, and he will be asked')],
        b=[('Her ____________ is Oduya.', 'surname'),
           ('It went wrong somewhere in the four ____________.', 'steps'),
           ('I have to work ____________ through all four.', 'backwards'),
           ('It is always the ____________.', 'splitting')]),
d2=dict(title='One check, or four?',
        fig=(['A check after every step.', 'Four checks for one error a year.'],
             ['One error that reached a client.', 'And three that did not.']),
        cap='Marta and Thomas, designing where the checks go.',
        lines=[('Marta', 'A check after every step. Four checks, and nothing inherits a fault.'),
               ('Thomas', 'Four checks on eleven hundred records, every onboarding.'),
               ('Marta', 'Yes.'),
               ('Thomas', 'We onboard about twenty clients a year. That is eighty checks.'),
               ('Marta', 'For one error that reached a client’s customer, which is the worst kind we have.'),
               ('Thomas', 'There were three others that did not reach anybody, and we caught them at the end.'),
               ('Marta', 'We caught them at the end after an hour of tracing each one.'),
               ('Thomas', 'Put one check after step one. That is where it always goes wrong.'),
               ('Marta', 'Always so far. Eleven onboardings is not always.'),
               ('Thomas', 'Then put one after step one now and add others when something gets past it.'),
               ('Marta', 'That is reasonable and it means we learn from reaching a client again.'),
               ('Thomas', 'It does. I do not have a way round that and nor do you.')],
        unresolved=True,
        a=[('What does Marta propose?', 'a check after every step'),
           ('What is Thomas’s arithmetic?', 'about twenty onboardings a year, so eighty checks'),
           ('How many errors reached a client?', 'one, with three others caught at the end'),
           ('What does Thomas propose instead?', 'one check after step one, adding others when something gets past it'),
           ('What does Marta accept and object to?', 'she accepts it is reasonable but objects that it means learning by reaching a client again')],
        b=[('Nothing ____________ a fault.', 'inherits'),
           ('That is eighty ____________.', 'checks'),
           ('Eleven onboardings is not ____________.', 'always'),
           ('We learn from reaching a ____________ again.', 'client')]),

speak=[('Will, going to, or arranged?',
        ['Student A: say six things about next week at your work.',
         'Student B: say which form each one needs and why.',
         'Find the ones where you used will for something already arranged.']),
       ('Spoken specification: brief a chain',
        ['Choose work with at least three steps where each uses the one before.',
         'Brief it aloud, naming each step’s input and where a check would go.',
         'Your partner asks what step three would do with a bad input from step two.']),
       ('Trace it back',
        ['In pairs, think of a wrong result either of you has seen at work.',
         'Work backwards through the steps until you reach where it started.',
         'Say how long the tracing would take, and what would make it quicker.'])],

ext_title='A chain converts small errors into confident ones',
ext_fig=figs.datatable('ONE COMMA, FOUR STEPS',
                       ['Step', 'What it did', 'Did it question its input?'],
                       [['1 split names', 'put 4 names in reverse order', 'nothing to question'],
                        ['2 classify by country', 'classified correctly, by address', 'no'],
                        ['3 select template', 'selected correctly', 'no'],
                        ['4 produce letter', 'produced a correct letter', 'no'],
                        ['result', '4 letters to reversed names', '—']]),
ext_fig_cap='Every step did exactly what it was asked. The last column is why that was not enough.',
ext=[
 'Chaining is the arrangement that makes most of the value in this book possible, because '
 'few useful jobs are one operation. Extract, then classify, then draft, then check. Each '
 'step is simple, each can be specified properly, and the combination does something no '
 'single step could.',
 'It also introduces a property that surprises people the first time they meet it: a chain '
 'does not merely pass errors along, it dresses them. The original fault at Arclight was a '
 'comma rule applied to four names in a file of eleven hundred. Three subsequent steps '
 'treated the result as a fact, performed correctly on it, and produced a finished letter '
 'with a company name at the bottom.',
 'Nothing in the chain was capable of noticing, and this is the important part. Step two '
 'classified by address, which was correct; it had no business looking at the name and no '
 'reason to doubt it. Step three and step four were presented with consistent, plausible '
 'input. The error only became visible when a human being who knew the person read the '
 'result.',
 'This changes where checks belong. In a single-step job the natural place to check is the '
 'output, because that is where errors are. In a chain the natural place is wherever an '
 'error would become invisible, which is usually early, and specifically at any step that '
 'transforms something into a form the later steps cannot question.',
 'The second thing worth building is lineage: a record of which step produced each field, '
 'so that a wrong result can be traced in seconds rather than in an hour of working '
 'backwards. The hour matters less than it sounds, because errors are rare. What matters is '
 'that an hour of tracing is a strong discouragement, and people stop investigating things '
 'that take an hour, which is how a recurring fault becomes a known quirk.'],
dp1=('Error propagation',
     'Quality-engineering practice generally holds that the cost of correcting a fault rises '
     'with the number of downstream steps it has passed through before detection.',
     'Source: general quality-engineering literature, 2026. Ratios are context-dependent.'),
e_a=[('Why is chaining necessary?', 'because few useful jobs are a single operation'),
     ('What does a chain do to errors besides passing them along?', 'it dresses them, making them look like finished correct work'),
     ('Why could step two not notice the fault?', 'it classified by address and had no reason to look at the name'),
     ('Where do checks belong in a chain?', 'wherever an error would become invisible, which is usually early'),
     ('Why does lineage matter more than the hour it saves?', 'because people stop investigating things that take an hour, so faults become known quirks')],
e_b=[('Most useful jobs are a single operation.', 'F'),
     ('Each step at Arclight performed incorrectly.', 'F'),
     ('Step two should have questioned the name.', 'F'),
     ('In a chain, the output is always the best place to check.', 'F'),
     ('Lineage allows a wrong result to be traced quickly.', 'T'),
     ('An hour of tracing discourages investigation.', 'T')],

w_model=(
 'Purpose: onboard a new client without a fault in an early step reaching their customers. '
 'Scope: the 4 onboarding steps for 1 client at a time. Inputs: the client’s customer list '
 'as supplied, unaltered, and the template set. Criteria: step 1 records which rule it used '
 'to split each name; a check after step 1 compares 20 names chosen at random against the '
 'original file; every field carries the step number that produced it. Done: 1 letter set '
 'and 1 lineage record covering every field. Fallback: if more than 1 of the 20 sampled '
 'names disagrees with the original file, stop after step 1 and tell Jonas.'),
w_fig=figs.handover('WHERE THE CHECK GOES IN A CHAIN',
                    ['Step 1 splits names', 'Check 20 against the original', 'Steps 2 to 4 run'],
                    'Fatima reads 1 finished letter against the client file',
                    'Early, where the error is still visible.'),
w_fig_cap='One check early and one at the end. The three in the middle would have caught nothing.',
w_task='Write a brief for a process with at least three chained steps.',
w_steps=['Name the steps in order and say what each takes as its input.',
         'Identify the step where an error would stop being visible.',
         'Put a check immediately after that step, and say what it compares.',
         'Require each field to carry the step that produced it.',
         'Say what happens when the check fails, and who is told.'],
w_bank=['Step … takes … and produces …',
        'After step … , compare … against …', 'Every field records …',
        'If more than … disagree, …', '… is told, and the chain does not continue.'],
w_check=['Have you named the input of every step, not just the first?',
         'Is your check placed where an error would still be visible?',
         'Does the check compare against something outside the chain?',
         'Can a wrong field be traced to the step that made it?'],

t_title='Chaining: one step’s output as the next step’s input',
t_fig=figs.split('WHERE AN ERROR IS STILL VISIBLE',
                 'Visible — check here',
                 ['right after a name is split',
                  'right after a value is parsed',
                  'right after a category is assigned',
                  'against the original source file'],
                 'Invisible — too late',
                 ['after the letter is drafted',
                  'after the total is calculated',
                  'after the routing is done',
                  'against the previous step only']),
t_fig_cap='A check that compares one step against the step before it will agree with itself.',
t_body=[
 'Write the chain down as steps with named inputs, because the input of step three is not '
 'the client’s file, it is step two’s opinion of the client’s file. People think of a '
 'chain as four steps on the same data, and it is not: it is four steps on four different '
 'things, three of which were produced by this company.',
 'Then find the step where an error stops being visible, and put a check immediately after '
 'it. This is almost always early, and specifically at the point where something is '
 'converted into a form that later steps cannot question. A name split into two fields '
 'looks exactly as correct when it is wrong as when it is right.',
 'Make the check compare against something outside the chain. Comparing step two’s output '
 'with step one’s output tells you that two steps agree, which they will, because one of '
 'them produced the other. The original client file is the only thing in the arrangement '
 'that has not been through any of this.'],
t_say=[('Name the real input: ', 'Step 3 takes step 2’s output, not the client’s file.'),
       ('Place the check early: ', 'Check 20 split names against the original file after step 1.'),
       ('Compare outside the chain: ', 'Compare against the file the client sent, not against step 1.')],
t_bound=('A check after one step tells you nothing about the others. Twenty names verified '
         'after step one does not mean the countries in step two are right, and a chain '
         'with one good check in it will produce confidently wrong output from any step that '
         'nobody is comparing against anything.'),
t_a=[('Step 3 takes step 2’s ____________, not the client’s file.', 'output'),
     ('Check 20 split names against the ____________ file after step 1.', 'original'),
     ('Compare against the file the ____________ sent.', 'client'),
     ('It is four steps on four different ____________.', 'things'),
     ('A name split into two fields looks exactly as ____________ when it is wrong.', 'correct'),
     ('One of them ____________ the other.', 'produced')],
t_b_rubric='Say where the check belongs and what it should compare against.',
t_b=[('Split names, classify, draft, send.', 'after splitting, comparing samples against the original file'),
     ('Extract amounts, total, report.', 'after extraction, comparing samples against the source invoices'),
     ('Classify messages, route, reply.', 'after classification, comparing samples against the message text'),
     ('Translate, format, print.', 'after translation, comparing against the source text by a speaker')],

case=dict(
 title='Decision Clinic · One check, or four?',
 brief=[
  'Onboarding runs as four chained steps. In eleven onboardings there have been four faults: '
  'three caught at the end after about an hour of tracing each, and one that reached a '
  'client’s own customer.',
  'All four originated in step one. Marta wants a check after every step. Thomas wants one '
  'check after step one, on the grounds that this is where all four faults began.',
  'Jonas points out that a check after step one would have caught all four, and that nobody '
  'knows whether the next fault will start there, because eleven onboardings is not many.'],
 exhibit=figs.datatable('FOUR FAULTS IN ELEVEN ONBOARDINGS',
                        ['Fault', 'Started at', 'Caught', 'Cost'],
                        [['names reversed', 'step 1', 'by a client', '1 apology, 4 letters'],
                         ['two addresses merged', 'step 1', 'at the end', '1 hour tracing'],
                         ['country misread', 'step 1', 'at the end', '1 hour tracing'],
                         ['name truncated', 'step 1', 'at the end', '1 hour tracing'],
                         ['faults from steps 2–4', '—', '0', '—']]),
 exhibit_cap='Four faults, all from step one, in eleven onboardings.',
 exhibit_note='Eleven onboardings is a small sample. No fault has yet originated in steps '
              'two, three or four, which may mean those steps are sound or may mean nothing.',
 voices=[('Marta Olsen', 'risk and liability',
          'Check after every step. We have eleven data points and we are about to design '
          'for the pattern in them, which is how everybody designs the wrong thing.'),
         ('Thomas Reed', 'service delivery',
          'Eighty checks a year to catch faults that have never once occurred. One check '
          'after step one catches everything we have ever seen, in about four minutes.'),
         ('Jonas Riedel', 'systems and workflows',
          'There is a third option nobody has said. Steps two to four could each record what '
          'they received, so a fault anywhere can be traced in seconds. That is not a check, '
          'but it removes the hour.')],
 steps=[('Find it', 'How many faults, from which step, and how were they caught?'),
        ('Compare it', 'What does checking every step buy over checking step one?'),
        ('Infer it', 'Why is Marta uneasy about designing from eleven onboardings?'),
        ('Weigh it', 'Eighty checks a year against an hour of tracing per fault.'),
        ('Decide', 'What is built, and what is explicitly not built?')],
 analysis=[('Find it. Where did all four faults begin?', 'step one'),
           ('Compare it. What would checking every step have caught that one check would not?', 'nothing, in the eleven onboardings so far'),
           ('Infer it. What is Marta’s real objection?', 'that eleven onboardings is too small a sample to design a permanent arrangement from'),
           ('Weigh it. What does Jonas’s option cost compared with the other two?', 'almost nothing, because recording what each step received is not a check'),
           ('Decide. What combination answers all three positions?', 'one check after step one, plus recording at every step so that any future fault is traceable quickly')],
 decision='Write what is built into onboarding, and what is not.',
 decision_steps=['Say where the check goes, and what it compares against.',
                 'Say what every step records, whether or not it is checked.',
                 'Say what would cause a second check to be added.',
                 'Say what you are deliberately not doing, and why.'],
 bank=['A check runs after step … , comparing … against …',
       'Every step records …', 'A second check is added if …',
       'We are deliberately not … , because …', 'This is reviewed after …'],
 outcome='One check after step one, comparing twenty sampled names against the client’s '
         'original file, plus a recorded input at every step. In the next nineteen '
         'onboardings the check stopped three runs, all at step one. One fault did originate '
         'in step three, a template selected for the wrong country; it was caught at the end '
         'as before, but traced in forty seconds instead of an hour. Marta was right that a '
         'fault would eventually come from elsewhere and wrong that a check was the answer '
         'to it.',
 outcome_q=[('What did the step-three fault show?', 'that faults do originate elsewhere, but that recording was enough to handle it cheaply'),
            ('In what way was Marta both right and wrong?', 'right that eleven onboardings was too small a sample, wrong that the remedy had to be a check at every step')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Onboard the new client',
 task=['This is the onboarding brief as it stood in October, when the four reversed names '
       'went out. It describes four steps and reads as though it describes one job.',
       'Nothing in it says what any step takes as its input, so nothing in it can say where '
       'a check would go or what a check would compare against.'],
 draft=['Onboard the new client using their customer list.',
        'Split out the names, work out the countries and produce the letters.',
        'Use the right template for each one.',
        'Check it looks sensible before anything goes out.',
        'If something does not work, pass it on to the next stage anyway.',
        'Tell me when their customers have been written to.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Four chained steps described as one sentence, with the dangerous instruction on line five.',
 asked=['Each step’s input named',
        'A check after step 1 against the original file',
        'A stop when the check fails'],
 back=['One job, four invisible stages',
       'A look at the finished letters only',
       'Faults passed forward by instruction'],
 gap='Split out, work out and produce named no inputs, "check it looks sensible" checked the '
     'last thing in the chain, and "pass it on anyway" instructed the chain to carry a fault '
     'forward.',
 back_cap='Four letters, correctly produced, to people whose names were the wrong way round.',
 back_note='Line five is the only line in any brief in this book that explicitly instructs a '
           'process to propagate a fault, and it was written to prevent delays.',
 diagnosis=[('[1] "their customer list" — the file they sent, or our copy?', 'ambiguous referent'),
            ('[2] "split out the names" — and if a name has two commas?', 'missing condition'),
            ('[3] "the right template" — right by what rule?', 'unscoped set'),
            ('[4] "check it looks sensible" — against what?', 'unscoped set'),
            ('[5] "pass it on anyway" — pass what on, and to where?', 'ambiguous referent'),
            ('[6] "if something does not work" — and if the check fails?', 'missing condition')],
 rewrite='Rewrite the brief as four steps, each with a named input, with one check placed '
         'where a fault would still be visible.',
 scaffold=['Why a fault in step one is worse than a fault in step four',
           'Which client, which list, and which steps are covered',
           'The client’s file as supplied, unaltered, and the template set',
           'What each step takes and produces, and what the check compares',
           'The letters and the lineage record that come back',
           'What happens when the check after step one fails'],
 bank=['Onboard … so that no fault in … reaches …',
       'Steps … to … , for client … only.',
       'Work from the file the client supplied, unaltered.',
       'Step … takes … and produces … ; after step … , compare … against …',
       'Return … and a record of …', 'If more than … disagree, …'],
 check=['Does every step name what it takes as its input?',
        'Is the check placed where the error would still be visible?',
        'Does the check compare against something outside the chain?',
        'Have you removed any instruction to continue past a fault?'],
 model=['Onboard the new client without a fault in an early step reaching their own customers',
        'The 4 onboarding steps for this client only; existing clients are out of scope',
        'The customer list exactly as the client supplied it, unaltered, and template set version 2',
        'Step 1 splits names and records which rule it used; step 2 classifies by address; step 3 selects a template by country; step 4 produces the letter; after step 1, compare 20 names chosen at random against the client’s original file',
        '1 letter set and 1 lineage record showing which step produced each field, by 17:00 on Wednesday',
        'If more than 1 of the 20 sampled names disagrees with the original file, stop after step 1, send nothing and tell Jonas within the hour'],
 cost='4 letters to a client’s own customers with their names reversed, 1 of whom telephoned '
      'the client about it, about 3 hours of tracing across 4 faults, and 1 instruction in '
      'the brief that told the process to carry faults forward.'),

rev_fig=figs.split('THREE FUTURES',
                   'Arranged — present continuous',
                   ['We are running it at 09:00 Thursday.',
                    'Jonas is rewriting step 1 on Tuesday.',
                    'They are starting on Monday.',
                    'She is checking it this afternoon.'],
                   'Predicted — will / going to',
                   ['It will finish by 16:00.',
                    'That file is going to break step 2.',
                    'I will check it when it finishes.',
                    'They are going to need a second check.']),
rev_fig_cap='In a process, most of what matters is already arranged, so the left column wins.',
rev=dict(
 read=[('A chain converts small errors into', ['frequent errors', 'confident ones', 'visible ones', 'cheap ones'], 1),
       ('"We are running it on Thursday" expresses', ['a prediction', 'an arrangement', 'a possibility', 'a wish'], 1),
       ('A check in a chain should compare against', ['the previous step', 'something outside the chain', 'the final output', 'nothing'], 1),
       ('In the Clinic, what was built besides a check?', ['more staff', 'a record at every step', 'a second template', 'nothing'], 1)],
 listen_text='Three things about chains. Write down what each step actually takes as its '
             'input, because step three takes step two’s opinion and not the client’s file. '
             'Put your check where an error would stop being visible, which is nearly always '
             'early. And compare against something outside the chain, because two steps that '
             'produced each other will always agree.',
 listen=[('Write down what each step actually takes as its ____________.', 'input'),
         ('Step three takes step two’s ____________.', 'opinion'),
         ('Put your check where an error would stop being ____________.', 'visible'),
         ('Two steps that produced each other will always ____________.', 'agree')],
 speak=['Describe a chain at your work. Your partner asks what step two would do with a bad input.',
        'Decide together where one check would catch the most.'],
 write='Write a three-step chain with named inputs and one check, saying what it compares.',
 vocab=[('A series of steps that work passes along is a ____________.', 'pipeline'),
        ('The record of where data came from is its ____________.', 'lineage'),
        ('An effect caused indirectly by something earlier is a ____________ effect.', 'knock-on'),
        ('To follow something back to where it came from is to ____________ it.', 'trace'),
        ('The delay between asking and getting is ____________.', 'latency')],
 gram=[('We ____________ running it at nine on Thursday.', 'are'),
       ('That file is ____________ to break step two.', 'going'),
       ('I ____________ check it when it finishes.', 'will'),
       ('Jonas ____________ rewriting step one on Tuesday.', 'is'),
       ('If step one fails, step two ____________ inherit it.', 'will')]),

found=['Draw a process at your work as steps, and write what each one takes from the one before.',
       'Find the step where a mistake would stop being visible.',
       'Ask what one wrong field in a finished document would take to trace.',
       'Check whether any check at your work compares one step against the step before it.'],
end_line='Three steps did exactly what they were asked, and the comma reached a client’s customer.',
end_next='Next: Working Without You',
)
