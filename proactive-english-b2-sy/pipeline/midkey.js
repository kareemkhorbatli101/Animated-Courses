// Proactive English B2 · Syria Edition · Book 1 · MID-BOOK TEST — KEY (Units 1–6)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });

out.push(h1('MID-BOOK TEST · Units 1–6 — KEY'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Total: 60 marks** — Reading and Use of English 20 · Writing 15 · Listening 15 · Speaking 10.',
  'Reading and Listening are **1 mark per question**, 35 questions in all. Writing has two band tables below (8 and 7). Speaking has a four-row grid printed on the test paper itself and the guidance for it is at the end of this key.',
  'Read each listening part **twice**, at normal speed, with a short pause between questions. ⚠ **Do not slow down.** The weak forms of _must have_, _needn\'t have_, _had been_ and _it was not until_ are part of what is being tested and they disappear the moment a reader becomes careful.',
  'The three audio scripts are printed in this key after the listening answers. **Do not photocopy the key.**',
  '**Timing.** One two-hour session does the whole paper if Speaking is done in pairs while the others write — which is how the examination itself is run. Otherwise: Reading and Listening in one lesson (about 70 minutes), Writing and Speaking in the next.',
  '⚠ **Nothing in this test is new.** Every item is traceable to one of the forty-eight lines in the six **I can…** boxes, and the table at the end of this key says which.',
], C.lblue, C.navy));

// ---------- PAPER 1 ----------
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (20 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · multiple-choice cloze (6)', '1 **B** · 2 **D** · 3 **A** · 4 **C** · 5 **B** · 6 **D**'],
  ['**Part 2** · open cloze (4)', '7 **to** · 8 **that** · 9 **which** · 10 **none**'],
  ['**Part 4** · transformations (4)', '11 **did anybody ask** · 12 **must be the cause** · 13 **take your point about** · 14 **was not until last week**'],
  ['**Part 6** · gapped text (6)', '15 **F** · 16 **C** · 17 **D** · 18 **A** · 19 **G** · 20 **B**   _(not needed: **E**)_'],
], [1.2, 3]));
out.push(NOTE('**Part 1 is a collocation test and nothing else, which is why three of the four options are usually real words in the wrong company.** **1 B** — a change _comes from_ a count; nothing _arrives from_ or _reaches from_ one. **2 D** — only _mention_ takes a thing as its object without a person: ~~she had never said this to~~ needs a clause, ~~told this to~~ needs the person first, ~~spoken this to~~ is not English. **3 A** — _bear no relation to_ is fixed. **4 C** — _be at pains to_ is fixed; there is no _at trouble_ or _at effort_. **5 B** — only _describe_ takes _as_ with an adjective here (_name as_ takes a role, _refer_ takes _to_). **6 D** — _set out_ a practice in writing. ⚠ Teach the habit of reading the whole sentence and then saying the gap aloud with each option: three of the four will sound wrong before any rule is remembered.'));
out.push(NOTE('**Part 2.** Accept nothing but the four words given. **7 to** (_attached to_). **8 that** — the second half of _not that … but that …_; do not accept _because_, which cannot follow _but_ here. **9 which** — _by which time_, a fixed relative; students write _that_, which is the commonest error in the part. **10 none** — _none of which_; do not accept _neither_ (there are three things, not two), which is the error worth pointing out, because it shows a student who is reading the grammar and not the arithmetic.'));
out.push(NOTE('**Part 4.** Two to five words, and the word given cannot change. **11 did anybody ask** — the inversion of 5.2, and the auxiliary must be supplied; accept _did anyone ask_. ⚠ The key word is **DID** and not _point_, because the key word has to appear in the candidate\'s own words and _at no point_ is already printed. **12 must be the cause** — the deduction of 4.1, and _must be_ alone is not enough to complete the sentence. **13 take your point about** — 6.2, and accept _take the point about_. **14 was not until last week** — 5.3, and the _it was not until … that_ frame is split across the printed sentence, which is what makes the item a B2 item rather than a B1 one. ⚠ **Mark each answer out of one and do not give half marks for a grammatical sentence with the wrong word count**; the examination does not, and a class that discovers this in Unit 12 has been misled.'));
out.push(NOTE('**Part 6 is cohesion and not comprehension, and in every case one word decides it.** **15 F** — _The difficulty is that_ answers the two sentences about practices that are not secrets. **16 C** — _She was not concealing it_ picks up the editor and is answered by _The nine had been writing…_ **17 D** — _a place they left two years ago_ is the outside, against _their own workplace_ in the sentence after it. **18 A** — _It is carried instead_ follows _cannot be handed on_, and _that person_ in the next sentence points back at _whoever has been doing it longest_. **19 G** — _It is a sentence_ answers _it is not a policy_. **20 B** — _What it cost her_ closes on the editor and the twenty minutes. ⚠ **E** is topically perfect and anchored to nothing on either side, which is exactly how the examination builds the extra option — and this year the text itself mentions handbooks, so a student who chooses **E** for gap 19 has read the topic and not the join.'));

