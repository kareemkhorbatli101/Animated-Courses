// Proactive English B2 · Syria Edition · Book 1 · Unit 6 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 6  Deciding, and Saying So — Answer Key'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**One test runs through the whole unit and it is the only thing to keep on the board: could somebody who was not there act on this on Monday morning?** It is asked of a narrowing in 6.1, of a reported decision in 6.4, of a record in 6.5, of an unwritten one in 6.6, and of five real documents in 6.7 — all five of which fail it.',
  '⚠ **The unit does not work without the two decisions.** Each student needs one they were **not at** and have had to carry out, and one they **were at** that was **never written down**. 6.4 is built on the first and 6.6 on the second, and neither works with an invented example. Send anybody who has not brought them to find one: a minute, an instruction, a thing agreed at a counter. **The decision made in a corridor counts and is often the best one.**',
  '**6.3 must be timed from the first lesson, with a watch on the desk** — fifteen seconds, two minutes, one minute. Part 3 is the longest interaction in the examination and the one where a polite candidate loses most, because the two things that cost marks are agreeing at once and disagreeing without a reason. ⚠ **Never let a pair divide the list**, and never let the minute end without a decision in words.',
  '**6.5 is the cycle to protect if time is short.** The five lines are the most portable thing in this book and they are worth more to most of this class than any grammar in it. Teach the verb test by standing in a doorway: _could you watch somebody do this?_',
  '**And the sentence the unit turns on**, which is Ms Huda\'s in 6.7: **a decision is not a moment; it is a sentence.** If the sentence was never written, what the room had was an occasion.',
], C.lblue, C.navy));

// ===================== 6.1 =====================
out.push(pb());
out.push(h2('6.1  Five into two'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and again the instruction to say **nothing** about either decision is the instruction that matters. ⚠ Collect twenty-four decisions in six minutes — two from each student — and write six of them on the board unanalysed. 6.4 and 6.6 are the cycles that explain them, and a class that has explained its decisions in 6.1 will have nothing left to discover in either.'));
out.push(A('**b** Narrows: **1**, **3** and **5** — a discard with a reason, a collapse, and a count with a recommendation. Comments only: **2** and **4**. ⚠ Read **2** aloud twice — _they all have something to be said for them_ — and ask how many times the class has heard it. It is the single commonest sentence in a meeting that is about to decide nothing, and it is always true.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — five short speeches and no narrowing, because every speaker defends one option and nobody discards any; and Nour discovers that in forty minutes nobody said the word _no_ about anything.'));
out.push(A('**b** **1** You must **discard one** first — _no addition without a discard_.   **2** That the person who speaks last wins, and not because the last argument is best: everybody is tired and the last option mentioned is the one in everybody\'s head. She has watched it for eleven years.'));
out.push(NOTE('⚠ **The claim of this cycle is countable and the class should count it: a discussion of five options almost always ends with five options.** Ask for the two figures from any meeting anybody was at last week — how many options at the start and how many at the end — and write the pairs on the board. _Five and five. Four and four. Six and seven._ The last of those is the one to point at: lists grow. **The work of a decision is discarding, out loud, in front of the person who proposed the thing**, and it is the one part of a meeting nobody is ever taught to do.'));
out.push(NOTE('**The collapse is the move to spend the extra minutes on, because it is the one nobody arrives with.** _The free-text box and the note on the recording are not two options: they are one option, and the option is write it somewhere nobody will search._ ⚠ Teach it as a question rather than as a phrase: **what do these two have in common that makes them the same idea?** A speaker who can answer that has removed an item from the list **without refusing anybody**, which is why it costs less than a discard and does the same work. Expect none in the first run of Stage 3 and three or four in the second.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(five ways of recording something)_ _That rules out the recording, because nobody searches it until there is a complaint._ _We can take the free-text box and the margin together — both are places with no field structure._ _Which leaves us with the form field and the log._',
  '**2** _(five ways of telling people)_ _That rules out the noticeboard, because the people who need it are on a bus._ _We can take the shift meeting and the handover together — both reach whoever is on duty and nobody else._ _Which leaves us with the sheet and one named person._',
  '**3** _(five places to keep a form)_ _That rules out the drawer, because it is locked at the weekend._ _We can take the two shelves together._ _Which leaves us with the ward file and the pharmacy copy._',
  '**4** _(five times of day)_ _That rules out six o\'clock, because the night staff have gone and the day staff have not arrived._ _We can take eleven and two together — both are mid-shift._ _Which leaves us with the handover and the end of the round._',
  '**5** _(five people who could do it)_ _That rules out the auditor, because she comes twice a year._ _We can take the two sisters together — either of them, whoever is on._ _Which leaves us with the sisters and me._',
]));
out.push(A('⚠ Mark these on the **reason**, not on the phrase. Every one of the five discards above has a _because_ in the same breath, and that is the whole of the grammar: **a discard with no reason is heard as a preference and is reopened within the minute.** Item **4** is the one to read aloud, because the collapse is the kind students never see — two times of day collapsed because they are both _mid-shift_, which is a category the class had to invent in order to collapse them. **Collapsing requires you to name what two options have in common, and naming it is the work.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the five)_ _A new field · the free-text box · a separate log · a note on the recording · ask at month end._',
  '**B** That rules out **asking at month end**, because the promises that matter are made in week one and remembered in week four.',
  '**B** And we can take **the free-text box** and **the note on the recording** together, because they are both places with no field structure that nobody searches.',
  '**B** Which leaves us with **the field and the log**. I would take the field, because it is in the place where the promise is made.',
  '**A** _(adding one, with a discard)_ I would put the log aside and add **a line on the call sheet** — which is a sixth, so the log goes.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The discards, the collapse and the count. The finding: **almost every pair discards with a preference and not a reason** on a first run — _I do not really like the log_ — and a discard with no reason is reopened within the minute. ⚠ Count the collapses as well: there are usually **none**, because collapsing has to be thought of and refusing does not. Say that figure out loud before the second run and it goes up at once.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My meeting of 29 October had five: a new field, the free-text box, a separate log, a note on the recording, and asking at month end. The two that should have survived are the **field** and the **log**. Discards: the recording, because nobody searches it; the free-text box, because it has four thousand entries and no structure — and those two are one option, not two; and month end, because we have tried it twice and both times the figure came back a third of the size._',
  '**b** _My partner\'s meeting began with four and finished with four. Nobody said no to anything. He said somebody did say_ I am not sure about the second one, _which he had remembered as a refusal until he said it out loud in this room._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Five ways of recording a promise went on the board, and Nour\'s own meeting had the same five in front of it for forty minutes. What came out of it was nothing: they agreed to come back to it. Asked how many of the five anybody had said no to in those forty minutes, she said none — everybody said what was good about the one they had brought. Which is what a discussion of five options almost always produces: five short speeches and no narrowing, because each speaker defends one option and nobody discards any, so the list is exactly as long at the end as at the beginning. The work of a decision is not choosing; it is discarding, out loud, in front of the person who proposed the thing. Omar said nobody wants to do that, and Ms Huda said nobody wants to and everybody can be taught to, and gave three sentences. That rules out — one option gone, with a reason. We can take those two together — two collapsed into one. And which leaves us with — the count said out loud. Jad said the middle one was new to him, and it is the one that saves the time: the free-text box and the note on the recording are not two options but one, which is write it somewhere nobody will search, and collapsing them removes an item without refusing anybody. Rim asked what happens if somebody adds a sixth, and the rule is no addition without a discard, because a list that only grows will be taken away and decided by somebody who was not in the room. Then Dima said that in her meetings the person who speaks last wins, and not because the last argument is best: everybody is tired and the last option mentioned is the one in everybody\'s head. She has watched it for eleven years. Which is the argument for counting out loud as you go, because the count puts the list back in everybody\'s head and takes the advantage away from whoever happens to be speaking at the end.']));
out.push(A('Listener task: how many options the partner\'s meeting began with and how many it ended with. ⚠ Collect every pair and read them as a list of numbers only — _five and five, four and four, six and seven, three and three_. The list takes forty seconds and it is the evidence for the whole cycle. **Write the one that grew on the board.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _I do not really like the log._ → **✓** _That rules out the log, because nobody will open a second book during a call._ A preference is reopened; a reason stays discarded.   **✗** _They all have something to be said for them._ → **✓** nothing. It is true and it is not a move.   **✗** Adding a sixth option without discarding. → **✓** no addition without a discard.   **✗** _Which leaves us with the field, the log and possibly the box._ → **✓** two. _Possibly_ puts a discarded item back on the list and nobody will notice until the end.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** She collapses the **free-text box** and the **note on the call recording** — they are one option, _write it somewhere nobody will search_ — and then rules both out on that single ground: the box has four thousand entries and no field structure, and the recordings are searched only when there is a complaint, which is after the damage.'));
out.push(A('**2** That the October release is full and the field will take the place of something. She says it **because somebody else will say it within a day** — and a writer who has said it first is the person the objection is brought **to** rather than the person it is used **against**.'));
out.push(A('**3** She is asking for **a decision, by 20 November, with a name on it**. She is **not** asking for agreement — and she adds that if the answer is the log she will write the procedure for it and say nothing further about the field.'));
out.push(NOTE('⚠ **The sentence in this model that is worth the whole page is the one about the cheap option: _a cheap thing that is not used costs more than an expensive thing that is._** It is the argument the class will need all term, because every committee in the world prefers the free option, and the free option here is the log — a second book to open during a call, which eleven people will not do with a customer waiting. ⚠ Note also the shape of the last paragraph, which is the one students leave out: **she names what she will do if she loses.** _If the answer is the log I shall write the procedure for it and say nothing further about the field._ That sentence is what turns a recommendation into something a reader can safely decide against, and it is why recommendations that contain it are decided faster.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE LOT BOX · five options, narrowed** · R. Barakat · 6 November',
  'This is the note I should have written before the ward meeting of 2 November and not after it. Five options were in front of us for half an hour and we agreed to look at it again.',
  '**Discarded: the label and the photograph.** These are one option and not two, and the option is _record it somewhere that is not the sheet_. Both leave the sheet with an empty box, and the sheet is what the auditor reads.',
  '**Discarded: nowhere.** We have had nowhere since the form changed in June, and nineteen of the thirty-one October sheets are the result.',
  '**Left: the box on the sheet, or the pharmacy copy.** The box costs four seconds a patient and is where the auditor looks. The pharmacy copy costs nothing and is in another building.',
  '**Which I would take, and this is a recommendation and not a decision.** The box. And the thing against it: four seconds at the wrong moment is not four seconds, and the wrong moment is most of the night.',
  '**What would reopen the question.** If the box is still empty on a quarter of the sheets in December, the question is no longer where to record it but whether the form can be filled in at all on a night shift.',
  '**What I am asking for.** A decision, by 20 November, with a name on it.',
]));
out.push(S('Stage 7 · Write freely (sample, 206 words)'));
out.push(SAMPLE([
  '**THE REFUSAL LETTER · five options, narrowed** · R. Shaaban · 7 November',
  'This is the note I should have written before Tuesday\'s meeting. Five ways of handling a refusal were on the table for fifty minutes and we rose with five.',
  '**Discarded: the telephone call first, and the call after the letter.** These are one option and not two, and the option is _put the difficult part in a conversation nobody can quote_. I have tried both this year. Neither produced anything I could put in a file.',
  '**Discarded: no letter at all.** We did that in July, twice, and both consignments came back a second time, because nothing had been written down that the yard could act on.',
  '**Left: the letter on the day, or the letter after the loading date is known.** The letter on the day costs me an hour and arrives while the driver remembers the gate. The letter after the loading date costs nothing and arrives three weeks later, by which time the probe reading is one of two accounts of a morning.',
  '**Which I would take, and it is a recommendation.** The letter on the day. And the thing against it, which I shall say before anybody else does: I have sent two on the day this year and withdrawn one of them.',
  '**What would reopen the question.** Two withdrawals in a quarter. One is a mistake; two is a procedure that is being used too fast.',
  '**What I am asking for.** A decision by 20 November, with a name on it.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 The count, given early.** You wrote: _"Five ways of handling a refusal were on the table for fifty minutes and we rose with five."_ Five and five, in the second line. ✓',
  '**2 One collapse, named as a collapse.** You wrote: _"These are one option and not two, and the option is put the difficult part in a conversation nobody can quote."_ ✓ — and naming the shared idea in the other party\'s favour is what makes it a collapse rather than a double refusal.',
  '**3 A reason on every discard.** You wrote: _"We did that in July, twice, and both consignments came back a second time."_ A reason with a month and a figure in it. ✓',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads **only their discards and the reasons**. The room says which discard it would reopen, and there is usually one. ⚠ When it is named, do not defend it: ask the writer to add four words to the reason and read it again, and the second reading is almost always enough. **A discard is reopened because its reason is thin, not because the room disagrees.** Close on Dima\'s line: _the best way to carry a meeting is to speak last and keep it short_ — eleven years of watching it, and the only defence is a count said out loud.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The note is above. The count: in the last meeting I was at, how many options were in front of the room at the start and how many at the end?_',
  '_**Four at the start and five at the end.** Somebody added the pharmacy copy at about the fortieth minute and nothing went out to make room for it, and I remember the relief in the room when it was added, because a new option feels like progress. **It is the opposite of progress and it felt better than any of the discards would have.**_',
]));

