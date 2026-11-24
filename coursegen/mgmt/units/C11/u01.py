# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='If We Had Done It Then',
gram='the third conditional',
ai='where the leverage is: the task you do four hundred times',
strap='CEFR C1 · Grammar: the third conditional · AI: where the leverage is',
cando=['form the third conditional accurately and use it for real analysis',
       'set out a counterfactual without turning it into an accusation',
       'identify which task in a process carries the leverage',
       'distinguish a visible improvement from a high-volume one',
       'justify a choice of target by frequency rather than by prominence'],
hero=('THE TASK NOBODY WANTED TO TALK ABOUT',
      ['Thirty-eight minutes, four hundred and twelve times a year.',
       'Three years of it, and nobody had ever put the two numbers together.'],
      [(800, 'teal', 'long'), (1520, 'purple', 'short'),
       (2200, 'orange', 'long'), (2820, 'grey', 'short')]),
hero_cap='Leverage is almost never where the attention is.',

warm=['Which task does your organisation perform most often in a year?',
      'How long does it take, and has anybody multiplied the two numbers?',
      'What was the last improvement your organisation made because it was visible?'],
read=[
 'Arclight now employs sixty-one people and works for two hundred and thirty clients, '
 'having been a firm of nine when Ines Carvalho and Dalia Rahman started it, and the change '
 'that has caused the most trouble is not the headcount but the onboarding volume: four '
 'hundred and twelve new client files were opened last year, against thirty-one in the '
 'firm’s fourth year of trading.',
 'Every one of those files passes through a step called the format survey, in which somebody '
 'opens a sample of the client’s documents, records how each field is laid out, and writes '
 'the result into a mapping sheet that the checking work then depends on. It takes a little '
 'under thirty-eight minutes when nothing is unusual, and it has been done by hand, by a '
 'person, every single time.',
 'Three years ago Dalia proposed standardising the format survey and building something that '
 'would read the sample and draft the mapping sheet, leaving a person to confirm it. The '
 'proposal was declined, not for any bad reason, but because the same quarter offered a '
 'competing project: rebuilding the client-facing portal, which clients could see, complained '
 'about, and mentioned in renewal conversations.',
 'In April, preparing a board paper on capacity, Kenji Watanabe multiplied thirty-eight '
 'minutes by the number of surveys performed since that decision and arrived at a figure of '
 'just over seven hundred and sixty hours, which is roughly five months of one person’s '
 'working year. If the firm had built the thing when Dalia proposed it, it would have '
 'recovered that time, and it would also have had three years of mapping data that nobody '
 'now has.',
 'What makes the episode instructive rather than merely regrettable is that the portal was a '
 'good project and was correctly delivered. Nobody made a mistake of execution. The mistake, '
 'insofar as there was one, lay in choosing between two projects on the basis of which one '
 'the clients would notice, when one of them was performed four hundred times a year and the '
 'other once.'],
c_a=[('How many people does Arclight employ now, and how many did it start with?', 'sixty-one now, nine at the start'),
     ('What does the format survey produce?', 'a mapping sheet recording how each of the client’s fields is laid out'),
     ('Why was Dalia’s proposal declined?', 'because a competing project, the client portal, was visible to clients'),
     ('What figure did Kenji arrive at?', 'just over seven hundred and sixty hours, about five months of one person’s year'),
     ('What, according to the last paragraph, was the real mistake?', 'choosing between projects by what clients would notice rather than by frequency')],
c_b=[('Arclight has always had sixty staff.', 'F'),
     ('The format survey takes about thirty-eight minutes.', 'T'),
     ('The portal project was badly delivered.', 'F'),
     ('Dalia proposed removing the person from the step entirely.', 'F'),
     ('Arclight now holds three years of mapping data.', 'F'),
     ('Four hundred and twelve new client files were opened last year.', 'T')],
c_c=[('Four hundred and twelve new client ____________ were opened last year.', 'files'),
     ('Somebody records how each ____________ is laid out.', 'field'),
     ('It has been done by ____________, every single time.', 'hand'),
     ('Roughly five ____________ of one person’s working year.', 'months'),
     ('Nobody made a mistake of ____________.', 'execution'),
     ('One of them was performed four hundred times a ____________.', 'year')],
c_d=[('The leverage lay in the task performed most ( often / visibly ).', ['often', 'visibly'], 1),
     ('The portal was chosen because', ['it was cheaper', 'clients could see it', 'it was quicker', 'Dalia preferred it'], 1),
     ('Seven hundred and sixty hours is approximately', ['one week', 'five months of a working year', 'two years', 'one day'], 1),
     ('Besides the time, what else was lost?', ['clients', 'three years of mapping data', 'staff', 'revenue'], 1),
     ('The passage treats the episode as', ['a failure of execution', 'a failure of target selection', 'bad luck', 'a success'], 1)],
