// Proactive English B1 · Syria Edition · Book 1 · MID-BOOK TEST — KEY (Units 1–6)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });

out.push(h1('MID-BOOK TEST · Units 1–6 — KEY'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Total: 60 marks** — Reading 20 · Writing 15 · Listening 15 · Speaking 10.',
  'Reading and Listening are **1 mark per question**, 35 questions in all. Writing has two band tables below (7 and 8). Speaking has a four-row grid printed on the test paper itself.',
  'Read each listening part **twice**, at normal speed, with a short pause between questions. Do not slow down; the weak forms of _have to_, _supposed to_, _had been_ and _has been_ are part of what is being tested, and they disappear if you read carefully.',
  'The three audio scripts are printed in this key after the listening answers. Do not photocopy the key.',
  '**Timing.** One 90-minute session does the whole test if Speaking is done in pairs while the others write. Otherwise: Reading and Listening in one lesson (60 min), Writing and Speaking in the next.',
  '**Nothing in this test is new.** Every item is traceable to one of the forty-eight lines in the six **I can…** boxes, and the table at the end of this key says which.',
], C.lblue, C.navy));

// ---------- PAPER 1 ----------
out.push(paper('PAPER 1 · READING (20 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · notices (5)', '1 **B** · 2 **C** · 3 **B** · 4 **A** · 5 **C**'],
  ['**Part 2** · gapped text (5)', '6 **C** · 7 **G** · 8 **A** · 9 **D** · 10 **F**   _(not needed: B, E, H)_'],
  ['**Part 3** · vocabulary (6)', '11 **B** · 12 **A** · 13 **A** · 14 **A** · 15 **B** · 16 **A**'],
  ['**Part 4** · open cloze (4)', '17 **with** · 18 **but** · 19 **never** · 20 **them**'],
], [1, 3]));
out.push(NOTE('**Part 1, question 3** is the one that separates the class. The notice changes **where and when** the sheet is collected, which is what makes the check possible; it does not abolish the check (C) and it does not require a signature at the office (A, which is the old practice the notice is ending). Students who read for the topic rather than the instruction choose A.'));
out.push(NOTE('**Part 2** is done with referring words, not with meaning. **7 G** — _any of them_ points back at the children watching. **8 A** — _It said_ answers the two sentences beginning _It did not say_. **9 D** — _She also could not_ follows the first thing she could not do. **10 F** — _both of them_ points at the two training afternoons. The three distractors are all plausible and none of them is tied to a sentence on either side; that is how the part is built.'));
out.push(NOTE('**Part 3, question 13.** Only _noticed_ is transitive here: ~~what he had not looked / seemed / appeared~~. Question **15**: _still waiting_ — ⚠ _yet_ cannot stand in that position in a positive sentence. Question **16**: _which says nothing_ — a document **says**; a person **tells** somebody something.'));
out.push(NOTE('**Part 4** is a single-word cloze and the four answers are the only ones to accept. **17 with** (_replaced X with Y_). **18 but** — the contrast is the whole sentence; accept _yet_, not _and_. **19 never** — _had never been asked_; do not accept _not_, which needs _ever_. **20 them** — _both of them_.'));

