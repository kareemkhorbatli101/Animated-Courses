// Proactive English C1 · Syria Edition · Book 1 · END-OF-BOOK TEST — KEY (Units 1–12)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });

out.push(h1('END-OF-BOOK TEST · Units 1–12 — KEY'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Total: 100 marks** — Reading and Use of English 40 · Writing 20 · Listening 20 · Speaking 20. ⚠ **The split is the examination\'s own**: C1 Advanced averages five equally weighted components and takes Reading and Use of English as one paper, which is why Speaking here is worth a fifth of the whole and not a tenth.',
  '**Reading and Use of English:** Parts 1, 2, 3 and 8 are **one mark a question**; Part 4 is **two marks an item** with a split mark scheme set out below; Parts 5, 6 and 7 are one mark a question. **Thirty-seven questions, forty marks.**',
  '**Listening:** one mark a question, twenty questions. **Writing:** two band tables of ten marks. **Speaking:** a four-row grid at five marks a row.',
  'Read each listening part **twice**, at normal speed, with a short pause between questions. ⚠ **Do not slow down.** **The weak forms of _it was not until_, _no sooner had_, _may well_ and _does not exclude_ are part of what is being tested** and they disappear the moment a reader becomes careful.',
  'The four audio scripts are printed in this key after the listening answers. **Do not photocopy the key.**',
  '**Timing.** The whole paper is about three and a half hours of candidate time. **Run it over two sessions**: Reading and Use of English with Listening in one, Writing with Speaking in the other, Speaking in pairs while the rest write, which is how the examination itself is run.',
  '⚠ **Nothing in this test is new.** **Every item is traceable to one of the ninety-six lines in the twelve _I can…_ boxes**, and the table printed on the test paper itself says which part was taught where. **Mark the paper with that table beside you**: a candidate who has lost four marks in Part 6 is to be sent to 8.7 and not told to read more.',
], C.lblue, C.navy));

