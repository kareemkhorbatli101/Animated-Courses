// Proactive Business English A2 · Syria Edition · Book 2 · END-OF-BOOK TEST (Units 13–24) — Answer Key
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('END-OF-BOOK TEST · Answer Key and Marking'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition · Units 13–24_', { color: '7F7F7F' }));
out.push(box('How to mark this test', [
  '**100 marks: Reading 30 · Writing 30 · Listening 20 · Speaking 20** — the A2 Key weighting, so a percentage here is comparable with a real result.',
  '**Reading and Listening** are one mark per question, right or wrong. No half marks, and no mark for an answer with two letters circled.',
  '**Writing** is marked against the band tables below. Mark **content first, language second**: a message that does the four things in imperfect English scores above a beautiful one that leaves out the date.',
  '**Speaking** is marked live, on the table in the paper. If two teachers are available, mark Part 2 together and compare before agreeing — the difference between examiners is usually about how much they forgive a missing date, and this is the test where that should not be forgiven.',
  '⚠ **This key is deliberately stricter about dates than the unit keys are.** Across Units 22 and 24 the course asks for a date on every deadline, every confirmation and every proposal. If this paper does not enforce that, the habit does not survive the course.',
], C.grey, C.navy));

// ===================== READING =====================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (30 marks)'));
out.push(h3('Part 1 · Notices, notes and messages (6 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6'], [['Answer', 'B', 'C', 'B', 'A', 'A', 'C']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('**1** _where it stands, with the label visible_ — the Unit 21 rule.  **2** she has asked for a confirmation **earlier** than the deadline (Unit 22.3).  **3** do not restart; report with the time and what you were doing (Unit 15).  **4** signed lease and ordered sign = **arranged** (Unit 24.1).  **5** fourteen days from 2 May takes it to 16 May.  **6** _by name_, by the person who counted it (Unit 23.4).'));
out.push(h3('Part 2 · Three colleagues and their year (7 marks)'));
out.push(table(['Q', '7', '8', '9', '10', '11', '12', '13'], [['Answer', 'C', 'B', 'A', 'B', 'A', 'C', 'A']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('**7** Abu Yasser, _since 1998_.  **8** Bassel, who counted people on the pavement for four days.  **9** Hala — nine of eleven complaints were about nobody telephoning.  **10** Bassel: _no lease and no date_.  **11** Hala: one course, about a third of it used.  **12** Abu Yasser, who writes on the note what he has counted.  **13** Hala (the proportion, after arguments) and Bassel (counting, after Homs).'));
out.push(note('Question 13 is the only one in Part 2 that needs two of the three texts held at once. Expect it to be the one most often lost, and do not re-teach it — it is doing its job.'));
out.push(h3('Part 3 · A longer text (6 marks)'));
out.push(table(['Q', '14', '15', '16', '17', '18', '19'], [['Answer', 'C', 'A', 'C', 'B', 'A', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('**14** it would have failed in front of four hundred customers at once.  **15** nothing bought, nobody taken on.  **16** thirty needed, nineteen came.  **17** two customers moved a standing Thursday order.  **18** _a customer who asks for Saturday is not the same as a customer who will order on Saturday_.  **19** the text calls the failure useful and says what was learned — neither a waste nor an argument for repeating it.'));
out.push(h3('Part 4 · Choose the word (6 marks)'));
out.push(table(['Q', '20', '21', '22', '23', '24', '25'], [['Answer', 'B', 'A', 'A', 'B', 'C', 'C']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('**20** _two … **were**_ (plural after a number).  **21** _must **be** checked_ — the modal passive needs _be_.  **22** _writing **to** ask_.  **23** _**by** Thursday_ when Thursday is the last day.  **24** _**have been** … since_.  **25** _suggest **starting**_.'));
out.push(h3('Part 5 · Write one word (5 marks)'));
out.push(table(['Q', '26', '27', '28', '29', '30'], [['Answer', 'of', 'sent', 'yet', 'faithfully', 'to']], [1, 0.9, 0.9, 0.9, 1.3, 0.9]));
out.push(p('**26** _because **of**_ + noun.  **27** the second passive shares _are_: _printed … and **sent**_.  **28** _haven\'t … **yet**_.  **29** no name → _**faithfully**_.  **30** _hope **to** open_.'));
out.push(note('Accept no alternatives in Part 5 except **mailed** or **shipped** for 27 — each of the other four is the one word that fits. Spelling must be right for the mark; _faithfuly_ scores 0.'));

// ===================== WRITING =====================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (30 marks)'));
out.push(h3('Part 1 · A formal request (10 marks)'));
out.push(sample('Model answer (58 words)', [
  'Dear Ms Dagher, I am writing to ask for a certified copy of form 4/A for registration 11-4471. It must carry the office seal; a scan is not enough, because the bank requires the seal. We need it by 20 May, as the loan file closes on the 21st. Could you confirm by 15 May that this is possible? Thank you. Nour Mansour',
]));
out.push(table(['', 'Marks', 'What earns them'], [
  ['**Purpose in the first line**', '3', '2 for the purpose in line one; 1 for a reference number in it.'],
  ['**The form required**', '2', 'Stamped / sealed / on paper / a PDF will not do — anything that tells the reader how much trouble to go to.'],
  ['**A date with its reason**', '3', '2 for a date; 1 for the reason beside it. _As soon as possible_ scores 0 of 3.'],
  ['**An earlier confirmation date**', '2', 'A date earlier than the deadline. _Please confirm_ with no date scores 0.'],
], [1.4, 0.6, 4]));
out.push(p('⚠ **Fewer than 35 words:** take 2 marks off the total for this part, however good it is. The minimum is stated on the paper twice.'));
out.push(p('⚠ A first line of good wishes before the purpose costs the 2 purpose marks even if the purpose appears in line two. Position is the thing being tested; Unit 22.2 exists for it.'));
out.push(h3('Part 2 · A three-step proposal (20 marks)'));
out.push(sample('Model answer (93 words)', [
  'Dear Mr Ayoub, we would like to propose a count of the twenty fastest-moving lines, every Friday at four, for four weeks from 6 June. In the last three months nine customers have been told an item was in stock when it was not, and seven of the nine were in those twenty lines. If the four Fridays find real differences, we would then count the whole store room monthly. If they find less than 100,000 in total, we stop and I will say plainly that it was not worth the time. Nothing is bought, so stopping costs four Friday afternoons. Could you say yes or no by 2 June? Thank you. Hala Mourad',
]));
out.push(table(['', 'Marks', 'What earns them'], [
  ['**A small, dated first step**', '5', '3 for small enough to be reversible; 2 for a start date and a length. A proposal for everything from next month scores 2 of 5.'],
  ['**One number from real demand**', '4', '4 for a count of something that happened. An estimate with no source scores 2; _everybody has asked_ scores 0.'],
  ['**Step two, conditional**', '3', '3 only if it depends on step one — _if it works, we would then…_ An independent second idea scores 1.'],
  ['**How you would stop, and the cost**', '5', '3 for a stated exit with a threshold; 2 for what stopping costs.'],
  ['**One ask, with a date**', '3', '2 for a single ask; 1 for the date. Two or more asks score 1 of 3.'],
], [1.5, 0.6, 4]));
out.push(p('⚠ **Outside 60–100 words:** take 3 marks off. Under 60 is usually a proposal with no exit, which the band table has already punished; over 100 is usually the reasoning that Unit 24.3 says can wait for the meeting.'));
out.push(p('⚠ Mark the **exit** before anything else. It is the single thing this paper is testing that the rest of the course does not, and a proposal without one cannot score above 15 however well written.'));
out.push(p('⚠ Do not take marks off for an unrealistic proposal. A learner inventing a company is answering the task; a learner proposing something their own manager would refuse is doing the harder and better version of it.'));

// ===================== LISTENING =====================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (20 marks)'));
out.push(p('_Play each recording **twice**. Read at the speed of the dialogues in the units, not faster._', { color: '595959' }));
out.push(h3('Part 1 · Five short conversations (5 marks)'));
out.push(table(['Q', '31', '32', '33', '34', '35'], [['Answer', 'B', 'C', 'A', 'B', 'C']], [1, 0.9, 0.9, 0.9, 0.9, 0.9]));
out.push(dlg('Track ET2-1  Audio script', [
  ['Hala', '**31** Two of the twenty boxes are crushed — two of the twenty, both on the bottom layer.'],
  ['Technician', '**32** Before I come out, I need the model number. It is on the plate inside the door, not on the invoice.'],
  ['Nour', '**33** Could you confirm by Thursday that the twelfth is possible? The auditor is here on the thirteenth and the file closes that day.'],
  ['Mr Ayoub', '**34** Baghdad Street is arranged — the lease is signed. Homs we only hope to do; there is no lease and no date.'],
  ['Hala', '**35** The complaint was not about the crushed boxes in the end. It was that nobody telephoned.'],
]));
out.push(h3('Part 2 · Complete the progress note (6 marks)'));
out.push(table(['36', '37', '38', '39', '40', '41'], [
  ['four', '24 May', '30 May', '6 June', 'the licence', '8 June'],
  ['steps done, of six', 'painting finished', 'shelves finished', 'the sign arrives', 'the one thing watched', 'opening date'],
], [0.9, 1.1, 1.1, 1, 1.2, 0.9]));
out.push(dlg('Track ET2-2  Audio script', [
  ['Nour', 'Progress on Baghdad Street, as at the twenty-eighth of May. **36** Four of the six steps are done: the lease signed on the twelfth, the sign ordered on the twelfth, the licence applied for on the twelfth, and **37** the painting finished on the twenty-fourth of May, on time.'],
  ['Nour', 'Two are not done yet. **38** The shelves will be finished on the thirtieth of May, and the stock moves from Mezzeh between the first and the fifth of June.'],
  ['Nour', 'What has changed: the sign maker now says three and a half weeks rather than three, **39** so the sign arrives on the sixth of June, two days before opening instead of four.'],
  ['Nour', '**40** The one thing I am watching is the licence, which may come after the opening — we are allowed to open with it pending, and I have the paper that says so. **41** Still the eighth of June. Nothing in this report moves the opening date.'],
]));
out.push(note('Accept _4_ for 36 and any clear form of the dates for 37–39 and 41 (_the 24th_, _24/5_, _24 May_). For 40 accept _licence_ or _the licence_ only; _the sign_ is the changed thing, not the watched one, and that distinction is the question.'));
out.push(h3('Part 3 · A telephone call (5 marks)'));
out.push(table(['Q', '42', '43', '44', '45', '46'], [['Answer', 'B', 'C', 'A', 'B', 'A']], [1, 0.9, 0.9, 0.9, 0.9, 0.9]));
out.push(dlg('Track ET2-3  Audio script', [
  ['Hala', 'Ms Shamsi — Hala Mourad at Sham Trading. **43** I have written twice about order 0618, on the twenty-eighth of April and on the sixth of May.'],
  ['Ms Shamsi', 'I know. I am sorry. I have no date from the factory yet.'],
  ['Hala', '**42** I am not telephoning about the wrap. **44** I am telephoning about one question: can ten boxes reach us by the fourteenth, yes or no?'],
  ['Ms Shamsi', 'And if I cannot say today?'],
  ['Hala', '**46** Then I need to know by Monday, because **45** if the answer is no I will buy ten boxes locally for the first week, and a local order has to go in by Monday. After Monday I cannot.'],
  ['Ms Shamsi', 'Then I will telephone the factory this afternoon and tell you tomorrow, either way.'],
  ['Hala', 'Thank you. Either way is all I need.'],
]));
out.push(h3('Part 4 · A longer talk (4 marks)'));
out.push(table(['Q', '47', '48', '49', '50'], [['Answer', 'B', 'A', 'C', 'B']], [1, 0.9, 0.9, 0.9, 0.9]));
out.push(dlg('Track ET2-4  Audio script', [
  ['Mr Ayoub', '**47** Thank you for the three weeks in August. The generator failed on the fourth, we worked mornings only until the twenty-sixth, and not one delivery was late. I know what that cost, because I was here on two of those mornings and most of you were here on all of them.'],
  ['Mr Ayoub', 'What went wrong this year was Homs. We opened a store in 2019 and closed it in 2021, and **48** that was my decision both times. We opened it without counting the walk-in trade in that street for a single week first.'],
  ['Mr Ayoub', '**49** We have learned to count before we sign, and the Baghdad Street lease was signed only after Bassel had stood on that pavement on four separate days.'],
  ['Mr Ayoub', '**50** Next year, one arranged thing: we are going to open on Baghdad Street on the eighth of June. The lease is signed, the sign is ordered and the licence is applied for. Everything else you may hear about next year is a hope, and I will tell you which is which as it happens.'],
]));

// ===================== SPEAKING =====================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (20 marks)'));
out.push(p('**Part 1 · About you and your work (8 marks).** Ask all five questions of each candidate. Do not help with the fifth; the sorting is what is being marked.'));
out.push(sample('A strong Part 1 answer to question 5 (≈45 words)', [
  '"One arranged thing: we are going to run a second press from the first of August. It is paid for and it ships on the twelfth of July. One thing we hope to do: a second shift in the afternoon. Nobody has been asked and there is no date, so it is a hope."',
]));
out.push(p('⚠ A candidate who answers question 5 with two futures and no distinction between them cannot score above 6 of 8, however fluent. That distinction is the last thing Book 2 teaches and the one thing this question exists to find.'));
out.push(p('**Part 2 · Talk together (12 marks).** Give the two role cards, allow one minute of reading, then let them run for about four minutes. Do not prompt. If neither of them has produced a date by three minutes, let the silence do the work — it will be in the mark, and it should be.'));
out.push(sample('A strong Part 2 exchange (abridged)', [
  '**A:** Six of the forty boxes have broken tiles, five together in one corner of the pallet and one in the middle of the second layer. I photographed them before anything was moved, with the label in the picture.',
  '**B:** I am very sorry about that. That should not have happened. I cannot promise a replacement today because I have not spoken to the warehouse.',
  '**A:** I am not asking for a promise today. I am asking when you can tell me.',
  '**B:** By Thursday. I will telephone the warehouse this afternoon and write to you on Thursday either way.',
  '**A:** Then Thursday, and I will keep all six boxes unopened until then — nothing is thrown away.',
  '**B:** Thank you. I will confirm it to you in writing on Thursday, and I will put the proportion in the email so the warehouse sees it.',
]));
out.push(p('⚠ Note what the model does **not** do: A never says where the damage happened, and B never says _sorry you feel that way_ and never blames the warehouse to the customer. Those two absences are worth 4 of the 12 marks between them.'));
out.push(table(['', '10–12 marks', '6–9 marks', '0–5 marks'], [
  ['**Part 2**', 'Proportion and position; no accusation; apology for the thing; one action with a date; who confirms, and in what form.', 'Most facts; an apology; an action with a date **or** a confirmer, not both.', 'No proportion; blame or defence; no action, or an action with no date.'],
], [0.8, 1.7, 1.7, 1.7]));

// ===================== BANDS =====================
out.push(pb());
out.push(h2('Reading the result'));
out.push(table(['Total', 'What it means', 'What to do next'], [
  ['**85–100**', 'Comfortably A2 and already doing some of what B1 asks: the facts sorted, the dates attached, the certain separated from the hoped-for.', 'Start B1. Keep this paper; the Writing Part 2 band table is the standard B1 will hold you to from the first week.'],
  ['**70–84**', 'A solid A2. The habits are there and they slip under pressure, which is normal at this level.', 'Start B1, and reread Units 22 and 24 in the first fortnight — not for the grammar, for the dates.'],
  ['**55–69**', 'A2 reached. Typically the Reading and Listening are strong and the Writing loses marks on the parts that are not language: the exit, the confirmation date, the single ask.', 'Go back to the **"I can…"** boxes ticked 😐, and rewrite the two Writing tasks of this paper against the band tables before starting B1.'],
  ['**40–54**', 'The English is largely there and the habits are not yet. Almost always: _as soon as possible_ in place of a date, a proposal with no way of stopping, and a certainty that was a hope.', 'Four weeks on Units 15, 21, 22 and 24, one a week, then retake this paper. Do not start B1 first; these four are the ones B1 assumes.'],
  ['**below 40**', 'The book has not yet been used outside the classroom, which is where it works.', 'Take the six cycles found hardest, one a week, and do each one\'s **Homework** stage for real — a real email, a real report, a real request — then retake.'],
], [0.9, 3, 3]));
out.push(sp());
out.push(box('A last note on marking this paper', [
  'Two candidates will finish this test with the same total and very different English. One will have lost marks on tenses and kept every date; the other will have written faultless sentences with no date in any of them. The first is further on, and this marking scheme is built to say so.',
  'That is not a view about examinations. It is the measured result of twenty-four units: across every unit key in both books, the fault that cost learners most was never a tense. It was a missing number, a missing date, or a certainty that turned out to be a hope.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · End-of-Book Test · Answer Key');
