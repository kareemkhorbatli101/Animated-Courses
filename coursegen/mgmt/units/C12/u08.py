# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='If It Had Been Otherwise',
gram='conditional perfects in argument',
ai='dependence: the day the system is unavailable',
strap='CEFR C1 · Grammar: conditional perfects in argument · AI: the day it is unavailable',
cando=['use conditional perfects to argue from what did not happen',
       'build a counterfactual that a sceptical reader can check',
       'establish what your organisation cannot do when a system is unavailable',
       'distinguish a tolerable outage from an intolerable one by its timing',
       'state what a continuity plan does not cover'],
hero=('NINETEEN HOURS',
      ['It happened on a Tuesday in the second week, and cost almost nothing.',
       'Had it happened eight days earlier, it would have cost forty-one filings.'],
      [(780, 'grey', 'long'), (1500, 'orange', 'short'),
       (2200, 'purple', 'long'), (2840, 'teal', 'short')]),
hero_cap='What an outage costs is decided almost entirely by when it happens.',

warm=['What would your organisation be unable to do today if its main system stopped?',
      'How long could that last before somebody outside noticed?',
      'Would the answer be different in a different week of the month?'],
read=[
 'The outage began at eleven on a Tuesday morning and lasted nineteen hours, and its '
 'practical cost was one apologetic telephone call. Two hundred and six items waited, the '
 'checking team worked on exception reviews instead, and by Thursday the queue had cleared '
 'with nothing late and no client aware that anything had occurred.',
 'Jonas Riedel’s report on it is three pages long and almost none of it is about what '
 'happened. If the same outage had begun on the previous Monday, forty-one regulatory filings '
 'with statutory deadlines would have been in progress, twenty-two of them due that week, and '
 'the firm would have had to choose between filing late and filing without the checks it '
 'contracts to perform. Had it lasted forty hours rather than nineteen, that choice would '
 'have arisen in any week of the month.',
 'What the report established, and what nobody had established before, is that Arclight’s '
 'tolerance for an outage is not a duration but a window. Between the fourth and the '
 'eleventh of a month the firm can absorb about sixty hours without external consequence; '
 'between the twenty-fourth and the second it can absorb about nine. Nothing in the continuity '
 'plan written three years earlier mentioned the date at all.',
 'The plan had been written, Jonas notes without criticism, by somebody asked to produce a '
 'continuity plan rather than to establish what the firm could not do. It listed the systems, '
 'the suppliers’ recovery commitments and the order of restoration, all correctly. It did not '
 'contain the sentence that mattered, which is that between the twenty-fourth and the second '
 'the firm has no capacity to absorb a failure of any kind.',
 'The revision is short and two of its provisions were resisted. Non-urgent system changes '
 'are now prohibited in the narrow window, which Thomas Reed accepted at once; the filing '
 'schedule is spread across the month rather than concentrated where clients prefer it, which '
 'cost two difficult conversations; and the firm now runs on a documented degraded mode for '
 'nine hours a quarter, deliberately, which Kenji Watanabe costed at eleven thousand a year '
 'and described as the cheapest insurance in the building.'],
c_a=[('What did the outage actually cost?', 'one apologetic telephone call; the queue cleared by Thursday'),
     ('What would have happened a week earlier?', 'forty-one filings in progress, twenty-two due that week, forcing a choice'),
     ('What is Arclight’s real tolerance?', 'a window, not a duration: about sixty hours early in the month and nine late'),
     ('What did the old continuity plan omit?', 'any mention of the date, and what the firm could not do'),
     ('What three provisions did the revision add?', 'no changes in the narrow window, a spread filing schedule, and nine hours a quarter of degraded mode')],
c_b=[('The outage lasted nineteen hours.', 'T'),
     ('A client noticed and complained.', 'F'),
     ('The old plan listed the systems incorrectly.', 'F'),
     ('Tolerance is a duration rather than a window.', 'F'),
     ('Thomas resisted the change freeze.', 'F'),
     ('The degraded-mode exercise costs about eleven thousand a year.', 'T')],
c_c=[('Two hundred and six items ____________.', 'waited'),
     ('Between filing late and filing without the ____________ it contracts to perform.', 'checks'),
     ('Arclight’s tolerance is not a duration but a ____________.', 'window'),
     ('By somebody asked to produce a continuity plan rather than to establish what the firm could not ____________.', 'do'),
     ('The filing schedule is now ____________ across the month.', 'spread'),
     ('The cheapest ____________ in the building.', 'insurance')],
