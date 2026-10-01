# -*- coding: utf-8 -*-
"""Unit 10 — Reporting the Year and Growing.
Strand A: the year reported — the written figures (Karim, Lina).
Strand B: the year proposed — the case for a new line and a new shop (Ms. Maya, Rami).
No new grammar: a review of Units 1-9, plus the language of figures.
"""
import frames as F
from art import NAVY, BLUE, ORANGE, GREEN, GREEN_D, PURPLE, GREY

B = []

PEOPLE = [
    ('Mr. Adnan', 'Founder', 'm', NAVY),
    ('Ms. Rania', 'Board Member', 'h', ORANGE),
    ('Mr. Tarek', 'General Mgr', 'm', BLUE),
    ('Karim', 'Fin. Controller', 'm', GREY),
    ('Ms. Maya', 'Alten IL · Retail', 'w', ORANGE),
    ('Rami', 'Bashak · Imports', 'm', GREEN_D),
]

# ============================================================ unit openers
B += [
    ('fig', F.route_strip('The whole cycle — Units 1 to 10', [
        ('globe', 'Source'), ('doc', 'Order and pay'), ('ship', 'Ship and clear'),
        ('shelf', 'Receive and hold'), ('shop', 'Sell and collect'),
    ]), 'One year, five stages, and back to the beginning.'),
    ('fig', F.team_strip('The people who will present', PEOPLE),
     'Six people, six parts of one report.'),
]

# ============================================================ WARM UP
B += [
    ('bar', 'Warm Up', 'TRADE'),
    ('p', 'Look at the pictures. Answer these questions before you read.'),
    ('items', [
        'What numbers does your company look at at the end of a year?',
        'Which went up this year, and which went down?',
        'If you could change one thing next year, what would it be?',
    ]),
    ('h3', 'Read'),
    ('p', 'It is the annual review again, one year after Unit 1. The same room, the same seven '
          'people, and a very different set of numbers.'),
    ('p', 'Karim presents first, and he has learned something about presenting. He does not '
          'read the whole sheet. He gives five figures and one sentence for each. Imports rose '
          'from eleven orders to nineteen. Sales grew by twenty-two per cent, with the highest '
          'month in March. Overdue money fell from nine per cent of sales to five. Stock cover '
          'on steel dropped from four months to seven weeks, although cement is still tight. '
          'And the margin held steady, which, after a year of moving exchange rates, is the '
          'number he is proudest of.'),
    ('p', 'Then he says the thing that makes it a report rather than a list. “Three of those '
          'five changed because we changed something. Overdue money fell because we chased in '
          'the first week instead of the fourth. Stock fell because every line now has a '
          'reorder level with a name on it. And the margin held because we price from landed '
          'cost, not from the offer.”'),
    ('p', 'Ms. Maya presents second, and she has no history at all — only a future. For three '
          'months the three shops have kept the lost-sales sheet. Four hundred and six people '
          'asked for five-millimetre steel bar and were told no. Sixty-one asked for eight '
          'millimetre. “That is not a feeling,” she says. “That is four hundred and six '
          'people.”'),
    ('p', 'Rami has already done the work from Unit 2. Three enquiries, three replies, two '
          'suppliers checked, a landed cost built, a price tested against the Homs yard. The '
          'proposal is on one page: import bar as a trial, two hundred tonnes, sell it through '
          'the existing three shops, and decide about a fourth shop after six months.'),
    ('p', 'Mr. Adnan listens to all of it without writing anything. Then he asks one question, '
          'and it is not about the money. “Who owns it?”'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'How long is it since Unit 1?   (one year)',
        'What are Karim’s five figures?',
        'What makes his presentation “a report rather than a list”?',
        'What did the lost-sales sheet show after three months?',
        'What exactly is Rami proposing?',
        'What is Mr. Adnan’s only question, and why is it surprising?',
    ]),
    ('ex', 'B. True or False? Write T or F. (0 is done for you.)'),
    ('items0', [
        'Karim reads the whole sheet aloud.   (F)',
        'Imports rose from eleven orders to nineteen.   ____',
        'Overdue money rose this year.   ____',
        'Stock cover on steel fell to seven weeks.   ____',
        'Four hundred and six people asked for five-millimetre bar.   ____',
        'Rami proposes opening a fourth shop immediately.   ____',
    ]),
    ('ex', 'C. Find the words. Find a word or phrase in the text that means: (0 is done for you.)'),
    ('items0', [
        'went up → (rose)',
        'went down → f____________ / d____________',
        'did not change → held s____________',
        'a small first order to test an idea → a t____________',
    ]),
    ('ex', 'D. Over to you. Answer about yourself.'),
    ('items', [
        'Give one figure from your work that rose this year, and say why.',
        'Give one that fell. Was that good or bad?',
        'What would you propose for next year, and who would own it?',
    ]),
]

# ============================================================ PART 1
B += [
    ('bar', 'Part 1  ·  Vocabulary and Terminology (review)', 'FINANCE'),
    ('h3', 'Describing figures'),
    ('fig', F.icon_row('Up, down, and staying the same', 'THE LANGUAGE OF FIGURES', [
        ('scale', 'rose'), ('cross', 'fell'), ('clock', 'held steady'),
        ('money', 'by 22%'), ('tick', 'the highest'),
    ]), 'Five words that turn a table into a sentence.'),
    ('ex', 'A. Match each word (1–7) with its meaning (a–h). There is one you do not need. '
           '(0 is done for you.)'),
    ('items0', [
        'rise  (f)',
        'fall  ____   a. the highest point reached',
        'peak  ____   b. not changing much',
        'steady  ____   c. a large, fast change',
        'sharp  ____   d. a small change',
        'slight  ____   e. twice as much',
        'double  ____   f. to go up',
        'forecast  ____   g. to go down',
        '          h. what we expect to happen',
    ]),
    ('ex', 'B. Complete the sentences with the words in the word bank.'),
    ('bank', 'Word bank:', ['rose', 'fell', 'by', 'to', 'peak', 'steady']),
    ('items', [
        'Sales ____________ twenty-two per cent this year.',
        'Overdue money ____________ from nine per cent ____________ five.',
        'Imports ____________ from eleven orders to nineteen.',
        'The ____________ month was March.',
        'The margin held ____________ all year.',
    ]),
    ('h3', 'The words of the whole course'),
    ('fig', F.label_panel('One word from every unit', [
        ('subsidiary', 'U1 · the Group'), ('enquiry', 'U2 · sourcing'),
        ('landed cost', 'U3 · the price'), ('purchase order', 'U4 · the order'),
        ('bill of lading', 'U5 · shipping'), ('reorder level', 'U6 · stock'),
        ('quotation', 'U7 · selling'), ('overdue', 'U8 · getting paid'),
        ('root cause', 'U9 · problems'), ('proposal', 'U10 · growing'),
    ], cols=5), 'Ten units, ten words, one business.'),
    ('ex', 'C. Match the word (1–5) with the unit it came from (a–e).'),
    ('items', [
        'landed cost  ____   a. shipping and customs',
        'bill of lading  ____   b. getting paid',
        'reorder level  ____   c. offers and prices',
        'overdue  ____   d. goods in and stock',
        'root cause  ____   e. when it goes wrong',
    ]),
    ('h3', 'The year in numbers'),
    ('fig', F.doc_card('The annual figures', 'The year, in five lines',
                       [('Import orders', '11 → 19'),
                        ('Sales', '+22%, highest month March'),
                        ('Overdue money', '9% → 5% of sales'),
                        ('Stock cover, steel', '4 months → 7 weeks'),
                        ('Margin', 'held steady'),
                        ('Lost sales, bar', '406 requests, 3 months'),
                        ('Proposal', 'trial import, 200 t')], accent=GREEN_D),
     'Five numbers that changed, and one that did not.'),
    ('ex', 'D. Odd one out. Which word is different? Circle it.'),
    ('items', [
        'rose · grew · increased · fell',
        'sharp · slight · gradual · overdue',
        'peak · highest · lowest · maximum',
        'forecast · target · actual · freight',
        'proposal · recommendation · business case · invoice',
    ]),
    ('ex', 'E. Choose the best answer.'),
    ('items', [
        'A large, fast change is a…   (a) sharp   (b) slight   change',
        'The highest point reached is the…   (a) peak   (b) average',
        'What we expect to happen is the…   (a) forecast   (b) actual',
        'A small first order to test an idea is a…   (a) trial   (b) target',
    ]),
    ('ex', 'F. Classify. Write each word in the correct column.'),
    ('bank', 'Words:', ['rose', 'fell', 'held steady', 'grew', 'dropped', 'remained flat']),
    ('grid', ['Went up', 'Went down', 'Did not change'], 3),
    ('ex', 'G. Match the two halves (1–6 with a–f).'),
    ('items', [
        'rose  ____   a. steady',
        'fell from nine  ____   b. by 22%',
        'held  ____   c. to five',
        'the highest  ____   d. case',
        'a business  ____   e. month',
        'a trial  ____   f. order',
    ]),
    ('ex', 'H. Complete the paragraph with the words in the box.'),
    ('bank', 'Box:', ['by', 'fell', 'from', 'highest', 'rose', 'steady']),
    ('p', 'Imports (1)____________ from eleven orders to nineteen. Sales grew (2)____________ '
          'twenty-two per cent, and the (3)____________ month was March. Overdue money '
          '(4)____________ (5)____________ nine per cent of sales to five. The margin held '
          '(6)____________ all year.'),
]

