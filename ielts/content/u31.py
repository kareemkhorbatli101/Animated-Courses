# -*- coding: utf-8 -*-
"""Unit 31 - Measurement and Statistics. IELTS Volume 4, band 6.5."""

UNIT = dict(
 n=31, vol=4, level='B2', band='6.5',
 theme='Measurement and Statistics',
 opener=(
   'Every argument in this unit turns on a number, and every number in it was '
   'produced by somebody who made choices: who to ask, what to count, where to '
   'put the line. The five cycles move from taking part in a survey yourself '
   'to the question of what a sample of a thousand people can honestly be said '
   'to show. Cycle 4 sets out why a small sample works; cycle 5 explains why '
   'the famous failures were not failures of size.'),

 cycles=[

  # ------------------------------------------------------------- cycle 1 ---
  dict(
   sub='Taking part in a survey',
   step=1,
   read=[
    dict(heading='The National Household Survey: who is asked, and why',
         kind='Public notice', task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('Reading a notice for what it obliges you to do',
                ['A public notice is written to be acted on, so the action is '
                 'usually in the last line of each section.',
                 'Mark the deadline and the exception first. Those are the two '
                 'things readers get wrong.']),
         paras=[
          'Each year about forty thousand households are invited to take part '
          'in the National Household Survey. Addresses are selected at random '
          'from the postal address file. Nobody applies to take part and nobody '
          'can ask to be included, because a sample that people choose to join '
          'is no longer a random one.',
          'Taking part is voluntary. An interviewer will call at the address '
          'shown on your letter, usually within three weeks of the letter '
          'arriving. If nobody is at home, the interviewer will call again at a '
          'different time of day and on a different day of the week, up to six '
          'times, before the address is recorded as a non-response.',
          'The interview takes about forty minutes. You may decline any '
          'individual question and still complete the rest. Answers about '
          'income are placed in bands rather than recorded exactly, and no '
          'answer is ever published in a form that could identify a household.',
          'Households that take part receive a voucher for twenty pounds. This '
          'is a contribution towards your time and is not a payment for '
          'particular answers. If you would prefer not to take part at all, '
          'please tell the interviewer at the door; there is no form to '
          'complete and no reason need be given.'],
         items=[
          ('Addresses for the survey are taken from',
           ['the electoral register', 'the postal address file',
            'last year’s sample', 'applications from households'], 1,
           'Paragraph 1: selected at random from the postal address file. The '
           'electoral register is never mentioned.'),
          ('A household that wants to take part but has not been invited',
           ['may apply in writing', 'may ask an interviewer',
            'cannot be included', 'joins a waiting list'], 2,
           'Paragraph 1 says nobody can ask to be included, and gives the '
           'reason: a sample people choose to join is not random.'),
          ('How many times will an interviewer call before recording a '
           'non-response?',
           ['Three', 'Four', 'Six', 'Until contact is made'], 2,
           'Paragraph 2: up to six times, at different times and on different '
           'days.'),
          ('Income answers are',
           ['recorded exactly', 'not collected at all', 'placed in bands',
            'published by household'], 2,
           'Paragraph 3: income goes into bands, not exact figures.'),
          ('The twenty-pound voucher is described as',
           ['a payment for completing every question',
            'a contribution towards your time',
            'a reward for particular answers', 'a refund of expenses'], 1,
           'Paragraph 4 uses exactly that phrase and then rules out the '
           'alternative: it is not a payment for particular answers.')]),
    dict(heading='What happens to your answers',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'When the interview is finished, the answers are sent to the central '
          'office on an encrypted connection. The address label is removed at '
          'this stage and replaced with a serial number, so that the record '
          'that reaches the analysts carries no name and no street.',
          'The records are then checked for internal consistency. A household '
          'that reports no income but also reports paying rent is flagged, and '
          'an analyst looks at the record by hand. Where an answer is plainly '
          'impossible it is deleted rather than corrected, because a corrected '
          'answer is a guess wearing a figure.',
          'The checked records are then weighted. Weighting corrects for the '
          'fact that some groups answer less often than others: if only half as '
          'many young renters respond as the population contains, each young '
          'renter who did respond is counted twice over. Weighting cannot '
          'correct for a group being different from its absent neighbours, '
          'which is a separate problem.',
          'Results are published nine months after fieldwork closes. Anonymised '
          'records are released to researchers under licence a year after that. '
          'No record is ever released that contains fewer than five households '
          'in any published cell.'],
         items=[
          ('Before the record reaches the analysts, the address label is '
           'replaced with a ____________.', None, 'serial number',
           'Paragraph 1: the label is removed and replaced with a serial '
           'number, so the record carries no name and no street.'),
          ('A record that is internally inconsistent is checked by an '
           '____________.', None, 'analyst',
           'Paragraph 2: an analyst looks at the record by hand.'),
          ('An impossible answer is ____________ instead of corrected.',
           None, 'deleted',
           'Paragraph 2 gives the reason as well: a corrected answer is a guess '
           'wearing a figure.'),
          ('Results are published ____________ months after fieldwork closes.',
           None, 'nine', 'Paragraph 4. The year after that refers to the '
           'release of anonymised records, not to publication.')])],
   listen=[
    dict(heading='An interviewer calls', part='Part 1', task='A survey visit',
         band='l1', qtype='Questions 10-14', 
         skill=('Predicting the form of a gap',
                ['Before you listen, decide what kind of word each gap wants: '
                 'a number, a name, a time, a short noun phrase.',
                 'Predicting the form is safe. Predicting the content is what '
                 'makes you hear what you expected.']),
         script=[
          ('Interviewer', 'Good afternoon. My name is Rosalind Achebe and I am '
           'calling about the National Household Survey. You should have had a '
           'letter about a fortnight ago.'),
          ('Resident', 'We did, yes. I was not sure whether we had to do it.'),
          ('Interviewer', 'You do not have to. It is entirely voluntary, and '
           'you can stop at any point. It takes about forty minutes in total, '
           'though that depends a little on how many people live here.'),
          ('Resident', 'There are four of us. Two adults and two children.'),
          ('Interviewer', 'Thank you. And could I take the first line of the '
           'address and the postcode, just to confirm I am at the right place? '
           'The letter will have a reference on it as well.'),
          ('Resident', 'It is 14 Thurloe Gardens, and the postcode is DN4 7RP. '
           'The reference is, hold on, H four two nine one.'),
          ('Interviewer', 'H-four-two-nine-one. That matches. Now, is this a '
           'convenient moment, or would you rather I came back?'),
          ('Resident', 'Could you come back? Thursday evening would suit us '
           'better. After seven.'),
          ('Interviewer', 'Thursday after seven, that is fine. I will put you '
           'down for half past seven. One thing I should say now: there are '
           'questions about income later on, and those are answered in bands. '
           'You will be shown a card with ranges on it and you tell me which '
           'letter applies. You never say a figure out loud.'),
          ('Resident', 'That is better. And what do we get for it, if anything? '
           'My neighbour said there was a voucher.'),
          ('Interviewer', 'There is, yes. Twenty pounds, as a contribution '
           'towards your time. It comes after the interview, by post, usually '
           'within ten working days.'),
          ('Resident', 'Fine. Thursday half past seven, then.')],
         items=[
          ('Number of people living at the address: ____________', None, 'four',
           'Two adults and two children, which the resident gives as four in '
           'total before breaking it down.'),
          ('Reference on the letter: ____________', None, 'H4291',
           'Spelt out as H four two nine one and then read back by the '
           'interviewer, which is the confirmation the test usually gives you.'),
          ('Appointment: Thursday at ____________', None, '7.30 pm',
           'The resident says after seven; the interviewer fixes it at half '
           'past seven, and the later speaker sets the answer.'),
          ('Income answers are given by choosing a ____________ from a card.',
           None, 'letter',
           'You tell the interviewer which letter applies and never say a '
           'figure out loud.'),
          ('The voucher arrives within ____________ working days.', None, 'ten',
           'Twenty pounds is the amount, not the answer; the gap asks for the '
           'number of days.')]),
    dict(heading='A short talk: why surveys call back', part='Part 2',
         task='A monologue for new interviewers', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Trainer', 'Before you go out this week I want to say something '
           'about call-backs, because it is the part of the job that feels '
           'like wasted time and is not. You will be asked to return to an '
           'address up to six times, at different times of day and on '
           'different days of the week, and after the third visit you will '
           'start to wonder why we bother.'),
          ('Trainer', 'Here is why. The households you reach on a Tuesday '
           'afternoon are not a random selection of households. They are the '
           'ones that are in on a Tuesday afternoon. That means older people, '
           'people working from home, people not working at all, and people '
           'with young children. If we stopped after one visit, our survey '
           'would describe that group and would be presented as describing the '
           'country.'),
          ('Trainer', 'The evening calls bring in the people who commute. The '
           'weekend calls bring in shift workers. The sixth call, which almost '
           'never succeeds, brings in a handful of households that are '
           'different again from all the rest, and those few are worth more '
           'per interview than anybody else you will speak to all month.'),
          ('Trainer', 'Now, the thing that is not in your manual. When somebody '
           'refuses, record the refusal properly and move on. Do not persuade. '
           'A reluctant interview produces answers given to get rid of you, and '
           'those answers go into the same column as everybody else’s. A '
           'clean refusal is data: it tells us the shape of who is missing. A '
           'bad interview is noise pretending to be data.'),
          ('Trainer', 'One last point about the twenty pound voucher. It is not '
           'there to buy answers and you should not present it that way. Mention '
           'it at the end of your introduction, once, in the same tone you '
           'mention the length of the interview.')],
         items=[
          ('The trainer says households reached on a Tuesday afternoon are',
           ['a random selection', 'easier to interview',
            'a particular kind of household', 'the most useful group'], 2,
           'He lists them: older people, people at home, people not working, '
           'people with young children. The point is that they are not random.'),
          ('Which calls bring in commuters?',
           ['Weekend calls', 'Evening calls', 'The sixth call',
            'Afternoon calls'], 1,
           'Evening calls bring in commuters; weekend calls bring in shift '
           'workers. The two are set out one after the other.'),
          ('What does the trainer say about a reluctant interview?',
           ['It is better than no interview',
            'Its answers go into the same column as everybody else’s',
            'It should be marked for checking', 'It must be repeated later'], 1,
           'That is his objection: the answers are given to get rid of you but '
           'are counted identically.'),
          ('A clean refusal is described as',
           ['a failure', 'noise', 'data', 'a call-back'], 2,
           'It tells us the shape of who is missing, which is why he calls it '
           'data, not a failure.')])],
   speak=dict(
    part='Part 1', focus='Numbers and surveys',
    intro=('Part 1 answers stay short. Two or three sentences: answer, then '
           'one support, then stop. A five-sentence answer to Do you work or '
           'study? has misread the room, and the examiner has eleven more '
           'questions to ask.'),
    qs=['Have you ever been asked to take part in a survey? What was it about?',
        'Do you usually agree to answer surveys, or do you avoid them? Why?',
        'How often do you see statistics in the news where you live?',
        'Do you trust numbers you see reported? Why, or why not?'],
    shape=[('answer', 'I usually avoid them, to be honest.'),
           ('support', 'They always arrive when I am in the middle of '
            'something.'),
           ('follow-up', 'So it is the timing I object to, and not '
            'the questions.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking how your data will be used',
         prompt=('You took part in a household survey last month. You have '
                 'since seen a newspaper article quoting figures from it that '
                 'you do not recognise. Write a letter to the survey office. '
                 'In your letter: say when you took part and give your '
                 'reference; explain which figure you are asking about; ask '
                 'what will happen to your own answers. Write at least 150 '
                 'words.'),
         model=[
          'Dear Sir or Madam,',
          'I took part in the National Household Survey on 14 March this year. '
          'My reference is H4291 and the interview was conducted at my home in '
          'Thurloe Gardens.',
          'I am writing because an article in the Ashfield Echo of 2 November '
          'quoted a figure from the survey which I do not recognise. The '
          'article stated that two thirds of households in this district now '
          'hold more than three months of savings. Having answered the '
          'questions on savings myself, I find that figure difficult to place, '
          'and the article gives no indication of how many households the '
          'figure is based on.',
          'I should be grateful if you could tell me two things. First, whether '
          'the figure quoted is a district figure or a national one applied to '
          'the district, since the article is not clear on the point. Second, '
          'what will happen to the answers I gave: whether they are held with '
          'my address attached, and when they will be destroyed.',
          'I would be glad of a written reply.',
          'Yours faithfully,',
          'A. Castellanos'],
         notes=[
          'All three bullets are developed, not mentioned. The third gets two '
          'questions because it is the one the letter exists to ask.',
          'The register is formal and consistent: Dear Sir or Madam opens it '
          'and Yours faithfully closes it, which is the pair that belongs '
          'together.',
          'Every claim is specific. The date, the reference, the newspaper and '
          'the figure are all named, which is what makes a complaint answerable '
          'instead of a grumble.'],
         criterion=[('Covering all three bullets and developing each',
                     'Task Achievement'),
                    ('Opening and closing that match the register',
                     'Task Achievement'),
                    ('Naming dates, figures and sources precisely',
                     'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Passive voice for procedures, where the agent is irrelevant',
    explain=('A procedure notice almost never says who does the work, because '
             'the reader does not need to know and the organisation does not '
             'want to promise a particular person. English handles this with '
             'the passive, and IELTS Task 1 process answers live on it.'),
    examples=['Addresses are selected at random from the postal address file.',
              'The label is removed and replaced with a serial number.',
              'An impossible answer is deleted, not corrected.',
              'Results are published nine months after fieldwork closes.'],
    task='Rewrite each sentence so that the agent disappears.',
    items=[('Somebody at the central office removes the address label.',
            'The address label is removed at the central office.'),
           ('An analyst checks the records for consistency.',
            'The records are checked for consistency.'),
           ('They publish the results nine months later.',
            'The results are published nine months later.'),
           ('The office sends the voucher within ten working days.',
            'The voucher is sent within ten working days.'),
           ('Researchers may use the anonymised records under licence.',
            'The anonymised records may be used under licence.')]),
   vocab=[('sampling frame', 'the list a sample is drawn from'),
          ('non-response', 'a selected address that does not answer'),
          ('weighting', 'counting some answers more to match the population'),
          ('anonymised', 'with anything identifying a person removed'),
          ('voluntary', 'done by choice; not required'),
          ('encrypted', 'coded so that only the intended reader can read it'),
          ('fieldwork', 'the period during which answers are collected'),
          ('serial number', 'a number used in place of a name')],
   expr=[('I should be grateful if you could...',
          'the standard formal request; takes could, not would'),
         ('I am writing because...',
          'states the reason in the first line of the body'),
         ('I find that figure difficult to place',
          'doubts a claim without accusing anybody'),
         ('having answered the questions myself',
          'establishes your standing to object')],
   trans=['first', 'second', 'since', 'having'],
  ),
  # ------------------------------------------------------------- cycle 2 ---
  dict(
   sub='Numbers people quote',
   step=2,
   read=[
    dict(heading='Four readers on the same statistic',
         kind='Four short texts', task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         skill=('Matching features: understand the claim, let the name wait',
                ['Read the claims and understand them. Do not go hunting for '
                 'the names: every name on the list is in the text already, so '
                 'finding one narrows nothing.',
                 'The test paraphrases the claim and prints the name '
                 'unchanged. The name is the easy half and it waits for you.']),
         paras=[
          'A  Dariusz: I saw the headline, which said that one in four adults '
          'here cannot swim. What the study actually asked was whether people '
          'had swum in the last twelve months. Those are different questions '
          'and only one of them was put.',
          'B  Imelda: The figure may well be right. My objection is to the '
          'comparison that followed it. The article set the number beside a '
          'figure from twenty years ago that was collected by a different '
          'method, and then called the difference a decline.',
          'C  Nkechi: I looked up the report. The sample was two thousand '
          'people, which is perfectly respectable, and the margin of error was '
          'given as two points. The trouble is that the article quoted the '
          'figure to one decimal place, which that sample cannot support.',
          'D  Taavi: I have no quarrel with the number or the comparison. I '
          'object to it appearing under a photograph of a closed swimming '
          'pool, which invites a cause the study never tested. A reader who '
          'takes nothing else from the page will take that away, and nobody '
          'will ever have written it down. Captions are where the claims an '
          'editor could not defend in print go to live quietly, and they are '
          'almost never corrected afterwards.'],
         items=[
          ('Which reader objects to a comparison between two differently '
           'collected figures?', ['Dariusz', 'Imelda', 'Nkechi', 'Taavi'], 1,
           'Imelda: a figure from twenty years ago collected by a different '
           'method, then called a decline.'),
          ('Which reader says the question asked was not the question '
           'reported?', ['Dariusz', 'Imelda', 'Nkechi', 'Taavi'], 0,
           'Dariusz: the study asked about swimming in the last twelve months; '
           'the headline said people cannot swim.'),
          ('Which reader accepts the figure but objects to how precisely it '
           'was stated?', ['Dariusz', 'Imelda', 'Nkechi', 'Taavi'], 2,
           'Nkechi: a decimal place the sample cannot support, given a margin '
           'of error of two points.'),
          ('Which reader objects to something outside the text of the article?',
           ['Dariusz', 'Imelda', 'Nkechi', 'Taavi'], 3,
           'Taavi objects to the photograph, which invites a cause the study '
           'never tested.'),
          ('Nkechi believes the sample size was too small.',
           ['Yes', 'No', 'Not Given'], 1,
           'She calls two thousand perfectly respectable. The '
           'objection is to the decimal place, not the size.',
           {0: 'Yes would need the size to be her objection; she calls '
               'two thousand respectable.', 2: 'Not Given is wrong because she states what her '
               'objection is.'}),
          ('Imelda thinks the original study was badly conducted.',
           ['Yes', 'No', 'Not Given'], 2,
           'She says the figure may well be right and objects only to '
           'the comparison. She says nothing about how the study was '
           'conducted.',
           {0: 'Yes would need a criticism of conduct; she objects '
               'only to the comparison.', 1: 'No would need her to defend the conduct, which she '
               'never discusses.'})])],
   listen=[
    dict(heading='Two journalists disagree about a figure', part='Part 3',
         task='A newsroom discussion', band='l3', qtype='Questions 25-29',
         script=[
          ('Editor', 'I want to go with one in four adults cannot swim. It is '
           'clear and people will read it.'),
          ('Reporter', 'It is clear and it is not what the study found. They '
           'asked whether people had swum in the last year. I have not swum in '
           'the last year and I can swim perfectly well.'),
          ('Editor', 'Nobody reads a headline that says one in four adults have '
           'not swum recently.'),
          ('Reporter', 'Then we should find a different story, not a different '
           'sentence for this one. There is a real finding in here. The '
           'participation gap between the richest and poorest districts has '
           'widened by eleven points since 2015, and that is on the same '
           'measure both times.'),
          ('Editor', 'Eleven points. Is that reliable?'),
          ('Reporter', 'It is the most reliable number in the report, because '
           'it is a comparison within one survey. The absolute levels are '
           'shakier, since people overstate how much exercise they take, but '
           'they overstate it in both districts, so the gap survives the '
           'flattery.'),
          ('Editor', 'That is quite a good line. The gap survives the flattery.'),
          ('Reporter', 'It is also the argument for not running the headline '
           'you wanted. If we claim a quarter of adults cannot swim and someone '
           'checks, the correction kills the real story along with the false '
           'one.'),
          ('Editor', 'All right. Lead on the gap. But I want the national '
           'figure in the second paragraph, properly described.'),
          ('Reporter', 'Properly described means saying what was asked. One in '
           'four adults had not been swimming in the previous twelve months.'),
          ('Editor', 'Put it in those words, then. And no photograph of a '
           'closed pool.'),
          ('Reporter', 'Thank you. One more thing about the gap figure. I want '
           'to say in the piece that it is measured the same way at both ends, '
           'because otherwise a reader has no way of telling it apart from the '
           'kind of comparison we are refusing to make in the first '
           'paragraph.'),
          ('Editor', 'That is a sentence most readers will skip.'),
          ('Reporter', 'Most of them will. The ones who do not are the ones '
           'who would otherwise write in, and they are usually the ones who '
           'know the subject. It costs us a line and it buys the difference '
           'between a correction and a conversation.'),
          ('Editor', 'Put it in the second paragraph with the national figure, '
           'and keep it to one sentence.')],
         items=[
          ('What is the reporter’s objection to the proposed headline?',
           ['The figure is wrong', 'It reports a different question',
            'The sample was too small', 'It is not interesting enough'], 1,
           'The study asked about swimming in the last year; the headline says '
           'cannot swim. The reporter accepts the figure itself.'),
          ('Why does the reporter call the eleven-point gap the most reliable '
           'number?',
           ['It is the largest', 'It comes from a bigger sample',
            'It is a comparison within one survey',
            'It was checked independently'], 2,
           'Both measurements come from the same survey on the same measure, '
           'so the bias affects both sides equally.'),
          ('What does the reporter mean by the gap survives the flattery?',
           ['People exaggerate in both districts equally',
            'The gap is too large to be an error',
            'The survey corrected for exaggeration',
            'Richer districts exaggerate more'], 0,
           'People overstate their exercise in both districts, so the '
           'difference between them is unaffected.'),
          ('What is the reporter’s practical argument against the headline?',
           ['It would take too long to check',
            'A correction would destroy the real story too',
            'The editor would have to apologise',
            'Readers prefer local news'], 1,
           'If someone checks, the correction kills the real story along with '
           'the false one.'),
          ('What do they finally agree to do?',
           ['Drop the story', 'Lead on the national figure',
            'Lead on the gap, with the national figure described properly',
            'Wait for a second study'], 2,
           'The editor concedes the lead and asks for the national figure in '
           'the second paragraph, properly described.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Figures you have heard quoted',
    longturn=[('The number I want to talk about is a claim that a quarter of '
               'people in my country have no savings at all, which I heard '
               'quoted in an argument about pensions.'),
              ('I first heard it on a radio discussion, where it was used '
               'without a source, and then saw it again a fortnight later in a '
               'newspaper column, this time attached to the name of a bank.'),
              ('What it was supposed to show was that people cannot be '
               'expected to save for their own retirement, so the state must '
               'continue to provide. That was the argument it was serving, and '
               'I agreed with the argument, which is probably why I did not '
               'look at the figure for a month.'),
              ('Whether I believed it is a more interesting question now than '
               'it was then. When I looked, the survey turned out to be real, '
               'reasonably large and commissioned by a company that sells '
               'savings products, and the question it had asked was whether '
               'people had savings they could reach within a week. That is not '
               'the same as having no savings, and it would exclude anybody '
               'whose money is tied up in a pension or a fixed-term account. '
               'So the figure is probably accurate and the claim built on it '
               'is not, and I have become much more interested in the exact '
               'wording of a question than in the percentage that follows it. '
               'I still use the figure occasionally, with the caveat attached, '
               'and I notice that the caveat is the part people stop listening '
               'to.')],
    intro=('Part 1 stays at two or three sentences. Then the long turn: one to '
           'two minutes, and the card has already written your outline for '
           'you. Take the bullets in order, give them roughly equal weight, '
           'and develop each bullet instead of listing more.'),
    cue=('Describe a statistic or a number you have heard quoted.',
         ['what the number was',
          'where you heard or read it',
          'what it was supposed to show',
          'and explain whether you believed it']),
    qs=['Do you remember any statistic from the news this year?',
        'Are figures in the media where you live usually explained well?',
        'Now look at the card. You have one minute to make notes.',
        'Would you have believed the same number from a different source?'],
    shape=[('answer', 'The one I remember is that a quarter of adults here '
            'cannot swim.'),
           ('support', 'It was on the front of the local paper in the summer.'),
           ('follow-up', 'What struck me was that it ran under a photograph of '
            'a pool that had just closed.'),
           ('support', 'I half believed it at the time.'),
           ('follow-up', 'Then somebody pointed out that the survey had asked '
            'something rather different.')]),
   write=[
    dict(task='Task 2', fork=None,
         heading='Should newspapers publish the source of every statistic?',
         wband='essay',
         prompt=('Write about the following topic. Some people believe that '
                 'newspapers should be required to publish the source of every '
                 'statistic they report. Others say this would make articles '
                 'unreadable. Discuss both views and give your own opinion. '
                 'Write at least 250 words.'),
         plan=('Sources should be published, with a limit',
               [('A reader cannot check what is not cited',
                 ['the swimming figure was checkable only because a report '
                  'existed', 'without a citation the claim is an assertion']),
                ('The objection is about placement, not principle',
                 ['a line at the foot costs nothing',
                  'nobody is asking for footnotes in the first sentence'])]),
         model=[
          'It is often argued that newspapers should be obliged to cite a '
          'source for every figure they print, and equally often answered that '
          'this would turn a news article into an academic paper. I believe the '
          'requirement is right, and that the objection is really about where '
          'the citation goes, not whether there should be one.',
          'The case for citation is that a reader cannot check what has not '
          'been identified. A figure without a source is not evidence; it is an '
          'assertion with a number attached, and it is indistinguishable on the '
          'page from a figure that has been carefully produced. When a recent '
          'report claimed that a quarter of adults could not swim, the only '
          'reason the claim could be examined at all was that a named study '
          'existed behind it. Had the article simply said that research shows, '
          'there would have been nothing to examine.',
          'Those who object point out that most readers never follow a '
          'reference, and that an article interrupted by citations is harder to '
          'read than one that is not. The first point is true and beside the '
          'point: a safeguard is not useless because it is rarely invoked. The '
          'second has more force, but it is an argument about layout. A single '
          'line at the foot of the article, naming the study and the sample '
          'size, imposes nothing on the reader who does not want it.',
          'In my view the requirement should therefore be adopted, with one '
          'sensible limit. What should be published is the source and the '
          'sample, not the methodology, which no reasonable reader expects and '
          'no editor could supply. That costs a line and makes the difference '
          'between a claim that can be tested and one that cannot.'],
         notes=[
          'Structure 2: the opposing view is given a full paragraph before the '
          'writer’s own, and it is given properly instead of being set up to be '
          'knocked down.',
          'The two objections are answered separately and differently: the '
          'first is conceded and shown to be irrelevant, the second is '
          'accepted and redirected to layout. Answering two objections the '
          'same way is what makes an essay feel thin.',
          'The conclusion adds a limit instead of restating the position. A '
          'qualified position reads as considered; a repeated one reads as '
          'padding.'],
         criterion=[('Both views developed before the writer’s own',
                     'Task Response'),
                    ('Each objection answered on its own terms',
                     'Task Response'),
                    ('A conclusion that qualifies, not one that repeats',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Reporting at a distance: attributing a claim without endorsing it',
    explain=('A writer who reports a claim has to show whether it is being '
             'passed on or believed. English marks this with reporting verbs, '
             'with it-clauses and with adverbs, and the examiner reads the '
             'difference as control of stance.'),
    examples=['It is often argued that every figure should be cited.',
              'The study is said to have found a decline.',
              'The article claimed, on no stated evidence, that the pool had '
              'closed because of the figures.',
              'Supposedly, participation has fallen since 2015.'],
    task='Rewrite each sentence so that you report the claim without agreeing '
         'with it.',
    items=[('A quarter of adults cannot swim.',
            'It is claimed that a quarter of adults cannot swim.'),
           ('Participation has fallen since 2015.',
            'Participation is said to have fallen since 2015.'),
           ('The pool closed because of low attendance.',
            'The pool is reported to have closed because of low attendance.'),
           ('The two figures are comparable.',
            'The two figures are presented as comparable.'),
           ('The gap has widened by eleven points.',
            'The report puts the widening of the gap at eleven points.')]),
   vocab=[('margin of error', 'the range a sample figure could really lie in'),
          ('decimal place', 'a digit after the point, implying precision'),
          ('participation', 'the share of people who take part in something'),
          ('overstate', 'report as larger than it is'),
          ('comparable', 'collected in a way that allows comparison'),
          ('assertion', 'a claim offered without evidence'),
          ('safeguard', 'a protection that is rarely used but matters'),
          ('citation', 'a reference naming where a figure came from')],
   expr=[('It is often argued that... and equally often answered that...',
          'sets up two views in one sentence'),
         ('that is true and beside the point',
          'concedes a fact while denying its relevance'),
         ('has more force, but it is an argument about...',
          'accepts an objection and redirects it'),
         ('indistinguishable on the page from',
          'compares two things a reader cannot tell apart')],
   trans=['equally', 'therefore', 'had', 'beside the point'],
  ),
  # ------------------------------------------------------------- cycle 3 ---
  dict(
   sub='Reading a graph properly',
   step=3,
   read=[
    dict(heading='Three graphs of the same data',
         kind='Data article', task='Matching information and True/False/Not Given',
         band='long', qtype='Questions 30-36',
         figure=dict(kind='line', title='Reported crime in Marchfield',
                     sub='the same figures, plotted from zero',
                     x=['2016', '2018', '2020', '2022', '2024'],
                     series=[('Burglary', [1180, 1140, 1090, 1060, 1020]),
                             ('Vehicle crime', [860, 880, 910, 950, 1010])],
                     ylab='recorded offences'),
         skill=('Reading a chart against its own axes',
                ['Find the baseline before you find the trend. A chart that '
                 'does not start at zero exaggerates every movement on it.',
                 'Then ask what is being compared with what, and over what '
                 'period. Most misleading charts are honest about their data '
                 'and silent about their frame.']),
         paras=[
          'In the spring of last year a local campaign group and the police '
          'force responsible for the same district published figures for '
          'recorded crime, drawn from the same database and covering the same '
          'eight years. The two documents disagreed about almost nothing and '
          'left readers with opposite impressions, which is worth examining in '
          'detail because the methods used are entirely ordinary.',
          'The police chart plotted burglary and vehicle crime together from a '
          'baseline of zero. On that chart both lines sit high on the page and '
          'run almost flat: burglary declines from around 1,180 offences to '
          'about 1,020, and vehicle crime rises from 860 to a little over '
          '1,000. The visual impression is of a district in which not very '
          'much is happening, which is a fair description of a change of '
          'thirteen per cent over eight years.',
          'The campaign chart plotted the same two series on an axis that began '
          'at 800. Cutting away the bottom of the scale leaves only the part of '
          'each line that moves, and the result is dramatic: burglary appears '
          'to fall by more than half the height of the chart, and vehicle crime '
          'climbs steeply to cross it in 2021. Nothing in the data has changed. '
          'What has changed is how much of the chart is occupied by the '
          'difference, while the quantity itself takes up less and less of it.',
          'A third chart, published by a researcher who had read both, showed '
          'neither series as a count. It divided each figure by the number of '
          'households in the district, which had risen by about nine per cent '
          'over the period as new estates were completed. On that measure '
          'burglary falls more steeply than on either of the first two charts '
          'and vehicle crime is almost flat, because much of the apparent rise '
          'in vehicle crime is simply the arrival of more vehicles.',
          'None of the three charts contains an error. The police chart is the '
          'conventional choice and understates change; the campaign chart is '
          'the conventional choice for showing change and overstates it; the '
          'third is the most informative and is the hardest to read quickly, '
          'which is why it appeared in none of the coverage. A reader who sees '
          'only one of them has not been deceived so much as framed.',
          'It is worth adding that none of the three groups behaved badly. '
          'Each chose the convention of its own trade, and each would have '
          'defended that convention if challenged. The deception, if there is '
          'one, happens at the point where a chart leaves the document it was '
          'made for and travels alone.',
          'The practical lesson for anybody describing a chart in writing is '
          'that the structuring choice carries an argument. Organised by year, '
          'these data tell a story of stability. Organised by offence, they '
          'tell a story of two trends moving in opposite directions until they '
          'meet. Organised per household, they tell a third story in which one '
          'of those trends largely disappears. The honest answer names the '
          'basis it has chosen and keeps to it.'],
         items=[
          ('Which chart began its vertical axis above zero?',
           ['The police chart', 'The campaign chart', 'The researcher’s chart',
            'All three'], 1,
           'Paragraph 3: an axis that began at 800, which leaves only the '
           'moving part of each line visible.'),
          ('Which chart was least likely to be reproduced in the press?',
           ['The police chart', 'The campaign chart', 'The researcher’s chart',
            'None of them'], 2,
           'Paragraph 5: the most informative and the hardest to read quickly, '
           'which is why it appeared in none of the coverage.'),
          ('According to the article, much of the apparent rise in vehicle '
           'crime is explained by', ['better reporting', 'more vehicles',
            'a change of definition', 'the chosen baseline'], 1,
           'Paragraph 4: dividing by households shows the rise largely '
           'disappears, because more vehicles have arrived.'),
          ('Over the eight years, recorded burglary changed by about',
           ['three per cent', 'nine per cent', 'thirteen per cent',
            'fifty per cent'], 2,
           'Paragraph 2 gives the figures and names the change as thirteen per '
           'cent. The fifty is the height on the campaign chart, not a change '
           'in the data.'),
          ('The number of households in the district rose by roughly '
           '____________ per cent.', None, 'nine',
           'Paragraph 4, as new estates were completed. This is the figure the '
           'third chart divides by.'),
          ('The researcher\'s chart was the one most widely reported.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 5 says the third chart appeared in none of the '
           'coverage.',
           {0: 'True contradicts paragraph 5, which says it was not '
               'reported at all.', 2: 'Not Given is wrong because paragraph 5 states what '
               'happened to it.'}),
          ('None of the three charts contains an error.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 5 opens with exactly that statement before '
           'weighing them.',
           {1: 'False would need one of the charts to be wrong, and '
               'the text denies it.', 2: 'Not Given is wrong because paragraph 5 says it in '
               'those words.'})])],
   listen=[
    dict(heading='A statistician on axes and scales', part='Part 4',
         task='A lecture on presenting data', band='l4',
         qtype='Questions 37-42',
         script=[
          ('Lecturer', 'I want to spend this session on a question that sounds '
           'like a matter of taste and is not. Where should a chart start? The '
           'answer you were probably given at school is that it should start at '
           'zero, and like most rules given at school it is right about half '
           'the time and wrong in a way nobody explains.'),
          ('Lecturer', 'Start with why zero matters. When you draw a bar, the '
           'reader compares areas. A bar twice as tall reads as twice as much, '
           'because that is what a bar is for. If your axis starts at eighty '
           'and one bar reaches ninety while another reaches a hundred, the '
           'second bar is twice the height of the first and the quantity it '
           'stands for is eleven per cent larger. That is not a stylistic '
           'choice. It is a chart that says something false.'),
          ('Lecturer', 'Now the other half. A line chart is not read as area. '
           'It is read as slope, and slope is about change. If you are plotting '
           'body temperature over a day and you insist on a zero baseline, you '
           'will produce a perfectly flat line across the page, and you will '
           'have concealed the fever. For a quantity where zero is not a '
           'meaningful value, and where the interesting thing is movement '
           'movement, cutting the axis is not merely permitted. It is '
           'the only honest option available to you.'),
          ('Lecturer', 'So the rule is not about zero at all. The rule is that '
           'the axis should match what the reader is being asked to compare. '
           'Bars compare quantities, so bars start at zero. Lines compare '
           'change, so lines start wherever the change is legible, and the '
           'chart says plainly where that is.'),
          ('Lecturer', 'There is one more decision underneath both, and it is '
           'the one people miss. Before you choose an axis you choose a '
           'denominator. Crime counts, hospital admissions, accidents on a '
           'road: all of them rise when the population rises, and a count '
           'presented without its denominator is already a claim about cause. '
           'Divide by households, by patients, by vehicle miles, and very often '
           'the trend you were arguing about turns out to belong to the '
           'denominator, which is a different quantity altogether.'),
          ('Lecturer', 'In your own writing, the discipline I want is simple. '
           'Name the basis, name the period, and if you have cut the axis, say '
           'so in the sentence rather than in the small print.')],
         items=[
          ('The lecturer says the school rule about starting at zero is',
           ['always correct', 'correct about half the time',
            'a matter of taste', 'out of date'], 1,
           'Right about half the time and wrong in a way nobody explains, '
           'which is the structure of the whole lecture.'),
          ('Why must bar charts start at zero?',
           ['Bars are read as area', 'Bars are harder to draw',
            'Readers expect it', 'Bars show change'], 0,
           'A bar twice as tall reads as twice as much, because that is what a '
           'bar is for.'),
          ('In the temperature example, a zero baseline would',
           ['exaggerate the fever', 'conceal the fever',
            'make the chart unreadable', 'require a second axis'], 1,
           'A perfectly flat line across the page, having concealed the fever.'),
          ('The lecturer concludes that the axis should match',
           ['the size of the page', 'what the reader is asked to compare',
            'the convention in the field', 'the largest value'], 1,
           'Bars compare quantities and start at zero; lines compare change '
           'and start where the change is legible.'),
          ('A count presented without its denominator is described as',
           ['an error', 'already a claim about cause', 'incomplete data',
            'the usual practice'], 1,
           'Because counts rise with population, so presenting the count alone '
           'implies the rise belongs to the thing counted.'),
          ('What does the lecturer want students to do if they have cut an '
           'axis?',
           ['Avoid it entirely', 'Explain it in a footnote',
            'Say so in the sentence', 'Use a bar chart instead'], 2,
           'Say so in the sentence, not in the small print, which is '
           'the last line of the lecture.')])],
   speak=dict(
    part='Part 3', focus='How figures are presented',
    intro=('Part 3 answers are longer: four or five sentences. Answer, support, '
           'follow-up, second support. You are being asked to discuss, not to '
           'report, so the follow-up matters more here than anywhere '
           'else in the test.'),
    qs=['Why do you think the same figures can give people opposite '
        'impressions?',
        'Should journalists be trained in handling statistics? Why?',
        'Some people say the public cannot be expected to read charts '
        'carefully. How far do you agree?',
        'Is it the responsibility of the reader or the publisher to notice a '
        'misleading chart?'],
    shape=[('answer', 'Mostly because a chart decides what you compare before '
            'you have decided anything.'),
           ('support', 'If the axis starts high, the gap fills the page.'),
           ('follow-up', 'So the reader sees a difference where the data show '
            'a quantity.'),
           ('support', 'And very few people check the axis at all.'),
           ('follow-up', 'Which means the choice is effectively made for them.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Recorded crime in two categories',
         prompt=('The chart below shows recorded offences in two categories in '
                 'one district between 2016 and 2024. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=dict(kind='line', title='Recorded offences in Marchfield',
                     sub='two categories, 2016 to 2024',
                     x=['2016', '2018', '2020', '2022', '2024'],
                     series=[('Burglary', [1180, 1140, 1090, 1060, 1020]),
                             ('Vehicle crime', [860, 880, 910, 950, 1010])],
                     ylab='recorded offences'),
         model=[
          'The line graph shows the number of recorded offences in two '
          'categories, burglary and vehicle crime, in the district of '
          'Marchfield over the eight years from 2016 to 2024. Overall, the two '
          'categories moved steadily in opposite directions, and the gap '
          'between them, which was wide at the start of the period, had almost '
          'closed by the end of it.',
          'Burglary was the more common offence throughout, but it declined '
          'consistently. It began the period at about 1,180 offences a year, '
          'the highest figure on the chart, and fell at a fairly even rate, '
          'passing 1,090 in 2020 and finishing at roughly 1,020. The total '
          'decline over the period was therefore about 160 offences, or '
          'something over a tenth of the opening figure.',
          'Vehicle crime followed the opposite pattern at a very similar pace. '
          'It started well below burglary at around 860 offences, which was the '
          'lowest figure recorded in either category, and rose in every '
          'interval shown. By 2020 it stood at about 910, and it ended the '
          'period at a little over 1,000, an increase of roughly 150 offences.',
          'It should also be noted that the two lines converge without actually '
          'meeting. The difference between them narrows from more than 300 '
          'offences in 2016 to under 20 by 2024, so that by the end of the '
          'period the two categories were occurring at almost the same rate.'],
         notes=[
          'The Overall statement names the story that justified the structure: '
          'two series moving in opposite directions, and a gap that closes. '
          'The body paragraphs then take one series each.',
          'Every figure carries a description. Delete all the numbers and the '
          'answer still describes the chart, which is the test to apply to '
          'your own.',
          'The last paragraph does the comparison that would not fit inside '
          'either body paragraph. That is where a conclusion would have gone, '
          'and it is worth more than a conclusion.'],
         criterion=[('An Overall statement that states the pattern',
                     'Task Achievement'),
                    ('A declared basis for dividing the paragraphs',
                     'Coherence and Cohesion'),
                    ('Every number given with a description',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing change: pace, direction and extent in one clause',
    fix=dict(
     text=('Recorded theft fell sharply of 40 per cent between 2018 and 2020. '
           'The decline was steeply at first and then slowed. Over the same '
           'period the response rate to the survey fell from 42 to 29 per '
           'cent, which mean the later figures rest on a smaller sample. The '
           'two changes cannot be separated from one another.'),
     faults=[('fell sharply of 40 per cent',
              'fell sharply by 40 per cent',
              ('The size of a change takes by; of needs a noun, as in a fall '
               'of 40 per cent.')),
             ('The decline was steeply at first',
              'The decline was steep at first',
              ('After was the word describes the decline, so it needs the '
               'adjective steep, not the adverb steeply.')),
             ('which mean the later figures rest on a smaller sample',
              'which means the later figures rest on a smaller sample',
              ('Which here stands for the whole preceding clause and takes a '
               'singular verb.'))]),
    explain=('Task 1 rewards a writer who can say how fast as well as which '
             'way. English does this with an adverb inside the verb phrase or '
             'with a noun phrase carrying an adjective, and a good answer '
             'alternates between the two so that no sentence repeats the shape '
             'of the one before it.'),
    examples=['Burglary fell steadily throughout the period.',
              'There was a steady fall in burglary throughout the period.',
              'Vehicle crime rose sharply between 2020 and 2022.',
              'The increase in vehicle crime was sharpest between 2020 and '
              '2022.'],
    task='Rewrite each sentence using the other pattern.',
    items=[('Burglary declined gradually after 2018.',
            'There was a gradual decline in burglary after 2018.'),
           ('There was a marked rise in vehicle crime in 2022.',
            'Vehicle crime rose markedly in 2022.'),
           ('The gap narrowed considerably over the period.',
            'There was a considerable narrowing of the gap over the period.'),
           ('There was a slight recovery in 2023.',
            'The figure recovered slightly in 2023.'),
           ('Both figures levelled off towards the end.',
            'There was a levelling off in both figures towards the end.')]),
   vocab=[('baseline', 'the value an axis starts from'),
          ('denominator', 'the figure you divide by to make a rate'),
          ('converge', 'come closer together'),
          ('legible', 'able to be read clearly'),
          ('conventional', 'following the usual practice'),
          ('understate', 'present as smaller than it is'),
          ('interval', 'a gap between two points on a scale'),
          ('frame', 'the way a thing is presented, which shapes how it is read')],
   expr=[('Overall, the two categories moved in opposite directions',
          'the Overall statement: name the pattern, not the first figure'),
         ('It should also be noted that...',
          'introduces the comparison that did not fit the body paragraphs'),
         ('at a fairly even rate',
          'describes pace without claiming more precision than you have'),
         ('something over a tenth of the opening figure',
          'gives proportion as well as amount')],
   trans=['throughout', 'by contrast', 'therefore', 'so that'],
  ),
  # ------------------------------------------------------------- cycle 4 ---
  dict(
   sub='What a sample can tell you',
   step=4,
   read=[
    dict(heading='Why a thousand people can speak for a country',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 43-49',
         skill=('Matching Headings, in two parts',
                ['In move 2, read each heading and predict what a paragraph '
                 'under it would have to contain. You have read the opening, '
                 'so this is cheap.',
                 'In move 3, name the paragraph yourself before you look at '
                 'the list. You cannot be captured by an option you have not '
                 'read yet.']),
         paras=[
          'The most common objection to opinion polling is also the easiest to '
          'answer, and the fact that it keeps being made suggests that the '
          'answer is not widely understood. The objection is that a sample of '
          'a thousand people cannot possibly represent a country of fifty '
          'million, and that nobody asked me is evidence of the fact. The '
          'reply is that the size of the population is almost irrelevant to '
          'the precision of an estimate drawn from it, and that this is not a '
          'convenient claim made by pollsters but an arithmetical property of '
          'random selection.',
          'The underlying result is easier to see with an everyday comparison. '
          'A cook tasting a pot of soup does not need a larger spoonful for a '
          'larger pot. What the cook does need is for the soup to be stirred, '
          'because the spoonful is informative only if every part of the pot '
          'had an equal chance of ending up in it. The sample is the spoonful; '
          'stirring is randomisation; and the size of the pot enters the '
          'calculation almost not at all.',
          'Put formally, the uncertainty attached to a proportion estimated '
          'from a random sample depends on the square root of the number of '
          'observations, while the size of the population those observations '
          'came from barely enters the arithmetic. A sample of a thousand gives a margin of '
          'error of about three percentage points either way. To halve that '
          'margin you do not need twice as many respondents; you need four '
          'times as many, because of the square root. This is why professional '
          'samples cluster around a thousand: it is the point at which further '
          'precision starts costing more than it is worth.',
          'The square root also explains something that puzzles people when '
          'they first meet it. A national poll of a thousand and a city poll '
          'of a thousand carry the same margin of error, even though the city '
          'contains a fraction of the national population. The two estimates '
          'are equally precise. What differs is not their precision but what '
          'they are estimates of, which is a different kind of statement '
          'altogether and is the source of a great deal of confusion in '
          'reporting.',
          'All of this holds on one condition, and the condition does all the '
          'work. The sample must be drawn in such a way that every member of '
          'the population had a known chance of being selected. Where that '
          'holds, the arithmetic above is simply true. Where it does not, the '
          'arithmetic still produces a margin of error, the margin still looks '
          'reassuringly small, and it is measuring the wrong thing. It '
          'describes how much the estimate would move if the survey were '
          'repeated in the same flawed way, which is a question nobody wanted '
          'to ask.',
          'This is the point at which size becomes actively misleading. A '
          'larger sample drawn badly is not a better sample; it is a more '
          'confident wrong answer. The most famous failure in the history of '
          'polling involved two and a half million responses and called the '
          'result backwards, while a competitor using a few thousand called it '
          'correctly, because the competitor had thought about who was being '
          'reached and the first had thought only about how many.',
          'It is worth adding that the condition is not an ideal that real '
          'surveys approach and never reach. Several national statistical '
          'offices achieve it closely enough that the arithmetic holds, and '
          'they do so by spending heavily on persuading reluctant households '
          'instead of enlarging the initial list.',
          'The practical consequence for a reader is a simple reordering of '
          'questions. When a figure is quoted, the first question is not how '
          'many people were asked. It is how they were chosen, and what '
          'proportion of those chosen actually answered. Only when both of '
          'those have satisfactory answers does the sample size become '
          'interesting, and by then it usually turns out that a thousand was '
          'plenty.',
                ('There is one further consequence worth drawing out, because '
                 'it runs against the usual advice. A larger sample does not '
                 'repair a bad one. Doubling the number of people asked halves '
                 'nothing if the people who refuse differ systematically from '
                 'those who answer, and in that case the extra respondents '
                 'simply make a biased estimate more precise. This is why a '
                 'careful survey of a thousand can be worth more than a '
                 'careless one of fifty thousand, and why the sample size is '
                 'the figure most often quoted and least often decisive.')],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['A rule with one condition', 'The spoonful and the pot',
            'Why four times as many', 'What the famous failure showed'], 1,
           'The paragraph is the soup analogy and nothing else: the spoonful '
           'is the sample, stirring is randomisation.'),
          ('Choose the best heading for paragraph 5.',
           ['A rule with one condition', 'The spoonful and the pot',
            'Two polls, one margin', 'Reordering the reader’s questions'], 0,
           'It introduces the condition that every member had a known chance '
           'of selection, and says the condition does all the work.'),
          ('Choose the best heading for paragraph 7.',
           ['A rule with one condition', 'Why four times as many',
            'Reordering the reader’s questions', 'The spoonful and the pot'], 2,
           'The first question is not how many but how they were chosen, which '
           'is a reordering of what a reader usually asks.'),
          (
           'To halve a margin of error, a survey needs twice as many '
           'respondents.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 says the opposite and gives the reason: four '
           'times as many, because of the square root.',
           {0: 'Yes would need twice; paragraph 3 gives four times, '
               'from the square root.', 2: 'Not Given is wrong because the arithmetic is worked '
               'through.'}),
          (
           'The writer believes opinion polls should be reported less '
           'often.', ['Yes', 'No', 'Not Given'], 2,
           'The passage is about how to read a poll, not about how '
           'often polls should appear. Nothing is said either way.',
           {0: 'Yes would need a view on frequency, and none appears.', 1: 'No would need him to defend the present frequency, '
               'which he never does.'}),
          ('A sample of a thousand gives a margin of error of about '
           '____________ percentage points.', None, 'three',
           'Paragraph 3, given as about three either way, which is where the '
           'professional convention of a thousand comes from.'),
          ('A larger sample drawn badly is described as a more confident '
           '____________ answer.', None, 'wrong',
           'Paragraph 6, immediately before the example of the famous failure '
           'with two and a half million responses.')])],
   listen=[
    dict(heading='A lecture on sampling', part='Part 4',
         task='Why the condition matters more than the size', band='l4',
         qtype='Questions 50-55',
         script=[
          ('Lecturer', 'Last week we established that the margin of error on a '
           'proportion depends on the square root of your sample size and '
           'essentially not at all on the size of the population. Today I want '
           'to spend the whole hour on the condition attached to that result, '
           'because the condition is where every real survey either stands or '
           'falls.'),
          ('Lecturer', 'The condition is that selection is random: every member '
           'of the population has a known, non-zero chance of being chosen. '
           'Notice that this is a statement about the procedure, not about the '
           'people who end up in your sample. You cannot inspect a finished '
           'sample and tell whether it was randomly drawn. You can check '
           'whether it looks like the population on the characteristics you '
           'happen to have measured, and that is a weaker thing than it '
           'sounds.'),
          ('Lecturer', 'Here is why it is weaker. Suppose your sample matches '
           'the population exactly on age, sex and region, because you '
           'weighted it to do so. That tells you nothing whatever about '
           'whether it matches on the thing you are actually measuring, unless '
           'the thing you are measuring is related to age, sex and region and '
           'to nothing else. In practice the people who answer surveys differ '
           'from the people who do not in ways that no demographic variable '
           'captures: they are more joiners, more trusting of institutions, '
           'more likely to have time.'),
          ('Lecturer', 'This is why response rates matter so much, and why '
           'they are the number you should look for first. A survey with a '
           'seventy per cent response rate is a different animal from one with '
           'a six per cent response rate, even if both report a sample of a '
           'thousand and both quote the same margin of error. The second has a '
           'much larger unknown sitting inside it, and the margin of error '
           'does not describe that unknown at all. It describes only the '
           'sampling variability, which is the smaller of the two problems.'),
          ('Lecturer', 'I want to be careful here, because it is easy to take '
           'this too far. None of it means that surveys are worthless or that '
           'all figures are equally doubtful. A well-run survey with a '
           'declared method and a decent response rate is the best instrument '
           'we have for a great many questions, and the alternative to it is '
           'not certainty but anecdote. The point is narrower: the margin of '
           'error measures one source of uncertainty, the sources it does not '
           'measure are usually larger, and the figure is printed in a way that '
           'invites you to forget that.'),
          ('Lecturer', 'For your essays this term, the sentence I am looking '
           'for is not that a sample was too small. It is almost never too '
           'small. It is a sentence about who was reached and who was not.')],
         items=[
          ('The lecturer says the random selection condition is a statement '
           'about', ['the people in the sample', 'the procedure used',
            'the size of the population', 'the questions asked'], 1,
           'And he draws the consequence: you cannot inspect a finished sample '
           'and tell whether it was randomly drawn.'),
          ('Matching a sample to the population on age, sex and region tells '
           'you nothing unless',
           ['the sample is large enough',
            'the measured thing relates only to those variables',
            'the response rate is known', 'the survey is repeated'], 1,
           'That is the exact condition he gives, and it almost never holds.'),
          ('According to the lecturer, survey respondents tend to be',
           ['younger than average', 'wealthier than average',
            'more trusting of institutions', 'better educated'], 2,
           'He lists more joiners, more trusting of institutions, more likely '
           'to have time. Education is not mentioned.'),
          ('Which number does the lecturer say to look for first?',
           ['The sample size', 'The margin of error', 'The response rate',
            'The fieldwork dates'], 2,
           'A seventy per cent response rate is a different animal from a six '
           'per cent one, whatever the sample size.'),
          ('The margin of error describes',
           ['all sources of uncertainty', 'sampling variability only',
            'non-response', 'the weighting applied'], 1,
           'And he adds that the sources it does not measure are usually '
           'larger.'),
          ('What does the lecturer say the alternative to a well-run survey '
           'is?', ['A larger survey', 'Certainty', 'Anecdote',
            'Official statistics'], 2,
           'He raises this to stop students taking the scepticism too far.')])],
   speak=dict(
    part='Part 3', focus='Trusting a survey',
    followup=[(('You say you would want the response rate. Should news reports '
                'be required to give it?'),
               ('Required is strong, and I would accept it for one reason: the '
                'rate is the single number that most often explains a strange '
                'result, and it is also the easiest to leave out. A '
                'requirement that it be stated, without any interpretation, is '
                'a small burden and would kill a lot of nonsense before it '
                'travels.')),
              (('Why do you think people distrust polls more than other kinds '
                'of research?'),
               ('Because polls are checked in public and almost nothing else '
                'is. An election gives everybody a verdict on the method '
                'within a year, which no medical study has to survive, so '
                'polling looks less reliable while being far more frequently '
                'tested. The visibility is mistaken for weakness.')),
              ('Can an ordinary reader judge whether a survey is sound?',
               ('Not fully, and they can get most of the way with three '
                'questions: who was asked, who paid, and how many refused. '
                'None of those requires statistics, and between them they '
                'catch the majority of the published claims that turn out not '
                'to hold.'))],
    intro=('Keep the shape: answer, support, follow-up, support. The follow-up '
           'is where a 6.5 answer separates from a 6.0, because it is the '
           'sentence that explains instead of merely adding.'),
    qs=['What would make you trust a survey result?',
        'Should news reports be required to give the response rate?',
        'Why do you think people distrust polls more than other kinds of '
        'research?',
        'Is it possible for an ordinary reader to judge whether a survey is '
        'sound?'],
    shape=[('answer', 'Mainly how the people were chosen.'),
           ('support', 'A small sample chosen properly beats a huge one that '
            'anyone could join.'),
           ('follow-up', 'Because an open survey collects the people who felt '
            'strongly enough to volunteer.'),
           ('support', 'I would also want the response rate.'),
           ('follow-up', 'That tells you how much of the chosen sample '
            'actually answered.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Brainstorm and outline: should policy require survey '
                 'evidence?',
         prompt=('Some people believe that no government policy should be '
                 'introduced without survey evidence of public support. '
                 'Others say this would prevent necessary but unpopular '
                 'decisions. Do not write the essay yet. Brainstorm, then '
                 'build the outline below, applying the six tests.'),
         plan=('Survey evidence should inform policy but not govern it',
               [('A policy with no public support fails at the '
                 'implementation stage',
                 ['people comply with rules they consider legitimate',
                  'enforcement costs rise sharply without consent']),
                ('Some necessary decisions are unpopular at the moment they '
                 'are taken',
                 ['the benefit arrives after the next election',
                  'seat belts, smoking bans, water fluoridation'])]),
         notes=[
          'Each main idea is developable in four sentences. An idea you cannot '
          'support that fully is not a main idea, however true it is.',
          'The two ideas sit at the same level of generality and neither '
          'contains the other. If one can be filed under the other, you have '
          'one idea wearing two hats.',
          'The order is deliberate: the objection to the proposal comes '
          'second, because it is the one the conclusion will build on.'],
         criterion=[('Choosing distinct, equally weighted main ideas',
                     'Coherence and Cohesion'),
                    ('Ideas that answer the question, not the topic',
                     'Task Response')],
         instruct='  Produce the outline only. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Conditional reasoning: stating what a claim depends on',
    explain=('The passage turns on a condition, and so does most academic '
             'argument at this level. English has several ways to attach a '
             'condition to a claim, and they differ in how strongly they '
             'suggest the condition is met.'),
    examples=['Where selection is random, the arithmetic is simply true.',
              'Provided that the response rate is high, the estimate is '
              'reliable.',
              'Unless every member had a known chance of selection, the margin '
              'of error measures the wrong thing.',
              'The result holds only if the sample was drawn at random.'],
    task='Rewrite each sentence so the condition is explicit.',
    items=[('Random samples give reliable estimates.',
            'Where a sample is drawn at random, the estimate is reliable.'),
           ('The margin of error is meaningful.',
            'The margin of error is meaningful only if selection was random.'),
           ('A large sample is better.',
            'A large sample is better provided that it was properly drawn.'),
           ('Weighting corrects for non-response.',
            'Weighting corrects for non-response unless the absent differ from '
            'the present.'),
           ('The two polls are equally precise.',
            'The two polls are equally precise so long as both were randomly '
            'sampled.')]),
   vocab=[('proportion', 'a share of a whole, usually given as a percentage'),
          ('randomisation', 'selecting so that every member has a known chance'),
          ('respondent', 'a person who answers a survey'),
          ('response rate', 'the share of those selected who answered'),
          ('variability', 'how much a figure moves between repetitions'),
          ('demographic', 'relating to the measurable make-up of a population'),
          ('anecdote', 'a single case offered in place of evidence'),
          ('precision', 'how narrow an estimate is, not how correct')],
   expr=[('the condition does all the work',
          'marks the premise an argument actually rests on'),
         ('which is a question nobody wanted to ask',
          'points out that a measure answers the wrong question'),
         ('I want to be careful here, because it is easy to take this too far',
          'limits your own argument before an opponent does'),
         ('the alternative to it is not certainty but...',
          'refuses a false choice')],
   trans=['where', 'provided that', 'unless', 'only if'],
  ),

  # ------------------------------------------------------------- cycle 5 ---
  dict(
   sub='When the sample is the problem',
   step=5,
   read=[
    dict(heading='The poll that asked the wrong thousand',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 56-62',
         paras=[
          'Cycle 4 argued that sample size is the wrong thing to worry '
          'about. That argument is correct and it is incomplete, '
          'because it can leave a reader with the impression that the '
          'remaining problem, non-random selection, is a technical '
          'blemish that careful practitioners avoid. The history of '
          'the subject suggests otherwise, because the notable '
          'failures were not produced by careless amateurs. They were '
          'produced by well-resourced organisations using the best '
          'method of their day, and in several cases the flaw was '
          'invisible until after the result was known.',
          'The canonical example is a magazine poll of 1936, which mailed '
          'ballots to some ten million addresses, received two and a half '
          'million back, and predicted the wrong winner by a wide margin. The '
          'usual explanation given in textbooks is that the address list was '
          'drawn from telephone directories and vehicle registrations, and so '
          'over-represented the prosperous. That explanation is true and it is '
          'not sufficient, because a later re-analysis showed that the '
          'response pattern mattered more than the list did. Among those who '
          'received a ballot, supporters of one candidate returned it at '
          'substantially higher rates than supporters of the other.',
          'This distinction is worth holding on to, because the two problems '
          'have different remedies and only one of them can be fixed after the '
          'event. A biased frame can in principle be corrected by weighting, '
          'provided you know how the frame differs from the population. '
          'Differential response cannot, because the thing that determines '
          'whether somebody answers is the thing you are trying to measure. '
          'There is no demographic variable to weight on, since the division '
          'is not demographic.',
          'Modern failures have the same shape even where the technology is '
          'unrecognisable. Several widely reported polling misses in recent '
          'decades have been traced not to small samples or to crude frames, '
          'but to the quiet assumption that people who could not be reached, '
          'or who declined to answer, resembled those who did. Where that '
          'assumption fails, it fails in the direction of whatever made people '
          'reluctant, and reluctance is rarely distributed evenly across the '
          'question being asked.',
          'A second mechanism compounds the first. Polling organisations '
          'compare their results with each other before publication, and an '
          'organisation whose figure sits far from the others has a strong '
          'incentive to re-examine its method until the figure moves closer. '
          'Each such adjustment is defensible on its own. Their cumulative '
          'effect is that the published polls agree more closely than their '
          'underlying data warrant, and a reader who treats agreement between '
          'polls as independent confirmation is counting the same judgement '
          'several times over.',
          'None of this is an argument for ignoring polls, and it is worth '
          'being explicit about that, because the sceptical case is easy to '
          'overstate. Polls have a respectable record over long runs, they '
          'are more informative than the alternatives available, and the '
          'failures are memorable precisely because they are unusual. The '
          'argument is narrower: a poll is an estimate of what a particular '
          'method found among the people that method reached, and the step '
          'from that to a statement about a population is an inference, not a '
          'measurement.',
          'It should be added that the remedy most often proposed, which is '
          'simply to ask more people, is the one remedy that cannot work. It '
          'addresses the uncertainty that was already small and leaves '
          'untouched the one that produced the failure.',
          'The reader who takes one thing from these two cycles should take '
          'this. The number printed beside a poll, the margin of error, '
          'measures the smaller of the two uncertainties attached to it. The '
          'larger one is not printed, is not easily estimated, and is the one '
          'that has produced every famous failure in the field. A figure given '
          'to one decimal place, with a margin of error of three points and an '
          'unstated response rate, is a sentence written in three different '
          'registers of confidence at once.'],
         items=[
          ('Which paragraph explains why one kind of bias cannot be corrected '
           'afterwards?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'], 1,
           'Paragraph 3 distinguishes a biased frame, which weighting can '
           'address, from differential response, which it cannot.'),
          ('Which paragraph describes polls resembling each other more than '
           'their data justify?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'], 2,
           'Paragraph 5: each adjustment is defensible and the cumulative '
           'effect is false agreement.'),
          ('Which paragraph limits the writer’s own argument?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'], 2,
           'Paragraph 6 says explicitly that the sceptical case is easy to '
           'overstate and that polls have a respectable record.'),
          (
           'The writer believes the 1936 failure is fully explained by '
           'the address list used.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 calls that explanation true but not '
           'sufficient, and gives the response pattern as the larger '
           'factor.',
           {0: 'Yes would need sufficiency; paragraph 2 calls the '
               'address list true but not enough.', 2: 'Not Given is wrong because the failure is explained in '
               'detail.'}),
          (
           'The writer thinks polls should not be published before '
           'elections.', ['Yes', 'No', 'Not Given'], 2,
           'Publication timing is never discussed. Paragraph 6 defends '
           'polls in general but says nothing about when they appear.',
           {0: 'Yes would need a view on timing, which is never given.', 1: 'No would need him to defend pre-election publication, '
               'and he does not.'}),
          ('What cannot be corrected by weighting, according to paragraph 3?',
           None, 'differential response',
           'Because the thing determining whether somebody answers is the '
           'thing being measured, so there is no variable to weight on.'),
          ('The writer says the margin of error measures the ____________ of '
           'the two uncertainties.', None, 'smaller',
           'The final paragraph, which is also the sentence the whole unit '
           'has been building towards.')])],
   listen=[
    dict(heading='Two pollsters disagree about method', part='Part 4',
         task='A recorded discussion after a conference paper', band='l4',
         qtype='Questions 63-68',
         script=[
          ('Chair', 'Our two speakers disagree about what went wrong, which is '
           'why I have put them on the same panel. Dr Okonkwo, you first.'),
          ('Okonkwo', 'My position is that the industry keeps solving the '
           'previous failure. After 1936 everyone fixed the frame. After the '
           'misses of the nineteen-forties everyone fixed quota sampling. Each '
           'fix was correct and each left the underlying vulnerability intact, '
           'which is that we cannot observe the people who do not answer.'),
          ('Vasquez', 'I agree with the history; the conclusion is where we part. '
           'The vulnerability is real and it is bounded. We know roughly how '
           'large it can be, because we can compare pre-election polls with '
           'results over hundreds of contests. The average error is around two '
           'points. That is not a field in crisis; it is a field with a known '
           'error term that occasionally has a bad year and gets written about '
           'for a decade.'),
          ('Okonkwo', 'Two points on average, and the distribution has a tail. '
           'The years that matter are the years in the tail, and they are not '
           'random: they cluster around contests where something unusual was '
           'happening to who would admit their intention.'),
          ('Vasquez', 'Which is an argument for reporting the uncertainty '
           'honestly, not for abandoning the instrument. My objection is to '
           'the way the single figure is printed. If we published a range and '
           'refused to publish a central estimate, most of this conversation '
           'would disappear.'),
          ('Okonkwo', 'No editor would run it.'),
          ('Vasquez', 'No editor would run it at first. Editors ran '
           'probability forecasts for weather eventually, and nobody now '
           'expects a single temperature for Thursday.'),
          ('Chair', 'Is there anything you both agree on?'),
          ('Okonkwo', 'Response rates. Mine have fallen from sixty per cent to '
           'under ten in my working lifetime, and nothing in our methods has '
           'changed to compensate.'),
          ('Vasquez', 'Agreed, and I would add that the fall is the reason the '
           'margin of error has become actively misleading. It was a '
           'reasonable summary of our uncertainty when almost everyone '
           'answered. It is now a small and well-measured part of a large and '
           'badly measured whole.'),
          ('Chair', 'Does either of you think the figure should simply not be '
           'printed?'),
          ('Okonkwo', 'I would print it with the response rate beside it, in '
           'the same size of type. Not in a note at the bottom, and not in the '
           'methodology document nobody opens. If a reader saw six per cent '
           'next to the three points, the two numbers would do the arguing for '
           'us.'),
          ('Vasquez', 'That I would sign tomorrow. It is a smaller change than '
           'anything else either of us has proposed and it would do more than '
           'all of it.')],
         items=[
          ('What is Okonkwo’s main criticism of the industry?',
           ['It uses samples that are too small',
            'It keeps solving the previous failure',
            'It refuses to publish its methods',
            'It relies on telephone directories'], 1,
           'Each fix was correct and each left the underlying vulnerability '
           'intact.'),
          ('Vasquez argues that the error in polling is',
           ['unknowable', 'growing rapidly', 'bounded and roughly known',
            'caused by weighting'], 2,
           'Around two points on average across hundreds of contests, which is '
           'why she calls it a known error term.'),
          ('Okonkwo’s reply about the average error is that',
           ['the average is miscalculated', 'the distribution has a tail',
            'the contests are not comparable',
            'the comparison period is too short'], 1,
           'And the years in the tail are not random: they cluster around '
           'unusual contests.'),
          ('What does Vasquez propose instead of a single figure?',
           ['A larger sample', 'Publishing a range with no central estimate',
            'Delaying publication', 'Weighting by response rate'], 1,
           'She argues most of the dispute would disappear if a range were '
           'published and the central estimate withheld.'),
          ('Which comparison does Vasquez use to answer the objection that no '
           'editor would run it?',
           ['Medical testing', 'Weather forecasting', 'Financial reporting',
            'Sports results'], 1,
           'Editors eventually ran probability forecasts for weather, and '
           'nobody now expects a single temperature.'),
          ('What do both speakers agree about?',
           ['The 1936 failure', 'Falling response rates',
            'The use of ranges', 'The size of the tail'], 1,
           'Okonkwo raises it and Vasquez agrees, adding that it is why the '
           'margin of error has become misleading.')])],
   speak=dict(
    part='Part 3', focus='Evidence, uncertainty and decisions',
    sounds=[('Number phrases have a fixed rhythm, and breaking it is heard as '
             'an error even when the figure is right: a QUARter of the PEOple, '
             'THREE in TEN, roughly a THIRD.'),
            ('Say the figure and the thing it measures as one chunk with one '
             'pause after it, not two chunks with a gap in the middle. A '
             'quarter of people, pause, have no savings is clear; a quarter, '
             'pause, of people have no savings is not.'),
            ('Practise the comparison forms of this unit: up from, down to, '
             'compared with, against a figure of. Each is a single unit of '
             'sound and none takes a stress of its own.'),
            ('The word per cent is stressed on the second half, and candidates '
             'who stress the first sound uncertain about the number.'),
            ('Record yourself quoting three figures from this unit\'s charts. '
             'Listen for a pause that landed inside a number phrase.')],
    intro=('The hardest turn in the test. Four or five sentences, and at least '
           'one of them should concede something before you answer. A '
           'candidate who can give ground and still hold a position is '
           'demonstrating exactly what the criteria reward.'),
    qs=['Should governments make decisions that most people oppose?',
        'How should uncertainty be communicated to the public?',
        'Some people say experts should decide and the public should be '
        'consulted afterwards. What do you think?',
        'Has public trust in figures and experts changed where you live?'],
    shape=[('answer', 'Sometimes they have to, yes.'),
           ('support', 'Seat belt laws were unpopular when they were '
            'introduced.'),
           ('follow-up', 'And the benefit only showed up years later, by which '
            'time nobody objected.'),
           ('support', 'But I would want the unpopularity recorded, not '
            'denied.'),
           ('follow-up', 'Otherwise the next unpopular decision has nothing to '
            'point back to.')]),
   write=[
    dict(task='Task 2', fork=None,
         heading='Should policy require evidence of public support?',
         wband='essay',
         prompt=('Write the essay you planned in cycle 4. Some people believe '
                 'that no government policy should be introduced without '
                 'survey evidence of public support. Others say this would '
                 'prevent necessary but unpopular decisions. Discuss both '
                 'views and give your own opinion. Write at least 250 words.'),
         model=[
          'It is sometimes proposed that a government should introduce no '
          'measure without survey evidence that the public supports it. The '
          'proposal has an obvious appeal and, in my view, a decisive flaw: it '
          'mistakes a useful instrument for a source of authority. Evidence of '
          'public opinion should inform a decision without being allowed to '
          'settle it.',
          'The case for the requirement is stronger than it is usually given '
          'credit for. A measure that commands no support tends to fail at the '
          'point of implementation, not at the point of announcement. '
          'People comply with rules they regard as legitimate and evade those '
          'they do not, so that enforcement costs rise sharply where consent '
          'is absent. On this argument, consulting opinion is not weakness but '
          'competence, since a policy nobody will follow achieves nothing '
          'whatever it was intended to achieve.',
          'The difficulty is that some necessary decisions are unpopular at the '
          'moment they are taken and only become obviously right afterwards. '
          'Compulsory seat belts, restrictions on smoking in public places and '
          'the removal of lead from fuel were all resisted when introduced, in '
          'some cases strongly, and all are now unremarkable. A rule requiring '
          'demonstrated support before action would have delayed each of them '
          'by a decade, and the cost of that delay would have been paid in '
          'lives rather than in column inches.',
          'There is also a practical objection which the debate usually '
          'ignores. Survey evidence is itself uncertain, and the uncertainty '
          'that matters is not the margin of error printed beside the figure '
          'but the unmeasured question of who answered and who did not. A rule '
          'that made policy depend on such a figure would hand real power to '
          'whoever designed the question, which is not an improvement in '
          'democratic accountability but a transfer of it to an unaccountable '
          'place.',
          'My own position is therefore that governments should be required to '
          'publish the evidence they hold about public opinion, and to explain '
          'themselves when they act against it, but should not be prevented '
          'from acting. That preserves what is valuable in the proposal, which '
          'is transparency, while leaving the responsibility for the decision '
          'where it can be held to account.'],
         notes=[
          'Structure 3: two positions are set out properly and the conclusion '
          'supplies a third that is not a compromise between them but a '
          'different arrangement — publish and explain, instead of requiring or '
          'ignoring.',
          'The fourth paragraph introduces an argument the prompt did not '
          'suggest. At 6.5 and above, one idea the examiner has not seen in '
          'the previous twenty scripts is worth more than two that are in all '
          'of them.',
          'The concession in paragraph 2 is genuine: the opposing case is '
          'called stronger than it is usually given credit for, and then '
          'answered. A straw man costs marks on Task Response even when the '
          'English is good.'],
         model65=[
                  'Some people believe that no government policy '
                  'should be introduced without evidence of public '
                  'support. I partly agree.',
                  'There is a good case for requiring such evidence. A '
                  'policy that most people oppose is hard to maintain, '
                  'and governments that ignore opinion lose the trust '
                  'they need for the next decision. Asking also brings '
                  'information that officials do not have, because the '
                  'people affected know things the department cannot '
                  'measure.',
                  'But public support is a weak test on its own. '
                  'Opinion on a new idea is often unformed, and '
                  'answers change with the wording of the question. '
                  'Many measures that are now popular, such as seat '
                  'belts and smoking bans, were unpopular before they '
                  'were introduced and approved afterwards.',
                  'I think governments should be required to consult, '
                  'to publish what they heard and to say why they '
                  'decided as they did. That is different from '
                  'requiring majority support in advance. The duty '
                  'should be to explain, because a policy that cannot '
                  'be explained is usually a bad one.',
                  ],
         gap65=[
                'It distinguishes a majority from an informed majority '
                'and says which one the question is really about.',
                'It explains why support measured before a policy and '
                'after it differ systematically, instead of giving '
                'examples.',
                'It proposes a duty that can be audited, where this '
                'answer proposes a practice.',
                ],
         criterion=[('A third position that is not a compromise',
                     'Task Response'),
                    ('A genuine concession before the objection',
                     'Task Response'),
                    ('Specific examples in place of general assertion',
                     'Lexical Resource')],
         instruct='  Write at least 250 words in 40 minutes, from your outline.',
         lines=20)],
   gram=dict(
    point='Concession and rebuttal: giving ground without losing the argument',
    explain=('A 6.5 essay concedes. The structures below let you accept part '
             'of an opposing case and then limit it, which reads as judgement '
             'as indecision. The pattern is always the same: grant '
             'the point, then name what it does not reach.'),
    examples=['The case is stronger than it is usually given credit for, but '
              'it does not reach the harder cases.',
              'That is true, and it is beside the point.',
              'Admittedly the figure is reliable; the comparison it is used '
              'for is not.',
              'While the objection has force, it is an argument about layout, '
              'where the principle is untouched.'],
    task='Concede the first clause and then limit it.',
    items=[('Surveys are useful.',
            'Surveys are useful, but they measure what a method reached.'),
           ('The sample was large.',
            'The sample was large, and size was never the problem.'),
           ('Polls have a good record.',
            'Polls have a good record, though the failures cluster in '
            'unusual years.'),
           ('The margin of error was published.',
            'The margin of error was published, but it measures the smaller '
            'uncertainty.'),
           ('Weighting corrects for non-response.',
            'Weighting corrects for non-response only where the absent '
            'resemble the present.')]),
   vocab=[('differential', 'differing between groups in a systematic way'),
          ('canonical', 'the standard example everybody cites'),
          ('compound', 'make an existing problem worse'),
          ('cumulative', 'building up through repeated small additions'),
          ('inference', 'a step from evidence to a conclusion'),
          ('warrant', 'to justify; or the justification itself'),
          ('blemish', 'a small flaw in something otherwise sound'),
          ('register', 'the level of formality or confidence of language')],
   expr=[('true and not sufficient',
          'accepts an explanation while denying it is the whole one'),
         ('is an inference, not a measurement',
          'marks where evidence stops and reasoning begins'),
         ('it is worth being explicit about that',
          'flags a limit on your own argument'),
         ('which is not an improvement but a transfer of it',
          'rejects a proposal by renaming what it actually does')],
   trans=['admittedly', 'nevertheless', 'therefore', 'while'],
  ),
 ],
 technique=dict(
  title='Predict the form, never the content',
  body=('This unit meets the rule that costs the most marks when it is broken. '
        'In move 2 you predict what each answer will look like: a number, a '
        'date, a name, a short noun phrase, a plural. You never predict what '
        'it will say. Predicting content manufactures the expectation that '
        'turns Not Given into True and makes you hear in a recording the word '
        'you went in expecting.'),
  panel=[('Orient', 'Title, headings, first paragraph. Thirty seconds.'),
         ('Load the questions',
          'Read them all. Mark the words that carry each one, as a memory aid '
          'and never as a string to hunt for.'),
         ('The paragraph loop',
          'Read one paragraph, then close what it answered. Bump into an '
          'answer, underline it and keep reading to the end of the paragraph.')],
  task='For each gap, write only what form the answer must take.',
  qs=['The survey contacts about ____________ households each year.',
      'Interviewers call back up to ____________ times.',
      'Income is reported in ____________ instead of exact figures.',
      'The voucher is worth ____________.',
      'Anonymised records are released to ____________ under licence.']),
 outlining=dict(
  title='Main ideas and the details under them',
  body=('An outline is main ideas with their supports, and the judgement that '
        'matters is which brainstormed ideas become main ideas. Six tests: '
        'distinct, roughly equal in weight, answering the question and not '
        'the topic, covering enough between them, developable in four '
        'sentences, and ordered on purpose.'),
  frame=('Surveys are worth taking part in',
         [('They produce information nobody else collects',
           ['no commercial source covers every household',
            'the record goes back decades']),
          ('Refusing changes the result, not just the sample size',
           ['the people who refuse are not like the people who answer',
            'weighting cannot repair that'])]),
  task='Sort these eight sentences into the frame above: two are main ideas, '
       'four are supports, and two belong to neither.',
  qs=['A survey that people volunteer for is not a random sample.',
      'The interview takes about forty minutes.',
      'Census records are used by historians a century later.',
      'My neighbour was asked last year and did not mind.',
      'Non-response is not spread evenly across the population.',
      'Weighting counts under-represented groups more heavily.',
      'The voucher is worth twenty pounds.',
      'Commercial data covers customers, not citizens.'],
  answers=['main idea 1', 'neither', 'support (idea 1)', 'neither',
           'support (idea 2)', 'support (idea 2)', 'neither',
           'support (idea 1)']),
 candos=['I can read a public notice for the action it requires',
         'I can predict the form of an answer without predicting its content',
         'I can write a formal letter that develops all three bullets',
         'I can use the passive where the agent does not matter',
         'I can tell a main idea from a supporting detail'],
 tip=('When a question asks for a number, decide before you listen whether it '
      'wants a count, an amount, a time or a reference. Half of all lost marks '
      'in Listening Part 1 are the right number in the wrong gap.'),
)
