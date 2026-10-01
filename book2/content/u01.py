# -*- coding: utf-8 -*-
"""Unit 1 — The Group and Its Companies.
Strand A: Bashak's import desk, facing suppliers abroad.
Strand B: the Syrian market side — the Chemco depot and the Alten IL shops.
"""
import frames as F
from art import NAVY, BLUE, ORANGE, GREEN, GREEN_D, PURPLE, GREY
from cast import HEAD_OFFICE, SPECIALISTS

B = []

# ============================================================ unit openers
B += [
    ('fig', F.companies_strip('Al-Hasan Holding Group — our companies', [
        ('WE BUY', BLUE, ['Bashak', 'Chemco', 'Altintash', 'Dawa']),
        ('WE MOVE', ORANGE, ['Komosh']),
        ('WE SELL', GREEN_D, ['Chemco depot', 'Alten IL', 'Altintash']),
        ('WE MAKE', NAVY, ['Chemac', 'Khalifa Iron', 'Khalifa Concrete']),
    ]), 'The companies inside the Group, and what each one does.'),
    ('fig', F.team_strip('Head office', HEAD_OFFICE),
     'The seven people at head office in Damascus.'),
]

# ============================================================ WARM UP
B += [
    ('bar', 'Warm Up', 'TRADE'),
    ('p', 'Look at the pictures. Answer these questions before you read.'),
    ('items', [
        'What does your company buy? What does it sell?',
        'Does your company buy from other countries? Which ones?',
        'How long have you worked there?',
    ]),
    ('h3', 'Read'),
    ('p', 'It is one year since Ms. Chen first came to Damascus. On that day, NorthBridge '
          'Industrial Trading bought cement from Al-Hasan. Today the two companies still work '
          'together, but something has changed.'),
    ('p', 'Al-Hasan Holding Group has grown. The Group still makes things: Chemac makes cement '
          'in Aleppo, and the two Khalifa factories make iron and concrete. But today the Group '
          'buys much more than it makes. It buys from suppliers abroad, and it sells inside '
          'Syria. This is the big change of the year.'),
    ('p', 'Twelve companies work inside the Group. Bashak buys. It is the import company, and '
          'Rami is the Import Manager. Komosh moves the goods: it arranges the ship, and it '
          'clears the goods at customs. Chemco sells metals and fuels to builders and factories. '
          'Alten IL sells in shops to ordinary people. Altintash sells fodder to farmers. Maham '
          'builds, and it buys from the Group too.'),
    ('p', 'Today is the annual review. Mr. Adnan, the Founder, wants to know one thing: what has '
          'the Group done this year? Rami speaks first. “We have imported steel, fuel and '
          'machines,” he says. “We have opened two new supplier accounts since March, and we '
          'have already placed eleven orders this year.” Mr. Tarek asks, “Have we had any late '
          'shipments?” “Two,” says Rami. “Both arrived in the end.”'),
    ('p', 'Then Lina speaks about the Syrian side. “We have sold more than last year,” she says. '
          '“The depot has sold 9,000 tonnes of steel. Alten IL has opened a third shop. Altintash '
          'has not reached its target yet, but it is close.”'),
    ('p', 'At the end, Karim reads an email. It is from Ms. Chen. NorthBridge wants to sell '
          'machines to Al-Hasan — not only buy cement from it. “So now they are our customer and '
          'our supplier,” says Mr. Adnan. He smiles. “Good. That is how a group grows.”'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'How long is it since Ms. Chen first came to Damascus?   (one year)',
        'What is the big change of the year?',
        'Which company buys for the Group, and who manages it?',
        'What does Komosh do? Give two things.',
        'Name two companies that sell inside Syria, and say who they sell to.',
        'What has Rami done since March?',
        'Why does Mr. Adnan smile at the end?',
    ]),
    ('ex', 'B. True or False? Write T or F. (0 is done for you.)'),
    ('items0', [
        'Al-Hasan makes everything it sells.   (F)',
        'The Group buys more than it makes.   ____',
        'Bashak is the import company.   ____',
        'Komosh sells fodder to farmers.   ____',
        'Alten IL has opened a third shop.   ____',
        'Altintash has reached its target.   ____',
        'NorthBridge now wants to sell to Al-Hasan.   ____',
    ]),
    ('ex', 'C. Find the words. Find a word or phrase in the text that means: (0 is done for you.)'),
    ('items0', [
        'a company inside a bigger group → (a subsidiary / a company inside the Group)',
        'to bring goods into a country → to i____________',
        'the place where we keep our stock → the d____________',
        'in another country → a____________',
        'the number we want to reach → the t____________',
    ]),
    ('ex', 'D. Over to you. Answer about yourself.'),
    ('items', [
        'What has your company done this year? Say one thing.',
        'Does your company buy from abroad, sell at home, or both?',
        'How long have you worked in your job?',
    ]),
]

