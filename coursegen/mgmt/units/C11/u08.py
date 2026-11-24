# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='Unless and Provided That',
gram='unless, provided that, as long as, failing that',
ai='the review bottleneck: your own ceiling',
strap='CEFR C1 · Grammar: conditional connectors · AI: the review bottleneck',
cando=['use unless, provided that, as long as and failing that accurately',
       'write a delegation rule whose conditions are testable',
       'describe your own review capacity as a constraint on the organisation',
       'design a sampling rule instead of reviewing everything',
       'state what must still come to you, and why'],
hero=('EVERYTHING ENDS ON ONE DESK',
      ['We removed every bottleneck except the one holding the pen.',
       'You may release it unless, provided that, and failing that.'],
      [(800, 'purple', 'long'), (1500, 'orange', 'short'),
       (2180, 'teal', 'long'), (2840, 'blue', 'short')]),
hero_cap='A manager who reviews everything has made themselves the measure of the firm.',

warm=['What cannot leave your organisation without your signature?',
      'How many such items arrive in a week, and how long does each take?',
      'What would you have to write down to let somebody else sign half of them?'],
read=[
 'By November the arithmetic that Victor Sandoval had put to Kenji Watanabe in the spring had '
 'become a diary. He was reading exceptions for five hours and twenty minutes of an average '
 'day, had declined three pieces of work he would previously have taken, and had twice '
 'returned from leave to a queue that had taken nine days to clear.',
 'The rule he eventually wrote is four sentences long and took six weeks, which is the '
 'correct proportion for work of this kind. A reviewer in the checking team may release an '
 'exception unless it concerns a client in their first two quarters, involves a figure above '
 'twenty thousand euros, or has been flagged by the system as a pattern it has not seen '
 'before; provided that the release is logged with a one-line reason; failing which it comes '
 'to Victor.',
 'The rule shifted sixty-one per cent of exceptions off his desk in the first month, which '
 'was slightly less than the sixty-five per cent his sample had predicted, and the '
 'difference was instructive: the reviewers had applied the first-two-quarters condition to '
 'calendar quarters rather than to the client’s own first two quarters with the firm, which '
 'nobody had noticed was ambiguous until it produced two different answers.',
 'What the rule did not solve, and was not designed to solve, is the advisory sign-off. Every '
 'piece of advisory work leaves Arclight over Ines Carvalho’s signature, a practice that was '
 'sensible when there were nine people and is now, on her own count, eleven hours a week of '
 'reading and the reason three proposals went out late in October. She has been asked for a '
 'rule of her own on four separate occasions and has not written one.',
 'Her stated reason is worth recording because it is the reason most senior people give. She '
 'says she does not know what her own test is; that she reads an advisory document and forms '
 'a view she could not reduce to conditions; and that she suspects, without being able to '
 'demonstrate it, that writing the conditions down would produce a worse filter than the one '
 'in her head. Victor’s response, which she has not answered, is that this was also true of '
 'his exceptions in March.'],
c_a=[('How long was Victor reading exceptions each day by November?', 'five hours and twenty minutes'),
     ('How long is the rule he wrote, and how long did it take?', 'four sentences, six weeks'),
     ('What proportion of exceptions did it shift, against prediction?', 'sixty-one per cent against a predicted sixty-five'),
     ('What caused the difference?', 'the first-two-quarters condition was read as calendar quarters rather than the client’s own'),
     ('What is Ines’s stated reason for not writing a rule?', 'that she could not reduce her view to conditions and suspects written conditions would filter worse')],
c_b=[('Victor had returned from leave to a nine-day queue twice.', 'T'),
     ('The rule took one afternoon to write.', 'F'),
     ('The rule performed exactly as predicted.', 'F'),
     ('The ambiguity was noticed before it caused a problem.', 'F'),
     ('Advisory work leaves over Ines’s signature.', 'T'),
     ('Ines has written a rule of her own.', 'F')],
c_c=[('Had declined three pieces of work he would previously have ____________.', 'taken'),
     ('Provided that the release is logged with a one-line ____________.', 'reason'),
     ('Nobody had noticed was ____________ until it produced two different answers.', 'ambiguous'),
     ('Eleven hours a week of ____________.', 'reading'),
     ('A view she could not ____________ to conditions.', 'reduce'),
     ('This was also true of his exceptions in ____________.', 'March')],
c_d=[('The rule shifted work off Victor’s desk by making the conditions ( testable / optional ).', ['testable', 'optional'], 0),
     ('What made the first month underperform the sample?', ['reviewer error', 'an ambiguous condition', 'volume', 'leave'], 1),
     ('Advisory sign-off costs Ines', ['one hour a week', 'eleven hours a week', 'a day a month', 'nothing'], 1),
     ('Ines has been asked for a rule', ['once', 'four times', 'never', 'twice'], 1),
     ('Victor’s unanswered point is that', ['she is too busy', 'the same was true of his exceptions', 'the rule failed', 'nobody signs'], 1)],
