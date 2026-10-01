# -*- coding: utf-8 -*-
"""Unit 3 — Offers, Prices and the Margin.
Strand A: the supplier's offer abroad, in dollars (Rami, Mr. Delgado).
Strand B: our own selling price for Syria, in pounds (Lina, Karim, Ms. Maya).
"""
import frames as F
from art import NAVY, BLUE, ORANGE, GREEN, GREEN_D, PURPLE, GREY

B = []

PEOPLE = [
    ('Rami', 'Bashak · Imports', 'm', GREEN_D),
    ('Mr. Delgado', 'Westgate Metals', 'm', NAVY),
    ('Lina', 'Financial Manager', 'w', GREEN),
    ('Karim', 'Fin. Controller', 'm', GREY),
    ('Ms. Maya', 'Alten IL · Retail', 'w', ORANGE),
    ('Mr. Tarek', 'General Manager', 'm', BLUE),
]

# ============================================================ unit openers
B += [
    ('fig', F.process_strip('From their price to our price', [
        'Their unit price', 'Freight to Lattakia', 'Duty and clearance',
        'Transport to the depot', 'Our selling price',
    ]), 'Five steps between a price abroad and a price in a Syrian shop.'),
    ('fig', F.team_strip('The people in this unit', PEOPLE),
     'One side argues about dollars; the other side works in pounds.'),
]

# ============================================================ WARM UP
B += [
    ('bar', 'Warm Up', 'FINANCE'),
    ('p', 'Look at the pictures. Answer these questions before you read.'),
    ('items', [
        'When a supplier gives you a price, what else do you need to know?',
        'What costs are there between the supplier’s door and your warehouse?',
        'How does your company decide its selling price?',
    ]),
    ('h3', 'Read'),
    ('p', 'The packing machines worked. Westgate delivered them in sixty days, Chemac installed '
          'them, and the bags stopped waiting. So now Rami asks Mr. Delgado a bigger question: '
          'what about steel?'),
    ('p', 'The offer arrives on Tuesday. Five hundred tonnes of steel coil at 640 dollars a '
          'tonne, CFR Lattakia. That means the price includes the ship to the Syrian port. '
          'There is one line at the bottom that interests Rami: “If you take 2,000 tonnes, we '
          'will reduce the price by seven per cent.”'),
    ('p', 'Seven per cent of 640 dollars is about 45 dollars a tonne. On 2,000 tonnes that is '
          'ninety thousand dollars. Rami takes the offer to Lina.'),
    ('p', 'Lina is the Financial Manager, and she does not look at the 640. She looks at what '
          'the steel will cost when it is standing in the depot outside Damascus. “The price at '
          'the port is not the price,” she says. “Add the customs duty. Add the clearance fee. '
          'Add Komosh’s trucks from Lattakia. Then tell me what a tonne really costs us.”'),
    ('p', 'She builds it up on one sheet of paper. Unit price, 640. Duty, a percentage of the '
          'value. Clearance, a fixed fee per container. Inland transport, so much per tonne. '
          'When she has finished, the real cost is 712 dollars a tonne, not 640. “And now,” she '
          'says, “we add our margin, and we convert to Syrian pounds. That is the number Maya '
          'puts on the shelf.”'),
    ('p', 'Then Karim asks the question nobody wants to hear. “If we take 2,000 tonnes, where '
          'will we put it? The depot is still half full from last year.” Nobody answers. Unless '
          'they can sell it, a discount is not a saving. It is money sleeping in a warehouse.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'How long did Westgate take to deliver the machines?   (sixty days)',
        'What exactly does Westgate offer, and at what price?',
        'What does CFR Lattakia include?',
        'What is the condition for the seven per cent?',
        'Name three costs Lina adds to the 640 dollars.',
        'Why is Karim worried about the 2,000 tonnes?',
    ]),
    ('ex', 'B. True or False? Write T or F. (0 is done for you.)'),
    ('items0', [
        'The machines arrived late.   (F)',
        'CFR Lattakia includes the ship to the Syrian port.   ____',
        'The discount is seven per cent on any quantity.   ____',
        'Lina says the price at the port is the real cost.   ____',
        'The real cost in the depot is 712 dollars a tonne.   ____',
        'The depot is empty.   ____',
    ]),
    ('ex', 'C. Find the words. Find a word or phrase in the text that means: (0 is done for you.)'),
    ('items0', [
        'the price of one tonne → (the unit price)',
        'money paid to the government on imported goods → the c____________ d____________',
        'what the goods really cost us in our own depot → the l____________ cost',
        'the money we add on top of our cost → our m____________',
    ]),
    ('ex', 'D. Over to you. Answer about yourself.'),
    ('items', [
        'Which costs does your company add to a supplier’s price?',
        'Does your company get discounts for large orders? How large?',
        'Who decides the final selling price where you work?',
    ]),
]

# ============================================================ PART 1
B += [
    ('bar', 'Part 1  ·  Vocabulary and Terminology', 'FINANCE'),
    ('h3', 'Reading an offer'),
    ('fig', F.doc_card('The parts of a supplier’s offer', 'Offer WM-3310',
                       [('Product', 'Steel coil, 5 mm'),
                        ('Quantity', '500 tonnes'),
                        ('Unit price', 'USD 640.00 / tonne'),
                        ('Total value', 'USD 320,000.00'),
                        ('Terms', 'CFR Lattakia'),
                        ('Payment', '30% deposit, 70% balance'),
                        ('Volume discount', '−7% at 2,000 tonnes'),
                        ('Valid until', '31 October')], accent=BLUE),
     'Eight lines. Every one of them changes the real cost.'),
    ('ex', 'A. Match each word (1–7) with its meaning (a–h). There is one you do not need. '
           '(0 is done for you.)'),
    ('items0', [
        'unit price  (e)',
        'total value  ____   a. money off for a large order',
        'volume discount  ____   b. the last day the price is good',
        'deposit  ____   c. the rest of the money, paid later',
        'balance  ____   d. unit price × quantity',
        'valid until  ____   e. the price of one tonne or one item',
        'margin  ____   f. the first part of the money, paid early',
        'landed cost  ____   g. what the goods cost us in our own depot',
        '          h. what we add on top of our cost',
    ]),
    ('ex', 'B. Complete the sentences with the words in the word bank.'),
    ('bank', 'Word bank:', ['unit price', 'total value', 'deposit', 'balance',
                            'valid until', 'volume discount']),
    ('items', [
        'The ____________ is 640 dollars a tonne.',
        'The ____________ of the order is 320,000 dollars.',
        'We pay a 30% ____________ before they start.',
        'The ____________ is due when the goods are shipped.',
        'The offer is ____________ 31 October.',
        'At 2,000 tonnes we get a ____________ of seven per cent.',
    ]),
    ('h3', 'Money words'),
    ('fig', F.icon_row('The money side of an import', 'FOUR THINGS THAT MOVE THE PRICE', [
        ('money', 'currency'), ('ship', 'freight'), ('stamp', 'duty'), ('scale', 'margin'),
    ]), 'A price in dollars is not yet a price in Syria.'),
    ('ex', 'C. Match the cost (1–5) with what it pays for (a–e).'),
    ('items', [
        'freight  ____   a. the government, on imported goods',
        'customs duty  ____   b. the agent who handles the papers at the port',
        'clearance fee  ____   c. the ship from the supplier’s port to Lattakia',
        'inland transport  ____   d. our own profit on the sale',
        'margin  ____   e. the trucks from Lattakia to the depot',
    ]),
    ('h3', 'Building the landed cost'),
    ('fig', F.label_panel('What a tonne really costs us', [
        ('USD 640', 'unit price, CFR Lattakia'),
        ('+ duty', 'a percentage of the value'),
        ('+ clearance', 'a fixed fee per container'),
        ('+ transport', 'Lattakia to the depot'),
        ('= USD 712', 'landed cost per tonne'),
        ('+ margin', 'then convert to pounds'),
    ], cols=3), 'The ladder from their price to ours.'),
    ('ex', 'D. Odd one out. Which word is different? Circle it.'),
    ('items', [
        'duty · freight · clearance · margin',
        'deposit · balance · payment · tonne',
        'discount · reduction · increase · cut',
        'dollar · pound · euro · litre',
        'offer · quotation · price · depot',
    ]),
    ('ex', 'E. Choose the best answer.'),
    ('items', [
        'Money off for a large order is a…   (a) deposit   (b) volume discount',
        'What the goods cost in our own depot is the…   (a) unit price   (b) landed cost',
        'What we add on top of our cost is the…   (a) margin   (b) duty',
        'The first part of the money, paid early, is the…   (a) balance   (b) deposit',
    ]),
    ('ex', 'F. Classify. Write each item in the correct column.'),
    ('bank', 'Items:', ['unit price', 'customs duty', 'margin', 'freight',
                        'clearance fee', 'selling price']),
    ('grid', ['The supplier charges it', 'Syria charges it', 'We add it'], 3),
    ('ex', 'G. Match the two halves (1–6 with a–f).'),
    ('items', [
        'a volume  ____   a. cost',
        'the landed  ____   b. price',
        'the unit  ____   c. discount',
        'customs  ____   d. rate',
        'the exchange  ____   e. duty',
        'payment  ____   f. terms',
    ]),
    ('ex', 'H. Complete the paragraph with the words in the box.'),
    ('bank', 'Box:', ['discount', 'duty', 'landed', 'margin', 'pounds', 'unit']),
    ('p', 'Their (1)____________ price is 640 dollars. We add the customs (2)____________, the '
          'clearance fee and the transport, and we reach a (3)____________ cost of 712 dollars. '
          'Then we add our (4)____________ and convert to Syrian (5)____________. If we order '
          '2,000 tonnes, we also get a (6)____________ of seven per cent.'),
]