# ============================================================ PART 1
B += [
    ('bar', 'Part 1  ·  Vocabulary and Terminology', 'TRADE'),
    ('h3', 'Buying and selling'),
    ('fig', F.icon_row('Two directions of trade', 'WE BUY ABROAD · WE SELL AT HOME', [
        ('globe', 'supplier'), ('ship', 'import'), ('shelf', 'depot'),
        ('shop', 'retail'), ('truck', 'deliver'),
    ]), 'Goods come in from abroad, and go out to Syrian customers.'),
    ('ex', 'A. Match each word (1–7) with its meaning (a–h). There is one you do not need. '
           '(0 is done for you.)'),
    ('items0', [
        'import  (c)',
        'export  ____   a. a company that sells to us',
        'supplier  ____   b. a person or company that buys from us',
        'customer  ____   c. to bring goods into a country',
        'wholesale  ____   d. selling in small amounts, in a shop',
        'retail  ____   e. a building where we keep goods',
        'depot  ____   f. to send goods out of a country',
        'subsidiary  ____   g. selling in large amounts, to other businesses',
        '          h. a company inside a bigger group',
    ]),
    ('ex', 'B. Complete the sentences with the words in the word bank.'),
    ('bank', 'Word bank:', ['import', 'supplier', 'customer', 'depot', 'retail', 'subsidiary']),
    ('items', [
        'Bashak is the ____________ that buys for the whole Group.',
        'We ____________ steel and fuel from three countries.',
        'Westgate Metals is a new ____________ of ours.',
        'Maham is a ____________ of Al-Hasan, and it is also our ____________.',
        'We keep 4,000 tonnes of steel in the ____________ outside Damascus.',
        'Alten IL is a ____________ business: it sells to ordinary people.',
    ]),
    ('h3', 'Who does what in the Group'),
    ('fig', F.team_strip('The specialists', SPECIALISTS),
     'Six people, six companies — and two very different jobs.'),
    ('ex', 'C. Match the person (1–6) with what they do (a–f).'),
    ('items', [
        'Rami  ____   a. clears the goods at customs and books the trucks',
        'Mr. Samir  ____   b. serves customers in the shop',
        'Ms. Dana  ____   c. buys from suppliers abroad',
        'Ms. Maya  ____   d. buys steel for a building site',
        'Eng. Bilal  ____   e. handles the money at the bank',
        'Mr. Haitham  ____   f. checks the goods when they arrive at the depot',
    ]),
    ('h3', 'Saying how long'),
    ('fig', F.label_panel('Time words for the present perfect', [
        ('for', 'a length of time'), ('since', 'a point in time'),
        ('already', 'earlier than expected'), ('yet', 'not until now (− / ?)'),
        ('just', 'a very short time ago'), ('ever', 'at any time (?)'),
        ('never', 'at no time'), ('so far', 'up to now'),
    ], cols=4), 'The words that go with the present perfect.'),
    ('ex', 'D. Odd one out. Which word is different? Circle it.'),
    ('items', [
        'supplier · customer · depot · partner',
        'import · buy · order · sell',
        'depot · warehouse · shop · Tuesday',
        'for · since · already · Damascus',
        'Bashak · Komosh · Chemco · Lattakia',
    ]),
    ('ex', 'E. Choose the best answer.'),
    ('items', [
        'A company that sells to us is a…   (a) supplier   (b) customer',
        'Selling in large amounts to other businesses is…   (a) retail   (b) wholesale',
        'A company inside a bigger group is a…   (a) subsidiary   (b) branch',
        'Money we make above the cost is the…   (a) margin   (b) market',
    ]),
    ('ex', 'F. Classify. Write each company in the correct column.'),
    ('bank', 'Companies:', ['Bashak', 'Komosh', 'Alten IL', 'Chemac', 'Chemco depot', 'Khalifa Iron']),
    ('grid', ['We buy', 'We move', 'We sell or make'], 3),
    ('ex', 'G. Match the two halves (1–6 with a–f).'),
    ('items', [
        'a new  ____   a. office',
        'the head  ____   b. clearance',
        'customs  ____   c. supplier',
        'product  ____   d. group',
        'a holding  ____   e. line',
        'the annual  ____   f. review',
    ]),
    ('ex', 'H. Complete the paragraph with the words in the box.'),
    ('bank', 'Box:', ['abroad', 'depot', 'Group', 'imports', 'sells', 'subsidiaries']),
    ('p', 'Al-Hasan is a holding (1)____________ with twelve (2)____________. Bashak '
          '(3)____________ steel and fuel from (4)____________. Komosh brings the goods to the '
          '(5)____________ outside Damascus. Then Chemco (6)____________ the steel to builders '
          'inside Syria.'),
]

# ============================================================ PART 2
B += [
    ('bar', 'Part 2  ·  Grammar — present perfect vs past simple', 'TRADE'),
    ('fig', F.grammar_card('The present perfect: have / has + past participle', [
        ('I / you / we / they', 'have', 'We have opened two new accounts.'),
        ('he / she / it', 'has', 'Alten IL has opened a third shop.'),
        ('negative', 'haven’t', 'They haven’t sent the invoice.'),
    ], 'Short forms: I’ve · we’ve · he’s · she’s   ·   Questions: Have you…? Has it…?'),
     'The present perfect — we use it for the past inside the present.'),
    ('p', 'We use the PRESENT PERFECT for a past action when we do not say exactly when it '
          'happened, or when the action is still true now. We make it with have / has and the '
          'past participle: We have imported steel. She has sold the stock.'),
    ('fig', F.grammar_card('for and since', [
        ('for + a length of time', 'for', 'for a year · for six months · for ten days'),
        ('since + a point in time', 'since', 'since March · since 2024 · since Monday'),
    ], 'We have worked with NorthBridge for a year.  ·  Rami has been here since March.'),
     'for a length of time, since a point in time.'),
    ('p', 'We use FOR with a length of time, and SINCE with a point in time. We have known '
          'NorthBridge for one year. We have known them since last April. Both sentences mean '
          'the same thing, but the time word is different.'),
    ('fig', F.grammar_card('already · yet · just', [
        ('already  (+)', 'already', 'We have already placed eleven orders.'),
        ('yet  (− and ?)', 'yet', 'They haven’t paid yet. Has it arrived yet?'),
        ('just  (+)', 'just', 'The container has just reached the port.'),
    ], 'ever / never:  Have you ever worked abroad?  ·  I have never been to Lattakia.'),
     'The small words that live with the present perfect.'),
    ('p', 'ALREADY means earlier than we expected, and it goes before the main verb. YET means '
          'not until now; it goes at the end, and we use it in negatives and questions. JUST '
          'means a very short time ago. We also use EVER in questions and NEVER in negatives.'),
    ('fig', F.split_panel('Present perfect or past simple?',
                          'PRESENT PERFECT', ['no time word, or a time that is not finished',
                                              'We have sold 9,000 tonnes this year.',
                                              'Rami has worked here since March.',
                                              'Have you ever bought from them?'],
                          'PAST SIMPLE', ['a finished time: last year, in May, yesterday',
                                          'We sold 7,000 tonnes last year.',
                                          'Rami started in March.',
                                          'Did you buy from them in 2024?']),
     'The same facts, told two ways — the time word decides.'),
    ('p', 'Use the PAST SIMPLE when the time is finished: last year, in May, two days ago, when '
          'she visited. Use the PRESENT PERFECT when the time is not finished, or when you give '
          'no time at all: this year, this month, today, so far.'),
    ('watch', 'Never use the present perfect with a finished time. Not: We have sold it last '
              'year. Say: We sold it last year. And after a question with When…?, always use the '
              'past simple: When did the ship arrive? (not When has the ship arrived?)'),
    ('h3', 'Form'),
    ('p', 'present perfect:  have / has + past participle     ·     past simple:  verb + -ed, or '
          'the irregular form     ·     for + length     ·     since + point'),
    ('ex', 'A. Complete with HAVE or HAS. (0 is done for you.)'),
    ('items0', [
        'We have opened two new accounts.',
        'Rami ____________ placed eleven orders this year.',
        'The factories ____________ worked all month.',
        'Alten IL ____________ opened a third shop.',
        'I ____________ never visited that supplier.',
        'Our customers ____________ paid on time.',
    ]),
    ('ex', 'B. Write the past participle.'),
    ('items', [
        'buy → ____________',
        'send → ____________',
        'pay → ____________',
        'sell → ____________',
        'make → ____________',
        'take → ____________',
    ]),
    ('ex', 'C. Complete with FOR or SINCE.'),
    ('items', [
        'We have worked with NorthBridge ____________ one year.',
        'Rami has managed the import desk ____________ March.',
        'The depot has been full ____________ three weeks.',
        'We haven’t bought fuel from them ____________ 2024.',
    ]),
    ('ex', 'D. Complete with ALREADY, YET or JUST.'),
    ('items', [
        'Good news — the ship has ____________ reached Lattakia. (one minute ago)',
        'We have ____________ paid the deposit, so we can order now.',
        'They haven’t sent the packing list ____________.',
        'Has the container cleared customs ____________?',
    ]),
    ('ex', 'E. Present perfect or past simple? Choose the correct form. (0 is done for you.)'),
    ('items0', [
        'We (sell / have sold) 7,000 tonnes last year.   (sold)',
        'We ____________ (sell) 9,000 tonnes so far this year.',
        'Ms. Chen ____________ (visit) Damascus in April 2024.',
        'Rami ____________ (work) here since March.',
        'The ship ____________ (arrive) two days ago.',
        'I ____________ (not / see) the new price list yet.',
    ]),
    ('ex', 'F. Make questions with HAVE / HAS.'),
    ('items', [
        '(?) you / ever / buy / from Westgate → ____________',
        '(?) the goods / arrive / yet → ____________',
        '(?) how long / she / work / in the depot → ____________',
        '(?) we / pay / the invoice → ____________',
    ]),
    ('ex', 'G. Find and correct the mistake in each sentence. (0 is done for you.)'),
    ('items0', [
        'We have sold it last year. → (We sold it last year.)',
        'He has been here since three months. → ____________',
        'Have you saw the report? → ____________',
        'They have already not paid. → ____________',
        'When have you ordered it? → ____________',
    ]),
    ('ex', 'H. About you. Write two sentences: one with “I have…” and one with “I worked…”.'),
    ('nlines', 2),
    ('ex', 'I. Complete with the present perfect.'),
    ('items', [
        'The Group ____________ (grow) a lot this year.',
        'We ____________ (not / reach) our target yet.',
        'Komosh ____________ (clear) every container so far.',
        'Our suppliers ____________ (send) all the documents.',
        'She ____________ (never / work) in logistics.',
    ]),
    ('ex', 'J. Rewrite in the past simple, using the time in brackets.'),
    ('items', [
        'We have opened two new accounts. (in March) → ____________',
        'Alten IL has opened a third shop. (last month) → ____________',
        'Rami has placed eleven orders. (in 2025) → ____________',
        'The ship has arrived. (on Tuesday) → ____________',
    ]),
]

