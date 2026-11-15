# -*- coding: utf-8 -*-
"""Practice Test 5 — the exit test for Volume 5.

It draws on the whole series up to Unit 50: the campus and everyday
vocabulary of Units 1-20, the academic fields of Units 21-40, and the
denser prose and five-cycle habits of Units 41-50. The item table is the
same 97 that Practice Tests 1 to 4 pass.
"""
from content._g import gaps

_G1, _A1 = gaps(
    'Every instrument drifts, and the useful question is not whether yours has drifted but '
    'how you would k{now}. A balance that reads two milligrams heavy every morning is not '
    'broken; it is biased, and a bias is invis{ible} from the inside, because every reading '
    'agrees with every other one. What catches it is a standard: an object of known mass that '
    'you weigh on purp{ose}, at a fixed interval, and record whether or not anything looks '
    'wr{ong}. Laboratories that do this find their faults in a week. Laboratories that wait '
    'until a result looks implaus{ible} find them when somebody else fails to repr{oduce} the '
    'work, which is three years later and consider{ably} more expensive. The procedure is '
    'dull, the record is almost always unevent{ful}, and the whole value of it lies in the '
    'two occasions in ten years when the entry is not the one you expe{cted}. Nobody has '
    'found a cheaper way of being sure, and the labs that abandoned the practice did so '
    'because nothing had gone wrong for a long t{ime}.')

_G2, _A2 = gaps(
    'A queue is a price paid in minutes, and it is collected from everybody who cannot afford '
    'to leave. That is the part the argument for queueing usually mi{sses}. Rationing by '
    'waiting looks fairer than rationing by money because nobody hands anything over, and the '
    'cost is real, unequal and unrecord{ed}: an hour is an hour to a pensioner and an hour of '
    'wages to somebody paid by the sh{ift}. Nor does the money go anywhere. A charge produces '
    'revenue that can be spent on the thing everybody is queueing f{or}; a queue produces '
    'nothing at all except the waiting its{elf}, which is why economists describe it as the '
    'most expensive method of allocat{ion} in ordinary use. None of this settles what a '
    'hospital or a housing office ought to do, because a charge can exclude the people a '
    'service exi{sts} for, and that objection is decis{ive} wherever the service is meant to '
    'reach them. What it does settle is that the choice is between two prices rather than '
    'between a price and no price, and the second price is simply harder to s{ee} and '
    'impossible to give b{ack}.')

