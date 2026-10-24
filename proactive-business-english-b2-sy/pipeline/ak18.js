// Proactive Business English B2 · Syria Edition · Book 2 · Unit 18 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
// ⚠ Double-quoted, always. A long teacher's note in single quotes needs every
// apostrophe escaped and the parser reports only "missing ) after argument list",
// which cost an afternoon at ak14. Typographic quotes go inside.
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 18  The Long Read, and the Document That Outlives You'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Unit 18 is the halfway point of Book 2 and the unit the whole level has been walking towards.** **Unit 17 named the reader who will not have the original; this unit writes for them.** ⚠ **It is also the only unit in the level whose documents are addressed to somebody who does not work at the company yet.**',
  '⚠ **The six things taught.** ⚠ **The reader in five years (18.1) · the context inside the document (18.2) · the office and the person then in it (18.3) · the reason rather than the decision (18.4) · the rejected option and its condition (18.5) · the index as questions (18.6).**',
  '⚠ **The sentence the unit turns on is in 18.1 and it should go on the board before anything else:** ⚠ **a stranger finding a decision with no reason recorded concludes that no reason was needed.** **It is a reasonable inference, it is usually wrong, and it is self-confirming** — **because a decision that looks inevitable is never re-examined.**',
  '⚠ **18.4 is the cycle that does the most work and it rests on one question: *rather than what?*** ⚠ **Ask *why did you do it* and you get the situation, which is already on the file in four places.** **Ask *why this rather than the obvious alternative* and you get a reason, which is on it nowhere.**',
  '⚠ **The thing to protect in 18.4 is the status line.** ⚠ **The 2019 reason is contemporaneous; the 2021 reason is reconstructed in 2027 from one person\'s memory.** **Both are on the same page and a reader who cannot see the difference will weigh them equally** — ⚠ **and memory of a decision reorganises itself around the outcome, which is a fact about documents and not a doubt about Mr Ayoub.**',
  '⚠ **18.7 is the mediation in which both sides are right and the file can only carry one of them.** ⚠ **Bassel is right that the double decision is the strongest finding anybody has made; Mr Ayoub is right that as written it is a document about him.** **The resolution keeps every fact and removes the name, and the finding gets larger rather than softer.**',
  '⚠ **Word counts.** Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**. ⚠ **Cycle 7\'s exam task is Writing Part 2, a report, 120 to 140 words, 20 marks**; **the exam practice is Reading Part 3, multiple choice, six questions, the fourth time in the level.**',
], C.grey, C.navy));

