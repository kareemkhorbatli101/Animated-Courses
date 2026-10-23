// Proactive Business English A2 · Syria Edition · Book 1 · Unit 1 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 1  Meeting People at Work'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  'Stage codes match the Student\'s Book: 1 Get ready · 2 Listen and read · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · HW Homework.',
], C.grey, C.navy));

// ===================== 1.1 =====================
out.push(h2('1.1  Good morning — I\'m the new assistant'));
out.push(stage('1', 'Get ready'));
out.push(p('**a  Sample board**'));
out.push(table(['We SAY…', 'We WRITE…'], [
  ['Good morning. / Hello.', 'Dear colleagues,'],
  ['I\'m… / My name is…', 'My name is…'],
  ['Pleased to meet you.', 'Pleased to meet you all.'],
  ['I\'m the new assistant.', 'I\'m the new administrative assistant.'],
  ['Welcome to the company.', 'Welcome to Sham Trading.'],
], [1, 1]));
out.push(p('**b**  money and invoices → **accounts** · customers and orders → **sales** · the first desk at the door → **reception** · boxes and deliveries → **warehouse**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (at the office door)   **b**  1 She\'s the new administrative assistant.  2 The second floor.'));
out.push(p('**Language box – Practise:**  1 \'m  2 \'s  3 \'re  4 isn\'t  5 Are'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Good morning. I\'m Hala Mourad. I\'m the new customer service officer.'],
  ['B', 'Good morning, Hala. Welcome to Sham Trading. I\'m Nour Mansour, the assistant.'],
  ['A', 'Pleased to meet you, Nour.'],
  ['B', 'Pleased to meet you too. Are you from Damascus?'],
  ['A', 'No, I\'m not. I\'m from Latakia.'],
  ['B', 'This is your desk, next to the window.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners should tick all six phrases for a complete performance. Typical errors for the board clinic: _I new assistant_ → _I\'m the new assistant_; _I\'m assistant_ → _I\'m **an** assistant_; _Welcome in our company_ → _Welcome **to** our company_.'));
