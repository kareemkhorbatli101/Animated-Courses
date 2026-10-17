// Proactive English B2 · Syria Edition · Book 2 · MID-BOOK TEST (Units 13–18)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('MID-BOOK TEST · Units 13–18'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading and Use of English** (40 min) · **Writing** (60 min) · **Listening** (about 25 min) · **Speaking** (in pairs, about 12 minutes with your teacher).',
  '**Total: 60 marks** (Reading and Use of English 20 · Writing 15 · Listening 15 · Speaking 10).',
  '**All four Speaking parts are in this test.** The three Reading parts that are not here — Parts 1, 5 and 6 — are all in the End-of-Book Test, which carries every one of the seven.',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  'Everything in this test has been taught in Units 13–18. Nothing in it is a surprise.',
  '⚠ If you finish early, read your writing twice: once for **the first sentence of each piece** — is the question answered in it? — and once for **every figure, to ask whether anything is compared with it.**',
], C.lblue, C.navy));

// ================= PAPER 1 =================
out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (40 minutes · 20 marks)'));
out.push(box('Part 7 · Multiple matching (6 marks)', [
  'You are going to read four accounts by people who had to judge something, put a case or summarise a document. For questions **1–6**, choose from the people **A–D**. **The people may be chosen more than once.**',
], C.lteal, C.teal));
out.push(model([
  '**A — a quality manager**',
  '_For three years I answered an argument that nobody had made. I had been telling suppliers that paperwork matters, and no supplier had ever said it did not. The real complaint came from a driver and took him forty seconds: a refusal costs him two days, and he had not filled in the form — a clerk had, in an office he has never been in. The figure that convinced me was my own. Eleven of the nineteen refusals last year fall in one fortnight of August, which is the fortnight our own paperwork clerk was on leave. I have not dropped the rule; a consignment with no batch numbers cannot be traced. But I have no answer to the two days and I am not going to pretend I have one._',
  '**B — a contracts clerk**',
  '_I was told to put a case that rested on a figure I had not checked, and I put it. The other side checked it in four minutes, the tender was reopened, and we lost it. The figure was wrong by about a fifth. What I had not understood, and it took me a year, is that the person who told me to use it was the person it cost most. I now send two sentences in writing before any meeting of that kind: what I shall say, and the one figure I cannot say. Nobody has ever objected to the second sentence, which is not what I expected._',
  '**C — a sub-editor**',
  '_Four thousand words arrive and I have three hundred, twice a week. For six years I kept everything in proportion: a quarter of the submission on costs, so a quarter of my page on costs. The result was faithful and it was no use at all to a reader who had to act, because he still had to read all of it and then decide for himself, which is what he had sent the submission to me to avoid. I now print three labels on the page. The hardest of the three to learn was the last, which is one sentence long. I used to spend a third of my space listing what did not matter._',
  '**D — a teacher**',
  '_I was given three words on an observation form in November of my first year and I did not understand them until the following December. I taught about forty lessons that year that were not the lessons I would have taught. What I believe now is that the woman who wrote the three words could not have explained them either, which is a worse problem and a fixable one. So I publish the weighting before the first observation, and at the bottom of every assessment I write which of my three criteria I am least sure of — this year it is the one that has passed everybody, and I say so to the person I am assessing._',
]));
[
  '**1**  Which person now puts something in writing before a meeting?',
  '**2**  Which person produced something faithful that was of no use to the person who had to act?',
  '**3**  Which person believes that the author of a judgement could not have explained it?',
  '**4**  Which person has kept a rule while admitting an objection they cannot answer?',
  '**5**  Which person tells the person being judged which part of the method is weakest?',
  '**6**  Which person was persuaded by a figure taken from their own records?',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 3 · Word formation (5 marks)', [
  'For questions **7–11**, use the word given in capitals at the end of some of the lines to form a word that fits in the gap.',
], C.lteal, C.teal));
out.push(model([
  '**WHAT THE SECOND READER IS FOR**',
  'A page you have written yourself always has a certain **(7)** ______________ about it, and that is the difficulty.   **PLAUSIBLE**',
  'The **(8)** ______________ of forty pages to one feels like an achievement in itself.   **REDUCE**',
  'And the **(9)** ______________ of your own judgement is never in doubt while you are the only person applying it.   **CONSISTENT**',
  'What a second reader supplies is not praise but **(10)** ______________ — the quiet correction of an interval, a scope or a source.   **REFUTE**',
  'For the **(11)** ______________ of a long document is only ever as good as the question it was made to answer.   **DISTIL**',
]));
out.push(sp());
out.push(box('Part 2 · Open cloze (4 marks)', [
  'For questions **12–15**, think of the word which best fits each gap. **Use only one word in each gap.**',
], C.lteal, C.teal));
out.push(model([
  '**THE FIGURE AT WHICH SOMEBODY ACTS**',
  'No summary can be more exact **(12)** ______ the thing it summarises, and a figure that is not compared **(13)** ______ anything may safely be rounded. A figure at which somebody acts may not. Rounding such a figure does not change the measurement; it changes **(14)** ______ side of the threshold the measurement falls on. And the word _about_, which looks like modesty, is **(15)** ______ fact a precise claim about how the figure was obtained.',
]));
out.push(sp());
out.push(box('Part 4 · Key-word transformations (5 marks)', [
  'For questions **16–20**, complete the second sentence so that it means the same as the first. **Use the word given and between two and five words, including the word given.**',
], C.lteal, C.teal));
[
  '**16**  It is impossible to appeal against a threshold that was genuinely not met.   **POINT**   There ______________________ appealing against a threshold that was genuinely not met.',
  '**17**  I did not understand the three words until the following December.   **NOT**   It ______________________ the following December that I understood the three words.',
  '**18**  However good the rest of the application was, I would not accept failure here.   **MATTER**   ______________________ how good the rest of the application was, I would not accept failure here.',
  '**19**  Nobody checked the figure before the meeting.   **CHECKED**   The figure ______________________ before the meeting.',
  '**20**  The page was accurate and it was still of no use.   **SPITE**   ______________________ being accurate, the page was of no use.',
].forEach(t => out.push(q(t)));

