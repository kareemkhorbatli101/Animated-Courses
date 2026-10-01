# -*- coding: utf-8 -*-
"""Unit 5 — Shipping In and Clearing Customs.
Strand A: the vessel and the shipping documents (Rami, Mr. Delgado, the line).
Strand B: customs at Lattakia and the road to the depot (Mr. Samir, Ms. Dana).
"""
import frames as F
from art import NAVY, BLUE, ORANGE, GREEN, GREEN_D, PURPLE, GREY

B = []

PEOPLE = [
    ('Rami', 'Bashak · Imports', 'm', GREEN_D),
    ('Mr. Samir', 'Komosh · Freight', 'm', ORANGE),
    ('Ms. Dana', 'Depot · Quality', 'h', GREEN),
    ('Fadi', 'Head office · Admin', 'm', PURPLE),
    ('Mr. Delgado', 'Westgate Metals', 'm', NAVY),
    ('Karim', 'Fin. Controller', 'm', GREY),
]

# ============================================================ unit openers
B += [
    ('fig', F.route_strip('How the steel reaches the depot', [
        ('factory', 'Loaded at the mill'), ('ship', 'By sea to Lattakia'),
        ('stamp', 'Cleared at customs'), ('truck', 'By road inland'),
        ('shelf', 'Received at the depot'),
    ]), 'Five stages. The goods are handed over four times.'),
    ('fig', F.team_strip('The people in this unit', PEOPLE),
     'One side watches a ship; the other side waits at a gate.'),
]

# ============================================================ WARM UP
B += [
    ('bar', 'Warm Up', 'LOGISTICS'),
    ('p', 'Look at the pictures. Answer these questions before you read.'),
    ('items', [
        'How do goods arrive in your country — by sea, by road, or by air?',
        'What papers travel with a shipment?',
        'What can stop goods at a border?',
    ]),
    ('h3', 'Read'),
    ('p', 'The steel is loaded at the mill on the 10th and the vessel sails on the 14th. '
          'Forty-eight containers, 1,200 tonnes. The voyage takes eleven days.'),
    ('p', 'While the ship is at sea, the papers travel separately. Four documents are needed: '
          'the bill of lading, which proves the goods were put on board; the packing list, '
          'which says what is in each container; the commercial invoice, which says what the '
          'goods are worth; and the certificate of origin, which says where they were made. '
          'Without all four, nothing is released.'),
    ('p', 'Mr. Samir of Komosh reads them on the 19th, before the ship arrives. He reads them '
          'the way a customs officer will read them, line by line. On the fourth document he '
          'stops.'),
    ('p', '“The certificate of origin is made out to Bashak Co.,” he says. “The bill of lading '
          'is made out to Al-Hasan Holding Group. They are not the same name.”'),
    ('p', 'Rami does not see the problem at first. “It is the same group.” “It is the same '
          'group to you and me,” says Mr. Samir. “It is two companies to a customs officer. If '
          'the names do not match, the consignment is held, and after five days we are charged '
          'storage.”'),
    ('p', 'So the correction is requested the same afternoon. Westgate is asked for a new '
          'certificate, and a courier is booked. The ship arrives at Lattakia on the 25th. The '
          'corrected certificate arrives on the 24th, by one day.'),
    ('p', 'The containers are discharged on the 26th. The declaration is submitted the same '
          'morning, four containers are opened and inspected, and the consignment is released '
          'on the 27th. Komosh’s trucks begin the run to Damascus that evening. Nothing was '
          'late. But it was close, and it was close because of a name.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'When was the steel loaded, and when did the vessel sail?   (loaded on the 10th, sailed on the 14th)',
        'What four documents are needed, and what does each one prove?',
        'What does Mr. Samir find on the fourth document?',
        'Why is it a problem, if it is the same group?',
        'What happens if a consignment is held for more than five days?',
        'By how much did the corrected certificate arrive in time?',
    ]),
    ('ex', 'B. True or False? Write T or F. (0 is done for you.)'),
    ('items0', [
        'The voyage takes twenty-one days.   (F)',
        'The papers travel with the ship.   ____',
        'The bill of lading proves the goods were put on board.   ____',
        'The certificate of origin says what the goods are worth.   ____',
        'Four containers were opened and inspected.   ____',
        'The consignment was released on the 27th.   ____',
    ]),
    ('ex', 'C. Find the words. Find a word or phrase in the text that means: (0 is done for you.)'),
    ('items0', [
        'the ship that carries the goods → (the vessel)',
        'the journey of a ship from one port to another → the v____________',
        'the goods sent in one shipment → the c____________',
        'money charged when goods stay too long at the port → s____________',
    ]),
    ('ex', 'D. Over to you. Answer about yourself.'),
    ('items', [
        'Who clears goods through customs for your company?',
        'Has a shipment of yours ever been held? Why?',
        'How long does customs clearance usually take where you are?',
    ]),
]