c_e=('Third conditional or not? Put each sentence in the right column.',
     [('If we had built it, we would have saved the time.', 'third conditional'),
      ('If we build it, we will save the time.', 'first conditional'),
      ('Had we built it, we would have had the data.', 'third conditional'),
      ('If we built it, we would save the time.', 'second conditional'),
      ('If we had built it, we would have the data now.', 'mixed'),
      ('If we had not declined it, Dalia would not have left it there.', 'third conditional')],
     ['third conditional', 'first conditional', 'second conditional', 'mixed']),

v_fig_title='WHERE THE LEVERAGE IS',
v_fig=[('chart', 'frequency'), ('coin', 'the grand total'), ('scale', 'marginal'),
       ('doc', 'an enumeration'), ('bulb', 'leverage'), ('bank', 'payback')],
v_fig_cap='Six words for the arithmetic that decides which task to attack first.',
vocab=[
 ('leverage', 'the point at which a small input produces a disproportionate result'),
 ('frequency', 'how often something occurs within a stated period'),
 ('periodicity', 'the fact of something happening again, and then again'),
 ('grand total', 'the sum formed when separate amounts are added together'),
 ('additive', 'increasing by successive steps rather than all at once'),
 ('marginal', 'relating to the next single unit rather than to the whole'),
 ('incremental', 'proceeding by small additions rather than in one movement'),
 ('non-recurring', 'happening only once, with nothing following to repeat it'),
 ('tailor-made', 'made for one case and reusable in no other'),
 ('enumeration', 'a running count kept as the occurrences happen'),
 ('single pass', 'a single occurrence of something that happens many times'),
 ('amortise', 'to spread a one-time cost across the many uses that follow'),
 ('payback', 'the point at which an investment has repaid what it cost'),
 ('opportunity cost', 'the value of the thing you did not do instead'),
 ('retrospect', 'understanding of an event that only its aftermath supplies'),
 ('counterfactual', 'an account of what would have happened otherwise'),
 ('drudgery', 'work that is dull, necessary and endlessly repeated'),
 ('legwork', 'the unglamorous preparatory effort a piece of work requires'),
 ('high-volume', 'occurring in large numbers rather than occasionally'),
 ('the long run', 'the period over which repeated effects come to dominate')],
v_a=[('The point at which a small input produces a disproportionate result is ____________.', 'leverage'),
     ('A running count kept as occurrences happen is a ____________.', 'enumeration'),
     ('To spread a one-time cost across the uses that follow is to ____________ it.', 'amortise'),
     ('The value of the thing you did not do instead is the ____________.', 'opportunity cost'),
     ('An account of what would have happened otherwise is a ____________.', 'counterfactual'),
     ('Something made for one case and reusable in no other is ____________.', 'tailor-made'),
     ('The point at which an investment has repaid its cost is ____________.', 'payback'),
     ('Dull, necessary, endlessly repeated work is ____________.', 'drudgery')],
v_b=[('Frequency is how often something occurs', 'within a stated period.'),
     ('Additive means increasing by successive steps', 'rather than all at once.'),
     ('Marginal relates to the next single unit', 'rather than to the whole.'),
     ('Retrospect is understanding of an event', 'that only its aftermath supplies.'),
     ('The long run is the period over which', 'repeated effects come to dominate.')],

g_title='Grammar: the third conditional',
g_rule=['If + past perfect, then would have + past participle: a completed, unreal past.',
        'Use it to state a counterfactual, not to apportion blame; the grammar is neutral.',
        'Inversion replaces if in formal use: had we built it, we would have recovered the time.',
        'Could have and might have soften the consequence where the outcome was not certain.'],
g_fig=('LOOSE',
       ['If we would have built it, we saved the time.',
        'If we built it then, we would have saved the time.',
        'If we had built it, we will have saved the time.',
        'Had we have built it, the data would exist.'],
       'PRECISE',
       ['If we had built it, we would have saved the time.',
        'If we had built it then, we would have saved the time.',
        'If we had built it, we would have saved the time.',
        'Had we built it, the data would exist.'],
       'four errors, all of them common at C1',
       'four accurate forms, including one inverted'),
