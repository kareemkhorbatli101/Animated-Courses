// Proactive English B1 · Syria Edition · Book 1 · END-OF-BOOK TEST (Units 1–12)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('END-OF-BOOK TEST · Units 1–12'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading** (45 min) · **Writing** (45 min) · **Listening** (about 30 min) · **Speaking** (in pairs, about 12 minutes with your teacher).',
  '**Total: 100 marks** (Reading 30 · Writing 30 · Listening 20 · Speaking 20).',
  'The format is the format of the **Cambridge B1 Preliminary** examination: six reading parts, two writing tasks, four listening parts and four speaking parts.',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  'Everything in this test has been taught in Units 1–12. Nothing in it is a surprise, and every item can be traced to one of the ninety-six lines in the twelve **I can…** boxes.',
  'If you finish early, read your two pieces of writing once for **tense**, once for **who you have left out**, and once for **what you have not claimed**.',
], C.lblue, C.navy));

// ================= PAPER 1 · READING =================
out.push(pb());
out.push(paper('PAPER 1 · READING (45 minutes · 30 marks)'));
out.push(box('Part 1 · Notices and short messages (5 marks)', [
  'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.',
], C.lteal, C.teal));
out.push(sp());
[
  ['**1**  WARD 4 · _above the station desk_ — Round completion times are entered every night, including nights when the round finished on time. A column of identical numbers is evidence. A gap is not.',
   '**A** Only the late nights are written down.   **B** Every night is written down, late or not.   **C** The times are entered at the end of the week.'],
  ['**2**  DEPOT · From Monday, a road closure is telephoned to the depot and confirmed in writing the same morning. The written note does not replace the call.',
   '**A** Both the call and a written note are now required.   **B** The call has been replaced by a written note.   **C** A written note is needed only if nobody answers the telephone.'],
  ['**3**  COUNTER 2 · Handsets bought before January are repaired at the owner\'s cost. Anything sold since January is still covered by the shop.',
   '**A** Older handsets are repaired free of charge.   **B** Handsets sold since January are repaired at the owner\'s cost.   **C** The owner pays for repairs to handsets bought before January.'],
  ['**4**  LABORATORY · Nobody is to be in the chamber room alone after 18.00. The second person may be anybody on the site and does not have to be a technician.',
   '**A** After 18.00 you need somebody with you, and it need not be a technician.   **B** A technician must be present after 18.00.   **C** The chamber room is closed after 18.00.'],
  ['**5**  ROOM 14 · The store was made out of a lift shaft begun in 2009 and abandoned. It has a steel door and no handle on the inside, and is not to be used by anybody who is alone in the building.',
   '**A** The store may not be used at all.   **B** The store may not be used by somebody who is alone in the building.   **C** The store has no door on it.'],
].forEach(([a, b]) => { out.push(model([a])); out.push(q(b)); });

out.push(pb());
out.push(box('Part 2 · Matching (5 marks)', [
  'The people below (**6–10**) all need one document. Choose from **A–H** the document each person needs. There are **three** documents you do not need.',
], C.lteal, C.teal));
[
  '**6**  Hanadi has been asked to prove when a piece of equipment left her ward, and has nothing in writing.',
  '**7**  Samer has to decide whether the yard behind a building counts as part of the building.',
  '**8**  Nadia wants to know which of two night nurses presented a record to a committee, and when.',
  '**9**  Rami needs to know who is allowed to authorise work when the owner of the business is not there.',
  '**10**  Dina needs to know which rooms in a building get hot in the summer.',
].forEach(t => out.push(q(t)));
out.push(model([
  '**A**  A survey key to three drawings, with an entry for the south elevation and the rooms whose windows were not replaced.',
  '**B**  The definitions page of a contract: "the premises" means the building in which the work is carried out and any yard whose access is from that building.',
  '**C**  A standing note, signed and dated, naming one member of staff in writing to authorise work in the owner\'s absence.',
  '**D**  The minutes of a rota committee, with the name of the person who presented a record and the date of the meeting.',
  '**E**  An equipment form with the date a trolley went to the workshop and the signature of the person who sent it.',
  '**F**  A fault book of telephone repairs, with dates, models and faults.',
  '**G**  A page of entries about the people in a class, each with a defining clause and an adding clause.',
  '**H**  A letter asking for forty minutes of training with one machine in one room.',
]));

