# -*- coding: utf-8 -*-
"""Unit 2 — Sourcing a Supplier.
Strand A: the enquiry to three new suppliers abroad (Rami, Mr. Delgado).
Strand B: the internal request and the Group's own buying rules (Eng. Bilal, Fadi).
"""
import frames as F
from art import NAVY, BLUE, ORANGE, GREEN, GREEN_D, PURPLE, GREY

B = []

PEOPLE = [
    ('Rami', 'Bashak · Imports', 'm', GREEN_D),
    ('Fadi', 'Head office · Admin', 'm', PURPLE),
    ('Mr. Tarek', 'General Manager', 'm', BLUE),
    ('Eng. Bilal', 'Maham · Site', 'm', GREY),
    ('Mr. Delgado', 'Westgate Metals', 'm', NAVY),
    ('Ms. Chen', 'NorthBridge', 'w', PURPLE),
]

# ============================================================ unit openers
B += [
    ('fig', F.process_strip('How we find a new supplier', [
        'We need something new', 'Write to three suppliers',
        'Compare the replies', 'Check the company', 'Place a trial order',
    ]), 'Five steps, and we never skip one.'),
    ('fig', F.team_strip('The people in this unit', PEOPLE),
     'Two sides: the suppliers abroad, and our own rules at home.'),
]

# ============================================================ WARM UP
B += [
    ('bar', 'Warm Up', 'TRADE'),
    ('p', 'Look at the pictures. Answer these questions before you read.'),
    ('items', [
        'When your company needs something new, who finds it?',
        'What must you know about a company before you buy from it?',
        'How many prices do you ask for before you decide?',
    ]),
    ('h3', 'Read'),
    ('p', 'Chemac, the cement factory in Aleppo, has a problem. Its packing machine is twenty '
          'years old. It breaks every month. The factory has to stop, and the bags wait. '
          'Chemac needs two new machines, and it needs them before the winter.'),
    ('p', 'The request comes to head office on a Monday morning. Fadi reads it and takes it to '
          'Rami at Bashak. There is one difficulty. Bashak has bought steel for years, and fuel '
          'for years. It has never bought a machine.'),
    ('p', '“We have no supplier for this,” Rami says. “I have to find one.” Mr. Tarek nods. '
          '“Then follow the rule. Three enquiries, three replies, and nothing signed until we '
          'have checked the company.”'),
    ('p', 'The rule is clear, and everybody at Al-Hasan knows it. For anything new, you must '
          'write to at least three suppliers. You must put the enquiry in writing, never on the '
          'telephone only. You don’t have to choose the cheapest, but you have to explain your '
          'choice. And you mustn’t sign anything over fifty thousand dollars without the board.'),
    ('p', 'So Rami writes. He writes to NorthBridge, because Ms. Chen has just opened a machines '
          'division. He writes to Westgate Metals, a company he has never used. And he writes to '
          'a third company in the same market. Each enquiry says the same four things: who we '
          'are, what we need, how many, and when.'),
    ('p', 'Two days later the first reply arrives. It is from Mr. Delgado at Westgate. “We can '
          'supply two machines,” he writes, “but you must order before the end of the month. '
          'Our lead time is ninety days.” Rami reads it twice. Ninety days takes them past the '
          'winter. He picks up the phone.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What is wrong with Chemac’s packing machine?   (it is twenty years old and breaks every month)',
        'Why has Bashak never bought a machine before?',
        'What are the four rules for buying something new? Name two.',
        'Why does Rami write to NorthBridge?',
        'What four things does every enquiry say?',
        'What is the problem with Westgate’s reply?',
    ]),
    ('ex', 'B. True or False? Write T or F. (0 is done for you.)'),
    ('items0', [
        'Chemac needs one new machine.   (F)',
        'Bashak has bought machines before.   ____',
        'You must write to at least three suppliers.   ____',
        'You have to choose the cheapest offer.   ____',
        'You mustn’t sign over $50,000 without the board.   ____',
        'Westgate’s lead time is ninety days.   ____',
    ]),
    ('ex', 'C. Find the words. Find a word or phrase in the text that means: (0 is done for you.)'),
    ('items0', [
        'a letter asking a supplier for information → (an enquiry)',
        'the time between the order and the delivery → the l____________ t____________',
        'on paper, not spoken → in w____________',
        'to find a supplier for something → to s____________ it',
    ]),
    ('ex', 'D. Over to you. Answer about yourself.'),
    ('items', [
        'What rules does your company have for buying something new?',
        'Do you have to ask permission? Who from?',
        'What must a new supplier show you before you buy?',
    ]),
]

# ============================================================ PART 1
B += [
    ('bar', 'Part 1  ·  Vocabulary and Terminology', 'TRADE'),
    ('h3', 'Asking a supplier'),
    ('fig', F.icon_row('From the enquiry to the trial order', 'WHAT WE SEND AND GET BACK', [
        ('doc', 'enquiry'), ('globe', 'supplier'), ('calendar', 'lead time'),
        ('scale', 'compare'), ('tick', 'trial order'),
    ]), 'The words of sourcing, in the order you meet them.'),
    ('ex', 'A. Match each word (1–7) with its meaning (a–h). There is one you do not need. '
           '(0 is done for you.)'),
    ('items0', [
        'enquiry  (d)',
        'quotation  ____   a. the smallest amount a supplier will sell',
        'lead time  ____   b. a small first order, to test a supplier',
        'minimum order  ____   c. a paper that proves something is true',
        'trial order  ____   d. a letter asking a supplier for information',
        'certificate  ____   e. the time between the order and the delivery',
        'shortlist  ____   f. a written price from a supplier',
        'catalogue  ____   g. the two or three best, chosen from many',
        '          h. a book of all the products a company sells',
    ]),
    ('ex', 'B. Complete the sentences with the words in the word bank.'),
    ('bank', 'Word bank:', ['enquiry', 'lead time', 'minimum order', 'catalogue',
                            'trial order', 'shortlist']),
    ('items', [
        'I have sent the same ____________ to three suppliers.',
        'Their ____________ is ninety days, which is too long for us.',
        'The ____________ is 500 tonnes, so we cannot buy 100.',
        'Please send us your ____________ and your price list.',
        'We never start big. We always place a ____________ first.',
        'Three companies replied, and we put two on the ____________.',
    ]),
    ('h3', 'What a new supplier must show us'),
    ('fig', F.label_panel('The supplier file — four papers we always ask for', [
        ('trade licence', 'the company is registered'),
        ('bank details', 'where the money goes'),
        ('certificate', 'the goods meet a standard'),
        ('two references', 'other buyers who trust them'),
    ], cols=4), 'No file, no order — the rule is the same for everyone.'),
    ('ex', 'C. Match the paper (1–4) with the question it answers (a–d).'),
    ('items', [
        'trade licence  ____   a. Who else has bought from them?',
        'bank details  ____   b. Is this a real, registered company?',
        'certificate  ____   c. Where do we send the money?',
        'references  ____   d. Are the goods good enough?',
    ]),
    ('h3', 'The three suppliers'),
    ('fig', F.label_panel('Three replies to one enquiry', [
        ('NorthBridge', 'new machines division'),
        ('Westgate Metals', '90-day lead time'),
        ('A third supplier', 'cheapest, no certificate'),
    ], cols=3), 'Three suppliers, three different problems.'),
    ('ex', 'D. Odd one out. Which word is different? Circle it.'),
    ('items', [
        'enquiry · quotation · catalogue · warehouse',
        'must · have to · mustn’t · machine',
        'licence · certificate · reference · deadline',
        'supplier · customer · vendor · seller',
        'compare · choose · decide · deliver',
    ]),
    ('ex', 'E. Choose the best answer.'),
    ('items', [
        'A written price from a supplier is a…   (a) quotation   (b) catalogue',
        'The time between order and delivery is the…   (a) deadline   (b) lead time',
        'A small first order is a…   (a) minimum order   (b) trial order',
        'A paper that proves a standard is a…   (a) certificate   (b) reference',
    ]),
    ('ex', 'F. Classify. Write each item in the correct column.'),
    ('bank', 'Items:', ['enquiry', 'trade licence', 'quotation', 'certificate',
                        'price list', 'two references']),
    ('grid', ['We send it', 'They send it', 'We ask them for it'], 3),
    ('ex', 'G. Match the two halves (1–6 with a–f).'),
    ('items', [
        'place a  ____   a. licence',
        'send an  ____   b. order',
        'a trade  ____   c. enquiry',
        'the lead  ____   d. references',
        'two  ____   e. time',
        'in  ____   f. writing',
    ]),
    ('ex', 'H. Complete the paragraph with the words in the box.'),
    ('bank', 'Box:', ['approve', 'enquiry', 'lead time', 'references', 'rule', 'trial']),
    ('p', 'Our (1)____________ is simple. For anything new, send the same (2)____________ to '
          'three suppliers. Ask every one for two (3)____________. Check the (4)____________ '
          'before you compare the prices. The General Manager must (5)____________ the choice, '
          'and we always start with a (6)____________ order.'),
]