// ===================== 6.2 =====================
out.push(pb());
out.push(h2('6.2  I take the point, but not the whole of it'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the third instruction is the one that produces the lesson: **which of the two versions have you ever actually used at work?** The honest answer in almost every case is the first — _you are right, I suppose_ — and the admission is what makes the cycle necessary rather than interesting. ⚠ Ask it of four students in a row before anything is taught.'));
out.push(A('**b** Named limits: **2**, **4** and **5**. No limit: **1** and **3**. ⚠ Point out that **3** — _I see what you mean_ — is the most dangerous of the five, because it sounds like a concession, costs nothing, concedes nothing, and leaves the other party believing they have been agreed with. **It is the sentence that produces the second meeting.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — a complete agreement **ends** the discussion, because there is nothing left to say and the task stops before it is finished; and Omar finds that he concedes the whole of a point in order to stay polite, and then has to raise it again later from the beginning.'));
out.push(A('**b** **1** _I agree_ has nothing after it and the task stops; _I agree **about that**_ has a limit in it and the next sentence is already implied — **two words of difference, and one of them ends a meeting.**   **2** **Interactive communication** — and the two things that lose it are agreeing at once and disagreeing without a reason.'));
out.push(NOTE('⚠ **The arithmetic in this cycle is the teaching and it should be on the board in figures: four minutes bought, twenty paid.** Omar conceded a point he knew to be half wrong because the full answer would have taken four minutes and there were six items left; the question came back the following week and took twenty, **and the second time he also had to explain why he had agreed before**, which is the part nobody budgets for. Ask the class for their own instance of it — everybody has one from this month — and get the two figures. ⚠ And note the direction of Hiba\'s problem, which is the mirror image: _does not take a position_, written by her assessors. **The same sentence repairs both faults**, which is why it is worth drilling until it is automatic rather than discussing.'));
out.push(NOTE('**The fault to watch for in Stage 3 is invisible to the person committing it: conceding something the other party never said.** A conceder under pressure invents a smaller, safer claim and concedes that — _I take the point that these things are difficult_ — and the other party hears a manoeuvre, because they never said it was difficult. ⚠ The repair is mechanical and should be taught as a rule: **the conceded half must contain one of the other person\'s own words.** _I take the point about the printing_ — _printing_ is his word, and it is checkable by anybody listening. Mark Stage 3 on that single test and the fault disappears in one lesson.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(about a cost)_ _I take the point about the two hours; I do not take it about the release being full._',
  '**2** _(about a date)_ _Granted that the twentieth was my own date, that does not explain why nobody answered the letter of the fifth._',
  '**3** _(about whose fault it is)_ _You are right that the night staff were not told; it is the day sheets I cannot explain that way._',
  '**4** _(about a figure)_ _Even allowing for the two I counted twice, it is nineteen of thirty-one and not nine._',
  '**5** _(about something you did yourself)_ _I take the point about the covering line, which was mine and was poor; I do not take it about the cut._',
]));
out.push(A('⚠ Item **5** is the one to spend the minute on, because conceding something **of your own** is the cheapest concession available and the one nobody makes. It costs nothing, it is unarguable, and it buys the limit that follows it. Item **2** is the strongest shape of the four — _granted that…, that does not explain…_ — and it is the only one that concedes a **fact** and refuses its **consequence**, which is the move most real disagreements need. ⚠ Refuse any answer in which the two halves are the same thing in different words: _I take the point about the cost; I do not take it about how expensive it is_ is a contradiction wearing a concession\'s clothes, and it stops a discussion as dead as _I agree_.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the claim)_ _The pads are a printing problem and not a dispatch problem._',
  '**B** I take the point about **the printing** — four of the eleven sites had a bad impression and the printer has accepted that. I do not take it about **the dispatch**: two of the four have never been sent a pad at all, and nothing was printed for them, well or badly.',
  '**A** That **is** the point I was making, because the printing is where I have evidence.',
  '**B** And what follows from the second half is that the printer\'s apology closes four sites and leaves two, so we need a dispatch list and not a reprint.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The conceded half and the limit in each of the eight. The count: **in three or four of the eight the conceded half is not a point the claimant made** — it is a smaller, safer claim invented by the conceder. ⚠ Test it by asking the claimant, every time: _is that the point you were making?_ The answer is the mark, and it is the only mark in this cycle that matters.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _What I was told: that the lot box is optional because the form says_ where applicable. _My sentence: **I take the point about** where applicable **— it is in the printed form and it is there for the pharmacy-supplied items, which do have no lot number. I do not take it about the ward-supplied items, which all have one on the label.**_',
  '**b** _My partner\'s two halves are two different things: the printed form on one side and the ward items on the other. Mine were not, in the first version — I wrote_ I take the point about the wording, I do not take it about the phrase, _which is the same thing twice, and she stopped on it and asked me what the difference was. I could not say._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar had been told that the pads are a printing problem and not a dispatch problem, and he said the man was probably right. He is not right: he is right about the printing and wrong about the dispatch, and Omar knew it when he said it. Asked why he said it, he said the other thing would have taken four minutes and they had six items left. And then he raised it again the following week from the beginning, which took twenty — which is the arithmetic of the polite concession: you buy four minutes and you pay twenty, and the second time you also have to explain why you agreed before. Hiba said that is what her assessors keep writing about her from the other direction: does not take a position. So the sentence, which is one sentence with two halves: I take the point about the printing; I do not take it about the dispatch. Something real conceded, the limit named, and the discussion still running. Jad asked what is wrong with saying I agree, and the answer is that it ends the discussion — I agree has nothing after it and the task stops, often before it is finished, while I agree about that has a limit in it and the next sentence is already implied. Two words of difference, and one of them ends a meeting. Then the four worth having: the take-the-point one; granted that, which concedes a fact and refuses its consequence and is the strongest; even allowing for, which concedes a whole argument and shows the figure survives it; and the plainest, that is true of the day sheets and not of the night ones. Lubna said the second sounds like an argument, and it is one, and it is polite because the conceded half comes first and in full — the order is not optional. Rim asked what to do when the whole thing is right, and the answer is to say so and say what follows: a full concession is not weakness, but a full concession with nothing after it is.']));
