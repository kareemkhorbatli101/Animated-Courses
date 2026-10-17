// Proactive English B2 · Syria Edition · Book 1 · Unit 5 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 5  Not Only, But — Answer Key'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**One fact runs through the whole unit and it is the only thing to keep on the board: a reader decides what a sentence is about from the first six words and does not revise it.** Everything else in Unit 5 — fronting, inversion, delay, the four clefts, the summary test, the loaded opening — is a consequence of that one fact. A class that is given the four shapes without the fact will learn four shapes; a class that is given the fact first will ask for the shapes.',
  '⚠ **The unit does not work without the two sentences.** Each student needs one sentence of their own that **somebody quoted back to them** and one they **expected** to be quoted and that nobody noticed. 5.5 is a comparison between the two and it cannot be done with invented examples. If a student has not brought the pair, send them to find it: an email they were answered on, a minute, a message a colleague repeated. **Do not let them make one up** — the whole point is that the quoted one is usually the one they did not work on.',
  '**5.2 is the one piece of grammar in this book that is visible from across a room.** _At no point anybody asked_ ✗ is not a small error and an examiner does not miss it. Which cuts both ways, and the class should be told so plainly: one correct inversion in an essay demonstrates the range, and one uninverted fronted negative demonstrates the accuracy. ⚠ Drill the auxiliary, not the phrase.',
  '**5.5 is the cycle that cannot be taught and has to be counted.** The teacher\'s job in it is to keep quiet while the partner chooses. A speaker who has given away their own preference has spoiled the test, and the finding — that in about half the cases the chosen version is not the one the speaker expected — only arrives if the choosing is honest.',
  '**And the sentence the unit turns on**, which is Mr Attar\'s in 5.7: _they can all be said **without the rest of the sentence**_. That is liftability, and it is what the four shapes are for.',
], C.lblue, C.navy));

// ===================== 5.1 =====================
out.push(pb());
out.push(h2('5.1  Of the eleven, nine'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the instruction to say **nothing** about either sentence is the instruction that matters. ⚠ A class allowed to explain its two sentences will explain them for twenty minutes and the explanations will all be the same — _I suppose it was shorter_. Collect twelve sentences, write six of them on the board, and leave them there unanalysed until 5.5. The pair is evidence and it has to be collected before anybody has a theory about it.'));
out.push(A('**b** **1** _Of the forty-one calls_ — a quantity phrase; the reader meets the **count** first.   **2** _What matters here_ — a _what_ clause; the reader meets the claim that something matters, and then the date field.   **3** _In six of nine_ — a quantity phrase doing the work of a place phrase; the reader meets the **proportion**.   **4** _Eleven degrees_ — the object itself, which is the strongest and rarest of the four; the reader meets the figure with nothing in front of it.   **5** _The one thing I need_ — a near relative of the _what_ clause; the reader meets the **size** of the request before its content.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — a reader decides what the sentence is about from the first six words and does not revise it; and Nour found that the quoted sentence had the figure at the front while the ignored one had the same figure in the twenty-second word.'));
out.push(A('**b** **1** That it is not in the sentence at all, as far as a summary is concerned — Dima summarises nine contributors a fortnight and she summarises **from the front**.   **2** That it is **obligatory** after a fronted phrase of more than about three words, and that it is **audible**: a fronted phrase run into its clause is the commonest reason a good sentence is misread aloud.'));
out.push(NOTE('⚠ **The first six words are a measurement and not a figure of speech, and the cycle depends on the class believing that.** Nour\'s two sentences say the same thing and contain the same figure; the difference is that one has it in word three and the other in word twenty-two. Put both on the board and count out loud. ⚠ Then do the thing that convinces them, which takes four minutes: ask each student to read **only** the first six words of something they have sent, and ask the room what the message was about. In a class of twelve, about half the rooms are wrong and about a quarter have no idea at all — and that figure, produced by the class about itself, is worth more than any amount of explanation. **The fact is not that short sentences are better. It is that a reader builds a shape and then fills it in, and a figure that arrives after the shape is built has nowhere to go.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a count)_ **Of the thirty-one lot boxes, nineteen were empty.** _(quantity phrase)_',
  '**2** _(a date)_ **On 14 June, and not in July, the instrument was calibrated.** _(time phrase)_ — and note that the fronted phrase has to be the thing the sentence is about, so this version is only right if the sentence goes on to be about the date.',
  '**3** _(a place)_ **In six of the nine openings there was nothing actionable.** _(quantity phrase doing the work of a place phrase)_',
  '**4** _(the thing you need)_ **What I need is the lot number, and nothing else.** _(what clause)_ · or **All I need is the lot number.** _(which is 5.4, arriving early)_',
  '**5** _(a figure you want remembered)_ **Eleven degrees over it was, on arrival.** _(the object itself — one use in a page)_ · the safer version for a letter is **Four pallets were eleven degrees over on arrival.**',
]));
out.push(A('Item **2** is the one to teach from, because it is the item where a correct fronting makes a sentence **worse**. _On 14 June, and not in July,_ promises a sentence about **when**, and if what follows is about the discrepancy the reader has been cheated. ⚠ Ask for the rest of each sentence after the fronted phrase, and reject any that do not keep the promise. Item **5** is worth hearing in both versions: the object-fronted one is better and nobody in the class will use it at work, which is the honest state of affairs and worth saying.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _Nine of the eleven sites still have the old sheet._',
  '**B** _(kind: quantity phrase)_ **Of the eleven sites, nine still have the old sheet.**',
  '**A** That promises the sentence is about **the sites** — how many of them, and which.',
  '**B** _(fronting something else)_ **The old sheet, nine of the eleven sites still have.**',
  '**A** I would quote the **first** one, because the second is about the sheet and everybody has known about the sheet since March. _(And the second is object-fronted, which is one use in a page, and this is not the place for it.)_',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The eight fronted versions with their kinds. The count: **six or seven of the eight are quantity phrases**, because that is what this room has — figures. ⚠ And the finding to put on the board: where both versions were offered, the listener chose **the one with the figure at the front** almost every time, **including when the other version was shorter**. That last clause is the one to press, because it kills the explanation the class will otherwise reach for. The choice is not about length.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The one nobody noticed:_ "I have been looking again at the escalation calls and I think there is a difficulty about the promises, because thirty-four of the forty-one involved one that is not recorded." _Words before the figure:_ **twenty-two**. _Fronted:_ "Of the forty-one calls, thirty-four involved a promise that is in no note of ours." _Words before the figure:_ **three**.',
  '**b** _My partner read my first six words — "I have been looking again" — and said he expected a note about how busy I had been. Which is what it is about, for twenty-two words. Then he read the other six — "Of the forty-one calls, thirty-four" — and said: thirty-four of forty-one, and then he asked what the promises were. He had the subject and the figure before he had finished the line._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Two sentences each, one quoted back and one ignored. Nour\'s quoted sentence was: of the forty-one calls, thirty-four involved a promise that is in no note of ours. Her ignored one was twice as long and said the same thing, and Omar noticed that the figure is in both — in the twenty-second word of the second one. Which is the whole unit: a reader decides what a sentence is about from the first six words and does not revise it, not because they are careless but because that is what reading is, and a figure in the twenty-second word arrives in a shape that has no room for it. Dima put it more strongly from the copy side: a noun that is not in the first six words is not in the sentence as far as a summary is concerned, and she summarises nine contributors a fortnight from the front. Then the move, which is the simplest of the four in this unit: fronting — take the thing you want met first and put it there. Jad asked whether that is not just changing the word order, and Ms Huda said it is exactly that, and English allows it in more places than students believe — but it is not free, because a fronted phrase is a promise that the sentence is about that thing. "Of the eleven sites, the weather has been difficult" is grammatical and broken. Hiba asked what can be fronted, and the answer is four kinds: a quantity phrase, a place or time phrase, a what-clause, and the object itself, which is the strongest and the rarest. Adnan said the last sounds like poetry, and Ms Huda said it sounds like speech, which is why it is worth one use in a page: once and it is an emphasis, twice and it is a style. Then Mazen said his was the other way round — the sentence that was quoted was the long one — and was asked for its first six words. Nine drafts, fourteen months, eleven minutes. Six words, three figures and no verb, which is fronting at its most extreme.']));
