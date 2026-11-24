# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='We Should Have Seen It',
gram='past modals: must have, might have, should have',
ai='where errors become invisible, and why that is the real risk',
strap='CEFR B2 · Grammar: past modals · AI: where errors become invisible',
cando=['use must have, might have and should have to evaluate what happened',
       'separate a judgement about the past from a reconstruction of it',
       'identify the point in a process where an error stops being detectable',
       'say why automation moves errors away from the person who made them',
       'design a detection point rather than relying on something surfacing'],
hero=('AN ERROR THAT TOOK SEVEN MONTHS TO ARRIVE',
      ['It was made in February and found in September,',
       'by somebody who had nothing to do with it.'],
      [(900, 'grey', 'short'), (1640, 'teal', 'long'), (2380, 'orange', 'short')]),
hero_cap='The gap between making a mistake and meeting it is the subject of this unit.',

warm=['How long would it take for a mistake in your work to reach somebody?',
      'What is the difference between "it must have failed" and "it should have failed"?',
      'Who at your work would find out first if something had gone quietly wrong?'],
read=[
 'The cheapest error anybody can have is the one found by the person who made it, within a '
 'minute, because at that point the cost is the minute. Every step the error travels away '
 'from its maker multiplies what it costs to correct and reduces the chance that anybody '
 'correcting it understands what actually went wrong.',
 'This is not a new observation, and the risk it describes is older than any of the subject matter of this book. '
 'What changes when work is handed over to a system is the distance an error can travel '
 'before meeting anybody at all. A person producing forty letters notices, somewhere around '
 'the eleventh, that something is odd. A process producing four hundred notices nothing, '
 'because noticing is not among the things it does.',
 'Arclight’s February currency fault is the clean illustration. A conversion was applied at '
 'the rate of the invoice date rather than the payment date, which is defensible and was '
 'not what the client’s own contract specified. It was correct arithmetic applied under the '
 'wrong rule, it produced plausible figures every month, and it was discovered in September '
 'by a supplier doing their own year end.',
 'The question Victor asks about any error is not how it happened but where it would have '
 'been caught, and that question usually has a clear answer that nobody likes. The February '
 'fault would have been caught at the first reconciliation against a supplier statement, '
 'which Arclight did not do at that time because it had not yet had the conversation in '
 'the previous unit.',
 'So the useful work after an incident is not apportioning blame, which produces nothing, '
 'but identifying the detection point: the earliest place where the error was in principle '
 'visible to somebody who was looking. If nobody was looking there, that is the finding, '
 'and it is a finding about the design rather than about any person.'],
c_a=[('What is the cheapest error?', 'the one found by the person who made it, within a minute'),
     ('What changes when work is handed to a system?', 'the distance an error can travel before meeting anybody'),
     ('What was the February fault?', 'a conversion applied at the invoice date rather than the payment date'),
     ('Who discovered it, and when?', 'a supplier doing their own year end, in September'),
     ('What question does Victor ask about any error?', 'where it would have been caught')],
c_b=[('The February figures looked implausible.', 'F'),
     ('The arithmetic itself was wrong.', 'F'),
     ('A person producing forty letters is likely to notice something odd.', 'T'),
     ('The fault would have been caught by a supplier statement reconciliation.', 'T'),
     ('Victor regards apportioning blame as productive.', 'F'),
     ('The detection point is a finding about design.', 'T')],
c_c=[('At that point the cost is the ____________.', 'minute'),
     ('Noticing is not among the things it ____________.', 'does'),
     ('It was correct arithmetic applied under the wrong ____________.', 'rule'),
     ('Discovered in September by a supplier doing their own year ____________.', 'end'),
     ('The earliest place where the error was in principle ____________.', 'visible'),
     ('A finding about the ____________ rather than about any person.', 'design')],
