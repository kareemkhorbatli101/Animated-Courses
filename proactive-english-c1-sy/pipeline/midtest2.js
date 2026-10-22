// Proactive English C1 · Syria Edition · Book 2 · MID-BOOK TEST (Units 13–18)
const L = require('./lib');
const { p, h1, pb, sp, box, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('MID-BOOK TEST · Units 13–18'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading and Use of English** (55 min) · **Writing** (70 min) · **Listening** (about 30 min) · **Speaking** (in pairs, about 15 minutes with your teacher).',
  '**Total: 60 marks** (Reading and Use of English 24 · Writing 12 · Listening 12 · Speaking 12).',
  '**The six Reading parts in this paper are the six taught in Units 13–18**: Part 2 in 13.7, Part 6 in 14.7, Part 7 in 15.7, Part 8 in 16.7, Part 1 in 17.7 and Part 3 in 18.7.',
  '**The three Listening parts are Parts 2, 3 and 4**, taught in 14.7 and 18.7, 15.7 and 16.7. Part 1, taught in 17.7, is in the End-of-Book Test.',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  'Everything in this test has been taught in Units 13–18. Nothing in it is a surprise.',
  '⚠ If you finish early, read your writing twice: once for **every sentence that asks a reader to be kind rather than to do something**, and once for **every limit that is not attached to the judgement it limits**.',
], C.lblue, C.navy));

