// Proactive English C1 · Syria Edition · Book 2 · END-OF-BOOK TEST (Units 13–24)
const L = require('./lib');
const { p, h1, pb, sp, box, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('END-OF-BOOK TEST · Units 13–24'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading and Use of English** (80 min) · **Writing** (90 min) · **Listening** (about 40 min) · **Speaking** (in pairs, about 18 minutes with your teacher).',
  '**Total: 100 marks** (Reading and Use of English 40 · Writing 20 · Listening 20 · Speaking 20).',
  '⚠ **All eight Reading and Use of English parts are in this paper, and Listening Part 1 is here at full length, as the Mid-Book key promised.** **In Book 2 you met Part 2 in Unit 24, Part 5 in Unit 20, Part 6 in Unit 21, Part 7 in Unit 22 and Part 8 in Unit 23** — **and the four of those you have met once each are the four to look at again before you sit this.**',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  'Everything in this test has been taught in Units 13–24. Nothing in it is a surprise.',
  '⚠ **If you finish early, read your two written answers three times**: once for **every sentence that is a fact about your reader rather than about the work**, once for **every figure with no document behind it**, and once for **every adjective about yourself.**',
], C.lblue, C.navy));

// ================= PAPER 1 =================
out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (80 minutes · 40 marks)'));
out.push(box('Part 1 · Multiple-choice cloze (5 marks)', [
  'For questions **1–5**, read the text and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.',
], C.lteal, C.teal));
out.push(model([
  '**THE FOUR DAYS**',
  'When the finance director of a milling firm was handed three pages he had not asked for, he read the first paragraph twice. It said that three people in a depot office spend four days a month reconciling deliveries the system has recorded twice, and that this had been the case since 2016.',
  'What **(1)** ______ him was not the figure but the date. He had signed that office\'s establishment three times in those years and had never been asked for a fourth person, which he had **(2)** ______ to mean that the office was adequately staffed.',
  'The second page was arithmetic, and the writer had refused to add it **(3)** ______ : a hundred and forty-four person-days, forty-five write-offs and fifteen hours of approvals are measured in different units, and a single figure would have been the writer\'s rather than the director\'s.',
  'The third page asked for four weeks of the writer\'s own time and read access to a database the firm already owned. Underneath it stood a list of four things he was not asking for, which the director now says is the reason he **(4)** ______ to it, although he did not know that at the time.',
  'The duplicates have not all gone. Thirty-one of the forty-five can be identified from the table structure, which **(5)** ______ short of the whole and is enough for the depot office to stop losing two days a month.',
]));
[
  '**1**   **A** moved   **B** struck   **C** touched   **D** caught',
  '**2**   **A** held   **B** read   **C** taken   **D** put',
  '**3**   **A** up   **B** in   **C** over   **D** out',
  '**4**   **A** accepted   **B** allowed   **C** agreed   **D** consented',
  '**5**   **A** falls   **B** comes   **C** stops   **D** draws',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 2 · Open cloze (5 marks)', [
  'For questions **6–10**, think of the word which best fits each gap. Use only **one word** in each gap.',
], C.lteal, C.teal));
out.push(model([
  '**TWELVE LINES**',
  'A doctoral candidate wrote the plan of a chapter she had already finished. Twelve lines, one page, and the instruction was that each line should say what the paragraph does and not **(6)** ______ it is about.',
  'It took twenty minutes, and it showed her in forty seconds **(7)** ______ two of the twelve paragraphs do the same job. They are four hundred and ten words and three hundred and sixty words long, and they stand eleven hundred words apart.',
  'She had read the chapter about thirty times **(8)** ______ noticing. The reason is not carelessness. A writer rereading carries the whole piece in their head, **(9)** ______ a reader cannot do, so a premise stated for the second time reads **(10)** ______ a reminder rather than as a repetition.',
  'Her supervisor had written _long in the middle_ in the margin of two chapters. She had taken it for a remark about style and had twice answered it by cutting adjectives.',
]));
out.push(pb());
out.push(box('Part 3 · Word formation (5 marks)', [
  'For questions **11–15**, use the word in capitals to form a word that fits in the gap.',
], C.lteal, C.teal));
out.push(model([
  '**ITEM 6**',
  'Item 6 of the schedule makes professional documentation **(11)** ______ (ADMIT) where a registered superintendent endorses it.',
  'The **(12)** ______ (REGULATE) framework behind the clerk\'s one-page list runs to eleven items, of which the list reproduces four, and all four are about **(13)** ______ (ELIGIBLE).',
  'No **(14)** ______ (VALIDATE) of the other seven has been carried out since the schedule was written in 2021, and nobody on either side of the desk has cited item 6 in that time.',
  'An **(15)** ______ (ENUMERATE) of the eleven items, on one sheet, would take an afternoon and has never been requested by anybody.',
]));
out.push(pb());
out.push(box('Part 4 · Key-word transformations (6 marks · two marks each)', [
  'For questions **16–18**, complete the second sentence so that it means the same as the first. Use the word given. Use **between three and six words**, including the word given.',
], C.lteal, C.teal));
[
  '**16**   Nobody had ever asked her how long one dossier takes.   **ASKED**',
  '            She ______________________________ how long one dossier takes.',
  '**17**   I regret that I did not tell him what the figure was for.   **HAVING**',
  '            I regret ______________________________ him what the figure was for.',
  '**18**   It is not possible to identify more than thirty-one of the duplicates.   **MORE**',
  '            No ______________________________ thirty-one of the duplicates can be identified.',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 5 · Multiple choice (5 marks)', [
  'For questions **19–23**, choose the answer (**A**, **B**, **C** or **D**) which fits best according to the text.',
], C.lteal, C.teal));
out.push(model([
  '**WHAT A REFUSAL IS FOR**',
  'I have written thirty-one refusals this year and I counted the first eight words of each of them in November. Twenty-four begin with some form of _we are unable_. Nineteen of those twenty-four were decisions: the committee had money, the scheme was eligible, and we chose other schemes.',
  'The reason I had not noticed is that _unable_ is kinder to write. It is not kinder to read and it is not kinder to act on, and those are three different things. What _unable_ tells a reader is that something is in the way, so they move it. One applicant cut his budget by a fifth, found a co-funder and obtained a letter from the governorate in five visits — eleven weeks of work by three people, in answer to a sentence I had written in about four minutes. The committee refused the scheme again, for the reason it had refused it the first time.',
  'The repair is one unremovable reason, said once, with no second reason behind it. A second reason weakens the first: a reader attacks the weakest, and when the weakest falls the letter looks as though it was assembled out of whatever came to hand. Seven of my thirty-one were appealed, and those seven averaged three point four reasons; the nine single-reason letters were appealed twice.',
  'The hardest sentence is six words long. _There is no alternative I can offer._ Twelve of my letters should have carried it and two did, and those two are the only refusals all year that produced no further correspondence from anybody. I had believed for nine years that a refusal with nothing in it was the cruellest thing I could send. I now think the cruellest is _we would be glad to look at a revised proposal_, which is warm, costs the writer nothing, and is an instruction to do eleven weeks of work for a second refusal.',
]));
[
  '**19**  What does the writer say about the first eight words of her letters?   **A** They were chosen carelessly.   **B** They described a choice as a limitation.   **C** They had been criticised by applicants.   **D** They were taken from a standard form.',
  '**20**  What does she say about the three kinds of kindness?   **A** Only one of them matters.   **B** They are usually in conflict.   **C** They are three different things.   **D** Applicants value a different one from writers.',
  '**21**  Why does she say a second reason weakens the first?   **A** It makes the letter too long.   **B** It is usually untrue.   **C** When the weaker one falls, the letter looks improvised.   **D** Readers prefer a single explanation.',
  '**22**  What does the figure of two letters demonstrate?   **A** that an applicant will always reply   **B** that a closed matter generates no correspondence   **C** that she wrote too few of them   **D** that appeals are rare',
  '**23**  What has changed her view of the cruellest sentence?   **A** Two letters nobody answered.   **B** A complaint from a committee.   **C** The number of appeals.   **D** Advice from a colleague.',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 6 · Cross-text multiple matching (4 marks)', [
  'For questions **24–27**, choose from the writers **A–D**. The writers may be chosen more than once.',
], C.lteal, C.teal));
out.push(model([
  '**A** _(a grants officer)_   A refusal is a document with two readers: the applicant, and whoever has to defend it in a room you are not in. Mine failed last year because the rule\'s purpose was in my internal note and not in the letter. Schedules, keys and scripts should travel with the documents that rely on them, always. And one reason, never two: I have counted the appeals against my own letters and the three-reason letters are the ones that were argued with.',
  '**B** _(a head teacher)_   Send the key with everything: a document that cannot be checked is not a document, and I have never understood the instinct to keep the apparatus back. On the number of reasons I part company with my colleagues. In my work the reasons are usually three — the timetable, the directorate and the parents — and a letter that gives one of the three is a letter that will be asked about the other two. What I have learnt instead is that the person a document merely describes should read it before anybody who can act on it, and I found that out by writing a paragraph about a colleague\'s signature and nearly sending it.',
  '**C** _(a court interpreter)_   I keep the schedules and the keys and I do not send them. A document that arrives with its apparatus is a document that asks to be checked, and in my work it will be checked by somebody paid to find the second reading of every clause. On reasons I am with the grants officer entirely: one, stated once, and nothing behind it. And nothing leaves my desk with a figure in it that does not name the document the figure came from.',
  '**D** _(a systems engineer)_   Send the plan, send the key, send the schedule: a page that settles an argument costs twenty minutes and saves a fortnight. I would go further than my colleagues on evidence — every figure in anything I write names the document it came from, and where it does not I expect the reader to refuse it. One reason is right and I have learnt it the slow way, by watching a three-reason refusal of my own fall on the weakest of the three.',
]));
[
  '**24**  Which writer has a different view from the others about sending the apparatus of a document with it?',
  '**25**  Which writer has a different view from the others about giving a single reason?',
  '**26**  Which writer, like C, insists that every figure names the document it came from?',
  '**27**  Which writer mentions a document they nearly sent?',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 7 · Gapped text (4 marks)', [
  'Four paragraphs have been removed from the text below. Choose from the paragraphs **A–E** the one which fits each gap **(28–31)**. There is one extra paragraph you do not need to use.',
], C.lteal, C.teal));
out.push(model([
  '**THE CHAPTER AND ITS TWO READERS**',
  'A chapter of four thousand one hundred and sixty words went to two readers in February. One of them had twenty minutes and the other had two.',
  '**28** ______',
  'Her supervisor read the whole thing at speed and reported that the centre of the chapter was paragraph 7. The writer thinks the centre is paragraph 5, which is where her own figure appears, and her one-page plan says so in nine words.',
  '**29** ______',
  'The panel chairman read the first paragraph and the last, which is what a reader with two minutes reads, and came away with a chapter about whether the writer\'s own recordings are adequate. He has asked her for the recordings paper instead.',
  '**30** ______',
  'What none of the three had noticed is that paragraph 6 exists to make paragraph 7 readable. It carries no new claim at all; it restates a counting rule in the reader\'s own terms, one page before the figure needs it. Remove it and two readers in a test read paragraph 7 as an opinion.',
  '**31** ______',
  'The plan now goes with the chapter, clipped to the front and addressed to nobody. A plan sent to one reader is a submission in an argument; clipped to the front of the piece it is part of the piece. The supervisor has asked the department\'s other three candidates for one.',
  '**A**   That is a correct reading of what he read, which is the difficulty. The two paragraphs he had were the two the chapter offers a reader with two minutes, so a sentence telling him that he had not read it would tell a chairman he had read the wrong part of a document built to be read that way.',
  '**B**   So the load-bearing paragraph has moved the centre of gravity of the chapter one paragraph to the right, and the repair is not to remove it. It is a clause in the earlier paragraph saying that the figure there is the chapter\'s own.',
  '**C**   Neither of them had ever seen the plan. It is one page, it took twenty minutes to write, and it has sat in a drawer for a year, unasked for by three supervisors in four years.',
  '**D**   The difference between the two is a factor of ten, and both readings turned out to be correct readings of what each of them had read.',
  '**E**   She has since cut the chapter by a fifth and declared every cut: the words, the paragraph and what the reader loses, which took eleven minutes to do and two hours to write down.',
]));
out.push(pb());
out.push(box('Part 8 · Multiple matching (6 marks)', [
  'For questions **32–37**, choose from the people **A–D**. The people may be chosen more than once.',
], C.lteal, C.teal));
out.push(model([
  '**A** _(a pharmacist)_   I needed one number in every component of a language test for a registration file and was half a band short in writing, twice, fourteen months apart. Between the two attempts I did about ninety hours of work, all of it on vocabulary, which is one of four equally weighted criteria. Nobody had told me there were four. The descriptors were four pages, published and free, and I had read them four times without once putting them beside a sentence of my own.',
  '**B** _(a sub-editor)_   I taught one thing I do to a junior of nineteen, in four minutes, on her own document. It took me forty minutes to find out what the thing was, by reading my last six notes against six from four years ago. She used it correctly on a caption and then wrongly on a colleague, and the fault is in my thirteen words, which never said who the move was for.',
  '**C** _(a structural engineer)_   I write statements that are read by somebody paid to find the second reading of every sentence. The first one cost me a morning: _the bolts were checked on 7 August_ has three things in it that are not true, and all three were in my field notes. I now read every clause aloud, flat, before signing, and I have added a paragraph that says what I did not examine.',
  '**D** _(a headmaster)_   I refused a change the directorate proposed and the first three drafts began by saying so. The version I sent begins with their purpose, in their terms, with a concession I had never put in writing. One objection, drawn from their own purpose, and a counter-proposal that costs me the laboratory block I have defended for four years. The word _but_ does not appear.',
]));
[
  '**32**  reports a figure that was published and free and that they did not use?',
  '**33**  describes finding out what their own habit was by comparing documents?',
  '**34**  mentions a sentence of their own that omitted something essential?',
  '**35**  describes a reader whose job is to find a second meaning?',
  '**36**  names a concession that cost them something they valued?',
  '**37**  mentions reading a document aloud before signing it?',
].forEach(t => out.push(q(t)));