# ============================================================ PART 3
B += [
    ('bar', 'Part 3  ·  Listening and Dialogue', 'TRADE'),
    ('fig', F.dialogue_scene(('m', GREEN_D), ['Good morning, Ms. Chen.', 'It has been a year already!'],
                             ('w', PURPLE), ['It has. And this year', 'we want to sell to you.']),
     'Strand A · Rami takes a call from a supplier abroad.'),
    ('h3', 'Dialogue 1 — A year of business (the import desk)'),
    ('p', 'Listen and read. (Your teacher will read the dialogue, or play the audio.)'),
    ('dlg', [
        ('Rami', 'Good morning, Ms. Chen. Rami here, from Bashak. It has been a year already!'),
        ('Ms. Chen', 'Good morning, Rami. Yes — a whole year since my first visit to Damascus.'),
        ('Rami', 'A good year. We have placed eleven orders with your group since January.'),
        ('Ms. Chen', 'Eleven? I have only counted nine. Let me check my file.'),
        ('Rami', 'Nine are shipped. Two are still open — we haven’t received them yet.'),
        ('Ms. Chen', 'Ah, I see them now. Rami, I have some news. NorthBridge has opened a '
                     'machines division.'),
        ('Rami', 'Machines? So you would like to sell to us, not only buy from us.'),
        ('Ms. Chen', 'Exactly. Have you ever imported packing machines?'),
        ('Rami', 'Never. But Chemac has asked for two, so your timing is good.'),
        ('Ms. Chen', 'Then I will send the catalogue today. Thank you, Rami.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'Who is calling, and from which company?   (Rami, from Bashak)',
        'How long is it since Ms. Chen’s first visit?',
        'How many orders have been shipped, and how many are still open?',
        'What is NorthBridge’s news?',
        'Has Bashak ever imported packing machines?',
        'Why is Ms. Chen’s timing good?',
    ]),
    ('ex', 'B. True or False? Write T or F.'),
    ('items', [
        'Rami and Ms. Chen disagree about the number of orders.   ____',
        'Two orders have not arrived yet.   ____',
        'NorthBridge only buys; it never sells.   ____',
        'Chemac has asked for two packing machines.   ____',
        'Ms. Chen will send a price list today.   ____',
    ]),
    ('ex', 'C. Language focus. Find in the dialogue: (0 is done for you.)'),
    ('items0', [
        'a sentence with “since” → (a whole year since my first visit)',
        'a sentence with “yet” → ____________',
        'a question with “ever” → ____________',
        'an answer with “never” → ____________',
    ]),
    ('fig', F.half_scene('w', ORANGE, ['Three shops now —', 'and we’ve sold out!']),
     'Strand B · Ms. Maya reports from the shop floor.'),
    ('h3', 'Dialogue 2 — The shops (the Syrian market)'),
    ('dlg', [
        ('Karim', 'Maya, I need your numbers for the annual review. How has the third shop done?'),
        ('Ms. Maya', 'Very well. We opened it in May, and it has already paid for itself.'),
        ('Karim', 'That is fast. And the cement bags?'),
        ('Ms. Maya', 'We have sold out twice this month. Twice, Karim! People queue outside.'),
        ('Karim', 'Then the depot must send you more. Have you written to Ms. Dana?'),
        ('Ms. Maya', 'I have written three times. She hasn’t answered yet.'),
        ('Karim', 'Leave it with me. I’ll speak to her this afternoon.'),
        ('Ms. Maya', 'Thank you. One more thing — customers keep asking for fodder.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What does Karim need from Ms. Maya, and why?',
        'When did the third shop open, and how has it done?',
        'What has happened twice this month?',
        'Who has Ms. Maya written to, and what has happened?',
    ]),
    ('ex', 'B. Listen again and choose the best answer (A–D).'),
    ('items', [
        'The third shop opened in…   A) March  B) May  C) July  D) last year',
        'The shop has sold out of cement…   A) once  B) twice  C) never  D) every day',
        'Ms. Dana works at the…   A) bank  B) port  C) depot  D) factory',
        'Customers keep asking for…   A) steel  B) fuel  C) fodder  D) machines',
    ]),
]

# ============================================================ PART 4
B += [
    ('bar', 'Part 4  ·  Speaking and Your Role', 'TRADE'),
    ('fig', F.label_panel('Useful phrases for the annual review', [
        ('So far this year…', 'opening a report'),
        ('We have already…', 'something done early'),
        ('We haven’t … yet.', 'something still open'),
        ('It has been … since…', 'saying how long'),
        ('Have you ever…?', 'asking about experience'),
        ('Last year we…', 'a finished time'),
    ], cols=3), 'Phrases for saying what has happened, and when.'),
    ('ex', 'A. Role-play: the annual review. Student A is Mr. Adnan and asks the questions. '
           'Student B reports on the year. Then change roles.'),
    ('items', [
        'A: Ask what the company has done this year.',
        'B: Give two things, using “We have…”.',
        'A: Ask how long B has worked there.',
        'B: Answer with “for” or “since”.',
        'A: Ask about something that is not finished.',
        'B: Answer with “… haven’t … yet”.',
    ]),
    ('ex', 'B. Your Role. Report on your year from YOUR job. Use the phrases below. '
           '(Choose your real role.)'),
    ('items', [
        '[Trade] Import Manager: “We have opened two new supplier accounts since March.”',
        '[Trade] Sales: “We have sold 9,000 tonnes so far this year.”',
        '[Finance] Financial Controller: “We have collected 92% of our invoices.”',
        '[Finance] Accountant: “I have checked every invoice this month.”',
        '[Logistics] Freight: “We have cleared forty containers, and lost none.”',
        '[Admin] Assistant: “I have filed all the documents, but two are missing.”',
    ]),
    ('fig', F.label_panel('Everyone reports the year from their own job', [
        ('Imports', 'orders placed, suppliers opened'),
        ('Finance', 'invoices collected, margin'),
        ('Logistics', 'containers cleared, none lost'),
        ('Depot', 'tonnes in, tonnes out'),
        ('Retail', 'shops open, lines sold out'),
        ('Admin', 'documents filed, two missing'),
    ], cols=3), 'The same year, six different reports.'),
    ('ex', 'C. Ask your partner. Walk around and ask three people.'),
    ('items', [
        'How long have you worked here?',
        'What have you done this week?',
        'Have you ever worked with a company from another country?',
    ]),
    ('ex', 'D. Discuss. Ask and answer.'),
    ('items', [
        'Is it better for a group to buy or to make? Why?',
        'What has changed in your work in the last year?',
    ]),
]

# ============================================================ PART 5
B += [
    ('bar', 'Part 5  ·  Extended Reading', 'TRADE'),
    ('h3', 'Why a trading group owns its own trucks'),
    ('fig', F.route_strip('One group, every step of the journey', [
        ('globe', 'Supplier abroad'), ('ship', 'Komosh ships it'),
        ('stamp', 'Komosh clears it'), ('shelf', 'Our depot'), ('shop', 'Our customer'),
    ]), 'Each step belongs to a company inside the Group.'),
    ('p', 'Many trading companies do one thing: they buy goods and they sell them. They pay '
          'other companies to move the goods, to store them, and to deliver them. This is '
          'simple, but it is not always safe. If the transport company is slow, the trader can '
          'do nothing. If the warehouse is full, the goods wait outside.'),
    ('p', 'Al-Hasan has chosen a different road. The Group owns every step of the journey. '
          'Bashak finds the supplier and places the order. Komosh books the ship, and Komosh '
          'clears the goods at customs. Komosh also owns the trucks that carry the goods to the '
          'depot. Then Chemco sells the goods to builders, and Alten IL sells them in shops.'),
    ('p', 'Why does this matter? Three reasons. First, speed. When a container lands at '
          'Lattakia, nobody has to telephone a stranger. Komosh is already there, and the '
          'driver already has the paper. Second, information. Rami can tell a customer exactly '
          'where the goods are, because the trucks belong to his own group. Third, money. The '
          'Group pays itself for the transport, so the money stays inside the family of '
          'companies.'),
    ('p', 'There is also a cost. Trucks are expensive. A warehouse is expensive. A company that '
          'owns everything must pay for everything, even in a quiet month. A trader who rents '
          'pays only when it needs to. So the Group has made a choice: it pays more in the '
          'quiet months, and it wins in the busy ones.'),
    ('p', 'Mr. Adnan explains it in one sentence. “A ship is late for everybody,” he says. “But '
          'if the truck is mine, the truck is never late.” This year, that choice has worked. '
          'Komosh has cleared more than forty containers, and the Group has not lost a single '
          'one. For a business that buys abroad and sells at home, that is the whole game.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What do many trading companies pay other companies to do?   (move, store and deliver the goods)',
        'Which company in the Group books the ship and clears customs?',
        'What are the three reasons for owning every step? Name two.',
        'Why can Rami tell a customer where the goods are?',
        'What is the cost of owning everything?',
        'What does Mr. Adnan mean by “if the truck is mine, the truck is never late”?',
    ]),
    ('ex', 'B. Choose the best answer (A–D).'),
    ('items', [
        'A trader who rents transport pays…   A) always  B) never  C) only when needed  D) once a year',
        'Komosh owns the…   A) shops  B) trucks  C) factories  D) bank',
        'The Group has cleared more than … containers.   A) four  B) fourteen  C) forty  D) four hundred',
        'The Group has lost …   A) many containers  B) two  C) one  D) none',
        'The writer thinks the choice has…   A) failed  B) worked  C) cost too much  D) ended',
    ]),
    ('ex', 'C. Find a word or phrase in the text that means:'),
    ('items', [
        'to keep goods in a building → to s____________',
        'to take goods through the customs office → to c____________ them',
        'a month with little business → a q____________ month',
        'not one → not a s____________ one',
    ]),
    ('ex', 'D. Complete the summary with ONE word in each gap.'),
    ('p', 'Al-Hasan (1)____________ every step of the journey. Bashak (2)____________ the order, '
          'Komosh moves and (3)____________ the goods, and Chemco and Alten IL (4)____________ '
          'them. This is faster, and the money stays inside the (5)____________. But trucks and '
          'warehouses are (6)____________, even in a quiet month.'),
    ('ex', 'E. Discuss. Talk in pairs.'),
    ('items', [
        'Does your company own its transport, or rent it? Which is better for you?',
        'What else could a group own, to be safer?',
    ]),
    ('ex', 'F. True or False? (about the reading). Write T, F or NOT GIVEN.'),
    ('items', [
        'Renting transport is always cheaper than owning it.   ____',
        'Komosh works at Lattakia.   ____',
        'Komosh has fifty trucks.   ____',
        'The Group has lost no containers this year.   ____',
    ]),
]

# ============================================================ PART 6
B += [
    ('bar', 'Part 6  ·  Writing (a real email)', 'ADMIN'),
    ('h3', 'Model — A year-in-review email to a supplier'),
    ('fig', F.doc_card('The parts of a year-in-review email', 'Email',
                       [('To', 'Ms. Chen, NorthBridge'),
                        ('Subject', 'Our first year — thank you'),
                        ('1  Greet', 'Dear Ms. Chen,'),
                        ('2  Look back', 'It has been a year since…'),
                        ('3  Give numbers', 'We have placed eleven orders…'),
                        ('4  Say what is open', 'Two orders have not arrived yet.'),
                        ('5  Look forward', 'We would like to…'),
                        ('6  Close', 'Best regards, Rami')], accent=ORANGE),
     'Six short moves, in this order.'),
    ('p', 'Subject: Our first year — thank you. Dear Ms. Chen, It has been a year since your '
          'first visit to Damascus, and I would like to thank you. We have placed eleven orders '
          'with your group since January, and nine have arrived in good condition. Two orders '
          'have not reached us yet, and I will send you the numbers separately. We have also '
          'read your news about the machines division with great interest. Chemac has asked us '
          'for two packing machines, so your catalogue has come at the right time. Thank you '
          'again for a good first year. Best regards, Rami Import Manager, Bashak Co.'),
    ('ex', 'A. Answer about the email. (0 is done for you.)'),
    ('items0', [
        'Who is the email to?   (Ms. Chen, at NorthBridge)',
        'How many orders have been placed, and how many have arrived?',
        'What has not happened yet?',
        'Why has the catalogue come at the right time?',
    ]),
    ('ex', 'B. Put the email in order (1–6).'),
    ('items', [
        '(  )  Best regards, Rami',
        '(  )  Dear Ms. Chen,',
        '(  )  It has been a year since your first visit.',
        '(  )  Two orders have not reached us yet.',
        '(  )  We have placed eleven orders since January.',
        '(  )  Chemac has asked us for two packing machines.',
    ]),
    ('h3', 'Guided writing'),
    ('ex', 'C. Now you write. Write a year-in-review email (70–100 words) to a supplier or a '
           'customer. Use the present perfect at least three times, and the past simple once.'),
    ('p', 'Plan:  1) “Dear …,”   2) “It has been … since …”   3) “We have …” (a number)   '
          '4) “We haven’t … yet.”   5) “Next year we would like to …”   6) “Best regards, …”'),
    ('p', 'Sentence starters:  “It has been a year since…” · “So far we have…” · '
          '“We have already…” · “We haven’t … yet.” · “Last year we…”'),
    ('lines', 5),
    ('ex', 'D. Checklist. Tick each one when you have checked your email.'),
    ('check', [
        'I used the present perfect at least three times.',
        'I gave at least one number.',
        'I said one thing that is not finished, using “yet”.',
        'I used “for” or “since” correctly.',
        'I wrote “Best regards, …” and my job title at the end.',
    ]),
]

# ============================================================ PART 7
B += [
    ('bar', 'Part 7  ·  Trade-Skills Track', 'ADMIN'),
    ('h3', 'Reading a group structure: who buys, who moves, who sells'),
    ('fig', F.doc_card('A company profile card', 'Bashak Co.',
                       [('Group', 'Al-Hasan Holding Group'),
                        ('Sector', 'Trade and imports'),
                        ('Based in', 'Damascus, Syria'),
                        ('Buys', 'steel, fuel, machines'),
                        ('Buys from', 'suppliers abroad'),
                        ('Sells to', 'other Group companies'),
                        ('Manager', 'Rami, Import Manager')], accent=BLUE),
     'One card for each company: what it does, and who it deals with.'),
    ('p', 'A holding group can be confusing. Twelve companies, twelve managers, twelve telephone '
          'numbers. New staff waste days asking the wrong person. The cure is simple: learn the '
          'direction of each company. Does it buy, does it move, does it sell, or does it make?'),
    ('p', 'At Al-Hasan, four companies buy. Bashak imports steel, fuel and machines. Chemco buys '
          'metals and fuels. Altintash buys poultry, livestock and fodder. Dawa buys medical '
          'equipment. One company moves: Komosh books the ships, clears customs, and drives the '
          'trucks. Three companies sell inside Syria: the Chemco depot sells wholesale to '
          'builders, Alten IL sells retail in shops, and Altintash sells to farmers. And three '
          'factories make: Chemac makes cement, and the two Khalifa factories make iron and '
          'concrete.'),
    ('p', 'Once you know the direction, you know who to ask. A question about a ship goes to '
          'Komosh. A question about a shop goes to Alten IL. A question about a price abroad '
          'goes to Bashak. A good employee does not know everything — a good employee knows '
          'which door to knock on.'),
    ('fig', F.dos_donts('Working inside a group: do’s and don’ts',
                        ['learn what each company does',
                         'ask the company that owns the step',
                         'copy the head office on big decisions',
                         'use the company name, not “they”'],
                        ['send every question to head office',
                         'guess who is responsible',
                         'promise a date that is not yours',
                         'forget that Maham is a customer too']),
     'Knowing who does what saves days.'),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'What are the four directions a company in the Group can have?',
        'Which company moves the goods, and what three things does it do?',
        'Which two companies sell to people rather than to businesses?',
        'Who do you ask about a ship? Who do you ask about a shop?',
        'What does “a good employee knows which door to knock on” mean?',
    ]),
    ('ex', 'B. Listen and complete. A manager explains the Group. Write the missing word.'),
    ('items', [
        'Manager: Bashak imports steel, fuel and ____________.',
        'Manager: Komosh books the ships and clears ____________.',
        'Manager: Alten IL sells ____________ in shops.',
        'Manager: Chemac makes ____________ in Aleppo.',
    ]),
    ('ex', 'C. Practice. Draw a profile card for YOUR company or team. Use the headings on the '
           'card above. Then tell your partner what your company buys and what it sells.'),
    ('ex', 'D. Who do you ask? Answer with a company name.'),
    ('items', [
        'A container is sitting at customs. → ____________',
        'A shop has run out of cement. → ____________',
        'A supplier abroad has raised its price. → ____________',
        'A building site needs 200 tonnes of steel. → ____________',
    ]),
]