// ---------- PAPER 1 ----------
out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (40 marks)'));
out.push(table(['Part', 'Answers', 'Marks'], [
  ['**Part 1** · multiple-choice cloze', '1 **A** · 2 **B** · 3 **C** · 4 **D** · 5 **C**', '**5**'],
  ['**Part 2** · open cloze', '6 **was** · 7 **had** · 8 **no** · 9 **on** · 10 **should**', '**5**'],
  ['**Part 3** · word formation', '11 **CALIBRATION** · 12 **UNWARRANTED** · 13 **CONJECTURAL** · 14 **COMPETENCE** · 15 **ACQUISITION**', '**5**'],
  ['**Part 4** · transformations', '16 **no point did the officer mention** · 17 **is beyond dispute** · 18 **could not be carried into**', '**6**'],
  ['**Part 5** · multiple choice', '19 **C** · 20 **B** · 21 **D** · 22 **A** · 23 **C**', '**5**'],
  ['**Part 6** · cross-text matching', '24 **D** · 25 **D** · 26 **C** · 27 **B**', '**4**'],
  ['**Part 7** · gapped text', '28 **A** · 29 **C** · 30 **B** · 31 **D**   _(not needed: **E**)_', '**4**'],
  ['**Part 8** · multiple matching', '32 **B** · 33 **A** · 34 **B** · 35 **C** · 36 **D** · 37 **A**', '**6**'],
], [1.4, 4, 0.7]));
out.push(NOTE('⚠ **Part 1 is collocation and every item is a declared phrasal verb or fixed expression from this book.** **1 A** — _put a question to_ somebody; **_set_ a question is for an examiner, _lay_ needs _before_, and _place_ does not take a question at all.** **2 B** — _bed down_, Unit 12\'s set, of a practice that has settled by itself. **3 C** — _cotton on to_, also Unit 12; the three distractors each need a different particle. **4 D** — _tell against_, Unit 9\'s set, **and the subject is an absence and not a person**: _argue_, _reason_ and _plead_ all need somebody doing them. **5 C** — _cut both ways_, Unit 9. ⚠ **The habit to teach in the feedback is the one from 10.7: read to the end of the sentence, then say the gap aloud with each option.** **Three of the four fall away before any rule is remembered.**'));
out.push(NOTE('**Part 2 is grammar and almost never vocabulary.** ⚠ **Item 6 is the inversion after _not only_** — _Not only **was** the figure missing_ — **and a candidate who has not written one will try _is_ or _did_.** **Item 7 is _No sooner **had**_, 11.7\'s item, and the trigger is the _than_ further along the sentence.** **Item 8 is _of **no** use at all_, a fixed phrase worth learning whole.** **Item 9 is the preposition that goes with _act_** — _it is **on** that sentence that they will act_ — **and it is the only item here a weak candidate is likely to get.** **Item 10 is _Under no circumstances, therefore, **should** a limitation be left_**: the inversion is forced by the fronted negative, and _can_, _must_ and _may_ are all possible modals, **so the mark is for the inversion and not for the choice of modal** — ⚠ **accept _can_, _must_ and _may_ as well as _should_.**'));
out.push(NOTE('⚠ **Part 3 draws on this book\'s own declared word-formation sets and a candidate who has learnt them scores five.** **11 CALIBRATION** and **13 CONJECTURAL** are Unit 9\'s; **12 UNWARRANTED** is Unit 9\'s with the negative prefix, **which is where the marks go** — _warranted_ alone reverses the sentence and is the commonest wrong answer. **14 COMPETENCE** and **15 ACQUISITION** are Unit 12\'s. ⚠ **Mark the spelling strictly in 15**: _acquisition_ loses the second _c_ in about a third of any class, and it is the one item in this paper where a candidate who knows the word can still lose the mark.'));
out.push(NOTE('⚠ **Part 4 is two marks an item and the mark scheme splits.** **Item 16** — one mark for _no point_ and one for the inversion _did the officer mention_; **a candidate who writes _no point the officer mentioned_ scores one.** **Item 17** — _is beyond dispute_, three words: one mark for _beyond_ with _dispute_ and one for the finite verb. **Item 18** — _could not be carried into_: one mark for the passive _be carried_ and one for the particle _into_, **and a candidate who writes _could not carry into_ has the phrasal and not the voice and scores one.** **Most candidates lose one of the two rather than both, which is the thing to drill.** ⚠ **Count the words aloud in the feedback.** **Three to six, including the word given, and a correct sentence of seven scores nothing** — **which is the commonest avoidable loss in the paper.**'));
out.push(NOTE('**Part 5\'s distractors are true statements in the wrong place, which this book has now said five times.** ⚠ **Item 19 is the trap**: option B, _that readers stop when they meet something unfamiliar_, is the opposite of what the text says — _what a reader does is not stop_ — **and the words are all present.** **Item 21 turns on one sentence**: _a line that is filed is not a line that is read_, **and option C is a plausible invention that nothing supports.** **Item 22 is the reasoning item**: the letter must not say the rendering was correct **because it is the one sentence that can be answered**, and a reply about that sentence withdraws no resolution. ⚠ **Item 23 is the hardest in the paper and is the whole article in one option**: the rendering was not wrong in any of the nine hundred; **what was wrong is that the only person who knew which sentence would not survive had no standing to tell anybody.**'));
out.push(NOTE('⚠ **Part 6 is the part most candidates have met only once, in 8.7, and the method has to be said again: find where the writers actually differ, not where they appear to.** **All four of these teachers want a second year to be harder; the differences are about what the difficulty is made of.** **24 D** — **D says the diagnostic question must come from the student and not the teacher, where B\'s comes from the teacher asking.** **25 D** — **D calls the vocabulary audit the one thing it is certain is wasted, which is A\'s _where the gain is smallest_.** **26 C** — **C alone says about half of what remains is not a language problem at all.** **27 B** — **B names the reader who can refuse you as the only axis, which is A\'s one direction.** ⚠ **Note that D is the answer twice and that this is normal in Part 6**: the extracts may be chosen more than once, and a class that assumes four questions means four different letters will mark one of its own correct answers wrong.'));
out.push(NOTE('⚠ **Part 7 is matched at the edges and not read as prose.** **For each gap, underline the last four words before it and the first four after it.** **Gap 28** is the clearest: before it, _the files had gone on coming back_; after it, _the file that was accepted is twice as long_. **The paragraph must say what changed, and A says it was a list and not a sentence.** **Gap 29** follows _one sentence was moved_ and precedes _the sentence that was moved is the courtesy formula_, **so the gap cannot be about the formula** — **C is the line about the three counter queries, which is what the nine entries were missing.** **Gap 30** follows the formula paragraph and B is the only paragraph that says when she noticed it had moved. **Gap 31** is the last and D carries the answer to the note. ⚠ **The paragraph not needed is E**, which is relevant, interesting and in the wrong place — **the standard shape of a Part 7 distractor at every level of this series.**'));
out.push(NOTE('**Part 8 is read backwards: the questions first, the texts once.** ⚠ **Six questions over four people and every person is used, which is worth telling the class before they start.** **32 B** — the negative with its denominator, _for the first time in four submissions_. **33 A** — _I did not decide to work this way; I noticed about three weeks after it started._ **34 B** — the refusal in four registers, never sent. **35 C** — _I do not want to, and I do not know why I wrote it_, which is a struck item and not a crossing-off. **36 D** — _I had wanted her to say it was well written, and it felt like nothing at all._ **37 A** — the covering notes at four hundred words against three hundred, **and _they were right to cut them_ is the second half of the question.** ⚠ **Questions 32 and 34 both go to B and candidates will look for a second person**: say in the feedback that a person can answer two questions and that the questions are about different sentences.'));