c_d=[('The February error was ( arithmetic / rule ) applied wrongly.', ['arithmetic', 'rule'], 1),
     ('A process producing four hundred letters notices nothing because', ['it is fast', 'noticing is not something it does', 'it is unsupervised', 'the volume is low'], 1),
     ('The useful work after an incident is', ['apportioning blame', 'identifying the detection point', 'rewriting the process', 'informing the client'], 1),
     ('The detection point is defined as', ['where the error happened', 'the earliest place it was visible to somebody looking', 'where it was found', 'where it was reported'], 1),
     ('The February fault was found by', ['Victor', 'a client', 'a supplier at year end', 'the sample'], 2)],
c_e=('Deduction, possibility or criticism? Put each sentence in the right column.',
     [('It must have been applied at the invoice date.', 'Deduction'),
      ('It might have been a rounding difference.', 'Possibility'),
      ('We should have reconciled against the statements.', 'Criticism'),
      ('It cannot have been a transcription slip.', 'Deduction'),
      ('Somebody may have changed the rule in January.', 'Possibility'),
      ('They ought to have flagged the first one.', 'Criticism')],
     ['Deduction', 'Possibility', 'Criticism']),

v_fig_title='HOW LONG BEFORE IT SURFACES',
v_fig=[('bulb', 'latent'), ('scale', 'a near miss'), ('doc', 'a post-mortem'),
       ('chart', 'detection rate'), ('note', 'a precursor'), ('bank', 'root cause')],
v_fig_cap='Six words for the distance between a mistake and the moment anybody meets it.',
vocab=[
 ('latent', 'present but not yet showing itself'),
 ('dormant', 'inactive for the time being, but capable of becoming active'),
 ('undetected', 'present and not noticed by anybody'),
 ('near miss', 'an incident that almost caused harm and happened not to'),
 ('precursor', 'a smaller event that comes before a larger one of the same kind'),
 ('retrospective', 'looking back at what happened in order to learn from it'),
 ('post-mortem', 'an examination after an incident to establish what occurred'),
 ('root cause', 'the underlying reason, as opposed to the immediate trigger'),
 ('contributory', 'helping to bring something about without being the main cause'),
 ('incident log', 'a record of events that went wrong, kept as they occur'),
 ('surface', 'to become visible after a period of not being so'),
 ('manifest', 'to show itself in a way that can be observed'),
 ('symptom', 'a visible sign of an underlying condition'),
 ('underlying', 'lying beneath the surface and giving rise to what is seen'),
 ('lag', 'the delay between an event and its consequence being noticed'),
 ('recurrence', 'a second or later occurrence of the same thing'),
 ('early warning', 'a signal that arrives in time for something to be done'),
 ('detection rate', 'the proportion of faults that are found by a given check'),
 ('in retrospect', 'looking back, with knowledge that was not available then'),
 ('escalation path', 'the route by which a problem reaches somebody who can act')],
v_a=[('An incident that almost caused harm is a ____________.', 'near miss'),
     ('The underlying reason rather than the immediate trigger is the ____________.', 'root cause'),
     ('The delay between an event and its being noticed is the ____________.', 'lag'),
     ('A signal arriving in time for action is an ____________.', 'early warning'),
     ('Present but not yet showing itself is ____________.', 'latent'),
     ('The proportion of faults found by a check is its ____________.', 'detection rate'),
     ('The route by which a problem reaches somebody who can act is the ____________.', 'escalation path'),
     ('A smaller event coming before a larger one of the same kind is a ____________.', 'precursor')],
v_b=[('A post-mortem is an examination after an incident', 'to establish what occurred.'),
     ('To surface is to become visible', 'after a period of not being so.'),
     ('Contributory means helping to bring something about', 'without being the main cause.'),
     ('A symptom is a visible sign', 'of an underlying condition.'),
     ('An incident log is a record of events that went wrong,', 'kept as they occur.')],

g_title='Grammar: past modals — must have, might have, should have',
g_rule=['Must have + past participle expresses near certainty about the past.',
        'Might have and could have express a possibility you cannot rule out.',
        'Should have and ought to have criticise: the thing did not happen and it was required.',
        'Cannot have expresses near-certain impossibility: it cannot have been a slip.'],