g_fig_cap='The third conditional is where confident speakers of English are most often caught out.',
g_a=[('If we ____________ (build) it then, we would have saved the time.', 'had built'),
     ('If we had built it, we ____________ (recover) seven hundred hours.', 'would have recovered'),
     ('____________ (have) we known the figure, the decision would have gone differently.', 'Had'),
     ('If Kenji ____________ (not multiply) the two numbers, nobody would have noticed.', 'had not multiplied'),
     ('We ____________ (might/hold) three years of data if we had started then.', 'might have held'),
     ('If the portal ____________ (not compete) for the quarter, both would have been built.', 'had not competed'),
     ('She ____________ (could/raise) it again, had anybody asked her to.', 'could have raised'),
     ('If nobody ____________ (write) the proposal down, there would be no record.', 'had written'),
     ('____________ (be) it a one-off task, the decision would have been correct.', 'Had')],
g_b=[('If we ( had built / would have built ) it, we would have saved the time.', ['had built', 'would have built'], 0),
     ('Had we known the figure, the decision ____ differently.', ['went', 'would have gone', 'had gone', 'would go'], 1),
     ('If Kenji had not multiplied the numbers, nobody ____.', ['would notice', 'would have noticed', 'had noticed', 'will notice'], 1),
     ('We might ____ three years of data if we had started then.', ['have held', 'held', 'hold', 'to hold'], 0),
     ('____ it a one-off task, the decision would have been correct.', ['Have', 'Had', 'Were', 'If'], 1),
     ('If nobody had written the proposal down, there ____ no record.', ['would have been', 'would be', 'had been', 'will be'], 1)],

d1=dict(title='Seven hundred and sixty hours',
        fig=(['Thirty-eight minutes.', 'Times how many?'],
             ['Four hundred and twelve, last year alone.', 'Say the number out loud.']),
        cap='Kenji and Ines, over the capacity paper.',
        lines=[('Kenji', 'Thirty-eight minutes, and we have done it one thousand two hundred and six '
                         'times since the decision. That is seven hundred and sixty hours.'),
               ('Ines', 'Say it in a unit I can feel.'),
               ('Kenji', 'Five months of one person’s working year, and that is only the time. '
                         'Had we built it then, we would also have three years of mapping data.'),
               ('Ines', 'Which we would be using for what, exactly?'),
               ('Kenji', 'To know which document formats actually turn up, instead of asking each '
                         'new client to tell us and discovering in week three that they were wrong.'),
               ('Ines', 'So the data is worth more than the hours.'),
               ('Kenji', 'In the long run it is worth considerably more, and I cannot put a figure on '
                         'it, which is precisely why it lost to the portal.'),
               ('Ines', 'That is the uncomfortable part. If the portal had been a worse project, I '
                        'would feel better about this conversation.'),
               ('Kenji', 'The portal was a good project. It was simply the lower-frequency one, and '
                         'nobody in the room said the word frequency.'),
               ('Ines', 'Had anybody said it, would it have changed the decision?'),
               ('Kenji', 'I think it would, because the arithmetic is not subtle. Thirty-eight '
                         'minutes times four hundred is not a close call.'),
               ('Ines', 'Then what I want from you is not this paper. It is a list of every task we '
                        'perform more than a hundred times a year, with its minutes attached.')],
        a=[('How many surveys have been done since the decision?', 'one thousand two hundred and six'),
           ('What two things were lost?', 'about seven hundred and sixty hours and three years of mapping data'),
           ('What would the mapping data have told them?', 'which document formats actually turn up'),
           ('Why does Kenji say the data lost to the portal?', 'because he cannot put a figure on it'),
           ('What does Ines ask for instead of the paper?', 'a list of every task done more than a hundred times a year, with its minutes')],
        b=[('Five months of one person’s working ____________.', 'year'),
           ('Nobody in the room said the word ____________.', 'frequency'),
           ('The arithmetic is not ____________.', 'subtle'),
           ('With its ____________ attached.', 'minutes')]),
