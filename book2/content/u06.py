# -*- coding: utf-8 -*-
"""Unit 6 — Goods In: Quality, Quantity and Stock.
Strand A: inspection against the supplier's specification, and the claim (Ms. Dana, Rami).
Strand B: the depot — counting, reorder levels, what moves where (Ms. Dana, Ms. Maya, Karim).
"""
import frames as F
from art import NAVY, BLUE, ORANGE, GREEN, GREEN_D, PURPLE, GREY

B = []

PEOPLE = [
    ('Ms. Dana', 'Depot · Quality', 'h', GREEN),
    ('Rami', 'Bashak · Imports', 'm', GREEN_D),
    ('Ms. Maya', 'Alten IL · Retail', 'w', ORANGE),
    ('Karim', 'Fin. Controller', 'm', GREY),
    ('Mr. Samir', 'Komosh · Freight', 'm', ORANGE),
    ('Mr. Delgado', 'Westgate Metals', 'm', NAVY),
]

# ============================================================ unit openers
B += [
    ('fig', F.process_strip('What happens when a truck reaches the gate', [
        'Check the seal', 'Count what is inside', 'Measure the grade',
        'Record what is wrong', 'Put it on the shelf',
    ]), 'Five minutes at the gate save five weeks of argument.'),
    ('fig', F.team_strip('The people in this unit', PEOPLE),
     'One side measures steel; the other side counts shelves.'),
]

# ============================================================ WARM UP
B += [
    ('bar', 'Warm Up', 'LOGISTICS'),
    ('p', 'Look at the pictures. Answer these questions before you read.'),
    ('items', [
        'Who checks goods when they arrive at your company?',
        'What do you do if a delivery is short?',
        'How do you know when it is time to order more?',
    ]),
    ('h3', 'Read'),
    ('p', 'Ms. Dana runs the depot which Chemco keeps outside Damascus. She has a rule that '
          'everybody there knows: nothing goes on a shelf until it has been counted and '
          'measured.'),
    ('p', 'Forty-eight containers arrive over three days. The packing list says twelve coils in '
          'each one. Forty-seven containers hold twelve. One holds eleven.'),
    ('p', 'Then there is the second problem, which is quieter and worse. Ms. Dana measures one '
          'coil from every fourth container, because that is the rule. Most measure 5 mm. But '
          'the coils which came out of containers 31 to 34 measure 4.8. The order says five '
          'millimetre, and the customer who is waiting for this steel is a builder who needs '
          'five.'),
    ('p', '“It is only two tenths,” says the driver, who wants to go home. “It is a different '
          'product,” says Ms. Dana. She photographs the gauge, the coil and the container '
          'number in one picture, writes the batch numbers on the goods-received note, and puts '
          'those forty tonnes in the corner of the yard where rejected stock goes.'),
    ('p', 'Rami raises a claim with Westgate the same day: one coil short, and forty tonnes '
          'below specification. He asks for a credit note for the missing coil and a '
          'replacement for the under-size steel.'),
    ('p', 'Meanwhile Karim is reading the stock count, and he finds something nobody ordered. '
          'The depot now holds 6,400 tonnes of steel, which is four months of sales. It holds '
          'eleven tonnes of cement, which is nine days. The shops which sell cement are '
          'emptying while the yard which holds steel is full. It is the same problem as last '
          'year, in a new month.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What is Ms. Dana’s rule?   (nothing goes on a shelf until it has been counted and measured)',
        'What is the first problem with the delivery?',
        'What is the second problem, and why is it worse?',
        'What does Ms. Dana do with the forty tonnes?',
        'What two things does Rami ask Westgate for?',
        'What does Karim find in the stock count?',
    ]),
    ('ex', 'B. True or False? Write T or F. (0 is done for you.)'),
    ('items0', [
        'Every container held twelve coils.   (F)',
        'Ms. Dana measures one coil from every fourth container.   ____',
        'The coils from containers 31 to 34 measure 5 mm.   ____',
        'The driver thinks the difference matters.   ____',
        'Rami asks for a credit note and a replacement.   ____',
        'The depot holds nine days of steel.   ____',
    ]),
    ('ex', 'C. Find the words. Find a word or phrase in the text that means: (0 is done for you.)'),
    ('items0', [
        'goods that do not meet the specification → (rejected stock)',
        'a delivery with less than the agreed quantity → a s____________ delivery',
        'a paper that gives money back for goods not received → a c____________ n____________',
        'the exact details the goods must meet → the s____________',
    ]),
    ('ex', 'D. Over to you. Answer about yourself.'),
    ('items', [
        'What does your company check when goods arrive?',
        'Where do you put goods which are not accepted?',
        'How many weeks of stock does your company normally hold?',
    ]),
]

# ============================================================ PART 1
B += [
    ('bar', 'Part 1  ·  Vocabulary and Terminology', 'LOGISTICS'),
    ('h3', 'The goods-received note'),
    ('fig', F.doc_card('The goods-received note', 'GRN-2290 · PO-4417',
                       [('Delivered', '48 containers, 3 days'),
                        ('Expected', '576 coils · 1,200 t'),
                        ('Received', '575 coils · 1,199 t'),
                        ('Short', '1 coil, container 17'),
                        ('Below spec', '40 t at 4.8 mm (C31–C34)'),
                        ('Damaged', '1 container door'),
                        ('Accepted', '1,159 t'),
                        ('Signed', 'Ms. Dana')], accent=GREEN_D),
     'What was expected, what came, and the difference — in writing.'),
    ('ex', 'A. Match each word (1–7) with its meaning (a–h). There is one you do not need. '
           '(0 is done for you.)'),
    ('items0', [
        'shortage  (b)',
        'defect  ____   a. a paper giving money back',
        'specification  ____   b. less than the agreed quantity',
        'tolerance  ____   c. goods sent to replace bad ones',
        'credit note  ____   d. the exact details goods must meet',
        'replacement  ____   e. something wrong with the goods',
        'batch  ____   f. how much difference is allowed',
        'reorder level  ____   g. a group of goods made at one time',
        '          h. the stock level at which we order more',
    ]),
    ('ex', 'B. Complete the sentences with the words in the word bank.'),
    ('bank', 'Word bank:', ['shortage', 'specification', 'tolerance', 'credit note',
                            'replacement', 'reorder level']),
    ('items', [
        'There is a ____________ of one coil in container seventeen.',
        'The ____________ says five millimetre, and this steel is 4.8.',
        'A ____________ of 0.1 mm is normal; 0.2 is not.',
        'We asked Westgate for a ____________ for the missing coil.',
        'We also asked for a ____________ for the forty tonnes.',
        'When stock falls to the ____________, we place a new order.',
    ]),
    ('h3', 'Checking what arrived'),
    ('fig', F.icon_row('Four checks, in this order', 'AT THE GATE', [
        ('stamp', 'seal'), ('scale', 'count'), ('doc', 'grade'), ('tick', 'accept'),
    ]), 'Each check can stop the one after it.'),
    ('ex', 'C. Match the check (1–5) with what it finds (a–e).'),
    ('items', [
        'the seal number  ____   a. whether the quantity is right',
        'the count  ____   b. whether anyone opened it on the way',
        'the gauge  ____   c. whether the goods are damaged',
        'a visual check  ____   d. whether the grade is right',
        'the batch number  ____   e. which production run it came from',
    ]),
    ('h3', 'Stock in the depot'),
    ('fig', F.label_panel('Words for what is on the shelf', [
        ('stock level', 'how much we have now'),
        ('reorder level', 'when to order more'),
        ('minimum stock', 'never go below this'),
        ('fast-moving', 'sells quickly'),
        ('slow-moving', 'sits on the shelf'),
        ('weeks of cover', 'how long the stock will last'),
    ], cols=3), 'Six words that tell you whether the depot is healthy.'),
    ('ex', 'D. Odd one out. Which word is different? Circle it.'),
    ('items', [
        'shortage · surplus · defect · invoice',
        'accept · reject · approve · deliver',
        'batch · lot · grade · pallet',
        'who · which · where · when',
        'fast-moving · slow-moving · minimum stock · demurrage',
    ]),
    ('ex', 'E. Choose the best answer.'),
    ('items', [
        'How much difference is allowed is the…   (a) tolerance   (b) specification',
        'Goods sent to replace bad ones are a…   (a) credit note   (b) replacement',
        'The level at which we order more is the…   (a) minimum stock   (b) reorder level',
        'Steel that sits on the shelf for months is…   (a) fast-moving   (b) slow-moving',
    ]),
    ('ex', 'F. Classify. Write each word in the correct column.'),
    ('bank', 'Words:', ['shortage', 'reorder level', 'defect', 'weeks of cover',
                        'wrong grade', 'minimum stock']),
    ('grid', ['A problem with the delivery', 'A stock measure', 'Either'], 3),
    ('ex', 'G. Match the two halves (1–6 with a–f).'),
    ('items', [
        'a goods-received  ____   a. note',
        'a credit  ____   b. level',
        'a reorder  ____   c. note',
        'below  ____   d. number',
        'a batch  ____   e. specification',
        'weeks of  ____   f. cover',
    ]),
    ('ex', 'H. Complete the paragraph with the words in the box.'),
    ('bank', 'Box:', ['claim', 'cover', 'rejected', 'short', 'specification', 'which']),
    ('p', 'One container was (1)____________ by one coil. Forty tonnes were below '
          '(2)____________, so they were (3)____________ and kept in the corner of the yard. '
          'Rami raised a (4)____________ the same day. The steel (5)____________ was accepted '
          'is now four months of (6)____________.'),
]

