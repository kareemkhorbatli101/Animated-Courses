// Proactive English B1 · Syria Edition · Book 2 · END-OF-BOOK TEST (Units 13–24)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('END-OF-BOOK TEST · Units 13–24'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading** (45 min) · **Writing** (45 min) · **Listening** (about 30 min) · **Speaking** (in pairs, about 12 minutes with your teacher).',
  '**Total: 100 marks** (Reading 30 · Writing 30 · Listening 20 · Speaking 20).',
  'The format is the format of the **Cambridge B1 Preliminary** examination: six reading parts, two writing tasks, four listening parts and four speaking parts.',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  'Everything in this test has been taught in Units 13–24. Nothing in it is a surprise, and every item can be traced to one of the ninety-six lines in the twelve **I can…** boxes.',
  'If you finish early, read your two pieces of writing three times: once for **who is in the sentence**, once for **the figure and where it came from**, and once for **what you have not claimed**.',
], C.lblue, C.navy));

// ================= PAPER 1 · READING =================
out.push(pb());
out.push(paper('PAPER 1 · READING (45 minutes · 30 marks)'));
out.push(box('Part 1 · Notices and short messages (5 marks)', [
  'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.',
], C.lteal, C.teal));
out.push(sp());
[
  ['**1**  DEPOT · _by the gate_ — Check sheets used to be left in a tin here until 2019. Since then every sheet is handed in at the office window. The tin has not been replaced.',
   '**A** Sheets are no longer left at the gate.   **B** The tin is still at the gate.   **C** Sheets had to be handed in before 2019.'],
  ['**2**  LABORATORY · _receiving area_ — Bags left in this area were not recorded before 3 November. If you leave one, write the time and your initials on the list on the door.',
   '**A** Bags may not be left in this area.   **B** Only senior staff may leave bags here.   **C** There is now a list for bags left here.'],
  ['**3**  STORES · An urgent request is accepted on a numbered half-sheet and entered in the system the same evening. The half-sheet does not replace the system entry.',
   '**A** The half-sheet has replaced the system entry.   **B** Both the half-sheet and the system entry are needed.   **C** Urgent requests are no longer accepted.'],
  ['**4**  MUSTER ROOM · "It is understood that the second bus on the Harasta service will be withdrawn in the new year." _Written underneath, in another hand:_ "This notice is not signed and nobody has asked the transport office. Please do not repeat it."',
   '**A** The second bus is being withdrawn in January.   **B** The transport office has confirmed the change.   **C** Somebody has written that the notice cannot be relied on.'],
  ['**5**  PERSONNEL · Applications are assessed against requirements 1 to 7. Requirement 8 is not a requirement, and no weighting between the other seven has been published.',
   '**A** Seven requirements are assessed and no weighting is given.   **B** All eight requirements are assessed.   **C** Weightings for the seven have been published.'],
].forEach(([a, b]) => { out.push(model([a])); out.push(q(b)); });

out.push(pb());
out.push(box('Part 2 · Matching (5 marks)', [
  'The people below (**6–10**) each need one document. Choose from **A–H** the document each person needs. There are **three** documents you do not need.',
], C.lteal, C.teal));
[
  '**6**  Samira has a meeting in January at which she knows one question is coming, and she has written three answers to it that she does not want to give.',
  '**7**  Ghassan has to tell an employer, before being asked, exactly what his course certificate does and does not say.',
  '**8**  Maha has been told the same thing by four people in five months and wants to know whether it is written down anywhere.',
  '**9**  Fadi has nine guidance notes in front of him, four of which nobody could follow, and he wants one of them changed.',
  '**10**  Rania has to write one page about herself for a committee that has never met her and will not meet her.',
].forEach(t => out.push(q(t)));
out.push(model([
  '**A**  A statement of results whose fourth line says that the certificate is issued by the centre and is not a Cambridge qualification.',
  '**B**  A letter of complaint naming seventeen failures out of seventeen attempts and asking for one thing by one date.',
  '**C**  A note about one line of a document: the line as it stands, what it is able to do, and a rewrite with a word-count.',
  '**D**  A page prepared before a meeting: the question in their words, the answers thrown away with what each reveals, the answer in two sentences, and the second question.',
  '**E**  An instruction sheet rewritten as numbered imperatives, with the condition in front of each step.',
  '**F**  A three-column sheet: what is confirmed with a document and its date, what is claimed with its claimant, and what nobody has said.',
  '**G**  A one-page account with every figure sourced, one refusal, one real weakness and no adjective about the writer\'s character.',
  '**H**  A two-column sheet of what each side in an agreement believes it gave up, written separately on the same afternoon.',
]));