d2=dict(title='The list Ines asked for',
        fig=(['Forty-one tasks over a hundred times a year.', 'And the biggest is not on your list.'],
             ['Which is?', 'My own review time.']),
        cap='Kenji and Ines, two weeks later.',
        lines=[('Kenji', 'Forty-one tasks performed more than a hundred times a year. The top six '
                         'account for about eleven thousand hours.'),
               ('Ines', 'Out of what total?'),
               ('Kenji', 'About ninety-six thousand paid hours, so twelve per cent of the firm in six '
                         'activities, none of which any client has ever mentioned.'),
               ('Ines', 'And the format survey?'),
               ('Kenji', 'Third. Above it are file assembly and the weekly reconciliation.'),
               ('Ines', 'Then we start at the top and work down, which I should have asked for three '
                        'years ago.'),
               ('Kenji', 'There is something not on the list, and I left it off because I did not '
                         'know how to count it.'),
               ('Ines', 'Go on.'),
               ('Kenji', 'Your own review time. Everything in the top six ends on your desk or '
                         'Victor’s, and if we make all six faster, the queue in front of the two of '
                         'you gets longer rather than shorter.'),
               ('Ines', 'So the leverage is in the review, not in the tasks.'),
               ('Kenji', 'I think the leverage is in the review and I cannot prove it, because I have '
                         'no measurement of your time at all. Nobody has ever asked you to keep one.'),
               ('Ines', 'And if I keep one for a month, the month I measure will be the month I behave '
                        'differently, which is the oldest problem in the book and I have no answer to '
                        'it either.')],
        unresolved=True,
        a=[('How many tasks exceed a hundred performances a year?', 'forty-one'),
           ('What share of paid hours do the top six account for?', 'about twelve per cent'),
           ('Where does the format survey rank?', 'third, behind file assembly and the weekly reconciliation'),
           ('What did Kenji leave off the list, and why?', 'Ines’s own review time, because he did not know how to count it'),
           ('What objection does Ines raise at the end?', 'that measuring her own time would change how she spends it')],
        b=[('About ninety-six thousand paid ____________.', 'hours'),
           ('None of which any client has ever ____________.', 'mentioned'),
           ('The queue in front of the two of you gets ____________.', 'longer'),
           ('Nobody has ever asked you to keep ____________.', 'one')]),

speak=[('Say it correctly',
        ['Student A: make six third-conditional statements about decisions at your work.',
         'Student B: correct the form, then convert one of them into a mixed conditional.',
         'Find the one where the counterfactual sounded like an accusation, and soften it.']),
       ('Spoken specification: the frequency list',
        ['Name the three tasks your team performs most often in a year.',
         'Brief aloud the minutes, the annual aggregate, and which one you would attack.',
         'Your partner challenges your choice on grounds other than frequency.']),
       ('The counterfactual, stated fairly',
        ['Choose a decision your organisation took that it would now take differently.',
         'State the counterfactual without naming who decided.',
         'Find the point at which the hindsight becomes unfair.'])],

ext_title='Leverage lives in frequency, and frequency is almost never the thing being discussed',
ext_fig=figs.datatable('FORTY-ONE TASKS: THE TOP SIX',
                       ['Task', 'Times a year', 'Minutes each', 'Hours a year'],
                       [['file assembly', '2,980', '31', '1,540'],
                        ['weekly reconciliation', '2,392', '34', '1,355'],
                        ['format survey', '412', '38', '261'],
                        ['fee note assembly', '2,760', '9', '414'],
                        ['renewal pack', '230', '95', '364'],
                        ['exception log review', '1,196', '21', '419']]),
ext_fig_cap='No client has ever mentioned any of these six, and together they are twelve per cent of the firm.',
ext=[
 'The question of where to apply a new capability first is usually answered badly, and it is '
 'answered badly for a reason that has nothing to do with technology. Organisations select '
 'targets by salience: the thing a customer complains about, the thing a board member has '
 'read about, the thing that went wrong most recently and most publicly. Salience and '
 'frequency are only weakly correlated, and leverage follows frequency.',
 'The arithmetic is trivial and that is what makes its neglect remarkable. A task that takes '
 'forty minutes and is performed four hundred times a year consumes two hundred and sixty '
 'hours; a task that takes two days and is performed twice consumes thirty-two. Removing '
 'half of the first is worth eight times removing all of the second, and the second is '
 'almost always the one that gets discussed, because it is large enough to be visible as an '
 'event.',
 'Building the frequency list is therefore the first analytical act, and it is harder than it '
 'sounds, because high-volume work tends to be invisible in exactly the way that matters: it '
 'is distributed across many people in small pieces, it rarely appears as a line in any '
 'system, and nobody owns it in a way that would cause them to raise it. The work is '
 'drudgery, drudgery is unmentioned, and what is unmentioned does not get counted.',
 'There is a second-order effect that the list alone will not show, and it is the one that '
 'defeats most firms at this point. Accelerating the tasks that feed a review step does not '
 'increase the output of the process; it lengthens the queue in front of whoever reviews. '
 'Leverage in a production step is only real leverage if the step immediately downstream has '
 'the capacity to absorb it, and in professional firms that step is almost always a senior '
 'person reading things.',
 'The practical sequence that follows is unglamorous. Count the tasks, multiply by their '
 'minutes, rank by the aggregate, and then ask of the top six which of them end on the same '
 'desk. Attack the highest-frequency task whose output does not land in a queue, and deal '
 'with the queue itself as a separate and more difficult problem, which the eighth unit of '
 'this book is about.'],
