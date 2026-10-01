# -*- coding: utf-8 -*-
"""Unit 8 — Getting Paid and Giving Credit.
Strand A: paying the supplier abroad — the balance, the rate, the claim (Rami, Karim).
Strand B: collecting from the Syrian customer — the aged debt list (Huda, Eng. Bilal).
"""
import frames as F
from art import NAVY, BLUE, ORANGE, GREEN, GREEN_D, PURPLE, GREY

B = []

PEOPLE = [
    ('Huda', 'Accountant', 'h', BLUE),
    ('Eng. Bilal', 'Maham · Site', 'm', GREY),
    ('Karim', 'Fin. Controller', 'm', GREY),
    ('Rami', 'Bashak · Imports', 'm', GREEN_D),
    ('Mr. Haitham', 'The bank', 'm', NAVY),
    ('Ms. Maya', 'Alten IL · Retail', 'w', ORANGE),
]

# ============================================================ unit openers
B += [
    ('fig', F.split_panel('Two directions, one bank account',
                          'MONEY OUT · to the supplier',
                          ['70% balance on PO-4417', 'Due before shipment of the next lot',
                           'A claim of 40 t not yet settled', 'In dollars'],
                          'MONEY IN · from our customers',
                          ['Maham, 200 t, 60 days — now due', 'Three retail accounts overdue',
                           'One customer disputing a bag count', 'In Syrian pounds']),
     'The same week: one payment to make, several to collect.'),
    ('fig', F.team_strip('The people in this unit', PEOPLE),
     'One side asks for money politely; the other side has to pay it.'),
]

# ============================================================ WARM UP
B += [
    ('bar', 'Warm Up', 'FINANCE'),
    ('p', 'Look at the pictures. Answer these questions before you read.'),
    ('items', [
        'How long do your customers have to pay?',
        'Who asks a customer for money when it is late?',
        'Has your company ever not been paid? What happened?',
    ]),
    ('h3', 'Read'),
    ('p', 'Huda prints the aged debt list every Monday. It is one page, and it tells her who '
          'owes money and for how long. This Monday there is a line she has been expecting. '
          'Maham Co., two hundred tonnes, sixty days — and the sixty days ended last Thursday.'),
    ('p', 'Maham is a company inside the Group, which makes it easier and harder at the same '
          'time. Easier, because nobody is going to disappear. Harder, because it is '
          'uncomfortable to telephone a colleague about money.'),
    ('p', 'She telephones anyway. Eng. Bilal is honest with her. The warehouse he built has '
          'been finished and handed over, but his own customer has not paid him, and he cannot '
          'pay out money he has not received. “You should talk to Karim,” he says. “I am not '
          'refusing. I am waiting.”'),
    ('p', 'Karim looks at it for ten minutes and makes a decision that is not obvious. “He '
          'could pay half now and half in June,” he says. “That is better than sixty more days '
          'of nothing, and it keeps the number honest. But Huda, write it down. A part payment '
          'that nobody writes down becomes an argument in August.”'),
    ('p', 'Meanwhile the other direction is also moving. The seventy per cent balance for '
          'PO-4417 is due to Westgate, and the claim for the forty tonnes has still not been '
          'settled. Rami suggests the obvious thing: pay the balance less the value of the '
          'claim.'),
    ('p', 'Karim shakes his head. “You shouldn’t hold back money for a claim they have not '
          'agreed. They might see it as a late payment, and then we are the ones in the wrong. '
          'Pay the balance in full, on the day. Then chase the claim as a claim.” He writes one '
          'line on the file: never mix two arguments in one payment.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What does the aged debt list tell Huda?   (who owes money, and for how long)',
        'Why is it both easier and harder that Maham is inside the Group?',
        'Why has Eng. Bilal not paid?',
        'What does Karim suggest, and what condition does he attach?',
        'What does Rami suggest about the balance to Westgate?',
        'Why does Karim refuse, and what rule does he write down?',
    ]),
    ('ex', 'B. True or False? Write T or F. (0 is done for you.)'),
    ('items0', [
        'The aged debt list is printed once a year.   (F)',
        'Maham’s sixty days ended last Thursday.   ____',
        'Eng. Bilal refuses to pay.   ____',
        'Karim suggests half now and half in June.   ____',
        'Karim agrees to hold back money for the claim.   ____',
        'Karim says the balance should be paid in full, on the day.   ____',
    ]),
    ('ex', 'C. Find the words. Find a word or phrase in the text that means: (0 is done for you.)'),
    ('items0', [
        'a list showing who owes money and for how long → (an aged debt list)',
        'money that should have been paid already → an o____________ amount',
        'paying only a part of what is owed → a p____________ p____________',
        'to take one amount away from another → to o____________ it',
    ]),
    ('ex', 'D. Over to you. Answer about yourself.'),
    ('items', [
        'What should a company do when a good customer pays late?',
        'Who in your company decides how much credit a customer gets?',
        'What could you offer a customer who cannot pay the whole amount?',
    ]),
]

