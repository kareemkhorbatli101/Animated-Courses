# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='It Is Said That',
gram='passive reporting: it is said that, is believed to',
ai='making it show its working',
strap='CEFR B2 · Grammar: passive reporting · AI: making it show its working',
cando=['use it is said that and is believed to in order to report without endorsing',
       'attribute a claim to an unnamed source without appearing to assert it myself',
       'ask for the working behind a result rather than only the result',
       'tell a genuine derivation from an explanation written after the fact',
       'say what showing the working establishes and what it does not'],
hero=('A FIGURE, AND THE FOUR LINES THAT PRODUCED IT',
      ['The total was right, and the method was wrong,',
       'which is said to be impossible until you see it happen.'],
      [(900, 'grey', 'long'), (1680, 'orange', 'short'), (2420, 'blue', 'long')]),
hero_cap='Showing the working is how you discover that a right answer was reached wrongly.',

warm=['When did you last accept a number without asking how it was arrived at?',
      'What does "it is believed to be reliable" tell you about who believes it?',
      'Can a correct answer be produced by a method that is wrong? What follows if so?'],
read=[
 'In May, Kenji queried a supplier total that had come out at 31,480 euros, not because it '
 'looked wrong but because it looked suspiciously round in a month when nothing else had '
 'been. The figure turned out to be correct to the cent, and the way it had been arrived at '
 'was wrong in a manner that would have produced a wrong answer in about one month in four.',
 'The method had taken the sum of the invoice lines, then added the tax from a separate '
 'column, which double-counts tax on any invoice where the line totals already include it. '
 'In May, by coincidence, every invoice in the batch quoted its lines net of tax, so the '
 'two errors did not arise and the answer came out exactly right.',
 'Arclight now requires the working as well as the answer for anything that produces a '
 'figure: the intermediate results, in order, with a line for each operation performed. '
 'This costs about four lines of output and it is the only arrangement that can distinguish '
 'a sound method from a lucky one.',
 'Victor is careful about what this does and does not establish, and repeats the caution '
 'often enough that people have begun to repeat it back to him. A shown working is itself an '
 'output, produced by the same process, and it can be wrong in the same way the answer can. '
 'What it cannot easily be is wrong in a manner that happens to be internally consistent and '
 'arrive at the stated answer.',
 'The practical test he uses is whether the working could be followed by somebody with a '
 'calculator and no other knowledge. If each line follows from the line above by an '
 'operation anybody could repeat, the working is doing its job. If any line appears without '
 'a visible route from what preceded it, that line is where the attention belongs, and it '
 'is usually where the problem is.'],
c_a=[('Why did Kenji query the total?', 'because it looked suspiciously round in a month when nothing else was'),
     ('What was wrong with the method?', 'it added tax from a separate column, double-counting tax on invoices whose lines already included it'),
     ('Why did the answer come out right in May?', 'every invoice in that batch quoted its lines net of tax, so the error did not arise'),
     ('What does Arclight now require?', 'the intermediate results in order, with a line for each operation'),
     ('What is Victor’s practical test?', 'whether the working could be followed by somebody with a calculator and no other knowledge')],
c_b=[('The total was wrong.', 'F'),
     ('The method would have failed in about one month in four.', 'T'),
     ('Showing the working costs several pages.', 'F'),
     ('A shown working cannot be wrong.', 'F'),
     ('Each line should follow from the one above by a repeatable operation.', 'T'),
     ('Kenji queried the figure because it looked too large.', 'F')],
c_c=[('It looked suspiciously ____________.', 'round'),
     ('Which double-counts tax on any invoice where the line totals already ____________ it.', 'include'),
     ('Every invoice in the batch quoted its lines ____________ of tax.', 'net'),
     ('The intermediate results, in ____________.', 'order'),
     ('A shown working is itself an ____________.', 'output'),
     ('That line is where the ____________ belongs.', 'attention')],
c_d=[('The May figure was ( right / wrong ) and the method was the other.', ['right', 'wrong'], 0),
     ('The method would have failed whenever', ['the batch was large', 'line totals already included tax', 'tax rates changed', 'invoices were late'], 1),
     ('Victor’s caution is that a working', ['cannot be checked', 'is itself an output and can be wrong', 'is always correct', 'is unnecessary'], 1),
     ('A line with no visible route from the one above is', ['acceptable', 'where the attention belongs', 'the conclusion', 'a formatting error'], 1),
     ('The working costs about', ['four lines', 'four pages', 'four hours', 'nothing at all'], 0)],
