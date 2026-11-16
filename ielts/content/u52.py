# -*- coding: utf-8 -*-
"""Unit 52 - Models and Their Assumptions. IELTS Volume 6, band 7.5."""

_MOD = dict(kind='device',
            title='How a forecasting model is built, calibrated and used',
            sub='the components, and the path a single run takes through '
                'them, including the loop that stops',
            parts=[('hist', 0.02, 0.02, 0.26, 0.17, 'Historical data'),
                   ('struct', 0.37, 0.02, 0.26, 0.17, 'Model structure'),
                   ('fit', 0.72, 0.02, 0.26, 0.17, 'Fitting routine'),
                   ('par', 0.72, 0.29, 0.26, 0.17, 'Fitted parameters'),
                   ('hind', 0.37, 0.29, 0.26, 0.17, 'Hindcast test'),
                   ('held', 0.02, 0.29, 0.26, 0.17, 'Held-back years'),
                   ('run', 0.37, 0.58, 0.26, 0.17, 'Forward run'),
                   ('out', 0.72, 0.58, 0.26, 0.17, 'Published range'),
                   ('rev', 0.02, 0.58, 0.26, 0.17, 'Annual review')],
            flows=[('hist', 'struct', 'informs'),
                   ('struct', 'fit', 'passed to'),
                   ('fit', 'par', 'produces'),
                   ('par', 'hind', 'tested by'),
                   ('held', 'hind', 'compared against'),
                   ('hind', 'fit', 'adjusted until within tolerance'),
                   ('hind', 'run', 'released when it passes'),
                   ('run', 'out', 'reported as'),
                   ('out', 'rev', 'checked against outturn'),
                   ('rev', 'hist', 'added to')])