// ================= PAPER 2 =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (60 minutes · 15 marks)'));
out.push(box('Part 1 · The essay (8 marks) — you must do this question', [
  'In your English class you have been talking about how organisations judge people and how they pass information on. Your teacher has asked you to write an essay.',
  '⚠ **Both tasks in this paper are 180–220 words, and the ruled space is about the right length.** If you reach the last line you are at about 220, which is the top of the band and not a target. **Spend four minutes on a four-line plan and four minutes reading it back.**',
], C.lteal, C.teal));
out.push(model([
  '_"A short document is always better than a long one."_ Do you agree?',
  'Write an essay using **all the notes** and giving **reasons** for your point of view.',
  'Notes — write about: **1** the reader\'s time   **2** what gets left out   **3** ______________ _(your own idea)_',
  'Write **180–220 words**.',
]));
out.push(...lines(20));
out.push(pb());
out.push(box('Part 2 · A review or a report (7 marks)', [
  'Choose **one** of these. Write **180–220 words**.',
], C.lteal, C.teal));
out.push(model([
  '**Question 1 — a review.** You see this notice in an English-language magazine for people who manage others.',
  '_"**The form you have to fill in.** Review a form, a procedure or a system you have had to use at work or at college. Tell us who it works for, who it does not, what decided your verdict, and what is wrong with it. We will print the best reviews."_',
  'Write your **review**.',
  '**Question 2 — a report.** Your manager has asked you to write a report on how decisions taken in meetings reach the people who have to carry them out.',
  'Your report should **say what those people are told now**, **say what they are not told**, and **recommend one change**, with its cost.',
  'Write your **report**, with headings.',
]));
out.push(p('I am answering **Question _____**', { bold: true }));
out.push(...lines(22));