dp1=('Where process improvement is applied',
     'Operations research on process improvement programmes generally finds that selected '
     'targets correlate more strongly with visibility to customers or management than with '
     'total time consumed, and that gains are frequently absorbed by an unchanged downstream '
     'review step.',
     'Source: general operations-management literature, 2026. Figures vary by sector.'),
e_a=[('How do organisations usually select targets?', 'by salience rather than by frequency'),
     ('Why is a forty-minute task done four hundred times worth more than a two-day task done twice?', 'because it consumes two hundred and sixty hours against thirty-two'),
     ('Why is high-volume work hard to see?', 'it is distributed in small pieces, appears in no system, and nobody owns it'),
     ('What happens if you accelerate work that feeds a review step?', 'the queue in front of the reviewer lengthens instead'),
     ('What is the practical sequence?', 'count, multiply, rank by aggregate, then ask which of the top six share a desk')],
e_b=[('Salience and frequency are closely correlated.', 'F'),
     ('The frequency arithmetic is complicated.', 'F'),
     ('High-volume work is usually invisible in organisational systems.', 'T'),
     ('Accelerating a production step always increases process output.', 'F'),
     ('Drudgery tends to go unmentioned and therefore uncounted.', 'T'),
     ('The passage recommends attacking the most visible task first.', 'F')],

w_model=(
 'Purpose: rank every repeated task in the firm by the hours it consumes in a year, so that '
 'the next 3 capability projects are chosen by aggregate rather than by visibility. Scope: '
 'all tasks performed 100 times a year or more; one-off project work is out of scope. '
 'Inputs: the time-recording extract for the last 12 months, the 41 task names already '
 'identified, and the 6 process maps dated 3 March. Criteria: for each task give the count, '
 'the mean minutes from at least 20 observations, the annual aggregate, and the name of the '
 'person whose desk its output reaches; flag any task whose output reaches the same desk as '
 'another in the top 10. Done: 1 ranked table of 41 rows and a 1-page note naming the 3 '
 'tasks to attack and why. Fallback: where fewer than 20 observations exist for a task, mark '
 'the minutes as unmeasured and exclude it from the ranking rather than estimating it.'),
w_fig=figs.spec_card('THE FREQUENCY BRIEF, IN SIX LINES',
                     [('Purpose', 'rank repeated tasks by annual hours, not by visibility'),
                      ('Scope', 'tasks done 100+ times a year; one-off work excluded'),
                      ('Inputs', '12-month time extract, 41 task names, 6 process maps'),
                      ('Criteria', 'count, mean minutes from 20+ observations, aggregate, receiving desk'),
                      ('Done', '41-row ranked table and a 1-page note naming 3 targets'),
                      ('Fallback', 'under 20 observations: mark unmeasured, exclude, do not estimate')]),
w_fig_cap='The same six headings as Book 1, now carrying a question about the whole firm.',
w_task='Write a specification for a frequency ranking of your own organisation.',
w_steps=['Define the threshold for inclusion as a number of performances a year.',
         'Say where the counts and the minutes come from, and how many observations each needs.',
         'Require the receiving desk to be named for every task.',
         'Say what the output is: how many rows, and what the accompanying note must contain.',
         'Say what happens to a task whose minutes cannot be measured.'],
w_bank=['Rank every task performed … times a year or more, so that …',
        'Cover … ; … is out of scope.',
        'Work from … , … and … dated …',
        'For each task give … , … from at least … observations, … , and …',
        'Where fewer than … observations exist, … rather than …'],
w_check=['Is the inclusion threshold a number?',
         'Is the minimum number of observations stated?',
         'Must the receiving desk be named?',
         'Is there a rule for unmeasurable tasks that forbids estimating?'],

t_title='Where the leverage is: the task you do four hundred times',
t_fig=figs.split('TWO TASKS, AND THE ONE THAT GETS DISCUSSED',
                 'Discussed — the visible one',
                 ['the annual report pack',
                  '2 days of work, twice a year',
                  '32 hours a year in total',
                  'mentioned by clients and the board'],
                 'Not discussed — the high-volume one',
                 ['the format survey',
                  '38 minutes, 412 times a year',
                  '261 hours a year in total',
                  'mentioned by nobody, ever']),