# ============================================================ PART 8
B += [
    ('bar', 'Part 8  ·  Consolidation', 'TRADE'),
    ('h3', 'Two reports, one group'),
    ('fig', F.split_panel('The annual review — what each side reported',
                          'ABROAD · Rami, Bashak',
                          ['11 orders placed since January', '9 arrived · 2 still open',
                           '2 new suppliers since March', 'Never imported machines — until now'],
                          'IN SYRIA · Lina, head office',
                          ['9,000 t of steel sold so far', 'Alten IL has opened a third shop',
                           'Cement has sold out twice', 'Altintash has not hit target yet']),
     'The two strands of one year, side by side.'),
    ('p', 'The review ends at four o’clock. Mr. Adnan looks at the two lists on the wall. On the '
          'left is what the Group has bought. On the right is what it has sold. For a moment '
          'nobody speaks.'),
    ('p', '“They do not match,” says Mr. Tarek at last. “We have brought in more steel than we '
          'have sold. The depot is full.” “And the shops are empty,” says Karim. “Maya has sold '
          'out of cement twice this month, and she has written to the depot three times. Nobody '
          'has answered her.”'),
    ('p', 'Mr. Adnan nods slowly. This is the real lesson of the year. The Group has done two '
          'things well and one thing badly. It has bought well: eleven orders, two new '
          'suppliers, no lost containers. It has sold well: more tonnes than last year, and a '
          'new shop. But the two sides have not talked to each other. Steel has waited in a '
          'depot while cement has run out in a shop forty kilometres away.'),
    ('p', '“Next year,” says Mr. Adnan, “Rami and Maya meet every month. Not me. Them.” He '
          'stands up. “We have been a good buyer and a good seller. We have not yet been one '
          'company. That is the work for next year.”'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done.)'),
    ('items0', [
        'What are the two lists on the wall?   (what the Group has bought, and what it has sold)',
        'What is the problem with the depot and the shops?',
        'How many times has Maya written to the depot, and what has happened?',
        'What two things has the Group done well?',
        'What has the Group not done well?',
        'What will change next year?',
    ]),
    ('ex', 'B. Complete each sentence with ONE word from the text. (0 is done for you.)'),
    ('items0', [
        'The review ends at four o’clock.',
        'The Group has brought in more steel than it has ____________.',
        'The ____________ is full, but the shops are empty.',
        'Nobody has ____________ Maya’s messages.',
        'Next year, Rami and Maya will ____________ every month.',
        'The Group has not yet been one ____________.',
    ]),
    ('ex', 'C. Discuss. Talk in pairs.'),
    ('items', [
        'Why do the buying side and the selling side need to talk?',
        'Has this ever happened in your company? What did you do?',
    ]),
    ('ex', 'D. Find a word from the text that means: (0 is done for you.)'),
    ('items0', [
        'to be the same as each other → (to match)',
        'to have none left → to run o____________',
        'to move the head up and down → to n____________',
        'the thing we learn → the l____________',
    ]),
]

