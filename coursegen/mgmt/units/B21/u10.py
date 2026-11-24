# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='Because, Therefore, Which Means',
gram='cause and effect: due to, as a result of, which means that',
ai='measuring quality: what to count, weekly',
strap='CEFR B2 · Grammar: cause and effect · AI: measuring quality, and what to count',
cando=['link cause and effect using due to, as a result of and which means that',
       'distinguish a cause from something that merely happened at the same time',
       'choose a small number of things to count every week',
       'tell a leading indicator from a lagging one, and use each properly',
       'explain what happens to a measure once people know it is being watched'],
hero=('FOUR NUMBERS ON ONE SIDE OF ONE PAGE',
      ['They have been counted every Friday for a year.',
       'Three of them are useful and the fourth is a warning.'],
      [(860, 'blue', 'long'), (1600, 'grey', 'short'),
       (2240, 'teal', 'long'), (2760, 'orange', 'short')]),
hero_cap='The last unit of Book 3: what to count, and what counting does to people.',

warm=['What gets counted at your work every week? Who looks at it?',
      'What is the difference between "because of" and "due to" in careful writing?',
      'What happens to a number once people know their work is judged by it?'],
read=[
 'Arclight counts four things every Friday, on one side of one page, and has done for a '
 'year. The sampled error rate, as a count over its denominator. The number of items that '
 'received a judgement review. The number of releases stopped by a check. And the age in '
 'days of the oldest unresolved flag.',
 'Victor chose four rather than fourteen on the grounds that a page nobody reads measures '
 'nothing, and he chose these four for a reason he can state for each one. The error rate is '
 'the outcome, and it is lagging: by the time it moves, the thing that moved it happened '
 'weeks ago. The other three are leading, which is to say they change before the error rate '
 'does.',
 'The fourth number is the one he watches most carefully and it is also the one that worries '
 'him. The age of the oldest unresolved flag is a measure of whether anybody is actually '
 'attending to the things the checks produce, and it is trivially easy to improve by closing '
 'flags without resolving them, which nobody has done and which somebody eventually will.',
 'This is the familiar difficulty with any measure that is watched: it stops describing the '
 'thing and starts describing the response to being watched. Victor’s defence is partial '
 'and he says so. Each of the four is counted by somebody who does not benefit from the '
 'number, and the four are reported together, so improving one at the expense of another is '
 'visible on the same page.',
 'The other discipline is about language rather than arithmetic. When the error rate moved '
 'from 2.1 to 1.4 per cent in May, the page recorded that it had fallen and that the credit '
 'note census had started in the same month, without asserting that the second caused the '
 'first. The census covers three per cent of volume and the fall was larger than that, so '
 'something else was happening and nobody has established what.'],
c_a=[('What four things does Arclight count weekly?', 'the sampled error rate, judgement reviews, releases stopped, and the age of the oldest unresolved flag'),
     ('Why four rather than fourteen?', 'because a page nobody reads measures nothing'),
     ('Which is the lagging measure?', 'the error rate'),
     ('Why does the fourth number worry Victor?', 'because it is easy to improve by closing flags without resolving them'),
     ('What did the page record about May?', 'that the rate fell and the census started, without asserting that one caused the other')],
c_b=[('Arclight counts fourteen things weekly.', 'F'),
     ('The error rate changes before the other three do.', 'F'),
     ('Somebody has been closing flags without resolving them.', 'F'),
     ('Each measure is counted by somebody who benefits from it.', 'F'),
     ('The fall in May was larger than the census could explain.', 'T'),
     ('The page asserted that the census caused the fall.', 'F')],
c_c=[('Four things every Friday, on one side of one ____________.', 'page'),
     ('A page nobody reads measures ____________.', 'nothing'),
     ('By the time it moves, the thing that moved it happened weeks ____________.', 'ago'),
     ('It is trivially easy to improve by closing flags without ____________ them.', 'resolving'),
     ('It stops describing the thing and starts describing the ____________ to being watched.', 'response'),
     ('The census covers three per ____________ of volume.', 'cent')],