# ============================================================ PART 2
B += [
    ('bar', 'Part 2  ·  Grammar Review (all units)', 'TRADE'),
    ('fig', F.grammar_card('The tenses you have used', [
        ('U1 · the year so far', 'present perfect', 'We have placed nineteen orders.'),
        ('U5 · the process', 'passive', 'The containers are cleared by Komosh.'),
        ('U9 · what happened', 'past simple / continuous', 'The truck was waiting when it arrived.'),
    ], 'Add the time word and the tense follows: so far · last year · while'),
     'Three tenses, three jobs.'),
    ('fig', F.grammar_card('The modals you have used', [
        ('U2 · rules', 'must / mustn’t', 'You must send three enquiries.'),
        ('U4 · plans', 'will / going to', 'The transfer is leaving on Sunday.'),
        ('U8 · advice', 'should / could', 'You could pay in two instalments.'),
    ], 'must = a rule · should = advice · could = one option · might = perhaps'),
     'From the strongest to the softest.'),
    ('fig', F.grammar_card('Joining your ideas', [
        ('U3 · a condition', 'if / unless', 'If we order 2,000 t, they will give 7%.'),
        ('U6 · which one', 'who / which / where', 'the steel which we rejected'),
        ('U9 · cause and surprise', 'because of / although', 'Although sales rose, cement fell.'),
    ], 'These four are what turn short sentences into a report.'),
     'The words that carry an argument.'),
    ('fig', F.split_panel('One report, every unit',
                          'LOOKING BACK · the figures',
                          ['We have placed nineteen orders. (U1)',
                           'The goods were cleared by Komosh. (U5)',
                           'Although sales rose, cement was tight. (U9)',
                           'Overdue money fell from 9% to 5%. (U8)'],
                          'LOOKING FORWARD · the proposal',
                          ['If we import bar, we will need a supplier. (U3)',
                           'We must write three enquiries. (U2)',
                           'We are going to run a trial. (U4)',
                           'Maya could own the first six months. (U8)']),
     'Nine units, two columns, one meeting.'),
    ('watch', 'In a report, keep the tenses apart. Use the present perfect for the year so far '
              '(we have placed nineteen orders), the past simple for a finished time (we placed '
              'eleven last year), and will or going to for what comes next. Mixing them is the '
              'commonest fault in a written summary.'),
    ('h3', 'Form'),
    ('p', 'present perfect: have / has + V3     ·     passive: be + V3     ·     '
          'past continuous: was / were + -ing     ·     must · should · could · might     ·     '
          'if / unless · who / which / where · because of · although'),
    ('ex', 'A. Choose the right tense. (0 is done for you.)'),
    ('items0', [
        'We ___ (place) nineteen orders so far this year.   (have placed)',
        'We ____________ (place) eleven orders last year.',
        'The containers ____________ (clear) by Komosh every time.',
        'The truck ____________ (wait) when the papers arrived.',
        'Next year we ____________ (run) a trial import of bar.',
    ]),
    ('ex', 'B. Complete with must, mustn’t, should, could or might.'),
    ('items', [
        'You ____________ send three enquiries. It is the rule.',
        'You ____________ deduct a claim from a payment.',
        'We ____________ import bar as a trial first — it is one option.',
        'Sales ____________ fall in the summer, but we are not sure.',
        'You ____________ put every agreement in writing.',
    ]),
    ('ex', 'C. Join the sentences with if, unless, although or because of.'),
    ('items', [
        'We order 200 tonnes. They give us a better price. → ____________',
        'We do not check the certificate. Customs will hold it. → ____________',
        'Sales rose. Cement was still tight. → ____________',
        'The port was closed. We lost eleven days. → ____________',
    ]),
    ('ex', 'D. Complete with who, which or where.'),
    ('items', [
        'The supplier ____________ sent the short container has replied.',
        'The steel ____________ we rejected is still in the yard.',
        'The shop ____________ sold out twice is in Rural Damascus.',
        'The person ____________ owns the reorder level is Ms. Dana.',
    ]),
    ('ex', 'E. Make the sentence passive.'),
    ('items', [
        'Komosh clears the goods. → ____________',
        'Customs inspected four containers. → ____________',
        'The chamber issued the certificate. → ____________',
        'Ms. Dana signs every goods-received note. → ____________',
    ]),
    ('ex', 'F. Report the words.'),
    ('items', [
        '“Four hundred and six people asked for bar.” → She said ____________',
        '“Can we run a trial?” → He asked ____________',
        '“I will own the first six months.” → She said ____________',
        '“We don’t stock it.” → She told them ____________',
    ]),
    ('ex', 'G. Find and correct the mistake in each sentence. (0 is done for you.)'),
    ('items0', [
        'We have placed eleven orders last year. → (We placed eleven orders last year.)',
        'The goods was cleared by Komosh. → ____________',
        'If we will order 2,000 t, they give 7%. → ____________',
        'Although sales rose, but cement was tight. → ____________',
        'He said me he needed 200 tonnes. → ____________',
    ]),
    ('ex', 'H. About you. Write two sentences about your year: one with the present perfect, '
           'and one with “going to”.'),
    ('nlines', 2),
    ('ex', 'I. Complete the report with the right form.'),
    ('items', [
        'Imports ____________ (rise) from eleven orders to nineteen.',
        'Overdue money ____________ (fall) because we ____________ (chase) earlier.',
        'Every line now ____________ (have) a reorder level with a name on it.',
        'Next year we ____________ (import) bar as a trial.',
        'If the trial ____________ (work), we ____________ (open) a fourth shop.',
    ]),
    ('ex', 'J. Write one sentence for each unit, using its grammar.'),
    ('items', [
        'U1 present perfect — what the Group has done this year → ____________',
        'U3 first conditional — a discount you want → ____________',
        'U5 passive — how goods are cleared → ____________',
        'U8 should — advice about a late payment → ____________',
    ]),
]