# ============================================================ PART 1
B += [
    ('bar', 'Part 1  ·  Vocabulary and Terminology', 'FINANCE'),
    ('h3', 'The aged debt list'),
    ('fig', F.doc_card('The aged debt list', 'Week 49 · amounts owed to us',
                       [('Maham Co.', '200 t · 4 days overdue'),
                        ('Homs Builders', '30 days overdue'),
                        ('Alten IL account 14', '12 days overdue'),
                        ('Alten IL account 22', 'in dispute — bag count'),
                        ('Three others', 'not yet due'),
                        ('Total overdue', 'about 9% of sales'),
                        ('Owner', 'Huda, Accounts')], accent=BLUE),
     'One page a week, and nobody can pretend they did not know.'),
    ('ex', 'A. Match each word (1–7) with its meaning (a–h). There is one you do not need. '
           '(0 is done for you.)'),
    ('items0', [
        'overdue  (e)',
        'debtor  ____   a. the most credit a customer may have',
        'creditor  ____   b. money we will never be paid',
        'credit limit  ____   c. a company that owes us money',
        'outstanding  ____   d. a company we owe money to',
        'bad debt  ____   e. money that should have been paid already',
        'settle  ____   f. still not paid',
        'remittance advice  ____   g. to pay in full and close the account',
        '          h. a note saying what a payment is for',
    ]),
    ('ex', 'B. Complete the sentences with the words in the word bank.'),
    ('bank', 'Word bank:', ['overdue', 'credit limit', 'outstanding', 'settle',
                            'reminder', 'instalment']),
    ('items', [
        'The invoice is now four days ____________.',
        'His ____________ is fifty million pounds, and he is close to it.',
        'Two invoices are still ____________ from October.',
        'He has promised to ____________ the whole amount by June.',
        'We sent a polite ____________ on Monday morning.',
        'He will pay the first ____________ this week and the rest in June.',
    ]),
    ('h3', 'Money in and money out'),
    ('fig', F.icon_row('The two sides of the account', 'WHO OWES WHOM', [
        ('money', 'receivable'), ('bank', 'payable'), ('calendar', 'due date'),
        ('clock', 'overdue'), ('doc', 'statement'),
    ]), 'Money we are owed, and money we owe.'),
    ('ex', 'C. Match the term (1–5) with its meaning (a–e).'),
    ('items', [
        'receivable  ____   a. the day the money must be paid',
        'payable  ____   b. money our customers owe us',
        'due date  ____   c. a list of everything owed on an account',
        'statement  ____   d. money we owe our suppliers',
        'cash flow  ____   e. money actually moving in and out',
    ]),
    ('h3', 'Chasing a payment'),
    ('fig', F.label_panel('The four stages, in order', [
        ('1 · a reminder', 'polite, assumes they forgot'),
        ('2 · a telephone call', 'find out the real reason'),
        ('3 · an agreement', 'dates, in writing'),
        ('4 · escalation', 'the manager, then stop supply'),
    ], cols=4), 'Never start at stage four, and never stay at stage one.'),
    ('ex', 'D. Odd one out. Which word is different? Circle it.'),
    ('items', [
        'overdue · outstanding · unpaid · delivered',
        'debtor · creditor · customer · container',
        'reminder · statement · invoice · tolerance',
        'should · could · might · did',
        'settle · pay · clear · reject',
    ]),
    ('ex', 'E. Choose the best answer.'),
    ('items', [
        'Money our customers owe us is a…   (a) receivable   (b) payable',
        'The most credit a customer may have is the…   (a) credit limit   (b) credit terms',
        'Money we will never be paid is a…   (a) bad debt   (b) discount',
        'A note saying what a payment is for is a…   (a) statement   (b) remittance advice',
    ]),
    ('ex', 'F. Classify. Write each item in the correct column.'),
    ('bank', 'Items:', ['an overdue customer', 'the supplier balance', 'a credit limit',
                        'a bad debt', 'a reminder letter', 'our bank charges']),
    ('grid', ['Money in', 'Money out', 'A control'], 3),
    ('ex', 'G. Match the two halves (1–6 with a–f).'),
    ('items', [
        'a credit  ____   a. debt',
        'a bad  ____   b. limit',
        'a part  ____   c. date',
        'a due  ____   d. payment',
        'an aged  ____   e. advice',
        'a remittance  ____   f. debt list',
    ]),
    ('ex', 'H. Complete the paragraph with the words in the box.'),
    ('bank', 'Box:', ['instalments', 'might', 'overdue', 'reminder', 'should', 'writing']),
    ('p', 'The invoice is four days (1)____________. We sent a polite (2)____________ on Monday. '
          'The customer says he (3)____________ be able to pay half this week. Karim says we '
          '(4)____________ accept two (5)____________ rather than wait sixty more days — but '
          'everything must be put in (6)____________.'),
]

# ============================================================ PART 2
B += [
    ('bar', 'Part 2  ·  Grammar — should · shouldn’t · could · may · might', 'FINANCE'),
    ('fig', F.grammar_card('should and shouldn’t — advice', [
        ('the right thing to do', 'should', 'You should telephone before you write again.'),
        ('the wrong thing', 'shouldn’t', 'You shouldn’t hold back money for a claim.'),
        ('asking for advice', 'Should I…?', 'Should I send another reminder?'),
    ], 'should + verb — no to, no -s:  he should call  ·  NOT  he shoulds to call'),
     'Advice, not an order.'),
    ('p', 'We use SHOULD to say what is a good idea, and SHOULDN’T to say what is not. It is '
          'advice, so it is softer than must. Compare: you must pay by Thursday (a rule) and '
          'you should pay before Thursday (good advice).'),
    ('fig', F.grammar_card('could — a possible option', [
        ('suggesting an option', 'could', 'You could pay half now and half in June.'),
        ('polite request', 'Could you…?', 'Could you let me know by Friday?'),
        ('past ability', 'could', 'He couldn’t pay because his customer hadn’t paid.'),
    ], 'could is softer than should — it offers, it does not advise.'),
     'The word that opens a door without pushing.'),
    ('p', 'We use COULD to suggest one possible option among several. You could pay half now. '
          'We could extend the terms this once. It does not say the option is best — it says it '
          'is available. That is why it is so useful when you are negotiating.'),
    ('fig', F.grammar_card('may and might — perhaps', [
        ('perhaps yes', 'may / might', 'They might see it as a late payment.'),
        ('perhaps not', 'may not / might not', 'He might not pay before June.'),
        ('may for permission too', 'may', 'May I ask when you expect to pay?'),
    ], 'may and might mean almost the same. might is a little less certain.'),
     'For things that are possible but not certain.'),
    ('fig', F.split_panel('Advice in two directions',
                          'TO THE CUSTOMER · asking for money',
                          ['You could pay half now and half in June.',
                           'You should let me know before the due date.',
                           'We may have to hold the next delivery.',
                           'Could you confirm the date in writing?'],
                          'TO OURSELVES · paying the supplier',
                          ['We shouldn’t hold back money for a claim.',
                           'We should pay the balance in full, on the day.',
                           'They might see it as a late payment.',
                           'We could ask for a credit note separately.']),
     'The same four words, used to advise and to offer.'),
    ('watch', 'should, could, may and might take no to and no -s: he should pay, she might '
              'come. And remember the difference between advice and an order: you should pay '
              'is a suggestion; you must pay is a rule.'),
    ('h3', 'Form'),
    ('p', 'should / shouldn’t + verb     ·     could + verb     ·     may / might + verb     '
          '·     Could you…? / May I…?'),
    ('ex', 'A. Complete with SHOULD or SHOULDN’T. (0 is done for you.)'),
    ('items0', [
        'You should telephone before you write again.',
        'We ____________ hold back money for a claim they have not agreed.',
        'You ____________ put every part payment in writing.',
        'We ____________ wait sixty more days for nothing.',
        'You ____________ send a reminder on the day the invoice falls due.',
    ]),
    ('ex', 'B. Rewrite the advice with the word in brackets.'),
    ('items', [
        'It is a good idea to telephone first. (should) → ____________',
        'One option is to pay in two instalments. (could) → ____________',
        'Perhaps they will treat it as late. (might) → ____________',
        'It is a bad idea to mix two arguments. (shouldn’t) → ____________',
    ]),
    ('ex', 'C. Complete with COULD, MAY or MIGHT.'),
    ('items', [
        'You ____________ pay half now and half in June — it is one option.',
        'They ____________ see it as a late payment. We cannot be sure.',
        '____________ I ask when you expect to pay?',
        'He ____________ not have the money before his own customer pays.',
    ]),
    ('ex', 'D. Advice or offer? Write ADVICE or OFFER. (0 is done for you.)'),
    ('items0', [
        'You should pay before the due date.   (advice)',
        'You could pay in two instalments.   ____',
        'We shouldn’t mix a claim with a payment.   ____',
        'We could extend your terms this once.   ____',
        'You should put it in writing.   ____',
    ]),
    ('ex', 'E. Make polite requests with COULD or MAY.'),
    ('items', [
        '(?) you / confirm the date in writing → ____________',
        '(?) I / ask when you expect to pay → ____________',
        '(?) you / send the remittance advice → ____________',
        '(?) I / speak to your accounts department → ____________',
    ]),
    ('ex', 'F. Match the situation (1–5) with the sentence (a–e).'),
    ('items', [
        'He cannot pay the whole amount.  ____   a. You should put it in writing.',
        'You are not sure what they will think.  ____   b. He could pay in two instalments.',
        'A colleague forgot to record an agreement.  ____   c. They might see it as a late payment.',
        'You want a date, politely.  ____   d. We shouldn’t hold back the balance.',
        'Your colleague wants to offset a claim.  ____   e. Could you confirm by Friday?',
    ]),
    ('ex', 'G. Find and correct the mistake in each sentence. (0 is done for you.)'),
    ('items0', [
        'He shoulds to pay today. → (He should pay today.)',
        'You should to telephone him first. → ____________',
        'They might to see it as late. → ____________',
        'We could extending the terms. → ____________',
        'She shouldn’t holds back the money. → ____________',
    ]),
    ('ex', 'H. About you. Write two sentences: one giving advice with “should”, and one '
           'offering an option with “could”.'),
    ('nlines', 2),
    ('ex', 'I. Complete with should, shouldn’t, could, may or might.'),
    ('items', [
        'We ____________ pay the balance in full, on the day.',
        'You ____________ mix a claim and a payment — it makes us look wrong.',
        'He ____________ pay half now; that is one possibility.',
        '____________ I ask what the delay is?',
        'They ____________ refuse, but I think they will agree.',
    ]),
    ('ex', 'J. Give advice for each problem.'),
    ('items', [
        'A good customer is four days late. → “You ____________”',
        'A customer offers half now, half in June. → “We ____________”',
        'A colleague wants to deduct a claim from a payment. → “We ____________”',
        'You are not sure whether the supplier will accept. → “They ____________”',
    ]),
]