c_d=[('The error rate is a ( lagging / leading ) measure.', ['lagging', 'leading'], 0),
     ('Victor’s defence against gaming is', ['complete', 'partial, and he says so', 'untested', 'secret'], 1),
     ('The four are reported together so that', ['the page is shorter', 'improving one at another’s expense is visible', 'nobody reads them', 'they can be averaged'], 1),
     ('The May fall was not attributed to the census because', ['the census failed', 'the fall was larger than the census could explain', 'nobody asked', 'the data was lost'], 1),
     ('The oldest unresolved flag measures', ['speed', 'whether anybody is attending to what checks produce', 'volume', 'cost'], 1)],
c_e=('Cause, correlation or neither? Put each statement in the right column.',
     [('The rate fell because the census began.', 'Asserts cause'),
      ('The rate fell; the census began the same month.', 'States co-occurrence'),
      ('The run stopped due to a stale export.', 'Asserts cause'),
      ('Flags rose and volume rose together.', 'States co-occurrence'),
      ('Volume doubled, which means fewer items were judged.', 'Asserts cause'),
      ('Complaints fell and the weather improved.', 'States co-occurrence')],
     ['Asserts cause', 'States co-occurrence']),

v_fig_title='FOUR NUMBERS, EVERY FRIDAY',
v_fig=[('chart', 'a metric'), ('bulb', 'a leading indicator'), ('scale', 'a trend'),
       ('doc', 'a tally sheet'), ('note', 'noise'), ('bank', 'gaming')],
v_fig_cap='Six words for the page, and for what happens to the page once people read it.',
vocab=[
 ('metric', 'a quantity chosen to be measured regularly'),
 ('indicator', 'a measure used as a sign of something harder to observe'),
 ('leading indicator', 'a measure that moves before the outcome it predicts'),
 ('lagging indicator', 'a measure that moves after the thing that caused it'),
 ('dashboard', 'a small set of measures presented together'),
 ('trend', 'the direction a measure has been moving over time'),
 ('target', 'a value a measure is intended to reach'),
 ('tally sheet', 'a simple record on which counts are marked as they occur'),
 ('moving average', 'an average recalculated over a sliding window of periods'),
 ('spike', 'a sudden sharp rise that does not persist'),
 ('dip', 'a short fall before a return to the previous level'),
 ('signal', 'the part of a measurement that reflects a real change'),
 ('noise', 'variation in a measurement that reflects nothing in particular'),
 ('correlation', 'a tendency of two things to move together'),
 ('causation', 'the relation in which one thing brings another about'),
 ('confound', 'to obscure a relation by means of a third factor affecting both'),
 ('attribute', 'to state that something was caused by a particular thing'),
 ('track', 'to follow a measure over time and record it'),
 ('data series', 'a set of values of one measure over successive periods'),
 ('gaming', 'improving a measure without improving what it was meant to measure')],
v_a=[('A measure that moves before the outcome it predicts is a ____________.', 'leading indicator'),
     ('Improving a measure without improving the thing is ____________.', 'gaming'),
     ('Variation reflecting nothing in particular is ____________.', 'noise'),
     ('A tendency of two things to move together is ____________.', 'correlation'),
     ('An average recalculated over a sliding window is a ____________.', 'moving average'),
     ('A simple record on which counts are marked is a ____________.', 'tally sheet'),
     ('To obscure a relation through a third factor is to ____________ it.', 'confound'),
     ('A sudden sharp rise that does not persist is a ____________.', 'spike')],
v_b=[('A lagging indicator moves after', 'the thing that caused it.'),
     ('To attribute something is to state', 'that it was caused by a particular thing.'),
     ('Causation is the relation in which one thing', 'brings another about.'),
     ('A data series is a set of values of one measure', 'over successive periods.'),
     ('A dashboard is a small set of measures', 'presented together.')],

g_title='Grammar: cause and effect',
g_rule=['Because of and due to take a noun: the run stopped due to a stale export.',
        'Because takes a clause: the run stopped because the export was stale.',
        'As a result of states a consequence; it is stronger than and more formal than so.',
        'Which means that draws out an implication rather than asserting a cause.'],
g_fig=('LOOSE',
       ['The rate fell because of the census.',
        'Flags rose due to the new check.',
        'Complaints dropped as a result.',
        'It improved, which means it worked.'],
       'PRECISE',
       ['The rate fell; the census began that month.',
        'Flags rose when the check was added.',
        'Complaints dropped from 4 to 1 in Q3.',
        'It improved by 0.7 points, cause unestablished.'],
       'a cause asserted without evidence',
       'co-occurrence, honestly reported'),
