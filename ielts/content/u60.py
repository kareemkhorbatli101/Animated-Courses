# -*- coding: utf-8 -*-
"""Unit 60 - What a Test Measures. IELTS Volume 6, band 7.5."""

_TBL = dict(kind='table',
            title='Section scores and overall band, five candidates',
            sub='each section reported to the nearest half band; overall '
                'is the mean of the four, rounded to the nearest half',
            headers=['Candidate', 'Listening', 'Reading', 'Writing',
                     'Speaking', 'Overall'],
            rows=[['A', '8.0', '8.5', '5.5', '7.0', '7.5'],
                  ['B', '7.5', '7.0', '7.0', '7.5', '7.5'],
                  ['C', '6.0', '6.5', '7.5', '8.5', '7.0'],
                  ['D', '9.0', '8.0', '6.0', '5.5', '7.0'],
                  ['E', '7.0', '7.0', '7.0', '7.0', '7.0']])

_BAND = dict(kind='bar',
             title='Lowest section score against overall band',
             sub='five candidates, same data as the table',
             ylab='band score',
             cats=['A', 'B', 'C', 'D', 'E'],
             series=[('Overall band', [7.5, 7.5, 7.0, 7.0, 7.0]),
                     ('Lowest section', [5.5, 7.0, 6.0, 5.5, 7.0])])

