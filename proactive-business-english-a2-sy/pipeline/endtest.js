// Proactive Business English A2 · Syria Edition · Book 1 · END-OF-BOOK TEST (Units 1–12) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('END-OF-BOOK TEST  ·  Units 1–12'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (35 min) · **Writing** (30 min) · **Listening** (about 20 min) · **Speaking** (in pairs, about 8 minutes with your teacher).',
  'Total: **100 marks** — **Reading 30 · Writing 30 · Listening 20 · Speaking 20**. This is the weighting of the A2 Key examination (30 · 30 · 20 · 20 per cent), so your percentage here is comparable with a real result.',
  'This test covers the **whole book**: the present, the past and the future; quantities and prices; rules, permission and advice; travel; and the polite phrases of Unit 12.',
  'Everything happens at work. Where a task asks about **your** company, use your real job or invent one — you are marked on the English, not on the company.',
  'Write your answers on this paper, in pen. You **cannot** use a dictionary or your telephone.',
  'If you finish early, check three things: the **-s** on he/she, that every quantity has its **unit**, and that every past verb is in the past.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (35 minutes · 30 marks)'));
out.push(part('Part 1  ·  Notices, notes and messages  (6 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.'));
out.push(sp());
out.push(model(['**1**  _**LOADING BAY** — Do not lift pallets alone. Two people, every time. No exceptions._']));
out.push(q('**A** Ask for help before you lift a pallet.   **B** Lift the pallets carefully.   **C** Only the forklift may lift pallets.'));
out.push(model(['**2**  _Nour — I am at the clinic until eleven. Could you take my calls? If Ms Shamsi rings, say I will call her back before one. — Nadia_']));
out.push(q('**A** Nadia wants Nour to answer Ms Shamsi\'s questions.   **B** Nadia will telephone Ms Shamsi herself later today.   **C** Nadia is asking Nour to telephone the clinic.'));
out.push(model(['**3**  _Tablets: **one twice a day, after food**. Do not take more than two in one day._']));
out.push(q('**A** Take two tablets together after a meal.   **B** Take one tablet a day until the box is empty.   **C** Take one tablet in the morning and one in the evening, with food.'));
out.push(model(['**4**  _**HOMS BUS** — Departures 6.45 · 9.15 · 13.30. The 6.45 does not run on Friday._']));
out.push(q('**A** There is no bus to Homs on Friday.   **B** On Friday the first bus is at a quarter past nine.   **C** The bus leaves Homs at a quarter to seven.'));
out.push(model(['**5**  _You are **cordially invited** to the Sham Trading gathering, Thursday 7.30 p.m., Al Qasr Hall. Please reply to Nour by Monday._']));
out.push(q('**A** Everyone must reply by Monday, yes or no.   **B** Reply only if you cannot come.   **C** The gathering is on Monday evening.'));
out.push(model(['**6**  _Hotel Al Nawras — breakfast 7.00–9.30, **included in the room price**. Airport car: extra, book at reception._']));
out.push(q('**A** Breakfast and the car are both free.   **B** Breakfast must be booked at reception.   **C** Breakfast costs nothing extra; the car does.'));

out.push(pb());
out.push(part('Part 2  ·  Three colleagues and their week  (7 marks)', 'Read about three people at Sham Trading. For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(table(['A  Bassel – sales', 'B  Nadia – accounts', 'C  Abu Yasser – warehouse'], [[
  'Last week Bassel went to Homs on Sunday and to Hama on Tuesday. He is going to visit the new Latakia branch next month, and he is staying two nights, because one day is not enough for six customers. He can drive the small van, but he prefers the bus: he says he can read the orders on the bus. He hardly ever sends an email — he telephones.',
  'Nadia sent the invoices on Wednesday, as she does every week. She had a difficult morning on Thursday: a customer said the figure was wrong, and he was right. She apologised the same day, re-issued the invoice and wrote it in the book. She has got a clinic appointment on Sunday at nine, so she is coming in at eleven. She doesn\'t have to work on Saturdays.',
  'Abu Yasser hurt his back in March, so now he mustn\'t lift anything over fifteen kilos alone. He counted the whole stock on Thursday and found a difference of fourteen boxes. He told the office the same day. He should take a break every hour, the doctor says, but he forgets. He is teaching the new worker, and he is rather good at it.']], [1, 1, 1]));
