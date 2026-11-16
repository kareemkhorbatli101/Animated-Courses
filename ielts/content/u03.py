# -*- coding: utf-8 -*-
"""Unit 3 - Health and Medicine. IELTS Volume 1, band 5.0."""

_WAIT = dict(kind='bar',
             title='Average waiting time for a first appointment',
             sub='four hospitals, weeks, 2015 and 2025',
             ylab='weeks',
             cats=['Northgate', 'St Aldwyn', 'Hollowfield', 'Brackmere'],
             series=[('2015', [9.4, 12.1, 7.8, 14.6]),
                     ('2025', [6.2, 8.5, 9.1, 10.3])])

UNIT = dict(
 n=3, vol=1, level='B1', band='5.0',
 theme='Health and Medicine',
 opener=(
   'This unit begins at a doctor’s surgery and ends with a question '
   'that sounds like arithmetic and is not: what does a national '
   'average actually tell you about anybody? On the way you will read '
   'four people describing their sleep, compare waiting times at four '
   'hospitals, and find out why people in rich countries began living '
   'much longer about fifty years before modern medicine arrived. The '
   'technique page is Matching Information, which is the slowest '
   'question type in the paper and the one worth planning for.'),

 cycles=[
  dict(
   sub='Registering with a surgery',
   step=1,
   read=[
    dict(heading='Meadow Lane Surgery: registering and appointments',
         kind='Notice', task='Flow-chart completion and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A surgery notice is read for who does what, and when',
                ['Notices of this kind contain two kinds of sentence: '
                 'what you must do and what the surgery will do. Mark '
                 'which is which as you read.',
                 'The sentence beginning "if" is nearly always tested, '
                 'because it is the one people miss.']),
         paras=[
          'To register, bring photographic identification and proof of your '
          'address to reception. If you have neither, you may still '
          'register: nobody is refused for lack of documents, although it '
          'takes longer.',
          'You will be asked to complete a short health questionnaire. '
          'This decides whether you need an appointment with a nurse '
          'before you see a doctor, which is usual for anybody taking '
          'regular medication.',
          'Registration takes about five working days. You will receive a '
          'text message when it is complete, and you should not book an '
          'appointment before it arrives.',
          'Appointments are released at 8 a.m. each morning for that day and '
          'two weeks ahead. Routine appointments may be booked online; '
          'same-day appointments must be booked by telephone, because a '
          'receptionist asks several questions first.',
          'If you need a repeat prescription, order it online or in '
          'writing and allow two full working days. Requests are not '
          'taken by telephone, as spoken drug names are too easily '
          'confused.',
          'If the surgery is closed and the problem cannot wait until '
          'morning, telephone the out-of-hours service on 111. In an '
          'emergency, telephone 999.'],
         items=[
          ('Patients without documents are ____________ registered.',
           None, 'still',
           'Paragraph 1: nobody is refused for lack of documents.'),
          ('A new patient must complete a short health '
           '____________.', None, 'questionnaire',
           'Paragraph 2, used to decide whether a nurse is seen '
           'first.'),
          ('Registration takes about ____________ working days.', None,
           'five', 'Paragraph 3, confirmed by text message.'),
          ('At what time are appointments released each morning?', None,
           '8 a.m.', 'Paragraph 4, for that day and two weeks ahead.'),
          ('How long should patients allow for a repeat '
           'prescription?', None, 'two full working days',
           'Paragraph 5, and requests are not taken by telephone.'),
          ('Which number should be called when the surgery is '
           'closed?', None, '111',
           'Paragraph 6, unless it is an emergency.')]),
    dict(heading='When to use which service', kind='Triage table',
         task='Matching features', band='gt_short',
         qtype='Questions 7-10',
         paras=[
          'A pharmacy deals with coughs, sore throats, rashes and minor '
          'pain. No appointment is needed and a pharmacist can advise '
          'without any record being made.',
          'The surgery deals with anything lasting more than a few days, '
          'anything returning repeatedly, and all long-term conditions. '
          'An appointment is needed and your record is updated.',
          'A walk-in centre deals with injuries that are not serious: '
          'sprains, small cuts and suspected minor fractures. No '
          'appointment is needed, and the centre can take an X-ray '
          'between 8 a.m. and 8 p.m.',
          'The emergency department deals with severe bleeding, chest '
          'pain, breathing difficulty and loss of consciousness. It is '
          'open at all times, and people who attend with minor problems '
          'wait longest because the most serious patients are seen '
          'first.'],
         items=[
          ('Which service can be used without an appointment and keeps '
           'no record?',
           ['the pharmacy', 'the surgery', 'the walk-in centre',
            'the emergency department'], 0,
           'Paragraph 1: a pharmacist can advise with no record '
           'made.'),
          ('Which service deals with a problem that keeps returning?',
           ['the pharmacy', 'the surgery', 'the walk-in centre',
            'the emergency department'], 1,
           'Paragraph 2, along with long-term conditions.'),
          ('Which service can take an X-ray?',
           ['the pharmacy', 'the surgery', 'the walk-in centre',
            'the emergency department'], 2,
           'Paragraph 3, between 8 a.m. and 8 p.m.'),
          ('At the emergency department, patients with minor problems '
           'wait ____________.', None, 'longest',
           'Paragraph 4, because serious patients are seen first.')])],
   listen=[
    dict(heading='Registering a family', part='Part 1',
         task='A conversation at a surgery reception', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Receptionist', 'Good morning. How can I help?'),
          ('Patient', 'I would like to register. We have just moved '
           'here.'),
          ('Receptionist', 'Of course. How many people?'),
          ('Patient', 'Four. Myself, my husband and two children.'),
          ('Receptionist', 'And your address?'),
          ('Patient', 'Twelve Alverstone Road.'),
          ('Receptionist', 'That is inside our area, which is the first '
           'thing I have to check. Have you brought identification?'),
          ('Patient', 'I have my passport. My husband has not got his '
           'with him.'),
          ('Receptionist', 'That is not a problem. We can register him '
           'without it; it simply takes a little longer.'),
          ('Patient', 'Good. My daughter takes medicine for asthma.'),
          ('Receptionist', 'Then she will see the nurse first, before any '
           'doctor’s appointment. That is standard for regular '
           'medication.'),
          ('Patient', 'How long does registration take?'),
          ('Receptionist', 'About five working days. You will get a text '
           'when it is done. Please do not try to book before that.'),
          ('Patient', 'And the asthma prescription in the meantime?'),
          ('Receptionist', 'Ask your old surgery for one more month. '
           'Once you are registered here, order repeats online and allow '
           'two working days.'),
          ('Patient', 'Not by telephone?'),
          ('Receptionist', 'Never by telephone. Drug names sound too '
           'similar.'),
          ('Patient', 'Understood. And if one of them is ill tonight?'),
          ('Receptionist', 'We close at half past six. After that, ring '
           'one one one.')],
         items=[
          ('Number of people registering: ____________', None, 'four',
           'Two adults and two children in the family.'),
          ('Address: ____________ Alverstone Road', None, '12',
           'Which the receptionist checks is inside the area.'),
          ('Identification brought: ____________', None, 'passport',
           'Her husband has not brought his.'),
          ('The daughter must first see the ____________.', None,
           'nurse', 'Because she takes regular medication.'),
          ('Registration takes about ____________ working days.', None,
           'five', 'Confirmed afterwards by text message.'),
          ('The surgery closes at ____________.', None, '6.30',
           'After which patients should ring 111.')])],
   speak=dict(
    part='Part 1', focus='Keeping healthy',
    intro=('Two or three sentences each. One habit described properly '
           'is better than a list.'),
    qs=['Do you do any exercise?',
        'Has your diet changed in recent years?',
        'Do you sleep well?',
        'Is it easy to see a doctor where you live?'],
    shape=[('answer', 'I cycle to work, which is about twenty minutes '
            'each way.'),
           ('support', 'It is the only exercise I do and it is '
            'difficult to avoid.'),
           ('follow-up', 'When I had a car I did nothing at all, so the '
            'bicycle was the best decision I made.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a surgery to transfer your records',
         prompt=('You have moved to a new area and have registered with '
                 'a new doctor. Write a letter to your previous '
                 'surgery. In your letter: say who you are and that you '
                 'have moved; ask for your records to be transferred; '
                 'explain what you need in the meantime. Write at least '
                 '150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about my family’s medical records. We were '
          'patients at your surgery for nine years and moved to '
          'Brackmere on 2 April. We have now registered at Meadow Lane '
          'Surgery, Brackmere.',
          'I should be grateful if you could arrange for the records of '
          'all four of us to be transferred to our new surgery. Our '
          'names are given below with our dates of birth, as I '
          'understand that two patients at your surgery share my '
          'husband’s name.',
          'There is one matter that cannot wait for the transfer. My '
          'daughter takes regular medication for asthma and has about '
          'ten days of it left. Our new registration will not be '
          'complete for a week, and I would be grateful if you could '
          'issue one further month’s prescription in the meantime.',
          'If that is not possible, could you tell me today, so that I '
          'can ask the new surgery to make other arrangements?',
          'Thank you for your help over the last nine years.',
          'Yours faithfully,',
          'Rosalind Achterberg-Nkemdi'],
         notes=[
          'The writer gives dates of birth and explains why: two patients '
          'share a name. Anticipating the reader’s difficulty is the '
          'mark of a letter that gets acted on quickly.',
          'The urgent item is separated into its own paragraph and the '
          'timing is made explicit: ten days of medication, a week to '
          'register. A reader can act on that without asking anything '
          'back.',
          'The last request asks for a refusal to be given quickly, which '
          'is often more useful than the thing originally asked for.'],
         criterion=[('Anticipating the reader’s difficulty',
                     'Task Achievement'),
                    ('The urgent item separated and dated',
                     'Task Response'),
                    ('Asking for a quick refusal if necessary',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Indirect questions; polite forms with could and would',
    explain=('Requests to an institution use could or would with a '
             'softening phrase, and questions go inside statements.'),
    examples=['I should be grateful if you could arrange for the records '
              'to be transferred.',
              'Could you tell me whether a prescription can be issued?',
              'I would be grateful for an answer today.',
              'I am writing to ask how long the transfer usually '
              'takes.'],
    task='Rewrite each request in a polite formal form.',
    items=[('Send my records to the new surgery.',
            'I should be grateful if you could arrange for my records to '
            'be transferred to my new surgery.'),
           ('Can you give me another prescription?',
            'Could you issue one further month’s prescription in the '
            'meantime?'),
           ('Tell me today.',
            'I would be grateful if you could let me know today.'),
           ('How long does it take?',
            'Could you tell me how long the transfer usually takes?'),
           ('I want to know if you got my letter.',
            'I am writing to ask whether my letter of 2 April was '
            'received.')]),
   vocab=[('referral', 'being sent to a specialist by a doctor'),
          ('repeat prescription', 'medicine supplied again without a '
           'new appointment'),
          ('walk-in centre', 'a clinic that needs no appointment'),
          ('out of hours', 'when the surgery is closed'),
          ('catchment area', 'the area a surgery serves'),
          ('symptom', 'a sign that you are unwell'),
          ('appointment slot', 'a fixed time to see a doctor'),
          ('medical record', 'the written history of your health')],
   expr=[('I should be grateful if you could arrange for',
          'the central request of a formal letter'),
         ('there is one matter that cannot wait',
          'separates the urgent item'),
         ('if that is not possible, could you tell me today',
          'asks for a quick refusal'),
         ('as I understand that two patients share the name',
          'anticipates the reader’s difficulty')],
   trans=['furthermore', 'in addition', 'in the meantime', 'finally'],
  ),

  dict(
   sub='Sleep and health',
   step=2,
   read=[
    dict(heading='Four people on how they sleep',
         kind='Four short texts',
         task='Matching features and True/False/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Ignatius: I sleep seven hours and I wake at four every '
          'morning for about an hour. My doctor says that is normal and '
          'was normal for most of history. Knowing that fixed the '
          'problem, because the worry was worse than the waking.',
          'B  Delphine: My difficulty is the start, not the middle. I lie '
          'there with the day going round. The only thing that has '
          'helped is writing tomorrow’s list on paper before I go up, '
          'which sounds too simple to work.',
          'C  Rasheed: I sleep badly on Sunday and well on Friday, and I '
          'used to think that was stress. It is light. I get up at six '
          'on weekdays and at nine at weekends, so every Monday I am '
          'crossing three time zones without leaving the house.',
          'D  Yevgenia: I take a nap after lunch, twenty minutes, every '
          'day. People tell me it will ruin my night and it never has. '
          'What ruins my night is coffee after four o’clock, which took '
          'me years to notice.'],
         items=[
          ('Which person stopped worrying after being told something '
           'was normal?',
           ['Ignatius', 'Delphine', 'Rasheed', 'Yevgenia'], 0,
           'Waking at four, which his doctor called normal.'),
          ('Which person finds falling asleep the difficulty?',
           ['Ignatius', 'Delphine', 'Rasheed', 'Yevgenia'], 1,
           'The start, not the middle, of the night.'),
          ('Which person describes an effect caused by different '
           'waking times?',
           ['Ignatius', 'Delphine', 'Rasheed', 'Yevgenia'], 2,
           'Six on weekdays and nine at weekends.'),
          ('Which person identified a cause after a long time?',
           ['Ignatius', 'Delphine', 'Rasheed', 'Yevgenia'], 3,
           'Coffee after four o’clock, noticed after years.'),
          ('Delphine writes her list on her telephone.',
           ['True', 'False', 'Not Given'], 1,
           'She says she writes it on paper.'),
          ('Rasheed has discussed his sleep with a doctor.',
           ['True', 'False', 'Not Given'], 2,
           'No doctor is mentioned in his text.')])],
   listen=[
    dict(heading='A nurse on sleep', part='Part 2',
         task='A talk at a health centre', band='l2',
         qtype='Questions 23-28',
         script=[
          ('Nurse', 'Good evening. I am going to spend fifteen minutes '
           'on sleep, and I will start by taking away the idea that '
           'everybody needs eight hours.'),
          ('Nurse', 'Adults need between seven and nine, and where you '
           'sit in that range is mostly decided for you. People who sleep '
           'seven hours and feel well are not short of sleep.'),
          ('Nurse', 'Waking in the night is what I am asked about most, '
           'and for most people it is not a disorder. Before artificial '
           'light, people slept in two blocks with an hour awake between '
           'them. If you wake at four and worry, the worry keeps you '
           'awake far longer than the waking would have.'),
          ('Nurse', 'Three things make a real difference and I will give '
           'them in order of size. The first is the time you get up, not '
           'the time you go to bed. Keep it within an hour at weekends, '
           'because a three-hour difference on Saturday produces the same '
           'effect as flying across three time zones.'),
          ('Nurse', 'The second is caffeine. It stays in the body for '
           'five to six hours, so a coffee at four is still working at '
           'ten at night, and most people who say it does not affect them '
           'have never tested it.'),
          ('Nurse', 'The third is light in the evening, and the '
           'brightness matters more than the screen itself.'),
          ('Nurse', 'And one thing that is not on the list: a twenty '
           'minute nap after lunch does no harm to most people. An hour '
           'at six in the evening is a different matter.')],
         items=[
          ('Adults need between ____________ and nine hours of sleep.',
           None, 'seven', 'And where they sit in that range is mostly '
           'decided for them.'),
          ('Before artificial light, people slept in ____________ '
           'blocks.', None, 'two',
           'With about an hour awake between them.'),
          ('The first and largest factor is the time you ____________.',
           None, 'get up', 'Rather than the time you go to bed.'),
          ('A three-hour difference at weekends is compared to crossing '
           'three ____________.', None, 'time zones',
           'Which is why Monday feels as it does.'),
          ('Caffeine stays in the body for ____________ to six hours.',
           None, 'five', 'So an afternoon coffee is still working at '
           'night.'),
          ('For evening light, she says what matters most is the',
           ['screen', 'brightness', 'colour', 'distance'], 1,
           'A bright room does as much as a telephone.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Sleep',
    intro=('Short answers, then the long turn. Say what the habit is '
           'before you say why you want to change it.'),
    cue=('Describe a habit you would like to change.',
         ['what the habit is', 'how long you have had it',
          'why you would like to change it',
          'and explain what has stopped you so far']),
    qs=['How many hours do you sleep?',
        'Do you use your phone before bed?',
        'Now look at the card. You have one minute to make notes.',
        'Do people sleep less than they used to?'],
    shape=[('answer', 'Going to bed after midnight, every night.'),
           ('support', 'I have done it since I started working '
            'shifts.'),
           ('follow-up', 'I get up at six whatever time I go to bed, so '
            'I lose an hour every day.'),
           ('support', 'What stops me is that the evening is the only '
            'quiet time I have.'),
           ('follow-up', 'So the honest answer is that I am choosing '
            'it, which is harder to admit than calling it a '
            'problem.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should schools start later so that teenagers sleep '
                 'more?',
         prompt=('Some people believe schools should start later in the '
                 'morning so that teenagers can sleep longer. To what '
                 'extent do you agree? Write at least 250 words.'),
         model=[
          'I agree that secondary schools should start later, because '
          'the problem they are responding to is a biological one rather '
          'than a question of discipline, and because the evidence from '
          'the schools that have tried it is unusually clear.',
          'The first reason is that teenagers do not fall asleep at the '
          'same time as adults. The change is not a matter of choice or '
          'of mobile telephones: the body clock shifts by about two '
          'hours during adolescence and shifts back in the early '
          'twenties. A teenager told to sleep at ten is being told to do '
          'something that an adult told to sleep at eight would find '
          'equally impossible.',
          'The second reason is what happened where the change was made. '
          'Several districts that moved the start from half past seven '
          'to half past eight reported better attendance, fewer late '
          'arrivals and, in the most carefully measured case, a fall in '
          'road accidents involving teenage drivers in the morning.',
          'The strongest objection is practical rather than scientific. '
          'A later start means a later finish, which affects sport, '
          'part-time jobs and parents who leave for work at eight. These '
          'are real costs and they fall on families rather than on '
          'schools, which is why the change is often announced and then '
          'quietly dropped.',
          'My view is that the objection argues for planning rather than '
          'for refusing. Where the change has been made together with '
          'the bus timetable and the sports programme, it has survived; '
          'where it was made alone, it has not. The question is not '
          'whether teenagers would benefit, which is settled, but '
          'whether anybody is willing to move everything else as '
          'well.'],
         notes=[
          'Structure 1 with the objection taken seriously in the fourth '
          'paragraph. A one-sided essay that never meets an objection '
          'reads as though the writer has not thought about the '
          'question.',
          'The second paragraph refuses the usual framing — discipline '
          'and telephones — and replaces it with a mechanism. That is the '
          'move that makes this essay more than an opinion.',
          'The conclusion separates what is settled from what is not, '
          'which is a precise way of agreeing without overclaiming.'],
         criterion=[('A mechanism in place of the usual framing',
                     'Task Response'),
                    ('The practical objection taken seriously',
                     'Task Response'),
                    ('A conclusion that separates settled from '
                     'unsettled', 'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Advice structures: ought to, it is worth, you may as well',
    explain=('Advice is softer and more natural when it is not given as '
             'an order.'),
    examples=['It is worth keeping your waking time the same at '
              'weekends.',
              'You ought to test whether coffee affects you rather than '
              'assuming.',
              'What tends to help is writing the list before you go '
              'up.',
              'You may as well try it for a fortnight and see.'],
    task='Rewrite each instruction as advice.',
    items=[('Get up at the same time every day.',
            'It is worth getting up at about the same time every day, '
            'including at weekends.'),
           ('Do not drink coffee after four.',
            'You ought to avoid caffeine after about four o’clock if '
            'you sleep badly.'),
           ('Write your list before bed.',
            'What tends to help is writing tomorrow’s list before you '
            'go upstairs.'),
           ('Make the room darker.',
            'You may as well try dimming the lights for an hour before '
            'bed.'),
           ('Stop worrying about waking up.',
            'It is worth knowing that waking in the night is normal, '
            'because the worry does more harm than the waking.')]),
   vocab=[('insomnia', 'difficulty in sleeping'),
          ('sleep pattern', 'the usual shape of a person’s night'),
          ('nap', 'a short sleep during the day'),
          ('wind down', 'to become calm before sleeping'),
          ('alert', 'awake and able to concentrate'),
          ('screen', 'the lit surface of a phone or computer'),
          ('body clock', 'the internal timing of sleep and waking'),
          ('shift work', 'work at changing or unusual hours')],
   expr=[('what tends to help is',
          'introduces advice without ordering'),
         ('it is worth trying for a fortnight',
          'suggests a test rather than a rule'),
         ('the worry is worse than the waking',
          'the sentence this cycle turns on'),
         ('crossing three time zones without leaving the house',
          'makes a dull fact memorable')],
   trans=['first', 'secondly', 'above all', 'in practice'],
  ),

  dict(
   sub='What a hospital measures',
   step=2,
   read=[
    dict(heading='Waiting times: what the figures do and do not show',
         kind='Article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 29-34',
         figure=_WAIT,
         paras=[
          'The chart above shows the average wait for a first '
          'appointment at four hospitals in 2015 and 2025. Three of the '
          'four improved and one did not, which is the first thing to '
          'say about it and almost the last thing that can be said '
          'safely.',
          'The difficulty is what an average hides. A hospital where '
          'everybody waits eight weeks and a hospital where half the '
          'patients wait two weeks and half wait fourteen have the same '
          'average and are not the same place. The second hospital is '
          'the one with a problem, and the figure conceals it.',
          'The second difficulty is that waiting is measured from the '
          'referral, and referrals are not made at the same point '
          'everywhere. A surgery that refers early produces a long '
          'hospital wait and a short total wait for the patient; a '
          'surgery that refers late produces the opposite.',
          'The third difficulty is that a target changes behaviour. Where '
          'hospitals were measured on the proportion of patients seen '
          'within eighteen weeks, the number seen in week seventeen rose '
          'sharply and the number seen in week nineteen fell, which is '
          'not what anybody intended.',
          'None of this means the figures are worthless. It means they '
          'answer a narrow question: how long, on average, between two '
          'administrative events. A patient asking "when will I be seen?" '
          'is asking something the figure does not measure.'],
         items=[
          ('Which paragraph explains how a target changed behaviour?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'More patients seen in week seventeen, fewer in week '
           'nineteen.'),
          ('Which paragraph shows that two hospitals can share an '
           'average and differ?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Eight weeks for everybody against two and fourteen.'),
          ('Which paragraph concerns where the measurement starts?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Referral, which is made earlier at some surgeries.'),
          ('In the chart, ____________ of the four hospitals '
           'improved.', None, 'three',
           'Paragraph 1, which is the safest thing to say.'),
          ('Hospitals were measured on patients seen within '
           '____________ weeks.', None, 'eighteen',
           'Paragraph 4, which changed when patients were seen.'),
          ('The figures answer a narrow question about the time between '
           'two ____________ events.', None, 'administrative',
           'Paragraph 5, which is not the patient’s question.')])],
   listen=[
    dict(heading='Two patients compare experiences', part='Part 3',
         task='A discussion between two patients', band='l3',
         qtype='Questions 35-40',
         script=[
          ('Delphine', 'How long did you wait in the end?'),
          ('Rasheed', 'Eleven weeks. You?'),
          ('Delphine', 'Four. And we were referred by the same surgery in '
           'the same month, which is what I cannot understand.'),
          ('Rasheed', 'Different hospitals. You went to Northgate and I '
           'went to Brackmere.'),
          ('Delphine', 'But the published figures say Brackmere is ten '
           'and Northgate is six, so you should have waited ten and I '
           'should have waited six.'),
          ('Rasheed', 'Which tells you what the averages are worth for '
           'one person.'),
          ('Delphine', 'That is the part I find hard. The number is not '
           'wrong and it did not describe either of us.'),
          ('Rasheed', 'My consultant explained it. Brackmere splits '
           'everything into urgent and routine, and urgent cases are seen '
           'in about three weeks. The routine list is much longer than '
           'the average suggests, and I was routine.'),
          ('Delphine', 'So the average is two different queues added '
           'together.'),
          ('Rasheed', 'Exactly. And the published figure does not say '
           'which queue you are in, which is the only thing a patient '
           'wants to know.'),
          ('Delphine', 'Did anybody tell you which you were in?'),
          ('Rasheed', 'Not at any point. I found out at week nine, by '
           'asking.'),
          ('Delphine', 'That is the thing I would change, then. Not the '
           'waiting, the not knowing.'),
          ('Rasheed', 'The not knowing, and the fact that asking is what '
           'got me an answer. People who do not ask wait longer, and '
           'that cannot be right.')],
         items=[
          ('Rasheed waited ____________ weeks.', None, 'eleven',
           'Against Delphine’s four, from the same surgery.'),
          ('The published figure for Brackmere is ____________ '
           'weeks.', None, 'ten',
           'And six for Northgate, which is the reverse of what '
           'happened.'),
          ('Brackmere divides patients into urgent and ____________.',
           None, 'routine', 'With urgent cases seen in about three '
           'weeks.'),
          ('Rasheed says the average is two different ____________ '
           'added together.', None, 'queues',
           'Which the published figure does not separate.'),
          ('He found out which list he was on in week ____________.',
           None, 'nine', 'And he found out only because he asked.'),
          ('Delphine says what she would change is not the waiting but '
           'the', ['cost', 'not knowing', 'travelling', 'paperwork'], 1,
           'Which Rasheed extends to the people who do not ask.')])],
   speak=dict(
    part='Part 3', focus='Judging a health service',
    intro=('Three or four sentences. Say what a number does and does '
           'not tell you.'),
    qs=['How can you tell whether a hospital is good?',
        'Are waiting times a fair measure?',
        'Should patients be able to choose their hospital?',
        'What information should hospitals publish?'],
    shape=[('answer', 'Not from the published waiting times alone.'),
           ('support', 'An average can hide two completely different '
            'queues.'),
           ('follow-up', 'A friend of mine waited eleven weeks at a '
            'hospital whose average was six.'),
           ('support', 'What would help is knowing which list you are '
            'on.'),
           ('follow-up', 'At the moment the people who ask find out and '
            'the people who do not ask wait, which is the opposite of '
            'fair.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Average waiting times at four hospitals, 2015 and '
                 '2025',
         prompt=('The chart below shows the average waiting time for a '
                 'first appointment at four hospitals in 2015 and 2025. '
                 'Summarise the information by selecting and reporting '
                 'the main features, and make comparisons where '
                 'relevant. Write at least 150 words.'),
         figure=_WAIT,
         model=[
          'The bar chart compares the average waiting time for a first '
          'appointment at four hospitals in 2015 and in 2025. Overall, '
          'waiting times fell at three of the four hospitals, while the '
          'fourth was the only one to move in the opposite direction, '
          'and the differences between the hospitals narrowed over the '
          'period.',
          'The largest improvement was at Brackmere, where the average '
          'wait fell from 14.6 weeks to 10.3, a reduction of more than '
          'four weeks. St Aldwyn also improved substantially, from 12.1 '
          'to 8.5 weeks, and Northgate fell from 9.4 to 6.2 weeks, '
          'making it the shortest wait of the four in 2025.',
          'Hollowfield was the exception. Having had the shortest wait in '
          '2015 at 7.8 weeks, it rose to 9.1 weeks and ended the period '
          'third of the four.',
          'The range narrowed considerably. In 2015 the gap between the '
          'longest and the shortest wait was almost seven weeks; by 2025 '
          'it was about four. Every hospital therefore ended closer to '
          'the others than it began, whether it improved or not.'],
         notes=[
          'The Overall statement says three things: most fell, one did '
          'not, and the hospitals converged. The third is the kind of '
          'observation that separates the higher bands.',
          'Hollowfield is given its own paragraph because it is the '
          'exception. A reader should be able to see at a glance which '
          'hospital broke the pattern.',
          'The last paragraph compares the ranges in the two years, which '
          'is a comparison between the series rather than inside it. On a '
          'two-series chart that is where the marks are.'],
         criterion=[('An Overall that notices the convergence',
                     'Task Achievement'),
                    ('The exception given its own paragraph',
                     'Coherence and Cohesion'),
                    ('A comparison between the two years, not inside '
                     'one', 'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing change: rose, levelled off, fell back',
    explain=('A change needs a verb for the direction and a phrase for '
             'the size, and the two should not be the same word.'),
    examples=['Waiting times fell from 14.6 weeks to 10.3.',
              'Hollowfield rose slightly, from 7.8 to 9.1 weeks.',
              'The gap narrowed from almost seven weeks to about '
              'four.',
              'Three of the four improved, though not evenly.'],
    task='Rewrite each sentence with a direction verb and a size.',
    items=[('Brackmere got better.',
            'The average wait at Brackmere fell by more than four weeks, '
            'from 14.6 to 10.3.'),
           ('Hollowfield got worse.',
            'Hollowfield rose from 7.8 weeks to 9.1, the only hospital to '
            'move upwards.'),
           ('The hospitals became more similar.',
            'The gap between the longest and shortest wait narrowed from '
            'almost seven weeks to about four.'),
           ('Northgate is now the best.',
            'Northgate fell to 6.2 weeks, the shortest wait of the four '
            'in 2025.'),
           ('Most improved.',
            'Waiting times fell at three of the four hospitals over the '
            'ten-year period.')]),
   vocab=[('waiting list time', 'how long patients wait to be seen'),
          ('national figure', 'the number for the whole country'),
          ('average', 'the usual value of a set of numbers'),
          ('urgent case', 'a patient who must be seen quickly'),
          ('routine case', 'a patient who can wait'),
          ('published figures', 'numbers made available to the '
           'public'),
          ('queue', 'a line of people waiting in order'),
          ('performance figure', 'a number used to judge a '
           'service')],
   expr=[('waiting times fell at three of the four, though not evenly',
          'reports a mixed result accurately'),
         ('the average is two queues added together',
          'the sentence this cycle turns on'),
         ('the number is not wrong and it did not describe either of us',
          'states the limit of an average'),
         ('the people who ask find out',
          'names an unfairness in one line')],
   trans=['while', 'whereas', 'overall', 'by contrast'],
  ),

  dict(
   sub='Why people live longer than they did',
   step=3,
   read=[
    dict(heading='Clean water, vaccines and the fall in child deaths',
         kind='Academic passage',
         task='Matching headings, True/False/Not Given and summary '
              'completion',
         band='acad', qtype='Questions 41-48',
         paras=[
          'Life expectancy in western Europe was around forty in 1850 and is '
          'around eighty now, which is the largest change in human health '
          'that has ever been recorded, and most people assume that modern '
          'medicine is responsible for it. The assumption is understandable '
          'and the timing does not support it. The majority of the '
          'improvement had already occurred before antibiotics, before most '
          'vaccines, and before any of the treatments that make modern '
          'hospitals expensive. The order of events is not in dispute; what '
          'the order means is argued about constantly.',
          'The first point to grasp is that average life expectancy is '
          'dominated by deaths in childhood. A population in which a quarter '
          'of children die before the age of five will show an average of '
          'about forty even if most of the adults who survive childhood '
          'reach sixty-five in good health. Preventing those childhood '
          'deaths moves the average enormously; extending old age moves it '
          'very little. An average is therefore a statement about children '
          'before it is a statement about anybody else.',
          'The main cause of the fall in child deaths was clean water and '
          'the removal of sewage, achieved in European cities between about '
          '1860 and 1910. The connection is visible in the city records: '
          'deaths from diarrhoeal disease fall sharply in the decade in '
          'which each city completed its drainage, and the order in which '
          'the cities improved matches the order in which they built. That '
          'match is the strongest evidence available for a cause in a period '
          'with no controlled trials.',
          'Food supply was the second cause and is considerably harder to '
          'measure. Better nutrition does not prevent infection directly; '
          'what it determines is whether a child survives one, and how '
          'quickly. The effect therefore appears in the records as a '
          'reduction in deaths from a dozen different diseases at once, '
          'which is exactly the pattern historians argue about, since a '
          'general improvement is consistent with several different '
          'explanations.',
          'Medicine entered late and then mattered enormously. Vaccines '
          'against smallpox, diphtheria and measles removed diseases that '
          'sanitation could not touch, and antibiotics after 1945 changed '
          'the outcome of infections that had previously been decided by the '
          'patient’s own strength. The honest summary is that drains '
          'produced most of the first eighty per cent of the improvement and '
          'medicine produced most of the last twenty, and that the last '
          'twenty per cent contains almost everything that keeps adults '
          'alive today rather than children.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The timing problem', 'Why child deaths dominate',
            'Water and sewage', 'When medicine arrived'], 1,
           'A quarter of children dying pulls the average to about '
           'forty.'),
          ('Choose the best heading for paragraph 3.',
           ['The drainage of cities', 'Food and nutrition',
            'Vaccines and antibiotics', 'What historians dispute'], 0,
           'City records matching the order in which drains were '
           'built.'),
          ('Choose the best heading for paragraph 5.',
           ['The first eighty per cent', 'Medicine arrives late',
            'Measuring nutrition', 'Life expectancy in 1850'], 1,
           'Vaccines and antibiotics, after the main improvement.'),
          ('Most of the improvement in life expectancy happened before '
           'antibiotics.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 1 states this directly.'),
          ('The writer believes modern medicine has made no '
           'difference.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 5 says it mattered enormously.'),
          ('Historians agree about the size of the nutrition effect.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 4 says this is exactly what they argue about.'),
          ('European cities completed their drainage between about '
           '1860 and ____________.', None, '1910',
           'Paragraph 3, with deaths falling in the matching decade.'),
          ('Better nutrition determines whether a child ____________ '
           'an infection.', None, 'survives',
           'Paragraph 4, rather than preventing it.')])],
   listen=[
    dict(heading='A lecture on public health history', part='Part 4',
         task='A lecture on why people live longer', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'If I ask a class why we live twice as long as '
           'our ancestors, I get the same answer every year: medicine. '
           'The answer is wrong about the timing and I want to show you '
           'why that matters.'),
          ('Lecturer', 'Life expectancy in western Europe was about forty '
           'in eighteen fifty and about eighty now. Most of that gain was '
           'already achieved before penicillin, which arrives in the '
           'nineteen forties.'),
          ('Lecturer', 'The reason is arithmetic rather than biology. An '
           'average is pulled down violently by deaths in childhood. If a '
           'quarter of children die before five, your average is forty '
           'even when most adults reach sixty-five. Stop the children '
           'dying and the average jumps without a single adult living a '
           'day longer.'),
          ('Lecturer', 'So what stopped the children dying? Drains. '
           'Between about eighteen sixty and nineteen ten, European '
           'cities separated drinking water from sewage, and in the city '
           'archives you can see the death rate from diarrhoeal disease '
           'falling in the decade each city finished the work. The order '
           'of the cities matches the order of the building.'),
          ('Lecturer', 'Food is the second cause and the harder one. '
           'Better fed children survive infections that kill '
           'malnourished ones, so the effect appears as a fall in deaths '
           'from a dozen diseases at once. That pattern is why historians '
           'still argue about how much of the improvement to give it.'),
          ('Lecturer', 'Medicine comes late and then matters '
           'enormously. Vaccines removed smallpox and reduced diphtheria '
           'and measles, which no drain could do, and antibiotics after '
           'nineteen forty-five changed infections that had previously '
           'been settled by the patient’s own strength.'),
          ('Lecturer', 'My summary is this. Drains gave us most of the '
           'first eighty per cent and medicine most of the last twenty. '
           'And if you are over sixty in this room, the last twenty per '
           'cent is the part you are currently living in.')],
         items=[
          ('Life expectancy in western Europe was about ____________ in '
           '1850.', None, 'forty', 'And about eighty years in the present day.'),
          ('He says the reason is ____________ rather than biology.',
           None, 'arithmetic',
           'Because averages are pulled down by child deaths.'),
          ('European cities separated drinking water from '
           '____________.', None, 'sewage',
           'In the half century from about 1860 to 1910.'),
          ('The order of the cities matches the order of the',
           ['outbreaks', 'building', 'vaccines', 'censuses'], 1,
           'Which is the evidence linking drains to the fall.'),
          ('Better fed children survive infections that kill '
           '____________ ones.', None, 'malnourished',
           'Which is why the effect shows in a dozen diseases at '
           'once.'),
          ('He says drains produced most of the first ____________ per '
           'cent.', None, 'eighty',
           'And medicine most of the last twenty.')])],
   speak=dict(
    part='Part 3', focus='Health and where you are born',
    intro=('Four sentences. Try once to explain a cause rather than '
           'naming it.'),
    qs=['Why do people live longer in some countries than others?',
        'Is health mostly decided by money?',
        'What should a government spend health money on first?',
        'Can individuals do much about their own health?'],
    shape=[('answer', 'Mostly things that are not medicine at all.'),
           ('support', 'Clean water and drains did more than hospitals '
            'in the nineteenth century.'),
           ('follow-up', 'Most of the gain in life expectancy came '
            'before antibiotics existed.'),
           ('support', 'The same is true in poorer countries now.'),
           ('follow-up', 'So if I had a fixed budget I would spend the '
            'first part of it on water rather than on a new '
            'hospital.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: medicine or sanitation?',
         prompt=('Has medicine or sanitation done more for human '
                 'health? Brainstorm eight ideas, apply the six tests, '
                 'and write the plan. Twelve minutes.'),
         plan=('Sanitation has done more for human health than medicine, '
               'because it produced most of the improvement in life '
               'expectancy and it did so before medicine could have '
               'contributed, although medicine produced the part we are '
               'living in now',
               [('The timing shows that drains came first and did '
                 'most',
                 ['most of the gain was achieved before antibiotics '
                  'existed',
                  'city death rates fall in the decade each city '
                  'finished its drains']),
                ('Medicine arrived late and then did what sanitation '
                 'could not',
                 ['vaccines removed diseases no drain could touch',
                  'antibiotics changed infections previously decided by '
                  'the patient'])]),
         notes=[
          'This question invites a one-sided answer and the evidence does '
          'not support one. The plan takes a side and concedes the other '
          'in the thesis, which is more accurate and easier to write.',
          'The two headings are in time order, which on a historical '
          'question is almost always the clearest arrangement and saves '
          'you from repeating yourself.',
          'Each support is a dated fact from the unit. Dates are the '
          'cheapest way to make a Task 2 body paragraph specific.'],
         criterion=[('A thesis that takes a side and concedes the '
                     'other', 'Task Response'),
                    ('Headings arranged in time order',
                     'Coherence and Cohesion')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Attributing cause: is attributed to, owes more to',
    explain=('Claims about causes need a verb that shows how direct the '
             'link is said to be.'),
    examples=['The fall in child deaths is largely attributed to clean '
              'water.',
              'The improvement owes more to drains than to '
              'hospitals.',
              'Most of the gain came before antibiotics rather than '
              'after.',
              'Better nutrition contributed, although its size is '
              'disputed.'],
    task='Rewrite each claim so that the strength of the link is '
         'clear.',
    items=[('Drains made people live longer.',
            'The fall in child deaths is largely attributed to clean '
            'water and the removal of sewage.'),
           ('Medicine did not help.',
            'Medicine contributed later than most people assume, rather '
            'than not at all.'),
           ('Food was important.',
            'Better nutrition contributed to the fall, although '
            'historians dispute how much.'),
           ('Vaccines were the main thing.',
            'Vaccines removed diseases that sanitation could not affect, '
            'but they arrived after most of the improvement.'),
           ('Hospitals keep us alive.',
            'Modern treatment owes its importance to the last part of the '
            'improvement rather than the first.')]),
   vocab=[('sanitation', 'the removal of waste and the supply of clean '
           'water'),
          ('clean water', 'water safe to drink'),
          ('sewer', 'a pipe that carries waste away'),
          ('immunisation', 'protection against disease by vaccine'),
          ('child deaths', 'deaths before the age of five'),
          ('mortality', 'the rate at which people die'),
          ('life expectancy', 'how long a person can expect to live'),
          ('nutrition', 'the food a person gets')],
   expr=[('most of the gain came before, rather than after',
          'places a cause in time'),
         ('the average jumps without a single adult living longer',
          'explains how an average works'),
         ('the order of the cities matches the order of the building',
          'states evidence for a cause'),
         ('drains gave us the first eighty per cent',
          'summarises an argument in one line')],
   trans=['chiefly', 'in part', 'above all', 'subsequently'],
  ),

  dict(
   sub='What the figures hide',
   step=4,
   read=[
    dict(heading='Why a national average tells you very little',
         kind='Academic passage',
         task='Matching information, True/False/Not Given and short '
              'answer',
         band='acad', qtype='Questions 55-62',
         paras=[
          'A country reports that life expectancy is 81.2 years, and the '
          'figure is published, quoted and compared with the year before. It '
          'is accurate, it is useful for certain purposes, and it describes '
          'almost nobody who lives in the country it refers to. '
          'Understanding why is the most valuable thing a reader of health '
          'statistics can learn.',
          'Within that one country, life expectancy varies by about ten '
          'years between the richest and the poorest districts, and in '
          'several cities the variation can be seen between neighbouring '
          'stops on the same bus route, which is the comparison that makes '
          'the figure real to people. The national figure is the midpoint of '
          'a range so wide that neither end is recognisable from the middle '
          'of it.',
          'The gap is not mainly explained by the health service, which is a '
          'conclusion that surprises almost everybody who meets it. '
          'Countries with free treatment at the point of use show the same '
          'pattern as countries without it. What differs between the two '
          'ends of the range is housing, work, air, diet and the number of '
          'years spent anxious about money. Treatment arrives after all of '
          'those have done their work, which limits what it can repair.',
          'A second kind of concealment matters more for policy. Average '
          'life expectancy can rise while the gap widens, if the richest '
          'districts improve faster than the poorest. This has happened in '
          'several countries during periods that were described at the time '
          'as successful, and the national figure recorded the success '
          'accurately while recording nothing whatever about the divergence '
          'underneath it.',
          'There is also the question of healthy years rather than years of '
          'life. A population may gain four years of life and three years of '
          'illness within them, and the two are counted in different places '
          'or, in many countries, not counted at all. Where both are '
          'measured, the poorest districts lose about twice as many healthy '
          'years as they lose years of life, so the inequality in illness is '
          'roughly double the inequality in death.',
          'None of this makes the average useless, and it should continue to '
          'be published. It makes it an answer to one narrow question: how '
          'long, on average, in this territory and in this year. A reader '
          'who wants to know how long people live in a particular place, or '
          'whether the country is becoming more equal, has asked two '
          'different questions, and the published figure answers neither of '
          'them.'],
         items=[
          ('Which paragraph explains that the gap is not mainly caused '
           'by health services?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Countries with and without free treatment show the same '
           'pattern.'),
          ('Which paragraph describes an average rising while a gap '
           'widens?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'The richest districts improving faster than the poorest.'),
          ('Which paragraph distinguishes years of life from healthy '
           'years?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Four years of life and three years of illness.'),
          ('The writer believes national averages should not be '
           'published.', ['True', 'False', 'Not Given'], 1,
           'The final paragraph says the average is not useless.'),
          ('In some cities the variation can be seen between stops on '
           'one bus route.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 2 states this about some cities.'),
          ('The writer believes doctors should work in poorer districts '
           'first.', ['True', 'False', 'Not Given'], 2,
           'No recommendation about where doctors should work is '
           'made.'),
          ('By about how many years does life expectancy vary between '
           'the richest and poorest districts?', None, 'ten',
           'Paragraph 2, within a single country.'),
          ('The poorest districts lose about ____________ as many '
           'healthy years as years of life.', None, 'twice',
           'Paragraph 5, where both are measured.')])],
   listen=[
    dict(heading='Two researchers disagree about life expectancy',
         part='Part 4', task='A recorded discussion', band='l4',
         qtype='Questions 63-68',
         script=[
          ('Chair', 'Dr Villaseñor studies health inequality. Professor '
           'Okonkwo-Baird studies hospital treatment. Each begins with '
           'the strongest point against their own position.'),
          ('Villaseñor', 'Mine is that I talk about the ten-year gap as '
           'though nothing inside the health service affects it. Access '
           'to early diagnosis does differ by district, and I leave that '
           'out because it weakens a simple story that I want to '
           'tell.'),
          ('Okonkwo-Baird', 'And mine is that I defend spending on '
           'treatment and I know that the same money spent on housing '
           'would buy more years of life. I defend it anyway, which I '
           'should admit more often than I do.'),
          ('Chair', 'So where is the disagreement?'),
          ('Okonkwo-Baird', 'On what follows. She says move the money. I '
           'say you cannot move money from a service people can see to '
           'one they cannot, and survive the election that follows.'),
          ('Villaseñor', 'Which is a political argument rather than a '
           'medical one, and I accept it as a description of what '
           'happens.'),
          ('Okonkwo-Baird', 'It is, and it decides the outcome, which is '
           'why I think it belongs in the discussion.'),
          ('Villaseñor', 'May I give the finding I would most like '
           'published? Average life expectancy rose in several countries '
           'during years when the gap between districts widened. The '
           'national number went up and the poorest places went '
           'backwards.'),
          ('Okonkwo-Baird', 'That I do not dispute at all. I would add '
           'one thing: healthy years, not years. The poorest districts '
           'lose roughly twice as many healthy years as years of '
           'life.'),
          ('Villaseñor', 'Then we agree about the measurement and '
           'disagree about the politics, which is the clearest '
           'disagreement I have had on this subject.')],
         items=[
          ('The first researcher admits she leaves out differences in '
           'early ____________.', None, 'diagnosis',
           'Because it weakens a simple story.'),
          ('The second admits the same money spent on ____________ '
           'would buy more years of life.', None, 'housing',
           'Although he defends spending on treatment.'),
          ('He argues that money cannot be moved from a service people '
           'can ____________.', None, 'see',
           'To one they cannot, and survive the election.'),
          ('She accepts that this is a ____________ argument rather '
           'than a medical one.', None, 'political',
           'As a description of what happens.'),
          ('Her finding is that averages rose while the gap between '
           'districts', ['narrowed', 'widened', 'vanished',
            'stabilised'], 1,
           'So the national number improved while the poorest places '
           'went backwards.'),
          ('He adds that the poorest districts lose roughly twice as '
           'many ____________ years.', None, 'healthy',
           'Twice as many as the years of life they lose.')])],
   speak=dict(
    part='Part 3', focus='Averages and the people behind them',
    intro=('Four or five sentences. Use one number and then say what it '
           'does not tell you.'),
    qs=['Are national statistics useful?',
        'Should money go to prevention or to treatment?',
        'Why do some areas have worse health than others?',
        'Whose job is it to reduce the difference?'],
    shape=[('answer', 'Useful for some questions and useless for '
            'others.'),
           ('support', 'A national life expectancy of eighty-one '
            'describes almost nobody.'),
           ('follow-up', 'Inside the same country the figure varies by '
            'about ten years between districts.'),
           ('support', 'And the average can rise while the gap gets '
            'wider.'),
           ('follow-up', 'So I would want the districts published '
            'alongside the national number, because that is the figure '
            'that would actually change what anybody did.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Prevention or treatment?',
         prompt=('Some people say that health money should be spent on '
                 'preventing illness rather than on treating it. '
                 'Discuss both views and give your own opinion. Write '
                 'at least 250 words.'),
         model=[
          'The case for prevention is supported by history and the case '
          'for treatment is supported by politics, and both of those '
          'sentences are compliments rather than criticisms. My own view '
          'is that prevention buys more years and treatment is what '
          'people will actually vote for, so the practical question is '
          'how to protect prevention from the pressure that always '
          'removes it.',
          'The argument for prevention rests on the clearest evidence in '
          'the whole of public health. Life expectancy in Europe '
          'roughly doubled between 1850 and the present, and most of '
          'that gain was achieved before antibiotics existed. Clean '
          'water, drains and better food did the work, and the city '
          'records show death rates falling in the decade each city '
          'completed its drainage.',
          'The argument for treatment is different in kind. A hospital is '
          'visible, an illness prevented is not, and no government has '
          'ever won an election by pointing at a disease that did not '
          'happen. Treatment also answers an obligation that prevention '
          'does not: a person who is ill now cannot be told that the '
          'money was better spent on housing.',
          'In my opinion, the honest position accepts both. Prevention '
          'produces more years of life for each pound and will always '
          'lose the argument at the moment the budget is set, because '
          'its beneficiaries are invisible and in the future. That is a '
          'reason to protect it by rule rather than to argue for it '
          'annually.',
          'In conclusion, I would fix a proportion of the health budget '
          'for prevention and leave the rest for treatment, not because '
          'the proportion is scientifically correct, but because it is '
          'the only arrangement that survives the pressure of a bad '
          'winter.'],
         notes=[
          'Structure 6: two choices and then a choice. The essay is '
          'strengthened by accepting that the losing side has a real '
          'claim — the person who is ill now — rather than dismissing '
          'it.',
          'The fourth paragraph explains why prevention loses rather than '
          'complaining that it loses, and the explanation produces the '
          'recommendation in the conclusion.',
          'The final sentence gives a reason that is about politics '
          'rather than medicine, which is honest and is the kind of '
          'sentence an examiner remembers.'],
         criterion=[('Both sides given a real claim',
                     'Task Response'),
                    ('An explanation that produces the recommendation',
                     'Task Response'),
                    ('A conclusion that is honest about why',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Qualification: broadly, in general, with the exception of',
    explain=('A general statement is safer and more accurate when the '
             'exception is named in the same sentence.'),
    examples=['Broadly, the richest districts improved faster than the '
              'poorest.',
              'In general, prevention buys more years than treatment.',
              'With the exception of early diagnosis, the gap is not '
              'explained by the health service.',
              'The average rose, although the range widened.'],
    task='Add a qualification to each statement.',
    items=[('Richer areas have longer life expectancy.',
            'Broadly, richer districts have longer life expectancy, '
            'although there are exceptions in some cities.'),
           ('The health service does not cause the gap.',
            'With the exception of access to early diagnosis, the gap is '
            'largely explained by factors outside the health service.'),
           ('Prevention is better value.',
            'In general, prevention produces more years of life for each '
            'pound spent than treatment does.'),
           ('Life expectancy is rising.',
            'Average life expectancy is rising, although in several '
            'countries the gap between districts has widened at the same '
            'time.'),
           ('Poor areas lose healthy years.',
            'Where both are measured, the poorest districts lose roughly '
            'twice as many healthy years as years of life.')]),
   vocab=[('disparity', 'a large difference between two groups'),
          ('gap between areas', 'the difference between districts'),
          ('healthy years', 'years lived without serious illness'),
          ('prevention', 'stopping illness before it starts'),
          ('treatment', 'care given after illness begins'),
          ('neighbourhood', 'a small area within a town or city'),
          ('top and bottom', 'the highest and lowest values'),
          ('halfway point', 'the value in the middle of a set')],
   expr=[('the national figure conceals a gap of nearly ten years',
          'the sentence this cycle turns on'),
         ('it is accurate and it describes almost nobody',
          'states the limit of an average'),
         ('the average rose while the gap widened',
          'two true things that sound contradictory'),
         ('an illness prevented is not visible',
          'explains why prevention loses the argument')],
   trans=['admittedly', 'nevertheless', 'in short', 'broadly'],
  ),
 ],
 technique=dict(
  title='Matching Information: questions that stay open all the way '
        'through',
  body=('Matching Information asks which paragraph contains a '
        'particular piece of information, and it is the slowest task in '
        'the Reading paper for one structural reason: the answers are '
        'not in order, so no question can be closed early. If you '
        'approach it the way you approach the other types — read a '
        'question, find the answer, move on — you will read the passage '
        'five or six times and run out of time. Do this instead. Before '
        'you start reading, load all the questions into your head and '
        'turn each one into a short label: a cause, a comparison, an '
        'example, a definition, a number. Then read the passage once, '
        'paragraph by paragraph, and after each paragraph ask which of '
        'your labels, if any, that paragraph just gave you. Write the '
        'question number in the margin beside the paragraph. You are '
        'answering the questions in passage order rather than in '
        'question order, which is the only way to do this task in one '
        'pass. Two more things. A paragraph can hold the answer to more '
        'than one question, and the instructions will say so. And a '
        'question containing the word "example" or "comparison" is '
        'telling you the form of what you are looking for, which is '
        'easier to spot than its content.'),
  panel=[('Load all the questions first',
          'Turn each into a label: cause, example, number, '
          'comparison.'),
         ('Read in passage order',
          'Ask after each paragraph which label it just gave you.'),
         ('Write the number in the margin',
          'Beside the paragraph, as you go.'),
         ('One paragraph can answer two',
          'The instructions say so. Do not stop at the first.')],
  task='Do the three Matching Information items in cycle 5 in a single '
       'pass through the passage, writing question numbers in the '
       'margin.',
  qs=['Have you turned each question into a short label?',
      'Are you reading in passage order rather than question order?',
      'Did you write the number beside the paragraph?',
      'Did you check whether a paragraph answers two questions?',
      'How many times did you read the passage in total?']),
 outlining=dict(
  title='Fill the outline from the cycle 4 passage, then compare',
  body=('A good academic passage is an outline that somebody has '
        'already written out in full, so working backwards from one is '
        'the quickest way to see the shape you are being asked to '
        'produce. Take the cycle 4 passage and fill in this frame: the '
        'position in one sentence, then each body section with its '
        'supports underneath. You will find the position is in the '
        'first paragraph, usually in its last sentence, and that each '
        'following paragraph is one main idea with two or three facts '
        'under it. Then compare your reconstruction with the plan you '
        'made for the cycle 4 essay question. Two things usually come '
        'out of that comparison. The passage has fewer main ideas than '
        'your plan did, and more support under each one. That is the '
        'correction most candidates need: three ideas with two supports '
        'each is a better essay than six ideas with none, and the '
        'passage you have just read is the proof.'),
  frame=('Sanitation has done more for human health than medicine, '
         'because it produced most of the improvement in life '
         'expectancy before medicine could have contributed',
         [('The timing shows drains came first and did most',
           ['most of the gain was achieved before antibiotics existed',
            'city death rates fall in the decade each city finished its '
            'drains']),
          ('Medicine arrived late and then did what sanitation could '
           'not',
           ['vaccines removed diseases no drain could touch',
            'antibiotics changed infections previously decided by the '
            'patient'])]),
  task='Reconstruct the outline of the cycle 4 passage, then compare it '
       'with your own plan for the same topic.',
  qs=['Where is the position stated in the passage?',
      'How many main ideas does the passage have?',
      'How many supports does each one carry?',
      'Did your plan have more ideas and less support?',
      'Which of your ideas would you now merge?'],
  answers=['usually the last sentence of the first paragraph',
           'three or four, never six',
           'two or three facts, often with dates',
           'almost every first plan does',
           'the two that answer the same question']),
 candos=['I can read a surgery notice for what I must do and when',
         'I can write a formal letter asking for something to be '
         'arranged',
         'I can describe a chart with two series and say what '
         'converged',
         'I can do Matching Information in one pass through a passage',
         'I can explain what a national average conceals'],
 tip=('On Matching Information, read the passage once and answer in '
      'passage order. Reading it again for each question is how '
      'candidates lose ten minutes they needed for Passage 3.'),
)
