// Proactive Business English A1 · Syria Edition · END-OF-COURSE TEST (Units 1–12) — Test paper
//
// 100 marks, split Reading 30 · Writing 30 · Listening 20 · Speaking 20 — the A2 Key weighting
// (30 · 30 · 20 · 20 per cent) at full size, so a percentage here is comparable to the
// examination the learner sits at the end of the NEXT course.
//
// Fifty numbered questions, and they are Reading's thirty plus Listening's twenty. Writing and
// Speaking carry marks but no numbers, exactly as in the Book 1 Test.
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('END-OF-COURSE TEST  ·  Units 1–12'));
out.push(p('_Proactive Business English · A1 · Syria Edition · the whole of A1_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (40 min) · **Writing** (40 min) · **Listening** (about 25 min) · **Speaking** (in pairs, about 10 minutes with your teacher).',
  'Total: **100 marks** — **Reading 30 · Writing 30 · Listening 20 · Speaking 20**. ⚠ **That is the same weighting as the A2 Key examination** (30 · 30 · 20 · 20 per cent), **at full size** — so your percentage here means something outside this classroom.',
  '⚠ **This test covers the whole of A1: all twelve units, both books.** Your name and the count; the day and the shift; where things are; the delivery note; the telephone; full, empty and broken; asking for a thing; yesterday; safety and the word NO; the customer at the counter; and the note you leave.',
  'Everything in this test happens at work. Where a task asks about **your** work, you can use your real job or invent one — you are marked on the English, not on the job.',
  'Write your answers on this paper, clearly, in pen. You **cannot** use a dictionary or your telephone.',
  '⚠ **If you finish early, check five things:** every quantity has its **unit** · every month is in **letters** · every number you wrote down was **read back** · every _I did not_ has a **because** · and the note you wrote has a **name at the top and a time at the bottom**.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (40 minutes · 30 marks)'));
out.push(part('Part 1  ·  Notices  (8 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.'));
out.push(sp());
out.push(model(['**1**  _12 IS NOT A QUANTITY. 12 BOXES IS._']));
out.push(q('**A** Twelve is too many.   **B** A number needs a unit.   **C** Do not write numbers.'));
out.push(model(['**2**  _NOT COUNTED IT? DO NOT SIGN IT. SAY: I HAVE NOT COUNTED IT YET._']));
out.push(q('**A** Count before you sign, and say so.   **B** Sign and count afterwards.   **C** Never sign anything.'));
out.push(model(['**3**  _SHELF 1 = BOTTOM. SHELF 4 = TOP. COUNT ROWS FROM THE DOOR._']));
out.push(q('**A** Shelf 1 is the highest.   **B** Count the rows from the wall.   **C** Shelf 1 is the lowest, and rows start at the door.'));
out.push(model(['**4**  _DO NOT WRITE "FULL". WRITE HOW MANY._']));
out.push(q('**A** Full is enough.   **B** Say the number, not the word.   **C** Do not write on the sheet.'));
out.push(model(['**5**  _NO. NOT TODAY. ASK NOUR._']));
out.push(q('**A** Say no and nothing else.   **B** Say no, and say who can say yes.   **C** Never say no.'));
out.push(model(['**6**  _THREE RULES ON THIS WALL. NOT NINE. THESE THREE WE KEEP._']));
out.push(q('**A** There are nine rules.   **B** A few rules that are kept beat many that are not.   **C** The rules change every week.'));
out.push(model(['**7**  _EVERY PRICE ON THIS LIST HAS A DATE. NO DATE? ASK._']));
out.push(q('**A** The prices never change.   **B** A price with no date cannot be trusted.   **C** Do not tell customers the price.'));
out.push(model(['**8**  _NOTES ON THIS BENCH NEED A NAME AT THE TOP._']));
out.push(q('**A** Write NOTE at the top.   **B** Write who it is for.   **C** Do not leave notes.'));

out.push(pb());
out.push(part('Part 2  ·  Three people at Sham Trading  (5 marks)', 'Read about three people. For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(table(['A  Hala – the counter', 'B  Marwan – driver', 'C  Samih – storeman'], [[
  'Hala opens the shop at half past six and she is the only one who can open it, because the key is hers. She writes the date on the price list every time a price changes, and she has done that since January. When a customer asks for a thing the shop has not got, she says what she has got instead, and she says when the other thing comes. She does not say _no_ and stop.',
  'Marwan drives to Homs on Wednesday and to Hama on Sunday, and he is always in a hurry, because he has four more stops after this one. He has learned to wait two minutes while somebody counts, because the morning he did not wait cost him a second trip back. He signs next to the storeman now. He cannot read the Arabic in the gate book.',
  'Samih starts at seven and reads the shift board before he does anything else. He can reach shelf three but not shelf four, so he waits for the ladder. Last Friday he came in to a note with his name on the top: four lines, thirty words, and the last line told him what to do. He did it before seven o\'clock and nobody had to ask him twice.']], [1, 1, 1]));