# ============================================================ PART 2
B += [
    ('bar', 'Part 2  ·  Grammar — must · have to · mustn’t · don’t have to', 'ADMIN'),
    ('fig', F.grammar_card('must and have to — it is necessary', [
        ('must + verb', 'must', 'You must write to three suppliers.'),
        ('have to + verb', 'have to', 'We have to check the licence.'),
        ('he / she / it', 'has to', 'Rami has to find a new supplier.'),
    ], 'must has no -s and no to:  she must send  ·  NOT  she musts to send'),
     'Two ways to say that something is necessary.'),
    ('p', 'We use MUST and HAVE TO for something that is necessary. They are very close in '
          'meaning. We often use must for a rule we make ourselves, and have to for a rule that '
          'comes from outside: I must answer this email today. We have to send the certificate, '
          'because the customs office asks for it.'),
    ('fig', F.grammar_card('mustn’t and don’t have to — be careful!', [
        ('mustn’t = it is forbidden', 'mustn’t', 'You mustn’t sign without the board.'),
        ('don’t have to = it is not necessary', 'don’t have to', 'You don’t have to take the cheapest.'),
    ], 'These two are NOT the same. mustn’t = no, never.  don’t have to = you can choose.'),
     'The most useful difference in this unit.'),
    ('p', 'MUSTN’T means it is forbidden. DON’T HAVE TO means it is not necessary, but you can '
          'if you want. You mustn’t pay before the goods arrive means never do it. You don’t '
          'have to pay today means it is fine to pay later.'),
    ('fig', F.grammar_card('can — permission and ability', [
        ('permission', 'can', 'You can order up to $50,000.'),
        ('no permission', 'can’t', 'You can’t order more without the board.'),
        ('ability', 'can', 'They can supply two machines.'),
    ], 'Polite question:  Can I…?  ·  Could I…?  (more polite)'),
     'can for what is allowed, and for what is possible.'),
    ('fig', F.split_panel('Whose rule is it?',
                          'THE SUPPLIER MUST…',
                          ['send a trade licence', 'give two references',
                           'confirm the lead time in writing', 'meet the standard on the certificate'],
                          'WE HAVE TO…',
                          ['write to three suppliers', 'keep the enquiry in writing',
                           'explain our choice', 'get approval over $50,000']),
     'The same grammar, pointed in two directions.'),
    ('watch', 'mustn’t and don’t have to are not the same. You mustn’t send it = do not send it. '
              'You don’t have to send it = send it or don’t, as you like. And remember: must has '
              'no third-person -s, and never takes to.'),
    ('h3', 'Form'),
    ('p', 'must / mustn’t + verb     ·     have to / has to + verb     ·     '
          'don’t have to / doesn’t have to + verb     ·     can / can’t + verb'),
    ('ex', 'A. Complete with MUST or MUSTN’T. (0 is done for you.)'),
    ('items0', [
        'You must write to three suppliers.',
        'You ____________ sign a contract over $50,000 without the board.',
        'Every new supplier ____________ send a trade licence.',
        'We ____________ forget to ask for references.',
        'The enquiry ____________ be in writing.',
        'You ____________ promise a date before you have the lead time.',
    ]),
    ('ex', 'B. Complete with HAVE TO or HAS TO.'),
    ('items', [
        'Rami ____________ find a supplier for machines.',
        'We ____________ compare three replies.',
        'Chemac ____________ stop the line when the machine breaks.',
        'Our suppliers ____________ confirm everything in writing.',
    ]),
    ('ex', 'C. MUSTN’T or DON’T HAVE TO? Choose the right one. (0 is done for you.)'),
    ('items0', [
        'You (mustn’t / don’t have to) pay before the goods arrive. It is forbidden.   (mustn’t)',
        'You ____________ take the cheapest offer. You can choose.',
        'You ____________ tell a supplier what another supplier charges.',
        'We ____________ answer today. The deadline is Friday.',
        'You ____________ use a supplier with no trade licence.',
    ]),
    ('ex', 'D. Complete with CAN or CAN’T.'),
    ('items', [
        'Westgate ____________ supply two machines.',
        'You ____________ order over $50,000 alone — ask the board.',
        '____________ I see the catalogue, please?',
        'We ____________ wait ninety days. The winter is coming.',
    ]),
    ('ex', 'E. Make the sentence negative.'),
    ('items', [
        'We have to pay a deposit. → ____________',
        'He must sign it today. → ____________',
        'They can deliver in May. → ____________',
        'She has to answer the enquiry. → ____________',
    ]),
    ('ex', 'F. Rewrite with the word in brackets, keeping the meaning.'),
    ('items', [
        'It is necessary to send the licence. (must) → ____________',
        'It is not necessary to decide today. (have to) → ____________',
        'It is forbidden to pay in advance. (mustn’t) → ____________',
        'It is permitted to order up to $50,000. (can) → ____________',
    ]),
    ('ex', 'G. Find and correct the mistake in each sentence. (0 is done for you.)'),
    ('items0', [
        'She musts to send it. → (She must send it.)',
        'We must to write three enquiries. → ____________',
        'He have to check the licence. → ____________',
        'You don’t must pay today. → ____________',
        'Must you to ask the board? → ____________',
    ]),
    ('ex', 'H. About you. Write two sentences about your job: one with “I have to…” and one '
           'with “I don’t have to…”.'),
    ('nlines', 2),
    ('ex', 'I. Complete with must, mustn’t, have to or don’t have to.'),
    ('items', [
        'Every supplier ____________ give us two references. It is our rule.',
        'You ____________ take the cheapest — but you ____________ explain your choice.',
        'We ____________ sign anything the board has not seen.',
        'Chemac ____________ wait ninety days; we can find a faster supplier.',
        'The certificate ____________ be in English or Arabic.',
    ]),
    ('ex', 'J. Write the rule. Use must, mustn’t or don’t have to.'),
    ('items', [
        'Three enquiries, always. → You ____________',
        'Cheapest offer — your choice. → You ____________',
        'Never tell one supplier another supplier’s price. → You ____________',
        'Board approval over $50,000. → You ____________',
    ]),
]