// ================= PAPER 1 =================
out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (55 minutes · 24 marks)'));
out.push(box('Part 1 · Multiple-choice cloze (4 marks)', [
  'For questions **1–4**, read the text and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.',
], C.lteal, C.teal));
out.push(model([
  '**THE QUESTION NOBODY ASKED**',
  'A registration clerk in a governorate office spent twenty-six years deciding which of the forty files on her desk were complete. Applicants wrote to her about regulations, at length, and in all that time the question of what a complete file actually needed had never **(1)** ______ to any of them.',
  'The applicants who threatened her were the easiest to deal with and the least likely to succeed. A threat obliged her to draft a refusal that would survive being read by her section head, with the regulation quoted — and a refusal written in that form is almost impossible to **(2)** ______ afterwards.',
  'Her section kept an unpublished list of alternatives for cases where records were not held, and on the one occasion in those years when somebody asked her what she needed, she gave it to him in six days. The requirement he had been arguing about was in fact satisfied: the purpose of the rule was already **(3)** ______ by the governorate\'s own register, which showed no second registration anywhere.',
  'The part of her account that is hardest to hear is the last. In twenty-six years nobody had ever **(4)** ______ her why a file had been refused. Only the acceptances were ever examined.',
]));
[
  '**1**   **A** occurred   **B** happened   **C** arisen   **D** struck',
  '**2**   **A** restart   **B** reopen   **C** revive   **D** renew',
  '**3**   **A** done   **B** kept   **C** met   **D** reached',
  '**4**   **A** questioned   **B** demanded   **C** requested   **D** asked',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 2 · Open cloze (4 marks)', [
  'For questions **5–8**, write **one** word in each gap. Write only one word.',
], C.lteal, C.teal));
out.push(model([
  '**WHAT A SILENCE IS TAKEN TO MEAN**',
  'A committee that has taken one vote in nine years decides everything by somebody saying a sentence and nobody contradicting it. That is not a failing: it is what most committees are. The question is only whether the room is told what is being done with its silence, **(5)** ______ is a question about one sentence and not about anybody\'s character.',
  'The sentence that used to be said asked whether everybody was happy, which asks a senior member to announce discontent in front of their own staff. Nobody does. No **(6)** ______ had that practice been replaced with a stated form of words, a private route and a time than four written objections arrived in two years, all of them from members who had said nothing in the room.',
  'A declaration signed by a head **(7)** ______ section is of no use if nobody knows it may be offered, and the same is true of a doubt: a doubt expressed by leaving a box empty is read as a zero at the next desk. The general case is the same in both directions. A limit written at the head of a page is read **(8)** ______ a manner and not as information, and a limit written inside the item it limits is acted on in three days.',
]));
out.push(sp());
out.push(box('Part 3 · Word formation (4 marks)', [
  'For questions **9–12**, use the word given in capitals at the end of each line to form a word that fits in the gap.',
], C.lteal, C.teal));
out.push(model([
  '**WHAT A CHAIR CANNOT BORROW**',
  'A chair of twenty-six has no **(9)** ______ to draw on and must rest every sentence on the agenda and the clock.   **SENIOR**',
  'The same is true of a judge asked to assess work in a field that is not theirs: a verdict given without the **(10)** ______ to give it is worth nothing to anybody.   **EXPERT**',
  'Where a requirement is a safeguard against something the record shows cannot occur, it is **(11)** ______ in that case and the point can be made in the body\'s own vocabulary.   **ANOMALY**',
  'And an objection to the wording of a minute is **(12)** ______ rather than substantive, which is why it is answered by the record and not by a letter.   **PROCEDURE**',
]));
out.push(pb());
out.push(box('Part 6 · Cross-text multiple matching (4 marks)', [
  'You are going to read four short texts about judging work you could not do yourself. For questions **13–16**, choose from the texts **A–D**.',
], C.lteal, C.teal));
out.push(model([
  '**FOUR VIEWS ON ASSESSING WORK OUTSIDE YOUR FIELD**',
  '**A** The useful question is not whether you are competent but where exactly you are not. A general statement of limits at the head of a report covers everything and therefore limits nothing; readers treat it as a manner. Attach the clause to the one judgement it governs, name the person who could make that judgement, and the reader can act on the same afternoon. What a non-specialist can always supply is a count, and a count dressed up as a verdict loses the only advantage it had.',
  '**B** Everybody says the limit should be declared and almost nobody asks what the declaration is for. It is not modesty. It is a referral: three words naming who should decide, and without them the reader has a hole and no means of filling it. I would go further than most of my colleagues and say that a judge outside a field is often better placed than a specialist to notice an absence — the step everybody in that field takes, which is missing — precisely because the specialist knows the step and cannot see the gap.',
  '**C** I am less impressed than others by the idea that an outsider sees what a specialist cannot. In my experience the outsider sees a different thing, which is not the same as seeing more: they see whether the work does what it claims to do for the reader it claims to serve. That is a real competence and it is narrow. The loose talk about fresh eyes has produced a great many confident assessments of matters the assessor had no instrument for.',
  '**D** A verdict should carry the best argument against itself, named as a ground of appeal, with an address and a time limit under it. Most of my colleagues think that invites challenges. Of four decisions my panel wrote that way, one was appealed and three were not, which I did not predict and cannot fully explain. What I am sure of is that the same fact arrives either way: found by the other party it is a scandal, printed by us it is a procedure.',
  '**13**  Which writer disagrees with B about what an outsider is able to see?',
  '**14**  Which writer expresses a similar view to A about what a declared limit is actually for?',
  '**15**  Which writer gives figures for an outcome they did not expect?',
  '**16**  Which writer warns against presenting a measurement as a judgement?',
]));
out.push(pb());
out.push(box('Part 7 · Gapped text (4 marks)', [
  'You are going to read an article. **Four** paragraphs have been removed. Choose from the paragraphs **A–E** the one which fits each gap **(17–20)**. There is one extra paragraph which you do not need to use.',
], C.lteal, C.teal));
out.push(model([
  '**PUTTING A DATE ON A CHANGE OF MIND**',
  'The ordinary way of reporting that you have changed your mind is to say that you now think differently, which conveys nothing. It has no date, no evidence and no denominator, and the person you are telling cannot check it or use it.',
  '**(17)** ______',
  'The form that does work has three parts and the third is the only difficult one. What you wrote; what you no longer believe; and then a fact. Not a reason — a fact. A reason is something you supply about yourself and it is therefore not evidence of anything.',
  '**(18)** ______',
  'That is straightforward where the old sentence was about the world. A prediction about other people is settled by what those people did, and the settlement has a date on it which you did not choose. A sentence about yourself is harder, because there is nothing outside you to consult except your own later writing.',
  '**(19)** ______',
  'The hardest case of all is a change with no event in it: a thing you stopped doing. Nothing happened on the day you stopped, so there is no date to report, and the honest move is to date the last instance instead and give it a denominator.',
  '**(20)** ______',
  '**A**  _I wrote that nobody from here gets an answer on that forum. Four answers came between March and November and the earliest is the nineteenth._ Two sentences, one claim, one settlement, and nothing between them. Anybody can check it and the writer cannot have arranged it.',
  '**B**  Four of the five dates people most value in their own development were supplied by somebody else: a letter that came back, a question that was not asked again, a report filed and not read. The ones we supply ourselves are the ones we cannot defend.',
  '**C**  Worse, it invites the person listening to be encouraging, and encouragement is the end of the exercise. A room that congratulates a change of mind has made the next change of mind a performance, and the writer will produce one whether or not it has happened.',
  '**D**  Sealed letters are sentimental and almost always useless, and the reason is not that people write badly to themselves. It is that they write the wrong kind of sentence: hopes, plans and descriptions of a mood, none of which can be shown to be wrong.',
  '**E**  There the evidence is a document you have written since — a refusal with the office named, a report that gives a denominator — or, better, an absence with a figure attached: nobody has asked me about my search since June, for the first time in four submissions.',
]));
out.push(pb());
out.push(box('Part 8 · Multiple matching (4 marks)', [
  'You are going to read four accounts by people who chair meetings at which they are the most junior person present. For questions **21–24**, choose from the people **A–D**.',
], C.lteal, C.teal));
out.push(model([
  '**FOUR JUNIOR CHAIRS**',
  '**A** For eleven calls I opened with thanks and an apology, and on the twelfth I said the time, the number of items and the number of minutes, and nothing else. We finished thirteen minutes earlier with the same agenda. The absence sentence is the one I would keep if I could keep only one: when the people whose item it is are not present, that item cannot be decided, and nobody argues with an empty chair.',
  '**B** My difficulty was never the opening. It was a director who talks, which is his job, and who talked for nine minutes about something that belonged to item four. I let him, because he is a director, and item four then had eleven minutes instead of twenty. Six words and an item number would have moved the whole thing: the price is that I must then reach item four, and a deferral that is not kept is worse than an interruption.',
  '**C** Nothing on my committee is ever voted on, so every decision is somebody saying a sentence and nobody contradicting it. I used to ask whether everybody was happy, which asks a senior member to declare discontent in front of their staff. Nobody ever did. Under the sentence I use now, four written objections have arrived in two years, all before the minute went out and all from people who had said nothing in the room.',
  '**D** I write the action list in the room now instead of at my desk afterwards. Forty-one actions over two years with eleven not done, against thirty-one actions in eighteen months with two not done. The only thing I changed was the order of six words and a silence of about three seconds, and the silence is the part nobody can put in a procedure. Thirteen amendments came in those silences, every one of them information I did not have.',
  '**Which person mentions**',
  '**21** ______  a cost that falls on the chair rather than on anybody else.',
  '**22** ______  an element of the method that cannot be written into a procedure.',
  '**23** ______  objections that reached them only after a change in one sentence.',
  '**24** ______  using the absence of particular people to settle what can be decided.',
]));

