// Proactive English B2 · Syria Edition · Book 1 · MID-BOOK TEST (Units 1–6)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('MID-BOOK TEST · Units 1–6'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading and Use of English** (40 min) · **Writing** (60 min) · **Listening** (about 25 min) · **Speaking** (in pairs, about 12 minutes with your teacher).',
  '**Total: 60 marks** (Reading and Use of English 20 · Writing 15 · Listening 15 · Speaking 10).',
  '**All four Speaking parts are in this test**, including Part 2 (the long turn) and Part 3 (the collaborative task), which were taught in Units 4 and 6.',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  'Everything in this test has been taught in Units 1–6. Nothing in it is a surprise.',
  '⚠ If you finish early, read your writing twice: once for **the first six words of each paragraph**, and once for **the people you have left out of your sentences**.',
], C.lblue, C.navy));

// ================= PAPER 1 =================
out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (40 minutes · 20 marks)'));
out.push(box('Part 1 · Multiple-choice cloze (6 marks)', [
  'For questions **1–6**, read the text and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.',
], C.lteal, C.teal));
out.push(model([
  '**THE CONTENTS LINE**',
  'A magazine in Damascus that prints the work of nine outside contributors has changed one thing about the way it commissions copy, and the change **(1)** ______ from a count the editor made of her own work.',
  'For four years she has written the contents page from the front, summarising each paragraph in about four words, and she had never **(2)** ______ this to any of the nine. When she examined six issues she found that in fifty-two of sixty-one paragraphs the contents line described the opening and not the finding — so for most of the copy she handles, the contents page **(3)** ______ no relation to what the paragraph had actually found.',
  'Her note to the contributors did not ask for shorter paragraphs. She was at **(4)** ______ to say that the fifty-two are not too long: they are loaded at the wrong end, and the repair is a reordering and not a cut. Nor did she **(5)** ______ any of the nine as careless. She wrote instead that she had been summarising from the front for four years without telling anybody, and that is the sentence the nine have quoted back to her most often.',
  'Six months on, the number of contributors who put a figure, a date or a name in the first six words has risen from two to seven. Two of the nine have now asked her to **(6)** ______ the practice in writing, so that it can be quoted to anybody who commissions from them in future.',
]));
[
  '**1**   **A** arrived   **B** came   **C** reached   **D** turned',
  '**2**   **A** said   **B** told   **C** spoken   **D** mentioned',
  '**3**   **A** bore   **B** carried   **C** held   **D** took',
  '**4**   **A** trouble   **B** effort   **C** pains   **D** care',
  '**5**   **A** call   **B** describe   **C** name   **D** refer',
  '**6**   **A** set off   **B** set in   **C** set about   **D** set out',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 2 · Open cloze (4 marks)', [
  'For questions **7–10**, write **one** word in each gap. Write only one word.',
], C.lteal, C.teal));
out.push(model([
  '**THE FOUR MINUTES**',
  'A woman who has taken the minutes of a hospital committee for nine years read forty of her own decisions back last autumn, and found that thirty-one of them had no name attached **(7)** ______ them at all.',
  'The reason a decision goes missing, she says, is not that people forget it but **(8)** ______ nobody recorded why it was taken. The instruction survives, because somebody has to carry it out; the reason goes within about a month, by **(9)** ______ time there is nobody left to ask.',
  'She now does three things, **(10)** ______ of which takes more than a minute: she writes the record on the afternoon of the meeting, she puts a name on the decision, and she writes down which options were ruled out.',
  'The third of the three is the one she had never done in nine years, and it is the one she now says she would keep if she could keep only one. Anybody can remember what was decided. Nobody remembers what was refused — which is why, she says, the same four options came back to her committee in March and again in September, and were argued for a second time by the same people.',
]));
out.push(pb());
out.push(box('Part 4 · Key-word transformations (4 marks)', [
  'For questions **11–14**, complete the second sentence so that it means the same as the first. **Use the word given.** Do not change the word given. Use **between two and five words**, including the word given.',
], C.lteal, C.teal));
[
  '**11**  Nobody asked for the figure at any time in eleven months.   **DID**\n     At no point in eleven months ______________________________ for the figure.',
  '**12**  I am sure that the fan is the cause of it.   **MUST**\n     The fan ______________________________ of it.',
  '**13**  I accept what you say about the cost, but not what you say about the time.   **TAKE**\n     I ______________________________ the cost, but not about the time.',
  '**14**  She did not look at the record until last week.   **UNTIL**\n     It ______________________________ that she looked at the record.',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 6 · Gapped text (6 marks)', [
  'Six sentences have been removed from the text. Choose from the sentences **A–G** the one which fits each gap (**15–20**). There is **one** extra sentence which you do not need to use.',
], C.lteal, C.teal));
out.push(model([
  '**WHAT NOBODY WAS TOLD**',
  'Every workplace runs on practices that nobody has ever explained to anybody. Some of them are harmless: the shelf where a particular form lives, the hour at which the kettle is filled. Others decide what happens to other people\'s work, and those are the ones worth looking for. They are not secrets and nobody is keeping them: they have simply never been the subject of a sentence.   **(15)** ______',
  'The clearest example I know is an editor\'s. For four years she has written her contents page by summarising the opening words of each paragraph, in about four words a paragraph, and until last autumn she had never told any of her nine contributors that this was how it was done. She had not been asked, and it had not occurred to her that anybody would want to know.   **(16)** ______   The nine had been writing their openings for a reader whose habits none of them knew, and three of them had been writing them, year after year, in a way that guaranteed their best sentence would not be the one summarised.',
  'What makes these practices hard to find is that they are invisible from the inside and obvious from the outside. This is not a failure of attention but a property of habit: a thing done every day for four years stops being a decision and becomes part of the furniture of the room.   **(17)** ______   Ask the same person what their own workplace takes for granted and they will tell you, quite honestly, that there is nothing — and they will be able to list, within a minute, four things about the last place they worked.',
  'There is a second difficulty and it is the more expensive one. A practice that has never been described is also a practice that cannot be handed on, because there is nothing to hand.   **(18)** ______   When that person leaves, what goes with them is not the instruction, which anybody can copy off the wall, but the reason for it — and an instruction without its reason is obeyed for a year and then abandoned in an afternoon by somebody who has no way of knowing what it was for.',
  'The repair is smaller than it sounds and it is not a policy. Organisations that respond to this with a handbook produce a document that describes what everybody already does and omits the one practice that mattered, because the person who knew it was not asked.   **(19)** ______   One note to nine contributors, naming a four-year habit in two sentences, changed the openings of a magazine within six months, and it cost its author about twenty minutes.   **(20)** ______',
  '',
  '**A** It is carried instead in the habits of whoever has been doing it longest.',
  '**B** What it cost her was one admission, and what it bought was copy she no longer had to rewrite.',
  '**C** She was not concealing it; she had never thought of it as a decision.',
  '**D** Anybody can describe the unwritten rules of a place they left two years ago.',
  '**E** Most organisations have a handbook, and most handbooks are written by somebody who has never done the work.',
  '**F** The difficulty is that a practice nobody has described is also a practice nobody can question.',
  '**G** It is a sentence, written once, by whoever has been doing the thing.',
]));

