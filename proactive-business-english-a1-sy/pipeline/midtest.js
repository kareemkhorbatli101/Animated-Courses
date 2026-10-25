// Proactive Business English A1 · Syria Edition · Book 1 · BOOK 1 TEST (Units 1–6) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('BOOK 1 TEST  ·  Units 1–6'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (25 min) · **Writing** (25 min) · **Listening** (about 15 min) · **Speaking** (in pairs, about 6 minutes with your teacher).',
  'Total: **60 marks** — **Reading 18 · Writing 18 · Listening 12 · Speaking 12**. This is the same weighting as the A2 Key examination you will sit at the end of the NEXT course (30 · 30 · 20 · 20 per cent), so your percentage here means something outside this classroom.',
  '⚠ **This test covers Units 1 to 6 only.** Your name, the count, the day, the place, the delivery note and the telephone.',
  'Everything in this test happens at work. Where a task asks about **your** work, you can use your real job or invent one — you are marked on the English, not on the job.',
  'Write your answers on this paper, clearly, in pen. You **cannot** use a dictionary or your telephone.',
  '⚠ **If you finish early, check three things:** every quantity has its **unit** · every month is in **letters** · every number you wrote down was **read back**.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (25 minutes · 18 marks)'));
out.push(part('Part 1  ·  Notices  (6 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.'));
out.push(sp());
out.push(model(['**1**  _GATE BOOK — SIGN IN AND SIGN OUT. EVERY DAY._']));
out.push(q('**A** Sign once a week.   **B** Sign when you arrive and when you leave.   **C** Only visitors sign.'));
out.push(model(['**2**  _COUNT: EVERY THURSDAY. THE WHOLE STORE._']));
out.push(q('**A** Count one shelf on Thursday.   **B** Count the store every week, on Thursday.   **C** Count on Monday.'));
out.push(model(['**3**  _SHELF 1 = BOTTOM. SHELF 4 = TOP. COUNT ROWS FROM THE DOOR._']));
out.push(q('**A** Shelf 1 is the highest.   **B** Count the rows from the wall.   **C** Shelf 1 is the lowest, and rows start at the door.'));
out.push(model(['**4**  _NOT COUNTED IT? DO NOT SIGN IT. SAY: I HAVE NOT COUNTED IT YET._']));
out.push(q('**A** Count before you sign, and say so.   **B** Sign and count afterwards.   **C** Never sign anything.'));
out.push(model(['**5**  _12 IS NOT A QUANTITY. 12 BOXES IS._']));
out.push(q('**A** Twelve is too many.   **B** A number needs a unit.   **C** Do not write numbers.'));
out.push(model(['**6**  _SLIPS GO ON THE SPIKE, STANDING UP. NOT FLAT ON A DESK._']));
out.push(q('**A** Leave message slips flat on the desk.   **B** Put message slips on the spike.   **C** Do not write message slips.'));

out.push(pb());
out.push(part('Part 2  ·  Three men at Sham Trading  (4 marks)', 'Read about three people. For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(table(['A  Fadi – driver', 'B  Samih – storeman', 'C  Abu Raed – gate'], [[
  'Fadi starts at six o\'clock, an hour before anybody else. He checks the lorry first: the tyres, the water, the papers. Then he drives to Homs on Wednesday and to Hama on Sunday. He finishes at six in the evening, so his day is twelve hours long. He has the only big licence in the yard.',
  'Samih starts at seven. He counts the back store on Mondays and he reads the shift board first, every morning, before he does anything else. He can reach shelf three but not shelf four, so he waits for the ladder. He writes the numbers on the sheet and puts the sheet on the supervisor\'s table.',
  'Abu Raed opens the gate at half past six. He has written every name in the gate book for nine years and he has never missed a day. He writes in Arabic script, because he does not read English. The office cannot read his book, so Ammar now writes the name in English next to his.']], [1, 1, 1]));
out.push(sp());
out.push(q('**7**  Who has the longest working day?     A     B     C'));
out.push(q('**8**  Who cannot do a job alone and waits for a thing?     A     B     C'));
out.push(q('**9**  Who keeps a record that somebody else now writes in too?     A     B     C'));
out.push(q('**10**  Who does a job that only one person in the yard can do?     A     B     C'));