c_e=('Which connector? Put each sentence in the right column.',
     [('You may release it unless the figure exceeds twenty thousand.', 'unless'),
      ('You may release it provided that the reason is logged.', 'provided that'),
      ('You may release it as long as the client is established.', 'as long as'),
      ('Failing that, it comes to Victor.', 'failing that'),
      ('Unless the pattern is new, you may release it.', 'unless'),
      ('Provided that two reviewers agree, no escalation is needed.', 'provided that')],
     ['unless', 'provided that', 'as long as', 'failing that']),

v_fig_title='QUEUES, GATES AND THRESHOLDS',
v_fig=[('doc', 'an inbox'), ('key', 'a gatekeeper'), ('scale', 'a threshold'),
       ('chart', 'a sampling rate'), ('bank', 'release decision'), ('bulb', 'to triage')],
v_fig_cap='Six words for the architecture of a single desk that everything passes through.',
vocab=[
 ('a queue', 'work waiting in order for a stage that cannot yet take it'),
 ('a ceiling', 'the upper limit a particular stage cannot exceed'),
 ('to triage', 'to sort arriving work by urgency and kind before acting'),
 ('an escalation path', 'the stated route by which a case goes to a higher authority'),
 ('release decision', 'the act by which a named person accepts responsibility for a piece of work'),
 ('a threshold', 'the stated value at which treatment changes'),
 ('a sampling rate', 'the proportion of items examined rather than all of them'),
 ('a batch', 'a group of items handled together rather than singly'),
 ('waiting time', 'the delay between work arriving and work starting'),
 ('end-to-end time', 'the time from receipt to completion, as experienced by the client'),
 ('to defer', 'to put something off to a stated later point'),
 ('a checkpoint', 'a stated place in a process where something must be verified'),
 ('assigned volume', 'the total quantity of work given to a person or stage'),
 ('prioritisation', 'the deciding of order when not everything can be done at once'),
 ('an inbox', 'the undifferentiated arrival point for work of all kinds'),
 ('a gatekeeper', 'a person without whose action nothing proceeds'),
 ('to unblock', 'to remove whatever is preventing work from moving'),
 ('committed interval', 'the period between promising work and delivering it'),
 ('a service level', 'a promised time or standard, stated as a figure'),
 ('a holding pattern', 'the state of work that is neither progressing nor refused')],
v_a=[('A person without whose action nothing proceeds is a ____________.', 'gatekeeper'),
     ('The proportion of items examined rather than all is the ____________.', 'sampling rate'),
     ('The stated value at which treatment changes is a ____________.', 'threshold'),
     ('The delay between work arriving and work starting is ____________.', 'waiting time'),
     ('The stated route by which a case goes higher is an ____________.', 'escalation path'),
     ('The state of work neither progressing nor refused is a ____________.', 'holding pattern'),
     ('A promised time or standard stated as a figure is a ____________.', 'service level'),
     ('To sort arriving work by urgency and kind is to ____________ it.', 'triage')],
v_b=[('A queue is work waiting in order', 'for a stage that cannot yet take it.'),
     ('A release decision is the act by which a named person', 'accepts responsibility for a piece of work.'),
     ('End-to-end time runs from receipt to completion,', 'as experienced by the client.'),
     ('Prioritisation is the deciding of order', 'when not everything can be done at once.'),
     ('The committed interval is the period between promising work', 'and delivering it.')],

g_title='Grammar: unless, provided that, as long as, failing that',
g_rule=['Unless means except if; it carries the negative, so do not add another one.',
        'Provided that and as long as state a condition that must hold for permission to apply.',
        'Failing that and failing which state what happens when the condition is not met.',
        'A delegation rule needs all three: the exclusions, the condition, and the default route.'],
g_fig=('LOOSE',
       ['You may release it unless the figure does not exceed 20,000.',
        'You may release it if the reason is logged, otherwise escalate maybe.',
        'Release it as long as it is fine.',
        'If not, do whatever seems sensible.'],
       'PRECISE',
       ['You may release it unless the figure exceeds 20,000.',
        'You may release it provided that the reason is logged.',
        'Release it as long as the client is past their second quarter with us.',
        'Failing that, it comes to Victor.'],
       'four conditions that cannot be applied',
       'four that two people would apply identically'),
