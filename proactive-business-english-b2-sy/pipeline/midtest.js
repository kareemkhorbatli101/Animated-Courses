// Proactive Business English B2 · Syria Edition · Book 1 · MID-BOOK TEST (Units 1–6) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('MID-BOOK TEST  ·  Units 1–6'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (40 min) · **Writing** (40 min) · **Listening** (about 25 min) · **Speaking** (in pairs, about twelve minutes with your teacher).',
  'Total: **60 marks**, divided equally — Reading, Writing, Listening and Speaking are worth fifteen marks each. ⚠ This is the weighting of **B2 Business Vantage**, where the four skills are scored separately and your overall result is their **average**. One weak paper cannot be hidden behind three strong ones, and that is deliberate.',
  '⚠ **The Reading paper practises three of the examination\'s five parts** — matching, multiple choice and error correction. **The other two, sentence insertion and multiple-choice cloze, are in the End-of-Book Test.** In the real paper there are five parts and forty-five questions in one hour.',
  '⚠ **The Writing paper uses the examination\'s own lengths**: Part 1 is **40 to 50 words** and Part 2 is **120 to 140 words**. **These are not the course\'s lengths** — Units 1 to 6 asked for 80 words or more and 200 to 240 — **and the difference is the examination\'s, not a mistake.**',
  'Everything in this test happens at work. Where a task asks about **your** company, use your real job or invent one — you are marked on the English, not on the company.',
  '⚠ **Two things are marked here that no single unit put marks on.** In Writing Part 2, **whether your concession cost you anything** (Unit 3) — a concession a reader could have stopped at without thinking you had lost is worth no marks. And across the two Writing tasks, ⚠ **whether the sentence that carries the figure and the date is identical in both** (Unit 6) — not similar, identical.',
  'Write your answers on this paper, clearly, in pen. You **cannot** use a dictionary or your telephone.',
  '⚠ **If you finish early:** read your two Writing answers **aloud, one after the other, in one go.** A discrepancy is audible in four seconds and invisible on a desk.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (40 minutes · 15 marks)'));
