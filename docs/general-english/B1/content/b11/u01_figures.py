"""Unit 1 figures, in document order. Every label word appears in the unit (G18).

Rewritten 2026-10-09 with the unit. Two laws govern the choices here and both
are new, because the first version of this unit was rejected for its pictures as
well as its text:

* G34, depiction. Every icon must be licensed by the words under it. The old
  slot 4 put a generic person under "was reading in bed" and a nurse under "was
  coming up the stairs" -- the glyph named the person's job and the caption did
  all the work, so six pictures said nothing. Here the glyph shows the thing the
  line is about: a van for the delivery, a wallet for the card reader, a cat for
  the cat.
* G35, contrast. A figure drawn for a find-the-difference task has to contain
  the difference. The old slot 20 drew the same stairs, the same bag and the
  same door on both sides, including for the pair "three doors shut" / "three
  doors open".

Seven of the nine situations in ledgers/situations.yaml appear somewhere in
these 41 figures, which is the visual half of the content law.
"""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        1, 'The Afternoon Everything Happened at Once',
        'The past continuous and the past simple — while and when',
        ['I can say what I was doing when something interrupted me.',
         'I can use while and when to join a long action and a short one.',
         'I can tell the story of an afternoon in 90–110 words.'],
        ['clock', 'van', 'shop', 'stairs', 'crack'],
        alt='The opening page of Unit 1, The Afternoon Everything Happened at '
            'Once: the grammar point is the past continuous against the past '
            'simple with while and when, and three things the learner will be '
            'able to do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Skip', 'bin'), ('Delivery', 'box'), ('Queue', 'crowd'),
         ('Landing', 'stairs'), ('Battery', 'battery')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: skip, '
            'delivery, queue, landing, battery.'),

 3: lambda: F.bank_strip(
        [('connection', 'network'), ('landing', 'stairs'),
         ('battery', 'battery'), ('car park', 'car_park')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: connection, landing, battery, car park.'),

 4: lambda: F.scene(
        [('Amina', 'van', 'was waiting for the delivery van'),
         ('Maya', 'wallet', 'was serving a queue at the till'),
         ('Tomas', 'battery', 'was crossing town on a flat battery'),
         ('Dani', 'magnifier', 'was showing the flat to a viewer'),
         ('Yuki', 'network', 'was speaking when the connection dropped'),
         ('Mr Okonkwo', 'cat', 'was looking for the cat')],
        height=560,
        alt='What each of the six people was doing on Saturday afternoon, with '
            'the thing it went wrong with drawn beside each name: Amina was '
            'waiting for a delivery, Maya was serving a queue at the till, Tomas '
            'was crossing town on a flat battery, Dani was showing the flat to a '
            'viewer, Yuki was speaking when the connection dropped, and Mr '
            'Okonkwo was looking for the cat.'),

 5: lambda: F.word_grid(
        [('Depot', 'factory'), ('Card reader', 'wallet'), ('Agent', 'key'),
         ('Stairwell', 'stairs'), ('Shift', 'clock'), ('Crack', 'crack'),
         ('Car park', 'car_park')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: depot, '
            'card reader, agent, stairwell, shift, crack, car park, each with '
            'the thing it means drawn beside its number.'),

 6: lambda: F.annotated_lines(
        [('I was crossing town when the battery went flat', 'crossing'),
         ('She was serving a queue when the reader stopped', 'serving'),
         ('The cat went out while the door was propped open', 'propped'),
         ('We were standing on the steps for twenty minutes', 'standing')],
        height=464,
        alt='Four lines from the drill with the part that carries the beat '
            'ringed in each: crossing, serving, propped, standing. The '
            'auxiliary is never ringed, because it never carries the beat.'),

 7: lambda: F.category_set(
        [('skip', 'bin'), ('battery', 'battery'), ('connection', 'network'),
         ('delivery', 'box'), ('pavement', 'path'), ('queue', 'crowd'),
         ('shift', 'clock'), ('stairwell', 'stairs'), ('capacity', 'scales')],
        height=600,
        alt='The nine words of the sorting task, each on its own card with a '
            'picture: skip, battery, connection, delivery, pavement, queue, '
            'shift, stairwell and capacity.'),

 8: lambda: F.label_me(
        # (name, y fraction, x fraction) -- label_me sorts by y and numbers the
        # rules from the top, so Column A has to read down the building.
        [('crack', 0.195, 0.70), ('card reader', 0.360, 0.76),
         ('door', 0.545, 0.30), ('skip', 0.690, 0.74), ('car park', 0.780, 0.18)],
        height=620, draw=F.building_section,
        alt='Number 14 Alder Street and the ground around it, cut through. A '
            'thin line runs across a window on the half landing, a small '
            'machine stands beside a till two streets away, a street door is '
            'held back with a brick, a large open container sits on the '
            'pavement outside, and open ground lies behind the building. Five '
            'numbered lines run to the right for the learner to write each '
            'word, numbered from the top down.'),

 9: lambda: F.bank_strip(
        [('stairwell', 'stairs'), ('queue', 'crowd'),
         ('card reader', 'wallet'), ('cat', 'cat')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: stairwell, queue, card reader, cat.'),

 10: lambda: F.writing_frame(
        [('What you were doing', 'I was carrying shopping up to the flat.'),
         ('What interrupted it', 'My phone rang, and the battery was low.'),
         ('What the second thing was', 'The man below me left the street door open.'),
         ('Which one cost the time', 'All of it took twice as long.')],
        height=520,
        alt='The shape of the short piece of writing in four steps -- what '
            'you were doing, what interrupted it, what the second thing was, '
            'and which one cost the time -- with a line of the model beside '
            'each one.'),

 11: lambda: F.annotated_lines(
        [('The lorry left the skip on the pavement', 'left'),
         ('The van was arriving when the lorry left', 'was arriving'),
         ('Then the van arrived', 'arrived'),
         ('The van was in the middle of coming down', 'was')],
        height=464,
        alt='The four lines of the notice with the verb ringed in each: left, '
            'was arriving, arrived, was. The ring is what a correct '
            'underlining looks like.'),

 12: lambda: F.grammar_contrast(
        # The marks sit LEFT of 'now' because both forms are past. The left
        # side carries one mark, because the action finished; the right side
        # carries three across a stretch, because it was still going on.
        ('The card reader stopped.', 'past simple — finished',
         'One moment, and it was over.', [0.30]),
        ('Maya was serving a queue.', 'past continuous — going on',
         'She was somewhere in the middle of it.', [0.16, 0.26, 0.36]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the past simple for '
            'a finished action, with one mark at the moment it ended. On the right '
            'the past continuous for an action still going on, with three marks '
            'spread across the stretch of time it filled.'),

 13: lambda: F.timeline(
        [('1.30', 'a lorry left the skip'),
         ('1.40', 'the van went back to the depot'),
         ('2.10', 'the card reader stopped'),
         ('2.30', 'the agent sent the email'),
         ('5.10', 'the cat found under a car')],
        height=460,
        alt='One Saturday afternoon on a line: at half past one the lorry '
            'left the skip on the pavement, ten minutes later the van went '
            'back to the depot, at ten past two the card reader stopped, at '
            'half past two the agent sent the email, and at ten past five the '
            'cat was found under a car.'),

 14: lambda: F.sort_bins(
        ['interrupted', 'finished'],
        ['serving a queue when the reader stopped', 'wrote the amount on a slip',
         'counting the stock when the bank rang', 'paid in cash and went out'],
        height=540,
        alt='The four sentences of this task as chips above two empty bins, '
            'one for an action that was interrupted and one for an action '
            'that finished. Which chip goes in which bin is the exercise, so '
            'none of them is placed.'),

 15: lambda: F.error_pairs(
        [('While Yuki was speaking, the connection were dropping.',
          '…the connection dropped.'),
         ('I was knowing the answer before anybody asked me.', None),
         ('Yuki was joining the call again when she was losing it.', None),
         ('While the others talking, nobody noticed that she left.', None)],
        height=520,
        alt='The four sentences of the correction task, each with the wrong '
            'form struck through. The first is corrected for you; the other '
            'three have a line to write the correction on.'),

 16: lambda: F.speakers(
        [('Track 1.2', 'Tomas', 'battery', 'a flat battery on the forty-two'),
         ('Track 1.3', 'Maya and a customer', 'wallet', 'a card reader that stopped'),
         ('Track 1.4', 'four of them', 'crack', 'four versions of one cracked window')],
        height=560,
        alt='The three listenings in this unit, each drawn with the thing it '
            'is about: Tomas and a flat battery on the forty-two, Maya and a '
            'customer at a card reader that stopped, and four people giving '
            'four versions of one cracked window.'),

 17: lambda: F.dialogue_strip(
        [('Customer', 'crowd', 'Is it going to take long?'),
         ('Maya', 'wallet', 'The card reader lost the bank ten minutes ago.'),
         ('Customer', 'crowd', 'Can you not just take cash?'),
         ('Maya', 'wallet', 'Two people in this queue had cash.')],
        height=560,
        alt='The second listening as speech bubbles, the customer on one side '
            'and Maya on the other, so it is clear who holds which turn.'),

 18: lambda: F.match_columns(
        [('Mr Okonkwo', 'cat'), ('A neighbour', 'box'), ('A second neighbour', 'mobile')],
        ['could not see the building behind something',
         'saw two of the children while looking down',
         'saw which of the children threw the ball',
         'was there briefly and will not say for certain'],
        height=540,
        alt='Three cards on the left and four on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What were you doing when something last interrupted you?', 'clock'),
         ('Where were you standing, and how long did you wait?', 'stairs'),
         ('What were the other people doing at the time?', 'crowd')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        # G35: every position must draw something different, because the task
        # is to find the difference. Four pairs, four different glyphs.
        ('Student A — two o’clock', [('the door propped open', 'door'),
                                     ('the cat on the stairs', 'cat'),
                                     ('a box on the landing', 'box'),
                                     ('the skip empty', 'bin')]),
        ('Student B — five o’clock', [('the door shut, no brick', 'stones'),
                                      ('the cat in the car park', 'car_park'),
                                      ('the landing clear', 'stairs'),
                                      ('the lorry on Tuesday', 'van')]),
        height=560,
        alt='Student A has the stairwell at two o’clock and Student B has the '
            'same stairwell at five, with a fold line between them, so each '
            'student sees only their own picture and has to describe it to '
            'find the differences. Nothing is drawn the same way twice.'),

 21: lambda: F.cue_cards(
        ('Card A — the car park', ['say where you were in the afternoon',
                                   'say what you saw, which is nothing',
                                   'argue for a note about ball games',
                                   'say who should pay for the glass'], 'car_park'),
        ('Card B — the fund', ['say what the fund holds',
                               'say what the glass will cost',
                               'argue against a rule nobody can enforce',
                               'answer the other side'], 'coins'),
        height=560,
        alt='The two role-play cards side by side. Card A, the car park: say '
            'where you were in the afternoon, say what you saw, argue for a '
            'note about ball games, say who should pay for the glass. Card B, '
            'the fund: say what the fund holds, say what the glass will cost, '
            'argue against a rule nobody can enforce, answer the other side.'),

 22: lambda: F.talk_shape(
        [('what the news is', 1, 'notice'),
         ('who should tell you', 1, 'person'),
         ('one time it came too late', 2, 'clock')],
        height=420,
        alt='The one-minute talk as three beats on a line, each block as wide '
            'as the share of the minute it should take: what the news is, who '
            'should tell you, and one time it reached you far too late.'),

 23: lambda: F.process_strip(
        [('the delivery slot', 'timetable'), ('the van', 'van'),
         ('the pavement', 'path'), ('the kerb', 'slab'),
         ('the backlog', 'many_things')],
        height=460,
        alt='Why one Saturday afternoon concentrates its problems, in five '
            'stages with an arrow to the next: a two-hour delivery slot, the '
            'van that has to use it, the pavement it has to stop on, the six '
            'metres of kerb two vans want at once, and the backlog that makes '
            'every repair take longer.'),

 24: lambda: F.word_grid(
        [('Overlap', 'layer'), ('Capacity', 'scales'), ('Slot', 'timetable'),
         ('Backlog', 'many_things'), ('Kerb', 'slab')],
        height=440, cols=5,
        alt='The five words from the reading as numbered picture cards: '
            'overlap, capacity, slot, backlog, kerb.'),

 25: lambda: F.world_strip(
        # world_strip puts the glyph beside the FACT, so the fact is what has
        # to license it (G34): `lane` for one lane, `slab` for the kerb, `list`
        # for the list of numbers.
        [('Alder Street', 'lane', 'one lane, and a skip stopped the delivery'),
         ('Pell Road', 'slab', 'the van used the kerb and lost nine minutes'),
         ('Carrow Street', 'list', 'a list of numbers that is three years old')],
        height=460,
        alt='The same Saturday afternoon on three streets: a street with one '
            'lane, where a skip stopped the delivery; a street rebuilt with a '
            'loading bay, where the van used the kerb and lost nine minutes; '
            'and a street with a list of numbers three years old, which lost '
            'the afternoon knowing why.'),

 26: lambda: F.writing_frame(
        [('What you were doing', 'I was carrying a bike out through the car park.'),
         ('What the damage is', 'The window on the half landing cracked.'),
         ('What you are not asking', 'I am not trying to find out who did it.'),
         ('What you want agreed', 'The fund pays for the glass this once.')],
        height=520,
        alt='The shape of the message the learner is about to write, in four '
            'steps: what you were doing when it happened, what the damage is, '
            'what you are not asking for, and what you want the building to '
            'agree.'),

 27: lambda: F.writing_frame(
        [('two facts with times', 'Your email arrived to say somebody took it.'),
         ('while or when at least', 'I was showing the flat on Saturday afternoon.'),
         ('one clear request', 'When a viewing is booked, please telephone.')],
        height=571,
        alt='The shape of the email in three steps -- two facts with times, '
            'while or when at least once, and one clear request -- with a line '
            'of the model beside each one.'),

 28: lambda: F.writing_frame(
        [('a beginning and a middle', 'I was on the forty-two, twenty minutes out.'),
         ('what you lost', 'I was reading the handover notes on it.'),
         ('how it finished', 'Two other nurses took the shift before lunch.')],
        height=571,
        alt='The shape of the account in three steps -- a beginning and a '
            'middle, what you lost, and how it finished -- with a line of the '
            'model beside each one.'),

 29: lambda: F.writing_frame(
        [('what you planned', 'I had four hours and a short list of three things.'),
         ('what took the time', 'A delivery slot I did not choose ran until three.')],
        height=408,
        alt='The shape of the reflection in two steps -- what you planned and '
            'what actually took the time -- with a line of the model beside '
            'each one.'),

 30: lambda: F.function_map(
        [('They delivered it to the wrong number.', 'narrow down what went wrong'),
         ('Can you give me a number for this call?', 'something you can give them again'),
         ('What is the earliest you could collect?', 'how long to plan for'),
         ('It is blocking the only access.', 'treat the call as urgent')],
        height=580,
        alt='Four things people say when a delivery has gone wrong, each with '
            'an arrow to what it does: narrowing down what actually went '
            'wrong, getting something you can give them on a second call, '
            'finding out how long to plan for, and having the call treated as '
            'urgent.'),

 31: lambda: F.dialogue_strip(
        [('Operator', 'factory', 'Do you have an order number?'),
         ('Amina', 'shop', 'It is not my skip. Number 40 ordered it.'),
         ('Operator', 'factory', 'My next free slot is Tuesday morning.'),
         ('Amina', 'shop', 'Tuesday is two more days of this.')],
        height=560,
        alt='The 7B exchange as speech bubbles, the operator at the depot on '
            'one side and Amina in the shop on the other, so it is clear who '
            'asks and who answers.'),

 32: lambda: F.sequence_steps(
        [('Ask what the earliest date is.', 'calendar'),
         ('Say which part of it is wrong.', 'crack'),
         ('Ask for a job number and write it down.', 'sign_number'),
         ('Say why it cannot simply wait.', 'clock')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A — you made the telephone call', ['the job number you were given',
                                        'Tuesday morning, not before',
                                        'the charge goes to number 40',
                                        'admit the one thing you got wrong'], 'mobile'),
        ('Card B — you waited all day', ['ask about the delivery',
                                         'ask what the depot actually said',
                                         'ask what happens on Tuesday',
                                         'be annoyed, not unreasonable'], 'clock'),
        height=560,
        alt='The two 7D role-play cards side by side. Card A, you made the '
            'call: the job number you were given, Tuesday morning and not '
            'before, the charge goes to number 40, admit the one thing you got '
            'wrong. Card B, you waited all day: ask about the delivery, ask '
            'what the depot actually said, ask what happens on Tuesday, be '
            'annoyed but not unreasonable.'),

 34: lambda: F.writing_frame(
        [('a first line in three seconds', 'A skip arrived on the pavement outside.'),
         ('what is still unknown', 'Nobody will say who filled it.'),
         ('what you will do next', 'I will ring again and give them that number.')],
        height=571,
        alt='The shape of the noticeboard note in three steps -- a first line '
            'a passer-by understands in three seconds, what is still unknown, '
            'and what you will do next -- with a line of the model beside each '
            'one.'),

 35: lambda: F.before_after(
        # G35: the two sides share no glyph, because the street changed.
        ('Thursday — the letter', ['a letter on the fridge',
                                   'the street named on it',
                                   'no hours given at all'], 'envelope'),
        ('Saturday — the filming', ['two lorries across the entrance',
                                    'a diversion at the corner',
                                    'residents on their own steps'], 'camera'),
        height=520,
        alt='Calle Sarmiento before and after. On Thursday: a letter on the '
            'fridge, the street named on it, and no hours given. On Saturday: '
            'two lorries parked across the entrance, a diversion at the '
            'corner, and a camera at the far end.'),

 36: lambda: F.word_grid(
        [('Location', 'pin'), ('Permit', 'certificate'), ('Diversion', 'junction'),
         ('Compensation', 'coins'), ('Resident', 'home')],
        height=440, cols=5,
        alt='The five words from the global story as numbered picture cards: '
            'location, permit, diversion, compensation, resident.'),

 37: lambda: F.close_scene(
        [('the fund', 'coins'), ('the crack', 'crack'),
         ('the car park', 'car_park'), ('the kerb', 'slab')],
        height=460,
        alt='The meeting at number 14 drawn along one line: the two hundred '
            'and ten pounds in the fund, the crack in the communal glass, the '
            'car park where nobody saw it happen, and the kerb Amina would '
            'rather spend the money on.'),

 38: lambda: F.decision_fork(
        'Two hundred and ten pounds in the fund. What now?',
        [('Pay for the glass and put up the note',
          ['the crack is paid for now', 'a note nobody can enforce'], 'notice'),
         ('Pay for the glass and make no rule',
          ['nobody has to say who did it', 'the same thing next Saturday'], 'window'),
         ('Leave the crack, buy a bollard',
          ['the kerb is clear for the van', 'nothing is done about the crack'],
          'slab')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: paying for the glass and putting up a note, which '
            'pays for the crack now but adds a rule nobody can enforce; '
            'paying for the glass and making no rule, which asks nobody to say '
            'who did it but risks the same thing next Saturday; and leaving the crack and '
            'buying a bollard, which keeps the kerb clear for the van but does '
            'nothing about the crack.'),

 39: lambda: F.bank_strip(
        [('landing', 'stairs'), ('depot', 'factory'), ('queue', 'crowd'),
         ('was crossing', 'crossing'), ('car park', 'car_park'),
         ('pavement', 'path'), ('while', 'clock'), ('delivery', 'box')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'landing, depot, queue, was crossing, car park, pavement, while, '
            'delivery.'),

 40: lambda: F.progress_strip(
        [('I can say what I was doing when something interrupted me', False),
         ('I can use while and when to join a long action and a short one', False),
         ('I can describe a street problem and say what I want agreed', False),
         ('I can telephone about a delivery and ask for a job number', False),
         ('I can tell the story of an afternoon when several things went wrong', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick '
            'beside each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('skip', 'bin'), ('delivery', 'box'), ('queue', 'crowd'),
         ('pavement', 'path'), ('card reader', 'wallet'), ('depot', 'factory'),
         ('agent', 'key'), ('stairwell', 'stairs'), ('crack', 'crack'),
         ('slot', 'timetable')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 1 as picture cards on one page: '
            'skip, delivery, queue, pavement, card reader, depot, agent, '
            'stairwell, crack, slot.'),
}
