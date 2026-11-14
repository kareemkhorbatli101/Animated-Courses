# -*- coding: utf-8 -*-
"""Foundation Unit 8 · Getting There: Travel and Transport.

Grammar: past simple, irregular verbs; questions and negatives with did.
Question spine: Did ...? Where did ...?
"""

UNIT = dict(
    n=8, vol='F', level='A2',
    title='Getting There: Travel and Transport',
    icons=('globe', 'clock', 'chart'),
    subs=('The bus and the train', 'A ticket and a timetable', 'A journey you made'),
    grammar='past simple: irregular verbs · questions with did',
    field='travel, journeys, tickets',
    names=('Riverside', 'Ana', 'Ruiz', 'Yusuf', 'Mei', 'Patel', 'Oakfield', 'Lena',
           'Peru', 'Turkey', 'Northgate', 'Westbury'),
    opener_line='Three sub-topics, three cycles in every skill. This unit carries the fifty '
                'irregular verbs that English uses most, and after it the past is yours.',
    candos=[
        'tell a short story about a journey in the past',
        'read a timetable and a ticket and find the facts',
        'understand a short text about how students travel',
        'follow a conversation about a journey that went wrong',
        'ask questions about the past with did',
        'write an email asking for money back after a delay'],

    core=[
        ('travel', 'to go from one place to another'),
        ('journey', 'the act of going from one place to another'),
        ('transport', 'buses, trains and other ways of travelling'),
        ('bus', 'a big road machine that carries many people'),
        ('train', 'it runs on rails between stations'),
        ('car', 'a small road machine for four or five people'),
        ('bicycle', 'you ride it and it has two wheels'),
        ('taxi', 'a car you pay to take you somewhere'),
        ('station', 'the place where trains and buses stop'),
        ('airport', 'the place where planes land'),
        ('ticket', 'the paper or card that lets you travel'),
        ('seat', 'the place where you sit'),
        ('platform', 'the part of a station where you wait for the train'),
        ('driver', 'the person who drives'),
        ('passenger', 'somebody travelling in a bus, train or car'),
        ('luggage', 'the bags you take on a journey'),
        ('delay', 'a wait that should not happen'),
        ('crowded', 'with too many people in it'),
        ('direct', 'with no change on the way'),
        ('miss', 'to arrive too late for something'),
        ('catch', 'to arrive in time for a bus or train'),
        ('traffic', 'all the vehicles on the road'),
        ('road', 'the hard way that cars drive on'),
        ('wheel', 'the round part that turns')],
    campus=[
        ('travel card', 'the card you load with money for buses and trains'),
        ('student discount', 'a lower price because you are a student'),
        ('bus pass', 'a card for many bus journeys'),
        ('cycle rack', 'the metal frame where you leave a bicycle'),
        ('shuttle bus', 'a small bus between two places on one route'),
        ('route', 'the way a bus or train goes'),
        ('zone', 'one part of a city for the price of a ticket'),
        ('fare', 'the price of a journey'),
        ('barrier', 'the gate you put your ticket in at a station'),
        ('lost property', 'the office that keeps the things people leave'),
        ('return ticket', 'a ticket there and back'),
        ('single ticket', 'a ticket one way only')],
    again=['journey', 'delay', 'platform', 'fare', 'route', 'shuttle bus',
           'return ticket', 'crowded'],
    vocab_talk=[
        'How did you come to college today?',
        'Did you ever miss a bus or a train? What happened?',
        'How long is your journey to college?',
        'Which kind of transport do you like, and why?'],

    r1=dict(
        sub='The bus and the train',
        skill=('Irregular verbs have no rule', [
            'Regular verbs add -ed. Irregular verbs change inside: take, took.',
            'There is no rule and there is no short cut. There is only the list.',
            'Count the dashes. Each dash is one letter of the missing part.',
            'Learn them in pairs and say both halves out loud.']),
        guided_text='Yesterday I t--- the early bus. I l--- the flat at seven and I g-- to '
                    'the station at half past. The train c--- on time and I f---- a seat by '
                    'the window.',
        guided_hint='1  t---  →  ook  (took)',
        guided=['ook', 'eft', 'ot', 'ame', 'ound'],
        exam_text='Last Monday the shuttle bus br--- down near the station. The driver '
                  't--- everybody to get off and we st--- on the road in the rain. Nobody '
                  'kn-- how long the wait was. I w--- to the station and c----- the train '
                  'instead, but the barrier d-- not read my travel card. A member of staff '
                  'c--- over and op---- the gate for me. I g-- to the college at half past '
                  'ten and the lecture was already over. I sat down in the canteen and '
                  'waited for the next one.',
        exam=['oke', 'old', 'ood', 'ew', 'ent', 'aught', 'id', 'ame', 'ened', 'ot']),

    r2=dict(
        sub='A ticket and a timetable',
        skill=('Two documents, one answer', [
            'A question sometimes needs the ticket and the timetable together.',
            'Check the date and the zone on a ticket before anything else.',
            'A timetable column is one journey from top to bottom.',
            'The words before and after a time decide everything on a ticket.']),
        docs=[
            ('notice', 'Northgate — Westbury   Monday to Friday', [
                '# Morning trains',
                'Northgate   07.05   07.35   08.05   08.35',
                'Riverside   07.19   07.49   08.19   08.49',
                'Westbury   07.41   08.11   08.41   09.11',
                '# Notes',
                '* The 07.35 does not stop at Riverside on Wednesday.',
                '* The shuttle bus leaves Riverside station for the college at 08.00 and '
                '08.30.'], 'notice'),
            ('ad', 'Student travel card', [
                '# What it is',
                '* A card for zones 1 and 2, good from Monday to Sunday.',
                '* Student discount: one third off every single ticket.',
                '# Rules',
                '* It does not work before 09.30 on Monday to Friday.',
                '* Show it with your student card at the barrier.',
                '* Lost cards: go to lost property at Northgate, not to the college.'], 'ad')],
        guided=[
            ('What time does the 07.05 from Northgate reach Westbury?',
             ('07.19', '07.41', '08.11', '08.41'), 1,
             'The 07.05 column: Northgate 07.05, Riverside 07.19, Westbury 07.41.'),
            ('Which train does not stop at Riverside on Wednesday?',
             ('07.05', '07.35', '08.05', '08.35'), 1,
             'The 07.35 does not stop at Riverside on Wednesday.'),
            ('How much is the student discount?',
             ('one half off', 'one third off', 'one quarter off', 'nothing'), 1,
             'Student discount: one third off every single ticket.'),
            ('When is the travel card does not work?',
             ('after 09.30', 'before 09.30 on Monday to Friday', 'at the weekend', 'in zone 2'), 1,
             'It does not work before 09.30 on Monday to Friday.')],
        exam=[
            ('A student takes the 08.05 from Northgate. When does it reach Riverside?',
             ('08.11', '08.19', '08.41', '08.49'), 1,
             'The 08.05 column gives Riverside 08.19.'),
            ('Which shuttle bus can that student catch?',
             ('08.00', '08.30', 'both', 'neither'), 1,
             'The train reaches Riverside at 08.19, so the 08.30 bus.'),
            ('Can a student use the travel card on the 08.05 train?',
             ('yes', 'no', 'only on Wednesday', 'only in zone 1'), 1,
             'It does not work before 09.30 on Monday to Friday.'),
            ('What do you show at the barrier?',
             ('only the travel card', 'the travel card and the student card',
              'only the student card', 'the ticket and the timetable'), 1,
             'Show it with your student card at the barrier.'),
            ('Where do you go if you lose the card?',
             ('the college office', 'lost property at Northgate', 'the shuttle bus',
              'the station at Westbury'), 1,
             'Lost cards: go to lost property at Northgate, not to the college.'),
            ('How many zones does the card cover?',
             ('one', 'two', 'three', 'all of them'), 1,
             'A card for zones 1 and 2.')]),

    r3=dict(
        sub='A journey you made',
        title='The Hour Nobody Counts',
        words=167,
        paras=[
            'Ask a student how long their course is. They tell you the hours of '
            'teaching. Nobody counts the journey. But a student an hour away spends '
            'ten hours a week on a bus.',
            'Ten hours is a large part of a week. The college knows this and the timetable '
            'does not. Classes start at nine. The cheap travel card does not work '
            'before half past nine. So the students with the least money pay the full '
            'fare, every single day of the term.',
            'Some of those ten hours are not lost. A bus is a reading room with bad '
            'lights. Many students do their reading there and nowhere else, because on a '
            'bus nobody can ask them to do anything. But a journey of two hours each way '
            'is a different thing. That student came for a course. They got a course '
            'and a job, and nobody told them about the second one. Ten hours is not '
            'free time. It is the price on the other ticket.'],
        skill=('The number is the argument', [
            'When a text gives you a number twice, that number is the point.',
            'Ten hours a week is a fact. A large part of a week is the writer’s view.',
            'Watch for but and so. They mark the turns in a short argument.',
            'The last sentence often names what the whole text is really about.']),
        guided=[
            ('What do students tell you about their course?',
             ('the price', 'the hours of teaching', 'the journey', 'the timetable'), 1,
             'They tell you the hours of teaching.'),
            ('How many hours a week does a student an hour away spend on a bus?',
             ('two', 'five', 'ten', 'twenty'), 2,
             'Spends ten hours a week on a bus.'),
            ('When do classes start?',
             ('eight', 'half past eight', 'nine', 'half past nine'), 2,
             'Classes start at nine.'),
            ('When does the cheap travel card start to work?',
             ('eight', 'nine', 'half past nine', 'ten'), 2,
             'The cheap travel card does not work before half past nine.')],
        exam=[
            ('Who takes the dearest ticket?',
             ('rich students', 'students with the least money', 'teachers',
              'everybody'), 1,
             'The students with the least money take the dearest ticket.'),
            ('What does the writer call a bus?',
             ('a waste of time', 'a reading room with bad lights', 'a second home',
              'a classroom'), 1,
             'A bus is a reading room with bad lights.'),
            ('Why do some students read there and nowhere else?',
             ('the lights are good', 'nobody can ask them to do anything',
              'it is quiet', 'the journey is short'), 1,
             'Because on a bus nobody can ask them to do anything.'),
            ('What is a different thing?',
             ('a one-hour journey', 'a journey of two hours each way', 'a shuttle bus',
              'a travel card'), 1,
             'But a journey of two hours each way is a different thing.'),
            ('What did that student get?',
             ('a course only', 'a course plus a job', 'a cheap ticket', 'a free bus'), 1,
             'Got a course plus a job.'),
            ('What does the writer say about the second one?',
             ('it is easy', 'nobody told them about it', 'it pays well',
              'the college chose it'), 1,
             'Nobody told them about the second one.'),
            ('What is the passage really about?',
             ('bad buses', 'the hidden cost of a long journey', 'cheap tickets',
              'reading on a bus'), 1,
             'Every paragraph is about the time and money the journey takes.')]),

    l1=dict(
        sub='A journey you made',
        caption='Two students talk about a journey that went wrong',
        skill=('Past questions begin with did', [
            'Did at the front of a question tells you the whole thing is in the past.',
            'The verb after did goes back to its plain form: Did you take the bus?',
            'In the answer the verb is irregular again: Yes, I took the early one.',
            'Listen for the plain verb after did. It is not a mistake.']),
        warm=[
            ('Did you catch the early train?',
             ('No, I missed it.', 'At the barrier.', 'Two zones.', 'Yes, I am.'), 0,
             'Did you ...? takes a past answer: Yes, I did, or what happened.'),
            ('How did you get here?',
             ('I took the bus.', 'At nine.', 'Yes, I did.', 'In zone 2.'), 0,
             'How did you ...? asks for the way, in the past.'),
            ('Where did you leave your bicycle?',
             ('At the cycle rack.', 'Yesterday.', 'Yes, I did.', 'Two wheels.'), 0,
             'Where did you ...? asks for a place, in the past.')],
        script=[
            ('Woman', 'You came in late yesterday. What happened?'),
            ('Man', 'The shuttle bus broke down outside the station.'),
            ('Woman', 'Did you wait for another one?'),
            ('Man', 'No. The driver said forty minutes, so I walked to the station and '
                    'took the train.'),
            ('Woman', 'That was the right choice.'),
            ('Man', 'It was, until the barrier. My travel card did not open it.'),
            ('Woman', 'Was there any money on it?'),
            ('Man', 'There was. The card is for zones 1 and 2 and the barrier wanted zone '
                    '3. Nobody told me the station is in zone 3.'),
            ('Woman', 'So what did you do?'),
            ('Man', 'A member of staff came over and opened the gate. He was very good '
                    'about it.'),
            ('Woman', 'And the lecture?'),
            ('Man', 'I got there at half past ten. It finished at ten.')],
        items=[
            ('What happened to the shuttle bus?',
             ('it was late', 'it broke down', 'it was full', 'it did not come'), 1,
             'The shuttle bus broke down outside the station.'),
            ('How long was the wait for another bus?',
             ('fourteen minutes', 'forty minutes', 'four minutes', 'an hour'), 1,
             'The driver said forty minutes.'),
            ('What did the man do instead?',
             ('he waited', 'he walked to the station and took the train', 'he took a taxi',
              'he went home'), 1,
             'I walked to the station and took the train.'),
            ('Why did the barrier not open?',
             ('no money on the card', 'the card was for the wrong zone',
              'the card was lost', 'the barrier was broken'), 1,
             'The card is for zones 1 and 2 and the barrier wanted zone 3.'),
            ('Who helped him?',
             ('the driver', 'a member of staff', 'another student', 'nobody'), 1,
             'A member of staff came over and opened the gate.'),
            ('What time did he arrive?',
             ('ten', 'half past ten', 'eleven', 'half past nine'), 1,
             'I got there at half past ten.')]),

    l2=dict(
        sub='A ticket and a timetable',
        caption='An announcement at Riverside station',
        poster=['RIVERSIDE STATION', 'The 08.05 is 20 minutes late',
                'Platform change: 2, not 1'],
        skill=('Two changes in one announcement', [
            'A station announcement often changes a time and a platform at once.',
            'The platform number is said twice: the new one and the old one.',
            'Listen for instead of and not. They mark the change.',
            'Apologies at the end carry no information.']),
        warm=[
            ('Did the train leave on time?',
             ('No, it did not.', 'From platform 2.', 'Two zones.', 'Yes, it is.'), 0,
             'Did it ...? takes Yes, it did or No, it did not.'),
            ('Which platform is it?',
             ('Platform 2.', 'At ten past.', 'Yes, it is.', 'A single ticket.'), 0,
             'Which platform asks for a number.'),
            ('How late is it?',
             ('Twenty minutes.', 'At the barrier.', 'Yes, it is.', 'Zone 3.'), 0,
             'How late asks for an amount of time.')],
        script=[('Man', 'This is an announcement for passengers for Westbury. The 08.05 '
                        'service is twenty minutes late, because of a delay earlier this '
                        'morning. It leaves from platform 2 today, not from platform 1. '
                        'Passengers with a single ticket for the 08.05 can use the 08.35 '
                        'instead, at no extra cost. The shuttle bus to the college waits '
                        'for this train, so nobody misses the first class. The next service '
                        'after that one is the 09.05 from platform 1, and it runs as '
                        'normal today. We are sorry for the delay.')],
        items=[
            ('How late is the 08.05?',
             ('ten minutes', 'twenty minutes', 'thirty minutes', 'an hour'), 1,
             'The 08.05 service is twenty minutes late.'),
            ('Why is it late?',
             ('bad weather', 'a delay earlier this morning', 'no driver',
              'work on the line'), 1,
             'Because of a delay earlier this morning.'),
            ('Which platform does it leave from today?',
             ('platform 1', 'platform 2', 'platform 3', 'the same as always'), 1,
             'It leaves from platform 2 today, not from platform 1.'),
            ('What can passengers with a single ticket do?',
             ('get their money back', 'use the 08.35 at no extra cost', 'take the bus',
              'go to lost property'), 1,
             'Can use the 08.35 instead, at no extra cost.'),
            ('What does the shuttle bus do?',
             ('leaves on time', 'waits for this train', 'does not run', 'goes to Westbury'), 1,
             'The shuttle bus to the college waits for this train.')]),

    l3=dict(
        sub='The bus and the train',
        caption='A short talk about how students travel and what it costs',
        board=['THE JOURNEY', 'time + money + sleep',
               'the 9.30 problem', 'what colleges can change'],
        skill=('A talk with a problem and a fix', [
            'A talk about a problem usually ends with something somebody could do.',
            'Write down the problem in one line before the fix arrives.',
            'Numbers in this kind of talk are evidence, not detail.',
            'The question about the fix is usually the last one.']),
        warm=[
            ('Did many students come by bus last year?',
             ('Yes, they did.', 'At the station.', 'Two zones.', 'Yes, they are.'), 0,
             'Did they ...? takes Yes, they did.'),
            ('How much did the ticket cost?',
             ('Three pounds.', 'At nine.', 'Yes, it did.', 'From platform 2.'), 0,
             'How much did ...? asks for a price in the past.'),
            ('What can a college change?',
             ('The time of the first class.', 'Yesterday.', 'Yes, it can.',
              'Two hours.'), 0,
             'What can ...? asks about something possible.')],
        script=[('Woman', 'Last year we asked four hundred students one question: how long '
                          'is your journey to this college? The middle answer was fifty '
                          'minutes each way. That is over eight hours a week, and for '
                          'about a quarter of the students it went over two hours a day. '
                          'Then we asked about money, and we found something nobody '
                          'expected. The cheap travel card does not work before half past '
                          'nine, and our first class starts at nine. So we built a '
                          'timetable that charges our poorest students the full fare every '
                          'morning. We did not do that on purpose. But we did it, and we '
                          'can change it, because the start time of a first class is a thing '
                          'a college chooses. We are looking at it now, and we plan to tell you '
                          'what we decide before the next term starts.')],
        items=[
            ('How many students did they ask?',
             ('forty', 'four hundred', 'fifty', 'four thousand'), 1,
             'We asked four hundred students one question.'),
            ('What was the middle answer?',
             ('fifteen minutes', 'fifty minutes each way', 'two hours', 'eight hours'), 1,
             'The middle answer was fifty minutes each way.'),
            ('For about a quarter of the students the journey went over',
             ('one hour a day', 'two hours a day', 'three hours a day', 'eight hours a '
              'week'), 1,
             'For about a quarter of the students it went over two hours a day.'),
            ('What did they find about money?',
             ('students pay nothing', 'the cheap card does not work before half past nine',
              'the fare went down', 'the college pays the fare'), 1,
             'The cheap travel card does not work before half past nine.'),
            ('Who pays the full fare every morning?',
             ('the teachers', 'the poorest students', 'everybody', 'nobody'), 1,
             'A timetable that charges our poorest students the full fare every morning.'),
            ('What does the speaker say a college can choose?',
             ('the price of the ticket', 'the start time of a first class',
              'the bus route', 'the travel card'), 1,
             'The start time of a first class is a thing a college chooses.')]),

    sp=[
        dict(sub='The bus and the train',
             focus='irregular past forms said out loud',
             skill=('Say the pair, not the word', [
                 'Learn go–went, take–took, come–came as single items.',
                 'Under pressure the pair comes back together and the single word does not.',
                 'Many irregular pasts have a long vowel: came, took, wrote, drove.',
                 'Say the past with the time phrase: I went yesterday, not just I went.']),
             repeat=['I took the bus.', 'I left at seven.',
                     'I went to the station.',
                     'The train came on time and I found a seat.',
                     'I caught the early train and I got here before nine.',
                     'The driver said forty minutes, so I walked to the station.',
                     'Nobody told me the station is in a different zone from the college.'],
             theme='how you travel',
             qs=['First, how did you come here today?',
                 'Tell me about your journey. How long does it take?',
                 'Some people read on a bus and some people cannot. Which are you, and why?',
                 'Finally, is the transport in your town good? Say why or why not.'],
             frames=['Today I came ... . It took ... .',
                     'My journey is ... . First I ... , then I ... .',
                     'I ... read on a bus, because ... .',
                     'The transport in my town is ... , because ... .'],
             model=[(1, 'Today I came by bus. It took about forty minutes, because the '
                        'traffic was bad near the bridge.'),
                    (2, 'My journey is two buses. First I take the 14 to the station, then '
                        'I take the shuttle bus to the college.'),
                    (3, 'I cannot read on a bus, because the road makes me feel ill after '
                        'ten minutes. I listen to something instead.'),
                    (4, 'The transport in my town is not good, because everything goes to '
                        'the middle. To go two streets across you go all the way in and '
                        'out again.')],
             selfcheck=['I used the past form of every irregular verb',
                        'I put a time phrase with my past verbs',
                        'I gave a reason after my opinion']),
        dict(sub='A ticket and a timetable',
             focus='saying times, platforms and prices clearly',
             skill=('Numbers under pressure', [
                 'Say a train time in two parts: oh eight oh five.',
                 'Say a platform number on its own, then repeat it: platform two, two.',
                 'When you ask for a ticket, say the place first, then single or return.',
                 'Slow down for the number and speed up again after it.']),
             repeat=['A single to Westbury, please.', 'Which platform is it?',
                     'The train leaves at eight o five.',
                     'I bought a return ticket for six pounds.',
                     'My travel card did not work at the barrier.',
                     'The eight o five goes from platform two today, not platform one.',
                     'I asked for a student discount and the man wanted to see my card.'],
             theme='tickets and journeys',
             qs=['To start, do you buy a ticket every day or do you have a pass?',
                 'Tell me about a time a ticket or a card did not work.',
                 'Some cities make transport free for students. Is that a good idea?',
                 'Finally, what makes a station easy to use?'],
             frames=['I usually ... , because ... .',
                     'Once my ... did not work. I ... .',
                     'I think it is ... , because ... .',
                     'A station is easy when ... .'],
             model=[(1, 'I have a bus pass, because I take four buses a day and a ticket '
                        'for each one costs too much.'),
                    (2, 'Once my travel card did not work at the barrier. A member of staff '
                        'opened the gate, but I missed the train.'),
                    (3, 'I think it is a good idea. A student with no money for the fare stays '
                        'at home, and then the free place at the college is worth nothing.'),
                    (4, 'A station is easy when the platform numbers are big and the next '
                        'train is on a board at the entrance.')],
             selfcheck=['I said the times and numbers slowly and clearly',
                        'I used the past in my story',
                        'I answered all four questions']),
        dict(sub='A journey you made',
             focus='telling a story with a problem in it',
             skill=('A story needs a turn', [
                 'Start with the plan, then the problem, then what you did.',
                 'The problem is where the listener starts to listen.',
                 'Use but and so to mark the turns. They are enough.',
                 'End with what happened in the end, even if it was nothing.']),
             repeat=['I missed the bus.', 'The train was late.',
                     'I waited on the platform for an hour.',
                     'My bag was on the seat and the train left without it.',
                     'I went to lost property and they found it the next day.',
                     'The driver told us to get off and we stood in the rain.',
                     'Nobody knew how long the wait was, so I walked to the station '
                     'instead.'],
             theme='a journey you remember',
             qs=['First, tell me about a journey you remember.',
                 'What went wrong, or what was good about it?',
                 'Some people say the journey is part of the long break. Do you agree?',
                 'Finally, what do you always take with you on a long journey?'],
             frames=['Last ... I went to ... .',
                     'The problem was ... . So I ... .',
                     'I ... agree, because ... .',
                     'I always take ... , because ... .'],
             model=[(1, 'Last summer I went to the north of the country by train. It was '
                        'nine hours and I did it in one day.'),
                    (2, 'The problem was the seat. I booked one by the window and a family '
                        'sat in it, so I stood for two hours.'),
                    (3, 'I agree, but only on a good day. Nobody says that at midnight in '
                        'a station with no information.'),
                    (4, 'I always take water and something to read, because a delay with '
                        'nothing to do is the longest hour there is.')],
             selfcheck=['I told the story in order with a problem in the middle',
                        'I used at least five past verbs',
                        'I finished the story'])],

    w1=dict(
        sub='A journey you made',
        skill=('did takes the past away from the verb', [
            'Did you take the bus? The did carries the past; take stays plain.',
            'The same in the negative: I did not take the bus.',
            'Never say *Did you took* or *I did not took*. One past is enough.',
            'Question word first: Where did you go? What time did you leave?']),
        guided=[
            ('I took the early bus.', ['did', 'you', 'take', 'the early bus', 'again', 'today'],
             'Did you take the early bus again today?'),
            ('I went to the station.', ['where', 'did', 'you', 'go', 'in the end', 'after that'],
             'Where did you go in the end after that?'),
            ('The train left at eight.', ['what time', 'did', 'the train', 'leave', 'this',
                                          'morning'],
             'What time did the train leave this morning?')],
        exam=[
            ('The bus broke down near the station.', ['where', 'did', 'the bus', 'break',
                                                      'down', 'exactly'],
             'Where did the bus break down exactly?'),
            ('I waited for forty minutes.', ['how long', 'did', 'you', 'wait', 'for it', 'exactly'],
             'How long did you wait for it exactly?'),
            ('A member of staff opened the gate.', ['who', 'did', 'open', 'the gate',
                                                    'for you', 'in the end'],
             'Who did open the gate for you in the end?'),
            ('I got there at half past ten.', ['what time', 'did', 'you', 'get', 'there',
                                               'in the end'],
             'What time did you get there in the end?'),
            ('My card did not work.', ['did', 'your card', 'work', 'at the barrier',
                                       'again', 'yesterday'],
             'Did your card work at the barrier again yesterday?'),
            ('I came by train.', ['how', 'did', 'you', 'come', 'to college', 'today'],
             'How did you come to college today?'),
            ('She bought a return ticket.', ['what', 'did', 'she', 'buy', 'at the station',
                                            'this morning'],
             'What did she buy at the station this morning?')]),

    w2=dict(
        sub='A ticket and a timetable',
        to='help@northgatetrains.com',
        date='14/11/2025',
        subject='Delay on the 08.05, Monday 10 November',
        target=66,
        scenario=['On Monday 10 November you took the 08.05 train from Northgate.',
                  'It was forty minutes late and you missed a class. Write to the company.'],
        bullets=['say which train you took and when',
                 'say what happened and what it cost you',
                 'ask for the money back'],
        skill=('A past complaint needs past verbs', [
            'The whole email is in the past, except the request at the end.',
            'Name the train by its time and the day by its date. Both.',
            'Say the result for you: I missed a class. That is the cost.',
            'Ask for one thing: the money back, or a free ticket.']),
        model=['Dear Northgate Trains,', '',
               'My name is Ana Ruiz and I am a student at Riverside College.',
               'On Monday 10 November I took the 08.05 from Northgate to Riverside. The '
               'train left forty minutes late and I missed my first class.',
               'I bought a single ticket and I still have it.',
               'Is it possible to have the money back?', '',
               'Thank you,', 'Ana Ruiz'],
        notes=['The train and the date are both in the first sentence of the complaint.',
               'Every verb in the story is a past verb: took, left, missed, bought.',
               'The cost to the writer is named: a missed class.',
               'The request is one clear thing and it is the last line before the ending.'],
        frame=['# Start', 'Dear Northgate Trains,', '',
               '# Who you are', 'My name is ______________ and I am ______________ .', '',
               '# Which train and when — use the past',
               'On ______________ I took the ______________ from ______________ .', '',
               '# What happened and what it cost you',
               'The train ______________ and I ______________ .', '',
               '# Your request', 'Is it possible to ______________ ?', '',
               '# Finish', 'Thank you,', '______________']),

    w3=dict(
        sub='The bus and the train',
        prof='Dr Patel',
        target=75,
        question='Our first class starts at nine, and the cheap travel card does not work '
                 'before half past nine. Should the college move the first class later? '
                 'Give one reason.',
        posts=[('Mei', 'w', 'Yes. I paid the full fare every morning last term. That was '
                            'about four pounds a day, and nobody ever explained why the '
                            'class had to start at nine.'),
               ('Yusuf', 'm', 'No. A later start means a later finish, and I work in a shop '
                              'from five. A cheap ticket is no use to me if I lose the job '
                              'that pays for the rest.')],
        skill=('Two costs, not one', [
            'Mei counts money. Yusuf counts time. Say which cost is bigger for you.',
            'Use the past to give evidence: last term I paid, last year I missed.',
            'Then answer the question directly: yes or no.',
            'Seventy-five words is about seven short sentences.']),
        starters=['I agree with Mei, because ...',
                  'Yusuf is right that ...',
                  'Last term I ...',
                  'The college could ...'],
        model=['I agree with Mei. The college should move the first class to half past '
               'nine.',
               'Last term I paid the full fare four days a week, and that came to as much '
               'money as my books.',
               'Yusuf is right that a later finish is a real problem for students with a '
               'job in the evening.',
               'The college could move only the first class of the day and keep the rest '
               'where they are. Then both of us get what we need.'],
        model_words=81,
        frame=['# Your answer — yes or no, in the first sentence',
               'I agree with ______________ . The college should ______________ .', '',
               '# Your evidence — use the past',
               'Last ______________ I ______________ .', '',
               '# The other side',
               '______________ is right that ______________ .', '',
               '# Your own idea', 'The college could ______________ .']),

    gram=dict(
        title='past simple: irregular verbs · questions and negatives with did',
        headers=['Form', 'Example'],
        rows=[['irregular past', 'go → went, take → took, come → came'],
              ['same for every person', 'I went. She went. They went.'],
              ['question', 'Did you go? Where did she go?'],
              ['negative', 'I did not go. He did not take it.'],
              ['the verb after did', 'plain form only: did you take, not *did you took*'],
              ['short answer', 'Yes, I did. No, I did not.'],
              ['was and were are different', 'Was it late? (never *Did it was late?*)']],
        notes=['An irregular past has one form and it never changes for the person. That '
               'is the good news: fifty words and the whole past tense is yours.',
               'Did carries the past in a question or a negative, so the main verb goes '
               'back to its plain form. The past is marked once, never twice.',
               'Be is the exception again. Was and were make their own questions and '
               'negatives and never take did.'],
        watch='The two mistakes to watch are *Did you went?* and *I didn’t went*. '
              'Both put the past in twice. Once did appears, the other verb relaxes.',
        ex=[('Write the past of the verb.', [
            'I __________ (take) the early bus.',
            'She __________ (leave) at seven.',
            'We __________ (go) to the station.',
            'The train __________ (come) on time.',
            'He __________ (find) a seat by the window.',
            'They __________ (tell) us to get off.'],
            ['took', 'left', 'went', 'came', 'found', 'told']),
            ('Make a question with did.', [
                'You took the bus.', 'She left at seven.', 'They went by train.',
                'He found a seat.', 'You missed the class.', 'It broke down.'],
             ['Did you take the bus?', 'Did she leave at seven?', 'Did they go by train?',
              'Did he find a seat?', 'Did you miss the class?', 'Did it break down?']),
            ('Correct the mistake.', [
                'Did you went to the station?', 'I didn’t took the bus.',
                'Did it was late?', 'She did not came.'],
             ['Did you go to the station?', 'I did not take the bus.', 'Was it late?',
              'She did not come.'])],
        bas='Build a Sentence will give you did and a plain verb in the same set of tiles. '
            'That pair tells you two things at once: the sentence is a past question, and '
            'the verb does not change.'),

    sound=dict(
        title='The vowels inside the irregular pasts',
        intro='Most irregular past forms change the vowel in the middle and nothing else. '
              'Once you hear the vowel groups, fifty separate words become about six '
              'patterns, and the list stops being frightening.',
        rows=[('/ʊ/', ['took', 'stood', 'understood'],
               'Short, from the back of the mouth. The oo here is not long.'),
              ('/eɪ/', ['came', 'gave', 'made', 'paid'],
               'The sound of the word day.'),
              ('/ɔː/', ['bought', 'brought', 'thought', 'caught', 'taught'],
               'Five very common verbs, all with the same long sound and a silent gh.'),
              ('/əʊ/', ['wrote', 'drove', 'spoke', 'broke'],
               'The sound of the word go.'),
              ('/e/', ['went', 'left', 'kept', 'slept', 'met'],
               'Short, and all of these end in a hard consonant.'),
              ('silent letters', ['bought', 'caught', 'knew', 'wrote'],
               'The gh, the k and the w are written but never said.')],
        hear=[('Do you hear took or take?', 'took'),
              ('Do you hear came or come?', 'came'),
              ('Do you hear bought or brought?', 'brought'),
              ('Do you hear wrote or rode?', 'wrote'),
              ('Do you hear went or want?', 'went'),
              ('Do you hear left or lift?', 'left')],
        say=['Say the pairs: go–went, take–took, come–came, see–saw.',
             'Say the /ɔː/ group: bought, brought, thought, caught, taught.',
             'Say five sentences about yesterday, all with irregular verbs.',
             'Say a train time, a platform number and a price in one breath.']),

    builder=dict(
        title='Telling a story in order',
        rule='A story is easy to read when it goes forward in time and hard to read when '
             'it jumps. Put the time word at the front of the sentence, keep the order of '
             'events, and use then, after that and in the end to move the reader along.',
        pairs=[['I took the train. The bus broke down before that.',
                'The bus broke down, so I took the train.'],
               ['I missed the class. I left at seven.',
                'I left at seven, but I still missed the class.'],
               ['The barrier did not open. I had money on my card.',
                'I had money on my card, but the barrier did not open.'],
               ['At half past ten I arrived. The lecture finished at ten.',
                'The lecture finished at ten and I arrived at half past.'],
               ['I waited. Nobody came. I walked.',
                'I waited, and when nobody came, I walked.']],
        watch='One short story needs one tense. If the whole thing happened yesterday, '
              'every verb in it is a past verb, including the ones in the last sentence.',
        ex=[('The train was late. I left home early.',
             'I left home early, but the train was late.'),
            ('I went to lost property. My bag was on the train.',
             'My bag was on the train, so I went to lost property.'),
            ('A man opened the gate. My card did not work.',
             'My card did not work, so a man opened the gate.'),
            ('I arrive at ten. The class started at nine.',
             'I arrived at ten and the class started at nine.'),
            ('I waited for an hour and then I walked.',
             'yes — this one is already correct'),
            ('The driver said forty minutes. I did not wait.',
             'The driver said forty minutes, so I did not wait.')]),

    typing=dict(
        title='Typing a short story, and the apostrophe',
        intro='Past-tense writing needs one key you have not used much: the apostrophe, for '
              'didn’t, wasn’t and couldn’t. It sits next to the return key, '
              'under the right little finger.',
        keys='asdfghjkl',
        caption='The apostrophe is on the home row, on the right of the semicolon, under '
                'your right little finger. You never leave the home row for it, which is '
                'why it is worth learning properly now.',
        drill=['didn’t wasn’t couldn’t wouldn’t shouldn’t',
               'The bus broke down and I didn’t wait for another one.',
               'I took the train, but my card wasn’t valid for that zone.'],
        target=15),

    study=dict(
        title='Reading on a journey',
        intro='If your journey to college is an hour, you have ten hours a week that you '
              'are not using. That is more time than any class you take. A bus is not a '
              'good desk, but it is a very good reading room, for one reason: nobody there '
              'can ask you to do anything else.',
        steps=['Choose reading, not writing. A bus is bad for a pen and fine for a page.',
               'Take one thing only, and decide what it is before you leave the house.',
               'Read with a pencil and mark the words you do not know. Look them up at '
               'the other end, not on the bus.',
               'If you feel ill when you read on a bus, listen instead. An audio book or '
               'a recording of a lecture does the same job.',
               'Count it as study. It is study, and a week that includes it is two hours '
               'longer than a week that does not.'],
        tip='Put the thing you will read in your bag the night before. The decision is the '
            'hard part, and the night before is the only time you have the energy to make '
            'it.'),

    rev=dict(
        vocab=[('the act of going from one place to another', 'journey'),
               ('the part of a station where you wait', 'platform'),
               ('a wait that should not happen', 'delay'),
               ('the price of a journey', 'fare'),
               ('the way a bus or train goes', 'route'),
               ('a ticket there and back', 'return ticket'),
               ('the gate you put your ticket in', 'barrier'),
               ('the office that keeps things people leave', 'lost property'),
               ('somebody travelling in a bus or a train', 'passenger'),
               ('the bags you take on a journey', 'luggage'),
               ('with too many people in it', 'crowded'),
               ('a lower price because you are a student', 'student discount')],
        gram=[('I __________ (take) the early bus.', 'took'),
              ('She __________ (leave) at seven.', 'left'),
              ('We __________ (go) to the station.', 'went'),
              ('The train __________ (come) on time.', 'came'),
              ('__________ you take the bus?', 'Did'),
              ('I did not __________ (take) the train.', 'take'),
              ('__________ it late? (be)', 'Was'),
              ('Where __________ you go?', 'did')],
        mini=[
            ('The 07.05 from Northgate reaches Westbury at',
             ('07.19', '07.41', '08.11', '08.41'), 1,
             'The 07.05 column gives Westbury 07.41.'),
            ('The barrier did not open because',
             ('there was no money', 'the card was for the wrong zone', 'it was broken',
              'the card was lost'), 1,
             'The card is for zones 1 and 2 and the barrier wanted zone 3.'),
            ('In the talk, the middle journey was',
             ('fifteen minutes', 'fifty minutes each way', 'two hours', 'eight hours'), 1,
             'The middle answer was fifty minutes each way.'),
            ('Which sentence is correct?',
             ('Did you went to the station?', 'Did you go to the station?',
              'Did you going to the station?', 'You went to the station?'), 1,
             'Did carries the past, so the verb goes back to its plain form.'),
            ('Which sentence is correct?',
             ('Did it was late?', 'Was it late?', 'Did it late?', 'It was late?'), 1,
             'Be makes its own question and never takes did.'),
            ('The writer calls a bus',
             ('a waste of time', 'a reading room with bad lights', 'a second home',
              'a classroom'), 1,
             'A bus is a reading room with bad lights, in the passage.')]),

    tip='In the Listening section a journey is a string of numbers: a time, a platform, a '
        'price, a delay. Write each one down as a figure the moment you hear it. You will '
        'not remember which number the question wants until the question arrives, and by '
        'then the audio has gone.',
)