out.push(sp());
out.push(q('**7**  Who travelled to two cities last week?     A     B     C'));
out.push(q('**8**  Who made a mistake and put it right on the same day?     A     B     C'));
out.push(q('**9**  Who is not allowed to do part of the old job?     A     B     C'));
out.push(q('**10**  Who is arriving late one morning for a medical reason?     A     B     C'));
out.push(q('**11**  Who prefers one way of travelling for a reason that is about work?     A     B     C'));
out.push(q('**12**  Who is going to be away for more than one day?     A     B     C'));
out.push(q('**13**  Who is advised to stop regularly but does not?     A     B     C'));

out.push(pb());
out.push(part('Part 3  ·  A longer text  (6 marks)', 'Read the text and choose the correct answer **A**, **B** or **C**.'));
out.push(sp());
out.push(model([
  '**My first year at Sham Trading — by Nour Mansour**',
  'A year ago I was afraid of the telephone. Now I answer it before the second ring, and the thing I was afraid of is the thing I am best at. That did not happen because somebody taught me a list of sentences. It happened because I made every mistake once and wrote each one down.',
  'The first big one was in May. A customer in Hama ordered sixty small boxes. I wrote _60 boxes_ on the note and sent it to the warehouse. Abu Yasser telephoned me from the shelves: _which boxes? We have four sizes._ The lorry was already in the yard. We lost two hours, and I learned in two minutes what a unit is for.',
  'In August Nadia was away and a customer rang about an invoice. He was angry, and the figure was wrong — ours, not his. I wanted to say _I will ask Nadia on Sunday_. Instead I said: _You are right. I am sorry. I am sending the correct invoice this afternoon._ He was quiet for a second, and then he thanked me. Mr Ayoub says that call kept the customer. I say it was the shortest English I used all year.',
  'The hardest week was October, when Bassel was in Latakia and I had to make his appointments as well as mine. I telephoned eleven people in two days. By the Wednesday I was not translating in my head any more — I was just working, in English, and I did not notice until the evening.',
  'I still make mistakes, but they are different ones now. I write the unit. I telephone early rather than late. And when something is my fault, I say so first, before anybody asks — because an apology on Sunday is worth less than an apology on Thursday.',
]));
out.push(sp());
out.push(q('**14**  How does Nour explain her progress with the telephone?   **A** Somebody taught her the right sentences.   **B** She recorded her own mistakes.   **C** She practised with Nadia every week.'));
out.push(q('**15**  Why did the Hama order go wrong?   **A** She wrote the quantity without the size.   **B** She sent the note to the wrong place.   **C** The customer ordered too late.'));
out.push(q('**16**  What did Nour do when the customer complained about the invoice?   **A** She waited for Nadia to come back.   **B** She said the customer was mistaken.   **C** She accepted the mistake and acted that day.'));
out.push(q('**17**  Why was October difficult?   **A** She was doing two people\'s arranging.   **B** She was travelling with Bassel.   **C** She had eleven complaints.'));
out.push(q('**18**  What happened by the Wednesday of that week?   **A** She finished all the appointments.   **B** She stopped translating in her head.   **C** She asked for help.'));
out.push(q('**19**  What is Nour\'s rule about apologising?   **A** Apologise only when you are asked.   **B** Let the manager apologise.   **C** Apologise at once, not later.'));