// ---------- PAPER 2 ----------
out.push(pb());
out.push(paper('PAPER 2 · WRITING (15 marks)'));
out.push(S('Part 1 · An email (7 marks)'));
out.push(A('**All four notes must be covered** — what to count, the difference between _have done_ and _have been doing_, one example of your own, and one warning. A script that misses a note cannot score above 4, however good the English is. Mark the four off in the margin before you read for language.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Strong', '6–7', 'All four notes, each developed in at least a sentence. The two tenses used and **contrasted** on purpose. A number in the example. The warning is a real one.'],
  ['Adequate', '4–5', 'All four notes present, one or two of them thin. Tenses mostly right; the contrast implied rather than made. Errors do not obscure meaning.'],
  ['Weak', '2–3', 'One note missing, or two notes merged. Present perfect and present perfect continuous used interchangeably. Meaning recoverable with effort.'],
  ['Very weak', '0–1', 'Two or more notes missing, or not an email.'],
], [1.1, 0.8, 4]));
out.push(SAMPLE([
  '**Sample script (131 words — band 6–7)**',
  'Dear Sam,',
  'Count something. Anything on your page that has no number in it is a chair, and the people reading thirty applications can see a chair from across the room.',
  'The two sentences are different claims. _I have been doing_ it gives the years, which nobody can check; _I have done_ it gives what exists, which they can. You need both, because the years tell them where the numbers came from — forty-one in eleven years is a different person from forty-one in eleven weeks.',
  'Mine: I have been on nights since January, which is 118 shifts, and in those shifts I have trained four new staff and covered 31 shifts for other people. I had both of those numbers in a book for a year and I had never added them up.',
  'One warning: put in one thing that went wrong, counted. A page of nothing but successes is read as a page of claims.',
  'Yours, Rasha',
]));
out.push(S('Part 2 · An article or a story (8 marks)'));
out.push(A('Either question. The **article** must answer both halves of the notice — the thing you did for a long time **and** what you found out — and may address the reader directly. The **story** must begin with the given sentence **word for word** and must be a narrative: the commonest failure is a page of reflection with nothing happening in it.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Strong', '7–8', 'Both halves answered (article) or a real sequence of events (story). Past simple, past perfect and the perfects used accurately and for a reason. One or two numbers. A last line that is earned.'],
  ['Adequate', '5–6', 'Task done. Tenses mostly controlled; one or two past perfects where a past simple would do, or the other way round. Organised in paragraphs.'],
  ['Weak', '3–4', 'Half the task, or the story\'s opening sentence altered. Tense drift through the narrative. Meaning recoverable.'],
  ['Very weak', '0–2', 'Task not attempted as set, or under 50 words.'],
], [1.1, 0.8, 4]));
out.push(SAMPLE([
  '**Sample script — Question 1, article (138 words — band 7–8)**',
  '**The floor at seven**',
  'Is there something you do at work that nobody has ever explained? I had one for four years, and it turned out not to be a rule at all.',
  'When I started at the printing shop the floor was swept at seven in the morning. Nobody told me to do it. The man who owns the shop did it, so I did it, and for four years I got up twenty minutes earlier than I needed to.',
  'In February I finally asked whether I could sweep at the end of the day instead. I asked the way you ask for a favour. He looked at me for a moment and said I did not have to sweep at seven — and then he said I did not have to sweep at all, because it had never been my job.',
  'Then he told me the one thing in that shop that really is a rule, which is about the rollers, and which nobody had told me in four years either.',
  'So ask. The worst answer is the one you have already given yourself.',
]));
out.push(SAMPLE([
  '**Sample script — Question 2, story (142 words — band 7–8)**',
  'I had been doing it the same way for years, and then somebody asked me why.',
  'It was a Thursday in April and we were sitting round the tables in Room 14. I had just read out my six steps for the night round — the trolley, the chart, the band, the drug, the signature — and I was rather pleased with them.',
  'A man who repairs telephones put his hand up and said: why is the signature at the bed?',
  'I said because nothing after it can be undone. He said no — why is it at the bed and not at the end of the bay, when you have told us there is nowhere to write at the bed?',
  'I had been signing at the end of the bay for eleven years and writing "at the bed" on every card I had ever made for a new nurse.',
  'I went in on the Monday and asked for a board on the trolley. It had never occurred to me to ask. It cost nothing and it came in a fortnight.',
]));

