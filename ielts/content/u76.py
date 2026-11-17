# -*- coding: utf-8 -*-
"""Foundation 2, Unit 6 - Holidays and Tourism.

Booking, being a visitor, a town with too many of them, how a holiday is
sold, and what travel costs the planet. The technique page times the two
reading routes against each other again, this time on a passage twice
the length Foundation 1 used.
"""

_TRIPS = dict(kind='bar',
              title='Where visitors to one town come from',
              sub='share of overnight visitors, two years',
              cats=['Same country', 'Neighbouring', 'Rest of Europe',
                    'Worldwide'],
              series=[('2015', [62.0, 14.0, 17.0, 7.0]),
                      ('2024', [48.0, 19.0, 23.0, 10.0])],
              ylab='per cent')

_SOLD = dict(kind='process',
             title='How a package holiday is sold',
             sub='five stages, and where the price is decided',
             stages=[
              ('Buying', 'the company buys hotel rooms and seats a '
               'year ahead'),
              ('Pricing', 'a price is set to fill them, not to cover '
               'each one'),
              ('Advertising', 'the cheapest few rooms are advertised '
               'to draw enquiries'),
              ('Booking', 'most customers pay more than the advertised '
               'price'),
              ('Adjusting', 'unsold rooms are cut in price as the date '
               'approaches')])