# ============================================================ PART 1
B += [
    ('bar', 'Part 1  ·  Vocabulary and Terminology', 'LOGISTICS'),
    ('h3', 'The bill of lading'),
    ('fig', F.doc_card('The parts of a bill of lading', 'Bill of lading B/L-77214',
                       [('Shipper', 'Westgate Metals & Equipment'),
                        ('Consignee', 'Al-Hasan Holding Group'),
                        ('Notify party', 'Komosh Co., Damascus'),
                        ('Vessel / voyage', 'MV Rania · V-118'),
                        ('Port of loading', 'the supplier’s port'),
                        ('Port of discharge', 'Lattakia, Syria'),
                        ('Containers', '48 × 20 ft, sealed'),
                        ('Gross weight', '1,236,400 kg')], accent=BLUE),
     'The document that proves the goods were put on board.'),
    ('ex', 'A. Match each word (1–7) with its meaning (a–h). There is one you do not need. '
           '(0 is done for you.)'),
    ('items0', [
        'shipper  (f)',
        'consignee  ____   a. the port where the goods are unloaded',
        'notify party  ____   b. the company the goods are sent to',
        'port of discharge  ____   c. the expected day of arrival',
        'ETA  ____   d. the company told when the ship arrives',
        'packing list  ____   e. a paper saying where the goods were made',
        'certificate of origin  ____   f. the company sending the goods',
        'demurrage  ____   g. a paper saying what is in each container',
        '          h. money charged when containers stay too long',
    ]),
    ('ex', 'B. Complete the sentences with the words in the word bank.'),
    ('bank', 'Word bank:', ['bill of lading', 'consignee', 'ETA', 'packing list',
                            'certificate of origin', 'demurrage']),
    ('items', [
        'The ____________ proves that the goods were put on board.',
        'The ____________ on this shipment is Al-Hasan Holding Group.',
        'The ____________ is the 25th, but ships are often a day late.',
        'Open the ____________ to see what is in container number twelve.',
        'Customs asked for the ____________, because the duty depends on it.',
        'After five days at the port, we start paying ____________.',
    ]),
    ('h3', 'The documents that travel'),
    ('fig', F.icon_row('Four papers, or nothing moves', 'THE DOCUMENT SET', [
        ('ship', 'bill of lading'), ('doc', 'packing list'),
        ('money', 'invoice'), ('stamp', 'certificate of origin'),
    ]), 'All four must agree with each other, exactly.'),
    ('ex', 'C. Match the document (1–4) with the question it answers (a–d).'),
    ('items', [
        'bill of lading  ____   a. What is in each container?',
        'packing list  ____   b. Where were the goods made?',
        'commercial invoice  ____   c. Were the goods put on board?',
        'certificate of origin  ____   d. What are the goods worth?',
    ]),
    ('h3', 'At the port'),
    ('fig', F.label_panel('Words you will hear at Lattakia', [
        ('discharge', 'to unload from the ship'),
        ('declaration', 'the form submitted to customs'),
        ('inspection', 'customs opens and checks'),
        ('release', 'customs says the goods may go'),
        ('haulage', 'the road transport inland'),
        ('seal', 'the lock number on a container'),
    ], cols=3), 'Six words that decide whether today is a good day.'),
    ('ex', 'D. Odd one out. Which word is different? Circle it.'),
    ('items', [
        'vessel · voyage · container · margin',
        'shipper · consignee · notify party · demurrage',
        'discharge · unload · release · invoice',
        'inspect · check · examine · deliver',
        'seal · container · pallet · duty',
    ]),
    ('ex', 'E. Choose the best answer.'),
    ('items', [
        'The company the goods are sent to is the…   (a) shipper   (b) consignee',
        'To take goods off a ship is to…   (a) discharge   (b) declare',
        'Money charged for staying too long at the port is…   (a) duty   (b) demurrage',
        'The paper saying where goods were made is the…   (a) packing list   (b) certificate of origin',
    ]),
    ('ex', 'F. Classify. Write each word in the correct column.'),
    ('bank', 'Words:', ['vessel', 'declaration', 'haulage', 'container',
                        'inspection', 'release order']),
    ('grid', ['At sea', 'At customs', 'On the road'], 3),
    ('ex', 'G. Match the two halves (1–6 with a–f).'),
    ('items', [
        'bill of  ____   a. of origin',
        'port of  ____   b. list',
        'certificate  ____   c. lading',
        'packing  ____   d. party',
        'notify  ____   e. discharge',
        'customs  ____   f. declaration',
    ]),
    ('ex', 'H. Complete the paragraph with the words in the box.'),
    ('bank', 'Box:', ['cleared', 'consignee', 'discharged', 'inspected',
                      'released', 'submitted']),
    ('p', 'The containers are (1)____________ on the 26th. The declaration is (2)____________ '
          'the same morning, and four containers are (3)____________. The (4)____________ on '
          'the bill of lading must match the certificate of origin. The goods are '
          '(5)____________ by Komosh and (6)____________ on the 27th.'),
]

# ============================================================ PART 2
B += [
    ('bar', 'Part 2  ·  Grammar — the passive (present and past simple)', 'LOGISTICS'),
    ('fig', F.grammar_card('The present simple passive — how a process works', [
        ('singular', 'is + V3', 'The declaration is submitted online.'),
        ('plural', 'are + V3', 'The containers are inspected at the port.'),
        ('negative', 'isn’t / aren’t', 'The goods aren’t released until the duty is paid.'),
    ], 'V3 = the past participle: loaded · sent · taken · put · held'),
     'We use it when the action matters more than the person.'),
    ('p', 'We use the PASSIVE when the action matters more than the person who does it, or when '
          'everybody already knows who does it. The containers are inspected at the port. '
          'Nobody needs to say “customs officers inspect the containers” — it is obvious. The '
          'passive is the normal voice of a process.'),
    ('fig', F.grammar_card('The past simple passive — what happened', [
        ('singular', 'was + V3', 'The consignment was held for two days.'),
        ('plural', 'were + V3', 'Four containers were opened.'),
        ('negative', 'wasn’t / weren’t', 'The steel wasn’t released on the 26th.'),
    ], 'Question: Was it released? · When were they inspected?'),
     'The same idea, in the past.'),
    ('p', 'For a finished action we use WAS or WERE with the past participle. The vessel was '
          'loaded on the 10th. The containers were discharged on the 26th. Four were opened and '
          'inspected.'),
    ('fig', F.grammar_card('by + the doer, when it matters', [
        ('usually leave it out', '(no by)', 'The goods are inspected at the port.'),
        ('say it if it is news', 'by + agent', 'The goods are cleared by Komosh.'),
        ('say it if it is a choice', 'by + agent', 'The certificate was issued by the chamber.'),
    ], 'Only add “by …” when the reader does not already know, or would be surprised.'),
     'Most passive sentences have no “by” at all.'),
    ('fig', F.split_panel('Same fact, two voices',
                          'ACTIVE · who did it',
                          ['Komosh cleared the goods.',
                           'Customs opened four containers.',
                           'Westgate issued a new certificate.',
                           'The line discharged the vessel.'],
                          'PASSIVE · what happened',
                          ['The goods were cleared by Komosh.',
                           'Four containers were opened.',
                           'A new certificate was issued.',
                           'The vessel was discharged on the 26th.']),
     'Use the active for people; use the passive for procedure.'),
    ('watch', 'Build the passive from the past participle, not the past simple: it was sent, '
              'not it was send. And do not use the passive with verbs that take no object: '
              'the ship arrived (never the ship was arrived).'),
    ('h3', 'Form'),
    ('p', 'present passive:  am / is / are + past participle     ·     '
          'past passive:  was / were + past participle     ·     '
          'the doer, if needed:  by + person or company'),
    ('ex', 'A. Complete with IS or ARE. (0 is done for you.)'),
    ('items0', [
        'The declaration is submitted on the morning of arrival.',
        'The containers ____________ inspected at the port.',
        'The duty ____________ calculated from the invoice value.',
        'The goods ____________ released when the duty is paid.',
        'Four papers ____________ needed for every consignment.',
    ]),
    ('ex', 'B. Complete with WAS or WERE.'),
    ('items', [
        'The vessel ____________ loaded on the 10th.',
        'Four containers ____________ opened at the port.',
        'The consignment ____________ held for two days.',
        'The corrected certificates ____________ sent by courier.',
    ]),
    ('ex', 'C. Write the past participle.'),
    ('items', [
        'send → ____________',
        'load → ____________',
        'hold → ____________',
        'take → ____________',
        'pay → ____________',
        'give → ____________',
    ]),
    ('ex', 'D. Make the sentence passive. Leave out the doer if it is obvious. '
           '(0 is done for you.)'),
    ('items0', [
        'Customs inspect the containers. → (The containers are inspected.)',
        'Komosh cleared the goods. → ____________',
        'They submit the declaration online. → ____________',
        'Someone opened four containers. → ____________',
        'The chamber issued the certificate. → ____________',
    ]),
    ('ex', 'E. Make the sentence active.'),
    ('items', [
        'The goods are cleared by Komosh. → ____________',
        'The steel was loaded by the mill on the 10th. → ____________',
        'A new certificate was issued by Westgate. → ____________',
        'The trucks are booked by Mr. Samir. → ____________',
    ]),
    ('ex', 'F. Make questions in the passive.'),
    ('items', [
        '(?) when / the vessel / load → ____________',
        '(?) how many containers / inspect → ____________',
        '(?) the goods / release / yet → ____________',
        '(?) who / the certificate / issue / by → ____________',
    ]),
    ('ex', 'G. Find and correct the mistake in each sentence. (0 is done for you.)'),
    ('items0', [
        'The papers was send by courier. → (The papers were sent by courier.)',
        'The ship was arrived on the 25th. → ____________',
        'Four containers was opened. → ____________',
        'The duty is calculate from the invoice. → ____________',
        'The goods are cleared from Komosh. → ____________',
    ]),
    ('ex', 'H. About you. Write two sentences about your workplace in the passive: one present, '
           'one past.'),
    ('nlines', 2),
    ('ex', 'I. Complete with the present or past passive.'),
    ('items', [
        'The containers ____________ (discharge) yesterday morning.',
        'Every declaration ____________ (check) before it is submitted.',
        'The consignment ____________ (hold) for two days last week.',
        'Our goods ____________ (always / clear) by Komosh.',
        'The seal numbers ____________ (record) when the container is opened.',
    ]),
    ('ex', 'J. Describe the process in the passive.'),
    ('items', [
        'they load the steel at the mill → ____________',
        'the line discharges the containers at Lattakia → ____________',
        'customs inspects four containers → ____________',
        'Komosh hauls the steel to Damascus → ____________',
    ]),
]