# ============================================================ PART 2
B += [
    ('bar', 'Part 2  ·  Grammar — first conditional · unless · time clauses', 'FINANCE'),
    ('fig', F.grammar_card('The first conditional — a real future possibility', [
        ('if + present simple', 'if', 'If you take 2,000 tonnes,'),
        ('will / won’t + verb', 'will', 'we will reduce the price by 7%.'),
        ('either order', 'both', 'We’ll reduce it if you take 2,000 tonnes.'),
    ], 'Never: If you will take… — the if-part uses the PRESENT, even about the future.'),
     'The grammar of every offer and every counter-offer.'),
    ('p', 'We use the FIRST CONDITIONAL for something that may really happen in the future. The '
          'if-part uses the present simple, and the other part uses will or won’t. If we order '
          'early, they will give us a discount. They won’t ship it if we don’t pay the deposit.'),
    ('fig', F.grammar_card('unless = if not', [
        ('unless + present', 'unless', 'Unless you pay the deposit, we won’t ship.'),
        ('the same meaning', 'if … not', 'If you don’t pay the deposit, we won’t ship.'),
    ], 'unless is already negative — never say “unless you don’t pay”.'),
     'One word that replaces “if … not”.'),
    ('p', 'UNLESS means if not. Unless the price falls, we will buy less = If the price does not '
          'fall, we will buy less. Because unless already means if not, we never put another '
          'negative after it.'),
    ('fig', F.grammar_card('when · as soon as · until + present', [
        ('when', 'when', 'We’ll pay when the goods arrive.'),
        ('as soon as', 'as soon as', 'We’ll call as soon as it clears.'),
        ('until', 'until', 'We won’t pay until it clears.'),
    ], 'After when, as soon as, until, before and after → PRESENT, never will.'),
     'Time words follow the same rule as if.'),
    ('p', 'After WHEN, AS SOON AS, UNTIL, BEFORE and AFTER we use the present simple for the '
          'future, exactly as we do after if. We will unload it as soon as it arrives. We '
          'won’t release the goods until the balance is paid.'),
    ('fig', F.split_panel('Two sides, two conditions',
                          'THEIR CONDITION · the supplier',
                          ['If you take 2,000 t, we’ll cut 7%.',
                           'We won’t start unless you pay 30%.',
                           'The price holds until 31 October.',
                           'We’ll ship as soon as the deposit clears.'],
                          'OUR CONDITION · Al-Hasan',
                          ['If the depot is full, we’ll take 500 t.',
                           'We won’t sign unless the price is firm.',
                           'We’ll pay when the goods reach Lattakia.',
                           'Unless we can sell it, a discount is not a saving.']),
     'A negotiation is two sets of conditions meeting.'),
    ('watch', 'Never use will in the if-part or after when, as soon as or until. Say: If you '
              'order 2,000 tonnes, we will give you 7%. Not: If you will order… And remember '
              'that unless already means “if not”, so you never add another not after it.'),
    ('h3', 'Form'),
    ('p', 'if + present simple , will / won’t + verb     ·     unless + present simple (= if not)'
          '     ·     when / as soon as / until / before / after + present simple'),
    ('ex', 'A. Complete with the correct form. (0 is done for you.)'),
    ('items0', [
        'If we order (order) 2,000 tonnes, they will give us 7%.',
        'If the price ____________ (fall), we ____________ (buy) more.',
        'They ____________ (not / ship) if we ____________ (not / pay) the deposit.',
        'If the depot ____________ (be) full, we ____________ (take) only 500 tonnes.',
        'We ____________ (lose) the discount if we ____________ (wait) until November.',
    ]),
    ('ex', 'B. Rewrite with UNLESS.'),
    ('items', [
        'If we don’t pay the deposit, they won’t ship. → ____________',
        'If the price doesn’t fall, we will buy less. → ____________',
        'If you don’t confirm today, the offer will expire. → ____________',
        'If they don’t send the certificate, customs will stop it. → ____________',
    ]),
    ('ex', 'C. Complete with WHEN, AS SOON AS or UNTIL.'),
    ('items', [
        'We will pay the balance ____________ the goods reach Lattakia.',
        'I will call you ____________ I have the figures — within the hour.',
        'We won’t release the steel ____________ the invoice is paid.',
        '____________ the rate changes, our cost changes too.',
    ]),
    ('ex', 'D. Put the verb in the right form.'),
    ('items', [
        'We will ship it as soon as the deposit ____________ (clear).',
        'If the duty ____________ (go) up, our landed cost ____________ (rise).',
        'They won’t hold the price until we ____________ (sign).',
        'When the trucks ____________ (arrive), we ____________ (unload) the same day.',
    ]),
    ('ex', 'E. Make a conditional offer from the notes.'),
    ('items', [
        'order 1,000 t / discount 4% → If you ____________',
        'pay in 15 days / extra 2% off → If you ____________',
        'no deposit / no production → Unless you ____________',
        'confirm today / price held → If you ____________',
    ]),
    ('ex', 'F. Match the condition (1–5) with its result (a–e).'),
    ('items', [
        'If we take 2,000 tonnes,  ____   a. our landed cost will rise.',
        'If the duty goes up,  ____   b. we will get seven per cent off.',
        'Unless we pay the deposit,  ____   c. we will lose the discount.',
        'If we wait until November,  ____   d. they won’t start production.',
        'As soon as it clears customs,  ____   e. Komosh will collect it.',
    ]),
    ('ex', 'G. Find and correct the mistake in each sentence. (0 is done for you.)'),
    ('items0', [
        'If you will order 2,000 t, we give 7%. → (If you order 2,000 t, we will give 7%.)',
        'We will pay when the goods will arrive. → ____________',
        'Unless you don’t pay, we won’t ship. → ____________',
        'If the price falls, we buying more. → ____________',
        'We won’t ship until you will confirm. → ____________',
    ]),
    ('ex', 'H. About you. Write two sentences about your work: one with “If…, I will…” and one '
           'with “I won’t … until …”.'),
    ('nlines', 2),
    ('ex', 'I. Complete with if, unless, when, as soon as or until.'),
    ('items', [
        '____________ you confirm today, the price is good for a month.',
        'We won’t sign ____________ the price is firm in writing.',
        'I will send the order ____________ Mr. Tarek approves it.',
        'The offer expires ____________ you reply before 31 October.',
        'We will convert to pounds ____________ we know the duty.',
    ]),
    ('ex', 'J. Write the counter-offer. Use the first conditional.'),
    ('items', [
        'They want 2,000 t. We can take 1,200 t. We want 5%. → “If we ____________”',
        'We want 90 days to pay. They want 30. → “If you ____________”',
        'We will confirm today, but we want the price held for 60 days. → “If we ____________”',
        'We want free delivery to the depot on orders over 1,000 t. → “If we ____________”',
    ]),
]