c_e=('Reporting or asserting? Put each sentence in the right column.',
     [('It is said that the method was changed in April.', 'Reporting'),
      ('The method was changed in April.', 'Asserting'),
      ('The file is believed to be current.', 'Reporting'),
      ('The file is current.', 'Asserting'),
      ('It is understood that two versions exist.', 'Reporting'),
      ('Two versions exist.', 'Asserting')],
     ['Reporting', 'Asserting']),

v_fig_title='THE WORKING, NOT THE ANSWER',
v_fig=[('chart', 'a derivation'), ('doc', 'the workings'), ('scale', 'auditable'),
       ('bulb', 'a rationale'), ('bank', 'a decision trail'), ('note', 'opacity')],
v_fig_cap='Six words for what sits between the question and the figure.',
vocab=[
 ('reasoning', 'the chain of thought by which a conclusion is reached'),
 ('rationale', 'the stated reason for doing something in a particular way'),
 ('derivation', 'the process by which a result is obtained from what came before'),
 ('workings', 'the written steps showing how a result was calculated'),
 ('assumption', 'something taken as true without being established'),
 ('justification', 'the argument offered in support of a decision'),
 ('methodology', 'the set of methods used, and the reasons for choosing them'),
 ('transparency', 'the quality of allowing outsiders to see how something works'),
 ('opacity', 'the quality of not allowing outsiders to see inside'),
 ('black box', 'a thing whose inner workings cannot be observed'),
 ('auditable', 'able to be examined and traced by somebody outside'),
 ('reproducible', 'able to be repeated by somebody else with the same result'),
 ('account for', 'to explain the whole of something, leaving no part unexplained'),
 ('rationalise', 'to construct a reason after the decision has been taken'),
 ('post hoc', 'constructed after the event rather than before it'),
 ('narrative', 'an account that makes events hang together as a story'),
 ('defensible', 'able to be maintained under challenge'),
 ('scrutable', 'able to be understood on examination'),
 ('intermediate result', 'a figure produced on the way to the final one'),
 ('decision trail', 'the recorded sequence of choices leading to an outcome')],
v_a=[('The written steps showing how a result was calculated are the ____________.', 'workings'),
     ('A thing whose inner workings cannot be observed is a ____________.', 'black box'),
     ('Able to be repeated by somebody else with the same result is ____________.', 'reproducible'),
     ('A reason constructed after the decision is ____________.', 'post hoc'),
     ('The recorded sequence of choices leading to an outcome is the ____________.', 'decision trail'),
     ('A figure produced on the way to the final one is an ____________.', 'intermediate result'),
     ('Able to be maintained under challenge is ____________.', 'defensible'),
     ('To explain the whole of something is to ____________ it.', 'account for')],
v_b=[('A rationale is the stated reason for doing something', 'in a particular way.'),
     ('To rationalise is to construct a reason', 'after the decision has been taken.'),
     ('Transparency is the quality of allowing outsiders', 'to see how something works.'),
     ('An assumption is something taken as true', 'without being established.'),
     ('Methodology is the set of methods used', 'and the reasons for choosing them.')],

g_title='Grammar: passive reporting',
g_rule=['It is said that + clause reports a claim without naming who makes it.',
        'X is believed to + verb attributes a belief to nobody in particular.',
        'These forms report without endorsing; use them when you do not know the source.',
        'They are dishonest when used to avoid naming a source you do know.'],
g_fig=('LOOSE',
       ['It is thought to be reliable.',
        'The file is believed to be current.',
        'It is said that the method changed.',
        'The figure is understood to be net.'],
       'PRECISE',
       ['Jonas says it has not failed since March.',
        'The Current folder lists version 4, dated 2 Feb.',
        'The method changed on 3 April, per the log.',
        'The invoice states "net of tax" on line 1.'],
       'a claim with no owner',
       'a claim with a source attached'),