g_fig_cap='A rule is only a rule if two readers reach the same answer on the same case.',
g_a=[('You may release it ____________ the figure exceeds twenty thousand.', 'unless'),
     ('You may release it ____________ the reason is logged.', 'provided that'),
     ('Release it ____________ the client is past their second quarter.', 'as long as'),
     ('____________ that, it comes to Victor.', 'Failing'),
     ('____________ the pattern is new, you may release it.', 'Unless'),
     ('No escalation is needed ____________ two reviewers agree.', 'provided that'),
     ('You may sign ____________ you have read the exception log.', 'provided that'),
     ('____________ which, the item is held and reported weekly.', 'Failing'),
     ('Do not release it ____________ you can state the reason in one line.', 'unless')],
g_b=[('You may release it ( if not / unless ) the figure exceeds twenty thousand.', ['if not', 'unless'], 1),
     ('Which sentence is correct?', ['unless it does not exceed 20,000', 'unless it exceeds 20,000', 'unless not exceeding 20,000', 'unless it will not exceed 20,000'], 1),
     ('You may release it ____ the reason is logged.', ['unless', 'provided that', 'failing that', 'in case'], 1),
     ('____ that, it comes to Victor.', ['Provided', 'Failing', 'Unless', 'As long'], 1),
     ('Release it ____ the client is past their second quarter.', ['unless', 'as long as', 'failing which', 'in order that'], 1),
     ('A delegation rule needs exclusions, a condition and a ____.', ['threshold', 'default route', 'sampling rate', 'service level'], 1)],

d1=dict(title='Four sentences, six weeks',
        fig=(['Four sentences.', 'Six weeks.'],
             ['That seems slow.', 'It is exactly the right speed.']),
        cap='Victor and Ines, when the rule was finished.',
        lines=[('Ines', 'Four sentences in six weeks. Tell me what took the six weeks, because I want '
                        'to use the answer.'),
               ('Victor', 'Going through four hundred marked exceptions and finding, for each one, the '
                          'thing that made me keep it. Most of the time it was not the thing I '
                          'expected.'),
               ('Ines', 'Give me one.'),
               ('Victor', 'I thought size was the test. It is not. A figure of two hundred thousand '
                          'with a client we have had nine years is routine; eleven thousand with a '
                          'client in their first quarter is not. The real test was how much we know '
                          'about the client, and I had never said that out loud.'),
               ('Ines', 'So the threshold is in the rule as a proxy.'),
               ('Victor', 'Twenty thousand is a proxy for a judgement I could not state directly, and '
                          'I have written that in the rule itself so that whoever revises it knows '
                          'what it stands for.'),
               ('Ines', 'And the sixty-one per cent against your predicted sixty-five?'),
               ('Victor', 'Entirely my fault. First two quarters meant their first two quarters with '
                          'us and four reviewers read it as the calendar year. Two words would have '
                          'fixed it and I wrote it four times without seeing it.'),
               ('Ines', 'That is the thing I keep hearing about these rules. The ambiguity is never '
                        'visible to the person who wrote it.'),
               ('Victor', 'Never. The only test that works is two people applying it to the same '
                          'twenty cases and comparing answers, and I did not do that because I was '
                          'six weeks in and wanted to be finished.'),
               ('Ines', 'Then that goes in the handbook as a required step, and I will pay for the '
                        'twenty cases.'),
               ('Victor', 'It should. And you will notice I am describing exactly the problem you say '
                          'prevents you writing yours.')],
        a=[('What took the six weeks?', 'going through four hundred marked exceptions to find what made him keep each one'),
           ('What turned out not to be the real test?', 'the size of the figure'),
           ('What was the real test?', 'how much the firm knows about the client'),
           ('What caused the shortfall?', 'four reviewers read "first two quarters" as calendar quarters'),
           ('What test does Victor say is the only one that works?', 'two people applying the rule to the same twenty cases and comparing answers')],
        b=[('A proxy for a judgement I could not state ____________.', 'directly'),
           ('The ambiguity is never visible to the person who ____________ it.', 'wrote'),
           ('I wanted to be ____________.', 'finished'),
           ('That goes in the handbook as a required ____________.', 'step')]),