out.push(A('Listener task: the number of words before the figure in each of the two versions. ⚠ Collect the pairs and read eight of them aloud as numbers only — _twenty-two and three · nineteen and four · thirty-one and two_. The class hears its own arithmetic, and no commentary is needed.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Of the eleven sites, the weather has been difficult._ → **✓** a fronted phrase is a **promise**: the sentence must then be about the sites. This is the error that matters and it is grammatical, which is why it survives proof-reading.   **✗** _Of the eleven sites nine still have the old sheet._ → **✓** the comma is obligatory after a fronted phrase of more than about three words.   **✗** _Have counted, of the forty-one, thirty-four._ → **✓** the main verb cannot be fronted; only a phrase can.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** **Nine** of the sixty-one.'));
out.push(A('**2** They are **not too long**. They are **loaded at the wrong end**, and the repair is a **reordering** and not a cut — three of the fifty-two are the best writing in the six issues.'));
out.push(A('**3** That she has been writing the contents page **from the front** for four years and has never told any of them she does it. It matters because the nine have been writing openings for a reader who exists and whose habits none of them knew: **the reader is her, and she summarises from the first six words.**'));
out.push(NOTE('**This model is the one piece of evidence in the unit that is not about the class, and it should be read before the Language box rather than after it.** What makes it work is the fourth paragraph: she prints **her own contents line** beside the paragraph it describes — _supply discussion continues_ — and the gap between that line and the paragraph\'s actual finding is the whole argument. ⚠ Note what she does not do: she does not call the fifty-two badly written, and she does not ask for shorter paragraphs. **A page that asks nine contributors to be shorter will get shorter copy that is no clearer, and three of them will write worse.** And she admits the part that is hers, which is the thing to point at: four years of invisible summarising, never mentioned. A request that follows an admission of that kind is almost always granted.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE FIRST SIX WORDS** · R. Shaaban · 30 October',
  'This is for the three of us who sign refusals and it is about the first six words of a letter. I have counted something and the figure is worse than I expected.',
  '**What I counted.** Three years of refusals: two hundred and seventy letters. In how many does a **figure, a date or a name** appear in the first six words? **None.**',
  '**What I do with the others.** All two hundred and seventy begin _we regret to advise that the_, which is the house opening and which I have never questioned.',
  '**One of them, with no name on it.** _"We regret to advise that the consignment has been found not to conform in certain respects."_ My own summary of it was _non-conforming consignment_. The finding — four pallets eleven degrees over a figure in clause 4 — is in the second paragraph.',
  '**The same thing, fronted.** _"Four pallets, eleven degrees over, returned."_ Six words, and the summary would have been _four pallets eleven over_, which is the finding.',
  '**What I am not asking for.** That anybody drop the house form. The repair is **where the six words go** and not what the house requires.',
  '**And what is partly my doing.** I have signed every one of them.',
  '**What I am asking for.** A figure, a date or a name in the first six words of the **body**, under the house line. One line, countable on your fingers.',
]));
out.push(S('Stage 7 · Write freely (sample, 201 words)'));
out.push(SAMPLE([
  '**THE FIRST SIX WORDS** · J. Attar · 30 October',
  'This is for the four editors and it is about how posts open. I have counted something, and because the forum keeps the figures I can be exact about it.',
  '**What I counted.** Four hundred and twelve posts of mine over fourteen months, and the read counts beside each. In how many do the first six words contain a figure, a date or a name? **Thirty-one.**',
  '**What the thirty-one did.** They were read, on average, **three times as often** as the rest. Same writer, same subjects, same fourteen months.',
  '**One of the others.** _"I have been thinking about the question of how we handle the urgent requests."_ Nine reads. My own index line for it was _urgent requests, general_. The finding — that eleven of nineteen urgent requests were not urgent by our own definition — is in the fourth paragraph, where nobody reached.',
  '**The same thing, loaded.** _"Eleven of nineteen were not urgent."_ Six words, and the index line would have been the finding itself.',
  '**What I am not asking for.** Shorter posts. Four of our best threads are long, and two of them are mine.',
  '**And what is partly my doing.** I write the index lines, from the front, and I had never told anybody that is how they are made.',
  '**What I am asking for.** A figure, a date or a name in the first six words. Nothing else.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 A count given early.** You wrote: _"Four hundred and twelve posts of mine over fourteen months, and the read counts beside each."_ The count is in the second paragraph and it is a count of the right thing — your own posts, not posts in general. ✓',
  '**2 Your own summary printed beside the example.** You wrote: _"My own index line for it was urgent requests, general."_ That is the evidence and it is unarguable, because it is a fact about you. ✓',
  '**3 What you are not asking for.** You wrote: _"Shorter posts. Four of our best threads are long, and two of them are mine."_ The second sentence is what makes the first believable. ✓ — and the admission that two are yours is the line I would keep if the page had to lose everything else.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads **only the first six words** of their own page. The room says what it expects the page to be about and in about a third of cases is wrong. ⚠ Then read out Dima\'s sentence and stop the cycle on it: **the contents page describes the first six words and not the paragraph** — fifty-two times out of sixty-one, for four years, and nobody had been told. Do not explain it. The class has just proved it about itself.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The page is above. The count: in the last five things I sent, how many had a figure, a date or a name in the first six words?_',
  '_**One.** The one that had it was a message of nine words to the printer — "Two of the four sites have had no pad" — which is the only one of the five that was answered the same day. The other four begin: "Further to", "I am writing", "As discussed" and "Thank you for". **Four of five openings told the reader nothing, and I wrote all four of them this week.**_',
]));

// ===================== 5.2 =====================
out.push(pb());
out.push(h2('5.2  At no point did anybody ask'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ The instruction says the second version is harder to say **and you will hear why** — so let the difficulty happen out loud and do not rescue it. A student who starts _at no point anybody has ever asked me_ and then stops, hears the auxiliary being wanted; a student who is given the rule first does not. The rule is written on the board **after** three people have struggled with it, and not before.'));
out.push(A('**b** **1** ✗ — _At no point **did** anybody ask._ The negative is fronted, so the clause inverts.   **2** ✓   **3** ✗ — _Not only **was** the figure wrong, but the date was too._   **4** ✓   **5** ✓ — and note that **4** and **5** are the two the class will get right, because _under no circumstances is_ and _at no time did_ are phrases people have met whole in official prose.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — because the negative is what the sentence is about, so it goes first and the grammar follows; and Adnan notices that it is the one B2 structure his own office already uses, a thousand times over, in _under no circumstances is the form to be returned unsigned_.'));
out.push(A('**b** **1** That you have made the one error in the book that is visible from across a room — _at no point anybody asked_ — and that it cuts both ways: right once and the range is demonstrated, wrong once and the accuracy is.   **2** That he was taught it at school and taught it **half-way**: the half nobody is taught is that the two halves must be the **same kind of thing**.'));
out.push(NOTE('⚠ **Teach the auxiliary and not the phrase, or the class will learn four phrases and no rule.** The move is mechanical: front the negative adverbial, then put the auxiliary in front of the subject exactly as in a question. Where there is no auxiliary, _do_ supplies one — _at no point **did** anybody ask_ — and that is the step students miss, because the flat sentence (_nobody asked_) has no auxiliary to move. Drill it in that order: flat sentence → front the negative → find the auxiliary or supply _did_ → check it is in front of the subject. ⚠ And drill it on **their own** sentences, because the error disappears on the card sentences and returns the moment the content is theirs.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(nobody asked)_ Flat: _Nobody asked for the figure in eleven months._ → **At no point in eleven months did anybody ask for the figure.**',
  '**2** _(it has almost never happened)_ Flat: _It has hardly ever happened._ → **Rarely has it happened — twice in nineteen years.**',
  '**3** _(two things were wrong)_ Flat: _The figure was wrong and the date was wrong._ → **Not only was the figure wrong, but the date was too.** _(two of a kind: two fields)_',
  '**4** _(it is never optional)_ Flat: _The box must never be left empty._ → **Under no circumstances is the box optional.**',
  '**5** _(I did not say it at any time)_ Flat: _I did not say that._ → **At no time did I say that.**',
]));
out.push(A('Items **1** and **5** are the two that need _did_ supplied, and they are the two the class will get wrong. ⚠ Item **3** is the one to check for the _two of a kind_ rule: accept _the date was too_ and _but also the date_, and refuse anything that pairs a fact with a feeling — _not only was the figure wrong but also I was tired_ is the commonest fault in the structure and it is not a grammar error, which is why proof-reading does not find it. Item **2** is worth one extra minute: _rarely_ takes the present perfect naturally, and a student who says _rarely I saw_ has three errors in four words.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _Nobody asked for the figure in eleven months._',
  '**B** _(fronted and inverted)_ **At no point in eleven months did anybody ask for the figure.**',
  '**A** The auxiliary is **did**, and it **is** before the subject.',
  '**B** In a page it would go **in the middle, after the figures and before the conclusion** — because in the opening it is a complaint and in the conclusion it is a flourish. At that point the reader has the facts and has not yet drawn the conclusion, and the sentence does the work of a paragraph.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The eight inverted sentences with the auxiliary marked in each. The count: **the uninverted error appears in two or three of the eight** on a first run, and in every case it is with _at no point_ or _rarely_ — **never** with _under no circumstances_. ⚠ Say why: that one is a phrase people have met whole in official prose and learnt as a unit, and the other two have to be built. The lesson is that a phrase learnt whole is safe and a rule half-learnt is not, which is the argument for drilling the auxiliary.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**At no point in the five months since the June record was signed has either bench queried the figure.** In a page of mine it would go after the two readings and before the request — the reader has both numbers by then and has not been told what to think about them._',
  '**b** _My partner\'s auxiliary is **has**, correctly in front of **either bench**. And her sentence is about **never** and not about the verb, which I could hear: she put the fall on_ no point _and ran straight through_ queried_. When I read mine with the fall on_ asked, _she said it had become a sentence about asking — which is the opposite of why I inverted it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Tonight looks like a trick and is not. Adnan said the thing that never happened: in nineteen years nobody has ever asked him for his own opinion in a meeting. Asked to begin with "at no point", he got as far as "at no point in nineteen years" and then had to turn the verb round — which is the whole grammar. Front a negative adverbial and the clause inverts: the auxiliary comes before the subject, exactly as in a question. Jad asked why, since there is no question in it, and Ms Huda said the negative is what the sentence is about — that is why you fronted it — and English marks a fronted element of that weight by moving the auxiliary, so the word order says the clause has stopped being a plain statement before the reader reaches the content. Hiba asked what happens if you front it and do not invert, and the answer is that "at no point anybody asked" is not a small error: it is the one error in this book that is visible from across a room, which cuts both ways — right once in an essay and the range has been demonstrated, wrong once and the accuracy has been. Then Adnan said the strange thing is that his office already writes this: under no circumstances is the form to be returned unsigned, which is the directorate house style and he has written it a thousand times. Which is the discovery of the cycle — he has had the structure for nineteen years and has never used it for anything of his own. Under no circumstances for the form, and nobody has ever asked me for himself. Omar asked about not only, but also, which he was taught at school, and Ms Huda said taught half-way: it inverts when it is fronted, and the half nobody is taught is that the two halves must be the same kind of thing. And the last thing, which matters more than the grammar: these are expensive. One in a page, two if the page is long, and it goes at the point where the reader has the facts and has not yet drawn the conclusion.']));