# ============================================================ PART 3
B += [
    ('bar', 'Part 3  ·  Listening and Dialogue', 'TRADE'),
    ('fig', F.dialogue_scene(('m', GREEN_D), ['Ninety days is too long.', 'Can you do better?'],
                             ('m', NAVY), ['If you order two,', 'I can try for sixty.']),
     'Strand A · Rami calls a supplier he has never used.'),
    ('h3', 'Dialogue 1 — A first call to a new supplier (the import desk)'),
    ('p', 'Listen and read. (Your teacher will read the dialogue, or play the audio.)'),
    ('dlg', [
        ('Rami', 'Good afternoon. My name is Rami, from Bashak, part of Al-Hasan Holding Group '
                 'in Damascus. May I speak to Mr. Delgado?'),
        ('Mr. Delgado', 'Speaking. You sent us the enquiry about the packing machines.'),
        ('Rami', 'That’s right. Thank you for your reply. I have one difficulty: your lead time.'),
        ('Mr. Delgado', 'Ninety days. That is standard for us.'),
        ('Rami', 'I understand. But our factory has to have them before the winter. '
                 'Ninety days is too long. Can you do better?'),
        ('Mr. Delgado', 'Hm. If you order two machines, not one, I can try for sixty days.'),
        ('Rami', 'Two is exactly what we need. Now — before we go further, I have to ask you '
                 'for four papers.'),
        ('Mr. Delgado', 'Four?'),
        ('Rami', 'Your trade licence, your bank details, the machine certificate, and two '
                 'references. It is our rule for every new supplier. We can’t place an order '
                 'without them.'),
        ('Mr. Delgado', 'That is fair. You’ll have them tomorrow. And the order?'),
        ('Rami', 'A trial order first — the two machines. If they work well, we talk again.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'Who is Rami, and which company does he work for?   (the Import Manager, at Bashak)',
        'What is Rami’s difficulty with the reply?',
        'What does Mr. Delgado offer, and on what condition?',
        'Which four papers does Rami ask for?',
        'What happens if Bashak does not get the papers?',
        'What kind of order will Rami place first?',
    ]),
    ('ex', 'B. True or False? Write T or F.'),
    ('items', [
        'Rami has worked with Mr. Delgado before.   ____',
        'Ninety days is Westgate’s normal lead time.   ____',
        'Mr. Delgado offers sixty days for an order of two.   ____',
        'Rami will place a large first order.   ____',
        'The four papers are a rule for every new supplier.   ____',
    ]),
    ('ex', 'C. Language focus. Find in the dialogue: (0 is done for you.)'),
    ('items0', [
        'a polite way to ask for a person on the phone → (May I speak to…?)',
        'a sentence with “has to” → ____________',
        'a sentence with “can’t” → ____________',
        'a polite way to ask for something better → ____________',
    ]),
    ('fig', F.half_scene('m', GREY, ['Can you just order it?', 'We need it in October.']),
     'Strand B · a colleague asks head office to buy something.'),
    ('h3', 'Dialogue 2 — The internal request (inside the Group)'),
    ('dlg', [
        ('Eng. Bilal', 'Fadi, I need forty rolls of waterproof sheet for the Homs site. '
                       'Can you just order it?'),
        ('Fadi', 'I can’t just order it, Bilal. Do we have a supplier for waterproof sheet?'),
        ('Eng. Bilal', 'I don’t know. I only know I need it in October.'),
        ('Fadi', 'Then it is new, and new means three enquiries. That takes two weeks.'),
        ('Eng. Bilal', 'Two weeks! Can’t you make an exception? It’s a small order.'),
        ('Fadi', 'Small orders have the same rule. But you don’t have to wait for all three — '
                 'if two replies come back fast, Mr. Tarek can approve on two.'),
        ('Eng. Bilal', 'All right. What do you need from me?'),
        ('Fadi', 'The exact specification, the quantity, and your date. In writing, today.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What does Eng. Bilal need, how many, and when?',
        'Why can’t Fadi “just order it”?',
        'How long does the three-enquiry rule normally take?',
        'What is the one way to move faster, and who must agree?',
    ]),
    ('ex', 'B. Listen again and choose the best answer (A–D).'),
    ('items', [
        'Eng. Bilal needs … rolls.   A) fourteen  B) forty  C) four  D) four hundred',
        'The site is at…   A) Aleppo  B) Damascus  C) Homs  D) Lattakia',
        'Small orders follow…   A) no rule  B) a faster rule  C) the same rule  D) the board’s rule',
        'Fadi asks Bilal for the specification, the quantity and the…   A) price  B) date  '
        'C) supplier  D) licence',
    ]),
]

# ============================================================ PART 4
B += [
    ('bar', 'Part 4  ·  Speaking and Your Role', 'TRADE'),
    ('fig', F.label_panel('Phrases for asking, and for saying no politely', [
        ('Could you send me…?', 'asking for information'),
        ('We have to ask you for…', 'asking because of a rule'),
        ('I’m afraid we can’t…', 'a polite refusal'),
        ('You don’t have to…', 'removing a worry'),
        ('Is there any way you could…?', 'asking for better terms'),
        ('Before we go further, …', 'adding a condition'),
    ], cols=3), 'Saying what is necessary without sounding rude.'),
    ('ex', 'A. Role-play: a first call to a new supplier. Student A is the buyer and asks for '
           'the four papers. Student B is the supplier and asks why. Then change roles.'),
    ('items', [
        'A: Introduce yourself and your company.',
        'B: Say you remember the enquiry.',
        'A: Say what you have to ask for, and why it is a rule.',
        'B: Ask one question about the rule.',
        'A: Explain, and say what you can’t do without the papers.',
        'B: Agree, and ask about the order.',
    ]),
    ('ex', 'B. Your Role. Say one rule you have to follow at work. Use the phrases below. '
           '(Choose your real role.)'),
    ('items', [
        '[Trade] Import Manager: “We must write to three suppliers before we buy.”',
        '[Trade] Sales: “I can give 5% myself. Over that, I have to ask my manager.”',
        '[Finance] Financial Controller: “Nothing over $50,000 goes out without the board.”',
        '[Finance] Accountant: “Every invoice must match an order. No order, no payment.”',
        '[Logistics] Freight: “The packing list must travel with the goods. Always.”',
        '[Admin] Assistant: “Requests have to come in writing, not by telephone.”',
    ]),
    ('fig', F.label_panel('Every job has its own rule', [
        ('Imports', 'three enquiries, always'),
        ('Sales', '5% alone, more needs the manager'),
        ('Finance', 'nothing over $50,000 alone'),
        ('Accounts', 'no order, no payment'),
        ('Logistics', 'the packing list travels with the goods'),
        ('Admin', 'requests in writing, not by phone'),
    ], cols=3), 'Six roles, six rules — the same grammar.'),
    ('ex', 'C. Ask your partner. Walk around and ask three people.'),
    ('items', [
        'What is one thing you must do every day at work?',
        'What is one thing you mustn’t do?',
        'What is one thing you don’t have to do, but you do anyway?',
    ]),
    ('ex', 'D. Discuss. Ask and answer.'),
    ('items', [
        'Is the three-enquiry rule a good rule? When is it a problem?',
        'Should a small order follow the same rules as a big one? Why?',
    ]),
]

# ============================================================ PART 5
B += [
    ('bar', 'Part 5  ·  Extended Reading', 'TRADE'),
    ('h3', 'Why we ask three companies, not one'),
    ('fig', F.route_strip('One enquiry, three answers, one decision', [
        ('doc', 'The same enquiry'), ('globe', 'Three suppliers'),
        ('scale', 'Compare'), ('tick', 'Choose and explain'),
    ]), 'The same question, asked three times.'),
    ('p', 'A buyer who asks one company has no choice. The supplier names a price, and the buyer '
          'can only say yes or no. A buyer who asks three companies has information, and '
          'information is power. This is why almost every serious company in the world has the '
          'same rule: for anything new, ask at least three.'),
    ('p', 'But the rule only works if the three enquiries are the same. If you ask one supplier '
          'for 500 tonnes and another for 600, you cannot compare the prices. If you tell one '
          'supplier your date and forget to tell another, their lead times mean nothing. So a '
          'good buyer writes the enquiry once, and sends the same words to everybody.'),
    ('p', 'When the replies come back, the cheapest is not always the best. A low price with a '
          'ninety-day lead time can cost more than a high price with a thirty-day one, because '
          'the factory has to stop while it waits. A low price from a company with no '
          'certificate can cost everything, because the goods may be stopped at customs. The '
          'buyer has to look at four things together: the price, the lead time, the quality, '
          'and the company itself.'),
    ('p', 'There is one more reason, and it is not about money. Three enquiries protect the '
          'buyer. When Rami explains to the board why he chose Westgate, he does not have to '
          'say “I liked them”. He can show three replies and one clear reason. Nobody can say '
          'he made a private arrangement. In a group where one person spends other people’s '
          'money, that protection matters.'),
    ('p', 'The rule has a cost: it is slow. Two weeks for three replies is a long time when a '
          'factory is stopping every month. Good companies therefore keep a list of approved '
          'suppliers, checked in advance, so that the next time the same thing is needed, the '
          'work is already done. The three enquiries are for the first time. After that, you '
          'have a supplier.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What choice does a buyer who asks only one company have?   (only yes or no)',
        'Why must the three enquiries use the same words?',
        'Why can a cheap offer with a long lead time cost more?',
        'What four things must a buyer look at together?',
        'How do three enquiries protect the buyer?',
        'What is the cost of the rule, and how do good companies reduce it?',
    ]),
    ('ex', 'B. Choose the best answer (A–D).'),
    ('items', [
        'Information gives the buyer…   A) time  B) power  C) money  D) friends',
        'You cannot compare prices if the quantities are…   A) large  B) small  C) different  D) equal',
        'Goods with no certificate may be stopped at…   A) the depot  B) customs  C) the bank  D) the factory',
        'Three enquiries protect the buyer from the accusation of a…   A) high price  '
        'B) late delivery  C) private arrangement  D) small order',
        'An approved supplier list makes the next purchase…   A) cheaper  B) faster  C) bigger  D) safer',
    ]),
    ('ex', 'C. Find a word or phrase in the text that means:'),
    ('items', [
        'to keep someone safe → to p____________ them',
        'a secret deal between two people → a p____________ arrangement',
        'checked before you need it → a____________ in advance',
        'to look at two things to see which is better → to c____________ them',
    ]),
    ('ex', 'D. Complete the summary with ONE word in each gap.'),
    ('p', 'A good buyer asks at least (1)____________ suppliers, and sends them all the '
          '(2)____________ enquiry. The (3)____________ offer is not always the best, because a '
          'long (4)____________ time can stop the factory. Three replies also (5)____________ '
          'the buyer, who can show a clear reason. The rule is (6)____________, so companies '
          'keep a list of approved suppliers.'),
    ('ex', 'E. Discuss. Talk in pairs.'),
    ('items', [
        'Does your company compare suppliers? How many do you ask?',
        'When is it right to break the rule and ask only one?',
    ]),
    ('ex', 'F. True or False? (about the reading). Write T, F or NOT GIVEN.'),
    ('items', [
        'The cheapest offer is always the best.   ____',
        'The same enquiry must go to every supplier.   ____',
        'Most companies ask five suppliers.   ____',
        'An approved supplier list saves time later.   ____',
    ]),
]

# ============================================================ PART 6
B += [
    ('bar', 'Part 6  ·  Writing (a real email)', 'ADMIN'),
    ('h3', 'Model — An enquiry to a new supplier'),
    ('fig', F.doc_card('The four things every enquiry must say', 'Enquiry',
                       [('1  Who we are', 'company, group, country'),
                        ('2  What we need', 'the exact specification'),
                        ('3  How many', 'quantity and units'),
                        ('4  When', 'the date we need it by'),
                        ('Also ask for', 'price, lead time, terms'),
                        ('Always ask for', 'licence, certificate, references')], accent=BLUE),
     'Miss one of the four, and the reply is useless.'),
    ('p', 'Subject: Enquiry — two bag-packing machines. Dear Mr. Delgado, My name is Rami and I '
          'am the Import Manager at Bashak Co., part of Al-Hasan Holding Group in Damascus, '
          'Syria. We would like a quotation for two automatic bag-packing machines for 50 kg '
          'cement bags. We need them delivered before 1 November. Could you please send us your '
          'unit price, your lead time, your minimum order and your payment terms? We also have '
          'to ask every new supplier for a trade licence, a product certificate and two trade '
          'references. We cannot place an order without them. Thank you. I look forward to your '
          'reply. Best regards, Rami Import Manager, Bashak Co.'),
    ('ex', 'A. Answer about the email. (0 is done for you.)'),
    ('items0', [
        'Who is writing, and from which company?   (Rami, Import Manager at Bashak Co.)',
        'What exactly does he want, and how many?',
        'By what date does he need them?',
        'Which three papers does he ask for, and why?',
    ]),
    ('ex', 'B. Put the email in order (1–6).'),
    ('items', [
        '(  )  Could you please send us your unit price and lead time?',
        '(  )  Dear Mr. Delgado,',
        '(  )  Best regards, Rami',
        '(  )  My name is Rami and I am the Import Manager at Bashak Co.',
        '(  )  We also have to ask every new supplier for three papers.',
        '(  )  We would like a quotation for two bag-packing machines.',
    ]),
    ('h3', 'Guided writing'),
    ('ex', 'C. Now you write. Write an enquiry (70–100 words) to a supplier you have never used. '
           'Use “must” or “have to” at least twice, and ask at least three questions.'),
    ('p', 'Plan:  1) “Dear …,”   2) “My name is … and I am the … at ….”   3) “We would like a '
          'quotation for ….”   4) “We need them by ….”   5) “Could you please send us …?”   '
          '6) “We have to ask every new supplier for ….”   7) “Best regards, …”'),
    ('p', 'Sentence starters:  “We would like a quotation for…” · “Could you please send us…?” · '
          '“We have to ask every new supplier for…” · “We cannot place an order without…”'),
    ('lines', 5),
    ('ex', 'D. Checklist. Tick each one when you have checked your enquiry.'),
    ('check', [
        'I said who I am and which company I work for.',
        'I said exactly what I need, with a quantity.',
        'I gave the date I need it by.',
        'I asked for the price AND the lead time.',
        'I used “must” or “have to” for our rules.',
    ]),
]

# ============================================================ PART 7
B += [
    ('bar', 'Part 7  ·  Trade-Skills Track', 'ADMIN'),
    ('h3', 'The supplier check-list: approving a company before you buy'),
    ('fig', F.doc_card('The new-supplier check-list', 'Supplier approval',
                       [('Company name', 'Westgate Metals & Equipment'),
                        ('Trade licence', 'received ✓'),
                        ('Bank details', 'received ✓'),
                        ('Product certificate', 'received ✓'),
                        ('Reference 1', 'checked ✓'),
                        ('Reference 2', 'waiting'),
                        ('Approved by', '____________')], accent=GREEN_D),
     'Nothing moves until every line has a tick.'),
    ('p', 'A check-list looks like a small thing. It is not. It is the difference between a '
          'company that knows who it is paying and a company that hopes. Every line on the '
          'list answers one question, and the order matters.'),
    ('p', 'The trade licence answers: is this a real company? A licence has a number and a date, '
          'and you can check both. The bank details answer: where does the money go? This is '
          'the line that criminals attack, so a change of bank details must always be confirmed '
          'by telephone, never by email alone. The certificate answers: are the goods good '
          'enough? And the two references answer the question no paper can answer: does this '
          'company keep its promises?'),
    ('p', 'References are the line people skip, because telephoning a stranger is '
          'uncomfortable. It is also the most useful line on the list. You do not have to ask a '
          'long question. Three are enough: Did they deliver on time? Was the quality what they '
          'promised? Would you buy from them again? A buyer who asks those three questions '
          'learns more in five minutes than from a hundred pages of catalogue.'),
    ('fig', F.dos_donts('Approving a new supplier: do’s and don’ts',
                        ['check the licence number',
                         'confirm bank details by telephone',
                         'telephone both references',
                         'start with a trial order'],
                        ['accept a scan with no number',
                         'change bank details from an email',
                         'skip the references',
                         'start with your biggest order']),
     'Four habits that prevent most sourcing accidents.'),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What question does the trade licence answer?',
        'Why must a change of bank details be confirmed by telephone?',
        'What question can no paper answer?',
        'Why do people skip the references?',
        'What are the three questions to ask a reference?',
    ]),
    ('ex', 'B. Listen and complete. A manager explains the check-list. Write the missing word.'),
    ('items', [
        'Manager: The trade ____________ tells us the company is real.',
        'Manager: Never change ____________ details from an email alone.',
        'Manager: Always telephone both ____________.',
        'Manager: And always start with a ____________ order.',
    ]),
    ('ex', 'C. Practice. Make a check-list for YOUR company. Write five lines that a new '
           'supplier must complete before you buy. Then compare with your partner.'),
    ('ex', 'D. Must, mustn’t or don’t have to? Complete the rule.'),
    ('items', [
        'You ____________ check the licence number.',
        'You ____________ accept new bank details from an email.',
        'You ____________ telephone both references, not only one.',
        'You ____________ use the supplier again after the trial — it is your choice.',
    ]),
]