# ============================================================ PART 9
B += [
    ('bar', 'Part 9  ·  Case Studies and Decisions', 'ADMIN'),
    ('fig', F.dos_donts('Reporting a year: do’s and don’ts',
                        ['give real numbers',
                         'say what is still open',
                         'use “so far” for the year to date',
                         'name the next step'],
                        ['say “business is good”',
                         'hide the two late orders',
                         'use the past simple for this year',
                         'end with no action']),
     'A report people can act on.'),
    ('h3', 'Case 1 — The number nobody checked  (strand A · the import desk)'),
    ('p', 'Rami tells the review that the Group has placed eleven orders. Ms. Chen’s file says '
          'nine. Rami counts two orders that are still open, and he has counted them as placed. '
          'The two of you now have different numbers in two different files.'),
    ('p', 'Choose the best action and say why.'),
    ('items', [
        '(  )  Use your own number and say nothing.',
        '(  )  Agree one definition with the supplier: “placed” or “shipped”, and write it down.',
        '(  )  Ask head office to decide.',
        '(  )  Change your file to match the supplier’s file.',
    ]),
    ('p', 'Write one sentence to the supplier to agree the definition.'),
    ('lines', 2),
    ('h3', 'Case 2 — Three emails, no answer  (strand B · the shop)'),
    ('p', 'Ms. Maya has written to the depot three times, and nobody has answered. Her shop has '
          'sold out of cement twice this month. Customers are going to another shop.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What should Ms. Maya do now, after three unanswered emails?',
        'Who else should she tell, and why?',
        'Write one short, polite message that is hard to ignore.',
    ]),
    ('h3', 'Case 3 — A full depot and an empty shop  (where the two strands meet)'),
    ('p', 'The depot holds more steel than the Group can sell this quarter. At the same time, the '
          'shops have run out of cement. Money is sitting still in one place and running out in '
          'another. Mr. Adnan asks you for one recommendation.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'Why is a full depot a problem, and not a sign of success?',
        'What one meeting, or one report, would have prevented this?',
        'Write one sentence recommending a change for next year.',
    ]),
]

