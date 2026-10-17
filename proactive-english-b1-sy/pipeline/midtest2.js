// Proactive English B1 · Syria Edition · Book 2 · MID-BOOK TEST (Units 13–18)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('MID-BOOK TEST · Units 13–18'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading** (40 min) · **Writing** (35 min) · **Listening** (about 20 min) · **Speaking** (in pairs, about 8 minutes with your teacher).',
  '**Total: 60 marks** (Reading 20 · Writing 15 · Listening 15 · Speaking 10).',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  'Everything in this test has been taught in Units 13–18. Nothing in it is a surprise.',
  'If you finish early, read your writing once for **the verb patterns** and once for **the people you have left out**.',
], C.lblue, C.navy));

// ================= PAPER 1 =================
out.push(pb());
out.push(paper('PAPER 1 · READING (40 minutes · 20 marks)'));
out.push(box('Part 1 · Notices and short messages (5 marks)', [
  'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.',
], C.lteal, C.teal));
out.push(sp());
[
  ['**1**  DEPOT NOTICE · _muster room_ — Check sheets used to be collected at the gate. Since 2019 they have been handed in at the office window. No minute of the change exists and nobody at the time said how long it was to last.',
   '**A** The present arrangement was never a decision.   **B** The arrangement at the gate was formally agreed.   **C** Sheets no longer have to be handed in.'],
  ['**2**  I offered to take every escalation call for a month. Nobody asked me to. On the Thursday I refused one of them and gave my reason in a sentence, and he made that call himself. — Nour',
   '**A** She was told to take the escalation calls.   **B** She volunteered, and then turned one of them down.   **C** She refused to do the month at all.'],
  ['**3**  MACHINE 2 · If the red light comes on twice: **1** write down the code and the time. **2** telephone me. _(This card replaces the card of 2 October.)_',
   '**A** The code is no longer recorded.   **B** The card of 2 October is still in force.   **C** The code is written down before the call is made.'],
  ['**4**  WARD 4 · The three-night blocks apply to all night staff from 27 October. Staff who are used to the five-night pattern should read the new rota before that date. The trial report will not be reissued.',
   '**A** The five-night pattern continues for staff already on it.   **B** The blocks now apply to everybody on nights.   **C** A new report will be circulated with the rota.'],
  ['**5**  LABORATORY · I am not asking for anything in this note. There are four of us and the wards telephone me every time, because I did the course. A list of the four of us, in any order, given to the wards, would be enough.',
   '**A** The writer wants to be taken off the night calls.   **B** The writer wants the other three spoken to.   **C** The writer is asking for a list, and for nothing more.'],
].forEach(([a, b]) => { out.push(model([a])); out.push(q(b)); });

out.push(pb());
out.push(box('Part 2 · Gapped text (5 marks)', [
  'Five sentences have been removed from the text. Choose from **A–H** the sentence which fits each gap. There are **three** sentences you do not need.',
], C.lteal, C.teal));
out.push(model([
  '**THE SHEET ON THE WALL**  · from a magazine for teachers',
  'In September a teacher in Damascus pinned a sheet of paper to the wall of her classroom and asked eleven adult students to write one prediction each on it. **(6)** ______',
  'There were three rules. It had to be about something they would find out; it had to carry a date on which it could be tested; and nobody was to take anything down, including the person who had written it. **(7)** ______',
  'By the end of November four of the test dates had fallen, and three of the four predictions had turned out to be right about the event. What interested the teacher was the other half of each one — the reason written underneath it. **(8)** ______',
  'She had put up a prediction of her own, which was that eight of the eleven would be right about the event and wrong about the reason. She was wrong, and she said so in front of the class. **(9)** ______',
  'What she had left out was her own course. For a year those eleven people had been made to write a reason with a count in it underneath every claim they made. **(10)** ______',
]));
[
  '**A**  She had based it on six years of her own sheets with six other classes.',
  '**B**  The sheet is still on the wall, and it comes down again in June.',
  '**C**  She asked for a name as well as a prediction, because an unsigned prediction is a conversation and a signed one is a record.',
  '**D**  All three had a counted pattern behind them, and the one that was wrong had a judgement with a number attached to it.',
  '**E**  Nobody in the room had ever been asked to write one before.',
  '**F**  The third rule was the one the class argued about.',
  '**G**  So the one thing her own prediction had left out was the thing she had spent the year doing.',
  '**H**  None of the eleven could be tested before the spring.',
].forEach(t => out.push(q(t)));