// ================= PAPER 2 =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (70 minutes · 12 marks)'));
out.push(box('Part 1 · The essay (6 marks) — you must do this question', [
  'Your class has read an article about writing for readers who can refuse you. **Write an essay discussing two of the points raised.** You should explain **which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about writing to somebody who has power over the outcome. **First**, that a limit should be attached to the one judgement it governs rather than to the whole document. **Second**, that a verdict should carry the best argument against itself. **Third**, that a request should ask what the reader needs rather than what you want."_',
  '**Points to discuss: 1** the limit attached to one judgement   **2** the verdict that carries its own ground of appeal   **3** the request that asks what the reader needs',
  '⚠ **Name the two in the first paragraph with the ground for choosing them, and do not mention the third again.** **One of the three carries a cost the article does not mention; say so if you take it.**',
], C.lorange, C.orange));
out.push(...lines(8));
out.push(pb());
out.push(box('Part 2 · A report, a review or a letter (6 marks) — answer one question only', [
  '**2** **A report.** **You have attended a meeting at which two parties disagreed and no position was reached.** Write a **report** for your manager setting out **the two positions**, **what both parties accepted**, and **what follows for the work.** Write **220–260 words**.   ⚠ **Same reporting verb on both sides, both reasons or neither, and nothing that is your own view.**',
  '**3** **A review.** **A magazine is running a series on handbooks written for non-specialists.** Write a **review** of one you have used in a field that is not your own, saying **what it claims about its readers**, **how far it keeps that claim**, and **who should and should not buy it.** Write **220–260 words**.   ⚠ **Declare your limit once, and recommend to at least two named kinds of reader.**',
  '**4** **A letter.** **A public body has refused an application of yours because a form has no field for your circumstances.** Write a **letter** to the section that holds the form, asking **whether the requirement applies**, and setting out **what the requirement is for** and **how your case meets that purpose.** Write **220–260 words**.   ⚠ **No hardship anywhere, and ask whether it applies rather than that it be waived.**',
], C.lorange, C.orange));
out.push(...lines(8));