# ============================================================ PART 3
B += [
    ('bar', 'Part 3  ·  Listening and Dialogue', 'LOGISTICS'),
    ('fig', F.dialogue_scene(('m', ORANGE), ['The names don’t match.', 'It will be held.'],
                             ('m', GREEN_D), ['It’s the same group!', '…Isn’t it?']),
     'Strand A · the document check, six days before arrival.'),
    ('h3', 'Dialogue 1 — Checking the documents (the freight desk)'),
    ('p', 'Listen and read. (Your teacher will read the dialogue, or play the audio.)'),
    ('dlg', [
        ('Mr. Samir', 'Rami, I have read the set. Three documents are fine. The fourth is not.'),
        ('Rami', 'Which one?'),
        ('Mr. Samir', 'The certificate of origin. It is made out to Bashak Co. The bill of '
                      'lading is made out to Al-Hasan Holding Group.'),
        ('Rami', 'It is the same group.'),
        ('Mr. Samir', 'It is the same group to you and me. To a customs officer it is two '
                      'companies. If the names do not match, the consignment is held.'),
        ('Rami', 'And if it is held?'),
        ('Mr. Samir', 'Five free days. After that we are charged storage, and the containers '
                      'are charged demurrage by the line. Both clocks run at the same time.'),
        ('Rami', 'Then I will ask Westgate for a corrected certificate today.'),
        ('Mr. Samir', 'Ask for it by courier, not by email. A scan is not accepted. And tell '
                      'them exactly how the name must be spelled — copy it from the bill of '
                      'lading, letter by letter.'),
        ('Rami', 'The ship arrives on the 25th. Is six days enough?'),
        ('Mr. Samir', 'It is enough if it is sent tomorrow. It is not enough if it is sent on '
                      'Thursday.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'How many documents are fine, and how many are not?   (three are fine, one is not)',
        'What exactly is wrong with the certificate of origin?',
        'Why is “the same group” not an answer for a customs officer?',
        'What two charges start after the five free days?',
        'Why must the certificate come by courier?',
        'When must it be sent, and why?',
    ]),
    ('ex', 'B. True or False? Write T or F.'),
    ('items', [
        'All four documents had the same name on them.   ____',
        'There are five free days before charges start.   ____',
        'A scanned certificate is accepted.   ____',
        'Mr. Samir tells Rami to copy the name letter by letter.   ____',
        'Six days is enough if the certificate is sent on Thursday.   ____',
    ]),
    ('ex', 'C. Language focus. Find in the dialogue: (0 is done for you.)'),
    ('items0', [
        'a present passive about what happens to a consignment → (the consignment is held)',
        'a present passive about charges → ____________',
        'a passive in the negative → ____________',
        'a first conditional about the names → ____________',
    ]),
    ('fig', F.half_scene('h', GREEN, ['Forty-eight in,', 'forty-eight checked.']),
     'Strand B · the gate at the depot, eleven days later.'),
    ('h3', 'Dialogue 2 — At the depot gate (inside Syria)'),
    ('dlg', [
        ('Ms. Dana', 'Samir, the first eighteen are in. Were the seals checked at the port?'),
        ('Mr. Samir', 'They were. Four containers were opened by customs, so those four carry '
                      'new seal numbers.'),
        ('Ms. Dana', 'Which four? My sheet has the old numbers.'),
        ('Mr. Samir', 'They are listed on the release order. I am sending you a photograph now.'),
        ('Ms. Dana', 'Good. Anything damaged?'),
        ('Mr. Samir', 'One container has a bent door. It was not opened by customs — that '
                      'happened at sea.'),
        ('Ms. Dana', 'Then I will photograph it before it is unloaded, not after. If we unload '
                     'first, nobody can prove anything.'),
        ('Mr. Samir', 'Agreed. Photograph the seal, the door and the number, all in one picture.'),
    ]),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'How many containers have arrived at the depot so far?',
        'Why do four containers carry new seal numbers?',
        'Where are the new seal numbers listed?',
        'Why will Ms. Dana photograph the damaged container before unloading?',
    ]),
    ('ex', 'B. Listen again and choose the best answer (A–D).'),
    ('items', [
        'The first … containers are in.   A) four  B) eight  C) eighteen  D) forty-eight',
        'The containers opened by customs were…   A) two  B) four  C) eighteen  D) none',
        'The bent door happened…   A) at customs  B) at sea  C) at the depot  D) at the mill',
        'Mr. Samir says to photograph the seal, the door and the…   A) driver  B) number  '
        'C) invoice  D) date',
    ]),
]