out.push(pb());
out.push(box('Part 3 · Vocabulary (6 marks)', [
  'For each question, choose the correct answer **A**, **B**, **C** or **D**.',
], C.lteal, C.teal));
out.push(model([
  '**ONE PAGE AND NINE NAMES**',
  'A man who repairs telephones at a counter in Shaalan spent six weeks **(11)** ______ off a letter he had already written. He could not say what was wrong with it, and neither could anybody else, until a colleague read it and asked him one question.',
  'His first sentence said that it **(12)** ______ been agreed in March that faulty units would be replaced within thirty days. She asked him who had agreed it, with whom, and who had told him so. The whole letter **(13)** ______ over.',
  'He knew all three answers — a man\'s name, a telephone call and a week in March — and he had left every one of them **(14)** ______ . He had believed that a letter with no names in it **(15)** ______ more like business, and that a letter with names in it would read as a complaint about people.',
  'The new letter is one page long instead of two. It has nine names and dates in it, and it asks **(16)** ______ one thing only, by one date, and says what it is not asking for.',
]));
[
  '**11**   **A** putting   **B** taking   **C** setting   **D** giving',
  '**12**   **A** has   **B** would   **C** was   **D** had',
  '**13**   **A** went   **B** fell   **C** dropped   **D** came',
  '**14**   **A** off   **B** away   **C** down   **D** out',
  '**15**   **A** heard   **B** listened   **C** sounded   **D** spoke',
  '**16**   **A** to   **B** for   **C** about   **D** of',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 4 · Open cloze (4 marks)', [
  'Write **one** word for each gap. Write only one word.',
], C.lteal, C.teal));
out.push(model([
  '**SEVEN AGAINST FOUR**',
  'A night sister wrote last week out as nothing **(17)** ______ verbs. Eleven lines.',
  'The four things she had committed to are the week as it appears in a report. The seven she had not done are the week as it actually went, and they took most of the hours.',
  'Four of the seven turned out to be one question, and she had been treating them as **(18)** ______ they were four separate jobs. That is **(19)** ______ none of them was finished. **(20)** ______ she had not written the week out in its verbs, she would still be carrying four.',
]));

// ================= PAPER 2 =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (35 minutes · 15 marks)'));
out.push(box('Part 1 · An email (7 marks)', [
  'Read this email from your English friend **Sam** and the notes you have made. Write **140 words or more**.',
], C.lteal, C.teal));
out.push(model([
  '_"I said out loud at work in September what I thought would happen with our new system, and it has turned out about half right. My manager has been teasing me about it ever since, and now I am not sure that saying what you think will happen is a good idea at all. What do you think? Sam"_',
  '**Your notes:**  •  _Tell him the three things a prediction needs_  ·  _Explain why the negative half is usually the useful half_  ·  _Tell him what to write underneath it about his own blind spot_  ·  _Give one example of your own, with a date_',
]));
out.push(...lines(11));
out.push(pb());
out.push(box('Part 2 · An article or a story (8 marks)', [
  'Choose **one** of these. Write **140 words or more**.',
], C.lteal, C.teal));
out.push(model([
  '**Question 1 — an article.** You see this notice in an English-language magazine.',
  '_"**What are you used to that is in nobody\'s job?** Tell us about something you do at work that is not in anybody\'s job description, roughly when it became normal, and what you think should happen about it. We will print the best articles."_',
  'Write your **article**.',
  '**Question 2 — a story.** Your English teacher has asked you to write a story. It must begin with this sentence:',
  '_"I had been putting it off since September, and then I had to write it down."_',
  'Write your **story**.',
]));
out.push(p('I am answering **Question _____**', { bold: true }));
out.push(...lines(14));