g_fig=('LOOSE',
       ['It went wrong in February.',
        'Somebody changed the rule.',
        'Nobody checked it.',
        'It was a rounding difference.'],
       'PRECISE',
       ['It must have been applied at the invoice date.',
        'Somebody may have changed the rule in January.',
        'We should have reconciled against the statements.',
        'It cannot have been rounding — it is 140 euros.'],
       'an account with no degree of certainty',
       'the same account, graded'),
g_fig_cap='The past tense states what happened. The past modal states how sure you are about it.',
g_a=[('It ____________ have been applied at the invoice date. (must)', 'must'),
     ('Somebody ____________ have changed the rule in January. (may)', 'may'),
     ('We ____________ have reconciled against the statements. (should)', 'should'),
     ('It ____________ have been rounding; it is a hundred and forty euros. (cannot)', 'cannot'),
     ('They ____________ to have flagged the first one. (ought)', 'ought'),
     ('The export ____________ have been four days old. (must)', 'must'),
     ('She ____________ have noticed, but the page looked normal. (might)', 'might'),
     ('Nobody ____________ have seen it; it was inside the tolerance. (could)', 'could'),
     ('We ____________ have priced the error a year earlier. (should)', 'should')],
g_b=[('It ( must / should ) have been applied at the invoice date — nothing else fits.', ['must', 'should'], 0),
     ('Somebody ____ have changed the rule in January.', ['must to', 'may', 'should', 'ought'], 1),
     ('We ____ have reconciled against the statements.', ['can', 'might', 'should', 'must'], 2),
     ('It ____ have been rounding; it is 140 euros.', ['must', 'cannot', 'should', 'may'], 1),
     ('They ought ____ have flagged the first one.', ['to', 'of', 'have', '—'], 0),
     ('Nobody ____ have seen it; it was inside the tolerance.', ['should', 'must', 'could', 'ought'], 2)],

d1=dict(title='Where would we have caught it?',
        fig=(['Whose fault was February?', 'That is the wrong question.'],
             ['What is the right one?', 'Where would we have caught it?']),
        cap='Victor and Dalia, after the supplier’s year end.',
        lines=[('Dalia', 'February. Seven months. I would like to know whose decision that conversion rule was.'),
               ('Victor', 'I can find out and I do not think it will help you, because whoever it was '
                          'made a defensible choice with nothing to check it against.'),
               ('Dalia', 'It was the wrong choice. The contract says payment date.'),
               ('Victor', 'It was the wrong choice and it was not an unreasonable one, and those two '
                          'things keep being true at the same time in this company.'),
               ('Dalia', 'Then what question should I be asking?'),
               ('Victor', 'Where would we have caught it? Not where did it come from.'),
               ('Dalia', 'And the answer is the supplier statement reconciliation, which we did not do then.'),
               ('Victor', 'The first month’s reconciliation would have shown a hundred and forty euros out, '
                          'and we would have found it in March instead of September.'),
               ('Dalia', 'So the finding is about a check we did not have, not a person who chose badly.'),
               ('Victor', 'The finding is about a check we did not have. The person is a detail.'),
               ('Dalia', 'I notice that the version of this conversation where I get to be annoyed is shorter.'),
               ('Victor', 'It is shorter and it produces nothing, which is why I keep steering you out of it.')],
        a=[('What does Dalia want to know?', 'whose decision the conversion rule was'),
           ('Why does Victor think that will not help?', 'because whoever chose made a defensible choice with nothing to check it against'),
           ('What question does he prefer?', 'where would we have caught it'),
           ('What is the answer?', 'the first supplier statement reconciliation, which would have shown 140 euros out'),
           ('What kind of finding is it?', 'a finding about a check that did not exist, not about a person')],
        b=[('Made a defensible choice with nothing to ____________ it against.', 'check'),
           ('Where would we have ____________ it?', 'caught'),
           ('We would have found it in ____________ instead of September.', 'March'),
           ('The person is a ____________.', 'detail')]),
