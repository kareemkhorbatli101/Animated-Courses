// Proactive English B2 · Syria Edition · Book 2 · MID-BOOK TEST — KEY (Units 13–18)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });

out.push(h1('MID-BOOK TEST · Units 13–18 — KEY'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Total: 60 marks** — Reading and Use of English 20 · Writing 15 · Listening 15 · Speaking 10.',
  'Reading and Listening are **1 mark per question**, 35 questions in all. Writing has two band tables below (8 and 7). Speaking has a four-row grid printed on the test paper itself and the guidance for it is at the end of this key.',
  'Read each listening part **twice**, at normal speed, with a short pause between questions. ⚠ **Do not slow down.** The weak forms of _about_, _a little over_, _had not been_ and _it was not until_ are part of what is being tested, and they disappear the moment a reader becomes careful.',
  'The three audio scripts are printed in this key after the listening answers. **Do not photocopy the key.**',
  '**Timing.** One two-hour session does the whole paper if Speaking is done in pairs while the others write — which is how the examination itself is run. Otherwise: Reading and Listening in one lesson (about 70 minutes), Writing and Speaking in the next.',
  '⚠ **Nothing in this test is new.** Every item is traceable to one of the forty-eight lines in the six **I can…** boxes of Units 13–18, and the table at the end of this key says which.',
  '**And the three Reading parts that are not here** — **Parts 1, 5 and 6** — **are in the End-of-Book Test, which carries all seven.** **Say so to the class before they start**, because a student who notices the gap and is not told will spend the paper looking for the missing parts.',
], C.lblue, C.navy));

// ---------- PAPER 1 ----------
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (20 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 7** · multiple matching (6)', '1 **B** · 2 **C** · 3 **D** · 4 **A** · 5 **D** · 6 **A**'],
  ['**Part 3** · word formation (5)', '7 **plausibility** · 8 **reduction** · 9 **consistency** · 10 **refutation** · 11 **distillation**'],
  ['**Part 2** · open cloze (4)', '12 **than** · 13 **with** · 14 **which** · 15 **in**'],
  ['**Part 4** · transformations (5)', '16 **is no point in** · 17 **was not until** · 18 **No matter** · 19 **had not been checked** · 20 **In spite of**'],
], [1.2, 3]));
out.push(NOTE('**Part 7 is a scanning test and the four accounts are written so that the topic of each is no help at all.** **All four are about judging, putting or summarising**, so a student who matches by subject matches nothing. **1 B** — _two sentences in writing before any meeting_. **2 C** — _faithful and it was no use at all to a reader who had to act_. **3 D** — _could not have explained them either_. **4 A** — _I have not dropped the rule… I have no answer to the two days_. **5 D** — _I write which of my three criteria I am least sure of_. **6 A** — _the figure that convinced me was my own_. ⚠ **Teach the habit the part rewards: underline the two or three words in each question that could only be true of one person** — _in writing_, _faithful_, _could not have explained_ — **and then scan for those, not for the topic.** **Two of the four people are used twice, which the rubric says and students do not read.**'));
out.push(NOTE('**Part 3.** All five words are from the declared sets of Units 16, 17 and 18. **7 plausibility** — the noun, and _plausibleness_ is not a word. **8 reduction** — not _reducing_, which would need no article. **9 consistency** — the quality, not _consistence_. **10 refutation** — and note that it is paired with _not praise but_, which requires a noun; about a fifth of any class writes _refuting_. **11 distillation** — and _distilment_ does not exist. ⚠ **The part is marked on spelling as well as on formation:** _consistancy_ and _plausability_ both score nothing, and both are commoner than any wrong word-class.'));
out.push(NOTE('**Part 2.** Accept nothing but the four words given. **12 than** — after a comparative, and students write _that_, which is this part\'s single commonest error at B2. **13 with** — _compared with_; accept _to_, which is also standard. **14 which** — _which side of the threshold_, an interrogative determiner and not a relative, so _what_ is also acceptable here and _that_ is not. **15 in** — _in fact_. ⚠ **One word only: a contraction counts as two and scores nothing**, and that instruction is on the paper because the examination enforces it.'));
out.push(NOTE('**Part 4.** Two to five words, and the word given cannot change. **16 is no point in** — the preposition takes a gerund, and _is no point to appeal_ is the error to expect. **17 was not until** — the _it was not until … that_ frame, split across the printed sentence. **18 No matter** — **two words, and it begins the sentence**, which is why candidates who have learned to put the key word in the middle of the gap lose it on position alone. **19 had not been checked** — the past perfect passive, four words; _was not checked_ is grammatical, means the same, and is three words with the wrong tense, so it scores nothing. **20 In spite of** — three words, and _Despite_ is not available because the key word must appear. ⚠ **Mark each out of one and give no half marks for a grammatical sentence with the wrong word count.**'));