out.push(pb());
out.push(part('Part 4  ·  Choose the word  (6 marks)', 'For each gap, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(model([
  '**An email to a supplier**',
  'Dear Ms Shamsi,',
  'Thank you for **(20)** ______ the boxes so quickly last week. They arrived on Tuesday morning and we packed the Homs order the same day.',
  'I am writing about next month. We **(21)** ______ to open a second store room, so we will need more wrap and more tape. **(22)** ______ you send me your prices for fifty rolls? We also need **(23)** ______ tape — four or five boxes of it.',
  'One more thing: our driver hurt his back in March, so please put the wrap on two pallets, not one. I know that is extra work, and I am sorry **(24)** ______ the trouble.',
  'I **(25)** ______ the warehouse on Thursday morning, so Thursday afternoon is better for a telephone call.',
  'With best wishes, Nour Mansour',
]));
out.push(sp());
out.push(q('**20**   **A** sending   **B** send   **C** to send'));
out.push(q('**21**   **A** went   **B** go   **C** are going'));
out.push(q('**22**   **A** Should   **B** Could   **C** Must'));
out.push(q('**23**   **A** some   **B** a   **C** any'));
out.push(q('**24**   **A** to   **B** that   **C** for'));
out.push(q('**25**   **A** count   **B** am counting   **C** counted'));
out.push(sp());
out.push(part('Part 5  ·  Write one word  (5 marks)', 'Write **ONE** word in each gap.'));
out.push(sp());
out.push(model([
  '**A reply to the invitation**',
  'Dear Mr Ayoub, Thank you very much (26) ______ the invitation to the gathering on Thursday.',
  'I would love to come, and my brother (27) ______ driving me, so I can stay until the end. I am afraid Nadia (28) ______ come: she is in Aleppo until Friday.',
  'I have never been to a company gathering here, so I don\'t know (29) ______ to bring. In my family we always take something for the table.',
  'Please give my regards (30) ______ your wife. Nour',
]));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (30 minutes · 30 marks)'));
out.push(part('Part 1  ·  A short message  (10 marks)', 'Write **25 words or more**.'));
out.push(sp());
out.push(box(null, [
  'You sent a customer an invoice with the **wrong total**. You noticed it yourself this morning. Write a message to the customer.',
  'In your message:  •  **apologise**  •  say **what was wrong**  •  say **what you are doing about it, and when**.',
], C.grey, C.navy));
out.push(...lines(6));
out.push(sp());
out.push(part('Part 2  ·  A hotel email  (20 marks)', 'Write **35–60 words**.'));
out.push(sp());
out.push(box(null, [
  'A colleague is travelling to another city for work next month. Write an email to a hotel there.',
  'In your email:  •  say **when** the colleague is arriving and **how many nights**  •  say what **kind of room** you want  •  ask **two questions** about the hotel or the city  •  ask the hotel to **confirm**.',
], C.grey, C.navy));
out.push(...lines(11));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 20 minutes · 20 marks)'));
out.push(p('_Your teacher will play each recording **twice**._', { color: '595959' }));
out.push(part('Part 1  ·  Five short conversations  (5 marks)', '🔊 **Track ET-1.** For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**31**  When is the supplier meeting now?   **A** Tuesday at ten   **B** Thursday at ten   **C** Thursday at two'));
out.push(q('**32**  What did Nour do on Monday?   **A** She counted the small boxes.   **B** She sent the invoices.   **C** She met the supplier.'));
out.push(q('**33**  What does the doctor tell Abu Yasser to do?   **A** stop working for a week   **B** lift with his legs   **C** take a break every hour'));
out.push(q('**34**  How many nights is Bassel staying in Latakia?   **A** one   **B** two   **C** three'));
out.push(q('**35**  What is the caller apologising for?   **A** a late payment   **B** a wrong figure   **C** a late delivery'));
out.push(sp());
out.push(part('Part 2  ·  Complete the travel plan  (6 marks)', '🔊 **Track ET-2.** You will hear Nour and Bassel planning a journey. Write **one or two words or a number** in each gap.'));
out.push(sp());
out.push(table(['TRAVEL PLAN — NOTES', ''], [
  ['City', '**36** ______'],
  ['Day of travel', '**37** ______'],
  ['Travelling by', '**38** ______'],
  ['Leaves at', '**39** ______'],
  ['Hotel', '**40** ______'],
  ['Number of nights', '**41** ______'],
], [2, 1], { headFill: C.navy }));