// ================= PAPER 3 =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 20 minutes · 15 marks)'));
out.push(box('Part 1 · Five short extracts (5 marks)', [
  '🔊 **Track MT2-1.** You will hear five short extracts. For each question choose **A**, **B** or **C**. You will hear each extract twice.',
], C.lteal, C.teal));
[
  '**21**  What does the speaker say she will not know by October?   **A** whether the second trolley stays   **B** whether the trial will be extended   **C** who wrote the old rota',
  '**22**  What is the speaker\'s regret?   **A** that he wrote the letter at all   **B** that he asked too many people   **C** that he did not ask in April',
  '**23**  Which row does the speaker say decides it?   **A** the price   **B** the wheel diameter   **C** the guarantee',
  '**24**  What has become normal for the speaker, and how long did it take?   **A** waking at four in the afternoon, eleven days   **B** the three-night blocks, three weeks   **C** the new rota, two months',
  '**25**  What did the speaker refuse to do?   **A** write up a fault   **B** telephone a customer   **C** take the escalation calls',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 2 · Complete the notes (5 marks)', [
  '🔊 **Track MT2-2.** You will hear a man explaining how something used to be done at a bus depot. Write **one or two words or a number** in each gap.',
], C.lteal, C.teal));
out.push(box('HOW THE CHECK SHEETS USED TO BE COLLECTED', [
  'The sheets were taken from the drivers by the man on the **(26)** ______',
  'He put them in a **(27)** ______ at the end of each day',
  'The clerk came out for it once a week, on a **(28)** ______',
  'The arrangement was changed in **(29)** ______',
  'The second reason for it: no sheet was ever carried **(30)** ______',
], C.lyellow, C.orange));
out.push(sp());
out.push(box('Part 3 · An interview (5 marks)', [
  '🔊 **Track MT2-3.** You will hear an interview with a supervisor about an instruction card. For each question choose **A**, **B** or **C**.',
], C.lteal, C.teal));
[
  '**31**  What did the card actually tell the technician to do?   **A** write the code down   **B** telephone before the light came on   **C** stop writing the codes down',
  '**32**  How did the supervisor find out?   **A** the technician brought the card to his desk   **B** the engineer told him   **C** he re-read the card himself',
  '**33**  What had he been thinking about the technician for three weeks?   **A** that he was careless   **B** that he was being obstructive   **C** that he had not read the card',
  '**34**  How many codes can he give the engineer, and how many should there be?   **A** none of about thirty   **B** thirty of about seven   **C** seven of about thirty',
  '**35**  What does he now ask of every card?   **A** that it is shorter   **B** that it contains none of five particular verbs   **C** that somebody else writes it',
].forEach(t => out.push(q(t)));

// ================= PAPER 4 =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 8 minutes · 10 marks)'));
out.push(box('Part 1 · About you (4 marks) — your teacher asks each student', [
  'Tell me about something that is already arranged in your life, with the date.',
  'Tell me about something you used to do at work that you do not do now — and say what replaced it.',
  'Tell me about something you are getting used to, and how far through you are.',
  'Tell me about something you agreed to do this month, and something you refused to do.',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 4 · Talk together (6 marks) — the two students talk to each other', [
  'Your teacher gives you **one** of these to discuss for about three minutes. Talk to each other, not to your teacher.',
  '**Card A.** Some people say that a prediction should always be written down with a date on it. Others say that writing predictions down only makes people cautious. Talk together about which of you is nearer to being right, and about what you would each be prepared to put on a wall with your name on it.',
  '**Card B.** When something is changed at work, the new arrangement is usually written down and the reason for the old one is not. Talk together about why that happens and what could be done about it — and about who in each of your workplaces would know the reasons.',
  '**Card C.** Most of what an adult does in a working week is in the things they did not do. Talk together about whether that is true of your own weeks, and about what you would each put at the top of such a list.',
], C.lteal, C.teal));
out.push(sp());
out.push(box('How your teacher marks your speaking (10 marks)', [
  '**Grammar and vocabulary (3)** — the forms of Units 13–18 used accurately: the future forms, _will_ and _won\'t_ for a prediction, _should have_ and the third conditional, comparatives with a quantity, the four habit forms, and the verb patterns.',
  '**Discourse management (3)** — answers long enough to be worth hearing, with a date, a figure or a reason attached, and without long silences.',
  '**Pronunciation (2)** — understandable throughout; the weak forms of _to_ between two verbs, and /ˈjuːstə/ in all four of its uses, attempted.',
  '**Interactive communication (2)** — in Part 4, listening to your partner, asking them something, and disagreeing without stopping the conversation.',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Your result', [
  '',
], C.grey, C.navy));
out.push(table(['Paper', 'Marks', 'Out of'], [
  ['Paper 1 · Reading', '', '20'],
  ['Paper 2 · Writing', '', '15'],
  ['Paper 3 · Listening', '', '15'],
  ['Paper 4 · Speaking', '', '10'],
  ['**TOTAL**', '', '**60**'],
], [3, 1, 1]));
out.push(sp());
out.push(box('What to do with the number', [
  'This is a **mid-book** test and it is not an examination. It exists to tell you which of the forty-eight lines in the six **I can…** boxes of Units 13–18 you have not got yet.',
  'Whatever your total, go back to the box for the unit where you lost most marks and read the eight lines again. The mark that matters is not out of sixty; it is how many of the forty-eight you can tick without hesitating.',
  'Two places lose marks every year: the four habit forms of Unit 17 — _used to_, _would_, _be used to_, _get used to_ — and the conditionals of Unit 15. If you lost marks in either, those are the two cycles to re-read before Unit 19.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Mid-Book Test');