out.push(pb());
out.push(part('Part 3  ·  A short text  (5 marks)', 'Read the text and choose the correct answer **A**, **B** or **C**.'));
out.push(sp());
out.push(model([
  '**My first month in the store — by Ammar Zreik**',
  'I am twenty-two. In March I started work as a storeman at Sham Trading. On my first morning I came at ten to seven and Abu Raed said I was early. That was good. Nobody had ever told me that before.',
  'The store has four rows and four shelves in each row. Shelf one is the bottom. I can reach shelf three. I cannot reach shelf four, so I wait for the ladder, and the ladder is often in the yard. Samih says a man on a carton is a man in hospital, so I put things on shelf three and move them later. Then I tell him and I write it on the sheet.',
  'The hardest day was the fourth of March. A lorry came with sixteen boxes on the paper. The driver said _sign here_ and he had four more stops. I said _I have not counted it yet. Two minutes._ I counted fifteen. I signed for fifteen and I wrote _one box short_ next to my name. The driver signed it too. He said I was the first man that month who counted.',
  'The telephone is still the hard thing. I say _Sham Trading, good morning_ and then I stop and listen, and the stopping is harder than the talking. Last Tuesday I took a message perfectly — the name spelled, the number read back — and it stayed under a pad on Nour\'s desk for three days.',
]));
out.push(sp());
out.push(q('**11**  Why was Ammar\'s first morning good?   **A** He was given a badge.   **B** Somebody noticed he was early.   **C** He met everybody.'));
out.push(q('**12**  What does Ammar do when he cannot reach shelf four?   **A** He stands on a carton.   **B** He leaves the job.   **C** He uses shelf three and moves it later.'));
out.push(q('**13**  How many boxes did the paper say?   **A** fifteen   **B** sixteen   **C** four'));
out.push(q('**14**  What is the hardest part of answering the telephone?   **A** saying the company name   **B** not talking   **C** writing the name'));
out.push(q('**15**  Why did the message take three days?   **A** Ammar took it badly.   **B** Nobody wrote it down.   **C** A pad was put on top of the slip.'));

