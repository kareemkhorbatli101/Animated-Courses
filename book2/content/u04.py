# -*- coding: utf-8 -*-
"""Unit 4 — Ordering and Paying Across Borders.
Strand A: the purchase order and the bank transfer (Rami, Mr. Haitham, Mr. Delgado).
Strand B: the internal approval chain inside the Group (Fadi, Karim, Ms. Rania).
"""
import frames as F
from art import NAVY, BLUE, ORANGE, GREEN, GREEN_D, PURPLE, GREY

B = []

PEOPLE = [
    ('Rami', 'Bashak · Imports', 'm', GREEN_D),
    ('Mr. Haitham', 'The bank', 'm', NAVY),
    ('Fadi', 'Head office · Admin', 'm', PURPLE),
    ('Karim', 'Fin. Controller', 'm', GREY),
    ('Ms. Rania', 'Board Member', 'h', ORANGE),
    ('Mr. Tarek', 'General Manager', 'm', BLUE),
]

# ============================================================ unit openers
B += [
    ('fig', F.process_strip('From the signature to the factory floor', [
        'Approval inside', 'Purchase order out', 'Deposit to the bank',
        'Supplier confirms', 'Production starts',
    ]), 'Nothing in this chain can jump the queue.'),
    ('fig', F.team_strip('The people in this unit', PEOPLE),
     'One side talks to a bank; the other side collects signatures.'),
]

# ============================================================ WARM UP
B += [
    ('bar', 'Warm Up', 'FINANCE'),
    ('p', 'Look at the pictures. Answer these questions before you read.'),
    ('items', [
        'Who has to sign before your company spends a large amount?',
        'How does money travel from your bank to a supplier abroad?',
        'What are you doing at work next week? Name one fixed arrangement.',
    ]),
    ('h3', 'Read'),
    ('p', 'The price is agreed: 1,200 tonnes of steel coil, five per cent off, firm until the '
          'end of November. Now Rami has to turn a conversation into an order, and an order '
          'into money.'),
    ('p', 'He starts with the purchase order. It is one page, and every line on it has to match '
          'the offer exactly: the product, the quantity, the unit price, the total, the terms, '
          'and the payment schedule. Thirty per cent on order, seventy per cent before '
          'shipment. Thirty per cent of 729,600 dollars is about 219,000 dollars.'),
    ('p', 'That number changes who can sign. Up to fifty thousand dollars, Mr. Tarek signs '
          'alone. Above it, the board has to approve. So the order goes to Fadi, who prepares '
          'the file: the three enquiries, the check-list, the price build-up and the counter-'
          'offer. Then it goes to Karim, who checks the budget, and finally to Ms. Rania.'),
    ('p', '“I am going to sign it,” she says, “but not today. I am seeing the auditors this '
          'afternoon, and I want to ask them one question about the currency.” Rami’s stomach '
          'turns over. The price is firm only until 30 November.'),
    ('p', 'She signs on Thursday morning. By Thursday afternoon Rami is at the bank with Mr. '
          'Haitham. “We are sending two hundred and nineteen thousand dollars to Westgate '
          'Metals,” he says. “When will it arrive?”'),
    ('p', '“It will leave here on Sunday,” says Mr. Haitham. “It usually arrives two working '
          'days later, so Tuesday. But I am going to tell you something people forget. Write '
          'the purchase order number in the payment reference. If you don’t, their accounts '
          'department will not know what the money is for, and nobody will start the '
          'production.”'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What has been agreed before this unit starts?   (1,200 tonnes at five per cent off, firm until 30 November)',
        'What must every line of the purchase order match?',
        'What is the payment schedule, and how much is the deposit?',
        'Who can sign up to fifty thousand dollars, and who signs above it?',
        'Why does Ms. Rania not sign on the first day?',
        'What does Mr. Haitham say people forget, and why does it matter?',
    ]),
    ('ex', 'B. True or False? Write T or F. (0 is done for you.)'),
    ('items0', [
        'The purchase order is five pages long.   (F)',
        'The deposit is thirty per cent of the total.   ____',
        'Mr. Tarek can sign any amount alone.   ____',
        'Ms. Rania signs on Thursday morning.   ____',
        'The transfer will leave the bank on Sunday.   ____',
        'The payment reference does not matter.   ____',
    ]),
    ('ex', 'C. Find the words. Find a word or phrase in the text that means: (0 is done for you.)'),
    ('items0', [
        'the paper that places an order with a supplier → (the purchase order)',
        'when and how much we will pay → the payment s____________',
        'the number the supplier uses to find our payment → the p____________ r____________',
        'the money we send before the goods are made → the d____________',
    ]),
    ('ex', 'D. Over to you. Answer about yourself.'),
    ('items', [
        'What is the approval limit in your company? Who signs above it?',
        'How long does an international payment take from your bank?',
        'What are you doing at work tomorrow? Give one fixed arrangement.',
    ]),
]

