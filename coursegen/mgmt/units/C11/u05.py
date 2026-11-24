# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='What Had Already Happened',
gram='past perfect and narrative sequence',
ai='keeping what the company knows when a system does the work',
strap='CEFR C1 · Grammar: past perfect and sequence · AI: keeping what the company knows',
cando=['use the past perfect to place one past event before another',
       'narrate a sequence of events in an order other than the order they happened',
       'explain how knowledge is lost when the work that taught it stops',
       'distinguish what is written down from what is actually known',
       'design a way of keeping knowledge that the work no longer produces'],
hero=('THE THING NOBODY HAD NOTICED',
      ['By the time the question was asked, it had already happened.',
       'Three of the four had never done one by hand.'],
      [(780, 'blue', 'long'), (1500, 'teal', 'short'),
       (2180, 'orange', 'long'), (2840, 'purple', 'short')]),
hero_cap='Knowledge leaves an organisation in the silence where the work used to be.',

warm=['What does your organisation know that is written nowhere?',
      'Who learned it, and from doing what?',
      'If that work stopped tomorrow, who would learn it next?'],
read=[
 'By the time Victor Sandoval asked the question in September, the thing he was worried about '
 'had already happened, and it had happened so quietly that no measurement in the firm had '
 'moved. He had intended to ask which of the checking team could do a format survey from '
 'first principles, as a routine piece of succession planning, and he had expected the '
 'answer to be all four of them.',
 'The answer was one. Priya Menon, who had joined before the drafting system went in, had '
 'learned the work by doing it two hundred times. The three who had joined afterwards had '
 'between them confirmed something close to nine hundred drafts, had corrected the system '
 'perhaps forty times, and had never once built a mapping sheet from an unfamiliar set of '
 'documents with nothing in front of them.',
 'What made this difficult rather than merely awkward is that their work had been good. The '
 'quality measures for the three were indistinguishable from Priya’s, because confirming a '
 'correct draft and producing a correct sheet yield the same output. The difference only '
 'appears when the draft is wrong in a way the system does not flag, and that case had arisen '
 'eleven times in two years, nine of which had reached Priya.',
 'Victor traced the sequence afterwards and found that nobody had decided anything. The '
 'system had been introduced to remove drudgery, which it had done; the training had been '
 'rewritten around the new process, because the old training taught a procedure that no '
 'longer existed; and the apprenticeship by which the firm had always transmitted its '
 'judgement had been an accidental by-product of the drudgery, which nobody had noticed '
 'because nobody had written it down as a purpose.',
 'The firm now has a handbook of eleven pages on the format survey, and Victor describes it, '
 'not unkindly, as a record of what the firm does rather than of what it knows. The eleven '
 'cases in which the draft was wrong in an unflagged way are not in it. They are the whole of '
 'what the firm knows, and until September nobody had thought to collect them.'],
c_a=[('What had Victor expected the answer to be?', 'that all four could do a survey from first principles'),
     ('What was the answer?', 'one: Priya, who had joined before the drafting system'),
     ('Why were the three indistinguishable from Priya on quality?', 'because confirming a correct draft and producing a correct sheet yield the same output'),
     ('When does the difference appear?', 'when the draft is wrong in a way the system does not flag'),
     ('How does Victor describe the handbook?', 'as a record of what the firm does rather than of what it knows')],
c_b=[('The three new staff had done poor work.', 'F'),
     ('Priya had learned the work by doing it two hundred times.', 'T'),
     ('Somebody had decided to stop the apprenticeship.', 'F'),
     ('The old training taught a procedure that still existed.', 'F'),
     ('Eleven unflagged errors had arisen in two years.', 'T'),
     ('The eleven cases are recorded in the handbook.', 'F')],
c_c=[('No measurement in the firm had ____________.', 'moved'),
     ('As a routine piece of ____________ planning.', 'handover plan'),
     ('Had never once built a mapping sheet from an ____________ set of documents.', 'unfamiliar'),
     ('An accidental ____________ of the drudgery.', 'by-product'),
     ('A record of what the firm ____________ rather than of what it knows.', 'does'),
     ('Nobody had thought to ____________ them.', 'collect')],
c_d=[('The loss happened because nobody had written the apprenticeship down as a ( procedure / purpose ).', ['procedure', 'purpose'], 1),
     ('How many of the four could work from first principles?', ['all four', 'one', 'two', 'none'], 1),
     ('The quality measures for the three were', ['worse', 'indistinguishable from Priya’s', 'better', 'not collected'], 1),
     ('Of eleven unflagged errors, how many reached Priya?', ['two', 'nine', 'eleven', 'none'], 1),
     ('What is missing from the handbook?', ['the procedure', 'the eleven unflagged cases', 'the measures', 'the staff names'], 1)],