# ============================================================ PART 3
B += [
    ('bar', 'Part 3  ·  Listening and Dialogue', 'FINANCE'),
    ('fig', F.dialogue_scene(('h', BLUE), ['Sixty days ended', 'last Thursday, Bilal.'],
                             ('m', GREY), ['I know. My customer', 'hasn’t paid me either.']),
     'Strand B · asking a colleague for money.'),
    ('h3', 'Dialogue 1 — Chasing a late payment (accounts calling the site)'),
    ('p', 'Listen and read. (Your teacher will read the dialogue, or play the audio.)'),
    ('dlg', [
        ('Huda', 'Bilal, it is Huda from accounts. The two hundred tonnes — sixty days ended '
                 'last Thursday.'),
        ('Eng. Bilal', 'I know. I have the invoice in front of me.'),
        ('Huda', 'Is there a problem with it? A wrong quantity, a wrong price?'),
        ('Eng. Bilal', 'No, the invoice is correct. The warehouse is finished and handed over. '
                       'But my customer has not paid me, and I cannot pay out money I have not '
                       'received.'),
        ('Huda', 'Thank you for being straight with me. When do you expect them to pay you?'),
        ('Eng. Bilal', 'They might pay at the end of this month. They might not.'),
        ('Huda', 'Then could I suggest something? You could pay half now, from your own '
                 'account, and half in June when they settle.'),
        ('Eng. Bilal', 'I could do half. Yes.'),
        ('Huda', 'Good. I will put both dates in an email this afternoon, and you should reply '
                 'just confirming them. Not for me — for August, when neither of us remembers '
                 'this conversation.'),
        ('Eng. Bilal', 'That is fair. And Huda — you should ask Karim about Homs Builders. '
                       'They are thirty days late with me as well.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What is Huda calling about?   (the invoice for 200 tonnes, which is overdue)',
        'What is the first thing she asks, and why is that a good question?',
        'Why has Eng. Bilal not paid?',
        'What does Huda suggest, and in what words?',
        'Why does she want an email reply?',
        'What does Eng. Bilal tell her at the end?',
    ]),
    ('ex', 'B. True or False? Write T or F.'),
    ('items', [
        'There is a mistake on the invoice.   ____',
        'Eng. Bilal’s customer has paid him.   ____',
        'Huda suggests two instalments.   ____',
        'She wants the agreement in writing.   ____',
        'Homs Builders have paid Eng. Bilal.   ____',
    ]),
    ('ex', 'C. Language focus. Find in the dialogue: (0 is done for you.)'),
    ('items0', [
        'a polite way to make a suggestion → (Then could I suggest something?)',
        'a sentence with “could” offering an option → ____________',
        'a sentence with “might” twice → ____________',
        'a sentence giving advice with “should” → ____________',
    ]),
    ('fig', F.half_scene('m', GREY, ['Shouldn’t we just deduct', 'the forty tonnes?']),
     'Strand A · the same week, the other direction.'),
    ('h3', 'Dialogue 2 — Paying the supplier (inside finance)'),
    ('dlg', [
        ('Rami', 'Karim, the seventy per cent is due to Westgate on Thursday. The claim for the '
                 'forty tonnes is still open. Shouldn’t we just deduct it?'),
        ('Karim', 'No. You shouldn’t hold back money for a claim they have not agreed.'),
        ('Rami', 'But they owe it to us.'),
        ('Karim', 'They may owe it. They have not said so yet. If we pay short, they might '
                  'treat it as a late payment, and then the conversation changes — suddenly we '
                  'are the ones in the wrong, and the claim is forgotten.'),
        ('Rami', 'So we pay in full and chase a company that owes us money.'),
        ('Karim', 'We pay in full, on the day, and we chase the claim as a claim. Two '
                  'conversations, two files. You could put it in the same email if you like, '
                  'but never in the same payment.'),
        ('Rami', 'And if they refuse the claim?'),
        ('Karim', 'Then we have a clean record and a strong position. Never mix two arguments '
                  'in one payment.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What does Rami suggest doing about the balance?',
        'Why does Karim refuse?',
        'What does Karim say might happen if they pay short?',
        'What does Karim allow, and what does he forbid?',
    ]),
    ('ex', 'B. Listen again and choose the best answer (A–D).'),
    ('items', [
        'The balance due is…   A) 30%  B) 40%  C) 60%  D) 70%',
        'The claim is for … tonnes.   A) four  B) forty  C) two hundred  D) twelve',
        'If they pay short, the supplier might treat it as a…   A) discount  B) claim  '
        'C) late payment  D) credit note',
        'Karim’s rule is: never mix two … in one payment.   A) invoices  B) arguments  '
        'C) currencies  D) orders',
    ]),
]

# ============================================================ PART 4
B += [
    ('bar', 'Part 4  ·  Speaking and Your Role', 'FINANCE'),
    ('fig', F.label_panel('Phrases for asking for money and offering a way out', [
        ('Is there a problem with the invoice?', 'opening without blame'),
        ('When do you expect to pay?', 'asking for a date'),
        ('You could pay half now…', 'offering an option'),
        ('I’ll put both dates in an email.', 'writing it down'),
        ('We may have to hold the next delivery.', 'a consequence, softly'),
        ('Could you confirm by Friday?', 'closing politely'),
    ], cols=3), 'Firm about the money, easy about the person.'),
    ('ex', 'A. Role-play: the overdue invoice. Student A is from accounts; Student B is a '
           'customer who cannot pay in full. Then change roles.'),
    ('items', [
        'A: Say which invoice and how many days overdue.',
        'B: Say the invoice is correct, but give your reason.',
        'A: Ask when they expect to pay.',
        'B: Say you are not sure, using “might”.',
        'A: Offer an option with “could”.',
        'B: Accept a part of it, and agree to confirm in writing.',
    ]),
    ('fig', F.label_panel('Every job gives different advice', [
        ('Accounts', 'you should send the reminder on day one'),
        ('Sales', 'we could offer a discount for early payment'),
        ('Finance', 'we shouldn’t raise his credit limit yet'),
        ('Imports', 'we should pay the supplier in full'),
        ('Depot', 'we shouldn’t release more goods'),
        ('Admin', 'you could put both dates in one email'),
    ], cols=3), 'Six roles, one set of modal verbs.'),
    ('ex', 'B. Your Role. Give one piece of advice from YOUR job, using should or could. '
           '(Choose your real role.)'),
    ('items', [
        '[Finance] Accountant: “You should send the reminder on the day it falls due.”',
        '[Trade] Sales: “We could offer two per cent for payment in ten days.”',
        '[Finance] Financial Controller: “We shouldn’t raise his limit until he settles.”',
        '[Trade] Import Manager: “We should pay the supplier in full and claim separately.”',
        '[Logistics] Depot: “We shouldn’t release more goods to an overdue account.”',
        '[Admin] Assistant: “You could put both dates in one email and ask him to reply.”',
    ]),
    ('ex', 'C. Ask your partner. Walk around and ask three people.'),
    ('items', [
        'What should a company do on the first day an invoice is late?',
        'What could you offer a customer who cannot pay in full?',
        'What shouldn’t you ever do when you are chasing money?',
    ]),
    ('ex', 'D. Discuss. Ask and answer.'),
    ('items', [
        'Is it harder to ask a colleague for money than a stranger? Why?',
        'Should a company stop supplying a customer who is late? When?',
    ]),
]

# ============================================================ PART 5
B += [
    ('bar', 'Part 5  ·  Extended Reading', 'FINANCE'),
    ('h3', 'A sale is not a sale until the money arrives'),
    ('fig', F.route_strip('The long road from an order to cash', [
        ('doc', 'Order'), ('truck', 'Delivery'), ('money', 'Invoice'),
        ('calendar', 'Credit period'), ('bank', 'Cash'),
    ]), 'Four of the five steps feel like success. Only the last one is.'),
    ('p', 'Every business celebrates the order. Almost none celebrates the payment, and that is '
          'the wrong way round. An order is a promise. A delivery is a cost. An invoice is a '
          'piece of paper. Only the money in the bank is a sale, and between the order and the '
          'money there are sixty days in which anything can happen.'),
    ('p', 'This is why giving credit is a decision and not a courtesy. When you let a customer '
          'pay in sixty days, you are lending them money. You are paying your supplier, your '
          'staff and your transport now, and getting paid two months later, and the difference '
          'has to come from somewhere. A company that grows fast while giving long credit can '
          'run out of cash while its order book is full, and that is one of the commonest ways '
          'a profitable business dies.'),
    ('p', 'So credit has to be controlled in three ways. First, a limit: the most any one '
          'customer may owe at one time. Second, a term: how long they have. Third, somebody '
          'whose job it is to watch. The third is the one companies forget, exactly as they '
          'forget the reorder level, and for the same reason — it belongs to nobody until it '
          'is given a name.'),
    ('p', 'Chasing, when it is needed, should be fast and kind. Fast, because the first week is '
          'worth more than the next month: a reminder on the day an invoice falls due is read '
          'as efficiency, while a reminder after three weeks is read as desperation. Kind, '
          'because most late payers are not thieves. They are companies with their own late '
          'customers, which is exactly what Eng. Bilal was. The right first question is never '
          '“why haven’t you paid?” but “is there a problem with the invoice?” — because about a '
          'quarter of the time, there is one, and the customer was quietly waiting for somebody '
          'to ask.'),
    ('p', 'And when a customer genuinely cannot pay in full, an agreement beats a demand. Half '
          'now and half in June is money. Sixty more days of silence is not. But the agreement '
          'must be written down on the day it is made, because the two people who understand it '
          'perfectly today will both have forgotten the details by August — and only one of '
          'them will be asked to remember.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'Why is celebrating the order “the wrong way round”?   (an order is only a promise; only the money in the bank is a sale)',
        'What are you really doing when you give a customer sixty days?',
        'How can a profitable business with a full order book die?',
        'What are the three ways credit must be controlled?',
        'Why should chasing be fast, and why should it be kind?',
        'Why is the first question “is there a problem with the invoice?”',
    ]),
    ('ex', 'B. Choose the best answer (A–D).'),
    ('items', [
        'Only … is a sale.   A) the order  B) the delivery  C) the invoice  D) the money in the bank',
        'Giving sixty days credit is a form of…   A) discount  B) lending  C) marketing  D) insurance',
        'The control companies most often forget is…   A) the limit  B) the term  C) the owner  '
        'D) the invoice',
        'A reminder after three weeks is read as…   A) efficiency  B) desperation  C) politeness  '
        'D) a mistake',
        'About a quarter of late payments are caused by…   A) dishonesty  B) a problem with the '
        'invoice  C) bank delays  D) holidays',
    ]),
    ('ex', 'C. Find a word or phrase in the text that means:'),
    ('items', [
        'to have no money left → to r____________ o____________ of cash',
        'the orders a company has not yet delivered → the order b____________',
        'a feeling of having no hope → d____________',
        'a polite thing you do for someone → a c____________',
    ]),
    ('ex', 'D. Complete the summary with ONE word in each gap.'),
    ('p', 'Only the (1)____________ in the bank is a sale. Giving sixty days of credit means '
          '(2)____________ the customer money. Credit needs a (3)____________, a term, and '
          'somebody whose job it is to (4)____________. Chasing should be fast and '
          '(5)____________, and any agreement must be put in (6)____________ on the day.'),
    ('ex', 'E. Discuss. Talk in pairs.'),
    ('items', [
        'How long does your company wait before sending a first reminder?',
        'Has your company ever lost money because a customer did not pay?',
    ]),
    ('ex', 'F. True or False? (about the reading). Write T, F or NOT GIVEN.'),
    ('items', [
        'An invoice is the same thing as a sale.   ____',
        'A profitable company can run out of cash.   ____',
        'Most late payers are dishonest.   ____',
        'Half now and half later is better than sixty more days of silence.   ____',
    ]),
]

# ============================================================ PART 6
B += [
    ('bar', 'Part 6  ·  Writing (a real email)', 'ADMIN'),
    ('h3', 'Model — A payment reminder that keeps the customer'),
    ('fig', F.doc_card('The shape of a reminder', 'Reminder',
                       [('1  The facts', 'invoice, amount, due date'),
                        ('2  No blame', '“in case it was missed”'),
                        ('3  The question', '“is there a problem with it?”'),
                        ('4  The option', '“you could…”'),
                        ('5  The date', 'what you need, by when'),
                        ('6  The relationship', 'one warm line')], accent=ORANGE),
     'Firm about the money. Easy about the person.'),
    ('p', 'Subject: Invoice INV-2219 — now due. Dear Eng. Bilal, I am writing about invoice '
          'INV-2219 for the two hundred tonnes delivered to the Homs site. The sixty-day term '
          'ended on Thursday, so the amount is now four days overdue. I am sending this in case '
          'the invoice was simply missed. If there is a problem with it — a quantity, a price, '
          'or a document you need from us — please tell me and I will correct it today. If the '
          'difficulty is timing, you could settle half this week and the balance in June, and I '
          'will confirm both dates in writing. Could you let me know by Friday which you prefer? '
          'It has been a good project and we would like the paperwork to be as straight as the '
          'warehouse. Best regards, Huda Accountant, Al-Hasan Holding Group.'),
    ('ex', 'A. Answer about the email. (0 is done for you.)'),
    ('items0', [
        'Which invoice is it about, and how late is it?   (INV-2219, four days overdue)',
        'What reason does Huda give for writing?',
        'What two possibilities does she offer?',
        'What does she ask for, and by when?',
    ]),
    ('ex', 'B. Put the email in order (1–6).'),
    ('items', [
        '(  )  Could you let me know by Friday which you prefer?',
        '(  )  Dear Eng. Bilal,',
        '(  )  The sixty-day term ended on Thursday.',
        '(  )  If there is a problem with it, please tell me.',
        '(  )  You could settle half this week and the balance in June.',
        '(  )  Best regards, Huda',
    ]),
    ('h3', 'Guided writing'),
    ('ex', 'C. Now you write. Write a payment reminder (80–110 words). Use “could” to offer an '
           'option and “should” or “may” once, and ask one question that is not “why haven’t '
           'you paid?”.'),
    ('p', 'Plan:  1) “Dear …,”   2) “I am writing about invoice … for ….”   3) “The … term '
          'ended on … , so it is now … overdue.”   4) “If there is a problem with it, ….”   '
          '5) “You could ….”   6) “Could you let me know by …?”   7) “Best regards, …”'),
    ('p', 'Sentence starters:  “I am writing about invoice…” · “I am sending this in case…” · '
          '“If there is a problem with it…” · “You could … and …” · “Could you let me know '
          'by…?”'),
    ('lines', 5),
    ('ex', 'D. Checklist. Tick each one when you have checked your reminder.'),
    ('check', [
        'I gave the invoice number, the amount and the due date.',
        'I did not blame the customer.',
        'I asked whether there is a problem with the invoice.',
        'I offered one option with “could”.',
        'I asked for an answer by a date.',
    ]),
]

# ============================================================ PART 7
B += [
    ('bar', 'Part 7  ·  Trade-Skills Track', 'FINANCE'),
    ('h3', 'Setting a credit limit, and knowing when to stop'),
    ('fig', F.doc_card('The credit card for a customer', 'Maham Co.',
                       [('Credit limit', 'SYP … (set by Karim)'),
                        ('Terms', '60 days, first order'),
                        ('Currently owed', '200 t invoice'),
                        ('Days overdue', '4'),
                        ('Payment history', 'paid on time, 3 of 3'),
                        ('Review date', 'after this settles'),
                        ('Owner', 'Huda, Accounts')], accent=GREEN_D),
     'A limit, a term, a history and a name.'),
    ('p', 'A credit limit is not a judgement about a customer’s honesty. It is a decision about '
          'how much of your own money you are willing to have outside the building at one '
          'time. A completely honest customer can still fail, and when they do, your limit is '
          'the size of the hole.'),
    ('p', 'Three things set the number. The first is how much you can afford to lose without '
          'being damaged — not how much you expect to lose, but how much you could survive. '
          'The second is the customer’s payment history, which is the only honest evidence you '
          'have: three invoices paid on time are worth more than any reference. The third is '
          'the size of their business, because a customer who owes you more than they can turn '
          'over in a month is a customer you have lent too much to.'),
    ('p', 'Then comes the part that takes nerve: stopping. The rule should be written before '
          'you need it, and it should be mechanical. At thirty days overdue, no new orders are '
          'released until the account is settled or an agreement is in writing. Mechanical, '
          'because the moment it becomes a judgement, it becomes a conversation, and the '
          'customer who argues best gets the most credit — which is exactly backwards.'),
    ('p', 'And note what the rule does not say. It does not say stop talking to them. A '
          'suspended account with a weekly telephone call usually pays. A suspended account '
          'with a silence usually does not, because silence tells the customer that you have '
          'written them off, and a customer who believes that will pay somebody else first.'),
    ('fig', F.dos_donts('Credit and collection: do’s and don’ts',
                        ['set the limit before the first order',
                         'send the reminder on day one',
                         'ask if there is a problem with the invoice',
                         'put every agreement in writing the same day'],
                        ['decide the limit by how much you like them',
                         'wait three weeks to say anything',
                         'deduct a claim from a payment',
                         'go silent on a suspended account']),
     'The rules are easy. Applying them to a friend is not.'),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What is a credit limit really a decision about?',
        'What three things set the number?',
        'Why is payment history the best evidence?',
        'Why should the stopping rule be mechanical rather than a judgement?',
        'Why is silence on a suspended account dangerous?',
    ]),
    ('ex', 'B. Listen and complete. Karim explains the policy. Write the missing word.'),
    ('items', [
        'Karim: A limit is how much of our own money is outside the ____________.',
        'Karim: Three invoices paid on time are worth more than any ____________.',
        'Karim: At thirty days overdue, no new orders are ____________.',
        'Karim: A suspended account with a weekly telephone call usually ____________.',
    ]),
    ('ex', 'C. Practice. Write a credit card for one of your customers, using the seven lines '
           'above. Then tell your partner at what point you would stop supplying them, and why '
           'that point and not another.'),
    ('ex', 'D. What should you do? Answer with should, shouldn’t or could.'),
    ('items', [
        'An invoice falls due today and is unpaid. → ____________',
        'A customer is thirty days overdue and wants more goods. → ____________',
        'A customer offers half now, half in June. → ____________',
        'A supplier has not agreed your claim, and their balance is due. → ____________',
    ]),
]