# ============================================================ PART 3
B += [
    ('bar', 'Part 3  ·  Listening and Dialogue', 'FINANCE'),
    ('fig', F.dialogue_scene(('m', GREEN_D), ['If we take 1,200 tonnes,', 'will you give us five?'],
                             ('m', NAVY), ['If you confirm this week,', 'I can do five.']),
     'Strand A · the discount is argued in dollars.'),
    ('h3', 'Dialogue 1 — Arguing about the discount (the import desk)'),
    ('p', 'Listen and read. (Your teacher will read the dialogue, or play the audio.)'),
    ('dlg', [
        ('Rami', 'Mr. Delgado, thank you for the offer. The price is reasonable. The quantity '
                 'is my problem.'),
        ('Mr. Delgado', 'Two thousand tonnes is where the discount starts. That is our policy.'),
        ('Rami', 'I understand. But our depot is half full. If we take 2,000, the steel will '
                 'sit there until spring.'),
        ('Mr. Delgado', 'Then take 500 at the full price.'),
        ('Rami', 'Let me put something to you. If we take 1,200 tonnes, will you give us five '
                 'per cent?'),
        ('Mr. Delgado', 'Twelve hundred is not two thousand, Rami.'),
        ('Rami', 'No. But 1,200 is more than double the 500 you offered, and we will confirm '
                 'this week.'),
        ('Mr. Delgado', 'Hm. If you confirm before Friday, I can do five per cent on 1,200. '
                        'After Friday, the offer goes back to 640.'),
        ('Rami', 'And will the price hold for sixty days?'),
        ('Mr. Delgado', 'It will hold until the end of November, unless the steel market moves '
                        'more than three per cent.'),
        ('Rami', 'That is fair. I will send you our confirmation as soon as Mr. Tarek signs.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What does Rami say is not a problem?   (the price — the quantity is the problem)',
        'Why can’t Bashak take 2,000 tonnes?',
        'What does Rami offer instead, and what does he ask for?',
        'What two conditions does Mr. Delgado attach to the five per cent?',
        'Until when will the price hold, and what could change it?',
        'When will Rami send the confirmation?',
    ]),
    ('ex', 'B. True or False? Write T or F.'),
    ('items', [
        'Rami thinks the price is too high.   ____',
        'The discount normally starts at 2,000 tonnes.   ____',
        'Mr. Delgado agrees to five per cent on 1,200 tonnes.   ____',
        'The condition is that Bashak confirms before Friday.   ____',
        'The price will hold even if the market moves ten per cent.   ____',
    ]),
    ('ex', 'C. Language focus. Find in the dialogue: (0 is done for you.)'),
    ('items0', [
        'a conditional question asking for a discount → (If we take 1,200 tonnes, will you give us five per cent?)',
        'a condition with a deadline → ____________',
        'a sentence with “unless” → ____________',
        'a sentence with “as soon as” → ____________',
    ]),
    ('fig', F.half_scene('w', GREEN, ['If we price it at 95,', 'will people still buy?']),
     'Strand B · the same steel, priced for a Syrian shelf.'),
    ('h3', 'Dialogue 2 — Setting the shelf price (the Syrian market)'),
    ('dlg', [
        ('Lina', 'Maya, the landed cost will be about 712 dollars a tonne. What can the market '
                 'take?'),
        ('Ms. Maya', 'Builders are careful this year. If we go above the Homs yard, they will '
                     'walk.'),
        ('Lina', 'What is the Homs yard charging?'),
        ('Ms. Maya', 'A little under ours, but their steel is thinner. Mine is five millimetre.'),
        ('Lina', 'So we can hold a higher price if we explain the difference.'),
        ('Ms. Maya', 'Only if the salesman explains it. If he just says a number, we lose.'),
        ('Lina', 'Then I will put the specification on the price card. Will that help?'),
        ('Ms. Maya', 'It will. And Lina — don’t change the price again until the winter.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What is the landed cost, and what does Lina want to know?',
        'What will builders do if the price goes above the Homs yard?',
        'Why can Al-Hasan hold a higher price than the Homs yard?',
        'What does Ms. Maya ask Lina not to do?',
    ]),
    ('ex', 'B. Listen again and choose the best answer (A–D).'),
    ('items', [
        'The landed cost is about … a tonne.   A) $640  B) $712  C) $760  D) $800',
        'The Homs yard’s steel is…   A) thicker  B) thinner  C) the same  D) cheaper to ship',
        'Lina will put the … on the price card.   A) discount  B) specification  C) margin  D) duty',
        'Ms. Maya asks Lina not to change the price until…   A) Friday  B) November  '
        'C) the winter  D) next year',
    ]),
]

# ============================================================ PART 4
B += [
    ('bar', 'Part 4  ·  Speaking and Your Role', 'FINANCE'),
    ('fig', F.label_panel('Phrases for asking and for conceding', [
        ('If we …, will you …?', 'a conditional request'),
        ('Let me put something to you.', 'opening a counter-offer'),
        ('I can do … if you …', 'conceding with a condition'),
        ('That works for us.', 'accepting'),
        ('Unless …, I’m afraid we can’t.', 'a polite limit'),
        ('Will the price hold until …?', 'asking about validity'),
    ], cols=3), 'Never give something away without attaching a condition.'),
    ('ex', 'A. Role-play: the discount. Student A is the buyer and wants a better price for a '
           'smaller quantity. Student B is the supplier. Then change roles.'),
    ('items', [
        'A: Say the price is acceptable but the quantity is not.',
        'B: Say where your discount normally starts.',
        'A: Make a conditional offer: a middle quantity for a smaller discount.',
        'B: Accept, but attach a deadline.',
        'A: Ask how long the price will hold.',
        'B: Answer with “until…” and one condition with “unless”.',
    ]),
    ('fig', F.label_panel('Every job sets a condition', [
        ('Imports', 'if we confirm this week…'),
        ('Sales', 'if you take the full pallet…'),
        ('Finance', 'unless the deposit clears…'),
        ('Accounts', 'we won’t release until paid'),
        ('Logistics', 'as soon as it clears customs…'),
        ('Admin', 'if you send it in writing…'),
    ], cols=3), 'Six roles, the same grammar of conditions.'),
    ('ex', 'B. Your Role. Make one conditional offer from YOUR job. Use the phrases below. '
           '(Choose your real role.)'),
    ('items', [
        '[Trade] Import Manager: “If we confirm this week, will you hold the price?”',
        '[Trade] Sales: “If you take the whole pallet, I will give you five per cent.”',
        '[Finance] Financial Manager: “Unless the deposit clears, we won’t place the order.”',
        '[Finance] Accountant: “We won’t release the goods until the invoice is paid.”',
        '[Logistics] Freight: “As soon as it clears customs, I will send the truck.”',
        '[Admin] Assistant: “If you send it in writing, I will book it today.”',
    ]),
    ('ex', 'C. Ask your partner. Walk around and ask three people.'),
    ('items', [
        'What will you do if your main supplier raises its price?',
        'What won’t you agree to, unless you get something back?',
        'What happens in your company as soon as an order is confirmed?',
    ]),
    ('ex', 'D. Discuss. Ask and answer.'),
    ('items', [
        'Is a big discount always good? When is it a trap?',
        'Who should set the selling price — the buyer or the seller? Why?',
    ]),
]

# ============================================================ PART 5
B += [
    ('bar', 'Part 5  ·  Extended Reading', 'FINANCE'),
    ('h3', 'Why the price at the port is never the price'),
    ('fig', F.route_strip('Where the money goes between the two prices', [
        ('ship', 'Freight'), ('stamp', 'Duty'), ('doc', 'Clearance'),
        ('truck', 'Transport'), ('shop', 'Shelf price'),
    ]), 'Four costs stand between their price and ours.'),
    ('p', 'Every buyer learns this lesson once, and usually the hard way. A supplier sends an '
          'offer. The number looks good. The buyer compares it with last year’s number, says '
          'yes, and only later discovers that the goods cost eleven per cent more than the '
          'offer said. Nothing was dishonest. The buyer simply looked at the wrong number.'),
    ('p', 'The price in an offer is a price at one place, on one day, under one set of rules. '
          'CFR Lattakia means the supplier pays for the ship to Lattakia. It does not mean the '
          'supplier pays the Syrian customs duty. It does not mean the supplier pays the '
          'clearance agent, or the trucks to Damascus, or the men who unload them. Each of '
          'those is somebody’s bill, and each of them lands on the buyer.'),
    ('p', 'So a careful buyer never compares offers. A careful buyer compares landed costs. The '
          'landed cost is what one tonne costs when it is standing in your own warehouse, with '
          'every bill paid. It is the only number that can be compared fairly, because it is '
          'the only number that includes everything.'),
    ('p', 'This matters most when two offers come from different places. Imagine a supplier '
          'whose price is thirty dollars higher but whose port is four days closer. The higher '
          'offer may land cheaper. Or imagine two identical prices, where one supplier’s goods '
          'carry a certificate and the other’s do not. If the goods without a certificate wait '
          'three weeks at customs, the cheaper offer is the expensive one.'),
    ('p', 'And then there is the currency. The offer is in dollars; the shelf price is in '
          'Syrian pounds. Between the day the price is agreed and the day the money is paid, '
          'the exchange rate can move. A buyer who agrees a price in a foreign currency has '
          'quietly agreed to a risk as well. That is why a good offer says “valid until” — and '
          'why a good buyer asks how long the price will hold.'),
    ('p', 'The lesson is short. The offer tells you what the supplier will charge. The landed '
          'cost tells you what you will pay. Only one of those two numbers belongs in your '
          'decision.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What mistake does almost every buyer make once?   (comparing the offer price instead of the landed cost)',
        'What does CFR Lattakia pay for, and what does it not pay for?',
        'What is the landed cost?',
        'Why may a higher offer from a closer port land cheaper?',
        'How can a missing certificate make a cheap offer expensive?',
        'What risk does a buyer accept by agreeing a price in a foreign currency?',
    ]),
    ('ex', 'B. Choose the best answer (A–D).'),
    ('items', [
        'The buyer in the first paragraph was…   A) cheated  B) careless about which number to use  '
        'C) too slow  D) unlucky',
        'The Syrian customs duty is paid by the…   A) supplier  B) ship  C) buyer  D) agent',
        'The only number that can be compared fairly is the…   A) unit price  B) total value  '
        'C) landed cost  D) margin',
        'Goods with no certificate may wait at…   A) the depot  B) customs  C) the bank  D) the shop',
        'A good offer always states…   A) the margin  B) the duty  C) “valid until”  D) the shelf price',
    ]),
    ('ex', 'C. Find a word or phrase in the text that means:'),
    ('items', [
        'not telling the truth → d____________',
        'the cost of one tonne in your own warehouse → the l____________ cost',
        'the price of one currency in another → the e____________ r____________',
        'the chance that something bad will happen → a r____________',
    ]),
    ('ex', 'D. Complete the summary with ONE word in each gap.'),
    ('p', 'An offer is a price at one (1)____________, under one set of rules. CFR pays for the '
          '(2)____________, but not the duty, the clearance or the (3)____________. A careful '
          'buyer compares (4)____________ costs, not offers. A missing (5)____________ can make '
          'a cheap offer expensive, and a moving exchange (6)____________ is a risk the buyer '
          'accepts.'),
    ('ex', 'E. Discuss. Talk in pairs.'),
    ('items', [
        'Does your company calculate landed cost? Who does it?',
        'How does your company protect itself against a moving exchange rate?',
    ]),
    ('ex', 'F. True or False? (about the reading). Write T, F or NOT GIVEN.'),
    ('items', [
        'CFR Lattakia includes the Syrian customs duty.   ____',
        'The landed cost includes every bill.   ____',
        'Syrian customs duty on steel is fifteen per cent.   ____',
        'A price in a foreign currency carries a risk.   ____',
    ]),
]

# ============================================================ PART 6
B += [
    ('bar', 'Part 6  ·  Writing (a real email)', 'ADMIN'),
    ('h3', 'Model — A counter-offer'),
    ('fig', F.doc_card('The five moves of a counter-offer', 'Counter-offer',
                       [('1  Thank them', 'and say what is good'),
                        ('2  Name the problem', 'one problem, not five'),
                        ('3  Make the offer', 'If we …, will you …?'),
                        ('4  Give a reason', 'why it is good for them'),
                        ('5  Set a date', 'we will confirm by …')], accent=ORANGE),
     'Say no and yes in the same email.'),
    ('p', 'Subject: Offer WM-3310 — our counter-proposal. Dear Mr. Delgado, Thank you for your '
          'offer of 640 dollars a tonne, CFR Lattakia. The price is competitive and the terms '
          'are clear. Our difficulty is the quantity. Our depot is half full, so 2,000 tonnes '
          'will sit until the spring. If we increase our order to 1,200 tonnes, will you give '
          'us five per cent? Twelve hundred is more than double the quantity in your first '
          'offer, and we will confirm this week rather than next month. If you can agree five '
          'per cent, I will send our confirmation as soon as our General Manager signs, and in '
          'any case before Friday. Best regards, Rami Import Manager, Bashak Co.'),
    ('ex', 'A. Answer about the email. (0 is done for you.)'),
    ('items0', [
        'What does Rami say is good about the offer?   (the price is competitive and the terms are clear)',
        'What is the one problem, and why?',
        'What exactly does Rami offer, and what does he ask for?',
        'What two reasons does he give to make it attractive?',
    ]),
    ('ex', 'B. Put the email in order (1–6).'),
    ('items', [
        '(  )  Our difficulty is the quantity.',
        '(  )  Dear Mr. Delgado,',
        '(  )  If we increase our order to 1,200 tonnes, will you give us five per cent?',
        '(  )  Thank you for your offer of 640 dollars a tonne.',
        '(  )  Best regards, Rami',
        '(  )  I will send our confirmation before Friday.',
    ]),
    ('h3', 'Guided writing'),
    ('ex', 'C. Now you write. Write a counter-offer (70–100 words). Use the first conditional at '
           'least twice, and give one clear reason why your offer is good for the other side.'),
    ('p', 'Plan:  1) “Dear …,”   2) “Thank you for … . The … is ….”   3) “Our difficulty is ….”   '
          '4) “If we …, will you …?”   5) “… because ….”   6) “I will … before ….”   '
          '7) “Best regards, …”'),
    ('p', 'Sentence starters:  “Thank you for your offer of…” · “Our difficulty is…” · '
          '“If we …, will you …?” · “We will confirm as soon as…” · “Unless …, I am afraid…”'),
    ('lines', 5),
    ('ex', 'D. Checklist. Tick each one when you have checked your counter-offer.'),
    ('check', [
        'I said one thing that is good about their offer.',
        'I named one problem, not five.',
        'I used “If we …, will you …?” at least once.',
        'I gave a reason why my offer helps them too.',
        'I said when I will confirm.',
    ]),
]

# ============================================================ PART 7
B += [
    ('bar', 'Part 7  ·  Trade-Skills Track', 'FINANCE'),
    ('h3', 'Building a price: from landed cost to shelf price'),
    ('fig', F.doc_card('The price build-up sheet', 'Steel coil 5 mm · per tonne',
                       [('Unit price, CFR Lattakia', 'USD 640'),
                        ('Customs duty', 'USD 38'),
                        ('Clearance fee', 'USD 9'),
                        ('Transport to depot', 'USD 25'),
                        ('Landed cost', 'USD 712'),
                        ('Margin (12%)', 'USD 85'),
                        ('Selling price', 'USD 797')], accent=GREEN_D),
     'One sheet, seven lines, and nobody argues afterwards.'),
    ('p', 'A price build-up is the most useful single sheet of paper in a trading company. It '
          'takes the supplier’s number at the top and walks down to the number the customer '
          'sees. Every line is a cost, and every line has an owner who can explain it.'),
    ('p', 'Work from the top down. Start with the unit price and say which terms it includes — '
          'CFR, FOB, or something else. Add the customs duty, which is usually a percentage of '
          'the value, so it moves when the price moves. Add the clearance fee, which is usually '
          'a fixed amount per container, so it falls per tonne when the container is full. Add '
          'the inland transport. The total is the landed cost.'),
    ('p', 'Only then do you add the margin, and only then do you convert into the selling '
          'currency. The order matters. A company that adds the margin before the duty is '
          'pricing on the wrong base, and will be surprised at the end of the year. And always '
          'keep the sheet. When a customer asks why the price rose, the sheet shows which line '
          'moved — and “the duty went up four points” is an answer a customer can accept, while '
          '“our prices have increased” is not.'),
    ('fig', F.dos_donts('Pricing an import: do’s and don’ts',
                        ['compare landed costs, not offers',
                         'add the margin last',
                         'write down which terms the price includes',
                         'keep the sheet for every product'],
                        ['compare an FOB price with a CFR price',
                         'forget the clearance fee',
                         'price in a currency you don’t get paid in',
                         'change the shelf price every week']),
     'Four habits that keep a margin where you put it.'),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What does a price build-up sheet do?',
        'Why does the customs duty move when the price moves?',
        'Why does the clearance fee fall per tonne when the container is full?',
        'Why must the margin be added last?',
        'Why is “the duty went up four points” a better answer than “our prices have increased”?',
    ]),
    ('ex', 'B. Listen and complete. Lina explains the sheet. Write the missing word.'),
    ('items', [
        'Lina: Start with the unit price and say which ____________ it includes.',
        'Lina: The customs duty is a ____________ of the value.',
        'Lina: The clearance fee is a fixed amount per ____________.',
        'Lina: Add the ____________ last, and convert after that.',
    ]),
    ('ex', 'C. Practice. Build a price for one product you sell. Write the seven lines from the '
           'sheet above, with your own numbers. Then explain to your partner which line would '
           'hurt you most if it doubled.'),
    ('ex', 'D. Calculate. Use the sheet above.'),
    ('items', [
        'What is the landed cost per tonne? → ____________',
        'If the duty rises to USD 58, what is the new landed cost? → ____________',
        'With a 12% margin on USD 712, what is the selling price? → ____________',
        'If Westgate gives 5% off the unit price, what is the new unit price? → ____________',
    ]),
]