d2=dict(title='Eleven hours a week',
        fig=(['Eleven hours of reading.', 'And three proposals late.'],
             ['I cannot write the test down.', 'Neither could I, in March.']),
        cap='Ines and Victor, the fifth time of asking.',
        lines=[('Victor', 'Eleven hours a week, three proposals late in October, and you have been '
                          'asked for a rule four times.'),
               ('Ines', 'Five, now. My answer is the same and it is not evasion. I read an advisory '
                        'document and I form a view, and I cannot tell you what the view consists of.'),
               ('Victor', 'That is word for word what I said in March, and I was not evading either. '
                          'It turned out to be true and also not an obstacle.'),
               ('Ines', 'How did you get past it?'),
               ('Victor', 'I stopped trying to describe the view and looked at four hundred decisions '
                          'instead. The rule is not my judgement written down. It is a description of '
                          'what my judgement actually did, which is a different and much duller '
                          'object.'),
               ('Ines', 'And the cases where the duller object gets it wrong?'),
               ('Victor', 'There are some, and the rule sends those to me, because the conditions are '
                          'drawn to catch the kinds of case I got wrong when I was quick.'),
               ('Ines', 'The advisory work is not four hundred similar items. It is ninety documents '
                        'a year, each one different.'),
               ('Victor', 'Ninety is enough to see a pattern, and if it is not, the honest answer is '
                          'that you cannot delegate it and the firm has a ceiling of ninety documents '
                          'a year with you in it.'),
               ('Ines', 'That sentence is why I keep not doing this, and I would rather you had not '
                        'said it so clearly.'),
               ('Victor', 'I know. Will you do the four hundred, or the ninety?'),
               ('Ines', 'I will do the ninety, and I will tell you now that I expect to find my own '
                        'judgement was less consistent than I think it is.')],
        a=[('How many times has Ines been asked?', 'five'),
           ('What is her objection?', 'that she cannot say what her view consists of'),
           ('How did Victor get past the same objection?', 'by describing what his judgement did across four hundred decisions, not what it was'),
           ('What does Victor call the rule?', 'a description of what his judgement actually did, a duller object'),
           ('What does Ines agree to, and what does she expect?', 'to examine the ninety documents, expecting to find her judgement less consistent than she thinks')],
        b=[('My answer is the same and it is not ____________.', 'evasion'),
           ('A different and much ____________ object.', 'duller'),
           ('The kinds of case I got wrong when I was ____________.', 'quick'),
           ('A ceiling of ninety documents a year with you in ____________.', 'it')]),

speak=[('Say it correctly',
        ['Student A: state six delegation permissions using unless, provided that and as long as.',
         'Student B: find the one a colleague could read two ways.',
         'Convert one of them into a rule with exclusions, a condition and a default route.']),
       ('Spoken specification: your own ceiling',
        ['Name what cannot leave your organisation without your signature.',
         'Brief aloud how many items a week, how long each takes, and the annual ceiling it sets.',
         'Your partner asks which of those items you got wrong last year.']),
       ('Two readers, twenty cases',
        ['In pairs, take a rule one of you works under.',
         'Each apply it to five real cases and compare answers.',
         'Find the condition where you disagreed, and say which words caused it.'])],

ext_title='The last bottleneck is usually the person who removed all the others',
ext_fig=figs.capacity('WHAT ARRIVES AND WHAT ONE SIGNATURE CAN CARRY',
                      ('advisory documents the firm could sell', 164),
                      ('documents one signature can read', 90),
                      'The ceiling is 90 a year, and it is a person rather than a process.'),
ext_fig_cap='The shorter bar is a diary, and no amount of upstream improvement lengthens it.',
ext=[
 'In most organisations that have improved their production stages substantially, the '
 'remaining constraint is a senior person who reviews or signs, and it is frequently the same '
 'person who drove the improvements. The position is uncomfortable to occupy and almost '
 'impossible to see from inside, because the symptoms present as personal busyness rather '
 'than as a structural limit on the enterprise.',
 'The arithmetic that makes it structural is simple and worth doing explicitly. Count the '
 'items that cannot proceed without you, multiply by the minutes each takes, and express the '
 'result as a proportion of your week; then divide your available hours by the minutes to '
 'obtain the number of items the organisation can process in a year. That figure is a '
 'ceiling, it has your name on it, and it does not move when anything else is improved.',
 'The obstacle to delegating is almost never unwillingness, and treating it as such wastes '
 'the conversation. The genuine obstacle is that the reviewer cannot state their own test: '
 'they read something, form a view, and find on inspection that the view does not reduce to '
 'conditions they can articulate. This is usually accurate, and it is not the end of the '
 'matter, because the task is not to describe the judgement but to describe what the '
 'judgement has actually done.',
 'That is an empirical exercise and it is dull in a specific, productive way. Take two or '
 'three hundred past decisions, record for each one the feature that caused the outcome, and '
 'look for the conditions that account for most of them. The result is typically a rule of '
 'three or four sentences in the form you may proceed unless, provided that, failing which, '
 'and it typically reveals that the reviewer’s stated test was not their operative one: size '
 'turns out to be a proxy for familiarity, lateness a proxy for client type.',
 'Two warnings belong with the method. The first is that the person who writes a rule cannot '
 'see its ambiguities, so the rule must be applied by two people to the same twenty cases '
 'before it goes live, which costs a day and prevents the commonest failure. The second is '
 'that where the volume of cases is genuinely too small for a pattern, the honest conclusion '
 'is that the work cannot be delegated and the organisation has a ceiling with a name in it, '
 'which should then be stated in the plan rather than discovered in October.'],