// ================= PAPER 2 =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (60 minutes · 15 marks)'));
out.push(box('Part 1 · The essay (8 marks) — you must do this question', [
  'In your English class you have been talking about how organisations keep information. Your teacher has asked you to write an essay.',
  '⚠ **Both tasks in this paper are 180–220 words, and the ruled space is about the right length.** If you reach the last line you are at about 220, which is the top of the band and not a target. **Spend four minutes on a four-line plan and four minutes reading it back.**',
], C.lteal, C.teal));
out.push(model([
  '_"Writing things down matters more than remembering them accurately."_ Do you agree?',
  'Write an essay using **all the notes** and giving **reasons** for your point of view.',
  'Notes — write about: **1** at work   **2** in a disagreement   **3** ______________ _(your own idea)_',
  'Write **180–220 words**.',
]));
out.push(...lines(20));
out.push(pb());
out.push(box('Part 2 · An article or a report (7 marks)', [
  'Choose **one** of these. Write **180–220 words**.',
], C.lteal, C.teal));
out.push(model([
  '**Question 1 — an article.** You see this notice in an English-language magazine.',
  '_"**What nobody explained.** Tell us about something at your work or your college that you did for a long time before you found out why — or before you found out that there was no reason at all. Say what it cost, and what you would tell somebody starting tomorrow. We will print the best articles."_',
  'Write your **article**.',
  '**Question 2 — a report.** Your manager has asked you to write a report on how new staff are told the things that are not written down where you work.',
  'Your report should **say what new staff are told now**, **say what they are not told**, and **recommend one change**, with its cost.',
  'Write your **report**, with headings.',
]));
out.push(p('I am answering **Question _____**', { bold: true }));
out.push(...lines(22));

