// Proactive English B1 · Syria Edition · Book 2 · END-OF-BOOK TEST — KEY (Units 13–24)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });

out.push(h1('END-OF-BOOK TEST · Units 13–24 — KEY'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Total: 100 marks** — Reading 30 · Writing 30 · Listening 20 · Speaking 20. The architecture is Book 1\'s, unchanged.',
  'Reading and Listening are **1 mark per question**, fifty questions in all. Writing has two band tables below (15 and 15). Speaking has a four-row grid printed on the test paper itself.',
  'Read each listening part **twice**, at normal speed, with a short pause between questions. Do not slow down: the unstressed approximator (_about_, _roughly_), the flat impersonal opening (_it is understood that_) and the contracted auxiliaries of the perfect forms are part of what is being tested and they disappear if you read carefully.',
  'The four audio scripts are printed in this key after the listening answers. Do not photocopy the key.',
  '**Timing.** Two sessions is the honest way to run it: Reading and Listening in one (about 80 minutes), Writing in the next (45), with Speaking done in pairs while the others write.',
  '**Nothing in this test is new.** Every item is traceable to one of the ninety-six lines in the twelve **I can…** boxes of Units 13–24, and the table at the end of this key says which cycle each part comes from.',
], C.lblue, C.navy));

// ---------- PAPER 1 ----------
out.push(paper('PAPER 1 · READING (30 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · notices (5)', '1 **A** · 2 **C** · 3 **B** · 4 **C** · 5 **A**'],
  ['**Part 2** · matching (5)', '6 **D** · 7 **A** · 8 **F** · 9 **C** · 10 **G**   _(not needed: B, E, H)_'],
  ['**Part 3** · long text (5)', '11 **A** · 12 **B** · 13 **D** · 14 **C** · 15 **B**'],
  ['**Part 4** · gapped text (5)', '16 **B** · 17 **C** · 18 **H** · 19 **A** · 20 **D**   _(not needed: E, F, G)_'],
  ['**Part 5** · multiple-choice cloze (6)', '21 **A** · 22 **C** · 23 **C** · 24 **D** · 25 **A** · 26 **B**'],
  ['**Part 6** · open cloze (4)', '27 **no** · 28 **because** · 29 **will** · 30 **that**'],
], [1.3, 3]));
out.push(A('**Part 1** · Each notice turns on one thing taught in the book. **1** _used to be left… until 2019_ (17.1 — a discontinued past habit, and the tin has not been replaced). **2** _were not recorded before 3 November_ — ⚠ option **A** is the trap for a candidate who reads _if you leave one_ as a prohibition. **3** _does not replace_ (19.2 and 20.1 — both, not either). **4** the second hand on the notice is the whole item: somebody has written that the sentence has nobody in it (23.3). **5** _requirement 8 is not a requirement_ (22.7 — seven assessed, and no weighting published).'));
out.push(A('**Part 2** · Each person needs exactly one document and each document answers exactly one need: **6** the page prepared before the hard question (22.4 → **D**), **7** the line that says what the certificate is **not** (24.7 → **A**), **8** the three columns, which is the only document that distinguishes four voices from confirmation (23.5 → **F**), **9** one line, one fault, one rewrite (20.7 → **C**), **10** the page a stranger could check (22.6 → **G**). The three unused documents are each a real document from the book — the complaint of 19.1, the rewritten instruction sheet of 20.3, the two columns of 21.7 — and none of them answers any of the five needs, which is how the part is built.'));
out.push(NOTE('**Part 3** is a Reading Part 3 in shape and a Part 4 in difficulty: three of the five items are about **why the writer says something** rather than what is said. **Question 11** is the hardest in the paper. The teacher\'s prediction is unusual because it was **about the sheet** and not about a student — which means she could lose, and that is the point of the paragraph. ⚠ **D** is attractive because the paragraph is positioned after the students\' sentences; nothing in the text says she pinned hers up later. Teach the habit the class has had since 23.7: ask what a detail **is doing** in the piece.'));
out.push(A('**Part 3, question 13** is the item most often lost, because the candidate has just read four paragraphs about improvement and the text says the **proportion barely changed** — and then explains that what moved was the reason. **12** rewards anybody who heard 23.5 in 23.7: the teacher reports her own claim as unconfirmed with the evidence against it, and ⚠ the text explicitly says she did **not** say she had been nearly right. **15** is a summary question and the answer is the sentence the whole exercise was for.'));
out.push(A('**Part 4** is done with referring words and not with meaning. **16 B** — _she took forty minutes over them and could not write a fifth_ is the only sentence that can follow a request for four sentences. **17 C** — _none of the ten was true_ is answered by _the eleventh version_ in the next sentence. **18 H** — _the line says…_ points back at _one line of her own underneath_ and forward to the future-perfect sentence of 24.6. **19 A** — _that is a description of evidence offered in place of the evidence_ points back at the quoted sentence. **20 D** — _which is exactly what they show_ picks up _she could not speak English a year ago_. The three distractors are all plausible sentences about the same woman and none of them is tied to a sentence on either side.'));
out.push(A('**Part 5** · **21 says** — ⚠ _tells_ needs a personal object (18.5, and still the commonest error in the room). **22 supplies** — _the reader supplies the doubt_ is the sentence of 23.2 and the only one of the four that collocates. **23 question** — _nobody in the sentence to question it_; ⚠ _ask_ takes a person, not a claim. **24 on** — _relied **on**_. **25 Try** — _try **to put**_ (18.2). **26 dressed** — _a rumour that has been dressed for the office_ (23.3); _worn_, _clothed_ and _fitted_ are all wrong with this subject.'));
out.push(A('**Part 6** · **27 no** — _no one will read it but the person who wrote it_; accept _nobody_ only if the candidate has also deleted _one_, which almost none will. **28 because** — ⚠ accept _since_ and _as_. **29 will** — the future perfect of 24.3; accept _shall_. **30 that** — _the line that matters_; ⚠ accept _which_. Do not accept _what_ for 30.'));