# ============================================================ PART 2
B += [
    ('bar', 'Part 2  ·  Grammar — relative clauses: who · which · that · where', 'TRADE'),
    ('fig', F.grammar_card('who for people, which for things', [
        ('people', 'who', 'the driver who wants to go home'),
        ('things', 'which', 'the steel which we ordered'),
        ('both', 'that', 'the customer that is waiting'),
    ], 'that can replace who or which in a defining clause.'),
     'One sentence instead of two.'),
    ('p', 'A relative clause gives more information about a noun, and it joins two short '
          'sentences into one. We use WHO for people, WHICH for things, and THAT for either. '
          'The builder who ordered the steel needs 5 mm. The coils which came from container 31 '
          'measure 4.8.'),
    ('fig', F.grammar_card('where for places', [
        ('a place', 'where', 'the corner where rejected stock goes'),
        ('not “which”', 'where', 'the depot where we keep the steel'),
        ('with a place word', 'where', 'the shelf where it is stored'),
    ], 'Use where when the noun is a place and you would say “in it” or “at it”.'),
     'The one that learners forget.'),
    ('p', 'We use WHERE after a place. The yard where we keep rejected stock. The shop where the '
          'cement sold out. Be careful: use which when the place is the subject or object — '
          'the depot which Chemco keeps — and where when you would otherwise say in it or at it.'),
    ('fig', F.grammar_card('leaving the word out', [
        ('subject — keep it', 'who / which', 'the driver who wants to go home'),
        ('object — you may drop it', '(which)', 'the steel (which) we ordered'),
        ('never drop “where”', 'where', 'the yard where it is kept'),
    ], 'If another subject follows at once (we, he, the customer), you can leave it out.'),
     'A small rule that makes English sound natural.'),
    ('fig', F.split_panel('Two strands, the same grammar',
                          'ABROAD · describing the problem',
                          ['the coils which measure 4.8 mm',
                           'the container that was one coil short',
                           'the supplier who sent them',
                           'the batch numbers which we recorded'],
                          'IN SYRIA · describing the stock',
                          ['the steel which is four months of cover',
                           'the shops that sell cement',
                           'the yard where rejected stock goes',
                           'the customer who is waiting']),
     'The same four words, in two different conversations.'),
    ('watch', 'Do not use two subjects: say the steel which we ordered, not the steel which we '
              'ordered it. And after a place, use where — the depot where we keep it — not '
              'the depot which we keep it.'),
    ('h3', 'Form'),
    ('p', 'noun + who / which / that + verb     ·     place + where + subject + verb     ·     '
          'object clause: the thing (which) we ordered'),
    ('ex', 'A. Complete with WHO, WHICH or WHERE. (0 is done for you.)'),
    ('items0', [
        'The driver who delivered it wanted to go home.',
        'The coils ____________ came from container 31 measure 4.8 mm.',
        'This is the yard ____________ we keep rejected stock.',
        'The builder ____________ ordered this steel needs 5 mm.',
        'The depot ____________ Chemco keeps is outside Damascus.',
        'That is the shelf ____________ the cement is stored.',
    ]),
    ('ex', 'B. Join the two sentences with a relative pronoun.'),
    ('items', [
        'This is the container. It was one coil short. → ____________',
        'She is the supervisor. She signed the note. → ____________',
        'That is the corner. We put rejected stock there. → ____________',
        'These are the batch numbers. We recorded them. → ____________',
    ]),
    ('ex', 'C. Where can you leave the pronoun out? Write YES or NO.'),
    ('items', [
        'the steel which we ordered   ____',
        'the driver who wants to go home   ____',
        'the claim which Rami raised   ____',
        'the yard where we keep it   ____',
    ]),
    ('ex', 'D. Choose the correct word.'),
    ('items', [
        'The customer (who / which) is waiting needs 5 mm.',
        'The coils (who / which) measure 4.8 were rejected.',
        'The depot (where / which) we keep the steel is full.',
        'The shops (that / where) sell cement are empty.',
    ]),
    ('ex', 'E. Complete the definition with a relative clause.'),
    ('items', [
        'A reorder level is the point ____________ we order more.',
        'A credit note is a paper ____________ gives money back.',
        'A quality supervisor is the person ____________ checks the goods.',
        'A batch number is a number ____________ shows the production run.',
    ]),
    ('ex', 'F. Make one sentence. Use who, which, that or where.'),
    ('items', [
        'forty tonnes / below specification / were rejected → ____________',
        'the yard / rejected stock / is kept → ____________',
        'the supplier / sent the short container → ____________',
        'the photograph / Ms. Dana took → ____________',
    ]),
    ('ex', 'G. Find and correct the mistake in each sentence. (0 is done for you.)'),
    ('items0', [
        'The steel which we ordered it is 5 mm. → (The steel which we ordered is 5 mm.)',
        'The driver which delivered it went home. → ____________',
        'This is the depot which we keep the steel. → ____________',
        'The coils who measure 4.8 were rejected. → ____________',
        'The person which signed the note is Ms. Dana. → ____________',
    ]),
    ('ex', 'H. About you. Write two sentences about your work: one with “who” and one with '
           '“where”.'),
    ('nlines', 2),
    ('ex', 'I. Complete with who, which, that or where.'),
    ('items', [
        'The coils ____________ came out of containers 31 to 34 are 4.8 mm.',
        'The corner ____________ we put rejected stock is at the back.',
        'The builder ____________ is waiting will not accept 4.8.',
        'The note ____________ Ms. Dana signed lists every shortage.',
        'The shop ____________ sold out twice is in Rural Damascus.',
    ]),
    ('ex', 'J. Define these words. Use a relative clause.'),
    ('items', [
        'a consignee → “a company ____________”',
        'a depot → “a building ____________”',
        'a claim → “a letter ____________”',
        'a quality supervisor → “a person ____________”',
    ]),
]