out.push(A('Listener task: the student\'s own inverted sentence and the place in a page where it would go. ⚠ Collect these and sort them into three heaps on the board — **opening · middle · conclusion**. Most of the class will have put theirs in the opening, which is the error the cycle exists to prevent, and seeing the heaps is faster than being told.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _At no point anybody asked._ → **✓** _At no point **did** anybody ask._ The error visible from across a room.   **✗** _Not only was the figure wrong but also I was tired._ → **✓** two of a **kind**: _but the date was too_. Grammatical and still wrong.   **✗** _Rarely I have seen a sheet signed twice._ → **✓** _Rarely **have I** seen_. The inversion is not optional when the adverb is fronted.   **✗** Four inversions in one page. → **✓** one, two if the page is long. The fourth makes the reader doubt the first.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** **One** agent found — the works-office instruction of 2 March, minute 11/0342 — with three unrecoverable. And he is **not** asking for a search: he has stopped looking and is not asking anybody else to start. What he asks for is a **bracket** of five words saying what is known.'));
out.push(A('**2** **The form of the sentence** suppressed the question: a sentence with no person in it reads as a condition of the world, and you do not ask where the weather came from. It is not an accusation because nobody declined to ask — the paragraphs do not look as though they came from anywhere, so the question never arose.'));
out.push(A('**3** He would write the fourth paragraph again, to protect a colleague. What he would **not** do again is leave it for four years without the date.'));
out.push(NOTE('⚠ **This is the model that shows where an inversion goes, and it should be read with a pencil.** Ask the class to mark the one inverted sentence and then to say what is in the paragraph **before** it and the paragraph **after** it. Before: four figures. After: a paragraph headed _why that is not an accusation_. **That sandwich is the teaching.** A fronted negative is the strongest sentence shape available at B2, and the reader braces for a charge; one paragraph of exoneration immediately afterwards converts a complaint into a finding. ⚠ Students will put their inversion in the opening because it is their best sentence and they want it read. Show them what the opening does to it: the same words, at the top of a page, are a grievance.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE JUNE RECORD · a note on the stated range** · Y. Mansour · 31 October',
  'This is for the laboratory manager and it is one page.',
  '**The figures first.** One instrument. One record, signed 14 June. Stated range nought point three; figure recorded nought point four. Two benches, one hundred and seven runs, five months.',
  '**What I am asking for is not a recalibration.** I am not asking for the results to be reviewed and I am not asking for anybody to be spoken to. What I am asking for is one line from whoever wrote the stated range.',
  '**And the thing I should like on the record.** _At no point in those five months did either bench ask the other what the stated range meant._ Not the morning bench, not the afternoon bench, and not me.',
  '**Why that is not an accusation.** Nobody asked because nobody knew there was anything to ask. A figure on a signed record reads as settled, and **a settled figure does not invite a question**, which is a fact about records and not about benches.',
  '**What it has cost.** One hundred and seven runs reported in one voice by two benches applying two standards.',
  '**What I am proposing, and it is one line of work.** The author of the range writes _limit_ or _guide_ beside it and initials it.',
  '**And one sentence about myself.** I read that record about ninety times before I looked at it.',
]));
out.push(S('Stage 7 · Write freely (sample, 205 words)'));
out.push(SAMPLE([
  '**THE FAULT BOOK · a note on what it does not have in it** · M. Hariri · 31 October',
  'This is for the distributor and it is one page about my own book and not about your batch.',
  '**The figures first.** Fifteen handsets of one model since September. Eleven of the fifteen from one batch. Four returned, four replaced, and three of the four replacements back within a fortnight.',
  '**What I am asking for is not a credit.** I am not asking for the eleven to be taken back and I am not asking for a view on the batch. What I am asking for is the loading date of the batch, which is on your own sheet.',
  '**And the thing I should like on the record.** _At no point in the seven months since the first one came in has anybody from either side asked to see my fault book._ Not your representative, not your office, and not me — I keep it and I had not read it through until Sunday.',
  '**Why that is not an accusation.** A fault book at a counter looks like a counter\'s business. It is written by one man in one hand and nobody has ever been shown it, so **nobody has refused to look at something they did not know existed.**',
  '**What it has cost.** One customer, in October, who was told the fault was unusual. It is not unusual. It is eleven of fifteen, and I had the figure in my own book when I said it.',
  '**What I am proposing, and it is four lines of work.** The loading date, and I shall send you the eleven entries copied out.',
  '**And one sentence about myself.** I started the book in September for no reason I could have given at the time.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 One inversion, correctly inverted and correctly placed.** You wrote: _"At no point in the seven months since the first one came in has anybody from either side asked to see my fault book."_ The auxiliary **has** is in front of **anybody**, and it sits after the figures and before the proposal. ✓',
  '**2 The exoneration after it.** You wrote: _"nobody has refused to look at something they did not know existed."_ That is the sentence that stops the inversion being a complaint. ✓',
  '**3 The cost measured in one person.** You wrote: _"One customer, in October, who was told the fault was unusual."_ One person, one month, and you name what was said. ✓ — and the line after it, _I had the figure in my own book when I said it_, is the one I would not cut.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads their inverted sentence **twice** — once with the fall on the negative adverbial and once on the verb — and the room says which version is about _never_. ⚠ Expect about a third of the class to be unable to hear the difference at first; put the two readings on the board as _at **NO** point_ and _at no point did anybody **ASK**_ and read them yourself. Then close on Adnan\'s line: **_under no circumstances_ for the form, and _nobody has ever asked me_ for himself** — nineteen years with the structure in his hand and never once used for anything of his own.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The page is above. Then: one inversion from something my workplace has sent me, and whether it is about a thing or about a person._',
  '_From the back of the delivery note: **"Under no circumstances will claims be considered after fourteen days."** It is about **a thing** — claims — and there is nobody in it. Which is Unit 2 and Unit 5 in one line: the inversion makes it strong and the nominalisation makes it agentless, so the sentence is both emphatic and unanswerable. **There is no one to ask for the fifteenth day.**_',
]));

// ===================== 5.3 =====================
out.push(pb());
out.push(h2('5.3  It was not until June that anybody counted'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ The second half of the task is the half that teaches: **which version in a meeting and which in a letter?** The answer is almost always the flat one in a meeting and the delayed one in a letter, and the reason is worth drawing out of the class rather than giving them — in a meeting the listener cannot go back, so a delay is a risk; on paper they can, so a delay is an investment. A student who says _both_ has not yet heard the difference.'));
out.push(A('**b** **1** _he asked_ — the event, held behind the time.   **2** _turn one over_ — the action, held behind the _what_ clause.   **3** _the errors appear**ed**_ — held behind a time phrase, with inversion, which is 5.2 arriving inside 5.3.   **4** _shows the joint_ — held behind a negative quantity, and note that this one delays by **fronting**: the two moves are not opposites.   **5** _who counted_ — held behind the identity, which is the cleft of 5.4.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — fronting decides what the sentence is **about** and delay decides what it **ends on**, which are two different jobs; and Yara finds she has been putting the most important thing in the **middle** of every sentence.'));
out.push(A('**b** **1** That it is **the weak position** — _where things go to be forgotten_, and where a writer puts whatever they are least sure of.   **2** That it is difficult, because you have to **hold your voice up**: a speaker who falls in the middle has given the delay away.'));
out.push(NOTE('⚠ **The class will say 5.1 and 5.3 contradict each other, and the lesson is lost if that objection is not made out loud.** Ms Huda asks for it in the first line of the recording and you should ask for it too. The resolution is one sentence and it belongs on the board for the rest of the unit: **a sentence has two strong positions and one weak one, and the front and the end do different jobs.** Fronting answers _what is this sentence about?_ Delay answers _what does it leave the reader holding?_ ⚠ Then the practical rule, which is the most portable thing in the unit: **nothing of value between two commas.** Ask the class to find one of their own long sentences and read out only what is between its commas. In a class of twelve, about eight of them will find the point of the sentence in there, and Yara\'s admission — that the middle is where she puts what she is least sure of — will be recognised by most of the room.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a count that came late)_ Flat: _Somebody counted them in June._ → **It was not until June that anybody counted them.**',
  '**2** _(a question nobody asked until recently)_ Flat: _Nobody asked about the promises until October._ → **It was not until October that anybody asked what we had promised.**',
  '**3** _(an error that appeared after a fourth night)_ Flat: _The errors appeared on fourth nights._ → **Only after the fourth night did the errors appear.** _(with the inversion of 5.2)_',
  '**4** _(a sheet nobody turned over)_ Flat: _Nobody turned the sheets over._ → **What nobody had done, in two years of looking at that board, was turn one of the sheets over.**',
  '**5** _(a figure nobody had until June)_ Flat: _We had no figure before June._ → **It was not until the June record was signed that anybody had a figure at all.**',
]));
out.push(A('⚠ Mark these on the **ending** and not on the structure. Item **1** is correct and dull because what it ends on — _counted them_ — is not arguable; push for _…that anybody counted them, and the count took four minutes_, which ends on something a reader can check. Item **4** is the model answer of the five because the delay is paid for: the thing at the end is both the action and the admission. And item **3** should be read aloud twice, because it carries 5.2 inside it and a student who writes _only after the fourth night the errors appeared_ has made this unit\'s visible error in a cycle that is not about it.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The June calibration record, which shows a discrepancy of nought point four that has not been reconciled, was signed by the morning bench._',
  '**B** _(rebuilt so the middle goes last)_ **The June calibration record was signed by the morning bench, and it shows a discrepancy of nought point four that nobody has reconciled.**',
  '**A** It now ends on **the discrepancy**, and that is **arguable** — somebody can disagree with it or go and check it.',
  '**B** _(the stronger version)_ **It was not until I read the June record that I saw a discrepancy of nought point four.** — one delay, one figure at the end, and the admission carried with it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('What each of the eight sentences ends on, marked **arguable** or **not**. The count: on a first run **five or six of the eight end on something arguable** — higher than in the class\'s own writing, because the card sentences already contain a figure. ⚠ Which is the point to make: the cards are rigged in the class\'s favour and their own pages are not. The finding is that the ending is a **choice**, and in their own writing almost nobody has made it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My longest sentence this month, from the note of 12 October: "The escalation calls, thirty-four of which involved a promise that is in no note of ours, have been running at about nine a week since the summer." **In the middle:** thirty-four of forty-one involving an unrecorded promise — which is the only thing in the sentence anybody needs. **Rebuilt:** "The escalation calls have been running at about nine a week since the summer, and thirty-four of the forty-one involved a promise that is in no note of ours."_',
  '**b** _Read aloud, holding the voice up, the delay is worth it: the figure arrives at the end and there is nothing after it to dilute it. My partner said the first version sounded like a report and the second sounded like somebody who wanted something done — and the words are almost the same words._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Last week the important thing went first; tonight it goes last, and Ms Huda asked somebody to object. Omar objected: those cannot both be right. And they are both right and are not the same question — fronting decides what a sentence is about, and delay decides what it ends on. A sentence has two strong positions, the front and the end, and one weak one, which is the middle, and the middle is where things go to be forgotten. Yara said that is where she puts everything, and gave one: the June calibration record, which shows a discrepancy of nought point four that has not been reconciled, was signed by the morning bench. The discrepancy is the whole point and it is in the middle, between two commas, where she puts the things she is least sure about. Rebuilt, it ends on the discrepancy — and Dima said that is now the thing she would quote. Then the structure built for both jobs at once: it was not until June that anybody counted them. A time at the front and the event at the end, which is why it is the most useful single shape in the unit. Hiba asked what goes at the end, the figure or the finding, and Ms Huda said the thing you want argued with — a figure at the end invites a check, a judgement invites a disagreement, and a courtesy invites nothing, which is how most people end. Lubna said reading one aloud is difficult because you have to hold your voice up, and that is the pronunciation of the cycle: level through the middle and falling only at the end, because a speaker who falls in the middle has given the delay away. And Rim asked whether it is not a trick to make people wait, and Ms Huda said it is a trick if there is nothing at the end — delay is a promise exactly as fronting is, and the cost of a bad delayed sentence is paid on the next one.']));