# ============================================================ PART 10
B += [
    ('bar', 'Part 10  ·  Review and Can-Do', 'TRADE'),
    ('ex', 'A. Vocabulary. Complete the sentence.'),
    ('items', [
        'A company inside a bigger group is a ____________.',
        'A company that sells to us is a ____________.',
        'To bring goods into a country is to ____________.',
        'The building where we keep our stock is the ____________.',
        'Selling in small amounts in a shop is ____________.',
    ]),
    ('ex', 'B. Grammar. Complete with the present perfect or the past simple.'),
    ('items', [
        'We ____________ (place) eleven orders so far this year.',
        'Ms. Chen ____________ (visit) Damascus in April 2024.',
        'Rami ____________ (work) here since March.',
        'The shop ____________ (sell) out twice this month.',
        'They ____________ (not / send) the catalogue yet.',
        'We ____________ (sell) 7,000 tonnes last year.',
    ]),
    ('ex', 'C. Reading. Read the short text and answer.'),
    ('p', 'Al-Hasan Holding Group has twelve companies. Bashak buys abroad; Komosh moves the '
          'goods and clears customs; Chemco and Alten IL sell inside Syria. This year the Group '
          'has placed eleven import orders and has sold 9,000 tonnes of steel. Alten IL has '
          'opened a third shop. Altintash has not reached its target yet.'),
    ('items', [
        'Which company clears customs?',
        'How much steel has the Group sold this year?',
        'Which company has not reached its target?',
    ]),
    ('ex', 'D. Listening. Listen and answer. (Teacher reads.)'),
    ('p', '[Teacher reads] “Good afternoon. So far this year we have placed eleven orders and we '
          'have opened two new supplier accounts since March. Nine orders have arrived. Two '
          'haven’t reached us yet. Last year we placed only seven.”'),
    ('items', [
        'How many orders have been placed so far this year?',
        'How many new supplier accounts, and since when?',
        'How many orders were placed last year?',
    ]),
    ('ex', 'E. Speaking. Work in pairs. Report your year: two things you have done, and one '
           'thing you have not done yet.'),
    ('ex', 'F. Writing. Write two sentences: one with “We have… since…” and one with '
           '“Last year we…”.'),
    ('nlines', 2),
    ('ex', 'G. Error correction. Find and correct one mistake in each sentence.'),
    ('items', [
        'We have opened the shop last May. → ____________',
        'He has worked here since three years. → ____________',
        'Have you ever went to Lattakia? → ____________',
        'They haven’t already paid. → ____________',
        'When have the ship arrived? → ____________',
    ]),
    ('ex', 'H. Match the company (1–5) to what it does (a–e).'),
    ('items', [
        'Bashak  ____   a. clears customs and drives the trucks',
        'Komosh  ____   b. sells retail in shops',
        'Chemco  ____   c. imports for the whole Group',
        'Alten IL  ____   d. makes cement in Aleppo',
        'Chemac  ____   e. sells metals and fuels wholesale',
    ]),
    ('ex', 'I. Match the person (1–4) to their company (a–d).'),
    ('items', [
        'Rami  ____   a. Alten IL',
        'Mr. Samir  ____   b. Bashak',
        'Ms. Maya  ____   c. the Chemco depot',
        'Ms. Dana  ____   d. Komosh',
    ]),
    ('ex', 'Can-Do check. Tick what you can do.'),
    ('check', [
        'I can say what my company has done this year.',
        'I can say what we buy and what we sell.',
        'I can explain which company in the Group does what.',
        'I can write a short year-in-review email.',
    ]),
]