// ================= PAPER 3 =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 25 minutes · 15 marks)'));
out.push(box('Before you begin', [
  'Every recording is played **twice**, at normal speed. You will hear the instructions for each part on the recording as well as on this paper.',
  '⚠ In **Part 3** there are **eight** options and only **five** speakers, so **three options are not used.** Read all eight before the recording starts and mark the two or three that could fit nobody; what is left is a shorter list.',
], C.lyellow, C.orange));
out.push(box('Part 1 · Five short extracts (5 marks)', [
  '🔊 **Track MT-1.** You will hear five short extracts. For questions **21–25**, choose the answer (**A**, **B** or **C**) which fits best. You will hear each extract twice.',
], C.lteal, C.teal));
[
  '**21**  You hear a woman talking about a criterion she wrote herself. What does she say is wrong with it?   **A** nobody can fail it   **B** it is too strict   **C** it is hard to understand',
  '**22**  You hear a man talking about a case he put at a meeting. What does he say he did wrong?   **A** he put it badly   **B** he refused to put it   **C** he said whose it was at the end',
  '**23**  You hear a woman talking about a figure in a summary. What happened to it?   **A** it was left out altogether   **B** it was rounded   **C** it was copied wrongly',
  '**24**  You hear a man talking about minutes. Who does he say they are for?   **A** people who were not there   **B** the file   **C** the person who chaired',
  '**25**  You hear a woman at the end of a meeting. What does she say was not decided?   **A** the price   **B** the date of the next meeting   **C** the February order',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 3 · Multiple matching (5 marks)', [
  '🔊 **Track MT-2.** You will hear five people talking about something they judged, put or summarised. For questions **26–30**, choose from the list **A–H** what each speaker says. **Use each letter once only. There are three extra letters which you do not need to use.**',
], C.lteal, C.teal));
out.push(model([
  '**A**  I found that my own rule measured something the candidate could not control.',
  '**B**  I left out the one sentence that would have changed the decision.',
  '**C**  I was given a judgement that nobody was able to explain to me.',
  '**D**  I put a case I did not hold and was taken for its author.',
  '**E**  I rounded a figure and moved it to the other side of a limit.',
  '**F**  I spent years answering an argument that nobody had made.',
  '**G**  I wrote down what would change my mind and it happened within weeks.',
  '**H**  I recorded the discussion and not the decision.',
]));
[
  '**26**  Speaker 1  ______',
  '**27**  Speaker 2  ______',
  '**28**  Speaker 3  ______',
  '**29**  Speaker 4  ______',
  '**30**  Speaker 5  ______',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 4 · Multiple choice (5 marks)', [
  '🔊 **Track MT-3.** You will hear an interview with a man who has taken minutes at a directorate in Damascus for nineteen years. For questions **31–35**, choose the answer (**A**, **B** or **C**) which fits best.',
], C.lteal, C.teal));
[
  '**31**  What did he count in one set of his own minutes?   **A** the people who spoke   **B** the words in the decision   **C** the minutes the meeting took',
  '**32**  Who does he say minutes are written for?   **A** people who were not there   **B** the person who chaired   **C** the file',
  '**33**  What does he say about the line that records what the time was spent on?   **A** nobody reads it   **B** it embarrasses the meeting   **C** it took a standing item off the agenda',
  '**34**  What does he say he will not do when he is told to put a case?   **A** state a figure he has not checked   **B** attend the meeting   **C** put the case well',
  '**35**  What does he say he had never asked himself in nineteen years?   **A** how long minutes take to write   **B** who writes the minutes   **C** who reads them',
].forEach(t => out.push(q(t)));