// ---------- PAPER 2 ----------
out.push(pb());
out.push(paper('PAPER 2 · WRITING (20 marks)'));
out.push(S('Part 1 · The essay (10 marks)'));
out.push(table(['Criterion', 'Mark'], [
  ['**Two points named in the first paragraph, with the ground for choosing them**', '**2**'],
  ['**The third point not mentioned again anywhere in the answer**', '**1**'],
  ['**Each point carries evidence that is a figure, a date, a document or a named occasion** _(one mark each)_', '**2**'],
  ['**One of the two points is conceded in part, at its strongest and not at its weakest** _(7.2)_', '**2**'],
  ['**A limitation on the writer\'s own position, inside the sentence it limits** _(9.3)_', '**1**'],
  ['**220–260 words, and the paragraph endings carry the claims and not the connectives**', '**1**'],
  ['**Register: no formula at the top, no _in conclusion_, and no sentence about the essay itself**', '**1**'],
], [5, 1]));
out.push(A('⚠ **The point that is harder to defend than it looks is the third, and the rubric says so.** **_The only reliable test of a document is a reader who has no stake in it_ is defensible about what a reader asks and not about what a reader can judge** — **a reader with no stake cannot tell whether the content was worth asking about, which is the second half of 12.4\'s test.** **A candidate who takes the third point and says this has done the hardest thing in the paper**; one who takes it and does not has written an essay that the first paragraph of 12.4 refutes. **Give the two concession marks for it.**'));
out.push(A('**The commonest shape of a seven-mark answer**: both points named, evidence attached to each, nothing conceded. ⚠ **The two concession marks are where this class will lose them**, because a concession reads to a writer like a loss and the whole of Unit 7 was about why it is not. **Say in the feedback which sentence the concession should have gone into** — **it is always the one carrying the point the candidate believes most.**'));
out.push(S('Part 1 · the essay — full sample (251 words)'));
out.push(SAMPLE([
  '**Of the three things said about adults who write in a second language at work, I would defend the second, and I would take the third as well, because it is the one that is harder to defend than it looks.**',
  '**About half of what such a writer still cannot do is not about language.** **The evidence for this is a question that takes four seconds and is almost never asked: if somebody wrote the thing for you, perfectly, in English, would it happen?** **My own list had six items on it in September and three of them fail that question.** **One is that this office has never refused the regional director anything in writing, in eleven years, by anybody** — **I went to the file expecting to find two or three refusals and there are none.** **No second year of English will move that item, and a year spent working at it as though it were a language problem is a year in which the writer learns to blame themselves.**',
  '**The third point is half right and the half that is wrong is the half people rely on.** ⚠ **A reader with no stake will tell you whether your method was visible, and that is worth more than any colleague\'s opinion.** **But they cannot tell you whether the question they asked was worth asking.** **My own reader asked which office holds the delivery notes, which was the question the page was built to produce; she could not have known that it was, and if she had asked something irrelevant I should have had to decide for myself whether the page had failed.** **So the test has two halves and only one of them is outsourced.**',
  '**I have not taken the first point.** **It is true of my own list and I have no evidence about anybody else\'s**, and an essay that took it would be arguing from one case.',
]));
out.push(A('⚠ **Why this is ten and not eight.** **The two points are named in the first sentence with the ground for the choice, and the third is taken rather than avoided and is then divided** — **which is the move the rubric is looking for.** **Each point carries a document or a figure: eleven years and a file; six items and three failures; the delivery notes.** **The concession is at the strongest point and not the weakest** — **she concedes the half of the third point she most wants to be true.** **And the limitation sits inside the sentence it limits: _she could not have known that it was_. Nowhere does the answer mention the first point again after the last paragraph, and nowhere does it say anything about itself.**'));
out.push(S('Part 2 · One task from three (10 marks)'));
out.push(table(['Criterion', '2(a) proposal', '2(b) letter', '2(c) report'], [
  ['**Opens with the reader\'s own figure, in the reader\'s units, evidence named**', '**2**', '— ', '**2**'],
  ['**Says what the writer\'s document says and what the summary says, in that order**', '— ', '**2**', '— '],
  ['**The ask made once, in the middle, and nowhere else**', '**2**', '— ', '— '],
  ['**Names what the difference is made of** _(a construction, an absence, a position)_', '— ', '**2**', '— '],
  ['**Says what could not be established, and which office holds it**', '— ', '— ', '**2**'],
  ['**What the decision rests on, stated as a fact about two documents**', '— ', '**2**', '— '],
  ['**A failure condition with a date, in the same measure as the opening**', '**2**', '— ', '**1**'],
  ['**One recommendation with its cost and its own limitation**', '— ', '— ', '**2**'],
  ['**Nobody blamed, said expressly**', '**1**', '**2**', '**1**'],
  ['**Counts carry denominators; no adjective where a measurement would do**', '**2**', '**1**', '**1**'],
  ['**220–260 words, and the question letter written in the box**', '**1**', '**1**', '**1**'],
], [4, 1, 1, 1]));
out.push(A('⚠ **2(b) is the hardest of the three and the rubric carries the one prohibition in the paper: do not write that the summary was wrong.** **A candidate who writes it loses both _nobody blamed_ marks and both _what the decision rests on_ marks, because the sentence is answerable and a letter with an answerable sentence in it produces a reply about that sentence and no decision reopened.** **This is 11.7 and 12.7 in one task.** **Expect two or three candidates in ten to take 2(b) and expect one of them to write the forbidden sentence.**'));
out.push(A('**2(a) is the most popular and the easiest to pass at six marks and the hardest to take to ten.** ⚠ **Count the asks and write the number on the paper.** **The mark is for one ask in the middle**: a proposal with the ask in the first paragraph and again in the last has told a budget holder four times that somebody wants something. **And look for the word _English_**: it should appear about once and not in the first paragraph, **and a proposal whose subject is the writer\'s English has not understood the task.**'));
out.push(S('Part 2(a) · the proposal — full sample (249 words)'));
out.push(SAMPLE([
  '**To the deputy dean, graduate school** · _proposal: four sessions on reading a body against its summary_ · **26 August**',
  '**Of the thirty-one theses submitted to this school last year, nine were returned for revisions the examiners\' reports describe as presentational.** **The nine are at annexe A with their report references.**',
  '**What the nine have cost, in the school\'s own figures.** **Each produced a second examination, and a second examination takes about four hours of examiner time.** **Thirty-six hours, which sits in the examiners\' rota and not in the school\'s accounts, which is why it has never been counted by anybody.**',
  '**What is not in dispute, and nobody is being blamed.** **No supervisor has been asked to read a thesis for presentation and the handbook does not ask them to.** **A school with thirty-one submissions and no such step is a reasonable arrangement that produced nine returns.**',
  '**The proposal.** ⚠ _I should like to run four sessions of ninety minutes for the January cohort on reading a body against its own summary, and nothing else._ **One sentence, and it is the only thing asked for in this document.**',
  '**What the sessions would do that is not being done now.** **Three things, none of which takes a candidate more than fifteen minutes a chapter.** **The abstract read last, with the body open beside it.** **Every count given its denominator.** **And the sentences that appear in one and not the other written out, which in this school\'s own sample has averaged two a chapter.**',
  '**When this stops.** ⚠ **In April, if the figure has not moved.** **The measure is the same one: of the next cohort\'s submissions, how many are returned for a presentational revision.** **If nine is still nine the sessions end and I shall say so in the words I am using now.**',
]));
out.push(A('⚠ **What to look for before awarding the last two marks.** **Count the asks: one, in the middle, and the answer says so about itself.** **Find the word _English_: it does not appear at all here, which is at the edge of the house figure of about once and is defensible in this task because the sessions are about reading and not about language.** **And check the failure condition is in the same measure as the opening** — **nine returns out of a cohort, not _if it has not been useful_.** **A proposal whose failure condition is a feeling has not understood 12.6.**'));
out.push(S('Part 2(b) · the letter — full sample (254 words)'));
out.push(SAMPLE([
  '**To the chair of the registration committee** · _the branch file of 4 August and the schedule of 18 August_ · **26 August**',
  '**The committee was right about the record and wrong about what the record shows.**',
  '**The file this branch sent on 4 August reads:** _"The day-book is kept by hand and is the only record. Three queries were dealt with at the counter and are not in it."_ **The schedule the committee considered reads:** _"Records incomplete."_',
  '**The difference is not a matter of degree.** **The file names one absence, says how many items it covers and says where they were dealt with instead.** **The schedule has a column of eleven characters and took the two words that would fit.** **I do not think anybody chose them: the person who made the schedule had three hundred files and four days, and the first thing in mine that could be lifted whole was the phrase _not in it_.**',
  '**What the resolution therefore rests on is a judgement about completeness that the file does not make and does not support.** **Nine entries since 2019, with their dates, are at annexe A of the file; three counter queries are named as absent; and nothing in it says the record is incomplete in any other respect.**',
  '**I should be grateful if the words _records incomplete_ were replaced with the file\'s own sentence, and if the resolution to inspect the branch in October were allowed to stand.** **The inspection will answer the question the schedule was reaching for, which is whether a hand-kept book is adequate, and that is a question nobody here has been able to put.**',
  '⚠ **The governorate holds four printed registers and none has been allocated since 2018.** **That figure is not in my file either, and it should be.**',
]));
out.push(A('⚠ **What makes this a ten-mark answer and not an eight.** **The order is right** — **what mine says, what theirs says, what the difference is made of, what the resolution rests on, the request, and then one fact the writer concedes was missing from her own file.** **Nothing accuses anybody**: _I do not think anybody chose them_ **is the sentence that keeps the letter unanswerable.** **And the last paragraph is the concession at the strongest point**: she had the register figure and did not put it in, and saying so is what makes the rest of the letter credible. **Nowhere does it say the summary was wrong.**'));