# ============================================================ PART 3
B += [
    ('bar', 'Part 3  ·  Listening and Dialogue', 'LOGISTICS'),
    ('fig', F.dialogue_scene(('h', GREEN), ['Forty tonnes measure 4.8.', 'The order says five.'],
                             ('m', GREEN_D), ['Then it goes in the corner.', 'I’ll raise it today.']),
     'Strand A · the measurement that starts a claim.'),
    ('h3', 'Dialogue 1 — Below specification (the depot, calling the import desk)'),
    ('p', 'Listen and read. (Your teacher will read the dialogue, or play the audio.)'),
    ('dlg', [
        ('Ms. Dana', 'Rami, two things. Container seventeen is one coil short — eleven, not '
                     'twelve. And I have a worse one.'),
        ('Rami', 'Go on.'),
        ('Ms. Dana', 'The coils which came out of containers 31 to 34 measure 4.8 millimetre. '
                     'The order says five.'),
        ('Rami', 'Four containers. That is about forty tonnes.'),
        ('Ms. Dana', 'Forty exactly. The driver who brought them told me it was only two '
                     'tenths.'),
        ('Rami', 'It is two tenths to him. To the builder who is waiting, it is a different '
                 'product.'),
        ('Ms. Dana', 'That is what I said. I have photographed the gauge, the coil and the '
                     'container number in one picture, and I have written the batch numbers on '
                     'the goods-received note.'),
        ('Rami', 'Good. Have you put it with the accepted stock?'),
        ('Ms. Dana', 'No. It is in the corner where rejected stock goes. If it touches the good '
                     'steel, somebody will sell it by Friday.'),
        ('Rami', 'Then I will raise the claim today: a credit note for the coil, and a '
                 'replacement for the forty tonnes.'),
        ('Ms. Dana', 'Ask for the replacement first. Money does not build anything.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What are the two problems Ms. Dana reports?   (one coil short, and forty tonnes below specification)',
        'Which containers hold the under-size coils, and how much steel is that?',
        'What did the driver say, and how does Rami answer it?',
        'What three things did Ms. Dana photograph, and in how many pictures?',
        'Why does she keep the steel in the corner?',
        'Why does she want the replacement before the money?',
    ]),
    ('ex', 'B. True or False? Write T or F.'),
    ('items', [
        'Container seventeen held twelve coils.   ____',
        'Forty tonnes measure 4.8 millimetre.   ____',
        'The driver thought the difference was serious.   ____',
        'The rejected steel is stored with the accepted steel.   ____',
        'Ms. Dana would rather have a replacement than a credit note.   ____',
    ]),
    ('ex', 'C. Language focus. Find in the dialogue: (0 is done for you.)'),
    ('items0', [
        'a relative clause with “which” → (the coils which came out of containers 31 to 34)',
        'a relative clause with “who” → ____________',
        'a relative clause with “where” → ____________',
        'a first conditional about the rejected steel → ____________',
    ]),
    ('fig', F.half_scene('w', ORANGE, ['Nine days of cement,', 'and four months of steel.']),
     'Strand B · the shelf tells a different story.'),
    ('h3', 'Dialogue 2 — The stock count (inside Syria)'),
    ('dlg', [
        ('Karim', 'Dana, I have your count. Six thousand four hundred tonnes of steel.'),
        ('Ms. Dana', 'That is what is on the shelves, yes.'),
        ('Karim', 'At the rate which we sold last quarter, that is four months.'),
        ('Ms. Dana', 'And the cement is eleven tonnes, which is nine days.'),
        ('Karim', 'Nine days. Maya’s shops will be empty again before the new order lands.'),
        ('Ms. Dana', 'Then give me a reorder level for cement and I will watch it. At the '
                     'moment nobody owns that number.'),
        ('Karim', 'What would you set?'),
        ('Ms. Dana', 'Six weeks of cover. When we fall to six weeks, somebody orders — not '
                     'when the shop telephones.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'How much steel is in the depot, and how many months is that?',
        'How much cement is there, and how long will it last?',
        'What does Ms. Dana ask Karim for, and why?',
        'What reorder level does she suggest, and what should trigger an order?',
    ]),
    ('ex', 'B. Listen again and choose the best answer (A–D).'),
    ('items', [
        'The depot holds … tonnes of steel.   A) 640  B) 1,200  C) 6,400  D) 11,000',
        'The steel is about … of sales.   A) four weeks  B) four months  C) nine days  D) a year',
        'The cement will last about…   A) nine days  B) nine weeks  C) four months  D) six weeks',
        'Ms. Dana suggests a reorder level of … of cover.   A) nine days  B) three weeks  '
        'C) six weeks  D) four months',
    ]),
]

# ============================================================ PART 4
B += [
    ('bar', 'Part 4  ·  Speaking and Your Role', 'TRADE'),
    ('fig', F.label_panel('Phrases for reporting what arrived', [
        ('We received … instead of …', 'reporting a shortage'),
        ('The goods which … measure …', 'reporting a grade'),
        ('It is being held in …', 'saying where it is'),
        ('We would like a replacement.', 'asking for the fix'),
        ('I have photographed …', 'giving your evidence'),
        ('When we fall to …, we order.', 'explaining a reorder level'),
    ], cols=3), 'A clear report is a short one with a number in it.'),
    ('ex', 'A. Role-play: reporting a delivery. Student A is at the depot and reports a '
           'shortage and a grade problem. Student B is the import desk. Then change roles.'),
    ('items', [
        'A: Report the shortage, with the container number.',
        'B: Ask how many tonnes the second problem is.',
        'A: Describe the goods with a relative clause (“the coils which…”).',
        'B: Ask what evidence has been taken.',
        'A: Say where the goods are being kept, and why.',
        'B: Say what you will claim, and when.',
    ]),
    ('fig', F.label_panel('Every job describes goods differently', [
        ('Imports', 'the supplier who sent it'),
        ('Freight', 'the container which was opened'),
        ('Depot', 'the yard where we keep rejects'),
        ('Quality', 'the coils which measure 4.8'),
        ('Sales', 'the customer who is waiting'),
        ('Finance', 'the credit note which we claimed'),
    ], cols=3), 'Six roles, one grammar.'),
    ('ex', 'B. Your Role. Describe one thing at work using a relative clause. '
           '(Choose your real role.)'),
    ('items', [
        '[Trade] Import Manager: “The supplier who sent the short container has replied.”',
        '[Logistics] Freight: “The container which customs opened has a new seal.”',
        '[Trade] Depot: “The yard where we keep rejected stock is at the back.”',
        '[Trade] Quality: “The coils which measure 4.8 were not accepted.”',
        '[Trade] Sales: “The customer who is waiting needs five millimetre.”',
        '[Finance] Accountant: “The credit note which we claimed has not arrived.”',
    ]),
    ('ex', 'C. Ask your partner. Walk around and ask three people.'),
    ('items', [
        'Who is the person who checks goods in your company?',
        'What is the thing which goes wrong most often with your deliveries?',
        'Where is the place where you keep goods you cannot use?',
    ]),
    ('ex', 'D. Discuss. Ask and answer.'),
    ('items', [
        'Is 4.8 instead of 5.0 a real problem, or is the depot being difficult?',
        'Who should own the reorder level — the depot, sales, or finance?',
    ]),
]

# ============================================================ PART 5
B += [
    ('bar', 'Part 5  ·  Extended Reading', 'TRADE'),
    ('h3', 'The shelf that tells the truth'),
    ('fig', F.route_strip('What a stock level is really measuring', [
        ('money', 'Cash spent'), ('shelf', 'Stock held'),
        ('clock', 'Weeks of cover'), ('shop', 'Sales'), ('tick', 'Cash back'),
    ]), 'Stock is money, stopped halfway through a circle.'),
    ('p', 'A warehouse full of goods looks like success. It is not. Every tonne on a shelf is '
          'money the company has already spent and has not yet earned back. A full depot is a '
          'bank account turned into steel, and steel cannot pay a salary.'),
    ('p', 'This is why experienced companies do not measure stock in tonnes. They measure it in '
          'time. Six thousand four hundred tonnes means nothing by itself. Six thousand four '
          'hundred tonnes at last quarter’s rate of sale means four months, and four months is '
          'a sentence anybody can argue with. Eleven tonnes of cement is also meaningless, '
          'until you say nine days — and then everyone in the room sits up.'),
    ('p', 'Measuring in time also shows you which goods are quietly killing you. Fast-moving '
          'stock is not a problem even when there is a lot of it, because it will be money '
          'again soon. Slow-moving stock is dangerous even in small amounts, because it sits, '
          'and while it sits it costs storage, insurance, and the interest on the money that '
          'bought it. The worst stock of all is the stock nobody has looked at, because it is '
          'usually the stock that cannot be sold.'),
    ('p', 'The second idea is the reorder level, and it is beautifully simple. Instead of '
          'ordering when somebody complains, you decide in advance how low you will let the '
          'stock fall, and you order then. The level is not a guess. It is the rate of sale '
          'multiplied by the lead time, plus a little for safety. If a shop sells two tonnes of '
          'cement a week, and a new order takes six weeks to arrive, then the reorder level is '
          'twelve tonnes plus some safety — and the day the shelf shows thirteen, somebody '
          'orders.'),
    ('p', 'What makes this hard is not the arithmetic. It is ownership. In most companies the '
          'reorder level belongs to nobody. Sales assume the depot is watching. The depot '
          'assumes purchasing is watching. Purchasing waits for a request. And so the shelf '
          'empties, the shop telephones, an urgent order goes out at a bad price, and everybody '
          'agrees it was unlucky. It was not unlucky. It was unowned.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'Why is a full warehouse not success?   (every tonne is money already spent and not yet earned back)',
        'How do experienced companies measure stock, and why?',
        'Why is slow-moving stock dangerous even in small amounts?',
        'What is the worst stock of all, and why?',
        'How do you calculate a reorder level?',
        'What does the writer say is the real difficulty — and why is it not “unlucky”?',
    ]),
    ('ex', 'B. Choose the best answer (A–D).'),
    ('items', [
        'Stock on a shelf is…   A) profit  B) money already spent  C) a sale  D) free',
        'Experienced companies measure stock in…   A) tonnes  B) money  C) time  D) containers',
        'Slow-moving stock costs storage, insurance and…   A) duty  B) interest  C) freight  D) tax',
        'A reorder level is the rate of sale multiplied by the…   A) margin  B) lead time  '
        'C) tolerance  D) quantity',
        'The real problem with reorder levels is…   A) arithmetic  B) software  C) ownership  D) cost',
    ]),
    ('ex', 'C. Find a word or phrase in the text that means:'),
    ('items', [
        'how long the stock will last → weeks of c____________',
        'goods that sell quickly → f____________-moving',
        'the cost of borrowing money → i____________',
        'belonging to nobody → u____________',
    ]),
    ('ex', 'D. Complete the summary with ONE word in each gap.'),
    ('p', 'Stock is money the company has already (1)____________. Good companies measure it in '
          '(2)____________, not in tonnes. (3)____________-moving stock is dangerous even in '
          'small amounts. A reorder level is the rate of sale multiplied by the '
          '(4)____________ time, plus a little for (5)____________. The real difficulty is not '
          'the arithmetic but the (6)____________.'),
    ('ex', 'E. Discuss. Talk in pairs.'),
    ('items', [
        'How many weeks of cover does your company hold? Is that too much or too little?',
        'Who owns the reorder level where you work?',
    ]),
    ('ex', 'F. True or False? (about the reading). Write T, F or NOT GIVEN.'),
    ('items', [
        'A full warehouse means the company is doing well.   ____',
        'Fast-moving stock is less dangerous than slow-moving stock.   ____',
        'Most companies use software to set reorder levels.   ____',
        'A reorder level depends on the lead time.   ____',
    ]),
]

# ============================================================ PART 6
B += [
    ('bar', 'Part 6  ·  Writing (a real email)', 'ADMIN'),
    ('h3', 'Model — A claim for a shortage and a grade problem'),
    ('fig', F.doc_card('The shape of a claim', 'Claim',
                       [('1  The reference', 'order, GRN, date'),
                        ('2  What we expected', 'quantity and spec'),
                        ('3  What we received', 'the exact difference'),
                        ('4  The evidence', 'photographs, batch numbers'),
                        ('5  What we want', 'replacement or credit'),
                        ('6  By when', 'a date, politely')], accent=ORANGE),
     'A claim is a fact, a number and a request — not an argument.'),
    ('p', 'Subject: PO-4417 — shortage and material below specification. Dear Mr. Delgado, '
          'The consignment against PO-4417 was received at our depot between the 27th and the '
          '29th and checked against goods-received note GRN-2290. Two problems were found. '
          'First, container 17 held eleven coils instead of twelve, a shortage of one coil. '
          'Second, the coils which came out of containers 31 to 34 measure 4.8 mm, while the '
          'order specifies 5 mm. That is approximately forty tonnes. The batch numbers are '
          'listed on the attached note and photographs are attached as well. We would like a '
          'replacement for the forty tonnes and a credit note for the missing coil. The '
          'material is being held separately and has not been sold. Could you let us know by '
          'Thursday how you would like to proceed? Best regards, Rami Import Manager, Bashak Co.'),
    ('ex', 'A. Answer about the email. (0 is done for you.)'),
    ('items0', [
        'When was the consignment received?   (between the 27th and the 29th)',
        'What are the two problems, with their numbers?',
        'What evidence is attached?',
        'What exactly does Rami ask for, and by when?',
    ]),
    ('ex', 'B. Put the email in order (1–6).'),
    ('items', [
        '(  )  We would like a replacement and a credit note.',
        '(  )  Dear Mr. Delgado,',
        '(  )  The consignment was received between the 27th and the 29th.',
        '(  )  Container 17 held eleven coils instead of twelve.',
        '(  )  Could you let us know by Thursday how you would like to proceed?',
        '(  )  Best regards, Rami',
    ]),
    ('h3', 'Guided writing'),
    ('ex', 'C. Now you write. Write a claim (70–100 words) about a delivery that was short or '
           'wrong. Use at least two relative clauses, and give two numbers.'),
    ('p', 'Plan:  1) “Dear …,”   2) “The consignment against … was received on ….”   3) “We '
          'expected … and received ….”   4) “The goods which … measure / weigh ….”   5) “The '
          'photographs are attached.”   6) “We would like ….”   7) “Could you let us know by '
          '…?”   8) “Best regards, …”'),
    ('p', 'Sentence starters:  “Two problems were found.” · “The goods which came out of…” · '
          '“That is approximately…” · “We would like a replacement for…” · “The material is '
          'being held separately.”'),
    ('lines', 5),
    ('ex', 'D. Checklist. Tick each one when you have checked your claim.'),
    ('check', [
        'I gave the order number and the date.',
        'I said what we expected and what we received.',
        'I used a relative clause to say exactly which goods.',
        'I said what evidence I have.',
        'I asked for one clear thing, by a date.',
    ]),
]

# ============================================================ PART 7
B += [
    ('bar', 'Part 7  ·  Trade-Skills Track', 'TRADE'),
    ('h3', 'The stock card: reorder levels that somebody owns'),
    ('fig', F.doc_card('A stock card', 'Cement, 50 kg bags',
                       [('Sales rate', '2 tonnes / week'),
                        ('Lead time', '6 weeks'),
                        ('Safety stock', '2 weeks'),
                        ('Reorder level', '16 tonnes'),
                        ('Stock now', '11 tonnes'),
                        ('Status', 'BELOW — order today'),
                        ('Owner', 'Ms. Dana, depot')], accent=BLUE),
     'Seven lines, and the last one is the one that works.'),
    ('p', 'A stock card is not a record of the past. It is an instruction for the future. The '
          'first four lines calculate a number, and the last three say what to do about it and '
          'who does it.'),
    ('p', 'The arithmetic takes a minute. Multiply the rate of sale by the lead time: two tonnes '
          'a week for six weeks is twelve tonnes. That is what you will sell while the new order '
          'is travelling. Then add safety stock for the weeks when sales are higher or the ship '
          'is late — two weeks here, so four tonnes. The reorder level is sixteen tonnes. When '
          'the shelf shows sixteen, somebody orders, and nobody has to be asked.'),
    ('p', 'The last line is the one companies leave empty, and it is the only one that makes '
          'the card work. A reorder level with no owner is a number on a wall. A reorder level '
          'with a name beside it is a job. Notice that the owner does not have to be senior; '
          'she has to be the person who sees the shelf. In this depot that is Ms. Dana, and the '
          'day the card said eleven against a level of sixteen, she did not need a meeting.'),
    ('fig', F.dos_donts('Receiving and holding stock: do’s and don’ts',
                        ['count before you sign',
                         'measure, do not trust the label',
                         'keep rejected stock apart',
                         'put a name on every reorder level'],
                        ['sign the driver’s note to be polite',
                         'accept “it is only two tenths”',
                         'store rejects next to good stock',
                         'wait for a shop to telephone']),
     'Four habits, and the first one costs five minutes.'),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What is a stock card really for?',
        'How do you calculate the twelve tonnes?',
        'What is safety stock for?',
        'Which line do companies leave empty, and why does it matter?',
        'Why does the owner not have to be senior?',
    ]),
    ('ex', 'B. Listen and complete. Ms. Dana explains the card. Write the missing word.'),
    ('items', [
        'Ms. Dana: Multiply the rate of sale by the ____________ time.',
        'Ms. Dana: Then add ____________ stock for the bad weeks.',
        'Ms. Dana: When the shelf shows sixteen, somebody ____________.',
        'Ms. Dana: A reorder level with no ____________ is a number on a wall.',
    ]),
    ('ex', 'C. Practice. Make a stock card for one product at your work. Fill in all seven '
           'lines, and put a real name on the last one. Then tell your partner what would '
           'happen today if you used it.'),
    ('ex', 'D. Calculate the reorder level.'),
    ('items', [
        'Sells 5 t/week, lead time 4 weeks, safety 1 week. → ____________',
        'Sells 2 t/week, lead time 6 weeks, safety 2 weeks. → ____________',
        'Sells 10 t/week, lead time 2 weeks, no safety stock. → ____________',
        'Stock now 11 t, reorder level 16 t. What do you do? → ____________',
    ]),
]