# ============================================================ PART 1
B += [
    ('bar', 'Part 1  ·  Vocabulary and Terminology', 'ADMIN'),
    ('h3', 'The purchase order'),
    ('fig', F.doc_card('The parts of a purchase order', 'Purchase order PO-4417',
                       [('Supplier', 'Westgate Metals & Equipment'),
                        ('Product', 'Steel coil, 5 mm'),
                        ('Quantity', '1,200 tonnes'),
                        ('Unit price', 'USD 608.00 / tonne'),
                        ('Total value', 'USD 729,600.00'),
                        ('Terms', 'CFR Lattakia'),
                        ('Payment', '30% on order, 70% before shipment'),
                        ('Authorised by', 'Ms. Rania, Board')], accent=BLUE),
     'Eight lines, and every one must match the offer.'),
    ('ex', 'A. Match each word (1–7) with its meaning (a–h). There is one you do not need. '
           '(0 is done for you.)'),
    ('items0', [
        'purchase order  (c)',
        'order confirmation  ____   a. the person who is allowed to sign',
        'proforma invoice  ____   b. the money that arrives in the account',
        'payment schedule  ____   c. the paper that places an order',
        'bank transfer  ____   d. the supplier’s paper saying “we accept”',
        'beneficiary  ____   e. when and how much we will pay',
        'authorised signatory  ____   f. a price document used to arrange payment',
        'approval limit  ____   g. the person or company receiving the money',
        '          h. the largest amount one person may approve',
    ]),
    ('ex', 'B. Complete the sentences with the words in the word bank.'),
    ('bank', 'Word bank:', ['purchase order', 'order confirmation', 'payment schedule',
                            'beneficiary', 'approval limit', 'bank transfer']),
    ('items', [
        'We sent the ____________ on Thursday afternoon.',
        'Westgate replied the next day with an ____________.',
        'Our ____________ is thirty per cent on order and seventy before shipment.',
        'The ____________ on the transfer is Westgate Metals & Equipment.',
        'Mr. Tarek’s ____________ is fifty thousand dollars.',
        'The money will leave by ____________ on Sunday.',
    ]),
    ('h3', 'Paying across a border'),
    ('fig', F.icon_row('How the money travels', 'FROM OUR BANK TO THEIRS', [
        ('bank', 'our bank'), ('globe', 'SWIFT'), ('bank', 'their bank'),
        ('doc', 'reference'), ('tick', 'credited'),
    ]), 'Four days, three banks, one reference number.'),
    ('ex', 'C. Match the word (1–5) with its meaning (a–e).'),
    ('items', [
        'remitter  ____   a. the day the money is available',
        'beneficiary  ____   b. the company sending the money',
        'value date  ____   c. what the banks charge for the transfer',
        'bank charges  ____   d. the company receiving the money',
        'reference  ____   e. the text that says what the payment is for',
    ]),
    ('h3', 'Who may sign what'),
    ('fig', F.label_panel('The approval ladder', [
        ('up to $5,000', 'the department manager'),
        ('up to $50,000', 'the General Manager'),
        ('over $50,000', 'the board'),
        ('any new supplier', 'the General Manager, always'),
    ], cols=4), 'The amount decides the signature, not the hurry.'),
    ('ex', 'D. Odd one out. Which word is different? Circle it.'),
    ('items', [
        'deposit · balance · instalment · depot',
        'remitter · beneficiary · bank · tonne',
        'approve · authorise · sign off · deliver',
        'transfer · payment · remittance · catalogue',
        'will · going to · present continuous · past simple',
    ]),
    ('ex', 'E. Choose the best answer.'),
    ('items', [
        'The company receiving the money is the…   (a) remitter   (b) beneficiary',
        'The largest amount one person may approve is the…   (a) approval limit   (b) budget',
        'The supplier’s paper saying “we accept” is the…   (a) proforma invoice   (b) order confirmation',
        'The text saying what a payment is for is the…   (a) value date   (b) reference',
    ]),
    ('ex', 'F. Classify. Write each item in the correct column.'),
    ('bank', 'Items:', ['purchase order', 'order confirmation', 'bank transfer',
                        'proforma invoice', 'approval file', 'order acknowledgement']),
    ('grid', ['We send it', 'They send it', 'Stays inside our company'], 3),
    ('ex', 'G. Match the two halves (1–6 with a–f).'),
    ('items', [
        'a purchase  ____   a. limit',
        'an approval  ____   b. order',
        'a bank  ____   c. date',
        'a payment  ____   d. transfer',
        'the value  ____   e. schedule',
        'an authorised  ____   f. signatory',
    ]),
    ('ex', 'H. Complete the paragraph with the words in the box.'),
    ('bank', 'Box:', ['approval', 'beneficiary', 'confirmation', 'deposit', 'reference', 'transfer']),
    ('p', 'Above fifty thousand dollars we need board (1)____________. Then we send the purchase '
          'order and wait for the (2)____________. The (3)____________ is thirty per cent, sent '
          'by bank (4)____________. The (5)____________ is the supplier, and we always write '
          'the order number in the (6)____________.'),
]

# ============================================================ PART 2
B += [
    ('bar', 'Part 2  ·  Grammar — will · going to · present continuous', 'FINANCE'),
    ('fig', F.grammar_card('will — decided now, promised, or predicted', [
        ('a decision now', 'will', '“I will send the order this afternoon.”'),
        ('a promise', 'will', 'We will pay within thirty days.'),
        ('a prediction', 'will', 'It will arrive on Tuesday.'),
    ], 'Short: I’ll · we’ll · it’ll   ·   Negative: won’t   ·   Question: Will you…?'),
     'will — for what we decide, promise or expect.'),
    ('p', 'We use WILL for a decision we make at the moment of speaking, for a promise, and for '
          'a prediction about the future. The transfer will leave on Sunday. I’ll call you when '
          'it clears. We won’t release the balance until we see the shipping documents.'),
    ('fig', F.grammar_card('going to — already decided, or clear evidence', [
        ('a plan already made', 'going to', 'We are going to order 1,200 tonnes.'),
        ('evidence now', 'going to', 'Look at the depot — it is going to be full.'),
        ('negative', 'not going to', 'She isn’t going to sign today.'),
    ], 'am / is / are + going to + verb'),
     'going to — for a plan made before you spoke.'),
    ('p', 'We use GOING TO for a plan we decided earlier, and for something we can see coming. '
          'I am going to sign it, but not today = she decided before the meeting. Compare: I '
          'will sign it = she decides as she speaks.'),
    ('fig', F.grammar_card('present continuous — a fixed arrangement', [
        ('a fixed time + place', 'am / is / are + -ing', 'I am seeing the auditors at three.'),
        ('a diary entry', 'arriving', 'The ship is arriving on the 14th.'),
        ('with people', 'meeting', 'We are meeting the bank on Thursday.'),
    ], 'Use it when the arrangement has a time and the other people know.'),
     'The diary tense — fixed, agreed, with a time.'),
    ('p', 'We use the PRESENT CONTINUOUS for an arrangement that is already fixed: a time is '
          'agreed and other people are involved. I am seeing the auditors this afternoon. We '
          'are shipping on the 14th. It is the tense of a diary.'),
    ('fig', F.split_panel('Which future, and why?',
                          'ABROAD · talking to the bank',
                          ['“It will leave on Sunday.” — prediction',
                           '“We are sending $219,000.” — arranged',
                           '“I’ll write the reference now.” — decided as I speak',
                           '“They are going to start production.” — their plan'],
                          'INSIDE · the approval chain',
                          ['“I am going to sign it.” — decided already',
                           '“I am seeing the auditors at three.” — in the diary',
                           '“I will ask them one question.” — decided now',
                           '“The board is meeting on Thursday.” — arranged']),
     'Three futures, used in the same two conversations.'),
    ('watch', 'Don’t use will for an arrangement that is already in the diary. Say I am seeing '
              'the auditors at three, not I will see the auditors at three. And after I think, '
              'I hope, probably and maybe, use will, not going to: I think it will arrive on '
              'Tuesday.'),
    ('h3', 'Form'),
    ('p', 'will / won’t + verb     ·     am / is / are + going to + verb     ·     '
          'am / is / are + verb-ing (+ a time)'),
    ('ex', 'A. Complete with WILL or WON’T. (0 is done for you.)'),
    ('items0', [
        'The transfer will leave the bank on Sunday.',
        'We ____________ release the balance until we see the documents.',
        'I think it ____________ arrive on Tuesday.',
        'Don’t worry — I ____________ write the reference now.',
        'They ____________ start production without the deposit.',
    ]),
    ('ex', 'B. Complete with GOING TO and the verb in brackets.'),
    ('items', [
        'We ____________ (order) 1,200 tonnes, not 2,000.',
        'She ____________ (sign) it, but not today.',
        'Look at the depot — it ____________ (be) full by March.',
        'They ____________ (not / wait) for the balance.',
    ]),
    ('ex', 'C. Complete with the present continuous (a fixed arrangement).'),
    ('items', [
        'I ____________ (see) the auditors at three o’clock.',
        'We ____________ (meet) Mr. Haitham on Thursday morning.',
        'The ship ____________ (arrive) on the 14th.',
        'Rami ____________ (fly) to the port next week.',
    ]),
    ('ex', 'D. Choose the best future form. (0 is done for you.)'),
    ('items0', [
        'I ___ call you as soon as it clears.   (will)',
        'We ___ (meet) the board on Thursday — it is in the diary.',
        'Look at those clouds. It ___ (rain).',
        'I’ve decided. I ___ (take) the 1,200 tonnes.',
        'That is heavy. I ___ (help) you.',
    ]),
    ('ex', 'E. Match the sentence (1–5) with the reason (a–e).'),
    ('items', [
        'I’ll send it now.  ____   a. an arrangement in the diary',
        'We are going to open a third depot.  ____   b. a decision made as I speak',
        'I am meeting the bank at ten.  ____   c. a prediction',
        'It will probably arrive Tuesday.  ____   d. a plan decided earlier',
        'Look — the container is going to fall.  ____   e. evidence we can see now',
    ]),
    ('ex', 'F. Make questions about the plan.'),
    ('items', [
        '(?) when / the transfer / leave → ____________',
        '(?) who / going to / sign → ____________',
        '(?) you / meet / the bank / on Thursday → ____________',
        '(?) what time / the ship / arrive → ____________',
    ]),
    ('ex', 'G. Find and correct the mistake in each sentence. (0 is done for you.)'),
    ('items0', [
        'I will see the auditors at three. (it is in my diary) → (I am seeing the auditors at three.)',
        'We will going to order 1,200 tonnes. → ____________',
        'She is going sign it tomorrow. → ____________',
        'I think it is going to arrive on Tuesday. (just an opinion) → ____________',
        'What time you are meeting the bank? → ____________',
    ]),
    ('ex', 'H. About you. Write two sentences: one with “I am going to…” and one with '
           '“I am …-ing” for a fixed arrangement.'),
    ('nlines', 2),
    ('ex', 'I. Complete with will, going to, or the present continuous.'),
    ('items', [
        'We ____________ (send) the deposit on Sunday — the bank has the instruction.',
        'I ____________ (ask) Karim about the budget. I have just thought of it.',
        'The board ____________ (meet) at nine on Thursday.',
        'I think the rate ____________ (move) before December.',
        'We ____________ (not / place) the order until Ms. Rania signs.',
    ]),
    ('ex', 'J. Write the plan. Use the form in brackets.'),
    ('items', [
        'deposit leaves Sunday (present continuous) → ____________',
        'production starts when the money clears (will) → ____________',
        'we have decided to use Komosh for the freight (going to) → ____________',
        'board meeting, Thursday 09:00 (present continuous) → ____________',
    ]),
]