// ---------- PAPER 2 ----------
out.push(pb());
out.push(paper('PAPER 2 · WRITING (15 marks)'));
out.push(S('Part 1 · The essay (8 marks)'));
out.push(A('**All three notes must be covered** — at work, in a disagreement, and the candidate\'s own idea — and the third must be **an idea and not an example of the first two**. A script that misses a note or repeats one cannot score above 4, however good the English is. ⚠ Mark the three off in the margin before you read for language, and then look for **the conceded point and its limit**, which is the one thing Unit 3 and Unit 6 both ask for.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Top', '**7–8**', 'Four paragraphs. A thesis sentence that takes a position in the first two lines. All three notes, the third genuinely the candidate\'s own. **One conceded point, conceded in full and then limited.** A conclusion that adds one thing rather than repeating three. 180–220 words. Errors do not obscure meaning.'],
  ['Good', '**5–6**', 'The shape is there and one element is thin: the concession is conceded and not limited, or the conclusion repeats, or the third note is an example of note one. Range is evident — one cleft or one fronted phrase used correctly.'],
  ['Pass', '**3–4**', 'All three notes present but handled in a list. No concession, or a concession with no limit. Simple sentences throughout; the reader has to work in two or three places.'],
  ['Below', '**0–2**', 'A note missing, or under 140 words, or so general that it could have been written without the question. ⚠ An essay of 250 words with no conclusion sits here and not above: it is not a longer essay but an unfinished one.'],
], [1, 1, 5]));
out.push(SAMPLE([
  '**A record is not a better memory; it is a different kind of thing**, and that is why I agree with the statement — though not for the reason it suggests. The question is not whose recollection is more accurate. It is that one of the two can be quoted and the other cannot.',
  'At work the difference is measurable. A decision I made at a counter three weeks ago is now remembered two ways, by two honest people, and **I am the one who was there and the one who cannot prove anything.** Memory is not evidence, and being right without a record puts me where a man who is wrong would be.',
  '**In a disagreement the case for memory is stronger, and this is the point I should concede.** A person who remembers a conversation remembers its tone, its hesitations and what was not said, and none of that survives in four lines on a docket. **But a disagreement is settled by whoever can show something**, and a tone cannot be shown.',
  'What decides it for me is a third thing: a record does not only outlast a memory, it outlasts the person. **An instruction can be copied by anybody; the reason for it leaves the building with whoever knew it.** That is the real cost of not writing things down, and it is paid by somebody who was never in the room.',
]));
out.push(A('_(216 words — four paragraphs, three notes, one conceded point conceded in full and limited, and a conclusion that adds the third idea rather than repeating the first two.)_'));
out.push(S('Part 2 · An article or a report (7 marks)'));
out.push(A('⚠ **Mark the two questions against different criteria, because they are different genres and the examination treats them so.** An **article** needs a reader who has chosen to read it: a title, a voice, and one concrete instance. A **report** needs a reader who asked for it: headings, the present state described **before** it is judged, and **one** recommendation with its cost. A candidate who writes an essay with a headline on it has not done either.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Top', '**6–7**', '**Article:** a title, one instance with a figure or a date in it, what it cost, and something to tell a newcomer. **Report:** headings that match what is under them, present practice described before judgement, and one affordable recommendation with a cost attached. 180–220 words in either case.'],
  ['Good', '**4–5**', 'The genre is right and one requirement is thin: an article with no instance, or a report with three recommendations instead of one — ⚠ which is the commonest fault and the one to name, because a reader with three cannot act on any.'],
  ['Pass', '**2–3**', 'The content is relevant but the genre is not visible: no headings in the report, or no reader in the article. Formulaic opening and closing.'],
  ['Below', '**0–1**', 'The other question answered, or under 140 words, or an essay with a title on it.'],
], [1, 1, 5]));
out.push(SAMPLE([
  '**Introduction**',
  'This report describes what new staff at the depot are told when they arrive, what they are not told, and recommends one change. It is based on the arrival of four new drivers since June and on my own arrival nine years ago.',
  '**What new staff are told now**',
  'A new driver is given the printed timetable, the vehicle check sheet and the depot telephone numbers, and is shown the yard by whoever is on duty. All of this is written down and all of it is accurate.',
  '**What they are not told**',
  'Two things, and both are unwritten. The first is that the printed departure time is read as a guide by the office and as an instruction by the drivers, which is why four of the six arrive at 06.05 and two at 06.15. **The second is who to ask when the two readings conflict**, and the answer — in practice, the longest-serving driver — appears in no document at all.',
  '**Recommendation**',
  'I recommend one line added to the arrival sheet: the name of the person to ask, and the sentence _the printed time is the time the service is due to leave_. It costs one line and about ten minutes, and it would have saved each of the four new drivers the fortnight it took them to find it out.',
]));
out.push(A('_(214 words — four headings, the practice described before it is judged, the loss given as two named absences with a figure, and one recommendation with its cost. ⚠ Note that it does **not** recommend a handbook, which is what about half of all scripts will recommend.)_'));

