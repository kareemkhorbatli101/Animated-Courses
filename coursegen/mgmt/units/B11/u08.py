# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='Deadlines That Cannot Be Misread',
gram='time prepositions: by, until, within, from...to',
ai='why the same request gives two different answers',
strap='CEFR B1 · Grammar: time prepositions: by, until, within, from...to · AI: why the same request gives two different answers',
cando=['choose between by, until, within and from...to in a deadline',
       'write a deadline that cannot be read two ways',
       'explain why the same request can produce two different answers',
       'say where variation is harmless and where it is not acceptable',
       'ask for a fixed output where the shape of the answer matters'],
hero=('FOUR O’CLOCK ON A FRIDAY, IN TWO TIME ZONES',
      ['Everybody agreed the report was due Friday.',
       'Nobody agreed what Friday meant.'],
      [(880, 'grey', 'short'), (1620, 'teal', 'long'), (2360, 'orange', 'short')]),
hero_cap='A deadline is a preposition problem long before it is a planning problem.',

warm=['If something is due Friday, when exactly is it late?',
      'What is the difference between "by Friday" and "until Friday"?',
      'Should the same question always get the same answer? Always?'],
read=[
 'Arclight promised Samuel Boateng a monthly reconciliation by the fifth. For three months '
 'it arrived on the fifth, in the evening, and for three months Samuel said nothing. In the '
 'fourth month he rang on the morning of the fifth to ask where it was, and the conversation '
 'that followed took forty minutes and was about one word.',
 'Samuel had read by the fifth as meaning available on the morning of the fifth, because he '
 'uses it on the fifth to pay suppliers. Arclight had read it as any time before the fifth '
 'is over, which is also what it means. Both readings are correct English. Only one of them '
 'was compatible with what Samuel does with the document.',
 'The replacement wording was uglier and shorter: by 10:00 on the fifth business day of the '
 'month. Business day, because in month two the fifth had been a Sunday and nobody had '
 'agreed what happened then either. Ten o’clock, because Samuel starts paying suppliers at '
 'half past.',
 'The second thing that came out of the same conversation was less expected. Samuel said '
 'that the reconciliation looked different every month. Not wrong, and not worse, but laid '
 'out differently, with the columns in a different order and the summary sometimes at the '
 'top and sometimes at the bottom.',
 'That is not a deadline problem. It is the fact that the same request, asked twice, does '
 'not produce the same answer twice, and it surprises people more than it should. For a '
 'letter, that variation is invisible and harmless. For a document somebody reads at speed '
 'every month to do a specific job, it costs them four minutes each time and all of their '
 'patience.'],
c_a=[('What did Arclight promise Samuel?', 'a monthly reconciliation by the fifth'),
     ('How did Samuel read "by the fifth"?', 'as available on the morning of the fifth'),
     ('How had Arclight read it?', 'as any time before the end of the fifth'),
     ('Why was "business day" added to the wording?', 'because in month two the fifth fell on a Sunday'),
     ('What was Samuel’s second complaint?', 'that the reconciliation was laid out differently every month')],
c_b=[('Samuel complained in the first month.', 'F'),
     ('Both readings of "by the fifth" are correct English.', 'T'),
     ('The replacement wording was longer and more elegant.', 'F'),
     ('Samuel starts paying suppliers at half past ten.', 'T'),
     ('The monthly document was wrong each time.', 'F'),
     ('Layout variation costs Samuel time every month.', 'T')],
c_c=[('For three months it arrived on the fifth, in the ____________.', 'evening'),
     ('Only one reading was compatible with what Samuel ____________ with the document.', 'does'),
     ('The replacement wording was uglier and ____________.', 'shorter'),
     ('In month two the fifth had been a ____________.', 'Sunday'),
     ('The summary was sometimes at the top and sometimes at the ____________.', 'bottom'),
     ('It costs them four ____________ each time.', 'minutes')],