# ============================================================ PART 3
B += [
    ('bar', 'Part 3  ·  Listening and Dialogue', 'FINANCE'),
    ('fig', F.dialogue_scene(('m', GREEN_D), ['When will the money', 'reach Westgate?'],
                             ('m', NAVY), ['It’s leaving Sunday.', 'Tuesday, most likely.']),
     'Strand A · at the bank, arranging the transfer.'),
    ('h3', 'Dialogue 1 — At the bank (the import desk)'),
    ('p', 'Listen and read. (Your teacher will read the dialogue, or play the audio.)'),
    ('dlg', [
        ('Rami', 'Mr. Haitham, we are sending two hundred and nineteen thousand dollars to '
                 'Westgate Metals. Here is the instruction.'),
        ('Mr. Haitham', 'Thank you. Let me check the beneficiary details against the invoice. '
                        'Account name, account number… yes, they match.'),
        ('Rami', 'When will it reach them?'),
        ('Mr. Haitham', 'It is leaving here on Sunday. It usually arrives two working days '
                        'later, so Tuesday. I will send you the confirmation the same day.'),
        ('Rami', 'Good, because production doesn’t start until the money clears.'),
        ('Mr. Haitham', 'Then I am going to tell you the thing people forget. The reference. '
                        'Put the purchase order number in it.'),
        ('Rami', 'PO-4417.'),
        ('Mr. Haitham', 'Exactly. Without it, their accounts department sees an amount and no '
                        'name they recognise, and it sits for a week.'),
        ('Rami', 'One more question. Who pays the bank charges?'),
        ('Mr. Haitham', 'That depends on your instruction. If you choose “shared”, they will '
                        'receive a little less than you send. If they need the full amount, '
                        'you pay all the charges.'),
        ('Rami', 'Then we will pay all the charges. I don’t want an argument over forty dollars '
                 'in December.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'How much is Bashak sending, and to whom?   (USD 219,000, to Westgate Metals)',
        'What does Mr. Haitham check first, and against what?',
        'When will the money leave, and when will it probably arrive?',
        'Why does the purchase order number matter so much?',
        'What are the two choices about bank charges?',
        'Which does Rami choose, and why?',
    ]),
    ('ex', 'B. True or False? Write T or F.'),
    ('items', [
        'The beneficiary details did not match the invoice.   ____',
        'The money is leaving on Sunday.   ____',
        'Production starts before the money clears.   ____',
        'Without a reference, a payment can sit for a week.   ____',
        'Rami chooses “shared” charges.   ____',
    ]),
    ('ex', 'C. Language focus. Find in the dialogue: (0 is done for you.)'),
    ('items0', [
        'a present continuous for a fixed arrangement → (It is leaving here on Sunday.)',
        'a “going to” for something decided earlier → ____________',
        'a “will” for a promise → ____________',
        'a first conditional about the charges → ____________',
    ]),
    ('fig', F.half_scene('m', PURPLE, ['Ms. Rania is seeing', 'the auditors at three.']),
     'Strand B · the signature that holds everything up.'),
    ('h3', 'Dialogue 2 — Waiting for a signature (inside the Group)'),
    ('dlg', [
        ('Rami', 'Fadi, where is the file? The price is only firm until 30 November.'),
        ('Fadi', 'It is on Ms. Rania’s desk. She is seeing the auditors at three, and she wants '
                 'to ask them about the currency first.'),
        ('Rami', 'Today is the 21st. If she signs tomorrow we are still fine, but only just.'),
        ('Fadi', 'She is going to sign it — she told Karim this morning. She is not going to '
                 'sign it before she has asked her question.'),
        ('Rami', 'All right. Will you call me the moment it is signed?'),
        ('Fadi', 'I will. And Rami — the bank needs the file too, not only the signature. '
                 'I am sending them a copy this afternoon.'),
        ('Rami', 'Thank you. That saves me a day.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'Where is the file, and why has it not been signed?',
        'What is Ms. Rania doing at three o’clock?',
        'How does Fadi know she is going to sign?',
        'What is Fadi doing this afternoon, and why does it help Rami?',
    ]),
    ('ex', 'B. Listen again and choose the best answer (A–D).'),
    ('items', [
        'The price is firm until…   A) 21 November  B) 30 November  C) 30 December  D) Thursday',
        'Ms. Rania wants to ask the auditors about the…   A) price  B) supplier  C) currency  D) budget',
        'Fadi says she is going to sign because…   A) Rami asked  B) she told Karim  '
        'C) the bank asked  D) the board voted',
        'Fadi is sending a copy of the file to the…   A) supplier  B) auditors  C) bank  D) port',
    ]),
]

# ============================================================ PART 4
B += [
    ('bar', 'Part 4  ·  Speaking and Your Role', 'ADMIN'),
    ('fig', F.label_panel('Phrases for plans, promises and diaries', [
        ('I’ll do it now.', 'deciding as you speak'),
        ('We’re going to…', 'a plan already made'),
        ('I’m seeing … at three.', 'a fixed arrangement'),
        ('It should arrive on…', 'a careful prediction'),
        ('I’ll let you know as soon as…', 'a promise'),
        ('Nothing moves until…', 'naming the blocker'),
    ], cols=3), 'Say which kind of future you mean, and people can plan around you.'),
    ('ex', 'A. Role-play: at the bank. Student A takes a payment instruction to the bank. '
           'Student B is the bank manager. Then change roles.'),
    ('items', [
        'A: Say how much you are sending, and to whom.',
        'B: Check the beneficiary details and ask for the reference.',
        'A: Give the purchase order number.',
        'B: Say when the money is leaving and when it will arrive.',
        'A: Ask who pays the bank charges.',
        'B: Explain the two choices, and ask A to decide.',
    ]),
    ('fig', F.label_panel('Each job has a different future', [
        ('Imports', 'we’re placing the order on Thursday'),
        ('Sales', 'I’ll call the customer back today'),
        ('Finance', 'we’re going to review the limits'),
        ('Accounts', 'the payment will clear on Tuesday'),
        ('Logistics', 'the ship is arriving on the 14th'),
        ('Admin', 'the board is meeting at nine'),
    ], cols=3), 'Six roles, three futures.'),
    ('ex', 'B. Your Role. Say one plan and one arrangement from YOUR job. Use the phrases below. '
           '(Choose your real role.)'),
    ('items', [
        '[Trade] Import Manager: “We are placing the order on Thursday.”',
        '[Trade] Sales: “I will call the customer back before five.”',
        '[Finance] Financial Manager: “We are going to review the approval limits.”',
        '[Finance] Accountant: “The payment will clear on Tuesday.”',
        '[Logistics] Freight: “The ship is arriving on the 14th.”',
        '[Admin] Assistant: “The board is meeting at nine on Thursday.”',
    ]),
    ('ex', 'C. Ask your partner. Walk around and ask three people.'),
    ('items', [
        'What are you doing tomorrow morning?',
        'What is your company going to do next year?',
        'What do you think will happen to prices this year?',
    ]),
    ('ex', 'D. Discuss. Ask and answer.'),
    ('items', [
        'Should one person be allowed to approve a very large payment? Why or why not?',
        'What is the longest you have waited for a signature? What did it cost?',
    ]),
]

# ============================================================ PART 5
B += [
    ('bar', 'Part 5  ·  Extended Reading', 'FINANCE'),
    ('h3', 'Why a payment needs a name'),
    ('fig', F.route_strip('What has to line up before production starts', [
        ('doc', 'Purchase order'), ('stamp', 'Signature'), ('bank', 'Transfer'),
        ('tick', 'Credited'), ('factory', 'Production'),
    ]), 'Five steps, and the fourth one is where orders go to sleep.'),
    ('p', 'Money sent across a border is not like money handed over a counter. It passes '
          'through at least three banks, it takes two or three working days, and when it '
          'arrives it is only a number in a list. Somebody in the supplier’s accounts '
          'department has to look at that number and decide what it belongs to.'),
    ('p', 'This is why the reference matters more than almost anything else on the instruction. '
          'A payment with a purchase order number is matched to an order in thirty seconds. A '
          'payment with no reference becomes a problem on a desk. It is not lost — the money is '
          'perfectly safe — but it is not doing its job, because the order it was supposed to '
          'start is still waiting.'),
    ('p', 'The second thing people forget is the charges. When a bank sends money abroad, '
          'somebody has to pay the banks in the chain. If the instruction says “shared”, the '
          'beneficiary receives a little less than the sender sent. For a small payment nobody '
          'notices. For a deposit against a large order, the supplier’s accounts department '
          'sees an amount that is not exactly thirty per cent, and a careful clerk will not '
          'release the order until somebody explains the difference. Forty dollars can hold up '
          'seven hundred thousand.'),
    ('p', 'The third thing is timing, and this is where the three futures of this unit become '
          'practical. A payment that is leaving on Sunday is an arrangement — the bank has the '
          'instruction and a date. A payment that will probably arrive on Tuesday is a '
          'prediction, and predictions can be wrong, because a bank holiday in a third country '
          'can add a day. So a careful buyer never says “the money has been sent” to a '
          'supplier. A careful buyer says “the transfer left our bank on Sunday with reference '
          'PO-4417, and we expect it with you on Tuesday.” That sentence can be checked.'),
    ('p', 'None of this is complicated. It is simply the difference between a company whose '
          'orders start on time and a company that spends every December asking where its money '
          'went. The money is almost never the problem. The information attached to the money '
          'is.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'How is money sent abroad different from money handed over a counter?   (it passes through several banks, takes days, and arrives as a number in a list)',
        'What happens to a payment with a purchase order number?',
        'What happens to a payment with no reference?',
        'Why can forty dollars of bank charges hold up a large order?',
        'What is the difference between “leaving on Sunday” and “arriving on Tuesday”?',
        'What does the writer say is almost never the problem?',
    ]),
    ('ex', 'B. Choose the best answer (A–D).'),
    ('items', [
        'Money sent abroad passes through at least … banks.   A) one  B) two  C) three  D) ten',
        'A payment with a reference is matched in…   A) thirty seconds  B) a day  C) a week  D) a month',
        'With “shared” charges, the beneficiary receives…   A) more  B) a little less  '
        'C) exactly the same  D) nothing',
        'A bank holiday in a third country can add…   A) a day  B) a week  C) nothing  D) a charge',
        'The writer says the real problem is the…   A) money  B) bank  C) information  D) supplier',
    ]),
    ('ex', 'C. Find a word or phrase in the text that means:'),
    ('items', [
        'to connect a payment to an order → to m____________ it',
        'the person who receives the money → the b____________',
        'to stop something from going forward → to h____________ it u____________',
        'a day when the banks are closed → a bank h____________',
    ]),
    ('ex', 'D. Complete the summary with ONE word in each gap.'),
    ('p', 'A payment abroad passes through three (1)____________ and arrives as a number. The '
          '(2)____________ tells the supplier what it is for. If the charges are '
          '(3)____________, the supplier receives a little less, and a careful clerk will not '
          '(4)____________ the order. A payment leaving on Sunday is an (5)____________; '
          'arriving on Tuesday is only a (6)____________.'),
    ('ex', 'E. Discuss. Talk in pairs.'),
    ('items', [
        'Has a payment ever gone missing in your company? What happened?',
        'What information does your company put in a payment reference?',
    ]),
    ('ex', 'F. True or False? (about the reading). Write T, F or NOT GIVEN.'),
    ('items', [
        'A payment with no reference is lost.   ____',
        'Shared charges mean the beneficiary gets less than the sender sent.   ____',
        'Most suppliers accept payments with no reference.   ____',
        'A bank holiday abroad can delay a transfer.   ____',
    ]),
]

# ============================================================ PART 6
B += [
    ('bar', 'Part 6  ·  Writing (a real email)', 'ADMIN'),
    ('h3', 'Model — A payment instruction to the bank'),
    ('fig', F.doc_card('The payment instruction', 'Transfer instruction',
                       [('Beneficiary', 'Westgate Metals & Equipment'),
                        ('Amount', 'USD 219,000.00'),
                        ('Reference', 'PO-4417, 30% deposit'),
                        ('Charges', 'all charges for our account'),
                        ('Value date', 'Sunday 24 November'),
                        ('Attached', 'purchase order and proforma'),
                        ('Authorised by', 'Ms. Rania, Board')], accent=GREEN_D),
     'Seven lines. Leave one out and the money sleeps.'),
    ('p', 'Subject: Transfer instruction — PO-4417, 30% deposit. Dear Mr. Haitham, Please '
          'arrange a transfer of USD 219,000.00 to Westgate Metals & Equipment. The beneficiary '
          'details are on the attached proforma invoice, and the signed purchase order is '
          'attached as well. Please put “PO-4417, 30% deposit” in the payment reference. All '
          'bank charges are for our account, so the beneficiary must receive the full amount. '
          'We would like the value date to be Sunday 24 November. Could you please send me the '
          'confirmation on the day it leaves? Our supplier is not going to start production '
          'until the money clears, so the date matters to us. Best regards, Rami Import '
          'Manager, Bashak Co.'),
    ('ex', 'A. Answer about the email. (0 is done for you.)'),
    ('items0', [
        'How much is being transferred, and to whom?   (USD 219,000.00, to Westgate Metals & Equipment)',
        'What exactly must go in the payment reference?',
        'Who pays the bank charges, and why does Rami say so?',
        'Why does the date matter to Bashak?',
    ]),
    ('ex', 'B. Put the email in order (1–6).'),
    ('items', [
        '(  )  All bank charges are for our account.',
        '(  )  Dear Mr. Haitham,',
        '(  )  Please arrange a transfer of USD 219,000.00 to Westgate Metals.',
        '(  )  Best regards, Rami',
        '(  )  Please put “PO-4417, 30% deposit” in the reference.',
        '(  )  Our supplier is not going to start production until the money clears.',
    ]),
    ('h3', 'Guided writing'),
    ('ex', 'C. Now you write. Write a payment instruction (70–100 words) to your bank. Use a '
           'present continuous or “going to” at least once, and a “will” promise or request '
           'at least once.'),
    ('p', 'Plan:  1) “Dear …,”   2) “Please arrange a transfer of … to ….”   3) “Please put … '
          'in the reference.”   4) “All charges are for ….”   5) “We would like the value date '
          'to be ….”   6) “Could you please …?”   7) “Best regards, …”'),
    ('p', 'Sentence starters:  “Please arrange a transfer of…” · “Please put … in the payment '
          'reference.” · “All bank charges are for…” · “We would like the value date to be…” · '
          '“Our supplier is not going to … until …”'),
    ('lines', 5),
    ('ex', 'D. Checklist. Tick each one when you have checked your instruction.'),
    ('check', [
        'I gave the exact amount and the currency.',
        'I named the beneficiary exactly as the invoice spells it.',
        'I gave a reference with the order number in it.',
        'I said who pays the bank charges.',
        'I said when I need the money to leave.',
    ]),
]

# ============================================================ PART 7
B += [
    ('bar', 'Part 7  ·  Trade-Skills Track', 'ADMIN'),
    ('h3', 'The approval file: what a signature is really signing'),
    ('fig', F.doc_card('The approval file', 'PO-4417 · USD 729,600',
                       [('1  Three enquiries', 'attached'),
                        ('2  Supplier check-list', 'complete ✓'),
                        ('3  Price build-up', 'landed cost USD 712 / t'),
                        ('4  Counter-offer and reply', 'attached'),
                        ('5  Budget check', 'Karim ✓'),
                        ('6  Payment schedule', '30 / 70'),
                        ('7  Board approval', '____________')], accent=ORANGE),
     'Six pages of work, so that the seventh line takes a minute.'),
    ('p', 'When a board member signs a purchase order, she is not agreeing with a number. She '
          'is agreeing that a process happened. That is why the file matters more than the '
          'signature: the file is the evidence, and the signature is only the last line of it.'),
    ('p', 'A good approval file answers six questions in order. Did we look at more than one '
          'supplier? Is this supplier real and checked? What will the goods actually cost us, '
          'landed? Did we try to improve the terms? Is the money in the budget? And when '
          'exactly does it leave? If all six have an answer, the seventh line — the signature '
          '— is easy. If any of them is missing, the signature is a guess.'),
    ('p', 'This is also why you should never send a signature request alone. “Please approve, '
          'urgent” is the sentence that slows a company down, because the person receiving it '
          'now has to find everything themselves. Send the file, name the deadline, and say '
          'what happens if it is missed. Ms. Rania did not delay the order because she was '
          'slow. She delayed it because she had one unanswered question, and the file did not '
          'answer it. A file that anticipates the question is signed the same day.'),
    ('fig', F.dos_donts('Getting an approval: do’s and don’ts',
                        ['send the whole file, not just the form',
                         'name the deadline and what happens after it',
                         'answer the obvious question in advance',
                         'say who has already checked it'],
                        ['write “urgent, please approve”',
                         'send it on the last possible day',
                         'leave the budget line empty',
                         'chase by telephone with no file']),
     'A signature is fast when the thinking is already done.'),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What is a board member really agreeing to when she signs?',
        'What are the six questions a good approval file answers? Name three.',
        'Why is “please approve, urgent” a bad sentence?',
        'Why did Ms. Rania delay the order?',
        'What kind of file is signed the same day?',
    ]),
    ('ex', 'B. Listen and complete. Karim explains the file. Write the missing word.'),
    ('items', [
        'Karim: The file is the evidence; the signature is the last ____________.',
        'Karim: Always show what the goods cost us ____________.',
        'Karim: Name the ____________ and say what happens if we miss it.',
        'Karim: Never send a request marked only “____________”.',
    ]),
    ('ex', 'C. Practice. Build an approval file for something your company buys. Write the six '
           'lines, with one sentence under each. Then ask your partner: which line would stop '
           'you signing?'),
    ('ex', 'D. Who signs? Use the approval ladder from Part 1.'),
    ('items', [
        'A repair costing $3,000. → ____________',
        'A first order from a brand-new supplier, $8,000. → ____________',
        'Steel worth $729,600. → ____________',
        'Office furniture, $40,000, existing supplier. → ____________',
    ]),
]

