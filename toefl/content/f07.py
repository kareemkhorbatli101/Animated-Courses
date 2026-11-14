# -*- coding: utf-8 -*-
"""Foundation Unit 7 · Weather, Seasons and the Year.

Grammar: past simple of be; regular -ed and its three sounds; past time phrases.
Question spine: Was ...? Were ...?
"""

UNIT = dict(
    n=7, vol='F', level='A2',
    title='Weather, Seasons and the Year',
    icons=('leaf', 'globe', 'clock'),
    subs=('A week of weather', 'The four seasons', 'A day it rained'),
    grammar='past simple of be · regular -ed · ago, last and in 1990',
    field='weather, seasons, the year',
    names=('Riverside', 'Ana', 'Ruiz', 'Yusuf', 'Mei', 'Patel', 'Oakfield', 'Dale',
           'Lena', 'Peru', 'Turkey', 'Asia', 'Earth'),
    opener_line='Three sub-topics, three cycles in every skill. From this unit on you can '
                'talk about the past, and half of the English language opens up.',
    candos=[
        'say where something or somebody was with was and were',
        'read a weather page and find one day in it',
        'understand a short text about why the seasons matter',
        'follow a conversation about a trip that went wrong',
        'tell a very short story about yesterday',
        'write an email about a day you missed'],

    core=[
        ('weather', 'rain, sun, wind and snow together'),
        ('rain', 'water that falls from the sky'),
        ('snow', 'soft white ice that falls in winter'),
        ('wind', 'air that moves fast'),
        ('sun', 'the light and heat in the sky by day'),
        ('cloud', 'the white or dark thing in the sky that holds rain'),
        ('sky', 'the space above you'),
        ('dry', 'with no water'),
        ('wet', 'with water on it'),
        ('warm', 'a little hot, and pleasant'),
        ('cool', 'a little cold, and pleasant'),
        ('season', 'spring, summer, autumn and winter'),
        ('spring', 'the season after winter'),
        ('summer', 'the hot season'),
        ('autumn', 'the season when the leaves fall'),
        ('winter', 'the cold season'),
        ('temperature', 'how hot or cold a thing is'),
        ('degree', 'the unit of temperature: twenty degrees'),
        ('forecast', 'what somebody says about the weather of tomorrow'),
        ('umbrella', 'you hold it over your head in the rain'),
        ('coat', 'the long warm thing you wear outside'),
        ('storm', 'very bad weather with wind and rain'),
        ('ice', 'water that is hard and cold'),
        ('sunny', 'with a lot of sun')],
    campus=[
        ('sports field', 'the big green space for games'),
        ('gym', 'the room with machines for exercise'),
        ('swimming pool', 'the big water for swimming'),
        ('changing room', 'the room where you put on your sports clothes'),
        ('match', 'a game between two teams'),
        ('team', 'the group of players on one side'),
        ('club', 'a group of students with the same interest'),
        ('society', 'a club for a subject or an idea'),
        ('membership', 'being a member of a club'),
        ('cancelled', 'stopped before it happens'),
        ('postponed', 'moved to a later day'),
        ('kit', 'the clothes and things you need for a game')],
    again=['weather', 'season', 'forecast', 'match', 'cancelled', 'postponed',
           'degree', 'storm'],
    vocab_talk=[
        'What was the weather like yesterday?',
        'Which season do you like, and why?',
        'Were you outside at the weekend?',
        'What do you do on a very wet day?'],

    r1=dict(
        sub='A week of weather',
        skill=('The -ed ending', [
            'A regular past verb ends in -ed: walk, walk-ed.',
            'A verb ending in -e takes only -d: close, close-d.',
            'A short verb with one vowel doubles the letter: stop, stopp-ed.',
            'A verb ending in a consonant and -y takes -ied: try, tr-ied.']),
        guided_text='Last week the weather chang-- every day. On Monday it rain-- all '
                    'morning. On Tuesday the wind stopp-- and the sun was warm. On '
                    'Wednesday the sky clear-- at four. On Thursday we all carr--- an '
                    'umbrella and it stayed dry all day.',
        guided_hint='1  chang--  →  ed  (changed)',
        guided=['ed', 'ed', 'ed', 'ed', 'ied'],
        exam_text='The storm last October was the worst one for years. The wind start-- on '
                  'Friday night and it continu-- until Sunday. Two old trees fall on the '
                  'sports field and the college clos-- the gym for a week. Nobody was hurt, '
                  'but the match on Saturday was cancell-- and the swimming pool fill-- '
                  'with water from the roof. On Monday the staff clean-- the field, '
                  'check-- the roof and open-- the gym again. The college post-- a notice and '
                  'everybody check-- it every hour.',
        exam=['ed', 'ed', 'ed', 'ed', 'ed', 'ed', 'ed', 'ed', 'ed', 'ed']),

    r2=dict(
        sub='The four seasons',
        skill=('A table of numbers is a text', [
            'A weather page is a table. Read the row and the column, like a timetable.',
            'The two numbers for a day are usually the high and the low.',
            'A symbol is a word: sun, cloud, rain. Learn the six common ones.',
            'A question about the coldest day wants the smallest low number.']),
        docs=[
            ('web', 'Riverside — weather last week', [
                '# Monday',
                'Rain all morning   high 12   low 7',
                '# Tuesday',
                'Sun and cloud   high 15   low 6',
                '# Wednesday',
                'Cloud, then clear at four   high 14   low 5',
                '# Thursday',
                'Rain in the afternoon   high 11   low 8',
                '# Friday',
                'Wind and rain   high 9   low 4',
                '# Note',
                '* These numbers are in degrees.',
                '* The forecast for next week is dry and cool.'], 'web'),
            ('notice', 'Sports Centre — after the storm', [
                '# Closed',
                '* The gym is closed until Monday.',
                '* The swimming pool is closed all week.',
                '# Open',
                '* The sports field is open again from Tuesday.',
                '* The changing rooms are open as normal.',
                '# Matches',
                '* Saturday’s match is cancelled, not postponed.',
                '* The club asks every member to check the noticeboard.'], 'notice')],
        guided=[
            ('Which day was the coldest?',
             ('Monday', 'Wednesday', 'Thursday', 'Friday'), 3,
             'Friday has the lowest low: 4 degrees.'),
            ('Which day was the warmest?',
             ('Monday', 'Tuesday', 'Wednesday', 'Friday'), 1,
             'Tuesday has the highest high: 15 degrees.'),
            ('What time was the sky clear on Wednesday?',
             ('at two', 'at four', 'at six', 'in the morning'), 1,
             'Cloud, then clear at four.'),
            ('What is the forecast for next week?',
             ('wet and warm', 'dry and cool', 'snow', 'storms'), 1,
             'The forecast for next week is dry and cool.')],
        exam=[
            ('On which days was there rain?',
             ('Monday and Tuesday', 'Monday, Thursday and Friday',
              'Tuesday and Wednesday', 'only Friday'), 1,
             'Rain all morning, rain in the afternoon, wind and rain.'),
            ('What was the high on Thursday?',
             ('8', '9', '11', '14'), 2,
             'Rain in the afternoon   high 11   low 8.'),
            ('When does the gym open again?',
             ('Tuesday', 'Monday', 'Saturday', 'next week'), 1,
             'The gym is closed until Monday.'),
            ('What about the swimming pool?',
             ('open on Tuesday', 'open on Monday', 'closed all week', 'open as normal'), 2,
             'The swimming pool is closed all week.'),
            ('Is Saturday’s match on a different day?',
             ('yes, next week', 'yes, on Sunday', 'no, it is cancelled',
              'no, it is on Tuesday'), 2,
             'Saturday’s match is cancelled, not postponed.'),
            ('What does the club ask members to do?',
             ('come to the gym', 'check the noticeboard', 'pay the membership',
              'bring a kit'), 1,
             'The club asks every member to check the noticeboard.')]),

    r3=dict(
        sub='The four seasons',
        title='Four Seasons, and the Places That Have Two',
        words=164,
        paras=[
            'Most people learn four seasons at school. They are spring, summer, autumn '
            'and winter. For a large part of the world that list is wrong.',
            'Near the middle of the Earth the temperature changes very little. What '
            'changes is the rain. Those countries have two seasons. One is wet and one is '
            'dry. The year turns on the first big storm. In parts of Asia the wet season '
            'arrives in the same month every year. The whole farming year waits for it, '
            'and so do the schools.',
            'This matters for a student in a new country. It is not only a fact about '
            'the world. A student from a two-season country is not ready for a dark '
            'afternoon at four in November. The cold is easy to plan for. You buy a coat. '
            'The dark is not easy at all, because nobody remembers to warn you about it. '
            'You can buy a coat in an afternoon. You cannot buy an extra hour of '
            'light.'],
        skill=('A fact, then the exception, then you', [
            'A text that starts with most people often turns on the second sentence.',
            'The exception is usually the real subject of the text.',
            'The last paragraph moves from the world to the reader.',
            'A question about why it matters points at the last paragraph.']),
        guided=[
            ('How many seasons do most people learn at school?',
             ('two', 'three', 'four', 'five'), 2,
             'Spring, summer, autumn and winter.'),
            ('Near the middle of the Earth, what changes very little?',
             ('the rain', 'the temperature', 'the wind', 'the dark'), 1,
             'The temperature changes very little across the year.'),
            ('What changes there instead?',
             ('the rain', 'the temperature', 'the sun', 'the month'), 0,
             'What changes is the rain.'),
            ('How many seasons do those countries have?',
             ('two', 'three', 'four', 'none'), 0,
             'Those countries have two seasons, a wet one and a dry one.')],
        exam=[
            ('What does the year turn on there?',
             ('the first cold day', 'the first big storm', 'the first dry month',
              'the shortest day'), 1,
             'The year turns on the first big storm.'),
            ('In parts of Asia the wet season arrives',
             ('at a different time every year', 'in the same month every year',
              'only in winter', 'twice a year'), 1,
             'The wet season arrives in the same month every year.'),
            ('What waits for it?',
             ('the schools', 'the whole farming year', 'the storms', 'the students'), 1,
             'The whole farming year waits for it.'),
            ('Who is not ready for a dark November afternoon?',
             ('a cook', 'a student from a two-season country', 'a teacher',
              'a student from a cold country'), 1,
             'A student from a two-season country is not ready for it.'),
            ('What is easy to plan for?',
             ('the dark', 'the cold', 'the rain', 'the storm'), 1,
             'The cold is easy to plan for.'),
            ('What is not easy to plan for?',
             ('the cold', 'the dark', 'the wind', 'the wet season'), 1,
             'The dark is not, because nobody remembers to warn you about it.'),
            ('What is the writer’s point?',
             ('Four seasons is the normal year.', 'The dark is the real problem, not the cold.', 'Asia has better weather.', 'Students should stay at home.'), 1,
             'The last paragraph is about the dark, not the cold.')]),

    l1=dict(
        sub='A day it rained',
        caption='Two students talk about a Saturday that was a waste of time',
        skill=('Was and were carry the story', [
            'A story about the past is held together by was and were.',
            'Listen for was not and were not. They often carry the point.',
            'The time words tell you the order: first, then, after that.',
            'A question about how somebody felt wants an adjective, not an event.']),
        warm=[
            ('Were you at the match on Saturday?',
             ('No, I was not.', 'At four.', 'In the gym.', 'Yes, I do.'), 0,
             'Were you ...? takes Yes, I was or No, I was not.'),
            ('Was the weather bad?',
             ('Yes, it was terrible.', 'In November.', 'Two teams.', 'At the pool.'), 0,
             'Was it ...? takes Yes, it was.'),
            ('Where were you yesterday?',
             ('At home all day.', 'Yes, I was.', 'It was cold.', 'Every week.'), 0,
             'Where asks for a place, and the answer is in the past.')],
        script=[
            ('Man', 'Were you at the sports field on Saturday?'),
            ('Woman', 'I was, and it was a mistake.'),
            ('Man', 'The match was cancelled, was it not?'),
            ('Woman', 'Yes, but nobody posted it until eleven. We were all there at ten.'),
            ('Man', 'In that rain?'),
            ('Woman', 'In that rain. My coat was wet after five minutes and my shoes were '
                      'worse.'),
            ('Man', 'Why was it cancelled? The field was all right on Friday.'),
            ('Woman', 'It was the wind, not the rain. Two trees were down at the far end.'),
            ('Man', 'And the notice?'),
            ('Woman', 'The notice was on the club page, not on the board. Nobody looked '
                      'there.'),
            ('Man', 'So the weather was bad and the club was worse.')],
        items=[
            ('Where was the woman on Saturday?',
             ('at home', 'at the sports field', 'in the gym', 'at the pool'), 1,
             'Were you at the sports field on Saturday? I was.'),
            ('When was the notice posted?',
             ('at ten', 'at eleven', 'on Friday', 'on Sunday'), 1,
             'Nobody posted it until eleven.'),
            ('What time were the students there?',
             ('at nine', 'at ten', 'at eleven', 'at twelve'), 1,
             'We were all there at ten.'),
            ('Why was the match cancelled?',
             ('the rain', 'the wind', 'no players', 'the field was wet'), 1,
             'It was the wind, not the rain.'),
            ('What was at the far end of the field?',
             ('two trees down', 'water', 'a notice', 'the changing rooms'), 0,
             'Two trees were down at the far end.'),
            ('Where was the notice?',
             ('on the board', 'on the club page', 'in the gym', 'in an email'), 1,
             'The notice was on the club page, not on the board.')]),

    l2=dict(
        sub='A week of weather',
        caption='A weather announcement for the college',
        poster=['WEATHER WARNING', 'Storm Thursday night',
                'Sports field closed Friday'],
        skill=('A warning has an action in it', [
            'A weather warning says what is coming and what people must do.',
            'The action is often the last sentence.',
            'Listen for the day and the part of the day: Thursday night.',
            'A question about what is open wants the list, not the warning.']),
        warm=[
            ('Was there a storm last night?',
             ('Yes, there was.', 'In the gym.', 'Two matches.', 'At the pool.'), 0,
             'Was there ...? takes Yes, there was.'),
            ('Were the roads bad this morning?',
             ('They were terrible.', 'At eight.', 'In October.', 'Yes, I do.'), 0,
             'Were they ...? takes a past answer.'),
            ('Is the gym open today?',
             ('No, it is not.', 'Last night.', 'Two degrees.', 'Yes, it was.'), 0,
             'Is it ...? is a present question, so the answer is present.')],
        script=[('Woman', 'Good afternoon. This is a weather announcement for everybody on '
                          'the Riverside campus. A storm arrives on Thursday night, with '
                          'strong wind and heavy rain until Friday morning. The sports '
                          'field and the car park behind Block C are closed all day on '
                          'Friday. The gym, the library and all teaching buildings are '
                          'open as normal. If you come by bus, please start early on '
                          'Friday. The college posts any change on the main page '
                          'by seven in the morning.')],
        items=[
            ('When does the storm arrive?',
             ('Wednesday night', 'Thursday night', 'Friday night', 'Saturday morning'), 1,
             'A storm arrives on Thursday night.'),
            ('What is closed on Friday?',
             ('the gym', 'the library', 'the sports field and the car park',
              'all buildings'), 2,
             'The sports field and the car park behind Block C are closed all day.'),
            ('What is open as normal?',
             ('the sports field', 'the car park', 'the gym and the library', 'nothing'), 2,
             'The gym, the library and all teaching buildings are open as normal.'),
            ('What does the speaker ask students to do?',
             ('come early by bus', 'use the car park', 'check the gym',
              'stay at home'), 0,
             'If you come by bus, please start early on Friday.'),
            ('When does the college post any change?',
             ('by seven in the morning', 'by nine', 'at two', 'on Thursday night'), 0,
             'The college posts any change on the main page by seven in the morning.')]),

    l3=dict(
        sub='The four seasons',
        caption='A short talk about the year and how people plan it',
        board=['THE YEAR', 'four seasons, or two?',
               'what people plan around', 'the dark, not the cold'],
        skill=('Follow the argument, not the examples', [
            'A talk with two or three examples is usually making one point.',
            'Write the point in your own words after the first example.',
            'If the next example fits your point, you have it right.',
            'The question about the talk as a whole wants the point.']),
        warm=[
            ('Was the summer hot last year?',
             ('It was very hot.', 'In two seasons.', 'At the pool.', 'Yes, I do.'), 0,
             'Was it ...? takes a past answer.'),
            ('Were you here last winter?',
             ('No, I was not.', 'In the gym.', 'Four degrees.', 'Yes, it is.'), 0,
             'Were you ...? takes Yes, I was or No, I was not.'),
            ('How many seasons are there in your country?',
             ('Two.', 'At four.', 'Yes, there are.', 'Last October.'), 0,
             'How many asks for a number.')],
        script=[('Man', 'Last week I asked this class a simple question: how many seasons '
                        'are there? Almost everybody answered four, and about a third of '
                        'this room is from a place with two. That is what school does '
                        'to a fact. Now, the important part. People do not plan their year '
                        'around the temperature. They plan it around the thing that stops '
                        'them working. In a cold country that is snow and ice. In a wet '
                        'country it is the rain. And in a cold country in December it '
                        'is not the cold at all. It is the dark at four in the afternoon, '
                        'and that one surprises people every single year. So when you plan your term, '
                        'look at the clock and the dark, not only at the '
                        'temperature outside.')],
        items=[
            ('What was the speaker’s question to the class?',
             ('about the weather', 'how many seasons there are', 'about November',
              'about the dark'), 1,
             'How many seasons are there?'),
            ('What was the answer of almost everybody?',
             ('two', 'three', 'four', 'five'), 2,
             'Almost everybody answered four.'),
            ('How many of the class are from a two-season place?',
             ('nobody', 'about a third', 'about half', 'everybody'), 1,
             'About a third of this room is from a place with two.'),
            ('What do people plan their year around?',
             ('the temperature', 'the thing that stops them working', 'the school year',
              'the seasons'), 1,
             'They plan it around the thing that stops them working.'),
            ('In a cold country that is',
             ('rain', 'snow and ice', 'the dark', 'wind'), 1,
             'In a cold country that is snow and ice.'),
            ('What surprises people every year in December?',
             ('the cold', 'the dark at four', 'the snow', 'the rain'), 1,
             'It is the dark at four in the afternoon.')]),

    sp=[
        dict(sub='A week of weather',
             focus='the three sounds of the -ed ending',
             skill=('/t/, /d/ and /ɪd/', [
                 'After a hard sound the -ed is /t/: stopped, worked, washed.',
                 'After a soft sound or a vowel it is /d/: rained, cleaned, played.',
                 'After t or d it is a whole syllable /ɪd/: wanted, needed, started.',
                 'Only the third one adds a beat to the word. The other two do not.']),
             repeat=['It rained all day.', 'The wind stopped at four.',
                     'We watched the match in the rain.',
                     'The college closed the gym last week.',
                     'I waited an hour and the bus never arrived.',
                     'The storm started on Friday and continued all weekend.',
                     'They cancelled the match and nobody posted a notice about it.'],
             theme='the weather',
             qs=['First, what was the weather like yesterday?',
                 'Tell me about the weather in your country in summer.',
                 'Some people say the weather changes how they feel. Do you agree, and why?',
                 'Finally, what is the worst weather you remember?'],
             frames=['Yesterday it was ... .',
                     'In summer it is ... . The temperature is about ... .',
                     'I ... agree, because ... .',
                     'The worst weather was ... . It was ... .'],
             model=[(1, 'Yesterday it was cold and wet all morning, and then the sun was out '
                        'out at about three.'),
                    (2, 'In summer it is very hot and dry in my country. The temperature is '
                        'about thirty-five degrees in August.'),
                    (3, 'I agree. On a dark wet morning I work slowly, and on a bright one '
                        'I finish the same work in half the time.'),
                    (4, 'The worst weather was a storm two years ago. The wind was so '
                        'strong that it moved a car in our street.')],
             selfcheck=['I used the right -ed sound for each verb',
                        'I used was and were for the past',
                        'I gave a reason after my opinion']),
        dict(sub='The four seasons',
             focus='was and were, strong and weak',
             skill=('Weak was, strong was not', [
                 'In a statement was is weak and fast: it was cold.',
                 'In a short answer it is strong: Yes, it WAS.',
                 'Was not and were not are always strong. That is where the meaning is.',
                 'Listen for the strong one. It usually carries the point of the sentence.']),
             repeat=['It was very cold.', 'The days were short.',
                     'Last winter was long.',
                     'There was snow on the ground for a week.',
                     'The temperature was under five degrees every morning.',
                     'The summer was dry and everybody was worried about water.',
                     'We were all tired of the dark by the end of January.'],
             theme='seasons and the year',
             qs=['To start, which season do you like most?',
                 'Tell me about one season in your country.',
                 'Some people move to another country for the weather. Is that a good '
                 'reason, do you think?',
                 'Finally, how was last year for you? Say one thing about it.'],
             frames=['I like ... , because ... .',
                     'In ... the weather is ... and people ... .',
                     'I think it is ... , because ... .',
                     'Last year was ... for me, because ... .'],
             model=[(1, 'I like autumn, because it is cool enough to walk and the light in '
                        'the afternoon is beautiful.'),
                    (2, 'In winter the weather in my country is wet, not cold. People carry '
                        'an umbrella from November until March.'),
                    (3, 'I think it is a good reason for some people. A long dark winter is '
                        'hard, and nobody should pretend it is not.'),
                    (4, 'Last year was a busy year for me, because I started this course '
                        'and I moved to a new city in the same month.')],
             selfcheck=['I used was and were in every answer',
                        'I made was not and were not strong',
                        'I answered all four questions']),
        dict(sub='A day it rained',
             focus='telling a very short story',
             skill=('Three sentences make a story', [
                 'What happened, what you did, how it ended. That is enough.',
                 'Put the time first: Last Saturday, Two years ago.',
                 'Use and then to move forward. It is simple and it works.',
                 'Finish the story. An unfinished story sounds like a mistake.']),
             repeat=['Last Saturday it rained.', 'The match was cancelled.',
                     'I waited at the field for an hour.',
                     'Nobody posted a notice until eleven.',
                     'My coat was wet and my shoes were worse.',
                     'I walked home and I changed all my clothes.',
                     'Two years ago a storm closed our school for three whole days.'],
             theme='a day you remember',
             qs=['First, tell me about a day when the weather changed your plan.',
                 'What was your plan instead?',
                 'Some people say bad weather makes a better story. Do you agree?',
                 'Finally, are you ready for bad weather, or does it always surprise you?'],
             frames=['Last ... it ... . My plan was ... .',
                     'Instead I ... .',
                     'I ... agree, because ... .',
                     'I am ... ready, because ... .'],
             model=[(1, 'Last summer it rained for a whole weekend. My plan was a trip to '
                        'the sea with two friends.'),
                    (2, 'Instead we stayed in the flat, cooked a big meal and watched three '
                        'films. It was not the plan, but it was a good day.'),
                    (3, 'I agree. Nobody tells a story about a day when everything worked.'),
                    (4, 'I am never ready. I own an umbrella and it lives at home, in the '
                        'box by the door, every single time.')],
             selfcheck=['I told the story in order, with a time at the front',
                        'I finished every sentence and the story',
                        'I used at least three -ed verbs'])],

    w1=dict(
        sub='A day it rained',
        skill=('Was and were in a question', [
            'Was or were goes in front of the person: Were you there?',
            'The question word goes first: Where were you?',
            'There was and there were move the same way: Was there a notice?',
            'Never put did with was. *Did you were* is wrong.']),
        guided=[
            ('I was at the field.', ['where', 'were', 'you', 'last', 'Saturday'],
             'Where were you last Saturday?'),
            ('The match was cancelled.', ['was', 'the match', 'cancelled', 'again', 'yesterday'],
             'Was the match cancelled again yesterday?'),
            ('It was very cold.', ['how', 'cold', 'was', 'it', 'yesterday'],
             'How cold was it yesterday?')],
        exam=[
            ('There was a storm on Friday.', ['was', 'there', 'a storm', 'here', 'on Friday'],
             'Was there a storm here on Friday?'),
            ('The students were at the field at ten.', ['what time', 'were', 'the students',
                                                        'there', 'exactly'],
             'What time were the students there exactly?'),
            ('The notice was on the club page.', ['where', 'was', 'the notice', 'posted', 'exactly'],
             'Where was the notice posted exactly?'),
            ('Two trees were down.', ['how many', 'trees', 'were', 'down', 'exactly'],
             'How many trees were down exactly?'),
            ('It rained all morning.', ['was', 'there', 'rain', 'here', 'all morning'],
             'Was there rain here all morning?'),
            ('The gym was closed.', ['was', 'the gym', 'closed', 'again', 'last week'],
             'Was the gym closed again last week?'),
            ('I was at home.', ['were', 'you', 'at home', 'here', 'all day'],
             'Were you at home here all day?')]),

    w2=dict(
        sub='A day it rained',
        to='sports@riverside.edu',
        date='07/11/2025',
        subject='Saturday’s match',
        target=62,
        scenario=['You were at the sports field on Saturday at ten. The match was '
                  'cancelled.',
                  'Nobody posted a notice until eleven. Write to the Sports Centre.'],
        bullets=['say where you were and when',
                 'say what the problem with the notice was',
                 'ask them to send a message next time'],
        skill=('Complain about the system, not the person', [
            'Say what happened, with times. Times make a complaint real.',
            'Do not say somebody was lazy. Say the notice was late.',
            'Ask for one change, and make it easy to do.',
            'A short, calm email about a system gets the system changed.']),
        model=['Dear Sports Centre,', '',
               'My name is Ana Ruiz and I am a member of the football club.',
               'I was at the sports field at ten on Saturday with about twenty other '
               'students. The match was cancelled, but the notice was not on the club page '
               'until eleven.',
               'Is it possible to send a message to members next time?', '',
               'Thank you,', 'Ana Ruiz'],
        notes=['Both times are there: ten and eleven. The gap is the whole complaint.',
               'Twenty other students shows this was not only one person’s problem.',
               'Nobody is blamed. The notice was late, not a person.',
               'The request is one easy change, so it can be said yes to.'],
        frame=['# Start', 'Dear Sports Centre,', '',
               '# Who you are', 'My name is ______________ and I am ______________ .', '',
               '# Where you were and when — use was or were',
               'I was at ______________ at ______________ on ______________ .', '',
               '# The problem — give both times',
               'The match was ______________ , but the notice was not ______________ '
               'until ______________ .', '',
               '# Your request', 'Is it possible to ______________ ?', '',
               '# Finish', 'Thank you,', '______________']),

    w3=dict(
        sub='The four seasons',
        prof='Dr Patel',
        target=70,
        question='Does the weather change how well people work and study? Say what you '
                 'think, and give one reason.',
        posts=[('Mei', 'w', 'Of course it does. Last January it was dark at four every day '
                            'and I was tired all month. In June I worked twice as well on '
                            'the same subject.'),
               ('Yusuf', 'm', 'I am not sure. People blame the weather, but the real reason '
                              'is usually the time of year. January is after a long break and '
                              'June is before one.')],
        skill=('Two reasons can both be true', [
            'Mei names the weather. Yusuf names the time of year. Both can be right.',
            'Say which one you think is stronger, and why.',
            'Use the past: last winter, in June, two years ago.',
            'Seventy words is six or seven short sentences.']),
        starters=['I agree with Mei, because ...',
                  'Yusuf is right that ...',
                  'Last winter I ...',
                  'In my opinion the real reason is ...'],
        model=['I agree with Mei, but Yusuf is right about the time of year as well.',
               'Last winter I was slow in January and I was slow again in February, and '
               'there was no long break in February at all.',
               'In my opinion the real reason is the dark, not the cold and not the '
               'time of year. A dark afternoon moves my evening two hours, and then my '
               'work moves with it.'],
        model_words=72,
        frame=['# Who you agree with',
               'I agree with ______________ , but ______________ is also right about '
               '______________ .', '',
               '# Your own past — use was, were or an -ed verb',
               'Last ______________ I ______________ .', '',
               '# Your reason',
               'In my opinion the real reason is ______________ , because ______________ .']),

    gram=dict(
        title='past simple of be · regular -ed · ago, last and in 1990',
        headers=['Form', 'Example'],
        rows=[['I / he / she / it was', 'I was at home. It was cold.'],
              ['you / we / they were', 'We were at the field. They were late.'],
              ['negative', 'I was not there. They were not ready.'],
              ['question', 'Was it cold? Were you there?'],
              ['there was / there were', 'There was a storm. There were two trees down.'],
              ['regular past', 'rain → rained, stop → stopped, carry → carried'],
              ['time phrases', 'yesterday, last week, two years ago, in 1990']],
        notes=['Be is the one verb with two past forms. Everything else has one form for '
               'every person: I walked, she walked, they walked.',
               'Ago counts back from now and goes after the amount: two years ago. Last '
               'goes in front: last year. In goes with a year or a month: in 1990.',
               'The -ed ending is written the same way every time but said three ways. The '
               'spelling is the rule; the sound is a habit.'],
        watch='Never say *I was go* or *I did was*. Was and were are complete verbs on '
              'their own, and they never take did.',
        ex=[('Write was or were.', [
            'I __________ at home all day.',
            'The students __________ at the field at ten.',
            'It __________ very cold on Friday.',
            'There __________ two trees down.',
            '__________ you at the match?',
            'The gym __________ not open.'],
            ['was', 'were', 'was', 'were', 'Were', 'was']),
            ('Write the past of the verb.', [
                'It __________ (rain) all morning.',
                'The wind __________ (stop) at four.',
                'We __________ (carry) an umbrella.',
                'The college __________ (close) the gym.',
                'Nobody __________ (post) a notice.',
                'I __________ (wait) for an hour.'],
             ['rained', 'stopped', 'carried', 'closed', 'posted', 'waited']),
            ('Write ago, last or in.', [
                'two years __________', '__________ winter', '__________ 1990',
                'three days __________'],
             ['ago', 'last', 'in', 'ago'])],
        bas='From this unit Build a Sentence can ask you for a past question, and the order '
            'is the one you already know: question word, then was or were, then the person. '
            'Nothing else moves.'),

    sound=dict(
        title='The three sounds of -ed',
        intro='Every regular past verb in English ends in the same four letters and comes '
              'out of the mouth in one of three ways. Two of them add nothing to the length '
              'of the word. The third adds a whole beat, and that is the one that changes '
              'what you hear.',
        rows=[('/t/', ['stopped', 'worked', 'washed', 'watched'],
               'After a hard sound: p, k, f, s, sh, ch. The word does not get longer.'),
              ('/d/', ['rained', 'cleaned', 'played', 'closed'],
               'After a soft sound or a vowel. Also no extra beat.'),
              ('/ɪd/', ['wanted', 'needed', 'started', 'posted'],
               'Only after t or d. Here the word gains a whole syllable: start, star-ted.'),
              ('was / were', ['it was cold', 'they were late'],
               'Both are weak and fast in a statement. Do not say them strongly.'),
              ('wasn’t / weren’t', ['it wasn’t cold', 'they weren’t late'],
               'The negative is always strong, and it is where the meaning sits.'),
              ('silent letters', ['walked', 'talked', 'climbed'],
               'The l in walk and talk is silent, and so is the b in climb.')],
        hear=[('Is the ending /t/ or /d/? — stopped', '/t/'),
              ('Is the ending /t/ or /d/? — rained', '/d/'),
              ('How many syllables? — started', 'two'),
              ('How many syllables? — watched', 'one'),
              ('Do you hear was or wasn’t?', 'wasn’t'),
              ('Do you hear were or weren’t?', 'were')],
        say=['Say these with no extra beat: stopped, worked, washed, watched, played.',
             'Say these with an extra beat: wanted, needed, started, posted.',
             'Say: it was cold / it wasn’t cold. Make the second one strong.',
             'Tell the story of yesterday in five sentences, all in the past.']),

    builder=dict(
        title='Keeping one tense through a paragraph',
        rule='A paragraph about the past stays in the past from the first word to the last. '
             'The commonest writing mistake at this level is a story that starts in the '
             'past and slides into the present halfway through, usually at the exciting '
             'part.',
        pairs=[['Last Saturday it rained and the match is cancelled.',
                'Last Saturday it rained and the match was cancelled.'],
               ['I waited an hour. Then I go home.', 'I waited an hour. Then I went home.'],
               ['The wind was strong and trees fall on the field.',
                'The wind was strong and trees fell on the field.'],
               ['There was a notice but nobody sees it.',
                'There was a notice but nobody saw it.'],
               ['It was cold, so I am wearing my coat.',
                'It was cold, so I wore my coat.']],
        watch='Check the verbs at the end of a paragraph, not at the start. The slide into '
              'the present almost always happens in the last two sentences, when you are '
              'writing fastest.',
        ex=[('Last winter was long and it is very dark.',
             'Last winter was long and it was very dark.'),
            ('I waited at the field and then I walk home.',
             'I waited at the field and then I walked home.'),
            ('The storm started on Friday and continues all weekend.',
             'The storm started on Friday and continued all weekend.'),
            ('There were two trees down and the field is closed.',
             'There were two trees down and the field was closed.'),
            ('It rained all day and we stayed at home.',
             'yes — this one is already correct'),
            ('The match was cancelled but nobody posts a notice.',
             'The match was cancelled but nobody posted a notice.')]),

    typing=dict(
        title='Typing without looking, and fixing as you go',
        intro='By now you can reach every key. This week the work is not speed but the '
              'habit of not looking down, and of fixing a mistake with one key instead of '
              'with the mouse.',
        keys='qwertyuiopasdfghjkl',
        caption='The backspace key is at the top right of the keyboard, above the return '
                'key. Reach it with the little finger of your right hand without moving '
                'your other fingers off the home row. That one habit is worth a minute in '
                'every writing task.',
        drill=['Last Saturday it rained and the match was cancelled.',
               'The storm started on Friday night and continued until Sunday.',
               'I waited at the sports field for an hour and nobody came.'],
        target=14),

    study=dict(
        title='Learning the irregular verbs before you need them',
        intro='Next week every verb goes irregular, and the list looks frightening. It is '
              'not. About fifty verbs cover almost everything you will ever read in this '
              'book, and the fifty fall into small groups that rhyme.',
        steps=['Learn them in sound groups, not in alphabetical order: think–thought, '
               'bring–brought, buy–bought, teach–taught.',
               'Another group: speak–spoke, break–broke, write–wrote, '
               'drive–drove.',
               'Another: come–came, become–became, run–ran, swim–swam.',
               'Five a day for ten days is the whole list, and the groups mean you are '
               'really learning twelve things, not fifty.',
               'Use the table at the back of this book. The third column is for Volume 1; '
               'ignore it for now.'],
        tip='Say the two forms together, always, and never the first one alone: '
            'go–went, see–saw, take–took. A verb learned as a pair comes '
            'back as a pair, and the past is the half you need under pressure.'),

    rev=dict(
        vocab=[('what somebody says about the weather of tomorrow', 'forecast'),
               ('very bad weather with wind and rain', 'storm'),
               ('the season when the leaves fall', 'autumn'),
               ('you hold it over your head in the rain', 'umbrella'),
               ('how hot or cold a thing is', 'temperature'),
               ('a game between two teams', 'match'),
               ('stopped before it happens', 'cancelled'),
               ('moved to a later day', 'postponed'),
               ('the room with machines for exercise', 'gym'),
               ('the clothes you need for a game', 'kit'),
               ('water that is hard and cold', 'ice'),
               ('with a lot of sun', 'sunny')],
        gram=[('I __________ at home all day.', 'was'),
              ('The students __________ at the field.', 'were'),
              ('__________ you at the match?', 'Were'),
              ('It __________ (rain) all morning.', 'rained'),
              ('The wind __________ (stop) at four.', 'stopped'),
              ('We __________ (carry) an umbrella.', 'carried'),
              ('I __________ (wait) for an hour.', 'waited'),
              ('two years __________', 'ago')],
        mini=[
            ('The coldest day last week was',
             ('Monday', 'Wednesday', 'Thursday', 'Friday'), 3,
             'Friday has the lowest low: 4 degrees.'),
            ('The match was cancelled because of',
             ('the rain', 'the wind', 'no players', 'the pool'), 1,
             'It was the wind, not the rain, in the conversation.'),
            ('Near the middle of the Earth the thing that changes is',
             ('the temperature', 'the rain', 'the dark', 'the wind'), 1,
             'What changes is the rain, in the passage.'),
            ('Which sentence is correct?',
             ('I was go home.', 'I am was at home.', 'I was at home.',
              'I were at home.'), 2,
             'Was is a complete verb and it never takes did.'),
            ('Which is the past of carry?',
             ('carryed', 'carried', 'carryd', 'carrying'), 1,
             'A consonant plus -y becomes -ied.'),
            ('In the talk, what surprises people in December is',
             ('the cold', 'the dark', 'the snow', 'the rain'), 1,
             'It is the dark at four in the afternoon.')]),

    tip='In Speaking, a past question needs a past answer, and the marker is listening for '
        'it. Have one small true story ready about last year — a journey, a day, a '
        'change — and practise it until the verbs are automatic. One rehearsed story '
        'carries you through a dozen different questions.',
)

# ---- the two academic cycles (field: Water, Air and Weather) --------------
from .fx07 import EXTRA as _X, SP_EXTRA as _SP   # noqa: E402
UNIT.update(_X)
UNIT['sp'] = list(UNIT['sp'])[:3] + list(_SP)