c_d=[('The cost of an outage is decided mainly by its ( timing / duration ).', ['timing', 'duration'], 0),
     ('How many hours can the firm absorb late in the month?', ['sixty', 'nine', 'nineteen', 'forty'], 1),
     ('The old plan was written by somebody asked to', ['establish what the firm could not do', 'produce a continuity plan', 'audit the suppliers', 'cost the risk'], 1),
     ('Which provision cost two difficult conversations?', ['the change freeze', 'the spread filing schedule', 'the degraded-mode exercise', 'the supplier review'], 1),
     ('Kenji described the exercise as', ['unaffordable', 'the cheapest insurance in the building', 'unnecessary', 'premature'], 1)],
c_e=('Which conditional? Put each sentence in the right column.',
     [('Had it begun on the Monday, we would have had to choose.', 'inverted conditional perfect'),
      ('If it had lasted forty hours, the choice would have arisen.', 'if + conditional perfect'),
      ('Were it to happen now, we would absorb it.', 'inverted second conditional'),
      ('Had it lasted longer, we would be apologising now.', 'mixed, inverted'),
      ('If the plan had mentioned the date, we would have known.', 'if + conditional perfect'),
      ('Had anybody asked, the answer would have been nine hours.', 'inverted conditional perfect')],
     ['inverted conditional perfect', 'if + conditional perfect',
      'inverted second conditional', 'mixed, inverted']),

v_fig_title='WHEN THE SYSTEM STOPS',
v_fig=[('key', 'a single point of failure'), ('chart', 'recovery time'), ('doc', 'a dependency map'),
       ('scale', 'a tolerance window'), ('bulb', 'degraded mode'), ('bank', 'business continuity')],
v_fig_cap='Six words for the arrangements you only discover the quality of once.',
vocab=[
 ('an outage', 'a period during which something is not available at all'),
 ('downtime', 'the accumulated time for which a service was unavailable'),
 ('a fallback', 'the arrangement used when the ordinary one cannot be'),
 ('a contingency', 'a provision made in advance for a possibility'),
 ('business continuity', 'the discipline of continuing to operate through a failure'),
 ('a single point of failure', 'one element whose loss stops everything downstream'),
 ('a workaround', 'an improvised route around an obstruction, usually temporary'),
 ('degraded mode', 'reduced but deliberate operation while something is unavailable'),
 ('recovery time', 'the period between a failure and the restoration of service'),
 ('a dependency map', 'the record of what each process cannot proceed without'),
 ('concentration risk', 'exposure arising from too much depending on one thing'),
 ('a backup', 'a copy kept so that loss of the original is survivable'),
 ('failover', 'the automatic transfer of work to an alternative on failure'),
 ('to suspend', 'to stop something temporarily and deliberately'),
 ('a service credit', 'money returned when a promised standard is not met'),
 ('an incident', 'a single occurrence requiring a response, recorded as such'),
 ('a postmortem', 'the structured examination of an incident after it has closed'),
 ('restoration', 'the bringing back of a service to its ordinary state'),
 ('a tolerance window', 'the period within which a failure can be absorbed'),
 ('a critical path', 'the sequence of steps whose delay delays everything')],
v_a=[('One element whose loss stops everything downstream is a ____________.', 'single point of failure'),
     ('Reduced but deliberate operation while something is unavailable is ____________.', 'degraded mode'),
     ('The record of what each process cannot proceed without is a ____________.', 'dependency map'),
     ('The period within which a failure can be absorbed is a ____________.', 'tolerance window'),
     ('Exposure from too much depending on one thing is ____________.', 'concentration risk'),
     ('The structured examination of an incident afterwards is a ____________.', 'postmortem'),
     ('The automatic transfer of work to an alternative on failure is ____________.', 'failover'),
     ('The sequence of steps whose delay delays everything is the ____________.', 'critical path')],
v_b=[('A fallback is the arrangement used', 'when the ordinary one cannot be.'),
     ('Business continuity is the discipline of', 'continuing to operate through a failure.'),
     ('Recovery time is the period between a failure', 'and the restoration of service.'),
     ('A service credit is money returned', 'when a promised standard is not met.'),
     ('A workaround is an improvised route around an obstruction,', 'usually temporary.')],

g_title='Grammar: conditional perfects in argument',
g_rule=['If + past perfect, would have + participle: the standard counterfactual.',
        'Inversion drops if in formal argument: had it begun on the Monday, we would have...',
        'Mixed forms place the consequence in the present: had it lasted longer, we would be...',
        'A counterfactual in an argument must be checkable; state the figures it rests on.'],
g_fig=('LOOSE',
       ['If it would have begun on Monday, we would have chosen.',
        'Had it lasted longer, we would had to apologise.',
        'If the plan mentioned the date, we would have known.',
        'Had anybody asked, the answer was nine hours.'],
       'PRECISE',
       ['Had it begun on the Monday, we would have had to choose.',
        'Had it lasted longer, we would have had to apologise.',
        'Had the plan mentioned the date, we would have known.',
        'Had anybody asked, the answer would have been nine hours.'],
       'four counterfactuals malformed',
       'four correct, three of them inverted'),