c_d=[('The deadline failed because of ( one word / three words ).', ['one word', 'three words'], 0),
     ('"Business day" was added because', ['Samuel asked for it', 'the fifth fell on a Sunday once', 'it sounds formal', 'the bank required it'], 1),
     ('Layout variation is described as', ['always harmful', 'harmless for a letter, costly for a monthly document', 'always harmless', 'a kind of error'], 1),
     ('Samuel rang on the morning of the fifth because', ['the document was wrong', 'he needed it to pay suppliers', 'he was annoyed about layout', 'he wanted to renegotiate'], 1),
     ('The final wording specified', ['the fifth', 'by 10:00 on the fifth business day', 'end of week one', 'Friday'], 1)],
c_e=('Which preposition? Put each phrase in the right column.',
     [('by 10:00 on Friday', 'Deadline — by'),
      ('until Friday at 17:00', 'Window closes — until'),
      ('within 2 business days', 'Elapsed time — within'),
      ('from Monday to Thursday', 'Period — from...to'),
      ('by the fifth business day', 'Deadline — by'),
      ('within 24 hours of receipt', 'Elapsed time — within')],
     ['Deadline — by', 'Window closes — until', 'Elapsed time — within', 'Period — from...to']),

v_fig_title='THE SHAPE OF A DEADLINE',
v_fig=[('note', 'a cut-off'), ('chart', 'lead time'), ('scale', 'a buffer'),
       ('truck', 'a milestone'), ('coin', 'a grace period'), ('doc', 'an overrun')],
v_fig_cap='Six words that make a date into an agreement.',
vocab=[
 ('deadline', 'the time by which something must be finished'),
 ('lead time', 'the time needed between asking for something and receiving it'),
 ('cut-off', 'the moment after which something is no longer accepted'),
 ('elapse', 'to pass, of time'),
 ('overrun', 'to take longer than the time allowed'),
 ('slippage', 'a gradual delay against a plan'),
 ('milestone', 'a named point in a plan used to check progress'),
 ('buffer', 'spare time built in to absorb delay'),
 ('grace period', 'extra time allowed before a penalty applies'),
 ('business day', 'a day on which normal work is done, excluding weekends and holidays'),
 ('out of hours', 'outside the normal working day'),
 ('expedite', 'to make something happen sooner than it otherwise would'),
 ('defer', 'to put something off to a later time, deliberately'),
 ('pending', 'waiting to be decided or completed'),
 ('backdate', 'to give a document an earlier date than the one it was written on'),
 ('concurrent', 'happening at the same time as something else'),
 ('sequential', 'happening one after another, in order'),
 ('repeatable', 'able to be done again with the same result'),
 ('variation', 'a difference between two things that were meant to be the same'),
 ('punctual', 'arriving or happening at the agreed time')],
v_a=[('The time needed between ordering and receiving is the ____________.', 'lead time'),
     ('Spare time built in to absorb delay is a ____________.', 'buffer'),
     ('Extra time before a penalty applies is a ____________.', 'grace period'),
     ('A day excluding weekends and holidays is a ____________.', 'business day'),
     ('Please ____________ it; the client is waiting.', 'expedite'),
     ('The decision is still ____________.', 'pending'),
     ('Two tasks happening at the same time are ____________.', 'concurrent'),
     ('A process that gives the same result each time is ____________.', 'repeatable')],
v_b=[('A cut-off is the moment after which', 'something is no longer accepted.'),
     ('To defer something is to put it off', 'to a later time, deliberately.'),
     ('Slippage is a gradual delay', 'against a plan.'),
     ('A milestone is a named point in a plan', 'used to check progress.'),
     ('To backdate a document is to give it', 'an earlier date than it was written.')],

g_title='Grammar: time prepositions — by, until, within, from...to',
g_rule=['By names the latest acceptable moment: by 10:00 on Friday.',
        'Until names when a state stops: the window is open until Friday.',
        'Within names elapsed time from a starting event: within 2 business days of receipt.',
        'From...to names a period with two ends: from Monday to Thursday inclusive.'],
g_fig=('LOOSE',
       ['Due Friday.',
        'Send it by the fifth.',
        'Reply as soon as possible.',
        'It runs Monday to Thursday.'],
       'PRECISE',
       ['Due by 17:00 on Friday 14 March.',
        'By 10:00 on the fifth business day.',
        'Within 4 working hours of receipt.',
        'From Monday 09:00 to Thursday 17:00.'],
       'a date is not a deadline',
       'a time, a reference point and a unit'),