# ============================================================ PART 3
B += [
    ('bar', 'Part 3  ·  Listening and Dialogue', 'FINANCE'),
    ('fig', F.dialogue_scene(('m', GREY), ['Five figures, and one', 'sentence for each.'],
                             ('m', NAVY), ['Good. Which three', 'did we cause?']),
     'Strand A · presenting the year that has gone.'),
    ('h3', 'Dialogue 1 — Presenting the figures (the review)'),
    ('p', 'Listen and read. (Your teacher will read the dialogue, or play the audio.)'),
    ('dlg', [
        ('Karim', 'Five figures. Imports rose from eleven orders to nineteen. Sales grew by '
                  'twenty-two per cent, with the highest month in March.'),
        ('Mr. Adnan', 'And the money?'),
        ('Karim', 'Overdue money fell from nine per cent of sales to five. Stock cover on steel '
                  'dropped from four months to seven weeks, although cement is still tight.'),
        ('Mr. Adnan', 'And the margin?'),
        ('Karim', 'It held steady. After a year of moving rates, that is the one I am proudest '
                  'of.'),
        ('Mr. Adnan', 'Good. Which three did we cause?'),
        ('Karim', 'Overdue money, because we chased in the first week instead of the fourth. '
                  'Stock, because every line now has a reorder level with a name on it. And the '
                  'margin, because we price from landed cost and not from the offer.'),
        ('Mr. Adnan', 'And the other two?'),
        ('Karim', 'Sales and imports. Those grew because the market grew. If the market turns, '
                  'they will fall again, and the three we caused will not.'),
        ('Mr. Adnan', 'That is the first honest sentence I have heard at a review in ten years.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'How many figures does Karim present?   (five)',
        'What happened to imports and to sales?',
        'What happened to overdue money and to stock cover?',
        'Which figure is Karim proudest of, and why?',
        'Which three changes did the company cause, and how?',
        'Why does Karim say sales and imports are different?',
    ]),
    ('ex', 'B. True or False? Write T or F.'),
    ('items', [
        'Imports fell this year.   ____',
        'The highest sales month was March.   ____',
        'Overdue money is now five per cent of sales.   ____',
        'Cement stock is comfortable.   ____',
        'Karim says sales grew because of something the company did.   ____',
    ]),
    ('ex', 'C. Language focus. Find in the dialogue: (0 is done for you.)'),
    ('items0', [
        'a figure that went up, with “from … to …” → (Imports rose from eleven orders to nineteen.)',
        'a figure that went up, with “by” → ____________',
        'a sentence with “although” → ____________',
        'a first conditional about the future → ____________',
    ]),
    ('fig', F.half_scene('w', ORANGE, ['Four hundred and six', 'people. Not a feeling.']),
     'Strand B · arguing for something that does not exist yet.'),
    ('h3', 'Dialogue 2 — Making the case (the proposal)'),
    ('dlg', [
        ('Ms. Maya', 'Three shops, three months, one sheet of paper. Four hundred and six '
                     'people asked us for five-millimetre bar. Sixty-one asked for eight.'),
        ('Ms. Rania', 'And we told all of them no.'),
        ('Ms. Maya', 'We told all of them no. That is not a feeling. That is four hundred and '
                     'six people.'),
        ('Rami', 'I have done the Unit Two work. Three enquiries, three replies, two suppliers '
                 'checked, landed cost built, and I have tested the price against the Homs yard.'),
        ('Ms. Rania', 'What would you need?'),
        ('Rami', 'Two hundred tonnes as a trial. Sell it through the three shops we already '
                 'have. Decide about a fourth shop after six months, not before.'),
        ('Ms. Rania', 'And if it does not sell?'),
        ('Rami', 'Then we have two hundred tonnes of a product four hundred people asked for, '
                 'and we will have learned something that costs less than one container of a '
                 'mistake.'),
        ('Mr. Adnan', 'Who owns it?'),
        ('Ms. Maya', 'I do. The sheet was mine. The first six months should be mine too.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What evidence does Ms. Maya give, and over what period?',
        'What work has Rami already done?',
        'What exactly is the proposal, and what is deliberately left until later?',
        'What is Rami’s answer to “and if it does not sell?”',
    ]),
    ('ex', 'B. Listen again and choose the best answer (A–D).'),
    ('items', [
        'The sheet was kept for … months.   A) one  B) two  C) three  D) six',
        'The number who asked for 5 mm bar was…   A) 61  B) 200  C) 406  D) 467',
        'The trial would be … tonnes.   A) 40  B) 200  C) 406  D) 1,200',
        'The fourth shop would be decided after … months.   A) three  B) six  C) nine  D) twelve',
    ]),
]

# ============================================================ PART 4
B += [
    ('bar', 'Part 4  ·  Speaking and Your Role (the simulation)', 'TRADE'),
    ('fig', F.label_panel('Phrases for presenting and proposing', [
        ('Five figures, and one line each.', 'opening a report'),
        ('X rose from … to …', 'describing a change'),
        ('Sales grew by …%', 'describing a size'),
        ('Three of those we caused.', 'separating luck from work'),
        ('What I am proposing is…', 'opening a proposal'),
        ('If it works, we will…', 'the next step'),
    ], cols=3), 'A report is figures plus the reason for each one.'),
    ('ex', 'A. Role-play: the annual review. Work in groups of four. One presents the figures, '
           'one makes a proposal, one asks the hard questions, one decides.'),
    ('items', [
        'Presenter: give five figures, one sentence each.',
        'Decider: ask which of them the company caused.',
        'Proposer: give your evidence as a number, not a feeling.',
        'Questioner: ask “and if it does not work?”',
        'Proposer: answer honestly, and say what the trial would cost.',
        'Decider: ask “who owns it?” and get a name.',
    ]),
    ('fig', F.label_panel('Every role reports the year differently', [
        ('Imports', '19 orders, 2 suppliers added'),
        ('Freight', '96 containers, none lost'),
        ('Depot', 'cover down from 4 months to 7 weeks'),
        ('Retail', '406 requests we could not fill'),
        ('Accounts', 'overdue down from 9% to 5%'),
        ('Admin', '14 approvals, average 3 days'),
    ], cols=3), 'Six roles, six figures, one year.'),
    ('ex', 'B. Your Role. Report YOUR year in one figure and one reason. '
           '(Choose your real role.)'),
    ('items', [
        '[Trade] Import Manager: “We have placed nineteen orders, up from eleven.”',
        '[Logistics] Freight: “We cleared ninety-six containers and lost none.”',
        '[Trade] Depot: “Cover fell from four months to seven weeks, because every line has an '
        'owner.”',
        '[Trade] Retail: “Four hundred and six people asked for a product we do not stock.”',
        '[Finance] Accountant: “Overdue money fell from nine per cent to five.”',
        '[Admin] Assistant: “Fourteen approvals, three days on average, down from eight.”',
    ]),
    ('ex', 'C. Ask your partner. Walk around and ask three people.'),
    ('items', [
        'Which of your figures went up this year, and did you cause it?',
        'What would you propose, and what evidence do you have?',
        'Who would own it?',
    ]),
    ('ex', 'D. Discuss. Ask and answer.'),
    ('items', [
        'Why does Mr. Adnan ask “who owns it?” instead of asking about the money?',
        'Is it better to grow by selling more of what you have, or by adding something new?',
    ]),
]

# ============================================================ PART 5
B += [
    ('bar', 'Part 5  ·  Extended Reading', 'TRADE'),
    ('h3', 'The two questions a good report answers'),
    ('fig', F.split_panel('Every figure has two halves',
                          'WHAT HAPPENED',
                          ['Imports rose 11 → 19',
                           'Sales grew by 22%',
                           'Overdue fell 9% → 5%',
                           'Margin held steady'],
                          'AND WHY — AND DID WE CAUSE IT?',
                          ['The market grew — not us',
                           'The market grew — not us',
                           'We chased in week one — us',
                           'We price from landed cost — us']),
     'Half the figures are weather. Half are work.'),
    ('p', 'Almost every company produces a report at the end of the year, and most of them are '
          'useless in the same way: they say what happened and stop. Sales were up eleven per '
          'cent. Costs were down three. Everyone nods, and nobody learns anything, because a '
          'number on its own cannot tell you what to do next.'),
    ('p', 'A good report answers two questions about every figure. The first is what happened, '
          'which is arithmetic. The second is why, which is judgement — and the most important '
          'part of the second question is whether the company caused it or merely received it.'),
    ('p', 'This distinction is not academic. Suppose sales rise twenty-two per cent in a year '
          'when the whole market rises twenty-five. The figure is good and the performance is '
          'bad: the company lost ground while its numbers improved. Now suppose overdue money '
          'falls from nine per cent to five because collection was changed from week four to '
          'week one. That is smaller, less impressive, and far more valuable, because it will '
          'still be true next year when the market is worse.'),
    ('p', 'The habit of asking “did we cause it?” also protects a company from its own good '
          'luck. A business that grows in a rising market usually believes it is growing '
          'because it is clever. It hires, it buys stock, it opens branches — and when the '
          'market turns, all of those decisions turn out to have been built on weather. The '
          'company that knows which three of its five figures were its own work is the one that '
          'can tell the difference between a good year and a good company.'),
    ('p', 'The second half of a report is the proposal, and it follows the same rule. A '
          'proposal built on an opinion — “I think customers want bar” — is a feeling with a '
          'budget attached. A proposal built on four hundred and six recorded requests is an '
          'argument. The difference is not confidence; it is evidence, and evidence is almost '
          'always boring to collect. Somebody wrote a line on a sheet by a till, four hundred '
          'and six times, over three months, and that is what a hundred-thousand-dollar '
          'decision is made of.'),
    ('p', 'And then the last question, which costs nothing and decides everything: who owns it? '
          'A proposal with no name is a wish. A proposal with a name, a date and a number is a '
          'plan — and the person whose name is on it will keep thinking about it on a Sunday, '
          'which no committee has ever done.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'Why are most annual reports useless?   (they say what happened and stop)',
        'What are the two questions a good report answers?',
        'Why can a twenty-two per cent rise be a bad performance?',
        'Why is the fall in overdue money “far more valuable”?',
        'How does a rising market mislead a company?',
        'What is the difference between a proposal that is a feeling and one that is an '
        'argument?',
    ]),
    ('ex', 'B. Choose the best answer (A–D).'),
    ('items', [
        'A number on its own cannot tell you…   A) what happened  B) what to do next  '
        'C) the total  D) the date',
        'If the market rose 25% and sales rose 22%, the company…   A) did well  B) lost ground  '
        'C) grew fastest  D) broke even',
        'The fall in overdue money is valuable because it will still be true…   A) in March  '
        'B) next year  C) abroad  D) in the shops',
        'A proposal with no evidence is…   A) an argument  B) a feeling with a budget  '
        'C) a forecast  D) a report',
        'A proposal with no name is…   A) a plan  B) a wish  C) a trial  D) a target',
    ]),
    ('ex', 'C. Find a word or phrase in the text that means:'),
    ('items', [
        'to become worse, about a market → to t____________',
        'facts that support an argument → e____________',
        'to lose position compared with others → to lose g____________',
        'not based on fact, only on what you believe → an o____________',
    ]),
    ('ex', 'D. Complete the summary with ONE word in each gap.'),
    ('p', 'Most reports say what (1)____________ and stop. A good one also asks (2)____________, '
          'and whether the company (3)____________ it. A rise in a rising market can be a bad '
          '(4)____________. A proposal built on an opinion is a feeling; one built on '
          '(5)____________ is an argument. And a proposal with no (6)____________ is a wish.'),
    ('ex', 'E. Discuss. Talk in pairs.'),
    ('items', [
        'Which of your company’s results last year did it actually cause?',
        'What evidence would you need before proposing something new?',
    ]),
    ('ex', 'F. True or False? (about the reading). Write T, F or NOT GIVEN.'),
    ('items', [
        'A number on its own tells you what to do next.   ____',
        'Growing in a rising market proves a company is clever.   ____',
        'Most companies record lost sales.   ____',
        'The writer thinks a named owner matters more than a committee.   ____',
    ]),
]

# ============================================================ PART 6
B += [
    ('bar', 'Part 6  ·  Writing (a real email)', 'ADMIN'),
    ('h3', 'Model — A one-page proposal'),
    ('fig', F.doc_card('The one-page proposal', 'Proposal',
                       [('1  What I propose', 'one sentence'),
                        ('2  The evidence', 'a number, not a feeling'),
                        ('3  What it costs', 'and over what period'),
                        ('4  The risk', 'said honestly'),
                        ('5  How we limit it', 'a trial, not a launch'),
                        ('6  Who owns it', 'a name'),
                        ('7  The decision point', 'a date')], accent=BLUE),
     'Seven lines. If it needs two pages, it is not ready.'),
    ('p', 'Subject: Proposal — trial import of 5 mm steel bar. Dear Mr. Adnan, I propose that '
          'we import two hundred tonnes of five-millimetre steel bar as a trial, and sell it '
          'through our three existing shops. The evidence is not an opinion. Over three months '
          'our shops recorded four hundred and six customers who asked for five-millimetre bar '
          'and were told we did not stock it, and a further sixty-one who asked for eight '
          'millimetre. Rami has completed the sourcing work: three enquiries, three replies, '
          'two suppliers checked, and a landed cost built and tested against the Homs yard. The '
          'main risk is that bar sells more slowly than coil, and we would be holding stock we '
          'have not held before. We limit that risk by starting with two hundred tonnes rather '
          'than a full container load, and by using shops we already pay for. Ms. Maya would '
          'own the trial. I suggest we review it after six months and decide then whether to '
          'continue, and only after that whether a fourth shop is justified. Best regards, '
          'Rami Import Manager, Bashak Co.'),
    ('ex', 'A. Answer about the email. (0 is done for you.)'),
    ('items0', [
        'What exactly is proposed?   (a trial import of 200 tonnes of 5 mm steel bar, sold through the three existing shops)',
        'What is the evidence, and over what period?',
        'What is the main risk, and how is it limited?',
        'Who owns it, and when is the decision point?',
    ]),
    ('ex', 'B. Put the proposal in order (1–6).'),
    ('items', [
        '(  )  The main risk is that bar sells more slowly than coil.',
        '(  )  Dear Mr. Adnan,',
        '(  )  I propose that we import two hundred tonnes as a trial.',
        '(  )  Over three months our shops recorded four hundred and six customers.',
        '(  )  Ms. Maya would own the trial.',
        '(  )  Best regards, Rami',
    ]),
    ('h3', 'Guided writing'),
    ('ex', 'C. Now you write. Write a one-page proposal (90–120 words) for something at your '
           'work. Give one number as evidence, say the risk honestly, name an owner, and give a '
           'decision date.'),
    ('p', 'Plan:  1) “Dear …,”   2) “I propose that we ….”   3) “The evidence is ….”   '
          '4) “The main risk is ….”   5) “We limit that by ….”   6) “… would own it.”   '
          '7) “I suggest we review it in ….”   8) “Best regards, …”'),
    ('p', 'Sentence starters:  “I propose that we…” · “The evidence is not an opinion.” · '
          '“The main risk is…” · “We limit that risk by…” · “I suggest we review it after…”'),
    ('lines', 5),
    ('ex', 'D. Checklist. Tick each one when you have checked your proposal.'),
    ('check', [
        'I said what I propose in one sentence.',
        'I gave a number as evidence, not a feeling.',
        'I said the main risk honestly.',
        'I said how the risk is limited.',
        'I named an owner and gave a decision date.',
    ]),
]

# ============================================================ PART 7
B += [
    ('bar', 'Part 7  ·  Trade-Skills Track (the project)', 'TRADE'),
    ('h3', 'The course project: run one cycle, end to end'),
    ('fig', F.doc_card('The project brief', 'One product, one cycle',
                       [('1 · Source', 'three enquiries, one check-list'),
                        ('2 · Price', 'a landed cost and a selling price'),
                        ('3 · Order', 'a PO and a payment instruction'),
                        ('4 · Ship', 'a document set and a clearance update'),
                        ('5 · Receive', 'a goods-received note'),
                        ('6 · Sell', 'a quotation to one customer'),
                        ('7 · Collect', 'an invoice and a reminder'),
                        ('8 · Report', 'five figures and a proposal')], accent=GREEN_D),
     'Eight documents, one product, the whole of Book 2.'),
    ('p', 'This is the project the whole course has been building towards. Working in groups of '
          'four, take one real product — something your own company buys or sells — and run it '
          'through the entire cycle, producing one document at each stage. Nothing has to be '
          'long. A quotation is five lines. A clearance update is six.'),
    ('p', 'Share the roles so that everybody writes at least two documents. One person is the '
          'import desk and writes the enquiry and the purchase order. One is finance and builds '
          'the landed cost and the payment instruction. One is logistics and writes the '
          'document set and the clearance update. One is sales and writes the quotation and the '
          'reminder. Then everybody contributes to the final report.'),
    ('p', 'Two rules make the project worth doing. First, use real numbers. Invent a price if '
          'you must, but then carry it all the way through: the landed cost must come from the '
          'unit price you wrote earlier, and the selling price must come from the landed cost. '
          'A project where the numbers do not join up teaches nothing. Second, when you reach '
          'stage eight, include one thing that went wrong, and write the apology for it. Every '
          'real cycle has one.'),
    ('p', 'At the end, present it in ten minutes: five figures and one proposal, exactly as '
          'Karim and Rami did. Your classmates ask the two questions Mr. Adnan asked — which '
          'of these did you cause, and who owns it? If you can answer both in English, you have '
          'finished this book.'),
    ('fig', F.dos_donts('The project: do’s and don’ts',
                        ['carry one set of numbers all the way',
                         'write short documents',
                         'include one thing that went wrong',
                         'finish with five figures and a proposal'],
                        ['invent a new price at each stage',
                         'write long documents nobody reads',
                         'pretend the cycle was perfect',
                         'end with a list instead of an argument']),
     'A project that joins up is worth ten that do not.'),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What does the project ask each group to do?',
        'How are the roles shared, and how many documents does each person write?',
        'What is the first rule about numbers, and why does it matter?',
        'What must you include at stage eight?',
        'What two questions will your classmates ask at the end?',
    ]),
    ('ex', 'B. Listen and complete. Mr. Tarek explains the project. Write the missing word.'),
    ('items', [
        'Mr. Tarek: Take one real ____________ and run it through the whole cycle.',
        'Mr. Tarek: The landed cost must come from the ____________ price you wrote earlier.',
        'Mr. Tarek: Include one thing that went ____________.',
        'Mr. Tarek: Finish with five figures and one ____________.',
    ]),
    ('ex', 'C. Practice. In your group, choose your product now and write the first document — '
           'the enquiry — in ten minutes. Then swap with another group and mark it against the '
           'Unit 2 checklist.'),
    ('ex', 'D. Which unit does each document come from?'),
    ('items', [
        'a landed cost build-up → Unit ____________',
        'a bill of lading check → Unit ____________',
        'a goods-received note → Unit ____________',
        'a payment reminder → Unit ____________',
    ]),
]