out.push(A('Listener task: what was in the middle of the student\'s longest sentence, and where it is now. ⚠ Read six of these out as a list of what was between two commas. The list is always the same kind of thing — a figure, a discrepancy, an admission — and it makes the rule without any help.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _It was not until June when anybody counted them._ → **✓** _…until June **that**…_. _When_ is the commonest error in the structure and it survives reading aloud.   **✗** _It was not until June that anybody counted them, which was useful._ → **✓** end on the event. A trailing clause after the end position throws away the whole structure.   **✗** A delayed sentence of nine words. → **✓** end-weight needs a middle; in nine words the front and the end are the same place.   **✗** Two delayed sentences in a row. → **✓** one. After the second promise the reader stops waiting.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** She had not looked at the **record** at all. What made her look was being asked, **in a classroom**, what two photographs did not show — which is Unit 4.3, and it is worth naming as such: the question that moved her came from a task about missing evidence and not from the laboratory.'));
out.push(A('**2** She is **not** claiming that any result is wrong — one hundred and seven runs and not one of them needs repeating. What she says is **narrower and worse**: for five months two benches have been applying **two different standards** to the same instrument and reporting the results **in one voice**.'));
out.push(A('**3** That for four years she has put the arguable thing in the **middle**, between two commas, in the place she keeps for whatever she is least sure of — **which is exactly where a reader is least likely to find it, and she had never once wondered why nobody replied.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE NINETEEN SHEETS · the empty box** · R. Barakat · 1 November',
  'This is for the ward sister and for whoever designed the October sheet. **The sentence I want read is the last one in each paragraph.**',
  '**What the sheets say.** Thirty-one handover sheets for October. All thirty-one are signed and all thirty-one are legible. **Nineteen of them have an empty lot box.**',
  '**What has happened since.** The sheets have been filed, counted and audited twice. **It was not until somebody asked me, in an English class, what the box was for that I turned one of them over.**',
  '**Where the disagreement is.** The day staff read the box as optional, because the form says _where applicable_. I read it as required, because a lot number is either known or not known. **Neither of us had noticed that we disagreed until last Tuesday.**',
  '**What I am not claiming.** That any patient had the wrong thing. Nineteen sheets and no incident. **What I am saying is narrower: for one month two shifts have been filling in one form to two different standards, and the file looks consistent.**',
  '**What would settle it.** One line from whoever wrote _where applicable_, saying what it applies to. **Not a new form, not a training session, and not a conversation between the shifts — one line from the person who wrote the phrase.**',
  '**And the thing about this page.** Every paragraph ends on the sentence I want argued with, and I have never written a page that way before.',
]));
out.push(S('Stage 7 · Write freely (sample, 199 words)'));
out.push(SAMPLE([
  '**THE FIRST SERVICE · 06.20 and what the printed sheet says** · T. Ayoub · 1 November',
  'This is for the depot office, and the sentence I want read is the last one in each paragraph.',
  '**What the sheet says.** The printed timetable says the first service leaves at 06.15. Sixty-two mornings recorded by me since August. **On forty-one of the sixty-two it left at 06.20 or later.**',
  '**What has happened since.** The sheet has been reprinted twice and the six drivers have been spoken to once. **It was not until I began writing the times on the back of my own copy that anybody had a figure at all.**',
  '**Where the disagreement is.** The office reads 06.15 as the time the service is **due**. The drivers read it as the time they are **expected to be ready**, which is not the same instruction. **Both readings have been in the same room for two years and neither has been written down.**',
  '**What I am not claiming.** That anybody is late on purpose. Forty-one mornings and no complaint from a passenger. **What I am saying is smaller and harder: the printed sheet is being read two ways by the people who have to act on it.**',
  '**What would settle it.** One word on the sheet. **Not a new timetable, not a meeting, and not a note to the drivers — the word _due_ or the word _ready_, written once by whoever owns the sheet.**',
  '**And the thing about this page.** I have put the figures at the ends of the paragraphs, and it took me three attempts, because my habit is to put them in the middle where they look modest.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 Every paragraph ending on the arguable sentence.** You wrote: _"On forty-one of the sixty-two it left at 06.20 or later."_ That is the end of the first paragraph and it is the only sentence in it anybody can argue with. ✓',
  '**2 The _it was not until_ sentence placed where it does most work.** You wrote: _"It was not until I began writing the times on the back of my own copy that anybody had a figure at all."_ It ends on the admission that there was no figure, which is worse than the delay. ✓',
  '**3 The refusals at the end of the request paragraph.** You wrote: _"Not a new timetable, not a meeting, and not a note to the drivers — the word due or the word ready."_ Three refusals and then the one word. ✓ — and I would keep the last paragraph, because _where they look modest_ is the truest line in the page.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads **only the last sentence of each paragraph** of their own page, in order, and nothing else. ⚠ If the page has been built properly, those four or five sentences are a summary of it; if it has not, they are a set of courtesies. That is the test and it takes about twenty seconds per student. Close on Yara\'s line: **the middle is where she puts what she is least sure of, and she had never wondered why nobody replied.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The page is above. Then: the longest sentence in the last thing I sent, and what is between its commas._',
  '_From Thursday\'s note: "The October sheets, nineteen of which have no lot number in the box, were filed on the twenty-eighth as usual." **Between the commas: nineteen of which have no lot number in the box.** The filing date is in the strong position and the finding is in the weak one, and the note was acknowledged and not answered. **I now think the acknowledgement was accurate: there was nothing in the strong positions to answer.**_',
]));

// ===================== 5.4 =====================
out.push(pb());
out.push(h2('5.4  What nobody had done was turn one over'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the sequence is the point: say it with three different stresses, agree that the meaning changed each time, then **write it down and read it flat**. ⚠ Do not shorten this. The class has to hear the stress work and then watch it disappear, in that order, in about ninety seconds. A class that is told _a stress cannot be written down_ will agree politely; a class that has just watched one die will ask for the cleft.'));
out.push(A('**b** **1** _What … is_ — emphasising the **action** nobody took.   **2** _All … is_ — emphasising the **smallness** of the request.   **3** _The reason … is that_ — emphasising the **cause**, and forcing one to be named.   **4** _It is … who_ — emphasising the **identity**.   **5** _What … is_ with a contrast built in — emphasising **the person nearest the box** against the box itself, and this is the one to read aloud, because _not … but_ inside a cleft is the most useful compound shape in the cycle.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — because a stress cannot survive being written down or summarised, and the cleft puts the emphasis in the **structure**; and the most under-used of the four is **_all … is_**.'));
out.push(A('**b** **1** That it **survived**: the minute of 14 October used almost her words, with the emphasis still in them — where the September minute had said only that she _reported on the escalation calls_.   **2** That it makes a thing **small**, and so stops the reader sizing the request themselves — which is why it is the shape to use when asking for something.'));
out.push(NOTE('⚠ **The argument for this cycle is one sentence and it is not a grammar point: _a stress cannot be written down and cannot be summarised._** Everything else follows. A cleft is longer than the sentence it replaces — _what I actually do is find out what we promised_ is eleven words for five — and students will ask why they should pay four extra words for the same content. The answer is that they are not buying emphasis; they are buying **survival through a summary**, which is what Nour\'s two minutes prove. ⚠ Read the September minute and the October minute out one after the other and let the class hear what reached the file. _Mrs Sabbagh reported on the escalation calls_ is accurate, and it is also nothing, and she did say with her voice that the calls were not the point. **A voice does not go into a minute.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(what you actually do)_ Flat: _I answer the escalation calls._ → **What I actually do is find out what this company has promised somebody.** _(bare infinitive after_ is_)_',
  '**2** _(the one thing you need)_ Flat: _I need the lot number._ → **All I need is the lot number** — or, with the size named, **all that is needed is one field with a date in it.**',
  '**3** _(why nothing happened)_ Flat: _There was nobody to ask, so nothing happened._ → **The reason nothing happened is that there was nowhere on the form to put it.**',
  '**4** _(who did it)_ Flat: _The storeman counted them._ → **It was the storeman, in the end, who counted them.** _(and this is the one to use once)_',
  '**5** _(what matters here)_ Flat: _The date field matters._ → **What matters is not the box but who is standing nearest to it when it is filled in.**',
]));
out.push(A('Item **1** is where the error lives: the verb after _is_ is the **bare infinitive** — _is **find out**_, not _is finding out_ and not _is to find out_. ⚠ Drill that alone if time is short. Item **2** is the one to spend the extra minute on, because it is the shape the class will actually use: the point of _all … is_ is that it is **a claim about size** and therefore checkable, which is why _all we need is a complete review of the schedule_ makes the reader\'s objection for them. And item **5** is the compound: a contrast inside a cleft, which survives summary better than anything else in the unit.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(flat)_ _Nobody turned the sheets over._',
  '**B** _(cleft: what … is)_ **What nobody had done was turn one of the sheets over.**',
  '**A** Which word is emphasised? **The action** — _turn one over_ — and not the sheets and not the people.',
  '**B** _(five-word summary of my own cleft)_ _nobody turned one over._ **And that is the test: my five words still have the action in them, which means the emphasis survived.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each cleft and the speaker\'s own five-word summary of it. ⚠ The count that matters: in how many of the eight does the **emphasised element survive into the five words**? On a first run it is about six, and the two failures are nearly always _it is … that_ sentences, where the summary keeps the identity and loses the claim. That is the evidence for the warning in the Language box: the fourth shape is the easiest to overuse and the easiest to lose.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My cleft, for the October release: **all that is needed is one field with a date in it.** Asked four times since December, and three of those four times in a sentence that did not say how small it was — "I wonder whether it might be possible to look at the question of the promise fields", which is twenty words and could mean a redesign._',
  '**b** _Summarised by my partner in five words: **one field, with a date.** The size survived, which is the whole point of that shape. Then he summarised my December sentence in five words: **Nour wants the form changed** — which is what the reader did, four times, and is why I was refused._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Last year the class learnt one of these in 22.2; tonight they got the other three, and the argument for all four is one sentence. Nour\'s cleft went into a minute and survived: the minute of 14 October says that what the calls are for is finding out what the company has promised — almost her words, with the emphasis still in it. In September, before the cleft, the minute said that Mrs Sabbagh reported on the escalation calls. Omar said which is nothing, and Nour said which is nothing, and it is accurate: she did report on the escalation calls, and she also said with her voice that the calls were not the point — and a voice does not go into a minute. Which is the argument for the whole cycle: a stress cannot be written down and cannot be summarised. A cleft puts the emphasis in the grammar, where it survives being quoted, minuted, forwarded and read by somebody who has never heard your voice. Then the four shapes. What-is, the general-purpose one and the one they have. All-is, which makes a thing small. The reason-is-that, for causes. And it-is-that, for singling out a person or thing. Hiba asked what all-is does, and the answer is that it makes a thing small: all I need is the lot number says this is the whole of it, and anybody who makes it bigger is adding something. It is the most under-used of the four and the most useful when asking for something, because the commonest reason a small request is refused is that the reader has sized it themselves. Adnan said it cannot be used for something large, and it cannot — a candidate who writes "all we need is a complete review of the establishment schedule" has made the reader\'s objection for them. And Rim asked about the stress, and the answer is flat: a cleft is already emphatic, so reading it with emphasis says the same thing twice. Then the last question of the night was Lubna\'s and it was the useful one: which of the four would she use for the photograph that does not exist? The it-is-that, singling the thing out — it is the joint that has never been photographed — because the reason-is-that would turn an absence into an explanation, and an absence needs no explanation until somebody has agreed that it is there. And Ms Huda said that choosing between the four is the whole of the next cycle, and that the test is not which version is most emphatic but which one the reader will quote.']));