c_e=('Which event came first? Put each pair in the right column.',
     [('The system had gone in before Priya left.', 'past perfect event first'),
      ('Priya had joined before the system went in.', 'past perfect event first'),
      ('Victor asked the question and then traced the sequence.', 'same order as told'),
      ('By the time he asked, it had already happened.', 'past perfect event first'),
      ('The training was rewritten after the process changed.', 'same order as told'),
      ('Nobody had noticed, because nobody had written it down.', 'past perfect event first')],
     ['past perfect event first', 'same order as told']),

v_fig_title='WHAT AN ORGANISATION KNOWS',
v_fig=[('doc', 'documentation'), ('bulb', 'tacit knowledge'), ('bank', 'an archive'),
       ('scale', 'chain of origin'), ('key', 'know-how'), ('chart', 'corporate memory')],
v_fig_cap='Six words distinguishing what is recorded from what is merely held.',
vocab=[
 ('institutional knowledge', 'what an organisation collectively knows, held in its people'),
 ('tacit knowledge', 'knowledge somebody has that they could not fully write down'),
 ('documentation', 'the written record of how something is done'),
 ('knowledge transfer', 'the deliberate movement of knowledge from one person to another'),
 ('a handbook', 'a compiled statement of procedure, kept current'),
 ('tenure', 'the length of time people stay, and what they take with them'),
 ('attrition', 'the steady loss of people, and with them what they knew'),
 ('an apprenticeship', 'learning by doing the work alongside somebody who can already do it'),
 ('to shadow', 'to follow somebody through their work in order to learn it'),
 ('to codify', 'to turn something known into a stated rule others can apply'),
 ('a repository', 'a single place where material is deliberately kept'),
 ('chain of origin', 'the recorded history of where something came from'),
 ('an audit trail', 'a record sufficient to reconstruct what was done and why'),
 ('handover plan', 'the arrangement by which somebody can take over from somebody'),
 ('deskilling', 'the loss of a capability in people because the work no longer requires it'),
 ('know-how', 'practical knowledge of how to get something done'),
 ('an archive', 'material kept for the long term rather than for current use'),
 ('unbroken operation', 'the quality of carrying on without a break when people or systems change'),
 ('to embed', 'to fix something so deeply into practice that it persists'),
 ('corporate memory', 'the organisation’s recollection of what has happened before')],
v_a=[('Knowledge somebody has that they could not fully write down is ____________.', 'tacit knowledge'),
     ('The loss of a capability because the work no longer requires it is ____________.', 'deskilling'),
     ('Learning by doing the work alongside somebody who can is an ____________.', 'apprenticeship'),
     ('The recorded history of where something came from is its ____________.', 'chain of origin'),
     ('A record sufficient to reconstruct what was done and why is an ____________.', 'audit trail'),
     ('To turn something known into a stated rule is to ____________ it.', 'codify'),
     ('The organisation’s recollection of what has happened before is its ____________.', 'corporate memory'),
     ('The steady loss of people and what they knew is ____________.', 'attrition')],
v_b=[('Institutional knowledge is what an organisation collectively knows,', 'held in its people.'),
     ('Knowledge transfer is the deliberate movement of knowledge', 'from one person to another.'),
     ('A handover plan is the arrangement by which', 'somebody can take over from somebody.'),
     ('Unbroken operation is the quality of carrying on', 'when people or systems change.'),
     ('To embed is to fix something so deeply into practice', 'that it persists.')],

g_title='Grammar: past perfect and narrative sequence',
g_rule=['The past perfect places an event before another past event already in view.',
        'It lets you narrate out of order: by the time he asked, it had already happened.',
        'Once the earlier time is established, the narrative can revert to the past simple.',
        'Overuse is the commonest fault; use it to mark the shift, not for every sentence.'],
g_fig=('LOOSE',
       ['By the time he asked, it already happened.',
        'Priya joined before the system had gone in.',
        'Nobody noticed, because nobody wrote it down.',
        'After the process had changed, the training had been rewritten.'],
       'PRECISE',
       ['By the time he asked, it had already happened.',
        'Priya had joined before the system went in.',
        'Nobody had noticed, because nobody had written it down.',
        'After the process changed, the training was rewritten.'],
       'four sequencing errors, two of them overuse',
       'four with the earlier event correctly marked'),