out.push(sp());
out.push(q('**9**  Who does a job that nobody else in the building can do?     A     B     C'));
out.push(q('**10**  Who changed what they do because of one bad morning?     A     B     C'));
out.push(q('**11**  Who acted on a piece of paper without being spoken to?     A     B     C'));
out.push(q('**12**  Who offers a second thing when the first thing is not there?     A     B     C'));
out.push(q('**13**  Who cannot read something that is written at their own work?     A     B     C'));

out.push(pb());
out.push(part('Part 3  ·  A longer text  (6 marks)', 'Read the text and choose the correct answer **A**, **B** or **C**.'));
out.push(sp());
out.push(model([
  '**My first year in the store — by Ammar Zreik**',
  'I am twenty-three now. A year ago I started as a storeman at Sham Trading and I could say my name and almost nothing else.',
  'The counting came first. Shelf one is the bottom, shelf four is the top, and the rows start at the door. I learned to write _fifteen boxes_ and not _fifteen_, because a number with no unit is a number somebody has to come back and ask about. I learned that _full_ is not a quantity either. In March I wrote _full_ on a sheet about the big store and on Monday there were two rolls left.',
  'The hardest thing was the telephone, and the hardest part of the telephone was not talking. I say _Sham Trading, good morning_ and then I stop and listen. I spell the name back. I read the number back. Last month I took eleven messages and all eleven were right, and one of them was a man in Beirut who said he had telephoned four times before and nobody had ever read his number back to him.',
  'The thing I was most afraid of was saying _I did not do it_. In July I did not wash the trays, because the water went off at half past five, and I wrote that down with the _because_ on the end. I thought Samih would be angry. He filled two buckets the night before and the bake went out on time, and he said thank you for the note. Nobody has ever been angry with me about a thing I did not do and explained.',
  'In September a note of mine worked for a man it was not written to. I left it for Samih, who was ill, and Hani picked it up — and Hani does not read English. He took it to Nour and Nour read it to him in twenty seconds, because it was four lines long. Abu Yasser asked me why it had worked and I could not answer him then. I can now. The name at the top made Hani pick it up. The four lines made it short enough to be read aloud by somebody else.',
]));
out.push(sp());
out.push(q('**14**  What did Ammar learn to write instead of _fifteen_?   **A** a lot   **B** fifteen boxes   **C** full'));
out.push(q('**15**  What happened after he wrote _full_ on the sheet?   **A** The store was full.   **B** Two rolls were left on Monday.   **C** Nobody read the sheet.'));
out.push(q('**16**  What is the hardest part of the telephone for him?   **A** saying the company name   **B** not talking   **C** writing the name'));
out.push(q('**17**  Why was the man in Beirut surprised?   **A** His number was read back to him.   **B** Ammar spelled his name wrong.   **C** Nobody answered.'));
out.push(q('**18**  What did Samih do about the trays?   **A** He was angry.   **B** He filled two buckets the night before.   **C** He washed them himself at half past five.'));
out.push(q('**19**  Why did the September note work for Hani?   **A** It was written to him.   **B** He reads English well.   **C** It had a name on it and it was short enough to read aloud.'));

out.push(pb());
out.push(part('Part 4  ·  One word in each gap  (6 marks)', 'Write **ONE** word in each gap.'));
out.push(sp());
out.push(model([
  '**A note on the store wall**',
  'The big delivery comes (20) ______ Monday. Always on Monday.',
  'Be at the gate (21) ______ seven o\'clock — fifteen minutes before the lorry.',
  'The labels are in the small box, (22) ______ the top shelf. Not behind the paper: in front of it.',
  'Yesterday I (23) ______ not count the coins, because there were four customers waiting.',
  'Please wash the trays (24) ______ you start. The water goes off early.',
  'You (25) ______ not carry two trays down the back step. Hala fell there.',
]));