# ============================================================ PART 8
B += [
    ('bar', 'Part 8  ·  Consolidation', 'ADMIN'),
    ('h3', 'Eight days, two clocks'),
    ('fig', F.split_panel('The two clocks running at once',
                          'ABROAD · the supplier’s clock',
                          ['Price firm until 30 November',
                           'Production starts when the money clears',
                           'Transfer takes 2 working days',
                           '45 days from production to shipment'],
                          'INSIDE · our clock',
                          ['Board meets Thursdays only',
                           'Ms. Rania had one open question',
                           'Bank needs the file, not just the signature',
                           'Fadi sent the copy a day early']),
     'The deadline is abroad; the delay is always at home.'),
    ('p', 'Ms. Rania signs on Thursday at nine. By ten, Fadi has scanned the file to the bank. '
          'By two, Rami has the instruction stamped. The transfer leaves on Sunday with '
          '“PO-4417, 30% deposit” in the reference, and all charges for Bashak’s account.'),
    ('p', 'On Tuesday afternoon Mr. Delgado writes four words: “Deposit received. Production '
          'starts.” Rami prints the email and puts it in the file, because in December somebody '
          'will ask when production started, and a printed line is worth an hour of '
          'remembering.'),
    ('p', 'Then he counts. Eight days have passed since the price was agreed. Three of them '
          'were the board waiting for Thursday. One was Ms. Rania’s question. Two were the '
          'bank. Two were his own. The price was firm until the 30th, so eight days was safe — '
          'but only just.'),
    ('p', 'At the review, Mr. Tarek asks the useful question. “Which of those eight days can we '
          'remove?” Not the bank: two days is what banks take. Not Thursday: the board meets '
          'when it meets. But Ms. Rania’s question could have been answered in the file, '
          'because it was the obvious question. And Fadi’s copy to the bank, sent a day early, '
          'had already saved one.'),
    ('p', '“So next time,” says Mr. Tarek, “the file answers the currency question before she '
          'asks it.” He writes it on the board. It is not a rule about money. It is a rule '
          'about guessing what the other person will need.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done.)'),
    ('items0', [
        'What happens between nine and two on Thursday?   (Ms. Rania signs, Fadi scans the file to the bank, Rami gets the instruction stamped)',
        'What four words does Mr. Delgado write, and when?',
        'Why does Rami print the email?',
        'How are the eight days divided?',
        'Which days could not be removed, and why?',
        'What is the new rule, and what is it really about?',
    ]),
    ('ex', 'B. Complete each sentence with ONE word from the text. (0 is done for you.)'),
    ('items0', [
        'Ms. Rania signs on Thursday at nine.',
        'The transfer leaves on ____________.',
        'Mr. Delgado writes: “Deposit received. Production ____________.”',
        'Three of the eight days were the ____________ waiting for Thursday.',
        'Fadi’s copy to the bank saved ____________ day.',
        'Next time, the file answers the ____________ question before she asks it.',
    ]),
    ('ex', 'C. Discuss. Talk in pairs.'),
    ('items', [
        'Where do the delays happen in your company — inside or outside?',
        'What question does your manager always ask? Could it be answered in advance?',
    ]),
    ('ex', 'D. Find a word from the text that means: (0 is done for you.)'),
    ('items0', [
        'to make a copy with a machine and send it → (to scan it)',
        'marked with an official mark → s____________',
        'to take away → to r____________',
        'to think what will happen before it does → to g____________',
    ]),
]

