# -*- coding: utf-8 -*-
"""Unit 7 — Selling in Syria.
Strand A: the project customer — Eng. Bilal of Maham, buying for a site.
Strand B: the retail counter at Alten IL — Ms. Maya and a walk-in customer.
"""
import frames as F
from art import NAVY, BLUE, ORANGE, GREEN, GREEN_D, PURPLE, GREY

B = []

PEOPLE = [
    ('Ms. Maya', 'Alten IL · Retail', 'w', ORANGE),
    ('Eng. Bilal', 'Maham · Site', 'm', GREY),
    ('Lina', 'Financial Manager', 'w', GREEN),
    ('Ms. Dana', 'Depot · Quality', 'h', GREEN),
    ('Karim', 'Fin. Controller', 'm', GREY),
    ('Mr. Tarek', 'General Manager', 'm', BLUE),
]

# ============================================================ unit openers
B += [
    ('fig', F.split_panel('Two customers, two different sales',
                          'THE PROJECT CUSTOMER',
                          ['200 tonnes for one site', 'Asks for credit and delivery',
                           'Negotiates for a week', 'Wants a written quotation'],
                          'THE COUNTER CUSTOMER',
                          ['Twenty bags of cement', 'Pays now, carries it away',
                           'Decides in two minutes', 'Wants a receipt']),
     'The same steel, sold two completely different ways.'),
    ('fig', F.team_strip('The people in this unit', PEOPLE),
     'One sale takes a week. The other takes two minutes.'),
]

# ============================================================ WARM UP
B += [
    ('bar', 'Warm Up', 'TRADE'),
    ('p', 'Look at the pictures. Answer these questions before you read.'),
    ('items', [
        'Who buys from your company — businesses, or ordinary people, or both?',
        'What is the difference between selling to a business and selling to a person?',
        'When a colleague takes a message for you, what do you need them to write down?',
    ]),
    ('h3', 'Read'),
    ('p', 'Six thousand four hundred tonnes of steel are in the depot, and steel on a shelf is '
          'not money. Somebody has to sell it, and at Al-Hasan that happens in two completely '
          'different rooms.'),
    ('p', 'The first room is a site office in Homs. Eng. Bilal of Maham is building a '
          'warehouse, and he needs two hundred tonnes. He telephones on Sunday and says he '
          'wants a quotation. Then he asks three questions that every project customer asks: '
          'is the price delivered to site or collected from the depot, can he pay in sixty days '
          'instead of thirty, and what happens if he needs another fifty tonnes in March.'),
    ('p', 'Lina writes the quotation. She knows the landed cost, so she knows what she can give '
          'away and what she cannot. She tells him that the price includes delivery to Homs, '
          'that sixty days is possible on his first order, and that March steel will be quoted '
          'in March because nobody knows the exchange rate.'),
    ('p', 'The second room is a shop in Rural Damascus. A man comes in and asks whether Alten '
          'IL has cement. Ms. Maya says they have, and he buys twenty bags. The whole sale '
          'takes two minutes, he pays cash, and he carries the bags to his van himself. He will '
          'never negotiate, never ask for credit, and never read a quotation.'),
    ('p', 'In the evening Ms. Maya telephones Lina with the thing that actually matters. '
          '“Eleven people asked for five-millimetre steel bar this week,” she says. “I told them '
          'we didn’t stock it. Three of them said they would go to Homs for it.”'),
    ('p', 'Lina writes it down. Six thousand four hundred tonnes of coil in the depot, and '
          'eleven people walking out of a shop asking for bar. The steel the Group bought and '
          'the steel the market wants are not the same steel.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'Why must the steel be sold?   (steel on a shelf is not money)',
        'What does Eng. Bilal need, and what three questions does he ask?',
        'Why can Lina decide what to give away?',
        'What three answers does she give him?',
        'How long does the sale at the shop take, and how does the customer pay?',
        'What does Ms. Maya report in the evening, and why does it matter?',
    ]),
    ('ex', 'B. True or False? Write T or F. (0 is done for you.)'),
    ('items0', [
        'Steel in the depot is already money.   (F)',
        'Eng. Bilal needs two hundred tonnes.   ____',
        'Lina refuses sixty-day payment.   ____',
        'The shop customer pays cash and carries the bags himself.   ____',
        'Eleven people asked for steel bar.   ____',
        'The depot stocks what those eleven people wanted.   ____',
    ]),
    ('ex', 'C. Find the words. Find a word or phrase in the text that means: (0 is done for you.)'),
    ('items0', [
        'a customer who buys for a building project → (a project customer)',
        'to pay later instead of now → to buy on c____________',
        'brought to the customer’s place → d____________ to site',
        'to take the goods from the depot yourself → to c____________ them',
    ]),
    ('ex', 'D. Over to you. Answer about yourself.'),
    ('items', [
        'Does your company give credit? To whom, and for how long?',
        'What do your customers ask for that you do not have?',
        'Who takes messages in your office, and how do they pass them on?',
    ]),
]