# ============================================================ PART 8
B += [
    ('bar', 'Part 8  ·  Consolidation', 'TRADE'),
    ('h3', 'Two kinds of wrong'),
    ('fig', F.split_panel('What the gate found, and what the count found',
                          'ABROAD · the claim',
                          ['1 coil short, container 17',
                           '40 t at 4.8 mm, C31–C34',
                           'Photographs and batch numbers',
                           'Replacement asked for, not cash'],
                          'IN SYRIA · the shelf',
                          ['6,400 t steel = four months',
                           '11 t cement = nine days',
                           'No reorder level on cement',
                           'Nobody owned the number']),
     'One problem came from the supplier. The other we made ourselves.'),
    ('p', 'On Friday morning Mr. Tarek has two reports in front of him, and they are not the '
          'same kind of problem at all.'),
    ('p', 'The first is Westgate’s. One coil short, forty tonnes under gauge. It is annoying, it '
          'is expensive, and it is somebody else’s fault. Rami has the photographs, the batch '
          'numbers and the goods-received note which Ms. Dana signed, so the claim is strong '
          'and it will probably be paid.'),
    ('p', 'The second report is the one which should worry him, because nobody sent it from '
          'abroad. The depot holds four months of steel and nine days of cement. No supplier '
          'did that. The Group did it, over several months, with nobody watching a number that '
          'belonged to nobody.'),
    ('p', '“The claim will take six weeks,” says Mr. Tarek, “and we will win it. The cement '
          'will be gone on Tuesday.” He turns to Ms. Dana. “The card you asked for — write it '
          'today. Every line we sell, a rate, a lead time and a level, and your name at the '
          'bottom of each one.”'),
    ('p', 'Ms. Dana asks the only question that matters. “And if the level says order, and '
          'purchasing says wait?” Mr. Tarek does not hesitate. “Then purchasing writes down why, '
          'and signs it. A rule that anybody can ignore quietly is not a rule. It is a '
          'decoration.”'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done.)'),
    ('items0', [
        'What are the two reports?   (Westgate’s shortage and grade problem, and the depot’s stock count)',
        'Why is the claim strong?',
        'Why is the second report more worrying?',
        'Who caused the stock problem?',
        'What does Mr. Tarek ask Ms. Dana to write?',
        'What must purchasing do if it disagrees with a reorder level?',
    ]),
    ('ex', 'B. Complete each sentence with ONE word from the text. (0 is done for you.)'),
    ('items0', [
        'On Friday morning Mr. Tarek has two reports in front of him.',
        'The claim is strong because of the photographs, the batch numbers and the '
        '____________-received note.',
        'The depot holds four months of steel and nine days of ____________.',
        'Nobody was watching a number that belonged to ____________.',
        'Every line needs a rate, a lead time, a level and a ____________.',
        'A rule that anybody can ignore quietly is a ____________.',
    ]),
    ('ex', 'C. Discuss. Talk in pairs.'),
    ('items', [
        'Which problem would you fix first, and why?',
        'Is “write down why, and sign it” a fair rule? Would it work where you are?',
    ]),
    ('ex', 'D. Find a word from the text that means: (0 is done for you.)'),
    ('items0', [
        'making you slightly angry → (annoying)',
        'below the measurement it should be → under g____________',
        'to wait before speaking, because you are unsure → to h____________',
        'something put there only to look nice → a d____________',
    ]),
]