// ---------- PAPER 2 ----------
out.push(pb());
out.push(paper('PAPER 2 · WRITING (30 marks)'));
out.push(S('Part 1 · An email (15 marks)'));
out.push(A('**All four notes must be covered** — the test to apply to every sentence, what to do with the adjectives and what to put in their place, what to do about the dreaded question, and one example from the writer\'s own life **with a figure in it**. A script that misses a note cannot score above 9, however good the English is. Mark the four off in the margin before you read for language.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Strong', '13–15', 'All four notes, each developed. The advice is the book\'s: the stranger test, the adjectives replaced by sourced figures, the hard question in two sentences with the unflattering one first, and a personal example with a real number. Register consistent and friendly. Errors rare and not distracting.'],
  ['Good', '10–12', 'All four notes present, one thin. The advice is right but one element is asserted rather than explained — usually the hard question, which is given as _be honest_. Occasional errors in the perfects, the reporting verbs or the approximators; meaning always clear.'],
  ['Adequate', '7–9', 'Three notes covered, or four covered very briefly. Advice general — _be confident_, _do not boast_ — rather than the book\'s. The example has no figure in it. Errors noticeable, meaning recoverable.'],
  ['Weak', '4–6', 'Two notes, or an email that answers a different question. Frequent errors; the reader has to work.'],
  ['Very weak', '0–3', 'One note or none, not an email, or under 50 words.'],
], [1.1, 0.9, 4]));
out.push(SAMPLE([
  '**Sample script (168 words — band 13–15)**',
  'Dear Sam,',
  'There is one test and it is not _is this true_ and not _does this sound well_. It is: **could a stranger go and check it?** _Hard-working_ is true of almost everybody and checkable by nobody. _I have not missed a night shift since February_ can be checked in four minutes by somebody who has never met you.',
  'So count the adjectives about your own character in your two pages. Nine in one page is normal. Take all nine out and put figures in their place, each one with where it came from — _about four telephone calls a month, two of them in English; the count is my own, from the worksheets_. A figure with its source is a different object from the same figure alone.',
  'The question you are dreading is the easy part, and it will be easy once it is written down. Two sentences: the plain fact, including the part that does not flatter you, and then what it does not change, with a date. Then prepare the **second** question, because that is where the damage happens — the first answer has been rehearsed and the second has not.',
  'Mine: I was asked in October why I had accepted something after writing twice that I was not asking for it. I had three bad answers. The one I gave was fourteen words and the first six of them were against me, and it took four evenings to get to.',
  'Yours, Mazen',
]));
out.push(S('Part 2 · An article or a story (15 marks)'));
out.push(A('Either question. The **article** must answer all three parts of the notice — how you found out, what you did about it, and **what you still do not know** — and candidates routinely drop the third, which is the only one that requires a decision rather than a memory. The **story** must begin with the given sentence **word for word**; have the class copy it out before they plan.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Strong', '13–15', 'Article: all three parts, with real figures, a source for each, and a limit the writer puts on their own claim. Story: a sequence of events, the given sentence intact, and a last line that is earned. The structures of the book — the four habit forms, the passive, a cleft, approximators, a reporting verb chosen on purpose — used for a reason.'],
  ['Good', '10–12', 'Task done, with one part thin or one unearned ending. Figures present but one without a source. Tenses mostly controlled; paragraphed.'],
  ['Adequate', '7–9', 'Two parts of three, or a story that summarises rather than narrates. No figures, or figures with nothing behind them. Tense drift; meaning clear.'],
  ['Weak', '4–6', 'Half the task, or the story\'s opening sentence altered. Frequent errors.'],
  ['Very weak', '0–3', 'Task not attempted as set, or under 50 words.'],
], [1.1, 0.9, 4]));
out.push(SAMPLE([
  '**Sample script — Question 1, article (164 words — band 13–15)**',
  '**Four hundred out of what?**',
  'For two years I have been saying one figure about my own work: about four hundred passengers a day. It is roughly right and I was proud of it. In October a man at the directorate asked me a question that nobody had ever asked me — four hundred out of what?',
  'I did not know, and the question was the whole question, because the thing I have been complaining about for two years happens at twenty to seven in the morning, before my four hundred ever get on.',
  'So I counted. Eleven mornings in November, standing at the second stop before my own shift: between forty and seventy people waiting for a bus that had already gone, with a mean of about fifty-six. It is my own count and not the depot\'s, and the depot has no figure at all.',
  'What I did about it was change one sentence. Not _the 06.40 is a problem_, which invites a conversation about buses we have not got, but _the printed timetable says 06.40 and the first bus leaves at 06.20, and has since 2019_.',
  'What I still do not know is how many of the fifty-six are early for the 07.10 rather than late for a bus that does not exist. I cannot separate them, and if somebody counted for thirty mornings and asked each person, the figure would be better and it would be smaller.',
]));
out.push(SAMPLE([
  '**Sample script — Question 2, story (159 words — band 13–15)**',
  'He read the line a third time and realised that there was nobody in the sentence at all.',
  'It had been on the wall by the muster-room door since the second of December, about twenty words, and he had walked past it perhaps forty times. _It is understood that the second bus on the Harasta service will be withdrawn in the new year._',
  'He had answered eleven men about it that week, two minutes each, and had told every one of them nothing. Two of them had gone home and told their families that the service was going.',
  'That morning he tried to put a person in front of it. The roads office. The directorate. His own manager. The depot clerk. Every one of those would have been a sentence he could check with one telephone call, and the sentence as printed could not be checked by anybody in the world.',
  'He found the clerk at half past six and asked him who had written it. The clerk said he had, and then he said something that had not occurred to Tareq in three weeks: "I would put my name on it if anybody would tell me what the answer is."',
  'So the sentence had nobody in it because the fact had nobody in it, and the man he had been blaming was standing as far from the information as he was.',
]));