out.push(pb());
out.push(part('Part 4  ·  One word in each gap  (3 marks)', 'Write **ONE** word in each gap.'));
out.push(sp());
out.push(model([
  '**A note on the store wall**',
  'The big delivery comes (16) ______ Monday. Always on Monday.',
  'Be at the gate (17) ______ seven o\'clock — fifteen minutes before the lorry.',
  'The labels are in the small box, (18) ______ the top shelf. Not behind the paper: in front of it.',
]));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (25 minutes · 18 marks)'));
out.push(part('Part 1  ·  A message  (6 marks)', 'Write **four sentences, about 30 words**.'));
out.push(sp());
out.push(box(null, [
  'A man telephoned for your supervisor. Write the message for your supervisor.',
  'In your message:  •  say **who** rang, and **when**  •  say **what** he wants  •  say **when he rings back**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(sp());
out.push(part('Part 2  ·  A note you write yourself  (12 marks)', 'Write **40 words or more**.'));
out.push(sp());
out.push(box(null, [
  'A lorry has come to your work with goods and **no delivery note**. Write your own note so that both you and the driver have a paper.',
  'On your note:  •  the **date** _(with the month in letters)_ and the **time**  •  the **driver\'s name** and the **lorry number**  •  the goods, with a **quantity and a unit**  •  one line saying what you did **NOT** check  •  a space for **both** signatures.',
], C.grey, C.navy));
out.push(...lines(10));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 15 minutes · 12 marks)'));
out.push(p('_Your teacher will play each recording **three** times. At A1 the first time is noise, the second is words and the third is meaning._', { color: '595959' }));
out.push(part('Part 1  ·  Four short conversations  (4 marks)', '🔊 **Track BT-1.** For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**19**  What time must he be at the gate?   **A** 6.45   **B** 7.00   **C** 7.15'));
out.push(q('**20**  Which shelf can she not reach?   **A** shelf 2   **B** shelf 3   **C** shelf 4'));
out.push(q('**21**  How late is he, and why?   **A** 20 minutes, the road   **B** 40 minutes, the bus   **C** 20 minutes, the bus'));
out.push(q('**22**  Who must he ask first about the swap?   **A** the supervisor   **B** the other storeman   **C** the office'));
out.push(sp());
out.push(part('Part 2  ·  Complete the message slip  (5 marks)', '🔊 **Track BT-2.** You will hear a telephone call. Write **one or two words or a number** in each gap.'));
out.push(sp());
out.push(table(['MESSAGE SLIP', ''], [
  ['For', 'Nour Mansour'],
  ['Caller\'s surname', '**23** ______'],
  ['How many letters', '**24** ______'],
  ['Telephone number', '**25** ______'],
  ['What it is about', '**26** ______'],
  ['He rings back at', '**27** ______'],
], [2, 1], { headFill: C.navy }));
out.push(sp());
out.push(part('Part 3  ·  A longer talk  (3 marks)', '🔊 **Track BT-3.** You will hear a supervisor talking to a new storeman. Choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**28**  Which end do you count the rows from?   **A** the door   **B** the wall   **C** the gate'));
out.push(q('**29**  What must you do before you sign a delivery note?   **A** read the name at the top   **B** count it yourself   **C** ask the driver'));
out.push(q('**30**  What must you never stand on?   **A** the ladder   **B** a carton   **C** the bottom shelf'));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about 6 minutes · 12 marks)'));
out.push(p('_Your teacher will ask you questions. Answer in **full sentences**. ⚠ **Never answer only "yes" or "no" — at work that is the same as saying nothing.** You can use Arabic to ask your teacher a question; the answers are in English._'));
out.push(sp());
out.push(box('Part 1  ·  About you and your work  (6 marks · your teacher asks each candidate)', [
  '**1**  What is your name? How do you spell your family name? How many letters is it?',
  '**2**  What do you do? Who is your supervisor?',
  '**3**  Which days do you work? Which day is the busy one?',
  '**4**  What time do you start and finish? Say one of those times two ways.',
  '**5**  Tell me where three things are at your work.',
  '**6**  What can you reach, and what can you not reach? What do you do then?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 2  ·  Talk together  (6 marks · the two candidates talk to each other)', [
  'Your teacher says: _"A lorry comes with twelve boxes on the paper. You count eleven. The driver is late and has four more stops. Talk together and decide what to do."_',
  'Talk for about **two minutes**. Remember to:',
  '•  say the **two numbers**: _The paper says twelve. I counted eleven._',
  '•  ask for time with a **number of minutes**: _I have not counted it yet. Two minutes._',
  '•  say what you will **write**: _one box short_, and who will **sign**',
  '•  **ask your partner** what they think, at least once',
  '•  **decide together** at the end, and say what you will tell the office.',
], C.lorange, C.orange));
out.push(sp());
out.push(box('How your teacher marks your speaking (12 marks)', [
  table(['', '5–6 marks', '3–4 marks', '0–2 marks'], [
    ['**Words and sentences** (6)', 'Uses Unit 1–6 language: full sentences with _am / is / are_, the -s on _he starts_, _on_ a day and _at_ a time, the five place words, a quantity with its unit, _can / cannot_, and the six telephone sentences.', 'Some good language, but repeats the same words, leaves the -s off, or gives a bare number with no unit.', 'Single words and bare yes / no; very little work language.'],
    ['**Being understood** (6)', 'Speaks slowly and clearly, says a name letter by letter when asked, reads a number back, asks the partner a question, and reaches a decision.', 'Answers when asked but waits; agrees with everything; sometimes hard to hear.', 'Needs a lot of help; hard to understand; no decision reached.'],
  ], [1.1, 1.8, 1.4, 1.1]),
], C.grey, C.navy));
out.push(sp());
out.push(box('Your result', [
  table(['Reading /18', 'Writing /18', 'Listening /12', 'Speaking /12', 'TOTAL /60'], [['', '', '', '', '']], [1, 1, 1, 1, 1]),
  '**42–60 = very good** · **30–41 = a pass — look again at your weakest paper** · **under 30 = work through Units 1–6 again with your teacher before Unit 7**',
  '⚠ **Thirty out of sixty is fifty per cent, which is the LanguageCert pass mark at this level**, and the four papers carry the same weight as they do in the examination — so your percentage here means something outside this classroom.',
  '⚠ **And the one thing to look at whatever your total: did you write FOUR sentences in Paper 2 Part 1?** **Count them. You have counted them six times in this book.**',
], C.lblue, C.navy));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Book 1 Test');
module.exports = out;