// ================= PAPER 2 =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (90 minutes · 20 marks)'));
out.push(box('Part 1 · The essay (10 marks) — you must do this question', [
  'Your class has discussed what makes a document survive a reader who did not ask for it. You have made the notes below.',
  '**Points discussed:** _the cost of doing nothing, costed_ · _saying what you are not asking for_ · _naming the person who must say yes_.',
  '**Some opinions expressed:** _"A total invites an argument about the weakest item."_ · _"The list is the reason I said yes, and I did not know it at the time."_ · _"An ask that needs two signatures has been sent somewhere else."_',
  '**Write an essay** discussing **two** of the points in your notes. You should **explain which is more important**, giving reasons. You may make use of the opinions expressed, but you should use your own words as far as possible. Write **220–260 words**.',
  '⚠ **Do not take all three.** **Name the two in the first paragraph and select between them in the last.**',
], C.lorange, C.orange));
out.push(...lines(9));
out.push(pb());
out.push(box('Part 2 · One task from three (10 marks) — answer one question only', [
  '**(a) The report.** Something at your place of work has been happening for years and nobody has called it a problem. **Write a report** for the person whose signature could test it: what is happening, what it costs, what the present arrangement buys, what you are asking for, what you are not asking for, and what happens if the answer is no. **220–260 words.**',
  '**(b) The proposal.** A body you work for has proposed a change you believe would defeat its own purpose. **Write a proposal** setting out what the change is for, the one way it would defeat that purpose, what you propose instead, and what your proposal costs you. **220–260 words.** ⚠ **No _but_ and no _however_ in the first two paragraphs.**',
  '**(c) The review.** A magazine has asked former students to review a course they have finished, for readers deciding whether to begin it. **Write a review**: what it does that other courses do not, what it costs in hours, the one thing you would move, and who should not take it. **220–260 words.** ⚠ **Name the reader your recommendation is not for.**',
], C.lorange, C.orange));
out.push(...lines(9));