out.push(pb());
out.push(part('Part 5  ·  The right word  (5 marks)', 'For each question, choose the word that makes the sentence correct. Circle **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**26**  The paper says sixteen. I ______ fifteen.   **A** count   **B** counted   **C** counting'));
out.push(q('**27**  I ______ not do row four, because the ladder was in the yard.   **A** did   **B** do   **C** done'));
out.push(q('**28**  There are four boxes ______ the shelf.   **A** in   **B** on   **C** at'));
out.push(q('**29**  ______ wash the trays before you start.   **A** You must not   **B** Please   **C** Do not'));
out.push(q('**30**  I ______ reach shelf three, but I ______ reach shelf four.   **A** can / can   **B** cannot / can   **C** can / cannot'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (40 minutes · 30 marks)'));
out.push(part('Part 1  ·  A telephone message  (8 marks)', 'Write **four sentences, about 30 words**.'));
out.push(sp());
out.push(box(null, [
  'A man telephoned for your supervisor while she was out. Write the message for her.',
  'In your message:  •  say **who** rang, and **when**  •  say **what** he wants  •  say **when he rings back**.',
  '⚠ **Spell nothing you did not hear spelled, and write the number you read back.**',
], C.grey, C.navy));
out.push(...lines(5));
out.push(sp());
out.push(part('Part 2  ·  The note you leave  (10 marks)', 'Write **four sentences, about 30 words**.'));
out.push(sp());
out.push(box(null, [
  'You are going home at the end of your shift. The person on the next shift will come in after you have gone. Write the note you leave for them.',
  'In your note:  •  **who** it is for  •  **what you did**, exactly  •  **what you did not do, and why**  •  **what you want them to do**.',
  '⚠ **And a name at the top and a day and a time at the bottom.**',
], C.grey, C.navy));
out.push(...lines(6));
out.push(sp());
out.push(part('Part 3  ·  A note of your own  (12 marks)', 'Write **40 words or more**.'));
out.push(sp());
out.push(box(null, [
  'A lorry has come to your work with goods and **no delivery note**. Write your own note so that both you and the driver have a paper.',
  'On your note:  •  the **date** _(with the month in letters)_ and the **time**  •  the **driver\'s name** and the **lorry number**  •  the goods, with a **quantity and a unit**  •  one line saying what you did **NOT** check  •  a space for **both** signatures.',
], C.grey, C.navy));
out.push(...lines(11));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 25 minutes · 20 marks)'));
out.push(p('_Your teacher will play each recording **three** times. At A1 the first time is noise, the second is words and the third is meaning._', { color: '595959' }));
out.push(part('Part 1  ·  Five short conversations  (5 marks)', '🔊 **Track ET-1.** For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**31**  What time must he be at the gate?   **A** 6.45   **B** 7.00   **C** 7.15'));
out.push(q('**32**  How many are left?   **A** none   **B** two   **C** twenty'));
out.push(q('**33**  Why did she not count the coins?   **A** She forgot.   **B** There were customers waiting.   **C** The till was locked.'));
out.push(q('**34**  What does he say instead of _no_?   **A** nothing   **B** not today, and who to ask   **C** never'));
out.push(q('**35**  Who is the note for?   **A** everybody   **B** Samih   **C** whoever opens up'));
out.push(sp());
out.push(part('Part 2  ·  Complete the message slip  (6 marks)', '🔊 **Track ET-2.** You will hear a telephone call. Write **one or two words or a number** in each gap.'));
out.push(sp());
out.push(table(['MESSAGE SLIP', ''], [
  ['For', 'Nour Mansour'],
  ['Caller\'s surname', '**36** ______'],
  ['How many letters', '**37** ______'],
  ['Telephone number', '**38** ______'],
  ['What it is about', '**39** ______'],
  ['How many are missing', '**40** ______'],
  ['He rings back at', '**41** ______'],
], [2, 1], { headFill: C.navy }));
out.push(sp());
out.push(part('Part 3  ·  Complete the handover note  (5 marks)', '🔊 **Track ET-3.** You will hear a woman reading her note aloud. Write **one to four words or a number** in each gap.'));
out.push(sp());
out.push(table(['THE NOTE SHE LEFT', ''], [
  ['It is for', '**42** ______'],
  ['She did', '**43** ______'],
  ['She did not', '**44** ______'],
  ['Because', '**45** ______'],
  ['He must', '**46** ______'],
], [2, 1], { headFill: C.navy }));
out.push(sp());
out.push(part('Part 4  ·  A longer talk  (4 marks)', '🔊 **Track ET-4.** You will hear a supervisor talking to a new storeman on his first morning. Choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**47**  What must you do before you sign a delivery note?   **A** read the name at the top   **B** count it yourself   **C** ask the driver'));
out.push(q('**48**  What must you never stand on?   **A** the ladder   **B** a carton   **C** the bottom shelf'));
out.push(q('**49**  What must go on the end of _I did not do it_?   **A** sorry   **B** the reason   **C** nothing'));
out.push(q('**50**  How many rules are on the wall?   **A** three   **B** nine   **C** none'));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about 10 minutes · 20 marks)'));
out.push(p('_Your teacher will ask you questions. Answer in **full sentences**. ⚠ **Never answer only "yes" or "no" — at work that is the same as saying nothing.** You can use Arabic to ask your teacher a question; the answers are in English._'));
out.push(sp());
out.push(box('Part 1  ·  About you and your work  (8 marks · your teacher asks each candidate)', [
  '**a**  What is your name? How do you spell your family name? How many letters is it?',
  '**b**  What do you do? Who is your supervisor? Which days do you work?',
  '**c**  Tell me where three things are at your work.',
  '**d**  Tell me one thing you did yesterday, and one thing you did **not** do.',
  '**e**  What is broken at your work? How long has it been broken?',
  '**f**  Tell me about a time you had to say no to somebody. What did you say after it?',
  '**g**  What is the first thing you tell the next shift?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 2  ·  Talk together  (12 marks · the two candidates talk to each other)', [
  'Your teacher says: _"A lorry comes at ten to six in the evening with twelve boxes on the paper. You count eleven, and one of the eleven is crushed. The driver has two more stops and the office is shut. Talk together and decide what to do."_',
  'Talk for about **four minutes**. Remember to:',
  '•  say the **two numbers**: _The paper says twelve. I counted eleven._',
  '•  ask for time with a **number of minutes**: _I have not counted it yet. Two minutes._',
  '•  describe the state of the box, in **words, not a tick**: _one is crushed_',
  '•  say what you will **write**, and **who will sign** it',
  '•  **ask your partner** what they think, at least twice',
  '•  say what you will **not** do, and **why** — and the _why_ is the useful part',
  '•  **decide together** at the end, and say what you will write in the note you leave.',
], C.lorange, C.orange));
out.push(sp());
out.push(box('How your teacher marks your speaking (20 marks)', [
  table(['', '8–10 marks', '4–7 marks', '0–3 marks'], [
    ['**Words and sentences** (10)', 'Uses A1 language from both books: full sentences, the -s on _he starts_, _on_ a day and _at_ a time, the five place words, a quantity with its unit, _can / cannot_, seven past verbs, _I did not … because …_, _please_ for work and _must_ for safety, and a word for a state instead of a tick.', 'Some good language, but repeats the same words, leaves the -s off, gives a bare number with no unit, or says _I did not_ with no reason after it.', 'Single words and bare yes / no; very little work language.'],
    ['**Being understood** (10)', 'Speaks slowly and clearly, says a name letter by letter, reads a number back, says no and then says who can say yes, asks the partner a question at least twice, and reaches a decision that somebody could act on.', 'Answers when asked but waits; agrees with everything; sometimes hard to hear; reaches a decision nobody could act on.', 'Needs a lot of help; hard to understand; no decision reached.'],
  ], [1.2, 1.7, 1.4, 1.1]),
], C.grey, C.navy));
out.push(sp());
out.push(box('Your result', [
  table(['Reading /30', 'Writing /30', 'Listening /20', 'Speaking /20', 'TOTAL /100'], [['', '', '', '', '']], [1, 1, 1, 1, 1]),
  '**70 and over = very good** · **50 to 69 = a pass; look again at your weakest paper** · **under 50 = work with your teacher on your weakest paper before you start A2**',
  '⚠ **Fifty out of a hundred is the LanguageCert pass mark at this level**, and the four papers here carry the same weight as they do in the examination — so this percentage is the first one you have that means something outside this classroom.',
  '⚠ **And the one thing to look at whatever your total: Paper 2 Part 2.** **Did you write four sentences? Is there a name at the top and a time at the bottom? Is there a _because_?** **That one task is the whole of A1 on a single sheet of paper, and you have practised it twelve times.**',
], C.lblue, C.navy));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Syria Edition · End-of-Course Test');
module.exports = out;