dp1=('Decision rules and expert judgement',
     'Comparisons of expert judgement with simple rules derived from the experts’ own past '
     'decisions generally find the rules match or exceed the experts’ consistency, while '
     'experts commonly report that their reasoning cannot be reduced to conditions.',
     'Source: general judgement and decision-making literature, 2026.'),
e_a=[('Who is usually the remaining constraint?', 'a senior person who reviews or signs, often the one who drove the improvements'),
     ('How do you compute the ceiling?', 'divide your available hours by the minutes per item'),
     ('What is the real obstacle to delegating?', 'that the reviewer cannot state their own test'),
     ('What should be described instead of the judgement?', 'what the judgement has actually done, across past decisions'),
     ('What two warnings accompany the method?', 'two readers must test it on twenty cases; and too few cases means it cannot be delegated')],
e_b=[('The constraint is usually unwillingness to delegate.', 'F'),
     ('The ceiling moves when upstream stages improve.', 'F'),
     ('A reviewer’s stated test is usually their operative one.', 'F'),
     ('The resulting rule is typically three or four sentences.', 'T'),
     ('A rule’s author can see its ambiguities.', 'F'),
     ('Too few cases means the rule should be written anyway.', 'F')],

w_model=(
 'Purpose: establish whether advisory sign-off can be delegated in part, and if not, state '
 'the firm’s ceiling in documents a year. Scope: the 90 advisory documents issued in the last '
 '12 months; checking exceptions are out of scope, being covered by the rule dated 4 '
 'November. Inputs: the 90 documents, Ines Carvalho’s sign-off notes, and the 7 documents '
 'returned for revision. Criteria: for each of the 90 record the 1 feature that caused the '
 'outcome; identify the conditions that account for at least 60 of the 90; express the result '
 'as 1 permission, up to 3 exclusions, 1 logging condition and 1 default route; have 2 '
 'reviewers apply the draft to the same 20 documents and report every case where they differ. '
 'Done: 1 rule of no more than 5 sentences, 1 disagreement report on 20 cases, and 1 stated '
 'ceiling if no rule is possible. Fallback: where fewer than 60 of the 90 can be accounted '
 'for by any set of 3 conditions, record that sign-off cannot be delegated and state the '
 'ceiling in documents a year.'),
w_fig=figs.spec_card('THE DELEGATION RULE, IN SIX LINES',
                     [('Purpose', 'establish whether advisory sign-off can be delegated in part'),
                      ('Scope', 'the 90 advisory documents of the last 12 months'),
                      ('Inputs', '90 documents, sign-off notes, 7 returned for revision'),
                      ('Criteria', '1 permission, 3 exclusions, 1 logging condition, 1 default route'),
                      ('Done', 'rule of 5 sentences or fewer, 20-case disagreement report'),
                      ('Fallback', 'under 60 of 90 accounted for: state the ceiling instead')]),
w_fig_cap='The fallback is not a failure; it is a number the plan has to carry.',
w_task='Write a delegation specification for something only you can sign.',
w_steps=['Count the items and the minutes, and state the ceiling they imply.',
         'Say which past decisions will be examined, and how many.',
         'Require the rule to have exclusions, a condition and a default route.',
         'Require two readers to apply the draft to the same twenty cases.',
         'Say what happens if no set of conditions accounts for most cases.'],
w_bank=['Establish whether … can be delegated in part, and if not, state …',
        'Cover the … items of the last … months; … is out of scope.',
        'Work from … , … , and the … returned …',
        'For each item record … ; identify the conditions that account for at least … of … ; express the result as …',
        'Where fewer than … can be accounted for by any set of … conditions, record that … and state …'],
w_check=['Is the implied ceiling stated as a number?',
         'Must the rule carry exclusions, a condition and a default route?',
         'Is the two-reader test on twenty cases required before go-live?',
         'Is there an honest fallback that admits non-delegability?'],

t_title='The review bottleneck: your own ceiling',
t_fig=figs.split('TWO WAYS TO ANSWER "I CANNOT WRITE IT DOWN"',
                 'Describe the judgement — fails',
                 ['what do I look for?',
                  'what matters in these documents?',
                  'what would a good one have?',
                  'produces three pages of adjectives'],
                 'Describe what it did — works',
                 ['take 400 past decisions',
                  'record the feature that decided each',
                  'find conditions covering most',
                  'produces 4 testable sentences']),
