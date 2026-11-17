# -*- coding: utf-8 -*-
"""Foundation 2, Unit 1 - Art and Design.

The first unit of the bridge book. Texts lengthen to about three hundred
words, Listening Part 3 arrives properly, and Task 2 is written at full
shape for the first time. The technique page moves the paragraph loop
from Listening, where Foundation 1 taught it, into Reading, which is
where Volume 1 will assume it.
"""

_SPEND = dict(kind='bar',
              title='What a gallery spends its money on',
              sub='share of annual budget, one regional gallery',
              cats=['Staff', 'Building', 'Conservation', 'Exhibitions',
                    'Education'],
              series=[('Per cent', [44.0, 23.0, 14.0, 12.0, 7.0])],
              ylab='per cent')

_CLEAN = dict(kind='process',
              title='How a painting is cleaned',
              sub='five stages, and the one that cannot be undone',
              stages=[
               ('Examination', 'the surface is photographed under '
                'several kinds of light'),
               ('Testing', 'solvents are tried on a corner the frame '
                'hides'),
               ('Varnish removal', 'the old yellowed varnish is taken '
                'off a few square centimetres at a time'),
               ('Retouching', 'losses are filled with paint that can '
                'be removed again'),
               ('Revarnishing', 'a new varnish goes on that will not '
                'yellow')],
              phases=[('Before anything is touched', 0, 1),
                      ('The irreversible stage', 2, 2),
                      ('Making good', 3, 4)])