g_fig_cap='In written argument the inverted form is standard; getting it wrong undermines the figure it carries.',
g_a=[('____________ it begun on the Monday, we would have had to choose.', 'Had'),
     ('If it ____________ (last) forty hours, the choice would have arisen.', 'had lasted'),
     ('Had the plan mentioned the date, we ____________ (know).', 'would have known'),
     ('Had anybody asked, the answer ____________ (be) nine hours.', 'would have been'),
     ('____________ it to happen today, we would absorb it. (were)', 'Were'),
     ('Had it lasted longer, we ____________ (apologise) now.', 'would be apologising'),
     ('If twenty-two filings ____________ (be) in progress, we would have filed late.', 'had been'),
     ('____________ we known the window, the freeze would have existed already.', 'Had'),
     ('Had nobody run the exercise, the degraded mode ____________ (not exist).', 'would not exist')],
g_b=[('In formal written argument the ( if / inverted ) form is standard.', ['if', 'inverted'], 1),
     ('____ it begun on the Monday, we would have had to choose.', ['If', 'Had', 'Have', 'Would'], 1),
     ('Had it lasted longer, we ____ to apologise.', ['would had', 'would have had', 'had had', 'will have had'], 1),
     ('Had anybody asked, the answer ____ nine hours.', ['was', 'would have been', 'had been', 'would be'], 1),
     ('Had it lasted longer, we ____ now.', ['would have apologised', 'would be apologising', 'apologised', 'will apologise'], 1),
     ('A counterfactual in an argument must be', ['vivid', 'checkable', 'brief', 'optimistic'], 1)],

d1=dict(title='Eight days earlier',
        fig=(['Nineteen hours, one phone call.', 'That is the whole cost.'],
             ['And eight days earlier?', 'Forty-one filings in progress.']),
        cap='Jonas and Ines, the day after restoration.',
        lines=[('Ines', 'Nineteen hours and one apologetic phone call. I would like to be pleased '
                        'about that and your face suggests I should not be.'),
               ('Jonas', 'Be pleased about the restoration. Had the same outage begun eight days '
                         'earlier, we would have had forty-one filings in progress and twenty-two due '
                         'that week.'),
               ('Ines', 'And we would have done what?'),
               ('Jonas', 'Chosen between filing late and filing without the checks we contract to '
                         'perform. There is no third option and nobody has ever decided which we '
                         'would take.'),
               ('Ines', 'So the nineteen hours is not the finding.'),
               ('Jonas', 'The nineteen hours is almost irrelevant. The finding is that our tolerance '
                         'is a window rather than a duration. Early in the month we can absorb about '
                         'sixty hours. In the last week we can absorb nine.'),
               ('Ines', 'Nine hours. And the continuity plan says?'),
               ('Jonas', 'Nothing about the date. It lists the systems, the recovery commitments and '
                         'the restoration order, all correct and all silent on the only variable that '
                         'matters.'),
               ('Ines', 'Why would it be silent on that?'),
               ('Jonas', 'Because somebody was asked to write a continuity plan, and they wrote an '
                         'excellent one. Nobody was asked what the firm cannot do, which is a '
                         'different question and produces a different document.'),
               ('Ines', 'Then ask it now, and give me the sentence rather than the plan.'),
               ('Jonas', 'The sentence is that between the twenty-fourth and the second we have no '
                         'capacity to absorb a failure of any kind, and that has been true for three '
                         'years.')],
        a=[('What was the actual cost?', 'nineteen hours and one apologetic telephone call'),
           ('What would eight days earlier have meant?', 'forty-one filings in progress, twenty-two due that week'),
           ('What would the choice have been?', 'filing late or filing without the contracted checks'),
           ('What is the real finding?', 'that tolerance is a window: sixty hours early in the month, nine in the last week'),
           ('Why was the plan silent on the date?', 'because somebody was asked to write a plan, not to establish what the firm cannot do')],
        b=[('Be pleased about the ____________.', 'restoration'),
           ('There is no third ____________.', 'option'),
           ('Silent on the only ____________ that matters.', 'variable'),
           ('Give me the ____________ rather than the plan.', 'sentence')]),