// ---------- PAPER 3 ----------
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (15 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · five extracts (5)', '21 **B** · 22 **B** · 23 **B** · 24 **A** · 25 **C**'],
  ['**Part 2** · notes (5)', '26 **1962** · 27 **yard** · 28 **2009** · 29 **accounts** · 30 **electricity**'],
  ['**Part 3** · interview (5)', '31 **B** · 32 **C** · 33 **B** · 34 **A** · 35 **B**'],
], [1.2, 3]));
out.push(A('**Part 2:** accept _the yard_ for 27 and _wiring_ for 30. Do not accept _1974_ for 26 or 28 — the extract names three years in one minute and only one of them answers each question, which is the standard trap in this part.'));
out.push(NOTE('**Question 25** is the item to replay in the feedback lesson. The speaker never says that she asked and never says that she was refused; she says that nobody has said yes and nobody has said no. Students who hear _nobody has ever said yes_ and stop there choose **A**. The whole of 6.3 is in that one answer.'));
out.push(S('Track MT-1 · Audio script'));
out.push(dlg(null, [
  ['21  Woman', 'I came onto permanent nights on the sixth of January, so that is nine months and ten days, which is a hundred and eighteen shifts. I have given four away and taken three.'],
  ['22  Man', 'No — actually, by the time he came in she had already written it. Every fact in your version is right and the order is wrong, which makes it a completely different story about her.'],
  ['23  Woman', 'The chart is taken from the end of the bed and read before the drawer is opened. Before, not while. Everything else on that round can be argued about; that one cannot.'],
  ['24  Man', 'This has come from the ministry and it is not mine, and I have written to them about it. Nobody is going to be watched by me. But if an inspector walks in while somebody is out of the building, we lose four months of work.'],
  ['25  Woman', 'A technician lent me the key for one evening in my second year and never asked for it back. Nobody has ever said yes to me and nobody has ever said no, and I have had it for two years.'],
]));
out.push(S('Track MT-2 · Audio script'));
out.push(dlg(null, [
  ['Lubna', 'The building itself went up in 1962, as the offices of a textile company — you can tell from the corridor, because the doors are too narrow and they open outwards. In 1974 the fourth floor was extended out over the yard, and you can see that from the street, because a different sand was used in the render and it has weathered differently. Then it was converted to a language centre in 2009: the partitions were taken out and four large rooms were divided into nine. Rooms 13 and 14 were made out of one accounts office, and the thing that was not done in 2009 is the one that still costs us something today. The electricity was not re-wired when the rooms were divided. The two rooms share one circuit and one switch, and somebody has had to put a second switch by the door with the wire on the outside of the wall.'],
]));
out.push(S('Track MT-3 · Audio script'));
out.push(dlg(null, [
  ['Interviewer', 'How long have you had the shop?'],
  ['Bassel', 'Nineteen years. Since 2007.'],
  ['Interviewer', 'And until last month there was a list of rules by the door.'],
  ['Bassel', 'Eleven of them, pinned up, written one at a time over those nineteen years. I wrote every one of them myself.'],
  ['Interviewer', 'You crossed nine of them out.'],
  ['Bassel', 'Nine. Because when I finally read them all at once I saw that nine were things I do myself — the floor at seven, the tea at half past ten, the trimmer wiped before it goes away — and that not one of those nine had ever been asked of anybody.'],
  ['Interviewer', 'What made you sit down and do it?'],
  ['Bassel', 'A man who has worked beside me for four years asked me in February whether he might sweep at the end of the day instead of at seven. He asked as if he were asking for a favour. That was the morning the list came down.'],
  ['Interviewer', 'And the two that are left?'],
  ['Bassel', 'One is about proofs: nobody signs a proof they set themselves. The other is that nobody puts a hand near the rollers while the machine is running, and that one is a rule and not a habit, because it nearly took my thumb in 2009.'],
]));