# ============================================================ PART 4
B += [
    ('bar', 'Part 4  ·  Speaking and Your Role', 'LOGISTICS'),
    ('fig', F.label_panel('Phrases for describing a process and a hold-up', [
        ('First the goods are…', 'describing a process'),
        ('They were held because…', 'explaining a delay'),
        ('It is being cleared now.', 'saying where it is'),
        ('Nothing is released until…', 'naming the blocker'),
        ('It was sent by courier.', 'saying how'),
        ('Four were opened.', 'giving a number'),
    ], cols=3), 'The passive is how a shipping update is written.'),
    ('ex', 'A. Role-play: the document check. Student A is the freight manager and finds a '
           'problem. Student B is the import manager. Then change roles.'),
    ('items', [
        'A: Say that three documents are fine and one is not.',
        'B: Ask which one.',
        'A: Explain the problem, using the passive.',
        'B: Say it is the same group.',
        'A: Explain what will happen if the names do not match.',
        'B: Say what you will do, and ask if there is time.',
    ]),
    ('fig', F.label_panel('Every job describes the same journey', [
        ('Imports', 'the order was placed on the 21st'),
        ('Freight', 'the vessel was loaded on the 10th'),
        ('Customs', 'four containers were inspected'),
        ('Depot', 'eighteen were received today'),
        ('Finance', 'the duty is calculated from the invoice'),
        ('Admin', 'the papers were sent by courier'),
    ], cols=3), 'Six roles, one shipment, all in the passive.'),
    ('ex', 'B. Your Role. Describe one step of a process from YOUR job, in the passive. '
           '(Choose your real role.)'),
    ('items', [
        '[Trade] Import Manager: “The order was placed on the 21st.”',
        '[Logistics] Freight: “The vessel was loaded on the 10th and sailed on the 14th.”',
        '[Logistics] Customs clerk: “Four containers were opened and inspected.”',
        '[Trade] Depot: “Eighteen containers were received this morning.”',
        '[Finance] Accountant: “The duty is calculated from the invoice value.”',
        '[Admin] Assistant: “The documents were sent by courier on Tuesday.”',
    ]),
    ('ex', 'C. Ask your partner. Walk around and ask three people.'),
    ('items', [
        'How are goods delivered to your company?',
        'When was the last shipment you received, and was anything checked?',
        'What is never released until something else is done?',
    ]),
    ('ex', 'D. Discuss. Ask and answer.'),
    ('items', [
        'Why do customs officers check names so carefully?',
        'Is it better to use your own freight company, or to pay another one?',
    ]),
]

# ============================================================ PART 5
B += [
    ('bar', 'Part 5  ·  Extended Reading', 'LOGISTICS'),
    ('h3', 'Why a border stops paper, not goods'),
    ('fig', F.process_strip('The steps at customs', [
        'Declaration submitted', 'Documents checked', 'Duty calculated',
        'Goods inspected', 'Release order issued',
    ]), 'Five steps, and only one of them touches the steel.'),
    ('p', 'People imagine that customs is about goods. It is mostly about paper. An officer at '
          'a port has thousands of containers and a few hours. He cannot open them all, and he '
          'is not trying to. What he is doing is reading documents and looking for sentences '
          'that disagree with each other.'),
    ('p', 'The logic is simple once you see it. The invoice says what the goods are worth. The '
          'duty is calculated from that value, so if the invoice is wrong, the country is paid '
          'the wrong amount. The certificate of origin says where the goods were made, and '
          'different countries pay different rates, so origin changes the money too. The '
          'packing list says what is inside, and the bill of lading says who owns it. Four '
          'papers, four facts, and every one of them has a price attached.'),
    ('p', 'So the officer compares. If the bill of lading says Al-Hasan Holding Group and the '
          'certificate says Bashak Co., he is not being difficult. He is looking at two '
          'documents that name two different owners for the same steel, and he cannot release '
          'goods to a company that is not on the bill of lading. The containers are not the '
          'problem. The sentence is.'),
    ('p', 'This is why experienced freight people read the whole set before the ship arrives, '
          'and why they read it as the officer will. The name is copied letter by letter. The '
          'weights on the packing list are added up and compared with the bill of lading. The '
          'invoice value is checked against the purchase order. Anything that disagrees is '
          'corrected while the goods are still at sea, because a correction takes three days by '
          'courier and a hold costs money every day after the fifth.'),
    ('p', 'And the cost is not only storage. When a container sits at a port, the shipping line '
          'charges demurrage for its own box, the depot plans for steel that does not come, and '
          'the customer who was promised a date is told a new one. One mismatched name on one '
          'page can move a date for five hundred people. That is why the work is done in '
          'advance, quietly, by somebody reading very slowly.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done for you.)'),
    ('items0', [
        'What is customs mostly about?   (paper, not goods)',
        'Why can’t the officer open every container?',
        'How is the duty calculated, and why does the invoice matter?',
        'Why does the certificate of origin change the money?',
        'Why is the officer not “being difficult” about the names?',
        'Name two costs of a held container, apart from storage.',
    ]),
    ('ex', 'B. Choose the best answer (A–D).'),
    ('items', [
        'The officer is looking for…   A) damaged goods  B) sentences that disagree  '
        'C) heavy containers  D) new suppliers',
        'The duty is calculated from the…   A) weight  B) seal  C) invoice value  D) packing list',
        'The certificate of origin changes the…   A) weight  B) rate of duty  C) vessel  D) consignee',
        'Experienced freight people read the set…   A) after arrival  B) before the ship arrives  '
        'C) at the depot  D) never',
        'A correction by courier takes about…   A) one day  B) three days  C) ten days  D) a month',
    ]),
    ('ex', 'C. Find a word or phrase in the text that means:'),
    ('items', [
        'to not agree with each other → to d____________',
        'to say the goods may leave the port → to r____________ them',
        'the money charged by the line for its own container → d____________',
        'a mistake where two papers say different things → a m____________',
    ]),
    ('ex', 'D. Complete the summary with ONE word in each gap.'),
    ('p', 'Customs is mostly about (1)____________. The officer compares four documents and '
          'looks for facts that (2)____________. The duty is calculated from the invoice '
          '(3)____________, and the rate depends on the (4)____________. If the names do not '
          'match, the goods cannot be (5)____________. A correction takes three days, so the '
          'set is checked while the goods are still at (6)____________.'),
    ('ex', 'E. Discuss. Talk in pairs.'),
    ('items', [
        'Who checks shipping documents in your company, and when?',
        'What is the worst delay you have seen at a border? What caused it?',
    ]),
    ('ex', 'F. True or False? (about the reading). Write T, F or NOT GIVEN.'),
    ('items', [
        'Customs officers open every container.   ____',
        'The rate of duty can depend on where the goods were made.   ____',
        'Demurrage is charged by the shipping line.   ____',
        'Most delays at Lattakia are caused by paperwork.   ____',
    ]),
]