g_fig_cap='The past perfect is a signpost, not a tense to settle into.',
g_a=[('By the time he asked, it ____________ (already/happen).', 'had already happened'),
     ('Priya ____________ (join) before the system went in.', 'had joined'),
     ('Nobody had noticed, because nobody ____________ (write) it down.', 'had written'),
     ('After the process changed, the training ____________ (rewrite).', 'was rewritten'),
     ('The three ____________ (never/build) a sheet from first principles.', 'had never built'),
     ('Once he ____________ (trace) the sequence, the cause was obvious.', 'had traced'),
     ('She ____________ (do) it two hundred times before the system arrived.', 'had done'),
     ('They ____________ (correct) the system forty times by then.', 'had corrected'),
     ('When the eleventh case arose, nine ____________ (already/reach) Priya.', 'had already reached')],
g_b=[('By the time he asked, it ( had already happened / already happened ).', ['had already happened', 'already happened'], 0),
     ('Priya ____ before the system went in.', ['has joined', 'had joined', 'was joining', 'joins'], 1),
     ('Nobody had noticed, because nobody ____ it down.', ['wrote', 'had written', 'has written', 'writes'], 1),
     ('After the process changed, the training ____.', ['had been rewritten', 'was rewritten', 'has rewritten', 'rewrote'], 1),
     ('The three ____ a sheet from first principles.', ['never built', 'had never built', 'have never built', 'never build'], 1),
     ('When the eleventh case arose, nine ____ Priya.', ['already reached', 'had already reached', 'have reached', 'reach'], 1)],

d1=dict(title='How many of you have done one by hand?',
        fig=(['Four people, nine hundred drafts.', 'And one of you has built one.'],
             ['Does it matter, if the output is identical?', 'It matters eleven times in two years.']),
        cap='Victor and Priya, September.',
        lines=[('Victor', 'I asked the four of you how many had built a mapping sheet from scratch. '
                          'One hand went up and it was yours.'),
               ('Priya', 'Because I had done two hundred of them before the drafting went in. They '
                         'arrived afterwards.'),
               ('Victor', 'Their work is as good as yours on every measure we keep.'),
               ('Priya', 'It is, and the measures cannot see the thing you are asking about. '
                         'Confirming a right draft and writing a right sheet look identical '
                         'afterwards.'),
               ('Victor', 'So when does it diverge?'),
               ('Priya', 'When the draft is wrong in a way the system has not flagged. It has '
                         'happened eleven times in two years and nine of them came to me.'),
               ('Victor', 'Why to you? Nothing routes them.'),
               ('Priya', 'Nothing routes them. They came to me because the three of them had a '
                         'feeling that something was odd and no way of naming it, and I was the '
                         'person who had seen odd before.'),
               ('Victor', 'That is the most worrying sentence anybody has said to me this year.'),
               ('Priya', 'It should be. I am leaving in eighteen months, probably, and when I go the '
                         'firm will not know that it has lost anything for about a year.'),
               ('Victor', 'What would you have had us do differently?'),
               ('Priya', 'Keep the eleven cases. Not the procedure, the eleven cases, with what was '
                         'odd and how it was resolved. That is the whole of it and it would fit in '
                         'twenty pages.')],
        a=[('How many of the four had built a sheet from scratch?', 'one, Priya'),
           ('Why can the measures not see the difference?', 'because confirming a right draft and writing a right sheet look identical afterwards'),
           ('How many unflagged errors, and how many came to Priya?', 'eleven in two years, nine to her'),
           ('Why did they come to her?', 'because the others sensed something odd and she was the one who had seen odd before'),
           ('What does Priya say should be kept?', 'the eleven cases with what was odd and how it was resolved')],
        b=[('I had done two hundred of them before the drafting went ____________.', 'in'),
           ('The measures cannot ____________ the thing you are asking about.', 'see'),
           ('No way of ____________ it.', 'naming'),
           ('It would fit in twenty ____________.', 'pages')]),