// ================= PAPER 4 =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 12 minutes · 10 marks)'));
out.push(box('How the twelve minutes are spent', [
  '**Part 1** about two minutes · **Part 2** about four minutes (one minute each, plus thirty seconds each on your partner\'s pair) · **Part 3** three minutes (two, then one) · **Part 4** about three minutes.',
  '⚠ **Your teacher will keep the time with a watch and will stop you at the end of each part.** Being stopped mid-sentence costs nothing; running out of things to say at the fortieth second of a minute costs a row of the grid.',
], C.lyellow, C.orange));
out.push(box('Part 1 · Interview (2 marks) — your teacher asks each student', [
  'Tell me about something you have been judged on where you could not tell what would count as failing.',
  'What is the strongest argument against something you believe about your own work?',
  'Tell me about a long document you have had to make short.',
  'What would change your mind about the thing you have just described, and by when?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 2 · Long turn (3 marks) — one minute each, and thirty seconds on your partner\'s pair', [
  '⚠ Your teacher gives each of you **two pictures**. **Do not describe them.** Name both in one sentence and spend the minute on what **neither** of them shows.',
  '**Candidate A — your two pictures.** _(i)_ A noticeboard with a job advertisement on it, eleven lines long, the first five about the person wanted. _(ii)_ The same board four months later: the advertisement has three lines on it and a date at the bottom.   **Your question:** _Why do you think the people who wrote this advertisement have changed it?_',
  '**Candidate B — your two pictures.** _(i)_ A desk with a thick report on it, a ruler laid across page thirty-one. _(ii)_ The same desk a week later: one typed page, and the report closed on the floor beside the chair.   **Your question:** _Why do you think the person at this desk has made the long document short?_',
  '**And then thirty seconds on your partner\'s pair**, when your teacher asks you. Answer the question **in the first second**: your view first, then the reason.',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 3 · Collaborative task (3 marks) — fifteen seconds to read · two minutes together · one minute to decide', [
  '**Here are some things an organisation could do so that a decision reaches the people who have to carry it out. Talk to each other about how useful each of these would be.**',
  '_the decision quoted in full_   ·   _the name of whoever took it_   ·   _what was **not** decided_   ·   _a route for disagreeing, with a date_   ·   _what the meeting\'s time was actually spent on_',
  '⚠ **Then your teacher will say: _now decide which two of these matter most._** You have **one minute**, you must decide **together**, and you must say what you are **giving up**.',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 4 · Discussion (2 marks) — your teacher asks both students', [
  'Is it dishonest to put a case you do not believe?',
  'Should the person who writes a job advertisement have to say which line would fail them?',
  'Who should decide what is left out of a summary — the person who writes it, or the person who wrote the original?',
  'Is there anything at your work that nobody could explain to you if you asked?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('How your teacher marks your speaking (10 marks)', [
  '**Grammar and vocabulary (3)** — the range of Units 13–18 used accurately: the failable criterion, the proportion-or-threshold distinction, the attribution inside the sentence, the falsifying condition with its date, the figure with its unit and interval, and the three bands.',
  '**Discourse management (3)** — a full minute in Part 2 without describing; a view followed by its reason; and, in Part 3, two minutes that narrow rather than agree.',
  '**Pronunciation (2)** — understandable throughout; the attribution at the same weight as the case; the exact figure said with nothing in front of it.',
  '**Interactive communication (2)** — in Part 3, inviting a **discard** rather than an opinion, stating the other side at its strongest, and reaching a decision in the final minute. ⚠ _We could not decide_ scores nothing in this row.',
], C.lteal, C.teal));
out.push(sp());
out.push(table(['Paper', 'Marks', 'Out of'], [
  ['Paper 1 · Reading and Use of English', '', '20'],
  ['Paper 2 · Writing', '', '15'],
  ['Paper 3 · Listening', '', '15'],
  ['Paper 4 · Speaking', '', '10'],
  ['**TOTAL**', '', '**60**'],
], [3, 1, 1]));
out.push(sp());
out.push(box('What to do with the number', [
  'This is a **mid-book** test and it is not an examination. It exists to tell you which of the forty-eight lines in the six **I can…** boxes of Units 13–18 you have not got yet.',
  'Whatever your total, go back to the box for the unit where you lost most marks and read the eight lines again. ⚠ The mark that matters is not out of sixty; it is **how many of the forty-eight you can tick without hesitating**.',
  '**And the four questions worth most in the second half of the book**, whatever this paper says: _could the person being judged read this and know they had failed?_ (Unit 16) · _would the people who hold that argument sign my version of it?_ (Unit 17) · _what would change my mind, and by when?_ (Unit 17) · and _what would the reader do, not knowing this, that they should not do?_ (Unit 18).',
  '⚠ **And one thing to find before Unit 24.** **The sealed letter you wrote to yourself in B1 24.6.** **It is opened in 24.6 of this book, and this is the only reminder.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Mid-Book Test');