# ============================================================ PART 9
B += [
    ('bar', 'Part 9  ·  Case Studies and Decisions', 'LOGISTICS'),
    ('fig', F.dos_donts('Goods in: do’s and don’ts',
                        ['count and measure before signing',
                         'photograph evidence at the gate',
                         'keep rejected stock separate',
                         'claim in writing, with numbers'],
                        ['sign “received in good condition” blindly',
                         'accept a verbal promise to fix it',
                         'mix rejects with good stock',
                         'argue about fault before recording facts']),
     'Evidence is only free if you collect it on the day.'),
    ('h3', 'Case 1 — The driver who will not wait  (strand A · at the gate)'),
    ('p', 'A driver arrives at six in the evening with the last four containers. He says he has '
          'been driving since five this morning and asks you to sign now and count tomorrow. '
          'He is tired, he is polite, and he is right that it is late.'),
    ('p', 'Choose the best action and say why.'),
    ('items', [
        '(  )  Sign the note. He has had a long day and the seals look fine.',
        '(  )  Sign the note marked “received unchecked, subject to count”, and record the seal '
        'numbers and the time.',
        '(  )  Refuse the delivery and send him away.',
        '(  )  Count all four containers and make him wait, whatever the time.',
    ]),
    ('p', 'Write one sentence to put on the note before you sign it.'),
    ('lines', 2),
    ('h3', 'Case 2 — Nine days of cement  (strand B · the shelf)'),
    ('p', 'Your stock card says sixteen tonnes is the reorder level. The shelf shows eleven. '
          'Purchasing says the price is high this month and suggests waiting three weeks for a '
          'better one. The lead time is six weeks.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What will happen in week four if you wait?',
        'What is purchasing really comparing, and what are they leaving out?',
        'Write one sentence asking purchasing to order now, or to write down why not.',
    ]),
    ('h3', 'Case 3 — Forty tonnes nobody will admit to  (where the strands meet)'),
    ('p', 'The supplier replies that 4.8 mm is “within normal tolerance” and offers a five per '
          'cent credit instead of a replacement. Your builder customer will not take 4.8. The '
          'forty tonnes are sitting in your yard, and somebody in sales has started asking '
          'whether they could be sold cheaply.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'Why is selling the under-size steel cheaply a dangerous idea?',
        'What would you need from the supplier before you could accept a credit instead of a '
        'replacement?',
        'Write one sentence refusing the credit and repeating the request.',
    ]),
]

