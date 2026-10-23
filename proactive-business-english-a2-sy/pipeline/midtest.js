// Proactive Business English A2 · Syria Edition · Book 1 · MID-BOOK TEST (Units 1–6) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('MID-BOOK TEST  ·  Units 1–6'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (30 min) · **Writing** (25 min) · **Listening** (about 15 min) · **Speaking** (in pairs, about 6 minutes with your teacher).',
  'Total: **60 marks** — **Reading 18 · Writing 18 · Listening 12 · Speaking 12**. This is the same weighting as the A2 Key examination (30 · 30 · 20 · 20 per cent), so your percentage here means something outside this classroom.',
  'Everything in this test happens at work. Where a task asks about **your** company, you can use your real job or invent one — you are marked on the English, not on the company.',
  'Write your answers on this paper, clearly, in pen. You **cannot** use a dictionary or your telephone.',
  'If you finish early: check that every price has its **unit**, and that every number you wrote down was **read back**.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (30 minutes · 18 marks)'));
out.push(part('Part 1  ·  Notices and messages  (6 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.'));
out.push(sp());
out.push(model(['**1**  _TRADE COUNTER  ·  Sunday–Wednesday 8.30–4.00  ·  **Thursday 8.30–2.00**  ·  Closed Friday, Saturday_']));
out.push(q('**A** The counter opens later on Thursday.   **B** The counter closes early on Thursday.   **C** The counter is closed on Thursday.'));
out.push(model(['**2**  _Nour — Ms Shamsi rang about the wrap. Call her **today**; she only sends on Tuesdays. — A.Y._']));
out.push(q('**A** Nour must telephone today or the wrap waits a week.   **B** Ms Shamsi will telephone again on Tuesday.   **C** The wrap arrived on Tuesday.'));
out.push(model(['**3**  _Paper: 6 packets. Minimum 10. **LOW — reorder.**_']));
out.push(q('**A** There is plenty of paper.   **B** Order more paper.   **C** There is no paper at all.'));
out.push(model(['**4**  _**(R)** 12 rolls wrap — reorder, **do not dispatch**._']));
out.push(q('**A** There are no rolls of wrap left.   **B** Send twelve rolls of wrap with the order.   **C** The wrap is coming to us; do not pack it.'));
out.push(model(['**5**  _Vehicles must not obstruct the loading bay. Park to the left of the gate._']));
out.push(q('**A** You may park at the loading door for a short time.   **B** The loading bay is closed.   **C** Park on the left, not in front of the loading door.'));
out.push(model(['**6**  _Delivery free of charge on orders over 300,000 SYP. VAT included in all prices._']));
out.push(q('**A** Big orders are delivered free and the prices already include VAT.   **B** Delivery costs 300,000.   **C** VAT must be added to the prices.'));

out.push(pb());
out.push(part('Part 2  ·  Three colleagues  (4 marks)', 'Read about three people at Sham Trading. For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(table(['A  Nadia – accountant', 'B  Bassel – sales', 'C  Abu Yasser – warehouse'], [[
  'Nadia works Sunday to Thursday, eight to four. She finishes at four exactly, because her children leave school at half past three. She checks the bank twice a day and sends the invoices once a week, on Wednesday. She never works at the weekend, but at the end of the month she sometimes stays until five.',
  'Bassel leaves Damascus at seven on Sundays and drives to Homs. He is there by half past nine if the road is good. He starts at the market, because the small shops open early, and he sees five or six customers a day. He sends the orders by message the same evening. He hardly ever writes an email.',
  'Abu Yasser starts at half past seven, before the office opens. He walks the shelves every morning and checks the fast lines. He counts the whole stock twice a month. He writes the numbers in a book as well as on the computer, and he doesn\'t use email at all.']], [1, 1, 1]));
out.push(sp());
out.push(q('**7**  Who works away from the office?     A     B     C'));
out.push(q('**8**  Who checks the fast-moving items every morning?     A     B     C'));
out.push(q('**9**  Who has a fixed finishing time for a family reason?     A     B     C'));
out.push(q('**10**  Who keeps a record in two places?     A     B     C'));