out.push(pb());
out.push(box('Part 3 · A long text (5 marks)', [
  'Read the article and choose the correct answer **A**, **B**, **C** or **D** for each question.',
], C.lteal, C.teal));
out.push(model([
  '**THE MAN WHO CROSSED OUT NINE CONDITIONS**   from a business magazine, Damascus',
  'In March a small printing shop in Damascus was sent eleven conditions. They came with a ministry order worth more than everything else the shop prints in a year, and they arrived on one sheet, over the counter, with no covering letter.',
  'Its owner has run the shop for nineteen years. He read the eleven conditions in one evening and crossed nine of them out — not in a letter of complaint, but on his own copy, with a note beside each one saying what it would cost him to comply and what he was prepared to do instead. Then he took the sheet to an English class he had been attending since September and read it out.',
  'What happened next is the part he now tells people about. A twenty-two-year-old architecture student in the class asked him what the page **before** the conditions said. He had not read it. It was headed "Definitions" and it was six paragraphs long, and he had skipped it for five weeks on the grounds that definitions are what you skip.',
  'Two of those six paragraphs changed what he had been doing. The first said that authorisation could be given in writing either by the contractor or by a person the contractor named in writing — which meant that he did not have to be in the building at seven every morning, as he had been for the whole of June, in order to be the person who could say yes. The second said that "the premises" included any yard whose access was from the building. In May he had told his three men that leaving the building included crossing the yard, and he had been wrong: the yard was inside, not outside, and the rule he had invented in front of them was stricter than the one the ministry had written.',
  '"I stood in that shop and made a rule worse than the ministry\'s," he says, "out of a sentence on a page I had not read." He went back on the Thursday and told the three of them so.',
  'He has since crossed one of his nine crossings-out back in. Condition four — that finished work must not leave the premises without a signed order — he had objected to because of the yard; with the yard inside, the condition is about the street, and about the street he thinks it is right. Eight, he points out, is still eight.',
]));
[
  '**11**  Why does the writer mention that the conditions arrived "over the counter, with no covering letter"?   **A** To suggest the ministry had made a mistake.   **B** To explain why the owner did not read them for five weeks.   **C** To show how little explanation came with something important.   **D** To show that the order was not worth much.',
  '**12**  What was unusual about the way the owner first dealt with the eleven conditions?   **A** He marked his own copy with the cost of each one and what he would do instead.   **B** He wrote a letter of complaint about nine of them.   **C** He refused the order.   **D** He asked his three men to read them first.',
  '**13**  What does the article suggest about the definitions page?   **A** It was written to be difficult.   **B** It was the only part of the contract he had read.   **C** It should have come after the conditions.   **D** It decided the meaning of conditions he had already answered.',
  '**14**  How does the owner describe his own conduct in May?   **A** As reasonable in the circumstances.   **B** As stricter than the rule he was applying.   **C** As something his men had asked for.   **D** As a decision he would take again.',
  '**15**  What is the point of the last paragraph?   **A** That he now accepts the ministry\'s conditions.   **B** That the yard was the only thing that mattered.   **C** That he has changed his mind about one condition and not about the other eight.   **D** That nine was always too many.',
].forEach(t => out.push(q(t)));