# ============================================================ PART 10
B += [
    ('bar', 'Part 10  ·  Review and Can-Do', 'TRADE'),
    ('ex', 'A. Vocabulary. Complete the sentence.'),
    ('items', [
        'Less than the agreed quantity is a ____________.',
        'How much difference is allowed is the ____________.',
        'A paper that gives money back is a ____________ ____________.',
        'The stock level at which we order more is the ____________ ____________.',
        'Goods that sit on the shelf for months are ____________-moving.',
    ]),
    ('ex', 'B. Grammar. Complete with who, which, that or where.'),
    ('items', [
        'The coils ____________ came out of container 31 measure 4.8 mm.',
        'The builder ____________ ordered this steel needs 5 mm.',
        'This is the yard ____________ we keep rejected stock.',
        'The note ____________ Ms. Dana signed lists every shortage.',
        'The driver ____________ delivered it wanted to go home.',
        'The shop ____________ sold out twice is in Rural Damascus.',
    ]),
    ('ex', 'C. Reading. Read the short text and answer.'),
    ('p', 'Forty-eight containers were received. Container 17 held eleven coils instead of '
          'twelve. The coils which came out of containers 31 to 34 measured 4.8 mm, and the '
          'order specified 5 mm — about forty tonnes. Those tonnes were kept in the corner '
          'where rejected stock goes. The depot now holds 6,400 tonnes of steel, which is four '
          'months of cover, and eleven tonnes of cement, which is nine days.'),
    ('items', [
        'How many coils were missing, and from which container?',
        'How much steel was below specification?',
        'How many days of cement cover does the depot hold?',
    ]),
    ('ex', 'D. Listening. Listen and answer. (Teacher reads.)'),
    ('p', '[Teacher reads] “Multiply the rate of sale by the lead time, then add safety stock. '
          'Two tonnes a week for six weeks is twelve. Add two weeks of safety, and the reorder '
          'level is sixteen tonnes. The shelf shows eleven, so we order today.”'),
    ('items', [
        'How do you calculate the twelve tonnes?',
        'What is the reorder level?',
        'What does the speaker decide to do, and why?',
    ]),
    ('ex', 'E. Speaking. Work in pairs. One reports a short or wrong delivery; the other asks '
           'what evidence was taken and where the goods are now.'),
    ('ex', 'F. Writing. Write two sentences about your work: one with “which” and one with '
           '“where”.'),
    ('nlines', 2),
    ('ex', 'G. Error correction. Find and correct one mistake in each sentence.'),
    ('items', [
        'The steel which we ordered it is 5 mm. → ____________',
        'The driver which delivered it went home. → ____________',
        'This is the depot which we keep the steel. → ____________',
        'The coils who measure 4.8 were rejected. → ____________',
        'The person which signed the note is Ms. Dana. → ____________',
    ]),
    ('ex', 'H. Match the term (1–5) to its meaning (a–e).'),
    ('items', [
        'tolerance  ____   a. how long the stock will last',
        'batch  ____   b. how much difference is allowed',
        'weeks of cover  ____   c. goods sent to replace bad ones',
        'replacement  ____   d. a group of goods made at one time',
        'reorder level  ____   e. the point at which we order more',
    ]),
    ('ex', 'I. Put the goods-in steps in order (1–5).'),
    ('items', [
        '(  )  measure the grade',
        '(  )  check the seal number',
        '(  )  put it on the shelf',
        '(  )  count what is inside',
        '(  )  record what is short or wrong',
    ]),
    ('ex', 'Can-Do check. Tick what you can do.'),
    ('check', [
        'I can check goods against the order.',
        'I can describe a product with which, who or where.',
        'I can report what is short, damaged or missing.',
        'I can write a goods-received note and a claim.',
    ]),
]