t_fig_cap='The left column is introspection; the right column is evidence about yourself.',
t_body=[
 'Do the arithmetic on yourself first, because it is two minutes and it changes the '
 'conversation from busyness to structure. Count the items that cannot proceed without your '
 'signature, multiply by the minutes each takes, divide your available hours by that, and '
 'write down the number of items a year the organisation can therefore process. That number '
 'is a ceiling with your name on it, and nothing upstream of you lengthens it.',
 'Then stop trying to describe your judgement and describe what it has done. Take two or '
 'three hundred past decisions, record for each the single feature that produced the outcome, '
 'and look for the three conditions that account for most of them. Expect to find that your '
 'stated test was not your operative one, and expect the resulting rule to be duller and '
 'shorter than you imagine: a permission, up to three exclusions, a logging condition and a '
 'default route.',
 'Finally, test it with somebody else before it goes live, because the author of a rule '
 'cannot see where it is ambiguous. Have two readers apply the draft to the same twenty cases '
 'and report every disagreement; it costs a day and catches the failure that otherwise shows '
 'up as a shortfall nobody can explain. And if no set of conditions accounts for most of your '
 'cases, say so plainly: the work cannot be delegated and the firm has a ceiling, which '
 'belongs in the plan rather than in October’s apologies.'],
t_say=[('Compute the ceiling: ', 'Ninety documents a year, with me in it.'),
       ('Change the question: ', 'Not what I look for, but what decided these four hundred.'),
       ('Test it externally: ', 'Two readers, the same twenty cases, every disagreement listed.')],
t_bound=('A rule derived from past decisions reproduces what you did, including where you '
         'were wrong, and it cannot cover a kind of case that has not yet occurred. It also '
         'cannot tell you whether your own judgement was consistent; if it was not, the rule '
         'will be more consistent than you were, which is an improvement that will feel like '
         'a loss.'),
t_a=[('Ninety documents a year, with me in ____________.', 'it'),
     ('Not what I look for, but what ____________ these four hundred.', 'decided'),
     ('Two readers, the same twenty cases, every ____________ listed.', 'disagreement'),
     ('That number is a ceiling with your ____________ on it.', 'name'),
     ('Expect your stated test not to be your ____________ one.', 'operative'),
     ('The author of a rule cannot see where it is ____________.', 'ambiguous')],
t_b_rubric='Rewrite each refusal to delegate as a statement a plan could carry.',
t_b=[('I need to see everything myself.', 'the firm’s ceiling is ninety documents a year while I sign all of them'),
     ('I cannot explain what I look for.', 'I will examine ninety past decisions and record what decided each'),
     ('The work is too varied to delegate.', 'no three conditions account for sixty of ninety cases, so it cannot be delegated'),
     ('I will get to the queue when I can.', 'the queue has a nine-day latency after any period of leave')],