d2=dict(title='Nine hours a quarter, on purpose',
        fig=(['We run without it for nine hours.', 'Deliberately?'],
             ['Deliberately.', 'And if something goes wrong during it?']),
        cap='Kenji and Thomas, over the revision.',
        lines=[('Thomas', 'You want us to run in degraded mode for nine hours a quarter on purpose. '
                          'What does it cost?'),
               ('Kenji', 'About eleven thousand a year in lost throughput. I have called it the '
                         'cheapest insurance in the building and I stand by that.'),
               ('Thomas', 'Insurance against what, precisely? We now know the window. We have frozen '
                          'changes in it. What does the exercise add?'),
               ('Kenji', 'It establishes whether the degraded mode works. Writing it down is not the '
                         'same as it working, and we found that out with the manual drill.'),
               ('Thomas', 'Granted. Here is my difficulty. If something real goes wrong during the '
                          'nine hours, we are in an outage we caused, with our checks switched off, '
                          'and the client will ask why.'),
               ('Kenji', 'The probability is low.'),
               ('Thomas', 'The probability is low and the explanation is terrible. We were testing '
                          'our ability to survive an outage and in consequence we caused one is a '
                          'sentence I would not want to write.'),
               ('Kenji', 'Then run the nine hours in the widest part of the window, where we can '
                         'absorb sixty.'),
               ('Thomas', 'Which I accept, and it moves the difficulty rather than removing it. In '
                          'the widest part of the window the exercise is least like the circumstance '
                          'we are preparing for.'),
               ('Kenji', 'That is true and I have no answer to it. We can test safely in conditions '
                         'that do not resemble the emergency, or realistically in conditions where '
                         'the test itself is a risk.'),
               ('Thomas', 'Then write both sentences in the paper and let the board choose, because '
                          'I do not want this decided by whichever of us drafts it.')],
        unresolved=True,
        a=[('What does the exercise cost?', 'about eleven thousand a year in lost throughput'),
           ('What does it establish that the plan cannot?', 'whether the degraded mode actually works'),
           ('What is Thomas’s difficulty?', 'that a real problem during the exercise would be an outage the firm caused'),
           ('What does moving it to the wide window do?', 'makes it safer and less like the circumstance being prepared for'),
           ('How do they leave it?', 'both sentences go in the paper for the board to choose')],
        b=[('About eleven thousand a year in lost ____________.', 'throughput'),
           ('Writing it down is not the same as it ____________.', 'working'),
           ('The probability is low and the explanation is ____________.', 'terrible'),
           ('Decided by whichever of us ____________ it.', 'drafts')]),

speak=[('Say it correctly',
        ['Student A: make six counterfactual arguments using the inverted form.',
         'Student B: ask what figure each one rests on.',
         'Find the one that could not be checked by anybody.']),
       ('Spoken specification: your own window',
        ['Name the system your organisation most depends on.',
         'Brief aloud how long you could run without it, and in which week of the month.',
         'Your partner asks what you would be unable to do, specifically.']),
       ('The sentence rather than the plan',
        ['In pairs, state in one sentence what your organisation cannot do during an outage.',
         'Say whether that sentence appears in any document.',
         'Find the case where nobody has ever written it.'])],

ext_title='Tolerance for an outage is a window, not a duration, and almost no plan says so',
ext_fig=figs.datatable('WHAT ARCLIGHT CAN ABSORB, BY DATE',
                       ['Period of the month', 'Hours absorbable', 'What is in progress'],
                       [['4th to 11th', '~60', 'few statutory deadlines'],
                        ['12th to 18th', '~34', 'renewals, some filings'],
                        ['19th to 23rd', '~21', 'filings building'],
                        ['24th to 2nd', '~9', '41 filings, 22 due'],
                        ['the old plan’s figure', 'not stated', 'date not mentioned']]),
ext_fig_cap='One number in the plan, four in reality, and the smallest is the one that matters.',
ext=[
 'An outage is almost never costly in proportion to its length, and organisations that '
 'measure their exposure in hours of downtime are measuring the wrong quantity. What '
 'determines the cost is what was in progress, which depends on the date, the stage of a '
 'cycle, and which external deadlines fall inside the period. The same nineteen hours can '
 'cost one telephone call or force a choice between missing a statutory deadline and '
 'performing work without the checks you contracted to perform.',
 'The useful exercise is therefore counterfactual and should be conducted in writing, because '
 'the figures are what make it an argument rather than an anxiety. Had the outage begun on the '
 'Monday of the previous week, how many items would have been in progress, how many due, and '
 'what would the choice have been? Had it lasted forty hours rather than nineteen, in which '
 'weeks would that choice have arisen? These questions take an afternoon and produce a table '
 'with four numbers in it.',
 'What such a table shows is a tolerance window rather than a tolerance period, and the '
 'difference changes what can be done about it. A duration can only be addressed by reducing '
 'recovery time, which is usually expensive and often a supplier’s decision. A window can be '
 'addressed by moving work: spreading a filing schedule across the month, freezing non-urgent '
 'changes in the narrow period, and deciding in advance which way the unavoidable choice would '
 'go.',
 'Continuity plans routinely miss this, and the reason is in how they were commissioned. '
 'Somebody asked to write a continuity plan produces an excellent document listing systems, '
 'recovery commitments and restoration order. Somebody asked what the organisation cannot do '
 'produces a different document, usually shorter, containing one sentence that nobody has '
 'written down before. The second question is the one worth asking and it is rarely the one '
 'put.',
 'Finally, a plan that has never been exercised is a hypothesis. Running deliberately in '
 'degraded mode for a stated number of hours each quarter is the only way to establish that '
 'the fallback works, and it carries an awkwardness worth naming openly: exercised in the '
 'safe part of the window it least resembles the emergency, and exercised in the narrow part '
 'the exercise is itself a risk. There is no formulation that escapes this, and the honest '
 'course is to put both sentences in front of whoever decides.'],