# ============================================================ PART 11
B += [
    ('bar', 'Part 11  ·  Foundations for Further Study', 'TRADE'),
    ('h3', 'Concept Spotlight: One group, two directions'),
    ('fig', F.icon_row('Every business runs in two directions', 'IN · AND · OUT', [
        ('globe', 'buy'), ('ship', 'bring in'), ('shelf', 'keep'),
        ('shop', 'sell'), ('money', 'collect'),
    ]), 'Money goes out to buy; money comes back from selling.'),
    ('p', 'In this unit you met a big idea, and it is bigger than one company in Damascus. Every '
          'business runs in two directions at the same time. Money goes out to buy things. Goods '
          'come in. Then goods go out to customers, and money comes back. The business lives in '
          'the gap between the two.'),
    ('p', 'Most people only see one direction. The person at the shop counter sees customers '
          'all day, so the business looks like selling. The person at the import desk sees '
          'suppliers all day, so the business looks like buying. Both are right, and both are '
          'half right. The Group only works when the two directions match: when the steel that '
          'comes in is the steel that someone wants to buy.'),
    ('p', 'Someone will say: this is obvious. Why spend a unit on it? Because it is obvious and '
          'companies still get it wrong. Al-Hasan got it wrong this year. A full depot looked '
          'like success — the Group had plenty of steel. An empty shop looked like success too — '
          'everything had sold. Only when the two reports stood side by side did anyone see the '
          'problem. Each half looked healthy. Together they showed a company talking to itself '
          'in two rooms.'),
    ('p', 'This is why the English in this book has two strands. In every unit you will work on '
          'the import side, facing a supplier abroad, and on the market side, facing a customer '
          'in Syria. The words are different. The tone is different: a letter to a supplier you '
          'have never met is not a two-minute conversation at a shop counter. You need both, '
          'because one person who can speak in both directions is worth more than two who can '
          'only speak in one.'),
    ('p', 'So as you learn, keep asking the question Mr. Adnan asked: does what we buy match '
          'what we sell? It is a question about steel and cement. It is also a question about '
          'you. What you learn should match what you need to do.'),
    ('ex', 'A. Understanding check. Answer in your own words.'),
    ('items', [
        'What are the two directions every business runs in?',
        'Why is the person at the shop counter only “half right”?',
        'Why did a full depot and an empty shop both look like success?',
        'Why does this book give every unit two strands?',
    ]),
    ('ex', 'B. Apply it. Do this task with a partner.'),
    ('p', 'Draw your own company in two directions. On the left, what comes in and who it comes '
          'from. On the right, what goes out and who it goes to. Then find one place where the '
          'two sides do not match, and explain it in simple English.'),
    ('ex', 'C. Micro-writing (optional).'),
    ('p', 'Write a few sentences (50–70 words) about your company this year. Use the present '
          'perfect three times. Example: “This year we have … . We have already … . We haven’t '
          '… yet.”'),
]

TERMS = [
    ('holding group', 'one big company that owns smaller ones'),
    ('subsidiary', 'a company inside a bigger group'),
    ('head office', 'the main office of a group'),
    ('branch', 'one shop or office of a company'),
    ('depot', 'a building where goods are kept'),
    ('warehouse', 'a large building for storing goods'),
    ('import (v)', 'to bring goods into a country'),
    ('export (v)', 'to send goods out of a country'),
    ('supplier', 'a company that sells to us'),
    ('customer', 'a person or company that buys from us'),
    ('wholesale', 'selling in large amounts to businesses'),
    ('retail', 'selling in small amounts in a shop'),
    ('distributor', 'a company that sells goods for someone else'),
    ('product line', 'one kind of product a company sells'),
    ('stock', 'the goods a company has now'),
    ('turnover', 'the total money a business takes in'),
    ('growth', 'getting bigger'),
    ('market', 'the people and companies who buy'),
    ('annual review', 'the yearly meeting about results'),
    ('target', 'the number we want to reach'),
    ('founder', 'the person who started the company'),
    ('board member', 'a person who helps decide the big things'),
    ('general manager', 'the person who runs the whole company'),
    ('import manager', 'the person who buys from abroad'),
    ('customs clearance', 'getting goods through the customs office'),
    ('freight', 'goods carried by ship, truck or plane'),
    ('container', 'a big steel box for carrying goods'),
    ('fodder', 'food for farm animals'),
    ('for', 'with a length of time'),
    ('since', 'with a point in time'),
    ('already', 'earlier than expected'),
    ('yet', 'not until now'),
    ('just', 'a very short time ago'),
    ('ever', 'at any time, in questions'),
    ('never', 'at no time'),
    ('so far', 'up to now'),
]