out.push(S('Part 2(c) · the report — full sample, in outline, with the three places marks are lost'));
out.push(SAMPLE([
  '**Report on the handling of returned registration files** · _for the branch manager_ · **26 August**',
  '**1 · What happens now.** **Nine of the forty-one files sent out in the three years to July were returned.** **Six of the nine were returned for something the file did not state rather than for a statement that was wrong.** ⚠ **The denominator is forty-one and is the whole of what left this counter; it is not a sample.**',
  '**2 · What could not be established, and who holds it.** **The number of queries dealt with at the counter and not entered in the day-book is not known to this branch for any year before 2024.** **The counter slips for 2022 and 2023 were not kept.** ⚠ **The governorate registry holds the inspectorate\'s own record of queries raised and this branch has never asked for it.**',
  '**3 · One recommendation, with its cost and its limitation.** **That the number of counter queries be entered in the day-book weekly and printed at the head of every file.** **The cost is about ten minutes a week of counter time.** ⚠ **The limitation is that an officer who is told what the record does not contain can refuse the file on exactly that ground, and two have already done so** — **so the recommendation will raise the number of returns before it lowers it, and the measure should be taken in April and not in October.**',
]));
out.push(A('⚠ **The three places the marks go in 2(c), in this class\'s experience.** **One: the denominator.** **_Nine files came back_ with no forty-one beside it loses both of the counts-carry-denominators marks and is the commonest fault in the genre.** **Two: the office.** **_I could not find out how many queries there were_ is an absence; _the governorate registry holds it and this branch has never asked_ is an absence with a remedy, and only the second scores.** **Three: the recommendation\'s own limitation.** **A recommendation with no limitation under it reads as advocacy** — **and the limitation here is the strongest sentence in the report, because it says the recommendation will make the figure worse first.**'));
out.push(A('**Marking the three tasks against each other.** ⚠ **Do not expect the same distribution of marks.** **In this class 2(a) has averaged about seven, 2(c) about seven, and 2(b) about five with the widest spread** — **because 2(b) has one prohibited sentence in it and a candidate who writes that sentence loses four marks at once.** **Say so when you set the paper.** **A candidate who chooses 2(b) having been warned and avoids the sentence has done the hardest thing in the Writing paper.**'));