# ============================================================ PART 8
B += [
    ('bar', 'Part 8  ·  Consolidation', 'TRADE'),
    ('h3', 'Two weeks, two problems'),
    ('fig', F.split_panel('The two sides of one sourcing job',
                          'ABROAD · the three replies',
                          ['NorthBridge — new, no machine references',
                           'Westgate — 60 days if we take two',
                           'Third supplier — cheapest, no certificate',
                           'All three sent the same enquiry'],
                          'IN SYRIA · the rules',
                          ['Three enquiries, always',
                           'Four papers from every new supplier',
                           'Board approval over $50,000',
                           'Trial order first']),
     'The supplier decides the price; the rule decides the process.'),
    ('p', 'Two weeks later, Rami has three replies on his desk. The third supplier is the '
          'cheapest by eleven per cent. It has no certificate. Rami puts it to one side. '
          '“Eleven per cent is nothing,” he says, “if customs stops the machine at the port.”'),
    ('p', 'That leaves NorthBridge and Westgate. NorthBridge is a company the Group knows well, '
          'and Ms. Chen has been a good partner for a year. But her machines division is new, '
          'and she cannot give a single machine reference. Westgate is a company nobody knows, '
          'but it has two references, a certificate, and sixty days.'),
    ('p', 'Mr. Tarek asks the hard question. “You trust Ms. Chen. Does that count?” Rami thinks '
          'about it. “It counts,” he says, “but not for machines. She has never sold us one.” '
          'So Westgate wins the trial order, and Rami writes to Ms. Chen the same afternoon. He '
          'tells her why, honestly, and he asks her to send a reference when she has one.'),
    ('p', 'The order goes to the board, because two machines cost fifty-eight thousand dollars. '
          'Mr. Adnan reads the three replies and the check-list, and he signs in less than a '
          'minute. “This is what the rule is for,” he says. “Not to slow you down. To let me '
          'sign quickly.”'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done.)'),
    ('items0', [
        'How many replies does Rami have, and after how long?   (three, after two weeks)',
        'Why does Rami reject the cheapest supplier?',
        'What is the problem with NorthBridge?',
        'What does Westgate have that NorthBridge does not?',
        'Why does the order have to go to the board?',
        'What does Mr. Adnan say the rule is for?',
    ]),
    ('ex', 'B. Complete each sentence with ONE word from the text. (0 is done for you.)'),
    ('items0', [
        'The third supplier is the cheapest by eleven per cent.',
        'It has no ____________, so Rami puts it to one side.',
        'Ms. Chen cannot give a single machine ____________.',
        'Westgate wins the ____________ order.',
        'The two machines cost fifty-eight thousand ____________.',
        'Mr. Adnan says the rule lets him ____________ quickly.',
    ]),
    ('ex', 'C. Discuss. Talk in pairs.'),
    ('items', [
        'Was Rami right to choose a company nobody knows over a partner he trusts?',
        'How would you write the email to Ms. Chen?',
    ]),
    ('ex', 'D. Find a word from the text that means: (0 is done for you.)'),
    ('items0', [
        'to say no to an offer → (to reject it)',
        'telling the truth → h____________',
        'in less than sixty seconds → in less than a m____________',
        'to make something slower → to s____________ it d____________',
    ]),
]

