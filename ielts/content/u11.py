# -*- coding: utf-8 -*-
"""Unit 11 - Family and Society. IELTS Volume 2, band 5.5."""

_HH = dict(kind='bar',
           title='Average household size in four countries',
           sub='number of people per household, 1970 and 2020',
           ylab='people per household',
           cats=['Japan', 'Spain', 'Sweden', 'Mexico'],
           series=[('1970', [3.7, 3.8, 2.6, 5.4]),
                   ('2020', [2.2, 2.5, 1.8, 3.6])])

UNIT = dict(
 n=11, vol=2, level='B1+', band='5.5',
 theme='Family and Society',
 opener=(
   'This unit is about families and how they are changing. It starts with '
   'the office where births and marriages are recorded, moves to the people '
   'who look after relatives at home, and then looks at two facts that '
   'surprise most readers: households almost everywhere are getting '
   'smaller, and almost no government has managed to change that. The '
   'technique page teaches the question type that costs more marks than any '
   'other at this band, which is Yes, No or Not Given.'),

 cycles=[
  dict(
   sub='Registering a change',
   step=1,
   read=[
    dict(heading='Registering a birth, a marriage or a change of name',
         kind='Procedure notice',
         task='Flow-chart completion and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A procedure notice is read for the order of the steps and '
                'the deadline',
                ['Every notice like this has one time limit in it. Find it '
                 'first and underline it, because two or three questions '
                 'will come from that one sentence.',
                 'Then read for the order. Flow-chart questions follow the '
                 'order of the text, so once you find step one you are '
                 'reading forwards, not searching.']),
         paras=[
          'A birth must be registered within 42 days. You do this at the '
          'register office for the district where the baby was born, or at '
          'any register office if you cannot travel to that one.',
          'Bring proof of your own identity. A passport or a driving licence '
          'is enough. You do not need to bring the baby.',
          'The person who registers the birth is called the informant. For a '
          'married couple, either parent can do this. For an unmarried '
          'couple, both parents must come if both names are to appear on the '
          'certificate.',
          'The first copy of the certificate is free. Extra copies cost '
          '£12.50 each on the day, and £35 if you order them later. Most '
          'people need two or three copies, so it is cheaper to decide at '
          'the appointment.',
          'A marriage is registered on the day by the person who conducts '
          'the ceremony. You do not need a separate appointment, but you '
          'must give notice at least 29 days before the wedding.',
          'A change of name is different. You do not register it at the '
          'register office. You sign a deed poll, and then send it to the '
          'organisations that hold your records.'],
         items=[
          ('A birth must be registered within ____________ days.', None,
           '42', 'Paragraph 1, the one time limit in the notice.'),
          ('To register a birth you must bring proof of your own '
           '____________.', None, 'identity',
           'Paragraph 2: a passport or a driving licence.'),
          ('The person who registers the birth is called the',
           ['registrar', 'informant', 'applicant', 'witness'], 1,
           'Paragraph 3, which also says who may do it.',
           {0: 'The registrar is the official who records it, not the '
               'person who reports it.', 2: 'The passage uses no such word for the person who '
               'registers a birth.', 3: 'A witness is needed at a marriage, not at a birth '
               'registration.'}),
          ('Extra copies of a certificate cost ____________ each on the '
           'day.', None, '£12.50',
           'Paragraph 4, against £35 if ordered later.'),
          ('Notice of a marriage must be given at least ____________ days '
           'before the wedding.', None, '29',
           'Paragraph 5, although the marriage itself is registered on the '
           'day.'),
          ('A change of name is made by signing a',
           ['certificate', 'deed poll', 'statutory form', 'register entry'],
           1, 'Paragraph 6, and it is not done at the register office.',
           {0: 'A certificate is what the register office issues, not '
               'what you sign.', 2: 'No form of that name appears; paragraph 6 names a deed '
               'poll.', 3: 'A change of name is not entered in the register at '
               'all.'})]),
    dict(heading='Fees and documents required',
         kind='Information table', task='Matching features',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Birth certificate, first copy: no charge. You must bring '
          'identity documents for the informant. Issued at the '
          'appointment.',
          'Birth certificate, extra copy ordered on the day: £12.50. No '
          'extra documents are needed. Issued at the appointment.',
          'Birth certificate, copy ordered later: £35. You must give the '
          'date and place of birth and both parents’ names. Posted within '
          'ten working days.',
          'Marriage certificate, copy ordered later: £35. You must give the '
          'date and place of the marriage. Posted within ten working days.',
          'Certified copy for use abroad: £85. You must send the certificate '
          'you already hold. Returned within fifteen working days, and the '
          'office will not accept a photocopy.',
          'Replacement after loss or damage: £35. You must give the date '
          'and place of the event and sign a short declaration. Posted '
          'within ten working days, and the lost copy is cancelled.'],
         items=[
          ('Which document costs nothing?',
           ['the first birth certificate', 'an extra copy on the day', 'a copy ordered later', 'a certified copy for abroad'],
           0, 'The first copy is issued free at the appointment.',
           {1: 'An extra copy on the day costs twelve pounds fifty.', 2: 'A copy ordered later costs thirty-five pounds.', 3: 'A certified copy for abroad requires you to send one '
               'you already hold.'}),
          ('Which document requires you to send one you already hold?',
           ['the first birth certificate', 'an extra copy on the day', 'a marriage certificate copy', 'a certified copy for abroad'],
           3, 'And a photocopy will not be accepted.',
           {0: 'The first birth certificate costs nothing.', 1: 'An extra copy on the day needs no extra documents.', 2: 'A marriage certificate copy needs the date and place '
               'only.'}),
          ('Copies ordered later are posted within ____________ working '
           'days.', None, 'ten',
           'This applies to both birth and marriage certificates.'),
          ('A certified copy for use abroad costs £____________.', None,
           '85', 'The most expensive item in the table.')])],
   listen=[
    dict(heading='Booking an appointment at the register office',
         part='Part 1',
         task='A telephone conversation with a register office', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Clerk', 'Eastgate Register Office, good morning.'),
          ('Caller', 'Hello. I need to register my son’s birth.'),
          ('Clerk', 'Of course. When was he born?'),
          ('Caller', 'The ninth of March.'),
          ('Clerk', 'Then you have until the twentieth of April. Which '
           'hospital?'),
          ('Caller', 'St Botolph’s.'),
          ('Clerk', 'That is our district, so you can come here. Are you '
           'married to the mother?'),
          ('Caller', 'No, we are not married.'),
          ('Clerk', 'Then you both need to come, if you both want to be on '
           'the certificate.'),
          ('Caller', 'We do. What do we bring?'),
          ('Clerk', 'Photo identity for each of you. A passport or a '
           'driving licence.'),
          ('Caller', 'Do we bring the baby?'),
          ('Clerk', 'You can, and you do not have to. Most people do.'),
          ('Caller', 'How long does it take?'),
          ('Clerk', 'About thirty minutes.'),
          ('Caller', 'And copies?'),
          ('Clerk', 'The first is free. Extra ones are twelve pounds fifty '
           'on the day.'),
          ('Caller', 'How many do people usually take?'),
          ('Clerk', 'Two or three. If you order later it is thirty-five '
           'pounds, so it is worth deciding here.'),
          ('Caller', 'Then three, please.'),
          ('Clerk', 'I will note that. Can you come on Thursday the '
           'fourth?'),
          ('Caller', 'What time?'),
          ('Clerk', 'Ten fifteen.'),
          ('Caller', 'That is fine.'),
          ('Clerk', 'Your reference is B as in bravo, seven two four.'),
          ('Caller', 'B seven two four. And do we pay on the day?'),
          ('Clerk', 'Yes, by card at the desk. We cannot take cash any '
           'more.'),
          ('Caller', 'Thank you.')],
         items=[
          ('Date of birth: ____________ March', None, 'ninth',
           'The deadline is then the twentieth of April.'),
          ('Hospital: St ____________', None, 'Botolph’s',
           'Which the clerk says is in their district.'),
          ('Both parents must attend because they are not '
           '____________.', None, 'married',
           'And both names are to appear on the certificate.'),
          ('Number of copies ordered: ____________', None, 'three',
           'Decided at the appointment because it is cheaper.'),
          ('Appointment: Thursday the fourth at ____________', None,
           '10.15', 'Thirty minutes is allowed for it.'),
          ('Reference: B-____________', None, '724',
           'The booking reference is spelled out as the call ends.')])],
   speak=dict(
    part='Part 1', focus='Your family and where they live',
    intro=('Two or three sentences for each question. Give one real '
           'detail.'),
    qs=['Do you have a large family or a small one?',
        'Do your relatives live near you?',
        'How often do you see them?',
        'Do families in your country usually live close together?'],
    shape=[('answer', 'Small. Two brothers and no cousins at all.'),
           ('support', 'My brothers both live about an hour away by '
            'train.'),
           ('follow-up', 'So we meet about once a month, usually at my '
            'mother’s.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking for a certified copy of a record',
         prompt=('You need a certified copy of a document from a register '
                 'office. Write a letter to the office. In your letter: say '
                 'which document you need; explain why you need it; ask '
                 'what you must send and how long it will take. Write at '
                 'least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing to request a certified copy of my marriage '
          'certificate. The marriage took place at Eastgate Register Office '
          'on 14 June 2019, and my reference number is M-2291.',
          'I need the certified copy because I have applied for a work visa '
          'and the embassy will not accept the certificate I already hold. '
          'They have asked for a copy that has been certified for use '
          'abroad, and they need it by 30 April.',
          'I understand from your website that the fee is £85 and that I '
          'must send you the certificate I have. Could you confirm that '
          'this is correct, and tell me whether you also need proof of my '
          'identity?',
          'Could you also confirm how long the process takes? Your website '
          'says fifteen working days, and I would like to know whether that '
          'is counted from the day you receive my letter.',
          'I can be reached on 07700 900412 if anything is missing.',
          'Yours faithfully,',
          'Patience Oyelowo'],
         notes=[
          'The first paragraph names the document, the date and the '
          'reference number. A reader who has that can find your record in '
          'a minute, and a letter that makes the reader search is a letter '
          'that waits.',
          'The reason is specific: a visa, an embassy, a date. "I need it '
          'urgently" tells the reader nothing they can act on. A date tells '
          'them whether fifteen working days is enough.',
          'The two questions at the end are closed questions. They can be '
          'answered yes or no, which means the reply will come back faster '
          'than a reply to "please tell me about the process".'],
         criterion=[('Naming the record so it can be found',
                     'Task Achievement'),
                    ('A reason with a date in it', 'Task Response'),
                    ('Questions that can be answered yes or no',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Indirect questions and formal requests',
    explain=('A direct question can sound abrupt in a formal letter. An '
             'indirect question is longer and softer, and it is what '
             'examiners expect in a request at this band.'),
    examples=['Could you confirm that this is correct?',
              'I would like to know whether that is counted from the day '
              'you receive my letter.',
              'I am writing to request a certified copy of my marriage '
              'certificate.',
              'Could you also tell me what proof of identity you need?'],
    task='Rewrite each direct question as an indirect one.',
    items=[('How much is it?',
            'Could you tell me how much the certified copy costs?'),
           ('When will it arrive?',
            'I would like to know when I can expect to receive it.'),
           ('Do I need my passport?',
            'Could you confirm whether I need to send my passport?'),
           ('Why is it so expensive?',
            'I would be grateful if you could explain what the fee '
            'covers.'),
           ('Send me a copy.',
            'I am writing to request a copy of my marriage '
            'certificate.')]),
   vocab=[('certificate', 'an official paper that records an event'),
          ('certified copy', 'a copy an office states is genuine'),
          ('deed poll', 'a document used to change a name'),
          ('register office', 'the local office that records births and '
           'marriages'),
          ('informant', 'the person who reports a birth'),
          ('entry', 'one record in an official register'),
          ('notice', 'a formal statement given before an event'),
          ('district', 'the area one office is responsible for')],
   expr=[('I am writing to request a certified copy of',
          'the opening line of a formal request'),
         ('Could you confirm that this is correct',
          'a closed question that gets a fast reply'),
         ('I understand from your website that',
          'shows you have already looked'),
         ('I can be reached on', 'offers the reader a quicker route')],
   trans=['furthermore', 'in addition', 'for this reason', 'as a result'],
  ),

  dict(
   sub='Who looks after whom',
   step=2,
   read=[
    dict(heading='Four households and their caring arrangements',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Ndidi: I look after my mother, who is 81 and lives with us. I '
          'gave up full-time work three years ago and I do not regret it. '
          'What I did not expect was how quickly my own friendships '
          'disappeared.',
          'B  Marek: My father is in a care home and I visit twice a week. '
          'People tell me that must be easier than having him at home. It is '
          'easier physically and it costs us nine hundred pounds a month, '
          'which is most of my wife’s salary.',
          'C  Adaeze: Three of us share the care of our aunt. My sister does '
          'weekdays, I do weekends, and my brother pays for the cleaner. We '
          'wrote it down at the start, and that piece of paper has stopped '
          'about ten arguments.',
          'D  Bronwen: I care for my husband, who had a stroke at 54. I get '
          'four hours of respite a week. Four hours is not nothing, and it '
          'is also not enough to see a dentist, do the shopping and sit '
          'down.'],
         items=[
          ('Which person gave up work to provide care?',
           ['Ndidi', 'Marek', 'Adaeze', 'Bronwen'], 0,
           'Three years ago, and she says she does not regret it.',
           {1: 'Marek says the arrangement is expensive.', 2: 'Adaeze shares the care with her sister and brother.', 3: 'Bronwen cares for her husband and gets four hours of '
               'respite.'}),
          ('Which person shares the care with other family members?',
           ['Ndidi', 'Marek', 'Adaeze', 'Bronwen'], 2,
           'Weekdays, weekends and the cost of a cleaner.',
           {0: 'Ndidi gave up work to provide care.', 1: 'Marek says the arrangement is expensive.', 3: 'Bronwen cares for her husband alone, with four hours '
               'of respite.'}),
          ('Which person says the arrangement is expensive?',
           ['Ndidi', 'Marek', 'Adaeze', 'Bronwen'], 1,
           'Nine hundred pounds a month, most of a salary.',
           {0: 'Ndidi gave up work to provide care.', 2: 'Adaeze names no figure; her brother pays for the '
               'cleaner.', 3: 'Bronwen talks about respite hours rather than cost.'}),
          ('Which person mentions a written agreement?',
           ['Ndidi', 'Marek', 'Adaeze', 'Bronwen'], 2,
           'Written at the start, and it has prevented arguments.',
           {0: 'Ndidi gave up work to provide care.', 1: 'Marek says the arrangement is expensive.', 3: 'Bronwen mentions no agreement, only the hours she is '
               'given.'}),
          ('Ndidi regrets leaving her job.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says she does not regret it, which is the opposite.',
           {0: 'Yes would need regret; she says the opposite in her '
               'own words.', 2: 'Not Given is wrong because she answers the question '
               'directly.'}),
          ('Bronwen thinks four hours of respite is useless.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says it is not nothing, and also not enough.',
           {0: 'Yes would need uselessness; she calls it not nothing.', 2: 'Not Given is wrong because she rates the four hours.'})])],
   listen=[
    dict(heading='A short talk: who looks after whom', part='Part 2',
         task='A talk to a local carers group', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'Welcome. I want to give you three numbers tonight, '
           'and then tell you what the third one means for this room.'),
          ('Speaker', 'The first number is one in eight. About one adult in '
           'eight in this country is caring for somebody. That is more '
           'people than work in the health service.'),
          ('Speaker', 'The second number is sixty per cent. About sixty per '
           'cent of carers are women, and the gap is widest between the '
           'ages of fifty and sixty-four.'),
          ('Speaker', 'The third number is the one I want you to remember. '
           'Two years. That is the average time between somebody becoming a '
           'carer and somebody calling an office like ours for the first '
           'time. Two years of doing it alone before asking.'),
          ('Speaker', 'The reason is almost never pride. When we ask, people '
           'say they did not know they counted as a carer. They were '
           'helping their mother. Nobody uses the word carer about '
           'themselves until somebody else uses it first.'),
          ('Speaker', 'So the most useful thing you can do, if you take one '
           'thing from tonight, is to use the word to somebody who has not '
           'heard it applied to them. It is worth more than any leaflet we '
           'print.'),
          ('Speaker', 'And when you do, give them one number as well. Tell '
           'them that one adult in eight is doing what they are doing. '
           'People who think they are the only one in the street behave '
           'differently once they know they are not.')],
         items=[
          ('About one adult in ____________ is caring for somebody.', None,
           'eight', 'More people than work in the health service.'),
          ('The proportion of carers who are women is about',
           ['forty per cent', 'fifty per cent', 'sixty per cent', 'eighty per cent'],
           2, 'And the gap is widest between fifty and sixty-four.',
           {0: 'Forty per cent would be the share of carers who are '
               'men.', 1: 'Fifty and sixty-four are the ages where the gap is '
               'widest.', 3: 'No figure of that size appears anywhere in the talk.'}),
          ('On average, people wait ____________ years before asking for '
           'help.', None, 'two',
           'The number the speaker most wants remembered.'),
          ('The usual reason for waiting is that people',
           ['are too proud', 'do not know they count as a carer', 'cannot afford it', 'do not trust the office'],
           1, 'They say they were simply helping a relative.',
           {0: 'The speaker says the reason is almost never pride.', 2: 'Cost is not given as a reason for the two-year delay.', 3: 'Trust is not mentioned; people simply do not use the '
               'word.'})]),
    dict(heading='Two carers compare their weeks', part='Part 3',
         task='A conversation between two carers', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Bronwen', 'How many hours do you actually get to yourself?'),
          ('Ndidi', 'Properly to myself? About four.'),
          ('Bronwen', 'Same. Four. And everybody tells me that is '
           'something.'),
          ('Ndidi', 'It is something. It is not a life.'),
          ('Bronwen', 'What do you do with them?'),
          ('Ndidi', 'Shopping, mostly. Which is not rest, it is just a '
           'different job.'),
          ('Bronwen', 'That is the part people outside do not see. The four '
           'hours get spent on the things you cannot do with him there, so '
           'they are the worst four hours of the week, not the best.'),
          ('Ndidi', 'Have you asked for more?'),
          ('Bronwen', 'I asked in March. They said the budget was '
           'committed until April.'),
          ('Ndidi', 'And in April?'),
          ('Bronwen', 'I did not ask again. I should have.'),
          ('Ndidi', 'That is the thing I would change about myself too. I '
           'ask once and treat the answer as permanent.'),
          ('Bronwen', 'Can I say something that might sound hard?'),
          ('Ndidi', 'Go on.'),
          ('Bronwen', 'You said you gave up work and do not regret it. I '
           'believe you. I also think you should have been told what it '
           'would cost your pension, and nobody told you.'),
          ('Ndidi', 'Nobody did. I found out last year.'),
          ('Bronwen', 'That is the thing I would put on the first page of '
           'every leaflet. Not the hours. The pension.'),
          ('Ndidi', 'Shall we ask them together in April?'),
          ('Bronwen', 'Yes. Two people asking is harder to put off than '
           'one.'),
          ('Ndidi', 'Shall I bring the letter they sent you in March?'),
          ('Bronwen', 'Bring it. It says the budget was committed, which '
           'means it was not refused, and I had read it as a refusal for '
           'eight months.'),
          ('Ndidi', 'That is the whole problem with these letters.'),
          ('Bronwen', 'It is. They are written so that nobody has said '
           'no.')],
         items=[
          ('How many hours to themselves does each woman get?',
           ['two', 'four', 'six', 'eight'], 1,
           'They discover they have the same number.',
           {0: 'Two years is the delay before carers ask for help.', 2: 'No such number is given for the hours either woman '
               'gets.', 3: 'Eight months is how long one letter was misread as a '
               'refusal.'}),
          ('Ndidi spends most of those hours',
           ['resting', 'shopping', 'visiting friends', 'sleeping'], 1,
           'Which she says is a different job rather than rest.',
           {0: 'She says shopping is a different job rather than rest.', 2: 'Ndidi says earlier that her own friendships '
               'disappeared.', 3: 'Sleep is not among the things she names doing.'}),
          (
           'Bronwen says the hours are spent on things that cannot be '
           'done',
           ['at the weekend', 'with him there', 'without money', 'in the evening'],
           1,
           'Which is why she calls them the worst hours of the week.',
           {0: 'The respite hours are weekly, and no day is named.', 2: 'Cost is what Marek raises, not what Bronwen says here.', 3: 'No time of day is given for the four hours.'}),
          ('Bronwen did not ask again in April because she',
           ['was refused', 'forgot', 'did not ask', 'was told not to'],
           2,
           'She says she should have, and treats it as her own error.',
           {0: 'She says the letter was not a refusal, though she read '
               'it as one.', 1: 'She does not say she forgot, but that she should have '
               'asked.', 3: 'Nobody told her not to ask; the letter was about '
               'March.'}),
          (
           'What does Bronwen think Ndidi should have been told about?',
           ['the respite hours', 'the cost to her pension', 'the care home fees', 'the waiting list'],
           1, 'Which Ndidi only found out last year.',
           {0: 'Bronwen says the hours are what leaflets already put '
               'first.', 2: 'Care home fees belong to Marek, not to Ndidi.', 3: 'No waiting list is mentioned in the conversation.'}),
          ('They agree to',
           ['write a letter', 'ask together in April', 'contact a lawyer', 'join a group'],
           1, 'Because two people asking is harder to put off.',
           {0: 'The letter they discuss is one the office sent in '
               'March.', 2: 'No lawyer is mentioned anywhere in the conversation.', 3: 'They agree to go to the office, not to join anything.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Family',
    longturn=[('The person I want to talk about is my aunt, my mother\'s older '
               'sister, who brought up three children on her own after her '
               'husband died.'),
              ('She was a nurse for thirty-one years, mostly on a children\'s '
               'ward, and she retired about four years ago, although she now '
               'does two days a week in a clinic because she said the house '
               'was too quiet.'),
              ('I have known her all my life, obviously, but I would say I '
               'have really known her for about ten years, since I was old '
               'enough to have a conversation with her rather than just be fed '
               'by her.'),
              ('I admire her for something quite specific. She is the only '
               'person I know who can tell you bad news without making it '
               'worse. She told me my grandfather was dying over the phone, '
               'and she did it in about four sentences, and I remember '
               'thinking afterwards that she had somehow left me able to do '
               'the next thing. I later found out she had been doing exactly '
               'that with other people\'s children for three decades. I do not '
               'think she would say it was a skill. She would say it was the '
               'job. But I have watched people with far more education make a '
               'far worse job of it, and I would rather be able to do that '
               'than almost anything else I can think of.')],
    intro=('Short answers first, then the long turn. Use the whole two '
           'minutes.'),
    cue=('Describe someone in your family you admire.',
         ['who the person is', 'what they do',
          'how long you have known them',
          'and explain why you admire them']),
    qs=['Who do you spend most time with in your family?',
        'Is there someone in your family you go to for advice?',
        'Now look at the card. You have one minute to make notes.',
        'Do children today spend enough time with older relatives?'],
    shape=[('answer', 'My aunt Adaeze, who is sixty-one.'),
           ('support', 'She looks after my grandmother at weekends.'),
           ('follow-up', 'She has done it for nine years without '
            'complaining once.'),
           ('support', 'What I admire is that she arranged it properly, in '
            'writing, with her brother and sister.'),
           ('follow-up', 'So the family has never argued about it, which I '
            'think is rarer than the caring itself.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should adult children care for their parents?',
         prompt=('Some people say that adult children should be '
                 'responsible for caring for their elderly parents. Others '
                 'say this should be the responsibility of the state. '
                 'Discuss both views and give your own opinion. Write at '
                 'least 250 words.'),
         model=[
          'Both sides of this argument are usually stated as if the money '
          'were the only question, and it is not. My own view is that '
          'families should provide the care and the state should pay for '
          'it, which is not either of the two positions people usually '
          'take.',
          'Those who say children should care for their parents make a '
          'point about relationships. A paid worker can wash and feed '
          'somebody, but a daughter knows that her mother hates being '
          'rushed in the morning, and that knowledge takes years to build. '
          'Care homes in my country cost about nine hundred pounds a month '
          'and still cannot provide that, so the argument is not only about '
          'duty.',
          'Those who say the state should be responsible make a point about '
          'fairness. In most countries about one adult in eight is caring '
          'for somebody, and roughly sixty per cent of them are women. '
          'Many give up work to do it, and most are never told what this '
          'will cost their own pension. The care is unpaid, but somebody '
          'pays for it, and it is usually the carer.',
          'My own position takes something from each. The family is better '
          'placed to give the care, so the state should not try to replace '
          'it. The family should not have to lose a salary and a pension to '
          'do it, so the state should pay a proper allowance and protect '
          'the carer’s pension record.',
          'In conclusion, the question is wrongly put. The real choice is '
          'not who does the work but who carries the cost, and at the '
          'moment the answer is a group of mostly middle-aged women who '
          'were never asked.'],
         notes=[
          'The introduction says the usual argument is about the wrong '
          'thing, and then states a position that is neither of the two '
          'offered. That is worth marks under Task Response at this band, '
          'because most candidates simply agree with one side.',
          'Each body paragraph has a number in it. One in eight, sixty per '
          'cent, nine hundred pounds. A supported argument at 5.5 is '
          'usually just an argument with one fact attached to it.',
          'The conclusion does not repeat the essay. It names who actually '
          'pays, which is the point the whole essay was built towards, and '
          'it takes one sentence.'],
         criterion=[('A position that is not simply one of the two sides',
                     'Task Response'),
                    ('One fact in every body paragraph',
                     'Task Response'),
                    ('A conclusion that adds the last step',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Obligation and expectation: are expected to, ought to',
    explain=('There is a difference between what the law requires, what '
             'people expect, and what you think is right. These three sets '
             'of words keep them apart.'),
    examples=['Adult children are expected to help, although no law '
              'requires it.',
              'The state ought to pay an allowance to carers.',
              'Carers have to give up work far more often than people '
              'realise.',
              'There is an expectation that a daughter will do this, and it '
              'is rarely stated.'],
    task='Rewrite each sentence so that the kind of obligation is clear.',
    items=[('Children must look after their parents.',
            'Children are expected to look after their parents, although in '
            'most countries no law requires it.'),
           ('The state should pay.',
            'The state ought to pay an allowance, because the work is being '
            'done either way.'),
           ('Carers give up work.',
            'Carers frequently have to give up work, and are seldom told '
            'what this costs their pension.'),
           ('People think women should do it.',
            'There is an expectation that a daughter rather than a son will '
            'provide the care.'),
           ('It is not fair.',
            'The cost falls on one person, which is difficult to defend '
            'when the benefit is shared by the whole family.')]),
   vocab=[('dependant', 'a person who relies on somebody else'),
          ('respite', 'a short break from caring'),
          ('informal care', 'care given unpaid by family or friends'),
          ('carer', 'a person who looks after somebody'),
          ('care home', 'a place where people live and receive care'),
          ('live-in', 'living in the same house as the person cared '
           'for'),
          ('unpaid', 'done without payment'),
          ('arrangement', 'a plan that people have agreed on')],
   expr=[('There is an expectation that, though it is rarely stated',
          'names an unwritten rule'),
         ('It is something. It is not a life.',
          'concedes a point and then limits it'),
         ('two people asking is harder to put off than one',
          'a practical reason for acting together'),
         ('the work is unpaid, but somebody pays for it',
          'the sentence this cycle is built on')],
   trans=['whereas', 'even so', 'on the other hand', 'in practice'],
  ),

  dict(
   sub='Households are getting smaller',
   step=2,
   read=[
    dict(heading='Why more people live alone',
         kind='Data article',
         task='Matching information and True/False/Not Given',
         band='gt_work', qtype='Questions 33-38',
         figure=_HH,
         paras=[
          'The chart shows the average number of people in a household in '
          'four countries, in 1970 and in 2020. Every country fell, and the '
          'size of the fall was not the same.',
          'Mexico fell the furthest. The average went from 5.4 people to '
          '3.6, a fall of 1.8. Japan and Spain both fell by between one and '
          'a half and one and a third. Sweden fell least, from 2.6 to 1.8, '
          'but it also started lowest and now has the smallest households '
          'of the four.',
          'Three things cause this and they act together. People are having '
          'fewer children, so there are fewer children in each home. People '
          'are living longer, and many older people live alone after a '
          'partner dies. And young adults leave home and live alone for '
          'longer before they marry.',
          'The third of these is the newest and the most local. In Sweden '
          'it began in the 1960s; in Spain it is still unusual for people '
          'under thirty. This is why two countries with similar birth rates '
          'can have very different household sizes.',
          'The change matters for reasons that have nothing to do with '
          'families. A country with smaller households needs more homes for '
          'the same number of people. It needs more heating, more '
          'appliances and more water connections, because a kettle serves '
          'one person as easily as four.',
          'It also changes who is alone when something goes wrong. A person '
          'who falls at home is found quickly in a house of five and may '
          'not be found for a day in a house of one, which is why several '
          'countries now fund daily telephone calls to older people living '
          'alone.'],
         items=[
          (
           'Which paragraph explains why smaller households increase '
           'the need for housing?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2, 'More homes for the same number of people.',
           {0: 'Paragraph 3 gives three causes acting together.', 1: 'Paragraph 4 explains why similar birth rates can '
               'produce different household sizes.', 3: 'Paragraph 6 is about who is found quickly when '
               'something goes wrong.'}),
          ('Which paragraph gives three causes acting together?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'Fewer children, longer lives and young adults leaving '
           'home.',
           {0: 'Paragraph 2 gives the figures for each of the four '
               'countries.', 2: 'Paragraph 4 explains why similar birth rates can '
               'produce different household sizes.', 3: 'Paragraph 5 explains why smaller households increase '
               'the need for housing.'}),
          (
           'Which paragraph explains why similar birth rates can '
           'produce different household sizes?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           1, 'Because young adults living alone is a local pattern.',
           {0: 'Paragraph 3 gives three causes acting together.', 2: 'Paragraph 5 explains why smaller households increase '
               'the need for housing.', 3: 'Paragraph 6 explains why some countries fund daily '
               'telephone calls.'}),
          ('Mexico’s average household fell by ____________ people.', None,
           '1.8', 'From 5.4 to 3.6, the largest fall shown.'),
          (
           'All four countries had smaller households in 2020 than in '
           '1970.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 1 says every country fell, and only the size of '
           'the fall differed.',
           {1: 'False would need one country to have risen, and '
               'paragraph 1 denies it.', 2: 'Not Given is wrong because the first paragraph states '
               'it directly.'}),
          (
           'Sweden had the largest fall in household size of the four '
           'countries.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 2 gives Mexico the furthest fall, 1.8; Sweden '
           'fell least.',
           {0: 'True would need Sweden to have the largest fall; it '
               'has the smallest.', 2: 'Not Given is wrong because paragraph 2 gives every '
               'figure needed.'})])],
   listen=[
    dict(heading='A statistician on household size', part='Part 4',
         task='A lecture on measuring households', band='l4',
         qtype='Questions 39-44',
         figure=_HH,
         script=[
          ('Statistician', 'Average household size is the easiest number in '
           'demography to calculate and one of the easiest to misread. I am '
           'going to show you both halves of that.'),
          ('Statistician', 'The calculation is simple. Take the population '
           'living in households, divide by the number of households. In '
           '1970 Mexico was 5.4 people per household. In 2020 it was 3.6.'),
          ('Statistician', 'Now the first misreading. People see that fall '
           'and say families are breaking down. But a falling average is '
           'mostly caused by a rise in the number of one-person households, '
           'and most of those are older people who used to live with an '
           'adult child, or young adults who used to live with parents. '
           'Nothing has broken. Somebody has moved.'),
          ('Statistician', 'The second misreading is harder. The average '
           'tells you about households, not about people. In Sweden the '
           'average is 1.8, which sounds as though most Swedes live alone. '
           'They do not. Most Swedish households are one-person '
           'households, and most Swedish people live in the larger ones. '
           'Both sentences are true at once.'),
          ('Statistician', 'That happens because a one-person household '
           'contains one person and a five-person household contains five. '
           'Count the boxes and small ones dominate. Count the people and '
           'large ones do. If you remember one thing today, remember that '
           'the unit you count changes the answer.'),
          ('Statistician', 'So when a newspaper says the average household '
           'is 1.8 people, ask whether the story is about households or '
           'about people. Most stories mean people and most numbers are '
           'about households, and the gap between those is where almost '
           'every bad population story comes from.'),
          ('Statistician', 'One last practical point, because you will '
           'meet it in planning. A council that wants to know how many '
           'homes to build needs the household number. A council that '
           'wants to know how many school places to plan needs the people '
           'number. The same survey answers both and the two answers point '
           'in different directions, which is why those two departments '
           'argue every year.')],
         items=[
          ('Average household size is calculated by dividing the population '
           'in households by the number of ____________.', None,
           'households',
           'The simplest calculation in demography, he says.'),
          ('A falling average is mostly caused by a rise in',
           ['divorce', 'one-person households', 'emigration', 'student numbers'],
           1, 'Mainly older people and young adults who have moved.',
           {0: 'Divorce is not given as a cause anywhere in the talk.', 2: 'Nobody leaves the country in his account; they move '
               'house.', 3: 'Young adults are mentioned, but not as students.'}),
          ('In Sweden the average household contains ____________ '
           'people.', None, '1.8',
           'Which sounds as though most Swedes live alone.'),
          ('Most Swedish households are one-person households, and most '
           'Swedish people live in the ____________ ones.', None,
           'larger',
           'Both statements are true at the same time.'),
          ('The reason is that the answer depends on the ____________ you '
           'count.', None, 'unit',
           'Boxes against people, which he calls the thing to '
           'remember.'),
          (
           'He says most population stories mean people while most '
           'numbers are about',
           ['families', 'households', 'regions', 'generations'], 1,
           'And the gap is where bad stories come from.',
           {0: 'Families are what readers wrongly take the story to be '
               'about.', 2: 'No regional figures appear anywhere in the talk.', 3: 'Generations are not the unit he says the numbers '
               'count.'})])],
   speak=dict(
    part='Part 3', focus='Living alone',
    intro=('Four or five sentences. Try once to give a reason and then an '
           'example.'),
    qs=['Why do more people live alone than in the past?',
        'Is living alone a problem or a choice?',
        'What can be done to help older people who live alone?',
        'Will households continue to get smaller?'],
    shape=[('answer', 'Mostly because young people leave home earlier and '
            'marry later.'),
           ('support', 'In my city a flat for one is now normal at '
            'twenty-five.'),
           ('follow-up', 'My parents moved straight from their parents’ '
            'house to their own.'),
           ('support', 'Older people living alone is the other half of '
            'it.'),
           ('follow-up', 'And that half is the one I would worry about, '
            'because it is not usually a choice.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Average household size in four countries, 1970 and 2020',
         prompt=('The chart below shows the average household size in four '
                 'countries in 1970 and 2020. Summarise the information by '
                 'selecting and reporting the main features, and make '
                 'comparisons where relevant. Write at least 150 words.'),
         figure=_HH,
         model=[
          'The bar chart compares the average number of people per '
          'household in Japan, Spain, Sweden and Mexico in 1970 and 2020. '
          'Overall, household size fell in all four countries, and the '
          'countries that started largest fell furthest, so the four are '
          'closer together in 2020 than they were in 1970.',
          'Mexico had much the largest households in 1970, at 5.4 people, '
          'and also saw the largest fall, of 1.8, to 3.6 in 2020. It '
          'remains the largest of the four.',
          'Japan and Spain began at similar levels, 3.7 and 3.8, and fell '
          'by similar amounts, to 2.2 and 2.5 respectively. Spain had the '
          'second largest households in 2020.',
          'Sweden was the smallest in both years. It began at 2.6, well '
          'below the others, and fell by only 0.8 to 1.8, which is the '
          'smallest fall and the smallest final figure. The gap between the '
          'largest and smallest country narrowed from 2.8 people in 1970 to '
          '1.8 in 2020.'],
         notes=[
          'The Overall statement gives the direction and one more thing: '
          'the countries moved closer together. A chart with two series is '
          'almost always asking about the gap as well as the levels.',
          'Every country has a figure for its fall, and the figures are '
          'subtracted by the writer. The chart does not print 1.8 or 0.8; '
          'doing the subtraction is most of what separates band 6 from band '
          '5 on this task.',
          'Japan and Spain are grouped because they behaved alike. Four '
          'countries described one at a time, in the order of the chart, is '
          'the commonest way this task is answered and the commonest reason '
          'it scores 5.'],
         criterion=[('An Overall statement about the gap, not just the '
                     'fall', 'Task Achievement'),
                    ('A figure for each fall, worked out by you',
                     'Task Achievement'),
                    ('Countries grouped by behaviour',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a fall and a levelling off',
    fix=dict(
     text=('The number of single-person households rose steadily until 2015, '
           'when it reached 7.2 million. It then levelled off on about 7.3 '
           'million for four years. The figure for households with children, '
           'that fell throughout the period, ended at 4.1 million. Both '
           'figures has been revised since the chart was published.'),
     faults=[('levelled off on about 7.3 million',
              'levelled off at about 7.3 million',
              'A level is reached at a figure.'),
             (('The figure for households with children, that fell throughout '
               'the period,'),
              ('The figure for households with children, which fell throughout '
               'the period,'),
              'A clause between commas takes which.'),
             ('Both figures has been revised',
              'Both figures have been revised',
              'Both figures is plural, so the verb is have.')]),
    explain=('Task 1 needs words for how much something fell and how fast. '
             'These patterns give you both, and keep the figure in the '
             'sentence.'),
    examples=['Household size fell from 5.4 to 3.6, a fall of 1.8.',
              'Sweden fell least, by only 0.8.',
              'Japan and Spain fell by similar amounts.',
              'The gap narrowed from 2.8 people to 1.8.'],
    task='Rewrite each sentence so that it contains a figure you have '
         'worked out.',
    items=[('Mexico fell a lot.',
            'Mexico fell the furthest of the four, from 5.4 to 3.6, a fall '
            'of 1.8 people.'),
           ('Sweden did not change much.',
            'Sweden fell by only 0.8, the smallest fall of the four '
            'countries.'),
           ('Japan and Spain are similar.',
            'Japan and Spain began within 0.1 of each other and ended '
            'within 0.3.'),
           ('The countries became more alike.',
            'The gap between the largest and smallest fell from 2.8 people '
            'to 1.8.'),
           ('Everything went down.',
            'All four countries fell, by amounts ranging from 0.8 to '
            '1.8.')]),
   vocab=[('household', 'the people who live together in one home'),
          ('decline', 'a fall over a period of time'),
          ('one-person household', 'a home with a single occupant'),
          ('census', 'an official count of a population'),
          ('headship rate', 'the share of people who head a household'),
          ('lone parent', 'a parent bringing up a child alone'),
          ('occupant', 'a person living in a home'),
          ('narrow', 'to become smaller, of a gap')],
   expr=[('the unit you count changes the answer',
          'the sentence this cycle is built on'),
         ('nothing has broken; somebody has moved',
          'corrects a common misreading'),
         ('a fall of 1.8, which the chart does not print',
          'reminds you to subtract'),
         ('both sentences are true at once',
          'holds two facts together')],
   trans=['while', 'by contrast', 'overall', 'in both years'],
  ),

  dict(
   sub='What a falling birth rate means',
   step=3,
   read=[
    dict(heading='Fewer children, older countries',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'In 1970 the average woman in the world bore about 4.5 children. '
          'Today the figure is roughly 2.3. The decline has occurred in '
          'wealthy nations and poor ones, in countries that encouraged it '
          'and in countries that attempted to prevent it, and it represents '
          'the largest shift in human population in recorded history. It '
          'took about fifty years, which is remarkably rapid for a change '
          'that depends on hundreds of millions of private decisions.',
          'Demographers discuss this using a single measure, the fertility '
          'rate, which is the number of children an average woman bears '
          'during her lifetime. A rate of about 2.1 maintains a population '
          'at a constant size. Below that level each generation is smaller '
          'than the one preceding it, and the population declines once the '
          'older groups die. Nothing occurs quickly, because the people '
          'already born do not disappear, and that delay is what makes the '
          'subject difficult to discuss honestly.',
          'The causes of the decline are well understood and are mostly '
          'welcome. Fewer infants die, so parents need not bear six children '
          'to raise four. Women remain in education longer and take paid '
          'employment outside the home. Contraception is cheap and legal in '
          'most countries. Populations move to cities, where children are '
          'expensive and contribute little: on a farm a ten-year-old can '
          'work, while in a city the same child requires a uniform and a '
          'bedroom.',
          'What is less well understood is the effect of a low rate on a '
          'nation thirty years afterwards, and this is where the argument '
          'begins. The first consequence is straightforward. Fewer young '
          'people are born, so the labour force eventually shrinks. The '
          'second is less obvious. The large generations born earlier are '
          'still alive and are ageing, so the number of older citizens rises '
          'at the same moment. One line descends while the other climbs, and '
          'the distance between them widens twice as fast as either line '
          'moves.',
          'Taken together these two effects produce the dependency ratio: '
          'the number of citizens over 65 for every hundred of working age. '
          'In Japan the ratio stood at 10 in 1970 and is approximately 50 '
          'today. Every hundred workers now support five times as many older '
          'people as their grandparents did. Japan is unusual not in '
          'direction but in how early it arrived; Italy, Spain and Korea '
          'follow the same path a few years behind.',
          'This matters because of the method by which pensions are '
          'financed. In most countries the money paid to pensioners this '
          'year is raised from the taxes of those employed this year, rather '
          'than drawn from a fund accumulated earlier. When the ratio '
          'shifts, one of three things must follow: taxation rises, pensions '
          'are reduced, or the age at which a pension may be claimed is '
          'raised.',
          'Those three options constitute the entire policy debate, and '
          'every nation facing the problem has adopted some combination of '
          'them. No country has discovered a fourth, although a great many '
          'have announced one, and the announcement is almost always a '
          'scheme to raise the birth rate once more.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['Why the fall happened', 'What the fertility rate measures', 'The dependency ratio', 'How pensions are paid'],
           0, 'Child survival, education, contraception and cities.',
           {1: 'That is paragraph 2, which defines the rate and the '
               'figure 2.1.', 2: 'That is paragraph 5, with Japan at ten and then fifty.', 3: 'That is paragraph 6, on this year\'s pensions from this '
               'year\'s taxes.'}),
          ('Choose the best heading for paragraph 5.',
           ['Why the fall happened', 'Two effects that arrive together', 'The dependency ratio and what it shows', 'The three policy choices'],
           2, 'Ten in 1970 and about fifty today, in Japan.',
           {0: 'Why the fall happened is the heading for paragraph 3.', 1: 'That is paragraph 4, where one line falls as the other '
               'climbs.', 3: 'That is paragraph 6, with tax, pensions and pension '
               'age.'}),
          ('Choose the best heading for paragraph 6.',
           ['The fertility rate', 'Why pensions are affected', 'Why cities matter', 'The fourth option'],
           1,
           'This year\u2019s pensions come from this year\u2019s taxes.',
           {0: 'The rate is defined in paragraph 2, not in this one.', 2: 'Cities appear in paragraph 3, among the causes of the '
               'fall.', 3: 'The missing fourth option is paragraph 7\'s subject.'}),
          (
           'The writer believes the fall in the birth rate is mainly '
           'bad news.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 says the reasons are mostly good news.',
           {0: 'Yes would need bad news; paragraph 3 calls the reasons '
               'mostly good.', 2: 'Not Given is wrong because the writer assesses the '
               'causes.'}),
          (
           'The writer believes some country has found a fourth policy '
           'option.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 says none has, although many have announced '
           'one.',
           {0: 'Yes would need a fourth option; paragraph 7 says none '
               'has been found.', 2: 'Not Given is wrong because the search for one is '
               'discussed.'}),
          ('A fertility rate of about ____________ keeps a population the '
           'same size.', None, '2.1',
           'Paragraph 2, below which each generation is smaller.'),
          ('The dependency ratio counts people over 65 for every hundred '
           'people of ____________ age.', None, 'working',
           'Paragraph 5, with Japan as the example.'),
          ('The three choices are higher taxes, lower pensions, or a '
           'higher ____________ for drawing a pension.', None, 'age',
           'Paragraph 6, and every country has chosen a mixture.')])],
   listen=[
    dict(heading='A lecture on demographic change', part='Part 4',
         task='A lecture on populations and ageing', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'I am going to spend this hour on one number and one '
           'mistake. The number is the fertility rate. The mistake is '
           'thinking that a country with a low one has a problem it can '
           'solve by raising it.'),
          ('Lecturer', 'The rate is the number of children an average woman '
           'has in her lifetime. About 2.1 holds a population steady. Half '
           'the world now lives in a country below that, which was true of '
           'no country at all in 1950.'),
          ('Lecturer', 'The causes are not mysterious and most of them are '
           'things we wanted. Children survive. Girls go to school. Women '
           'work. Cities make children expensive. You cannot reverse any of '
           'those without reversing something good.'),
          ('Lecturer', 'Now the arithmetic that makes it urgent. It is not '
           'just that there are fewer young people. The big generations '
           'born in the fifties and sixties are still here and they are '
           'getting old. So the two lines move apart at once, which is why '
           'the ratio changes so fast.'),
          ('Lecturer', 'Japan. Ten people over sixty-five per hundred '
           'workers in 1970. About fifty now. Not fifty per cent more. '
           'Five times.'),
          ('Lecturer', 'And pensions in most countries are paid out of this '
           'year’s taxes, not out of a pot. So when the ratio moves, '
           'something has to give, and there are exactly three things it '
           'can be. Taxes up, pensions down, pension age up.'),
          ('Lecturer', 'Governments hate all three, which is why they keep '
           'announcing a fourth: get people to have more babies. Next week '
           'we will look at every country that has tried it, and I will '
           'tell you now that the results are not encouraging.'),
          ('Lecturer', 'And before somebody asks about immigration: yes, '
           'it changes the arithmetic, and it changes it for about twenty '
           'years, because the people who arrive also grow old. It moves '
           'the problem rather than removing it, which is worth knowing '
           'before you hear it offered as the fourth option.')],
         items=[
          ('A fertility rate of about ____________ holds a population '
           'steady.', None, '2.1',
           'Half the world now lives below that figure.'),
          ('In 1950 the number of countries below that rate was',
           ['none', 'about ten', 'about thirty', 'half'], 0,
           'Against half the world\u2019s population today.',
           {1: 'Ten is Japan\'s dependency ratio in 1970, not a count '
               'of countries.', 2: 'No figure of that size is given for 1950.', 3: 'Half the world lives below the rate today, not in '
               '1950.'}),
          ('He says the causes of the fall are mostly',
           ['unknown', 'things we wanted', 'recent', 'political'], 1,
           'Child survival, girls in school, women working, cities.',
           {0: 'He says the causes are not mysterious at all.', 2: 'The causes he lists are long-running rather than '
               'recent.', 3: 'The causes he names are social, not government policy.'}),
          ('The ratio changes quickly because the two lines',
           ['move together', 'move apart at once', 'stay flat', 'reverse'],
           1,
           'Fewer young people and more old people at the same time.',
           {0: 'Moving together is what would keep the ratio steady.', 2: 'Both lines move, which is the point of the arithmetic.', 3: 'Neither line reverses; one falls while the other '
               'rises.'}),
          ('Japan’s figure rose from 10 to about ____________ per hundred '
           'workers.', None, '50',
           'Which he stresses is five times, not fifty per cent more.'),
          ('He says there are exactly ____________ things that can give '
           'when the ratio moves.', None, 'three',
           'Taxes, pensions, or the pension age.')])],
   speak=dict(
    part='Part 3', focus='Population and policy',
    intro=('Four or five sentences. Say what you think and then why.'),
    qs=['Why are people in many countries having fewer children?',
        'Is a falling population a serious problem?',
        'Should governments try to change it?',
        'What should a country do about an ageing population?'],
    shape=[('answer', 'Mainly because children cost more in cities and '
            'women work.'),
           ('support', 'In my country a child in a city costs about twice '
            'what one costs in a village.'),
           ('follow-up', 'And almost every woman I know works full '
            'time.'),
           ('support', 'I do not think it is a problem that can be '
            'solved.'),
           ('follow-up', 'Because the causes are all things we would not '
            'want to reverse.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should governments encourage more children?',
         prompt=('Should governments encourage people to have more '
                 'children? Brainstorm ten ideas, run the six tests, and '
                 'order what survives on purpose. Twelve minutes.'),
         plan=('Governments should not try to raise the birth rate, '
               'because the causes of the fall are things nobody wants to '
               'reverse, and the money would do more good spent on the '
               'ageing population itself',
               [('The causes of the fall are mostly good things',
                 ['children survive, girls are educated, women work',
                  'reversing any of these is not a policy anybody will '
                  'propose']),
                ('The money has a better use',
                 ['the three real choices are taxes, pensions and the '
                  'pension age',
                  'spending on childcare helps parents now, whatever it '
                  'does to the rate'])]),
         notes=[
          'Ten ideas first, without judging them. The six tests then '
          'remove the ones that are the same idea twice, the ones you '
          'cannot support, and the ones that are really about something '
          'else.',
          'Notice that the two surviving groups answer different '
          'questions: the first says why the policy will not work, the '
          'second says what to do instead. An essay needs both, and most '
          'candidates only write the first.',
          'The order is chosen, not accidental. The weaker point goes '
          'first because the stronger one is easier to remember at the end '
          'of an essay, and the examiner reads the end last.'],
         criterion=[('Ten ideas before any judgement', 'Task Response'),
                    ('An order chosen on purpose',
                     'Coherence and Cohesion')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Projection and hedging: is projected to, on current trends',
    explain=('Writing about the future needs language that admits it is a '
             'forecast. These patterns do that without sounding vague.'),
    examples=['On current trends the ratio reaches 70 by 2050.',
              'The population is projected to fall by a fifth.',
              'If nothing changes, the pension age will have to rise.',
              'The figure is expected to keep rising for thirty years.'],
    task='Rewrite each flat prediction so that it is clearly a '
         'projection.',
    items=[('The population will fall.',
            'On current trends the population is projected to fall by about '
            'a fifth by 2060.'),
           ('Taxes will rise.',
            'If the ratio continues to change, taxes are likely to have to '
            'rise.'),
           ('There will be no workers.',
            'The number of workers for each pensioner is expected to '
            'continue falling.'),
           ('The pension age is going up.',
            'The pension age is projected to rise to 68 in several '
            'countries by 2040.'),
           ('Nothing will help.',
            'On the evidence so far, no policy has reversed the trend, '
            'although several have delayed it.')]),
   vocab=[('fertility rate', 'the number of children an average woman '
           'has'),
          ('dependency ratio', 'older people per hundred of working '
           'age'),
          ('pension', 'money paid regularly to a retired person'),
          ('workforce', 'all the people available to work'),
          ('ageing', 'a population getting older on average'),
          ('contributions', 'money paid in towards a pension'),
          ('age group', 'all the people of about the same age'),
          ('steady', 'staying at the same level')],
   expr=[('on current trends the ratio reaches, by',
          'the standard projection sentence'),
         ('not fifty per cent more; five times',
          'stops a reader misreading a ratio'),
         ('you cannot reverse any of those without reversing something '
          'good', 'the argument this cycle rests on'),
         ('taxes up, pensions down, pension age up',
          'names the three real choices')],
   trans=['consequently', 'in turn', 'as a result', 'at the same time'],
  ),

  dict(
   sub='Whether policy can change it',
   step=4,
   read=[
    dict(heading='Countries that tried to raise the birth rate',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Since about 1980, more than thirty countries have introduced '
          'measures intended to raise the birth rate. They have offered cash '
          'at birth, longer paid leave, free childcare, priority for housing '
          'and reductions in tax. The results are now clear enough to '
          'summarise, and they are not what most of those governments '
          'expected. Enough time has passed for the children born under the '
          'earliest of these schemes to have had children of their own.',
          'The clearest finding is that cash payments work, and that they '
          'work on the wrong thing. After a payment is announced, births '
          'rise sharply for a year or two. They then fall below the level at '
          'which they began. Women who intended to have a second child in '
          'three years had that child in one, and the total number of '
          'children they bore across their lives did not alter.',
          'Demographers call this a timing effect, and distinguish it from a '
          'change in completed family size, which is the number of children '
          'a woman has by the end of her life. Almost every scheme that has '
          'been studied moved the timing. Very few have moved the completed '
          'size, and those that did were not the cash schemes. The '
          'distinction is the most useful idea in the whole literature and '
          'is almost never mentioned when a payment is announced.',
          'The measures with the better record are the dull ones. Countries '
          'offering cheap, reliable childcare, and leave that fathers '
          'actually take, record fertility rates about 0.2 to 0.3 higher '
          'than comparable countries without them. The effect is small, it '
          'is consistent across studies, and it is not what the payments '
          'were competing against.',
          'There is a reason this difference makes sense. A payment of three '
          'thousand euros alters what a household can afford in a single '
          'year. A childcare place alters what a mother can do every year '
          'for four years, and a father who takes leave alters how a second '
          'child is discussed at all. Only one of the three touches the '
          'decision that is actually being made.',
          'The strongest evidence against the payments is what occurred '
          'where some were removed. In two countries the payment was ended '
          'during a financial crisis, and the birth rate fell by more than '
          'it had risen. A measure that is more damaging to abolish than it '
          'was useful to introduce is an expensive thing to have begun.',
          'None of this means that a government should do nothing. It means '
          'that the honest justification for childcare and parental leave is '
          'that they assist the families who already exist, and that the '
          'effect on the birth rate, if any exists, is a modest bonus rather '
          'than the purpose. Several countries now state precisely this, and '
          'they are the ones with the better figures.'],
         items=[
          (
           'Which paragraph explains why childcare might work better '
           'than cash?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2,
           'A payment changes one year; a childcare place changes '
           'four.',
           {0: 'Paragraph 3 distinguishes timing from completed family '
               'size.', 1: 'Paragraph 4 reports the 0.2 to 0.3 figure for '
               'childcare.', 3: 'Paragraph 6 describes what happened when payments were '
               'stopped.'}),
          (
           'Which paragraph describes what happened when payments were '
           'stopped?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           2, 'The rate fell by more than it had risen.',
           {0: 'Paragraph 4 reports the record of the duller measures.', 1: 'Paragraph 5 explains why childcare might work better '
               'than cash.', 3: 'Paragraph 7 states the honest reason for these '
               'policies.'}),
          (
           'Which paragraph states the honest reason for these '
           'policies?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 4'],
           2, 'They help the families who already exist.',
           {0: 'Paragraph 5 explains why childcare might work better '
               'than cash.', 1: 'Paragraph 6 describes what happened when payments were '
               'stopped.', 3: 'Paragraph 4 compares the childcare figures with other '
               'countries.'}),
          ('The writer believes cash payments have no effect at all.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says they work, but on the timing.',
           {0: 'Yes would need no effect; paragraph 2 says they shift '
               'the timing.', 2: 'Not Given is wrong because the payments are evaluated.'}),
          (
           'The writer believes governments should stop supporting '
           'families.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 says the opposite, with a different reason.',
           {0: 'Yes would need withdrawal; paragraph 7 argues for '
               'support on other grounds.', 2: 'Not Given is wrong because the writer states what '
               'support is for.'}),
          ('A change in when children are born rather than how many is '
           'called a ____________ effect.', None, 'timing',
           'Paragraph 3, against completed family size.'),
          ('Countries with good childcare have rates about ____________ to '
           '0.3 higher.', None, '0.2',
           'Paragraph 4, a small but consistent effect.'),
          ('When payments were withdrawn, the birth rate fell by '
           '____________ than it had risen.', None, 'more',
           'Paragraph 6, in two countries during a crisis.')])],
   listen=[
    dict(heading='Two demographers disagree', part='Part 4',
         task='A recorded discussion', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Dr Varga thinks these policies are a waste of money. '
           'Professor Lindqvist does not. Each has agreed to start with '
           'their own weakest point.'),
          ('Varga', 'Mine is that I argue from the cash policies and then '
           'draw a conclusion about all of them. The cash ones clearly fail '
           'and the childcare ones are a different kind of thing, and I '
           'know that and I keep doing it anyway.'),
          ('Lindqvist', 'And mine is that my effect is small. Nought point '
           'two on the fertility rate. I defend childcare in front of '
           'ministers using a number that a sceptic can call noise, and '
           'some days I think they are right.'),
          ('Chair', 'So where is the actual disagreement?'),
          ('Varga', 'On what we are buying. If childcare costs that much '
           'and moves the rate by nought point two, it is a terrible birth '
           'rate policy. It might be an excellent childcare policy. I want '
           'us to say which one we are selling.'),
          ('Lindqvist', 'That I agree with entirely, and it is the thing my '
           'own field does worst. We sell childcare as a birth rate '
           'measure because that is what gets it funded, and then the '
           'evaluation measures the birth rate and finds almost '
           'nothing.'),
          ('Varga', 'And then the policy gets cut.'),
          ('Lindqvist', 'And then the policy gets cut, having helped '
           'several hundred thousand families, for failing at a job we '
           'should never have claimed it could do.'),
          ('Chair', 'Is there anything either of you would change about '
           'current practice?'),
          ('Varga', 'Stop paying cash at birth. The evidence is as clear as '
           'anything in this field and we keep doing it because it is '
           'visible.'),
          ('Lindqvist', 'Agreed, and I would add: evaluate childcare '
           'against what it is for. Hours worked, incomes, whether the '
           'second parent returns. Not births.'),
          ('Varga', 'If we did that I would stop arguing with you '
           'entirely, which I suspect is why nobody in a ministry has '
           'suggested it.')],
         items=[
          ('Dr Varga\u2019s own weakest point is that he argues from',
           ['old studies', 'the cash policies only', 'one country', 'his own experience'],
           1, 'And then draws a conclusion about all of them.',
           {0: 'He does not complain about the age of the evidence.', 2: 'No single country is the basis of his argument.', 3: 'He argues from the published cash schemes, not from '
               'experience.'}),
          ('Professor Lindqvist admits that her effect is',
           ['unproven', 'small', 'recent', 'disputed'], 1,
           'Nought point two on the fertility rate.',
           {0: 'She calls the effect consistent rather than unproven.', 2: 'The age of the evidence is not what she concedes.', 3: 'What she concedes is the size, not whether it is '
               'agreed.'}),
          ('Varga says childcare may be a terrible birth rate policy and an '
           'excellent ____________ policy.', None, 'childcare',
           'He wants services sold as what they are.'),
          (
           'Lindqvist says childcare is sold as a birth rate measure '
           'because that is what gets it',
           ['noticed', 'funded', 'evaluated', 'copied'], 1,
           'And the evaluation then measures the wrong thing.',
           {0: 'Being noticed is Varga\'s point about the cash '
               'payments.', 2: 'Evaluation is what then measures the wrong thing.', 3: 'Copying between countries is not discussed here.'}),
          ('The practice Varga would stop is',
           ['parental leave', 'paying cash at birth', 'free childcare', 'housing priority'],
           1, 'Which he says continues because it is visible.',
           {0: 'Leave that fathers take is among the measures he '
               'accepts.', 2: 'Childcare is Lindqvist\'s policy, and he does not '
               'oppose it.', 3: 'Housing priority is not raised in the discussion.'}),
          ('Lindqvist would evaluate childcare against hours worked, '
           'incomes and whether the second parent ____________.', None,
           'returns', 'Rather than against the number of births.')])],
   speak=dict(
    part='Part 3', focus='What governments can and cannot change',
    sounds=[('English puts the strong stress on what is new. In the answer she '
             'is a nurse, and she has been a nurse for thirty years, the '
             'second nurse is old information and goes quiet while thirty '
             'years gets the stress.'),
            ('Candidates who stress the same word twice sound as though they '
             'are reading a list. Say the sentence above twice, once wrongly, '
             'and the difference is unmistakable.'),
            ('Practise with a question and answer of your own: Where does she '
             'live? She lives in the north of the city. Only the new part is '
             'strong.'),
            ('This is also how you avoid sounding rehearsed. A memorised '
             'sentence stresses the words the writer chose; a spoken one '
             'stresses the words this examiner has not yet heard.'),
            ('Record one Part 1 exchange and mark the new information in each '
             'answer. Then check whether your voice went up on exactly those '
             'words.')],
    intro=('Five sentences. Try once to say that something worked, but '
           'not in the way intended.'),
    qs=['Can a government change how many children people have?',
        'Should money be spent on families or on older people?',
        'Why do governments keep trying policies that do not work?',
        'What would persuade you that a policy had worked?'],
    shape=[('answer', 'It can change when people have them, not how '
            'many.'),
           ('support', 'Payments produce a rise for a year or two.'),
           ('follow-up', 'Then the rate falls below where it started.'),
           ('support', 'So the policy worked, and not on the thing it was '
            'sold on.'),
           ('follow-up', 'Which I think is the most common kind of policy '
            'failure, not the kind where nothing happens.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Payments to families who have more children',
         prompt=('Some governments offer payments to families who have '
                 'more children. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'Governments in more than thirty countries now pay families to '
          'have children. I think the payments are a poor way to raise the '
          'birth rate and that the services offered alongside them are '
          'worth keeping for a completely different reason.',
          'The argument for the payments is easy to understand. Children '
          'are expensive, and a family that wants a second child but '
          'cannot afford one is being stopped by money, which a government '
          'can supply. The payments are also popular and simple to run, '
          'and a minister can announce them in a sentence.',
          'The evidence, however, shows that they move the timing rather '
          'than the number. After a payment is announced, births rise for a '
          'year or two and then fall below where they began. Women who '
          'planned a second child in three years have it in one, and the '
          'number of children they have in their whole lives does not '
          'change. In two countries where the payment was later withdrawn, '
          'the birth rate fell by more than it had risen.',
          'The argument against is therefore not that the money is wasted '
          'on families, but that it is sold as something it is not. '
          'Childcare and parental leave have a better record, raising the '
          'rate by about 0.2, which is small. Their real value is that '
          'they help the families who already exist, every year, rather '
          'than for one year.',
          'In my opinion governments should stop paying cash at birth and '
          'should fund childcare honestly, as a service for parents rather '
          'than as a population policy. A policy that is judged on the '
          'wrong measure will eventually be cut for failing at a job it was '
          'never able to do.'],
         notes=[
          'Structure 3: the first view, the second view, and then a third '
          'position that is not a compromise between them. Here the third '
          'position accepts the spending and rejects the reason given for '
          'it.',
          'Paragraph 3 is the one that earns the band. It has a mechanism '
          '(timing, not number), a figure, and a case where the policy was '
          'reversed. At 5.5 most essays assert; this one explains.',
          'The last sentence says what happens next rather than repeating '
          'what was said. A conclusion that makes one new step is worth '
          'more than one that summarises three paragraphs.'],
         model65=[
                  'Some governments pay families who have more '
                  'children. I will look at both views and then give '
                  'my own.',
                  'Supporters say these payments help families with '
                  'the real cost of raising a child. Children are '
                  'expensive, and many couples say they would like '
                  'another child but cannot afford one. The payments '
                  'also recognise that parents are doing something the '
                  'whole country benefits from, because somebody has '
                  'to pay for pensions later.',
                  'But critics say the payments do not work. Studies '
                  'show that cash mainly changes when people have '
                  'children rather than how many they have in total. '
                  'Birth rates in many countries rose for a few '
                  'years after a payment was introduced and then '
                  'returned to the previous level. The money may be '
                  'better spent on childcare or housing.',
                  'I think governments should support families, but '
                  'not mainly through cash payments for extra '
                  'children. Support should go to the things that make '
                  'a second child possible, such as affordable '
                  'childcare and secure housing. This helps families '
                  'whatever they decide, so the money is not wasted if '
                  'the birth rate does not change.',
                  ],
         gap65=[
                'It separates a change in timing from a change in '
                'total number, which is the finding that makes most of '
                'the policy debate beside the point.',
                'It says what each kind of support is actually buying, '
                'instead of recommending the alternatives in general '
                'terms.',
                'It ends by naming what the policy would have to '
                'achieve to count as working.',
                ],
         criterion=[('A third position that is not a compromise',
                     'Task Response'),
                    ('A mechanism, not just an opinion',
                     'Task Response'),
                    ('A conclusion that takes one new step',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Evidence and counterexample',
    explain=('At this band an argument improves most when a fact is '
             'attached to it. These patterns attach one, and introduce a '
             'case that goes the other way.'),
    examples=['The evidence shows that they move the timing rather than '
              'the number.',
              'In two countries where the payment was withdrawn, the rate '
              'fell further than it had risen.',
              'Countries with good childcare have rates about 0.2 '
              'higher.',
              'This is a small effect, and it is consistent across '
              'studies.'],
    task='Rewrite each opinion so that it carries evidence.',
    items=[('Payments do not work.',
            'Payments raise births for a year or two, after which the rate '
            'falls below where it started.'),
           ('Childcare is better.',
            'Countries with cheap, reliable childcare have fertility rates '
            'about 0.2 higher than similar countries without it.'),
           ('Stopping a payment is risky.',
            'In two countries the rate fell by more than it had risen when '
            'the payment was withdrawn.'),
           ('Governments like simple policies.',
            'Cash payments continue to be used because they are visible and '
            'can be announced in a sentence.'),
           ('The policy was judged unfairly.',
            'The policy was evaluated against the birth rate, which it was '
            'never designed to change.')]),
   vocab=[('timing effect', 'a change in when, not how many'),
          ('completed family size', 'the children a woman has in her '
           'whole life'),
          ('parental leave', 'time off work after a birth'),
          ('baby bonus', 'a cash payment made at a birth'),
          ('phase out', 'to stop providing something gradually'),
          ('consistent', 'the same across different studies'),
          ('bonus', 'an extra benefit that was not the main purpose'),
          ('evaluate', 'to judge how well something worked')],
   expr=[('it moved the timing, not the number',
          'the finding this cycle turns on'),
         ('a policy more damaging to stop than it was useful to start',
          'names an expensive mistake'),
         ('sold as something it is not', 'what the two experts agree '
          'about'),
         ('judged on the wrong measure', 'explains why good policies get '
          'cut')],
   trans=['admittedly', 'and yet', 'on balance', 'however'],
  ),
 ],
 technique=dict(
  title='Yes, No or Not Given: the writer’s view, not the world',
  body=('This question type takes more marks from candidates at band 5.5 '
        'than any other, and the reason is always the same. The question '
        'does not ask whether the statement is true. It asks whether the '
        'writer said it. You may know that a statement is correct and the '
        'answer can still be Not Given, because the passage never '
        'mentioned it. Work in this order. First, find the part of the '
        'passage the statement is about, using a name or a number from the '
        'statement. Second, read the two sentences around it, not the '
        'whole paragraph. Third, decide: the writer says this, the writer '
        'says the opposite, or the writer does not say. The commonest '
        'error is choosing No when the passage simply says nothing, '
        'because a statement that feels wrong feels like it was denied. '
        'The second commonest is choosing Yes because the statement is '
        'true in the world. Both are fixed by asking one question out '
        'loud: where is the sentence?'),
  panel=[('Three answers, three meanings',
          'Yes: the writer says it. No: the writer says the opposite. Not '
          'Given: the writer does not say.'),
         ('Find the sentence first',
          'Use a name, a number or an unusual word from the statement. '
          'Then read two sentences, not the paragraph.'),
         ('No means contradicted',
          'If you cannot point at the sentence that denies it, the answer '
          'is Not Given, however wrong it sounds.'),
         ('Your knowledge is not evidence',
          'True in the world and Not Given in the passage happen together '
          'all the time.')],
  task='Do the eight Yes/No/Not Given items in cycles 4 and 5 again, and '
       'write the sentence number you used for each.',
  qs=['For each Yes, which sentence says it?',
      'For each No, which sentence denies it?',
      'For each Not Given, what would the passage have had to say?',
      'Did you choose No anywhere without finding a sentence?',
      'Did your own knowledge change any answer?']),
 outlining=dict(
  title='Spot the unequal and spot the overlap on one brainstorm',
  body=('Brainstorming gives you ten ideas and most of them cannot be '
        'used. Two tests remove most of the waste in about a minute. The '
        'first is the overlap test: are two of these the same idea in '
        'different words? "Children are expensive" and "people cannot '
        'afford a second child" are one idea, and writing both produces a '
        'paragraph that repeats itself, which an examiner sees '
        'immediately. The second is the unequal test: is one of these '
        'much bigger than the others? If one idea could fill a paragraph '
        'and another is a single sentence, they do not belong at the same '
        'level, and the small one is usually an example of the big one. '
        'Move it underneath rather than deleting it: you have just found '
        'your support.'),
  frame=('Governments should not try to raise the birth rate, because the '
         'causes of the fall are things nobody wants to reverse, and the '
         'money would do more good spent on the ageing population itself',
         [('The causes of the fall are mostly good things',
           ['children survive, girls are educated, women work',
            'reversing any of these is not a policy anybody will '
            'propose']),
          ('The money has a better use',
           ['the three real choices are taxes, pensions and the pension '
            'age',
            'spending on childcare helps parents now, whatever it does to '
            'the rate'])]),
  task='Take your cycle 4 brainstorm and mark every overlap and every '
       'unequal pair.',
  qs=['Which two of your ideas were the same idea?',
      'Which idea was much bigger than the rest?',
      'Which small idea is really an example of a big one?',
      'How many ideas were left after both tests?',
      'Is what is left enough for two body paragraphs?'],
  answers=['usually two pairs out of ten',
           'there is almost always exactly one',
           'move it underneath, do not delete it',
           'four or five is normal and is plenty',
           'two good ideas with two supports each is a band 6 essay']),
 candos=['I can read a procedure notice for its deadline and its order',
         'I can answer Yes, No or Not Given by finding the sentence',
         'I can describe a two-series bar chart and work out the falls',
         'I can explain what a dependency ratio is and why it matters',
         'I can say that a policy worked without the effect it was sold '
         'on'],
 tip=('On Yes/No/Not Given, say "where is the sentence?" out loud before '
      'you answer. If you cannot point at one, the answer is Not Given, '
      'whatever you happen to know about the world.'),
)