g_fig_cap='These forms are honest for a rumour and evasive for a fact you could have checked.',
g_a=[('It ____________ said that the method changed in April. (be)', 'is'),
     ('The file is ____________ to be current. (believe)', 'believed'),
     ('It is ____________ that two versions exist. (understand)', 'understood'),
     ('The figure is ____________ to be net of tax. (think)', 'thought'),
     ('It ____________ been reported that the export was stale. (have)', 'has'),
     ('The supplier is ____________ to have changed its format. (say)', 'said'),
     ('It is widely ____________ that the rate is about two per cent. (assume)', 'assumed'),
     ('These figures are ____________ to be provisional. (know)', 'known'),
     ('It ____________ generally accepted that volume exposes old faults. (be)', 'is')],
g_b=[('It ( says / is said ) that the method changed in April.', ['says', 'is said'], 1),
     ('The file is ____ to be current.', ['believe', 'believing', 'believed', 'belief'], 2),
     ('It is ____ that two versions exist.', ['understand', 'understood', 'understanding', 'understands'], 1),
     ('The supplier is said ____ changed its format.', ['to have', 'to has', 'having', 'have'], 0),
     ('These figures are ____ to be provisional.', ['know', 'knew', 'known', 'knowing'], 2),
     ('It ____ been reported that the export was stale.', ['have', 'has', 'is', 'was'], 1)],

d1=dict(title='Right for the wrong reason',
        fig=(['The total is correct to the cent.', 'And the method is wrong.'],
             ['Then what are we worried about?', 'Next month.']),
        cap='Kenji and Victor, over the May figure.',
        lines=[('Kenji', 'The total is 31,480 and I have checked it against the invoices myself; it is '
                         'correct to the cent.'),
               ('Victor', 'It is correct, and the working underneath it adds the tax twice.'),
               ('Kenji', 'If it adds tax twice, the answer cannot be correct. One of those statements is wrong.'),
               ('Victor', 'Neither of them is. Every invoice in May quoted its lines net of tax, so there '
                          'was no tax in the line totals to double.'),
               ('Kenji', 'So the method has a fault that did not fire this month.'),
               ('Victor', 'It did not fire in May. In February about a third of invoices included tax in the lines.'),
               ('Kenji', 'Then in February the total would have been out by roughly a third of the tax.'),
               ('Victor', 'Which is about eleven hundred euros, and February reconciled, which worries me more.'),
               ('Kenji', 'It reconciled because the error was inside the tolerance we set.'),
               ('Victor', 'Five cents a line, over eight hundred lines, hides a great deal.'),
               ('Kenji', 'So the tolerance was concealing a method fault rather than absorbing rounding.'),
               ('Victor', 'That is what I think, and I only know it because the working was on the page.')],
        unresolved=True,
        a=[('Is the May total correct?', 'yes, correct to the cent'),
           ('What is wrong with the method?', 'it adds tax twice where line totals already include it'),
           ('Why did the fault not appear in May?', 'every invoice that month quoted its lines net of tax'),
           ('What would February have been out by?', 'about eleven hundred euros'),
           ('Why did February reconcile?', 'because the error fell inside the tolerance, which was concealing it')],
        b=[('The working underneath it adds the tax ____________.', 'twice'),
           ('Every invoice in May quoted its lines ____________ of tax.', 'net'),
           ('Which is about eleven hundred ____________.', 'euros'),
           ('I only know it because the working was on the ____________.', 'page')]),