# ============================================================ PART 9
B += [
    ('bar', 'Part 9  ·  Case Studies and Decisions', 'ADMIN'),
    ('fig', F.dos_donts('Sourcing: do’s and don’ts',
                        ['send all three the same words',
                         'ask for the four papers every time',
                         'compare price and lead time together',
                         'write down why you chose'],
                        ['change the quantity between enquiries',
                         'make an exception for a friend',
                         'choose on price alone',
                         'decide by telephone with no note']),
     'Most sourcing mistakes are made before any money moves.'),
    ('h3', 'Case 1 — The supplier who will not send references  (strand A · abroad)'),
    ('p', 'A supplier abroad sends you a licence, bank details and a certificate. For the two '
          'references, they write: “Our customers are confidential. We cannot give names.” '
          'Their price is the best you have seen, and your factory is waiting.'),
    ('p', 'Choose the best action and say why.'),
    ('items', [
        '(  )  Accept it. Three papers out of four is enough.',
        '(  )  Offer a very small trial order, paid after delivery, and keep the rule for the big order.',
        '(  )  Reject them at once and use a slower supplier.',
        '(  )  Ask your manager to sign an exception, and say nothing to the board.',
    ]),
    ('p', 'Write one sentence to the supplier explaining what you can do without references.'),
    ('lines', 2),
    ('h3', 'Case 2 — “Just this once”  (strand B · inside the Group)'),
    ('p', 'A colleague from another Group company asks you to order from one supplier only. '
          '“I know them, they are good, and we have no time.” If you follow the rule, the goods '
          'arrive two weeks late. If you break it, nobody will know.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What could go wrong if you break the rule and the supplier fails?',
        'What can you offer your colleague instead of breaking the rule?',
        'Write one polite sentence that says no, and offers the alternative.',
    ]),
    ('h3', 'Case 3 — The trusted partner and the better stranger  (where the strands meet)'),
    ('p', 'A partner you have worked with for a year wants the order. A company nobody knows has '
          'better references for this product, a certificate, and a shorter lead time. The '
          'partner will be disappointed, and you have to work with them next month on something '
          'else.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'Should past experience with a partner count for a product they have never supplied? Why?',
        'How do you protect the relationship while you give the order to someone else?',
        'Write one sentence to the partner, explaining your decision honestly.',
    ]),
]