g_fig_cap='Four deadlines, each of which someone has already argued about.',
g_a=[('The report is due ____________ 10:00 on Friday. (by)', 'by'),
     ('The window stays open ____________ Friday evening. (until)', 'until'),
     ('Reply ____________ two business days of receipt. (within)', 'within'),
     ('The run goes ____________ Monday ____________ Thursday. (from/to)', 'from'),
     ('Nothing is accepted after the ____________ at 16:00. (cut-off)', 'cut-off'),
     ('You have ____________ the end of the month to object. (until)', 'until'),
     ('Deliver it ____________ the fifth business day. (by)', 'by'),
     ('We respond ____________ four working hours. (within)', 'within'),
     ('The grace period runs ____________ day 30 to day 37. (from)', 'from')],
g_b=[('The report is due ( until / by ) 10:00 on Friday.', ['until', 'by'], 1),
     ('The window stays open ____ Friday evening.', ['by', 'until', 'within', 'from'], 1),
     ('Reply ____ two business days of receipt.', ['by', 'until', 'within', 'at'], 2),
     ('The run goes ____ Monday to Thursday.', ['by', 'until', 'from', 'within'], 2),
     ('You have ____ the end of the month to object.', ['by', 'until', 'within', 'from'], 1),
     ('Deliver it ____ the fifth business day.', ['until', 'within', 'by', 'from'], 2)],

d1=dict(title='Which Friday, and what time on it',
        fig=(['It is due Friday.', 'Due at what time on Friday?'],
             ['End of play.', 'Whose play? You finish at six.']),
        cap='Samuel Boateng and Dalia, on the morning of the fifth.',
        lines=[('Samuel', 'The reconciliation is due by the fifth. It is the fifth. Where is it?'),
               ('Dalia', 'It goes out this evening. It always has.'),
               ('Samuel', 'I pay suppliers at half past ten on the fifth. Every month.'),
               ('Dalia', 'You have never said that.'),
               ('Samuel', 'I have never had to. By the fifth means I have it on the fifth.'),
               ('Dalia', 'It also means any time before the fifth ends. Both are correct.'),
               ('Samuel', 'Then the wording is no good, whichever of us is right.'),
               ('Dalia', 'Agreed. By ten on the fifth business day of the month.'),
               ('Samuel', 'Business day. Because of February.'),
               ('Dalia', 'Because of February, when the fifth was a Sunday and nobody mentioned it.'),
               ('Samuel', 'Four months of this and the fix is eight words.'),
               ('Dalia', 'The fix is always eight words. Finding out which eight takes four months.')],
        a=[('When does Samuel pay suppliers?', 'at half past ten on the fifth, every month'),
           ('Why had he never mentioned it?', 'because he had assumed by the fifth meant having it on the fifth'),
           ('What does Dalia point out about the phrase?', 'that it also means any time before the fifth ends, and both readings are correct'),
           ('What is the new wording?', 'by ten on the fifth business day of the month'),
           ('What does Dalia say about the fix?', 'that it is always eight words, and finding out which eight takes four months')],
        b=[('I pay suppliers at half past ____________.', 'ten'),
           ('Both are ____________.', 'correct'),
           ('By ten on the fifth ____________ day.', 'business'),
           ('Finding out which eight takes four ____________.', 'months')]),
