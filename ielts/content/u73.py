# -*- coding: utf-8 -*-
"""Foundation 2, Unit 3 - Technology at Home.

A router that will not connect, screens in the house, repair against
replacement, how a fridge keeps things cold, and the three machines that
changed housework. The technique page moves guessing from context into
Reading, where the unknown words are harder and the time is shorter.
"""

_SCREEN = dict(kind='line',
               title='Hours a day on screens, by age',
               sub='mean hours outside work or school, one country',
               x=['2010', '2014', '2018', '2022'],
               series=[('Aged 12-17', [2.6, 3.4, 4.5, 5.1]),
                       ('Aged 30-49', [1.9, 2.4, 3.0, 3.4]),
                       ('Aged 65+', [0.8, 1.1, 1.7, 2.3])],
               ylab='hours')

_FRIDGE = dict(kind='process',
               title='How a fridge keeps things cold',
               sub='four stages in a closed loop',
               stages=[
                ('Compression', 'the gas is squeezed and becomes hot'),
                ('Condensing', 'the heat leaves through the coils at '
                 'the back'),
                ('Expansion', 'the liquid is let through a narrow '
                 'valve and cools sharply'),
                ('Evaporating', 'the cold liquid takes heat from '
                 'inside the cabinet')])

UNIT = dict(
 n=3, vol=8, level='A2-B1', band='4.0-4.5',
 theme='Technology at Home',
 opener=(
   'This unit begins with the least enjoyable kind of English there is: '
   'the instructions that come with a new device, and the telephone '
   'call you make when they do not work. It ends with two readings that '
   'explain machines people never think about. A fridge does not make '
   'cold; it moves heat, and knowing which way round that is explains '
   'why the back of it is warm. The technique page is guessing from '
   'context, now in Reading.'),

 cycles=[
  dict(
   sub='Setting up a new device',
   step=1,
   read=[
    dict(heading='Quick start guide: the WX200 router',
         kind='Instruction leaflet',
         task='Flow-chart completion and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('An instruction leaflet is read for the order and the '
                'waiting time',
                ['Number the steps in the margin before you look at '
                 'the questions.',
                 'Every leaflet has one step with a wait in it, and '
                 'that step is usually asked about.']),
         paras=[
          'Connect the grey cable to the socket marked WAN and the '
          'power lead to the mains. Do not connect anything else yet.',
          'Press and hold the button on the back for five seconds. The '
          'light will flash orange. Wait until it is steady green, '
          'which takes about two minutes and sometimes four.',
          'Find the network name and password printed on the card '
          'underneath. Enter them on the device you want to connect '
          'first. The password is case sensitive and the letter O is a '
          'zero throughout.',
          'Only when one device is connected should you connect the '
          'rest. If the light is steady red at any point, unplug the '
          'power for thirty seconds and begin again from the second '
          'step.'],
         items=[
          ('The grey cable goes into the socket marked ____________.',
           None, 'WAN', 'And the power lead goes to the mains.'),
          ('Hold the button for ____________ seconds.', None, 'five',
           'The light then flashes orange.'),
          ('Wait until the light is steady ____________.', None,
           'green', 'Which takes about two minutes, sometimes four.'),
          ('Where is the password printed?', None,
           'on the card underneath',
           'With the network name, the leaflet says.'),
          ('If the light is steady red, unplug the power for '
           '____________ seconds.', None, 'thirty',
           'Then begin again from the second step.')]),
    dict(heading='If it does not connect',
         kind='Troubleshooting page', task='Matching',
         band='gt_short', qtype='Questions 6-10',
         paras=[
          'A light that never leaves orange usually means the grey '
          'cable is in the wrong socket. There are four sockets of the '
          'same colour and only one is marked WAN.',
          'A device that says the password is wrong is nearly always '
          'reading an O as a letter. Try the zero. This single '
          'misconception accounts for more calls to our helpline than '
          'every other problem together.',
          'A connection that works and then stops after about a minute '
          'is usually two routers competing in one house. Unplug the '
          'old one completely rather than switching it off, because a '
          'switched-off router still answers.',
          'If none of this helps, telephone us. The line is open from '
          'eight until eight, and an out-of-hours message is answered '
          'the next morning.'],
         items=[
          ('Which problem means the cable is in the wrong socket?',
           ['a light that stays orange',
            'a password that is refused',
            'a connection that stops after a minute',
            'a red light'], 0,
           'Only one of the four sockets is marked WAN.'),
          ('Which problem is usually an O read as a letter?',
           ['a light that stays orange',
            'a password that is refused',
            'a connection that stops after a minute',
            'a red light'], 1,
           'The leaflet says to try the zero instead.'),
          ('Which problem means two routers are competing?',
           ['a light that stays orange',
            'a password that is refused',
            'a connection that stops after a minute',
            'a red light'], 2,
           'And the old one must be unplugged, not switched off.'),
          ('An old router that is switched off still ____________.',
           None, 'answers', 'Which is why it must be unplugged.'),
          ('The helpline is open from eight until ____________.',
           None, 'eight',
           'And out-of-hours messages wait until the morning.')])],
   listen=[
    dict(heading='A helpline call', part='Part 1',
         task='A call to a technical helpline', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Helpline', 'Technical support, good afternoon.'),
          ('Caller', 'My new router will not connect.'),
          ('Helpline', 'What colour is the light?'),
          ('Caller', 'Orange, and it has been orange for ten '
           'minutes.'),
          ('Helpline', 'Then the grey cable is probably in the wrong '
           'socket. Is it in the one marked WAN?'),
          ('Caller', 'It is in the second one along.'),
          ('Helpline', 'WAN is the one on the left, slightly apart from '
           'the others. Move it and tell me what happens.'),
          ('Caller', 'It is flashing now. And now green.'),
          ('Helpline', 'Good. Now the password. It is on the card '
           'underneath, and the letter that looks like an O is a '
           'zero.'),
          ('Caller', 'That explains yesterday.'),
          ('Helpline', 'It explains about half our calls. Connect one '
           'device, then the rest.'),
          ('Caller', 'Connected. Is the old router a problem?'),
          ('Helpline', 'Only if it is plugged in. Switching it off is '
           'not enough; it still answers. Unplug it at the wall.'),
          ('Caller', 'Done. Thank you.'),
          ('Helpline', 'If it drops again in the next week, ring back '
           'and ask for a line test. That is a different problem and '
           'we would need to book an engineer.')],
         items=[
          ('The light has been ____________ for ten minutes.', None,
           'orange', 'Which suggests the cable socket is wrong.'),
          ('The WAN socket is the one on the ____________.', None,
           'left', 'Slightly apart from the others.'),
          ('The letter that looks like an O is a ____________.', None,
           'zero', 'Which explains about half the helpline calls.'),
          ('The caller should connect ____________ device first.',
           None, 'one', 'And only then connect the other devices.'),
          ('The old router must be ____________ at the wall.', None,
           'unplugged', 'Because switching it off is not enough.'),
          ('If it drops again, the caller should ask for a line '
           '____________.', None, 'test',
           'Which would mean booking an engineer.')])],
   speak=dict(
    part='Part 1', focus='Technology at home',
    intro='Name a specific device and say what it does for you. Avoid '
          'talking about technology in general.',
    qs=['What machines do you use most at home?',
        'Are you good at setting up new devices?',
        'Do you read the instructions?',
        'Has anything at home broken recently?'],
    shape=[('answer', 'The one I would miss most is probably the '
            'washing machine, which is not the exciting answer.'),
           ('support', 'I am reasonably good at setting things up, '
            'mostly because I am willing to read the leaflet.'),
           ('follow-up', 'The router took me an evening last month '
            'because of a password where a zero looked like a letter '
            'O.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Complaining about a device that does not work',
         prompt='You bought a device and it does not work properly. '
                'Write to the company. In your letter: give the '
                'details of the purchase; describe the problem; say '
                'what you want them to do.',
         instruct='  Write at least 110 words in about 20 minutes.',
         lines=13,
         model=[
          'Dear Sir or Madam,',
          'I bought a WX200 router from your Ashfield branch on 4 '
          'March. The receipt number is 2291 and the price was '
          'forty-nine pounds.',
          'The router connects normally and then loses the connection '
          'after about a minute, several times an hour. I have followed '
          'every step in your troubleshooting guide: the cable is in '
          'the WAN socket, there is no second router in the house, and '
          'I have unplugged it for thirty seconds and started again. '
          'Your helpline suggested a line test, which has been done and '
          'found no fault on the line.',
          'I would like a replacement router rather than a repair, as '
          'the fault has now been present since the day I bought it. '
          'Could you tell me how to arrange this?',
          'Yours faithfully,',
          'K. Ferreira'],
         notes=['The purchase details come first and completely. A '
                'complaint without them is answered slowly.',
                'The second paragraph shows what has already been '
                'tried, which stops the company suggesting it '
                'again.',
                'The request names what is wanted and gives the reason '
                'that justifies it.'],
         criterion=[('Purchase details complete', 'Task Achievement'),
                    ('The fault described precisely', 'Task '
                     'Response'),
                    ('Steps already taken listed', 'Task '
                     'Achievement'),
                    ('A clear, justified request', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Imperatives and sequence in instructions',
    explain='Instructions use the plain verb, often with a time clause '
            'such as until, when or only when.',
    examples=['Connect the grey cable to the WAN socket.',
              'Wait until the light is steady green.',
              'Only when one device is connected should you add the '
              'rest.',
              'Do not connect anything else yet.'],
    items=[('(connect) the cable to the WAN socket.',
            'Connect the cable to the WAN socket.'),
           ('(wait) until the light is green.',
            'Wait until the light is green.'),
           ('(not / connect) anything else yet.',
            'Do not connect anything else yet.'),
           ('(unplug) the power for thirty seconds.',
            'Unplug the power for thirty seconds.'),
           ('(press) the button when the light flashes.',
            'Press the button when the light flashes.')],
    task='Write each instruction with an imperative.'),
   vocab=[('button', 'a small part you press'),
          ('pushed', 'pressed or moved with force'),
          ('failure', 'not working, or not succeeding'),
          ('status', 'the current state of something'),
          ('response', 'an answer or a reaction'),
          ('awkward', 'difficult to handle or embarrassing'),
          ('annoying', 'causing slight anger'),
          ('commercial', 'to do with buying and selling'),
          ('flashing', 'going on and off')],
   expr=[('What colour is the light?', 'the first diagnostic '
          'question'),
         ('Move it and tell me what happens.',
          'giving a step and asking for the result'),
         ('That explains yesterday.', 'realising the cause of an '
          'earlier problem'),
         ('That is a different problem.', 'separating two faults')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Living with screens',
   step=2,
   read=[
    dict(heading='Two families, two rules about screens',
         kind='Two short profiles', task='Matching features',
         band='gt_work', qtype='Questions 17-22',
         skill=('Two profiles are read for the rule and its result',
                ['Each family has a rule and a consequence. Pair them '
                 'before you read the questions.',
                 'Where a profile admits a problem, that admission is '
                 'usually an answer.']),
         paras=[
          'The Nowaks allow no screens at all on weekdays. The parents '
          'say the rule is easy to enforce precisely because it has no '
          'exceptions: there is nothing to argue about on a Tuesday. '
          'They admit the weekend is chaotic, and that their eldest '
          'does most of her watching at a friend’s house, which '
          'they did not intend and cannot prevent.',
          'The Baptistes have no time rule but a place rule: screens '
          'are used in the main room and nowhere else. Nothing goes '
          'upstairs. They say this was chosen because it is visible '
          'rather than because it is ideal, and a rule a parent can '
          'check from the doorway survives, while a rule about minutes '
          'needs a referee.',
          'Both families came to the same conclusion about one thing. '
          'The rule matters less than whether the adults follow it. In '
          'the Nowak house the parents use their telephones freely on '
          'weekdays, and their children have noticed and say so. In the '
          'Baptiste house the adults keep to the main room too, and the '
          'rule has caused almost no disagreement in four years.'],
         items=[
          ('Which family has a rule about where screens are used?',
           ['the Nowaks', 'the Baptistes', 'both', 'neither'], 1,
           'Screens stay in the main room and nothing goes '
           'upstairs.'),
          ('Which family’s rule has no exceptions?',
           ['the Nowaks', 'the Baptistes', 'both', 'neither'], 0,
           'No screens at all on weekdays.'),
          ('What do the Nowaks admit about their eldest child?', None,
           'she watches at a friend’s house',
           'Which they did not intend and cannot prevent.'),
          ('The Baptistes chose their rule because it is '
           '____________.', None, 'visible',
           'Rather than because it is ideal.'),
          ('A rule about minutes needs a ____________.', None,
           'referee', 'While a visible rule can be checked at a '
           'glance.'),
          ('What did both families conclude?',
           ['screens should be banned',
            'the rule matters less than whether adults follow it',
            'younger children need stricter rules',
            'weekends should be free'], 1,
           'The last paragraph, which contrasts the two houses.')])],
   listen=[
    dict(heading='Two parents disagree about screen time',
         part='Part 3',
         task='A discussion between two parents', band='l3',
         qtype='Questions 23-28',
         script=[
          ('Tutor', 'You run the same parents’ group and you '
           'disagree about this. Begin.'),
          ('Ana', 'My position is that the hours are the wrong thing to '
           'count. Two hours of making something and two hours of '
           'scrolling are not the same two hours.'),
          ('Ben', 'I agree that they are different. I still count the '
           'hours, because what I can measure is what I can enforce.'),
          ('Ana', 'That is an honest answer, and it is also how we end '
           'up treating a child learning to edit video the same as a '
           'child watching strangers argue.'),
          ('Ben', 'True. But a rule about quality needs a parent to '
           'judge every case, and in my house that means an argument '
           'every evening.'),
          ('Tutor', 'Is there evidence either way?'),
          ('Ana', 'The studies I have read find the relationship with '
           'hours is weak and the relationship with sleep is strong. '
           'Late screen use predicts almost everything bad.'),
          ('Ben', 'That I accept completely, and it is the one rule I '
           'would never give up: nothing after nine.'),
          ('Ana', 'Then we agree on the rule that matters and disagree '
           'about the one that is easier to measure.'),
          ('Ben', 'Which is probably how most of these arguments '
           'actually are.')],
         items=[
          ('Ana says the ____________ are the wrong thing to count.',
           None, 'hours', 'Because two hours are not all alike.'),
          ('Ben counts them because what he can measure he can '
           '____________.', None, 'enforce',
           'Which Ana calls an honest answer.'),
          ('Ben says a rule about ____________ needs a parent to '
           'judge every case.', None, 'quality',
           'Which would mean an argument every evening.'),
          ('Ana says the relationship with ____________ is strong.',
           None, 'sleep', 'While the relationship with hours is '
           'weak.'),
          ('Ben says the one rule he would never give up is nothing '
           'after ____________.', None, 'nine',
           'It is the rule he accepts completely.'),
          ('They agree on the rule that ____________ and disagree '
           'about the measurable one.', None, 'matters',
           'Which Ben says is how most such arguments are.')])],
   speak=dict(
    part='Part 2', focus='A rule in your home',
    intro='One minute, four lines. Describe one rule and judge it '
          'honestly.',
    qs=['Describe a rule you have at home, or had as a child.',
        'Say what the rule is.',
        'Say why it exists.',
        'Say whether it works.'],
    shape=[('answer', 'The rule in my house is that telephones stay in '
            'the main room.'),
           ('support', 'It exists because a rule about minutes needs '
            'somebody to count, and this one can be seen from the '
            'door.'),
           ('support', 'It applies to the adults as well, which is the '
            'part that makes it hold.'),
           ('follow-up', 'It works better than the rule I grew up '
            'with, which was about hours and was argued over every '
            'evening.')]),
   write=[
    dict(task='Task 2',
         heading='Should parents limit how long children use screens?',
         prompt='Some people think parents should strictly limit '
                'children’s screen time. Others think the kind of '
                'use matters more than the amount. Discuss both views '
                'and give your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Limit the time of day rather than the number of hours',
               [('The case for counting hours is that it can be '
                 'enforced',
                 ['a rule a parent can check survives',
                  'a rule about quality needs a judgement every '
                  'evening']),
                ('The case against is that the hours are not alike',
                 ['making a film and watching strangers argue are not '
                  'the same activity',
                  'a rule that treats them identically teaches '
                  'nothing']),
                ('The evidence points at sleep rather than at hours',
                 ['late use predicts most of the harms; total hours '
                  'predicts few',
                  'so a rule about the evening is both enforceable '
                  'and supported'])]),
         model=[
          'Parents are advised either to count their '
          'children’s screen hours or to pay attention to what '
          'those hours contain. Both sides have a point, and I think '
          'the evidence favours a third rule.',
          'Counting hours has one strong advantage: it can be '
          'enforced. A rule that a parent can check from the doorway '
          'survives, while a rule that asks a parent to judge whether '
          'this particular hour was worthwhile needs an argument every '
          'evening and usually collapses.',
          'The objection is also strong. Two hours spent editing a film '
          'and two hours spent watching strangers argue are not the '
          'same two hours, and a household rule that treats them as '
          'identical teaches a child that the clock matters and the '
          'content does not.',
          'What decides it for me is the evidence. The relationship '
          'between total hours and harm is weak in most studies, while '
          'the relationship with late use is strong: screens after a '
          'certain hour predict poor sleep, and poor sleep predicts '
          'almost everything else. A rule about the time of day is '
          'therefore both enforceable, like counting, and supported by '
          'the evidence, unlike counting.',
          'So I would set no hour limit and one firm rule: nothing '
          'after nine. It is visible, it is arguable only once, and it '
          'is the rule the research actually supports.'],
         notes=['Both views are given their strongest form before the '
                'writer’s own rule appears.',
                'The position is not a compromise between the two: it '
                'is a third rule that takes the virtue of each.',
                'The evidence is used to decide between them, which is '
                'what makes the final paragraph feel earned.'],
         criterion=[('Both views discussed properly', 'Task '
                     'Response'),
                    ('A third position that follows from them',
                     'Task Response'),
                    ('Evidence used to decide', 'Task Achievement'),
                    ('Accurate comparatives and conditionals',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Reporting what others think: claim, argue, accept',
    explain='Use that after claim, argue, accept and agree. Use the '
            'past in the reporting verb when the view was expressed '
            'earlier.',
    examples=['Ana argues that the hours are the wrong measure.',
              'Ben accepts that the activities differ.',
              'Both agreed that sleep matters most.',
              'Some people claim that any screen is harmful.'],
    items=[('Ana (argue) the hours are the wrong measure.',
            'Ana argues that the hours are the wrong measure.'),
           ('Ben (accept) the activities differ.',
            'Ben accepts that the activities differ.'),
           ('Both (agree) sleep matters most.',
            'Both agreed that sleep matters most.'),
           ('Some people (claim) any screen is harmful.',
            'Some people claim that any screen is harmful.'),
           ('The study (find) the link is weak.',
            'The study found that the link is weak.')],
    task='Write each sentence with a reporting verb and that.'),
   vocab=[('remote', 'far away; or a control you hold'),
          ('intention', 'what somebody means to do'),
          ('solved', 'found the answer to'),
          ('basis', 'the thing something rests on'),
          ('recover', 'to get better, or to get something back'),
          ('weakness', 'a weak point'),
          ('approve', 'to agree officially to something'),
          ('divided', 'separated into parts, or disagreeing'),
          ('invest', 'to put money or effort into something')],
   expr=[('The hours are the wrong thing to count.',
          'rejecting a measure'),
         ('What I can measure is what I can enforce.',
          'defending a practical rule'),
         ('That I accept completely.', 'conceding without '
          'qualification'),
         ('We agree on the rule that matters.',
          'locating the real agreement')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Keeping things working',
   step=2,
   read=[
    dict(heading='Repair or replace?',
         kind='Short article', task='Matching information',
         band='gt_work', qtype='Questions 29-34',
         paras=[
          'The arithmetic of repair has changed twice in thirty years '
          'and most people are using the older version. Until the '
          'nineties, a repair was usually cheaper than a replacement '
          'and almost always worth doing. Then manufacturing became '
          'cheap and labour did not, and for about twenty years '
          'replacing was the rational choice for nearly everything '
          'smaller than a car.',
          'The second change is happening now and it is less obvious. '
          'Devices have become expensive again, parts are more often '
          'available by law, and the commonest failures are in cheap '
          'components: a switch, a seal, a battery. A fridge that will '
          'not stay cold usually needs a part costing under twenty '
          'pounds, and a washing machine that leaks usually needs a '
          'seal costing eight.',
          'The difficulty is that nobody can tell which failure they '
          'have without opening the machine, and opening it is the part '
          'people will not do. Repair cafes exist for exactly this '
          'reason: somebody with a screwdriver and no commercial '
          'interest tells you in ten minutes whether the thing is worth '
          'saving. About six machines in ten that arrive at ours leave '
          'working.'],
         items=[
          ('Until the ____________, repair was usually cheaper than '
           'replacement.', None, 'nineties',
           'Paragraph 1, before manufacturing became cheap.'),
          ('For about twenty years, ____________ was the rational '
           'choice.', None, 'replacing',
           'Paragraph 1, for anything smaller than a car.'),
          ('Parts are now more often available by ____________.',
           None, 'law', 'Paragraph 2, one of three recent changes.'),
          ('A washing machine that leaks usually needs a seal costing '
           '____________ pounds.', None, 'eight',
           'Paragraph 2, against under twenty for a fridge part.'),
          ('What is the difficulty the writer identifies?', None,
           'nobody can tell which failure they have without opening '
           'the machine',
           'Paragraph 3, and opening it is what people avoid.'),
          ('About ____________ machines in ten leave the repair cafe '
           'working.', None, 'six',
           'Paragraph 3, the last sentence.')])],
   listen=[
    dict(heading='A repair cafe volunteer explains', part='Part 2',
         task='One speaker describing a project', band='l2',
         qtype='Questions 35-40',
         script=[
          ('Speaker', 'We open on the first Saturday of the month, from '
           'ten until two, and anybody may bring anything they can '
           'carry.'),
          ('Speaker', 'Last year we saw four hundred and twelve items. '
           'Two hundred and fifty went home working. That is six in '
           'ten, which is about what every repair cafe reports, so it '
           'is not us being good; it is what the failures are like.'),
          ('Speaker', 'The commonest repair is the cheapest. A switch, '
           'a fuse, a seal, a lead that has broken inside the '
           'insulation where you cannot see it. The part is almost '
           'always under ten pounds and the work is almost always under '
           'half an hour.'),
          ('Speaker', 'The rule we will not break is that we do not '
           'repair it for you. You sit with us and you hold the '
           'screwdriver. Half the point of this is that you find out '
           'the machine has six parts rather than a mystery inside '
           'it.'),
          ('Speaker', 'What we cannot do is anything sealed or '
           'anything where the part is not sold separately. Those are '
           'refused at the door and we tell people why, because the '
           'why is worth knowing when they buy the next one.'),
          ('Speaker', 'The thing that surprises volunteers is how many '
           'people bring something that is not broken at all. It is '
           'dirty, or a filter is blocked, and we have cleaned more '
           'machines than we have mended.')],
         items=[
          ('The cafe opens on the first ____________ of the month.',
           None, 'Saturday', 'The cafe opens from ten until two.'),
          ('Last year they saw ____________ hundred and twelve items.',
           None, 'four', 'Of which two hundred and fifty went home '
           'working.'),
          ('The part is almost always under ____________ pounds.',
           None, 'ten', 'And the work under half an hour.'),
          ('The rule they will not break is that you hold the '
           '____________.', None, 'screwdriver',
           'They do not repair it for you.'),
          ('They refuse anything ____________ or where the part is '
           'not sold separately.', None, 'sealed',
           'And they explain why at the door.'),
          ('Many machines brought in are not broken but '
           '____________.', None, 'dirty',
           'Or have a blocked filter, the speaker says.')])],
   speak=dict(
    part='Part 3', focus='Repair and waste',
    intro='Give a view and a reason, then a limit on your own view.',
    qs=['Should companies be required to make repairable products?',
        'Why do people throw away things that could be mended?',
        'Who should pay for dealing with electrical waste?'],
    shape=[('answer', 'I think companies should have to sell parts '
            'separately, which is most of what repairability means.'),
           ('support', 'The commonest failures are cheap parts: a '
            'switch, a seal, a battery.'),
           ('support', 'People throw things away because they cannot '
            'tell what is wrong without opening it.'),
           ('follow-up', 'The limit is that some things genuinely '
            'cannot be repaired safely, and a rule should say which '
            'rather than pretend otherwise.')]),
   write=[
    dict(task='Task 1', fork='A', heading='Hours a day on screens, by '
         'age',
         figure=_SCREEN,
         prompt='The graph shows mean daily screen hours in three age '
                'groups. Describe the graph and compare the groups.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The graph shows the mean number of hours a day that three '
          'age groups spent on screens outside work or school between '
          '2010 and 2022.',
          'All three groups rose throughout, and the order never '
          'changed: the youngest group was highest at every point and '
          'the oldest lowest.',
          'The twelve to seventeen group rose from two point six hours '
          'to five point one, an increase of two and a half hours. The '
          'thirty to forty-nine group rose from one point nine to three '
          'point four, and the over-sixty-fives from zero point eight '
          'to two point three, which is the largest proportional rise '
          'of the three: their figure almost tripled.',
          'The gap between the youngest and the oldest widened from one '
          'point eight hours in 2010 to two point eight in 2022, so the '
          'groups rose together without converging.'],
         notes=['The common direction is given before any single '
                'line, which is what three rising lines need.',
                'The largest rise in hours and the largest '
                'proportional rise are different groups, and the '
                'answer says both.',
                'The change in the gap is calculated, which is the '
                'comparison most candidates miss.'],
         criterion=[('All three lines with start and end figures',
                     'Task Achievement'),
                    ('Absolute and proportional change distinguished',
                     'Task Response'),
                    ('The change in the gap calculated', 'Task '
                     'Response'),
                    ('Decimals written clearly', 'Grammatical Range '
                     'and Accuracy')])],
   gram=dict(
    point='Describing change: rose from, by, to',
    explain='Rose from a number to a number; rose by the difference. '
            'Do not mix them.',
    examples=['It rose from two point six to five point one.',
              'It rose by two and a half hours.',
              'The figure almost tripled.',
              'The gap widened from one point eight to two point '
              'eight.'],
    items=[('It (rise) 2.6 ____ 5.1.',
            'It rose from 2.6 to 5.1.'),
           ('It (rise) ____ 2.5 hours.', 'It rose by 2.5 hours.'),
           ('The figure almost (triple).',
            'The figure almost tripled.'),
           ('The gap (widen) 1.8 ____ 2.8.',
            'The gap widened from 1.8 to 2.8.'),
           ('Use rose ____ for the difference.',
            'Use rose by for the difference.')],
    task='Complete each sentence with from, to or by.'),
   vocab=[('automatically', 'without a person doing anything'),
          ('burglar', 'a person who breaks in to steal'),
          ('secrecy', 'keeping something hidden'),
          ('spelling', 'the way a word is written'),
          ('authentication', 'checking that somebody is who they say'),
          ('bulk', 'a large amount; or the main part'),
          ('complexity', 'being made of many connected parts'),
          ('consequential', 'important because of what follows')],
   expr=[('About six in ten leave working.', 'quoting a success '
          'rate'),
         ('It is not us being good.', 'refusing credit honestly'),
         ('You hold the screwdriver.', 'describing a rule of a '
          'scheme'),
         ('The why is worth knowing.', 'explaining why a refusal is '
          'useful')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='How a fridge keeps things cold',
   step=3,
   read=[
    dict(heading='The cycle inside a refrigerator',
         kind='Short factual article',
         task='Flow-chart completion and matching',
         band='acad', qtype='Questions 41-47',
         paras=[
          'A fridge does not make cold. There is no such thing as cold '
          'to make: there is only heat, and a fridge is a machine for '
          'moving it from one place to another. Everything odd about a '
          'fridge follows from that one sentence, including the fact '
          'that the back of it is warm and that leaving the door open '
          'heats the kitchen rather than cooling it.',
          'The machine works in four stages and the same material goes '
          'round them endlessly. First a pump squeezes a gas, and '
          'squeezing a gas makes it hot: hotter than the kitchen. '
          'Second, that hot gas passes through the coils at the back, '
          'where it is hotter than the air around it, so heat flows out '
          'of it and the gas becomes a liquid.',
          'Third, the liquid is let through a very narrow opening into '
          'a wider space, and expanding makes it cold: colder than the '
          'inside of the fridge. Fourth, that cold liquid passes '
          'through pipes inside the cabinet, where it is colder than '
          'the food, so heat flows out of the food and into it. The '
          'liquid becomes a gas again and returns to the pump.',
          'The whole machine therefore depends on one rule: heat flows '
          'from the hotter thing to the colder one, always. The only '
          'way to move it the other way is to use energy to make '
          'something hotter or colder than what you want to affect. A '
          'fridge is not an exception to that rule. It is a device for '
          'exploiting it twice.'],
         items=[
          ('A fridge is a machine for moving ____________.', None,
           'heat', 'Paragraph 1: there is no cold to make.'),
          ('Leaving the door open ____________ the kitchen.', None,
           'heats', 'Paragraph 1, rather than cooling it.'),
          ('Squeezing a gas makes it ____________.', None, 'hot',
           'Paragraph 2, hotter than the kitchen.'),
          ('In the coils at the back, heat flows ____________ of the '
           'gas.', None, 'out',
           'Paragraph 2, and the gas becomes a liquid.'),
          ('Expanding through a narrow opening makes the liquid '
           '____________.', None, 'cold',
           'Paragraph 3, colder than the inside of the fridge.'),
          ('Which stage takes heat from the food?',
           ['compression', 'condensing', 'expansion', 'evaporating'],
           3, 'Paragraph 3: the cold liquid passes through the '
           'cabinet.'),
          ('Heat always flows from the ____________ thing to the '
           'colder one.', None, 'hotter',
           'Paragraph 4, which the whole machine depends on.')])],
   listen=[
    dict(heading='A technician explains the cooling cycle',
         part='Part 4',
         task='A talk to trainee technicians', band='l4',
         qtype='Questions 48-53',
         script=[
          ('Speaker', 'Before any of you touch a fridge, understand '
           'what it is. It is not a cold machine. It is a heat pump, '
           'and once you have that, every fault makes sense.'),
          ('Speaker', 'Four stages. The compressor squeezes the gas and '
           'the gas gets hot. The coils at the back let that heat go '
           'into the kitchen. The valve lets the liquid expand and it '
           'gets very cold. The pipes inside take heat out of your '
           'food. Then round again.'),
          ('Speaker', 'Now the faults, which are nearly always one of '
           'three. One: the coils at the back are covered in dust, so '
           'the heat cannot leave, so the fridge runs continuously and '
           'never gets cold. That is a brush and ten minutes.'),
          ('Speaker', 'Two: the door seal is perished, so warm air '
           'comes in all day. The test is a sheet of paper in the door; '
           'if it pulls out easily, the seal has gone. A seal is about '
           'eight pounds.'),
          ('Speaker', 'Three: the gas has leaked, which is the one that '
           'is usually not worth repairing, because finding the leak '
           'costs more than the machine.'),
          ('Speaker', 'So two of the three commonest faults are a brush '
           'and a part that costs eight pounds, and most of those '
           'machines are thrown away. That is the fact I want you to '
           'remember when somebody tells you repair is not viable.')],
         items=[
          ('The speaker says a fridge is a ____________ pump.', None,
           'heat', 'Rather than a machine that makes cold.'),
          ('The coils at the back let heat go into the ____________.',
           None, 'kitchen', 'After the compressor squeezes the gas.'),
          ('Dusty coils make the fridge run ____________.', None,
           'continuously', 'Because the heat cannot leave.'),
          ('The test for a door seal is a sheet of ____________.',
           None, 'paper', 'If it pulls out easily, the seal has '
           'gone.'),
          ('A new seal costs about ____________ pounds.', None,
           'eight', 'Which is one of the two cheap faults.'),
          ('Which fault is usually not worth repairing?', None,
           'a gas leak', 'Because finding it costs more than the '
           'machine.')])],
   speak=dict(
    part='Part 3', focus='Machines and how they work',
    intro='Explain the mechanism in two sentences, then say what '
          'follows from it.',
    qs=['Should people understand how household machines work?',
        'Do machines make life easier or just busier?',
        'What should happen to old machines?'],
    shape=[('answer', 'I think a basic idea of the mechanism is worth '
            'having.'),
           ('support', 'A fridge moves heat rather than making cold, '
            'which is why the back is warm.'),
           ('support', 'Knowing that tells you that dusty coils stop '
            'it working, which is the commonest fault.'),
           ('follow-up', 'So the understanding is not academic: two of '
            'the three commonest faults are a brush and an '
            'eight-pound part.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How a fridge keeps things cold',
         figure=_FRIDGE,
         prompt='The diagram shows the cycle inside a refrigerator. '
                'Describe the process.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The diagram shows the four stages of the cycle by which a '
          'refrigerator removes heat from its cabinet.',
          'In the first stage the gas is squeezed by a pump, which '
          'raises its temperature above that of the kitchen. In the '
          'second the hot gas passes through coils at the back, where '
          'the surrounding air is cooler, so heat leaves the gas and it '
          'becomes a liquid.',
          'In the third stage the liquid is allowed through a narrow '
          'valve into a wider space, and this expansion cools it '
          'sharply. In the fourth it passes through pipes inside the '
          'cabinet, where it is colder than the food, so heat moves '
          'from the food into the liquid.',
          'The cycle is then complete and the material returns to the '
          'pump as a gas. The process is a loop rather than a line: no '
          'stage produces cold, and each one simply moves heat towards '
          'the back of the machine.'],
         notes=['The four stages are given in order with the physical '
                'reason for each, which the diagram implies and a good '
                'answer makes explicit.',
                'The word loop is used, because a cyclical process '
                'needs to be described as one.',
                'The final sentence states what the process does '
                'overall rather than repeating a stage.'],
         criterion=[('All four stages described', 'Task Achievement'),
                    ('The loop identified as a loop', 'Coherence and '
                     'Cohesion'),
                    ('Cause given for each stage', 'Task Response'),
                    ('The passive used throughout', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Cause and result: so, which means, as a result',
    explain='Use so and as a result between clauses, and which means '
            'to attach a result to what came before.',
    examples=['The gas is hotter than the air, so heat leaves it.',
              'The coils are dusty, which means the heat cannot '
              'leave.',
              'The seal is perished; as a result, warm air enters.',
              'The liquid expands and so becomes cold.'],
    items=[('The gas is hotter than the air. Heat leaves it. (so)',
            'The gas is hotter than the air, so heat leaves it.'),
           ('The coils are dusty. The heat cannot leave. (which '
            'means)',
            'The coils are dusty, which means the heat cannot '
            'leave.'),
           ('The seal is perished. Warm air enters. (as a result)',
            'The seal is perished; as a result, warm air enters.'),
           ('The liquid expands. It becomes cold. (so)',
            'The liquid expands, so it becomes cold.'),
           ('The gas has leaked. The machine cannot cool. (which '
            'means)',
            'The gas has leaked, which means the machine cannot '
            'cool.')],
    task='Join each pair with the connector given.'),
   vocab=[('disagreement', 'a failure to agree'),
          ('erases', 'rubs out or removes completely'),
          ('faithfully', 'in a way that is exact and loyal'),
          ('misconception', 'a wrong idea about something'),
          ('nineties', 'the years from 1990 to 1999'),
          ('promoting', 'encouraging or advertising'),
          ('refined', 'improved by small changes'),
          ('settings', 'the chosen positions of controls')],
   expr=[('A fridge does not make cold.', 'correcting a basic '
          'misunderstanding'),
         ('Once you have that, every fault makes sense.',
          'showing why a principle matters'),
         ('That is a brush and ten minutes.', 'dismissing a supposed '
          'difficulty'),
         ('Round again.', 'describing a cycle informally')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Technology that changed the home',
   step=3,
   read=[
    dict(heading='Three machines that changed housework',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 54-60',
         paras=[
          'If you ask which machine saved the most human time, the '
          'answer defeats expectation. It is not the vacuum cleaner '
          'and it is not the dishwasher. The three that mattered are '
          'running water, the washing machine and the fridge, and what '
          'they have in common is the elimination of work that was '
          'measured in hours a day rather than minutes.',
          'Running water is the largest and the least discussed. In a '
          'house without it, somebody carried every litre that was '
          'used, for drinking, washing, cooking and cleaning, and that '
          'somebody was almost always a woman or a child. Surveys from '
          'the nineteen-twenties put it at several hours daily in rural '
          'households. A tap does not look like a machine and it '
          'replaced more labour than any machine ever built.',
          'The washing machine is second and is better documented. '
          'Hand-washing a household\u2019s clothes took a full day a week, '
          'and it was heavy, wet and unavoidable. What the machine '
          'changed was not only the hours but the standard. Once '
          'washing became easy, clothes were washed far more often. '
          'The time saved was smaller than the arithmetic suggests, '
          'and the result was cleaner people rather than freer ones.',
          'That last point generalises, and it is the interesting part. '
          'Labour-saving machines in the home have repeatedly been '
          'followed by rising standards that absorbed much of the '
          'saving. The fridge is the clearest exception: it did not '
          'raise a standard, it removed a daily journey to buy food '
          'that would otherwise spoil, and that time has stayed '
          'saved.'],
         items=[
          ('Which three machines does the writer name?', None,
           'running water, the washing machine and the fridge',
           'Paragraph 1, rather than the vacuum or dishwasher.'),
          ('What do the three have in common?', None,
           'they removed work measured in hours a day',
           'Paragraph 1, rather than minutes.'),
          ('Surveys from the ____________ put water carrying at '
           'several hours daily.', None, 'nineteen-twenties',
           'Paragraph 2, in rural households.'),
          ('Hand-washing clothes took a full ____________ a week.',
           None, 'day', 'Paragraph 3, and it was heavy and wet.'),
          ('What did the washing machine change besides the hours?',
           None, 'the standard',
           'Paragraph 3: clothes were washed far more often.'),
          ('Which paragraph explains why savings were often '
           'absorbed?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4'], 2,
           'Rising standards followed labour-saving machines.'),
          ('Why is the fridge the clearest exception?', None,
           'it removed a daily journey rather than raising a standard',
           'Paragraph 4, and that time has stayed saved.')])],
   listen=[
    dict(heading='A historian on the washing machine', part='Part 4',
         task='A short lecture', band='l4', qtype='Questions 61-66',
         script=[
          ('Speaker', 'I am going to argue that the washing machine is '
           'the second most important machine ever installed in a '
           'house, and that the first is the tap.'),
          ('Speaker', 'Start with the washing. Before the machine, a '
           'household’s clothes took one full day a week. Not an '
           'hour: a day. Heating the water, carrying it, scrubbing, '
           'rinsing, wringing and drying, with no part of it possible '
           'to do sitting down.'),
          ('Speaker', 'Now the part that makes the history '
           'interesting. The hours did not all come back as free time. '
           'Once washing was easy, the expected standard rose. Clothes '
           'that had been worn for a week were washed after a day. We '
           'got cleaner; we did not get proportionally freer.'),
          ('Speaker', 'That pattern repeats across the century, which '
           'is why the promised leisure never arrived. Each machine was '
           'met by a higher standard, and the standard was usually set '
           'by advertising and by neighbours rather than by health.'),
          ('Speaker', 'The exception is refrigeration, and it is worth '
           'noticing why. The fridge did not raise a standard. It '
           'abolished a task: the daily walk to buy food that would '
           'otherwise spoil by evening. Nobody responded by shopping '
           'more often. The saving stayed saved.'),
          ('Speaker', 'So when you read that a new technology will free '
           'people, ask one question: does it remove a task, or does it '
           'make a task easier? Only the first kind gives time back.')],
         items=[
          ('The speaker says the most important machine in a house is '
           'the ____________.', None, 'tap',
           'With the washing machine second.'),
          ('Washing clothes took one full ____________ a week.', None,
           'day', 'None of it possible to do sitting down.'),
          ('Once washing was easy, the expected ____________ rose.',
           None, 'standard',
           'So the hours did not come back as free time.'),
          ('The standard was usually set by advertising and by '
           '____________.', None, 'neighbours',
           'Rather than by health, the speaker says.'),
          ('The fridge abolished a ____________ rather than raising a '
           'standard.', None, 'task',
           'It ended the daily walk to buy food.'),
          ('The question to ask of a new technology is whether it '
           '____________ a task.', None, 'removes',
           'Rather than merely making it easier.')])],
   speak=dict(
    part='Part 3', focus='Technology and time',
    intro='Use the distinction from the reading if it helps: removing '
          'a task against making one easier.',
    qs=['Has technology given people more free time?',
        'Which machine in the home is the most useful?',
        'Will new technology change housework again?'],
    shape=[('answer', 'Less than it promised, and the reason is '
            'interesting.'),
           ('support', 'Once washing became easy, clothes were washed '
            'far more often, so the hours were absorbed.'),
           ('support', 'The fridge is the exception because it '
            'abolished a daily journey rather than raising a '
            'standard.'),
           ('follow-up', 'So the question for any new machine is '
            'whether it removes a task or only makes one easier.')]),
   write=[
    dict(task='Task 2',
         heading='Has technology made life easier or more demanding?',
         prompt='Some people think technology has made daily life much '
                'easier. Others think it has created new demands. '
                'Discuss both views and give your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('It removes tasks and raises standards, and which '
               'dominates decides the answer',
               [('The case that life is easier',
                 ['running water, washing machines and fridges removed '
                  'hours of daily labour',
                  'and that work fell almost entirely on women and '
                  'children']),
                ('The case that demands have grown',
                 ['once a task became easy, the expected standard '
                  'rose',
                  'so clothes washed weekly were washed daily and the '
                  'saving was absorbed']),
                ('The test that separates them',
                 ['a technology that abolishes a task gives time '
                  'back',
                  'one that makes a task easier usually does not'])]),
         model=[
          'Whether technology has made life easier or more demanding '
          'is usually argued with examples chosen to suit the answer. A '
          'better approach is to ask what kind of change each '
          'technology made.',
          'The case that life is easier is very strong for one period '
          'and one set of machines. Running water, the washing machine '
          'and the refrigerator each removed work measured in hours a '
          'day, and that work fell almost entirely on women and '
          'children. No argument about modern busyness should be made '
          'without acknowledging that.',
          'The case that demands have grown is equally real, and it is '
          'about standards rather than hours. Once washing clothes '
          'became easy, clothes that had been worn for a week were '
          'washed after a day. The machine did not fail; the '
          'expectation rose to meet it, and the time was absorbed.',
          'What separates the two cases is a simple test. A technology '
          'that abolishes a task gives time back permanently: the '
          'fridge removed the daily walk to buy food, and nobody '
          'responded by shopping more often. A technology that merely '
          'makes a task easier usually does not, because the standard '
          'rises to fill the space.',
          'My own view, then, is that both sides are describing real '
          'things, and that the useful question about any new device is '
          'which of the two it is doing.'],
         notes=['The first paragraph refuses the framing and proposes '
                'a better question, which is a legitimate and strong '
                'opening.',
                'The historical point about who did the work is placed '
                'where it strengthens the argument rather than as '
                'decoration.',
                'The test in the fourth paragraph is what the whole '
                'answer has been building towards.'],
         criterion=[('Both views discussed with real examples',
                     'Task Response'),
                    ('A test that distinguishes them', 'Task '
                     'Response'),
                    ('Paragraphs that each do one job', 'Coherence '
                     'and Cohesion'),
                    ('Accurate past and present perfect',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Present perfect for change up to now',
    explain='Use the present perfect for a change that started in the '
            'past and matters now, often with since or over.',
    examples=['Technology has removed hours of daily work.',
              'Standards have risen since the machines arrived.',
              'The saving has stayed saved.',
              'Expectations have grown over the century.'],
    items=[('Technology (remove) hours of daily work.',
            'Technology has removed hours of daily work.'),
           ('Standards (rise) since the machines arrived.',
            'Standards have risen since the machines arrived.'),
           ('The saving (stay) saved.', 'The saving has stayed '
            'saved.'),
           ('Expectations (grow) over the century.',
            'Expectations have grown over the century.'),
           ('Nobody (respond) by shopping more often.',
            'Nobody has responded by shopping more often.')],
    task='Write each sentence in the present perfect.'),
   vocab=[('photographic', 'to do with photography'),
          ('out-of-hours', 'outside the normal opening times'),
          ('necessity', 'something that is needed'),
          ('litres', 'units of liquid measure'),
          ('famines', 'periods when there is not enough food'),
          ('undercut', 'sold at a lower price than another'),
          ('thirty-six', 'the number 36'),
          ('automation', 'the use of machines in place of people')],
   expr=[('The answer is not the one people expect.',
          'opening with a correction'),
         ('A tap does not look like a machine.',
          'challenging a category'),
         ('The saving stayed saved.', 'naming a real gain'),
         ('Does it remove a task, or make one easier?',
          'offering a test')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='Guessing from context, in Reading this time',
  body='Foundation 1 taught you to keep going past a word you do not '
       'know. In Reading the stakes are different, because you can go '
       'back and therefore you will, and going back is what costs the '
       'time. Here is the version of the skill that works under a '
       'clock. When you meet an unknown word, do not stop. Finish the '
       'sentence, because the end of a sentence very often defines the '
       'beginning of it. Then ask three questions, which take about '
       'three seconds together. What kind of word is it? Is it '
       'positive or negative? Does the sentence tell me roughly how big '
       'or how important the thing is? That is usually enough. For '
       'example: "the seal is perished, so warm air enters all day". '
       'You may not know perished. The sentence tells you it is a bad '
       'state of the seal and that it lets air through, which is '
       'everything a question could ask. Only stop properly if the word '
       'is in a question, and then use the paragraph rather than the '
       'word: find what the paragraph is doing with it. A warning: if '
       'you are meeting more than about eight unknown words in a '
       'passage of three hundred, guessing stops working and you are '
       'reading something too hard. That is a reason to build '
       'vocabulary, not a reason to guess harder.',
  panel=[('Finish the sentence first',
          'The end of a sentence often defines its beginning.'),
         ('Three questions, three seconds',
          'Kind of word? Positive or negative? How big?'),
         ('Stop only for an answer',
          'And then use the paragraph, not the word.'),
         ('Eight unknowns in three hundred words',
          'Above that, guessing stops working.')],
  qs=['Did I finish the sentence before stopping?',
      'What kind of word is it?',
      'Is it good or bad in this sentence?',
      'Do I need it for any question?',
      'How many unknown words were there in total?'],
  task='Read the cycle 5 passage without stopping. Underline every '
       'unknown word, then write beside each one what you could tell '
       'from the sentence alone. Count them: if there are more than '
       'eight, note which cycle’s vocabulary list they belong '
       'to.'),

 outlining=dict(
  title='Essay to outline: reverse-engineer the cycle 5 model',
  body='This page runs the machine backwards on a full-length Task 2 '
       'answer, which is longer and more structured than the short ones '
       'you reversed in Foundation 1. Take the cycle 5 model about '
       'technology and time. Write out the plan behind it in eleven '
       'lines: the position, three ideas with support and consequence, '
       'the concession and the closing move. You will find four things '
       'that your own plans probably do not have yet. First, the '
       'position is a reframing: the writer refuses the question as '
       'asked and proposes a better one in the first paragraph. Second, '
       'each body paragraph does exactly one job and you can name it in '
       'three words. Third, the strongest sentence in the answer is in '
       'the fourth paragraph, not the first, because it had to be '
       'earned by the two paragraphs before it. Fourth, the final '
       'paragraph does not summarise: it tells the reader what question '
       'to ask next. Reverse three models this way and you will stop '
       'writing introductions that announce what you are about to do, '
       'because you will see that good answers do not have them.',
  frame=('Technology removes tasks and raises standards; which '
         'dominates decides the answer',
         [('The case that life is easier',
           ['running water, washing machines and fridges removed hours '
            'a day',
            'and that work fell almost entirely on women and '
            'children']),
          ('The case that demands have grown',
           ['once a task became easy, the standard rose to meet it',
            'so the hours were absorbed rather than returned']),
          ('The test that separates the two',
           ['a technology that abolishes a task gives time back',
            'one that only makes a task easier usually does not'])]),
  qs=['What is the position, and is it a reframing?',
      'What one job does each body paragraph do?',
      'Which sentence is the strongest, and what earned it?',
      'Does the conclusion summarise or point forward?',
      'Is there an introduction that only announces?'],
  task='Write out the eleven-line plan behind the cycle 5 model, then '
       'do the same for the cycle 2 model. Compare the two shapes and '
       'note what they have in common.',
  answers=['the position can be a better question than the one asked',
           'one job a paragraph, nameable in three words',
           'the strongest sentence usually comes third or fourth',
           'a conclusion that points forward beats one that sums up',
           'good answers rarely announce what they will do']),

 candos=['I can follow a setting-up guide and report a fault '
         'precisely',
         'I can compare two households and judge a rule',
         'I can describe a graph with three rising lines and a '
         'widening gap',
         'I can guess an unknown word from its sentence under time',
         'I can reverse a full Task 2 answer into its plan'],

 tip=('More than about eight unknown words in three hundred means '
      'guessing has stopped working. That is a signal to build '
      'vocabulary, not to guess harder.'))
