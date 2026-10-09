"""Unit 1 figures, in document order.

Rebuilt against source/PE_B2_U08_StudentBook.docx. That book's figures are
photographs of real things -- a weather alert on a screen, a departures board,
a web page, a poster, a shop counter -- with captions of four or five words.
This unit's 28 figures follow it: eleven are drawings of a place or an object,
six are documents the learner actually reads, and the rest are the task's own
shape. There is one icon grid, where the task is a picture-matching task.
"""
import figures as F

FIGURES = {
 # ---------------------------------------------------------------- front
 1: lambda: F.unit_opener_page(
        1, 'The Skip Outside Number 14',
        'The past continuous and the past simple — while and when',
        ['I can say what I was doing when something happened.',
         'I can use while and when in one sentence.',
         'I can ring a company about a problem.'],
        ['van', 'bin', 'shop', 'clock', 'crack'],
        alt='The opening page of Unit 1: the grammar point, and three things '
            'the learner will be able to do by the end of the unit.'),

 # ---------------------------------------------------------------- Warm Up
 2: lambda: F.plate(F.alder_street, height=600,
        alt='Alder Street from the side on a Saturday afternoon: a skip '
            'standing on the pavement outside the shop, a delivery van stopped '
            'behind it with nowhere to pass, and the parked cars that make the '
            'street one lane wide.'),
 3: lambda: F.scene(
        [('Amina', 'van', 'was waiting for the van'),
         ('Maya', 'wallet', 'was serving a queue'),
         ('Tomas', 'battery', 'was crossing town'),
         ('Dani', 'magnifier', 'was showing a flat'),
         ('Yuki', 'network', 'was on a video call'),
         ('Mr Okonkwo', 'cat', 'was looking for the cat')],
        height=560,
        alt='Six people at three o’clock on Saturday, each drawn with the '
            'thing that went wrong: Amina and the delivery van, Maya and the '
            'card reader, Tomas and a flat battery, Dani and a viewing, Yuki '
            'and a dropped connection, Mr Okonkwo and the cat.'),

 # ---------------------------------------------------------------- Part 1
 4: lambda: F.plate(F.bookshop_counter, height=600,
        alt='The counter at Hadley Books from the front: the card reader beside '
            'the till, a basket waiting on the top, and the queue going back '
            'past the shelves.'),
 5: lambda: F.word_grid(
        [('Skip', 'bin'), ('Queue', 'crowd'), ('Card reader', 'wallet'),
         ('Depot', 'factory'), ('Car park', 'car_park'), ('Pavement', 'path'),
         ('Battery', 'battery')],
        height=540, cols=4,
        alt='The seven pictures of exercise 1A as numbered cards: a skip, a '
            'queue, a card reader, a depot, a car park, a pavement and a '
            'battery.'),
 6: lambda: F.annotated_lines(
        [('I was WAIT ing for the van', 'was'),
         ('She was SERV ing a queue', 'was'),
         ('They were PLAY ing outside', 'were'),
         ('We were CROSS ing town', 'were')],
        height=464,
        alt='Four lines from the pronunciation drill. The beat falls on the '
            'main word and never on was or were, which is ringed in each line '
            'to show how little of it you hear.'),
 7: lambda: F.plate(F.stairwell, height=600,
        alt='Inside number 14: the street door propped open with a brick, the '
            'stairs climbing to the half landing, the cracked window above '
            'them, and the cat sitting on the second step.'),

 # ---------------------------------------------------------------- Part 2
 8: lambda: F.grammar_contrast(
        ('The van arrived.', 'past simple — finished',
         'One moment, and it was over.', [0.34]),
        ('Amina was waiting.', 'past continuous — going on',
         'She was in the middle of it.', [0.16, 0.26, 0.36]),
        height=620,
        alt='The two past forms side by side. On the left the past simple, with '
            'one mark at the moment the action ended. On the right the past '
            'continuous, with three marks across the stretch of time it filled.'),
 9: lambda: F.timeline(
        [('1.30', 'the lorry left the skip'),
         ('1.40', 'the van went back'),
         ('2.10', 'the card reader stopped'),
         ('3.30', 'the window cracked'),
         ('5.10', 'the cat came back')],
        height=460,
        alt='Saturday afternoon on one line: at half past one the lorry left '
            'the skip, ten minutes later the van went back, at ten past two the '
            'card reader stopped, at half past three the window cracked, and at '
            'ten past five the cat came back.'),
 10: lambda: F.sort_bins(
        ['while', 'when'],
        ['she was serving', 'the machine stopped',
         'they were playing', 'the van left'],
        height=520,
        alt='Four pieces of sentence above two empty bins, one for while and '
            'one for when. Which goes where is the exercise, so none is placed.'),

 # ---------------------------------------------------------------- Part 3
 11: lambda: F.plate(F.station, height=560,
        alt='The number 42 bus and the stop outside the hospital: the board '
            'showing the next bus, a seat, and a man standing with a dark phone '
            'in his hand.'),
 12: lambda: F.dialogue_strip(
        [('Customer', 'crowd', 'Is this queue going to take long?'),
         ('Maya', 'wallet', 'About ten more minutes.'),
         ('Customer', 'crowd', 'Can you take cash?'),
         ('Maya', 'wallet', 'I can. Only two people have cash today.')],
        height=540,
        alt='The bookshop conversation as speech bubbles, the customer on one '
            'side and Maya at the till on the other.'),

 # ---------------------------------------------------------------- Part 4
 13: lambda: F.question_cards(
        [('What were you doing at three?', 'clock'),
         ('Where were you standing?', 'pin'),
         ('Did you see anything?', 'magnifier')],
        height=460,
        alt='The three speaking questions as cards a pair can take one at a '
            'time.'),
 14: lambda: F.plate(F.alder_street, height=560,
        alt='The van stopped behind the skip, seen from the driver’s side: '
            'six metres of kerb, a skip on it, and no way past.'),

 # ---------------------------------------------------------------- Part 5
 15: lambda: F.document_card('web', 'larkfield-deliveries.co.uk',
        ['Larkfield Deliveries', 'Saturday slots',
         'Each slot is two hours long.',
         'Keep the kerb clear for the van.',
         'Tell us if a skip is in the way.',
         'We take the parcel back to the depot.'],
        alt='The delivery company’s web page in a browser window: the '
            'address bar, the heading Saturday slots, and the four rules about '
            'the kerb, the skip and the depot.'),
 16: lambda: F.document_card('notice', '14 ALDER STREET',
        ['Saturday, 1.30 p.m.', 'A skip arrived on our pavement.',
         'It is not ours. Number 40 ordered it.',
         'Hadwin Hire: collection Tuesday morning.',
         'Job number 4471.', '— Amina, the shop'],
        alt='Amina’s notice pinned to the stair door: the time the skip '
            'arrived, who ordered it, the collection day and the job number.'),
 17: lambda: F.match_columns(
        [('The card reader stops', 'wallet'), ('Your battery is low', 'battery'),
         ('The van cannot stop', 'van'), ('A window is cracked', 'crack')],
        ['Take cash, or take names.', 'Charge it before you go out.',
         'Tell the depot the street is blocked.', 'Ask the neighbours first.',
         'Buy a new window.'],
        height=560,
        alt='Four problems on the left and five answers on the right for the '
            'learner to join. One answer is not wanted, and it is drawn so the '
            'spare one is visible.'),

 # ---------------------------------------------------------------- Part 6
 18: lambda: F.document_card('notice', 'STAIR DOOR',
        ['Hello everyone.', 'The half landing window is cracked.',
         'I was in the car park twice on Saturday.', 'I saw nothing.',
         'Can we pay for the glass from the fund?', '— Dani, flat 3'],
        alt='Dani’s message on the stair door, which is the model for the '
            'writing task: what is broken, where he was, and the one thing he '
            'is asking for.'),
 19: lambda: F.board('HADWIN HIRE — PRICES',
        [('Skip, one week', '£180'), ('Full skip', '+£40'),
         ('Wrong address', 'no charge'), ('Collection', 'next free day'),
         ('Full skip needs', 'the lorry')],
        height=480,
        alt='The hire company’s prices and conditions on a lit board: the '
            'weekly price, the extra for a full skip, no charge for a wrong '
            'address, and what each condition depends on.'),

 # ---------------------------------------------------------------- Part 7
 20: lambda: F.decision_fork(
        'Three options. Which two are wrong?',
        [('(a) it is full', ['the text says so', 'keep it'], 'tick'),
         ('(b) it is too small', ['the text says full', 'cross it out'], 'cross'),
         ('(c) nobody paid', ['money is not mentioned', 'cross it out'], 'cross')],
        height=600,
        alt='The exam strategy drawn as one question and three branches: the '
            'option the text supports is kept, and the two the text does not '
            'mention are crossed out.'),
 21: lambda: F.sequence_steps(
        [('Read the notes first.', 'list'),
         ('Ask: time, number or name?', 'question'),
         ('Listen and write one word.', 'pencil'),
         ('Check your spelling.', 'tick')],
        height=480,
        alt='The four steps of the listening task in the order the exercise '
            'prints them, each with an empty box at the left for its number.'),

 # ---------------------------------------------------------------- Part 8
 22: lambda: F.document_card('email', 'To: Hadwin Hire',
        ['Subject: Skip at 14 Alder Street', 'I rang you on Saturday at four.',
         'Your driver left a skip outside my shop.',
         'My van could not pass. It went back.',
         'Please confirm Tuesday, and charge number 40.',
         'Job number 4471. — Amina'],
        alt='Amina’s email to the hire company, with the subject line, '
            'what happened, what she lost, and the two things she is asking '
            'for.'),
 23: lambda: F.board('AMINA’S NOTES',
        [('Address', '14 Alder Street'), ('Ordered by', 'number 40'),
         ('Van back at', '1.40'), ('Collection', 'Tuesday a.m.'),
         ('Job number', '4471')],
        height=460,
        alt='The five things Amina wrote down during the telephone call: the '
            'address, who ordered the skip, when the van turned back, the '
            'collection day and the job number.'),

 # ---------------------------------------------------------------- Part 9
 24: lambda: F.function_map(
        [('I’m at 14 Alder Street.', 'say where you are'),
         ('The skip is at the wrong house.', 'say what is wrong'),
         ('It is blocking my shop.', 'say why it cannot wait'),
         ('Can you give me a job number?', 'get something to quote')],
        height=560,
        alt='Four lines from the telephone call, each with an arrow to the job '
            'it does: saying where you are, saying what is wrong, saying why it '
            'cannot wait, and getting a number you can use again.'),
 25: lambda: F.cue_cards(
        ('Card A — the customer', ['say the address',
                                   'say what is wrong',
                                   'say why it cannot wait',
                                   'ask for a job number'], 'mobile'),
        ('Card B — the company', ['find the booking',
                                  'say the earliest day',
                                  'say why it is that day',
                                  'give a job number'], 'factory'),
        height=540,
        alt='The two role-play cards side by side: the customer says the '
            'address, the problem and the urgency and asks for a number; the '
            'company finds the booking, gives the earliest day and the reason, '
            'and gives the number.'),

 # ---------------------------------------------------------------- Part 10
 26: lambda: F.progress_strip(
        [('I can say what I was doing when something happened', False),
         ('I can use while and when in one sentence', False),
         ('I can talk about deliveries and street problems', False),
         ('I can ring a company and ask for a job number', False),
         ('I can write a short note for a noticeboard', False)],
        height=500,
        alt='The five Can-Do lines of the unit as a strip with a box to tick '
            'beside each one.'),
 27: lambda: F.plate(F.rule_wall, height=540,
        alt='The noticeboard inside the street door at the end of the unit, '
            'with Amina’s notice about the skip, Dani’s message about '
            'the window, and an empty hook for the next one.'),
 28: lambda: F.glossary_grid(
        [('skip', 'bin'), ('delivery', 'box'), ('depot', 'factory'),
         ('pavement', 'path'), ('kerb', 'slab'), ('queue', 'crowd'),
         ('card reader', 'wallet'), ('landing', 'stairs'),
         ('car park', 'car_park'), ('battery', 'battery'),
         ('shift', 'clock'), ('crack', 'crack')],
        height=700, cols=4,
        alt='All twelve glossary words of Unit 1 as picture cards on one page.'),
}