dp1=('Timing and the cost of disruption',
     'Business-continuity research generally finds disruption cost dominated by what was in '
     'progress rather than by duration, and that plans more often specify recovery sequence '
     'than organisational tolerance.',
     'Source: general business-continuity literature, 2026.'),
e_a=[('Why is downtime the wrong quantity?', 'because cost is determined by what was in progress, which depends on the date'),
     ('What does the counterfactual exercise ask?', 'how many items would have been in progress and due, and what the choice would have been'),
     ('Why does a window differ from a duration in practice?', 'because a window can be addressed by moving work rather than reducing recovery time'),
     ('Why do continuity plans miss this?', 'because they were commissioned as plans rather than as answers to what the firm cannot do'),
     ('What is the awkwardness of exercising the fallback?', 'safe timing least resembles the emergency; realistic timing makes the exercise a risk')],
e_b=[('Outage cost depends mainly on what was in progress.', 'T'),
     ('The counterfactual exercise should be done in writing with figures.', 'T'),
     ('A duration can be addressed by moving work.', 'F'),
     ('A plan listing restoration order answers the tolerance question.', 'F'),
     ('An unexercised plan is a hypothesis.', 'T'),
     ('There is a formulation that escapes the exercise dilemma.', 'F')],

w_model=(
 'Purpose: establish what Arclight cannot do while the drafting and checking systems are '
 'unavailable, by date, so that the continuity plan states a tolerance window rather than a '
 'restoration order. Scope: the drafting and checking systems and the regulatory filing '
 'process; advisory work is out of scope. Inputs: the incident record of 14 May, 12 months of '
 'filing dates, and the continuity plan dated 8 June three years ago. Criteria: for each of 4 '
 'periods of the month, state the hours of outage absorbable without external consequence and '
 'the number of items that would be in progress; state in 1 sentence what the firm cannot do '
 'in the narrowest period; state which choice the firm would take if the choice arose, and who '
 'decides; specify 1 deliberate degraded-mode exercise of stated length each quarter. Done: 1 '
 'table of 4 periods, 1 sentence of no more than 25 words, and 1 named decision owner for the '
 'unavoidable choice. Fallback: where the absorbable hours for a period cannot be established '
 'from the record, state the period as unmeasured rather than interpolating between the '
 'periods either side.'),
w_fig=figs.spec_card('THE CONTINUITY BRIEF',
                     [('Purpose', 'establish what we cannot do while the systems are down, by date'),
                      ('Scope', 'drafting, checking and filing; advisory excluded'),
                      ('Inputs', 'incident record of 14 May, 12 months of filing dates, old plan'),
                      ('Criteria', '4 periods, absorbable hours, the unavoidable choice and its owner'),
                      ('Done', '4-period table, 1 sentence of 25 words, 1 named owner'),
                      ('Fallback', 'unmeasurable period: state as unmeasured, do not interpolate')]),
w_fig_cap='The one-sentence requirement is what the old plan was missing.',
w_task='Write a continuity specification for your own organisation’s main dependency.',
w_steps=['Divide the month or cycle into periods and treat each separately.',
         'State the absorbable hours and the items in progress for each.',
         'Write the single sentence about the narrowest period.',
         'Decide in advance which way the unavoidable choice goes, and who decides.',
         'Say what happens where a period cannot be measured.'],
w_bank=['Establish what … cannot do while … are unavailable, by … , so that …',
        'Cover … ; … is out of scope.',
        'Work from the incident record of … , … months of … , and … dated …',
        'For each of … periods, state … and … ; state in 1 sentence what the firm cannot do in … ; state which choice … and who decides.',
        'Where the absorbable hours cannot be established, … rather than interpolating …'],
w_check=['Is the exposure stated by period rather than as one figure?',
         'Is the one-sentence statement required?',
         'Is the unavoidable choice decided in advance, with an owner?',
         'Is interpolation explicitly forbidden?'],

t_title='Dependence: the day the system is unavailable',
t_fig=figs.split('TWO DOCUMENTS',
                 'A continuity plan — what was asked for',
                 ['the systems, listed',
                  'the suppliers’ recovery commitments',
                  'the order of restoration',
                  'the contact tree'],
                 'What the firm cannot do — what was needed',
                 ['between the 24th and the 2nd',
                  'we can absorb 9 hours',
                  '41 filings would be in progress',
                  'and the choice would be ours']),