# ============================================================ PART 8
B += [
    ('bar', 'Part 8  ·  Consolidation', 'FINANCE'),
    ('h3', 'Paid in full, chased in full'),
    ('fig', F.split_panel('What was decided on Thursday',
                          'MONEY OUT · Westgate',
                          ['70% balance paid in full, on the day',
                           'Nothing deducted for the claim',
                           'Claim chased in a separate email',
                           'Clean record, strong position'],
                          'MONEY IN · Maham',
                          ['Half settled this week',
                           'Half agreed for June',
                           'Both dates confirmed by email',
                           'Credit review after it settles']),
     'Two problems, four days, and not one argument.'),
    ('p', 'On Thursday the balance goes to Westgate in full, on the day it is due. Rami sends a '
          'separate email about the forty tonnes with the photographs attached again, and the '
          'words “this is a claim, not a deduction” in the first line.'),
    ('p', 'Westgate replies on Monday. They accept the shortage of one coil without argument. '
          'On the forty tonnes they do not agree, but they do not refuse either: they ask for '
          'the gauge readings and the batch numbers, which Ms. Dana recorded at the gate six '
          'weeks ago. Rami sends them the same afternoon.'),
    ('p', 'Eng. Bilal pays half on Wednesday. Huda emails both dates and he replies with four '
          'words — “confirmed, June the 15th” — which is all anybody will need in August.'),
    ('p', 'At the review Karim puts up one number that nobody expected. Overdue money has '
          'fallen from nine per cent of sales to five, and not one customer was lost. “We did '
          'not get tougher,” he says. “We got faster. Everything on this list was chased in the '
          'first week instead of the fourth.”'),
    ('p', 'Mr. Tarek asks Huda what the hardest part was. She does not say the money. “The '
          'hardest part,” she says, “is telephoning somebody you will see at a family wedding.” '
          'Everybody laughs, and then Karim writes it on the board as a rule, because it is '
          'one: the person who chases should never be the person who sold.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done.)'),
    ('items0', [
        'What happens to the balance on Thursday?   (it is paid to Westgate in full, on the day)',
        'What words does Rami put in the first line of his email, and why?',
        'What does Westgate accept, and what do they ask for?',
        'How does Eng. Bilal reply, and why are four words enough?',
        'What has happened to the overdue money, and what does Karim say caused it?',
        'What rule does Karim write on the board?',
    ]),
    ('ex', 'B. Complete each sentence with ONE word from the text. (0 is done for you.)'),
    ('items0', [
        'On Thursday the balance goes to Westgate in full.',
        'Rami writes “this is a claim, not a ____________”.',
        'Westgate accept the shortage of one ____________ without argument.',
        'They ask for the gauge readings and the ____________ numbers.',
        'Overdue money has fallen from nine per cent to ____________.',
        'The person who chases should never be the person who ____________.',
    ]),
    ('ex', 'C. Discuss. Talk in pairs.'),
    ('items', [
        'Why is “we got faster” better than “we got tougher”?',
        'Do you agree that the seller should not chase the payment? Why?',
    ]),
    ('ex', 'D. Find a word from the text that means: (0 is done for you.)'),
    ('items0', [
        'an amount taken off a payment → (a deduction)',
        'to say yes to something without arguing → to a____________ it',
        'the measurement of thickness → the g____________ reading',
        'stronger and less willing to give way → t____________',
    ]),
]

