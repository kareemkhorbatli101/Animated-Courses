// Proactive Business English B2 · Syria Edition · Book 1 · Unit 7 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 7  Cause at a Distance'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Unit 7 is the first unit of the second half of Book 1 and it is the one unit in the book whose subject is an argument rather than a document.** **Everybody in the room has been asked *what caused it* and almost nobody has ever been taught that the honest answer and the useful answer are different lengths of the same answer.**',
  '⚠ **Six things are taught and the order is not arbitrary.** ⚠ **Two causes (7.1) · the marked chain (7.2) · the undocumented decision (7.3) · the counterfactual test (7.4) · contributors and the occasion (7.5) · the link you cannot evidence (7.6).** **7.4 is impossible before 7.2, because you cannot test a remedy against a chain you have not marked** — **and 7.5 is impossible before 7.1, because *contributor* and *occasion* are the two causes of 7.1 under their proper names.**',
  '⚠ **The one rule in the unit is in 7.6 and it should be said twice:** ⚠ **if you cannot evidence a link, say so in the sentence; if you have nothing at all, delete the link and write the absence** — **because the absence is evidenced and the link is not.** **It is the sentence the whole unit exists to earn.**',
  '⚠ **7.7 reveals two things and neither should be given away early.** **The first is that Abu Yasser has been named in four of these papers in nineteen years and reads any fifth for his own name before he reads anything else.** ⚠ **The second is harder: he measured four of the new pallets against the rack with a yard rule in April 2023 and told Mr Jallad they were short** — **so the second half of the pallet decision WAS checked, the check is in nobody\'s writing, and a paper written from the evidence must say nobody checked it.** ⚠ **Correct on the evidence and false in fact.** **Do not let the class resolve that by softening the finding.**',
  '⚠ **Word counts.** Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**. ⚠ **Cycle 7\'s exam task is Writing Part 1, 40 to 50 words, 10 marks**; **the exam practice is Reading Part 3, multiple choice on one longer text, six questions with four options, the second time in this book.**',
], C.grey, C.navy));