# ============================================================ PART 8
B += [
    ('bar', 'Part 8  ·  Consolidation', 'TRADE'),
    ('h3', 'Who owns it?'),
    ('fig', F.split_panel('What the second year was decided on',
                          'THE YEAR REPORTED',
                          ['Imports 11 → 19',
                           'Sales +22%, peak in March',
                           'Overdue 9% → 5%',
                           'Three of five changes were ours'],
                          'THE YEAR PROPOSED',
                          ['406 recorded requests for bar',
                           'Trial of 200 t, existing shops',
                           'Review in six months',
                           'Ms. Maya owns it']),
     'A page of figures and a page of evidence, and one name.'),
    ('p', 'Mr. Adnan approves the trial in about forty seconds, which surprises nobody who has '
          'watched him for a year. The file answered every question before he asked it — which '
          'was the lesson of Unit Four, learned in November and used in October.'),
    ('p', 'Then he does the thing that makes it real. He does not say “go ahead”. He says '
          '“Maya, two hundred tonnes, review on the fifteenth of June, and you report it — not '
          'Rami, not Lina, you.” Ms. Maya, who has worked at Alten IL for six years and has '
          'never spoken at a board review, writes the date on the back of her hand.'),
    ('p', 'Afterwards Karim and Rami walk down to the yard, past the painted line and the red '
          'tags, past the handover folder hanging by the gate. Rami says the thing he has been '
          'thinking all morning. “A year ago we didn’t know what the depot held. Today we know '
          'what four hundred and six people wanted and couldn’t have.”'),
    ('p', '“That is the whole year,” says Karim. “We did not get cleverer. We started writing '
          'things down.”'),
    ('p', 'In the shop on the Rural Damascus road, somebody will ask for five-millimetre bar on '
          'Monday morning, and for the first time in two years the answer will not be no. It '
          'will be “not yet — but in March.” Which is, as everybody in this book has learned by '
          'now, a completely different sentence.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done.)'),
    ('items0', [
        'How long does Mr. Adnan take to approve the trial, and why so fast?   (about forty seconds — the file answered every question before he asked it)',
        'What does he say instead of “go ahead”?',
        'Why is it significant that Ms. Maya will report it?',
        'What three things do Karim and Rami walk past in the yard?',
        'What does Rami say has changed in a year?',
        'What will the answer in the shop be on Monday, and why does it matter?',
    ]),
    ('ex', 'B. Complete each sentence with ONE word from the text. (0 is done for you.)'),
    ('items0', [
        'Mr. Adnan approves the trial in about forty seconds.',
        'The ____________ answered every question before he asked it.',
        'The review is on the fifteenth of ____________.',
        'Ms. Maya writes the date on the back of her ____________.',
        'Karim says they did not get cleverer — they started ____________ things down.',
        'The answer on Monday will be “not yet — but in ____________”.',
    ]),
    ('ex', 'C. Discuss. Talk in pairs.'),
    ('items', [
        'Why does Mr. Adnan insist that Ms. Maya reports it herself?',
        'Do you agree that “we started writing things down” is the whole year?',
    ]),
    ('ex', 'D. Find a word from the text that means: (0 is done for you.)'),
    ('items0', [
        'to say officially that something can happen → (to approve it)',
        'a small first order to test an idea → a t____________',
        'the paper that tells the next person what is happening → a h____________ folder',
        'the person responsible for something → the o____________',
    ]),
]