# ============================================================ PART 1
B += [
    ('bar', 'Part 1  ·  Vocabulary and Terminology', 'TRADE'),
    ('h3', 'The quotation'),
    ('fig', F.doc_card('The parts of a quotation', 'Quotation Q-1184',
                       [('Customer', 'Maham Co. · Homs site'),
                        ('Product', 'Steel coil, 5 mm'),
                        ('Quantity', '200 tonnes'),
                        ('Unit price', 'SYP … / tonne, delivered'),
                        ('Delivery', 'to site, Homs, within 7 days'),
                        ('Payment', '60 days, first order only'),
                        ('Valid until', '14 days from today'),
                        ('Prepared by', 'Lina, Financial Manager')], accent=GREEN_D),
     'Eight lines. Leave one out and the customer will ask.'),
    ('ex', 'A. Match each word (1–7) with its meaning (a–h). There is one you do not need. '
           '(0 is done for you.)'),
    ('items0', [
        'quotation  (d)',
        'trade customer  ____   a. a customer who walks into the shop',
        'retail customer  ____   b. paying later, not now',
        'walk-in  ____   c. a business that buys to use or sell on',
        'credit terms  ____   d. a written price for a customer',
        'delivered price  ____   e. a person buying for themselves',
        'collection  ____   f. the customer takes the goods away',
        'lead  ____   g. a price that includes transport to the customer',
        '          h. a possible customer who has shown interest',
    ]),
    ('ex', 'B. Complete the sentences with the words in the word bank.'),
    ('bank', 'Word bank:', ['quotation', 'credit terms', 'delivered', 'collection',
                            'in stock', 'valid']),
    ('items', [
        'I will send you a written ____________ this afternoon.',
        'Our ____________ are thirty days for account customers.',
        'The price is ____________ to your site in Homs.',
        'If you prefer ____________, the price is lower.',
        'Yes, we have it ____________ — two hundred tonnes in the depot.',
        'The offer is ____________ for fourteen days.',
    ]),
    ('h3', 'Two kinds of sale'),
    ('fig', F.icon_row('Where the money comes from', 'THREE ROUTES TO MARKET', [
        ('building', 'projects'), ('shelf', 'wholesale'), ('shop', 'retail'),
        ('truck', 'delivered'), ('money', 'cash'),
    ]), 'The same tonne of steel, three different customers.'),
    ('ex', 'C. Match the customer (1–5) with what they want (a–e).'),
    ('items', [
        'a site engineer  ____   a. twenty bags, now, paid in cash',
        'a wholesale buyer  ____   b. a written quotation and sixty days',
        'a walk-in customer  ____   c. a price per tonne for a full truck',
        'an account customer  ____   d. a monthly invoice, not a receipt',
        'a new customer  ____   e. to see the product before buying',
    ]),
    ('h3', 'Passing on what the customer said'),
    ('fig', F.label_panel('Verbs for reporting', [
        ('say', 'He said (that) he needed…'),
        ('tell', 'He told me (that) he needed…'),
        ('ask', 'She asked if we had it.'),
        ('explain', 'I explained that the price…'),
        ('promise', 'They promised to deliver…'),
        ('agree', 'He agreed to pay in 60 days.'),
    ], cols=3), 'Six verbs that carry a message from one person to another.'),
    ('ex', 'D. Odd one out. Which word is different? Circle it.'),
    ('items', [
        'quotation · offer · price list · depot',
        'say · tell · ask · deliver',
        'cash · credit · invoice · gauge',
        'walk-in · retail · counter · wholesale',
        'in stock · out of stock · available · delivered',
    ]),
    ('ex', 'E. Choose the best answer.'),
    ('items', [
        'A price that includes transport is a…   (a) delivered price   (b) collection price',
        'A business that buys to sell on is a…   (a) retail customer   (b) trade customer',
        'A possible customer who has shown interest is a…   (a) lead   (b) walk-in',
        'Paying later, not now, is buying on…   (a) credit   (b) cash',
    ]),
    ('ex', 'F. Classify. Write each item in the correct column.'),
    ('bank', 'Items:', ['a written quotation', 'a receipt', 'sixty days credit',
                        'cash at the counter', 'delivery to site', 'twenty bags']),
    ('grid', ['The project customer', 'The counter customer', 'Either'], 3),
    ('ex', 'G. Match the two halves (1–6 with a–f).'),
    ('items', [
        'credit  ____   a. price',
        'a delivered  ____   b. customer',
        'a trade  ____   c. terms',
        'out of  ____   d. stock',
        'valid  ____   e. for 14 days',
        'to close  ____   f. the sale',
    ]),
    ('ex', 'H. Complete the paragraph with the words in the box.'),
    ('bank', 'Box:', ['asked', 'credit', 'delivered', 'quotation', 'stock', 'told']),
    ('p', 'Eng. Bilal (1)____________ for two hundred tonnes. Lina sent him a written '
          '(2)____________ with a (3)____________ price to Homs. She (4)____________ him that '
          'sixty days of (5)____________ was possible on a first order. The steel was in '
          '(6)____________, so delivery was within seven days.'),
]

# ============================================================ PART 2
B += [
    ('bar', 'Part 2  ·  Grammar — reported speech: say · tell · ask', 'TRADE'),
    ('fig', F.grammar_card('say or tell?', [
        ('no person after it', 'say', 'He said (that) he needed 200 tonnes.'),
        ('a person after it', 'tell', 'He told me (that) he needed 200 tonnes.'),
        ('never', 'say me', 'NOT: He said me that…'),
    ], 'tell + somebody + that…   ·   say + that… (no person)'),
     'The difference that every learner gets wrong once.'),
    ('p', 'Use SAY when you do not name the listener: She said that the price included '
          'delivery. Use TELL when you do: She told him that the price included delivery. We '
          'never say “she said me”, and we never say “she told that”.'),
    ('fig', F.grammar_card('the verb steps back one tense', [
        ('present → past', 'need → needed', '“I need 200 t.” → He said he needed 200 t.'),
        ('present cont. → past cont.', 'am waiting → was waiting', '“I am waiting.” → She said she was waiting.'),
        ('will → would', 'will go → would go', '“We will go to Homs.” → They said they would go.'),
    ], 'that is optional:  He said (that) he needed it.'),
     'What was present becomes past.'),
    ('p', 'When we report what somebody said, the verb usually steps back one tense. “We have '
          'it in stock” becomes She said they had it in stock. “I will pay in sixty days” '
          'becomes He said he would pay in sixty days. We also change the pronouns: I becomes '
          'he or she, and we becomes they.'),
    ('fig', F.grammar_card('reporting a question', [
        ('yes / no question', 'ask if / whether', '“Do you have cement?” → He asked if we had cement.'),
        ('wh- question', 'ask + wh-', '“When can you deliver?” → She asked when we could deliver.'),
        ('word order', 'statement order', 'NOT: He asked did we have cement.'),
    ], 'No question mark, no “do / does / did”, and the subject comes first.'),
     'A reported question is not a question any more.'),
    ('p', 'When we report a question, we use ASK, and the words go back into statement order. '
          'For a yes/no question we add IF or WHETHER. “Is it in stock?” becomes He asked if it '
          'was in stock. For a wh- question we keep the question word: “Where is the site?” '
          'becomes She asked where the site was.'),
    ('fig', F.split_panel('The same week, reported twice',
                          'FROM THE SITE · what Bilal said',
                          ['He said he needed 200 tonnes.',
                           'He asked if the price was delivered.',
                           'He asked whether he could pay in 60 days.',
                           'He told Lina he would confirm on Thursday.'],
                          'FROM THE SHOP · what Maya said',
                          ['She said eleven people had asked for bar.',
                           'She told Lina they didn’t stock it.',
                           'She said three of them would go to Homs.',
                           'She asked when the depot would get bar.']),
     'Two conversations, carried to one desk.'),
    ('watch', 'Never use “say” with a person: say that…, but tell somebody that…. And in a '
              'reported question, do not keep the question word order or the auxiliary: He '
              'asked if we had it, not He asked did we have it.'),
    ('h3', 'Form'),
    ('p', 'say (that) + clause     ·     tell + somebody + (that) + clause     ·     '
          'ask + (somebody) + if / whether + statement     ·     '
          'ask + (somebody) + wh-word + statement'),
    ('ex', 'A. SAY or TELL? Complete the sentence. (0 is done for you.)'),
    ('items0', [
        'He said that he needed 200 tonnes.',
        'She ____________ me the price included delivery.',
        'They ____________ they would confirm on Thursday.',
        'I ____________ him that we had it in stock.',
        'Maya ____________ that eleven people had asked for bar.',
    ]),
    ('ex', 'B. Report the statement. (0 is done for you.)'),
    ('items0', [
        '“I need 200 tonnes.” → (He said he needed 200 tonnes.)',
        '“We have it in stock.” → She said ____________',
        '“I will pay in sixty days.” → He said ____________',
        '“We are waiting for the truck.” → They said ____________',
        '“The price includes delivery.” → Lina told him ____________',
    ]),
    ('ex', 'C. Report the question with IF or WHETHER.'),
    ('items', [
        '“Do you have cement?” → He asked ____________',
        '“Is the price delivered?” → She asked ____________',
        '“Can I pay in sixty days?” → He asked ____________',
        '“Have you got five-millimetre bar?” → They asked ____________',
    ]),
    ('ex', 'D. Report the wh- question.'),
    ('items', [
        '“When can you deliver?” → She asked ____________',
        '“Where is the site?” → He asked ____________',
        '“How much is a tonne?” → The customer asked ____________',
        '“Why is it out of stock?” → They asked ____________',
    ]),
    ('ex', 'E. Change the pronouns and times.'),
    ('items', [
        '“I will send it to you today.” → He said he ____________',
        '“We delivered it yesterday.” → They said they ____________',
        '“Our price is firm this month.” → She said their price ____________',
        '“I can come tomorrow.” → He said he ____________',
    ]),
    ('ex', 'F. Match the direct words (1–5) with the report (a–e).'),
    ('items', [
        '“Do you deliver?”  ____   a. He said he would confirm on Thursday.',
        '“I’ll confirm Thursday.”  ____   b. She asked if we delivered.',
        '“We don’t stock bar.”  ____   c. He asked how much a tonne was.',
        '“How much is a tonne?”  ____   d. She told him they didn’t stock bar.',
        '“Where is the depot?”  ____   e. He asked where the depot was.',
    ]),
    ('ex', 'G. Find and correct the mistake in each sentence. (0 is done for you.)'),
    ('items0', [
        'He said me he needed 200 tonnes. → (He told me he needed 200 tonnes.)',
        'She told that the price was delivered. → ____________',
        'He asked did we have cement. → ____________',
        'She asked me where is the site. → ____________',
        'They said they will pay in sixty days. → ____________',
    ]),
    ('ex', 'H. About you. Report two things a colleague or a customer said to you this week.'),
    ('nlines', 2),
    ('ex', 'I. Complete with said, told, or asked.'),
    ('items', [
        'Eng. Bilal ____________ Lina that he needed two hundred tonnes.',
        'He ____________ whether he could pay in sixty days.',
        'Lina ____________ that March steel would be quoted in March.',
        'Maya ____________ me that eleven people had asked for bar.',
        'The customer ____________ if the shop had cement.',
    ]),
    ('ex', 'J. Report the whole conversation.'),
    ('items', [
        'Bilal: “I need 200 tonnes.” → ____________',
        'Bilal: “Is the price delivered?” → ____________',
        'Lina: “Yes, delivery to Homs is included.” → ____________',
        'Lina: “We will quote March steel in March.” → ____________',
    ]),
]