d2=dict(title='Twenty pages of odd',
        fig=(['Collect the strange cases.', 'Who decides what is strange?'],
             ['The person who felt it.', 'And if nobody feels it any more?']),
        cap='Victor and Jonas, a week later.',
        lines=[('Jonas', 'Twenty pages of cases is a good idea and I want to ask the awkward question '
                         'about it.'),
               ('Victor', 'Ask it.'),
               ('Jonas', 'Who notices that a case is odd? Priya noticed, because she had built two '
                         'hundred sheets. The next cohort will have built none.'),
               ('Victor', 'They will have read the twenty pages.'),
               ('Jonas', 'Reading twenty cases is not the same as having an instinct that something '
                         'is wrong, and I think you know that, because you wrote the rule last month '
                         'that says a reviewer must flag anything that feels unusual.'),
               ('Victor', 'I did write that, and I was uneasy about the word feels.'),
               ('Jonas', 'The word feels is doing all the work in the rule, and feelings of that kind '
                         'come from having done the task badly a few hundred times.'),
               ('Victor', 'So the twenty pages preserve the answers and not the capacity to ask.'),
               ('Jonas', 'That is what I am saying. And the only remedy I can see is making people do '
                         'the task by hand occasionally for no operational reason, which costs money '
                         'and which no board approves twice.'),
               ('Victor', 'We could build it into training. Ten built from scratch in the first '
                          'month.'),
               ('Jonas', 'Ten against Priya’s two hundred. I do not know whether ten is enough and '
                         'neither do you, and we will find out eleven times in two years, which is '
                         'too slowly to correct.'),
               ('Victor', 'I have no answer to that. I am going to do the ten anyway, and write down '
                          'that we do not know whether it is enough.')],
        unresolved=True,
        a=[('What is Jonas’s awkward question?', 'who will notice that a case is odd when nobody has built sheets by hand'),
           ('What word in Victor’s rule is doing all the work?', 'feels'),
           ('Where does that kind of feeling come from?', 'from having done the task badly a few hundred times'),
           ('What remedy does Jonas see, and what is wrong with it?', 'doing the task by hand for no operational reason, which no board approves twice'),
           ('How does Victor leave it?', 'he will do ten and write down that nobody knows whether ten is enough')],
        b=[('The next cohort will have built ____________.', 'none'),
           ('An instinct that something is ____________.', 'wrong'),
           ('The twenty pages preserve the answers and not the capacity to ____________.', 'ask'),
           ('Which is too ____________ to correct.', 'slowly')]),

speak=[('Say it correctly',
        ['Student A: narrate three work events out of chronological order.',
         'Student B: check the past perfect marks the earlier event each time.',
         'Find the sentence where the past perfect was unnecessary and remove it.']),
       ('Spoken specification: what we know and where it lives',
        ['Name something your team knows that is written nowhere.',
         'Brief aloud who holds it, what work taught it, and what would preserve it.',
         'Your partner asks what happens the week that person leaves.']),
       ('The sequence nobody decided',
        ['In pairs, describe a change at work that had an unintended consequence.',
         'Narrate the sequence using the past perfect to mark what came first.',
         'Find the point at which somebody could have noticed and did not.'])],

ext_title='The apprenticeship was a by-product of the drudgery, and removing the drudgery removed it',
ext_fig=figs.datatable('FOUR PEOPLE, SAME OUTPUT, DIFFERENT KNOWLEDGE',
                       ['', 'Sheets built by hand', 'Drafts confirmed', 'Unflagged cases caught'],
                       [['Priya (joined before)', '206', '340', '9 of 11'],
                        ['second reviewer', '0', '291', '1 of 11'],
                        ['third reviewer', '0', '304', '1 of 11'],
                        ['fourth reviewer', '0', '288', '0 of 11'],
                        ['quality score, all four', '—', 'indistinguishable', '—']]),
ext_fig_cap='The last row is why nobody noticed for two years.',
ext=[
 'When a system takes over the execution of a task, it generally takes over the only '
 'mechanism by which the organisation was teaching that task, and this second effect is '
 'invisible for as long as the first effect is working. The people who learned the work by '
 'doing it remain in post and continue to perform at their previous standard, so no '
 'measurement moves; the people who arrive afterwards perform at the same standard on the '
 'same measurements, because confirming a correct draft and producing a correct draft yield '
 'the same output.',
 'The divergence appears only in the cases the system handles wrongly without signalling it, '
 'which are by construction rare. A firm will therefore discover the loss at a rate of '
 'perhaps five or ten instances a year, which is far too slow to correct a cohort, and will '
 'discover it in the form of individual lapses attributed to individual people rather than '
 'as a pattern. The pattern is only visible to somebody who thinks to ask how many of the '
 'team could do the work unaided.',
 'What is lost is not procedure, which can be written down and in most firms has been. What '
 'is lost is the capacity to notice that something is wrong before being able to say what, '
 'and that capacity is produced by having done the task imperfectly a few hundred times. A '
 'handbook records the answers that past difficulties produced; it does not reproduce the '
 'experience of having been puzzled, which is what generates the instinct.',
 'Two partial remedies exist and both have costs that must be accepted openly. The first is '
 'a case library: not the procedure, but every instance in which the system was wrong in an '
 'unsignalled way, with what seemed odd and how it was resolved, which is cheap to keep and '
 'preserves the answers. The second is deliberate manual practice, performing the task by '
 'hand for no operational reason, which is expensive, feels wasteful, and is the only '
 'mechanism that preserves the instinct rather than the answers.',
 'The honest position for a manager is that neither remedy is known to be sufficient, and '
 'that this should be written down rather than resolved rhetorically. A firm that requires '
 'ten manual exercises where the previous generation performed two hundred has made a '
 'judgement about an unmeasured quantity, and the only defensible thing to do with such a '
 'judgement is to record it as one and revisit it when the rare cases arrive.'],