out.push(A('Listener task: the student\'s cleft and their own five-word summary of it. ⚠ Read eight of the five-word summaries aloud **without** their clefts and ask the class to reconstruct what was being claimed. The ones that can be reconstructed are the ones that will survive a minute, and that is the only measure this cycle has.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _What nobody had done was turning one over._ → **✓** _was **turn** one over_. The bare infinitive after _is_ when the emphasis is on an action.   **✗** _All what is needed is one field._ → **✓** _All **that** is needed_.   **✗** _What I need are the two dates._ → **✓** both are heard, but _what I need **is** the two dates_ sounds foreign; let the clause after _is_ choose the verb.   **✗** Four _it is … that_ sentences in a page. → **✓** one. The fourth makes the first look like a habit.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The September minute said only that **Mrs Sabbagh reported on the escalation calls** — accurate and empty. What survived in October was the **cleft**: the minute of 14 October says that _what the calls are for is finding out what the company has promised_, almost her words, with the emphasis still in them.'));
out.push(A('**2** They **size it themselves, and they size it large** — which is why three of her four refusals were refusals of something she had not asked for.'));
out.push(A('**3** What is new is **not the evidence but where the emphasis sits**. The figures are not new: they are in the attachment and have been in four notes.'));
out.push(NOTE('⚠ **The last paragraph of this model is the one to read twice: _every one of those sentences was true when I said it and nothing when it arrived._** That is the cost of four years of putting the emphasis in the voice, and it is the argument for the whole cycle stated as a loss rather than as a technique. ⚠ There is also a continuity point worth making explicitly, because the class will feel it: this is B1 22.2 being cashed. Last year they learnt that everything they say about their own work is summarised by somebody else before it reaches whoever decides. The cleft is the first instrument in the course that does something about it. **Say so. A student who sees a two-book arc is a student who keeps the book.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE EMPTY BOX · four sentences that have to survive a summary** · R. Barakat · 2 November',
  'This goes to the ward sister and to whoever owns the October form, and it will be summarised before it reaches either of them.',
  '**The first.** _What the lot box is actually for is tying one patient to one batch._ Thirteen words for four, and the four-word version — _the lot box matters_ — is what my note in September was summarised as.',
  '**The second.** _All that is needed is one line saying what _where applicable_ applies to._ I have asked twice and both times in a sentence that did not say how small it was.',
  '**The third.** _The reason nineteen boxes are empty is that the form says _where applicable_ and nobody has said what it applies to._ Not carelessness, not the night shift, and not the volume.',
  '**The fourth.** _It is the day staff, and not the night staff, who have been filling it in as optional._ Used once, because that is the one place where the identity changes what anybody should do next.',
  '**What I am not doing in this page.** Counting the sheets again. They are counted and the figure is nineteen.',
  '**And the thing about the two years before it.** I have been saying that the box matters, in rooms, with my voice, to people who then wrote down that Mrs Barakat raised the handover sheets.',
]));
out.push(S('Stage 7 · Write freely (sample, 207 words)'));
out.push(SAMPLE([
  '**THE FAULT BOOK · four sentences for the file** · M. Hariri · 2 November',
  'This goes to the distributor and to my own counter file, and both of them will be read by somebody summarising.',
  '**The first.** _What the fault book actually records is which batch a handset came out of._ Eleven words for four, and the four-word version — _Mazen keeps a book_ — is what the distributor\'s representative wrote in his own note in October.',
  '**The second.** _All I need is the loading date of batch 11 / 74._ One date, from a sheet they already have. I have asked three times and twice in sentences that could have meant a visit.',
  '**The third.** _The reason eleven of the fifteen failed is that they came out of one batch._ Not the model, not the customers, and not the counter.',
  '**The fourth.** _It is the replacements, and not the originals, that have come back fastest._ Used once, because the identity is the point: three of four replacements inside a fortnight is a different claim from fifteen faults in seven months.',
  '**What I am not doing in this page.** Asking for a credit. I have not asked for one in seven months and I am not asking now.',
  '**And the thing about the seven months before it.** I have been telling people at the counter that it is a batch problem, out loud, over a counter, and what reached the distributor was that a repairer in Shaalan is unhappy about a model. **Which is true and is not what I said.**',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 The short summary printed beside the long sentence.** You wrote: _"the four-word version — Mazen keeps a book — is what the distributor\'s representative wrote in his own note in October."_ The comparison is the argument, and nothing you could add would do what those two lines do side by side. ✓',
  '**2 _All … is_ used for the request, with the size named.** You wrote: _"All I need is the loading date of batch 11 / 74."_ One date, named, from a sheet they hold. ✓',
  '**3 _It is … that_ used once.** You wrote: _"It is the replacements, and not the originals, that have come back fastest."_ Once in the page, and in the one place where the identity changes what the reader should do. ✓ — and the last line, _which is true and is not what I said_, is the sentence I would put first if you were allowed only one.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads their **_all … is_** sentence and the room sizes it. ⚠ If anybody in the room thinks the thing is bigger than the writer has said, the sentence is a liability and not a help — and that is worth saying plainly, because _all … is_ is the one shape in this unit that can be **disproved**. Close on Nour\'s line: **every one of those sentences was true when I said it and nothing when it arrived.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The page is above. Then: one minute, email or summary in which somebody else wrote down what I had said, and what survived._',
  '_The minute of 23 September: **"Mr Hariri reported continuing difficulties with a handset model."** What I said was that eleven of fifteen came out of one batch and that I had the batch numbers in a book. **What survived: that there are difficulties. What did not: the figure, the batch, the book, and the fact that I was offering evidence rather than complaining.** Four things said and one thing minuted, and the one that survived is the one I would least have chosen._',
]));