t_fig_cap='Both documents are correct. Only the right-hand one answers the question.',
t_body=[
 'Ask what your organisation cannot do, rather than asking for a continuity plan, because the '
 'two commissions produce different documents and only one of them contains the sentence you '
 'need. A plan tells you how the system comes back. The question tells you what happens on '
 'the day it is unavailable, while it '
 'is gone, and the answer varies by date in a way almost no plan records.',
 'Then do the counterfactual with figures, in writing. Had the outage begun eight days '
 'earlier, how many items would have been in progress and how many due; had it lasted twice '
 'as long, in which weeks would an unavoidable choice have arisen. An afternoon produces a '
 'table of four periods with four very different numbers, and the smallest number is your '
 'actual tolerance, not the average.',
 'Finally, do the two things the table makes available and exercise the result. Move work out '
 'of the narrow window, freeze non-urgent change inside it, and decide now which way the '
 'unavoidable choice goes, with a name against it, because deciding that at two in the '
 'morning is how a firm acquires its worst precedent. Then run deliberately in degraded mode '
 'for a stated number of hours each quarter, and accept openly that a safe exercise is '
 'unrealistic and a realistic one is a risk.'],
t_say=[('Change the question: ', 'Not the plan. What can we not do while it is down?'),
       ('Put a figure on it: ', 'Nine hours between the twenty-fourth and the second.'),
       ('Decide in advance: ', 'If the choice arises, we file late, and Marta decides.')],
t_bound=('A tolerance window tells you what you can absorb given the failures you have '
         'imagined. It cannot cover a failure of something you have not mapped, it assumes '
         'the fallback works, and an exercised fallback has been shown to work only under the '
         'conditions in which it was exercised.'),
t_a=[('Not the plan. What can we not do while it is ____________?', 'down'),
     ('Nine hours between the twenty-fourth and the ____________.', 'second'),
     ('If the choice arises, we file late, and Marta ____________.', 'decides'),
     ('The smallest number is your actual ____________.', 'tolerance'),
     ('Deciding that at two in the morning is how a firm acquires its worst ____________.', 'precedent'),
     ('A safe exercise is unrealistic and a realistic one is a ____________.', 'risk')],
t_b_rubric='Rewrite each reassurance as a statement about a window.',
t_b=[('We could manage for a couple of days.', 'we can absorb about sixty hours early in the month and nine in the last week'),
     ('Our supplier commits to four-hour recovery.', 'a four-hour recovery is adequate in every week except the last'),
     ('We have a continuity plan.', 'we have a restoration order; we have never stated what we cannot do'),
     ('The fallback is documented.', 'the fallback is documented and has never been run')],

