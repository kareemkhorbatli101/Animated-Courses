// Proactive English B1 · Syria Edition · Book 1 · MID-BOOK TEST (Units 1–6)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('MID-BOOK TEST · Units 1–6'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading** (40 min) · **Writing** (30 min) · **Listening** (about 20 min) · **Speaking** (in pairs, about 8 minutes with your teacher).',
  '**Total: 60 marks** (Reading 20 · Writing 15 · Listening 15 · Speaking 10).',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  'Everything in this test has been taught in Units 1–6. Nothing in it is a surprise.',
  'If you finish early, read your writing once for **tense** and once for **the people you have left out**.',
], C.lblue, C.navy));

// ================= PAPER 1 =================
out.push(pb());
out.push(paper('PAPER 1 · READING (40 minutes · 20 marks)'));
out.push(box('Part 1 · Notices and short messages (5 marks)', [
  'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.',
], C.lteal, C.teal));
out.push(sp());
[
  ['**1**  PRINTING SHOP · _above the folding table_ — The first forty sheets of every job are printed and thrown away. They are not counted in the job and they are not to be saved.',
   '**A** The first forty sheets are kept for the next job.   **B** The first forty sheets are wasted on purpose.   **C** Forty sheets are added to every order.'],
  ['**2**  Fifteen now, not eleven. Four more have come in since October and the glue line was uneven in all four. I have written again and I have asked for one thing only: a name. — Mazen',
   '**A** Mazen wants the model withdrawn from the shops.   **B** Mazen has had eleven more telephones since October.   **C** Mazen has asked for a name and for nothing else.'],
  ['**3**  DEPOT NOTICE · Drivers are to complete the vehicle check before the first run. From Monday the sheet will be collected from the bus at the end of the day, and not from the office window at the start.',
   '**A** Drivers must sign the sheet at the office before they leave.   **B** The sheet will be collected later, so the check can be done at the bus.   **C** The vehicle check is no longer required.'],
  ['**4**  LABORATORY · Chamber readings are entered at the start of every shift, including readings that are the same as the day before. A column of identical numbers is evidence. A gap is not.',
   '**A** Every reading is entered, even an unchanged one.   **B** Only readings that have changed need to be entered.   **C** Readings are entered at the end of the shift.'],
  ['**5**  MODEL WORKSHOP · Students are not permitted in the workshop without a member of staff. A technician is on site until 20.00.',
   '**A** Students may never use the workshop.   **B** Students may use the workshop alone after 20.00.   **C** Students may use the workshop while the technician is there.'],
].forEach(([a, b]) => { out.push(model([a])); out.push(q(b)); });

out.push(pb());
out.push(box('Part 2 · Gapped text (5 marks)', [
  'Five sentences have been removed from the text. Choose from **A–H** the sentence which fits each gap. There are **three** sentences you do not need.',
], C.lteal, C.teal));
out.push(model([
  '**FOUR TIMES, AND ONE OF THEM ALONE**  · from a magazine for teachers',
  'A projector was put into a mathematics classroom in Damascus in January. The teacher in that room is forty-eight and had been teaching on a blackboard for twenty-four years. **(6)** ______',
  'By April she had used it four times. Three of those were with a fourteen-year-old boy standing beside her; once, on the eleventh of April, she did it alone, and it took her eleven minutes to put a single triangle on the wall. The lesson is forty-five minutes long. **(7)** ______',
  'She was asked to write a note for her head teacher in April, and the note did not say what anybody expected. It did not say that the projectors had been a success and it did not say that they had been a waste of money. **(8)** ______',
  'There were two things she still could not do. She could not move backwards through the pages, which meant that if a class did not follow something she could not return to it — and that, she wrote, is the reason she had used it four times and not forty. **(9)** ______',
  'What she asked for was small and exact: forty minutes, once, with somebody who knew the machine, in her own room, with the door shut. She had already been given two training afternoons in the hall, with nine other teachers and one machine. **(10)** ______',
]));
[
  '**A**  It said what she had done, with dates, and what she still could not do.',
  '**B**  She had been hearing that sentence from women of her age since she was thirty-five.',
  '**C**  Nobody had asked her whether she wanted one.',
  '**D**  She also could not switch it off, so she had been unplugging it at the wall.',
  '**E**  She had been teaching mathematics for twenty-four years before that.',
  '**F**  She had attended both of them, and she had used the machine four times.',
  '**G**  Thirty-one children watched her do it, and any of them could have done it in four seconds.',
  '**H**  The school bought six of them in the same week.',
].forEach(t => out.push(q(t)));