# ============================================================ PART 9
B += [
    ('bar', 'Part 9  ·  Case Studies and Decisions', 'TRADE'),
    ('fig', F.dos_donts('Reporting and proposing: do’s and don’ts',
                        ['give five figures, not fifty',
                         'say which ones you caused',
                         'bring evidence, not opinions',
                         'name an owner and a review date'],
                        ['read the whole spreadsheet aloud',
                         'take credit for a rising market',
                         'propose on a feeling',
                         'leave the owner as “we”']),
     'The shortest report in the room is usually the best one.'),
    ('h3', 'Case 1 — The figure that flatters you  (strand A · the report)'),
    ('p', 'Your sales rose eleven per cent. You then learn that the whole market rose eighteen. '
          'Your manager has already congratulated you in front of the board, and the figure is '
          'in the pack.'),
    ('p', 'Choose the best action and say why.'),
    ('items', [
        '(  )  Say nothing. The figure is true.',
        '(  )  Add one line to the pack showing the market figure beside yours, and say it '
        'yourself before somebody else does.',
        '(  )  Tell your manager privately after the meeting.',
        '(  )  Leave it and work harder next year.',
    ]),
    ('p', 'Write one sentence that reports both figures honestly.'),
    ('lines', 2),
    ('h3', 'Case 2 — A proposal with no number  (strand B · the proposal)'),
    ('p', 'A colleague proposes opening a shop in a new town. His argument is that “everybody '
          'knows there is demand there” and that a competitor opened one last year. He has no '
          'figures at all, and he is well liked.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What is wrong with “everybody knows”, and with the competitor argument?',
        'What is the smallest piece of evidence that would make it a real proposal?',
        'Write one sentence asking for evidence without attacking the idea.',
    ]),
    ('h3', 'Case 3 — Two good proposals, one budget  (where the strands meet)'),
    ('p', 'You can fund the bar trial or a fourth shop, not both. The bar trial has four '
          'hundred and six recorded requests and an owner. The fourth shop has a better '
          'long-term return but no evidence yet, and the person proposing it is more senior '
          'than you.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'Which would you fund first, and what is your single strongest reason?',
        'How could you keep the second idea alive without funding it this year?',
        'Write one sentence recommending one and protecting the other.',
    ]),
]