case=dict(
 title='Decision Clinic · The choice nobody wanted to pre-decide',
 brief=[
  'The brief requires Arclight to decide in advance which way the unavoidable choice goes: if '
  'an outage in the narrow window forces it, does the firm file late or file without the '
  'contracted checks?',
  'Marta advises filing late, on the ground that a late filing is a disclosed failure and an '
  'unchecked filing is an undisclosed one. Victor advises filing on time with a stated '
  'reduction in checks, disclosed to the client at the time, on the ground that twenty-two '
  'late statutory filings would harm twenty-two clients and an unchecked filing harms only '
  'those where an error is actually present.',
  'Thomas points out that nobody has asked a client, and that two of the twenty-two would '
  'probably answer differently from the other twenty.'],
 exhibit=figs.datatable('TWO ROUTES THROUGH THE NARROW WINDOW',
                        ['', 'File late', 'File with reduced checks'],
                        [['clients affected', '22', '22'],
                         ['nature of the failure', 'disclosed, certain', 'disclosed, probabilistic'],
                         ['statutory consequence', 'penalty for 22', 'none'],
                         ['expected errors reaching clients', '0', '~1.6'],
                         ['clients ever asked which they prefer', '0', '0']]),
 exhibit_cap='One route harms all twenty-two slightly; the other harms about two seriously.',
 exhibit_note='The 1.6 figure is derived from the current error rate applied to twenty-two '
              'filings and assumes the reduced checks catch nothing.',
 voices=[('Marta Olsen', 'risk and liability',
          'File late. A late filing is a failure the client knows about on the day. An '
          'unchecked filing is a failure they may discover in two years, from somebody else, '
          'and we chose it.'),
         ('Victor Sandoval', 'operations and quality',
          'Filing late imposes a certain penalty on twenty-two clients to avoid about one and '
          'a half errors. On any arithmetic that is the worse outcome, and I think Marta is '
          'choosing the failure that is easier to explain rather than the smaller one.'),
         ('Thomas Reed', 'service delivery',
          'Both of you are deciding on behalf of twenty-two clients without having asked one '
          'of them. Two of the twenty-two have told me in other contexts that they would '
          'rather be late than wrong. The other twenty have never been asked anything.')],
 steps=[('Find it', 'What does each route cost, and to whom?'),
        ('Compare it', 'How do the two failures differ in kind?'),
        ('Infer it', 'Why does Thomas regard both positions as incomplete?'),
        ('Weigh it', 'A certain small harm to twenty-two against a probable serious harm to two.'),
        ('Decide', 'Which route is pre-decided, and on what authority?')],
 analysis=[('Find it. What is the statutory consequence of filing late?', 'a penalty for all twenty-two clients'),
           ('Compare it. How many errors would reduced checks be expected to let through?', 'about one point six'),
           ('Infer it. What is Thomas’s point?', 'that nobody has asked the clients, and two would answer differently'),
           ('Weigh it. What is Victor’s criticism of Marta?', 'that she chooses the failure easier to explain rather than the smaller one'),
           ('Decide. What would you do?', 'answers vary; asking the clients in advance is available and nobody proposed it')],
 decision='Write Arclight’s pre-decision on the unavoidable choice.',
 decision_steps=['Say which route is taken by default.',
                 'Say whether clients are asked in advance, and which.',
                 'Say who may depart from the default, and how it is recorded.',
                 'Say what is disclosed, and when.'],
 bank=['By default we …',
       '… clients are asked in advance, because …',
       'A departure from the default requires …',
       'We disclose … at …',
       'This is reviewed every …'],
 outcome='Arclight wrote to all twenty-two clients in the narrow window asking which they '
         'would prefer. Nineteen replied; sixteen chose late filing, three chose reduced '
         'checks with disclosure, and the preference is now recorded against each client and '
         'followed. Three never replied and take the late-filing default. Victor, whose '
         'arithmetic favoured reduced checks, notes that sixteen of nineteen chose the option '
         'his arithmetic rejected and that he does not think this shows his arithmetic was '
         'wrong; Marta agrees with him about that, and observes that the clients were not '
         'answering an arithmetical question.',
 outcome_q=[('What did the clients choose?', 'sixteen of nineteen chose late filing, three chose reduced checks'),
            ('Why does Victor not regard that as refuting his arithmetic?', 'because the clients were not answering an arithmetical question')],
 tags=[]),