d2=dict(title='A working, or a story?',
        fig=(['It explains how it got there.', 'Does it, or does it describe it?'],
             ['What is the difference?', 'Whether you could repeat it.']),
        cap='Fatima and Victor, over a paragraph of explanation.',
        lines=[('Fatima', 'This one explains its reasoning. Three paragraphs of it, at the end of the answer.'),
               ('Victor', 'Could you reproduce the figure from those three paragraphs, with a calculator?'),
               ('Fatima', 'Not exactly. It describes the approach rather than giving the steps.'),
               ('Victor', 'Then it is an account of the reasoning and not the reasoning itself.'),
               ('Fatima', 'That seems a fine distinction for something that is clearly trying to be helpful.'),
               ('Victor', 'It is the whole distinction. An account can be written to fit any answer at all.'),
               ('Fatima', 'You think it was written after the figure.'),
               ('Victor', 'I think it was produced alongside the figure, which is not the same as being '
                          'produced by whatever produced the figure.'),
               ('Fatima', 'So I should ask for four lines of arithmetic rather than three paragraphs of prose.'),
               ('Victor', 'Four lines of arithmetic that somebody could repeat. Prose that sounds like '
                          'reasoning is the most convincing thing in this entire book.'),
               ('Fatima', 'And the least informative.'),
               ('Victor', 'And the hardest to argue with, which is why it is worth refusing.')],
        a=[('What does the answer include?', 'three paragraphs explaining its reasoning'),
           ('What test does Victor apply?', 'whether the figure could be reproduced from it with a calculator'),
           ('What distinction does he draw?', 'between an account of reasoning and the reasoning itself'),
           ('Why does an account not establish much?', 'because it can be written to fit any answer'),
           ('What should Fatima ask for instead?', 'four lines of arithmetic somebody could repeat')],
        b=[('It describes the ____________ rather than giving the steps.', 'approach'),
           ('An account can be written to fit any ____________ at all.', 'answer'),
           ('Four lines of ____________ that somebody could repeat.', 'arithmetic'),
           ('The hardest to argue with, which is why it is worth ____________.', 'refusing')]),

speak=[('Report without endorsing',
        ['Student A: state four things you have heard about your industry.',
         'Student B: rephrase each using it is said that or is believed to.',
         'Then ask who actually says it. Note which ones have no answer.']),
       ('Spoken specification: ask for the working',
        ['Choose work that produces a number.',
         'Brief aloud what the working must contain for somebody to repeat it.',
         'Your partner offers a prose explanation instead. Refuse it and say why.']),
       ('Reproduce it',
        ['One of you explains how a figure at your work is arrived at.',
         'The other tries to reproduce it from the explanation alone.',
         'Note the first step where you needed to ask a question.'])],

ext_title='A working you could repeat, not a story you could believe',
ext_fig=figs.datatable('TWO THINGS THAT BOTH LOOK LIKE EXPLANATION',
                       ['', 'A derivation', 'An account'],
                       [['form', '4 lines of arithmetic', '3 paragraphs of prose'],
                        ['test', 'can you reproduce the figure?', 'does it sound right?'],
                        ['if the answer is wrong', 'a line will not follow', 'it still reads well'],
                        ['can be written after', 'no, it would not reconcile', 'yes, for any answer'],
                        ['how convincing', 'moderately', 'very']]),
ext_fig_cap='The last two rows are the ones that matter, and they point in opposite directions.',
ext=[
 'Asking for the working is the second of the two interventions that reliably improve the '
 'quality of what a company sends out, the first being asking for the source. The two are '
 'related but distinct: a source says where a claim came from, and a working says how a '
 'result was arrived at from material that may be perfectly well sourced.',
 'The May episode at Arclight illustrates why the working matters independently. The figure '
 'was correct, every input to it was correctly extracted from a properly cited invoice, and '
 'the method connecting the two was faulty in a way that would have produced a wrong answer '
 'in roughly one month in four. No amount of checking the answer or the sources would have '
 'found this, because both were sound.',
 'There is, however, a trap that catches people almost immediately, and it is worth more '
 'attention than it usually gets. What is produced in response to a request for reasoning '
 'is frequently an account of reasoning rather than a derivation: fluent prose describing an '
 'approach, which reads as an explanation and from which nothing can be reproduced. Such an '
 'account can be constructed to fit any answer, including a wrong one, and it is more '
 'persuasive than the arithmetic it replaces.',
 'The test that separates them is mechanical and it is the only one worth applying. Could '
 'somebody with a calculator, and no knowledge of the subject, start from the first line and '
 'arrive at the last? If every line follows from the one above by an operation a stranger '
 'could repeat, the working is genuine. If a line appears without a route from what '
 'preceded it, that line is where the fault will be.',
 'What a working does not establish is also worth being clear about. It is an output, '
 'produced by the same process as the answer, and it can be wrong. What makes it valuable '
 'is not that it is more trustworthy but that it is more constrained: a wrong working that '
 'is internally consistent and reaches the stated answer is substantially harder to produce '
 'by accident than a wrong answer on its own.'],