// ================= PAPER 3 =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 30 minutes · 12 marks)'));
out.push(box('Part 2 · Sentence completion (4 marks)', [
  '🔊 **Track M2.1** You will hear a woman who scores grant applications talking about a criterion she distrusts. Complete the sentences with **a word or short phrase**.',
], C.lteal, C.teal));
[
  '**25**  She has scored applications against the same ______________ criteria for nine years.',
  '**26**  For two years she expressed her doubt about criterion 4 by leaving the box ______________ .',
  '**27**  A blank box is read as a ______________ at the next desk.',
  '**28**  The strongest ground she can give is a count taken across four ______________ .',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 3 · Long interview (4 marks)', [
  '🔊 **Track M2.2** You will hear an interview with a man who assesses lessons in subjects he does not teach. For questions **29–32**, choose the answer (**A**, **B**, **C** or **D**) which fits best.',
], C.lteal, C.teal));
[
  '**29**  What does he say about the sentence he used to put at the top of an appraisal?   **A** it was too short   **B** it was acted on in none of nine cases   **C** his superiors objected to it   **D** he was asked to remove it',
  '**30**  What does he say he can always assess?   **A** whether a demonstration is correct   **B** whether a lesson is enjoyable   **C** what he has counted   **D** whether the teacher is confident',
  '**31**  What was the effect of moving the clause into item 6?   **A** the appraisal became shorter   **B** the item was sent to a specialist adviser   **C** the teacher complained   **D** the form was changed',
  '**32**  What does he say about the appeal that followed?   **A** it used his own words   **B** it was withdrawn   **C** it was about a different item   **D** it has not yet been decided',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 4 · Multiple matching (4 marks)', [
  '🔊 **Track M2.3** You will hear four people talking about a document they could not get through a system. For questions **33–36**, choose from the list **A–F** the thing each speaker says made the difference. Use each letter once only. There are two letters you do not need.',
], C.lteal, C.teal));
out.push(q('**A** asking what a complete file needed   **B** stating what a rule was for   **C** putting the reason on its own sheet   **D** naming the nearest category   **E** threatening to take the matter further   **F** writing to somebody more senior'));
out.push(q('**Speaker 1** ______      **Speaker 2** ______      **Speaker 3** ______      **Speaker 4** ______'));