// ================= PAPER 3 =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 25 minutes · 15 marks)'));
out.push(box('Before you begin', [
  'Every recording is played **twice**, at normal speed. You will hear the instructions for each part on the recording as well as on this paper.',
  '⚠ In **Part 2** you must write **the speaker\'s own words** — one word or a number. A correct paraphrase of something you heard perfectly scores nothing in that part, which is the one thing about it worth remembering.',
], C.lyellow, C.orange));
out.push(box('Part 1 · Five short extracts (5 marks)', [
  '🔊 **Track MT-1.** You will hear five short extracts. For questions **21–25**, choose the answer (**A**, **B** or **C**) which fits best. You will hear each extract twice.',
], C.lteal, C.teal));
[
  '**21**  What does the woman say her real mistake was?   **A** the cut itself   **B** the covering line she sent with it   **C** the hour at which she worked',
  '**22**  What does the man say his count showed?   **A** that eleven of the fifteen came from one batch   **B** that the model is a common one   **C** that his own shop was at fault',
  '**23**  What does the woman say is missing from the minute?   **A** the date   **B** the instruction   **C** the reason',
  '**24**  Why does the man say the meeting will have to be held again?   **A** because nobody wrote down what had been refused   **B** because the decision was the wrong one   **C** because two of them were absent',
  '**25**  Why does the woman think her request was refused four times?   **A** because it was too expensive   **B** because the form could not be changed   **C** because she had not said how small it was',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 2 · Sentence completion (5 marks)', [
  '🔊 **Track MT-2.** You will hear a woman talking about the openings of paragraphs. For questions **26–30**, complete the sentences with **a word or a number**.',
], C.lteal, C.teal));
[
  '**26**  She examined ______________ issues of the magazine.',
  '**27**  Of the sixty-one paragraphs, ______________ had a figure, a date or a name in the first six words.',
  '**28**  She summarises each paragraph for the contents page in about ______________ words.',
  '**29**  She says that what the fifty-two paragraphs need is a ______________ and not a cut.',
  '**30**  She says that what she is asking for can be counted on your ______________.',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 4 · Multiple choice (5 marks)', [
  '🔊 **Track MT-3.** You will hear an interview with a man who repairs telephones at a counter in Damascus. For questions **31–35**, choose the answer (**A**, **B** or **C**) which fits best.',
], C.lteal, C.teal));
[
  '**31**  What did the man count over a fortnight?   **A** decisions with a limit in them   **B** faults in one model   **C** customers who came back',
  '**32**  How many of them had he written down?   **A** three   **B** none   **C** eleven',
  '**33**  What does he say about the customer who disputed the fortnight?   **A** that he was not telling the truth   **B** that he had forgotten the conversation   **C** that he had rehearsed the shorter version every day',
  '**34**  What does he say he had been most wrong about?   **A** the batch number   **B** believing that having been there was worth something   **C** the price of a replacement',
  '**35**  What does he do at the counter now?   **A** writes three lines in front of the customer   **B** telephones the distributor the same day   **C** keeps the docket in the fault book',
].forEach(t => out.push(q(t)));