# ============================================================ PART 6
B += [
    ('bar', 'Part 6  ·  Writing (a real email)', 'ADMIN'),
    ('h3', 'Model — A shipping and clearance update'),
    ('fig', F.doc_card('The shape of a clearance update', 'Update',
                       [('1  Where it is', 'discharged / cleared / on the road'),
                        ('2  What was done', 'in the passive, with dates'),
                        ('3  What is open', 'one line, honestly'),
                        ('4  The new date', 'and how sure it is'),
                        ('5  What we need', 'from the reader'),
                        ('6  Next update', 'when it will come')], accent=ORANGE),
     'Six lines. People read updates standing up.'),
    ('p', 'Subject: PO-4417 — cleared, on the road. Dear Mr. Tarek, The vessel was discharged at '
          'Lattakia on the 26th. The declaration was submitted the same morning and four '
          'containers were opened and inspected. The consignment was released yesterday '
          'afternoon and the first eighteen containers were received at the depot this morning. '
          'The remaining thirty are being hauled today and tomorrow. One container has a bent '
          'door, which happened at sea and not at customs; it was photographed before it was '
          'unloaded, and a claim is being prepared. We expect the full consignment to be in the '
          'depot by Thursday evening. I will send the final confirmation on Thursday. Best '
          'regards, Rami Import Manager, Bashak Co.'),
    ('ex', 'A. Answer about the email. (0 is done for you.)'),
    ('items0', [
        'Where was the vessel discharged, and when?   (at Lattakia, on the 26th)',
        'What happened to four of the containers?',
        'How many containers are in the depot, and how many are still on the road?',
        'What is the problem with one container, and what has been done about it?',
    ]),
    ('ex', 'B. Put the email in order (1–6).'),
    ('items', [
        '(  )  The consignment was released yesterday afternoon.',
        '(  )  Dear Mr. Tarek,',
        '(  )  The vessel was discharged at Lattakia on the 26th.',
        '(  )  I will send the final confirmation on Thursday.',
        '(  )  One container has a bent door, which happened at sea.',
        '(  )  Best regards, Rami',
    ]),
    ('h3', 'Guided writing'),
    ('ex', 'C. Now you write. Write a clearance update (70–100 words) about a shipment. Use the '
           'past passive at least three times, and give one date.'),
    ('p', 'Plan:  1) “Dear …,”   2) “The vessel was … on the ….”   3) “The declaration was … '
          'and … were ….”   4) “One … is still ….”   5) “We expect … by ….”   6) “I will send '
          '… on ….”   7) “Best regards, …”'),
    ('p', 'Sentence starters:  “The vessel was discharged on…” · “The declaration was '
          'submitted…” · “Four containers were…” · “The consignment was released…” · '
          '“We expect … by …”'),
    ('lines', 5),
    ('ex', 'D. Checklist. Tick each one when you have checked your update.'),
    ('check', [
        'I said where the goods are now.',
        'I used the past passive with dates.',
        'I said honestly what is still open.',
        'I gave a new date and said how sure it is.',
        'I said when the next update will come.',
    ]),
]

# ============================================================ PART 7
B += [
    ('bar', 'Part 7  ·  Trade-Skills Track', 'LOGISTICS'),
    ('h3', 'Reading a packing list against a bill of lading'),
    ('fig', F.doc_card('The packing list', 'Packing list PL-77214',
                       [('Containers', '48 × 20 ft'),
                        ('Seal numbers', 'listed per container'),
                        ('Contents', 'steel coil, 5 mm'),
                        ('Coils per container', '12'),
                        ('Net weight', '1,200,000 kg'),
                        ('Gross weight', '1,236,400 kg'),
                        ('Marks', 'AHG / PO-4417')], accent=GREEN_D),
     'The list that must agree with everything else.'),
    ('p', 'A packing list looks like a boring table. It is the document that decides whether a '
          'claim can be made. If a container arrives short, the packing list is the only paper '
          'that says how many coils should have been inside it. If the weight is wrong, the '
          'packing list is the only paper that says what it should have been.'),
    ('p', 'So it is checked against the bill of lading, line by line, before arrival. The '
          'container count must be identical. The marks must be identical. The gross weight on '
          'the packing list must equal the gross weight on the bill of lading — and the '
          'difference between gross and net is the weight of the packing itself, which should '
          'be reasonable. A gross weight thirty per cent above net means something is wrong, '
          'and it is better to find that out at a desk than at a gate.'),
    ('p', 'Then there are the seals. Every container is closed with a numbered seal, and the '
          'number is written on the list. When a container is opened by customs, the old seal '
          'is destroyed and a new one is fitted with a new number, which appears on the release '
          'order. The depot must be given both lists, or the gate will report forty-eight '
          'containers with four “wrong” seals, and an afternoon will be lost to a problem that '
          'does not exist.'),
    ('fig', F.dos_donts('Shipping documents: do’s and don’ts',
                        ['read the whole set before arrival',
                         'copy names letter by letter',
                         'check gross against net weight',
                         'send both seal lists to the depot'],
                        ['assume “same group” is enough',
                         'accept a scan when the original is required',
                         'unload damage before photographing it',
                         'leave the correction until the ship docks']),
     'Every item here costs money the day it is ignored.'),
    ('ex', 'A. Comprehension. Answer in your own words.'),
    ('items', [
        'Why is the packing list the document that decides whether a claim can be made?',
        'Which three things must match between the packing list and the bill of lading?',
        'What does the difference between gross and net weight represent?',
        'What happens to the seal when customs opens a container?',
        'Why must the depot be given both seal lists?',
    ]),
    ('ex', 'B. Listen and complete. Mr. Samir explains the check. Write the missing word.'),
    ('items', [
        'Mr. Samir: The container count must be ____________.',
        'Mr. Samir: Gross minus net is the weight of the ____________.',
        'Mr. Samir: When customs opens a container, a new ____________ is fitted.',
        'Mr. Samir: The new numbers appear on the ____________ order.',
    ]),
    ('ex', 'C. Practice. Take any delivery note or packing list from your work. Check three '
           'things on it against another document. Tell your partner what you checked and '
           'whether it agreed.'),
    ('ex', 'D. What is checked against what? Match (1–4) with (a–d).'),
    ('items', [
        'the consignee name  ____   a. the purchase order',
        'the invoice value  ____   b. the bill of lading',
        'the gross weight  ____   c. the release order',
        'the new seal numbers  ____   d. the packing list',
    ]),
]

# ============================================================ PART 8
B += [
    ('bar', 'Part 8  ·  Consolidation', 'LOGISTICS'),
    ('h3', 'One name, eleven days'),
    ('fig', F.split_panel('What the two sides saw',
                          'ABROAD · the paper trail',
                          ['Certificate made out to Bashak Co.',
                           'B/L made out to Al-Hasan Holding Group',
                           'Correction couriered on the 20th',
                           'Arrived the 24th — one day spare'],
                          'IN SYRIA · the ground',
                          ['Vessel discharged on the 26th',
                           'Four containers opened and inspected',
                           'Released on the 27th, no storage paid',
                           'One bent door, photographed first']),
     'A document problem and a physical problem, running together.'),
    ('p', 'On Thursday evening the last truck turns into the depot yard. Forty-eight containers '
          'in, forty-eight checked, one with a bent door and a photograph to go with it. '
          'Nothing was lost, and no storage was paid.'),
    ('p', 'At the review, Mr. Tarek asks what the near miss cost. Rami has the figures. The '
          'courier was ninety dollars. Mr. Samir’s afternoon was free, because he works for the '
          'Group. And if the certificate had been sent two days later, the consignment would '
          'have been held: five free days, then storage and demurrage on forty-eight '
          'containers, at a rate Rami does not want to say out loud.'),
    ('p', '“So ninety dollars bought us the whole shipment,” says Mr. Tarek.'),
    ('p', '“No,” says Mr. Samir. “Reading bought us the shipment. The courier was just '
          'delivery.” Everyone laughs, but he is not joking, and he says the thing he has been '
          'waiting to say all month. “The documents are not checked when the ship arrives. They '
          'are checked when they are issued. By then the ship is still being loaded, and a '
          'mistake costs an email.”'),
    ('p', 'Mr. Tarek writes it down. From now on, the full document set is read within '
          'forty-eight hours of issue, by Komosh, every time — not when the vessel is announced, '
          'and not when it docks. The rule fits on one line, and it was bought with ninety '
          'dollars and one bad afternoon.'),
    ('ex', 'A. Comprehension. Answer in your own words. (0 is done.)'),
    ('items0', [
        'How many containers arrived, and in what condition?   (forty-eight, one with a bent door)',
        'What did the courier cost?',
        'What would have happened if the certificate had been two days later?',
        'What does Mr. Samir say really saved the shipment?',
        'When should documents be checked, according to Mr. Samir?',
        'What is the new rule?',
    ]),
    ('ex', 'B. Complete each sentence with ONE word from the text. (0 is done for you.)'),
    ('items0', [
        'The last truck turns into the depot yard on Thursday evening.',
        'No ____________ was paid.',
        'The courier cost ninety ____________.',
        'Mr. Samir says ____________ bought them the shipment.',
        'Documents are checked when they are ____________.',
        'The full set is now read within ____________ hours of issue.',
    ]),
    ('ex', 'C. Discuss. Talk in pairs.'),
    ('items', [
        'Why is a rule that costs nothing often the hardest one to start?',
        'What in your work should be checked earlier than it is?',
    ]),
    ('ex', 'D. Find a word from the text that means: (0 is done for you.)'),
    ('items0', [
        'an accident that almost happened → (a near miss)',
        'to be officially given out → to be i____________',
        'the open space at a depot → the y____________',
        'said at a volume everyone can hear → out l____________',
    ]),
]

