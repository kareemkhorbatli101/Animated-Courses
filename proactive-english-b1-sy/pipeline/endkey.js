// Proactive English B1 · Syria Edition · Book 1 · END-OF-BOOK TEST — KEY (Units 1–12)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });

out.push(h1('END-OF-BOOK TEST · Units 1–12 — KEY'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Total: 100 marks** — Reading 30 · Writing 30 · Listening 20 · Speaking 20.',
  'Reading and Listening are **1 mark per question**, fifty questions in all. Writing has two band tables below (15 and 15). Speaking has a four-row grid printed on the test paper itself.',
  'Read each listening part **twice**, at normal speed, with a short pause between questions. Do not slow down: the weak forms of _had been_, _has been_, _have to_, _would have_ and _whose_ against _who\'s_ are part of what is being tested and they disappear if you read carefully.',
  'The four audio scripts are printed in this key after the listening answers. Do not photocopy the key.',
  '**Timing.** Two sessions is the honest way to run it: Reading and Listening in one (about 80 minutes), Writing in the next (45), with Speaking done in pairs while the others write. One three-hour session is possible and produces a worse result from the same students.',
  '**Nothing in this test is new.** Every item is traceable to one of the ninety-six lines in the twelve **I can…** boxes, and the table at the end of this key says which unit each part comes from.',
], C.lblue, C.navy));

// ---------- PAPER 1 ----------
out.push(paper('PAPER 1 · READING (30 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · notices (5)', '1 **B** · 2 **A** · 3 **C** · 4 **A** · 5 **B**'],
  ['**Part 2** · matching (5)', '6 **E** · 7 **B** · 8 **D** · 9 **C** · 10 **A**   _(not needed: F, G, H)_'],
  ['**Part 3** · long text (5)', '11 **C** · 12 **A** · 13 **D** · 14 **B** · 15 **C**'],
  ['**Part 4** · gapped text (5)', '16 **A** · 17 **D** · 18 **G** · 19 **C** · 20 **B**   _(not needed: E, F, H)_'],
  ['**Part 5** · multiple-choice cloze (6)', '21 **B** · 22 **C** · 23 **C** · 24 **D** · 25 **C** · 26 **D**'],
  ['**Part 6** · open cloze (4)', '27 **since** · 28 **together** · 29 **kind** · 30 **would**'],
], [1.3, 3]));
out.push(A('**Part 1** · The five notices each turn on one thing that has been taught: **1** _including nights when the round finished on time_ (4.3 and 10.6 — a column of identical numbers is evidence). **2** _does not replace_ (12.2 — both, not either). **3** the two dates and who pays. **4** _does not have to be_ (6.2 — absence of obligation, not prohibition). **5** _by anybody who is alone_ — the restriction is on the person, not on the store.'));
out.push(A('**Part 2** · Every person needs one thing and each document supplies exactly one of them: **6** a date and a signature (E), **7** a definition (B), **8** a name and a date in a formal record (D), **9** a written authorisation (C), **10** a survey entry about the south elevation (A). The three unused documents are each about a real thing in the book — a fault book, a page of entries, a request for training — and none of them answers any of the five questions, which is how the part is built.'));
out.push(NOTE('**Part 3, question 11** is the hardest item in the paper and it is an **attitude** question, which is what Reading Part 4 of the real examination is made of. The detail about the counter and the missing covering letter is not there to criticise the ministry (**A**) or to explain a delay (**B**); it is there to show how little explanation came with something worth more than a year of the shop\'s other work. Teach the habit: ask what a **detail is doing**, not what it says.'));
out.push(A('**Part 3, question 13** is the one students lose by choosing **B**: the definitions page was the part he had **not** read. And **15** is a summary question — the last paragraph puts one condition back and keeps the other eight, which is 12.3 in the text.'));
out.push(A('**Part 4** is done with referring words and not with meaning. **16 A** — _he decided himself what to put in it_ is answered by the next sentence, which lists the four things. **17 D** — _nobody had ever asked him for figures_ sets up _a number is a thing somebody else can argue with_. **18 G** — _those three weeks_ points back at February. **19 C** — _that is the change_ points back at the manager asking for a copy and forward to _from that morning_. **20 B** — the paragraph opens _what the book does not prove_. The three distractors are all plausible sentences about the same man and none of them is tied to a sentence on either side.'));
out.push(A('**Part 5** · **21 assume** (not _agree that_ in this sense). **22 nobody** — _asked nobody for permission_. **23 turn** — _turn X into Y_; _becomes_ is intransitive and _makes_ needs a different structure. **24 proved** — _proved wrong_ is the collocation. **25 given** — _given up_. **26 takes** — _it takes somebody four seconds_; ⚠ _lasts_ cannot take a person.'));
out.push(A('**Part 6** · **27 since** (1.4 and 4.1 — _since September_ with a perfect). **28 together** — _together with_. **29 kind** — _what kind of thing_, which is the sentence the whole of 12.6 turns on. **30 would** — reported future in the past (10.1). Accept no alternatives for 29 and 30.'));