d2=dict(title='Nothing surfaced',
        fig=(['Seven months and no symptom.', 'There was a symptom.'],
             ['Which was?', 'Nobody reconciled, so nobody saw it.']),
        cap='Marta and Victor, writing the post-mortem.',
        lines=[('Marta', 'Seven months with no symptom at all is the part I find difficult to accept.'),
               ('Victor', 'There was a symptom every month. The total was a hundred and forty euros '
                          'out against the supplier statement.'),
               ('Marta', 'Which nobody looked at.'),
               ('Victor', 'Which nobody looked at, so from inside the company there was no symptom.'),
               ('Marta', 'Those are very different situations and I want the post-mortem to distinguish them.'),
               ('Victor', 'Agreed. An error that produces no observable difference anywhere is one thing. '
                          'An error that produces a difference nobody observes is another.'),
               ('Marta', 'And ours was the second, which means it was detectable from month one.'),
               ('Victor', 'From month one, at a cost of about twenty minutes, had anybody been doing it.'),
               ('Marta', 'Then I want the report to say "detectable from February and undetected until '
                          'September", not "undetected for seven months".'),
               ('Victor', 'That is a better sentence and it will be harder to read on the day.'),
               ('Marta', 'It should be harder to read. The softer version has let us off three times this year.'),
               ('Victor', 'I will write it your way and I think you are overestimating how much a sentence can do.')],
        unresolved=True,
        a=[('What does Marta find difficult to accept?', 'seven months with no symptom at all'),
           ('What was the symptom?', 'a hundred and forty euro difference against the supplier statement, every month'),
           ('What distinction does Victor draw?', 'between an error producing no observable difference and one producing a difference nobody observes'),
           ('From when was it detectable?', 'from month one, at a cost of about twenty minutes'),
           ('What do they disagree about at the end?', 'how much the wording of the report can actually achieve')],
        b=[('From inside the company there was no ____________.', 'symptom'),
           ('An error that produces a difference nobody ____________.', 'observes'),
           ('Detectable from February and undetected until ____________.', 'September'),
           ('The softer version has let us ____________ three times this year.', 'off')]),

speak=[('Grade the past',
        ['Student A: describe something that went wrong at your work.',
         'Student B: offer three explanations using must have, might have and cannot have.',
         'Decide which grade each explanation deserves on the evidence available.']),
       ('Spoken specification: find the detection point',
        ['Choose a mistake that could occur in your work.',
         'Brief aloud where it would first be visible, and to whom.',
         'Your partner asks whether anybody is actually looking there.']),
       ('Detectable, or undetectable?',
        ['In pairs, list four faults that could occur in your work.',
         'For each, say whether it would produce an observable difference anywhere.',
         'Separate the ones nobody is watching from the ones nothing would show.'])],

ext_title='Automation moves errors away from the person who made them',
ext_fig=figs.datatable('THE FEBRUARY FAULT, MONTH BY MONTH',
                       ['Month', 'Difference against statement', 'Reconciled?', 'Visible?'],
                       [['February', '140 EUR', 'no', 'would have been'],
                        ['March to June', '140 EUR each', 'no', 'would have been'],
                        ['July', '140 EUR', 'no', 'would have been'],
                        ['August', '140 EUR', 'no', 'would have been'],
                        ['September', '140 EUR', 'by the supplier', 'yes']]),
ext_fig_cap='The second column is identical in every row. Only the third column changed.',
ext=[
 'The oldest principle in quality work is that errors are cheapest when they are found '
 'closest to where they were made, in time and in distance. A person who makes a mistake and '
 'notices within a minute spends a minute. The same mistake found by a customer eight months '
 'later costs the correction, the investigation, the explanation and some portion of the '
 'relationship.',
 'Handing work to a system does not change this principle and it changes the distances '
 'dramatically. The person who used to produce the work was also, incidentally and without '
 'anybody specifying it, the detection mechanism: they saw every item, they had a sense of '
 'what the output usually looked like, and they would stop at the eleventh of forty letters '
 'and say that something was odd.',
 'That incidental detection disappears, and because nobody wrote it down as part of the '
 'process, nobody replaces it. The output is produced correctly in the sense that each step '
 'did what it was told, it is produced at volume, and the first entity to examine it as a '
 'whole is frequently the recipient. This is the mechanism by which a seven-month lag '
 'becomes normal rather than exceptional.',
 'The useful distinction, and the one Arclight’s post-mortem now makes, is between an error '
 'that produces no observable difference anywhere and an error that produces a difference '
 'nobody is observing. The first is genuinely hard; the second is a design omission that '
 'looks identical from inside and is entirely fixable, usually for about twenty minutes a '
 'month.',
 'So the question after an incident should be where it would have been visible rather than '
 'who made it. The first question produces a finding about a missing check, which can be '
 'added. The second produces a finding about a person who made a defensible choice without '
 'anything to test it against, which is almost always what happened and almost never worth '
 'establishing.'],