out.push(pb());
out.push(part('Part 3  ·  A longer text  (5 marks)', 'Read the text and choose the correct answer **A**, **B** or **C**.'));
out.push(sp());
out.push(model([
  '**My first two months at Sham Trading — by Nour Mansour**',
  'I am twenty-four and I come from Mezzeh. In March I started my first job: administrative assistant at Sham Trading, a small import company ten minutes from my parents\' flat. I was not nervous about the English. I was nervous about the telephone.',
  'The office is on the second floor. There are six desks, two filing cabinets and one printer that is eleven years old. There isn\'t a photocopier — we use the one downstairs at the trade counter. My desk is next to Nadia, the accountant, and that is lucky, because Nadia explains things twice without making you feel small.',
  'I start at eight. First I check the email and make a list; then the telephone starts and the list changes. The hardest thing in my first week was a customer who said a long number quickly and did not want to repeat it. Now I say _let me repeat that_ before he can put the telephone down, and the number is right.',
  'The person I have learned the most from is Abu Yasser in the warehouse. He is fifty-two and he has been in the trade for thirty years. He counts the stock by hand as well as on the computer, and when I asked him why, he said: _the screen says ninety; sometimes the shelf says eighty-six._ Last week the shelf said nineteen when the card said a hundred, and he was right again.',
  'I still make mistakes. But I write everything down now, and I telephone early rather than late. Mr Ayoub says that is most of the job.',
]));
out.push(sp());
out.push(q('**11**  What was Nour worried about before she started?   **A** her English   **B** using the telephone   **C** the journey to work'));
out.push(q('**12**  Why is it lucky that her desk is next to Nadia\'s?   **A** Nadia explains things kindly.   **B** Nadia is also new.   **C** Nadia uses the printer.'));
out.push(q('**13**  How did Nour solve the problem of the long number?   **A** She asks the customer to speak slowly.   **B** She writes it twice.   **C** She repeats it back before the call ends.'));
out.push(q('**14**  Why does Abu Yasser count by hand?   **A** He cannot use the computer.   **B** The computer is sometimes wrong.   **C** It is the company rule.'));
out.push(q('**15**  What does Nour say she does now?   **A** She telephones early rather than late.   **B** She never makes mistakes.   **C** She works in the warehouse.'));