// ---------- PAPER 3 ----------
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (20 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · five extracts (5)', '31 **B** · 32 **C** · 33 **A** · 34 **B** · 35 **C**'],
  ['**Part 2** · matching (5)', '36 **A** · 37 **E** · 38 **B** · 39 **G** · 40 **C**   _(not needed: D, F, H)_'],
  ['**Part 3** · notes (5)', '41 **second / 2nd** · 42 **eleven / 11** · 43 **two / 2** · 44 **four / 4** · 45 **date**'],
  ['**Part 4** · interview (5)', '46 **B** · 47 **A** · 48 **C** · 49 **B** · 50 **A**'],
], [1.3, 3]));
out.push(A('**Part 1** · Extracts **2** and **5** are the two to replay. In **2** all three options are spoken — _many_, _reportedly_ and _seventeen_ — and only the last answers the question asked, which is the standard trap of this part (23.1). In **5** three dates are given in one sentence, the eleventh, the eighteenth and the twentieth, and the question asks for the one by which the total will be reached (24.3).'));
out.push(A('**Part 2** · Accept only the five letters given. The three distractors are built out of the speakers\' own vocabulary: **D** _a quality nobody could fail_ sits next to speaker 2, who is talking about adjectives; **F** _a figure with no source_ sits next to speaker 1, who is talking about a figure; **H** _a request for two things at once_ sits next to speaker 4, who is talking about something unattached. ⚠ Part 2 always contains one option that inverts a speaker, and here it is **F** — speaker 1\'s figure has a perfectly good source and is useless for a different reason.'));
out.push(NOTE('**Part 3** · Accept _second_ and _2nd_; _eleven_ and _11_; _two_ and _2_; _four_ and _4_. For **45** accept _date_ only — ⚠ not _name_, which is in the extract twice and is what the notice lacks rather than what the rewrite gives the driver. Gap **41** is the one most often lost: the printed note already contains the word _December_, so a candidate who writes _December_ in the gap loses a mark they had. Teach reading the words round the gap before the recording starts; it is the whole of Part 3 technique.'));
out.push(A('**Part 4** · Questions **49** and **50** are the pair to replay. In **49** she says the **proportion barely moved** before she says what did move, so a candidate listening for the first figure takes option A. In **50** the answer is a thing she says she **cannot** do, which candidates routinely hear as something she does. And **48** rewards the question-reading habit: _they are the most useful pages_ is a reasonable guess and the opposite of what she says.'));
out.push(S('Track ET2-1 · Audio script (five short extracts)'));
out.push(dlg(null, [
  ['31', 'Every sheet goes in at the office window now, and before 2019 there was a tin at the gate and you dropped it in on your way out. The tin has gone. Somebody said it was in the fitter\'s cupboard for a year and then it was not anywhere, and nothing has replaced it.'],
  ['32', 'Two items off the same page, and I believed one of them. The one I did not believe says many depots are reportedly receiving double allocations — and _many_ costs the writer nothing, because two is many if you want it to be. The one I believed says seventeen of the nineteen presses have been out of use since August, according to the works foreman, and the word is seventeen. Nobody invents seventeen.'],
  ['33', 'Nine sentences about my own road. Two of them are facts with somebody in them, two are claims with a claimant, one is about a man who refused to answer — and three have nobody in them at all. Three out of nine: no author, no source, and nothing in them that can be wrong.'],
  ['34', 'Four figures with their sources, and one refusal, in one line. And off it came every adjective about my own character — nine of them in one page, motivated, reliable, passionate about laboratory work, and not one that anybody could check.'],
  ['35', 'The meeting is the twentieth. Two more by the eleventh and the ninth one on the eighteenth, out loud, once — so by the twentieth I shall have written that answer nine times, and I shall have been chasing the thing for fourteen months.'],
]));
out.push(S('Track ET2-2 · Audio script (five speakers)'));
out.push(dlg(null, [
  ['Speaker 1', 'About four hundred a day. It is roughly true, I have the ticket machine behind it, and it is useless — because it is a total and the matter is a proportion. Four hundred a day tells you I am busy. Four hundred out of four hundred and sixty who wanted to travel has the fault inside the figure, and I had never once said it that way.'],
  ['Speaker 2', 'Passionate about laboratory work. That was in the first draft, with motivated and reliable, nine of them in one page. And all the time I had the figure sitting in the worksheets: four night calls a month, two of them in English. I wrote a word where I had a number, and so did the other eleven applicants.'],
  ['Speaker 3', 'Twenty words on a wall and no name on it. I tried to put four different people in front of that sentence and not one of them would go in, which means there is nobody to ask — and eleven men have asked me about it and I have been able to tell them nothing at all.'],
  ['Speaker 4', 'Forty minutes, one person, on the pump settings. I have said it in a meeting and it has been first on my list since August, and there is no name and no date and nothing in anybody\'s diary. Which makes it a feeling, and I have been carrying it about for five months as though it were a plan.'],
  ['Speaker 5', 'I answer the escalation calls. True, and every single time the next thing anybody said to me was about the calls — how many, how long, whether they are difficult. The calls are a nuisance. The point is that a call is the only place we find out what we promised somebody, and I had been pointing at the wrong noun for a year.'],
]));
out.push(S('Track ET2-3 · Audio script (one unsigned notice)'));
out.push(dlg(null, [
  ['Tareq', 'It is about twenty words long and it has been up by the muster-room door since the second of December. _It is understood that the second bus on the Harasta service will be withdrawn in the new year._ No name, no office, no date of decision. Eleven drivers have asked me about it, because I am on that service, and I have been able to tell each of them nothing, which takes about two minutes each — and two of them have gone home and told their families that the service is going. I have tried to put a person in front of it, and I have tried four: the roads office, the directorate, our own manager and the depot clerk. Every one of those would have been a sentence I could check with one telephone call, and the sentence as it is printed cannot be checked by anybody at all. I am not saying the information is wrong; for all I know the second bus is going. What I am saying is that the rewrite would be nine words longer and would carry a name, an office and a decision date — and then a driver can act on it, because he knows who to ask and he can tell his family a date instead of a rumour.'],
]));
out.push(S('Track ET2-4 · Audio script (an interview)'));
out.push(dlg(null, [
  ['Interviewer', 'Two years, two books, 252 hours. What was the hardest part?'],
  ['Huda', 'The first fortnight, and nothing in the two years came near it. In the first week I ask for four sentences about yourself, and I get four, and about half the room cannot produce a fifth. The second book is harder work and it is not hard in the same way, and the papers frighten people far less than that afternoon in January does.'],
  ['Interviewer', 'You ask them to put the date on that first page.'],
  ['Huda', 'The date, and somewhere they will not lose it. I used to think that was sentimental and it is not. In eleven months they will not believe it — they read their own four sentences and think somebody else wrote them. Then they get stuck at something new and decide they are slow, and the only evidence that they are not slow is the page they have stopped believing.'],
  ['Interviewer', 'There is a box at the end of every unit that says _I can_.'],
  ['Huda', 'There is, and I would say in print that it is the least useful page in each unit. Every line in it was chosen by somebody who is not the student, and they tick it against a lesson they have just had. The list that matters is the one nobody prints — what they cannot yet do — because they found those items themselves, by failing, in a room, on a day.'],
  ['Interviewer', 'And the prediction sheet.'],
  ['Huda', 'Up in September of the first year, down last month. The proportion of correct predictions barely moved in two years; people are about as good at guessing in their second year as in their first. What moved is the reason underneath each one — judgements in the first year, counted patterns in the second, with the count in the sentence and the students marking which was which.'],
  ['Interviewer', 'Is there anything in the two years you cannot help them with?'],
  ['Huda', 'One page. In the last unit they write a letter to themselves to be opened at the end of their next course, and nobody reads it but them — not me, not a partner. It is the shortest and the hardest page in the book, I cannot help with a line of it, and that is how I know the course is finished.'],
]));