out.push(pb());
out.push(box('Part 3 · Vocabulary (6 marks)', [
  'For each question, choose the correct answer **A**, **B**, **C** or **D**.',
], C.lteal, C.teal));
out.push(model([
  '**THE BOOK UNDER THE COUNTER**',
  'Mazen Hariri has been repairing telephones at a counter in Shaalan **(11)** ______ 2017. He keeps a book of every fault he mends, and last September he began to **(12)** ______ a pattern in it: he was writing the same model down again and again, and by the end of the month he had recorded it eleven times.',
  'What he had not **(13)** ______ , until he put the eleven dates in a line, was that all eleven had been bought from the same two shops. The screen on that model is not held in a frame. It is held on by four plastic clips and then sealed round the edge with adhesive, and the adhesive is applied **(14)** ______ hand, with a brush, by a different person on every shift.',
  'He wrote to both shops in October. He is **(15)** ______ waiting for a reply from one of them. The other answered after seven months, in a letter of eleven lines which, he says, **(16)** ______ nothing at all.',
]));
[
  '**11**   **A** for   **B** since   **C** from   **D** during',
  '**12**   **A** notice   **B** watch   **C** look   **D** stare',
  '**13**   **A** noticed   **B** looked   **C** seemed   **D** appeared',
  '**14**   **A** by   **B** with   **C** in   **D** from',
  '**15**   **A** yet   **B** still   **C** already   **D** ever',
  '**16**   **A** says   **B** tells   **C** speaks   **D** talks',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 4 · Open cloze (4 marks)', [
  'Write **one** word for each gap. Write only one word.',
], C.lteal, C.teal));
out.push(model([
  '**ELEVEN RULES AND TWO**',
  'A printer in Damascus took down a list of eleven rules last month and replaced it **(17)** ______ a list of two.',
  'He had written all eleven himself, one at a time, over nineteen years, **(18)** ______ he had never read them all at once. When he finally did, he found that nine of them were things he does himself and had **(19)** ______ been asked of anybody.',
  'The two that survived are the two that matter, and both of **(20)** ______ have a reason behind them that costs money or fingers.',
]));

// ================= PAPER 2 =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (30 minutes · 15 marks)'));
out.push(box('Part 1 · An email (7 marks)', [
  'Read this email from your English friend **Sam** and the notes you have made. Write **100 words or more**.',
], C.lteal, C.teal));
out.push(model([
  '_"I have to write a page about myself for a course application and I do not know what to put. I have only ever had one job and nothing I have done feels finished. Everything on my page sounds like somebody describing a chair. Sam"_',
  '**Your notes:**  •  _Tell him what to count_  ·  _Explain the difference between what he has done and what he has been doing_  ·  _Give one example from your own page_  ·  _Warn him about one thing_',
]));
out.push(...lines(9));
out.push(pb());
out.push(box('Part 2 · An article or a story (8 marks)', [
  'Choose **one** of these. Write **100 words or more**.',
], C.lteal, C.teal));
out.push(model([
  '**Question 1 — an article.** You see this notice in an English-language magazine.',
  '_"**What nobody ever explained.** Tell us about something at your work, your home or your college that you did for a long time before you found out why — or found out that there was no reason at all. We will print the best articles."_',
  'Write your **article**.',
  '**Question 2 — a story.** Your English teacher has asked you to write a story. It must begin with this sentence:',
  '_"I had been doing it the same way for years, and then somebody asked me why."_',
  'Write your **story**.',
]));
out.push(p('I am answering **Question _____**', { bold: true }));
out.push(...lines(13));