# ============================================================ PART 10
B += [
    ('bar', 'Part 10  ·  Review and Can-Do (course review)', 'TRADE'),
    ('ex', 'A. Vocabulary. Complete the sentence with a word from the course.'),
    ('items', [
        'A letter asking a supplier for information is an ____________.',
        'What the goods cost in our own depot is the ____________ ____________.',
        'The paper proving goods were put on board is the ____________ ____________ '
        '____________.',
        'The level at which we order more is the ____________ ____________.',
        'The real reason behind the first one is the ____________ ____________.',
    ]),
    ('ex', 'B. Grammar. Complete with the correct form.'),
    ('items', [
        'We ____________ (place) nineteen orders so far this year.',
        'The containers ____________ (clear) by Komosh every time.',
        'The truck ____________ (wait) when the papers arrived.',
        'If we ____________ (order) 2,000 tonnes, they ____________ (give) us seven per cent.',
        'You ____________ (not) deduct a claim from a payment.',
        'Although sales ____________ (rise), cement ____________ (be) still tight.',
    ]),
    ('ex', 'C. Reading. Read the short text and answer.'),
    ('p', 'Imports rose from eleven orders to nineteen and sales grew by twenty-two per cent, '
          'with the highest month in March. Overdue money fell from nine per cent of sales to '
          'five, and stock cover on steel dropped from four months to seven weeks. The margin '
          'held steady. Three of the five changes were caused by the company itself; the other '
          'two followed the market.'),
    ('items', [
        'What happened to imports, in figures?',
        'Which month was the highest for sales?',
        'How many of the five changes did the company cause?',
    ]),
    ('ex', 'D. Listening. Listen and answer. (Teacher reads.)'),
    ('p', '[Teacher reads] “Four hundred and six people asked us for five-millimetre bar over '
          'three months, and sixty-one asked for eight millimetre. We told all of them no. That '
          'is not a feeling — that is four hundred and six people. I propose a trial of two '
          'hundred tonnes through our existing shops.”'),
    ('items', [
        'How many people asked for five-millimetre bar, and over what period?',
        'What were they all told?',
        'What exactly is proposed?',
    ]),
    ('ex', 'E. Speaking. In groups of four, run the review: one presents five figures, one '
           'proposes, one questions, one decides and asks “who owns it?”'),
    ('ex', 'F. Writing. Write two sentences about your own year: one with the present perfect '
           'and “so far”, and one with “going to”.'),
    ('nlines', 2),
    ('ex', 'G. Error correction. Find and correct one mistake in each sentence.'),
    ('items', [
        'We have placed eleven orders last year. → ____________',
        'The goods was cleared by Komosh. → ____________',
        'If we will order 2,000 t, they give 7%. → ____________',
        'Although sales rose, but cement was tight. → ____________',
        'He said me he needed 200 tonnes. → ____________',
    ]),
    ('ex', 'H. Match the unit (1–5) to its grammar (a–e).'),
    ('items', [
        'Unit 1  ____   a. the passive',
        'Unit 3  ____   b. reported speech',
        'Unit 5  ____   c. present perfect vs past simple',
        'Unit 7  ____   d. should, could, may, might',
        'Unit 8  ____   e. first conditional and unless',
    ]),
    ('ex', 'I. Put the trade cycle in order (1–6).'),
    ('items', [
        '(  )  clear it at customs',
        '(  )  find and check a supplier',
        '(  )  collect the money',
        '(  )  agree the price',
        '(  )  sell it to a customer',
        '(  )  place the order and pay the deposit',
    ]),
    ('ex', 'Can-Do check. Tick what you can do.'),
    ('check', [
        'I can describe figures going up and down.',
        'I can present a short report.',
        'I can argue for a new supplier, line or branch.',
        'I can write a one-page proposal.',
    ]),
]