// ---------- PAPER 3 ----------
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (15 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · five extracts (5)', '21 **B** · 22 **A** · 23 **C** · 24 **A** · 25 **C**'],
  ['**Part 2** · sentence completion (5)', '26 **six** · 27 **nine** · 28 **four** · 29 **reordering** · 30 **fingers**'],
  ['**Part 4** · multiple choice (5)', '31 **A** · 32 **B** · 33 **C** · 34 **B** · 35 **A**'],
], [1.2, 3]));
out.push(A('**Part 2:** accept the figures in words or in digits. Accept _a reordering_ for **29** and _your fingers_ for **30**. ⚠ Do **not** accept _rewriting_, _reordering the paragraph_ or any paraphrase for **29** — the speaker says the word and the part is a test of hearing it. And do not accept _sixty-one_ for **26**: the extract contains **six**, **sixty-one**, **nine**, **four**, **fifty-two** and **three** inside ninety seconds, which is the standard trap in this part and the reason it is worth replaying.'));
out.push(NOTE('⚠ **The two items to replay in the feedback lesson are 23 and 33, and they fail in the same way: the right answer is the thing the speaker says is _missing_ or _not the case_.** In **23** the minute has a date and an instruction and the woman names both before saying what it does not have; students who hear _it has a date on it_ and stop there choose **A**. In **33** the man says explicitly that the customer is **not** lying — _I want to be clear about that, because the easy thing is to say he is_ — and about a third of any class will still choose **A**, because it is the answer the situation suggests. **Teach the habit of asking: did he say that, or does the situation imply it?** That question is worth four marks in a paper of this size.'));
out.push(S('Track MT-1 · Audio script'));
out.push(dlg(null, [
  ['21  Woman', 'The cut was right. I would make the same cut tonight, and he knows it, because the figure I kept is the one that has been quoted back to this office four times since Thursday. What was wrong was the line I sent with it. I wrote one word — _space_ — at eleven at night, and that one word is the reason we have spent three days on a paragraph instead of three minutes.'],
  ['22  Man', 'Fifteen handsets of that model since the twelfth of September, and I thought nothing of it until I put the batch numbers in a line. Eleven of the fifteen carry the same number. The model is a common one — about a third of what comes over my counter is that model — but the batch is not a third of anything, and that is the whole of what I have.'],
  ['23  Woman', 'Eleven words, and every one of them is perfectly clear: _the trial is extended to all night staff._ It has a date on it, the twenty-seventh of October, and it tells me exactly what to do, which I can do. What it has not got is why. I am briefing twenty-two people on Monday and I cannot tell them the one thing all twenty-two of them will ask me.'],
  ['24  Man', 'We shall be doing the whole of it again in February, and it is not because anybody decided wrongly. Four of us were there, all four agreed, and the minute says what we agreed. What the minute does not say is which three things we turned down, or why. So when somebody proposes one of those three again — and somebody will, because it was the cheap one — nobody in that room will be able to say that it was looked at and refused.'],
  ['25  Woman', 'Four times since December, and four refusals. I had been assuming they thought it was expensive. It is two hours of somebody\'s time, and I had never once said so: I wrote about _looking at the question of the promise fields_, which is twenty words and could mean a redesign of the whole form. A reader who is not told the size of a request will decide it themselves, and they will decide it large.'],
]));
out.push(S('Track MT-2 · Audio script'));
out.push(dlg(null, [
  ['Woman', 'I did the counting on a Sunday, which I had never thought to do in four years. I went through six issues — six, which is about eighteen months of the magazine — and I counted every paragraph of contributed copy. Sixty-one of them. Then one question: in how many does a figure, a date or a name appear in the first six words? Nine. Nine of sixty-one.'],
  ['Woman', 'And the reason that figure matters is a thing I do myself and had never written down. I write the contents page, and I write it from the front: about four words for each paragraph, taken off the top of it. So for fifty-two of those sixty-one paragraphs, the contents page describes the opening and not the finding.'],
  ['Woman', 'I want to be careful about what I am not asking for. I am not asking for shorter paragraphs. The fifty-two are not too long; they are loaded at the wrong end, and what they need is a reordering and not a cut. Three of them are the best writing in the six issues and I would not change a word.'],
  ['Woman', 'What I am asking for is one thing, and it is a thing you can count on your fingers: a figure, a date or a name in the first six words. Not in the first sentence — in the first six words.'],
]));
out.push(S('Track MT-3 · Audio script'));
out.push(dlg(null, [
  ['Interviewer', 'You counted something last month.'],
  ['Mazen', 'I counted decisions. Not faults — I have counted faults for nine years, that is what the book is for. Decisions with a limit in them: a number of days, a number of handsets, a date, a person. Eleven of them in a fortnight, all made out loud at the counter.'],
  ['Interviewer', 'And how many had you written down?'],
  ['Mazen', 'None. Not one of the eleven.'],
  ['Interviewer', 'You said three of them are now disputed.'],
  ['Mazen', 'Three. The worst is a handset I agreed to hold for a fortnight. He says a week. He is not lying to me, and I want to be clear about that, because the easy thing is to say that he is. He has said _a week_ to himself every day for a fortnight, because a week is what he needs. I have said nothing to myself at all, because I had eleven of these and he had one.'],
  ['Interviewer', 'But you are right.'],
  ['Mazen', 'I am right and I cannot show it, and that is the part I had wrong for nine years. I had always thought that having been there was worth something — that being the man standing at the counter counted for something when two accounts did not match. It counts for nothing. Memory is not evidence, and being right without a record puts me exactly where a man who is wrong would be.'],
  ['Interviewer', 'So what happens now?'],
  ['Mazen', 'Three lines on the back of the docket, written in front of the customer while he watches. The decision, the limit and the date. Nine words, about fifteen seconds. I have done it eleven times since Sunday and nobody has minded — one man asked me to write the date bigger, and another took a photograph of it with his telephone.'],
]));