g_fig_cap='The left column is the sentence everybody writes about a number that has moved.',
g_a=[('The run stopped ____________ to a stale export. (due)', 'due'),
     ('The run stopped ____________ the export was stale. (because)', 'because'),
     ('Flags rose ____________ a result of the new check. (as)', 'as'),
     ('Volume doubled, ____________ means fewer items were judged. (which)', 'which'),
     ('The rate fell ____________ of a change nobody has identified. (because)', 'because'),
     ('____________ to the census, credit note errors are now rare. (due)', 'Due'),
     ('The page is short, ____________ that people read it. (so)', 'so'),
     ('Complaints fell ____________ the same quarter as the rate. (in)', 'in'),
     ('The check fired four times, ____________ means it is working. (which)', 'which')],
g_b=[('The run stopped ( because / due to ) a stale export.', ['because', 'due to'], 1),
     ('The run stopped ____ the export was stale.', ['due to', 'because of', 'because', 'owing'], 2),
     ('Flags rose ____ a result of the new check.', ['in', 'as', 'by', 'for'], 1),
     ('Volume doubled, ____ means fewer items were judged.', ['what', 'which', 'that', 'it'], 1),
     ('____ to the census, credit note errors are rare.', ['Because', 'Due', 'As', 'Since'], 1),
     ('The page is short, ____ that people read it.', ['so', 'such', 'which', 'as'], 0)],

d1=dict(title='Four, not fourteen',
        fig=(['Why only four numbers?', 'Because fourteen is a page nobody reads.'],
             ['We measure more than four things.', 'We do. We report four.']),
        cap='Ines and Victor, when the page was designed.',
        lines=[('Ines', 'You are proposing four numbers for a company that measures about thirty things.'),
               ('Victor', 'We measure thirty and we report four, and the difference between those is the '
                          'whole design.'),
               ('Ines', 'Explain why four rather than ten, because ten still fits on a page.'),
               ('Victor', 'Ten fits on a page and nobody can hold ten numbers in mind well enough to '
                          'notice when one of them stops making sense.'),
               ('Ines', 'And four you can hold.'),
               ('Victor', 'Four you can hold, and more importantly four you can argue about, because '
                          'everybody has read all of them.'),
               ('Ines', 'Which four?'),
               ('Victor', 'The error rate, which is the outcome. Items judged, releases stopped and the '
                          'age of the oldest open flag, which are the three things that move before it does.'),
               ('Ines', 'So three warnings and one result.'),
               ('Victor', 'Three warnings and one result, and if the warnings are moving and the result '
                          'is not, I would rather know that than have a comfortable page.'),
               ('Ines', 'And the other twenty-six measures?'),
               ('Victor', 'Kept, available, and not on the page. Anybody can ask for one and almost nobody does.')],
        a=[('How many things does Arclight measure, and how many does it report?', 'about thirty measured, four reported'),
           ('Why not ten?', 'because nobody can hold ten numbers well enough to notice when one stops making sense'),
           ('What is the error rate, in Victor’s scheme?', 'the outcome, which lags'),
           ('What are the other three?', 'the things that move before the outcome does'),
           ('What happens to the other measures?', 'they are kept and available but not on the page')],
        b=[('We measure thirty and we report ____________.', 'four'),
           ('Four you can hold, and four you can ____________ about.', 'argue'),
           ('Three ____________ and one result.', 'warnings'),
           ('Anybody can ask for one and almost nobody ____________.', 'does')]),