# ============================================================ PART 9
B += [
    ('bar', 'Part 9  ·  Case Studies and Decisions', 'FINANCE'),
    ('fig', F.dos_donts('Ordering and paying: do’s and don’ts',
                        ['match every PO line to the offer',
                         'put the order number in the reference',
                         'say who pays the bank charges',
                         'send the file with the signature request'],
                        ['pay before the supplier is checked',
                         'change bank details on an email',
                         'promise a date the bank has not confirmed',
                         'mark everything “urgent”']),
     'Four habits that keep money and orders together.'),
    ('h3', 'Case 1 — New bank details, one day before payment  (strand A · abroad)'),
    ('p', 'The day before the transfer, an email arrives from your supplier’s address. “Please '
          'note our bank has changed. Use the account below for the deposit.” The signature and '
          'the logo look right. The amount is two hundred and nineteen thousand dollars.'),
    ('p', 'Choose the best action and say why.'),
    ('items', [
        '(  )  Use the new details. The email came from their address.',
        '(  )  Telephone your known contact on the number you already have, and confirm before '
        'anything moves.',
        '(  )  Reply to the email and ask them to confirm.',
        '(  )  Send a small test amount to the new account.',
    ]),
    ('p', 'Write one sentence to your bank telling them to hold the payment.'),
    ('lines', 2),
    ('h3', 'Case 2 — The signature that will not come  (strand B · inside)'),
    ('p', 'Your price is firm for three more days. The only person who can sign is travelling '
          'and does not answer email. Your General Manager’s limit is below the amount. Waiting '
          'costs you five per cent.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What can you ask the supplier for, instead of breaking the approval rule?',
        'What could the company change so that this does not happen again?',
        'Write one sentence to the supplier asking to extend the price.',
    ]),
    ('h3', 'Case 3 — The deposit that arrived short  (where the strands meet)'),
    ('p', 'Your supplier writes: “We have received 218,955 dollars, not 219,000. This is not '
          'thirty per cent, so we cannot release the order to production.” The difference is '
          'forty-five dollars of bank charges.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'Why is the supplier’s accounts clerk right to stop, even over forty-five dollars?',
        'What should have been written on the instruction to prevent this?',
        'Write one sentence that solves it today, and one that prevents it next time.',
    ]),
]