lab=dict(
 title='Brief Lab · Write a continuity plan',
 task=['This is the brief that produced the continuity plan of three years ago, the excellent '
       'one that was silent on the date.',
       'It is a good brief for the document it asked for, which is the entire point.'],
 draft=['Write a continuity plan for our main systems.',
        'Cover what happens if they become unavailable.',
        'Include the suppliers’ recovery commitments.',
        'Set out the order in which things are restored.',
        'Keep it practical and usable in an emergency.',
        'Review it annually.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions that produced an excellent answer to a question nobody needed answered.',
 asked=['What the firm cannot do, by period of the month',
        'The absorbable hours for each period',
        'A pre-decision on the unavoidable choice'],
 back=['A 14-page plan, systems and order',
       'Recovery commitments, all correct',
       'No dates, no tolerance, no choice'],
 gap='"What happens if they become unavailable" asks about the systems rather than about the '
     'firm, "the order in which things are restored" assumes restoration is the question, '
     '"practical and usable in an emergency" sets no content, and "review it annually" fixed a '
     'cadence that was met three times without anybody asking a different question.',
 back_cap='Fourteen correct pages, and the nine-hour sentence absent for three years.',
 back_note='The plan was reviewed annually and approved each time. Nothing in the review asked '
           'what the firm could not do.',
 diagnosis=[('[1] "a continuity plan" — a plan, or a statement of what we cannot do?', 'unscoped set'),
            ('[2] "if they become unavailable" — unavailable when, in which period?', 'missing condition'),
            ('[3] "the order in which things are restored" — and what happens meanwhile?', 'unstated exception'),
            ('[4] "practical and usable" — containing what, specifically?', 'unscoped set'),
            ('[5] no instruction about the unavoidable choice', 'unstated exception'),
            ('[6] "review it annually" — reviewed against what question?', 'missing condition')],
 rewrite='Rewrite the brief so that it asks what the firm cannot do, by period, and requires '
         'the unavoidable choice to be pre-decided.',
 scaffold=['What must be established, and what the plan must therefore state',
           'Which systems and processes are covered, and what is out of scope',
           'The incident records, dates and the existing plan it is built from',
           'The periods, the absorbable hours, the one sentence, and the pre-decided choice',
           'What comes back, in how many parts, and by when',
           'What to do where a period’s figure cannot be established'],
 bank=['Establish what … cannot do while … are unavailable, by date, so that …',
       'Cover … ; … is out of scope.',
       'Work from the incident record of … , … months of … , and … dated …',
       'For each of … periods state … and … ; state in 1 sentence what the firm cannot do in … ; state which choice the firm would take and who decides; specify 1 … exercise of stated length each quarter.',
       'Return 1 table of … periods, 1 sentence of no more than … words, and 1 named decision owner.',
       'Where the absorbable hours cannot be established, … rather than …'],
 check=['Does the brief ask what the firm cannot do, not just how service returns?',
        'Are figures required by period rather than overall?',
        'Must the unavoidable choice be pre-decided with an owner?',
        'Is a deliberate exercise specified with a length?'],
 model=['Establish what Arclight cannot do while the drafting and checking systems are unavailable, by date, so that the continuity plan states a tolerance window rather than a restoration order',
        'The drafting and checking systems and the regulatory filing process; advisory work is out of scope',
        'The incident record of 14 May, 12 months of filing dates, and the continuity plan dated 8 June three years ago',
        'For each of 4 periods of the month, state the hours of outage absorbable without external consequence and the number of items that would be in progress; state in 1 sentence what the firm cannot do in the narrowest period; state which choice the firm would take if the choice arose, and who decides; specify 1 deliberate degraded-mode exercise of stated length each quarter',
        '1 table of 4 periods, 1 sentence of no more than 25 words, and 1 named decision owner for the unavoidable choice, by 30 June',
        'Where the absorbable hours for a period cannot be established from the record, state the period as unmeasured rather than interpolating between the periods either side'],
 cost='3 years of an excellent plan that did not contain the nine-hour sentence, 3 annual '
      'reviews that approved it, and an outage survived by luck of timing.'),

rev_fig=figs.split('CONDITIONAL PERFECTS',
                   'Wrong',
                   ['If it would have begun on Monday...',
                    'Had it lasted longer, we would had to...',
                    'If the plan mentioned the date, we would have known.',
                    'Had anybody asked, the answer was nine hours.'],
                   'Right',
                   ['Had it begun on the Monday...',
                    'Had it lasted longer, we would have had to...',
                    'Had the plan mentioned the date, we would have known.',
                    'Had anybody asked, the answer would have been nine hours.']),
rev_fig_cap='The inverted form is standard in written argument and easy to get wrong.',
rev=dict(
 read=[('Outage cost is determined mainly by', ['duration', 'what was in progress', 'the supplier', 'the season'], 1),
       ('Tolerance is best expressed as', ['a duration', 'a window', 'a percentage', 'a cost'], 1),
       ('Continuity plans miss the window because', ['they are old', 'they were commissioned as plans', 'they are secret', 'they are short'], 1),
       ('In the Clinic, what did sixteen of nineteen clients choose?', ['reduced checks', 'late filing', 'no preference', 'termination'], 1)],
 listen_text='Ask what your organisation cannot do, rather than asking for a continuity plan, '
             'because the two commissions produce different documents. Then do the '
             'counterfactual with figures, in writing: had the outage begun eight days '
             'earlier, how many items would have been in progress and how many due. The '
             'smallest number is your actual tolerance, not the average.',
 listen=[('Ask what your organisation cannot ____________.', 'do'),
         ('The two commissions produce different ____________.', 'documents'),
         ('How many items would have been in ____________.', 'progress'),
         ('The smallest number is your actual ____________.', 'tolerance')],
 speak=['Say how long your organisation could run without its main system, by week of the month.',
        'Say what it could not do, in one sentence, in the narrowest week.'],
 write='Write one inverted conditional perfect about an outage, with its figures.',
 vocab=[('One element whose loss stops everything downstream is a ____________.', 'single point of failure'),
        ('Reduced but deliberate operation during unavailability is ____________.', 'degraded mode'),
        ('The period within which a failure can be absorbed is a ____________.', 'tolerance window'),
        ('Exposure from too much depending on one thing is ____________.', 'concentration risk'),
        ('The structured examination of an incident afterwards is a ____________.', 'postmortem')],
 gram=[('____________ it begun on the Monday, we would have had to choose.', 'Had'),
       ('If it ____________ (last) forty hours, the choice would have arisen.', 'had lasted'),
       ('Had the plan mentioned the date, we ____________ (know).', 'would have known'),
       ('Had anybody asked, the answer ____________ (be) nine hours.', 'would have been'),
       ('Had it lasted longer, we ____________ (apologise) now.', 'would be apologising')]),

found=['Ask what your organisation cannot do while its main system is unavailable.',
       'Work out the answer for the busiest week of your cycle.',
       'Decide now which way an unavoidable choice would go, and who decides.',
       'Find out whether your fallback has ever actually been run.'],
end_line='Somebody was asked to write a continuity plan, and they wrote an excellent one.',
end_next='Next: The Same Point, Two Registers',
)