# ============================================================ PART 3
B += [
    ('bar', 'Part 3  ·  Listening and Dialogue', 'TRADE'),
    ('fig', F.dialogue_scene(('m', GREY), ['Is that delivered,', 'or do I collect?'],
                             ('w', GREEN), ['Delivered to Homs.', 'Sixty days, first order.']),
     'Strand A · a sale that takes a week.'),
    ('h3', 'Dialogue 1 — Quoting a project customer (the site call)'),
    ('p', 'Listen and read. (Your teacher will read the dialogue, or play the audio.)'),
    ('dlg', [
        ('Eng. Bilal', 'Lina, I need two hundred tonnes of five-millimetre coil for the Homs '
                       'warehouse. Can you quote me?'),
        ('Lina', 'I can. Give me your dates and I will send it this afternoon.'),
        ('Eng. Bilal', 'I need it on site by the end of the month. Three questions. Is the '
                       'price delivered, or do I collect from the depot?'),
        ('Lina', 'Delivered to Homs. Collection is cheaper, but you would need your own trucks.'),
        ('Eng. Bilal', 'Delivered. Second: can I pay in sixty days instead of thirty?'),
        ('Lina', 'On a first order, yes. After that we will look at it again together.'),
        ('Eng. Bilal', 'And third — I will probably need another fifty tonnes in March. Can you '
                       'hold this price?'),
        ('Lina', 'No. I am not going to promise a March price in November, because I do not '
                 'know the exchange rate. What I can promise is that you will get our best '
                 'price on the day, and that we will keep fifty tonnes for you.'),
        ('Eng. Bilal', 'That is honest. Put the fifty tonnes in writing and we have an '
                       'agreement.'),
        ('Lina', 'It will be in the quotation. Valid fourteen days.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What does Eng. Bilal need, and for which site?   (200 tonnes of 5 mm coil, for the Homs warehouse)',
        'What are his three questions?',
        'What is the difference between delivered and collection?',
        'What does Lina agree about payment, and with what limit?',
        'Why does she refuse to hold the March price?',
        'What two things does she promise instead?',
    ]),
    ('ex', 'B. True or False? Write T or F.'),
    ('items', [
        'The price Lina quotes includes delivery to Homs.   ____',
        'Collection would be more expensive.   ____',
        'Sixty days is offered on every order.   ____',
        'Lina agrees to fix the March price now.   ____',
        'The quotation will be valid for fourteen days.   ____',
    ]),
    ('ex', 'C. Language focus. Report these lines from the dialogue. (0 is done for you.)'),
    ('items0', [
        'Bilal: “I need two hundred tonnes.” → (He said he needed two hundred tonnes.)',
        'Bilal: “Is the price delivered?” → He asked ____________',
        'Lina: “I will send it this afternoon.” → She said ____________',
        'Lina: “I am not going to promise a March price.” → She told him ____________',
    ]),
    ('fig', F.half_scene('w', ORANGE, ['Eleven people asked', 'for bar this week.']),
     'Strand B · a sale that takes two minutes — and a message that matters more.'),
    ('h3', 'Dialogue 2 — At the counter, and afterwards (the shop)'),
    ('dlg', [
        ('Customer', 'Have you got cement?'),
        ('Ms. Maya', 'We have. Fifty-kilo bags. How many do you need?'),
        ('Customer', 'Twenty. And five-millimetre bar — have you got that?'),
        ('Ms. Maya', 'I am sorry, we don’t stock bar. Only coil, and only at the depot.'),
        ('Customer', 'Then I will get the bar in Homs and take the cement there too.'),
        ('Ms. Maya', 'Twenty bags, then. Here is your receipt.'),
        ('Ms. Maya', '[later, on the telephone] Lina, eleven people have asked me for '
                     'five-millimetre bar this week. I told every one of them that we didn’t '
                     'stock it. Three said they would go to Homs.'),
        ('Lina', 'Eleven in one week? Did they ask for coil?'),
        ('Ms. Maya', 'Nobody asks a shop for coil, Lina. They ask for bar.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What does the customer buy, and what does he not get?',
        'What will the customer do instead, and what does the shop lose?',
        'How many people asked for bar, and over what period?',
        'What does Ms. Maya mean by “nobody asks a shop for coil”?',
    ]),
    ('ex', 'B. Listen again and choose the best answer (A–D).'),
    ('items', [
        'The customer buys … bags.   A) five  B) eleven  C) twenty  D) fifty',
        'The shop does not stock…   A) cement  B) bar  C) coil  D) nails',
        'The number of people who asked for bar was…   A) three  B) five  C) eleven  D) twenty',
        'Three of them said they would go to…   A) Damascus  B) Aleppo  C) Homs  D) Lattakia',
    ]),
]

# ============================================================ PART 4
B += [
    ('bar', 'Part 4  ·  Speaking and Your Role', 'TRADE'),
    ('fig', F.label_panel('Phrases for quoting and for passing on a message', [
        ('Is that delivered or collected?', 'checking the terms'),
        ('On a first order, yes.', 'conceding with a limit'),
        ('I can’t promise …, but I can …', 'honest refusal plus offer'),
        ('He said he needed…', 'reporting a statement'),
        ('She asked if we had…', 'reporting a question'),
        ('I told him that…', 'reporting what you answered'),
    ], cols=3), 'Selling is half quoting and half carrying messages accurately.'),
    ('ex', 'A. Role-play: the project quotation. Student A is the site engineer with three '
           'questions. Student B quotes. Then change roles.'),
    ('items', [
        'A: Say what you need, how much, and by when.',
        'B: Offer to quote and ask for the dates.',
        'A: Ask whether the price is delivered or collected.',
        'B: Answer, and give the difference.',
        'A: Ask for longer credit.',
        'B: Agree with a limit, and refuse one thing honestly.',
    ]),
    ('fig', F.label_panel('Every job carries a message', [
        ('Sales', 'he said he needed 200 t'),
        ('Retail', 'eleven people asked for bar'),
        ('Depot', 'she told me it was rejected'),
        ('Imports', 'they said they would ship on the 14th'),
        ('Finance', 'he asked if he could pay in 60 days'),
        ('Admin', 'she asked when the board was meeting'),
    ], cols=3), 'Six roles, one grammar — and one chance to get it wrong.'),
    ('ex', 'B. Your Role. Report one thing a customer or colleague said to you. '
           '(Choose your real role.)'),
    ('items', [
        '[Trade] Sales: “He said he needed two hundred tonnes by the end of the month.”',
        '[Trade] Retail: “Eleven people asked me for bar this week.”',
        '[Trade] Depot: “She told me the forty tonnes were rejected.”',
        '[Trade] Import Manager: “They said they would ship on the 14th.”',
        '[Finance] Accountant: “He asked if he could pay in sixty days.”',
        '[Admin] Assistant: “She asked when the board was meeting.”',
    ]),
    ('ex', 'C. Ask your partner. Walk around and ask three people.'),
    ('items', [
        'What did a customer ask you last week?',
        'What did you have to tell a customer you could not do?',
        'What do customers ask for that your company does not sell?',
    ]),
    ('ex', 'D. Discuss. Ask and answer.'),
    ('items', [
        'Should the same salesperson handle projects and the counter? Why or why not?',
        'Who in your company hears what customers ask for but cannot buy?',
    ]),
]

# ============================================================ PART 5
B += [
    ('bar', 'Part 5  ·  Extended Reading', 'TRADE'),
    ('h3', 'The customers who leave without buying'),
    ('fig', F.route_strip('What a shop hears that a depot never does', [
        ('shop', 'A question'), ('cross', 'No, we don’t stock it'),
        ('doc', 'Nobody writes it down'), ('truck', 'He goes elsewhere'),
        ('money', 'A sale that never existed'),
    ]), 'The most valuable information in a company walks out of the door.'),
    ('p', 'Every company counts what it sells. Almost no company counts what it was asked for '
          'and could not supply. This is strange, because the second number is often more '
          'useful than the first.'),
    ('p', 'What you sold tells you about your past. It is already in the invoices, it is '
          'already money, and it describes a decision you made months ago when you bought the '
          'stock. What you were asked for tells you about your future. It is the market '
          'speaking directly, at no cost, in your own shop — and in most companies nobody is '
          'writing it down.'),
    ('p', 'The reason is simple and human. A “no” feels like a failure, and nobody wants to '
          'record their failures eleven times in a week. The shop assistant who says “sorry, we '
          'don’t stock bar” is having a small bad moment, not collecting data. And the person '
          'who buys the stock is forty kilometres away, looking at a report which contains only '
          'the things that sold.'),
    ('p', 'So the information dies at the counter. Eleven people ask for the same product. Each '
          'one is told no by a different assistant on a different day. No single person ever '
          'knows it was eleven. Then at the end of the year somebody looks at the sales figures '
          'and concludes, quite logically and quite wrongly, that there is no demand for bar.'),
    ('p', 'The fix is not expensive. It is a sheet of paper by the till with two columns: what '
          'they asked for, and whether we had it. One line a day, written by the person who '
          'heard the question. At the end of the month somebody reads it, and for the first '
          'time the company hears the sentence that was said eleven times.'),
    ('p', 'Ms. Maya did not need a system. She kept the number in her head because she was '
          'paying attention. But a company cannot depend on one person paying attention. It '
          'needs the question written down by whoever is standing there — because the market '
          'only says things once to each person, and then it walks to Homs.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What do almost no companies count?   (what they were asked for and could not supply)',
        'What does “what you sold” tell you, and what does “what you were asked for” tell you?',
        'Why does nobody write down the “no”?',
        'Why does no single person know it was eleven?',
        'What wrong conclusion is reached at the end of the year?',
        'What is the fix, and who writes it?',
    ]),
    ('ex', 'B. Choose the best answer (A–D).'),
    ('items', [
        'The second number is often … than the first.   A) smaller  B) more useful  '
        'C) harder to get  D) less honest',
        'What you sold describes…   A) the future  B) the market  C) a past decision  D) demand',
        'A “no” feels like…   A) data  B) a failure  C) a sale  D) a question',
        'The eleven requests were heard by…   A) one person  B) nobody  C) different assistants  '
        'D) the depot',
        'The fix is…   A) new software  B) a sheet of paper by the till  C) more staff  '
        'D) a bigger depot',
    ]),
    ('ex', 'C. Find a word or phrase in the text that means:'),
    ('items', [
        'how much people want to buy → d____________',
        'to decide something after thinking → to c____________',
        'the machine where customers pay in a shop → the t____________',
        'watching and noticing carefully → paying a____________',
    ]),
    ('ex', 'D. Complete the summary with ONE word in each gap.'),
    ('p', 'Companies count what they (1)____________, but not what they were (2)____________ '
          'for. The first describes the (3)____________; the second describes the future. '
          'Nobody records a “no” because it feels like a (4)____________. The fix is a sheet of '
          '(5)____________ by the till, written by the person who heard the (6)____________.'),
    ('ex', 'E. Discuss. Talk in pairs.'),
    ('items', [
        'Does your company record what customers ask for and do not get?',
        'What would you find if you recorded it for one month?',
    ]),
    ('ex', 'F. True or False? (about the reading). Write T, F or NOT GIVEN.'),
    ('items', [
        'Sales figures show what customers wanted but could not buy.   ____',
        'Recording lost requests needs expensive software.   ____',
        'Ms. Maya used a written system.   ____',
        'The writer thinks a company should not depend on one attentive person.   ____',
    ]),
]

# ============================================================ PART 6
B += [
    ('bar', 'Part 6  ·  Writing (a real email)', 'ADMIN'),
    ('h3', 'Model — A quotation to a customer'),
    ('fig', F.doc_card('The shape of a quotation email', 'Quotation',
                       [('1  Thank them', 'and repeat what they asked for'),
                        ('2  The price', 'and the unit'),
                        ('3  What is included', 'delivery, terms'),
                        ('4  What is not', 'honestly'),
                        ('5  Availability', 'in stock, lead time'),
                        ('6  Valid until', 'a date'),
                        ('7  Next step', 'what you need from them')], accent=BLUE),
     'Answer the questions they asked, in the order they asked them.'),
    ('p', 'Subject: Quotation Q-1184 — 200 t steel coil, Homs site. Dear Eng. Bilal, Thank you '
          'for your enquiry this morning. You asked for two hundred tonnes of five-millimetre '
          'coil for the Homs warehouse, on site by the end of the month. Our price is as shown '
          'in the attached quotation, per tonne, delivered to your site in Homs. Delivery is '
          'within seven days of your written order, because the material is in stock at our '
          'Damascus depot. You asked whether you could pay in sixty days. We are able to offer '
          'sixty days on this first order, and we will review the terms together afterwards. '
          'You also asked us to hold the price for a further fifty tonnes in March. I am afraid '
          'we cannot fix a March price now, but we will reserve fifty tonnes for you and quote '
          'our best price on the day. This quotation is valid for fourteen days. Please confirm '
          'in writing and we will book the delivery. Best regards, Lina Financial Manager, '
          'Al-Hasan Holding Group.'),
    ('ex', 'A. Answer about the email. (0 is done for you.)'),
    ('items0', [
        'What did Eng. Bilal ask for?   (200 tonnes of 5 mm coil, on site by the end of the month)',
        'What is included in the price, and how fast is delivery?',
        'What does Lina agree to about payment, and with what limit?',
        'What does she refuse, and what does she offer instead?',
    ]),
    ('ex', 'B. Put the email in order (1–6).'),
    ('items', [
        '(  )  This quotation is valid for fourteen days.',
        '(  )  Dear Eng. Bilal,',
        '(  )  Thank you for your enquiry this morning.',
        '(  )  We are able to offer sixty days on this first order.',
        '(  )  I am afraid we cannot fix a March price now.',
        '(  )  Best regards, Lina',
    ]),
    ('h3', 'Guided writing'),
    ('ex', 'C. Now you write. Write a quotation email (80–110 words) answering a customer who '
           'asked three questions. Report at least one of their questions, and refuse one thing '
           'honestly.'),
    ('p', 'Plan:  1) “Dear …,”   2) “Thank you for your enquiry. You asked for ….”   3) “Our '
          'price is … , delivered ….”   4) “You asked whether … . We are able to ….”   '
          '5) “I am afraid we cannot … , but we can ….”   6) “This quotation is valid for ….”   '
          '7) “Best regards, …”'),
    ('p', 'Sentence starters:  “You asked for…” · “You asked whether…” · “We are able to offer…” · '
          '“I am afraid we cannot…, but we will…” · “This quotation is valid for…”'),
    ('lines', 5),
    ('ex', 'D. Checklist. Tick each one when you have checked your quotation.'),
    ('check', [
        'I repeated what the customer asked for.',
        'I said what the price includes.',
        'I reported at least one of their questions.',
        'I refused one thing honestly and offered something instead.',
        'I gave a valid-until date and a next step.',
    ]),
]

# ============================================================ PART 7
B += [
    ('bar', 'Part 7  ·  Trade-Skills Track', 'TRADE'),
    ('h3', 'The lost-sales sheet: counting the noes'),
    ('fig', F.doc_card('The lost-sales sheet', 'Alten IL · week 47',
                       [('5 mm steel bar', '11 asked · 0 supplied'),
                        ('8 mm steel bar', '4 asked · 0 supplied'),
                        ('White cement', '3 asked · 0 supplied'),
                        ('50 kg cement', '62 asked · 41 supplied'),
                        ('Wire mesh', '2 asked · 2 supplied'),
                        ('Action', 'bar: ask depot to quote'),
                        ('Kept by', 'the person at the counter')], accent=ORANGE),
     'Two columns and a name. That is the whole system.'),
    ('p', 'The lost-sales sheet is the cheapest useful document in retail, and almost nobody '
          'keeps one. It has two columns — what they asked for, and whether we had it — and it '
          'is written by whoever is standing at the counter when the question is asked.'),
    ('p', 'Read the sheet above and you learn three things that no sales report contains. '
          'First, there is real demand for steel bar: eleven requests in one week, and four '
          'more for a different size. Second, cement is not only selling, it is running out: '
          'sixty-two people asked and forty-one were served, so twenty-one walked away from a '
          'product the Group actually imports. Third, wire mesh is fine, so nobody needs to '
          'spend a minute on it.'),
    ('p', 'Notice how different that is from a sales report. A sales report would show cement '
          'selling well and no bar sales at all. The honest conclusion from the sales report is '
          '“customers do not want bar”. The honest conclusion from the lost-sales sheet is '
          '“customers want bar and we send them to Homs every week”. Same shop, same week, '
          'opposite decisions.'),
    ('p', 'The discipline is small but it must be real. Write it at the moment, not at the end '
          'of the day, because by six o’clock you remember the difficult customers and not the '
          'quiet ones. Write what they asked for in their words, not yours. And make sure '
          'somebody reads it every month and writes an action, because a sheet nobody reads '
          'teaches the counter staff that it does not matter.'),
    ('fig', F.dos_donts('Selling and reporting back: do’s and don’ts',
                        ['write the request at the moment',
                         'use the customer’s own words',
                         'report numbers, not impressions',
                         'tell the buyer what you could not sell'],
                        ['say “a few people asked”',
                         'record it at the end of the day',
                         'assume the depot already knows',
                         'promise stock you have not checked']),
     'An impression starts an argument. A number starts an order.'),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What are the two columns on a lost-sales sheet, and who writes it?',
        'What three things does the sheet above tell you?',
        'What would a sales report show instead, and what would you wrongly conclude?',
        'Why must the sheet be written at the moment, not at the end of the day?',
        'Why must somebody read it every month?',
    ]),
    ('ex', 'B. Listen and complete. Ms. Maya explains the sheet. Write the missing word.'),
    ('items', [
        'Ms. Maya: Two columns — what they asked for, and whether we ____________ it.',
        'Ms. Maya: Write it at the ____________, not at the end of the day.',
        'Ms. Maya: Use the customer’s own ____________.',
        'Ms. Maya: Somebody must read it every month and write an ____________.',
    ]),
    ('ex', 'C. Practice. Make a lost-sales sheet for your own workplace. Write five lines for '
           'last week, as well as you can remember. Then tell your partner which line would '
           'surprise your manager most.'),
    ('ex', 'D. Read the sheet above and answer.'),
    ('items', [
        'How many requests for steel bar in total, both sizes? → ____________',
        'How many cement customers walked away? → ____________',
        'Which line needs no action at all? → ____________',
        'What one product would you ask the depot to quote first, and why? → ____________',
    ]),
]