// ---------- PAPER 2 ----------
out.push(pb());
out.push(paper('PAPER 2 · WRITING (30 marks)'));
out.push(S('Part 1 · An email (15 marks)'));
out.push(A('**All four notes must be covered** — the one thing to put first, what to do with the other side, what to ask for and how big it should be, and one example from the writer\'s own life with a date in it. A script that misses a note cannot score above 9, however good the English is. Mark the four off in the margin before you read for language.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Strong', '13–15', 'All four notes, each developed. The advice is the book\'s advice: the objection first, the other side stated fairly, a small ask with its cost, and an example with a date. Register consistent and friendly. Errors are rare and do not distract.'],
  ['Good', '10–12', 'All four notes present, one of them thin. The advice is right but one element is asserted rather than explained. Occasional errors in the perfects, the conditionals or the relative clauses; meaning always clear.'],
  ['Adequate', '7–9', 'Three notes covered, or four covered very briefly. Advice general — _be polite_, _be clear_ — rather than the book\'s. Errors noticeable but meaning recoverable.'],
  ['Weak', '4–6', 'Two notes, or an email that answers a different question. Frequent errors; the reader has to work.'],
  ['Very weak', '0–3', 'One note or none, not an email, or under 50 words.'],
], [1.1, 0.9, 4]));
out.push(SAMPLE([
  '**Sample script (154 words — band 13–15)**',
  'Dear Sam,',
  'Put the strongest thing against yourself in the first paragraph. If the worst objection to your case is in your first ten lines, everything after it reads as evidence; if the reader finds it in the fourth paragraph, they go back and read the first three again looking for what else you left out.',
  'Then write the other side properly — as well as the other person would write it — and say which part of it you agree with. Nobody argues with somebody who has just put their case better than they would have put it themselves.',
  'Ask for one thing, and say what it costs. Not a system, not a procedure, not an apology. One thing, with a number: four seconds, one sheet of paper, forty minutes.',
  'Mine: on 12 May I telephoned a depot at ten past six and spoke to an empty office. Three weeks later I was asked who had been told and I had nothing. What I asked for in June was that the call also go in writing, which takes four minutes. It was agreed in two days.',
  'And do not write that you are right. If you are, the dates will say so.',
  'Yours, Tareq',
]));
out.push(S('Part 2 · An article or a story (15 marks)'));
out.push(A('Either question. The **article** must answer all three parts of the notice — why you began, what it showed you, and **what it did not show** — and candidates routinely drop the third, which is the only one that needs a decision rather than a memory. The **story** must begin with the given sentence **word for word**; have the class copy it out before they plan.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Strong', '13–15', 'Article: all three parts, with real numbers and a limit the writer puts on their own claim. Story: a sequence of events, the given sentence intact, and a last line that is earned. Tenses — narrative past, past perfect, the perfects, the passive — used for a reason. One or two concessions.'],
  ['Good', '10–12', 'Task done, with one part thin or one unearned ending. Tenses mostly controlled; one or two past perfects where a past simple would do. Paragraphed.'],
  ['Adequate', '7–9', 'Two parts of three, or a story that summarises rather than narrates. Tense drift. Meaning clear.'],
  ['Weak', '4–6', 'Half the task, or the story\'s opening sentence altered. Frequent errors.'],
  ['Very weak', '0–3', 'Task not attempted as set, or under 50 words.'],
], [1.1, 0.9, 4]));
out.push(SAMPLE([
  '**Sample script — Question 1, article (156 words — band 13–15)**',
  '**Four hundred entries and a lamp**',
  'Last September I started writing down every telephone I repaired: the date, the model, the fault, and what I did about it. Nobody asked me to and there was no reason for it, and I nearly stopped in February, when there are four entries in the book and all four were written on the same evening.',
  'By April there were about four hundred entries. Fifteen of them were the same model with the same fault — a line of adhesive that is uneven, and that you can see under a lamp if you know where to look. All fifteen were bought from two shops between January and March.',
  'What it showed me was not the fault. I would probably have noticed the fault anyway, after a year or two of it. What it showed me was a number, and a number is a thing somebody else can argue with. "This model keeps coming back" is a complaint. "Fifteen, with dates" is a question somebody has to answer.',
  'What it does not show is that a supplier sent a bad batch. Both of those shops keep stock in a room with a window, and heat does to glue what a bad batch does to glue. I have asked for the purchase dates, which would settle it, and for a name.',
]));
out.push(SAMPLE([
  '**Sample script — Question 2, story (151 words — band 13–15)**',
  'She had been waiting nine months to ask the question, and she asked it in ninety seconds.',
  'It was the handover on the twelfth of May and we were both standing up. She had the clipboard under one arm and she had not sat down since two o\'clock.',
  'What she asked was whether the other sister\'s own errors fell on the fourth and fifth nights of a block. She did not say why she wanted to know and she did not ask to see anything.',
  'The other one looked at her for about four seconds. I was at the desk behind them and I remember counting, because nobody in that corridor had said anything for four seconds in two years.',
  'Then she said: all of mine are on the fifth. Every one. And she said she had known for two years and had never told anybody, because she had thought it was her.',
  'Nine months of planning, and what did it was one question with nothing attached to it.',
]));