// ---------- PAPER 4 ----------
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (10 marks)'));
out.push(A('Two parts only. **Preliminary Speaking Parts 2 and 3** are not used here, because the picture description is opened in Unit 9 and the collaborative task in Unit 12; both appear in the End-of-Book Test. What is tested here is Part 1 (about you) and the Part 4 discussion, which is the one the first six units have actually built.'));
out.push(A('**Timing:** about two minutes a student for Part 1 and three minutes for the pair discussion, so about eight minutes a pair. Give the card thirty seconds before they start and then say nothing until the three minutes are up, however long the first silence is.'));
out.push(table(['Row', 'Marks', 'What you are listening for'], [
  ['Grammar and vocabulary', '3', '_have been doing_ against _have done_; _for_ and _since_; the past perfect used once and correctly; _have to_ / _am supposed to_ / _am allowed to_ used with the right source of the obligation. 3 = accurate and varied · 2 = accurate in the simple shapes · 1 = recognisable attempt.'],
  ['Discourse management', '3', 'Answers long enough to be worth hearing, with a reason or a number attached. 3 = extends without being asked · 2 = answers and stops · 1 = one-clause answers.'],
  ['Pronunciation', '2', 'Understandable throughout. The weak forms attempted: /hæftə/, /səpəʊstə/, /əlaʊtə/, and the participle carrying the perfect. 2 = no strain on the listener · 1 = occasional strain.'],
  ['Interactive communication', '2', 'In Part 4: listening, asking the partner something, and disagreeing without stopping the conversation. 2 = a real exchange · 1 = two monologues in turn.'],
], [1.4, 0.6, 4]));
out.push(NOTE('**The commonest reason a pair loses the interactive mark** is that both of them talk to you. Say the instruction twice before they start — _talk to each other, not to me_ — and then look at the table rather than at them. Teachers who make eye contact during Part 4 lose their own students two marks.'));
out.push(A('**Model answers for Part 1** are in the unit keys and need not be repeated here. The one question worth reading the room on is the fourth: _what is one rule where you work that you have never had explained to you?_ Every student in a working adult class has one, and a student who says they have none has usually not understood the question rather than having no such rule — ask them who sets the times of things.'));

// ---------- the traceability table ----------
out.push(pb());
out.push(paper('WHERE EVERY ITEM COMES FROM'));
out.push(A('Each row names the unit and the **I can…** line the item tests. Use it for the feedback lesson: a student who lost three marks in one row needs one cycle re-read, not a general warning about tenses.'));
out.push(table(['Items', 'Unit and skill'], [
  ['1, 3, 5 · 24 · 32–35 · Part 4 cloze 17–20', '**Unit 6** — reading a rule and saying what it requires; _must_ / _have to_ / _don\'t have to_ / _mustn\'t_ / _allowed to_'],
  ['1, 4 · 23 · 26–30', '**Unit 5** — the passive, in a process, in a history, and in a notice'],
  ['2 · 11, 15 · 21', '**Unit 4** — _have done_ against _have been doing_; _for_ and _since_; _still_'],
  ['6–10 · 22', '**Unit 3** — the past perfect, and correcting an order of events'],
  ['12, 13, 16', '**Units 1–2** — state verbs, and the vocabulary of narrative'],
  ['14 · 25', '**Units 5–6** — _by_ and _with_; _not allowed and not stopped_'],
  ['Writing Part 1', '**Unit 4** — the two headings, counted sentences, the counted loss'],
  ['Writing Part 2', '**Units 3, 5, 6** — a dated narrative with a second shelf; a rule that turned out to be a habit'],
  ['Speaking Part 1', '**Units 1, 4, 6** — introducing yourself at B1 length; spans and totals; the third column'],
  ['Speaking Part 4', '**Units 5, 6** — what a page of rules requires; evidence against years'],
], [1.4, 3]));
out.push(sp());
out.push(box('After the test', [
  'Spend one lesson on it and spend it on **four items**, not thirty-five. The four that repay the time are: **Part 1 question 3** (reading the instruction and not the topic), **Part 2** (referring words), **question 25** (nobody said yes and nobody said no), and whichever writing band row the class lost most in.',
  'Then put the six **I can…** boxes side by side on one desk and let each student mark the lines they are still not sure of. The number out of forty-eight is the number that matters, and it is theirs and not yours.',
  '**Units 7–12** build on the second half of the list: cause and effect, the second conditional, deduction, reported speech, relative clauses, and conceding an argument. The End-of-Book Test is 100 marks and uses all four Preliminary Speaking parts.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Mid-Book Test · Key');