# ============================================================ PART 10
B += [
    ('bar', 'Part 10  ·  Review and Can-Do', 'ADMIN'),
    ('ex', 'A. Vocabulary. Complete the sentence.'),
    ('items', [
        'The paper that places an order with a supplier is the ____________ ____________.',
        'The company receiving the money is the ____________.',
        'The largest amount one person may approve is the ____________ ____________.',
        'The text saying what a payment is for is the ____________.',
        'The supplier’s paper saying “we accept” is the ____________ ____________.',
    ]),
    ('ex', 'B. Grammar. Complete with will, going to or the present continuous.'),
    ('items', [
        'The transfer ____________ (leave) on Sunday — the bank has the instruction.',
        'I ____________ (ask) Karim about the budget. I have just thought of it.',
        'We ____________ (order) 1,200 tonnes. We decided yesterday.',
        'The board ____________ (meet) at nine on Thursday.',
        'I think the rate ____________ (move) before December.',
        'They ____________ (not / start) production until the money clears.',
    ]),
    ('ex', 'C. Reading. Read the short text and answer.'),
    ('p', 'Bashak placed purchase order PO-4417 for 1,200 tonnes at 608 dollars a tonne, total '
          '729,600 dollars. The payment schedule is thirty per cent on order and seventy per '
          'cent before shipment. Because the deposit is above fifty thousand dollars, the board '
          'had to approve it. The transfer left on Sunday with the order number in the '
          'reference, and all bank charges were paid by Bashak.'),
    ('items', [
        'What is the total value of the order?',
        'Why did the board have to approve it?',
        'What two things did Bashak do to make sure the payment was not delayed?',
    ]),
    ('ex', 'D. Listening. Listen and answer. (Teacher reads.)'),
    ('p', '[Teacher reads] “It is leaving here on Sunday, and it usually arrives two working '
          'days later. I will send you the confirmation the same day. But put the purchase '
          'order number in the reference — without it, their accounts department will not know '
          'what the money is for.”'),
    ('items', [
        'When is the money leaving, and when will it arrive?',
        'What will the bank manager send, and when?',
        'What must go in the reference, and why?',
    ]),
    ('ex', 'E. Speaking. Work in pairs. One gives a payment instruction at the bank; one checks '
           'the details and asks about charges and the reference.'),
    ('ex', 'F. Writing. Write two sentences: one with “We are going to…” and one with '
           '“I am …-ing” for a fixed arrangement.'),
    ('nlines', 2),
    ('ex', 'G. Error correction. Find and correct one mistake in each sentence.'),
    ('items', [
        'We will going to order 1,200 tonnes. → ____________',
        'She is going sign it tomorrow. → ____________',
        'I will see the auditors at three. (it is in the diary) → ____________',
        'What time you are meeting the bank? → ____________',
        'They are going to not start production. → ____________',
    ]),
    ('ex', 'H. Match the word (1–5) to its meaning (a–e).'),
    ('items', [
        'remitter  ____   a. the day the money is available',
        'beneficiary  ____   b. what the banks charge',
        'value date  ____   c. the company sending the money',
        'bank charges  ____   d. the text saying what the payment is for',
        'reference  ____   e. the company receiving the money',
    ]),
    ('ex', 'I. Put the steps in order (1–6).'),
    ('items', [
        '(  )  the supplier confirms the deposit',
        '(  )  the board approves the file',
        '(  )  the bank sends the transfer',
        '(  )  we send the purchase order',
        '(  )  production starts',
        '(  )  we give the bank the payment instruction',
    ]),
    ('ex', 'Can-Do check. Tick what you can do.'),
    ('check', [
        'I can place an import order.',
        'I can talk about plans and arrangements.',
        'I can explain how and when we will pay.',
        'I can write an instruction to the bank.',
    ]),
]