// ---------- PAPER 3 ----------
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (20 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · five extracts (5)', '31 **B** · 32 **C** · 33 **B** · 34 **A** · 35 **B**'],
  ['**Part 2** · matching (5)', '36 **A** · 37 **B** · 38 **C** · 39 **D** · 40 **G**   _(not needed: E, F, H)_'],
  ['**Part 3** · notes (5)', '41 **118** · 42 **1** · 43 **8th / eighth** · 44 **February** · 45 **trolley**'],
  ['**Part 4** · interview (5)', '46 **C** · 47 **B** · 48 **A** · 49 **B** · 50 **B**'],
], [1.3, 3]));
out.push(A('**Part 1** · Extract 2 names three periods — three weeks, five months, seven months — and only one of them answers the question asked, which is the standard trap of this part. Extract 5 is the two-comma item from 11.1: what the commas changed is **the number of nurses**, and the extract says the word _date_ and the word _name_ without either being the answer.'));
out.push(A('**Part 2** · Accept only the five letters given. The three distractors are built out of the speakers\' own vocabulary: **E** a form that did not exist (speaker 1 mentions a form), **F** a manager telling somebody to change (speaker 1 mentions a manager), **H** stopping a record and nobody noticing (speaker 4 mentions stopping). Part 2 matching always contains one option that inverts a speaker, and here it is **H**.'));
out.push(NOTE('**Part 3** · Accept _118_ and _a hundred and eighteen_; _8_, _8th_, _the eighth_ and _8 June_; _February_ and _last February_. Do **not** accept _trolleys_ for 45 — the recording says _a second trolley_, singular. Gap 42 is the one most often lost: the speaker says _the first of June_ and the gap is followed by the printed word _June_, so candidates who write _June_ in the gap lose a mark they had. Teach reading the words round the gap before the recording starts.'));
out.push(A('**Part 4** · Questions **46** and **48** are the pair to replay. The teacher says three things about the projector in the first thirty seconds — that she was not told to use it, that her classes had not asked, and that there is one shape she cannot draw by hand — and only the third is the answer to _why did she first want to use it_. **49** is the nine seconds, which the class will have heard in 12.4.'));
out.push(S('Track ET-1 · Audio script (five short extracts)'));
out.push(dlg(null, [
  ['31', 'There is no form for chasing equipment once it has gone to the workshop, so nobody chased it. It went down on the second of February with a broken wheel and it is still there, and we have been running a five-bay ward with one of them since.'],
  ['32', 'Three weeks in February I nearly stopped — five months in, and nobody had so much as looked at it. Then on the second of April the manager asked me for a copy of it, seven months after I started, and I have not missed a day since.'],
  ['33', 'I did not ask for a machine of my own and I did not ask for another training afternoon in the hall with nine other people. I asked for forty minutes, once, in my own room, with the door shut.'],
  ['34', 'Two days a month, in writing, for a year. And I told my own company on the Monday, before I signed anything, which is the part I would not have done in February.'],
  ['35', 'I had written her name, and the date was right, and the whole thing was still wrong, because with the commas in it the sentence says there is one night sister on that ward. There are two of us. Take the commas out and it tells you which one, and that is the only sentence in those minutes that explains anything.'],
]));
out.push(S('Track ET-2 · Audio script (five speakers)'));
out.push(dlg(null, [
  ['Speaker 1', 'I had been keeping it for myself and I would have stopped. There is no form for it, nobody told me to do it, and no manager in nine years has asked me for anything in writing. Then one morning in April he asked me for a copy of it, and from that day it was not mine any more, and that is the only reason it still exists.'],
  ['Speaker 2', 'Six paragraphs, and I had skipped them for five weeks because definitions are what you skip. Two of the six changed what I had been doing, and one of them told me I could name somebody in writing and did not have to be there myself. I had been going in at seven every morning for a month for nothing.'],
  ['Speaker 3', 'Ninety seconds, standing up, at a handover. I asked one thing and I asked for nothing. And what came back was that hers are all on the fifth night, every one, and that she had known for two years and had never said it to anybody.'],
  ['Speaker 4', 'I went through forty of my own answers with a pencil, and there were thirty-one places where I had left a word out that I could not have named. I would have told you the week before that I cannot write English. I had thirty-one correct examples of it in my own handwriting.'],
  ['Speaker 5', 'Nobody had ever asked me that in a room with eleven people in it. She said she knew, and that was why she was asking. I have been in rooms for twenty-four years where nobody asked me anything, and I answered that one in front of all of them.'],
]));
out.push(S('Track ET-3 · Audio script (the three-night trial)'));
out.push(dlg(null, [
  ['Rasha', 'I have a hundred and eighteen shifts in a notebook, which is nine months of permanent nights, and seven errors in it, all on a fourth or fifth night of a block. The committee gave me a trial and it started on the first of June: three-night blocks for one nurse, which is me, for three months, with the errors counted the same way, and a report in September. The other night sister was offered the same and said she would think about it, and then she joined on the eighth and asked for her entries to be kept on a separate sheet, which I think is fair. And I have to say the thing that is against me, because somebody will say it in September if I do not: this ward has had one trolley since February. A drug round written for two trolleys will be late whatever the rota says, and I cannot separate the two. What would settle it is a second trolley on that ward for a month, counted the same way — and if it is the trolley, then everything I have written for ten months is about a wheel, and I would rather find that out myself.'],
]));
out.push(S('Track ET-4 · Audio script (an interview)'));
out.push(dlg(null, [
  ['Interviewer', 'You had a projector put into your classroom in January. Did you want one?'],
  ['Siham', 'Nobody asked me whether I wanted one, and my classes had certainly not asked. But there is one thing I have wanted for twenty-four years, which is to show a cone cut by a plane, and you cannot draw that on a blackboard. I can draw everything else in the syllabus by hand. That one I cannot.'],
  ['Interviewer', 'Was there any training?'],
  ['Siham', 'Two afternoons in the hall, nine of us and one machine, and I went to both of them. At the end of the second one I could not have switched it on alone, and I had been unplugging it at the wall because I did not know how to turn it off.'],
  ['Interviewer', 'So what did you do?'],
  ['Siham', 'I asked for forty minutes. Not a machine of my own, not a written guide, not another afternoon in the hall — forty minutes, once, in my own room, with one machine and the door shut, with somebody who knew it.'],
  ['Interviewer', 'And what happened?'],
  ['Siham', 'She said yes in about nine seconds. Nine seconds, and I had spent four months not asking.'],
  ['Interviewer', 'What will you do next year?'],
  ['Siham', 'Go on the course again. And I have asked two colleagues to come with me, which is the first time in twenty-four years I have asked anybody to do anything.'],
]));