d2=dict(title='It fell, and we do not know why',
        fig=(['The rate fell after the census.', 'The census covers three per cent.'],
             ['So it cannot explain it.', 'Which is worth writing down.']),
        cap='Kenji and Victor, over the May page.',
        lines=[('Kenji', 'The rate went from two point one to one point four in the month the census started.'),
               ('Victor', 'It did, and the census covers three per cent of volume, so it cannot account '
                          'for a fall of that size.'),
               ('Kenji', 'Then something else moved and nobody knows what.'),
               ('Victor', 'Nobody knows what, and that sentence is on the page, which I regard as the '
                          'most useful line we have written this year.'),
               ('Kenji', 'Most companies would have written that the census worked.'),
               ('Victor', 'Most companies would, and then the next time the rate rose they would have no '
                          'idea whether the census had stopped working or whether the real cause had moved.'),
               ('Kenji', 'So the honest line protects you later rather than now.'),
               ('Victor', 'It protects the next interpretation. An unexplained fall is information. A '
                          'fall attributed to the wrong thing is worse than no information at all.'),
               ('Kenji', 'Do you have a candidate for what it was?'),
               ('Victor', 'Two. The supplier who sent the odd format stopped trading in April, and we '
                          'changed the sampling strata in the same week. Either could do it.'),
               ('Kenji', 'And you cannot separate them.'),
               ('Victor', 'Not from this data, and I am not going to pretend otherwise to make the page tidier.')],
        unresolved=True,
        a=[('What happened to the rate in May?', 'it fell from 2.1 to 1.4 per cent'),
           ('Why can the census not explain it?', 'because it covers only three per cent of volume'),
           ('What is on the page instead of an explanation?', 'that nobody knows what caused the fall'),
           ('Why does Victor regard that as useful?', 'because a fall attributed to the wrong thing is worse than no information'),
           ('What two candidates does he name?', 'a supplier ceasing to trade, and a change to the sampling strata in the same week')],
        b=[('The census covers three per cent of ____________.', 'volume'),
           ('Nobody knows what, and that sentence is on the ____________.', 'page'),
           ('A fall attributed to the wrong thing is worse than no ____________.', 'information'),
           ('I am not going to pretend otherwise to make the page ____________.', 'tidier')]),

speak=[('Cause or coincidence?',
        ['Student A: describe a number at your work that changed recently.',
         'Student B: propose a cause. Then propose two other things that happened at the same time.',
         'Decide together what would be needed to separate them.']),
       ('Spoken specification: choose four',
        ['Choose four things your team should count weekly, and say why each one.',
         'Brief them aloud, naming which is the outcome and which are warnings.',
         'Your partner asks how each could be improved without improving the work.']),
       ('How would you game it?',
        ['In pairs, take three measures used at your workplace.',
         'For each, describe how somebody could improve the number dishonestly.',
         'Decide which is easiest to game, and what would make that visible.'])],

ext_title='Count four things, and say what you do not know',
ext_fig=figs.datatable('THE FRIDAY PAGE',
                       ['Measure', 'Kind', 'Moves before or after?', 'Gameable?'],
                       [['sampled error rate', 'outcome', 'after', 'hard'],
                        ['items judged', 'effort', 'before', 'easy'],
                        ['releases stopped', 'detection', 'before', 'moderate'],
                        ['age of oldest flag', 'attention', 'before', 'very easy'],
                        ['reported together', '—', '—', 'harder as a set']]),
ext_fig_cap='The last row is the only defence against the fourth column.',
ext=[
 'Measuring quality fails in two opposite ways and both are common. It fails by measuring '
 'nothing, which is the position most small companies are in and which leaves every '
 'argument about quality to be settled by whoever speaks with most conviction. It fails by '
 'measuring everything, which produces a page nobody reads and a false sense that the '
 'subject is under control.',
 'Four numbers is an arbitrary figure and the principle behind it is not. A set of measures '
 'is useful only if everybody who should act on it has read all of it, and the number of '
 'figures a busy person will actually hold in mind week after week is small. Thirty measures '
 'in a system and four on the page is a reasonable arrangement; thirty on the page is the '
 'same as none.',
 'Choose at least one outcome measure and at least two that move before it. The error rate '
 'tells you what happened and tells you late, because a change in how work is produced takes '
 'weeks to appear in a sampled rate. The number of items given attention, the number of '
 'releases stopped and the age of the oldest unresolved flag all move within days of '
 'anything changing, which is when you can still do something.',
 'Every watched measure degrades, and the degradation is not usually dishonesty. People '
 'respond rationally to what is counted, and a measure that is easy to move without moving '
 'the underlying thing will drift in that direction through a thousand small reasonable '
 'decisions. The age of an open flag can be improved by closing flags; nobody has to decide '
 'to cheat for that to happen.',
 'The partial defences are worth using even though they are partial. Have the count made by '
 'somebody who does not benefit from it. Report the measures together, so that improving one '
 'at the expense of another shows up on the same page. And write down what you do not know: '
 'a page that says the rate fell and nobody has established why is more useful in six months '
 'than one that attributed it confidently to whatever had most recently been done.'],