TEST = dict(
    n=5,

    # ------------------------------------------------------------- READING --
    reading=[
        dict(
            gap_text=_G1, gap_ans=_A1,
            docs=[
                ('notice', 'Northgate University Library · reading room works, '
                           '6 January to 28 March', [
                    '# What closes',
                    'The Long Reading Room closes for twelve weeks from 6 January. The '
                    'collection it holds moves to the closed store and is available on '
                    'request.',
                    '# What replaces it',
                    '* 180 study places in the Sports Hall annexe, open 08.00 to 22.00, '
                    'silent, no bookable desks.',
                    '* 40 places in the Law Library reading room, bookable in two-hour '
                    'slots, for taught postgraduates only.',
                    '# Requesting a book from the store',
                    '* Requests placed before 10.00 are delivered to the issue desk the '
                    'same day at 14.00. Requests after 10.00 arrive the next working day.',
                    '# What does not change',
                    '* Twenty-four hour access to the electronic collection, the laptop '
                    'loan scheme and the group study rooms in the Hepworth Building.',
                ], 'notice'),
                ('email', 'library@northgate.edu', 'r.oyelowo@student.northgate.edu',
                 '19/12/2030', 'The annexe, the two-hour slots and what I would ask for '
                               'instead', [
                     'Dear Ms Oyelowo,',
                     '',
                     'Thank you for writing before the works start rather than in week',
                     'three, which is when we usually hear.',
                     '',
                     'On the figures you are right and the comparison is not quite the one',
                     'you have made. The Long Room holds 240 places and the annexe holds',
                     '180, so we are 60 down rather than 100: the Law Library places exist',
                     'but they are restricted, and I accept that a restricted place is not',
                     'much comfort to an undergraduate.',
                     '',
                     'On the two-hour slots I can do nothing. That restriction was the',
                     'condition on which the Law Faculty agreed to open its room at all,',
                     'and the alternative was 40 places fewer rather than 40 places',
                     'unrestricted.',
                     '',
                     'What I can do is the store deliveries. The 10.00 cut-off is ours and',
                     'not the contractor’s, and a second run at 16.00 for requests placed',
                     'before 14.00 costs us one member of staff for an hour a day. I am',
                     'putting that to the committee on the 7th of January. If your society',
                     'writes in support of that one change rather than against the works in',
                     'general, it will carry.',
                     '',
                     'Priya Venkataraman, Reader Services',
                 ]),
            ],
            daily=[
                ('How long does the Long Reading Room close for?',
                 ('Six weeks', 'Twelve weeks', 'A term', 'Until 28 January'), 1,
                 'The notice gives 6 January to 28 March, which the email treats as fixed '
                 'and not open to argument.'),
                ('Who may book the forty places in the Law Library?',
                 ('Any student', 'Undergraduates only', 'Taught postgraduates only',
                  'Staff only'), 2,
                 'The notice restricts them to taught postgraduates in two-hour slots, '
                 'which is the restriction the email declines to lift.'),
                ('A book requested at 11.00 on Tuesday arrives when?',
                 ('At 14.00 on Tuesday', 'The next working day', 'Within an hour',
                  'At 16.00 on Tuesday'), 1,
                 'Only requests placed before 10.00 reach the issue desk the same day at '
                 '14.00.'),
                ('What correction does the email make to Ms Oyelowo’s figures?',
                 ('The annexe holds more places than she thought',
                  'The loss is 60 places rather than 100',
                  'The Long Room holds 180 places',
                  'The works will take longer than announced'), 1,
                 '240 less 180 is 60, and the Law Library places exist although they are '
                 'restricted.'),
                ('What does the library offer to change?',
                 ('The two-hour slots',
                  'The closure dates',
                  'A second store delivery at 16.00',
                  'Access to the electronic collection'), 2,
                 'The 10.00 cut-off is the library’s own, and a second run costs one '
                 'member of staff for an hour a day.'),
            ],
            passage=('The Bacterium Nobody Would Believe', [
                'For most of the twentieth century the stomach was held to be sterile. The '
                'reasoning was straightforward and almost everybody accepted it: nothing '
                'living could survive in acid of that strength, so the ulcers found in the '
                'stomach lining had to be explained by something else, and the explanation '
                'offered was stress, diet and an excess of acid. The treatment followed from '
                'the theory. Patients were given drugs to suppress acid, were told to change '
                'their habits, improved while they took the drugs and relapsed when they '
                'stopped.',

                'Two Australian researchers reported in 1983 that a curved bacterium was '
                'present in the inflamed tissue of most of the patients they examined. The '
                'claim was received without enthusiasm, for reasons that were not entirely '
                'unreasonable: the organism was difficult to culture, the association might '
                'be a consequence of the ulcer rather than its cause, and the sterile '
                'stomach was not a casual assumption but a conclusion drawn from the '
                'chemistry. One of the two, unable to obtain approval for an experiment on '
                'patients, drank a preparation of the bacterium himself, developed '
                'gastritis within days and recovered after antibiotics.',

                'The self-experiment is the part of the story everybody remembers and it was '
                'not what settled the question. What settled it was a series of trials in '
                'which antibiotics cured ulcers that acid suppression had only ever managed, '
                'and the two researchers received a Nobel prize in 2005. The useful lesson '
                'is not that the profession was obstinate, since the objections raised were '
                'the ones a careful reader should raise. It is that an argument from '
                'mechanism, however sound the chemistry behind it, had been standing in for '
                'a measurement nobody had taken.'], 280),
            academic=[
                ('What was the accepted view of the stomach for most of the twentieth '
                 'century?',
                 ('That it healed slowly', 'That it was sterile',
                  'That it produced too little acid', 'That ulcers were rare'), 1,
                 'The passage says nothing living was thought able to survive acid of that '
                 'strength, which is what made the bacterium implausible.'),
                ('What followed from the accepted theory?',
                 ('Surgery for most patients',
                  'Acid suppression, with improvement during treatment and relapse after it',
                  'A change of diet alone',
                  'No treatment at all'), 1,
                 'The treatment matched the theory, and the pattern of relapse is given as '
                 'part of what the theory predicted.'),
                ('Why does the writer call the reception of the 1983 claim not entirely '
                 'unreasonable?',
                 ('The researchers were unknown',
                  'The organism was hard to culture, the association might be an effect, '
                  'and the sterile stomach rested on chemistry',
                  'The claim was not published in a journal',
                  'No patients had been examined'), 1,
                 'Three specific objections are listed, and the writer says they are the '
                 'ones a careful reader should raise.'),
                ('What does the writer say settled the question?',
                 ('The self-experiment',
                  'The Nobel prize',
                  'Trials in which antibiotics cured what acid suppression had managed',
                  'The difficulty of culturing the organism'), 2,
                 'The self-experiment is called the part everybody remembers and explicitly '
                 'not the thing that settled it.'),
                ('What is the lesson the passage ends on?',
                 ('That the profession was obstinate',
                  'That self-experiment is a legitimate method',
                  'That an argument from mechanism had been standing in for a measurement',
                  'That chemistry is unreliable'), 2,
                 'However sound the chemistry, nobody had taken the measurement that the '
                 'mechanism was being used to replace.'),
            ],
        ),
        dict(
            gap_text=_G2, gap_ans=_A2,
            docs=[
                ('notice', 'City of Harlbury · consultation on the Saturday market, '
                           'closes 14 February', [
                    '# What is proposed',
                    'The Saturday market moves from Cross Street to the Guildhall square '
                    'from 1 June, and the forty-eight pitches become sixty.',
                    '# Why',
                    '* Cross Street carries two bus routes which are diverted every '
                    'Saturday at a cost of about £41,000 a year.',
                    '* The square is larger, and twelve applicants have been on the '
                    'waiting list for a pitch since 2028.',
                    '# What traders have said so far',
                    '* Thirty-one of the forty-eight have responded. Nineteen object, nine '
                    'support and three are undecided.',
                    '# The two objections most often made',
                    '* Loading: the square has no vehicle access after 09.00.',
                    '* Footfall: Cross Street is on the route from the station.',
                    '# How to respond',
                    '* In writing to the address below by 14 February. Responses are '
                    'published with the committee papers.',
                ], 'notice'),
                ('email', 'markets@harlbury.gov.uk', 'f.szabo@harlburymarket.org.uk',
                 '28/01/2031', 'Market move — the loading hour is the whole question', [
                     'Dear Mr Szabo,',
                     '',
                     'Thank you for the association’s response, which is the only one so',
                     'far to separate the two objections instead of running them together.',
                     '',
                     'On footfall I am not persuaded and I will say why. The station route',
                     'argument assumes the market is reached on the way to somewhere else.',
                     'Our counts say otherwise: 71 per cent of Saturday visitors arrive',
                     'between 09.30 and 11.30 and 64 per cent come from the three car parks,',
                     'all of which are nearer the square than Cross Street. If the counts',
                     'are wrong I would like to see better ones, and nobody has produced',
                     'any.',
                     '',
                     'On loading you are right and the notice is misleading. Vehicle access',
                     'to the square ends at 09.00 because of the pedestrian zone order, and',
                     'a trader who sets up at 08.30 cannot restock a stall that sells out at',
                     'eleven. That is not a preference. It is the difference between a',
                     'viable pitch and a bad morning.',
                     '',
                     'I am asking the committee for an amendment to the order creating a',
                     'loading window from 13.30 to 14.00 for market traders only. If that is',
                     'refused the move should not proceed, and I will say so in the papers.',
                     '',
                     'Dervla Aitchison, Markets Officer',
                 ]),
            ],
            daily=[
                ('What change is proposed?',
                 ('Forty-eight pitches become sixty, on Cross Street',
                  'The market moves to the Guildhall square and gains twelve pitches',
                  'The market closes',
                  'The bus routes are diverted permanently'), 1,
                 'The move is from Cross Street to the square from 1 June, with the pitches '
                 'rising from forty-eight to sixty.'),
                ('What does the diversion of the two bus routes cost?',
                 ('£41,000 a year', '£4,100 a year', 'Nothing',
                  'The notice does not say'), 0,
                 'It is given as one of the two reasons for the move, alongside the twelve '
                 'applicants waiting since 2028.'),
                ('How many of the forty-eight traders have responded?',
                 ('Nineteen', 'Thirty-one', 'Nine', 'Twelve'), 1,
                 'Of those thirty-one, nineteen object, nine support and three are '
                 'undecided.'),
                ('Why does the officer reject the footfall objection?',
                 ('The traders have not responded in enough numbers',
                  'Counts show most visitors arrive mid-morning and from the car parks',
                  'Cross Street is being pedestrianised anyway',
                  'The station is closing'), 1,
                 'She adds that she would welcome better counts and that nobody has '
                 'produced any.'),
                ('What does the officer say she will do if the loading amendment is '
                 'refused?',
                 ('Proceed with the move anyway',
                  'Reduce the number of pitches',
                  'Say in the committee papers that the move should not proceed',
                  'Extend the consultation'), 2,
                 'She treats the loading window as the condition of the move rather than an '
                 'improvement to it.'),
            ],
            passage=('The Order of the Questions', [
                'A checklist is an unpromising intervention. It contains no new drug and no '
                'new equipment, it takes two minutes, and every item on it names something '
                'the people in the room already know. The surgical checklist introduced '
                'through a group of hospitals in the late two thousands nevertheless produced '
                'a fall in deaths and complications large enough to be reported in every '
                'medical journal in the world, and the puzzle it left behind is why.',

                'The explanation most often offered is that the list catches the forgotten '
                'step, and that is the smallest part of it. What the list also does is fix '
                'an order and a moment at which certain questions must be asked out loud: '
                'whether the patient is the patient named on the form, whether the side to '
                'be operated on has been marked, whether the antibiotic has been given, and '
                'whether anybody in the room has a concern. The last of those is the item '
                'that changes behaviour, because it converts an objection from an '
                'interruption into a step in a procedure.',

                'The evidence since has been mixed, which is what the mechanism predicts. '
                'Where the list has been introduced as a form to be signed, the effect has '
                'been small or absent; where it has been introduced as a spoken routine with '
                'the surgeon answering in turn, the effect has reappeared. That difference '
                'is not a detail of implementation. It is the whole of the intervention, and '
                'it explains both the original result and the failures to reproduce it '
                'without requiring anybody to have been careless with the data.'], 264),
            academic=[
                ('Why does the writer call a checklist an unpromising intervention?',
                 ('It is expensive',
                  'It contains nothing new and names what the room already knows',
                  'It takes too long',
                  'It has never been tested'), 1,
                 'No new drug, no new equipment, two minutes, and every item already '
                 'known.'),
                ('What is the explanation the writer says is the smallest part of it?',
                 ('That the list fixes an order',
                  'That the list catches the forgotten step',
                  'That the list is spoken aloud',
                  'That the list is signed'), 1,
                 'The writer concedes the forgotten step and then puts the weight '
                 'elsewhere.'),
                ('Which item does the writer say changes behaviour?',
                 ('Whether the patient is the right patient',
                  'Whether the side has been marked',
                  'Whether the antibiotic has been given',
                  'Whether anybody in the room has a concern'), 3,
                 'It converts an objection from an interruption into a step in a '
                 'procedure.'),
                ('What has the later evidence shown?',
                 ('A consistent effect everywhere',
                  'No effect anywhere',
                  'An effect where the list is spoken and little where it is merely signed',
                  'An effect only in the original hospitals'), 2,
                 'Which the writer says is exactly what the proposed mechanism '
                 'predicts.'),
                ('What does the writer say about that difference?',
                 ('It is a detail of implementation',
                  'It is the whole of the intervention',
                  'It shows the original result was wrong',
                  'It requires carelessness with the data'), 1,
                 'And it explains both the original finding and the failures to reproduce '
                 'it without blaming anybody.'),
            ],
        ),
    ],

    # ----------------------------------------------------------- LISTENING --
    listening=[
        dict(
            warm=[
                ('Woman: Is the Long Room shut for the whole term?',
                 ('Twelve weeks, so most of it.', 'No, it is open.',
                  'A hundred places.', 'On the seventh.'), 0,
                 'Twelve weeks from January covers the greater part of the teaching '
                 'term.'),
                ('Woman: Can I book a desk in the annexe?',
                 ('No. It is first come, first served.', 'Yes, for two hours.',
                  'Yes, online.', 'A hundred and eighty.'), 0,
                 'The annexe has no bookable desks, unlike the Law Library room.'),
                ('Man: I requested a book at eleven. When will it come?',
                 ('Tomorrow, I am afraid.', 'At two o’clock today.',
                  'Within the hour.', 'At the issue desk.'), 0,
                 'The cut-off for same-day delivery is ten in the morning.'),
                ('Man: Have you heard from the committee yet?',
                 ('Not until the seventh.', 'Yes, last week.',
                  'They refused it.', 'At sixteen hundred.'), 0,
                 'The second delivery run goes to the committee on 7 January.'),
                ('Woman: Why are the Law places restricted?',
                 ('That was the condition for opening the room at all.',
                  'Because the room is small.', 'They are not restricted.',
                  'Two-hour slots.'), 0,
                 'The alternative was forty places fewer rather than forty '
                 'unrestricted.'),
                ('Man: Should the society object to the whole scheme?',
                 ('Ask for the one change that can be granted.',
                  'Yes, object to all of it.', 'No, say nothing.',
                  'Sixty places.'), 0,
                 'A narrow request has a chance of carrying where a general objection '
                 'has none.'),
                ('Woman: Did you check the balance against the standard?',
                 ('Every Monday, and it was two milligrams out.',
                  'No, it looked fine.', 'Yes, it is broken.',
                  'Three years later.'), 0,
                 'A bias is invisible from the inside and shows up only against a '
                 'known mass.'),
                ('Man: Why did they stop doing the weekly check?',
                 ('Because nothing had gone wrong for a long time.',
                  'Because the standard was lost.', 'They never started.',
                  'In a week.'), 0,
                 'Which is the reason a dull procedure is usually abandoned.'),
            ],
            convos=[
                ([('Woman', 'Twelve weeks without the Long Room. Where are you going '
                            'to work?'),
                  ('Man', 'The annexe, I suppose. It is silent and it is open until '
                          'ten.'),
                  ('Woman', 'It is a sports hall with a hundred and eighty desks in '
                            'it and no power sockets at half of them.'),
                  ('Man', 'You have been.'),
                  ('Woman', 'I went last week while they were setting it up. The '
                            'desks are fine. The problem is that nothing can be '
                            'booked, so at nine in the morning in week five there '
                            'will be a queue outside it.'),
                  ('Man', 'A queue is fairer than a booking system.'),
                  ('Woman', 'Is it? A queue is paid for in time, and the people who '
                            'can stand in it at half past eight are the people who do '
                            'not have a job at half past eight.'),
                  ('Man', 'I had not thought of it that way.'),
                  ('Woman', 'Neither had I until this term. Anyway, I have given up '
                            'on desks. I am requesting books to the issue desk and '
                            'working in the Hepworth group rooms, which nobody uses '
                            'before eleven.'),
                  ('Man', 'And the ten o’clock cut-off?'),
                  ('Woman', 'That is the one thing they might change. There is a '
                            'proposal for a second run at four, and the librarian has '
                            'more or less told us that if we write in support of that '
                            'single item it will go through. So that is what the '
                            'society is doing, instead of an objection to the whole '
                            'refurbishment, which would be ignored.')],
                 [('What does the woman say the real problem with the annexe is?',
                   ('The hours', 'The noise', 'That nothing can be booked',
                    'The lack of power sockets'), 2,
                   'She grants that the desks are fine and predicts a queue outside '
                   'in week five.'),
                  ('Why does she say a queue is not fairer?',
                   ('It takes longer',
                    'It is paid for in time by whoever can afford to wait',
                    'It cannot be enforced',
                    'It favours postgraduates'), 1,
                   'The people free at half past eight are the people without a job '
                   'at half past eight.')]),
                ([('Man', 'I want to ask about the loading window at the market.'),
                  ('Woman', 'Then you are the first trader this week who wants to '
                            'talk about loading rather than footfall.'),
                  ('Man', 'Footfall I can live with. I sell bread. I sell out by '
                          'eleven and I cannot drive in to restock.'),
                  ('Woman', 'That is exactly the point the association made, and it '
                            'is the one I have accepted.'),
                  ('Man', 'So the window is agreed?'),
                  ('Woman', 'It is asked for. The pedestrian zone order ends vehicle '
                            'access at nine, and changing the order is a committee '
                            'decision rather than mine. I am putting an amendment for '
                            'half past one to two, for market traders only.'),
                  ('Man', 'And if they say no?'),
                  ('Woman', 'Then I shall tell them in the papers that the move '
                            'should not go ahead, and I have written that down so '
                            'that nobody can be in any doubt about it later.'),
                  ('Man', 'That is more than I expected.')],
                 [('What does the trader say he can live with?',
                   ('The loading restriction', 'The footfall question',
                    'The move itself', 'The new pitch fee'), 1,
                   'He sells out by eleven, so restocking is his whole '
                   'difficulty.'),
                  ('What will the officer do if the amendment is refused?',
                   ('Proceed with the move', 'Reduce the pitches',
                    'Tell the committee in the papers that the move should not go '
                    'ahead', 'Resign'), 2,
                   'She has written it down so that nobody can be in doubt '
                   'later.')]),
            ],
            poster=['Long Reading Room · closed 6 Jan to 28 Mar',
                    'Annexe: 180 places, 08.00–22.00, no booking',
                    'Store requests before 10.00 → same day, 14.00'],
            announce=([('Woman',
                        'Two things about the works, and then one request. The first '
                        'is the obvious one: the Long Room is closed from the sixth '
                        'of January and the collection goes into the store. You can '
                        'still have any of it, but you have to ask for it, and the '
                        'cut-off is ten in the morning for a two o’clock '
                        'delivery. The second thing is the annexe. A hundred and '
                        'eighty places, silent, open until ten at night, and nothing '
                        'bookable, which I am aware is not what anybody wanted. The '
                        'forty places in the Law Library are for taught '
                        'postgraduates in two-hour slots, and before anybody writes '
                        'to me about that, those places exist on that condition and '
                        'the alternative was not having them. Now the request. We '
                        'are asking the committee on the seventh for a second store '
                        'delivery at four o’clock, for anything ordered before '
                        'two. That is the one part of all this I can still change, '
                        'and a dozen letters supporting that single item will do '
                        'more than two hundred objecting to the refurbishment.')],
                      [('What must a reader do to use the stored collection?',
                        ('Visit the store', 'Ask for the item in advance',
                         'Apply to the Law Faculty', 'Wait until March'), 1,
                        'Requests before ten in the morning are delivered at two the '
                        'same day.'),
                       ('What does the speaker say about the two-hour slots?',
                        ('They will be reviewed',
                         'The places exist on that condition and the alternative was '
                         'not having them',
                         'They apply to undergraduates too',
                         'They were a mistake'), 1,
                        'She raises it before anybody writes to her about it.')]),
            board=['Every instrument drifts',
                   'A bias agrees with itself',
                   'Weigh a known mass, on purpose, on a schedule',
                   'The dull record is the whole point'],
            talk=([('Man',
                    'Until 2019 the kilogram was a lump of metal in a vault near '
                    'Paris, and every kilogram in the world was defined as the mass '
                    'of that object. It is a good illustration of a problem in '
                    'measurement that has nothing to do with carelessness. Over a '
                    'century the prototype and its official copies drifted apart by '
                    'a few tens of micrograms. Now, which of them had changed? There '
                    'is no answer to that question, because the prototype was the '
                    'definition: if it gained mass, then by definition every other '
                    'mass in the world had lost some. You cannot calibrate a '
                    'standard against itself. The redefinition replaced the object '
                    'with a constant of nature, which is a fixed number that any '
                    'sufficiently careful laboratory can realise for itself, and the '
                    'point of the change was not precision. It was independence: a '
                    'definition that does not sit in a vault cannot drift, and two '
                    'laboratories that disagree now have something external to '
                    'appeal to. I want you to notice the general shape of that, '
                    'because it is the shape of a great many problems in this '
                    'course. A system that contains its own reference point can be '
                    'wrong in a way that nothing inside the system will ever '
                    'reveal.')],
                   [('What was the kilogram until 2019?',
                     ('A constant of nature', 'An object in a vault near Paris',
                      'An average of several copies', 'A legal definition'), 1,
                     'Every kilogram in the world was defined as the mass of that '
                     'one object.'),
                    ('Why can nobody say which object had changed?',
                     ('The measurements were too coarse',
                      'The prototype was the definition, so any drift was in '
                      'everything else',
                      'The copies were lost',
                      'The records were incomplete'), 1,
                     'You cannot calibrate a standard against itself.'),
                    ('What does the speaker say the point of the redefinition was?',
                     ('Precision', 'Independence', 'Cost', 'Convenience'), 1,
                     'A definition that does not sit in a vault cannot drift, and '
                     'disagreeing laboratories have something external to appeal '
                     'to.'),
                    ('What general shape does he want the audience to notice?',
                     ('Standards are usually wrong',
                      'A system containing its own reference point can be wrong '
                      'undetectably',
                      'Measurement improves with time',
                      'Definitions should be legal rather than physical'), 1,
                     'He says it is the shape of a great many problems in the '
                     'course.')]),
        ),
        dict(
            warm=[
                ('Woman: Did your replication work?',
                 ('The numbers came out, eventually.', 'No, I gave up.',
                  'Yes, in a week.', 'Three figures.'), 0,
                 'She obtained the published figures in the end, which is the point of '
                 'the exercise.'),
                ('Woman: Was the code deposited?',
                 ('It was, and it needed a file that was not.',
                  'No, nothing was.', 'Yes, all of it.',
                  'On the Tuesday.'), 0,
                 'A missing file is the commonest obstacle to reproducing an '
                 'analysis.'),
                ('Man: Did you write to the authors?',
                 ('I did, and they sent it the same day.', 'No, I would not dare.',
                  'Yes, twice.', 'A spreadsheet.'), 0,
                 'Their prompt reply is what made the reproduction possible.'),
                ('Man: Does a failed reproduction mean the paper is wrong?',
                 ('Not on its own. It means something is missing.',
                  'Yes, always.', 'No, never.', 'Five countries.'), 0,
                 'A failure may be a missing step rather than a defect in the '
                 'work.'),
                ('Woman: Who pays for this kind of checking?',
                 ('Nobody, which is the whole problem.', 'The journal does.',
                  'The authors do.', 'A funder.'), 0,
                 'No appointment or promotion rewards reproducing another analysis.'),
                ('Man: Will you publish what you found?',
                 ('With their reply printed beside it.', 'No, it is not worth it.',
                  'Yes, anonymously.', 'Next year.'), 0,
                 'Printing the authors’ response beside the result is what makes '
                 'the notice usable.'),
                ('Woman: Is the pension scheme automatic now?',
                 ('You are in unless you opt out.', 'No, you must apply.',
                  'Yes, if you ask.', 'Nine per cent.'), 0,
                 'Automatic enrolment reverses the default rather than compelling '
                 'anybody.'),
                ('Man: Did many people opt out?',
                 ('Far fewer than anybody predicted.', 'Almost everybody.',
                  'Nobody at all.', 'In 2012.'), 0,
                 'The low opt-out rate is the finding the whole talk turns on.'),
            ],
            convos=[
                ([('Woman', 'How far did you get with the reproduction?'),
                  ('Man', 'I have the published numbers. It took nine days and most '
                          'of that was one missing file.'),
                  ('Woman', 'Which file?'),
                  ('Man', 'A lookup table that maps the region codes. It is '
                          'mentioned in the code and it was not in the deposit, and '
                          'without it the regional averages are nonsense.'),
                  ('Woman', 'So for nine days you had a failed reproduction.'),
                  ('Man', 'I had a failed reproduction, and if I had written it up on '
                          'day three I would have published something that said their '
                          'analysis could not be reproduced, which would have been '
                          'true and completely misleading.'),
                  ('Woman', 'And then you wrote to them.'),
                  ('Man', 'I wrote on the Tuesday and the file came back the same '
                          'afternoon with an apology. They had no idea it was '
                          'missing. Nobody had ever asked.'),
                  ('Woman', 'That last sentence is the one I would put in your '
                            'write-up.')],
                 [('What took most of the nine days?',
                   ('A coding error of his own', 'One missing file',
                    'Waiting for the authors', 'A change of software'), 1,
                   'A lookup table mentioned in the code and absent from the deposit, '
                   'without which the regional averages are nonsense.'),
                  ('Why would a write-up on day three have been misleading?',
                   ('The numbers were wrong',
                    'It would have reported a true failure with the wrong cause',
                    'The authors had not replied',
                    'The file was confidential'), 1,
                   'The analysis could not be reproduced, and the reason was a missing '
                   'file rather than a defect in the work.')]),
            ],
            poster=['Saturday market · consultation closes 14 Feb',
                    'Cross Street → Guildhall square, 1 June',
                    '48 pitches → 60 · responses published'],
            announce=([('Man',
                        'The consultation closes on the fourteenth of February and I '
                        'want to say two things about how it will be read, because '
                        'there is a misunderstanding in the market about this. The '
                        'first is that we count arguments and not signatures. '
                        'Nineteen traders have objected on footfall and the counts we '
                        'have do not support that objection, so nineteen identical '
                        'letters about footfall will not move the committee. One '
                        'letter with better counts in it would. The second thing is '
                        'that every response is published with the committee papers, '
                        'under the name of whoever sent it, and that catches people '
                        'out every year. If you would not want it read aloud, do not '
                        'write it. And one practical note: the loading amendment, '
                        'half past one to two for traders only, is being put '
                        'separately, so a response can support the loading window and '
                        'oppose the move, and several already do.')],
                      [('How does the officer say the responses will be read?',
                        ('By counting signatures', 'By counting arguments',
                         'By trader turnover', 'By date received'), 1,
                        'Nineteen identical letters about footfall will not move the '
                        'committee, and one letter with better counts would.'),
                       ('What does he warn traders about?',
                        ('The closing date',
                         'That every response is published under the '
                         'sender’s name',
                         'That the loading amendment is refused',
                         'That late responses are returned'), 1,
                        'He says it catches people out every year.')]),
            board=['The default is not neutral',
                   'Opt in: a form to fill. Opt out: a form to fill',
                   'Same choice, different participation',
                   'Who wrote the default, and why?'],
            talk=([('Woman',
                    'I want to give you one number and then spend the rest of the '
                    'time on what it means. When workplace pension saving in this '
                    'country required an employee to fill in a form to join, '
                    'participation sat at something under half. When the law changed '
                    'so that the employee was enrolled unless they filled in a form '
                    'to leave, participation went above four fifths, and the opt-out '
                    'rate was a small fraction of what almost everybody had '
                    'predicted. Nothing else changed. The contribution was the same, '
                    'the tax treatment was the same, the choice was the same choice, '
                    'and the only difference was which answer you got by doing '
                    'nothing. Now, there are two ways of reading that and they lead '
                    'to different places. The first is that people are lazy, which '
                    'is comfortable and mostly wrong: the form takes four minutes. '
                    'The second is that a default carries information. An employer '
                    'who enrols you is understood to be recommending it, and an '
                    'employer who waits for you to ask is understood to be offering '
                    'something optional. On that reading the default is not an '
                    'absence of advice. It is advice, and somebody chose it. Which '
                    'raises the question I would like you to take away, because it is '
                    'not a technical one: in every system you deal with, who wrote '
                    'the default, and what did they want?')],
                   [('What happened to participation when the default changed?',
                     ('It fell slightly', 'It was unchanged',
                      'It rose from under half to above four fifths',
                      'It could not be measured'), 2,
                     'And the opt-out rate was a small fraction of what had been '
                     'predicted.'),
                    ('What does the speaker say was the only difference?',
                     ('The contribution rate', 'The tax treatment',
                      'Which answer you got by doing nothing',
                      'The size of the employer'), 2,
                     'The choice itself was the same choice.'),
                    ('Why does she reject the laziness reading?',
                     ('It is unkind', 'The form takes four minutes',
                      'It has been disproved by experiment',
                      'It applies only to pensions'), 1,
                     'She calls that reading comfortable and mostly wrong.'),
                    ('What does she say a default carries?',
                     ('A cost', 'Information', 'A penalty',
                      'A legal obligation'), 1,
                     'An employer who enrols you is understood to be recommending '
                     'it.')]),
        ),
    ],

    # ------------------------------------------------------------- WRITING --
    writing=dict(
        build=[
            ('The annexe has a hundred and eighty places.',
             ['do', 'you', 'know', 'how', 'many', 'the', 'Long Room', 'held',
              'before', 'the works'],
             'Do you know how many the Long Room held before the works?'),
            ('Requests placed after ten arrive the next day.',
             ['is', 'there', 'any', 'chance', 'of', 'a', 'second', 'delivery',
              'in', 'the afternoon'],
             'Is there any chance of a second delivery in the afternoon?'),
            ('The Law Library places are restricted.',
             ['can', 'you', 'tell', 'me', 'who', 'asked', 'for', 'that',
              'restriction', 'and', 'why'],
             'Can you tell me who asked for that restriction and why?'),
            ('Nineteen traders objected on footfall.',
             ['were', 'their', 'objections', 'counted', 'or', 'weighed',
              'against', 'the', 'footfall', 'figures'],
             'Were their objections counted, or weighed against the footfall '
             'figures?'),
            ('Vehicle access to the square ends at nine.',
             ['would', 'a', 'loading', 'window', 'at', 'half past one',
              'solve', 'the', 'problem', 'for', 'you'],
             'Would a loading window at half past one solve the problem for '
             'you?'),
            ('The balance read two milligrams heavy all month.',
             ['how', 'long', 'would', 'that', 'have', 'gone', 'unnoticed',
              'without', 'the', 'standard'],
             'How long would that have gone unnoticed without the standard?'),
            ('The reproduction failed for nine days.',
             ['do', 'we', 'know', 'whether', 'the', 'missing', 'file', 'was',
              'ever', 'deposited'],
             'Do we know whether the missing file was ever deposited?'),
            ('Participation rose when the default changed.',
             ['did', 'anything', 'else', 'about', 'the', 'scheme', 'change',
              'in', 'the', 'same', 'year'],
             'Did anything else about the scheme change in the same year?'),
            ('The checklist is signed rather than spoken in some hospitals.',
             ['I', 'would', 'like', 'to', 'know', 'which', 'of', 'the two',
              'was', 'measured'],
             'I would like to know which of the two was measured.'),
            ('The kilogram was redefined in 2019.',
             ['the', 'reason', 'was', 'not', 'precision', 'but', 'the',
              'independence', 'of', 'the', 'definition'],
             'The reason was not precision but the independence of the '
             'definition.'),
        ],
        email=dict(
            to='library@northgate.edu',
            date='06/01/2031',
            subject='Store deliveries — the society supports the second run, '
                    'and one further request',
            scenario=['You are secretary of the Students’ Association. The '
                      'library has told you it can put a second store delivery at '
                      '16.00 to its committee on the 7th of January, and that a '
                      'narrow letter supporting that one item will carry where a '
                      'general objection to the refurbishment would not. You accept '
                      'the correction to your figures: the loss is 60 places and not '
                      '100. You want the second run, and you want one further thing '
                      'the library has not mentioned: the annexe opening at 08.00 '
                      'rather than at 09.00 in the two weeks before examinations.',
                      'Write an email to Reader Services, copied to the '
                      'Association.'],
            bullets=['Accept the correction to your figures, briefly and without '
                     'retreating from the complaint.',
                     'Support the 16.00 delivery and say what it is worth to '
                     'students.',
                     'Ask for the earlier opening in the two examination weeks, with '
                     'what it would cost.'],
        ),
        disc=dict(
            prof='Dr Halloran',
            question='A university proposes to move most of its open-shelf '
                     'collection into a closed store, keeping a browsing collection '
                     'of about a tenth and delivering anything else within four '
                     'hours. Supporters say the space is worth four hundred study '
                     'places and that almost nothing on the shelves is consulted in '
                     'a given year. Opponents say browsing is how students find what '
                     'they were not looking for, and that a delivery system turns '
                     'reading into ordering. Should the collection be moved?',
            posts=[('Lucia', 'w', 'Move it. The figures are not in dispute: most of '
                                  'those volumes have not been opened this decade, '
                                  'and four hundred study places are a thing '
                                  'students actually ask for every single term.'),
                   ('Osman', 'm', 'Lucia is counting the wrong thing. A shelf is not '
                                  'a storage system, it is a search system, and the '
                                  'book you take down because it was next to the one '
                                  'you came for does not appear in any loan '
                                  'statistic.')],
        ),
    ),

    # ------------------------------------------------------------ SPEAKING --
    speaking=dict(
        repeat=['The Long Room closes on the sixth.',
                'Nothing in the annexe can be booked.',
                'A queue is a price paid in minutes.',
                'Weigh a known mass on a fixed schedule.',
                'The prototype was the definition, so it could not drift.',
                'Nine days of that failure was one missing file.',
                'Participation rose above four fifths when the default changed, and '
                'nothing else about the scheme changed at all.'],
        interview=('a study of how people choose, measure and check things',
                   ['Thank you for taking part today. I am calling about a study of '
                    'how people choose, measure and check things. To begin, could '
                    'you tell me about a place you go to work or study, and why that '
                    'one?',
                    'Thinking about something you have had to wait for recently '
                    '— a desk, an appointment, a delivery — who do you '
                    'think pays most for that waiting, and why?',
                    'Some people say that if a system has worked for years without '
                    'trouble, the checking can be reduced. How far would you agree?',
                    'Finally, describe a decision you have made simply by accepting '
                    'whatever was already set up for you, and say whether you would '
                    'make it again.']),
    ),
)