// ===================== 5.5 =====================
out.push(pb());
out.push(h2('5.5  Three ways, and what the reader will quote'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and **the order of the two instructions is the whole cycle**: the partner answers **before** the speaker says which version they prefer. ⚠ A teacher who lets the speaker say _I like the third one_ first has destroyed the only evidence this cycle produces. Say so to the class, once, and then enforce it — the finding of 5.5 is a disagreement between what the speaker expected and what the listener chose, and it cannot be recovered after the expectation has been announced.'));
out.push(A('**b** **1** ✓ keep — a figure and a noun that identifies itself.   **2** ✗ — _an issue regarding the recording_ has no figure and no identifiable noun; a summariser keeps nothing from it.   **3** ✓ keep — the cleft holds the emphasis in the grammar.   **4** ✗ — this is about the writer\'s week.   **5** ✓ keep — and note that a summariser keeps **three** of the five, which is the figure to show the class: the two that go are the two that look most like ordinary professional writing.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — the test is **which version a reader will quote**, and it is better than _which is best_ because _best_ is a question about the writer and _quoted_ is a question about the reader, and only the second can be checked.'));
out.push(A('**b** **1** She can say, in about two seconds, which of three sentences she would keep — she summarises nine contributors a fortnight for a living — **and she will not be being kind about it**.   **2** That a sentence which is **reliably mis-quoted has been mis-built**: the reader is not at fault.'));
out.push(NOTE('⚠ **This cycle has no new grammar in it and that is the reason it is here. It is the cycle in which the four shapes stop being four shapes and become a choice**, and the choice is not _which version is best_ but _which noun do I want carried out of the room_. Teach it in that order: ask what the reader is going to **do**, find the noun in the answer, then choose the shape. ⚠ The failure to expect is Omar\'s and it will happen in the room: a well-built cleft pointing at the wrong noun. Do not correct the grammar of such a sentence, because there is nothing wrong with it. Say what Dima says — _it is pointing at the old sheet and the old sheet is not the news_ — and let the class feel the difference between a mistake and a misaim. **A beautifully built sentence on the wrong noun is worse than a flat one, because the reader believes you meant it.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a count)_ Flat: _Four of the eleven sites are still on the old sheet._ Fronted: _Of the eleven sites, four are still on the old sheet._ Cleft: _What four of the eleven sites still have is the old sheet._ **Quoted: the fronted one** — the figure is first and the noun is the sites.',
  '**2** _(a request)_ Flat: _I need one field with a date in it._ Fronted: _One field, with a date in it, is all I need._ Cleft: _All that is needed is one field with a date in it._ **Quoted: the cleft** — it is the only one that makes a claim about size.',
  '**3** _(a cause)_ Flat: _There is nowhere on the form to put a promise._ Fronted: _On the form, there is nowhere to put a promise._ Cleft: _The reason the promises are lost is that there is nowhere on the form to put them._ **Quoted: the cleft** — a named cause survives a summary written by somebody who disagrees with you.',
  '**4** _(an absence)_ Flat: _There is no picture of the joint._ Fronted: _Of the fourteen photographs, not one shows the joint._ Cleft: _What none of the fourteen shows is the joint._ **Quoted: the flat one** — six words, and it is the sentence the surveyor actually repeated.',
  '**5** _(a figure that has changed)_ Flat: _The figure is now nought point four._ Fronted: _Nought point four it now is, against a stated nought point three._ Cleft: _It is the stated range, and not the reading, that nobody has checked._ **Quoted: the cleft** — because the reader is going to go and look at the range.',
]));
out.push(A('⚠ Item **4** is the item to spend time on, because the answer is the **flat** sentence and the class will not expect that. Six words, a noun that identifies itself, and nothing to lift out of — _there is no picture of the joint_ needs no shape at all. The lesson is that the four shapes are for sentences that have something in the wrong place, and a sentence already in the right order should be left alone. **A class that fronts everything has learnt the unit badly.** Item **5** is the opposite case and worth pairing with it: the same facts, and the cleft wins because of what the reader is about to do.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(flat)_ _Four of the eleven sites are still on the old sheet._ _(fronted)_ _Of the eleven sites, four are still on the old sheet._ _(cleft)_ _What four of the eleven sites still have is the old sheet._',
  '**B** I would quote **the fronted one**, and the noun it carries is **the sites**.',
  '**A** I had expected you to take the **cleft**, because it is the one I worked on.',
  '**B** The cleft carries **the old sheet**, and everybody has known about the sheet since March. _(And that is the disagreement the cycle is built to produce: the version the speaker worked on is not the version the listener took.)_',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('For each of the eight: which version was chosen and which the speaker had expected. The count: **in about half the cases they differ** — and in almost every one of those the speaker had chosen **the shape they had most recently learnt** rather than the noun the reader needed. ⚠ That is the cycle and it cannot be told; it has to be counted. Write the two figures on the board — _eight pairs, four disagreements_ — and leave them there for 5.6.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The sentence that **was** quoted: "Of the eleven sites, four are still on the old sheet and two of the four have never been sent a new one." The noun it carried: **the sites** — specifically the two that have had nothing. And no, it is not the noun I meant. I had meant the **sheet**, because the sheet is what I have been arguing about since March._',
  '**b** _What my partner\'s reader was going to **do**: send pads to two sites. Not redesign the sheet, not train anybody, not change a procedure. So the noun that reader needed was the **sites**, and my partner\'s careful cleft was pointing at the **sheet** — which is the same mistake as mine, in the other direction._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Four cycles of shapes and no way of choosing between them, so tonight was the choosing, and the test is one question: not which version is best, but which version the reader will quote. Omar asked why that is different, and Ms Huda said because "best" is a question about you and "quoted" is a question about them — and only the second can be checked: you can be wrong about which of your sentences is best for ever and nobody will tell you, and you find out which one is quoted within a fortnight. Then Dima said she can do it now, because she summarises for a living and will tell anybody which of three sentences she would keep in about two seconds, and she will not be being kind. So Omar gave three versions of the four sites and the old sheet — flat, fronted and cleft — and Dima chose the fronted one in two seconds. Omar asked why not the cleft, which is the newest thing he has learnt, and Dima said because the cleft puts the emphasis on the old sheet, and the old sheet is not the news: the news is four of eleven. His cleft is well built and it is pointing at the wrong noun. Which is the finding of the cycle: the shape is not the choice — the choice is which noun you want carried out of the room, and the shape follows. A beautifully built cleft on the wrong noun is worse than a flat sentence, because it is emphatic about the wrong thing and the reader believes you meant it. Hiba asked how you know which noun, and the answer is to ask what the reader is going to do, because the noun is in the answer: if they are going to send pads the noun is the four sites, and if they are going to redesign the sheet the noun is the sheet. The same facts produce different sentences for different readers, and that is not spin but the ordinary business of writing to somebody.']));
out.push(A('Listener task: the noun the student\'s quoted sentence carried, and whether it was the one they meant. ⚠ Collect every answer to the second half and count the noes. In a class of twelve it is usually seven or eight, and that figure is the finding of the whole unit: **most of this room has been quoted on a noun they did not choose.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Choosing the shape first and then looking for a noun to put in it. → **✓** the noun first, from what the reader is going to do.   **✗** Two strong nouns in one sentence, one fronted and one at the end. → **✓** one. Two is the commonest cause of a sentence being **reliably** mis-quoted.   **✗** Three strong nouns in a paragraph. → **✓** two. Three and the reader carries none.   **✗** Stressing one figure in a set of three. → **✓** read _nine drafts, fourteen months, eleven minutes_ flat; a set of figures of one kind counts as one noun, and stressing one breaks the set.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The **second** one — _"Of the eleven sites, four are still on the old sheet and two of the four have never been sent a new one"_ — written in about **nine seconds** at the end of the same note.'));
out.push(A('**2** They were going to **send pads** — not redesign a sheet, not train anybody and not change a procedure. The noun they needed was the **sites**, and his careful sentence was pointing at the **sheet**.'));
out.push(A('**3** It was **not the grammar**: the cleft is correctly built. What he did wrong was to choose the shape he had most recently learnt and then find a noun to put in it. **The right order is the other way round: choose the noun the reader needs, and the shape follows.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO SENTENCES AND WHAT CAME BACK** · L. Sweidan · 3 November',
  'This is a page about two sentences of mine and what happened to each in a fortnight.',
  '**The first, which I expected to be quoted.** _"The documentation of the first-floor condition is incomplete in certain respects."_ Written for the file, in the register I was taught. Not quoted by anybody, and not answered.',
  '**The second, which I wrote in a lift.** _"There is no picture of the joint."_ Six words. The surveyor repeated it to the engineer, the engineer repeated it in the meeting of 28 October, and it is in the minute in those words.',
  '**What the three of them were going to do.** Go and photograph the joint. ⚠ **Not review the documentation, not reopen the file and not write to the contractor — take one photograph.**',
  '**What I had done wrong, and it was not the register.** The first sentence is correct and it identifies nothing: _the documentation_, _the first-floor condition_, _certain respects_. There is no noun in it that anybody can carry.',
  '**What it cost.** Three weeks, and a file note that reads as though I had reported something.',
  '**And the thing I shall do differently.** Name the thing. If I cannot name it in six words, I do not yet know what I am reporting.',
]));
out.push(S('Stage 7 · Write freely (sample, 203 words)'));
out.push(SAMPLE([
  '**TWO SENTENCES AND WHAT CAME BACK** · D. Khoury · 3 November',
  'This is a page about two sentences of my own, which is uncomfortable, because I am the person in this class who summarises for a living and I have been quoted on the wrong one.',
  '**The first, which I expected to be quoted.** _"The word is being used more loosely than it used to be."_ Written for the October editorial, worked on for about twenty minutes, and read by some thousands of people. Nobody has repeated it to me and it is in no minute of the editorial meeting.',
  '**The second, which I wrote in a margin.** _"Four of forty-one."_ Four words, pencilled on a contributor\'s proof as a query. It came back to me three times in a fortnight: from the contributor, from the sub-editor, and in the November planning note, where it is now the heading of a paragraph I did not write.',
  '**What the three of them were going to do.** Check a figure. **Not reconsider a usage, not commission anything and not change the editorial — go back to the source and count.**',
  '**What I had done wrong, and it was not the writing.** The first sentence is about a **process**, and a process has no noun anybody can carry. The second is about a **count**, and a count carries itself.',
  '**What it cost.** Nothing measurable, and it has cost me an argument I have been making for four years without being answered.',
  '**And the thing I shall do differently.** Ask what the reader is going to do, and if the answer is _nothing_, write something else.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 Both sentences quoted, with what happened to each.** You wrote: _"It came back to me three times in a fortnight: from the contributor, from the sub-editor, and in the November planning note."_ Three instances, named, and that is evidence rather than impression. ✓',
  '**2 The noun each sentence carries, named.** You wrote: _"The first sentence is about a process, and a process has no noun anybody can carry."_ ✓ — and that is the sharpest sentence in the page.',
  '**3 What the readers were going to do.** You wrote: _"Check a figure."_ Three words, and the refusals under it do the rest. ✓',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Three or four students read **both** of their sentences and the room says which it would quote — then the writer says which was actually quoted. ⚠ The room and the event agree much more often than the writer\'s own expectation did, which is the most reassuring finding in the unit and worth naming: **the class can already do this for each other, and cannot yet do it for themselves.** Close on Omar\'s line: _until this fortnight I had no way of knowing which of them had ever done anything._'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The page is above. Then: three versions of one sentence I have to send this week, shown to one person who is not in the class, and which they chose._',
  '_Shown to my sub-editor, who had not been told what the exercise was. **She chose the flat one** — "nineteen of the thirty-one October sheets have an empty lot box" — and said the other two "sounded like somebody who wanted something". Which is accurate, and it is the thing I had not thought of: a shape can tell the reader that you are about to ask for something, and a reader who has been warned reads defensively._',
]));

// ===================== 5.6 =====================
out.push(pb());
out.push(h2('5.6  Six words, and the sentence that pays for them'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the two figures in the instruction are figures the class produces about itself: about **half** the partners are wrong about what follows, and about **a quarter** have no idea at all. ⚠ Count them on the board. A class that has produced those two figures will accept everything else in the cycle without argument; a class that has been told them will treat the cycle as an opinion about style.'));
out.push(A('**b** **2** and **4** carry an argument. **1**, **3** and **5** carry nothing: _I am writing with reference to_, _further to our conversation of last_ and _there are a number of matters_ are six words each that tell the reader only that a letter has arrived. ⚠ Ask how many of the class have used **1**, **3** or **5** this week. The hands are the lesson.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — a loaded opening must be followed by **a sentence that pays for it**, which supplies the context the opening skipped; and Rim finds that her first six words have been the same for three years — two hundred and seventy letters — and contain no information.'));
out.push(A('**b** **1** That it is **not** an apology for being brief and **not** a restatement of the opening: it is the one fact the reader needs in order to make sense of the six words.   **2** That a post opening with a figure **gets read**, and one opening _I have been thinking about_ gets about **a third** of the reads — from the same writers; and that a figure with nothing after it gets **argued with**, while a figure with its source after it gets **the subject** argued about.'));
out.push(NOTE('⚠ **The arithmetic of this cycle is Rim\'s and it should be on the board before anything else: two hundred and seventy openings and one opening.** Three years of refusals, the same six words at the top of every one, and two replies in the whole three years. That is not a style problem, and a teacher who runs this cycle as a lesson about being direct will miss it. **It is a measurement of what an opening can be worth.** ⚠ The second thing to protect is the paying sentence, because students will produce the loaded opening happily and then pay for it with an apology — _I hope you will forgive the abruptness_ — which spends the attention the opening bought on the writer instead of on the subject. Mark on the paying sentence and not on the opening. **Three or four facts, long, and immediately after.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a count)_ **Nineteen of thirty-one boxes were empty.** _(paying)_ _The thirty-one are the October handover sheets, counted on 2 November by me and by the ward sister, and the box is the one headed_ lot number _on the second line._',
  '**2** _(a refusal)_ **Four pallets, eleven degrees over, returned.** _(paying)_ _The probe reading was taken in front of your driver at 07.20 on 2 September, recorded on the gate copy and signed by both of us; the maximum is in clause 4._',
  '**3** _(a request)_ **One field, one date, and the form is finished.** _(paying)_ _The field is on the escalation form, the date is the date of the promise, and the change was costed by your own office in January at two hours._',
  '**4** _(an absence)_ **Of fourteen photographs, none shows the joint.** _(paying)_ _The fourteen are the first-floor survey photographs of 19 September, and the joint is the one on the 1974 detail that the contractor says was built as drawn._',
  '**5** _(a date that was missed)_ **The fifteenth passed, and nobody wrote.** _(paying)_ _The fifteenth was the date in your own letter of 2 October for a decision on the exception, and the applicant has telephoned twice since._',
]));
out.push(A('⚠ Mark every one of these on the **second** sentence. The six words are easy and the class will enjoy them; the paying sentence is the work. Count the facts in it: item **2** has four — the witness, the time, the record and the clause — and that is the standard. Item **5** is the one to read aloud, because the paying sentence does something extra: it attributes the date to **the reader\'s own letter**, which is the politest possible way of being unanswerable. **A loaded opening paid for out of the reader\'s own document cannot be read as an attack.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the real six)_ _We regret to advise that the…_',
  '**B** I expect this to be about **a refusal from your office**, and nothing else.',
  '**A** _(loaded six)_ **Four pallets, eleven degrees over, returned.** _(paying sentence)_ **The probe reading was taken in front of your driver at 07.20 on 2 September, recorded on the gate copy and signed by both of us.**',
  '**B** The paying sentence is **a fact** — four of them — because it tells me where the figure came from and who was standing there, which is what your six words left out.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The eight loaded openings, and whether each paying sentence was a **fact** or an **apology**. The count: on a first run **three or four of the eight pay with an apology**. ⚠ And the second finding, which is the one to write up: the **real** openings were on average about **nine words longer** than the loaded ones and contained nothing. Nine words longer and empty is the state of professional writing in this room, and the class has just measured it on itself.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _For Thursday\'s letter: **Eleven of fifteen came from one batch.** Six words, counted. **Paying sentence:** the fifteen are handsets of one model brought to my counter since 12 September, the batch is 11 / 74, and the batch numbers are on the back of each handset and copied into my fault book in the order they arrived._',
  '**b** _My partner says mine supplies **the** missing context and not **some** of it, because it says what the fifteen are, where the batch number comes from and how it was recorded. Hers supplies some: she says what her figure is but not who counted it, so the reader will still have to ask **who counted the sheets** — which is the question that will come back and delay her by a week._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Six words, counted. Rim\'s were: we regret to advise that the. And what they tell a reader is that it is a letter from her office, and nothing else — and they have been the first six words of every refusal she has signed for three years, about two hundred and seventy letters with the same opening. Which is the arithmetic of the cycle: two hundred and seventy openings and one opening. So she loaded it: four pallets, eleven degrees over, returned. Six words. And she said it is rude. Omar said it is not rude, it is just fast, and Ms Huda said it is fast and it is unpaid, which is the point — a loaded opening skips the context, and the context has to arrive in the sentence immediately after it. That sentence is the one that pays, and without it a loaded opening reads as a telegram from somebody who has decided not to explain. Hiba said so you put the context second, and Ms Huda said you put it second and you make it do something: the paying sentence is not an apology for being brief and not a restatement, but the fact the reader needs in order to make sense of the six words. The probe reading was taken in front of your driver on 2 September and signed by both of us. Rim said that is not rude at all, and it is nineteen words shorter than what she has been sending — because speed and courtesy are not opposites, and speed and unexplained speed are different things. Then Jad brought the best evidence of the term, because he can count it: on the forum a post that opens with a figure gets read, and one that opens with "I have been thinking about" gets about a third of the reads from the same writers. And what happens after the figure matters as much: with nothing after it, people argue with the figure and the thread goes nowhere; with the source after it, they argue about the thing.']));