// ---------- PAPER 3 ----------
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (20 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers', 'Marks'], [
  ['**Part 1** · three extracts', '38 **A** · 39 **C** · 40 **B** · 41 **A** · 42 **B** · 43 **C**', '**6**'],
  ['**Part 2** · sentence completion', '44 **nine** · 45 **say** · 46 **counter** · 47 **wounded** · 48 **ground**', '**5**'],
  ['**Part 3** · long interview', '49 **D** · 50 **C** · 51 **B** · 52 **C**', '**4**'],
  ['**Part 4** · multiple matching', '53 **C** · 54 **B** · 55 **D** · 56 **E** · 57 **A**   _(not needed: **F**, **G**, **H**)_', '**5**'],
], [1.4, 4, 0.7]));
out.push(NOTE('⚠ **Part 2 is the part where candidates lose marks they have earned.** **Accept the figure in words or digits at 44** — _nine_ **or** _9_. **At 45 accept only _say_**: _mention_ and _state_ are not what the speaker says and the item is a verbatim completion. **At 47 _wounded_ is the word and it is the only item in the paper that turns on a metaphor**: candidates who write _damaged_ or _broken_ have the sense and not the word and score nothing, **which is worth warning them about before the recording and not after.** **At 48 _ground_ is singular in the recording.** ⚠ **Spell-check 46 and 47 strictly.** **The instruction says a word or a number, and a word spelt wrongly is not the word.**'));
out.push(NOTE('**Part 3 item 51 is the one to go over, and it is 12.3 in an option.** ⚠ **She says _about half_, which is a figure, and the three distractors are each a thing somebody might reasonably say and nobody in the recording does.** **Item 50 is the reasoning item**: a test will not do the work **because it measures what a student can produce when asked**, and almost everything that matters is what they do without being asked. **Item 52 is the attitude item and the shortest answer in the paper** — **the reader\'s power to refuse, and not length, genre or time.** ⚠ **Candidates who take A at 52 have heard the word _longer_, which she uses to dismiss it.**'));
out.push(S('Track EB-1 · audio script (three extracts)'));
out.push(dlg(null, [
  ['Narrator', '**Extract One.** You will hear two colleagues looking at a returned file.'],
  ['Woman', 'It has come back again. And look at what it says on the slip — not _rewrite_, not _unclear_. It says _on what_. Three words.'],
  ['Man', 'That is not about the wording at all, then.'],
  ['Woman', 'It never was. He wants to know what the nine entries are. The file does not say, because it never has, and every year I have read that slip and thought he was being difficult.'],
  ['Man', 'I have assumed for four years that the problem was my English. I have been working at my English. The files kept coming back and I thought I had not worked hard enough at it.'],
  ['Woman', 'The entries are in a book on your counter.'],
  ['Man', 'They have been there since 2019.'],
  ['Narrator', '**Extract Two.** You will hear a supervisor and a research student.'],
  ['Supervisor', 'I used to ask people for a shorter version and I have stopped doing it, because a shorter version of a padded chapter is also padded and I was giving myself more to read, not less.'],
  ['Student', 'What do you ask for now?'],
  ['Supervisor', 'The body first and the abstract last, with the body open beside it. Eleven minutes. It finds two sentences every time and they are always sentences that are in one and not the other.'],
  ['Student', 'That is what I do now, and it was not advice. You asked me one question in May about a search I could not describe, and I could not answer it, and I went back and read the two against each other that evening.'],
  ['Supervisor', 'I do not remember asking.'],
  ['Student', 'You asked it in about four seconds. It has changed the order I read in since.'],
  ['Narrator', '**Extract Three.** You will hear two members of a committee.'],
  ['Man', 'The line was in the file. It was written on the fourth, it was filed on the fourth, and it was not in front of us on the eighteenth.'],
  ['Woman', 'So it should have been circulated.'],
  ['Man', 'It should have been circulated rather than filed, and that is the whole of what went wrong. Nobody wrote anything incorrect. A line that is filed is not a line that is read.'],
  ['Woman', 'Half the room will want both resolutions withdrawn.'],
  ['Man', 'And that is the one thing we must not ask for. The resolution to add the two lines gives eighteen months of data that nobody had. Ask for both and the data goes with them, and then we have nothing at all to show for two months.'],
  ['Woman', 'Eleven words, then. The clause about the cause, and nothing else.'],
]));
out.push(S('Track EB-2 · audio script (sentence completion)'));
out.push(dlg(null, [
  ['Woman', 'Somebody asked me last spring how many of the files I send out come back, and nobody had ever asked, and I found I could answer it to within one. Nine. Nine of the forty-one I sent out over three years.'],
  ['Woman', 'What took longer to work out was why. Six of the nine were returned for something the file did not say. Not for a wrong figure, not for bad wording — for something that was not in it at all. I had been correcting the wording for three years.'],
  ['Woman', 'The thing that was not in it was one number, and it is a number nobody in this office had: how many queries we dealt with at the counter and never wrote down anywhere. I did not know it was absent. That is the part I would tell anybody. A document does not look wounded where a fact has been taken out of it. The sentence closes over the gap and reads perfectly well and a week later you cannot tell either.'],
  ['Woman', 'So the figure goes at the top of every file now, and I am careful about what I claim for it. It cuts both ways. An officer who is told what the record does not contain can refuse the file on exactly the ground I named myself, and two of them have done it. I would still rather be refused on a ground I named than accepted on one I had hidden.'],
]));
out.push(S('Track EB-3 · audio script (long interview)'));
out.push(dlg(null, [
  ['Interviewer', 'You teach a second year of professional English. What do you do in the first week?'],
  ['Woman', 'I ask for one thing and it takes most of the week. An occasion with a date. Something that happened, or did not happen, on a day the student can name.'],
  ['Interviewer', 'Why not a diagnostic test? They are quick.'],
  ['Woman', 'Because a test measures what somebody can produce when they are asked to, and almost everything that matters in adult professional writing is what they do when nobody has asked. A test tells me the ceiling. I need the floor.'],
  ['Interviewer', 'Does the question work?'],
  ['Woman', 'About a third of the first answers are abandoned within the hour, which is the question working and not failing. The answers that survive are things like: the desk ran my copy unchanged on the eleventh of June, or a referee asked me nothing about my search for the first time in four submissions. You can check those in a file. You cannot check _I am more careful_, and neither can the person saying it.'],
  ['Interviewer', 'And then you have a list of what they still cannot do.'],
  ['Woman', 'And then the uncomfortable part. About half of that list is not about language at all. Procedures, hierarchies, a figure nobody collects, a refusal an office has never made. I had been working at those items for years as though they were language problems, and I moved none of them, and the students went away believing the fault was theirs.'],
  ['Interviewer', 'How do you tell which is which?'],
  ['Woman', 'One question, four seconds. If somebody wrote it for you, perfectly, in English, would the thing happen? If the answer is no, it is not about English and a second year will not touch it.'],
  ['Interviewer', 'What about the half that is about language? How do you make it harder?'],
  ['Woman', 'In one direction only, and this is the thing I would defend hardest. The reader\'s power to refuse you. The same limitation, written under somebody else\'s claim. The same degree of certainty, stated to a committee that has already decided the other way. Not longer — a longer version of a task somebody can already do has given them nothing. Not a new genre either, because that makes it a different move. The power of the reader is the only axis I have found that leaves the move recognisable and makes it hard.'],
]));
out.push(S('Track EB-4 · audio script (five speakers)'));
out.push(dlg(null, [
  ['Speaker 1', 'The thing I shall do differently is the first paragraph. I have written proposals for eleven years and every one of them opened with what I wanted, and I have learnt this year that a reader with a budget refuses that in about four seconds. Next time the first paragraph is their figure, out of their own records, and my name does not appear until the fourth.'],
  ['Speaker 2', 'I have four drafts in a drawer and they have been there since June. Four registers, point by point, with the office that holds the records named in each one. All four are usable and none has been sent, and I have told myself for nine months that the reason was my English, and it is not and it never was. I shall send one. Not a better version. One of the four I already have.'],
  ['Speaker 3', 'Mine is not about writing anything new. The line I write already does everything it needs to do, and it goes into a file, and a file is not a thing anybody reads. So I shall ask for it to be circulated instead, in a sentence, with the request kept — because the one time it was not circulated is the only time I know about, and I know about it because I asked.'],
  ['Speaker 4', 'I shall find somebody who has never been on a course and has nothing to gain from being kind to me, and give them one page that I have actually sent, and say eight words and then stop talking. I did it once this year with my daughter and it was the most useful four minutes of the year and it felt like nothing at all.'],
  ['Speaker 5', 'I shall write the list first. For eleven years I produced the version and then worried about it, and the list takes twenty minutes and saves the afternoon — what has no equivalent, what the reader will supply instead, and what I write. I started in March and I have not gone back, and the only thing I would change is that I would have started in September.'],
]));