out.push(pb());
out.push(part('Part 4  ·  Open cloze  (3 marks)', 'Write **ONE** word in each gap.'));
out.push(sp());
out.push(model([
  '**A message from Nour to a new colleague**',
  'Hi Hala! Welcome to Sham Trading. Here is what you need for your first morning.',
  'The trade counter opens (16) ______ half past eight, so come at eight if you can. We start the Monday meeting at half past eight now, not at ten.',
  'The customer files are in the filing cabinet by the window. Homs is in the second drawer. There (17) ______ six desks in the office, and yours is next to mine.',
  'One thing: you mustn\'t park in front of the loading door, (18) ______ the forklift uses it all day. Park on the left, next to the wall.',
  'See you on Sunday!  Nour',
]));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (25 minutes · 18 marks)'));
out.push(part('Part 1  ·  A short message  (6 marks)', 'Write **25 words or more**.'));
out.push(sp());
out.push(box(null, [
  'A delivery to a customer will arrive **two hours late** because a road is closed. Write a message to the customer.',
  'In your message:  •  say **why** it is late  •  say the **new time**  •  offer **one** alternative if the new time is too late.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(sp());
out.push(part('Part 2  ·  A work email  (12 marks)', 'Write **35 words or more**.'));
out.push(sp());
out.push(box(null, [
  'You need to order **three** things from a supplier. Write an email to the supplier.',
  'In your email:  •  order the three things, each with a **quantity and a unit**  •  say **which one is urgent**, and why  •  say **where** the delivery must go, and ask the supplier to **confirm** the date.',
], C.grey, C.navy));
out.push(...lines(10));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 15 minutes · 12 marks)'));
out.push(p('_Your teacher will play each recording **twice**._', { color: '595959' }));
out.push(part('Part 1  ·  Four short conversations  (4 marks)', '🔊 **Track MT-1.** For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**19**  What time does the warehouse open?   **A** 7.30   **B** 8.00   **C** 8.30'));
out.push(q('**20**  How much is one small box if you take a hundred?   **A** 800   **B** 700   **C** 70,000'));
out.push(q('**21**  How does the parcel travel to Hama?   **A** by lorry   **B** with a service driver   **C** by van'));
out.push(q('**22**  What has the warehouse got none of?   **A** tape   **B** boxes   **C** plastic wrap'));
out.push(sp());
out.push(part('Part 2  ·  Complete the delivery note  (5 marks)', '🔊 **Track MT-2.** You will hear a telephone call about a delivery. Write **one or two words or a number** in each gap.'));
out.push(sp());
out.push(table(['DELIVERY NOTE — NOTES', ''], [
  ['Customer', 'Khalil & Sons'],
  ['Town', '**23** ______'],
  ['Travels by', '**24** ______'],
  ['Leaves Tuesday at', '**25** ______'],
  ['Number of items on the note', '**26** ______'],
  ['Telephone the office on extension', '**27** ______'],
], [2, 1], { headFill: C.navy }));
out.push(sp());
out.push(part('Part 3  ·  A longer talk  (3 marks)', '🔊 **Track MT-3.** You will hear a warehouse supervisor talking to a new worker. Choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**28**  How often is the whole stock counted?   **A** every morning   **B** once a week   **C** twice a month'));
out.push(q('**29**  What must you do if the shelf and the screen are different?   **A** change the screen   **B** tell the supervisor the same day   **C** count again next month'));
out.push(q('**30**  Why mustn\'t you walk in the yellow square?   **A** It is the forklift area.   **B** It is being painted.   **C** It is the fire exit.'));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about 6 minutes · 12 marks)'));
out.push(p('_Your teacher will ask you questions. Answer in full sentences and add **one extra detail** every time. Never answer only "yes" or "no" — at work that is the same as saying nothing._'));
out.push(sp());
out.push(box('Part 1  ·  About you and your work  (6 marks · your teacher asks each candidate)', [
  '**1**  What\'s your name? How do you spell your family name?',
  '**2**  What do you do? Who do you report to?',
  '**3**  What time do you start and finish? What do you do first in the morning?',
  '**4**  Tell me about the place where you work. What is there in your room?',
  '**5**  How often do you speak to customers or suppliers?',
  '**6**  How do you come to work, and how long does it take?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 2  ·  Talk together  (6 marks · the two candidates talk to each other)', [
  'Your teacher says: _"Your company must send a large order to a customer in another city. The goods you need arrive one day late. Talk together and decide what to do."_',
  'Talk for about **two and a half minutes**. Remember to:',
  '•  make suggestions: _Shall we…? · Why don\'t we…? · How about…?_',
  '•  refuse with a **reason**, never with a bare no: _We can\'t, because…_',
  '•  give both kinds of reason: _…because…_ and _…to…_',
  '•  ask your partner what **they** think, at least once',
  '•  **decide together** at the end, and say what you will tell the customer.',
], C.lorange, C.orange));
out.push(sp());
out.push(box('How your teacher marks your speaking (12 marks)', [
  table(['', '5–6 marks', '3–4 marks', '0–2 marks'], [
    ['**Grammar and vocabulary** (6)', 'Uses Unit 1–6 language well: present simple and continuous, _there is/are_, quantities with their units, comparatives, _must/mustn\'t_, _because/to_. Work vocabulary is accurate.', 'Some good language, but repeats the same words, and mistakes sometimes slow the listener.', 'Very short answers; many mistakes; little work vocabulary.'],
    ['**Communication and pronunciation** (6)', 'Speaks clearly, answers fully, asks the partner questions, refuses with reasons, and reaches a decision.', 'Answers, but waits to be asked; agrees with everything; sometimes hard to understand.', 'Needs a lot of help; very hard to understand; no decision reached.'],
  ], [1.1, 1.6, 1.4, 1.2]),
], C.grey, C.navy));
out.push(sp());
out.push(box('Your result', [
  table(['Reading /18', 'Writing /18', 'Listening /12', 'Speaking /12', 'TOTAL /60'], [['', '', '', '', '']], [1, 1, 1, 1, 1]),
  '**42–60 = very good** · **30–41 = good — look again at your weakest paper** · **under 30 = work through Units 1–6 again with your teacher before Unit 7**',
  'Your percentage here is comparable with an A2 Key result, because the four papers carry the same weight as they do in the examination.',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Mid-Book Test (Units 1–6)');