out.push(A('Listener task: the student\'s **real** six words and their **loaded** six words, written one above the other. ⚠ Collect these and read ten pairs aloud, real first. It takes four minutes and it is the most persuasive thing in the unit, because the real openings are nearly identical to each other and the loaded ones are all different — which is what information looks like.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Seven words. → **✓** six. Count them; the discipline is the exercise.   **✗** _Four pallets, eleven degrees over, returned. I hope you will forgive the abruptness._ → **✓** pay with a fact. An apology spends the attention on the writer.   **✗** Two loaded sentences in a row. → **✓** short then long. Two in a row reads as a list of accusations and the reader braces.   **✗** The six words instead of the house form. → **✓** under it. The house line costs you one line and keeps you everything after it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** It supplies **where the figure came from, who was present, when and under what authority** — **four** facts: the probe reading in front of the driver, the time of 07.20 on 2 September, the gate copy signed by both, and clause 4 of the agreement.'));
out.push(A('**2** That she **withdrew the whole of the letter** when the standing claim turned out to be wrong — because the eleven degrees was in that letter too, and the eleven degrees was never in doubt. ⚠ This is Unit 4.5 being cashed: withdraw the half that is wrong and keep the half that is not.'));
out.push(A('**3** That she is no longer going to **put her six best words at the end of the second paragraph**.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE OCTOBER SHEETS** · R. Barakat · 4 November',
  '_Dear Sister Mardini, The October handover sheets refer._',
  '**Nineteen of thirty-one boxes were empty.** The thirty-one are the October handover sheets, counted on 2 November by me and checked by the day staff; the box is the one headed _lot number_ on the second line, and nineteen of the thirty-one have nothing in it.',
  '**What I am not claiming.** That any patient had the wrong thing. Nineteen sheets, no incident, and I am not asking for anybody to be spoken to.',
  '**What is left, and it is narrower.** Not a claim about care. A form that says _where applicable_, two shifts reading it two ways, and one month of files that look consistent and are not.',
  '**All that is needed to close it.** One line saying what _where applicable_ applies to. One line, from whoever wrote the phrase.',
  '**And if nobody wrote it.** Then it came with the form and we are both looking at a printed phrase that nobody owns — which is a shorter conversation than the one the two shifts have been having.',
  '_Yours, R. Barakat_',
]));
out.push(S('Stage 7 · Write freely (sample, 206 words)'));
out.push(SAMPLE([
  '**BATCH 11 / 74 · a request for one date** · M. Hariri · 4 November',
  '_Dear Sirs, Your batch 11 / 74 refers._',
  '**Eleven of fifteen came from one batch.** The fifteen are handsets of one model brought to my counter since 12 September; the batch number is moulded into the back of each one and I have copied all fifteen into a fault book in the order they arrived, with the dates.',
  '**What I am not claiming, and I have had to learn to say this.** That the batch is faulty. I wrote in October that it was, you asked me how many I had opened, and the answer was two — so I withdraw the word and keep the figure. **Eleven of fifteen is a count and not an opinion, and it was never the part that was in doubt.**',
  '**What is left, and it is narrower than my October letter.** Not a claim about manufacture. Fifteen handsets, eleven of one batch, and three of four replacements back inside a fortnight.',
  '**All that is needed to close it.** The loading date of batch 11 / 74. One date, from your own sheet.',
  '**And if the date was not recorded.** Then we are both looking at eleven handsets and a gap, and that is a shorter conversation than the one we have been having since September — and I shall put it to the customers in those words, which is what I should have done in October.',
  '_Yours faithfully, M. Hariri_',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 Six words exactly.** You wrote: _"Eleven of fifteen came from one batch."_ Counted: six. ✓',
  '**2 A paying sentence with three or four facts.** You wrote: _"The fifteen are handsets of one model brought to my counter since 12 September; the batch number is moulded into the back of each one and I have copied all fifteen into a fault book in the order they arrived, with the dates."_ Four facts — what they are, since when, where the number comes from, how it was recorded. ✓',
  '**3 A request that names its own size.** You wrote: _"One date, from your own sheet."_ The reader cannot make that bigger than it is. ✓ — and I would keep _it was never the part that was in doubt_, which is the line that makes the withdrawal look like strength.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads their six words and then their paying sentence, **and nothing else**. The room says whether the second one pays. ⚠ The judgement is binary and should be given in one word — _fact_ or _apology_ — with no discussion, which keeps twelve students inside four minutes. Close on Rim\'s arithmetic: **two hundred and seventy letters, two replies**, and the six best words at the end of the second paragraph every time.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The letter is above, and it went on Thursday. The first six words of the reply, if one came, and whether they contain anything._',
  '_A reply came on Monday, which is the first reply to any letter of mine from that office. Its first six words: **"Batch 11 / 74 was loaded 4"** — the date was cut off by the line break, and the rest of the line says 4 September. **So the reply opens with the answer.** Six words, and the thing I had asked for is in them. I do not know whether they have read anything about openings, and I do not think they have; I think a person who is given one question answers it, and three years of my letters never asked one._',
]));

// ===================== 5.7 =====================
out.push(pb());
out.push(h2('5.7  Review & Mediate: Why that one and not the other'));
out.push(S('Stage 1 · Get ready – Unit 5 quiz'));
out.push(A('**1** _At no point **did** anybody ask for the figure._ — the auxiliary must be supplied and inverted.   **2** _Not only was the figure wrong but also **the date**._ — two of a kind; _I was tired_ is not a second field.   **3** _Of the eleven sites, **nine are still on the old sheet**._ — the fronted phrase is a promise, so the sentence must be about the sites; _the weather has been difficult_ breaks it.   **4** _**What** nobody had done was turn one of the sheets over._   **5** _It was not until June **that** anybody counted them._ — not _when_.   **6** _All **that** is needed is one field with a date in it._'));
out.push(A('⚠ Items **1** and **3** are the two to spend time on and they fail differently. **1** is an error an examiner sees from across a room. **3** is not an error at all — it is grammatical, and it is the fault the unit exists to prevent. Ask the class which of the six they would have let through, and expect **3** to be the one most of them would have signed.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Open — the six pairs are read as they were sorted, with the count under them: five of the six quoted sentences contain a figure and the sixth is three figures.'));
out.push(A('**b** They can all be said **without the rest of the sentence** — they survive being lifted out of their paragraph. And the unit has not been about word order: **word order is the instrument, and what the class has been learning is how to write a sentence somebody else can repeat.**'));
out.push(NOTE('⚠ **Do not give the answer in Stage 2. The whole value of this cycle is that the class finds it, and they will — in about four minutes, through three wrong answers first.** The three wrong answers are always the same and all three are nearly right: _they are all short_ (they are shorter, not short — Nour\'s is thirteen words), _the figure is near the front_ (nearer, not at the front, except in Mazen\'s), and _they can all be said in one breath_ (Omar\'s cannot; it is nineteen words). Let each one be tested against the board and fail. Then Jad\'s answer arrives and it is the right one: **they can all be said without the rest of the sentence.** ⚠ That sequence is the lesson and it cannot be shortened, because a class given _liftability_ as a definition will nod, and a class that has eliminated length, position and breath will own it. **Leave Rim\'s line till last, as Ms Huda does:** two hundred and seventy letters with nothing liftable in any of them is the strongest evidence on the board, and it is strongest after the other five have been explained.'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7: the Language box here **tests** rather than drills, and the testing is done in Stage 3 on two sets of four sentences the class has not seen.'));
out.push(S('Stage 3 · Practise (sample – Set A)'));
out.push(SAMPLE([
  '**Liftable: 1 and 3.** _"Nineteen of the thirty-one October sheets have an empty lot box."_ — a figure, a date and a noun that identifies itself. _"It was not until the October question that anybody looked at the box."_ — a time, an event and an admission.',
  '**Not liftable: 2 and 4.** _"The documentation of the handover process is incomplete in certain respects."_ The reader would have to go back for **which** documentation and **in what** respects. _"Appropriate arrangements should be in place for the recording of batch information."_ The reader would have to go back for **what** arrangements, **whose**, and **by when** — and would not find them, because the sentence does not know.',
  '**What the two failures have in common.** No figure, and a noun that does not identify itself: _the handover process_, _appropriate arrangements_.',
]));
out.push(A('⚠ **Set B** gives the same arithmetic from a different trade: liftable are **1** _"On forty-one of the sixty-two mornings the first service left at 06.20"_ and **3** _"The catch was reported on 14 August and again on 9 September"_; unliftable are **2** _there are a number of outstanding matters relating to the printed schedule_ and **4** _adherence to the published times is expected of all drivers at all times_. The nouns that fail are _outstanding matters_ and _the published times_. **Both sets fail in the same two places, which is the point of having two sets.**'));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The two liftable sentences in each set and what the reader would have to go back for in the other two. ⚠ On **both** sets the liftable pair is **1 and 3** and the unliftable pair is **2 and 4**, and the reason is the same in all four failures: **no figure, and a noun that does not identify itself.** Say the four nouns out loud as a list — _the handover process, outstanding matters, appropriate arrangements, the published times_ — and ask how many of them the class has written this month.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**My pair, given to a partner who had seen neither.** (i) "The documentation of the first-floor condition is incomplete in certain respects." (ii) "There is no picture of the joint."_',
  '_**She said the second was the one that was quoted**, before I told her, and she gave the reason in one line: the first one does not say what is missing, so there is nothing in it to carry. Which is what the engineer did with it — nothing._',
  '_**Then hers.** (i) "Of the eleven sites, four are still on the old sheet." (ii) "What four of the eleven sites still have is the pre-March sheet." I said the first, and I was right, and I could not say why until I had asked what her reader was going to do. They were going to send pads. The first sentence carries the sites; the second carries the sheet._',
  '_**And the finding:** both of us could tell for the other and neither of us could tell for ourselves._',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Six pairs on the board, and Ms Huda asked for the thing that is not the figures. Dima said they are all short, and was told that Nour\'s is thirteen words and the unquoted one is thirty — so shorter, and not short. Hiba said the figure is near the front in all of them, and in Mazen\'s it is the front. Lubna said they can all be said in one breath, and Omar said his cannot, because his is nineteen words. Then Jad found it: they can all be said without the rest of the sentence. You can lift any of those six out and they still mean something, and the ones that were not quoted cannot be lifted — you have to bring the sentence with them. Which is the best answer anybody has given this term: a quotable sentence is one that survives being removed from its paragraph, which is not the same as being short and not the same as being emphatic. "The documentation of the first-floor condition is incomplete in certain respects" cannot be lifted, because it does not say what documentation or in what respects, and the reader would have to go back. Adnan said so the test is whether somebody could quote this to a third person who has not read the page, and that is the test the whole unit has been building: fronting, inversion, delay and the clefts are four ways of making a sentence liftable. Then Rim\'s pair, which was left till last. Two hundred and seventy letters, two replies, and nothing liftable in any of them — because "we regret to advise that the consignment has been found not to conform" does not say which consignment or what the matter was, so there is nothing in it for anybody to carry anywhere. And the unit turns out not to have been about word order at all: word order is the instrument, and what the class has learnt is how to write a sentence somebody else can repeat, to a person who was not there and who will decide. Which is 22.2 from last year with four more shapes and one test — last year they learnt that everything you say about your own work is summarised before it reaches anybody who decides, and this year they learnt what to do about it.']));