# ============================================================ PART 9
B += [
    ('bar', 'Part 9  ·  Case Studies and Decisions', 'LOGISTICS'),
    ('fig', F.dos_donts('Clearing a shipment: do’s and don’ts',
                        ['read the set within 48 hours of issue',
                         'correct while the goods are at sea',
                         'photograph damage before unloading',
                         'give the depot both seal lists'],
                        ['argue with a customs officer about logic',
                         'send a scan when an original is needed',
                         'unload a damaged container first',
                         'promise a delivery date before release']),
     'Clearance is won at a desk, days before the ship docks.'),
    ('h3', 'Case 1 — The weight that does not add up  (strand A · the paper)'),
    ('p', 'Three days before arrival you add up the packing list: 1,200,000 kg net. The bill of '
          'lading says 1,260,000 kg gross. The difference is five per cent, which is far more '
          'than the packing could weigh. The supplier is in a different time zone and has '
          'closed for the day.'),
    ('p', 'Choose the best action and say why.'),
    ('items', [
        '(  )  Say nothing. Customs rarely weighs containers.',
        '(  )  Email the supplier tonight with both figures and ask which is correct, and copy '
        'the freight company.',
        '(  )  Change the packing list yourself to match.',
        '(  )  Wait until the ship arrives and see what happens.',
    ]),
    ('p', 'Write one sentence to the supplier asking about the difference.'),
    ('lines', 2),
    ('h3', 'Case 2 — The gate reports four wrong seals  (strand B · the ground)'),
    ('p', 'Your depot gate telephones: four containers have seal numbers that are not on the '
          'packing list. The drivers are waiting, the yard is blocked, and the gate supervisor '
          'wants to refuse them.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'What is the most likely innocent explanation?',
        'Which document will prove it, and who has it?',
        'Write one short message to the gate that unblocks the yard.',
    ]),
    ('h3', 'Case 3 — A date you were asked to promise  (where the strands meet)'),
    ('p', 'A customer asks when the steel will be in the depot. The vessel has arrived but the '
          'consignment has not been released, and release usually takes one day — usually. '
          'Your sales colleague wants to tell the customer Thursday.'),
    ('p', 'Answer the questions.'),
    ('items', [
        'Why is it dangerous to promise a date before release?',
        'What can you tell the customer that is true, useful and still helpful?',
        'Write one sentence giving the customer a date you can keep.',
    ]),
]

# ============================================================ PART 10
B += [
    ('bar', 'Part 10  ·  Review and Can-Do', 'LOGISTICS'),
    ('ex', 'A. Vocabulary. Complete the sentence.'),
    ('items', [
        'The company the goods are sent to is the ____________.',
        'The paper that proves the goods were put on board is the ____________ ____________ '
        '____________.',
        'To take goods off a ship is to ____________ them.',
        'Money charged when containers stay too long at the port is ____________.',
        'The paper saying where the goods were made is the ____________ ____________ '
        '____________.',
    ]),
    ('ex', 'B. Grammar. Complete with the present or past passive.'),
    ('items', [
        'The containers ____________ (inspect) at the port every time.',
        'The vessel ____________ (load) on the 10th.',
        'Four containers ____________ (open) yesterday.',
        'The goods ____________ (not / release) until the duty is paid.',
        'The documents ____________ (send) by courier last week.',
        'The duty ____________ (calculate) from the invoice value.',
    ]),
    ('ex', 'C. Reading. Read the short text and answer.'),
    ('p', 'The vessel was loaded on the 10th and sailed on the 14th. The certificate of origin '
          'was made out to Bashak Co., but the bill of lading named Al-Hasan Holding Group, so '
          'a corrected certificate was couriered and arrived on the 24th. The containers were '
          'discharged on the 26th, four were inspected, and the consignment was released on the '
          '27th. No storage was paid.'),
    ('items', [
        'Why was a corrected certificate needed?',
        'When were the containers discharged?',
        'How many containers were inspected?',
    ]),
    ('ex', 'D. Listening. Listen and answer. (Teacher reads.)'),
    ('p', '[Teacher reads] “The consignment was released yesterday afternoon. Eighteen '
          'containers were received at the depot this morning, and the remaining thirty are '
          'being hauled today and tomorrow. One container has a bent door; it was photographed '
          'before it was unloaded.”'),
    ('items', [
        'When was the consignment released?',
        'How many containers are still on the road?',
        'What was done before the damaged container was unloaded?',
    ]),
    ('ex', 'E. Speaking. Work in pairs. One describes how goods are cleared in five steps, '
           'using the passive; the other asks one question about each step.'),
    ('ex', 'F. Writing. Write two sentences about a process at your work: one in the present '
           'passive and one in the past passive.'),
    ('nlines', 2),
    ('ex', 'G. Error correction. Find and correct one mistake in each sentence.'),
    ('items', [
        'The papers was send by courier. → ____________',
        'The ship was arrived on the 25th. → ____________',
        'Four containers was opened. → ____________',
        'The duty is calculate from the invoice. → ____________',
        'The goods are cleared from Komosh. → ____________',
    ]),
    ('ex', 'H. Match the document (1–5) to what it proves (a–e).'),
    ('items', [
        'bill of lading  ____   a. what each container holds',
        'packing list  ____   b. where the goods were made',
        'commercial invoice  ____   c. the goods were put on board',
        'certificate of origin  ____   d. customs says the goods may go',
        'release order  ____   e. what the goods are worth',
    ]),
    ('ex', 'I. Put the clearance steps in order (1–5).'),
    ('items', [
        '(  )  the goods are inspected',
        '(  )  the declaration is submitted',
        '(  )  the release order is issued',
        '(  )  the documents are checked',
        '(  )  the duty is calculated',
    ]),
    ('ex', 'Can-Do check. Tick what you can do.'),
    ('check', [
        'I can describe how goods are shipped and cleared.',
        'I can use the passive to describe a process.',
        'I can read shipping and customs documents.',
        'I can write a clearance update.',
    ]),
]