d2=dict(title='The same question, twice',
        fig=(['I asked the same thing twice.', 'And got two different answers.'],
             ['Which one is right?', 'Both. That is the problem.']),
        cap='Kenji and Jonas, running one request two mornings running.',
        lines=[('Kenji', 'I asked the same question on Tuesday and again on Wednesday.'),
               ('Jonas', 'And?'),
               ('Kenji', 'Two different answers. Same figures, different order, different summary.'),
               ('Jonas', 'Both correct?'),
               ('Kenji', 'Both correct. That is what I find hard to accept.'),
               ('Jonas', 'There is no single right layout, so it picks one. It picks a different one.'),
               ('Kenji', 'Then it is not a process. A process gives the same output.'),
               ('Jonas', 'A process gives the same output if you specify the output. You specified the content.'),
               ('Kenji', 'So I specify the columns, the order, and where the summary goes.'),
               ('Jonas', 'Then it is repeatable, for everything you specified.'),
               ('Kenji', 'And for everything I did not specify, it is still a lottery.'),
               ('Jonas', 'Yes. I would rather you knew that than found out in April.')],
        unresolved=True,
        a=[('What did Kenji do on two mornings?', 'asked the same question twice'),
           ('What was different about the two answers?', 'the order and the summary, though the figures were the same'),
           ('Why does Kenji find it hard to accept?', 'because both answers were correct'),
           ('What does Jonas say makes a process repeatable?', 'specifying the output, not only the content'),
           ('What remains true even after specifying?', 'anything not specified still varies')],
        b=[('Same figures, different ____________.', 'order'),
           ('There is no single right ____________.', 'layout'),
           ('A process gives the same ____________ if you specify it.', 'output'),
           ('For everything I did not specify, it is still a ____________.', 'lottery')]),

speak=[('When is it late?',
        ['Student A: give a deadline the way you normally would.',
         'Student B: ask the smallest question that would settle an argument about lateness.',
         'Rewrite the deadline together using by, until, within or from...to.']),
       ('Spoken specification: brief a repeatable output',
        ['Choose a document somebody produces for you regularly.',
         'Brief its shape aloud: columns, order, where the summary sits, how long it is.',
         'Your partner names one thing you left unspecified. That is this month’s variation.']),
       ('Harmless or not?',
        ['List four pieces of work where the output varies slightly each time.',
         'Decide for each whether the variation costs anybody anything.',
         'Name the one where it costs most, and say what you would fix first.'])],

ext_title='Why the same question does not give the same answer',
ext_fig=figs.datatable('WHERE VARIATION IS FREE AND WHERE IT IS NOT',
                       ['The work', 'Varies how', 'Does it cost anything?'],
                       [['a one-off client letter', 'wording, order', 'no'],
                        ['ten subject lines', 'everything', 'no, that is the point'],
                        ['a monthly reconciliation', 'column order, summary position', 'yes, 4 min a month'],
                        ['a legal clause', 'phrasing', 'yes, potentially a great deal'],
                        ['a data extraction', 'nothing, if fields are named', 'no']]),
ext_fig_cap='The third column is the only one that decides whether you need to care.',
ext=[
 'One of the first things that genuinely surprises people is that the same request, made '
 'twice, does not produce the same result. This feels like a fault, and in a certain sense '
 'it is not: these systems are built to produce one of many acceptable outputs rather than '
 'the single correct one, because for most of what they are asked to do there is no single '
 'correct one. Ten ways of writing a reminder are all fine.',
 'The difficulty arrives when a piece of work sits in a process. A process is a thing that '
 'runs repeatedly and whose output feeds something else, and processes depend on shape. '
 'Samuel does not read the reconciliation; he looks at three places on it. If those three '
 'places move, the document has stopped being a tool and started being a text that must be '
 'read, which takes four minutes and makes him cross.',
 'The practical consequence is that you should specify shape wherever the output has a '
 'reader with a habit. Name the columns and their order. Say where the summary goes. Fix the '
 'length. This feels fussy, it takes two extra sentences in the brief, and it converts an '
 'unpredictable text into a predictable form.',
 'It also has a quieter benefit, which is that a fixed shape makes errors visible. If the '
 'total has always been bottom right, a month when it is missing is obvious at a glance. If '
 'the layout moves every month, a missing total looks exactly like another layout change, '
 'and nobody notices until the quarter is reconciled.',
 'Where variation genuinely does not matter, leave it alone. A one-off letter, a set of '
 'options to choose from, a first draft that a person will rewrite anyway: these lose '
 'nothing by being different each time, and specifying their shape is effort spent for no '
 'return. The skill is telling the two cases apart, and the test is whether anybody has a '
 'habit built on the output.'],
dp1=('Forms and error detection',
     'Human-factors research into forms and reports generally finds that consistent layout '
     'improves the speed at which readers detect missing or anomalous values.',
     'Source: general human-factors research, 2026. Magnitude depends on task and familiarity.'),