// ---------- PAPER 2 ----------
out.push(pb());
out.push(paper('PAPER 2 · WRITING (15 marks)'));
out.push(S('Part 1 · The essay (8 marks)'));
out.push(A('**All three notes must be covered** — the reader\'s time, what gets left out, and the candidate\'s own idea — and the third must be **an idea and not an example of the first two.** A script that misses a note or repeats one cannot score above 4, however good the English is. ⚠ Mark the three off in the margin before you read for language, and then look for the one thing Units 17 and 18 both ask for: **the other side at its strongest, stated and not caricatured.** An essay that answers _a short document is always better_ by arguing that long documents are never read has argued with nobody.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Top', '**7–8**', 'Four paragraphs. The question answered, with its condition, in the first two lines. All three notes, the third genuinely the candidate\'s own. **The opposing case put at full strength before it is answered.** A conclusion that draws a distinction rather than repeating three points. 180–220 words. Errors do not obscure meaning.'],
  ['Good', '**5–6**', 'The shape is there and one element is thin: the opposing case is named but not strengthened, or the conclusion repeats, or the third note is an example of note two. Range is evident — one concessive clause or one fronted phrase used correctly.'],
  ['Pass', '**3–4**', 'All three notes present but handled in a list. No position in the first paragraph, or a position that changes in the last. Simple sentences throughout; the reader has to work in two or three places.'],
  ['Below', '**0–2**', 'A note missing, or under 140 words, or so general that it could have been written without the question. ⚠ An essay that answers _it depends_ in the first line and decides in the last sits here: the organisation mark cannot be given to a script whose position the examiner has to wait for.'],
], [1, 1, 5]));
out.push(SAMPLE([
  '**Shortness is not a virtue in itself; a document should be as long as the thing the reader has to do.**',
  '**It is true that a reader\'s time is the scarcest thing in any office.** A manager with forty minutes and eleven papers will read the first page of each, and a writer who ignores that has written for himself. **So the case for shortness is strong and it should be put at its strongest:** every page a reader does not reach is a page that did not exist.',
  '**But what is cut is chosen by the writer, and the reader cannot see what is missing.** I once read a one-page summary of a long report on a building. Every sentence on it was true. It left out one sentence about a wall that was moving, and the committee approved a contract that will have to be undone. **A short document hides its own omissions, and a long one at least carries them.**',
  '**My own view is that the useful question is not length but order.** A page that puts the one finding that changes a decision in its first line may then be as long as it likes; a reader who needs nothing more can stop. **The fault in the long report was not its forty-two pages but that the sentence that mattered was on page thirty-one.**',
  '**So I would not say that short is better.** I would say that the first line decides whether the rest is read, and that is a question about arrangement and not about length.',
]));
out.push(A('_(218 words — four paragraphs, three notes, the opposing case put at full strength in the second paragraph before it is answered, one concrete instance with a figure, and a conclusion that draws a distinction rather than repeating.)_'));
out.push(S('Part 2 · A review or a report (7 marks)'));
out.push(A('⚠ **Mark the two questions against different criteria, because they are different genres and the examination treats them so.** A **review** needs a verdict with a named reader, one decisive detail carrying a figure, and the weakness in its strongest form; **no introduction** — _in this review I shall examine_ is eight words telling the editor about instructions the editor wrote. A **report** needs headings, the present state described **before** it is judged, and **one** recommendation with its cost. A candidate who writes an essay with a heading on it has not done either.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Top', '**6–7**', '**Review:** the verdict and its reader in the first line; who it works for and who it does not, both answered; a figure that decided the verdict; the weakness given at full strength; no introduction. **Report:** four or five headings; the present practice described before any judgement; the loss named with a figure; **one** recommendation, costed. 180–220 words.'],
  ['Good', '**4–5**', 'All four required elements present and one is thin: the weakness is conceded without being strengthened, or the recommendation has no cost, or the review\'s figure is an impression _(often, rarely)_ rather than a count.'],
  ['Pass', '**2–3**', 'The genre is recognisable. The verdict is late, or the report judges before it describes, or more than one recommendation is made and none is costed.'],
  ['Below', '**0–1**', 'A requirement missing, or the wrong genre, or under 140 words. ⚠ A review that says only who the thing works for sits here: it is a recommendation and the task asked for four things.'],
], [1, 1, 5]));
out.push(SAMPLE([
  '**THE OBSERVATION FORM WE ALL FILL IN** _(review)_',
  '**This form works for the person signing it and not for the person being signed off, and the difference is one line it does not have.**',
  '**Three things on it are right and they are not small.** Each of its three criteria can be failed. The weighting is printed at the top — half for planning, a quarter each for the other two — so a new teacher knows where to put the effort. And there is a box for what was looked at, which puts the evidence above the verdict instead of beside it.',
  '**What decided my verdict is a count.** I have filled this form in eleven times and had it filled in about me four times. On all four of mine the verdict was mixed, and on none of the four could I tell what the failed line would do to me afterwards. Eleven and four, and the same gap in all fifteen.',
  '**The weakness at its strongest.** The form is not vague and it is not unfair. It is a complete account of how a verdict was reached, written for the file — and the file is not the person. A teacher reading it learns what was weighed; she does not learn whether a fail is a note for next year or a sentence somebody reads in two years, so she assumes the second.',
  '**The repair is one line, and whoever prints the next batch can add it:** _what a failed criterion means afterwards_.',
]));
out.push(A('_(214 words — no introduction, the verdict with its reader in the first line, who it works for and who it does not, the decisive detail carried by a count, the weakness conceded at full strength, and a repair the reader can act on. ⚠ Note that it praises three things before it criticises one; a review that opens on the fault loses the reader it is written for.)_'));

