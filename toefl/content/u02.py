# -*- coding: utf-8 -*-
"""Unit 2 · Astronomy and Space."""

UNIT = dict(
    n=2, vol=1, title='Astronomy and Space',
    icons=('telescope', 'globe', 'chart'),
    subs=('The Moon and early observation', 'A planetarium evening', 'Looking for other planets'),
    grammar='Comparatives and superlatives',
    field='distance, measurement, discovery',
    opener_line='Everything in this unit is about size and distance, so the grammar is the '
                'grammar of comparison. You will need it again in Unit 16.',

    candos=[
        'complete word endings in a short text about observation and measurement',
        'find times, prices and changes in a programme listing and a booking email',
        'follow an academic passage that explains a method, not just a fact',
        'understand a conversation in which two people compare two options',
        'compare two things out loud without preparing what to say',
        'write an email asking about a group booking, and a post weighing costs against benefits',
    ],

    acad=[
        ('estimate', 'to say about how much or how many'),
        ('approximate', 'almost exact, but not completely'),
        ('precise', 'exact and correct in every detail'),
        ('accurate', 'correct, with no mistakes'),
        ('detect', 'to notice something that is hard to see'),
        ('reveal', 'to show something that was hidden'),
        ('visible', 'able to be seen'),
        ('dimension', 'a measurement such as length, width or height'),
        ('ratio', 'the relation between two numbers'),
        ('proportion', 'a part of a whole'),
        ('minimum', 'the smallest possible amount'),
        ('maximise', 'to make as large as possible'),
        ('enormous', 'extremely large'),
        ('sphere', 'a perfectly round object, like a ball'),
        ('orient', 'to find which way you are facing'),
        ('locate', 'to find exactly where something is'),
        ('identify', 'to say what or who something is'),
        ('confirm', 'to show that something is true'),
        ('hypothesis', 'an idea you test to see if it is true'),
        ('predict', 'to say what will happen before it happens'),
        ('phenomenon', 'something that happens that people notice and study'),
        ('device', 'a tool or machine made for one job'),
        ('survey', 'a careful look at a whole area'),
        ('interval', 'the time between two events'),
    ],
    campus=[
        ('planetarium', 'a building where the night sky is shown on a dome'),
        ('show', 'a performance or programme for an audience'),
        ('booking', 'an arrangement to keep a place for you'),
        ('group rate', 'a lower price for several people together'),
        ('telescope', 'an instrument for looking at distant things'),
        ('observatory', 'a building with telescopes for studying the sky'),
        ('screening', 'a showing of a film'),
        ('refund', 'money given back to you'),
        ('seat', 'a place to sit'),
        ('queue', 'a line of people waiting'),
        ('voucher', 'a paper or code you exchange for something'),
        ('latecomer', 'someone who arrives after the start'),
    ],
    vocab_talk=[
        'Can you see any stars from where you live? What do you think that reveals about the place?',
        'Which is the most enormous thing you have ever seen in real life?',
        'Make a prediction about space travel in the next decade. How accurate do you think it is?',
        'How would you estimate the distance from your home to your school, without measuring it?',
    ],
    again=['period', 'significant', 'region', 'construct', 'transform', 'estimate', 'detect', 'visible'],

    r1=dict(
        sub='The Moon and early observation',
        skill=('Let the grammar finish the word',
               ['A gap after the subject is usually a verb ending. A gap after an article '
                'is usually a noun ending.',
                'Comparative and superlative endings are common here: -er, -est, -ier.',
                'Count the dashes before you write: -er is two, -est is three, -ier is three.',
                'If two endings fit the letters, the sentence decides, not the word.']),
        guided_text='People watched the Moon long before anyone built a telescope. They noticed '
                    'that it was bri----- at some times than at others, and that it always '
                    'showed the sa-- face to the Earth. Farmers used it to coun- the months. '
                    'The Moon was the first clock, and for thousands of ye--- it was the only '
                    'one that everybody could s--.',
        guided_hint='1  bri------  →  ghter  (brighter)',
        guided=['ghter', 'me', 't', 'ars', 'ee'],
        exam_text='The Moon is the clo---- object in space, and for most of history it was the '
                  'only one anyone could study in any detail. Early observers had no instru-----, '
                  'so they measured what they could: how long the cycle lasted and how high the '
                  'Moon ro-- above the horizon. Their numbers were surprisingly accu----. By 200 '
                  'BC, Greek astronomers had estim---- the distance to the Moon to within ten per '
                  'cent of the mod--- figure, using nothing but shadows and geometry. They were '
                  'also the fir-- to argue that the Moon shines by reflected lig--, not by its '
                  'own. The telescope, when it fin---- arrived in 1609, did not begin astronomy. '
                  'It confirmed what careful people had already work-- out.',
        exam=['sest', 'ments', 'se', 'rate', 'ated', 'ern', 'st', 'ht', 'ally', 'ed'],
    ),

    r2=dict(
        sub='A planetarium evening',
        skill=('Match the question word to the column',
               ['A listing is a table in disguise. When the question says how much, look at '
                'the price column only.',
                'Read the small print under a listing. Changes and conditions live there.',
                'In an email, the subject line often answers the main-purpose question.',
                'If two shows or two prices look similar, the question is probably testing '
                'which one — read the names carefully.']),
        docs=[
            ('notice', 'Hillcrest Planetarium · October programme', [
                '# Evening shows (dome theatre, 120 seats)',
                'Tuesday 19.00   Our Moon — 45 min   $9 / students $5',
                'Thursday 19.00   Worlds Beyond — 60 min   $11 / students $6',
                'Saturday 18.00   Night Sky Live — 50 min, with an astronomer   $14 / students $8',
                '# Before you book',
                '* Groups of ten or more pay the group rate, $4 a person, any show',
                '* Latecomers cannot be admitted once the dome is dark',
                '* Tickets are not refundable, but may be moved to another date once',
            ], 'listing'),
            ('email', 'astro.society@hillcrest.edu', 'boxoffice@hillcrestplanetarium.org',
             '03/10/2025', 'Your booking — Thursday 9 October', [
                 'Dear Mr Osei,',
                 '',
                 'Thank you for your booking for Worlds Beyond on Thursday 9 October.',
                 'We have you down for fourteen people at the group rate.',
                 '',
                 'Please note that the dome doors close at 18.55 and we cannot let',
                 'anyone in after that. There is no interval, so please ask your',
                 'group to buy drinks before the show rather than during it.',
                 '',
                 'If the date no longer suits you, we can move the whole booking once,',
                 'free of charge, up to 48 hours beforehand.',
                 '',
                 'Kind regards,   Nadia Petrov, Box Office',
             ]),
        ],
        guided=[
            ('Which show lasts the longest?',
             ('Our Moon', 'Worlds Beyond', 'Night Sky Live', 'They are all the same length'), 1,
             'Worlds Beyond is 60 minutes; Night Sky Live is 50 and Our Moon 45.'),
            ('How much does a student pay for Night Sky Live?',
             ('$5', '$6', '$8', '$14'), 2,
             'The student price always follows the slash. $14 is the full price for that show.'),
            ('Which show includes a person as well as the film?',
             ('Our Moon', 'Worlds Beyond', 'Night Sky Live', 'None of them'), 2,
             'Only Night Sky Live says with an astronomer.'),
            ('What happens if you arrive after the show has started?',
             ('You get a refund', 'You cannot go in', 'You wait at the back',
              'You move to another date'), 1,
             'Latecomers cannot be admitted once the dome is dark.'),
        ],
        exam=[
            ('How much will Mr Osei’s group pay per person?',
             ('$4', '$6', '$11', '$14'), 0,
             'Fourteen people is ten or more, so the group rate of $4 applies to any show.'),
            ('Why does the email mention 18.55?',
             ('The show starts then', 'The doors close then', 'The box office closes then',
              'The drinks are served then'), 1,
             'The doors close at 18.55 for a 19.00 start, which is why latecomers cannot enter.'),
            ('Why should the group buy drinks before the show?',
             ('They are cheaper then', 'There is no interval', 'The bar closes at seven',
              'Drinks are not allowed in the dome'), 1,
             'The email gives the reason directly. Nothing is said about price or a ban.'),
            ('What can Mr Osei do if the date becomes impossible?',
             ('Get his money back', 'Move the booking once, free of charge',
              'Send different people', 'Book a second show at half price'), 1,
             'Tickets are not refundable but may be moved once — the notice and the email agree.'),
            ('By when must a change of date be requested?',
             ('On the day', '24 hours before', '48 hours before', 'One week before'), 2,
             'Up to 48 hours beforehand, in the email’s fourth paragraph.'),
            ('What can be inferred about Mr Osei?',
             ('He works at the planetarium', 'He organises a student society',
              'He is studying astronomy', 'He has booked before'), 1,
             'The email goes to astro.society@hillcrest.edu and he books for a group of fourteen. '
             'Nothing says he studies the subject or has booked before.'),
        ],
    ),

    r3=dict(
        sub='Looking for other planets',
        title='Looking for Other Planets',
        words=270,
        paras=[
            'For most of the twentieth century nobody knew whether any star other than the Sun '
            'had planets. The problem was not that such planets were far away. It was that they '
            'were invisible. A planet gives out no light of its own, and the star beside it is '
            'perhaps a billion times brighter. Looking for a planet directly is like trying to '
            'see a moth beside a searchlight.',
            'The solution was to stop looking for the planet and start watching the star. A '
            'planet pulls on the star it circles, and that pull moves the star very slightly '
            'towards us and away from us. The movement is tiny — a few metres a second, slower '
            'than a person running — but it changes the colour of the starlight by a measurable '
            'amount. The first planet around an ordinary star was found this way in 1995.',
            'A second method is simpler still. If a planet passes in front of its star, the star '
            'gets slightly fainter for a few hours. The drop is often less than one per cent, so '
            'it takes an accurate instrument and a great deal of patience, and it only works when '
            'the planet’s path happens to lie between us and the star. Even so, this method has '
            'found the great majority of the five thousand planets now known. Neither method '
            'shows us a planet. Both of them show us a star behaving as though something is '
            'there.',
        ],
        skill=('Follow a method, not a story',
               ['A passage that explains a method usually has one problem and two solutions. '
                'Mark them as you read.',
                'Comparisons carry the meaning: brighter, slower, fainter, simpler. Note what '
                'is being compared with what.',
                'Numbers in this kind of passage are almost always tested. Note the unit as '
                'well as the number.',
                'The final sentence often states the limitation. Inference questions live there.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why stars are brighter than planets', 'How planets around other stars are found',
              'The discovery of 1995', 'Why telescopes are not accurate enough'), 1,
             'The problem comes in paragraph 1 and two methods follow. The 1995 discovery is one '
             'example inside the first method.'),
            ('The word "invisible" in paragraph 1 is closest in meaning to',
             ('very small', 'impossible to see', 'moving quickly', 'far away'), 1,
             'The author explicitly separates distance from the real problem in the sentence before.'),
            ('Why does the author mention a moth and a searchlight?',
             ('To show how small planets are', 'To explain why direct looking fails',
              'To describe a type of telescope', 'To compare two kinds of star'), 1,
             'It is an image for the brightness problem, not a statement about size.'),
            ('According to paragraph 2, what does a planet do to its star?',
             ('It makes it brighter', 'It moves it slightly', 'It changes its temperature',
              'It slows it down'), 1,
             'A planet pulls on the star, moving it towards us and away from us.'),
        ],
        exam=[
            ('How fast does the star’s movement described in paragraph 2 appear to be?',
             ('Faster than light', 'About the speed of a running person',
              'A few kilometres a second', 'Too slow to measure'), 1,
             'A few metres a second, slower than a person running. It is slow but it is measurable.'),
            ('What makes the second method work?',
             ('The star gets slightly fainter', 'The planet reflects more light',
              'The star changes colour', 'The planet moves faster'), 0,
             'The colour change belongs to the first method; the dimming belongs to the second.'),
            ('All of the following are true of the second method EXCEPT:',
             ('It needs an accurate instrument', 'It needs patience',
              'It works for every planet', 'It has found most known planets'), 2,
             'It only works when the planet’s path lies between us and the star — the author says so.'),
            ('The word "drop" in paragraph 3 refers to',
             ('a fall in brightness', 'a fall in temperature', 'a change of colour',
              'a change of speed'), 0,
             'The sentence before describes the star getting fainter, so the drop is in brightness.'),
            ('What can be inferred about planets found before 1995?',
             ('There were none', 'Only planets around the Sun were known',
              'They were found by the second method', 'They were larger than Jupiter'), 1,
             'The first planet around an ordinary star was found in 1995, so what was known before '
             'was our own system.'),
            ('What does the author suggest in the last two sentences?',
             ('Both methods are unreliable', 'Neither method observes a planet directly',
              'The two methods contradict each other', 'A third method will be needed'), 1,
             'Neither shows us a planet; both show a star behaving as though something is there.'),
            ('Which best states the main idea of paragraph 3?',
             ('A simpler method works, but only sometimes', 'Instruments are now very accurate',
              'Five thousand planets have been counted', 'Patience matters more than equipment'), 0,
             'The paragraph gives the method, its difficulty, its one condition, and its success rate.'),
        ],
    ),

    l1=dict(
        sub='A planetarium evening',
        caption='Two students choose between two shows',
        skill=('Listen for the comparison',
               ['When two speakers compare two things, the question will ask which one and why.',
                'Note the reason, not only the choice. Reasons are what get tested.',
                'Words like but, though, actually and the thing is signal the turning point.',
                'Decide and mark as you listen. In Listening there is no going back.']),
        warm=[
            ('Man: Which show did you book?',
             ('At seven o’clock.', 'The Thursday one.', 'It was very good.',
              'Fourteen people.'), 1,
             'Which wants one of the options, not a time or an opinion.'),
            ('Woman: Is the Saturday show more expensive?',
             ('Yes, but there’s a real astronomer.', 'It lasts fifty minutes.',
              'At the planetarium.', 'No, I haven’t booked.'), 0,
             'A yes/no question about price. The length and the place answer different questions.'),
            ('Man: We should get there early.',
             ('It was dark inside.', 'I agree — the doors close at five to.',
              'The tickets were nine dollars.', 'No, I didn’t see it.'), 1,
             'A suggestion is answered by agreeing or disagreeing with it.'),
        ],
        script=[
            ('Woman', 'So, Thursday or Saturday?'),
            ('Man', 'Saturday looks better. There’s an actual astronomer, and you can ask questions.'),
            ('Woman', 'It’s also the most expensive one. Fourteen dollars.'),
            ('Man', 'Eight for us. We’ve got student cards.'),
            ('Woman', 'True. But there are twelve of us, so we’d get the group rate anyway — four '
                      'dollars each, any show.'),
            ('Man', 'Four? Then price isn’t really the question.'),
            ('Woman', 'No. The question is Saturday evening. Half the group works weekends.'),
            ('Man', 'Ah. I hadn’t thought of that.'),
            ('Woman', 'Thursday’s show is longer anyway. Sixty minutes instead of fifty.'),
            ('Man', 'Fine, Thursday. Although I did want to ask about the new telescope.'),
            ('Woman', 'Email them. Honestly, they answer.'),
        ],
        items=[
            ('What are the speakers mainly discussing?',
             ('Which planetarium to visit', 'Which show to book',
              'How much student tickets cost', 'When the astronomer is available'), 1,
             'The first line sets the question and the last line answers it.'),
            ('Why does the man prefer Saturday at first?',
             ('It is cheaper', 'It is shorter', 'An astronomer is there',
              'More of the group is free'), 2,
             'There’s an actual astronomer, and you can ask questions.'),
            ('What does the woman say about the price?',
             ('Saturday is too expensive for students', 'The group rate makes price irrelevant',
              'Thursday is the cheapest show', 'Student cards are not accepted'), 1,
             'At four dollars each for any show, the man concludes price isn’t really the question.'),
            ('What is the real reason they choose Thursday?',
             ('It is longer', 'It is cheaper', 'Half the group works at weekends',
              'The astronomer is busy'), 2,
             'The length is mentioned afterwards as an extra; the weekend work is the deciding reason.'),
            ('What does the woman mean when she says "Honestly, they answer"?',
             ('The staff reply to emails', 'The show answers his question',
              'The astronomer is honest', 'He should ask in person'), 0,
             'She is telling him that emailing the planetarium will work.'),
            ('What will the man probably do about the telescope?',
             ('Go on Saturday instead', 'Ask during the show', 'Write to the planetarium',
              'Nothing'), 2,
             'She advises him to email them and he does not object.'),
        ],
    ),

    l2=dict(
        sub='A planetarium evening',
        caption='The planetarium evening is moved',
        poster=['Worlds Beyond moves to 19.30',
                'Meet at the Mill Street entrance',
                'Group rate confirmed: $4 each'],
        skill=('Write the old detail beside the new one',
               ['An announcement is usually a correction. Note what it replaces.',
                'Time, place, price, and what to bring — these four are tested almost every time.',
                'Listen past the change for the reason. Because and due to carry marks.',
                'The final instruction is nearly always a question.']),
        warm=[
            ('Woman: What time does it start now?',
             ('At the Mill Street entrance.', 'Half past seven.', 'It lasts an hour.',
              'Because of the roadworks.'), 1,
             'What time wants a clock time; the others answer where, how long and why.'),
            ('Man: Do we still get the group rate?',
             ('Fourteen of us.', 'Yes, four dollars each.', 'At the box office.',
              'It was confirmed last week.'), 1,
             'The only option that confirms the rate itself.'),
            ('Woman: Should I bring my student card?',
             ('It’s cheaper for students.', 'No need — you’re on the group list.',
              'I left mine at home.', 'The card costs five dollars.'), 1,
             'A should-I question wants advice, and this one gives it with a reason.'),
        ],
        script=[
            ('Woman', 'Quick announcement for everyone coming to the planetarium on Thursday. '
                      'The show now starts at half past seven, not seven, because the earlier '
                      'screening ran over last week and they want a proper gap between them. '
                      'That means we meet at the Mill Street entrance at seven fifteen, not at '
                      'quarter to. The box office has confirmed the group rate, so it is four '
                      'dollars each and you do not need your student card — you are all on one '
                      'list under the society’s name. One more thing: the doors close five '
                      'minutes before the start and they will not let anyone in afterwards, so '
                      'please do not be a latecomer. If you can no longer come, tell me by '
                      'Wednesday lunchtime, because the box office charges us for empty seats.'),
        ],
        items=[
            ('What is the main purpose of the announcement?',
             ('To cancel the visit', 'To give a new time and meeting point',
              'To sell tickets', 'To describe the show'), 1,
             'Two details change, and both are times and places.'),
            ('Why has the start time changed?',
             ('The group is larger', 'There are roadworks',
              'The earlier screening ran over', 'The astronomer is late'), 2,
             'Stated with because, which is where the reason usually sits.'),
            ('What time should the group meet?',
             ('6.45', '7.00', '7.15', '7.30'), 2,
             'Seven fifteen, not quarter to — the old time is given so you can hear the difference.'),
            ('Why is a student card not needed?',
             ('The show is free', 'Everyone is on one group list',
              'The box office is closed', 'Cards are not accepted'), 1,
             'You are all on one list under the society’s name, so the group rate applies.'),
            ('Why must students say if they cannot come?',
             ('The seats cost the society money', 'The box office needs names',
              'The doors close early', 'The group rate needs ten people'), 0,
             'Because the box office charges us for empty seats.'),
        ],
    ),

    l3=dict(
        sub='Looking for other planets',
        caption='A talk on measuring distance in space',
        board=['1  Radar — the Moon and planets', '2  Parallax — nearby stars',
               '3  Standard candles — other galaxies', 'Each step checks the one below'],
        skill=('Hear the structure before the detail',
               ['A talk with numbered points on a board will follow those numbers. Use them '
                'as a frame.',
                'Each point usually gets a definition, an example and a limitation. Expect all three.',
                'The limitation of one method is almost always the reason for the next one.',
                'What the speaker says last is what the talk was for.']),
        warm=[
            ('Man: Did you follow the part about parallax?',
             ('It’s on the board.', 'Not entirely — did you?', 'At three o’clock.',
              'Yes, the lecture was long.'), 1,
             'A did-you-follow question asks whether you understood.'),
            ('Woman: How far away is the nearest star?',
             ('About four light years.', 'With a telescope.', 'In 1995.',
              'Yes, it’s very far.'), 0,
             'How far wants a distance.'),
            ('Man: Can I borrow your notes?',
             ('I took them in the lecture.', 'Of course — I’ll send a photo.',
              'They were about parallax.', 'The lecture is on Thursday.'), 1,
             'A request is answered by granting or refusing it.'),
        ],
        script=[
            ('Professor', 'Everything in astronomy depends on one question: how far away is it? '
                          'And there is no single answer, because no one method works at every '
                          'distance. Look at the board. For the Moon and the nearer planets we '
                          'can simply bounce a radar signal off them and time how long it takes '
                          'to come back. That gives us a distance accurate to a few centimetres. '
                          'But radar is useless beyond our own system: the signal would take '
                          'years and come back too weak to detect. So for nearby stars we use '
                          'parallax. Hold your thumb up and close one eye, then the other — your '
                          'thumb appears to jump. The Earth does the same thing as it moves '
                          'around the Sun, and the nearest stars appear to shift against the '
                          'ones behind them. Measure the shift and geometry gives you the '
                          'distance. Parallax, though, runs out at a few thousand light years, '
                          'because the shift becomes too small to measure. Beyond that we use '
                          'objects whose real brightness we already know — standard candles. If '
                          'you know how bright something really is, and you can see how bright '
                          'it looks, you know how far away it is. Now, notice what we have here. '
                          'Each method is calibrated against the one below it. Radar checks '
                          'parallax; parallax checks the candles. The whole distance ladder '
                          'rests on the bottom rung.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Radar is the most accurate method',
              'Distance is measured by a ladder of methods that check each other',
              'Parallax was discovered before radar',
              'Astronomers disagree about distances'), 1,
             'The last three sentences name it: each method is calibrated against the one below.'),
            ('Why does the speaker ask students to hold up a thumb?',
             ('To show how small a star is', 'To demonstrate parallax',
              'To explain how radar works', 'To compare two eyes'), 1,
             'It is a physical demonstration of the apparent shift parallax depends on.'),
            ('Why can radar not be used for stars?',
             ('Stars are too bright', 'Stars move too quickly',
              'The signal would be too weak when it returned', 'Radar is not accurate enough'), 2,
             'It would take years and come back too weak to detect. Accuracy is radar’s strength, '
             'not its problem.'),
            ('What is the limitation of parallax?',
             ('It only works in summer', 'The shift becomes too small beyond a few thousand '
              'light years', 'It needs two telescopes', 'It cannot be checked'), 1,
             'Stated directly, and it is the reason the third method exists.'),
            ('What is a standard candle?',
             ('An object whose real brightness is known', 'A very bright star',
              'A unit of distance', 'A type of telescope'), 0,
             'Objects whose real brightness we already know — the definition is given in the sentence.'),
            ('What does the speaker mean by "the bottom rung"?',
             ('The nearest galaxies', 'The method used for the greatest distances',
              'The radar measurements everything else is checked against',
              'The oldest method in astronomy'), 2,
             'Radar checks parallax and parallax checks the candles, so radar is the rung the '
             'ladder rests on.'),
        ],
    ),

    sp=[
        dict(sub='The Moon and early observation', focus='long numbers and units',
             skill=('Say the number, not the digits',
                    ['Practise groups: three hundred and eighty thousand, not three-eight-zero.',
                     'Units matter. Kilometres, light years and per cent are all tested.',
                     'Keep a steady speed. A number said slowly and correctly scores better '
                     'than one rushed.',
                     'If you misread a number, correct it and carry on — do not restart.']),
             repeat=['The Moon is visible tonight.',
                     'It takes about twenty-nine days.',
                     'The distance is roughly three hundred and eighty thousand kilometres.',
                     'Greek astronomers estimated it to within ten per cent.',
                     'Early observers measured the interval between one full moon and the next.',
                     'The telescope arrived in sixteen hundred and nine, long after the first measurements.',
                     'Their figures were accurate because the method was careful, not because the instruments were good.'],
             theme='the night sky where you live',
             qs=['To begin, can you see stars from where you live?',
                 'People react differently to a clear night sky. How do you feel when you look '
                 'up at it, and why do you think that is?',
                 'Some people say that cities should turn off more lights at night so that the '
                 'sky is visible. Do you agree? Why or why not?',
                 'Finally, do you think learning about astronomy is useful for an ordinary '
                 'person? Why or why not?'],
             model=[(1, 'Not many. I live near the centre of the city, so I can usually see the '
                        'Moon and maybe three or four stars, and that is all.'),
                    (3, 'I do agree, partly. It would save energy as well as showing the sky, so '
                        'there are two reasons rather than one.')],
             selfcheck=['I said long numbers in groups, not digit by digit',
                        'I began speaking without a long pause',
                        'I gave a reason after every opinion']),
        dict(sub='A planetarium evening', focus='comparing two options out loud',
             skill=('Compare, then choose',
                    ['Say both sides before you choose: one is cheaper, but the other is longer.',
                     'Use the comparative forms from this unit: more expensive, the most useful.',
                     'Then commit: In the end I would choose… because…',
                     'Do not list three reasons badly. Give one reason well.']),
             repeat=['The Thursday show is longer.',
                     'Saturday is the most expensive evening.',
                     'The group rate is cheaper than the student price.',
                     'We should arrive earlier than the time on the ticket.',
                     'The dome is darker and quieter than an ordinary cinema.',
                     'The show with the astronomer is more interesting, but it is harder to get to.',
                     'Of the three evenings, the one on Thursday suits the largest number of people in our group.'],
             theme='whether space travel interests you',
             qs=['First, have you ever been to a planetarium or an observatory?',
                 'People find space either exciting or distant. Which is it for you, and why?',
                 'Some people believe that human beings should travel to Mars. Do you agree '
                 'that this is worth doing? Why or why not?',
                 'One last question. Should governments pay for space exploration, or should '
                 'private companies do it? Why?'],
             model=[(2, 'Exciting, definitely. I know it is far away, but that is exactly what I '
                        'like about it — it makes ordinary problems feel smaller.'),
                    (4, 'I think governments should, because a private company has to make money '
                        'and some research will never make any.')],
             selfcheck=['I gave both sides before I chose',
                        'I used at least two comparative or superlative forms',
                        'I finished every sentence I started']),
        dict(sub='Looking for other planets', focus='academic register',
             skill=('Borrow the passage’s own words',
                    ['Use this unit’s academic set: estimate, detect, confirm, approximate, '
                     'phenomenon.',
                     'Explain a method in steps: first…, then…, which means that…',
                     'The fourth question is the most abstract. Give an opinion, a reason and '
                     'one example.',
                     'Mark yourself against the three statements below.']),
             repeat=['Astronomers detect planets indirectly.',
                     'The star appears to move very slightly.',
                     'A planet passing in front of a star reduces its brightness.',
                     'This phenomenon can be measured with an accurate instrument.',
                     'Scientists confirm a discovery before they announce it publicly.',
                     'The method only works when the planet’s path lies between us and the star.',
                     'Neither technique shows us a planet directly; both reveal a star behaving as though something is there.'],
             theme='whether governments should fund science',
             qs=['To start, did you study any science at school that you enjoyed?',
                 'People feel differently about spending on research. How do you react when you '
                 'hear the cost of a space mission, and why?',
                 'Some people argue that money spent on astronomy would be better spent on '
                 'problems here on Earth. Do you agree? Why or why not?',
                 'Finally, should scientific discoveries be shared freely between countries, or '
                 'kept by the country that paid for them? Why?'],
             model=[(3, 'I understand the argument, but I do not agree. One reason is that the '
                        'instruments built for astronomy end up being used in hospitals.'),
                    (4, 'They should be shared. A discovery that is kept secret is only useful '
                        'once, and a discovery that is shared is useful everywhere.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I explained one idea in steps (first…, then…)',
                        'My last answer had an opinion, a reason and an example']),
    ],

    w1=dict(
        sub='The Moon and early observation',
        skill=('Find the comparison word first',
               ['If a tile says more, less, -er or the most, the sentence is a comparison. '
                'Build around it.',
                'How far, how long, how much and which are the question words this unit uses.',
                'Than always follows a comparative. The most and the -est take the before them.',
                'Use every tile once. A leftover tile means a wrong order.']),
        guided=[
            ('The Moon is 380,000 kilometres away.',
             ['far', 'how', 'is', 'the', 'Moon'],
             'How far is the Moon?'),
            ('Jupiter is bigger than all the other planets.',
             ['is', 'which', 'the', 'planet', 'biggest'],
             'Which is the biggest planet?'),
            ('The Thursday show lasts sixty minutes.',
             ['show', 'which', 'is', 'longer', 'the'],
             'Which is the longer show?'),
        ],
        exam=[
            ('Saturday costs fourteen dollars.',
             ['much', 'how', 'does', 'cost', 'Saturday'],
             'How much does Saturday cost?'),
            ('Parallax stops working after a few thousand light years.',
             ['does', 'how', 'far', 'parallax', 'work'],
             'How far does parallax work?'),
            ('Radar is more accurate than parallax.',
             ['which', 'is', 'more', 'method', 'accurate'],
             'Which method is more accurate?'),
            ('The first planet was found in 1995.',
             ['the', 'when', 'was', 'first', 'found', 'planet'],
             'When was the first planet found?'),
            ('The star that moves is the one with a planet.',
             ['the', 'star', 'that', 'moves', 'has', 'a', 'planet'],
             'The star that moves has a planet.'),
            ('The drop in brightness is less than one per cent.',
             ['is', 'how', 'big', 'the', 'drop'],
             'How big is the drop?'),
            ('Five thousand planets are known today.',
             ['planets', 'how', 'many', 'are', 'known'],
             'How many planets are known?'),
        ],
    ),
    w2=dict(
        sub='A planetarium evening',
        to='boxoffice@hillcrestplanetarium.org',
        date='02/10/2025',
        subject='Group booking — Worlds Beyond, 9 October',
        scenario=[
            'You are the secretary of your university astronomy society. Fourteen members want '
            'to see Worlds Beyond on Thursday 9 October, and the programme says that groups of '
            'ten or more pay a group rate.',
            'Write an email to the box office to make the booking.',
        ],
        bullets=['Say who you are and what you want to book.',
                 'Give the numbers the box office needs.',
                 'Ask about one thing the programme does not tell you.'],
        skill=('Put the facts where they can be seen',
               ['A booking email is read quickly. Put the date, the show and the number on '
                'their own line or in their own sentence.',
                'Do not apologise or explain at length. Say what you want.',
                'One question only, and make it a question the reader can answer in one line.',
                'Seven minutes is 110–140 words. Count once, in practice, so you know the feel.']),
        model=[
            'Dear Box Office,',
            'I am writing on behalf of the Hillcrest University Astronomy Society. We would like '
            'to book Worlds Beyond on Thursday 9 October at seven o’clock.',
            'There will be fourteen of us: twelve students and two members of staff. As this is '
            'more than ten, I believe we qualify for the group rate of four dollars each, which '
            'would come to fifty-six dollars in total. Please tell me if that is not correct.',
            'One thing the programme does not say: is there anywhere inside the building where a '
            'group can leave bags during the show? Several of us will be coming straight from a '
            'laboratory session.',
            'I look forward to hearing from you.',
            'Kind regards,',
            'Kwame Osei, Secretary',
        ],
        notes=['The show, the day and the time are all in the first short paragraph, where a '
               'busy reader will find them.',
               'The numbers paragraph does the arithmetic for the reader and invites a correction.',
               'The question is specific and answerable in one line, and the reason for asking '
               'is given.',
               'The register is polite but not elaborate — which is exactly what seven minutes '
               'allows.'],
    ),
    w3=dict(
        sub='Looking for other planets',
        prof='Dr Rahman',
        question='Space agencies now spend billions of dollars searching for planets around '
                 'other stars, even though we will probably never visit one. Is money spent on '
                 'space exploration money well spent? Why or why not?',
        posts=[('Yuki', 'w',
                'I think it is. Almost everything we use to look at space ends up being used for '
                'something else. The detectors built for telescopes are now in hospital scanners. '
                'You cannot know in advance which piece of research will turn out to matter.'),
               ('Tomas', 'm',
                'That argument proves too much. You could say it about any spending at all. '
                'Meanwhile we have problems on this planet that we know how to solve and simply '
                'do not fund. I would rather pay for clean water now than for a photograph of a '
                'planet nobody will ever reach.')],
        skill=('Answer the strongest post, not the easiest one',
               ['Take on whichever post you find hardest to argue with. That is where the marks are.',
                'Name the student. It shows the rater you read the thread.',
                'Add one idea neither post contains — agreeing twice earns nothing.',
                'At least 100 words. Six or seven sentences at this level.']),
        starters=['Tomas is right that…, but I think he underestimates…',
                  'Yuki’s point about… is the strongest one here, because…',
                  'Both posts assume that… In fact,…',
                  'I would put it differently:…'],
        model=[
            'Tomas makes the stronger argument, and I want to answer it directly rather than '
            'repeat what Yuki said.',
            'He is right that the research argument proves too much on its own. But there is a '
            'difference between spending we could redirect and spending we actually would. Clean '
            'water is not short of money because of telescopes; it is short of money because of '
            'politics. Cancelling the telescope would not build a single well.',
            'I would add something neither post mentions. The search for other planets has '
            'already changed how people think about this one. Before 1995 we had no idea whether '
            'our system was ordinary or rare. Knowing that planets are everywhere, and that none '
            'of the nearby ones look habitable, makes the argument for looking after this planet '
            'stronger, not weaker.',
        ],
        model_words=152,
    ),

    gram=dict(
        title='Comparatives and superlatives',
        headers=['Form', 'Example'],
        rows=[
            ['Short adjective + -er / -est', 'bright → brighter → the brightest'],
            ['-y → -ier / -iest', 'heavy → heavier → the heaviest'],
            ['Long adjective: more / the most', 'accurate → more accurate → the most accurate'],
            ['Irregular', 'good → better → the best; bad → worse → the worst'],
            ['than after a comparative', 'Radar is more accurate than parallax.'],
            ['the before a superlative', 'Saturday is the most expensive evening.'],
            ['Comparing amounts', 'more light · less light · fewer planets'],
        ],
        notes=[
            'One syllable takes -er. Three syllables take more. Two-syllable adjectives go both '
            'ways, but if it ends in -y it takes -ier.',
            'Less goes with things you cannot count (less light, less time). Fewer goes with '
            'things you can (fewer planets, fewer seats). The test does check this.',
            'A comparative needs something to compare with, even when it is not spoken: '
            'Thursday is longer [than Saturday].',
        ],
        watch='Never write *more brighter* or *the most brightest*. Use one form or the other, '
              'never both.',
        ex=[
            ('Write the comparative and the superlative.',
             ['far → __________ → __________',
              'accurate → __________ → __________',
              'heavy → __________ → __________',
              'good → __________ → __________',
              'visible → __________ → __________',
              'large → __________ → __________'],
             ['farther / the farthest', 'more accurate / the most accurate',
              'heavier / the heaviest', 'better / the best',
              'more visible / the most visible', 'larger / the largest']),
            ('Complete with less or fewer.',
             ['There are __________ stars visible from the city.',
              'The dome lets in __________ light than a cinema.',
              '__________ people came on Thursday than on Saturday.',
              'The second method needs __________ patience, not more.'],
             ['fewer', 'less', 'Fewer', 'less']),
            ('Correct the mistake in each sentence.',
             ['Saturday is the most expensivest evening.',
              'Radar is more accurate that parallax.',
              'This telescope is more big than that one.'],
             ['the most expensive', 'more accurate than parallax', 'bigger than that one']),
        ],
        bas='Build a Sentence uses comparison inside questions: Which is the biggest planet? '
            'How much does Saturday cost? Notice that a which question about the subject needs '
            'no auxiliary at all.',
    ),

    rev=dict(
        vocab=[
            ('to say about how much or how many', 'estimate'),
            ('exact in every detail', 'precise'),
            ('to notice something hard to see', 'detect'),
            ('able to be seen', 'visible'),
            ('the smallest possible amount', 'minimum'),
            ('extremely large', 'enormous'),
            ('to show that something is true', 'confirm'),
            ('an idea you test to see if it is true', 'hypothesis'),
            ('something people notice and study', 'phenomenon'),
            ('the time between two events', 'interval'),
            ('a lower price for several people together', 'group rate'),
            ('money given back to you', 'refund'),
        ],
        gram=[
            ('Radar is __________ (accurate) than parallax.', 'more accurate'),
            ('Saturday is __________ (expensive) evening of the three.', 'the most expensive'),
            ('There are __________ (few) stars visible in the city.', 'fewer'),
            ('The dome is __________ (dark) than a cinema.', 'darker'),
            ('Which method is __________ (good) for nearby stars?', 'better'),
            ('That was __________ (bad) show I have ever seen.', 'the worst'),
            ('This instrument needs __________ (little) patience, not more.', 'less'),
            ('The Moon is __________ (close) object in space.', 'the closest'),
        ],
        mini=[
            ('According to the passage on page 34, the first planet around an ordinary star '
             'was found by',
             ('photographing it directly', 'watching the star move',
              'measuring the star’s temperature', 'radar'), 1,
             'The 1995 discovery belongs to the first method, which watches the star move.'),
            ('In the talk, radar cannot be used for stars because',
             ('stars are too bright', 'the signal would come back too weak',
              'stars move too fast', 'radar is not accurate'), 1,
             'It would take years and return too weak to detect.'),
            ('Which sentence is correct?',
             ('Saturday is more expensiver.', 'There are less seats on Thursday.',
              'Radar is more accurate than parallax.', 'It is the most brightest star.'), 2,
             'Two of the others double the comparative, and one uses less with a countable noun.'),
            ('The group rate at the planetarium applies to groups of',
             ('five or more', 'eight or more', 'ten or more', 'fifteen or more'), 2,
             'Ten or more, in the small print under the programme.'),
            ('In Complete the Words, an ending of three dashes after a verb stem is most likely',
             ('-ed', '-ing', '-est', '-er'), 1,
             '-ing is three letters; -ed and -er are two. -est fits an adjective, not a verb stem.'),
            ('The first questions in an adaptive module matter most because',
             ('they are the easiest', 'they decide the level of what comes next',
              'they are worth more marks', 'they cannot be changed'), 1,
             'Performance early in a module sets the difficulty of the next one.'),
        ],
    ),
    tip='The first questions in a module carry the most weight, because they are what places '
        'you. Never rush them to save time for later ones — the later ones are chosen on the '
        'strength of how you answered the early ones.',
)