// ---------- PAPER 4 ----------
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (10 marks)'));
out.push(A('**The grid is printed on the test paper and the students should have read it before the day.** Mark the four rows as you go and write the figures in while the pair is still in front of you; a grid filled in afterwards becomes an impression.'));
out.push(S('Part 1 · Interview (2 marks)'));
out.push(A('Four questions, about two minutes. ⚠ The fourth — _what are you going on?_ — is the only one that distinguishes the class, and it should be asked of **both** candidates even when time is short. A candidate who answers it with a reason is at the top of the row; one who repeats the claim more firmly is not.'));
out.push(S('Part 2 · Long turn (3 marks)'));
out.push(A('**One minute each, then thirty seconds each on the partner\'s pair.** Time it with a watch. Mark three things: **1** did the candidate name both pictures in **one** sentence and move on, or spend twenty seconds describing? **2** did the minute go on what **neither** picture shows? **3** in the thirty seconds, was the answer in the **first second**? ⚠ A candidate who begins _in the first photograph I can see_ has spent eight seconds earning nothing, and that is the single commonest fault in this part.'));
out.push(SAMPLE([
  '**A top answer to Candidate A\'s pair, in outline.** _Both of these are the same hospital board, five weeks apart, and what has changed is that somebody has taken three notices down._ _(One sentence, and into the minute.)_ _What neither of them shows is who decided. There is a pin left in the corner of the second one, so it was done in a hurry or by somebody who was not sure the notices were finished with — and neither picture tells us whether the rota underneath had been out of date all along. The most likely thing, from the two together, is that somebody found out they had been reading the rota for five weeks through three sheets of paper, which is the kind of thing nobody decides: it gets noticed. And what neither picture can show is whether it was written down anywhere, which is what decides whether the notices are back next month._',
]));
out.push(S('Part 3 · Collaborative task (3 marks)'));
out.push(A('**Fifteen seconds to read in silence, two minutes together, one minute to decide.** ⚠ Stop the pair at two minutes even mid-sentence, and then give the decision question as a separate instruction: _now decide which two of these matter most._ Mark three things: **1** did they **narrow** rather than survey — a discard with a reason, or a collapse? **2** did they invite each other for a **move** rather than an opinion? **3** did the minute produce a decision, in words, naming what was given up? **_We could not decide_ scores nothing in the interactive row**, however pleasant the three minutes were.'));
out.push(A('**The expected decision**, for your own ear and not to be required: the pairs who have understood the unit keep **a minute written on the day** and **one person made responsible**, and give up the review date — because a date with no figure attached is a safeguard that does nothing. A pair who keep **the reason recorded** and **the list of options refused** have also understood it, and should say why the first two are not needed. ⚠ **Any two, with reasons and a named discard, is a full mark in that row. Any two with no reasons is not.**'));
out.push(S('Part 4 · Discussion (2 marks)'));
out.push(A('Four questions to both candidates, about three minutes. ⚠ The second — _is it ever better not to record the reason?_ — is the one worth pressing, because the honest answer is yes and almost nobody says so. A candidate who can concede that and then limit it (6.2) is demonstrating in speech the thing the whole second half of this book is about.'));
out.push(S('Where every item in this test comes from'));
out.push(table(['Paper and part', 'Taught in'], [
  ['Reading Part 1 · collocation and phrasal verbs', 'the declared sets of Units 1–6 · Reading Part 1 taught in **3.7**'],
  ['Reading Part 2 · open cloze', '**4.7** · function words and _by which time_'],
  ['Reading Part 4 · transformations', '**2.7** · with items from 4.1, 5.2, 5.3 and 6.2'],
  ['Reading Part 6 · gapped text', '**6.7** · cohesion, and Unit 1\'s subject matter'],
  ['Writing Part 1 · the essay', '**3.6** and **3.7** · the shape, the conceded point, the forty minutes'],
  ['Writing Part 2 · article or report', 'the article in **2.7**, the report in **6.7**'],
  ['Listening Part 1 · five extracts', '**5.7** · and every item is a sentence from Units 1–6'],
  ['Listening Part 2 · sentence completion', '**6.7** · the speaker\'s own words'],
  ['Listening Part 4 · multiple choice', '**4.7** · distractors that are true but unsaid'],
  ['Speaking Part 1 and Part 4', 'every **x.1** Stage 1 and every **x.7** Stage 4R'],
  ['Speaking Part 2 · the long turn', '**4.3** and **4.4**'],
  ['Speaking Part 3 · the collaborative task', '**6.1**, **6.2** and **6.3**'],
], [2, 2]));
out.push(sp());
out.push(box('What to do with the result', [
  '**Do not spend a lesson on the paper.** Spend it on the four things the second half of the book rests on, and let the marks decide the order: _what am I going on?_ (Unit 4) · the conceded point with its limit (Units 3 and 6) · _which version will the reader quote?_ (Unit 5) · the five lines somebody who was not there could act on (Unit 6).',
  '⚠ **The one figure worth writing in a register is not the total.** It is **how many of the forty-eight _I can…_ lines each student can tick without hesitating**, and it is worth taking the ten minutes to collect it: a class that is weak on Unit 5 and strong on Unit 6 needs a different second half from a class that is the other way round.',
  '**Two faults will dominate the Writing paper and both are cheap to repair.** Three recommendations instead of one in the report, and a concession with no limit in the essay. Name them both, in those words, in the feedback lesson.',
  '**And the item to read aloud whatever the marks are** is the last line of Track MT-3: _three lines on the back of the docket, written in front of the customer while he watches._ Nine words, fifteen seconds, and it is the most useful thing in the first half of this book.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Mid-Book Test — Key');
