# -*- coding: utf-8 -*-
"""Unit 51 - Causation and Policy. IELTS Volume 6, band 7.5."""

_ITS = dict(kind='line',
            title='Hospital admissions for respiratory illness',
            sub='per 100,000, Marchwood and the comparison region, with the '
                'clean air zone introduced in year 0',
            ylab='admissions per 100,000',
            x=['-4', '-3', '-2', '-1', '0', '+1', '+2', '+3', '+4'],
            series=[('Marchwood (policy introduced)',
                     [412, 396, 381, 368, 352, 338, 327, 319, 314]),
                    ('Comparison region (no policy)',
                     [409, 394, 380, 366, 351, 341, 333, 328, 325])])

UNIT = dict(
 n=51, vol=6, level='C1', band='7.5',
 theme='Causation and Policy',
 opener=(
   'The last volume opens on the question that decides most arguments about '
   'evidence and is almost never asked out loud: what would have happened '
   'anyway. A line that falls after a policy is not evidence that the policy '
   'did it, and the Task 1 problem in cycle 3 is a chart where the whole '
   'argument sits in the second line rather than the first. From there the '
   'unit works out to the assumption underneath every causal estimate — '
   'the one nobody can test — and to the question of what a government '
   'should do while it remains untested.'),

 cycles=[
  dict(
   sub='Responding to an evaluation',
   step=2,
   read=[
    dict(heading='How a policy is evaluated',
         kind='Official guidance',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('Evaluation guidance is read for what the evaluation will '
                'not do',
                ['Every published evaluation protocol states its scope, and '
                 'the sentence that matters is the one naming what falls '
                 'outside it.',
                 'Find that sentence before anything else. A submission '
                 'about something the review has excluded is not weighed '
                 'and found wanting; it is returned, and the deadline does '
                 'not stop while you redraft.']),
         paras=[
          'Every programme costing more than four million pounds is '
          'evaluated at three years. It asks whether the programme achieved '
          'its stated outcome measure, whether that outcome can be '
          'attributed to the programme rather than to anything else '
          'happening at the time, and whether the cost per unit of outcome '
          'is within the projected range.',
          'It does not ask whether the stated outcome was the right outcome '
          'to pursue. That question belongs to the policy appraisal stage, '
          'which happens before a programme begins and is not reopened '
          'here. Submissions arguing that the programme aimed at the wrong '
          'thing are returned rather than considered, and the return does '
          'not pause the submission window.',
          'The attribution question consumes most of the work and is the '
          'least understood outside the profession. Showing that an outcome '
          'improved after a programme began establishes almost nothing, '
          'because most outcomes government cares about were already '
          'moving. The evaluation must construct a comparison: what the '
          'outcome would have done without the programme.',
          'Three methods are accepted: a comparison region not receiving '
          'the programme; a comparison group selected on criteria agreed '
          'before the programme started; or, where the programme was '
          'rolled out in phases, the areas that had not yet received it. '
          'Any other method needs the panel’s agreement in advance.',
          'Submissions from the public are invited for eight weeks and must '
          'address one of the three questions above. The panel must record '
          'what it did with each piece of evidence received, whether or not '
          'it changed the finding.',
          'The report is published in full, including any objection a panel '
          'member puts on the record. Where the panel cannot answer the '
          'attribution question it must say so rather than offer a '
          'qualified answer, and about one evaluation in six ends that '
          'way.'],
         items=[
          ('Programmes are evaluated at ____________ years.', None, 'three',
           'Paragraph 1, where the cost threshold is also given.'),
          ('The evaluation does not ask',
           ['whether the outcome improved',
            'whether the stated outcome was the right one to pursue',
            'what the programme cost', 'who received it'], 1,
           'Paragraph 2: that belongs to the appraisal stage and is not '
           'reopened.'),
          ('A submission arguing the programme aimed at the wrong thing is',
           ['weighed and rejected', 'returned rather than considered',
            'passed to ministers', 'held over'], 1,
           'Paragraph 2, and the return does not pause the window.'),
          ('How many comparison methods are accepted without prior '
           'agreement?', ['two', 'three', 'four', 'five'], 1,
           'Paragraph 4: a comparison region, a comparison group, or '
           'phased areas.'),
          ('Submissions are invited for ____________ weeks.', None,
           'eight', 'Paragraph 5, and must address one of the three '
           'questions.'),
          ('Where attribution cannot be answered, the panel must',
           ['give a qualified answer', 'say so', 'commission more work',
            'defer'], 1,
           'Paragraph 6, which happens in about one evaluation in six.')]),
    dict(heading='Submitting evidence to a review',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Obtain the terms of reference before drafting anything. They name '
          'the outcome measure the evaluation is using, and a submission '
          'addressed to a different measure is out of scope however good the '
          'evidence in it. The terms of reference are published on the day '
          'the window opens and not before.',
          'Register your intention to submit within the first four weeks. '
          'Registration is not a commitment and costs nothing, and the '
          'panel uses the register to decide whether to extend the window, '
          'which it has done in four of the last eleven evaluations.',
          'Prepare an evidence bundle rather than a letter. Each piece of '
          'evidence needs a source, a date, and one sentence saying which of '
          'the three questions it bears on. Evidence without that sentence '
          'is logged as received and is not read by the panel member '
          'responsible for that question.',
          'Submit by the closing date, in a single file. Late submissions '
          'are refused and the refusal is automatic rather than '
          'discretionary, so nobody at the secretariat has the power to '
          'waive it however good the reason. The panel acknowledges within '
          'ten working days and records what it did with each item in the '
          'published report, so check the report rather than waiting to be '
          'told.'],
         items=[
          ('Obtain the ____________ of reference before drafting.', None,
           'terms',
           'Paragraph 1: they name the outcome measure in use.'),
          ('Register your intention within the first ____________ weeks.',
           None, 'four',
           'Paragraph 2, which the panel uses to decide on an extension.'),
          ('Prepare an evidence ____________ rather than a letter.', None,
           'bundle',
           'Paragraph 3, with a source and date for each item.'),
          ('The panel acknowledges within ____________ working days.',
           None, 'ten',
           'Paragraph 4, with each item recorded in the published '
           'report.')])],
   listen=[
    dict(heading='Submitting evidence to a policy review', part='Part 1',
         task='A call to an evaluation secretariat', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Evaluation secretariat, Hildegarde speaking.'),
          ('Caller', 'Hello. I want to submit evidence to the Marchwood '
           'clean air review.'),
          ('Officer', 'Of course. Have you seen the terms of reference?'),
          ('Caller', 'I have not.'),
          ('Officer', 'Then start there, because they name the outcome '
           'measure. For Marchwood it is hospital admissions for '
           'respiratory illness, per hundred thousand.'),
          ('Caller', 'My evidence is about asthma inhaler prescriptions.'),
          ('Officer', 'That is a different measure, so a submission framed '
           'around it is out of scope and comes back. What you can do is '
           'offer it as bearing on the attribution question rather than the '
           'outcome question.'),
          ('Caller', 'Meaning?'),
          ('Officer', 'Meaning do not say "the policy worked, look at '
           'prescriptions". Say "prescriptions in the comparison region moved '
           'differently, which bears on whether admissions can be attributed '
           'to the zone". Same evidence, inside the scope.'),
          ('Caller', 'That is a useful distinction. What is the reference '
           'number?'),
          ('Officer', 'EV dash two one four seven.'),
          ('Caller', 'Two one four seven. And the deadline?'),
          ('Officer', 'The window is eight weeks and closes on the '
           'nineteenth of September.'),
          ('Caller', 'September the nineteenth.'),
          ('Officer', 'And register your intention in the first four weeks. '
           'It commits you to nothing and we use the register to decide '
           'whether to extend.'),
          ('Caller', 'Does it get extended?'),
          ('Officer', 'Four times out of the last eleven. Not something to '
           'rely on.'),
          ('Caller', 'Understood. How should it be set out?'),
          ('Officer', 'As a bundle, not a letter. Source and date on every '
           'item, and one sentence per item saying which question it bears '
           'on.'),
          ('Caller', 'And if I leave that sentence out?'),
          ('Officer', 'It is logged as received and the panel member for '
           'that question never reads it. That is the single commonest way '
           'good evidence gets wasted here.'),
          ('Caller', 'Can I send the table as a spreadsheet?'),
          ('Officer', 'Send it as a spreadsheet and as a printed table in '
           'the bundle. The panel member reads the bundle and the analyst '
           'reads the spreadsheet, and they are not the same person.'),
          ('Caller', 'Both, then. One file?'),
          ('Officer', 'One file, by the nineteenth. Late is refused '
           'automatically, and nobody here has the power to waive it.')],
         items=[
          ('Outcome measure in use: hospital ____________ for respiratory '
           'illness', None, 'admissions',
           'Per hundred thousand, as the terms of reference specify.'),
          ('The caller’s evidence should be offered as bearing on the '
           '____________ question.', None, 'attribution',
           'Rather than on the outcome question, which would be out of '
           'scope.'),
          ('Reference number: EV-____________', None, '2147',
           'Given when the caller asks for it.'),
          ('Window closes: ____________ September', None, '19',
           'Eight weeks from the day the window opened.'),
          ('Register your intention within ____________ weeks.', None,
           'four',
           'Which the panel uses to decide whether to extend the '
           'window.'),
          ('Each item needs a source, a date and one ____________ saying '
           'which question it bears on.', None, 'sentence',
           'Without it the item is logged but never read.')])],
   speak=dict(
    part='Part 1', focus='Decisions that changed something where you live',
    intro=('Two or three sentences each. Name the actual decision and the '
           'actual change.'),
    qs=['Have there been changes where you live in the last few years?',
        'Did any of them come from a government decision?',
        'Do people generally notice such changes?',
        'Are you consulted about them?'],
    shape=[('answer', 'Two, and only one of them was anybody’s decision.'),
           ('support', 'They closed the road through the centre in 2022.'),
           ('follow-up', 'The other change was the bank leaving, which '
            'nobody decided locally and which did more.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Submitting evidence that a policy is not working',
         prompt=('A policy where you live is being reviewed and you believe '
                 'it is not working. Write a letter to the review panel. In '
                 'your letter: say which policy and which measure you are '
                 'addressing; give your evidence; say what you want the '
                 'panel to do. Write at least 150 words.'),
         model=[
          'Dear Panel Secretary,',
          'I am submitting evidence to review EV-2147, the Marchwood clean '
          'air zone, and I address the attribution question in your terms of '
          'reference rather than the outcome question.',
          'I do not dispute that respiratory admissions in Marchwood fell '
          'after the zone opened. They fell from 352 to 314 per hundred '
          'thousand over four years. My evidence is that admissions in the '
          'comparison region, which has no zone, fell from 351 to 325 over '
          'the same four years, and that both series were already falling at '
          'a comparable rate for four years before the zone existed. The '
          'enclosed table gives both series by year, sourced from the '
          'regional health dataset published in March.',
          'On those figures the zone is associated with a difference of '
          'about eleven admissions per hundred thousand, not thirty-eight, '
          'and the business case projected forty. I recognise that the '
          'comparison region differs from Marchwood in ways I cannot '
          'quantify, and I am not claiming the zone did nothing.',
          'I am asking the panel to do two things: to report the difference '
          'against the comparison region rather than the change in '
          'Marchwood alone, and to state in terms whether the attribution '
          'question can be answered on the data available.',
          'Yours faithfully,',
          'R. Mbeki-Thorsdottir'],
         notes=[
          'The second sentence names which of the panel’s three questions '
          'this submission bears on. The guidance says a submission framed '
          'against the wrong question is returned, so this one sentence is '
          'what gets the letter read at all.',
          'The writer concedes the fall and attacks the inference. Conceding '
          'the opponent’s strongest fact and then showing it does not reach '
          'their conclusion is the most durable shape an evidence letter '
          'can have.',
          'The limitation is stated by the writer before the panel can state '
          'it, and the ask is procedural rather than substantive: report it '
          'this way, and say whether the question can be answered. A panel '
          'can act on both.'],
         criterion=[('Naming which question the submission bears on',
                     'Task Achievement'),
                    ('Conceding the fact and attacking the inference',
                     'Task Response'),
                    ('A procedural ask the panel can actually grant',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Evidence, inference and request in one letter',
    explain=('A submission has three jobs and they must not blur: what the '
             'figures are, what they do and do not establish, and what you '
             'want done. These patterns keep the three apart.'),
    examples=['The figures cited do not establish what they are offered to '
              'establish.',
              'I do not dispute the fall; I dispute what it is taken to '
              'show.',
              'I recognise that the comparison region differs in ways I '
              'cannot quantify.',
              'I am asking the panel to report the difference rather than '
              'the change.'],
    task='Rewrite each sentence so that evidence, inference and request '
         'stay separate.',
    items=[('The policy did not work.',
            'Admissions fell by thirty-eight in Marchwood and by twenty-six '
            'in a region with no zone; the difference is eleven, not '
            'thirty-eight.'),
           ('Your report is misleading.',
            'The report states the change in Marchwood without stating the '
            'change in the comparison region, which is the figure the '
            'attribution question turns on.'),
           ('I want this looked at again.',
            'I am asking the panel to report the difference against the '
            'comparison region and to state whether attribution can be '
            'answered on this data.'),
           ('Obviously the zone made no difference.',
            'The data are consistent with an effect of about eleven per '
            'hundred thousand and I am not claiming the zone did nothing.'),
           ('Anyone can see the trend.',
            'Both series were falling at a comparable rate for four years '
            'before the zone opened, which the enclosed table sets out by '
            'year.')]),
   vocab=[('outcome measure', 'the quantity an evaluation is judged on'),
          ('terms of reference', 'the published scope of a review'),
          ('evidence bundle', 'documents submitted together with sources'),
          ('review panel', 'the body that weighs an evaluation'),
          ('out of scope', 'outside what a review will consider'),
          ('rolled out', 'introduced across an area in stages'),
          ('recorded objection', 'a disagreement a member puts on the '
           'record'),
          ('submission window', 'the period in which evidence is '
           'accepted')],
   expr=[('The figures cited do not establish what they are offered to '
          'establish', 'the core sentence of an evidence challenge'),
         ('I do not dispute the fall; I dispute what it is taken to show',
          'separates a fact from an inference'),
         ('same evidence, inside the scope',
          'reframes material to survive a scope test'),
         ('logged as received and never read',
          'names the failure mode of a careless submission')],
   trans=['furthermore', 'in this connection', 'on the figures given',
          'I am asking the panel to'],
  ),

  dict(
   sub='What people think caused what',
   step=4,
   read=[
    dict(heading='Four accounts of one change',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Councillor Vasquez-Oyelaran: We closed the through road in '
          '2022 and the high street recovered, and I have stopped claiming '
          'those two facts are connected, because our own evaluation could '
          'not establish it and I signed the terms of reference that said so. '
          'It is an uncomfortable position to hold in public and I would '
          'rather hold it than the alternative.',
          'B  Thaddeus, who runs the bookshop: The road closure is not why '
          'my takings rose. The bank branch closed four months earlier and '
          'the queue that used to form outside it was eighty people a day '
          'who walked past my window and never came in. The closure removed '
          'a crowd that was never custom, and my trade rose when the people '
          'who actually buy books could park.',
          'C  Perpetua, who keeps the footfall data: Both of them are '
          'arguing from the same four years and neither has looked at '
          'Ashworth, which changed nothing at all and whose high street did '
          'the same thing over the same period. That is the number that '
          'should end this argument, and I have circulated it twice.',
          'D  Ignatius, the regional analyst: Perpetua is right and I want '
          'to be careful about how right. Ashworth is a comparison, not a '
          'control: it was not chosen in advance, and I could find you a '
          'town whose high street went the other way. The honest statement '
          'is that the closure has no support in the data, which is weaker '
          'than saying it did nothing.'],
         items=[
          ('Which person has publicly given up a claim their own evaluation '
           'could not support?',
           ['Vasquez-Oyelaran', 'Thaddeus', 'Perpetua', 'Ignatius'], 0,
           'And calls the position uncomfortable to hold.'),
          ('Which person offers a different cause operating earlier?',
           ['Vasquez-Oyelaran', 'Thaddeus', 'Perpetua', 'Ignatius'], 1,
           'A bank branch closing four months before the road.'),
          ('Which person points to a place that changed nothing?',
           ['Vasquez-Oyelaran', 'Thaddeus', 'Perpetua', 'Ignatius'], 2,
           'And says she has circulated the figure twice.'),
          ('Which person warns that the comparison was not chosen in '
           'advance?',
           ['Vasquez-Oyelaran', 'Thaddeus', 'Perpetua', 'Ignatius'], 3,
           'Distinguishing a comparison from a control.'),
          (
           'Thaddeus believes the people queueing at the bank were '
           'potential customers.',
           ['Yes', 'No', 'Not Given'], 1,
           'He calls them a crowd that was never custom.',
           {0: 'Yes would need them to be custom; he says they never '
               'were.', 2: 'Not Given is wrong because he classifies the crowd.'}),
          ('Ignatius believes the road closure had no effect.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says it has no support in the data, which he '
           'distinguishes from having no effect.',
           {0: 'Yes would need no effect; he says only that the data '
               'does not support one.', 2: 'Not Given is wrong because he distinguishes the two '
               'claims.'})])],
   listen=[
    dict(heading='A short talk: what people think caused what',
         part='Part 2', task='A talk to a council scrutiny committee',
         band='l2', qtype='Questions 23-26',
         script=[
          ('Speaker', 'I have spent eleven years evaluating local policy and '
           'I want to describe the single most common error I meet, which is '
           'not made by fools. It is made by competent people who have '
           'correctly noticed that something changed after something else '
           'and have then stopped reasoning at the moment reasoning should '
           'have started.'),
          ('Speaker', 'Here is the shape of it. A policy begins; an outcome '
           'improves; the improvement is attributed to the policy. Every '
           'step is reasonable and the conclusion still does not follow, '
           'because the question is not whether the outcome improved but '
           'whether it improved more than it would have done anyway, and '
           'nobody has looked at what it would have done anyway.'),
          ('Speaker', 'The reason this is hard is that the comparison does '
           'not exist. There is no Marchwood without a clean air zone to '
           'observe. Every method we have is a way of constructing a '
           'substitute for a world nobody will ever see, and each substitute '
           'carries an assumption about why it is a fair stand-in, and that '
           'assumption is where every serious dispute in my field lives.'),
          ('Speaker', 'And there is a political asymmetry that makes it '
           'worse. A minister who announces a policy and then reports the '
           'raw change is reporting something true. An analyst who reports '
           'the difference against a comparison is reporting something '
           'smaller, more useful and much harder to put in a press release, '
           'and the two numbers compete on very unequal terms.'),
          ('Speaker', 'What I would ask of this committee is narrow and I '
           'think achievable. When you commission an evaluation, require '
           'the comparison to be named in the commissioning document, before '
           'anybody knows which way the result will fall. A comparison '
           'chosen afterwards can be chosen to suit, and I am not accusing '
           'anybody of doing that; I am saying nobody can prove they '
           'did not.'),
          ('Speaker', 'That one clause would do more for the quality of '
           'local evidence than any amount of methodological training, '
           'because it moves the decision that matters from after the '
           'result to before it.')],
         items=[
          ('The error he describes is made by',
           ['careless people', 'competent people who stop reasoning too '
            'early', 'politicians only', 'statisticians'], 1,
           'Having correctly noticed that one thing followed another.'),
          ('The real question, he says, is whether the outcome',
           ['improved', 'improved more than it would have anyway',
            'improved quickly', 'improved everywhere'], 1,
           'Which requires knowing what it would have done anyway.'),
          ('Every method, he says, constructs',
           ['a forecast', 'a substitute for a world nobody will see',
            'a control group', 'a model'], 1,
           'Each carrying an assumption about why it is a fair stand-in.'),
          ('What does he ask the committee to require?',
           ['more training', 'the comparison named in the commissioning '
            'document', 'longer evaluations', 'independent panels'], 1,
           'Before anybody knows which way the result will fall.')]),
    dict(heading='Two analysts disagree about a cause', part='Part 3',
         task='A discussion between two analysts', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Perpetua', 'I am going to put Ashworth in the report and I know '
           'you will object.'),
          ('Ignatius', 'I object to how it will be read, not to putting it '
           'in. Say what you think it shows.'),
          ('Perpetua', 'That a high street with no intervention did what '
           'Marchwood’s did over the same four years, so the closure has '
           'no support in the data.'),
          ('Ignatius', 'That sentence I would sign. The sentence I am '
           'worried about is the one the newspaper writes, which is that '
           'the closure achieved nothing.'),
          ('Perpetua', 'Those are different sentences and I accept the '
           'difference matters. Say why.'),
          ('Ignatius', 'Because Ashworth was not chosen in advance. I picked '
           'it after seeing the Marchwood series, and there are nine towns '
           'in the region. If I had picked Caldermoor the comparison would '
           'have pointed the other way, and I have no principled reason for '
           'preferring one to the other.'),
          ('Perpetua', 'You could have picked Caldermoor and did not. Why '
           'not?'),
          ('Ignatius', 'Because Ashworth is the same size and the same '
           'distance from the city, and Caldermoor has a university in it. '
           'That is a real reason and it is not a reason I wrote down '
           'before I looked, which is the whole of the problem.'),
          ('Perpetua', 'So the reason is good and the timing is bad.'),
          ('Ignatius', 'The timing is what makes the reason unverifiable. '
           'I believe myself. I cannot ask a reader to.'),
          ('Perpetua', 'Then use all nine.'),
          ('Ignatius', 'That is the right answer and it is more work than we '
           'were funded for.'),
          ('Perpetua', 'It is three days. I have the data.'),
          ('Ignatius', 'Then I withdraw the objection and I would want the '
           'spread reported as well as the average, because the nine towns '
           'will not agree with each other and the disagreement is the '
           'finding.'),
          ('Perpetua', 'Say more about that.'),
          ('Ignatius', 'If Marchwood sits inside the range the nine towns '
           'produced, the closure explains nothing. If it sits outside, we '
           'have something. Either way the reader can see how much the '
           'choice of comparison was doing, which is the thing a single '
           'comparison hides.'),
          ('Perpetua', 'I will build it that way. And I notice you have just '
           'given me a stronger method than the one I came in with, while '
           'objecting to my paragraph.'),
          ('Ignatius', 'That is usually how it goes. The objection was '
           'never to the finding.')],
         items=[
          ('Ignatius objects to',
           ['the finding', 'how the finding will be read',
            'the data', 'the deadline'], 1,
           'Specifically the sentence a newspaper would write.'),
          ('Why does he distrust the Ashworth comparison?',
           ['the data are poor', 'it was chosen after seeing the '
            'result', 'it is too far away', 'it is too small'], 1,
           'With nine towns available and no principled reason to prefer '
           'one.'),
          ('What does Perpetua propose instead?',
           ['dropping the comparison', 'using all nine towns',
            'a longer time series', 'a survey'], 1,
           'Which Ignatius calls the right answer.'),
          ('His remaining concern is funding, which Perpetua answers by '
           'saying the work is', ['already done', 'three days',
            'unnecessary', 'someone else’s'], 1,
           'And that she already holds the data.'),
          ('He then asks for the ____________ to be reported as well as '
           'the average.', ['median', 'spread', 'total', 'forecast'], 1,
           'Because the nine towns will not agree with each other.'),
          ('If Marchwood sits inside the range of the nine towns, then',
           ['the closure explains nothing', 'the closure worked',
            'the data are wrong', 'more years are needed'], 0,
           'And if outside, they have something.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Cause',
    longturn=[('The change whose cause people disagree about is a fall of '
               'roughly forty per cent in shoplifting recorded by a group of '
               'shops on one street near where I live.'),
              ('It happened over about eighteen months, starting in the spring '
               'of the year before last, and the figure comes from the shops\' '
               'own incident logs rather than from the police.'),
              ('What different people say caused it divides into three '
               'accounts, and each is held by somebody with a reason to hold '
               'it. The shopkeepers\' association credits a private security '
               'patrol it had just started paying for. The council credits a '
               'youth centre that reopened eleven months into the period. A '
               'criminologist who looked at it for a local paper pointed out '
               'that recorded theft fell across the whole district over the '
               'same months, including on streets with neither the patrol nor '
               'the centre, and that the street in question had also lost two '
               'shops.'),
              ('The account I find most convincing is the third, and I want to '
               'be careful about why, because it is also the least satisfying. '
               'It is not that the patrol and the centre did nothing. It is '
               'that the district-wide fall gives us something the other two '
               'accounts lack, which is a comparison. If theft fell by a third '
               'everywhere, then a fall of forty per cent on one street is a '
               'few points of difference, and a few points could be the patrol '
               'or could be the two closures. The first two explanations are '
               'not wrong so much as untested, and they are each being offered '
               'by the party that paid for the thing they credit. What would '
               'settle it is the one thing nobody collected: the figures for a '
               'comparable street where nothing was done.')],
    intro=('Short answers, then the long turn. The explanation bullet is '
           'where this card is won.'),
    cue=('Describe a change whose cause people disagree about.',
         ['what changed', 'when it happened',
          'what different people say caused it',
          'and explain which account you find most convincing and why']),
    qs=['Do people in your country agree about why things change?',
        'Is it easy to know what caused something?',
        'Now look at the card. You have one minute to make notes.',
        'Does it matter whether we identify causes correctly?'],
    shape=[('answer', 'Our high street recovering after the road was '
            'closed.'),
           ('support', 'The council says the closure did it.'),
           ('follow-up', 'The bookshop owner says it was the bank leaving '
            'four months earlier.'),
           ('support', 'A town that changed nothing recovered the same '
            'amount.'),
           ('follow-up', 'So I find the third account most convincing, '
            'which is that neither of them did it.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should policy be made only where the evidence is strong?',
         prompt=('Some people argue that governments should act only where '
                 'the evidence for a policy is strong. Others argue that '
                 'waiting for strong evidence means never acting. Discuss '
                 'both views and give your own opinion. Write at least 250 '
                 'words.'),
         model=[
          'The demand for strong evidence before acting is usually presented '
          'as the cautious position, and in a specific and underappreciated '
          'sense it is the reckless one, because inaction is itself a policy '
          'whose consequences nobody is required to evaluate.',
          'The case for waiting is real where the intervention is costly, '
          'hard to reverse and aimed at a problem that is not getting worse. '
          'Policy has a long record of confident action on weak evidence '
          'producing the opposite of what was intended, and the mechanism is '
          'well understood: an outcome that was already moving is attributed '
          'to the intervention, the intervention is scaled, and nobody '
          'measures the counterfactual until the money is spent.',
          'The case against waiting rests on a point about symmetry that the '
          'cautious position quietly suppresses. Declining to act is a '
          'choice with consequences, and those consequences are never '
          'subjected to the standard of evidence demanded of the action. A '
          'minister who introduces a programme on moderate evidence will be '
          'evaluated at three years; a minister who declines to introduce it '
          'faces no evaluation at all, so the two options are held to '
          'standards that differ by an order of magnitude.',
          'What this suggests is that "strong evidence" is the wrong '
          'threshold because it is a property of a study rather than of a '
          'decision. The question a government actually faces is whether the '
          'expected cost of acting wrongly exceeds the expected cost of '
          'failing to act, and those two quantities depend on the size of '
          'the problem, the reversibility of the intervention and the cost '
          'of finding out, none of which appear in a demand for strong '
          'evidence.',
          'My own position follows from that asymmetry rather than from a '
          'preference for action. Where an intervention is cheap and '
          'reversible, act on moderate evidence and build the evaluation in '
          'from the start, with the comparison named before the result is '
          'known. Where it is expensive and hard to undo, demand more. And '
          'in both cases require the cost of not acting to be stated in the '
          'same document and to the same standard, because the argument is '
          'currently conducted between one option that must prove itself and '
          'another that never has to.'],
         notes=[
          'The first sentence inverts the framing — caution as the '
          'reckless option — and then earns the inversion in paragraph 3 '
          'rather than asserting it. Structure 9: position, objection, '
          'rebuttal, with the objection given its full strength first.',
          'Paragraph 4 relocates the question from a property of studies to '
          'a property of decisions. That move is what lifts a band 7 answer '
          'to a band 8 one: the prompt’s own terms are examined rather '
          'than accepted.',
          'The conclusion gives two different answers with a stated '
          'criterion for choosing between them, then adds a procedural '
          'requirement that applies to both. A recommendation a government '
          'could implement beats a sentiment a government could applaud.'],
         criterion=[('Inverting the framing and then earning it',
                     'Task Response'),
                    ('Relocating the question from studies to decisions',
                     'Task Response'),
                    ('Two answers with a stated criterion between them',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Counterfactual reasoning at length',
    explain=('Writing about what would have happened needs a tense system '
             'that stays consistent over several sentences. At band 7.5 the '
             'conditional is sustained rather than dropped after one '
             'clause.'),
    examples=['They agree it happened after and disagree that it happened '
              'because.',
              'Admissions would have fallen by twenty-six in the absence of '
              'the zone.',
              'Had the comparison been named in advance, the finding would '
              'carry more weight.',
              'The outcome improved; whether it improved more than it '
              'otherwise would is the question.'],
    task='Rewrite each sentence so that the counterfactual is explicit.',
    items=[('The policy reduced admissions by thirty-eight.',
            'Admissions fell by thirty-eight, of which about twenty-six '
            'would have occurred without the zone.'),
           ('Things got better after the closure.',
            'The high street recovered after the closure, and a town that '
            'closed nothing recovered by a comparable amount.'),
           ('They should have chosen the comparison earlier.',
            'Had the comparison been named before the result was known, the '
            'choice could not have been made to suit it.'),
           ('We cannot know what would have happened.',
            'The world in which the zone was never introduced cannot be '
            'observed, so every estimate of its effect rests on a '
            'constructed substitute.'),
           ('The minister is reporting the wrong number.',
            'The figure reported is the change in Marchwood, where the '
            'figure the attribution question requires is the difference '
            'against a region without the zone.')]),
   vocab=[('mechanism', 'the process by which a cause produces an effect'),
          ('plausibility', 'how believable an explanation is'),
          ('temporality', 'whether the cause came before the effect'),
          ('comparison group', 'those not receiving the intervention'),
          ('spurious', 'appearing related without being so'),
          ('co-movement', 'two series rising or falling together'),
          ('selection effect', 'a result caused by who was included'),
          ('lagged', 'appearing some time after its cause')],
   expr=[('They agree it happened after and disagree that it happened '
          'because', 'states the shape of a causal dispute'),
         ('no support in the data, which is weaker than saying it did '
          'nothing', 'distinguishes two negative claims'),
         ('a comparison, not a control',
          'marks a methodological difference in three words'),
         ('the disagreement is the finding',
          'reframes variation as information')],
   trans=['whereas', 'that said', 'on the other hand', 'what this suggests'],
  ),

  dict(
   sub='Before and after is not evidence',
   step=4,
   read=[
    dict(heading='The policy, the trend and the year it was introduced',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_ITS,
         paras=[
          'The graph shows hospital admissions for respiratory illness per '
          'hundred thousand people in Marchwood, where a clean air zone was '
          'introduced in year 0, and in a comparison region where no zone '
          'was introduced. Both series are shown for the four years before '
          'and the four years after that date.',
          'Taken alone, the Marchwood line makes a strong case. Admissions '
          'stood at 352 in the year the zone opened and at 314 four years '
          'later, a fall of thirty-eight per hundred thousand, or just under '
          'eleven per cent. A report containing only that line would be '
          'accurate in every figure it gave.',
          'The comparison line is what the figure is for. Admissions in the '
          'comparison region stood at 351 in the same year and at 325 four '
          'years later, a fall of twenty-six. Something was reducing '
          'respiratory admissions in both places, and whatever it was had '
          'nothing to do with a zone that existed in only one of them.',
          'The difference between the two falls is the estimate of the '
          'zone’s effect: thirty-eight minus twenty-six, or twelve per '
          'hundred thousand. That figure is about a third of the headline '
          'number and about a quarter of what the business case projected, '
          'and it is the number the attribution question asks for.',
          'The years before the policy matter as much as the years after, '
          'and are the part readers skip. Marchwood fell from 412 to 352 '
          'over the four pre-policy years; the comparison region fell from '
          '409 to 351. The two places were moving together before the zone '
          'existed, which is what makes the comparison credible: a '
          'comparison region that had been moving differently beforehand '
          'would tell you nothing.',
          'That pre-policy agreement is not a coincidence to be noted and '
          'passed over. It is the assumption the whole estimate rests on, '
          'and it is called the common trend assumption: that in the absence '
          'of the zone, the two regions would have continued to move '
          'together. It cannot be tested after the policy begins, because '
          'the world in which Marchwood has no zone does not exist to be '
          'measured.',
          'What can be done is to test it beforehand, which the four '
          'pre-policy years do, and to report that test rather than assert '
          'the assumption. An evaluation that shows four years of parallel '
          'movement before the intervention has earned its comparison. One '
          'that shows the comparison region diverging before the policy '
          'began has not, and no amount of statistical adjustment afterwards '
          'repairs it.'],
         items=[
          ('Which paragraph gives the estimate of the zone’s effect?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Thirty-eight minus twenty-six, or twelve per hundred '
           'thousand.'),
          ('Which paragraph names the common trend assumption?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'And says it cannot be tested after the policy begins.'),
          ('Which paragraph says the pre-policy years make the comparison '
           'credible?', ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Both regions moving together from 412 and 409 down to 352 and '
           '351.'),
          ('Marchwood admissions four years after the zone: ____________',
           None, '314',
           'Paragraph 2, down from 352 in the year the zone opened.'),
          ('The fall in the comparison region over the same period: '
           '____________', None, '26',
           'Paragraph 3, falling from 351 to 325 with no zone in '
           'place.'),
          ('The estimated effect of the zone is about a ____________ of '
           'the headline number.', None, 'third',
           'Paragraph 4: twelve against thirty-eight.')])],
   listen=[
    dict(heading='A statistician on interrupted time series', part='Part 4',
         task='A lecture on evaluating an intervention', band='l4',
         qtype='Questions 39-44',
         figure=_ITS,
         script=[
          ('Statistician', 'One chart, two lines, and by the end of this '
           'hour the second line should be the one your eye goes to first. '
           'Marchwood introduced a clean air zone in year zero. The '
           'comparison region did not. Everything interesting is in the '
           'relationship between the two, and nothing interesting is in '
           'either one alone.'),
          ('Statistician', 'Take the Marchwood line by itself. Three hundred '
           'and fifty-two in the year the zone opened, three hundred and '
           'fourteen four years later. A fall of thirty-eight, just under '
           'eleven per cent. Every figure in that sentence is correct and '
           'the sentence is useless, and it is the sentence that gets '
           'printed.'),
          ('Statistician', 'Now the comparison. Three hundred and fifty-one '
           'to three hundred and twenty-five, a fall of twenty-six, in a '
           'place with no zone. So something was pushing respiratory '
           'admissions down in both regions, and whatever that something '
           'was, it was not a zone that existed in one of them.'),
          ('Statistician', 'Subtract and you have your estimate: thirty-eight '
           'minus twenty-six is twelve per hundred thousand. About a third '
           'of the headline. About a quarter of what the business case '
           'promised. That is what the zone bought, on these data, and it '
           'is not nothing.'),
          ('Statistician', 'Now the part I most want you to take away, which '
           'is about the years before the policy. Four hundred and twelve to '
           'three hundred and fifty-two in Marchwood; four hundred and nine '
           'to three hundred and fifty-one in the comparison. The two places '
           'moved together for four years before the zone existed. That is '
           'what makes the comparison worth having.'),
          ('Statistician', 'And it has a name: the common trend assumption. '
           'That in the absence of the zone, the two regions would have '
           'carried on moving together. It cannot be tested, because the '
           'world where Marchwood has no zone is not available for '
           'inspection. You can only test it beforehand and report what you '
           'found.'),
          ('Statistician', 'One more thing about the shape of these two '
           'lines, because it is the part that gets missed. Both are '
           'flattening. Marchwood falls fourteen in the first two years '
           'after the zone and thirteen in the second two; the comparison '
           'falls eighteen and then eight. So the gap between them opens '
           'late, and an evaluation run at two years would have found '
           'nothing at all.'),
          ('Statistician', 'Which gives you a rule worth more than any '
           'technique. Before you believe a difference-in-differences '
           'estimate, look at the pre-policy years. Parallel: the comparison '
           'has earned its place. Diverging: it has not, and no adjustment '
           'applied afterwards will repair it. Most published evaluations do '
           'not show you those years, and now you know what to ask for.')],
         items=[
          ('The fall in Marchwood over four years was',
           ['twelve', 'twenty-six', 'thirty-eight', 'fifty-two'], 2,
           'From 352 to 314, just under eleven per cent.'),
          ('He calls the Marchwood-only sentence',
           ['wrong', 'correct and useless', 'exaggerated',
            'unverifiable'], 1,
           'And notes it is the sentence that gets printed.'),
          ('The estimated effect of the zone is',
           ['twelve per hundred thousand', 'twenty-six per hundred '
            'thousand', 'thirty-eight per hundred thousand',
            'none'], 0,
           'The difference between the two falls.'),
          ('What makes the comparison worth having?',
           ['the regions are adjacent', 'the two moved together for four '
            'years beforehand', 'the populations are equal',
            'the data are recent'], 1,
           'From 412 and 409 down to 352 and 351.'),
          ('The common trend assumption cannot be tested because',
           ['the data are missing', 'the world without the zone cannot be '
            'observed', 'the sample is small', 'it is circular'], 1,
           'It can only be tested on the years before the policy.'),
          ('His closing rule is to look at',
           ['the sample size', 'the pre-policy years', 'the p-value',
            'the funding source'], 1,
           'Which most published evaluations do not show.')])],
   speak=dict(
    part='Part 3', focus='Showing that something worked',
    intro=('Five or six sentences. Try once to say that a true number can '
           'be a misleading one.'),
    qs=['How can a government show that a policy worked?',
        'Are statistics often used misleadingly?',
        'Should people be taught to read evidence at school?',
        'Who should check official figures?'],
    shape=[('answer', 'By showing what happened somewhere the policy was '
            'not introduced.'),
           ('support', 'Admissions fell by thirty-eight where the zone '
            'opened.'),
           ('follow-up', 'They fell by twenty-six where nothing opened.'),
           ('support', 'So the policy is worth about twelve, not '
            'thirty-eight.'),
           ('follow-up', 'Both figures are true, which is exactly why the '
            'first one is so useful to quote.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='An outcome before and after an intervention, with a '
                 'comparison region',
         prompt=('The graph below shows hospital admissions for respiratory '
                 'illness in a region where a clean air zone was introduced '
                 'and in a comparison region where it was not. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_ITS,
         model=[
          'The line graph shows respiratory admissions per hundred thousand '
          'in two regions over nine years, in one of which a clean air zone '
          'was introduced in year 0. Overall, admissions fell steadily in '
          'both regions throughout the period, and the two lines, which had '
          'moved almost identically before the zone, diverged only slightly '
          'after it.',
          'Before the intervention the two series were virtually '
          'indistinguishable. Marchwood fell from 412 to 352 over the four '
          'years to year 0, and the comparison region from 409 to 351 over '
          'the same period, the two never differing by more than three '
          'admissions per hundred thousand.',
          'After year 0 both continued to fall, but at slightly different '
          'rates. Marchwood reached 314 by year +4, a further fall of 38, '
          'while the comparison region reached 325, a fall of 26. The gap '
          'between them widened from one admission per hundred thousand at '
          'year 0 to eleven by year +4.',
          'The rate of decline slowed in both regions over the later years. '
          'Marchwood fell by 14 in the first two years after the '
          'intervention and by 13 in the second two, and the comparison '
          'region by 18 and then 8, so that the widening of the gap was '
          'concentrated in the final two years.'],
         notes=[
          'The Overall statement contains the comparison and the word '
          '"slightly". A candidate who writes "admissions fell sharply '
          'after the zone was introduced" has described one line and missed '
          'the chart.',
          'The pre-intervention period gets its own paragraph, with the '
          'figure for how closely the two lines tracked. That is the part '
          'most answers omit and the part the question is built around.',
          'Nothing here says the zone caused anything. The chart shows two '
          'lines; causation is an inference the writer is not asked for and '
          'cannot support, and a sentence claiming it would cost marks '
          'under Task Achievement.'],
         criterion=[('An Overall statement containing the comparison',
                     'Task Achievement'),
                    ('Reporting the pre-intervention period',
                     'Task Achievement'),
                    ('Claiming no causation the chart cannot support',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a trend against a counterfactual',
    fix=dict(
     text=('Recorded theft fell by 40 per cent on the street where the patrol '
           'operated. It also fell by 33 per cent across the district as a '
           'whole, which mean the patrol can account for only a few points of '
           'the fall. Without a comparison street, the effect of the patrol '
           'cannot being separated from the general trend.'),
     faults=[('which mean the patrol can account for only a few points',
              'which means the patrol can account for only a few points',
              ('Which stands for the preceding clause and takes a singular '
               'verb.')),
             ('cannot being separated from the general trend',
              'cannot be separated from the general trend',
              ('After a modal the verb is in its plain form: cannot be '
               'separated.')),
             (('Recorded theft fell by 40 per cent on the street where the '
               'patrol operated'),
              ('Recorded theft fell by 40 per cent on the street where the '
               'patrol operated, against 33 per cent elsewhere'),
              ('The first figure is given with nothing to compare it against, '
               'which is the whole point of the paragraph.'))]),
    explain=('Describing one series against another needs language for the '
             'gap between them, not just for each line. These patterns '
             'describe a difference as a quantity in its own right.'),
    examples=['The line fell after the policy and it was already falling '
              'before it.',
              'The gap widened from one to eleven per hundred thousand.',
              'Both fell; the difference between the falls is twelve.',
              'The two series were virtually indistinguishable before year '
              'zero.'],
    task='Rewrite each description so that it reports the gap rather than '
         'the lines.',
    items=[('Marchwood fell and so did the comparison region.',
            'Both regions fell, the difference between the two falls being '
            'twelve per hundred thousand.'),
           ('The lines are close at the start.',
            'The two series never differed by more than three per hundred '
            'thousand before year 0.'),
           ('Marchwood ended lower.',
            'The gap between the regions widened from one admission per '
            'hundred thousand at year 0 to eleven by year +4.'),
           ('Both slowed down later.',
            'The rate of decline slowed in both regions, from 14 and 18 in '
            'the first two years to 13 and 8 in the second two.'),
           ('The policy worked.',
            'Admissions in the region with the zone fell by twelve more '
            'than in the region without it.')]),
   vocab=[('interrupted series', 'a sequence measured before and after an '
           'event'),
          ('control region', 'an area used as a stand-in for no policy'),
          ('pre-trend', 'the direction a series was already moving'),
          ('common trend', 'two series moving together absent any '
           'intervention'),
          ('widening gap', 'a growing difference between two series'),
          ('headline number', 'the figure quoted without a comparison'),
          ('confound', 'something affecting both cause and outcome'),
          ('business case', 'the projection a programme was approved on')],
   expr=[('The line fell after the policy and it was already falling before '
          'it', 'the sentence this whole cycle turns on'),
         ('correct in every figure it gave, and useless',
          'separates accuracy from usefulness'),
         ('the comparison has earned its place',
          'states when a comparison may be trusted'),
         ('no adjustment applied afterwards will repair it',
          'closes off a common escape')],
   trans=['while', 'by contrast', 'taken together', 'the difference being'],
  ),

  dict(
   sub='What a counterfactual requires',
   step=5,
   read=[
    dict(heading='The world that has to be imagined',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'Every causal claim harbours an implicit assertion about a world '
          'that does not exist. To maintain that the clean air zone reduced '
          'admissions by twelve is to maintain that in a Marchwood lacking '
          'the zone, admissions would have stood twelve higher than the '
          'recorded figure. That second Marchwood is not an unobserved '
          'region but an unobservable one: it was never available for '
          'measurement, and no quantity of data collection whatever will '
          'generate it.',
          'This is occasionally presented as a philosophical difficulty and '
          'is better understood as a design constraint. The entire apparatus '
          'of causal inference exists to construct a substitute for the '
          'missing world, and the available techniques differ chiefly in '
          'their assumptions about why a given substitute constitutes a fair '
          'one. Those assumptions, rather than the arithmetic consequent '
          'upon them, are where the substantive disagreements reside. Two '
          'analysts who concur on every figure in a dataset may reach '
          'opposing conclusions from it, and the point of divergence is '
          'invariably a sentence neither of them committed to paper.',
          'The randomised trial constitutes the most robust available '
          'response and its strength is frequently misdescribed. '
          'Randomisation does not render the two groups identical; with '
          'sixty participants in each arm they will differ considerably. Its '
          'guarantee is that they differ for no reason connected to the '
          'outcome, so that the discrepancy between them becomes a quantity '
          'whose behaviour across repeated trials is calculable. That is a '
          'narrower claim than the one ordinarily advanced on its behalf, '
          'and it is sufficient. The narrower claim possesses the additional '
          'merit of being defensible under cross-examination, which the '
          'broader one is not, and a technique oversold by its advocates is '
          'eventually discredited by them.',
          'Where randomisation is impossible, which covers most '
          'questions governments actually face, the alternatives all '
          'substitute an assumption for the randomisation. A '
          'comparison region assumes the two regions would have moved '
          'together. A phased rollout assumes the order of phases was '
          'unrelated to the outcome, and a discontinuity design '
          'assumes that units just above and just below a threshold '
          'are otherwise alike. Each assumption is plausible in some '
          'settings and false in others, and no amount of care in '
          'executing the arithmetic compensates for choosing a design '
          'whose assumption the setting does not support.',
          'The crucial property of these assumptions is that the central one '
          'in each design is untestable in the period that matters. The '
          'common trend assumption concerns what the comparison region would '
          'have done after the policy, and what it would have done after the '
          'policy is precisely what cannot be observed. The pre-policy years '
          'provide a test of something adjacent and not of the assumption '
          'itself.',
          'This produces a situation that outsiders find unsatisfactory and '
          'practitioners regard as ordinary. The credibility of an estimate '
          'rests on a judgement about an assumption that no data can settle, '
          'and that judgement is informed by data, by knowledge of the '
          'setting, and by what is established about how such assumptions '
          'have failed elsewhere. It is expert judgement, and calling it '
          'that is more honest than the alternative. The discomfort this '
          'produces in readers who wanted the data to decide is genuine, and '
          'it is not a discomfort the field can remove by working harder.',
          'The alternative, which is widespread, is to report a confidence '
          'interval and let it carry the weight. A confidence interval '
          'describes the uncertainty that arises from having a sample rather '
          'than a population. It says nothing whatever about whether the '
          'identifying assumption holds, and in most published evaluations '
          'the uncertainty from the assumption is larger than the '
          'uncertainty the interval reports, occasionally by a wide margin.',
          'There is a practice that addresses this and is spreading slowly. '
          'It is to state the assumption in a sentence a non-specialist can '
          'evaluate, and then to report how the estimate changes if the '
          'assumption is wrong by a stated amount. A reader who learns that '
          'the estimate survives a substantial violation and a reader who '
          'learns that it does not have been given different things, and the '
          'second reader has been given the more significant one.',
          'A second practice is to pre-register the comparison, naming '
          'it before the outcome is known; this does not make the '
          'assumption true. It removes one specific way of being '
          'wrong, which is choosing among several defensible '
          'comparisons after seeing which produces the preferred '
          'answer, and it is valuable precisely because nobody who did '
          'that would be able to prove they had not. It also costs '
          'nothing, which distinguishes it from most proposals for '
          'improving the quality of evidence.',
          'None of this leads where the sceptical reader expects. The '
          'conclusion is not that causal claims about policy are '
          'unwarranted; most of the ones that survive this scrutiny are '
          'better supported than most claims anybody acts on in ordinary '
          'life. It is that the warrant comes from a judgement about an '
          'assumption rather than from the data alone, and that the '
          'judgement should therefore be visible, stated, and open to the '
          'disagreement of somebody who knows the setting. A judgement '
          'stated in a sentence can be contested by a reader who has never '
          'seen the data; a judgement buried in a method section cannot be '
          'contested at all.',
          'The practical test a careful reader can apply is short: '
          'what is the comparison? Was it named before the result was '
          'known? What would have to be true for it to be fair? And '
          'how much would the estimate change if that were wrong? Four '
          'questions, none of them technical, and together they '
          'separate most of the evaluation literature worth relying on '
          'from most of what is not.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['The missing world', 'What randomisation actually guarantees',
            'Untestable assumptions', 'Pre-registration'], 1,
           'Not identical groups, but groups differing for no reason '
           'connected to the outcome.'),
          ('Choose the best heading for paragraph 5.',
           ['What randomisation guarantees',
            'Why the key assumption cannot be tested',
            'Confidence intervals', 'The four questions'], 1,
           'What the comparison region would have done after the policy '
           'cannot be observed.'),
          ('Choose the best heading for paragraph 7.',
           ['Expert judgement', 'What a confidence interval does not '
            'cover', 'Pre-registration', 'The missing world'], 1,
           'It describes sampling uncertainty, not assumption '
           'uncertainty.'),
          (
           'The writer believes randomisation makes two groups '
           'identical.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 says they will differ considerably.',
           {0: 'Yes would need identity; paragraph 3 says they will '
               'differ considerably.', 2: 'Not Given is wrong because what randomisation does is '
               'stated.'}),
          (
           'The writer believes causal claims about policy are '
           'generally unwarranted.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 10 says the surviving ones are better supported '
           'than most claims people act on.',
           {0: 'Yes would need general scepticism; paragraph 10 says '
               'the survivors are well supported.', 2: 'Not Given is wrong because the writer rates the claims '
               'that survive.'}),
          ('The assumption behind a comparison region is called the '
           '____________ trend assumption.', None, 'common',
           'Paragraph 5, concerning what would have happened after the '
           'policy.'),
          ('Pre-registering the comparison removes the possibility of '
           'choosing one after seeing which produces the preferred '
           '____________.', None, 'answer',
           'Paragraph 9, which nobody could otherwise disprove.'),
          ('How many questions does the writer’s practical test contain?',
           None, 'four',
           'The final paragraph, none of them technical.')])],
   listen=[
    dict(heading='A lecture on causal inference', part='Part 4',
         task='A lecture on what a causal claim requires', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'Every causal claim is a claim about a world nobody '
           'observed. "The zone reduced admissions by twelve" means: in a '
           'Marchwood without the zone, admissions would have been twelve '
           'higher. That Marchwood is not hard to observe. It does not '
           'exist. Hold on to that and most of this field becomes '
           'straightforward.'),
          ('Lecturer', 'So everything we do is building a substitute for a '
           'missing world, and the methods differ in what they assume about '
           'why their substitute is fair. The arithmetic is never the '
           'argument. The assumption is the argument, and almost every '
           'dispute I have been in was about an assumption that both parties '
           'could state in one sentence.'),
          ('Lecturer', 'A word on randomisation, which is routinely '
           'oversold by its friends. It does not make your two groups the '
           'same. With sixty a side they will differ noticeably. What it '
           'buys you is that they differ for no reason connected to the '
           'outcome, which is a narrower claim and is sufficient. Claim the '
           'narrow thing and you will never have to retreat.'),
          ('Lecturer', 'When you cannot randomise, and for policy you '
           'usually cannot, each design swaps in an assumption. Comparison '
           'region: the two would have moved together. Phased rollout: the '
           'order of phases had nothing to do with the outcome. '
           'Discontinuity: units either side of a threshold are otherwise '
           'alike. All plausible somewhere, all false somewhere.'),
          ('Lecturer', 'And here is the uncomfortable part. The central '
           'assumption in each design is untestable in the period that '
           'matters. Common trend is about what the comparison region would '
           'have done after the policy, and that is exactly what you cannot '
           'see. The pre-policy years test something adjacent. Useful, and '
           'not the same thing.'),
          ('Lecturer', 'Which is why I get irritated by confidence '
           'intervals doing work they cannot do. An interval describes the '
           'uncertainty from having a sample. It says nothing about whether '
           'your identifying assumption holds, and in most published '
           'evaluations the second uncertainty is larger than the first, '
           'sometimes by a wide margin.'),
          ('Lecturer', 'There is a practice that helps and is spreading '
           'slowly, and it costs a paragraph. State the assumption in a '
           'sentence a non-specialist can judge, then report how far the '
           'estimate moves if it is wrong by a stated amount. A reader who '
           'learns the result survives a substantial violation has been '
           'given something; a reader who learns it does not has been '
           'given more.'),
          ('Lecturer', 'So, four questions, and you do not need a single '
           'technical term to ask them. What is the comparison? Was it named '
           'before the result was known? What would have to be true for it '
           'to be fair? How much does the estimate move if that is wrong? '
           'Ask those four of any evaluation and you will sort most of the '
           'literature in about ten minutes.')],
         items=[
          ('A causal claim, he says, is a claim about',
           ['a large sample', 'a world nobody observed', 'a mechanism',
            'a future state'], 1,
           'A Marchwood without the zone, which does not exist.'),
          ('Randomisation guarantees that two groups',
           ['are identical', 'differ for no reason connected to the '
            'outcome', 'are large enough', 'are representative'], 1,
           'Which he calls narrower than the usual claim, and '
           'sufficient.'),
          ('The assumption behind a phased rollout is that',
           ['phases were randomly assigned',
            'the order of phases had nothing to do with the outcome',
            'all phases were equal', 'the policy was identical'], 1,
           'One of three designs he lists.'),
          ('The central assumption of each design is',
           ['testable in advance', 'untestable in the period that '
            'matters', 'always false', 'statistical'], 1,
           'Because it concerns what cannot be observed.'),
          ('He says a confidence interval describes',
           ['assumption uncertainty', 'uncertainty from having a '
            'sample', 'measurement error', 'forecast error'], 1,
           'And nothing about whether the identifying assumption holds.'),
          ('How many questions does he end with?',
           ['two', 'three', 'four', 'five'], 2,
           'None of which needs a technical term.')])],
   speak=dict(
    part='Part 3', focus='Knowing what would have happened',
    followup=[(('You say we cannot know the counterfactual. Should governments '
                'run experiments on policy?'),
               ('Where the policy is divisible and the harm of being in either '
                'group is small, yes, and far more often than they do. Most of '
                'what we spend money on has never been compared with anything, '
                'so we are running an uncontrolled experiment already and '
                'simply not collecting the results.')),
              ('Is it fair to test a policy on some people and not others?',
               ('The objection assumes we know which arm is better, and if we '
                'did there would be no trial. Rolling something out everywhere '
                'on a hunch imposes it on everybody without consent or '
                'evidence, which is harder to defend than a randomised pilot '
                'with a commitment to extend what works.')),
              ('Do people think enough about the alternatives?',
               ('Not spontaneously, because the alternative is invisible and '
                'the actual outcome is in front of them. What helps is making '
                'the comparison a required part of the report: say what '
                'happened and what happened in the places that did nothing, '
                'side by side, and the question becomes unavoidable.')),
              ('But what if no comparable place exists?',
               ('Then say so, and weaken the claim accordingly, rather than '
                'reaching for the before-and-after figure. A great deal of '
                'policy evaluation consists of a difference over time '
                'presented as an effect, and the honest version is that the '
                'effect is unknown and the direction is plausible.'))],
    intro=('Five or six sentences. Try once to describe a world that did '
           'not happen.'),
    qs=['Can we ever know what would have happened otherwise?',
        'Do people think enough about alternatives?',
        'Should governments run experiments on policy?',
        'Is it fair to test a policy on some people and not others?'],
    shape=[('answer', 'Not observe it, no. Estimate it, sometimes.'),
           ('support', 'You need somewhere that did not get the policy.'),
           ('follow-up', 'And a reason to think it would have behaved the '
            'same.'),
           ('support', 'That reason is an assumption nobody can test '
            'afterwards.'),
           ('follow-up', 'So the honest version is a judgement, and it '
            'should be written down as one.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Premise named and tested under every idea',
         prompt=('Should governments act before causation is established? '
                 'Brainstorm ten ideas, run the six tests, name the premise '
                 'under each survivor, and push each premise against three '
                 'cases it was not built for. Twelve minutes. Do not write '
                 'the essay yet.'),
         plan=('Acting before causation is established is sometimes right '
               'and sometimes reckless, and the dividing line is not the '
               'strength of the evidence but the reversibility of the '
               'action and the cost of finding out, both of which can be '
               'assessed before any study reports',
               [('The case for waiting rests on a premise about the cost of '
                 'error that holds only where the action is hard to undo',
                 ['scaled interventions on weak evidence have repeatedly '
                  'produced the opposite of what was intended',
                  'a cheap reversible pilot carries almost none of that '
                  'cost']),
                ('The case for acting rests on a premise about symmetry '
                 'that the cautious position suppresses',
                 ['a programme introduced is evaluated at three years',
                  'a programme declined is never evaluated at all'])]),
         notes=[
          'Both premises are named and each is then pushed against cases it '
          'was not built for. The first survives in a narrowed form — it '
          'holds for irreversible action only — which is a better outcome '
          'than either keeping or discarding it.',
          'The second premise is the one that does the work, and it is a '
          'premise about process rather than about evidence. Spotting that '
          'the two options are held to different standards is the move the '
          'essay is built on.',
          'The thesis names the dividing line and asserts it can be assessed '
          'before any study reports, which is what makes it a usable '
          'recommendation rather than a complaint. Cycle 5 will have to '
          'defend exactly that clause.'],
         criterion=[('A premise named under each surviving idea',
                     'Task Response'),
                    ('Each premise pushed against cases it was not built '
                     'for', 'Task Response')],
         instruct='  Twelve minutes, timed. You write this in cycle 5.',
         lines=12)],
   gram=dict(
    point='The whole repertoire, under time',
    explain=('At band 7.5 the structures taught separately have to arrive '
             'together without the writing becoming heavy. These are the '
             'four that carry the most weight per word.'),
    examples=['Every causal claim is a claim about a world nobody '
              'observed.',
              'What it guarantees is narrower than what is claimed for it, '
              'and it is enough.',
              'Plausible in some settings and false in others.',
              'Had the comparison been named in advance, one way of being '
              'wrong would have been removed.'],
    task='Rewrite each sentence using the structure named in brackets.',
    items=[('A causal claim is about an unobserved world. (cleft)',
            'What every causal claim asserts is something about a world '
            'nobody observed.'),
           ('Randomisation gives less than people say and it is enough. '
            '(concessive pair)',
            'Randomisation guarantees less than is claimed for it, and what '
            'it guarantees is sufficient.'),
           ('Some assumptions hold and some do not. (balanced pair)',
            'Each assumption is plausible in some settings and false in '
            'others.'),
           ('If they had pre-registered, this objection would not apply. '
            '(inversion)',
            'Had the comparison been pre-registered, this objection could '
            'not be raised.'),
           ('The interval does not cover the assumption. (fronting)',
            'What the interval does not describe is the uncertainty arising '
            'from the assumption itself.')]),
   vocab=[('identifying assumption', 'what must hold for an estimate to '
           'mean what it claims'),
          ('allocation by lot', 'assigning by chance so differences are '
           'unrelated to outcome'),
          ('discontinuity', 'a threshold whose two sides can be compared'),
          ('external validity', 'whether a finding carries to another '
           'setting'),
          ('interval estimate', 'the range sampling alone would '
           'produce'),
          ('pre-register', 'to state a method before the result is '
           'known'),
          ('robustness', 'whether a result survives an assumption '
           'failing'),
          ('phased', 'introduced to different areas at different times')],
   expr=[('Every causal claim is a claim about a world nobody observed',
          'the cycle’s governing sentence'),
         ('the arithmetic is never the argument; the assumption is',
          'locates where disputes actually sit'),
         ('claim the narrow thing and you will never have to retreat',
          'advice about overstating a method'),
         ('useful, and not the same thing',
          'accepts a partial test without accepting more')],
   trans=['consequently', 'which in turn', 'as a result',
          'what this leaves us with'],
  ),

  dict(
   sub='When the data cannot answer',
   step=5,
   read=[
    dict(heading='Three questions no study can settle',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'A recurring frustration in public argument is the discovery '
          'that a question which sounds empirical cannot be resolved '
          'empirically, and the condition is ordinarily construed as '
          'temporary, remediable by superior data. For an identifiable '
          'class of questions it is permanent, and membership of that '
          'class is discernible in advance by inspection rather than '
          'by awaiting the failure of successive studies.',
          'The first kind of question fails on the counterfactual. Whether a '
          'specific war shortened or lengthened a subsequent peace requires '
          'comparing the world as it is with a world in which the war did '
          'not occur, and there is exactly one history. Comparative methods '
          'help where many comparable cases exist; for a singular event of '
          'this kind they do not, because no two instances are comparable in '
          'the respects that matter. Historians have known this for a '
          'century and have developed a distinct vocabulary for it, which is '
          'part of why the two literatures so rarely read each other.',
          'The second kind fails on the construct rather than the data. '
          'Whether a curriculum renders children better thinkers cannot be '
          'resolved by measurement because "better thinker" is not a '
          'quantity awaiting an instrument. Any study must substitute '
          'something measurable, and the finding then concerns the '
          'substitute. This is not a reason to abandon the question; it is a '
          'reason to state what was measured and to argue separately that it '
          'stands in for what was meant.',
          'The third kind fails on scope. Whether immigration raises or '
          'lowers wages has been studied extensively and the literature does '
          'not converge, and the rationale is not that the studies are '
          'inadequate. The effect differs by sector, by skill level, by the '
          'elasticity of housing supply and by the period over which it is '
          'measured, so that the question as posed has no single answer and '
          'every well-conducted study answers a narrower question correctly. '
          'Reporting the literature as contradictory is therefore a '
          'description of the question rather than of the studies.',
          'Recognising which variety of failure is operating matters '
          'because the appropriate response differs. A counterfactual '
          'failure calls for an argument from mechanism rather than from '
          'comparison: what would have to have been true, and is it '
          'plausible. A construct failure calls for an explicit defence of '
          'the proxy. A scope failure calls for the question to be narrowed '
          'until it has an answer, which is ordinarily possible and is '
          'ordinarily resisted, because the narrow question is not the one '
          'anybody wanted answered.',
          'A fourth situation is frequently conflated with these three and '
          'is wholly distinct from them. Certain questions are empirically '
          'answerable and have in fact been answered, and the controversy '
          'persists because the answer is unwelcome. Construing such a '
          'controversy as a genuine epistemic limit is a category error that '
          'inflicts considerable damage, since it lends the authority of '
          'intellectual humility to a position that has simply lost. The '
          'manoeuvre is recognisable because it materialises only once the '
          'result is in, and never from the same speaker when a study '
          'concludes favourably.',
          'Distinguishing the fourth case from the first three is not '
          'invariably easy and there is a test that works more '
          'frequently than not. Ask the disputants what finding would '
          'change their position: in a genuine limit case, both sides '
          'can describe the study they wish existed and explain why it '
          'cannot be run. In the fourth case, one side describes such '
          'a study and the other produces a series of objections that '
          'would apply equally to any study whatever.',
          'That test has an honourable history and a practical cost: it '
          'requires the person applying it to be willing to find that their '
          'own side is the one producing universal objections. Most people '
          'who cite the test have never applied it to themselves, and the '
          'small number who have are the ones whose judgement on contested '
          'questions merits seeking out.',
          'What should a government do about the first three kinds? The '
          'answer that has emerged in practice, and that nobody quite '
          'defends in theory, is to act on the best available reasoning '
          'while labelling the basis honestly. A decision taken on a '
          'mechanism argument is not thereby arbitrary; it is less well '
          'supported than one taken on a randomised trial and better '
          'supported than one taken on nothing, and the gradation between '
          'those is where most governing occurs. Pretending the gradation '
          'does not exist forces every decision into one of two boxes, '
          'neither of which fits.',
          'The objection to this is that labelling is inexpensive and '
          'nobody consults the label; the objection is accurate about '
          'current practice and does not touch the principle. A '
          'document stating that its conclusion rests on a mechanism '
          'argument, enumerating the alternative explanations '
          'considered, and specifying what would revise its view, is '
          'contestable; the document asserting that the evidence '
          'supports the policy is not. The second formulation is not a '
          'stronger claim than the first but a less inspectable one.',
          'The deeper point is that the demand for proof before action is '
          'not a neutral standard applied evenly. It is applied to proposed '
          'changes and scarcely ever to the arrangements already in place, '
          'most of which were adopted on evidence that would not survive a '
          'morning of the scrutiny now routinely demanded of their '
          'replacements. A standard that falls only on one side of a '
          'question is not a standard; it is a preference wearing one.'],
         items=[
          ('Which paragraph describes the failure of scope?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Immigration and wages, where every good study answers a '
           'narrower question.'),
          ('Which paragraph describes a dispute that persists because the '
           'answer is unwelcome?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'Which the writer calls a category error that does real '
           'damage.'),
          ('Which paragraph says the test requires applying it to your own '
           'side?', ['Paragraph 6', 'Paragraph 7', 'Paragraph 8',
            'Paragraph 9'], 2,
           'And that few who cite it have done so.'),
          (
           'The writer believes a decision taken on a mechanism '
           'argument is arbitrary.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 9 says it is better supported than one taken on '
           'nothing.',
           {0: 'Yes would need arbitrariness; paragraph 9 ranks it '
               'above deciding on nothing.', 2: 'Not Given is wrong because mechanism arguments are '
               'evaluated.'}),
          (
           'The writer believes the demand for proof is applied evenly '
           'to existing and proposed arrangements.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says it falls on one side only.',
           {0: 'Yes would need evenness; the final paragraph says it '
               'falls on one side.', 2: 'Not Given is wrong because the asymmetry is named.'}),
          ('A question about whether a curriculum produces better thinkers '
           'fails on the ____________ rather than the data.', None,
           'construct',
           'Paragraph 3: the thing meant is not a quantity awaiting an '
           'instrument.'),
          ('A scope failure calls for the question to be ____________ '
           'until it has an answer.', None, 'narrowed',
           'Paragraph 5, which the writer says is usually resisted.'),
          ('In the fourth case, one side produces objections that would '
           'apply equally to ____________ study whatever.', None, 'any',
           'Paragraph 7, which is the test for distinguishing it.')])],
   listen=[
    dict(heading='Two methodologists disagree', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Professor Achterberg-Nkemdirim works on causal '
           'inference. Dr Villanueva-Strand advises a health department.'),
          ('Villanueva-Strand', 'I will begin with the thing my own side '
           'does badly, because it is going to be raised. We say "the '
           'evidence does not support this" when what we mean is "no '
           'randomised trial exists", and those are not the same statement. '
           'I have used the first to mean the second and it was not '
           'honest.'),
          ('Achterberg-Nkemdirim', 'I was not going to raise it and I am '
           'glad you did. My equivalent confession is that the hierarchy of '
           'evidence my field teaches puts mechanism arguments at the bottom '
           'and it should not, not universally. A mechanism argument with a '
           'known biological pathway can be worth more than a trial with a '
           'sixty-person arm.'),
          ('Villanueva-Strand', 'So where do we actually disagree?'),
          ('Achterberg-Nkemdirim', 'On what to do when the question is '
           'unanswerable in principle. You want to act on the best reasoning '
           'available and label the basis. I think labelling fails because '
           'nobody reads the label, and the policy survives long after the '
           'reasoning behind it has been abandoned.'),
          ('Villanueva-Strand', 'That is an empirical claim about documents '
           'and it is testable, and I think you are right about current '
           'practice. What I would say is that it is an argument for better '
           'labelling rather than against acting.'),
          ('Achterberg-Nkemdirim', 'Give me the version of labelling that '
           'would survive.'),
          ('Villanueva-Strand', 'Three sentences in the decision document. '
           'This rests on a mechanism argument. These are the alternative '
           'explanations we considered. This is the finding that would '
           'change our view. The third one is the one nobody writes and it '
           'is the one that does the work.'),
          ('Achterberg-Nkemdirim', 'I would accept that, and I want to add '
           'a condition. The third sentence has to be revisited on a date '
           'written into the document, or it becomes a decoration. A '
           'commitment with no review date is not a commitment.'),
          ('Villanueva-Strand', 'I would add one thing to the third '
           'sentence, which is that it has to name a finding somebody '
           'could actually produce. "Evidence that this does not work" is '
           'not a finding. "A comparison region showing no difference at '
           'three years" is one, and it can be looked for.'),
          ('Achterberg-Nkemdirim', 'That is the difference between a '
           'commitment and a gesture, and I would put your version in the '
           'guidance rather than mine.'),
          ('Villanueva-Strand', 'Agreed, and now we have spent nine minutes '
           'and arrived at a clause rather than a disagreement.'),
          ('Achterberg-Nkemdirim', 'Which I would argue is what the '
           'disagreement was for. The one thing I will not concede is the '
           'asymmetry: the standard you and I are discussing gets applied to '
           'new policy and never to the policy already running, and nobody '
           'in this room has an answer to that.')],
         items=[
          ('Villanueva-Strand opens by conceding that her side says "the '
           'evidence does not support this" when it means',
           ['the evidence is weak', 'no randomised trial exists',
            'the policy is costly', 'the question is unclear'], 1,
           'Which she says was not honest.'),
          ('Achterberg-Nkemdirim’s own concession concerns',
           ['sample sizes', 'the place of mechanism arguments in the '
            'hierarchy', 'funding', 'publication'], 1,
           'Which he says should not universally be at the bottom.'),
          ('Their actual disagreement is about',
           ['which method is best', 'what to do when a question is '
            'unanswerable in principle', 'how to fund trials',
            'who decides'], 1,
           'Specifically whether labelling the basis works.'),
          ('His objection to labelling is that',
           ['it is expensive', 'nobody reads the label and the policy '
            'outlives the reasoning', 'it is unclear', 'it is '
            'optional'], 1,
           'Which she calls a testable empirical claim about documents.'),
          ('Which of her three sentences does she say nobody writes?',
           ['the basis', 'the alternatives considered',
            'the finding that would change their view', 'the date'], 2,
           'And calls it the one that does the work.'),
          ('What condition does he add?',
           ['an independent reviewer', 'a review date written into the '
            'document', 'a cost ceiling', 'ministerial sign-off'], 1,
           'Because a commitment with no review date is not a '
           'commitment.')])],
   speak=dict(
    part='Part 3', focus='Acting without proof',
    sounds=[('Causal language has to be said cleanly, because the hedge is the '
             'claim: it is associated with, it is consistent with and it '
             'caused are three different statements and each is one chunk with '
             'one stress.'),
            ('Practise the ladder at a steady pitch: it followed, it is '
             'associated with, it probably contributed to, it caused. Any '
             'wobble in the voice adds a doubt the words did not.'),
            ('The word counterfactual is stressed on the third syllable, and '
             'the phrase what would have happened otherwise is one unit with '
             'the stress on otherwise.'),
            ('Where you reject an explanation, keep the pitch level. A '
             'sarcastic contour is heard as unwillingness to consider it, and '
             'the examiner is listening for whether you can hold two accounts '
             'at once.'),
            ('Record ninety seconds on knowing what would have happened. '
             'Listen for a causal verb you stressed harder than you meant, and '
             'say that sentence again.')],
    intro=('The hardest turn in the unit. Try once to say that a standard '
           'applied to one side only is not a standard.'),
    qs=['Should governments wait for proof before acting?',
        'Are some questions impossible to settle with evidence?',
        'How should a decision made on weak evidence be described?',
        'Who should decide when the evidence runs out?'],
    shape=[('answer', 'It depends far more on reversibility than on the '
            'evidence.'),
           ('support', 'A cheap pilot you can stop costs almost nothing if '
            'it is wrong.'),
           ('follow-up', 'A national rollout you cannot undo costs a great '
            'deal.'),
           ('support', 'And the demand for proof is only ever made of the '
            'new policy.'),
           ('follow-up', 'The one already running was adopted on evidence '
            'nobody would accept today, which makes the standard a '
            'preference rather than a standard.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should governments wait for conclusive evidence?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say governments should not act until '
                 'the evidence is conclusive. To what extent do you agree? '
                 'Write at least 250 words.'),
         model=[
          'I agree where the action is expensive and hard to undo, disagree '
          'everywhere else, and think the usual framing of this question is '
          'doing damage, because it treats the strength of the evidence as '
          'the variable when the variable that matters is what happens if '
          'you are wrong.',
          'The case for waiting is strongest and is genuinely strong. Policy '
          'has a long record of confident action on evidence that did not '
          'support it, and the failure has a standard shape: an outcome that '
          'was already improving is attributed to a new programme, the '
          'programme is scaled nationally on that attribution, and the '
          'comparison that would have revealed the error is constructed only '
          'after the money is committed. Nothing about better intentions '
          'prevents this, and only a comparison named in advance does.',
          'But the cautious position conceals an asymmetry that will not '
          'survive being stated. Declining to act is itself a decision, with '
          'its own consequences, and those consequences are never held to '
          'the standard demanded of the action. A programme introduced is '
          'evaluated at three years; a programme declined is evaluated '
          'never. More pointedly, the arrangements already in place were '
          'almost all adopted on evidence that would not survive a morning '
          'of the scrutiny now routinely demanded of their replacements. A '
          'standard that falls on one side of a question only is not a '
          'standard; it is a preference wearing one.',
          'What follows is that "conclusive evidence" is the wrong '
          'threshold, because conclusiveness is a property of a study and '
          'the decision is not about studies. The question is whether the '
          'expected cost of acting wrongly exceeds the expected cost of '
          'failing to act, and that comparison turns on the size of the '
          'problem, the reversibility of the intervention and the cost of '
          'finding out — three quantities that can be assessed before any '
          'study reports.',
          'To the extent that I agree, then, I agree about irreversible '
          'action and not about action as such. Where an intervention is '
          'cheap and can be stopped, act on moderate evidence, name the '
          'comparison before the result is known, and write into the '
          'decision the finding that would change your mind and the date on '
          'which you will look. Where it cannot be undone, demand far more '
          'than is currently demanded. And in both cases require the cost of '
          'inaction to be stated in the same document and to the same '
          'standard, which would change more outcomes than any improvement '
          'in method.'],
         notes=[
          'The first sentence gives a two-part answer and names the variable '
          'the prompt got wrong. A to-what-extent question is answered best '
          'by saying what the extent depends on, not by choosing a point on '
          'a scale.',
          'Paragraph 2 states the opposing case at full strength and in '
          'mechanism rather than in sentiment — the standard shape of the '
          'failure, in four clauses. An objection stated well is what makes '
          'the rebuttal in paragraph 3 worth reading.',
          'The last paragraph is three implementable clauses and one '
          'general requirement. "Write into the decision the finding that '
          'would change your mind and the date on which you will look" is '
          'the kind of sentence that separates a band 8 answer from a band '
          '7 one: it could be adopted tomorrow.'],
         model65=[
                  'Some people say governments should not act until '
                  'the evidence is conclusive. In my view this sets a '
                  'standard that would preclude most useful intervention.',
                  'There is a real argument behind the claim. Acting '
                  'on weak evidence squanders resources, and a government '
                  'that intervenes early and wrongly loses the '
                  'authority to intervene later. Where the cost of '
                  'acting is high and the harm is small, waiting is '
                  'right.',
                  'However, conclusive evidence is rare, and it usually '
                  'arrives after the decision has been forced. Waiting '
                  'is itself a choice, with its own costs, and these '
                  'are rarely quantified because nobody is responsible '
                  'for them. The delay also tends to favour whoever '
                  'benefits from the current arrangement.',
                  'I think the test should be the balance of harms '
                  'rather than the strength of the evidence. Where a '
                  'harm is irreversible, act on an uncertain case and '
                  'be ready to stop; where it is not, wait and gather '
                  'more. Demanding certainty first simply hides the '
                  'decision instead of improving it.',
                  ],
         gap65=[
                'It makes the balance of harms the criterion, so the '
                'recommendation follows from the argument rather than '
                'sitting beside it.',
                'It names who gains from delay, which is why the '
                'evidential standard is argued for so often and by '
                'whom.',
                'It says what reversibility changes about the cost of '
                'being wrong.',
                ],
         criterion=[('Naming what the extent depends on',
                     'Task Response'),
                    ('The opposing case stated as a mechanism',
                     'Task Response'),
                    ('Implementable clauses rather than sentiments',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Attacking an identifying assumption',
    explain=('The highest-value objection in any evidence argument is not '
             'to the data or the conclusion but to the assumption joining '
             'them. These patterns make that objection precisely.'),
    examples=['The estimate is only as good as the assumption nobody can '
              'test.',
              'That holds if the two regions would have moved together, and '
              'that is what is in dispute.',
              'The objection is not to the arithmetic but to what the '
              'arithmetic is being asked to carry.',
              'A standard that falls on one side of a question only is not '
              'a standard.'],
    task='Rewrite each objection so that it attacks the assumption rather '
         'than the conclusion.',
    items=[('I do not believe the result.',
            'The estimate holds only if the comparison region would have '
            'moved with Marchwood, and nothing in the paper defends that.'),
           ('The study is biased.',
            'The comparison was selected after the outcome was known, which '
            'is a way of being wrong that pre-registration exists to '
            'remove.'),
           ('The numbers are too confident.',
            'The interval reports sampling uncertainty only, and the '
            'uncertainty from the identifying assumption is larger.'),
           ('They are being unfair to the new proposal.',
            'The evidential standard applied to the proposal was not '
            'applied to the arrangement it would replace.'),
           ('This proves nothing.',
            'This establishes what follows if the assumption holds, and the '
            'assumption is the whole of what is being argued about.')]),
   vocab=[('conclusive', 'settling a question beyond dispute'),
          ('burden of proof', 'which side must establish its case'),
          ('act under uncertainty', 'deciding without settled evidence'),
          ('stand-in', 'something measurable put in place of what is '
           'meant'),
          ('evidence ranking', 'an ordering of study designs by '
           'strength'),
          ('unfalsifiable', 'not able to be shown false by any '
           'observation'),
          ('misclassification', 'treating one kind of thing as '
           'another'),
          ('review date', 'a fixed point at which a decision is '
           'revisited')],
   expr=[('The estimate is only as good as the assumption nobody can test',
          'the cycle’s central objection'),
         ('a standard that falls on one side only is not a standard',
          'exposes an asymmetric demand'),
         ('objections that would apply equally to any study whatever',
          'identifies an unfalsifiable position'),
         ('a commitment with no review date is not a commitment',
          'adds the condition that makes a promise real')],
   trans=['admittedly', 'nevertheless', 'in short', 'what follows is that'],
  ),
 ],
 technique=dict(
  title='The loop at 935 words, nine paragraphs, under exam conditions',
  body=('The passages in this volume are longer than the ones in the real '
        'paper, and that is deliberate: a candidate who has read nine '
        'hundred and thirty-five words under the loop finds eight hundred '
        'and fifty comfortable. What changes at this length is not the '
        'method but the cost of abandoning it. At six hundred words a '
        'candidate who skips the question-loading step loses a minute; at '
        'nine hundred and thirty-five they lose four, because they reread. '
        'So the loop is unchanged and the discipline is harder: thirty '
        'seconds on title and first paragraph, two minutes loading the '
        'questions, then one paragraph at a time with the pen moving. At a '
        'hundred and ninety words a minute this passage is five minutes of '
        'reading. Anything over seven means you went back, and going back '
        'is the only expensive mistake available on Reading.'),
  panel=[('Thirty seconds, then two minutes',
          'Title and first paragraph; then the questions. Unchanged since '
          'Volume 3 and worth four minutes here instead of one.'),
         ('Nine paragraphs, nine stops',
          'One paragraph, then back to the question list. The urge to read '
          'two is what produces the reread.'),
         ('Underline and keep going',
          'A mark in the margin costs a second. Deciding costs thirty, and '
          'you may not need to decide at all.'),
         ('Five minutes of text, not seven',
          '935 words at 190 wpm is five minutes. Time it once and you will '
          'know whether you are rereading.')],
  task='Read the cycle 5 passage under the loop, timed, and record the '
       'four numbers below before you answer anything.',
  qs=['How long did the text take, and what speed is that?',
      'Did you load the questions before reading, or after?',
      'How many paragraphs did you read twice?',
      'How many questions could you answer from your underlining alone?',
      'Where did the first reread happen, and what caused it?']),
 outlining=dict(
  title='Premise naming and premise testing on one brainstorm',
  body=('Volume 5 taught the premise test in three stages across ten units. '
        'This volume runs all three on every brainstorm from the first '
        'unit, because at band 7.5 an examiner will find the weak premise '
        'whether or not you did. Name what each idea assumes; ask whether '
        'your evidence reaches it; push it against three cases it was not '
        'built for. The third step is the one that produces the thesis, '
        'because a premise that survives three cases it was not designed '
        'for is usually more interesting than the idea it was supporting, '
        'and the best essays in this volume are the ones where the writer '
        'noticed that and rewrote the thesis around it.'),
  frame=('Acting before causation is established is sometimes right and '
         'sometimes reckless, and the dividing line is not the strength of '
         'the evidence but the reversibility of the action and the cost of '
         'finding out, both of which can be assessed before any study '
         'reports',
         [('The case for waiting rests on a premise about the cost of error '
           'that holds only where the action is hard to undo',
           ['scaled interventions on weak evidence have repeatedly produced '
            'the opposite of what was intended',
            'a cheap reversible pilot carries almost none of that cost']),
          ('The case for acting rests on a premise about symmetry that the '
           'cautious position suppresses',
           ['a programme introduced is evaluated at three years',
            'a programme declined is never evaluated at all'])]),
  task='Run all three steps on the cycle 4 brainstorm in twelve minutes, '
       'and write down which step changed your thesis.',
  qs=['Which premise could you not write in one sentence?',
      'Which premise did your evidence fail to reach?',
      'Which premise implied something you reject?',
      'Did any premise turn out more interesting than its idea?',
      'Is your thesis the one you started with?'],
  answers=['that one was never an idea, it was a mood',
           'usually the empirical-sounding one',
           'usually the one stated most confidently',
           'often, and that is the signal to rewrite the thesis',
           'at this level it should not be, more often than not']),
 candos=['I can read evaluation guidance for what falls outside its scope',
         'I can read a two-line chart where the second line is the argument',
         'I can state what a causal claim assumes about an unobserved world',
         'I can attack an identifying assumption rather than a conclusion',
         'I can show that an evidential standard is being applied to one '
         'side only'],
 tip=('When a figure shows one line before and after an intervention, the '
      'first question is not how much it fell. It is what the comparison '
      'line did, and if there is no comparison line, that is the finding.'),
)
