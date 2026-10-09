"""Unit 1 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        1, 'The Night the Power Went Out',
        'The past continuous and the past simple — while and when',
        ['I can say what I was doing when something interrupted me.',
         'I can use while and when to join a long action and a short one.',
         'I can tell the story of twenty minutes in 90–110 words.'],
        ['moon', 'clock', 'home', 'shop', 'stairs'],
        alt='The opening page of Unit 1, The Night the Power Went Out: the grammar '
            'point is the past continuous against the past simple with while and '
            'when, and three things the learner will be able to do by the end of '
            'the unit.'),

        # REVIEW: icon not in the map for ['Power cut', 'Candle', 'Darkness', 'Switch', 'Freezer'],

 2: lambda: F.word_grid(
        [('Power cut', 'spark'), ('Candle', 'lamp'), ('Darkness', 'moon'), ('Switch', 'switch'), ('Freezer', 'fridge')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: power cut, '
            'candle, darkness, switch, freezer.'),

 3: lambda: F.bank_strip(
        [('candle', 'lamp'), ('freezer', 'fridge'), ('switch', 'switch'), ('power cut', 'spark')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: candle, freezer, switch, power cut.'),

 4: lambda: F.scene(
        [('Maya', 'person', 'was reading in bed'),
         ('Tomas', 'nurse', 'was coming up the stairs'),
         ('Amina', 'shop', 'was serving a customer'),
         ('Dani', 'screen', 'was watching a film'),
         ('Mr Okonkwo', 'home', 'was sitting by the window'),
         ('Yuki', 'laptop', 'was working, as always')],
        height=560,
        alt='What each of the six people at number 14 was doing at twenty past '
            'seven: Maya was reading in bed, Tomas was coming up the stairs with '
            'shopping, Amina was serving a customer, Dani was watching a film, Mr '
            'Okonkwo was sitting by the window, and Yuki was working.'),

        # REVIEW: icon not in the map for ['Meter', 'Supply', 'Bulb', 'Basement', 'Plug', 'Kettle'],

 5: lambda: F.word_grid(
        [('Meter', 'meter'), ('Supply', 'cable'), ('Bulb', 'bulb'), ('Basement', 'stairs'), ('Plug', 'cable'), ('Kettle', 'cup'), ('Stairs', 'stairs')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: meter, '
            'supply, bulb, basement, plug, kettle, stairs, each with the '
            'thing it means drawn beside its number.'),
 6: lambda: F.annotated_lines(
        [('I was reading when the lights went out', 'reading'),
         ('She was serving a customer when it happened', 'serving'),
         ('We were waiting on the stairs for twenty minutes', 'waiting'),
         ('He was carrying two bags when he stopped', 'carrying')],
        height=464,
        alt='Four lines from the drill with the part that carries the beat '
            'ringed in each: reading, serving, waiting, carrying. The '
            'auxiliary is never ringed, because it never carries the beat.'),

 7: lambda: F.category_set(
        [('candle', 'lamp'), ('bulb', 'bulb'), ('darkness', 'moon'),
         ('electricity', 'spark'), ('freezer', 'fridge'),
         ('meter', 'meter'), ('silence', 'ear'),
         ('supply', 'cable'), ('switch', 'switch')],
        height=600,
        alt='The nine words of the sorting task, each on its own card with a '
            'picture: candle, bulb, darkness, electricity, freezer, meter, '
            'silence, supply and switch.'),

 8: lambda: F.label_me(
        # (name, y fraction, x fraction) -- label_me sorts by y and numbers the
        # rules from the top, so Column A has to read down the building.
        [('bulb', 0.145, 0.72), ('candle', 0.335, 0.72), ('switch', 0.525, 0.76),
         ('freezer', 0.645, 0.305), ('meter', 0.700, 0.155)],
        height=620, draw=F.building_section,
        alt='Number 14 Alder Street cut through from the basement to the top '
            'flat. A box waits on the top shelf of a cupboard in the top flat, a '
            'drawer stands open in a third-floor kitchen, a small plate sits on '
            'the wall beside a door on the second floor, a humming cabinet '
            'stands in the corner of the ground-floor shop, and a grey box sits '
            'in the hall beside it. Five numbered lines run to the right for the '
            'learner to write each word, numbered from the top down.'),

        # REVIEW: icon not in the map for ['basement', 'meter', 'supply', 'bulb'],

 9: lambda: F.bank_strip(
        [('basement', 'stairs'), ('meter', 'meter'), ('supply', 'cable'), ('bulb', 'bulb')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: basement, meter, supply, bulb.'),
 10: lambda: F.writing_frame(
        [('What you were doing', 'I was cooking when it happened.'),
         ('What you found instead', 'I found two candles in a drawer.'),
         ('What you did for two hours', 'We ate in the kitchen with the door open.'),
         ('Whether you enjoyed it', 'I quite enjoyed it.')],
        height=520,
        alt='The shape of the short piece of writing in four steps -- what '
            'you were doing, what you found instead, what you did for two '
            'hours, and whether you enjoyed it -- with a line of the model beside '
            'each one.'),

 11: lambda: F.annotated_lines(
        [('Amina closed the shop at seven', 'closed'),
         ('Amina was closing the shop at seven', 'was closing'),
         ('The lights went out', 'went'),
         ('She was somewhere in the middle of it', 'was')],
        height=464,
        alt='The four lines of the notice with the verb ringed in each: '
            'closed, was closing, went, was. The ring is what a correct '
            'underlining looks like.'),

 12: lambda: F.grammar_contrast(
        # The marks sit LEFT of 'now' because both forms are past. The left
        # side carries one mark, because the action finished; the right side
        # carries three across a stretch, because it was still going on.
        ('Amina closed the shop.', 'past simple — finished',
         'The shop was already shut.', [0.30]),
        ('Amina was closing the shop.', 'past continuous — going on',
         'She was somewhere in the middle of it.', [0.16, 0.26, 0.36]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the past simple for '
            'a finished action, with one mark at the moment it ended. On the right '
            'the past continuous for an action still going on, with three marks '
            'spread across the stretch of time it filled.'),

 13: lambda: F.timeline(
        [('7.20', 'every light goes out'),
         ('7.21', 'Dani shouting on the landing'),
         ('7.25', 'Amina lights the candle'),
         ('7.32', 'Amina called the emergency line'),
         ('9.10', 'the supply comes back')],
        height=460,
        alt='One evening on a line: at twenty past seven every light goes out, a '
            'minute later Dani is shouting on the landing, at twenty-five past Amina '
            'lights the candle she keeps behind the counter, at half past she '
            'called the emergency line, and at ten past nine the supply comes back.'),

        # REVIEW: bins guessed as []; chips are whole sentences, shorten them,
 14: lambda: F.sort_bins(
        ['interrupted', 'finished'],
        ['eating when the phone rang', 'closed the shop and went up',
         'put the bags down', 'waiting for an hour'],
        height=540,
        alt='The four sentences of this task as chips above two empty bins, '
            'one for an action that was interrupted and one for an action '
            'that finished. Which chip goes in which bin is the exercise, so '
            'none of them is placed.'),

 15: lambda: F.error_pairs(
        [('While Maya was reading, the lights was going out.',
          '…the lights went out.'),
         ('I was knowing the answer before he had finished.', None),
         ('Tomas was carrying the bags when he was putting them down.', None),
         ('While we waiting on the stairs, nobody said anything.', None)],
        height=520,
        alt='The four sentences of the correction task, each with the wrong '
            'form struck through. The first is corrected for you; the other '
            'three have a line to write the correction on.'),

 16: lambda: F.speakers(
        [('Track 1.2', 'Tomas', 'stairs', 'twenty minutes on the stairs'),
         ('Track 1.3', 'Amina and a customer', 'shop', 'keeping the shop open'),
         ('Track 1.4', 'four of them', 'person', 'four versions of one evening')],
        height=560,
        alt='The three listenings in this unit: Tomas describes twenty minutes '
            'standing on the stairs in the dark, Amina and a customer talk about '
            'keeping the shop open by candle, and four people at number 14 give '
            'four different accounts of the same twenty minutes.'),

        # REVIEW: fewer than three turns parsed,
 17: lambda: F.dialogue_strip(
        [('Customer', 'person', 'Are you still open?'),
         ('Amina', 'shop', 'I am still here. The till will not open.'),
         ('Customer', 'person', 'So what were you doing all that time?'),
         ('Amina', 'shop', 'Adding up on paper, the way my mother used to.')],
        height=560,
        alt='The second listening as speech bubbles, the customer on one side '
            'and Amina on the other, so it is clear who holds which turn.'),

 18: lambda: F.match_columns(
        [('Dani', 'book'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['saw something outside that nobody else',
         'noticed nothing at first',
         'went out of the flat rather than stay',
         'went downstairs to ask the shopkeeper'],
        height=540,
        alt='Three cards on the left and four on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),
 19: lambda: F.question_cards(
        [('What were you doing when something last interrupted you?', 'clock'),
         ('Where were you standing, and how long did you wait?', 'stairs'),
         ('What was everybody else doing at the time?', 'crowd')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('the landing at 7.20', 'stairs'), ('two bags on the step', 'bag'),
                       ('nobody holding a light', 'moon'), ('three doors shut', 'door')]),
        ('Student B', [('the landing at 7.30', 'stairs'), ('the bags gone', 'bag'),
                       ('one candle on the rail', 'lamp'), ('three doors open', 'door')]),
        height=560,
        alt='Student A has the landing at twenty past seven and Student B has '
            'the same landing ten minutes later, with a fold line between '
            'them, so each student sees only their own picture and has to '
            'describe it to find the differences.'),

 21: lambda: F.cue_cards(
        ('Card A — the stairs', ['say where you were standing',
                                 'say how long you waited',
                                 'say what could have happened',
                                 'ask for a light above the stairs'], 'stairs'),
        ('Card B — tonight', ['say what you could not find',
                              'say what the fund has bought',
                              'say what twenty-two pounds buys',
                              'answer the objection'], 'lamp'),
        height=560,
        alt='The two role-play cards side by side. Card A, the stairs: say where '
            'you were standing, say how long you waited, say what could have '
            'happened, ask for a light above the stairs. Card B, tonight: say what you '
            'could not find, say what the fund has bought, say what twenty-two '
            'pounds buys, answer the objection.'),

        # REVIEW: beats split from the task sentence; check they read as labels,
 22: lambda: F.talk_shape(
        [('what the thing is', 1, 'box'),
         ('where you keep it', 1, 'pin'),
         ('one time somebody needed it', 2, 'clock')],
        height=420,
        alt='The one-minute talk as three beats on a line, each block as wide '
            'as the share of the minute it should take: what the thing is, '
            'where you keep it, and one time somebody needed it and it was '
            'not there.'),

 23: lambda: F.process_strip(
        [('made', 'spark'), ('carried', 'cable'),
         ('brought down', 'meter'), ('under the road', 'road'),
         ('the meter', 'home')],
        height=460,
        alt='The journey of the electricity in five stages with an arrow to the '
            'next: a power station makes it, the grid carries it across the '
            'country, a substation brings it down to a safer level, a cable takes '
            'it under the road, and it arrives at the meter in the hall.'),

        # REVIEW: icon not in the map for ['Grid', 'Substation', 'Demand', 'Cable', 'Fault'],

 24: lambda: F.word_grid(
        [('Grid', 'network'), ('Substation', 'meter'), ('Demand', 'scales'), ('Cable', 'cable'), ('Fault', 'warning')],
        height=440, cols=5,
        alt='The five words from the reading as numbered picture cards: grid, '
            'substation, demand, cable, fault.'),

 25: lambda: F.world_strip(
        [('a hospital', 'hospital', 'no darkness at all is permitted'),
         ('an office block', 'shop', 'half of it worked, which was worse'),
         ('a block of flats', 'home', 'nobody had decided anything')],
        height=460,
        alt='The same twenty minutes in three buildings: a hospital, where a '
            'generator starts and no darkness at all is permitted; an '
            'office block, where half the building kept working, which was worse '
            'than either; and a block of flats, where nothing was protected '
            'because nobody had ever decided that anything should be.'),

 26: lambda: F.writing_frame(
        [('What you were doing', 'I was on the stairs with the shopping.'),
         ('What the problem was', 'I could not see the steps at all.'),
         ('What you are asking for', 'I would like us to buy a lamp.'),
         ('Where it should be kept', 'And to agree where we keep it.')],
        height=520,
        alt='The shape of the message the learner is about to write, in four '
            'steps: what you were doing when it happened, what the problem was, '
            'what you are asking the neighbours to agree, and where the thing '
            'should be kept.'),

 27: lambda: F.writing_frame(
        [('two reasons', 'In my opinion it was nobody\u2019s fault.'),
         ('while or when at least', 'The cable was old and water was getting into.'),
         ('your opinion in the first', 'That is quick.')],
        height=571,
        alt='The shape of the opinion paragraph in three steps -- two '
            'reasons, while or when at least, your opinion in the first -- '
            'with a line of the model beside each one.'),

 28: lambda: F.writing_frame(
        [('a beginning, a middle', 'It was about twenty past seven and I was.'),
         ('how long it lasted', 'Every light in the building went out.'),
         ('both past tenses', 'That is what I noticed first.')],
        height=571,
        alt='The shape of the message in three steps -- a beginning, a '
            'middle, how long it lasted, both past tenses -- with a line of '
            'the model beside each one.'),

 29: lambda: F.writing_frame(
        [('honestly what stops you', 'I have known for two years that I should keep.'),
         ('one sentence about what', 'Every time the lights flicker I think about.')],
        height=408,
        alt='The shape of the reflection in two steps -- honestly what stops '
            'you, one sentence about what -- with a line of the model beside '
            'each one.'),

 30: lambda: F.function_map(
        [('The whole street is out, not just us.', 'this is not one flat'),
         ('Can you give me a job number?', 'something you can repeat'),
         ('Is there an estimated time?', 'how long to plan for'),
         ('Somebody here needs power for equipment.', 'treat the call as urgent')],
        height=580,
        alt='Four things people say when they report a fault, each with an arrow '
            'to what it does: making clear the problem is not inside one flat, '
            'getting something you can repeat on a second call, finding out how '
            'long to plan for, and having the call treated as urgent.'),

        # REVIEW: fewer than three turns parsed,
 31: lambda: F.dialogue_strip(
        [('Operator', 'person', 'Which postcode are you calling about?'),
         ('Amina', 'shop', 'The whole street is out, not just us.'),
         ('Operator', 'person', 'Engineers went out fifteen minutes ago.'),
         ('Amina', 'shop', 'Can you give me a job number?')],
        height=560,
        alt='The 7B exchange as speech bubbles, the operator on one side and '
            'Amina on the other, so it is clear who asks and who answers.'),

 32: lambda: F.sequence_steps(
        [('Ask what time to plan.', 'clock'),
         ('Give the postcode and say whether the whole.', 'street'),
         ('Ask for a job number and write it down.', 'sign_number'),
         ('Say whether anybody at the address needs.', 'pin')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),
 33: lambda: F.cue_cards(
        ('Card A \u2014 you made the call', ['engineers already sent',
                                             'no time was given',
                                             'a note about the third floor',
                                             'say what you do not know'], 'shop'),
        ('Card B \u2014 you have been waiting', ['ask how long',
                                                 'ask what was actually said',
                                                 'ask what you will do next',
                                                 'be impatient, not unreasonable'], 'stairs'),
        height=560,
        alt='The two 7D role-play cards side by side. Card A, you made the '
            'call: engineers already sent, no time was given, a note about '
            'the third floor, say what you do not know. Card B, you have been '
            'waiting: ask how long, ask what was actually said, ask what '
            'you will do next, be impatient but not unreasonable.'),

 34: lambda: F.writing_frame(
        [('a first line a passer-by', 'Tuesday, about 7.'),
         ('what is still unknown', '20pm \u2014 power cut, the whole street.'),
         ('what you will do next', 'I called the emergency line at about half.')],
        height=571,
        alt='The shape of the Part 7 writing task in three steps -- a first '
            'line a passer-by, what is still unknown, what you will do next '
            '-- with a line of the model beside each one.'),

 35: lambda: F.before_after(
        ('Before a quarter to nine', ['the fan on', 'the radio on',
                                      'the light above the table'], 'home'),
        ('After a quarter to nine', ['two candles on saucers', 'the front door open',
                                     'half the building on the landing'], 'moon'),
        height=520,
        alt='The flat in Buenos Aires before and after a quarter to nine. Before: '
            'the fan on, the radio on, the light above the table. After: two '
            'candles standing on saucers, the front door open, and half the '
            'building out on the landing.'),

        # REVIEW: icon not in the map for ['Heatwave', 'Transformer', 'Saucer'],

 36: lambda: F.word_grid(
        [('Heatwave', 'sun'), ('Transformer', 'meter'), ('Shift', 'moon'), ('Saucer', 'cup'), ('Queue', 'crowd')],
        height=440, cols=5,
        alt='The five words from the global story as numbered picture cards: '
            'heatwave, transformer, shift, saucer, queue.'),
 37: lambda: F.close_scene(
        [('the fund', 'coins'), ('the staircase', 'stairs'),
         ('a box of lamps', 'lamp'), ('a written plan', 'list')],
        height=460,
        alt='The argument at number 14 drawn along one line: the sixty-one '
            'pounds in the fund, the staircase where Tomas stood for twenty '
            'minutes, the box of lamps Dani wants on the landing, and the '
            'written plan Amina would rather have instead.'),

 38: lambda: F.decision_fork(
        'There is sixty-one pounds. What does the building buy?',
        [('The staircase light, ninety pounds',
          ['the dangerous part is lit', 'next autumn before anything else'], 'stairs'),
         ('A box of lamps, twenty-two pounds',
          ['something arrives this week', 'a lamp in the dark is hard to find'], 'lamp'),
         ('Spend nothing, write the plan',
          ['somebody checks the cupboard', 'a plan does not light a staircase'],
          'list')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: the staircase light at ninety pounds, which '
            'lights the dangerous part but makes the fund wait until next '
            'autumn; a box of lamps at twenty-two pounds, which arrives this '
            'week but is hard to find in the dark; and spending nothing and '
            'writing the plan, which makes somebody check the cupboard but does not '
            'light a staircase.'),

 39: lambda: F.bank_strip(
        [('darkness', 'moon'), ('while', 'clock'), ('meter', 'meter'), ('power cut', 'spark'), ('was serving', 'shop'), ('supply', 'cable'), ('candle', 'lamp'), ('basement', 'stairs')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'darkness, while, meter, power cut, was serving, supply, candle, '
            'basement.'),

 40: lambda: F.progress_strip(
        [('I can say what I was doing when something interrupted me', False),
         ('I can use while and when to join a long action and a short one', False),
         ('I can describe a problem in a building', False),
         ('I can telephone to report a fault and ask for a job number', False),
         ('I can tell the story of twenty minutes', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick '
            'beside each, the last one marked Plus.'),

        # REVIEW: icon not in the map for ['power cut', 'electricity', 'candle', 'darkness', 'switch', 'freezer', 'meter', 'supply', 'bulb', 'basement'],

 41: lambda: F.glossary_grid(
        [('power cut', 'spark'), ('electricity', 'spark'), ('candle', 'lamp'), ('darkness', 'moon'), ('switch', 'switch'), ('freezer', 'fridge'), ('meter', 'meter'), ('supply', 'cable'), ('bulb', 'bulb'), ('basement', 'stairs')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 1 as picture cards on one page: '
            'power cut, electricity, candle, darkness, switch, freezer, '
            'meter, supply, bulb, basement.'),
}