# ============================================================ PART 8
B += [
    ('bar', 'Part 8  ·  Consolidation', 'TRADE'),
    ('h3', 'Two hundred tonnes and eleven questions'),
    ('fig', F.split_panel('What each sale told the Group',
                          'THE PROJECT · 200 tonnes sold',
                          ['Delivered to Homs, 60 days',
                           'Fifty tonnes reserved for March',
                           'One customer, one decision',
                           'Money in, in sixty days'],
                          'THE COUNTER · nothing sold',
                          ['Eleven asked for 5 mm bar',
                           'Four asked for 8 mm bar',
                           'Twenty-one cement customers turned away',
                           'No invoice, no record — until now']),
     'One sale earned money. The other told them what to buy next.'),
    ('p', 'Eng. Bilal confirms on Thursday. Two hundred tonnes leave the depot on Monday, '
          'delivered to Homs, sixty days to pay. It is the largest single sale of the quarter, '
          'and everyone is pleased.'),
    ('p', 'Lina is pleased too, but she keeps thinking about Maya’s telephone call. She goes '
          'back through the quarter and finds no record of a single request for bar — not '
          'because nobody asked, but because nobody wrote it down. Eleven in a week, in one '
          'shop, for one size.'),
    ('p', 'At the Monday meeting she puts both numbers on the table. “We sold two hundred '
          'tonnes of coil to one customer,” she says, “and we turned away at least fifteen '
          'people who wanted bar, in one shop, in one week. We do not know how many in the '
          'other two shops, because nobody is counting.”'),
    ('p', 'Mr. Tarek asks whether the Group could import bar. Rami says it would be a new '
          'product line, a new specification and probably a new supplier, which is Unit Two all '
          'over again. “Then we start with the question, not the order,” says Mr. Tarek. “Maya '
          'keeps the sheet for a month, in all three shops. If the number is real, Rami writes '
          'three enquiries.”'),
    ('p', 'Lina writes one more line in her notes, and it is the line that will matter next '
          'year: the biggest sale of the quarter came from a customer who telephoned us, and '
          'the biggest decision of the year came from a customer who walked out.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done.)'),
    ('items0', [
        'What is the largest single sale of the quarter?   (200 tonnes of coil to Eng. Bilal, delivered to Homs)',
        'What does Lina find when she goes back through the quarter?',
        'What two numbers does she put on the table?',
        'Why does Rami say importing bar is “Unit Two all over again”?',
        'What does Mr. Tarek decide to do first?',
        'What is the line Lina writes in her notes?',
    ]),
    ('ex', 'B. Complete each sentence with ONE word from the text. (0 is done for you.)'),
    ('items0', [
        'Eng. Bilal confirms on Thursday.',
        'Two hundred tonnes leave the depot on ____________.',
        'Lina finds no record of a single ____________ for bar.',
        'At least fifteen people were turned ____________ in one shop in one week.',
        'Mr. Tarek says they start with the ____________, not the order.',
        'Maya keeps the sheet for a month, in all three ____________.',
    ]),
    ('ex', 'C. Discuss. Talk in pairs.'),
    ('items', [
        'Which is the more important number — the two hundred tonnes or the eleven questions?',
        'What would you need to see before you imported a new product?',
    ]),
    ('ex', 'D. Find a word from the text that means: (0 is done for you.)'),
    ('items0', [
        'three months of the year → (a quarter)',
        'one kind of product a company sells → a product l____________',
        'sent away without buying → turned a____________',
        'to say yes to an order formally → to c____________',
    ]),
]