# ============================================================ PART 9
B += [
    ('bar', 'Part 9  ·  Case Studies and Decisions', 'FINANCE'),
    ('fig', F.dos_donts('Asking for money: do’s and don’ts',
                        ['ask if there is a problem first',
                         'offer an option, not an ultimatum',
                         'write the agreement down the same day',
                         'keep talking to a suspended account'],
                        ['open with “why haven’t you paid?”',
                         'accept a verbal promise and no date',
                         'deduct a disputed claim from a payment',
                         'let a friendship set the credit limit']),
     'Firm about the money, easy about the person.'),
    ('h3', 'Case 1 — The claim they will not answer  (strand A · the supplier)'),
    ('p', 'Six weeks after your claim, the supplier has gone quiet. Their next balance is due '
          'in three days. A colleague suggests simply paying less and letting them ask why.'),
    ('p', 'Choose the best action and say why.'),
    ('items', [
        '(  )  Deduct the claim. They have had six weeks.',
        '(  )  Pay in full on the day, and send a separate email escalating the claim to their '
        'manager with a date for an answer.',
        '(  )  Stop paying anything until they reply.',
        '(  )  Forget the claim; the relationship is worth more.',
    ]),
    ('p', 'Write one sentence escalating the claim without threatening the payment.'),
    ('lines', 2),
    ('h3', 'Case 2 — The customer who pays everyone but you  (strand B · the customer)'),
    ('p', 'A retail account is twelve days overdue. You know from a driver that they have paid '
          'two other suppliers this week. They are polite on the telephone and always say the '
          'money is coming tomorrow.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What does paying other suppliers first tell you about how they see you?',
        'What should change in your approach — and what should not?',
        'Write one sentence that is still polite but is harder to answer with “tomorrow”.',
    ]),
    ('h3', 'Case 3 — A friend at thirty days  (where the strands meet)'),
    ('p', 'A customer you have known for years hits thirty days overdue. Your written rule says '
          'no new orders until it is settled. He telephones you personally and asks for one '
          'more delivery “as a friend”, and says he will be embarrassed if you refuse.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What happens to the rule if you make one exception for a friend?',
        'How can you refuse the delivery without refusing the friendship?',
        'Write one sentence saying no, and one offering what you can do instead.',
    ]),
]