t_fig_cap='Eight times the leverage in the right-hand column, and none of the attention.',
t_body=[
 'Before you choose anything to build, buy or delegate to a system, count. Write down every '
 'task the organisation performs more than a hundred times a year, attach the minutes it '
 'takes from real observation rather than from recollection, and rank by the product of the '
 'two. The exercise takes a fortnight and it is the single highest-value fortnight available '
 'to a manager in this position, because it routinely reorders the list of candidate '
 'projects from top to bottom.',
 'Expect the ranking to be unflattering to your instincts. The tasks at the top will be ones '
 'nobody has complained about, nobody owns, and nobody has mentioned in a meeting, precisely '
 'because they are small enough individually to pass unnoticed and are spread across too '
 'many people to appear as anybody’s problem. The task you do four hundred times is '
 'invisible for structural reasons, not because the organisation is inattentive.',
 'Then apply the one test that keeps the exercise honest, which is to ask where each task’s '
 'output lands. A task whose output arrives in a queue in front of a single reviewer offers '
 'no leverage at all until that queue is dealt with, however high it ranks on hours, and '
 'accelerating it will produce a visible improvement in one department and no improvement '
 'whatever in the firm. Rank by aggregate; choose by aggregate and destination together.'],
t_say=[('Ask for the count: ', 'How many times a year do we do this, exactly?'),
       ('Ask for the minutes: ', 'From how many observations is that figure drawn?'),
       ('Ask for the destination: ', 'Whose desk does the output of this task reach?')],
t_bound=('A frequency ranking tells you where the hours are. It does not tell you which '
         'tasks can be done differently, which carry judgement that nothing should be asked '
         'to exercise, or which are high-volume only because the process around them is '
         'wrong. A task that should not exist does not belong at the top of a list of things '
         'to automate.'),
t_a=[('How many times a year do we do this, ____________?', 'exactly'),
     ('From how many ____________ is that figure drawn?', 'observations'),
     ('Whose ____________ does the output of this task reach?', 'desk'),
     ('Rank by aggregate; choose by aggregate and ____________ together.', 'destination'),
     ('The task you do four hundred times is invisible for ____________ reasons.', 'structural'),
     ('A task that should not exist does not belong at the top of a ____________.', 'list')],
t_b_rubric='Rewrite each project justification so that it rests on frequency.',
t_b=[('Clients keep complaining about the portal.', 'the portal is used 230 times a year and the format survey 412 times'),
     ('The board read an article about it.', 'this task consumes 261 hours a year, measured over twenty observations'),
     ('It went wrong last month and was embarrassing.', 'it went wrong once; the task above it on the list runs weekly'),
     ('It is the most modern-looking part of our process.', 'it is the eleventh task by annual hours, and here are the ten above it')],

