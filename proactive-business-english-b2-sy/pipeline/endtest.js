// Proactive Business English B2 · Syria Edition · Book 1 · END-OF-BOOK TEST (Units 1–12) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('END-OF-BOOK TEST  ·  Units 1–12'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (one hour) · **Writing** (forty-five minutes) · **Listening** (about forty minutes) · **Speaking** (in pairs, about fifteen minutes with your teacher).',
  'Total: **100 marks**, divided equally — Reading, Writing, Listening and Speaking are worth twenty-five marks each. ⚠ This is the weighting of **B2 Business Vantage**, where the four skills are scored separately and your overall result is their **average**. **Record your four marks separately and work out the average yourself before you look at the total.**',
  '⚠ **The Reading paper practises all five parts of the examination** — matching, sentence insertion, multiple choice, multiple-choice cloze and error correction — **five questions each.** **The two that were not in the Mid-Book Test are here: sentence insertion and multiple-choice cloze.** ⚠ **In the real paper there are forty-five questions in one hour, weighted towards the cloze and the error correction; here there are twenty-five, weighted equally, because this test is reporting on twelve units and not predicting a grade.**',
  '⚠ **The Writing paper uses the examination\'s own lengths**: Part 1 is **40 to 50 words** and Part 2 is **120 to 140 words**. **These are not the course\'s lengths** — the units asked for 80 words or more and 200 to 240 — **and the difference is the examination\'s.**',
  'Everything in this test happens at work. Where a task asks about **your** company, use your real job or invent one — you are marked on the English, not on the company.',
  '⚠ **Two things are marked here that no single unit put marks on, and both are announced now rather than discovered later.** ⚠ **In Writing Part 2, whether your recommendation carries its own basis inside the sentence** (Unit 12.5) — **a recommendation that gestures at the rest of the report is worth no marks for that point, however well written.** ⚠ **And across both Writing tasks, whether you have asked for anything you were not asked to ask for** (Unit 11.4) — **an ask attached to a disclosure loses the point it is attached to.**',
  'Write your answers on this paper, clearly, in pen. You **cannot** use a dictionary or your telephone.',
  '⚠ **If you finish early:** read your Writing Part 2 recommendation aloud, once, and ask yourself one question — **if this basis is wrong, how would anybody know?** **If the answer is that they could not, there is no basis in it.**',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (one hour · 25 marks)'));