# ============================================================ PART 10
B += [
    ('bar', 'Part 10  ·  Review and Can-Do', 'FINANCE'),
    ('ex', 'A. Vocabulary. Complete the sentence.'),
    ('items', [
        'Money that should have been paid already is ____________.',
        'The most credit a customer may have is the credit ____________.',
        'Money we will never be paid is a ____________ ____________.',
        'A list showing who owes money and for how long is an ____________ ____________ list.',
        'Money our customers owe us is a ____________.',
    ]),
    ('ex', 'B. Grammar. Complete with should, shouldn’t, could, may or might.'),
    ('items', [
        'We ____________ pay the balance in full, on the day.',
        'You ____________ hold back money for a claim they have not agreed.',
        'He ____________ pay half now and half in June — it is one option.',
        'They ____________ treat it as a late payment. We cannot be sure.',
        '____________ I ask when you expect to pay?',
        'You ____________ put every agreement in writing.',
    ]),
    ('ex', 'C. Reading. Read the short text and answer.'),
    ('p', 'The two-hundred-tonne invoice was four days overdue. The customer said the invoice '
          'was correct but his own customer had not paid him. Accounts suggested he could pay '
          'half immediately and the balance in June, and both dates were confirmed by email. '
          'At the same time the seventy per cent balance to the supplier was paid in full, and '
          'the claim for forty tonnes was chased separately.'),
    ('items', [
        'How late was the invoice, and why had it not been paid?',
        'What was agreed, and how was it recorded?',
        'Why was nothing deducted from the supplier’s balance?',
    ]),
    ('ex', 'D. Listening. Listen and answer. (Teacher reads.)'),
    ('p', '[Teacher reads] “You shouldn’t hold back money for a claim they have not agreed. If '
          'we pay short, they might treat it as a late payment, and then we are the ones in the '
          'wrong. Pay in full on the day, and chase the claim as a claim.”'),
    ('items', [
        'What does the speaker advise against?',
        'What might the supplier do if the payment is short?',
        'What two things does the speaker tell you to do?',
    ]),
    ('ex', 'E. Speaking. Work in pairs. One chases an overdue invoice; one explains why they '
           'cannot pay in full and accepts an option.'),
    ('ex', 'F. Writing. Write two sentences: one giving advice with “should”, and one offering '
           'an option with “could”.'),
    ('nlines', 2),
    ('ex', 'G. Error correction. Find and correct one mistake in each sentence.'),
    ('items', [
        'He shoulds to pay today. → ____________',
        'You should to telephone him first. → ____________',
        'They might to see it as late. → ____________',
        'We could extending the terms. → ____________',
        'She shouldn’t holds back the money. → ____________',
    ]),
    ('ex', 'H. Match the term (1–5) to its meaning (a–e).'),
    ('items', [
        'debtor  ____   a. money we owe our suppliers',
        'creditor  ____   b. to pay in full and close the account',
        'payable  ____   c. a company that owes us money',
        'settle  ____   d. a company we owe money to',
        'bad debt  ____   e. money we will never be paid',
    ]),
    ('ex', 'I. Put the chasing stages in order (1–4), and match them (a–d).'),
    ('items', [
        '(  )  escalation  ____   a. find out the real reason',
        '(  )  a telephone call  ____   b. dates, in writing',
        '(  )  an agreement  ____   c. polite, assumes they forgot',
        '(  )  a reminder  ____   d. the manager, then stop supply',
    ]),
    ('ex', 'Can-Do check. Tick what you can do.'),
    ('check', [
        'I can ask for payment politely and firmly.',
        'I can give advice with should and could.',
        'I can explain credit terms.',
        'I can write a payment reminder.',
    ]),
]