// ===================== 7.1 =====================
out.push(h2('7.1  Proximate and distal cause'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Most learners give one cause and stop, and about half of them give the distal one** — **because the distal cause is the one that sounds like an explanation and the proximate one sounds like an excuse.**'));
out.push(p('**b**  ⚠ **Proximate: *the night count was hurried because the lorry came early*.** ⚠ **Distal: *the pallets have been fifty millimetres narrow since 2023*.** **The test is the day: one of them happened on Tuesday and one of them has been true for two years.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **A hurried count** — **the lorry came at one in the morning instead of four and was loaded by two.**  2 ⚠ **Because the immediate cause is the one the reader was there for.** **Distal first reads as blaming history to avoid blaming Tuesday**, ⚠ **which, as Mr Attar says, is what it is even when it is true.**'));
out.push(p('⚠ **The two sentences at the end of the track are worth putting on the board and leaving there for the whole unit.** ⚠ *The first sentence answers Tuesday and the second one answers June.* **A class that has those two words — Tuesday, June — has the whole of 7.1**, **and the test for a distal cause follows from them: a cause that explains the amount is the cause that will still be there in June.**'));
out.push(p('⚠ **The part that surprises learners is the last exchange.** **Give one cause and the reader supplies the other, and his is worse than yours** — ⚠ **a reader given a hurried count supplies carelessness; a reader given a pallet supplies evasion.** **Ask the class which of those two a customer supplies, and they will say carelessness, and they are right, and that is why the pallet-only paper is the more tempting of the two mistakes.**'));
out.push(p('**Language box – Practise (sample, two of the four):**  _**1 The lorry turned over on the Homs road.** **The immediate cause was a tyre that had been reported and not changed.** **The condition that made a reported tyre survive three weeks is that the defect book is kept in the cab and read by nobody.** **(The second explains why three weeks.)**_   _**2 The April invoice went out for the wrong amount.** **The immediate cause was a figure typed from the previous month\'s sheet.** **The condition that made it possible is that the invoice is typed from a sheet and not from the order, so the order is never the source of anything.** **(The second explains why it is always the previous month.)**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I have two causes and I do not know which is which. The plater was down, and nobody books the plater.'],
  ['B', 'Which of them explains the amount?'],
  ['A', 'The amount is eleven days late.'],
  ['B', 'So which one explains eleven days?'],
  ['A', '…The plater being down explains that we were late. It does not explain eleven.'],
  ['B', 'And nobody booking the plater?'],
  ['A', 'That explains eleven, because we found out it was down on the day we needed it, and the queue in front of us was eleven days.'],
  ['B', 'Then that is the condition, and the plater is the immediate cause.'],
  ['A', 'And the one that explains the amount is the one that will still be there in June.'],
  ['B', 'The plater will be repaired by June. Nobody booking it will not.'],
]));
out.push(note('The pair work here produces one predictable argument, and it is worth letting it run for a minute. A learner will say that both causes are immediate because both happened in the same week. The answer is not about when the cause happened but about how long the condition has been in place: a plater breaking down is an event, and a booking system that does not exist is a state. Ask for the date the condition began and the argument ends — a learner who cannot name a month is usually holding an event, and one who says "always" is holding a condition.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **Both causes in two sentences, which explains the amount, and what a reader would have supplied.** **Expect the last part to be the hard one** — ⚠ **a class will give *carelessness* and *evasion* once they have heard the track, and will not generate them unprompted.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What went wrong', 'The immediate cause', 'The condition that made it possible', 'Which explains the amount'], [
  ['**the April consignment was two weeks late**', '**the plater was down from 2 to 13 April**', '⚠ **nobody books the plater, so we learn it is down on the day we need it**', '⚠ **the booking** — **it explains eleven days of queue**'],
  ['**the wrong amount on an invoice**', '**a figure typed from last month\'s sheet**', '⚠ **the invoice is typed from a sheet, not from the order**', '⚠ **the sheet** — **it explains why it is always last month\'s figure**'],
  ['**a customer told twice, differently**', '**two people answered the same telephone**', '⚠ **there is no record of what a customer has been told**', '⚠ **the absence of a record**'],
  ['**eleven cartons short in March**', '**a hurried night count**', '⚠ **pallets 1,150 against racks for 1,200 since April 2023**', '⚠ **the pallet width** — **eleven is one layer**'],
], [1.4, 1.8, 2, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**The immediate cause was the plater being down from the 2nd to the 13th of April. The condition that made it possible was that nobody books the plater, so we find out it is down on the day we need it. The one that explains the amount is the booking, because the queue in front of us was eleven days. And if I gave only the plater, a reader would supply that we are badly run — and if I gave only the booking, he would supply that we are making excuses about a machine.**_'));
out.push(p('⚠ **The listener count is the point of the stage.** **How many conditions are older than two years: usually most of them.** ⚠ **How many have a document behind them: in the series\' own trial, two out of nineteen** — **which is 7.3 arriving a cycle early and is worth noting on the board for then.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **The hurried count explains that something went short on that Tuesday and does not explain why eleven, or why eleven twice before.** ⚠ **The pallet width explains exactly eleven, every time, for two years, and does not explain why March rather than February.** **The two together explain both** — **Tuesday and June.**'));
out.push(p('**2**  ⚠ **_The root cause was the pallet width._** **It is the better cause and it is not the only one.** ⚠ **A paper that names one cause invites a remedy aimed at one link** — **here new pallets at about four hundred thousand**, **and the eleven would still go short on a night when the lorry came early and the sheet had no column for a part pallet.**'));
out.push(p('**3**  ⚠ **Because each occurrence was written up on its own as a hurried count** — ⚠ **and a hurried count is a thing that happens to a man and not a thing that happens to a company.** **March 2024, August 2024 and March this year, all eleven, all on early-lorry nights, and nobody put the three write-ups side by side.**'));
out.push(stage('6', 'Write with help – sample (148 words)'));
out.push(sample(null, [
  '**THE APRIL CONSIGNMENT — THE TWO CAUSES. 4 May. L. Barakat. Root-cause paper, part 1 of 2.**',
  '⚠ **The immediate cause was the plater being out of service from 2 to 13 April.** _The drive coupling failed on the morning of the 2nd and the replacement came from Aleppo on the 12th._',
  '⚠ **The condition that made eleven days of that time cost us is that nobody books the plater.** _We learn that it is down on the day we need it, and we then join a queue made of everybody else who learned the same way. The queue in front of us on the 13th was eleven days long._',
  '⚠ **The sentence I will not write is *the root cause was the coupling*.** **It is true and it is not the only one**, ⚠ **and a paper that names one cause invites a remedy aimed at one link** — **a spare coupling, about sixty thousand, and the next eleven days would be spent in the same queue behind the same people.**',
  '⚠ **And the clause I have kept is *which anybody would have done*.** **The yard rang the plater on the day, as the yard always has.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The immediate cause first, in its own paragraph', '**✓**'],
  ['A distal cause that explains the quantity', '⚠ **✓** — *the queue in front of us was eleven days long*'],
  ['What each cause does *not* explain', '⚠ **✗** — **the sample says it in prose and has no column; a reader can still pick one**'],
  ['The single-cause sentence refused, and the refusal priced', '**✓** — *sixty thousand*'],
  ['A clause that defends the person at the sharp end', '**✓**'],
], [5, 1]));
out.push(note('The fourth and fifth lines pass easily and the third fails in about half of the class\'s work, which is worth naming. Learners will write what each cause explains and forget what it does not, because the second half of that column feels like weakening your own paper. It is the opposite: the column is the only thing that stops a reader choosing the cause he prefers and treating the other as decoration. Where a learner has it in prose rather than in a table, as the sample does, accept it and ask them to read it aloud — prose that says "the coupling does not explain eleven days" reads as an apology, and the same words in a column read as a finding.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class says whether the distal cause explains the amount** — **and where it does not, it is a second proximate cause and the paper has two of one kind and none of the other.** ⚠ **This is the fastest diagnostic in the unit and it takes one question: does it explain how much?**'));
out.push(stage('7', 'Write freely – sample (228 words)'));
out.push(sample(null, [
  'Three times in two years we have delivered to the Ghouta customers a day late, and each time the immediate cause was different and each time the condition was the same.',
  'The first was in March last year: the driver was ill and the relief driver did not know the third address. The second was in September: the van was at the garage and the hired van had no rack. The third was in February: the Monday run went out on the Wednesday because of the holiday and nobody told the two customers who only take Mondays.',
  'The immediate causes are an illness, a garage and a holiday, and they have nothing to do with each other. The condition is that the Ghouta run exists in one man\'s head. Fadi knows the order of the addresses, which two customers take Mondays only, and which gate is locked after four. None of it is written down, and so every substitution — a driver, a van, a day — costs a delivery.',
  'The condition explains the amount, which is one day each time and never two: Fadi finds out and fixes it the next morning. And it is the condition that will still be there in June, because the illness is over, the van is back and the holiday has passed.',
  'Nobody has connected the three, because each was written up as a different accident by a different person.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *why did nobody connect them* question is the one that produces the real answer**, **and in most texts it is because the three write-ups were done by three different people** — **which is Unit 6 in a root-cause paper and is worth saying so.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three texts to have each occurrence written up on its own, and two of three to have had different authors.** ⚠ **The sentence to leave the class with: a company that writes up each occurrence separately has no way of ever discovering that it has one condition and three accidents.**'));

// ===================== 7.2 =====================
out.push(pb());
out.push(h2('7.2  Chaining'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Ask for the link they could prove, not the chain** — **and expect the provable link to be either the first or the last, which is 7.2\'s whole finding arriving before the lesson.**'));
out.push(p('**b**  ⚠ **The first is a list** — *the lorry was early, the count was hurried, the pallet was short* — **three facts with commas between them and nothing saying that any one produced the next.** ⚠ **The second is a chain:** *which meant · the effect of which was.* **A list invites a reader to pick his favourite item; a chain does not.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Links 1 and 4** — **the lorry at one in the morning (the gate sheet) and eleven cartons short (the Beirut receiving note, signed).**  2 ⚠ **He tests it at its weakest link, finds that link himself, and then distrusts the two solid ends as well.**'));
out.push(p('⚠ **The shape is the thing to draw.** **Four boxes left to right, and under them: *document · one account · inference · document*.** ⚠ **Two solid ends and a soft middle** — **and then ask the class why that is the normal shape rather than bad luck.** ⚠ **The answer is that the beginning and the end of a failure are the parts that touch paper: a gate time is recorded because a lorry arrives at a gate, and a shortage is recorded because somebody receives it.** **The middle is what people did, and people are not a recording instrument.**'));
out.push(p('⚠ **The eight-word marking is the practical core of the cycle and should be drilled.** ⚠ *The count was made on the apron — Abu Yasser\'s account; there is no record.* **Count the words with the class. Eight for the marking, and the link is now honest and still in the chain** — **which answers the objection that marking weakens a paper.**'));
out.push(p('⚠ **And take the last line of the track seriously, because it is the sentence that sells the method:** ⚠ *four links all stated flat is an assertion with connectives in it.* **Learners believe a flat chain looks stronger. It looks stronger to its author and weaker to a reader, and the reason is that a reader knows a real explanation has a soft middle and distrusts one that does not show it.**'));
out.push(p('**Language box – Practise (sample, a chain of four marked):**  _**1** The hired van was booked for Monday — **the booking slip, 9 February, signed by the office.** **(document.)**  **2** The slip was taken as a confirmation although the hire company had not replied — ⚠ **Lina\'s account; she remembers the telephone and there is no note of it.** **(one account.)**  **3** Nobody telephoned again between Wednesday and Monday — ⚠ **which I infer, because there is no second entry anywhere and nobody has said they did.** **(inference.)**  **4** No van came on the Monday — **the gate book, 15 February, and the customers\' two complaints.** **(document.)**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The chain is four links. The van was booked, the booking was confirmed, nobody rang again, and no van came.'],
  ['B', 'All four stated flat. Give me twenty seconds.'],
  ['A', 'Go on.'],
  ['B', 'The second one. *The booking was confirmed.* Confirmed by whom, and where is it?'],
  ['A', 'Lina remembers telephoning. There is no note.'],
  ['B', 'So that is the weak link and I found it without being told. Now the first one.'],
  ['A', 'The booking slip, signed, dated the 9th.'],
  ['B', 'And I believe it less than I did two minutes ago.'],
  ['A', 'Why? It is a signed slip.'],
  ['B', 'Because you read me four links in the same voice and one of them was air. I cannot now tell which of the other three you checked and which you assumed.'],
]));
out.push(note('That last exchange is the cycle, and it is the one place in Unit 7 where a key can usefully tell a teacher to slow down. The cost of an unmarked chain is not that the weak link is found — it will be found either way — but that finding it unmarked retrospectively damages the links that are sound. Learners resist this because it feels unfair, and it is unfair, and it is also exactly what a reader does. The defence is to mark the weak link yourself, and the sentence to leave on the board is: the only person who can protect your signed documents from your inference is you.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **The four links, each marked, and the link a reader would attack.** **Expect the attacked link to be the one the speaker did not mark, every time** — ⚠ **and where the speaker marked everything, ask the class which link they would test, and they will name the inference, which is the right answer and is now the author\'s choice rather than the reader\'s.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Link', 'The claim', 'Evidenced · one account · assumed', 'How I will write the marking'], [
  ['**1**', '**the hired van was booked for Monday the 15th**', '⚠ **evidenced** — **the booking slip, 9 February, signed**', '*— booking slip, 9 February*'],
  ['**2**', '**the booking was treated as confirmed**', '⚠ **one account** — **Lina\'s; there is no note of the call**', '⚠ *— Lina\'s account; there is no note of the call*'],
  ['**3**', '**nobody telephoned again in the six days between**', '⚠ **assumed** — **no entry anywhere, and nobody has said they did**', '⚠ *which I infer and nobody has stated*'],
  ['**4**', '**no van arrived on the Monday**', '⚠ **evidenced** — **the gate book and two complaints**', '*— gate book, 15 February*'],
], [0.6, 2, 1.6, 2.2]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**My chain runs evidenced, one account, assumed, evidenced. The shape is two solid ends and a soft middle. And the link I would attack is the third one — nobody telephoned again — because it is the only one where I have nothing at all, and it is also the link the whole chain depends on.**_'));
out.push(p('⚠ **The listener count matters here and the second half of it is the interesting one.** **How many chains had a soft middle: nearly all.** ⚠ **How many had a soft *end*: one or two** — **and a soft end is a different and worse problem, because a chain whose last link is an inference has not established that anything went wrong at all.** **Where a learner has one, that is the chain to work on in front of the class.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **Link 3** — **that the top layer of the short pallet was estimated rather than counted.** ⚠ **If the top layer was counted and was right, then eleven cartons went missing somewhere else and everything in the paper is wrong.** **The writer has put that sentence into part 3 under *what would make this paper wrong*, because a reader is entitled to find it in one place rather than to work it out.**'));
out.push(p('**2**  ⚠ **Count a short pallet and a correct pallet, both full, and weigh them.** ⚠ **If the difference is eleven cartons, the inference becomes arithmetic.** **Twenty minutes and a weighbridge they already have** — ⚠ **and she says she should have done it before writing part 2 rather than after, which is true in almost every case and is almost never written.**'));
out.push(p('**3**  ⚠ **Link 2, the count made on the apron, which rests on one man\'s account.** ⚠ **One account sounds thin until you ask what the alternative is, and the alternative is nothing at all: there is no record anywhere of where a count is made** — **which is itself a finding and becomes a remedy in part 3.**'));
out.push(stage('6', 'Write with help – sample (151 words)'));
out.push(sample(null, [
  '**THE FEBRUARY GHOUTA RUN — THE CHAIN. 20 February. L. Barakat. Root-cause paper, part 2 of 2.**',
  '**1** **The hired van was booked for Monday 15 February.** | **the booking slip, 9 February, signed by the office** | ⚠ **document**',
  '**2** **The booking was treated as confirmed.** | ⚠ **Lina Barakat\'s account. There is no note of the telephone call and the hire company has no record of a reply.** | ⚠ **one account**',
  '**3** **Nobody telephoned again between the 9th and the 15th.** | ⚠ **nothing. I infer it, because there is no entry anywhere and nobody has said they did.** | ⚠ **inference — the weakest link**',
  '**4** **No van arrived on the Monday.** | **the gate book, 15 February, and two customer complaints** | ⚠ **document**',
  '⚠ **Link 3 is the weakest and the paper turns on it.** **If somebody did telephone and was told a van would come, then this is the hire company\'s failure and not ours.** ⚠ **I have put that under *what would make this paper wrong*.**',
  '⚠ **And there is a way to turn it into a document: the hire company keeps a call log and will send it.** ⚠ **It is one letter, and I should have written it before this paper rather than after.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *what holds it up* column with dates and signatories', '**✓**'],
  ['What follows if the weakest link is wrong', '⚠ **✓** — **and it changes whose failure it is, which is the strongest version of this line**'],
  ['A way to turn an inference into a measurement, priced', '**✓** — *one letter*'],
  ['The link you expected to be weakest, and why it is not', '⚠ **✗** — **the sample has no such paragraph; it is the line most often dropped**'],
  ['No *therefore* anywhere in the chain', '**✓**'],
], [5, 1]));
out.push(note('The fourth line is the one to collect and read out. "The link I expected to be weakest" is dropped by most learners because it feels like a diary entry rather than a finding, and it is in fact the most useful paragraph in a root-cause paper: it tells a reader that the author tested his own expectations and was wrong about one of them, which is the only evidence a reader ever gets that the paper was investigated rather than composed. Where nobody in the room has written it, write one on the board from the unit\'s own material — link 2 looked thin and is not, because the alternative to one man\'s account is no record at all.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class says whether the weak link could be measured in under an hour.** **Usually two of three can be** — ⚠ **and the point to make is that an explanation everybody has accepted for years is usually one telephone call or twenty minutes on a weighbridge away from being evidenced, and nobody has made the call because nobody has ever had to write the chain down.**'));
out.push(stage('7', 'Write freely – sample (231 words)'));
out.push(sample(null, [
  'Everybody in the office knows why the Baghdad Street counter is slower than the Mezzeh one, and nobody has ever checked it.',
  'The explanation is a chain of four. Baghdad Street takes more walk-in customers. A walk-in customer needs a price and a stock check. The stock check means a telephone call to the store. And so each walk-in takes about four times as long as a telephone order.',
  'Of those four links, exactly one has a document behind it: the daily sheets show the number of walk-in customers, and Baghdad Street does take about three times as many. The second link is not a claim at all, it is a definition, and it is fine. The third is Nadia\'s account and mine, and we are both right as far as we know, and neither of us has ever counted. The fourth is an inference from the other three and is where the number four came from, and I cannot now find out who first said four or when.',
  'What it would take to check is a morning with a watch. Time twenty walk-ins and twenty telephone orders and the fourth link becomes arithmetic.',
  'Nobody has done it because the explanation has never been written as a chain. Said aloud, it is one sentence that everybody agrees with. Written as four links with a column for what holds each one up, it has one document and three opinions in it, and the shape of that is impossible to miss.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *how long would checking take* question is the one that changes behaviour**, **and the answers in the series\' own trial ran from twenty minutes to a morning.** ⚠ **None was longer than a day.** **That figure is worth giving the class: the median unevidenced explanation at work is about half a day from being evidenced.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three weak links to be checkable in under an hour, and all three explanations to have been repeated for years.** ⚠ **The sentence to close on: an explanation that is never written down is never tested, because testing begins with a column.**'));

// ===================== 7.3 =====================
out.push(pb());
out.push(h2('7.3  The cause inside a decision nobody recorded'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half of the question is the one that teaches:** *say how you know it was decided.* **Learners who cannot answer it discover, in about fifteen seconds, that they have been treating an inference as common knowledge for years.**'));
out.push(p('**b**  ⚠ **The second.** *Somebody decided to change the pallets* **has no fact in it, no date, and a pronoun where the evidence should be.** ⚠ **The second gives the two dimensions, the two deliveries, the absence of any order or minute, and the document the change does appear in** — **and it never says who.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The supplier\'s invoice of 3 April 2023 giving the dimension; the rack drawing revised in pencil in June 2023 and never reissued; and the first complaint of a short top layer, from Ms Tannous, in August 2023** — **with the price, about nine per cent less a pallet, as the fourth.**  2 ⚠ **That it was a mistake.**'));
out.push(p('⚠ **Hala\'s opening question is the whole cycle in six words:** ⚠ *what do you know, and what do you believe?* **Put it on the board and make the class answer it in two columns about one of their own examples before anything else happens.** ⚠ **The division is almost never where they expect: the thing they would have written as the fact is usually in the believe column, and the invoice they had not thought to mention is the whole of the know column.**'));
out.push(p('⚠ **The two refusals are different in kind and should be taught separately.** ⚠ **Refusing the name is a question about a person who cannot answer** — **Unit 2 arriving inside a root-cause paper, and the reason is that a name in a paper outlives the paper.** ⚠ **Refusing *a mistake* is a question about arithmetic:** **narrower pallets are nine per cent cheaper and fit a lorry better, and for everything except our own racks the decision was correct.** **A paper that calls it an error has counted one side.**'));
out.push(p('⚠ **And the finding sentence is the one to drill, because it is the one that converts a four-hundred-thousand-pound problem into a pen.** ⚠ *A decision that was right for the yard and wrong for the racks was taken by one man with no document, and so nobody checked the second half.* **The finding is the absence, not the width.**'));
out.push(p('**Language box – Practise (sample):**  _**The fact:** the Ghouta run has been Mondays and Wednesdays since 1 March. **The absence:** there is no note, no instruction and nothing in the minute book. **Three places I looked:** the run sheets for February and March, the office day book, and the two customers\' own order dates. **What reconstructs it:** the run sheets change on 1 March with no note; the day book shows Fadi\'s hours moving the same week; the customers both moved their standing orders in the first week of March. ⚠ **And the thing I will not claim: that it was decided badly.** **Two days suit the customers who order most, and the man who drives it was asked.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I want to write that the pallet decision was an error.'],
  ['B', 'What was good about it?'],
  ['A', 'Nothing. We have been eleven cartons short three times.'],
  ['B', 'What did it cost a pallet?'],
  ['A', 'About nine per cent less than the old ones.'],
  ['B', 'On how many pallets a year?'],
  ['A', '…About two thousand. So it has saved real money every year since 2023.'],
  ['B', 'And the lorry?'],
  ['A', 'They fit one row better. Which is a load a month, roughly.'],
  ['B', 'So the decision was right for the yard and wrong for the racks. Who checked the racks?'],
  ['A', 'Nobody. There was no document, so there was nothing for anybody to check.'],
  ['B', 'That is your finding, and it costs a pen.'],
]));
out.push(note('Role card 2 is the one that changes how a class writes for the rest of the book, and the mechanism is worth understanding before you teach it. A learner who has been carrying the damage of a decision cannot see its benefit, not because they are unfair but because the benefit went to a department they do not work in. Asking what it cost, how many, and what else it changed is not a defence of the decision — it is the arithmetic that turns "the pallets are wrong" into "a decision right for the yard and wrong for the racks was taken with no document". The first version buys four hundred thousand of pallets. The second buys a pen. Learners are usually surprised that the fair version is also the cheap one.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **What is known, what is believed, the three places the writer looked, and the finding.** ⚠ **The check on the finding is one question: is it about an absence or about a thing?** **A finding about a thing has a purchase at the end of it; a finding about an absence has a habit.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The decision, as a fact', 'Where I looked and found nothing', 'What reconstructs it', 'What was right about it'], [
  ['**the Ghouta run has been Mondays and Wednesdays since 1 March**', '⚠ **the minute book, the office day book, the 2024 correspondence file**', '**the run sheets change on 1 March; Fadi\'s hours move the same week; two standing orders move in the first week of March**', '⚠ **two days suit the customers who order most, and the driver was asked**'],
  ['**the invoice is typed from the monthly sheet and not from the order**', '⚠ **the procedures file, the minute book**', '**every invoice since 2019 carries the sheet\'s layout; the order book has no invoice column**', '⚠ **it is faster, and one person can do a month in a morning**'],
  ['**counts are made wherever the lorry is**', '⚠ **everywhere; there is no record of where a count is made at all**', '**nineteen years of gate sheets with no column for it**', '⚠ **it keeps a lorry moving at one in the morning**'],
], [1.6, 1.6, 1.9, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**The fact is that the Ghouta run has been Mondays and Wednesdays since the 1st of March. There is no instruction, no note and no minute. It is reconstructed from the run sheets, which change on that date, from Fadi\'s hours in the day book, and from two standing orders that moved the same week. And what was right about it is that the two days suit the customers who order most, and the man who drives it was asked.**_'));
out.push(p('⚠ **The two listener counts are both diagnostic.** **How many decisions had somebody who has since left: usually a third of them** — **and those are the ones where a name in a paper does the most damage and the least work.** ⚠ **How many were partly right: nearly all of them.** **That second figure is the one to say out loud, because a class that has just spent twenty minutes on its own grievances will not have expected it.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **The purchase file, the 2023 correspondence file, the minute book and the supplier\'s own statements** — **four named places.** ⚠ **She found no purchase order, no note, no minute and nothing in the supplier correspondence.** **Four named places is a search; *there is no record* is a claim.**'));
out.push(p('**2**  ⚠ **That it does not say who decided it**, **because the decision is a fact and the decision-maker is an inference, and an inference about a man who has gone does not belong in a document that outlives both of them.** ⚠ **And that it does not say the decision was wrong**, **because nine per cent less a pallet on about two thousand pallets a year is a real saving and they fit a lorry better by one row** — **for everything except the racks the decision was correct.**'));
out.push(p('**3**  ⚠ **The finding is the absence:** **a decision right for the yard and wrong for the racks was taken by one person with no document, and because there was no document nobody checked the second half.** ⚠ **The remedy is not a pallet.** ⚠ **It is that a change to a stated dimension goes on the rack drawing in ink, with a date, and the drawing is reissued** — **with a name and a date against it in section B.**'));
out.push(stage('6', 'Write with help – sample (147 words)'));
out.push(sample(null, [
  '**THE INVOICE SOURCE. 6 May. L. Barakat. A note on a decision with no document.**',
  '**What is known.** ⚠ **Every invoice issued since January 2019 is typed from the monthly sheet. Invoices before that carry the order number in the top right. No invoice since has carried it.**',
  '**Where there is nothing.** ⚠ **There is no instruction, no note and no minute. I have looked in the procedures file, the minute book, the 2018 and 2019 correspondence and the printer\'s own invoice for the new forms.**',
  '**1** **the new form of January 2019, with no order-number box** | **January 2019**',
  '**2** ⚠ **the printer\'s invoice for two thousand of them** | **11 December 2018**',
  '**3** **the first wrong amount traced to a sheet** | **March 2019**',
  '**4** ⚠ **the time — a month of invoices in a morning instead of two days** | **from January 2019**',
  '⚠ **It does not say who decided it, and it does not say the decision was wrong.** ⚠ **The finding is that nobody checked what the form stopped us being able to do.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The files searched, named', '**✓** — **four of them, including the printer\'s invoice**'],
  ['The price or the benefit, in the reconstruction', '⚠ **✓** — **row 4, the time saved**'],
  ['The name refused, with the reason in the paper', '⚠ **✗** — **the sample refuses the name and does not say why; the reason is half the line**'],
  ['*Wrong* refused, and both halves shown', '**✓**'],
  ['The finding is an absence, and its remedy is cheap', '**✓** — *nobody checked what the form stopped us doing*'],
], [5, 1]));
out.push(note('The third line is the one that fails most often and the reason is worth naming: a learner who has decided not to name somebody thinks the restraint speaks for itself. It does not. A reader who meets an unnamed decision in a paper assumes either that the author does not know or that the author is protecting somebody, and both assumptions are worse than the truth. One sentence fixes it — the decision is a fact and the maker is an inference, and an inference about a man who has gone does not belong in a document that outlives both of us. Make the class write that sentence into their own paper rather than paraphrase it; it is one of the four or five sentences in Book 1 worth having by heart.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class prices the remedy, and the rule is hard and useful: if it costs more than a pen, the finding is still about the thing and not about the absence.** ⚠ **Expect half the room to have to rewrite a finding at this point**, **and expect the rewritten ones to be both fairer and cheaper, which is the connection the cycle exists to make.**'));
out.push(stage('7', 'Write freely – sample (226 words)'));
out.push(sample(null, [
  'The second store has been used for scrap and overflow since some time in 2021, and nobody decided it in any way that left a record.',
  'What is known is this. The 2020 stock sheets list the second store by shelf, with quantities. The 2021 sheets list it as "second store — various". From February 2022 it is not listed at all, and the nine scrap cartons of January are in the fourth store, which did not exist as a store before 2021.',
  'Where there is nothing: the minute book, the two stock files, and the correspondence with the landlord, who would have been told if a room changed its use.',
  'What reconstructs it is the Homs closure. The Homs store closed in 2021, its stock came to Damascus in a fortnight, and there was nowhere to put it. The second store took the overflow because it was nearest the door, and it has never been given back.',
  'What was right about it: it was the only room that could take a store\'s worth of stock at two days\' notice, and it was the right decision in the fortnight it was made for.',
  'What nobody checked is the second half — that a room taken for a fortnight stays taken. There was no document, so there was nothing with a date on it to come back to, and four years later we count scrap in a room that used to be listed by shelf.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *was anything right about the decision* question produces the strongest single line in most texts**, **and in the sample it is *it was the right decision in the fortnight it was made for*.** ⚠ **A decision that was right for its fortnight and wrong for four years is the commonest shape of an undocumented decision**, **and naming that shape is worth five minutes.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three decisions to be partly right, and two of three never to have been said so** — ⚠ **because the only people who discuss such a decision are the ones carrying the half that went wrong.** **That sentence is the one to put on the board.**'));

// ===================== 7.4 =====================
out.push(pb());
out.push(h2('7.4  Counterfactual discipline'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **About two thirds of the fixes a class brings would not have prevented the thing they were made for**, **and the learners know it when asked and have never been asked.**'));
out.push(p('**b**  ⚠ **The second is harder to write, and it is harder for a reason worth naming:** **the first sentence requires you to believe something and the second requires you to have checked it.** ⚠ *Had we had wider pallets in March, we would still have been eleven short, because the count was made on the apron and the sheet has no column for a part pallet* — **that is a test with a result in it, and it took somebody half an hour.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Remedy one, wider pallets** — **the top layer would have been full and there would have been nothing to estimate.**  2 ⚠ **That a remedy which would not have prevented it and would have caught it is a good remedy and is not the same remedy** — **and a paper that does not separate the two gets both rejected.**'));
out.push(p('⚠ **The structure of the track is three tests and three different verdicts, and the three verdicts are the lesson.** ⚠ **Prevents · catches · fails.** **Write them on the board before the track and ask the class to sort the three remedies as they listen.** ⚠ **Nearly everybody puts remedy 2 in *fails* on first hearing**, **because a remedy that does not prevent the thing feels like a failure** — **and the correction, that it converts an estimate into a written figure which the next person reads, is the single most useful minute in the cycle.**'));
out.push(p('⚠ **Remedy 3 is the one to spend time on, because it is the shape of most real remedies.** ⚠ *Do not count on the apron* **meets a man with a lorry on the apron at one in the morning and a driver waiting, and he does what he did before and writes nothing.** ⚠ **The general form: a remedy aimed at a person fails the test almost always.** **Ask the class what would have to be true for such a rule to work, and steer them to the answer: a document, a place or a thing** — **never a resolution.**'));
out.push(p('⚠ **And the last line of the track is the one to quote when a learner lists remedies without testing them:** ⚠ *a root-cause paper that lists three remedies and tests none of them is a wish list with evidence at the front.*'));
out.push(p('**Language box – Practise (sample, three remedies tested):**  _**1 A spare drive coupling kept in the store.** ⚠ *Had we had one in April, the plater would have been down two days instead of eleven.* ⚠ **Prevents most of it.** **Cost: about sixty thousand, once.**   **2 A standing booking with the plater for the first week of every month.** ⚠ *Had it existed in April, we would have been in the queue before the breakdown rather than after it.* ⚠ **Prevents** — **and it is free.**   **3 The yard to telephone the plater weekly to ask if it is working.** ⚠ *Had the instruction existed, the yard would have telephoned for three weeks and then stopped, as it did with the tyre book.* ⚠ **Fails** — **a rule aimed at a person.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'My remedy is that the yard telephones the plater every Monday to check it is running.'],
  ['B', 'It is Monday morning. Two lorries are loading and the office wants the Tannous order out. Who telephones?'],
  ['A', 'Whoever is free.'],
  ['B', 'Nobody is free on a Monday morning. Run it backwards through April.'],
  ['A', 'Had the instruction existed in April… somebody would have telephoned for the first two or three weeks.'],
  ['B', 'And then?'],
  ['A', 'And then it would have gone the way of the tyre book. Nobody would have telephoned on the Monday before the coupling failed.'],
  ['B', 'So it fails. What would have to be true for it to work?'],
  ['A', 'It would have to not be a telephone call. The plater would have to tell us.'],
  ['B', 'Which is a thing, not a resolution. Write that one instead.'],
]));
out.push(note('The move in that exchange is to put the person back in the moment with everything that was also true at the time — two lorries loading, an order waiting, one in the morning, a driver at the gate. A remedy that is an instruction to a person always sounds reasonable in a meeting and almost never survives being placed in the actual minute it would have had to work in. Teach the question rather than the verdict: what else was that person doing? Learners who learn to ask it stop proposing rules aimed at people within about two cycles, which is the most durable behaviour change in Unit 7.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **The three remedies, each marked prevents, catches or fails, and what would have to be true for the failing one to work.** ⚠ **The answer to that last part is always a document, a place or a thing** — **and where a class produces another resolution instead, that is the moment to say so.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The remedy', 'Run backwards: what would have happened', 'Prevents · catches · fails', 'What would make it work'], [
  ['**a spare coupling in the store**', '⚠ **two days down instead of eleven**', '⚠ **prevents most of it**', '—'],
  ['**a standing monthly booking with the plater**', '⚠ **we would have been in the queue before the breakdown**', '⚠ **prevents** — **and free**', '—'],
  ['**the yard to telephone weekly**', '⚠ **telephoned for three weeks, then stopped, as with the tyre book**', '⚠ **fails** — **aimed at a person**', '⚠ **the plater tells us, not we ask**'],
  ['**a note on the order sheet when the plater is in use**', '⚠ **April would still have happened and May would have been seen coming**', '⚠ **does not prevent; catches**', '—'],
], [1.4, 2.3, 1.3, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**Remedy two prevents, because a standing booking would have put us in the queue before the breakdown instead of after it. Remedy four does not prevent and catches, because the note would have made the next month visible. And remedy three fails, because a weekly telephone call aimed at the yard would have lasted three weeks, as the tyre book did.**_'));
out.push(p('⚠ **Both listener counts are worth collecting on the board.** **How many failing remedies were instructions to a person: usually all of them.** ⚠ **How many have already been in force for a year: usually at least one** — **and that is the finding of the stage, because a remedy that has been in force for a year and would not have prevented the thing is still being counted by somebody as having fixed it.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **Because a remedy aimed at the proximate cause has to beat a man at two in the morning with a lorry waiting, and a remedy aimed at the distal cause has to beat a drawing.** ⚠ **Remedy 4 costs a pen and a habit; the 2023 change would have gone on a reissued drawing, somebody would have compared 1,150 with 1,200, and the second half of the decision would have been checked in 2023.** **The writer says it is not a coincidence and not luck, and she is right.**'));
out.push(p('**2**  ⚠ **Because it converts an estimate into a written figure, and a written estimate is read by the next person** — **so March would have been visible in April instead of in May.** ⚠ **A remedy that catches is not a failed remedy, and a paper has to say which it is.** **She would have dropped it a month earlier and calls it the second most valuable of the four.**'));
out.push(p('**3**  ⚠ **Because a reader who sees three remedies and no mention of the obvious expensive one assumes the writer has not thought of it.** **Four hundred thousand and nine per cent a pallet for ever, to fix a thing that remedy 4 fixes with a pen** — ⚠ **and saying so is what makes the recommendation against it credible.**'));
out.push(stage('6', 'Write with help – sample (154 words)'));
out.push(sample(null, [
  '**THE APRIL PLATER — THE REMEDIES, TESTED. 8 May. L. Barakat. Part 2, section B.**',
  '**1** **A spare drive coupling in the store.** | ⚠ **two days down instead of eleven** | ⚠ **prevents most of it** | ⚠ **about sixty thousand, once**',
  '**2** **A standing booking for the first week of each month.** | ⚠ **we would have been in the queue before the breakdown rather than after it** — **so prevented** | ⚠ **prevents** | ⚠ **nothing**',
  '**3** **The yard telephones the plater weekly.** | ⚠ **telephoned for three weeks and then stopped, as the yard did with the tyre book, because a Monday morning has two lorries on it** | ⚠ **fails** — **a rule aimed at a man** | **nothing, and it would be in force and useless**',
  '**4** ⚠ **A note on the order sheet whenever an order needs the plater.** | ⚠ **April would still have happened and May would have been seen coming** | ⚠ **does not prevent; catches** | ⚠ **a line on a form**',
  '⚠ **Remedy 2 is free and prevents, and it is the one nobody has proposed in four years.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A backwards run in the third conditional for every remedy', '⚠ **✗** — **rows 1 and 4 state a result without *had we*; the run is implied and not written**'],
  ['A cost column beside the verdict', '**✓**'],
  ['A remedy that catches, labelled as catching', '**✓** — **row 4**'],
  ['The failing remedy named, and said to be the likely one', '⚠ **✗** — **row 3 is named and the sample does not say it would have been adopted**'],
  ['The expensive remedy mentioned although not recommended', '**✓** — **row 1**'],
], [5, 1]));
out.push(note('Both failures in that checklist are the normal ones. The third conditional goes missing from the short rows because a table invites compression, and the answer is not to lengthen the table but to make the backwards run a full sentence in the paragraph under it — a verdict with no run behind it is an opinion, and a reader cannot tell a tested remedy from a listed one. The second failure is the more interesting: learners will name the failing remedy and leave out that it is the one that would have been adopted. That sentence is what makes the paper useful rather than correct, because the paper is being written to stop a free, plausible, person-aimed rule being passed in June. Collect this line and read two or three out.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class says whether the failing remedy is an instruction to a person, and in most cases it is.** ⚠ **Where a learner has a failing remedy that is not** — **a thing, a place or a document that still would not have worked** — **read it to the room, because those are rarer and more instructive: usually the thing exists and nobody reads it, which is 7.4 meeting Unit 5.**'));
out.push(stage('7', 'Write freely – sample (233 words)'));
out.push(sample(null, [
  'After the tyre on the Homs road, the fix was a defect book in the cab. It has been there for two years and it would not have prevented the tyre.',
  'What went wrong was that a tyre was reported by the driver on a Tuesday and was still on the van three weeks later. What was done was that a defect book was bought and put in the cab, and drivers were told to write defects in it.',
  'Run it backwards. Had the book been in the cab that Tuesday, the driver would have written the tyre in it, as he in fact told the yard about it. The book stays in the cab. The yard does not read the cab. The office does not see the cab from one month to the next. So the tyre would have been written down, correctly, in a book nobody opens, and it would still have been on the van three weeks later.',
  'Nobody has noticed, because the book exists and has entries in it, and a book with entries looks like a system working.',
  'What would have worked is the opposite movement: the defect leaves the van instead of being recorded in it. A sheet handed in with the keys, and no keys back without the sheet. That would have put the tyre in front of the office on the Tuesday, which is the only place where a tyre can be ordered.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *was the fix an instruction to a person* question is answered yes in nearly every text**, **and the sample shows the harder variant: a fix that is a thing (a book) whose use is an instruction to a person (write in it, read it).** ⚠ **That distinction is worth teaching explicitly** — **a thing that requires somebody to remember to read it is a rule wearing a thing\'s clothes.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three fixes to be instructions to people, and the same thing to have happened again since the fix in two of three.** ⚠ **The sentence to close on, and it is the hardest one in the unit: a fix with entries in it looks like a system working, and is the most expensive kind of failure because nobody ever revisits it.**'));

// ===================== 7.5 =====================
out.push(pb());
out.push(h2('7.5  Refusing the single cause'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Almost everybody has answered *so what caused it* with one thing, and about half will say they named the thing that was easiest to say rather than the thing they believed.**'));
out.push(p('**b**  ⚠ **The second.** *The pallets* **is a contributor presented as the cause and will be refuted by anybody who remembers February.** ⚠ **The second refuses the single cause, gives the occasion, labels it, and names the number of contributors** — **one thing, true, and countable.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **A contributor is a thing that was already there; an occasion is the thing that happened that day.**  2 ⚠ **The occasion, called the occasion, with the number of contributors named** — *the lorry came three hours early, which is what set it off; three other things made it possible and they are in the paper.*'));
out.push(p('⚠ **Nadia\'s second line is the one that lands, and it should be read twice:** ⚠ *he will say yes, but what caused it, and you will say it again, and he will write down **they would not say**.* **A class that has met that sentence stops defending *no single cause will carry this* as an answer within a minute.**'));
out.push(p('⚠ **The reason the refusal fails is not about causation at all, and it is the cycle\'s real content:** ⚠ **the questioner does not want a cause. He wants one thing to say to somebody else.** **He has his own manager.** ⚠ **Ask the class what Mr Dallal\'s man is going to do in the four minutes after the call, and the answer** — **walk into an office and repeat one sentence** — **makes the whole of 7.5 obvious.**'));
out.push(p('⚠ **The test is one question and it is worth drilling until it is automatic:** ⚠ *what was different about that day?* **All three contributors were present in February and nothing went short.** ⚠ **And the consequence, which learners find counter-intuitive: the occasion is the least interesting of the four and it is the one everybody asks for.** **Remove the lorry and the other three are still loaded, and the next early lorry is in June.**'));
out.push(p('**Language box – Practise (sample):**  _**The failure:** two Ghouta customers got no delivery on Monday 15 February. ⚠ **The contributors:** the run lives in one man\'s head · there is no written list of which customers take Mondays only · a hired van is booked by telephone with no written reply. ⚠ **The occasion:** the hire company sent no van. ⚠ **The telephone answer:** *the hire company sent no van on the Monday, which is what set it off; three other things made it possible and they are in the paper.*_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'What caused it?'],
  ['A', 'No single cause will carry it.'],
  ['B', 'Yes, but what caused it?'],
  ['A', 'It is genuinely four things.'],
  ['B', 'I am writing down that you would not say. I have to tell my manager something in ten minutes.'],
  ['A', 'Then: the hire company sent no van on the Monday, which is what set it off. Three other things made it possible and they are in the paper.'],
  ['B', 'Better. Which of the three was already there?'],
  ['A', 'The run living in one man\'s head, no written list of the Monday-only customers, and a van booked by telephone with nothing in writing.'],
  ['B', 'And all three were there in January?'],
  ['A', 'All three, and the January runs were fine. The van is the only thing that was different.'],
]));
out.push(note('Two things to watch in this pair work. The first is that learners who have understood 7.1 to 7.4 properly are the ones who resist hardest here, because they have just spent four cycles learning that one cause is a lie — and 7.5 appears to ask them to tell it. The answer is in the track and should be said plainly: the telephone call gives the occasion and says the contributors are in the paper, which is one answer at two lengths and not two answers. Nothing in the paper contradicts the call. The second is the opposite failure, the learner who gives the occasion and stops. Without "three other things made it possible and they are in the paper", you have handed over a single cause and the reader now believes he has the whole answer — which is worse than the refusal, because it is wrong rather than merely unhelpful.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **The contributors, the occasion, and the one-sentence telephone answer** — **checked for the number of contributors.** ⚠ **The number is what learners drop, and it is the eleven words that stop a reader believing he has been given the whole answer.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What went wrong', 'Contributors — already there', 'The occasion — different that day', 'The telephone answer'], [
  ['**two Ghouta customers got no delivery**', '⚠ **the run is in one man\'s head · no written list of Monday-only customers · a van booked with no written reply**', '⚠ **the hire company sent no van**', '⚠ *the hire company sent no van, which is what set it off; three other things made it possible and they are in the paper*'],
  ['**the April invoice went out wrong**', '⚠ **the invoice is typed from a sheet · there is no check against the order · one person does a month**', '⚠ **the March sheet was still on the desk**', '⚠ *last month\'s sheet was still on the desk, which is what set it off; three other things made it possible*'],
  ['**eleven cartons short in March**', '⚠ **narrow pallets · no column on the sheet · no record of where counts are made**', '⚠ **the lorry came three hours early**', '⚠ *the lorry came three hours early, which is what set it off; three other things made it possible and they are in the paper*'],
], [1.3, 2.1, 1.8, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**The contributors were that the run lives in one man\'s head, that there is no written list of the Monday-only customers, and that a hired van is booked by telephone with nothing in writing. The occasion was the hire company sending no van, because that is what was different about that Monday. And on the telephone I would say: the hire company sent no van, which is what set it off, and three other things made it possible and they are in the paper.**_'));
out.push(p('⚠ **The two counts here produce the sharpest finding in the cycle.** **How many occasions were somebody else\'s doing** — **a supplier, the weather, a customer: usually most of them.** ⚠ **How many of the contributors were the speaker\'s own organisation\'s: usually all of them.** ⚠ **Say that out loud.** **The occasion is nearly always external and the contributors are nearly always ours, which is why a company that answers *what caused it* with the occasion alone never improves.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **That no contributor caused it.** **All three were present in February 2024, in January, and in every month since April 2023, and nothing went short in any of them.** ⚠ **The proof is three words repeated** — *yes, yes, yes* — **which is why it has to be a column and not a sentence.** ⚠ **And the page then clears the occasion as well: the lorry has come early before and nothing went short, because the count was made inside.**'));
out.push(p('**2**  ⚠ **_The lorry came three hours early, which is what set it off. Three other things made it possible and they are set out below._** ⚠ **Twenty-six words, true, and first on the page** — **for the reader who reads four lines.** **Unit 1 is why: the first four lines are what a busy reader has, and what they contain is a decision about what he will know.**'));
out.push(p('**3**  ⚠ **That the second contributor has been there since 1998 and nobody has ever noticed.** ⚠ **It is true and it is the oldest fault in the building**, **and in a paper to a customer it reads as *we have been like this for twenty-seven years*** — **a sentence about us and not about his eleven cartons.** ⚠ **It goes in the internal version, at the top, where it belongs.**'));
out.push(stage('6', 'Write with help – sample (149 words)'));
out.push(sample(null, [
  '**THE FEBRUARY GHOUTA RUN — WHY THERE IS NO SINGLE CAUSE. 22 February. L. Barakat. The summary page, for the two customers.**',
  '⚠ **The occasion: the hire company sent no van on Monday 15 February.** **That is what was different about that Monday, and it is the only thing that was.**',
  '**1** **the run exists in one man\'s head** | **always** | ⚠ **yes**',
  '**2** ⚠ **no written list of which customers take Mondays only** | ⚠ **always** | ⚠ **yes**',
  '**3** ⚠ **a hired van is booked by telephone with no written reply** | ⚠ **since 2022** | ⚠ **yes**',
  '⚠ **The right-hand column is the whole argument and it is three words repeated.** ⚠ **Nothing went wrong in January, in December or in any month of 2023.** **So no contributor caused this, and the occasion did not cause it either** — **a hired van has failed to arrive before and nothing was missed, because Fadi was driving and knew the two addresses.**',
  '⚠ **What caused it is the four together, and that sentence is useless on a telephone.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *present when nothing went wrong* column, answered yes throughout', '**✓**'],
  ['The occasion cleared as well as the contributors', '⚠ **✓** — *a hired van has failed before and nothing was missed*'],
  ['A four-line version at the top, in bold', '⚠ **✗** — **the sample has the occasion first but no twenty-six-word version for the four-line reader**'],
  ['A true thing left out, with where it goes instead', '⚠ **✗** — **nothing is held back, and *the run is in one man\'s head* is exactly the sentence a customer should not read**'],
  ['The number of contributors named in the short version', '⚠ **✗** — **there is no short version to name it in**'],
], [5, 1]));
out.push(note('Three failures out of five, and in the series\' own trial that was the normal profile for this stage, so do not treat it as a weak class. The reason is that the summary page and the four-line version are two documents in one task, and learners who have built the table properly consider themselves finished. The remedy is mechanical: make them write the twenty-six words last and read only those aloud. If the class cannot tell from four lines what happened and that there is more, it is not a summary page. The fourth line is worth a separate minute — the thing a learner most wants to say in this document, because it is the truest and most structural, is usually the thing about themselves rather than about the customer\'s loss, and it belongs at the top of the internal version.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class checks the four-line version for three things: one thing, labelled, and the number of contributors.** ⚠ **Twenty-six words is the target and twenty of those are the occasion** — **so the eleven-word second sentence has to be written first and defended, or it goes.**'));
out.push(stage('7', 'Write freely – sample (229 words)'));
out.push(sample(null, [
  'In August a customer asked why her order was short and the office told her the store had miscounted. One cause, one department, and she accepted it, and nothing changed.',
  'What was asked was simple enough: why is this short. It was asked by the customer\'s own storeman, on the telephone, to whoever answered. What was answered was that the store had miscounted, which was true, and was the whole of the answer given.',
  'The contributors were three and they were all ours. The order was taken by telephone and written on a pad, not on an order form. The pad entry had no carton count, only a number of pallets. And the store counts to the pallet and not to the carton, because the pad is what the store is given.',
  'So the store had miscounted in the sense that the figure was wrong, and in no other sense: it counted pallets correctly and nobody had ever asked it for cartons.',
  'What happened next is the reason this is worth writing down. The answer named a department, so the remedy was aimed at the store — a second count on short orders, which has been in force since September and has found nothing, because there was nothing in the store to find. The pad is still a pad. And the same thing happened again in November, to a different customer, and was again explained as a miscount.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *contributor or occasion* question is the one to read aloud from two or three texts**, **and the sample shows the commonest and most expensive pattern: a contributor named as the cause, a department named with it, and a remedy aimed at that department which then finds nothing for a year.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three single causes to be contributors rather than occasions, and in both of those the remedy to have been aimed at the contributor and the thing to have happened again.** ⚠ **The sentence to close on: naming a department in answer to *what caused it* is the most expensive sentence in business English, because the remedy follows the name.**'));

// ===================== 7.6 =====================
out.push(pb());
out.push(h2('7.6  The link you cannot evidence'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The answer to *how is it known* is almost always a person**, **and in about a third of cases the person named has left or has never been asked directly.**'));
out.push(p('**b**  ⚠ **The second belongs inside the chain.** ⚠ **A footnote is met after the reader has already believed the sentence or disbelieved it, and a footnote cannot un-persuade.** **The dash puts the claim and its warrant in the same breath.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **It was deleted.** **The paper does not claim it at all** — **what she has is an invoice of 3 April 2023 and a man who left in July 2024, with no minute, no note and no telephone record.**  2 ⚠ **Write the two documents and the absence:** *the dimension changed between February and April 2023; there is no record of how.*'));
out.push(p('⚠ **The first exchange of the track is three lines long and settles a question learners bring from school.** ⚠ *Where does a reader meet a footnote?* **At the bottom** — **after he has decided.** ⚠ **A footnote cannot un-persuade.** **Everything else in the cycle follows from that one fact about where a reader\'s eyes are.**'));
out.push(p('⚠ **The invented conversation is the cycle\'s hard case and the reasoning is not about honesty, it is about exposure.** ⚠ **A conversation invented to join two documents is the one claim in a root-cause paper that can be shown to be false**, **and it will be shown by the one person who was on the other end of it** — **here the pallet supplier\'s clerk, who is still there.** ⚠ **Ask the class who could disprove each of their own weak links.** **Where somebody can be named, delete the link; where nobody can, it is an inference and may stay, marked.**'));
out.push(p('⚠ **And the last line is the one the unit exists to earn:** ⚠ *the gap in the chain IS the finding. Stop trying to close it.* **A decision was taken and there is no record of how is stronger than a conversation you cannot produce, and it is what the remedy answers.** ⚠ **Learners experience losing the link as losing ground.** **They have in fact exchanged a sentence that can be refuted for a finding that cannot.**'));
out.push(p('**Language box – Practise (sample, three links):**  _**1** The two customers were never told the run had moved — ⚠ **Fadi\'s account; there is no record of what a customer is told.** **(One account, in the sentence.)**  **2** The office assumed the hire company had replied, ⚠ **which I infer from the booking slip being filed as confirmed and nobody has stated it.** **(Inference, in the sentence.)**  **3** ⚠ **A conversation in which the hire company agreed the Monday** — **deleted.** ⚠ **What I have is a booking slip and no reply.** **The paper says the slip was filed as confirmed and that there is no reply on the file** — ⚠ **and the gap is the finding.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I have written that the hire company agreed the Monday on the telephone on the 9th.'],
  ['B', 'What do you have?'],
  ['A', 'A booking slip dated the 9th, filed as confirmed.'],
  ['B', 'And for the agreement?'],
  ['A', 'Nothing. No note, no reply on the file, nothing in their letters.'],
  ['B', 'So you have a slip and an inference, and you do not have a conversation.'],
  ['A', 'Somebody must have telephoned. The slip says confirmed.'],
  ['B', 'Who could prove you wrong?'],
  ['A', '…Their own clerk. She would have a call log, and she still works there.'],
  ['B', 'Then delete it. Write that the slip was filed as confirmed and that there is no reply on the file.'],
  ['A', 'Which is a weaker sentence.'],
  ['B', 'It is a sentence their clerk cannot contradict, and it is the finding anyway.'],
]));
out.push(note('The named refuter is the practical test in this cycle and it is more useful than any rule about honesty, because it is checkable. Ask of every unevidenced claim: who is alive, reachable and in a position to say that this is not what happened? Where the answer is a person — a supplier\'s clerk, a driver, a customer\'s storeman — the claim is a liability and should be deleted, however likely it is. Where the answer is nobody, the claim is an inference about what the documents imply and may stay in the paper with "which I infer and nobody has stated" attached. Learners find this a relief: it replaces a judgement about their own integrity, which is uncomfortable, with a question about who else was in the room, which is answerable.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **The link with its warrant inside the sentence, what the speaker had instead of the conversation, and the sentence that replaces it.** ⚠ **The replacement is always two documents and an absence**, **and it is always shorter than what it replaced.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What I believe', 'What I actually have', 'The sentence, with its warrant inside', 'Is the gap the finding?'], [
  ['**the two customers were never told the run had moved**', '**Fadi\'s account, given on 16 February**', '⚠ *they were not told — Fadi\'s account; there is no record of what a customer is told*', '⚠ **yes** — **the absence of a record is the remedy**'],
  ['**the office took the slip as a confirmation**', '⚠ **the slip, filed under confirmed bookings**', '⚠ *the slip was filed as confirmed, from which I infer it was treated as a reply*', '**no** — **an inference, marked, and it may stay**'],
  ['**the hire company agreed the Monday by telephone**', '⚠ **nothing. A slip and no reply.**', '⚠ **deleted. The paper says the slip was filed as confirmed and there is no reply on the file.**', '⚠ **yes** — **and their clerk could have disproved the original**'],
  ['**nobody read the February run sheet before the 15th**', '⚠ **the sheet, unsigned in the initials box**', '⚠ *the initials box is empty, from which I infer it was not read*', '**no** — **an inference, and nobody can refute it**'],
], [1.4, 1.4, 2.4, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**I believe the hire company agreed the Monday on the telephone. What I have is a booking slip filed as confirmed and no reply anywhere on the file. My sentence is that the slip was filed as confirmed and that there is no reply on the file. And the gap is the finding, because a booking treated as confirmed with nothing in writing is the thing that will happen again in March.**_'));
out.push(p('⚠ **The two counts are worth collecting.** **How many beliefs had an unminuted conversation in them: usually most.** ⚠ **How many of those conversations could be confirmed by asking one person this week: usually most of those** — **which is the stage\'s real finding and should be set as the homework it already is.** **A conversation that can be confirmed by asking somebody this week is not an unevidenceable link; it is an unmade telephone call.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **Row 3** — **the telephone conversation of on or about 9 March 2023 in which the narrower pallet was agreed.** ⚠ **The pallet supplier\'s clerk, who was on the other end of it and is still there, could have proved it false.**'));
out.push(p('**2**  ⚠ **Because with the conversation the chain reads *a decision was taken on the telephone and nobody wrote it down*, and without it the chain reads *the dimension changed and there is no record of how*** — ⚠ **which is the finding, and which no amount of asking the supplier\'s clerk would change.** **The writer says she did not expect that, which is worth pointing out: the paper got stronger by losing a sentence.**'));
out.push(p('**3**  ⚠ **The page is in the internal version only, at the back** — **Bassel\'s view was that a paper does not advertise its own weaknesses to a customer, and the key agrees with him about a customer.** ⚠ **The four admissions themselves are in their sentences in both versions**, **because that is where a reader meets them whether a page like this exists or not.**'));
out.push(stage('6', 'Write with help – sample (152 words)'));
out.push(sample(null, [
  '**WHAT I CANNOT EVIDENCE. 24 February. L. Barakat. The page for the internal version only.**',
  '**1** **the two customers were never told the run had moved** | **Fadi\'s account, 16 February** | ⚠ **in the sentence, in a dash: *— Fadi\'s account; there is no record of what a customer is told***',
  '**2** **the slip was treated as a reply** | ⚠ **nothing. It is filed under confirmed bookings and nobody has said so.** | ⚠ **_which I infer and nobody has stated_**',
  '**3** ⚠ **a telephone call on 9 February in which the hire company agreed the Monday** | ⚠ **a booking slip and no reply. No note, no letter, no entry in the day book.** | ⚠ **it does not appear. The paper says the slip was filed as confirmed and that there is no reply on the file.**',
  '⚠ **Row 3 is the one I wrote and deleted.** ⚠ **What I have is a slip and an inference** — **and the somebody who could prove it false is their own clerk, who is still there.**',
  '⚠ **And the paper is better without it.** **With it, we were let down. Without it, we confirmed a booking to ourselves.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *how it appears in the paper* column for every claim', '**✓**'],
  ['A deleted claim, with its possible refuter named', '**✓** — *their own clerk*'],
  ['Why the paper is better without it', '⚠ **✓** — ***with it, we were let down; without it, we confirmed a booking to ourselves*** — **nineteen words and it is the best line in the sample**'],
  ['This page internal, and the admissions in both versions', '⚠ **✗** — **the heading says internal and the sample never says where the admissions go**'],
  ['The rule written out', '⚠ **✗** — **dropped, as it is in most of the room\'s work**'],
], [5, 1]));
out.push(note('The third line in that checklist is where to spend the time, because the sample has found in nineteen words what the unit spends six cycles building: with the invented conversation the paper is about somebody else letting us down, and without it the paper is about us confirming a booking to ourselves. One sentence, two completely different documents, and the difference is a claim nobody could evidence. Read it out and ask which of the two papers would change anything in March. The last line, the rule, is dropped by most learners and is worth insisting on, because it is the sentence they will still have in two years: if you cannot evidence a link, say so in the sentence; if you have nothing at all, delete the link and write the absence — because the absence is evidenced and the link is not.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class names who could have proved the deleted claim false** — **and where nobody can, it was an inference and could have stayed, marked.** ⚠ **Expect two or three learners to discover at this point that they have deleted a perfectly good inference and kept a claim with a living refuter in it**, **which is exactly the wrong way round and is the most useful mistake in the cycle.**'));
out.push(stage('7', 'Write freely – sample (227 words)'));
out.push(sample(null, [
  'Everybody in this office knows that the Thursday orders are late because the bank clears late on Thursdays, and I have never seen a document that says so.',
  'How it is known is a chain of people. The office was told it by the previous administrator, who was told it by somebody in accounts, and the person in accounts has retired. Nobody now working here has seen a statement that shows it.',
  'What would settle it is twenty minutes with any three months of statements: the value dates are printed on them, and if Thursday receipts clear on Monday and Wednesday receipts clear on Friday, it is true. The statements are in the file. Nobody has looked, including me, in four years of repeating it.',
  'What the absence tells me is the more interesting part. If it is true, we have organised our Thursday around a bank\'s timetable without ever confirming the timetable. If it is false, we have organised our Thursday around a sentence somebody said in about 2019. Either way the thing we actually have is not a fact about a bank; it is a habit with a story attached to it.',
  'And the sentence I would write in a paper is not that the bank clears late. It is that the office treats Thursday receipts as clearing late and that there is no document supporting it, which is a finding I can evidence, unlike the clearing.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *is the absence itself a finding* question is answered yes in about two of three texts**, **and the sample gives the general form: what we have is not a fact about the world, it is a habit with a story attached.** ⚠ **That phrase is worth giving the class.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect the absence to be the more interesting finding in two of three, and in all three for nobody to have thought of an absence as a thing that could be written down.** ⚠ **The closing sentence of the cycle, and of the unit\'s method: you cannot write a sentence about a document you do not have, and you can always write a sentence about not having it.**'));

// ===================== 7.7 =====================
out.push(pb());
out.push(h2('7.7  Review & Mediate: the decision whose author has left'));
out.push(stage('1', 'Get ready – Unit 7 quiz'));
out.push(p('**1** ⚠ **The immediate (proximate) cause first, because that is the one the reader was there for; the condition that made it possible second.** ⚠ **The first answers Tuesday and the second answers June.**'));
out.push(p('**2** ⚠ **Document, one account, or inference** — **and the marking goes inside the sentence, in a dash, not in a footnote.**'));
out.push(p('**3** ⚠ **The decision is a fact and the decision-maker is an inference.** **The decision goes in the paper with its dates and its sources; the maker does not, above all when he has left and cannot answer.**'));
out.push(p('**4** ⚠ **A remedy that prevents would have stopped the event; a remedy that catches would not, and would have made the event visible at the next occurrence.** **Both are good and they are not the same, and a paper that does not label them gets both rejected.**'));
out.push(p('**5** ⚠ **One question: what was different about that day?** **A contributor was already there; the occasion happened that day.**'));
out.push(p('**6** ⚠ **The two documents and the absence** — *the dimension changed between February and April 2023; there is no record of how* — ⚠ **and never a conversation invented to join them.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That he put four of them against the rack in April 2023, measured them with the yard rule, and told Mr Jallad they were short** — **and was told they were cheaper and fitted the lorry, which was true.**  2 ⚠ **That he asked for it three times** — **Mr Jallad twice and the office once** — **and that none of it is in writing, because you do not write to a man you see at the gate every morning.**'));
out.push(p('⚠ **This track does three things and the third one is the hardest thing in Book 1.**'));
out.push(p('⚠ **First, it tells you what a man in a chain reads for.** **Four papers in nineteen years, every one saying a count was hurried, his the only name in any of them** — ⚠ **so he reads the fifth for his own name before he reads anything else.** **That changes nothing in the paper and everything about whether he will talk to you, which is why the chain is read aloud to the people in it before it goes anywhere.**'));
out.push(p('⚠ **Second, it converts an absence into a refusal.** **The paper says there is no record of where a count is made, which is true.** ⚠ **What it does not know is that somebody asked for the line on the sheet three times and was told it would slow the gate.** ⚠ **An absence with a request behind it is a different finding from an absence with nothing behind it**, **and the remedy changes from *write it down* to *somebody said no*.**'));
out.push(p('⚠ **Third, and this is the one to handle carefully: the second half of the pallet decision WAS checked.** ⚠ **In April 2023, with a yard rule, by the man who racks the store, who told Mr Jallad the pallets were short.** **The check is in nobody\'s writing, including his own.** ⚠ **So a paper that follows the evidence must say nobody checked it** — **and that sentence is correct on the evidence and false in fact.**'));
out.push(p('⚠ **What to do with that is NOT to change the finding, and the class will want to.** ⚠ **The finding is correct on the evidence and the evidence is the paper\'s only claim**; **a finding altered because somebody objected to it is worth nothing, and a reader who learns that findings can be negotiated will negotiate all of them.** ⚠ **What changes is the remedy.** **It is no longer *check the second half* — somebody did.** ⚠ **It is that a check which leaves no record has, for every purpose that matters later, not happened, and what you install is not more checking but a place for a check to be recorded.**'));
out.push(p('**Language box – Practise (sample):**  _I read Fadi the four links and read his link at one speed. Then: what have you told whom, when, and is any of it in writing? ⚠ **Answer: he told the office in November that the two Monday-only customers would be missed if a hired van was ever used, and he told the previous administrator the same thing in 2022.** ⚠ **Nothing is in writing.** **It does not change the finding, which is that there is no written list. It changes the remedy, from *make a list* to *a list was asked for twice and not made*.**_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['A', 'Link two is yours. *The van was booked by telephone and the slip was filed as confirmed — the office\'s account; there is no reply on the file.*'],
  ['B', 'Read it again.'],
  ['A', 'The van was booked by telephone and the slip was filed as confirmed — the office\'s account; there is no reply on the file.'],
  ['B', 'That is the third time the office has been the link in one of these. Who wrote the other two?'],
  ['A', 'I do not know. They were before me.'],
  ['B', 'Then you do not know that the office has been told twice that this would happen.'],
  ['A', 'Told by whom?'],
  ['B', 'By me, in November, and by Fadi in 2022. Neither of us wrote it down, because you do not write a memorandum to the person at the next desk.'],
  ['A', 'So the finding stands and the remedy is wrong.'],
  ['B', 'The remedy says make a list. What happened is that a list was asked for twice and not made. Those are different papers.'],
]));
out.push(note('Pair 2 is where the mediation lesson becomes concrete, and the sentence to draw out of it is the one about the memorandum to the person at the next desk. Every company builds, over twenty years, a complete record of its documents and no record at all of its conversations, for the entirely sensible reason that nobody writes to somebody they see every morning. The consequence is that a paper written from the evidence — which is the only kind worth writing — will systematically miss the requests, the warnings and the checks, and will therefore systematically recommend "write it down" where the correct finding is "somebody said no". Reading the chain aloud to the people in it is the only available instrument for finding that out, and it takes fifteen minutes. Make the point that this is not a courtesy to the people in the chain. It is the last piece of evidence-gathering, and it is the only piece that cannot be done at a desk.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **What the person in the link added, and whether it changes the finding or the remedy.** ⚠ **The answer is almost always the remedy**, **and the class should be able to say why: the finding is what the documents support, and a conversation adds no document.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I read it to', 'What they added', 'Is it in anybody\'s writing?', 'Finding or remedy?'], [
  ['**Fadi, who drives the run**', '⚠ **he told the office in November that the Monday-only customers would be missed if a hired van was used**', '⚠ **no** — **he said it at the desk**', '⚠ **the remedy** — **from *make a list* to *a list was asked for and not made***'],
  ['**the office administrator before me**', '⚠ **the hire company has never replied in writing to any booking, in three years**', '⚠ **partly** — **three years of slips with no replies filed**', '⚠ **the finding** — **it is wider than one Monday**'],
], [1.1, 2, 1.4, 1.4]));
out.push(stage('4R', 'Report – mediation'));
out.push(p('_**The paper said there is no written list of which customers take Mondays only. The person in the chain added that he had asked for one twice, in 2022 and in November, which is in nobody\'s writing. It changes the remedy, and the finding still stands because the finding is what the documents support and a conversation at a desk adds no document.**_'));
out.push(p('⚠ **The word list reaches forty-two items with this unit\'s six:** ⚠ **_a proximate cause · a distal cause · a causal chain · an unevidenced link · a contributor · a counterfactual test_.** **Collect them on the board under the thirty-six from Units 1 to 6, and say that it runs to Unit 12 and to seventy-two.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(p('⚠ **B2 Business Vantage Reading Part 3** — **multiple choice on one longer text, six questions, four options.** **The second Part 3 in this book.**'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6'], [['Answer', 'C', 'B', 'A', 'B', 'C', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Four of the six are answered inside one sentence of the text and two of those use the text\'s own words**, **which is normal for Part 3 and is why locating beats reasoning.** ⚠ **Q1: *what two people said to each other in a yard* is in the second paragraph, almost verbatim.** ⚠ **Q3 is the one candidates get wrong by being reasonable** — **option B, *it should be done where the objection is reasonable*, is what a sensible manager believes, and the text says the opposite in two sentences: a finding altered because somebody objected is worth nothing, and a reader who learns findings can be negotiated will negotiate all of them.**'));
out.push(p('⚠ **Q6 is the question to teach from.** **It asks what the whole note argues for, and three of its four options** — **longer papers, more documents, interviewing former employees** — **are things the note mentions or implies.** ⚠ **A global question is answered from the last sentence and the first, not from the middle**, **and here the last sentence names it: reading a chain aloud to the people who are in it before it goes anywhere at all.**'));
out.push(stage('6', 'Write with help – sample exam answer (45 words)'));
out.push(sample(null, [
  '**Mr Ayoub — the April consignment reached Beirut two weeks late.** ⚠ **The plater was out of service from 2 to 13 April, which is what set it off.** ⚠ **Three other things made it possible and they are in the paper, which goes to you on Friday.**',
]));
out.push(p('⚠ **Forty-five words, three content points, and the three are: the figure (two weeks late) · the occasion, labelled (*which is what set it off*) · and where the rest of the explanation is (the paper, Friday).** ⚠ **The eleven words that do the examination work are *three other things made it possible and they are in the paper*** — **they name the number of contributors without listing them, which is the only way to fit 7.5 into forty-five words.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What happened, as a figure', '**✓** — *two weeks late*'],
  ['The occasion, and the word *occasion* or *set it off*', '**✓** — *which is what set it off*'],
  ['The number of contributors, not a list of them', '⚠ **✓** — *three other things*'],
  ['Where the rest of the explanation is', '**✓** — *in the paper, which goes to you on Friday*'],
  ['40 to 50 words — count them', '**✓** — **45**'],
], [5, 1]));
out.push(note('Two marking notes for Part 1. First, a candidate who lists the three contributors will run to seventy words and lose marks for length while believing they have been more helpful; the examination is testing selection, and the eleven-word device is the thing to drill. Second, and this is the one that costs marks silently: "it is complicated" scores nothing in any paper at any level, and it is exactly what a candidate writes when the word limit frightens them. Say so, and say that the cure is the labelled occasion — one thing, true, and named as the thing that set it off.'));
out.push(stage('7', 'Write freely – sample (236 words)'));
out.push(sample(null, [
  'The Thursday banking story is a check that is in nobody\'s writing, and I only found that out by reading it to somebody.',
  'The office treats Thursday receipts as clearing late, and I wrote in a paper that there is no document supporting it. Before the paper went, I read that line to Nadia, who has done the banking since 2019.',
  'What she told me is that she checked it. In about 2020 she took three months of statements and went through the value dates, because she did not believe it either, and she found that Thursday receipts did clear on the Monday. She told the previous administrator, at the desk, and nobody wrote any of it down, including her.',
  'So the check happened, by the person who does the banking, with the statements in front of her, and there is no record of it anywhere. My paper says there is no document supporting the practice, which is true, and it implies that nobody has ever checked, which is false.',
  'I have not changed the finding, because the finding is what the file shows and the file shows nothing. What I have changed is the recommendation. It no longer says somebody should check the clearing times. It says that a check which leaves no record has, for every later purpose, not happened — and that what the office needs is not another check but a line in the banking file where a check can be written down.',
]));
out.push(p('⚠ **This is the sample to read aloud if only one is read, because it is 7.7 happening to a learner\'s own paper**, **and it ends in the right place: the finding unchanged, the remedy rewritten, and the rewritten remedy cheaper than the one it replaced.**'));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 7 check'));
out.push(p('**A  Language — the answers.**'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'a', 'b', 'b', 'a', 'a', 'b', 'c']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('⚠ **Q3 is the inverted third conditional and it is the one to teach from:** *had we had wider pallets, we would still have been eleven short.* **No *if*, and the auxiliary comes first** — ⚠ **and it is the form 7.4 uses for every backwards run, because it is shorter and it reads as a test rather than as a regret.** ⚠ **Q6 is *set it off*, the phrasal verb of 7.5, and the past form of *set* is *set*.** ⚠ **Q7 is the collocation *no record of* and it is worth a minute: learners write *no record for* and *no record about*, and the examination tests exactly this in Reading Part 4.** ⚠ **Q8 is the reduced relative** — *a remedy aimed at a person* — **and the whole of 7.4 is in the participle.**'));
out.push(p('**B  Listening (Track 7.15).**   **How many papers, over how long:** ⚠ **four, over nineteen years** — **2019, two in 2021, one last August.**   **Whose name was in them:** ⚠ **Abu Yasser\'s** — **the only name in any of them.**   **What this paper says instead:** ⚠ **that there is no record of where a count is made.**   **What he asked for, how many times, of whom:** ⚠ **a line on the gate sheet, three times** — **Mr Jallad twice and the office once.**   **What he did in April 2023:** ⚠ **put four of the new pallets against the rack, measured them with the yard rule, and told Mr Jallad they were short.**   **Why none of it is in writing:** ⚠ **you do not write to a man you see at the gate every morning.**'));
out.push(p('**C  Reading.**  ⚠ **Remedy 4** — **the rack drawing revised in ink, dated and reissued whenever a stated dimension changes.** ⚠ **It reaches the distal cause because the 2023 change would have gone on a reissued drawing, somebody would have compared 1,150 with 1,200, and the second half of the decision would have been checked in 2023.** ⚠ **It is the cheapest because a remedy aimed at the proximate cause has to beat a man at two in the morning with a lorry waiting, and a remedy aimed at the distal cause has to beat a drawing** — **a pen and a habit against four hundred thousand.** ⚠ **And the one that would have been adopted is remedy 3**, **the rule that counts are made inside: it costs nothing, it sounds like an answer, it would be in force by June** — **and it fails, because it would be the fourth rule in the building aimed at what a man does at two in the morning with a driver waiting.**'));
out.push(p('**D  Writing – sample (88 words).**'));
out.push(sample(null, [
  '⚠ **The immediate cause was that the hire company sent no van on Monday 15 February.** ⚠ **The condition that made two customers miss a delivery rather than one is that the Monday-only customers exist on no written list, so a substitute driver cannot know who they are.**',
  '⚠ **The occasion was the missing van, and three other things made it possible.**',
  '⚠ **Had the list existed on 15 February, the substitute would have had the two addresses and both deliveries would have gone out, three hours late.**',
]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each.',
  '**B  Listening — 6 marks**, one for each gap. ⚠ **Give the fourth mark only for all three parts** — **a line on the sheet, three times, and Mr Jallad twice and the office once.** **Two of the three is half the finding, because the number is what turns an oversight into a refusal.**',
  '**C  Reading — 4 marks:** remedy 4 (1) · why it reaches the distal cause (1) · ⚠ **why the distal remedy is the cheap one** — **a drawing rather than a man at two in the morning (1)** · ⚠ **and remedy 3 named as the one that would have been adopted (1).**',
  '**D  Writing — 7 marks:** the immediate cause in its own sentence (1) · ⚠ **a condition that explains the amount, not just the fact (2)** · the occasion, labelled, with the number of contributors (2) · ⚠ **one remedy run backwards in the third conditional (2)** — **and no marks for the last two if the run has no result in it.**',
  '**Total 25.** ⚠ **The profile to expect: A and C high, D split in two.** **Learners who have done 7.1 properly write the two causes well and then give a remedy with no backwards run** — ⚠ **which is the fault the harness cannot see and the one that matters, because an untested remedy is where a root-cause paper stops being evidence and becomes a wish list.**',
], C.lteal, C.navy));
out.push(note('Teacher\'s note. Four faults to watch, and the remedy for each. First, the distal cause that is only a second proximate cause. A learner gives two causes, both events, both from the same week, and the paper then answers Tuesday twice and June not at all. The test is one question — does it explain the amount? — and it is worth asking out loud of every pair of causes in the room, because a learner who cannot say how much their condition explains is holding two events. Second, the unmarked chain. Learners believe a chain stated flat looks stronger, and it looks stronger to its author and weaker to a reader. The demonstration is in 7.2 and takes twenty seconds: read a class a four-link chain with nothing marked and ask them to find the weak link, which they will, and then ask what they now think of the two links that were signed documents, which is less than they thought a minute earlier. That retrospective damage is the whole argument for marking, and it cannot be taught by assertion. Third, the remedy aimed at a person. About two thirds of the fixes a class brings are instructions to somebody, and the way to show it is not to argue but to put the person back in the minute: two lorries loading, an order waiting, a driver at the gate, one in the morning. Ask what else that person was doing. A rule that has to beat a man at two in the morning loses, and the question that replaces it is what would have to be true instead — a document, a place or a thing, never a resolution. Watch also for the variant in 7.4\'s free-writing sample, which is the harder one: a fix that is a thing whose use is an instruction, like a defect book in a cab that nobody opens. A thing that requires somebody to remember to read it is a rule wearing a thing\'s clothes. Fourth, and this is the one that will come back in Unit 8 and in both of Book 2\'s audit units: softening a finding because somebody in the chain objected to it. 7.7 is built to produce exactly that pressure, and the pressure is legitimate — Abu Yasser is right, the check did happen, and the paper says it did not. Hold the line and move the remedy. The finding is what the evidence supports; a finding altered because somebody objected is worth nothing, and a class that learns findings are negotiable will negotiate all of them for the rest of the course. What changes is the recommendation: not "check the second half", which somebody did, but that a check leaving no record has for every later purpose not happened, and that what is needed is a place for a check to be recorded. Two practical notes. The 7.6 homework — going through a paper and moving every admission from wherever it is into the sentence it belongs to — is the one task in this unit that changes how learners write everything else, and it is also the one most likely to be skipped because it is editing rather than writing. Collect it. And the 7.7 task, reading a chain aloud to the people in it, is the only piece of evidence-gathering in the unit that cannot be done at a desk; learners will report that it took fifteen minutes and produced something nobody had written down, and in the series\' own trial it did so in every case but one.'));
out.push(sp());
out.push(p('_Next: **Unit 8 — Numbers in Prose**: three years of trading in eleven sentences, and the figure Mr Haddad will ask for on the telephone._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 7 · Answer Key');
module.exports = out;