// ================= PAPER 3 =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 40 minutes · 20 marks)'));
out.push(box('Part 1 · Three extracts (6 marks)', [
  '🔊 **Track EB2-1** You will hear three short extracts. For questions **38–43**, choose the answer (**A**, **B** or **C**) which fits best.',
], C.lteal, C.teal));
[
  '**Extract One** _(a finance director and a depot manager)_',
  '**38**  What does the director say he had read the absence of a request as?   A a sign that the office was well run   B evidence that the office was adequately staffed   C a failure of the depot manager',
  '**39**  What does the depot manager say about the twenty minutes?   A he had never timed it   B he disputes the figure now   C he gave it without being told what it was for',
  '**Extract Two** _(two programme officers)_',
  '**40**  What does the first officer say about the sentence _there is no alternative I can offer_?   A she has written it twice   B she has never written it   C she writes it in every refusal',
  '**41**  What does the second officer say about item 6 of the schedule?   A it was withdrawn   B it requires a committee   C nobody has ever cited it',
  '**Extract Three** _(a supervisor and a doctoral candidate)_',
  '**42**  What does the supervisor say about plans?   A he has asked for them and not received them   B he has never asked and none has been sent   C he requires one page',
  '**43**  What does the candidate say the plan showed her in forty seconds?   A that two paragraphs do the same job   B which paragraph is the centre   C that the chapter is too long',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 2 · Sentence completion (5 marks)', [
  '🔊 **Track EB2-2** You will hear a clerk in a depot office talking about the monthly reconciliation. Complete the sentences with **a word, a short phrase or a number**.',
], C.lteal, C.teal));
[
  '**44**  The three of them spend ______________ days a month on the reconciliation.',
  '**45**  The duplicates are found by hand, from the ______________.',
  '**46**  Last year the reconciliation also found eleven ______________.',
  '**47**  The stock-count audit has been on the office list since ______________.',
  '**48**  She says the person whose work it changes should see the proposal before the person who ______________.',
].forEach(t => out.push(q(t)));
out.push(box('Part 3 · Long interview (4 marks)', [
  '🔊 **Track EB2-3** You will hear an interview with a thesis supervisor of twenty-two years. For questions **49–52**, choose the answer (**A**, **B** or **C**) which fits best.',
], C.lteal, C.teal));
[
  '**49**  What is the note she has written in margins for twenty years?   A that chapters are too long   B that a chapter is long in the middle   C that students repeat themselves',
  '**50**  What does she say the cause almost always is?   A two paragraphs doing one job   B careless writing   C excessive length',
  '**51**  What does she say about the two readers of a chapter?   A the chairman reads more carefully   B a chapter that serves one of them will be argued about   C twenty minutes is not enough',
  '**52**  What does she tell students about cutting?   A she will ask for one cut back   B she will never ask for a cut back   C she asks for a word count',
].forEach(t => out.push(q(t)));
out.push(pb());
out.push(box('Part 4 · Multiple matching (5 marks)', [
  '🔊 **Track EB2-4** You will hear five people talking about a document that was read by somebody they had not thought of. For questions **53–57**, choose from the list **A–H** the reader each speaker had not thought of. Use each letter once only.',
], C.lteal, C.teal));
out.push(q('**A** the person who signs the procedure the document describes   **B** a reader with two minutes   **C** the person whose work the document removes   **D** somebody who would have to defend the document in a room   **E** a reader from outside the field   **F** the writer\'s own employer   **G** a reader in another language   **H** the person who wrote the rule'));
out.push(q('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______'));