# ============================================================ PART 11
B += [
    ('bar', 'Part 11  ·  Foundations for Further Study', 'FINANCE'),
    ('h3', 'Concept Spotlight: Separate the argument from the money'),
    ('fig', F.icon_row('Two files, never one', 'THE RULE THAT SAVES RELATIONSHIPS', [
        ('bank', 'pay in full'), ('calendar', 'on the day'),
        ('doc', 'claim separately'), ('tick', 'clean record'), ('scale', 'strong position'),
    ]), 'One payment, one meaning.'),
    ('p', 'The most useful sentence in this unit is not a grammar point. It is Karim’s rule: '
          'never mix two arguments in one payment. It is worth understanding properly, because '
          'it applies far beyond money.'),
    ('p', 'When you pay a supplier short because they owe you something, you have combined two '
          'separate questions into one act. The first question is whether you owe them the '
          'balance. You do; that is not in dispute. The second is whether they owe you for the '
          'forty tonnes. That is in dispute. By deducting, you have not resolved the second '
          'question — you have simply put your own clear obligation into the same box as their '
          'unclear one, and made both of them arguable. Worse, you have changed what you are. '
          'A minute ago you were a customer with a valid claim. Now you are a customer who has '
          'paid late, and every conversation starts from there.'),
    ('p', 'There is a reasonable objection. If you pay in full, you lose your only piece of '
          'leverage. Why would they ever settle the claim once they have the money? It is a '
          'real risk, and the answer is that leverage bought by breaking your own promises is '
          'expensive. You get this claim settled and you lose the thing that makes you worth '
          'supplying — the certainty that when Al-Hasan says it will pay on Thursday, it pays '
          'on Thursday. In a trade where everyone is somebody’s debtor, that reputation is '
          'worth more than forty tonnes.'),
    ('p', 'Notice that the same logic runs through the other strand of this unit. Huda does not '
          'open with “why haven’t you paid?”, which mixes the question of the money with an '
          'accusation about the person. She asks whether there is a problem with the invoice, '
          'which separates them, and the separation is what allows Eng. Bilal to tell her the '
          'truth. Then she writes the agreement down — separating today’s understanding from '
          'August’s memory.'),
    ('p', 'This is what the modal verbs of this unit are really for. Should, could, may and '
          'might let you be firm about one thing while staying soft about another. “You should '
          'pay by Thursday” and “you could pay in two instalments” can live in the same email, '
          'and the customer hears both a limit and a door. That is the whole skill: keep the '
          'obligation clear, keep the person comfortable, and never let the two get mixed up '
          'in a single sentence.'),
    ('ex', 'A. Understanding check. Answer in your own words.'),
    ('items', [
        'What two separate questions get mixed when you pay a supplier short?',
        'What does deducting change about what you are?',
        'What is the reasonable objection, and how does the writer answer it?',
        'How does Huda’s first question separate the money from the person?',
    ]),
    ('ex', 'B. Apply it. Do this task with a partner.'),
    ('p', 'Think of a disagreement at your work where two separate issues got mixed together. '
          'Write the two issues as two sentences. Then write how you would have handled each '
          'one separately, and compare with your partner.'),
    ('ex', 'C. Micro-writing (optional).'),
    ('p', 'Write a few sentences (50–70 words) to a customer who is late. Use “should” once and '
          '“could” once, ask one question that is not an accusation, and give a date.'),
]

TERMS = [
    ('invoice', 'the paper asking a customer for payment'),
    ('due date', 'the day the money must be paid'),
    ('overdue', 'money that should have been paid already'),
    ('outstanding', 'still not paid'),
    ('aged debt list', 'who owes money, and for how long'),
    ('debtor', 'a company that owes us money'),
    ('creditor', 'a company we owe money to'),
    ('receivable', 'money our customers owe us'),
    ('payable', 'money we owe our suppliers'),
    ('credit terms', 'how long the customer has to pay'),
    ('credit limit', 'the most a customer may owe at once'),
    ('credit check', 'finding out if a customer pays'),
    ('payment history', 'how a customer has paid before'),
    ('reminder', 'a polite letter asking for payment'),
    ('statement', 'a list of everything owed on an account'),
    ('remittance advice', 'a note saying what a payment is for'),
    ('settle', 'to pay in full and close the account'),
    ('part payment', 'paying only a part of what is owed'),
    ('instalment', 'one part of a payment made in stages'),
    ('balance', 'the amount still to be paid'),
    ('bad debt', 'money we will never be paid'),
    ('write off', 'to accept that money will not be paid'),
    ('offset', 'to take one amount away from another'),
    ('deduction', 'an amount taken off a payment'),
    ('dispute', 'a disagreement about an amount'),
    ('escalate', 'to take a problem to a manager'),
    ('suspend', 'to stop supplying for now'),
    ('cash flow', 'money actually moving in and out'),
    ('order book', 'orders a company has not yet delivered'),
    ('run out of cash', 'to have no money left'),
    ('should', 'advice: the right thing to do'),
    ('shouldn’t', 'advice: the wrong thing to do'),
    ('could', 'one possible option'),
    ('may', 'perhaps; also, permission'),
    ('might', 'perhaps, a little less certain'),
    ('chase (v)', 'to ask again for money that is late'),
]