UNIT = dict(
 n=52, vol=6, level='C1', band='7.5',
 theme='Models and Their Assumptions',
 opener=(
   'The Task 1 problem here is the hardest of the diagram family: a device '
   'with a loop in it, which has to be described without saying that the '
   'model decides, learns or wants anything. From there the unit goes to '
   'the finding that unsettles most people who meet it — that models '
   'agreeing with each other is weak evidence, because they are usually '
   'related — and ends on the uncertainty that lies outside the published '
   'range and is not in it anywhere.'),

 cycles=[
  dict(
   sub='Using a published model',
   step=2,
   read=[
    dict(heading='Licensing a forecasting model',
         kind='Terms of use',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('Terms of use are read for what you may not say',
                ['A licence for a model governs two different things: what '
                 'you may run it on, and what you may claim about what came '
                 'out.',
                 'The second is where the restrictions bite and where the '
                 'questions are. Find the clause about attribution and the '
                 'clause about republication before reading anything '
                 'else.']),
         paras=[
          'The model is released under a licence permitting use for research '
          'and for internal planning. Commercial redistribution of the model '
          'itself requires a separate agreement. Publishing figures produced '
          'by the model does not, provided the conditions in clause 4 are '
          'met, and almost every dispute under this licence has concerned '
          'clause 4 rather than redistribution.',
          'Clause 4 requires any published figure to state the model '
          'version, the release date of the input dataset, and the '
          'scenario under which the run was made. A figure published '
          'without the scenario is a breach, because the same model under '
          'two scenarios differs by more than two models do.',
          'Users may modify the model and must then describe it as derived '
          'rather than as the model itself. A derived version may not be '
          'described using the original name, and results from a derived '
          'version may not be compared with published results from the '
          'original without stating every modification made.',
          'The maintainers publish a release note with each version, '
          'listing changed parameters and their effect on a standard test '
          'case. Users need not upgrade, and a figure from a superseded '
          'version remains compliant provided the version is stated.',
          'Support is limited to defects, meaning behaviour that departs '
          'from the documentation. A result a user finds implausible is not '
          'a defect. A result that cannot be reproduced from the stated '
          'inputs is one, and reproduction failures are the only category '
          'the maintainers undertake to investigate within a fixed period.',
          'The model is supplied without warranty as to the accuracy of any '
          'projection. The maintainers state in terms that a projection is a '
          'conditional statement about a scenario and not a prediction, and '
          'that any user who reports it as a prediction has departed from '
          'the documentation rather than from the licence.'],
         items=[
          ('Publishing figures from the model requires compliance with '
           'clause ____________.', None, '4',
           'Paragraph 1, where most disputes have arisen.'),
          ('A figure published without the ____________ is a breach.',
           None, 'scenario',
           'Paragraph 2: two scenarios differ more than two models do.'),
          ('A modified model must be described as',
           ['the model itself', 'derived', 'experimental',
            'unsupported'], 1,
           'Paragraph 3, and may not use the original name.'),
          ('A figure from a superseded version stays compliant provided '
           'the ____________ is stated.', None, 'version',
           'Paragraph 4: users are not required to upgrade.'),
          ('Which of these counts as a defect?',
           ['a result the user finds implausible',
            'a result that cannot be reproduced from the stated inputs',
            'a slow run', 'an unclear release note'], 1,
           'Paragraph 5: a defect is behaviour departing from the '
           'documentation.'),
          ('Reporting a projection as a prediction departs from the',
           ['licence', 'documentation', 'warranty', 'scenario'], 1,
           'Paragraph 6, which distinguishes the two.')]),
    dict(heading='Reporting a suspected error',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Establish reproducibility before reporting anything. Run the '
          'model twice from the same inputs on the same version and confirm '
          'the output differs. A model that gives two different answers from '
          'identical inputs has a defect; one that gives an answer you did '
          'not expect may not.',
          'Record the version string exactly as the model prints it, '
          'including the build suffix. Reports carrying a version number '
          'without the suffix cannot be matched to a build and are returned, '
          'and this accounts for more returned reports than every other '
          'cause combined.',
          'State the parameter you believe is at fault and the value you '
          'supplied for it. A report naming no parameter is triaged as a '
          'question rather than as a defect, and questions are answered on a '
          'different timetable with no undertaking as to when.',
          'Attach the input file and the output, unedited. Extracts are '
          'not accepted, because the maintainers reproduce the run rather '
          'than reading the figures, and a defect report that cannot be '
          'rerun is closed after twenty working days with no finding '
          'recorded against it.',
          'Reproduction failures are the only category carrying a '
          'commitment, which is ten working days to a first finding. Every '
          'other report is answered when a maintainer is free, and the '
          'median for those was eleven weeks across the last release '
          'cycle.'],
         items=[
          ('Run the model ____________ from the same inputs before '
           'reporting.', None, 'twice',
           'Paragraph 1, to establish reproducibility.'),
          ('Record the version string including the build ____________.',
           None, 'suffix',
           'Paragraph 2, the commonest cause of a returned report.'),
          ('A report naming no ____________ is triaged as a question.',
           None, 'parameter',
           'Paragraph 3, which carries no undertaking as to timing.'),
          ('An unreproducible report is closed after ____________ working '
           'days.', None, 'twenty',
           'Paragraph 4, with no finding recorded against it.')])],
   listen=[
    dict(heading='Reporting a modelling error', part='Part 1',
         task='A call to a model support desk', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Support', 'Model support, Rosalind speaking.'),
          ('Caller', 'Hello. I think there is an error in the flood '
           'projection model.'),
          ('Support', 'Let us find out. Which version?'),
          ('Caller', 'Four point two.'),
          ('Support', 'Is there a suffix after that? A letter and some '
           'digits.'),
          ('Caller', 'There is. Dash b nine.'),
          ('Support', 'Four point two dash b nine. Good — without the '
           'suffix I could not match it to a build, and that comes back more '
           'often than everything else put together.'),
          ('Caller', 'Noted.'),
          ('Support', 'Now, have you run it twice from identical inputs?'),
          ('Caller', 'I have. Same inputs, different answers.'),
          ('Support', 'Then that is a defect rather than a question, and it '
           'goes on the fixed timetable. If it had given the same answer '
           'twice and you simply disagreed with it, that would be a '
           'question.'),
          ('Caller', 'Which parameter do you need?'),
          ('Support', 'The one you believe is at fault, and the value you '
           'gave it.'),
          ('Caller', 'Catchment response time, set to point six '
           'hours.'),
          ('Support', 'Point six. And the output differed by how much '
           'between the two runs?'),
          ('Caller', 'About four per cent on peak flow.'),
          ('Support', 'Four per cent is well outside anything the '
           'documentation allows. Send the input file and the output, both '
           'unedited.'),
          ('Caller', 'Can I send extracts? The output file is very large.'),
          ('Support', 'No. We rerun it rather than read it, so an extract is '
           'useless to us. Compress it and use the upload link.'),
          ('Caller', 'Does it matter which operating system I ran it '
           'on?'),
          ('Support', 'It matters a great deal and almost nobody tells us. '
           'Put it in the report. Two of the last five reproduction '
           'failures turned out to be the maths library rather than the '
           'model at all.'),
          ('Caller', 'That is worth knowing. Understood. How long?'),
          ('Support', 'Reproduction failures are the one category we commit '
           'to, and that is ten working days. If we cannot rerun it we close '
           'it at twenty with no finding, which I would rather avoid.'),
          ('Caller', 'So would I. Reference?'),
          ('Support', 'D as in defect, three three zero eight.'),
          ('Caller', 'D three three zero eight. Thank you.')],
         items=[
          ('Version reported: 4.2-____________', None, 'b9',
           'The suffix the support desk says is most often missing.'),
          ('The caller has run the model twice and the answers '
           '____________.', None, 'differed',
           'Which makes it a defect rather than a question.'),
          ('Parameter at fault: catchment ____________ time', None,
           'response',
           'Set to a value the caller gives in the same turn.'),
          ('Value supplied: ____________ hours', None, '0.6',
           'Given when the support desk asks for it.'),
          ('Difference between runs: ____________ per cent on peak flow',
           None, '4',
           'Which the desk says is outside what the documentation '
           'allows.'),
          ('Reference number: D-____________', None, '3308',
           'Given at the end of the call, after the upload '
           'instructions.')])],
   speak=dict(
    part='Part 1', focus='Forecasts you have seen',
    intro=('Two or three sentences each. A real forecast you actually '
           'looked at beats a general observation.'),
    qs=['Do you pay attention to weather forecasts?',
        'Have you seen forecasts about the economy or population?',
        'Do people trust such forecasts where you live?',
        'Should forecasts say how uncertain they are?'],
    shape=[('answer', 'Only the rain one, and only the next twelve '
            'hours.'),
           ('support', 'It gives a percentage and I have learned to read '
            'it.'),
           ('follow-up', 'Forty per cent means take a coat, not that it '
            'will not rain.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Reporting an error in a published projection',
         prompt=('You have found what you believe is an error in a '
                 'published projection. Write a letter to the organisation '
                 'that published it. In your letter: identify the figure '
                 'and where it appeared; explain what you believe is wrong; '
                 'say what you want done. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about Table 3 of the Lowdale Catchment Flood '
          'Projection, published on 14 March, and specifically the peak flow '
          'figure of 318 cubic metres per second for the 2040 central '
          'scenario.',
          'The published figure cannot be reproduced from the stated inputs. '
          'Using version 4.2-b9, which your note names, and the input '
          'dataset released on 2 February, which it also names, I obtain 291 '
          'rather than 318 — a difference of just over eight per cent. I '
          'have run this twice and obtained 291 both times. I should add '
          'that I may have made an error myself, which is part of why I am '
          'writing rather than publishing a correction.',
          'There is a second and separate point. The table gives a single '
          'figure with no scenario named, although the model documentation '
          'states that results under two scenarios differ by more than the '
          'model differs from its competitors. A reader cannot tell which '
          'run Table 3 reports.',
          'I would ask for two things: confirmation of the version and '
          'scenario used for Table 3, and either a reconciliation with the '
          'figure I obtain or a corrected table. I am happy to send my input '
          'file and output, unedited, on request.',
          'Yours faithfully,',
          'B. Haraldsen-Achebe'],
         notes=[
          'The first paragraph identifies the figure to the digit, the '
          'table, the date and the scenario. A technical complaint that '
          'cannot be matched to a specific number is triaged as a question, '
          'and questions have no timetable.',
          'The writer concedes their own fallibility in one clause and then '
          'moves on. Offered once and briefly it buys credibility; repeated '
          'or elaborated it would undermine the complaint.',
          'The two points are kept separate and numbered by paragraph: one '
          'about reproducibility, one about disclosure. A letter that fuses '
          'them invites a reply answering only the easier one.'],
         criterion=[('Identifying the figure precisely enough to rerun',
                     'Task Achievement'),
                    ('Conceding fallibility once, in a clause',
                     'Task Response'),
                    ('Two separate points kept separate',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Precise technical complaint',
    explain=('A technical complaint is answered on how precisely it is '
             'stated. These patterns pin a claim to a number, a version and '
             'a procedure, which is what gets it investigated.'),
    examples=['The published figure cannot be reproduced from the stated '
              'inputs.',
              'Using version 4.2-b9 and the dataset of 2 February I obtain '
              '291 rather than 318.',
              'I may have made an error myself, which is part of why I am '
              'writing.',
              'A reader cannot tell which run the table reports.'],
    task='Rewrite each complaint so that it could be investigated.',
    items=[('Your figures are wrong.',
            'Table 3 gives 318 where the stated inputs and version yield '
            '291, a difference of just over eight per cent.'),
           ('The model is unreliable.',
            'Two runs from identical inputs on version 4.2-b9 differed by '
            'four per cent on peak flow.'),
           ('You have not explained your assumptions.',
            'Table 3 names no scenario, although results under the two '
            'scenarios differ by more than the model differs from its '
            'competitors.'),
           ('Please look into this.',
            'I would ask for confirmation of the version and scenario used '
            'for Table 3, and a reconciliation with the figure I obtain.'),
           ('I might be wrong.',
            'I may have made an error myself, and I am happy to send my '
            'input file and output unedited.')]),
   vocab=[('terms of use', 'the conditions under which a tool may be '
           'used'),
          ('release note', 'a published list of what changed in a '
           'version'),
          ('version', 'a specific published state of a model'),
          ('documentation', 'the written account of how a tool behaves'),
          ('defect report', 'a notice that behaviour departs from the '
           'documentation'),
          ('derived', 'modified from an original and renamed'),
          ('input value', 'a number supplied to a model before it runs'),
          ('coefficient', 'a fixed number inside a model’s equations')],
   expr=[('The published figure cannot be reproduced from the stated '
          'inputs', 'the core sentence of a technical complaint'),
         ('a result you find implausible is not a defect',
          'draws the line support will act on'),
         ('we rerun it rather than read it',
          'explains why extracts are refused'),
         ('departed from the documentation rather than from the licence',
          'separates two kinds of fault')],
   trans=['furthermore', 'in this connection', 'specifically',
          'I would ask for'],
  ),

  dict(
   sub='Forecasts people believed',
   step=4,
   read=[
    dict(heading='Four forecasts and what happened',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Dr Okonjo-Lindqvist, demographer: Our 1998 projection put the '
          'national population at sixty-eight million by 2020 and the '
          'outturn was sixty-seven point one. People describe that as a good '
          'forecast and I do not, because we were right by cancellation: '
          'fertility fell further than we assumed and migration rose further '
          'than we assumed, and the two errors were roughly equal and '
          'opposite. A model can be right for reasons that give you no '
          'reason to trust it next time.',
          'B  Casimir, energy analyst: Every projection of solar cost made '
          'before 2010 was too high, and not by a little. The reason was not '
          'carelessness. The models assumed a learning rate estimated from '
          'the previous twenty years, which was the only estimate available, '
          'and the rate changed. Nobody who used those models was entitled '
          'to know that, and everybody who dismisses them now is reasoning '
          'from an outturn they have seen.',
          'C  Thomasina, who ran a council: I used a traffic model to '
          'justify a road and the traffic never came. What I did wrong was '
          'not believing the model; it was quoting the central figure in '
          'public and the range only in the papers. The range was wide '
          'enough to include the outturn and nobody who read the press '
          'release ever saw it.',
          'D  Ignatius, epidemiologist: We published a range, we published '
          'the assumptions, we stated that it was conditional on no change '
          'in behaviour, and behaviour changed within nine days. The '
          'projection was then described as wrong. It was not wrong; it was '
          'conditional on something that did not hold, and the thing it was '
          'conditional on changed partly because we published it.'],
         items=[
          ('Which person says their forecast was right by cancellation?',
           ['Okonjo-Lindqvist', 'Casimir', 'Thomasina', 'Ignatius'], 0,
           'Two roughly equal and opposite errors.'),
          ('Which person says critics are reasoning from an outturn they '
           'have seen?',
           ['Okonjo-Lindqvist', 'Casimir', 'Thomasina', 'Ignatius'], 1,
           'About solar cost projections made before 2010.'),
          ('Which person blames their own communication rather than the '
           'model?',
           ['Okonjo-Lindqvist', 'Casimir', 'Thomasina', 'Ignatius'], 2,
           'Quoting the central figure in public and the range only in the '
           'papers.'),
          ('Which person says the forecast changed the thing it was '
           'forecasting?',
           ['Okonjo-Lindqvist', 'Casimir', 'Thomasina', 'Ignatius'], 3,
           'Behaviour changed partly because the projection was '
           'published.'),
          ('Okonjo-Lindqvist regards the 1998 projection as a good '
           'forecast.', ['Yes', 'No', 'Not Given'], 1,
           'She says being right by cancellation gives no reason to trust '
           'it next time.'),
          ('Thomasina’s range included what actually happened.',
           ['Yes', 'No', 'Not Given'], 0,
           'She says it was wide enough to include the outturn.')])],
   listen=[
    dict(heading='A short talk: forecasts people believed', part='Part 2',
         task='A talk at a forecasting seminar', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'I want to talk about four famous forecasting '
           'failures, and my thesis is that three of them were not failures '
           'of forecasting at all. They were failures of reporting, and the '
           'distinction matters because the remedies are completely '
           'different and we keep applying the wrong one.'),
          ('Speaker', 'Start with what a projection is. It is a conditional '
           'statement: if these assumptions hold, this follows. It is not a '
           'claim about what will happen, and in every case I am about to '
           'describe, the conditional was published and the condition was '
           'stripped off somewhere between the modeller and the reader.'),
          ('Speaker', 'The traffic case is the clearest. A council '
           'commissioned a forecast, the model produced a central figure of '
           'twenty-two thousand vehicles a day with a range from fourteen to '
           'thirty-one, and the press release quoted twenty-two thousand. '
           'The outturn was fifteen. Inside the range, outside the number '
           'anybody remembers, and the model is now described locally as '
           'having been wrong.'),
          ('Speaker', 'The epidemic case is harder and more interesting. The '
           'projection was conditional on behaviour not changing, behaviour '
           'changed, and the projection did not happen. That is not an error '
           'and it is also not a defence, because a forecast whose '
           'publication changes the thing forecast cannot be evaluated '
           'against the outturn at all, and we have never had a good answer '
           'to that.'),
          ('Speaker', 'Which gives me the one recommendation I would make. '
           'Stop publishing a central figure. Publish the range and the '
           'condition in the same sentence, and if a journalist wants a '
           'single number, give them the range again. Every modeller in this '
           'room has broken that rule and so have I, and the reason is '
           'always the same: the single number is what gets the work '
           'commissioned next time.'),
          ('Speaker', 'That is an incentive problem rather than a technical '
           'one, and I have no solution to it beyond saying out loud that it '
           'is what is happening.')],
         items=[
          ('He argues that three of the four failures were failures of',
           ['method', 'reporting', 'data', 'funding'], 1,
           'For which the remedies are completely different.'),
          ('A projection, he says, is',
           ['a prediction', 'a conditional statement', 'an estimate',
            'a scenario'], 1,
           'Whose condition is stripped off between modeller and reader.'),
          ('The traffic outturn of fifteen thousand was',
           ['above the range', 'inside the range', 'below the range',
            'not measured'], 1,
           'Against a published range of fourteen to thirty-one.'),
          ('His recommendation is to stop publishing',
           ['ranges', 'a central figure', 'assumptions',
            'press releases'], 1,
           'And to give a journalist the range again if they ask for a '
           'number.')]),
    dict(heading='Two forecasters disagree about a projection',
         part='Part 3', task='A discussion between two forecasters',
         band='l3', qtype='Questions 27-32',
         script=[
          ('Casimir', 'I want to publish the range without a central figure '
           'and I know the department will refuse.'),
          ('Thomasina', 'They will, and I am going to argue their side '
           'properly rather than let you knock it down.'),
          ('Casimir', 'Please.'),
          ('Thomasina', 'A range with no central figure is not more honest, '
           'it is less usable. A planner has to choose a pipe diameter. They '
           'cannot build a range. If you refuse to give them a number they '
           'will take the midpoint, which is a number you did not endorse '
           'and may not believe.'),
          ('Casimir', 'That is the strongest form of it and I had not put it '
           'that way myself.'),
          ('Thomasina', 'It gets worse. If they take the midpoint of a '
           'skewed range they are taking a figure less likely than either '
           'end, and by refusing to publish a central estimate you have '
           'caused that.'),
          ('Casimir', 'So the refusal to choose is itself a choice, made '
           'badly and by somebody else.'),
          ('Thomasina', 'That is my case. Now knock it down.'),
          ('Casimir', 'I cannot knock it down for the planner and I can for '
           'the newspaper, and that is the whole of my position. Two '
           'audiences, two documents. The technical annex gives the central '
           'figure because a planner needs one. The press release gives the '
           'range and the condition, because a journalist will print '
           'whatever single number is available.'),
          ('Thomasina', 'Before you go on, give me the planner’s version '
           'of your annex. What does it actually say at the top?'),
          ('Casimir', 'Central estimate twenty-two thousand, plausible '
           'range fourteen to thirty-one, and a line saying which of those '
           'to design against for which decision. The pipe goes in at the '
           'upper end and the business case at the central figure, and '
           'nobody has ever written that line down.'),
          ('Thomasina', 'That line is the whole document. Put it first.'),
          ('Thomasina', 'Two documents is more work and it is also obviously '
           'right. Why has nobody done it?'),
          ('Casimir', 'Because the press release is written by the people '
           'who want the project approved, and a range is harder to approve '
           'a project with.'),
          ('Thomasina', 'Then the proposal is not about forecasting at all. '
           'It is about who drafts the press release.'),
          ('Casimir', 'It is, and that is why it will fail, and I would '
           'rather fail at the real question than succeed at the one I can '
           'reach.'),
          ('Thomasina', 'I will co-sign it. Put the two-document '
           'recommendation first and the diagnosis second, because the order '
           'you have it in now reads as a complaint.'),
          ('Casimir', 'That is better advice than anything I came in '
           'with.')],
         items=[
          ('Thomasina’s argument against a range with no central figure '
           'is that', ['it is dishonest', 'it is less usable for somebody '
            'who must choose', 'it is too wide', 'it is unpublishable'], 1,
           'A planner cannot build a range.'),
          ('If a planner takes the midpoint of a skewed range, they take a '
           'figure', ['most likely', 'less likely than either end',
            'identical to the mean', 'outside the range'], 1,
           'Which she says the modeller has caused.'),
          ('Casimir concedes her case for',
           ['the newspaper', 'the planner', 'both audiences',
            'neither'], 1,
           'And says he can answer it for the other audience.'),
          ('His proposal is',
           ['one document with a range', 'two documents for two '
            'audiences', 'no press release', 'a longer annex'], 1,
           'The annex giving the central figure, the release the range and '
           'condition.'),
          ('Why does he say it will fail?',
           ['it costs too much', 'the press release is written by people '
            'who want approval', 'journalists object',
            'planners object'], 1,
           'Which makes it a question about drafting rather than '
           'forecasting.'),
          ('Thomasina’s advice is to put the recommendation',
           ['last', 'first', 'in an annex', 'in a footnote'], 1,
           'Because the present order reads as a complaint.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Prediction',
    intro=('Short answers, then the long turn. The last bullet decides the '
           'band.'),
    cue=('Describe a prediction that turned out to be wrong.',
         ['what was predicted', 'who made it',
          'what actually happened',
          'and explain whether you think the prediction was a bad one']),
    qs=['Do you make predictions about your own life?',
        'Are people good at predicting what they will want?',
        'Now look at the card. You have one minute to make notes.',
        'Why do people like confident predictions?'],
    shape=[('answer', 'A traffic forecast for a road near us.'),
           ('support', 'The council said twenty-two thousand vehicles a '
            'day.'),
           ('follow-up', 'Fifteen thousand came.'),
           ('support', 'But the published range went from fourteen to '
            'thirty-one.'),
           ('follow-up', 'So the forecast was not wrong; the press release '
            'was, and those are different failures.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should published forecasts state their assumptions?',
         prompt=('Some people argue that every published forecast should '
                 'state the assumptions it rests on. Give your own opinion '
                 'and support it with reasons and examples. Write at least '
                 '250 words.'),
         model=[
          'Published forecasts should state their assumptions, and the '
          'reason usually given for this — that readers deserve honesty '
          '— is the weakest of the three available. The stronger reasons '
          'are that an unstated assumption cannot be contested, that it '
          'cannot be checked afterwards, and that its absence changes what '
          'the forecast is being used to do.',
          'Take contestability first. A projection is a conditional '
          'statement: if these things hold, this follows. Someone who '
          'disagrees with a forecast but not with its arithmetic can object '
          'only to the conditions, and if the conditions are unpublished '
          'there is nothing to object to. The dispute then moves to the '
          'number, where it cannot be settled, and a disagreement about '
          'assumptions gets conducted as a disagreement about competence.',
          'The second reason is about what can be learned. When an outturn '
          'differs from a projection, the useful question is which '
          'assumption failed, and that question is answerable only if the '
          'assumptions were recorded. A demographic projection that was '
          'accurate because two large errors cancelled is indistinguishable, '
          'from the outside, from one that was accurate because it was '
          'right, and the difference matters enormously to anyone deciding '
          'whether to use the same model again.',
          'The third reason is the one that convinces me and it concerns '
          'use rather than truth. A forecast published with its conditions '
          'is read as a conditional; the same forecast published bare is '
          'read as a prediction and quoted as one. A council that announced '
          'twenty-two thousand vehicles a day, from a model whose published '
          'range ran from fourteen to thirty-one, did not publish a false '
          'figure. It published a true figure in a form that could only be '
          'misread, and the road was built on the misreading.',
          'The objection worth taking seriously is that assumptions are '
          'technical and readers skip them. That is true and it argues for '
          'a different presentation rather than for omission: the condition '
          'belongs in the same sentence as the number, not in an annex. '
          '"Twenty-two thousand vehicles a day if no parallel route opens" '
          'is one sentence, is readable by anybody, and is a different '
          'claim from the one that was actually announced.'],
         notes=[
          'The first paragraph ranks three reasons and discards the obvious '
          'one. Structure 1 at this level is not three reasons listed; it '
          'is three reasons ordered, with the weakest named as weakest.',
          'Each reason is a different kind of argument — one about '
          'argument, one about learning, one about use — which is what '
          'stops a three-reason essay from being the same reason three '
          'times. The overlap test in the outlining strand exists to catch '
          'exactly that failure.',
          'The objection is answered by redesign rather than by denial, and '
          'the answer is demonstrated in a sentence the reader can see '
          'working. An essay that shows the fix beats one that asserts a '
          'fix is possible.'],
         criterion=[('Three reasons ordered, with the weakest named',
                     'Coherence and Cohesion'),
                    ('Three different kinds of argument, not one repeated',
                     'Task Response'),
                    ('An objection answered by a demonstrated redesign',
                     'Task Response')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Modal stacking and graded commitment',
    explain=('At band 7.5 degrees of confidence are expressed exactly, and '
             'the commonest fault is a single flat modal running through a '
             'whole paragraph. These patterns grade it.'),
    examples=['A projection is a conditional statement reported as a '
              'prediction.',
              'It may well hold, and nothing in the data requires that it '
              'should.',
              'The figure could be right; it would not follow that the '
              'model is.',
              'Behaviour might have changed anyway, and it is unlikely to '
              'have changed by that much.'],
    task='Rewrite each sentence so that the degree of commitment is '
         'graded.',
    items=[('The forecast was wrong.',
            'The outturn fell below the central figure, though it remained '
            'inside the published range.'),
           ('The model will be accurate.',
            'The model may well prove accurate, on assumptions that have '
            'held for twenty years and need not continue to.'),
           ('They were lucky.',
            'The projection could have been accurate for the wrong reasons, '
            'and on these figures it appears to have been.'),
           ('This proves the method works.',
            'This is consistent with the method working and would also be '
            'consistent with two errors having cancelled.'),
           ('Nobody could have known.',
            'The information available at the time might not have supported '
            'the inference, which is different from saying it could not '
            'have been drawn.')]),
   vocab=[('conditional statement', 'a claim that holds if something else '
           'does'),
          ('range', 'the span a forecast reports rather than one number'),
          ('realised value', 'the figure that actually occurred'),
          ('learning rate', 'how fast a cost falls as output doubles'),
          ('skewed', 'spread unevenly about its centre'),
          ('plausible range', 'the span a modeller is prepared to '
           'defend'),
          ('midpoint', 'the value halfway between two ends'),
          ('technical annex', 'the detailed document behind a summary')],
   expr=[('A projection is a conditional statement reported as a '
          'prediction', 'the cycle’s governing distinction'),
         ('right by cancellation',
          'names an accuracy that should not reassure'),
         ('a true figure in a form that could only be misread',
          'locates a failure in presentation'),
         ('reasoning from an outturn they have seen',
          'identifies hindsight in a criticism')],
   trans=['whereas', 'that said', 'take X first', 'the objection worth '
          'taking seriously'],
  ),

  dict(
   sub='How a model is built',
   step=5,
   read=[
    dict(heading='Inputs, structure and calibration',
         kind='Process article',
         task='Flow-chart completion and diagram labelling',
         band='gt_work', qtype='Questions 33-38',
         figure=_MOD,
         paras=[
          'The diagram shows how a forecasting model is built, tested and '
          'put into use. It has nine components and ten movements between '
          'them, and one of those movements returns to an earlier point, '
          'which is the feature that makes this a system rather than a '
          'sequence.',
          'Historical data informs the model structure, which is the set of '
          'equations describing how the quantities relate. Structure is a '
          'judgement rather than an output: it is chosen by the modeller '
          'from what is known about the physical process, and two teams '
          'given identical data routinely choose differently.',
          'The structure is passed to a fitting routine, which produces '
          'fitted parameters. Fitting is the part most readers imagine when '
          'they think of modelling and is the part with the least judgement '
          'in it: given a structure and a dataset, the routine finds the '
          'parameter values that reproduce the history most closely.',
          'Those parameters are then tested by a hindcast, which runs the '
          'model forward from an earlier date and compares the result with '
          'the held-back years. The held-back years were deliberately '
          'excluded from the fitting, because a model tested on the data it '
          'was fitted to will always appear to perform well.',
          'If the hindcast falls outside tolerance, the result returns to '
          'the fitting routine and the parameters are adjusted. This is the '
          'loop, and it is the point at which the diagram stops being a '
          'sequence. The loop runs until the hindcast passes, at which stage '
          'the model is released for a forward run.',
          'The forward run produces the published range. The range is then '
          'checked at annual review against the outturn, and the outturn is '
          'added to the historical data, which is the second return path in '
          'the diagram and the slower of the two.',
          'Two features of this arrangement deserve comment. The first is '
          'that the loop between hindcast and fitting can be run too many '
          'times: a model adjusted repeatedly until it matches the '
          'held-back years has effectively been fitted to them, and the test '
          'stops being a test. Most protocols cap the number of iterations '
          'and publish the count.',
          'The second is that the slow loop through annual review alters the '
          'historical data, so that a model refitted in five years is being '
          'fitted partly to outcomes its own earlier version influenced. '
          'Where a forecast changes behaviour, this path carries that change '
          'back into the model, and no protocol in current use addresses '
          'it.'],
         items=[
          ('On the diagram, the fitting routine produces fitted '
           '____________.', None, 'parameters',
           'Paragraph 3, from a structure and a dataset.'),
          ('The hindcast is compared against the ____________ years.',
           None, 'held-back',
           'Paragraph 4, excluded from fitting on purpose.'),
          ('Which paragraph identifies the loop?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Where an out-of-tolerance hindcast returns to the fitting '
           'routine.'),
          ('Which paragraph warns that the loop can be run too often?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 2,
           'Because the model is then effectively fitted to the test '
           'data.'),
          ('Choosing the model structure is described as a ____________ '
           'rather than an output.', None, 'judgement',
           'Paragraph 2, where two teams given the same data choose '
           'differently.'),
          ('Which paragraph describes the second return path?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'The outturn added back to the historical data at annual '
           'review.')])],
   listen=[
    dict(heading='A modeller on building and checking', part='Part 4',
         task='A lecture on model construction', band='l4',
         qtype='Questions 39-44',
         figure=_MOD,
         script=[
          ('Modeller', 'Nine boxes, ten arrows, and one arrow that goes '
           'backwards. If you remember nothing else from this hour, '
           'remember which arrow that is, because everything that makes '
           'modelling difficult rather than merely laborious happens on '
           'it.'),
          ('Modeller', 'Left to right along the top. Historical data informs '
           'the structure. Structure means the equations: what depends on '
           'what. That is a judgement, not an output. I have watched two '
           'good teams given identical data choose different structures and '
           'both defend the choice, and neither was being unreasonable.'),
          ('Modeller', 'Structure goes to the fitting routine, which '
           'produces fitted parameters. This is the step everybody pictures '
           'when they imagine modelling, and it is the step with the least '
           'judgement in it. Give the routine a structure and a dataset and '
           'it finds the numbers that match history best. A clerk could '
           'supervise it.'),
          ('Modeller', 'Then the hindcast. Run the fitted model forward from '
           'an earlier date and compare it with years you deliberately kept '
           'out of the fitting. Kept out, and that is the whole point: a '
           'model tested on the data it was fitted to will always look '
           'wonderful, and such tests are still published.'),
          ('Modeller', 'Here is the backwards arrow. Hindcast fails '
           'tolerance, result goes back to fitting, parameters are adjusted, '
           'round again. That loop is where a sequence becomes a system, '
           'and it is also where the danger is, because a model adjusted '
           'eleven times until it matches the held-back years has been '
           'fitted to them. The test has quietly stopped being a test.'),
          ('Modeller', 'Which is why a decent protocol caps the number of '
           'iterations and publishes the count. If a paper does not tell you '
           'how many times round that loop it went, you do not know whether '
           'its hindcast means anything, and that is a question you can ask '
           'without understanding a line of the model.'),
          ('Modeller', 'Past the loop: forward run, published range, annual '
           'review against the outturn, and the outturn goes back into the '
           'historical data. That is the second backwards arrow and it is '
           'slow, one step a year, which is why people forget it is '
           'there.'),
          ('Modeller', 'And it carries a problem nobody has solved. If '
           'publishing a forecast changes behaviour, the outturn is partly '
           'caused by the forecast, and five years later you refit the model '
           'to data its own earlier version helped produce. I know of no '
           'protocol that addresses that, including ours.'),
          ('Modeller', 'So: structure is judgement, fitting is mechanical, '
           'the hindcast is the test, the fast loop can destroy the test, '
           'and the slow loop contaminates the data. Four sentences, and '
           'they will take you further than any amount of arithmetic.')],
         items=[
          ('How many components does the diagram have?',
           ['seven', 'eight', 'nine', 'ten'], 2,
           'With ten movements between them.'),
          ('Choosing the structure is described as',
           ['mechanical', 'a judgement', 'automated', 'arbitrary'], 1,
           'Two good teams given the same data may choose differently.'),
          ('The step with the least judgement in it is',
           ['choosing structure', 'fitting', 'the hindcast',
            'annual review'], 1,
           'He says a clerk could supervise it.'),
          ('The held-back years are excluded from fitting because',
           ['they are unreliable', 'a model tested on its own fitting data '
            'always looks good', 'they are too recent', 'they are '
            'incomplete'], 1,
           'And such tests are still published.'),
          ('A model adjusted repeatedly until it matches the held-back '
           'years has effectively been',
           ['validated', 'fitted to them', 'improved', 'simplified'], 1,
           'So the test has stopped being a test.'),
          ('The problem he says nobody has solved concerns',
           ['computing cost', 'a forecast changing the behaviour it '
            'forecasts', 'missing data', 'staff turnover'], 1,
           'So that later refits use data the earlier version helped '
           'produce.')])],
   speak=dict(
    part='Part 3', focus='Testing a model',
    intro=('Five or six sentences. Try once to explain why a test can stop '
           'being a test.'),
    qs=['How can you tell whether a model is any good?',
        'Should the public be able to inspect government models?',
        'Is it possible to test a forecast of the distant future?',
        'Who should check that models are sound?'],
    shape=[('answer', 'By how it does on years it never saw.'),
           ('support', 'You hold some data back and fit without it.'),
           ('follow-up', 'Then you run the model forward and compare.'),
           ('support', 'The catch is that you can adjust and try again.'),
           ('follow-up', 'Do that eleven times and you have fitted the '
            'model to the test, which is why the number of attempts should '
            'be published.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How a forecasting model is built, calibrated and used',
         prompt=('The diagram below shows how a forecasting model is built, '
                 'calibrated and used. Summarise the information by '
                 'selecting and reporting the main features. Write at least '
                 '150 words.'),
         figure=_MOD,
         model=[
          'The diagram shows the construction, testing and use of a '
          'forecasting model. It comprises nine components and ten '
          'connections, two of which return to an earlier stage, so that '
          'the arrangement forms a system with two loops rather than a '
          'single sequence.',
          'The components fall into three groups. Three are concerned with '
          'construction: historical data, the model structure and the '
          'fitting routine. Three are concerned with testing: the fitted '
          'parameters, the hindcast test and the held-back years. The '
          'remaining three — the forward run, the published range and the '
          'annual review — are concerned with use.',
          'In operation, historical data informs the structure, which is '
          'passed to the fitting routine, and this produces the fitted '
          'parameters. The parameters are tested by a hindcast, which is '
          'compared against the held-back years. Where the comparison falls '
          'outside tolerance, the result is returned to the fitting routine '
          'and the parameters are adjusted; this cycle repeats until the '
          'hindcast is accepted.',
          'The model is then released for a forward run, which generates the '
          'published range. That range is checked at annual review against '
          'what subsequently occurs, and the outcome is added back into the '
          'historical data, completing the second and longer loop.'],
         notes=[
          'The answer gives the structure before the operation, and groups '
          'the nine components into three sets rather than listing them. '
          'That grouping is the difference between a description and a '
          'list, and it is the principle the whole diagram family rests '
          'on.',
          'Both loops are identified in the Overall statement. A diagram '
          'with a return path is set as a Task 1 question precisely because '
          'the return path is what a weak answer misses, and naming it '
          'first is the safest way not to.',
          'Nothing in the answer says the model decides, learns, wants or '
          'tries. "Where the comparison falls outside tolerance, the result '
          'is returned" describes the same event without attributing '
          'intention, and that discipline is what the unit is for.'],
         criterion=[('Structure first, grouped; then operation',
                     'Coherence and Cohesion'),
                    ('Both return paths named in the Overall statement',
                     'Task Achievement'),
                    ('No intention attributed to the machine',
                     'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a system with feedback',
    explain=('A loop has to be described without implying that the machine '
             'chooses to go round it. The passive and the conditional do '
             'this work; "decides", "learns" and "tries" do not.'),
    examples=['The model is first fitted to the historical data, after '
              'which it is tested against the held-back years.',
              'Where the hindcast falls outside tolerance, the parameters '
              'are adjusted and the test is repeated.',
              'The cycle continues until the hindcast is accepted.',
              'The outturn is added back into the historical data.'],
    task='Rewrite each sentence so that no intention is attributed to the '
         'model.',
    items=[('The model learns from its mistakes.',
            'Where the hindcast falls outside tolerance, the parameters are '
            'adjusted and the test is run again.'),
           ('The model decides which parameters to use.',
            'The fitting routine selects the parameter values that most '
            'closely reproduce the historical data.'),
           ('It keeps trying until it gets it right.',
            'The cycle is repeated until the hindcast falls within '
            'tolerance.'),
           ('The model remembers what happened.',
            'The outturn recorded at annual review is added back into the '
            'historical dataset.'),
           ('The model wants to match history.',
            'The routine is configured to minimise the difference between '
            'the modelled and the recorded series.')]),
   vocab=[('validation', 'checking a model against data it was not fitted '
           'to'),
          ('hindcast', 'running a model forward from a past date'),
          ('feedback', 'an output that returns as an input'),
          ('tolerance', 'the margin within which a test is passed'),
          ('out-of-sample', 'data held back from the fitting'),
          ('iteration', 'one pass around a loop'),
          ('closed loop', 'a path that returns to its own starting point'),
          ('tuned', 'adjusted until a target is met')],
   expr=[('The model is first fitted to..., after which it is tested '
          'against...', 'the two-stage sentence a device answer needs'),
         ('where a sequence becomes a system',
          'names what a return path does'),
         ('the test has quietly stopped being a test',
          'states a failure that leaves no trace'),
         ('structure is judgement, fitting is mechanical',
          'separates two stages people conflate')],
   trans=['first', 'at this point', 'thereafter', 'where this occurs'],
  ),

  dict(
   sub='Why models agree with each other',
   step=5,
   read=[
    dict(heading='An ensemble that shares its mistakes',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'When several independent models of the same system produce '
          'similar answers, the agreement is ordinarily treated as evidence '
          'that the answer is approximately right. The reasoning is sound '
          'and rests entirely on the word independent, which in practice is '
          'almost never satisfied and is almost never examined. Agreement '
          'among related models tells you that they are related. The '
          'inference is not merely weakened by dependence between the '
          'sources; where the dependence is strong enough it carries no '
          'information about the answer at all.',
          'The mechanism is genealogical rather than mysterious. Modelling '
          'groups are small, their members train in each other’s '
          'departments, and the code itself is frequently inherited: a group '
          'founding a new centre takes the structure it knows and modifies '
          'it. A survey of climate models in the mid-2000s found that '
          'models nominally from different institutions shared substantial '
          'sections of code, in some cases without either group being aware '
          'of the overlap. Nothing improper had occurred: code is shared '
          'because sharing it is efficient, and the groups had no reason '
          'to track what a third party would later want to treat as '
          'independent evidence.',
          'The consequence is correlated error. If two models share an '
          'assumption about a process, and that assumption is wrong, both '
          'are wrong in the same direction by a similar amount, and their '
          'agreement provides no check at all. Worse, the ensemble spread '
          'understates the uncertainty, because the spread measures how '
          'much the models differ from each other and not how far any of '
          'them is from the truth. Those two quantities are related only '
          'when the models are independent, which is the condition that '
          'has just been shown to fail, so the spread is narrow for '
          'exactly the reason it should not be trusted.',
          'Methods for detecting this exist and are imperfect. One can '
          'measure the similarity of model outputs across many test cases '
          'and build a dependency tree; models clustering closely are '
          'treated as near-duplicates and down-weighted. This works where '
          'the shared assumption produces a detectable signature and fails '
          'where it does not, which is precisely where it matters most. A '
          'shared assumption that affects every output identically leaves '
          'no fingerprint in the comparison, because there is nothing for '
          'it to differ from.',
          'A second approach is structural rather than statistical. It asks '
          'each group to state the assumptions its model embeds and then '
          'counts, across the ensemble, how many distinct assumptions are '
          'actually represented. The counts are routinely sobering: an '
          'ensemble of twenty models may embody four or five genuinely '
          'distinct treatments of the process that drives most of the '
          'uncertainty. The groups themselves are usually unsurprised by '
          'that count and the funders usually are, which is a gap in '
          'expectations rather than in knowledge.',
          'This produces a conclusion that practitioners accept and '
          'presentations rarely convey. An ensemble is not a sample from the '
          'space of possible models. It is a sample from the space of '
          'models that happen to have been built, which is shaped by '
          'funding, by training and by the accident of which approaches '
          'succeeded early, and there is no reason to expect the truth to '
          'sit inside that sample. That last sentence is the one '
          'practitioners find obvious and readers find alarming, and the '
          'difference in reaction is itself worth attending to.',
          'The honest version of what an ensemble provides is narrower than '
          'the usual one and still substantial. It provides a lower bound on '
          'uncertainty: the system is at least this uncertain, because '
          'competent groups building reasonable models reach answers at '
          'least this far apart. That is genuinely informative. It is not a '
          'probability distribution over outcomes, and it is routinely '
          'presented as one.',
          'The presentational problem is severe and is not solved by '
          'disclaimers. A shaded band on a chart with the caption "model '
          'range" is read as the range within which the outcome will fall. '
          'Readers are not being careless; that is what a shaded band means '
          'everywhere else, and a footnote explaining that the band means '
          'something different does not survive the first time the chart is '
          'reproduced elsewhere. The chart outlives its caption, and any '
          'proposal that depends on the caption travelling with it has '
          'already failed.',
          'There is one practice that addresses this directly and is '
          'spreading slowly. It is to report, alongside the ensemble range, '
          'an estimate of how far outside it the truth might lie, derived '
          'from how often past ensembles have bracketed the eventual '
          'outcome. Where this has been done the answer has been '
          'uncomfortable: historical ensembles have contained the outturn '
          'rather less often than their spread implied they should.',
          'None of this supports the conclusion that models should not be '
          'used, which is the conclusion most frequently drawn from it by '
          'people who had reached it already. A model that is wrong in '
          'knowable ways is more useful than an intuition that is wrong in '
          'unknowable ones. The argument is about how the output should be '
          'described, not about whether the work should be done.',
          'The practical reading test is short. How many models are in the '
          'ensemble, and how many independent lineages do they represent? '
          'Does the spread include structural variation or only parameter '
          'variation? And has anybody checked how often ensembles of this '
          'kind have contained the eventual answer? Three questions, none '
          'technical, and the third is the one almost nobody asks.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Correlated error', 'Why models are related',
            'Detecting dependency', 'What an ensemble provides'], 1,
           'Shared training, shared departments and inherited code.'),
          ('Choose the best heading for paragraph 7.',
           ['Correlated error', 'The presentational problem',
            'What an ensemble actually provides',
            'The reading test'], 2,
           'A lower bound on uncertainty, not a distribution over '
           'outcomes.'),
          ('Choose the best heading for paragraph 10.',
           ['Why models are related',
            'Why this is not an argument against models',
            'The reading test', 'Detecting dependency'], 1,
           'A model wrong in knowable ways beats an intuition wrong in '
           'unknowable ones.'),
          ('The writer believes agreement among models is strong evidence '
           'that an answer is right.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1: agreement among related models shows only that '
           'they are related.'),
          ('The writer believes models should not be used for policy.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 10 calls that the conclusion drawn by people who had '
           'reached it already.'),
          ('When two models share a wrong assumption the result is '
           '____________ error.', None, 'correlated',
           'Paragraph 3, which also makes the spread too narrow.'),
          ('An ensemble of twenty models may embody only four or five '
           'distinct ____________ of the key process.', None,
           'treatments',
           'Paragraph 5, from the structural counting approach.'),
          ('An ensemble provides a lower ____________ on uncertainty.',
           None, 'bound',
           'Paragraph 7: the system is at least this uncertain.')])],
   listen=[
    dict(heading='A lecture on ensembles and independence', part='Part 4',
         task='A lecture on why models agree', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'Twenty models agree. How reassured should you be? '
           'The honest answer depends entirely on a word that appears in '
           'every textbook treatment and is almost never checked, and the '
           'word is independent.'),
          ('Lecturer', 'Here is why it usually fails. Modelling groups are '
           'small. People train in each other’s departments and take the '
           'structure they know when they move. Code gets inherited. A '
           'survey of climate models in the mid-2000s found models from '
           'nominally different institutions sharing substantial sections of '
           'code, and in some cases neither group knew.'),
          ('Lecturer', 'So you get correlated error. Two models share an '
           'assumption, the assumption is wrong, and both are wrong the same '
           'way by about the same amount. Their agreement checks nothing. '
           'And the spread of the ensemble understates the uncertainty, '
           'because spread measures how far the models are from each other, '
           'not how far any of them is from the truth.'),
          ('Lecturer', 'That sentence is the one I would have you write '
           'down. Models built from one tradition agree because they share '
           'a parent. Agreement is evidence of relatedness before it is '
           'evidence of anything else, and you have to rule the first out '
           'before you may use the second.'),
          ('Lecturer', 'There are two ways of checking. Statistically, you '
           'compare outputs across many cases and build a dependency tree, '
           'then down-weight the clusters. That works when the shared '
           'assumption leaves a signature and fails when it does not, which '
           'is exactly when you needed it.'),
          ('Lecturer', 'Structurally, you ask each group what assumptions '
           'their model embeds and count how many distinct ones the ensemble '
           'actually contains. The numbers are sobering. Twenty models, four '
           'or five genuinely different treatments of the process that '
           'drives most of your uncertainty.'),
          ('Lecturer', 'So what does an ensemble give you? A lower bound. '
           'The system is at least this uncertain, because competent people '
           'building reasonable models land at least this far apart. That is '
           'real information and it is not a probability distribution over '
           'outcomes, and it is presented as one constantly, including by '
           'me, on slides, last year.'),
          ('Lecturer', 'And the presentation problem does not yield to '
           'disclaimers. A shaded band captioned "model range" is read as '
           'where the answer will fall, because that is what shaded bands '
           'mean everywhere else. Your footnote will not survive the first '
           'time somebody reproduces the chart.'),
          ('Lecturer', 'Three questions, then. How many lineages, not how '
           'many models? Does the spread include structural variation or '
           'only parameters? And how often have ensembles of this kind '
           'actually contained the outturn? The third is the one nobody '
           'asks, and where it has been asked the answer was: less often '
           'than the spread implied.')],
         items=[
          ('The word that is almost never checked is',
           ['accurate', 'independent', 'calibrated', 'validated'], 1,
           'Which the textbook reasoning rests on entirely.'),
          ('The mid-2000s survey found that models from different '
           'institutions', ['used different methods', 'shared substantial '
            'sections of code', 'disagreed sharply', 'were '
            'unpublished'], 1,
           'In some cases without either group knowing.'),
          ('Ensemble spread measures',
           ['distance from the truth', 'how far models are from each '
            'other', 'parameter uncertainty only', 'forecast error'], 1,
           'Which is why it understates the uncertainty.'),
          ('The structural check counts',
           ['models', 'distinct assumptions represented',
            'institutions', 'publications'], 1,
           'Finding four or five across twenty models.'),
          ('An ensemble provides',
           ['a probability distribution', 'a lower bound on '
            'uncertainty', 'a central estimate', 'a validation'], 1,
           'Which the lecturer admits he has himself misrepresented.'),
          ('Where the third question has been asked, past ensembles '
           'contained the outturn', ['more often than implied',
            'less often than implied', 'exactly as implied',
            'always'], 1,
           'Which is the question almost nobody asks.')])],
   speak=dict(
    part='Part 3', focus='Agreement and truth',
    intro=('Five or six sentences. Try once to say why agreement can be '
           'weak evidence.'),
    qs=['If experts agree, does that make them right?',
        'Why do people find agreement convincing?',
        'How could you tell whether experts reached a view '
        'independently?',
        'Is disagreement among experts a bad sign?'],
    shape=[('answer', 'Only if they reached the view separately, which is '
            'rarer than it looks.'),
           ('support', 'Modelling groups train in the same departments.'),
           ('follow-up', 'Some of them inherit the actual code.'),
           ('support', 'So when they agree, part of what you are seeing is '
            'the shared parent.'),
           ('follow-up', 'Which means I would want to know how many '
            'lineages there are, not how many models.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='A premise every idea in the plan shares',
         prompt=('Should policy rely on models that cannot be tested '
                 'against outcomes? Brainstorm ten, run the six tests, name '
                 'the premise under each survivor — and then look for a '
                 'premise all of them share. Twelve minutes.'),
         plan=('Untestable models should inform policy and should not '
               'carry it alone, because what they supply is a lower bound '
               'on uncertainty rather than a distribution over outcomes, '
               'and almost every misuse consists of treating the first as '
               'the second',
               [('The case for using them rests on a premise about the '
                 'alternative, which is not no model but an unstated one',
                 ['a model wrong in knowable ways beats an intuition wrong '
                  'in unknowable ones',
                  'the alternative to a published model is an unpublished '
                  'one']),
                ('The case against rests on a premise about what the output '
                 'is, which is usually a misreading of what was published',
                 ['the ensemble range is a lower bound, not a probability',
                  'past ensembles contained the outturn less often than '
                  'their spread implied'])]),
         notes=[
          'The new step this unit adds is looking for a premise that every '
          'surviving idea shares. Here both ideas assume that the output is '
          'read as its authors intended, and once that shared premise is '
          'named it becomes the thesis rather than a support.',
          'A shared premise is the most dangerous kind, because the six '
          'tests cannot catch it: every idea passes individually and the '
          'whole plan falls together if the premise fails. Checking for one '
          'takes about ninety seconds and almost nobody does it.',
          'Notice that the thesis names a misuse rather than taking a side '
          'on the question as posed. That is only defensible because both '
          'ideas led there, which is what a shared premise does when you '
          'find it.'],
         criterion=[('Finding a premise every idea shares',
                     'Task Response'),
                    ('Letting the shared premise become the thesis',
                     'Coherence and Cohesion')],
         instruct='  Twelve minutes, timed. You write this in cycle 5.',
         lines=12)],
   gram=dict(
    point='Independence and its absence',
    explain=('Writing about whether sources are independent needs language '
             'for relatedness, shared origin and the inference each '
             'blocks. These patterns supply it.'),
    examples=['Models built from one tradition agree because they share a '
              'parent.',
              'Their agreement is evidence of relatedness before it is '
              'evidence of anything else.',
              'Two models sharing an assumption are wrong in the same '
              'direction.',
              'The spread measures distance between models, not distance '
              'from the truth.'],
    task='Rewrite each claim so that the dependence between sources is '
         'visible.',
    items=[('All twenty models give the same answer.',
            'Twenty models agree, representing perhaps five independent '
            'lineages between them.'),
           ('The experts are unanimous.',
            'The experts concur, having trained in three departments and '
            'read largely the same literature.'),
           ('Several studies confirm it.',
            'Several studies report the same result, four of them using the '
            'dataset the first one assembled.'),
           ('The models must be right.',
            'The models agree, which would be evidence of accuracy only if '
            'they had been built independently.'),
           ('The range shows how uncertain we are.',
            'The range shows how far these models fall from one another, '
            'which is a lower bound on how uncertain the system is.')]),
   vocab=[('ensemble spread', 'how far a set of models differ from each '
           'other'),
          ('structural uncertainty', 'uncertainty about the equations '
           'themselves'),
          ('correlated error', 'two sources wrong in the same '
           'direction'),
          ('lineage', 'the line of descent of a model or method'),
          ('shared parent', 'a common origin two models inherit from'),
          ('down-weight', 'to give less influence to near-duplicates'),
          ('co-dependence', 'sources that are not genuinely separate'),
          ('lower bound', 'a figure the true value is at least as large '
           'as')],
   expr=[('Models built from one tradition agree because they share a '
          'parent', 'the cycle’s central sentence'),
         ('agreement is evidence of relatedness before it is evidence of '
          'anything else', 'orders two inferences correctly'),
         ('a sample from the space of models that happen to have been '
          'built', 'names what an ensemble actually is'),
         ('wrong in knowable ways rather than unknowable ones',
          'defends a method without overclaiming')],
   trans=['consequently', 'which in turn', 'as a result',
          'the honest version'],
  ),

  dict(
   sub='What the spread does not measure',
   step=5,
   read=[
    dict(heading='The uncertainty that is outside the range',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Uncertainty in a quantitative projection comes in at least three '
          'kinds, and the published range in a typical report represents '
          'one of them, part of another, and none of the third. Since the '
          'three behave differently and call for different responses, '
          'collapsing them into a single shaded band is not a simplification '
          'but a change of subject.',
          'The first kind is parametric. The structure of the model is taken '
          'as given and the uncertainty concerns the values of the numbers '
          'inside it. This is the kind that quantitative methods handle '
          'well: vary the parameters across their plausible ranges, run the '
          'model many times, and report the distribution of results. Almost '
          'every published range is built this way, which is why the '
          'technique is so often mistaken for the whole of what '
          'uncertainty analysis can do.',
          'The second is structural. It concerns whether the equations are '
          'the right equations — whether a process has been omitted, '
          'whether a relationship assumed to be linear is linear, whether '
          'something treated as fixed varies. This cannot be explored by '
          'varying parameters, because it is a question about which '
          'parameters exist, and a model has no way of representing its own '
          'absence of a term. Asking a model how wrong its own structure '
          'might be is like asking a map how much of the territory it '
          'leaves out: the question is reasonable and the object cannot '
          'answer it.',
          'Ensembles are the standard response to structural uncertainty and '
          'are a partial one. Different models embody different structures, '
          'so their disagreement samples structural variation. But it '
          'samples only the structures somebody built, and the previous '
          'cycle described why that is a much narrower set than it appears. '
          'An ensemble explores structural uncertainty within a tradition '
          'and is silent about structures the tradition never considered.',
          'The third kind has no satisfactory name and is usually called '
          'deep uncertainty. It concerns the possibility that the system '
          'itself changes: that a relationship stable for a century stops '
          'holding, that a new mechanism becomes dominant, that the '
          'definition of the measured quantity shifts beneath the series. '
          'No distribution over parameters and no ensemble of structures '
          'addresses this, because every member of both assumes the system '
          'is the one being modelled. This is not a failure of effort and '
          'will not be repaired by more computing, and saying so plainly '
          'is more useful than the reassurance usually offered in its '
          'place.',
          'The usual objection to taking deep uncertainty seriously is that '
          'it licenses inaction: if anything might happen, nothing can be '
          'planned. This is a misreading. The response to deep uncertainty '
          'is not paralysis but a different kind of planning — decisions '
          'robust across many futures rather than optimal for one, '
          'arrangements that can be changed cheaply, and monitoring designed '
          'to detect that the world has moved rather than to refine an '
          'estimate within it. The three are different disciplines and '
          'the last of them is the one most often omitted from a '
          'programme, because monitoring designed to detect being wrong is '
          'harder to fund than monitoring designed to show progress.',
          'That distinction, between optimising and being robust, is the '
          'practical payoff of the whole analysis. An optimal plan is the '
          'best plan if the model is right. A robust plan is one that is '
          'tolerable across the range of ways the model might be wrong, and '
          'it is reliably worse than the optimal plan in the case the model '
          'describes. Choosing it is choosing to pay a known cost for '
          'protection against an unquantified one.',
          'Where the three kinds are conflated, a predictable pattern '
          'follows. A range is published; it is parametric; it is read as '
          'covering everything; the outcome falls outside it; and the '
          'modelling is described as having failed. The modellers then point '
          'out, correctly and unhelpfully, that they had labelled the range '
          'as parametric, and the cycle repeats at the next projection.',
          'Breaking that cycle requires something modellers find '
          'uncomfortable, which is a published statement of what the range '
          'does not cover, in the same prominence as the range. "This band '
          'reflects parameter uncertainty only; structural and deeper '
          'uncertainties are not represented and are likely to be larger" '
          'is a sentence that would change how a great many charts are '
          'read.',
          'The objection to it is commercial rather than scientific, and is '
          'rarely stated in those terms. A report carrying that sentence is '
          'easier to attack and harder to commission work from, and groups '
          'that have adopted the practice report that it costs them. That is '
          'a real cost, borne by the honest, and it will not be fixed by '
          'exhortation. Appeals to professional virtue have been made for '
          'thirty years in this area and have produced the practice that '
          'currently exists.',
          'What would fix it is a requirement applying to everybody at '
          'once, which is how such problems are normally solved in other '
          'fields and has barely been attempted in this one. A funder '
          'requiring the sentence of all its grantees imposes no '
          'competitive disadvantage on any of them, which is the whole of '
          'the argument and is not technical at all.',
          'The reader’s version of all this is a single question, and it '
          'is the one to ask of any shaded band on any chart: what is this '
          'band a range of? If the answer is "the results of running this '
          'model with different parameter values", then the band is a '
          'statement about the model and not about the world, and the '
          'distance between those two things is exactly what is not '
          'shown.'],
         items=[
          ('Which paragraph explains why structural uncertainty cannot be '
           'explored by varying parameters?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'A model has no way of representing its own absence of a '
           'term.'),
          ('Which paragraph answers the objection that deep uncertainty '
           'licenses inaction?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'Robust planning rather than paralysis.'),
          ('Which paragraph describes the objection as commercial rather '
           'than scientific?',
           ['Paragraph 8', 'Paragraph 9', 'Paragraph 10',
            'Paragraph 11'], 2,
           'A report carrying the sentence is harder to commission work '
           'from.'),
          ('The writer believes deep uncertainty makes planning '
           'impossible.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 calls that a misreading.'),
          ('The writer believes a robust plan outperforms an optimal one '
           'where the model is correct.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 says it is reliably worse in that case.'),
          ('Almost every published range represents ____________ '
           'uncertainty.', None, 'parametric',
           'Paragraph 2, built by varying the numbers inside a fixed '
           'structure.'),
          ('An ensemble is silent about structures the ____________ never '
           'considered.', None, 'tradition',
           'Paragraph 4, which limits how far it samples structural '
           'variation.'),
          ('The fix the writer proposes is a requirement applying to '
           '____________ at once.', None, 'everybody',
           'Paragraph 11: it imposes no competitive disadvantage on '
           'any.')])],
   listen=[
    dict(heading='Two modellers disagree about uncertainty', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Dr Fairweather-Oduya runs a climate modelling group. '
           'Professor Nakamura-Belluomini works on decision-making under '
           'uncertainty.'),
          ('Fairweather-Oduya', 'I will start with what my own field does '
           'badly. We publish a band, we label it parametric in the caption, '
           'and we know perfectly well it will be read as the range the '
           'answer falls in. Labelling is not the same as communicating and '
           'we have been hiding behind the first for twenty years.'),
          ('Nakamura-Belluomini', 'I was going to open with that so I will '
           'open with my own instead. My field tells you to plan for deep '
           'uncertainty and is extremely vague about how. "Choose robust '
           'options" is not advice until somebody says what to give up, and '
           'robustness always costs something in the case the model actually '
           'describes.'),
          ('Fairweather-Oduya', 'How much, typically?'),
          ('Nakamura-Belluomini', 'In the infrastructure cases I have seen, '
           'between eight and twenty per cent of the optimised net benefit. '
           'That is the premium, and people are entitled to decide it is too '
           'high. What they are not entitled to do is pretend it is '
           'zero.'),
          ('Fairweather-Oduya', 'Then our two confessions fit together '
           'rather neatly. My band understates the uncertainty, so your '
           'premium looks more expensive than it is.'),
          ('Nakamura-Belluomini', 'That is exactly the connection and I had '
           'not stated it that way. If the true uncertainty is wider than '
           'the published band, then the insurance is being priced against '
           'the wrong risk and looks like a bad deal.'),
          ('Fairweather-Oduya', 'There is a second thing my side does '
           'badly and you have not raised it. We present the ensemble '
           'spread as though the models were independent, and they are '
           'not: people train together and the code gets inherited. So the '
           'band is too narrow twice over, once for leaving out structure '
           'and once for double-counting the structures it does '
           'include.'),
          ('Nakamura-Belluomini', 'I did not raise it because I did not '
           'know it was that bad, and it makes my premium look even better '
           'value than I was claiming, which is an awkward way to win an '
           'argument.'),
          ('Fairweather-Oduya', 'So what do you want from me?'),
          ('Nakamura-Belluomini', 'One sentence, as prominent as the band. '
           'This band reflects parameter uncertainty only; structural and '
           'deeper uncertainties are not represented and are likely to be '
           'larger.'),
          ('Fairweather-Oduya', 'I would sign that today and I would be '
           'signing it alone, which is the problem. A report carrying it is '
           'easier to attack, and the group down the road that omits it wins '
           'the next contract.'),
          ('Nakamura-Belluomini', 'Then it has to come from the funder, as a '
           'condition on everybody at once.'),
          ('Fairweather-Oduya', 'Which makes this a procurement question '
           'rather than a scientific one, and I have spent eleven years '
           'treating it as a scientific one.')],
         items=[
          ('Fairweather-Oduya opens by conceding that',
           ['the models are wrong', 'labelling a band is not the same as '
            'communicating', 'the data are poor', 'the bands are too '
            'wide'], 1,
           'Which her field has been hiding behind for twenty years.'),
          ('Nakamura-Belluomini’s own concession is that his field',
           ['overstates uncertainty', 'is vague about how to plan for '
            'deep uncertainty', 'ignores models', 'is too '
            'mathematical'], 1,
           '"Choose robust options" is not advice until something is given '
           'up.'),
          ('The robustness premium in infrastructure cases is',
           ['under five per cent', 'eight to twenty per cent',
            'about half', 'unmeasurable'], 1,
           'Measured against the optimised net benefit in those '
           'cases.'),
          ('The connection between their two confessions is that an '
           'understated band makes robustness look',
           ['cheaper', 'more expensive than it is', 'unnecessary',
            'compulsory'], 1,
           'Because the insurance is priced against the wrong risk.'),
          ('What does he ask her for?',
           ['a wider band', 'one sentence as prominent as the band',
            'a new model', 'an ensemble'], 1,
           'Naming what the band does not cover.'),
          ('Why does she say she would be signing it alone?',
           ['nobody agrees', 'a report carrying it is easier to attack '
            'and loses contracts', 'it is unpublishable', 'it is '
            'untrue'], 1,
           'Which makes it a procurement question rather than a scientific '
           'one.')])],
   speak=dict(
    part='Part 3', focus='Reporting what you do not know',
    intro=('The hardest turn in the unit. Try once to describe an '
           'uncertainty that is not in the range.'),
    qs=['How should uncertainty be communicated to the public?',
        'Is it possible to plan for things nobody predicted?',
        'Should experts admit the limits of what they know?',
        'Does admitting uncertainty reduce trust?'],
    shape=[('answer', 'By saying what the range does not cover, as '
            'prominently as the range.'),
           ('support', 'Most published bands vary the numbers inside a '
            'fixed model.'),
           ('follow-up', 'They say nothing about the model being the wrong '
            'model.'),
           ('support', 'And nothing at all about the system itself '
            'changing.'),
           ('follow-up', 'So the band is a statement about the model '
            'rather than about the world, and almost nobody reads it that '
            'way.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Are computer models the best guide we have?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some say computer models are the best guide we '
                 'have to the future. To what extent do you agree? Write at '
                 'least 250 words.'),
         model=[
          'They are the best guide we have, and the question as posed '
          'invites the wrong comparison. The alternative to a published '
          'model has never been no model; it is an unpublished one, held in '
          'somebody’s head, with assumptions nobody can inspect and a '
          'confidence nobody can audit. Against that competitor the case is '
          'not close.',
          'The argument for models is therefore comparative rather than '
          'absolute. A model that is wrong is wrong in a particular way, '
          'traceable to a stated assumption, and when the outturn arrives '
          'the error can be located and the next version improved. An '
          'intuition that is wrong is wrong in no locatable way at all, '
          'produces no record, and is typically defended afterwards by '
          'recalling it as having been more hedged than it was.',
          'That said, the way model output is presented does genuine harm '
          'and the harm has a specific shape. Almost every published range '
          'reflects parameter uncertainty: the numbers inside the model are '
          'varied while the model itself is held fixed. It therefore says '
          'nothing about whether the equations are the right equations, and '
          'nothing whatever about the system changing. Readers take a shaded '
          'band to mean the range within which the answer will fall, which '
          'is what shaded bands mean everywhere else, and a footnote does '
          'not survive the chart being reproduced.',
          'A second problem compounds it. Agreement between models is read '
          'as corroboration, and models are frequently related — built by '
          'people trained together, sometimes sharing code outright — so '
          'their agreement partly reflects a shared parent rather than a '
          'shared truth, and the spread of an ensemble understates the '
          'uncertainty for the same reason.',
          'My position, then, is that models are the best guide available '
          'and that the published output is systematically read as claiming '
          'more than it does. The remedy is not methodological but '
          'editorial: one sentence, as prominent as the figure, stating '
          'what the range does not cover. The obstacle is that a group '
          'publishing that sentence alone is easier to attack than one that '
          'omits it, which makes this a question for whoever commissions the '
          'work rather than for whoever does it — and that is an '
          'uncomfortable conclusion for an argument that began about '
          'science.'],
         notes=[
          'The first paragraph answers the question and then corrects the '
          'comparison the question assumed. Structure 11 needs the '
          'circumstances named early, and here the circumstance is what the '
          'alternative actually is.',
          'Paragraphs 3 and 4 are two distinct failures — one about what a '
          'range covers, one about whether sources are independent — not '
          'one failure stated twice. That is the overlap test paying out '
          'inside the essay.',
          'The conclusion relocates the problem from science to '
          'procurement and says plainly that this is uncomfortable. An '
          'essay that notices where its own argument has ended up is doing '
          'something very few do.'],
         criterion=[('Correcting the comparison the question assumed',
                     'Task Response'),
                    ('Two distinct failures rather than one repeated',
                     'Coherence and Cohesion'),
                    ('Noticing where the argument has ended up',
                     'Task Response')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Distinguishing kinds of uncertainty',
    explain=('Three kinds of uncertainty need three ways of writing about '
             'them, and the commonest band 7 fault is one vocabulary doing '
             'all three jobs. These patterns separate them.'),
    examples=['The range measures disagreement among models, not distance '
              'from the truth.',
              'The band reflects parameter uncertainty only.',
              'Structural uncertainty concerns whether the equations are '
              'the right equations.',
              'Deep uncertainty concerns the system itself changing.'],
    task='Rewrite each sentence so that the kind of uncertainty is '
         'named.',
    items=[('We do not know what will happen.',
            'The parameter ranges are known; whether the structure is '
            'correct is not, and whether the system will behave as it has '
            'is a further question again.'),
           ('The models disagree.',
            'The ensemble spread reflects structural variation among the '
            'models that were built, and not among those that were not.'),
           ('The forecast could be wrong.',
            'The projection could be wrong in its parameters, in its '
            'structure, or because the relationship it rests on ceases to '
            'hold.'),
           ('Anything could happen.',
            'The system may change in ways no member of the ensemble '
            'represents, which is a reason for robust planning rather than '
            'for none.'),
           ('The band shows the uncertainty.',
            'The band shows parameter uncertainty; structural and deeper '
            'uncertainties are not represented in it.')]),
   vocab=[('parametric', 'to do with the values inside a fixed model'),
          ('deep uncertainty', 'uncertainty about whether the system '
           'itself holds'),
          ('overconfidence', 'claiming more precision than is '
           'warranted'),
          ('robust', 'tolerable across many futures rather than best for '
           'one'),
          ('optimised', 'best under one assumed future'),
          ('robustness premium', 'what robustness costs in the expected '
           'case'),
          ('under-dispersed', 'showing less spread than the truth '
           'warrants'),
          ('beyond the range', 'outside what a published band covers')],
   expr=[('The range measures disagreement among models, not distance from '
          'the truth', 'the cycle’s governing sentence'),
         ('labelling is not the same as communicating',
          'rejects a technically sufficient defence'),
         ('a statement about the model and not about the world',
          'relocates what a figure describes'),
         ('people are entitled to decide the premium is too high; they are '
          'not entitled to pretend it is zero',
          'separates a value judgement from a factual one')],
   trans=['admittedly', 'nevertheless', 'in short', 'that said'],
  ),
 ],
 technique=dict(
  title='A device with a feedback loop, described without anthropomorphism',
  body=('A diagram with a return path is the hardest Task 1 in the family, '
        'and it goes wrong in two specific ways that are worth naming '
        'before you write. The first is structural: candidates walk the '
        'arrows in order and never say what kind of thing each box is, so '
        'the reader gets a route without a map. Group the components first '
        '— three for construction, three for testing, three for use — and '
        'then describe the movement. The second is lexical and costs marks '
        'under Lexical Resource: the model learns, decides, tries, wants, '
        'remembers. It does none of these. A loop is described with a '
        'conditional and a passive: where the test falls outside tolerance, '
        'the parameters are adjusted and the test is repeated. Say what '
        'happens and under what condition, and the intention disappears '
        'without the sentence becoming awkward.'),
  panel=[('Group before you walk',
          'Nine boxes are three groups. Name the groups, then trace the '
          'path once.'),
         ('Name the loop in the Overall',
          'A return path is why this diagram was set. A weak answer '
          'describes a sequence and never notices.'),
         ('Conditional, not intention',
          '"Where the hindcast falls outside tolerance" replaces "if the '
          'model is unhappy with the result".'),
         ('Passive for every step the machine takes',
          'The parameters are adjusted; the outturn is added back. No '
          'subject that could want anything.')],
  task='Describe the cycle 3 diagram in 150 words: groups first, then the '
       'path, with both loops named and no verb of intention.',
  qs=['What are your three groups, and what is in each?',
      'Which two arrows return to an earlier stage?',
      'How did you phrase the fast loop without saying "tries again"?',
      'Which verbs did you have to replace?',
      'Did your Overall statement mention both loops?']),
 outlining=dict(
  title='Testing a premise that every idea in the plan shares',
  body=('The six tests work on ideas one at a time, and the premise test '
        'works on ideas one at a time, and a plan can pass both and still '
        'collapse as a whole. That happens when every surviving idea rests '
        'on the same unstated assumption: each idea is fine, and if the '
        'shared premise fails they all fail together. So after you have '
        'named the premise under each survivor, read your premises side by '
        'side and ask what they have in common. Usually nothing. When '
        'there is something, you have found the real subject of your essay, '
        'and the thesis should be about that rather than about the ideas it '
        'was holding up. It costs ninety seconds and it is the one check '
        'that can save an entire plan.'),
  frame=('Untestable models should inform policy and should not carry it '
         'alone, because what they supply is a lower bound on uncertainty '
         'rather than a distribution over outcomes, and almost every '
         'misuse consists of treating the first as the second',
         [('The case for using them rests on a premise about the '
           'alternative, which is not no model but an unstated one',
           ['a model wrong in knowable ways beats an intuition wrong in '
            'unknowable ones',
            'the alternative to a published model is an unpublished one']),
          ('The case against rests on a premise about what the output is, '
           'which is usually a misreading of what was published',
           ['the ensemble range is a lower bound, not a probability',
            'past ensembles contained the outturn less often than their '
            'spread implied'])]),
  task='Take your cycle 4 premises, write them in a column, and answer '
       'the five questions below before you write anything else.',
  qs=['What do your premises have in common?',
      'If the shared one failed, how many ideas would survive?',
      'Is the shared premise more interesting than the ideas?',
      'Can you state it in one sentence a reader would accept?',
      'Should it be your thesis?'],
  answers=['often a view about how something is read or used',
           'at this level, usually none, which is the warning',
           'frequently, because it is doing more work',
           'if not, it is not yet a premise, it is a mood',
           'if it survives the first four, yes']),
 candos=['I can read terms of use for what I may not claim',
         'I can describe a device with a loop without giving it '
         'intentions',
         'I can explain why agreement among models can be weak evidence',
         'I can say what a published range does and does not cover',
         'I can find a premise that every idea in my plan shares'],
 tip=('Before describing any diagram, group the boxes and count the arrows '
      'that go backwards. The groups give you your paragraphs and the '
      'backward arrows are why the diagram was chosen.'),
)