dp1=('Measures under observation',
     'It is widely observed in management research that a measure adopted as a target tends '
     'to lose its value as a measure, as behaviour adapts to the measurement.',
     'Source: general management and economics literature, 2026. Strength of the effect varies.'),
e_a=[('What are the two opposite failures?', 'measuring nothing, and measuring everything'),
     ('What is the principle behind a small number of measures?', 'that everybody who should act on it has read all of it'),
     ('Why is the error rate a late signal?', 'because a change in production takes weeks to appear in a sampled rate'),
     ('Why is measure degradation usually not dishonesty?', 'because people respond rationally to what is counted, through small reasonable decisions'),
     ('Name the three partial defences.', 'an independent counter, reporting measures together, and writing down what you do not know')],
e_b=[('Most small companies measure quality carefully.', 'F'),
     ('Thirty measures on a page is equivalent to none.', 'T'),
     ('Leading indicators move within days of a change.', 'T'),
     ('Degradation of a measure requires somebody to decide to cheat.', 'F'),
     ('Reporting measures together makes trade-offs visible.', 'T'),
     ('A confident attribution is more useful later than an honest unknown.', 'F')],

w_model=(
 'Purpose: give the company four numbers a week that everybody reads and can argue about. '
 'Scope: quality measures only; commercial and volume measures are reported separately. '
 'Inputs: the sample results, the judgement log, the release records and the flag register. '
 'Criteria: exactly 4 measures, 1 of which is an outcome and 3 of which move before it; '
 'each counted by somebody who does not benefit from the figure; where a measure moves by '
 'more than 20 per cent, the page states what changed in the same period without asserting '
 'that it was the cause. Done: 1 side of 1 page, every Friday by 16:00. Fallback: where a '
 'movement has no established cause, write "cause not established" and list what else '
 'changed.'),
w_fig=figs.spec_card('DESIGNING THE PAGE',
                     [('How many', 'Four, because everybody must have read all of them'),
                      ('Kinds', 'One outcome, three that move earlier'),
                      ('Counted by', 'Somebody who does not benefit from the number'),
                      ('Together', 'On one page, so trade-offs are visible'),
                      ('Movement', 'State what else changed, without asserting cause'),
                      ('Unknowns', 'Written down as unknowns, not omitted')]),
w_fig_cap='The last two lines are what make the page still usable in a year.',
w_task='Design a weekly page of four measures for your own work.',
w_steps=['Choose one outcome measure, expressed over a denominator.',
         'Choose three measures that move before the outcome does.',
         'For each, say who counts it and whether they benefit from the figure.',
         'For each, describe how somebody could improve it dishonestly.',
         'Write the rule for what the page says when a number moves and nobody knows why.'],
w_bank=['The outcome measure is … , expressed as … of …',
        'The leading measures are … , … and … , because they move …',
        '… counts … , and does not benefit from …',
        'This could be improved dishonestly by …',
        'Where a movement has no established cause, the page states …'],
w_check=['Is there exactly one outcome measure and at least two leading ones?',
         'Does each measure have a named counter who does not benefit?',
         'Have you written down how each could be gamed?',
         'Does the page have a way of saying that a cause is unknown?'],

t_title='Measuring quality: what to count, weekly',
t_fig=figs.split('LEADING AND LAGGING',
                 'Lagging — tells you late',
                 ['the sampled error rate',
                  'client complaints',
                  'credit notes reissued',
                  'money written off'],
                 'Leading — tells you now',
                 ['items given a judgement review',
                  'releases stopped by a check',
                  'age of the oldest open flag',
                  'checks skipped in a busy week']),