KEY = [
    ('Warm-Up A', '1 Easier because a company inside the Group will not disappear; harder '
                  'because it is uncomfortable to telephone a colleague about money. '
                  '2 Because his own customer has not paid him. 3 Half now and half in June; '
                  'the condition is that it is written down. 4 Pay the balance less the value '
                  'of the claim. 5 Because Westgate have not agreed the claim, so they might '
                  'treat it as a late payment; his rule is never mix two arguments in one '
                  'payment.'),
    ('Warm-Up B', '1 T · 2 F · 3 T · 4 F · 5 T'),
    ('Warm-Up C', '1 overdue · 2 part payment · 3 offset'),
    ('Warm-Up D', 'Answers vary.'),
    ('P1 A', '0 e · 1 c · 2 d · 3 a · 4 f · 5 b · 6 g · 7 h'),
    ('P1 B', '1 overdue · 2 credit limit · 3 outstanding · 4 settle · 5 reminder · 6 instalment'),
    ('P1 C', '1 b · 2 d · 3 a · 4 c · 5 e'),
    ('P1 D', '1 delivered · 2 container · 3 tolerance · 4 did · 5 reject'),
    ('P1 E', '1 a · 2 a · 3 a · 4 b'),
    ('P1 F', 'Money in: an overdue customer, a bad debt · Money out: the supplier balance, our '
             'bank charges · A control: a credit limit, a reminder letter'),
    ('P1 G', '1 b · 2 a · 3 d · 4 c · 5 f · 6 e'),
    ('P1 H', '1 overdue · 2 reminder · 3 might · 4 should · 5 instalments · 6 writing'),
    ('P2 A', '1 shouldn’t · 2 should · 3 shouldn’t · 4 should'),
    ('P2 B', '1 You should telephone first. 2 You could pay in two instalments. 3 They might '
             'treat it as late. 4 We shouldn’t mix two arguments.'),
    ('P2 C', '1 could · 2 may / might · 3 May / Could · 4 may / might'),
    ('P2 D', '1 offer · 2 advice · 3 offer · 4 advice'),
    ('P2 E', '1 Could you confirm the date in writing? 2 May I ask when you expect to pay? '
             '3 Could you send the remittance advice? 4 May I speak to your accounts '
             'department?'),
    ('P2 F', '1 b · 2 c · 3 a · 4 e · 5 d'),
    ('P2 G', '1 You should telephone him first. 2 They might see it as late. 3 We could extend '
             'the terms. 4 She shouldn’t hold back the money.'),
    ('P2 H', 'Answers vary — one “should”, one “could”.'),
    ('P2 I', '1 should · 2 shouldn’t · 3 could · 4 May / Could · 5 may / might'),
    ('P2 J', '1 You should telephone before you write again. 2 We could accept two instalments '
             'if the dates are in writing. 3 We shouldn’t deduct a claim from a payment. '
             '4 They might refuse, so we should ask first.'),
    ('P3 D1 A', '1 Whether there is a problem with the invoice — because about a quarter of the '
                'time there is one. 2 His own customer has not paid him. 3 That he could pay '
                'half now and half in June. 4 So that both of them have the dates in August, '
                'when neither remembers the conversation. 5 That Homs Builders are also thirty '
                'days late with him.'),
    ('P3 D1 B', '1 F · 2 F · 3 T · 4 T · 5 F'),
    ('P3 D1 C', '1 You could pay half now, from your own account, and half in June · 2 They '
                'might pay at the end of this month. They might not. · 3 you should reply just '
                'confirming them'),
    ('P3 D2 A', '1 Deducting the claim from the balance. 2 Because the supplier has not agreed '
                'the claim. 3 Treat it as a late payment, which puts Al-Hasan in the wrong and '
                'the claim is forgotten. 4 He allows both points in the same email; he forbids '
                'them in the same payment.'),
    ('P3 D2 B', '1 D · 2 B · 3 C · 4 B'),
    ('P4 B', 'Answers vary — one piece of advice from your own role.'),
    ('P5 A', '1 You are lending them money — paying your own costs now and being paid two '
             'months later. 2 By running out of cash while the order book is full. 3 A limit, '
             'a term, and somebody whose job it is to watch. 4 Fast, because a reminder on the '
             'due date reads as efficiency and one after three weeks reads as desperation; '
             'kind, because most late payers are companies with their own late customers. '
             '5 Because about a quarter of the time there really is a problem, and the customer '
             'was waiting for somebody to ask.'),
    ('P5 B', '1 D · 2 B · 3 C · 4 B · 5 B'),
    ('P5 C', '1 run out · 2 book · 3 desperation · 4 courtesy'),
    ('P5 D', '1 money · 2 lending · 3 limit · 4 watch · 5 kind · 6 writing'),
    ('P5 F', '1 F · 2 T · 3 F · 4 T'),
    ('P6 A', '1 In case the invoice was simply missed. 2 That there may be a problem with the '
             'invoice, which she will correct; or that he could settle half this week and the '
             'balance in June. 3 An answer by Friday saying which he prefers.'),
    ('P6 B', 'Order: 2 (Dear Eng. Bilal,) · 3 (The sixty-day term ended on Thursday.) · '
             '4 (If there is a problem with it, please tell me.) · 5 (You could settle half '
             'this week…) · 1 (Could you let me know by Friday…) · 6 (Best regards, Huda)'),
    ('P7 A', '1 How much of your own money you are willing to have outside the building at one '
             'time. 2 How much you could survive losing; the customer’s payment history; the '
             'size of their business. 3 Because it is the only honest evidence — three invoices '
             'paid on time are worth more than any reference. 4 Because once it is a judgement '
             'it becomes a conversation, and the customer who argues best gets the most credit. '
             '5 Because silence tells the customer you have written them off, and they will pay '
             'somebody else first.'),
    ('P7 B', '1 building · 2 reference · 3 released · 4 pays'),
    ('P7 D', '1 You should send a reminder the same day. 2 You shouldn’t release more goods '
             'until it is settled or agreed in writing. 3 We could accept it, in writing, with '
             'both dates. 4 We should pay in full and chase the claim separately.'),
    ('P8 A', '1 “This is a claim, not a deduction” — so that the payment and the claim are '
             'clearly separate. 2 They accept the one-coil shortage; they ask for the gauge '
             'readings and the batch numbers. 3 “Confirmed, June the 15th” — because the dates '
             'are what anybody will need in August. 4 It has fallen from nine per cent of sales '
             'to five; Karim says they got faster, not tougher. 5 The person who chases should '
             'never be the person who sold.'),
    ('P8 B', '1 deduction · 2 coil · 3 batch · 4 five · 5 sold'),
    ('P8 D', '1 accept · 2 gauge · 3 tougher'),
    ('P10 A', '1 overdue · 2 limit · 3 bad debt · 4 aged debt · 5 receivable'),
    ('P10 B', '1 should · 2 shouldn’t · 3 could · 4 may / might · 5 May / Could · 6 should'),
    ('P10 C', '1 Four days; his own customer had not paid him. 2 Half immediately and the '
              'balance in June, confirmed by email. 3 Because the claim had not been agreed, so '
              'a short payment could be treated as a late payment.'),
    ('P10 D', '1 Holding back money for a claim the supplier has not agreed. 2 Treat it as a '
              'late payment. 3 Pay in full on the day, and chase the claim as a claim.'),
    ('P10 G', '1 He should pay today. 2 You should telephone him first. 3 They might see it as '
              'late. 4 We could extend the terms. 5 She shouldn’t hold back the money.'),
    ('P10 H', '1 c · 2 d · 3 a · 4 b · 5 e'),
    ('P10 I', 'Order: 4 escalation · 2 a telephone call · 3 an agreement · 1 a reminder. '
              'Matches: escalation d · telephone call a · agreement b · reminder c'),
    ('P11 A', '1 Whether you owe them the balance (not in dispute) and whether they owe you for '
              'the claim (in dispute). 2 You stop being a customer with a valid claim and '
              'become a customer who has paid late. 3 That you lose your only leverage; the '
              'answer is that leverage bought by breaking your own promises costs you your '
              'reputation for paying on the day. 4 She asks whether there is a problem with the '
              'invoice instead of “why haven’t you paid?”, which separates the money from an '
              'accusation about the person.'),
]

UNIT = dict(
    n=8,
    title='Getting Paid and Giving Credit',
    grammar='should · shouldn’t · could · may · might',
    function='Finance + Admin',
    candos=[
        'I can ask for payment politely and firmly',
        'I can give advice with should and could',
        'I can explain credit terms',
        'I can write a payment reminder',
    ],
    cando_line='You can ask for money firmly, give advice, and keep the customer.',
    blocks=B,
    terms=TERMS,
    key=KEY,
    teaser=F.scene_banner(
        'Unit 9 — the week everything went wrong',
        [('m', ORANGE), ('h', GREEN)],
        ['“The truck was waiting', 'when the papers arrived.”'],
        'THREE PROBLEMS, ONE WEEK',
        ['A vessel that sailed without us', 'A customer who got the wrong grade',
         'Forty tonnes nobody would admit to', 'And what we said to each of them'],
        quote='“It was late because of a storm.”'),
)