KEY = [
    ('Warm-Up A', '1 The Group buys much more than it makes. 2 Bashak; Rami is the Import '
                  'Manager. 3 It arranges the ship and clears the goods at customs (and owns the '
                  'trucks). 4 (any two) Chemco — to builders and factories; Alten IL — to '
                  'ordinary people in shops; Altintash — to farmers. 5 He has opened two new '
                  'supplier accounts. 6 Because NorthBridge is now both a customer and a '
                  'supplier — that is how a group grows.'),
    ('Warm-Up B', '1 T · 2 T · 3 F · 4 T · 5 F · 6 T'),
    ('Warm-Up C', '1 import · 2 depot · 3 abroad · 4 target'),
    ('Warm-Up D', 'Answers vary.'),
    ('P1 A', '0 c · 1 f · 2 a · 3 b · 4 g · 5 d · 6 e · 7 h  (d and h both used; “b” spare)'),
    ('P1 B', '1 subsidiary · 2 import · 3 supplier · 4 subsidiary / customer · 5 depot · 6 retail'),
    ('P1 C', '1 c · 2 a · 3 f · 4 b · 5 d · 6 e'),
    ('P1 D', '1 depot · 2 sell · 3 Tuesday · 4 Damascus · 5 Lattakia'),
    ('P1 E', '1 a · 2 b · 3 a · 4 a'),
    ('P1 F', 'We buy: Bashak · We move: Komosh · We sell or make: Alten IL, Chemac, Chemco '
             'depot, Khalifa Iron'),
    ('P1 G', '1 c · 2 a · 3 b · 4 e · 5 d · 6 f'),
    ('P1 H', '1 Group · 2 subsidiaries · 3 imports · 4 abroad · 5 depot · 6 sells'),
    ('P2 A', '1 has · 2 have · 3 has · 4 have · 5 have'),
    ('P2 B', '1 bought · 2 sent · 3 paid · 4 sold · 5 made · 6 taken'),
    ('P2 C', '1 for · 2 since · 3 for · 4 since'),
    ('P2 D', '1 just · 2 already · 3 yet · 4 yet'),
    ('P2 E', '1 have sold · 2 visited · 3 has worked · 4 arrived · 5 haven’t seen'),
    ('P2 F', '1 Have you ever bought from Westgate? 2 Have the goods arrived yet? '
             '3 How long has she worked in the depot? 4 Have we paid the invoice?'),
    ('P2 G', '1 He has been here for three months. 2 Have you seen the report? '
             '3 They haven’t paid yet. 4 When did you order it?'),
    ('P2 H', 'Answers vary — one present perfect, one past simple.'),
    ('P2 I', '1 has grown · 2 haven’t reached · 3 has cleared · 4 have sent · 5 has never worked'),
    ('P2 J', '1 We opened two new accounts in March. 2 Alten IL opened a third shop last month. '
             '3 Rami placed eleven orders in 2025. 4 The ship arrived on Tuesday.'),
    ('P3 D1 A', '1 Rami, from Bashak. 2 One year. 3 Nine shipped, two still open. '
                '4 NorthBridge has opened a machines division and wants to sell to Al-Hasan. '
                '5 No — never. 6 Because Chemac has asked for two packing machines.'),
    ('P3 D1 B', '1 T · 2 T · 3 F · 4 T · 5 F (a catalogue)'),
    ('P3 D1 C', '1 we haven’t received them yet · 2 Have you ever imported packing machines? '
                '3 Never.'),
    ('P3 D2 A', '1 Her numbers for the annual review. 2 It opened in May and has already paid '
                'for itself. 3 The shop has sold out of cement twice. 4 Ms. Dana, three times — '
                'she hasn’t answered.'),
    ('P3 D2 B', '1 B · 2 B · 3 C · 4 C'),
    ('P4 B', 'Answers vary — report your own year from your own role (see the phrases).'),
    ('P5 A', '1 Move, store and deliver the goods. 2 Komosh. 3 (any two) speed; information; '
             'money stays inside the Group. 4 Because the trucks belong to his own group. '
             '5 You must pay for trucks and a warehouse even in a quiet month. 6 If you own the '
             'transport, you control it, so delays are your own to fix.'),
    ('P5 B', '1 C · 2 B · 3 C · 4 D · 5 B'),
    ('P5 C', '1 store · 2 clear · 3 quiet · 4 single'),
    ('P5 D', '1 owns · 2 places · 3 clears · 4 sell · 5 Group · 6 expensive'),
    ('P5 F', '1 NOT GIVEN · 2 T · 3 NOT GIVEN · 4 T'),
    ('P6 A', '1 Eleven placed, nine arrived. 2 Two orders have not reached them yet. '
             '3 Because Chemac has asked for two packing machines.'),
    ('P6 B', 'Order: 2 (Dear Ms. Chen,) · 3 (It has been a year…) · 5 (We have placed eleven '
             'orders…) · 4 (Two orders have not reached us yet.) · 6 (Chemac has asked…) · '
             '1 (Best regards, Rami) — i.e. 1 = Best regards, last.'),
    ('P7 A', '1 Buy, move, sell, make. 2 Komosh — books the ships, clears customs, drives the '
             'trucks. 3 Alten IL (shops) and Altintash (farmers). 4 Komosh; Alten IL. '
             '5 You do not need to know everything — you need to know who is responsible.'),
    ('P7 B', '1 machines · 2 customs · 3 retail · 4 cement'),
    ('P7 D', '1 Komosh · 2 the Chemco depot · 3 Bashak · 4 Chemco (the depot)'),
    ('P8 A', '1 What the Group has bought, and what it has sold. 2 The depot is full of steel '
             'while the shops have run out of cement. 3 Three times; nobody has answered. '
             '4 It has bought well and sold well. 5 The two sides have not talked to each other. '
             '6 Rami and Maya will meet every month.'),
    ('P8 B', '1 sold · 2 depot · 3 answered · 4 meet · 5 company'),
    ('P8 D', '1 out · 2 nod · 3 lesson'),
    ('P10 A', '1 subsidiary · 2 supplier · 3 import · 4 depot · 5 retail'),
    ('P10 B', '1 have placed · 2 visited · 3 has worked · 4 has sold · 5 haven’t sent · 6 sold'),
    ('P10 C', '1 Komosh. 2 9,000 tonnes. 3 Altintash.'),
    ('P10 D', '1 Eleven. 2 Two, since March. 3 Seven.'),
    ('P10 G', '1 We opened the shop last May. 2 He has worked here for three years. '
              '3 Have you ever been to Lattakia? 4 They haven’t paid yet. '
              '5 When did the ship arrive?'),
    ('P10 H', '1 c · 2 a · 3 e · 4 b · 5 d'),
    ('P10 I', '1 b · 2 d · 3 a · 4 c'),
    ('P11 A', '1 Money and goods go out to buy; goods and money come back from selling. '
              '2 Because selling is only one of the two directions. 3 Each half looked healthy '
              'on its own — plenty of stock, and everything sold. 4 Because the words and the '
              'tone of the import side and the market side are different, and you need both.'),
]

UNIT = dict(
    n=1,
    title='The Group and Its Companies',
    grammar='present perfect (for / since · already / yet / just · ever / never) vs past simple',
    function='Trade + Admin',
    candos=[
        'I can say what my company has done this year',
        'I can say what we buy and what we sell',
        'I can explain which company in the Group does what',
        'I can write a short year-in-review email',
    ],
    cando_line='You can say what the Group has bought and sold this year.',
    blocks=B,
    terms=TERMS,
    key=KEY,
    teaser=F.scene_banner(
        'Unit 2 — finding a new supplier',
        [('m', GREEN_D), ('m', PURPLE)],
        ['“We need a supplier', 'we have never used.”'],
        'WHAT WE SEND OUT',
        ['An enquiry to three suppliers', 'What we need, and how much',
         'When we need it', 'What we must know first'],
        quote='“Who else can sell us this?”'),
)