# ============================================================ PART 11
B += [
    ('bar', 'Part 11  ·  Foundations for Further Study', 'TRADE'),
    ('h3', 'Concept Spotlight: Writing it down is the whole trick'),
    ('fig', F.route_strip('What actually changed in a year', [
        ('doc', 'A check-list'), ('scale', 'A price build-up'),
        ('shelf', 'A reorder level'), ('shop', 'A lost-sales sheet'),
        ('tick', 'A name on each one'),
    ]), 'Five sheets of paper, and not one clever idea among them.'),
    ('p', 'Look back at the year in this book and try to find the clever part. There isn’t one. '
          'Nobody invented a product, outsmarted a competitor or had an idea at three in the '
          'morning. What happened was duller and far more powerful: things that lived in '
          'people’s heads were written down, and each one was given a name.'),
    ('p', 'The supplier rules were in Mr. Tarek’s head, so Unit Two wrote them as a check-list. '
          'The real cost of a tonne was in Lina’s head, so Unit Three wrote it as a build-up. '
          'The reject corner was in Ms. Dana’s head — until she took a week’s leave, and twelve '
          'tonnes went to Homs. And the demand for steel bar was in four hundred and six '
          'separate customers’ heads, where it was completely useless to anybody, until '
          'somebody put a sheet of paper next to a till.'),
    ('p', 'This is why learning English for your work is not really about English. It is about '
          'the same thing. A fact inside your head helps only you, and only while you are in '
          'the room. The moment you can write it in a language your supplier, your bank and '
          'your customer all read, it becomes something the whole business can use — and it '
          'keeps working when you are on leave, when you change jobs, and when the people who '
          'remember the story have all gone.'),
    ('p', 'There is a fair objection to all this. Writing things down can become its own '
          'disease: forms that nobody reads, reports that take a week to produce, procedures '
          'thicker than the thing they describe. That is real, and the test is the same one '
          'this book has used throughout. Does anybody act on it? The lost-sales sheet was two '
          'columns, and it moved a hundred thousand dollars. A fifty-page quarterly review that '
          'changes nothing is not thoroughness; it is decoration, as Mr. Tarek would say.'),
    ('p', 'So as you close this book, keep three habits rather than three hundred words. Write '
          'down the thing only you know. Put a number on it instead of an adjective. And put a '
          'name beside it, preferably your own. Everything else in these ten units — the '
          'enquiries, the conditionals, the passives, the reported speech — is just the '
          'machinery for doing those three things in a language the rest of the world can '
          'read.'),
    ('ex', 'A. Understanding check. Answer in your own words.'),
    ('items', [
        'What does the writer say was NOT the reason for the year’s improvements?',
        'Give two examples of knowledge that moved from a head onto paper.',
        'Why is learning English for work “not really about English”?',
        'What is the fair objection, and what is the test the writer gives?',
    ]),
    ('ex', 'B. Apply it. Do this task with a partner.'),
    ('p', 'Name one thing that exists only in your head at work. Write it down now, in English, '
          'in no more than four lines, with one number and one name. Then give it to your '
          'partner and ask: could you act on this if I were not here?'),
    ('ex', 'C. Micro-writing (optional).'),
    ('p', 'Write a few sentences (60–80 words) about your own year at work. Use the present '
          'perfect, one figure with “rose” or “fell”, and one sentence beginning “Next year we '
          'are going to…”.'),
]

TERMS = [
    ('rise / rose', 'to go up'),
    ('fall / fell', 'to go down'),
    ('grow / grew', 'to get bigger'),
    ('drop', 'to go down, often quickly'),
    ('increase', 'to go up, or the amount of the rise'),
    ('decrease', 'to go down, or the amount of the fall'),
    ('by', 'the size of a change (rose by 22%)'),
    ('from … to …', 'the start and end of a change'),
    ('peak', 'the highest point reached'),
    ('the highest', 'the biggest in a set'),
    ('the lowest', 'the smallest in a set'),
    ('steady', 'not changing much'),
    ('sharp', 'a large, fast change'),
    ('slight', 'a small change'),
    ('gradual', 'slow and even'),
    ('double', 'twice as much'),
    ('per cent', 'out of a hundred'),
    ('figure', 'a number in a report'),
    ('total', 'everything added together'),
    ('average', 'the usual amount'),
    ('forecast', 'what we expect to happen'),
    ('target', 'the number we want to reach'),
    ('actual', 'what really happened'),
    ('quarter', 'three months of the year'),
    ('year on year', 'compared with the same time last year'),
    ('summary', 'a short account of the main points'),
    ('proposal', 'a written suggestion to do something'),
    ('recommendation', 'what you advise doing'),
    ('business case', 'the argument for spending money'),
    ('evidence', 'facts that support an argument'),
    ('trial', 'a small first order to test an idea'),
    ('pilot', 'a small first version, to learn from'),
    ('risk', 'the chance that something goes wrong'),
    ('return', 'what you get back for what you spend'),
    ('owner', 'the person responsible for something'),
    ('review date', 'the day we decide whether to continue'),
]