// ================= PAPER 3 =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 20 minutes · 15 marks)'));
out.push(box('Part 1 · Five short extracts (5 marks)', [
  '🔊 **Track MT-1.** You will hear five short extracts. For each question choose **A**, **B** or **C**. You will hear each extract twice.',
], C.lteal, C.teal));
[
  '**21**  How long has the speaker been on nights?   **A** six months   **B** nine months   **C** eleven years',
  '**22**  What is the speaker correcting?   **A** who paid   **B** the order of events   **C** how long it took',
  '**23**  What must happen first?   **A** the drawer is opened   **B** the chart is read   **C** the drug is given',
  '**24**  What does the speaker say will happen?   **A** nobody will be watched by him   **B** everybody will be checked every day   **C** the work will be lost at once',
  '**25**  What is the speaker\'s situation?   **A** she has been refused   **B** she has been given permission   **C** she has never asked',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 2 · Complete the notes (5 marks)', [
  '🔊 **Track MT-2.** You will hear a woman explaining the history of a building. Write **one or two words or a number** in each gap.',
], C.lteal, C.teal));
out.push(box('THE BUILDING · what was done, and when', [
  'Built in **(26)** ______ as the offices of a textile company',
  'The fourth floor was extended over the **(27)** ______ in 1974',
  'Converted to a language centre in **(28)** ______',
  'Rooms 13 and 14 were made out of one **(29)** ______ office',
  'The **(30)** ______ was not re-wired when the rooms were divided',
], C.lyellow, C.orange));
out.push(sp());
out.push(box('Part 3 · An interview (5 marks)', [
  '🔊 **Track MT-3.** You will hear an interview with a printer. For each question choose **A**, **B** or **C**.',
], C.lteal, C.teal));
[
  '**31**  How long has he run the shop?   **A** four years   **B** nineteen years   **C** twenty-four years',
  '**32**  How many rules were on the old list?   **A** two   **B** nine   **C** eleven',
  '**33**  Why did he cross nine of them out?   **A** his staff had complained about them   **B** they were things he does himself   **C** the company told him to',
  '**34**  What made him write the new list?   **A** a man asked whether he could sweep later   **B** an inspection   **C** an accident in 2009',
  '**35**  What does he say about the rule concerning the rollers?   **A** it has never been broken   **B** it nearly cost him a thumb   **C** he has only just made it',
].forEach(t => out.push(q(t)));

// ================= PAPER 4 =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 8 minutes · 10 marks)'));
out.push(box('Part 1 · About you (4 marks) — your teacher asks each student', [
  'How long have you been studying English, and how long have you been in this class?',
  'Tell me about something you have done that you could put a number on.',
  'Tell me about something you have been doing that is not finished.',
  'What is one rule where you work or study that you have never had explained to you?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 4 · Talk together (6 marks) — the two students talk to each other', [
  'Your teacher gives you **one** of these to discuss for about three minutes. Talk to each other, not to your teacher.',
  '**Card A.** Some people say that every rule in a workplace should be written down. Others say that most of what is written down is not really a rule at all. Talk together about which of you is nearer to being right, and why. Say what you would write down and what you would take off the list.',
  '**Card B.** A page about yourself can give the years you have put in, or the number of things you have finished. Talk together about which of the two is more useful to a reader, and why — and about which one each of you tends to give.',
  '**Card C.** Something has gone wrong where you work. Talk together about how you would find out what happened: what you would write down first, in what order, and what you would be careful not to add.',
], C.lteal, C.teal));
out.push(sp());
out.push(box('How your teacher marks your speaking (10 marks)', [
  '**Grammar and vocabulary (3)** — the tenses of Units 1–6 used accurately: the two present tenses, the narrative past, the past perfect, the two perfects, the passive, and the obligation shapes.',
  '**Discourse management (3)** — answers long enough to be worth hearing, with reasons attached, and without long silences.',
  '**Pronunciation (2)** — understandable throughout; the weak forms of _have to_, _supposed to_ and _allowed to_ attempted.',
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
  'This is a **mid-book** test and it is not an examination. It exists to tell you which of the forty-eight lines in the six **I can…** boxes you have not got yet.',
  'Whatever your total, go back to the box for the unit where you lost most marks and read the eight lines again. The mark that matters is not out of sixty; it is how many of the forty-eight you can tick without hesitating.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Mid-Book Test');