// ================= PAPER 4 =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 15 minutes · 12 marks)'));
out.push(p('_Your teacher runs all four parts. Nothing here is new: Part 2 was taught in Book 1 and Part 3 in 14.3 and 16.5._', { color: '7F7F7F', after: 120 }));
out.push(box('Part 1 · Interview (2 marks) — your teacher asks each student', [
  '**1** Tell me about something you have had to judge that you could not have done yourself.',
  '**2** Have you ever chaired a meeting at which somebody senior to you was present?',
  '**3** Is there a form you have had to fill in that had no field for your case?',
], C.lteal, C.teal));
out.push(box('Part 2 · Long turn (4 marks) — three photographs, you take two · one minute · then thirty seconds on your partner\'s pair', [
  '**Student A.** Here are three photographs. **Choose two** and compare them, saying **what the people might be deciding** and **what each of them risks.**',
  '_**1** A man at a laboratory bench with a clipboard, watching a demonstration he is not taking part in._   _**2** Two people on either side of a counter, one of them holding a form with a field ringed in red._   _**3** A young woman at the head of a table of older people, looking at a clock._',
  '**Student B**, after A has finished: **thirty seconds** — _in which of A\'s two photographs does the person have least authority, and why?_ ⚠ **Do not summarise what A said.**',
  '**Student B.** Here are three photographs. **Choose two** and compare them, saying **what has just been written** and **who will read it next.**',
  '_**1** A sealed envelope on a registry counter with two dates written on the back._   _**2** A score sheet with one line of handwriting in the margin._   _**3** A man reading a single page in a corridor, standing._',
  '**Student A**, after B has finished: **thirty seconds** — _which of B\'s two photographs shows a document that will still matter in five years, and why?_',
], C.lteal, C.teal));
out.push(box('Part 3 · Collaborative task (4 marks) — fifteen seconds to read · two minutes together · then one minute to decide', [
  '⚠ **A public body wants to make one change so that fewer applications are refused for the wrong reasons. Which should it make?**',
  '**A** _Publish the internal list of acceptable alternatives_   **B** _State on every form what each requirement is for_   **C** _Train staff to say what a complete file needs_   **D** _Give applicants a named person to write to_   **E** _Nothing: refusals are rarely wrong_',
  '⚠ **The two minutes must not decide anything.** **Give each option a cost and a condition, and ask no question about your partner.**',
  '**And then your teacher will ask:** _Now decide which one change the body should make._ ⚠ **One minute. Name the discard and say why.**',
], C.lteal, C.teal));
out.push(box('Part 4 · Discussion (2 marks) — your teacher asks both students', [
  '**1** Some people say a rule should never be explained, because an explanation can be argued with. What do you think?',
  '**2** Should somebody who judges your work have to say which part of it they could not assess?',
  '**3** Is it fair to read a silence in a meeting as agreement?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('How your teacher marks your speaking (12 marks)', [
  '**Grammar and vocabulary (3)** — range, and whether a borrowed official phrase is said without irony.',
  '**Discourse management (3)** — in Part 2, two photographs and not three, finishing on a full stop; in Part 3, two minutes that decide nothing.',
  '**Interactive communication (3)** — questions about the options and not about your partner; no _do you agree_.',
  '**Pronunciation (3)** — a limit said flat, with no fall on _cannot_; a question that comes down at the end and is followed by silence.',
], C.lblue, C.navy));
out.push(sp());
out.push(box('After the test', [
  '⚠ **Whatever your total, go back to the unit where you lost most marks and read the eight lines in its _I can…_ box again.** **The mark out of sixty is a measurement and not a verdict**, and every item in this paper is traceable to one of those forty-eight lines.',
  '**Units 19 to 24 ask harder things of the same habits, and the peer review changes.** **From 19.1 the reviewer writes the one sentence they would put in your place, and you say whether it is yours** — **which is the last and most uncomfortable of the four bands and the reason this course ends where it does.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Mid-Book Test');