# ============================================================ PART 10
B += [
    ('bar', 'Part 10  ·  Review and Can-Do', 'TRADE'),
    ('ex', 'A. Vocabulary. Complete the sentence.'),
    ('items', [
        'A letter asking a supplier for information is an ____________.',
        'The time between the order and the delivery is the ____________ ____________.',
        'A small first order, to test a supplier, is a ____________ order.',
        'A paper that proves the goods meet a standard is a ____________.',
        'The smallest amount a supplier will sell is the ____________ order.',
    ]),
    ('ex', 'B. Grammar. Complete with must, mustn’t, have to, has to or don’t have to.'),
    ('items', [
        'Every new supplier ____________ send a trade licence.',
        'You ____________ sign over $50,000 without the board. It is forbidden.',
        'Rami ____________ find a supplier for machines.',
        'You ____________ take the cheapest offer — you can choose.',
        'The enquiry ____________ be in writing.',
        'We ____________ compare three replies before we decide.',
    ]),
    ('ex', 'C. Reading. Read the short text and answer.'),
    ('p', 'At Al-Hasan, anything new needs three enquiries. Every new supplier must send a trade '
          'licence, bank details, a certificate and two references. You don’t have to take the '
          'cheapest offer, but you have to explain your choice. Nothing over $50,000 is signed '
          'without the board. The first order with a new supplier is always a trial order.'),
    ('items', [
        'How many enquiries are needed for something new?',
        'Which four papers must a new supplier send?',
        'What must you do if you don’t take the cheapest?',
    ]),
    ('ex', 'D. Listening. Listen and answer. (Teacher reads.)'),
    ('p', '[Teacher reads] “Our lead time is ninety days. But if you order two machines, I can '
          'try for sixty. Before that, you have to send us your order in writing. And we can’t '
          'start until we receive your deposit.”'),
    ('items', [
        'What is the normal lead time, and what can it become?',
        'What must the buyer send in writing?',
        'What can’t the supplier do until the deposit arrives?',
    ]),
    ('ex', 'E. Speaking. Work in pairs. Telephone a new supplier: introduce yourself, say what '
           'you need, and ask for the four papers.'),
    ('ex', 'F. Writing. Write two sentences about your own work: one with “I have to…” and one '
           'with “I mustn’t…”.'),
    ('nlines', 2),
    ('ex', 'G. Error correction. Find and correct one mistake in each sentence.'),
    ('items', [
        'She must to send the licence. → ____________',
        'He have to check the references. → ____________',
        'You don’t must pay in advance. → ____________',
        'Must you to ask the board? → ____________',
        'We musts write three enquiries. → ____________',
    ]),
    ('ex', 'H. Match the paper (1–5) to the question it answers (a–e).'),
    ('items', [
        'trade licence  ____   a. Where does the money go?',
        'bank details  ____   b. Do they keep their promises?',
        'certificate  ____   c. Is this a real company?',
        'references  ____   d. How long until delivery?',
        'lead time  ____   e. Are the goods good enough?',
    ]),
    ('ex', 'I. Match the rule (1–4) to the right modal (a–d).'),
    ('items', [
        'Three enquiries, always.  ____   a. You don’t have to…',
        'Board approval over $50,000.  ____   b. You mustn’t…',
        'Cheapest offer is your choice.  ____   c. You must…',
        'Never share another supplier’s price.  ____   d. You can’t … without…',
    ]),
    ('ex', 'Can-Do check. Tick what you can do.'),
    ('check', [
        'I can write a clear enquiry to a new supplier.',
        'I can say what a supplier must and must not do.',
        'I can explain our own rules for buying.',
        'I can compare two suppliers simply.',
    ]),
]