dp1=('Explanation and persuasion',
     'Research on explanation generally finds that the presence of an explanation increases '
     'acceptance of a conclusion, with the effect only weakly related to whether the '
     'explanation is actually informative.',
     'Source: general cognitive research on explanation, 2026. Effects vary by expertise.'),
e_a=[('What is the difference between a source and a working?', 'a source says where a claim came from; a working says how a result was arrived at'),
     ('Why would checking the answer not have found the May fault?', 'because the answer and the sources were both sound'),
     ('What is produced instead of a derivation, frequently?', 'an account of reasoning: fluent prose from which nothing can be reproduced'),
     ('What is the mechanical test?', 'whether somebody with a calculator and no knowledge could follow every line'),
     ('Why is a working valuable if it can be wrong?', 'because it is more constrained, so a consistent wrong working is harder to produce by accident')],
e_b=[('A working and a source establish the same thing.', 'F'),
     ('The May inputs were incorrectly extracted.', 'F'),
     ('An account of reasoning can be written to fit a wrong answer.', 'T'),
     ('A derivation is usually more persuasive than prose.', 'F'),
     ('A working cannot itself be wrong.', 'F'),
     ('Explanations increase acceptance largely regardless of their content.', 'T')],

w_model=(
 'Purpose: make it possible to tell a sound method from a lucky answer. Scope: every output '
 'that produces a figure; narrative summaries are excluded. Inputs: the source documents '
 'and the calculation rules dated 4 May. Criteria: return the intermediate results in '
 'order, 1 line per operation, so that a reader with a calculator and no other knowledge '
 'can reproduce the final figure; prose descriptions of the approach are not accepted in '
 'place of lines. Done: 1 figure and 1 working of no more than 8 lines. Fallback: if a step '
 'cannot be expressed as an operation on the line above, mark that line "[not derived]" and '
 'state what it was taken from.'),
w_fig=figs.chain('WHAT A WORKING MUST SURVIVE',
                 ['Start from a named input', 'One operation per line',
                  'Each line uses the one above', 'The last line is the answer',
                  'A stranger with a calculator can repeat it']),
w_fig_cap='Five conditions. A prose explanation satisfies none of them and reads better than all of them.',
w_task='Write a brief requiring the working behind a figure.',
w_steps=['Choose work that produces a number somebody relies on.',
         'Require intermediate results, one line per operation.',
         'State the reproduction test in the brief, in those words.',
         'Say explicitly that prose is not accepted in place of lines.',
         'Say what to do when a step cannot be expressed as an operation.'],
w_bank=['Return … and the intermediate results, …',
        'A reader with a calculator must be able to …',
        'Prose descriptions of the approach are not accepted …',
        'If a step cannot be expressed as … , mark it …',
        'The working must not exceed … lines.'],
w_check=['Does your brief require lines rather than paragraphs?',
         'Is the reproduction test written into the brief itself?',
         'Is there a limit on length, so the working stays readable?',
         'Does the brief say what to do with a step that is not an operation?'],

t_title='Making it show its working',
t_fig=figs.split('DERIVATION AND ACCOUNT',
                 'A derivation — repeatable',
                 ['line 1: sum of 412 lines = 29,140',
                  'line 2: tax column total = 2,340',
                  'line 3: lines are net, so add tax',
                  'line 4: total = 31,480'],
                 'An account — unrepeatable',
                 ['The figures were aggregated carefully.',
                  'Tax was handled appropriately.',
                  'Adjustments were made where needed.',
                  'The result is consistent with expectations.']),
t_fig_cap='The right-hand column is longer, more reassuring and could accompany any number at all.',
t_body=[
 'Ask for the working as intermediate results rather than for reasoning, because the words you use decide '
 'what you get. A request for reasoning produces prose; a request for the intermediate '
 'results, one line per operation, produces lines. The second is harder to produce and much '
 'easier to check, which is the correct direction for that trade to run.',
 'Write the reproduction test into the brief rather than keeping it in your head. A reader '
 'with a calculator and no other knowledge must be able to start at the first line and '
 'arrive at the last. Stating this converts a vague expectation into something an output '
 'either satisfies or does not, and it gives you a sentence to point at when what comes back '
 'is three paragraphs of helpful description.',
 'And refuse prose explicitly, because it will otherwise arrive. Fluent description of an '
 'approach is the most persuasive and least informative thing in this subject, it is '
 'produced readily, and it will be offered in good faith by anything asked to explain '
 'itself. One sentence in the brief saying that prose is not accepted in place of lines '
 'saves a long and fruitless argument later.'],
