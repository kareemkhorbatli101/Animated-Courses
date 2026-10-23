// Proactive Business English A2 · Syria Edition · Book 2 · MID-BOOK TEST (Units 13–18) — Answer key, audio scripts and marking
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (paras) => box(null, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('MID-BOOK TEST  ·  Units 13–18  —  Answer Key'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you mark', [
  'Total **60 marks**: Reading 18 · Writing 18 · Listening 12 · Speaking 12 — the A2 Key weighting (30 · 30 · 20 · 20 per cent), so a percentage here is comparable with a real examination result.',
  'Mark the **Reading and Listening** first; they are objective and they take ten minutes. Mark the writing last, when you know what the class as a whole could do.',
  'The three audio scripts are printed in full below. Read each one **twice**, at a normal speed. Do not slow down: candidates must learn to ask, not to be given.',
  '⚠ **Book 2 lengths are higher and they are marked.** Writing Part 1 is 35 words or more and Part 2 is 60 to 100. A perfect 28-word answer to Part 1 loses the length mark, and saying so once at the start of Book 2 saves it being lost in the End-of-Book Test.',
], C.grey, C.navy));

// ================= READING =================
out.push(h2('PAPER 1  ·  READING    (18 marks)'));
out.push(p('**Part 1 · Notices, notes and messages** (6 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6'], [['Answer', 'B', 'A', 'C', 'B', 'C', 'A']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(table(['Q', 'Why'], [
  ['1', 'Two dates. Enrolment is the earlier one and it is the one that matters (17.2).'],
  ['2', 'The negative imperative gives the order: the line first, then close.'],
  ['3', '"Outside the shared folder" includes your own machine (18.5).'],
  ['4', 'Ours have not moved **since** 14 March; theirs have risen four times in the same period (16.4).'],
  ['5', '"Not a beginners\' course" + "already use … daily" = experience is assumed.'],
  ['6', '"From an email alone" — the rule is to check by a channel you already had (18.6).'],
], [0.5, 4]));
out.push(p('**Part 2 · Three colleagues** (4 marks — one each)'));
out.push(table(['Q', '7', '8', '9', '10'], [['Answer', 'B', 'C', 'A', 'B']], [1, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**7** Fadi is not good at written notes and draws a map instead.  **8** Nadia is the only person who can close the month — last September it closed four days late.  **9** Hala has **already** taken over the Thursday complaints.  **10** Fadi is **going to** move to the lorry when the second van arrives.'));
out.push(note('7 and 10 are both Fadi, and candidates who have decided that each person is used once will change one of them. The texts are written so that the evidence is explicit in both; mark what the text says.'));
out.push(p('**Part 3 · A longer text** (5 marks — one each)'));
out.push(table(['Q', '11', '12', '13', '14', '15'], [['Answer', 'B', 'C', 'A', 'B', 'A']], [1, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**11** "had already restarted everything twice … and she had telephoned the engineer."  **12** "because the system was down for nine days that year."  **13** "he would rather hear that than \'a small technical problem\'."  **14** "word went round the market that we were open and two other places were not."  **15** "Both the book and the screen are kept."'));
out.push(p('**Part 4 · Open cloze** (3 marks — one each)'));
out.push(table(['16', '17', '18'], [['**since**', '**are**', '**will**']], [1, 1, 1]));
out.push(note('16: a point in time takes _since_ (13.1). 17: _going to_ needs the right form of _be_ (14.1). 18: the result half of a first conditional takes _will_ — and note that the _if_ half has the present simple, which is the trap (14.4). Accept no alternatives.'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (18 marks)'));
out.push(p('**Part 1 · A fault report** (6 marks) — sample answer'));
out.push(sample(['The shutter on the loading bay stops about a metre from the ground and will not go further down. It goes up normally. It started on Sunday the 9th: once on Sunday, twice on Monday and four times today, so it is getting worse. We have cleaned the track, greased it, closed it slowly and closed it with the bay empty. It does the same every time.  _(62 words)_']));
out.push(box('Marking Part 1 (6 marks)', [
  '**Task (3 marks), one for each point:** what it is doing **and where** · since when, **with a count** · what has been tried.',
  '**Language (2 marks):** the present continuous for a fault in progress (_it is jamming_, not _it jams_) · the present perfect for what has been tried.',
  '**Organisation and length (1 mark):** the points in order; **35 words or more**.',
  '⚠ **A count, not an adjective.** _It keeps happening_ scores 0 of 1 for the second point; _twice on Monday and four times today_ scores it.',
  '⚠ Do not take a mark off for inventing the machine or the workplace.',
], C.lyellow, C.orange));
out.push(p('**Part 2 · A work email** (12 marks) — sample answer'));
out.push(sample([
  '**Subject:** Order 0618 — two lines missing, please confirm by Thursday',
  'Dear Ms Shamsi,',
  'I am writing about order 0618, which we received on Tuesday.',
  'Two lines are missing: 20 rolls of wide wrap and 4 boxes of tape. The other five lines are complete and correct.',
  'Could you confirm by Thursday whether the two lines are coming, and on which date? If I have not heard by Thursday evening I will order them here and take them off the invoice.',
  'Thank you. Best regards, Hala Mourad · Sham Trading · 011 ___ ____  _(79 words)_',
]));
out.push(box('Marking Part 2 (12 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**Task**', '6', 'A subject line with **the thing and the ask** (2) · which lines are missing, with quantities (1) · which are correct (1) · a request **with a date** (1) · what the writer will do if there is no answer (1).'],
    ['**Language**', '4', 'The fixed email phrases used correctly (_I am writing about_, _please find attached_, _could you_) · one fact per line · few errors that slow the reader.'],
    ['**Organisation**', '2', '60–100 words (1) · a close with a name and a telephone number (1).'],
  ], [1, 0.7, 4]),
  '⚠ **The subject line carries two of the twelve marks.** _Order_ or _Problem_ scores nothing. It must name the thing and say what is wanted — that is the whole of 18.1.',
  '⚠ The real test, as in Book 1: **could the supplier act on this without writing back to ask a question?** If not, find the missing fact — it is almost always a quantity or a date.',
  '⚠ Over 100 words: take the length mark, but read on and mark the rest normally. A long email at A2 is usually a repeated one, not a better one.',
], C.lyellow, C.orange));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (12 marks)'));
out.push(p('**Part 1 · Four short conversations** (4 marks — one each)'));
out.push(table(['Q', '19', '20', '21', '22'], [['Answer', 'C', 'A', 'B', 'A']], [1, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**Part 2 · Complete the course notes** (5 marks — one each)'));
out.push(table(['23', '24', '25', '26', '27'], [['**three weeks**', '**Tuesdays and Thursdays**', '**five to seven / 17.00–19.00**', '**420,000**', '**18 February**']], [1.1, 1.5, 1.5, 1, 1.2]));
out.push(note('Accept "2 days a week" for 24 only if both days are named. ⚠ Do not accept **4 March** for 27: that is the start date, and the distinction between the two dates is the point of the task.'));
out.push(p('**Part 3 · A longer talk** (3 marks — one each)'));
out.push(table(['Q', '28', '29', '30'], [['Answer', 'B', 'C', 'A']], [1, 0.7, 0.7, 0.7]));
out.push(h3('Audio scripts — read each one twice, at a normal speed'));
out.push(dlg('Track MT2-1  Four short conversations', [
  ['Nour', 'Nadia, the bank form wants the years. How long have you worked here?'],
  ['Nadia', 'Eleven. Since March 2015 — so eleven in the spring.'],
  ['Mr Ayoub', 'Monday list. The Thursday room?'],
  ['Nour', 'Done. I have already booked it and taken the chairs out. The invoices went on Friday, and I haven\'t telephoned Aleppo yet.'],
  ['Abu Yasser', 'What is the printer doing?'],
  ['Nour', 'It is jamming. About ten pages, then the paper catches at the back on the left. Since Thursday, and it is getting worse.'],
  ['Hala', 'There is an email from Ms Shamsi saying her bank account has changed.'],
  ['Nadia', 'Do not click it and do not reply. Telephone her on the number in our own file, not the one in the message, and tell me whatever she says.'],
]));
out.push(sp());
out.push(dlg('Track MT2-2  A telephone call about a course', [
  ['Nour', 'Good morning. I am telephoning about the accounts systems course. Could you give me the details?'],
  ['Woman', 'It runs for three weeks, on Tuesdays and Thursdays, from five to seven in the evening. Six sessions.'],
  ['Nour', 'Three weeks, Tuesdays and Thursdays, five to seven. And the fee?'],
  ['Woman', 'Four hundred and twenty thousand, including the handouts.'],
  ['Nour', 'And when does it start?'],
  ['Woman', 'The fourth of March. But enrolment closes on the eighteenth of February — a fortnight before. People miss that one.'],
  ['Nour', 'Enrolment, the eighteenth of February. Thank you.'],
]));
out.push(sp());
out.push(dlg('Track MT2-3  Mr Ayoub talks to the staff about files', [
  ['Mr Ayoub', 'Three things about files, and then we can all stop looking for things. First: everything that more than one person needs goes in the shared folder. Not on your own computer and not on your telephone. A file on your computer does not exist on the day you are not here.'],
  ['Mr Ayoub', 'Second: the name. What it is, then the date — year, month, day — then whose it is. Prices, underscore, two thousand and twenty-six, oh three, fourteen, underscore, Aleppo. The words new, final and use this one are forbidden, all three.'],
  ['Mr Ayoub', 'Third: when a file is replaced, the old one goes into the folder called Old, with the same name. It is not deleted. Twice this year we have needed a price list from three versions ago, and both times we had it.'],
]));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (12 marks)'));
out.push(p('**Part 1 · About you and your work** (6 marks) — what a good answer sounds like'));
out.push(dlg(null, [
  ['Teacher', 'How long have you worked where you work?'],
  ['A', 'I have worked there for two years — since March 2024. Before that I worked at a school office for three years.'],
  ['Teacher', 'What have you already done today, and what haven\'t you done yet?'],
  ['A', 'I have already sent the invoices and I have just had the signed note back from the driver. I haven\'t telephoned Aleppo yet, because they do not answer before ten.'],
  ['Teacher', 'What did your workplace use to do that it does not do now?'],
  ['A', 'We used to write every order in a book by hand. We stopped in 2019, and what we lost is that nobody now knows at the end of the day whether everything taken has gone out.'],
]));
out.push(note('Each answer uses the right structure for the question — _for_ and _since_, _already / just / yet_, _used to_ — and adds one extra detail. An answer in the present simple to all three shows Book 1 and nothing after it.'));
out.push(p('**Part 2 · Talk together** (6 marks) — what a good discussion sounds like'));
out.push(dlg(null, [
  ['A', 'She is away for two weeks in September. If we do nothing, the month will close late again — four days last time.'],
  ['B', 'Three ideas before we choose. Why don\'t we send somebody on the course? What about an hour a week with her until September? Or we could ask her to write the steps down.'],
  ['A', 'We could, but the course is three weeks of evenings and it is in March. What about both — the hour a week, and she writes the steps as she shows them? What do you think about Hala? She is learning the invoice screen already.'],
  ['B', 'Hala, then. If she has the steps written by August, we will know in time whether it is enough.'],
  ['B', 'And if it is not enough, we still have the course in March. So: an hour a week from May, the steps written by August, and we decide in August. I will put it on Monday\'s list.'],
]));
out.push(box('Marking the speaking (12 marks)', [
  table(['', '5–6 marks', '3–4 marks', '0–2 marks'], [
    ['**Grammar and vocabulary** (6)', 'Units 13–18 used accurately and in the right place: the perfect with _for / since_, _already / yet_, _going to_ against _will_ against _may_, the first conditional with no _will_ after _if_, _used to_, _good at_. Work vocabulary is precise.', 'Some good language; mostly present tense; repeats structures; errors sometimes slow the listener.', 'Very short turns; many errors; almost no work vocabulary.'],
    ['**Communication and pronunciation** (6)', 'Clear; **three suggestions before judging any**; two outcomes side by side; asks the partner at least twice; reaches a decision with a date.', 'Takes part, but judges the first idea; agrees with everything; a decision is reached late or not stated.', 'Needs a lot of help; hard to understand; no decision.'],
  ], [1.1, 1.6, 1.4, 1.2]),
  '⚠ The commonest reason a pair stays in the middle band at this level is **judging the first suggestion**. Listen for three ideas on the table before any of them is weighed; that is 15.2 and it is the habit the second half of Book 2 is built on.',
  '⚠ Mark the pair for the **decision and its date**. _We should do something about it_ is a 3.',
], C.grey, C.navy));
out.push(sp());
out.push(box('After the test — what to do with the result', [
  '**42–60:** go on to Unit 19. If the weak paper is Speaking, give more of 15.2 — three suggestions before judging — and less board correction.',
  '**30–41:** look at **which** paper. Reading low → the exam-practice stage in each cycle 7, done again as homework. Writing low → the Writer\'s boxes of Units 13–18 read as a set; they are a course in office writing on their own. Listening low → play the unit tracks at full speed, twice, and do not slow down. Speaking low → the problem is nearly always the present simple doing the work of three tenses.',
  '**Under 30:** do not go on. Re-teach the four things the rest of Book 2 assumes: the present perfect with **for** and **since**, the difference between **going to** and **will** and **may**, the first conditional with **no _will_ after _if_**, and **used to**. Three weeks on those four is worth more than a term of Unit 19 on top of them.',
  '⚠ Compare each candidate with their own Book 1 End-of-Book Test. A candidate who scored 71 there and 44 here has not gone backwards — Book 2 is harder and the word counts are higher. Say so, or you will lose people in Unit 19.',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Mid-Book Test — Answer Key');