out.push(A('Listener task: the partner\'s concession and limit, and whether they are two different things. ⚠ Collect the pairs where they are **not**, read three of them out, and ask the room what the difference is between the two halves. The silence is the lesson, and it is quicker than any explanation.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _You are quite right._ → **✓** _You are right, and that means the log is the only candidate._ A full concession with nothing after it is the end of your turn.   **✗** _I take the point that these things are difficult._ → **✓** use one of their words. A concession to a point nobody made is heard as a manoeuvre.   **✗** _That does not explain the October sheets, although granted the night staff were not told._ → **✓** concede first, then limit. Reversed, it is a refusal with a courtesy attached.   **✗** _I see what you mean._ → **✓** nothing; it concedes nothing and is heard as agreement.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** She accepts **two of three** — that length is not a fault, and that the piece now says less. She refuses the third: **that length is why the paragraph went.**'));
out.push(A('**2** It contained **two findings** — the supply figure and the pricing figure — and a paragraph with two findings in it is summarised by whichever comes first. His came first and it was the weaker of the two.'));
out.push(A('**3** **The cut was right and the covering line was cowardly** — she cut it at eleven at night and sent the piece at midnight with the word _space_ in the covering line, and the cowardly line is the reason three days were spent on it.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE ELEVEN HANDSETS · what you are right about** · M. Hariri · 7 November',
  'You wrote on Monday to say that the model is a common one, that any counter will see failures of it, and that eleven of fifteen is therefore nothing unusual. **You are right about two of those three.**',
  '**Granted that the model is a common one.** It is the commonest I handle — about a third of what comes over the counter. **That does not explain the batch**, which is where my figure is: eleven of the fifteen carry the same batch number, and the batch is not a third of anything I sell.',
  '**You are also right that any counter will see failures.** It will, and I have had fifteen in seven months and said nothing until the figure stopped looking ordinary to me.',
  '**What I do not take is the third thing: that eleven of fifteen is nothing unusual.** It is unusual in one respect only, and it is the one that costs you nothing to check — they are from one batch.',
  '**Even allowing for the model being common**, the batch number is on the back of all eleven and I have copied them out in the order they arrived.',
  '**What I am proposing, and it is not a claim.** The loading date of batch 11 / 74, from your own sheet. One date.',
  '**And what I shall do differently.** I shall write the batch number down at the counter from now on, in front of the customer, because for the first eleven I wrote it down from memory that evening.',
]));
out.push(S('Stage 7 · Write freely (sample, 211 words)'));
out.push(SAMPLE([
  '**THE 06.15 SHEET · what the office is right about** · T. Ayoub · 7 November',
  'You wrote on Thursday to say that the drivers are not late on purpose, that the printed time is a guide in every depot you have worked in, and that sixty-two mornings in one man\'s notebook is not a basis for reprinting a public sheet. **You are right about two of those three, and I shall take them in order.**',
  '**Granted that nobody is late on purpose.** Nobody is, and I have never written or said otherwise; the six of them are at the depot before six in all weathers. **That does not explain the two readings of the same sheet**, which is what my figures are about and not about anybody\'s timekeeping.',
  '**You are also right that a printed time is treated as a guide in most depots.** It is, and I had not known that, and it is the single most useful thing in your letter. **I accept it and it makes my case narrower rather than weaker.**',
  '**What I do not take is the third thing: that sixty-two mornings in a notebook is not a basis.** It is sixty-two consecutive mornings, written at the time, by the man standing at the door. **It is the only record of any kind that either of us has**, which is an argument about its quality and not about its author.',
  '**Even allowing for the notebook being mine and unofficial**, forty-one of sixty-two is forty-one of sixty-two, and the office has no figure to put against it.',
  '**What I am proposing, and it is not a reprint.** One word on the December sheet: _due_.',
  '**And what I shall do differently.** I shall write the times on the rota where anybody can see them, instead of on the back of my own copy, which is where they have been for three months.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 The claims counted.** You wrote: _"You are right about two of those three, and I shall take them in order."_ The count is in the first paragraph and the reader can see that one of three is in dispute. ✓',
  '**2 A concession in the other person\'s words.** You wrote: _"Granted that nobody is late on purpose."_ _On purpose_ is their phrase, and it is the half of their letter they would most want conceded. ✓',
  '**3 A limit that is a different thing.** You wrote: _"That does not explain the two readings of the same sheet."_ Timekeeping on one side, two readings of a document on the other — two different things and not one thing twice. ✓ — and I would keep _it makes my case narrower rather than weaker_, which is the best sentence in the page.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads their concession and limit as **one sentence**, with the fall-rise on the conceded half, and the room says whether a limit was coming. ⚠ About a third of the class cannot hear it at first. Put the two readings on the board — _I take the point about the **PRIN**ting_ ↘↗ against a full fall — and read them yourself, twice, with no explanation. Close on Omar\'s arithmetic: **four minutes bought and twenty paid**, and the second time he had to explain why he had agreed before.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The page is above. Then: one thing I agreed to this week that I did not actually agree with, and the two-halved sentence I should have said._',
  '_On Tuesday the office said the catch had been reported and dealt with, and I said yes. **What I should have said: I take the point that it was reported — twice, on 14 August and 9 September, and both reports are in the book. I do not take it about dealt with, because the catch is still loose and I put my hand on it this morning.** I said yes because the next item was the rota and I wanted the rota settled. The catch has now been loose for twelve weeks._',
]));

// ===================== 6.3 =====================
out.push(pb());
out.push(h2('6.3  Two minutes, and then one'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and **the order is the whole cycle: they do it once, timed, before anything is explained.** ⚠ Do not shorten this and do not help. A class that is given the four moves first will perform the four moves; a class that has run out of two minutes at the fortieth second will ask for them. Fifteen seconds to read, two minutes to discuss, one minute to decide, with a watch on the desk where everybody can see it.'));
out.push(A('**b** Keeps it moving: **2** and **4** — a specific invitation and a collapse. Dead ends: **1**, **3** and **5**. ⚠ _What do you think?_ belongs in the dead-end list and the class will object to that, because it is the politest sentence of the five. Say why it fails: it hands the partner the whole board, it can be answered with an opinion rather than a move, and in a two-minute task it buys nothing.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — not things to say but **the two minutes**, having spent them agreeing; and the one-minute task is **not a summary** of the discussion but a **decision**, which has to be made and said.'));
out.push(A('**b** **1** Never divide it. _You take the first three and I shall take the other two_ is efficient in a meeting and fatal in Part 3, because two candidates working separate halves are not interacting: the part becomes two monologues with a conjunction between them.   **2** He divided the list — and in a meeting that was the right thing to do.'));
out.push(NOTE('⚠ **The three figures to write on the board before the first run are fifteen, a hundred and twenty, and sixty — the seconds of each phase — because everything that goes wrong in Part 3 is a misuse of one of them.** Fifteen seconds is for reading, and candidates talk through it. A hundred and twenty is for discussing, and candidates agree in forty and then repeat themselves for eighty. Sixty is for deciding, and candidates summarise instead. ⚠ The repairs are all mechanical: read in silence; **open on one option and invite a discard**; and in the minute say one sentence of the form **_so we are agreeing on X and Y, and giving up Z_**. That sentence does the whole minute and it names what is being given up, which is the part candidates leave out and the part the task is testing. **_We could not decide_ is not an answer to the question that was asked**, and it loses a part that may have gone well for three minutes.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(where to keep a record)_ **Open:** _I should start with the decision log, because it is the only one everybody can see._ **Invite:** _which of them would you drop first?_ **Resist:** _I take the point about the minute on the day; I do not take it about the log, because a minute is only seen by the people who were sent it._ **Decide:** _So we are agreeing on the log and the named person, and giving up the review date._',
  '**2** _(how to tell people)_ **Open:** _The handover sheet, because it reaches whoever is on duty._ **Invite:** _which of these two is worse, the noticeboard or the meeting?_ **Decide:** _So we are agreeing on the sheet and the named person, and giving up the noticeboard._',
  '**3** _(who should check something)_ **Open:** _One named person, because_ both _is how nineteen sheets came to be empty._ **Invite:** _would you drop the auditor or the day staff first?_ **Decide:** _So we are agreeing on the named person and the day staff, and giving up the auditor._',
  '**4** _(when to send something)_ **Open:** _The same day, because the driver still remembers the gate._ **Invite:** _which would you drop, the telephone call or the three days?_ **Decide:** _So we are agreeing on the same day and the loading date, and giving up the call._',
  '**5** _(which of two to give up)_ **Decide:** _So we are keeping the field and giving up the log — and we are giving it up because a second book will not be opened with a customer waiting._',
]));
out.push(A('⚠ Mark these on the **invitations** and the **decision sentence** only. Every invitation above asks for a **discard** or a **comparison** — _which would you drop_, _which of these two is worse_ — and neither can be answered with an opinion. And every decision sentence has the same three parts: **what is kept, what is given up, and one reason.** Item **5** is the one to drill, because it is the minute on its own: twenty-six words, and it does everything the task asks for. **A pair who have that sentence by heart cannot fail the minute.**'));
out.push(S('Stage 3 · Practise (sample – Set A)'));
out.push(SAMPLE([
  '**A** _(opening, 15 seconds in)_ I should start with **a minute written on the day**, because it is the only one of the five that costs nothing extra — somebody is in the room already.',
  '**B** _(inviting)_ Which of the other four would you drop first?',
  '**A** The **noticeboard** — there is no noticeboard in the five options, so: the **review date**. A date with nothing attached to it is not a safeguard.',
  '**B** _(resisting, with a reason)_ I take the point about the date on its own; I do not take it about the date **with a figure** — _if more than a quarter are still empty in December_ is a date that does something.',
  '**A** _(collapsing)_ Then can we take **one person made responsible** and **one named person to ask** together? They are the same option from two directions.',
  '**B** _(the minute)_ **So we are agreeing on the minute written on the day and one person made responsible, and giving up the reason recorded, the log and the review date — and we are giving up the log because a thing everybody can see is a thing nobody keeps up.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Which of the four moves each speaker made, and whether the minute produced a decision. The count: **about half the pairs reach the minute with nothing to decide**, having agreed in the first forty seconds, and about half of the rest **summarise instead of deciding**. ⚠ Both faults are curable and neither is about English, which is worth saying to a class that will blame its vocabulary. Run it twice in one lesson and the second figures are always better.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Second run, new partner, other set. **Invitations I made: four** — three asking for a discard and one comparison. In the first run I made one, and it was_ what do you think.',
  '**b** _What my partner gave up in the minute: the noticeboard and the shift meeting, and she said why — that both reach whoever is standing there and nobody else. **What I gave up: nothing, for the first forty seconds**, because I was agreeing with her, and she had to ask me twice which of the five I would drop before I dropped one._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Watches down, and what ran out was the two minutes: Omar\'s pair had agreed by about the fortieth second and then repeated themselves. Which is the commonest thing that happens in Part 3, and it is not a shortage of ideas — nobody runs out of things to say about five options. They run out of two minutes, having spent them agreeing, and the examiner is marking interactive communication, which agreement does not demonstrate. Hiba asked whether that means disagreeing on purpose, and Ms Huda said it means doing the task, which is narrowing with disagreement inside it, in four moves: open on one option with a reason, invite specifically, build or resist with a reason, and at the minute decide, naming what you are giving up. Dima asked what is wrong with "what do you think", and the answer is that it hands your partner the whole board and buys you nothing, where "which of them would you drop first" asks for a discard, and a discard is work. Jad said that in the call with the four editors last December he divided the list — you take three and I shall take two — and in a meeting that is efficient and in Part 3 it is the end of your marks, because two candidates working separate halves are not interacting at all. Lubna asked what to do with a silent partner, and the answer is to ask something that cannot be answered in one word, and never to fill the silence, because a candidate who talks for two minutes alone has failed the thing being measured. Rim asked how many of the five to discuss, and the answer is two or three properly, because all five is twenty-four seconds each and produces nothing. And the minute at the end is a separate task and not a summary: you are asked to decide, the answer must contain a decision made together and said out loud, and "we could not decide" is not an answer to the question that was asked.']));
out.push(A('Listener task: how many **specific** invitations the student made, and what the pair gave up in the minute. ⚠ Collect the invitation counts and write them as a row of figures. In a first run they are mostly nought and one; in a second run mostly three and four. **That row is the most convincing evidence in this unit that the part is trainable**, and it takes thirty seconds to produce.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _You take the first three and I shall take the other two._ → **✓** the whole list belongs to both of you.   **✗** _I agree_ · _yes, exactly_ · _me too_. → **✓** three dead ends in four seconds; concede and limit instead.   **✗** Talking through the fifteen seconds of reading time. → **✓** read in silence; it is the only free thinking in the part.   **✗** _We could not decide._ → **✓** a decision, in words, with what is given up: _so we are agreeing on X and Y, and giving up Z._   **✗** Reporting to the examiner. → **✓** eye line to your partner and _you_ inside the sentence.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That urgent requests go in a separate queue, **and** that whoever marks a request urgent puts their name on it. They are not alternatives because the queue only works if the marking is right: **a limit on a queue that is wrongly filled makes the wrong thing faster.**'));
out.push(A('**2** The **weekly review of the marking**, which he wanted and still wants. He records the condition for bringing it back: **if the names do not fix it by February, the review comes back and he will bring it back.**'));
out.push(A('**3** **A month in which more than a quarter of the requests marked urgent are not urgent** — and he gives the arithmetic: nineteen requests, so a quarter of nineteen.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE OCTOBER SHEETS · what the meeting decided and what it gave up** · R. Barakat · 8 November',
  'Four of us spent half an hour on this on Tuesday and I am writing it down the same evening, because the last one of these came back to us in September remembered three ways. **Five options, two kept, three given up.**',
  '**What we decided.** The lot box is completed on every sheet, and the words _where applicable_ are struck out on the ward\'s copy of the form until the author of the phrase replies. Both, not either.',
  '**What we gave up.** The label, which two of us wanted. The photograph, which one of us wanted. And a second checker at handover, which I wanted and still want.',
  '**Why we gave up the label.** Because the auditor reads the sheet and not the label, and the empty box is the thing that is counted.',
  '**Why we gave up the photograph.** Because nobody could say where the photographs would be kept, and a photograph with no file is a photograph nobody will find.',
  '**Why we gave up the second checker, which I am recording because I lost it.** Because it is four minutes a handover and we have not yet shown that one checker fails when the box is compulsory. **If a quarter of the boxes are still empty in December, it comes back.**',
  '**Who does what.** I strike out the phrase on the ward copy tonight. The day sister tells the day staff at Thursday\'s handover and not in the corridor.',
  '**And what would reopen the whole thing.** More than a quarter of the December sheets with an empty box — eight of thirty-one.',
]));
out.push(S('Stage 7 · Write freely (sample, 208 words)'));
out.push(SAMPLE([
  '**THE PROMISE FIELD · what the second meeting decided and what it gave up** · N. Sabbagh · 8 November',
  'Three of us spent twenty minutes on this on Friday, which is half what the first meeting spent and it produced a decision. I am writing it the same afternoon. **Five options, one kept, four given up.**',
  '**What we decided.** A new field goes on the escalation form in the October release, with the date of the promise in it, and Mr Saqqal signed it off on 7 November.',
  '**What we gave up.** The free-text box and the note on the recording, which are one option. The promise log, which two of us wanted. And asking at month end, which is what we have been doing.',
  '**Why we gave up the box and the recording.** Because neither is searched: the box has four thousand entries and no structure, and the recordings are opened only when there is a complaint, which is after the damage.',
  '**Why we gave up the log, which I am recording because it was the cheap option and cheap options win.** Because eleven of us will not open a second book with a customer waiting. **A cheap thing that is not used costs more than an expensive thing that is.**',
  '**Why we gave up month end.** Because we tried it in March and in June and both times the figure came back about a third of the size of the call notes.',
  '**Who does what.** I write the field specification by 14 November. The template owners put it in the release by 1 December. I tell the other ten at the Thursday briefing.',
  '**And what would reopen the whole thing.** A quarter of the promises still unrecorded in February — ten of forty-one.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 The arithmetic, early.** You wrote: _"Five options, one kept, four given up."_ In the second line, and the reader can do the sum. ✓',
  '**2 A reason on every discard.** You wrote: _"the recordings are opened only when there is a complaint, which is after the damage."_ Four discards and four reasons, none of them a preference. ✓',
  '**3 A reopening condition with a figure.** You wrote: _"A quarter of the promises still unrecorded in February — ten of forty-one."_ ✓ — and converting the quarter into ten is what stops two people measuring it differently.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads their reopening condition and the room tests it: **if two people in the room would measure it differently, it is not a condition but a mood.** ⚠ Expect half the first drafts to fail that test — _if it continues to be a problem_, _if the figures do not improve_ — and the repair is always a number. Close on the sentence of the cycle: **nobody remembers what was given up**, which is why the same five options come back to the same meeting twice a year.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The record is above. Then the timed Part 3 again, with somebody who is not in the class._',
  '_I did it with my brother, on the question of where to keep the family papers, and he is not a candidate for anything. **Two minutes went in about fifty seconds**, because he agreed with my first suggestion and then asked what I thought, and I had nothing ready. In the minute we decided: the two we kept were the one folder and the one named person, and what we gave up was the copy at my uncle\'s, because nobody could say which of the two copies would be the one that was kept up. **He asked me afterwards why I had kept asking him which one he would drop, and I said that is the examination. He said it is also how you get a decision out of our family.**_',
]));