// ================= PAPER 4 =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 12 minutes · 10 marks)'));
out.push(box('How the twelve minutes are spent', [
  '**Part 1** about two minutes · **Part 2** about four minutes (one minute each, plus thirty seconds each on your partner\'s pair) · **Part 3** three minutes (two, then one) · **Part 4** about three minutes.',
  '⚠ **Your teacher will keep the time with a watch and will stop you at the end of each part.** Being stopped mid-sentence costs nothing; running out of things to say at the fortieth second of a minute costs a row of the grid.',
], C.lyellow, C.orange));
out.push(box('Part 1 · Interview (2 marks) — your teacher asks each student', [
  'What has changed about the way you write at work since September?',
  'Tell me about a decision you have had to carry out that you were not present at.',
  'What is one thing where you work that nobody has ever explained to you?',
  'How sure are you that the thing you have just described is actually the reason? What are you going on?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 2 · Long turn (3 marks) — one minute each, and thirty seconds on your partner\'s pair', [
  '⚠ Your teacher gives each of you **two pictures**. If your class kept the pairs it brought for Unit 4, use those; otherwise use the pairs described here. **Do not describe them.** Name both in one sentence and spend the minute on what **neither** of them shows.',
  '**Candidate A — your two pictures.** _(i)_ A hospital noticeboard with three handover notices pinned over a printed rota. _(ii)_ The same board five weeks later: the notices are gone and the rota is uncovered, with a drawing pin still in the top corner.   **Your question:** _Why do you think the people who keep this board have changed what is on it?_',
  '**Candidate B — your two pictures.** _(i)_ A shop counter with a handset on it and a shelf label in handwriting beside it. _(ii)_ The same counter a fortnight later: the handset has gone and there is a docket on the counter with three lines written on the back of it.   **Your question:** _Why do you think the person at this counter has started writing things down?_',
  '**And then thirty seconds on your partner\'s pair**, when your teacher asks you. Answer the question **in the first second**: your view first, then the reason.',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 3 · Collaborative task (3 marks) — fifteen seconds to read · two minutes together · one minute to decide', [
  '**Here are some things a workplace could do so that a decision is not lost. Talk to each other about how useful each of these would be.**',
  '_a minute written on the day_   ·   _one person made responsible_   ·   _a reason recorded with the decision_   ·   _a list of the options that were refused_   ·   _a date by which it is reviewed_',
  '⚠ **Then your teacher will say: _now decide which two of these matter most._** You have **one minute**, and you must decide **together** and say what you are **giving up**.',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 4 · Discussion (2 marks) — your teacher asks both students', [
  'Some people say that if a decision is not written down, it was never really made. What do you think?',
  'Is it ever better **not** to record the reason for something?',
  'Who should write a decision down — the person who decided it, or the person who has to carry it out?',
  'How much of what you know about your own work could you explain to somebody starting tomorrow?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('How your teacher marks your speaking (10 marks)', [
  '**Grammar and vocabulary (3)** — the range of Units 1–6 used accurately: the nine steps of certainty, nominalisation with a recoverable agent, the four shapes of Unit 5, inversion after a negative adverbial, and the concession-and-limit of 6.2.',
  '**Discourse management (3)** — a full minute in Part 2 without describing; answers with reasons attached; and, in Part 3, two minutes that narrow rather than agree.',
  '**Pronunciation (2)** — understandable throughout; the comma after a fronted phrase audible; the fall on the negative adverbial and not on the verb.',
  '**Interactive communication (2)** — in Part 3, inviting a **discard** rather than an opinion, conceding and naming a limit, and reaching a decision in the final minute. ⚠ _We could not decide_ scores nothing in this row.',
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
  'This is a **mid-book** test and it is not an examination. It exists to tell you which of the forty-eight lines in the six **I can…** boxes you have not got yet.',
  'Whatever your total, go back to the box for the unit where you lost most marks and read the eight lines again. ⚠ The mark that matters is not out of sixty; it is **how many of the forty-eight you can tick without hesitating**.',
  '**And the four things worth most in the second half of the book**, whatever this paper says: _what am I going on?_ (Unit 4) · the conceded point with its limit (Units 3 and 6) · _which version will the reader quote?_ (Unit 5) · and the five lines somebody who was not there could act on (Unit 6).',
  '**Put the 1.7 essay away again now.** It is wanted in Unit 12, and this is the last reminder in the book.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Mid-Book Test');