e_a=[('Why is variation not simply a fault?', 'because for most tasks there is no single correct output, only many acceptable ones'),
     ('When does variation become a problem?', 'when the output sits in a process and has a reader with a habit'),
     ('What does Samuel actually do with the reconciliation?', 'he looks at three places on it rather than reading it'),
     ('What is the quieter benefit of a fixed shape?', 'it makes errors visible, because a missing value stands out'),
     ('Where should you leave variation alone?', 'where nobody has a habit built on the output, such as one-off letters or draft options')],
e_b=[('Variation is always a fault.', 'F'),
     ('A fixed layout helps readers notice a missing value.', 'T'),
     ('Specifying shape takes a great deal of extra writing.', 'F'),
     ('A set of draft options benefits from a fixed shape.', 'F'),
     ('The test is whether anybody has a habit built on the output.', 'T'),
     ('Samuel reads the whole reconciliation each month.', 'F')],

w_model=(
 'Purpose: give Samuel a reconciliation he can use at 10:30 without reading it. Scope: all '
 'supplier invoices for the calendar month just ended. Inputs: the month folder and '
 'reconciliation layout version 2. Criteria: exactly 7 columns in the order set out in the '
 'layout; the summary in the top 5 lines; the unreconciled total bottom right; 1 page. '
 'Done: by 10:00 on the 5th business day of the month, as 1 PDF. Fallback: if the figures '
 'are not complete by 10:00, send the page with the gaps marked and a note of what is '
 'missing rather than sending it late.'),
w_fig=figs.spec_card('A DEADLINE THAT CANNOT BE MISREAD',
                     [('Purpose', 'Usable at 10:30 without being read'),
                      ('Scope', 'All supplier invoices for the month just ended'),
                      ('Inputs', 'The month folder and layout version 2'),
                      ('Criteria', '7 columns in a fixed order, summary in the top 5 lines'),
                      ('Done', 'By 10:00 on the 5th business day, as 1 PDF'),
                      ('Fallback', 'Not complete by 10:00: send with gaps marked, not late')]),
w_fig_cap='Done carries a time, a counting rule and a format. Most Done lines carry none of the three.',
w_task='Write a brief for something that is produced on a repeating schedule.',
w_steps=['Choose real recurring work: a report, a summary, a list somebody waits for.',
         'Write the deadline with a clock time and a counting rule for weekends.',
         'Specify the shape: how many sections, in what order, how long.',
         'Say what the reader does with it, so the shape has a reason.',
         'Write a Fallback for the case where it will not be ready in time.'],
w_bank=['By … on the … business day of the month', 'Exactly … columns, in this order: …',
        'The … must appear in the top … lines.', 'The reader uses this to … , so …',
        'If it is not complete by … , send … rather than …'],
w_check=['Does your deadline carry a clock time, not only a date?',
         'Does it say what happens when the date falls on a weekend?',
         'Have you specified the shape, or only the content?',
         'Does the Fallback choose between late and incomplete, explicitly?'],

t_title='Why the same request gives two different answers',
t_fig=figs.split('SPECIFY CONTENT OR SPECIFY SHAPE',
                 'Content only — varies each run',
                 ['Summarise the month.',
                  'Include the supplier totals.',
                  'Mention anything unusual.',
                  'Keep it short.'],
                 'Shape as well — repeatable',
                 ['7 columns, in the fixed order.',
                  'Supplier totals in column 4.',
                  'Exceptions in the last section only.',
                  'One page, summary in the top 5 lines.']),
t_fig_cap='Everything you do not specify is re-decided every single time.',
t_body=[
 'The behaviour to understand is this: for most requests there is no single correct output, '
 'so one acceptable output is produced, and the next time a different acceptable output is '
 'produced. Nothing has gone wrong. The variation is not noise in a system that should be '
 'deterministic; it is the normal behaviour of a thing asked an under-specified question.',
 'This means you have a choice, and the choice is yours to make rather than something to '
 'complain about. If you want the same shape every time, say what the shape is. Columns and '
 'their order, sections and their order, length, where the total sits. Two sentences in the '
 'brief convert a variable text into a stable form, and the stable form is what a process '
 'can be built on.',
 'Be selective, though, because specifying shape is not free and most work does not need it. '
 'The question to ask is whether anybody has a habit built on this output. If somebody '
 'glances at the third line every Monday, the third line must always be the third line. If '
 'the output is read once by somebody who has never seen it before, let it vary and spend '
 'the two sentences somewhere else.'],