out.push(A('Listener task: whether the partner could tell which of the two sentences was quoted, and the reason they gave. ⚠ Count the cases where the partner **could** tell. It is usually ten or eleven out of twelve, and that figure is the finding to end the unit on: **the room can do this for each other and cannot yet do it for itself**, which is an argument for showing somebody your two versions before you send either.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _It is short, so it is liftable._ → **✓** thirteen words and liftable; six words and not. Length is not the test.   **✗** _It is emphatic, so it is liftable._ → **✓** a well-built cleft on an unidentifiable noun lifts nothing.   **✗** Repairing an unliftable sentence by changing its **shape**. → **✓** repair the **noun**. _In certain respects_ cannot be fronted into anything worth carrying.   **✗** Treating the test as being about style. → **✓** it is about what reaches the person who decides.'));
out.push(S('Stage 5 · Read – exam practice (B2 First Reading and Use of English Part 5)'));
out.push(A('**1** B   **2** C   **3** A   **4** D   **5** B   **6** C'));
out.push(A('Two things to say about this task, because it is the first Part 5 of the course. ⚠ **Every answer is in the text and none of them is in the text in the words of the option** — that is what makes Part 5 harder than it looks, and a candidate hunting for matching words will choose a distractor. Item **2** is the clearest case: the text says what a listener carries is _decided by how the sentence was built rather than by what the speaker thought was important_, and option **A** is the wrong half of that same sentence. ⚠ And item **3** is a reference question, which appears in every Part 5: _that thing_ points **back** to _one thing in it that will survive being lifted out of its paragraph_, and option **D** is a phrase from the next sentence rather than the referent. Teach the habit of covering the options, answering in your own words, and only then looking.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHY THAT ONE AND NOT THE OTHER** · T. Ayoub · 5 November',
  '**The one that was quoted.** _"On forty-one of the sixty-two mornings the first service left at 06.20 or later."_ _(fifteen words)_',
  '**The one that was not.** _"Adherence to the published departure times has not been consistent over the period in question."_ _(fourteen words)_',
  '**What is liftable in the first.** **Forty-one of sixty-two**, and **06.20**. A figure, a proportion and a time, and all three can be repeated by somebody who has never seen my sheet.',
  '**What the second sends the reader back for.** Which times. How inconsistent. Over what period. Three questions, and the sentence answers none of them, so a reader has to return to the page — and the man I gave it to did not return to it.',
  '**The shape of each.** The first is **fronted**, with the proportion first. The second is **nominalised**, with _adherence_ as its subject, which is Unit 2\'s fault arriving inside Unit 5\'s.',
  '**And the noun each carries.** The first carries **the mornings**. The second carries **adherence**, which is not a thing anybody can do anything about — and what my reader was going to do was change one word on a printed sheet.',
]));
out.push(S('Stage 7 · Write freely – exam practice (B2 First Writing Part 1: the essay)'));
out.push(A('⚠ **This is the third essay of the course and the shape has not changed since Unit 3** — four paragraphs, four lines of plan, one conceded point. What Unit 5 adds is two things only, and they are the only two things to add to the marking: **the first six words of each paragraph**, and **the last sentence of the essay**. Mark on four things: **1** is there a thesis sentence that takes a position? **2** do the first six words of each body paragraph carry something? **3** is the conceded point conceded **and limited**? **4** does the conclusion add one thing rather than repeat three?'));
out.push(A('**And one warning that belongs to this unit in particular.** A class that has just learnt inversion will put four inversions in an essay of two hundred words. ⚠ **One.** Tell them before they write, mark it strictly, and say why: the examiner is crediting range **and** control, and four fronted negatives in two hundred words demonstrate the first at the expense of the second. The same applies to the clefts — one, or at most two in different paragraphs.'));
out.push(SAMPLE([
  '**Of two sentences carrying the same fact, the one that is better built is the one that will be repeated** — and that is the narrow sense in which I agree with the statement. In the broad sense I do not: a true thing that nobody can repeat does not reach anybody, but a well-made sentence about nothing is quoted once and then checked.',
  'In writing the case for the statement is strong. A reader decides what a sentence is about from its first words and does not revise that decision, so a figure placed late in a long sentence is, for most practical purposes, not there at all. **Not one of the four notes I sent last year was answered**, and all four contained the figure that mattered, in the middle, between two commas.',
  'In a meeting the case is much weaker, and this is the point I should concede. A listener can ask a question, and an emphasis carried in the voice does work that no sentence on paper can do. **But a meeting is minuted**, and what reaches the person who decides is the minute — so the advantage of speech lasts about as long as the meeting does.',
  'What decides the matter, for me, is that the two are not in competition. **The content decides whether a sentence is worth carrying; the construction decides whether it can be.** A writer who has only the second has nothing to carry, and a writer who has only the first will not be quoted — which is the more common position, and the more expensive one.',
]));
out.push(A('_(214 words — within the 180–220 band. Note the three fronted or loaded openings, no inversion at all, and one conceded paragraph that is conceded in its first six words and limited in its last sentence.)_'));
out.push(S('Unit 5 check · A  Grammar and vocabulary'));
out.push(A('**1** a   **2** c   **3** b   **4** a   **5** c   **6** b   **7** c   **8** b'));
out.push(A('Items **1** and **2** are the two inversion items and they test different things: **1** needs _did_ supplied, which is the step students miss, and **2** needs the right auxiliary for _rarely_ with a present perfect — _rarely **have** I seen_. Item **4** is the fronting item and the only wrong answer anybody chooses is **b**, from over-applying 5.2: a fronted **quantity** phrase does not invert, and only a fronted **negative** does. ⚠ Item **6** is the _all that is needed_ item: _all what_ is the error, and it is the commonest error in the four clefts because the _what_ cleft is the one the class learnt first.'));
out.push(S('Unit 5 check · B  Listening (B2 First Listening Part 1 style – eight short extracts)'));
out.push(A('**1** B   **2** A   **3** C   **4** B   **5** A   **6** C   **7** A   **8** B'));
out.push(A('⚠ Part 1 is eight unrelated extracts and the candidate has about ten seconds between them, which is what makes it tiring rather than difficult. The distractors here are built the way the examination builds them: **each wrong option is something the speaker mentions but does not claim.** In item **1** the speaker says _two replies in three years_, so **A** _two_ is in the extract and is the answer to a different question. In item **7** the speaker says a post opening _I have been thinking about_ gets about a third of the reads — so **B** is true of the other kind of post. ⚠ Teach one habit for Part 1: **hold the question in your head and listen for the claim, not for the words.** Then read the script once afterwards so the class can hear how close the distractors sit.'));
out.push(S('Unit 5 check · C  Writing'));
out.push(A('The loaded letter, and marked on three things only: **are there exactly six words in the opening of the body, does the paying sentence carry three or four facts, and does the request name its own size?** ⚠ Nothing else in this unit is assessed here. A letter with seven words in the opening has failed the one countable thing in the unit, and a letter that pays with an apology has failed the cycle it comes from, however well the rest is written.'));
out.push(S('I can… (Unit 5)'));
out.push(A('Self-assessment; no answers. The four that matter are the second, the fourth, the sixth and the eighth: inverting after a negative adverbial with the auxiliary in front of the subject, putting nothing of value between two commas, **choosing between three versions by asking which one the reader will quote**, and telling a liftable sentence from one that sends the reader back. ⚠ A class that ticks the four shapes and not the sixth has learnt four shapes and will go on being quoted on the wrong noun — which is the one thing this unit exists to prevent.'));
out.push(box('Looking ahead to Unit 6 and the Mid-Book Test', [
  'Unit 5 was about one sentence. **Unit 6** is about a decision: narrowing five options to two out loud, disagreeing without stopping the task, and recording the result so that somebody who was not there can act on it.',
  '**6.3 teaches B2 Speaking Part 3**, the two-part discussion — **two minutes** with your partner on a set of options and then **one minute to decide together**, three minutes in all. It is the longest piece of interaction in the examination and the part where a polite candidate loses most marks, because agreeing quickly is the one thing the task cannot reward. ⚠ **Time it from the first lesson**, as Part 2 was timed in Unit 4.',
  '⚠ **The Mid-Book Test comes after Unit 6** — Reading 20, Writing 15, Listening 15, Speaking 10, in sixty minutes of paper and about twelve minutes of speaking, with **all four Speaking parts in it**. That is why Part 2 was taught in Unit 4 and Part 3 is taught in Unit 6: by the test, the class has met every part of the examination once.',
  '**Ask the class now for two things:** one decision they were **not at** and have had to carry out, and one they **were at** that was never written down. 6.4 and 6.6 are built on the pair.',
  '**And the 1.7 essay.** The Mid-Book Test is the last natural moment to remind them. It is not wanted until Unit 12, and a class that has lost it by Unit 7 will have lost it by Unit 12.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 5 · Answer Key');