t_fig_cap='The right-hand column moves within days. The left-hand column moves within quarters.',
t_body=[
 'Pick four and mean it, because the discipline is in the exclusion rather than in the '
 'selection. Everything you add past about four reduces the chance that the people who '
 'should act on the page have read the whole of it, and a measure nobody has read is not a '
 'measure, it is a record. Keep the other twenty-six and make them available on request.',
 'Include one outcome and at least two leading measures, and label which is which on the '
 'page itself. An outcome measure is the thing you care about and it arrives weeks late; a '
 'leading measure is a proxy for effort or attention and it arrives immediately. A page of '
 'outcomes alone tells you about a quarter you can no longer influence.',
 'And write the unknowns down. When a number moves and nobody has established why, say so '
 'and list what else changed in the same period. This feels like an admission and it is an '
 'asset: in six months, when the number moves again, you will have a record of what was '
 'genuinely known rather than a confident attribution that has since become load-bearing.'],
t_say=[('Limit it: ', 'Four measures, because everybody has to have read all of them.'),
       ('Label the kind: ', 'One outcome, three that move before it.'),
       ('Record the unknown: ', 'The rate fell 0.7 points; cause not established.')],
t_bound=('A measure tells you about the thing it counts and about the response to being '
         'counted, and nothing on the page distinguishes the two. A page of four numbers '
         'moving in the right direction is consistent with work improving and with people '
         'becoming skilled at the page, and no amount of care in choosing the measures '
         'removes that ambiguity.'),
t_a=[('Four measures, because everybody has to have read all of ____________.', 'them'),
     ('One outcome, three that move ____________ it.', 'before'),
     ('The rate fell 0.7 points; cause not ____________.', 'established'),
     ('The discipline is in the ____________ rather than in the selection.', 'exclusion'),
     ('A measure nobody has read is a ____________.', 'record'),
     ('A page of outcomes alone tells you about a quarter you can no longer ____________.', 'influence')],
t_b_rubric='Rewrite each sentence so that it reports rather than attributes.',
t_b=[('The rate fell because of the census.', 'the rate fell 0.7 points; the census began in the same month'),
     ('Complaints are down thanks to the new check.', 'complaints fell from 4 to 1; the check was added in April'),
     ('Flags rose due to carelessness.', 'flags rose from 6 to 19; volume rose 40 per cent in the same period'),
     ('Quality improved after the training.', 'the rate fell 0.2 points, within the usual variation; the training was in March')],

case=dict(
 title='Decision Clinic · The number that improved itself',
 brief=[
  'The age of the oldest unresolved flag has improved from eleven days to two over a '
  'quarter, which is the best movement on the page.',
  'Victor has discovered that about forty per cent of the improvement comes from flags being '
  'closed with the note "no action required", a category that did not exist in January and '
  'now accounts for sixty-one closures.',
  'Nobody did anything wrong. The note was added by Thomas to handle flags that were '
  'genuinely not worth investigating, of which there are some, and it has been used for '
  'flags that were worth investigating and were inconvenient.'],
 exhibit=figs.datatable('FLAG CLOSURES THIS QUARTER',
                        ['Closure reason', 'Count', 'Average age at closure', 'Reviewed?'],
                        [['resolved, fault found', '34', '6 days', 'yes'],
                         ['resolved, no fault', '88', '3 days', 'yes'],
                         ['no action required', '61', '0.4 days', 'no'],
                         ['still open', '7', '2 days', '—'],
                         ['total', '190', '—', '—']]),
 exhibit_cap='The third row closes in under half a day and nobody reviews it.',
 exhibit_note='Of 12 "no action required" closures re-examined by Victor, 3 should have been '
              'investigated. One of the 3 concerned a credit note.',
 voices=[('Victor Sandoval', 'operations and quality',
          'The measure has improved and the thing it measures has not. This is the failure '
          'mode I wrote about when we designed the page, and I did not spot it for a quarter.'),
         ('Thomas Reed', 'service delivery',
          'I added that category because we were investigating flags that were obviously '
          'nothing and the backlog was eating the mornings. It was the right thing to do and '
          'it has been used more widely than I intended.'),
         ('Marta Olsen', 'risk and liability',
          'Three of twelve should have been investigated, and one of them was a credit note. '
          'I am less interested in the measure than in the three.')],
 steps=[('Find it', 'How many flags closed as "no action required", and how fast?'),
        ('Compare it', 'What does the measure now report, and what did it report before?'),
        ('Infer it', 'Why did the category spread beyond its intended use?'),
        ('Weigh it', 'A real morning saved against three uninvestigated flags in twelve.'),
        ('Decide', 'What happens to the category, and to the measure?')],
 analysis=[('Find it. How many closures used the new category?', 'sixty-one, at an average age of under half a day'),
           ('Compare it. What does the improvement now reflect?', 'partly faster resolution and partly a category that closes flags without review'),
           ('Infer it. Why did it spread?', 'because it was a reasonable answer to a real problem and nothing limited its use'),
           ('Weigh it. What did the category genuinely achieve?', 'it removed investigation of flags that were obviously nothing, which was eating mornings'),
           ('Decide. What would keep the benefit and remove the drift?', 'allowing the category but sampling it, so that closures without review are themselves checked')],
 decision='Write the change to the flag process and to the page.',
 decision_steps=['Say what happens to the "no action required" category.',
                 'Say how that category is itself checked, and at what rate.',
                 'Say what the page reports from now on, so the drift would be visible.',
                 'Say what you have learned about the other three measures.'],
 bank=['The … category is …', 'A sample of … per cent of … is …',
       'The page will now report … as well as …',
       'For the other measures, we will …', 'This is reviewed if …'],
 outcome='The category was kept and a quarter of its closures are now re-examined weekly, '
         'which takes about twenty minutes. The page reports the age of the oldest flag and '
         'the proportion of closures that were reviewed, side by side, so that an '
         'improvement in the first bought by a fall in the second is visible in one glance. '
         'Victor applied the same treatment to the other three measures and found one further '
         'drift, in releases stopped, where two near-identical stops had been recorded as one.',
 outcome_q=[('Why report the two numbers side by side?', 'because an improvement in one bought by a fall in the other becomes visible immediately'),
            ('What did examining the other three measures find?', 'one further drift, where two near-identical stops had been recorded as one')],
 tags=[]),