t_say=[('Ask for lines: ', 'Return the intermediate results, one line per operation.'),
       ('State the test: ', 'A reader with a calculator must be able to reproduce the figure.'),
       ('Refuse prose: ', 'A description of the approach is not accepted in place of the working.')],
t_bound=('A working is produced by the same process as the answer and can be wrong in the '
         'same way. It constrains rather than guarantees: a wrong working that is internally '
         'consistent and reaches the stated answer is harder to produce by accident, but '
         'nothing about showing the working makes the figure correct.'),
t_a=[('Return the intermediate results, one line per ____________.', 'operation'),
     ('A reader with a calculator must be able to ____________ the figure.', 'reproduce'),
     ('A description of the approach is not accepted in place of the ____________.', 'working'),
     ('A request for reasoning produces ____________.', 'prose'),
     ('Fluent description is the most persuasive and least ____________ thing here.', 'informative'),
     ('It constrains rather than ____________.', 'guarantees')],
t_b_rubric='Say what each response is, and what you would ask for instead.',
t_b=[('The figures were aggregated carefully.', 'an account; ask for the sum, the inputs and the operation'),
     ('Tax was handled appropriately.', 'an account; ask whether lines were net or gross, and what was added'),
     ('Line 3: lines are net, so tax added.', 'a derivation line; acceptable if line 2 supplies the tax figure'),
     ('The result is consistent with expectations.', 'neither; ask what it was compared with and what the difference was')],

case=dict(
 title='Decision Clinic · The tolerance that hid the method',
 brief=[
  'The May episode revealed that the February reconciliation had almost certainly been out '
  'by about 1,100 euros and had nonetheless reconciled, because the error fell within the '
  'five-cent-per-line tolerance that Kenji had set in Book 1.',
  'Eight hundred lines at five cents is forty euros of permitted difference per batch. The '
  'February error was distributed across the lines in a way that kept every individual line '
  'inside the tolerance while the total was badly wrong.',
  'Kenji wants the tolerance removed. Victor points out that without it, rounding '
  'differences will raise about sixty flags a month, every one of which is genuinely '
  'nothing.'],
 exhibit=figs.datatable('TOLERANCE, AS SET AND AS IT BEHAVED',
                        ['', 'Per line', 'Per batch of 800', 'February error'],
                        [['tolerance', '5 cents', '40 EUR', '—'],
                         ['rounding, typical', '1–2 cents', '12 EUR', '—'],
                         ['method fault', '1.4 cents', '—', '1,100 EUR'],
                         ['flags raised in Feb', '0', '0', '—'],
                         ['flags if tolerance removed', '—', 'about 60 a month', '—']]),
 exhibit_cap='A fault of 1.4 cents a line, inside a 5-cent tolerance, totalling 1,100 euros.',
 exhibit_note='The per-line view and the per-batch view of the same data give opposite '
              'answers. Nobody had looked at the batch total against an independent figure.',
 voices=[('Kenji Watanabe', 'finance',
          'I set that tolerance and it hid eleven hundred euros for three months. Remove it. '
          'I will take sixty flags a month over that.'),
         ('Victor Sandoval', 'operations and quality',
          'Sixty flags a month, all of them nothing, will be ignored by week three. We will '
          'have removed the tolerance and created a worse one made of habit.'),
         ('Marta Olsen', 'risk and liability',
          'Neither of you has suggested checking the batch total against something outside '
          'the batch. The tolerance is a per-line rule being asked to catch a per-batch '
          'fault, which it was never going to do.')],
 steps=[('Find it', 'How large was the per-line error, and how large was the total?'),
        ('Compare it', 'What does a per-line tolerance catch, and what does it miss?'),
        ('Infer it', 'Why would sixty flags a month stop working by week three?'),
        ('Weigh it', 'Rounding noise against a fault distributed below the threshold.'),
        ('Decide', 'What check would have caught February, and what happens to the tolerance?')],
 analysis=[('Find it. What was the per-line error?', 'about 1.4 cents, against a 5-cent tolerance'),
           ('Compare it. What can a per-line rule not see?', 'an error small on every line and large in aggregate'),
           ('Infer it. Why do sixty empty flags fail?', 'because a flag that is always nothing stops being read'),
           ('Weigh it. What is Marta identifying?', 'that the wrong kind of check is being asked to catch this fault'),
           ('Decide. What would have caught it?', 'comparing the batch total against an independent figure, such as the bank')],
 decision='Write the revised tolerance and check.',
 decision_steps=['Say what happens to the per-line tolerance, and why.',
                 'Say what new comparison is introduced, and against what.',
                 'Put a figure on how often the new check is expected to fire.',
                 'Say what this does not catch, so nobody assumes it catches everything.'],
 bank=['The per-line tolerance …', 'In addition, the batch total is compared with …',
       'This is expected to fire about …', 'This does not catch …',
       'It is reviewed if …'],
 outcome='The per-line tolerance stayed at five cents and a batch comparison was added: the '
         'batch total against the sum of supplier statements, which is an independent '
         'figure. It fires about once a quarter. It found a second method fault in October, '
         'a currency conversion applied at the wrong date, worth about 380 euros. Kenji, who '
         'had wanted the tolerance removed, says the lesson he took was that he had been '
         'arguing about the size of a rule rather than about what kind of rule it was.',
 outcome_q=[('Why did keeping the tolerance turn out to be right?', 'because the fault was per-batch, so tightening a per-line rule would have added noise without catching it'),
            ('What did the batch comparison find later?', 'a currency conversion applied at the wrong date, worth about 380 euros')],
 tags=[]),