// ===================== 6.4 =====================
out.push(pb());
out.push(h2('6.4  The decision I was not at'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the instruction to **stop at the first of the three you cannot answer** is what makes the point without a word of teaching: most of the class stops at the second and nearly all of them stop at the third. ⚠ Count the stops out loud — _how many of you got past_ who_? how many past_ why_?_ — and write the two figures on the board. They are the cycle.'));
out.push(A('**b** Labelled: **2** and **4** — the first names what the document says and what it does not, the second names what the speaker was told and what they do not know. Unlabelled: **1**, **3** and **5**. ⚠ **5** is the dangerous one: _they obviously thought it was a training problem_ presents an inference as a shared fact, and anybody who disagrees must begin by disputing something that has been called obvious.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **the grounds**; and a supplied reason becomes the official reason within a fortnight, because it is the only reason anybody has.'));
out.push(A('**b** **1** **What** was decided, **who** decided it, and **on what grounds** — and they get harder in that order.   **2** **_It has been decided_** — agentless, so there is nobody to ask for the grounds, and twenty people then explain the paragraph to each other in their own words.'));
out.push(NOTE('⚠ **This cycle and 6.6 are the same finding approached from two sides, and they should be taught as a pair even though a fortnight may separate them.** In 6.4 a decision arrives with no reason attached to it; in 6.6 a decision made in front of you loses its reason within a month. **Both end in an instruction being obeyed for no reason anybody can name**, which is the state most institutional procedure is in, and the class will recognise it in their own workplaces within a minute of being shown it. ⚠ The move to protect in this cycle is the recorded absence. _No originating person is recorded._ · _No reason is recorded._ Students write blanks, or write nothing, and both invite the next reader to fill the gap. **Teach the absence as a sentence**, in bold, with the date of the question that failed to answer it, and the gap stops being a hole.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a change of hours)_ _The notice of 3 November changes the counter hours to 09.00–16.00 from 1 December._ _No originating person is recorded; the notice is unsigned._ _No reason is recorded, and I have asked once, in writing, on 5 November._',
  '**2** _(an extension of something)_ _The minute of 27 October extends the trial to all night staff._ _I do not know who proposed it._ _No reason is recorded._',
  '**3** _(a refusal)_ _The letter of 14 October refuses the exception._ _It is signed by the section, not by a person._ _The reason given is "in accordance with the paragraph", which names a paragraph and not a ground._',
  '**4** _(a new form)_ _The October handover sheet carries a lot box that the September sheet did not._ _No originating office is recorded._ _No reason is recorded, and the phrase_ where applicable _has no author I can find._',
  '**5** _(something stopped)_ _Replacements are no longer issued at the counter, from 1 November._ _I was told on the ninth, by the office, and I do not know who decided it._ _No reason is recorded, and I have not yet asked._',
]));
out.push(A('⚠ Item **3** is the one to teach from, because it shows the commonest disguise: **a reason that names a paragraph is not a reason.** _In accordance with the paragraph_ tells the reader where the decision came from administratively and nothing at all about its grounds, and it is the sentence that makes an appeal impossible. Item **5** is worth a minute for its last clause — _and I have not yet asked_ — which is honest, uncomfortable and the thing most students leave out. **Writing down that you have not asked is what makes you ask.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the decision, as written)_ _The trial is extended to all night staff._',
  '**B** **What:** the double-check on the fourth night, which has run since 1 February, now applies to all night staff. **Who:** no originating person is recorded — the minute is unsigned and names four posts and no people. **Grounds:** no reason is recorded.',
  '**A** _(the question)_ And when does it end?',
  '**B** I do not know, and I would find out by asking the author of the minute, once, in writing — and I would ask for the **condition** and not for the date, because the trial was to run until the figures were in and nobody has said what figures.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three labels for each of the eight, and where the absence was. The count: **six or seven of the eight name nobody**, and in all eight the grounds are missing. ⚠ And the finding that matters: **about half the reporters filled the grounds line with an inference** rather than writing that it was empty. Go round the room and ask each of those students where their reason came from. The answer is always the same — _it is what everybody says_ — and that is the mechanism of the cycle, demonstrated by the class on itself.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**What:** the notice of 3 November moves the counter hours to 09.00–16.00 from 1 December. **Who:** no originating person is recorded; the notice is on the shop\'s letterhead and unsigned. **Grounds:** no reason is recorded. I have asked once, in writing, on 5 November, and I shall write the answer here._',
  '**b** _My partner had supplied a motive without noticing: she wrote_ the ward wanted the sheets tidier. _Asked where it came from, she said the day sister had said something like it in a corridor in October. **So the grounds line in her report was a remark overheard a month earlier**, and she had written it as though it were in the minute._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mrs Barakat was not there and sent a page in. Her decision is the minute of 27 October: the trial is extended to all night staff. Eleven words. Tareq gave the three questions — what was decided, who decided it, and why — and they get harder in that order: what you can almost always find out, who you can sometimes find out, and on what grounds you can almost never find out, which is the one you need, because you are the person who has to carry it out and explain it to eleven others. Omar asked whether the minute says why, and it does not: it has no person in it and no reason in it, and she has to brief twenty-two people and cannot tell them why. Lubna said so she invents a reason, and that is exactly what happens if nobody stops it — a decision without a reason is hard to carry out, so whoever carries it out supplies one, and within a fortnight that is the official reason, because it is the only reason anybody has. A supplied reason is not a guess that stays a guess. Adnan said the directorate writes "it has been decided" and then the paragraph, which is Unit 2 arriving where it does the most damage: there is no agent, so there is nobody to ask for the grounds, and twenty people explain the paragraph to each other in their own words. Yara asked what to do when you genuinely do not know who, and the answer is to write that — no originating person is recorded — which stops you inventing one and tells the next reader the question has been asked. An absence that is recorded is evidence; an absence left blank is a hole somebody will fill. Rim asked whether Rasha should ask, and the answer is once, in writing, and then record the answer or the absence of one. Not three times, and not in a corridor, because a question asked in a corridor produces an answer nobody can quote.']));