# ============================================================ PART 9
B += [
    ('bar', 'Part 9  ·  Case Studies and Decisions', 'TRADE'),
    ('fig', F.dos_donts('Quoting and selling: do’s and don’ts',
                        ['answer every question they asked',
                         'say what the price includes',
                         'give a valid-until date',
                         'write down what you could not supply'],
                        ['quote a price with no terms',
                         'promise stock you have not checked',
                         'agree credit you cannot approve',
                         'let a “no” leave the shop unrecorded']),
     'A quotation is a promise; make only the ones you can keep.'),
    ('h3', 'Case 1 — Credit you are not allowed to give  (strand A · the project sale)'),
    ('p', 'A good customer asks for ninety days instead of sixty. The order is large and he has '
          'always paid. Your limit is sixty days, and your Financial Controller is away for a '
          'week. The customer says he will order today if you agree.'),
    ('p', 'Choose the best action and say why.'),
    ('items', [
        '(  )  Agree ninety days. He has always paid, and the order is worth it.',
        '(  )  Offer sixty days now, say you will put ninety to the Financial Controller, and '
        'give a date for the answer.',
        '(  )  Refuse and say nothing more.',
        '(  )  Agree verbally but write sixty days on the quotation.',
    ]),
    ('p', 'Write one sentence offering what you can, and promising an answer.'),
    ('lines', 2),
    ('h3', 'Case 2 — The eleventh customer  (strand B · the counter)'),
    ('p', 'You are the only person at the counter. A customer asks for a product you do not '
          'stock. It is the eleventh time this week, and you are tired of saying no. There are '
          'three people waiting behind him.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What should you say to the customer, in one sentence, that is honest and quick?',
        'What should you do in the five seconds after he leaves, and why then?',
        'Write the one line you would put on the lost-sales sheet.',
    ]),
    ('h3', 'Case 3 — Two hundred tonnes or a new product line?  (where the strands meet)'),
    ('p', 'Your depot holds four months of coil. Your shops are turning away customers who want '
          'bar. You can discount the coil to move it faster, or you can start the work of '
          'importing bar — which will take three months and tie up money you have not got back '
          'from the coil.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What would you need to know before you spent money on bar?',
        'Can you do both at once? What is the risk if you do?',
        'Write one sentence recommending what to do first, with a reason.',
    ]),
]