# ============================================================ PART 11
B += [
    ('bar', 'Part 11  ·  Foundations for Further Study', 'TRADE'),
    ('h3', 'Concept Spotlight: Exactly which one?'),
    ('fig', F.icon_row('A relative clause answers one question', 'WHICH ONE DO YOU MEAN?', [
        ('shelf', 'the steel…'), ('doc', '…which we ordered'),
        ('scale', '…which measures 4.8'), ('cross', '…which we rejected'),
        ('tick', '…which we sold'),
    ]), 'Four different piles of steel, one noun.'),
    ('p', 'This unit’s grammar looks like a small decoration, and it is not. A relative clause '
          'answers one question, and it is the question that runs through every warehouse in '
          'the world: exactly which one do you mean?'),
    ('p', 'Say “the steel” in a depot holding six thousand four hundred tonnes and you have '
          'said almost nothing. The steel which we ordered. The steel which arrived. The steel '
          'which measures 4.8. The steel which we rejected. The steel which the builder is '
          'waiting for. Those are five different quantities with five different values, and in '
          'this unit two of them were in the same yard at the same time. The only thing '
          'standing between them was a clause and a painted line on the floor.'),
    ('p', 'You can see why this is the grammar of claims and specifications. A claim that says '
          '“some of the steel was the wrong size” cannot be paid. A claim that says “the coils '
          'which came out of containers 31 to 34 measure 4.8 mm” can be checked by a stranger '
          'six weeks later in another country. The clause is not making the sentence longer for '
          'the sake of it. It is making it provable.'),
    ('p', 'There is a wider habit here, and it goes beyond English. Vague nouns hide problems, '
          'and precise ones expose them. “Stock is high” is a comment. “The cement which Alten '
          'IL sells is at nine days of cover” is a fact somebody has to do something about. In '
          'this unit, nobody discovered the cement problem by having a new idea. They '
          'discovered it by saying which cement, in which shops, measured against what.'),
    ('p', 'So when you write in English at work, treat every important noun as a question '
          'waiting to be answered. Which steel? Whose order? Which shop? The clause that answers '
          'it costs you four words, and it is the difference between a sentence people discuss '
          'and a sentence people act on.'),
    ('ex', 'A. Understanding check. Answer in your own words.'),
    ('items', [
        'What single question does a relative clause answer?',
        'Why does saying “the steel” in a large depot say almost nothing?',
        'Why can a claim with a relative clause be paid, when a vague one cannot?',
        'What is the difference between “stock is high” and the precise version?',
    ]),
    ('ex', 'B. Apply it. Do this task with a partner.'),
    ('p', 'Write down three vague sentences you have heard at work — “sales are down”, “the '
          'customer complained”, “there is a problem with the stock”. Rewrite each one with a '
          'relative clause so that it says exactly which one, and compare with your partner.'),
    ('ex', 'C. Micro-writing (optional).'),
    ('p', 'Write a few sentences (50–70 words) describing a problem with a delivery at your '
          'work. Use three relative clauses, and make sure a stranger could identify exactly '
          'which goods you mean.'),
]

TERMS = [
    ('goods-received note', 'the paper signed when goods arrive'),
    ('inspection', 'checking the goods carefully'),
    ('count (v)', 'to find out how many there are'),
    ('short delivery', 'a delivery with less than agreed'),
    ('shortage', 'less than the agreed quantity'),
    ('surplus', 'more than we need'),
    ('damage', 'harm done to the goods'),
    ('defect', 'something wrong with the goods'),
    ('grade', 'the quality or size of a material'),
    ('gauge', 'the thickness of a material'),
    ('specification', 'the exact details goods must meet'),
    ('tolerance', 'how much difference is allowed'),
    ('below specification', 'not meeting the agreed details'),
    ('sample', 'a small piece taken to check quality'),
    ('reject (v)', 'to refuse goods that are not right'),
    ('accept (v)', 'to agree that goods are right'),
    ('claim', 'a letter asking for money or goods back'),
    ('credit note', 'a paper that gives money back'),
    ('replacement', 'goods sent to replace bad ones'),
    ('batch', 'a group of goods made at one time'),
    ('batch number', 'the number showing the production run'),
    ('quality control', 'the work of checking goods'),
    ('segregate', 'to keep separate from other goods'),
    ('stock level', 'how much we have now'),
    ('stock count', 'counting everything on the shelves'),
    ('reorder level', 'the level at which we order more'),
    ('safety stock', 'extra stock for bad weeks'),
    ('weeks of cover', 'how long the stock will last'),
    ('fast-moving', 'selling quickly'),
    ('slow-moving', 'sitting on the shelf'),
    ('pallet', 'a wooden base for stacking goods'),
    ('shelf life', 'how long goods stay good'),
    ('who', 'for people'),
    ('which', 'for things'),
    ('that', 'for people or things'),
    ('where', 'for places'),
]