out.push(A('Listener task: the place where the partner **supplied** something, and what they supplied. ⚠ Collect every one and read six aloud as a list of inventions — _a worry about the fourth nights · a wish for tidier sheets · pressure from the ministry · a complaint nobody has seen_. The list is the cycle, and every item on it was written in good faith by somebody in the room.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _It was decided because of the errors._ → **✓** _No reason is recorded._ The first is an invention and will be quoted back to you as fact.   **✗** A blank where the grounds should be. → **✓** a sentence. A blank is filled in by the next reader.   **✗** _They obviously thought…_ → **✓** _I do not know what they thought._ _Obviously_ presents an inference as a shared fact.   **✗** Asking three times, in corridors. → **✓** once, in writing, with the date recorded. An answer nobody can quote is not an answer.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** **What** was decided, **who** decided it, and **on what grounds** — and two of the three are absences: _no originating person is recorded_ and _no reason is recorded_.'));
out.push(A('**2** She was about to tell the twenty-two that it was **because of the seven errors**. Nobody has told her that. **She would have been the author of it, and by December it would have been the reason.**'));
out.push(A('**3** Two things: she cannot tell the twenty-two **why**, so they will decide why among themselves; and she cannot tell anybody **when it ends** — the trial was to be reviewed when the figures were in, and **a trial extended for an unrecorded reason has no condition for stopping.** The second matters more, because it turns a temporary measure into a permanent one without anybody deciding to.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE COUNTER HOURS · what I can carry out and what I cannot explain** · M. Hariri · 9 November',
  'This is for the shop and for the next person at this counter. I am telling about forty regular customers next week and I am writing down first what I know and what I do not.',
  '**What was decided.** The notice of 3 November reads, in full: _the counter will be open from 09.00 to 16.00 with effect from 1 December._ Sixteen words.',
  '**Who decided it.** **No originating person is recorded.** The notice is on the shop\'s paper and unsigned. I have asked once, in writing, on 5 November.',
  '**On what grounds.** **No reason is recorded.** And I was going to tell the customers it was because the late hour is quiet. **Nobody has told me that.** I believe it because I am the one standing here at half past five, and believing it is not the same as being told it.',
  '**What I can carry out without the grounds.** All of it. I open at nine and I close at four.',
  '**What I cannot do without the grounds.** I cannot tell the eleven customers who come after four what to do instead, and I cannot tell anybody whether it is for the winter or for good.',
  '**What I am asking for, and it is one line.** The reason, and whether it is seasonal.',
  '**And if no reason comes.** Then I shall say: _the notice of 3 November changes the hours; no reason is recorded; I have asked._',
]));
out.push(S('Stage 7 · Write freely (sample, 213 words)'));
out.push(SAMPLE([
  '**THE OCTOBER RELEASE · what I can carry out and what I cannot explain** · N. Sabbagh · 9 November',
  'This is for the eleven of us who take the escalation calls, and for whoever decided the release. I am briefing the eleven on Thursday and I am writing down first what I know and what I do not.',
  '**What was decided.** The release note of 1 November reads, in full: _the promise field has not been included in this release._ Twelve words, and it is the whole of what we have been told.',
  '**Who decided it.** **No originating person is recorded.** The release note is issued by the template office and signed by nobody. I have asked once, in writing, on 3 November, and I shall write the answer in this paragraph when it comes.',
  '**On what grounds.** **No reason is recorded.** And here is what I was going to tell the eleven, because I had the sentence ready: that the release was full. Nobody has told me that the release was full. **I was about to invent the one explanation that makes everybody feel better, and by December it would have been the reason, and it would have been mine.**',
  '**What I can carry out without the grounds.** All of it. There is no field, so we go on writing promises in the free-text box, which is what we did in October.',
  '**What I cannot do without the grounds.** I cannot tell the eleven whether to go on asking, and I cannot tell them whether to keep their own notes. **If the field was refused on cost it will come back; if it was refused on principle it will not, and the eleven should start keeping notes.** Those are two different instructions and I have no way of choosing between them.',
  '**What I am asking for, and it is one line.** Whether the refusal is about this release or about the field.',
  '**And if nothing comes.** Then I shall say the three sentences above to the eleven, and ask them to keep notes until February.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 The decision quoted in full, with its word count.** You wrote: _"The release note of 1 November reads, in full: the promise field has not been included in this release. Twelve words."_ ✓',
  '**2 The absences written as sentences.** You wrote: _"No originating person is recorded."_ and _"No reason is recorded."_ Both as sentences, both with the date of the question you asked. ✓',
  '**3 The supplied reason admitted.** You wrote: _"I was about to invent the one explanation that makes everybody feel better, and by December it would have been the reason, and it would have been mine."_ ✓ — that is the strongest sentence in the page and I would not change a word of it.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads **the sentence they will say if no reason comes**. The room says whether it is a poor sentence, and most of them are. ⚠ Do not improve them. The point of the stage is that the honest sentence is worse to say than the invented one, and that it is still the right one. Close on Rasha\'s line: **it is a poor sentence to say to twenty-two people and it is better than the one I was going to invent.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The page is above. Then: the reason I have been giving people, and where I got it._',
  '_**The reason I have been giving:** that the late hour is quiet. **Where I got it:** from myself, in about September, standing at the counter at half past five with nobody in the shop. I have said it to four customers and to my brother, and one of those customers has repeated it back to me as something the shop had decided. **It took two months and four conversations for a thing I thought at half past five to become a decision somebody else can quote.**_',
]));

// ===================== 6.5 =====================
out.push(pb());
out.push(h2('6.5  Five lines somebody can act on'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the swap is the whole of it: the partner who was **not** there says what they would do on Monday morning. ⚠ In about half the cases they can say nothing, and the figure should be counted and written up, because every student in the room believes their own record is clear. **It is the only stage in the book where a student discovers a fault in something they wrote before the lesson began.**'));
out.push(A('**b** Actionable: **2** and **4** — a thing that starts on a date, and a named person doing a thing by a time. Not actionable: **1**, **3** and **5**. ⚠ Read **5** twice — _the position on replacements was clarified_ — and ask what a reader would do on Monday. Nothing: it is a sentence about a meeting, and the test is whether the sentence is about a Monday.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — could somebody who was not there act on it on Monday morning; and the four failures are **no agent, no actionable verb, no discards and no date**.'));
out.push(A('**b** **1** That it has all four failures in eleven words: no agent (_agreed by whom?_), no actionable verb (_looked at_ is not something a person does on a Monday), no discards (the meeting refused two things and neither is in it) and no date.   **2** He read his own record back in the car and **could not act on it himself**.'));
out.push(NOTE('⚠ **If time is short, this is the cycle to protect: the five lines are the most portable thing in this book.** One: the decision, with a verb somebody can do. Two: who decided it, and when. Three: what was ruled out, and why. Four: who does what, by when. Five: what would reopen it. **Lines three and five are the two nobody writes**, and they are the two that stop the meeting happening again and stop the decision being reopened by whoever is most annoyed. ⚠ Teach the verb test physically, because it is memorable and it works: **could you stand in a doorway and watch somebody do this?** _Changes one word on the sheet_ — yes. _Reviews the position_ — no, and it is Unit 2\'s nominalisation arriving in the one place where it costs a Monday. Go round the room with that question on every line-one verb and refuse every answer that cannot be watched.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(something that stops)_ **The decision:** _Replacements stop being issued at the counter from 1 December._ **Who:** _the office, at the meeting of 9 November._ **Ruled out:** _issuing against a signature — the signature was never checked._ **Who does what:** _Mazen puts the notice on the counter by 25 November._ **Reopens:** _more than four customers a month turned away._',
  '**2** _(something that starts)_ **The decision:** _The lot box is completed on every sheet from 15 November._ **Who:** _the ward sister, 8 November._ **Ruled out:** _the label, because the auditor reads the sheet._ **Who does what:** _the day sister tells the day staff at Thursday\'s handover._ **Reopens:** _eight of thirty-one December sheets still empty._',
  '**3** _(something refused)_ **The decision:** _The promise field is not in the October release._ **Who:** _not recorded — see 6.4._ **Ruled out:** _nothing is recorded as ruled out, which is why nobody knows whether it was cost or principle._',
  '**4** _(something postponed)_ **The decision:** _No decision was reached on the second trolley; the question returns on 20 November._ **Who:** _the ward meeting of 2 November._ **Ruled out:** _nothing yet._ **Who does what:** _Rasha puts it on the agenda by 18 November._',
  '**5** _(something nobody decided)_ **The record:** _the stated range was discussed on 6 November and no decision was reached. The question returns when the author of the range replies._ ⚠ **Which is a record, and _the matter was discussed_ is not.**',
]));
out.push(A('⚠ Item **3** is deliberately incomplete and the class should be made to notice it: a record whose line three is empty is the document that produced the whole of 6.4. Items **4** and **5** are the two to insist on, because students believe that a meeting which decided nothing cannot be recorded. **It can, and the record is one sentence with a date in it.** _No decision was reached; the question returns on 20 November._ A class that learns only that sentence has had value from the cycle.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the poor record)_ _The position on replacements was clarified._',
  '**B** Failures: **all four** — no agent, no actionable verb, no discards, no date. The decision line should be: **_Replacements stop being issued at the counter from 1 December; the office decided it on 9 November._**',
  '**A** On Monday I would **put a notice on the counter and send the next one to the office**.',
  '**B** And the line that is still missing is **line three** — what was ruled out. The meeting refused issuing against a signature, and nobody reading this will ever know that it was considered.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The four failures marked for each of the eight, and the rewritten decision line. The count: **all eight have no agent and no date**, and seven of the eight have no actionable verb. ⚠ And the discards are missing from all eight, which is the failure nobody notices — **a record cannot look as though something is missing from it**, which is why line three has to be a habit rather than a judgement.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**1** The six drivers are expected at the depot by 06.05 from 1 December. **2** Mr Saqqal, at the meeting of 10 November. **3** Ruled out: a new timetable, because forty-one mornings at 06.20 is not an argument for a 06.20 service; a note at the door, because the people who need it are on the bus. **4** The printer sets_ due 06.15 _by 24 November; the office adds the 06.05 line to the rota by 24 November. **5** More than a quarter of services leaving more than five minutes late in a month — sixteen of sixty-two. **The verb in line one is_ are expected_, and you cannot watch somebody do that, so it becomes:** the six drivers sign the rota at the depot by 06.05.',
  '**b** _I read my partner\'s aloud. I looked up at line four, because it says_ the office adds the line _and there are two people in the office. **The line I would have acted on wrongly is the one I would have assumed was somebody else\'s.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Records were swapped with somebody who had not been at the meeting, and Omar had Rim\'s. Asked what he would do on Monday morning, he said nothing: it says the position on replacements was clarified. What had actually been decided was that she stops issuing replacements at the counter and sends them to the office from the first of December — which is a decision, and it was not in her record. The position was clarified is a sentence about a meeting, and a record has to be a sentence about Monday. Which is the test for the whole cycle: could somebody who was not there act on this? Omar said his own was no better — he read it back in the car and could not act on it: it was agreed that the matter of the pads would be looked at. Four failures in eleven words, and they are the four failures of every poor record. No agent, because agreed by whom. No actionable verb, because looked at is not a thing a person does on a Monday. No discards, because the meeting refused two things and neither is there. And no date. Repair all four and you have five lines: the decision with a verb somebody can do, who decided it and when, what was ruled out and why, who does what by when, and what would reopen it. Tareq said line three is the one nobody writes, and it is the line that saves the meeting from happening again; line five is the one nobody has heard of, and it stops a decision being reopened by whoever is most annoyed. Yara asked what makes a verb actionable, and the answer is that you can watch somebody do it: changes one word on the sheet you can watch, reviews the position you cannot, because that is a nominalisation wearing a verb. And Hiba asked what to write when the meeting did not decide, and the answer is to say so with a date: no decision was reached on the queue, and the question returns on 20 November. Adnan said the directorate\'s minutes are all of the second kind, and Ms Huda said so are everybody\'s, which is why the five lines are worth having by heart — a record that fails the test is not a weak record but a record of an occasion. And the last thing was about reading it out, which is to somebody who was not there, always, and before you send it, because the place where they look up is the line you have to rewrite.']));