# ============================================================ PART 10
B += [
    ('bar', 'Part 10  ·  Review and Can-Do', 'TRADE'),
    ('ex', 'A. Vocabulary. Complete the sentence.'),
    ('items', [
        'A written price for a customer is a ____________.',
        'A price that includes transport is a ____________ price.',
        'Paying later, not now, is buying on ____________.',
        'A customer who walks into the shop is a ____________.',
        'A possible customer who has shown interest is a ____________.',
    ]),
    ('ex', 'B. Grammar. Report these words.'),
    ('items', [
        '“I need two hundred tonnes.” → He said ____________',
        '“We have it in stock.” → She told me ____________',
        '“Do you deliver to Homs?” → He asked ____________',
        '“When can you deliver?” → She asked ____________',
        '“I will confirm on Thursday.” → He said ____________',
        '“We don’t stock bar.” → She told him ____________',
    ]),
    ('ex', 'C. Reading. Read the short text and answer.'),
    ('p', 'Eng. Bilal asked for two hundred tonnes of five-millimetre coil, delivered to his '
          'site in Homs by the end of the month. He asked whether he could pay in sixty days, '
          'and Lina told him that sixty days was possible on a first order. He also asked her '
          'to hold the price for fifty tonnes in March. She said she could not fix a March '
          'price, but she would reserve the fifty tonnes.'),
    ('items', [
        'What did Eng. Bilal ask for, and by when?',
        'What did Lina agree about payment?',
        'What did she refuse, and what did she offer instead?',
    ]),
    ('ex', 'D. Listening. Listen and answer. (Teacher reads.)'),
    ('p', '[Teacher reads] “Eleven people asked me for five-millimetre bar this week. I told '
          'every one of them that we didn’t stock it. Three said they would go to Homs. Nobody '
          'asks a shop for coil — they ask for bar.”'),
    ('items', [
        'How many people asked for bar, and over what period?',
        'What did the speaker tell them?',
        'What did three of them say they would do?',
    ]),
    ('ex', 'E. Speaking. Work in pairs. One is a customer with three questions about price, '
           'delivery and credit; one quotes and refuses one thing honestly.'),
    ('ex', 'F. Writing. Write two sentences: one reporting a statement with “told”, and one '
           'reporting a question with “asked if”.'),
    ('nlines', 2),
    ('ex', 'G. Error correction. Find and correct one mistake in each sentence.'),
    ('items', [
        'He said me he needed 200 tonnes. → ____________',
        'She told that the price was delivered. → ____________',
        'He asked did we have cement. → ____________',
        'She asked me where is the site. → ____________',
        'They said they will pay in sixty days. → ____________',
    ]),
    ('ex', 'H. Match the customer (1–5) to what they want (a–e).'),
    ('items', [
        'a site engineer  ____   a. twenty bags, cash, now',
        'a walk-in customer  ____   b. a monthly invoice',
        'an account customer  ____   c. a written quotation and credit',
        'a wholesale buyer  ____   d. to see the product first',
        'a new customer  ____   e. a price per tonne for a full truck',
    ]),
    ('ex', 'I. Put the quotation steps in order (1–6).'),
    ('items', [
        '(  )  say what the price includes',
        '(  )  thank them and repeat what they asked for',
        '(  )  give the valid-until date',
        '(  )  give the price and the unit',
        '(  )  say what you cannot do',
        '(  )  say what you need from them next',
    ]),
    ('ex', 'Can-Do check. Tick what you can do.'),
    ('check', [
        'I can sell to a trade customer and to a retail customer.',
        'I can report what a customer said or asked.',
        'I can quote a price and say what is included.',
        'I can write a quotation.',
    ]),
]

