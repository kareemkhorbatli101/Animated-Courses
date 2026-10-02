# -*- coding: utf-8 -*-
"""Unit 16 · Cities and How People Live."""

UNIT = dict(
    n=16, vol=2, title='Cities and How People Live',
    icons=('city', 'people', 'chart'),
    subs=('Why people move to cities', 'Campus housing', 'Transport and distance'),
    grammar='as…as, more than, less than',
    field='population, density, movement',
    opener_line='Everything in this unit is a comparison between two places, so the grammar is '
                'the grammar of equality and difference. Unit 2 did the comparative; this unit '
                'does the rest of it.',

    candos=[
        'complete word endings in a text about why people move',
        'read a housing page and an email about a room change and find the condition',
        'follow a passage that explains how a city spreads',
        'understand two people weighing two places to live',
        'compare two options out loud and commit to one',
        'write an email requesting a change, and a post that reframes a question',
    ],

    acad=[
        ('domestic', 'inside one country; or of the home'),
        ('area', 'a part of a place or surface'),
        ('transit', 'the movement of people or goods through a place'),
        ('vehicle', 'a machine for carrying people or goods'),
        ('via', 'by way of'),
        ('accommodate', 'to provide room for'),
        ('displace', 'to force out of a place'),
        ('subsidy', 'money paid to reduce the cost of something'),
        ('grant', 'money given for a purpose; to give formally'),
        ('levy', 'a charge collected by an authority'),
        ('legal', 'allowed or required by law'),
        ('legislate', 'to make laws'),
        ('regime', 'a system of rules or government'),
        ('equip', 'to supply what is needed'),
        ('option', 'a choice'),
        ('select', 'to choose'),
        ('seek', 'to look for or try to obtain'),
        ('pose', 'to present a problem or question'),
        ('circumstance', 'a fact or condition affecting a situation'),
        ('trend', 'a general direction of change'),
        ('scenario', 'a possible sequence of events'),
        ('forthcoming', 'about to happen'),
        ('temporary', 'lasting only a short time'),
        ('overseas', 'in or to another country across the sea'),
    ],
    campus=[
        ('halls of residence', 'university buildings where students live'),
        ('flat share', 'a flat rented by several people together'),
        ('rent', 'money paid regularly for a place to live'),
        ('deposit', 'money held as security and returned later'),
        ('landlord', 'the owner who rents a property to you'),
        ('bus pass', 'a ticket allowing many bus journeys'),
        ('commute', 'the regular journey between home and study or work'),
        ('viewing', 'an arranged visit to look at a property'),
        ('utilities', 'services such as gas, water and electricity'),
        ('housemate', 'someone you share a house with'),
        ('waiting list', 'a list of people waiting for something'),
        ('inventory', 'a list of what is in a property and its condition'),
    ],
    vocab_talk=[
        'Would you rather live in the centre and pay more, or further out and commute? Why?',
        'What trend have you noticed in the area where you grew up?',
        'What does your university do to accommodate students who arrive late?',
        'Name one circumstance that would make you move city tomorrow.',
    ],
    again=['region', 'estimate', 'proportion', 'impact', 'significant', 'transport', 'migrate', 'route'],

    r1=dict(
        sub='Why people move to cities',
        skill=('Comparative endings are short',
               ['-er is two dashes, -est is three, -ier is three. Count before you write.',
                'Nouns of movement and quantity: -ation, -ment, -ity.',
                'A gap after a number is a plural; a gap after the is a noun.',
                'Read the sentence back with your ending in place.']),
        guided_text='More than half the world now lives in cities, and the proport--- is still '
                    'rising. People do not move because cities are pleas---. They move because '
                    'a city off--- more different kinds of work within reach of one bus journey '
                    'than a village can offer in a life----. Choice, not comfort, is what pu--- '
                    'people in.',
        guided_hint='1  proport---  →  ion  (proportion)',
        guided=['ion', 'ant', 'ers', 'time', 'lls'],
        exam_text='Ask somebody why they moved to a city and they will usually say work. That is '
                  'true, and it is less inform----- than it sounds, because there was work in '
                  'the village too. What a city offers is not work but opt----: hundreds of '
                  'employers within an hour, so that losing one job does not mean losing your '
                  'home. Economists call this a thick labour mar---, and it explains something '
                  'the comfort explanation cannot. People move to cities that are expen----, '
                  'crowded and noi--, and they stay. They are not buying pleas---. They are '
                  'buying the ability to change their mind. The same logic works in reverse, '
                  'which is why a city that loses its vari--- of employers empties even when '
                  'the rents f---. One large factory closing can do more dam--- to a town than '
                  'ten small businesses closing, because the ten were the thing that made the '
                  'town surviv----.',
        exam=['ative', 'ions', 'ket', 'sive', 'sy', 'ure', 'ety', 'all', 'age', 'able'],
    ),

    r2=dict(
        sub='Campus housing',
        skill=('Find the deadline attached to the right group',
               ['Housing documents have different rules for different years and groups.',
                'Note who each deadline applies to before you answer.',
                'Money terms (deposit, rent, utilities) are nearly always tested.',
                'An email about a change usually names a condition for granting it.']),
        docs=[
            ('notice', 'Northgate Accommodation · applying for 2027–28', [
                '# Who is guaranteed a place',
                '* All first-year undergraduates who apply by 30 June.',
                '* Students from overseas in any year, if they apply by 30 June.',
                '# Everybody else',
                '* Returning students go on a waiting list, allocated in application order.',
                '* About two thirds of those on the list received an offer last year.',
                '# Costs',
                '* Rent includes utilities and internet. There is no separate bill.',
                '* A deposit of £250 is held and returned within 28 days of the inventory check.',
                '# Changing room',
                '* No changes in the first three weeks of term, except on medical grounds.',
                '* After that, changes are possible if somebody will swap with you.',
            ], 'web'),
            ('email', 's.novak@northgate.edu', 'accommodation@northgate.edu',
             '14/10/2027', 'Room change request — Block C, room 104', [
                 'Dear Ms Novak,',
                 '',
                 'Thank you for your request to move from room 104. We cannot act on it',
                 'this week, because we are still inside the three-week period in which',
                 'no changes are made except on medical grounds.',
                 '',
                 'From Monday 27 October we can help, but only by arranging a swap: we',
                 'have no empty rooms this year. If you find somebody willing to move',
                 'into 104, we will process both changes in a day.',
                 '',
                 'If the problem is noise rather than the room itself, it may be worth',
                 'speaking to the warden first. Several requests last year were about',
                 'something a conversation solved.',
                 '',
                 'Northgate Accommodation',
             ]),
        ],
        guided=[
            ('Who is guaranteed a place?',
             ('All students', 'First-years and overseas students who apply by 30 June',
              'Returning students', 'Anyone on the waiting list'), 1,
             'Both groups share the same deadline.'),
            ('What does the rent include?',
             ('Nothing extra', 'Utilities and internet', 'Utilities only',
              'Internet only'), 1,
             'And the notice adds that there is no separate bill.'),
            ('How much is the deposit?',
             ('£100', '£250', '£500', 'There is none'), 1,
             'Held and returned within 28 days of the inventory check.'),
            ('When can a room normally be changed?',
             ('At any time', 'Never', 'After the first three weeks',
              'Only in the first three weeks'), 2,
             'No changes in the first three weeks except on medical grounds.'),
        ],
        exam=[
            ('Why can the office not act this week?',
             ('There are no staff', 'It is within the three-week period',
              'The request was late', 'A medical note is needed'), 1,
             'Except on medical grounds, which does not apply here.'),
            ('How will a change be arranged after 27 October?',
             ('By allocating an empty room', 'By a swap with another student',
              'By a waiting list', 'By the warden'), 1,
             'We have no empty rooms this year.'),
            ('How quickly will a swap be processed?',
             ('Within a day', 'Within a week', 'Within 28 days', 'At the end of term'), 0,
             'We will process both changes in a day.'),
            ('What does the office suggest if the problem is noise?',
             ('Apply for a different block', 'Speak to the warden first',
              'Wait until next term', 'Record the noise'), 1,
             'Several requests last year were about something a conversation solved.'),
            ('What proportion of waiting-list students got an offer last year?',
             ('About a third', 'About a half', 'About two thirds', 'All of them'), 2,
             'Stated under Everybody else.'),
            ('What can be inferred about accommodation this year?',
             ('It is cheaper than last year', 'It is full',
              'Overseas students are prioritised after June', 'Deposits have risen'), 1,
             'We have no empty rooms this year, and returning students are on a waiting list.'),
        ],
    ),

    r3=dict(
        sub='Transport and distance',
        title='How Transport Decides the Shape of a City',
        words=280,
        paras=[
            'People have travelled about the same amount of time to work for as long as anybody '
            'has measured it: roughly half an hour each way, in medieval towns, in Victorian '
            'cities and in modern ones. The figure is remarkably stable across centuries and '
            'countries, and it is usually called Marchetti’s constant. What changes is not the '
            'time but the speed, and therefore the distance.',
            'That single fact explains the shape of almost every city. A walking city cannot be '
            'more than about five kilometres across, because nobody will live further than half '
            'an hour from work — and medieval cities are almost exactly that size, wherever you '
            'find them. Trams and trains stretched the half hour to fifteen kilometres, and '
            'cities grew outwards along the lines, producing the star shape still visible in '
            'older European suburbs. The car stretched it again, in every direction at once, '
            'which is why cities built after 1950 are round and low rather than star-shaped and '
            'dense.',
            'The uncomfortable consequence is that road building rarely reduces travel time for '
            'long. A faster road does not persuade people to spend less time travelling; it '
            'persuades them to live further away, until the half hour is used up again. '
            'Transport planners call this induced demand, and it is why the lanes added to a '
            'congested road are often full within a few years. The constant is the time, and the '
            'city rearranges itself around whatever speed it is given.',
        ],
        skill=('Follow one constant through three examples',
               ['When a passage names a constant, every example will illustrate it. Track the '
                'constant.',
                'A named effect (Marchetti’s constant, induced demand) is always tested.',
                'The consequence paragraph usually contains the inference questions.',
                'If a figure is repeated, it is the one the passage is built on.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why roads become congested', 'How travel time shapes the size of cities',
              'The history of trams', 'Why medieval cities were small'), 1,
             'One constant time, three speeds, three city shapes, and one consequence.'),
            ('What has stayed the same across centuries?',
             ('The distance travelled', 'The time spent travelling', 'The cost of travel',
              'The size of cities'), 1,
             'Roughly half an hour each way, which is why it is called a constant.'),
            ('Why can a walking city not be large?',
             ('Streets were narrow', 'Nobody will live more than half an hour from work',
              'Walls limited its size', 'Food could not be transported'), 1,
             'And the author notes that medieval cities are almost exactly that size.'),
            ('What shape did trams and trains produce?',
             ('Round and low', 'Star-shaped', 'Square', 'Long and thin'), 1,
             'Cities grew outwards along the lines, which is still visible in older suburbs.'),
        ],
        exam=[
            ('Why are cities built after 1950 round rather than star-shaped?',
             ('Planners preferred it', 'The car stretched the half hour in every direction',
              'Land was cheaper', 'Trams were removed'), 1,
             'In every direction at once, rather than along fixed lines.'),
            ('What is induced demand?',
             ('More people buying cars', 'New capacity being used up by people travelling '
              'further', 'Congestion at peak times',
              'Demand for public transport'), 1,
             'A faster road persuades people to live further away until the half hour is used up.'),
            ('All of the following are stated in the passage EXCEPT:',
             ('The half hour is stable across countries', 'Medieval cities were about five '
              'kilometres across', 'Trains extended the range to fifteen kilometres',
              'Road building always increases total travel time'), 3,
             'The passage says it rarely reduces travel time for long, which is not the same '
             'claim.'),
            ('The word "stable" in paragraph 1 is closest in meaning to',
             ('unchanging', 'reliable', 'increasing', 'measured'), 0,
             'It is contrasted with what changes, which is the speed.'),
            ('What can be inferred about adding lanes to a congested road?',
             ('It solves congestion permanently', 'It will probably fill up again',
              'It reduces the size of the city', 'It has no effect at all'), 1,
             'Often full within a few years — the passage says so almost directly.'),
            ('What does the author mean by "the city rearranges itself"?',
             ('Buildings are moved', 'People change where they live in response to speed',
              'Planners redesign the roads', 'Transport routes are rebuilt'), 1,
             'The constant is the time, so when speed changes, location changes.'),
            ('Which best states the main idea of paragraph 2?',
             ('Cities have grown steadily', 'The speed of transport sets the size of a city',
              'Trams were better than cars', 'Suburbs are older than centres'), 1,
             'Three speeds produce three sizes and shapes, which is the paragraph’s whole '
             'structure.'),
        ],
    ),

    l1=dict(
        sub='Campus housing',
        caption='Two students compare halls and a flat further out',
        skill=('Weigh two options as you listen',
               ['Each option will have a cost and an advantage. Note all four.',
                'A figure mentioned once is usually the one being compared.',
                'Listen for the thing neither of them had thought of — it often decides it.',
                'The decision is in the last two lines.']),
        warm=[
            ('Man: Are you staying in halls next year?',
             ('About two thirds.', 'I am still deciding.', 'In Block C.',
              'Yes, the rent includes utilities.'), 1,
             'A yes/no question about a plan, answered honestly.'),
            ('Woman: How much is the flat?',
             ('Four hundred and ten a month.', 'Twenty minutes on the bus.',
              'Three of us.', 'Yes, quite cheap.'), 0,
             'How much wants a price.'),
            ('Man: Does that include bills?',
             ('No — bills are on top.', 'Four hundred and ten.',
              'In the city centre.', 'Yes, it is cheaper.'), 0,
             'A does-it-include question wants a yes or no about what is covered.'),
        ],
        script=[
            ('Woman', 'The flat is four hundred and ten a month. Halls are four hundred and '
                      'ninety.'),
            ('Man', 'So the flat is eighty cheaper.'),
            ('Woman', 'That is what I thought until I looked at the halls contract. Halls '
                      'include utilities and internet. The flat does not.'),
            ('Man', 'How much are bills?'),
            ('Woman', 'Between sixty and ninety a month each, apparently, depending on the '
                      'winter.'),
            ('Man', 'Then they are the same, more or less. And the flat is twenty minutes out.'),
            ('Woman', 'Twenty-five. Which is a bus pass, another forty-five a month.'),
            ('Man', 'So the flat is actually more expensive.'),
            ('Woman', 'It is. But here is the thing nobody mentions. Halls are a forty-week '
                      'contract and the flat is fifty-two.'),
            ('Man', 'So you pay for the summer.'),
            ('Woman', 'You pay for the summer, and you can leave your things there, and you can '
                      'stay in the city if you get a summer job. Which I need.'),
            ('Man', 'That is not a small thing.'),
            ('Woman', 'No. I think it is the only thing, actually. The money is a wash either '
                      'way.'),
        ],
        items=[
            ('What are the speakers comparing?',
             ('Two flats', 'Halls and a flat', 'Two bus routes', 'Two summer jobs'), 1,
             'She names both prices in the first line.'),
            ('Why is the flat not really cheaper?',
             ('The rent rises in winter', 'Bills and a bus pass are extra',
              'The deposit is higher', 'It is further from the shops'), 1,
             'Sixty to ninety for bills and forty-five for the bus pass wipe out the eighty.'),
            ('How far out is the flat?',
             ('Fifteen minutes', 'Twenty minutes', 'Twenty-five minutes', 'Forty minutes'), 2,
             'The man says twenty and the woman corrects him to twenty-five.'),
            ('How long is the halls contract?',
             ('Forty weeks', 'Forty-five weeks', 'Fifty weeks', 'Fifty-two weeks'), 0,
             'Forty for halls against fifty-two for the flat.'),
            ('Why does the length of contract matter to the woman?',
             ('It is cheaper per week', 'She needs to stay in the city for a summer job',
              'She wants to travel', 'Her family lives nearby'), 1,
             'And she can leave her things there, which the forty-week contract does not allow.'),
            ('What does the woman mean by "the money is a wash"?',
             ('The flat is cheaper', 'The costs come out about the same',
              'The bills are unpredictable', 'She cannot afford either'), 1,
             'Which is why the contract length becomes the deciding factor.'),
        ],
    ),

    l2=dict(
        sub='Campus housing',
        caption='An announcement about housing applications',
        poster=['Apply by 30 June for a guaranteed place',
                'Returning students: waiting list, in order',
                'Rent includes utilities and internet'],
        skill=('Hear which group a deadline binds',
               ['A deadline may guarantee a place for one group and mean nothing for another.',
                'Note the order of allocation — first come, by year, or by need.',
                'A figure from last year is given to help you judge your chances, and is tested.',
                'The final instruction is usually a question.']),
        warm=[
            ('Woman: What is the deadline?',
             ('The thirtieth of June.', 'For first years.', 'On the waiting list.',
              'Yes, there is one.'), 0,
             'What is the deadline wants a date.'),
            ('Man: Am I guaranteed a place?',
             ('Two thirds got one.', 'Only if you are a first year or from overseas.',
              'By the thirtieth.', 'Yes, everybody is.'), 1,
             'An am-I question about status, answered with the condition.'),
            ('Woman: Is the deposit refundable?',
             ('It is two hundred and fifty.', 'Yes, within 28 days.',
              'At the inventory check.', 'No, it is rent.'), 1,
             'A yes/no question about the deposit, answered with the period.'),
        ],
        script=[
            ('Man', 'Housing applications for next year open on Monday and I want to be precise '
                    'about who is guaranteed what, because every year somebody misunderstands '
                    'this and it is expensive. If you are a first-year undergraduate, or a '
                    'student from overseas in any year, and you apply by the thirtieth of June, '
                    'you are guaranteed a place. Not a particular room, not a particular block, '
                    'but a place. If you are a returning home student, you are not guaranteed '
                    'anything. You go on a waiting list, and the list is in application order, '
                    'not in order of need, so applying on the first day genuinely matters. Last '
                    'year about two thirds of the people on that list ended up with an offer, '
                    'which means a third did not, and the third who did not were mostly people '
                    'who applied in August. One other thing. The rent figure includes utilities '
                    'and internet, so when you compare it with a private flat, add sixty to '
                    'ninety pounds a month to the flat before you decide which is cheaper. '
                    'Several people have told me afterwards that they wished somebody had said '
                    'that in May.'),
        ],
        items=[
            ('Who is guaranteed a place?',
             ('All students who apply by 30 June', 'First-years and overseas students who apply '
              'by 30 June', 'Only first-years', 'Returning students in application order'), 1,
             'And the speaker stresses that it is a place, not a particular room.'),
            ('How is the waiting list ordered?',
             ('By need', 'By year of study', 'By application order', 'By distance from home'), 2,
             'Not in order of need, so applying on the first day genuinely matters.'),
            ('What happened to a third of the list last year?',
             ('They were offered a room', 'They received no offer', 'They withdrew',
              'They were given private flats'), 1,
             'Two thirds received an offer, which means a third did not.'),
            ('What did most of those students have in common?',
             ('They were first years', 'They applied in August',
              'They were from overseas', 'They wanted a particular block'), 1,
             'The speaker names it as the pattern.'),
            ('Why does the speaker mention sixty to ninety pounds?',
             ('It is the deposit', 'It is what to add to a private flat before comparing',
              'It is the monthly rent rise', 'It is the bus pass'), 1,
             'Because the halls figure already includes utilities and internet.'),
        ],
    ),

    l3=dict(
        sub='Transport and distance',
        caption='A talk on density and the cost of living',
        board=['Half an hour each way — unchanged',
               'Speed → distance → city size',
               'Density → cost per person falls',
               'But land cost rises'],
        skill=('Hold two opposite effects together',
               ['A talk that gives one effect and then its opposite is testing whether you '
                'kept both.',
                'Note which effect wins, and under what condition.',
                'A number given for each side is almost certainly tested.',
                'The final sentence usually says what the speaker thinks follows.']),
        warm=[
            ('Woman: Did she say density raises or lowers costs?',
             ('Both — different costs.', 'On the board.', 'About half an hour.',
              'Yes, she did.'), 0,
             'The question offers two alternatives and the answer resolves it.'),
            ('Man: What is Marchetti’s constant?',
             ('Half an hour each way.', 'A transport planner.', 'In the reading.',
              'Yes, it is.'), 0,
             'A what-is question wants the definition.'),
            ('Woman: Could you repeat the figure for infrastructure?',
             ('It is on the board.', 'Of course — about forty per cent lower.',
              'Per person.', 'Yes, I can.'), 1,
             'A request to repeat is answered by repeating the figure.'),
        ],
        script=[
            ('Professor', 'Last week we established that the time people will travel is fixed at '
                          'about half an hour each way, and that the speed of transport therefore '
                          'sets the size of a city. Today, what density does to the cost of '
                          'living, and it does two opposite things, which is why the argument '
                          'never ends. First, density makes infrastructure cheaper per person. '
                          'A metre of water pipe, sewer or road serves four flats in a dense '
                          'street and one house in a suburb. The figures vary, but costs per '
                          'household in a dense area run around forty per cent below a '
                          'low-density one. Second, and pulling the other way, density makes '
                          'land more expensive, because everybody wants to be inside the half '
                          'hour and there is only so much land there. So the dense city is '
                          'cheaper to run and more expensive to live in, and which of those a '
                          'household experiences depends almost entirely on whether it owns any '
                          'of that land. That, rather than any argument about tower blocks, is '
                          'why housing policy is so bitter. The infrastructure saving is shared '
                          'by everybody. The land price is captured by whoever got there first.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Density is always better', 'Density cuts infrastructure costs and raises land '
              'costs, and who gains depends on ownership',
              'Cities should be less dense', 'Transport speed is the only factor'), 1,
             'The two opposite effects and the ownership point are the whole talk.'),
            ('Why is infrastructure cheaper in a dense area?',
             ('Materials are cheaper', 'Each metre of pipe serves more households',
              'There is less road', 'Labour costs less'), 1,
             'Four flats in a dense street against one house in a suburb.'),
            ('By about how much are costs per household lower?',
             ('Ten per cent', 'Twenty-five per cent', 'Forty per cent',
              'Sixty per cent'), 2,
             'The speaker gives the figure and notes that it varies.'),
            ('Why does density raise land prices?',
             ('Buildings are taller', 'Everybody wants to be inside the half hour',
              'Construction is harder', 'Taxes are higher'), 1,
             'And there is only so much land there.'),
            ('What decides which effect a household feels?',
             ('Its income', 'Whether it owns land', 'How far it travels',
              'Whether it has a car'), 1,
             'The speaker says it depends almost entirely on that.'),
            ('What does the speaker say about the two effects?',
             ('The saving is shared and the land price is captured',
              'Both are shared equally', 'Both benefit landowners',
              'Neither can be measured'), 0,
             'That is the final sentence and the point of the talk.'),
        ],
    ),

    sp=[
        dict(sub='Why people move to cities', focus='linking in comparatives',
             skill=('Join the comparison smoothly',
                    ['as expensive as runs together: /əzɪksˈpensɪvəz/.',
                     'Than is weak: /ðən/, not /ðæn/.',
                     'Keep the two things being compared clearly separated by the structure.',
                     'Finish the comparison — an unfinished than is the commonest slip.']),
             repeat=['It is not as cheap as it looks.',
                     'Halls are more expensive than the flat.',
                     'The flat is twenty-five minutes from the campus.',
                     'Living further out costs less in rent and more in travel.',
                     'A dense area is about as expensive to live in as it is cheap to run.',
                     'People will travel about the same amount of time now as they did five hundred years ago.',
                     'A city that loses the variety of its employers empties even faster than one that loses a single large factory.'],
             theme='where you live now',
             qs=['First, where do you live at the moment?',
                 'People feel differently about where they live. How do you feel about it, and '
                 'why?',
                 'Some people say that living in a city is always more interesting than living '
                 'in a small town. Do you agree? Why or why not?',
                 'Finally, should students be guaranteed somewhere to live for the whole of '
                 'their degree? Why or why not?'],
             model=[(2, 'Mixed. It is convenient and it is noisy, and I notice the convenience '
                        'in the morning and the noise at night.'),
                    (3, 'Not always. A city offers more options, which is not quite the same as '
                        'being more interesting — you still have to take them.')],
             selfcheck=['I linked as…as smoothly',
                        'I finished every comparison I started',
                        'I gave a reason after every opinion']),
        dict(sub='Campus housing', focus='weighing and deciding',
             skill=('Compare, then commit',
                    ['Give both sides with figures, then choose and say why.',
                     'On balance… / In the end I would… are the phrases that close a comparison.',
                     'One deciding factor is enough. Do not list four.',
                     'Say what you are giving up — it makes the choice sound real.']),
             repeat=['The rent is cheaper but the bills are not included.',
                     'A bus pass adds about forty-five pounds a month.',
                     'Halls are a forty-week contract rather than fifty-two.',
                     'On balance the two come out at about the same cost.',
                     'In the end I would choose the flat, because I need somewhere over the summer.',
                     'The money is a wash either way, so the length of the contract is what decides it.',
                     'I would be giving up a shorter commute, which I think I can live with for one year.'],
             theme='choices about where to live',
             qs=['To start, how did you choose where you live now?',
                 'People weigh these decisions differently. What mattered most to you, and why?',
                 'Some people argue that students should not live together in halls at all. Do '
                 'you agree? Why or why not?',
                 'Last question. Should universities build more housing, or should cities? Why?'],
             model=[(2, 'Cost, mostly, and then I realised I had not counted the travel, which '
                        'changed the answer completely.'),
                    (4, 'Universities, because they create the demand. A city that has to house '
                        'ten thousand extra people every September did not choose that.')],
             selfcheck=['I gave both sides before choosing',
                        'I committed to one with a reason',
                        'I said what I was giving up']),
        dict(sub='Transport and distance', focus='academic register',
             skill=('State a constant and its consequences',
                    ['Use the unit’s words: transit, accommodate, displace, trend, scenario.',
                     'Name the constant, then trace what changes around it.',
                     'Say what follows rather than what you feel.',
                     'Mark yourself against the three statements below.']),
             repeat=['The travel time has remained constant.',
                     'Speed determines the distance people will accept.',
                     'A faster road does not reduce travel time for long.',
                     'New capacity is absorbed as people move further out.',
                     'Density lowers the cost of infrastructure per household.',
                     'The trend is towards cities that are low and round rather than dense and star-shaped.',
                     'If the time people will travel is fixed, then any increase in speed is converted into distance rather than into time saved.'],
             theme='transport and cities',
             qs=['First, how do you usually travel to your university?',
                 'People put up with very different journeys. How long is yours, and how do you '
                 'feel about it?',
                 'Some people argue that cities should make driving more expensive. Do you '
                 'agree? Why or why not?',
                 'Finally, should public transport be free? Why or why not?'],
             model=[(3, 'The evidence from induced demand supports it. If you widen a road the '
                        'new space is absorbed within a few years, so pricing is the only thing '
                        'that changes behaviour durably.'),
                    (4, 'Free is probably the wrong target. Frequent matters more than free — '
                        'a free bus every forty minutes does not change anybody’s scenario.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I named a constant and traced its consequences',
                        'My last answer had an opinion, a reason and an example']),
    ],

    w1=dict(
        sub='Why people move to cities',
        skill=('Comparison questions',
               ['Which is cheaper? Is it as far as…? How much more does…?',
                'As…as needs both halves. One as is always wrong.',
                'An embedded comparison keeps statement order: do you know which is cheaper.',
                'Use every tile exactly once.']),
        guided=[
            ('The flat is cheaper than halls.',
             ['is', 'which', 'cheaper'],
             'Which is cheaper?'),
            ('The flat is twenty-five minutes away.',
             ['far', 'how', 'is', 'the', 'flat'],
             'How far is the flat?'),
            ('Halls include utilities and the flat does not.',
             ['know', 'you', 'do', 'whether', 'bills', 'are', 'included'],
             'Do you know whether bills are included?'),
        ],
        exam=[
            ('Halls cost eighty pounds a month more.',
             ['more', 'how', 'much', 'do', 'halls', 'cost'],
             'How much more do halls cost?'),
            ('The deadline for a guaranteed place is 30 June.',
             ['tell', 'can', 'you', 'me', 'when', 'the', 'deadline', 'is'],
             'Can you tell me when the deadline is?'),
            ('Two thirds of the waiting list received an offer.',
             ['many', 'how', 'received', 'an', 'offer'],
             'How many received an offer?'),
            ('The halls contract runs for forty weeks.',
             ['know', 'do', 'you', 'how', 'long', 'the', 'contract', 'runs'],
             'Do you know how long the contract runs?'),
            ('The student who applied in August was not offered a room.',
             ['the', 'student', 'who', 'applied', 'in', 'August', 'was', 'not', 'offered',
              'a', 'room'],
             'The student who applied in August was not offered a room.'),
            ('The bus takes as long as walking at rush hour.',
             ['is', 'the', 'bus', 'as', 'quick', 'as', 'walking'],
             'Is the bus as quick as walking?'),
            ('People have always travelled about half an hour each way.',
             ['know', 'do', 'you', 'why', 'the', 'time', 'has', 'not', 'changed'],
             'Do you know why the time has not changed?'),
        ],
    ),
    w2=dict(
        sub='Campus housing',
        to='accommodation@northgate.edu',
        date='20/10/2027',
        subject='Room 104, Block C — swap request',
        scenario=[
            'You asked to move out of room 104 and were told that no changes are made in the '
            'first three weeks, and that after 27 October a change is only possible as a swap. '
            'You have now found a student in Block A who is willing to move into 104, and you '
            'have spoken to the warden about the noise as suggested.',
            'Write an email to the accommodation office.',
        ],
        bullets=['Say that you have found somebody to swap with, and name them.',
                 'Say what you did about the warden’s suggestion.',
                 'Ask what happens next.'],
        skill=('Do what you were asked, then say so',
               ['The office gave you two instructions. Answering both in order makes the reply '
                'easy.',
                'Name the other student and their room — nothing can be processed without it.',
                'One question at the end, answerable in a line.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Accommodation Office,',
            'Thank you for your reply about room 104. I have found somebody willing to swap: '
            'Daniel Osei, currently in A212, who is happy to move into 104. He has emailed you '
            'separately to confirm.',
            'I also spoke to the warden, as you suggested. The noise is from the extractor fan '
            'in the kitchen next door rather than from any person, and maintenance have said it '
            'cannot be quietened without replacing the unit, which is not scheduled until the '
            'summer. So a conversation has not solved it, although I am glad I tried.',
            'Both of us are free to move on any day from Monday 27 October onwards. Could you '
            'tell me what we need to do next — is there a form, or do you simply arrange it?',
            'Thank you,',
            'Sofia Novak',
        ],
        notes=['The swap partner is named with their room number, which is the one fact the '
               'office cannot act without.',
               'The warden suggestion is answered honestly, including the result, which makes '
               'the request stronger rather than weaker.',
               'Availability is given as a range, so one reply can settle it.',
               'The closing question offers two possibilities, which makes it quick to answer.'],
    ),
    w3=dict(
        sub='Transport and distance',
        prof='Dr Osei',
        question='If people will always travel about half an hour each way, then faster roads '
                 'produce longer journeys rather than shorter ones. Given that, should a city '
                 'with congestion spend on new roads, on public transport, or on neither?',
        posts=[('Lena', 'w',
                'Neither, in the sense they mean. The constant applies to public transport too: '
                'a faster train line also lets people live further out. What actually reduces '
                'travel is bringing homes and jobs closer together, which is a planning '
                'decision, not a transport one.'),
               ('Hugo', 'm',
                'That is true and useless. You cannot rearrange where two hundred thousand '
                'people live and work in under thirty years. In the meantime they have to get '
                'to work tomorrow, and a tram carries ten times what a lane of cars does on the '
                'same strip of land.')],
        skill=('Separate the right answer from the available one',
               ['Lena is arguing about what works; Hugo about what can be done in time.',
                'A good post says what each is true of, and over what period.',
                'Use the constant from the passage to decide.',
                'At least 100 words in ten minutes.']),
        starters=['Lena is right about the mechanism and Hugo is right about the timescale:…',
                  'The constant applies to both, which means…',
                  'Over ten years I would…; over fifty I would…',
                  'What neither post mentions is…'],
        model=[
            'Lena is right about the mechanism and Hugo is right about the timescale, and the '
            'question does not say which one it is asking about.',
            'The constant does apply to public transport, as Lena says: a faster line converts '
            'into distance exactly as a faster road does. So neither road nor tram reduces '
            'travel time for long, and in that sense she is correct that the real variable is '
            'how far apart homes and jobs are. But Hugo’s objection is not a quibble. Land use '
            'changes over decades and congestion is a problem this year.',
            'What neither post mentions is that the two interact. A tram line does not only move '
            'people; it decides where the next ten thousand homes get built, because developers '
            'follow it. So I would spend on public transport, and I would treat the route as a '
            'planning decision rather than a transport one — which is Lena’s point, delivered '
            'by Hugo’s instrument.',
        ],
        model_words=168,
    ),

    gram=dict(
        title='as…as, more than, less than',
        headers=['Form', 'Example'],
        rows=[
            ['as + adjective + as (equal)', 'The bus is as quick as walking.'],
            ['not as + adjective + as', 'It is not as cheap as it looks.'],
            ['more / less + adjective + than', 'Halls are more expensive than the flat.'],
            ['more / fewer + noun + than', 'more options, fewer rooms'],
            ['twice / half / three times as…as', 'A tram carries ten times as many people.'],
            ['the same as', 'The cost is the same as last year.'],
            ['different from', 'The flat is different from the halls.'],
        ],
        notes=[
            'As…as needs both halves. Writing *as cheap than* or leaving out the second as is '
            'the commonest error in this structure.',
            'Multiples go in front of the first as: twice as expensive as, ten times as many as.',
            'Use different from in writing. Different than is American and different to is '
            'informal British; from is safe everywhere.',
        ],
        watch='The same takes as, not than or from. It is the same as last year, never *the '
              'same than last year*.',
        ex=[
            ('Complete the comparison.',
             ['The bus is __________ quick __________ walking at rush hour.',
              'Halls are more expensive __________ the flat.',
              'It is not __________ cheap __________ it looks.',
              'A tram carries ten times __________ many people __________ a lane of cars.',
              'The rent is the same __________ last year.',
              'The flat is quite different __________ the halls.'],
             ['as / as', 'than', 'as / as', 'as / as', 'as', 'from']),
            ('Rewrite using as…as.',
             ['The flat is cheaper than halls. → Halls are not __________.',
              'The bus and the walk take the same time. → The bus is __________.',
              'My room is smaller than yours. → My room is not __________.',
              'The bills are higher in winter than in summer. → The bills in summer are not '
              '__________.'],
             ['as cheap as the flat', 'as quick as the walk', 'as large as yours',
              'as high as in winter']),
            ('Correct the mistake in each sentence.',
             ['It is not as cheap than it looks.',
              'The rent is the same than last year.',
              'A tram carries ten times more people as a lane of cars.'],
             ['as cheap as it looks', 'the same as last year',
              'ten times as many people as a lane of cars']),
        ],
        bas='Build a Sentence asks comparisons as questions: Which is cheaper? Is the bus as '
            'quick as walking? Build the structure first and the word order follows.',
    ),

    rev=dict(
        vocab=[
            ('to provide room for', 'accommodate'),
            ('to force out of a place', 'displace'),
            ('money paid to reduce the cost of something', 'subsidy'),
            ('a charge collected by an authority', 'levy'),
            ('to make laws', 'legislate'),
            ('a general direction of change', 'trend'),
            ('a possible sequence of events', 'scenario'),
            ('about to happen', 'forthcoming'),
            ('lasting only a short time', 'temporary'),
            ('to present a problem or question', 'pose'),
            ('the regular journey between home and study', 'commute'),
            ('a list of what is in a property and its condition', 'inventory'),
        ],
        gram=[
            ('The bus is __________ quick __________ walking.', 'as / as'),
            ('Halls are more expensive __________ the flat.', 'than'),
            ('It is not __________ cheap __________ it looks.', 'as / as'),
            ('A tram carries ten times __________ many people.', 'as'),
            ('The rent is the same __________ last year.', 'as'),
            ('The flat is quite different __________ the halls.', 'from'),
            ('There are __________ (few) rooms than applicants.', 'fewer'),
            ('My room is not __________ (large) as yours.', 'as large'),
        ],
        mini=[
            ('According to the passage on page 106, what has stayed constant?',
             ('the distance travelled', 'the time spent travelling', 'the cost of travel',
              'the size of cities'), 1,
             'About half an hour each way, which is why the speed changes the distance.'),
            ('In the talk, density lowers the cost of',
             ('land', 'infrastructure per household', 'rent', 'transport fares'), 1,
             'And raises the cost of land, which is the opposite effect.'),
            ('Which sentence is correct?',
             ('It is not as cheap than it looks.', 'The rent is the same than last year.',
              'A tram carries ten times as many people as a lane of cars.',
              'My room is not as large than yours.'), 2,
             'As…as needs both halves, and the same takes as.'),
            ('A returning home student who applies in August will',
             ('be guaranteed a place', 'go on a waiting list near the bottom',
              'be given priority', 'pay a higher rent'), 1,
             'The list is in application order, and most of those who missed out had applied '
             'in August.'),
            ('When comparing halls with a private flat, you should add to the flat',
             ('the deposit', 'utilities and internet', 'the inventory', 'the waiting list'), 1,
             'Sixty to ninety pounds a month, because the halls figure already includes them.'),
            ('In Reading, a question about what a word refers to is answered by',
             ('the dictionary meaning', 'the noun phrase earlier in the passage',
              'the main idea', 'the following sentence'), 1,
             'Reference questions point backwards, almost always to the previous sentence.'),
        ],
    ),
    tip='In Take an Interview the reward is for a reason, not for length. Say what you think, '
        'then because, then stop. A thirty-second answer with a clear reason beats a '
        'ninety-second answer that circles the question without ever landing on one.',
)