out.push(pb());
out.push(box('Part 3 · A long text (5 marks)', [
  'Read the article and choose the correct answer **A**, **B**, **C** or **D** for each question.',
], C.lteal, C.teal));
out.push(model([
  '**THE SHEET ON THE WALL OF ROOM 14**   from a magazine for teachers',
  'In September of the year before last, eleven adults in a language class in Damascus each wrote one sentence on a sheet of paper and pinned it to the wall. Each sentence was a prediction about something in the writer\'s own life, and each came with three further things: a date on which it could be tested, a reason, and a line saying what the writer would still not know by that date. The sheet stayed on the wall for two years. It was read in February, read again in December, and taken down last month.',
  'The teacher who runs the class, and who has been teaching for thirty-one years, did one thing with it that I have not seen before. She wrote a prediction of her own and pinned it up with theirs. It was not a prediction about a student; it was a prediction about the sheet — that eight of the eleven would turn out to be right about the event and wrong about the reason, because that is what had happened on her own sheets with six earlier classes.',
  'By last month six of the dates had fallen. Five of those six were right in both halves — the event and the reason — which means her own prediction is not going to survive. She reported that to the class in December in the same words she would have used about anybody else\'s claim: there is no confirmation of it, and the evidence so far is against it. She did not say she had been nearly right.',
  'What interests me is not the scoreboard. The proportion of correct predictions barely moved over the two years; people are about as good at guessing in their second year as in their first. What moved was the **reason** underneath each prediction. In the first year the reasons were judgements — _he is the sort of person who will_, _they never do anything in February_. By the second year they were counted patterns, with the count in the sentence: _closed in November in three of the last four years_, _both shops take their stock from one distributor_ — and, more striking, the students had begun marking which was which, writing _this is a judgement with one case behind it_ under their own reasons.',
  'The line nobody writes unprompted is the third one, the blind half: _what I will not know by then._ It is the line that makes the prediction worth pinning up at all, because it is the only part of the exercise in which the writer concedes the limits of their own position before anybody argues with them. Eleven students wrote it eleven times in two years, and in the interviews I did last week nine of them named it as the thing they had taken from the whole exercise.',
  'The sheet is on a wall again, with a new set of sentences and a date in June. One line on it is the teacher\'s.',
]));
[
  '**11**  Why does the writer say the teacher\'s own prediction was unusual?   **A** Because it was about the sheet rather than about a student.   **B** Because it was longer than the students\'.   **C** Because she did not give a reason for it.   **D** Because she pinned it up later than the others.',
  '**12**  What has happened to the teacher\'s prediction?   **A** It has been withdrawn.   **B** The evidence so far is against it, and she has said so.   **C** It has been confirmed by five of the six dates.   **D** It cannot be tested until June.',
  '**13**  What does the writer say about the proportion of correct predictions?   **A** It improved considerably in the second year.   **B** It fell as the reasons got better.   **C** It was never recorded.   **D** It barely changed over the two years.',
  '**14**  What does the writer find most striking about the second year\'s reasons?   **A** that they were shorter   **B** that they were about other people rather than the writers   **C** that the students had begun marking which reasons were judgements   **D** that they no longer contained numbers',
  '**15**  What would be the best summary of this article?   **A** Prediction is a skill that can be measured and improved.   **B** The exercise was useful because of the reasons and the admitted limits, not because of who was right.   **C** Teachers should not take part in their students\' exercises.   **D** Two years is too short a period to judge such an exercise.',
].forEach(t => out.push(q(t)));