// ---------- PAPER 3 ----------
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (15 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · five extracts (5)', '21 **A** · 22 **C** · 23 **B** · 24 **A** · 25 **C**'],
  ['**Part 3** · multiple matching (5)', '26 **F** · 27 **E** · 28 **H** · 29 **D** · 30 **A**   _(not needed: **B**, **C**, **G**)_'],
  ['**Part 4** · multiple choice (5)', '31 **B** · 32 **A** · 33 **C** · 34 **A** · 35 **C**'],
], [1.2, 3]));
out.push(A('**Part 3:** the three unused options are written to be plausible for more than one speaker. ⚠ **B** _(I left out the one sentence…)_ **is nearly true of Speaker 2**, who rounded a figure rather than omitting one — and the distinction is the whole of Unit 18.4. **G** tempts on Speaker 1, who changed her mind, but nothing she says was written down in advance. **C** tempts on Speaker 5, who is an assessor and not somebody assessed.'));
out.push(NOTE('⚠ **The two items to replay in the feedback lesson are 22 and 33, and they fail in opposite ways.** In **22** the man did everything right except the placing — he put the case well and said whose it was — **so a student listening for a mistake hears none and chooses A.** The answer is in four words at the end: _in the last line_. **Teach the habit of listening for _where_ and not only for _what_.** In **33** the answer is the consequence and not the feeling: **he says the line embarrasses the agenda and then says what it did**, and students who stop at the first half choose **B**. **Ask of every Part 4 item: did he say that, or did he say what happened?**'));
out.push(S('Track MT-1 · Audio script'));
out.push(dlg(null, [
  ['21  Woman', 'I wrote it myself, in 2019, and I was pleased with it at the time: _a commitment to quality_. Four rounds, about thirty applicants, and it has never failed anybody and has never been the reason anybody was appointed. It is not a strict line and it is not a difficult one to understand. It is a line that cannot be failed, which means the three weeks two of those thirty spent writing about it went somewhere that did not count.'],
  ['22  Man', 'The four of them wanted the charge and were putting their case badly, so I put it for them — the server bill, the two volunteers who had stopped, the arithmetic. About two hundred words, and every figure was theirs. I did say it was not my position. I said it in the last line, in six words, after two hundred. Nobody reads the last line of a long post, and for eleven months the forum thought it was mine.'],
  ['23  Woman', 'It was in the May page and it was in the right place, at the top: eleven millimetres between the March and the October levels. In June I was tidying a long sentence and I wrote _about a centimetre_. I did not take it off the page and I did not copy it wrongly. I made it shorter. And the standard requires a survey at ten millimetres, so the shorter version is on the other side of the line from the real one.'],
  ['24  Man', 'Nineteen years, and I had never said it to myself in all that time. The people who were in the room do not need them — they were there. It is not for the chairman either, and it is certainly not for the file: a file is where a document goes when it has stopped being used. They are for the man at the far end of the directorate who has to place an order on Tuesday and was not invited.'],
  ['25  Woman', 'So we are agreed. The January order goes to Dar al-Kutub at the quoted price, and that is placed by the twentieth, by the stores clerk. The date of the next meeting is the fifth of June, which is in the diary. And I want the minute to say, in those words, that the February order was raised and dropped for want of the budget line — because last time something was raised and dropped, somebody went and placed it.'],
]));
out.push(S('Track MT-2 · Audio script'));
out.push(dlg(null, [
  ['26  Speaker 1', 'I had a folder of replies to it. Suppliers find the paperwork a nuisance and would rather we were not so strict — I had been answering that for three years, and in three years no supplier had ever put it to me in those words. If I had shown one of them my version of their case they would have been insulted by it. The real one came from a driver and took about forty seconds.'],
  ['27  Speaker 2', 'The contract allows seven days and provides for a deduction after that, and the delivery was nine days late. I wrote _over a week_ in the summary, because the line was long. Over a week is true of eight days and of nineteen. What I had actually done was remove the two days the deduction is calculated on — and we did not claim it, and nobody noticed, which is worse.'],
  ['28  Speaker 3', 'Nineteen hundred words. Who said what, in the order they said it, with nothing left out, because that is what I was taught minutes were. Sixty of the nineteen hundred were the decision. So for nineteen years I have been sending out a document in which the thing to be acted on was three per cent of the text — and it was accurate, and complete, and I was thanked for it.'],
  ['29  Speaker 4', 'They were shouting about freeloaders and nobody was listening, so I wrote their argument out properly, with their figures, and put the only sentence that said it was not mine at the very end. Eleven months later two people chose somebody else for a working group and one of them told me afterwards that it was that thread. He was not being unfair. He had read what was on the page.'],
  ['30  Speaker 5', 'Experience of two or more machines. I wrote that line in 2019 and I have asked for it in every advertisement since. What it measures is whether somebody has worked somewhere that had two machines, which is a fact about their last employer. Of nine applicants in 2023, four failed it, and three of those four had been at one-machine works for eleven, nine and six years.'],
]));
out.push(S('Track MT-3 · Audio script'));
out.push(dlg(null, [
  ['Interviewer', 'You have taken minutes at the directorate for nineteen years. You told me you counted a set.'],
  ['Man', 'I counted the words. Nineteen hundred in the document and sixty of them in the decision. I did not count who spoke or how long the meeting took — I counted the decision, because somebody had asked me what the minutes were for and I could not answer.'],
  ['Interviewer', 'And what are they for?'],
  ['Man', 'People who were not there. That is the whole answer and I had never said it to myself. The people in the room do not need them, the chairman has his own notes, and a file is where a document goes when nobody is using it any more.'],
  ['Interviewer', 'You now write six lines. One of them records what the time was spent on.'],
  ['Man', 'Fifty of the ninety minutes went on the car park, and it changed nothing. I wrote that in March and again in April, and the car park came off the standing agenda on the twenty-ninth of April. Four years of people complaining about it in the room had done nothing.'],
  ['Interviewer', 'Does a line like that not embarrass the meeting?'],
  ['Man', 'It embarrasses the agenda, which is the thing that needed it. And the result is what I would point at rather than the feeling.'],
  ['Interviewer', 'You also draft cases you do not hold. What will you not do?'],
  ['Man', 'I will not read out a figure I have not checked. I shall put the case and I shall put it as well as it can be put, and I shall say so in writing beforehand if there is one number in it I cannot say. In 2019 I did read one out, the other side checked it in four minutes, and the tender was reopened.'],
  ['Interviewer', 'And the thing you had never asked yourself?'],
  ['Man', 'Who reads them. Nineteen years of writing a document twice a week and I had never once asked who was going to read it.'],
]));