out.push(A('Listener task: the line where the reader **looked up**. ⚠ Collect them and count by line number. It is almost always line one (the verb) or line four (which of two people), and those two counts tell the class where to spend its attention for the rest of the course. **The look-up is a better test than any checklist, because it happens before the reader can be polite about it.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _It was agreed that the matter would be looked at._ → **✓** all four repairs: agent, actionable verb, discards, date.   **✗** _Reviews the position._ → **✓** a verb you can watch. _Reviews_ is a nominalisation wearing a verb.   **✗** _The discussion was wide-ranging._ → **✓** _No decision was reached; the question returns on 20 November._   **✗** Line four naming an office rather than a person. → **✓** a person, or the first reader will assume it is somebody else.   **✗** _Reopens if it continues to be a problem._ → **✓** a figure.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** **Mr Saqqal**, at the meeting of 10 November, on the recommendation of the depot office. And of his own part he writes **_not me_** — he brought the sixty-two mornings and did not propose the wording, and he says why he is putting that in: a record in which he had decided it would be argued with by at least two of the eight.'));
out.push(A('**2** A new timetable with later times; a note at the door; and telling the six drivers and changing nothing on paper. The reason for the third: **that is what has been done twice and the readings are still two.**'));
out.push(A('**3** **A month in which more than a quarter of the services leave more than five minutes after the printed time** — **sixteen mornings of sixty-two**, counted on the rota and not in his own book.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE EMPTY LOT BOX · decision record** · R. Barakat · 10 November',
  '_Ward meeting, 8 November, present: the ward sister, the day sister, two staff nurses, me. Written the same evening and circulated to the five of us and to the pharmacy._',
  '**1 The decision.** The lot box is completed on every handover sheet from **15 November**, and the words _where applicable_ are struck through on the ward\'s copy of the form until the author of the phrase replies.',
  '**2 Who decided it, and when.** The ward sister, at the meeting of 8 November. **Not me** — I brought the nineteen sheets and I asked for the phrase to be struck out, which was refused and then agreed in a narrower form.',
  '**3 What was ruled out, and why.** The label: ruled out because the auditor reads the sheet, and the empty box is the thing that is counted. A photograph: ruled out because nobody could say where photographs would be kept. A second checker at handover: ruled out because it is four minutes a handover and we have not shown that one checker fails when the box is compulsory.',
  '**4 Who does what, by when.** I strike the phrase on the ward copy tonight. The day sister tells the day staff at Thursday\'s handover, and not in the corridor. I write to the author of the phrase by **14 November**.',
  '**5 What would reopen it.** More than a quarter of the December sheets with an empty box — **eight of thirty-one**. I count them on 2 January.',
  '**And one line that is not a decision.** Nineteen of thirty-one, for a month, and the sheets were audited twice while it was true.',
]));
out.push(S('Stage 7 · Write freely (sample, 201 words)'));
out.push(SAMPLE([
  '**THE HANDSET HELD · decision record** · M. Hariri · 10 November',
  '_At the counter, 4 November, present: the customer and me. Written the same evening, in the fault book, and a copy of the three lines given to him on the docket._',
  '**1 The decision.** I hold handset 11 / 74 / 09 at the counter for **fourteen days from 4 November**, and I telephone him on the fourteenth day whether or not the batch date has come.',
  '**2 Who decided it, and when.** The two of us, at the counter, on 4 November. There is nobody else in it and no office.',
  '**3 What was ruled out, and why.** A replacement now: ruled out because I have had three replacements back inside a fortnight and I said so and he accepted it. Sending it to the distributor: ruled out because it would be away for a month and he uses it for work. **Nothing at all until the batch date comes: ruled out by him, and he was right.**',
  '**4 Who does what, by when.** I telephone him on **18 November**. He brings the docket. If the batch date has not come by then, I write to the distributor again that afternoon and tell him I have.',
  '**5 What would reopen it.** A second fortnight. If the date has not come by 18 November I am not asking him for another fourteen days — I replace it and argue with the distributor myself.',
  '**And one line that is not a decision.** This is the first one of these I have ever written, and it took four minutes, and I have made ten others this fortnight that are not written anywhere.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 An actionable verb in line one.** You wrote: _"I hold handset 11 / 74 / 09 at the counter for fourteen days from 4 November."_ _Hold_ — you can stand in a doorway and watch it. ✓',
  '**2 The decider named, with the date.** You wrote: _"The two of us, at the counter, on 4 November. There is nobody else in it and no office."_ ✓ — and the second sentence is worth keeping, because it stops a reader looking for an authority that does not exist.',
  '**3 A figure in line five.** You wrote: _"If the date has not come by 18 November I am not asking him for another fourteen days — I replace it."_ A date and a consequence. ✓',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Every record goes to somebody who was **not** at that meeting, who reads line one aloud and says what they would do on Monday. ⚠ If they cannot, the line goes back **and is rewritten in the lesson**, not at home: the repair is always the verb and it takes about twenty seconds once the fault is named. Close on Ms Huda\'s sentence: **a record that fails the test is not a record of a decision; it is a record of an occasion.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The record is above and it went to one person who was not there. The first question they asked._',
  '_It went to my brother, who has never been in the shop on a Tuesday. **His first question was: what happens if he does not come on the eighteenth?** Which is not in the five lines anywhere. So line five has a second half now — if he does not come on the eighteenth I hold it for a further fortnight and write to him, and after that it goes in the back with a date on it. **The line I left out was the one about the other person failing to do their part**, and I had written four lines about mine._',
]));

// ===================== 6.6 =====================
out.push(pb());
out.push(h2('6.6  The one that was never written down'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the second half of the instruction does the work: **who has since remembered it differently from you, and what do they say it was?** ⚠ Where nobody has, ask how long ago the decision was, and in about half the cases it is under a month — which is the finding, and it should be said in figures: **the disputes are not in the old decisions.** They are in the ones made three weeks ago, because three weeks is long enough for two people to have rehearsed two versions.'));
out.push(A('**b** Could be settled by a record: **1**, **3**, **4** and **5** — a promise, two accounts of one agreement, an unassigned action, and a limit remembered two ways. **2** could not: a record does not help somebody who does not remember being at the meeting, and it is worth saying so, because it marks the limit of the cycle. ⚠ A record is not a memory aid. **It is evidence about a limit.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — it is **re-decided by whoever remembers it best**, which is usually whoever has most at stake; and Mazen finds that he made eleven decisions at the counter in a fortnight, wrote none of them down, and three are now disputed.'));
out.push(A('**b** **1** **Memory is not evidence.** You were there, you are right, and being right without a record puts you in exactly the position of somebody who is wrong.   **2** That they fall apart in an order: the instruction survives longest, the reason goes within a month, then the limit, and who decided it goes when that person leaves.'));
out.push(NOTE('⚠ **The finding of this cycle is not that people lie, and a teacher who lets the class reach that conclusion has lost it.** Mazen\'s customer is honest: he has rehearsed _a week_ every day for a fortnight because a week is what he needs, and Mazen has rehearsed nothing, because he has eleven of these and the customer has one. **It is interest wearing memory\'s clothes.** Say it in those words and then give the harder half: _memory is not evidence_. Being right without a record puts you where a man who is wrong would be, and nine years at a counter had not shown Mazen that. ⚠ The remedy to drill is the **three lines at speed** — decision, limit, date — and the sentence that makes them possible: _let me write that down so that neither of us has to remember it._ Make the class say it aloud four times in Stage 7R, to four different people. **It stops feeling like an accusation at about the fourth go, and that is the only obstacle there has ever been to writing these things down.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(something held)_ _Handset held. Fourteen days. From 4 November._',
  '**2** _(something lent)_ _Second trolley lent to this ward. Until the February figures. From 9 November._',
  '**3** _(something promised)_ _Two pads promised to the two sites. By the end of the month. Said on 10 November._',
  '**4** _(something refused for now)_ _Exception refused for this consignment only. Until the loading date is known. 10 November._',
  '**5** _(something agreed in a corridor)_ _Stated range to be confirmed by its author. One line, in writing. Asked for on 6 November._',
]));
out.push(A('⚠ Mark these on the **middle** line. The decision and the date are easy and everybody writes them; **the limit is the line that goes missing and the limit is the whole reason for writing it down.** Item **2** is the one to read out, because its limit is a **condition** and not a date — _until the February figures_ — and a condition is harder to write and more useful, since a date can be met while the thing it was for is still unsettled. Item **5** is the corridor case, and the class will say that nothing was decided there. Something was: somebody agreed to do something, and three lines turn a corridor into a record.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the decision, out loud)_ _I will hold the handset while you find the batch date._',
  '**B** _(three lines, ten seconds)_ **Handset held. Fourteen days from 4 November. Telephone him on the eighteenth.**',
  '**A** In a month that limit would have become **a week**, because he is the one waiting and he will have said _a week_ to himself about fourteen times.',
  '**B** And the person who would have remembered it that way is **the customer** — not dishonestly, and not in a way I could have argued with.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three lines for each of the eight, and what the limit would have become. The count: **in seven or eight of the eight the limit moves in the speaker\'s own favour** — the fortnight becomes a week when you are waiting and a month when you are holding. ⚠ Nobody in the room is being dishonest, **and that is the finding**: ask the class to say which way their own limits would move, and the honesty of the answers is what makes the cycle land.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Decisions with a limit in them, made out loud in the last fortnight: eleven. Written down: none. Now disputed: three.** A limit means a number of days, a number of handsets, a date, or a person._',
  '**b** _My partner\'s disputed one is the two pads. The three lines she should have written: **Two pads promised to the two sites. By 30 November. Said on 10 November to Mr Saqqal.** Read aloud it takes six seconds. The dispute is about whether she said the end of the month or the end of the week, and six seconds on 10 November would have ended it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mazen\'s decision was made at a counter, between him and a customer, on a Tuesday: they settled on his holding the handset for a fortnight while he waited for the batch date. The customer says they agreed a week, and it is now the fifteenth day and the customer is in the shop. Asked who is right, Mazen said he is, and that he cannot show it. Which is the whole of the cycle: an unrecorded decision is not forgotten, it is re-decided, by whoever remembers it best — and whoever remembers it best is almost always whoever has most at stake, because they have been thinking about it every day and you have not. Omar said that is not memory but interest, and Ms Huda said it is interest wearing memory\'s clothes, and that the customer is not lying: he has rehearsed a week for a fortnight because a week is what he needs. And the part that costs most is that memory is not evidence — you were there, you are right, and being right without a record puts you in the position of somebody who is wrong. Then Mazen gave his count: eleven decisions at the counter in a fortnight, none written down, three now disputed. Dima said they fall apart in an order: the instruction stays because somebody has to carry it out, the reason goes within a month, then the limit goes — how long, how many, until when — and the last thing to go is who decided it, which goes when that person leaves. Which is 6.4 from the other end, because both roads end in an instruction being obeyed for no reason anybody can name. Rim asked what the remedy is, and it is five lines for anything with a limit in it, within the hour, because the limit is the first thing your own memory rounds off and it rounds it off in your favour without telling you. Tareq asked how that is done at a counter with a customer waiting, and the answer is three lines on the back of the docket and the full five that evening: the decision, the limit and the date. Handset held, fourteen days, from 4 November. Nine words, written in front of the customer, and the fifteenth day never happens. Lubna said the difficult part is doing it in front of them, and Ms Huda said it is also the cheapest apology available — let me write that down so that neither of us has to remember it — and that nobody has ever been offended by it.']));