out.push(part('Part 1  ·  Matching  (5 marks)', 'Read the three short texts **A–C**. For each statement **1–5**, decide which text it refers to. A text may be used more than once. Circle **A**, **B** or **C**.'));
out.push(sp());
out.push(model([
  '**A** _Nine hundred cartons leave here on 12 May and reach Aleppo on 13 May, so the plating must be finished by the 9th. I will send the gauge sheet on the 6th. As I have told the customer._',
  '**B** _I may be wrong about the sixty-one per cent. If I am, nothing else in this paper matters and you should stop at paragraph 4. The working is on one page and it is arithmetic and not judgement: if I have made an error you will find it in four minutes._',
  '**C** _No further goods are released to any account more than sixty days overdue. This takes effect from 1 April and applies to orders placed on or after that date. Only Mr Ayoub may authorise a departure, and it must be written on the account with the date and his initials._',
]));
out.push(q('**1** This text tells the reader where to stop reading.   **A**   **B**   **C**'));
out.push(q('**2** This text says that somebody else has already been told.   **A**   **B**   **C**'));
out.push(q('**3** This text says when it begins to apply.   **A**   **B**   **C**'));
out.push(q('**4** This text says how long it would take to check something.   **A**   **B**   **C**'));
out.push(q('**5** This text names one person and nobody else.   **A**   **B**   **C**'));
out.push(pb());
out.push(part('Part 2  ·  Multiple choice  (5 marks)', 'Read the text and answer questions **6–10**. Choose **A**, **B**, **C** or **D**. ⚠ Find the sentence that answers the question first, and look at the options afterwards.'));
out.push(model([
  '**WHY WE WRITE THE SAME THING THREE TIMES — a note to the management committee. M. Attar, 2 May.**',
  'I have been asked why three letters about one delay cannot be one letter copied three times. The answer is that they are not three versions of one document; they are three actions and one fact, and what decides how each is written is not who is reading it but what that reader will be doing on the following Tuesday morning.',
  'The bank moves a figure in a cash forecast. The customer re-plans her own delivery and gives her own customer a date. The yard decides whether to work a Saturday. Those are three different pieces of work, and a document which serves all three serves none of them well: the bank is given a bearing it will never use, and the yard is given a cash forecast it cannot act on.',
  'What must not vary is the sentence carrying the figure and the date. In the case that prompted this note, three documents said *the 2nd of May*, *the first week of May* and *the end of the month* — which are one day, five days and a different month. The writer believed she had written one date three times. The remedy is to write that sentence once, before any of the three documents, and to copy it without improving it.',
  'There is a second thing, and nobody does it. Each reader should be told that the others have been written to. Six words are enough. It costs nothing in April and it is worth a great deal in September, when two of them meet at a trade fair: a man who learns there that you also wrote to the buyer feels managed, and a man who already knew feels informed.',
  'I should add that the writer of those three letters did not know that her letter to the bank would be read by the credit committee before the manager saw it. Nobody had told her, and there was no reason she would know. It survived them because it had been written for an action and for a comparison rather than for a person — which is, in the end, the only way to write for readers whose existence you cannot establish.',
]));
out.push(q('**6** What does the writer say decides how each document is written?   **A** the reader\'s seniority   **B** how formal the relationship is   **C** what the reader will be doing on Tuesday morning   **D** the length of the document'));
out.push(q('**7** What is wrong with one document serving all three readers?   **A** it is too long   **B** it cannot be filed   **C** it takes longer to write   **D** it serves none of them well'));
out.push(q('**8** What did the three documents actually commit to?   **A** the same date in three registers   **B** one day, five days and a different month   **C** three dates the writer had chosen deliberately   **D** two dates and one omission'));
out.push(q('**9** Why are the six words worth a great deal in September?   **A** because a reader who already knew feels informed rather than managed   **B** because the letters will be compared in writing   **C** because the trade fair is where contracts are signed   **D** because the bank requires it'));
out.push(q('**10** Why did the letter survive the credit committee?   **A** the writer knew the committee existed   **B** it was short   **C** it was written for an action and a comparison rather than for a person   **D** the manager had read it first'));
out.push(pb());
out.push(part('Part 3  ·  Error correction  (5 marks)', 'In some of these lines there is **one extra word which is grammatically wrong**. Some lines are correct. ⚠ For a correct line, write **CORRECT**. For an incorrect line, write the extra word. Write in **CAPITAL LETTERS**.'));
out.push(sp());
out.push(model([
  '**TO: MR AYOUB.  FROM: N. MANSOUR.  THE CREDIT POLICY.  28 MARCH.**',
  '**11**  Thank you for your note. I have attached the draft and have been taken   ______________',
  '**12**  out eleven of the thirteen definitions, because none of them has ever   ______________',
  '**13**  cost us it anything. The two that remain are the ones we have argued   ______________',
  '**14**  about and lost. I am not asking you to approve the policy this week.   ______________',
  '**15**  I am asking you for read section 3 and tell me who the deputy is.   ______________',
]));
out.push(p('⚠ **Reminder:** the extra word must be **grammatically wrong**, not merely unnecessary. A word you could delete without breaking the grammar is not the answer.'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (40 minutes · 15 marks)'));
out.push(part('Part 1  ·  An internal communication  (5 marks)', 'Write **40 to 50 words**. Three content points, all three present. ⚠ Count your words and write the number at the end.'));
out.push(sp());
out.push(box('The situation', [
  'A supplier has let your company down and a delivery to one customer will now be **two weeks late**. Your manager has not yet decided whether to pay overtime to make the time up.',
  '**Write a message to the people who will do the work.** Say **what has happened as a figure and a date**, **what is not yet decided and who will decide it**, and **what they should do in the meantime**.',
], C.lyellow, C.orange));
out.push(...lines(6));
out.push(p('**Words: ______**'));
out.push(pb());
out.push(part('Part 2  ·  A report  (10 marks)', 'Write **120 to 140 words**. ⚠ Count your words and write the number at the end.'));
out.push(sp());
out.push(box('The situation', [
  'Your company has been offered a contract that would be the largest it has ever had, and the owner is in favour of it. ⚠ **You think it should be accepted only with a limit on it.**',
  '**Write a report for the owner.** It must contain, in this order:',
  '**(a)** ⚠ **a concession** — the best thing about the offer, in its own terms, with a figure of theirs in it, **and nothing after it that argues**',
  '**(b)** ⚠ **the one thing you may be wrong about, and what follows if you are**',
  '**(c)** **the one figure the case rests on**, with its base — *per cent of what, whose, over what period*',
  '**(d)** ⚠ **what you are not asking for, and then the smaller thing you are**',
  '⚠ **The sentence carrying your figure and your date must be identical to the one in your Part 1 answer, word for word.**',
], C.lyellow, C.orange));
out.push(...lines(14));
out.push(p('**Words: ______**'));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 25 minutes · 15 marks)'));
out.push(p('⚠ **To the teacher: read each script TWICE, at the speed of ordinary speech. Do not explain any word. Pause for one minute between the readings.**'));
out.push(part('Part 1  ·  Note completion  (5 marks)', 'Listen and complete the note. Write **one to four words or a number** in each gap.'));
out.push(sp());
out.push(model([
  '**THE AUGUST QUESTION — notes taken in the yard**',
  '**16**  How many things August is: ______________',
  '**17**  What the third one is: ______________',
  '**18**  How long it has been happening: ______________',
  '**19**  How long it takes each night: ______________',
  '**20**  Whose exposure it is: ______________',
]));
out.push(dlg('Listening Part 1 · script (teacher reads twice)', [
  ['Nour', 'The stress case says the generator and the border. August is both.'],
  ['Abu Yasser', 'August is three things.'],
  ['Nour', 'Three?'],
  ['Abu Yasser', 'The water. Three weeks in August the pressure drops and the hose at the gate will not fill the tank, and the press cannot run without water for the glue.'],
  ['Nour', 'And what do you do?'],
  ['Abu Yasser', 'We carry it in drums from the second store. About forty minutes a night.'],
  ['Nour', 'For how long?'],
  ['Abu Yasser', 'Five years. Nobody has ever asked me about August.'],
  ['Nour', 'Whose exposure is this?'],
  ['Abu Yasser', 'Nobody\'s, and that is why you have not got it. It has never once stopped the press.'],
]));
out.push(pb());
out.push(part('Part 2  ·  Multiple choice  (5 marks)', 'Listen and choose **A**, **B** or **C** for questions **21–25**.'));
out.push(sp());
out.push(q('**21** What does the speaker say she had wrong in the first draft?   **A** the figures   **B** the formality   **C** the hedging'));
out.push(q('**22** Why had she hedged to the yard and not to the bank?   **A** the yard could do something about it   **B** the yard was the only reader she would have to look in the face   **C** the bank would not have noticed'));
out.push(q('**23** Which reader gets the most detail?   **A** the bank   **B** the customer   **C** the yard'));
out.push(q('**24** What does she say detail is set by?   **A** the reader\'s seniority   **B** what the reader will do   **C** the length of the letter'));
out.push(q('**25** What would go to all three readers if the date were not certain?   **A** *should*   **B** *will*   **C** no date at all'));
out.push(dlg('Listening Part 2 · script (teacher reads twice)', [
  ['Nour', 'The bottom row is the one I had wrong in the first draft. I had *will* for the bank, *will* for Ms Tannous and *should* for the yard.'],
  ['Hala', 'Why the yard?'],
  ['Nour', 'Because the yard is the only one I would have to look in the face. Which is a reason to hedge to a person and not a reason to hedge in a document.'],
  ['Hala', 'And the second of May is a date you can keep?'],
  ['Nour', 'The plater runs from the thirteenth, we are four hundred cartons a month, three hundred and twenty is under a month\'s work, and the second press is free at night. So *will* is true, and *will* goes to all three. If it were not true, *should* would go to all three, including the bank.'],
  ['Hala', 'And the detail?'],
  ['Nour', 'The yard gets the most and the bank gets the least, which is the opposite of what formality suggests. The bank will do nothing with a bearing and Abu Yasser will decide a Saturday with it. Detail is set by what the reader does, not by how senior they are.'],
]));
out.push(pb());
out.push(part('Part 3  ·  Multiple choice  (5 marks)', 'Listen and choose **A**, **B** or **C** for questions **26–30**.'));
out.push(sp());
out.push(q('**26** What had the person at the counter been doing?   **A** nothing   **B** refusing release on overdue accounts   **C** telephoning every customer'));
out.push(q('**27** For how long, and how many times?   **A** three weeks, four times   **B** three months, four times   **C** three weeks, once'));
out.push(q('**28** What was her basis?   **A** an instruction from the owner   **B** the ledger   **C** the price list'));
out.push(q('**29** How many of the things the page changes are the rule itself?   **A** all three   **B** one   **C** none'));
out.push(q('**30** What would have happened if she had got it wrong?   **A** nobody would have known until November   **B** the owner would have corrected her at once   **C** the customer would have complained'));
out.push(dlg('Listening Part 3 · script (teacher reads twice)', [
  ['Nour', 'This takes effect on the first. Sixty days overdue, no release, and you point at the page.'],
  ['Lina', 'I have been doing it already. Three weeks. Four times.'],
  ['Nour', 'On what basis?'],
  ['Lina', 'On the ledger. If the balance is red and it is older than the month before last, I say the office has to approve it and I telephone you. And I have never written it down.'],
  ['Nour', 'Older than the month before last is about sixty days. You invented the rule I have spent nine days drafting.'],
  ['Lina', 'So what does the page change?'],
  ['Nour', 'Three things, and none of them is the rule. You stop telephoning me, because you can point at it. Your four guesses become four decisions. And when somebody says you let Jaramana have it in September, you have a sentence that says September does not apply to October.'],
  ['Lina', 'And if I had got it wrong?'],
  ['Nour', 'Three weeks with nothing to point at, and nobody would have known until November.'],
]));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about twelve minutes · 15 marks)'));
out.push(box('How the fifteen marks are awarded', [
  '**Part 1 — 4 marks.** Answering about your own work with a figure, a date or a name wherever one belongs.',
  '**Part 2 — 6 marks.** A collaborative task with your partner: listening, conceding something, and reaching a position.',
  '**Part 3 — 5 marks.** Putting a case to your teacher, with ⚠ **one thing that does not help you** in it.',
  '⚠ **Across all three parts, a candidate who says *probably* or *should* without naming a condition loses one mark, once.** **Units 4 and 6 both marked the condition; this paper marks its absence.**',
], C.grey, C.navy));
out.push(part('Part 1  ·  Your own work  (about three minutes)', 'Your teacher asks you questions. Answer with a figure, a date or a name wherever one belongs.'));
out.push(table(['Questions for candidate A', 'Questions for candidate B'], [[
  'What are you answerable for, and what is not yours?  ·  Name one figure your work rests on, and say where it comes from.  ·  What is the largest thing your workplace depends on, and what share is it?  ·  Name one rule you apply that nobody has written down.',
  'Name one decision at your work that is reported with no actor in it.  ·  Who actually took it, and who has been carrying it?  ·  Name one thing you are not asking for at the moment.  ·  Who reads your letters before the person they are addressed to?',
]], [1, 1]));
out.push(sp());
out.push(part('Part 2  ·  A collaborative task  (about four minutes)', 'Work with your partner. You disagree about one thing and you have to reach a position together. Then swap roles.'));
out.push(table(['Role card — you want the contract', 'Role card — you want it capped'], [[
  'The revenue is the best thing offered in ten years and you can say why with figures. ⚠ **Begin by conceding the strongest thing in your partner\'s case**, and do not say *but*. Then ask what number would satisfy them, and do not accept an adjective for an answer.',
  'The concentration is too high and you have a threshold. ⚠ **Begin by conceding the revenue case in its own terms and with nothing after it that argues.** Then give your number, its base, and the figure you have already lived with without complaining.',
]], [1, 1]));
out.push(sp());
out.push(part('Part 3  ·  Putting a case  (about five minutes)', 'Put a case to your teacher, as the person who decides, for something you want at your work.'));
out.push(p('You must include: ⚠ **a concession that costs you something** · **one figure with its base** · ⚠ **the one thing you may be wrong about, and what follows if you are** · **what you are not asking for** · and ⚠ **one fact that helps the other side.**'));
out.push(sp());
out.push(box('⚠ To the teacher', [
  '**Part 3 is the paper\'s diagnostic and the marks are in the last two items, not the first three.** **Most candidates will produce a concession, a figure and a smaller ask under pressure.** ⚠ **Very few will volunteer a fact that helps the other side**, **and that is the one to listen for** — **it is Unit 3.3 and it is the single best predictor of whether a candidate can write a paper somebody will act on.**',
  '⚠ **Do not prompt for it.** **If it is absent, it is absent.**',
], C.lyellow, C.orange));
out.push(sp());
out.push(p('_End of the Mid-Book Test. Units 7–12 continue from Unit 6 — and the Beirut question is answered in Unit 12._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Mid-Book Test');
module.exports = out;