t_say=[('Fix the shape: ', 'Seven columns in this order, and the summary in the top five lines.'),
       ('Fix the deadline: ', 'By 10:00 on the fifth business day, not simply by the fifth.'),
       ('Choose on purpose: ', 'Layout may vary here; nobody reads this twice.')],
t_bound=('Specifying the shape does not make the content reliable. A perfectly stable layout '
         'with the columns always in the same order can carry a wrong total in exactly the '
         'right place, every month, and the consistency will make it look more trustworthy '
         'rather than less.'),
t_a=[('Seven columns in this order, and the summary in the top five ____________.', 'lines'),
     ('By 10:00 on the fifth ____________ day.', 'business'),
     ('Layout may ____________ here; nobody reads this twice.', 'vary'),
     ('The variation is the normal behaviour of an under-____________ question.', 'specified'),
     ('Ask whether anybody has a ____________ built on this output.', 'habit'),
     ('A stable form is what a ____________ can be built on.', 'process')],
t_b_rubric='Rewrite each deadline so that nobody could argue about it.',
t_b=[('Due Friday.', 'due by 17:00 on Friday 14 March'),
     ('By the fifth.', 'by 10:00 on the fifth business day of the month'),
     ('As soon as possible.', 'within four working hours of receipt'),
     ('Some time next week.', 'from Monday 09:00 to Thursday 17:00, delivered by Thursday 17:00')],