UNIT = dict(
 n=60, vol=6, level='C1', band='7.5',
 theme='What a Test Measures',
 opener=(
   'The last unit of the volume is about the test itself: what a band '
   'score is made of, what it entitles anybody to conclude, and what '
   'having the test changes about the teaching that prepares people for '
   'it. You will find that two candidates can share an overall band and '
   'agree on nothing else, that the question is never whether a test is '
   'valid but whether a particular inference from it is, and that the '
   'course’s own position — learn the thing the test is sampling — '
   'follows from the evidence rather than from a slogan. After the five '
   'cycles come four timed papers: Reading, Listening, Writing and '
   'Speaking, each to its real length and its real clock.'),

 cycles=[
  dict(
   sub='Asking for a remark',
   step=2,
   read=[
    dict(heading='Enquiries on results: what is reviewed',
         kind='Official guidance',
         task='Sentence completion, multiple choice and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('Procedural guidance about your own result is read for '
                'what is and is not reconsidered',
                ['Every sentence in guidance of this kind is doing one of '
                 'two jobs: telling you what the reviewer will look at, '
                 'or telling you what they will not. Sort them as you '
                 'read.',
                 'The sentence candidates most often miss is the one '
                 'saying the review is a fresh marking rather than a '
                 'check of the first. It changes what grounds are worth '
                 'stating, and three questions depend on it.']),
         paras=[
          'An enquiry on results is a fresh marking of the sections you '
          'nominate, carried out by a senior examiner who does not see the '
          'original marks. It is not a check that the first marking was '
          'added up correctly; that is a clerical check and is a separate, '
          'free procedure.',
          'You may nominate one section, several or all four. The fee is '
          'charged once rather than per section, and is refunded in full '
          'if any nominated section changes, so nominating a section you '
          'are doubtful about costs nothing beyond the chance that nothing '
          'changes.',
          'A score may go down. In practice a reduction is rare, and the '
          'published figure is below one per cent of nominated sections, '
          'but the possibility is real and candidates who assume '
          'otherwise are not being told the truth by whoever advised '
          'them.',
          'The grounds you state do not restrict what the reviewer looks '
          'at, since the section is marked again in full. They do affect '
          'the speed of the process, because an enquiry naming the section '
          'and the date is routed immediately and one describing a general '
          'dissatisfaction is referred for clarification first.',
          'Applications must be received within six weeks of the test '
          'date. The deadline is strict and is calculated from the test '
          'date rather than from the date results were issued, which is '
          'typically thirteen days later and is the error that costs '
          'candidates their enquiry.',
          'The outcome is one of three. The score is confirmed, the score '
          'is changed, or the enquiry is upheld in part, meaning that one '
          'nominated section changes and another does not. A revised Test '
          'Report Form is issued in the second and third cases and the '
          'original is withdrawn.'],
         items=[
          ('An enquiry on results is a fresh ____________ of the sections '
           'nominated.', None, 'marking',
           'Paragraph 1, by a senior examiner who does not see the '
           'original marks.'),
          ('A check that the first marking was added up correctly is',
           ['part of the enquiry', 'a separate free procedure', 'not available', 'charged separately'],
           1, 'Paragraph 1 calls it a clerical check.',
           {0: 'Paragraph 1 says it is separate from the enquiry.', 2: 'It is available, and costs nothing.', 3: 'The clerical check carries no charge at all.'}),
          ('The fee is charged',
           ['per section', 'once', 'per outcome', 'only if the score changes'],
           1, 'Paragraph 2, and refunded if any section changes.',
           {0: 'Paragraph 2 says once rather than per section.', 2: 'Outcomes do not affect how often the fee is charged.', 3: 'A change brings a refund, not the charge.'}),
          (
           'What percentage of nominated sections do reductions '
           'affect?', None, 'under one',
           'Paragraph 3, though the possibility is real.'),
          ('From what date is the six-week deadline calculated?', None,
           'the test date',
           'Paragraph 5, not from when results were issued.'),
          ('An enquiry upheld in part means',
           ['the fee is halved', 'one section changes and another does not', 'the result is cancelled', 'a retest is offered'],
           1, 'Paragraph 6, with a revised Test Report Form issued.',
           {0: 'The fee is refunded in full, not halved.', 2: 'The result is revised, never cancelled.', 3: 'No retest is offered under any outcome.'})]),
    dict(heading='Applying for a review of marking',
         kind='Procedure notice', task='Sentence completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Decide first between the two procedures. A clerical check is '
          'free and verifies only that the marks were recorded and '
          'combined correctly; a review of marking is a fresh marking and '
          'carries a fee. Applying for the wrong one wastes the deadline '
          'rather than the money.',
          'Complete the form online using your candidate number, which '
          'appears on the Test Report Form and not on the confirmation '
          'email. Applications submitted with a booking reference in place '
          'of a candidate number are rejected automatically and the '
          'rejection is not notified for eight working days.',
          'State the section and the date, and keep the grounds to two '
          'sentences. The reviewer marks the whole section regardless, so '
          'length adds nothing, and an application naming the section and '
          'the date is routed immediately rather than referred for '
          'clarification.',
          'Pay the fee and keep the receipt reference. The fee is refunded '
          'in full if any nominated section changes, and the refund is '
          'issued to the card used, which must still be valid at the time '
          'of the outcome. Outcomes are issued within three to six weeks '
          'and the original Test Report Form must be returned if a revised '
          'one is issued. Keep a copy of everything you send, because '
          'the centre handling the enquiry is frequently not the centre '
          'that administered the test.'],
         items=[
          ('A ____________ check is free and verifies only that marks '
           'were recorded and combined correctly.', None, 'clerical',
           'Paragraph 1, as against a review of marking.'),
          ('Use your ____________ number, which appears on the Test '
           'Report Form.', None, 'candidate',
           'Paragraph 2: a booking reference is rejected '
           'automatically.'),
          ('Keep the grounds to ____________ sentences.', None, 'two',
           'Paragraph 3, since the whole section is marked again.'),
          ('The fee is refunded in full if any nominated section '
           '____________.', None, 'changes',
           'Paragraph 4, to the card originally used.')])],
   listen=[
    dict(heading='Applying for a review of marking', part='Part 1',
         task='A call to a test centre · note completion', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Test centre, results enquiries. Ambrosine '
           'speaking.'),
          ('Caller', 'I want to appeal my writing score.'),
          ('Officer', 'We do not call it an appeal and the difference '
           'matters. There are two procedures.'),
          ('Caller', 'Go on.'),
          ('Officer', 'A clerical check is free and confirms the marks '
           'were recorded and added correctly. A review of marking is a '
           'fresh marking by a senior examiner and carries a fee.'),
          ('Caller', 'Then the second one. The writing.'),
          ('Officer', 'Any other sections?'),
          ('Caller', 'No, just writing. The others were what I '
           'expected.'),
          ('Officer', 'Fine. Candidate number?'),
          ('Caller', 'Is that the long one on the email?'),
          ('Officer', 'No, and that is the commonest mistake. It is on the '
           'Test Report Form. The email has a booking reference, and an '
           'application with a booking reference is rejected '
           'automatically.'),
          ('Caller', 'Found it. Zero zero four seven one three.'),
          ('Officer', 'Thank you. Test date?'),
          ('Caller', 'The eighteenth of October.'),
          ('Officer', 'You are inside the window, which closes six weeks '
           'from the test date. People count from the results date and '
           'lose a fortnight.'),
          ('Caller', 'What do I write for the grounds?'),
          ('Officer', 'Two sentences. Name the section and the date and '
           'say what you expected. The reviewer marks the whole thing '
           'again whatever you write, so length gains you nothing.'),
          ('Caller', 'And the fee?'),
          ('Officer', 'Refunded in full if any section you nominate '
           'changes.'),
          ('Caller', 'Can it go down?'),
          ('Officer', 'Yes. It is under one per cent and it is not zero, '
           'and I tell everybody because some people are told '
           'otherwise.'),
          ('Caller', 'How long?'),
          ('Officer', 'Three to six weeks. If it changes you send the old '
           'Test Report Form back.'),
          ('Caller', 'And if it does not?'),
          ('Officer', 'You keep what you have and the fee is not '
           'returned. And the confirmed score is final — there is no '
           'second review of the same section.'),
          ('Caller', 'And if I want to send anything with it?'),
          ('Officer', 'There is nowhere to attach it and nobody reads '
           'it. Two sentences on the form is the whole of what the '
           'reviewer sees.'),
          ('Caller', 'Reference?'),
          ('Officer', 'E as in echo, two eight one four.')],
         items=[
          ('Procedure requested: review of ____________', None,
           'marking',
           'Rather than the free clerical check.'),
          ('Section nominated: ____________', None, 'writing',
           'The caller says the others were as expected.'),
          ('Candidate number: ____________', None, '004713',
           'From the Test Report Form, not the email.'),
          ('Deadline: six weeks from the ____________ date', None,
           'test',
           'People lose a fortnight by counting from results day.'),
          ('Grounds: keep to ____________ sentences', None, 'two',
           'Because the whole section is marked again.'),
          ('Reference number: E-____________', None, '2814',
           'Spelled out with the letter at the end of the call.')])],
   speak=dict(
    part='Part 1', focus='Exams you have taken',
    intro=('Two or three sentences each. A specific exam beats a general '
           'comment about exams.'),
    qs=['Have you taken many exams?',
        'Do you find exams stressful?',
        'Is there an exam you remember particularly?',
        'Do exams measure what they are supposed to?'],
    shape=[('answer', 'A driving theory test, three years ago.'),
           ('support', 'I passed it and I could not have driven '
            'anywhere.'),
           ('follow-up', 'Which is not a complaint about the test, since '
            'it never claimed to measure driving.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Requesting a review of a test result',
         prompt=('You believe one section of a test result you received '
                 'does not reflect your performance. Write a letter to the '
                 'test centre. In your letter: say which result you are '
                 'writing about; explain why you are requesting a review; '
                 'say what you would like to happen. Write at least 150 '
                 'words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about my result for the test taken on 18 October, '
          'candidate number 004713, and specifically about the writing '
          'section.',
          'I am requesting a review of the writing section on the '
          'following grounds. My three other sections were reported at '
          '8.0, 8.5 and 7.5, and the writing section at 5.5. In four '
          'practice tests marked by a qualified teacher over the preceding '
          'two months I was placed between 7.0 and 7.5, and I completed '
          'both tasks within the time, at 174 and 283 words. I appreciate '
          'that a discrepancy of this kind is not itself evidence of a '
          'marking error and that it is the reason I am asking for a fresh '
          'marking rather than asserting one.',
          'I understand that the review is a fresh marking rather than a '
          'check of the original, that the fee is refunded if the section '
          'changes, and that the score may be confirmed or reduced.',
          'I would ask for the review to be carried out and for '
          'confirmation of the expected date of the outcome. I enclose '
          'the fee and my Test Report Form.',
          'Yours faithfully,',
          'Perpetua Vasconcelos-Idrissi'],
         notes=[
          'The grounds are specific and quantified — four section scores, '
          'four practice results, two word counts — and the paragraph '
          'then concedes that none of it establishes an error. Conceding '
          'the limit of your own evidence is what makes the request read '
          'as serious.',
          'The fourth paragraph shows the writer has read the procedure: '
          'fresh marking, conditional refund, possible reduction. A reader '
          'who sees that spends no time explaining the basics and treats '
          'the rest of the letter accordingly.',
          'The request is narrow: do the review, and tell me when. '
          'Letters of this kind are weakened by asking for an explanation '
          'of the original mark, which nobody is able to give and which '
          'invites a refusal.'],
         criterion=[('Quantified grounds, then their limit conceded',
                     'Task Response'),
                    ('Showing the procedure has been read',
                     'Task Achievement'),
                    ('A request nobody has a reason to refuse',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Request citing procedure and specific grounds',
    explain=('A request is strongest when it quantifies its grounds, '
             'concedes what they do not prove, and shows that the '
             'procedure has been read. These patterns do all three.'),
    examples=['I am requesting a review of the writing section on the '
              'following grounds.',
              'I appreciate that a discrepancy is not itself evidence of '
              'a marking error.',
              'I understand that the score may be confirmed or '
              'reduced.',
              'I would ask for confirmation of the expected date of the '
              'outcome.'],
    task='Rewrite each demand as a request with grounds and a '
         'concession.',
    items=[('My writing score is wrong.',
            'I am requesting a review of the writing section, which was '
            'reported three bands below my other sections.'),
           ('You marked it badly.',
            'I appreciate that the discrepancy is not itself evidence of a '
            'marking error, which is why I am asking for a fresh '
            'marking.'),
           ('Tell me why I got 5.5.',
            'I would ask for the review to be carried out and for the date '
            'of the outcome to be confirmed.'),
           ('I want my money back.',
            'I understand that the fee is refunded in full if any '
            'nominated section changes.'),
           ('This had better not go down.',
            'I understand that the score may be confirmed or reduced and I '
            'am content to proceed on that basis.')]),
   vocab=[('review of marking', 'a fresh marking by a senior examiner'),
          ('clerical check', 'a check that marks were recorded '
           'correctly'),
          ('enquiry outcome', 'the result of a review of marking'),
          ('nominate', 'to name a section for review'),
          ('upheld in part', 'one section changed and another not'),
          ('Test Report Form', 'the document reporting a result'),
          ('refunded', 'returned to the payer'),
          ('strict deadline', 'one that cannot be extended')],
   expr=[('I am requesting a review of the writing section on the '
          'following grounds', 'the central sentence of the request'),
         ('I appreciate that a discrepancy is not itself evidence of a '
          'marking error', 'concedes the limit of the evidence'),
         ('I understand that the score may be confirmed or reduced',
          'shows the procedure has been read'),
         ('it is under one per cent and it is not zero',
          'states a small risk honestly')],
   trans=['furthermore', 'in this connection', 'specifically',
          'I would ask for'],
  ),

  dict(
   sub='Preparing and what it does',
   step=4,
   read=[
    dict(heading='Four candidates on how they prepared',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Benedetta: I did forty practice tests and my score went up '
          'two bands. I also could not have a conversation at the end of '
          'it that I could not have had at the beginning, and I know that '
          'because I tried, on a train, with somebody patient. What went '
          'up was my speed at a particular kind of question.',
          'B  Oluwaseun: I read two newspapers a day for a year and did '
          'four practice tests in the last fortnight. My reading went from '
          '6.0 to 8.0 and my speaking went up a band without my doing '
          'anything about speaking at all, which I did not expect and '
          'still do not entirely understand.',
          'C  Thandeka, who teaches: The honest version is that both work '
          'and they do different things. Practice removes the penalty for '
          'not knowing the format, which is real and is worth about half a '
          'band. Reading widely raises the thing being sampled. Students '
          'want to hear that one of these is a trick and neither is.',
          'D  Rhodri: I was coached intensively for six weeks and scored '
          '7.0, and I failed the first year of my degree. The test did not '
          'lie to the university; I had been taught to produce four '
          'paragraphs on demand and nothing else, and that is what the '
          'test sampled and what it reported.'],
         items=[
          (
           'Which candidate tested their improvement outside the exam '
           'format?',
           ['Benedetta', 'Oluwaseun', 'Thandeka', 'Rhodri'], 0,
           'On a train, with somebody patient.',
           {1: 'Oluwaseun improved in a section they had not worked '
               'on.', 2: 'Thandeka says format practice is worth about half a '
               'band.', 3: 'Rhodri says the test reported accurately what he had '
               'been taught.'}),
          (
           'Which candidate improved in a section they had not worked '
           'on?',
           ['Benedetta', 'Oluwaseun', 'Thandeka', 'Rhodri'], 1,
           'Speaking rose without being practised.',
           {0: 'Benedetta tested their improvement outside the exam '
               'format.', 2: 'Thandeka says format practice is worth about half a '
               'band.', 3: 'Rhodri says the test reported accurately what he had '
               'been taught.'}),
          (
           'Which candidate says format practice is worth about half a '
           'band?',
           ['Benedetta', 'Oluwaseun', 'Thandeka', 'Rhodri'], 2,
           'By removing the penalty for not knowing the format.',
           {0: 'Benedetta tested their improvement outside the exam '
               'format.', 1: 'Oluwaseun improved in a section they had not worked '
               'on.', 3: 'Rhodri says the test reported accurately what he had '
               'been taught.'}),
          (
           'Which candidate says the test reported accurately what he '
           'had been taught?',
           ['Benedetta', 'Oluwaseun', 'Thandeka', 'Rhodri'], 3,
           'Four paragraphs on demand and nothing else.',
           {0: 'Benedetta tested their improvement outside the exam '
               'format.', 1: 'Oluwaseun improved in a section they had not worked '
               'on.', 2: 'Thandeka says format practice is worth about half a '
               'band.'}),
          ('Benedetta believes her practice was worthless.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says it raised her speed at a particular kind of '
           'question.',
           {0: 'Yes would need worthlessness; she says it raised her '
               'speed on one kind of question.', 2: 'Not Given is wrong because she says what it did.'}),
          ('Thandeka believes one of the two approaches is a trick.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says students want to hear that and neither is.',
           {0: 'Yes would need a trick; she says neither is.', 2: 'Not Given is wrong because she rates both.'})])],
   listen=[
    dict(heading='A short talk: preparing and what it does', part='Part 2',
         task='A talk to a class beginning a course · sentence completion and multiple choice', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'I am going to tell you what practice tests do and '
           'what they do not, because the version you have been told is '
           'usually one of two slogans and both are wrong.'),
          ('Speaker', 'What they do: they remove the penalty for not '
           'knowing the format. That penalty is real. A candidate meeting '
           'matching headings for the first time under a clock loses marks '
           'to the format rather than to their English, and the published '
           'estimates put it at around half a band. Four or five papers '
           'collect almost all of that.'),
          ('Speaker', 'What they do not: they do not move the thing the '
           'test is sampling. Your fortieth practice paper raises your '
           'speed at a particular task and does not raise your English, '
           'and the clearest sign is that the gain stops showing up '
           'anywhere outside the exam room.'),
          ('Speaker', 'And there is a phenomenon worth knowing by name, '
           'which is washback: the effect a test has on the teaching done '
           'for it. Washback is not automatically bad. A test that samples '
           'reading at length creates teaching that makes people read at '
           'length, and that is a test improving instruction.'),
          ('Speaker', 'It goes wrong when what is sampled is narrower than '
           'what is claimed. Then the teaching narrows to the sample, '
           'scores rise, the ability does not, and everybody involved can '
           'point at a number that says otherwise.'),
          ('Speaker', 'So the rule for this course, and you will hear it '
           'from me for ten weeks: learn the thing the test is sampling '
           'and the score follows. The reverse does not. Four papers for '
           'the format, and the rest of your hours on the language, and if '
           'I ever have you doing a fortieth paper you should ask me '
           'why.'),
          ('Speaker', 'And if a school down the road promises you twenty '
           'papers and a guaranteed band, they are selling you the thing '
           'that stops working after the fifth one.')],
         items=[
          (
           'The penalty for not knowing the format is estimated at '
           'about half a ____________.', None, 'band',
           'Collected by four or five papers.'),
          (
           'The clearest sign that practice has not raised ability is '
           'that the gain',
           ['fades', 'does not show up outside the exam room', 'varies by section', 'cannot be measured'],
           1, 'As against a rise in the thing being sampled.',
           {0: 'Fading is not the sign he names.', 2: 'Variation by section is not the evidence he gives.', 3: 'The gain is measurable; it simply does not transfer.'}),
          ('Washback is not ____________ bad.', None, 'automatically',
           'A test sampling reading at length improves teaching.'),
          (
           'Washback goes wrong when what is sampled is ____________ '
           'than what is claimed.', None, 'narrower',
           'So teaching narrows to the sample.')]),
    dict(heading='Two teachers disagree about test preparation',
         part='Part 3',
         task='A discussion between two teachers · note completion and multiple choice', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Thandeka', 'You want to cut the practice papers from eight to '
           'four and the students will revolt.'),
          ('Ignatius', 'They will, and that is the most honest argument '
           'against me, so let me put it first. Students believe papers '
           'are the course. Cut them and we lose people to the school '
           'across the road that does twenty.'),
          ('Thandeka', 'So you are arguing against your own proposal.'),
          ('Ignatius', 'I am stating its cost. The case for it is that '
           'papers five to eight add nothing we can measure. Our own '
           'records show the gain flattening after the fourth.'),
          ('Thandeka', 'Our records show the measured gain flattening. '
           'That is not the same thing.'),
          ('Ignatius', 'Say more.'),
          ('Thandeka', 'What we measure is performance on our own practice '
           'papers. If papers five to eight are building stamina for a '
           'two-and-a-half-hour reading paper, our measure would not see '
           'it, because we mark them in sections on different '
           'afternoons.'),
          ('Ignatius', 'That is a real gap and I had not thought of it. It '
           'is also testable.'),
          ('Thandeka', 'Easily. Give half the class the whole paper in one '
           'sitting and compare the last passage.'),
          ('Ignatius', 'Then let me put the other half of my case, which '
           'your point does not touch. The hours have to come from '
           'somewhere. Four papers is sixteen hours. Those sixteen hours '
           'spent reading at length raise the thing the test is sampling, '
           'and the papers raise performance on the papers.'),
          ('Thandeka', 'That I accept, and I would accept it for papers '
           'six to eight. Not for five.'),
          ('Ignatius', 'Why five in particular?'),
          ('Thandeka', 'Because a candidate who has done four has met each '
           'question type once. The fifth is where they meet an unusual '
           'combination, and the combinations are what panics people in '
           'the room.'),
          ('Ignatius', 'So five, and the other three hours go to '
           'reading.'),
          ('Thandeka', 'And we run your stamina test this term, because if '
           'I am right about stamina you should go back to eight and if I '
           'am wrong I would like to know.'),
          ('Ignatius', 'Agreed, with one condition. We tell the students '
           'what we are doing and why, in the first week, before anybody '
           'has paid us anything.'),
          ('Thandeka', 'That is the part the school across the road '
           'cannot copy, and it is the only competitive advantage we have '
           'that does not cost money.')],
         items=[
          (
           'The strongest argument against his own proposal is that '
           'students believe papers are the ____________.',
           None, 'course',
           'So the school may lose them to a competitor.'),
          (
           'Thandeka objects that their records show the flattening of '
           'the ____________ gain.', None, 'measured',
           'Which she says is not the same thing.'),
          (
           'The gain she thinks they cannot see is ____________ for a '
           'long paper.', None, 'stamina',
           'Because papers are marked in sections on different '
           'afternoons.'),
          (
           'The half of Ignatius\u2019s case her objection does not touch '
           'is that',
           ['students will leave', 'the hours have to come from somewhere', 'papers are expensive', 'marking takes time'],
           1, 'Sixteen hours spent on reading at length.',
           {0: 'Students leaving is his own stated cost, not this '
               'half.', 2: 'Expense of papers is not the argument he makes.', 3: 'Marking time is not part of his case.'}),
          (
           'She argues for keeping paper five because it is where '
           'candidates meet an unusual ____________ of question types.',
           None, 'combination',
           'And combinations are what panics people.'),
          ('Their agreement includes running a test of ____________.',
           None, 'stamina', 'With the whole paper in one sitting.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Preparing',
    longturn=[('The thing I prepared for thoroughly is a driving theory test, '
               'which I passed with full marks and which taught me something I '
               'did not want to know.'),
              ('How I prepared was by working through an application that had '
               'the whole question bank in it, several thousand items, and I '
               'did them in blocks of fifty until my score stopped moving. '
               'That took about three weeks of evenings. Towards the end I was '
               'recognising the questions rather than reading them, and I knew '
               'that was happening.'),
              ('How it went was that the test was easy. I finished in about a '
               'third of the time allowed, and I was confident of every '
               'answer, and the hazard perception section, which I had '
               'practised in the same way, I also passed comfortably.'),
              ('Whether the preparation was the right kind is where I am '
               'uncomfortable, and the evidence is that it was not. I passed a '
               'test about road safety and then, six months later, pulled out '
               'at a junction in a way that could have hurt somebody, in a '
               'situation the question bank covers directly. I had learned the '
               'bank, which is a finite list, and the bank is a sample of a '
               'skill. The test could not tell the difference between somebody '
               'who had learned the sample and somebody who had learned the '
               'skill, because from the outside those two produce the same '
               'paper. What I would want, knowing that, is a test I could not '
               'have revised for in three weeks, and I am aware that almost '
               'nobody taking it would thank me.')],
    intro=('Short answers, then the long turn. The last bullet is where '
           'the band is decided.'),
    cue=('Describe something you prepared for thoroughly.',
         ['what it was', 'how you prepared',
          'how it went',
          'and explain whether the preparation was the right kind']),
    qs=['Do you prepare carefully for things or improvise?',
        'Have you ever over-prepared for something?',
        'Now look at the card. You have one minute to make notes.',
        'Is there a kind of preparation that does not help?'],
    shape=[('answer', 'A language test, about two years ago.'),
           ('support', 'Thirty practice papers and very little '
            'reading.'),
           ('follow-up', 'The score went up two bands.'),
           ('support', 'And I could not hold a conversation any better '
            'than before.'),
           ('follow-up', 'So the preparation worked and it was the wrong '
            'kind, which took me a while to separate.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Does preparing for a test improve the ability?',
         prompt=('Some people say that preparing for a test improves the '
                 'ability the test measures, while others say it only '
                 'improves test performance. To what extent do you agree? '
                 'Write at least 250 words.'),
         model=[
          'The answer depends on which kind of preparation is meant, and '
          'the question is usually asked as though there were only one. '
          'Two activities go under the name, they do different things, and '
          'separating them resolves most of the disagreement.',
          'Format practice improves test performance and not the '
          'underlying ability, and this is a real benefit rather than a '
          'trick. A candidate meeting an unfamiliar question type under a '
          'clock loses marks to the format, and estimates put that penalty '
          'at around half a band. Four or five papers collect almost all '
          'of it, and papers beyond that produce gains that do not appear '
          'anywhere outside the examination room, which is the clearest '
          'available sign that nothing has been added to the ability '
          'itself.',
          'Substantive preparation improves the ability and therefore the '
          'score. A year of reading newspapers raises reading, and it also '
          'raises speaking without any work on speaking, because the thing '
          'being improved is not divided the way the sections are. Gains '
          'of this kind are slower, they transfer outside the test, and '
          'they are what the score is supposed to be reporting.',
          'The point at which I agree with the sceptical position is where '
          'a test samples something narrower than it claims. Then '
          'teaching narrows to the sample, scores rise, the ability does '
          'not, and every party to the arrangement can point at a number '
          'that says otherwise. One candidate coached for six weeks scored '
          '7.0 and failed his first university year, and the test had not '
          'lied: it reported accurately that he could produce four '
          'paragraphs on demand, which was all he had been taught.',
          'My position is therefore that preparation improves the ability '
          'when it is preparation in the ability, which sounds trivial and '
          'is not, because it tells you how to allocate a fixed number of '
          'hours. Spend four papers on the format and the remaining time '
          'on the language. Inverting that ratio raises the score, leaves '
          'the ability where it was, and sends somebody into a university '
          'or a job with a number that overstates them — which harms the '
          'candidate more than anybody else.'],
         notes=[
          'The essay refuses the question’s premise that preparation is '
          'one thing, then answers for each kind. Structure 11 is '
          'strongest when the circumstances that divide the two answers '
          'are named in the first paragraph.',
          'Paragraph 4 concedes the opposing case in its strongest form, '
          'and the concession is made concrete by a single candidate '
          'rather than asserted in the abstract. Note that the test is '
          'defended in the same sentence: it reported accurately what it '
          'sampled.',
          'The conclusion converts the position into a ratio of hours, '
          'which is what makes it useful rather than merely correct, and '
          'the last clause identifies who is actually harmed. Naming the '
          'victim of an error is a band 9 habit.'],
         criterion=[('Refusing the premise that preparation is one thing',
                     'Task Response'),
                    ('A concession made concrete by one case',
                     'Coherence and Cohesion'),
                    ('A position converted into a ratio of hours',
                     'Task Response')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Qualification and scope: only, even, at least',
    explain=('Small words decide how much a sentence claims. Only, even, '
             'at least and merely put a boundary round a claim, and '
             'misplacing them changes what you have said.'),
    examples=['Practice improves only test performance.',
              'Even forty papers do not move the ability.',
              'At least half a band is attributable to the format '
              'alone.',
              'The gain shows up only inside the examination room.'],
    task='Place the scope word so that the sentence says what is '
         'intended.',
    items=[('Practice helps performance.',
            'Practice improves only performance, not the ability the test '
            'reports.'),
           ('Four papers are enough.',
            'Four papers collect almost all of the format penalty; papers '
            'beyond that add only speed.'),
           ('Reading improved his score.',
            'Reading raised his reading score and, without any work on '
            'it, his speaking score as well.'),
           ('Coaching produced a good result.',
            'Coaching produced a score of 7.0, which reported accurately '
            'what had been taught and only that.'),
           ('Washback is bad.',
            'Washback is harmful only where what is sampled is narrower '
            'than what is claimed.')]),
   vocab=[('washback', 'the effect a test has on teaching'),
          ('construct', 'the ability a test intends to measure'),
          ('coaching', 'intensive preparation for a test’s format'),
          ('score gain', 'a rise in score, whatever its cause'),
          ('format penalty', 'marks lost to unfamiliarity with the '
           'paper'),
          ('carry-over', 'a gain showing outside the context trained'),
          ('sample', 'the part of an ability a test actually tests'),
          ('stamina', 'the capacity to sustain performance over '
           'length')],
   expr=[('The score rose; whether the ability did is the whole question',
          'the cycle’s governing sentence'),
         ('the gain stops showing up anywhere outside the exam room',
          'the test for a hollow improvement'),
         ('learn the thing the test is sampling and the score follows',
          'the course’s position in one line'),
         ('the test did not lie to the university',
          'defends a test while conceding the case')],
   trans=['whereas', 'that said', 'the point at which I agree',
          'therefore'],
  ),

  dict(
   sub='What a band score is made of',
   step=5,
   read=[
    dict(heading='Four sections, one number',
         kind='Data article',
         task='Table completion, matching information and multiple choice',
         band='gt_work', qtype='Questions 33-38',
         figure=_TBL, figure2=_BAND,
         paras=[
          'The table reports section scores and an overall band for five '
          'candidates, and the chart sets each candidate’s overall band '
          'beside their weakest section. The two together make a point '
          'that neither makes alone: the overall band is an average, and '
          'an average conceals its own spread.',
          'The arithmetic is simple and is worth stating because it is '
          'widely misunderstood. The four section scores are added, '
          'divided by four, and the result is rounded to the nearest half '
          'band. A candidate with 8.0, 8.5, 5.5 and 7.0 averages 7.25, '
          'which rounds to 7.5.',
          'Candidates A and B are the first thing to notice. Both are '
          'reported at 7.5 overall. A has a range of three bands across '
          'the four sections, from 8.5 in reading to 5.5 in writing; B '
          'varies by half a band, from 7.0 to 7.5. The reported number is '
          'the same and the profiles have almost nothing in common.',
          'Candidates C and D make the same point more sharply because '
          'their strengths are opposite. C is strongest in speaking at 8.5 '
          'and weakest in listening at 6.0; D is strongest in listening at '
          '9.0 and weakest in speaking at 5.5. Both are reported at 7.0.',
          'Candidate E is the only one whose overall band describes every '
          'section, scoring 7.0 in all four. E has the lowest reading '
          'score of the five candidates except C, and would be the safest '
          'of the five to admit to a course requiring 7.0 in each '
          'component.',
          'The chart makes the consequence visible. The gap between the '
          'overall band and the lowest section is 2.0 for A, 1.5 for D, '
          '1.0 for C, 0.5 for B and nothing for E. Four of the five '
          'candidates have a section below their reported band and two are '
          'below it by more than a band.',
          'This is why institutions that care about a specific skill set a '
          'minimum for each component rather than an overall band. A '
          'requirement of 7.0 overall admits A, B, C, D and E; a '
          'requirement of 7.0 overall with at least 6.5 in every component '
          'admits B and E only.',
          'None of this is a criticism of the reported band, which is '
          'computed exactly as published and is useful for what it is. The '
          'criticism attaches to a use: reading an average as a '
          'description of a profile, when its whole function is to '
          'compress one.'],
         items=[
          ('Candidate A’s four sections average ____________ before '
           'rounding.', None, '7.25',
           'Paragraph 2: 8.0, 8.5, 5.5 and 7.0.'),
          (
           'Which paragraph identifies the only candidate whose band '
           'describes every section?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2, 'Candidate E, at 7.0 in all four.',
           {0: 'Paragraph 3 compares candidates A and B.', 1: 'Paragraph 4 compares candidates C and D.', 3: 'Paragraph 6 gives the gap between overall band and '
               'lowest section for each candidate.'}),
          (
           'Which paragraph gives the gap between overall band and '
           'lowest section for each candidate?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           1, '2.0, 1.5, 1.0, 0.5 and nothing.',
           {0: 'Paragraph 5 identifies the only candidate whose band '
               'describes every section.', 2: 'Paragraph 7 gives the admissions consequence.', 3: 'Paragraph 8 states what the criticism attaches to.'}),
          ('Candidate D’s weakest section is ____________.', None,
           'speaking',
           'At 5.5, against 9.0 in listening.'),
          ('A requirement of 7.0 overall with at least 6.5 in every '
           'component admits ____________ candidates.', None, 'two',
           'Paragraph 7: candidates B and E only, out of the five.'),
          ('The criticism in the final paragraph attaches to',
           ['the arithmetic', 'a use of the average', 'the rounding rule', 'the section scores'],
           1, 'Reading an average as a description of a profile.',
           {0: 'The arithmetic is computed exactly as published.', 2: 'The rounding rule is part of the published method.', 3: 'Section scores are what the paragraph says to read.'})])],
   listen=[
    dict(heading='An assessment specialist on reporting scores',
         part='Part 4',
         task='A lecture on score reporting · multiple choice, table completion and short answer', band='l4',
         qtype='Questions 39-44',
         figure=_TBL,
         script=[
          ('Specialist', 'Two candidates share an overall band and nothing '
           'else. That is the sentence I want from this hour, and the '
           'table in front of you is five candidates arranged to '
           'demonstrate it.'),
          ('Specialist', 'The arithmetic first, because people get this '
           'wrong. Four sections, added, divided by four, rounded to the '
           'nearest half band. A on eight, eight and a half, five and a '
           'half and seven averages seven point two five and is reported '
           'as seven and a half.'),
          ('Specialist', 'Now compare A with B. Both reported at seven and '
           'a half. A spans three whole bands, eight and a half in reading '
           'down to five and a half in writing. B spans half a band. Same '
           'number, nothing else in common.'),
          ('Specialist', 'C and D are the pair I use when somebody is not '
           'convinced. Both at seven. C is strongest in speaking and '
           'weakest in listening; D is the exact reverse, nine in '
           'listening and five and a half in speaking. If you are '
           'admitting someone to a lecture course those two are not '
           'interchangeable and the number says they are.'),
          ('Specialist', 'E is the only candidate whose band describes '
           'every section. Seven across the board. E will never be the '
           'most impressive applicant in the pile and is the one I would '
           'bet on.'),
          ('Specialist', 'So the consequence. Four of these five have a '
           'section below their reported band. Two are more than a band '
           'below. Seven overall admits all five; seven overall with six '
           'and a half minimum in each component admits two.'),
          ('Specialist', 'Which is why any institution that actually cares '
           'about one skill should set a component minimum, and most of '
           'them do not, and the reason is that an overall band is one '
           'number and easier to put in a prospectus.'),
          ('Specialist', 'I want to be careful about what I am criticising. '
           'The band is computed exactly as published and it is not '
           'misleading. The misuse is reading an average as a description '
           'of a profile when its entire job is to compress one, and an '
           'average cannot both compress and describe.'),
          ('Specialist', 'And for those of you who will sit this test: '
           'your weakest section is the one that decides where you can go, '
           'whatever your average says, so it is where the next hundred '
           'hours belong.'),
          ('Specialist', 'And if you are reading somebody else’s score, ask '
           'for the four sections before you ask for anything else. Almost '
           'every institution has them and almost none of them looks.')],
         items=[
          ('Candidate A is reported at', ['7.0', '7.25', '7.5', '8.0'],
           2, 'From an average of 7.25, rounded.',
           {0: '7.0 is where C and D are reported.', 1: '7.25 is the unrounded average.', 3: '8.0 is one of A\u2019s section scores, not the band.'}),
          ('Candidate A\u2019s sections span ____________ bands.',
           None, 'three', 'From 8.5 in reading to 5.5 in writing.'),
          (
           'C and D are both reported at 7.0 and their strengths are '
           'the exact ____________ of each other.', None,
           'reverse',
           'Strongest in speaking against strongest in listening.'),
          ('The candidate he says he would bet on is',
           ['A', 'B', 'D', 'E'], 3,
           'The only one whose band describes every section.',
           {0: 'A spans three bands, which is why he does not.', 1: 'B is close behind but not the one he names.', 2: 'D is five and a half in speaking.'}),
          (
           'A requirement of 7.0 overall with a 6.5 component minimum '
           'admits how many of the five?', None, 'two',
           'Against all five on overall band alone.'),
          ('His criticism is directed at',
           ['the arithmetic', 'reading an average as a description of a profile', 'the section scores', 'the rounding rule'],
           1, 'Because an average cannot both compress and describe.',
           {0: 'The arithmetic is computed exactly as published.', 2: 'Section scores are what he asks people to read.', 3: 'The rounding rule is part of the published method.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Reporting an ability as a number',
    intro=('Start with the card. Notes for a minute, then talk, developing '
           'each bullet instead of adding bullets of your own. The '
           'discussion follows: five or six sentences. Try once to say '
           'what an average cannot do.'),
    cue=('Describe a test or an examination you have taken.',
         ['what it was for',
          'how you prepared for it',
          'what the result was',
          'and explain how well it reflected your ability']),
    qs=['Now look at the card. You have one minute to make notes.',
        'What did it fail to measure?',
        'Would you take it again?',
        'Is it useful to report an ability as a single number?',
        'What is lost when several measures are combined?',
        'Should institutions look at the parts or the whole?',
        'Would you trust a single score about yourself?'],
    shape=[('answer', 'Useful and incomplete, and the incompleteness is '
            'predictable.'),
           ('support', 'Two candidates can share a band and agree on '
            'nothing else.'),
           ('follow-up', 'One was three bands apart across her sections '
            'and the other half a band.'),
           ('support', 'An average exists to compress a profile.'),
           ('follow-up', 'So it cannot also describe one, and reading it '
            'as a description is the mistake.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Section scores and overall band for five candidates',
         prompt=('The table and chart below show section scores and '
                 'overall bands for five candidates in a language test. '
                 'Summarise the information by selecting and reporting the '
                 'main features, and make comparisons where relevant. '
                 'Write at least 150 words.'),
         figure=_TBL, figure2=_BAND,
         model=[
          'The table gives four section scores and an overall band for '
          'five candidates, and the chart sets each overall band against '
          'that candidate’s weakest section. Overall, candidates with the '
          'same reported band differ widely in profile, and four of the '
          'five have at least one section below the band they are '
          'reported at.',
          'Two candidates are reported at 7.5 and two at 7.0, with the '
          'fifth also at 7.0. The similarity ends there. Candidate A '
          'ranges across three bands, from 8.5 in reading to 5.5 in '
          'writing, while candidate B, reported identically, ranges only '
          'from 7.0 to 7.5.',
          'The same contrast appears at 7.0, where candidates C and D have '
          'opposite profiles: C scores highest in speaking at 8.5 and '
          'lowest in listening at 6.0, and D scores highest in listening '
          'at 9.0 and lowest in speaking at 5.5.',
          'The chart shows the consequence. The gap between overall band '
          'and weakest section is widest for A at 2.0 bands and for D at '
          '1.5, narrower for C at 1.0 and B at 0.5, and absent only for '
          'candidate E, who scores 7.0 in every section and is the one '
          'candidate whose reported band describes the whole profile.'],
         notes=[
          'The Overall statement makes a claim the data support and the '
          'chart alone does not: candidates with the same band differ '
          'widely, and most sit below their own band somewhere. A hybrid '
          'task is asking you to say something that needs both sources.',
          'The body is organised by the comparison rather than by the '
          'figure. Taking A against B, then C against D, then E as the '
          'exception, is 2D organisation: it would be much weaker to '
          'describe the table and then the chart.',
          'Every number quoted does work in a comparison. There is no '
          'paragraph listing candidate scores in turn, which is the '
          'commonest way a table task falls to band 6 — accurate, '
          'complete and selecting nothing.'],
         criterion=[('An Overall statement that needs both sources',
                     'Task Achievement'),
                    ('Organised by comparison, not by figure',
                     'Coherence and Cohesion'),
                    ('No paragraph that merely lists', 'Task '
                     'Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='The arithmetic of an average, described honestly',
    fix=dict(
     text=('The reported score is an average of four components, each of which '
           'is marked separately. An average of four marks conceal the spread '
           'behind it: a candidate with 9, 9, 5 and 5 reports the same overall '
           'score than a candidate with 7 in every component. The standard '
           'error of the overall score is about half a band, which few '
           'certificates state.'),
     faults=[('An average of four marks conceal the spread',
              'An average of four marks conceals the spread',
              ('The subject is an average, which is singular, so the verb is '
               'conceals.')),
             ('reports the same overall score than a candidate with 7',
              'reports the same overall score as a candidate with 7',
              'The same takes as, not than.'),
             ('which few certificates state',
              'a figure few certificates state',
              ('Which has no antecedent to attach to, so the sentence has to '
               'be rebuilt around the noun.'))]),
    explain=('Writing about an average requires saying what it is '
             'computed from and what it therefore cannot show. These '
             'patterns do both without editorialising.'),
    examples=['The overall band is the mean of four sections, rounded to '
              'the nearest half.',
              'Two candidates share an overall band and nothing else.',
              'The gap between the band and the weakest section is 2.0 for '
              'candidate A.',
              'An average cannot both compress a profile and describe '
              'one.'],
    task='Rewrite each sentence so that the average’s limits are '
         'explicit.',
    items=[('Candidate A scored 7.5.',
            'Candidate A is reported at 7.5, an average of sections '
            'ranging from 5.5 to 8.5.'),
           ('A and B are equally able.',
            'A and B are reported at the same band and differ by two and a '
            'half bands in their weakest section.'),
           ('The average was 7.25.',
            'The four sections averaged 7.25, which is reported as 7.5 '
            'after rounding to the nearest half band.'),
           ('Candidate E is unremarkable.',
            'Candidate E scores 7.0 in every section and is the only '
            'candidate whose reported band describes the whole '
            'profile.'),
           ('The band is misleading.',
            'The band is computed as published; what misleads is reading '
            'an average as a description of a profile.')]),
   vocab=[('band', 'a reported score on the test’s scale'),
          ('rounding', 'adjusting to the nearest reporting point'),
          ('standard error', 'the expected spread of a measured score'),
          ('component minimum', 'a required score in each section'),
          ('profile', 'the pattern of scores across sections'),
          ('range of sections', 'the distance between a candidate\u2019s highest '
           'and lowest'),
          ('averaging', 'reducing several values to one'),
          ('weakest section', 'the lowest of a candidate’s scores')],
   expr=[('Two candidates share an overall band and nothing else',
          'the cycle’s governing sentence'),
         ('an average cannot both compress and describe',
          'states the limit in six words'),
         ('your weakest section is the one that decides where you can '
          'go', 'the practical consequence'),
         ('the band is computed exactly as published',
          'defends the figure while criticising a use')],
   trans=['while', 'by contrast', 'taken together',
          'the same contrast appears'],
  ),

  dict(
   sub='How a test is validated',
   step=5,
   read=[
    dict(heading='Construct, evidence and the claim a score makes',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'A test is not valid or invalid. This sounds like a quibble and '
          'is the single most consequential idea in the field: validity is '
          'a property of an inference drawn from a score, not of the '
          'instrument that produced it, and the same test can support one '
          'conclusion well and another not at all. Nothing in this '
          'paragraph is controversial among people who build tests, and '
          'almost nothing in it has reached the institutions that use '
          'them.',
          'The reason is that a test samples. No instrument measures '
          '"English"; one measures performance on four tasks in two hours '
          'and nine minutes, and the score is a claim that performance on '
          'that sample stands in for something larger. The thing it is meant '
          'to proxy for has a name, the construct, and naming it is the '
          'first step in any validation. A test whose construct has never '
          'been written down cannot be validated at all, because there is '
          'nothing for the evidence to be evidence about.',
          'Once the construct is named, evidence can be gathered about '
          'whether the sample represents it. That evidence takes several '
          'forms, each answering a distinct objection, and a validation '
          'argument is built by assembling them rather than by any single '
          'decisive study. This is unlike the structure of argument in much '
          'of science, where one well-designed experiment can settle a '
          'question, and the difference is a frequent source of '
          'misunderstanding when test evidence is reported.',
          'Content evidence asks whether the tasks cover the construct. If '
          'the construct is academic reading and the test contains no '
          'passage longer than four hundred words, the sample '
          'underrepresents what it claims, and the gap has a name: '
          'construct underrepresentation. The name matters because the '
          'failure is invisible from inside the test: every item can be '
          'well written, every mark can be correct, and the sample can '
          'still be smaller than the claim attached to it.',
          'The opposite failure is contamination. If a reading test requires '
          'knowledge of cricket, a candidate who reads well and has never '
          'encountered the game scores low for a reason that has nothing to '
          'do with the construct, and the test is measuring something it did '
          'not intend to. Contamination of this kind is much easier to '
          'detect than underrepresentation, because it demonstrates up as a '
          'group of candidates performing oddly, and it is therefore the '
          'failure that actually gets fixed.',
          'Predictive evidence asks whether scores relate to the outcomes '
          'the score is employed to decide. If a score is employed to admit '
          'students, the question is whether it predicts how they cope, and '
          'the honest answer across the literature is that it does so '
          'moderately: correlations in the region of 0.3 to 0.5 with '
          'first-year outcomes are typical, and the figure has been stable '
          'across several decades and many institutions.',
          'That figure is ordinarily reported as disappointing and is better '
          'read as informative. A correlation of 0.4 means the score carries '
          'real information and nothing like enough to determine an '
          'individual decision, which is exactly what you would expect of a '
          'two-hour sample of one of the many things that determine whether '
          'somebody copes with a degree. The others include preparation in '
          'the subject, money, health, isolation and whether anybody notices '
          'when a student stops attending.',
          'Reliability evidence asks whether the same candidate would get '
          'the same score twice. Here the relevant figure is the standard '
          'error of measurement, which for most sections of a well-run test '
          'is in the region of a third of a band, meaning that a reported '
          '6.5 is consistent with a true score somewhere between '
          'approximately 6.0 and 7.0. This figure is published, is not '
          'disputed by anybody, and is absent from every admissions page I '
          'have read.',
          'This has a consequence institutions almost universally ignore. '
          'A requirement of 7.0 rejects a candidate reported at 6.5 whose '
          'true score may well be 7.0, and the difference between the two '
          'candidates either side of such a cut is frequently smaller than '
          'the error of the instrument that separated them. The remedy '
          'is not to abolish the requirement but to treat a band either '
          'side of it as a region in which other evidence should '
          'decide.',
          'Consequential evidence, the newest and most contested kind, '
          'asks what the existence of the test does. A test used for '
          'admission changes what is taught, which is washback, and a '
          'validation argument that ignores this evaluates the instrument '
          'while leaving out its largest effect on the world. Whether '
          'this counts as part of validity at all is argued about '
          'annually and with some heat.',
          'Assembling these forms of evidence produces an argument rather '
          'than a verdict, and the argument is invariably about a specific '
          'use. The same score may support an inference about whether a '
          'candidate can follow lectures and support no inference at all '
          'about whether they can write a dissertation, and a test developer '
          'can only tell you which employs the evidence covers.',
          'For a candidate rather than a researcher, this has one usable '
          'consequence. When somebody tells you what your score means, ask '
          'what inference they are drawing and what evidence exists for that '
          'specific inference. Most claims made about test scores, including '
          'flattering ones, turn out to rest on evidence for a distinct '
          'claim wholly.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Validity as a property of inferences', 'Why a test samples, and the construct', 'Content evidence', 'Reliability and its consequence'],
           1, 'Four tasks standing in for something larger.',
           {0: 'Validity as a property of inferences is paragraph 1.', 2: 'Content evidence is paragraph 4.', 3: 'Reliability and its consequence are paragraphs 8 and '
               '9.'}),
          ('Choose the best heading for paragraph 7.',
           ['Predictive evidence', 'How to read a correlation of 0.4', 'Reliability evidence', 'Consequential evidence'],
           1,
           'Real information, and nothing like enough for an '
           'individual decision.',
           {0: 'Predictive evidence is paragraph 6.', 2: 'Reliability evidence is paragraph 8.', 3: 'Consequential evidence is paragraph 10.'}),
          ('Choose the best heading for paragraph 9.',
           ['Content evidence', 'Predictive evidence', 'What the error of measurement means for a cut-off', 'Washback'],
           2,
           'A 7.0 requirement rejecting a candidate reported at 6.5.',
           {0: 'Content evidence is paragraph 4.', 1: 'Predictive evidence is paragraph 6.', 3: 'Washback is paragraph 10.'}),
          (
           'The writer believes a test can be described as valid in '
           'itself.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1: validity is a property of an inference.',
           {0: 'Yes would need validity in the test; paragraph 1 puts '
               'it in the inference.', 2: 'Not Given is wrong because validity is defined.'}),
          (
           'The writer believes a correlation of 0.4 shows the test to '
           'be worthless.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 calls it informative rather than '
           'disappointing.',
           {0: 'Yes would need worthlessness; paragraph 7 calls the '
               'figure informative.', 2: 'Not Given is wrong because the correlation is '
               'interpreted.'}),
          ('The ability a test intends to measure is called the '
           '____________.', None, 'construct',
           'Paragraph 2, named as the first step in validation.'),
          ('A test containing no long passages while claiming to measure '
           'academic reading shows construct ____________.', None,
           'underrepresentation',
           'Paragraph 4, where the sample is narrower than the '
           'claim.'),
          ('For most sections of a well-run test the standard error of '
           'measurement is about a ____________ of a band.', None,
           'third',
           'Paragraph 8, so a reported 6.5 spans about 6.0 to 7.0.')])],
   listen=[
    dict(heading='A lecture on validity', part='Part 4',
         task='A lecture on test validation · sentence completion and multiple choice', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'A test is not valid; the inference drawn from it '
           'is, or is not. Everything in this lecture follows from that '
           'sentence, and if you came in thinking validity was a property '
           'of a paper, this is the hour where that goes.'),
          ('Lecturer', 'Why? Because a test samples. Nothing measures '
           'English. Something measures performance on four tasks in two '
           'hours and nine minutes, and the score claims that sample '
           'stands in for something bigger. The bigger thing is the '
           'construct, and you name it before you gather a single piece '
           'of evidence.'),
          ('Lecturer', 'Content evidence: do the tasks cover the '
           'construct? Claim academic reading, include nothing over four '
           'hundred words, and you have construct underrepresentation. '
           'The opposite is contamination — a reading test that needs '
           'knowledge of cricket measures something it did not '
           'intend.'),
          ('Lecturer', 'Predictive evidence: do scores relate to the '
           'outcomes we use them to decide? For admission, the honest '
           'figure across the literature is a correlation of about nought '
           'point three to nought point five with first-year '
           'outcomes.'),
          ('Lecturer', 'Everybody reports that as disappointing and it is '
           'informative. Nought point four means real information and not '
           'nearly enough to decide an individual case. Which is what you '
           'would expect from a two-hour sample of one of the many things '
           'that determine whether somebody copes with a degree.'),
          ('Lecturer', 'Reliability: would the same candidate score the '
           'same twice? The standard error of measurement for most '
           'sections is about a third of a band. So a reported six and a '
           'half is consistent with a true score between roughly six and '
           'seven.'),
          ('Lecturer', 'Sit with that, because institutions do not. A '
           'seven point nought requirement rejects a candidate at six '
           'point five whose true score may be seven, and the two '
           'candidates either side of that line often differ by less than '
           'the error of the thing that separated them.'),
          ('Lecturer', 'Consequential evidence, newest and most argued '
           'over: what does having the test do? It changes teaching. '
           'Leave washback out of your validation and you have evaluated '
           'the instrument and omitted its largest effect on the '
           'world.'),
          ('Lecturer', 'So you end with an argument, not a verdict, and '
           'always about a named use. The same score can support an '
           'inference about following lectures and support nothing at all '
           'about writing a dissertation. Ask, every time: which '
           'inference, and what evidence for that one.'),
          ('Lecturer', 'Nobody will mind being asked, and in my experience '
           'the people who commission tests cannot answer it, which is '
           'itself the most useful thing the question does.')],
         items=[
          (
           'What a test measures is performance on four tasks in two '
           'hours and ____________ minutes.', None, 'nine',
           'Standing in for something bigger.'),
          (
           'Claiming academic reading while including nothing over '
           'four hundred words is construct ____________.',
           None, 'underrepresentation',
           'As against the opposite failure.'),
          ('The typical correlation with first-year outcomes is',
           ['0.1 to 0.2', '0.3 to 0.5', '0.6 to 0.7', 'above 0.8'], 1,
           'Which he calls informative rather than disappointing.',
           {0: '0.1 to 0.2 is lower than the literature reports.', 2: '0.6 to 0.7 is higher than any stable figure.', 3: 'Above 0.8 would determine individual decisions.'}),
          (
           'The standard error of measurement for most sections is '
           'about a ____________ of a band.', None, 'third',
           'So a reported 6.5 spans roughly 6.0 to 7.0.'),
          (
           'Candidates either side of a cut-off, he says, often differ '
           'by',
           ['a full band', 'less than the error of the instrument', 'more than a band', 'nothing measurable'],
           1, 'Which institutions do not sit with.',
           {0: 'A full band is larger than the usual difference.', 2: 'More than a band is not what he claims.', 3: 'The difference is measurable, just small.'}),
          (
           'Leaving washback out of a validation omits the test\u2019s '
           'largest ____________ on the world.', None,
           'effect',
           'Which he calls the newest and most argued-over kind of '
           'evidence.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='What a score entitles you to say',
    followup=[(('You say you learned the bank, not the skill. What can a test '
                'score tell an employer?'),
               ('That the candidate could do certain things on one day, within '
                'a margin the employer is rarely told. For broad screening '
                'that is genuinely useful; as a fine ranking between two '
                'applicants two points apart it is noise presented as '
                'information.')),
              ('Should a single score decide an application?',
               ('Not alone, and the alternatives are worse than their '
                'advocates admit. Interviews predict performance badly and '
                'discriminate reliably. So I would use the score as a '
                'threshold rather than a ranking, and put the effort into the '
                'second stage.')),
              ('How much error should we expect in a measurement like this?',
               ('Enough to matter at the margin, and it is publishable: most '
                'large tests report a standard error, and for the one I took '
                'it is wide enough that half a band is not a real difference. '
                'The error is known and almost never printed on the '
                'certificate.')),
              ('Who should decide what a score means?',
               ('Not the test owner alone, because it has an interest in the '
                'score being treated as more precise than it is, and not the '
                'employer, who wants a single cut-off. The useful arrangement '
                'is a published standard with the error attached, and a '
                'regulator able to object when a user over-reads it.'))],
    intro=('The long turn first. A minute of notes, then one to two '
           'minutes, and the examiner closes it with a short question or '
           'two. Then the discussion: five or six sentences. Try once to '
           'say that validity belongs to an inference.'),
    cue=('Describe a time a number decided something for you.',
         ['what the number was',
          'who used it',
          'what was decided',
          'and explain whether you accepted the decision']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Could you appeal against it?',
        'What else should they have looked at?',
        'What can a test score tell an employer?',
        'Should a single score decide an application?',
        'How much error should we expect in a measurement?',
        'Who should decide what a score means?'],
    shape=[('answer', 'It depends entirely on what they want to conclude '
            'from it.'),
           ('support', 'A score can support one inference and not '
            'another.'),
           ('follow-up', 'Following lectures, perhaps; writing a '
            'dissertation, no.'),
           ('support', 'And the measurement error is about a third of a '
            'band.'),
           ('follow-up', 'So two applicants either side of a cut-off may '
            'differ by less than the error of the thing that separated '
            'them.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='A premise about what a score licenses',
         prompt=('Should university entry depend on a language test? '
                 'Brainstorm ten, run the six tests, name the premise '
                 'under each survivor, and mark which premises are claims '
                 'about what a score licenses. Twelve minutes.'),
         plan=('University entry should depend on a language test and not '
               'on a single cut-off score, because the arguments on both '
               'sides rest on a premise about what a score licenses, and '
               'the evidence supports the test while refusing the '
               'cut-off',
               [('The case for using the test rests on a premise that a '
                 'score carries real information about coping, which the '
                 'evidence supports',
                 ['correlations of 0.3 to 0.5 with first-year outcomes',
                  'which is information, and not enough to decide one '
                  'case']),
                ('The case against rests on a premise that a score is too '
                 'crude to be used at all, which the same evidence '
                 'refuses',
                 ['the alternative is not a better measure but an '
                  'unrecorded judgement',
                  'and the error attaches to the cut-off rather than to '
                  'the test'])]),
         notes=[
          'The move this unit adds is marking premises that are claims '
          'about what a score licenses. Those premises are empirical, '
          'there are numbers for them, and most people arguing about '
          'admissions have never seen the numbers.',
          'Notice that the evidence splits the two sides differently from '
          'how they split themselves: it supports using the test and '
          'refuses the cut-off, which is neither position as stated. A '
          'brainstorm that produces a thesis neither side offered has '
          'done its job.',
          'The thesis is long and every clause earns its place: what '
          'should happen, what should not, why both sides are making the '
          'same kind of claim, and which way the evidence cuts. At this '
          'level a long thesis is a strength if nothing in it is '
          'decoration.'],
         criterion=[('Marking premises about what a score licenses',
                     'Task Response'),
                    ('A thesis neither side offered', 'Task Response')],
         instruct='  Twelve minutes, timed. You write this in cycle 5.',
         lines=12)],
   gram=dict(
    point='Validity as an argument, not a property',
    explain=('The grammar of validity is the grammar of inference: a '
             'score supports, licenses or fails to license a conclusion, '
             'and the conclusion must be named.'),
    examples=['A test is not valid; the inference drawn from it is, or is '
              'not.',
              'The score supports an inference about following lectures '
              'and not about writing a dissertation.',
              'The evidence covers this use and has not been gathered for '
              'that one.',
              'A validation produces an argument rather than a '
              'verdict.'],
    task='Rewrite each claim so that the inference is named.',
    items=[('The test is valid.',
            'The evidence supports the inference that a score above 7.0 '
            'indicates a candidate can follow lectures in English.'),
           ('The test is unfair.',
            'The test requires background knowledge unrelated to the '
            'construct, which contaminates the inference drawn from the '
            'score.'),
           ('The score predicts success.',
            'Scores correlate with first-year outcomes at around 0.4, '
            'which supports a claim about groups and not about an '
            'individual.'),
           ('He failed to meet the requirement.',
            'He was reported at 6.5 against a requirement of 7.0, a '
            'difference within the standard error of measurement.'),
           ('The test should be replaced.',
            'The inference the institution draws is not supported by the '
            'evidence gathered, which is an argument about the use rather '
            'than the instrument.')]),
   vocab=[('construct validity', 'whether a test measures what it '
           'intends'),
          ('predictive validity', 'whether scores relate to later '
           'outcomes'),
          ('justification', 'the grounds offered for an inference'),
          ('construct-irrelevant variance', 'score differences caused by '
           'something unintended'),
          ('content evidence', 'evidence that tasks cover the '
           'construct'),
          ('correlation coefficient', 'a figure for how closely two measures '
           'move together'),
          ('cut-off score', 'the score at which a decision changes'),
          ('validation argument', 'the assembled case that an inference is '
           'justified')],
   expr=[('A test is not valid; the inference drawn from it is, or is '
          'not', 'the cycle’s governing sentence'),
         ('real information and not nearly enough to decide an individual '
          'case', 'reads a correlation honestly'),
         ('they differ by less than the error of the thing that separated '
          'them', 'states the cut-off problem'),
         ('which inference, and what evidence for that one',
          'the question to ask of any score claim')],
   trans=['consequently', 'which in turn', 'as a result',
          'the reason is that'],
  ),

  dict(
   sub='What a test does to teaching',
   step=5,
   read=[
    dict(heading='The syllabus that became the test',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given, sentence completion and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Every high-stakes test changes the teaching done for it, the '
          'effect has a name, and the interesting question is not whether '
          'it happens but what determines its direction. A test can '
          'improve instruction or hollow it out, and which it does is '
          'largely predictable from the test’s design, which means it is '
          'a decision somebody made rather than an accident that befell '
          'the teaching.',
          'The mechanism is straightforward: teachers and learners '
          'have limited hours and a visible target, and they allocate '
          'hours towards what the target rewards. This is rational '
          'behaviour by everyone involved and no account that treats '
          'it as laziness or cynicism will predict anything. A teacher '
          'with thirty hours and a student who needs a 7.0 next month '
          'is not being cynical when she spends them where the marks '
          'are.',
          'Where a test samples the construct broadly, the mechanism works '
          'in favour of learning. A test that requires reading three long '
          'passages under time produces teaching in which people read long '
          'passages under time, and that activity is the thing the score '
          'is supposed to report, so the hours spent chasing the score are '
          'hours spent acquiring the ability. A test of this kind is '
          'doing something no syllabus can do on its own, which is '
          'making a difficult activity unavoidable.',
          'Where a test samples narrowly, the same mechanism destroys. If a '
          'writing task can be satisfied by a learnable four-paragraph '
          'shape, teaching converges on the shape, scores rise, and writing '
          'ability does not move at all. The test has not failed to measure '
          'what it sampled; it has sampled something that can be produced '
          'without the ability. The distinction merits holding onto, because '
          'the usual accusation — that the test failed to measure properly — '
          'points the remedy at marking when it belongs at design.',
          'The published literature on this is uncomfortable reading for '
          'test developers. Studies of preparation classes consistently '
          'find that the proportion of time spent on format and strategy '
          'rises with the stakes attached to the test, and that it rises '
          'fastest where published scoring criteria are most explicit. '
          'The effect is consistent across studies in several countries '
          'and has survived every attempt to explain it away as an '
          'artefact of how preparation classes are sampled.',
          'That second finding deserves attention because it cuts against '
          'an intuition. Publishing detailed criteria is an act of '
          'fairness, it is universally recommended, and it also tells '
          'anybody preparing a candidate precisely what the minimum '
          'sufficient performance looks like, which is an invitation to '
          'teach exactly that and nothing adjacent to it. The '
          'recommendation and the damage come from the same '
          'property.',
          'There is no clean solution and there are two partial ones. The '
          'first is to sample widely enough that teaching to the sample '
          'and teaching the construct become the same activity, which is '
          'why long reading passages and unseen speaking topics survive in '
          'well-designed tests despite being expensive to produce and '
          'mark. The expense is the reason these features are the first '
          'to be economised on whenever a test is adapted for a new '
          'market.',
          'The second is unpredictability within a published framework: '
          'the criteria are explicit, the tasks are not announced, and a '
          'candidate cannot know which of several question types will '
          'appear. This is the compromise most international tests have '
          'arrived at, and it is a compromise rather than a resolution, '
          'since a candidate who prepares for every announced question '
          'type has prepared for the format after all.',
          'What follows for a learner is more definite than what follows for '
          'a test designer. If the test samples widely, the efficient '
          'strategy and the educationally sound one coincide, and a learner '
          'who treats preparation as practice in the ability will both learn '
          'and score. The strategies diverge only where the sample is '
          'narrow, which is a conditional worth checking rather than '
          'assuming about any specific test.',
          'This is the course’s position and it merits saying that it is a '
          'conclusion rather than a slogan. It rests on a factual claim '
          'about this specific test: that its reading sections sample '
          'reading at length, that its speaking section cannot be '
          'anticipated, and that its writing tasks reward development rather '
          'than shape. Where those claims hold, learn the thing the test is '
          'sampling and the score follows. Where they do not hold, the '
          'advice would be different, and saying so is what distinguishes a '
          'position from a slogan.',
          'The reverse does not follow, which is the asymmetry that renders '
          'the position more than a preference. Hours spent on the ability '
          'raise the score; hours spent on the score beyond the first few '
          'papers raise neither, and that is an empirical claim about where '
          'the returns are rather than a view about what education ought to '
          'be. It can be checked by anybody with access to a preparation '
          'school’s records, and it has been, repeatedly, with the same '
          'answer.',
          'A final observation about who bears the cost. A candidate '
          'coached to a score above their ability is admitted to a course '
          'they cannot follow, and arrives having been told by everybody '
          'involved that they were ready. The institution loses a place '
          'and the coach keeps a testimonial; the candidate loses a '
          'year.'],
         items=[
          (
           'Which paragraph explains the mechanism as rational hour '
           'allocation?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1, 'With a warning against treating it as laziness.',
           {0: 'Paragraph 1 asks what determines washback\u2019s direction.', 2: 'Paragraph 3 describes broad sampling.', 3: 'Paragraph 4 describes narrow sampling.'}),
          (
           'Which paragraph describes the finding about published '
           'criteria?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           1,
           'Format time rising fastest where criteria are most '
           'explicit.',
           {0: 'Paragraph 4 describes narrow sampling.', 2: 'Paragraph 6 explains why that finding cuts against '
               'intuition.', 3: 'Paragraph 7 gives the first partial solution.'}),
          (
           'Which paragraph states the compromise most international '
           'tests have reached?',
           ['Paragraph 7', 'Paragraph 8', 'Paragraph 9', 'Paragraph 10'],
           1, 'Explicit criteria with unannounced tasks.',
           {0: 'Paragraph 7 gives the first partial solution.', 2: 'Paragraph 9 gives what follows for a learner.', 3: 'Paragraph 10 states the course\u2019s position.'}),
          (
           'The writer believes teaching to the test is caused by '
           'cynicism.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 calls it rational behaviour by everyone '
           'involved.',
           {0: 'Yes would need cynicism; paragraph 2 calls the '
               'behaviour rational.', 2: 'Not Given is wrong because the cause is given.'}),
          (
           'The writer believes publishing detailed criteria has no '
           'drawbacks.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6: it tells preparers the minimum sufficient '
           'performance.',
           {0: 'Yes would need none; paragraph 6 names the drawback.', 2: 'Not Given is wrong because publication is assessed.'}),
          ('Where a writing task can be satisfied by a learnable '
           '____________, teaching converges on it.', None,
           'shape',
           'Paragraph 4, with scores rising and ability unchanged.'),
          ('The first partial solution is to sample widely enough that '
           'teaching to the sample and teaching the ____________ become '
           'the same activity.', None, 'construct',
           'Paragraph 7, which is expensive to produce and mark.'),
          ('In the final paragraph, who is said to lose a year?', None,
           'the candidate',
           'While the institution loses a place and the coach keeps a '
           'testimonial.')])],
   listen=[
    dict(heading='An examiner and a teacher disagree', part='Part 4',
         task='A recorded exchange · multiple choice and sentence completion', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Mrs Fotheringay-Adeyemi is a senior examiner. Mr '
           'Szczepanski runs a preparation school. Each has agreed to '
           'begin with their own weakest point.'),
          ('Szczepanski', 'Mine is that I sell certainty and I know the '
           'test does not provide it. Parents want to hear that twenty '
           'papers produce a seven. I say something carefully worded that '
           'they hear as that, and I have been doing it for eleven '
           'years.'),
          ('Fotheringay-Adeyemi', 'And mine is that we publish criteria '
           'detailed enough to be taught to. The research says format time '
           'rises fastest where criteria are most explicit, we are as '
           'explicit as anybody, and we present that as fairness, which '
           'it also genuinely is.'),
          ('Szczepanski', 'Then you have given me my business and '
           'criticised me for running it.'),
          ('Fotheringay-Adeyemi', 'That is fair and I will not retreat '
           'from the criteria. The alternative is candidates marked '
           'against standards they cannot see, which is worse.'),
          ('Szczepanski', 'Agreed, and I would make one distinction in my '
           'own defence. Four papers are a service. Twenty are a sale. '
           'Everything after about the fifth raises what somebody pays me '
           'and not what they can do.'),
          ('Fotheringay-Adeyemi', 'Then why sell twenty?'),
          ('Szczepanski', 'Because the school that sells four loses the '
           'student to the school that sells twenty, and nobody has found '
           'a way out of that which does not involve regulation.'),
          ('Fotheringay-Adeyemi', 'Which is a real answer and not an '
           'excuse. May I put the case that worries me most?'),
          ('Szczepanski', 'I would rather hear it from you than read it '
           'in a report.'),
          ('Fotheringay-Adeyemi', 'Then I will put it plainly.'),
          ('Fotheringay-Adeyemi', 'A candidate coached above their ability '
           'is admitted to a course they cannot follow, having been told '
           'by everybody that they were ready. The university loses a '
           'place. You keep a testimonial. They lose a year, and they are '
           'the only party who cannot see it coming.'),
          ('Szczepanski', 'That is the one I have no defence against, '
           'and I would rather you had put it first.'),
          ('Fotheringay-Adeyemi', 'I put it last because I wanted you to '
           'have said the rest without it hanging over the '
           'conversation.'),
          ('Szczepanski', 'I have no answer to that and I have three '
           'former students I think about when it is raised. The best I '
           'can say is that our widest-sampling sections resist it — '
           'nobody has ever coached a candidate through an unseen speaking '
           'topic they could not handle.'),
          ('Szczepanski', 'And I would add that I can see it coming and '
           'say nothing, which is worse than not seeing it.'),
          ('Fotheringay-Adeyemi', 'Which is the strongest argument for '
           'making every section look like that one, and it is the '
           'argument I lose inside my own organisation every year, on '
           'cost.')],
         items=[
          ('Szczepanski\u2019s own weakest point is that he sells',
           ['cheap courses', 'certainty the test does not provide', 'too few papers', 'guaranteed scores in writing'],
           1,
           'Something carefully worded that parents hear as a '
           'guarantee.',
           {0: 'Price is not what he concedes about his courses.', 2: 'He sells twenty papers, not too few.', 3: 'No guarantee is confined to writing.'}),
          ('Fotheringay-Adeyemi concedes that published criteria are',
           ['too vague', 'detailed enough to be taught to', 'rarely read', 'frequently revised'],
           1,
           'With format time rising fastest where criteria are most '
           'explicit.',
           {0: 'She says they are explicit, not vague.', 2: 'How often they are read is not her concession.', 3: 'Frequency of revision is not the point she grants.'}),
          (
           'She declines to retreat from the criteria because the '
           'alternative is candidates marked against standards they',
           ['cannot reach', 'cannot see', 'do not accept', 'have not chosen'],
           1,
           'Which she says is worse than criteria that can be taught '
           'to.',
           {0: 'Reachability is not what she says they would lose.', 2: 'Acceptance of the standards is not the issue.', 3: 'Choosing the standards is not what candidates lose.'}),
          (
           'Szczepanski distinguishes four papers as a service from '
           'twenty as a ____________.', None, 'sale',
           'With everything after the fifth raising what he is paid.'),
          ('He says he cannot sell only four because',
           ['examiners object', 'the student goes to the school selling twenty', 'parents complain', 'it costs more'],
           1, 'And nobody has found a way out without regulation.',
           {0: 'Examiners are not who he says he loses out to.', 2: 'Parental complaint is not the mechanism he names.', 3: 'Cost is not why he cannot sell four.'}),
          ('He says the section that resists coaching is',
           ['reading', 'writing', 'the unseen speaking topic', 'listening'],
           2,
           'Which she calls the strongest argument for making every '
           'section like it.',
           {0: 'Reading samples widely but is not the example given.', 1: 'Writing is where a learnable shape can be taught.', 3: 'Listening is not the section named as resistant.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Learning the thing, not the test',
    sounds=[('The last page of the series is about the gap between the sound '
             'and the score. Everything on these pages has been one thing: '
             'make the word you chose audible to somebody hearing it once.'),
            ('Before the exam, record one Part 1 answer, one long turn and one '
             'Part 3 exchange, and listen for the five faults in order: '
             'endings, stress, pauses, range, and the last fifteen seconds.'),
            ('A rehearsed answer is detectable and marked down. What you '
             'should rehearse is the shape, the hedges and the fillers you '
             'have replaced, and nothing that constitutes an opinion.'),
            ('On the day, speak slightly more slowly than feels right and '
             'slightly more loudly than feels polite. Both corrections work in '
             'the direction candidates get wrong under pressure.'),
            ('Keep your first recording from Foundation 1 or Volume 1. '
             'Listening to it beside today\'s is the only evidence of this kind '
             'you will ever have, and nobody who throws it away gets it back.')],
    intro=('Work the card first: a minute of notes, the long turn, then '
           'the one or two questions that round it off. The discussion '
           'after that: the last long turn of the volume. Try once to '
           'state an asymmetry.'),
    cue=('Describe how you have prepared for this examination.',
         ['what you have done so far',
          'how you organised your time',
          'what you have found hardest',
          'and explain what you would tell somebody starting now']),
    qs=['Now look at the card. You have one minute to make notes.',
        'What has helped you most?',
        'What would you do differently?',
        'Do exams change what is taught?',
        'Is that always a bad thing?',
        'Should test preparation be regulated?',
        'What would you tell someone beginning to prepare?'],
    shape=[('answer', 'Always, and the direction depends on the '
            'test.'),
           ('support', 'A test that samples reading at length makes '
            'people read at length.'),
           ('follow-up', 'One satisfied by a four-paragraph shape makes '
            'people learn the shape.'),
           ('support', 'So I would spend four papers on the format and '
            'the rest on the language.'),
           ('follow-up', 'Because hours on the ability raise the score '
            'and hours on the score stop raising the ability, which is '
            'not symmetrical.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Do language tests distort what is taught?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say that international language '
                 'tests distort what is taught. To what extent do you '
                 'agree? Write at least 250 words.'),
         model=[
          'They distort what is taught where they sample narrowly, and '
          'they improve what is taught where they sample widely, so the '
          'question cannot be answered about tests in general. My position '
          'is that the distortion is real, that it is a property of '
          'particular designs rather than of testing, and that the usual '
          'remedy proposed for it would make it worse.',
          'The mechanism is not in dispute and is worth stating as '
          'neutrally as possible. Teachers and learners have limited hours '
          'and a visible target, and they allocate hours towards what the '
          'target rewards. Where a writing task can be satisfied by a '
          'learnable four-paragraph shape, teaching converges on that '
          'shape, scores rise and writing ability does not move. The test '
          'has not failed to measure what it sampled; it sampled something '
          'producible without the ability.',
          'The objection to this account is that the same mechanism can '
          'run the other way, and it is correct. A test requiring three '
          'long passages under time produces teaching in which people '
          'read long passages under time, which is the thing the score is '
          'meant to report. There the hours chasing the score and the '
          'hours acquiring the ability are the same hours, and calling '
          'that distortion is simply wrong.',
          'My rebuttal to the objection is that it understates how fragile '
          'the favourable case is. Research on preparation classes finds '
          'that time spent on format rises with the stakes attached to a '
          'test, and rises fastest where the published criteria are most '
          'explicit — and publishing criteria is the remedy most often '
          'proposed, on grounds of fairness, which it genuinely serves. '
          'The reform most likely to be adopted therefore accelerates the '
          'problem it is meant to address.',
          'What survives is a narrower and more useful claim. The '
          'distortion is a function of how widely a test samples, and the '
          'defences against it are expensive: long passages, unseen '
          'speaking topics, tasks that cannot be anticipated. To the '
          'extent I agree with the accusation, then, I agree that tests '
          'distort teaching whenever an institution has economised on '
          'exactly those features — and the cost of that economy is paid '
          'by candidates coached above their ability into courses they '
          'cannot follow, who are the only party to the arrangement unable '
          'to see it coming.'],
         notes=[
          'Structure 9: position, objection, rebuttal. The objection in '
          'paragraph 3 is given in its winning form and explicitly '
          'conceded — "calling that distortion is simply wrong" — which '
          'is what makes the rebuttal worth reading.',
          'The rebuttal does not reject the objection; it shows the '
          'favourable case to be fragile and then turns the standard '
          'remedy against itself. An argument that the most likely reform '
          'makes things worse is far stronger than an argument that the '
          'reform is insufficient.',
          'The final clause names who pays, and who cannot see it coming. '
          'Ending on the distribution of a cost rather than on a summary '
          'is the most reliable way to close a band 9 essay on a policy '
          'question.'],
         model65=[
                  'Some people say that international language tests '
                  'distort what is taught. I agree, and I think the '
                  'distortion follows from the design rather than from '
                  'misuse.',
                  'The mechanism is transparent. A test that must '
                  'be marked reliably across many countries has to use '
                  'tasks that can be scored consistently, which '
                  'favours brief written answers and limited speaking. '
                  'Teaching then is oriented towards those tasks, because that is '
                  'what the student is paid to pass.',
                  'However, distortion has to be measured against '
                  'something. In many places the alternative was not '
                  'better teaching but no coherent standard at all, and '
                  'the test rendered progress visible to students who had '
                  'no other way of showing it. A distorted target can '
                  'still be an improvement on none.',
                  'I think the answer is to change what the test asks '
                  'rather than to abandon it. Longer speaking, writing '
                  'that responds to a source, and tasks that cannot be '
                  'prepared by formulaic rehearsal would pull teaching in a better '
                  'direction. The test will be taught to; that is why '
                  'its content matters so much.',
                  ],
         gap65=[
                'It traces the distortion to the reliability '
                'requirement, so the design is the cause rather than '
                'the users.',
                'It states what the comparison is, which is what keeps '
                'the concession from being a throwaway.',
                'It makes the recommendation follow from the '
                'mechanism: change the task, because the task is what '
                'gets taught.',
                ],
         criterion=[('The objection given in its winning form',
                     'Task Response'),
                    ('Turning the standard remedy against itself',
                     'Task Response'),
                    ('Closing on who pays', 'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Washback, and the course’s own position on it',
    explain=('Writing about what a test does to teaching needs language '
             'for mechanisms, directions and asymmetries — and the '
             'honesty to say when a claim is empirical rather than '
             'moral.'),
    examples=['Learn the thing the test is sampling and the score '
              'follows; the reverse does not.',
              'Teaching converges on the shape, scores rise, and ability '
              'does not move.',
              'The test sampled something producible without the '
              'ability.',
              'That is a claim about where the returns are, not a view '
              'about education.'],
    task='Rewrite each slogan as a claim that could be checked.',
    items=[('Teaching to the test is bad.',
            'Teaching to the test reduces ability gains where the test '
            'samples narrowly, and not where it samples widely.'),
           ('Practice papers are a waste of time.',
            'Papers beyond about the fifth produce gains that do not '
            'appear outside the examination room.'),
           ('Tests ruin education.',
            'High-stakes tests shift teaching hours towards whatever the '
            'test rewards, which improves instruction or hollows it out '
            'depending on the sample.'),
           ('Publishing criteria is good practice.',
            'Publishing criteria serves fairness and is associated with '
            'the fastest rise in time spent on format.'),
           ('Coaching helps candidates.',
            'Coaching raises scores, and a candidate coached above their '
            'ability bears the cost of the resulting admission.')]),
   vocab=[('washback effect', 'the influence of a test on teaching'),
          ('construct underrepresentation', 'sampling less than is '
           'claimed'),
          ('high-stakes', 'carrying serious consequences'),
          ('narrowing', 'teaching reducing towards a single approach'),
          ('learnable shape', 'a template producible without the '
           'ability'),
          ('unseen', 'not announced or predictable in advance'),
          ('returns', 'what an hour of effort yields'),
          ('testimonial', 'a published endorsement from a past '
           'client')],
   expr=[('Learn the thing the test is sampling and the score follows; '
          'the reverse does not', 'the course’s position, stated as an '
          'asymmetry'),
         ('it sampled something producible without the ability',
          'locates the fault precisely'),
         ('the reform most likely to be adopted accelerates the problem',
          'turns a remedy against itself'),
         ('they are the only party who cannot see it coming',
          'names who bears a cost')],
   trans=['admittedly', 'nevertheless', 'in short',
          'what survives is'],
  ),
 ],
 technique=dict(
  title='Four timed papers: the whole test, four sections, against the '
        'clock',
  body=('After this unit come four papers, and they are the first time in '
        'six volumes that you meet all four sections at their real length '
        'on the same terms as a candidate. Reading: three passages, forty '
        'questions, sixty minutes, no extra transfer time. Listening: four '
        'parts, forty questions, played once, thirty minutes with ten to '
        'transfer. Writing: both tasks, sixty minutes, and you choose your '
        'own split — twenty and forty, and not a minute more on Task 1 '
        'however unfinished it feels. Speaking: three parts, eleven to '
        'fourteen minutes, recorded if you can, because the only reliable '
        'way to hear your own hesitation is to listen to it. Sit them in '
        'that order, on four different days, and mark the receptive two '
        'before you look at anything else. The productive two cannot be '
        'marked for you: what you get instead is a model at band, a note '
        'of what it is doing, and a checklist you apply to your own '
        'script, which is a harder and more useful exercise than a '
        'score.'),
  panel=[('Reading: 60 minutes, no extra time',
          'Three passages, forty questions. Transfer as you go; there is '
          'no ten minutes at the end.'),
         ('Listening: played once',
          'Four parts, forty questions, thirty minutes plus ten to '
          'transfer. One play, whatever happens.'),
         ('Writing: your own split',
          'Sixty minutes for both. Twenty on Task 1 and stop, even '
          'mid-sentence. Forty on Task 2.'),
         ('Speaking: record it',
          'Eleven to fourteen minutes, three parts. You cannot hear your '
          'own filler until you play it back.')],
  task='Sit all four papers on four separate days this week, in the order '
       'given, under the real clock.',
  qs=['Did you transfer reading answers as you went?',
      'Did you keep to twenty minutes on Task 1?',
      'How many Task 2 words did you produce in forty minutes?',
      'Did you record the speaking paper, and did you listen back?',
      'Which section was furthest from where you expected it to be?']),
 outlining=dict(
  title='Everything, on a question about the test you are about to sit',
  body=('The last outlining exercise of the volume uses every move you '
        'have been taught, on a question you have an unusual amount of '
        'evidence about: whether university entry should depend on a '
        'language test. Brainstorm ten, run the six tests, name the '
        'premise under each survivor, test each premise in all three '
        'stages, and mark which premises are claims about what a score '
        'licenses — because those are empirical, there are numbers for '
        'them, and you now know the numbers. Expect the evidence to split '
        'the two sides differently from how they split themselves: here it '
        'supports using the test and refuses the single cut-off, which is '
        'neither position as usually stated. A brainstorm that hands you '
        'a thesis neither side offered is a brainstorm that has worked, '
        'and it is the strongest thing you can carry into a forty-minute '
        'essay.'),
  frame=('University entry should depend on a language test and not on a '
         'single cut-off score, because the arguments on both sides rest '
         'on a premise about what a score licenses, and the evidence '
         'supports the test while refusing the cut-off',
         [('The case for using the test rests on a premise that a score '
           'carries real information about coping, which the evidence '
           'supports',
           ['correlations of 0.3 to 0.5 with first-year outcomes',
            'which is information, and not enough to decide one case']),
          ('The case against rests on a premise that a score is too crude '
           'to be used at all, which the same evidence refuses',
           ['the alternative is not a better measure but an unrecorded '
            'judgement',
            'and the error attaches to the cut-off rather than to the '
            'test'])]),
  task='Outline this question in twelve minutes, then compare your thesis '
       'with the one above and with the essay in cycle 5.',
  qs=['Which of your premises are claims about what a score licenses?',
      'Do you know the numbers for them?',
      'Does the evidence support either side as it states itself?',
      'Did your brainstorm hand you a thesis neither side offered?',
      'Could you write the essay from your outline without rereading '
      'it?'],
  answers=['more than half, on this question',
           'you do now, and almost nobody arguing about it does',
           'rarely; it usually supports part of each',
           'if it did, that is the essay, and say so in the '
           'introduction',
           'if not, the outline is notes rather than a plan']),
 candos=['I can request a review of a result with quantified grounds',
         'I can say what practice for a test does and does not change',
         'I can report a table and a chart together and say something '
         'neither says alone',
         'I can name the inference a score supports, and the one it does '
         'not',
         'I can sit all four papers under the real clock'],
 tip=('Your weakest section decides where you can go, whatever your '
      'average says. Find it from the four papers that follow, and put '
      'the next hundred hours there rather than on the section you most '
      'enjoy practising.'),
)