dp1=('Automation and skill maintenance',
     'Research in aviation, medicine and process industries generally finds that operators '
     'who monitor automated systems lose manual proficiency over time, and that recovery of '
     'that proficiency requires deliberate practice rather than exposure.',
     'Source: general human-factors literature, 2026. Transfer across domains is uncertain.'),
e_a=[('What second thing does a system usually take over?', 'the mechanism by which the organisation taught the task'),
     ('Why is the effect invisible at first?', 'because the people who already learned it stay, and the measures do not move'),
     ('Why is the discovery rate too slow?', 'because unsignalled errors are rare and appear as individual lapses'),
     ('What exactly is lost?', 'the capacity to notice something is wrong before being able to say what'),
     ('What are the two remedies, and their costs?', 'a case library, which is cheap but keeps only answers; and manual practice, which is expensive but keeps the instinct')],
e_b=[('Procedure is the main thing lost.', 'F'),
     ('New staff score worse on the usual measures.', 'F'),
     ('The loss appears as a pattern immediately.', 'F'),
     ('A handbook reproduces the experience of being puzzled.', 'F'),
     ('Deliberate manual practice feels wasteful.', 'T'),
     ('Either remedy is known to be sufficient.', 'F')],

w_model=(
 'Purpose: preserve the firm’s ability to notice an unsignalled error in a format survey, '
 'now that the work that produced that ability no longer happens. Scope: the format survey '
 'and the exception review; the checking process itself is out of scope. Inputs: the 11 '
 'unsignalled cases from the last 24 months, Priya Menon’s working notes, and the 11-page '
 'handbook dated 2 June. Criteria: write up each of the 11 cases on 1 page covering what was '
 'odd, who noticed, what they noticed first and how it was resolved; require each new '
 'reviewer to build 10 mapping sheets by hand from unfamiliar documents in month 1 and 4 a '
 'year thereafter; state in 1 sentence that 10 is a judgement and not a measured sufficient '
 'number. Done: 1 case library of 11 pages, 1 training requirement in the handbook, and 1 '
 'recorded uncertainty. Fallback: where a case cannot be reconstructed because the person '
 'who resolved it has left, record it as unreconstructed and name it rather than writing a '
 'plausible account.'),
w_fig=figs.spec_card('KEEPING WHAT THE WORK USED TO TEACH',
                     [('Purpose', 'preserve the ability to notice an unsignalled error'),
                      ('Scope', 'format survey and exception review only'),
                      ('Inputs', '11 unsignalled cases, Priya’s notes, handbook of 2 June'),
                      ('Criteria', '1 page per case; 10 manual sheets in month 1, 4 a year after'),
                      ('Done', '11-page case library, 1 training rule, 1 recorded uncertainty'),
                      ('Fallback', 'unreconstructable case: name it, do not write a plausible account')]),
w_fig_cap='The fallback row is the one that keeps a case library honest.',
w_task='Write a specification for preserving one thing your organisation knows.',
w_steps=['Name the knowledge and the work that used to produce it.',
         'Say what is collected: cases, not procedure, and what each case must contain.',
         'Set a manual-practice requirement as a number, in month one and thereafter.',
         'Record in one sentence that the number is a judgement, not a measurement.',
         'Say what happens to a case nobody can now reconstruct.'],
w_bank=['Preserve … , now that …',
        'Cover … ; … is out of scope.',
        'Work from the … cases from the last … months, … , and … dated …',
        'Write up each case on 1 page covering … , … , … and … ; require each new … to …',
        'Where a case cannot be reconstructed because … , … rather than …'],
w_check=['Does the brief collect cases rather than procedure?',
         'Is the manual-practice requirement a number?',
         'Is the uncertainty about that number recorded as such?',
         'Is there a rule forbidding a plausible reconstruction?'],

t_title='Keeping what the company knows when a system does the work',
t_fig=figs.split('TWO THINGS A HANDBOOK DOES',
                 'Preserves — the answers',
                 ['the procedure as it now stands',
                  'the resolutions of past problems',
                  'who to escalate to',
                  'the format of the output'],
                 'Does not preserve — the instinct',
                 ['the experience of being puzzled',
                  'noticing before you can say what',
                  'what odd felt like the first time',
                  'two hundred imperfect attempts']),