out.push(pb());
out.push(box('Part 4 · Gapped text (5 marks)', [
  'Five sentences have been removed from the text. Choose from **A–H** the sentence which fits each gap (**16–20**). There are **three** sentences you do not need.',
], C.lteal, C.teal));
out.push(model([
  '**FOUR SENTENCES IN JANUARY**  · from a magazine for adult learners',
  'In the first week of a two-year English course in Damascus, a laboratory technician was asked to write four sentences about herself. **(16)** ______',
  'She kept the page. Not out of sentiment: her teacher had told the class to put the date on it and not lose it, and she is the kind of person who does what the instruction says. It went into a folder and stayed there.',
  'Eleven months later she was writing a page about herself for a job application, and she had written it ten times. **(17)** ______ The eleventh version begins with those four January sentences, in quotation marks, with the date — and then one line of her own underneath. **(18)** ______',
  'The quotation is the only thing on the page a reader could not have guessed, and it does the arithmetic for them: somebody who sees four sentences dated the fourteenth of January and nine hundred words a week dated December draws their own conclusion and believes it, because it is theirs.',
  'The alternative is the sentence almost everybody writes instead. _I have made considerable progress since January._ **(19)** ______',
  'She says the hardest part was not the writing. It was that she had very nearly thrown the page away in the spring, on the grounds that it made her look as though she could not speak English a year ago. **(20)** ______',
]));
[
  '**A**  That is a description of evidence offered in place of the evidence, and a reader learns nothing from it at all.',
  '**B**  She took forty minutes over them and could not write a fifth.',
  '**C**  None of the ten was true, and she now thinks she knows why: every one of them began with an adjective about her own character.',
  '**D**  Which is exactly what they show, and exactly why they are worth more than anything else in the folder.',
  '**E**  Her teacher had kept a similar page from her own first course and had lost it.',
  '**F**  She wrote nine sentences and was asked to cut them to four.',
  '**G**  Her manager asked for a copy of the application and read it twice.',
  '**H**  The line says that by the time anybody reads the page she will have forgotten how hard those four sentences were.',
].forEach(t => out.push(q(t)));

out.push(pb());
out.push(box('Part 5 · Multiple-choice cloze (6 marks)', [
  'For each question (**21–26**), choose the correct answer **A**, **B**, **C** or **D**.',
], C.lteal, C.teal));
out.push(model([
  '**ONE WORD IN THE MIDDLE OF A SENTENCE**',
  'Almost everything any of us knows about the world arrived in a reported sentence written by somebody we have never met, and the writer\'s opinion is almost never in the part we are looking at. It is in the verb. _The office **(21)** ______ that the road will reopen on the 22nd_ adds nothing at all. _The office claims that the road will reopen_ adds the writer\'s distance, and the reader **(22)** ______ the doubt without anybody having to write it down.',
  'The same move is made by leaving everybody out. _It is understood that the service will be withdrawn_ cannot be contradicted by anybody, because there is nobody in the sentence to **(23)** ______ it — and a sentence that cannot be contradicted cannot be relied **(24)** ______ either.',
  'The remedy is cheap and nobody uses it. **(25)** ______ to put a person in front of the sentence: _the roads office says_, _the clerk told me on Tuesday_. Where somebody will go in, you have a report and a telephone number. Where nobody will go in, you are reading a rumour that has been **(26)** ______ for the office.',
]));
[
  '**21**  **A** says   **B** tells   **C** speaks   **D** talks',
  '**22**  **A** makes   **B** gives   **C** supplies   **D** puts',
  '**23**  **A** ask   **B** request   **C** question   **D** demand',
  '**24**  **A** in   **B** at   **C** for   **D** on',
  '**25**  **A** Try   **B** Attempt   **C** Manage   **D** Succeed',
  '**26**  **A** worn   **B** dressed   **C** clothed   **D** fitted',
].forEach(t => out.push(q(t)));

out.push(box('Part 6 · Open cloze (4 marks)', [
  'Write **one** word in each gap (**27–30**).',
], C.lteal, C.teal));
out.push(model([
  '**THE LETTER NOBODY WILL MARK**',
  'In the last week of the course each of us wrote one page to ourselves, sealed it, and put the date on the outside. It will be opened at the end of our next course, and **(27)** ______ one will read it but the person who wrote it.',
  'There are two rules and both are prohibitions. No promises, because nobody will ever check them. And no advice, **(28)** ______ you know less about next December than the person who opens the letter will. What you have that they have not got is today: today\'s figures, today\'s fear with a date on it, and the thing you **(29)** ______ have forgotten by then.',
  'That last one is the only line in the letter worth anything, and I did not believe it as I wrote it. Our teacher said that is what everybody says, and that it is the line **(30)** ______ matters.',
]));