// ---------- PAPER 4 ----------
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (20 marks — five marks a row)'));
out.push(A('⚠ **Speaking is a fifth of this paper and it cannot be marked from an impression.** **Run it in pairs while the rest of the class writes, as the examination does.** **Use the grid below and write the four numbers on the candidate\'s paper before you leave the room**: a mark given an hour later is a memory of a mood.'));
out.push(table(['Row', 'What 5 looks like at C1', 'What costs a mark'], [
  ['**Grammar and vocabulary (5)**', '**The marked orders and the hedges appear once each, in the places that need them.** **A limitation arrives inside the sentence it limits.** **Range extends to this book\'s declared sets without display.**', '⚠ **An inversion four times in two minutes.** **A phrasal verb used for effect.** **_It is interesting that…_ as a filler.**'],
  ['**Discourse management (5)**', '**Part 2: two photographs and not three, one minute, finishing on a full stop and not on a trailing clause.** **Part 3: two minutes that decide nothing, then a discard named in the last minute with a failure condition.**', '⚠ **Three photographs attempted and none compared.** **A decision reached in the first thirty seconds of Part 3**, which is the commonest fault in this class and costs two marks, not one.'],
  ['**Interactive communication (5)**', '**Questions about the options and not about the partner.** **A concession made at the partner\'s strongest point.** **The thirty-second follow-up answers the question asked and does not summarise what the partner said.**', '⚠ **_Do you agree?_** **A follow-up that restates the partner\'s turn.** **Agreement offered before the option has been costed.**'],
  ['**Pronunciation (5)**', '**A claim about oneself said with no rise at the end.** **A limitation said in one breath, so that it cannot be heard as a separate sentence.** **_Could not have known_ with no stress on _could_.**', '⚠ **A rise at the end of a fact, which invites the examiner to reassure the candidate.** **Stress on _could_, which turns an account into a defence.** **A pause before a hedge, which announces it.**'],
], [1.4, 3.2, 2.4]));
out.push(A('⚠ **The Part 4 follow-ups are printed on the test paper and they are not optional.** **Half the marks in that part are for what a candidate does with a question built on somebody else\'s answer**, which is 7.2 and 12.7, and it is the one thing a prepared answer cannot cover. **Ask the follow-up whatever the first answer was**, and ask it of the candidate who has not just spoken.'));
out.push(A('**On Part 1 question 4** — _what will the person who teaches you next year most need to know about you?_ — **the follow-up is _which document shows it?_** ⚠ **A candidate who answers the first with a feeling and the second with a document has scored the mark.** **One who answers both with feelings has not, however fluent the feelings were**, and this is the one place in the Speaking paper where the whole of Unit 12 is being examined in two questions.'));
out.push(sp());
out.push(box('What to do with the marks', [
  '⚠ **The mark out of a hundred is a measurement and not a verdict.** **Give it with the traceability table from the test paper beside it**, so that every lost mark points at a cycle and not at a subject. **A candidate who has lost four in Part 6 goes to 8.7; one who has lost four in Part 4 of the Listening goes to 8.7 and 12.7; one who lost the two concession marks in the essay goes to 7.2.**',
  '**And the one piece of work in this book that carries no marks at all.** ⚠ **The readiness page from 12.5: three moves, three harder versions, three questions, and a second sheet for the items that are not about English.** **Collect them and keep them, because they are addressed to whoever teaches Book 2** — **and the first unit of Book 2 takes the harder-version column off those pages and makes it the syllabus.**',
  '**If you are teaching Book 2 yourself, read the pages before September and not in the first week.** **Four minutes each, ten students, forty minutes** — **and you will arrive knowing which three moves to make harder and which items to leave alone because no amount of English will move them.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · End-of-Book Test · Key');