out.push(A('Listener task: the student\'s three figures — decisions with a limit, written down, now disputed. ⚠ Put all twelve sets on the board as a column of triples. The middle figure is nought for nearly everybody, and the third is one, two or three. **That column is the argument for the whole unit and the class has produced it about itself in four minutes.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _We agreed I would hold it for a while._ → **✓** a number. _A while_ is a limit that both parties will remember in their own favour.   **✗** Writing it up that evening instead of within the hour. → **✓** within the hour; the limit is the first thing your own memory rounds off.   **✗** _I will write this down because people forget._ → **✓** _let me write that down so that neither of us has to remember it._ The first is an accusation and the second is an offer.   **✗** Three lines with no date. → **✓** the date is the line that makes the other two evidence.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** **Every decision with a limit in it that he made out loud at the counter between 26 October and 9 November** — and he defines a limit before he counts: a number of days, a number of handsets, a date, or a person.'));
out.push(A('**2** **It moved against him in every case**, and the reason is not dishonesty: the customer who is waiting rehearses the short version every day for a fortnight, and Mazen rehearses nothing, because he has eleven of these and the customer has one.'));
out.push(A('**3** **That being there was worth something.** He was at all eleven, he is right about all three, and being right without a record puts him exactly where a man who is wrong would be — which he had never once thought about in nine years at that counter.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**NINE, NONE, TWO** · R. Shaaban · 11 November',
  'This is for me and for whoever signs the refusals after me. I counted something on Sunday and the figures are the heading.',
  '**What I counted.** Every decision with a limit in it that I made out loud — on the telephone or at the gate — between 26 October and 9 November. A limit means a number of days, a date, a number of pallets, or a person. **Nine. None written down. Two now disputed.**',
  '**The two.** The yard that says I gave them until the end of the week to send the loading date, where I said the end of the month. And the driver I told I would not send the refusal until the yard had been telephoned — he says I said I would telephone, and I said somebody would.',
  '**What I notice about both.** **The limit moved towards whoever had to do something.** Not because anybody lied: the yard had a week in its head because a week was what it feared.',
  '**What I had believed.** That a telephone call with two people on it is a record. It is two records, and they do not match.',
  '**What I am doing from Monday.** Three lines in the day book as the call ends, before the next one: the decision, the limit, the date.',
  '**And the sentence I was afraid of.** _Let me write that down so that neither of us has to remember it._ I have said it twice on the telephone and both times the other person waited while I wrote.',
  '**What I shall count next.** The same fortnight in December.',
]));
out.push(S('Stage 7 · Write freely (sample, 209 words)'));
out.push(SAMPLE([
  '**SEVEN, ONE, TWO** · L. Sweidan · 11 November',
  'This is for my own file and for the two site meetings I attend. I counted on Sunday and the figures are above.',
  '**What I counted.** Every decision with a limit in it that was made out loud in my hearing, by me or to me, between 26 October and 9 November. A limit means a date, a number of drawings, a stage of work, or a named person. **Seven. One written down. Two now disputed.**',
  '**The two.** The joint, which I believe was to be photographed before closing up and which he believes was to be photographed only if it differed from the 1974 detail. And the first-floor drawings, which I understood were to come to me before issue — he says before **final** issue, and three have gone out.',
  '**What I notice about both.** **The limit moved towards the person who had the work to do**, and in both cases that was not me. A condition — _if it differs_, _before final issue_ — is remembered by the person it protects.',
  '**What I had believed, and this is the uncomfortable part.** That being the one with the drawings made my account the official one. It does not. **The drawings are evidence about the building and about nothing that was said in a room.**',
  '**What I am doing from Monday.** Three lines in the site diary before I leave the site, and a photograph of the page sent to whoever was in the conversation. Twenty seconds.',
  '**And the sentence I was afraid of.** _Let me write that down so that neither of us has to remember it._ Said once, on Tuesday, to a contractor, who said that he wished somebody had said it in September.',
  '**What I shall count next.** The same fortnight in December, and the target for the third figure is nought.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**1 Three figures in the title.** You wrote: _"SEVEN, ONE, TWO"_. In the heading, and the reader has the whole page before the first sentence. ✓',
  '**2 The limit defined before the count.** You wrote: _"A limit means a date, a number of drawings, a stage of work, or a named person."_ ✓ — and defining it in your own trade\'s terms is what makes the figure unarguable in a fortnight.',
  '**3 A second count, with a date and a target.** You wrote: _"The same fortnight in December, and the target for the third figure is nought."_ ✓ — the target is what makes it a count and not a resolution.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('The class says the sentence aloud — _let me write that down so that neither of us has to remember it_ — **four times, to four different people**, and the point is the fourth. ⚠ It stops feeling like an accusation at about the fourth go, and that feeling is the only obstacle there has ever been to writing these things down. Close on Mazen\'s arithmetic: **eleven, none, three** — nine years at a counter, and the first count was last Sunday.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_The page is above. Then: the three lines for the next decision I made out loud, written in front of the person, and what they said._',
  '_At the counter on Thursday: **Handset held. Ten days from 14 November. Telephone on the twenty-fourth.** Written on the back of the docket while he watched. **What he said: "put the date bigger."** Then he took a photograph of it with his telephone, which had not occurred to me, and which means there are now two copies of a decision that would have had none._',
]));

// ===================== 6.7 =====================
out.push(pb());
out.push(h2('6.7  Review & Mediate: Two people who agree and cannot tell'));
out.push(S('Stage 1 · Get ready – Unit 6 quiz'));
out.push(A('**1** _That **rules** out the free-text box._   **2** _I take the point about the cost; I do not take **it** about the time._   **3** _**Granted** that the night staff were not told, that does not explain the sheets._   **4** _Even **allowing** for the reprint, forty-one is forty-one._   **5** _The decision is that Tareq **changes** one word by 20 November._   **6** _No originating person **is recorded** in the minute._'));
out.push(A('⚠ Items **5** and **6** are the two that matter and they fail in opposite directions. **5** is a record with an infinitive in it — _the decision is that Tareq to change_ — which students write because it feels like the language of minutes; the repair is a present-tense verb somebody can be watched doing. **6** is the passive that has to stay passive: _no originating person records_ is grammatical nonsense and _no originating person is recorded_ is the sentence the whole of 6.4 is built on. **Spend the time on those two and let the first four go quickly.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Open — the six pairs are read as they were sorted, with the note under the sixth.'));
out.push(A('**b** Five of the six have records that **say something and do not say what was decided** — _discussed, confirmed, raised_ — and the sixth was written down the same afternoon. And a mediator must **not decide**: three moves and not four, because a mediator who decides has become a third version.'));
out.push(NOTE('⚠ **The sentence this unit has been building towards is in this dialogue and it should be written on the board and left there: _a decision is not a moment; it is a sentence._** Yara\'s pair had no meeting at all, only a corridor, and the honest finding is that there was no decision — two intentions that happened to be in the same place. ⚠ The second thing to protect is the kindness of that finding, because the class will hear it as harshness. The alternative to _there was no decision_ is a fortnight in which each party believes the other has broken an agreement. **Nobody broke anything; there was nothing to break.** Say the sentence out loud and ask the room which of the two conversations they would rather have. ⚠ And note the third move, which is the one that gets skipped: **naming the one thing that would settle it.** In both Stage 3 pairs that thing **already exists** — the February figures and the service book — which is the same finding as Unit 4.7, where the answer was on the back of the sheets.'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7: the Language box here **tests** rather than drills, and the testing is done in Stage 3 on two pairs of accounts the class has not seen.'));
out.push(S('Stage 3 · Practise (sample – Pair A)'));
out.push(SAMPLE([
  '**What the night sister thinks was agreed.** _"The trial runs until the February figures are in."_',
  '**What the day staff think was agreed.** _"The trial runs until it is reviewed, and nobody has reviewed it."_',
  '**What the record says.** _"The trial was extended."_ — which settles one thing: **the trial was on the table on 27 October**, so nobody can say the question was never raised.',
  '**Why both accounts are honest.** The night sister went away and went on collecting figures, because figures are what she was asked for in February. The day staff went away and waited for a review, because a review is what was promised when the trial began. **Each kept the version that fitted what they then did.**',
  '**The one thing that would settle it.** The **February figures** — and they exist, in the ward file, and neither party has looked at them since the minute was written.',
  '**And what I am not doing.** Deciding. Both readings are possible because the record does not say which, and a third reading would not make it say.',
]));
out.push(A('⚠ On **Pair B** the arithmetic is the same from a different trade. The driver thinks the catch was to be looked at **before the August run**; the yard thinks **when the vehicle was next in for service**. The record says _the catch was reported_, which settles that it was reported on 14 August — and the settling thing is the **service book**, which exists and has the date of every visit in it. **In both pairs the settling document is already in the building**, and in both pairs nobody has opened it, because both parties have been arguing about what was said rather than about what can be checked.'));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three moves for each pair, and whether the mediator stopped at three. The count: **about half the mediators make a fourth move and decide** — usually in the last four words and usually in favour of the party who spoke second. ⚠ Read the fourth moves back to the class verbatim; they are almost always a short clause beginning _so really_ or _I think probably_, and hearing them is enough to stop them. And in **both** pairs the settling thing already exists, which is the finding to carry into the Mid-Book Test.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**My pair, given to a partner who had seen neither.** Mine: the contractor would photograph the joint before closing up. His: the joint would be photographed if it differed from the 1974 detail. The record: "the first-floor joint was discussed."_',
  '_**What my partner did well.** She quoted both of us without softening either, and she found the honest reason for both: I went away and waited for a photograph, and he went away and closed the joint up having decided it matched._',
  '_**What she did worst — and it was the second move.** She said the record "says nothing useful", and went past it. It says one thing: the joint was on the table on 14 October. Which is the sentence I shall need in the fourth week, when somebody says the question was never raised._',
  '_**And she did not decide**, although she told me afterwards that she had wanted to, and that she would have decided in my favour because she had my drawings in front of her and not his._',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Six pairs on the board, five of them disagreeing and one not. Omar said the sixth was written down, which is the answer, and Dima gave the other half of it: the five records all say something and none of them says what was decided — discussed, confirmed, raised. Which is the test of 6.5 applied to real documents, and all five fail it. And the part worth stopping on is that neither party can act on them either, although both were in the room: a record that fails the test does not only fail the people who were absent. Lubna said hers is the photograph and that she is certain — he said he would photograph the joint before closing up, and she can hear him saying it. Ms Huda said she is sure she can, and that he can hear himself saying something else, and both of them are honest, because each remembers the version that is consistent with what they then did: she went away and waited for a photograph, and he went away and closed the joint up, having looked at the 1974 detail and decided that it matched. Neither invented a memory; each kept the one that fitted their own afternoon. Adnan asked what a mediator can do when there is nothing to go on, and the answer is three moves: quote what each party thinks was agreed in their own words, name the one thing the record does say — because that is the only sentence both of them must accept — and name the one thing that would settle it. And not a fourth, because a mediator who decides has become a third version. Hiba objected that "the first-floor joint was discussed" settles nothing, and Ms Huda said it settles one thing and is worth more than it looks: the joint was on the table on 14 October, so nobody can say the question was never raised, which is what gets said in the fourth week. A weak record still fixes the date. And Yara\'s pair had no meeting at all, only a corridor — which gives the sentence the unit has been building towards: a decision is not a moment, it is a sentence, and if the sentence was never written then what you had was an occasion, and nobody broke anything because there was nothing to break.']));