out.push(pb());
out.push(part('Part 3  ·  A telephone call  (5 marks)', '🔊 **Track ET-3.** You will hear a telephone call between Nour and a customer. Choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**42**  Why is the customer telephoning?   **A** to order more wrap   **B** to change a delivery day   **C** to complain about a price'));
out.push(q('**43**  What is the problem with Wednesday?   **A** The shop is closed.   **B** The road is closed.   **C** Nobody can sign for the goods.'));
out.push(q('**44**  What does Nour offer first?   **A** Tuesday afternoon   **B** Thursday morning   **C** a service driver'));
out.push(q('**45**  What must the customer do before Tuesday?   **A** pay the invoice   **B** telephone the driver   **C** send the order number'));
out.push(q('**46**  How will Nour confirm the new day?   **A** by message   **B** by email   **C** by telephone tomorrow'));
out.push(sp());
out.push(part('Part 4  ·  A longer talk  (4 marks)', '🔊 **Track ET-4.** You will hear Mr Ayoub speaking to the staff. Choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**47**  What is the first change?   **A** The office opens later.   **B** The trade counter opens half an hour earlier.   **C** The Monday meeting moves to ten.'));
out.push(q('**48**  Who has to sign the stock book now?   **A** anybody who takes stock out   **B** the warehouse staff only   **C** the office manager'));
out.push(q('**49**  What does Mr Ayoub say about mistakes?   **A** Write them in the book at the end of the month.   **B** Report them the same day.   **C** Tell the customer first.'));
out.push(q('**50**  What is Mr Ayoub going to do next month?   **A** open a second store room   **B** visit Latakia   **C** take on two new drivers'));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about 8 minutes · 20 marks)'));
out.push(box('Part 1  ·  About you and your work  (8 marks · your teacher asks each candidate)', [
  '_Full sentences, and **one extra detail** every time: a bare "yes" is the same as silence._',
  '**1**  What do you do, and who do you report to?',
  '**2**  What are you responsible for? What don\'t you have to do?',
  '**3**  Tell me about **last week** at work. What did you do on Tuesday?',
  '**4**  What are you doing tomorrow morning?',
  '**5**  What are you going to do next month, at work or at home?',
  '**6**  Tell me about a journey you made for work. How did you travel?',
  '**7**  What is one rule in your company that visitors do not know?',
  '**8**  In your work, what is it polite to do when a customer arrives?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 2  ·  Talk together  (12 marks · the two candidates talk to each other)', [
  'Your teacher says: _"A customer from Aleppo is visiting your office for **one day** next week, and your manager is away. Decide the programme for the day, and what the email to the customer will say."_  Talk for about **three minutes**. Remember to:',
  '•  make suggestions: _Shall we…? · How about…? · Why don\'t we…?_',
  '•  say what you **can** and **can\'t** do, and **why**, and use the diary language of Unit 7: _he is arriving at… · we are having lunch at…_',
  '•  refuse with a **reason** and an **alternative**, never with a bare no',
  '•  remember the courtesy of Unit 12 — tea, the welcome, the regards at the end — and ask your partner what **they** think, at least twice',
  '•  **decide together**, and say what the email will contain.',
], C.lorange, C.orange));
out.push(sp());
out.push(box('How your teacher marks your speaking (20 marks)', [
  table(['', '8–10 marks', '5–7 marks', '0–4 marks'], [
    ['**Grammar and vocabulary** (10)', 'All three times are used: present, past, _going to_. Also _can / could / must / have to / should_, quantities with units, and the polite phrases.', 'Mostly the present tense; the same structures repeated; mistakes sometimes slow the listener.', 'Very short answers; no past and no future; little work vocabulary.'],
    ['**Communication and pronunciation** (10)', 'Clear; answers fully; asks the partner; refuses with a reason **and** an alternative; reaches a decision.', 'Takes part, but waits to be asked; agrees with everything; the decision is late or not stated.', 'Needs a lot of help; hard to understand; no decision.'],
  ], [1.1, 1.6, 1.4, 1.2]),
], C.grey, C.navy));
out.push(sp());
out.push(box('Your result', [
  table(['Reading /30', 'Writing /30', 'Listening /20', 'Speaking /20', 'TOTAL /100'], [['', '', '', '', '']], [1, 1, 1, 1, 1]),
  '**70–100 = you are ready for Book 2** · **50–69 = ready, with the weakest paper worked on first** · **under 50 = go back to the three units your teacher names before Book 2 begins**',
  'Your percentage here is comparable with an A2 Key result, because the four papers carry the same weight as they do in the examination. A2 Key passes at **120 on its own scale**, which is about **70 per cent** — the same line as this paper.',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · End-of-Book Test (Units 1–12)');