# ============================================================ PART 8
B += [
    ('bar', 'Part 8  ·  Consolidation', 'FINANCE'),
    ('h3', 'The discount that was not a saving'),
    ('fig', F.split_panel('Two numbers, two answers',
                          'ABROAD · what the discount is worth',
                          ['7% on 2,000 t = USD 90,000',
                           '5% on 1,200 t = USD 38,400',
                           'Price firm until 30 November',
                           'Confirm before Friday'],
                          'IN SYRIA · what the steel costs us to hold',
                          ['Depot is half full already',
                           'Storage and insurance per month',
                           '2,000 t will not sell until spring',
                           'Money asleep is money lost']),
     'A saving on the left; a cost on the right.'),
    ('p', 'On Thursday the two sheets meet on Mr. Tarek’s desk. Rami’s sheet says the seven per '
          'cent is worth ninety thousand dollars. Lina’s sheet says that two thousand tonnes '
          'will not move until spring, and that holding them costs storage, insurance, and '
          'money that cannot be used for anything else.'),
    ('p', 'Mr. Tarek reads both. “So the discount is ninety thousand,” he says, “and the cost of '
          'taking it is?” Lina has the number ready. “Over six months, about seventy-four '
          'thousand. And that is if nothing goes wrong.”'),
    ('p', 'Rami does not argue. He has learned something this week, and he says it out loud. '
          '“Then 1,200 at five per cent is the better deal, even though the percentage is '
          'smaller. We take what we can sell.”'),
    ('p', 'Mr. Tarek signs the 1,200. Then he adds one line to the order by hand: the price is '
          'firm until 30 November, unless the market moves more than three per cent. “If the '
          'market moves,” he says, “I want to read it in the contract, not hear it on the '
          'telephone in December.”'),
    ('p', 'Rami sends the confirmation at four o’clock. Downstairs, Lina is already converting '
          '712 dollars into Syrian pounds for Maya’s price card. The deal abroad and the price '
          'at home are, for once, the same conversation.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done.)'),
    ('items0', [
        'What do the two sheets say?   (the discount is worth $90,000; the steel will not sell until spring)',
        'What is the cost of holding 2,000 tonnes for six months?',
        'What has Rami learned?',
        'What line does Mr. Tarek add by hand, and why?',
        'What is Lina doing downstairs?',
        'Why does the writer say the two conversations are “for once, the same”?',
    ]),
    ('ex', 'B. Complete each sentence with ONE word from the text. (0 is done for you.)'),
    ('items0', [
        'The two sheets meet on Mr. Tarek’s desk.',
        'The seven per cent is worth ninety thousand ____________.',
        'Holding the steel costs storage, insurance and ____________ that cannot be used.',
        'Rami says they should take what they can ____________.',
        'The price is ____________ until 30 November.',
        'Lina is converting dollars into Syrian ____________.',
    ]),
    ('ex', 'C. Discuss. Talk in pairs.'),
    ('items', [
        'Was Mr. Tarek right to refuse the bigger discount?',
        'How would you explain “money asleep is money lost” to a new colleague?',
    ]),
    ('ex', 'D. Find a word from the text that means: (0 is done for you.)'),
    ('items0', [
        'not changing → (firm)',
        'keeping goods in a warehouse → s____________',
        'protection you pay for → i____________',
        'to change one currency into another → to c____________',
    ]),
]