// ---------- PAPER 4 ----------
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (20 marks)'));
out.push(A('Four parts, about twelve minutes for a pair: Part 1 about you (4), Part 2 the long turn (5), Part 3 the collaborative task (6), Part 4 discussion (5). The grid is printed on the test paper and the students should have read it before the day.'));
out.push(A('**Part 1 (4).** Two or three questions each, and the fifth question — _have you ever written something that changed what somebody else did?_ — is the one to ask everybody, because every student in a class that has finished this book has an answer and most of them have never been asked for it. One mark for grammatical control, one for range, one for answers that go beyond a sentence, one for a reason attached without being asked.'));
out.push(A('**Part 2 (5).** A minute each. Card A is the 2.4 and 6.4 situation — a verbal promise denied and nothing in writing, with six people waiting. Card B is Bassel at the counter. Mark description **and** decision: a candidate who describes the picture and does not say what they would do cannot go above 3. A good answer uses the conditionals of Unit 8 (_I would send one line that evening_) and a modal of deduction from Unit 9 (_she must have been told something, because…_).'));
out.push(A('**Part 3 (6).** The collaborative task, taught in 12.5. Mark **interaction**, not the decision: suggesting, responding to what the partner actually said, asking their view, and closing. ⚠ **An honest _we have not agreed, and here is each of our second choices_ scores as well as an agreement**, and two candidates who agree in forty seconds and then sit in silence score worst of all. Fifteen turns in three minutes is a good pair; six turns is two monologues.'));
out.push(A('**Part 4 (5).** Both students together. The useful questions are the second and the fifth — whether keeping a record of your own mistakes is dangerous, and what you would want a new colleague told about you — because both require an opinion **with a reason**, which is 12.1, and the second invites a concession, which is 12.3. Listen for _up to a point_, _admittedly_, _I see what you mean, but_ and _on balance_; a pair that uses three of the four is a strong pair whatever their accuracy.'));
out.push(NOTE('The single most common reason a good pair loses marks in Part 3 is **rushing to agree**. Say it to the class twice before the test and once on the day: start by dropping the options you can both drop, and keep the time for the two that matter. A pair that has nothing left to say at ninety seconds has lost half the part, and the fix is thirty seconds of technique.'));
out.push(pb());
out.push(S('Where every part of this test comes from'));
out.push(table(['Part', 'Taught in'], [
  ['Reading 1 · notices', '4.3 · 6.2 · 10.6 · 11.7 — instructions, obligation, evidence, definitions'],
  ['Reading 2 · matching', '5.6 · 9.6 · 10.6 · 11.3 — documents and what each one is for'],
  ['Reading 3 · long text', '12.7 — attitude and opinion; the text is 2.4, 11.7 and 12.3 in one place'],
  ['Reading 4 · gapped text', '2.2 · 7.5 — referring words and the shape of an evidence paragraph'],
  ['Reading 5 · MC cloze', '1.5 · 7.2 · 10.4 — collocation and verb choice'],
  ['Reading 6 · open cloze', '1.4 · 4.1 · 10.1 · 12.6 — _since_, _together with_, _would_, _what kind of_'],
  ['Writing 1 · email', '8.1 · 8.3 · 12.2 · 12.3 — advice, the ask, the other side, the concession'],
  ['Writing 2 · article / story', '3.6 · 7.6 · 12.1 — a count, its limit, and a narrative with a turning point'],
  ['Listening 1 · extracts', '4.3 · 9.1 · 11.1 — one fact among three distractors'],
  ['Listening 2 · matching', '10.2 · 11.5 · 12.4 — five speakers, eight options, one inversion'],
  ['Listening 3 · notes', '7.6 · 12.3 · 12.7 — a claim with its limits read aloud'],
  ['Listening 4 · interview', '4.6 · 6.6 · 9.3 · 12.4 — asking for one thing, and the nine seconds'],
  ['Speaking 1 · about you', '1.1 · 1.3 · 4.1'],
  ['Speaking 2 · long turn', '2.4 · 6.4 · 8.2 · 9.5 — describe, deduce, decide'],
  ['Speaking 3 · talk together', '12.5 — B1 Preliminary Part 3, the collaborative task'],
  ['Speaking 4 · discussion', '12.1 · 12.2 · 12.3 · 12.6 — opinion, concession, balance'],
], [1.4, 3]));
out.push(sp());
out.push(box('After the test', [
  '**Give the marks back with the twelve "I can…" boxes, not instead of them.** The number out of a hundred tells a student where they are against an examination they have not sat; the ninety-six lines tell them what to do on Thursday. Ask every student to count their 😀 lines and write the 😐 list on one sheet of paper.',
  '**The four parts to re-teach, if the class marks are low.** Reading Part 3 (attitude questions — the habit of asking what a detail is **doing**), Reading Part 4 (referring words), Listening Part 3 (reading round the gap before the recording) and Speaking Part 3 (dropping before deciding). Twenty minutes each, and all four are technique rather than language.',
  '**And the thing not on this paper.** Nothing in a hundred marks measures what 12.3 and 12.7 taught: putting the strongest objection to your own case in the first paragraph. If a student does that in Writing Part 1 or Part 2, write it on the script in the margin, because it is the most valuable thing in this book and the band descriptors can only reach it sideways.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · End-of-Book Test · Key');