UNIT = dict(
 n=1, vol=8, level='A2-B1', band='4.0-4.5',
 theme='Art and Design',
 opener=(
   'This is the first unit of Foundation 2, and three things change '
   'from the book before it. The reading passages are about twice as '
   'long, the discussions between two speakers are at full length, and '
   'Task 2 is written whole rather than short. You will book an '
   'exhibition, read a gallery label, learn why a kettle has a wide '
   'handle, follow how a four-hundred-year-old painting is cleaned, and '
   'argue about why one painting sells for more than a house. The '
   'technique page moves the paragraph loop into Reading.'),

 cycles=[
  dict(
   sub='Booking a place at an exhibition',
   step=1,
   read=[
    dict(heading='Marchfield Gallery: the Hokusai exhibition',
         kind='Notice and booking page',
         task='Form completion and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('A booking page is read for the condition on the '
                'cheaper option',
                ['Every ticket page has a cheap option with a '
                 'condition. Find the condition first.',
                 'Times, prices and the words from and until are where '
                 'the questions are.']),
         paras=[
          'The exhibition runs from 4 March until 18 June. Entry is by '
          'timed ticket: you choose a half-hour slot and may stay as '
          'long as you like once you are inside.',
          'Tickets are fourteen pounds, or nine for students, over '
          'sixty-fives and anybody receiving certain benefits. The '
          'reduced price must be booked in advance and proof is asked '
          'for at the desk, not at the door.',
          'Thursday evenings from six until nine are half price for '
          'everybody and are the busiest time in the week. The quietest '
          'slots are before eleven on weekday mornings.',
          'Members enter free and without a timed ticket. Membership '
          'costs forty-five pounds a year, which is three visits, and '
          'includes the shop discount and the members’ room on the '
          'second floor.'],
         items=[
          ('The exhibition ends on ____________ June.', None, '18',
           'It opens on 4 March, the notice says.'),
          ('Entry is by ____________ ticket, in half-hour slots.',
           None, 'timed', 'Although you may stay as long as you like.'),
          ('A reduced ticket costs ____________ pounds.', None, 'nine',
           'Against fourteen pounds at the full price.'),
          ('When is the gallery half price for everybody?', None,
           'Thursday evenings',
           'From six until nine, and it is the busiest time.'),
          ('Membership costs the same as ____________ visits.', None,
           'three', 'Forty-five pounds a year, the notice says.')]),
    dict(heading='Three membership options',
         kind='Table of options', task='Matching features',
         band='gt_short', qtype='Questions 6-10',
         paras=[
          'Standard membership is forty-five pounds. It covers one '
          'named person, gives free entry to all exhibitions and ten '
          'per cent off in the shop.',
          'Joint membership is seventy pounds and covers two people at '
          'the same address. Both names must be given when you join and '
          'neither can be changed during the year.',
          'Supporter membership is a hundred and sixty pounds. It '
          'covers two people and two guests on any visit, adds the '
          'early viewing on the first morning of each exhibition, and a '
          'part of it is treated as a donation.',
          'All three can be paid monthly. Only the supporter level '
          'gives early viewing, and no level gives free entry to the '
          'evening talks, which are booked separately and sell out '
          'quickly.'],
         items=[
          ('Which covers only one person?',
           ['standard', 'joint', 'supporter', 'none of them'], 0,
           'Standard membership covers one named person.'),
          ('Which allows guests?',
           ['standard', 'joint', 'supporter', 'all three'], 2,
           'Supporter covers two people and two guests.'),
          ('Which gives early viewing?',
           ['standard', 'joint', 'supporter', 'none of them'], 2,
           'Only the supporter level, on the first morning.'),
          ('Joint membership costs ____________ pounds.', None,
           'seventy', 'And covers two people at one address.'),
          ('What is not included in any membership?', None,
           'the evening talks',
           'They are booked separately and sell out quickly.')])],
   listen=[
    dict(heading='Booking two tickets for Saturday', part='Part 1',
         task='A telephone booking', band='l1',
         qtype='Questions 11-15',
         script=[
          ('Desk', 'Marchfield Gallery, good afternoon.'),
          ('Caller', 'I would like two tickets for the Hokusai '
           'exhibition on Saturday.'),
          ('Desk', 'Which Saturday?'),
          ('Caller', 'The twenty-second.'),
          ('Desk', 'We have slots at ten, eleven thirty and from two '
           'o clock onwards. Saturday afternoon is busy.'),
          ('Caller', 'Then ten. Is one of them a student ticket?'),
          ('Desk', 'It can be. Nine pounds instead of fourteen, but she '
           'must bring the card itself, not a photograph of it.'),
          ('Caller', 'Understood. So twenty-three pounds in total.'),
          ('Desk', 'Twenty-three. Can I take a name and an email?'),
          ('Caller', 'Adeyemi. A-D-E-Y-E-M-I. And the email is on the '
           'account.'),
          ('Desk', 'Thank you. The ticket arrives as a link; show it on '
           'the telephone or print it, either is fine.'),
          ('Caller', 'Is there a cafe?'),
          ('Desk', 'On the ground floor, and it does not need a '
           'ticket. The members’ room upstairs does.'),
          ('Caller', 'One last thing. How long do people usually '
           'spend?'),
          ('Desk', 'About ninety minutes. There are a hundred and '
           'twelve works and most people stop looking properly after '
           'forty.')],
         items=[
          ('The booking is for Saturday the ____________.', None,
           'twenty-second', 'The caller takes the ten o clock slot.'),
          ('A student ticket costs ____________ pounds.', None, 'nine',
           'Against fourteen at the full price.'),
          ('The student must bring the ____________ itself.', None,
           'card', 'A photograph of it is not accepted.'),
          ('The total is ____________ pounds.', None, 'twenty-three',
           'One full ticket and one student ticket.'),
          ('There are ____________ works in the exhibition.', None,
           '112', 'And most people look properly at forty.')])],
   speak=dict(
    part='Part 1', focus='Art you have seen',
    intro='Two or three sentences. Name something specific rather than '
          'talking about art in general.',
    qs=['Do you ever visit galleries or museums?',
        'What kind of art do you like?',
        'Is art important in schools?',
        'Have you ever made anything yourself?'],
    shape=[('answer', 'I go two or three times a year, usually when '
            'there is a particular exhibition.'),
           ('support', 'I prefer drawings to paintings, because you can '
            'see the decisions the artist made.'),
           ('follow-up', 'The last one I saw was a Hokusai exhibition, '
            'and the wave print was much smaller than I expected.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking the gallery to change your booking',
         prompt='You have booked tickets for an exhibition but cannot '
                'go. Write to the gallery. In your letter: give the '
                'details of the booking; explain why you cannot come; '
                'ask what can be done.',
         instruct='  Write at least 110 words in about 20 minutes.',
         lines=13,
         model=[
          'Dear Sir or Madam,',
          'I am writing about a booking for two tickets to the Hokusai '
          'exhibition on Saturday 22 March at ten o clock. The booking '
          'reference is MG4178 and the tickets were nine and fourteen '
          'pounds.',
          'Unfortunately I now have to work that morning. I was asked '
          'on Monday to cover a colleague who is ill, and I cannot '
          'refuse it.',
          'Would it be possible to move the booking to the following '
          'Saturday, at the same time? If that slot is full, any '
          'morning in the last week of March would suit me equally '
          'well. If the booking cannot be moved at all, could you tell '
          'me whether it can be refunded, as the exhibition closes '
          'before I am free again?',
          'Thank you for your help.',
          'Yours faithfully,',
          'I. Adeyemi'],
         notes=['Every detail that identifies the booking is in the '
                'first paragraph: date, time, reference and price.',
                'The reason is short and specific. A long explanation '
                'in a letter of this kind reads as an excuse.',
                'Three options are offered in order of preference, so '
                'the gallery can act without writing back first.'],
         criterion=[('Booking details complete in paragraph one',
                     'Task Achievement'),
                    ('A short, specific reason', 'Task Response'),
                    ('Alternatives offered in order', 'Task '
                     'Achievement'),
                    ('Formal register throughout', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Present continuous for arrangements',
    explain='Use am, is or are plus -ing for something already '
            'arranged, usually with a time word.',
    examples=['We are visiting the gallery on Saturday.',
              'She is working that morning.',
              'They are closing the exhibition in June.',
              'I am meeting him at ten.'],
    items=[('We (visit) the gallery on Saturday.',
            'We are visiting the gallery on Saturday.'),
           ('She (work) that morning.', 'She is working that '
            'morning.'),
           ('They (close) the exhibition in June.',
            'They are closing the exhibition in June.'),
           ('I (meet) him at ten.', 'I am meeting him at ten.'),
           ('(you / come) on Thursday?',
            'Are you coming on Thursday?')],
    task='Write each sentence in the present continuous.'),
   vocab=[('trick', 'a clever action meant to deceive or amuse'),
          ('prepared', 'made ready in advance'),
          ('original', 'the first one, not a copy'),
          ('aware', 'knowing that something exists'),
          ('social', 'to do with people and groups'),
          ('desk', 'a table for working at, or a counter'),
          ('meal', 'food eaten at one time'),
          ('education', 'teaching and learning'),
          ('dish', 'a plate, or food prepared in one way')],
   expr=[('I would like two tickets for Saturday.', 'opening a '
          'booking'),
         ('Would it be possible to move the booking?',
          'asking for a change politely'),
         ('If that is full, any morning would suit me.',
          'offering an alternative'),
         ('Proof is asked for at the desk.', 'explaining a '
          'condition')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Talking about a picture',
   step=2,
   read=[
    dict(heading='The Great Wave: a gallery label',
         kind='Gallery label', task='Short answer and matching',
         band='gt_short', qtype='Questions 16-21',
         paras=[
          'The Great Wave off Kanagawa was made about 1831. It is not a '
          'painting but a woodblock print, and several thousand '
          'impressions were taken from the blocks in the artist’s '
          'lifetime.',
          'That fact changes how the work should be understood. It was '
          'a cheap, popular image, sold for about the price of a '
          'double helping of noodles. The idea that it is a '
          'masterpiece came later, from Europe.',
          'The blocks wear with use, so early impressions show sharper '
          'lines and deeper colour. This one is a later impression, '
          'which is why the blue of the sky is paler than you may have '
          'seen in a photograph.',
          'The wave is often described as a disaster about to happen. '
          'Look again at the three boats: the crews are not panicking '
          'but rowing, and the mountain behind sits perfectly still. '
          'The print is about scale, not catastrophe.'],
         items=[
          ('The work was made about ____________.', None, '1831',
           'And it is a print rather than a painting.'),
          ('Several thousand ____________ were taken from the '
           'blocks.', None, 'impressions',
           'They were taken during the artist’s lifetime.'),
          (
           'The original price was compared to a double helping of '
           '____________.', None, 'noodles',
           'It was a cheap, popular image.'),
          ('Where did the idea that it is a masterpiece come from?',
           ['Japan', 'Europe', 'the artist', 'the gallery'], 1,
           'The label says it came later and from Europe.'),
          ('Later impressions have ____________ colour.', None,
           'paler', 'Because the blocks wear with use.'),
          ('The crews in the boats are ____________, not panicking.',
           None, 'rowing',
           'Which is why the label says the print is about scale.')])],
   listen=[
    dict(heading='Two visitors discuss a painting', part='Part 3',
         task='A discussion between two visitors', band='l3',
         qtype='Questions 22-27',
         script=[
          ('Mia', 'I had always assumed this was a painting.'),
          ('Jon', 'So had I. It says several thousand were printed.'),
          ('Mia', 'Which makes it a poster, really.'),
          ('Jon', 'It makes it a cheap popular image, yes. The label '
           'says it cost about what a large bowl of noodles cost.'),
          ('Mia', 'Does that make it less good?'),
          ('Jon', 'It makes the question different. If thousands exist, '
           'you cannot be looking at it because it is rare.'),
          ('Mia', 'I think I am looking at it because I have seen it a '
           'thousand times and never actually looked.'),
          ('Jon', 'That is the honest answer. Here is what I notice '
           'now: the boats are not in trouble.'),
          ('Mia', 'They are not, are they. The men are rowing in '
           'time.'),
          ('Jon', 'And the mountain is completely still. Everything '
           'moving is water.'),
          ('Mia', 'So the drama is a trick of scale rather than of '
           'danger.'),
          ('Jon', 'Which is a better reason to stand here than '
           'rarity.'),
          ('Mia', 'I would still rather own an original of something '
           'nobody has seen.'),
          ('Jon', 'That is a different pleasure and I would not '
           'pretend it is the same one. Owning is about having; '
           'looking is about noticing, and the gallery is better at '
           'the second.'),
          ('Mia', 'Then I have been coming here for the wrong reason '
           'and getting the right thing anyway.'),
          ('Jon', 'Which is most of an education, I think.')],
         items=[
          ('Both visitors had assumed the work was a ____________.',
           None, 'painting', 'Both say so until they read the label.'),
          ('Mia first says that makes it a ____________.', None,
           'poster', 'Jon partly accepts that description.'),
          ('Jon says you cannot be looking at it because it is '
           '____________.', None, 'rare',
           'Since thousands of impressions exist.'),
          ('Mia admits she has never actually ____________ at it.',
           None, 'looked', 'Although she has seen it many times.'),
          ('Jon notices that the boats are not in ____________.', None,
           'trouble', 'The men are rowing in time, Mia agrees.'),
          ('They agree the drama comes from ____________ rather than '
           'danger.', None, 'scale',
           'Everything moving in the print is water.')])],
   speak=dict(
    part='Part 2', focus='A picture or object you like',
    longturn=[('I am going to talk about an object I like. It is a small clock '
               'made of brass on a shelf in my kitchen.'),
              ('I first saw it in a second-hand shop in the street behind the '
               'market, about five years ago. I was looking for a cup, '
               'and the clock was at the back on a box.'),
              ('It is about fifteen centimetres high and it has a round face '
               'with black numbers. The metal is yellow-brown and worn '
               'on the top, where somebody has held it for years. It '
               'has a key at the back, so there is no battery, and it '
               'needs winding every eight days.'),
              ('I remember it for two reasons. The first is the sound. It is '
               'loud in a quiet kitchen, and for a month I could not '
               'sleep with the door open. Now I only hear it when it '
               'stops. The second reason is that it is not accurate. '
               'It loses four minutes a week, so I correct it every '
               'Sunday. A telephone keeps perfect time and I never '
               'look at it. I look at this clock twenty times a day, '
               'and I think the small job of correcting it is why.')],
    intro='One minute to prepare, four short lines. Describe one thing '
          'and say why, not three things quickly.',
    qs=['Describe a picture or an object you like.',
        'Say what it is and where you saw it.',
        'Say what it looks like.',
        'Say why you remember it.'],
    shape=[('answer', 'The picture I would describe is a Japanese '
            'print of a wave, which I saw in a gallery last year.'),
           ('support', 'It is much smaller than I expected, about the '
            'size of a sheet of paper, and the blue has faded.'),
           ('support', 'There is a wave about to break over three '
            'small boats, with a mountain behind.'),
           ('follow-up', 'I remember it because the men in the boats '
            'are calm, which changes the whole picture once you '
            'notice.')]),
   write=[
    dict(task='Task 2',
         heading='Should galleries charge for entry?',
         prompt='Some people think museums and galleries should be '
                'free for everybody. Others think they should charge. '
                'Discuss both views and give your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Free entry for the permanent collection, charges for '
               'special exhibitions',
               [('Free entry changes who comes, not how many',
                 ['when charges were removed, visits rose and the '
                  'biggest rise was among people who had never been',
                  'a charge is a decision at the door and most people '
                  'decide not to']),
                ('Charging for special exhibitions pays for them',
                 ['a loan exhibition costs more than a gallery’s '
                  'whole year of buying',
                  'those visits are planned in advance, so a price '
                  'does not deter them']),
                ('The real cost of free entry is who pays instead',
                 ['taxes are paid by people who never visit',
                  'which is an argument for keeping the free part '
                  'cheap to run'])]),
         model=[
          'Many countries have argued about whether museums should be '
          'free, and both sides have a reasonable case. I think the '
          'permanent collection should be free and special exhibitions '
          'should be paid for.',
          'The argument for free entry is not mainly about numbers. '
          'When charges were removed in several countries, total visits '
          'rose, but the important change was who came: the largest '
          'increase was among people who had never visited a gallery '
          'before. A price at the door is a decision, and somebody who '
          'is unsure whether a gallery is for them decides not to pay '
          'to find out.',
          'The argument for charging is strongest for special '
          'exhibitions. Borrowing works from other countries, insuring '
          'them and moving them can cost more than a gallery spends on '
          'buying art in a whole year. People plan such a visit weeks '
          'ahead, and the evidence is that a price does not stop them '
          'coming.',
          'There is one cost of free entry that supporters rarely '
          'mention: it is paid through taxes by people who never go. '
          'That is an argument for keeping the free part simple and '
          'cheap to run rather than for charging.',
          'My own view is therefore a mixed system, which is what most '
          'large galleries already have, and the argument should be '
          'about which part is which rather than about the principle.'],
         notes=['The position is stated in the first paragraph and '
                'both views then get a full paragraph each, which is '
                'what "discuss both views" asks for.',
                'The strongest point is that free entry changes who '
                'comes rather than how many. A number used that way is '
                'worth more than three numbers listed.',
                'The fourth paragraph raises the objection the '
                'writer’s own side usually hides, which is the '
                'mark of a confident answer.'],
         criterion=[('Both views discussed, with a clear own opinion',
                     'Task Response'),
                    ('One paragraph for each view', 'Coherence and '
                     'Cohesion'),
                    ('Evidence used, not just asserted', 'Task '
                     'Achievement'),
                    ('A range of sentence structures', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Passive with by and without by',
    explain='Use by only when who did it matters. Most of the time in '
            'a description it does not.',
    examples=['Several thousand impressions were taken from the '
              'blocks.',
              'The print was made about 1831.',
              'The exhibition was organised by the gallery.',
              'The blue has been faded by light.'],
    items=[('Somebody took several thousand impressions.',
            'Several thousand impressions were taken.'),
           ('They made the print about 1831.',
            'The print was made about 1831.'),
           ('The gallery organised the exhibition.',
            'The exhibition was organised by the gallery.'),
           ('Light has faded the blue.',
            'The blue has been faded by light.'),
           ('Somebody sold it for the price of a meal.',
            'It was sold for the price of a meal.')],
    task='Write each sentence in the passive, keeping by only where it '
         'matters.'),
   vocab=[('exam', 'a formal test'),
          ('photograph', 'a picture made with a camera'),
          ('blocks', 'solid pieces, or things that stop movement'),
          ('tend', 'to usually do something'),
          ('achieve', 'to succeed in doing something'),
          ('fund', 'money set aside for a purpose'),
          ('tool', 'an instrument used to do work'),
          ('identified', 'said exactly what or who something is'),
          ('represents', 'stands for, or shows')],
   expr=[('I had always assumed that...', 'admitting a mistaken '
          'belief'),
         ('That makes the question different.',
          'reframing rather than disagreeing'),
         ('That is the honest answer.', 'accepting an uncomfortable '
          'point'),
         ('I would not pretend it is the same.',
          'conceding a real difference')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Design in everyday things',
   step=2,
   read=[
    dict(heading='Why a kettle has a wide handle',
         kind='Short article', task='Matching information',
         band='gt_work', qtype='Questions 28-33',
         skill=('A design article is read for the reason behind each '
                'feature',
                ['Each paragraph names a feature and gives a reason. '
                 'Underline the reason, not the feature.',
                 'The questions ask which feature does what, so the '
                 'pairing is what matters.']),
         paras=[
          'A kettle handle is wide because a full kettle weighs about '
          'two kilograms and the weight hangs from four fingers. A '
          'narrow handle puts that weight on a strip of skin a '
          'centimetre across, which is painful within seconds and '
          'dangerous within two, because the natural response is to put '
          'the kettle down fast.',
          'The spout is shaped to break the flow into a single stream '
          'rather than a spreading one. This is not about elegance. '
          'Water that spreads goes over the edge of a cup, and a kettle '
          'that cannot be poured accurately is returned to the shop '
          'more often than one that is ugly.',
          'The lid opens away from the handle. If it opened towards it, '
          'the steam would rise across the hand holding the kettle. '
          'Almost every design decision in a kitchen is of this kind: '
          'invisible when it is right, and the only thing you notice '
          'when it is wrong.'],
         items=[
          ('A full kettle weighs about ____________ kilograms.', None,
           'two', 'Paragraph 1, hanging from four fingers.'),
          ('Which feature prevents pain in the hand?',
           ['the wide handle', 'the shaped spout', 'the lid',
            'the base'], 0,
           'Paragraph 1: a narrow handle concentrates the weight.'),
          ('Which feature stops water going over the edge of a cup?',
           ['the wide handle', 'the shaped spout', 'the lid',
            'the base'], 1,
           'Paragraph 2: the flow is broken into one stream.'),
          ('A kettle that cannot be poured accurately is '
           '____________ more often.', None, 'returned',
           'Paragraph 2, more often than an ugly one.'),
          ('Which feature keeps steam away from the hand?',
           ['the wide handle', 'the shaped spout', 'the lid',
            'the base'], 2,
           'Paragraph 3: it opens away from the handle.'),
          ('Good design in a kitchen is ____________ when it is '
           'right.', None, 'invisible',
           'Paragraph 3, and noticed only when wrong.')])],
   listen=[
    dict(heading='A short talk on chair design', part='Part 2',
         task='One speaker describing a design problem', band='l2',
         qtype='Questions 34-39',
         script=[
          ('Speaker', 'I am going to talk about the most difficult '
           'object in this room, which is the chair you are sitting '
           'on.'),
          ('Speaker', 'A chair has to hold a person who may weigh '
           'anything from forty kilograms to a hundred and fifty, for '
           'anything from two minutes to eight hours, and it has to be '
           'stackable, cheap and light enough to move. No single shape '
           'does all of that well.'),
          ('Speaker', 'The hardest number is the seat height. Four '
           'hundred and fifty millimetres suits a person of average '
           'height. For somebody shorter the feet do not reach the '
           'floor, and the weight moves onto the back of the thigh, '
           'which is uncomfortable within twenty minutes and harmful '
           'over years.'),
          ('Speaker', 'So any chair that is not adjustable is a '
           'compromise aimed at the middle of a distribution. A '
           'cheap chair is not a badly designed chair. It is a chair '
           'designed for everybody, which means designed precisely for '
           'nobody.'),
          ('Speaker', 'One more thing, and it is the thing students '
           'always get wrong in their first project. The chair is not '
           'the design problem. The chair, the desk and the task '
           'together are the design problem, and a chair designed '
           'without the desk is a sculpture.')],
         items=[
          (
           'A chair must hold between forty and ____________ '
           'kilograms.', None, '150',
           'For between two minutes and eight hours.'),
          (
           'The seat height that suits an average person is '
           '____________ millimetres.', None, '450',
           'Which the speaker calls the hardest number.'),
          ('For a shorter person the weight moves onto the back of '
           'the ____________.', None, 'thigh',
           'Because the feet do not reach the floor.'),
          ('This is uncomfortable within ____________ minutes.', None,
           'twenty', 'And harmful over years, the speaker says.'),
          ('A chair for everybody is designed precisely for '
           '____________.', None, 'nobody',
           'Which is what a compromise means here.'),
          ('The speaker says the real design problem is the chair, '
           'the ____________ and the task together.', None, 'desk',
           'A chair designed alone is a sculpture.')])],
   speak=dict(
    part='Part 1', focus='Objects you use every day',
    intro='Pick one object and say two things about it. Avoid listing '
          'objects.',
    qs=['Is there an object you use every day?',
        'Do you notice how things are designed?',
        'Would you pay more for something better made?',
        'What is badly designed where you live?'],
    shape=[('answer', 'The object I use most is probably my kettle, '
            'which sounds dull until it is broken.'),
           ('support', 'The handle on the old one was narrow and it '
            'hurt to lift it full.'),
           ('follow-up', 'Since then I notice handles everywhere, '
            'which is either useful or a small curse.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='What a gallery spends its money on',
         figure=_SPEND,
         prompt='The chart shows how one regional gallery divides its '
                'annual budget. Describe the chart and make at least '
                'one comparison.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The chart shows how one regional gallery divides its annual '
          'budget between five areas.',
          'Staff costs take by far the largest share, at forty-four per '
          'cent, which is almost twice what the building takes at '
          'twenty-three per cent. Together these two account for '
          'sixty-seven per cent of everything the gallery spends, '
          'before any art is conserved or shown.',
          'Conservation and exhibitions take similar shares, at '
          'fourteen and twelve per cent, and education takes the '
          'smallest at seven.',
          'The pattern is one most visitors would not expect. The '
          'activities that the public actually sees, exhibitions and '
          'education, account for under a fifth of the budget between '
          'them, while keeping the doors open and the staff paid takes '
          'two thirds.'],
         notes=['The largest share is given first, with a comparison '
                'attached, and the two largest are then combined.',
                'The two middle categories are grouped because they '
                'are close, which saves words for the final point.',
                'The last paragraph interprets the shape without '
                'inventing anything: every figure in it is from the '
                'chart.'],
         criterion=[('All five shares covered', 'Task Achievement'),
                    ('At least one grouping or total', 'Task '
                     'Response'),
                    ('An observation about the shape', 'Coherence and '
                     'Cohesion'),
                    ('Percentages and multiples used accurately',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Relative clauses with which, that and who',
    fix=dict(
     text=('The clock which I bought it in a second-hand shop is made of '
           'brass. It has a round face what has black numbers on it. The man '
           'who he sold it to me said it was about eighty years old. It loses '
           'four minutes a week, so I correct it every Sunday, and that small '
           'job is probably why I look at it twenty times a day.'),
     faults=[('The clock which I bought it in a second-hand shop',
              'The clock which I bought in a second-hand shop',
              ('The relative pronoun which is already the object, so it is not '
               'repeated as it.')),
             ('a round face what has black numbers',
              'a round face which has black numbers',
              ('What is not a relative pronoun in English. Use which or that '
               'for a thing.')),
             ('The man who he sold it to me',
              'The man who sold it to me',
              'Who is the subject of the clause, so he is not needed as well.')]),
    explain='Use who for people and which or that for things. A clause '
            'with commas adds information; one without commas defines '
            'which thing you mean.',
    examples=['A handle that is narrow concentrates the weight.',
              'The spout, which is shaped, breaks the flow.',
              'A person who is shorter cannot reach the floor.',
              'The chair that you are sitting on is the hardest '
              'object.'],
    items=[('A handle (be narrow) concentrates the weight.',
            'A handle that is narrow concentrates the weight.'),
           ('The spout, (be shaped), breaks the flow.',
            'The spout, which is shaped, breaks the flow.'),
           ('A person (be shorter) cannot reach the floor.',
            'A person who is shorter cannot reach the floor.'),
           ('The chair (you sit on) is the hardest object.',
            'The chair that you are sitting on is the hardest '
            'object.'),
           ('The lid, (open away), keeps steam off the hand.',
            'The lid, which opens away, keeps steam off the hand.')],
    task='Write each sentence with a relative clause.'),
   vocab=[('purchase', 'something bought, or the act of buying'),
          ('delayed', 'made late'),
          ('beliefs', 'things somebody holds to be true'),
          ('select', 'to choose'),
          ('part-time', 'working fewer than the full hours'),
          ('considerable', 'large in amount or importance'),
          ('avoided', 'kept away from'),
          ('assigning', 'giving a task or a place to somebody')],
   expr=[('It is invisible when it is right.',
          'describing good design'),
         ('Designed for everybody means designed for nobody.',
          'naming a compromise'),
         ('That is not about elegance.', 'rejecting an explanation'),
         ('The chair is not the design problem.',
          'widening the question')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='How a painting is restored',
   step=3,
   read=[
    dict(heading='Cleaning a four-hundred-year-old painting',
         kind='Short factual article',
         task='Flow-chart completion and matching',
         band='acad', qtype='Questions 40-46',
         paras=[
          'Cleaning an old painting is the most argued-about work in a '
          'gallery, because one stage of it cannot be undone. The '
          'yellow layer that a visitor sees on a four-hundred-year-old '
          'picture is usually not dirt and not age. It is varnish, '
          'applied for the protection of the paint, which has yellowed '
          'with time. Remove it and the colours underneath are as the '
          'artist left them; remove a little too much and some of the '
          'artist\u2019s own glazes go with it.',
          'The work begins with examination rather than cleaning. The '
          'surface is photographed under several kinds of light, '
          'including some that the eye cannot see, which show where '
          'earlier restorers have worked and where the paint is thin. '
          'Solvents are then tested in a corner the frame will hide, '
          'because the same varnish behaves differently on different '
          'paintings and nobody can tell in advance which solvent will '
          'be gentle enough.',
          'Only then does the varnish come off, a few square '
          'centimetres at a time, under a microscope, over weeks. This '
          'is the irreversible stage and it is where the arguments '
          'are. A conservator who stops too early leaves a picture '
          'looking muddy, and one who goes too far has destroyed '
          'something that no technique can bring back.',
          'The last two stages are deliberately reversible. Losses are '
          'filled with paint chosen to be removable with a solvent that '
          'will not touch the original, and the whole surface is given '
          'a new varnish that does not yellow. In fifty years somebody '
          'will undo both without difficulty, and that is the point: '
          'everything after the varnish removal is designed to be '
          'somebody else’s decision rather than this '
          'conservator’s.'],
         items=[
          ('The yellow layer is usually ____________.', None,
           'varnish', 'Paragraph 1, rather than dirt or age.'),
          ('What may be removed with too much varnish?', None,
           'the artist’s glazes',
           'Paragraph 1, which cannot be replaced.'),
          ('The surface is first ____________ under several kinds of '
           'light.', None, 'photographed',
           'Paragraph 2, before anything is cleaned.'),
          ('Solvents are tested in a corner the ____________ will '
           'hide.', None, 'frame',
           'Paragraph 2, because varnish behaves differently.'),
          ('Varnish is removed a few square ____________ at a time.',
           None, 'centimetres',
           'Paragraph 3, under a microscope over weeks.'),
          ('Which stage cannot be undone?',
           ['examination', 'testing', 'varnish removal',
            'revarnishing'], 2,
           'Paragraph 3, which is where the arguments are.'),
          ('The last two stages are deliberately ____________.', None,
           'reversible',
           'Paragraph 4: somebody can undo them in fifty years.')])],
   listen=[
    dict(heading='A conservator explains her work', part='Part 4',
         task='A talk to visiting students', band='l4',
         qtype='Questions 47-52',
         script=[
          ('Speaker', 'People think my job is cleaning. About a tenth '
           'of my time is cleaning. The rest is deciding whether to '
           'clean, and writing down why.'),
          ('Speaker', 'Here is the picture on my desk at the moment. '
           'Four hundred years old, and the sky is brown. A visitor '
           'assumes that is dirt. It is varnish that has yellowed, and '
           'under it the sky is almost certainly blue.'),
          ('Speaker', 'Before I touch it, I photograph it under light '
           'the eye cannot see. That shows me two things: where '
           'somebody has repainted before me, which is usually more '
           'than anybody expects, and where the original paint is thin '
           'enough to be at risk.'),
          ('Speaker', 'Then I test solvents in a corner that the frame '
           'covers. The same varnish on two paintings can behave '
           'completely differently, and the only way to know is to '
           'try.'),
          ('Speaker', 'The removal itself takes about six weeks for a '
           'painting this size, a few square centimetres at a time. It '
           'is the only part of my work that cannot be undone, and so '
           'it is the only part I am genuinely afraid of.'),
          ('Speaker', 'Everything I do afterwards is designed to be '
           'reversible. The paint I use to fill losses can be removed '
           'with something that will not touch the original. I am not '
           'restoring the painting to how it was. I am handing a '
           'decision to somebody in fifty years, with better tools than '
           'mine, and the notes to explain what I did.')],
         items=[
          ('About a ____________ of her time is spent cleaning.', None,
           'tenth', 'The rest is deciding and writing down why.'),
          ('The sky looks brown because of yellowed ____________.',
           None, 'varnish', 'Under which it is almost certainly blue.'),
          ('Photography under invisible light shows earlier '
           '____________ and thin paint.', None, 'repainting',
           'Usually more of it than anybody expects.'),
          ('Solvents are tested in a corner covered by the '
           '____________.', None, 'frame',
           'Because the same varnish behaves differently.'),
          ('Removal takes about ____________ weeks for this '
           'painting.', None, 'six',
           'A few square centimetres at a time.'),
          ('She says she is handing a ____________ to somebody in '
           'fifty years.', None, 'decision',
           'With better tools and her notes to explain.')])],
   speak=dict(
    part='Part 3', focus='Keeping old things',
    intro='Give a view, a reason and a limit. Three or four sentences '
          'is right for Part 3 at this level.',
    qs=['Should old buildings be repaired or replaced?',
        'Who should pay to look after old art?',
        'Is it important for a country to keep its old things?'],
    shape=[('answer', 'I think repair is usually better, but not at '
            'any price.'),
           ('support', 'An old building that is used stays in good '
            'condition; one that is only protected decays quietly.'),
           ('support', 'The money has to come from somewhere, and a '
            'country with a housing shortage has other claims on it.'),
           ('follow-up', 'So I would repair what can be used and '
            'record the rest properly before it goes.')]),
   write=[
    dict(task='Task 1', fork='A', heading='How a painting is cleaned',
         figure=_CLEAN,
         prompt='The diagram shows the stages in cleaning an old '
                'painting. Describe the process.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The diagram shows the five stages in which an old painting '
          'is cleaned, grouped into three phases.',
          'In the first phase nothing is touched. The surface is '
          'photographed under several kinds of light, and solvents are '
          'then tested on a corner that the frame hides.',
          'The second phase contains a single stage, and it is marked '
          'as the one that cannot be undone. The old yellowed varnish '
          'is removed a few square centimetres at a time.',
          'The third phase is making good. Losses are filled with paint '
          'that can itself be removed later, and a new varnish is '
          'applied which will not yellow.',
          'The structure of the process is therefore deliberate: '
          'everything before the irreversible stage is preparation, and '
          'everything after it is designed so that another conservator '
          'can undo it.'],
         notes=['The three phases are used to organise the answer, '
                'which is what the diagram offers and what most '
                'candidates ignore.',
                'The irreversible stage is given its own paragraph '
                'because the diagram marks it out.',
                'The passive is used throughout, since the diagram '
                'names no person.'],
         criterion=[('All five stages described', 'Task Achievement'),
                    ('The three phases used as structure', 'Coherence '
                     'and Cohesion'),
                    ('The irreversible stage identified', 'Task '
                     'Response'),
                    ('The passive used throughout', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Sequencing a process: before, after, once, until',
    explain='Use before and after with a noun or -ing, and once and '
            'until with a clause.',
    examples=['Before anything is touched, the surface is '
              'photographed.',
              'After testing, the varnish is removed.',
              'Once the varnish is off, the losses are filled.',
              'The work continues until the surface is even.'],
    items=[('(before) anything is touched, it is photographed.',
            'Before anything is touched, it is photographed.'),
           ('(after) test, the varnish is removed.',
            'After testing, the varnish is removed.'),
           ('(once) the varnish is off, losses are filled.',
            'Once the varnish is off, losses are filled.'),
           ('It continues (until) the surface is even.',
            'It continues until the surface is even.'),
           ('(before) revarnish, the paint must dry.',
            'Before revarnishing, the paint must dry.')],
    task='Complete each sentence with the right sequence word.'),
   vocab=[('backgrounds', 'the parts behind, or where people come '
           'from'),
          ('evident', 'easy to see or understand'),
          ('favours', 'treats one side better than another'),
          ('hardship', 'difficulty caused by having little'),
          ('invariably', 'always, without exception'),
          ('parental', 'to do with parents'),
          ('photocopies', 'copies made by a machine'),
          ('prefers', 'likes one thing more than another')],
   expr=[('About a tenth of my time is spent cleaning.',
          'correcting an assumption about a job'),
         ('The only part I am genuinely afraid of.',
          'naming the risky step'),
         ('I am handing a decision to somebody in fifty years.',
          'describing reversible work'),
         ('The only way to know is to try.', 'explaining a test')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Why some works are worth more',
   step=3,
   read=[
    dict(heading='Three reasons a painting sells for millions',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 53-59',
         paras=[
          'The price of a painting has almost nothing to do with the '
          'cost of making it and not much to do with how good it is. '
          'Three things account for most of the variation, and the '
          'first is the limitation of supply. An artist who died in '
          '1890 will make no more paintings, and of the ones that '
          'exist, most are in museums that will never sell. What '
          'remains in private hands may be a few dozen works, '
          'invariably fought over by several hundred people who could '
          'buy any of them.',
          'The second is provenance: the record of who has owned a '
          'work since it left the artist. A painting with a complete '
          'record is worth considerably more than an identical one '
          'with a gap, because a gap is where a forgery or a theft '
          'could hide. Buyers are not paying for the history; they are '
          'paying to remove a risk. The price difference between a '
          'clean record and a doubtful one is larger than most people '
          'outside the trade would believe.',
          'The third is harder to say politely. A very expensive '
          'painting is a way of holding wealth that can be moved, '
          'stored and sold without attracting the attention that other '
          'possessions attract. That use has nothing to do with '
          'looking at pictures. It is why the top of the market moves '
          'with the number of wealthier buyers in the world rather '
          'than with anything happening in art.',
          'None of this says that price is a measurement of quality, '
          'and the trade knows it better than anybody. A gallery that '
          'pays a record sum typically says so in a press release. It '
          'rarely says that the same artist\u2019s better picture, two '
          'rooms away, cost a fortieth as much because it is a drawing '
          'rather than a painting.'],
         items=[
          ('How many reasons does the writer give?', None, 'three',
           'Supply, provenance and the use of art as wealth.'),
          ('What remains in private hands may be a few ____________ '
           'works.', None, 'dozen',
           'Paragraph 1, fought over by hundreds of buyers.'),
          ('Provenance is the record of who has ____________ a work.',
           None, 'owned', 'Paragraph 2, since it left the artist.'),
          ('A gap in the record is where a ____________ could hide.',
           None, 'forgery', 'Paragraph 2: a forgery or a theft.'),
          (
           'Which paragraph explains art used as a way of holding '
           'wealth?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 2,
           'It can be moved, stored and sold quietly.',
           {0: 'Paragraph 1 is about supply: how few works an artist '
               'left.', 1: 'Paragraph 2 is about the record of ownership.'}),
          ('The top of the market moves with the number of '
           '____________ buyers.', None, 'wealthier',
           'Paragraph 3, rather than with events in art.'),
          ('A better picture may cost a ____________ as much because '
           'it is a drawing.', None, 'fortieth',
           'Paragraph 4, which galleries rarely mention.')])],
   listen=[
    dict(heading='Two students argue about value in art',
         part='Part 3',
         task='A discussion between two students', band='l3',
         qtype='Questions 60-65',
         script=[
          ('Tutor', 'You disagreed in the seminar. Put it properly.'),
          ('Ravi', 'My position is that price in art is not about '
           'quality at all. It is scarcity, provenance and money '
           'looking for somewhere to sit.'),
          ('Leah', 'I agree with all three and I think the conclusion '
           'is wrong.'),
          ('Tutor', 'Explain.'),
          ('Leah', 'Those three things decide the price of the '
           'expensive ten per cent. For most working artists, price '
           'tracks reputation, and reputation tracks the work. It is '
           'crude, slow and unfair, and it is not random.'),
          ('Ravi', 'That is fair. I was generalising from the top of '
           'the market.'),
          ('Leah', 'Which is what everybody does, because the top is '
           'what is reported.'),
          ('Tutor', 'Can either of you measure this?'),
          ('Ravi', 'Partly. You can compare prices for works by the '
           'same artist in two media. A drawing typically sells for a '
           'fraction of a painting even when critics prefer the '
           'drawing.'),
          ('Leah', 'That is a good test and it supports you, not me.'),
          ('Ravi', 'It supports me for the top ten per cent. For your '
           'working artists I do not have the data and I should not '
           'pretend to.'),
          ('Tutor', 'Then that is the shape of the essay. Say which '
           'part of the market each claim covers.')],
         items=[
          ('Ravi says price depends on scarcity, provenance and '
           '____________.', None, 'money',
           'Looking for somewhere to sit, as he puts it.'),
          ('Leah agrees with the three reasons but says the '
           '____________ is wrong.', None, 'conclusion',
           'She thinks they cover only part of the market.'),
          ('Leah says those reasons decide the price of the expensive '
           '____________ per cent.', None, 'ten',
           'For other artists, price tracks reputation.'),
          ('Ravi admits he was generalising from the ____________ of '
           'the market.', None, 'top',
           'Which Leah says is what everybody does.'),
          ('Ravi suggests comparing works by the same artist in two '
           '____________.', None, 'media',
           'A drawing against a painting, for example.'),
          ('The tutor tells them to say which part of the '
           '____________ each claim covers.', None, 'market',
           'Which becomes the shape of the essay.')])],
   speak=dict(
    part='Part 3', focus='Value and money',
    sounds=[('Word stress can change a word\'s job. A RECord is a thing and to '
             'reCORD is an action. The same pattern gives an OBject and to '
             'obJECT.'),
            ('Say these pairs twice each: a present and to present, a design '
             'and to design, an increase and to increase. The noun takes the '
             'first part and the verb the second.'),
            ('Long words have one strong part only: ORiginal, deCOration, '
             'maTErial. Say the strong part clearly and let the rest go '
             'quietly.'),
            ('Practise one sentence: I bought it in a second-hand shop behind '
             'the market. Say it in two pieces with one break.'),
            ('Record yourself describing an object. Listen for a long word '
             'where you made two parts equally strong.')],
    intro='Say what you think, then say which part of the question '
          'your answer covers. That limit is worth marks.',
    qs=['Why are some paintings worth so much money?',
        'Should governments limit what art can be sold abroad?',
        'Is it wrong to treat art as an investment?'],
    shape=[('answer', 'At the top of the market the price is mostly '
            'scarcity and provenance rather than quality.'),
           ('support', 'An artist who died in 1890 makes no more '
            'paintings, and most are in museums.'),
           ('support', 'A gap in the ownership record lowers the price '
            'sharply, because it is where a forgery could hide.'),
           ('follow-up', 'For ordinary working artists I think price '
            'does follow reputation, so my answer only covers the '
            'expensive end.')]),
   write=[
    dict(task='Task 2',
         heading='Should a country stop important art being sold '
                 'abroad?',
         prompt='Some people think a country should prevent important '
                'works of art from being sold to buyers in other '
                'countries. Others think owners should be free to sell '
                'to anybody. Discuss both views and give your own '
                'opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Delay a sale and give the country a chance to buy, '
               'rather than forbid it',
               [('The case for stopping a sale is about public access',
                 ['a work in a national collection can be seen by '
                  'anybody',
                  'one sold privately may not be seen again for '
                  'decades']),
                ('The case against is about ownership and price',
                 ['a rule that only a national gallery may buy pushes '
                  'the price down',
                  'which takes money from the owner, often a family '
                  'or a trust']),
                ('A delay does most of the work of a ban with less of '
                 'the cost',
                 ['an export licence held for six months lets a '
                  'gallery raise the money',
                  'and if nobody raises it, the public has shown what '
                  'the work is worth to it'])]),
         model=[
          'Many countries can stop an important work of art from '
          'leaving, and the question of whether they should is more '
          'balanced than it first appears.',
          'The argument for stopping a sale is about who can see the '
          'work. A painting in a national collection is available to '
          'anybody who walks in, including people who will never buy '
          'anything. The same painting sold to a private buyer abroad '
          'may not be publicly seen again for decades, and the loss '
          'falls on everybody who would have looked at it.',
          'The argument against is about ownership. A rule that '
          'effectively allows only one buyer pushes the price well '
          'below what the work would fetch openly, and that difference '
          'is taken from the owner, who is often a family selling '
          'because of tax or a trust selling to fund something else. A '
          'public benefit paid for by one private person is not a '
          'policy; it is a confiscation with a polite name.',
          'This is why the system most countries now use is a delay '
          'rather than a ban. An export licence is held for a fixed '
          'period, usually a few months, during which a national '
          'gallery may match the price that has been offered. The owner '
          'gets the market price, the public gets a real chance, and if '
          'no money is raised the country has shown how much it valued '
          'the work.',
          'In my view the delay is the right answer, and the argument '
          'should be about how long it lasts and who funds the '
          'matching.'],
         notes=['Both views get a full paragraph and each is given its '
                'strongest form rather than a weak one.',
                'The sentence calling a one-buyer rule "a confiscation '
                'with a polite name" is the kind of phrase that lifts '
                'a Task 2 answer, and it is earned by the argument '
                'before it.',
                'The conclusion narrows the disagreement to two '
                'practical questions instead of repeating the '
                'position.'],
         criterion=[('Both views given their strongest form',
                     'Task Response'),
                    ('A clear position that follows from them',
                     'Task Response'),
                    ('Paragraphing that matches the argument',
                     'Coherence and Cohesion'),
                    ('Complex sentences used accurately', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Conditionals: if and unless with would',
    explain='Use if plus the past for an imagined situation, and would '
            'in the other clause. Unless means if not.',
    examples=['If the sale were stopped, the price would fall.',
              'Unless a gallery matches the price, the work leaves.',
              'If nobody raised the money, the owner would sell '
              'abroad.',
              'The work would stay if the licence were refused.'],
    items=[('If the sale (be) stopped, the price (fall).',
            'If the sale were stopped, the price would fall.'),
           ('(unless) a gallery matches the price, the work leaves.',
            'Unless a gallery matches the price, the work leaves.'),
           ('If nobody (raise) the money, the owner (sell) abroad.',
            'If nobody raised the money, the owner would sell '
            'abroad.'),
           ('The work (stay) if the licence (be) refused.',
            'The work would stay if the licence were refused.'),
           ('(unless) the record is complete, buyers (be) cautious.',
            'Unless the record is complete, buyers would be '
            'cautious.')],
    task='Write each sentence with if or unless and would.'),
   vocab=[('salaries', 'fixed payments made to employees'),
          ('typically', 'usually, in the normal case'),
          ('uncomfortably', 'in a way that is not comfortable'),
          ('wealthier', 'having more money'),
          ('textile', 'cloth, or to do with cloth'),
          ('puzzled', 'unable to understand something'),
          ('six-month', 'lasting six months'),
          ('optional', 'not required; you may choose')],
   expr=[('My position is that...', 'stating a claim in a debate'),
         ('I agree with all three and the conclusion is wrong.',
          'accepting premises while rejecting a conclusion'),
         ('I was generalising from the top of the market.',
          'conceding the limit of your evidence'),
         ('I should not pretend to.', 'refusing to overclaim')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='The paragraph loop, now in Reading',
  body='In Foundation 1 you learned three moves for Listening: preview, '
       'read the questions, then listen one question ahead. This page '
       'moves the same discipline into Reading, where it is called the '
       'loop and where it will stay for the rest of the course. Here is '
       'the loop in full. First, orient: read the title, the first '
       'sentence and the last sentence, and decide in ten seconds what '
       'the passage is about and roughly what it claims. Second, load '
       'the questions: read all of them before you read the passage '
       'properly, and underline in each one the thing that can actually '
       'be checked. Third, read one paragraph at a time, and after each '
       'paragraph stop and ask which questions that paragraph just '
       'answered. Write those answers down before you read on, because '
       'what you can remember after four paragraphs is less than you '
       'think. The loop feels slower than skimming and it is not: in '
       'Foundation 1 unit 5 you timed both, and the loop won on marks '
       'while losing seconds. Two warnings. The questions are usually '
       'in passage order, so if you are hunting backwards something has '
       'gone wrong. And a paragraph that answers nothing is normal; '
       'read it, note what it does, and move on rather than searching '
       'it again.',
  panel=[('Orient in ten seconds',
          'Title, first sentence, last sentence.'),
         ('Load the questions',
          'All of them, with the checkable part underlined.'),
         ('One paragraph, then stop',
          'Which questions did that paragraph answer?'),
         ('Write it down before reading on',
          'Memory across four paragraphs is worse than you think.')],
  qs=['What is this passage about, before I read it properly?',
      'What can actually be checked in each question?',
      'Which questions did this paragraph answer?',
      'Am I hunting backwards, and if so why?',
      'Did I write the answer down or trust my memory?'],
  task='Use the loop on both long passages in this unit. Mark beside '
       'each paragraph which question numbers it answered, and compare '
       'with the key: the pattern should be roughly in order.'),

 outlining=dict(
  title='Fill the outline: ten sentences, three main ideas',
  body='Foundation 1 ended with nine lines under three ideas. Task 2 at '
       'full length needs one more thing: a sentence that handles the '
       'other side. The shape is now an opening line, three ideas with '
       'a support and a consequence each, a sentence that concedes '
       'something real, and a closing line that says what you would do. '
       'That is eleven lines of plan and about two hundred and twenty '
       'words of answer, which is the length Task 2 asks for. The '
       'concession is the part worth practising, because most '
       'candidates write a fake one. "Of course, some people disagree" '
       'concedes nothing and costs a sentence. A real concession names '
       'the strongest thing the other side has and says why it does not '
       'change your position: "A rule that allows only one buyer does '
       'take money from the owner, which is why a delay is better than '
       'a ban." Notice that the concession in that example is also the '
       'reason for the writer’s own proposal. That is what a good '
       'concession does: it earns the conclusion rather than '
       'interrupting it. Write the eleven lines, number them, and check '
       'that line ten names something the other side would actually '
       'say.',
  frame=('A delay is better than a ban on selling art abroad',
         [('Public access is the real argument for stopping a sale',
           ['a work in a national collection can be seen by anybody',
            'one sold privately may not be seen for decades']),
          ('Ownership is the real argument against',
           ['a one-buyer rule pushes the price below the market',
            'and the difference is taken from one private owner']),
          ('A delay does most of the work with less of the cost',
           ['a licence held for a few months lets a gallery raise the '
            'money',
            'and if nobody raises it, the public has answered the '
            'question'])]),
  qs=['Do you have three ideas, each with support and consequence?',
      'Is your concession something the other side would actually '
      'say?',
      'Does the concession lead to your proposal?',
      'Is the position in the first paragraph?',
      'Does the last line say what you would do?'],
  task='Plan the cycle 5 question in eleven lines, then write it. '
       'Underline your concession and ask a partner whether they would '
       'accept it as a fair statement of their side.',
  answers=['eleven lines is about two hundred and twenty words',
           '"some people disagree" is not a concession',
           'a real concession names the other side’s best point',
           'the best concessions lead into the proposal',
           'the position still belongs in the first paragraph']),

 candos=['I can book a timed ticket and understand the conditions',
         'I can read a gallery label and correct a wrong assumption',
         'I can describe a five-stage process in three phases',
         'I can use the paragraph loop on a three-hundred-word passage',
         'I can plan and write a full Task 2 with a real concession'],

 tip=('A paragraph that answers none of the questions is normal. Note '
      'what it does and move on. Searching it again is the commonest '
      'way to lose five minutes in a reading paper.'))