out.push(A('Listener task: which of the three moves the partner did worst, and what the record in the student\'s own pair actually says. ⚠ The second move is the answer in about nine cases out of ten, and the reason is worth naming: **both parties want to talk about what the record does not say.** Collect what the records do say — _discussed · confirmed · raised · noted_ — and write the four words on the board. They are the vocabulary of a document that has been written to avoid committing anybody, and most of the class will recognise their own minutes in them.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** The mediator deciding, usually in the last four words. → **✓** three moves and stop.   **✗** _The record says nothing useful._ → **✓** name what it does say, even if it is only a date. A weak record still fixes the date.   **✗** Treating the consequence as the settling thing. → **✓** _none of the fourteen photographs shows the joint_ is a consequence, known for three weeks; the 1974 detail is the settling thing.   **✗** _One of them must be misremembering._ → **✓** both accounts are honest; each fitted what that party then did.'));
out.push(S('Stage 5 · Read – exam practice (B2 First Reading and Use of English Part 6)'));
out.push(A('**1** D   **2** B   **3** A   **4** F   **5** G   **6** C   ·   **The extra sentence is E.**'));
out.push(A('Two things to say about this task, because it is the first Part 6 of the course. ⚠ **Part 6 is not comprehension; it is cohesion, and the answer is almost always decided by one word.** _A memory problem_ in **D** picks up the phrase in the sentence before it; _then_ in **B** closes an argument that has just been made in figures; _therefore_ in **F** follows the sentence about the instruction surviving; _By that standard_ in **C** can only follow a standard, which is the test in the sentence before the last gap. ⚠ And **G** is the one to teach from: it has **two** anchors — _a narrower one_ looks back at _minute everything_, and _a test attached to it_ looks forward to the question that follows. **Teach the class to read the sentence before and the sentence after each gap before looking at the options at all**, and to find the word that joins them. The extra sentence, **E**, is topically perfect and has no anchor anywhere, which is exactly how the examination builds it.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**BOTH OF US THOUGHT WE HAD AGREED** · M. Hariri · 12 November',
  '**What I think was agreed.** _"I hold it for a fortnight while I wait for the batch date."_',
  '**What the customer thinks was agreed.** _"He holds it for a week and then I get a replacement."_',
  '**What the record says.** Nothing. There is no record of any kind, and that is the finding and not a complaint.',
  '**Why both accounts are honest.** I went away and wrote _4 Nov_ on a shelf label and waited for a letter from the distributor, because waiting is what I had to do. He went away and counted days, because a week was what he needed for his work. **Each of us kept the version that fitted our own fortnight.**',
  '**The one thing that would settle it.** Nothing exists. ⚠ **Which is the honest answer and it is worse than being wrong**: in the other five pairs on the board there was something in a file, and in mine there is a shelf label in my own handwriting that proves only that the handset arrived.',
  '**And what I am not doing.** Deciding, or asking him to accept my account. I have replaced the handset, which is not a judgement about what was said: it is the cost of not having written three lines on 4 November.',
]));
out.push(S('Stage 7 · Write freely – exam practice (B2 First Writing Part 2: a report)'));
out.push(A('⚠ **A report has a reader who asked for it, headings, and a recommendation.** It is not an essay with headings on it and it is not a letter. Mark on four things: **1** are there headings, and do they match what is under them? **2** is the present practice described **before** it is judged? **3** is the loss given with **evidence** rather than asserted? **4** is there **one** recommendation, with its cost and its benefit?'));
out.push(A('**And one register point that decides the mark in this task.** A report is written for somebody who can act, so the recommendation must be **affordable and single**. ⚠ Candidates write three recommendations, each hedged, and a reader with three cannot act on any. **One recommendation, with a figure attached to its cost, is worth more than three good ideas** — and this is the same lesson as 6.1, arriving in a different paper.'));
out.push(SAMPLE([
  '**Introduction**',
  'This report describes how decisions are recorded at the depot, says what the present practice loses, and recommends one change. It is based on the minutes of the last six depot meetings and on my own notes of them.',
  '**What is recorded now**',
  'Each meeting produces a short minute of four or five lines. The minutes record what was discussed and, in most cases, what was agreed. They do not name the person who decided, they give no reason, and they do not say which options were rejected.',
  '**What is lost**',
  'Two things. The first is the reason, which disappears within about a month and cannot be recovered, because there is no name to ask. The second is the list of options that were refused: of the six meetings I examined, three returned to a question that had already been settled, and in each case the same rejected option was proposed a second time.',
  '**Recommendation**',
  'I recommend that every minute should name the person who decided and list the options ruled out, with one line of reason for each. This would add about four minutes to the writing of a minute. On the evidence of the last six meetings, it would save one meeting in two.',
]));
out.push(A('_(207 words — within the 180–220 band. Four headings, the practice described before it is judged, the loss evidenced from six meetings, and one recommendation with a cost of four minutes against a saving of one meeting in two.)_'));
out.push(S('Unit 6 check · A  Grammar and vocabulary'));
out.push(A('**1** a   **2** b   **3** a   **4** c   **5** b   **6** c   **7** a   **8** b'));
out.push(A('Items **5** and **6** are the two that carry the unit. **5** tests the record sentence: _the decision is that Tareq **changes** one word_, with a present-tense verb somebody can be watched doing — students choose _to change_ because an infinitive sounds like the language of minutes, and it is the language of minutes, which is why minutes cannot be acted on. **6** is the recorded absence in its passive form. ⚠ Item **4** is the one that catches the careless: _even allowing for_ is a fixed participle phrase, and _even allowed for_ is produced by students who have parsed it as a passive. And item **8** is the word-formation item, from this unit\'s declared set: **recommendation**, which is also the noun the Writing Part 2 task needs.'));
out.push(S('Unit 6 check · B  Listening (B2 First Listening Part 2 style – sentence completion)'));
out.push(A('**1** nine   **2** thirty-one   **3** reason   **4** grounds   **5** afternoon   **6** ruled out   **7** figure   **8** act   **9** the position was clarified   **10** four'));
out.push(A('⚠ Part 2 is the one listening task in which the answer must be **the speaker\'s own words**, and candidates lose marks for paraphrasing something they heard correctly. Item **3** is the test case: the speaker says _the reason is the first thing to disappear_, and a candidate who writes _why it was decided_ has understood perfectly and scored nothing. ⚠ Item **6** needs care for the opposite reason: the extract contains **two** candidate phrases — _ruled out_ and _refused_ — and only the first is attached to _the line people never write_. Teach the habit of writing the words **as heard**, one to three of them, and of checking that the completed sentence is grammatical. Item **9** is three words and some candidates will write a summary of the minute instead of its phrase; read the script once afterwards and let them hear that the words are there to be copied.'));
out.push(S('Unit 6 check · C  Writing'));
out.push(A('The five lines, and marked on three things only: **is the verb in line one something you could watch somebody do, is there a name and a date in line two, and is there a figure in line five?** ⚠ Nothing else is assessed here. A record whose line three is empty has lost the only part of itself that stops the meeting happening again — but mark it as a comment and not as a fault, because a class that has written line three at all is ahead of most of the documents in their workplaces.'));
out.push(S('I can… (Unit 6)'));
out.push(A('Self-assessment; no answers. The four that matter are the first, the third, the fourth and the sixth: **narrowing out loud with a reason on every discard**, **conceding and naming the limit in one sentence**, **doing Part 3 with a decision in the final minute**, and **writing the five lines somebody who was not there could act on**. ⚠ A class that ticks the collapse and the three lines and not those four has learnt some useful moves and will go on producing records of occasions.'));
out.push(box('Looking ahead: the Mid-Book Test, and then Unit 7', [
  '**The Mid-Book Test comes next** — **60 marks**: Reading 20, Writing 15, Listening 15, Speaking 10. Sixty minutes of paper and about twelve minutes of speaking, with **all four Speaking parts in it**. Part 1 and Part 4 have been used since Unit 1; Part 2 was taught in Unit 4 and Part 3 in Unit 6, so by the test every part of the examination has been met once.',
  '⚠ **What to revise, and it is four things and not six.** The nine steps and _what am I going on?_ (Unit 4). The essay shape and the conceded point (Unit 3). The four shapes of Unit 5 with the question _which one will the reader quote?_ And the five lines of Unit 6. **A class revising all six units will revise none of them.**',
  '**Unit 7 is _One Cause, Two Symptoms_**: telling a cause from a consequence in your own evidence, and explaining to two parties that their separate problems are one problem. **7.7 is the first mediation of the course in which both parties are right** — which is a different task from 4.7, where both were overclaiming, and from 6.7, where the record was silent.',
  '⚠ **And from Unit 7 the peer-review slip moves to band 2.** The reviewer names the criterion, quotes the line, adds **one thing to keep and why**, and then **ranks the slip they were given** against the three criteria. Say so at the end of this unit: from here the marking is part of the work, and the class will be assessed on the quality of its own feedback.',
  '**The 1.7 essay is wanted at the Mid-Book Test and then not again until Unit 12.** This is the last reminder in the key as well as in the book.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 6 · Answer Key');