# ============================================================ PART 9
B += [
    ('bar', 'Part 9  ·  Case Studies and Decisions', 'FINANCE'),
    ('fig', F.dos_donts('Negotiating a price: do’s and don’ts',
                        ['attach a condition to every concession',
                         'ask how long the price will hold',
                         'compare landed costs',
                         'put the final terms in writing'],
                        ['give a discount for nothing',
                         'accept “we will see” as an answer',
                         'compare an offer with an offer',
                         'agree the big number on the telephone']),
     'Everything you give away should buy something back.'),
    ('h3', 'Case 1 — The discount with a deadline  (strand A · abroad)'),
    ('p', 'A supplier offers you eight per cent, but only if you confirm by Friday. It is '
          'Wednesday. Your General Manager is travelling and cannot sign until Monday. The '
          'supplier will not move the deadline.'),
    ('p', 'Choose the best action and say why.'),
    ('items', [
        '(  )  Sign it yourself and tell the General Manager on Monday.',
        '(  )  Ask the supplier in writing to hold the eight per cent until Monday, and offer '
        'something small in return.',
        '(  )  Let the offer expire and start again next month.',
        '(  )  Accept the offer at the full price now, to be safe.',
    ]),
    ('p', 'Write one sentence asking the supplier to extend the deadline.'),
    ('lines', 2),
    ('h3', 'Case 2 — The customer who only sees the number  (strand B · in Syria)'),
    ('p', 'A builder says your steel is more expensive than the Homs yard. Your steel is five '
          'millimetre; theirs is four. He has not noticed. He is about to walk out of the shop.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What is the one fact he needs before he decides?',
        'How can you show the difference without saying he is wrong?',
        'Write one sentence that compares the two products fairly.',
    ]),
    ('h3', 'Case 3 — A bigger discount you cannot use  (where the strands meet)'),
    ('p', 'A supplier offers twelve per cent, but only on four thousand tonnes. Your depot can '
          'hold two thousand. Renting outside space would cost about half the discount, and the '
          'steel would take a year to sell.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'Why is a discount you cannot store not really a discount?',
        'What two numbers must you compare before you answer?',
        'Write one sentence refusing the quantity but keeping the relationship.',
    ]),
]