# ============================================================ PART 11
B += [
    ('bar', 'Part 11  ·  Foundations for Further Study', 'TRADE'),
    ('h3', 'Concept Spotlight: A rule is a promise you make before you are tempted'),
    ('fig', F.icon_row('Why the rule exists before the problem does', 'WRITE IT · THEN FOLLOW IT', [
        ('doc', 'the rule'), ('clock', 'the hurry'), ('scale', 'the choice'),
        ('tick', 'the record'), ('stamp', 'the signature'),
    ]), 'The rule is written on a calm day, for a difficult one.'),
    ('p', 'In this unit you met four words that look small and carry a lot: must, mustn’t, have '
          'to, don’t have to. They are the grammar of rules. And rules are strange things. '
          'Nobody argues with them on a quiet Tuesday. Everybody argues with them on the day '
          'the factory stops.'),
    ('p', 'That is exactly why they exist. A rule is a promise a company makes to itself before '
          'it is tempted. On a calm day, everyone agrees that three enquiries are sensible. On '
          'the day the machine breaks, three enquiries feel like a wall. The rule is there to '
          'hold the company to the decision it made when it was thinking clearly.'),
    ('p', 'Someone will object: surely a good manager should use judgement, not follow rules '
          'blindly? That is fair, and it is why the difference between mustn’t and don’t have '
          'to matters so much. Good rules are careful about which is which. You mustn’t pay '
          'before you check the bank details — that is absolute, because the loss cannot be '
          'repaired. You don’t have to take the cheapest offer — that is judgement, because a '
          'human being has to weigh four things at once. A company that makes everything a '
          'mustn’t makes its people stupid. A company that makes nothing a mustn’t loses money '
          'it cannot get back.'),
    ('p', 'Notice too what Mr. Adnan said. He did not say the rule protects the company from '
          'the supplier. He said it lets him sign quickly. A rule that is followed turns a hard '
          'decision into an easy one, because the work has already been done. The three '
          'replies, the check-list and the reason are on the table. The signature takes a '
          'minute.'),
    ('p', 'So when you learn must, mustn’t and don’t have to in English, you are learning more '
          'than grammar. You are learning to say which things are absolute, which are '
          'necessary, and which are free. People who can say that clearly, in any language, are '
          'trusted with other people’s money.'),
    ('ex', 'A. Understanding check. Answer in your own words.'),
    ('items', [
        'Why does the writer say rules are “strange things”?',
        'What is a rule, in the writer’s definition?',
        'What is the difference between a “mustn’t” rule and a “don’t have to” rule?',
        'Why does a followed rule make a signature fast?',
    ]),
    ('ex', 'B. Apply it. Do this task with a partner.'),
    ('p', 'Write three rules for your own team: one with must, one with mustn’t, and one with '
          'don’t have to. Then swap with your partner and ask: is each one in the right group? '
          'Could any “mustn’t” really be a “don’t have to”?'),
    ('ex', 'C. Micro-writing (optional).'),
    ('p', 'Write a few sentences (50–70 words) about one rule at your work. Say what it is, why '
          'it exists, and one day when it was difficult to follow. Use must, mustn’t and have '
          'to at least once each.'),
]

TERMS = [
    ('enquiry', 'a letter asking a supplier for information'),
    ('quotation', 'a written price from a supplier'),
    ('catalogue', 'a book of all the products a company sells'),
    ('price list', 'a list of prices by product'),
    ('source (v)', 'to find a supplier for something'),
    ('lead time', 'the time between the order and the delivery'),
    ('minimum order', 'the smallest amount a supplier will sell'),
    ('trial order', 'a small first order, to test a supplier'),
    ('shortlist', 'the best two or three, chosen from many'),
    ('specification', 'the exact details of what we need'),
    ('sample', 'a small piece, to show the quality'),
    ('certificate', 'a paper proving the goods meet a standard'),
    ('trade licence', 'a paper proving the company is registered'),
    ('reference', 'another buyer who can speak for a supplier'),
    ('bank details', 'the account the money is sent to'),
    ('approve', 'to say officially that something can happen'),
    ('approval', 'official permission'),
    ('authorise', 'to give someone the right to act'),
    ('requirement', 'something that is necessary'),
    ('criteria', 'the things you judge a choice by'),
    ('compare', 'to look at two things to see which is better'),
    ('reliable', 'always doing what was promised'),
    ('registered', 'officially listed with the authorities'),
    ('confidential', 'secret; not to be shared'),
    ('exception', 'a case where the rule is not followed'),
    ('policy', 'the rules a company has written down'),
    ('deadline', 'the last possible date'),
    ('in writing', 'on paper or in an email, not spoken'),
    ('confirm', 'to say again that something is true'),
    ('reject', 'to say no to an offer'),
    ('must', 'it is necessary'),
    ('mustn’t', 'it is forbidden'),
    ('have to', 'it is necessary, often from outside'),
    ('don’t have to', 'it is not necessary; you can choose'),
    ('can / can’t', 'it is allowed / not allowed'),
    ('be allowed to', 'to have permission'),
]

