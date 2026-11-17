# -*- coding: utf-8 -*-
"""Unit 38 - Evidence and Error in Science. IELTS Volume 4, band 6.5."""

_TRIAL = dict(kind='process', title='How a controlled trial is conducted',
              sub='from recruitment to analysis',
              stages=[('Recruitment', 'volunteers respond to an invitation'),
                      ('Screening', 'eligibility criteria applied'),
                      ('Consent', 'written, after a cooling-off period'),
                      ('Allocation', 'a computer assigns each to a group'),
                      ('Concealment', 'neither party knows which group'),
                      ('Treatment', 'one group active, one group dummy'),
                      ('Follow-up', 'the same measures on the same days'),
                      ('Analysis', 'the code is broken last of all')],
              phases=[('Before allocation', 0, 2),
                      ('Allocation and masking', 3, 4),
                      ('After allocation', 5, 7)])

UNIT = dict(
 n=38, vol=4, level='B2', band='6.5',
 theme='Evidence and Error in Science',
 opener=(
   'This unit is about the difference between a result and a finding. It '
   'starts with the information sheet a volunteer is handed, moves through '
   'four newspapers reporting one study four different ways, builds a trial '
   'from the ground up, and ends with the question that has occupied the '
   'sciences for a decade: what does it mean when a careful repetition of a '
   'careful experiment produces nothing?'),

 cycles=[
  dict(
   sub='Taking part in a study',
   step=1,
   read=[
    dict(heading='Joining a research study: your rights',
         kind='Information sheet',
         task='Multiple choice, matching features and sentence completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('Rights sheets are written to be skimmed and tested on the '
                'exceptions',
                ['The headline right is always in the first line and is '
                 'almost never the answer to a question.',
                 'The questions come from the sentences beginning however, '
                 'except and unless. Mark those on your first pass.']),
         paras=[
          'Taking part is entirely voluntary. If you decide to take part you '
          'will be asked to sign a consent form, and you may withdraw at any '
          'time without giving a reason and without your medical care being '
          'affected in any way.',
          'If you withdraw, data already collected from you will normally be '
          'retained and used in the analysis. This is because removing it '
          'would distort the results, and because the study has been designed '
          'and approved on that basis. You may request that no further data '
          'be collected, and you may separately request that your stored '
          'samples be destroyed.',
          'You will not be told which group you have been placed in until the '
          'study ends. Neither will the staff who see you at each visit. This '
          'is not secrecy for its own sake: knowing which group a participant '
          'is in changes what both of you notice and report, and the effect is '
          'large enough to have overturned findings in the past.',
          'You will be reimbursed for travel and for time at the published '
          'rate. This is not a payment for taking part and you should not '
          'decide on the basis of it. If you have any complaint, the contact '
          'details of an independent adviser unconnected with the study are '
          'given on the final page.'],
         items=[
          ('If a participant withdraws, data already collected is',
           ['destroyed immediately', 'normally retained', 'returned to them', 'anonymised and deleted'],
           1, 'Paragraph 2: removing it would distort the results.',
           {0: 'Paragraph 2 says the data is normally kept.', 2: 'Nothing is returned to the participant.', 3: 'The data is used in the analysis, not deleted.'}),
          (
           'A participant may separately request the destruction of '
           'their',
           ['records', 'consent form', 'stored samples', 'travel claim'],
           2,
           'Paragraph 2, which distinguishes this from stopping '
           'further collection.',
           {0: 'Records are retained for the analysis.', 1: 'The consent form is a record of the agreement.', 3: 'A travel claim is a reimbursement, not a sample.'}),
          ('Who else does not know which group a participant is in?',
           ['The analysts', 'The staff at each visit', 'The adviser', 'Nobody'],
           1,
           'Paragraph 3: neither the participant nor the staff who see '
           'them.',
           {0: 'The analysts hold the code until the study ends.', 2: 'The adviser is independent of the study team.', 3: 'Somebody holds the allocation, or the study could not '
               'run.'}),
          ('Payment is described as reimbursement for travel and for '
           '____________.', None, 'time',
           'Paragraph 4, which adds that it is not a payment for taking '
           'part.'),
          ('A complaint should go to an ____________ adviser.', None,
           'independent',
           'Paragraph 4: unconnected with the study, with details on the '
           'final page.')]),
    dict(heading='Consent and withdrawal',
         kind='Procedure notice', task='Note completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'You will first be given this information sheet to take away. A '
          'minimum of twenty-four hours must pass before consent is taken, so '
          'that you can read it without anybody present and discuss it if you '
          'wish. Consent given at the first meeting is not valid.',
          'At the consent visit a member of the research team will go through '
          'the sheet with you and answer questions. You will then sign two '
          'copies of the consent form; one is kept in the study file and one '
          'is yours. A copy is also placed in your medical notes.',
          'Screening follows consent, not the other way round. Some '
          'volunteers are found at screening not to be eligible, and those '
          'who are not eligible take no further part; their screening data is '
          'destroyed within three months unless they agree otherwise.',
          'Withdrawal may be notified verbally or in writing to any member of '
          'the team. No reason is required and none will be asked for. The '
          'team will confirm in writing within five working days what has '
          'been stopped and what has been retained, so that there is no doubt '
          'on either side afterwards.'],
         items=[
          ('A minimum of ____________ hours must pass before consent is '
           'taken.', None, 'twenty-four',
           'Paragraph 1, which also states that consent at the first meeting '
           'is invalid.'),
          ('You sign ____________ copies of the consent form.', None, 'two',
           'Paragraph 2: one for the study file and one for you, with a copy '
           'in your medical notes.'),
          ('____________ follows consent instead of preceding it.', None,
           'Screening',
           'Paragraph 3, and data from those found ineligible is destroyed '
           'within three months.'),
          ('After withdrawal, the team confirms in writing within '
           '____________ working days.', None, 'five',
           'Paragraph 4: what has been stopped and what has been '
           'retained.')])],
   listen=[
    dict(heading='Consenting to take part', part='Part 1',
         task='A consent visit · note completion', band='l1', qtype='Questions 10-14',
         script=[
          ('Nurse', 'Good morning. You had the information sheet on '
           'Tuesday?'),
          ('Volunteer', 'I did, and I have read it twice.'),
          ('Nurse', 'Good. That gap is a requirement, not a courtesy — we '
           'cannot take consent on the day somebody first sees the sheet. Can '
           'I take your study number? It is on the top right of your copy.'),
          ('Volunteer', 'It says B R T, zero four, one nine seven.'),
          ('Nurse', 'B R T zero four one nine seven. Thank you. Now, the '
           'visits. There are six of them over eighteen weeks, and they are '
           'at weeks nought, two, six, twelve, sixteen and eighteen. The '
           'longest is the first, at about ninety minutes.'),
          ('Volunteer', 'And I am not told which group I am in.'),
          ('Nurse', 'Correct, and nor am I. Neither of us finds out until the '
           'whole study is finished and the analysis is locked.'),
          ('Volunteer', 'What if I want to stop?'),
          ('Nurse', 'You tell any of us, in any way you like, and you do not '
           'give a reason. I will say the part people are sometimes unhappy '
           'to hear, because I would rather you heard it now. The data we '
           'have already collected from you stays in the analysis. We can '
           'stop collecting more and we can destroy your stored samples if '
           'you ask, but what is already in the dataset remains.'),
          ('Volunteer', 'Why is that?'),
          ('Nurse', 'Because if the people who leave could remove their data, '
           'and people leave for reasons connected to how they are doing, the '
           'result would be systematically wrong. It is not an administrative '
           'convenience.'),
          ('Volunteer', 'That makes sense when you put it that way.'),
          ('Nurse', 'Then two signatures, please — one copy stays here and '
           'one goes home with you.')],
         items=[
          ('Study number: ____________', None, 'BRT04197',
           'Spelled out by the volunteer and read back by the nurse.'),
          ('Number of visits: ____________', None, 'six',
           'Over eighteen weeks, at weeks 0, 2, 6, 12, 16 and 18.'),
          ('The first visit lasts about ____________ minutes.', None,
           'ninety', 'The nurse says it is the longest of the six visits, '
           'which run over eighteen weeks.'),
          ('Data already collected ____________ in the analysis.', None,
           'stays',
           'The nurse raises this before being asked, as the part people are '
           'unhappy to hear.'),
          ('Stored ____________ can be destroyed on request.', None,
           'samples',
           'Along with stopping further collection, though the existing data '
           'remains.')]),
    dict(heading='A short talk: what ethics review is for', part='Part 2',
         task='A talk to new research staff · multiple choice and matching', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'Everybody in this room thinks ethics review is slow. '
           'Some of you think it is theatre. I want to spend fifteen minutes '
           'on what it is actually checking, because the complaints I hear '
           'are almost always about the wrong thing.'),
          ('Speaker', 'It is not primarily checking that your study is safe. '
           'Safety is largely your protocol and your clinical judgement, and a '
           'committee of eleven people reading a document is not well placed '
           'to second-guess it. What it is checking is whether the person in '
           'front of you can give consent that means anything.'),
          ('Speaker', 'That breaks into three questions. Does the volunteer '
           'understand what will happen? Are they free to refuse, which is a question about their circumstances, whatever you intend? '
           'And is the burden on them proportionate to what the study might '
           'produce? That third one is where most studies are sent back.'),
          ('Speaker', 'Let me give the commonest failure, since it is '
           'avoidable. A sheet written at the reading age of a journal '
           'article. If your volunteer cannot read your sheet, you do not have '
           'consent, you have a signature, and those are different objects. We '
           'send back perhaps a third of submissions for this alone.'),
          ('Speaker', 'The second commonest is recruiting from a group that '
           'cannot comfortably say no — your own students, your own patients, '
           'staff who report to you. Your intentions are irrelevant here. The '
           'question is whether refusal is costless for them, and if you are '
           'the person writing their reference, it is not.'),
          ('Speaker', 'A last word on speed. We are slow partly because we '
           'are volunteers meeting monthly, and partly because the version '
           'you submit is usually not the version you meant to submit. Half of '
           'our delay is a second round that a careful read would have '
           'prevented.')],
         items=[
          (
           'What does the speaker say ethics review is not primarily '
           'checking?',
           ['Consent', 'Safety', 'Recruitment', 'Analysis'], 1,
           'Safety is largely the protocol and clinical judgement.',
           {0: 'Consent is exactly what she says it does check.', 2: 'Recruitment is one of the three consent questions.', 3: 'Analysis is not what the committee reviews.'}),
          (
           'Which of the three questions does she say sends back most '
           'studies?',
           ['Whether the volunteer understands', 'Whether they are free to refuse', 'Whether the burden is proportionate', 'All equally'],
           2,
           'The third question, about burden against what the study '
           'might produce.',
           {0: 'Understanding is her first question, not the commonest '
               'failure.', 1: 'Freedom to refuse is her second question.', 3: 'She singles out the third as sending back most '
               'studies.'}),
          ('The commonest failure she names is',
           ['missing signatures', 'an information sheet written too densely', 'inadequate insurance', 'a weak protocol'],
           1,
           'A sheet at the reading age of a journal article gives you '
           'a signature, not consent.',
           {0: 'Missing signatures are not what she describes.', 2: 'Insurance is not among the failures she names.', 3: 'She says safety and protocol are not the committee\u2019s '
               'strength.'}),
          (
           'On recruiting your own students, she says the key question '
           'is',
           ['your intentions', 'whether refusal is costless for them', 'the size of the payment', 'the length of the study'],
           1,
           'Your intentions are irrelevant if you write their '
           'reference.',
           {0: 'She says intentions are irrelevant to the question.', 2: 'Payment size is not the test she applies.', 3: 'Study length is not what makes refusal costly.'})])],
   speak=dict(
    part='Part 1', focus='Science you have read about',
    intro=('Two or three sentences. You are not being tested on scientific '
           'knowledge, only on how clearly you can talk about it.'),
    qs=['Do you read about science in the news?',
        'Did you enjoy science subjects at school?',
        'Do people in your country trust scientific research?',
        'Would you take part in a research study?'],
    shape=[('answer', 'Occasionally, mostly when something is in the '
            'headlines.'),
           ('support', 'I read a piece about sleep last month.'),
           ('follow-up', 'Though I could not tell you now how many people '
            'were in it, which is probably the problem.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Withdrawing from a study',
         prompt=('You agreed to take part in a research study and now wish to '
                 'withdraw. Write a letter to the research team. In your '
                 'letter: give your details and say you wish to withdraw; '
                 'explain your reasons; say what you would like to happen to '
                 'your data. Write at least 150 words.'),
         model=[
          'Dear Dr Oyibo-Lindqvist,',
          'I am writing to withdraw from the Brightwater sleep study, study '
          'number BRT04197. I attended the first three visits, the most '
          'recent on 14 March.',
          'My reason is a change in my working hours. I have moved onto a '
          'rotating shift pattern from the beginning of April, which means I '
          'can no longer attend appointments on weekday mornings and, more '
          'importantly, that my sleep is no longer stable enough for the '
          'measurements to mean anything. I should say that I have no '
          'complaint whatever about the study or the team, who have been '
          'consistently helpful.',
          'As to my data, I understand from the information sheet that the '
          'measurements already collected will be retained in the analysis, '
          'and I am content with that. I would, however, ask that my stored '
          'blood samples be destroyed, and that no further data be collected '
          'from the wrist monitor, which I will return by post this week.',
          'Thank you for your patience over the past three months.',
          'Yours sincerely,',
          'J. Petrakis-Lowe'],
         notes=[
          'The third bullet is where this letter earns its band. The writer '
          'distinguishes three things — data already collected, stored '
          'samples, and further collection — and takes a different position '
          'on each. That distinction comes straight from the reading and it '
          'is exactly what the task is testing.',
          'Saying I have no complaint is not padding. Withdrawal letters are '
          'read as complaints by default, and one sentence prevents a '
          'misreading that would waste the reader’s time.',
          'The reason given is two reasons: a practical one and a scientific '
          'one. The second is more persuasive than the first and it is '
          'placed second, which is where the emphasis falls.'],
         criterion=[('Distinguishing three fates for three kinds of data',
                     'Task Achievement'),
                    ('Preventing the letter being read as a complaint',
                     'Task Response'),
                    ('Placing the stronger reason second',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Stating a request about several things at once',
    explain=('When a request concerns three items with three different '
             'outcomes, the sentence has to keep them apart. These patterns '
             'do that without becoming a list of bullet points.'),
    examples=['I am content for the measurements already collected to be '
              'retained.',
              'I would ask that my stored samples be destroyed.',
              'I would prefer that no further data be collected.',
              'As to my data, three different things are involved.'],
    task='Write each request so that the item and its outcome are both '
         'clear.',
    items=[('Destroy my samples.',
            'I would be grateful if my stored samples could be destroyed.'),
           ('Keep what you have.',
            'I am content for the data already collected to be retained in '
            'the analysis.'),
           ('Do not collect any more.',
            'I would ask that no further measurements be taken.'),
           ('Send my records back.',
            'I should be grateful if copies of my own records could be '
            'returned to me.'),
           ('Tell me what you kept.',
            'I would appreciate written confirmation of what has been '
            'retained.')]),
   vocab=[('ethics committee', 'the body that approves a study'),
          ('eligibility', 'meeting the conditions for taking part'),
          ('withdraw', 'to stop taking part'),
          ('reimbursement', 'repayment of costs incurred'),
          ('protocol', 'the written plan a study follows'),
          ('masking', 'keeping group membership hidden'),
          ('dataset', 'the collected data of a study'),
          ('cooling-off period', 'time allowed before a decision is final')],
   expr=[('I am writing to withdraw from', 'states the purpose in the first '
          'line'),
         ('I should say that I have no complaint whatever',
          'prevents a predictable misreading'),
         ('As to my data', 'opens the part of a letter with several '
          'elements'),
         ('I am content with that', 'accepts a term explicitly')],
   trans=['more importantly', 'however', 'as to', 'which'],
  ),

  dict(
   sub='Reading a claim',
   step=2,
   read=[
    dict(heading='Four reports of one study',
         kind='Four short texts', task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  The Herald: Coffee cuts heart disease risk by a quarter, say '
          'scientists. A major new study of forty thousand adults has found '
          'that those drinking three cups a day were twenty-five per cent less '
          'likely to develop heart disease than non-drinkers. Experts said the '
          'findings could transform public health advice.',
          'B  The Chronicle: A study published yesterday reports an '
          'association between coffee consumption and lower rates of heart '
          'disease. The researchers emphasised that the study was '
          'observational and cannot show that coffee is the cause; coffee '
          'drinkers in the sample were also younger, wealthier and more '
          'physically active.',
          'C  The Gazette: Scientists have been forced to admit that an '
          'earlier claim about coffee may not hold. The new figures, which '
          'show a twenty-five per cent difference, are already being '
          'questioned by critics who point out that similar claims about wine '
          'and chocolate have collapsed in recent years.',
          'D  The Courier: Coffee drinkers had a lower rate of heart disease '
          'in a new forty-thousand-person study, though the effect shrank from '
          'twenty-five to nine per cent once age, income and exercise were '
          'accounted for. The remaining nine per cent may reflect coffee, or '
          'something about coffee drinkers the study did not measure.'],
         items=[
          ('Which report gives the figure after adjustment?',
           ['The Herald', 'The Chronicle', 'The Gazette', 'The Courier'],
           3,
           'The effect shrank from twenty-five to nine per cent once '
           'age, income and exercise were accounted for.',
           {0: 'The Herald implies the finding should change advice.', 1: 'The Chronicle states the study design and its '
               'limitation.', 2: 'The Gazette frames the study as a retreat by '
               'scientists.'}),
          ('Which report states the study design and its limitation?',
           ['The Herald', 'The Chronicle', 'The Gazette', 'The Courier'],
           1,
           'Observational, and cannot show that coffee is the cause.',
           {0: 'The Herald implies the finding should change advice.', 2: 'The Gazette frames the study as a retreat by '
               'scientists.', 3: 'The Courier gives the figure after adjustment.'}),
          ('Which report frames the study as a retreat by scientists?',
           ['The Herald', 'The Chronicle', 'The Gazette', 'The Courier'],
           2,
           'Forced to admit, and a comparison with wine and chocolate.',
           {0: 'The Herald implies the finding should change advice.', 1: 'The Chronicle states the study design and its '
               'limitation.', 3: 'The Courier gives the figure after adjustment.'}),
          ('Which report implies the finding should change advice?',
           ['The Herald', 'The Chronicle', 'The Gazette', 'The Courier'],
           0, 'Could transform public health advice.',
           {1: 'The Chronicle states the study design and its '
               'limitation.', 2: 'The Gazette frames the study as a retreat by '
               'scientists.', 3: 'The Courier gives the figure after adjustment.'}),
          ('The Chronicle states that coffee reduces heart disease.',
           ['Yes', 'No', 'Not Given'], 1,
           'It reports an association and says explicitly that '
           'causation cannot be shown.',
           {0: 'Yes would need a causal claim; it reports an '
               'association and denies causation.', 2: 'Not Given is wrong because the Chronicle\u2019s wording is '
               'given.'}),
          ('The Gazette gives the adjusted figure.',
           ['Yes', 'No', 'Not Given'], 1,
           'It gives only the twenty-five per cent difference, which '
           'is the unadjusted one.',
           {0: 'Yes would need the adjusted one; it gives the '
               'twenty-five per cent difference.', 2: 'Not Given is wrong because the figure it prints is '
               'quoted.'})])],
   listen=[
    dict(heading='A short talk: reading a claim', part='Part 2',
         task='A talk on reading science reporting · multiple choice and matching', band='l2',
         qtype='Questions 25-28',
         script=[
          ('Speaker', 'I am going to give you four questions to ask of any '
           'scientific claim you meet in a newspaper. They take about ninety '
           'seconds between them and they will catch most of what goes '
           'wrong.'),
          ('Speaker', 'Question one: compared with what? A claim that a '
           'treatment works, or a food is good for you, is always a '
           'comparison, and half the time the comparison group is missing from '
           'the report entirely. If you cannot find out what the other group '
           'did, you do not yet have a finding.'),
          ('Speaker', 'Question two: how big, in what units? Twenty-five per '
           'cent less likely sounds enormous. Less likely than what baseline? '
           'If the baseline risk is four in a thousand, a quarter off is one '
           'in a thousand. Relative figures are reported because they are '
           'larger, not because they are more informative.'),
          ('Speaker', 'Question three: was anything assigned, or only '
           'observed? This is the big one. If the researchers decided who got '
           'what, a causal claim is on the table. If they watched what people '
           'already did, then anything that makes a person a coffee drinker '
           'may also make them healthier, and the study cannot separate '
           'them.'),
          ('Speaker', 'Question four: adjusted or raw? A good report gives '
           'both, as one of the papers on your handout does: twenty-five per '
           'cent before adjustment and nine after. That shrinkage is the most '
           'informative number in the whole story and it is the one that most '
           'often goes missing.'),
          ('Speaker', 'If you only remember one, remember the third. Assigned '
           'or observed is the difference between a study that can support the '
           'headline and a study that cannot, and it is usually stated in the '
           'second paragraph of the paper and in no paragraph of the '
           'newspaper.')],
         items=[
          ('The first question the speaker gives is',
           ['how big is it', 'compared with what', 'who funded it', 'how many people'],
           1,
           'Half the time the comparison group is missing from the '
           'report.',
           {0: 'How big is her second question, not her first.', 2: 'Funding is not among her four questions.', 3: 'Sample size is not one of the four.'}),
          ('She says relative figures are reported because they are',
           ['more accurate', 'larger', 'easier to calculate', 'standard'],
           1, 'Not because they are more informative.',
           {0: 'She says they are not more informative.', 2: 'Ease of calculation is not the reason she gives.', 3: 'She treats the practice as a choice, not a convention.'}),
          ('Which question does she say is the most important?',
           ['Compared with what', 'How big', 'Assigned or observed', 'Adjusted or raw'],
           2,
           'It is the difference between a study that can support a '
           'headline and one that cannot.',
           {0: 'Compared with what is her first question.', 1: 'How big is her second question.', 3: 'Adjusted or raw is her fourth question.'}),
          ('She calls the shrinkage from 25 to 9 per cent',
           ['a rounding error', 'the most informative number', 'an adjustment error', 'a minor detail'],
           1, 'And the one that most often goes missing from reports.',
           {0: 'The shrinkage is real, not a rounding artefact.', 2: 'The adjustment is correct; it is the reporting that '
               'fails.', 3: 'She calls it the most informative number in the story.'})]),
    dict(heading='A scientist and a journalist disagree', part='Part 3',
         task='A conversation after a press briefing · multiple choice', band='l3',
         qtype='Questions 29-33',
         script=[
          ('Dr Ferreira-Nakamura', 'Your headline says coffee cuts heart '
           'disease. I said six times this morning that we cannot show '
           'causation.'),
          ('Journalist', 'You did, and I wrote it in the fourth paragraph. '
           'The headline is not mine and it has to fit in forty-two '
           'characters.'),
          ('Dr Ferreira-Nakamura', 'Then the system is producing a false '
           'statement and we are both agreeing it is nobody’s fault.'),
          ('Journalist', 'Guilty, and I am going to push back on something of yours. '
           'Your press release led with twenty-five per cent. The adjusted '
           'figure is nine. Your own institution chose the larger number for '
           'the first line, and I am held responsible for the headline it '
           'produced.'),
          ('Dr Ferreira-Nakamura', 'That is a hit and I accept it. The press '
           'office writes those and we sign them off without reading them '
           'carefully, which is not a defence.'),
          ('Journalist', 'There is a version of this that works, though, and '
           'I think we are close to it. Give me the baseline risk. Not a '
           'percentage change, the actual numbers: four in a thousand becomes '
           'three in a thousand. I can write that, it fits, and readers '
           'understand it better than any percentage.'),
          ('Dr Ferreira-Nakamura', 'We do not usually supply that because '
           'reviewers do not ask for it.'),
          ('Journalist', 'Then that is the change. Not more caution in '
           'paragraph four, which nobody reads. A number in paragraph one '
           'that is honest and still interesting.'),
          ('Dr Ferreira-Nakamura', 'There is a difficulty with baseline '
           'numbers that I should raise, because it is not laziness on our '
           'side. The baseline differs by age group, and for a reader in '
           'their thirties the absolute change is almost nothing, while for a '
           'reader of seventy it is substantial. One pair of numbers hides '
           'that.'),
          ('Journalist', 'Then give me the seventy-year-old’s numbers and '
           'say so in the sentence. Readers are perfectly able to hear that a '
           'finding applies more to one group than another; what they cannot '
           'do anything with is a percentage attached to nobody in '
           'particular.'),
          ('Dr Ferreira-Nakamura', 'That is better than what we currently '
           'do, which is to give the average and hope.'),
          ('Dr Ferreira-Nakamura', 'I would want the observational caveat '
           'somewhere visible as well.'),
          ('Journalist', 'Put it in the same sentence as the number and I '
           'will keep it, because then cutting it breaks the sentence. '
           'Caveats survive when they are load-bearing.'),
          ('Dr Ferreira-Nakamura', 'That is the most practical thing anybody '
           'has said to me about this in ten years.')],
         items=[
          ('What does the journalist say about the headline?',
           ['She wrote it', 'It is not hers and has a length limit', 'It was approved by the scientist', 'It was corrected later'],
           1, 'She says the caution is in the fourth paragraph.',
           {0: 'She says the headline is not hers.', 2: 'The scientist objects to it, so did not approve it.', 3: 'No correction is mentioned in the exchange.'}),
          (
           'What does the journalist criticise about the press '
           'release?',
           ['It was late', 'It led with the unadjusted figure', 'It omitted the sample size', 'It named no authors'],
           1, 'Twenty-five per cent in the first line instead of nine.',
           {0: 'Timing of the release is not her complaint.', 2: 'Sample size is not what she says was left out.', 3: 'Authorship is not raised in the exchange.'}),
          ('How does the scientist respond to that?',
           ['She disputes it', 'She accepts it and says it is not a defence', 'She blames the journal', 'She asks for a correction'],
           1,
           'The press office writes them and they are signed off '
           'without careful reading.',
           {0: 'She accepts the criticism at once.', 2: 'The journal is not blamed by either speaker.', 3: 'No correction is requested by either.'}),
          ('What does the journalist ask to be given?',
           ['An interview', 'The baseline risk in actual numbers', 'An embargo', 'The raw data'],
           1, 'Four in a thousand becoming three in a thousand.',
           {0: 'An interview is not what she asks for.', 2: 'No embargo is discussed in the exchange.', 3: 'Raw data is not what she requests.'}),
          (
           'Why does she want the caveat in the same sentence as the '
           'number?',
           ['It is shorter', 'Cutting it would break the sentence', 'It is required', 'Editors prefer it'],
           1,
           'Caveats survive when they are load-bearing, as she puts '
           'it.',
           {0: 'Length is not her reason for wanting it there.', 2: 'No requirement obliges her to carry it.', 3: 'Editor preference is what she is working around.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Claims',
    longturn=[('The thing I was told that turned out to be wrong is that you '
               'should wait an hour after eating before swimming, or you will '
               'get cramp and drown.'),
              ('I was told it by everybody: my parents, two teachers, the '
               'attendant at the local pool, and a sign on the wall of a '
               'holiday camp I went to when I was nine.'),
              ('How I found out was accidental and much later. I was reading '
               'about where common safety advice comes from, and this one was '
               'given as an example of a rule with no evidence behind it at '
               'all. I checked, half expecting the article to be the wrong '
               'one, and found that it has been examined several times, that '
               'nobody has ever recorded a drowning caused by swimming after a '
               'meal, and that the advice appears to have spread through a '
               'swimming manual in the nineteen-fifties.'),
              ('What it changed is broader than swimming. It is the clearest '
               'case I know of something I believed firmly, for thirty years, '
               'for no reason other than that everybody around me believed it. '
               'Nobody lied to me; they were all passing on what they had been '
               'told, in good faith, about the safety of children. So I now '
               'ask about ordinary received advice the question I would ask '
               'about a surprising claim, which is simply: how would anybody '
               'know that? Most of the time there is an answer. Occasionally '
               'the question has never been asked.')],
    intro=('Short answers, then the long turn. The card asks for a story; '
           'tell one story properly instead of three briefly.'),
    cue=('Describe something you were told that turned out to be wrong.',
         ['what you were told', 'who told you',
          'how you found out it was wrong',
          'and explain how it changed what you believe now']),
    qs=['Do you believe everything you read in the news?',
        'How do you check whether something is true?',
        'Now look at the card. You have one minute to make notes.',
        'Should journalists be trained in science?'],
    shape=[('answer', 'That you must drink two litres of water a day.'),
           ('support', 'My mother said it and so did every magazine.'),
           ('follow-up', 'It turned out to come from a misread report from '
            '1945.'),
           ('support', 'The report counted water in food and the advice '
            'dropped that.'),
           ('follow-up', 'Which taught me that advice can be repeated for '
            'eighty years without anybody checking the source.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should scientific findings be reported differently?',
         prompt=('Some people believe newspapers should be required to report '
                 'scientific findings with their limitations. Others say this '
                 'would make science reporting unreadable. Discuss both views '
                 'and give your own opinion. Write at least 250 words.'),
         model=[
          'Complaints about science reporting usually take the form of asking '
          'journalists to add caution, and this is why they have failed for '
          'thirty years. Caution added at the end of an article is the first '
          'thing cut for space and the last thing read, and a reform designed '
          'to be cut is not a reform.',
          'The case for requiring limitations is easy to state. A finding '
          'reported without its design is not information: readers cannot '
          'distinguish a trial in which treatments were assigned from a survey '
          'in which behaviour was observed, and these support entirely '
          'different conclusions. Public health advice has been changed and '
          'then reversed on the strength of the second kind reported as the '
          'first, and the reversals do more damage to trust than the original '
          'errors.',
          'The case against is practical and serious. Newspapers compete for '
          'attention, a hedged headline loses to an unhedged one, and a rule binding one outlet while leaving its competitor free simply transfers readers. There '
          'is also a real limit to how much method a general reader will '
          'absorb, and an article that explains confounding before it says '
          'what happened will not be finished.',
          'My own view is that both sides are arguing about the wrong '
          'placement. The useful reform is not more caution but better '
          'numbers, and specifically absolute ones instead of relative ones. A '
          'risk falling from four in a thousand to three in a thousand is '
          'honest, it fits in a headline, and it is more interesting than '
          'twenty-five per cent because a reader can picture it. The limitation is carried by the number itself, where a caveat is bolted on afterwards.',
          'The same principle handles the design problem. A caveat written '
          'into the sentence that states the finding survives editing, because '
          'removing it breaks the sentence. What is appended can be deleted; '
          'what is structural cannot, and that is a fact about editing, which no appeal to ethics changes.'],
         notes=[
          'The opening does not restate the prompt. It makes a claim about '
          'why the existing solution fails, which means the essay has already '
          'started arguing by the end of line two.',
          'Structure 3 with a third position, and the position is again a '
          'relocation: not whether to add caution but where it should sit. '
          'Notice how much work the word placement does.',
          'The final paragraph gives a mechanism — what is appended can be '
          'deleted — that explains the recommendation instead of repeating '
          'it. A conclusion that explains why your proposal would survive '
          'contact with reality is worth more than one that asserts it '
          'would.'],
         criterion=[('An opening that argues, not one that restates',
                     'Task Response'),
                    ('A position that relocates, not one that chooses',
                     'Task Response'),
                    ('A conclusion giving the mechanism',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Distinguishing association from cause',
    explain=('This distinction appears in Task 2 essays constantly and is '
             'usually fumbled. These are the structures that get it right in '
             'one clause.'),
    examples=['Coffee drinkers had lower rates, which is not the same as '
              'coffee lowering them.',
              'The study found an association and was not designed to show '
              'causation.',
              'Something that makes a person a coffee drinker may also make '
              'them healthier.',
              'The groups differ in the exposure and in much else '
              'besides.'],
    task='Rewrite each causal claim as the associational one the evidence '
         'supports.',
    items=[('Coffee reduces heart disease.',
            'Coffee drinkers in this sample had less heart disease than '
            'non-drinkers.'),
           ('Exercise makes people happier.',
            'People who exercise report higher wellbeing, though happier '
            'people may also exercise more.'),
           ('The drug caused the improvement.',
            'Patients taking the drug improved more than those who did '
            'not.'),
           ('Reading improves school results.',
            'Children who read more achieve more, and both may follow from '
            'the home they are in.'),
           ('The policy reduced crime.',
            'Crime fell after the policy, which is consistent with the policy '
            'having reduced it and does not establish that it did.')]),
   vocab=[('observational', 'based on watching, not on assigning'),
          ('association', 'two things occurring together'),
          ('baseline risk', 'the rate before any change'),
          ('relative risk', 'a change expressed as a proportion of the '
           'baseline'),
          ('absolute risk', 'a change expressed in actual numbers'),
          ('adjustment', 'statistical correction for known differences'),
          ('confounding', 'a third factor affecting both of two measures'),
          ('caveat', 'a qualification attached to a claim')],
   expr=[('That is a hit and I accept it', 'concedes a specific point'),
         ('Caveats survive when they are load-bearing',
          'explains why a qualification is kept'),
         ('compared with what', 'questions an implied comparison'),
         ('the system is producing a false statement and it is nobody’s '
          'fault', 'identifies a structural failure')],
   trans=['then', 'though', 'specifically', 'the same principle'],
  ),

  dict(
   sub='How a trial is designed',
   step=3,
   read=[
    dict(heading='Allocation, masking and the control arm',
         kind='Process article',
         task='Flow-chart completion, matching information and multiple choice',
         band='gt_work', qtype='Questions 34-39',
         figure=_TRIAL,
         paras=[
          'The diagram shows the stages of a controlled trial, grouped into '
          'three phases. The first phase runs from recruitment to consent and '
          'establishes who is in the study. Volunteers respond to an '
          'invitation, are screened against eligibility criteria, and give '
          'written consent after a cooling-off period of at least a day.',
          'The second phase is the one that distinguishes a trial from an '
          'observation, and it consists of two steps that are often confused. '
          'Allocation is the assignment of each participant to a group by a '
          'process nobody can predict, normally a computer. Concealment is '
          'keeping the resulting assignment hidden, both from the participant '
          'and from the staff who will assess them.',
          'The distinction matters because the two fail in different ways. '
          'Allocation fails when the assignment can be anticipated, so that a '
          'clinician declines to enrol a patient they expect to be placed in '
          'the control group. Concealment fails after assignment, when '
          'somebody who knows the group records an outcome more generously '
          'than they otherwise would.',
          'The third phase runs from treatment to analysis. One group receives '
          'the active intervention and the other a dummy that is '
          'indistinguishable from it. Both are followed with the same measures '
          'on the same days, which is why the schedule is specified in advance '
          'and departures from it are recorded.',
          'One further feature of the third phase is worth stating, because '
          'it is where trials most often lose their advantage. Participants '
          'who stop attending are not removed from the analysis. They are '
          'counted in the group to which they were originally allocated, '
          'whatever they actually did afterwards, since people stop attending '
          'for reasons connected to how they are faring and excluding them '
          'reintroduces precisely the differences that allocation was '
          'designed to remove.',
          'The code is broken last. Analysis is planned, and in a '
          'well-conducted study published, before anybody knows which group is '
          'which, so that the choice of how to analyse cannot be influenced by '
          'the result it produces. A study that decides its analysis after '
          'seeing the data has not run one trial; it has run many and reported '
          'the best.'],
         items=[
          ('Stage 2 of the process is ____________.', None, 'screening',
           'Eligibility criteria are applied, between recruitment and '
           'consent.'),
          ('Assignment to a group by an unpredictable process is called '
           '____________.', None, 'allocation',
           'Paragraph 2, normally done by a computer.'),
          ('Keeping the assignment hidden is called ____________.', None,
           'concealment',
           'Paragraph 2, from both the participant and the assessing staff.'),
          ('The group not receiving the active treatment is given a '
           '____________.', None, 'dummy',
           'Paragraph 4: indistinguishable from the active intervention.'),
          (
           'Which paragraph explains how the two middle steps fail '
           'differently?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'Allocation fails when assignment can be anticipated; '
           'concealment fails after assignment.',
           {0: 'Paragraph 2 defines allocation and concealment.', 2: 'Paragraph 4 describes the treatment and follow-up.', 3: 'Paragraph 5 is about participants who stop attending.'}),
          ('Why is the analysis planned in advance?',
           ['To save time', 'So the choice cannot be influenced by the result', 'To satisfy the funder', 'To allow replication'],
           1,
           'Paragraph 5: otherwise a study has run many analyses and '
           'reported the best.',
           {0: 'Time is not the reason given in paragraph 6.', 2: 'The funder is not mentioned in the passage.', 3: 'Replication is not the reason the plan is published.'})])],
   listen=[
    dict(heading='A methodologist on trial design', part='Part 4',
         task='A lecture on why each step exists · matching and multiple choice', band='l4',
         qtype='Questions 40-45',
         figure=_TRIAL,
         script=[
          ('Lecturer', 'The diagram on your handout has eight boxes. I am '
           'going to argue that two of them are doing almost all of the work, '
           'and that the reason trials are believed is almost entirely those '
           'two.'),
          ('Lecturer', 'Boxes one to three — recruit, screen, consent — '
           'determine who is in your study. They matter enormously for '
           'whether your result applies to anybody else, and not at all for whether it is true of the people in it. Keep those two '
           'questions apart and half the confusion in this field '
           'disappears.'),
          ('Lecturer', 'Box four is allocation. A computer assigns each '
           'person to a group by a process nobody can predict. The purpose is '
           'not fairness. The purpose is that the two groups then differ only '
           'by chance in everything, including the things you did not think '
           'to measure and the things nobody has yet discovered. No other '
           'method achieves that, and it is why a trial can support a causal '
           'claim that an observation cannot.'),
          ('Lecturer', 'Box five is concealment, and students collapse it '
           'into box four every year. Allocation is how the assignment is '
           'made. Concealment is keeping it hidden afterwards. They fail '
           'differently: allocation fails if a clinician can guess what comes '
           'next and declines to enrol a patient; concealment fails if the '
           'person measuring the outcome knows which arm they are measuring '
           'and rounds in the hopeful direction.'),
          ('Lecturer', 'Boxes six and seven are the treatment and the '
           'follow-up, and the only thing I will say about them is that the '
           'schedule must be identical in both arms. If the active group is '
           'seen more often, you have tested the treatment plus the '
           'attention, which is not what is on the label.'),
          ('Lecturer', 'One thing I will add about box seven, since it '
           'quietly destroys more trials than anything else: people who stop '
           'turning up stay in the analysis, counted in the group they were '
           'first assigned to. Drop them and you have undone box four, '
           'because people leave for reasons connected to how they are '
           'doing.'),
          ('Lecturer', 'Box eight is where the modern argument sits. The code '
           'is broken last, and the analysis should be written down and '
           'preferably published before anybody knows anything. The reason is '
           'arithmetic rather than virtue. There are a great many defensible '
           'ways to analyse a dataset, and if you choose among them after '
           'seeing the answers, you have not run one study. You have run '
           'forty and reported the one you liked.')],
         items=[
          ('Which boxes does the lecturer say do most of the work?',
           ['One and two', 'Three and four', 'Four and five', 'Seven and eight'],
           2,
           'Allocation and concealment are why a trial supports a '
           'causal claim.',
           {0: 'Boxes one and two are recruitment and screening.', 1: 'Box three is consent, which he groups with '
               'recruitment.', 3: 'Boxes seven and eight are follow-up and analysis.'}),
          ('What do recruitment, screening and consent determine?',
           ['Whether the result is true', 'Whether the result applies to others', 'The size of the effect', 'The analysis plan'],
           1, 'He insists the two questions be kept apart.',
           {0: 'He says they matter not at all for whether it is true.', 2: 'Effect size is a result, not what these boxes settle.', 3: 'The analysis plan belongs to the last box.'}),
          ('The purpose of random allocation is that the groups',
           ['are equal in size', 'are fairly treated', 'differ only by chance in everything', 'can be compared statistically'],
           2, 'Including things not measured and not yet discovered.',
           {0: 'Equal group sizes are not the purpose he gives.', 1: 'He says explicitly that the purpose is not fairness.', 3: 'Statistical comparison follows from the design, not '
               'its purpose.'}),
          ('Concealment fails when',
           ['a clinician guesses the next assignment', 'the assessor knows which arm they are measuring', 'consent is taken too early', 'the schedule differs'],
           1, 'And rounds in the hopeful direction, as he puts it.',
           {0: 'A clinician guessing the next assignment is how '
               'allocation fails.', 2: 'Consent timing is not part of either failure.', 3: 'An unequal schedule is a separate fault, in box six.'}),
          ('Why must the visit schedule be identical in both arms?',
           ['To reduce cost', 'Otherwise you test treatment plus attention', 'To satisfy the ethics committee', 'To keep participants'],
           1, 'Which is not what is on the label.',
           {0: 'Cost is not the reason he gives.', 2: 'The ethics committee is not mentioned in this lecture.', 3: 'Retention is a separate issue, in box seven.'}),
          ('His reason for pre-specifying the analysis is',
           ['ethical', 'arithmetic', 'legal', 'historical'], 1,
           'Many defensible analyses exist, and choosing after seeing '
           'the answers means running many studies.',
           {0: 'He distinguishes his reason from virtue.', 2: 'No legal requirement is mentioned.', 3: 'History is not the ground he gives.'})])],
   speak=dict(
    part='Part 3', focus='Showing that something works',
    intro=('Four or five sentences. Try to use one of the unit’s '
           'distinctions precisely instead of gesturing at it.'),
    qs=['How can we tell whether a medicine really works?',
        'Is it fair to give some people a dummy treatment?',
        'Should people be paid to take part in experiments?',
        'Can everything important be tested this way?'],
    shape=[('answer', 'By assigning the treatment instead of observing who '
            'takes it.'),
           ('support', 'Otherwise the people who take it differ in other '
            'ways.'),
           ('follow-up', 'And you cannot tell which difference produced the '
            'result.'),
           ('support', 'The assignment has to be hidden afterwards as '
            'well.'),
           ('follow-up', 'Because somebody who knows the group measures it '
            'differently without meaning to.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='The stages of a controlled trial',
         prompt=('The diagram below shows the stages of a controlled trial. '
                 'Summarise the information by selecting and reporting the '
                 'main features. Write at least 150 words.'),
         figure=_TRIAL,
         model=[
          'The diagram shows the eight stages of a controlled trial, which '
          'fall into three distinct phases. Overall, the process moves from '
          'establishing who takes part, through the two steps that divide '
          'participants into groups and keep that division hidden, to the '
          'treatment and the analysis, which is carried out last of all.',
          'In the first phase, volunteers are recruited by responding to an '
          'invitation. They are then screened against a set of eligibility '
          'criteria, and those who qualify give written consent, which is taken only after a cooling-off period has passed.',
          'The second phase consists of two steps. Each participant is first '
          'allocated to a group by a computer, and the resulting assignment '
          'is then concealed, so that neither the participant nor the staff '
          'know which group they are in.',
          'In the final phase, one group receives the active treatment while '
          'the other receives a dummy. Both are then followed up using the '
          'same measures on the same days. Only when this is complete is the '
          'code broken and the analysis carried out, so that the results are '
          'produced last in the sequence.'],
         notes=[
          'A process is one-dimensional, so the structuring choice is already '
          'made: follow the sequence. What you choose is the grouping, and '
          'here the diagram supplies it — three phases, three paragraphs.',
          'Everything is in the passive and nothing has an agent. A process '
          'description where volunteers are recruited is correct; one where '
          'the researchers recruit volunteers imports an actor the diagram '
          'does not show.',
          'The Overall statement names the phases, where a weaker answer names the first and last stages. On a process diagram the shape of the sequence is the '
          'main feature, not its endpoints.'],
         criterion=[('Grouping the sequence into the phases shown',
                     'Coherence and Cohesion'),
                    ('Agentless passive throughout', 'Grammatical Range'),
                    ('An Overall statement naming the shape of the process',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='The agentless passive in a process description',
    fix=dict(
     text=('The samples are first logged and then they divide into two '
           'batches. One batch is analysed immediately; the other is frozen. '
           'After the analysis has completed, the results are compared. Any '
           'sample whose result differs by more than five per cent are '
           'analysed again by a second laboratory.'),
     faults=[('then they divide into two batches',
              'then they are divided into two batches',
              ('The samples do not divide themselves. The passive is are '
               'divided.')),
             ('After the analysis has completed',
              'After the analysis has been completed',
              ('The analysis does not complete anything. The passive needs '
               'been.')),
             ('differs by more than five per cent are analysed again',
              'differs by more than five per cent is analysed again',
              ('The subject is any sample, which is singular, so the verb is '
               'is analysed.'))]),
    explain=('A process diagram shows what happens, not who does it. The '
             'passive without a by-phrase is the register this requires, and '
             'using it consistently is the easiest Grammatical Range mark in '
             'Task 1.'),
    examples=['Volunteers are recruited by responding to an invitation.',
              'They are then screened against eligibility criteria.',
              'Each participant is allocated to a group.',
              'Only when this is complete is the code broken.'],
    task='Rewrite each sentence in the agentless passive.',
    items=[('The researchers screen the volunteers.',
            'The volunteers are screened.'),
           ('A computer allocates each person to a group.',
            'Each person is allocated to a group by computer.'),
           ('Staff follow up both groups on the same days.',
            'Both groups are followed up on the same days.'),
           ('They break the code at the end.',
            'The code is broken at the end of the process.'),
           ('The team analyses the results.',
            'The results are then analysed.')]),
   vocab=[('allocation', 'assigning participants to groups'),
          ('concealment', 'keeping the assignment hidden'),
          ('arm', 'one group within a trial'),
          ('placebo', 'a dummy treatment with no active ingredient'),
          ('follow-up', 'measurement after the treatment period begins'),
          ('pre-specify', 'to write down a plan before seeing the data'),
          ('enrol', 'to take a participant into a study'),
          ('schedule', 'the fixed timetable of visits and measures')],
   expr=[('which is why', 'links a design feature to its purpose'),
         ('fail differently', 'contrasts two failure modes'),
         ('which is not what is on the label',
          'names what a flawed design has actually tested'),
         ('the reason is arithmetic rather than virtue',
          'bases a methodological rule on counting')],
   trans=['in the first phase', 'then', 'in the final phase',
          'only when'],
  ),

  dict(
   sub='Why findings fail to replicate',
   step=4,
   read=[
    dict(heading='A literature of successes',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 46-52',
         paras=[
          'Between 2011 and 2020 a series of large projects attempted '
          'to repeat well-known experiments in several fields. In '
          'psychology, about four in ten repetitions produced the '
          'original result; in cancer biology, fewer. The findings '
          'were widely described as a crisis, and the word has done '
          'considerable damage to a discussion that would be better '
          'served by arithmetic.',
          'The first thing to establish is that this outcome was '
          'predicted. If a field runs studies with a fifty per cent '
          'chance of detecting a real effect of the size it is looking '
          'for \u2014 and surveys of published work suggest this is roughly '
          'typical \u2014 then the arithmetic is unforgiving. Even if every '
          'single effect studied were real, half the original studies '
          'would have found nothing and half of the repetitions would '
          'fail. The observed failure rate is close to what '
          'underpowered research produces when it is working '
          'correctly.',
          'The mechanism that converts low power into a literature of '
          'successes is publication bias. A study that finds nothing is '
          'harder to publish, so it is written up less often, submitted less '
          'often and accepted less often. What reaches print is not a sample '
          'of the research conducted; it is a sample filtered on the result, '
          'and the filter is applied by the same people at every stage.',
          'A second mechanism operates inside a single study. Any dataset admits many defensible analyses: which cases to '
          'exclude, which measure to treat as primary, which covariates to '
          'include. A researcher who makes these choices after seeing the data '
          'is not being dishonest, but is selecting among many studies while '
          'believing they have run one.',
          'Both mechanisms inflate published effect sizes instead of '
          'inventing them, which is the point most commonly missed in '
          'public discussion. A finding that fails to replicate is '
          'usually not a finding that is false; it is far more often a '
          'real effect that is considerably smaller than the published '
          'estimate, discovered by a study too small to measure it '
          'reliably.',
          'That distinction has consequences for what should be done: '
          'if published findings were mostly fabrications, the remedy '
          'would be detection and punishment. If they are mostly real '
          'effects measured badly, the remedy is larger samples, '
          'pre-registered analyses and a publication system that '
          'accepts null results \u2014 and these are exactly the reforms '
          'the fields concerned have adopted.',
          'There is a further complication that cuts against the whole '
          'enterprise of replication projects. A repetition can fail because '
          'the original effect was overstated, or because the repetition '
          'differed from the original in some way that matters. '
          'Distinguishing these requires knowing which features of a procedure '
          'matter, and that knowledge is exactly what a young field does not '
          'yet have.',
          'It is worth being concrete about what the critics did and did not '
          'establish, since the word crisis obscures it. They established '
          'that the rate at which published findings survive repetition is '
          'low, that this rate is predictable from sample sizes that were '
          'public all along, and that nobody in the fields concerned had '
          'calculated it. The last of those is the genuinely damning finding, '
          'and it is about attention, not integrity.',
          'There is also a question about which findings were chosen for '
          'repetition. The projects selected prominent results, which are by '
          'construction the ones most likely to have been published because '
          'they were surprising, and surprising results are disproportionately '
          'the ones that got lucky. A replication rate measured on famous '
          'findings is not an estimate of the reliability of the field; it is '
          'an estimate of the reliability of its headlines, which is both '
          'more alarming and less general than it has been taken to be.',
          'The honest summary is therefore uncomfortable for both camps. The '
          'critics are right that the published literature systematically '
          'overstates effects and that this was foreseeable from the sample '
          'sizes alone. The defenders are right that a failed repetition is '
          'weak evidence about any individual finding. These claims are '
          'compatible, and the argument persists largely because each side '
          'hears the other as making a claim about honesty.',
                ('There is a practical test that cuts through most of the '
                 'dispute, and it is unglamorous. Before believing an effect, '
                 'look at the sample size and ask what effect would have been '
                 'needed to reach significance with that many participants. '
                 'Where the answer is implausibly large, the published '
                 'estimate is almost certainly inflated whatever the '
                 'repetition record says, and no further argument about the '
                 'replication crisis is required to reach that conclusion.')],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The failure rate was predictable', 'How publication bias works', 'Choices made after seeing data', 'What should be done'],
           0,
           'Underpowered research produces this failure rate when it '
           'is working correctly.',
           {1: 'Publication bias is paragraph 3, the filtering '
               'mechanism.', 2: 'Choices after seeing data are paragraph 4.', 3: 'What should be done is paragraph 6.'}),
          ('Choose the best heading for paragraph 4.',
           ['The failure rate was predictable', 'How publication bias works', 'Many analyses, one reported', 'Why replication projects are limited'],
           2,
           'A researcher selecting among defensible analyses after '
           'seeing the data.',
           {0: 'The failure rate was predictable is the heading for '
               'paragraph 2.', 1: 'Publication bias is paragraph 3, the filtering '
               'mechanism.', 3: 'Why replication projects are limited is the heading '
               'for paragraph 7.'}),
          ('Choose the best heading for paragraph 7.',
           ['What should be done', 'Why replication projects are limited', 'The honest summary', 'How publication bias works'],
           1,
           'A repetition may fail because it differed in a way that '
           'matters.',
           {0: 'What should be done is paragraph 6.', 2: 'The honest summary is paragraph 10.', 3: 'Publication bias is paragraph 3.'}),
          (
           'The writer believes most published findings are '
           'fabricated.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5: a failed replication usually indicates an '
           'overstated real effect, not a false one.',
           {0: 'Yes would need fabrication; paragraph 5 says the '
               'effects are overstated, not invented.', 2: 'Not Given is wrong because the writer explains what a '
               'failed repeat means.'}),
          (
           'The writer believes the reforms adopted are the right '
           'ones.', ['Yes', 'No', 'Not Given'], 0,
           'Paragraph 6 says the remedy for badly measured real '
           'effects is exactly what the fields have adopted.',
           {1: 'No would need criticism; paragraph 6 matches the '
               'remedy to the diagnosis.', 2: 'Not Given is wrong because the reforms are judged.'}),
          ('About ____________ in ten psychology repetitions produced the '
           'original result.', None, 'four',
           'Paragraph 1, with fewer in cancer biology.'),
          ('Both mechanisms ____________ published effect sizes instead of '
           'inventing them.', None, 'inflate',
           'Paragraph 5, which the writer calls the most commonly missed '
           'point.')])],
   listen=[
    dict(heading='A lecture on publication bias', part='Part 4',
         task='A lecture on why literatures mislead · multiple choice', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'I want to do something slightly unusual today, which '
           'is to show you that the replication crisis was arithmetically '
           'guaranteed, using nothing but a pocket calculator and the sample '
           'sizes that were already public.'),
          ('Lecturer', 'Start with statistical power. Power is the chance '
           'your study detects a real effect of the size you are looking for. '
           'Surveys of published psychology put typical power somewhere near '
           'fifty per cent. Hold that number. It means that for a real effect, '
           'a coin flip decides whether your study finds it.'),
          ('Lecturer', 'Now imagine a field in which every single hypothesis '
           'tested is true. Every one. Half the studies find nothing. Those '
           'studies are harder to publish, so most are not written up at all. '
           'The literature therefore consists almost entirely of the half that '
           'got lucky, and every published estimate is drawn from the upper '
           'half of a distribution.'),
          ('Lecturer', 'What happens when somebody repeats one of those '
           'studies at the original sample size? They have the same fifty per '
           'cent power, applied to an effect that is genuinely smaller than '
           'the published figure. So they fail more than half the time. Four '
           'in ten succeeding is not a scandal. It is what this machine '
           'outputs when it is running normally.'),
          ('Lecturer', 'There is a second mechanism inside each study, and I '
           'want to be careful about the language because the word fraud gets '
           'used and it is almost always wrong. Any dataset supports many '
           'defensible analyses. Exclude these outliers or those. Treat this '
           'measure as primary or that one. Make those choices after you have '
           'seen the data and you have run many studies while sincerely '
           'believing you ran one.'),
          ('Lecturer', 'The consequence of both mechanisms is the same and it '
           'is the thing newspapers never say. They inflate effects; they do '
           'not invent them. A failed replication usually means a real effect '
           'that is much smaller than advertised, found by a study too small '
           'to see it properly.'),
          ('Lecturer', 'One caution about the projects themselves. They '
           'chose famous findings, and famous findings are the surprising '
           'ones, and surprising ones are disproportionately the lucky ones. '
           'So that four-in-ten figure describes the reliability of a field’s headlines, which is a narrower thing than its ordinary work.'),
          ('Lecturer', 'And that determines the remedy. If the problem were '
           'dishonesty you would want audits and sanctions. Because the '
           'problem is arithmetic, you want bigger samples, analyses written '
           'down in advance, and journals that will print a null result. '
           'Which is, to the credit of these fields, approximately what has '
           'happened since 2015.')],
         items=[
          (
           'Typical statistical power in published psychology is '
           'around',
           ['twenty per cent', 'fifty per cent', 'eighty per cent', 'ninety per cent'],
           1,
           'A coin flip decides whether a study finds a real effect.',
           {0: 'Lower than the figure the surveys give.', 2: 'Higher than typical published power, he says.', 3: 'Far above the level he reports.'}),
          ('In his thought experiment, how many hypotheses are true?',
           ['Half', 'Most', 'All', 'None'], 2,
           'And half the studies still find nothing.',
           {0: 'Half is the power, not the share of true hypotheses.', 1: 'He stipulates every one, not most.', 3: 'The experiment assumes all of them are true.'}),
          ('Published estimates are drawn from',
           ['a random sample', 'the upper half of a distribution', 'replications', 'pilot studies'],
           1, 'Because only the studies that got lucky are published.',
           {0: 'A random sample is what publication prevents.', 2: 'Replications come after, and fail more often.', 3: 'Pilot studies are not part of his account.'}),
          ('He says four in ten replications succeeding is',
           ['a scandal', 'what the machine outputs normally', 'evidence of fraud', 'better than expected'],
           1,
           'Given the same power applied to a genuinely smaller '
           'effect.',
           {0: 'He says explicitly that it is not a scandal.', 2: 'He argues that fraud is almost always the wrong word.', 3: 'It is what the arithmetic predicts, not a surprise.'}),
          (
           'About choices made after seeing data, he is careful to say',
           ['they are fraud', 'the word fraud is almost always wrong', 'they are rare', 'they are undetectable'],
           1,
           'Researchers run many studies while sincerely believing '
           'they ran one.',
           {0: 'He says the word fraud is almost always wrong here.', 2: 'He treats such choices as routine rather than rare.', 3: 'Detectability is not the point he makes.'}),
          ('Because the problem is arithmetic, the remedy he names is',
           ['audits and sanctions', 'bigger samples, pre-registration and null results', 'fewer studies', 'replication projects'],
           1,
           'Which he says is approximately what has happened since '
           '2015.',
           {0: 'Audits and sanctions are the remedy for dishonesty.', 2: 'Fewer studies is not what he recommends.', 3: 'Replication projects are what revealed the problem.'})])],
   speak=dict(
    part='Part 3', focus='Trusting a published result',
    followup=[(('You say we should not believe a result first time. Who should '
                'check published research?'),
               ('Somebody paid to, which is nobody at present. Replication is '
                'unfunded, unpublishable and career-damaging, so it does not '
                'happen, and that is a design fault rather than a failure of '
                'character. A small fixed share of every research budget '
                'reserved for replication would change the economics.')),
              (('Does it matter if a result turns out to be smaller than '
                'reported?'),
               ('Usually more than whether it exists at all. Policy is built '
                'on the size: a treatment with a tiny effect is real and '
                'useless. And shrinkage is the normal pattern, because the '
                'first published estimate is the one that was large enough to '
                'be noticed.')),
              (('How should scientists respond when their work does not '
                'replicate?'),
               ('By treating it as information, which is easier to say than to '
                'do when a career rests on the finding. The best cases I know '
                'of were authors who published the failed replication '
                'themselves, and the profession rewarded them, eventually. The '
                'worst response is a defence of the original on grounds nobody '
                'can test.'))],
    intro=('Four or five sentences. Say once what you would need to know '
           'before believing a result.'),
    qs=['Should we believe a scientific result the first time it is '
        'published?',
        'Who should check that published research is correct?',
        'Does it matter if a result turns out to be smaller than reported?',
        'How should scientists respond when their work does not '
        'replicate?'],
    shape=[('answer', 'Not on its own, no, however good the study looks.'),
           ('support', 'A single result is drawn from a literature filtered '
            'on results.'),
           ('follow-up', 'So the published figure is probably the high end of '
            'the truth.'),
           ('support', 'What I would want is the sample size and whether the '
            'analysis was pre-registered.'),
           ('follow-up', 'Those two facts tell you more than the conclusion '
            'does.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Brainstorm and outline: six tests on a method question',
         prompt=('Scientists should be required to publish their results '
                 'whether or not the experiment succeeded. Brainstorm at '
                 'least eight ideas, then run the six tests and keep two. Do '
                 'not write the essay yet.'),
         plan=('Yes, because a literature filtered on results is not '
               'evidence',
               [('Unpublished null results make every published estimate too '
                 'large',
                 ['readers see the successful half of the work done',
                  'the bias is invisible from inside the literature']),
                ('Publication is the only point at which the filter can be '
                 'removed',
                 ['researchers cannot be made to write up what nobody will '
                  'print',
                  'journals already decide, so the decision can be '
                  'changed'])]),
         notes=[
          'The six tests, applied in order: does it answer the question '
          'asked; is it true; can you support it for four sentences; is it '
          'distinct from your others; is it roughly equal in weight to them; '
          'does it need the others to work. An idea that fails any of the '
          'first five is cut. An idea that fails the sixth is a support, not '
          'a main idea.',
          'Most brainstorms on this prompt produce three versions of the '
          'first idea: bias, misleading readers, wasted effort. The '
          'distinctness test is what catches that, and it is the test '
          'candidates skip.',
          'The second idea here passes the sixth test in the useful '
          'direction: it depends on the first, which is why it is second, and '
          'the dependence is what makes the essay feel like an argument '
          'instead of a list.'],
         criterion=[('Running the distinctness test before writing',
                     'Coherence and Cohesion'),
                    ('Ordering ideas by dependence', 'Task Response')],
         instruct='  Produce the brainstorm, the six tests and the outline. '
                  'You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Explaining a mechanism, not asserting a result',
    explain=('At band 7 the difference is usually mechanism. These patterns '
             'take a claim and say how the thing happens, which is what turns '
             'an assertion into an argument.'),
    examples=['A study that finds nothing is harder to publish, so it is '
              'written up less often.',
              'The filter is applied by the same people at every stage.',
              'What reaches print is a sample filtered on the result.',
              'Both mechanisms inflate effects, not invent them.'],
    task='Turn each assertion into a sentence that gives the mechanism.',
    items=[('Published results are biased.',
            'Studies finding nothing are published less often, so the '
            'literature overrepresents successes.'),
           ('Small studies are unreliable.',
            'A small study detects a real effect only about half the time, so '
            'the ones that succeed overstate it.'),
           ('Pre-registration helps.',
            'Writing the analysis down in advance prevents the choice of '
            'analysis being made after the results are visible.'),
           ('Replication is important.',
            'A second study drawn without the publication filter gives an '
            'estimate the first could not.'),
           ('Journals should print null results.',
            'Printing null results removes the filter at the only stage where '
            'anybody has the power to remove it.')]),
   vocab=[('replication', 'repeating a study to see whether it holds'),
          ('publication bias', 'the tendency for positive results to be '
           'published'),
          ('statistical power', 'the chance of detecting a real effect'),
          ('effect size', 'how large a difference a study finds'),
          ('null result', 'a result showing no effect'),
          ('underpowered', 'too small to detect the effect reliably'),
          ('covariate', 'a measured factor included in an analysis'),
          ('pre-registration', 'publishing the plan before collecting '
           'data')],
   expr=[('was arithmetically guaranteed',
          'claims a result follows from the numbers alone'),
         ('I want to be careful about the language',
          'signals a distinction about blame'),
         ('while sincerely believing they ran one',
          'separates error from dishonesty'),
         ('that determines the remedy',
          'links a diagnosis to a policy')],
   trans=['start with', 'now imagine', 'the consequence', 'because'],
  ),

  dict(
   sub='What a failed replication does not prove',
   step=5,
   read=[
    dict(heading='Two studies, two results, one unresolved question',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given, short answer and sentence completion',
         band='acad', qtype='Questions 59-65',
         paras=[
          'In 2009 a laboratory reported that a brief writing exercise '
          'improved the examination results of students from '
          'under-represented groups, with an effect that persisted for '
          'two years. In 2017 a larger study, conducted with the '
          'original authors\u2019 cooperation and using their materials, '
          'found nothing. Both studies were well conducted, and the '
          'disagreement between them is still open; it is a useful '
          'case because it resists every easy reading.',
          'The simplest interpretation is that the original result was a '
          'false positive produced by a small sample and a selective '
          'literature. This is the correct default and it may well be right. '
          'It accounts for the data with no additional assumptions, and the '
          'original sample was indeed small.',
          'There is, however, a second interpretation that the replication '
          'cannot exclude. The original study was conducted in a school where '
          'the effect being targeted — a sense of not belonging — was acute. '
          'The replication sampled many schools, most of them with lower '
          'baseline levels of the problem. An intervention that works only '
          'where the problem is severe would produce exactly this pattern of '
          'results.',
          'This is not a convenient excuse invented after the fact. It is a '
          'prediction the original authors had published in 2011, before the '
          'replication was designed, and the replication data are consistent '
          'with it: within the larger sample, the schools with the highest '
          'baseline measures did show an effect, though the comparison was not '
          'pre-specified and the subgroups are small.',
          'The methodological difficulty is now acute. Subgroup findings '
          'discovered after a null overall result are the classic route to '
          'believing something false, and every statistician’s instinct is to '
          'dismiss them. But this particular subgroup was named in advance, in '
          'print, by the people whose result was being tested, which is '
          'precisely the condition under which such an analysis is supposed to '
          'be taken seriously.',
          'The case therefore sits in an awkward place for both of the '
          'available positions. The replication movement’s strongest rule — '
          'that a failed repetition should update belief downwards — holds '
          'here, but weakly, because the replication tested a different '
          'population. The defenders’ strongest rule — that context matters — '
          'holds here too, and is the rule most often used to rescue findings '
          'that deserve no rescue.',
          'What would settle it is a third study, designed around the moderator: recruit schools at both '
          'extremes of the baseline measure, pre-specify the comparison, and '
          'power it to detect a difference between them and not an average '
          'effect. That study is expensive and nobody’s career is advanced by '
          'running it, which is why it has not been run.',
          'It is worth noticing what has happened to the two researchers '
          'since. Neither has retracted anything, because there is nothing to '
          'retract: no error has been identified in either study. The '
          'original paper continues to be cited, chiefly by people who have '
          'not read the replication, and the replication is cited chiefly by people making general arguments about the field, who have no interest in this effect specifically. The literature has not resolved '
          'the question so much as split into two populations of readers.',
          'This outcome is more common than the public account of '
          'replication suggests, and it follows from how citation works. A '
          'result is cited for what it supports, and a contested result '
          'supports two different arguments equally well. Nothing in the '
          'system brings the two citing communities into contact, and the '
          'disagreement therefore persists without ever being conducted.',
          'The general lesson is about what replication is for: a '
          'repetition tests whether a result holds under the '
          'conditions of the repetition. When those conditions differ '
          'in a way that theory says should matter, the repetition has '
          'tested a related but different claim. Treating every failed '
          'replication as a verdict on the original finding imports an '
          'assumption \u2014 that context does not matter \u2014 which is itself '
          'an empirical claim, and one that in this instance the '
          'original authors had explicitly denied in advance.'],
         items=[
          (
           'Which paragraph gives the simplest explanation of the '
           'disagreement?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'A false positive from a small sample and a selective '
           'literature, called the correct default.',
           {0: 'Paragraph 1 sets out the two studies.', 2: 'Paragraph 3 gives the second interpretation.', 3: 'Paragraph 4 reports the 2011 prediction.'}),
          (
           'Which paragraph explains why the subgroup analysis cannot '
           'simply be dismissed?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2,
           'Paragraph 5: the subgroup was named in advance, in print, '
           'by the original authors.',
           {0: 'Paragraph 3 gives the second interpretation.', 1: 'Paragraph 4 reports the 2011 prediction.', 3: 'Paragraph 6 places the case between the two positions.'}),
          (
           'Which paragraph describes the study that would resolve the '
           'question?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           2,
           'Paragraph 7: schools at both extremes, pre-specified '
           'comparison, powered for the difference.',
           {0: 'Paragraph 5 explains why the subgroup analysis cannot '
               'simply be dismissed.', 1: 'Paragraph 6 places the case between the two positions.', 3: 'Paragraph 8 describes what happened to the '
               'researchers.'}),
          (
           'The writer believes the original finding has been shown to '
           'be false.', ['Yes', 'No', 'Not Given'], 1,
           'The whole passage argues the question is still open and '
           'resists every easy reading.',
           {0: 'Yes would need falsity; the passage keeps the question '
               'open.', 2: 'Not Given is wrong because the status of the finding '
               'is discussed throughout.'}),
          (
           'The writer believes the decisive study is unlikely to be '
           'conducted.', ['Yes', 'No', 'Not Given'], 0,
           'Paragraph 7: it is expensive and nobody\u2019s career is '
           'advanced by running it, which is why it has not been run.',
           {1: 'No would need optimism; paragraph 7 explains why '
               'nobody runs it.', 2: 'Not Given is wrong because the prospects for the study '
               'are given.'}),
          ('In what year did the original authors publish the prediction '
           'about severity?', None, '2011',
           'Paragraph 4, before the replication was designed.'),
          ('A repetition tests the ____________ of the repetition.',
           None, 'conditions',
           'Paragraph 8: when those conditions differ in a way theory '
           'says matters, a different claim has been tested.')])],
   listen=[
    dict(heading='Two researchers disagree about replication', part='Part 4',
         task='A recorded exchange · multiple choice', band='l4', qtype='Questions 66-71',
         script=[
          ('Chair', 'Professor Adeyemi-Strand ran the 2017 replication. Dr '
           'Vasquez-Oyelaran was an author of the 2009 original.'),
          ('Adeyemi-Strand', 'Let me start by saying what I am not claiming. '
           'I am not claiming your original study was badly done, and I am '
           'not claiming anybody did anything improper. I ran a larger study '
           'with your materials and your help and I found nothing, and the '
           'default reading of that is that the first result was too '
           'large.'),
          ('Vasquez-Oyelaran', 'I accept the default reading as a default. '
           'What I dispute is treating it as the conclusion, and I want to be '
           'precise about why, because context is the word people use when '
           'they are losing.'),
          ('Adeyemi-Strand', 'It is, and I will hear it anyway.'),
          ('Vasquez-Oyelaran', 'In 2011, two years before anybody designed a '
           'replication, we published a prediction: this works where the sense '
           'of not belonging is acute and should do nothing where it is not. '
           'Your sample was mostly schools where the baseline measure was '
           'low. So the study you ran was a test of a claim we had already '
           'said we were not making.'),
          ('Adeyemi-Strand', 'And the honest answer is that I knew about the '
           '2011 paper and I did not design around it, because designing '
           'around a moderator requires recruiting at both extremes and it '
           'would have cost three times as much. That is a resource constraint, which is a different thing from a disagreement.'),
          ('Vasquez-Oyelaran', 'Which I understand, and the result is that we '
           'now have an expensive null that does not answer the question.'),
          ('Adeyemi-Strand', 'Let me put the hardest thing to you. Your '
           'subgroups in my data do show the effect. They are also small, '
           'they were not pre-specified in my protocol, and I have seen '
           'exactly this pattern rescue a dozen findings that were simply '
           'false.'),
          ('Vasquez-Oyelaran', 'That is the strongest point against me and I '
           'do not have a clean answer. The only thing I would say is that '
           'the prediction preceded your data by six years, which is the one '
           'circumstance in which this kind of analysis is supposed to count '
           'for something.'),
          ('Adeyemi-Strand', 'Agreed, and that is why I have not written the '
           'finding off. What I want is the third study, powered on the '
           'moderator.'),
          ('Vasquez-Oyelaran', 'May I add one thing that I find more '
           'dispiriting than either of our positions? Your paper is now cited '
           'almost entirely by people making general arguments about the '
           'field, and mine by people who have not read yours. Neither '
           'community reads the other, so the disagreement is not being had '
           'anywhere except in this room.'),
          ('Adeyemi-Strand', 'That is true, and it is a fact about citation, which neither of us controls.'),
          ('Vasquez-Oyelaran', 'So do I, and neither of us can get it funded, '
           'which is the actual finding of this exchange.')],
         items=[
          ('What does Adeyemi-Strand say at the outset?',
           ['The original was badly done', 'He is not claiming impropriety or poor conduct', 'The materials were faulty', 'The effect is impossible'],
           1,
           'He states the default reading is that the first result was '
           'too large.',
           {0: 'He says explicitly that it was not badly done.', 2: 'He used her materials without complaint.', 3: 'He treats the effect as possible but smaller.'}),
          ('Why does Vasquez-Oyelaran say she wants to be precise?',
           ['The topic is technical', 'Context is the word people use when losing', 'The audience is hostile', 'Time is short'],
           1, 'She anticipates how her argument will be heard.',
           {0: 'Technicality is not why she wants to be precise.', 2: 'The audience is not described as hostile.', 3: 'Time pressure is not mentioned.'}),
          ('The 2011 prediction concerned',
           ['the size of the sample', 'where the effect should and should not work', 'the measurement instrument', 'the follow-up period'],
           1, 'It works where the sense of not belonging is acute.',
           {0: 'Sample size is not what the 2011 paper predicted.', 2: 'The instrument is not the subject of the prediction.', 3: 'Follow-up length is not what was predicted.'}),
          ('Why did Adeyemi-Strand not design around the moderator?',
           ['He disagreed with it', 'It would have cost three times as much', 'He was unaware of it', 'The schools refused'],
           1,
           'He calls it a resource constraint, separating it from any '
           'disagreement.',
           {0: 'He says it is not a disagreement at all.', 2: 'He says he knew about the 2011 paper.', 3: 'School refusal is not mentioned.'}),
          ('What does he call the hardest point for her?',
           ['The sample size', 'That subgroup findings have rescued false results before', 'The cost', 'The materials'],
           1,
           'Her subgroups do show the effect but were not '
           'pre-specified in his protocol.',
           {0: 'Sample size is not what he calls the hardest point.', 2: 'Cost is his own constraint, not her difficulty.', 3: 'The materials were hers and are not in question.'}),
          ('What do they agree is needed?',
           ['A retraction', 'A third study powered on the moderator', 'A meta-analysis', 'A new measure'],
           1, 'And that neither of them can get it funded.',
           {0: 'No retraction is needed, since no error was found.', 2: 'No meta-analysis is proposed.', 3: 'A new measure is not what they call for.'})])],
   speak=dict(
    part='Part 3', focus='How a field corrects itself',
    sounds=[('Academic reporting language has a rhythm of its own, and it is '
             'flatter than ordinary speech: the effect was smaller than '
             'reported takes one real stress, on smaller.'),
            ('Practise the four verbs of this unit with light stress: '
             'replicate, overstate, retract, revise. Each is unremarkable in '
             'the mouth of somebody used to it, and that is the effect you '
             'want.'),
            ('The phrase failed to replicate is one chunk with the stress on '
             'replicate. Said word by word it sounds like an accusation rather '
             'than a finding.'),
            ('Hedged conclusions must not be said hesitantly. The evidence is '
             'weaker than it looked is a firm sentence about a weak result, '
             'and the firmness belongs in the voice.'),
            ('Record yourself on whether to believe a result first time. '
             'Listen for a sentence where uncertainty in the content became '
             'uncertainty in the delivery.')],
    intro=('The hardest turn in the unit. Try to hold two claims at once and '
           'say that you are doing so.'),
    qs=['How should a field deal with results that do not hold up?',
        'Is it a weakness or a strength when science corrects itself?',
        'Who should pay for studies that check other studies?',
        'Can the public be expected to follow these arguments?'],
    shape=[('answer', 'By treating a failed repetition as information.'),
           ('support', 'It tells you the effect is smaller or narrower, not '
            'usually that it is absent.'),
           ('follow-up', 'Those are different conclusions with different '
            'consequences.'),
           ('support', 'The difficulty is that narrower is also what people '
            'say to rescue bad findings.'),
           ('follow-up', 'So I would want the narrowing to have been '
            'predicted before the data existed.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should all results be published?',
         prompt=('Write the essay you planned in cycle 4. Scientists should '
                 'be required to publish their results whether or not the '
                 'experiment succeeded. To what extent do you agree or '
                 'disagree? Write at least 250 words.'),
         model=[
          'I agree, and I want to argue for it on grounds that are arithmetical, because the ethical case is '
          'familiar and has not persuaded anybody who was not already '
          'persuaded.',
          'The core problem is that a literature assembled from successes is '
          'not a sample of the research that was done. If studies have roughly '
          'a fifty per cent chance of detecting the effects they look for, '
          'which surveys suggest is typical, then half of all work on real '
          'effects finds nothing. That half is written up less often, '
          'submitted less often and accepted less often, so what a reader '
          'eventually sees is the lucky half, and every published estimate is drawn from the top of a distribution, where its middle is what you wanted.',
          'The consequence is not that published findings are false. It is '
          'that they are systematically too large, which is a subtler and more '
          'damaging problem, because a field can spend a decade building on '
          'effects that are real and a third of the advertised size without '
          'anything looking obviously wrong.',
          'Publication is also the only point in the chain where the filter '
          'can actually be removed. A researcher cannot sensibly be required '
          'to write up work that no journal will print, and funders cannot '
          'police what is never submitted. Journals already make the decision; '
          'what is being proposed is not a new power but a different use of an '
          'existing one, which is why this reform is practicable where '
          'exhortation has failed.',
          'The usual objection is that journals would fill with '
          'uninformative negative results. I think this confuses a null result '
          'with an uninformative one: a well-powered study finding nothing is '
          'highly informative, and an underpowered one is uninformative '
          'whichever way it comes out. The filter we need is on power, which is a property of the design, instead of on direction, which is a property of the answer.'],
         notes=[
          'Structure 1: one point of view, argued throughout. The position is '
          'stated in the first line, which is the right move when you genuinely '
          'agree and do not part-agree.',
          'Paragraph 2 is a worked mechanism with a number in it. Nothing in '
          'this essay asks the reader to take a claim on trust, and that is '
          'what distinguishes a 7.0 body paragraph from a 6.0 one.',
          'The final paragraph answers the strongest objection and does so by '
          'reframing: the filter should be on power, not on direction. '
          'Finishing on the objection instead of a summary leaves the '
          'argument at its strongest point.'],
         model65=[
                  'Scientists are sometimes told they should publish '
                  'all results, including those that find nothing. I '
                  'agree, with a qualification about how.',
                  'The reason is that a literature of successes is '
                  'misleading. If ten groups test an idea and only the '
                  'two that found an effect publish, a reader sees two '
                  'successes and no failures and concludes the effect '
                  'is real. This is how whole fields have come to '
                  'believe things that later could not be repeated.',
                  'The qualification is that publication alone is not '
                  'enough. A result that found nothing is hard to '
                  'interpret if the study was small, because failing '
                  'to detect an effect is not the same as showing '
                  'there is none. What is needed is the plan '
                  'registered in advance, so that a reader can see '
                  'what was intended.',
                  'I think all results should be published together '
                  'with the plan that produced them. That turns a '
                  'shelf of failures into evidence, and it removes the '
                  'incentive to search for a result after the data has '
                  'been collected.',
                  ],
         gap65=[
                'It distinguishes failure to detect from absence, '
                'which is the inference that makes unpublished nulls '
                'dangerous.',
                'It explains why a literature that agrees too well is '
                'a warning sign.',
                'It matches the remedy to the diagnosis: registration '
                'answers the specific error it names.',
                ],
         criterion=[('A position stated immediately and held',
                     'Task Response'),
                    ('A worked mechanism in place of an assertion',
                     'Coherence and Cohesion'),
                    ('Answering the strongest objection last',
                     'Task Response')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=20)],
   gram=dict(
    point='Holding two claims at once',
    explain=('Where both sides of a dispute are partly right, the sentence '
             'that says so has to avoid sounding like indecision. These '
             'patterns state a genuine double position.'),
    examples=['The critics are right about the literature; the defenders are '
              'right about any individual finding.',
              'Both claims are true and they are not in conflict.',
              'The rule holds here, but weakly, because the populations '
              'differ.',
              'I accept the default reading as a default, which is as far as it goes.'],
    task='Write each as a double position, not as a compromise.',
    items=[('Both sides have a point.',
            'The critics are right that effects are overstated; the '
            'defenders are right that one failure settles little.'),
           ('It is complicated.',
            'Two things are true at once: the literature is biased and this '
            'particular finding is unresolved.'),
           ('Maybe context matters.',
            'Context matters here, and it is also the excuse most often used '
            'to rescue findings that deserve none.'),
           ('The replication was not conclusive.',
            'The replication is strong evidence about the population it '
            'sampled and weak evidence about the one the original studied.'),
           ('We should wait for more evidence.',
            'The question is answerable, by a study designed around the '
            'moderator, and nobody has an incentive to run it.')]),
   vocab=[('moderator', 'a factor that changes the size of an effect'),
          ('subgroup', 'a part of a sample analysed separately'),
          ('false positive', 'a result that appears real and is not'),
          ('default', 'the reading assumed unless there is reason '
           'otherwise'),
          ('update', 'to change a belief in the light of evidence'),
          ('baseline measure', 'the level recorded before an intervention'),
          ('generalisability', 'how far a result extends beyond its sample'),
          ('resource constraint', 'a limit imposed by money or capacity')],
   expr=[('Let me start by saying what I am not claiming',
          'removes a misreading before it happens'),
         ('context is the word people use when they are losing',
          'names a rhetorical pattern while still using the idea'),
         ('That is the strongest point against me and I do not have a clean '
          'answer', 'concedes without conceding the argument'),
         ('which is the actual finding of this exchange',
          'identifies the real conclusion of a discussion')],
   trans=['however', 'precisely', 'therefore', 'what would settle it'],
  ),
 ],
 technique=dict(
  title='Not Given, at Volume 4 density',
  body=('Not Given is where most candidates lose marks at this level, and the '
        'reason is that the passages are now dense enough that every '
        'statement sounds like it was mentioned. The discipline is to decide '
        'what would count as the writer taking a position, and then to ask '
        'whether they took it. A statement that the passage makes likely, '
        'implies, or would probably agree with is still Not Given unless the '
        'writer committed. And you cannot scan for an absence: Not Given is '
        'only reachable by having read the paragraph, which is precisely why '
        'the loop puts the questions in your head before the paragraph goes '
        'past your eyes.'),
  panel=[('What would count?', 'Before deciding, say what sentence the writer '
          'would have had to write. Then look for it.'),
         ('Topic is not position', 'The passage discusses fraud; it says '
          'nothing about whether this gallery was dishonest. Discussed and '
          'asserted are different.'),
         ('Entailment counts', 'If the writer states something that cannot be '
          'true unless the statement is, that is Yes. Entailment, not '
          'suggestion.'),
         ('No evidence is the answer', 'Finding nothing after reading '
          'properly is a result. Re-scanning for a sentence that is not there '
          'is the single commonest way candidates lose time.')],
  task='For each statement about the cycle 5 passage, decide Yes, No or Not '
       'Given, and write the sentence the writer would have had to produce '
       'for a Yes.',
  qs=['The writer believes the 2017 replication was poorly designed.',
      'The writer believes the original effect may be real but narrow.',
      'The writer believes subgroup analyses are generally unreliable.',
      'The writer believes the original authors acted in bad faith.',
      'The writer believes funding systems discourage the decisive '
      'study.']),
 outlining=dict(
  title='Six tests on a brainstorm',
  body=('A brainstorm is only useful if most of it is thrown away. The six '
        'tests, applied in order, do the throwing: does the idea answer the '
        'question asked; is it true; can you support it for four sentences; '
        'is it distinct from the others; is it roughly equal in weight; and '
        'does it depend on another idea. Fail one of the first five and it is '
        'cut. Fail the sixth and it is not a main idea but a support, which '
        'is the most common discovery and the most useful.'),
  frame=('All results should be published, because a literature filtered on '
         'results is not evidence',
         [('Unpublished nulls make every published estimate too large',
           ['readers see only the successful half of the work',
            'the bias is invisible from inside the literature']),
          ('Publication is the only stage at which the filter can be '
           'removed',
           ['nobody can be made to write up what will not be printed',
            'journals already decide, so the decision can be changed'])]),
  task='Brainstorm eight ideas for the cycle 4 prompt, run all six tests in '
       'writing, and record which test killed each idea you discarded.',
  qs=['Which ideas failed the distinctness test, and why?',
      'Which idea could you not support for four sentences?',
      'Which idea turned out to be a support all along?',
      'Were your surviving two roughly equal in weight?'],
  answers=['usually three restatements of bias: readers misled, effort '
           'wasted, estimates wrong',
           'typically a moral claim such as science should be honest',
           'the cost of journals printing more is a support under the '
           'objection',
           'if not, the lighter one is probably a support promoted too '
           'far']),
 candos=['I can answer Not Given by naming the sentence that would be '
         'needed',
         'I can tell an association from a causal claim in one clause',
         'I can describe a process in agentless passive throughout',
         'I can give a mechanism instead of asserting a result',
         'I can run six tests on a brainstorm and keep two ideas'],
 tip=('If you find yourself reading a paragraph for the third time looking '
      'for a statement, the answer is Not Given. The third read is the '
      'answer, not a failure of the first two.'),
)