out.push(stage('4', 'Your turn – sample conversation and notes'));
out.push(dlg(null, [
  ['A', 'Good morning. I\'m Rasha Hamdan.'],
  ['B', 'Good morning, Rasha. I\'m Fadi Saeed. Pleased to meet you.'],
  ['A', 'Pleased to meet you too. What do you do?'],
  ['B', 'I\'m a driver. I\'m in the transport department. And you?'],
  ['A', 'I\'m an accountant. I\'m in accounts, on the first floor.'],
]));
out.push(table(['Name', 'Job', 'Company / department'], [
  ['Fadi Saeed', 'driver', 'transport'], ['Rasha Hamdan', 'accountant', 'accounts, first floor'], ['Samir Khalil', 'supervisor', 'Hamdan Printing'],
], [1, 1, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"This is Fadi Saeed. He\'s a driver. He\'s in the transport department."', 'Listener question: "Are you in this building?" – "No, I\'m not. I\'m at the warehouse."']));
out.push(stage('5', 'Read'));
out.push(p('1 She\'s the new administrative assistant.  2 On the second floor, next to Nadia.  3 Extension 212.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Hello from the new driver', 'Dear colleagues, My name is Fadi Saeed. I\'m the new driver. I\'m from Jaramana. My desk is at the transport office, next to the gate. I look after the deliveries in Damascus. My extension is 231. Pleased to meet you all.  Fadi']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters and full stops', '✗ – _jaramana_ → _Jaramana_'],
  ['A verb (_be_) in every sentence', '✓'],
  ['he / she + verb', '– (not needed)'],
  ['All the parts', '✗ – no extension number'],
], [3, 2]));
out.push(p('Sample feedback: "Your message is clear. Check the capital letter in _jaramana_. Can you add your extension?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I new driver._  →  After: _I\'m the new driver._ (verb _be_ added; _the_ added)'));
out.push(stage('7', 'Write freely – sample (≈55 words)'));
out.push(sample(null, ['**Subject:** Hello from the new storekeeper', 'Dear colleagues, My name is Rasha Hamdan. I\'m the new storekeeper. I\'m from Jaramana and I\'m 29 years old. My desk is in the store room, behind the warehouse. I look after the shelves and the stock book. My extension is 234. I work from seven to three. Pleased to meet you all.  Rasha']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I like the working hours — very clear._   ✓ _Can you add which day you count the stock?_   ? _Is the store room open at seven?_'));
out.push(stage('7R', 'Share – sample sticky note'));
out.push(p('_Welcome, Rasha! My desk is on the second floor. Come up for tea on your first day._'));
out.push(stage('HW', 'Homework – sample reply (≈30 words)'));
out.push(sample(null, ['Hello Rasha, welcome to the company. I\'m Nour, the assistant on the second floor. I bring the orders down to the store every afternoon. My extension is 212 if you need anything.']));

// ===================== 1.2 =====================
out.push(pb());
out.push(h2('1.2  This is my colleague, Nadia'));
out.push(stage('1', 'Get ready'));
out.push(p('**a  Sample board:** colleague · manager · supervisor · assistant · accountant · driver · customer · supplier'));
out.push(p('**b**  **In our company:** colleague, manager, supervisor, assistant, driver, accountant   ·   **Outside our company:** customer, supplier'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (three)   **b**  1 She\'s the accountant.  2 He\'s in Homs with a customer.'));
out.push(p('**Language box – Practise:**  1 Her  2 him  3 our  4 him  5 them'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Nour, this is Abu Yasser. Abu Yasser, this is Nour, our new assistant.'],
  ['B', 'Hello, Nour. Pleased to meet you.'],
  ['C', 'Pleased to meet you too. What do you do here?'],
  ['B', 'I\'m the warehouse supervisor. I look after the stock and the deliveries.'],
  ['C', 'And who is at that desk?'],
  ['B', 'That\'s Bassel\'s desk. He\'s in sales.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Typical errors for the board clinic: _This is her desk_ said about Bassel → _his desk_; _Ask he_ → _Ask **him**_; _Nadia desk_ → _Nadia**\'s** desk_.'));
out.push(stage('4', 'Your turn – sample conversation and notes'));
out.push(dlg(null, [
  ['A', 'Rasha, this is Fadi. Fadi, this is Rasha, our accountant.'],
  ['B', 'Pleased to meet you, Fadi.'],
  ['C', 'Pleased to meet you too. What do you look after?'],
  ['B', 'I look after the invoices and the salaries. And you?'],
  ['C', 'I\'m the driver. I look after the two vans.'],
]));
out.push(table(['Name', 'Job', 'Looks after'], [
  ['Nadia Sayegh', 'accountant', 'invoices and payments'],
  ['Abu Yasser', 'warehouse supervisor', 'stock and deliveries'],
  ['Hala Mourad', 'customer service', 'complaints and repairs'],
], [1, 1, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"This is Nadia Sayegh. She\'s our accountant. She looks after the invoices and the payments."', 'Listener question: "Is her desk on this floor?" – "Yes, it is. It\'s next to mine."']));
out.push(stage('5', 'Read'));
out.push(p('1 Nadia Sayegh.  2 Extension 205.  3 Abu Yasser (he is in the warehouse).'));
out.push(stage('6', 'Write with help – sample'));
out.push(table(['Name', 'Job / department', 'Ext.', 'Looks after'], [
  ['Mr Samir Khalil', 'Manager', '101', 'the whole office'],
  ['Rasha Hamdan', 'Accounts', '108', 'invoices and salaries'],
  ['Fadi Saeed', 'Transport', '231', 'the two vans'],
  ['Lara Ibrahim', 'Reception', '100', 'visitors and the post'],
], [1.4, 1.4, 0.6, 2]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters for names, departments and the company', '✓'],
  ['The same order in every line', '✓'],
  ['A job **and** a duty for each person', '✗ – line 4 has no duty'],
  ['All four lines complete', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _Lara Ibrahim — Reception — 100_  →  After: _Lara Ibrahim — Reception — 100 — visitors and the post_ (duty added)'));
out.push(stage('7', 'Write freely – sample (≈50 words)'));
out.push(sample(null, ['Welcome to our office. This is Rasha. She\'s our accountant and her desk is by the window. She looks after the invoices, so give her your receipts on Thursday. That\'s Fadi\'s desk, near the door. He\'s our driver and his telephone is always busy — send him a message instead.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I like "send him a message instead" — that is useful._   ✓ _Can you add who to ask about the post?_   ? _Is Rasha here on Thursdays?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Invoice → Rasha (accounts). Delivery → Fadi (transport). The class should justify each choice from the **duty**, not the job title.'));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['Thank you. So I should give my receipts to Rasha on Thursday, and send Fadi a message about the delivery. Who looks after the post?']));

// ===================== 1.3 =====================
out.push(pb());
out.push(h2('1.3  How do you spell the company name?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a  Sample board:** name · surname · company · address · telephone · email · how they pay'));
out.push(p('**b**  The hard parts on the telephone are the **letters** (B/P, M/N, S/X, G/J) and the **teens and tens** (13/30, 14/40, 15/50). Email addresses are hard because of the dot and the @.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a new customer)   **b**  1 Al-Noor Stationery.  2 0944 318 260.'));
out.push(p('**Language box – Practise:**  1 What\'s your name?  2 Where\'s your office? / Where is it?  3 What\'s your telephone number?  4 How do you spell that?  5 Who\'s your manager?'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Sham Trading, good morning. Nour speaking.'],
  ['B', 'Good morning. My name is Dima Shamsi. I have a packaging company in Aleppo.'],
  ['A', 'How do you spell your surname, please?'],
  ['B', 'S-H-A-M-S-I.'],
  ['A', 'Thank you. And what\'s your mobile number?'],
  ['B', 'It\'s 0955 612 043.'],
  ['A', 'Let me repeat that: zero nine five five, six one two, zero four three. Is that right?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the name and number and check against the pair\'s book. Typical errors: reading a number as one long string; not checking back. Insist on _Let me repeat that_ before the call ends — it is the habit the whole unit is for.'));
out.push(stage('4', 'Your turn – sample conversation and list'));
out.push(dlg(null, [
  ['A', 'What\'s your surname, please?'],
  ['B', 'Hamdan.'],
  ['A', 'How do you spell that?'],
  ['B', 'H-A-M-D-A-N.'],
  ['A', 'Thank you. And the company?'],
  ['B', 'Hamdan Printing. My number is 0988 450 176.'],
  ['A', 'Let me repeat that — zero nine eight eight, four five zero, one seven six.'],
]));
out.push(table(['Surname (spelled)', 'Company', 'Telephone', 'Email'], [
  ['H-A-M-D-A-N', 'Hamdan Printing', '0988 450 176', 'r.hamdan@mail.sy'],
  ['B-A-R-A-K-A-T', 'Barakat Stores', '0933 427 815', 'hadi.b@mail.sy'],
  ['K-H-A-L-I-L', 'Khalil & Sons', '0944 702 118', 'office@khalil.sy'],
], [1.3, 1.3, 1.2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The surname is Hamdan, that\'s H-A-M-D-A-N. The company is Hamdan Printing. The number is zero nine eight eight, four five zero, one seven six."']));
out.push(stage('5', 'Read'));
out.push(p('1 Al-Noor Stationery.  2 Cash.  3 N. Mansour (Nour Mansour).'));
out.push(stage('6', 'Write with help – sample'));
out.push(table(['Company name', 'Hamdan Printing'], [
  ['Contact', 'Ms Rasha Hamdan'], ['Address', 'Jaramana, Damascus'], ['Mobile', '0988 450 176'],
  ['Email', 'r.hamdan@mail.sy'], ['Payment', 'card'], ['Form completed by', 'F. Saeed'],
], [1, 2.4]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capitals for names; small letters for the email', '✗ – _R.Hamdan@Mail.sy_ → _r.hamdan@mail.sy_'],
  ['The telephone number in groups', '✓'],
  ['No empty lines', '✓'],
  ['The form is signed', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _R.Hamdan@Mail.sy_  →  After: _r.hamdan@mail.sy_ (email addresses are always small letters)'));
out.push(stage('7', 'Write freely – sample (≈50 words)'));
out.push(sample(null, ['I took the details of a new customer this morning. The company is Hamdan Printing, in Jaramana. The contact is Ms Rasha Hamdan and her mobile is 0988 450 176. Her email is r.hamdan@mail.sy. She pays by card. She would like our price list for paper this week.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I like that you wrote the email in small letters._   ✓ _Can you add when she needs the price list?_   ? _How does she pay — card or transfer?_'));
out.push(stage('7R', 'Share'));
out.push(p('The listening class writes 0988 450 176. If more than two students write it wrongly, the reader was going too fast — read it again in three groups.'));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['Thank you, Nour. Please add Hamdan Printing to the customer list and send them the paper price list today. Tell them delivery to Jaramana is on Tuesdays.']));

// ===================== 1.4 =====================
out.push(pb());
out.push(h2('1.4  We\'ve got a warehouse behind the building'));
out.push(stage('1', 'Get ready'));
out.push(p('**a  Sample board:** How many staff have you got? · Where is your head office? · Have you got a branch? · What do you sell? · How long have you been open?'));
out.push(p('**b**  where customers come to buy → **trade counter** · where the goods are kept → **warehouse** · the main office of a company → **head office** · an office in another city → **branch**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (her cousin — a family conversation)   **b**  1 Nineteen.  2 Yes — a small branch in Homs.'));
out.push(p('**Language box – Practise:**  1 \'ve got  2 \'s got  3 haven\'t got  4 \'s got  5 Have … got'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Who do you work for?'],
  ['B', 'I work for Al-Noor Stationery.'],
  ['A', 'What have you got there?'],
  ['B', 'We\'ve got a shop in Souq al-Hamidiyeh and a small store room behind it.'],
  ['A', 'How many staff have you got?'],
  ['B', 'Four. It\'s a small company.'],
  ['A', 'Have you got a branch in another city?'],
  ['B', 'No, we haven\'t. We\'ve only got the one shop.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Typical errors: _Yes, we have got_ → _Yes, we **have**_; _How many staffs_ → _How many **staff**_ (staff is plural already); _We have a branch not_ → _We **haven\'t got** a branch_.'));
out.push(stage('4', 'Your turn – sample conversation and notes'));
out.push(dlg(null, [
  ['A', 'Who do you work for?'],
  ['B', 'I work for Hamdan Printing, in Jaramana.'],
  ['A', 'How many staff have you got?'],
  ['B', 'Twelve. It\'s a small company.'],
  ['A', 'Have you got a branch?'],
  ['B', 'No, we haven\'t. But we\'ve got two machines and a shop front.'],
]));
out.push(table(['Company', 'Staff', 'Has got…', 'Branch?'], [
  ['Hamdan Printing', '12', 'two machines, a shop front', 'no'],
  ['Khalil & Sons', '40', 'a factory and a store', 'yes – Homs'],
  ['Barakat Stores', '6', 'one shop', 'no'],
], [1.4, 0.7, 2, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Rasha works for Hamdan Printing. They\'ve got twelve staff. They\'ve got two machines and a shop front, but they haven\'t got a branch."', 'Listener question: "Have they got a van?" – "No, they haven\'t. They use a driver from outside."']));
out.push(stage('5', 'Read'));
out.push(p('1 Paper, packaging and office supplies.  2 In Homs.  3 By telephone or at the trade counter.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Hamdan Printing is a small printing company in Jaramana, Damascus. We print forms and packaging and we sell them to offices and shops. We have got twelve staff. We have got two machines and a shop front, but we have not got a branch. The company started in 2011. Our customers are offices, schools and small shops.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters for the company name and the city', '✓'],
  ['_have got_ / _have not got_ in full forms', '✗ – _We\'ve got_ → _We have got_ (this is writing)'],
  ['At least two numbers', '✓ – twelve, 2011'],
  ['All five parts', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _We\'ve got twelve staff._  →  After: _We have got twelve staff._ (full form in writing)'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Khalil & Sons is a packaging company in Aleppo. We make boxes and we sell them to companies all over Syria. We have got forty staff. We have got a factory, a store and a small office, and we have got a branch in Homs. The company started in 1996. Our customers are traders, pharmacies and food companies. We are proud that we have never been late with an order in thirty years.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I like the last sentence — thirty years with no late order._   ✓ _Can you add the smallest order you take?_   ? _Have you got a price list in English?_'));
out.push(stage('7R', 'Share'));
out.push(p('Expect students to choose the company with a **number** they can check and a **branch** near them. That is the point: a profile with figures is believable.'));
out.push(stage('HW', 'Homework – sample enquiry (≈25 words)'));
out.push(sample(null, ['We are a school in Homs. Have you got a branch near us? We need four hundred exercise books in September. Have you got a price list?']));

// ===================== 1.5 =====================
out.push(pb());
out.push(h2('1.5  I look after the orders'));
out.push(stage('1', 'Get ready'));
out.push(p('**a  Sample board:** answer · check · count · write · file · send · visit · pay · order · help · take · open'));
out.push(p('**b**  visiting customers → **salesperson** · checking the stock → **supervisor** · paying the invoices → **accountant** · answering the telephone → **assistant**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (in the warehouse)   **b**  1 He counts what came in yesterday.  2 He doesn\'t like writing reports.'));
out.push(p('**Language box – Practise:**  1 answering  2 writing  3 checking  4 working  5 taking … helping'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'What do you do here?'],
  ['B', 'I look after the invoices and the payments.'],
  ['A', 'What do you do first every morning?'],
  ['B', 'First thing, I open the post and look for cheques.'],
  ['A', 'Do you like working here?'],
  ['B', 'Yes. I like working with numbers. But I don\'t like telephoning people who pay late.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Typical errors: _I like check_ → _I like **checking**_; _My job is answer_ → _My job is **answering**_; _I don\'t like to write reports_ is possible but at A2 we practise **-ing** after _like / don\'t like_.'));
out.push(stage('4', 'Your turn – sample conversation and notes'));
out.push(dlg(null, [
  ['A', 'What do you do here?'],
  ['B', 'I look after the two vans.'],
  ['A', 'What do you do first every morning?'],
  ['B', 'First thing, I check the oil and the tyres.'],
  ['A', 'Do you like working here?'],
  ['B', 'Yes, I like driving in the morning. But I don\'t like waiting at the gate.'],
]));
out.push(table(['Name', 'Looks after', 'Likes', 'Doesn\'t like'], [
  ['Rasha', 'the invoices', 'working with numbers', 'telephoning late payers'],
  ['Fadi', 'the two vans', 'driving in the morning', 'waiting at the gate'],
  ['Lara', 'visitors and the post', 'meeting people', 'filing'],
], [1, 1.6, 1.3, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Fadi looks after the two vans. He likes driving in the morning, but he doesn\'t like waiting at the gate."', 'Listener question: "Why don\'t you like waiting at the gate?" – "Because the papers take a long time."']));
out.push(stage('5', 'Read'));
out.push(p('1 She opens the post, checks the email and answers the telephone.  2 Abu Yasser.  3 She files the invoices and helps Nadia with the weekly figures.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Every morning: opening the store, checking the night delivery, counting the shelves.   Every day: taking orders from the office, picking the boxes, writing the stock book.   Every week: checking the slow items, cleaning the shelves.   When my manager is out: taking the deliveries and signing the notes.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every duty in the **-ing** form', '✗ – _check the shelves_ → _checking the shelves_'],
  ['A colon after the time, commas between the duties', '✓'],
  ['Every line in the same shape', '✓'],
  ['All four lines complete', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _Every week: check the slow items._  →  After: _Every week: checking the slow items._ (the list keeps one shape)'));
out.push(stage('7', 'Write freely – sample (≈55 words)'));
out.push(sample(null, ['I\'m a storekeeper at a printing company. I look after the paper store and the stock book. First thing every morning, I count what came in the night before and write it in the book. I like working in the store because it is quiet and I work alone. I don\'t like filing the delivery notes — there are too many of them.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I like "it is quiet and I work alone" — I feel the same._   ✓ _Can you add how many deliveries come a week?_   ? _Who helps you when it is busy?_'));
out.push(stage('7R', 'Share'));
out.push(p('The class should guess **storekeeper** from _the paper store_, _the stock book_ and _count what came in_. If they cannot, the paragraph needs one more concrete duty.'));
out.push(stage('HW', 'Homework – sample reply (≈30 words)'));
out.push(sample(null, ['I don\'t like filing either. I do mine on Thursday afternoon when the office is quiet, and I put the week\'s notes in one envelope. It takes twenty minutes instead of an hour.']));

// ===================== 1.6 =====================
out.push(pb());
out.push(h2('1.6  Sorry — could you repeat that?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a  Sample board:** on the telephone · the line is bad · the person speaks fast · a noisy warehouse · a name you don\'t know · numbers'));
out.push(p('**b**  1 _Repeat that._  2 _Can you repeat that?_  3 _Could you repeat that, please?_'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (the line is bad)   **b**  1 Order 4087.  2 Forty boxes.'));
out.push(p('**Language box – Practise:**  1 Could you repeat that, please?  2 Could you spell your surname, please?  3 Could you speak more slowly, please?  4 Could you send the invoice today, please?  5 Could you explain this word, please? / What does this word mean?'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', '(quietly) Order three-oh-one-five, fifteen boxes, Wednesday, Mr Tarabishi.'],
  ['B', 'Sorry, could you repeat the order number, please?'],
  ['A', 'Three, zero, one, five.'],
  ['B', 'Sorry — fifteen or fifty?'],
  ['A', 'Fifteen. One-five.'],
  ['B', 'Let me write that down. Order 3015, fifteen boxes, Wednesday, Mr Tarabishi. Thank you.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write 3015 and 15. The common failure is that B never checks back, and the pair discovers the error only when the books open. Make the checking line compulsory.'));
out.push(stage('4', 'Your turn – sample conversation and record'));
out.push(dlg(null, [
  ['A', 'The email is d dot shamsi at mail dot s y.'],
  ['B', 'Sorry, could you repeat that more slowly, please?'],
  ['A', 'D — dot — S-H-A-M-S-I — at — mail dot s y.'],
  ['B', 'Let me read it back: d.shamsi@mail.sy. Is that right?'],
  ['A', 'Yes, that\'s right.'],
]));
out.push(table(['What A said', 'What B wrote', 'Right?'], [
  ['d.shamsi@mail.sy', 'd.shamsi@mail.sy', '✓'],
  ['0955 612 043', '0955 612 043', '✓'],
  ['Tarabishi', 'Tarabshi', '✗ – B did not ask for the spelling'],
], [1.4, 1.4, 0.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My partner said the surname Tarabishi. I asked her to spell it. Then I understood — I wrote it without the i the first time."']));
out.push(note('Expect _spell_ to be the most-used request in most classes, and _speak more slowly_ to be the least used — because learners are reluctant to ask for it. Point that out; it is the most useful of the three.'));
out.push(stage('5', 'Read'));
out.push(p('1 Mr Ayoub.  2 Forty boxes instead of thirty.  3 Call Ms Shamsi before Monday.'));
out.push(stage('6', 'Write with help – sample'));
out.push(table(['For', 'Mr Ayoub'], [
  ['Date / Time', '5 March, 11.40'], ['From', 'Mr Hadi Barakat (Latakia)'], ['Tel', '0933 427 815'],
  ['Message', 'He would like the price list for packaging.'], ['Action', 'Please send it this week.'], ['Taken by', 'N. Mansour'],
], [1, 2.4]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Capital letters for names and companies', '✓'],
  ['The telephone number, in groups', '✓'],
  ['The message says what is wanted', '✓'],
  ['There is an **action** line, and it is signed', '✗ – no action line; "He wants the price list" is news, not an instruction'],
], [3, 2.4]));
out.push(stage('6R', 'Share'));
out.push(p('The action line is the one to read aloud. _Please send it this week_ can be acted on; _He wants the price list_ cannot, because it does not say who sends it or when.'));
out.push(stage('7', 'Write freely – sample (≈45 words)'));
out.push(sample(null, ['**For:** Nadia  ·  **Date / Time:** 6 March, 9.20  ·  **From:** Ms Dima Shamsi, Shamsi Packaging  ·  **Tel:** 0955 612 043', '**Message:** Invoice 2214 is for 40 boxes, not 30. She is sending a corrected invoice today.', '**Action:** Please do not pay 2214 until the new invoice arrives.  **Taken by:** N. Mansour']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I like "do not pay until" — I know exactly what to do._   ✓ _Can you add the old invoice amount?_   ? _Is the delivery date the same?_'));
out.push(stage('7R', 'Share'));
out.push(p('With books closed the class should write: _don\'t pay invoice 2214 yet_. If they write only _new invoice coming_, the action line was buried in the message.'));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['Thank you. I have held invoice 2214. Please tell me the day the new one arrives, and I will pay both together on Thursday.']));

// ===================== 1.7 =====================
out.push(pb());
out.push(h2('1.7  Review & Mediate: what does the notice say?'));
out.push(stage('1', 'Get ready – Unit 1 quiz'));
out.push(p('**1** _Good morning._ / _Hello, I\'m the new…_   **2** _How do you spell that?_   **3** _We **have** got nineteen staff._ / _We **haven\'t** got nineteen staff._   **4** Any two of: repeat · spell · speak more slowly · explain a word.   **5** For · date and time · from (and company) · telephone number · the message · the action · who took it.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a new delivery day)   **b**  1 Abu Yasser.  2 Tuesday.'));
out.push(p('**Language box – Practise (sample):** _The trade counter closes at four on Thursdays._'));
out.push(note('A good mediation here drops "Staff are reminded that" altogether. That phrase carries no information for the listener; it is the notice being polite to the whole company. Learners who keep it are translating, not mediating.'));
out.push(stage('3', 'Practise – sample mediations'));
out.push(sample('Notice 1, mediated', ['"It\'s a notice from the office. From the first of April, the counter opens at half past eight and closes at four on Thursdays. If you need to come at another time, tell Mr Ayoub first."']));
out.push(sample('Notice 2, mediated', ['"It\'s about the car park. It\'s closed on Saturday — they\'re repairing it. You can leave your car in the side street. The warehouse entrance is open as usual."']));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task answers:** Notice 1 → _ask Mr Ayoub in advance if I need the counter outside those hours_. Notice 2 → _park in the side street on Saturday_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'What they must do', 'Did they understand?'], [
  ['Fadi (driver)', 'park in the side street on Saturday', 'yes'],
  ['Lara (reception)', 'tell visitors the counter shuts at four on Thursday', 'yes, after I said the time twice'],
], [1, 2, 1]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s from the office manager. It\'s about the car park. It says the car park is closed on Saturday for repairs, and we can leave our cars in the side street. The important thing for us is that the warehouse entrance stays open, so the deliveries are normal."']));
out.push(note('This is the **first** unit of this book, so the class is meeting the mediation report for the first time. The one thing to insist on from today: the speaker must say what the text means for **us**, not simply what it contains. A report that stops at "it says the car park is closed" has summarised; a report that adds "so the deliveries are normal" has mediated.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['1', '2', '3', '4', '5', '6'], [['B', 'B', 'C', 'B', 'B', 'A']], [1, 1, 1, 1, 1, 1]));
out.push(note('Part 1 tests whether the reader can turn a notice into an action. The wrong options are each a plausible misreading of one word: in 3, _at the gate_ against _in the store_; in 5, _closed_ attached to the wrong noun.'));
out.push(stage('6', 'Write with help – sample (28 words)'));
out.push(sample(null, ['Dear Abu Yasser, the Aleppo lorry comes on Tuesday now, not Monday. Also, we must count the boxes at the gate. If there is a problem, please call extension 201. Thank you. Nour']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  The lorry comes on Tuesday', '✓'],
  ['2  Count the boxes at the gate', '✓'],
  ['3  Call extension 201 if there is a problem', '✓'],
  ['25 words or more', '✓ – 28'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice sample (31 words)'));
out.push(sample(null, ['Hello Hala, welcome to Sham Trading. I\'m Nour, the assistant on the second floor. Your desk is next to the window, opposite mine. Please bring your identity card on Monday. See you then. Nour']));
out.push(note('Mark the three content points first, then the language. A message with perfect English and only two points scores lower than a message with small errors and all three. Say this to the class before they write, not after.'));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['Thank you, Nour. I\'ll bring my identity card on Monday. Is the office on the second floor, and what time should I arrive?']));
out.push(stage('✓', 'Unit 1 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'c', 'a', 'b', 'a', 'b', 'a']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (4 marks) — Company: **Hamdan Printing** · Contact: **Rasha Hamdan** · Tel: **0988 450 176** · Wants: **the price list for paper**'));
out.push(p('**C  Writing** (6 marks) — sample:'));
out.push(sample(null, ['Hello, welcome to the company. I\'m Fadi Saeed, the driver. I look after the two vans and the deliveries in Damascus. My extension is 231 — call me any time.  _(29 words)_']));
out.push(box('Marking the writing (6 marks)', [
  '**Task (3):** who you are · what you look after · your extension number — one mark each.',
  '**Language (2):** _be_ and the present simple used correctly; _a / an_ before the job.',
  '**Organisation and length (1):** a greeting and a name; 25 words or more.',
  '⚠ A message with perfect English and no extension number scores **2 of 3** on task. The three things are the task.',
], C.lyellow, C.orange));
out.push(p('_Total 18 marks. 13+ = ready for Unit 2._', { color: '595959' }));
out.push(box('Teacher\'s note — the three faults to watch in Unit 1', [
  '**1  The missing verb.** _I new assistant._ Arabic needs no present-tense _be_, so this is not carelessness and it does not go away by being corrected once. Drill _I\'m / he\'s / she\'s_ as whole chunks, not as a paradigm, and expect it back in Unit 2.',
  '**2  The missing article.** _I\'m assistant._ Teach _a_ and _an_ with the **job**, every time a job is said, from the first lesson — jobs are where learners meet the article most and get it wrong longest.',
  '**3  Saying a number as one string.** _Oh nine double eight four five oh one seven six_ said in one breath cannot be written down. 1.3 is where the habit is made: **group the digits and pause**, then read it back. Do not let a learner finish a number without the read-back.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 1 · Answer Key');