// ---------- PAPER 4 ----------
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (10 marks)'));
out.push(A('**The grid is printed on the test paper and the students should have read it before the day.** Mark the four rows as you go and write the figures in while the pair is still in front of you; a grid filled in afterwards becomes an impression.'));
out.push(S('Part 1 · Interview (2 marks)'));
out.push(A('Four questions, about two minutes. ⚠ The fourth — _what would change your mind, and by when?_ — is the only one that distinguishes the class, and it should be asked of **both** candidates even when time is short. A candidate who names a thing that could happen and a date is at the top of the row; one who says _I am always open to persuasion_ is not, however fluently.'));
out.push(S('Part 2 · Long turn (3 marks)'));
out.push(A('**One minute each, then thirty seconds each on the partner\'s pair.** Time it with a watch. Mark three things: **1** did the candidate name both pictures in **one** sentence and move on, or spend twenty seconds describing? **2** did the minute go on what **neither** picture shows? **3** in the thirty seconds, was the answer in the **first second**? ⚠ A candidate who begins _in the first photograph I can see_ has spent eight seconds earning nothing, and that is the single commonest fault in this part.'));
out.push(SAMPLE([
  '_**A, on the eleven-line advertisement and the three-line one.** Neither picture shows the applicants, and that is what I would spend the minute on. Somebody counted. My guess is that they counted how many of the eleven lines could actually be failed, found that the five about the person could not, and cut them — and the date at the bottom is the thing that makes the three lines mean anything, because it is a date somebody can be held to._'
]));
out.push(S('Part 3 · Collaborative task (3 marks)'));
out.push(A('**Fifteen seconds to read in silence, two minutes together, one minute to decide.** ⚠ Stop the pair at two minutes even mid-sentence, and then give the decision question as a separate instruction: _now decide which two of these matter most._ Mark three things: **1** did they **narrow** rather than survey — a discard with a reason, or a collapse? **2** did they invite each other for a **move** rather than an opinion? **3** did the minute produce a decision, in words, naming what was given up? **_We could not decide_ scores nothing in the interactive row**, however pleasant the three minutes were.'));
out.push(A('**The expected decision**, for your own ear and not to be required: pairs who have understood Units 16 to 18 keep **the decision quoted in full** and **what was not decided**, and give up the record of how the time was spent — because it changes an agenda and not an act. A pair who keep **the route for disagreeing, with a date** have also understood it, and should say why the quotation is not enough on its own. ⚠ **Any two, with reasons and a named discard, is a full mark in that row. Any two with no reasons is not.**'));
out.push(S('Part 4 · Discussion (2 marks)'));
out.push(A('Four questions to both candidates, about three minutes. ⚠ The first — _is it dishonest to put a case you do not believe?_ — is the one worth pressing, because the useful answer has a condition in it and almost nobody supplies one unprompted. A candidate who says _it depends on whether you say whose it is_ has given in one clause the whole of Unit 17.'));
out.push(S('Where every item in this test comes from'));
out.push(table(['Paper and part', 'Taught in'], [
  ['Reading Part 7 · multiple matching', '**14.7** _(the part itself)_ · the four accounts are 17.2, 17.4, 18.2 and 16.1'],
  ['Reading Part 3 · word formation', '**15.7** _(the part itself)_ · the five words from the sets of 16, 17 and 18'],
  ['Reading Part 2 · open cloze', '**18.7** _(the part itself)_ · the text is 18.4'],
  ['Reading Part 4 · transformations', '**16.7** _(the part itself)_ · items from 16.1, 16.4, 17.3 and 18.1'],
  ['Writing Part 1 · the essay', '**13.7, 15.7, 17.7** · and the shape is 3.6 of Book 1'],
  ['Writing Part 2 · review or report', '**16.7** _(review)_ · **14.7** _(report)_ · and 18.6 for the arrangement'],
  ['Listening Part 1 · five extracts', '**13.7, 17.7** · the extracts are 16.1, 17.1, 18.4, 18.3 and 18.3'],
  ['Listening Part 3 · multiple matching', '**15.7** · the five speakers are 17.2, 18.4, 18.3, 17.1 and 16.5'],
  ['Listening Part 4 · multiple choice', '**16.7** · the interview is 18.3 and 17.4'],
  ['Speaking Parts 1–4', 'Parts 2 and 3 were taught in Book 1, Units 4 and 6; the content is 16.5, 17.3, 18.1 and 18.3'],
], [2.2, 3]));
out.push(sp());
out.push(box('What to do with the result', [
  '**Give the mark back with the four questions from the test paper beside it, and nothing else.** ⚠ A student who scored thirty-eight and cannot say what would change their mind about anything has a worse problem than the twenty-two marks.',
  '**Two patterns are worth acting on.** ⚠ **A class that loses Part 7 and Listening Part 3 together is not reading the rubric** — both parts say that options repeat or are unused, and both are lost by students who assume a one-to-one match. **Ten minutes on the two rubrics is worth more than any revision of the material.**',
  '**And a class that scores well on everything except Writing Part 2** has learned the content and not the genres: **a review is not an essay with a title and a report is not a review with headings.** **Reread the 16.7 and 14.7 exam boxes before the second half of the book, not after it.**',
  '⚠ **The second half opens with Unit 19 on chairing and minuting**, which is 18.3 from the other side of the table: **a chairman who knows what the six lines will need can get it said in the room.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Mid-Book Test — Key');