// ================= PAPER 2 · WRITING =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (45 minutes · 30 marks)'));
out.push(box('Part 1 · An email (15 marks)', [
  'Read this email from your English friend **Sam** and the notes you have made. Write your email to Sam using **all four** notes. Write **100 words or more**.',
], C.lteal, C.teal));
out.push(model([
  '_"I have an interview next month and I have written two pages about myself and they are both useless. Everything I put down is either true of everybody — hard-working, good with people — or it is bragging. And there is one question I am dreading and I have no idea what to do about it. How do you write about yourself without lying and without sounding like an advertisement? Sam"_',
  '**Your notes:**',
  '•  _Tell him the test to apply to every sentence he writes_',
  '•  _Tell him what to do with the adjectives, and what to put in their place_',
  '•  _Tell him what to do about the question he is dreading_',
  '•  _Give him one example from your own life, with a figure in it_',
]));
out.push(...lines(8));
out.push(pb());
out.push(box('Part 2 · An article or a story (15 marks)', [
  'Choose **one** of these two questions. Write **100 words or more**.',
], C.lteal, C.teal));
out.push(model([
  '**Question 1 — article.** You see this notice in an English-language magazine.',
  '_"**What did you find out this year that nobody told you?** Tell us about something you discovered about your own work or your own habits — how you found out, what you did about it, and what you still do not know. The best articles will be published."_',
  '**Question 2 — story.** Write a story that begins with this sentence:',
  '_"He read the line a third time and realised that there was nobody in the sentence at all."_',
]));
out.push(...lines(9));

// ================= PAPER 3 · LISTENING =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 30 minutes · 20 marks)'));
out.push(box('Part 1 · Five short extracts (5 marks)  🔊 Track ET2-1', [
  'You will hear five short extracts. For each question (**31–35**), choose the correct answer **A**, **B** or **C**. You will hear each extract twice.',
], C.lteal, C.teal));
[
  '**31**  Where does the man say the check sheets used to be left?   **A** at the office window   **B** in a tin at the gate   **C** in the fitter\'s cupboard',
  '**32**  What was the word that made the woman believe the item?   **A** _many_   **B** _reportedly_   **C** _seventeen_',
  '**33**  How many of the nine sentences does the man say have nobody in them?   **A** three   **B** five   **C** nine',
  '**34**  What does the woman say she has taken off her page?   **A** two of her figures   **B** nine adjectives about her own character   **C** the refusal',
  '**35**  By what date does the man say he will have written the answer nine times?   **A** the eleventh   **B** the eighteenth   **C** the twentieth',
].forEach(t => out.push(q(t)));
out.push(box('Part 2 · Matching (5 marks)  🔊 Track ET2-2', [
  'You will hear five people talking about a sentence they have stopped using. For each speaker (**36–40**), choose from **A–H** what was wrong with it. There are **three** letters you do not need. You will hear the recording twice.',
], C.lteal, C.teal));
[
  '**36**  Speaker 1 ______   **37**  Speaker 2 ______   **38**  Speaker 3 ______   **39**  Speaker 4 ______   **40**  Speaker 5 ______',
].forEach(t => out.push(q(t)));
out.push(model([
  '**A**  It was a total where the matter was a proportion.',
  '**B**  It had nobody in it, so there was nobody to ask.',
  '**C**  It put the emphasis on the wrong half of a true sentence.',
  '**D**  It was a quality that nobody could fail.',
  '**E**  It was an adjective where a figure was available.',
  '**F**  It was a figure the speaker could not find a source for.',
  '**G**  It was an intention with nothing attached to it.',
  '**H**  It was a request for two things at once.',
]));
out.push(box('Part 3 · Complete the notes (5 marks)  🔊 Track ET2-3', [
  'You will hear a man talking about a notice on a wall at his depot. Write **one or two words or a number** in each gap (**41–45**). You will hear the recording twice.',
], C.lteal, C.teal));
out.push(box('ONE UNSIGNED NOTICE', [
  'The notice has been up since the **(41)** ______ of December',
  'Number of drivers who have asked him about it: **(42)** ______',
  'How long each of those conversations takes: about **(43)** ______ minutes',
  'Number of people he tried to put into the sentence: **(44)** ______',
  'What the rewrite would give a driver instead of a rumour: a **(45)** ______',
], C.lyellow, C.orange));
out.push(box('Part 4 · An interview (5 marks)  🔊 Track ET2-4', [
  'You will hear an interview with a teacher at the end of a two-year course. For each question (**46–50**), choose the correct answer **A**, **B** or **C**. You will hear the interview twice.',
], C.lteal, C.teal));
[
  '**46**  What does she say was the hardest part of the two years?   **A** the second book   **B** the first fortnight   **C** the examinations',
  '**47**  Why does she ask students to put the date on their first page?   **A** because they will stop believing it   **B** so that the centre has a record   **C** to compare one class with another',
  '**48**  What does she say about the _I can…_ boxes?   **A** They are the most useful pages in each unit.   **B** They should be completed before the unit.   **C** Every line in them was chosen by somebody else.',
  '**49**  What does she say changed over the two years?   **A** the proportion of correct predictions   **B** the reasons underneath them   **C** the length of the predictions',
  '**50**  What is the one thing she says she cannot help with?   **A** the letter the students write to themselves   **B** the enrolment form   **C** the speaking paper',
].forEach(t => out.push(q(t)));