# ============================================================ PART 10
B += [
    ('bar', 'Part 10  ·  Review and Can-Do', 'FINANCE'),
    ('ex', 'A. Vocabulary. Complete the sentence.'),
    ('items', [
        'The price of one tonne is the ____________ ____________.',
        'Money off for a large order is a ____________ ____________.',
        'What the goods cost in our own depot is the ____________ ____________.',
        'What we add on top of our cost is the ____________.',
        'The first part of the money, paid early, is the ____________.',
    ]),
    ('ex', 'B. Grammar. Complete with the correct form.'),
    ('items', [
        'If we ____________ (confirm) today, they ____________ (hold) the price.',
        'They won’t ship unless we ____________ (pay) the deposit.',
        'We will unload it as soon as it ____________ (arrive).',
        'We ____________ (not / release) the steel until the invoice is paid.',
        'If the duty ____________ (rise), our landed cost ____________ (go) up.',
        'When the rate ____________ (change), our cost ____________ (change) too.',
    ]),
    ('ex', 'C. Reading. Read the short text and answer.'),
    ('p', 'Westgate offered 640 dollars a tonne, CFR Lattakia, with seven per cent off at 2,000 '
          'tonnes. The depot was half full, so Al-Hasan asked for five per cent on 1,200 tonnes '
          'instead. Westgate agreed, on condition that Al-Hasan confirmed before Friday. The '
          'landed cost is 712 dollars a tonne, and the price is firm until 30 November.'),
    ('items', [
        'What discount did Al-Hasan finally get, and on what quantity?',
        'What was Westgate’s condition?',
        'What is the landed cost per tonne?',
    ]),
    ('ex', 'D. Listening. Listen and answer. (Teacher reads.)'),
    ('p', '[Teacher reads] “If you confirm before Friday, I can do five per cent on 1,200 '
          'tonnes. The price will hold until the end of November, unless the steel market moves '
          'more than three per cent. We will start production as soon as your deposit clears.”'),
    ('items', [
        'What is the condition for the five per cent?',
        'Until when will the price hold, and what could change that?',
        'When will production start?',
    ]),
    ('ex', 'E. Speaking. Work in pairs. One is a buyer asking for a discount on a smaller '
           'quantity; one is a supplier conceding with a deadline.'),
    ('ex', 'F. Writing. Write two sentences: one with “If we …, will you …?” and one with '
           '“We won’t … until …”.'),
    ('nlines', 2),
    ('ex', 'G. Error correction. Find and correct one mistake in each sentence.'),
    ('items', [
        'If you will order 2,000 t, we will give 7%. → ____________',
        'We will pay when the goods will arrive. → ____________',
        'Unless you don’t confirm, the offer expires. → ____________',
        'We won’t ship until you will pay. → ____________',
        'If the duty rises, our cost rising too. → ____________',
    ]),
    ('ex', 'H. Match the cost (1–5) to what it pays for (a–e).'),
    ('items', [
        'freight  ____   a. the government, on imported goods',
        'customs duty  ____   b. our own profit',
        'clearance fee  ____   c. the ship to Lattakia',
        'inland transport  ____   d. the agent at the port',
        'margin  ____   e. the trucks to the depot',
    ]),
    ('ex', 'I. Put the price build-up in order (1–6).'),
    ('items', [
        '(  )  add the clearance fee',
        '(  )  start with the unit price',
        '(  )  add the margin',
        '(  )  add the customs duty',
        '(  )  convert into the selling currency',
        '(  )  add the inland transport',
    ]),
    ('ex', 'Can-Do check. Tick what you can do.'),
    ('check', [
        'I can read and check a supplier’s offer.',
        'I can make a conditional offer.',
        'I can explain how we get from cost to selling price.',
        'I can write a counter-offer.',
    ]),
]