KEY = [
    ('Warm-Up A', '1 One container held eleven coils instead of twelve. 2 Forty tonnes measure '
                  '4.8 mm instead of 5 mm; it is worse because it is a different product, and '
                  'the customer needs five. 3 She photographs the evidence, writes the batch '
                  'numbers on the goods-received note, and puts the steel in the corner where '
                  'rejected stock goes. 4 A credit note for the missing coil and a replacement '
                  'for the under-size steel. 5 The depot holds four months of steel and only '
                  'nine days of cement.'),
    ('Warm-Up B', '1 T · 2 F · 3 F · 4 T · 5 F'),
    ('Warm-Up C', '1 short · 2 credit note · 3 specification'),
    ('Warm-Up D', 'Answers vary.'),
    ('P1 A', '0 b · 1 e · 2 d · 3 f · 4 a · 5 c · 6 g · 7 h'),
    ('P1 B', '1 shortage · 2 specification · 3 tolerance · 4 credit note · 5 replacement · '
             '6 reorder level'),
    ('P1 C', '1 b · 2 a · 3 d · 4 c · 5 e'),
    ('P1 D', '1 invoice · 2 deliver · 3 grade · 4 when · 5 demurrage'),
    ('P1 E', '1 a · 2 b · 3 b · 4 b'),
    ('P1 F', 'A problem with the delivery: shortage, defect, wrong grade · A stock measure: '
             'reorder level, weeks of cover, minimum stock'),
    ('P1 G', '1 a · 2 c · 3 b · 4 e · 5 d · 6 f'),
    ('P1 H', '1 short · 2 specification · 3 rejected · 4 claim · 5 which · 6 cover'),
    ('P2 A', '1 which / that · 2 where · 3 who / that · 4 which / that · 5 where'),
    ('P2 B', '1 This is the container which was one coil short. 2 She is the supervisor who '
             'signed the note. 3 That is the corner where we put rejected stock. '
             '4 These are the batch numbers which we recorded.'),
    ('P2 C', '1 YES · 2 NO · 3 YES · 4 NO'),
    ('P2 D', '1 who · 2 which · 3 where · 4 that'),
    ('P2 E', '1 where / at which · 2 which / that · 3 who / that · 4 which / that'),
    ('P2 F', '1 Forty tonnes which were below specification were rejected. 2 The yard where '
             'rejected stock is kept. 3 The supplier who sent the short container. '
             '4 The photograph which Ms. Dana took.'),
    ('P2 G', '1 The driver who delivered it went home. 2 This is the depot where we keep the '
             'steel. 3 The coils which measure 4.8 were rejected. 4 The person who signed the '
             'note is Ms. Dana.'),
    ('P2 H', 'Answers vary — one “who”, one “where”.'),
    ('P2 I', '1 which / that · 2 where · 3 who / that · 4 which / that (or nothing) · '
             '5 which / that'),
    ('P2 J', '1 a company which receives the goods · 2 a building where goods are kept · '
             '3 a letter which asks for money or goods back · 4 a person who checks the goods'),
    ('P3 D1 A', '1 Containers 31 to 34; about forty tonnes. 2 He said it was only two tenths; '
                'Rami says that to the builder who is waiting it is a different product. '
                '3 The gauge, the coil and the container number — in one picture. 4 Because if '
                'it touches the good steel, somebody will sell it by Friday. 5 Because money '
                'does not build anything.'),
    ('P3 D1 B', '1 F · 2 T · 3 F · 4 F · 5 T'),
    ('P3 D1 C', '1 the driver who brought them / the builder who is waiting · 2 the corner '
                'where rejected stock goes · 3 If it touches the good steel, somebody will sell '
                'it by Friday'),
    ('P3 D2 A', '1 6,400 tonnes, which is about four months. 2 Eleven tonnes, about nine days. '
                '3 A reorder level for cement, because at the moment nobody owns that number. '
                '4 Six weeks of cover; falling to six weeks should trigger the order, not a '
                'telephone call from the shop.'),
    ('P3 D2 B', '1 C · 2 B · 3 A · 4 C'),
    ('P4 B', 'Answers vary — one relative clause from your own role.'),
    ('P5 A', '1 In time (weeks or months of cover), because a number of tonnes means nothing by '
             'itself. 2 Because it sits, and while it sits it costs storage, insurance and '
             'interest. 3 The stock nobody has looked at, because it is usually the stock that '
             'cannot be sold. 4 Rate of sale × lead time, plus a little for safety. '
             '5 Ownership — the level belongs to nobody, so everyone assumes someone else is '
             'watching.'),
    ('P5 B', '1 B · 2 C · 3 B · 4 B · 5 C'),
    ('P5 C', '1 cover · 2 fast · 3 interest · 4 unowned'),
    ('P5 D', '1 spent · 2 time · 3 Slow · 4 lead · 5 safety · 6 ownership'),
    ('P5 F', '1 F · 2 T · 3 NOT GIVEN · 4 T'),
    ('P6 A', '1 Container 17 held eleven coils instead of twelve (one short); the coils from '
             'containers 31–34 measure 4.8 mm instead of 5 mm, about forty tonnes. 2 The '
             'goods-received note with the batch numbers, and photographs. 3 A replacement for '
             'the forty tonnes and a credit note for the missing coil, with an answer by '
             'Thursday.'),
    ('P6 B', 'Order: 2 (Dear Mr. Delgado,) · 3 (The consignment was received…) · 4 (Container '
             '17 held eleven coils…) · 1 (We would like a replacement and a credit note.) · '
             '5 (Could you let us know by Thursday…) · 6 (Best regards, Rami)'),
    ('P7 A', '1 It is an instruction for the future, not a record of the past. 2 Rate of sale '
             '(2 t/week) × lead time (6 weeks). 3 For the weeks when sales are higher or the '
             'ship is late. 4 The owner — without a name the card is just a number on a wall. '
             '5 Because the owner has to be the person who sees the shelf.'),
    ('P7 B', '1 lead · 2 safety · 3 orders · 4 owner'),
    ('P7 D', '1 25 tonnes (5 × 4 + 5) · 2 16 tonnes (2 × 6 + 4) · 3 20 tonnes · '
             '4 Order today — the stock is below the reorder level.'),
    ('P8 A', '1 Because there are photographs, batch numbers and a signed goods-received note. '
             '2 Because nobody sent it from abroad — the Group caused it itself. 3 The Group, '
             'over several months, with nobody watching the number. 4 A stock card for every '
             'line: a rate, a lead time, a level and her name. 5 Write down why, and sign it.'),
    ('P8 B', '1 goods · 2 cement · 3 nobody · 4 name · 5 decoration'),
    ('P8 D', '1 gauge · 2 hesitate · 3 decoration'),
    ('P10 A', '1 shortage · 2 tolerance · 3 credit note · 4 reorder level · 5 slow'),
    ('P10 B', '1 which / that · 2 who / that · 3 where · 4 which / that · 5 who / that · '
              '6 which / that'),
    ('P10 C', '1 One coil, from container 17. 2 About forty tonnes. 3 Nine days.'),
    ('P10 D', '1 Two tonnes a week multiplied by a six-week lead time. 2 Sixteen tonnes. '
              '3 Order today, because the shelf shows eleven, below the level.'),
    ('P10 G', '1 The steel which we ordered is 5 mm. 2 The driver who delivered it went home. '
              '3 This is the depot where we keep the steel. 4 The coils which measure 4.8 were '
              'rejected. 5 The person who signed the note is Ms. Dana.'),
    ('P10 H', '1 b · 2 d · 3 a · 4 c · 5 e'),
    ('P10 I', '2 check the seal number · 4 count what is inside · 1 measure the grade · '
              '5 record what is short or wrong · 3 put it on the shelf'),
    ('P11 A', '1 Exactly which one do you mean? 2 Because the depot holds several different '
              'quantities of steel with different values. 3 Because it can be checked by a '
              'stranger six weeks later — it is provable. 4 One is a comment; the other is a '
              'fact somebody has to act on.'),
]

UNIT = dict(
    n=6,
    title='Goods In: Quality, Quantity and Stock',
    grammar='defining relative clauses — who · which · that · where',
    function='Trade + Logistics',
    candos=[
        'I can check goods against the order',
        'I can describe a product with which, who or where',
        'I can report what is short, damaged or missing',
        'I can write a goods-received note and a claim',
    ],
    cando_line='You can check what arrived, say exactly which goods you mean, and claim.',
    blocks=B,
    terms=TERMS,
    key=KEY,
    teaser=F.scene_banner(
        'Unit 7 — now somebody has to buy it',
        [('w', ORANGE), ('m', GREY)],
        ['“He said he needed', 'two hundred tonnes.”'],
        'TWO KINDS OF CUSTOMER',
        ['A site engineer buying for a job', 'A customer at the shop counter',
         'One negotiates; one decides in a minute', 'Both must be quoted properly'],
        quote='“She asked whether we had it in stock.”'),
)