lab=dict(
 title='Brief Lab · Start reporting on quality',
 task=['This is the brief that created the Friday page, written when Arclight had measured '
       'nothing for two years and wanted to start.',
       'It asks for a report on quality, which is the right ambition, and it leaves every '
       'decision about what quality consists of to whoever writes the first page.'],
 draft=['Start giving me a regular report on quality.',
        'Include the main things we ought to be watching.',
        'Keep it short enough that people will read it.',
        'Put a bit of commentary on anything that has moved.',
        'Tell me whether things are getting better or worse.',
        'Weekly would probably be about right.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief for a quality page that names no measure and asks for a verdict on all of them.',
 asked=['Four measures, one outcome and three leading',
        'Counts over denominators, with named counters',
        'Unknown causes written down as unknown'],
 back=['Eleven measures, nobody read past four',
       'Bare numbers with no denominators',
       'Every movement confidently explained'],
 gap='"The main things we ought to be watching" leaves the selection open, "a bit of '
     'commentary on anything that has moved" asks for an explanation whether or not one '
     'exists, and "better or worse" asks for a verdict rather than a figure.',
 back_cap='Eleven numbers, each with a sentence explaining it, most of which were invented.',
 back_note='The first page attributed a fall in complaints to a training session held three '
           'weeks earlier. The training had been attended by two of eleven staff.',
 diagnosis=[('[1] "the main things" — how many, and which?', 'unbounded quantity'),
            ('[2] "short enough that people will read it" — how short?', 'unbounded quantity'),
            ('[3] "a bit of commentary" — and if no cause is known?', 'missing condition'),
            ('[4] "anything that has moved" — moved by how much?', 'unstated criterion'),
            ('[5] "better or worse" — against what baseline?', 'unstated criterion'),
            ('[6] "weekly would probably be about right" — and who counts?', 'missing condition')],
 rewrite='Rewrite the brief so that the page has a fixed number of measures, every figure '
         'carries a denominator, and an unknown cause is reported as unknown.',
 scaffold=['Why four numbers everybody reads beats eleven that nobody does',
           'Which measures are on the page, and what is reported elsewhere',
           'The sample results, the judgement log, the release records and the flag register',
           'How many measures, of which kinds, counted by whom, and when a movement is commented on',
           'The page itself, its length and the hour it appears',
           'What the page says when a number has moved and nobody knows why'],
 bank=['Report … numbers weekly so that …',
       'Quality measures only; … are reported separately.',
       'Draw on … , … , … and …',
       'Exactly … measures: … outcome and … leading; each counted by …',
       '1 side of 1 page, every … by …',
       'Where a movement has no established cause, …'],
 check=['Is the number of measures fixed, with a reason?',
        'Does every figure carry a denominator?',
        'Is there a rule for commenting only on movements above a stated size?',
        'Can the page say that a cause is not established?'],
 model=['Give the company 4 numbers a week that everybody reads and can argue about',
        'Quality measures only; commercial figures and volume are reported separately',
        'The sample results, the judgement log, the release records and the flag register',
        'Exactly 4 measures, 1 of which is an outcome and 3 of which move before it; each counted by somebody who does not benefit from the figure; comment only where a measure moves by more than 20 per cent, and then state what else changed in the same period without asserting that it was the cause',
        '1 side of 1 page, every Friday by 16:00, each figure expressed as a count over its denominator',
        'Where a movement has no established cause, write "cause not established" and list what else changed in the period'],
 cost='11 measures of which nobody read more than 4, a fall in complaints attributed to a '
      'training session 2 of 11 staff had attended, and 5 months before anybody noticed that '
      'the page was explaining movements it could not explain.'),

rev_fig=figs.split('REPORTING AND ATTRIBUTING',
                   'Attributing — claims a cause',
                   ['The rate fell because of the census.',
                    'Complaints are down thanks to the check.',
                    'Flags rose due to carelessness.',
                    'Quality improved after the training.'],
                   'Reporting — states what is known',
                   ['The rate fell 0.7 points; the census began.',
                    'Complaints fell 4 to 1; the check was added.',
                    'Flags rose 6 to 19; volume rose 40 per cent.',
                    'The rate fell 0.2, within usual variation.']),
rev_fig_cap='Book 3 in one picture: the right-hand column is still useful in a year.',
rev=dict(
 read=[('A page of four measures is preferred because', ['it is cheaper', 'everybody will have read all of it', 'it is traditional', 'it is faster'], 1),
       ('"Due to" is followed by', ['a clause', 'a noun', 'an infinitive', 'nothing'], 1),
       ('A measure degrades under observation mainly through', ['dishonesty', 'rational responses to what is counted', 'error', 'inflation'], 1),
       ('In the Clinic, what was reported beside the oldest flag age?', ['volume', 'the proportion of closures reviewed', 'cost', 'complaints'], 1)],
 listen_text='Four numbers, one of which is an outcome and three of which move before it, '
             'counted by somebody who does not benefit from them and reported on one page so '
             'that trading one against another is visible. And when a number moves and you '
             'do not know why, write that down. A fall attributed to the wrong thing is worse '
             'than a fall nobody has explained.',
 listen=[('One of which is an ____________ and three of which move before it.', 'outcome'),
         ('Counted by somebody who does not ____________ from them.', 'benefit'),
         ('When a number moves and you do not know why, write that ____________.', 'down'),
         ('A fall attributed to the wrong thing is worse than a fall nobody has ____________.', 'explained')],
 speak=['Name a measure at your work. Your partner describes how to improve it dishonestly.',
        'Decide what second number, reported beside it, would make that visible.'],
 write='Design a four-measure weekly page, naming the counter and the gaming risk for each.',
 vocab=[('A measure that moves before the outcome it predicts is a ____________.', 'leading indicator'),
        ('Improving a measure without improving the thing is ____________.', 'gaming'),
        ('Variation reflecting nothing in particular is ____________.', 'noise'),
        ('A tendency of two things to move together is ____________.', 'correlation'),
        ('To obscure a relation through a third factor is to ____________ it.', 'confound')],
 gram=[('The run stopped ____________ to a stale export.', 'due'),
       ('The run stopped ____________ the export was stale.', 'because'),
       ('Flags rose ____________ a result of the new check.', 'as'),
       ('Volume doubled, ____________ means fewer items were judged.', 'which'),
       ('____________ to the census, credit note errors are now rare.', 'Due')]),

found=['Choose four numbers your team should see every week, and discard the rest.',
       'For one measure at your work, describe how it could be improved dishonestly.',
       'Find a sentence at your work attributing a change to something unproven.',
       'Write down one movement you have seen and cannot explain.'],
end_line='The measure improved and the thing it measured did not, which is the oldest trap there is.',
end_next='Next: Book 4, Customers and Value',
)