case=dict(
 title='Decision Clinic · Late and complete, or on time and marked',
 brief=[
  'Arclight now delivers Samuel’s reconciliation by 10:00 on the fifth business day. It has '
  'done so for seven months without fail, and Samuel pays his suppliers at 10:30 with the '
  'page beside him.',
  'In month eight, one supplier has not sent an invoice that Arclight knows is coming, worth '
  'about 4,200 euros. At 09:40 on the fifth business day the page is complete except for '
  'that line.',
  'Dalia wants to hold it until the invoice arrives, which she expects by about two in the '
  'afternoon. Thomas wants to send it at 10:00 with the line marked missing. The brief '
  'contains a fallback, and the fallback says send it marked.'],
 exhibit=figs.datatable('WHAT SAMUEL DOES WITH THE PAGE, BY TIME',
                        ['Time', 'What he does', 'Can it be undone?'],
                        [['10:30', 'pays all suppliers on the list', 'no, payments leave'],
                         ['10:45', 'files the page', 'yes'],
                         ['11:00', 'tells his own client the position', 'awkwardly'],
                         ['14:00', 'is out of the office', '—'],
                         ['next day', 'does not look at it again', '—']]),
 exhibit_cap='The first row is the one that cannot be reversed.',
 exhibit_note='Arclight has never tested what Samuel does with a page marked incomplete, '
              'because it has never sent one.',
 voices=[('Dalia Rahman', 'co-founder',
          'Hold it. A page with a hole in it is worse than a page that is four hours late. '
          'He will understand; we have been perfect for seven months.'),
         ('Thomas Reed', 'service delivery',
          'Send it at ten, marked. The fallback exists for exactly this. If we break it the '
          'first time it is inconvenient, we do not have a fallback, we have a preference.'),
         ('Marta Olsen', 'risk and liability',
          'He pays at half past ten and cannot undo it. A missing line he can see is a '
          'decision he gets to make. A page that is not there is a decision we made for him.')],
 steps=[('Find it', 'What does Samuel do at 10:30, and can it be reversed?'),
        ('Compare it', 'What does holding the page give him, and what does it take away?'),
        ('Infer it', 'Why does Thomas say breaking the fallback once destroys it?'),
        ('Weigh it', 'Seven perfect months against one visible hole.'),
        ('Decide', 'What goes to Samuel at 10:00, and what are you not doing?')],
 analysis=[('Find it. What happens at 10:30?', 'he pays all the suppliers on the list, and the payments cannot be recalled'),
           ('Compare it. What does holding the page take away?', 'his ability to decide what to do about the missing line'),
           ('Infer it. Why does breaking the fallback matter?', 'because a fallback that is suspended when it is inconvenient is not a fallback'),
           ('Weigh it. What is the strongest argument for sending it?', 'that the irreversible action happens at 10:30, before the held page would arrive'),
           ('Decide. What would you send, and what would you say?', 'the page at 10:00 with the line marked missing and the expected amount stated')],
 decision='Write what Arclight sends Samuel at 10:00.',
 decision_steps=['Lead with what is missing, not with what is complete.',
                 'Give the amount you expect, and say it is expected rather than known.',
                 'Say what he can do about it, in one sentence.',
                 'Say when the complete version will follow.'],
 bank=['One line is missing from this month’s page: …', 'We expect it to be about … , but …',
       'If you would rather wait, …', 'The complete version will follow by …',
       'Nothing else on the page is affected.'],
 outcome='Dalia overruled the fallback and held the page. The invoice arrived at 16:20, not '
         'two o’clock, by which time Samuel had paid his suppliers from memory and missed '
         'one. He was more annoyed about that than he had ever been about anything, because '
         'he had not known there was a choice to make. Arclight has not overruled a fallback '
         'since, and Thomas keeps the email.',
 outcome_q=[('What did holding the page actually cost?', 'Samuel paid from memory, missed a supplier, and was never told there was a decision to make'),
            ('Why was Marta’s framing the useful one?', 'because she identified that the choice was being taken from the person who had to live with it')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · The monthly reconciliation',
 task=['This is the original brief for Samuel’s monthly reconciliation, written in the first '
       'month, when everybody was pleased with themselves for winning the work.',
       'It survived four months before the argument about the fifth, and seven before '
       'anybody specified the shape. Every problem in both arguments is visible in these '
       'six lines.'],
 draft=['Do Samuel a monthly reconciliation of his supplier invoices.',
        'Get it to him by the fifth.',
        'Cover all the invoices for the month.',
        'Lay it out clearly with the key numbers easy to find.',
        'Flag up a reasonable number of things if they look odd.',
        'Carry on with the same sort of thing each month.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines that worked for four months and then cost forty minutes on a telephone.',
 asked=['By 10:00 on the 5th business day',
        'A fixed layout he can use without reading',
        'All invoices for the calendar month'],
 back=['The evening of the 5th, and once a Sunday',
       'A different layout every month',
       'Invoices dated in the month, not received in it'],
 gap='By the fifth has two correct readings, clearly is not a layout, and a reasonable number '
     'of things is a quantity nobody has ever agreed on.',
 back_cap='Seven correct reconciliations, each of them a different document.',
 back_note='Nothing here was ever wrong. The content was right every month for seven months, '
           'and the client was still unable to use it the way he needed to.',
 diagnosis=[('[1] "a monthly reconciliation" — reconciled against what?', 'undefined done'),
            ('[2] "by the fifth" — by what time, and if it is a Sunday?', 'undefined done'),
            ('[3] "all the invoices for the month" — dated in it, or received in it?', 'unscoped set'),
            ('[4] "lay it out clearly" — clear by what test?', 'unstated criterion'),
            ('[5] "if they look odd" — odd by what test?', 'unstated criterion'),
            ('[6] "the same sort of thing each month" — the same how?', 'unscoped set')],
 rewrite='Rewrite the brief so that the deadline cannot be read two ways and the page is the '
         'same page every month.',
 scaffold=['What Samuel does with the page at half past ten',
           'Which invoices are in the month, by a rule that settles the edge',
           'The folder and the numbered layout the page must follow',
           'The columns, their order, where the summary sits and how long the page is',
           'The clock time, the counting rule for weekends, and the file format',
           'What to send if the figures are not complete when the clock time arrives'],
 bank=['Produce a page Samuel can use at … without …',
       'Include every invoice … in the calendar month, counted by …',
       'Follow layout version … exactly.', 'Exactly … columns in this order: …',
       'By … on the … business day of the month, as …',
       'If the figures are incomplete at … , send … rather than …'],
 check=['Does the deadline carry a clock time and a weekend rule?',
        'Is the layout specified, or only described as clear?',
        'Does the scope settle whether an invoice belongs to the month by date or by receipt?',
        'Does the Fallback choose between late and incomplete?'],
 model=['Give Samuel a page he can pay suppliers from at 10:30 without having to read it',
        'Every supplier invoice dated within the calendar month just ended, counted by invoice date and not by date of receipt',
        'The month folder and reconciliation layout version 2 dated 4 February',
        'Exactly 7 columns in the layout order; the summary in the top 5 lines; the unreconciled total bottom right; 1 page',
        'By 10:00 on the 5th business day of the month, as 1 PDF',
        'If the figures are not complete at 10:00, send the page with every gap marked and the expected amount named, rather than sending it late'],
 cost='4 months of a document arriving 8 hours after it was needed, 1 month when the 5th was '
      'a Sunday and it arrived on the 7th, and about 28 minutes a year of a client re-reading '
      'a page whose shape had moved.'),

rev_fig=figs.split('BY, UNTIL, WITHIN, FROM...TO',
                   'Points at a moment',
                   ['by 10:00 on Friday',
                    'by the fifth business day',
                    'until Friday at 17:00',
                    'until the end of the month'],
                   'Points at a stretch',
                   ['within 2 business days',
                    'within 4 working hours of receipt',
                    'from Monday to Thursday',
                    'from day 30 to day 37']),
rev_fig_cap='Half of every deadline argument is settled by choosing the right one of these four.',
rev=dict(
 read=[('Variation between two runs of the same request is', ['always an error', 'normal for an under-specified question', 'impossible', 'a sign of failure'], 1),
       ('"Within two business days" measures', ['a deadline moment', 'elapsed time from an event', 'a period with two ends', 'a cut-off'], 1),
       ('A fixed layout helps because', ['it looks better', 'missing values become visible', 'it is shorter', 'it is formal'], 1),
       ('In the Clinic, the irreversible action happened at', ['09:40', '10:00', '10:30', '14:00'], 2)],
 listen_text='Two sentences fix most of this. Put a clock time on the deadline and say what '
             'happens when the date lands on a weekend. Then specify the shape, not only the '
             'content, wherever somebody has a habit built on the output. Everything you do '
             'not specify gets decided again every single time, by something that has no '
             'memory of last month.',
 listen=[('Put a ____________ time on the deadline.', 'clock'),
         ('Say what happens when the date lands on a ____________.', 'weekend'),
         ('Specify the ____________, not only the content.', 'shape'),
         ('Everything you do not specify gets decided again every ____________.', 'time')],
 speak=['Give a deadline the way you normally would. Your partner finds the reading you did not mean.',
        'Rewrite it using by, until, within or from...to and try again.'],
 write='Write the Done line for a recurring task, with a time, a weekend rule and a format.',
 vocab=[('Spare time built in to absorb delay is a ____________.', 'buffer'),
        ('The moment after which something is no longer accepted is the ____________.', 'cut-off'),
        ('Extra time before a penalty applies is a ____________.', 'grace period'),
        ('A process giving the same result each time is ____________.', 'repeatable'),
        ('To put something off deliberately is to ____________ it.', 'defer')],
 gram=[('The report is due ____________ 10:00 on Friday.', 'by'),
       ('The window stays open ____________ Friday evening.', 'until'),
       ('Reply ____________ two business days of receipt.', 'within'),
       ('The run goes ____________ Monday to Thursday.', 'from'),
       ('Deliver it ____________ the fifth business day.', 'by')]),

found=['Take a deadline you gave this week and find the second way of reading it.',
       'Add a weekend rule to one recurring commitment.',
       'Ask somebody who receives a regular document from you what they look at first.',
       'Name one output where variation costs nothing, and leave it alone on purpose.'],
end_line='Seven correct documents, no two of them the same, and a client who could not use any of them.',
end_next='Next: Must, Should, Could',
)