case=dict(
 title='Decision Clinic · The project that was chosen instead',
 brief=[
  'Three years ago Arclight chose between two projects in the same quarter: rebuilding the '
  'client-facing portal, and standardising the format survey so that a system could draft '
  'the mapping sheet for a person to confirm.',
  'The portal was built. Renewal rates in the following two years were 94 and 95 per cent, '
  'against 88 the year before, and three of the firm’s six largest clients cited the portal '
  'in renewal conversations.',
  'The format survey was not built. Over the same period it consumed about seven hundred and '
  'sixty hours and generated no data. Ines now describes the decision as the clearest '
  'mistake of her tenure, and Dalia Rahman does not agree.'],
 exhibit=figs.datatable('THE TWO PROJECTS, THREE YEARS ON',
                        ['', 'Portal (built)', 'Format survey (not built)'],
                        [['direct hours saved', '0', '760 lost'],
                         ['data accumulated', 'usage logs only', 'none'],
                         ['renewal rate change', '+6 to +7 points', '—'],
                         ['clients citing it', '3 of the 6 largest', '0'],
                         ['build cost', '11 staff-months', 'estimated 4 staff-months']]),
 exhibit_cap='One project produced a measurable commercial result; the other would have produced hours.',
 exhibit_note='Renewal rates moved for several reasons in those two years and the portal is '
              'one of them; no attempt has been made to isolate its contribution.',
 voices=[('Ines Carvalho', 'managing director',
          'Four staff-months against seven hundred and sixty hours is a payback inside the '
          'first year, and we would have had three years of mapping data. If we had built it '
          'then, every conversation we are now having about capacity would be easier.'),
         ('Dalia Rahman', 'co-founder',
          'We had eleven staff-months of capacity and two candidates. The portal moved '
          'renewals by six points on a base of two hundred clients. I would take that over '
          'seven hundred and sixty hours again, and I think the hindsight here is doing a '
          'great deal of work.'),
         ('Kenji Watanabe', 'finance',
          'Both of you are arguing about the wrong thing. The error was not choosing the '
          'portal. The error was that nobody in the room knew the format survey ran four '
          'hundred times a year, so the comparison was never actually made.')],
 steps=[('Find it', 'What did each project cost and produce?'),
        ('Compare it', 'Which result can be measured in money?'),
        ('Infer it', 'What is Kenji saying that neither of the others is?'),
        ('Weigh it', 'A commercial result against an internal aggregate, with hindsight discounted.'),
        ('Decide', 'Was the decision wrong, and what exactly was wrong about it?')],
 analysis=[('Find it. What did the portal cost?', 'eleven staff-months'),
           ('Compare it. Which outcome is measurable in money?', 'the renewal rate movement, though not isolated to the portal'),
           ('Infer it. What is Kenji’s point?', 'that the comparison was never made because nobody knew the frequency'),
           ('Weigh it. Why is Dalia’s objection strong?', 'because six renewal points on two hundred clients may exceed seven hundred and sixty hours in value'),
           ('Decide. What was wrong?', 'not the choice but the absence of the frequency figure that would have made it a choice')],
 decision='Write what Arclight requires before any future project comparison.',
 decision_steps=['Say what figure must accompany every candidate project.',
                 'Say who produces it and from what source.',
                 'Say what happens if the figure cannot be produced in time.',
                 'Say how hindsight is to be treated in reviewing past decisions.'],
 bank=['Every candidate project must carry …',
       '… produces it from …',
       'Where the figure cannot be produced by … , …',
       'In reviewing past decisions we …',
       'This applies from …'],
 outcome='Arclight now requires every candidate project to carry an annual-hours figure and '
         'the name of the desk its output reaches, produced by finance from the time-recording '
         'extract. In the first quarter under the rule, two of the five candidates could not be '
         'given a figure at all and were deferred, which Dalia regards as the rule working and '
         'Ines regards as a cost nobody counted: one of the two deferred projects was the '
         'reconciliation work that now sits second on the frequency list. Neither of them '
         'thinks the other is being unreasonable, and the rule stands unamended.',
 outcome_q=[('Why were two candidates deferred?', 'because no annual-hours figure could be produced for them'),
            ('Why does Ines regard that as a cost?', 'because one of them was the second-highest task on the frequency list')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Find where the leverage is',
 task=['This is the brief Ines wrote the afternoon after Kenji’s capacity paper, intending to '
       'produce the frequency list she had asked for in conversation.',
       'What she had said aloud was precise. What she wrote down was not, and the list that '
       'came back could not be ranked.'],
 draft=['Go through the firm and work out which tasks are eating the hours.',
        'Include anything that comes up regularly.',
        'Get the timings from the people who do the work.',
        'Leave out the obvious exceptions.',
        'Put it in order so we can see the big ones.',
        'I need it for the board, so do not let it drag on.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions that a reader could satisfy in a dozen incompatible ways.',
 asked=['A ranked table of tasks by annual hours',
        'Minutes drawn from observation, not memory',
        'The receiving desk named for each task'],
 back=['A list of 63 tasks, unranked',
       'Timings by recollection, 1 source each',
       'No desks, 9 tasks excluded silently'],
 gap='"Regularly" sets no threshold, "from the people who do the work" permits a single '
     'remembered figure, "the obvious exceptions" licenses silent exclusion, and "in order" '
     'does not say in order of what.',
 back_cap='Sixty-three tasks in no order, timed from memory, with nine quietly missing.',
 back_note='Ines had said "more than a hundred times a year" out loud and did not write it '
           'down. The reader had no way of knowing that the threshold existed.',
 diagnosis=[('[1] "eating the hours" — measured over what period?', 'unbounded quantity'),
            ('[2] "comes up regularly" — how often is regularly?', 'unbounded quantity'),
            ('[3] "from the people who do the work" — how many observations each?', 'hidden assumption'),
            ('[4] "the obvious exceptions" — obvious to whom, and recorded where?', 'unstated exception'),
            ('[5] "put it in order" — in order of what?', 'hidden assumption'),
            ('[6] "do not let it drag on" — and if a task cannot be timed by then?', 'unstated exception')],
 rewrite='Rewrite the brief so that the threshold, the observation count, the ranking basis '
         'and the treatment of unmeasurable tasks are all stated.',
 scaffold=['Why the ranking exists and what it will be used to decide',
           'The inclusion threshold, and what is out of scope',
           'The sources the counts and the minutes come from',
           'What each row must contain, including the receiving desk',
           'How many rows come back, with what accompanying note, and by when',
           'What to do with a task that cannot be timed to the standard'],
 bank=['Rank … so that the next … projects are chosen by … rather than by …',
       'Cover all tasks performed … or more; … is out of scope.',
       'Work from … , … and … dated …',
       'For each task give … , … from at least … observations, … , and the name of …',
       'Return … rows and a … note naming … , by …',
       'Where fewer than … observations exist, … rather than …'],
 check=['Is the inclusion threshold a number of performances a year?',
        'Is a minimum observation count stated?',
        'Is the ranking basis named explicitly?',
        'Is there a written rule for a task that cannot be timed?'],
 model=['Rank every repeated task by the hours it consumes in a year, so that the next 3 capability projects are chosen by aggregate rather than by visibility',
        'All tasks performed 100 times a year or more; one-off project work is out of scope',
        'The time-recording extract for the last 12 months, the 41 task names already identified, and the 6 process maps dated 3 March',
        'For each task: the count, the mean minutes from at least 20 observations, the annual aggregate, and the name of the person whose desk its output reaches',
        '1 ranked table of 41 rows and a 1-page note naming the 3 tasks to attack and why, by 14 May',
        'Where fewer than 20 observations exist, mark the minutes as unmeasured and exclude the task from the ranking rather than estimating it'],
 cost='63 unranked rows, 9 tasks silently excluded, 4 days of somebody’s time, and a board '
      'paper that had to be withdrawn and rewritten from the second list.'),

rev_fig=figs.split('THE THIRD CONDITIONAL',
                   'Wrong',
                   ['If we would have built it, we saved it.',
                    'If we built it then, we would have saved it.',
                    'If we had built it, we will have saved it.',
                    'Had we have built it, the data would exist.'],
                   'Right',
                   ['If we had built it, we would have saved it.',
                    'If we had built it then, we would have saved it.',
                    'If we had built it, we would have saved it.',
                    'Had we built it, the data would exist.']),
rev_fig_cap='Four forms to hold firmly, because a slip here is audible to every listener.',
rev=dict(
 read=[('Organisations usually select improvement targets by', ['frequency', 'salience', 'cost', 'duration'], 1),
       ('Leverage follows', ['visibility', 'frequency', 'complaints', 'seniority'], 1),
       ('Accelerating a task that feeds a review step', ['raises output', 'lengthens the queue', 'has no effect at all', 'reduces quality'], 1),
       ('In the Clinic, what does Kenji say the real error was?', ['choosing the portal', 'that the comparison was never made', 'the build cost', 'the renewal rate'], 1)],
 listen_text='Before you choose anything to build or delegate to a system, count. Write down '
             'every task performed more than a hundred times a year, attach the minutes from '
             'real observation rather than from recollection, and rank by the product of the '
             'two. Then ask where each output lands, because a task whose output arrives in a '
             'queue in front of one reviewer offers no leverage until that queue is dealt '
             'with.',
 listen=[('Attach the minutes from real ____________.', 'observation'),
         ('Rank by the ____________ of the two.', 'product'),
         ('Then ask where each ____________ lands.', 'output'),
         ('No leverage until that ____________ is dealt with.', 'queue')],
 speak=['Name the task your team performs most often, with its minutes and its annual total.',
        'Say whose desk its output reaches, and what that does to the leverage.'],
 write='Write one third-conditional sentence about a project your organisation did not choose.',
 vocab=[('A running count kept as occurrences happen is a ____________.', 'enumeration'),
        ('The value of the thing you did not do instead is the ____________.', 'opportunity cost'),
        ('An account of what would have happened otherwise is a ____________.', 'counterfactual'),
        ('To spread a one-time cost across later uses is to ____________ it.', 'amortise'),
        ('Dull, necessary, endlessly repeated work is ____________.', 'drudgery')],
 gram=[('If we ____________ (build) it then, we would have saved the time.', 'had built'),
       ('If we had built it, we ____________ (recover) the hours.', 'would have recovered'),
       ('____________ we known the figure, the decision would have gone differently.', 'Had'),
       ('If Kenji ____________ (not multiply) the numbers, nobody would have noticed.', 'had not multiplied'),
       ('We ____________ (might/hold) three years of data by now.', 'might have held')]),

found=['Count how many times a year your team performs its most repeated task.',
       'Multiply it by its minutes and write the annual figure down.',
       'Name the desk that task’s output reaches.',
       'Write the third-conditional sentence about the project you did not choose.'],
end_line='Nobody in the room said the word frequency.',
end_next='Next: Looking Back and Forward',
)
