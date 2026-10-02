# -*- coding: utf-8 -*-
"""Unit 9 · Anthropology and Culture."""

UNIT = dict(
    n=9, vol=1, title='Anthropology and Culture',
    icons=('people', 'globe', 'urn'),
    subs=('Food and culture', 'International Students’ Week', 'How families are organised'),
    grammar='used to and would',
    field='custom, community, identity',
    opener_line='Anthropology is written in the past habitual: people used to…, families would… '
                'This unit teaches both forms and the difference between them.',

    candos=[
        'complete word endings in a text about food and custom',
        'read a programme and a call for volunteers and find what I need to do',
        'follow a passage that compares how different societies organise something',
        'understand two people planning a shared event',
        'describe how things used to be without preparing',
        'write an email offering to help, and a post about what is worth keeping',
    ],

    acad=[
        ('culture', 'the way of life of a group of people'),
        ('community', 'a group of people living in one place or sharing something'),
        ('tradition', 'a custom passed down over time'),
        ('ethnic', 'connected with a group that shares a culture or origin'),
        ('gender', 'the social roles connected with being male or female'),
        ('norm', 'what is usual or expected in a group'),
        ('reside', 'to live in a place'),
        ('immigrate', 'to come to live in a new country'),
        ('integrate', 'to join and become part of a group'),
        ('participate', 'to take part'),
        ('interact', 'to communicate with other people'),
        ('mutual', 'felt or done by two sides equally'),
        ('individual', 'one single person'),
        ('institute', 'an organisation set up for a purpose'),
        ('network', 'a group of people who are connected'),
        ('bond', 'a strong connection between people'),
        ('role', 'the part a person plays in a group'),
        ('status', 'a person’s position in a group'),
        ('hierarchy', 'a system in which people are ranked above one another'),
        ('accompany', 'to go somewhere with someone'),
        ('assemble', 'to come together in one place'),
        ('colleague', 'a person you work with'),
        ('context', 'the situation that surrounds something'),
        ('adapt', 'to change in order to fit a new situation'),
    ],
    campus=[
        ('food stall', 'a small open shop selling food at an event'),
        ('recipe', 'instructions for cooking a dish'),
        ('ingredient', 'one of the things a dish is made from'),
        ('festival', 'a celebration lasting one or more days'),
        ('costume', 'clothes worn for a performance or celebration'),
        ('performance', 'something done in front of an audience'),
        ('host family', 'a family that a visiting student lives with'),
        ('exchange', 'an arrangement where students swap universities'),
        ('welcome desk', 'a table where arrivals are greeted'),
        ('marquee', 'a large tent used for events'),
        ('raffle', 'a game where numbered tickets can win prizes'),
        ('programme', 'a printed list of what will happen and when'),
    ],
    vocab_talk=[
        'Describe one tradition in your family. Where do you think it came from?',
        'What is the norm about arriving on time where you grew up?',
        'How quickly do people in your community integrate newcomers?',
        'What role do you usually take when a group of friends plans something?',
    ],
    again=['culture', 'significant', 'vary', 'identify', 'contrast', 'estimate', 'participate', 'diverse'],

    r1=dict(
        sub='Food and culture',
        skill=('Watch for the past habitual',
               ['In a text about the past, -ed endings are everywhere. Count the dashes first.',
                'Used to is never *used too*. The gap after us-- is almost always ed.',
                'Noun endings common here: -tion, -ment, -ship, -ance.',
                'If the gap is in a plural noun after a number, it is almost always -s or -es.']),
        guided_text='Every country believes its food is ancient, and most of it is not. The '
                    'tomato did not reach Italy until the sixteenth cent---, and the chilli '
                    'reached India at about the same t---. People us-- to cook without either, '
                    'and nobody now thinks of them as new arri----. A tradition only has to be '
                    'old-- than the people remembering it.',
        guided_hint='1  cent---  →  ury  (century)',
        guided=['ury', 'ime', 'ed', 'vals', 'er'],
        exam_text='A dish travels further than the people who first made it. Noodles, chillies, '
                  'potatoes and coffee all crossed continents, and each one is now treated as '
                  'nati---- somewhere it did not come from. The interesting quest--- is not where '
                  'a food began but what happe--- when it arrived. It was never simply copied. '
                  'Cooks adapted it to what was avail---- and to what their neighbours would '
                  'accept, and after two gener------ nobody remembered the adapt-----. '
                  'Anthropologists call this process localis-----, and it works on more than '
                  'food: music, clothing and relig--- all do the same thing. Which is why the '
                  'question are you eating authentic food? is almost meaning----. Authentic to '
                  'which cent---?',
        exam=['onal', 'ion', 'ned', 'able', 'ations', 'ation', 'ation', 'ion', 'less', 'ury'],
    ),

    r2=dict(
        sub='International Students’ Week',
        skill=('Find the instruction addressed to you',
               ['A programme tells you when. A call for volunteers tells you what to do. '
                'Questions mix the two.',
                'Note what is needed and by when — those two travel together.',
                'In a social post, the ask is usually in the last three lines.',
                'If a time appears twice, check whether it is the same event.']),
        docs=[
            ('notice', 'International Students’ Week · 10–14 February', [
                '# Monday',
                '12.00  Welcome desk opens, Main Quad marquee',
                '18.00  Opening performance, Hartley Hall. Free, no ticket needed.',
                '# Wednesday',
                '11.00–15.00  Food fair, Main Quad. Thirty stalls.',
                '19.00  Film night, Lecture Theatre 2. £2, proceeds to the hardship fund.',
                '# Friday',
                '13.00  Language exchange, Library foyer. Bring nothing; just turn up.',
                '20.00  Closing night and raffle, Hartley Hall. Tickets £5 from the welcome desk.',
                '# Notes',
                '* All food at the fair must be prepared in the campus kitchen, not at home.',
                '* Stallholders collect their table number from the welcome desk on Tuesday.',
            ], 'listing'),
            ('social', 'Mariam Al-Sayed', '@mariam_isw', [
                'We are thirty-one stalls short of thirty and I am not good at maths, so let me',
                'put that more clearly: we have twenty-nine and we want thirty.',
                '',
                'If you can cook one dish for about forty people, that is a stall. You do not',
                'need a recipe from your grandmother and it does not have to be traditional.',
                'Last year somebody did toast with four kinds of jam and it was the second',
                'busiest table in the marquee.',
                '',
                'Message me by Sunday. The kitchen needs to know numbers on Monday morning,',
                'and after that I genuinely cannot add anyone.',
            ], 'h'),
        ],
        guided=[
            ('Which event costs money?',
             ('The opening performance', 'The food fair', 'The language exchange',
              'The closing night'), 3,
             'Tickets £5 for the closing night. The film night also costs £2, but the opening '
             'performance and the language exchange are free.'),
            ('Where does the food fair take place?',
             ('Hartley Hall', 'Main Quad', 'Library foyer', 'Lecture Theatre 2'), 1,
             'Food fair, Main Quad, on Wednesday from eleven until three.'),
            ('What should you bring to the language exchange?',
             ('A ticket', 'A dish', 'Nothing', 'A programme'), 2,
             'Bring nothing; just turn up.'),
            ('Where do stallholders get their table number?',
             ('At the marquee on Wednesday', 'From the welcome desk on Tuesday',
              'By email', 'From the kitchen'), 1,
             'The last note says so, and it is the day before the fair.'),
        ],
        exam=[
            ('How many stalls does Mariam still need?',
             ('One', 'Two', 'Twenty-nine', 'Thirty-one'), 0,
             'She has twenty-nine and wants thirty — the joke in her first line is the point.'),
            ('What does Mariam say about the dish?',
             ('It must be traditional', 'It must be from your own country',
              'It does not have to be traditional', 'It must be cooked at home'), 2,
             'It does not need to be traditional, and the toast-and-jam example proves it.'),
            ('Why does she mention toast with four kinds of jam?',
             ('To complain about it', 'To show that simple food can work',
              'To explain the rules', 'To describe last year’s winner'), 1,
             'It was the second busiest table, which is her argument against needing a family '
             'recipe.'),
            ('By when must volunteers contact her?',
             ('Friday', 'Sunday', 'Monday morning', 'Tuesday'), 1,
             'Message me by Sunday, because the kitchen needs numbers on Monday morning.'),
            ('Where must the food be prepared?',
             ('At home', 'In the campus kitchen', 'At the stall', 'In the marquee'), 1,
             'The notes are explicit: in the campus kitchen, not at home.'),
            ('What can be inferred about the food fair?',
             ('It is the largest event of the week', 'It is only for international students',
              'It is organised at short notice', 'It has fewer stalls than last year'), 0,
             'Thirty stalls is by far the biggest number in the programme, and Mariam is still '
             'recruiting days before.'),
        ],
    ),

    r3=dict(
        sub='How families are organised',
        title='How Families Are Organised',
        words=275,
        paras=[
            'Ask someone to draw their family and most Europeans will draw two parents and their '
            'children. Ask the same question in much of West Africa, South Asia or the Pacific '
            'and you will get a larger and differently shaped picture: grandparents, several '
            'adult siblings and their children, sometimes all under one roof. Neither drawing is '
            'the natural one. Both are answers to questions about work, land and old age.',
            'Where land is farmed by hand, a larger household is a better one: more hands at '
            'harvest, and the old looked after by the young who will inherit. Where people move '
            'to cities for wages, the same household becomes expensive to keep together, and it '
            'breaks into smaller units that can move. The anthropologist Jack Goody argued that '
            'the household follows the economy with a delay of roughly one generation, which is '
            'why a society often holds the ideal of a family it no longer actually has.',
            'The delay is visible in language. Many languages keep separate words for a father’s '
            'brother and a mother’s brother, because the two once had different duties towards '
            'a child — one might arrange a marriage, the other might pay for schooling. The '
            'duties have usually gone. The words remain, used now for warmth rather than for '
            'obligation, which is a reminder that a culture carries its history around in its '
            'vocabulary long after the reasons have dissolved.',
        ],
        skill=('Hold a comparison across paragraphs',
               ['A comparative passage moves between two cases. Keep a column for each.',
                'The reason for a difference is usually economic or practical, not moral. '
                'Expect that.',
                'When a named researcher appears, their claim will be tested.',
                'A passage that ends on language or vocabulary is making a point about memory.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why family shapes differ, and what explains the difference',
              'Why Europeans have small families', 'How anthropologists work',
              'How languages change over time'), 0,
             'Both drawings are answers to questions about work, land and old age — that frames '
             'all three paragraphs.'),
            ('According to paragraph 1, which family shape is natural?',
             ('The small one', 'The large one', 'Neither', 'Both equally'), 2,
             'Neither drawing is the natural one — the author says so directly.'),
            ('Why is a larger household useful where land is farmed by hand?',
             ('It is cheaper', 'There are more hands at harvest', 'Houses are larger',
              'Children leave school earlier'), 1,
             'More hands at harvest, and the old cared for by those who will inherit.'),
            ('What did Jack Goody argue?',
             ('That large families are better', 'That the household follows the economy with a '
              'delay', 'That language causes family structure',
              'That cities destroy families'), 1,
             'With a delay of roughly one generation, which is the key claim of the paragraph.'),
        ],
        exam=[
            ('Why does a society often hold an ideal it no longer has?',
             ('People are nostalgic', 'The household changes more slowly than the economy',
              'Governments encourage it', 'Families are getting smaller everywhere'), 1,
             'That is exactly what a one-generation delay produces.'),
            ('Why do many languages distinguish a father’s brother from a mother’s brother?',
             ('The words are easier to say', 'The two once had different duties',
              'One lived nearer', 'It marks respect'), 1,
             'One might arrange a marriage, the other might pay for schooling.'),
            ('All of the following are stated about those words EXCEPT:',
             ('They still exist', 'The duties behind them have usually gone',
              'They are now used for warmth', 'They are disappearing from most languages'), 3,
             'The passage says the opposite: the words remain.'),
            ('The word "dissolved" in paragraph 3 is closest in meaning to',
             ('disappeared', 'returned', 'strengthened', 'divided'), 0,
             'The reasons have gone while the vocabulary stays, which is the author’s point.'),
            ('What can be inferred about households in a city?',
             ('They are always poorer', 'They are easier to move',
              'They keep more traditions', 'They are larger than rural ones'), 1,
             'The household breaks into smaller units that can move — mobility is the stated '
             'advantage.'),
            ('What does the author suggest about culture in the last sentence?',
             ('It changes faster than the economy', 'It stores its history in its words',
              'It is created by anthropologists', 'It is the same everywhere'), 1,
             'A culture carries its history around in its vocabulary long after the reasons '
             'have gone.'),
            ('Which best states the main idea of paragraph 2?',
             ('Farming is harder than city work', 'Household size follows the way people earn a '
              'living', 'Grandparents are valued differently in different places',
              'Cities are growing everywhere'), 1,
             'Hand farming favours large households, wage work favours small ones, with a '
             'generation’s delay.'),
        ],
    ),

    l1=dict(
        sub='International Students’ Week',
        caption='Two students plan a food stall',
        skill=('Follow a plan being made',
               ['Planning conversations contain a problem, an idea, an objection and a '
                'decision. Expect all four.',
                'Numbers of people, times and quantities are nearly always tested.',
                'Listen for the objection — it is usually the question with the longest options.',
                'The last two lines contain the agreed plan.']),
        warm=[
            ('Man: Are you doing a stall this year?',
             ('Thirty of them.', 'I was thinking about it, yes.', 'In the marquee.',
              'It was very good.'), 1,
             'A yes/no question about intention; the answer gives one.'),
            ('Woman: How many people do we cook for?',
             ('About forty.', 'In the campus kitchen.', 'On Wednesday.',
              'Yes, quite a lot.'), 0,
             'How many wants a number of people.'),
            ('Man: We can’t cook it at home, can we?',
             ('No — it has to be the campus kitchen.', 'My kitchen is quite small.',
              'Yes, forty portions.', 'On Tuesday morning.'), 0,
             'A negative question checking a rule; the answer confirms and names it.'),
        ],
        script=[
            ('Woman', 'Mariam needs one more stall and she messaged me directly, which I think '
                      'means she has run out of other people.'),
            ('Man', 'What would we even make?'),
            ('Woman', 'My grandmother used to make a lentil soup. Enormous pot, fed everybody, '
                      'took about an hour.'),
            ('Man', 'For forty people?'),
            ('Woman', 'That’s the problem. She would make it for twelve. Forty is four times '
                      'that and I’ve never scaled anything up in my life.'),
            ('Man', 'Soup scales though, doesn’t it? It’s not a cake.'),
            ('Woman', 'True. And it’s cheap, which matters, because we pay for the ingredients '
                      'ourselves.'),
            ('Man', 'Do we? I assumed the university did.'),
            ('Woman', 'No. They give you the kitchen and the table. Everything in the pot is '
                      'yours.'),
            ('Man', 'All right. Soup. I’ll do the shopping if you do the cooking, because you '
                      'have actually seen it made.'),
            ('Woman', 'Deal. I’ll message her tonight — the kitchen wants numbers on Monday.'),
        ],
        items=[
            ('What are the speakers deciding?',
             ('Whether to go to the food fair', 'Whether to run a stall and what to make',
              'Where to buy ingredients', 'Who Mariam should ask next'), 1,
             'The conversation moves from being asked, to what to make, to who does what.'),
            ('Why does the woman think Mariam messaged her directly?',
             ('They are friends', 'She has run out of other people',
              'She knows her grandmother', 'She organised a stall last year'), 1,
             'The woman says so in her first line, dryly.'),
            ('What was the original recipe designed for?',
             ('Forty people', 'Twenty people', 'Twelve people', 'A whole village'), 2,
             'She would make it for twelve, and forty is four times that.'),
            ('What is the woman’s main worry?',
             ('The cost', 'Scaling the recipe up', 'Finding the kitchen',
              'Cooking on a Wednesday'), 1,
             'I’ve never scaled anything up in my life — and the man answers that worry directly.'),
            ('Who pays for the ingredients?',
             ('The university', 'The students themselves', 'The hardship fund',
              'The welcome desk'), 1,
             'Everything in the pot is yours — which corrects the man’s assumption.'),
            ('What will the man do?',
             ('Cook the soup', 'Buy the ingredients', 'Message Mariam',
              'Collect the table number'), 1,
             'He offers the shopping because she has actually seen the dish made.'),
        ],
    ),

    l2=dict(
        sub='International Students’ Week',
        caption='An announcement about the food fair',
        poster=['Food fair moves to the marquee',
                'Kitchen slots: book one by Monday',
                'Table numbers from the welcome desk'],
        skill=('Catch the thing that moved',
               ['Events move indoors, change time, or change room. Note the old and the new.',
                'A booking system introduced at short notice is always tested.',
                'Listen for who this does not apply to — exceptions carry questions.',
                'The reason for a change is usually given once, briefly.']),
        warm=[
            ('Woman: Is it still in the Main Quad?',
             ('On Wednesday.', 'No, it’s moved into the marquee.', 'Thirty stalls.',
              'Yes, eleven until three.'), 1,
             'A yes/no question about the place, answered and corrected.'),
            ('Man: Do I have to book a kitchen slot?',
             ('There are six of them.', 'Yes, by Monday.', 'In the campus kitchen.',
              'It takes two hours.'), 1,
             'A do-I-have-to question wants a yes or no with the deadline.'),
            ('Woman: Where do I get my table number?',
             ('From the welcome desk.', 'On Tuesday.', 'It’s thirty.',
              'Yes, you need one.'), 0,
             'Where wants a place; the day answers when.'),
        ],
        script=[
            ('Man', 'Three updates about Wednesday’s food fair. First, it has moved. The '
                    'forecast is poor, so we are using the marquee rather than the open Quad. '
                    'Same times, eleven until three, same table numbers. Second, and this is new '
                    'this year: the campus kitchen is now bookable in two-hour slots, and you '
                    'must book one by Monday. Thirty stalls all arriving at nine on Wednesday '
                    'morning does not work — we tried it last year and the first six stalls '
                    'cooked and the rest queued. Slots run from six in the morning. Third, '
                    'collect your table number from the welcome desk on Tuesday, not on the day. '
                    'If you turn up on Wednesday without a number you will be put wherever there '
                    'is a gap, and the gaps are by the entrance where it is cold. One exception: '
                    'the three stalls serving cold food only do not need a kitchen slot, but you '
                    'still need a table number like everybody else.'),
        ],
        items=[
            ('Why has the fair moved into the marquee?',
             ('There are more stalls', 'The forecast is poor', 'The Quad is being resurfaced',
              'It is warmer'), 1,
             'The reason is given immediately after the change.'),
            ('What is new this year?',
             ('The table numbers', 'Booking a kitchen slot', 'The location',
              'The number of stalls'), 1,
             'And this is new this year: the kitchen is now bookable in two-hour slots.'),
            ('Why was the kitchen system changed?',
             ('The kitchen was too small', 'Thirty stalls arriving at once did not work',
              'The slots were too long', 'Students asked for it'), 1,
             'Last year the first six cooked and the rest queued.'),
            ('What happens if you arrive without a table number?',
             ('You cannot have a stall', 'You are placed in a gap near the entrance',
              'You collect one on the day', 'You pay a fee'), 1,
             'And the speaker adds that the gaps are by the entrance where it is cold.'),
            ('Which stalls do not need a kitchen slot?',
             ('The three largest', 'The three serving cold food only',
              'Those arriving at six', 'None — all must book'), 1,
             'The one exception given at the end, though they still need a table number.'),
        ],
    ),

    l3=dict(
        sub='Food and culture',
        caption='A talk on what a custom is',
        board=['Custom ≠ ancient', 'Invented traditions (Hobsbawm, 1983)',
               'Function now, not origin then', 'Ask: who benefits from calling it old?'],
        skill=('Follow a definition being narrowed',
               ['A talk may start with a loose definition and sharpen it. The final version '
                'is the one tested.',
                'A named book or year on the board will be used in an argument.',
                'Listen for which is why and the question I want you to ask.',
                'A talk that ends with a question is telling you its main idea.']),
        warm=[
            ('Man: Who was Hobsbawm?',
             ('In 1983.', 'A historian who wrote about invented traditions.',
              'It’s on the board.', 'Yes, he was famous.'), 1,
             'Who wants a person and what they did.'),
            ('Woman: Does that mean all traditions are fake?',
             ('They are invented.', 'No — it means age is not what makes them real.',
              'In 1983.', 'Yes, all of them.'), 1,
             'A does-that-mean question wants the claim clarified, and this one corrects a '
             'misreading.'),
            ('Man: Could you give an example?',
             ('Of course — the Scottish tartan.', 'It’s in the reading.',
              'About two hundred years.', 'Yes, I could.'), 0,
             'A request for an example is answered by giving one.'),
        ],
        script=[
            ('Professor', 'Students usually arrive in this subject with the idea that a custom is '
                          'something very old that has survived. Let me complicate that. In 1983 '
                          'Eric Hobsbawm published a collection called The Invention of '
                          'Tradition, and his argument was simple and uncomfortable: a great many '
                          'of the practices that nations describe as ancient were designed, '
                          'deliberately, and recently. The clan tartans of Scotland largely date '
                          'from the early nineteenth century. Several national anthems are '
                          'younger than the railways. Now, the point of this is not to catch '
                          'anybody out. Hobsbawm was not saying these traditions are fake. He was '
                          'saying that age is not what gives a custom its power, which means we '
                          'have been asking the wrong question. Do not ask how old is this. Ask '
                          'what does it do now — who it includes, who it excludes, and who '
                          'benefits from everybody believing it is ancient. A tradition invented '
                          'last Tuesday and genuinely felt by a community is doing more work than '
                          'one that is nine hundred years old and performed for tourists. That is '
                          'the question I want you to take into the reading.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Most traditions are fake', 'What a custom does matters more than how old it is',
              'Hobsbawm was wrong about Scotland', 'Traditions should be preserved'), 1,
             'Age is not what gives a custom its power — and the speaker turns that into a new '
             'question.'),
            ('What did Hobsbawm argue?',
             ('That traditions should be invented', 'That many ancient-seeming practices are '
              'recent', 'That Scotland has no real traditions',
              'That nations need anthems'), 1,
             'Designed, deliberately, and recently — that is the claim of the book.'),
            ('Why does the speaker mention tartans and anthems?',
             ('To criticise nationalism', 'To give examples of recent inventions',
              'To describe Scottish history', 'To compare two countries'), 1,
             'They are the two illustrations of Hobsbawm’s claim.'),
            ('What does the speaker say Hobsbawm was NOT saying?',
             ('That traditions are recent', 'That traditions are fake',
              'That age matters', 'That customs have functions'), 1,
             'The point of this is not to catch anybody out — he was not saying these traditions '
             'are fake.'),
            ('What question does the speaker want students to ask?',
             ('How old is this?', 'What does it do now?', 'Who wrote it?',
              'Where did it begin?'), 1,
             'Do not ask how old is this; ask what does it do now.'),
            ('What does the speaker suggest about a tradition performed for tourists?',
             ('It is more authentic', 'It may be doing less work than a very recent one',
              'It should be stopped', 'It is always older'), 1,
             'A tradition invented last Tuesday and genuinely felt is doing more work than a '
             'nine-hundred-year-old one performed for tourists.'),
        ],
    ),

    sp=[
        dict(sub='Food and culture', focus='the reduced form of used to',
             skill=('Say used to as one word',
                    ['It sounds like /juːstə/, not use-ed-to. Say it as a single unit.',
                     'Would for repeated past actions has the same rhythm: we’d always…',
                     'Keep the main verb clear. The weak form is the auxiliary, never the verb.',
                     'Finish every sentence you begin.']),
             repeat=['We used to eat together.',
                     'She used to make a lentil soup.',
                     'My grandmother would cook for twelve people.',
                     'People used to cook without tomatoes or chillies.',
                     'Every winter the whole family would assemble in one house.',
                     'A dish that used to be foreign is now treated as national somewhere else.',
                     'Two generations after a food arrives, nobody remembers that it was ever adapted to the ingredients that happened to be available.'],
             theme='a custom in your family',
             qs=['To begin, is there something your family always does at a particular time of '
                 'year?',
                 'Customs change as families change. How has that one changed, and why do you '
                 'think it changed?',
                 'Some people say that customs are worth keeping even when nobody remembers why '
                 'they began. Do you agree? Why or why not?',
                 'Finally, should schools teach local traditions, or is that a family’s job? Why?'],
             model=[(1, 'We always eat together on the last Friday of the month. It started '
                        'because my aunt lived far away and it is the only day she could come.'),
                    (3, 'I do agree. The reason a custom began is usually gone, but the people '
                        'it brings into one room are still there.')],
             selfcheck=['I said used to as one reduced unit',
                        'I used would for repeated past actions',
                        'I gave a reason after every opinion']),
        dict(sub='International Students’ Week', focus='organising and offering',
             skill=('Offer something specific',
                    ['I can do the shopping beats I can help. Name the task.',
                     'Use shall I and would you like me to for offers.',
                     'Say when as well as what: I can be there from six.',
                     'One offer, one condition, one question is a complete turn.']),
             repeat=['Shall I bring the pot?',
                     'I can do the shopping on Tuesday.',
                     'Would you like me to collect the table number?',
                     'We will need a kitchen slot before Monday evening.',
                     'I am happy to cook if somebody else buys the ingredients.',
                     'If you can get the vegetables, I can be in the kitchen from six in the morning.',
                     'I could take the early slot and leave the later one for the people who have lectures first thing on Wednesday.'],
             theme='events where you study',
             qs=['First, are there events at your university that students organise themselves?',
                 'People take part in very different ways. How do you usually take part, and why?',
                 'Some people argue that universities should pay students who organise events. '
                 'Do you agree? Why or why not?',
                 'Last question. Should events like these be only for international students, or '
                 'for everybody? Why?'],
             model=[(2, 'I am usually the person who turns up and carries things rather than the '
                        'one who plans. I am better at that and I enjoy it more.'),
                    (4, 'For everybody, definitely. An event for international students that '
                        'local students never attend has not integrated anybody.')],
             selfcheck=['I named a specific task when I offered',
                        'I used shall I or would you like me to',
                        'I said when as well as what']),
        dict(sub='How families are organised', focus='academic register',
             skill=('Compare two societies fairly',
                    ['Use the unit’s words: norm, hierarchy, status, integrate, context.',
                     'Describe both before you judge either. In X…, whereas in Y…',
                     'Give the reason, which in anthropology is usually practical.',
                     'Mark yourself against the three statements below.']),
             repeat=['Household size varies with the economy.',
                     'In some societies several generations reside together.',
                     'The norm in one context may be unusual in another.',
                     'A larger household provides more hands at harvest time.',
                     'Status within a family is often connected to who will inherit.',
                     'Where people move to cities for wages, households break into smaller units.',
                     'A culture can hold the ideal of a family it no longer has, because the household follows the economy a generation behind.'],
             theme='family and change',
             qs=['First, do several generations live together where you come from?',
                 'Living arrangements change, and people feel differently about it. How do people '
                 'where you live feel, and why?',
                 'Some people argue that older relatives should be cared for at home rather than '
                 'in institutions. Do you agree? Why or why not?',
                 'Finally, should governments pay families who look after older relatives at '
                 'home? Why or why not?'],
             model=[(2, 'Older people mind more than younger ones, which makes sense: the norm '
                        'they grew up with is the one that is disappearing.'),
                    (4, 'Yes, and not out of kindness. The care happens either way, and paying '
                        'for it at home is cheaper than paying for it in an institution.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I described both sides before judging',
                        'I gave a practical reason, not only a moral one']),
    ],

    w1=dict(
        sub='Food and culture',
        skill=('Questions about the past habitual',
               ['Did people use to…? — after did, it is use to, with no d.',
                'Would for repeated past actions: What would she make?',
                'An embedded past question keeps statement order: do you know what they used '
                'to eat.',
                'Use every tile exactly once.']),
        guided=[
            ('People used to cook without tomatoes.',
             ['did', 'what', 'people', 'use', 'to', 'cook', 'with'],
             'What did people use to cook with?'),
            ('Her grandmother would make soup for twelve.',
             ['would', 'who', 'make', 'the', 'soup'],
             'Who would make the soup?'),
            ('The chilli reached India in the sixteenth century.',
             ['know', 'you', 'do', 'when', 'the', 'chilli', 'arrived'],
             'Do you know when the chilli arrived?'),
        ],
        exam=[
            ('Families used to live together on the land.',
             ['families', 'did', 'use', 'to', 'live', 'where'],
             'Where did families use to live?'),
            ('Thirty stalls are needed for the fair.',
             ['stalls', 'how', 'many', 'are', 'needed'],
             'How many stalls are needed?'),
            ('The kitchen must be booked by Monday.',
             ['tell', 'can', 'you', 'me', 'whether', 'the', 'kitchen', 'is', 'booked'],
             'Can you tell me whether the kitchen is booked?'),
            ('The tradition was invented in the nineteenth century.',
             ['was', 'when', 'the', 'tradition', 'invented'],
             'When was the tradition invented?'),
            ('The student who ran the stall last year is helping again.',
             ['the', 'student', 'who', 'ran', 'the', 'stall', 'is', 'helping', 'again'],
             'The student who ran the stall is helping again.'),
            ('Ingredients are paid for by the stallholders.',
             ['know', 'do', 'you', 'who', 'pays', 'for', 'the', 'ingredients'],
             'Do you know who pays for the ingredients?'),
            ('Her grandmother used to cook for twelve people.',
             ['people', 'how', 'many', 'did', 'she', 'use', 'to', 'cook', 'for'],
             'How many people did she use to cook for?'),
        ],
    ),
    w2=dict(
        sub='International Students’ Week',
        to='m.alsayed@brookfield.edu',
        date='06/02/2026',
        subject='Food fair — offering a stall',
        scenario=[
            'Mariam Al-Sayed has posted that she needs one more stall for Wednesday’s food fair. '
            'You can cook a lentil soup for about forty people, but you have never cooked for '
            'that many, and you have a lecture on Wednesday morning until eleven.',
            'Write an email to Mariam.',
        ],
        bullets=['Offer the stall and say what you would make.',
                 'Say honestly what you are not sure about.',
                 'Ask for the one thing you need to know.'],
        skill=('Offer with the problem attached',
               ['An offer with a known difficulty in it is more useful than a confident one '
                'that collapses on the day.',
                'Say what you can do, then what you cannot, then what you need.',
                'Give a number: for forty, from six, until eleven.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Mariam,',
            'I saw your post and I would like to take the last stall. I would make a lentil soup '
            '— my grandmother’s recipe, which is cheap, vegetarian and easy to serve from a pot.',
            'Two honest things. First, the recipe is designed for twelve people and I have never '
            'scaled anything up to forty, so I may need somebody in the kitchen who has. Second, '
            'I have a lecture on Wednesday until eleven, so I cannot be at the stall before '
            'quarter past.',
            'Could you tell me whether an early kitchen slot is still available — six or eight in '
            'the morning? If I can cook before the lecture, the soup only needs reheating and '
            'the eleven o’clock problem disappears.',
            'Thank you,',
            'Ines Duarte',
        ],
        notes=['The offer is first and concrete: the dish, and three reasons it suits a stall.',
               'Both difficulties are named with numbers, so Mariam can solve them rather than '
               'discover them.',
               'The question is specific (six or eight) and the writer has already worked out '
               'what a yes would fix.',
               'Nothing is apologised for — the tone is practical, which is what an organiser '
               'four days from an event needs.'],
    ),
    w3=dict(
        sub='How families are organised',
        prof='Dr Nakamura',
        question='Many communities work hard to keep traditions alive — festivals, dress, '
                 'languages — even when the way of life that produced them has gone. Is it worth '
                 'preserving a tradition after its original purpose has disappeared? Why or why '
                 'not?',
        posts=[('Chen', 'm',
                'Yes. A tradition is not a tool, so it does not stop working when its original '
                'job ends. People keep a festival because it puts three hundred neighbours in '
                'the same field once a year, and no modern institution does that at all.'),
               ('Amara', 'w',
                'I would be careful. Some of what gets preserved is performance for visitors, '
                'and the community ends up acting out a version of itself that was designed by '
                'a tourist board. That is not keeping a tradition. It is replacing one.')],
        skill=('Use the lecture’s test',
               ['The talk gave you a question: not how old is it, but what does it do now.',
                'Apply that test to both posts and you will find the answer almost writes '
                'itself.',
                'Name a classmate and give their point its strongest form.',
                'At least 100 words in ten minutes.']),
        starters=['The lecture gave us a test for exactly this:…',
                  'Chen and Amara agree more than they think, because…',
                  'Amara’s worry is right, but it is a worry about…, not about…',
                  'By that test,…'],
        model=[
            'The lecture gave us a test for exactly this question, and I think it settles the '
            'disagreement between Chen and Amara.',
            'Do not ask how old a tradition is. Ask what it does now: who it includes, who it '
            'excludes, and who benefits from calling it ancient. By that test Chen is right. A '
            'festival that puts three hundred neighbours in one field is doing real work, and it '
            'makes no difference whether the reason it began was a harvest nobody now depends on.',
            'But Amara is right too, and about something different. Her worry is not that a '
            'tradition has outlived its purpose. It is that it has acquired a new one, and the '
            'new one is serving an audience rather than a community. That fails the same test, '
            'for the same reason. So the test is the answer: keep what the community is doing, '
            'and be suspicious of what it is performing.',
        ],
        model_words=168,
    ),

    gram=dict(
        title='used to and would',
        headers=['Form', 'Example'],
        rows=[
            ['used to + infinitive (past habit or state)', 'We used to eat together.'],
            ['Negative', 'We did not use to eat together.'],
            ['Question', 'Did you use to eat together?'],
            ['would + infinitive (repeated past action)', 'She would make soup every winter.'],
            ['would NOT for past states', 'She would be a teacher. ✗'],
            ['Past simple for a single event', 'The chilli reached India in 1550.'],
            ['be used to + -ing (a different thing)', 'I am used to cooking for twelve.'],
        ],
        notes=[
            'Used to covers both repeated actions and past states. Would covers only repeated '
            'actions, so you cannot say *she would be a teacher* or *we would have a house*.',
            'After did, the d disappears: Did you use to…?, We did not use to… The spelling '
            'follows the sound.',
            'Be used to + -ing means something quite different: it means accustomed to. '
            'I used to cook = I did and I no longer do. I am used to cooking = it is normal '
            'for me.',
        ],
        watch='Never write *Did you used to…?* The auxiliary did already carries the past, so '
              'the main verb goes back to use.',
        ex=[
            ('Complete with used to, would or the past simple.',
             ['We __________ (eat) together every Friday when I was small.',
              'My grandmother __________ (make) soup in an enormous pot each winter.',
              'The chilli __________ (reach) India in the sixteenth century.',
              'There __________ (be) three generations in that house.',
              'Every summer the family __________ (assemble) in one village.',
              '__________ you __________ (live) in the city before?'],
             ['used to eat', 'would make', 'reached', 'used to be', 'would assemble',
              'Did / use to live']),
            ('One sentence in each pair is wrong. Correct it.',
             ['a) Did you used to cook?   b) Did you use to cook?',
              'a) She would be a teacher.   b) She used to be a teacher.',
              'a) I am used to cook for twelve.   b) I am used to cooking for twelve.'],
             ['a is wrong → Did you use to cook?', 'a is wrong → She used to be a teacher.',
              'a is wrong → I am used to cooking for twelve.']),
            ('Rewrite with used to or would.',
             ['In the past, families lived on the land. →',
              'Each winter they cooked the same dish. →',
              'There were separate words for both uncles. →',
              'Every year he visited his grandmother. →'],
             ['Families used to live on the land.', 'Each winter they would cook the same dish.',
              'There used to be separate words for both uncles.',
              'Every year he would visit his grandmother.']),
        ],
        bas='Build a Sentence tests this as a question: What did people use to cook with? Notice '
            'that the auxiliary did takes the past, so use loses its d — a very common slip '
            'under time pressure.',
    ),

    rev=dict(
        vocab=[
            ('what is usual or expected in a group', 'norm'),
            ('to join and become part of a group', 'integrate'),
            ('felt or done by two sides equally', 'mutual'),
            ('a person’s position in a group', 'status'),
            ('a system in which people are ranked', 'hierarchy'),
            ('to come together in one place', 'assemble'),
            ('the situation that surrounds something', 'context'),
            ('to change in order to fit a new situation', 'adapt'),
            ('to come to live in a new country', 'immigrate'),
            ('a strong connection between people', 'bond'),
            ('a family a visiting student lives with', 'host family'),
            ('a large tent used for events', 'marquee'),
        ],
        gram=[
            ('We __________ (eat) together every Friday when I was small.', 'used to eat'),
            ('Each winter she __________ (make) the same soup.', 'would make'),
            ('The chilli __________ (reach) India in the sixteenth century.', 'reached'),
            ('There __________ (be) three generations in that house.', 'used to be'),
            ('__________ you __________ (live) in the city before?', 'Did / use to live'),
            ('I am used to __________ (cook) for twelve, not forty.', 'cooking'),
            ('Every summer the family __________ (assemble) in one village.', 'would assemble'),
            ('She __________ (not / use to) enjoy cooking at all.', 'did not use to'),
        ],
        mini=[
            ('According to the passage on page 146, household size follows',
             ('religion', 'the economy, about a generation behind', 'the climate',
              'the size of houses'), 1,
             'Goody’s claim, and the reason a society can hold an ideal it no longer has.'),
            ('In the talk, Hobsbawm argued that many traditions are',
             ('fake', 'recent inventions', 'older than people think', 'disappearing'), 1,
             'Designed, deliberately, and recently — but the speaker insists that is not the '
             'same as fake.'),
            ('Which sentence is correct?',
             ('Did you used to cook?', 'She would be a teacher.',
              'I am used to cooking for twelve.', 'We use to eat together.'), 2,
             'Be used to takes -ing; the others misplace the past or use would for a state.'),
            ('Food for the fair must be prepared',
             ('at home', 'in the campus kitchen', 'at the stall', 'anywhere'), 1,
             'The notes and the announcement agree, and slots must be booked by Monday.'),
            ('A question asking what a speaker means by a phrase is testing',
             ('a date', 'implication', 'vocabulary from a dictionary', 'the main idea'), 1,
             'These items ask what was meant, which is usually different from what was said.'),
            ('In Speaking, preparation time is',
             ('thirty seconds', 'fifteen seconds', 'one minute', 'not given at all'), 3,
             'Neither Speaking task in the 2026 test gives any preparation time.'),
        ],
    ),
    tip='In Take an Interview the four questions get harder on purpose: a fact about you, then '
        'a reaction, then an opinion, then an opinion about policy. Knowing the shape is half '
        'the preparation, because you can hear which one is coming and answer at the right '
        'level instead of being surprised by the fourth.',
)