out.push(pb());
out.push(box('Part 4 · Gapped text (5 marks)', [
  'Five sentences have been removed from the text. Choose from **A–H** the sentence which fits each gap (**16–20**). There are **three** sentences you do not need.',
], C.lteal, C.teal));
out.push(model([
  '**SEVEN MONTHS WITH NOBODY LOOKING**  · from a magazine for small businesses',
  'A telephone repairer in Damascus started a notebook last September. **(16)** ______',
  'He wrote down four things for every repair: the date, the model, the fault and what he did about it. By April there were about four hundred entries in it, and fifteen of them were the same model with the same fault — an uneven line of adhesive, visible under a lamp, in every one of the fifteen.',
  'He had not been looking for anything. **(17)** ______ What the notebook gave him was not a discovery but a number, and a number is a thing somebody else can argue with.',
  'The interesting part of the story is not the bad batch. It is the three weeks in February when he nearly stopped. **(18)** ______ He says now that he would have stopped altogether if the manager had not asked him, on the second of April, for a copy of it.',
  '**(19)** ______ From that morning the notebook was no longer a private habit; it was something another person expected to see, and he has not missed a day since.',
  'He is clear about what the book does not prove. **(20)** ______ But he has asked the supplier for one thing — a name — and he has the dates of fifteen repairs to put beside the request.',
]));
[
  '**A**  He was not told to start it, and he decided himself what to put in it.',
  '**B**  Fifteen handsets of one model would have been noticed by somebody eventually, and he cannot show that a repairer without a book would have been slower.',
  '**C**  That is the change he points to, and it cost the manager one sentence.',
  '**D**  Nothing had gone wrong, and nobody had ever asked him for figures.',
  '**E**  He had kept a similar book at an earlier job and had thrown it away.',
  '**F**  He had been asked for the same figures twice before and had not been able to give them.',
  '**G**  There is nothing in it for those three weeks except four entries, all written on the same evening.',
  '**H**  The supplier replied in April and gave him two names.',
].forEach(t => out.push(q(t)));

out.push(pb());
out.push(box('Part 5 · Multiple-choice cloze (6 marks)', [
  'For each question (**21–26**), choose the correct answer **A**, **B**, **C** or **D**.',
], C.lteal, C.teal));
out.push(model([
  '**WHY WRITE IT DOWN?**',
  'People usually **(21)** ______ that a record kept at work was started because somebody was told to start one. In fact most of the useful ones were started by somebody who had asked **(22)** ______ for permission and had no plan for them at all.',
  'What a record does is **(23)** ______ a feeling into something that can be argued with. "The round is often late" cannot be discussed; "the round was late on thirty-four nights out of ninety-one" can. The second sentence can also be **(24)** ______ wrong, which is the whole of its value.',
  'The habit is fragile. A book that nobody asks for is a book that gets **(25)** ______ up, usually in the third month. The cheapest way to keep one alive is for a second person to ask for a copy of it, which **(26)** ______ that person about four seconds and makes the thing permanent.',
]));
[
  '**21**  **A** agree   **B** assume   **C** admit   **D** mind',
  '**22**  **A** anybody   **B** somebody   **C** nobody   **D** everybody',
  '**23**  **A** becomes   **B** makes   **C** turn   **D** does',
  '**24**  **A** shown   **B** found   **C** discovered   **D** proved',
  '**25**  **A** put   **B** taken   **C** given   **D** held',
  '**26**  **A** lasts   **B** needs   **C** spends   **D** takes',
].forEach(t => out.push(q(t)));

out.push(box('Part 6 · Open cloze (4 marks)', [
  'Write **one** word in each gap (**27–30**).',
], C.lteal, C.teal));
out.push(model([
  '**A NOTE PINNED UP IN ROOM 14**',
  'Nine months ago twelve people came into this room, and four of them already knew each other. On the first evening everybody wrote a page about themselves, and those pages have been pinned up on that wall **(27)** ______ September.',
  'We have read them again this week, **(28)** ______ with the sealed notes we wrote about each other in the first fortnight. The question was not whether we had been right. It was what **(29)** ______ of thing we had been wrong about — and almost everybody in the room had written, in April, that the difficult part **(30)** ______ be the English.',
]));