t_fig_cap='The right-hand column is produced only by doing the work, including badly.',
t_body=[
 'Ask the question early, because the answer takes two years to become visible and one '
 'minute to obtain: how many people in this team could do this task unaided, from first '
 'principles, with nothing in front of them? If the number is falling and your quality '
 'measures are flat, the measures are not wrong, they are simply blind to the thing you are '
 'losing, because confirming correct work and producing correct work look the same '
 'afterwards.',
 'Then collect cases rather than procedure. The procedure is already written down in most '
 'organisations and is not what disappears; what disappears is the record of occasions when '
 'something was wrong in a way nothing flagged, together with what seemed odd and how '
 'somebody got from the oddness to the cause. Eleven such cases fit on eleven pages, cost '
 'almost nothing to keep, and are the only honest statement of what the firm knows.',
 'Finally decide about manual practice, and be honest that you are guessing. Requiring new '
 'people to perform the task by hand a stated number of times, for no operational purpose, is '
 'the only mechanism that produces the instinct rather than the answers, and nobody knows how '
 'many repetitions are enough. Choose a number, write down that it is a judgement about an '
 'unmeasured quantity, and revisit it each time one of the rare cases arrives.'],
t_say=[('Ask the question: ', 'How many of us could do this unaided?'),
       ('Collect the cases: ', 'What was odd, who noticed, and how was it resolved?'),
       ('Own the guess: ', 'Ten is a judgement; we do not know whether it is enough.')],
t_bound=('A case library preserves what was found; it does not preserve the ability to find '
         'it. Manual practice may preserve that ability and the number of repetitions '
         'required is unknown. Neither measure can be validated except by the rare failures '
         'it exists to prevent, which arrive too slowly to guide a decision.'),
t_a=[('How many of us could do this ____________?', 'unaided'),
     ('What was odd, who noticed, and how was it ____________?', 'resolved'),
     ('Ten is a ____________; we do not know whether it is enough.', 'judgement'),
     ('The measures are blind to the thing you are ____________.', 'losing'),
     ('Collect ____________ rather than procedure.', 'cases'),
     ('Produces the instinct rather than the ____________.', 'answers')],
t_b_rubric='Rewrite each reassurance so that it states what is actually known.',
t_b=[('It is all in the handbook.', 'the procedure is in the handbook; the eleven unsignalled cases are not'),
     ('Our quality scores are unchanged.', 'the scores are unchanged and cannot distinguish confirming from producing'),
     ('The team is fully trained.', 'three of the four have never built a sheet from unfamiliar documents'),
     ('We have good documentation.', 'we have documentation of procedure and no record of what has ever seemed odd')],