UNIT = dict(
 n=6, vol=8, level='A2-B1', band='4.0-4.5',
 theme='Holidays and Tourism',
 opener=(
   'This unit is about travelling for pleasure, and about what that '
   'does to the places people travel to. You will book a short break, '
   'compare three kinds of holiday, hear a resident speak at a public '
   'meeting, learn how a package holiday is priced, and read what three '
   'ways of travelling actually cost. The technique page times '
   'skim-and-scan against the loop again, on a passage twice as long as '
   'the one you used in Foundation 1.'),

 cycles=[
  dict(
   sub='Booking a holiday',
   step=1,
   read=[
    dict(heading='Coastal Breaks: four short breaks',
         kind='Brochure page', task='Matching features and multiple choice',
         band='gt_short', qtype='Questions 1-5',
         skill=('A brochure is read for what the price does not '
                'include',
                ['Four offers always differ in two or three details. '
                 'Find those before reading the questions.',
                 'The word from before a price means the price in the '
                 'box is not the price you will pay.']),
         paras=[
          'A. Two nights in a harbour hotel, from ninety-five pounds a '
          'person. Breakfast included, parking extra. Suitable for '
          'walkers: the coast path starts at the door.',
          'B. Three nights inland, from a hundred and ten. All meals '
          'included and the price does not change by season. No '
          'children under twelve.',
          'C. A seven-night cruise, from four hundred and forty. The '
          'advertised price is for an inside cabin on two sailings in '
          'November only.',
          'D. Two nights in a city hotel, from seventy. Breakfast '
          'extra, parking included. Within walking distance of three '
          'museums, two of which are free.'],
         items=[
          ('Which includes all meals?', ['A', 'B', 'C', 'D'], 1,
           'Offer B, the three nights inland.',
           {0: 'Offer A includes breakfast only, with parking extra.', 2: 'C price applies to November only.', 3: 'Offer D charges extra for breakfast.'}),
          ('Which is cheapest at its advertised price?',
           ['A', 'B', 'C', 'D'], 3,
           'Offer D, from seventy pounds a person.',
           {0: 'Offer A starts at ninety-five pounds a person.', 1: 'Offer B starts at a hundred and ten pounds.', 2: 'C price applies to November only.'}),
          ('Which advertised price applies to November only?',
           ['A', 'B', 'C', 'D'], 2,
           'The cruise, and only for an inside cabin.',
           {0: 'Offer A quotes no season for its price.', 1: 'Offer B says the price does not change by season.', 3: 'Offer D quotes no season for its price.'}),
          ('Which offer does not take young children?',
           ['A', 'B', 'C', 'D'], 1,
           'Offer B says no children under twelve are accepted.',
           {0: 'Offer A is suitable for walkers and sets no age limit.', 2: 'C price applies to November only.', 3: 'Offer D sets no age limit for children.'}),
          ('At which hotel is parking included?', ['A', 'B', 'C', 'D'],
           3, 'Offer D includes parking, although breakfast is extra.',
           {0: 'Offer A charges extra for parking.', 1: 'Offer B says nothing about parking.', 2: 'C price applies to November only.'})])],
   listen=[
    dict(heading='Booking a short break', part='Part 1',
         task='A telephone booking · note completion', band='l1',
         qtype='Questions 6-11',
         script=[
          ('Agent', 'Coastal Breaks, good afternoon.'),
          ('Caller', 'I am looking at the harbour hotel, the two-night '
           'break.'),
          ('Agent', 'Which dates?'),
          ('Caller', 'The weekend of the twelfth.'),
          ('Agent', 'That weekend is a hundred and thirty a person, '
           'not ninety-five. The ninety-five is midweek in '
           'February.'),
          ('Caller', 'That is a big difference.'),
          ('Agent', 'It is, and I would rather tell you now than have '
           'you find it at the end. Midweek the same room is a hundred '
           'and five even in June.'),
          ('Caller', 'Then Tuesday the fifteenth, two nights.'),
          ('Agent', 'A hundred and five each, breakfast included. '
           'Parking is nine pounds a night and the public car park '
           'behind is five.'),
          ('Caller', 'We will use the public one. Is the coast path '
           'open?'),
          ('Agent', 'The northern section is closed for repair until '
           'April. South is open and is the better walk anyway.'),
          ('Caller', 'Can we have a room away from the road?'),
          ('Agent', 'I will note it. I cannot promise it, and any hotel '
           'that promises you that on the telephone is not telling you '
           'the truth.'),
          ('Caller', 'Fair enough. The name is Haddad.'),
          ('Agent', 'Thank you. Deposit is fifty pounds today and the '
           'rest four weeks before.')],
         items=[
          ('The weekend price is a hundred and ____________ a '
           'person.', None, 'thirty',
           'Against ninety-five midweek in February.'),
          ('They book Tuesday the ____________ for two nights.', None,
           'fifteenth', 'For two nights at a hundred and five each.'),
          ('Hotel parking costs ____________ pounds a night.', None,
           'nine', 'And the public car park behind costs five.'),
          ('The ____________ section of the coast path is closed.',
           None, 'northern', 'It is closed until April for repair.'),
          ('The agent will note the room request but cannot '
           '____________ it.', None, 'promise',
           'And says any hotel that does is not honest.'),
          ('The deposit is ____________ pounds.', None, 'fifty',
           'With the rest due four weeks before.')])],
   speak=dict(
    part='Part 1', focus='Holidays you take',
    intro='Describe what you actually do, not an ideal holiday. Two or '
          'three sentences.',
    qs=['Do you usually go away on holiday?',
        'Do you prefer the sea or the mountains?',
        'How far ahead do you book?',
        'Have you been to another country?'],
    shape=[('answer', 'Once a year, usually for about a week, and '
            'usually in this country.'),
           ('support', 'I prefer the coast, mainly because I like '
            'walking and the paths there are better marked.'),
           ('follow-up', 'I book about four months ahead, which is '
            'late enough to know my work and early enough to pay less '
            'than I would in July.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Changing a holiday booking',
         prompt='You have booked a holiday and need to change the '
                'dates. Write to the company. In your letter: give the '
                'booking details; explain why you need to change; ask '
                'what it will cost.',
         instruct='  Write at least 110 words in about 20 minutes.',
         lines=13,
         model=[
          'Dear Sir or Madam,',
          'I am writing about booking CB4412, two nights at the harbour '
          'hotel from Tuesday 15 April, in the name of Haddad.',
          'I need to move the booking to the following week if that is '
          'possible. My employer has changed the date of a training '
          'course I cannot miss, and I was told about it after the '
          'booking was made.',
          'Could you tell me whether the same room is available from '
          'Tuesday 22 April, and what the change would cost? If the '
          'difference is small I will go ahead; if it is more than '
          'about thirty pounds, I would rather cancel and rebook in the '
          'autumn, so please tell me the cancellation terms as well.',
          'Yours faithfully,',
          'L. Haddad'],
         notes=['The booking reference, the dates and the name are all '
                'in the first sentence.',
                'The reason is brief and verifiable, which is the kind '
                'that gets flexibility.',
                'The letter states a decision rule rather than asking '
                'an open question, which usually gets both answers in '
                'one reply.'],
         criterion=[('Booking details complete', 'Task Achievement'),
                    ('A clear reason', 'Task Response'),
                    ('Two questions that can be answered together',
                     'Task Achievement'),
                    ('Formal register', 'Coherence and Cohesion')])],
   gram=dict(
    point='Future in time clauses: when, if, before',
    explain='After when, if, before and until, use the present even '
            'when the meaning is future.',
    examples=['I will pay when the invoice arrives.',
              'If the price changes, please tell me.',
              'Before we travel, we will confirm the room.',
              'We cannot book until the dates are fixed.'],
    items=[('I will pay when the invoice (arrive).',
            'I will pay when the invoice arrives.'),
           ('If the price (change), please tell me.',
            'If the price changes, please tell me.'),
           ('Before we (travel), we will confirm.',
            'Before we travel, we will confirm.'),
           ('We cannot book until the dates (be) fixed.',
            'We cannot book until the dates are fixed.'),
           ('I will write when I (know) the date.',
            'I will write when I know the date.')],
    task='Write each sentence with the right tense.'),
   vocab=[('insult', 'a rude remark; or to be rude to somebody'),
          ('overnight', 'for or during the night'),
          ('cruise', 'a holiday on a ship'),
          ('formal', 'following accepted rules; official'),
          ('advertising', 'telling people about something to sell it'),
          ('suitable', 'right for a purpose'),
          ('villages', 'small settlements in the country'),
          ('worldwide', 'all over the world'),
          ('sixty', 'the number 60')],
   expr=[('I would rather tell you now.', 'being honest early'),
         ('That is a big difference.', 'reacting to a price'),
         ('I cannot promise it.', 'refusing to overpromise'),
         ('Fair enough.', 'accepting an answer')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Being a visitor',
   step=2,
   read=[
    dict(heading='Three visitors, three kinds of holiday',
         kind='Three short profiles', task='Matching features and sentence completion',
         band='gt_work', qtype='Questions 12-17',
         paras=[
          'Ines goes to the same village every year and has done for '
          'eleven years. She knows the bakery, the bus times and four '
          'families. She says the pleasure is not discovery but the '
          'opposite: a place where she does not have to decide '
          'anything, which is what she wants after a year of deciding '
          'things at work.',
          'Karim travels to a different country each time and reads '
          'about it for weeks beforehand. His last trip was a cathedral '
          'city where he had a list of eleven things to see and saw '
          'nine. He is honest that the reading is half the holiday and '
          'that he sometimes enjoys the preparation more than the '
          'week.',
          'Ruth takes a cruise, which she expects people to be rude '
          'about, and is tired of explaining. Her reason is practical: '
          'she has a knee that will not take long distances, and a '
          'ship brings the places to her. She points out that the usual '
          'insult, that a cruise is not real travel, is almost always '
          'made by somebody who can walk.'],
         items=[
          ('Who returns to the same place every year?',
           ['Ines', 'Karim', 'Ruth', 'none of them'], 0,
           'For the last eleven years, she says.',
           {1: 'Karim travels to a different country each time.', 2: 'Ruth takes a cruise to different places.', 3: 'Ines returns to the same village each year.'}),
          ('Who prepares for weeks before travelling?',
           ['Ines', 'Karim', 'Ruth', 'all of them'], 1,
           'And sometimes enjoys the preparation more.',
           {0: 'Ines goes somewhere she need not plan at all.', 2: 'Ruth chooses a cruise for practical reasons.', 3: 'Only Karim reads for weeks beforehand.'}),
          (
           'Ines says the pleasure is not having to ____________ '
           'anything.', None, 'decide',
           'After a year of deciding things at work.'),
          ('Karim saw ____________ of the eleven things on his list.',
           None, 'nine', 'In a cathedral city, on his last trip.'),
          (
           'Ruth takes a cruise because her ____________ will not take '
           'long distances.', None, 'knee',
           'So the ship brings the places to her.'),
          ('Ruth says the usual insult comes from somebody who can '
           '____________.', None, 'walk',
           'Which she points out to people who make it.')])],
   listen=[
    dict(heading='Two travellers compare trips', part='Part 3',
         task='A discussion between two travellers · note completion', band='l3',
         qtype='Questions 18-23',
         script=[
          ('Tutor', 'You are writing about what people want from a '
           'holiday. Start with where you differ.'),
          ('Nils', 'I think most people say they want discovery and '
           'actually want rest. The evidence is that they return to '
           'the same places.'),
          ('Priya', 'That is true of some people and you are '
           'generalising from a survey of people who book package '
           'holidays.'),
          ('Nils', 'Fair. The sample is a problem.'),
          ('Priya', 'And repetition is not the opposite of discovery. '
           'Going to the same village eleven times teaches you more '
           'about it than eleven different villages would.'),
          ('Nils', 'That I had not thought about, and it is a better '
           'point than mine.'),
          ('Priya', 'Where I agree with you is about preparation. '
           'People who research a place for weeks often describe the '
           'reading as the best part, which should tell us '
           'something.'),
          ('Nils', 'It tells me the anticipation is doing the work '
           'rather than the travel.'),
          ('Priya', 'Or that understanding a place is the pleasure, and '
           'being there is only one way to do it.'),
          ('Tutor', 'Those are two different conclusions from the '
           'same observation. Put both in and say so.'),
          ('Nils', 'I would rather we picked one.'),
          ('Priya', 'That is because you want the essay to argue. I '
           'want it to be right, and we do not have the evidence to '
           'choose yet.'),
          ('Nils', 'Then we say what evidence would choose, and that '
           'is a better ending than either conclusion.'),
          ('Tutor', 'It is, and it is the sentence examiners remember '
           'at this level.')],
         items=[
          ('Nils says people say they want discovery and actually want '
           '____________.', None, 'rest',
           'Because they return to the same places.'),
          ('Priya says his sample is people who book ____________ '
           'holidays.', None, 'package',
           'Which Nils accepts as a problem.'),
          ('Priya says repetition is not the opposite of '
           '____________.', None, 'discovery',
           'Because returning teaches you more about one place.'),
          ('They agree about ____________, which people often call '
           'the best part.', None, 'preparation',
           'The reading done before a trip.'),
          ('Nils says the ____________ is doing the work rather than '
           'the travel.', None, 'anticipation',
           'Which is one conclusion from the observation.'),
          ('The tutor says they have two different ____________ from '
           'the same observation.', None, 'conclusions',
           'And tells them to include both.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='A holiday you remember',
    longturn=[('I am going to talk about a holiday I remember well. I spent a '
               'week on a small island with my brother.'),
              ('We went in late May, which was before the season started, and '
               'we chose it because it was cheap and because neither of us had '
               'been. The island is about two hours by boat from the mainland '
               'and about six kilometres long.'),
              ('What we did was very little, and that was the point. We walked '
               'round the whole island on the second day, which took five '
               'hours. We swam, although the water was still cold. We ate in '
               'the same place almost every evening, because there were only '
               'three, and by the fourth night the owner had stopped giving us '
               'a menu.'),
              ('I remember it because of what was absent. There was one shop, '
               'no cars that we saw, and the internet worked for about '
               'an hour a day in the harbour. For six days neither of '
               'us could do anything about anything at home, and after '
               'the second day we stopped trying. I have had holidays '
               'with more to see. I have never again had a week in '
               'which I did not think about work once.')],
    intro=('One minute, four lines. One holiday, and make the fourth '
           'bullet count.'),
    cue=('Describe a holiday you remember well.',
         ['say where you went and when',
          'say what you did there',
          'say why you remember it',
          'and explain who you went with']),
    qs=['Do you take your holidays at the same time each year?',
        'Do visitors come to your town?',
        'Where would you like to go next?',
        'Now look at the card. You have one minute to make notes.',
        'Would you go back?',
        'What did it cost you?'],
    shape=[('answer', 'The holiday I remember best was a week on the '
            'coast about four years ago.'),
           ('support', 'We walked the coast path south from the '
            'harbour, about eight kilometres a day.'),
           ('support', 'It rained for three days and we played cards '
            'in a cafe that did not mind.'),
           ('follow-up', 'I remember it because nothing was planned '
            'after the first morning, and that turned out to be the '
            'whole point.')]),
   write=[
    dict(task='Task 2',
         heading='Is travel the best way to learn about other '
                 'countries?',
         prompt='Some people think travelling is the best way to learn '
                'about other countries. Others think books and films '
                'teach more. Discuss both views and give your own '
                'opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Travel teaches a different thing, not more of the same '
               'thing',
               [('The case for travel',
                 ['a week in a place gives detail no book records',
                  'and it is detail you did not choose, which is why '
                  'it surprises you']),
                ('The case for reading',
                 ['a week cannot teach history, language or how a '
                  'country governs itself',
                  'and a tourist mostly meets people paid to be '
                  'pleasant']),
                ('What the two actually give',
                 ['reading gives structure, travel gives texture',
                  'and people who read before travelling report '
                  'getting most from both'])]),
         model=[
          'Whether travel or reading teaches more about a country is '
          'usually argued as if the two were doing the same job. I '
          'think they are not, and that is what makes the question '
          'answerable.',
          'Travel gives detail that nothing records. The smell of a '
          'market, how long people stand in a queue before they '
          'complain, what a street sounds like at six in the morning: '
          'none of this is in a book, and crucially none of it is '
          'chosen by you, which is why it surprises you and therefore '
          'stays.',
          'Reading gives what travel cannot. A week in a country will '
          'not teach you its history, how it is governed or why two '
          'regions dislike each other. A visitor also meets a narrow '
          'sample of people, many of them paid to be pleasant, and '
          'mistakes that sample for the country.',
          'The useful conclusion is that reading gives structure and '
          'travel gives texture. People who read before they travel '
          'consistently report understanding more of what they then '
          'see, because they have something for the detail to attach '
          'to. People who travel without reading often return with '
          'strong impressions and no framework, which is how confident '
          'generalisations about whole countries get made.',
          'So I would not choose between them. I would read first and '
          'travel second, and expect the second to change what I '
          'thought the first had settled.'],
         notes=['The first paragraph reframes the question, which is '
                'what makes a two-sided essay more than a list.',
                'The point that travel gives you detail you did not '
                'choose is the strongest sentence in the answer and it '
                'is placed where it does most work.',
                'The conclusion gives an order rather than a '
                'preference, which is a more useful answer to the '
                'question asked.'],
         criterion=[('Both views discussed fully', 'Task Response'),
                    ('A position that distinguishes rather than '
                     'ranks', 'Task Response'),
                    ('Concrete detail used as evidence', 'Task '
                     'Achievement'),
                    ('Varied, accurate sentence structures',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Generalising carefully: tend to, most, many',
    explain='Soften a general claim with tend to, most or many so that '
            'one exception does not disprove it.',
    examples=['People tend to return to places they know.',
              'Most visitors see a narrow sample.',
              'Many travellers read nothing beforehand.',
              'Some people enjoy the preparation more.'],
    items=[('People (tend) return to places they know.',
            'People tend to return to places they know.'),
           ('(most) visitors see a narrow sample.',
            'Most visitors see a narrow sample.'),
           ('(many) travellers read nothing beforehand.',
            'Many travellers read nothing beforehand.'),
           ('Tourists (tend) meet people paid to be pleasant.',
            'Tourists tend to meet people paid to be pleasant.'),
           ('(some) people prefer the same place every year.',
            'Some people prefer the same place every year.')],
    task='Rewrite each claim so that one exception would not '
         'disprove it.'),
   vocab=[('ashore', 'onto or on land from a ship'),
          ('bakery', 'a place where bread is made or sold'),
          ('tenth', 'number ten in an order'),
          ('cathedral', 'a large important church'),
          ('convert', 'to change into another form'),
          ('accommodation', 'a place to stay'),
          ('ascent', 'a climb upwards'),
          ('dishonest', 'not truthful'),
          ('distances', 'the amounts of space between places')],
   expr=[('I am tired of explaining.', 'describing a repeated '
          'defence'),
         ('That is a better point than mine.',
          'conceding to a stronger argument'),
         ('You are generalising from a narrow sample.',
          'challenging evidence'),
         ('Which should tell us something.',
          'drawing attention to a finding')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='When tourism causes problems',
   step=2,
   read=[
    dict(heading='A town with too many visitors',
         kind='Short article', task='Note completion',
         band='gt_work', qtype='Questions 24-29',
         skill=('An article about a local problem is read for who '
                'gains and who pays',
                ['Two groups always appear: those who earn from it and '
                 'those who live with it.',
                 'The numbers attached to each group are what the '
                 'questions use.']),
         paras=[
          'Elmouth has two thousand two hundred residents and receives '
          'about four hundred thousand visitors a year. Nearly all of '
          'them come between June and September, and three quarters '
          'come for the day rather than overnight.',
          'The day visitor is the difficulty. Somebody who stays a '
          'night spends about seventy pounds in the town. A day visitor '
          'spends about eleven, and uses the same car space, the same '
          'toilets and the same narrow street. A town that is full is '
          'not necessarily a town that is earning.',
          'The council has tried three things. Parking was made '
          'expensive, which moved cars onto the verges of the approach '
          'road. A park-and-ride was opened, which is used and has cut '
          'traffic in the centre by a fifth. A charge for coaches was '
          'proposed, forbidden by a national rule, and dropped.',
          'What residents say they want is not fewer visitors. In a '
          'survey last year, sixty-one per cent said they wanted the '
          'same number spread differently, and the commonest single '
          'request was for the public toilets to be open before nine, '
          'which is when the first coaches arrive.'],
         items=[
          ('Elmouth has ____________ thousand two hundred residents.',
           None, 'two', 'And about four hundred thousand visitors.'),
          ('____________ quarters of visitors come for the day.',
           None, 'Three', 'Rather than staying overnight.'),
          ('A day visitor spends about ____________ pounds.', None,
           'eleven', 'Against about seventy for an overnight '
           'visitor.'),
          ('The park-and-ride has cut central traffic by a '
           '____________.', None, 'fifth',
           'Which is the one measure that worked.'),
          ('The coach charge was forbidden by a ____________ rule.',
           None, 'national', 'So the council dropped the idea.'),
          (
           'The commonest request was that the toilets open before '
           '____________.', None, 'nine',
           'Which is when the first coaches arrive.')])],
   listen=[
    dict(heading='A resident speaks at a public meeting', part='Part 2',
         task='One speaker at a meeting · note completion', band='l2',
         qtype='Questions 30-35',
         script=[
          ('Speaker', 'I have lived here for thirty-one years and I am '
           'not going to ask anybody to stop coming. I want to say '
           'three things and then sit down.'),
          ('Speaker', 'First, the number is not the problem. Four '
           'hundred thousand people spread over a year would be '
           'invisible. Four hundred thousand in fourteen weeks is what '
           'we have, and almost all of them between ten and four.'),
          ('Speaker', 'Second, we are not earning what people think. A '
           'visitor who stays a night spends seventy pounds here. A '
           'visitor who comes for the day spends eleven and takes the '
           'same parking space. If we had half the visitors and twice '
           'the nights, this town would be better off in every way '
           'anybody could measure.'),
          ('Speaker', 'Third, the thing that would help most costs '
           'almost nothing. Open the toilets at eight instead of nine. '
           'The first coaches arrive at ten past eight and the queue '
           'outside the cafe on Harbour Street is a public health '
           'matter, not a joke.'),
          ('Speaker', 'I would also ask the council to stop describing '
           'visitor numbers as success. The number of people who come '
           'is not a measure of anything. What they spend, how long '
           'they stay and whether they return are three different '
           'questions and nobody asks them.'),
          ('Speaker', 'That is all. Thank you for listening.')],
         items=[
          ('The speaker has lived in the town for ____________ '
           'years.', None, 'thirty-one',
           'And is not asking visitors to stop coming.'),
          ('Four hundred thousand visitors arrive in ____________ '
           'weeks.', None, 'fourteen',
           'Mostly arriving between ten and four.'),
          ('An overnight visitor spends ____________ pounds.', None,
           'seventy', 'Against eleven for a day visitor.'),
          ('The speaker wants the toilets opened at ____________.',
           None, 'eight', 'Because the first coaches arrive at ten '
           'past.'),
          ('The queue outside the cafe is called a public '
           '____________ matter.', None, 'health',
           'Rather than a joke, the speaker says.'),
          ('The speaker says visitor numbers should not be described '
           'as ____________.', None, 'success',
           'Because the number measures nothing by itself.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Tourism and local people',
    intro=('The long turn first. A minute of notes, then one to two '
           'minutes, and the examiner closes it with a short question or '
           'two. Then the discussion: say who gains and who pays before '
           'you give your view.'),
    cue=('Describe a place in your country that visitors like.',
         ['say where it is',
          'say what visitors go to see',
          'say when they come',
          'and explain what local people think of it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Do you go there yourself?',
        'Is it too busy at some times of year?',
        'Does tourism help or harm small towns?',
        'Should towns limit visitor numbers?',
        'Who should pay for the cost of tourism?'],
    shape=[('answer', 'It helps the people who sell things and costs '
            'the people who live there, and those are rarely the same '
            'people.'),
           ('support', 'A day visitor spends about eleven pounds and '
            'uses the same parking space as somebody who spends '
            'seventy.'),
           ('support', 'So the useful measure is spending and nights, '
            'not the number of people.'),
           ('follow-up', 'I would spread the season rather than limit '
            'the number, which is what residents usually ask for '
            'anyway.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Where visitors to one town come from',
         figure=_TRIPS,
         prompt='The chart shows where overnight visitors to one town '
                'came from in two years. Describe the chart and compare '
                'the years.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The chart shows the share of overnight visitors to one town '
          'coming from four areas, in 2015 and 2024.',
          'Visitors from the same country fell from sixty-two per cent '
          'to forty-eight, and were the largest group in both years. '
          'Every other group rose: neighbouring countries from fourteen '
          'to nineteen per cent, the rest of Europe from seventeen to '
          'twenty-three, and the rest of the world from seven to ten.',
          'The fall in the domestic share, fourteen percentage points, '
          'is almost exactly equal to the rise in the other three '
          'together, which is thirteen.',
          'The town therefore has a more mixed set of visitors than it '
          'did, although visitors from the same country remain just '
          'under half of the total.'],
         notes=['The largest group is handled first, and the three '
                'rising groups are given together because they behave '
                'alike.',
                'The arithmetic in the third sentence is the kind that '
                'shows a chart has been understood.',
                'The closing sentence states the change in the mix '
                'without exaggerating it.'],
         criterion=[('All four groups, both years', 'Task '
                     'Achievement'),
                    ('Groups handled by behaviour, not one by one',
                     'Coherence and Cohesion'),
                    ('A calculation that adds something', 'Task '
                     'Response'),
                    ('Percentage points used correctly', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Contrast within a sentence: although, despite, even though',
    fix=dict(
     text=('Although the island was small, but we were never bored. Despite of '
           'the cold water, we swam every day. We walked round the whole '
           'island on the second day, even though it took five hours. There '
           'was one shop and no cars. Even though the internet worked for an '
           'hour a day, but we stopped trying after the second day.'),
     faults=[('Although the island was small, but we were never bored',
              'Although the island was small, we were never bored',
              ('Although joins the two halves by itself; but makes one '
               'conjunction too many.')),
             ('Despite of the cold water',
              'Despite the cold water',
              ('Despite takes no of. In spite of does, which is where the '
               'mistake comes from.')),
             (('Even though the internet worked for an hour a day, but we '
               'stopped trying'),
              ('Even though the internet worked for an hour a day, we stopped '
               'trying'),
              ('Even though works like although, so but is not needed after '
               'it.'))]),
    explain='Although and even though take a clause; despite takes a '
            'noun or -ing.',
    examples=['Although the share fell, the group is still largest.',
              'Despite the fall, it remains just under half.',
              'Even though numbers rose, spending did not.',
              'Despite having more visitors, the town earns less.'],
    items=[('(although) the share fell, the group is largest.',
            'Although the share fell, the group is still largest.'),
           ('(despite) the fall, it remains near half.',
            'Despite the fall, it remains near half.'),
           ('(even though) numbers rose, spending did not.',
            'Even though numbers rose, spending did not.'),
           ('(despite) have more visitors, the town earns less.',
            'Despite having more visitors, the town earns less.'),
           ('(although) parking cost more, cars still came.',
            'Although parking cost more, cars still came.')],
    task='Write each sentence with the word given.'),
   vocab=[('duly', 'in the proper way, at the proper time'),
          ('enforcing', 'making people obey a rule'),
          ('forbidding', 'not allowing'),
          ('inland', 'away from the sea'),
          ('intractable', 'very hard to solve'),
          ('museums', 'buildings where objects are shown'),
          ('shortened', 'made shorter'),
          ('straightforward', 'simple and clear')],
   expr=[('I am not going to ask anybody to stop coming.',
          'disarming an objection before making one'),
         ('A town that is full is not necessarily earning.',
          'separating two measures'),
         ('The thing that would help most costs almost nothing.',
          'proposing a cheap fix'),
         ('Nobody asks them.', 'pointing out a missing question')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='How a holiday is sold',
   step=3,
   read=[
    dict(heading='From brochure to booking',
         kind='Short factual article',
         task='Note completion and matching information',
         band='acad', qtype='Questions 36-42',
         paras=[
          'A package holiday is not priced the way most goods are. A '
          'shop buys a shirt, adds a margin and sells it. A holiday '
          'company buys hotel rooms and aircraft seats up to a year in '
          'advance, pays for them whether they are used or not, and '
          'then has to fill them. Everything odd about holiday prices '
          'follows from that.',
          'Because the rooms are already paid for, an empty one earns '
          'nothing and a cheap one earns something. The company '
          'therefore sets prices to fill the aircraft rather than to '
          'cover the cost of each seat. Two people in the same row may '
          'have paid very different amounts without either of them '
          'being cheated.',
          'The advertised price is a separate decision again. It '
          'usually applies to a small number of rooms, on particular '
          'dates, in the least popular category. Its job is not to '
          'describe the holiday but to bring enquiries, and most people '
          'who enquire end up paying more. This is legal, provided the '
          'advertised price is genuinely available to somebody, and it '
          'is the single biggest cause of complaints to the '
          'regulator.',
          'Different customers therefore pay different prices for the '
          'same flight and the same room, and the company treats that '
          'as normal rather than as an embarrassment.',
          'As the date approaches, unsold rooms are cut in price, '
          'because an empty room on Friday is worth nothing on '
          'Saturday. That is why late booking is sometimes very cheap '
          'and sometimes impossible, and why no simple rule about when '
          'to book is true. The honest advice is that booking early '
          'buys certainty and booking late buys a chance.'],
         items=[
          ('A holiday company buys rooms and seats up to a '
           '____________ in advance.', None, 'year',
           'Paragraph 1, and pays whether they are used or not.'),
          ('Prices are set to fill the ____________ rather than to '
           'cover each seat.', None, 'aircraft',
           'Paragraph 2, because the cost is already paid.'),
          ('The advertised price usually applies to the least popular '
           '____________.', None, 'category',
           'Paragraph 3, on particular dates.'),
          ('The advertised price is legal provided it is genuinely '
           '____________ to somebody.', None, 'available',
           'Paragraph 3, although it causes many complaints.'),
          ('An empty room earns ____________.', None, 'nothing',
           'Paragraph 4: it is worth nothing the next day.'),
          (
           'Which paragraph explains why no simple booking rule works?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4'], 2,
           'Late booking is sometimes cheap and sometimes impossible.',
           {0: 'Paragraph 2 explains why prices move at all.', 1: 'Paragraph 3 is about the cost of an empty room.'}),
          ('Booking early buys certainty and booking late buys a '
           '____________.', None, 'chance',
           'Paragraph 4, which the writer calls the honest advice.')])],
   listen=[
    dict(heading='Inside a travel company', part='Part 4',
         task='A talk to business students · note completion', band='l4',
         qtype='Questions 43-48',
         script=[
          ('Speaker', 'I price holidays for a living and I am going to '
           'tell you how it actually works, because the version in '
           'textbooks is wrong.'),
          ('Speaker', 'We buy the rooms and the seats a year ahead. '
           'That money is gone. From that moment I am not trying to '
           'make a margin on each sale. I am trying to fill an '
           'aircraft, and an empty seat is a total loss while a cheap '
           'seat is a partial recovery.'),
          ('Speaker', 'This is why two people in the same row have paid '
           'different prices. Neither was cheated. The first bought '
           'certainty in January and the second bought a chance in '
           'June.'),
          ('Speaker', 'The advertised price is a different job '
           'altogether. It is not a description of what you will pay. '
           'It exists to make the telephone ring, and it is attached to '
           'the worst rooms on the least popular dates. It is legal if '
           'somebody can genuinely get it. It generates more complaints '
           'than everything else we do combined.'),
          ('Speaker', 'And here is the uncomfortable part for anybody '
           'planning to work in this industry. The system works because '
           'customers believe a price means something. If everybody '
           'understood the pricing, half of them would wait, and the '
           'business would have to change completely.'),
          ('Speaker', 'I would say the same to a regulator, by the way. '
           'I am describing it accurately, not defending all of it.')],
         items=[
          ('Rooms and seats are bought a ____________ ahead.', None,
           'year', 'After which that money is spent.'),
          ('An empty seat is a total loss while a cheap seat is a '
           'partial ____________.', None, 'recovery',
           'Which is why two prices can differ.'),
          ('The first passenger bought ____________ in January.',
           None, 'certainty', 'And the second bought a chance in '
           'June.'),
          ('The advertised price exists to make the ____________ '
           'ring.', None, 'telephone',
           'Rather than to describe what you will pay.'),
          ('It generates more ____________ than everything else '
           'combined.', None, 'complaints',
           'Although it is legal if genuinely available.'),
          ('The speaker says the system works because customers '
           'believe a price ____________ something.', None, 'means',
           'And that if everybody understood it, half would wait.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Prices and information',
    intro=('Work the card first: a minute of notes, the long turn, then '
           'the one or two questions that round it off. The discussion '
           'after that: explain the mechanism, then say what you think '
           'should change.'),
    cue=('Describe something you booked or paid for in advance.',
         ['say what it was',
          'say how far ahead you booked it',
          'say what it cost',
          'and explain whether it was good value']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Was the price clear?',
        'Would you book that far ahead again?',
        'Should companies have to advertise the price most people pay?',
        'Why do prices for the same thing differ so much?',
        'Is it the customer’s job to find out?'],
    shape=[('answer', 'I think the advertised price should be the one '
            'most customers actually pay.'),
           ('support', 'At present it applies to a few rooms on the '
            'least popular dates, which is legal and misleading.'),
           ('support', 'Prices differ because the company has already '
            'paid for the seats and is trying to fill them.'),
           ('follow-up', 'So I would require a typical price to be '
            'shown beside the lowest one.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How a package holiday is sold',
         figure=_SOLD,
         prompt='The diagram shows how a package holiday is sold. '
                'Describe the process.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The diagram shows the five stages by which a package holiday '
          'is sold.',
          'In the first stage the company buys hotel rooms and aircraft '
          'seats about a year in advance. In the second a price is set, '
          'and the diagram notes that the aim is to fill the rooms '
          'rather than to cover the cost of each one.',
          'In the third stage the cheapest few rooms are advertised, in '
          'order to attract enquiries, and in the fourth most customers '
          'book at a higher price than the one advertised.',
          'In the final stage any rooms that remain unsold are reduced '
          'as the departure date approaches.',
          'The key point the diagram makes is that the price is decided '
          'at the second stage and adjusted at the last, so the '
          'advertised figure in the middle describes neither.'],
         notes=['Each stage is one sentence and in order, with the '
                'diagram’s own annotations used rather than '
                'ignored.',
                'The answer does not moralise about the practice, '
                'because a Task 1 answer must not.',
                'The final sentence identifies what the diagram is '
                'really showing.'],
         criterion=[('All five stages described', 'Task Achievement'),
                    ('The diagram’s annotations used', 'Task '
                     'Response'),
                    ('No opinion offered', 'Task Response'),
                    ('The passive used throughout', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Purpose: to, in order to, so that',
    explain='Use to or in order to plus a verb, and so that plus a '
            'clause.',
    examples=['Rooms are advertised cheaply to attract enquiries.',
              'The price is set in order to fill the aircraft.',
              'Prices fall so that rooms are not left empty.',
              'They buy early so that supply is certain.'],
    items=[('Rooms are advertised cheaply (attract) enquiries.',
            'Rooms are advertised cheaply to attract enquiries.'),
           ('The price is set (fill) the aircraft.',
            'The price is set in order to fill the aircraft.'),
           ('Prices fall (rooms / not / be left empty).',
            'Prices fall so that rooms are not left empty.'),
           ('They buy early (supply / be certain).',
            'They buy early so that supply is certain.'),
           ('The seat is cheap (recover) something.',
            'The seat is cheap in order to recover something.')],
    task='Write each sentence with to, in order to or so that.'),
   vocab=[('thirty-eight', 'the number 38'),
          ('unaffected', 'not changed by something'),
          ('unsustainable', 'not able to continue at that level'),
          ('sprains', 'injuries from twisting a joint'),
          ('smallpox', 'a serious disease now wiped out'),
          ('seventy', 'the number 70'),
          ('same-day', 'happening on the same day'),
          ('refrigerated', 'kept cold by machine')],
   expr=[('That money is gone.', 'describing a cost already paid'),
         ('Neither was cheated.', 'defending a price difference'),
         ('It exists to make the telephone ring.',
          'naming the purpose of an advertisement'),
         ('I am describing it, not defending it.',
          'separating description from approval')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Travel and its cost to the planet',
   step=3,
   read=[
    dict(heading='Three ways to travel, three footprints',
         kind='Short factual article',
         task='Note completion and matching information',
         band='acad', qtype='Questions 49-55',
         paras=[
          'Comparing the environmental cost of travelling is harder '
          'than it looks, because the honest comparison has to be per '
          'person and per kilometre, and most published figures are '
          'neither. A full coach and an empty one have the same '
          'emissions and very different costs per passenger. The '
          'figures below are per person per kilometre, for a typical '
          'load rather than a full one.',
          'A train on an electrified line is the lowest of the three '
          'at about thirty-five grams. A coach is close behind at '
          'about forty, which surprises people who assume rail is in a '
          'different class. A car carrying one person is about a '
          'hundred and seventy, and the same car carrying four is '
          'about forty-three. That is the single most useful fact in '
          'this whole subject. How full the vehicle is matters more '
          'than what kind of vehicle it is.',
          'Flying is different in kind rather than in degree. A '
          'short-haul flight is around two hundred and fifty grams per '
          'person per kilometre, and the distances are far greater. '
          'One return flight of two thousand kilometres can exceed a '
          'year of ordinary local travel. Nothing available today '
          'changes that arithmetic much, which is why the honest '
          'advice about flying is about how often rather than about '
          'how.',
          'The practical conclusion is unglamorous. Filling vehicles, '
          'choosing the train where the line is electrified, and taking '
          'one longer holiday instead of three short ones do more than '
          'any change of equipment. None of these is a sacrifice of the '
          'kind people expect to be asked for, and that is precisely '
          'why they are rarely the advice that gets attention.'],
         items=[
          ('The figures are given per person and per ____________.',
           None, 'kilometre', 'Paragraph 1, for a typical load.'),
          ('A train on an electrified line emits about ____________ '
           'grams.', None, 'thirty-five',
           'Paragraph 2, the lowest of the three.'),
          ('A car carrying four people emits about ____________ '
           'grams per person.', None, 'forty-three',
           'Paragraph 2, against a hundred and seventy for one.'),
          ('The most useful fact is how ____________ the vehicle is.',
           None, 'full', 'Paragraph 2, after the car comparison.'),
          ('A short-haul flight is around ____________ hundred and '
           'fifty grams.', None, 'two',
           'Paragraph 3, and the distances are far greater.'),
          ('The honest advice about flying is about how '
           '____________.', None, 'often',
           'Paragraph 3, rather than about how.'),
          ('Which paragraph gives the practical conclusion?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4'], 2,
           'Filling vehicles and taking fewer, longer trips.',
           {0: 'Paragraph 2 gives the figures for each kind of '
               'journey.', 1: 'Paragraph 3 is about distance rather than what to do.'})])],
   listen=[
    dict(heading='A researcher on aviation and emissions',
         part='Part 4',
         task='A short lecture · note completion', band='l4', qtype='Questions 56-61',
         script=[
          ('Speaker', 'I am going to give you four numbers and then '
           'tell you which one actually matters.'),
          ('Speaker', 'Per person per kilometre: electrified train, '
           'about thirty-five grams. Coach, about forty. Car with one '
           'person, a hundred and seventy. Same car with four, about '
           'forty-three.'),
          ('Speaker', 'Notice what that last pair does. The car did not '
           'change. The emissions did not change. What changed was the '
           'number of people in it, and that single factor moved the '
           'figure by a factor of four. Occupancy matters more than '
           'technology, and it is the thing nobody advertises because '
           'nobody sells it.'),
          ('Speaker', 'Now flying, which is in a different category. '
           'About two hundred and fifty grams per person per kilometre, '
           'and the kilometres are enormous. One return flight of two '
           'thousand kilometres is roughly a year of a typical '
           'person’s local travel.'),
          ('Speaker', 'People ask me about new fuels. The honest answer '
           'is that nothing available at scale today changes the '
           'arithmetic for flying. It may in twenty years. Planning '
           'your travel on the assumption that it already has is not a '
           'decision about technology; it is a decision to do nothing '
           'and feel better.'),
          ('Speaker', 'So: fill the vehicle, take the train where the '
           'line is electrified, and fly less often rather than '
           'differently. It is dull, it is unpopular with everybody who '
           'wants to sell you something, and it is what the numbers '
           'say.')],
         items=[
          ('A coach emits about ____________ grams per person per '
           'kilometre.', None, 'forty',
           'Against thirty-five for an electrified train.'),
          ('A car with four people emits about ____________ grams per '
           'person.', None, 'forty-three',
           'Against a hundred and seventy with one.'),
          ('The speaker says ____________ matters more than '
           'technology.', None, 'occupancy',
           'Because nobody sells it, nobody advertises it.'),
          ('A return flight of two thousand kilometres equals about a '
           '____________ of local travel.', None, 'year',
           'For a typical person, the speaker says.'),
          ('Nothing available at ____________ today changes the '
           'arithmetic for flying.', None, 'scale',
           'Although it may in twenty years.'),
          ('The advice is to fly less ____________ rather than '
           'differently.', None, 'often',
           'Which the speaker admits is dull.')])],
   speak=dict(
    part='Part 3', focus='Travel and the environment',
    sounds=[('Join a final consonant to a following vowel. An island sounds '
             'like a nisland, and for an hour has no gaps in it.'),
            ('Say these together with no breaks: on an island, in late May, '
             'about an hour, out of season.'),
            ('Holiday words put the stress at the front: HARbour, HOliday, '
             'Island, where the s is silent. Arrive and depart take the second '
             'part.'),
            ('Practise one sentence: we walked round the whole island in five '
             'hours.'),
            ('Record yourself describing a holiday. Listen for a place where '
             'you left a gap between two words that should join.')],
    intro='Use a figure if you can, then say what you would actually '
          'do.',
    qs=['Should people fly less?',
        'Is it fair to ask individuals to change how they travel?',
        'What would make people use trains more?'],
    shape=[('answer', 'I think the useful change is flying less often '
            'rather than flying differently.'),
           ('support', 'One return flight of two thousand kilometres '
            'is about a year of ordinary local travel.'),
           ('support', 'And filling a car matters more than what kind '
            'of car it is: four people in one car is close to a '
            'coach.'),
           ('follow-up', 'What would move people onto trains is price '
            'and reliability rather than persuasion.')]),
   write=[
    dict(task='Task 2',
         heading='Should flying be made more expensive?',
         prompt='Some people think taxes on flying should be increased '
                'to reduce the number of flights. Others think this '
                'would be unfair. Discuss both views and give your own '
                'opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Tax frequent flying rather than flying',
               [('The case for a tax',
                 ['a flight of two thousand kilometres equals a year '
                  'of local travel',
                  'and nothing available now changes that '
                  'arithmetic']),
                ('The case that it is unfair',
                 ['a flat tax takes the same sum from a family going '
                  'home once a year as from somebody flying monthly',
                  'and most flights are taken by a small minority']),
                ('A tax that rises with each flight answers both',
                 ['the first flight a year is cheap and the fifth is '
                  'expensive',
                  'which reduces flights where they are least '
                  'needed'])]),
         model=[
          'Taxing flights to reduce their number is one of the few '
          'environmental policies that would certainly work, and one of '
          'the least fair in its usual form.',
          'The case for it is arithmetic. A return flight of two '
          'thousand kilometres produces roughly as much as a typical '
          'person’s local travel in a year, and no fuel available '
          'at scale today changes that. If flights must fall, price is '
          'the mechanism that reliably reduces them.',
          'The case against is about who pays. A flat tax takes the '
          'same amount from a family visiting relatives once a year as '
          'from somebody who flies every month for work or pleasure. '
          'Since a small minority take most flights, a flat tax '
          'collects a great deal from people who fly rarely and barely '
          'inconveniences those who fly constantly.',
          'The answer that follows is a tax that rises with each flight '
          'a person takes in a year. The first is taxed lightly, the '
          'fourth heavily. That reduces flying where reducing it costs '
          'least in human terms, and leaves the once-a-year journey '
          'almost untouched.',
          'It is administratively harder than a flat tax, and that is '
          'the real objection to it. But difficulty of collection is a '
          'poor reason to choose a policy that is both less effective '
          'and less fair.'],
         notes=['The opening sentence states both sides in one line, '
                'which is an efficient way to begin a discussion '
                'essay.',
                'The objection is about distribution, which is the '
                'strongest form of the fairness argument.',
                'The last paragraph names the real objection to the '
                'writer’s own proposal and answers it.'],
         criterion=[('Both views discussed fully', 'Task Response'),
                    ('A proposal that answers the objection',
                     'Task Response'),
                    ('The writer’s own weakness addressed',
                     'Coherence and Cohesion'),
                    ('Accurate conditionals and comparatives',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Comparing quantities: equals, is roughly, is about',
    explain='Use equals, is roughly and amounts to for comparing '
            'sizes, and a factor of for multiples.',
    examples=['One flight equals a year of local travel.',
              'A coach is roughly the same as a train.',
              'Occupancy moved the figure by a factor of four.',
              'The difference amounts to a hundred grams.'],
    items=[('One flight (equal) a year of local travel.',
            'One flight equals a year of local travel.'),
           ('A coach is (roughly) a train.',
            'A coach is roughly the same as a train.'),
           ('Occupancy moved it (factor) four.',
            'Occupancy moved it by a factor of four.'),
           ('The difference (amount) a hundred grams.',
            'The difference amounts to a hundred grams.'),
           ('Four people in a car is (about) a coach.',
            'Four people in a car is about the same as a coach.')],
    task='Write each comparison with the phrase given.'),
   vocab=[('rashes', 'red marks on the skin'),
          ('pharmacist', 'a person trained to prepare medicines'),
          ('one-kilogram', 'weighing one kilogram'),
          ('measurements', 'figures taken by measuring'),
          ('industrially', 'by industry, on a large scale'),
          ('extending', 'making longer or larger'),
          ('vitae', 'as in curriculum vitae, a record of a career'),
          ('two-thirds', 'two parts out of three')],
   expr=[('The honest comparison has to be per person.',
          'insisting on a fair measure'),
         ('Occupancy matters more than technology.',
          'ranking two factors'),
         ('A decision to do nothing and feel better.',
          'naming a comfortable evasion'),
         ('It is what the numbers say.', 'closing on evidence')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='The two routes, timed, on a four-hundred-word text',
  body='In Foundation 1 you timed skim-and-scan against the loop on a '
       'passage of about two hundred words, and the loop won on marks '
       'while losing a few seconds. This page repeats the experiment '
       'at the length you will meet in Volume 1, because the result '
       'changes and the change is the point. Take the cycle 5 passage, '
       'which is four paragraphs and seven questions. Do it by '
       'skim-and-scan: read it quickly, then hunt for each answer. '
       'Record your time and your score. The next day, do the cycle 4 '
       'passage by the loop: load the questions, read one paragraph at '
       'a time, answer as you go. Record both again. At two hundred '
       'words the two methods were close. At four hundred they are not, '
       'and the reason is mechanical rather than mysterious: scanning '
       'requires you to hold seven questions in your head while reading '
       'four paragraphs, and nobody can do that, so you re-read. The '
       'loop holds one paragraph and whichever questions it answers, '
       'which is a load that fits. Every passage in Volume 1 is longer '
       'than these. The gap you measure today is the gap you are '
       'choosing to live with for the rest of the course.',
  panel=[('Same experiment, twice the length',
          'Two hundred words then, four hundred now.'),
         ('Record time and score for both',
          'Two numbers each, written down.'),
         ('Why the gap grows',
          'Scanning asks you to hold seven questions at once.'),
         ('The loop holds one paragraph',
          'Which is a load that actually fits.')],
  qs=['What were my two times and my two scores?',
      'How many times did I re-read in each method?',
      'Was the gap bigger than in Foundation 1?',
      'Which method left me calmer at the end?',
      'What will I use in Volume 1?'],
  task='Do the timed comparison on the cycle 4 and cycle 5 passages, '
       'one method each, on different days. Write the four numbers '
       'beside the ones you recorded in Foundation 1 unit 5.'),

 outlining=dict(
  title='Spot the intruder and spot the overlap, on one plan',
  body='You now have three tests for a plan. The intruder test from '
       'Foundation 1 unit 2: does this sentence support either of my '
       'ideas? The overlap test from unit 3: would the support for one '
       'idea sit under the other? The unequal test from unit 6: if one '
       'idea were false, would the other still stand? This page runs '
       'the first two on the same plan, because at Task 2 length they '
       'catch different things and most weak plans contain both faults '
       'at once. Work in this order and it takes ninety seconds. '
       'First, read every line of support and ask which idea it belongs '
       'to. Anything that belongs to neither is an intruder: cross it '
       'out now, because in the essay it becomes the sentence an '
       'examiner cannot place. Second, take what survives and ask '
       'whether any piece of support would sit equally well under a '
       'different idea. If it would, the two ideas are one idea and '
       'you need another. The order matters: removing intruders first '
       'makes the overlap obvious, because what is left under each idea '
       'is only what genuinely supports it. Do this on the plan for the '
       'cycle 5 question before you write a word of it.',
  frame=('Tax frequent flying rather than flying',
         [('Flying is different in kind from other travel',
           ['one return flight of two thousand kilometres equals a '
            'year of local travel',
            'and nothing available at scale changes that arithmetic']),
          ('A flat tax falls on the wrong people',
           ['it takes the same sum from a yearly visit as from a '
            'monthly trip',
            'and a small minority take most flights']),
          ('A rising tax answers both',
           ['the first flight is cheap and the fourth is expensive',
            'so flights fall where they are least needed'])]),
  qs=['Does every line of support belong to one of my ideas?',
      'Which line belongs to neither?',
      'Would any support sit equally well under another idea?',
      'If one idea were false, would the others stand?',
      'How many lines did I cross out?'],
  task='Write a nine-line plan for the cycle 5 question, then run the '
       'intruder test and the overlap test in that order. Count what '
       'each test removed.',
  answers=['run the intruder test first; it makes overlaps visible',
           'an intruder is true and belongs to another question',
           'support that moves freely means one idea, not two',
           'ninety seconds of testing saves five minutes of writing',
           'most weak plans contain both faults at once']),

 candos=['I can book a break and check what a price includes',
         'I can report what a speaker at a meeting actually proposed',
         'I can describe a chart where one group falls and three rise',
         'I can compare two reading methods on a four-hundred-word '
         'text',
         'I can run the intruder and overlap tests on one plan'],

 tip=('At two hundred words the two reading methods are close. At four '
      'hundred they are not, because scanning asks you to hold seven '
      'questions in your head at once and nobody can.'))