case=dict(
 title='Decision Clinic · The rule that was better than the person',
 brief=[
  'Ines examined her ninety advisory sign-offs. Three conditions accounted for seventy-one of '
  'the ninety, which is above the threshold her own brief had set, and the draft rule was '
  'tested by two readers on twenty cases.',
  'The two readers agreed with each other on nineteen of the twenty. On the remaining case '
  'they both reached the opposite conclusion from the one Ines had reached at the time. On '
  'review, Ines accepts that the rule’s answer was better than hers had been.',
  'The exercise also showed that in eleven of the ninety cases, documents materially similar '
  'to each other had been treated differently. Ines wants this in the board minute. Marta '
  'Olsen does not, on the grounds that it will be read as an admission of inconsistency by '
  'anybody who later disputes a piece of advice.'],
 exhibit=figs.datatable('NINETY SIGN-OFFS, EXAMINED',
                        ['', 'Count', 'Note'],
                        [['accounted for by 3 conditions', '71 of 90', 'above the 60 threshold'],
                         ['two readers agreed with each other', '19 of 20', '—'],
                         ['readers differed from Ines', '1 of 20', 'rule’s answer accepted as better'],
                         ['similar documents treated differently', '11 of 90', '—'],
                         ['documents returned for revision', '7 of 90', '—']]),
 exhibit_cap='The rule is delegable, more consistent than its author, and the evidence for both is the same table.',
 exhibit_note='Eleven inconsistencies out of ninety is comparable to published findings on '
              'expert consistency and says nothing specific about this reviewer.',
 voices=[('Ines Carvalho', 'managing director',
          'Eleven of ninety went two ways. That is the single most useful thing I have learned '
          'about my own work in nine years and it belongs in the minute, because the rule '
          'cannot be defended without it.'),
         ('Marta Olsen', 'risk and liability',
          'A board minute recording that the managing director treated similar documents '
          'differently eleven times is discoverable. I am not asking you to conceal it; I am '
          'asking you to record the finding as a property of expert review generally, with the '
          'figure held separately.'),
         ('Victor Sandoval', 'operations and quality',
          'I had the same eleven per cent and nobody asked me to soften it, because I am not '
          'the person who signs. The asymmetry is the whole of Marta’s point and it is also '
          'the reason the minute should say it plainly.')],
 steps=[('Find it', 'What did the ninety cases show?'),
        ('Compare it', 'How did the two readers compare with each other and with Ines?'),
        ('Infer it', 'Why does Marta distinguish recording from concealing?'),
        ('Weigh it', 'The defensibility of the rule against the discoverability of the finding.'),
        ('Decide', 'What goes in the board minute?')],
 analysis=[('Find it. How many cases did three conditions account for?', 'seventy-one of ninety'),
           ('Compare it. What happened on the twentieth case?', 'both readers differed from Ines, and the rule’s answer was accepted as better'),
           ('Infer it. What is Marta’s distinction?', 'between recording the finding and recording it in a form that identifies one person'),
           ('Weigh it. Why does the rule need the finding?', 'because the inconsistency is the evidence that the rule improves on the status quo'),
           ('Decide. What would you minute?', 'answers vary; the finding is required, the attribution is the question')],
 decision='Write the board minute entry and the rule’s preamble.',
 decision_steps=['Say what the minute records about the eleven cases.',
                 'Say whether the figure is attributed, and why.',
                 'Say what the rule’s preamble states about its own basis.',
                 'Say who may see the underlying ninety-case analysis.'],
 bank=['The minute records that …',
       'The figure is … because …',
       'The rule states in its preamble that …',
       'The underlying analysis is available to …',
       'This is reviewed when …'],
 outcome='The minute recorded that an examination of ninety sign-offs found eleven cases in '
         'which materially similar documents had been treated differently, without naming the '
         'reviewer, and the rule’s preamble states that it is derived from past decisions and '
         'is expected to be more consistent than they were. Nineteen months later a client '
         'disputed a piece of advice and their representatives asked for the analysis; it was '
         'provided in full, including the attribution, and the dispute was settled on other '
         'grounds. Marta notes that her precaution achieved nothing in the only case where it '
         'was tested, and that she would take it again, because one case tells you nothing '
         'about the distribution.',
 outcome_q=[('What happened when the analysis was eventually requested?', 'it was provided in full, including the attribution, and the dispute turned on other grounds'),
            ('Why does Marta stand by the precaution?', 'because one case says nothing about the distribution of outcomes')],
 tags=[]),