# ============================================================ PART 11
B += [
    ('bar', 'Part 11  ·  Foundations for Further Study', 'TRADE'),
    ('h3', 'Concept Spotlight: A message is a thing that can be dropped'),
    ('fig', F.icon_row('How far a sentence has to travel', 'FROM COUNTER TO DECISION', [
        ('shop', 'the customer'), ('doc', 'the assistant'), ('globe', 'the manager'),
        ('bank', 'the buyer'), ('ship', 'the supplier'),
    ]), 'Five people, and the words change shape at every step.'),
    ('p', 'Reported speech looks like a grammar exercise about moving tenses backwards. It is '
          'really about something much more important: information inside a company has to '
          'travel, and it travels by being repeated.'),
    ('p', 'Follow one sentence through this unit. A man in a shop says “Have you got '
          'five-millimetre bar?” Ms. Maya reports it: eleven people asked for five-millimetre '
          'bar. Lina reports that to a meeting. Mr. Tarek turns it into a decision: keep a '
          'sheet for a month. If the number is real, Rami writes to three suppliers, and six '
          'months later a ship leaves a port. One question at a counter, carried four times, '
          'becomes a container.'),
    ('p', 'Now notice what can go wrong, because every one of those steps is a place where the '
          'message can be dropped or changed. It can simply not be passed on, which is what '
          'happened for a whole quarter. It can lose its number — “a few people have been '
          'asking” is almost useless, and “eleven in one week” is an instruction. It can lose '
          'its exactness: bar is not coil, and somebody reporting carelessly would have said '
          '“people want steel”, which the depot already has six thousand tonnes of. And it can '
          'gain an opinion that nobody said, which is the most dangerous one of all.'),
    ('p', 'That is why the grammar matters so much more than it looks. “He said he needed two '
          'hundred tonnes” is a report. “He wants a lot” is a rumour. When you learn to say '
          'exactly who said what, and whether it was a statement or a question, you are '
          'learning to carry information without damaging it — and in a group of twelve '
          'companies, that is most of what a manager actually does.'),
    ('p', 'Someone might say that this is why you should keep everything in writing, and skip '
          'the repeating. But writing is only a slower kind of repeating, and the first step is '
          'always a person hearing something and deciding it matters. The sheet by the till '
          'does not replace the reporting. It just makes sure the first repetition happens at '
          'all.'),
    ('ex', 'A. Understanding check. Answer in your own words.'),
    ('items', [
        'What is reported speech “really about”, according to the writer?',
        'Trace the one sentence through the unit: who reports it to whom, and what does it become?',
        'Name three ways a message can be damaged as it travels.',
        'What is the difference between a report and a rumour?',
    ]),
    ('ex', 'B. Apply it. Do this task with a partner.'),
    ('p', 'Think of something a customer or colleague told you that never reached the person '
          'who could act on it. Report it properly now, in two sentences, with a number in it. '
          'Then decide together who it should have gone to, and why it stopped.'),
    ('ex', 'C. Micro-writing (optional).'),
    ('p', 'Write a few sentences (50–70 words) reporting a conversation you had at work this '
          'month. Use “said”, “told” and “asked if” at least once each, and include one number.'),
]

TERMS = [
    ('quotation', 'a written price for a customer'),
    ('quote (v)', 'to give a price'),
    ('enquiry', 'a question from a possible customer'),
    ('lead', 'a possible customer who has shown interest'),
    ('trade customer', 'a business that buys to use or sell on'),
    ('retail customer', 'a person buying for themselves'),
    ('walk-in', 'a customer who comes into the shop'),
    ('account customer', 'a customer we invoice monthly'),
    ('project customer', 'a customer buying for a building job'),
    ('credit terms', 'how long the customer has to pay'),
    ('on credit', 'paying later, not now'),
    ('cash', 'money paid at once'),
    ('delivered price', 'a price including transport to the customer'),
    ('collection', 'the customer takes the goods away'),
    ('ex-works', 'the price before any transport'),
    ('in stock', 'available now'),
    ('out of stock', 'not available now'),
    ('availability', 'what we can supply and when'),
    ('valid until', 'the last day the price is good'),
    ('receipt', 'the paper a shop gives when you pay'),
    ('till', 'where customers pay in a shop'),
    ('counter', 'the table where customers are served'),
    ('objection', 'a reason the customer gives for not buying'),
    ('close a sale', 'to get the customer to agree'),
    ('follow up', 'to contact a customer again'),
    ('lost sale', 'a customer who asked and was not supplied'),
    ('demand', 'how much people want to buy'),
    ('turn away', 'to send a customer off without a sale'),
    ('reserve (v)', 'to keep goods for one customer'),
    ('product line', 'one kind of product a company sells'),
    ('say', 'to report words, with no listener named'),
    ('tell', 'to report words to a named listener'),
    ('ask', 'to report a question'),
    ('explain', 'to make something clear'),
    ('promise', 'to say you will certainly do something'),
    ('agree', 'to say yes to something proposed'),
]