dp1=('Detection lag',
     'Incident studies across sectors commonly report that the cost of correcting a fault '
     'rises with the time between its introduction and its detection, often by more than an '
     'order of magnitude.',
     'Source: general quality and reliability literature, 2026. Multipliers vary by domain.'),
e_a=[('What is the oldest principle in quality work?', 'errors are cheapest when found closest to where they were made'),
     ('What did the person producing the work also provide?', 'incidental detection, by seeing every item and knowing what output usually looked like'),
     ('Why is it not replaced?', 'because nobody wrote it down as part of the process'),
     ('What is the useful distinction?', 'between no observable difference anywhere and a difference nobody is observing'),
     ('Why is "who made it" a poor question?', 'because it usually finds a defensible choice made with nothing to test it against')],
e_b=[('Handing work to a system changes the principle itself.', 'F'),
     ('Incidental detection was specified as part of the process.', 'F'),
     ('The first entity to examine output as a whole is often the recipient.', 'T'),
     ('An unobserved difference is usually hard to fix.', 'F'),
     ('"Where would it have been visible" produces a finding about a check.', 'T'),
     ('The February fault produced no difference anywhere.', 'F')],

w_model=(
 'Purpose: establish where an error would first have been visible, so that a check can be '
 'placed there. Scope: every incident recorded in the last 24 months; near misses are '
 'included. Inputs: the incident log and the process mapping dated 12 May. Criteria: for '
 'each incident, state the month it was introduced, the month it was found, the earliest '
 'point at which it produced an observable difference, and whether anybody was looking '
 'there; do not record who introduced it. Done: 1 row per incident and 1 list of detection '
 'points with no observer. Fallback: where an error produced no observable difference '
 'anywhere, record it as undetectable and say what would have to exist for it to be '
 'detectable.'),
w_fig=figs.chain('AFTER AN INCIDENT',
                 ['When was it introduced?', 'When was it found?',
                  'Where was it first visible?', 'Was anybody looking there?',
                  'What would have to exist for somebody to be?']),
w_fig_cap='Five questions, none of which is "who did it", and all of which produce something to build.',
w_task='Write a post-mortem brief for incidents at your own workplace.',
w_steps=['Say what counts as an incident, and include near misses.',
         'Require the introduction date and the discovery date, separately.',
         'Require the earliest point at which an observable difference existed.',
         'Require a statement of whether anybody was looking there.',
         'Say explicitly that the person responsible is not recorded.'],
w_bank=['An incident is any … , including …',
        'Record the month it was … and the month it was …',
        'State the earliest point at which …', 'State whether anybody …',
        'The person who introduced it is not recorded, because …'],
w_check=['Does your brief separate when it happened from when it was found?',
         'Does it ask where the error was first visible?',
         'Does it ask whether anybody was actually looking there?',
         'Have you excluded the question of who, in writing?'],

t_title='Where errors become invisible, and why that is the real risk',
t_fig=figs.capacity('WHAT USED TO BE WATCHED, AND WHAT IS',
                    ('Items produced a month', 1870),
                    ('Items any person looks at', 104),
                    'The gap is not negligence. It is what happens unless somebody designs otherwise.'),