# ============================================================ PART 11
B += [
    ('bar', 'Part 11  ·  Foundations for Further Study', 'ADMIN'),
    ('h3', 'Concept Spotlight: Work moves at the speed of the slowest signature'),
    ('fig', F.icon_row('Where the eight days went', 'THREE OUTSIDE · FIVE INSIDE', [
        ('calendar', 'board day'), ('doc', 'one question'), ('bank', 'two bank days'),
        ('clock', 'our own two'), ('tick', 'production'),
    ]), 'Most of the wait was ours, not theirs.'),
    ('p', 'In this unit you learned three ways to talk about the future, and that is not an '
          'accident. A company is, in a sense, nothing but a set of claims about the future. We '
          'will pay. We are going to order. The ship is arriving on the 14th. Everything a '
          'business does is a promise about something that has not happened yet, and the whole '
          'machine works only if the people in it can say clearly which kind of promise they '
          'are making.'),
    ('p', 'That is why the three forms are worth the trouble. “I’ll ask Karim” tells your '
          'colleague you have just decided, so do not plan around it yet. “We are going to open '
          'a third depot” tells them this is settled, and they can start thinking about it. '
          '“The board is meeting at nine on Thursday” tells them there is a time, a place and '
          'other people, so it will not move. Three sentences, three completely different '
          'amounts of certainty. A person who uses them carelessly is not making a grammar '
          'mistake. They are making a planning mistake.'),
    ('p', 'Now notice where the eight days went. Two days belonged to the banks, which nobody '
          'can change. Three belonged to the calendar, because the board meets on Thursdays. '
          'The rest belonged to Al-Hasan: one day for a question the file should have answered, '
          'and two for ordinary internal handling. Most companies, looking at a delay, blame '
          'the outside. Mr. Tarek did the harder and more useful thing, and asked which of our '
          'own days we could remove.'),
    ('p', 'Someone might answer that the real fix is to raise the approval limit, so that '
          'fewer things need a board. Sometimes that is right. But notice what the limit is '
          'protecting. It exists exactly so that a large amount gets a second pair of eyes, and '
          'the cost of that protection is measured in days. The question is never “rules or '
          'speed”. It is “which risks are worth days, and which are not” — and that is a '
          'decision a company should make calmly, in advance, not in a hurry on the 21st of '
          'November.'),
    ('p', 'So the real lesson of this unit is small and practical. Say which future you mean. '
          'Send the file, not the request. Answer the obvious question before it is asked. '
          'Those three habits are worth more than any clever negotiation, because they are the '
          'difference between a price you agreed and a price you still have.'),
    ('ex', 'A. Understanding check. Answer in your own words.'),
    ('items', [
        'Why does the writer say a company is “a set of claims about the future”?',
        'What does each of the three future forms tell a colleague?',
        'Where did most of the eight days actually go?',
        'What is the approval limit protecting, and what does it cost?',
    ]),
    ('ex', 'B. Apply it. Do this task with a partner.'),
    ('p', 'Think of the last thing that was late at your work. Write down where each day went, '
          'and mark each one “ours” or “theirs”. Then find one day that was yours and could be '
          'removed next time. Explain it to your partner in simple English.'),
    ('ex', 'C. Micro-writing (optional).'),
    ('p', 'Write a few sentences (50–70 words) about next week at your work. Use all three '
          'futures: one “will”, one “going to”, and one present continuous for a fixed '
          'arrangement.'),
]

TERMS = [
    ('purchase order', 'the paper that places an order with a supplier'),
    ('PO number', 'the number that identifies an order'),
    ('order confirmation', 'the supplier’s paper saying “we accept”'),
    ('proforma invoice', 'a price document used to arrange payment'),
    ('payment schedule', 'when and how much we will pay'),
    ('deposit', 'the money paid when the order is placed'),
    ('balance', 'the rest of the money, paid later'),
    ('instalment', 'one part of a payment made in stages'),
    ('in advance', 'before the goods are sent'),
    ('bank transfer', 'money moved from one bank to another'),
    ('remitter', 'the company sending the money'),
    ('beneficiary', 'the company receiving the money'),
    ('account number', 'the number of a bank account'),
    ('value date', 'the day the money is available'),
    ('bank charges', 'what the banks charge for a transfer'),
    ('reference', 'the text saying what a payment is for'),
    ('clear (v)', 'to arrive and be available in an account'),
    ('credited', 'put into an account'),
    ('debited', 'taken out of an account'),
    ('letter of credit', 'a bank promise to pay on documents'),
    ('approval', 'official permission to go ahead'),
    ('approval limit', 'the largest amount one person may approve'),
    ('authorised signatory', 'the person who is allowed to sign'),
    ('sign off', 'to approve formally'),
    ('board approval', 'permission from the board'),
    ('budget', 'the money set aside for something'),
    ('commitment', 'money the company has promised to spend'),
    ('deadline', 'the last possible date'),
    ('will', 'a decision now, a promise, or a prediction'),
    ('going to', 'a plan already decided'),
    ('arrangement', 'something fixed with a time and other people'),
    ('schedule (v)', 'to fix a time for something'),
    ('hold up (v)', 'to stop something going forward'),
    ('anticipate', 'to think what will happen before it does'),
    ('working day', 'a day when the banks are open'),
    ('bank holiday', 'a day when the banks are closed'),
]