# ============================================================ PART 11
B += [
    ('bar', 'Part 11  ·  Foundations for Further Study', 'FINANCE'),
    ('h3', 'Concept Spotlight: Every price is a sentence with an “if” in it'),
    ('fig', F.icon_row('A price is never only a number', 'WHAT THE NUMBER DEPENDS ON', [
        ('scale', 'quantity'), ('calendar', 'date'), ('ship', 'terms'),
        ('money', 'currency'), ('clock', 'how long it holds'),
    ]), 'Change any one of these, and the number changes.'),
    ('p', 'In this unit the grammar and the business were the same thing. The first conditional '
          'is not a tense you learn for an exam. It is how commerce actually speaks. If you take '
          'two thousand tonnes, we will reduce the price. Unless you pay the deposit, we will '
          'not start. We will ship as soon as the money clears. Every one of those sentences is '
          'a price with a condition attached, and in business a price without a condition barely '
          'exists.'),
    ('p', 'This is worth sitting with, because people new to trade often hear a number and '
          'think they have heard the answer. They have not. They have heard one branch of a '
          'sentence. Six hundred and forty dollars a tonne is true if the quantity is five '
          'hundred, if the terms are CFR, if you confirm this month, if you pay thirty per cent '
          'in advance, and if the market does not move. Take away any of those, and the number '
          'quietly stops being true.'),
    ('p', 'Once you see this, a negotiation stops being a fight about one number. It becomes an '
          'exchange of conditions. Rami could not win on quantity, so he bought the discount '
          'with speed: confirm this week instead of next month. That is the whole craft. You '
          'rarely get something for nothing, but you can very often get something for something '
          'else — and the something else need not be money. It can be time, certainty, a longer '
          'relationship, or a smaller risk for the other side.'),
    ('p', 'Someone will object that this is just haggling, and that an honest company should '
          'name one fair price and keep it. There is something in that, and a company that '
          'changes its price every week will not be trusted. But naming a price without naming '
          'its conditions is not honesty; it is incompleteness. The most honest offer in this '
          'unit is Mr. Delgado’s last one, because it says exactly what would make it untrue: '
          'unless the steel market moves more than three per cent.'),
    ('p', 'So when you write a price in English, write the whole sentence. How much, for how '
          'many, on what terms, in what currency, and until when. A number alone invites an '
          'argument later. A number with its conditions is a promise both sides can keep.'),
    ('ex', 'A. Understanding check. Answer in your own words.'),
    ('items', [
        'Why does the writer say the first conditional is “how commerce actually speaks”?',
        'What mistake do people new to trade make when they hear a number?',
        'What did Rami use to buy the discount, since he could not win on quantity?',
        'Why is Mr. Delgado’s last offer called the most honest one?',
    ]),
    ('ex', 'B. Apply it. Do this task with a partner.'),
    ('p', 'Take one price from your own work. Write it as a full sentence: how much, for how '
          'many, on what terms, in what currency, and until when. Then ask your partner to find '
          'the condition you forgot.'),
    ('ex', 'C. Micro-writing (optional).'),
    ('p', 'Write a few sentences (50–70 words) offering a customer a conditional discount. Use '
          'the first conditional twice and “unless” once. Example: “If you order …, we will … . '
          'Unless …, we cannot … .”'),
]

TERMS = [
    ('offer', 'a price a supplier proposes'),
    ('quotation', 'a written price from a supplier'),
    ('counter-offer', 'a different offer, in reply'),
    ('negotiate', 'to talk until both sides agree'),
    ('unit price', 'the price of one tonne or one item'),
    ('total value', 'unit price multiplied by quantity'),
    ('quantity', 'how many or how much'),
    ('discount', 'money off a price'),
    ('volume discount', 'money off for a large order'),
    ('deposit', 'the first part of the money, paid early'),
    ('balance', 'the rest of the money, paid later'),
    ('payment terms', 'when and how the money is paid'),
    ('valid until', 'the last day the price is good'),
    ('firm price', 'a price that will not change'),
    ('incoterm', 'a rule saying who pays for what'),
    ('CFR', 'the seller pays the ship to our port'),
    ('FOB', 'the seller pays only to their own port'),
    ('freight', 'the cost of carrying the goods'),
    ('customs duty', 'money paid to the government on imports'),
    ('clearance fee', 'what the agent charges at the port'),
    ('inland transport', 'the trucks from the port to the depot'),
    ('landed cost', 'what the goods cost in our own depot'),
    ('cost price', 'what we pay, before our margin'),
    ('selling price', 'what the customer pays'),
    ('margin', 'what we add on top of our cost'),
    ('mark-up', 'the margin as a percentage of cost'),
    ('profit', 'what is left after all the costs'),
    ('currency', 'the money of a country'),
    ('exchange rate', 'the price of one currency in another'),
    ('convert', 'to change one currency into another'),
    ('per tonne', 'for each tonne'),
    ('storage', 'keeping goods in a warehouse'),
    ('insurance', 'protection you pay for'),
    ('risk', 'the chance that something bad will happen'),
    ('concession', 'something you give away in a negotiation'),
    ('expire', 'to come to an end, like an offer'),
]

