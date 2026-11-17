# -*- coding: utf-8 -*-
"""Unit 46 - Infrastructure and Maintenance. IELTS Volume 5, band 7.0."""

_COND = dict(kind='line',
             title='Asset condition under two maintenance regimes',
             sub='condition index, 100 = as built, over thirty years',
             ylab='',
             x=['Year 0', 'Year 5', 'Year 10', 'Year 15', 'Year 20',
                'Year 25', 'Year 30'],
             series=[('Planned regime', [100, 96, 93, 95, 91, 93, 90]),
                     ('Reactive regime', [100, 94, 88, 76, 52, 31, 24])])

_COST = dict(kind='line',
             title='Cumulative spending under the same two regimes',
             sub='millions, running total over thirty years',
             ylab='',
             x=['Year 0', 'Year 5', 'Year 10', 'Year 15', 'Year 20',
                'Year 25', 'Year 30'],
             series=[('Planned regime', [0, 4, 8, 14, 18, 24, 29]),
                     ('Reactive regime', [0, 1, 2, 5, 16, 38, 61])])

UNIT = dict(
 n=46, vol=5, level='B2+/C1', band='7.0',
 theme='Infrastructure and Maintenance',
 opener=(
   'Two line graphs of the same asset over the same thirty years, one '
   'showing condition and one showing money. The Task 1 lesson is the '
   'structuring choice from unit 27 in a harder form: organise by regime '
   'rather than by year, because the regimes are the comparison and the '
   'years are only the axis. The unit then asks why every organisation '
   'knows this and defers maintenance anyway, and what happened to the '
   'three attempts to prevent it by law.'),

 cycles=[
  dict(
   sub='Reporting a defect',
   step=1,
   read=[
    dict(heading='Reporting a road or bridge defect',
         kind='Procedure notice',
         task='Flow-chart completion and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A reporting procedure is read for the category, because '
                'the category sets the clock',
                ['Maintenance systems respond to a category rather than to '
                 'a description, and the category is assigned from '
                 'measurements you can take yourself.',
                 'Find the measurements and the times attached to them '
                 'before reading anything else. Almost every question on '
                 'this kind of text comes from that pairing.']),
         paras=[
          'Report defects through the online form, which asks for a '
          'location, a photograph and a measurement. The measurement is what '
          'determines the response, so a report stating that a hole is '
          '"large" generates an inspection while a report stating that it is '
          '"ninety millimetres deep" may generate a repair.',
          'Defects are placed in one of three categories on receipt. '
          'Category 1 is a defect presenting an immediate hazard and is made '
          'safe within two hours, which may mean a cone and a barrier rather '
          'than a repair. Category 2 is repaired within twenty-eight days. '
          'Category 3 is recorded and addressed within the next programmed '
          'resurfacing, which may be several years away.',
          'The thresholds are published and are not discretionary. On a '
          'carriageway, a hole deeper than forty millimetres is Category 1 '
          'or 2 depending on its position; on a footway the threshold is '
          'twenty millimetres, because the consequences of a trip differ '
          'from those of a jolt. A defect below the threshold is Category 3 '
          'however unpleasant it is to drive over, and the guidance says '
          'so rather than leaving it to be discovered.',
          'Making safe is not repairing, and the distinction causes more '
          'complaints than anything else here. A Category 1 defect coned '
          'within two hours has been dealt with to standard, and the '
          'repair that follows runs to the Category 2 timetable from the '
          'inspection date rather than the report date.',
          'You will receive a reference beginning DF and a category. If '
          'you believe the category is wrong, send a measurement rather '
          'than a description: categories change on measurements roughly '
          'four times in ten and on descriptions almost never.'],
         items=[
          ('What determines the response to a report?',
           ['the description', 'the measurement', 'the photograph',
            'the location'], 1,
           'Paragraph 1: "ninety millimetres deep" may generate a '
           'repair.'),
          ('A Category 1 defect must be made safe within',
           ['two hours', 'twenty-eight days', 'one year',
            'the next resurfacing'], 0,
           'Paragraph 2, which may mean a cone rather than a repair.'),
          ('On a footway, the threshold is lower because',
           ['footways are cheaper', 'the consequences of a trip differ '
            'from a jolt', 'more people use them', 'they are inspected '
            'less'], 1,
           'Paragraph 3, where the carriageway threshold is forty '
           'millimetres.'),
          ('Category 2 defects are repaired within ____________ days.',
           None, 'twenty-eight',
           'Paragraph 2, against the next resurfacing for Category 3.'),
          ('Reference numbers begin with the letters ____________.', None,
           'DF', 'Paragraph 5, issued with a category.'),
          ('Categories are changed on measurements about ____________ '
           'times in ten.', None, 'four',
           'Paragraph 5, and on descriptions almost never.')]),
    dict(heading='How defects are prioritised',
         kind='Guidance table', task='Matching features',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Priority is set by category and then by a network factor, '
          'which is the traffic the asset carries. Category 1 is '
          'unaffected by the winter rules below, since making safe '
          'requires no material that frost prevents being laid. The same forty-millimetre hole '
          'is Category 1 on a bus route and Category 2 on a cul-de-sac, and '
          'this is deliberate rather than a reflection of who complains '
          'loudest.',
          'A defect reported three or more times within a year is escalated '
          'automatically, regardless of category. This rule exists because '
          'repeated reporting correlates strongly with the measurement being '
          'wrong, and only weakly with anybody being persistent.',
          'Structures — bridges, retaining walls, culverts — are outside '
          'this system entirely and are inspected on a two-year cycle by a '
          'different team. A member of the public reporting a structural '
          'defect through the road form will receive a reference that goes '
          'nowhere useful, which the guidance acknowledges and the form does '
          'not prevent.',
          'Winter reverses several of these rules. Between November and '
          'March, Category 2 repairs may be deferred where the material '
          'cannot be laid, and the twenty-eight day clock is suspended '
          'rather than paused, which means it restarts in March rather than '
          'resuming.'],
         items=[
          ('The same defect may be a higher category on a bus route '
           'because of the ____________ factor.', None, 'network',
           'Paragraph 1, which is traffic rather than complaints.'),
          ('A defect reported ____________ or more times in a year is '
           'escalated automatically.', None, 'three',
           'Paragraph 2, because repetition correlates with a wrong '
           'measurement.'),
          ('Bridges and culverts are inspected on a ____________-year '
           'cycle.', None, 'two',
           'Paragraph 3, by a different team and outside this system.'),
          ('In winter the twenty-eight day clock is ____________ rather '
           'than paused.', None, 'suspended',
           'Paragraph 4, so it restarts in March rather than resuming.')])],
   listen=[
    dict(heading='Reporting a defect', part='Part 1',
         task='A call to a highways department', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Highways, defect reporting, Ignatius speaking.'),
          ('Caller', 'Hello. There is a hole in the road outside the school '
           'on Pellow Street and it is getting worse.'),
          ('Officer', 'Let me take it properly, because how I record it '
           'decides what happens. Whereabouts on Pellow Street?'),
          ('Caller', 'Outside number forty-two, in the middle of the '
           'carriageway.'),
          ('Officer', 'Have you been able to measure the depth?'),
          ('Caller', 'I have not. It is deep enough that a cyclist came off '
           'last week.'),
          ('Officer', 'That is useful and it is not a measurement. A '
           'description gets an inspection in five days. A measurement can '
           'get a repair.'),
          ('Caller', 'How would I measure it?'),
          ('Officer', 'A ruler across the top and anything straight down '
           'into it. If it is over forty millimetres on a carriageway it is '
           'Category 1 or 2. Under forty it is Category 3, which means the '
           'next resurfacing.'),
          ('Caller', 'I can do that this afternoon.'),
          ('Officer', 'Then do, and add it to the report with a photograph '
           'of the ruler in the hole. In the meantime I will log it as a '
           'description with the cyclist incident noted, which gets the '
           'five-day inspection.'),
          ('Caller', 'And the school is there, which must count for '
           'something.'),
          ('Officer', 'It does, through the network factor. Pellow Street '
           'is a bus route, so the same hole is a category higher than it '
           'would be on a quiet road. That is already in the system.'),
          ('Caller', 'Has anybody else reported it?'),
          ('Officer', 'Twice since September, which is useful to know '
           'because three reports in a year escalates it automatically. '
           'Yours is the third.'),
          ('Caller', 'So it goes up anyway.'),
          ('Officer', 'It does, from today. Your reference is D-F, then '
           'seven-two-oh-four. And I will be honest about the timetable: '
           'this is November, and if it ends up as a Category 2, the '
           'twenty-eight days may be suspended until March because we cannot '
           'lay the material in frost.'),
          ('Caller', 'That is a long time outside a school.'),
          ('Officer', 'It is, and with a cyclist incident recorded I would '
           'expect this to be made safe rather than left, which is a cone '
           'and a plate rather than a repair. That is not me promising. It '
           'is what usually happens with those two things on one record.')],
         items=[
          ('Location: outside number ____________, Pellow Street', None,
           'forty-two', 'In the middle of the carriageway.'),
          ('A description gets an inspection within ____________ days.',
           None, 'five', 'Whereas a measurement can get a repair.'),
          ('The carriageway threshold is ____________ millimetres.', None,
           'forty', 'Below which the defect is Category 3.'),
          ('Pellow Street is a ____________ route, which raises the '
           'category.', None, 'bus',
           'Through the network factor already in the system.'),
          ('This is the ____________ report within a year, which escalates '
           'it.', None, 'third',
           'Two others having been made since September.'),
          ('Reference: DF____________', None, '7204',
           'Issued during the call once the report was taken.')]),
    dict(heading='A short talk: what gets maintained', part='Part 2',
         task='A talk at an engineering institute', band='l2',
         qtype='Questions 17-20',
         script=[
          ('Speaker', 'I have spent nineteen years managing infrastructure '
           'assets and I want to explain why organisations that understand '
           'deterioration perfectly well still defer maintenance until '
           'things fail. It is not ignorance and it is not stupidity, and '
           'assuming either is why so much advice in this area achieves '
           'nothing.'),
          ('Speaker', 'Start with the shape of the problem. An asset loses '
           'condition slowly for years and then quickly. A bridge deck at '
           'ninety per cent condition and the same deck at seventy look '
           'identical to anybody who is not inspecting it, and the repair at '
           'ninety costs about an eighth of the repair at seventy.'),
          ('Speaker', 'Now put that curve next to an annual budget. Deferring '
           'a repair this year is free this year. The consequence arrives in '
           'year eleven, by which time four budget holders have held the '
           'post, and none of them did anything that would appear in an '
           'audit as a failure.'),
          ('Speaker', 'And deferral is rational for each of them '
           'individually. If my budget is cut by nine per cent and I must '
           'find the money somewhere, maintenance is the only line where the '
           'consequence of cutting is invisible this year. Cutting anything '
           'else produces a complaint on Monday.'),
          ('Speaker', 'Then there is the visibility problem, which I would '
           'put higher than everybody else does. New building is attended by '
           'an opening, a photograph and a name on a plaque. Maintenance is '
           'the absence of a failure, and nobody has ever been photographed '
           'standing in front of a bridge that did not collapse.'),
          ('Speaker', 'What works, where anything has, is changing what is '
           'measured rather than exhorting anybody. An organisation that '
           'publishes a condition index annually, by asset, with the '
           'previous five years beside it, behaves differently within two '
           'budget rounds. Not because anybody is shamed, but because '
           'deferral stops being invisible, and the invisibility was the '
           'whole of the mechanism.')],
         items=[
          ('The speaker says deferral happens because of',
           ['ignorance', 'the shape of the cost curve against annual '
            'budgets', 'poor engineering', 'corruption'], 1,
           'And assuming ignorance is why advice achieves nothing.'),
          ('A repair at ninety per cent condition costs about',
           ['the same as at seventy', 'an eighth of the repair at '
            'seventy', 'half the repair at seventy', 'twice as much'], 1,
           'Though the two look identical to a non-inspector.'),
          ('Why is maintenance the line that gets cut?',
           ['It is the largest', 'Its consequence is invisible this year',
            'It is optional', 'It is unpopular'], 1,
           'Cutting anything else produces a complaint on Monday.'),
          ('What does the speaker say actually works?',
           ['Training', 'Publishing a condition index annually',
            'Legal requirements', 'Larger budgets'], 1,
           'Because deferral stops being invisible.')])],
   speak=dict(
    part='Part 1', focus='Roads and services where you live',
    intro=('Two or three sentences each. A specific road or service is '
           'better than a general complaint.'),
    qs=['What are the roads like where you live?',
        'Are public services well maintained there?',
        'Have you ever reported a problem to the council?',
        'Who should pay for repairs of this kind?'],
    shape=[('answer', 'Patched rather than repaired, mostly.'),
           ('support', 'There is a stretch near the station that has been '
            'filled in four times in two years.'),
           ('follow-up', 'Which I assume costs more than doing it properly '
            'once, though nobody has asked me.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Chasing a defect that has not been repaired',
         prompt=('You reported a problem with a road or public facility '
                 'some time ago and it has not been repaired. Write a letter '
                 'to the authority. In your letter: give the details of your '
                 'report; describe what has happened since; say what you '
                 'want them to do. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about a carriageway defect outside 42 Pellow Street, '
          'reported on 3 November under reference DF7204 and categorised as '
          'Category 2.',
          'The defect was reported on 3 November and remains unrepaired '
          'after eleven weeks, against a stated repair time of twenty-eight '
          'days. I understand that the winter suspension applies between '
          'November and March, and I am writing because two things appear '
          'not to have been taken into account rather than because the '
          'timetable has been missed.',
          'The first is that a cyclist was injured at this location on 28 '
          'October, which I recorded on the original report. The second is '
          'that the defect has deepened: it measured 48 millimetres on 3 '
          'November and measured 71 millimetres on 15 January, and I attach '
          'photographs of both measurements with the ruler visible.',
          'On the second measurement the defect appears to meet the '
          'threshold for Category 1 on a bus route, which would require it '
          'to be made safe rather than deferred. I would ask that the '
          'category be reviewed on the new measurement, and that the '
          'location be made safe in the interim if a permanent repair '
          'cannot be laid before March.',
          'I would be grateful for confirmation of the revised category '
          'whether or not it changes.',
          'Yours faithfully,',
          'M. Thorvaldsen-Achebe'],
         notes=[
          'The letter accepts the rule that is against it — the winter '
          'suspension — before making its case. A reader who sees their own '
          'procedure stated correctly treats the rest of the letter as '
          'informed.',
          'The argument is entirely in measurements: 48 millimetres '
          'becoming 71, with photographs. The guidance said categories '
          'change on measurements and almost never on descriptions, and this '
          'letter is written to that fact.',
          'The request has a primary and a fallback, and the closing '
          'sentence asks for confirmation either way. Asking for an outcome '
          'you can check is what prevents a letter being answered with '
          'reassurance.'],
         criterion=[('Stating the rule that works against you',
                     'Task Response'),
                    ('Arguing in the units the system acts on',
                     'Task Achievement'),
                    ('Asking for something checkable either way',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Chronology, evidence and request in one letter',
    explain=('A chasing letter is a timeline with a request on the end. '
             'These patterns compress date, action and current state into '
             'single sentences so that the timeline is readable at a '
             'glance.'),
    examples=['The defect was reported on 3 November and remains unrepaired '
              'after eleven weeks.',
              'It measured 48 millimetres on 3 November and 71 on 15 '
              'January.',
              'I understand that the winter suspension applies.',
              'I would ask that the category be reviewed on the new '
              'measurement.'],
    task='Rewrite each sentence so that it carries a date and a current '
         'state.',
    items=[('Nothing has been done.',
            'The defect was reported on 3 November and remains unrepaired '
            'eleven weeks later.'),
           ('It has got worse.',
            'The defect measured 48 millimetres on 3 November and 71 '
            'millimetres on 15 January.'),
           ('Somebody was hurt.',
            'A cyclist was injured at this location on 28 October, as '
            'recorded on the original report.'),
           ('I know about the winter rules.',
            'I understand that the twenty-eight day period is suspended '
            'between November and March.'),
           ('Please do something.',
            'I would ask that the category be reviewed on the new '
            'measurement and the site made safe in the interim.')]),
   vocab=[('defect', 'a fault in a road or structure'),
          ('intervention level', 'the measurement at which action is '
           'required'),
          ('make safe', 'to remove the immediate danger without '
           'repairing'),
          ('carriageway', 'the part of a road used by vehicles'),
          ('footway', 'the pavement beside a road'),
          ('escalate', 'to raise to a higher priority'),
          ('network factor', 'how much traffic an asset carries'),
          ('resurfacing', 'relaying the whole surface of a road')],
   expr=[('The defect was reported on... and remains unrepaired after...',
          'the standard sentence of a chasing letter'),
         ('a description gets an inspection; a measurement can get a '
          'repair', 'states what a system can act on'),
         ('that is not me promising; it is what usually happens',
          'offers an expectation without committing'),
         ('made safe rather than left',
          'names the intermediate outcome available')],
   trans=['furthermore', 'in this connection', 'in the interim',
          'I would ask that'],
  ),

  dict(
   sub='What gets maintained',
   step=2,
   read=[
    dict(heading='Four engineers on deferred work',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 21-26',
         paras=[
          'A  Ottilie: I deferred the deck waterproofing on three bridges '
          'for four consecutive years and I would do it again in the same '
          'position. My budget fell by a fifth and the alternative was '
          'closing a footbridge that eleven hundred children used. Every '
          'individual decision was right and the sequence of them was a '
          'disaster, and I have never worked out what I should have done '
          'differently.',
          'B  Ferdinand: What finished us was not the deferral but the '
          'record of it. We deferred and we logged it properly, with the '
          'expected consequence and date, which is best practice. Four years '
          'later that log was read out at an inquiry as evidence that we '
          'knew, and I watched two colleagues conclude that the lesson was '
          'to log less.',
          'C  Beatriz: I inherited a backlog of nine hundred items and the '
          'only useful thing I did in six years was stop calling it a '
          'backlog. We republished it as a liability with a figure attached, '
          'in the same format as the debt. It was the identical '
          'information. The finance committee behaved completely differently '
          'towards it, and I am still not sure whether to be pleased.',
          'D  Casimir: I am the one who says in meetings that we should '
          'maintain rather than build, and I want to record that I am not '
          'always right. The new link road removed four thousand lorries a '
          'day from a street with a school on it. That was worth more than '
          'the deck repairs it displaced, and pretending otherwise would '
          'make my general argument easier and weaker.'],
         items=[
          ('Which person defended each individual decision but not the '
           'sequence?', ['Ottilie', 'Ferdinand', 'Beatriz', 'Casimir'], 0,
           'Every decision right and the sequence a disaster.'),
          ('Which person saw good practice punished?',
           ['Ottilie', 'Ferdinand', 'Beatriz', 'Casimir'], 1,
           'A properly kept deferral log read out at an inquiry.'),
          ('Which person changed how information was presented rather than '
           'the information?',
           ['Ottilie', 'Ferdinand', 'Beatriz', 'Casimir'], 2,
           'Republishing a backlog as a liability with a figure.'),
          ('Which person concedes a case against their own general '
           'position?', ['Ottilie', 'Ferdinand', 'Beatriz',
            'Casimir'], 3,
           'The link road that removed four thousand lorries.'),
          (
           'Ferdinand believes his team should have kept fewer '
           'records.', ['Yes', 'No', 'Not Given'], 1,
           'He reports colleagues drawing that lesson and does not '
           'endorse it.',
           {0: 'Yes would need endorsement; he reports colleagues '
               'drawing that lesson.', 2: 'Not Given is wrong because he says what he makes of '
               'it.'}),
          ('Beatriz is confident that her change was a good thing.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says she is still not sure whether to be pleased.',
           {0: 'Yes would need confidence; she says she is still not '
               'sure.', 2: 'Not Given is wrong because she states her uncertainty.'})])],
   listen=[
    dict(heading='Two officers disagree about priorities', part='Part 3',
         task='A conversation between two council officers', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Perpetua', 'I am putting the whole of the uplift into '
           'resurfacing and I expect you to object.'),
          ('Oluwaseun', 'I will object and I will tell you first that I '
           'think you are probably right, which should worry you.'),
          ('Perpetua', 'Go on.'),
          ('Oluwaseun', 'You are right that the resurfacing programme is the '
           'highest-return spending available to us. Every whole-life '
           'calculation says so and has said so for a decade. My objection '
           'is about what happens to the rest of the asset base while you '
           'are correct about roads.'),
          ('Perpetua', 'Meaning the structures.'),
          ('Oluwaseun', 'Meaning the structures. We have forty-one bridges '
           'and eleven retaining walls, all inspected on a two-year cycle, '
           'and nine of them are now condition grade four. A grade four wall '
           'does not fail gradually. It is fine and then it is on the '
           'railway.'),
          ('Perpetua', 'And the roads are visible every day to everybody who '
           'votes.'),
          ('Oluwaseun', 'That is the argument I was expecting and I would '
           'rather you did not make it, because it is a reason for your '
           'decision and not a justification of it.'),
          ('Perpetua', 'That is fair. Let me make the justification '
           'instead. The resurfacing is deliverable this year by a '
           'contractor already on site. The wall works need a design, a '
           'possession from the railway and eighteen months. If I move the '
           'money to the walls it does not get spent, and unspent money is '
           'taken back.'),
          ('Oluwaseun', 'That is a much better argument and it concedes my '
           'point rather than answering it, because the design is what we '
           'should have commissioned last year.'),
          ('Perpetua', 'It is, and I was the one who did not commission '
           'it.'),
          ('Oluwaseun', 'Then here is what I want. Spend the uplift on the '
           'roads, and commit this year’s design fees for the nine walls '
           'out of the revenue budget, which is about four per cent of the '
           'uplift. Next year the money has somewhere to go.'),
          ('Perpetua', 'Four per cent I can defend. I would add the '
           'condition is that the designs are published with the programme, '
           'because a design sitting in a drawer is how this happened the '
           'first time.'),
          ('Oluwaseun', 'Published and with a date on it, or next year it '
           'is a design somebody meant to progress.')],
         items=[
          ('Oluwaseun begins by conceding that',
           ['the walls can wait', 'resurfacing is the highest-return '
            'spending', 'the budget is adequate', 'inspections are too '
            'frequent'], 1,
           'As every whole-life calculation has said for a decade.'),
          ('How many structures are at condition grade four?',
           ['Four', 'Nine', 'Eleven', 'Forty-one'], 1,
           'Out of forty-one bridges and eleven retaining walls.'),
          ('What does he say about how a grade four wall fails?',
           ['Gradually', 'It is fine and then it is on the railway',
            'Only in winter', 'With long warning'], 1,
           'Which is why it cannot be managed like a road surface.'),
          ('Which of Perpetua’s arguments does he reject as a reason '
           'rather than a justification?',
           ['Deliverability', 'That roads are visible to voters',
            'Contractor availability', 'Whole-life cost'], 1,
           'He says he would rather she did not make it.'),
          ('Her better argument is that the wall works require',
           ['more money', 'a design, a railway possession and eighteen '
            'months', 'new legislation', 'public consultation'], 1,
           'So moving the money would leave it unspent and taken back.'),
          ('What do they agree?',
           ['Move the uplift to the walls', 'Spend the uplift on roads and '
            'fund the wall designs from revenue', 'Delay both',
            'Seek extra funding'], 1,
           'With the designs published alongside the programme.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Things that need looking after',
    longturn=[('The thing that was neglected until it failed is the flat roof '
               'over the kitchen of the house I grew up in.'),
              ('The way it was neglected is almost a textbook case. It was '
               'felted in about 1986 with a twenty-year material, and '
               'everybody knew that. It was inspected twice, once in 2004 and '
               'once in 2011, and on both occasions the roofer said it had a '
               'few years left, which was true and was also the answer that '
               'postponed the expense. After 2011 nobody looked at it again, '
               'partly because the person who had arranged the previous '
               'inspections had died.'),
              ('What happened in the end was that it let water in during a '
               'storm in February, not through the felt but at the junction '
               'with the wall, and by the time anybody noticed, the water had '
               'been running inside the cavity for several weeks. The kitchen '
               'ceiling came down. The repair was about eleven thousand, '
               'against perhaps two thousand for a re-felt.'),
              ('Whether the neglect was anybody\'s fault is the part I have '
               'changed my mind about. For a long time I thought it was '
               'straightforwardly my family\'s, and there is something in that. '
               'But the structure of the decision was against us at every '
               'point. The cost of acting was certain, immediate and large; '
               'the cost of waiting was uncertain, distant and invisible. Each '
               'individual decision to wait was defensible, and the sum of '
               'them was a catastrophe, and I now think that pattern is a '
               'property of the problem rather than a failing of the people.')],
    intro=('Short answers, then the long turn. The explanation bullet '
           'should be the longest.'),
    cue=('Describe something that was neglected until it failed.',
         ['what it was', 'how it was neglected', 'what happened in the end',
          'and explain whether the neglect was anybody’s fault']),
    qs=['Are you good at looking after your possessions?',
        'Do people repair things or replace them where you live?',
        'Now look at the card. You have one minute to make notes.',
        'Why do people put off necessary work?'],
    shape=[('answer', 'The flat roof on the building where I used to '
            'work.'),
           ('support', 'It was patched four times in six years and surveyed '
            'twice.'),
           ('follow-up', 'The ceiling came down over a weekend and the '
            'repair cost about nine times the original quotation.'),
           ('support', 'I would not say anybody was at fault, exactly.'),
           ('follow-up', 'Every year somebody decided it could wait one '
            'more, and each of those decisions was defensible on its '
            'own.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Maintaining what exists against building new',
         prompt=('Some people believe governments should spend more on '
                 'maintaining existing infrastructure than on building new. '
                 'Discuss both views and give your own opinion. Write at '
                 'least 250 words.'),
         model=[
          'The arithmetic in this argument is almost entirely on one side '
          'and the behaviour is almost entirely on the other, and any answer '
          'that only rehearses the arithmetic has failed to explain the '
          'thing most in need of explanation.',
          'The case for maintenance is as close to settled as public '
          'spending questions get. Deterioration is not linear: an asset '
          'holds its condition for years and then loses it quickly, and the '
          'repair that costs one unit at ninety per cent condition costs '
          'eight at seventy. Deferral therefore does not save money; it '
          'moves a smaller sum from this decade into a larger sum in the '
          'next, and the whole-life figures showing this have been available '
          'to every authority for thirty years.',
          'The case for new building is weaker as a general proposition and '
          'much stronger in particular cases than maintenance advocates '
          'usually concede. A new road that removes four thousand lorries a '
          'day from a residential street delivers a benefit that no amount '
          'of resurfacing could produce, and the honest version of the '
          'maintenance argument has to accept that such cases exist rather '
          'than treating all construction as vanity.',
          'But the interesting question is why organisations that accept the '
          'arithmetic behave as though they did not. The answer is that '
          'deferral is rational for each individual budget holder: '
          'maintenance is the only line whose reduction produces no '
          'complaint within the financial year, the consequence arrives '
          'after four changes of post, and no audit records a failure to '
          'spend. A sequence of individually defensible decisions produces '
          'an outcome nobody chose.',
          'That diagnosis points to the remedy, which is not exhortation but '
          'measurement. Authorities that publish a condition index annually, '
          'by asset, with five years of history beside it, change their '
          'behaviour within two budget rounds, because deferral stops being '
          'invisible and invisibility was the mechanism. I would require '
          'that publication and leave the spending decision alone, which is '
          'a smaller intervention than the question invites and the only one '
          'with evidence behind it.'],
         notes=[
          'The introduction names the puzzle — the arithmetic says one '
          'thing and the behaviour does another — which turns a discuss-both '
          'prompt into an explanatory essay and lifts it out of the '
          'ordinary.',
          'Paragraph 3 improves the opposing case with a specific example '
          'and says plainly that the maintenance argument has to accept it. '
          'Conceding a real exception makes the general position '
          'credible.',
          'The conclusion proposes a smaller intervention than the question '
          'invites and says so. Declining to over-reach is a mark of '
          'judgement and examiners at this level notice it.'],
         criterion=[('Turning a discuss-both prompt into an explanation',
                     'Task Response'),
                    ('Conceding a real exception to your own position',
                     'Task Response'),
                    ('Proposing less than the question invites',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Marked theme and given-new ordering',
    explain=('English puts known information first and new information '
             'last. Moving something unexpected to the front of a sentence '
             'is a marked theme, and at band 7 it should be used '
             'deliberately two or three times in an essay.'),
    examples=['New building is visible; maintenance is visible only when it '
              'stops.',
              'What deferral buys is a year, at a price paid in the next '
              'decade.',
              'Of the forty-one structures, nine are now at grade four.',
              'Rational for each budget holder, the sequence is ruinous in '
              'aggregate.'],
    task='Rewrite each sentence with a marked theme that puts the '
         'contrast first.',
    items=[('Maintenance is invisible until something fails.',
            'New building is visible from the day it opens; maintenance is '
            'visible only when it stops.'),
           ('Nine of the structures are at grade four.',
            'Of the forty-one structures inspected, nine are now at grade '
            'four.'),
           ('Deferral saves money this year and costs more later.',
            'What deferral buys is one year, at a price paid in the '
            'next decade.'),
           ('Each decision was reasonable but the result was bad.',
            'Defensible individually, the sequence of decisions produced an '
            'outcome nobody chose.'),
           ('The repair costs much more if you wait.',
            'At ninety per cent condition the repair costs one unit; at '
            'seventy it costs eight.')]),
   vocab=[('backlog', 'accumulated work not yet done'),
          ('whole-life cost', 'the total cost of an asset over its life'),
          ('renewal', 'replacing an asset at the end of its life'),
          ('condition grade', 'a rating of how good an asset’s state is'),
          ('budget increase', 'additional money added to an allocation'),
          ('possession', 'permission to work on a railway line'),
          ('future obligation', 'a cost that will have to be met later'),
          ('in aggregate', 'taken all together')],
   expr=[('New building is visible; maintenance is visible only when it '
          'stops', 'states an asymmetry of attention'),
         ('a reason for your decision and not a justification of it',
          'distinguishes cause from defence'),
         ('every individual decision was right and the sequence was a '
          'disaster', 'names a collective failure of rational parts'),
         ('a design sitting in a drawer is how this happened the first '
          'time', 'identifies the step that will be skipped')],
   trans=['whereas', 'that said', 'the interesting question',
          'that diagnosis points to'],
  ),

  dict(
   sub='The cost of waiting',
   step=3,
   read=[
    dict(heading='What a deferred repair costs later',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_COND, figure2=_COST,
         paras=[
          'The two graphs follow one notional asset over thirty years under '
          'two maintenance regimes. The first shows condition on an index '
          'where 100 is as-built. The second shows cumulative spending. The '
          'asset, the traffic and the weather are identical in both; only '
          'the maintenance policy differs.',
          'Under the planned regime, condition is held between 90 and 100 '
          'throughout. The line is not flat: it declines gently and then '
          'steps back up, at year 15 and again at year 25, which are the '
          'two scheduled interventions. It ends at 90, which is three points '
          'below where a straight reading of the graph might suggest, '
          'because no intervention restores an asset to as-built condition.',
          'Under the reactive regime, condition declines slowly for ten '
          'years and then collapses. It is at 88 in year 10, 76 in year 15, '
          'and 52 in year 20, after which it falls to 24. The shape is the '
          'important part: the first decade looks almost identical to the '
          'planned regime and the divergence is entirely in the second '
          'half.',
          'The spending graph tells the story that makes the first one '
          'matter. For the first fifteen years the reactive regime is '
          'cheaper, and substantially so: 5 million against 14, which is '
          'barely a third. An authority reviewing its decision at year '
          'fifteen would find the evidence apparently in its favour.',
          'The crossing point is at about year 19. Thereafter reactive '
          'spending rises steeply as emergency repairs replace planned ones, '
          'reaching 38 million by year 25 and 61 million by year 30. The '
          'planned regime finishes at 29 million, less than half, with an '
          'asset in two and a half times better condition.',
          'Two features of this pair deserve attention beyond the headline. '
          'The first is that the reactive regime is genuinely cheaper for '
          'fifteen years, which is longer than most budget cycles, most '
          'political terms and most careers. The second is that the '
          'condition graph gives a warning the spending graph does not: the '
          'condition line turns at year 10 and the spending line not until '
          'year 19, so an organisation monitoring only cost learns nine '
          'years later than one monitoring condition.'],
         items=[
          ('Which paragraph explains why the planned line steps back up?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Scheduled interventions at year 15 and year 25.'),
          ('Which paragraph identifies the crossing point?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'At about year 19, after which reactive spending rises '
           'steeply.'),
          ('Which paragraph notes the warning the condition graph gives '
           'first?', ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 3'], 2,
           'Condition turns at year 10 and spending not until year 19.'),
          ('Reactive condition in year 20: ____________', None, '52',
           'Paragraph 3, after 76 in year 15.'),
          ('Reactive cumulative spending at year 30: ____________ '
           'million', None, '61',
           'Paragraph 5, against 29 million for the planned regime.'),
          ('No intervention restores an asset to ____________ condition.',
           None, 'as-built',
           'Paragraph 2, which is why the planned line ends at 90.')])],
   listen=[
    dict(heading='An asset manager on deterioration curves', part='Part 4',
         task='A lecture on condition and cost', band='l4',
         qtype='Questions 39-44',
         figure=_COND, figure2=_COST,
         script=[
          ('Manager', 'Two graphs, one asset, thirty years, and the only '
           'difference between the two lines on each is the maintenance '
           'policy. I am going to argue that the second graph is the famous '
           'one and the first graph is the useful one.'),
          ('Manager', 'Condition first. Planned regime: it sits between '
           'ninety and a hundred the whole way, and notice it is not flat. '
           'It drifts down and steps up, at year fifteen and year '
           'twenty-five, and those steps are the interventions. Notice also '
           'that it ends at ninety rather than at a hundred, because no '
           'repair returns an asset to as-built. There is a permanent '
           'cost.'),
          ('Manager', 'Reactive regime: eighty-eight at year ten, '
           'seventy-six at fifteen, fifty-two at twenty, twenty-four at '
           'thirty. And the shape is the thing. For the first decade the two '
           'lines are almost on top of each other. Everything that matters '
           'happens in the second half.'),
          ('Manager', 'Now money. For fifteen years the reactive regime is '
           'cheaper, and not marginally: five million against fourteen. If '
           'you reviewed this policy at year fifteen you would conclude it '
           'was working, and I have sat in that meeting.'),
          ('Manager', 'The lines cross at about year nineteen. After that, '
           'reactive runs away: thirty-eight million by year twenty-five, '
           'sixty-one by year thirty, against twenty-nine for planned. Half '
           'the money and an asset in two and a half times the condition.'),
          ('Manager', 'And here is the point I actually came to make. The '
           'condition line turns at year ten. The cost line does not turn '
           'until year nineteen. An organisation watching only its spending '
           'learns about this nine years after an organisation watching '
           'condition, and nine years is the difference between a programme '
           'and an emergency.'),
          ('Manager', 'Which gives you the recommendation, and it is '
           'cheaper than anything else I could suggest. Publish condition, '
           'not spending, and publish it by asset with five years of history '
           'beside it. You do not need to require anybody to spend '
           'differently. You need the decline to be visible while it is '
           'still gentle.'),
          ('Manager', 'One warning about the first graph before you use it '
           'anywhere. The planned line ends at ninety and not at a '
           'hundred, and that gap is permanent. Maintenance slows '
           'deterioration; it does not reverse it. Anybody promising an '
           'asset will be as good as new after a programme is either '
           'talking about replacement or is about to disappoint '
           'somebody.'),
          ('Manager', 'And that permanent gap is why the thirty-year '
           'comparison understates the case. At year thirty the planned '
           'asset still has decades in it and the reactive one is a '
           'replacement decision, which is a cost appearing in neither '
           'graph.')],
         items=[
          ('The planned regime ends at condition',
           ['100', '96', '90', '76'], 2,
           'Because no repair returns an asset to as-built condition.'),
          ('For the first decade the two condition lines are',
           ['far apart', 'almost on top of each other', 'crossing '
            'repeatedly', 'diverging steadily'], 1,
           'Everything that matters happens in the second half.'),
          ('At year fifteen, reactive spending stands at',
           ['5 million', '14 million', '29 million', '38 million'], 0,
           'Against 14 million for the planned regime.'),
          ('The two spending lines cross at about year',
           ['ten', 'fifteen', 'nineteen', 'twenty-five'], 2,
           'After which reactive spending rises steeply.'),
          ('The condition line turns how long before the cost line?',
           ['Two years', 'Five years', 'Nine years', 'Fifteen years'], 2,
           'Year ten against year nineteen.'),
          ('His recommendation is to publish',
           ['spending by year', 'condition by asset with five years of '
            'history', 'whole-life costings', 'inspection reports'], 1,
           'So that the decline is visible while it is still gentle.')])],
   speak=dict(
    part='Part 3', focus='Paying now or paying later',
    intro=('Five or six sentences. Try once to describe a curve that is '
           'flat and then turns.'),
    qs=['Why do organisations put off necessary spending?',
        'Should governments be required to plan further ahead?',
        'Is it reasonable to leave costs to a future government?',
        'How can long-term problems be made visible?'],
    shape=[('answer', 'Because the cost of waiting is flat for about a '
            'decade and then turns sharply.'),
           ('support', 'For fifteen years the cheap policy really is '
            'cheaper.'),
           ('follow-up', 'Which is longer than most budget cycles and most '
            'careers.'),
           ('support', 'The condition of the asset turns nine years before '
            'the spending does.'),
           ('follow-up', 'So an organisation watching only money finds out '
            'nine years late.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Condition and cumulative cost under two regimes',
         prompt=('The graphs below show the condition of an asset and the '
                 'cumulative cost of maintaining it over thirty years under '
                 'two different maintenance regimes. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_COND, figure2=_COST,
         model=[
          'The two line graphs show the condition of a single asset and the '
          'cumulative cost of maintaining it over thirty years, under a '
          'planned and a reactive maintenance regime. Overall, the reactive '
          'regime is both cheaper and comparable in condition for roughly '
          'the first fifteen years, after which it becomes markedly worse on '
          'both measures.',
          'Under the planned regime, condition is held between 90 and 100 '
          'throughout, declining gently and recovering at two points, while '
          'cumulative spending rises steadily and almost linearly to 29 '
          'million by year 30.',
          'Under the reactive regime, condition is similar for the first ten '
          'years, standing at 88 against 93 in year 10, but then falls '
          'sharply: to 76 in year 15, 52 in year 20 and 24 by year 30. '
          'Spending follows the opposite pattern, remaining very low for '
          'fifteen years at just 5 million, and then rising steeply to 38 '
          'million by year 25 and 61 million by year 30.',
          'Taking the two graphs together, the reactive regime costs around '
          'a third of the planned regime at year 15 and more than twice as '
          'much by year 30, by which point the asset is in roughly a '
          'quarter of the condition.'],
         notes=[
          'The answer is organised by regime rather than by graph or by '
          'year, which is the unit 27 lesson at a higher level: each regime '
          'is taken through both visuals in one paragraph so that its story '
          'stays together.',
          'The Overall statement captures the reversal — better on both '
          'measures, then worse on both — which is the only sentence that '
          'needs both graphs and the one most candidates omit.',
          'The final paragraph compares the two at two points in time rather '
          'than describing the whole period again. Two well-chosen moments '
          'carry a reversal better than a continuous narration of it.'],
         criterion=[('Organising by regime rather than by graph',
                     'Coherence and Cohesion'),
                    ('An Overall statement that needs both graphs',
                     'Task Achievement'),
                    ('Comparing at two chosen points rather than '
                     'narrating', 'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a non-linear curve precisely',
    fix=dict(
     text=('The curve rises slowly at first and then it accelerates after '
           '2015. The rate of increase is not constant, so a straight line '
           'would fit the data badly. Between 2015 and 2020 the figure almost '
           'doubled, whereas in the previous five years it had rose by only a '
           'tenth. The curve flattens again after 2021, at a level about three '
           'times the starting figure.'),
     faults=[('it had rose by only a tenth',
              'it had risen by only a tenth',
              'After had the verb takes its past participle: risen.'),
             (('The curve rises slowly at first and then it accelerates after '
               '2015'),
              ('The curve rises slowly at first and then accelerates after '
               '2015'),
              ('The subject is already the curve, so it does not need '
               'repeating in the second half.')),
             ('at a level about three times the starting figure',
              'at a level about three times the starting figure, around 1,400',
              ('A multiple with no figure beside it makes the reader go back '
               'to the chart.'))]),
    explain=('Curves that are flat and then turn need language for the '
             'turn, the rate and the point at which it happens. Vague '
             'movement verbs lose marks here that precision would gain.'),
    examples=['The curve is flat for years and then turns sharply at year '
              'nineteen.',
              'Condition declines gently and recovers at two points.',
              'Spending remains negligible until year fifteen, after which '
              'it accelerates.',
              'The two lines cross at about year nineteen.'],
    task='Rewrite each description so that the turn and its point are '
         'named.',
    items=[('Costs went up a lot.',
            'Cumulative spending is almost flat until year fifteen and then '
            'rises steeply, quadrupling between years twenty and thirty.'),
           ('The condition got worse.',
            'Condition declines gently to year ten and then falls sharply, '
            'losing more than half its value in the following decade.'),
           ('The planned line is steady.',
            'The planned line declines gradually and steps up at years '
            'fifteen and twenty-five.'),
           ('Eventually reactive costs more.',
            'The two cost lines cross at about year nineteen, after which '
            'the reactive regime is permanently more expensive.'),
           ('Both start the same.',
            'The two condition lines are within five points of each other '
            'until year ten and diverge thereafter.')]),
   vocab=[('deterioration', 'the process of getting worse over time'),
          ('as-built', 'in the condition it was in when new'),
          ('planned regime', 'maintenance carried out on a schedule'),
          ('reactive regime', 'maintenance carried out after failure'),
          ('crossing point', 'where two lines meet on a graph'),
          ('running total', 'a figure added up from the start to that point'),
          ('notional', 'used as an example rather than real'),
          ('step change', 'a sudden shift rather than a gradual one')],
   expr=[('The curve is flat for years and then turns sharply at',
          'describes a non-linear shape precisely'),
         ('I have sat in that meeting',
          'claims authority from experience, briefly'),
         ('nine years is the difference between a programme and an '
          'emergency', 'converts a lag into a consequence'),
         ('you need the decline to be visible while it is still gentle',
          'states the purpose of a monitoring choice')],
   trans=['while', 'at which point', 'taken together', 'thereafter'],
  ),

  dict(
   sub='Why backlogs grow',
   step=4,
   read=[
    dict(heading='The budget that is always next year',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'Infrastructure backlogs in developed economies have grown '
          'steadily for forty years, across countries with very different '
          'political systems, levels of wealth and standards of public '
          'administration. A phenomenon that general is unlikely to be '
          'explained by incompetence in any specific place, and the '
          'explanations that survive comparison are all structural. Four of '
          'them recur, they reinforce one another, and none of them requires '
          'anybody involved to be careless or dishonest.',
          'The first is the shape of deterioration itself. Assets hold '
          'condition for a long period and then lose it quickly, which '
          'means that the cost of inaction is negligible for years and then '
          'suddenly is not. Any decision rule evaluated on a horizon shorter '
          'than the flat portion of that curve will recommend deferral every '
          'time, and will appear to have been right every time it is '
          'reviewed. The review therefore confirms the error rather than '
          'catching it, which is a property of the horizon rather than of '
          'the reviewer.',
          'The second is the accounting distinction between capital and '
          'revenue. New construction is capital, is funded from borrowing in '
          'most systems, and is assessed against the asset it creates. '
          'Maintenance is revenue, competes directly with salaries and '
          'services in an annual budget, and creates no asset on any balance '
          'sheet. The distinction is a convention and it determines '
          'outcomes: the same physical work is easier to fund if it can be '
          'described as replacement than as repair. Engineers in several '
          'jurisdictions report redesigning schemes to make that '
          'description accurate, which is a rational response to an '
          'accounting rule and an absurd use of their time.',
          'The third is the asymmetry of visibility: construction '
          'produces an opening, a photograph and an attributable '
          'achievement. Maintenance produces the absence of a failure, '
          'which is not an event and cannot be attributed to anybody. '
          'No minister has been photographed in front of a bridge that '
          'did not collapse, and the incentive consequences of that '
          'are larger than any individual\u2019s preferences. The effect is '
          'visible in the language of budget papers, where new schemes '
          'have names and maintenance has line numbers.',
          'The fourth is horizon mismatch. The consequence of this year’s '
          'deferral arrives in year eleven, by which time the post has '
          'turned over three or four times in most administrations. Nobody '
          'is evading responsibility; the responsibility is genuinely '
          'distributed across people who each acted defensibly, and no audit '
          'process in use identifies a sequence of defensible decisions as a '
          'failure.',
          'These four interact in a way that makes each harder to solve. '
          'Because the flat portion of the curve is long, the capital and '
          'revenue distinction is never tested by an immediate failure; '
          'because failures are not immediate, visibility does not correct '
          'the incentive; because the horizon is long, no individual is '
          'accountable at the point where the evidence appears. The '
          'result is a system in which no single reform addresses the '
          'problem, because each factor is protected by the others.',
          'Several remedies have been proposed and the evidence on them is '
          'uneven. Ring-fencing maintenance budgets works where the '
          'definition of maintenance is tight and fails where it is loose, '
          'for the obvious reason. Multi-year settlements help '
          'substantially, because they extend the horizon over which a '
          'decision is evaluated, and they are resisted by finance '
          'ministries for exactly that reason. A three-year settlement '
          'makes a deferral in year one visible inside the same settlement '
          'period, which is the whole of the mechanism and also the whole '
          'of the objection to it.',
          'The remedy with the best evidence is also the cheapest and the '
          'least discussed, which is mandatory publication of asset '
          'condition. Authorities required to publish a condition index '
          'annually, by asset class, with historical series alongside, shift '
          'spending towards maintenance within two budget rounds. The effect '
          'is not produced by shame: it is produced because deferral stops '
          'being invisible, and invisibility was the mechanism the other '
          'three factors operated through. The published figures also '
          'outlast the people who produced them, which converts a sequence '
          'of unattributable decisions into a visible trajectory that '
          'somebody is now the custodian of.',
          'The limitation of that remedy should be stated, because its '
          'advocates rarely state it. Publication changes behaviour where '
          'there is money to reallocate and does nothing where there is not, '
          'and in the most severely constrained authorities it has produced '
          'better-documented decline rather than less decline. That is not '
          'an argument against it. It is a reason to stop describing it as a '
          'solution to a problem that is partly about the total quantity '
          'of money. The distinction between an allocation problem and a '
          'shortage is the one most arguments in this area fail to make, '
          'and the remedies for the two have almost nothing in common.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['The shape of deterioration', 'Capital and revenue',
            'The asymmetry of visibility', 'Horizon mismatch'], 1,
           'The same work is easier to fund as replacement than as '
           'repair.'),
          ('Choose the best heading for paragraph 6.',
           ['Horizon mismatch', 'How the four factors interact',
            'Remedies and their evidence', 'The limitation'], 1,
           'Each factor makes the others harder to solve.'),
          ('Choose the best heading for paragraph 9.',
           ['Remedies and their evidence', 'Publication of condition',
            'The limitation of publication', 'Horizon mismatch'], 2,
           'Better-documented decline where there is no money to '
           'reallocate.'),
          (
           'The writer believes backlogs are caused mainly by '
           'incompetence.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 says a phenomenon that general is unlikely to '
           'be explained that way.',
           {0: 'Yes would need incompetence; paragraph 1 rejects it '
               'for a general phenomenon.', 2: 'Not Given is wrong because the causes are discussed.'}),
          (
           'The writer believes publication of condition solves the '
           'problem.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 9 says it does nothing where there is no money '
           'to reallocate.',
           {0: 'Yes would need a solution; paragraph 9 names where it '
               'does nothing.', 2: 'Not Given is wrong because publication is evaluated.'}),
          ('Maintenance is classified as ____________ and competes with '
           'salaries in an annual budget.', None, 'revenue',
           'Paragraph 3, whereas construction is capital.'),
          ('Multi-year settlements help because they extend the '
           '____________ over which a decision is evaluated.', None,
           'horizon',
           'Paragraph 7, which is why finance ministries resist them.'),
          ('Publication shifts spending within ____________ budget '
           'rounds.', None, 'two',
           'Paragraph 8, by removing the invisibility of deferral.')])],
   listen=[
    dict(heading='A lecture on infrastructure funding', part='Part 4',
         task='A lecture on why backlogs grow', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'Maintenance backlogs have grown for forty years in '
           'countries with nothing else in common. When a pattern is that '
           'robust across institutions, stop looking for villains and start '
           'looking at structures, which is what this hour is about.'),
          ('Lecturer', 'Structure one is the deterioration curve. Flat for a '
           'decade, then steep. Any decision rule with a horizon shorter '
           'than that flat section recommends deferral, and looks correct '
           'every time it is reviewed. You do not need anybody to be short '
           'sighted; you need the review period to be shorter than the '
           'curve.'),
          ('Lecturer', 'Structure two is accounting. Construction is '
           'capital, borrowed against, and creates an asset. Maintenance is '
           'revenue, and competes with salaries in the same annual pot. The '
           'identical physical work is easier to fund if you can call it '
           'replacement rather than repair, and I have watched engineers '
           'redesign a scheme purely to make that sentence true.'),
          ('Lecturer', 'Structure three is visibility. An opening has a '
           'photograph and a name attached. Maintenance is a failure that '
           'did not happen, which is not an event, cannot be attributed, and '
           'nobody has ever been photographed in front of one.'),
          ('Lecturer', 'Structure four is the horizon. This year’s deferral '
           'arrives in year eleven, three or four post-holders later. Each '
           'of them acted defensibly. No audit process anywhere identifies a '
           'sequence of defensible decisions as a failure, and that is a gap '
           'in audit rather than in ethics.'),
          ('Lecturer', 'Remedies, briefly. Ring-fencing works if the '
           'definition is tight and fails if it is loose. Multi-year '
           'settlements genuinely help, because they lengthen the evaluation '
           'horizon, which is also precisely why finance ministries dislike '
           'them.'),
          ('Lecturer', 'And the one with the best evidence is the dullest: '
           'require publication of asset condition, by class, annually, with '
           'history. Spending shifts within two budget rounds. Not through '
           'shame — through visibility, because invisibility was how the '
           'other three structures did their work. And its limit, which its '
           'supporters never mention: where there is no money to move, you '
           'get better-documented decline.'),
          ('Lecturer', 'Which brings me to the question I would put in an '
           'examination. Is the backlog in a given authority an allocation '
           'problem or a shortage? Those look identical in the figures and '
           'they need opposite remedies, and almost every national debate '
           'I have followed has treated them as one thing.'),
          ('Lecturer', 'The test is straightforward. Look at what the '
           'authority spends on everything else and ask whether there is '
           'anything a reasonable person could move. If there is, '
           'publication will move it. If there is not, you are looking at '
           'a funding question dressed as a management one.')],
         items=[
          ('The lecturer says a pattern that robust means we should look '
           'at', ['villains', 'structures', 'national differences',
            'funding levels'], 1,
           'Because the countries have nothing else in common.'),
          ('A decision rule recommends deferral whenever its horizon is',
           ['longer than the flat section', 'shorter than the flat '
            'section', 'exactly one year', 'set by statute'], 1,
           'And it appears correct every time it is reviewed.'),
          ('Engineers have redesigned schemes in order to call work',
           ['urgent', 'replacement rather than repair', 'capital '
            'maintenance', 'emergency work'], 1,
           'Because the accounting treatment differs.'),
          ('Maintenance is invisible because it produces',
           ['no paperwork', 'a failure that did not happen',
            'no cost', 'no inspection'], 1,
           'Which is not an event and cannot be attributed.'),
          ('He calls the audit gap one of',
           ['ethics', 'audit rather than ethics', 'funding',
            'training'], 1,
           'Since no process identifies a sequence of defensible decisions '
           'as a failure.'),
          ('The limit of mandatory publication is that',
           ['it is expensive', 'where there is no money to move it '
            'produces better-documented decline', 'authorities refuse',
            'the data is unreliable'], 1,
           'Which he says its supporters never mention.')])],
   speak=dict(
    part='Part 3', focus='Decisions that outlast those who make them',
    followup=[(('You say maintenance always loses. Why do governments avoid '
                'long-term spending?'),
               ('Because the accounting and the politics both punish it. '
                'Maintenance appears as current expenditure with nothing to '
                'show, while a new building is capital and has a ribbon. '
                'Change what gets counted as an asset and some of this '
                'corrects itself without anybody becoming more virtuous.')),
              ('Should decisions be reviewed over longer periods?',
               ('Reviewed and published, which matters more. A thirty-year '
                'review that nobody reads changes nothing; an annual statement '
                'of the condition of the stock, in a form that cannot be '
                'presented selectively, creates a number somebody has to '
                'answer for.')),
              (('Who is responsible for a problem that took twenty years to '
                'develop?'),
               ('Nobody, under present arrangements, and that is the problem '
                'rather than an answer to it. Each decision to defer was '
                'individually reasonable, so responsibility has to be '
                'institutional: the duty should attach to the office, with a '
                'published condition record, so the next holder inherits the '
                'evidence.')),
              ('Can institutions be designed to think further ahead?',
               ('Partly, and the mechanisms that work are the boring ones: a '
                'fixed share of budget ring-fenced, a statutory duty with an '
                'audit, and a long-dated reporting requirement. What does not '
                'work is exhortation, or a commission whose findings arrive '
                'after the minister has moved on.'))],
    intro=('Five or six sentences. Try once to say that nobody acted '
           'wrongly and the outcome was still bad.'),
    qs=['Why do governments avoid long-term spending?',
        'Should decisions be reviewed over longer periods?',
        'Who is responsible for a problem that took twenty years to '
        'develop?',
        'Can institutions be designed to think further ahead?'],
    shape=[('answer', 'Mostly because the review period is shorter than the '
            'problem.'),
           ('support', 'An asset holds its condition for a decade and then '
            'loses it quickly.'),
           ('follow-up', 'So deferring looks correct every time anybody '
            'checks.'),
           ('support', 'And the consequence arrives three post-holders '
            'later.'),
           ('follow-up', 'Which means responsibility is genuinely '
            'distributed, rather than being evaded by anybody.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Premise named, and the strongest argument last',
         prompt=('Should maintenance budgets be protected by law? '
                 'Brainstorm ten ideas, run the six tests, name the premise '
                 'under each survivor, and order so that the strongest comes '
                 'last. Do not write the essay yet.'),
         plan=('Maintenance spending should be protected by a publication '
               'requirement rather than by a spending floor, because every '
               'argument for a floor rests on a premise about definition '
               'that three attempts have now falsified',
               [('A spending floor rests on a premise that maintenance can '
                 'be defined tightly enough to protect',
                 ['the same work can be classified as repair or renewal',
                  'three jurisdictions met their floors by '
                  'reclassifying']),
                ('A publication requirement rests on a premise about '
                 'visibility that the evidence supports',
                 ['authorities publishing condition shift spending in two '
                  'rounds',
                  'the effect appears without any requirement to spend'])]),
         notes=[
          'The two premises here are of different kinds: one is about '
          'whether a term can be defined, the other about whether people '
          'respond to information. Marking that difference tells you which '
          'one can be settled by evidence and which by experience of '
          'drafting.',
          'Ordering so the strongest comes last matters more in a '
          'to-what-extent essay than in a discuss-both. Here the publication '
          'argument is stronger because it has evidence behind it, so it '
          'goes second and the conclusion follows from it directly.',
          'Note what the plan does not claim: that publication solves the '
          'problem. It claims only that it outperforms the alternative being '
          'proposed. Narrowing a claim to what you can support is how a '
          'band 8 answer differs from a confident band 6.5 one.'],
         criterion=[('Distinguishing a definitional premise from an '
                     'empirical one', 'Task Response'),
                    ('Claiming only what the evidence supports',
                     'Task Response')],
         instruct='  Produce the brainstorm, the tests, the premises and the '
                  'order. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Incentive structures and time horizons',
    explain=('Explaining institutional behaviour requires sentences that '
             'hold an incentive and a timescale together. These patterns do '
             'it without implying bad faith.'),
    examples=['Deferral is rational for every individual budget holder and '
              'ruinous in aggregate.',
              'The consequence arrives three post-holders later.',
              'Any rule evaluated on a shorter horizon than the curve '
              'recommends deferral.',
              'Nobody is evading responsibility; it is genuinely '
              'distributed.'],
    task='Rewrite each explanation so that it names an incentive and a '
         'timescale.',
    items=[('Managers are short sighted.',
            'Managers are assessed over three years on a cost curve that '
            'stays flat for ten.'),
           ('They should have fixed it earlier.',
            'Each annual decision to defer was cheaper than acting, and the '
            'cumulative consequence arrived four post-holders later.'),
           ('Politicians prefer new projects.',
            'New construction produces an attributable achievement within a '
            'term; maintenance produces a failure that does not happen.'),
           ('The rules encourage waste.',
            'Classifying work as capital makes it borrowable, so a scheme '
            'redesigned to qualify is funded and the cheaper repair is '
            'not.'),
           ('Nobody takes responsibility.',
            'Responsibility is distributed across people who each acted '
            'defensibly, and no audit identifies that sequence as a '
            'failure.')]),
   vocab=[('capital spending', 'money spent creating a lasting asset'),
          ('revenue spending', 'money spent on running costs each year'),
          ('ring-fenced', 'protected from being spent on anything else'),
          ('political cycle', 'the period between elections'),
          ('settlement', 'a funding allocation agreed for a period'),
          ('horizon', 'how far ahead a decision is assessed'),
          ('asset class', 'a group of assets of the same kind'),
          ('creditable', 'able to be claimed as an achievement by somebody')],
   expr=[('Deferral is rational for every individual budget holder and '
          'ruinous in aggregate', 'states a collective action problem'),
         ('stop looking for villains and start looking at structures',
          'redirects an explanation'),
         ('a gap in audit rather than in ethics',
          'relocates a failure to a process'),
         ('where there is no money to move, you get better-documented '
          'decline', 'states the limit of a reform honestly')],
   trans=['consequently', 'which in turn', 'as a result',
          'these four interact'],
  ),

  dict(
   sub='Whether a rule would hold',
   step=5,
   read=[
    dict(heading='Three attempts to protect maintenance spending',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Three jurisdictions have attempted to protect maintenance '
          'spending by binding rule rather than by policy, over a period '
          'long enough for the results to be assessed. All three rules are '
          'still formally in force. None of them is producing the effect it '
          'was enacted for, and the three failed in three different ways, '
          'which is more instructive than a single failure would have been. '
          'Each failure mode is generic to a form of rule rather than '
          'specific to a drafter, which is the finding that matters for '
          'anybody designing a fourth attempt.',
          'The first set a minimum proportion of the transport budget to be '
          'spent on maintenance: not less than forty per cent, measured '
          'annually, with a report to the legislature. Compliance has been '
          'complete in every year since enactment, and the maintenance '
          'backlog has grown by sixty per cent over the same period. '
          'Both statements come from the same annual report and have never '
          'been printed on the same page of it.',
          'The mechanism is definitional. A rule that protects "maintenance" '
          'must define it, and the boundary between maintaining an existing '
          'asset and renewing it is a matter of engineering judgement with a '
          'wide legitimate range. Works that had previously been classified '
          'as renewal were reclassified as maintenance, the proportion was '
          'met, and no individual reclassification was improper. An audit '
          'commissioned in the seventh year examined forty-one such '
          'decisions and found all of them defensible on their own '
          'terms.',
          'The second jurisdiction anticipated this and defined maintenance '
          'by a schedule of specified activities. That rule has had a '
          'measurable effect on what is done and a perverse effect on what '
          'is not: spending on the listed activities rose, spending on '
          'unlisted activities fell by more, and the asset classes omitted '
          'from the schedule — principally culverts and drainage — have '
          'deteriorated faster than before the rule existed. The total '
          'spend on maintenance was unchanged; what moved was its '
          'distribution across asset classes.',
          'That is the general failure mode of a tightly specified '
          'protection and it is predictable in advance. Any list creates two '
          'categories, and where a budget is fixed, protecting the first '
          'category necessarily exposes the second. The drafters were aware '
          'of this and included a review clause requiring the schedule to be '
          'updated every three years. It has been updated once in eleven.',
          'The third approach was different in kind. Rather than protecting '
          'spending, it required annual publication of asset condition by '
          'class, with a five-year historical series, and audit of the '
          'figures. It imposed no obligation to spend anything. Maintenance '
          'spending rose by twenty-three per cent over the following six '
          'years and the backlog fell for the first time in two decades. '
          'No authority was penalised, and none was instructed to spend '
          'anything at all.',
          'The explanation offered by the officials involved is consistent '
          'and is worth taking seriously because it was not what the '
          'drafters expected. Publication did not shame anybody. What it did '
          'was make deferral legible inside the organisation: a chief '
          'executive could see the consequence of a decision taken three '
          'posts earlier, and finance committees began asking about the '
          'trajectory rather than about the annual figure. The change was '
          'therefore in what questions got asked internally, which is '
          'where almost all of the effect of transparency measures turns '
          'out to be.',
          'The third case has limits that its advocates have been slow to '
          'acknowledge. In the two most financially constrained authorities '
          'in the same jurisdiction, publication produced no spending shift '
          'at all, for the straightforward reason that there was nothing to '
          'reallocate. Those authorities now publish an exceptionally clear '
          'record of decline, which is better than an unclear one and is not '
          'what the policy was for.',
          'The comparative lesson is about what kind of rule survives '
          'contact with an institution. Rules that specify an input are met '
          'by redefining the input. Rules that specify a list are met by '
          'moving activity off the list. Rules that require information to '
          'be produced have nothing to redefine, because the quantity being '
          'reported is a physical property of an asset that somebody '
          'measures. That is the most useful generalisation available '
          'from the comparison, and it is narrower than it first '
          'appears.',
          'That is not a general argument for transparency over regulation, '
          'and it would be wrong to read it as one. It is an argument about '
          'a specific kind of problem: where the behaviour is driven by '
          'invisibility rather than by preference, the effective rule is the '
          'one that removes the invisibility, and where it is driven by '
          'preference or by shortage, information changes nothing and only '
          'money or prohibition will. Distinguishing the two cases before '
          'choosing an instrument is the step all three of these '
          'jurisdictions skipped.'],
         items=[
          ('Which paragraph explains the definitional failure of the first '
           'rule?', ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Renewal reclassified as maintenance, with no improper '
           'individual decision.'),
          ('Which paragraph describes the effect on unlisted asset '
           'classes?', ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 1,
           'Culverts and drainage deteriorating faster than before.'),
          ('Which paragraph explains why publication worked?',
           ['Paragraph 6', 'Paragraph 7', 'Paragraph 8',
            'Paragraph 9'], 1,
           'Deferral became legible inside the organisation.'),
          ('The writer believes the first rule was broken.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 reports complete compliance in every year.',
           {0: 'Yes would need a breach; paragraph 2 reports complete '
               'compliance.', 2: 'Not Given is wrong because compliance is reported year '
               'by year.'}),
          (
           'The writer believes transparency is generally preferable '
           'to regulation.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says it would be wrong to read the '
           'argument that way.',
           {0: 'Yes would need that preference; the final paragraph '
               'warns against reading it so.', 2: 'Not Given is wrong because the writer says how not to '
               'read him.'}),
          ('Under the first rule the backlog grew by ____________ per '
           'cent.', None, 'sixty',
           'Paragraph 2, while compliance was complete throughout.'),
          ('The second rule’s schedule was to be updated every three years '
           'and has been updated ____________ in eleven.', None, 'once',
           'Paragraph 5, despite a review clause.'),
          ('Under the third approach, maintenance spending rose by '
           '____________ per cent in six years.', None, 'twenty-three',
           'Paragraph 6, with no obligation to spend anything.')])],
   listen=[
    dict(heading='A treasury official and an engineer disagree',
         part='Part 4', task='A recorded exchange', band='l4',
         qtype='Questions 67-72',
         script=[
          ('Chair', 'Ms Oyelaran-Battersby is a treasury official. Professor '
           'Nakamura-Lindgren works on asset management.'),
          ('Nakamura-Lindgren', 'I will start with the concession, which is '
           'that my profession has asked for a spending floor for twenty '
           'years and the evidence is now against us. Three jurisdictions '
           'tried it. All three complied. Two of them have worse backlogs '
           'than before.'),
          ('Oyelaran-Battersby', 'Then I will match that, because the usual '
           'treasury line is that this proves rules do not work and I do not '
           'believe it. The third approach worked. Publication, audit, no '
           'spending obligation, and a twenty-three per cent shift in six '
           'years. We resisted that one too, and we were wrong.'),
          ('Nakamura-Lindgren', 'Why did you resist it?'),
          ('Oyelaran-Battersby', 'Because it looked like a reporting burden '
           'with no mechanism. I could not see what would make anybody '
           'spend differently. I still think that was a reasonable thing to '
           'think and it was wrong.'),
          ('Nakamura-Lindgren', 'The mechanism turned out to be internal '
           'rather than public. Nobody was shamed. What happened is that a '
           'chief executive could suddenly see the consequence of a decision '
           'taken three post-holders earlier, and a finance committee '
           'started asking about the trajectory instead of the annual '
           'figure.'),
          ('Oyelaran-Battersby', 'Which is the part I would want in any '
           'advice we give, and here is my condition. It does not work where '
           'there is no money. The two tightest authorities in that '
           'jurisdiction now publish a beautifully clear record of decline '
           'and have changed nothing, because there was nothing to move.'),
          ('Nakamura-Lindgren', 'I accept that and I would put it more '
           'sharply than you have. Publication is a reallocation mechanism. '
           'Where the problem is allocation it works, and where the problem '
           'is the total it is a diagnostic rather than a cure, and my '
           'profession has been selling it as a cure.'),
          ('Oyelaran-Battersby', 'Then can we agree the sentence? '
           'Publication for every authority, because the diagnostic is worth '
           'having anyway, and no spending floor, because all three attempts '
           'were met by redefinition.'),
          ('Nakamura-Lindgren', 'Agreed, and I would add one line that will '
           'be unpopular with both of us. Where publication shows decline '
           'and there is no money, somebody has to decide what to stop '
           'maintaining, and no jurisdiction in this study has a process for '
           'that decision.'),
          ('Oyelaran-Battersby', 'No, and I would rather design one before '
           'we need it than afterwards, which is a sentence my own '
           'department has never once acted on.'),
          ('Nakamura-Lindgren', 'Then let us write it together, with my '
           'name on the engineering and yours on the money, because a '
           'paper about stopping maintaining things will be ignored unless '
           'it is uncomfortable for both of the people who signed it.')],
         items=[
          ('Nakamura-Lindgren concedes that',
           ['publication fails', 'the spending floor his profession asked '
            'for has failed', 'backlogs are shrinking',
            'engineers were ignored'], 1,
           'Three jurisdictions complied and two have worse backlogs.'),
          ('Oyelaran-Battersby concedes that the treasury',
           ['was right to resist', 'was wrong to resist the publication '
            'approach', 'has no role', 'should set a floor'], 1,
           'Which produced a twenty-three per cent shift in six years.'),
          ('Why did she originally resist it?',
           ['It was expensive', 'It looked like a reporting burden with no '
            'mechanism', 'It was unlawful', 'Engineers opposed it'], 1,
           'A view she still calls reasonable and wrong.'),
          ('The mechanism turned out to be',
           ['public shaming', 'internal visibility of long-run '
            'consequences', 'legal obligation', 'ministerial '
            'direction'], 1,
           'Finance committees asking about trajectory rather than annual '
           'figures.'),
          ('Nakamura-Lindgren characterises publication as',
           ['a cure', 'a reallocation mechanism, and a diagnostic where '
            'the total is the problem', 'a reporting burden',
            'a substitute for funding'], 1,
           'And says his profession has been selling it as a cure.'),
          ('What does he add that will be unpopular?',
           ['Floors should be tried again', 'Somebody must decide what to '
            'stop maintaining', 'Publication should be voluntary',
            'Audit is unnecessary'], 1,
           'And no jurisdiction in the study has a process for that '
           'decision.')])],
   speak=dict(
    part='Part 3', focus='Rules that bind future decisions',
    sounds=[('Infrastructure vocabulary is long, dull and front-loaded, which '
             'is useful: MAINtenance, REsurfacing, DEpreciation on the fourth, '
             'BACKlog on the first.'),
            ('The two words that decide this unit are a stress pair: to deFER '
             'and a DEferral, to negLECT and NEGlect. Noun first syllable, '
             'verb second, as usual.'),
            ('Practise the sentence the repair cost eleven thousand and the '
             're-felt would have cost two with the two figures stressed and '
             'nothing else.'),
            ('Long nominal chains are the hazard here: the condition of the '
             'public building stock. Say it as two chunks and the listener '
             'keeps the sentence.'),
            ('Record ninety seconds on paying now or paying later. Find your '
             'longest noun phrase and break it in two.')],
    intro=('The hardest turn in the unit. Try once to say that a rule was '
           'complied with and defeated.'),
    qs=['Can a government bind its successors?',
        'Do rules about spending work?',
        'Is it better to require information or to require action?',
        'What should happen when there is not enough money for '
        'everything?'],
    shape=[('answer', 'Rules about spending tend to be complied with and '
            'defeated at the same time.'),
           ('support', 'One jurisdiction met a forty per cent floor every '
            'year while its backlog grew by sixty.'),
           ('follow-up', 'The works were reclassified, and no individual '
            'decision was improper.'),
           ('support', 'What worked instead was requiring the condition to '
            'be published.'),
           ('follow-up', 'Because there is nothing to redefine about a '
            'measurement of an asset.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should maintenance be legally required before new '
                 'building?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some say governments should be legally required to '
                 'maintain existing infrastructure before building new. To '
                 'what extent do you agree? Write at least 250 words.'),
         model=[
          'I agree with the aim and disagree with the instrument, and the '
          'disagreement rests on evidence rather than on principle: three '
          'jurisdictions have now tried requirements of this kind, all three '
          'complied with them, and two have larger backlogs than before.',
          'The aim is well founded. Deterioration is non-linear, so deferral '
          'moves a small cost from this decade into a much larger one in the '
          'next, and the institutional pressures all run one way: '
          'maintenance is the only budget line whose reduction produces no '
          'complaint this year, and its consequence arrives three '
          'post-holders later. Left alone, every authority defers, and the '
          'forty-year record across unrelated countries shows that this is '
          'structural rather than a local failing.',
          'The difficulty is that a legal requirement must define what it '
          'protects. One jurisdiction required forty per cent of the '
          'transport budget to go to maintenance; compliance was complete '
          'every year and the backlog grew by sixty per cent, because the '
          'boundary between maintenance and renewal is a matter of '
          'engineering judgement and works were reclassified across it '
          'without any individual decision being improper. A second '
          'jurisdiction defined maintenance by a schedule of activities, '
          'and spending on everything omitted from the schedule — notably '
          'drainage — fell faster than before the rule existed.',
          'The obvious rebuttal is that these are drafting failures and a '
          'better-drafted rule would hold. I do not think that survives the '
          'pattern. Both failures are generic: a rule naming an input is met '
          'by redefining the input, and a rule naming a list is met by '
          'moving activity off the list, and no amount of care removes the '
          'judgement that makes both possible.',
          'What has worked is a requirement of a different kind. The third '
          'jurisdiction required annual publication of asset condition, '
          'audited, with no obligation to spend at all, and maintenance '
          'spending rose by twenty-three per cent while the backlog fell for '
          'the first time in twenty years. The reason is that a condition '
          'measurement has nothing to redefine. To the extent that I agree '
          'with the proposition, then, it is that the obligation should be '
          'to publish rather than to spend — with the caveat that where '
          'there is no money to reallocate, this produces a clearer record '
          'of decline and nothing else.'],
         notes=[
          'The first sentence separates aim from instrument and says the '
          'disagreement is evidential. That tells the examiner immediately '
          'that the essay has a position and a reason for it.',
          'Paragraph 4 raises the strongest rebuttal — better drafting — '
          'and answers it by showing both failures are generic rather than '
          'accidental. This is structure 9 with the rebuttal defeated '
          'rather than conceded, which is the harder version.',
          'The final clause states the limitation of the writer’s own '
          'recommendation. Ending on a caveat rather than a flourish is '
          'what distinguishes an assessment from an advocacy piece.'],
         model65=[
                  'Some say governments should be legally required to '
                  'maintain what they have before building anything '
                  'new. I agree with the principle, though a law is a '
                  'blunt instrument.',
                  'The case is strong. Maintenance delayed is more '
                  'expensive later, and a bridge or a school allowed '
                  'to decay has to be replaced at many times the '
                  'cost of keeping it. Yet budgets are annual and '
                  'openings are photographed, so maintenance is the '
                  'first thing cut.',
                  'But a legal requirement has problems. Condition is '
                  'hard to define in a way a court could enforce, and '
                  'a government that cannot afford either maintenance '
                  'or building would simply be in breach. A rule that '
                  'forbids new building also freezes a city that is '
                  'still growing.',
                  'I think the better answer is to publish condition '
                  'every year, in a form that cannot be presented '
                  'selectively, and to require a maintenance plan to '
                  'be funded before a new project is approved. That '
                  'changes the incentive without removing the '
                  'judgement.',
                  ],
         gap65=[
                'It explains why the asymmetry of visibility produces '
                'the backlog, so the remedy follows from the '
                'diagnosis.',
                'It says where publication does nothing, which is the '
                'limit of the transparency argument.',
                'It distinguishes a duty that can be audited from a '
                'prohibition that cannot.',
                ],
         criterion=[('Separating aim from instrument on evidential '
                     'grounds', 'Task Response'),
                    ('Answering the rebuttal by showing a failure is '
                     'generic', 'Task Response'),
                    ('Stating the limitation of your own recommendation',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Institutional design and circumvention',
    explain=('Describing how a rule was complied with and defeated requires '
             'care, because the obvious phrasing implies dishonesty. These '
             'patterns describe circumvention neutrally.'),
    examples=['Each rule was honoured by reclassifying the spending it '
              'governed.',
              'Compliance was complete and the backlog grew by sixty per '
              'cent.',
              'No individual reclassification was improper.',
              'A rule naming an input is met by redefining the input.'],
    task='Rewrite each sentence so that it describes circumvention without '
         'alleging bad faith.',
    items=[('They cheated the rule.',
            'The requirement was met by classifying as maintenance works '
            'previously recorded as renewal.'),
           ('The rule was useless.',
            'Compliance was complete in every year and the backlog grew by '
            'sixty per cent over the same period.'),
           ('They ignored the drainage.',
            'Spending on asset classes omitted from the schedule fell faster '
            'after the rule than before it.'),
           ('The definition was deliberately vague.',
            'The boundary between maintenance and renewal is a matter of '
            'engineering judgement with a wide legitimate range.'),
           ('Better rules would fix it.',
            'Both failure modes are generic to the form of rule rather than '
            'to its drafting.')]),
   vocab=[('commitment device', 'a rule that binds a future decision'),
          ('spending floor', 'a minimum that must be spent'),
          ('attached list', 'a list forming part of a rule'),
          ('review clause', 'a provision requiring a rule to be '
           'revisited'),
          ('readable from outside', 'understandable to somebody not '
           'involved'),
          ('trajectory', 'the direction and rate of a change over time'),
          ('diagnostic', 'something that reveals a problem without '
           'solving it'),
          ('generic', 'belonging to the kind rather than the instance')],
   expr=[('Each rule was honoured by reclassifying the spending it '
          'governed', 'describes compliance that defeats a rule'),
         ('no individual reclassification was improper',
          'rules out bad faith while keeping the finding'),
         ('a reallocation mechanism, not a cure',
          'states what an instrument can and cannot do'),
         ('I would rather design one before we need it than afterwards',
          'proposes a process for a decision nobody wants')],
   trans=['admittedly', 'nevertheless', 'in short',
          'the comparative lesson'],
  ),
 ],
 technique=dict(
  title='Two regimes, not two years: the structuring choice again',
  body=('Unit 27 taught you to organise two maps by zone rather than by '
        'date. The same choice returns here in a harder form, because two '
        'line graphs sharing an x-axis invite you to walk along the years, '
        'and the years are not the comparison. Where the two visuals '
        'describe the same entity under two treatments — two regimes, two '
        'policies, two countries, two methods — the treatment is the '
        'structuring dimension and the axis is only the setting. Take each '
        'treatment through both graphs in one paragraph, so that its story '
        'stays together, and reserve the final paragraph for the comparison '
        'that needs both. If you organise by year instead, you will write '
        '"in year 15" four times and never once say what the difference '
        'between the regimes actually is.'),
  panel=[('Identify the treatment',
          'What is being varied? That is your structuring dimension, '
          'whatever the x-axis says.'),
         ('One paragraph per treatment, both graphs',
          'Condition and cost for the planned regime together, then both '
          'for the reactive one.'),
         ('Find the crossing',
          'Where two lines cross, or a ranking reverses, is the main '
          'feature on almost every chart of this kind.'),
         ('Save one comparison for the end',
          'The sentence that needs both graphs. Without it the answer is '
          'two descriptions.')],
  task='Take the two graphs in cycle 3. Write the structuring choice you '
       'would make and why, then the closing comparison that needs both.',
  qs=['What is being varied between the two lines?',
      'Would you organise by regime or by year, and why?',
      'Where does the ranking reverse on each graph?',
      'Write the Overall statement that covers both graphs.',
      'Write the closing sentence that neither graph alone supports.']),
 outlining=dict(
  title='The premise test on an institutional argument',
  body=('Arguments about institutions have a characteristic premise that is '
        'almost never stated: that the people inside them will behave as the '
        'rule intends. Nearly every proposal for a new rule rests on it, and '
        'it is the premise most often false. When you are planning an essay '
        'about a rule, a target, a requirement or a ban, write the premise '
        'in the form "this works if people in the organisation respond by '
        'doing X rather than Y", and then ask what Y would actually be. Y is '
        'usually reclassifying something, moving activity outside the '
        'definition, or meeting the letter of the measure. An essay that '
        'names Y before the reader thinks of it is an essay that cannot be '
        'ambushed.'),
  frame=('Maintenance spending should be protected by a publication '
         'requirement rather than by a spending floor, because every '
         'argument for a floor rests on a premise about definition that '
         'three attempts have now falsified',
         [('A spending floor rests on a premise that maintenance can be '
           'defined tightly enough to protect',
           ['the same work can be classified as repair or renewal',
            'three jurisdictions met their floors by reclassifying']),
          ('A publication requirement rests on a premise about visibility '
           'that the evidence supports',
           ['authorities publishing condition shift spending in two rounds',
            'the effect appears without any requirement to spend'])]),
  task='For the cycle 4 prompt, write the behavioural premise under each '
       'proposal you are considering, then write what the organisation '
       'would do instead if it wished to comply without changing.',
  qs=['What does your rule assume people will do?',
      'What is the cheapest way to comply without doing that?',
      'Has that happened anywhere, and what was the result?',
      'Does your proposal survive once you have named the alternative?',
      'Is there a version of the rule with nothing to redefine?'],
  answers=['usually that a category will be respected as the drafter '
           'intended',
           'reclassification, almost always, and it is lawful',
           'the three jurisdictions in the cycle 5 passage',
           'if it does not, you have found your essay rather than lost it',
           'a measurement requirement, which is why it is the '
           'recommendation']),
 candos=['I can read a defect procedure for the measurement that sets the '
         'response',
         'I can organise two graphs by treatment rather than by year',
         'I can describe a curve that is flat and then turns sharply',
         'I can name the behavioural premise under a proposed rule',
         'I can describe circumvention without alleging bad faith'],
 tip=('When two graphs share an x-axis, the thing being varied between the '
      'lines is your structuring dimension — not the axis. Organise by '
      'regime, not by year.'),
)