out.push(part('Part 1  ·  Matching  (5 marks)', 'Read the five short extracts **A–E**. For each statement **1–5**, decide which extract it refers to. An extract may be used more than once. Circle **A**, **B**, **C**, **D** or **E**.'));
out.push(sp());
out.push(model([
  '**A** _There is one decision on the table that is not on the paper. It takes four minutes and it has to be taken today. I would like it second, after your opening and before the credit item._',
  '**B** _It has happened three times: March 2024, August 2024 and March this year, all three to you, and we did not connect them. Thirty-three cartons. At 1,450 that is 47,850, which we owe you. I am not asking for anything today._',
  '**C** _The count was made on the apron, against the gate sheet, with the lorry waiting — Abu Yasser\'s account; there is no record of where a count is made. The top layer was estimated, which I infer and nobody has stated._',
  '**D** _Turnover was 148.2 million in the year to 31 December 2025, on the same basis as 2024 — audited accounts, page 4. Debtor days are my own calculation and are at appendix 2._',
  '**E** _Line 8 is a term of art. Line 11 was agreed in March. There are three points of accuracy in this note and no other points._',
]));
out.push(q('**1** This extract gives a figure with its period, its basis and a page.   **A**   **B**   **C**   **D**   **E**'));
out.push(q('**2** This extract marks two claims with the evidence that holds each one up.   **A**   **B**   **C**   **D**   **E**'));
out.push(q('**3** This extract asks for time and says how much.   **A**   **B**   **C**   **D**   **E**'));
out.push(q('**4** This extract protects two lines without apologising for either.   **A**   **B**   **C**   **D**   **E**'));
out.push(q('**5** This extract states a sum that is owed and asks for nothing.   **A**   **B**   **C**   **D**   **E**'));
out.push(pb());
out.push(part('Part 2  ·  Sentence insertion  (5 marks)', 'Choose from the sentences **A–F** the one which fits each gap **6–10**. ⚠ **One sentence is not needed.** Read the sentence before the gap and the sentence after it: a Part 2 answer is held in place at both ends.'));
out.push(sp());
out.push(model([
  '**THE FOUR THINGS A READER DOES WITH A DOCUMENT — a note for new administrators.**',
  'Nobody reads a business document for pleasure, and almost nobody reads one in order to know something. **6** ______ It follows that the question to ask before writing is not what the reader needs to know but what he is about to do.',
  'The first consequence is about order. **7** ______ A reader who has to assemble your case out of four paragraphs will assemble a different case from the one you built, and you will not find out which one.',
  'The second is about evidence. **8** ______ A claim and its warrant arrive together, or the warrant arrives after the reader has already believed or disbelieved the claim.',
  'The third is about numbers. A figure with no period, no basis and no source is not a figure at all; it is an invitation to supply all three. **9** ______',
  'And the fourth is about what you are asking for. **10** ______ A document that tells somebody something and asks them for something in the same breath will be remembered for the asking.',
]));
out.push(sp());
out.push(table(['', 'The six sentences'], [
  ['**A**', 'A reader supplies whatever is missing, and what he supplies is always worse than what you had.'],
  ['**B**', 'The thing that decides it goes first, and the four lines a busy reader has are the four lines you chose for him.'],
  ['**C**', 'They read in order to act: to move a figure, to re-plan a delivery, to decide whether to work a Saturday.'],
  ['**D**', 'Mark every claim with what holds it up, inside the sentence and not in a footnote.'],
  ['**E**', 'The telling and the asking should be separated, and the separation should be said out loud.'],
  ['**F**', 'Most documents are too long, and shortening them is the cheapest improvement available.'],
], [0.5, 7]));
out.push(pb());
out.push(part('Part 3  ·  Multiple choice  (5 marks)', 'Read the text and answer questions **11–15**. Choose **A**, **B**, **C** or **D**. ⚠ Locate the sentence that answers the question before you look at the options.'));
out.push(model([
  '**WHAT A FIRM KNOWS AND WHAT IT CAN SHOW — an address to the association\'s annual meeting.**',
  'Every firm in this room knows a great deal more than it can show, and the gap between the two is where almost all of our difficulties live.',
  'Consider an ordinary case. A supplier has short-delivered one customer three times in two years, for the same reason each time. The firm knows this, in the sense that four people could each tell you about one occurrence. What the firm can show is three separate write-ups, in three different hands, each describing a hurried count. Nobody has ever put them side by side, and nothing in the filing makes anybody do so.',
  'The reason is not laziness. It is that a firm files by event and reasons by pattern, and no filing system yet devised makes a pattern visible to somebody who is not already looking for one. A customer who files by customer sees three gaps on one page. The supplier, filing by month, sees three unrelated accidents a year apart.',
  'The practical conclusion is uncomfortable and worth stating plainly. The party most likely to discover a pattern in your conduct is the party your conduct happens to. They hold the same facts you hold, arranged better.',
  'What follows is not a recommendation about filing, which is expensive to change and rarely changed. It is a recommendation about writing. Whenever you write up an event, name the previous occurrence if there was one, with its date, in the same document. Two dates in one write-up do what no filing system can, which is to make the second reader of it the first person to see a pattern.',
]));
out.push(q('**11** What does the writer say the gap between knowing and showing contains?   **A** our records   **B** our customers   **C** our difficulties   **D** our profits'));
out.push(q('**12** In his example, what can the firm show?   **A** a pattern   **B** three separate write-ups in three hands   **C** four witnesses   **D** one document'));
out.push(q('**13** Why is the pattern invisible to the supplier?   **A** the records are lost   **B** nobody is interested   **C** the writing is poor   **D** a firm files by event and reasons by pattern'));
out.push(q('**14** Who is most likely to discover a pattern in a firm\'s conduct?   **A** the party it happens to   **B** the auditor   **C** the firm\'s own staff   **D** its bank'));
out.push(q('**15** What does he recommend?   **A** changing the filing system   **B** naming the previous occurrence, with its date, in the same write-up   **C** employing more staff   **D** keeping fewer records'));
out.push(pb());
out.push(part('Part 4  ·  Multiple-choice cloze  (5 marks)', 'Read the text and choose the best word for each gap **16–20**. Choose **A**, **B**, **C** or **D**. ⚠ Read the whole sentence each time, and not only the gap.'));
out.push(model([
  '**A DECISION RECORD — from a company secretary\'s manual.**',
  'A decision record is a letter to a stranger. He will not have your papers, and he will not be interested **16** ______ how the decision was taken; he will want to know why you do what you do.',
  'So the record carries four things: the decision, the basis **17** ______ it, a date on which somebody will look at it again, and a statement of what would **18** ______ to change for the decision to be the wrong one.',
  'The fourth is almost never written, and it is the one that **19** ______ a decision from a habit. And a review date **20** ______ an owner is not a review date at all.',
]));
out.push(sp());
out.push(table(['', 'A', 'B', 'C', 'D'], [
  ['**16**', 'in', 'at', 'on', 'for'],
  ['**17**', 'of', 'to', 'for', 'with'],
  ['**18**', 'have', 'must', 'need', 'ought'],
  ['**19**', 'divides', 'distinguishes', 'separates', 'parts'],
  ['**20**', 'lacking', 'with', 'without', 'out of'],
], [0.7, 1.4, 1.4, 1.6, 1.4]));
out.push(pb());
out.push(part('Part 5  ·  Error correction  (5 marks)', 'In some of these lines there is **one extra word which is grammatically wrong**. Some lines are correct. ⚠ For a correct line, write **CORRECT**. For an incorrect line, write the extra word. Write in **CAPITAL LETTERS**.'));
out.push(sp());
out.push(model([
  '**TO: MR HAMDAN.  FROM: N. MANSOUR.  THE AMENDED DRAFT.  29 MAY.**',
  '**21**  Thank you for returning the draft note. We have accepted five of   ______________',
  '**22**  the twelve changes without comment, and we have been asked you   ______________',
  '**23**  to reconsider three of them. Four do not arise, for reasons of   ______________',
  '**24**  provenance rather than of drafting: a figure which agreed between   ______________',
  '**25**  us in February, nine quoted words, a term of art, and a clause was agreed in March.   ______________',
]));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (forty-five minutes · 25 marks)'));
out.push(part('Part 1  ·  An internal communication  (10 marks)', 'Write **40 to 50 words**. Three content points, all three present. ⚠ Count your words and write the number at the end.'));
out.push(p('You have told a customer something difficult about your own firm\'s conduct. Write a message to your manager. Include: **(a)** what you told the customer, as facts · **(b)** what the customer raised in reply · **(c)** what you have undertaken to do, with a date.'));
out.push(p('⚠ **Do not write how the conversation went.** **_She took it well_ is a sentence about you and scores nothing.**'));
out.push(...lines(6));
out.push(p('**Words: ______**'));
out.push(sp());
out.push(part('Part 2  ·  A decision report  (15 marks)', 'Write **120 to 140 words**, with headings. ⚠ Count your words and write the number at the end.'));
out.push(p('Your manager has asked for a report on a decision your firm has to take. Write the report. Use **four** headings and include: **(a)** the question, as one question with two answers and the price of the second inside it · **(b)** the one thing that decides it · **(c)** the case against your own answer, in its strong form · **(d)** your recommendation, **with its basis inside the sentence**.'));
out.push(p('⚠ **The basis in your recommendation is marked pass or fail, as announced on the first page.** **A recommendation that says *in the light of the above* scores nothing for that point.**'));
out.push(...lines(14));
out.push(p('**Words: ______**'));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about forty minutes · 25 marks)'));
out.push(p('_Your teacher will read each recording twice. The scripts are in the Answer Key._', { color: '595959' }));
out.push(sp());
out.push(part('Part 1  ·  Note completion  (9 marks)', 'Listen to a conversation between a supplier and a customer. Complete the note. Write **one to four words or a number** in each gap.'));
out.push(sp());
out.push(model([
  '**NOTE OF A CONVERSATION — 11 June**',
  '**26**  Number of occurrences: ______________',
  '**27**  The second of the three months: ______________',
  '**28**  Cartons short in total: ______________',
  '**29**  The sum owed: ______________',
  '**30**  Complete the last sentence: *I am not ______________ for anything today.*',
  '**31**  The first thing the customer asked about: ______________',
  '**32**  The customer says the money has been ______________ and that is the end of it',
  '**33**  To whom she has been quoting the supplier\'s counts for nineteen years: ______________',
  '**34**  The second thing she asks to be sent is a note for ______________',
]));
out.push(pb());
out.push(part('Part 2  ·  Multiple choice  (8 marks)', 'Listen to a conversation about a draft minute and choose **A**, **B** or **C** for questions **35–42**.'));
out.push(q('**35** How long has the minute-taker been writing minutes?   **A** nineteen years   **B** nine years   **C** twelve years'));
out.push(q('**36** Why does the bank line appear in the minute?   **A** the chairman asked for it   **B** he missed the first ten minutes and wrote what the Thursdays were about   **C** somebody said it'));
out.push(q('**37** What does he say the word *noted* means?   **A** that a decision was taken   **B** that there was a discussion   **C** what he writes when he has not understood what happened'));
out.push(q('**38** How long did the credit item actually take?   **A** five minutes   **B** twenty-two minutes   **C** an hour'));
out.push(q('**39** What four things does he ask for?   **A** what was decided, on what basis, who owns it and by when   **B** what, who, when and where   **C** the names of everybody present'));
out.push(q('**40** Which two of the four does he refuse to take from her?   **A** the decision and the basis   **B** the basis and the date   **C** the owner and the date'));
out.push(q('**41** Why does he refuse them?   **A** he does not believe her   **B** nobody named either out loud   **C** the chairman has already decided them'));
out.push(q('**42** What does he ask for at the end?   **A** a copy of the agenda   **B** more time to write the minute   **C** her own note of the meeting, with the times on it'));
out.push(pb());
out.push(part('Part 3  ·  Multiple choice  (8 marks)', 'Listen to a decision being taken and choose **A**, **B** or **C** for questions **43–50**.'));
out.push(q('**43** What is being decided?   **A** whether to accept a clause as drafted   **B** whether to sign the agreement at all   **C** what the agreement should cost'));
out.push(q('**44** What is the basis given for the decision?   **A** that arbitration is faster   **B** that the customer insisted   **C** that in a fact dispute the firm\'s evidence is better suited to arbitration than to a court'));
out.push(q('**45** What does the dissenter say about arguing his case again?   **A** he will argue it at the next meeting   **B** he is not going to, because the paper has argued it better than he would   **C** he has nothing more to say'));
out.push(q('**46** What are the three things he asks for?   **A** the dissent minuted, the reason in it, and the decision not reopened   **B** a vote, a record and a delay   **C** a copy of the paper and two more days'));
out.push(q('**47** What is his reason?   **A** that the clause is badly drafted   **B** that nobody has read the agreement   **C** that the dispute he expects is a money dispute and Beirut costs four times as much'));
out.push(q('**48** Who wrote that case first?   **A** the dissenter   **B** the author of the paper   **C** the chairman'));
out.push(q('**49** What does the chairman say a minuted dissent does?   **A** it makes the decision one that was taken rather than assumed   **B** it weakens the record   **C** it delays the decision'));
out.push(q('**50** What is the dissenter\'s last request?   **A** that the review date be brought forward   **B** that if the trigger fires, his dissent becomes the recommendation without being reargued   **C** that his name be left out'));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about fifteen minutes · 25 marks)'));
out.push(box('⚠ How this paper is marked', [
  '**Twenty-five marks: Part 1 five, Part 2 ten, Part 3 ten.** ⚠ **You are marked on what you say and not on how fluently you say it** — **a candidate who says a figure with its base, haltingly, scores above one who talks smoothly about a figure with no base.**',
  '⚠ **One thing is worth saying before you start.** **In all three parts, the marks are in the things most candidates leave out:** ⚠ **the fact that helps the other side, the thing you are NOT asking for, and the sentence that says what would change your mind.**',
], C.lyellow, C.orange));
out.push(sp());
out.push(part('Part 1  ·  Your own work  (about four minutes · 5 marks)', 'Your teacher asks you questions. Answer with a figure, a date or a name wherever one belongs.'));
out.push(table(['Questions your teacher may ask', 'What is being marked'], [[
  '**What do you write at work that somebody else acts on?** · **Give me one figure you use and tell me what the hundred is.** · ⚠ **What is the last thing you had to tell somebody that cost you something?** · **What decision at your work has never been written down?**',
  '⚠ **A figure with its base, a date rather than *recently*, and a name rather than *somebody*.** ⚠ **A candidate who answers the third question with a real example has already shown more than the other three questions can.**',
]], [1.3, 1]));
out.push(sp());
out.push(part('Part 2  ·  A collaborative task  (about five minutes · 10 marks)', 'Work with your partner. You disagree, and you have to leave the conversation with a position and a record of it. Then swap roles.'));
out.push(table(['Role card — you want the Beirut clause accepted', 'Role card — you want Damascus'], [[
  '⚠ **Your evidence in the one dispute you have is a marked chain with two soft links, and a tribunal weighs a marked chain while a court takes evidence in a form you have never prepared.** ⚠ **Begin by conceding the cost point in its own terms and with nothing after it that argues.** **Then give your deciding factor and stop.**',
  '⚠ **Beirut costs four times a Damascus hearing, in a currency you do not hold, and most disputes of this kind are about money and not facts.** ⚠ **Do not ask for the decision to be reopened; ask for your dissent to be recorded, with its reason, and say so in those words.** ⚠ **Then ask for one more thing, about what happens if the position changes.**',
]], [1, 1]));
out.push(sp());
out.push(part('Part 3  ·  Putting a case  (about six minutes · 10 marks)', 'Put a case to your teacher, as the person who decides, for a decision you want taken at your work.'));
out.push(p('You must include: ⚠ **the decision as one question with two answers** · **the price of the second answer** · ⚠ **the one thing that decides it** · ⚠ **the case against your own answer, in its strong form** · **your recommendation with its basis inside the sentence** · and ⚠ **what would have to change for you to be wrong.**'));
out.push(sp());
out.push(box('⚠ To the teacher', [
  '**Part 3 is the paper\'s diagnostic and the marks are in the last two items.** **Most candidates will produce a question, a figure and a recommendation under pressure.** ⚠ **Very few will produce the case against their own answer in a form its holder would recognise**, **and fewer still will volunteer what would change their mind.**',
  '⚠ **Do not prompt for either.** **If they are absent, they are absent** — **and they are the two items in this whole test that predict whether a candidate can write a decision paper somebody will act on in five years.**',
  '⚠ **One more note.** **Where a candidate in Part 2 asks for a dissent to be recorded rather than for a decision to be reopened, give the full ten marks for that part whatever else happens in it.** **It is the single most sophisticated move in Book 1 and almost nobody makes it unprompted.**',
], C.lyellow, C.orange));
out.push(sp());
out.push(p('_End of the End-of-Book Test. **Book 2 begins at Unit 13**, in July, with the one thing Book 1 has not asked anybody to do: write for a reader who is not on your side and is not wrong._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · End-of-Book Test');
module.exports = out;