# ============================================================ PART 11
B += [
    ('bar', 'Part 11  ·  Foundations for Further Study', 'LOGISTICS'),
    ('h3', 'Concept Spotlight: The passive is the voice of a system'),
    ('fig', F.icon_row('Where the person disappears, on purpose', 'FOUR THINGS THAT JUST HAPPEN', [
        ('ship', 'is discharged'), ('stamp', 'is cleared'), ('doc', 'is submitted'),
        ('tick', 'is released'), ('truck', 'is hauled'),
    ]), 'Nobody is named, and nobody needs to be.'),
    ('p', 'Learners often meet the passive and decide it is a worse way of saying things — '
          'longer, colder, and somehow evasive. In ordinary conversation that is often true. In '
          'the work you have just read, it is exactly backwards. The passive is not hiding '
          'anybody. It is describing a system in which the person genuinely does not matter.'),
    ('p', 'Think about who inspects a container. It is a customs officer; you will never learn '
          'his name, and it makes no difference to anything. What matters is that four '
          'containers were opened, that this is normal, and that a new seal was fitted. '
          '“Four containers were inspected” is not a vaguer sentence than “a customs officer '
          'inspected four containers”. It is a more accurate one, because it puts the weight of '
          'the sentence where the meaning actually is.'),
    ('p', 'This is why almost every procedure in the world is written in the passive, and why '
          'learning it changes what you can read. A shipping update, a laboratory method, a '
          'safety instruction, a bank’s terms: all of them describe things that are done, '
          'repeatedly, by whoever is on duty. The grammar matches the reality.'),
    ('p', 'But there is a real objection, and you should hold on to it. The passive can hide '
          'people, and sometimes that is the point. “Mistakes were made” is the famous example: '
          'something went wrong and nobody did it. So the test is simple and you can apply it '
          'in any language. Ask whether naming the doer would add information. If it would — '
          'the goods are cleared by Komosh, the certificate was issued by the chamber — then '
          'name them. If it would not, leave them out. And if you find yourself leaving them '
          'out precisely because naming them would be uncomfortable, you have stopped '
          'describing a system and started hiding inside one.'),
    ('p', 'That is the whole craft of this unit. Use the passive for the procedure, the active '
          'for the people, and never use the grammar to avoid a sentence you ought to write.'),
    ('ex', 'A. Understanding check. Answer in your own words.'),
    ('items', [
        'What do learners often wrongly think about the passive?',
        'Why is “four containers were inspected” more accurate than naming the officer?',
        'Why are most procedures written in the passive?',
        'What is the test for whether to name the doer?',
    ]),
    ('ex', 'B. Apply it. Do this task with a partner.'),
    ('p', 'Describe one process at your work in five passive sentences, with no names. Then go '
          'back and find the one step where naming the person really would add information. '
          'Rewrite that one, and explain to your partner why it is different.'),
    ('ex', 'C. Micro-writing (optional).'),
    ('p', 'Write a few sentences (50–70 words) describing how something is checked, made or '
          'delivered at your work. Use the present passive three times, and “by + somebody” '
          'only once.'),
]

TERMS = [
    ('shipment', 'goods sent together at one time'),
    ('consignment', 'the goods sent in one shipment'),
    ('vessel', 'the ship that carries the goods'),
    ('voyage', 'a ship’s journey from port to port'),
    ('bill of lading', 'the paper proving goods were put on board'),
    ('shipper', 'the company sending the goods'),
    ('consignee', 'the company the goods are sent to'),
    ('notify party', 'the company told when the ship arrives'),
    ('port of loading', 'where the goods go on the ship'),
    ('port of discharge', 'where the goods come off the ship'),
    ('ETA', 'the expected day of arrival'),
    ('ETD', 'the expected day of departure'),
    ('packing list', 'a paper saying what is in each container'),
    ('commercial invoice', 'the paper saying what the goods are worth'),
    ('certificate of origin', 'a paper saying where goods were made'),
    ('customs declaration', 'the form submitted to customs'),
    ('clearance', 'getting goods through the customs office'),
    ('clearing agent', 'the company that handles clearance for you'),
    ('inspection', 'customs opening and checking the goods'),
    ('release order', 'customs saying the goods may go'),
    ('demurrage', 'money charged for keeping a container too long'),
    ('storage charge', 'money charged for goods left at the port'),
    ('container', 'a big steel box for carrying goods'),
    ('seal', 'the numbered lock on a container'),
    ('gross weight', 'the weight with the packing'),
    ('net weight', 'the weight of the goods alone'),
    ('discharge (v)', 'to unload from a ship'),
    ('haulage', 'road transport inland'),
    ('in transit', 'on the way, not yet arrived'),
    ('on board', 'loaded onto the ship'),
    ('hold (v)', 'to stop goods from moving'),
    ('release (v)', 'to allow goods to go'),
    ('submit', 'to send a form officially'),
    ('issue (v)', 'to give out officially'),
    ('mismatch', 'two papers saying different things'),
    ('near miss', 'an accident that almost happened'),
]