lab=dict(
 title='Brief Lab · Write a rule so this stops coming to me',
 task=['This is the brief Victor wrote to himself in March, in the first week of trying to '
       'get exceptions off his desk.',
       'He abandoned it after nine days, and the abandonment is instructive, because the '
       'brief asked him to introspect rather than to look.'],
 draft=['Work out what I actually check when an exception comes to me.',
        'Write it up as guidance the team can follow.',
        'Cover the main categories of exception.',
        'Set a sensible limit for the value involved.',
        'Make clear what should still come to me.',
        'Keep it short enough that people will read it.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief that asked a reviewer to describe his own mind instead of his own record.',
 asked=['Conditions derived from past decisions',
        'A rule two readers apply identically',
        'A stated default route'],
 back=['3 pages of description, no conditions',
       'Abandoned after 9 days',
       '"Use your judgement" as the default'],
 gap='"What I actually check" invites introspection rather than inspection of the record, '
     '"the main categories" names no set, "a sensible limit" sets no value and no basis, and '
     '"what should still come to me" is the whole of the rule stated as an afterthought.',
 back_cap='Three pages of adjectives, nine days spent, and no condition anybody could apply.',
 back_note='Nothing in the brief required the four hundred past decisions to be examined. '
           'Victor only turned to them after the introspective attempt failed.',
 diagnosis=[('[1] "what I actually check" — established from what evidence?', 'unstated criterion'),
            ('[2] "guidance the team can follow" — which team, and tested how?', 'ambiguous referent'),
            ('[3] "the main categories" — which categories, from what list?', 'unscoped set'),
            ('[4] "a sensible limit" — what value, standing for what?', 'unstated criterion'),
            ('[5] "what should still come to me" — expressed as what, exactly?', 'ambiguous referent'),
            ('[6] "short enough that people will read it" — over which population?', 'unscoped set')],
 rewrite='Rewrite the brief so that it requires past decisions to be examined, conditions to '
         'be derived, and two readers to test the result.',
 scaffold=['What must be established, and what to state if it cannot be',
           'Which items are covered and which are out of scope',
           'The decisions, notes and returns it must be built from',
           'What is recorded per item, the coverage threshold, and the shape of the rule',
           'What comes back, in how many sentences, with what test report',
           'What to do if no conditions account for most cases'],
 bank=['Establish whether … can be delegated in part, and if not, state …',
       'Cover the … items of the last … months; … is out of scope.',
       'Work from … , … , and the … returned for revision.',
       'For each item record … ; identify conditions accounting for at least … ; express the result as 1 permission, up to … exclusions, … and …',
       'Return 1 rule of no more than … sentences and 1 disagreement report on … cases.',
       'Where fewer than … can be accounted for, record that … and state …'],
 check=['Does the brief require the past record rather than introspection?',
        'Is the coverage threshold a number?',
        'Is the two-reader test required before go-live?',
        'Is there a fallback that states a ceiling?'],
 model=['Establish whether checking exceptions can be released by reviewers in part, and if not, state the firm’s ceiling in exceptions a year',
        'The 400 exceptions marked in the last 12 months; advisory sign-off is out of scope',
        'The 400 marked exceptions, the exception log, and the 9 exceptions escalated to a client',
        'For each of the 400 record the 1 feature that caused the outcome; identify the conditions that account for at least 260 of the 400; express the result as 1 permission, up to 3 exclusions, 1 logging condition and 1 default route; have 2 reviewers apply the draft to the same 20 exceptions and report every case where they differ',
        '1 rule of no more than 5 sentences, 1 disagreement report on 20 cases, and 1 stated ceiling if no rule is possible, by 30 April',
        'Where fewer than 260 of the 400 can be accounted for by any set of 3 conditions, record that release cannot be delegated and state the ceiling in exceptions a year'],
 cost='9 days of a reviewer’s time producing 3 pages of adjectives, and a further 6 weeks '
      'before the two-reader test was skipped and 4 per cent of the predicted benefit lost.'),

rev_fig=figs.split('CONDITIONAL CONNECTORS',
                   'Wrong',
                   ['unless the figure does not exceed 20,000',
                    'if the reason is logged, otherwise maybe',
                    'as long as it is fine',
                    'if not, do what seems sensible'],
                   'Right',
                   ['unless the figure exceeds 20,000',
                    'provided that the reason is logged',
                    'as long as the client is past quarter two',
                    'failing that, it comes to Victor']),
rev_fig_cap='Four conditions that two people would apply identically.',
rev=dict(
 read=[('The remaining constraint is usually', ['a system', 'a senior reviewer', 'a supplier', 'a client'], 1),
       ('The real obstacle to delegating is', ['unwillingness', 'inability to state one’s own test', 'cost', 'regulation'], 1),
       ('The rule should describe', ['the judgement', 'what the judgement did', 'the ideal outcome', 'the team'], 1),
       ('In the Clinic, how many of ninety cases went two ways?', ['none', 'eleven', 'seventy-one', 'twenty'], 1)],
 listen_text='Do the arithmetic on yourself first. Count the items that cannot proceed '
             'without your signature, multiply by the minutes each takes, and write down the '
             'number of items a year your organisation can therefore process. Then stop trying '
             'to describe your judgement and describe what it has done, across two or three '
             'hundred past decisions.',
 listen=[('Count the items that cannot proceed without your ____________.', 'signature'),
         ('The number of items a year your organisation can therefore ____________.', 'process'),
         ('Describe what it has ____________.', 'done'),
         ('Across two or three hundred past ____________.', 'decisions')],
 speak=['Say what cannot leave your organisation without you, and the annual ceiling it sets.',
        'Say which three conditions would account for most of your past decisions.'],
 write='Write one delegation sentence with an exclusion, a condition and a default route.',
 vocab=[('A person without whose action nothing proceeds is a ____________.', 'gatekeeper'),
        ('The proportion of items examined rather than all is the ____________.', 'sampling rate'),
        ('The delay between work arriving and starting is ____________.', 'waiting time'),
        ('The state of work neither progressing nor refused is a ____________.', 'holding pattern'),
        ('The stated route by which a case goes higher is an ____________.', 'escalation path')],
 gram=[('You may release it ____________ the figure exceeds twenty thousand.', 'unless'),
       ('You may release it ____________ the reason is logged.', 'provided that'),
       ('Release it ____________ the client is past their second quarter.', 'as long as'),
       ('____________ that, it comes to Victor.', 'Failing'),
       ('Do not release it ____________ you can state the reason in one line.', 'unless')]),

found=['Count what cannot proceed without your signature and compute your annual ceiling.',
       'Take fifty past decisions and record what decided each one.',
       'Draft a rule with exclusions, a condition and a default route.',
       'Have two colleagues apply it to the same ten cases and compare.'],
end_line='The rule is not my judgement written down. It is a description of what my judgement did.',
end_next='Next: We Require That It Be',
)