t_fig_cap='The incidental detection that came free with human production does not come free any more.',
t_body=[
 'After an incident, ask where errors would have been visible rather than who made them. The first '
 'question produces a detection point, which is a thing you can put a check at. The second '
 'produces a name, and the name almost always belongs to somebody who made a reasonable '
 'decision in the absence of anything that would have told them otherwise.',
 'Then establish whether the error produced an observable difference at all. An error that '
 'changes nothing anybody could see is genuinely difficult and rare. An error that produces '
 'a difference in a document nobody opens is a design omission, it is common, and it is '
 'usually fixable for a small and specific amount of work.',
 'And record the two dates separately, because the gap between them is the number that '
 'matters. Introduced in February, found in September is a different incident from '
 'introduced in August, found in September, even if the error itself is identical. The first '
 'tells you about your detection; the second tells you that your detection worked.'],
t_say=[('Ask where, not who: ', 'Where would this have first been visible to somebody looking?'),
       ('Separate the dates: ', 'Introduced in February, found in September: a seven-month lag.'),
       ('Name the omission: ', 'It was visible from month one. Nobody was reconciling.')],
t_bound=('Finding the detection point tells you where this error would have been caught, not '
         'where the next one will be. A check placed at the point that would have caught '
         'February catches February-shaped faults, and the next incident will usually have a '
         'different shape and a different detection point entirely.'),
t_a=[('Where would this have first been ____________ to somebody looking?', 'visible'),
     ('Introduced in February, found in September: a seven-month ____________.', 'lag'),
     ('It was visible from month one. Nobody was ____________.', 'reconciling'),
     ('The second question produces a ____________.', 'name'),
     ('An error that changes nothing anybody could see is genuinely ____________.', 'difficult'),
     ('The gap between them is the number that ____________.', 'matters')],
t_b_rubric='Name the detection point for each fault, and say who would be looking.',
t_b=[('A currency conversion applied at the wrong date.', 'the supplier statement reconciliation; the person doing it monthly'),
     ('A letter sent to a client who had paid.', 'the queue release, if the export age were checked'),
     ('A summary asserting an agreement nobody made.', 'the commitment-sentence read before sending'),
     ('A credit note applied to the wrong account.', 'the credit note census, at the point of release')],

case=dict(
 title='Decision Clinic · The post-mortem that named a person',
 brief=[
  'The February currency fault is being written up. The first draft of the report names the '
  'person who set the conversion rule, states that the choice was wrong, and recommends '
  'additional training.',
  'Victor has rewritten it to say that the rule was defensible, that no check existed to '
  'test it, and that the detection point was the supplier statement reconciliation, which '
  'began in June for unrelated reasons.',
  'Dalia prefers the first draft, not out of any wish to blame anybody, but because she '
  'thinks a report that names nobody will be read as a report about nothing, and that this '
  'is the third such report this year.'],
 exhibit=figs.datatable('THREE REPORTS THIS YEAR',
                        ['Incident', 'Named a person?', 'Change made', 'Recurrence'],
                        [['stale export', 'no', 'age check added', 'none'],
                         ['invented clause', 'no', 'source rule added', 'none'],
                         ['summary commitment', 'no', 'commitment read added', 'none'],
                         ['currency rule', 'draft names one', 'proposed: reconciliation', '—'],
                         ['all four', '—', 'all implemented', 'none so far']]),
 exhibit_cap='Three reports naming nobody, three changes made, no recurrences.',
 exhibit_note='Dalia’s concern is not supported by the recurrence column, which she accepts. '
              'Her concern is about how seriously the reports are read, which the column '
              'does not measure.',
 voices=[('Dalia Rahman', 'co-founder',
          'Three reports in a year, none of which names anybody, all of which conclude that '
          'the process was at fault. At some point that reads as a company that never gets '
          'anything wrong, only arranges things badly.'),
         ('Victor Sandoval', 'operations and quality',
          'All three changes were made and none has recurred. If naming people were '
          'necessary for a report to be acted on, we would have evidence of that by now and '
          'we have the opposite.'),
         ('Marta Olsen', 'risk and liability',
          'Dalia is not asking about effectiveness. She is asking whether people believe the '
          'reports, which is a different thing, and the recurrence column cannot answer it '
          'either way.')],
 steps=[('Find it', 'How many reports this year, and how many recurrences?'),
        ('Compare it', 'What does naming a person add, and what does it cost?'),
        ('Infer it', 'Why does Marta say the recurrence column cannot settle it?'),
        ('Weigh it', 'The credibility of the reports against the willingness to write them.'),
        ('Decide', 'What goes in this report, and what is the standing rule?')],
 analysis=[('Find it. How many of the three changes have recurred?', 'none'),
           ('Compare it. What is the evidence that naming is unnecessary?', 'three unnamed reports produced three implemented changes and no recurrences'),
           ('Infer it. What is Dalia actually asking about?', 'whether the reports are believed, not whether they work'),
           ('Weigh it. What would naming people cost?', 'the willingness of people to report incidents at all'),
           ('Decide. Is there something that answers Dalia without naming anybody?', 'recording what was decided, when and on what information, without attaching a name')],
 decision='Write the standing rule for post-mortems.',
 decision_steps=['Say what every report must contain.',
                 'Say what it must not contain, and why.',
                 'Say how the decision that led to the fault is recorded, if not by name.',
                 'Say what evidence would change this rule.'],
 bank=['Every report states … , … and …',
       'No report records … , because …', 'The decision is recorded as … , without …',
       'This rule changes if …', 'Reports are read by … within …'],
 outcome='The rule records the decision and the information available when it was taken, '
         'without a name: "in January, the conversion date was set to the invoice date; the '
         'contract was not consulted and no check existed". Dalia agreed this met her point. '
         'In the following eighteen months there were seven reports, and in two of them the '
         'decision recorded was one Dalia had taken herself, which she says did more for the '
         'credibility of the arrangement than any amount of naming would have.',
 outcome_q=[('What did recording the decision without a name achieve?', 'it made the report specific about what was decided while keeping it about the process'),
            ('Why did the two reports about Dalia’s own decisions matter?', 'because they showed the arrangement applied to everybody, which is what credibility rested on')],
 tags=[]),