// ================= PAPER 2 · WRITING =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (45 minutes · 30 marks)'));
out.push(box('Part 1 · An email (15 marks)', [
  'Read this email from your English friend **Sam** and the notes you have made. Write your email to Sam using **all four** notes. Write **100 words or more**.',
], C.lteal, C.teal));
out.push(model([
  '_"Something has gone wrong at work and I am going to have to put it in writing, which I have never done. My problem is that I know I am right and everybody I have said that to has stopped listening. How do you write something like this without sounding as though you are complaining? Sam"_',
  '**Your notes:**',
  '•  _Tell him the one thing to put first_',
  '•  _Explain what to do with the other side of the argument_',
  '•  _Tell him what to ask for, and how big it should be_',
  '•  _Give him one example from your own life, with a date in it_',
]));
out.push(...lines(8));
out.push(pb());
out.push(box('Part 2 · An article or a story (15 marks)', [
  'Choose **one** of these two questions. Write **100 words or more**.',
], C.lteal, C.teal));
out.push(model([
  '**Question 1 — article.** You see this notice in an English-language magazine.',
  '_"**What did you write down this year?** Tell us about something you started counting, recording or writing down — why you began, what it showed you, and what it did not show. The best articles will be published."_',
  '**Question 2 — story.** Write a story that begins with this sentence:',
  '_"She had been waiting nine months to ask the question, and she asked it in ninety seconds."_',
]));
out.push(...lines(9));

// ================= PAPER 3 · LISTENING =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 30 minutes · 20 marks)'));
out.push(box('Part 1 · Five short extracts (5 marks)  🔊 Track ET-1', [
  'You will hear five short extracts. For each question (**31–35**), choose the correct answer **A**, **B** or **C**. You will hear each extract twice.',
], C.lteal, C.teal));
[
  '**31**  What does the woman say is in the workshop?   **A** a clipboard   **B** a trolley   **C** a form',
  '**32**  How long had the man been keeping the book before anybody asked for it?   **A** three weeks   **B** five months   **C** seven months',
  '**33**  What does the woman say she asked for?   **A** a different rota   **B** forty minutes   **C** a second machine',
  '**34**  What does the man say he told his company?   **A** before he signed   **B** after he signed   **C** the following month',
  '**35**  What does the woman say the commas changed?   **A** the date   **B** the number of nurses   **C** the name',
].forEach(t => out.push(q(t)));
out.push(box('Part 2 · Matching (5 marks)  🔊 Track ET-2', [
  'You will hear five people talking about something they now do differently at work. For each speaker (**36–40**), choose from **A–H** what each one says made the difference. There are **three** letters you do not need. You will hear the recording twice.',
], C.lteal, C.teal));
[
  '**36**  Speaker 1 ______   **37**  Speaker 2 ______   **38**  Speaker 3 ______   **39**  Speaker 4 ______   **40**  Speaker 5 ______',
].forEach(t => out.push(q(t)));
out.push(model([
  '**A**  Somebody asked them for a copy of something.',
  '**B**  They read a page they had always skipped.',
  '**C**  They asked one question and got an answer they had not expected.',
  '**D**  They counted something in their own writing.',
  '**E**  They were given a form that did not exist before.',
  '**F**  They were told by a manager to change what they did.',
  '**G**  Somebody asked them for their opinion in front of other people.',
  '**H**  They stopped keeping a record and nobody noticed.',
]));
out.push(box('Part 3 · Complete the notes (5 marks)  🔊 Track ET-3', [
  'You will hear a woman talking about a trial on a hospital ward. Write **one or two words or a number** in each gap (**41–45**). You will hear the recording twice.',
], C.lteal, C.teal));
out.push(box('THE THREE-NIGHT TRIAL', [
  'Number of shifts in her record: **(41)** ______',
  'The trial started on **(42)** ______ June',
  'The other night sister joined the trial on the **(43)** ______',
  'Length of time the ward has had one trolley: since **(44)** ______',
  'What she says would settle it: a second **(45)** ______ for a month',
], C.lyellow, C.orange));
out.push(box('Part 4 · An interview (5 marks)  🔊 Track ET-4', [
  'You will hear an interview with a teacher of mathematics. For each question (**46–50**), choose the correct answer **A**, **B** or **C**. You will hear the interview twice.',
], C.lteal, C.teal));
[
  '**46**  Why did she first want to use the projector?   **A** She had been told to.   **B** Her classes had asked for it.   **C** She wanted to show a shape she cannot draw by hand.',
  '**47**  What does she say about the two training afternoons?   **A** She did not attend them.   **B** She attended both and still could not use the machine.   **C** They were cancelled.',
  '**48**  What did she ask for in the end?   **A** forty minutes in her own room with one machine   **B** a machine of her own   **C** a written guide',
  '**49**  How does she describe the answer she got?   **A** It took four months.   **B** It came in nine seconds.   **C** It never came.',
  '**50**  What does she say she will do next year?   **A** stop using the projector   **B** ask two colleagues to come with her   **C** teach a different year group',
].forEach(t => out.push(q(t)));