KEY = [
    ('Warm-Up A', '1 Five hundred tonnes of steel coil at 640 dollars a tonne. 2 The ship from '
                  'the supplier’s port to Lattakia. 3 Taking 2,000 tonnes. 4 (any three) customs '
                  'duty, clearance fee, Komosh’s trucks / inland transport. 5 Because the depot '
                  'is still half full, so the steel would not sell.'),
    ('Warm-Up B', '1 T · 2 F · 3 F · 4 T · 5 F'),
    ('Warm-Up C', '1 customs duty · 2 landed · 3 margin'),
    ('Warm-Up D', 'Answers vary.'),
    ('P1 A', '0 e · 1 d · 2 a · 3 f · 4 c · 5 b · 6 h · 7 g'),
    ('P1 B', '1 unit price · 2 total value · 3 deposit · 4 balance · 5 valid until · '
             '6 volume discount'),
    ('P1 C', '1 c · 2 a · 3 b · 4 e · 5 d'),
    ('P1 D', '1 margin · 2 tonne · 3 increase · 4 litre · 5 depot'),
    ('P1 E', '1 b · 2 b · 3 a · 4 b'),
    ('P1 F', 'The supplier charges it: unit price, freight · Syria charges it: customs duty, '
             'clearance fee · We add it: margin, selling price'),
    ('P1 G', '1 c · 2 a · 3 b · 4 e · 5 d · 6 f'),
    ('P1 H', '1 unit · 2 duty · 3 landed · 4 margin · 5 pounds · 6 discount'),
    ('P2 A', '1 falls … will buy · 2 won’t ship … don’t pay · 3 is … will take · '
             '4 will lose … wait'),
    ('P2 B', '1 Unless we pay the deposit, they won’t ship. 2 Unless the price falls, we will '
             'buy less. 3 Unless you confirm today, the offer will expire. 4 Unless they send '
             'the certificate, customs will stop it.'),
    ('P2 C', '1 when · 2 as soon as · 3 until · 4 When'),
    ('P2 D', '1 clears · 2 goes … will rise · 3 sign · 4 arrive … will unload'),
    ('P2 E', '1 If you order 1,000 tonnes, we will give you four per cent. 2 If you pay in '
             'fifteen days, we will give you an extra two per cent. 3 Unless you pay a deposit, '
             'we won’t start production. 4 If you confirm today, we will hold the price.'),
    ('P2 F', '1 b · 2 a · 3 d · 4 c · 5 e'),
    ('P2 G', '1 We will pay when the goods arrive. 2 Unless you pay, we won’t ship. '
             '3 If the price falls, we will buy more. 4 We won’t ship until you confirm.'),
    ('P2 H', 'Answers vary — one first conditional, one “won’t … until …”.'),
    ('P2 I', '1 If · 2 unless · 3 as soon as / when · 4 unless · 5 when / as soon as'),
    ('P2 J', '1 If we take 1,200 tonnes, will you give us five per cent? 2 If you give us '
             'ninety days to pay, we will confirm today. 3 If we confirm today, will you hold '
             'the price for sixty days? 4 If we order over 1,000 tonnes, will you deliver free '
             'to the depot?'),
    ('P3 D1 A', '1 Because the depot is half full and the steel would sit until spring. '
                '2 1,200 tonnes, and he asks for five per cent. 3 Confirmation before Friday, '
                'and the quantity of 1,200. 4 Until the end of November, unless the steel market '
                'moves more than three per cent. 5 As soon as Mr. Tarek signs.'),
    ('P3 D1 B', '1 F · 2 T · 3 T · 4 T · 5 F'),
    ('P3 D1 C', '1 If you confirm before Friday, I can do five per cent · 2 unless the steel '
                'market moves more than three per cent · 3 I will send you our confirmation as '
                'soon as Mr. Tarek signs'),
    ('P3 D2 A', '1 About 712 dollars a tonne; she wants to know what the market can take. '
                '2 They will walk (go to the Homs yard). 3 Because its steel is five millimetre '
                'and the Homs yard’s is thinner. 4 Change the price again before the winter.'),
    ('P3 D2 B', '1 B · 2 B · 3 B · 4 C'),
    ('P4 B', 'Answers vary — one conditional offer from your own role (see the phrases).'),
    ('P5 A', '1 CFR Lattakia pays for the ship to Lattakia; it does not pay the customs duty, '
             'the clearance agent, the trucks or the unloading. 2 What one tonne costs standing '
             'in your own warehouse, with every bill paid. 3 Because the freight is lower, so '
             'the landed cost can be lower even with a higher unit price. 4 The goods may wait '
             'three weeks at customs, which costs more than the saving. 5 The exchange rate can '
             'move between the day the price is agreed and the day the money is paid.'),
    ('P5 B', '1 B · 2 C · 3 C · 4 B · 5 C'),
    ('P5 C', '1 dishonest · 2 landed · 3 exchange rate · 4 risk'),
    ('P5 D', '1 place · 2 ship / freight · 3 transport · 4 landed · 5 certificate · 6 rate'),
    ('P5 F', '1 F · 2 T · 3 NOT GIVEN · 4 T'),
    ('P6 A', '1 The quantity — the depot is half full, so 2,000 tonnes would sit until spring. '
             '2 1,200 tonnes, in exchange for five per cent. 3 It is more than double the first '
             'quantity, and Bashak will confirm this week instead of next month.'),
    ('P6 B', 'Order: 2 (Dear Mr. Delgado,) · 4 (Thank you for your offer…) · 1 (Our difficulty '
             'is the quantity.) · 3 (If we increase our order…) · 6 (I will send our '
             'confirmation before Friday.) · 5 (Best regards, Rami)'),
    ('P7 A', '1 It takes the supplier’s number at the top and walks down to the price the '
             'customer sees. 2 Because it is a percentage of the value. 3 Because it is a fixed '
             'amount per container, shared over more tonnes. 4 Because adding it earlier prices '
             'on the wrong base. 5 Because it names the line that moved, which a customer can '
             'check and accept.'),
    ('P7 B', '1 terms · 2 percentage · 3 container · 4 margin'),
    ('P7 D', '1 USD 712 · 2 USD 732 · 3 about USD 797 · 4 USD 608'),
    ('P8 A', '1 About seventy-four thousand dollars over six months. 2 That the bigger '
             'percentage is not the better deal — you take what you can sell. 3 That the price '
             'is firm until 30 November unless the market moves more than three per cent; he '
             'wants it in the contract, not on the telephone. 4 Converting 712 dollars into '
             'Syrian pounds for Maya’s price card. 5 Because the deal abroad and the price at '
             'home were decided together.'),
    ('P8 B', '1 dollars · 2 money · 3 sell · 4 firm · 5 pounds'),
    ('P8 D', '1 storage · 2 insurance · 3 convert'),
    ('P10 A', '1 unit price · 2 volume discount · 3 landed cost · 4 margin · 5 deposit'),
    ('P10 B', '1 confirm … will hold · 2 pay · 3 arrives · 4 won’t release · 5 rises … will go · '
              '6 changes … will change'),
    ('P10 C', '1 Five per cent on 1,200 tonnes. 2 That Al-Hasan confirmed before Friday. '
              '3 712 dollars.'),
    ('P10 D', '1 Confirming before Friday. 2 Until the end of November, unless the steel market '
              'moves more than three per cent. 3 As soon as the deposit clears.'),
    ('P10 G', '1 If you order 2,000 t, we will give 7%. 2 We will pay when the goods arrive. '
              '3 Unless you confirm, the offer expires. 4 We won’t ship until you pay. '
              '5 If the duty rises, our cost will rise too.'),
    ('P10 H', '1 c · 2 a · 3 d · 4 e · 5 b'),
    ('P10 I', '2 start with the unit price · 4 add the customs duty · 1 add the clearance fee · '
              '6 add the inland transport · 3 add the margin · 5 convert into the selling '
              'currency — i.e. the order is: unit price, duty, clearance, transport, margin, '
              'convert.'),
    ('P11 A', '1 Because almost every real price is spoken as a condition: if you take X, we '
              'will do Y. 2 They think a number is the answer, when it is only one branch of a '
              'sentence. 3 Speed — confirming this week instead of next month. 4 Because it '
              'states exactly what would make it untrue.'),
]

UNIT = dict(
    n=3,
    title='Offers, Prices and the Margin',
    grammar='first conditional · unless · time clauses (when / as soon as / until)',
    function='Finance + Trade',
    candos=[
        'I can read and check a supplier’s offer',
        'I can make a conditional offer',
        'I can explain how we get from cost to selling price',
        'I can write a counter-offer',
    ],
    cando_line='You can argue a price, and explain how a cost becomes a selling price.',
    blocks=B,
    terms=TERMS,
    key=KEY,
    teaser=F.scene_banner(
        'Unit 4 — the order, and the money behind it',
        [('m', GREY), ('m', NAVY)],
        ['“We’re paying thirty per cent', 'on Sunday.”'],
        'WHAT HAPPENS NEXT',
        ['The purchase order goes out', 'The bank opens the transfer',
         'Who signs, and for how much', 'When production starts'],
        quote='“Nothing moves until the deposit clears.”'),
)
