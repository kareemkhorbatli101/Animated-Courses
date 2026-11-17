# -*- coding: utf-8 -*-
"""Unit 59 - Consciousness and Explanation. IELTS Volume 6, band 7.5."""

_PARA = dict(kind='process',
             title='How an imaging task is designed and interpreted',
             sub='a command-following paradigm, and the two outcomes it '
                 'can produce',
             stages=[
              ('Baseline', 'the scanner records the resting state for two '
               'minutes'),
              ('Instruction', 'a recorded voice asks the patient to '
               'imagine playing tennis'),
              ('Active block', 'thirty seconds of imagining, then thirty '
               'of rest'),
              ('Repetition', 'the block is repeated ten times in a fixed '
               'order'),
              ('Comparison', 'activity during blocks is compared with '
               'activity during rest'),
              ('Statistical test', 'the difference is tested against a '
               'threshold set in advance'),
              ('Detected', 'the pattern follows the instruction; the '
               'patient was responding'),
              ('Not detected', 'no pattern found; the test cannot '
               'distinguish absence from failure')],
             phases=[('Design', 0, 3),
                     ('Analysis', 4, 5),
                     ('Two possible outcomes, which are not symmetrical',
                      6, 7)])

UNIT = dict(
 n=59, vol=6, level='C1', band='7.5',
 theme='Consciousness and Explanation',
 opener=(
   'The hardest asymmetry in this book: a method that can prove somebody '
   'is there and cannot prove that nobody is. The unit begins with the '
   'paperwork of deciding for a person who cannot decide, moves through '
   'four clinicians reading one number four ways, builds an imaging '
   'paradigm stage by stage so that you can describe a method separately '
   'from what it licenses, and ends on an argument philosophers have been '
   'having for forty years about whether the gap in our explanation is a '
   'gap in the world.'),

 cycles=[
  dict(
   sub='Consenting for someone else',
   step=2,
   read=[
    dict(heading='Decisions for people who cannot decide',
         kind='Official guidance',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('Capacity guidance is read for the test, not for the '
                'conclusion',
                ['Guidance of this kind never says who lacks capacity. It '
                 'states a test, says it must be applied to one decision '
                 'at a time, and leaves the conclusion to whoever is '
                 'applying it.',
                 'Find the sentence that says capacity is decision-'
                 'specific. Every question about scope and review hangs '
                 'from it, and candidates who miss it answer three '
                 'questions wrongly in a row.']),
         paras=[
          'A person is assumed to have capacity unless it is established '
          'that they do not. The assumption holds until a specific '
          'decision has been assessed, and the burden of establishing an '
          'absence of capacity falls on whoever proposes to act for '
          'another person.',
          'Capacity is assessed for one decision at a time. A person may '
          'lack capacity to decide about major surgery and retain capacity '
          'to decide where they live, and an assessment of one decision '
          'carries no authority over any other.',
          'The test has four parts. The person must be able to understand '
          'the information relevant to the decision, to retain it long '
          'enough to use it, to weigh it in reaching a choice, and to '
          'communicate that choice by any means. Failure on any one part '
          'is sufficient.',
          'Where capacity is absent, the decision must be made in the '
          'person’s best interests, which is not the same as the '
          'decision a reasonable person would make. It requires '
          'considering the person’s own past wishes, beliefs and values, '
          'and the views of those close to them.',
          'The least restrictive option that meets the need must be '
          'preferred. Where two courses of action would both serve the '
          'person’s interests, the one interfering less with their rights '
          'must be chosen, and a decision to reject it must be '
          'recorded.',
          'An advance decision made while the person had capacity takes '
          'precedence over an assessment of best interests, provided it is '
          'valid and applies to the circumstances that have arisen. A '
          'decision refusing life-sustaining treatment must be in writing, '
          'signed and witnessed.',
          'Authority to act for another person must be reviewed. The '
          'review interval is set when authority is granted, is recorded '
          'on the order, and is never longer than two years for a decision '
          'about residence or treatment.'],
         items=[
          ('Capacity is assessed for one ____________ at a time.', None,
           'decision',
           'Paragraph 2, which is why assessments name the decision they '
           'relate to.'),
          ('The burden of establishing an absence of capacity falls on',
           ['the person themselves', 'whoever proposes to act for them',
            'a court', 'a medical panel'], 1,
           'Paragraph 1, since capacity is assumed until established '
           'otherwise.'),
          ('How many parts does the capacity test have?',
           ['two', 'three', 'four', 'five'], 2,
           'Paragraph 3: understand, retain, weigh and communicate.'),
          ('Best interests is not the same as the decision a '
           '____________ person would make.', None, 'reasonable',
           'Paragraph 4, which requires the person’s own values.'),
          ('Where two options both serve the person’s interests, the one '
           'chosen must be', ['the cheaper', 'the least restrictive',
            'the faster', 'the one the family prefers'], 1,
           'Paragraph 5, and rejecting it must be recorded.'),
          ('The review interval for a decision about residence or '
           'treatment is never longer than ____________ years.', None,
           'two',
           'Paragraph 7, recorded on the order itself.')]),
    dict(heading='Applying to act for another person',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Establish first whether authority already exists. A lasting '
          'power of attorney made by the person while they had capacity '
          'may already cover the decision, and an application that '
          'duplicates an existing authority will be refused without a '
          'hearing.',
          'Obtain a capacity assessment naming the decision. The '
          'assessment must be completed by a practitioner who has seen the '
          'person within the preceding three months, and must state which '
          'part or parts of the four-part test the person does not '
          'meet.',
          'Notify everyone entitled to be told. The list is set out in the '
          'rules and includes the person themselves, who must be told in a '
          'form they can understand, and anybody previously consulted '
          'about their care. Failure to notify is the commonest reason '
          'applications are returned.',
          'Set out the scope you are asking for and no more. An '
          'application for general authority where a single decision is at '
          'issue will be narrowed by the court, which adds about eleven '
          'weeks, and the review interval you propose should be stated on '
          'the form rather than left blank. An application that names one '
          'decision, one assessment and one review date is the kind the '
          'court processes without correspondence, and correspondence is '
          'where the time goes.'],
         items=[
          ('Check first whether a lasting power of ____________ already '
           'covers the decision.', None, 'attorney',
           'Paragraph 1: duplicate applications are refused.'),
          ('The assessing practitioner must have seen the person within '
           '____________ months.', None, 'three',
           'Paragraph 2, and must name which part of the test fails.'),
          ('Failure to ____________ is the commonest reason applications '
           'are returned.', None, 'notify',
           'Paragraph 3, including notifying the person themselves.'),
          ('An application for general authority where one decision is at '
           'issue will be ____________ by the court.', None, 'narrowed',
           'Paragraph 4, which adds about eleven weeks.')])],
   listen=[
    dict(heading='Applying for authority to decide for a relative',
         part='Part 1',
         task='A call to a court enquiry service', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Clerk', 'Court of Protection enquiries, Lysander speaking.'),
          ('Caller', 'I need to apply to make decisions for my mother.'),
          ('Clerk', 'Which decisions?'),
          ('Caller', 'All of them, really.'),
          ('Clerk', 'That is what everybody says and it is the thing most '
           'likely to slow you down. The court grants authority decision '
           'by decision.'),
          ('Caller', 'Then where she lives, and her medical treatment.'),
          ('Clerk', 'That is two, and both are on the same form. Has she '
           'ever made a lasting power of attorney?'),
          ('Caller', 'I do not know.'),
          ('Clerk', 'Find out before you apply. If one exists and covers '
           'these decisions, your application is refused without a '
           'hearing.'),
          ('Caller', 'How do I find out?'),
          ('Clerk', 'Search the register. It is free and it takes a '
           'day.'),
          ('Caller', 'And the assessment?'),
          ('Clerk', 'A practitioner who has seen her within the last three '
           'months. It must name the decision and say which part of the '
           'four-part test she fails.'),
          ('Caller', 'Her GP saw her in July.'),
          ('Clerk', 'That is outside the window now. You will need a newer '
           'one.'),
          ('Caller', 'Is there anything else people get wrong?'),
          ('Clerk', 'Notification. There is a list in the rules and your '
           'mother is on it — she must be told, in a form she can '
           'understand, even where the application says she cannot '
           'decide.'),
          ('Caller', 'That seems strange.'),
          ('Clerk', 'It is the single commonest reason we send '
           'applications back, and when people hear the reason they '
           'usually stop thinking it is strange.'),
          ('Caller', 'How long does it take?'),
          ('Clerk', 'Sixteen weeks if the papers are right. Longer if we '
           'have to narrow the scope, which adds about eleven.'),
          ('Caller', 'And is it permanent?'),
          ('Clerk', 'No. There is a review interval on the order, never '
           'more than two years for these two decisions, and you propose '
           'it on the form yourself.'),
          ('Caller', 'Can I have a reference?'),
          ('Clerk', 'P as in Peter, four nine zero six.'),
          ('Caller', 'Thank you.')],
         items=[
          ('Decisions applied for: where she ____________, and medical '
           'treatment', None, 'lives',
           'Narrowed from "all of them" at the start of the call.'),
          ('Check the register for a lasting power of ____________', None,
           'attorney',
           'Free to search, and the clerk says it takes a day.'),
          ('Capacity assessment: by a practitioner who has seen her within '
           '____________ months', None, 'three',
           'The July assessment is outside the window.'),
          ('Commonest reason applications are returned: failure to '
           '____________', None, 'notify',
           'The person themselves is on the list.'),
          ('Time taken if the papers are correct: ____________ weeks',
           None, 'sixteen',
           'With about eleven more if the scope must be narrowed.'),
          ('Reference number: P-____________', None, '4906',
           'Given at the very end of the call, after the review interval.')])],
   speak=dict(
    part='Part 1', focus='Decisions made on behalf of others',
    intro=('Two or three sentences each. Use a real occasion if you '
           'have one.'),
    qs=['Has anyone ever made a decision for you?',
        'Have you ever decided something on someone else’s behalf?',
        'Is it harder to decide for someone else than for yourself?',
        'Who should decide when a person cannot?'],
    shape=[('answer', 'My father, about a school, when I was eleven.'),
           ('support', 'He chose the one further away and did not explain '
            'why until later.'),
           ('follow-up', 'He was right, and I still think he should have '
            'explained at the time.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a hospital to explain a decision about a relative',
         prompt=('A hospital has made a decision about the care of a '
                 'relative of yours who cannot decide for themselves. '
                 'Write a letter to the hospital. In your letter: say '
                 'which decision you are writing about; ask how it was '
                 'reached; say what you would like to happen. Write at '
                 'least 150 words.'),
         model=[
          'Dear Dr Ferreira-Whitlock,',
          'I am writing about the decision to move my mother, Theodora '
          'Oyelaran, from Ward 7 to the Lindisfarne residential unit, '
          'communicated to me by telephone on 4 November.',
          'My mother was assessed in September as lacking capacity to '
          'decide about her residence. I do not dispute that assessment '
          'and I am not writing to object to the move itself.',
          'I should be grateful for an account of how the decision was '
          'reached. In particular, I should like to know who was '
          'consulted, whether my mother’s own previously expressed wishes '
          'about remaining in the city were taken into account, and what '
          'less restrictive options were considered before a residential '
          'placement was chosen. Her notes from 2019 record those wishes '
          'in her own words.',
          'I would ask for three things: a written summary of the best '
          'interests assessment, the opportunity to attend any further '
          'meeting at which her placement is discussed, and confirmation '
          'of the date on which the decision will next be reviewed.',
          'I am content for this to be dealt with by letter rather than at '
          'a meeting if that is quicker.',
          'Yours sincerely,',
          'Casimir Oyelaran'],
         notes=[
          'The second paragraph concedes the capacity assessment and says '
          'the letter is not an objection to the move. A reader who '
          'expects to be fighting about capacity reads the rest of the '
          'letter entirely differently once that is cleared away.',
          'The three requests are specific and each one is cheap to grant. '
          'A letter asking for a summary, an invitation and a date is '
          'answerable in twenty minutes; a letter asking for an '
          'explanation is answerable in a month or never.',
          'The last line offers the reader the quicker route. Giving the '
          'reader a way to satisfy you without a meeting is a '
          'sophisticated and very effective closing move in a formal '
          'letter of enquiry.'],
         criterion=[('Conceding what is not in dispute',
                     'Task Response'),
                    ('Three requests that are each cheap to grant',
                     'Task Achievement'),
                    ('Offering the reader the quicker route',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Enquiry with reference to process and rights',
    explain=('Asking how a decision was reached, rather than asserting '
             'that it was wrong, keeps a letter inside the reader’s own '
             'procedure. These patterns do it.'),
    examples=['I should be grateful for an account of how the decision was '
              'reached.',
              'I do not dispute the assessment and I am not writing to '
              'object to the move.',
              'I should like to know what less restrictive options were '
              'considered.',
              'I would ask for confirmation of the date of the next '
              'review.'],
    task='Rewrite each complaint as an enquiry about process.',
    items=[('You had no right to move her.',
            'I should be grateful for an account of the authority under '
            'which the move was decided.'),
           ('Nobody asked me.',
            'I should like to know who was consulted before the decision '
            'was reached.'),
           ('You ignored what she wanted.',
            'I should like to know whether my mother’s previously '
            'expressed wishes were taken into account.'),
           ('There must have been a better option.',
            'I should like to know what less restrictive options were '
            'considered and on what grounds they were rejected.'),
           ('This cannot be permanent.',
            'I would ask for confirmation of the date on which the '
            'decision will next be reviewed.')]),
   vocab=[('decision-making capacity', 'the ability to make a particular '
           'decision'),
          ('best interests', 'the standard for deciding for another '
           'person'),
          ('substitute decision-maker', 'a person authorised to decide for '
           'another'),
          ('deputy', 'someone appointed by a court to decide'),
          ('advance decision', 'a refusal of treatment made in '
           'advance'),
          ('least restrictive', 'interfering as little as possible with '
           'rights'),
          ('lasting power', 'authority granted by a person in advance'),
          ('next of kin', 'the closest relative, who has no automatic '
           'authority')],
   expr=[('I should be grateful for an account of how the decision was '
          'reached', 'the central sentence of an enquiry letter'),
         ('I do not dispute the assessment', 'concedes what is not at '
          'issue'),
         ('what less restrictive options were considered',
          'invokes the reader’s own standard'),
         ('I am content for this to be dealt with by letter',
          'offers the reader the cheaper route')],
   trans=['furthermore', 'in this connection', 'in particular',
          'I would ask for'],
  ),

  dict(
   sub='What a score means',
   step=4,
   read=[
    dict(heading='Four clinicians on the same assessment',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Dr Ravensworth-Idowu, rehabilitation: The scale was built to '
          'track change in one patient over weeks. It does that well. It '
          'was not built to decide anything on a single occasion, and the '
          'authors say so in the manual, on page four, where nobody reads '
          'it.',
          'B  Dr Fontaine-Abara, intensive care: My difficulty is the '
          'floor. Four of the scale’s points require a motor response, '
          'and a patient who cannot move scores the minimum whatever is '
          'going on inside. The number is then recorded as though it were '
          'a measurement of awareness.',
          'C  Dr Hollingbury, neurology: I accept all of that and I still '
          'use it daily, because the alternative in practice is not a '
          'better instrument but an unrecorded impression. A flawed number '
          'that two people can compare beats a confident opinion that '
          'nobody can.',
          'D  Dr Nwachukwu-Beale, who trains assessors: The agreement '
          'between assessors is the part nobody audits. We measured it '
          'here and found two experienced clinicians differing by three '
          'points on the same patient within an hour, which is more than '
          'the difference that triggers a change in care. The published '
          'figures are reassuring and were obtained under conditions no '
          'ward resembles, with trained raters, unlimited time and no '
          'competing claim on their attention.'],
         items=[
          ('Which clinician says the scale was built to track change '
           'rather than to decide?',
           ['Ravensworth-Idowu', 'Fontaine-Abara', 'Hollingbury',
            'Nwachukwu-Beale'], 0,
           'With the manual saying so on page four.'),
          ('Which clinician describes a floor effect?',
           ['Ravensworth-Idowu', 'Fontaine-Abara', 'Hollingbury',
            'Nwachukwu-Beale'], 1,
           'Four points require a motor response.'),
          ('Which clinician defends the scale by comparison with what '
           'would replace it?',
           ['Ravensworth-Idowu', 'Fontaine-Abara', 'Hollingbury',
            'Nwachukwu-Beale'], 2,
           'An unrecorded impression rather than a better instrument.'),
          ('Which clinician reports measuring agreement between '
           'assessors?',
           ['Ravensworth-Idowu', 'Fontaine-Abara', 'Hollingbury',
            'Nwachukwu-Beale'], 3,
           'Two clinicians differing by three points within an hour.'),
          ('Hollingbury believes the scale is a good instrument.',
           ['Yes', 'No', 'Not Given'], 1,
           'He calls it flawed and defends it against the alternative.',
           {0: 'Yes would need approval; he calls it flawed and '
               'defends it only comparatively.', 2: 'Not Given is wrong because he rates it.'}),
          (
           'Nwachukwu-Beale reports that the disagreement found was '
           'larger than the difference that changes care.',
           ['Yes', 'No', 'Not Given'], 0,
           'Three points, against the threshold for a change.',
           {1: 'No would need it smaller; three points against the '
               'threshold is larger.', 2: 'Not Given is wrong because both numbers are given.'})])],
   listen=[
    dict(heading='A short talk: what a score means', part='Part 2',
         task='A talk to trainee clinicians', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'Before you write a number in a patient’s notes, I '
           'want you to be able to say what the instrument that produced '
           'it was built to do. Almost nobody can, and the answer is '
           'printed in the manual.'),
          ('Speaker', 'Most of the scales you will use were built to track '
           'change. One patient, measured repeatedly, going up or down. '
           'That is a different job from deciding something about one '
           'patient on one afternoon, and an instrument can be excellent '
           'at the first and useless at the second.'),
          ('Speaker', 'Then the floor. Several of these scales award '
           'points for a motor response. A patient who cannot move scores '
           'the minimum regardless of what is happening inside them, and '
           'the minimum is then filed as a measurement of awareness. It is '
           'a measurement of movement.'),
          ('Speaker', 'And agreement between assessors, which almost '
           'nobody audits locally. Published figures look reassuring. One '
           'unit measured its own and found two experienced clinicians '
           'three points apart on the same patient within an hour — more '
           'than the change that triggers a different decision about '
           'care.'),
          ('Speaker', 'None of which means stop using them. The honest '
           'comparison is not between a flawed scale and a good one, it is '
           'between a flawed scale and an unrecorded impression, and a '
           'number two people can argue about is worth more than a '
           'conviction neither can examine.'),
          ('Speaker', 'So the rule I would like you to take: write the '
           'number, and write beside it what the number was built to do. '
           'Those few words are what stops somebody in three weeks reading '
           'your measurement of change as a verdict about a person.'),
          ('Speaker', 'It is nine words and I have never seen anybody '
           'penalised for writing them. What I have seen is a minimum '
           'score, recorded without them, deciding where a patient spent '
           'the following year.')],
         items=[
          ('Most of the scales they will use were built to',
           ['decide a single case', 'track change in one patient',
            'compare patients', 'predict recovery'], 1,
           'Which he calls a different job from deciding.'),
          ('A patient who cannot move scores the minimum, so the number is '
           'really a measurement of',
           ['awareness', 'movement', 'recovery', 'attention'], 1,
           'Though it is filed as a measurement of awareness.'),
          ('One unit found two experienced clinicians differing by',
           ['one point', 'two points', 'three points', 'five '
            'points'], 2,
           'On the same patient within an hour.'),
          ('His honest comparison is between a flawed scale and',
           ['a better scale', 'an unrecorded impression', 'no '
            'assessment', 'a second opinion'], 1,
           'A number two people can argue about.')]),
    dict(heading='Two clinicians disagree about a scale', part='Part 3',
         task='A discussion between two clinicians', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Hollingbury', 'You want the scale off the admission form and I '
           'am going to resist that.'),
          ('Fontaine-Abara', 'I want it off the form for patients who '
           'cannot move. Not off the form.'),
          ('Hollingbury', 'That is a narrower proposal than I was briefed '
           'on, and it is much harder to argue with.'),
          ('Fontaine-Abara', 'Four of the points require a motor '
           'response. For a patient who cannot produce one, the instrument '
           'is not measuring with error, it is not measuring the thing at '
           'all.'),
          ('Hollingbury', 'Agreed on the arithmetic. My worry is what '
           'replaces it. Take the number away and what goes in the box is '
           'a clinician’s impression, which is unrecorded, '
           'uncomparable, and in my experience more confident than the '
           'number ever was.'),
          ('Fontaine-Abara', 'Then record the impression and label it as '
           'one.'),
          ('Hollingbury', 'Which nobody does, because an impression with '
           'nowhere to go in a form does not get written down.'),
          ('Fontaine-Abara', 'That is an argument about form design rather '
           'than about the scale.'),
          ('Hollingbury', 'It is, and form design is what actually '
           'determines what is in the notes in three weeks, so I do not '
           'think it is a weaker argument for that.'),
          ('Fontaine-Abara', 'Let me put the cost on my side. Last month a '
           'patient with a minimum score was moved to a unit with no '
           'rehabilitation provision. The score was the reason given. She '
           'had been following commands with her eyes for a week and two '
           'nurses had written it in free text.'),
          ('Hollingbury', 'That is the strongest thing either of us has '
           'said and it is not an argument about the scale either.'),
          ('Fontaine-Abara', 'Go on.'),
          ('Hollingbury', 'The failure there is that a number overrode '
           'free text written by two people who had watched her for a '
           'week. Remove the number and the same hierarchy moves to '
           'whatever is most numerical on the page.'),
          ('Fontaine-Abara', 'You think the problem is the ranking rather '
           'than the instrument.'),
          ('Hollingbury', 'I think that is the testable version of our '
           'disagreement, yes.'),
          ('Fontaine-Abara', 'Then test it. Pull every patient moved on a '
           'minimum score in two years and read the free text against the '
           'score.'),
          ('Hollingbury', 'How many is that?'),
          ('Fontaine-Abara', 'Forty-one. Two of us, a fortnight, and we '
           'would know whether this is the scale or the ranking.'),
          ('Hollingbury', 'I will do that, and I would want the floor '
           'warning on the form whatever it shows.'),
          ('Fontaine-Abara', 'That I will take now.')],
         items=[
          ('Fontaine-Abara’s actual proposal is to remove the scale',
           ['entirely', 'for patients who cannot move', 'from '
            'rehabilitation', 'for new admissions'], 1,
           'Narrower than Hollingbury had been briefed on.'),
          ('For a patient who cannot move, she says the instrument is',
           ['measuring with error', 'not measuring the thing at all',
            'measuring slowly', 'measuring indirectly'], 1,
           'Because four points require a motor response.'),
          ('Hollingbury’s worry is that the number would be replaced by',
           ['another scale', 'an unrecorded impression', 'nothing at '
            'all', 'a second opinion'], 1,
           'Which he says is more confident than the number was.'),
          ('In the case she describes, the score overrode',
           ['a scan', 'free text written by two nurses', 'a family '
            'request', 'an earlier assessment'], 1,
           'Recording command-following with her eyes for a week.'),
          ('Hollingbury argues the failure was in',
           ['the scale', 'the ranking of kinds of evidence',
            'the staffing', 'the transfer policy'], 1,
           'Which he calls the testable version of their '
           'disagreement.'),
          ('Their agreed next step is to',
           ['remove the scale', 'read the free text of 41 cases against '
            'the score', 'retrain assessors', 'redesign the form'], 1,
           'Two of them reading free text against the score, over a '
           'fortnight.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Measurement',
    intro=('Short answers, then the long turn. The explanation bullet '
           'carries the band.'),
    cue=('Describe a number that was used to decide something about you '
         'or someone you know.',
         ['what the number measured', 'what was decided',
          'who decided it',
          'and explain whether you think the number was the right thing '
          'to use']),
    qs=['Are you measured or tested in your work or studies?',
        'Do you think such measures are fair?',
        'Now look at the card. You have one minute to make notes.',
        'Should important decisions ever rest on one number?'],
    shape=[('answer', 'A reading-speed score at school.'),
           ('support', 'It put me in a group for a year.'),
           ('follow-up', 'It measured speed, and the group was about '
            'comprehension.'),
           ('support', 'So the number was real and it was the wrong '
            'number.'),
           ('follow-up', 'Which is a different complaint from saying it '
            'was measured badly.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should a medical decision rest on a single score?',
         prompt=('Some medical decisions are made on the basis of a single '
                 'assessment score. Discuss the advantages of this '
                 'practice and give your own opinion. Write at least 250 '
                 'words.'),
         model=[
          'The practice has real advantages, and they are not the ones '
          'usually offered in its defence, so it is worth setting them out '
          'before saying why I think the practice is nonetheless '
          'indefensible as it currently stands.',
          'The first advantage is comparability. A number produced by a '
          'published instrument can be compared between two clinicians, '
          'two hospitals and two months, and an impression cannot. The '
          'honest comparison is not between a flawed scale and a good one '
          'but between a flawed scale and an unrecorded conviction, and a '
          'number that two people can argue about is worth more than a '
          'judgement neither can examine.',
          'The second is that a score creates a record. Where a decision '
          'is later questioned, the number is in the notes with a date '
          'against it, and the reasoning can be reconstructed. '
          'Impressions are not written down, partly because forms give '
          'them nowhere to go, and a decision whose basis has vanished '
          'cannot be reviewed at all.',
          'Against this, the decisive objection is not that scales are '
          'inaccurate but that they are frequently being asked to do a '
          'job they were not built for. Most of these instruments were '
          'designed to track change in one patient over time, which their '
          'manuals state, and using one to settle a question about a '
          'patient on a single afternoon is a misuse rather than a '
          'measurement error. Several scales also award points for a motor '
          'response, so a patient who cannot move records the minimum '
          'whatever is happening inside them, and that minimum is then '
          'filed as a measurement of awareness when it is a measurement '
          'of movement.',
          'My position is therefore specific rather than general. The '
          'practice should continue and the single score should not be '
          'permitted to outrank other evidence in the notes. One unit '
          'transferred a patient on a minimum score to a ward without '
          'rehabilitation provision, when two nurses had recorded in free '
          'text that she had been following commands with her eyes for a '
          'week. The failure there was not in the scale, which did what it '
          'does; it was in a ranking that lets a number silence a '
          'week of observation, and that ranking is the thing to change.'],
         notes=[
          'Structure 4 gives the advantages their best case first, and '
          'this essay improves on the usual version by saying the '
          'advantages are not the ones normally offered. Comparability and '
          'the creation of a record are both stronger than accuracy, which '
          'is what defenders usually claim.',
          'The objection is framed as misuse rather than inaccuracy. That '
          'distinction is the intellectual content of the essay: an '
          'instrument can be excellent and still be the wrong instrument, '
          'and saying so is much harder to answer than saying the scale '
          'is bad.',
          'The conclusion locates the failure somewhere neither side was '
          'looking — in the ranking of kinds of evidence rather than in '
          'the instrument. Ending with a change that is actually '
          'achievable is worth more than a ringing judgement.'],
         criterion=[('Giving the advantages a better case than their '
                     'defenders do', 'Task Response'),
                    ('Framing the objection as misuse, not inaccuracy',
                     'Task Response'),
                    ('Locating the failure where neither side looked',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Modal stacking and graded commitment',
    explain=('Writing about what an instrument can and cannot support '
             'requires stacking modals carefully: what it may show, what '
             'it would have to show, what it cannot show at all.'),
    examples=['The scale was built to track change, not to settle a '
              'question.',
              'A minimum score may reflect an inability to move rather '
              'than an absence of awareness.',
              'It cannot distinguish the two, and it is not designed '
              'to.',
              'A number ought not to outrank a week of recorded '
              'observation.'],
    task='Rewrite each flat claim with the commitment it can actually '
         'carry.',
    items=[('The score shows she is unaware.',
            'The score is consistent with an absence of awareness and '
            'equally consistent with an inability to move.'),
           ('The scale is useless.',
            'The scale was built to track change and cannot be expected to '
            'settle a question on a single occasion.'),
           ('Assessors agree closely.',
            'Published agreement figures are reassuring, and local '
            'agreement may be considerably worse and is rarely '
            'measured.'),
           ('The number decided it.',
            'The number was allowed to outrank free-text observation, '
            'which is a decision about ranking rather than about '
            'measurement.'),
           ('We should stop using scales.',
            'Scales should continue in use and should not be permitted to '
            'override other recorded evidence.')]),
   vocab=[('scale', 'an instrument producing a score'),
          ('rater agreement', 'how closely two assessors match'),
          ('responsiveness', 'how well a measure detects real change'),
          ('floor effect', 'scores bunching at the minimum'),
          ('top-end bunching', 'scores crowding at the maximum'),
          ('action threshold', 'the score at which a decision changes'),
          ('validated', 'tested against something already trusted'),
          ('ordinal', 'ranked but with unequal intervals')],
   expr=[('The scale was built to track change, not to settle a question',
          'the cycle’s governing sentence'),
         ('it is not measuring with error, it is not measuring the thing '
          'at all', 'distinguishes two kinds of failure'),
         ('a number two people can argue about beats a conviction neither '
          'can examine', 'defends a flawed instrument'),
         ('the failure was in the ranking rather than in the instrument',
          'relocates a problem')],
   trans=['whereas', 'that said', 'against this', 'the honest comparison'],
  ),

  dict(
   sub='What a scan can show',
   step=5,
   read=[
    dict(heading='Response, awareness and the gap between',
         kind='Process article',
         task='Diagram labelling and matching information',
         band='gt_work', qtype='Questions 33-38',
         figure=_PARA,
         paras=[
          'The diagram sets out a command-following paradigm, which is the '
          'design used to ask whether a patient who cannot move or speak '
          'is nonetheless able to respond to an instruction. Its stages '
          'divide into a design phase, an analysis phase, and two possible '
          'outcomes that are not symmetrical.',
          'The design phase begins with a baseline recording of two '
          'minutes, during which the patient is asked to do nothing. A '
          'recorded voice then gives an instruction — conventionally, to '
          'imagine playing tennis — followed by thirty seconds of '
          'imagining and thirty seconds of rest. This block is repeated '
          'ten times in a fixed order.',
          'The fixed order matters more than it appears to. Because the '
          'analysis looks for activity that follows the instruction, a '
          'pattern of activity that happened to coincide with the blocks '
          'by chance would be indistinguishable from a response, and '
          'repetition in a known sequence is what makes coincidence '
          'implausible rather than merely unlikely.',
          'The analysis phase compares activity recorded during the active '
          'blocks with activity recorded during rest, and tests the '
          'difference against a statistical threshold fixed before the '
          'data were collected. Fixing the threshold in advance is what '
          'stops the analysis from being adjusted until something appears, '
          'and the paradigm is worthless without it.',
          'A detection licenses a strong conclusion. If the pattern '
          'follows the instruction across ten blocks, the patient '
          'understood the words, retained them, and produced a deliberate '
          'response: there is no plausible account of that result which '
          'does not involve somebody being there.',
          'A failure to detect licenses almost nothing, and this is the '
          'asymmetry the paradigm is famous for. The patient may have been '
          'asleep, may not have heard, may have been unable to sustain '
          'imagining for thirty seconds, may have imagined something else, '
          'or may indeed have been unaware. The method cannot distinguish '
          'these.',
          'It follows that a negative result should not be recorded as a '
          'finding of absence, and in practice it frequently is. A note '
          'reading "no response on imaging" is read three weeks later as '
          'evidence about the patient rather than as a statement about '
          'what one method on one afternoon failed to find.',
          'The practical consequence for anybody reading such a study is a '
          'single question. Was the result positive or negative, and if '
          'negative, what does the report claim from it? A report that '
          'claims nothing from a negative result is doing the method '
          'justice; one that claims absence of awareness has gone beyond '
          'what the design can support.'],
         items=[
          ('Label stage 1 of the diagram: ____________', None, 'baseline',
           'Two minutes of resting recording before any instruction.'),
          ('Label stage 4: ____________', None, 'repetition',
           'The block is repeated ten times in a fixed order.'),
          ('Label stage 6: statistical ____________', None, 'test',
           'Against a threshold set before the data were collected.'),
          ('Which paragraph explains why the order of blocks is fixed?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'To make coincidence implausible rather than merely '
           'unlikely.'),
          ('Which paragraph lists the reasons a patient might show no '
           'response?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'Asleep, did not hear, could not sustain, imagined something '
           'else, or unaware.'),
          ('Which paragraph gives the question to ask of a published '
           'report?',
           ['Paragraph 6', 'Paragraph 7', 'Paragraph 8',
            'Paragraph 5'], 2,
           'What the report claims from a negative result.')])],
   listen=[
    dict(heading='A neuroscientist on imaging studies', part='Part 4',
         task='A lecture on command-following paradigms', band='l4',
         qtype='Questions 39-44',
         figure=_PARA,
         script=[
          ('Neuroscientist', 'This design has one property that makes it '
           'unlike almost anything else you will meet: a positive result '
           'is decisive and a negative result is not a result. Hold onto '
           'that and the rest of the hour is bookkeeping.'),
          ('Neuroscientist', 'Two minutes of baseline. Then a recorded '
           'voice: imagine playing tennis. Thirty seconds imagining, '
           'thirty resting, and that block ten times over in a fixed '
           'order.'),
          ('Neuroscientist', 'Why fixed? Because we are looking for '
           'activity that follows the instruction. Something that drifted '
           'in and out by chance would look like a response once. It will '
           'not match ten blocks in a known sequence, which is what turns '
           'coincidence from unlikely into implausible.'),
          ('Neuroscientist', 'Then the comparison: active blocks against '
           'rest. Tested against a threshold we set before we collected '
           'anything. Set it afterwards and you can always find '
           'something, which is why the number goes in the protocol and '
           'not in the discussion. A threshold chosen after the fact is '
           'not a threshold, it is a description of the data you happen '
           'to have.'),
          ('Neuroscientist', 'Now the two outcomes. Detection: the pattern '
           'tracks the instruction across ten blocks. That patient heard '
           'the words, held onto them, and did something deliberate. I '
           'know of no account of that result which does not have somebody '
           'in it.'),
          ('Neuroscientist', 'No detection: the patient was asleep, did '
           'not hear, could not hold imagining for thirty seconds, '
           'imagined the wrong thing, or was unaware. Five explanations '
           'and the method cannot tell them apart. So you have learnt '
           'about your method, not about your patient.'),
          ('Neuroscientist', 'Which is not how the result travels. "No '
           'response on imaging" goes into a note, and three weeks later '
           'somebody reads it as a statement about the person. I have '
           'watched that happen and it is the thing I would most like this '
           'lecture to prevent.'),
          ('Neuroscientist', 'So one question for any paper of this kind. '
           'If the result was negative, what does the report claim from '
           'it? Claim nothing and you are doing the method justice. Claim '
           'absence of awareness and you have gone past what the design '
           'can carry.'),
          ('Neuroscientist', 'And the general lesson, which is bigger than '
           'this paradigm: describing a method and describing what it '
           'licenses are two different pieces of writing, and most of the '
           'trouble in this literature comes from running them '
           'together.'),
          ('Neuroscientist', 'If you write nothing else down today, write '
           'this: a method section says what was done and a discussion '
           'section says what it means, and the reason journals separate '
           'them is that authors cannot be trusted to.')],
         items=[
          ('He says a positive result is decisive and a negative result '
           'is', ['weak evidence', 'not a result', 'misleading',
            'rare'], 1,
           'The property he calls unlike almost anything else.'),
          ('Each active block lasts',
           ['ten seconds', 'thirty seconds', 'one minute', 'two '
            'minutes'], 1,
           'Alternating with thirty seconds of rest.'),
          ('The blocks are in a fixed order so that coincidence becomes',
           ['measurable', 'implausible', 'detectable', 'rare'], 1,
           'Which is why ten blocks run in a known sequence.'),
          ('The statistical threshold is set',
           ['after analysis', 'before collecting data', 'by the '
            'journal', 'per patient'], 1,
           'Which is why it goes in the protocol.'),
          ('How many explanations for a non-detection does he list?',
           ['three', 'four', 'five', 'six'], 2,
           'Including being asleep and imagining the wrong thing.'),
          ('From a negative result, a report doing the method justice '
           'claims', ['nothing', 'possible awareness', 'absence of '
            'awareness', 'a need for repetition'], 0,
           'Anything more goes past what the design can carry.')])],
   speak=dict(
    part='Part 3', focus='Evidence about other minds',
    intro=('Five or six sentences. Try once to state the asymmetry '
           'between a positive and a negative result.'),
    qs=['How can we know what another person is experiencing?',
        'Can a machine tell us whether someone is aware?',
        'Should such evidence be used in medical decisions?',
        'What should be done when the evidence is unclear?'],
    shape=[('answer', 'Only by what they do, which is the whole '
            'difficulty.'),
           ('support', 'A scan can show somebody following an '
            'instruction.'),
           ('follow-up', 'If it does, that settles it: somebody is '
            'there.'),
           ('support', 'If it does not, it settles nothing at all.'),
           ('follow-up', 'They might have been asleep, or not heard, and '
            'the method cannot tell those apart from absence.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How an imaging task is designed and interpreted',
         prompt=('The diagram below shows how an imaging task is designed '
                 'and how its results are interpreted. Summarise the '
                 'information by selecting and reporting the main '
                 'features. Write at least 150 words.'),
         figure=_PARA,
         model=[
          'The diagram shows an eight-stage imaging procedure used to ask '
          'whether a patient can respond to an instruction. Overall, the '
          'process divides into design and analysis stages followed by two '
          'possible outcomes, and the outcomes are not symmetrical: a '
          'detection supports a firm conclusion while a non-detection '
          'supports none.',
          'In the design phase, two minutes of baseline recording are '
          'taken, after which a recorded instruction asks the patient to '
          'imagine an action. Thirty seconds of imagining alternate with '
          'thirty seconds of rest, and this block is repeated ten times in '
          'a fixed order.',
          'Analysis then compares activity during the active blocks with '
          'activity during rest, and the difference is tested against a '
          'threshold that has been set in advance of data collection.',
          'The procedure ends in one of two outcomes. Where the pattern of '
          'activity follows the instruction, the patient is taken to have '
          'been responding. Where no pattern is found, the diagram notes '
          'that the test cannot distinguish absence of awareness from a '
          'failure of the method, so the negative outcome yields no '
          'conclusion about the patient.'],
         notes=[
          'The Overall statement names the asymmetry between the two '
          'outcomes, which is the point of the diagram. A process task '
          'with a branch is almost always testing whether the candidate '
          'notices that the branches differ in weight.',
          'The method is described in the passive and the interpretation '
          'is reported as what the diagram notes. Keeping those two '
          'registers apart is the technique of this cycle, and it is '
          'visible in the last paragraph.',
          'Nothing is added about what the result means clinically. A '
          'Task 1 answer reports the diagram; the temptation to explain '
          'why the asymmetry matters belongs in Task 2 and costs marks '
          'here.'],
         criterion=[('An Overall statement naming the asymmetry',
                     'Task Achievement'),
                    ('Method and interpretation in different registers',
                     'Coherence and Cohesion'),
                    ('No clinical commentary added', 'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a method and its interpretation separately',
    explain=('A method is described in the passive and in sequence; what '
             'it licenses is reported with words that name the inference. '
             'Mixing them is the commonest fault in writing about '
             'evidence.'),
    examples=['The difference is tested against a threshold set in '
              'advance.',
              'Where the pattern follows the instruction, the patient is '
              'taken to have been responding.',
              'A positive result is decisive; a negative result is not a '
              'result.',
              'The method cannot distinguish absence from failure.'],
    task='Separate the method from the inference in each sentence.',
    items=[('The scan showed she was aware.',
            'Activity following the instruction was detected, from which '
            'awareness is inferred.'),
           ('The scan showed she was unaware.',
            'No activity following the instruction was detected, which '
            'does not support a conclusion about awareness.'),
           ('They set the threshold to get a result.',
            'The threshold was set in advance of data collection, which is '
            'what prevents adjustment until a result appears.'),
           ('Ten repetitions prove it.',
            'The block was repeated ten times in a fixed order, which '
            'makes a coincidental match implausible.'),
           ('The test failed.',
            'No pattern was detected, which may reflect the patient or may '
            'reflect the method.')]),
   vocab=[('paradigm', 'the design of an experimental task'),
          ('command-following', 'responding to a spoken instruction'),
          ('activation', 'a measured increase in activity during a task'),
          ('warranted conclusion', 'what a result permits you to conclude'),
          ('wilful modulation', 'deliberately changing one’s own brain '
           'activity'),
          ('signal-to-noise', 'the strength of a signal against '
           'background'),
          ('non-detection', 'a result that finds nothing'),
          ('block design', 'alternating periods of task and rest')],
   expr=[('A positive result is decisive; a negative result is not a '
          'result', 'the cycle’s governing sentence'),
         ('you have learnt about your method, not about your patient',
          'states what a null result shows'),
         ('what turns coincidence from unlikely into implausible',
          'explains a design choice'),
         ('gone past what the design can carry',
          'names an overclaim precisely')],
   trans=['once', 'if', 'in either case', 'it follows that'],
  ),

  dict(
   sub='Why the gap looks unbridgeable',
   step=5,
   read=[
    dict(heading='Everything explained except the one thing',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'The sciences of the mind have been remarkably successful at '
          'explaining what mental states do, and the question this passage '
          'concerns is whether that success has touched the thing people '
          'most wanted explained. The suspicion that it has not is forty '
          'years old, has resisted every attempt to dissolve it, and is not '
          'obviously a confusion. It is also held by people who accept every '
          'experimental result in the field, which is what renders it worth '
          'taking seriously rather than correcting.',
          'Begin with what has been achieved, because the argument is '
          'worthless without it. Vision is understood well enough to '
          'be built: edge detection, motion, depth and colour '
          'constancy have mechanical accounts that predict what people '
          'see and what they fail to see. Memory has been separated '
          'into systems with distinct anatomy and distinct failures, '
          'and attention can be manipulated and measured with a '
          'precision that would have seemed fanciful in 1960. None of '
          'this is contested by either party to the argument that '
          'follows.',
          'Each of these accounts works by specifying a function and then '
          'finding the mechanism that performs it. This is the standard form '
          'of explanation in biology and it has never failed elsewhere: once '
          'you know what the heart is for, an account of how it does that is '
          'a complete account of the heart, and there is nothing further to '
          'want. The same form resolves questions about digestion, immunity '
          'and inheritance, and the absence of any residual puzzle in those '
          'cases is what renders its presence here conspicuous.',
          'The difficulty is that one feature of mental life appears not to '
          'be a function. When a person sees a red surface, they '
          'discriminate it, remember it, report it and act on it, and all of '
          'this is behaviour that a mechanism can be given. There also seems '
          'to be something it is like to see red, and that is what the '
          'functional story appears to omit. Whether the appearance '
          'survives examination is the entire dispute.',
          'The argument has a standard form: specify every function '
          'associated with seeing red and suppose all of them '
          'performed. It then still appears intelligible to ask why '
          'performing them is accompanied by any experience at all, '
          'and that question seems not to be answered by a longer or '
          'better functional story. The gap is not a gap in current '
          'knowledge but a gap in the form of the explanation.',
          'Several thought experiments make the point vivid. A being '
          'physically identical to a person but with no experience is '
          'described as conceivable; a person who knows every physical '
          'fact about colour vision without having seen colour is said '
          'to learn something new on first seeing red. Neither is an '
          'argument on its own, and both are devices for locating '
          'where the intuition sits; their authors generally say so, '
          'and their readers generally forget it.',
          'Those devices have been heavily criticised and the criticism '
          'has force. Conceivability is a fact about what we can imagine '
          'and establishes nothing directly about what is possible; many '
          'things once seemed conceivable that turned out to be '
          'incoherent, and the history of science is largely a history of '
          'such corrections. Heat, light, chemical bonding and life were '
          'each at some point held to require something beyond '
          'arrangements of matter, by people with every reason to know '
          'better.',
          'A second line of reply holds that the gap is a predictable '
          'artefact of the two ways we have of thinking about a brain. '
          'One is from outside, in the language of mechanism; the other is '
          'from inside, in the language of experience. Two '
          'representations of one thing can fail to seem like the same '
          'thing without the thing being two things. The reply has the '
          'attraction of predicting the puzzle rather than merely '
          'accommodating it.',
          'A third reply, more radical, holds that the appearance of '
          'something left over is itself produced by a mechanism, and that '
          'a complete account would explain why creatures like us find '
          'the explanation incomplete. On that view the sense of a '
          'remainder is one more thing to explain rather than evidence '
          'that explanation has failed. Its difficulty is that it asks us '
          'to treat the most immediate thing we have access to as a '
          'representation that misleads.',
          'What renders this debate unusually hard to resolve is that each '
          'reply is answerable in the same manner. Each one explains why we '
          'have the intuition, and the intuition was never that we lacked an '
          'explanation of the intuition; it was that the experience itself '
          'had not been accounted for. Replies of this shape are therefore '
          'liable to miss, and the defender of the gap will say they have, '
          'every time.',
          'The honest summary is that the dispute has not moved for four '
          'decades and that both sides can state the other’s position '
          'accurately. That is an unusual situation in a scientific field, '
          'and it is some evidence that the disagreement is not empirical: '
          'there is no experiment either side expects to resolve it, and '
          'neither side claims otherwise.',
          'For a reader rather than a participant, the usable '
          'conclusion concerns the shape of the argument rather than '
          'its outcome. An argument that a thing cannot be explained '
          'because we cannot discern how it could be explained is an '
          'argument from a failure of imagination, and such arguments '
          'have an appalling historical record. That is not a '
          'refutation; it is a reason to hold the conclusion more '
          'loosely than those making it generally do.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['What the functional account leaves out',
            'What the sciences of mind have achieved',
            'Three replies compared', 'Why the dispute will not '
            'move'], 1,
           'Vision, memory and attention, with their mechanisms.'),
          ('Choose the best heading for paragraph 5.',
           ['The standard form of the argument', 'Thought experiments',
            'The two-representations reply', 'A radical reply'], 0,
           'Suppose every function performed; the question seems to '
           'remain.'),
          ('Choose the best heading for paragraph 10.',
           ['Conceivability criticised', 'Why each reply is liable to '
            'miss', 'The honest summary', 'Advice to the reader'], 1,
           'Each reply explains the intuition rather than the '
           'experience.'),
          (
           'The writer believes the functional explanation of vision '
           'has been unsuccessful.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says vision is understood well enough to be '
           'built.',
           {0: 'Yes would need failure; paragraph 2 says vision is '
               'understood well enough to build.', 2: 'Not Given is wrong because the state of the '
               'explanation is given.'}),
          (
           'The writer believes the dispute is likely to be settled by '
           'experiment.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 11: neither side expects an experiment to settle '
           'it.',
           {0: 'Yes would need that expectation; paragraph 11 says '
               'neither side has it.', 2: 'Not Given is wrong because the prospects are stated.'}),
          ('Standard biological explanation works by specifying a '
           '____________ and finding the mechanism that performs it.',
           None, 'function',
           'Paragraph 3, with the heart as the example.'),
          ('The gap is described as a gap in the ____________ of the '
           'explanation rather than in current knowledge.', None, 'form',
           'Paragraph 5, which makes it a claim about explanation '
           'itself.'),
          ('The writer calls an argument from inability to see how '
           'something could be explained an argument from a failure of '
           '____________.', None, 'imagination',
           'The final paragraph, with an appalling historical record.')])],
   listen=[
    dict(heading='A lecture on the explanatory gap', part='Part 4',
         task='A lecture on consciousness and explanation', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'The function is explained and the question is said '
           'to remain. That sentence is the whole of today, and whether '
           'you end up thinking it is profound or confused, you should be '
           'able to say it in a way the other side would accept.'),
          ('Lecturer', 'Start with the successes, because an argument from '
           'failure that ignores them is worthless. Vision: edges, '
           'motion, depth, colour constancy. Mechanical accounts that '
           'predict what people see and, more impressively, what they '
           'reliably fail to see. Memory split into systems with their own '
           'anatomy. Attention manipulated to order.'),
          ('Lecturer', 'Every one of those works the same way. Say what '
           'the thing is for, then find the mechanism that does it. That '
           'is explanation in biology and it does not leave a residue. '
           'Once you know what the heart is for and how it does it, there '
           'is nothing further to want.'),
          ('Lecturer', 'Now the awkward case. Somebody sees red. They '
           'discriminate, remember, report, act — all functions, all '
           'mechanisable. And there also seems to be something it is like '
           'to see red. Suppose every function performed. It still seems '
           'to make sense to ask why that is accompanied by any experience '
           'at all.'),
          ('Lecturer', 'So the claim is not that we are missing a detail. '
           'It is that the form of explanation we are using does not '
           'address the thing. A longer functional story is more of what '
           'was not helping.'),
          ('Lecturer', 'Three replies. One: conceivability proves '
           'nothing. We can imagine an identical being without '
           'experience, and we could once imagine plenty of things that '
           'turned out incoherent. Two: we have two ways of representing '
           'one brain, outside and inside, and two representations can '
           'fail to look like the same thing without there being two '
           'things.'),
          ('Lecturer', 'Three, and the sharpest: the sense of something '
           'left over is itself produced by a mechanism, so a complete '
           'theory would explain why creatures like us feel the '
           'explanation is incomplete.'),
          ('Lecturer', 'Here is why this does not move. Every one of those '
           'three explains the intuition. The complaint was never that the '
           'intuition was unexplained — it was that the experience was. '
           'So the replies are built to miss, and the other side says so, '
           'every time, and has for forty years.'),
          ('Lecturer', 'What I want you to take is about argument form, '
           'not about consciousness. "I cannot see how this could be '
           'explained, therefore it cannot be" is an argument from failure '
           'of imagination, and that argument has an appalling record. '
           'Which is not a refutation. It is a reason to hold the '
           'conclusion more loosely than the people making it usually '
           'do.')],
         items=[
          ('Standard biological explanation, he says, specifies what a '
           'thing is for and then finds',
           ['its history', 'the mechanism that does it', 'its '
            'variants', 'its failures'], 1,
           'Which he says leaves no residue.'),
          ('The functional story about seeing red includes discriminating, '
           'remembering, reporting and',
           ['imagining', 'acting', 'naming', 'comparing'], 1,
           'All of which he calls mechanisable.'),
          ('The claim, he says, is not that a detail is missing but that '
           'the ____________ of explanation does not address the thing.',
           ['language', 'form', 'scale', 'method'], 1,
           'So a longer functional story is more of what was not helping.'),
          ('The reply he calls the sharpest holds that',
           ['conceivability proves nothing', 'there are two '
            'representations', 'the sense of a remainder is itself '
            'produced by a mechanism', 'the question is '
            'meaningless'], 2,
           'So a theory would explain why we feel the explanation is '
           'incomplete.'),
          ('He says the three replies all explain',
           ['the experience', 'the intuition', 'the mechanism',
            'the disagreement'], 1,
           'Which was not what the complaint was about.'),
          ('His general lesson concerns',
           ['consciousness', 'the form of the argument', 'the history '
            'of science', 'experimental design'], 1,
           'An argument from failure of imagination.')])],
   speak=dict(
    part='Part 3', focus='What an explanation has to do',
    intro=('Five or six sentences. Try once to say what would count as '
           'having explained something.'),
    qs=['What makes an explanation satisfying?',
        'Are there things science cannot explain?',
        'Does explaining how something works explain what it is?',
        'Should we expect every question to have an answer?'],
    shape=[('answer', 'When there is nothing further you want to '
            'ask.'),
           ('support', 'With the heart, knowing what it is for and how it '
            'does it is the whole answer.'),
           ('follow-up', 'With experience, people say the same account '
            'leaves something out.'),
           ('support', 'Whether that is a real remainder or a failure of '
            'imagination is the argument.'),
           ('follow-up', 'And forty years of it suggests the '
            'disagreement is not about evidence.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='A premise taken from intuition',
         prompt=('Can science explain everything about the human mind? '
                 'Brainstorm ten, run the six tests, name the premise '
                 'under each survivor, and mark which premises rest on '
                 'intuition rather than evidence. Twelve minutes.'),
         plan=('Science has not explained conscious experience and the '
               'argument that it cannot rests on a premise taken from '
               'intuition, so the honest position is that the question is '
               'open rather than that the answer is no',
               [('The case for a limit rests on a premise that we can '
                 'tell, by reflection, what a complete explanation would '
                 'have to include',
                 ['the premise is not itself supported by evidence',
                  'it is what the thought experiments are devices for '
                  'eliciting']),
                ('The case against the limit rests on a premise that any '
                 'appearance of a remainder is itself explicable',
                 ['which explains the intuition rather than the '
                  'experience',
                  'and so is liable to miss what was being claimed'])]),
         notes=[
          'The new move is marking which premises come from intuition. A '
          'premise taken from reflection is not worthless, and it is a '
          'different kind of thing from a premise taken from evidence, '
          'and an essay that marks the difference is doing something very '
          'few candidates do.',
          'Here both sides turn out to rest on premises of that kind, '
          'which is why the thesis is about the question being open. '
          'Discovering that neither side’s premise is empirical is a '
          'legitimate and strong outcome of a brainstorm.',
          'Notice how short the thesis is relative to what it does. It '
          'states a fact (not explained), locates the disputed premise '
          '(taken from intuition) and draws a conclusion weaker than '
          'either side wants (open rather than no).'],
         criterion=[('Marking premises that rest on intuition',
                     'Task Response'),
                    ('A conclusion weaker than either side wants',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this in cycle 5.',
         lines=12)],
   gram=dict(
    point='The whole repertoire, under time',
    explain=('This cycle asks for everything at once: concession, '
             'attribution, graded commitment and the language of '
             'explanation, written at speed.'),
    examples=['The function is explained and the question is said to '
              'remain.',
              'Conceivability establishes nothing directly about what is '
              'possible.',
              'Two representations of one thing can fail to seem like the '
              'same thing.',
              'That is not a refutation; it is a reason to hold the '
              'conclusion loosely.'],
    task='Rewrite each sentence with the attribution and commitment it '
         'needs.',
    items=[('Science cannot explain consciousness.',
            'It is argued that the functional explanations available do '
            'not address conscious experience, which is a claim about the '
            'form of explanation rather than about current '
            'knowledge.'),
           ('We can imagine it, so it is possible.',
            'Conceivability is a fact about what we can imagine and does '
            'not establish possibility.'),
           ('The two accounts contradict each other.',
            'The two accounts are representations of one thing and may '
            'fail to seem like the same thing without being '
            'inconsistent.'),
           ('That reply is wrong.',
            'That reply explains why we have the intuition, which is not '
            'what was claimed to be unexplained.'),
           ('So the argument fails.',
            'The argument is weaker than its proponents suppose, which is '
            'a reason to hold its conclusion loosely rather than to '
            'reject it.')]),
   vocab=[('reduction', 'explaining one thing wholly in terms of '
           'another'),
          ('qualia', 'the felt qualities of experience'),
          ('functional', 'defined by what something does'),
          ('supervenience', 'one level of fact being fixed by '
           'another'),
          ('explanatory gap', 'the appearance of something left '
           'unexplained'),
          ('physicalism', 'the view that everything is physical'),
          ('subjective character', 'what an experience is like for its '
           'subject'),
          ('remainder', 'what an account appears to leave over')],
   expr=[('The function is explained and the question is said to remain',
          'the cycle’s governing sentence'),
         ('a longer functional story is more of what was not helping',
          'states why a reply misses'),
         ('two representations can fail to look like the same thing',
          'summarises one reply'),
         ('an argument from a failure of imagination',
          'names a form of argument')],
   trans=['consequently', 'which in turn', 'as a result',
          'begin with what has been achieved'],
  ),

  dict(
   sub='Whether the gap is in the world',
   step=5,
   read=[
    dict(heading='An objection to the objection',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'An argument that something cannot be explained has a structure '
          'worth examining separately from its subject matter, and the '
          'argument about conscious experience is the most carefully '
          'constructed example available. This passage concerns whether its '
          'conclusion concerns the world or concerns us. The two are '
          'routinely run together, by its proponents and by its critics, and '
          'separating them does more work than any objection raised on '
          'either side.',
          'The distinction is between an epistemic and an ontological '
          'claim: an epistemic claim says we cannot know, or cannot '
          'explain, or cannot discern how an explanation would go. An '
          'ontological claim says there is something in the world that '
          'no explanation of a specific kind could capture. The second '
          'is much stronger and the arguments offered mostly support '
          'the first. The slide from one to the other is so natural in '
          'English that it frequently happens inside a single '
          'sentence.',
          'Consider how the argument actually proceeds: we are invited '
          'to suppose every functional fact fixed, and then to notice '
          'that a question still appears intelligible. The noticing is '
          'done by us, with our concepts, and the premise that does '
          'the work is that our inability to see how the question '
          'could be closed is informative about whether it can be. '
          'Stated that baldly, the premise looks much less secure than '
          'the intuition it is extracted from, which is why it is '
          'seldom stated.',
          'That premise is not obviously true and is rarely defended. It is '
          'instead elicited, by thought experiments designed to make the '
          'intuition vivid, and a device that renders an intuition vivid is '
          'not a reason to trust it. The literature calls such devices '
          'intuition pumps, and the name is apt: they produce the feeling '
          'reliably and they establish nothing by themselves. A reliable '
          'method of producing a conviction is not evidence for the '
          'conviction, which is a point with applications well outside '
          'philosophy.',
          'The historical record of such premises is inadequate. It was once '
          'held that life could not be explained mechanically, on the '
          'grounds that one could not see how arrangements of matter could '
          'be alive, and the inability was genuine, widely shared among the '
          'best-informed, and wrong. The parallel is suggestive, and it is '
          'not decisive either, for a reason worth stating carefully, since '
          'the parallel is ordinarily offered as though it closed the '
          'matter.',
          'The reason is that the defender of the gap is not claiming merely '
          'to lack an explanation. The claim is that the variety of '
          'explanation on offer specifies functions, that experience is not '
          'a function, and that no amount of the one will deliver the other. '
          'That is an argument about the form of an explanation and not '
          'simply a report of puzzlement. The distinction matters because '
          'the historical parallel bites hard against puzzlement and does '
          'not obviously bite against an argument about form.',
          'Whether it succeeds turns on the premise that experience is not a '
          'function, which is where the dispute actually lives and where it '
          'is least frequently conducted. Those who deny the gap generally '
          'hold that experience will turn out to be functional in a sense '
          'not yet articulated, which is a promissory note, and the more '
          'careful of them say so without embarrassment. Promissory notes '
          'have been honoured before in the history of science, frequently '
          'enough to be respectable and not frequently enough to be an '
          'argument.',
          'So both sides are holding something they cannot cash. One side '
          'holds that reflection reveals a limit on a form of '
          'explanation; the other holds that a functional account will '
          'eventually include what currently looks excluded. Neither '
          'premise is supported by evidence, and each is the real content '
          'of its side’s position.',
          'A reader who notices this is in a better position than a '
          'reader who has picked a side. The useful question is not which '
          'party is right but what either would accept as having settled '
          'it, and the answer, on both sides, is nothing: no experiment '
          'is proposed, no observation is nominated, and both parties '
          'agree that the dispute is not empirical.',
          'That agreement is itself informative, and it is where this '
          'passage differs from most treatments. A disagreement with no '
          'possible evidential resolution is either about concepts, in '
          'which case it may be dissolved by clarifying them, or it is a '
          'disagreement about which of two unsupported premises to '
          'adopt, in which case calling it a scientific question is a '
          'category error.',
          'None of this demonstrates that conscious experience will be '
          'explained, and nothing here is an argument for optimism. It '
          'demonstrates that the most famous argument that it cannot be '
          'relies on a premise about the relation between our concepts and '
          'the world which its proponents have not defended and which the '
          'history of explanation gives us no reason to accept.',
          'The reader\u2019s version is two questions, which can be asked '
          'of absolutely any claim that something is beyond '
          'explanation. Is the claim about what we can know or about '
          'what there is, and what is offered in support: evidence, or '
          'the vividness of an intuition? Those two questions dispose '
          'of most such claims, and in the hardest case they tell you '
          'precisely why it is hard.'],
         items=[
          ('Which paragraph defines the epistemic and ontological '
           'distinction?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'The second being much stronger than the first.'),
          ('Which paragraph gives the historical parallel with life?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'An inability that was genuine, widely shared and wrong.'),
          ('Which paragraph says both sides hold something they cannot '
           'cash?',
           ['Paragraph 7', 'Paragraph 8', 'Paragraph 9',
            'Paragraph 10'], 1,
           'Reflection revealing a limit, against a promissory note.'),
          (
           'The writer believes the gap argument is merely a report of '
           'puzzlement.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 says it is an argument about the form of '
           'explanation.',
           {0: 'Yes would need puzzlement; paragraph 6 calls it an '
               'argument about explanation.', 2: 'Not Given is wrong because the argument is '
               'characterised.'}),
          (
           'The writer believes conscious experience will eventually '
           'be explained.', ['Yes', 'No', 'Not Given'], 2,
           'Paragraph 11 explicitly declines to argue for optimism.',
           {0: 'Yes would need optimism, which paragraph 11 declines '
               'to offer.', 1: 'No would need pessimism, which he equally declines.'}),
          ('Devices designed to make an intuition vivid are called '
           'intuition ____________.', None, 'pumps',
           'Paragraph 4, which produce the feeling reliably.'),
          ('The view that experience will turn out to be functional in a '
           'sense not yet articulated is called a ____________ note.',
           None, 'promissory',
           'Paragraph 7, which its holders acknowledge.'),
          ('The writer says calling a dispute with no evidential '
           'resolution a scientific question is a category '
           '____________.', None, 'error',
           'Paragraph 10, on a dispute with no evidential '
           'resolution.')])],
   listen=[
    dict(heading='Two philosophers disagree about explanation',
         part='Part 4', task='A recorded exchange', band='l4',
         qtype='Questions 67-72',
         script=[
          ('Chair', 'Professor Thackeray-Osei holds that there is an '
           'explanatory gap. Professor Villanueva-Brandt holds that there '
           'is not. Each has agreed to state their own weakest point '
           'first.'),
          ('Thackeray-Osei', 'Mine is that my central premise is elicited '
           'rather than argued. I say experience is not a function, and '
           'when pressed on how I know, I describe a thought experiment '
           'and watch you have the same intuition I have. That is not a '
           'defence of the premise. It is a demonstration that we share '
           'it.'),
          ('Villanueva-Brandt', 'And mine is that I am holding a '
           'promissory note. I say experience will turn out to be '
           'functional in some sense we have not articulated. I cannot '
           'tell you what that sense is. If I am honest, that is a '
           'prediction about future science dressed as a position in '
           'philosophy.'),
          ('Chair', 'That is a more candid opening than I expected from '
           'either of you.'),
          ('Thackeray-Osei', 'We have both been doing this for thirty years '
           'and the exchange where each of us pretends to have no weak '
           'point is one neither of us can still be bothered with.'),
          ('Chair', 'So where does the disagreement sit?'),
          ('Thackeray-Osei', 'On whether reflection can tell us anything '
           'about the limits of a form of explanation. I think it can. '
           'She thinks the history of such claims shows it cannot, and '
           'the history is on her side.'),
          ('Villanueva-Brandt', 'Life, for a century. The best-informed '
           'people could not see how matter could be alive, and the '
           'inability was real, and it was not evidence. Nor was it '
           'resolved by anybody addressing the intuition: it was resolved '
           'by the mechanism arriving, after which nobody had the '
           'intuition any more.'),
          ('Thackeray-Osei', 'Which I accept and distinguish. Those '
           'people lacked a mechanism. I am not saying I lack one. I am '
           'saying the kind on offer specifies functions, and that '
           'specifying functions cannot deliver something that is not a '
           'function, however many you specify.'),
          ('Villanueva-Brandt', 'That is your premise again, stated more '
           'carefully.'),
          ('Thackeray-Osei', 'It is. I do not have a better one, and I '
           'would rather be caught holding it openly than have it mistaken '
           'for a conclusion.'),
          ('Chair', 'Is there anything that would change either mind?'),
          ('Villanueva-Brandt', 'For me, an articulated functional account '
           'of experience would end the dispute in my favour, and I note '
           'that I am not the person who has to produce it.'),
          ('Thackeray-Osei', 'And nothing would change mine, which I '
           'think is the most troubling sentence either of us has said. A '
           'position no evidence could touch is not obviously a position '
           'about the world.')],
         items=[
          ('Thackeray-Osei says his central premise is',
           ['well supported', 'elicited rather than argued',
            'borrowed', 'unnecessary'], 1,
           'Demonstrated by a shared intuition rather than defended.'),
          ('Villanueva-Brandt describes her own position as',
           ['proven', 'a promissory note', 'a majority view',
            'an empirical claim'], 1,
           'A prediction about future science.'),
          ('The historical parallel she offers concerns',
           ['heat', 'life', 'light', 'motion'], 1,
           'Where the best-informed people could not see how matter could '
           'be alive.'),
          ('Thackeray-Osei distinguishes his case by saying those people '
           'lacked', ['evidence', 'a mechanism', 'instruments',
            'concepts'], 1,
           'Whereas his claim is about the kind of explanation on '
           'offer.'),
          ('What would change Villanueva-Brandt’s mind is',
           ['a new experiment', 'an articulated functional account of '
            'experience', 'a better thought experiment', 'nothing'], 1,
           'Which she notes she is not the one who must produce.'),
          ('Thackeray-Osei calls which sentence the most troubling?',
           ['that his premise is elicited', 'that nothing would change '
            'his mind', 'that the history is against him',
            'that he lacks a mechanism'], 1,
           'Because a position no evidence could touch may not be about '
           'the world.')])],
   speak=dict(
    part='Part 3', focus='Limits of explanation',
    intro=('The hardest turn in the unit. Try once to distinguish a '
           'limit on knowledge from a limit in the world.'),
    qs=['Are some questions permanently beyond science?',
        'How would we know if a question could never be answered?',
        'Is it reasonable to trust a strong intuition?',
        'Does it matter whether such questions are settled?'],
    shape=[('answer', 'Possibly, and I would want to know which kind of '
            'limit was being claimed.'),
           ('support', 'Saying we cannot know is different from saying '
            'there is something unexplainable.'),
           ('follow-up', 'Most arguments support the first and conclude '
            'the second.'),
           ('support', 'And what they rest on is usually how vividly we '
            'can imagine the failure.'),
           ('follow-up', 'People could not imagine how matter could be '
            'alive, and the inability was real and not '
            'evidence.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Questions science cannot answer',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say there are questions science can '
                 'never answer. To what extent do you agree? Write at '
                 'least 250 words.'),
         model=[
          'Two positions are usually offered and both are stronger than '
          'they look, which is why a third is worth stating: the question '
          'is open, and the arguments that it is closed in either '
          'direction rest on premises neither side can support.',
          'The first position holds that science has a limit, and the best '
          'case for it is not a list of unsolved problems. It is an '
          'argument about the form of explanation. Scientific explanation '
          'specifies what something does and then finds the mechanism '
          'that does it, which is why nothing further remains to be asked '
          'about the heart. Conscious experience appears not to be a '
          'thing that something does, so specifying functions — however '
          'many — looks unable to deliver it.',
          'The second position holds that there is no limit, and its best '
          'case is historical. People once could not see how arrangements '
          'of matter could be alive, and that inability was genuine, '
          'universal among the best-informed, and wrong. An argument of '
          'the form "I cannot see how this could be explained, therefore '
          'it cannot be" has an appalling record, and the current case '
          'has that form.',
          'My third position begins from what each side is actually '
          'holding. The first rests on a premise that reflection can tell '
          'us what a complete explanation would have to include; this is '
          'elicited by thought experiments rather than defended, and a '
          'device that makes an intuition vivid is not a reason to trust '
          'it. The second rests on a premise that experience will prove '
          'functional in a sense not yet articulated, which is a '
          'prediction dressed as a position. Neither premise is supported '
          'by evidence.',
          'The decisive observation is that neither side nominates '
          'anything that would settle the matter: no experiment is '
          'proposed and both parties agree the dispute is not empirical. '
          'A disagreement of that kind is about concepts or about which '
          'unsupported premise to adopt, and in either case treating it '
          'as a question science has already answered, in either '
          'direction, is a mistake. To the extent that I agree there are '
          'questions science cannot answer, then, I agree only that there '
          'is one we have no idea how to approach — which is a statement '
          'about us, and the whole argument turns on whether it is also '
          'one about the world.'],
         notes=[
          'Structure 3 gives each position its strongest form before the '
          'third appears, and both here are stronger than the versions '
          'usually attacked: the first is about explanatory form rather '
          'than unsolved problems, the second is historical rather than '
          'optimistic.',
          'The third position is not a compromise. It identifies what '
          'each side is holding and shows both premises to be '
          'unsupported, which is a genuinely different claim from "the '
          'truth is in the middle".',
          'The final clause — a statement about us, and whether it is '
          'also one about the world — is the epistemic-ontological '
          'distinction compressed into eleven words. Ending on the real '
          'hinge of the argument rather than on a summary is a band 9 '
          'close.'],
         model65=[
                  'Some people say there are questions science can '
                  'never answer. In my view this is true of some '
                  'questions and a prediction about others, and the '
                  'two are frequently conflated.',
                  'Certain questions are not of the kind science '
                  'answers at all. Whether an action is wrong, or what '
                  'a life is for, cannot be adjudicated by measurement, '
                  'because no observation would count as a result. '
                  'Science can tell us what a practice does; it cannot '
                  'tell us whether we should want that.',
                  'However, the second group is different. Questions about '
                  'the origin of life, the structure of the brain or '
                  'the earliest universe are often called '
                  'unanswerable, and many such questions have since '
                  'been answered. The record of the claim is unimpressive, '
                  'and the reasons given usually turn out to describe '
                  'the limitations of current instrumentation.',
                  'I think the distinction worth keeping is between '
                  'questions outside the method and questions merely '
                  'beyond it for now. The first will not yield however '
                  'long we wait. For the second, the honest statement '
                  'is that we do not know yet, which is a different '
                  'thing from never.',
                  ],
         gap65=[
                'It separates what the method cannot address from what '
                'it has not yet reached, and uses the distinction to '
                'sort the examples.',
                'It cites the record of past unanswerable questions, '
                'which is what makes the second paragraph more than a '
                'hope.',
                'It says why an observation could not settle a '
                'question of value.',
                ],
         criterion=[('Each position in its strongest form',
                     'Task Response'),
                    ('A third position that is not a compromise',
                     'Task Response'),
                    ('Ending on the hinge rather than a summary',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Distinguishing a gap in the world from a gap in us',
    explain=('The whole dispute turns on whether a claim is about what we '
             'can know or about what there is. These patterns mark the '
             'difference explicitly.'),
    examples=['A failure to imagine an explanation is not evidence there '
              'is none.',
              'The claim is about what we can explain, not about what '
              'exists.',
              'Conceivability is a fact about us.',
              'Both premises are unsupported, and each is the real content '
              'of its side.'],
    task='Mark each claim as epistemic or ontological, and rewrite it so '
         'that the kind is explicit.',
    items=[('Consciousness cannot be explained.',
            'We have no account of conscious experience, which is a claim '
            'about our explanations rather than about what exists.'),
           ('There is something science cannot reach.',
            'It is asserted that something exists which no functional '
            'explanation could capture, an ontological claim requiring '
            'more support than puzzlement provides.'),
           ('I cannot imagine how it could work.',
            'The failure is one of imagination, and such failures have '
            'frequently preceded explanations.'),
           ('Both sides have good arguments.',
            'Both sides rest on premises that are unsupported by '
            'evidence, which is not the same as both having good '
            'arguments.'),
           ('Science will answer it eventually.',
            'The expectation that a functional account will be found is a '
            'prediction rather than a position, as its holders '
            'acknowledge.')]),
   vocab=[('knowledge claim', 'a claim about what can be known'),
          ('ontological', 'concerning what exists'),
          ('intuition pump', 'a device that elicits a feeling of '
           'obviousness'),
          ('question-begging', 'assuming what is to be proved'),
          ('conceivability', 'being imaginable without contradiction'),
          ('a priori', 'knowable without evidence'),
          ('brute fact', 'something true with no further explanation'),
          ('promissory note', 'a claim that something will be delivered '
           'later')],
   expr=[('A failure to imagine an explanation is not evidence there is '
          'none', 'the cycle’s governing sentence'),
         ('a device that makes an intuition vivid is not a reason to trust '
          'it', 'disarms a thought experiment'),
         ('a prediction about future science dressed as a position',
          'names the opposing premise'),
         ('a position no evidence could touch is not obviously a position '
          'about the world', 'the sharpest line in the unit')],
   trans=['admittedly', 'and yet', 'on balance',
          'the decisive observation'],
  ),
 ],
 technique=dict(
  title='A method and its interpretation, kept apart',
  body=('Process diagrams in Volume 6 frequently end in a branch, and the '
        'branches are rarely equal. In this unit a detection proves '
        'somebody is responding and a non-detection proves nothing at all, '
        'and an answer that reports the two outcomes as a pair of '
        'alternatives has missed the only interesting thing on the page. '
        'Say the asymmetry in your Overall statement. Then keep two '
        'registers apart as you write: the method goes in the passive and '
        'in order — is recorded, is repeated, is tested — while what the '
        'result licenses is reported with words that name an inference: is '
        'taken to, supports, cannot distinguish. Running the two together '
        'is how overclaiming happens, in exam answers and in journals. '
        'And add nothing about why the asymmetry matters: that belongs in '
        'Task 2 and costs you marks here.'),
  panel=[('Look for the branch',
          'A process that ends in two outcomes is testing whether you '
          'notice they are not equally strong.'),
         ('Asymmetry in the Overall',
          '"A detection supports a firm conclusion; a non-detection '
          'supports none." One sentence, the whole point.'),
         ('Passive for the method',
          'Is recorded, is repeated, is compared, is tested. Sequence '
          'words do the rest.'),
         ('Inference words for the rest',
          'Is taken to, supports, cannot distinguish. Never "shows" for '
          'a negative result.')],
  task='Describe the cycle 3 diagram in 150 words, naming the asymmetry '
       'in your Overall statement and keeping the two registers apart.',
  qs=['What is your Overall statement, in one sentence?',
      'Which verbs did you use for the method?',
      'Which words did you use for what a result licenses?',
      'Did you write "shows" anywhere about the negative outcome?',
      'Did you add any clinical commentary, and can you delete it?']),
 outlining=dict(
  title='The premise test on an argument from intuition',
  body=('Some premises come from evidence and some come from reflection, '
        'and the second kind needs marking. "Experience is not the sort '
        'of thing a function could be" is not a finding; it is what a '
        'thought experiment makes you feel, and the literature’s own name '
        'for such devices — intuition pumps — concedes the point. Marking '
        'a premise as intuitive is not dismissing it: we have little '
        'else in some domains, and an argument that says so openly is '
        'stronger than one that hides it. What marking does is let you '
        'see when both sides are doing it, which is the situation here, '
        'and that discovery is a thesis. Watch also for the gap between '
        'what we cannot know and what does not exist: arguments '
        'routinely support the first and conclude the second, and '
        'naming that step is often the whole essay.'),
  frame=('Science has not explained conscious experience and the argument '
         'that it cannot rests on a premise taken from intuition, so the '
         'honest position is that the question is open rather than that '
         'the answer is no',
         [('The case for a limit rests on a premise that we can tell, by '
           'reflection, what a complete explanation would have to '
           'include',
           ['the premise is not itself supported by evidence',
            'it is what the thought experiments are devices for '
            'eliciting']),
          ('The case against the limit rests on a premise that any '
           'appearance of a remainder is itself explicable',
           ['which explains the intuition rather than the experience',
            'and so is liable to miss what was being claimed'])]),
  task='Go back through your last three brainstorms and mark every '
       'premise as evidential or intuitive.',
  qs=['Which of your premises came from evidence?',
      'Which came from reflection, and did you notice at the time?',
      'Does your opponent rest on an intuitive premise too?',
      'Is your conclusion about what we can know or about what there '
      'is?',
      'Does your thesis say which, explicitly?'],
  answers=['fewer than you think, especially in philosophy prompts',
           'the confident ones are usually the intuitive ones',
           'when both sides do, say so: that is a thesis',
           'most arguments slide from the first to the second',
           'if it does not, the examiner cannot see that you know']),
 candos=['I can ask how a decision was reached without disputing it',
         'I can say what an instrument was built to do',
         'I can describe a method separately from what it licenses',
         'I can state an argument I disagree with in a form its holders '
         'would accept',
         'I can tell a claim about knowledge from a claim about what '
         'exists'],
 tip=('Before you write what a result means, write what the method did. '
      'Two sentences, two registers: is recorded, is tested, then is '
      'taken to support. Almost every overclaim in writing about '
      'evidence comes from doing those two jobs in one sentence.'),
)
