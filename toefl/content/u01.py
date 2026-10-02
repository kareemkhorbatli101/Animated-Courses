# -*- coding: utf-8 -*-
"""Unit 1 · American History — the reference unit."""

UNIT = dict(
    n=1, vol=1, title='American History',
    icons=('clock', 'city', 'book'),
    subs=('The first railroads', 'A museum visit', 'Why cities grew where they did'),
    grammar='Past simple and present perfect · direct question forms',
    field='time, period, change',
    opener_line='Three sub-topics, three cycles in every skill. Everything in this unit comes '
                'back in the review on page 29, and again in Practice Test 1.',

    candos=[
        'complete missing word endings in a paragraph about the past',
        'find one fact quickly in a notice, a web page or an email',
        'understand the main idea of a short academic passage about history',
        'follow a conversation in which one speaker has got something wrong',
        'ask and answer questions about the past without preparing',
        'write an email asking for something, and a discussion post with a reason',
    ],

    # ---------------------------------------------------------------- words --
    acad=[
        ('period', 'a length of time'),
        ('previous', 'coming before this one'),
        ('prior', 'before something else'),
        ('subsequent', 'coming after'),
        ('decade', 'ten years'),
        ('establish', 'to start something that will last'),
        ('expand', 'to get bigger'),
        ('found', 'to start a town, company or school'),
        ('revolution', 'a complete change in the way something is done'),
        ('transform', 'to change something completely'),
        ('emerge', 'to appear for the first time'),
        ('decline', 'to become smaller or weaker'),
        ('significant', 'important enough to notice'),
        ('major', 'very large or very important'),
        ('federal', 'belonging to the whole country, not one state'),
        ('document', 'a piece of writing that gives information'),
        ('evident', 'easy to see or understand'),
        ('region', 'a large area of a country'),
        ('construct', 'to build'),
        ('transport', 'to carry people or goods from place to place'),
        ('route', 'the way from one place to another'),
        ('migrate', 'to move to another place to live'),
        ('initial', 'first'),
        ('eventual', 'happening in the end, after a long time'),
    ],
    campus=[
        ('museum', 'a building where old or important things are shown'),
        ('exhibition', 'a collection of things shown to the public'),
        ('guided tour', 'a walk round a place with someone who explains it'),
        ('ticket desk', 'the place where you buy or collect tickets'),
        ('opening hours', 'the times a place is open'),
        ('gift shop', 'a small shop selling presents and souvenirs'),
        ('lecture hall', 'a large room where a professor teaches'),
        ('field trip', 'a visit away from the school as part of a course'),
        ('coach', 'a large bus for a long journey'),
        ('deadline', 'the last time something can be done'),
        ('timetable', 'a list of times when things happen'),
        ('noticeboard', 'a board where announcements are put up'),
    ],
    vocab_talk=[
        'Which decade of your life do you remember best, and why?',
        'Name one thing in your town that has been transformed in the last ten years.',
        'Has the population of your region expanded or declined? How do you know?',
        'What was the initial reason your family came to live where they live now?',
    ],
    again=['period', 'establish', 'transform', 'route', 'migrate', 'significant', 'decade', 'revolution'],

    # ------------------------------------------------- Reading 1 · the gaps --
    r1=dict(
        sub='The first railroads',
        skill=('Use the sentence around the gap',
               ['Read the whole sentence before you touch the gap. The grammar of the '
                'sentence usually tells you the ending.',
                'Count the dashes. Each one is one missing letter, so -ed, -ing and -ly '
                'are easy to spot.',
                'Say the first part out loud in your head. You usually already know the word.',
                'Never write a whole word. You are completing one, not replacing it.']),
        guided_text='Before 1830 there were no railroads in the United States. Travel was slow '
                    'and expen----. The first line opened in Baltimore and carried only coal and '
                    'pass------. Within twenty ye--- the network reached the Mississippi. '
                    'Engineers lear--- quickly, and each new line was built fas--- than the one '
                    'before it.',
        guided_hint='1  expen----  →  sive  (expensive)',
        guided=['sive', 'engers', 'ars', 'ned', 'ter'],
        exam_text='In the early 1800s most people in North America travelled by horse or by '
                  'boat. A journey from New York to Chicago could take three we---. The first '
                  'rail----- changed that completely. By 1860 more than thirty thou---- miles of '
                  'track had been laid, and the same journey took two da--. Towns on a line grew '
                  'quic---, while towns a few miles away stayed sm---. The railroad also carried '
                  'letters, newspapers and fresh fo-- for the first time. People beg-- to measure '
                  'distance in hours instead of days, and after 1869 a traveller could cross the '
                  'whole cont----- without leaving the train. The country suddenly felt sma----.',
        exam=['eks', 'roads', 'sand', 'ys', 'kly', 'all', 'od', 'an', 'inent', 'ller'],
    ),

    # ---------------------------------------------- Reading 2 · daily life --
    r2=dict(
        sub='A museum visit',
        skill=('Read for one fact, not for the whole text',
               ['Read the question first. You are looking for one piece of information.',
                'Find the heading that would hold it, then read only under that heading.',
                'The answer is always printed on the page. Never reason beyond the text.',
                'Numbers, times and prices are the most common answers — check them twice.']),
        docs=[
            ('notice', 'Riverside Museum of American History', [
                '# Opening hours',
                'Tuesday to Friday   10.00 – 17.00',
                'Saturday and Sunday   10.00 – 18.00',
                'Closed Mondays and 1 January',
                '# Tickets',
                '* Adults $12   Students $6   Under 12s free',
                '* Student tickets are only sold with a valid student card',
                '# This month',
                '* The Railroad Age — special exhibition, Gallery 3',
                '* Free guided tour, Saturdays at 11.00, from the ticket desk',
            ], 'web'),
            ('email', 'students-history@riverside.edu', 'tours@riversidemuseum.org',
             '14/10/2025', 'Group booking confirmed — 18 October', [
                 'Dear Ms Alvarez,',
                 '',
                 'Your group booking for Saturday 18 October is confirmed: twenty-two',
                 'students at the student rate. The two members of staff come free.',
                 '',
                 'Please arrive at the group entrance on Mill Street by 9.45. The main',
                 'doors do not open until 10.00. Any bag larger than a small rucksack',
                 'must be left in the cloakroom.',
                 '',
                 'The guided tour of The Railroad Age lasts fifty minutes.',
                 '',
                 'Best wishes,   Daniel Okafor, Visits Office',
             ]),
        ],
        guided=[
            ('On which day is the museum closed?',
             ('Tuesday', 'Monday', 'Sunday', 'Saturday'), 1,
             'Closed Mondays is printed under Opening hours. The other three days all appear with times.'),
            ('How much does a student pay?',
             ('Nothing', '$6', '$12', '$18'), 1,
             '$6 is the student price. $12 is the adult price and under-12s are the ones who pay nothing.'),
            ('What must a student bring to get the cheaper ticket?',
             ('A passport', 'A printed email', 'A student card', 'Cash'), 2,
             'Student tickets are only sold with a valid student card. Nothing is said about passports, '
             'printing or cash.'),
            ('Where does the free guided tour start?',
             ('In Gallery 3', 'At the ticket desk', 'At the group entrance', 'On Mill Street'), 1,
             'The notice says from the ticket desk. Gallery 3 is where the exhibition is, not where the tour starts.'),
        ],
        exam=[
            ('What is the main purpose of the email?',
             ('To cancel a visit', 'To ask for payment', 'To change a date', 'To confirm a booking'), 3,
             'The subject line and the first sentence both say confirmed. No payment, cancellation or '
             'date change is mentioned.'),
            ('How many people has the school been charged for?',
             ('2', '20', '22', '24'), 2,
             'Twenty-two students pay the student rate; the two staff come free, so the school is charged for 22.'),
            ('Why must the group arrive at 9.45?',
             ('The tour starts then', 'The main doors open later', 'The cloakroom closes at 10.00',
              'The ticket desk is busy'), 1,
             'They use the group entrance because the main doors do not open until 10.00. The tour is at 11.00.'),
            ('What can be inferred about Ms Alvarez?',
             ('She works at the museum', 'She is a student', 'She is bringing the students',
              'She has visited before'), 2,
             'The email is addressed to a school address and confirms her group booking, so she is the one '
             'bringing the group. Nothing says she has been before.'),
            ('What should a student with a large bag do?',
             ('Leave it at school', 'Carry it in the gallery', 'Give it to a member of staff',
              'Leave it in the cloakroom'), 3,
             'Any bag larger than a small rucksack must be left in the cloakroom.'),
            ('The group visits on Saturday 18 October. Which of these is true that day?',
             ('The museum is closed', 'The museum shuts at 17.00', 'A free guided tour is offered',
              'Student tickets are not sold'), 2,
             'The free tour runs on Saturdays at 11.00. Saturday closing is 18.00, not 17.00, and the '
             'museum closes only on Mondays.'),
        ],
    ),

    # ------------------------------------------- Reading 3 · academic text --
    r3=dict(
        sub='Why cities grew where they did',
        title='Why Cities Grew Where They Did',
        words=265,
        paras=[
            'Look at a map of the United States in 1800 and almost every large town sits on '
            'water. New York, Boston, Philadelphia and Charleston were ports. Further inland, '
            'St Louis and Cincinnati stood on great rivers. This was not an accident. Before '
            'the railroad, moving a ton of goods thirty miles over land cost about as much as '
            'shipping it across the Atlantic. A town without water transport could feed itself, '
            'but it could not trade, and a town that could not trade did not grow.',
            'The railroad broke that rule. After 1840 a line could be laid almost anywhere, and '
            'towns began to appear in places with no river at all. Chicago is the clearest '
            'example. It had a small harbour and a great deal of swamp, and in 1840 fewer than '
            'five thousand people lived there. Thirty years later it was the meeting point of '
            'eleven railroad companies and the fourth largest city in the country. What had '
            'changed was not the land but the cost of crossing it.',
            'Geography still mattered, though. Railroads were cheapest to build on flat ground, '
            'so lines followed valleys and plains, and towns followed the lines. Where a line '
            'crossed a river, or where two companies met, a city grew. Historians call these '
            'places break-in-bulk points: somewhere goods have to be moved from one kind of '
            'transport to another. Wherever goods stop, people stay. The pattern is very old. '
            'Only the reason for stopping had changed.',
        ],
        skill=('Find the topic sentence first',
               ['In an academic passage the first sentence of a paragraph usually carries its '
                'point. Read those three sentences before anything else.',
                'A main-idea question is answered by what all three paragraphs share, never by '
                'one interesting detail.',
                'A vocabulary question gives you the sentence. Replace the word with each '
                'option and see which one still makes sense.',
                'A "why does the author mention X" question asks for the purpose of the example, '
                'not for the example itself.']),
        guided=[
            ('What is the passage mainly about?',
             ('The building of the first railroads', 'Why towns grew where they did',
              'The history of Chicago', 'Transport costs in 1800'), 1,
             'All three paragraphs answer the same question: what decides where a city appears. '
             'Chicago and transport costs are the evidence, not the subject.'),
            ('The word "accident" in paragraph 1 is closest in meaning to',
             ('crash', 'chance', 'mistake', 'plan'), 1,
             'Not an accident here means not by chance. The author goes on to give the reason, '
             'which rules out crash and mistake.'),
            ('According to paragraph 1, why did a town need water transport?',
             ('To get drinking water', 'To defend itself', 'To trade', 'To grow food'), 2,
             'The text says a town without it could feed itself but could not trade. Food is what '
             'such a town could still do.'),
            ('Why does the author mention Chicago?',
             ('To give an example of a city that grew without a river',
              'To compare it with New York', 'To explain why swamps are useful',
              'To describe its harbour'), 0,
             'Chicago is introduced as the clearest example of the new rule in paragraph 2.'),
        ],
        exam=[
            ('According to paragraph 2, what became possible after 1840?',
             ('Rivers became deeper', 'Lines could be built away from water',
              'Towns stopped growing', 'Harbours were closed'), 1,
             'A line could be laid almost anywhere — that is the whole point of the paragraph.'),
            ('In 1840 Chicago had',
             ('eleven railroad companies', 'the fourth largest population',
              'fewer than five thousand people', 'no harbour at all'), 2,
             'The eleven companies and the fourth place come thirty years later, and it did have a '
             'small harbour.'),
            ('All of the following are true about railroads EXCEPT:',
             ('They were cheapest to build on flat ground', 'They followed valleys and plains',
              'They could only be built beside rivers', 'They changed the cost of moving goods'), 2,
             'The passage says the opposite: after 1840 a line could be laid almost anywhere. The '
             'other three are all stated.'),
            ('The word "pattern" in paragraph 3 refers to',
             ('cities growing where goods have to stop', 'the shape of a railway line',
              'the design of a harbour', 'the map of 1800'), 0,
             'The sentence before it says wherever goods stop, people stay. That is the pattern '
             'the author calls very old.'),
            ('What can be inferred about break-in-bulk points?',
             ('They are always on rivers', 'They existed before the railroad',
              'They were built by one company', 'They are no longer important'), 1,
             'The pattern is very old and only the reason for stopping changed, so such places '
             'existed when the transport was water.'),
            ('What does the author suggest about geography?',
             ('It stopped mattering after 1840', 'It decided where lines could cheaply go',
              'It explains why Chicago failed', 'It only affected ports'), 1,
             'Paragraph 3 opens with geography still mattered and then says why: flat ground was '
             'cheapest. Chicago did not fail.'),
            ('Which sentence best states the main idea of paragraph 3?',
             ('Railroads were expensive to build', 'Cities grew where transport had to change',
              'Valleys are flatter than hills', 'Two companies met in Chicago'), 1,
             'Everything in the paragraph leads to the break-in-bulk point: the place where goods '
             'change transport.'),
        ],
    ),

    # ---------------------------------------------- Listening 1 · conversation
    l1=dict(
        sub='A museum visit',
        caption='Two students check the date of the museum trip',
        skill=('Listen for the problem',
               ['A TOEFL conversation almost always contains one problem. Find it and half '
                'the questions answer themselves.',
                'Listen for words that correct: actually, no, that’s the thing, I thought.',
                'An idiom question asks what the speaker means, not what the words mean.',
                'The audio plays once, so write while you listen, not afterwards.']),
        warm=[
            ('Woman: Are you going to the museum on Saturday?',
             ('Yes, it’s on Mill Street.', 'I think so, if I finish my essay.',
              'No, it was very interesting.', 'It costs six dollars.'), 1,
             'The question is about a plan, so only a plan answers it.'),
            ('Man: How long does the tour last?',
             ('At eleven o’clock.', 'In Gallery 3.', 'About fifty minutes.',
              'Twenty-two students.'), 2,
             'How long wants a length of time. At eleven answers when.'),
            ('Woman: I thought the trip was next week.',
             ('No, it’s this Saturday.', 'Yes, I enjoyed it.', 'The tickets are free.',
              'It’s near the station.'), 0,
             'The woman has stated a wrong belief; the natural reply corrects it.'),
        ],
        script=[
            ('Man', 'Did you get the email about the museum trip?'),
            ('Woman', 'Which one? I’ve had three from the department this week.'),
            ('Man', 'The one from the Visits Office. The Railroad Age exhibition.'),
            ('Woman', 'Oh — that’s the twenty-fifth, isn’t it? I’ve put it in my calendar.'),
            ('Man', 'That’s the thing. It’s the eighteenth. They moved it when the gallery '
                    'changed the dates.'),
            ('Woman', 'Seriously? I’m working on the eighteenth.'),
            ('Man', 'Can you swap your shift?'),
            ('Woman', 'Maybe. What time do we have to be there?'),
            ('Man', 'Quarter to ten, at the group entrance on Mill Street. Not the main doors — '
                    'they don’t open till ten.'),
            ('Woman', 'And the tour?'),
            ('Man', 'Fifty minutes, then we’re free in the galleries until lunch.'),
            ('Woman', 'Right. I’ll ask Sam to cover for me. I’m not missing it twice.'),
            ('Man', 'Twice?'),
            ('Woman', 'I had tickets last year and I was ill.'),
        ],
        items=[
            ('What is the man’s main point?',
             ('The trip has been cancelled', 'The woman has the wrong date',
              'The exhibition is closed', 'The email was never sent'), 1,
             'He corrects her: it’s the eighteenth, not the twenty-fifth.'),
            ('Why was the date changed?',
             ('The students asked for it', 'The tour was too long',
              'The gallery changed its dates', 'The group was too large'), 2,
             'They moved it when the gallery changed the dates — the man says so directly.'),
            ('What does the woman mean when she says "I’m not missing it twice"?',
             ('She has missed the exhibition before', 'She has already seen it twice',
              'She will go on both days', 'She does not want to go'), 0,
             'Her last line explains it: she had tickets last year and was ill.'),
            ('What will the woman probably do next?',
             ('Write to the Visits Office', 'Buy a ticket online',
              'Cancel her shift without asking', 'Ask a colleague to work for her'), 3,
             'I’ll ask Sam to cover for me. She is asking, not cancelling.'),
            ('Why does the man mention the main doors?',
             ('They are on Mill Street', 'They open later than the group entrance',
              'They are closed on Saturdays', 'They lead to Gallery 3'), 1,
             'He warns her not to go there because they don’t open till ten.'),
            ('What can be inferred about the woman?',
             ('She has a part-time job', 'She has never been to the museum',
              'She does not read her email', 'She is not interested in history'), 0,
             'She is working on the eighteenth and talks about swapping a shift and someone '
             'covering for her.'),
        ],
    ),

    # --------------------------------------------- Listening 2 · announcement
    l2=dict(
        sub='A museum visit',
        caption='An announcement about Saturday’s trip',
        poster=['Coach now leaves from the LIBRARY CAR PARK',
                'New departure time: 9.15, not 9.30',
                'Bring your student card'],
        skill=('Catch time, place and change',
               ['An announcement exists because something has changed. Listen for the change '
                'and for what it replaces.',
                'Write the old detail and the new one side by side. Questions test the pair.',
                'Reasons follow the word because, so, or due to — they are almost always tested.',
                'A final instruction (email us, bring this) is a question in waiting.']),
        warm=[
            ('Man: Where does the coach leave from?',
             ('At nine fifteen.', 'From the library car park.', 'It takes an hour.',
              'Yes, it does.'), 1,
             'Where wants a place. At nine fifteen answers when.'),
            ('Woman: Do I need to bring anything?',
             ('It’s on Saturday.', 'About forty people.', 'Your student card.',
              'No, it’s not included.'), 2,
             'The only option that names a thing to bring.'),
            ('Man: Is lunch included?',
             ('In the café.', 'At one o’clock.', 'Yes, the coach leaves at nine.',
              'No, but there’s a café in the museum.'), 3,
             'A yes/no question needs a yes or a no, and this one adds the useful part.'),
        ],
        script=[
            ('Man', 'Attention everyone. A short announcement about Saturday’s museum trip. '
                    'Two things have changed. First, the coach now leaves from the library car '
                    'park, not from the main gate — the main gate is closed for building work. '
                    'Second, the coach leaves at nine fifteen, not nine thirty, because of the '
                    'roadworks on Mill Street. Please be there by nine o’clock. Bring your '
                    'student card; without it you pay the full adult price and the department '
                    'cannot refund it. Lunch is not included, but there is a café in the museum '
                    'and several places nearby. If you can no longer come, email the Visits '
                    'Office today, so that we can offer your place to someone else.'),
        ],
        items=[
            ('What is the main purpose of the announcement?',
             ('To cancel the trip', 'To describe the exhibition', 'To announce two changes',
              'To sell tickets'), 2,
             'The speaker says two things have changed and then gives both.'),
            ('Why has the departure point changed?',
             ('The car park is bigger', 'The main gate is closed for building work',
              'The library is nearer', 'The coach is too long'), 1,
             'Stated directly, with because built into the sentence.'),
            ('Why does the coach leave earlier?',
             ('The museum opens early', 'More students are coming', 'The tour is longer',
              'There are roadworks'), 3,
             'Because of the roadworks on Mill Street.'),
            ('What happens to a student who forgets a student card?',
             ('They cannot come', 'They pay the adult price', 'They get a refund later',
              'They wait outside'), 1,
             'Without it you pay the full adult price — and the refund is specifically ruled out.'),
            ('What should a student do who can no longer come?',
             ('Tell a friend', 'Go to the car park anyway', 'Email the Visits Office today',
              'Pay for the place'), 2,
             'The last sentence gives the instruction and the reason for it.'),
        ],
    ),

    # ------------------------------------------- Listening 3 · academic talk --
    l3=dict(
        sub='Why cities grew where they did',
        caption='A talk on westward settlement',
        board=['1803   Louisiana Purchase', '1825   Erie Canal',
               '1862   Homestead Act', '1869   First line across the continent'],
        skill=('Follow the signposts to the main idea',
               ['A talk tells you its plan. Today I want to…, What I want you to notice is… '
                '— the main idea lives in those sentences.',
                'Dates on a board are a list, and a list is almost always in an order the '
                'speaker will explain.',
                'The last thirty seconds usually carry the point. Do not stop listening.',
                'A "why does the speaker mention" question wants the purpose of an example.']),
        warm=[
            ('Woman: Did you understand the part about the canal?',
             ('It was built in 1825.', 'Not really — can you explain it?',
              'Yes, it’s on the board.', 'The lecture is on Tuesday.'), 1,
             'The natural reply to a did-you-understand question is whether you did.'),
            ('Man: What was the Homestead Act?',
             ('In 1862.', 'A law that gave away farmland.', 'Yes, it was important.',
              'The professor mentioned it.'), 1,
             'What was it? wants a definition, not a date or a yes.'),
            ('Woman: I missed the last point.',
             ('I can lend you my notes.', 'It starts at two.', 'No, I don’t think so.',
              'The board is behind you.'), 0,
             'The only reply that offers help with a missed point.'),
        ],
        script=[
            ('Professor', 'Last week we looked at why cities grew where they did. Today I want '
                          'to take the same question west. Between 1800 and 1900 the population '
                          'of the United States moved roughly a thousand miles westward, and it '
                          'did not move evenly. It moved in jumps, and every jump follows a '
                          'change in transport or a change in law. Look at the dates on the '
                          'board. The Louisiana Purchase in 1803 doubled the land available, but '
                          'almost nobody moved for twenty years, because getting there cost more '
                          'than most families had. The Erie Canal changed that in 1825: suddenly '
                          'a farmer in Ohio could sell wheat in New York. The Homestead Act of '
                          '1862 offered a hundred and sixty acres free to anyone who would farm '
                          'it for five years — and that is law, not transport. Then in 1869 the '
                          'first line crossed the whole continent. What I want you to notice is '
                          'the order: land, then cheap transport, then free land, then fast '
                          'transport. People did not move because the land was empty. They moved '
                          'when the cost of moving fell below what they expected to earn.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('The United States doubled in size in 1803',
              'People moved west when the cost of moving fell',
              'The Erie Canal was the most important change',
              'Farmers in Ohio grew wheat for New York'), 1,
             'The last sentence states it, and every example leads there.'),
            ('Why does the speaker mention the Louisiana Purchase?',
             ('To show that more land alone did not move people',
              'To explain how canals were paid for',
              'To give the date the railroad began',
              'To describe the size of Ohio'), 0,
             'The point is that it doubled the land but almost nobody moved for twenty years.'),
            ('According to the speaker, what did the Erie Canal change?',
             ('The price of land in New York', 'The law about free farmland',
              'What a farmer could sell and where', 'The route of the first railroad'), 2,
             'Suddenly a farmer in Ohio could sell wheat in New York.'),
            ('Which of the dates on the board is a change in law, not transport?',
             ('1803', '1825', '1862', '1869'), 2,
             'The speaker says it outright: that is law, not transport.'),
            ('What does the speaker want students to notice?',
             ('The size of the country', 'The order of the four changes',
              'The number of farmers', 'The cost of a canal boat'), 1,
             'What I want you to notice is the order, followed by the four stages in sequence.'),
            ('What will the speaker most likely discuss next?',
             ('What people expected to earn in the west',
              'How canals were built', 'The population of New York in 1800',
              'Why the Louisiana Purchase was cheap'), 0,
             'The talk ends on expected earnings, which is the one idea introduced and not yet '
             'explained.'),
        ],
    ),

    # ----------------------------------------------------------- Speaking ----
    sp=[
        dict(sub='The first railroads', focus='past -ed endings (/t/, /d/ and /ɪd/)',
             skill=('Say the whole sentence',
                    ['Half a sentence scores lower than a slow, complete one. Finish it.',
                     'There is no preparation time, so start speaking as the beep ends.',
                     '-ed has three sounds: worked /t/, opened /d/, started /ɪd/.',
                     'If you lose a word, say the sentence again from the beginning.']),
             repeat=['The first line opened in 1830.',
                     'Engineers worked quickly and learned fast.',
                     'The track reached the river in the spring.',
                     'Travellers waited at the station for the morning train.',
                     'The company constructed a bridge across the valley last year.',
                     'Before the railroad arrived, the journey had taken almost three weeks.',
                     'By 1860 more than thirty thousand miles of track had been laid across the country.'],
             theme='a place you have visited',
             qs=['Thanks for talking to me. First, what is a place you have visited that you '
                 'remember well?',
                 'Places affect people in different ways. What did you feel when you were there, '
                 'and why do you think you reacted in that way?',
                 'Some people say that visiting a place teaches you more than reading about it. '
                 'Do you agree? Why or why not?',
                 'One last question. Should schools spend money on trips to museums and historical '
                 'sites, or is that money better spent in the classroom? Why?'],
             model=[(1, 'I visited the old castle in my city last summer. I remember it because '
                        'I had walked past it for years and I had never been inside.'),
                    (3, 'I agree, mostly. When I read about the castle I only learned dates, but '
                        'when I stood in the kitchen I understood how small it really was.')],
             selfcheck=['I started speaking straight away, with no long pause',
                        'I finished every sentence I began',
                        'I gave a reason after my opinion']),
        dict(sub='A museum visit', focus='keeping going without preparation',
             skill=('Buy yourself half a second, not five',
                    ['Short fillers are fine: Well, I think… / That’s a good question.',
                     'Never stop in the middle. Finish the sentence even if it is not the one '
                     'you planned.',
                     'Say your opinion first, then because. The reason is what earns the band.',
                     'Thirty seconds of clear B1 beats ten seconds of hesitant C1.']),
             repeat=['The museum opens at ten.',
                     'The guided tour lasts fifty minutes.',
                     'We met at the ticket desk on Saturday morning.',
                     'The exhibition in Gallery 3 is about the railroad age.',
                     'Students pay six dollars if they bring a valid student card.',
                     'The coach will leave from the library car park at quarter past nine.',
                     'If you can no longer come, please email the Visits Office before Friday afternoon.'],
             theme='the past in your country',
             qs=['To start with, is there a museum in the town where you grew up?',
                 'People feel differently about old buildings. How do you react when an old '
                 'building in your town is pulled down, and why?',
                 'Some people argue that a country should spend money protecting its past. Do you '
                 'agree that this is a good use of public money? Why or why not?',
                 'Finally, do you think young people in your country know enough about their own '
                 'history? What makes you say that?'],
             model=[(2, 'Honestly, it makes me sad, because once a building is gone you cannot '
                        'get it back. A new one can always be built somewhere else.'),
                    (4, 'I don’t think they do, no. We studied dates at school but nobody '
                        'explained why any of it mattered to us.')],
             selfcheck=['I used a short filler, not a long silence',
                        'I answered the actual question, not a similar one',
                        'I gave an example in at least two answers']),
        dict(sub='Why cities grew where they did', focus='academic register',
             skill=('Sound like the reading passage',
                    ['Use the unit’s academic words when you speak: significant, expand, '
                     'decline, establish.',
                     'Signal your structure: One reason is… / On the other hand… / '
                     'That is why…',
                     'The fourth question is always the most abstract. Answer it with a reason '
                     'and one example.',
                     'Mark yourself with the band descriptors below before you listen back.']),
             repeat=['Most early towns were established on rivers.',
                     'Transport costs declined significantly after 1840.',
                     'The region expanded quickly once the line was constructed.',
                     'Historians describe these places as break-in-bulk points.',
                     'Geography determined where a railroad could be built cheaply.',
                     'Wherever goods had to be moved from one kind of transport to another, a town grew.',
                     'The initial reason for the shift was not the land itself but the eventual cost of crossing it.'],
             theme='what students should learn about history',
             qs=['First, which period of history did you study most at school?',
                 'People remember school history in very different ways. How did you feel about '
                 'those lessons, and why do you think you felt that way?',
                 'Some people believe history should be taught through local examples rather than '
                 'national ones. Do you agree? Why or why not?',
                 'Last question. Should history be a compulsory subject until the age of eighteen? '
                 'Why or why not?'],
             model=[(3, 'I agree with that. One reason is that local history is visible: you can '
                        'walk to it. When something is in front of you, you remember it.'),
                    (4, 'I don’t think it should be compulsory that long. On the other hand, '
                        'every student should finish school knowing how to check a source.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I signalled my structure (one reason is…, on the other hand…)',
                        'My fourth answer gave an opinion and a reason, not just an opinion']),
    ],

    # ------------------------------------------------------------ Writing ----
    w1=dict(
        sub='The first railroads',
        skill=('Read the prompt sentence first',
               ['The sentence above the boxes fixes the tense and the person. Match it.',
                'Almost every item makes a question. Find the question word first.',
                'A direct question inverts: did you see…? An indirect one does not: do you '
                'know whether you saw…',
                'Use every tile exactly once. If one is left over, the order is wrong.']),
        guided=[
            ('I went to the Railroad Age exhibition yesterday.',
             ['did', 'you', 'what', 'see', 'there'],
             'What did you see there?'),
            ('The first line opened a long time ago.',
             ['the', 'when', 'did', 'line', 'first', 'open'],
             'When did the first line open?'),
            ('I have never travelled by train in America.',
             ['you', 'have', 'ever', 'by', 'travelled', 'train'],
             'Have you ever travelled by train?'),
        ],
        exam=[
            ('The museum changed its opening hours last month.',
             ['they', 'why', 'did', 'the', 'change', 'hours'],
             'Why did they change the hours?'),
            ('Thirty thousand miles of track were laid by 1860.',
             ['how', 'much', 'was', 'track', 'laid'],
             'How much track was laid?'),
            ('Chicago grew faster than any other city.',
             ['city', 'which', 'grew', 'fastest'],
             'Which city grew fastest?'),
            ('I have already booked the tickets.',
             ['you', 'have', 'the', 'booked', 'tickets', 'already'],
             'Have you already booked the tickets?'),
            ('The engineers who built the bridge came from Scotland.',
             ['the', 'engineers', 'who', 'the', 'built', 'bridge', 'came', 'from', 'Scotland'],
             'The engineers who built the bridge came from Scotland.'),
            ('We arrived at the group entrance at quarter to ten.',
             ['time', 'what', 'did', 'arrive', 'you'],
             'What time did you arrive?'),
            ('The exhibition has been open since September.',
             ['long', 'how', 'has', 'been', 'it', 'open'],
             'How long has it been open?'),
        ],
    ),
    w2=dict(
        sub='A museum visit',
        to='j.whitfield@riverside.edu',
        date='15/10/2025',
        subject='Museum trip on 18 October',
        scenario=[
            'Your history professor, Dr Whitfield, mentioned in class that she would like to see '
            'The Railroad Age exhibition. Your group has two free places on the coach for '
            'Saturday 18 October.',
            'Write an email to Dr Whitfield inviting her to come with the group.',
        ],
        bullets=['Tell her why you think she would enjoy the exhibition.',
                 'Give her the practical details she needs.',
                 'Ask whether she would like one of the free places.'],
        skill=('Answer all three bullet points',
               ['The three bullets are the mark scheme. One short paragraph each is enough.',
                'Open and close properly: Dear Dr Whitfield … Best wishes, + your name.',
                'Seven minutes is about 110–140 words. Do not plan for longer.',
                'Ask your question as a real question, with a question mark.']),
        model=[
            'Dear Dr Whitfield,',
            'You said in Tuesday’s lecture that you wanted to see The Railroad Age exhibition '
            'at the Riverside Museum. Our group is going on Saturday 18 October, and I thought of '
            'you at once, because the exhibition covers exactly the period we have been studying.',
            'The coach leaves from the library car park at 9.15 and we have to be at the group '
            'entrance on Mill Street by 9.45. There is a free guided tour at eleven which lasts '
            'fifty minutes, and we are free in the galleries afterwards. Lunch is not included.',
            'We have two free places for staff. Would you like one of them? If you let me know by '
            'Thursday, I can add your name to the list.',
            'Best wishes,',
            'Leyla Haddad',
        ],
        notes=['Each of the three bullets gets its own paragraph — the reader can see all '
               'three at a glance.',
               'The reason is specific (the period we have been studying), not general (it is '
               'interesting).',
               'The practical paragraph gives time, place and length, which is what an invitation '
               'actually needs.',
               'The question is a real question, and it has a deadline attached to it.'],
    ),
    w3=dict(
        sub='Why cities grew where they did',
        prof='Dr Whitfield',
        question='Many museums in Europe and North America hold objects that were taken from '
                 'other countries during the colonial period. Some people argue that these '
                 'objects should be returned. Should museums return objects to their country of '
                 'origin? Why or why not?',
        posts=[('Marco', 'm',
                'I think they should be returned. An object means something different in the '
                'place it came from. In a museum two thousand miles away it is just a beautiful '
                'thing in a glass case, but at home it is part of who people are.'),
               ('Hana', 'h',
                'I am not sure it is that simple. Many of these objects survived because a museum '
                'looked after them, and millions of people have been able to see them. If every '
                'museum returned everything, most of us would never see anything from outside our '
                'own country.')],
        skill=('Name a classmate, then add something new',
               ['Start from one of the two posts by name. It shows you read the discussion.',
                'Then add a point neither of them made. Agreeing twice earns nothing.',
                'At least 100 words, which is about six sentences at this level.',
                'Ten minutes: two to think, seven to write, one to read it back.']),
        starters=['I agree with Marco that…, but I would add that…',
                  'Hana makes a fair point about… However,…',
                  'Both posts assume that… In my country, though,…',
                  'The strongest reason for me is…, because…'],
        model=[
            'Hana makes a fair point about who has looked after these objects, but I think she is '
            'answering a different question. The question is not who kept them safe; it is who '
            'they belong to.',
            'I agree with Marco, and I would add one thing. We talked in class about break-in-bulk '
            'points — places where things stop and people stay. A museum is the same kind of '
            'place. Objects stopped there for reasons that had nothing to do with the people who '
            'made them, and nobody asked those people.',
            'I would not return everything immediately, because some countries do say they are '
            'not ready. But the decision should be theirs, not ours. Museums could lend objects '
            'back and share them, so that Hana’s millions of visitors still see something.',
        ],
        model_words=146,
    ),

    # ------------------------------------------------------------ Grammar ----
    gram=dict(
        title='Past simple and present perfect · direct question forms',
        headers=['Form', 'Example'],
        rows=[
            ['Past simple — finished time', 'The line opened in 1830.'],
            ['Present perfect — no finished time', 'The museum has changed its hours.'],
            ['Past simple question', 'When did the line open?'],
            ['Present perfect question', 'How long has it been open?'],
            ['Ever / never', 'Have you ever travelled by train?'],
            ['Wh- + auxiliary + subject + verb', 'Why did they change the hours?'],
            ['Subject question (no auxiliary)', 'Which city grew fastest?'],
        ],
        notes=[
            'The rule that matters for this test is not the tense but the word order. A direct '
            'question puts the auxiliary in front of the subject: did you see, has it opened.',
            'There is one exception, and Build a Sentence uses it. When the question word is the '
            'subject, there is no auxiliary at all: Which city grew fastest? — not Which city '
            'did grow fastest?',
            'A time expression decides the tense. In 1830, last month and yesterday force the past '
            'simple. Since, for, already, yet and ever force the present perfect.',
        ],
        watch='Never say *When have you gone to the museum?* A question with when is about '
              'finished time, so it takes the past simple: When did you go?',
        ex=[
            ('Put the verb in the past simple or the present perfect.',
             ['The first line __________ (open) in Baltimore in 1830.',
              'I __________ (never / be) to the United States.',
              'The museum __________ (change) its opening hours last month.',
              'How long __________ (the exhibition / be) in Gallery 3?',
              'Chicago __________ (grow) very quickly between 1840 and 1870.',
              'We __________ (already / book) the coach.'],
             ['opened', 'have never been', 'changed', 'has the exhibition been', 'grew',
              'have already booked']),
            ('Write the question for each answer.',
             ['__________________?  — It opened in 1830.',
              '__________________?  — Because the gallery changed the dates.',
              '__________________?  — Chicago did.',
              '__________________?  — For about three months.'],
             ['When did it open', 'Why did they change it', 'Which city grew fastest',
              'How long has it been open']),
            ('One sentence in each pair is wrong. Correct it.',
             ['a) When have you visited the museum?   b) When did you visit the museum?',
              'a) Which company built the bridge?   b) Which company did build the bridge?',
              'a) I have seen the exhibition last week.   b) I saw the exhibition last week.'],
             ['a is wrong → When did you visit…', 'b is wrong → Which company built…',
              'a is wrong → I saw the exhibition last week']),
        ],
        bas='Seven of the ten Build a Sentence items in a real test make a question. Three of '
            'them use the shape you have just practised: wh- word, auxiliary, subject, verb. '
            'Get that order automatic now and three marks are already safe.',
    ),

    # ------------------------------------------------------------- Review ----
    rev=dict(
        vocab=[
            ('a length of ten years', 'decade'),
            ('to change something completely', 'transform'),
            ('to move to another place to live', 'migrate'),
            ('important enough to notice', 'significant'),
            ('to start something that will last', 'establish'),
            ('the way from one place to another', 'route'),
            ('a large area of a country', 'region'),
            ('to become smaller or weaker', 'decline'),
            ('first', 'initial'),
            ('belonging to the whole country', 'federal'),
            ('a visit away from school as part of a course', 'field trip'),
            ('the times a place is open', 'opening hours'),
        ],
        gram=[
            ('The railroad __________ (reach) the Mississippi in 1850.', 'reached'),
            ('__________ you ever __________ (be) on a guided tour?', 'Have / been'),
            ('How long __________ the museum __________ (be) open today?', 'has / been'),
            ('Which engineer __________ (design) the bridge?', 'designed'),
            ('We __________ (not / receive) the email yet.', 'have not received'),
            ('What time __________ the coach __________ (leave) yesterday?', 'did / leave'),
            ('The population of the region __________ (decline) since 1980.', 'has declined'),
            ('Why __________ they __________ (move) the date?', 'did / move'),
        ],
        mini=[
            ('In the passage on page 18, the author argues that cities appeared where',
             ('rivers were deepest', 'goods had to change transport', 'land was cheapest',
              'the weather was best'), 1,
             'The break-in-bulk point is the passage’s central idea.'),
            ('The coach on Saturday leaves at',
             ('9.00', '9.15', '9.30', '9.45'), 1,
             'The announcement changed it from 9.30 to 9.15 because of roadworks.'),
            ('Which question is correctly formed?',
             ('When have you gone to the museum?', 'Which city did grow fastest?',
              'How long has it been open?', 'What time did the coach left?'), 2,
             'The others all break a rule: when takes the past simple, a subject question takes no '
             'auxiliary, and did is never followed by a past tense.'),
            ('In Complete the Words, the dashes tell you',
             ('how many words are missing', 'how many letters are missing',
              'which tense to use', 'where the sentence ends'), 1,
             'One dash is one letter. That is how you tell -ed from -ing.'),
            ('In the Listening section you can go back to a previous question',
             ('always', 'inside one module only', 'in Module 1 only', 'never'), 3,
             'Reading allows Back inside a module; Listening allows none at all.'),
            ('A student with no student card at the museum will',
             ('be turned away', 'pay the adult price', 'get a refund later',
              'pay nothing'), 1,
             'The announcement says so, and rules out the refund in the same sentence.'),
        ],
    ),
    tip='Back works inside a Reading module and nowhere in Listening. In Reading, answer the '
        'easy items first and return to the hard ones. In Listening there is no returning: '
        'decide, mark, move on. A question you leave open is a question you lose.',
)