// ================= PAPER 4 =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 18 minutes · 20 marks)'));
out.push(box('Part 1 · Interview (4 marks) — your teacher asks each student, with the follow-up printed', [
  '**1** Tell me about a document you wrote this year that somebody refused. _(Follow-up: what did they give as the reason?)_',
  '**2** What is one thing you now do with a document that you did not do two years ago? _(Follow-up: how do you know you do it?)_',
  '**3** Who reads what you write, and how long do they have? _(Follow-up: how did you find that out?)_',
], C.lteal, C.teal));
out.push(box('Part 2 · Long turn (6 marks) — three photographs, you take two · one minute · then thirty seconds on your partner\'s pair', [
  '**Student A:** three pictures — _a counter with a queue at it_ · _a filing cabinet with one drawer open_ · _two people at a desk with one document between them_. **Compare two of them and say what the person writing in each of them would have to decide.**',
  '**Student B, thirty seconds:** which of A\'s two documents has the shorter reader, and why?',
  '**Student B:** three pictures — _a committee table with nine chairs_ · _a laboratory with two classes waiting at the door_ · _a lorry being re-routed at a depot gate_. **Compare two of them and say who in each would have to say yes.**',
  '**Student A, thirty seconds:** which of B\'s two decisions is inside one person\'s signature?',
], C.lteal, C.teal));
out.push(box('Part 3 · Collaborative task (6 marks) — fifteen seconds to read · two minutes together · then one minute to decide', [
  '**A document is going to be refused. Which of these five would do most to make the refusal useful to the person who receives it?**',
  '_one unremovable reason_ · _an alternative with a date and a name_ · _a sentence saying there is no alternative_ · _the rule\'s purpose, in one line_ · _the free sentence that costs the writer nothing_',
  '⚠ **Then: decide which of the five you would drop if the letter had to be four lines long.**',
], C.lteal, C.teal));
out.push(box('Part 4 · Discussion (4 marks) — five questions, each with the examiner\'s follow-up printed', [
  '**1** Is a refusal that gives no grounds for appeal fairer or less fair than one that does? _(And who decides that — the writer or the reader?)_',
  '**2** Should a document always arrive with the rule it relies on? _(What does that cost the person sending it?)_',
  '**3** Can a professional habit be handed on in one sentence? _(What would you hand on instead?)_',
  '**4** Is a score ever better evidence than a document? _(For which reader?)_',
  '**5** What is the difference between a criticism and a complaint? _(Give one of each from your own work.)_',
], C.lteal, C.teal));
out.push(sp());
out.push(box('How your teacher marks your speaking (20 marks)', [
  '**Grammar and vocabulary (5)** · **Discourse management (5)** · **Pronunciation (5)** · **Interactive communication (5)**',
  '⚠ **In Part 3 the mark is for the deciding and not for the discussing.** **A pair who agree in forty seconds and spend eighty more being agreeable lose two of the six** — **and a pair who disagree, name the ground and then choose, gain them.**',
], C.lyellow, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · End-of-Book Test');