lab=dict(
 title='Brief Lab · Write up what happened in February',
 task=['This is the brief for the February post-mortem, written the day after the supplier '
       'found the fault, by somebody who had spent the morning on the telephone.',
       'It is written in the vocabulary of fault-finding rather than of design, and it asks '
       'for an explanation of what went wrong rather than for a detection point.'],
 draft=['Find out what went wrong with the February currency figures.',
        'Work out who set that rule and when.',
        'Establish how it got through without anybody noticing.',
        'See whether there were any warning signs we missed.',
        'Recommend what we should do differently.',
        'Keep it brief and let me have it tomorrow.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A post-mortem brief that asks who, how and what we missed, and never asks where.',
 asked=['Introduction and discovery dates, separately',
        'The earliest point it was observable',
        'Whether anybody was looking there'],
 back=['A name and a date in January',
       'A conclusion that nobody checked',
       'No detection point identified at all'],
 gap='"Who set that rule" produces a person, "how it got through" produces a narrative, and '
     '"warning signs we missed" assumes somebody was looking, which nobody was.',
 back_cap='A report naming a person and recommending that people be more careful.',
 back_note='The first draft recommended additional training. Nothing in it identified the '
           'reconciliation that would have found the fault in March.',
 diagnosis=[('[1] "what went wrong" — and if nothing was done incorrectly?', 'unstated exception'),
            ('[2] "who set that rule and when" — recorded for what purpose?', 'ambiguous referent'),
            ('[3] "how it got through" — through what, exactly?', 'ambiguous referent'),
            ('[4] "warning signs we missed" — and if nobody was watching?', 'unstated exception'),
            ('[5] "what we should do differently" — finished when?', 'undefined done'),
            ('[6] "keep it brief" — brief enough to omit what?', 'undefined done')],
 rewrite='Rewrite the brief so that it asks where the fault would first have been visible, '
         'and so that it does not ask who introduced it.',
 scaffold=['Why the detection point matters more than the origin',
           'Which incidents are covered, including near misses',
           'The incident log and the process mapping, both dated',
           'What must be established for each incident, and what must not be recorded',
           'The rows that come back, and the list of unwatched detection points',
           'What to record when a fault produced no observable difference anywhere'],
 bank=['Establish … so that … can be placed there.',
       'Cover … , including …', 'Work from … and the mapping dated …',
       'For each incident state … , … , … and … ; do not record …',
       'Return … and a list of …', 'Where a fault produced no observable difference, …'],
 check=['Does the brief ask where rather than who?',
        'Are the introduction and discovery dates required separately?',
        'Does it ask whether anybody was looking at the detection point?',
        'Is the undetectable case handled explicitly?'],
 model=['Establish where the February fault would first have been visible, so that a check can be placed there',
        'Every incident recorded in the last 24 months, including near misses that caused no loss',
        'The incident log and the process mapping dated 12 May',
        'For each incident, state the month it was introduced, the month it was found, the earliest point at which it produced an observable difference, and whether anybody was looking there; the person who introduced it is not recorded, because the finding is about the design',
        '1 row per incident and 1 list of every detection point with no observer, by 20 September',
        'Where an error produced no observable difference anywhere, record it as undetectable and state what would have to exist for it to be detectable'],
 cost='7 months between a 140-euro monthly difference arising and anybody seeing it, '
      'discovery by a supplier rather than by Arclight, and a first report recommending '
      'training for a fault that no amount of care would have caught.'),

rev_fig=figs.split('PAST MODALS',
                   'How certain, about the past',
                   ['It must have been the invoice date.',
                    'It might have been a rounding difference.',
                    'It cannot have been a transcription slip.',
                    'Somebody may have changed it in January.'],
                   'Criticism, about the past',
                   ['We should have reconciled monthly.',
                    'They ought to have flagged the first one.',
                    'We should have priced the error sooner.',
                    'Somebody should have been looking.']),
rev_fig_cap='The left column grades a reconstruction. The right column grades a company.',
rev=dict(
 read=[('The cheapest error is one found by', ['a client', 'the person who made it', 'a sample', 'an auditor'], 1),
       ('"Should have" expresses', ['near certainty', 'criticism of something that did not happen', 'possibility', 'permission'], 1),
       ('The useful post-mortem question is', ['who made it', 'where it would have been visible', 'how much it cost', 'when it was reported'], 1),
       ('In the Clinic, what was recorded instead of a name?', ['nothing', 'the decision and the information available', 'a department', 'the date only'], 1)],
 listen_text='Ask where an error would first have been visible, not who made it, because the '
             'first question gives you somewhere to put a check and the second gives you a '
             'name attached to a reasonable decision. Then separate the date it was '
             'introduced from the date it was found, because the gap between them is the only '
             'number in the whole report that measures your detection rather than your luck.',
 listen=[('Ask where an error would first have been ____________.', 'visible'),
         ('The second question gives you a ____________.', 'name'),
         ('Separate the date it was introduced from the date it was ____________.', 'found'),
         ('The gap between them measures your ____________.', 'detection')],
 speak=['Describe a fault that could occur in your work. Your partner names the detection point.',
        'Then ask whether anybody is looking there today.'],
 write='Write a post-mortem row: introduced, found, first visible, anybody looking.',
 vocab=[('An incident that almost caused harm is a ____________.', 'near miss'),
        ('The underlying reason rather than the immediate trigger is the ____________.', 'root cause'),
        ('The delay between an event and its being noticed is the ____________.', 'lag'),
        ('A signal arriving in time for action is an ____________.', 'early warning'),
        ('The proportion of faults found by a check is its ____________.', 'detection rate')],
 gram=[('It ____________ have been applied at the invoice date.', 'must'),
       ('Somebody ____________ have changed the rule in January.', 'may'),
       ('We ____________ have reconciled against the statements.', 'should'),
       ('It ____________ have been rounding; it is a hundred and forty euros.', 'cannot'),
       ('They ____________ to have flagged the first one.', 'ought')]),

found=['Take one fault that could happen in your work and name its detection point.',
       'Ask whether anybody is looking at that point today.',
       'Find out what incidental checking disappeared when a manual step was automated.',
       'Record the introduction date and the discovery date of one past incident.'],
end_line='There was a symptom every month. Nobody was looking at the document it appeared in.',
end_next='Next: Because, Therefore, Which Means',
)