KEY = [
    ('Warm-Up A', '1 The product, the quantity, the unit price, the total, the terms and the '
                  'payment schedule — all must match the offer. 2 Thirty per cent on order and '
                  'seventy per cent before shipment; the deposit is about USD 219,000. '
                  '3 Mr. Tarek up to $50,000; above that, the board. 4 She is seeing the '
                  'auditors and wants to ask them about the currency. 5 The purchase order '
                  'number in the payment reference — without it the supplier’s accounts '
                  'department will not know what the money is for.'),
    ('Warm-Up B', '1 T · 2 F · 3 T · 4 T · 5 F'),
    ('Warm-Up C', '1 schedule · 2 payment reference · 3 deposit'),
    ('Warm-Up D', 'Answers vary.'),
    ('P1 A', '0 c · 1 d · 2 f · 3 e · 4 h · 5 g · 6 a · 7 b  (b is the spare)'),
    ('P1 B', '1 purchase order · 2 order confirmation · 3 payment schedule · 4 beneficiary · '
             '5 approval limit · 6 bank transfer'),
    ('P1 C', '1 b · 2 d · 3 a · 4 c · 5 e'),
    ('P1 D', '1 depot · 2 tonne · 3 deliver · 4 catalogue · 5 past simple'),
    ('P1 E', '1 b · 2 a · 3 b · 4 b'),
    ('P1 F', 'We send it: purchase order, bank transfer · They send it: order confirmation, '
             'proforma invoice, order acknowledgement · Stays inside our company: approval file'),
    ('P1 G', '1 b · 2 a · 3 d · 4 e · 5 c · 6 f'),
    ('P1 H', '1 approval · 2 confirmation · 3 deposit · 4 transfer · 5 beneficiary · 6 reference'),
    ('P2 A', '1 won’t · 2 will · 3 will · 4 won’t'),
    ('P2 B', '1 are going to order · 2 is going to sign · 3 is going to be · '
             '4 are not going to wait'),
    ('P2 C', '1 am seeing · 2 are meeting · 3 is arriving · 4 is flying'),
    ('P2 D', '1 are meeting · 2 is going to rain · 3 am going to take · 4 will help'),
    ('P2 E', '1 b · 2 d · 3 a · 4 c · 5 e'),
    ('P2 F', '1 When is the transfer leaving? / When will the transfer leave? '
             '2 Who is going to sign? 3 Are you meeting the bank on Thursday? '
             '4 What time is the ship arriving?'),
    ('P2 G', '1 We are going to order 1,200 tonnes. 2 She is going to sign it tomorrow. '
             '3 I think it will arrive on Tuesday. 4 What time are you meeting the bank?'),
    ('P2 H', 'Answers vary — one “going to”, one present continuous.'),
    ('P2 I', '1 are sending · 2 will ask · 3 is meeting · 4 will move · 5 are not going to place '
             '/ won’t place'),
    ('P2 J', '1 The deposit is leaving on Sunday. 2 Production will start when the money clears. '
             '3 We are going to use Komosh for the freight. 4 The board is meeting at nine on '
             'Thursday.'),
    ('P3 D1 A', '1 The beneficiary details, against the invoice. 2 It is leaving on Sunday and '
                'will probably arrive on Tuesday. 3 Without it the supplier’s accounts '
                'department sees an amount and no name, and it sits for a week. 4 Shared '
                'charges, or all charges paid by the sender. 5 All charges, because he does not '
                'want an argument over forty dollars in December.'),
    ('P3 D1 B', '1 F · 2 T · 3 F · 4 T · 5 F'),
    ('P3 D1 C', '1 I am going to tell you the thing people forget · 2 I will send you the '
                'confirmation the same day · 3 If you choose “shared”, they will receive a '
                'little less than you send'),
    ('P3 D2 A', '1 On Ms. Rania’s desk; she wants to ask the auditors about the currency first. '
                '2 She is seeing the auditors. 3 She told Karim that morning. 4 He is sending '
                'the bank a copy of the file, which saves Rami a day.'),
    ('P3 D2 B', '1 B · 2 C · 3 B · 4 C'),
    ('P4 B', 'Answers vary — one plan and one arrangement from your own role.'),
    ('P5 A', '1 It is matched to an order in thirty seconds. 2 It becomes a problem on a desk — '
             'safe, but not doing its job. 3 Because the supplier receives an amount that is '
             'not exactly thirty per cent, and a careful clerk will not release the order. '
             '4 “Leaving on Sunday” is an arrangement the bank has fixed; “arriving on Tuesday” '
             'is only a prediction. 5 The money; the information attached to it is.'),
    ('P5 B', '1 C · 2 A · 3 B · 4 A · 5 C'),
    ('P5 C', '1 match · 2 beneficiary · 3 hold up · 4 holiday'),
    ('P5 D', '1 banks · 2 reference · 3 shared · 4 release · 5 arrangement · 6 prediction'),
    ('P5 F', '1 F · 2 T · 3 NOT GIVEN · 4 T'),
    ('P6 A', '1 “PO-4417, 30% deposit”. 2 Bashak pays all charges, so that the beneficiary '
             'receives the full amount. 3 Because the supplier is not going to start production '
             'until the money clears.'),
    ('P6 B', 'Order: 2 (Dear Mr. Haitham,) · 3 (Please arrange a transfer…) · 5 (Please put '
             '“PO-4417…” in the reference.) · 1 (All bank charges are for our account.) · '
             '6 (Our supplier is not going to start…) · 4 (Best regards, Rami)'),
    ('P7 A', '1 That a process happened, not that a number is right. 2 (any three) Did we look '
             'at more than one supplier? Is the supplier checked? What is the landed cost? Did '
             'we try to improve the terms? Is it in the budget? When does the money leave? '
             '3 Because the person receiving it has to find everything themselves. 4 She had '
             'one unanswered question about the currency, and the file did not answer it. '
             '5 A file that anticipates the question.'),
    ('P7 B', '1 line · 2 landed · 3 deadline · 4 urgent'),
    ('P7 D', '1 The department manager. 2 The General Manager (any new supplier). '
             '3 The board. 4 The General Manager.'),
    ('P8 A', '1 “Deposit received. Production starts.” — on Tuesday afternoon. 2 Because in '
             'December somebody will ask when production started. 3 Three were the board '
             'waiting for Thursday, one was Ms. Rania’s question, two were the bank, two were '
             'Rami’s own. 4 The bank’s two days and the board’s Thursday — banks take two days '
             'and the board meets when it meets. 5 The file answers the currency question '
             'before she asks it; it is a rule about anticipating what the other person needs.'),
    ('P8 B', '1 Sunday · 2 starts · 3 board · 4 one · 5 currency'),
    ('P8 D', '1 stamped · 2 remove · 3 guess'),
    ('P10 A', '1 purchase order · 2 beneficiary · 3 approval limit · 4 reference · '
              '5 order confirmation'),
    ('P10 B', '1 is leaving · 2 will ask · 3 are going to order · 4 is meeting · 5 will move · '
              '6 are not going to start'),
    ('P10 C', '1 USD 729,600. 2 Because the deposit was above fifty thousand dollars. '
              '3 Put the order number in the reference, and pay all the bank charges.'),
    ('P10 D', '1 Sunday; two working days later. 2 The confirmation, on the day it leaves. '
              '3 The purchase order number — without it the accounts department will not know '
              'what the money is for.'),
    ('P10 G', '1 We are going to order 1,200 tonnes. 2 She is going to sign it tomorrow. '
              '3 I am seeing the auditors at three. 4 What time are you meeting the bank? '
              '5 They are not going to start production.'),
    ('P10 H', '1 c · 2 e · 3 a · 4 b · 5 d'),
    ('P10 I', '2 the board approves the file · 4 we send the purchase order · '
              '6 we give the bank the payment instruction · 3 the bank sends the transfer · '
              '1 the supplier confirms the deposit · 5 production starts'),
    ('P11 A', '1 Because everything a business does is a promise about something that has not '
              'happened yet. 2 “I’ll…” = just decided, don’t plan around it; “going to” = '
              'settled; present continuous = fixed with a time and other people. 3 Five of the '
              'eight days were Al-Hasan’s own. 4 It makes sure a large amount gets a second '
              'pair of eyes, and it costs days.'),
]

UNIT = dict(
    n=4,
    title='Ordering and Paying Across Borders',
    grammar='will · going to · present continuous for arrangements',
    function='Finance + Admin',
    candos=[
        'I can place an import order',
        'I can talk about plans and arrangements',
        'I can explain how and when we will pay',
        'I can write an instruction to the bank',
    ],
    cando_line='You can place an order, arrange the money, and say which future you mean.',
    blocks=B,
    terms=TERMS,
    key=KEY,
    teaser=F.scene_banner(
        'Unit 5 — the goods are on the water',
        [('m', ORANGE), ('m', GREEN_D)],
        ['“She sailed on the 14th.', 'Where are the papers?”'],
        'WHAT TRAVELS WITH THE STEEL',
        ['The bill of lading', 'The packing list',
         'The certificate of origin', 'The customs declaration'],
        quote='“The goods are cleared by Komosh.”'),
)