KEY = [
    ('Warm-Up A', '1 200 tonnes; he asks whether the price is delivered or collected, whether '
                  'he can pay in sixty days instead of thirty, and what happens if he needs '
                  'fifty more tonnes in March. 2 Because she knows the landed cost. '
                  '3 Delivery to Homs is included; sixty days is possible on a first order; '
                  'March steel will be quoted in March. 4 Two minutes; he pays cash and carries '
                  'the bags himself. 5 That eleven people asked for five-millimetre bar and '
                  'three said they would go to Homs — the steel the Group bought is not the '
                  'steel the market wants.'),
    ('Warm-Up B', '1 T · 2 F · 3 T · 4 T · 5 F'),
    ('Warm-Up C', '1 credit · 2 delivered · 3 collect'),
    ('Warm-Up D', 'Answers vary.'),
    ('P1 A', '0 d · 1 c · 2 e · 3 a · 4 b · 5 g · 6 f · 7 h'),
    ('P1 B', '1 quotation · 2 credit terms · 3 delivered · 4 collection · 5 in stock · 6 valid'),
    ('P1 C', '1 b · 2 c · 3 a · 4 d · 5 e'),
    ('P1 D', '1 depot · 2 deliver · 3 gauge · 4 wholesale · 5 delivered'),
    ('P1 E', '1 a · 2 b · 3 a · 4 a'),
    ('P1 F', 'The project customer: a written quotation, sixty days credit, delivery to site · '
             'The counter customer: a receipt, cash at the counter, twenty bags'),
    ('P1 G', '1 c · 2 a · 3 b · 4 d · 5 e · 6 f'),
    ('P1 H', '1 asked · 2 quotation · 3 delivered · 4 told · 5 credit · 6 stock'),
    ('P2 A', '1 told · 2 said · 3 told · 4 said'),
    ('P2 B', '1 She said they had it in stock. 2 He said he would pay in sixty days. '
             '3 They said they were waiting for the truck. 4 Lina told him that the price '
             'included delivery.'),
    ('P2 C', '1 He asked if we had cement. 2 She asked if / whether the price was delivered. '
             '3 He asked if / whether he could pay in sixty days. 4 They asked if / whether we '
             'had got five-millimetre bar.'),
    ('P2 D', '1 She asked when we could deliver. 2 He asked where the site was. '
             '3 The customer asked how much a tonne was. 4 They asked why it was out of stock.'),
    ('P2 E', '1 would send it to me that day · 2 had delivered it the day before · '
             '3 was firm that month · 4 could come the next day'),
    ('P2 F', '1 b · 2 a · 3 d · 4 c · 5 e'),
    ('P2 G', '1 She said that the price was delivered. / She told me that… 2 He asked if we had '
             'cement. 3 She asked me where the site was. 4 They said they would pay in sixty '
             'days.'),
    ('P2 H', 'Answers vary — two reported sentences.'),
    ('P2 I', '1 told · 2 asked · 3 said · 4 told · 5 asked'),
    ('P2 J', '1 He said he needed two hundred tonnes. 2 He asked if the price was delivered. '
             '3 She said that delivery to Homs was included. 4 She said they would quote March '
             'steel in March.'),
    ('P3 D1 A', '1 Whether the price is delivered or collected; whether he can pay in sixty '
                'days; whether the price can be held for fifty more tonnes in March. '
                '2 Collection is cheaper, but he would need his own trucks. 3 Sixty days, but '
                'only on the first order. 4 Because she does not know the exchange rate. '
                '5 Their best price on the day, and fifty tonnes reserved for him.'),
    ('P3 D1 B', '1 T · 2 F · 3 F · 4 F · 5 T'),
    ('P3 D1 C', '1 He asked if the price was delivered. 2 She said she would send it that '
                'afternoon. 3 She told him she was not going to promise a March price.'),
    ('P3 D2 A', '1 He buys twenty bags of cement; he does not get five-millimetre bar. '
                '2 He will buy the bar in Homs and take the cement there too, so the shop loses '
                'the cement sale as well. 3 Eleven people, in one week. 4 Retail customers ask '
                'for the product they use, which is bar, not the raw form the depot holds.'),
    ('P3 D2 B', '1 C · 2 B · 3 C · 4 C'),
    ('P4 B', 'Answers vary — one reported sentence from your own role.'),
    ('P5 A', '1 What you sold describes a past decision; what you were asked for describes the '
             'future. 2 Because a “no” feels like a failure, and nobody wants to record it. '
             '3 Because each request is heard by a different assistant on a different day. '
             '4 That there is no demand for bar. 5 A sheet of paper by the till with two '
             'columns, written by the person who heard the question.'),
    ('P5 B', '1 B · 2 C · 3 B · 4 C · 5 B'),
    ('P5 C', '1 demand · 2 conclude · 3 till · 4 attention'),
    ('P5 D', '1 sell / sold · 2 asked · 3 past · 4 failure · 5 paper · 6 question'),
    ('P5 F', '1 F · 2 F · 3 F · 4 T'),
    ('P6 A', '1 The price per tonne, delivered to the site in Homs; delivery within seven days '
             'of a written order. 2 Sixty days, on this first order only, to be reviewed '
             'afterwards. 3 She refuses to fix a March price, but offers to reserve fifty '
             'tonnes and quote the best price on the day.'),
    ('P6 B', 'Order: 2 (Dear Eng. Bilal,) · 3 (Thank you for your enquiry…) · 4 (We are able to '
             'offer sixty days…) · 5 (I am afraid we cannot fix a March price…) · 1 (This '
             'quotation is valid for fourteen days.) · 6 (Best regards, Lina)'),
    ('P7 A', '1 What they asked for, and whether we had it; written by whoever is at the '
             'counter. 2 There is real demand for bar; cement is running out as well as '
             'selling; wire mesh needs no attention. 3 Cement selling well and no bar sales — '
             'you would wrongly conclude that customers do not want bar. 4 Because by six '
             'o’clock you remember the difficult customers, not the quiet ones. 5 Because a '
             'sheet nobody reads teaches the counter staff that it does not matter.'),
    ('P7 B', '1 had · 2 moment · 3 words · 4 action'),
    ('P7 D', '1 Fifteen (11 + 4). 2 Twenty-one (62 asked, 41 supplied). 3 Wire mesh. '
             '4 Five-millimetre bar — eleven requests in one week is the largest unmet demand.'),
    ('P8 A', '1 No record of a single request for bar in the whole quarter, because nobody '
             'wrote it down. 2 Two hundred tonnes sold to one customer, and at least fifteen '
             'people turned away in one shop in one week. 3 Because it would need a new product '
             'line, a new specification and probably a new supplier. 4 Keep the lost-sales '
             'sheet for a month in all three shops. 5 The biggest sale of the quarter came from '
             'a customer who telephoned; the biggest decision of the year came from a customer '
             'who walked out.'),
    ('P8 B', '1 Monday · 2 request · 3 away · 4 question · 5 shops'),
    ('P8 D', '1 line · 2 away · 3 confirm'),
    ('P10 A', '1 quotation · 2 delivered · 3 credit · 4 walk-in · 5 lead'),
    ('P10 B', '1 he needed two hundred tonnes · 2 that they had it in stock · '
              '3 if / whether we delivered to Homs · 4 when we could deliver · '
              '5 he would confirm on Thursday · 6 that they didn’t stock bar'),
    ('P10 C', '1 200 tonnes of 5 mm coil, delivered to Homs by the end of the month. '
              '2 Sixty days, on a first order. 3 She refused to fix a March price, but offered '
              'to reserve fifty tonnes.'),
    ('P10 D', '1 Eleven, in one week. 2 That they didn’t stock it. 3 Go to Homs.'),
    ('P10 G', '1 He told me he needed 200 tonnes. 2 She said that the price was delivered. '
              '3 He asked if we had cement. 4 She asked me where the site was. '
              '5 They said they would pay in sixty days.'),
    ('P10 H', '1 c · 2 a · 3 b · 4 e · 5 d'),
    ('P10 I', '2 thank them and repeat what they asked for · 4 give the price and the unit · '
              '1 say what the price includes · 5 say what you cannot do · '
              '3 give the valid-until date · 6 say what you need from them next'),
    ('P11 A', '1 That information inside a company has to travel, and it travels by being '
              'repeated. 2 A customer asks Maya; Maya reports it to Lina; Lina reports it to '
              'the meeting; Mr. Tarek turns it into a decision, and it may become an import '
              'order. 3 It can not be passed on; it can lose its number; it can lose its '
              'exactness; it can gain an opinion nobody said. 4 A report says exactly who said '
              'what; a rumour is vague and has no number.'),
]

UNIT = dict(
    n=7,
    title='Selling in Syria',
    grammar='reported speech — say · tell · ask (statements and questions)',
    function='Trade',
    candos=[
        'I can sell to a trade customer and to a retail customer',
        'I can report what a customer said or asked',
        'I can quote a price and say what is included',
        'I can write a quotation',
    ],
    cando_line='You can quote a customer, and carry what they said to the person who decides.',
    blocks=B,
    terms=TERMS,
    key=KEY,
    teaser=F.scene_banner(
        'Unit 8 — the money that has not arrived',
        [('h', BLUE), ('m', GREY)],
        ['“Sixty days was Monday.', 'You should call him.”'],
        'TWO DIRECTIONS OF MONEY',
        ['What our customers owe us', 'What we owe our supplier',
         'When to give credit, and how much', 'How to ask firmly and stay polite'],
        quote='“You could pay half now and half in June.”'),
)