KEY = [
    ('Warm-Up A', '1 Because Bashak has only ever bought steel and fuel. 2 (any two) write to at '
                  'least three suppliers; put the enquiry in writing; you don’t have to take the '
                  'cheapest but you must explain your choice; nothing over $50,000 without the '
                  'board. 3 Because Ms. Chen has just opened a machines division. 4 Who we are, '
                  'what we need, how many, and when. 5 The lead time is ninety days, which takes '
                  'them past the winter.'),
    ('Warm-Up B', '1 F · 2 T · 3 F · 4 T · 5 T'),
    ('Warm-Up C', '1 lead time · 2 writing · 3 source'),
    ('Warm-Up D', 'Answers vary.'),
    ('P1 A', '0 d · 1 f · 2 e · 3 a · 4 b · 5 c · 6 g · 7 h'),
    ('P1 B', '1 enquiry · 2 lead time · 3 minimum order · 4 catalogue · 5 trial order · 6 shortlist'),
    ('P1 C', '1 b · 2 c · 3 d · 4 a'),
    ('P1 D', '1 warehouse · 2 machine · 3 deadline · 4 customer · 5 deliver'),
    ('P1 E', '1 a · 2 b · 3 b · 4 a'),
    ('P1 F', 'We send it: enquiry · They send it: quotation, price list · '
             'We ask them for it: trade licence, certificate, two references'),
    ('P1 G', '1 b · 2 c · 3 a · 4 e · 5 d · 6 f'),
    ('P1 H', '1 rule · 2 enquiry · 3 references · 4 lead time · 5 approve · 6 trial'),
    ('P2 A', '1 mustn’t · 2 must · 3 mustn’t · 4 must · 5 mustn’t'),
    ('P2 B', '1 has to · 2 have to · 3 has to · 4 have to'),
    ('P2 C', '1 don’t have to · 2 mustn’t · 3 don’t have to · 4 mustn’t'),
    ('P2 D', '1 can · 2 can’t · 3 Can · 4 can’t'),
    ('P2 E', '1 We don’t have to pay a deposit. 2 He mustn’t sign it today. '
             '3 They can’t deliver in May. 4 She doesn’t have to answer the enquiry.'),
    ('P2 F', '1 You must send the licence. 2 You don’t have to decide today. '
             '3 You mustn’t pay in advance. 4 You can order up to $50,000.'),
    ('P2 G', '1 We must write three enquiries. 2 He has to check the licence. '
             '3 You don’t have to pay today. 4 Must you ask the board?'),
    ('P2 H', 'Answers vary — one “I have to…”, one “I don’t have to…”.'),
    ('P2 I', '1 must / has to · 2 don’t have to … have to · 3 mustn’t · 4 doesn’t have to · '
             '5 must / has to'),
    ('P2 J', '1 You must send three enquiries. 2 You don’t have to take the cheapest offer. '
             '3 You mustn’t tell one supplier another supplier’s price. '
             '4 You must get board approval over $50,000.'),
    ('P3 D1 A', '1 The Import Manager at Bashak, part of Al-Hasan Holding Group. 2 The lead time '
                'of ninety days is too long. 3 Sixty days, if Bashak orders two machines. '
                '4 Trade licence, bank details, machine certificate, two references. '
                '5 They can’t place an order. 6 A trial order — the two machines.'),
    ('P3 D1 B', '1 F · 2 T · 3 T · 4 F · 5 T'),
    ('P3 D1 C', '1 our factory has to have them before the winter · 2 We can’t place an order '
                'without them · 3 Can you do better?'),
    ('P3 D2 A', '1 Forty rolls of waterproof sheet, in October. 2 Because there is no supplier '
                'for it yet, so the three-enquiry rule applies. 3 About two weeks. '
                '4 Approve on two replies instead of three; Mr. Tarek must agree.'),
    ('P3 D2 B', '1 B · 2 C · 3 C · 4 B'),
    ('P4 B', 'Answers vary — one rule from your own role (see the phrases).'),
    ('P5 A', '1 Only yes or no. 2 So that the replies can be compared; different quantities or '
             'dates make the prices and lead times meaningless. 3 Because the factory has to '
             'stop while it waits. 4 The price, the lead time, the quality, and the company '
             'itself. 5 The buyer can show three replies and one clear reason, so nobody can '
             'say there was a private arrangement. 6 It is slow; companies keep a list of '
             'approved suppliers checked in advance.'),
    ('P5 B', '1 B · 2 C · 3 B · 4 C · 5 B'),
    ('P5 C', '1 protect · 2 private · 3 approved · 4 compare'),
    ('P5 D', '1 three · 2 same · 3 cheapest · 4 lead · 5 protect · 6 slow'),
    ('P5 F', '1 F · 2 T · 3 NOT GIVEN · 4 T'),
    ('P6 A', '1 Rami, Import Manager at Bashak Co. 2 Two automatic bag-packing machines for '
             '50 kg cement bags. 3 Before 1 November. 4 A trade licence, a product certificate '
             'and two trade references — because they cannot place an order without them.'),
    ('P6 B', 'Order: 2 (Dear Mr. Delgado,) · 4 (My name is Rami…) · 6 (We would like a '
             'quotation…) · 1 (Could you please send us…) · 5 (We also have to ask…) · '
             '3 (Best regards, Rami)'),
    ('P7 A', '1 Is this a real company? 2 Because that is the line criminals attack. '
             '3 Does this company keep its promises? 4 Because telephoning a stranger is '
             'uncomfortable. 5 Did they deliver on time? Was the quality what they promised? '
             'Would you buy from them again?'),
    ('P7 B', '1 licence · 2 bank · 3 references · 4 trial'),
    ('P7 D', '1 must · 2 mustn’t · 3 must · 4 don’t have to'),
    ('P8 A', '1 Three replies, after two weeks. 2 It has no certificate, so customs could stop '
             'the machine. 3 Its machines division is new and it has no machine reference. '
             '4 Two references, a certificate, and a sixty-day lead time. 5 Because the two '
             'machines cost $58,000, which is over $50,000. 6 To let him sign quickly, not to '
             'slow people down.'),
    ('P8 B', '1 certificate · 2 reference · 3 trial · 4 dollars · 5 sign'),
    ('P8 D', '1 honest · 2 minute · 3 slow … down'),
    ('P10 A', '1 enquiry · 2 lead time · 3 trial · 4 certificate · 5 minimum'),
    ('P10 B', '1 must / has to · 2 mustn’t · 3 has to · 4 don’t have to · 5 must · 6 have to'),
    ('P10 C', '1 Three. 2 A trade licence, bank details, a certificate and two references. '
              '3 Explain your choice.'),
    ('P10 D', '1 Ninety days; sixty if two machines are ordered. 2 The order. '
              '3 Start (work) until the deposit arrives.'),
    ('P10 G', '1 She must send the licence. 2 He has to check the references. '
              '3 You don’t have to pay in advance. 4 Must you ask the board? '
              '5 We must write three enquiries.'),
    ('P10 H', '1 c · 2 a · 3 e · 4 b · 5 d'),
    ('P10 I', '1 c · 2 d · 3 a · 4 b'),
    ('P11 A', '1 Because nobody argues with them on a quiet day, and everybody argues with them '
              'on a difficult one. 2 A promise a company makes to itself before it is tempted. '
              '3 A “mustn’t” is absolute, because the loss cannot be repaired; a “don’t have '
              'to” is judgement, weighing several things at once. 4 Because the work is already '
              'done — the replies, the check-list and the reason are on the table.'),
]

UNIT = dict(
    n=2,
    title='Sourcing a Supplier',
    grammar='must · have to · mustn’t · don’t have to · can for permission',
    function='Trade + Admin',
    candos=[
        'I can write a clear enquiry to a new supplier',
        'I can say what a supplier must and must not do',
        'I can explain our own rules for buying',
        'I can compare two suppliers simply',
    ],
    cando_line='You can ask a new supplier for what you need, and say what the rules are.',
    blocks=B,
    terms=TERMS,
    key=KEY,
    teaser=F.scene_banner(
        'Unit 3 — the price, and what is behind it',
        [('m', GREY), ('w', GREEN)],
        ['“Their price is in dollars.', 'Ours has to be in pounds.”'],
        'FROM COST TO SELLING PRICE',
        ['The supplier’s unit price', 'Freight, duty and clearance',
         'What it costs us on the shelf', 'What we add on top'],
        quote='“If we order 2,000 t, will you drop 7%?”'),
)