// ===================== 18.1 =====================
out.push(h2('18.1  The reader in five years'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect almost every answer to be a thing three or four people know and nobody has written, and expect at least one learner to name something only one person knows** — **which is the condition the unit is written for.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It gives the month, the office, the person then in it, and the fact that the same person took the opposite decision two years earlier** — **and that last clause is the one a stranger cannot get anywhere else.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That nobody knows who Mr Ayoub is; that the same person decided both times; and that nobody counted the walk-in trade, because nothing on the file says anybody should have.**  2 ⚠ **That on a file five years later a decision and a habit are indistinguishable, and the only thing that separates them is a recorded reason.**'));
out.push(p('⚠ **The move to teach in 2b is that the useful items are not the people.** ⚠ **Every learner lists people first, and people are the easy half** — **the pattern and the absence are the items nobody records, because everybody in the room can see them.**'));
out.push(p('⚠ **And the assumption is the lesson of the cycle.** ⚠ **A stranger reads an unrecorded reason as an obvious one, and is wrong, because the reasons that get written down are the contested ones.** **So the quiet decisions, taken by one person who was sure, are precisely the ones with nothing behind them** — **which inverts what most learners expect.**'));
out.push(p('⚠ **Mr Sayegh\'s last answer is worth stopping on.** ⚠ **Where the reason cannot be recovered, record that it cannot, with the date you asked.** **It is the second-best document available and much better than nothing** — **because it tells a reader in 2032 that somebody tried in 2027 and when, which bounds the gap instead of leaving it open.**'));
out.push(p('**Language box – Practise (sample):**  _**The decision: we stopped stocking the two-litre size in 2023.**_ ⚠ _**A stranger will not know** that the same person who introduced it discontinued it; that nobody recorded what the counter sold; or that the supplier changed the case size that year._ ⚠ _**They will assume** the line was simply not selling** — **which is the only available reading of the file as it stands.**_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'They will not know who Mr Ayoub is, who Bassel is, or what the administration office does.'],
  ['B', 'Good. What else?'],
  ['A', 'That the Homs file is in two places.'],
  ['B', 'What else? Not a person and not a filing fact.'],
  ['A', '…That the same person opened it and closed it.'],
  ['B', 'That is the first useful one. And what was never measured?'],
  ['A', 'The walk-in trade. Nobody counted it until last month.'],
  ['B', 'So on the file as it stands, is the 2021 closure a decision or a habit?'],
  ['A', 'A habit. There is nothing behind it.'],
]));
out.push(note("Two questions of B and A gets there, and the shape of it is the point: the people come first, unprompted, and B has to ask twice to get past them. Do not treat the people as a wrong answer — they are necessary and 18.3 is built on them — but make the class notice that they were the easy half and that nobody volunteered the pattern or the absence. The reason is simple and worth saying: everybody present can see the pattern, so nobody experiences it as information. That is the whole mechanism of the unit in one observation, and it arrives in the first cycle."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Three items and the assumption.** **Accept any three that are not all people.** ⚠ **For the last question, insist on the full form: a decision and a habit are indistinguishable on a file, and the only thing that separates them is a recorded reason.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two decisions', [
  '⚠ **1  We moved the Thursday delivery to Wednesday, 2024.** ⚠ **A stranger will not know** **that the warehouse asked for it rather than the customers; that nobody recorded which customers complained; and that the Thursday slot had been in place for eleven years.** ⚠ **They will assume** **it was changed because customers wanted it, which is the one reading the file supports and is not what happened.** ⚠ **On the file: a habit.**',
  '⚠ **2  We stopped sending the monthly statement by post, 2025.** ⚠ **A stranger will not know** **that two customers asked us to keep posting it and that both are still customers; that the saving was never calculated; and that the person who decided it has left.** ⚠ **They will assume** **the saving was the reason.** ⚠ **On the file: a decision, just** — **there is one line in an email, and the line gives the saving as a guess.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**4R Report (sample):**  _The decision is the Thursday delivery, taken in 2024. A stranger will not know that the warehouse asked for it, that nobody recorded which customers complained, and that the slot had stood for eleven years. They will assume the customers wanted it. On the file as it stands it is a habit._'));
out.push(note("Expect the counts in the listener task to come out badly and let them. In a class of twelve, two or three decisions will have a reason written somewhere and the rest will read as habits. The second listener question is the one that produces the useful silence: of the ones that do have a reason recorded, ask whether the reason was contested at the time. It almost always was. That is the asymmetry of the unit demonstrated on the learners' own material rather than asserted, and it takes about four minutes."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Because it is two months before the office manager who took both earlier decisions hands over** — **so the file is written at a particular moment for a particular reason, which is what makes it a document rather than an exercise.**'));
out.push(p('**2** ⚠ **The fourth row: that the reason for the 2021 closure is not on the file and was not on it in 2021 either.** ⚠ **The 2032 reader will have the 2021 board note, which says the store closed, and four internal letters that say when.**'));
out.push(p('**3** ⚠ **That she argued against the reopening in December and wrote both papers.** ⚠ **Because every judgement in the file is hers and that is the relevant fact about her** — **and a file whose compiler had an undisclosed view will be re-read suspiciously the moment anybody works it out.**'));
out.push(p('⚠ **The *will assume instead* column is the teachable half.** ⚠ **Make the class notice that each assumption is given a reason:** *because that is what a file looks like* — **which stops the column reading as a list of a stranger\'s errors and makes it a list of the only available readings.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (104 words)', [
  '**THE DELIVERY-SCHEDULE FILE: WHO THIS IS WRITTEN FOR. 14 March. R. Haddad. Page 1 of 4.**',
  '⚠ **This file is written for somebody who does not work at this company yet.** **It is written in March, because the warehouse manager who set the current schedule retires in June and the schedule has never been written down as a decision.**',
  table(['What the reader will not know', 'What they will assume instead'], [
    ['⚠ **that the schedule was asked for by the warehouse, not by customers**', '⚠ **that it was a customer-service change, because that is how schedules are usually described**'],
    ['⚠ **that nobody recorded which customers objected**', '**that nobody objected**'],
    ['⚠ **that the Thursday slot had stood for eleven years**', '**that it was a recent arrangement**'],
  ], [1, 1]),
  '⚠ **The second row is why this file exists.** **Two customers objected in writing and both are still customers, and nothing on the file records either fact.**',
  '⚠ **What is on this file. Page 2: the dates and the people. Page 3: the reason, reconstructed. Page 4: the index.**',
  '⚠ **One thing about my own position: I asked for this change and I still think it was right.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**The checklist, and what to fail.** ⚠ **Fail *for the file* or *for future reference* as the reader** — **both are addressed to nobody and neither stops a writer assuming shared knowledge.** ⚠ **Fail a *will assume* cell that is a criticism of the stranger rather than a reading of the file.** ⚠ **And fail a missing position line where the writer plainly had a view.**'));
out.push(p('⚠ **The cost clause, which is new in Book 2 and still the thing to insist on.** **A reviewer saying *your reader is wrong* has made a correction; a reviewer saying *your reader is wrong, and fixing it means going back to the warehouse manager before June, which is four weeks* has priced it.** ⚠ **Accept time, a figure, or a relationship; reject *it would not cost much*.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the *will assume instead* column only.** ⚠ **The class decides of each assumption whether it is the only available reading of the file as it stands.** **Reject an assumption that is merely uncharitable; accept one that any careful stranger would reach.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (223 words)', [
  '⚠ **Everybody in our office knows that we do not take orders from one particular customer\'s branch manager, only from their head office.** **Nobody has written it down.**',
  '**Four people know. Two of us have been here under three years and learned it by being corrected. The two who know why are the accounts supervisor, who has nine years left, and the previous office manager, who left in 2024 and whose reason nobody wrote down before she went.**',
  '⚠ **A stranger would assume it was a credit decision.** **That is the only available reading: the customer is on a tight limit and the file is full of credit correspondence.** ⚠ **In fact, as far as anybody still here can reconstruct, the branch manager placed an order in 2019 that the head office refused to pay for, and the arrangement has been in place ever since without ever being an arrangement.**',
  '⚠ **Nobody can now say whether the head office asked for it or we imposed it, and that matters, because if they asked for it we may not change it and if we imposed it we may.** **So a live question about a current customer turns on a reason nobody recorded in 2019.**',
  '⚠ **Forty words would have fixed it.** **The decision, the alternative — refusing the branch outright rather than routing round it — the reason, and who asked.** ⚠ **Nobody wrote them because there was nowhere to write them and nobody whose job it was to ask.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *decision or habit, on the file as it stands?*** **Not whether the writer thinks it was a decision** — **what the file can show.** **Most will be habits and that is the correct answer.**'));
out.push(stage('7R', 'Share'));
out.push(p('**7R Share.** ⚠ **The count to expect is two of three** — **the only person who knows is due to leave within five years.** ⚠ **And the finding to name: in most cases nobody has ever asked them, which is the unit arriving in its first cycle and is not a criticism of anybody.**'));
out.push(note("That sample does something worth lifting out: the unrecorded reason is not historical curiosity, it is blocking a live decision about a current customer. If the head office asked for the arrangement the company may not change it; if the company imposed it, it may. Learners write about lost reasons as a tidiness problem, and the way to break that is to ask of each one what present decision it would change. Perhaps a third of the time there is one, and that third is where the argument for the whole unit lives. The closing sentence is also exactly right and anticipates 18.7: nobody wrote it down because there was nowhere to write it and nobody whose job it was to ask."));

// ===================== 18.2 =====================
out.push(pb());
out.push(h2('18.2  The context inside the document'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half of the question is the one that bites: of the three documents a learner names, usually one or none will be reliably findable in five years.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It gives the shape of the firm, the share Homs represented, and the figure** — **and then the reference, which is a bonus rather than the point.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **What the company was then; what the practice was then; and what the figure meant then.**  2 ⚠ **Because it tells a reader there is an answer somewhere and that they cannot have it** — **which is a worse condition than not knowing there was ever an answer.**'));
out.push(p('⚠ **The three sentences are a fixed set and should be drilled as one.** ⚠ **Company · practice · figure.** **Learners will produce the first two readily and omit the third almost every time.**'));
out.push(p('⚠ **The third is the one to spend the time on.** ⚠ *11.8 million was, at that date, about the turnover of the Mezzeh counter alone.* **Nine words, and without them a reader in 2032 cannot tell whether the figure was large** — ⚠ **and a figure without its scale is misread in either direction, so the error is not conservative.**'));
out.push(p('⚠ **Nadia\'s practice sentence carries a trap worth naming.** ⚠ **Say what the practice was THEN and expect it to have changed** — **a stranger will otherwise read an old decision against the current practice, which is the only practice they have ever seen.**'));
out.push(p('**Language box – Practise (sample):**  _**The document: the 2022 pricing memo, which refers to four others.**_ ⚠ _**The company then:** one depot, eleven staff, two delivery days._ ⚠ _**The practice then:** prices were set once a year in January and held._ ⚠ _**The figure then:** a 4% increase was, at that date, slightly below what our two competitors had already announced._ **Then the reference** — **and two of the four documents are on a laptop that has been replaced.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The 2021 turnover was 11.8 million. That is a fact. It does not need help.'],
  ['B', 'Is that large?'],
  ['A', '…Large for what?'],
  ['B', 'That is my question. A reader in 2032 will have the same one and nobody to ask.'],
  ['A', 'They can look up the company accounts.'],
  ['B', 'They can. Will they, for one figure in a file note?'],
  ['A', 'No.'],
  ['B', 'So give them the scale. Nine words.'],
  ['A', 'About the turnover of the Mezzeh counter alone.'],
  ['B', 'And now the figure cannot be misread in either direction.'],
]));
out.push(note("The exchange is short because the objection collapses the moment it is tested, and that is why this role card works better than arguing the principle. Do not let the class settle for “a reader can look it up”: they can, and they will not, and the relevant question is not what is possible but what a reader with one question and a deadline will actually do. The phrase to keep is “misread in either direction” — the error is not conservative. Against today's turnover Homs looks trivial; against 2021's it is a seventh of the business; and the nine-word clause is the only thing that tells a stranger which reading was the one that mattered."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Three context sentences for one figure of the learner\'s own.** ⚠ **Mark the third hardest: it must say what the figure was comparable to at the time, not what it is comparable to now.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two documents', [
  '⚠ **1  The 2023 supplier review.** ⚠ **The company then:** **two depots, eighteen staff, one buyer.** ⚠ **The practice then:** **every supplier was reviewed annually and none had a written agreement.** ⚠ **The figure then:** **the 9% we paid above list was, at that date, roughly what the delivery would have cost us to do ourselves.**',
  '⚠ **2  The 2024 overtime note.** ⚠ **The company then:** **one shift, Thursday to Saturday closed.** ⚠ **The practice then:** **overtime was agreed verbally by the shift supervisor and entered later.** ⚠ **The figure then:** **the 280,000 monthly overtime bill was, at that date, about the cost of one additional full-time post** — ⚠ **which is the comparison the note was really about and the one it does not make.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**4R Report (sample):**  _The document is the 2024 overtime note. In 2024 the company ran one shift and closed Thursday to Saturday. The practice then was that overtime was agreed verbally and entered afterwards. And 280,000 a month was, at that date, about the cost of one additional post. The reference is the payroll summary, and it is a bonus._'));
out.push(note("The second sample contains the finding that makes this cycle worth its ninety minutes, and it is worth reading aloud. Once the overtime figure is given its scale — about the cost of one extra post — the note is revealed to have been about a hiring decision that nobody took and nobody discussed. The scale sentence did not add context; it added the subject. That happens often enough to promise a class: write what the figure meant at the time and you will sometimes discover what the document was actually about. Expect one or two in any group, and they are usually the most useful thing anybody writes that day."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **That no site counted customers who came in without an order, and that the practice changed at Mezzeh in 2024 and Baghdad Street in 2025** — ⚠ **and that it has never been written down as a practice at all: it changed because Hala began keeping a tally and nobody stopped her.**'));
out.push(p('**2** ⚠ **Because the office is what a reader can look up, and because it lets the page record the offices that did not exist** — *administration: N. Mansour from 2024; before that the office had no coordinator* — **which stops a stranger looking for the coordinator who signed a 2021 document.**'));
out.push(p('**3** ⚠ **The 11.8 million.** ⚠ **Against today\'s turnover Homs looks trivial; against 2021\'s it was a seventh of the business.** **Both readings are true and the second is the one that mattered at the time.**'));
out.push(p('⚠ **The table is the format to insist on: dates in columns, facts in rows.** ⚠ **Sites, vans, staff, turnover** — **four rows and a reader sees the shape of the firm at three dates in ten seconds, which no amount of prose achieves.**'));
out.push(p('⚠ **And the practice sentence on this page does something rare enough to point at.** ⚠ *It changed because Hala began keeping a tally and nobody stopped her.* **A practice with a date and an author is the rarest line in any file** — **and it is the only kind that survives the person who started it.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (118 words)', [
  '**THE OVERTIME FILE, PAGE 2: THE DATES, THE PEOPLE, AND WHAT THE COMPANY WAS. 14 March. R. Haddad.**',
  table(['', '2022', '2024', '2026'], [
    ['**shifts**', '**one**', '**one**', '**two**'],
    ['**warehouse staff**', '**six**', '**nine**', '**fourteen**'],
    ['**monthly overtime**', '**about 90,000**', '**about 280,000**', '**about 160,000**'],
  ], [1.6, 2.4, 2.4, 2.4]),
  '⚠ **What the practice was, at each date.** **Until 2025 overtime was agreed verbally by the shift supervisor and entered on the sheet afterwards; from 2025 it is authorised in advance in writing.** ⚠ **The practice changed because the second shift made the verbal system unworkable, and it has never been written down as a practice** — **it changed by being done differently.**',
  '⚠ **The people, by office.** **Warehouse manager: Y. Khalil throughout. Shift supervisor: a post that did not exist before 2025.**',
  '⚠ **Two sentences a stranger cannot reconstruct.** ⚠ **First: in 2024 one supervisor authorised all overtime and worked most of it.** ⚠ **Second: 280,000 a month was, at that date, about the cost of one additional post.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A practice sentence that describes the current practice rather than the one at the time.** ⚠ **A figure with no scale** — **this is the commonest and it should be marked every time.** ⚠ **And a people line that omits the offices which did not then exist, which is the fault that misleads a stranger fastest.**'));
out.push(p('⚠ **The cost clause.** ⚠ *Adding the scale means finding the 2024 payroll, which is twenty minutes.* **Twenty minutes is a cost and it is the right size of one** — **and naming it is what gets the correction made rather than noted.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the *what the figure meant then* sentence only.** ⚠ **The test is whether a stranger could tell from it that the figure was large.** **A sentence that repeats the figure in other units has not given it a scale.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (217 words)', [
  '⚠ **Our 2022 pricing memo cannot be understood on its own.** **It refers to four documents: two competitor price lists, a cost sheet and an email from the owner.**',
  '**In 2032, none of the four will be findable. The price lists were printed sheets. The cost sheet is on a spreadsheet nobody has opened since 2023 and which is on a laptop that has been replaced twice. The email is in an account that was closed when the owner changed his address.**',
  '⚠ **So the memo has about three more years of working life, and after that it says that we raised prices by four per cent and gives no reason a stranger can follow.**',
  '⚠ **The three sentences it is missing.** ⚠ **What the company was: one depot, eleven staff, two delivery days a week, and no written supplier agreements.** ⚠ **What the practice was: prices were set once in January and held for the year, whatever happened to costs** — **which is not what we do now and is the thing a stranger would get most wrong.** ⚠ **And what the figure meant: four per cent was, at that date, slightly below what both our competitors had already announced, so the memo records us following the market rather than leading it.**',
  '⚠ **The third sentence changes what the document says.** **Without it, four per cent reads as a decision we took. With it, it reads as a decision we matched** — **and nobody who wrote the memo would have thought the distinction needed stating.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *is the figure given its scale?*** **Expect no in most texts, including from learners who answered the earlier stages correctly** — **the third sentence survives in drills and disappears in free writing.**'));
out.push(stage('7R', 'Share'));
out.push(p('**7R Share.** ⚠ **Usually one of three** — **and in that one the documents survive because somebody keeps them personally, which is an arrangement with a retirement date on it.**'));
out.push(note("The closing paragraph of that sample is the cycle's whole argument and it is stronger than the version in the Language box. The scale sentence does not clarify the four per cent; it changes what the memo says, from a decision taken to a decision matched. And the last clause is the mechanism: nobody who wrote the memo would have thought the distinction needed stating, because everybody in the room in 2022 knew what the competitors had announced. Ask a class to find a figure of their own that changes meaning once it is given its scale. Not every learner will have one, but the ones who do have found the best example anybody can give them."));

// ===================== 18.3 =====================
out.push(pb());
out.push(h2('18.3  The office, and the person then in it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect nicknames, honorifics and first names** — **and expect at least one learner to name somebody whose office nobody present can state.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **The office is the half a reader can look up; the name on its own tells a stranger nothing and will have had three holders by 2032.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The office first, then the person then in it, in brackets, with the dates of tenure.**  2 ⚠ **Because decisions came from that office and a reader needs to know both that they did and that there is nobody to ask.**'));
out.push(p('⚠ **Lina\'s objection is the one every class makes and it should be met on its own ground.** ⚠ **Everybody does know Hala** — **everybody here now.** **The office is the durable half, and the firm will have had three counter supervisors in ten years.**'));
out.push(p('⚠ **The dates on the office-holder are the single most useful thing on the page.** ⚠ *Office manager 2011 to 2027.* **With them a reader can date any document by its signature, which is more than any index gives them.**'));
out.push(p('⚠ **And the unidentified list is the part learners resist.** ⚠ **A name left in the prose reads as obvious and is therefore never queried; on a list marked *not identified* it is a question, and questions get answered.** **That is the whole argument and it takes one sentence.**'));
out.push(p('**Language box – Practise (sample):**  _1 the warehouse manager (then: Y. Khalil, 2015–) · 2 the shift supervisor (a post created in 2025; then: M. Dib) · 3 the counter supervisor at the depot (then: unknown; the post was abolished in 2023 and I cannot establish who held it) · 4 "Abu Nasser" — in six delivery notes of 2021, not identified · 5 the bookkeeper (then: the owner\'s sister, who was not an employee)._ ⚠ _**Two of the five cannot be done, and saying so is the exercise.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I have left "the Doctor" in the prose four times. Somebody will know.'],
  ['B', 'Who?'],
  ['A', 'Somebody here.'],
  ['B', 'Has anybody been asked, in five years?'],
  ['A', '…No.'],
  ['B', 'Why not?'],
  ['A', 'Because it reads as though everybody knows.'],
  ['B', 'That is the mechanism. On a list marked not identified it is a question.'],
  ['A', 'And a question gets answered.'],
  ['B', 'In about nine minutes, as it turns out.'],
]));
out.push(note("B's last line is a forward reference to the unit check and it is worth leaving in, because the payoff is real: Mr Ayoub names five of the six untraced people in one short conversation. The mechanism the exchange isolates is the useful part. An unidentified name sitting in prose is not merely unhelpful, it is actively protected from being queried, because its placement implies that everybody already knows. Moving it onto a list marked not identified does nothing except change it from an assumption into a question — and that is sufficient. Learners find this hard to believe until they see the audio script."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Three names in office-then-person form.** ⚠ **For the last question insist on both halves: list them by name, with the documents they appear in and the dates** — **the documents are what make the list answerable.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two names', [
  '⚠ **1  "Abu Nasser", in six delivery notes of 2021.** ⚠ **The office:** **unknown; probably a carrier, and marked as a guess.** ⚠ **Dates:** **the notes run from March to October 2021.** ⚠ **Does the office exist?** **Not applicable** — **he was not ours.**',
  '⚠ **2  "M.S.", initialling the 2023 stock adjustments.** ⚠ **The office:** **the depot supervisor.** ⚠ **Dates:** **the post ran from 2019 to 2023 and was then merged into the warehouse manager\'s.** ⚠ **Does the office exist?** ⚠ **No, and that matters: a stranger will attribute those adjustments to the warehouse manager, who did not make them.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**4R Report (sample):**  _The document says "M.S.". The office was depot supervisor, held from 2019 to 2023. The office does not exist now; it was merged into the warehouse manager\'s. So I would write: the depot supervisor (then: M. Sabbagh; post merged into warehouse manager, 2023)._'));
out.push(note("The second sample carries the fault that makes this cycle necessary and it is not the one the cycle advertises. A vanished office does not simply leave a gap — its decisions migrate, in a stranger's reading, to whoever holds the nearest surviving office. So the warehouse manager acquires three years of stock adjustments he never made, and no document says anything false. Ask a class which of their own abolished posts have had their decisions reassigned this way. It is a more alarming question than it sounds and it is the strongest reason to record an office that no longer exists."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **As an office with a named holder and dates** — **Homs branch office, R. Mardini, branch supervisor, Sept 2019 to Nov 2021.** ⚠ **And the *Now* column says three things: the office is closed, there is no successor office, and last contact was 2022.**'));
out.push(p('**2** ⚠ **Because Mr Ayoub hands over in April, and if the page is still unanswered in May it will be unanswerable.** ⚠ **A gap with an expiry date on it is an action; a gap without one is a decoration** — **and she is recording that it was answerable in February so the next reader knows.**'));
out.push(p('**3** ⚠ **"The Doctor".** ⚠ **Either he was an adviser, in which case somebody paid him and accounts will have it, or he was a relative of the landlord, in which case nobody will have written it down.** **She declines to choose in a file that will outlive everybody.**'));
out.push(p('⚠ **The *now* column is the column to teach.** ⚠ **It is the one a stranger needs and the one nobody writes** — *the same · office closed, no successor · hands over in April* — **and it converts a historical table into a list of people to ask.**'));
out.push(p('⚠ **And the line about who was NOT there is worth drilling.** ⚠ *Was not here in 2021 and appears in no 2019–21 document.* **It prevents the commonest error a stranger makes in a long file, which is attributing an old decision to a current colleague.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (121 words)', [
  '**THE OVERTIME FILE, PAGE 2A: THE PEOPLE, AND THE NAMES I CANNOT TRACE. 15 March. R. Haddad.**',
  table(['Office', 'Then', 'Dates', 'Now'], [
    ['**warehouse manager**', '**Y. Khalil**', '**2015 –**', '**the same**'],
    ['⚠ **depot supervisor**', '**M. Sabbagh**', '**2019 – 2023**', '⚠ **post merged into warehouse manager, 2023; no successor**'],
    ['**shift supervisor**', '**M. Dib**', '**2025 –**', '⚠ **the post did not exist before 2025 and appears in no earlier document**'],
  ], [2.4, 2, 2, 3.6]),
  '⚠ **Not traced. Two names.** ⚠ **"Abu Nasser" — six delivery notes, March to October 2021; probably a carrier, not identified. And one set of initials, "F.K.", on four 2022 overtime sheets.**',
  '⚠ **I have asked nobody.** **Y. Khalil was here throughout and can probably name both.** ⚠ **I am recording that rather than doing it because he is on leave until April, and I would rather the next reader knew the names were traceable in March than find them unexplained.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A guess not marked as a guess** — **an unmarked guess becomes a fact in about four years.** ⚠ **A missing *now* column.** ⚠ **An untraced name with no documents beside it, which makes it unanswerable by anybody.** ⚠ **And a gap with no expiry date, which is the thing that turns the page from a task into an ornament.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the *now* column only.** ⚠ **The test is whether a stranger would know who to ask today** — **and *the same* is a complete and useful answer where it is true.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (209 words)', [
  '⚠ **I took forty names from our documents of 2018 to 2022 and tried to place each one in an office.**',
  '**Twenty-six I could do from memory or from the payroll. Six I could do by asking two colleagues. Eight I cannot do at all, and of those, five are initials and three are honorifics with no surname attached.**',
  '⚠ **The person who could place all eight is our accounts supervisor, who has been here nineteen years.** **She has nine years to go, which sounds like plenty and is not, because nobody will do this in year eight.**',
  '⚠ **If she left tomorrow, here is what I would record.** **The eight names, exactly as they appear. The documents each appears in, with dates. The fact that she was the only person who could have placed them and that she was never asked. And the two places that might still answer it: the payroll, for anybody we paid, and the delivery notes, for anybody we did not.**',
  '⚠ **That last distinction is the useful one and I only found it by trying.** **Everybody we paid is traceable through accounts whatever happens to anybody\'s memory.** ⚠ **The untraceable names are all people we never paid** — **carriers, a landlord\'s relative, somebody\'s brother who drove a van for a month** — **and no system we have was ever going to hold them.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *could a stranger trace this?*** **Apply it to the names in the text, not to the text\'s argument.**'));
out.push(stage('7R', 'Share'));
out.push(p('**7R Share.** ⚠ **In at least one of three the person who could trace the names has already gone** — **in which case the names are now permanent, which is the clearest thing this unit has to say about timing.**'));
out.push(note("The final paragraph of that sample is a finding the cycle does not teach and it is better than most of what the cycle does teach. Traceability follows payment. Anybody the firm paid is recoverable through accounts no matter whose memory goes, and the untraceable names are all people the firm never paid — carriers, relatives, somebody's brother for a month. That tells a class exactly where to spend their effort: not on a general name-tracing exercise but on the specific category that no existing system holds. Ask who in their own documents was never on the payroll, and the list of names worth chasing gets short and precise."));

// ===================== 18.4 =====================
out.push(pb());
out.push(h2('18.4  The reason, not the decision'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the exercise: most learners cannot state the alternative, and saying so is the correct answer rather than a failure.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It names the alternative, gives the cost of testing it, and gives the reason the test was not worth running** — **three things, and the first is what makes it a reason at all.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ *It was losing money* — **which is why it was in trouble, not why he closed it.**  2 ⚠ **That nobody asked him. For five years: not the auditor, not the board, not Nour until that day.**'));
out.push(p('⚠ **The question is the cycle.** ⚠ **Not *why did you do it* but *rather than what?*** **The first gets the situation, which is already on the file in four places; the second gets the alternative, which is on it nowhere.**'));
out.push(p('⚠ **Teach the two halves and their ranking.** ⚠ *The test was expensive AND the answer would not have been reliable.* **He distinguishes them himself and ranks them** — ⚠ *the cost I could have borne; it was the unreliability I would not pay for* — **and a file that keeps only the cost records a thrifty decision instead of a careful one.**'));
out.push(p('⚠ **And *it was obvious at the time* means *obvious to me*.** ⚠ **The honest reply is that nobody asked**, **which is almost always true and is a fact about the firm rather than a criticism of the person** — **and getting a class to hear that distinction is most of the work of the unit.**'));
out.push(p('**Language box – Practise (sample):**  _**The decision: we stopped the Saturday opening in 2024.**_ ⚠ _**Rather than:** shortening it to four hours, which is what the counter staff asked for._ ⚠ _**Because:** two halves._ **First, four hours still needed two staff and a supervisor, so the saving was small.** ⚠ **Second, and this is the real one, we could not tell whether the Saturday trade was new custom or the same custom moved** — **and we would still not have known after six months of short Saturdays.**_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'We closed it because it was losing money. The losses are in the file.'],
  ['B', 'They are. That is why it was in trouble. Rather than what?'],
  ['A', 'The rent was going up as well.'],
  ['B', 'Still the situation. Rather than what?'],
  ['A', '…Rather than restocking it.'],
  ['B', 'Good. And why closing rather than restocking?'],
  ['A', 'Restocking cost about four million and we could not say what it would prove.'],
  ['B', 'Is that one reason or two?'],
  ['A', 'Two. The cost, and that it would not have told us anything.'],
  ['B', 'Which was the real one?'],
]));
out.push(note("Two refusals before A gets there, and the refusals have to be done gently or the exercise becomes a trap. B is not rejecting the figures — they are true and relevant and already recorded four times. B is pointing out that they answer a different question. The script to give a class is the one B uses: accept the situation, name it as the situation, and ask again. Expect three rounds rather than two with real material, and expect the alternative, when it arrives, to arrive with visible relief, because it is usually the thing the person has been thinking about all along and has never been asked for."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The reason in *X rather than Y, because Z* form.** ⚠ **Then both halves and the ranking** — **and where there is only one half, accept it and make the learner say so explicitly rather than inventing a second.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two decisions', [
  '⚠ **1  We stopped the Saturday opening, 2024.** ⚠ **Rather than** **shortening it to four hours, which the counter staff asked for.** ⚠ **Because** **(two halves): four hours still needed two staff and a supervisor, so the saving was small; and we could not tell whether Saturday trade was new custom or the same custom moved, and six months of short Saturdays would not have told us.** ⚠ **The real one is the second.** ⚠ **On the file:** **nothing. There is a line saying Saturday opening ceased.**',
  '⚠ **2  We kept the single supplier for packaging, 2025.** ⚠ **Rather than** **splitting the order between two.** ⚠ **Because** **(one half only): the second supplier would not quote for less than the full volume, so splitting was not available at the price we were comparing.** ⚠ **On the file:** **in an email, and the email gives the price comparison but not the fact that the split was never on offer** — ⚠ **which is the whole reason.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**4R Report (sample):**  _We stopped the Saturday opening in 2024, rather than shortening it to four hours, because the saving from four hours was small and because we could not tell whether Saturday trade was new or moved. There are two halves and the real one is the second. It is recorded nowhere._'));
out.push(note("The second sample is the more instructive of the two, and the fault in it is one every learner will recognise. The file holds the price comparison — the arithmetic, the part that was easy to write — and omits the fact that the alternative was never actually available. So a reader in five years sees a company that chose a single supplier on price, and will conclude the decision could be revisited by getting a second quote, which is exactly what was already tried. The reason that was omitted is the one that forecloses the re-proposal, and it is one clause. That is 18.5 arriving early: a rejected option with no reason on it gets re-proposed at full cost."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Because the board disagreed about it.** ⚠ **It is the only reason on the whole file that was written down at the time, and it was written down for that reason** — **which is the asymmetry of 18.1 demonstrated inside the book\'s own story.**'));
out.push(p('**2** ⚠ **That the counter lines were restocked on booked-order demand, so the lines that fell were the lines never reordered** — **a third possibility he did not name and could have.** ⚠ **His answer: *that is right, and I did not see it. It would have changed what I tried. I do not know that it would have changed what I decided.***'));
out.push(p('**3** ⚠ **Because 3.1 was written in 2019 by people who disagreed and 3.2 was written in 2027 by one person recalling 2021.** ⚠ **Memory of a decision reorganises itself around the outcome.** ⚠ **Without the mark a reader would weigh them equally, which would be wrong.**'));
out.push(p('⚠ **His answer to the ledger finding is the most teachable line in the unit and most classes skate over it.** ⚠ *It would have changed what I tried. I do not know that it would have changed what I decided.* **It separates the evidence from the decision precisely** — **and it is the opposite of both the defensive answer and the capitulating one.**'));
out.push(p('⚠ **Protect the status lines when marking.** ⚠ **A reconstructed reason presented without its status is the one fault on this page that a reader in 2032 cannot detect and cannot correct.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (126 words)', [
  '**THE SATURDAY FILE, PAGE 3: THE REASONS. 16 March. R. Haddad.**',
  '⚠ **1  The 2019 Saturday opening. Status: contemporaneous. Source: the owner\'s note of 3 May 2019.**',
  '**Saturday opening was introduced rather than extending weekday hours, because the depot could not take deliveries later in the day.** ⚠ **The alternative recorded as rejected was late weekday opening, rejected for that reason.**',
  '⚠ **2  The 2024 closure of Saturday opening. Status: RECONSTRUCTED. Source: Y. Khalil, in conversation, 16 March. Corrected and initialled by him on 18 March. NOT a contemporaneous record.**',
  '**In his words: "We stopped it rather than shortening it because four hours still needed two staff and a supervisor. But the real reason is that I could not tell whether Saturday was new custom or the same custom moved, and short Saturdays would not have told me either."**',
  '⚠ **Why the statuses differ.** **2019 was written at the time by somebody with no stake in it. 2024 is a recollection, three years later, by the person who decided.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A missing status line.** ⚠ **A *because* with no *rather than* in it.** ⚠ **A reconstructed reason paraphrased rather than quoted** — **the correction is what turns your account of somebody\'s reasoning into their record of it.** ⚠ **And two halves collapsed into one, which loses the ranking and with it the character of the decision.**'));
out.push(p('⚠ **The cost clause, where it bites hardest in the unit.** ⚠ *Getting this initialled means twenty minutes of Y. Khalil\'s time before he goes on leave on Thursday.* **That is a real cost with a deadline and it is exactly the kind the cost clause was added for.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the *rather than* clause only.** ⚠ **The test is whether it names an alternative somebody could actually have taken.** ⚠ **Reject *rather than doing nothing*, which is not an alternative, and reject an alternative that was never available** — **though that second case is worth recording in its own right, as the packaging sample shows.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (231 words)', [
  '⚠ **In 2021 we stopped quoting for jobs under two hundred thousand.** **The threshold is still in force. Nobody can now say why it is two hundred thousand.**',
  '**The person who set it was the previous office manager. She left in 2024. I have asked three people and got three answers: that it was the point below which the paperwork cost more than the margin; that it was what our main competitor did; and that it was the value of the smallest job we had made money on that year.**',
  '⚠ **All three are plausible and they imply completely different things about whether the figure should move.** **If it was the paperwork, it should be lower now, because we invoice differently. If it was the competitor, it should be whatever they do now, which nobody has checked. If it was the smallest profitable job, it should have been recalculated every year and never has been.**',
  '⚠ **So a live threshold that we apply every week rests on a reason three people remember differently.** **We turned away nine enquiries last quarter on the strength of it.**',
  '⚠ **What it will cost is not the nine enquiries.** **It is that nobody can argue about the figure, because an argument needs a reason to disagree with** — **so it will stay at two hundred thousand until somebody raises it as a new idea and we debate it from nothing.**',
  '⚠ **Forty words in 2021 would have given us something to be wrong about.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *is this the reason or the situation?*** ⚠ **This is the one to be strict about, because the situation is persuasive and reads like a reason** — **and the test is whether the sentence contains an alternative.**'));
out.push(stage('7R', 'Share'));
out.push(p('**7R Share.** ⚠ **Usually all three: nobody wrote the reason down because nobody asked.** ⚠ **And the finding to name explicitly, because learners arrive expecting the opposite: an unrecorded reason is almost never a concealed one.**'));
out.push(note("The penultimate paragraph of that sample is the best statement of the cost in either book and it should be read aloud. The loss is not the nine enquiries; it is that the threshold cannot be argued about, because an argument requires a reason to disagree with. So the figure is frozen, not by anybody's decision but by the absence of one, until somebody proposes a new number from nothing and the firm debates it without any of what it knew in 2021. That is a more precise account of what an unrecorded reason costs than the exam text manages, and it came from a learner's own workplace. The closing line is the whole unit: forty words would have given them something to be wrong about."));

// ===================== 18.5 =====================
out.push(pb());
out.push(h2('18.5  What was considered and rejected'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect at least two learners to have a clear example, and expect the cost the second time to be given in weeks of somebody\'s work rather than in money.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It has all three parts: the option with its date, the reason, and the condition under which it would be worth re-examining** — **and the third is the part that makes the record work by itself.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because a rejected option with only a reason reads as closed for ever; with a condition beside it, it reads as open the day the condition changes.**  2 ⚠ **That he would still have put the same proposal, with a first line saying it was considered in 2019 and rejected because of the van, and the van has changed.**'));
out.push(p('⚠ **The three parts are the cycle, and the third is the one almost nobody writes.** ⚠ **Option · reason · condition.** **Learners produce the first two and stop, because a rejection feels finished.**'));
out.push(p('⚠ **Bassel\'s own answer is better than the lesson and should be given weight.** ⚠ **A proposal that has already survived one rejection on a reason that has since gone is a stronger paper than a new idea** — **so the earlier rejection is strength, not embarrassment.**'));
out.push(p('⚠ **And name the second cost, which is larger than the three weeks.** ⚠ **A re-proposal presented as new cannot be weighed against what it was weighed against the first time** — **so the board decides the same thing twice on different grounds and cannot tell that it has.** **That is the finding 18.7 is built on.**'));
out.push(p('**Language box – Practise (sample):**  _**The option: a second delivery van, proposed 2022.**_ ⚠ _**Rejected because:** the depot had one loading bay and two vans could not be loaded in the morning window._ ⚠ _**Worth re-examining if:** the bay were widened, or if a second loading point existed, or if deliveries were split across two windows._ ⚠ _**Has it changed?** **Yes** — **we added the second window in 2025 for an unrelated reason, and nobody has reconnected the two.**_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'If we record every rejected option the file fills up with things that did not happen.'],
  ['B', 'What did the van route cost Bassel in December?'],
  ['A', 'Three weeks.'],
  ['B', 'And the two lines in 2019 that would have saved them?'],
  ['A', 'Two lines.'],
  ['B', 'And there is a second cost. The board weighed it in December against today.'],
  ['A', 'It could not weigh it against 2019.'],
  ['B', 'So one option has been decided twice, on different grounds.'],
  ['A', 'And neither decision knows about the other.'],
  ['B', 'That is what the page prevents. Two lines.'],
]));
out.push(note("The ratio argument settles the first objection in one exchange, and it should be given in exactly those terms — two lines against three weeks, to a named person, about a real proposal. Abstract arguments about completeness lose to the objection; a cost in weeks does not. But do not stop at the three weeks, because the second cost is the larger one and it is the one the class will not reach unaided: the same option has now been weighed twice against different alternatives, and neither decision is aware of the other. A firm in that position cannot tell a change of mind from a coincidence, and nothing in its file will ever reveal which it had."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One rejected option in all three parts.** ⚠ **Then whether the condition has already been met** — **and expect roughly half to have been met without anybody noticing, which is the whole point of flagging them.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two rejected options', [
  '⚠ **1  A second delivery van, 2022, by the warehouse manager.** ⚠ **Rejected because** **one loading bay could not load two vans in the morning window.** ⚠ **Worth re-examining if** **a second loading point existed or deliveries were split across two windows.** ⚠ **Has it changed? YES** — **the second window was added in 2025, for a reason unconnected with vans, and nobody has reconnected the two.**',
  '⚠ **2  Invoicing weekly instead of monthly, 2023, by accounts.** ⚠ **Rejected because** **the bookkeeping was done by one person two days a week.** ⚠ **Worth re-examining if** **bookkeeping were daily or the invoicing were automated.** ⚠ **Has it changed? YES** — **invoicing was automated in 2024, and the weekly question has not been raised since 2023.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**4R Report (sample):**  _In 2022 we considered a second van and rejected it because one loading bay could not load two in the morning window. It would be worth re-examining if a second loading point existed or deliveries were split across two windows. That changed in 2025._'));
out.push(note("Both conditions in that sample have been met and neither has been noticed, which is the usual result and is worth counting in front of a class. The pattern is consistent: the condition is removed for a reason that has nothing to do with the rejected option, by somebody who does not know the option exists, and no mechanism connects the two events. That is why the flag has to live in the cell rather than in somebody's head. It also explains why the useful conditions are the ones that look permanent — one loading bay, one bookkeeper two days a week — since those are precisely the constraints nobody revisits when they quietly stop being true."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Three weeks of Bassel\'s work, recorded with his agreement; and the deeper one, that the board weighed the option in December against today\'s alternatives and could not weigh it against 2019\'s.** ⚠ **So one option has been decided twice on different grounds and neither decision knows about the other.**'));
out.push(p('**2** ⚠ **Row 4, the third Damascus site: no reason for rejecting it is recorded anywhere, Mr Ayoub does not recall it, and the board note has one clause** — *the alternative of a further Damascus site was not pursued.* ⚠ **Three of the four options can be re-examined and one cannot, and the fourth is the only one that might have been right.**'));
out.push(p('**3** ⚠ **Because nobody knows the reason, and a condition she had invented would be indistinguishable in 2032 from one the board had set.**'));
out.push(p('⚠ **The *What I have NOT done* paragraph is the part to teach from.** ⚠ **The restraint is not the lesson; recording the restraint is.** **A file that silently omits a condition and a file that says why it omits one look identical to the compiler and completely different to a reader.**'));
out.push(p('⚠ **And row 4 carries the sentence that should go on the board:** ⚠ *the fourth is the only one that might have been right.* **The option with no reason recorded is not merely the unusable row** — **it is, on this file, the one the firm has now chosen against twice.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (117 words)', [
  '**THE DELIVERY FILE, PAGE 4: WHAT WAS CONSIDERED AND REJECTED. 17 March. R. Haddad.**',
  table(['The option', 'When, and by whom', 'Rejected because', 'Worth re-examining if'], [
    ['**a second van**', '**2022, warehouse manager**', '**one loading bay, one morning window**', '⚠ **a second loading point or a second window** — ⚠ **CONDITION MET: second window added 2025**'],
    ['**weekly invoicing**', '**2023, accounts**', '**bookkeeping was two days a week**', '⚠ **CONDITION MET: invoicing automated 2024**'],
    ['**a third delivery day**', '**2022, discussed**', '⚠ **not recorded**', '⚠ **unknown**'],
  ], [2.2, 2, 2.4, 3.4]),
  '⚠ **The note on row 3.** **A third delivery day was discussed in 2022 and no reason for dropping it is recorded.** **Two people recall the discussion and neither recalls the reason.**',
  '⚠ **What I have NOT done.** **I have written no condition for row 3.** ⚠ **A plausible condition would read in five years exactly like one somebody had actually set.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A missing condition where one could be written.** ⚠ **A met condition not flagged in capitals** — **an unflagged met condition is the same as no condition at all.** ⚠ **A missing *by whom*: a board rejection and one manager\'s rejection are different weights.** ⚠ **And an invented condition on a row whose reason is unknown, which is the worst single fault available on this page.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the conditions only.** ⚠ **Two tests: could it be tested, and has it already been met?** **A condition like *if circumstances changed* fails the first; about half of the rest fail the second without the writer knowing.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (226 words)', [
  '⚠ **We have decided twice whether to keep a counter at the depot.** **In 2021 we closed it. In 2025 we opened it again. Neither decision records a reason.**',
  '**I found this by accident, looking for something else. The 2021 closure is a line in a stock note. The 2025 opening is a line in the minutes. Both say what happened and neither says why, and the two documents are in different files, which is why nobody had noticed.**',
  '⚠ **The second decision did not know about the first.** **The person who proposed reopening in 2025 joined in 2023, and nobody in the room had been in the 2021 conversation except the owner, who did not mention it.**',
  '⚠ **What it cost is harder to say than I expected and I want to be honest about that.** **The 2025 decision looks right so far. So the cost is not a wrong decision** — **it is that we cannot tell whether we changed our minds or simply forgot, and if the counter struggles again in 2028 we will have two closures and two openings and no reasoning attached to any of them.**',
  '⚠ **Two lines in 2021 would have prevented it.** **The option, the reason, and the condition under which the counter would be worth reopening.** ⚠ **If that condition had been written, the 2025 proposal would have begun by saying it had been met** — **which is a far stronger paper than the one we actually got, and it would have taken a sentence.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *could this condition be tested?*** **A condition that could not be tested is not a condition** — **and the commonest untestable one is *if it became viable*.**'));
out.push(stage('7R', 'Share'));
out.push(p('**7R Share.** ⚠ **Usually all three: the second decision did not know about the first.** ⚠ **And in at least one the two decisions went opposite ways** — **which no file records as a change of mind, because neither decision knows the other happened.**'));
out.push(note("The honesty in that fourth paragraph is what makes the piece good, and it should be praised in front of the class rather than corrected. The learner cannot show that the second decision was wrong — it looks right so far — and refuses to pretend otherwise. The cost is stated precisely instead: the firm cannot tell whether it changed its mind or forgot, and a third round in 2028 will arrive with four decisions and no reasoning. That is a real cost, it is not exaggerated, and it is much more persuasive than the overclaim most learners reach for. The two documents sitting in different files is also the commonest mechanism and worth naming on its own."));

// ===================== 18.6 =====================
out.push(pb());
out.push(h2('18.6  The note for a question nobody has asked yet'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect the question to be easy and the second half to be bleak: the answer is almost never written anywhere.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **A reader recognises their own question in a way they never recognise a heading, and the section reference tells them where to stop looking.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because a reader arrives with a question, not a topic, and a topic index makes them guess which heading their question lives under.**  2 ⚠ **That the ones which were hard for the writer to answer are next time\'s questions too** — **and that having just been the first person to ask them makes her the best-placed person in the firm to list them.**'));
out.push(p('⚠ **The move is small and the gain is large: questions, with question marks, in the reader\'s words.** ⚠ **Not *reasons* but *Why was Homs closed rather than restocked?*** **The headings are obvious to somebody who already knows the answers, which is exactly who will never use the index.**'));
out.push(p('⚠ **The method for finding the unasked questions is the part to drill, because it sounds impossible and is not.** ⚠ **Which ones were hard to answer?** **Those are next time\'s questions** — **and a learner who has just spent a week in a file can name three in two minutes.**'));
out.push(p('⚠ **And Mr Sayegh\'s last two answers are the cycle\'s real content.** ⚠ **An index that lists only what the file can do is a sales document.** ⚠ **A file built to be stored and a file built to be read by somebody with a deadline are different documents** — **and the question index is the clearest place the difference shows.**'));
out.push(p('**Language box – Practise (sample):**  _1 Why do we not quote below two hundred thousand? — p. 3_ · _2 Who set that figure and when? — p. 2_ · _3 Has it been reviewed? — p. 3, and the answer is no_ · _4 Did anybody check what competitors do? — p. 4, NOT ASKED BEFORE_ · _5 What was the figure based on? — **NOT ANSWERABLE from this file.** Three people recall it differently; the person who set it left in 2024._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I am not indexing what the file cannot answer. It advertises the weaknesses.'],
  ['B', 'What does a stranger do when they cannot find something?'],
  ['A', 'Looks again.'],
  ['B', 'Reads all six pages, decides they have looked badly, then reads them again.'],
  ['A', 'Probably.'],
  ['B', 'And then asks somebody, having spent half a day.'],
  ['A', 'So the line saves them the half day.'],
  ['B', 'And names the two places that might still answer it.'],
  ['A', 'Which is more use than silence.'],
  ['B', 'A file nobody can navigate is not protected by silence. It is just slower.'],
]));
out.push(note("B's last line is the one to keep. The objection is not silly — a list of what a document cannot do genuinely does look like a confession, and learners feel that strongly. The answer is to follow the stranger's actual behaviour: they cannot find the thing, they conclude the fault is theirs, they read everything again, and only then do they ask. The gap line costs one row and removes all of that, and it points at the two places that might still answer the question. Silence does not conceal the gap from anybody who needs it; it conceals it only from people who were never going to look."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Three index questions, one of them unasked, and one the file cannot answer with what would be needed.** ⚠ **Reject a topic with a question mark added** — *Reasons?* **is not a question.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — a file at work', [
  '⚠ **Why do we not quote below two hundred thousand?** **p. 3** — **asked often; the answer is the threshold, not the reason.**',
  '⚠ **What was the figure based on?** ⚠ **nowhere** — ⚠ **NOT ANSWERABLE. Three people recall it differently. The person who set it left in 2024. Accounts may hold the 2021 job-margin working.**',
  '⚠ **How many enquiries has it turned away?** **p. 5** — ⚠ **NOT ASKED BEFORE. Nine last quarter; nobody had counted before I did.**',
  '⚠ **What will this file not be able to tell me in five years?** **p. 6** — ⚠ **NOT ASKED BEFORE, and it is the one I would read first.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**4R Report (sample):**  _One question is: why do we not quote below two hundred thousand? The answer is at page 3. One nobody has asked yet is: how many enquiries has it turned away? And one the file cannot answer is: what was the figure based on? For that you would need the 2021 job-margin working, if accounts still hold it._'));
out.push(note("The count in the listener task is usually high and that is the result to use. Most learners find that they would also have asked at least two of their neighbour's unasked questions, which demonstrates the claim better than any argument: these are not idiosyncratic questions, they are the obvious ones that nobody has happened to put in writing. The third-of-three question, about what the file will not be able to tell a reader in five years, is the one to insist on. It is the only question on any such index that is about the file rather than about the subject, and it is the only one with a deadline inside it."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Ten questions, and three had never been asked by anybody.**'));
out.push(p('**2** ⚠ *What will this file not be able to tell me after April 2027?* ⚠ **Because it is the only question on the page about the file itself rather than about Homs** — **and on this file it is the only one with a deadline inside it.**'));
out.push(p('**3** ⚠ **Because a stranger who cannot find something assumes they have looked badly and reads all six pages again.** ⚠ **The line costs them nothing and sends them to accounts and, until April, to Mr Ayoub.**'));
out.push(p('⚠ **The note column is the format point.** ⚠ **It carries the STATUS of the answer, not more answer** — *RECONSTRUCTED Feb 2027, initialled; not a contemporaneous record* — **because a reader deciding whether to open a page needs to know what kind of answer is on it.**'));
out.push(p('⚠ **And the method for the unasked three should be marked as a method.** ⚠ *They were the hardest three to answer and nobody in five years had put any of them.* **It is repeatable by any learner on any file in an afternoon, which is why it belongs in the key rather than in the writer\'s head.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (113 words)', [
  '**THE QUOTING-THRESHOLD FILE, PAGE 6: THE INDEX. 18 March. R. Haddad. Six questions. Two have not been asked by anybody.**',
  table(['The question', 'Where', 'Note'], [
    ['**Why do we not quote below 200,000?**', '**p. 3**', '**the threshold; the reason is at p. 3, s. 3.2 and is reconstructed**'],
    ['**Who set it, and when?**', '**p. 2**', '**the previous office manager, 2021; left 2024**'],
    ['⚠ **How many enquiries has it turned away?**', '**p. 5**', '⚠ **nine last quarter — NOT ASKED BEFORE**'],
    ['⚠ **What will this file not tell me in five years?**', '**p. 6A**', '⚠ **the basis of the figure — NOT ASKED BEFORE**'],
    ['**What was the figure based on?**', '⚠ **nowhere**', '⚠ **NOT ANSWERABLE. Three recollections, all different. Accounts may hold the 2021 job-margin working.**'],
  ], [3.4, 1.4, 4.2]),
  '⚠ **A note on the two marked NOT ASKED BEFORE.** **Both were the hardest things on the file to establish, and I had to count the enquiries myself.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A topic with a question mark added.** ⚠ **A note column that carries more answer instead of the answer\'s status.** ⚠ **No question about the file itself.** ⚠ **And a *not answerable* row with no place or person named** — **which tells a reader there is no answer rather than where the answer might be.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the *not answerable* line only.** ⚠ **The test is whether it names a person or a place to try instead.** **A line that says only *not answerable* has told a reader to stop looking and given them nowhere to go.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (219 words)', [
  '⚠ **The question we will be asked in five years is why our main customer\'s branches order through head office and not directly.** **It is a live arrangement, applied weekly, and nobody can answer it.**',
  '**Two people could answer it today. Our accounts supervisor, who has nine years to go, and the customer\'s own purchasing manager, who is older than she is. Nobody has asked either.**',
  '⚠ **The reason it will be asked is that the arrangement is inconvenient for both sides and somebody will eventually propose dropping it.** **At that point the only question that matters is whether the customer asked for it or we imposed it** — **because if they asked, it is not ours to drop.**',
  '⚠ **One page would fix it.** **A question index with four entries: why does this arrangement exist, who asked for it, when, and what happened the one time a branch ordered directly.** **Three of the four are answerable today by one phone call.**',
  '⚠ **The fourth is the one I would mark not answerable, and I would name the gap precisely.** **There is a 2019 order that head office refused to pay for; whether that order is the origin of the arrangement or merely the first time it was tested, nobody can now say.** ⚠ **I would write that sentence rather than guess, because a guess in that position would read in five years exactly like a finding** — **and the whole arrangement rests on it.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *would a stranger recognise this as their question?*** **Read it as somebody arriving with a deadline, not as somebody who knows the file.**'));
out.push(stage('7R', 'Share'));
out.push(p('**7R Share.** ⚠ **Usually all three could be answered today by one person** — **and usually the same kind of person: the one who has been there longest and has never been asked.**'));
out.push(note("The last paragraph is the discipline of the whole unit applied under pressure, and it is worth more than the four-entry index above it. The learner can see what the answer probably is — the 2019 order is almost certainly the origin — and declines to write it, because a guess in that position would read in five years exactly like a finding, and the entire arrangement rests on it. That restraint is harder than anything else in Unit 18 and it is the thing to praise. The phrase to lift out is the test: would this sentence be distinguishable, in five years, from one somebody actually established?"));

// ===================== 18.7 =====================
out.push(pb());
out.push(h2('18.7  Review & Mediate: the firm that decided it twice'));
out.push(stage('1', 'Get ready – Unit 18 quiz'));
out.push(table(['', 'The answer'], [
  ['**18.1**', '⚠ **That it was obvious at the time** — **and it is usually wrong, because the reasons that get written down are the contested ones.**'],
  ['**18.2**', '⚠ **What the figure meant at the time.** **A figure without its scale is misread in either direction.**'],
  ['**18.3**', '⚠ **The office, then the person then in it, with the dates of tenure** — **and the offices that no longer exist, marked as such.**'],
  ['**18.4**', '⚠ *Rather than what?* — **not *why did you do it*, which gets the situation.**'],
  ['**18.5**', '⚠ **The condition under which it would be worth re-examining** — **flagged in capitals if already met.**'],
  ['**18.6**', '⚠ **A question the file cannot answer, with what would be needed and who might know.**'],
], [1, 7]));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **A document about him** — **because in 2032 nobody will know what it was meant as; they will have the sentence.**  2 ⚠ **His initials on his own words at section 3.2, and his assent to a page about the firm.** **Two different requests, put to him in one afternoon.**'));
out.push(p('⚠ **The mediation has a shape worth naming before the class reads it.** ⚠ **Both parties are right, they are right about different things, and the file can carry only one version** — **so something has to be given up on each side and the key records what.**'));
out.push(p('⚠ **The move that resolves it keeps every fact and removes one word.** ⚠ **Both decisions, both dates, both silences stay; the name goes.** **And the finding gets LARGER rather than softer**, ⚠ **because *one man was careless* is a smaller claim than *this firm cannot hold a reason*.**'));
out.push(p('⚠ **Mr Ayoub\'s objection is about the document, not about his feelings, and marking it as hurt pride misses the unit.** ⚠ *In 2032 nobody will know what it was meant as. They will have the sentence.* **That is exactly the argument of 18.1, made by the person 18.1 is about.**'));
out.push(p('⚠ **And Nour\'s separation of the two requests is the practical skill.** ⚠ **Putting them together made refusing either look like refusing both** — **and section 3.2 exists only with him, so losing it to win the wording would have been the worse trade by a long way.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The four steps, with a sample run.**'));
out.push(table(['B asks', 'A answers (sample)'], [
  ['**Read it as a stranger in 2032 will. What is that a document about?**', '⚠ **About the previous office manager, by name, twice.**'],
  ['**Now make the firm the subject, and lose no fact.**', '⚠ **This firm set a quoting threshold in 2021 and reviewed it in neither 2023 nor 2025, and no reason for the figure is recorded.**'],
  ['**What is the mechanism?**', '⚠ **The job sheet has no field for a reason, and no office is required to review the threshold annually.**'],
  ['**And what does it cost going forward?**', '⚠ **The firm cannot argue about the figure, so it will stay until somebody proposes a new one from nothing.**'],
  ['**Weaker, or larger?**', '⚠ **Larger** — **and checkable in ten minutes by looking at the job sheet.**'],
], [3.4, 5.6]));
out.push(note("Run this with a learner's own finding rather than with Bassel's, because the move only convinces when the fact being protected is one the learner cares about. The step that gets skipped is the third: learners will move the subject to the firm and then stop, leaving a finding that is impersonal and unverifiable. The mechanism is what makes it checkable — no field on the form, no office required to review — and a reader in 2032 can test both in ten minutes, which they could never do with a judgement about anybody's care. Insist on the mechanism and the rest of the move looks after itself."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One finding in both forms.** ⚠ **Then which is checkable in ten minutes** — **the practice version, always** — **and which is the larger claim, which is also the practice version, and that surprises most classes.**'));
out.push(stage('4', 'Your turn'));
out.push(sample('Sample — two findings', [
  '⚠ **1  As it names a person:** **the previous office manager set the threshold and recorded no reason.** ⚠ **With the firm as subject:** **this firm set a quoting threshold in 2021 and has reviewed it in neither 2023 nor 2025; no reason for the figure is recorded.** ⚠ **The mechanism:** **the job sheet has no field for a reason, and no office is required to review the threshold.** ⚠ **Cost going forward:** **the figure cannot be argued about, so it will stay until somebody proposes a new one from nothing.**',
  '⚠ **2  As it names a person:** **the warehouse manager never wrote down why the second van was refused.** ⚠ **With the firm as subject:** **this firm has rejected a second van twice, in 2022 and 2024, and recorded the reason once.** ⚠ **The mechanism:** **rejections are minuted as outcomes and the minutes have no field for a condition.** ⚠ **Cost going forward:** **the 2025 second loading window met the condition and nobody connected the two.**',
]));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The mediation, in full.** ⚠ **Both sides are right and the key should mark both sides as right before anything else.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Bassel**', '⚠ **that the double decision is the most important thing anybody has found, and the foot of page four is where findings go to die**', '⚠ **his sentence** — **the finding goes up with the firm as subject and no name in it, and he states in the file that he is losing a sentence and not a finding**'],
  ['**Mr Ayoub**', '⚠ **that as written, with a person as its subject, it is a document about him, and in 2032 nobody will know it was not meant as one**', '⚠ **the comfort of the file not carrying it at all** — **he initials section 3.2 as his own words; the page-one finding is Nour\'s, endorsed by nobody**'],
], [1.2, 4.2, 4.6]));
out.push(p('**Report (sample):**  _Both are right. Bassel is right that the double decision is the strongest finding in the file and that a footnote kills it. Mr Ayoub is right that as written it is a document about him. So the finding goes on page one, with the firm as its subject and the mechanism named, and Bassel gives up his sentence while Mr Ayoub gives up the file not carrying it at all._'));
out.push(p('⚠ **And section 3.2(b), which is the sentence he volunteered:** *"There was no form. There was nobody whose job it was to ask me. I am not offering that as an excuse — I am telling you it will happen to the next person in this chair, and you may write that down."* ⚠ **Mark that as the most valuable line on the file.** **It is the mechanism, stated by the person it will be used to judge, and offered forward rather than backward.**'));
out.push(note("Three things to make a class notice. First, Mr Ayoub concedes nothing about his own conduct and does not need to — the finding is true whether he was careless or not, and nothing in the agreed text turns on that question. Second, the page-one finding is endorsed by nobody, and saying so is what makes it publishable: a reader in 2032 learns that one person wrote it and that nobody else signed it, which is more honest than a consensus the file never had. Third, and this is the part that will divide a class, Nour did not win. She wanted both the finding and the initials and she got both only by writing two documents with different authority. Ask whether there was a version in which she got one document with both, and work through why there was not."));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 3)'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6'], [['Answer', 'C', 'A', 'D', 'B', 'D', 'C']], [1.4, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9]));
out.push(table(['Q', 'Answer', 'Why, and what the distractors do'], [
  ['**1**', '**C**', '⚠ *a set of assumptions so complete that none of them was ever stated.* ⚠ **A is the plausible wrong answer and the text never mentions quantity; B reverses the text, which says the assumptions were shared; D is contradicted by *assembled over ten years*.**'],
  ['**2**', '**A**', '⚠ *the reason has to be communicated to nobody, because everyone who needs it already holds it.* ⚠ **B imports a motive the text does not give** — **the text\'s cause is structural, not psychological.** **C reverses the asymmetry. D reverses *one person who was certain*.**'],
  ['**3**', '**D**', '⚠ *a decision that appears inevitable is never looked at again.* ⚠ **A and B are about error propagation, which the text does not discuss; C contradicts *it is usually wrong*.**'],
  ['**4**', '**B**', '⚠ *since the document will outlast the folder.* ⚠ **All four options are remedies the text gives, and only one is tied to that clause** — **which is the Part 3 pattern worth naming: every distractor true, one relevant.**'],
  ['**5**', '**D**', '⚠ *not laziness but sequence*, **and then the sequence spelled out.** ⚠ **A is explicitly denied** — *no amount of individual diligence closes that gap.* **B is denied by *unglamorous and cheap*. C is not raised.**'],
  ['**6**', '**C**', '⚠ *a feature of its forms*, **restating *a document on which a reason has somewhere to go*.** ⚠ **B is explicitly denied; A and D are plausible and unsupported.**'],
], [0.6, 0.8, 8]));
out.push(p('⚠ **The Part 3 lesson to draw, and it is the one that transfers:** ⚠ **in a Part 3 question all four options are usually true of the world, and three are untrue of the paragraph.** **Question 4 is the clearest case in the level** — **all four are remedies the writer actually recommends, and the question asks which one he attaches to a particular clause.** ⚠ **So the discipline is to find the sentence and answer from it, not to pick the most sensible statement.**'));
out.push(p('⚠ **Questions 2 and 5 are where candidates lose marks, and for the same reason both times.** ⚠ **Both have a distractor that supplies a human motive** — **people are reluctant; people are not diligent** — **where the text gives a structural cause.** **The text is unusually explicit about this** (*not laziness but sequence*; *no amount of individual diligence*) **and candidates still choose the psychological option**, ⚠ **because it is the more familiar explanation and reads as the wiser one.**'));
out.push(stage('6', 'Write with help – Writing Part 2 sample'));
out.push(sample('Sample answer (134 words)', [
  '**REPORT: THE REASONS BEHIND OUR DECISIONS**',
  '**To:** **R. Dagher, Operations**   **From:** **R. Haddad**   **Date:** **19 March**',
  '**What is recorded.** **Our minutes and job sheets record every decision taken, with its date and the person taking it. They do not record the alternative that was rejected, the reason for rejecting it, or any condition under which it should be looked at again.**',
  '**What this has cost.** **A second delivery van was rejected in 2022 and proposed again in 2024 by a colleague who spent three weeks preparing the case and did not know it had been considered.**',
  '**Recommendations.** **First, that the decision sheet carry two further fields — the alternative rejected, and the condition for re-examination. This is a change to the form and not to anybody\'s habits. Second, that met conditions be flagged when they are met. I recommend that the administration office be asked for the reason at the point the decision is minuted.**',
]));
out.push(p('⚠ **Marking.** **Content: all three points, and the third needs BOTH recommendations with one of them naming a document.** ⚠ **Organisation: three headings is the efficient shape at 130 words and should be rewarded.** ⚠ **Language: a report register, no contractions, and the cost given as a specific** — *three weeks* **and a named colleague.**'));
out.push(p('⚠ **The commonest Part 2 failure on this task is a recommendation that people should be more careful.** ⚠ **It scores nothing because it cannot be checked, and candidates reach for it because it feels like the serious answer.** **The task asks specifically for a change to a document**, ⚠ **and the owner clause** — *that the administration office be asked for the reason at the point the decision is minuted* — **is the clause that turns a recommendation into something capable of happening.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A cost in principle rather than in weeks, a figure or a role.** ⚠ **Two recommendations neither of which changes a document.** ⚠ **No owner.** ⚠ **And a word count outside 120 to 140, which is a mark lost for nothing.**'));
out.push(stage('7', 'Write freely'));
out.push(p('⚠ **Mark for the five remedies.** **The free text asks which of the exam text\'s five would have prevented the loss, and learners should be held to naming one and saying why.** ⚠ **The most frequent honest answer is the condition on a rejected option** — **because it is the only one of the five that works without anybody being asked a question.**'));
out.push(pb());
out.push(stage('✓', 'Marking the unit check', 15));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'c', 'b', 'a', 'c', 'b', 'a', 'c']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each. ⚠ **b · c · b · a · c · b · a · c.**',
  '**B  Listening — 6 marks**, one for each gap. ⚠ **Dr Mikhail, a pharmacist and the landlord\'s brother-in-law (1) · because the landlord wanted the unit to go to a pharmacy eventually and was taking advice on whether the firm would be easy to remove (1) · the unit was let to a chemist in 2022, which explains that the landlord\'s refusal of a sublet in November 2021 was about getting the unit back (2) · five of the six (1) · about nine minutes (1).** ⚠ **Give the third gap two marks and award the second only for the connection, not for the chemist alone.**',
  '**C  Reading — 5 marks:** the three unasked questions (1) · ⚠ **the method — they were the hardest three to answer and nobody had put them in five years (2)** · ⚠ **and the *nowhere* row: a stranger who cannot find something assumes they looked badly, so the line saves them the search and names where to try (2).**',
  '**D  Writing — 6 marks:** ⚠ *X rather than Y, because Z* **with a real alternative in it (2)** · **the re-examination condition (2)** · ⚠ **where such a sentence could be filed (2)** — **and no mark for *in the file*, which names nothing.**',
  '**Total 25.** ⚠ **The profile to expect: A high, B split, C split, D low.** **A is the easiest language section in Book 2 because six of the eight are collocations the unit drills.** ⚠ **B loses the second half of gap 3** — **learners give the chemist and stop, without connecting it to the refusal of the sublet.** ⚠ **C loses the method, which learners treat as a detail rather than as the transferable part.** ⚠ **And D is the weakest section in the unit: about half of papers give a condition that cannot be tested, and more than half cannot say where in their own firm a reason could be filed** — **which is not a language fault and is the finding of the unit arriving in the test.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Five faults to watch, and the remedy for each. First, the list of people. Asked what a stranger will not know, every class lists people, and the people are the easy half — necessary, and 18.3 is built on them, but not the useful half. Ask twice more and take nothing that is a person or a filing fact; what comes out is the pattern and the absence, and the reason nobody volunteers them is that everybody in the room can see them, so nobody experiences them as information. Say that mechanism aloud, because it is the mechanism of the whole unit and it arrives in the first five minutes. Second, the figure with no scale. The three context sentences are company, practice and figure, and learners produce the first two readily and omit the third almost every time. Drill it as a fixed set and mark the third every time it is missing. The phrase to keep is misread in either direction: the error is not conservative, since against today's turnover Homs looks trivial and against 2021's it was a seventh of the business. And promise the class the discovery, because it happens often enough to promise: write what a figure meant at the time and you will sometimes find out what the document was actually about, as the overtime note in the 18.2 sample does. Third, the situation offered as a reason. This is the central fault of the unit and the remedy is one question: rather than what? Why did you do it gets the losses, the rent and the turnover, all true and all already on the file four times over. Rather than what gets the alternative, which is on it nowhere. Expect three rounds rather than two with real material, refuse the situation gently each time by naming it as the situation, and expect the alternative to arrive with relief, because it is usually what the person has been thinking about for years and has never been asked. Keep both halves and keep their ranking where there are two: a file that records the cost and drops the unreliability has recorded a thrifty decision instead of a careful one. Fourth, the rejected option with no condition. Learners write the option and the reason and stop, because a rejection feels finished. The condition is what makes the record work without anybody reading it, and the flag has to live in the cell, in capitals, because the pattern is always the same — the condition is removed for a reason unconnected with the option, by somebody who does not know the option exists. Run the ratio argument in its concrete form: two lines in 2019 against three weeks of a named colleague's work. Then go past the three weeks to the larger cost, which no class reaches unaided: the same option has now been weighed twice against different alternatives, and neither decision knows the other happened, so the firm cannot tell a change of mind from a coincidence. Fifth, the invented condition and the plausible guess, and this is the one to spend the last ten minutes on. Row 4 of the 18.5 page has no reason recorded, and the right answer is to write no condition at all and to say why: a condition the compiler invented would read in 2032 exactly like one the board had set. The same discipline appears in the 18.6 sample, where a learner can see what the answer probably is and declines to write it. That restraint is the hardest thing in Unit 18 and the test for it is one sentence — would this be distinguishable, in five years, from something somebody actually established? Three notes on 18.7. Mr Ayoub's objection is about the document and not about his pride, and a class that marks it as hurt feelings has missed the unit: in 2032 nobody will know what the sentence was meant as, which is 18.1 stated by the person 18.1 is about. The resolution removes one word and keeps every fact, and the finding gets larger rather than softer, which surprises classes and is worth proving on the board. And Nour did not win — she got the finding and the initials only by writing two documents with different authority, one endorsed by nobody. Ask whether there was a version in which one document carried both, and work through why there was not; it takes five minutes and it is the most useful five minutes in the cycle."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 18 · Answer Key');
module.exports = out;