lab=dict(
 title='Brief Lab · Produce the monthly supplier total',
 task=['This is the brief for the calculation that produced 31,480 euros in May and would '
       'have produced a wrong figure in February. It is a careful brief by the standards of '
       'Book 1: it names its inputs, its scope and its output.',
       'What it does not ask for is any account of how the figure was reached, which is why '
       'the method fault survived three months of correct-looking totals.'],
 draft=['Produce the monthly supplier total from the invoice folder.',
        'Add up everything that should be included.',
        'Handle the tax in the appropriate way.',
        'Make sure the figure is accurate.',
        'Tell me if anything looks unusual.',
        'Send me the total by the fifth.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines that ask for an answer and never ask how it was reached.',
 asked=['Intermediate results, one line per operation',
        'A stated rule for net and gross lines',
        'A reproduction test a stranger could apply'],
 back=['A single figure, correct by luck',
       'Tax added from a column regardless',
       'No way to see the method at all'],
 gap='"Handle the tax in the appropriate way" leaves the rule unstated, and asking only for '
     'the total means that a method which is wrong three months in four is indistinguishable '
     'from one that is right.',
 back_cap='Three months of correct totals produced by a method that was wrong.',
 back_note='February was out by about 1,100 euros and reconciled. Nobody could have known, '
           'because the only output was a number.',
 diagnosis=[('[1] "everything that should be included" — included by what rule?', 'unstated criterion'),
            ('[2] "the appropriate way" — appropriate when lines are gross?', 'hidden assumption'),
            ('[3] "make sure the figure is accurate" — accurate against what?', 'unstated criterion'),
            ('[4] "anything that looks unusual" — unusual compared with what?', 'hidden assumption'),
            ('[5] "send me the total" — and nothing else is required?', 'undefined done'),
            ('[6] "by the fifth" — with what accompanying it?', 'undefined done')],
 rewrite='Rewrite the brief so that the working is returned with the figure, and so that the '
         'treatment of tax is a stated rule rather than a judgement.',
 scaffold=['Why the method matters as much as the figure',
           'Which invoices are included, and what is excluded',
           'The invoice folder and the calculation rules, both dated',
           'The tax rule, the line-by-line working, and the reproduction test',
           'The figure, the working and the length limit on it',
           'What to do with a step that is not an operation on the line above'],
 bank=['Produce … so that … can be distinguished from …',
       'Include … ; exclude …', 'Work from … dated … and the calculation rules dated …',
       'Return the intermediate results, 1 line per … ; a reader with a calculator must …',
       'Return … and a working of no more than … lines, by …',
       'If a step cannot be expressed as an operation, …'],
 check=['Does the brief ask for the working as well as the figure?',
        'Is the tax rule stated rather than left to judgement?',
        'Is the reproduction test written into the brief?',
        'Is prose explicitly refused in place of lines?'],
 model=['Produce the monthly supplier total in a form that lets a sound method be told apart from a lucky answer',
        'Every supplier invoice in the month folder; credit notes and intra-group transfers are excluded',
        'The month folder of invoices and the calculation rules dated 4 May',
        'Return the intermediate results in order, 1 line per operation, such that a reader with a calculator and no other knowledge can reproduce the final figure; where an invoice states its lines gross of tax, do not add the tax column; prose descriptions of the approach are not accepted in place of lines',
        '1 figure and 1 working of no more than 8 lines, by 10:00 on the 5th business day',
        'If a step cannot be expressed as an operation on the line above, mark that line "[not derived]" and state what the value was taken from'],
 cost='3 months of totals produced by a method that double-counts tax, about 1,100 euros '
      'wrong in February and reconciled anyway, and no way of discovering any of it until a '
      'figure happened to look too round.'),

rev_fig=figs.split('REPORTED AND ASSERTED',
                   'Reported — no owner',
                   ['It is said that the method changed.',
                    'The file is believed to be current.',
                    'It is understood that two versions exist.',
                    'The figure is thought to be net.'],
                   'Asserted — with a source',
                   ['The log records a change on 3 April.',
                    'Current lists version 4, dated 2 Feb.',
                    'The Archive folder holds 3 earlier versions.',
                    'Line 1 of the invoice states "net of tax".']),
rev_fig_cap='Use the left-hand column for a rumour. Using it for a fact you could check is evasion.',
rev=dict(
 read=[('The May figure was', ['wrong, with a sound method', 'right, with a faulty method', 'wrong in every respect', 'never checked'], 1),
       ('"It is said that" is honest when', ['you know the source', 'you do not know the source', 'the claim is false', 'it is shorter'], 1),
       ('An account of reasoning differs from a derivation because', ['it is shorter', 'nothing can be reproduced from it', 'it is written first', 'it is formal'], 1),
       ('In the Clinic, what caught the next fault?', ['the tolerance', 'the batch comparison', 'the per-line rule', 'a client'], 1)],
 listen_text='Ask for the intermediate results, one line per operation, because a request '
             'for reasoning produces prose and prose can be written to fit any answer. Write '
             'the reproduction test into the brief: a reader with a calculator and no other '
             'knowledge must get from the first line to the last. And refuse prose '
             'explicitly, because it will otherwise arrive, and it is more convincing than '
             'the arithmetic it replaces.',
 listen=[('Ask for the intermediate ____________, one line per operation.', 'results'),
         ('Prose can be written to fit any ____________.', 'answer'),
         ('A reader with a ____________ must get from the first line to the last.', 'calculator'),
         ('It is more convincing than the ____________ it replaces.', 'arithmetic')],
 speak=['Explain how a figure at your work is produced. Your partner tries to reproduce it.',
        'Note the first step where they had to ask you something.'],
 write='Write a brief requiring intermediate results, with a reproduction test in it.',
 vocab=[('The written steps showing how a result was calculated are the ____________.', 'workings'),
        ('A thing whose inner workings cannot be observed is a ____________.', 'black box'),
        ('A reason constructed after the decision is ____________.', 'post hoc'),
        ('The recorded sequence of choices leading to an outcome is the ____________.', 'decision trail'),
        ('Able to be repeated by somebody else with the same result is ____________.', 'reproducible')],
 gram=[('It ____________ said that the method changed in April.', 'is'),
       ('The file is ____________ to be current.', 'believed'),
       ('It is ____________ that two versions exist.', 'understood'),
       ('The supplier is ____________ to have changed its format.', 'said'),
       ('These figures are ____________ to be provisional.', 'known')]),

found=['Ask for the working behind one figure you rely on at work.',
       'Try to reproduce a number from the explanation you are given.',
       'Find a sentence at your work using "it is believed that" where somebody knows.',
       'Check whether a tolerance at your work is per item or per batch.'],
end_line='The total was right to the cent, and the method would have been wrong in February.',
end_next='Next: Checking at Scale',
)