case=dict(
 title='Decision Clinic · Eighteen months of notice',
 brief=[
  'Priya Menon has told Victor she expects to leave within eighteen months. She holds the '
  'only working memory of the format survey as a manual task, and she caught nine of the '
  'eleven unsignalled errors of the last two years.',
  'Three proposals are on the table. Marta wants Priya’s remaining time partly reserved for '
  'writing the case library. Thomas wants her reserved instead for supervising manual '
  'practice by the other three. Kenji points out that either reservation costs about a fifth '
  'of her productive capacity for a year and a half, at a time when the review queue has no '
  'slack at all.',
  'Priya has said she will do whichever is asked and has an opinion about which is worth more.'],
 exhibit=figs.datatable('WHAT A FIFTH OF PRIYA’S TIME BUYS',
                        ['', 'Case library', 'Supervised practice', 'Neither'],
                        [['cost in her capacity', '~20%', '~20%', '0'],
                         ['preserves the answers', 'yes', 'partly', 'no'],
                         ['preserves the instinct', 'no', 'possibly', 'no'],
                         ['verifiable on completion', 'yes', 'no', '—'],
                         ['review queue effect', '+3 weeks', '+3 weeks', 'none']]),
 exhibit_cap='One option produces something you can inspect; the other may produce something you cannot.',
 exhibit_note='The twenty per cent figure is Kenji’s estimate from one month of her diary and '
              'has not been validated over a longer period.',
 voices=[('Marta Olsen', 'risk and liability',
          'Write the library. It is finite, it can be inspected, and in two years we will '
          'know whether it exists. Supervised practice produces an outcome nobody can '
          'measure, supervised by somebody who will have left.'),
         ('Thomas Reed', 'service delivery',
          'The library preserves nine answers to nine questions nobody will ask again in the '
          'same form. What we are losing is the ability to be puzzled, and the only way to '
          'teach that is to sit beside somebody while they are puzzled.'),
         ('Priya Menon', 'client, consultant',
          'Do the library, because I can finish it and I know what goes in it. But I think '
          'Thomas is right about what matters, and the honest answer is that the thing he '
          'wants cannot be done in eighteen months by one person leaving.')],
 steps=[('Find it', 'What does each option cost and preserve?'),
        ('Compare it', 'Which option can be verified on completion?'),
        ('Infer it', 'Why does Priya agree with Marta and side with Thomas?'),
        ('Weigh it', 'An inspectable artefact against an unmeasurable capability.'),
        ('Decide', 'What is Priya’s remaining time used for?')],
 analysis=[('Find it. What does each option cost?', 'about a fifth of Priya’s capacity for eighteen months'),
           ('Compare it. Which is verifiable?', 'the case library'),
           ('Infer it. Why does Priya split her answer?', 'because the library can be finished and the practice cannot be done properly in the time'),
           ('Weigh it. Why might Marta still be wrong?', 'because an inspectable artefact may preserve the less important thing'),
           ('Decide. What would you do?', 'answers vary; a defensible answer does both partially and records what it does not expect to achieve')],
 decision='Write what Arclight does with Priya’s remaining eighteen months.',
 decision_steps=['Say what proportion of her time is reserved and for what.',
                 'Say what must exist at the end, in a form that can be checked.',
                 'Say what the firm is accepting it will not achieve.',
                 'Say what happens to the review queue in the meantime.'],
 bank=['… per cent of Priya’s time is reserved for …',
       'At the end there must be …',
       'We accept that we will not …',
       'The review queue …',
       'This is reviewed at …'],
 outcome='Arclight reserved a fifth of Priya’s time for the case library and added four '
         'manual sheets a year for every reviewer, supervised by whoever is most senior rather '
         'than by Priya. The library was finished a month early and has been read by all three '
         'reviewers. Nine months after Priya left, an unsignalled error reached a client; the '
         'reviewer concerned had read the library and said afterwards that nothing in it '
         'resembled the case closely enough to help. Thomas regards this as confirmation of '
         'what he argued; Marta notes that one case cannot distinguish between a library that '
         'does not work and a library that would have prevented the other ten.',
 outcome_q=[('What happened nine months after Priya left?', 'an unsignalled error reached a client despite the reviewer having read the library'),
            ('Why is that one case not decisive?', 'because it cannot distinguish a library that fails from one that prevented the others')],
 tags=[]),