// ================= PAPER 4 · SPEAKING =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 12 minutes · 20 marks)'));
out.push(box('Part 1 · About you (4 marks) — your teacher asks each student', [
  'What is your name, and where do you work or study?',
  'Tell me about the people you work with.',
  'What is something you do every week that you did not do a year ago? Why?',
  'Tell me about something you have been doing for a long time.',
  'Have you ever written something that changed what somebody else did? What was it?',
], C.lteal, C.teal));
out.push(box('Part 2 · The long turn (5 marks) — one student speaks for about a minute', [
  '**Student A.** Here is your card. Describe the situation, and then say what you would do.',
  '_**Card A.** A woman is standing at a counter in an office. She was told something four weeks ago by a clerk who is not there today, and the clerk who is there says that nothing of the kind was ever said. She has nothing in writing. There are six people waiting behind her._',
  '**Student B.** Here is your card. Describe the situation, and then say what you would do.',
  '_**Card B.** A man has a sheet of eleven conditions on a counter in front of him and a pen in his hand. He has crossed nine of them out. Behind him, three men are working at a press, and one of them is watching him._',
], C.lteal, C.teal));
out.push(box('Part 3 · Talk together (6 marks) — the two students talk to each other', [
  '**A new member of staff starts on Monday. Here are some things somebody could do for them in the first week.**',
  '**Talk together about the different things somebody could do, and then decide which two would be most useful.** You have about three minutes. **You do not have to agree.**',
  table(['', ''], [
    ['① write them a page about who everybody is', '② show them where everything is kept'],
    ['③ give them the definitions page of their contract', '④ tell them what went wrong here last year'],
    ['⑤ ask them, on the first day, what they want to know', '⑥ leave them alone for a week'],
  ], [1, 1]),
], C.grey, C.navy));
out.push(box('Part 4 · Discussion (5 marks) — your teacher asks you both', [
  'Which is better at work — saying something, or writing it down? Why?',
  'Some people say that keeping a record of your own mistakes is dangerous. What do you think?',
  'Is it ever right to agree with somebody when you do not? ',
  'Who has the hardest first week — the new person, or the people they join?',
  'What is the one thing you would want a new colleague to be told about you?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('How your teacher marks your speaking (20 marks)', [
  '**Grammar and vocabulary (5)** — the tenses and structures of Units 1–12 used accurately: the two present tenses, the narrative past, the past perfect, the two perfects, the passive, obligation, requests, conditionals, deduction, reported speech, relative clauses and the language of opinion and concession.',
  '**Discourse management (5)** — in Part 2, a minute of connected speech with reasons attached; in Parts 3 and 4, answers long enough to be worth hearing and no long silences.',
  '**Pronunciation (4)** — understandable throughout; weak forms attempted; a defining clause run on and a non-defining clause given its two pauses.',
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
  'This is the end of **Book 1** — twelve units, eighty-four cycles, and ninety-six lines in the twelve **I can…** boxes.',
  'Whatever your total, the useful number is not out of a hundred: it is how many of the ninety-six lines you can tick 😀. Go back through the twelve boxes this week and count them. Then look at the lines you have left at 😐 and write the list on one piece of paper, because that list — and not this mark — is what Book 2 starts from.',
  'And keep your four envelope pages from 12.6 together with that list. Unit 13 opens on them.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · End-of-Book Test');
