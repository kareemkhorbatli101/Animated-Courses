"""Unit 6 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        6, 'Journeys and Mishaps',
        'Past simple: irregular verbs',
        ['I can name the main things you take and lose on a journey.',
         'I can use irregular past verbs and past time phrases.',
         'I can describe a journey that went wrong in 50–70 words.'],
        ['bus', 'clock', 'home', 'cup', 'moon'],
        alt='The opening page of Unit 6, Journeys and Mishaps: the grammar point is '
            'the past simple with irregular verbs, and three things the learner will '
            'be able to do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Suitcase', 'suitcase'), ('Coach', 'coach'), ('Gate', 'gate'), ('Wallet', 'wallet'), ('Airport', 'airport')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: suitcase, '
            'coach, gate, wallet, airport.'),

 3: lambda: F.bank_strip(
        [('spare', 'key'), ('missed', 'cross'), ('umbrella', 'umbrella'),
         ('taxi', 'taxi')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: spare, missed, umbrella, taxi.'),

 4: lambda: F.timeline(
        [('7.00', 'he left the flat'), ('7.10', 'he forgot his wallet'),
         ('7.30', 'he missed the coach'), ('9.00', 'he woke up late'),
         ('9.30', 'the class was off')],
        height=460,
        alt='Dani’s Tuesday as a line: he left the flat at seven, forgot his wallet '
            'at ten past, missed the coach at half past, woke up two stops late at '
            'nine, and found at half past nine that the class was off.'),

 5: lambda: F.word_grid(
        [('Luggage', 'luggage'), ('Delay', 'delay'), ('Gate', 'gate'), ('Charger', 'charger'), ('Spare', 'key'), ('Coach', 'coach'), ('Wallet', 'wallet')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: luggage, '
            'delay, gate, charger, spare, coach, wallet, each with the thing '
            'it means drawn beside its number.'),

 6: lambda: F.function_map(
        [('go', 'went'),
         ('catch', 'caught'),
         ('leave', 'left'),
         ('forget', 'forgot'),
         ('take', 'took'),
         ('find', 'found')],
        height=606,
        alt='The six forms this unit drills, each with an arrow from the one '
            'you start with to the one you say: go to went, catch to caught, '
            'leave to left, forget to forgot, take to took, find to found.'),

 7: lambda: F.category_set(
        [('Suitcase', 'home'), ('Wallet', 'book'), ('Charger', 'clock'),
         ('Umbrella', 'moon'), ('Coach', 'bus'), ('Taxi', 'shop')],
        height=600,
        alt='Six things you take on a journey, each on its own card: suitcase, '
            'wallet, charger, umbrella, coach and taxi.'),

 8: lambda: F.label_me(
        [('gate', 0.10, 0.48), ('seat', 0.32, 0.44), ('luggage', 0.54, 0.52),
         ('coach', 0.74, 0.46), ('delay', 0.92, 0.50)],
        height=620, draw=F.station,
        alt='A station drawn from the side, with a gate, a seat, luggage, a coach '
            'and a board showing a delay. Five numbered lines run to the right for '
            'the learner to write each word.'),

 9: lambda: F.bank_strip(
        [('luggage', 'luggage'), ('delay', 'delay'), ('charger', 'charger'), ('coach', 'coach')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: luggage, delay, charger, coach.'),
 10: lambda: F.writing_frame(
        [('Where you went', 'I took the coach to the coast last summer.'),
         ('What went wrong', 'I left my charger at home.'),
         ('What you did then', 'I read the back of a newspaper for two hours.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- where you went, what went wrong, and what you did then -- '
            'with a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('Maya left the flat at seven and forgot her bag.', 'left'),
         ('She went back for it and missed the bus.', 'went'),
         ('She caught the next one and fell asleep.', 'caught'),
         ('She woke up two stops late.', 'woke')],
        height=440,
        alt='Four lines from the notice with the past verb ringed in each: '
            'left, went, caught, woke. None of the four ends in -ed, which is '
            'what the task asks the learner to notice.'),

 12: lambda: F.grammar_contrast(
        ('Regular', 'verb + -ed',
         'He missed the coach.', [0.16, 0.38, 0.60, 0.82]),
        ('Irregular', 'the middle sound changes',
         'He caught the next one.', [0.30]),
        height=640,
        alt='The unit’s grammar as two columns. On the left regular verbs, which all '
            'take -ed, shown as four even marks. On the right irregular verbs, where '
            'the middle sound changes and there is no rule, shown as one mark.'),

 13: lambda: F.world_strip(
        [('go → went', 'bus', 'leave → left · take → took'),
         ('catch → caught', 'clock', 'find → found · sleep → slept'),
         ('forget → forgot', 'moon', 'find → found · pay → paid')],
        height=460,
        alt='Nine irregular verbs in three groups: go went, leave left and take '
            'took; catch caught, find found and sleep slept; forget forgot and pay '
            'paid.'),

        # REVIEW: bins guessed as ['took', 'taked', 'walked']; chips are whole sentences, shorten them,
 14: lambda: F.sort_bins(
        ['adds -ed', 'changes instead'],
        ['take', 'walk', 'sleep', 'arrive', 'pay'],
        height=540,
        alt='The five verbs of this task as chips above two empty bins, one '
            'for the verbs that add -ed and one for the verbs that change '
            'instead. Which chip goes in which bin is the exercise, so none '
            'of them is placed.'),

 15: lambda: F.error_pairs(
        [('He goed back for it.', 'He went back for it.'),
         ('She goed back for her bag.', None),
         ('Did she caught the next bus?', None),
         ('Yuki taked the train to the coast.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 6.2', 'Maya and Dani', 'person', 'what happened to you?'),
         ('Track 6.3', 'Yuki and the staff', 'bus', 'lost property'),
         ('Track 6.4', 'Amina', 'shop', 'five journeys')],
        height=560,
        alt='The three listenings in this unit: Maya asks Dani what happened, Yuki '
            'reports a lost umbrella to station staff, and Amina tells five journey '
            'stories from one week.'),

 17: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'I left an umbrella on the ten past four.'),
         ('Staff', 'person', 'Which coach were you in?'),
         ('Yuki', 'computer', 'It is black with a wooden handle.'),
         ('Staff', 'person', 'We took three umbrellas off that train.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Yuki: I left an umbrella on the ten past four. Staff: '
            'Which coach were you in? Yuki: It is black with a wooden handle. '
            'Staff: We took three umbrellas off that train.'),

 18: lambda: F.match_columns(
        [('Maya', 'person'), ('Tomas', 'nurse'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['woke up at the end of the line',
         'the taxi driver got lost',
         'the train left early',
         'missed a plane by four minutes',
         'lost an umbrella and found a friend'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What is the longest journey you took last year?', 'before_now'),
         ('Did anything go wrong?', 'before_now'),
         ('What do you always carry, and what do you always forget?', 'question')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('left at seven', 'pin'), ('forgot your wallet', 'wallet'), ('missed the coach', 'cross'), ('an hour late', 'delay')]),
        ('Student B', [('left at seven', 'pin'), ('forgot your charger', 'charger'), ('caught the coach', 'bus'), ('an hour late', 'delay')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — the listener', ['ask what happened', 'say something kind',
                                   'ask what happened next', 'ask how late'],
         'person'),
        ('Card B — the teller', ['say when you left', 'say what you forgot',
                                 'say what went wrong next',
                                 'finish with one good thing'], 'bus'),
        height=560,
        alt='The two role-play cards side by side. Card A, the listener: ask what '
            'happened, say something kind, ask what happened next, ask how late. '
            'Card B, the teller: say when you left, what you forgot, what went wrong '
            'next, and finish with one good thing.'),

        # REVIEW: beats split from the task sentence; check they read as labels,
 22: lambda: F.talk_shape(
        [('where you went', 1, 'pin'),
         ('what happened', 2, 'cross'),
         ('what you do differently now', 2, 'tick')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: a short one '
            'for where you went, then two longer ones for what happened and '
            'what you do differently now.'),

 23: lambda: F.process_strip(
        [('you leave', 'home'), ('the first bus', 'bus'),
         ('the connection', 'clock'), ('the second bus', 'bus'),
         ('you arrive', 'shop')],
        height=460,
        alt='A journey in five stages, each with an arrow to the next: you leave, '
            'the first bus, the connection, the second bus, and you arrive. The '
            'connection is the link that breaks.'),

 24: lambda: F.word_grid(
        [('connection', 'chain'), ('margin', 'coins'), ('chain', 'chain'), ('link', 'chain')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'connection, margin, chain, link.'),

 25: lambda: F.world_strip(
        [('the Andes', 'home', 'eleven hours to climb what a car does in five'),
         ('Norway', 'cup', 'a ferry every half hour across the water'),
         ('Bangladesh', 'moon', 'a boat is faster when the road is under water')],
        height=460,
        alt='Three journeys that take longer than they look: eleven hours up into '
            'the Andes, a ferry every half hour in Norway, and a boat '
            'instead of a road in Bangladesh in the wet season.'),

 26: lambda: F.writing_frame(
        [('When you left', 'I left home at six for a train at seven.'),
         ('What went wrong', 'Then I found I had the wrong day on the ticket.'),
         ('What somebody did', 'The man at the window changed it.'),
         ('How it ended', 'I arrived two hours late and nobody minded.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: when you left, what went wrong, what somebody did about it, and '
            'how it ended.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'I would take the slow train every time.'),
         ('two or three reasons', 'It costs less, nobody weighs your luggage.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('an apology', 'Maya, I am so sorry.'),
         ('what happened, briefly', 'I left on time and then I forgot my wallet.'),
         ('how late', 'I am on the next one and I think I am ninety.'),
         ('what they should do', 'Please do not wait at the station in the rain.')],
        height=734,
        alt='The shape of the message in four steps -- an apology, what '
            'happened, briefly, how late, what they should do -- with a line '
            'of the model beside each one.'),

 29: lambda: F.writing_frame(
        [('what you lost', 'I left a book on a bus in another country.'),
         ('where', 'It was not a good book.'),
         ('why it stayed with you', 'Somebody had written a name and a date inside.')],
        height=571,
        alt='The shape of the reflection in three steps -- what you lost, '
            'where, why it stayed with you -- with a line of the model beside '
            'each one.'),

 30: lambda: F.function_map(
        [('I left a bag on the ten past four.', 'saying what you lost and where'),
         ('It is black, with a red handle.', 'describing it so they can find it'),
         ('Who should I speak to about this?', 'finding the right person'),
         ('Could you hold it until Friday?', 'asking them to keep it for you')],
        height=580,
        alt='Four things you say when something is lost, each with an arrow to what '
            'it does: saying what you lost and where, describing it so they can find '
            'it, finding the right person, and asking them to keep it for you.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'I left a bag on the ten past four from.'),
         ('Staff', 'person', 'Where were you sitting?'),
         ('Yuki', 'computer', 'The last coach, by the window.'),
         ('Staff', 'person', 'And what does it look like?')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: I left a bag on the ten past four from. Staff: Where were '
            'you sitting? Yuki: The last coach, by the window. Staff: And '
            'what does it look like?'),

 32: lambda: F.sequence_steps(
        [('Leave a way to reach you.', 'list'),
         ('Say where you were sitting.', 'before_now'),
         ('Ask what happens next.', 'question'),
         ('Describe it well enough to find.', 'magnifier')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 the traveller',
         ['say what and when', 'say where you sat', 'describe it in detail', 'leave a number'], 'person'),
        ('Card B \u2014 the desk',
         ['ask where they sat', 'ask for a description', 'say what happens next', 'say how long you keep things'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 the traveller: '
            'say what and when, say where you sat, describe it in detail, '
            'leave a number. Card B \u2014 the desk: ask where they sat, ask for a '
            'description, say what happens next, say how long you keep '
            'things.'),

 34: lambda: F.writing_frame(
        [('the train and the day', 'Good morning.'),
         ('where you sat', 'I travelled on the ten past four from.'),
         ('a description somebody', 'It is open at one corner.'),
         ('how to reach you', 'There is nothing expensive.')],
        height=734,
        alt='The shape of the Part 7 writing task in four steps -- the train '
            'and the day, where you sat, a description somebody, how to reach '
            'you -- with a line of the model beside each one.'),

 35: lambda: F.before_after(
        ('At the coast', ['sea level', 'the ordinary air',
                          'five hours by car'], 'cup'),
        ('Four and a half thousand', ['oxygen in the carriages', 'zigzags up the mountain',
                                      'eleven hours by train'], 'home'),
        height=520,
        alt='The railway from Lima, at the bottom and at the top. At the coast: sea '
            'level, ordinary air, five hours by car. Four and a half thousand metres '
            'up: oxygen in the carriages, zigzags cut into the mountain, and eleven '
            'hours by train.'),

 36: lambda: F.word_grid(
        [('zigzag', 'zigzag'), ('switchback', 'zigzag'), ('summit', 'mountain'), ('carriage', 'tram')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'zigzag, switchback, summit, carriage.'),
 37: lambda: F.close_scene(
        [('the box under the till', 'box'), ('four spare keys', 'key'),
         ('the stairs', 'stairs'), ('the shop at eight', 'shop')],
        height=460,
        alt='The box of spare keys under the till, drawn as the street it '
            'belongs to: the box itself, the four keys with a flat number on '
            'each, the stairs Maya spent a night on, and the shop somebody '
            'walks into at eight with the face of a person locked out.'),

 38: lambda: F.decision_fork(
        'A neighbour wants to keep a spare key to your home?',
        [('Say yes',
          ['a locked door at midnight', 'somebody else has a key'], 'key'),
         ('Keep a key outside',
          ['you need nobody', 'a key anybody can find'], 'home'),
         ('Say no and change nothing',
          ['nothing to think about', 'a night on the stairs'], 'cross')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: say yes and somebody else has a key; hide one '
            'outside, which is a key anybody can find; or say no and change '
            'nothing, and risk a night on the stairs.'),

 39: lambda: F.bank_strip(
        [('spare', 'key'), ('basket', 'basket'), ('suitcase', 'suitcase'),
         ('caught', 'bus'), ('gate', 'gate'), ('delay', 'delay'),
         ('went', 'before_now'), ('museum', 'museum')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'spare, basket, suitcase, caught, gate, delay, went, museum.'),

 40: lambda: F.progress_strip(
        [('I can name the things you take and lose on a journey', False),
         ('I can use irregular past verbs and past time phrases', False),
         ('I can understand somebody telling the story of a bad journey', False),
         ('I can describe a journey that went wrong in 50–70 words', False),
         ('I can report something lost and describe it well', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('suitcase', 'suitcase'), ('coach', 'coach'), ('gate', 'gate'), ('wallet', 'wallet'), ('airport', 'airport'), ('luggage', 'luggage'), ('delay', 'delay'), ('charger', 'charger'), ('spare', 'key'), ('taxi', 'taxi')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 6 as picture cards on one page: '
            'suitcase, coach, gate, wallet, airport, luggage, delay, charger, '
            'spare, taxi.'),
}