lab=dict(
 title='Brief Lab · Write down what we know',
 task=['This is the brief Victor wrote the week after the conversation with Priya, intending '
       'to produce the case library.',
       'It asked for the right thing in words that let the reader produce the wrong thing, '
       'and what came back was a longer handbook.'],
 draft=['Capture what we know about the surveys that is not already written down.',
        'Talk to the people who have been here longest.',
        'Focus on the tricky situations.',
        'Write it up in a usable form.',
        'Skip anything that is already covered.',
        'Aim for something reasonably comprehensive.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief that asked for institutional knowledge and received an expanded procedure.',
 asked=['The 11 unsignalled cases, one page each',
        'What was odd and who noticed it first',
        'A statement of what could not be reconstructed'],
 back=['A 34-page revised handbook',
       'Procedure, with 2 cases as examples',
       'No statement of gaps'],
 gap='"What we know" is undefined against "what is written down", "the people who have been '
     'here longest" is not the same set as the people who caught the cases, "tricky '
     'situations" does not mean unsignalled errors, and "already covered" invited the reader '
     'to omit exactly the overlap that mattered.',
 back_cap='Thirty-four pages of procedure, and the eleven cases still uncollected.',
 back_note='The reader interpreted "usable form" as a handbook because a handbook is what the '
           'firm already had. Nothing in the brief said case library, or one page each.',
 diagnosis=[('[1] "what we know" — as distinct from what is documented how?', 'unstated criterion'),
            ('[2] "the people who have been here longest" — which people, by what test?', 'ambiguous referent'),
            ('[3] "the tricky situations" — tricky meaning unsignalled, or merely hard?', 'ambiguous referent'),
            ('[4] "a usable form" — usable by whom, in what format?', 'unstated criterion'),
            ('[5] "skip anything already covered" — covered where, judged by whom?', 'hidden assumption'),
            ('[6] "reasonably comprehensive" — comprehensive over which set?', 'hidden assumption')],
 rewrite='Rewrite the brief so that it asks for the eleven cases, one page each, with the '
         'gaps named.',
 scaffold=['What ability the library exists to preserve, and why it is at risk',
           'Which process it covers and what is out of scope',
           'The cases, notes and handbook it is built from',
           'What each page must contain, and the manual-practice requirement attached',
           'How many pages come back and what else must exist',
           'What to do with a case nobody can now reconstruct'],
 bank=['Preserve … , now that …',
       'Cover … ; … is out of scope.',
       'Work from the … cases from the last … months, … , and … dated …',
       'Write up each case on 1 page covering … ; require each new reviewer to … in month 1 and … a year thereafter.',
       'Return … pages, … requirement and … uncertainty.',
       'Where a case cannot be reconstructed because … , … rather than …'],
 check=['Does the brief name the eleven cases as the set?',
        'Is one page per case specified?',
        'Must the manual-practice number be recorded as a judgement?',
        'Is a plausible reconstruction explicitly forbidden?'],
 model=['Preserve the firm’s ability to notice an unsignalled error in a format survey, now that the work that produced that ability no longer happens',
        'The format survey and the exception review; the checking process itself is out of scope',
        'The 11 unsignalled cases from the last 24 months, Priya Menon’s working notes, and the 11-page handbook dated 2 June',
        'Write up each of the 11 cases on 1 page covering what was odd, who noticed, what they noticed first and how it was resolved; require each new reviewer to build 10 mapping sheets by hand from unfamiliar documents in month 1 and 4 a year thereafter; state in 1 sentence that 10 is a judgement and not a measured sufficient number',
        '1 case library of 11 pages, 1 training requirement added to the handbook, and 1 recorded uncertainty, by 31 July',
        'Where a case cannot be reconstructed because the person who resolved it has left, record it as unreconstructed and name it rather than writing a plausible account'],
 cost='34 pages of procedure nobody needed, 3 weeks of a senior person’s time, and 5 months '
      'of Priya’s remaining 18 spent before the right artefact was commissioned.'),

rev_fig=figs.split('PAST PERFECT IN SEQUENCE',
                   'Wrong',
                   ['By the time he asked, it already happened.',
                    'Priya joined before the system had gone in.',
                    'Nobody noticed, because nobody wrote it down.',
                    'After it had changed, it had been rewritten.'],
                   'Right',
                   ['By the time he asked, it had already happened.',
                    'Priya had joined before the system went in.',
                    'Nobody had noticed, because nobody had written it down.',
                    'After it changed, it was rewritten.']),
rev_fig_cap='Two errors of omission and two of overuse, which is the usual proportion.',
rev=dict(
 read=[('What does a system usually take over besides the task?', ['the budget', 'the mechanism that taught it', 'the measurement', 'the staffing'], 1),
       ('What is actually lost?', ['the procedure', 'the capacity to notice', 'the output quality', 'the audit trail'], 1),
       ('A case library preserves', ['the instinct', 'the answers', 'the procedure', 'nothing'], 1),
       ('In the Clinic, what did Priya recommend?', ['supervised practice', 'the case library', 'neither', 'both equally'], 1)],
 listen_text='Ask the question early, because the answer takes two years to become visible '
             'and one minute to obtain: how many people here could do this unaided? Then '
             'collect cases rather than procedure, because the procedure is already written '
             'down and is not what disappears. And decide about manual practice while being '
             'honest that you are guessing at the number.',
 listen=[('How many people here could do this ____________?', 'unaided'),
         ('Collect ____________ rather than procedure.', 'cases'),
         ('The procedure is not what ____________.', 'disappears'),
         ('Honest that you are ____________ at the number.', 'guessing')],
 speak=['Name one thing your team knows that is written nowhere, and who holds it.',
        'Say what work taught it and what would happen if that work stopped.'],
 write='Write one past-perfect sentence placing an event before another at your work.',
 vocab=[('Knowledge somebody could not fully write down is ____________.', 'tacit knowledge'),
        ('The loss of a capability because the work no longer needs it is ____________.', 'deskilling'),
        ('A record sufficient to reconstruct what was done is an ____________.', 'audit trail'),
        ('To turn something known into a stated rule is to ____________ it.', 'codify'),
        ('The recorded history of where something came from is its ____________.', 'chain of origin')],
 gram=[('By the time he asked, it ____________ (already/happen).', 'had already happened'),
       ('Priya ____________ (join) before the system went in.', 'had joined'),
       ('Nobody had noticed, because nobody ____________ (write) it down.', 'had written'),
       ('The three ____________ (never/build) a sheet from first principles.', 'had never built'),
       ('When the eleventh case arose, nine ____________ (already/reach) Priya.', 'had already reached')]),

found=['Ask how many people in your team could do its core task unaided.',
       'Collect the cases where something was wrong and nothing flagged it.',
       'Write down who holds the knowledge that no document contains.',
       'Decide a number of manual repetitions, and record that it is a guess.'],
end_line='A record of what the firm does rather than of what it knows.',
end_next='Next: Turning Processes Into Nouns',
)