KEY = [
    ('Warm-Up A', '1 Bill of lading — the goods were put on board; packing list — what is in '
                  'each container; commercial invoice — what the goods are worth; certificate '
                  'of origin — where they were made. 2 The certificate of origin is made out to '
                  'Bashak Co., but the bill of lading names Al-Hasan Holding Group. 3 Because '
                  'to a customs officer they are two different companies. 4 It is held, and '
                  'after five days storage is charged. 5 By one day (it arrived on the 24th; '
                  'the ship arrived on the 25th).'),
    ('Warm-Up B', '1 F · 2 T · 3 F · 4 T · 5 T'),
    ('Warm-Up C', '1 voyage · 2 consignment · 3 storage'),
    ('Warm-Up D', 'Answers vary.'),
    ('P1 A', '0 f · 1 b · 2 d · 3 a · 4 c · 5 g · 6 e · 7 h'),
    ('P1 B', '1 bill of lading · 2 consignee · 3 ETA · 4 packing list · '
             '5 certificate of origin · 6 demurrage'),
    ('P1 C', '1 c · 2 a · 3 d · 4 b'),
    ('P1 D', '1 margin · 2 demurrage · 3 invoice · 4 deliver · 5 duty'),
    ('P1 E', '1 b · 2 a · 3 b · 4 b'),
    ('P1 F', 'At sea: vessel, container · At customs: declaration, inspection, release order · '
             'On the road: haulage'),
    ('P1 G', '1 c · 2 e · 3 a · 4 b · 5 d · 6 f'),
    ('P1 H', '1 discharged · 2 submitted · 3 inspected · 4 consignee · 5 cleared · 6 released'),
    ('P2 A', '1 are · 2 is · 3 are · 4 are'),
    ('P2 B', '1 was · 2 were · 3 was · 4 were'),
    ('P2 C', '1 sent · 2 loaded · 3 held · 4 taken · 5 paid · 6 given'),
    ('P2 D', '1 The goods were cleared by Komosh. 2 The declaration is submitted online. '
             '3 Four containers were opened. 4 The certificate was issued by the chamber.'),
    ('P2 E', '1 Komosh clears the goods. 2 The mill loaded the steel on the 10th. '
             '3 Westgate issued a new certificate. 4 Mr. Samir books the trucks.'),
    ('P2 F', '1 When was the vessel loaded? 2 How many containers were inspected? '
             '3 Have the goods been released yet? / Were the goods released? '
             '4 Who was the certificate issued by?'),
    ('P2 G', '1 The ship arrived on the 25th. 2 Four containers were opened. '
             '3 The duty is calculated from the invoice. 4 The goods are cleared by Komosh.'),
    ('P2 H', 'Answers vary — one present passive, one past passive.'),
    ('P2 I', '1 were discharged · 2 is checked · 3 was held · 4 are always cleared · '
             '5 are recorded'),
    ('P2 J', '1 The steel is loaded at the mill. 2 The containers are discharged at Lattakia. '
             '3 Four containers are inspected. 4 The steel is hauled to Damascus.'),
    ('P3 D1 A', '1 It is made out to Bashak Co. instead of Al-Hasan Holding Group. '
                '2 Because to a customs officer they are two separate companies. 3 Storage at '
                'the port and demurrage from the line. 4 Because a scan is not accepted. '
                '5 Tomorrow — it is not enough if it is sent on Thursday.'),
    ('P3 D1 B', '1 F · 2 T · 3 F · 4 T · 5 F'),
    ('P3 D1 C', '1 we are charged storage / the containers are charged demurrage · 2 A scan is '
                'not accepted · 3 If the names do not match, the consignment is held'),
    ('P3 D2 A', '1 Eighteen. 2 Because they were opened by customs, so new seals were fitted. '
                '3 On the release order. 4 Because if they unload first, nobody can prove '
                'anything.'),
    ('P3 D2 B', '1 C · 2 B · 3 B · 4 B'),
    ('P4 B', 'Answers vary — one passive sentence from your own role.'),
    ('P5 A', '1 He has thousands of containers and only a few hours. 2 From the invoice value, '
             'so a wrong invoice means the country is paid the wrong amount. 3 Because '
             'different countries pay different rates of duty. 4 Because two documents name two '
             'different owners for the same steel, and he cannot release goods to a company '
             'that is not on the bill of lading. 5 (any two) demurrage charged by the line; the '
             'depot planning for steel that does not come; a customer being given a new date.'),
    ('P5 B', '1 B · 2 C · 3 B · 4 B · 5 B'),
    ('P5 C', '1 disagree · 2 release · 3 demurrage · 4 mismatch'),
    ('P5 D', '1 paper · 2 disagree · 3 value · 4 origin · 5 released · 6 sea'),
    ('P5 F', '1 F · 2 T · 3 T · 4 NOT GIVEN'),
    ('P6 A', '1 They were opened and inspected. 2 Eighteen are in the depot; thirty are still '
             'being hauled. 3 It has a bent door, which happened at sea; it was photographed '
             'before it was unloaded and a claim is being prepared.'),
    ('P6 B', 'Order: 2 (Dear Mr. Tarek,) · 3 (The vessel was discharged…) · 1 (The consignment '
             'was released…) · 5 (One container has a bent door…) · 4 (I will send the final '
             'confirmation…) · 6 (Best regards, Rami)'),
    ('P7 A', '1 Because it is the only paper that says how many coils should have been inside, '
             'and what the weight should have been. 2 The container count, the marks, and the '
             'gross weight. 3 The weight of the packing itself. 4 The old seal is destroyed and '
             'a new one with a new number is fitted. 5 Otherwise the gate reports four “wrong” '
             'seals and an afternoon is lost to a problem that does not exist.'),
    ('P7 B', '1 identical · 2 packing · 3 seal · 4 release'),
    ('P7 D', '1 b · 2 a · 3 d · 4 c'),
    ('P8 A', '1 Ninety dollars. 2 The consignment would have been held, and after five free '
             'days storage and demurrage would have been charged on forty-eight containers. '
             '3 Reading — the courier was just delivery. 4 When they are issued, not when the '
             'ship arrives. 5 The full document set is read within forty-eight hours of issue, '
             'by Komosh, every time.'),
    ('P8 B', '1 storage · 2 dollars · 3 reading · 4 issued · 5 forty-eight'),
    ('P8 D', '1 issued · 2 yard · 3 loud'),
    ('P10 A', '1 consignee · 2 bill of lading · 3 discharge · 4 demurrage · '
              '5 certificate of origin'),
    ('P10 B', '1 are inspected · 2 was loaded · 3 were opened · 4 are not released · '
              '5 were sent · 6 is calculated'),
    ('P10 C', '1 Because the certificate named Bashak Co. but the bill of lading named Al-Hasan '
              'Holding Group. 2 On the 26th. 3 Four.'),
    ('P10 D', '1 Yesterday afternoon. 2 Thirty. 3 It was photographed.'),
    ('P10 G', '1 The papers were sent by courier. 2 The ship arrived on the 25th. '
              '3 Four containers were opened. 4 The duty is calculated from the invoice. '
              '5 The goods are cleared by Komosh.'),
    ('P10 H', '1 c · 2 a · 3 e · 4 b · 5 d'),
    ('P10 I', '2 the declaration is submitted · 4 the documents are checked · '
              '5 the duty is calculated · 1 the goods are inspected · '
              '3 the release order is issued'),
    ('P11 A', '1 That it is longer, colder and evasive. 2 Because the officer’s name makes no '
              'difference; what matters is that four were opened, that it is normal, and that '
              'new seals were fitted. 3 Because they describe things done repeatedly by '
              'whoever is on duty. 4 Ask whether naming the doer would add information — if it '
              'would, name them.'),
]

UNIT = dict(
    n=5,
    title='Shipping In and Clearing Customs',
    grammar='the passive — present simple and past simple · by + agent',
    function='Logistics',
    candos=[
        'I can describe how goods are shipped and cleared',
        'I can use the passive to describe a process',
        'I can read shipping and customs documents',
        'I can write a clearance update',
    ],
    cando_line='You can describe how goods are shipped, cleared and delivered.',
    blocks=B,
    terms=TERMS,
    key=KEY,
    teaser=F.scene_banner(
        'Unit 6 — what actually came off the truck',
        [('h', GREEN), ('m', ORANGE)],
        ['“Twelve coils a container.', 'This one has eleven.”'],
        'AT THE DEPOT GATE',
        ['Count it against the order', 'Check the grade, not just the weight',
         'Record what is short or damaged', 'Then put it on the shelf'],
        quote='“The steel which we ordered is 5 mm.”'),
)