// ---------- PAPER 4 ----------
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (20 marks)'));
out.push(A('Four parts, about twelve minutes for a pair: Part 1 about you (4), Part 2 the long turn (5), Part 3 the collaborative task (6), Part 4 discussion (5). The grid is printed on the test paper and the students should have read it before the day.'));
out.push(A('**Part 1 (4).** Two or three questions each, and the third and fourth are the ones to ask everybody: _one figure about your own work, and where it comes from_ (22.3) and _something you cannot yet do in English, and when you found that out_ (24.4). Every student who has finished this book has both answers written down, and a student who gives a figure without a source or a limit without a date should be asked the second half of the question before you move on.'));
out.push(A('**Part 2 (5).** A minute each. Card A is 23.3 and 20.7 — an unsigned notice, eleven questions answered with nothing, three people waiting. Card B is 24.6: three pages and an envelope. Mark description **and** decision: a candidate who describes and does not say what they would do cannot go above 3. A strong answer uses the impersonal report and its remedy (_there is nobody in that sentence, so I would ask the clerk who wrote it_) or the future perfect (_by Friday I shall have written the rewrite_).'));
out.push(A('**Part 3 (6).** The collaborative task. Mark **interaction**, not the decision: suggesting, responding to what the partner actually said, asking their view, and closing. ⚠ **An honest _we have not agreed, and here is each of our second choices_ scores as well as an agreement**, and two candidates who agree in forty seconds and then sit in silence score worst of all. Option ④ (_whether the publication is usually reliable_) and option ⑥ (_whether three other people say the same thing_) are the two the book has taught them to reject, and a pair that rejects both **with a reason** is doing exactly what Part 3 rewards.'));
out.push(A('**Part 4 (5).** Both students together. The second and the fifth are the useful questions — whether a figure about your own work is worth more than anything you could say about yourself, and what you will have forgotten by next December — because the first requires an opinion with a reason and the second requires the future perfect and a piece of honesty. Listen for _up to a point_, _admittedly_, _I see what you mean, but_ and _on balance_, and for the approximators in front of any figure.'));
out.push(NOTE('The commonest reason a good pair loses marks in Part 3 is still **rushing to agree**, and this task has a second trap: options ④ and ⑥ are the two most people would pick in real life, and the book has spent Unit 23 arguing against both. A pair that says _the publication does not matter, the sentence does_ and _three mouths is one rumour_ has earned the marks whether or not they then agree. ⚠ Do not reward a pair that recites those two sentences without applying them to the other four options.'));
out.push(pb());
out.push(S('Where every part of this test comes from'));
out.push(table(['Part', 'Taught in'], [
  ['Reading 1 · notices', '17.1 · 19.2 · 22.7 · 23.3 — habit forms, both-not-either, unfailable lines, the unsigned sentence'],
  ['Reading 2 · matching', '20.7 · 22.4 · 22.6 · 23.5 · 24.7 — documents and what each one is for'],
  ['Reading 3 · long text', '14.1 · 18.7 · 23.7 — the prediction board read three times; attitude and purpose'],
  ['Reading 4 · gapped text', '22.6 · 24.6 — referring words, and the four January sentences'],
  ['Reading 5 · MC cloze', '18.5 · 23.2 · 23.3 — reporting verbs, collocation, the agent test'],
  ['Reading 6 · open cloze', '24.3 · 24.6 — the future perfect, _because_, and the relative _that_'],
  ['Writing 1 · email', '22.1 · 22.4 · 22.6 — the stranger test, the adjectives, the hard question'],
  ['Writing 2 · article / story', '22.3 · 23.3 · 23.6 — a figure with its source and its limit; a sentence with nobody in it'],
  ['Listening 1 · extracts', '17.1 · 23.1 · 23.7 · 24.3 — one fact among three distractors'],
  ['Listening 2 · matching', '21.2 · 22.2 · 22.3 · 22.6 · 23.3 — five sentences abandoned, and why'],
  ['Listening 3 · notes', '23.3 — one unsigned notice, costed, with the rewrite'],
  ['Listening 4 · interview', '24.4 · 24.5 · 24.6 · 24.7 — the first fortnight, the reasons, and the sealed letter'],
  ['Speaking 1 · about you', '17.1 · 22.3 · 24.4 · 24.5'],
  ['Speaking 2 · long turn', '20.7 · 23.3 · 24.6 — describe, diagnose, decide'],
  ['Speaking 3 · talk together', '23.1 · 23.2 · 23.5 — B1 Preliminary Part 3, on what makes a sentence believable'],
  ['Speaking 4 · discussion', '22.4 · 22.6 · 23.3 · 24.6 — plainness, evidence, names, and forgetting'],
], [1.4, 3]));
out.push(sp());
out.push(box('After the test', [
  '**Give the marks back with the twenty-four "I can…" boxes, not instead of them** — and then with the one page the students wrote themselves in **24.4**. The number out of a hundred says where a student stands against an examination they have not sat; the _cannot yet_ list, with a date and a place on every item, says what to do in February. Of the two, only the second was written by the person it is about.',
  '**The four parts to re-teach, if the class marks are low.** Reading Part 3 (purpose and attitude — asking what a detail is **doing**), Reading Part 4 (referring words), Listening Part 3 (reading round the gap before the recording), and Speaking Part 3 (dropping options before deciding). Twenty minutes each, and all four are technique rather than language.',
  '**And the thing not on this paper.** Nothing in a hundred marks measures what 22.4 and 23.5 taught: saying the unflattering thing first, and keeping a claim in the middle column instead of promoting it. If a student does either in Writing Part 1 or Part 2, write it in the margin, because it is the most valuable thing in this book and no band descriptor can reach it.',
  '**Then the certificate**, and the three things to do with it before the end of February (24.7) — and the prediction sheet on the wall, which is read on the first of June by whoever is in the room.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · End-of-Book Test · Key');