KEY = [
    ('Warm-Up A', '1 Imports rose from 11 orders to 19; sales grew by 22% with the highest '
                  'month in March; overdue money fell from 9% to 5%; stock cover on steel fell '
                  'from four months to seven weeks; the margin held steady. 2 He says which '
                  'three of the five the company caused, and how. 3 406 people asked for 5 mm '
                  'bar and 61 for 8 mm, and all were told no. 4 A trial import of 200 tonnes of '
                  'bar, sold through the three existing shops, with a decision on a fourth shop '
                  'after six months. 5 “Who owns it?” — it is surprising because it is not '
                  'about the money.'),
    ('Warm-Up B', '1 T · 2 F · 3 T · 4 T · 5 F'),
    ('Warm-Up C', '1 fell / dropped · 2 steady · 3 trial'),
    ('Warm-Up D', 'Answers vary.'),
    ('P1 A', '0 f · 1 g · 2 a · 3 b · 4 c · 5 d · 6 e · 7 h'),
    ('P1 B', '1 rose by · 2 fell … to · 3 rose · 4 peak · 5 steady'),
    ('P1 C', '1 c · 2 a · 3 d · 4 b · 5 e'),
    ('P1 D', '1 fell · 2 overdue · 3 lowest · 4 freight · 5 invoice'),
    ('P1 E', '1 a · 2 a · 3 a · 4 a'),
    ('P1 F', 'Went up: rose, grew · Went down: fell, dropped · Did not change: held steady, '
             'remained flat'),
    ('P1 G', '1 b · 2 c · 3 a · 4 e · 5 d · 6 f'),
    ('P1 H', '1 rose · 2 by · 3 highest · 4 fell · 5 from · 6 steady'),
    ('P2 A', '1 placed · 2 are cleared · 3 was waiting · 4 are going to run / will run'),
    ('P2 B', '1 must · 2 mustn’t · 3 could · 4 might / may · 5 should'),
    ('P2 C', '1 If we order 200 tonnes, they will give us a better price. 2 Unless we check the '
             'certificate, customs will hold it. 3 Although sales rose, cement was still tight. '
             '4 We lost eleven days because of the closed port.'),
    ('P2 D', '1 who / that · 2 which / that (or nothing) · 3 which / that · 4 who / that'),
    ('P2 E', '1 The goods are cleared by Komosh. 2 Four containers were inspected. 3 The '
             'certificate was issued by the chamber. 4 Every goods-received note is signed by '
             'Ms. Dana.'),
    ('P2 F', '1 She said four hundred and six people had asked for bar. 2 He asked if / whether '
             'they could run a trial. 3 She said she would own the first six months. 4 She told '
             'them they didn’t stock it.'),
    ('P2 G', '1 The goods were cleared by Komosh. 2 If we order 2,000 t, they will give 7%. '
             '3 Although sales rose, cement was tight. 4 He told me he needed 200 tonnes.'),
    ('P2 H', 'Answers vary — one present perfect, one “going to”.'),
    ('P2 I', '1 rose · 2 fell … chased · 3 has · 4 are going to import / will import · '
             '5 works … will open'),
    ('P2 J', 'Answers vary — one sentence per unit, using that unit’s grammar.'),
    ('P3 D1 A', '1 Imports rose from eleven orders to nineteen; sales grew by twenty-two per '
                'cent, highest month March. 2 Overdue money fell from nine per cent to five; '
                'stock cover on steel fell from four months to seven weeks. 3 The margin, '
                'because it held steady after a year of moving rates. 4 Overdue money (chasing '
                'in week one), stock (reorder levels with names), and the margin (pricing from '
                'landed cost). 5 Because they grew with the market, so they will fall again if '
                'the market turns.'),
    ('P3 D1 B', '1 F · 2 T · 3 T · 4 F · 5 F'),
    ('P3 D1 C', '1 Sales grew by twenty-two per cent. 2 Stock cover dropped from four months to '
                'seven weeks, although cement is still tight. 3 If the market turns, they will '
                'fall again.'),
    ('P3 D2 A', '1 Four hundred and six requests for 5 mm bar and sixty-one for 8 mm, recorded '
                'in three shops over three months. 2 Three enquiries, three replies, two '
                'suppliers checked, a landed cost built and the price tested against the Homs '
                'yard. 3 A 200-tonne trial sold through the existing three shops; the fourth '
                'shop is deliberately left until after six months. 4 They would hold 200 tonnes '
                'of a product four hundred people asked for, and would have learned something '
                'cheaper than a container of a mistake.'),
    ('P3 D2 B', '1 C · 2 C · 3 B · 4 B'),
    ('P4 B', 'Answers vary — one figure and one reason from your own role.'),
    ('P5 A', '1 What happened, and why — including whether the company caused it. 2 Because the '
             'market rose twenty-five per cent, so the company lost ground while its numbers '
             'improved. 3 Because it was caused by the company and will still be true next '
             'year, when the market is worse. 4 The company believes it is growing because it '
             'is clever, and builds decisions on weather. 5 A feeling has a budget attached; an '
             'argument has evidence.'),
    ('P5 B', '1 B · 2 B · 3 B · 4 B · 5 B'),
    ('P5 C', '1 turn · 2 evidence · 3 ground · 4 opinion'),
    ('P5 D', '1 happened · 2 why · 3 caused · 4 performance · 5 evidence · 6 name'),
    ('P5 F', '1 F · 2 F · 3 NOT GIVEN · 4 T'),
    ('P6 A', '1 406 customers asked for 5 mm bar and 61 for 8 mm, recorded over three months. '
             '2 That bar sells more slowly than coil and they would hold stock they have not '
             'held before; limited by starting with 200 tonnes and using shops they already '
             'pay for. 3 Ms. Maya; the review is after six months.'),
    ('P6 B', 'Order: 2 (Dear Mr. Adnan,) · 3 (I propose that we import two hundred tonnes…) · '
             '4 (Over three months our shops recorded…) · 1 (The main risk is…) · 5 (Ms. Maya '
             'would own the trial.) · 6 (Best regards, Rami)'),
    ('P7 A', '1 Take one real product and run it through the whole cycle, producing one '
             'document at each stage. 2 Four roles — import desk, finance, logistics, sales — '
             'and everybody writes at least two documents. 3 Use real numbers and carry them '
             'all the way through; a project where the numbers do not join up teaches nothing. '
             '4 One thing that went wrong, and the apology for it. 5 Which of these did you '
             'cause, and who owns it?'),
    ('P7 B', '1 product · 2 unit · 3 wrong · 4 proposal'),
    ('P7 D', '1 Unit 3 · 2 Unit 5 · 3 Unit 6 · 4 Unit 8'),
    ('P8 A', '1 He says “Maya, two hundred tonnes, review on the fifteenth of June, and you '
             'report it.” 2 Because she has worked there six years and has never spoken at a '
             'board review — the owner reports it herself. 3 The painted line, the red tags, '
             'and the handover folder by the gate. 4 A year ago they did not know what the '
             'depot held; now they know what 406 people wanted and could not have. 5 “Not yet '
             '— but in March”, which is a completely different sentence from “no”.'),
    ('P8 B', '1 file · 2 June · 3 hand · 4 writing · 5 March'),
    ('P8 D', '1 trial · 2 handover · 3 owner'),
    ('P10 A', '1 enquiry · 2 landed cost · 3 bill of lading · 4 reorder level · 5 root cause'),
    ('P10 B', '1 have placed · 2 are cleared · 3 was waiting · 4 order … will give · '
              '5 mustn’t · 6 rose … was'),
    ('P10 C', '1 They rose from eleven orders to nineteen. 2 March. 3 Three of the five.'),
    ('P10 D', '1 406, over three months. 2 No — that the shops did not stock it. 3 A trial of '
              '200 tonnes through the existing shops.'),
    ('P10 G', '1 We placed eleven orders last year. 2 The goods were cleared by Komosh. '
              '3 If we order 2,000 t, they will give 7%. 4 Although sales rose, cement was '
              'tight. 5 He told me he needed 200 tonnes.'),
    ('P10 H', '1 c · 2 e · 3 a · 4 b · 5 d'),
    ('P10 I', '3 clear it at customs · 1 find and check a supplier · 6 collect the money · '
              '2 agree the price · 5 sell it to a customer · 4 place the order and pay the '
              'deposit'),
    ('P11 A', '1 That anybody was clever, invented a product or had a brilliant idea. '
              '2 (any two) the supplier rules became a check-list; the real cost of a tonne '
              'became a price build-up; the reject corner became a painted line and red tags; '
              'the demand for bar became a lost-sales sheet. 3 Because a fact inside your head '
              'helps only you, and only while you are in the room; written in a shared '
              'language it becomes something the whole business can use. 4 That writing things '
              'down can become forms nobody reads; the test is whether anybody acts on it.'),
]

UNIT = dict(
    n=10,
    title='Reporting the Year and Growing',
    grammar='review of Units 1–9 (no new forms) · the language of figures and trends',
    function='Trade · Finance · Logistics · Admin',
    candos=[
        'I can describe figures going up and down',
        'I can present a short report',
        'I can argue for a new supplier, line or branch',
        'I can write a one-page proposal',
    ],
    cando_line='You can report a year in five figures, and argue for the next one.',
    blocks=B,
    terms=TERMS,
    key=KEY,
    teaser=None,
)