// ================= PAPER 4 · SPEAKING =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 12 minutes · 20 marks)'));
out.push(box('Part 1 · About you (4 marks) — your teacher asks each student', [
  'What is your name, and where do you work or study?',
  'Tell me about something you used to do at work and do not do now.',
  'What is one figure about your own work that you could give me, and where does it come from?',
  'What is something you cannot yet do in English? When did you find that out?',
  'What are you going to do in the next twelve months that is already arranged?',
], C.lteal, C.teal));
out.push(box('Part 2 · The long turn (5 marks) — one student speaks for about a minute', [
  '**Student A.** Here is your card. Describe the situation, and then say what you would do.',
  '_**Card A.** A man is standing in front of a notice on a wall in a workplace. Three other people are waiting to speak to him. The notice is about twenty words long and has no name, no office and no date on it, and he has been asked about it eleven times this week._',
  '**Student B.** Here is your card. Describe the situation, and then say what you would do.',
  '_**Card B.** A woman is at a desk with three pieces of paper in front of her: a page of four sentences with a date eleven months old, a page of nine lines written for a colleague, and a blank sheet. There is an envelope beside them._',
], C.lteal, C.teal));
out.push(box('Part 3 · Talk together (6 marks) — the two students talk to each other', [
  '**Somebody has read something and does not know whether to believe it. Here are some things they could look at first.**',
  '**Talk together about the different things they could look at, and then decide which two would tell them most.** You have about three minutes. **You do not have to agree.**',
  table(['', ''], [
    ['① whether a person is named in the sentence', '② which reporting verb the writer chose'],
    ['③ whether the figures are odd numbers or round ones', '④ whether the publication is usually reliable'],
    ['⑤ what the last sentence of the piece says', '⑥ whether three other people say the same thing'],
  ], [1, 1]),
], C.grey, C.navy));
out.push(box('Part 4 · Discussion (5 marks) — your teacher asks you both', [
  'Is it better to say a thing plainly and look worse, or to explain it and look careful? Why?',
  'Some people say that a figure about your own work is worth more than anything you could say about yourself. Do you agree?',
  'Should a notice on a wall always have a name on it? What if the news is bad?',
  'What would you tell somebody who is about to begin a course like this one?',
  'What is the one thing you will have forgotten about this year by next December?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('How your teacher marks your speaking (20 marks)', [
  '**Grammar and vocabulary (5)** — the structures of Units 13–24 used accurately: _used to_ and _would_, the four habit forms, verb patterns, the passive and the causative, indirect questions, conditions and concessions, clefts, approximators and _out of_, the reporting verbs, impersonal reports, the future perfect, and _going to_ against _intend to_ against _aim to_.',
  '**Discourse management (5)** — in Part 2, a minute of connected speech with reasons attached; in Parts 3 and 4, answers long enough to be worth hearing, and a figure wherever one exists.',
  '**Pronunciation (4)** — understandable throughout; weak forms attempted; the unstressed approximator, the stress inside a cleft, and the pause before an unconfirmed item.',
  '**Interactive communication (6)** — in Part 3, suggesting, responding to what your partner actually said, asking their view and closing — and **an honest "we have not agreed" scores as well as an agreement**.',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Your result', [''], C.grey, C.navy));
out.push(table(['Paper', 'Marks', 'Out of'], [
  ['Paper 1 · Reading', '', '30'],
  ['Paper 2 · Writing', '', '30'],
  ['Paper 3 · Listening', '', '20'],
  ['Paper 4 · Speaking', '', '20'],
  ['**TOTAL**', '', '**100**'],
], [3, 1, 1]));
out.push(sp());
out.push(box('What to do with the number', [
  'This is the end of **Book 2**, and of the B1 course — twenty-four units, a hundred and sixty-eight cycles, and a hundred and ninety-two lines in the twenty-four **I can…** boxes.',
  'Whatever your total, the useful number is not out of a hundred. It is the one you wrote yourself in **24.4**: the length of the _cannot yet_ list, with a date and a place on every item. That list is your syllabus for next year, and nobody else in the world could have written it.',
  'Three things to do before the end of February (**24.7**): quote line 2 of the certificate and add one sentence of your own with a figure in it; be able to say line 4 before anybody asks you; and read line 8, which is the only date on the page that costs a year.',
  'And the last thing in this book is not a mark and not a certificate. It is the sentence you are going to say in September to eleven people who have never done any of this: **write four sentences, put the date on them, and keep them.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · End-of-Book Test');
